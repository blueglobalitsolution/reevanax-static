import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { m } from "./vue3-apexcharts-C-WQ0zow.js";
import { o as openBlock, c as createElementBlock, F as Fragment, a as createBaseVNode, b as createVNode, u as unref, f as renderList, n as normalizeStyle, t as toDisplayString, s as createCommentVNode, i as normalizeClass, m as computed } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-report-pie-chart__donut" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-report-pie-chart__cards"
};
const _hoisted_3 = { class: "monsterinsights-report-pie-chart__card-text" };
const _hoisted_4 = { class: "monsterinsights-report-pie-chart__card-label" };
const _hoisted_5 = { class: "monsterinsights-report-pie-chart__card-value" };
const _hoisted_6 = {
  key: 1,
  class: "monsterinsights-report-pie-chart__empty"
};
const _sfc_main = {
  __name: "ReportPieChart",
  props: {
    /** Chart data: { series: number[], labels: string[] } */
    data: {
      type: Object,
      required: true
    },
    height: {
      type: [String, Number],
      default: 280
    },
    /** Override default theme colors */
    colors: {
      type: Array,
      default: null
    },
    /** 'pie' or 'donut' */
    chartType: {
      type: String,
      default: "donut"
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    showLabels: {
      type: Boolean,
      default: false
    },
    /** 'default' = ApexCharts legend below the donut; 'cards' = donut left + breakdown cards right */
    layout: {
      type: String,
      default: "default"
    }
  },
  setup(__props) {
    const apexchart = m;
    const MI_COLORS = ["#228bee", "#5CC0A5", "#9B51E0", "#F2C94C", "#EB5757", "#2D9CDB", "#6FCF97", "#BB6BD9"];
    const props = __props;
    const hasData = computed(() => props.data?.series?.length > 0);
    const series = computed(() => props.data?.series || []);
    const chartLabels = computed(() => props.data?.labels || []);
    const chartColors = computed(() => {
      if (props.colors) return props.colors;
      return MI_COLORS;
    });
    function sliceColor(index) {
      const palette = chartColors.value;
      return palette[index % palette.length];
    }
    function slicePercent(index) {
      const total = series.value.reduce((a, b) => a + b, 0);
      if (!total) return 0;
      return Math.round(series.value[index] / total * 100);
    }
    const chartOptions = computed(() => ({
      chart: {
        type: props.chartType,
        fontFamily: "inherit",
        toolbar: { show: false },
        animations: { enabled: true, easing: "easeinout", speed: 800 }
      },
      colors: chartColors.value,
      labels: props.data?.labels || [],
      dataLabels: {
        enabled: props.showLabels,
        style: { fontSize: "12px", fontWeight: 600, colors: ["#fff"] },
        dropShadow: { enabled: false }
      },
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "55%",
            labels: { show: false }
          }
        }
      },
      stroke: {
        width: 2,
        colors: ["#fff"]
      },
      tooltip: {
        enabled: true,
        theme: "light",
        custom({ series: series2, seriesIndex, w }) {
          const label = w.config.labels[seriesIndex] || "";
          const value = series2[seriesIndex] || 0;
          const total = series2.reduce((a, b) => a + b, 0);
          const pct = total > 0 ? (value / total * 100).toFixed(1) : 0;
          const color = w.globals.colors[seriesIndex] || "#228bee";
          return '<div class="monsterinsights-chart-tooltip"><div class="monsterinsights-chart-tooltip__row"><span class="monsterinsights-chart-tooltip__dot" style="background:' + color + '"></span><span class="monsterinsights-chart-tooltip__label">' + label + ': </span><span class="monsterinsights-chart-tooltip__value">' + value.toLocaleString() + " (" + pct + "%)</span></div></div>";
        }
      },
      legend: {
        show: props.layout === "cards" ? false : props.showLegend,
        position: "bottom",
        horizontalAlign: "center",
        fontSize: "13px",
        fontWeight: 500,
        fontFamily: "inherit",
        labels: {
          colors: "#393f4c"
        },
        markers: {
          width: 10,
          height: 10,
          radius: 10
        },
        itemMargin: {
          horizontal: 16,
          vertical: 6
        },
        formatter: (seriesName, opts) => {
          const total = opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0);
          const val = opts.w.globals.series[opts.seriesIndex];
          const pct = total > 0 ? (val / total * 100).toFixed(1) : 0;
          return `<span style="color:#393f4c;font-weight:500">${seriesName}</span> <span style="color:#6b7280;font-weight:400">${pct}%</span>`;
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: "100%" },
          legend: { position: "bottom" }
        }
      }]
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-report-pie-chart", { "monsterinsights-report-pie-chart--cards": __props.layout === "cards" }])
      }, [
        hasData.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(unref(apexchart), {
              type: __props.chartType,
              height: __props.height,
              options: chartOptions.value,
              series: series.value
            }, null, 8, ["type", "height", "options", "series"])
          ]),
          __props.layout === "cards" ? (openBlock(), createElementBlock("ul", _hoisted_2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(chartLabels.value, (label, index) => {
              return openBlock(), createElementBlock("li", {
                key: index,
                class: "monsterinsights-report-pie-chart__card"
              }, [
                createBaseVNode("span", {
                  class: "monsterinsights-report-pie-chart__card-dot",
                  style: normalizeStyle({ background: sliceColor(index) })
                }, null, 4),
                createBaseVNode("span", _hoisted_3, [
                  createBaseVNode("span", _hoisted_4, toDisplayString(label), 1),
                  createBaseVNode("span", _hoisted_5, toDisplayString(slicePercent(index)) + "%", 1)
                ])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(unref(__)("No data available", "google-analytics-for-wordpress")), 1))
      ], 2);
    };
  }
};
export {
  _sfc_main as _
};
