import { n as getUpgradeUrl } from "./ajax-B_XS1gT5.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, f as renderList } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-upsell monsterinsights-upsell-large" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = { class: "monsterinsights-features" };
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["href", "textContent"];
const _sfc_main = {
  __name: "SettingsLiteUpsellLarge",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const text_upsell_title = __("Thank you for being a loyal MonsterInsights Lite user.", "google-analytics-for-wordpress");
    const text_upsell_subtitle = __("Upgrade to MonsterInsights Pro and unlock all the awesome features.", "google-analytics-for-wordpress");
    const text_upsell_coupon = __("Use coupon code %s to get 50%% off.", "google-analytics-for-wordpress");
    const text_features = [
      __("Dashboard Widget", "google-analytics-for-wordpress"),
      __("Video Tracking", "google-analytics-for-wordpress"),
      __("SEO Score Tracking", "google-analytics-for-wordpress"),
      __("eCommerce Tracking", "google-analytics-for-wordpress"),
      __("PPC Pixel Tracking", "google-analytics-for-wordpress"),
      __("Custom Dimensions", "google-analytics-for-wordpress"),
      __("Form Conversions", "google-analytics-for-wordpress"),
      __("Author Tracking", "google-analytics-for-wordpress"),
      __("Affiliate Links", "google-analytics-for-wordpress"),
      __("Site Notes", "google-analytics-for-wordpress"),
      __("Google Search Console", "google-analytics-for-wordpress"),
      __("Realtime Reports", "google-analytics-for-wordpress")
    ];
    const text_button_upgrade = __("Upgrade to MonsterInsights Pro", "google-analytics-for-wordpress");
    const upgrade_button_url = getUpgradeUrl("settings-panel", "ecommerce-tab");
    const text_much_more = __("...and much more!", "google-analytics-for-wordpress");
    function selectText() {
      const text = document.querySelector(".monsterinsights-coupon");
      if (text && window.getSelection) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("h3", {
          textContent: toDisplayString(unref(text_upsell_title))
        }, null, 8, _hoisted_2),
        createBaseVNode("h2", {
          textContent: toDisplayString(unref(text_upsell_subtitle))
        }, null, 8, _hoisted_3),
        createBaseVNode("h4", {
          onClick: selectText,
          innerHTML: unref(sprintf)(unref(text_upsell_coupon), `<span class='monsterinsights-coupon'>LITEUPGRADE</span>`)
        }, null, 8, _hoisted_4),
        createBaseVNode("div", _hoisted_5, [
          (openBlock(), createElementBlock(Fragment, null, renderList(text_features, (feature, index) => {
            return createBaseVNode("span", {
              key: index,
              textContent: toDisplayString(feature)
            }, null, 8, _hoisted_6);
          }), 64))
        ]),
        createBaseVNode("p", {
          class: "monsterinsights-much-more-text",
          textContent: toDisplayString(unref(text_much_more))
        }, null, 8, _hoisted_7),
        createBaseVNode("a", {
          class: "monsterinsights-button monsterinsights-button-green monsterinsights-button-large",
          target: "_blank",
          href: unref(upgrade_button_url),
          textContent: toDisplayString(unref(text_button_upgrade))
        }, null, 8, _hoisted_8)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
