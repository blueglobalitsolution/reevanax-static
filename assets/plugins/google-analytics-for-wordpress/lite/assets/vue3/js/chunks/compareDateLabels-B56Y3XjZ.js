function getCompareDateLabels(dateRange) {
  if (!dateRange?.compareReport || !dateRange?.start || !dateRange?.end) {
    return { current: "", previous: "" };
  }
  const fmtShort = (dateStr) => {
    if (!dateStr) {
      return "";
    }
    const d = /* @__PURE__ */ new Date(`${dateStr}T00:00:00`);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[d.getMonth()]} ${d.getDate()}`;
  };
  return {
    current: `${fmtShort(dateRange.start)} - ${fmtShort(dateRange.end)}`,
    previous: dateRange.compareStart && dateRange.compareEnd ? `${fmtShort(dateRange.compareStart)} - ${fmtShort(dateRange.compareEnd)}` : ""
  };
}
export {
  getCompareDateLabels as g
};
