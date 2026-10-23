/**
 * Real-time Client-Side Geolocation Detector
 * Detects visitor country in real-time using public IP geo API + timezone + locale fallback.
 */

const STORAGE_KEY = "teck_client_geo";

const regionNames =
  typeof Intl !== "undefined" && Intl.DisplayNames
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

export const resolveCountryName = (code: string): string => {
  if (!code || code === "XX") return "Unknown";
  try {
    const name = regionNames?.of(code.toUpperCase());
    if (name) return name;
  } catch {}
  return code.toUpperCase();
};

const TIMEZONE_TO_COUNTRY: Record<string, string> = {
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

/**
 * Detect client country in real-time
 */
export async function detectRealtimeCountry(): Promise<{ code: string; country: string }> {
  // 1. Check cached detection in localStorage
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      const parsed = JSON.parse(cached);
      if (parsed.code && parsed.code.length === 2 && parsed.country) {
        return parsed;
      }
    }
  } catch {}

  // 2. Real-time IP geolocation fetch (fast public IP lookup)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("https://api.country.is", { signal: controller.signal });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      if (data.country && typeof data.country === "string" && data.country.length === 2) {
        const code = data.country.toUpperCase();
        const country = resolveCountryName(code);
        const result = { code, country };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        } catch {}
        return result;
      }
    }
  } catch {}

  // 3. Timezone lookup fallback
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (TIMEZONE_TO_COUNTRY[tz]) {
        const code = TIMEZONE_TO_COUNTRY[tz];
        const country = resolveCountryName(code);
        const result = { code, country };
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        } catch {}
        return result;
      }

      // Check timezone prefix (e.g. Australia/*)
      const prefixMatch = Object.entries(TIMEZONE_TO_COUNTRY).find(([prefix]) =>
        tz.startsWith(prefix.split("/")[0])
      );
      if (prefixMatch) {
        const code = prefixMatch[1];
        const country = resolveCountryName(code);
        return { code, country };
      }
    }
  } catch {}

  // 4. Browser language fallback (e.g., en-IN -> IN, en-GB -> GB)
  try {
    const lang = navigator.language || (navigator.languages && navigator.languages[0]);
    if (lang && lang.includes("-")) {
      const code = lang.split("-")[1].toUpperCase();
      if (code.length === 2) {
        const country = resolveCountryName(code);
        return { code, country };
      }
    }
  } catch {}

  // 5. Default generic
  return { code: "XX", country: "Global Reader" };
}
