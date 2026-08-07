import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, j as ref, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { f as formatPct, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$2 } from "./ReportChartSection-CPrm1WSX.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import "./TheAppHeader-DEdY-dez.js";
import "./ajax-B_XS1gT5.js";
import "./AppOverlays-BGer0Qoo.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./Icon-Cz1-Vo-r.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./settings-DM9kkmj_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ApexLineChart-BDoZ0ljB.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
import "./LoadingSpinnerInline-B4kX5NYb.js";
import "./SiteNotes-sUVlPnw7.js";
import "./siteNotes-CUK65xMh.js";
import "./ReportTableModal-CDgzf1E8.js";
const { __ } = wp.i18n;
function isCompareActive(dateRange) {
  return !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
}
function withCompare(query, dateRange) {
  if (!isCompareActive(dateRange)) {
    return query;
  }
  const dims = Array.isArray(query?.dimensions) ? query.dimensions : [];
  if (!dims.includes("date") && query?.groupBy !== "date") {
    return query;
  }
  return {
    ...query,
    compare: true,
    compare_start: dateRange.compareStart,
    compare_end: dateRange.compareEnd
  };
}
function buildRequestBody(start, end, queries, dateRange) {
  const body = { start, end, queries };
  if (isCompareActive(dateRange)) {
    body.compareStart = dateRange.compareStart;
    body.compareEnd = dateRange.compareEnd;
  }
  return body;
}
const FORMS_EVENT_FILTER = {
  operator: "and",
  conditions: [
    { field: "eventName", type: "dimension", match: "in", values: ["generate_lead", "form_impression"] }
  ]
};
function getSessionsChartQuery() {
  return {
    id: "sessions_chart",
    dimensions: ["date"],
    metrics: ["sessions", "screenPageViews"],
    groupBy: "date",
    limit: 200
  };
}
const FORMS_OVERVIEW_CHART_QUERY = {
  id: "forms_overview_chart",
  dimensions: ["date", "eventName"],
  metrics: ["eventCount"],
  groupBy: "date",
  limit: 500,
  filters: FORMS_EVENT_FILTER
};
const FORMS_TABLE_QUERY = {
  id: "forms_table",
  dimensions: ["customEvent:form_id", "eventName"],
  metrics: ["eventCount"],
  filters: FORMS_EVENT_FILTER,
  orderBy: [{ field: "eventCount", desc: true }],
  limit: 1e3
};
const FORMS_SOURCE_MEDIUM_TABLE_QUERY = {
  id: "forms_source_medium_table",
  dimensions: ["customEvent:form_id", "sessionSourceMedium", "eventName"],
  metrics: ["eventCount"],
  filters: FORMS_EVENT_FILTER,
  orderBy: [{ field: "sessionSourceMedium", desc: true }],
  limit: 1e3
};
const FORMS_CAMPAIGN_TABLE_QUERY = {
  id: "forms_campaign_table",
  dimensions: ["customEvent:form_id", "sessionCampaignName", "eventName"],
  metrics: ["eventCount"],
  filters: FORMS_EVENT_FILTER,
  orderBy: [{ field: "sessionCampaignName", desc: true }],
  limit: 1e3
};
const QUERY_IDS = [
  "sessions_chart",
  "forms_overview_chart",
  "forms_table",
  "forms_source_medium_table",
  "forms_campaign_table"
];
function extractQueryResults(body, queryIds) {
  let data = null;
  if (body?.success && body?.data) {
    data = body.data?.data ?? body.data;
  } else if (body?.data) {
    data = body.data?.data ?? body.data;
  } else {
    data = body;
  }
  const results = {};
  for (let i = 0; i < queryIds.length; i++) {
    const id = queryIds[i];
    results[id] = data?.[id] || data?.[i] || { rows: [] };
  }
  return results;
}
async function fetchFormsReportData(dateRange, apiFilters = null) {
  const chartQuery = withCompare(applyFiltersToQuery({ ...getSessionsChartQuery() }, apiFilters), dateRange);
  const formsChartQuery = withCompare(applyFiltersToQuery({ ...FORMS_OVERVIEW_CHART_QUERY }, apiFilters), dateRange);
  const formsTableQuery = applyFiltersToQuery({ ...FORMS_TABLE_QUERY }, apiFilters);
  const sourceMediumQuery = applyFiltersToQuery({ ...FORMS_SOURCE_MEDIUM_TABLE_QUERY }, apiFilters);
  const campaignQuery = applyFiltersToQuery({ ...FORMS_CAMPAIGN_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, formsChartQuery, formsTableQuery, sourceMediumQuery, campaignQuery];
  const errorLabel = __("Error loading forms report data", "google-analytics-for-wordpress");
  const tableQueries = [formsTableQuery, sourceMediumQuery, campaignQuery];
  const prevIds = ["forms_table", "forms_source_medium_table", "forms_campaign_table"];
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, tableQueries, null) : null;
  const withPrev = (current, prev) => {
    if (!prev) {
      return current;
    }
    return {
      ...current,
      forms_table_prev: prev.forms_table,
      forms_source_medium_table_prev: prev.forms_source_medium_table,
      forms_campaign_table_prev: prev.forms_campaign_table
    };
  };
  return fetchCachedReportSection({
    cacheGroup: "forms",
    cacheKeyPrefix: "forms_report",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevBodyResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return withPrev(
        extractQueryResults(body, QUERY_IDS),
        prevBody ? extractQueryResults(prevBodyResult, prevIds) : null
      );
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, QUERY_IDS),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => extractQueryResults(body, prevIds),
          errorLabel
        ) : Promise.resolve(null)
      ]);
      return withPrev(current, prev);
    }
  });
}
function generateDates(start, end) {
  const dates = [];
  const s = new Date(start);
  const e = new Date(end);
  while (s <= e) {
    const y = s.getFullYear();
    const m = String(s.getMonth() + 1).padStart(2, "0");
    const d = String(s.getDate()).padStart(2, "0");
    dates.push(`${y}${m}${d}`);
    s.setDate(s.getDate() + 1);
  }
  return dates;
}
function seededRandom(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const ch = seed.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  const x = Math.sin(hash) * 1e4;
  return x - Math.floor(x);
}
function sampleMetric(date, metricSeed, base, variance = 0.4) {
  const rand = seededRandom(`${date}-${metricSeed}`);
  const year = parseInt(date.substring(0, 4), 10);
  const month = parseInt(date.substring(4, 6), 10) - 1;
  const day = parseInt(date.substring(6, 8), 10);
  const dow = new Date(year, month, day).getDay();
  const weekendFactor = dow === 0 || dow === 6 ? 0.6 + rand * 0.15 : 1;
  const value = base * (1 - variance + rand * variance * 2) * weekendFactor;
  return Math.max(1, Math.round(value));
}
function generateChartRows(dates) {
  return dates.map((date) => {
    const sessions = sampleMetric(date, "sessions", 150, 0.45);
    const pageViews = sampleMetric(date, "pageviews", Math.round(sessions * 1.6), 0.2);
    return { d: [date], m: [[String(sessions), String(pageViews)]] };
  });
}
function generateFormsChartRows(dates) {
  return dates.map((date) => {
    const impressions = sampleMetric(date, "form-impressions", 80, 0.4);
    const conversions = sampleMetric(date, "form-conversions", 20, 0.45);
    return {
      d: [date],
      m: [[String(impressions + conversions)]],
      rows: [
        { d: [date, "form_impression"], m: [[String(impressions)]] },
        { d: [date, "generate_lead"], m: [[String(conversions)]] }
      ]
    };
  });
}
function metricCell(curr, seed, compare) {
  if (!compare) {
    return [String(curr)];
  }
  const prev = Math.max(1, Math.round(curr * (0.72 + seededRandom(`${seed}-p`) * 0.22)));
  return [String(prev), String(curr)];
}
function generateFormsTableRows(formIds, compare = false) {
  const rows = [];
  for (const formId of formIds) {
    const rand = seededRandom(`forms-table-${formId}`);
    const impressions = Math.max(10, Math.round(200 * (0.3 + rand * 1.2)));
    const convRand = seededRandom(`forms-conv-${formId}`);
    const conversions = Math.max(1, Math.round(impressions * (0.1 + convRand * 0.3)));
    rows.push({
      d: [formId, "form_impression"],
      m: [metricCell(impressions, `forms-table-imp-${formId}`, compare)],
      _sort: rand
    });
    rows.push({
      d: [formId, "generate_lead"],
      m: [metricCell(conversions, `forms-table-conv-${formId}`, compare)],
      _sort: rand
    });
  }
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
function generateFormsSourceMediumRows(sourceMediums, compare = false) {
  const rows = [];
  for (const sm of sourceMediums) {
    const rand = seededRandom(`forms-sm-${sm}`);
    const impressions = Math.max(5, Math.round(120 * (0.3 + rand * 1.2)));
    const convRand = seededRandom(`forms-sm-conv-${sm}`);
    const conversions = Math.max(1, Math.round(impressions * (0.08 + convRand * 0.25)));
    rows.push({
      d: ["", sm, "form_impression"],
      m: [metricCell(impressions, `forms-sm-imp-${sm}`, compare)],
      _sort: rand
    });
    rows.push({
      d: ["", sm, "generate_lead"],
      m: [metricCell(conversions, `forms-sm-conv-${sm}`, compare)],
      _sort: rand
    });
  }
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
function generateFormsCampaignRows(campaigns, compare = false) {
  const rows = [];
  for (const campaign of campaigns) {
    const rand = seededRandom(`forms-camp-${campaign}`);
    const impressions = Math.max(5, Math.round(100 * (0.3 + rand * 1.2)));
    const convRand = seededRandom(`forms-camp-conv-${campaign}`);
    const conversions = Math.max(1, Math.round(impressions * (0.1 + convRand * 0.3)));
    rows.push({
      d: ["", campaign, "form_impression"],
      m: [metricCell(impressions, `forms-camp-imp-${campaign}`, compare)],
      _sort: rand
    });
    rows.push({
      d: ["", campaign, "generate_lead"],
      m: [metricCell(conversions, `forms-camp-conv-${campaign}`, compare)],
      _sort: rand
    });
  }
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
function generateFormsReportSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const compare = !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
  const formIds = ["wpforms-contact-1", "wpforms-newsletter-3", "gf-quote-request-7", "cf7-support-12", "wpforms-signup-5", "gf-feedback-9"];
  const sourceMediums = ["google / organic", "direct / (none)", "facebook / social", "newsletter / email", "bing / cpc", "twitter / social"];
  const campaigns = ["spring_sale_2026", "newsletter_feb", "google_ads_brand", "facebook_retargeting", "(not set)", "holiday_promo"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    forms_overview_chart: { rows: generateFormsChartRows(dates) },
    forms_table: { rows: generateFormsTableRows(formIds, compare) },
    forms_source_medium_table: { rows: generateFormsSourceMediumRows(sourceMediums, compare) },
    forms_campaign_table: { rows: generateFormsCampaignRows(campaigns, compare) }
  };
}
const _sfc_main = {
  __name: "FormsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro", requiredAddon: "forms" });
    const activeChartTab = ref("sessions");
    const activeBreakdown = ref("none");
    const chartTabs = [
      { id: "sessions", label: __$1("Sessions", "google-analytics-for-wordpress"), icon: "users" },
      { id: "pageviews", label: __$1("Pageviews", "google-analytics-for-wordpress"), icon: "view" },
      { id: "form_impressions", label: __$1("Form Impressions", "google-analytics-for-wordpress"), icon: "form-impressions" },
      { id: "form_completions", label: __$1("Form Completions", "google-analytics-for-wordpress"), icon: "form-completions" }
    ];
    const breakdownTabs = [
      { label: __$1("None", "google-analytics-for-wordpress"), value: "none" },
      { label: __$1("Source / Medium", "google-analytics-for-wordpress"), value: "source-medium" },
      { label: __$1("Campaign", "google-analytics-for-wordpress"), value: "campaign" }
    ];
    const chartRawDates = computed(() => {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) return [];
      return chartResult.rows.map((row) => row?.d?.[0] || "");
    });
    const isCompareActive2 = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    function getBreakdownTableRows() {
      if (!rawData.value) return { rows: [], prevRows: [], dims: [] };
      let result;
      let prevResult;
      let dims;
      if (activeBreakdown.value === "source-medium") {
        result = rawData.value.forms_source_medium_table;
        prevResult = rawData.value.forms_source_medium_table_prev;
        dims = FORMS_SOURCE_MEDIUM_TABLE_QUERY.dimensions;
      } else if (activeBreakdown.value === "campaign") {
        result = rawData.value.forms_campaign_table;
        prevResult = rawData.value.forms_campaign_table_prev;
        dims = FORMS_CAMPAIGN_TABLE_QUERY.dimensions;
      } else {
        result = rawData.value.forms_table;
        prevResult = rawData.value.forms_table_prev;
        dims = FORMS_TABLE_QUERY.dimensions;
      }
      return {
        rows: Array.isArray(result?.rows) ? result.rows : [],
        prevRows: Array.isArray(prevResult?.rows) ? prevResult.rows : [],
        dims
      };
    }
    const formsChartByDate = computed(() => {
      const chartResult = rawData.value?.forms_overview_chart;
      if (!chartResult?.rows?.length) return {};
      const byDate = {};
      for (const row of chartResult.rows) {
        const date = row?.d?.[0] || "";
        if (!byDate[date]) {
          byDate[date] = { impressionsCurr: 0, impressionsPrev: 0, conversionsCurr: 0, conversionsPrev: 0 };
        }
        const subRows = Array.isArray(row.rows) ? row.rows : [row];
        for (const sub of subRows) {
          const eventName = sub?.d?.[1] || "";
          const m0 = Array.isArray(sub?.m?.[0]) ? sub.m[0] : [];
          const isCompareFormat = m0.length === 2 && isCompareActive2.value;
          if (eventName === "form_impression") {
            if (isCompareFormat) {
              byDate[date].impressionsPrev += Number(m0[0]) || 0;
              byDate[date].impressionsCurr += Number(m0[1]) || 0;
            } else {
              byDate[date].impressionsCurr += Number(m0[0]) || 0;
            }
          } else if (eventName === "generate_lead") {
            if (isCompareFormat) {
              byDate[date].conversionsPrev += Number(m0[0]) || 0;
              byDate[date].conversionsCurr += Number(m0[1]) || 0;
            } else {
              byDate[date].conversionsCurr += Number(m0[0]) || 0;
            }
          }
        }
      }
      return byDate;
    });
    const chartData = computed(() => {
      const isSessionsOrPageviews = activeChartTab.value === "sessions" || activeChartTab.value === "pageviews";
      if (isSessionsOrPageviews) {
        return buildSessionsChart();
      }
      return buildFormsChart();
    });
    function buildSessionsChart() {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) return { categories: [], series: [] };
      const rows = chartResult.rows;
      const categories = [];
      const sessionsCurr = [];
      const pageViewsCurr = [];
      const sessionsPrev = [];
      const pageViewsPrev = [];
      const firstM = rows[0]?.m;
      const isCompareFormat = Array.isArray(firstM) && firstM.length === 2 && Array.isArray(firstM[0]) && firstM[0].length === 2 && isCompareActive2.value;
      for (const row of rows) {
        const date = row?.d?.[0] || "";
        categories.push(formatDateLabel(date));
        if (isCompareFormat) {
          const mSessions = row?.m?.[0] || [];
          const mPageViews = row?.m?.[1] || [];
          sessionsPrev.push(Number(mSessions[0]) || 0);
          sessionsCurr.push(Number(mSessions[1]) || 0);
          pageViewsPrev.push(Number(mPageViews[0]) || 0);
          pageViewsCurr.push(Number(mPageViews[1]) || 0);
        } else {
          const m0 = Array.isArray(row?.m?.[0]) ? row.m[0] : [];
          sessionsCurr.push(Number(m0[0]) || 0);
          pageViewsCurr.push(Number(m0[1]) || 0);
        }
      }
      const primaryColor = "#3A93DD";
      const compareColor = "#A0AEC0";
      const isSessionsTab = activeChartTab.value === "sessions";
      const series = [];
      const colors = [];
      const strokeDashArray = [];
      series.push({
        name: isSessionsTab ? "Sessions" : "Pageviews",
        data: isSessionsTab ? sessionsCurr : pageViewsCurr
      });
      colors.push(primaryColor);
      strokeDashArray.push(0);
      if (isCompareFormat) {
        series.push({
          name: "Previous Period",
          data: isSessionsTab ? sessionsPrev : pageViewsPrev
        });
        colors.push(compareColor);
        strokeDashArray.push(5);
      }
      return { categories, series, colors, strokeDashArray };
    }
    function buildFormsChart() {
      const formChart = rawData.value?.forms_overview_chart;
      if (!formChart?.rows?.length) return { categories: [], series: [] };
      const dateMap = formsChartByDate.value;
      const categories = [];
      const currentData = [];
      const previousData = [];
      let hasCompareData = false;
      for (const row of formChart.rows) {
        const date = row?.d?.[0] || "";
        categories.push(formatDateLabel(date));
        const entry = dateMap[date] || { impressionsCurr: 0, impressionsPrev: 0, conversionsCurr: 0, conversionsPrev: 0 };
        if (activeChartTab.value === "form_impressions") {
          currentData.push(entry.impressionsCurr);
          previousData.push(entry.impressionsPrev);
        } else {
          currentData.push(entry.conversionsCurr);
          previousData.push(entry.conversionsPrev);
        }
        if (entry.impressionsPrev || entry.conversionsPrev) {
          hasCompareData = true;
        }
      }
      const primaryColor = "#3A93DD";
      const compareColor = "#A0AEC0";
      const label = activeChartTab.value === "form_impressions" ? "Form Impressions" : "Form Completions";
      const series = [];
      const colors = [];
      const strokeDashArray = [];
      series.push({ name: label, data: currentData });
      colors.push(primaryColor);
      strokeDashArray.push(0);
      if (hasCompareData && isCompareActive2.value) {
        series.push({ name: "Previous Period", data: previousData });
        colors.push(compareColor);
        strokeDashArray.push(5);
      }
      return { categories, series, colors, strokeDashArray };
    }
    const tableTitle = __$1("Forms Report", "google-analytics-for-wordpress");
    const columns = computed(() => {
      let firstCol;
      if (activeBreakdown.value === "source-medium") {
        firstCol = { key: "name", label: __$1("Source / Medium", "google-analytics-for-wordpress"), sortable: true };
      } else if (activeBreakdown.value === "campaign") {
        firstCol = { key: "name", label: __$1("Campaign", "google-analytics-for-wordpress"), sortable: true };
      } else {
        firstCol = { key: "name", label: __$1("Form ID", "google-analytics-for-wordpress"), sortable: true };
      }
      return [
        firstCol,
        { key: "impressions", label: __$1("Impressions", "google-analytics-for-wordpress"), sortable: true },
        { key: "conversions", label: __$1("Conversions", "google-analytics-for-wordpress"), sortable: true },
        { key: "conversionRate", label: __$1("Conversion Rate", "google-analytics-for-wordpress"), sortable: true }
      ];
    });
    const EVENT_NAME_VALUES = /* @__PURE__ */ new Set(["form_impression", "generate_lead"]);
    function aggregateFormRows(rows, dims) {
      if (!Array.isArray(rows) || rows.length === 0) return [];
      const sorted = [...dims].sort();
      const sortedEventIdx = sorted.indexOf("eventName");
      const requestedEventIdx = dims.indexOf("eventName");
      const groupName = requestedEventIdx > 0 ? dims[requestedEventIdx - 1] : dims[0];
      const firstD = Array.isArray(rows[0]?.d) ? rows[0].d : [];
      let eventNameIdx = firstD.findIndex((v) => EVENT_NAME_VALUES.has(v));
      if (eventNameIdx < 0) {
        eventNameIdx = sortedEventIdx;
      }
      const groupIdx = eventNameIdx === sortedEventIdx ? sorted.indexOf(groupName) : dims.indexOf(groupName);
      const grouped = {};
      for (const row of rows) {
        const groupKey = row?.d?.[groupIdx] || "";
        const eventName = row?.d?.[eventNameIdx] || "";
        const m0 = Array.isArray(row?.m?.[0]) ? row.m[0] : [];
        const count = parseFloat(m0.length >= 2 ? m0[m0.length - 1] : m0[0]) || 0;
        if (!grouped[groupKey]) {
          grouped[groupKey] = { impressions: 0, conversions: 0 };
        }
        if (eventName === "form_impression") {
          grouped[groupKey].impressions += count;
        } else if (eventName === "generate_lead") {
          grouped[groupKey].conversions += count;
        }
      }
      return Object.entries(grouped).filter(([key]) => !shouldHideNotSetValue(key)).map(([key, data]) => {
        const name = key && String(key).trim() !== "" ? String(key) : __$1("(not set)", "google-analytics-for-wordpress");
        const rate = data.impressions > 0 ? data.conversions / data.impressions * 100 : 0;
        return {
          name,
          impressions: formatNum(data.impressions),
          conversions: formatNum(data.conversions),
          conversionRate: formatPct(rate)
        };
      });
    }
    const tableRows = computed(() => {
      const { rows, dims } = getBreakdownTableRows();
      return aggregateFormRows(rows, dims);
    });
    const compareTableRows = computed(() => {
      const { prevRows, dims } = getBreakdownTableRows();
      if (!prevRows.length) return [];
      return aggregateFormRows(prevRows, dims);
    });
    const { rawData, loading, error, reload } = useReport({
      fetch: () => fetchFormsReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateFormsReportSample(dateRange.value),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "required-addon": "forms",
        "upsell-feature": "forms"
      }, {
        chart: withCtx(() => [
          createVNode(_sfc_main$2, {
            tabs: chartTabs,
            "active-tab": activeChartTab.value,
            "chart-data": chartData.value,
            loading: unref(loading),
            error: unref(error),
            "show-site-notes": !unref(isBlocked),
            "date-range": unref(overviewStore).dateRange,
            "raw-dates": chartRawDates.value,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: unref(reload)
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range", "raw-dates", "onSiteNotesSaved"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(tableTitle),
            tabs: breakdownTabs,
            "active-tab": activeBreakdown.value,
            columns: columns.value,
            rows: tableRows.value,
            "compare-rows": compareTableRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__$1)("No form data currently available.", "google-analytics-for-wordpress"),
            "onUpdate:activeTab": _cache[1] || (_cache[1] = ($event) => activeBreakdown.value = $event)
          }, null, 8, ["title", "active-tab", "columns", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
