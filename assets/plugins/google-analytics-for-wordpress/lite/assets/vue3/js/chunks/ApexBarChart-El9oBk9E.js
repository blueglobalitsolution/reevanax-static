import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { m } from "./vue3-apexcharts-C-WQ0zow.js";
import { u as useChartColors } from "./useChartColors-Bi1Kbjjv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { o as openBlock, c as createElementBlock, E as createBlock, u as unref, t as toDisplayString, m as computed } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-apex-chart" };
const _hoisted_2 = {
  key: 1,
  class: "monsterinsights-apex-chart__empty"
};
const _sfc_main = {
  __name: "ApexBarChart",
  props: {
    data: {
      type: Object,
      required: true
    },
    height: {
      type: [String, Number],
      default: 350
    },
    colors: {
      type: Array,
      default: () => {
        const { getChartColors } = useChartColors();
        return getChartColors(10);
      }
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    stacked: {
      type: Boolean,
      default: false
    },
    showLegend: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const apexchart = m;
    const { colors: brandColors } = useChartColors();
    const props = __props;
    const hasData = computed(() => {
      return props.data?.series && props.data.series.length > 0;
    });
    const series = computed(() => {
      if (!props.data?.series) return [];
      return props.data.series;
    });
    const chartOptions = computed(() => {
      return {
        chart: {
          type: "bar",
          fontFamily: "inherit",
          toolbar: {
            show: false
          },
          stacked: props.stacked,
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800
          }
        },
        colors: props.colors,
        plotOptions: {
          bar: {
            horizontal: props.horizontal,
            columnWidth: "60%",
            borderRadius: 4,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        grid: {
          show: true,
          borderColor: brandColors.grid,
          strokeDashArray: 4,
          padding: {
            left: 0,
            right: 0
          }
        },
        xaxis: {
          categories: props.data?.categories || [],
          labels: {
            style: {
              colors: brandColors.text.secondary,
              fontSize: "12px"
            },
            rotate: -45,
            rotateAlways: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: brandColors.text.secondary,
              fontSize: "12px"
            },
            formatter: (value) => {
              if (value >= 1e6) {
                return `${(value / 1e6).toFixed(1)}M`;
              }
              if (value >= 1e3) {
                return `${(value / 1e3).toFixed(1)}K`;
              }
              return Math.round(value).toString();
            }
          }
        },
        tooltip: {
          enabled: true,
          theme: "light",
          y: {
            formatter: (value) => {
              return value.toLocaleString();
            }
          }
        },
        legend: {
          show: props.showLegend,
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "12px",
          fontWeight: 500,
          labels: {
            colors: brandColors.text.primary
          },
          markers: {
            width: 12,
            height: 12,
            radius: 2
          },
          itemMargin: {
            horizontal: 12,
            vertical: 8
          }
        }
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        hasData.value ? (openBlock(), createBlock(unref(apexchart), {
          key: 0,
          type: "bar",
          height: __props.height,
          options: chartOptions.value,
          series: series.value
        }, null, 8, ["height", "options", "series"])) : (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(unref(__)("No data available", "google-analytics-for-wordpress")), 1))
      ]);
    };
  }
};
const ApexBarChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-738388fc"]]);
export {
  ApexBarChart as A
};
