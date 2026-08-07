import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, w as withDirectives, v as vModelText, s as createCommentVNode, i as normalizeClass, u as unref, F as Fragment, f as renderList, b as createVNode, n as normalizeStyle, j as ref, m as computed, a1 as storeToRefs, E as createBlock, D as withCtx } from "./toastStore-CRCNwITM.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { b as bounceRateToPercent } from "./buildGaExplorerReportUrl-EaZ84MNO.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$2 } from "./ReportChartSection-CPrm1WSX.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { f as formatPct, a as formatCurr, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TheAppHeader-DEdY-dez.js";
import "./ajax-B_XS1gT5.js";
import "./AppOverlays-BGer0Qoo.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ApexLineChart-BDoZ0ljB.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
import "./SiteNotes-sUVlPnw7.js";
import "./siteNotes-CUK65xMh.js";
const { __ } = wp.i18n;
const MAX_ROWS_PER_QUERY = 1e3;
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
const COUNTRIES_TABLE_QUERY = {
  id: "countries_table",
  dimensions: ["countryId"],
  metrics: [
    "sessions",
    "engagedSessions",
    "bounceRate",
    "transactions",
    "totalRevenue",
    "averagePurchaseRevenue"
  ],
  orderBy: [{ field: "sessions", desc: true }],
  filters: {
    operator: "and",
    conditions: [{
      field: "countryId",
      type: "dimension",
      match: "exact",
      value: "(not set)",
      not: true
    }]
  },
  limit: 500
};
const REGIONS_TABLE_QUERY = {
  id: "regions_table",
  dimensions: ["countryId", "region"],
  metrics: [
    "sessions",
    "engagedSessions",
    "bounceRate",
    "transactions",
    "totalRevenue",
    "averagePurchaseRevenue"
  ],
  orderBy: [{ field: "sessions", desc: true }],
  filters: {
    operator: "and",
    conditions: [{
      field: "region",
      type: "dimension",
      match: "exact",
      value: "(not set)",
      not: true
    }]
  },
  limit: MAX_ROWS_PER_QUERY
};
function extractQueryResults(body, queryIds) {
  const data = body?.data ? body.data?.data ?? body.data : body;
  const results = {};
  for (let i = 0; i < queryIds.length; i++) {
    const id = queryIds[i];
    results[id] = data?.[id] || data?.[i] || { rows: [] };
  }
  return results;
}
async function fetchCountriesReportData(dateRange, apiFilters = null) {
  const chartQuery = withCompare(
    applyFiltersToQuery({ ...SESSIONS_CHART_QUERY }, apiFilters),
    dateRange
  );
  const countriesQuery = applyFiltersToQuery({ ...COUNTRIES_TABLE_QUERY }, apiFilters);
  const regionsQuery = applyFiltersToQuery({ ...REGIONS_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, countriesQuery, regionsQuery];
  const ids = ["sessions_chart", "countries_table", "regions_table"];
  const errorLabel = __("Error loading country report data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [countriesQuery, regionsQuery], null) : null;
  const prevIds = ["countries_table", "regions_table"];
  return fetchCachedReportSection({
    cacheGroup: "publishers",
    cacheKeyPrefix: "publishers_countries",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      const current = extractQueryResults(body, ids);
      if (!prevBody) {
        return current;
      }
      const prev = extractQueryResults(prevResult, prevIds);
      return {
        ...current,
        countries_table_prev: prev.countries_table,
        regions_table_prev: prev.regions_table
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, ids),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => {
            const p = extractQueryResults(body, prevIds);
            return { countries_table_prev: p.countries_table, regions_table_prev: p.regions_table };
          },
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
function generateCountriesSample() {
  const dates = ["20260101", "20260102", "20260103", "20260104", "20260105"];
  const chartRows = dates.map((d) => ({
    d: [d],
    m: [[String(120 + Math.round(seededRandom(d) * 40)), String(200 + Math.round(seededRandom(`${d}pv`) * 60))]]
  }));
  const countriesRows = [
    { d: ["US"], m: [["8420", "5100", "0.42", "88", "12400.5", "141.2"]] },
    { d: ["GB"], m: [["2100", "1200", "0.38", "12", "2100", "175"]] },
    { d: ["DE"], m: [["1800", "980", "0.45", "5", "890", "178"]] }
  ];
  const regionsRows = [
    { d: ["US", "California"], m: [["3200", "1900", "0.40", "32", "5100", "159.4"]] },
    { d: ["US", "Texas"], m: [["2100", "1100", "0.44", "21", "3200", "152.4"]] },
    { d: ["GB", "England"], m: [["1500", "880", "0.36", "9", "1600", "177.8"]] }
  ];
  return {
    sessions_chart: { rows: chartRows },
    countries_table: { rows: countriesRows },
    regions_table: { rows: regionsRows }
  };
}
function bounceDisplayPercent(ratio) {
  const pct = bounceRateToPercent(ratio);
  return Math.round(pct * 100) / 100;
}
function valuesToMetrics(vals) {
  const transactions = vals?.[3] || 0;
  const totalRevenue = vals?.[4] || 0;
  const aov = transactions > 0 ? totalRevenue / transactions : 0;
  return {
    sessions: vals?.[0] || 0,
    engagedSessions: vals?.[1] || 0,
    bouncePercent: bounceDisplayPercent(vals?.[2] || 0),
    purchases: transactions,
    revenue: Math.round(totalRevenue * 100) / 100,
    averageOrderValue: Math.round(aov * 100) / 100
  };
}
const AGG_OPTS = { metricCount: 6, avgIndices: [2], weightIndex: 0 };
function aggregateByKey(table) {
  const rows = Array.isArray(table?.rows) ? table.rows : [];
  const map = /* @__PURE__ */ new Map();
  for (const entry of aggregateDateEntityRows(rows, AGG_OPTS)) {
    map.set((entry.dims || []).map((d) => String(d ?? "").trim()).join("\0"), entry.current);
  }
  return map;
}
function mergeCountriesReport(countries_table, regions_table, countries_prev = null, regions_prev = null) {
  const cRows = Array.isArray(countries_table?.rows) ? countries_table.rows : [];
  const rRows = Array.isArray(regions_table?.rows) ? regions_table.rows : [];
  if (cRows.length === 0) {
    return [];
  }
  const countryAgg = aggregateDateEntityRows(cRows, AGG_OPTS);
  const regionAgg = aggregateDateEntityRows(rRows, AGG_OPTS);
  const prevCountryByKey = countries_prev ? aggregateByKey(countries_prev) : null;
  const prevRegionByKey = regions_prev ? aggregateByKey(regions_prev) : null;
  const byIso = /* @__PURE__ */ new Map();
  for (const entry of countryAgg) {
    const iso = String(entry.dims?.[0] ?? "").trim() || "Unknown";
    const prevVals = prevCountryByKey?.get(iso);
    byIso.set(iso, {
      iso,
      ...valuesToMetrics(entry.current),
      prev: prevVals ? { iso, ...valuesToMetrics(prevVals) } : null,
      regions: []
    });
  }
  for (const entry of regionAgg) {
    const countryId = String(entry.dims?.[0] ?? "").trim() || "Unknown";
    const region = String(entry.dims?.[1] ?? "").trim() || "Unknown";
    const parent = byIso.get(countryId);
    if (!parent) {
      continue;
    }
    const prevVals = prevRegionByKey?.get(`${countryId}\0${region}`);
    parent.regions.push({
      countryId,
      region,
      ...valuesToMetrics(entry.current),
      prev: prevVals ? { countryId, region, ...valuesToMetrics(prevVals) } : null
    });
  }
  return Array.from(byIso.values());
}
let _displayNames = null;
function getDisplayNames() {
  if (!_displayNames) {
    try {
      _displayNames = new Intl.DisplayNames(["en"], { type: "region" });
    } catch {
      _displayNames = null;
    }
  }
  return _displayNames;
}
const ISO_ALPHA2 = /^[A-Z]{2}$/;
function getCountryDisplayName(iso) {
  const raw = iso == null ? "" : String(iso);
  const code = raw.trim().toUpperCase();
  if (!code || code === "UNKNOWN" || !ISO_ALPHA2.test(code)) {
    return raw;
  }
  const dn = getDisplayNames();
  if (dn) {
    try {
      const label = dn.of(code);
      if (label && label !== code) {
        return label;
      }
    } catch {
    }
  }
  return code;
}
const _hoisted_1 = { class: "monsterinsights-overview-report-table monsterinsights-countries-expandable-table" };
const _hoisted_2 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_3 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_4 = {
  key: 0,
  class: "monsterinsights-overview-report-table__header-right"
};
const _hoisted_5 = ["placeholder"];
const _hoisted_6 = { class: "monsterinsights-overview-report-table__table-wrapper" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  rowspan: "2",
  class: "monsterinsights-countries-expandable-table__country-col"
};
const _hoisted_9 = { class: "monsterinsights-overview-report-table__compare-dates-row" };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "monsterinsights-countries-expandable-table__country-col" };
const _hoisted_12 = {
  key: 0,
  class: "monsterinsights-overview-report-table__row--loading"
};
const _hoisted_13 = ["colspan"];
const _hoisted_14 = {
  key: 1,
  class: "monsterinsights-overview-report-table__row--empty"
};
const _hoisted_15 = ["colspan"];
const _hoisted_16 = { class: "monsterinsights-countries-expandable-table__label-cell" };
const _hoisted_17 = ["aria-expanded", "onClick"];
const _hoisted_18 = {
  key: 1,
  class: "monsterinsights-countries-expandable-table__toggle-spacer"
};
const _hoisted_19 = { class: "monsterinsights-countries-expandable-table__name" };
const _hoisted_20 = { class: "monsterinsights-overview-report-table__cell-compare" };
const _hoisted_21 = { class: "monsterinsights-countries-expandable-table__label-cell" };
const _hoisted_22 = { class: "monsterinsights-countries-expandable-table__name monsterinsights-countries-expandable-table__name--region" };
const _hoisted_23 = { class: "monsterinsights-overview-report-table__cell-compare" };
const _sfc_main$1 = {
  __name: "PublisherCountriesExpandableTable",
  props: {
    title: {
      type: String,
      required: true
    },
    /** Merged rows from mergeCountriesReport + labels */
    countries: {
      type: Array,
      default: () => []
    },
    hasCompare: {
      type: Boolean,
      default: false
    },
    compareDateLabels: {
      type: Object,
      default: () => ({ current: "", previous: "" })
    },
    loading: {
      type: Boolean,
      default: false
    },
    emptyMessage: {
      type: String,
      default: ""
    },
    searchable: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const searchQuery = ref("");
    const expanded = ref({});
    const metricColumnDefs = [
      { key: "sessions", label: __$1("Sessions", "google-analytics-for-wordpress") },
      { key: "engagedSessions", label: __$1("Engaged Sessions", "google-analytics-for-wordpress") },
      { key: "bouncePercent", label: __$1("Bounce rate", "google-analytics-for-wordpress") },
      { key: "purchases", label: __$1("Purchases", "google-analytics-for-wordpress") },
      { key: "revenue", label: __$1("Revenue", "google-analytics-for-wordpress") },
      { key: "averageOrderValue", label: __$1("Average Order Value", "google-analytics-for-wordpress") }
    ];
    const totalColspan = computed(() => {
      if (props.hasCompare) {
        return 1 + metricColumnDefs.length * 2;
      }
      return 1 + metricColumnDefs.length;
    });
    const filteredCountries = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      if (!q) return props.countries;
      return props.countries.filter((c) => {
        if (String(c.label || "").toLowerCase().includes(q)) return true;
        return (c.regions || []).some((r) => String(r.label || "").toLowerCase().includes(q));
      });
    });
    const filteredCountriesWithBar = computed(() => {
      const list = filteredCountries.value;
      if (!list.length) return list;
      const values = list.map((c) => Number(c?.sessions) || 0);
      const total = values.reduce((a, b) => a + b, 0);
      if (total <= 0) {
        return list.map((c) => ({ ...c, barPercent: 0 }));
      }
      return list.map((c, i) => ({
        ...c,
        barPercent: Math.min(100, values[i] / total * 100)
      }));
    });
    const gradientColors = /* @__PURE__ */ (() => {
      return { c1: "#EDE5FF", c2: "#D0E8FF", c3: "#FFFFFF" };
    })();
    function getRowGradientStyle(barPercent) {
      if (!barPercent || barPercent <= 0) return {};
      const { c1, c2, c3 } = gradientColors;
      const mid = barPercent / 2;
      return {
        background: `linear-gradient(to right, ${c1} 0%, ${c2} ${mid}%, ${c3} ${barPercent}%, ${c3} 100%)`
      };
    }
    const searchAutoExpanded = computed(() => {
      const q = searchQuery.value.trim().toLowerCase();
      const set = /* @__PURE__ */ new Set();
      if (!q) return set;
      props.countries.forEach((c) => {
        const countryMatches = String(c.label || "").toLowerCase().includes(q);
        if (countryMatches) return;
        const regionMatches = (c.regions || []).some(
          (r) => String(r.label || "").toLowerCase().includes(q)
        );
        if (regionMatches) set.add(c.iso);
      });
      return set;
    });
    function isExpanded(iso) {
      return !!expanded.value[iso] || searchAutoExpanded.value.has(iso);
    }
    function toggleExpand(iso) {
      expanded.value = { ...expanded.value, [iso]: !expanded.value[iso] };
    }
    function formatMetric(row, key, previousPeriod) {
      if (previousPeriod) {
        const p = row.prev;
        if (!p) return "—";
        const v2 = p[key];
        if (v2 === void 0 || v2 === null) return "—";
        return formatValue(key, v2);
      }
      const v = row[key];
      if (v === void 0 || v === null) return "—";
      return formatValue(key, v);
    }
    function formatValue(key, v) {
      if (key === "bouncePercent") {
        return formatPct(Number(v) || 0);
      }
      if (key === "revenue" || key === "averageOrderValue") {
        return formatCurr(Number(v) || 0);
      }
      return formatNum(Number(v) || 0);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", _hoisted_3, toDisplayString(__props.title), 1),
          __props.searchable ? (openBlock(), createElementBlock("div", _hoisted_4, [
            withDirectives(createBaseVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
              type: "search",
              class: "monsterinsights-overview-report-table__search",
              placeholder: __props.searchPlaceholder
            }, null, 8, _hoisted_5), [
              [vModelText, searchQuery.value]
            ])
          ])) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_6, [
          createBaseVNode("table", {
            class: normalizeClass(["monsterinsights-overview-report-table__table", { "monsterinsights-overview-report-table__table--compare": __props.hasCompare }])
          }, [
            __props.hasCompare ? (openBlock(), createElementBlock("thead", _hoisted_7, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", _hoisted_8, toDisplayString(unref(__$1)("Country / Region", "google-analytics-for-wordpress")), 1),
                (openBlock(), createElementBlock(Fragment, null, renderList(metricColumnDefs, (col) => {
                  return createBaseVNode("th", {
                    key: col.key,
                    colspan: "2"
                  }, toDisplayString(col.label), 1);
                }), 64))
              ]),
              createBaseVNode("tr", _hoisted_9, [
                (openBlock(), createElementBlock(Fragment, null, renderList(metricColumnDefs, (col) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: "sub-" + col.key
                  }, [
                    createBaseVNode("th", null, toDisplayString(__props.compareDateLabels.current), 1),
                    createBaseVNode("th", null, toDisplayString(__props.compareDateLabels.previous), 1)
                  ], 64);
                }), 64))
              ])
            ])) : (openBlock(), createElementBlock("thead", _hoisted_10, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", _hoisted_11, toDisplayString(unref(__$1)("Country / Region", "google-analytics-for-wordpress")), 1),
                (openBlock(), createElementBlock(Fragment, null, renderList(metricColumnDefs, (col) => {
                  return createBaseVNode("th", {
                    key: col.key
                  }, toDisplayString(col.label), 1);
                }), 64))
              ])
            ])),
            createBaseVNode("tbody", null, [
              __props.loading ? (openBlock(), createElementBlock("tr", _hoisted_12, [
                createBaseVNode("td", {
                  colspan: totalColspan.value,
                  class: "monsterinsights-overview-report-table__cell-loading"
                }, [
                  createVNode(LoadingSpinnerInline),
                  createBaseVNode("span", null, toDisplayString(unref(__$1)("Loading…", "google-analytics-for-wordpress")), 1)
                ], 8, _hoisted_13)
              ])) : filteredCountries.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_14, [
                createBaseVNode("td", {
                  colspan: totalColspan.value,
                  class: "monsterinsights-overview-report-table__cell-empty"
                }, toDisplayString(__props.emptyMessage || unref(__$1)("No data available", "google-analytics-for-wordpress")), 9, _hoisted_15)
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(filteredCountriesWithBar.value, (country) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: country.iso
                }, [
                  createBaseVNode("tr", {
                    style: normalizeStyle(getRowGradientStyle(country.barPercent))
                  }, [
                    createBaseVNode("td", _hoisted_16, [
                      country.regions && country.regions.length > 0 ? (openBlock(), createElementBlock("button", {
                        key: 0,
                        type: "button",
                        class: normalizeClass(["monsterinsights-countries-expandable-table__toggle", { "is-expanded": isExpanded(country.iso) }]),
                        "aria-expanded": isExpanded(country.iso),
                        onClick: ($event) => toggleExpand(country.iso)
                      }, [
                        createVNode(Icon, {
                          name: "chevron-down",
                          size: 16
                        })
                      ], 10, _hoisted_17)) : (openBlock(), createElementBlock("span", _hoisted_18)),
                      createBaseVNode("span", _hoisted_19, toDisplayString(country.label), 1)
                    ]),
                    __props.hasCompare ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(metricColumnDefs, (col) => {
                      return openBlock(), createElementBlock(Fragment, {
                        key: country.iso + "-c-" + col.key
                      }, [
                        createBaseVNode("td", null, toDisplayString(formatMetric(country, col.key, false)), 1),
                        createBaseVNode("td", _hoisted_20, toDisplayString(formatMetric(country, col.key, true)), 1)
                      ], 64);
                    }), 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(metricColumnDefs, (col) => {
                      return createBaseVNode("td", {
                        key: country.iso + "-" + col.key
                      }, toDisplayString(formatMetric(country, col.key, false)), 1);
                    }), 64))
                  ], 4),
                  country.regions && country.regions.length && isExpanded(country.iso) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(country.regions, (reg) => {
                    return openBlock(), createElementBlock("tr", {
                      key: country.iso + "|" + reg.region,
                      class: "monsterinsights-countries-expandable-table__region-row"
                    }, [
                      createBaseVNode("td", _hoisted_21, [
                        createBaseVNode("span", _hoisted_22, toDisplayString(reg.label), 1)
                      ]),
                      __props.hasCompare ? (openBlock(), createElementBlock(Fragment, { key: 0 }, renderList(metricColumnDefs, (col) => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: country.iso + "|" + reg.region + "-c-" + col.key
                        }, [
                          createBaseVNode("td", null, toDisplayString(formatMetric(reg, col.key, false)), 1),
                          createBaseVNode("td", _hoisted_23, toDisplayString(formatMetric(reg, col.key, true)), 1)
                        ], 64);
                      }), 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, renderList(metricColumnDefs, (col) => {
                        return createBaseVNode("td", {
                          key: country.iso + "|" + reg.region + "-" + col.key
                        }, toDisplayString(formatMetric(reg, col.key, false)), 1);
                      }), 64))
                    ]);
                  }), 128)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])
          ], 2)
        ])
      ]);
    };
  }
};
const PublisherCountriesExpandableTable = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e2de11e7"]]);
const _sfc_main = {
  __name: "CountriesReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
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
      if (!chartResult?.rows?.length) return [];
      return chartResult.rows.map((row) => row?.d?.[0] || "");
    });
    const chartData = computed(() => {
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
    });
    const mergedCountries = computed(() => {
      if (!rawData.value?.countries_table?.rows?.length) return [];
      return mergeCountriesReport(
        rawData.value.countries_table,
        rawData.value.regions_table,
        isCompareActive2.value ? rawData.value.countries_table_prev : null,
        isCompareActive2.value ? rawData.value.regions_table_prev : null
      );
    });
    const countriesWithLabels = computed(
      () => mergedCountries.value.map((c) => ({
        ...c,
        label: getCountryDisplayName(c.iso),
        regions: (c.regions || []).map((r) => ({
          ...r,
          label: r.region
        }))
      }))
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading, error: loadError, loadSample, reload } = useReport({
      fetch: () => fetchCountriesReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateCountriesSample(),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "upsell-feature": "countries",
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
          createVNode(PublisherCountriesExpandableTable, {
            title: unref(__$1)("Country Report", "google-analytics-for-wordpress"),
            countries: countriesWithLabels.value,
            "has-compare": isCompareActive2.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            searchable: "",
            "search-placeholder": unref(__$1)("Search countries or regions…", "google-analytics-for-wordpress"),
            "empty-message": unref(__$1)("No country data for this period.", "google-analytics-for-wordpress")
          }, null, 8, ["title", "countries", "has-compare", "compare-date-labels", "loading", "search-placeholder", "empty-message"])
        ]),
        _: 1
      }, 8, ["onSeeSample"]);
    };
  }
};
export {
  _sfc_main as default
};
