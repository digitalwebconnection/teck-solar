/**
 * Converts a 2-letter ISO country code into a native Unicode flag emoji
 */
export const getCountryFlag = (code?: string): string => {
  if (!code || typeof code !== "string" || code.length !== 2) {
    return "🌐";
  }
  const upper = code.toUpperCase();
  const codePoints = [...upper].map((char) => 127397 + char.charCodeAt(0));
  try {
    return String.fromCodePoint(...codePoints);
  } catch {
    return "🌐";
  }
};

/**
 * Returns a high-res Flag CDN URL for any 2-letter ISO country code
 */
export const getCountryFlagUrl = (code?: string): string | null => {
  if (!code || typeof code !== "string" || code.length !== 2) return null;
  return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
};

/**
 * Format numbers with compact or comma notation
 */
export const formatNumber = (num?: number): string => {
  if (num === undefined || num === null) return "0";
  return num.toLocaleString();
};

const regionNames =
  typeof Intl !== "undefined" && Intl.DisplayNames
    ? new Intl.DisplayNames(["en"], { type: "region" })
    : null;

export const getCountryName = (code?: string, fallback = "Unknown"): string => {
  if (!code || code === "XX") return fallback;
  const upper = code.toUpperCase();
  try {
    const name = regionNames?.of(upper);
    if (name) return name;
  } catch {}
  return upper;
};
