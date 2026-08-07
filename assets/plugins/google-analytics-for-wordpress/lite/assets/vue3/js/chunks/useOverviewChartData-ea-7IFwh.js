import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { m as computed, j as ref } from "./toastStore-CRCNwITM.js";
const RATE_METRICS = [
  "bounceRate",
  "engagementRate",
  "sessionKeyEventRate",
  "cartAbandonRatePercent",
  "couponUsedPercent"
];
const isRateMetric = (metricName) => RATE_METRICS.includes(metricName);
const AVG_METRICS = ["averageSessionDuration"];
const isAvgMetric = (metricName) => AVG_METRICS.includes(metricName);
const DURATION_METRICS = ["averageSessionDuration"];
const isDurationMetric = (metricName) => DURATION_METRICS.includes(metricName);
const secondsToMinutes = (seconds) => parseFloat((seconds / 60).toFixed(2));
const toPercentValue = (raw) => parseFloat((raw * 100).toFixed(2));
const OVERVIEW_METRIC_DISPLAY = {
  totalUsers: { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress") },
  screenPageViews: { id: "screenPageViews", label: __("Page Views", "google-analytics-for-wordpress") },
  sessions: { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress") },
  bounceRate: { id: "bounceRate", label: __("Bounce Rate", "google-analytics-for-wordpress") },
  ecommercePurchases: { id: "ecommercePurchases", label: __("eCommerce Purchases", "google-analytics-for-wordpress") },
  itemsPurchased: { id: "itemsPurchased", label: __("Items Purchased", "google-analytics-for-wordpress") },
  averagePurchaseRevenue: { id: "averagePurchaseRevenue", label: __("Revenue/Sales", "google-analytics-for-wordpress") },
  newUsers: { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress") },
  engagementRate: { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress") },
  engagedSessions: { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress") },
  sessionKeyEventRate: { id: "sessionKeyEventRate", label: __("Key Event Rate", "google-analytics-for-wordpress") },
  totalRevenue: { id: "totalRevenue", label: __("Revenue", "google-analytics-for-wordpress") },
  returningUsers: { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress") },
  pageViewsPerUser: { id: "pageViewsPerUser", label: __("Pageviews / User", "google-analytics-for-wordpress") },
  averageSessionDuration: { id: "averageSessionDuration", label: __("Session Duration", "google-analytics-for-wordpress") },
  couponUsedPercent: { id: "couponUsedPercent", label: __("Coupon Used %", "google-analytics-for-wordpress") },
  cartAbandonRatePercent: { id: "cartAbandonRatePercent", label: __("Cart Abandon Rate %", "google-analytics-for-wordpress") }
};
const BASE_SERIES_COLORS = ["#228bee", "#9B51E0", "#5cc0a5", "#F2C94C", "#EB5757", "#2D9CDB"];
const DERIVED_METRICS = ["returningUsers", "pageViewsPerUser"];
const SITE_NOTE_DEFAULT_COLOR = "3a93dd";
const PREVIOUS_PERIOD_LEGEND_LABEL = __("Previous Period", "google-analytics-for-wordpress");
function formatDateLabel(dateStr) {
  if (!dateStr) {
    return dateStr;
  }
  let year, month, day;
  if (dateStr.length === 10 && dateStr.includes("-")) {
    [year, month, day] = dateStr.split("-");
  } else if (dateStr.length === 8) {
    year = dateStr.substring(0, 4);
    month = dateStr.substring(4, 6);
    day = dateStr.substring(6, 8);
  } else {
    return dateStr;
  }
  const date = new Date(year, parseInt(month, 10) - 1, day);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${monthNames[date.getMonth()]}`;
}
function getSiteNoteSvgNormal(color) {
  return `data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2042.4%2047.9%22%20style%3D%22enable-background%3Anew%200%200%2042.4%2047.9%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23${color}%3B%7D.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M38.9%2C1.6H3.5c-1.1%2C0-1.9%2C0.9-1.9%2C1.9V39c0%2C1.1%2C0.9%2C1.9%2C1.9%2C1.9h12.8l4.9%2C5.1l4.9-5.1h12.8c1.1%2C0%2C1.9-0.9%2C1.9-1.9V3.6C40.9%2C2.5%2C40%2C1.6%2C38.9%2C1.6z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M21.2%2C46.6l-5.1-5.3H3.5c-1.3%2C0-2.3-1-2.3-2.3V3.6c0-1.3%2C1-2.3%2C2.3-2.3h35.4c1.3%2C0%2C2.3%2C1%2C2.3%2C2.3V39c0%2C1.3-1%2C2.3-2.3%2C2.3H26.3L21.2%2C46.6z%20M3.5%2C2C2.6%2C2%2C1.9%2C2.7%2C1.9%2C3.6V39c0%2C0.9%2C0.7%2C1.6%2C1.6%2C1.6h12.9l4.8%2C5l4.8-5h12.9c0.9%2C0%2C1.6-0.7%2C1.6-1.6V3.6c0-0.9-0.7-1.6-1.6-1.6H3.5z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C14.6H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C14.6%2C33.1%2C14.6z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C22H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C22%2C33.1%2C22z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C29.4H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C29.4%2C33.1%2C29.4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`;
}
function getSiteNoteSvgImportant(color) {
  return `data:image/svg+xml,%3C%3Fxml version="1.0" encoding="utf-8"%3F%3E%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E.st0%7Bfill:%23${color};%7D.st1%7Bfill:%23FFFFFF;%7D.st2%7Bfill:%23FFD74B;%7D%3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class="st0" d="M22.5,0.7H2.5c-0.6,0-1.1,0.5-1.1,1v18.6c0,0.6,0.5,1,1.1,1h6.4c0.2,0,0.4,0.1,0.5,0.2l2.5,2.6 c0.3,0.3,0.8,0.3,1.1,0l2.5-2.6c0.1-0.1,0.3-0.2,0.5-0.2h6.4c0.6,0,1.1-0.5,1.1-1V1.7C23.6,1.1,23.1,0.7,22.5,0.7z"/%3E%3Cpath class="st1" d="M12.5,24.6C12.5,24.6,12.5,24.6,12.5,24.6c-0.3,0-0.6-0.1-0.8-0.3l-2.5-2.6c-0.1-0.1-0.2-0.1-0.3-0.1H2.5 c-0.8,0-1.4-0.6-1.4-1.3V1.7c0-0.7,0.6-1.3,1.4-1.3h19.9c0.8,0,1.4,0.6,1.4,1.3v18.6c0,0.7-0.6,1.3-1.4,1.3h-6.4 c-0.1,0-0.2,0-0.3,0.1l-2.5,2.6C13.1,24.5,12.8,24.6,12.5,24.6z M2.5,1C2.1,1,1.7,1.3,1.7,1.7v18.6c0,0.4,0.4,0.7,0.8,0.7h6.4 c0.3,0,0.6,0.1,0.8,0.3l2.5,2.6c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1l2.5-2.6c0.2-0.2,0.5-0.3,0.8-0.3h6.4 c0.4,0,0.8-0.3,0.8-0.7V1.7c0-0.4-0.4-0.7-0.8-0.7H2.5z"/%3E%3C/g%3E%3Cpath class="st2" d="M13.1,4.9l1.7,3.2c0.1,0.2,0.3,0.3,0.5,0.3L19.1,9c0.6,0.1,0.8,0.7,0.4,1.1l-2.7,2.5c-0.2,0.1-0.2,0.4-0.2,0.6 l0.6,3.5c0.1,0.5-0.5,0.9-1,0.7l-3.4-1.7c-0.2-0.1-0.4-0.1-0.6,0l-3.4,1.7c-0.5,0.2-1.1-0.2-1-0.7l0.6-3.5c0-0.2,0-0.4-0.2-0.6 l-2.7-2.5C5.1,9.7,5.3,9,5.9,9l3.8-0.5c0.2,0,0.4-0.2,0.5-0.3l1.7-3.2C12.1,4.4,12.9,4.4,13.1,4.9L13.1,4.9z"/%3E%3C/g%3E%3C/svg%3E%0A`;
}
function useOverviewChartData(overviewData, overviewMetricsForChart, selectedMetrics, isCompareActive, siteNotesStore) {
  const chartRawDates = ref([]);
  const chartSeriesConfig = computed(() => {
    const metrics = overviewMetricsForChart.value || [];
    const selected = selectedMetrics.value || [];
    const DERIVED_BASE_METRICS = {
      returningUsers: ["totalUsers", "newUsers"],
      pageViewsPerUser: ["screenPageViews", "totalUsers"]
    };
    const basesOnlyForDerived = /* @__PURE__ */ new Set();
    for (const derivedKey of DERIVED_METRICS) {
      if (!selected.includes(derivedKey)) {
        continue;
      }
      const bases = DERIVED_BASE_METRICS[derivedKey] || [];
      for (const base of bases) {
        if (!selected.includes(base)) {
          basesOnlyForDerived.add(base);
        }
      }
    }
    const configs = metrics.map((metricName, index) => {
      if (basesOnlyForDerived.has(metricName)) {
        return null;
      }
      const display = OVERVIEW_METRIC_DISPLAY[metricName];
      if (!display) {
        return null;
      }
      return {
        metric: metricName,
        id: display.id,
        label: display.label,
        color: BASE_SERIES_COLORS[index % BASE_SERIES_COLORS.length],
        derived: false
      };
    }).filter(Boolean);
    const offset = configs.length;
    DERIVED_METRICS.forEach((metricName, i) => {
      if (!selected.includes(metricName)) {
        return;
      }
      if (configs.some((c) => c.metric === metricName)) {
        return;
      }
      const display = OVERVIEW_METRIC_DISPLAY[metricName];
      if (!display) {
        return;
      }
      configs.push({
        metric: metricName,
        id: display.id,
        label: display.label,
        color: BASE_SERIES_COLORS[(offset + i) % BASE_SERIES_COLORS.length],
        derived: true
      });
    });
    return configs;
  });
  const hasComparisonData = computed(() => {
    const rows = overviewData.value?.rows;
    if (!Array.isArray(rows) || rows.length === 0) {
      return false;
    }
    const m = rows[0]?.m;
    if (!Array.isArray(m) || m.length === 0) {
      return false;
    }
    const firstCell = m[0];
    return Array.isArray(firstCell) && firstCell.length === 2;
  });
  const chartLegendsAll = computed(() => {
    const configs = chartSeriesConfig.value;
    if (!hasComparisonData.value || !isCompareActive.value) {
      return configs.map((s) => ({ id: s.metric, label: s.label, color: s.color }));
    }
    const legends = [];
    for (const s of configs) {
      legends.push({ id: s.metric, label: s.label, color: s.color });
      legends.push({ id: `${s.metric}_previous`, label: `${s.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`, color: s.color });
    }
    return legends;
  });
  const chartLegends = computed(() => chartLegendsAll.value.filter((l) => !/previous/i.test(l.label)));
  const chartColors = computed(() => chartLegendsAll.value.map((l) => l.color));
  const chartStrokeDashArray = computed(() => {
    if (!hasComparisonData.value || !isCompareActive.value) {
      return [];
    }
    const n = chartSeriesConfig.value.length * 2;
    return Array.from({ length: n }, (_, i) => i % 2 === 0 ? 0 : 5);
  });
  const siteNoteAnnotations = computed(() => {
    const notesByDate = siteNotesStore.siteNotesByDateCompact;
    const rawDates = chartRawDates.value;
    const importantOnly = siteNotesStore.importantFilter === true;
    if (!rawDates.length || !Object.keys(notesByDate).length) {
      return [];
    }
    const annotations = [];
    for (let i = 0; i < rawDates.length; i++) {
      const dateKey = rawDates[i];
      let dayNotes = notesByDate[dateKey];
      if (!dayNotes || !dayNotes.length) {
        continue;
      }
      if (importantOnly) {
        dayNotes = dayNotes.filter((n) => n.important);
        if (!dayNotes.length) {
          continue;
        }
      }
      const hasImportant = dayNotes.some((n) => n.important);
      const categoryLabel = formatDateLabel(dateKey);
      const firstWithColor = dayNotes.find((n) => n.category?.background_color);
      const rawColor = firstWithColor?.category?.background_color || `#${SITE_NOTE_DEFAULT_COLOR}`;
      const color = rawColor.replace(/^#/, "");
      const svgPath = hasImportant ? getSiteNoteSvgImportant(color) : getSiteNoteSvgNormal(color);
      annotations.push({
        x: categoryLabel,
        y: 0,
        marker: { size: 0 },
        image: { path: svgPath, width: 20, height: 20, offsetY: -10 }
      });
    }
    return annotations;
  });
  function transformRowsToChartData(rows) {
    if (!Array.isArray(rows) || rows.length === 0) {
      return { series: [], categories: [] };
    }
    const currentMetrics = overviewMetricsForChart.value;
    const first = rows[0];
    const isGroupedByDate = first?.d?.length === 1 && Array.isArray(first?.m?.[0]);
    if (isGroupedByDate) {
      let getVal = function(row, metricIdx, periodIdx) {
        const rowM = row?.m;
        if (!Array.isArray(rowM)) {
          return 0;
        }
        if (rowM.length === 1 && Array.isArray(rowM[0]) && !showComparison) {
          const val = rowM[0][metricIdx];
          return parseFloat(val) || 0;
        }
        const cell = rowM[metricIdx];
        if (Array.isArray(cell)) {
          return parseFloat(cell[periodIdx]) || 0;
        }
        return 0;
      };
      const sortedRows = [...rows].sort((a, b) => (a.d[0] || "").localeCompare(b.d[0] || ""));
      const categories2 = sortedRows.map((r) => formatDateLabel(r.d[0]));
      chartRawDates.value = sortedRows.map((r) => r.d[0]);
      const m = first?.m;
      const isCompareFormat = Array.isArray(m) && m.length >= 1 && Array.isArray(m[0]) && m[0].length === 2;
      const showComparison = isCompareFormat && isCompareActive.value;
      const currIdx = 1;
      const prevIdx = 0;
      const series2 = [];
      for (const seriesConfig of chartSeriesConfig.value) {
        if (seriesConfig.derived) {
          if (seriesConfig.metric === "returningUsers") {
            const totalUsersIdx = currentMetrics.indexOf("totalUsers");
            const newUsersIdx = currentMetrics.indexOf("newUsers");
            if (totalUsersIdx === -1 || newUsersIdx === -1) {
              series2.push({ name: seriesConfig.label, data: [] });
              if (showComparison) {
                series2.push({ name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`, data: [] });
              }
              continue;
            }
            series2.push({
              name: seriesConfig.label,
              data: sortedRows.map((row) => {
                const tu = getVal(row, totalUsersIdx, currIdx);
                const nu = getVal(row, newUsersIdx, currIdx);
                return Math.max(0, tu - nu);
              })
            });
            if (showComparison) {
              series2.push({
                name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`,
                data: sortedRows.map((row) => {
                  const tu = getVal(row, totalUsersIdx, prevIdx);
                  const nu = getVal(row, newUsersIdx, prevIdx);
                  return Math.max(0, tu - nu);
                })
              });
            }
            continue;
          }
          if (seriesConfig.metric === "pageViewsPerUser") {
            const screenPageViewsIdx = currentMetrics.indexOf("screenPageViews");
            const totalUsersIdx = currentMetrics.indexOf("totalUsers");
            if (screenPageViewsIdx === -1 || totalUsersIdx === -1) {
              series2.push({ name: seriesConfig.label, data: [] });
              if (showComparison) {
                series2.push({ name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`, data: [] });
              }
              continue;
            }
            series2.push({
              name: seriesConfig.label,
              data: sortedRows.map((row) => {
                const pv = getVal(row, screenPageViewsIdx, currIdx);
                const tu = getVal(row, totalUsersIdx, currIdx);
                return tu ? pv / tu : 0;
              })
            });
            if (showComparison) {
              series2.push({
                name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`,
                data: sortedRows.map((row) => {
                  const pv = getVal(row, screenPageViewsIdx, prevIdx);
                  const tu = getVal(row, totalUsersIdx, prevIdx);
                  return tu ? pv / tu : 0;
                })
              });
            }
            continue;
          }
          series2.push({ name: seriesConfig.label, data: [] });
          if (showComparison) {
            series2.push({ name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`, data: [] });
          }
          continue;
        }
        const metricIndex = currentMetrics.indexOf(seriesConfig.metric);
        if (metricIndex === -1) {
          series2.push({ name: seriesConfig.label, data: [] });
          if (showComparison) {
            series2.push({ name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`, data: [] });
          }
          continue;
        }
        series2.push({
          name: seriesConfig.label,
          data: sortedRows.map((row) => {
            const raw = getVal(row, metricIndex, currIdx);
            if (isRateMetric(seriesConfig.metric)) {
              return toPercentValue(raw);
            }
            if (isDurationMetric(seriesConfig.metric)) {
              return secondsToMinutes(raw);
            }
            return raw;
          })
        });
        if (showComparison) {
          series2.push({
            name: `${seriesConfig.label} (${PREVIOUS_PERIOD_LEGEND_LABEL})`,
            data: sortedRows.map((row) => {
              const raw = getVal(row, metricIndex, prevIdx);
              if (isRateMetric(seriesConfig.metric)) {
                return toPercentValue(raw);
              }
              if (isDurationMetric(seriesConfig.metric)) {
                return secondsToMinutes(raw);
              }
              return raw;
            })
          });
        }
      }
      return { series: series2, categories: categories2 };
    }
    const SESSIONS_INDEX = currentMetrics.indexOf("sessions");
    const BOUNCE_RATE_INDEX = currentMetrics.indexOf("bounceRate");
    const ENGAGEMENT_RATE_INDEX = currentMetrics.indexOf("engagementRate");
    function parseMetric(m, idx) {
      const arr = Array.isArray(m) ? m : [m];
      return parseFloat(arr[idx]) || 0;
    }
    const aggregatedByDate = {};
    for (const row of rows) {
      const date = row?.d?.[0];
      if (!date) {
        continue;
      }
      const metrics = row.m;
      if (!Array.isArray(metrics)) {
        continue;
      }
      if (!aggregatedByDate[date]) {
        aggregatedByDate[date] = { sums: {}, rateWeighted: {} };
      }
      const sessions = SESSIONS_INDEX >= 0 ? parseMetric(metrics[SESSIONS_INDEX], 0) : 0;
      for (let i = 0; i < metrics.length; i++) {
        const val = parseMetric(metrics[i], 0);
        if (i === BOUNCE_RATE_INDEX || i === ENGAGEMENT_RATE_INDEX) {
          if (!aggregatedByDate[date].rateWeighted[i]) {
            aggregatedByDate[date].rateWeighted[i] = { num: 0, denom: 0 };
          }
          aggregatedByDate[date].rateWeighted[i].num += val * sessions;
          aggregatedByDate[date].rateWeighted[i].denom += sessions;
        } else {
          aggregatedByDate[date].sums[i] = (aggregatedByDate[date].sums[i] ?? 0) + val;
        }
      }
    }
    const sortedDates = Object.keys(aggregatedByDate).sort();
    const categories = sortedDates.map((d) => formatDateLabel(d));
    chartRawDates.value = sortedDates;
    function getSum(day, idx) {
      const rw = day?.rateWeighted?.[idx];
      if (rw && rw.denom > 0) {
        return rw.num / rw.denom;
      }
      return parseFloat(day?.sums?.[idx]) || 0;
    }
    const series = chartSeriesConfig.value.map((seriesConfig) => {
      if (seriesConfig.derived) {
        if (seriesConfig.metric === "returningUsers") {
          const totalUsersIdx = currentMetrics.indexOf("totalUsers");
          const newUsersIdx = currentMetrics.indexOf("newUsers");
          if (totalUsersIdx === -1 || newUsersIdx === -1) {
            return { name: seriesConfig.label, data: [] };
          }
          return {
            name: seriesConfig.label,
            data: sortedDates.map((date) => {
              const day = aggregatedByDate[date];
              if (!day) {
                return 0;
              }
              return Math.max(0, getSum(day, totalUsersIdx) - getSum(day, newUsersIdx));
            })
          };
        }
        if (seriesConfig.metric === "pageViewsPerUser") {
          const screenPageViewsIdx = currentMetrics.indexOf("screenPageViews");
          const totalUsersIdx = currentMetrics.indexOf("totalUsers");
          if (screenPageViewsIdx === -1 || totalUsersIdx === -1) {
            return { name: seriesConfig.label, data: [] };
          }
          return {
            name: seriesConfig.label,
            data: sortedDates.map((date) => {
              const day = aggregatedByDate[date];
              if (!day) {
                return 0;
              }
              const tu = getSum(day, totalUsersIdx);
              return tu ? getSum(day, screenPageViewsIdx) / tu : 0;
            })
          };
        }
        return { name: seriesConfig.label, data: [] };
      }
      const metricIndex = currentMetrics.indexOf(seriesConfig.metric);
      if (metricIndex === -1) {
        return { name: seriesConfig.label, data: [] };
      }
      return {
        name: seriesConfig.label,
        data: sortedDates.map((date) => {
          const day = aggregatedByDate[date];
          if (!day) {
            return 0;
          }
          const rw = day.rateWeighted?.[metricIndex];
          let value;
          if (rw && rw.denom > 0) {
            value = rw.num / rw.denom;
          } else {
            value = parseFloat(day.sums?.[metricIndex]) || 0;
          }
          if (isRateMetric(seriesConfig.metric)) {
            return toPercentValue(value);
          }
          if (isDurationMetric(seriesConfig.metric)) {
            return secondsToMinutes(value);
          }
          return value;
        })
      };
    });
    return { series, categories };
  }
  const chartData = computed(() => {
    if (!overviewData.value) {
      return { series: [], categories: [] };
    }
    if (overviewData.value.rows && overviewData.value.rows.length > 0) {
      return transformRowsToChartData(overviewData.value.rows);
    }
    if (overviewData.value.chart) {
      return overviewData.value.chart;
    }
    return { series: [], categories: [] };
  });
  return {
    chartData,
    chartSeriesConfig,
    chartLegends,
    chartColors,
    chartStrokeDashArray,
    chartRawDates,
    formatDateLabel,
    siteNoteAnnotations,
    hasComparisonData,
    isRateMetric,
    toPercentValue,
    OVERVIEW_METRIC_DISPLAY
  };
}
export {
  isAvgMetric as a,
  isDurationMetric as b,
  formatDateLabel as f,
  isRateMetric as i,
  toPercentValue as t,
  useOverviewChartData as u
};
