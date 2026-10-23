import crypto from "crypto";

const regionNames = new Intl.DisplayNames(["en"], { type: "region" });

/**
 * Resolve 2-letter ISO country code to official English name
 */
export const getCountryNameByCode = (code) => {
  if (!code || code === "XX" || code === "T1") return "International";
  try {
    const name = regionNames.of(code.toUpperCase());
    if (name) return name;
  } catch {}
  return code.toUpperCase();
};

// Worldwide comprehensive timezone mapping (covers all continents and major regions)
const TIMEZONE_TO_COUNTRY = {
  // Asia
  "Asia/Kolkata": "IN",
  "Asia/Calcutta": "IN",
  "Asia/Karachi": "PK",
  "Asia/Dhaka": "BD",
  "Asia/Colombo": "LK",
  "Asia/Kathmandu": "NP",
  "Asia/Dubai": "AE",
  "Asia/Singapore": "SG",
  "Asia/Tokyo": "JP",
  "Asia/Seoul": "KR",
  "Asia/Bangkok": "TH",
  "Asia/Jakarta": "ID",
  "Asia/Kuala_Lumpur": "MY",
  "Asia/Manila": "PH",
  "Asia/Shanghai": "CN",
  "Asia/Hong_Kong": "HK",
  "Asia/Taipei": "TW",
  "Asia/Riyadh": "SA",
  "Asia/Qatar": "QA",
  "Asia/Bahrain": "BH",
  "Asia/Kuwait": "KW",
  "Asia/Muscat": "OM",
  "Asia/Jerusalem": "IL",
  "Asia/Beirut": "LB",
  "Asia/Amman": "JO",

  // Oceania
  "Australia/Sydney": "AU",
  "Australia/Melbourne": "AU",
  "Australia/Brisbane": "AU",
  "Australia/Adelaide": "AU",
  "Australia/Perth": "AU",
  "Australia/Hobart": "AU",
  "Australia/Darwin": "AU",
  "Pacific/Auckland": "NZ",
  "Pacific/Fiji": "FJ",

  // Americas
  "America/New_York": "US",
  "America/Chicago": "US",
  "America/Los_Angeles": "US",
  "America/Denver": "US",
  "America/Phoenix": "US",
  "America/Detroit": "US",
  "America/Toronto": "CA",
  "America/Vancouver": "CA",
  "America/Montreal": "CA",
  "America/Edmonton": "CA",
  "America/Sao_Paulo": "BR",
  "America/Buenos_Aires": "AR",
  "America/Mexico_City": "MX",
  "America/Bogota": "CO",
  "America/Santiago": "CL",
  "America/Lima": "PE",

  // Europe
  "Europe/London": "GB",
  "Europe/Berlin": "DE",
  "Europe/Paris": "FR",
  "Europe/Rome": "IT",
  "Europe/Madrid": "ES",
  "Europe/Amsterdam": "NL",
  "Europe/Dublin": "IE",
  "Europe/Brussels": "BE",
  "Europe/Vienna": "AT",
  "Europe/Zurich": "CH",
  "Europe/Stockholm": "SE",
  "Europe/Oslo": "NO",
  "Europe/Copenhagen": "DK",
  "Europe/Helsinki": "FI",
  "Europe/Warsaw": "PL",
  "Europe/Prague": "CZ",
  "Europe/Budapest": "HU",
  "Europe/Bucharest": "RO",
  "Europe/Athens": "GR",
  "Europe/Lisbon": "PT",
  "Europe/Istanbul": "TR",
  "Europe/Kiev": "UA",
  "Europe/Kyiv": "UA",

  // Africa
  "Africa/Johannesburg": "ZA",
  "Africa/Cairo": "EG",
  "Africa/Lagos": "NG",
  "Africa/Nairobi": "KE",
  "Africa/Casablanca": "MA",
  "Africa/Accra": "GH",
  "Africa/Addis_Ababa": "ET",
};

// Cached local machine public geolocation (used when testing on localhost)
let localPublicCountryCache = null;

const resolveLocalPublicCountry = async () => {
  if (localPublicCountryCache) return localPublicCountryCache;
  try {
    const res = await fetch("https://api.country.is", { signal: AbortSignal.timeout(2500) });
    if (res.ok) {
      const data = await res.json();
      if (data.country && typeof data.country === "string" && data.country.length === 2) {
        const code = data.country.toUpperCase();
        const country = getCountryNameByCode(code);
        localPublicCountryCache = { code, country };
        return localPublicCountryCache;
      }
    }
  } catch {}
  return null;
};

// Initial background trigger on server startup
resolveLocalPublicCountry().catch(() => {});

/**
 * Detect client country from request in real time with 0 hardcoding
 */
export const detectClientCountry = (req) => {
  // 1. Direct country header passed by client browser real-time detector
  const explicitCode = req.headers["x-country-code"];
  const explicitName = req.headers["x-country-name"];
  if (explicitCode && typeof explicitCode === "string" && explicitCode.length === 2 && explicitCode !== "XX") {
    const upper = explicitCode.trim().toUpperCase();
    const country = explicitName && typeof explicitName === "string" && explicitName !== "Global Reader"
      ? explicitName.trim()
      : getCountryNameByCode(upper);
    return { country, code: upper };
  }

  // 2. Cloudflare, Vercel, or AWS CloudFront CDN Edge Geolocation Headers (Live domain)
  const cdnCode =
    req.headers["cf-ipcountry"] ||
    req.headers["x-vercel-ip-country"] ||
    req.headers["cloudfront-viewer-country"] ||
    req.headers["x-viewer-country"];

  if (cdnCode && typeof cdnCode === "string") {
    const upper = cdnCode.trim().toUpperCase();
    if (upper.length === 2 && upper !== "XX" && upper !== "T1") {
      return { country: getCountryNameByCode(upper), code: upper };
    }
  }

  // 3. Client timezone passed from browser
  const tz =
    req.headers["x-timezone"] ||
    req.query.timezone ||
    (req.body && req.body.timezone);

  if (tz && typeof tz === "string") {
    const trimmedTz = tz.trim();
    if (TIMEZONE_TO_COUNTRY[trimmedTz]) {
      const code = TIMEZONE_TO_COUNTRY[trimmedTz];
      return { country: getCountryNameByCode(code), code };
    }

    // Prefix search (e.g. Australia/...)
    const prefixEntry = Object.entries(TIMEZONE_TO_COUNTRY).find(([prefix]) =>
      trimmedTz.startsWith(prefix.split("/")[0])
    );
    if (prefixEntry) {
      const code = prefixEntry[1];
      return { country: getCountryNameByCode(code), code };
    }
  }

  // 4. If on localhost / private network, use cached host machine public geolocation
  const rawIp =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    req.ip ||
    "127.0.0.1";

  const isLocalOrPrivate =
    rawIp === "127.0.0.1" ||
    rawIp === "::1" ||
    rawIp === "::ffff:127.0.0.1" ||
    rawIp.startsWith("192.168.") ||
    rawIp.startsWith("10.");

  if (isLocalOrPrivate && localPublicCountryCache) {
    return localPublicCountryCache;
  }

  // 5. Generic international fallback (never hardcode any single country)
  return { country: "International", code: "XX" };
};

/**
 * Generate anonymous visitor identifier hash from request
 */
export const getVisitorHash = (req) => {
  const explicitVisitorId = req.headers["x-visitor-id"];
  if (explicitVisitorId && typeof explicitVisitorId === "string" && explicitVisitorId.length >= 8) {
    return crypto.createHash("sha256").update(explicitVisitorId).digest("hex").slice(0, 32);
  }

  let rawIp =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket?.remoteAddress ||
    req.ip ||
    "127.0.0.1";

  if (rawIp === "::1" || rawIp === "::ffff:127.0.0.1") {
    rawIp = "127.0.0.1";
  } else if (rawIp.startsWith("::ffff:")) {
    rawIp = rawIp.slice(7);
  }

  const userAgent = req.headers["user-agent"] || "unknown";

  return crypto
    .createHash("sha256")
    .update(`${rawIp}:${userAgent}`)
    .digest("hex")
    .slice(0, 32);
};
