import { n as getUpgradeUrl } from "./ajax-B_XS1gT5.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, h as createStaticVNode } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-settings-ecommerce monsterinsights-upsell" };
const _hoisted_2 = { class: "monsterinsights-upsell-top" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "monsterinsights-logos-row" };
const _hoisted_6 = ["textContent"];
const _hoisted_7 = { class: "monsterinsights-upsell-bottom" };
const _hoisted_8 = ["href", "textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["href", "textContent"];
const _hoisted_12 = { class: "monsterinsights-settings-content monsterinsights-affiliate-tracking-upsell" };
const _hoisted_13 = { class: "monsterinsights-aft-upsell-head" };
const _hoisted_14 = ["textContent"];
const _hoisted_15 = { class: "monsterinsights-aft-upsell-content" };
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["textContent"];
const _hoisted_19 = ["href", "textContent"];
const _sfc_main = {
  __name: "monsterinsights-SettingsTabEcommerce-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const upgrade_button_url = getUpgradeUrl("settings-panel", "ecommerce-tab");
    const text_title = __("eCommerce Tracking and Reporting", "google-analytics-for-wordpress");
    const text_sub_title = __("Easily track and measure eCommerce activity across your website.", "google-analytics-for-wordpress");
    const text_one_click = __("One-click Enhanced eCommerce tracking for:", "google-analytics-for-wordpress");
    const text_button_upgrade = __("Upgrade MonsterInsights Now", "google-analytics-for-wordpress");
    const text_bottom_title = __("Start Making Data-Driven Decisions", "google-analytics-for-wordpress");
    const text_bottom_content = __("It's time to take your eCommerce store to the next level. Upgrade to MonsterInsights Pro and unlock eCommerce tracking and reporting.", "google-analytics-for-wordpress");
    const text_affiliate_title = __("Affiliate Tracking", "google-analytics-for-wordpress");
    const text_affiliate_content_heading = __("Track Your Affiliate Links", "google-analytics-for-wordpress");
    const text_affiliate_content_text_1 = __("MonsterInsights makes it easy to track your affiliate links with Google Analytics.", "google-analytics-for-wordpress");
    const text_affiliate_content_text_2 = __("Easily see which affiliate links are getting the most clicks, so you can maximize your revenue.", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("main", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", {
              textContent: toDisplayString(unref(text_title))
            }, null, 8, _hoisted_3),
            createBaseVNode("h4", {
              textContent: toDisplayString(unref(text_sub_title))
            }, null, 8, _hoisted_4),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("span", {
                class: "monsterinsights-box-title",
                textContent: toDisplayString(unref(text_one_click))
              }, null, 8, _hoisted_6),
              _cache[0] || (_cache[0] = createStaticVNode('<div class="woocommerce-logo"></div><div class="edd-logo"></div><div class="memberpress-logo"></div><div class="give-wp-logo"></div><div class="lifter-lms-logo"></div><div class="restrict-content-pro-logo"></div><div class="charitable-logo"></div><div class="wishlistmember-logo"></div><div class="membermouse-logo"></div>', 9))
            ])
          ]),
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("a", {
              class: "monsterinsights-button monsterinsights-button-green monsterinsights-button-large monsterinsights-button-top",
              target: "_blank",
              href: unref(upgrade_button_url),
              textContent: toDisplayString(unref(text_button_upgrade))
            }, null, 8, _hoisted_8),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-bg-img monsterinsights-report-ecommerce" }, null, -1)),
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_bottom_title))
            }, null, 8, _hoisted_9),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_bottom_content))
            }, null, 8, _hoisted_10),
            createBaseVNode("a", {
              class: "monsterinsights-button monsterinsights-button-green monsterinsights-button-large",
              target: "_blank",
              href: unref(upgrade_button_url),
              textContent: toDisplayString(unref(text_button_upgrade))
            }, null, 8, _hoisted_11)
          ])
        ]),
        createBaseVNode("main", _hoisted_12, [
          createBaseVNode("div", _hoisted_13, [
            createBaseVNode("h2", {
              textContent: toDisplayString(unref(text_affiliate_title))
            }, null, 8, _hoisted_14)
          ]),
          createBaseVNode("div", _hoisted_15, [
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_affiliate_content_heading))
            }, null, 8, _hoisted_16),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-affiliates-promo-logo" }, null, -1)),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_affiliate_content_text_1))
            }, null, 8, _hoisted_17),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_affiliate_content_text_2))
            }, null, 8, _hoisted_18),
            createBaseVNode("a", {
              class: "monsterinsights-button monsterinsights-button-green monsterinsights-button-large",
              target: "_blank",
              href: unref(upgrade_button_url),
              textContent: toDisplayString(unref(text_button_upgrade))
            }, null, 8, _hoisted_19)
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
