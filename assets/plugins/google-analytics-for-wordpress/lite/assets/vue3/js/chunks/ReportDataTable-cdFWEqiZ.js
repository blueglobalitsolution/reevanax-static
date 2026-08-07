import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { _ as _sfc_main$1, u as useSortableTable } from "./ReportTableModal-CDgzf1E8.js";
import { O as OverviewProFeatureModal } from "../reports-LbXqkgoM.js";
import { i as isAddonActive, j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { f as formatPct, a as formatCurr, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, A as createTextVNode, t as toDisplayString, u as unref, s as createCommentVNode, F as Fragment, f as renderList, i as normalizeClass, b as createVNode, E as createBlock, n as normalizeStyle, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-overview-report-table" };
const _hoisted_2 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_3 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_4 = {
  key: 0,
  class: "monsterinsights-overview-report-table__demo-badge"
};
const _hoisted_5 = { class: "monsterinsights-overview-report-table__header-right" };
const _hoisted_6 = {
  key: 0,
  class: "monsterinsights-overview-report-table__tabs"
};
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 0,
  class: "monsterinsights-overview-report-table__tab-divider"
};
const _hoisted_9 = ["href"];
const _hoisted_10 = { class: "monsterinsights-overview-report-table__table-wrapper" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "monsterinsights-overview-report-table__th-content" };
const _hoisted_14 = ["onClick"];
const _hoisted_15 = { class: "monsterinsights-overview-report-table__th-content" };
const _hoisted_16 = { class: "monsterinsights-overview-report-table__compare-dates-row" };
const _hoisted_17 = { key: 1 };
const _hoisted_18 = ["onClick"];
const _hoisted_19 = { class: "monsterinsights-overview-report-table__th-content" };
const _hoisted_20 = {
  key: 0,
  class: "monsterinsights-overview-report-table__row--loading"
};
const _hoisted_21 = ["colspan"];
const _hoisted_22 = {
  key: 1,
  class: "monsterinsights-overview-report-table__row--empty"
};
const _hoisted_23 = ["colspan"];
const _hoisted_24 = {
  key: 0,
  class: "monsterinsights-overview-report-table__cell-with-icon"
};
const _hoisted_25 = ["src", "alt"];
const _hoisted_26 = { key: 2 };
const _hoisted_27 = ["href"];
const _hoisted_28 = { key: 2 };
const _hoisted_29 = {
  key: 0,
  class: "monsterinsights-overview-report-table__cell-with-icon"
};
const _hoisted_30 = ["src", "alt"];
const _hoisted_31 = { key: 2 };
const _hoisted_32 = ["href"];
const _hoisted_33 = { key: 2 };
const _hoisted_34 = { key: 2 };
const _hoisted_35 = { class: "monsterinsights-overview-report-table__totals-row" };
const _hoisted_36 = { class: "monsterinsights-overview-report-table__cell-compare" };
const _hoisted_37 = {
  key: 0,
  class: "monsterinsights-overview-report-table__load-more"
};
const _sfc_main = {
  __name: "ReportDataTable",
  props: {
    title: {
      type: String,
      required: true
    },
    /** Tab definitions: [{ label, value }]. Rendered in the header-right area. */
    tabs: {
      type: Array,
      default: () => []
    },
    /** Active tab value (used with tabs). */
    activeTab: {
      type: String,
      default: ""
    },
    /**
     * Column definitions.
     * Each column: { key, label, sortable?, type?, iconKey?, linkKey?, totalType?, excludeFromTotals?, compare? }
     * type: 'string' | 'number' | 'currency' | 'percentage' | 'decimal' | 'duration'
     * totalType: 'sum' (default) | 'average' — controls how the totals row aggregates this column
     * compare: false — set to false to mark dimension columns (not duplicated in compare mode)
     *   By default, the first column is treated as dimension. Set compare: false on other columns if needed.
     */
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      default: () => []
    },
    /** Previous period rows — same structure as rows. When provided, compare mode is active. */
    compareRows: {
      type: Array,
      default: () => []
    },
    /** Date range labels for compare headers */
    compareDateLabels: {
      type: Object,
      default: () => ({ current: "", previous: "" })
    },
    loading: {
      type: Boolean,
      default: false
    },
    searchable: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: ""
    },
    rowLimit: {
      type: Number,
      default: 20
    },
    barMetricKey: {
      type: String,
      default: ""
    },
    defaultSortKey: {
      type: String,
      default: ""
    },
    showTotals: {
      type: Boolean,
      default: true
    },
    // Explicit totals row (keyed by column key). When set, it replaces the
    // computed sum/average totals — used when a column's total can't be derived
    // from the displayed cells (e.g. visits-weighted averages for rate columns).
    totalsOverride: {
      type: Object,
      default: null
    },
    hasLoadMore: {
      type: Boolean,
      default: true
    },
    gaLink: {
      type: String,
      default: ""
    },
    gaLinkLabel: {
      type: String,
      default: ""
    },
    requiredAddon: {
      type: String,
      default: ""
    },
    requiredAddonName: {
      type: String,
      default: ""
    },
    emptyMessage: {
      type: String,
      default: ""
    }
  },
  emits: ["sort", "update:activeTab"],
  setup(__props, { emit: __emit }) {
    const reportTableModalOpen = ref(false);
    const proModalOpen = ref(false);
    const searchQuery = ref("");
    const isLite = computed(() => true);
    const props = __props;
    const emit = __emit;
    const needsAddonGate = computed(
      () => !!props.requiredAddon && !isAddonActive(props.requiredAddon)
    );
    const hasCompare = computed(() => {
      const rows = props.compareRows;
      if (!Array.isArray(rows) || rows.length === 0) return false;
      const metricKeys = props.columns.filter((col, idx) => idx > 0 && col.compare !== false).map((col) => col.key);
      return rows.some(
        (row) => metricKeys.some((key) => {
          const value = row?.[key];
          return value !== "" && value !== null && value !== void 0;
        })
      );
    });
    const dimensionColumns = computed(() => {
      if (!hasCompare.value) return [];
      return props.columns.filter((col, idx) => idx === 0 || col.compare === false);
    });
    const metricColumns = computed(() => {
      if (!hasCompare.value) return [];
      return props.columns.filter((col, idx) => idx > 0 && col.compare !== false);
    });
    const totalColspan = computed(() => {
      if (hasCompare.value) {
        return dimensionColumns.value.length + metricColumns.value.length * 2;
      }
      return props.columns.length;
    });
    const compareRowsLookup = computed(() => {
      if (!hasCompare.value) return {};
      const firstKey = props.columns[0]?.key;
      if (!firstKey) return {};
      const lookup = {};
      for (const row of props.compareRows) {
        const key = row[firstKey];
        if (key != null) lookup[key] = row;
      }
      return lookup;
    });
    function getCompareValue(item, column) {
      const firstKey = props.columns[0]?.key;
      if (!firstKey) return "";
      const dimValue = item.row[firstKey];
      const compareRow = compareRowsLookup.value[dimValue];
      return compareRow ? compareRow[column.key] ?? "" : "";
    }
    const filteredRows = computed(() => {
      if (!searchQuery.value.trim()) return props.rows;
      const query = searchQuery.value.toLowerCase().trim();
      const textColumns = props.columns.filter((c) => !c.type || c.type === "string");
      return props.rows.filter(
        (row) => textColumns.some((col) => String(row[col.key] || "").toLowerCase().includes(query))
      );
    });
    const rowsSource = computed(() => filteredRows.value);
    const { sortKey, sortDirection, sortedRows, onColumnHeaderClick, toSortableValue } = useSortableTable(rowsSource);
    if (props.defaultSortKey) {
      sortKey.value = props.defaultSortKey;
      sortDirection.value = "desc";
    }
    function handleColumnHeaderClick(column) {
      onColumnHeaderClick(column);
      emit("sort", column.key);
    }
    const displayedRows = computed(() => {
      if (props.rowLimit > 0) {
        return sortedRows.value.slice(0, props.rowLimit);
      }
      return sortedRows.value;
    });
    const gradientColors = /* @__PURE__ */ (() => {
      return { c1: "#EDE5FF", c2: "#D0E8FF", c3: "#FFFFFF" };
    })();
    const displayedRowsWithBar = computed(() => {
      const rows = displayedRows.value;
      const columns = props.columns || [];
      const firstColKey = columns[0]?.key;
      const key = sortKey.value;
      if (rows.length === 0) return [];
      const metricKey = props.barMetricKey || (key && key !== firstColKey ? key : columns[1]?.key || null);
      if (!metricKey) {
        return rows.map((row) => ({ row, barPercent: 0 }));
      }
      const getNum = (row) => toSortableValue(row?.[metricKey]).num;
      const values = rows.map(getNum);
      const total = values.reduce((a, b) => a + b, 0);
      if (total <= 0) {
        return rows.map((row) => ({ row, barPercent: 0 }));
      }
      return rows.map((row, i) => ({
        row,
        barPercent: Math.min(100, values[i] / total * 100)
      }));
    });
    function getRowGradientStyle(barPercent) {
      if (barPercent <= 0) return {};
      const { c1, c2, c3 } = gradientColors;
      const mid = barPercent / 2;
      return {
        background: `linear-gradient(to right, ${c1} 0%, ${c2} ${mid}%, ${c3} ${barPercent}%, ${c3} 100%)`
      };
    }
    function isUrl(val) {
      return typeof val === "string" && (val.startsWith("http") || val.startsWith("/") || val.startsWith("data:"));
    }
    function formatCell(value, column) {
      if (value === null || value === void 0) return "—";
      switch (column.type) {
        case "number":
          return formatNum(value);
        case "currency":
          return formatCurr(value);
        case "percentage":
          return formatPct(value);
        case "decimal":
          return (Number(value) || 0).toFixed(2);
        case "duration": {
          const seconds = Number(value) || 0;
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          return `${mins}:${String(secs).padStart(2, "0")}`;
        }
        default:
          return value;
      }
    }
    const showInlineTotals = computed(() => {
      if (!props.showTotals) return false;
      if (props.loading) return false;
      const rows = filteredRows.value;
      return rows.length > 0 && rows.length <= props.rowLimit;
    });
    function computeTotalsForRows(rows) {
      const columns = props.columns;
      if (!rows || rows.length === 0 || !columns || columns.length === 0) return {};
      const parseNum = (val) => {
        if (val === void 0 || val === null) return 0;
        let str = String(val).replace(/[$,%\s]/g, "");
        const suffix = str.slice(-1).toUpperCase();
        const multiplier = suffix === "K" ? 1e3 : suffix === "M" ? 1e6 : suffix === "B" ? 1e9 : 1;
        if (multiplier !== 1) str = str.slice(0, -1);
        const num = parseFloat(str);
        return Number.isNaN(num) ? 0 : num * multiplier;
      };
      const result = {};
      const firstCol = columns[0];
      result[firstCol.key] = __("Totals", "google-analytics-for-wordpress");
      const currencyCode = getMiGlobal("currency", "USD") || "USD";
      const currencySample = formatCurr(0, currencyCode);
      const currencySymbol = currencySample.replace(/[\d\s.,]/g, "").trim() || "$";
      const currencySymbolEscaped = currencySymbol.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      columns.slice(1).forEach((col) => {
        if (col.excludeFromTotals) {
          result[col.key] = "";
          return;
        }
        const colType = col.type;
        const isCurrencyType = colType === "currency";
        const isPercentType = colType === "percentage";
        const isDurationType = colType === "duration";
        const sampleVal = rows[0]?.[col.key] ?? "";
        const sampleStr = String(sampleVal);
        const isCurrencyAuto = !colType && currencySymbol && sampleStr.startsWith(currencySymbol);
        const isPercentAuto = !colType && sampleStr.endsWith("%");
        const isDurationAuto = !colType && /^\d+:\d{2}$/.test(sampleStr);
        const parseCell = isCurrencyType || isCurrencyAuto ? (val) => {
          if (val === void 0 || val === null) return 0;
          const str = String(val).replace(new RegExp(currencySymbolEscaped, "g"), "").replace(/[%,K]/g, "").replace(/,/g, "");
          return parseFloat(str) || 0;
        } : isDurationType || isDurationAuto ? (val) => {
          const str = String(val || "");
          const parts = str.split(":");
          if (parts.length === 2) return (parseInt(parts[0], 10) || 0) * 60 + (parseInt(parts[1], 10) || 0);
          return parseFloat(str) || 0;
        } : parseNum;
        const values = rows.map((row) => parseCell(row[col.key]));
        const useAverage = col.totalType === "average";
        const sum = values.reduce((a, b) => a + b, 0);
        const avg = values.length > 0 ? sum / values.length : 0;
        if (isDurationType || isDurationAuto) {
          const mins = Math.floor(avg / 60);
          const secs = Math.floor(avg % 60);
          result[col.key] = `${mins}:${String(secs).padStart(2, "0")}`;
        } else if (isPercentType || isPercentAuto) {
          result[col.key] = useAverage ? `${avg.toFixed(1)}%` : `${sum.toFixed(1)}%`;
        } else if (isCurrencyType || isCurrencyAuto) {
          result[col.key] = formatCurr(useAverage ? avg : sum);
        } else {
          if (useAverage) {
            const looksLikeCurrency = String(rows[0]?.[col.key] ?? "").startsWith(currencySymbol);
            result[col.key] = looksLikeCurrency ? formatCurr(avg) : avg.toLocaleString(void 0, { maximumFractionDigits: 2 });
          } else {
            result[col.key] = sum.toLocaleString();
          }
        }
      });
      return result;
    }
    const totals = computed(() => {
      if (!showInlineTotals.value) return {};
      if (props.totalsOverride) return props.totalsOverride;
      return computeTotalsForRows(displayedRows.value);
    });
    const compareTotals = computed(() => {
      if (!showInlineTotals.value || !hasCompare.value) return {};
      return computeTotalsForRows(props.compareRows);
    });
    function handleLoadMoreClick() {
      if (isLite.value || needsAddonGate.value) {
        proModalOpen.value = true;
      } else {
        reportTableModalOpen.value = true;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("h3", _hoisted_3, [
            createTextVNode(toDisplayString(__props.title) + " ", 1),
            needsAddonGate.value ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(__)("Demo Data", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5, [
            __props.tabs.length ? (openBlock(), createElementBlock("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, index) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: tab.value
                }, [
                  createBaseVNode("button", {
                    class: normalizeClass([
                      "monsterinsights-overview-report-table__tab",
                      { "monsterinsights-overview-report-table__tab--active": tab.value === __props.activeTab }
                    ]),
                    onClick: ($event) => _ctx.$emit("update:activeTab", tab.value)
                  }, toDisplayString(tab.label), 11, _hoisted_7),
                  index < __props.tabs.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_8)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])) : createCommentVNode("", true),
            __props.gaLink ? (openBlock(), createElementBlock("a", {
              key: 1,
              href: __props.gaLink,
              target: "_blank",
              rel: "noopener noreferrer",
              class: "monsterinsights-overview-report-table__view-link"
            }, [
              createBaseVNode("span", null, toDisplayString(__props.gaLinkLabel || unref(__)("View in Analytics", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "chevron-right",
                size: 20
              })
            ], 8, _hoisted_9)) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", _hoisted_10, [
          createBaseVNode("table", {
            class: normalizeClass(["monsterinsights-overview-report-table__table", { "monsterinsights-overview-report-table__table--compare": hasCompare.value }])
          }, [
            hasCompare.value ? (openBlock(), createElementBlock("thead", _hoisted_11, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(dimensionColumns.value, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.key,
                    rowspan: "2",
                    class: normalizeClass([
                      column.headerClass,
                      { "monsterinsights-overview-report-table__th--sortable": column.sortable !== false }
                    ]),
                    onClick: ($event) => handleColumnHeaderClick(column)
                  }, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("span", null, toDisplayString(column.label), 1),
                      column.sortable !== false ? (openBlock(), createBlock(Icon, {
                        key: 0,
                        name: "sort",
                        size: 12
                      })) : createCommentVNode("", true)
                    ])
                  ], 10, _hoisted_12);
                }), 128)),
                (openBlock(true), createElementBlock(Fragment, null, renderList(metricColumns.value, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.key,
                    colspan: "2",
                    class: normalizeClass([
                      column.headerClass,
                      { "monsterinsights-overview-report-table__th--sortable": column.sortable !== false }
                    ]),
                    onClick: ($event) => handleColumnHeaderClick(column)
                  }, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("span", null, toDisplayString(column.label), 1),
                      column.sortable !== false ? (openBlock(), createBlock(Icon, {
                        key: 0,
                        name: "sort",
                        size: 12
                      })) : createCommentVNode("", true)
                    ])
                  ], 10, _hoisted_14);
                }), 128))
              ]),
              createBaseVNode("tr", _hoisted_16, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(metricColumns.value, (column) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: "sub-" + column.key
                  }, [
                    createBaseVNode("th", null, toDisplayString(__props.compareDateLabels.current), 1),
                    createBaseVNode("th", null, toDisplayString(__props.compareDateLabels.previous), 1)
                  ], 64);
                }), 128))
              ])
            ])) : (openBlock(), createElementBlock("thead", _hoisted_17, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.key,
                    class: normalizeClass([
                      column.headerClass,
                      { "monsterinsights-overview-report-table__th--sortable": column.sortable !== false }
                    ]),
                    onClick: ($event) => handleColumnHeaderClick(column)
                  }, [
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("span", null, toDisplayString(column.label), 1),
                      column.sortable !== false ? (openBlock(), createBlock(Icon, {
                        key: 0,
                        name: "sort",
                        size: 12
                      })) : createCommentVNode("", true)
                    ])
                  ], 10, _hoisted_18);
                }), 128))
              ])
            ])),
            createBaseVNode("tbody", null, [
              __props.loading ? (openBlock(), createElementBlock("tr", _hoisted_20, [
                createBaseVNode("td", {
                  colspan: totalColspan.value,
                  class: "monsterinsights-overview-report-table__cell-loading"
                }, [
                  createVNode(LoadingSpinnerInline),
                  createBaseVNode("span", null, toDisplayString(unref(__)("Loading…", "google-analytics-for-wordpress")), 1)
                ], 8, _hoisted_21)
              ])) : displayedRowsWithBar.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_22, [
                createBaseVNode("td", {
                  colspan: totalColspan.value,
                  class: "monsterinsights-overview-report-table__cell-empty"
                }, toDisplayString(__props.emptyMessage || unref(__)("No data available", "google-analytics-for-wordpress")), 9, _hoisted_23)
              ])) : hasCompare.value ? (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(displayedRowsWithBar.value, (item, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  key: rowIndex,
                  style: normalizeStyle(getRowGradientStyle(item.barPercent))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dimensionColumns.value, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: column.key,
                      class: normalizeClass(column.cellClass)
                    }, [
                      column.iconKey && item.row[column.iconKey] ? (openBlock(), createElementBlock("div", _hoisted_24, [
                        isUrl(item.row[column.iconKey]) ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: item.row[column.iconKey],
                          alt: item.row[column.key],
                          class: "monsterinsights-report-row-icon"
                        }, null, 8, _hoisted_25)) : (openBlock(), createBlock(Icon, {
                          key: 1,
                          name: item.row[column.iconKey],
                          size: 20
                        }, null, 8, ["name"])),
                        item.row[column.key] != null && String(item.row[column.key]).trim() !== "" ? (openBlock(), createElementBlock("span", _hoisted_26, toDisplayString(item.row[column.key]), 1)) : createCommentVNode("", true)
                      ])) : column.linkKey && item.row[column.linkKey] ? (openBlock(), createElementBlock("a", {
                        key: 1,
                        href: item.row[column.linkKey],
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "monsterinsights-report-cell-link"
                      }, toDisplayString(item.row[column.key]), 9, _hoisted_27)) : (openBlock(), createElementBlock("span", _hoisted_28, toDisplayString(item.row[column.key]), 1))
                    ], 2);
                  }), 128)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(metricColumns.value, (column) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: "data-" + column.key
                    }, [
                      createBaseVNode("td", {
                        class: normalizeClass(column.cellClass)
                      }, toDisplayString(item.row[column.key]), 3),
                      createBaseVNode("td", {
                        class: normalizeClass(["monsterinsights-overview-report-table__cell-compare", column.cellClass])
                      }, toDisplayString(getCompareValue(item, column)), 3)
                    ], 64);
                  }), 128))
                ], 4);
              }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 3 }, renderList(displayedRowsWithBar.value, (item, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  key: rowIndex,
                  style: normalizeStyle(getRowGradientStyle(item.barPercent))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: column.key,
                      class: normalizeClass(column.cellClass)
                    }, [
                      column.iconKey && item.row[column.iconKey] ? (openBlock(), createElementBlock("div", _hoisted_29, [
                        isUrl(item.row[column.iconKey]) ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: item.row[column.iconKey],
                          alt: item.row[column.key],
                          class: "monsterinsights-report-row-icon"
                        }, null, 8, _hoisted_30)) : (openBlock(), createBlock(Icon, {
                          key: 1,
                          name: item.row[column.iconKey],
                          size: 20
                        }, null, 8, ["name"])),
                        item.row[column.key] != null && String(item.row[column.key]).trim() !== "" ? (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(formatCell(item.row[column.key], column)), 1)) : createCommentVNode("", true)
                      ])) : column.linkKey && item.row[column.linkKey] ? (openBlock(), createElementBlock("a", {
                        key: 1,
                        href: item.row[column.linkKey],
                        target: "_blank",
                        rel: "noopener noreferrer",
                        class: "monsterinsights-report-cell-link"
                      }, toDisplayString(formatCell(item.row[column.key], column)), 9, _hoisted_32)) : (openBlock(), createElementBlock("span", _hoisted_33, toDisplayString(formatCell(item.row[column.key], column)), 1))
                    ], 2);
                  }), 128))
                ], 4);
              }), 128))
            ]),
            showInlineTotals.value && totals.value && Object.keys(totals.value).length ? (openBlock(), createElementBlock("tfoot", _hoisted_34, [
              createBaseVNode("tr", _hoisted_35, [
                hasCompare.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(dimensionColumns.value, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: "t-" + column.key,
                      class: normalizeClass(column.cellClass)
                    }, toDisplayString(totals.value[column.key] || ""), 3);
                  }), 128)),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(metricColumns.value, (column) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: "tc-" + column.key
                    }, [
                      createBaseVNode("td", null, toDisplayString(totals.value[column.key] || ""), 1),
                      createBaseVNode("td", _hoisted_36, toDisplayString(compareTotals.value[column.key] || ""), 1)
                    ], 64);
                  }), 128))
                ], 64)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(__props.columns, (column) => {
                  return openBlock(), createElementBlock("td", {
                    key: column.key,
                    class: normalizeClass(column.cellClass)
                  }, toDisplayString(totals.value[column.key] || ""), 3);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ], 2),
          __props.hasLoadMore && filteredRows.value.length > __props.rowLimit ? (openBlock(), createElementBlock("div", _hoisted_37, [
            createBaseVNode("button", {
              class: "monsterinsights-overview-report-table__load-more-btn",
              onClick: handleLoadMoreClick
            }, [
              createBaseVNode("span", null, toDisplayString(unref(__)("Load More", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "load-more",
                size: 16
              })
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$1, {
          modelValue: reportTableModalOpen.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => reportTableModalOpen.value = $event),
          title: __props.title,
          columns: __props.columns,
          rows: filteredRows.value,
          "compare-rows": __props.compareRows,
          "compare-date-labels": __props.compareDateLabels,
          "bar-metric-key": __props.barMetricKey,
          "show-totals": __props.showTotals,
          "totals-override": __props.totalsOverride
        }, null, 8, ["modelValue", "title", "columns", "rows", "compare-rows", "compare-date-labels", "bar-metric-key", "show-totals", "totals-override"]),
        createVNode(OverviewProFeatureModal, {
          modelValue: proModalOpen.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => proModalOpen.value = $event),
          "addon-slug": needsAddonGate.value ? __props.requiredAddon : "",
          "addon-name": needsAddonGate.value ? __props.requiredAddonName : ""
        }, null, 8, ["modelValue", "addon-slug", "addon-name"])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
