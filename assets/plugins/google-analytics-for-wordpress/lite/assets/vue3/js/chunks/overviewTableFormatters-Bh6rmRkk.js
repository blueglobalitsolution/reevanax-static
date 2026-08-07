import { j as getMiGlobal } from "./ajax-B_XS1gT5.js";
function formatNum(n) {
  const num = Number(n);
  if (Number.isNaN(num)) {
    return "0";
  }
  return num >= 1e3 ? `${(num / 1e3).toFixed(1)}K` : num.toLocaleString();
}
function formatPct(n) {
  const num = Number(n);
  return `${(Number.isNaN(num) ? 0 : num).toFixed(1)}%`;
}
function stripUrlDomain(value) {
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") {
      return value;
    }
    return url.pathname + url.search + url.hash;
  } catch {
    return value;
  }
}
function formatCurr(n, currencyCode = null) {
  const num = Number(n);
  const value = Number.isNaN(num) ? 0 : num;
  const currency = currencyCode || getMiGlobal("currency", "USD") || "USD";
  let formatted = new Intl.NumberFormat(void 0, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
  if (currency === "USD") {
    formatted = formatted.replace("US$", "$");
  }
  return formatted;
}
export {
  formatCurr as a,
  formatNum as b,
  formatPct as f,
  stripUrlDomain as s
};
