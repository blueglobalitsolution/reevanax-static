import { _ as _sfc_main$1 } from "./SettingsBlock-DC9CU9Pg.js";
import { k as getMiGlobal, az as getUpgradeUrl, y as onMounted, u as unref, o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, t as toDisplayString, F as Fragment, f as renderList, Z as isPro, j as ref } from "./toastStore-CRCNwITM.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-site-notes-wrapper"
};
const _hoisted_2 = ["value"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = {
  key: 1,
  class: "monsterinsights-site-notes-category"
};
const _hoisted_5 = { class: "monsterinsights-site-notes-upsell monsterinsights-bg-upsell-categories" };
const _hoisted_6 = { class: "monsterinsights-site-notes-upsell-window" };
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "monsterinsights-plus-list" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["href", "textContent"];
const _hoisted_12 = ["href", "textContent"];
const _sfc_main = {
  __name: "SiteNotesExport",
  setup(__props) {
    const { __ } = wp.i18n;
    const pro = isPro();
    const nonce = getMiGlobal("nonce");
    const upgradeUrl = getUpgradeUrl("site-notes", "export-overlay-button");
    const text_download_msg = __("Your download will start very soon.", "google-analytics-for-wordpress");
    const text_export = __("Export Site Notes", "google-analytics-for-wordpress");
    const upsell = {
      title: __("Upgrade to MonsterInsights Pro", "google-analytics-for-wordpress"),
      subtitle: __("Create your own categories, add colors, and export your site notes with MonsterInsights Pro.", "google-analytics-for-wordpress"),
      unlock: __("Upgrade and Unlock", "google-analytics-for-wordpress"),
      view_all: __("View all Pro features", "google-analytics-for-wordpress"),
      features: [
        __("Export all of your site notes", "google-analytics-for-wordpress"),
        __("Create customizable categories", "google-analytics-for-wordpress"),
        __("Add screenshots and media to your notes", "google-analytics-for-wordpress"),
        __("Add custom colors to categories", "google-analytics-for-wordpress")
      ]
    };
    const exportForm = ref(null);
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      return unref(pro) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, {
          title: unref(text_export),
          icon: "monsterinsights-icon-note"
        }, {
          default: withCtx(() => [
            createBaseVNode("form", {
              ref_key: "exportForm",
              ref: exportForm,
              action: "",
              method: "post",
              style: { "display": "none" }
            }, [
              createBaseVNode("input", {
                type: "hidden",
                value: unref(nonce),
                name: "nonce"
              }, null, 8, _hoisted_2),
              _cache[0] || (_cache[0] = createBaseVNode("input", {
                type: "hidden",
                value: "monsterinsights_export_notes",
                name: "monsterinsights_action"
              }, null, -1))
            ], 512),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_download_msg))
            }, null, 8, _hoisted_3)
          ]),
          _: 1
        }, 8, ["title"])
      ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-site-notes-wrapper monsterinsights-site-notes-wrapper-lite" }, null, -1)),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("h2", {
              textContent: toDisplayString(upsell.title)
            }, null, 8, _hoisted_7),
            createBaseVNode("p", {
              innerHTML: upsell.subtitle
            }, null, 8, _hoisted_8),
            createBaseVNode("ul", _hoisted_9, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(upsell.features, (feature, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  textContent: toDisplayString(feature)
                }, null, 8, _hoisted_10);
              }), 128))
            ]),
            createBaseVNode("a", {
              href: unref(upgradeUrl),
              target: "_blank",
              rel: "noopener",
              class: "monsterinsights-button monsterinsights-button-large",
              textContent: toDisplayString(upsell.unlock)
            }, null, 8, _hoisted_11),
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("a", {
              href: unref(upgradeUrl),
              target: "_blank",
              rel: "noopener",
              class: "monsterinsights-button-text",
              textContent: toDisplayString(upsell.view_all)
            }, null, 8, _hoisted_12)
          ])
        ])
      ]));
    };
  }
};
export {
  _sfc_main as default
};
