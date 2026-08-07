import { o as getUrl, j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { _ as _sfc_main$3 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$6 } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./monsterinsights-SettingsInputAuthenticate-Lite-B7bJaDZp.js";
import { _ as _sfc_main$2 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, u as unref, C as watch, F as Fragment, E as createBlock, s as createCommentVNode, t as toDisplayString, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$8 } from "./SettingsLiteUpsellLarge-lnF3P2B8.js";
import { _ as _sfc_main$7 } from "./LaunchWizardButton-D24aVnkm.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./monsterinsights-Lite-uQE5cjXl.js";
import "./TheAppHeader-DEdY-dez.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./license-Boh3_ZVs.js";
import "./auth-CC6F9_ZC.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
const _hoisted_1$1 = { class: "settings-input settings-input-usage-tracking" };
const _hoisted_2$1 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "SettingsInputUsageTracking-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const text_block_title = __("Usage Tracking", "google-analytics-for-wordpress");
    const text_input_label = __("Allow Usage Tracking", "google-analytics-for-wordpress");
    const text_description = __("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.", "google-analytics-for-wordpress");
    const text_anonymous_data_tooltip = sprintf(
      __("Complete documentation on usage tracking is available %1$shere%2$s.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "usage-tracking", "https://www.monsterinsights.com/docs/usage-tracking/") + '" target="_blank">',
      "</a>"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$3, { title: unref(text_block_title) }, {
          default: withCtx(() => [
            createBaseVNode("p", { innerHTML: unref(text_description) }, null, 8, _hoisted_2$1),
            createVNode(_sfc_main$2, {
              name: "anonymous_data",
              label: unref(text_input_label),
              tooltip: unref(text_anonymous_data_tooltip)
            }, null, 8, ["label", "tooltip"])
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content settings-general" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _sfc_main = {
  __name: "monsterinsights-SettingsTabGeneral-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const settingsStore = useSettingsStore();
    const auth = getMiGlobal("auth", {});
    const settings = computed(() => settingsStore.getSettings);
    const show_anonymous_data = ref(false);
    const loaded_settings = ref(false);
    const hasAuth = computed(() => {
      if (getMiGlobal("network", false)) {
        return auth.network_v4 !== "";
      }
      return auth.v4 !== "";
    });
    const automatic_updates = [
      {
        value: "all",
        label: sprintf(__("Yes (recommended) %1$s- Get the latest features, bugfixes, and security updates as they are released.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "minor",
        label: sprintf(__("Minor only %1$s- Get bugfixes and security updates, but not major features.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "none",
        label: sprintf(__("None %1$s- Manually update everything.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      }
    ];
    const text_license_title = __("License Key", "google-analytics-for-wordpress");
    const text_auth_title = __("Google Authentication", "google-analytics-for-wordpress");
    const text_auth_label = __("Connect Google Analytics + WordPress", "google-analytics-for-wordpress");
    const text_auth_description = __("You will be taken to the MonsterInsights website where you'll need to connect your Analytics account.", "google-analytics-for-wordpress");
    const text_automatic_updates = __("Automatic Updates", "google-analytics-for-wordpress");
    const text_setup_wizard_title = __("Setup Wizard", "google-analytics-for-wordpress");
    const text_setup_wizard_label = __("Use our configuration wizard to properly setup Google Analytics with WordPress (with just a few clicks).", "google-analytics-for-wordpress");
    const text_setup_wizard_button = __("Launch Setup Wizard", "google-analytics-for-wordpress");
    const text_setup_wizard_disclaimer = __("Note: You will be transfered to MonsterInsights.com to complete the setup wizard.", "google-analytics-for-wordpress");
    watch(settings, (value) => {
      if (!loaded_settings.value) {
        loaded_settings.value = true;
        show_anonymous_data.value = !value.anonymous_data;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        hasAuth.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$3, { title: unref(text_license_title) }, {
            default: withCtx(() => [
              createVNode(_sfc_main$4)
            ]),
            _: 1
          }, 8, ["title"]),
          createVNode(_sfc_main$3, { title: unref(text_auth_title) }, {
            default: withCtx(() => [
              createVNode(_sfc_main$5, {
                label: unref(text_auth_label),
                description: unref(text_auth_description)
              }, null, 8, ["label", "description"])
            ]),
            _: 1
          }, 8, ["title"])
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createVNode(_sfc_main$3, { title: unref(text_auth_title) }, {
            default: withCtx(() => [
              createVNode(_sfc_main$5, {
                label: unref(text_auth_label),
                description: unref(text_auth_description)
              }, null, 8, ["label", "description"])
            ]),
            _: 1
          }, 8, ["title"]),
          createVNode(_sfc_main$3, { title: unref(text_license_title) }, {
            default: withCtx(() => [
              createVNode(_sfc_main$4)
            ]),
            _: 1
          }, 8, ["title"])
        ], 64)),
        settings.value.automatic_updates === "minor" || settings.value.automatic_updates === "none" ? (openBlock(), createBlock(_sfc_main$3, {
          key: 2,
          title: unref(text_automatic_updates)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6, {
              options: automatic_updates,
              name: "automatic_updates"
            })
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        hasAuth.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          show_anonymous_data.value ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true),
          createVNode(_sfc_main$3, { title: unref(text_setup_wizard_title) }, {
            default: withCtx(() => [
              createBaseVNode("label", {
                textContent: toDisplayString(unref(text_setup_wizard_label))
              }, null, 8, _hoisted_2),
              createVNode(_sfc_main$7, {
                "button-class": "monsterinsights-button",
                "button-text": unref(text_setup_wizard_button)
              }, null, 8, ["button-text"]),
              createBaseVNode("p", {
                class: "monsterinsights-disclaimer-note",
                textContent: toDisplayString(unref(text_setup_wizard_disclaimer))
              }, null, 8, _hoisted_3)
            ]),
            _: 1
          }, 8, ["title"])
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
          createVNode(_sfc_main$3, { title: unref(text_setup_wizard_title) }, {
            default: withCtx(() => [
              createBaseVNode("label", {
                textContent: toDisplayString(unref(text_setup_wizard_label))
              }, null, 8, _hoisted_4),
              createVNode(_sfc_main$7, {
                "button-class": "monsterinsights-button",
                "button-text": unref(text_setup_wizard_button)
              }, null, 8, ["button-text"]),
              createBaseVNode("p", {
                class: "monsterinsights-disclaimer-note",
                textContent: toDisplayString(unref(text_setup_wizard_disclaimer))
              }, null, 8, _hoisted_5)
            ]),
            _: 1
          }, 8, ["title"]),
          show_anonymous_data.value ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
        ], 64)),
        createVNode(_sfc_main$8)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
