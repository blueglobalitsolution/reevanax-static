import { a2 as resolveDirective, w as withDirectives, o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-info",
  tabindex: "0"
};
const _sfc_main = {
  __name: "SettingsInfoTooltip",
  props: {
    content: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return __props.content ? withDirectives((openBlock(), createElementBlock("span", _hoisted_1, [..._cache[0] || (_cache[0] = [
        createBaseVNode("i", {
          class: "monstericon monstericon-info-circle-regular",
          "aria-hidden": "true"
        }, null, -1)
      ])])), [
        [_directive_tooltip, __props.content]
      ]) : createCommentVNode("", true);
    };
  }
};
export {
  _sfc_main as _
};
