import { o as openBlock, E as createBlock, D as withCtx, K as renderSlot, a5 as resolveDynamicComponent, j as ref, C as watch, c as createElementBlock, a as createBaseVNode, A as createTextVNode, t as toDisplayString, i as normalizeClass, s as createCommentVNode, G as withKeys, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = {
  __name: "SlideDownUp",
  props: {
    group: {
      type: Boolean,
      default: false
    },
    done: {
      type: Function,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    function onEnter(element) {
      const { width } = getComputedStyle(element);
      element.style.width = width;
      element.style.position = "absolute";
      element.style.visibility = "hidden";
      element.style.height = "auto";
      const { height } = getComputedStyle(element);
      element.style.width = "auto";
      element.style.position = "relative";
      element.style.visibility = "visible";
      element.style.height = "0";
      element.offsetHeight;
      element.style.height = height;
      if (props.done) {
        setTimeout(() => {
          props.done();
        }, 500);
      }
    }
    function onAfterEnter(element) {
      element.style.height = "auto";
    }
    function onLeave(element) {
      const { height } = getComputedStyle(element);
      element.style.height = height;
      element.offsetHeight;
      element.style.height = "0";
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(__props.group ? "TransitionGroup" : "Transition"), {
        name: "expand",
        onEnter,
        onAfterEnter,
        onLeave
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ]),
        _: 3
      }, 32);
    };
  }
};
const SlideDownUp = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-63efda11"]]);
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-settings-input-toggle-collapsible",
  role: "button"
};
const _sfc_main = {
  __name: "SettingsBlock",
  props: {
    title: String,
    icon: {
      default: "",
      type: String
    },
    collapsible: {
      default: false,
      type: Boolean
    },
    defaultCollapse: {
      default: true,
      type: Boolean
    },
    blockContentClass: {
      default: "",
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const collapsed = ref(props.defaultCollapse);
    watch(() => props.defaultCollapse, (value) => {
      collapsed.value = value;
    });
    const titleClass = computed(() => {
      return "monsterinsights-settings-block-title " + props.icon;
    });
    const blockClass = computed(() => {
      let cls = "monsterinsights-settings-block";
      if (props.collapsible) {
        cls += " monsterinsights-settings-block-collapsible";
        if (collapsed.value) {
          cls += " monsterinsights-settings-block-collapsible-collapsed";
        }
      }
      return cls;
    });
    const iconClass = computed(() => {
      let cls = "monstericon-arrow";
      if (!collapsed.value) {
        cls += " monstericon-down";
      }
      return cls;
    });
    const blockClassContent = computed(() => {
      let cls = "monsterinsights-settings-block-content";
      if (props.blockContentClass) {
        cls += " " + props.blockContentClass;
      }
      return cls;
    });
    function toggleCollapsible(e) {
      e.preventDefault();
      collapsed.value = !collapsed.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(blockClass.value)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(titleClass.value),
          onClick: toggleCollapsible,
          onKeyup: [
            withKeys(toggleCollapsible, ["enter"]),
            withKeys(toggleCollapsible, ["space"])
          ]
        }, [
          createTextVNode(toDisplayString(__props.title) + " ", 1),
          renderSlot(_ctx.$slots, "expired-license-tag"),
          __props.collapsible ? (openBlock(), createElementBlock("span", _hoisted_1, [
            createBaseVNode("i", {
              class: normalizeClass(iconClass.value),
              tabindex: "0",
              onkeypress: "if(event.keyCode==32||event.keyCode==13){return false;};"
            }, null, 2)
          ])) : createCommentVNode("", true)
        ], 34),
        __props.collapsible ? (openBlock(), createBlock(SlideDownUp, { key: 0 }, {
          default: withCtx(() => [
            !collapsed.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(blockClassContent.value)
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2)) : createCommentVNode("", true)
          ]),
          _: 3
        })) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(blockClassContent.value)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2))
      ], 2);
    };
  }
};
export {
  SlideDownUp as S,
  _sfc_main as _
};
