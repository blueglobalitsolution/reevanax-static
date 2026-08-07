import { b as useRoute } from "./TheAppHeader-DEdY-dez.js";
import { j as getMiGlobal, q as sanitizeHtml, o as getUrl, k as isPro } from "./ajax-B_XS1gT5.js";
import { a as useToast, c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { _ as _sfc_main$4 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$3 } from "./SettingsAddonUpgrade-BDHiAret.js";
import { _ as _sfc_main$6 } from "./SettingsAddonDisabled-T8OUEbF2.js";
import { _ as _sfc_main$5 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { j as ref, a2 as resolveDirective, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, s as createCommentVNode, F as Fragment, f as renderList, w as withDirectives, P as vModelSelect, i as normalizeClass, m as computed, E as createBlock, D as withCtx, b as createVNode, y as onMounted } from "./toastStore-CRCNwITM.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { S as SettingsInputText } from "./SettingsInputText-DEkJNBzd.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
const _hoisted_1$1 = { class: "monsterinsights-settings-input-repeater monsterinsights-settings-input-dimensions" };
const _hoisted_2$1 = {
  key: 0,
  class: "monsterinsights-settings-input-repeater-labels settings-input-repeater-row"
};
const _hoisted_3$2 = ["textContent"];
const _hoisted_4$2 = ["onUpdate:modelValue", "disabled"];
const _hoisted_5$2 = ["value", "disabled", "textContent"];
const _hoisted_6$2 = ["title", "onClick"];
const _hoisted_7$1 = {
  key: 1,
  class: "monsterinsights-error"
};
const _hoisted_8$2 = ["innerHTML"];
const _hoisted_9$2 = ["textContent"];
const _sfc_main$2 = {
  __name: "SettingsInputDimensions",
  props: {
    name: String
  },
  emits: ["showAIOSEONotice", "showYoastNotice"],
  setup(__props, { emit: __emit }) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const settingsStore = useSettingsStore();
    const { needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const isNetwork = getMiGlobal("network", false);
    const miDimensions = getMiGlobal("dimensions", []);
    const has_errors = ref(false);
    const current_index = ref(0);
    const dimensions = ref(JSON.parse(JSON.stringify(miDimensions)));
    const text_add = __("Add New Custom Dimension", "google-analytics-for-wordpress");
    const text_remove_row = __("Remove row", "google-analytics-for-wordpress");
    const text_type = __("Type", "google-analytics-for-wordpress");
    __("You are using %1$d out of %2$d custom dimensions", "google-analytics-for-wordpress");
    const auth = getMiGlobal("auth", {});
    const has_v4_id = computed(() => {
      if (isNetwork) {
        return auth.network_v4 || auth.network_manual_v4;
      }
      return auth.v4 || auth.manual_v4;
    });
    const disabled = computed(() => {
      return !has_v4_id.value;
    });
    const tooltip_data = computed(() => {
      return {
        content: has_v4_id.value ? "" : needToAuthMessage.value,
        autoHide: false,
        trigger: "hover focus click"
      };
    });
    const button_class = computed(() => {
      let bclass = "monsterinsights-button";
      if (disabled.value) {
        bclass += " monsterinsights-button-disabled";
      }
      return bclass;
    });
    const rows = computed({
      get() {
        const settings = settingsStore.getSettings;
        let settingValue = settings[props.name];
        if (!settingValue) {
          settingValue = [];
        }
        if (settingValue && settingValue.constructor === Object) {
          settingValue = Object.values(settingValue);
        }
        const rowsCopy = JSON.parse(JSON.stringify(settingValue));
        updateAvailableDimensions(rowsCopy);
        maybeShowAIOSEONotice(rowsCopy);
        maybeShowYoastNotice(rowsCopy);
        return rowsCopy;
      },
      set() {
        updateSetting();
      }
    });
    function updateSetting() {
      if (disabled.value) {
        return false;
      }
      has_errors.value = validateSettings();
      if (has_errors.value) {
        return false;
      }
      savingToast({});
      updateAvailableDimensions();
      settingsStore.updateSetting({
        name: props.name,
        value: rows.value
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function addRow() {
      if (disabled.value) {
        return false;
      }
      updateAvailableDimensions();
      let selected_dimension = "";
      for (const index in dimensions.value) {
        if (dimensions.value[index].enabled) {
          selected_dimension = dimensions.value[index].type;
        }
      }
      const new_row = {
        id: getCurrentIndex(),
        type: selected_dimension
      };
      rows.value.push(new_row);
      updateAvailableDimensions();
      updateSetting();
    }
    function removeRow(index) {
      rows.value.splice(index, 1);
      updateSetting();
    }
    function updateAvailableDimensions(inputRows) {
      const current_rows = inputRows ? inputRows : rows.value;
      if (current_rows) {
        for (const index in dimensions.value) {
          let enabled = miDimensions[index].enabled;
          for (const loaded_index in current_rows) {
            if (dimensions.value[index]["type"] === current_rows[loaded_index]["type"]) {
              enabled = false;
              break;
            }
          }
          dimensions.value[index]["enabled"] = enabled;
        }
      }
    }
    function validateSettings() {
      const ids = [];
      let empty_value = false;
      for (const index in rows.value) {
        ids.push(parseInt(rows.value[index].id));
        if ("" === rows.value[index].id) {
          empty_value = true;
        }
      }
      if (empty_value) {
        return __("Each dimension needs to have an id set.", "google-analytics-for-wordpress");
      }
      const filtered = ids.filter((x, i, a) => a.indexOf(x) === i);
      if (filtered.length !== ids.length) {
        return __("The custom dimension IDs must be unique for each dimension.", "google-analytics-for-wordpress");
      }
      return false;
    }
    function getDimensionsCount() {
      let count = 0;
      for (const index in miDimensions) {
        if (miDimensions[index]["enabled"]) {
          count++;
        }
      }
      return count;
    }
    function rowClass(type) {
      let row_class = "monsterinsights-settings-input-repeater-row";
      if (defaultDisabled(type)) {
        row_class += " monsterinsights-disabled-row";
      }
      return row_class;
    }
    function defaultDisabled(type) {
      for (const dimension in miDimensions) {
        if (miDimensions[dimension].type === type) {
          if (!miDimensions[dimension].enabled) {
            return true;
          }
        }
      }
      return false;
    }
    function getCurrentIndex() {
      const current_indexes = [];
      for (const index in rows.value) {
        current_indexes.push(rows.value[index]["id"]);
      }
      current_indexes.sort(function(a, b) {
        return a - b;
      });
      if (0 === current_indexes.length) {
        current_index.value = 1;
        return 1;
      }
      let lowest = 1;
      for (let i = 0; i < current_indexes.length; i++) {
        if (current_indexes[i] - 1 !== i) {
          lowest = i + 1;
          break;
        }
      }
      if (lowest === 1) {
        lowest = parseInt(current_indexes[current_indexes.length - 1], 10) + 1;
      }
      current_index.value = lowest;
      return current_index.value;
    }
    function getDimensions(type) {
      const result = [];
      for (const index in dimensions.value) {
        if (dimensions.value[index].enabled || type === dimensions.value[index].type) {
          result.push(dimensions.value[index]);
        }
      }
      return result;
    }
    function maybeShowAIOSEONotice(inputRows) {
      if (inputRows) {
        for (const index in inputRows) {
          if ("aioseo_truseo_score" === inputRows[index].type && defaultDisabled("aioseo_truseo_score") || "aioseo_focus_keyphrase" === inputRows[index].type && defaultDisabled("aioseo_focus_keyphrase")) {
            emit("showAIOSEONotice");
            break;
          }
        }
      }
    }
    function maybeShowYoastNotice(inputRows) {
      if (inputRows) {
        for (const index in inputRows) {
          if ("seo_score" === inputRows[index].type && defaultDisabled("seo_score") || "focus_keyword" === inputRows[index].type && defaultDisabled("focus_keyword")) {
            emit("showYoastNotice");
            break;
          }
        }
      }
    }
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        has_v4_id.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createBaseVNode("label", {
            textContent: toDisplayString(unref(text_type))
          }, null, 8, _hoisted_3$2)
        ])) : createCommentVNode("", true),
        _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row, index) => {
          return openBlock(), createElementBlock("div", {
            key: "separator-" + index
          }, [
            createBaseVNode("div", {
              class: normalizeClass(rowClass(row.type))
            }, [
              createBaseVNode("label", null, [
                withDirectives(createBaseVNode("select", {
                  "onUpdate:modelValue": ($event) => row.type = $event,
                  disabled: disabled.value,
                  onChange: updateSetting
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(getDimensions(row.type), (option) => {
                    return openBlock(), createElementBlock("option", {
                      key: option.type,
                      value: option.type,
                      disabled: !option.enabled,
                      textContent: toDisplayString(option.title)
                    }, null, 8, _hoisted_5$2);
                  }), 128))
                ], 40, _hoisted_4$2), [
                  [vModelSelect, row.type]
                ])
              ]),
              createBaseVNode("button", {
                title: unref(text_remove_row),
                onClick: ($event) => removeRow(index)
              }, [..._cache[0] || (_cache[0] = [
                createBaseVNode("i", { class: "monstericon-times-circle" }, null, -1)
              ])], 8, _hoisted_6$2)
            ], 2),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1))
          ]);
        }), 128)),
        has_errors.value ? (openBlock(), createElementBlock("label", _hoisted_7$1, [
          _cache[2] || (_cache[2] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
          createBaseVNode("span", {
            innerHTML: unref(sanitizeHtml)(has_errors.value)
          }, null, 8, _hoisted_8$2)
        ])) : createCommentVNode("", true),
        rows.value.length < getDimensionsCount() ? withDirectives((openBlock(), createElementBlock("button", {
          key: 2,
          class: normalizeClass(button_class.value),
          onClick: addRow,
          textContent: toDisplayString(unref(text_add))
        }, null, 10, _hoisted_9$2)), [
          [_directive_tooltip, tooltip_data.value]
        ]) : createCommentVNode("", true)
      ]);
    };
  }
};
const SettingsInputDimensions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-5a5a273f"]]);
const _hoisted_3$1 = ["textContent"];
const _hoisted_4$1 = ["textContent"];
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7 = ["textContent"];
const _hoisted_8$1 = ["innerHTML"];
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11$1 = ["innerHTML"];
const _hoisted_12$1 = ["textContent"];
const _hoisted_13$1 = ["innerHTML"];
const _hoisted_14$1 = ["textContent"];
const _hoisted_15$1 = ["innerHTML"];
const _hoisted_16$1 = ["innerHTML"];
const _hoisted_17$1 = ["textContent"];
const _hoisted_18$1 = ["innerHTML"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = ["innerHTML"];
const _hoisted_23 = ["textContent"];
const _hoisted_24 = ["textContent"];
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = ["textContent"];
const _sfc_main$1 = {
  __name: "monsterinsights-SettingsInputAds",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const isEM = false;
    const addonsStore = useAddonsStore();
    const licenseStore = useLicenseStore();
    const isNetwork = getMiGlobal("network", false);
    const addons_url = getMiGlobal("addons_url", "#");
    function isAddonActive(addon) {
      const addons = addonsStore.addons || {};
      return addons[addon] ? addons[addon].active : false;
    }
    const isDataLoaded = computed(() => {
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      const isLicenseLoaded = typeof license.type !== "undefined" && license.type !== "";
      const isAddonsLoaded = Object.keys(addonsStore.addons || {}).length > 0;
      return isLicenseLoaded && isAddonsLoaded;
    });
    const showUpsell = computed(() => {
      if (!isDataLoaded.value) {
        return null;
      }
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      const hasAddonActive = isAddonActive("ads") || isAddonActive("ppc-tracking");
      if (hasAddonActive) {
        return false;
      }
      return "plus" === license.type || "starter" === license.type;
    });
    const text_ads_upsell = __("In order to use the PPC Ads Pixel Tracking, upgrade to MonsterInsights Pro", "google-analytics-for-wordpress");
    __("Ads Tracking", "google-analytics-for-wordpress");
    __("In order to use the PPC Ads Pixel Tracking, upgrade to ExactMetrics Pro", "google-analytics-for-wordpress");
    __("Upgrade to PRO", "google-analytics-for-wordpress");
    const text_ads_title = __("PPC Ads Pixel Tracking", "google-analytics-for-wordpress");
    const text_ads_adsense_title = __("Google Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_adsense_description = sprintf(
      __("Requires integration of your Analytics and Ads account. For how to do this, %1$ssee this help page%2$s.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "ads-input", "https://www.monsterinsights.com/how-to-use-google-analytics-with-adwords/") + '" target="_blank">',
      "</a>"
    );
    const text_ads_adsense_label = __("Enable Google Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_addon_disabled = sprintf(
      __("Easily add your Google Ads, Microsoft Ads, or Meta Pixel to your website to track your campaign  performance. Works automatically with WooCommerce, Easy Digital Downloads, MemberPress, GiveWP, and LifterLMS integrations. %1$sInstall and Activate%2$s Now.", "google-analytics-for-wordpress"),
      '<a href="' + addons_url + '">',
      "</a>"
    );
    const text_ads_addon_faux_tooltip = __("Deactivate the Ads Addon to disable", "google-analytics-for-wordpress");
    const text_title_ads_conversion_id = __("Conversion ID", "google-analytics-for-wordpress");
    const text_ads_conversion_id_description = sprintf(
      __("Add your Google Ads Conversion ID. Format eg: %1$sAW-123456789%2$s", "google-analytics-for-wordpress"),
      "<strong>",
      "</strong>"
    );
    const text_title_ads_conversion_label = __("Conversion Label", "google-analytics-for-wordpress");
    const text_ads_conversion_label_description = __("Add your Google Ads Conversion Label. This will automatically enable Google Ads conversion tracking for Easy Digital Downloads, WooCommerce, LifterLMS, GiveWP and MemberPress.", "google-analytics-for-wordpress");
    const text_ads_conversion_label_ecommerce_tip = __("Conversion Label has been disabled because the eCommerce addon is not active.", "google-analytics-for-wordpress");
    const text_ads_google_enhanced_conversions_title = __("Google Enhanced Conversions", "google-analytics-for-wordpress");
    const text_ads_google_enhanced_conversions_description = sprintf(
      __("Improve conversion tracking and attribution with Enhanced Conversions. This setting must be enabled in your Google Ads account for it to take effect. %1$sLearn more here%2$s", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "ads-input", "https://www.monsterinsights.com/docs/how-to-enable-enhanced-conversions-in-google-analytics") + '" target="_blank" rel="noopener">',
      "</a>"
    );
    const text_ads_google_enable_enhanced_conversions = __("Enable Enhanced Conversions", "google-analytics-for-wordpress");
    const text_ads_meta_title = __("Meta Tracking", "google-analytics-for-wordpress");
    const text_ads_meta_description = __("", "google-analytics-for-wordpress");
    const text_ads_meta_pixel_id = __("Pixel ID", "google-analytics-for-wordpress");
    const text_ads_meta_pixel_id_description = sprintf(
      __("Add your Meta (Formally known as Facebook) Pixel ID. This will automatically enable MonsterInsights to track page views and purchase events.", "google-analytics-for-wordpress"),
      "<b>",
      "</b>"
    );
    const text_ads_meta_pixel_id_tooltip = sprintf(
      __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP. Sample format: %1$s123456789012345%2$s", "google-analytics-for-wordpress"),
      "<b>",
      "</b>"
    );
    const text_ads_meta_conversions_api_title = __("Conversions API", "google-analytics-for-wordpress");
    const text_ads_meta_conversions_api_description = __("Get more accurate tracking with the ConversionsAPI from Meta.", "google-analytics-for-wordpress");
    const text_ads_meta_conversions_api_access_token = __("Access Token", "google-analytics-for-wordpress");
    const text_ads_meta_conversions_api_access_token_description = sprintf(
      __("Enter your Access Token here. You can find this token %1$shere%2$s", "google-analytics-for-wordpress"),
      '<a target="_blank" rel="noopener" href="https://developers.facebook.com/docs/marketing-api/conversions-api/get-started/">',
      "</a>"
    );
    const text_ads_meta_ecommerce_tip = __("Meta Conversions API has been disabled because the eCommerce addon is not active.", "google-analytics-for-wordpress");
    const text_ads_bing_title = __("Microsoft Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_bing_description = __("", "google-analytics-for-wordpress");
    const text_ads_bing_tag_id = __("Tag ID", "google-analytics-for-wordpress");
    const text_ads_bing_tag_id_description = __("Add your Tag ID provided from Microsoft Ads. This will automatically track page views and purchase events.", "google-analytics-for-wordpress");
    const text_ads_bing_tag_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_tiktok_title = __("TikTok Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_tiktok_pixel_id = __("Pixel ID", "google-analytics-for-wordpress");
    const text_ads_tiktok_pixel_id_description = __("Add your TikTok Pixel ID. This will automatically enable MonsterInsights to track page views and purchase events.", "google-analytics-for-wordpress");
    const text_ads_tiktok_pixel_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_pinterest_title = __("Pinterest Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_pinterest_tag_id = __("Tag ID", "google-analytics-for-wordpress");
    const text_ads_pinterest_tag_id_description = __("Add your Pinterest Tag ID. This will automatically enable MonsterInsights to track page views and purchase events.", "google-analytics-for-wordpress");
    const text_ads_pinterest_tag_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_pinterest_conversion_api_title = __("Pinterest Conversions API", "google-analytics-for-wordpress");
    const text_ads_pinterest_conversions_api_description = __("Get more accurate tracking with the Conversions API from Pinterest by adding your API Token and Ad Account ID.", "google-analytics-for-wordpress");
    const text_ads_pinterest_api_token = __("API Token", "google-analytics-for-wordpress");
    const text_ads_pinterest_api_token_description = __("Enter your Pinterest API Token here.", "google-analytics-for-wordpress");
    const text_ads_pinterest_api_token_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_pinterest_ad_account_id = __("Ad Account ID", "google-analytics-for-wordpress");
    const text_ads_pinterest_ad_account_id_description = __("Enter your Pinterest Ad Account ID here.", "google-analytics-for-wordpress");
    const text_ads_pinterest_ad_account_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_linkedin_title = __("LinkedIn Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_linkedin_partner_id = __("LinkedIn Partner ID", "google-analytics-for-wordpress");
    const text_ads_linkedin_partner_id_description = __("Add your LinkedIn partner ID. This will automatically enable MonsterInsights to track page views.", "google-analytics-for-wordpress");
    const text_ads_linkedin_partner_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_linkedin_purchase_conversion_id = __("Purchase Conversion ID", "google-analytics-for-wordpress");
    const text_ads_linkedin_purchase_conversion_id_description = __("Enter your LinkedIn purchase conversion ID.", "google-analytics-for-wordpress");
    const text_ads_linkedin_purchase_conversion_id_tooltip = __("Create Insight Tag conversion from <strong>Measurement > Conversion tracking</strong>. Select conversion category as Purchase.", "google-analytics-for-wordpress");
    const text_ads_snapchat_title = __("Snapchat Ads Tracking", "google-analytics-for-wordpress");
    const text_ads_snapchat_pixel_id = __("Pixel ID", "google-analytics-for-wordpress");
    const text_ads_snapchat_pixel_id_description = __("Add your Snapchat Pixel ID. This will automatically enable MonsterInsights to track page views.", "google-analytics-for-wordpress");
    const text_ads_snapchat_pixel_id_tooltip = __("Works automatically with WooCommerce, Easy Digital Downloads, Restrict Content Pro, MemberPress, LifterLMS, and GiveWP.", "google-analytics-for-wordpress");
    const text_ads_snapchat_api_token = __("Conversions API Token", "google-analytics-for-wordpress");
    const text_ads_snapchat_api_token_description = __("Enter your Snapchat Conversions API Token here.", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return !unref(isPro)() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          title: unref(text_ads_title)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, { addon: "ads" }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_ads_upsell))
                }, null, 8, _hoisted_3$1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title"]))
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        showUpsell.value !== true ? (openBlock(), createBlock(_sfc_main$4, {
          key: 0,
          title: unref(text_ads_title),
          icon: "",
          collapsible: isEM
        }, {
          default: withCtx(() => [
            isAddonActive("ads") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_adsense_title))
                }, null, 8, _hoisted_4$1),
                _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_ads_adsense_description) }, null, 8, _hoisted_5$1)
              ]),
              createVNode(_sfc_main$5, {
                name: "track_adsense",
                faux: true,
                label: unref(text_ads_adsense_label),
                faux_tooltip: unref(text_ads_addon_faux_tooltip)
              }, null, 8, ["label", "faux_tooltip"]),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createVNode(SettingsInputText, {
                label: unref(text_title_ads_conversion_id),
                description: unref(text_ads_conversion_id_description),
                default_value: "",
                name: "gtag_ads_conversion_id"
              }, null, 8, ["label", "description"]),
              _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
              _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
              isAddonActive("ecommerce") ? (openBlock(), createBlock(SettingsInputText, {
                key: 0,
                label: unref(text_title_ads_conversion_label),
                description: unref(text_ads_conversion_label_description),
                name: "gtag_ads_conversion_label"
              }, null, 8, ["label", "description"])) : (openBlock(), createBlock(_sfc_main$6, { key: 1 }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_ads_conversion_label_ecommerce_tip) }, null, 8, _hoisted_6$1)
                ]),
                _: 1
              }))
            ], 64)) : isAddonActive("ppc-tracking") ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_adsense_title))
                }, null, 8, _hoisted_7),
                _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_ads_adsense_description) }, null, 8, _hoisted_8$1)
              ]),
              createVNode(SettingsInputText, {
                label: unref(text_title_ads_conversion_id),
                description: unref(text_ads_conversion_id_description),
                name: "ads_google_conversion_id"
              }, null, 8, ["label", "description"]),
              _cache[17] || (_cache[17] = createBaseVNode("br", null, null, -1)),
              _cache[18] || (_cache[18] = createBaseVNode("br", null, null, -1)),
              isAddonActive("ecommerce") ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createVNode(SettingsInputText, {
                  label: unref(text_title_ads_conversion_label),
                  description: unref(text_ads_conversion_label_description),
                  name: "ads_google_conversion_label"
                }, null, 8, ["label", "description"]),
                _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
                _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    textContent: toDisplayString(unref(text_ads_google_enhanced_conversions_title))
                  }, null, 8, _hoisted_9$1),
                  _cache[6] || (_cache[6] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("span", { innerHTML: unref(text_ads_google_enhanced_conversions_description) }, null, 8, _hoisted_10$1)
                ]),
                createVNode(_sfc_main$5, {
                  name: "ads_google_enhanced_conversions",
                  label: unref(text_ads_google_enable_enhanced_conversions)
                }, null, 8, ["label"])
              ], 64)) : (openBlock(), createBlock(_sfc_main$6, { key: 1 }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_ads_conversion_label_ecommerce_tip) }, null, 8, _hoisted_11$1)
                ]),
                _: 1
              })),
              _cache[19] || (_cache[19] = createBaseVNode("br", null, null, -1)),
              _cache[20] || (_cache[20] = createBaseVNode("hr", null, null, -1)),
              _cache[21] || (_cache[21] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_meta_title))
                }, null, 8, _hoisted_12$1),
                _cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_ads_meta_description) }, null, 8, _hoisted_13$1)
              ]),
              createVNode(SettingsInputText, {
                label: unref(text_ads_meta_pixel_id),
                description: unref(text_ads_meta_pixel_id_description),
                tooltip: unref(text_ads_meta_pixel_id_tooltip),
                default_value: "",
                name: "ads_meta_pixel_id"
              }, null, 8, ["label", "description", "tooltip"]),
              _cache[22] || (_cache[22] = createBaseVNode("br", null, null, -1)),
              _cache[23] || (_cache[23] = createBaseVNode("br", null, null, -1)),
              isAddonActive("ecommerce") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    textContent: toDisplayString(unref(text_ads_meta_conversions_api_title))
                  }, null, 8, _hoisted_14$1),
                  _cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("span", { innerHTML: unref(text_ads_meta_conversions_api_description) }, null, 8, _hoisted_15$1)
                ]),
                createVNode(SettingsInputText, {
                  type: "password",
                  label: unref(text_ads_meta_conversions_api_access_token),
                  description: unref(text_ads_meta_conversions_api_access_token_description),
                  name: "ads_meta_api_access_token"
                }, null, 8, ["label", "description"])
              ], 64)) : (openBlock(), createBlock(_sfc_main$6, { key: 3 }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_ads_meta_ecommerce_tip) }, null, 8, _hoisted_16$1)
                ]),
                _: 1
              })),
              _cache[24] || (_cache[24] = createBaseVNode("br", null, null, -1)),
              _cache[25] || (_cache[25] = createBaseVNode("hr", null, null, -1)),
              _cache[26] || (_cache[26] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_bing_title))
                }, null, 8, _hoisted_17$1),
                _cache[11] || (_cache[11] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_ads_bing_description) }, null, 8, _hoisted_18$1)
              ]),
              createVNode(SettingsInputText, {
                label: unref(text_ads_bing_tag_id),
                description: unref(text_ads_bing_tag_id_description),
                tooltip: unref(text_ads_bing_tag_id_tooltip),
                default_value: "",
                name: "ads_bing_tag_id"
              }, null, 8, ["label", "description", "tooltip"]),
              _cache[27] || (_cache[27] = createBaseVNode("br", null, null, -1)),
              _cache[28] || (_cache[28] = createBaseVNode("hr", null, null, -1)),
              _cache[29] || (_cache[29] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_tiktok_title))
                }, null, 8, _hoisted_19),
                _cache[12] || (_cache[12] = createBaseVNode("br", null, null, -1))
              ]),
              createVNode(SettingsInputText, {
                label: unref(text_ads_tiktok_pixel_id),
                description: unref(text_ads_tiktok_pixel_id_description),
                tooltip: unref(text_ads_tiktok_pixel_id_tooltip),
                default_value: "",
                name: "ads_tiktok_pixel_id"
              }, null, 8, ["label", "description", "tooltip"]),
              _cache[30] || (_cache[30] = createBaseVNode("br", null, null, -1)),
              _cache[31] || (_cache[31] = createBaseVNode("hr", null, null, -1)),
              _cache[32] || (_cache[32] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_pinterest_title))
                }, null, 8, _hoisted_20),
                _cache[13] || (_cache[13] = createBaseVNode("br", null, null, -1))
              ]),
              createVNode(SettingsInputText, {
                label: unref(text_ads_pinterest_tag_id),
                description: unref(text_ads_pinterest_tag_id_description),
                tooltip: unref(text_ads_pinterest_tag_id_tooltip),
                default_value: "",
                name: "ads_pinterest_tag_id"
              }, null, 8, ["label", "description", "tooltip"]),
              _cache[33] || (_cache[33] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_pinterest_conversion_api_title))
                }, null, 8, _hoisted_21),
                _cache[14] || (_cache[14] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_ads_pinterest_conversions_api_description) }, null, 8, _hoisted_22)
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_pinterest_api_token),
                  description: unref(text_ads_pinterest_api_token_description),
                  tooltip: unref(text_ads_pinterest_api_token_tooltip),
                  default_value: "",
                  name: "ads_pinterest_api_token"
                }, null, 8, ["label", "description", "tooltip"])
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_pinterest_ad_account_id),
                  description: unref(text_ads_pinterest_ad_account_id_description),
                  tooltip: unref(text_ads_pinterest_ad_account_id_tooltip),
                  default_value: "",
                  name: "ads_pinterest_ad_account_id"
                }, null, 8, ["label", "description", "tooltip"])
              ]),
              _cache[34] || (_cache[34] = createBaseVNode("br", null, null, -1)),
              _cache[35] || (_cache[35] = createBaseVNode("hr", null, null, -1)),
              _cache[36] || (_cache[36] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_linkedin_title))
                }, null, 8, _hoisted_23),
                _cache[15] || (_cache[15] = createBaseVNode("br", null, null, -1))
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_linkedin_partner_id),
                  description: unref(text_ads_linkedin_partner_id_description),
                  tooltip: unref(text_ads_linkedin_partner_id_tooltip),
                  default_value: "",
                  name: "ads_linkedin_partner_id"
                }, null, 8, ["label", "description", "tooltip"])
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_linkedin_purchase_conversion_id),
                  description: unref(text_ads_linkedin_purchase_conversion_id_description),
                  tooltip: unref(text_ads_linkedin_purchase_conversion_id_tooltip),
                  default_value: "",
                  name: "ads_linkedin_purchase_conversion_id"
                }, null, 8, ["label", "description", "tooltip"])
              ]),
              _cache[37] || (_cache[37] = createBaseVNode("hr", null, null, -1)),
              _cache[38] || (_cache[38] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_ads_snapchat_title))
                }, null, 8, _hoisted_24),
                _cache[16] || (_cache[16] = createBaseVNode("br", null, null, -1))
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_snapchat_pixel_id),
                  description: unref(text_ads_snapchat_pixel_id_description),
                  tooltip: unref(text_ads_snapchat_pixel_id_tooltip),
                  default_value: "",
                  name: "ads_snapchat_pixel_id"
                }, null, 8, ["label", "description", "tooltip"])
              ]),
              createBaseVNode("p", null, [
                createVNode(SettingsInputText, {
                  label: unref(text_ads_snapchat_api_token),
                  description: unref(text_ads_snapchat_api_token_description),
                  tooltip: unref(text_ads_snapchat_pixel_id_tooltip),
                  default_value: "",
                  name: "ads_snapchat_api_token"
                }, null, 8, ["label", "description", "tooltip"])
              ])
            ], 64)) : showUpsell.value === false ? (openBlock(), createBlock(_sfc_main$6, { key: 2 }, {
              default: withCtx(() => [
                createBaseVNode("span", { innerHTML: unref(text_ads_addon_disabled) }, null, 8, _hoisted_25)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title", "icon"])) : showUpsell.value === true ? (openBlock(), createBlock(_sfc_main$4, {
          key: 1,
          title: unref(text_ads_title),
          icon: "",
          collapsible: isEM
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, { addon: "ads" }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_ads_upsell))
                }, null, 8, _hoisted_26)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["title", "icon"])) : createCommentVNode("", true)
      ], 64));
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-settings-conversions" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { key: 0 };
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = { key: 1 };
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = { key: 2 };
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["innerHTML"];
const _sfc_main = {
  __name: "monsterinsights-SettingsTabConversions",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const isEM = false;
    const route = useRoute();
    const addonsStore = useAddonsStore();
    const licenseStore = useLicenseStore();
    const isNetwork = getMiGlobal("network", false);
    const addons_url = getMiGlobal("addons_url", "#");
    const showAIOSEONotice = ref(false);
    const showYoastNotice = ref(false);
    const dimensionsSettingsBlock = ref(null);
    function isAddonActive(addon) {
      const addons = addonsStore.addons || {};
      return addons[addon] ? addons[addon].active : false;
    }
    const isDataLoaded = computed(() => {
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      const isLicenseLoaded = typeof license.type !== "undefined" && license.type !== "";
      const isAddonsLoaded = Object.keys(addonsStore.addons || {}).length > 0;
      return isLicenseLoaded && isAddonsLoaded;
    });
    const showFormsUpsell = computed(() => {
      if (!isDataLoaded.value) {
        return null;
      }
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      return ("plus" === license.type || "starter" === license.type) && !isAddonActive("forms");
    });
    const showDimensionsUpsell = computed(() => {
      if (!isDataLoaded.value) {
        return null;
      }
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      return ("plus" === license.type || "starter" === license.type) && !isAddonActive("dimensions");
    });
    function getWPFormsLabel() {
      if (isAddonActive("wpforms-lite")) {
        return text_forms_wp_forms;
      } else {
        return sprintf(text_forms_not_available, text_forms_wp_forms);
      }
    }
    function getGravityFormsLabel() {
      if (isAddonActive("gravity_forms")) {
        return text_forms_gravity_forms;
      } else {
        return sprintf(text_forms_not_available, text_forms_gravity_forms);
      }
    }
    function getFormidableFormsLabel() {
      if (isAddonActive("formidable_forms")) {
        return text_forms_formidable_forms;
      } else {
        return sprintf(text_forms_not_available, text_forms_formidable_forms);
      }
    }
    const text_forms_description = __("See who and which forms are converting the best on your website, so that you can optimize and make more money. Works automatically with WPForms, Formidable Forms, Gravity Forms, and all other WordPress forms.", "google-analytics-for-wordpress");
    const text_dimensions_description = __("Use custom dimensions to unlock powerful new insights about your website. Learn when the best time is to post new content, track SEO Keyword scores, logged in user activity, and see who is your most popular author.", "google-analytics-for-wordpress");
    const text_forms_title = __("Forms Tracking", "google-analytics-for-wordpress");
    const text_dimensions_title = __("Custom Dimensions", "google-analytics-for-wordpress");
    const text_forms_disabled = sprintf(
      __("See who and which forms are converting the best on your website, so that you can optimize and make more money. Works automatically with WPForms, Formidable Forms, Gravity Forms, and all other WordPress forms. %1$sInstall and Activate%2$s Now.", "google-analytics-for-wordpress"),
      '<a href="' + addons_url + '">',
      "</a>"
    );
    const text_dimensions_disabled = sprintf(
      __("Use custom dimensions to unlock powerful new insights about your website. Learn when the best time is to post new content, track SEO Keyword scores, logged in user activity, and see who is your most popular author. %1$sInstall and Activate%2$s Now.", "google-analytics-for-wordpress"),
      '<a href="' + addons_url + '">',
      "</a>"
    );
    const text_forms_upsell = __("In order to use Forms tracking features, upgrade to MonsterInsights Pro", "google-analytics-for-wordpress");
    const text_dimensions_upsell = __("In order to use Custom Dimensions features, upgrade to MonsterInsights Pro", "google-analytics-for-wordpress");
    const text_forms_input_title = __("Track Form Conversion in Google Analytics", "google-analytics-for-wordpress");
    const text_forms_input_description = __("Form impressions and conversions are being logged for visitors to your site. No configuration is required.", "google-analytics-for-wordpress");
    const text_forms_input_label = __("Enable Form Conversion Tracking", "google-analytics-for-wordpress");
    const text_forms_wp_forms = __("WPForms", "google-analytics-for-wordpress");
    const text_forms_gravity_forms = __("Gravity Forms", "google-analytics-for-wordpress");
    const text_forms_formidable_forms = __("Formidable Forms", "google-analytics-for-wordpress");
    const text_forms_not_available = __("%s is not available", "google-analytics-for-wordpress");
    const text_forms_misc_label = __("Miscellaneous WordPress Forms", "google-analytics-for-wordpress");
    const text_dimesions_description_1 = sprintf(
      __("Visit our knowledge base to learn %1$show to setup%2$s and %3$show to use%4$s custom dimensions in Google Analytics.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "custom-dimensions", "https://www.monsterinsights.com/docs/how-do-i-set-up-custom-dimensions") + '" target="_blank">',
      "</a>",
      '<a href="' + getUrl("settings-panel", "custom-dimensions", "https://www.monsterinsights.com/docs/can-find-custom-dimension-reports/") + '" target="_blank">',
      "</a>"
    );
    const text_dimesions_description_2 = sprintf(
      __("You need to install %1$sAll In One SEO%2$s to be able to use the %3$sTruSEO Score%4$s and %5$sFocus Keyphrase%6$s custom dimensions.", "google-analytics-for-wordpress"),
      '<a href="https://aioseo.com/?utm_source=exactmetrics&utm_medium=dimensions&utm_campaign=settings" target="_blank">',
      "</a>",
      "<strong>",
      "</strong>",
      "<strong>",
      "</strong>"
    );
    const text_dimensions_eu_compliance = __("Author and User ID tracking have been disabled due to the EU Compliance addon being enabled.", "google-analytics-for-wordpress");
    const text_aioseo_disabled = __("TruSEO Score and Focus Keyphrase dimensions have been disabled because All In One SEO is not active.", "google-analytics-for-wordpress");
    const text_yoast_disabled = __("SEO Score and Focus Keyword dimensions have been disabled because WordPress SEO by Yoast is not active.", "google-analytics-for-wordpress");
    const text_forms_faux_tooltip = __("Deactivate Forms addon to disable", "google-analytics-for-wordpress");
    const text_wpforms_faux_tooltip = __("Deactivate WPForms to disable", "google-analytics-for-wordpress");
    const text_gravity_forms_faux_tooltip = __("Deactivate Gravity Forms to disable", "google-analytics-for-wordpress");
    const text_formidable_forms_faux_tooltip = __("Deactivate Formidable Forms to disable", "google-analytics-for-wordpress");
    const text_forms_misc_faux_tooltip = __("Forms are tracked by default with the Forms addon.", "google-analytics-for-wordpress");
    const text_forms_faux_tooltip_off = __("Activate Forms addon to enable forms tracking.", "google-analytics-for-wordpress");
    const text_wpforms_faux_tooltip_off = __("Activate WPForms to enable", "google-analytics-for-wordpress");
    const text_gravity_forms_faux_tooltip_off = __("Activate Gravity Forms to enable", "google-analytics-for-wordpress");
    const text_formidable_forms_faux_tooltip_off = __("Activate Formidable Forms to enable", "google-analytics-for-wordpress");
    onMounted(() => {
      if (route.query.section && "dimensions" === route.query.section) {
        setTimeout(() => {
          if (dimensionsSettingsBlock.value && dimensionsSettingsBlock.value.$el) {
            window.scrollTo({
              top: dimensionsSettingsBlock.value.$el.offsetTop,
              behavior: "smooth"
            });
          }
        }, 1e3);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(_sfc_main$4, {
          title: unref(text_forms_title),
          icon: "",
          collapsible: isEM
        }, {
          default: withCtx(() => [
            !unref(isPro)() ? (openBlock(), createBlock(_sfc_main$3, {
              key: 0,
              addon: "forms"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", { innerHTML: unref(text_forms_description) }, null, 8, _hoisted_2)
              ]),
              _: 1
            })) : isAddonActive("forms") ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_forms_input_title))
                }, null, 8, _hoisted_3),
                _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_forms_input_description) }, null, 8, _hoisted_4)
              ]),
              createVNode(_sfc_main$5, {
                label: unref(text_forms_input_label),
                faux: true,
                faux_tooltip: unref(text_forms_faux_tooltip),
                faux_tooltip_off: unref(text_forms_faux_tooltip_off)
              }, {
                collapsible: withCtx(() => [
                  createVNode(_sfc_main$5, {
                    faux: true,
                    default: isAddonActive("wpforms-lite"),
                    label: getWPFormsLabel(),
                    faux_tooltip: unref(text_wpforms_faux_tooltip),
                    faux_tooltip_off: unref(text_wpforms_faux_tooltip_off)
                  }, null, 8, ["default", "label", "faux_tooltip", "faux_tooltip_off"]),
                  _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
                  createVNode(_sfc_main$5, {
                    faux: true,
                    default: isAddonActive("gravity_forms"),
                    label: getGravityFormsLabel(),
                    faux_tooltip: unref(text_gravity_forms_faux_tooltip),
                    faux_tooltip_off: unref(text_gravity_forms_faux_tooltip_off)
                  }, null, 8, ["default", "label", "faux_tooltip", "faux_tooltip_off"]),
                  _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
                  createVNode(_sfc_main$5, {
                    faux: true,
                    default: isAddonActive("formidable_forms"),
                    label: getFormidableFormsLabel(),
                    faux_tooltip: unref(text_formidable_forms_faux_tooltip),
                    faux_tooltip_off: unref(text_formidable_forms_faux_tooltip_off)
                  }, null, 8, ["default", "label", "faux_tooltip", "faux_tooltip_off"]),
                  _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
                  createVNode(_sfc_main$5, {
                    faux: true,
                    label: unref(text_forms_misc_label),
                    faux_tooltip: unref(text_forms_misc_faux_tooltip)
                  }, null, 8, ["label", "faux_tooltip"])
                ]),
                _: 1
              }, 8, ["label", "faux_tooltip", "faux_tooltip_off"])
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              showFormsUpsell.value ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                addon: "forms"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_forms_upsell) }, null, 8, _hoisted_5)
                ]),
                _: 1
              })) : showFormsUpsell.value === false ? (openBlock(), createBlock(_sfc_main$6, { key: 1 }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_forms_disabled) }, null, 8, _hoisted_6)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 64))
          ]),
          _: 1
        }, 8, ["title", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$4, {
          ref_key: "dimensionsSettingsBlock",
          ref: dimensionsSettingsBlock,
          title: unref(text_dimensions_title),
          icon: "",
          collapsible: isEM
        }, {
          default: withCtx(() => [
            !unref(isPro)() ? (openBlock(), createBlock(_sfc_main$3, {
              key: 0,
              addon: "dimensions"
            }, {
              default: withCtx(() => [
                createBaseVNode("div", { innerHTML: unref(text_dimensions_description) }, null, 8, _hoisted_8)
              ]),
              _: 1
            })) : isAddonActive("dimensions") ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("p", { innerHTML: unref(text_dimesions_description_1) }, null, 8, _hoisted_9),
              createBaseVNode("p", { innerHTML: unref(text_dimesions_description_2) }, null, 8, _hoisted_10),
              isAddonActive("eu-compliance") ? (openBlock(), createElementBlock("p", _hoisted_11, [
                createBaseVNode("strong", { innerHTML: unref(text_dimensions_eu_compliance) }, null, 8, _hoisted_12)
              ])) : createCommentVNode("", true),
              showAIOSEONotice.value ? (openBlock(), createElementBlock("p", _hoisted_13, [
                createBaseVNode("strong", { innerHTML: unref(text_aioseo_disabled) }, null, 8, _hoisted_14)
              ])) : createCommentVNode("", true),
              showYoastNotice.value ? (openBlock(), createElementBlock("p", _hoisted_15, [
                createBaseVNode("strong", { innerHTML: unref(text_yoast_disabled) }, null, 8, _hoisted_16)
              ])) : createCommentVNode("", true),
              createVNode(SettingsInputDimensions, {
                name: "custom_dimensions",
                onShowAIOSEONotice: _cache[0] || (_cache[0] = ($event) => showAIOSEONotice.value = true),
                onShowYoastNotice: _cache[1] || (_cache[1] = ($event) => showYoastNotice.value = true)
              })
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              showDimensionsUpsell.value ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                addon: "dimensions"
              }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_dimensions_upsell) }, null, 8, _hoisted_17)
                ]),
                _: 1
              })) : showDimensionsUpsell.value === false ? (openBlock(), createBlock(_sfc_main$6, { key: 1 }, {
                default: withCtx(() => [
                  createBaseVNode("span", { innerHTML: unref(text_dimensions_disabled) }, null, 8, _hoisted_18)
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ], 64))
          ]),
          _: 1
        }, 8, ["title", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$1)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
