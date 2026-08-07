import { j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, u as unref, K as renderSlot, t as toDisplayString } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-settings-addon-upgrade monsterinsights-settings-addon-disabled" };
const _hoisted_2 = { class: "monsterinsights-settings-addon-message" };
const _hoisted_3 = ["textContent"];
const _sfc_main = {
  __name: "SettingsAddonDisabled",
  setup(__props) {
    const { __ } = wp.i18n;
    const install_plugins = getMiGlobal("install_plugins", false);
    const text_cant_install = __("In order to use these features, please ask your webmaster to install the necessary addon.", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("div", null, [
          createBaseVNode("div", { class: "monsterinsights-bg-img monsterinsights-icon-alert" })
        ], -1)),
        createBaseVNode("div", _hoisted_2, [
          unref(install_plugins) ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock("span", {
            key: 1,
            textContent: toDisplayString(unref(text_cant_install))
          }, null, 8, _hoisted_3))
        ])
      ]);
    };
  }
};
export {
  _sfc_main as _
};
