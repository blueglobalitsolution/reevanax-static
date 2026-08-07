import { j as getMiGlobal, o as getUrl } from "./ajax-B_XS1gT5.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$6 } from "./SettingsInputRepeater-DyYwxKfe.js";
import { _ as _sfc_main$5 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { _ as _sfc_main$3 } from "./SettingsAddonUpgrade-BDHiAret.js";
import { o as openBlock, E as createBlock, D as withCtx, b as createVNode, a as createBaseVNode, t as toDisplayString, u as unref, c as createElementBlock, F as Fragment, s as createCommentVNode, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$8 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { _ as _sfc_main$7 } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { U as UniversallyPromo } from "./UniversallyPromo-NH8NC5TQ.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./monsterinsights-Lite-uQE5cjXl.js";
import "./TheAppHeader-DEdY-dez.js";
import "./license-Boh3_ZVs.js";
import "./default-i18n-KrIlCc2E.js";
const _sfc_main$2 = {
  __name: "monsterinsights-SettingsInputAmp-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_amp_title = __("Google AMP", "google-analytics-for-wordpress");
    const text_amp_upsell = __("Want to use track users visiting your AMP pages? By upgrading to MonsterInsights Pro, you can enable AMP page tracking.", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, { title: unref(text_amp_title) }, {
        default: withCtx(() => [
          createVNode(_sfc_main$3, { addon: "amp" }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(unref(text_amp_upsell)), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
};
const _sfc_main$1 = {
  __name: "monsterinsights-SettingsInputMedia-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_media_title = __("Media Tracking", "google-analytics-for-wordpress");
    const text_media_upsell = __("Gain insights into how popular and engaging your videos are on your website with completion rates, watch time, and more. Works automatically with embedded YouTube, Vimeo, and HTML5 videos.", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$4, { title: unref(text_media_title) }, {
        default: withCtx(() => [
          createVNode(_sfc_main$3, { addon: "media" }, {
            default: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(unref(text_media_upsell)), 1)
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content settings-publisher" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = { class: "monsterinsights-settings-block-inner-field-label" };
const _hoisted_4 = { class: "monsterinsights-dark" };
const _hoisted_5 = ["innerHTML"];
const _sfc_main = {
  __name: "monsterinsights-SettingsTabPublisher",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    useSettingsStore();
    const addonsStore = useAddonsStore();
    const addons = computed(() => addonsStore.addons || {});
    const site_url = getMiGlobal("site_url", "");
    const repeater_structure = [
      {
        name: "path",
        // Translators: Example path (/go/).
        label: sprintf(__("Path (example: %s)", "google-analytics-for-wordpress"), "/go/"),
        pattern: /^\/\S+$/,
        error: __("Path has to start with a / and have no spaces", "google-analytics-for-wordpress")
      },
      {
        name: "label",
        // Translators: Example label (aff).
        label: sprintf(__("Label (example: %s)", "google-analytics-for-wordpress"), "aff"),
        pattern: /^\S+$/,
        error: __("Label can't contain any spaces", "google-analytics-for-wordpress")
      }
    ];
    const text_affiliate_title = __("Affiliate Links", "google-analytics-for-wordpress");
    const text_affiliate_description_tooltip = sprintf(
      __("Enable tracking for your custom affiliate links to see how they perform. By setting a path like '/go/,' any URL starting with this will be tracked. In Google Analytics, these links are uniquely labeled with 'outbound-link-' followed by your custom label, helping you identify them easily. Read %1$shere%2$s for a detailed guide on setting up affiliate link tracking.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "publisher-tab", "https://www.monsterinsights.com/how-to-set-up-affiliate-link-tracking-in-wordpress/") + '" target="_blank">',
      "</a>"
    );
    const text_affiliate_repeater_description = __("Our affiliate link tracking works by setting path for internal links to track as outbound links.", "google-analytics-for-wordpress");
    const text_headline_analyzer = __("Headline Analyzer", "google-analytics-for-wordpress");
    const text_headline_analyzer_description = __("The MonsterInsights Headline Analyzer tool in the Gutenberg editor enables you to write irresistible SEO-friendly headlines that drive traffic, social media shares, and rank better in search results.", "google-analytics-for-wordpress");
    const text_disable_headline_analyzer = __("Disable the Headline Analyzer", "google-analytics-for-wordpress");
    const text_pretty_links_settings = __("Pretty Links Tracking Settings", "google-analytics-for-wordpress");
    const text_pretty_links_settings_description = __("Select how you want MonsterInsights to track Pretty Links URLs.", "google-analytics-for-wordpress");
    const prettyLinksoptions = [
      {
        value: "target_url",
        label: "Target URL - https://affiliatewebsite.com/productName/&trackingparmeters=123xyz"
      },
      {
        value: "pretty_link",
        label: "Pretty Link URL - " + site_url + "/productName"
      }
    ];
    const isLoadHeadlineAnalyzerSettings = computed(() => {
      if ("false" === getMiGlobal("load_headline_analyzer_settings")) {
        return false;
      }
      return true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(_sfc_main$4, { title: unref(text_affiliate_title) }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", { innerHTML: unref(text_affiliate_repeater_description) }, null, 8, _hoisted_2),
              createVNode(_sfc_main$5, { content: unref(text_affiliate_description_tooltip) }, null, 8, ["content"])
            ]),
            createVNode(_sfc_main$6, {
              structure: repeater_structure,
              name: "affiliate_links"
            }),
            addons.value && addons.value["pretty-link"] && addons.value["pretty-link"].active ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("p", _hoisted_3, [
                createBaseVNode("span", _hoisted_4, toDisplayString(unref(text_pretty_links_settings)), 1),
                createBaseVNode("span", null, toDisplayString(unref(text_pretty_links_settings_description)), 1)
              ]),
              createVNode(_sfc_main$7, {
                options: prettyLinksoptions,
                name: "pretty_links_backend_track"
              })
            ], 64)) : createCommentVNode("", true),
            createVNode(UniversallyPromo, {
              class: "monsterinsights-publisher-settings__universally-promo",
              "promo-id": "universally_affiliate_links",
              "show-info": "",
              text: unref(__)("Make more money by translating your website in seconds.", "google-analytics-for-wordpress"),
              "link-text": unref(__)("Install Universally", "google-analytics-for-wordpress")
            }, null, 8, ["text", "link-text"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$2),
        createVNode(_sfc_main$1),
        isLoadHeadlineAnalyzerSettings.value ? (openBlock(), createBlock(_sfc_main$4, {
          key: 0,
          title: unref(text_headline_analyzer)
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", { innerHTML: unref(text_headline_analyzer_description) }, null, 8, _hoisted_5)
            ]),
            createVNode(_sfc_main$8, {
              name: "disable_headline_analyzer",
              label: unref(text_disable_headline_analyzer)
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true)
      ]);
    };
  }
};
const monsterinsightsSettingsTabPublisher = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22b275e4"]]);
export {
  monsterinsightsSettingsTabPublisher as default
};
