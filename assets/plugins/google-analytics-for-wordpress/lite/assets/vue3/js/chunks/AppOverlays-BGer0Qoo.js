import { R as zo, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, s as createCommentVNode, u as unref, i as normalizeClass, m as computed, q as purify, E as createBlock, b as createVNode, D as withCtx, F as Fragment, f as renderList, a6 as TransitionGroup, Q as Teleport, U as useToastStore, L as reactive, a7 as Wo } from "./toastStore-CRCNwITM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
function installOverlays(app) {
  app.use(zo());
}
const _hoisted_1$2 = {
  class: "monsterinsights-toast__icon",
  "aria-hidden": "true"
};
const _hoisted_2$1 = {
  key: 0,
  viewBox: "0 0 20 20"
};
const _hoisted_3$1 = {
  key: 1,
  viewBox: "0 0 20 20"
};
const _hoisted_4 = {
  key: 2,
  viewBox: "0 0 20 20"
};
const _hoisted_5 = {
  key: 3,
  class: "monsterinsights-toast__spinner"
};
const _hoisted_6 = {
  key: 4,
  viewBox: "0 0 20 20"
};
const _hoisted_7 = { class: "monsterinsights-toast__body" };
const _hoisted_8 = {
  key: 0,
  class: "monsterinsights-toast__title"
};
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = {
  key: 2,
  class: "monsterinsights-toast__message"
};
const _hoisted_11 = ["aria-label"];
const _sfc_main$3 = {
  __name: "ToastItem",
  props: {
    toast: { type: Object, required: true }
  },
  emits: ["dismiss"],
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const closeLabel = __("Dismiss", "google-analytics-for-wordpress");
    const safeHtml = computed(
      () => props.toast.html ? purify.sanitize(String(props.toast.html)) : ""
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-toast", `monsterinsights-toast--${__props.toast.type}`]),
        role: "status"
      }, [
        createBaseVNode("span", _hoisted_1$2, [
          __props.toast.type === "success" ? (openBlock(), createElementBlock("svg", _hoisted_2$1, [..._cache[1] || (_cache[1] = [
            createBaseVNode("path", { d: "M8 13.2 4.8 10l-1.2 1.2L8 15.6 17 6.6 15.8 5.4z" }, null, -1)
          ])])) : __props.toast.type === "error" ? (openBlock(), createElementBlock("svg", _hoisted_3$1, [..._cache[2] || (_cache[2] = [
            createBaseVNode("path", { d: "M10 1a9 9 0 1 0 0 18A9 9 0 0 0 10 1Zm1 13H9v-2h2Zm0-4H9V5h2Z" }, null, -1)
          ])])) : __props.toast.type === "warning" ? (openBlock(), createElementBlock("svg", _hoisted_4, [..._cache[3] || (_cache[3] = [
            createBaseVNode("path", { d: "M1 18 10 2l9 16Zm10-3H9v2h2Zm0-6H9v4h2Z" }, null, -1)
          ])])) : __props.toast.type === "loading" ? (openBlock(), createElementBlock("span", _hoisted_5)) : (openBlock(), createElementBlock("svg", _hoisted_6, [..._cache[4] || (_cache[4] = [
            createBaseVNode("path", { d: "M10 1a9 9 0 1 0 0 18A9 9 0 0 0 10 1Zm-1 4h2v2H9Zm0 4h2v6H9Z" }, null, -1)
          ])]))
        ]),
        createBaseVNode("div", _hoisted_7, [
          __props.toast.title ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(__props.toast.title), 1)) : createCommentVNode("", true),
          __props.toast.html ? (openBlock(), createElementBlock("p", {
            key: 1,
            class: "monsterinsights-toast__message",
            innerHTML: safeHtml.value
          }, null, 8, _hoisted_9)) : __props.toast.message ? (openBlock(), createElementBlock("p", _hoisted_10, toDisplayString(__props.toast.message), 1)) : createCommentVNode("", true)
        ]),
        __props.toast.dismissible ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: "monsterinsights-toast__close",
          "aria-label": unref(closeLabel),
          onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("dismiss", __props.toast.id))
        }, "×", 8, _hoisted_11)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const ToastItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0620eaa2"]]);
const _hoisted_1$1 = {
  class: "monsterinsights-toast-region",
  "aria-live": "polite",
  "aria-relevant": "additions"
};
const _sfc_main$2 = {
  __name: "ToastRegion",
  setup(__props) {
    const { state: state2, dismiss } = useToastStore();
    const toasts = computed(() => state2.toasts);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(TransitionGroup, { name: "monsterinsights-toast" }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(toasts.value, (toast) => {
                return openBlock(), createBlock(ToastItem, {
                  key: toast.id,
                  toast,
                  onDismiss: unref(dismiss)
                }, null, 8, ["toast", "onDismiss"]);
              }), 128))
            ]),
            _: 1
          })
        ])
      ]);
    };
  }
};
const ToastRegion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8bdc77cb"]]);
let nextId = 0;
const state = reactive({
  /** @type {Array<{id:number,type:string,message:string,dismissible:boolean}>} */
  alerts: []
});
function useAlerts() {
  function add(alert = {}) {
    const id = alert.id ?? ++nextId;
    const existing = state.alerts.findIndex((a) => a.id === id);
    const entry = {
      id,
      type: alert.type || "info",
      message: alert.message || "",
      dismissible: alert.dismissible !== false
    };
    if (existing !== -1) {
      state.alerts.splice(existing, 1, entry);
    } else {
      state.alerts.push(entry);
    }
    return id;
  }
  function remove(id) {
    const i = state.alerts.findIndex((a) => a.id === id);
    if (i !== -1) {
      state.alerts.splice(i, 1);
    }
  }
  function clear() {
    state.alerts.splice(0, state.alerts.length);
  }
  return { state, add, remove, clear };
}
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-alert-stack"
};
const _hoisted_2 = { class: "monsterinsights-alert__message" };
const _hoisted_3 = ["aria-label", "onClick"];
const _sfc_main$1 = {
  __name: "AlertStack",
  setup(__props) {
    const { __ } = wp.i18n;
    const { state: state2, remove } = useAlerts();
    const alerts = computed(() => state2.alerts);
    const closeLabel = __("Dismiss", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return alerts.value.length ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(alerts.value, (alert) => {
          return openBlock(), createElementBlock("div", {
            key: alert.id,
            class: normalizeClass(["monsterinsights-alert", `monsterinsights-alert--${alert.type}`]),
            role: "alert"
          }, [
            createBaseVNode("span", _hoisted_2, toDisplayString(alert.message), 1),
            alert.dismissible ? (openBlock(), createElementBlock("button", {
              key: 0,
              type: "button",
              class: "monsterinsights-alert__close",
              "aria-label": unref(closeLabel),
              onClick: ($event) => unref(remove)(alert.id)
            }, "×", 8, _hoisted_3)) : createCommentVNode("", true)
          ], 2);
        }), 128))
      ])) : createCommentVNode("", true);
    };
  }
};
const AlertStack = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2da1c69c"]]);
const _sfc_main = {
  __name: "AppOverlays",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(unref(Wo)),
        createVNode(ToastRegion),
        createVNode(AlertStack)
      ], 64);
    };
  }
};
export {
  _sfc_main as _,
  installOverlays as i
};
