import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, u as unref, c as createElementBlock, t as toDisplayString, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { f as formatPct, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { n as getUpgradeUrl, j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { a as buildGaExplorerReportUrl, b as bounceRateToPercent } from "./buildGaExplorerReportUrl-EaZ84MNO.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import "./TheAppHeader-DEdY-dez.js";
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
import "./LoadingSpinnerInline-B4kX5NYb.js";
import "./ReportTableModal-CDgzf1E8.js";
const { __ } = wp.i18n;
function isCompareActive(dateRange) {
  return !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
}
function buildRequestBody(start, end, queries, dateRange) {
  const body = { start, end, queries };
  if (isCompareActive(dateRange)) {
    body.compareStart = dateRange.compareStart;
    body.compareEnd = dateRange.compareEnd;
  }
  return body;
}
const PAGES_REPORT_TABLE_QUERY = {
  id: "pages_report_table",
  dimensions: ["unifiedPagePathScreen"],
  metrics: [
    "screenPageViews",
    "engagedSessions",
    "newUsers",
    "bounceRate"
  ],
  orderBy: [{ field: "screenPageViews", desc: true }],
  filters: {
    operator: "and",
    conditions: [{
      field: "unifiedPagePathScreen",
      type: "dimension",
      match: "exact",
      value: "(not set)",
      not: true
    }]
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
async function fetchEngagementPagesData(dateRange, apiFilters = null) {
  const queries = [applyFiltersToQuery({ ...PAGES_REPORT_TABLE_QUERY }, apiFilters)];
  const errorLabel = __("Error loading pages report data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, queries, null) : null;
  return fetchCachedReportSection({
    cacheGroup: "publishers",
    cacheKeyPrefix: "publishers_pages",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return {
        ...extractQueryResults(body, ["pages_report_table"]),
        ...prevBody ? { pages_report_table_prev: extractQueryResults(prevResult, ["pages_report_table"]).pages_report_table } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, ["pages_report_table"]),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => ({ pages_report_table_prev: extractQueryResults(body, ["pages_report_table"]).pages_report_table }),
          errorLabel
        ) : Promise.resolve({})
      ]);
      return { ...current, ...prev || {} };
    }
  });
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
function generateEngagementPagesSample() {
  const pages = ["/", "/blog/", "/products/", "/about/", "/contact/", "/pricing/", "/features/", "/docs/"];
  const baseCounts = [480, 260, 140, 0.38];
  const rows = pages.map((dim) => {
    const rand = seededRandom(`ep-${dim}`);
    return {
      d: [dim],
      m: [baseCounts.map((base, colIdx) => {
        const colRand = seededRandom(`ep-${dim}-c${colIdx}`);
        if (base > 0 && base < 1) {
          const val2 = base * (0.5 + colRand * 0.4);
          return val2.toFixed(6);
        }
        const val = Math.max(0, Math.round(base * (0.45 + colRand * 1.1)));
        return base % 1 !== 0 ? val.toFixed(2) : String(val);
      })],
      _sort: rand
    };
  });
  rows.sort((a, b) => b._sort - a._sort);
  return {
    pages_report_table: {
      rows: rows.map(({ d, m }) => ({ d, m }))
    }
  };
}
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-publishers-report__section-error"
};
const GA_PAGES_REPORT = "all-pages-and-screens";
const _sfc_main = {
  __name: "PublishersPagesReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
    function aggregatePages(key) {
      const tableResult = rawData.value?.[key];
      const rows = Array.isArray(tableResult?.rows) ? tableResult.rows : [];
      return aggregateDateEntityRows(rows, { metricCount: 4, avgIndices: [3], weightIndex: 0 }).filter((entry) => !shouldHideNotSetValue(entry.dims?.[0]));
    }
    function pageEntryToRow(entry, vals) {
      const siteUrl = getMiGlobal("site_url", "") || "";
      const dimVal = entry.dims?.[0];
      const hasPath = dimVal != null && String(dimVal).trim() !== "";
      const pagePath = hasPath ? String(dimVal) : __$1("(not set)", "google-analytics-for-wordpress");
      const bouncePct = bounceRateToPercent(vals?.[3] || 0);
      return {
        pagePath,
        // Leave pageUrl empty for "(not set)" rows so ReportDataTable
        // doesn't render a broken link like `<site>/(not set)`.
        pageUrl: hasPath ? siteUrl + pagePath : "",
        pageviews: formatNum(vals?.[0] || 0),
        engagedSessions: formatNum(vals?.[1] || 0),
        newSessions: formatNum(vals?.[2] || 0),
        bounceRate: formatPct(bouncePct)
      };
    }
    const columns = [
      { key: "pagePath", label: __$1("Page", "google-analytics-for-wordpress"), sortable: true, linkKey: "pageUrl" },
      { key: "pageviews", label: __$1("Page Views", "google-analytics-for-wordpress"), sortable: true },
      { key: "engagedSessions", label: __$1("Engaged Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "newSessions", label: __$1("New Sessions", "google-analytics-for-wordpress"), sortable: true },
      // Value is pre-formatted in parsePageRows (formatPct). Do not set type: 'percentage' here —
      // formatCell would call formatPct again on "12.3%" and Number() becomes NaN → 0%.
      { key: "bounceRate", label: __$1("Bounce Rate", "google-analytics-for-wordpress"), sortable: true }
    ];
    const gaAllPagesUrl = computed(() => {
      if (isBlocked.value) {
        return getUpgradeUrl("report", "engagement-pages", "https://www.monsterinsights.com/pricing/");
      }
      const referral = getMiGlobal("ga_referral_url", "");
      return buildGaExplorerReportUrl(referral, GA_PAGES_REPORT, dateRange.value);
    });
    const tableRows = computed(
      () => aggregatePages("pages_report_table").map((entry) => pageEntryToRow(entry, entry.current))
    );
    const compareTableRows = computed(
      () => aggregatePages("pages_report_table_prev").map((entry) => pageEntryToRow(entry, entry.current))
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading, error, loadSample } = useReport({
      fetch: () => fetchEngagementPagesData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateEngagementPagesSample(),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "upsell-feature": "engagement-pages",
        onSeeSample: unref(loadSample)
      }, {
        table: withCtx(() => [
          unref(error) ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(unref(error)), 1)) : (openBlock(), createBlock(_sfc_main$1, {
            key: 1,
            title: unref(__$1)("Pages Report", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareTableRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            searchable: "",
            "show-totals": false,
            "default-sort-key": "pageviews",
            "ga-link": gaAllPagesUrl.value,
            "ga-link-label": unref(__$1)("View All Pages", "google-analytics-for-wordpress"),
            "empty-message": unref(__$1)("No data currently for the Pages report.", "google-analytics-for-wordpress")
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "ga-link", "ga-link-label", "empty-message"]))
        ]),
        _: 1
      }, 8, ["onSeeSample"]);
    };
  }
};
export {
  _sfc_main as default
};
