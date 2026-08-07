import { m as computed, j as ref, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, b as createVNode, t as toDisplayString, w as withDirectives, u as unref, v as vModelText, c as createElementBlock, F as Fragment, f as renderList, i as normalizeClass, s as createCommentVNode, n as normalizeStyle, k as getMiGlobal } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$1 } from "./Modal-B9mMTzc_.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { f as formatPct, a as formatCurr, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
function toSortableValue(val) {
  if (val === void 0 || val === null) {
    return { isNumeric: false, num: 0, str: "" };
  }
  const rawStr = String(val);
  const cleaned = rawStr.replace(/[$,%]/g, "").replace(/,/g, "").trim();
  const suffixMatch = cleaned.match(/^([0-9.+-]+)\s*([KkMm]?)$/);
  if (suffixMatch) {
    const base = parseFloat(suffixMatch[1]);
    if (!Number.isNaN(base)) {
      const suffix = suffixMatch[2].toUpperCase();
      const multiplier = suffix === "K" ? 1e3 : suffix === "M" ? 1e6 : 1;
      return { isNumeric: true, num: base * multiplier, str: rawStr.toLowerCase() };
    }
  }
  const num = parseFloat(cleaned);
  if (!Number.isNaN(num)) {
    return { isNumeric: true, num, str: rawStr.toLowerCase() };
  }
  return { isNumeric: false, num: 0, str: rawStr.toLowerCase() };
}
function useSortableTable(rowsSource) {
  const sortKey = ref(null);
  const sortDirection = ref("desc");
  const sortedRows = computed(() => {
    const rows = Array.isArray(rowsSource?.value) ? [...rowsSource.value] : [];
    if (!sortKey.value) {
      return rows;
    }
    return rows.sort((a, b) => {
      const sortOverride = `_sort_${sortKey.value}`;
      const aVal = a?.[sortOverride] ?? a?.[sortKey.value];
      const bVal = b?.[sortOverride] ?? b?.[sortKey.value];
      const aSortable = toSortableValue(aVal);
      const bSortable = toSortableValue(bVal);
      let compare = 0;
      if (aSortable.isNumeric && bSortable.isNumeric) {
        compare = aSortable.num === bSortable.num ? 0 : aSortable.num > bSortable.num ? 1 : -1;
      } else {
        compare = aSortable.str.localeCompare(bSortable.str, void 0, {
          numeric: true,
          sensitivity: "base"
        });
      }
      return sortDirection.value === "asc" ? compare : -compare;
    });
  });
  function onColumnHeaderClick(column) {
    if (column.sortable === false) {
      return;
    }
    if (sortKey.value === column.key) {
      sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
      sortKey.value = column.key;
      sortDirection.value = "desc";
    }
  }
  return {
    sortKey,
    sortDirection,
    sortedRows,
    onColumnHeaderClick,
    toSortableValue
  };
}
const _hoisted_1 = {
  class: "monsterinsights-report-table-modal",
  role: "dialog",
  "aria-modal": "true",
  "aria-labelledby": "report-table-modal-title"
};
const _hoisted_2 = {
  id: "report-table-modal-title",
  class: "monsterinsights-report-table-modal__title"
};
const _hoisted_3 = { class: "monsterinsights-report-table-modal__search" };
const _hoisted_4 = ["placeholder"];
const _hoisted_5 = { class: "monsterinsights-report-table-modal__table-wrapper" };
const _hoisted_6 = { class: "monsterinsights-report-table-modal__table-scroll" };
const _hoisted_7 = { class: "monsterinsights-report-table-modal__table" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = { class: "monsterinsights-report-table-modal__th-content" };
const _hoisted_10 = {
  key: 0,
  class: "monsterinsights-report-table-modal__cell-with-icon"
};
const _hoisted_11 = ["src", "alt"];
const _hoisted_12 = { key: 2 };
const _hoisted_13 = ["href"];
const _hoisted_14 = { key: 2 };
const _hoisted_15 = { key: 0 };
const _hoisted_16 = { class: "monsterinsights-report-table-modal__totals-row" };
const _sfc_main = {
  __name: "ReportTableModal",
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    /**
     * Column definitions with optional type for formatting.
     * { key, label, sortable?, type?, iconKey?, linkKey?, excludeFromTotals? }
     * type: 'string' | 'number' | 'currency' | 'percentage' | 'decimal' | 'duration'
     */
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      default: () => []
    },
    compareRows: {
      type: Array,
      default: () => []
    },
    compareDateLabels: {
      type: Object,
      default: () => ({ current: "", previous: "" })
    },
    totalLabel: {
      type: String,
      default: ""
    },
    barMetricKey: {
      type: String,
      default: ""
    },
    showTotals: {
      type: Boolean,
      default: true
    },
    // Explicit totals row (keyed by column key). Replaces the computed totals when
    // set — used for values that can't be derived from the displayed cells, e.g.
    // visits-weighted averages for rate columns.
    totalsOverride: {
      type: Object,
      default: null
    }
  },
  emits: ["update:modelValue", "sort"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const searchQuery = ref("");
    const rowsSource = computed(() => props.rows);
    const { sortKey, sortedRows, onColumnHeaderClick, toSortableValue: toSortableValue2 } = useSortableTable(rowsSource);
    function handleColumnHeaderClick(column) {
      onColumnHeaderClick(column);
      emit("sort", column.key);
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
    const gradientColors = /* @__PURE__ */ (() => {
      return { c1: "#EDE5FF", c2: "#D0E8FF", c3: "#FFFFFF" };
    })();
    const filteredRows = computed(() => {
      const query = searchQuery.value.trim().toLowerCase();
      const sourceRows = sortedRows.value;
      if (!query) return sourceRows;
      return sourceRows.filter(
        (row) => props.columns.some((col) => {
          const value = row[col.key];
          return value !== void 0 && value !== null && String(value).toLowerCase().includes(query);
        })
      );
    });
    const filteredRowsWithBar = computed(() => {
      const rows = filteredRows.value;
      const columns = props.columns || [];
      const firstColKey = columns[0]?.key;
      const key = sortKey.value;
      if (rows.length === 0) return [];
      const metricKey = props.barMetricKey || (key && key !== firstColKey ? key : columns[1]?.key || null);
      if (!metricKey) {
        return rows.map((row) => ({ row, barPercent: 0 }));
      }
      const getNum = (row) => toSortableValue2(row?.[metricKey]).num;
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
    const totals = computed(() => {
      if (props.totalsOverride) return props.totalsOverride;
      const rows = filteredRows.value;
      const columns = props.columns;
      if (!rows || rows.length === 0 || !columns || columns.length === 0) return {};
      const parseNum = (val) => {
        if (val === void 0 || val === null) return 0;
        const str = String(val).replace(/[$,%K]/g, "").replace(/,/g, "");
        return parseFloat(str) || 0;
      };
      const result = {};
      const firstCol = columns[0];
      result[firstCol.key] = props.totalLabel || __("Totals", "google-analytics-for-wordpress");
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
    });
    function close() {
      searchQuery.value = "";
      emit("update:modelValue", false);
    }
    function onModelValue(value) {
      if (!value) {
        close();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "model-value": __props.modelValue,
        mode: "dialog",
        "content-class": "monsterinsights-dialog-shell",
        "overlay-class": "monsterinsights-dialog-shell-overlay",
        dismissable: true,
        "onUpdate:modelValue": onModelValue
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              type: "button",
              class: "monsterinsights-report-table-modal__close",
              "aria-label": "Close modal",
              onClick: close
            }, [
              createVNode(Icon, {
                name: "close",
                size: 16
              })
            ]),
            createBaseVNode("h3", _hoisted_2, toDisplayString(__props.title), 1),
            createBaseVNode("div", _hoisted_3, [
              createVNode(Icon, {
                name: "search",
                size: 16,
                class: "monsterinsights-report-table-modal__search-icon"
              }),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                type: "text",
                class: "monsterinsights-report-table-modal__search-input",
                placeholder: unref(__)("Search", "google-analytics-for-wordpress")
              }, null, 8, _hoisted_4), [
                [vModelText, searchQuery.value]
              ])
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("table", _hoisted_7, [
                  createBaseVNode("thead", null, [
                    createBaseVNode("tr", null, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                        return openBlock(), createElementBlock("th", {
                          key: column.key,
                          class: normalizeClass([
                            column.headerClass,
                            { "monsterinsights-report-table-modal__th--sortable": column.sortable !== false }
                          ]),
                          onClick: ($event) => handleColumnHeaderClick(column)
                        }, [
                          createBaseVNode("div", _hoisted_9, [
                            createBaseVNode("span", null, toDisplayString(column.label), 1),
                            column.sortable !== false ? (openBlock(), createBlock(Icon, {
                              key: 0,
                              name: "sort",
                              size: 12
                            })) : createCommentVNode("", true)
                          ])
                        ], 10, _hoisted_8);
                      }), 128))
                    ])
                  ]),
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(filteredRowsWithBar.value, (item, rowIndex) => {
                      return openBlock(), createElementBlock("tr", {
                        key: rowIndex,
                        style: normalizeStyle(getRowGradientStyle(item.barPercent))
                      }, [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                          return openBlock(), createElementBlock("td", {
                            key: column.key,
                            class: normalizeClass(column.cellClass)
                          }, [
                            column.iconKey && item.row[column.iconKey] ? (openBlock(), createElementBlock("div", _hoisted_10, [
                              isUrl(item.row[column.iconKey]) ? (openBlock(), createElementBlock("img", {
                                key: 0,
                                src: item.row[column.iconKey],
                                alt: item.row[column.key],
                                class: "monsterinsights-report-table-modal__row-icon-img"
                              }, null, 8, _hoisted_11)) : (openBlock(), createBlock(Icon, {
                                key: 1,
                                name: item.row[column.iconKey],
                                size: 20
                              }, null, 8, ["name"])),
                              item.row[column.key] != null && String(item.row[column.key]).trim() !== "" ? (openBlock(), createElementBlock("span", _hoisted_12, toDisplayString(formatCell(item.row[column.key], column)), 1)) : createCommentVNode("", true)
                            ])) : column.linkKey && item.row[column.linkKey] ? (openBlock(), createElementBlock("a", {
                              key: 1,
                              href: item.row[column.linkKey],
                              target: "_blank",
                              rel: "noopener noreferrer",
                              class: "monsterinsights-report-table-modal__cell-link"
                            }, toDisplayString(formatCell(item.row[column.key], column)), 9, _hoisted_13)) : (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(formatCell(item.row[column.key], column)), 1))
                          ], 2);
                        }), 128))
                      ], 4);
                    }), 128))
                  ]),
                  __props.showTotals && totals.value && Object.keys(totals.value).length ? (openBlock(), createElementBlock("tfoot", _hoisted_15, [
                    createBaseVNode("tr", _hoisted_16, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                        return openBlock(), createElementBlock("td", {
                          key: column.key,
                          class: normalizeClass(column.cellClass)
                        }, toDisplayString(totals.value[column.key] || ""), 3);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
export {
  _sfc_main as _,
  useSortableTable as u
};
