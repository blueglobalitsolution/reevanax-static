function buildGaExplorerReportUrl(referralPath, reportName, dateRange, extraParams = "", endpoint = "explorer") {
  if (!referralPath || !reportName || !dateRange?.start || !dateRange?.end) {
    return "";
  }
  const d0 = String(dateRange.start).replace(/-/g, "");
  const d1 = String(dateRange.end).replace(/-/g, "");
  let inner = `_u.date00=${d0}&_u.date01=${d1}`;
  if (dateRange.compareReport && dateRange.compareStart && dateRange.compareEnd) {
    const d10 = String(dateRange.compareStart).replace(/-/g, "");
    const d11 = String(dateRange.compareEnd).replace(/-/g, "");
    inner += `&_u.date10=${d10}&_u.date11=${d11}`;
  }
  const params = encodeURIComponent(inner);
  const extra = encodeURIComponent(`&${extraParams || ""}`);
  const endpointSegment = endpoint || "explorer";
  return `https://analytics.google.com/analytics/web/#/${referralPath}/reports/${endpointSegment}?params=${params}${extra}&r=${reportName}`;
}
function bounceRateToPercent(raw) {
  const v = Number(raw);
  if (Number.isNaN(v)) {
    return 0;
  }
  if (v > 1) {
    return v;
  }
  return v * 100;
}
export {
  buildGaExplorerReportUrl as a,
  bounceRateToPercent as b
};
