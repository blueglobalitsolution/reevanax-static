import { o as openBlock, E as createBlock, c as createElementBlock, b as createVNode, D as withCtx, u as unref, a as createBaseVNode, t as toDisplayString, B as withModifiers, i as normalizeClass, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$3 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { _ as _sfc_main$2 } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { e as emptyCache } from "./popularPosts-YBcx2bWk.js";
import "./useNotices-BpzNuZJ7.js";
import "./ajax-B_XS1gT5.js";
import "./Modal-B9mMTzc_.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./settings-DM9kkmj_.js";
import "./monsterinsights-Lite-uQE5cjXl.js";
import "./TheAppHeader-DEdY-dez.js";
import "./license-Boh3_ZVs.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
const _sfc_main$1 = {
  __name: "monsterinsights-PopularPostsCacheInterval-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const caching_options = [
      {
        value: "7",
        label: `<b>${__("7 days", "google-analytics-for-wordpress")}</b>`
      },
      {
        value: "30",
        label: `<b>${__("30 days", "google-analytics-for-wordpress")}</b>`
      },
      {
        value: "custom",
        label: `<b>${__("Custom", "google-analytics-for-wordpress")}</b>`,
        level: "basic"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        auth_disabled: false,
        options: caching_options,
        name: "popular_posts_caching_refresh"
      });
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-settings-content-pp-settings" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _sfc_main = {
  __name: "PopularPostsSettings",
  setup(__props) {
    const { __ } = wp.i18n;
    const { successToast, errorToast } = useToast();
    const text_caching = __("Caching", "google-analytics-for-wordpress");
    const text_enable_caching = __("Enable Data Caching", "google-analytics-for-wordpress");
    const text_refresh = __("Refresh Cache Every", "google-analytics-for-wordpress");
    const text_refresh_desc = __("Choose how often to refresh the cache.", "google-analytics-for-wordpress");
    const text_enable_ajax = __("Enable Ajaxify", "google-analytics-for-wordpress");
    const text_ajaxify = __("Ajaxify Widget", "google-analytics-for-wordpress");
    const text_ajaxify_desc = __("Use to bypass page caching.", "google-analytics-for-wordpress");
    const text_empty_cache = __("Empty Cache", "google-analytics-for-wordpress");
    const text_please_wait = __("Please wait...", "google-analytics-for-wordpress");
    const text_empty_cache_desc = __(
      "Click to manually wipe the cache right now.",
      "google-analytics-for-wordpress"
    );
    const emptying_cache = ref(false);
    const empty_cache_button_class = computed(() => {
      let cls = "monsterinsights-button";
      if (emptying_cache.value) {
        cls += " monsterinsights-button-disabled";
      } else {
        cls += " monsterinsights-button-secondary";
      }
      return cls;
    });
    const empty_cache_button_text = computed(
      () => emptying_cache.value ? text_please_wait : text_empty_cache
    );
    async function emptyCache$1() {
      emptying_cache.value = true;
      try {
        await emptyCache();
        successToast({
          title: __("Popular posts cache emptied", "google-analytics-for-wordpress")
        });
      } catch (_err) {
        errorToast({
          title: __(
            "Error emptying the popular posts cache. Please try again.",
            "google-analytics-for-wordpress"
          )
        });
      } finally {
        emptying_cache.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$4, {
          title: unref(text_caching),
          icon: "monstericon-lightbulb"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, {
              auth_disabled: false,
              faux: true,
              label: unref(text_enable_caching)
            }, null, 8, ["label"]),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_refresh))
              }, null, 8, _hoisted_2),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_refresh_desc))
              }, null, 8, _hoisted_3)
            ]),
            createVNode(_sfc_main$1),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_ajaxify))
              }, null, 8, _hoisted_4),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_ajaxify_desc))
              }, null, 8, _hoisted_5)
            ]),
            createVNode(_sfc_main$3, {
              auth_disabled: false,
              name: "popular_posts_ajaxify",
              label: unref(text_enable_ajax)
            }, null, 8, ["label"]),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_empty_cache))
              }, null, 8, _hoisted_6),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_empty_cache_desc))
              }, null, 8, _hoisted_7)
            ]),
            createBaseVNode("button", {
              class: normalizeClass(empty_cache_button_class.value),
              onClick: withModifiers(emptyCache$1, ["prevent"]),
              textContent: toDisplayString(empty_cache_button_text.value)
            }, null, 10, _hoisted_8)
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
