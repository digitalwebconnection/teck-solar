import express from "express";
import mongoose from "mongoose";
import Blog from "../models/Blog.js";
import { protectBlogAdmin } from "../middlewares/auth.js";
import { upload } from "../middlewares/upload.js";
import { uploadToCloudinary } from "../config/cloudinary.js";
import { uploadLimiter } from "../middlewares/rateLimiter.js";
import { escapeRegex } from "../utils/security.js";
import logger from "../utils/logger.js";

const router = express.Router();

/**
 * Helper to slugify a string
 */
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

/**
 * Helper to ensure slug is unique
 */
const getUniqueSlug = async (baseSlug, excludeId = null) => {
  let slug = baseSlug;
  let counter = 1;
  while (true) {
    const query = { slug };
    if (excludeId) {
      query._id = { $ne: excludeId };
    }
    const existing = await Blog.findOne(query);
    if (!existing) break;
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  return slug;
};

/**
 * @route   GET /api/blog/stats
 * @desc    Get counts of all, published, draft, and scheduled blogs
 * @access  Public (Used by Admin Dashboard)
 */
router.get("/stats", async (_req, res) => {
  try {
    // Automatically transition any overdue scheduled posts before calculating stats
    await Blog.updateMany(
      {
        status: "scheduled",
        scheduledAt: { $lte: new Date() },
      },
      {
        $set: { status: "published" },
      }
    );

    const [
      total,
      published,
      draft,
      scheduled,
      trashed,
      recentUpdated,
      recentPublished,
      topViewed,
    ] = await Promise.all([
      Blog.countDocuments({ isDeleted: { $ne: true } }),
      Blog.countDocuments({ status: "published", isDeleted: { $ne: true } }),
      Blog.countDocuments({ status: "draft", isDeleted: { $ne: true } }),
      Blog.countDocuments({ status: "scheduled", isDeleted: { $ne: true } }),
      Blog.countDocuments({ isDeleted: true }),
      Blog.find({ isDeleted: { $ne: true } })
        .sort({ updatedAt: -1 })
        .limit(5)
        .select("title slug status updatedAt featureImage readTime category isPinned")
        .lean(),
      Blog.find({ status: "published", isDeleted: { $ne: true } })
        .sort({ date: -1, createdAt: -1 })
        .limit(5)
        .select("title slug status date featureImage readTime category isPinned")
        .lean(),
      Blog.find({ isDeleted: { $ne: true } })
        .sort({ viewCount: -1, createdAt: -1 })
        .limit(5)
        .select("title slug status viewCount date featureImage readTime isPinned")
        .lean(),
    ]);

    // 30-day activity timeline
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const activityData = await Blog.aggregate([
      {
        $match: {
          isDeleted: { $ne: true },
          createdAt: { $gte: thirtyDaysAgo },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    return res.status(200).json({
      success: true,
      stats: {
        total,
        published,
        draft,
        scheduled,
        trashed,
      },
      activity: activityData,
      recentUpdated,
      recentPublished,
      topViewed,
    });
  } catch (error) {
    logger.error("Error fetching blog stats:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve blog stats.",
    });
  }
});

/**
 * @route   POST /api/blog/publish-scheduled
 * @desc    Publish any scheduled posts whose time has arrived
 * @access  Public / Admin
 */
router.post("/publish-scheduled", async (_req, res) => {
  try {
    const result = await Blog.updateMany(
      {
        status: "scheduled",
        scheduledAt: { $lte: new Date() },
      },
      {
        $set: { status: "published" },
      }
    );

    return res.status(200).json({
      success: true,
      modifiedCount: result.modifiedCount,
      message: `Published ${result.modifiedCount} scheduled post(s).`,
    });
  } catch (error) {
    logger.error("Error publishing scheduled posts:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to publish scheduled blogs.",
    });
  }
});

/**
 * @route   GET /api/blog/export-csv
 * @desc    Export filtered blogs to CSV
 * @access  Public / Admin
 */
router.get("/export-csv", async (req, res) => {
  try {
    const { search, status } = req.query;
    const filter = {};

    if (status && status !== "All") {
      filter.status = status;
    }

    if (search && search.trim()) {
      const escaped = escapeRegex(search.trim());
      filter.$or = [
        { title: { $regex: escaped, $options: "i" } },
        { excerpt: { $regex: escaped, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(filter).sort({ date: -1, createdAt: -1 }).lean();

    const csvEscape = (field) => {
      if (field == null) return '""';
      const str = String(field).replace(/"/g, '""');
      return `"${str}"`;
    };

    const headers = [
      "Title",
      "Slug",
      "Status",
      "Date",
      "Scheduled At",
      "Categories",
      "Read Time",
      "Excerpt",
      "Feature Image",
    ];

    const rows = blogs.map((b) => [
      csvEscape(b.title),
      csvEscape(b.slug),
      csvEscape(b.status),
      csvEscape(b.date ? new Date(b.date).toISOString().slice(0, 10) : ""),
      csvEscape(b.scheduledAt ? new Date(b.scheduledAt).toISOString() : ""),
      csvEscape((b.category || []).join(", ")),
      csvEscape(b.readTime || ""),
      csvEscape(b.excerpt || ""),
      csvEscape(b.featureImage || ""),
    ]);

    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

    res.setHeader("Content-Type", "text/csv; charset=utf-8");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="blogs_export_${new Date().toISOString().slice(0, 10)}.csv"`
    );
    return res.status(200).send(csvContent);
  } catch (error) {
    logger.error("Error exporting blogs as CSV:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to export blogs to CSV.",
    });
  }
});

/**
 * @route   POST /api/blog/upload-image
 * @desc    Upload an image to Cloudinary
 * @access  Private (Blog Admin)
 */
router.post(
  "/upload-image",
  protectBlogAdmin,
  uploadLimiter,
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No image file provided.",
        });
      }

      const folder = req.body.folder || "teck-solar-blogs";
      const result = await uploadToCloudinary(req.file.buffer, folder);

      return res.status(200).json({
        success: true,
        imageUrl: result.secure_url,
        message: "Image uploaded successfully.",
      });
    } catch (error) {
      logger.error("Cloudinary upload error:", error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to upload image.",
      });
    }
  }
);

/**
 * Handler for listing blogs
 */
const listBlogsHandler = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "date",
      order = "desc",
      search,
      status,
      category,
    } = req.query;

    // Transition overdue scheduled posts
    await Blog.updateMany(
      {
        status: "scheduled",
        scheduledAt: { $lte: new Date() },
      },
      {
        $set: { status: "published" },
      }
    );

    const filter = {};

    if (status === "trash") {
      filter.isDeleted = true;
    } else {
      filter.isDeleted = { $ne: true };
      if (status && status !== "All") {
        filter.status = status;
      }
    }

    if (category && category.trim()) {
      filter.category = category.trim();
    }

    if (search && search.trim()) {
      const escaped = escapeRegex(search.trim());
      filter.$or = [
        { title: { $regex: escaped, $options: "i" } },
        { excerpt: { $regex: escaped, $options: "i" } },
      ];
    }

    const pageNum = Math.max(1, parseInt(page, 10) || 1);
    const limitNum = Math.max(1, Math.min(100, parseInt(limit, 10) || 10));
    const skip = (pageNum - 1) * limitNum;

    const sortOrder = order === "asc" ? 1 : -1;
    const sortField = sortBy === "createdAt" ? "createdAt" : sortBy === "title" ? "title" : sortBy === "views" ? "viewCount" : "date";

    // Pinned blogs take precedence unless specific sort chosen
    const sortCriteria = { isPinned: -1, [sortField]: sortOrder };
    if (sortField !== "createdAt") {
      sortCriteria.createdAt = -1;
    }

    const [total, blogs] = await Promise.all([
      Blog.countDocuments(filter),
      Blog.find(filter)
        .sort(sortCriteria)
        .skip(skip)
        .limit(limitNum)
        .select("-content -longContent") // Keep list payloads fast and light
        .lean(),
    ]);

    return res.status(200).json({
      success: true,
      blogs,
      pagination: {
        total,
        totalPages: Math.ceil(total / limitNum) || 1,
        page: pageNum,
        limit: limitNum,
      },
    });
  } catch (error) {
    logger.error("Error fetching blogs:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blogs.",
    });
  }
};

/**
 * @route   GET /api/blog/public
 * @desc    Public listing of published blogs
 * @access  Public
 */
router.get("/public", (req, res) => {
  if (!req.query.status) {
    req.query.status = "published";
  }
  return listBlogsHandler(req, res);
});

/**
 * @route   GET /api/blog
 * @desc    List blogs with search, filters, pagination, and sorting
 * @access  Public
 */
router.get("/", listBlogsHandler);

/**
 * @route   GET /api/blog/:id
 * @desc    Get single blog by ID or Slug
 * @access  Public
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let blog;

    if (mongoose.Types.ObjectId.isValid(id)) {
      blog = await Blog.findById(id);
    }

    if (!blog) {
      blog = await Blog.findOne({ slug: id.toLowerCase().trim() });
    }

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    if (blog && blog.status === "published") {
      Blog.findByIdAndUpdate(blog._id, { $inc: { viewCount: 1 } }).exec();
    }

    return res.status(200).json({
      success: true,
      blog,
    });
  } catch (error) {
    logger.error("Error getting blog by ID:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch blog post.",
    });
  }
});

/**
 * @route   POST /api/blog
 * @desc    Create a new blog post
 * @access  Private (Blog Admin)
 */
router.post("/", protectBlogAdmin, async (req, res) => {
  try {
    const {
      title,
      slug,
      category,
      readTime,
      date,
      excerpt,
      featureImage,
      content,
      metaTitle,
      canonicalUrl,
      keywords,
      metaDescription,
      schema,
      schemaMarkup,
      longContent,
      status = "draft",
      scheduledAt,
    } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Blog title is required.",
      });
    }

    const baseSlug = slug && slug.trim() ? slugify(slug) : slugify(title);
    if (!baseSlug) {
      return res.status(400).json({
        success: false,
        message: "Valid slug or title is required.",
      });
    }

    const uniqueSlug = await getUniqueSlug(baseSlug);

    const categoriesArray = Array.isArray(category)
      ? category
      : typeof category === "string"
      ? category.split(",").map((c) => c.trim()).filter(Boolean)
      : [];

    const keywordsArray = Array.isArray(keywords)
      ? keywords
      : typeof keywords === "string"
      ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
      : [];

    const newBlog = new Blog({
      title: title.trim(),
      slug: uniqueSlug,
      category: categoriesArray,
      readTime: readTime ? readTime.trim() : "",
      date: date ? new Date(date) : new Date(),
      excerpt: excerpt ? excerpt.trim() : "",
      featureImage: featureImage ? featureImage.trim() : "",
      content: content || "",
      metaTitle: metaTitle ? metaTitle.trim() : "",
      canonicalUrl: canonicalUrl ? canonicalUrl.trim() : "",
      keywords: keywordsArray,
      metaDescription: metaDescription ? metaDescription.trim() : "",
      schemaMarkup: schemaMarkup || schema || "",
      longContent: longContent || "",
      status: ["draft", "published", "scheduled"].includes(status) ? status : "draft",
      scheduledAt: status === "scheduled" && scheduledAt ? new Date(scheduledAt) : null,
    });

    const savedBlog = await newBlog.save();
    logger.info(`Blog post created: ${savedBlog.title} (${savedBlog._id})`);

    return res.status(201).json({
      success: true,
      message: "Blog post created successfully.",
      blog: savedBlog,
    });
  } catch (error) {
    logger.error("Error creating blog post:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create blog post.",
    });
  }
});

/**
 * @route   PUT /api/blog/:id
 * @desc    Update existing blog post
 * @access  Private (Blog Admin)
 */
router.put("/:id", protectBlogAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID.",
      });
    }

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    const {
      title,
      slug,
      category,
      readTime,
      date,
      excerpt,
      featureImage,
      content,
      metaTitle,
      canonicalUrl,
      keywords,
      metaDescription,
      schema,
      schemaMarkup,
      longContent,
      status,
      scheduledAt,
    } = req.body;

    if (title !== undefined) blog.title = title.trim();

    if (slug !== undefined) {
      const baseSlug = slugify(slug || blog.title);
      blog.slug = await getUniqueSlug(baseSlug, blog._id);
    }

    if (category !== undefined) {
      blog.category = Array.isArray(category)
        ? category
        : typeof category === "string"
        ? category.split(",").map((c) => c.trim()).filter(Boolean)
        : [];
    }

    if (readTime !== undefined) blog.readTime = readTime.trim();
    if (date !== undefined) blog.date = date ? new Date(date) : blog.date;
    if (excerpt !== undefined) blog.excerpt = excerpt.trim();
    if (featureImage !== undefined) blog.featureImage = featureImage.trim();
    if (content !== undefined) blog.content = content;
    if (metaTitle !== undefined) blog.metaTitle = metaTitle.trim();
    if (canonicalUrl !== undefined) blog.canonicalUrl = canonicalUrl.trim();

    if (keywords !== undefined) {
      blog.keywords = Array.isArray(keywords)
        ? keywords
        : typeof keywords === "string"
        ? keywords.split(",").map((k) => k.trim()).filter(Boolean)
        : [];
    }

    if (metaDescription !== undefined) blog.metaDescription = metaDescription.trim();
    if (schema !== undefined || schemaMarkup !== undefined) {
      blog.schemaMarkup = schemaMarkup !== undefined ? schemaMarkup : schema;
    }
    if (longContent !== undefined) blog.longContent = longContent;

    if (status !== undefined) {
      if (["draft", "published", "scheduled"].includes(status)) {
        blog.status = status;
        if (status === "scheduled") {
          blog.scheduledAt = scheduledAt ? new Date(scheduledAt) : blog.scheduledAt;
        } else {
          blog.scheduledAt = null;
        }
      }
    } else if (scheduledAt !== undefined && blog.status === "scheduled") {
      blog.scheduledAt = scheduledAt ? new Date(scheduledAt) : null;
    }

    const updatedBlog = await blog.save();
    logger.info(`Blog post updated: ${updatedBlog.title} (${updatedBlog._id})`);

    return res.status(200).json({
      success: true,
      message: "Blog post updated successfully.",
      blog: updatedBlog,
    });
  } catch (error) {
    logger.error("Error updating blog post:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to update blog post.",
    });
  }
});

/**
 * @route   DELETE /api/blog/:id
 * @desc    Delete a blog post
 * @access  Private (Blog Admin)
 */
router.delete("/:id", protectBlogAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid blog ID.",
      });
    }

    const { permanent } = req.query;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    if (permanent === "true") {
      await Blog.findByIdAndDelete(id);
      logger.info(`Blog post permanently deleted: ${blog.title} (${id})`);
      return res.status(200).json({
        success: true,
        message: "Blog post permanently deleted.",
      });
    }

    // Soft delete / Move to trash
    blog.isDeleted = true;
    blog.deletedAt = new Date();
    await blog.save();

    logger.info(`Blog post moved to trash: ${blog.title} (${id})`);

    return res.status(200).json({
      success: true,
      message: "Blog post moved to trash.",
      blog,
    });
  } catch (error) {
    logger.error("Error deleting blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete blog post.",
    });
  }
});

/**
 * @route   POST /api/blog/:id/restore
 * @desc    Restore a soft-deleted blog
 * @access  Private (Blog Admin)
 */
router.post("/:id/restore", protectBlogAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    blog.isDeleted = false;
    blog.deletedAt = null;
    await blog.save();

    logger.info(`Blog post restored from trash: ${blog.title} (${id})`);

    return res.status(200).json({
      success: true,
      message: "Blog post restored successfully.",
      blog,
    });
  } catch (error) {
    logger.error("Error restoring blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to restore blog post.",
    });
  }
});

/**
 * @route   POST /api/blog/:id/duplicate
 * @desc    Duplicate/clone a blog into a new draft
 * @access  Private (Blog Admin)
 */
router.post("/:id/duplicate", protectBlogAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const original = await Blog.findById(id);
    if (!original) {
      return res.status(404).json({
        success: false,
        message: "Original blog post not found.",
      });
    }

    const baseTitle = `${original.title} (Copy)`;
    const baseSlug = slugify(baseTitle);
    const newSlug = await getUniqueSlug(baseSlug);

    const duplicate = new Blog({
      title: baseTitle,
      slug: newSlug,
      category: original.category,
      readTime: original.readTime,
      date: new Date(),
      excerpt: original.excerpt,
      featureImage: original.featureImage,
      content: original.content,
      longContent: original.longContent,
      metaTitle: original.metaTitle,
      canonicalUrl: original.canonicalUrl,
      keywords: original.keywords,
      metaDescription: original.metaDescription,
      schemaMarkup: original.schemaMarkup,
      status: "draft",
      isPinned: false,
      isDeleted: false,
    });

    await duplicate.save();
    logger.info(`Blog duplicated: ${duplicate.title} (${duplicate._id}) from (${original._id})`);

    return res.status(201).json({
      success: true,
      message: "Blog duplicated as draft successfully.",
      blog: duplicate,
    });
  } catch (error) {
    logger.error("Error duplicating blog post:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to duplicate blog post.",
    });
  }
});

/**
 * @route   POST /api/blog/:id/pin
 * @desc    Toggle pinned status of a blog
 * @access  Private (Blog Admin)
 */
router.post("/:id/pin", protectBlogAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found.",
      });
    }

    blog.isPinned = !blog.isPinned;
    await blog.save();

    logger.info(`Blog pin toggled: ${blog.title} (isPinned: ${blog.isPinned})`);

    return res.status(200).json({
      success: true,
      message: blog.isPinned ? "Blog post pinned to top." : "Blog post unpinned.",
      isPinned: blog.isPinned,
      blog,
    });
  } catch (error) {
    logger.error("Error toggling blog pin:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to toggle pin status.",
    });
  }
});

/**
 * @route   POST /api/blog/bulk-action
 * @desc    Perform bulk actions on multiple blogs
 * @access  Private (Blog Admin)
 */
router.post("/bulk-action", protectBlogAdmin, async (req, res) => {
  try {
    const { ids, action } = req.body;
    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No blog IDs provided.",
      });
    }

    let modified = 0;
    if (action === "publish") {
      const resDb = await Blog.updateMany(
        { _id: { $in: ids }, isDeleted: { $ne: true } },
        { $set: { status: "published", scheduledAt: null } }
      );
      modified = resDb.modifiedCount;
    } else if (action === "draft") {
      const resDb = await Blog.updateMany(
        { _id: { $in: ids }, isDeleted: { $ne: true } },
        { $set: { status: "draft" } }
      );
      modified = resDb.modifiedCount;
    } else if (action === "trash") {
      const resDb = await Blog.updateMany(
        { _id: { $in: ids } },
        { $set: { isDeleted: true, deletedAt: new Date() } }
      );
      modified = resDb.modifiedCount;
    } else if (action === "restore") {
      const resDb = await Blog.updateMany(
        { _id: { $in: ids } },
        { $set: { isDeleted: false, deletedAt: null } }
      );
      modified = resDb.modifiedCount;
    } else if (action === "delete") {
      const resDb = await Blog.deleteMany({ _id: { $in: ids } });
      modified = resDb.deletedCount;
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid action. Supported: publish, draft, trash, restore, delete",
      });
    }

    logger.info(`Bulk action ${action} executed on ${modified} blogs`);

    return res.status(200).json({
      success: true,
      message: `Bulk ${action} applied to ${modified} blog post(s).`,
      count: modified,
    });
  } catch (error) {
    logger.error("Error executing bulk action:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to execute bulk action.",
    });
  }
});

export default router;
