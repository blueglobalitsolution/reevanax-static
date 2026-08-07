import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, f as renderList, t as toDisplayString, i as normalizeClass, b as createVNode, s as createCommentVNode } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-overview-key-metrics" };
const _hoisted_2 = { class: "monsterinsights-overview-key-metrics__container" };
const _hoisted_3 = { class: "monsterinsights-overview-key-metrics__item" };
const _hoisted_4 = { class: "monsterinsights-overview-key-metrics__label" };
const _hoisted_5 = { class: "monsterinsights-overview-key-metrics__value-row" };
const _hoisted_6 = { class: "monsterinsights-overview-key-metrics__value" };
const _sfc_main = {
  __name: "ReportKeyMetrics",
  props: {
    /**
     * Array of metric objects:
     * { id: string, label: string, value: string, trend?: number }
     *
     * - value: already formatted display string (e.g. "$1,234", "3.2%")
     * - trend: percent change number (e.g. 12.5, -3.1). null hides the badge.
     */
    metrics: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    function getTrendClass(trend) {
      if (trend == null) return "";
      return trend >= 0 ? "monsterinsights-overview-key-metrics__trend--positive" : "monsterinsights-overview-key-metrics__trend--negative";
    }
    function formatTrend(trend) {
      return `${Math.abs(trend).toFixed(1)}%`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.metrics, (metric) => {
            return openBlock(), createElementBlock("div", {
              key: metric.id,
              class: "monsterinsights-overview-key-metrics__item-wrapper"
            }, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, toDisplayString(metric.label), 1),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("span", _hoisted_6, toDisplayString(metric.value), 1),
                  metric.trend != null ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["monsterinsights-overview-key-metrics__trend", getTrendClass(metric.trend)])
                  }, [
                    createVNode(Icon, {
                      name: metric.trend >= 0 ? "trend-up" : "trend-down",
                      size: 16
                    }, null, 8, ["name"]),
                    createBaseVNode("span", null, toDisplayString(formatTrend(metric.trend)), 1)
                  ], 2)) : createCommentVNode("", true)
                ])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
