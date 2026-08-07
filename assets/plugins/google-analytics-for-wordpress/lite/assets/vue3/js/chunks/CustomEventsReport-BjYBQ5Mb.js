import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
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
const SESSIONS_CHART_QUERY = {
  id: "sessions_chart",
  dimensions: ["date"],
  metrics: ["sessions", "screenPageViews"],
  groupBy: "date",
  limit: 200
};
const CUSTOM_EVENTS_TABLE_QUERY = {
  id: "custom_events_table",
  // No `date`: GA4 aggregates one row per (eventName, isKeyEvent) over the full
  // range (mirrors the legacy CustomEventsReportServiceV4). With `date`, the
  // limit (50) capped date×event rows before the client aggregated by event, so
  // events were dropped/undercounted on anything but very short ranges.
  dimensions: ["eventName", "isKeyEvent"],
  metrics: ["sessions", "engagedSessions", "eventCount"],
  orderBy: [{ field: "eventCount", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      {
        field: "eventName",
        type: "dimension",
        match: "startsWith",
        value: "mi-"
      }
    ]
  },
  limit: 50
};
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
async function fetchCustomEventsReportData(dateRange, apiFilters = null) {
  const chartQuery = withCompare(
    applyFiltersToQuery({ ...SESSIONS_CHART_QUERY }, apiFilters),
    dateRange
  );
  const tableQuery = applyFiltersToQuery({ ...CUSTOM_EVENTS_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, tableQuery];
  const errorLabel = __("Error loading custom events report data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [tableQuery], null) : null;
  return fetchCachedReportSection({
    cacheGroup: "publishers",
    cacheKeyPrefix: "publishers_custom_events",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return {
        ...extractQueryResults(body, ["sessions_chart", "custom_events_table"]),
        ...prevBody ? { custom_events_table_prev: extractQueryResults(prevResult, ["custom_events_table"]).custom_events_table } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, ["sessions_chart", "custom_events_table"]),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => ({ custom_events_table_prev: extractQueryResults(body, ["custom_events_table"]).custom_events_table }),
          errorLabel
        ) : Promise.resolve({})
      ]);
      return { ...current, ...prev || {} };
    }
  });
}
function seededRandom(seed) {
  let h = 0;
  const s = String(seed);
  for (let i = 0; i < s.length; i++) {
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  }
  return (h >>> 0) % 1e4 / 1e4;
}
const EVENTS = [
  "mi-form-submit",
  "mi-outbound-link",
  "mi-file-download",
  "mi-affiliate-click",
  "mi-scroll-depth"
];
function generateCustomEventsSample() {
  const dates = [];
  for (let i = 13; i >= 0; i--) {
    const d = /* @__PURE__ */ new Date();
    d.setDate(d.getDate() - i);
    dates.push(
      `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`
    );
  }
  const chartRows = dates.map((d) => ({
    d: [d],
    m: [[String(80 + Math.round(seededRandom(d) * 40)), String(120 + Math.round(seededRandom(`${d}pv`) * 60))]]
  }));
  const tableRows = EVENTS.map((name, idx) => {
    const base = 500 - idx * 80;
    const s = base + Math.round(seededRandom(name) * 50);
    const es = Math.round(s * 0.72);
    const ec = base * 2 + idx * 10;
    const isKey = idx % 2 === 0;
    return {
      d: [name, isKey ? "true" : "false"],
      m: [[String(s), String(es), String(ec)]]
    };
  });
  return {
    sessions_chart: { rows: chartRows },
    custom_events_table: { rows: tableRows }
  };
}
function stripMiEventPrefix(full) {
  const s = String(full ?? "");
  if (s.startsWith("mi-")) {
    return s.slice(3) || s;
  }
  return s;
}
function buildRow(displayName, isKey, sessions, engaged, eventCount) {
  return {
    event_name: displayName,
    event_count: formatNum(eventCount),
    sessions: formatNum(sessions),
    engaged_sessions: formatNum(engaged),
    key_event: "",
    key_event_icon: isKey ? "key-event-check-circle" : ""
  };
}
function parseDateRangeDimensionRows(rows) {
  const previousByEvent = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const d = row?.d ?? [];
    if (d.length < 3) {
      continue;
    }
    const rangeId = String(d[2]).toLowerCase();
    if (rangeId.includes("date_range_1")) {
      previousByEvent.set(String(d[0]), row);
    }
  }
  const tableRows = [];
  const compareRows = [];
  for (const row of rows) {
    const d = row?.d ?? [];
    if (d.length < 3) {
      continue;
    }
    const rangeId = String(d[2]).toLowerCase();
    if (!rangeId.includes("date_range_0")) {
      continue;
    }
    const eventNameFull = String(d[0] ?? "");
    const displayName = stripMiEventPrefix(eventNameFull);
    const isKey = String(d[1] ?? "").toLowerCase() === "true";
    let m = row?.m ?? [];
    if (m.length === 1 && Array.isArray(m[0])) {
      m = m[0];
    }
    const s = parseFloat(m[0]) || 0;
    const es = parseFloat(m[1]) || 0;
    const ec = parseFloat(m[2]) || 0;
    if (ec <= 0) {
      continue;
    }
    const prevRow = previousByEvent.get(eventNameFull);
    let ps = 0;
    let pes = 0;
    let pec = 0;
    if (prevRow) {
      let pm = prevRow?.m ?? [];
      if (pm.length === 1 && Array.isArray(pm[0])) {
        pm = pm[0];
      }
      ps = parseFloat(pm[0]) || 0;
      pes = parseFloat(pm[1]) || 0;
      pec = parseFloat(pm[2]) || 0;
    }
    tableRows.push(buildRow(displayName, isKey, s, es, ec));
    compareRows.push(buildRow(displayName, isKey, ps, pes, pec));
  }
  return { tableRows, compareRows };
}
function buildCustomEventsTableRows(custom_events_table, isCompareActive2, custom_events_table_prev = null) {
  const rows = Array.isArray(custom_events_table?.rows) ? custom_events_table.rows : [];
  if (rows.length === 0) {
    return { tableRows: [], compareRows: [] };
  }
  const hasDateRangeDim = (rows[0]?.d ?? []).some(
    (v) => String(v ?? "").toLowerCase().includes("date_range")
  );
  if (hasDateRangeDim) {
    const { tableRows: tableRows2, compareRows: compareRows2 } = parseDateRangeDimensionRows(rows);
    return {
      tableRows: tableRows2,
      compareRows: isCompareActive2 && compareRows2.length > 0 ? compareRows2 : []
    };
  }
  const eventKey = (entry) => `${entry.dims?.[0] ?? ""}\0${entry.dims?.[1] ?? ""}`;
  const aggregated = aggregateDateEntityRows(rows, { metricCount: 3, avgIndices: [] });
  const visible = aggregated.filter((entry) => (entry.current?.[2] || 0) > 0);
  const prevByKey = /* @__PURE__ */ new Map();
  if (isCompareActive2 && custom_events_table_prev) {
    const prevRows = Array.isArray(custom_events_table_prev?.rows) ? custom_events_table_prev.rows : [];
    for (const entry of aggregateDateEntityRows(prevRows, { metricCount: 3, avgIndices: [] })) {
      prevByKey.set(eventKey(entry), entry.current);
    }
  }
  const toRow = (entry, vals) => {
    const displayName = stripMiEventPrefix(String(entry.dims?.[0] ?? ""));
    const isKey = String(entry.dims?.[1] ?? "").toLowerCase() === "true";
    return buildRow(displayName, isKey, vals?.[0] || 0, vals?.[1] || 0, vals?.[2] || 0);
  };
  const tableRows = visible.map((entry) => toRow(entry, entry.current));
  const compareRows = prevByKey.size > 0 ? visible.map((entry) => toRow(entry, prevByKey.get(eventKey(entry)) || [0, 0, 0])) : [];
  return { tableRows, compareRows };
}
const _sfc_main = {
  __name: "CustomEventsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const activeChartTab = ref("sessions");
    const chartTabs = [
      { id: "sessions", label: __$1("Sessions", "google-analytics-for-wordpress"), icon: "users" },
      { id: "pageviews", label: __$1("Pageviews", "google-analytics-for-wordpress"), icon: "view" }
    ];
    const isCompareActive2 = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const chartRawDates = computed(() => {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) {
        return [];
      }
      return chartResult.rows.map((row) => row?.d?.[0] || "");
    });
    const chartData = computed(() => {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) {
        return { categories: [], series: [] };
      }
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
    });
    const columns = [
      { key: "event_name", label: __$1("Event Name", "google-analytics-for-wordpress"), sortable: true },
      { key: "event_count", label: __$1("Event Count", "google-analytics-for-wordpress"), sortable: true },
      { key: "sessions", label: __$1("Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "engaged_sessions", label: __$1("Engaged Sessions", "google-analytics-for-wordpress"), sortable: true },
      {
        key: "key_event",
        label: __$1("Key event", "google-analytics-for-wordpress"),
        sortable: false,
        compare: false,
        iconKey: "key_event_icon",
        excludeFromTotals: true,
        headerClass: "monsterinsights-overview-report-table__th--key-event monsterinsights-report-table-modal__th--key-event",
        cellClass: "monsterinsights-overview-report-table__td--key-event monsterinsights-report-table-modal__td--key-event"
      }
    ];
    const parsedCustomEventsTable = computed(
      () => buildCustomEventsTableRows(
        rawData.value?.custom_events_table,
        isCompareActive2.value,
        rawData.value?.custom_events_table_prev
      )
    );
    const tableRows = computed(() => parsedCustomEventsTable.value.tableRows);
    const compareTableRows = computed(() => parsedCustomEventsTable.value.compareRows);
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading, error: loadError, loadSample, reload } = useReport({
      fetch: () => fetchCustomEventsReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateCustomEventsSample(),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "custom-events",
        onSeeSample: unref(loadSample)
      }, {
        chart: withCtx(() => [
          createVNode(_sfc_main$2, {
            tabs: chartTabs,
            "active-tab": activeChartTab.value,
            "chart-data": chartData.value,
            loading: unref(loading),
            error: unref(loadError),
            "show-site-notes": !unref(isBlocked),
            "date-range": unref(overviewStore).dateRange,
            "raw-dates": chartRawDates.value,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: unref(reload)
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range", "raw-dates", "onSiteNotesSaved"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__$1)("Custom Events Report", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareTableRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            searchable: "",
            "show-totals": false,
            "row-limit": 50,
            "has-load-more": false,
            "default-sort-key": "event_count",
            "bar-metric-key": "event_count",
            "empty-message": unref(__$1)("No custom events for this period.", "google-analytics-for-wordpress")
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"])
        ]),
        _: 1
      }, 8, ["onSeeSample"]);
    };
  }
};
export {
  _sfc_main as default
};
