import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, i as normalizeClass, s as createCommentVNode, m as computed, C as watch, y as onMounted, J as onUnmounted, F as Fragment, f as renderList, E as createBlock, b as createVNode, u as unref, B as withModifiers } from "./toastStore-CRCNwITM.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { A as ApexLineChart } from "./ApexLineChart-BDoZ0ljB.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { u as useSiteNotesStore, _ as _sfc_main$2 } from "./SiteNotes-sUVlPnw7.js";
import { b as formatNum, f as formatPct, a as formatCurr } from "./overviewTableFormatters-Bh6rmRkk.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
import { u as useChartColors } from "./useChartColors-Bi1Kbjjv.js";
const _hoisted_1$1 = { class: "monsterinsights-report-info-card__label" };
const _hoisted_2$1 = { class: "monsterinsights-report-info-card__value-wrap" };
const _hoisted_3$1 = { class: "monsterinsights-report-info-card__value" };
const _sfc_main$1 = {
  __name: "ReportInfoCard",
  props: {
    label: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      default: 0
    },
    /** Display type: 'number' | 'currency' | 'percentage' | 'duration' | 'decimal' */
    type: {
      type: String,
      default: "number"
    },
    /** Optional percent change badge: { value: Number, positive: Boolean } */
    percentChange: {
      type: Object,
      default: null
    },
    highlighted: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const formattedValue = computed(() => {
      const val = props.value;
      switch (props.type) {
        case "currency":
          return formatCurr(val);
        case "percentage":
          return formatPct(val);
        case "duration": {
          const seconds = Number(val) || 0;
          const mins = Math.floor(seconds / 60);
          const secs = Math.floor(seconds % 60);
          return `${mins}:${String(secs).padStart(2, "0")}`;
        }
        case "decimal":
          return (Number(val) || 0).toFixed(2);
        default:
          return formatNum(val);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-report-info-card", { "monsterinsights-report-info-card--highlighted": __props.highlighted }])
      }, [
        createBaseVNode("span", _hoisted_1$1, toDisplayString(__props.label), 1),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("span", _hoisted_3$1, toDisplayString(formattedValue.value), 1),
          __props.percentChange ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["monsterinsights-report-info-card__change", __props.percentChange.positive ? "monsterinsights-report-info-card__change--positive" : "monsterinsights-report-info-card__change--negative"])
          }, toDisplayString(__props.percentChange.positive ? "+" : "-") + toDisplayString(Math.abs(__props.percentChange.value)) + "% ", 3)) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
};
const ReportInfoCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8af392ee"]]);
const _hoisted_1 = { class: "monsterinsights-overview-report-traffic-chart-section" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-overview-report-traffic-chart-tabs"
};
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "monsterinsights-overview-tab__label" };
const _hoisted_5 = {
  key: 1,
  class: "monsterinsights-overview-report-traffic-chart-heading"
};
const _hoisted_6 = { class: "monsterinsights-overview-report-traffic-chart-content" };
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-traffic-chart-key-metrics"
};
const _hoisted_8 = { class: "monsterinsights-traffic-chart-key-metrics__row" };
const _hoisted_9 = { class: "monsterinsights-traffic-chart-key-metrics__container" };
const _hoisted_10 = { class: "monsterinsights-overview-report-traffic-chart-wrapper" };
const _hoisted_11 = {
  key: 0,
  class: "monsterinsights-overview-chart-loading"
};
const _hoisted_12 = {
  key: 1,
  class: "monsterinsights-overview-chart-error"
};
const _hoisted_13 = { class: "monsterinsights-site-notes-toggle" };
const _hoisted_14 = {
  key: 3,
  class: "monsterinsights-site-notes-toggle"
};
const SITE_NOTE_DEFAULT_COLOR = "3a93dd";
const _sfc_main = {
  __name: "ReportChartSection",
  props: {
    tabs: { type: Array, default: () => [] },
    activeTab: { type: String, default: "" },
    chartData: { type: Object, default: () => ({ categories: [], series: [] }) },
    loading: { type: Boolean, default: false },
    error: { type: String, default: null },
    height: { type: Number, default: 370 },
    colors: { type: Array, default: () => [] },
    strokeDashArray: { type: Array, default: () => [] },
    metrics: { type: Array, default: () => [] },
    showSiteNotes: { type: Boolean, default: true },
    dateRange: { type: Object, default: () => ({}) },
    rawDates: { type: Array, default: () => [] }
  },
  emits: ["update:activeTab", "site-notes-saved"],
  setup(__props, { emit: __emit }) {
    const siteNotesStore = useSiteNotesStore();
    const siteNotesIcon = "writing-tool";
    const props = __props;
    const emit = __emit;
    const { getChartColors } = useChartColors();
    const resolvedColors = computed(() => {
      if (props.colors?.length) return props.colors;
      const seriesCount = props.chartData?.series?.length || 1;
      return getChartColors(seriesCount);
    });
    function getSiteNoteSvgNormal(color) {
      return "data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%2042.4%2047.9%22%20style%3D%22enable-background%3Anew%200%200%2042.4%2047.9%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%23" + color + "%3B%7D.st1%7Bfill%3A%23FFFFFF%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M38.9%2C1.6H3.5c-1.1%2C0-1.9%2C0.9-1.9%2C1.9V39c0%2C1.1%2C0.9%2C1.9%2C1.9%2C1.9h12.8l4.9%2C5.1l4.9-5.1h12.8c1.1%2C0%2C1.9-0.9%2C1.9-1.9V3.6C40.9%2C2.5%2C40%2C1.6%2C38.9%2C1.6z%22%2F%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M21.2%2C46.6l-5.1-5.3H3.5c-1.3%2C0-2.3-1-2.3-2.3V3.6c0-1.3%2C1-2.3%2C2.3-2.3h35.4c1.3%2C0%2C2.3%2C1%2C2.3%2C2.3V39c0%2C1.3-1%2C2.3-2.3%2C2.3H26.3L21.2%2C46.6z%20M3.5%2C2C2.6%2C2%2C1.9%2C2.7%2C1.9%2C3.6V39c0%2C0.9%2C0.7%2C1.6%2C1.6%2C1.6h12.9l4.8%2C5l4.8-5h12.9c0.9%2C0%2C1.6-0.7%2C1.6-1.6V3.6c0-0.9-0.7-1.6-1.6-1.6H3.5z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C14.6H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C14.6%2C33.1%2C14.6z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C22H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C22%2C33.1%2C22z%22%2F%3E%3C%2Fg%3E%3Cg%3E%3Cpath%20class%3D%22st1%22%20d%3D%22M33.1%2C29.4H9.3c-0.6%2C0-1.2-0.6-1.2-1.2s0.5-1.2%2C1.2-1.2h23.7c0.6%2C0%2C1.2%2C0.6%2C1.2%2C1.2S33.7%2C29.4%2C33.1%2C29.4z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
    }
    function getSiteNoteSvgImportant(color) {
      return 'data:image/svg+xml,%3C%3Fxml version="1.0" encoding="utf-8"%3F%3E%3Csvg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 25 25" style="enable-background:new 0 0 25 25;" xml:space="preserve"%3E%3Cstyle type="text/css"%3E.st0%7Bfill:%23' + color + ';%7D.st1%7Bfill:%23FFFFFF;%7D.st2%7Bfill:%23FFD74B;%7D%3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class="st0" d="M22.5,0.7H2.5c-0.6,0-1.1,0.5-1.1,1v18.6c0,0.6,0.5,1,1.1,1h6.4c0.2,0,0.4,0.1,0.5,0.2l2.5,2.6 c0.3,0.3,0.8,0.3,1.1,0l2.5-2.6c0.1-0.1,0.3-0.2,0.5-0.2h6.4c0.6,0,1.1-0.5,1.1-1V1.7C23.6,1.1,23.1,0.7,22.5,0.7z"/%3E%3Cpath class="st1" d="M12.5,24.6C12.5,24.6,12.5,24.6,12.5,24.6c-0.3,0-0.6-0.1-0.8-0.3l-2.5-2.6c-0.1-0.1-0.2-0.1-0.3-0.1H2.5 c-0.8,0-1.4-0.6-1.4-1.3V1.7c0-0.7,0.6-1.3,1.4-1.3h19.9c0.8,0,1.4,0.6,1.4,1.3v18.6c0,0.7-0.6,1.3-1.4,1.3h-6.4 c-0.1,0-0.2,0-0.3,0.1l-2.5,2.6C13.1,24.5,12.8,24.6,12.5,24.6z M2.5,1C2.1,1,1.7,1.3,1.7,1.7v18.6c0,0.4,0.4,0.7,0.8,0.7h6.4 c0.3,0,0.6,0.1,0.8,0.3l2.5,2.6c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0,0,0,0c0.1,0,0.2,0,0.3-0.1l2.5-2.6c0.2-0.2,0.5-0.3,0.8-0.3h6.4 c0.4,0,0.8-0.3,0.8-0.7V1.7c0-0.4-0.4-0.7-0.8-0.7H2.5z"/%3E%3C/g%3E%3Cpath class="st2" d="M13.1,4.9l1.7,3.2c0.1,0.2,0.3,0.3,0.5,0.3L19.1,9c0.6,0.1,0.8,0.7,0.4,1.1l-2.7,2.5c-0.2,0.1-0.2,0.4-0.2,0.6 l0.6,3.5c0.1,0.5-0.5,0.9-1,0.7l-3.4-1.7c-0.2-0.1-0.4-0.1-0.6,0l-3.4,1.7c-0.5,0.2-1.1-0.2-1-0.7l0.6-3.5c0-0.2,0-0.4-0.2-0.6 l-2.7-2.5C5.1,9.7,5.3,9,5.9,9l3.8-0.5c0.2,0,0.4-0.2,0.5-0.3l1.7-3.2C12.1,4.4,12.9,4.4,13.1,4.9L13.1,4.9z"/%3E%3C/g%3E%3C/svg%3E%0A';
    }
    const siteNoteAnnotations = computed(() => {
      const notesByDate = siteNotesStore.siteNotesByDateCompact;
      const rawDates = props.rawDates;
      const importantOnly = siteNotesStore.importantFilter === true;
      if (!rawDates.length || !Object.keys(notesByDate).length) return [];
      const annotations = [];
      for (let i = 0; i < rawDates.length; i++) {
        const dateKey = rawDates[i];
        let dayNotes = notesByDate[dateKey];
        if (!dayNotes || !dayNotes.length) continue;
        if (importantOnly) {
          dayNotes = dayNotes.filter((n) => n.important);
          if (!dayNotes.length) continue;
        }
        const hasImportant = dayNotes.some((n) => n.important);
        const categoryLabel = formatDateLabel(dateKey);
        const firstWithColor = dayNotes.find((n) => n.category?.background_color);
        const rawColor = firstWithColor?.category?.background_color || "#" + SITE_NOTE_DEFAULT_COLOR;
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
    let chartInstance = null;
    let isApplyingAnnotations = false;
    function applySiteNoteAnnotations() {
      if (isApplyingAnnotations || !chartInstance || props.loading) return;
      const annotations = siteNoteAnnotations.value;
      if (!annotations.length && !chartInstance?.w?.globals?.dom?.baseEl) return;
      isApplyingAnnotations = true;
      try {
        const g = chartInstance.w.globals;
        const baseEl = g.dom.baseEl;
        if (!baseEl) return;
        baseEl.querySelectorAll(".monsterinsights-site-note-icon").forEach((el) => el.remove());
        if (!annotations.length) return;
        const svgEl = baseEl.querySelector("svg.apexcharts-svg");
        if (!svgEl) return;
        const gridX = g.translateX || 0;
        const gridY = g.translateY || 0;
        const gridH = g.gridHeight || 0;
        const categories = g.categoryLabels || g.labels || [];
        const numCategories = categories.length;
        if (!numCategories) return;
        const gridW = g.gridWidth || 0;
        const step = numCategories > 1 ? gridW / (numCategories - 1) : 0;
        const ns = "http://www.w3.org/2000/svg";
        for (const annotation of annotations) {
          const catIndex = categories.indexOf(annotation.x);
          if (catIndex === -1) continue;
          const cx = gridX + step * catIndex;
          const cy = gridY + gridH;
          const img = document.createElementNS(ns, "image");
          img.classList.add("monsterinsights-site-note-icon");
          img.setAttribute("href", annotation.image.path);
          img.setAttribute("width", String(annotation.image.width || 20));
          img.setAttribute("height", String(annotation.image.height || 20));
          img.setAttribute("x", String(cx - (annotation.image.width || 20) / 2));
          img.setAttribute("y", String(cy + (annotation.image.offsetY || 0)));
          img.style.pointerEvents = "none";
          const inner = svgEl.querySelector(".apexcharts-inner");
          if (inner?.parentNode) {
            inner.parentNode.insertBefore(img, inner.nextSibling);
          } else {
            svgEl.appendChild(img);
          }
        }
      } catch {
      } finally {
        isApplyingAnnotations = false;
      }
    }
    watch(siteNoteAnnotations, () => {
      setTimeout(() => applySiteNoteAnnotations(), 50);
    });
    async function onSiteNotesSaved() {
      await siteNotesStore.fetchNotes(props.dateRange, true);
      emit("site-notes-saved");
    }
    onMounted(() => {
      siteNotesStore.fetchNotes(props.dateRange);
      siteNotesStore.fetchCategories();
    });
    onUnmounted(() => {
      chartInstance = null;
    });
    const chartOptions = computed(() => {
      return {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false },
          events: {
            mounted: (chartContext) => {
              chartInstance = chartContext;
              applySiteNoteAnnotations();
            }
            // NOTE: `updated` intentionally omitted here.
            // In traffic reports, notes load async AFTER chart data.
            // The watch(siteNoteAnnotations) handles re-applying when notes arrive.
            // Adding `updated` would cause clearAnnotations() to wipe annotations
            // that were just added by the watch, because `updated` fires when
            // addPointAnnotation modifies the chart.
          }
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.05
          }
        },
        tooltip: {
          theme: "light",
          shared: true,
          custom({ series, dataPointIndex, w }) {
            const categoryLabel = w.globals.categoryLabels[dataPointIndex] || w.globals.labels[dataPointIndex] || "";
            let html = '<div class="monsterinsights-chart-tooltip">';
            html += '<div class="monsterinsights-chart-tooltip__date">' + categoryLabel + "</div>";
            for (let i = 0; i < series.length; i++) {
              const seriesName = w.globals.seriesNames[i] || "";
              const value = series[i][dataPointIndex];
              if (value === void 0 || value === null) continue;
              const color = w.globals.colors[i] || "#228bee";
              const displayValue = typeof value === "number" ? value.toLocaleString() : value;
              html += '<div class="monsterinsights-chart-tooltip__row">';
              html += '<span class="monsterinsights-chart-tooltip__dot" style="background:' + color + '"></span>';
              html += '<span class="monsterinsights-chart-tooltip__label">' + seriesName + ": </span>";
              html += '<span class="monsterinsights-chart-tooltip__value">' + displayValue + "</span>";
              html += "</div>";
            }
            const rawDates = props.rawDates;
            const notesByDate = siteNotesStore.siteNotesByDateCompact;
            if (rawDates.length > dataPointIndex) {
              const dateKey = rawDates[dataPointIndex];
              const dayNotes = notesByDate[dateKey];
              if (dayNotes && dayNotes.length) {
                html += '<div class="monsterinsights-chart-tooltip__notes"><hr />';
                dayNotes.forEach(function(note) {
                  const escaped = ("" + (note.note_title ?? "")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
                  html += "<span>" + escaped + "</span><br />";
                });
                html += "</div>";
              }
            }
            html += "</div>";
            return html;
          }
        }
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.tabs.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
            return openBlock(), createElementBlock("button", {
              key: tab.id,
              type: "button",
              class: normalizeClass(["monsterinsights-overview-tab", { "monsterinsights-overview-tab--active": __props.activeTab === tab.id }]),
              onClick: ($event) => _ctx.$emit("update:activeTab", tab.id)
            }, [
              tab.icon ? (openBlock(), createBlock(Icon, {
                key: 0,
                name: tab.icon,
                size: 20
              }, null, 8, ["name"])) : createCommentVNode("", true),
              createBaseVNode("span", _hoisted_4, toDisplayString(tab.label), 1)
            ], 10, _hoisted_3);
          }), 128))
        ])) : __props.tabs.length === 1 ? (openBlock(), createElementBlock("h2", _hoisted_5, [
          createVNode(Icon, {
            name: __props.tabs[0].icon,
            size: 20
          }, null, 8, ["name"]),
          createBaseVNode("span", null, toDisplayString(__props.tabs[0].label), 1)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6, [
          __props.metrics && __props.metrics.length ? (openBlock(), createElementBlock("div", _hoisted_7, [
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("div", _hoisted_9, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.metrics, (metric, index) => {
                  return openBlock(), createBlock(ReportInfoCard, {
                    key: metric.id || index,
                    label: metric.label,
                    value: metric.value,
                    type: metric.type,
                    "percent-change": metric.percentChange,
                    highlighted: index === 0
                  }, null, 8, ["label", "value", "type", "percent-change", "highlighted"]);
                }), 128))
              ])
            ])
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_10, [
            __props.loading ? (openBlock(), createElementBlock("div", _hoisted_11, [
              createVNode(LoadingSpinnerInline)
            ])) : __props.error ? (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(__props.error), 1)) : (openBlock(), createBlock(ApexLineChart, {
              key: `report-chart-${__props.activeTab}`,
              data: __props.chartData,
              height: __props.height,
              "show-legend": false,
              colors: resolvedColors.value,
              "stroke-dash-array": __props.strokeDashArray,
              "chart-options": chartOptions.value,
              "chart-type": "area"
            }, null, 8, ["data", "height", "colors", "stroke-dash-array", "chart-options"]))
          ])
        ]),
        createBaseVNode("div", _hoisted_13, [
          __props.showSiteNotes && !unref(siteNotesStore).showSiteNotes ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "monsterinsights-site-notes-toggle__btn",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(siteNotesStore).toggleSiteNotes())
          }, [
            createVNode(Icon, {
              name: unref(siteNotesIcon),
              size: 16
            }, null, 8, ["name"]),
            createBaseVNode("span", null, toDisplayString(unref(__)("Site Notes", "google-analytics-for-wordpress")), 1)
          ])) : createCommentVNode("", true)
        ]),
        __props.showSiteNotes && unref(siteNotesStore).showSiteNotes ? (openBlock(), createBlock(_sfc_main$2, {
          key: 2,
          "date-range": __props.dateRange,
          onRefreshOverviewReport: onSiteNotesSaved
        }, null, 8, ["date-range"])) : createCommentVNode("", true),
        __props.showSiteNotes && unref(siteNotesStore).showSiteNotes ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createBaseVNode("button", {
            class: "monsterinsights-site-notes-toggle__btn",
            type: "button",
            onClick: _cache[1] || (_cache[1] = withModifiers(($event) => unref(siteNotesStore).toggleSiteNotes(), ["prevent"]))
          }, [
            createVNode(Icon, {
              name: unref(siteNotesIcon),
              size: 16
            }, null, 8, ["name"]),
            createBaseVNode("span", null, toDisplayString(unref(__)("Close Site Notes", "google-analytics-for-wordpress")), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
