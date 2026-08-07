import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, u as unref, c as createElementBlock, b as createVNode, t as toDisplayString, a as createBaseVNode, s as createCommentVNode, F as Fragment, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { a as generateTrafficTechnologySample, b as fetchTrafficTechnologyData } from "./trafficSampleData-B7xNOjWd.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import "./useOverviewChartData-ea-7IFwh.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$1 } from "./ReportPieChart-DOkDJooB.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
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
import "./reportCache-BGhGkpr3.js";
import "./settings-DM9kkmj_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./vue3-apexcharts-C-WQ0zow.js";
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-overview-report-table",
  style: { "min-height": "300px", "display": "flex", "align-items": "center", "justify-content": "center" }
};
const _hoisted_2 = {
  key: 1,
  class: "monsterinsights-overview-report-table",
  style: { "min-height": "200px", "display": "flex", "align-items": "center", "justify-content": "center", "color": "#6b7280" }
};
const _hoisted_3 = {
  key: 2,
  class: "monsterinsights-technology-report"
};
const _hoisted_4 = { class: "monsterinsights-overview-report-table" };
const _hoisted_5 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_6 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-technology-report__period-label"
};
const _hoisted_8 = {
  key: 1,
  class: "monsterinsights-report-pie-chart__empty"
};
const _hoisted_9 = { class: "monsterinsights-technology-report__compare-divider" };
const _hoisted_10 = { class: "monsterinsights-technology-report__period-label monsterinsights-technology-report__period-label--prev" };
const _hoisted_11 = { class: "monsterinsights-overview-report-table" };
const _hoisted_12 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_13 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_14 = {
  key: 0,
  class: "monsterinsights-technology-report__period-label"
};
const _hoisted_15 = {
  key: 1,
  class: "monsterinsights-report-pie-chart__empty"
};
const _hoisted_16 = { class: "monsterinsights-technology-report__compare-divider" };
const _hoisted_17 = { class: "monsterinsights-technology-report__period-label monsterinsights-technology-report__period-label--prev" };
const TOP_BROWSER_COUNT = 3;
const _sfc_main = {
  __name: "TrafficTechnologyReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
    const pieLayout = "default";
    const isCompareActive = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const currentDateLabel = computed(() => {
      const s = dateRange.value?.start;
      const e = dateRange.value?.end;
      if (!s || !e) return "";
      return `${formatShortDate(s)} - ${formatShortDate(e)}`;
    });
    const previousDateLabel = computed(() => {
      const s = dateRange.value?.compareStart;
      const e = dateRange.value?.compareEnd;
      if (!s || !e) return __("Previous Period", "google-analytics-for-wordpress");
      return `${formatShortDate(s)} - ${formatShortDate(e)}`;
    });
    function formatShortDate(dateStr) {
      if (!dateStr) return "";
      const d = new Date(dateStr);
      if (isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    }
    function parsePieRows(rows, isCompare = false, period = "current") {
      const series = [];
      const labels = [];
      if (!Array.isArray(rows)) return { series, labels };
      const visibleRows = rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0]));
      for (const row of visibleRows) {
        const label = row?.d?.[0] || __("(not set)", "google-analytics-for-wordpress");
        const m0 = row?.m?.[0];
        let value = 0;
        if (isCompare && Array.isArray(m0) && m0.length === 2) {
          value = Number(period === "current" ? m0[1] : m0[0]) || 0;
        } else if (Array.isArray(m0)) {
          value = Number(Array.isArray(m0[0]) ? m0[0] : m0) || 0;
        } else {
          value = Number(m0) || 0;
        }
        labels.push(String(label));
        series.push(value);
      }
      return { series, labels };
    }
    const isCompareFormat = computed(() => {
      if (!isCompareActive.value) return false;
      const rows = rawData.value?.browser_breakdown?.rows;
      if (!Array.isArray(rows) || !rows.length) return false;
      const m0 = rows[0]?.m?.[0];
      return Array.isArray(m0) && m0.length === 2;
    });
    const browserBreakdown = computed(() => {
      const empty = { current: { series: [], labels: [] }, previous: { series: [], labels: [] } };
      const rows = rawData.value?.browser_breakdown?.rows;
      if (!Array.isArray(rows) || !rows.length) return empty;
      const isCompare = isCompareFormat.value;
      const current = parsePieRows(rows, isCompare, "current");
      const previous = parsePieRows(rows, isCompare, "previous");
      const entries = current.labels.map((label, i) => ({
        label,
        curr: current.series[i] || 0,
        prev: previous.series[i] || 0
      }));
      entries.sort((a, b) => b.curr - a.curr || b.prev - a.prev);
      const top = entries.slice(0, TOP_BROWSER_COUNT);
      const rest = entries.slice(TOP_BROWSER_COUNT);
      const labels = top.map((e) => e.label);
      const currSeries = top.map((e) => e.curr);
      const prevSeries = top.map((e) => e.prev);
      if (rest.length) {
        const othersCurr = rest.reduce((sum, e) => sum + e.curr, 0);
        const othersPrev = rest.reduce((sum, e) => sum + e.prev, 0);
        if (othersCurr > 0 || othersPrev > 0) {
          labels.push(__("All Others", "google-analytics-for-wordpress"));
          currSeries.push(othersCurr);
          prevSeries.push(othersPrev);
        }
      }
      return {
        current: { series: currSeries, labels },
        previous: { series: prevSeries, labels }
      };
    });
    const browserChart = computed(() => browserBreakdown.value.current);
    const deviceChart = computed(() => {
      const rows = rawData.value?.device_breakdown?.rows;
      if (!rows?.length) return { series: [], labels: [] };
      return parsePieRows(rows, isCompareFormat.value, "current");
    });
    const browserChartPrev = computed(() => {
      if (!isCompareFormat.value) return { series: [], labels: [] };
      return browserBreakdown.value.previous;
    });
    const deviceChartPrev = computed(() => {
      if (!isCompareFormat.value) return { series: [], labels: [] };
      const rows = rawData.value?.device_breakdown?.rows;
      if (!rows?.length) return { series: [], labels: [] };
      return parsePieRows(rows, true, "previous");
    });
    const { rawData, loading, error } = useReport({
      fetch: () => fetchTrafficTechnologyData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateTrafficTechnologySample(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "upsell-feature": "traffic-technology"
      }, {
        table: withCtx(() => [
          unref(loading) ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(LoadingSpinnerInline)
          ])) : unref(error) ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(unref(error)), 1)) : (openBlock(), createElementBlock("div", _hoisted_3, [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("h3", _hoisted_6, toDisplayString(unref(__)("Browser Breakdown", "google-analytics-for-wordpress")), 1),
                isCompareActive.value ? (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(currentDateLabel.value), 1)) : createCommentVNode("", true)
              ]),
              browserChart.value.series.length ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                data: browserChart.value,
                height: 280,
                layout: unref(pieLayout)
              }, null, 8, ["data", "layout"])) : (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString(unref(__)("No browser data available.", "google-analytics-for-wordpress")), 1)),
              isCompareActive.value && browserChartPrev.value.series.length ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("span", _hoisted_10, toDisplayString(previousDateLabel.value), 1)
                ]),
                createVNode(_sfc_main$1, {
                  data: browserChartPrev.value,
                  height: 280,
                  layout: unref(pieLayout)
                }, null, 8, ["data", "layout"])
              ], 64)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("h3", _hoisted_13, toDisplayString(unref(__)("Device Breakdown", "google-analytics-for-wordpress")), 1),
                isCompareActive.value ? (openBlock(), createElementBlock("span", _hoisted_14, toDisplayString(currentDateLabel.value), 1)) : createCommentVNode("", true)
              ]),
              deviceChart.value.series.length ? (openBlock(), createBlock(_sfc_main$1, {
                key: 0,
                data: deviceChart.value,
                height: 280,
                layout: unref(pieLayout)
              }, null, 8, ["data", "layout"])) : (openBlock(), createElementBlock("div", _hoisted_15, toDisplayString(unref(__)("No device data available.", "google-analytics-for-wordpress")), 1)),
              isCompareActive.value && deviceChartPrev.value.series.length ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", _hoisted_16, [
                  createBaseVNode("span", _hoisted_17, toDisplayString(previousDateLabel.value), 1)
                ]),
                createVNode(_sfc_main$1, {
                  data: deviceChartPrev.value,
                  height: 280,
                  layout: unref(pieLayout)
                }, null, 8, ["data", "layout"])
              ], 64)) : createCommentVNode("", true)
            ])
          ]))
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
