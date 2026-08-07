import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, c as createElementBlock, F as Fragment, f as renderList, u as unref, m as computed } from "./toastStore-CRCNwITM.js";
import { s as sprintf, _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { u as useModal } from "./addons-CSVIjAyY.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./Icon-Cz1-Vo-r.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./Modal-B9mMTzc_.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./useNotices-BpzNuZJ7.js";
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
const EVENT_COUNT_DIMENSIONS = ["link_type"];
function getEnabledDimensions() {
  const allDefinitions = getMiGlobal("dimensions", []);
  const userConfig = getMiGlobal("custom_dimensions_config", []);
  if (!Array.isArray(allDefinitions) || !Array.isArray(userConfig) || userConfig.length === 0) {
    return [];
  }
  const defsByType = {};
  for (const def of allDefinitions) {
    if (def.type) {
      defsByType[def.type] = def;
    }
  }
  const enabled = [];
  for (const cfg of userConfig) {
    const defType = cfg.type;
    const def = defsByType[defType];
    if (!def || !def.enabled) {
      continue;
    }
    const key = defType === "user_id" ? "wp_user_id" : defType;
    enabled.push({
      id: cfg.id,
      key,
      type: defType,
      title: def.title || "",
      label: def.label || def.title || key,
      tooltip: def.tooltip || "",
      metric: def.metric || "pageviews"
    });
  }
  return enabled;
}
function buildDimensionQuery(dimKey) {
  const primaryMetric = EVENT_COUNT_DIMENSIONS.includes(dimKey) ? "eventCount" : "screenPageViews";
  return {
    id: `dim_${dimKey}`,
    // No `date`: GA4 aggregates one row per dimension value over the full range
    // (mirrors the legacy DimensionsServiceV4). With `date`, the relay's alphabetical
    // dimension sort returns [value, date] and the client de-dup — which keys on a
    // leading date dimension — never collapsed the rows, so every value was repeated
    // once per day.
    dimensions: [`customEvent:${dimKey}`],
    metrics: [primaryMetric, "totalPurchasers", "totalRevenue"],
    orderBy: [{ field: primaryMetric, desc: true }],
    limit: 10,
    filters: {
      operator: "and",
      conditions: [{
        field: `customEvent:${dimKey}`,
        type: "dimension",
        match: "exact",
        value: "(not set)",
        caseSensitive: false,
        not: true
      }]
    }
  };
}
const MAX_QUERIES_PER_BATCH = 5;
function chunkQueries(queries, size = MAX_QUERIES_PER_BATCH) {
  const chunks = [];
  for (let i = 0; i < queries.length; i += size) {
    chunks.push(queries.slice(i, i + size));
  }
  return chunks;
}
async function fetchDimensionsReportData(dateRange, apiFilters = null) {
  const enabledDims = getEnabledDimensions();
  if (enabledDims.length === 0) {
    return {};
  }
  const queries = enabledDims.map((dim) => applyFiltersToQuery(buildDimensionQuery(dim.key), apiFilters));
  const queryChunks = chunkQueries(queries);
  const compareActive = isCompareActive(dateRange);
  const errorLabel = __("Error loading dimensions report data", "google-analytics-for-wordpress");
  const fetchAll = async (chunks, start, end, dr, fetcher) => {
    const results = await Promise.all(chunks.map((chunk) => fetcher(chunk, start, end, dr)));
    return Object.assign({}, ...results);
  };
  const suffixPrev = (obj) => {
    const out = {};
    for (const [key, value] of Object.entries(obj)) {
      out[`${key}_prev`] = value;
    }
    return out;
  };
  return fetchCachedReportSection({
    cacheGroup: "dimensions",
    cacheKeyPrefix: "dimensions_report",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const bearerFetch = async (chunk, s, e, dr) => {
        const body = await relayReportingQuery(buildRequestBody(s, e, chunk, dr));
        return extractQueryResults(body, chunk.map((q) => q.id));
      };
      const [current, prev] = await Promise.all([
        fetchAll(queryChunks, start, end, dateRange, bearerFetch),
        compareActive ? fetchAll(queryChunks, dateRange.compareStart, dateRange.compareEnd, null, bearerFetch) : Promise.resolve({})
      ]);
      return { ...current, ...suffixPrev(prev) };
    },
    onFallback: async ({ start, end }) => {
      const fallbackFetch = (chunk, s, e, dr) => relayFallbackFetch(
        "api/v3/reporting/query",
        buildRequestBody(s, e, chunk, dr),
        (body) => extractQueryResults(body, chunk.map((q) => q.id)),
        errorLabel
      );
      const [current, prev] = await Promise.all([
        fetchAll(queryChunks, start, end, dateRange, fallbackFetch),
        compareActive ? fetchAll(queryChunks, dateRange.compareStart, dateRange.compareEnd, null, fallbackFetch) : Promise.resolve({})
      ]);
      return { ...current, ...suffixPrev(prev) };
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
function generateTableRows(dimensions, prefix, baseCounts, compare = false) {
  const rows = dimensions.map((dim) => {
    const rand = seededRandom(`${prefix}-${dim}`);
    return {
      d: [dim],
      m: [baseCounts.map((base, colIdx) => {
        const colRand = seededRandom(`${prefix}-${dim}-col${colIdx}`);
        if (compare && colIdx === 0) {
          if (base < 1) {
            const curr2 = base * (0.5 + colRand);
            const prev2 = curr2 * (0.85 + seededRandom(`${prefix}-${dim}-prev`) * 0.1);
            return [prev2.toFixed(6), curr2.toFixed(6)];
          }
          const curr = Math.max(1, Math.round(base * (0.4 + colRand * 1.2)));
          const prev = Math.max(1, Math.round(curr * (0.78 + seededRandom(`${prefix}-${dim}-prev`) * 0.15)));
          if (base % 1 !== 0) {
            return [prev.toFixed(2), curr.toFixed(2)];
          }
          return [String(prev), String(curr)];
        }
        if (base < 1) {
          return (base * (0.5 + colRand)).toFixed(6);
        }
        const val = Math.max(1, Math.round(base * (0.4 + colRand * 1.2)));
        return base % 1 !== 0 ? val.toFixed(2) : String(val);
      })],
      _sort: rand
    };
  });
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
const SAMPLE_DIMENSIONS = {
  author: {
    labels: ["John Smith", "Jane Doe", "Bob Wilson", "Alice Brown", "Chris Lee", "Sarah Kim"],
    base: [320, 5, 89.5]
  },
  post_type: {
    labels: ["post", "page", "product", "landing_page", "portfolio", "review"],
    base: [480, 8, 145]
  },
  category: {
    labels: ["Marketing", "SEO", "WordPress", "Analytics", "Social Media", "Content Strategy", "Email Marketing"],
    base: [260, 4, 72]
  },
  tags: {
    labels: ["tutorial", "guide", "tips", "beginner", "advanced", "case-study", "how-to"],
    base: [190, 3, 52]
  },
  seo_score: {
    labels: ["Good", "OK", "Needs Improvement", "N/A", "Poor"],
    base: [350, 6, 95]
  },
  logged_in: {
    labels: ["Logged-In", "Logged-Out"],
    base: [520, 10, 220]
  },
  wp_user_id: {
    labels: ["admin", "editor1", "author2", "contributor3", "subscriber4"],
    base: [150, 2, 35]
  },
  focus_keyword: {
    labels: ["wordpress analytics", "google analytics", "website tracking", "conversion rate", "seo tips"],
    base: [210, 3, 65]
  },
  publish_time: {
    labels: ["Monday, January 5th, 2026 at 9:00am", "Tuesday, January 13th, 2026 at 10:30am", "Wednesday, February 4th, 2026 at 2:00pm", "Thursday, February 19th, 2026 at 8:00am", "Friday, March 6th, 2026 at 11:00am"],
    base: [280, 4, 78]
  }
};
function generateDimensionsSample(dateRange = {}) {
  const compare = !!(dateRange.compareReport && dateRange.compareStart && dateRange.compareEnd);
  const result = {};
  for (const [key, config] of Object.entries(SAMPLE_DIMENSIONS)) {
    result[`dim_${key}`] = {
      rows: generateTableRows(config.labels, `dim-${key}`, config.base, compare)
    };
  }
  return result;
}
const _sfc_main = {
  __name: "DimensionsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro", requiredAddon: "dimensions" });
    const { showConfirmModal } = useModal();
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    function showNoDimensionsModal() {
      const adminUrl = getMiGlobal("admin_url", "/wp-admin/");
      const settingsUrl = `${adminUrl}admin.php?page=monsterinsights_settings#/conversions?section=dimensions`;
      showConfirmModal({
        title: __$1("No Custom Dimensions Configured", "google-analytics-for-wordpress"),
        message: __$1("Please enable at least 1 custom dimension in your MonsterInsights settings to use this report.", "google-analytics-for-wordpress"),
        confirmButtonText: __$1("View Dimensions Settings", "google-analytics-for-wordpress"),
        cancelButtonText: __$1("Close", "google-analytics-for-wordpress"),
        clickToClose: true,
        escToClose: true,
        onConfirm: () => {
          window.location.href = settingsUrl;
        }
      });
    }
    const enabledDimensions = computed(() => {
      if (isBlocked.value || isSampleDataEnabled()) {
        return [
          { key: "author", label: __$1("Author", "google-analytics-for-wordpress"), enabled: true },
          { key: "post_type", label: __$1("Post Type", "google-analytics-for-wordpress"), enabled: true },
          { key: "category", label: __$1("Category", "google-analytics-for-wordpress"), enabled: true },
          { key: "tags", label: __$1("Tags", "google-analytics-for-wordpress"), enabled: true },
          { key: "seo_score", label: __$1("SEO Score", "google-analytics-for-wordpress"), enabled: true },
          { key: "logged_in", label: __$1("Logged In", "google-analytics-for-wordpress"), enabled: true },
          { key: "wp_user_id", label: __$1("User ID", "google-analytics-for-wordpress"), enabled: true },
          { key: "focus_keyword", label: __$1("Focus Keyword", "google-analytics-for-wordpress"), enabled: true },
          { key: "publish_time", label: __$1("Publish Time", "google-analytics-for-wordpress"), enabled: true }
        ];
      }
      return getEnabledDimensions();
    });
    const dimensionPairs = computed(() => {
      const dims = enabledDimensions.value;
      const pairs = [];
      for (let i = 0; i < dims.length; i += 2) {
        pairs.push(dims.slice(i, i + 2));
      }
      return pairs;
    });
    function getColumns(dim) {
      return [
        { key: "label", label: dim.title || dim.label || dim.key, sortable: true },
        { key: "views", label: __$1("Views", "google-analytics-for-wordpress"), sortable: true }
      ];
    }
    function aggregateDim(dim, suffix = "") {
      const queryKey = `dim_${dim.key}${suffix}`;
      const rows = Array.isArray(rawData.value?.[queryKey]?.rows) ? rawData.value[queryKey].rows : [];
      return aggregateDateEntityRows(rows, { metricCount: 3, avgIndices: [] }).filter((entry) => !shouldHideNotSetValue(entry.dims?.[0]));
    }
    function dimEntryToRow(entry, useValues) {
      const dimVal = entry.dims?.[0];
      const name = dimVal != null && String(dimVal).trim() !== "" ? String(dimVal) : __$1("(not set)", "google-analytics-for-wordpress");
      return {
        label: name,
        views: formatNum(useValues?.[0] || 0)
      };
    }
    function getRows(dim) {
      return aggregateDim(dim).map((entry) => dimEntryToRow(entry, entry.current));
    }
    function getCompareRows(dim) {
      return aggregateDim(dim, "_prev").map((entry) => dimEntryToRow(entry, entry.current));
    }
    function getDimensionEmptyText(label) {
      return sprintf(
        __$1("No data currently for the %s report", "google-analytics-for-wordpress"),
        label
      );
    }
    const { rawData, loading } = useReport({
      fetch: () => fetchDimensionsReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateDimensionsSample(dateRange.value),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      beforeFetch: () => {
        if (enabledDimensions.value.length === 0) {
          showNoDimensionsModal();
          return false;
        }
        return true;
      },
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "required-addon": "dimensions",
        "upsell-feature": "dimensions"
      }, {
        table: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(dimensionPairs.value, (pair, pairIndex) => {
            return openBlock(), createElementBlock("div", {
              key: pairIndex,
              class: "monsterinsights-overview-report-two-col"
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(pair, (dim) => {
                return openBlock(), createBlock(_sfc_main$1, {
                  key: dim.key,
                  title: dim.label || dim.title || dim.key,
                  columns: getColumns(dim),
                  rows: getRows(dim),
                  "compare-rows": getCompareRows(dim),
                  "compare-date-labels": compareDateLabelsForTable.value,
                  loading: unref(loading),
                  "empty-message": getDimensionEmptyText(dim.label || dim.title || dim.key),
                  "has-load-more": false,
                  "required-addon": "dimensions",
                  "required-addon-name": "Dimensions"
                }, null, 8, ["title", "columns", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"]);
              }), 128))
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
