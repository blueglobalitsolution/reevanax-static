import { k as isPro } from "./ajax-B_XS1gT5.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { _ as _sfc_main$3 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$6 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { _ as _sfc_main$2, a as _sfc_main$4 } from "./monsterinsights-SettingsInputAuthenticate-Lite-B7bJaDZp.js";
import { o as openBlock, c as createElementBlock, b as createVNode, a4 as createSlots, D as withCtx, a as createBaseVNode, t as toDisplayString, u as unref, E as createBlock, s as createCommentVNode, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$7 } from "./SettingsLiteUpsellLarge-lnF3P2B8.js";
import { _ as _sfc_main$5 } from "./LaunchWizardButton-D24aVnkm.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./settings-DM9kkmj_.js";
import "./monsterinsights-Lite-uQE5cjXl.js";
import "./TheAppHeader-DEdY-dez.js";
import "./addons-CSVIjAyY.js";
import "./Modal-B9mMTzc_.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
import "./auth-CC6F9_ZC.js";
const _hoisted_1$1 = { class: "settings-input settings-input-license" };
const _sfc_main$1 = {
  __name: "monsterinsights-SettingsInputLicenseNetwork-Lite",
  props: {
    label: String
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$2)
      ]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content settings-network" };
const _hoisted_2 = { class: "monsterinsights-license-expired-tag" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _sfc_main = {
  __name: "monsterinsights-SettingsNetwork",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const licenseStore = useLicenseStore();
    const isProBuild = isPro();
    const license_network = computed(() => licenseStore.license_network);
    const isNetworkLicenseExpired = computed(() => !!license_network.value?.is_expired);
    const text_license_title = __("License Key", "google-analytics-for-wordpress");
    const text_license_label = sprintf(__("Add your MonsterInsights license key from the email receipt or account area. %1$sRetrieve your license key%2$s.", "google-analytics-for-wordpress"), '<a href="#">', "</a>");
    const text_auth_title = __("Google Authentication", "google-analytics-for-wordpress");
    const text_auth_label = __("Connect Google Analytics + WordPress", "google-analytics-for-wordpress");
    const text_auth_description = __("You will be taken to the MonsterInsights website where you'll need to connect your Analytics account.", "google-analytics-for-wordpress");
    const text_setup_wizard_title = __("Setup Wizard", "google-analytics-for-wordpress");
    const text_setup_wizard_label = __("Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).", "google-analytics-for-wordpress");
    const text_setup_wizard_button = __("Launch Setup Wizard", "google-analytics-for-wordpress");
    const text_onboarding_note = __("Note: You will be transfered to MonsterInsights.com to complete the setup wizard.", "google-analytics-for-wordpress");
    const text_misc_title = __("Miscellaneous", "google-analytics-for-wordpress");
    const text_announcements_title = __("Hide Announcements", "google-analytics-for-wordpress");
    const text_announcements_description = __("Hides plugin announcements and update details. This includes critical notices we use to inform about deprecations and important required configuration changes.", "google-analytics-for-wordpress");
    const text_announcements_label = __("Hide Announcements", "google-analytics-for-wordpress");
    const text_tag_expired = __("Expired", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(_sfc_main$3, { title: unref(text_license_title) }, createSlots({
          default: withCtx(() => [
            createVNode(_sfc_main$1, { label: unref(text_license_label) }, null, 8, ["label"])
          ]),
          _: 2
        }, [
          isNetworkLicenseExpired.value ? {
            name: "expired-license-tag",
            fn: withCtx(() => [
              createBaseVNode("span", _hoisted_2, toDisplayString(unref(text_tag_expired)), 1)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["title"]),
        createVNode(_sfc_main$3, { title: unref(text_auth_title) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$4, {
              label: unref(text_auth_label),
              description: unref(text_auth_description)
            }, null, 8, ["label", "description"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, { title: unref(text_setup_wizard_title) }, {
          default: withCtx(() => [
            createBaseVNode("label", {
              textContent: toDisplayString(unref(text_setup_wizard_label))
            }, null, 8, _hoisted_3),
            createVNode(_sfc_main$5, {
              "button-class": "monsterinsights-button",
              "button-text": unref(text_setup_wizard_button)
            }, null, 8, ["button-text"]),
            createBaseVNode("p", {
              class: "monsterinsights-disclaimer-note",
              textContent: toDisplayString(unref(text_onboarding_note))
            }, null, 8, _hoisted_4)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, { title: unref(text_misc_title) }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                innerHTML: unref(text_announcements_title)
              }, null, 8, _hoisted_5),
              createBaseVNode("span", { innerHTML: unref(text_announcements_description) }, null, 8, _hoisted_6)
            ]),
            createVNode(_sfc_main$6, {
              name: "hide_am_notices",
              label: unref(text_announcements_label)
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["title"]),
        !unref(isProBuild) ? (openBlock(), createBlock(_sfc_main$7, { key: 0 })) : createCommentVNode("", true)
      ]);
    };
  }
};
const monsterinsightsSettingsNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9e376a00"]]);
export {
  monsterinsightsSettingsNetwork as default
};
