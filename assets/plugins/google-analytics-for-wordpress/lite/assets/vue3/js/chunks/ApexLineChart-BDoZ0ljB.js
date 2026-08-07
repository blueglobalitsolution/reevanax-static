import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { m } from "./vue3-apexcharts-C-WQ0zow.js";
import { u as useChartColors } from "./useChartColors-Bi1Kbjjv.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { y as onMounted, x as nextTick, z as onBeforeUnmount, o as openBlock, c as createElementBlock, E as createBlock, u as unref, t as toDisplayString, s as createCommentVNode, j as ref, m as computed } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-apex-chart" };
const _hoisted_2 = {
  key: 1,
  class: "monsterinsights-apex-chart__empty"
};
const _sfc_main = {
  __name: "ApexLineChart",
  props: {
    data: {
      type: Object,
      required: true
    },
    height: {
      type: [String, Number],
      default: 300
    },
    colors: {
      type: Array,
      default: () => {
        const { getChartColors } = useChartColors();
        return getChartColors(10);
      }
    },
    strokeDashArray: {
      type: Array,
      default: () => []
    },
    showGrid: {
      type: Boolean,
      default: true
    },
    showLegend: {
      type: Boolean,
      default: true
    },
    yAxisTitle: {
      type: String,
      default: ""
    },
    chartOptions: {
      type: Object,
      default: () => ({})
    },
    chartType: {
      type: String,
      default: "line",
      validator: (v) => ["line", "area"].includes(v)
    }
  },
  setup(__props) {
    const apexchart = m;
    const { colors: brandColors } = useChartColors();
    const isMounted = ref(false);
    onMounted(async () => {
      await nextTick();
      isMounted.value = true;
    });
    onBeforeUnmount(() => {
      isMounted.value = false;
    });
    const props = __props;
    function deepMerge(target, source) {
      if (!source || typeof source !== "object") return target;
      const result = { ...target };
      for (const key of Object.keys(source)) {
        const targetVal = result[key];
        const sourceVal = source[key];
        if (sourceVal && typeof sourceVal === "object" && !Array.isArray(sourceVal) && targetVal && typeof targetVal === "object" && !Array.isArray(targetVal)) {
          result[key] = deepMerge(targetVal, sourceVal);
        } else {
          result[key] = sourceVal;
        }
      }
      return result;
    }
    const hasData = computed(() => {
      return props.data?.series && props.data.series.length > 0;
    });
    const isSinglePoint = computed(() => {
      const categories = props.data?.categories || [];
      return categories.length === 1;
    });
    const series = computed(() => {
      if (!props.data?.series) return [];
      return props.data.series;
    });
    const chartOptions = computed(() => {
      const baseOptions = {
        chart: {
          // Must mirror the `chartType` prop. vue3-apexcharts only applies the
          // `:type` prop at init; on any reactive options update it calls
          // updateOptions(options), which re-applies options.chart.type. If this is
          // hardcoded to 'line', an area chart silently flips to a line chart on the
          // next data/options change — dropping the gradient area fill until a remount
          // (e.g. tab switch) re-inits it. Keeping it in sync preserves the fill.
          type: props.chartType,
          fontFamily: "inherit",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          },
          animations: {
            enabled: true,
            easing: "easeinout",
            speed: 800
          }
        },
        colors: props.colors,
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight",
          width: 2,
          dashArray: props.strokeDashArray
        },
        grid: {
          show: props.showGrid,
          borderColor: brandColors.grid,
          strokeDashArray: 4,
          padding: {
            left: 0,
            right: 0
          }
        },
        xaxis: {
          categories: props.data?.categories || [],
          tickAmount: Math.min((props.data?.categories || []).length - 1, 15),
          labels: {
            style: {
              colors: brandColors.text.secondary,
              fontSize: "12px"
            },
            rotate: 0,
            rotateAlways: false,
            hideOverlappingLabels: true
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          title: {
            text: props.yAxisTitle,
            style: {
              color: brandColors.text.secondary,
              fontSize: "12px",
              fontWeight: 500
            }
          },
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
          x: {
            show: true
          },
          y: {
            formatter: (value, { seriesIndex, w }) => {
              const seriesNames = w?.globals?.seriesNames || [];
              const name = seriesNames[seriesIndex] || "";
              const isRate = /rate/i.test(name);
              const base = value.toLocaleString();
              return isRate ? `${base}%` : base;
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
            radius: 12
          },
          itemMargin: {
            horizontal: 12,
            vertical: 8
          }
        },
        markers: {
          size: isSinglePoint.value ? 6 : 0,
          hover: {
            size: isSinglePoint.value ? 8 : 5
          }
        }
      };
      return deepMerge(baseOptions, props.chartOptions);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        hasData.value && isMounted.value ? (openBlock(), createBlock(unref(apexchart), {
          key: 0,
          type: __props.chartType,
          height: __props.height,
          options: chartOptions.value,
          series: series.value
        }, null, 8, ["type", "height", "options", "series"])) : !hasData.value ? (openBlock(), createElementBlock("div", _hoisted_2, toDisplayString(unref(__)("No data available", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true)
      ]);
    };
  }
};
const ApexLineChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e7a110bc"]]);
export {
  ApexLineChart as A
};
