import { useEffect } from "react";
import BlogHeroSection from "./sections/BlogHeroSection";
import BlogGridSection from "./sections/BlogGridSection";
import { SharedCTA } from "@/components/shared";

export default function BlogPage() {
  useEffect(() => {
    document.title = "Solar Insights & Clean Energy Blog | Teck Solar";
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen selection:bg-[#F38335] selection:text-white overflow-hidden">
      {/* Hero Banner */}
      <BlogHeroSection />

      {/* Blog Posts Grid with Search & Filters */}
      <BlogGridSection />

      {/* Shared CTA Section */}
      <SharedCTA />
    </div>
  );
}
