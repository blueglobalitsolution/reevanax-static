import { o as openBlock, c as createElementBlock, a as createBaseVNode, u as unref, w as withDirectives, v as vModelText, t as toDisplayString, B as withModifiers, s as createCommentVNode, j as ref, K as renderSlot, E as createBlock, D as withCtx, i as normalizeClass, G as withKeys, A as createTextVNode, b as createVNode, m as computed } from "./toastStore-CRCNwITM.js";
import { n as getUpgradeUrl, o as getUrl, j as getMiGlobal, q as sanitizeHtml } from "./ajax-B_XS1gT5.js";
import { a as useToast, d as useDialog } from "./addons-CSVIjAyY.js";
import { l as licenseApi } from "./license-Boh3_ZVs.js";
import { a as authApi } from "./auth-CC6F9_ZC.js";
import { S as SlideDownUp } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$2 = { class: "settings-input settings-input-license" };
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = ["innerHTML"];
const _hoisted_5$1 = { class: "monsterinsights-settings-license-lite" };
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = { class: "inline-field" };
const _hoisted_8$1 = ["readonly", "placeholder"];
const _hoisted_9$1 = ["textContent"];
const _sfc_main$2 = {
  __name: "SettingsInputLicense-Lite",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const { loadingToast, errorToast, closeToast } = useToast();
    const is_loading = ref(false);
    const show_connect = ref(false);
    const connect_key = ref("");
    const text_license_row_1 = sprintf(__("You're using %1$sMonsterInsights Lite%2$s - no license needed. Enjoy! %3$s", "google-analytics-for-wordpress"), "<strong>", "</strong>", '<span class="monsterinsights-bg-img monsterinsights-smile"></span>');
    const text_license_row_2 = sprintf(__("To unlock more features consider %1$supgrading to PRO%2$s.", "google-analytics-for-wordpress"), '<a href="' + getUpgradeUrl("settings-panel", "license") + '" class="monsterinsights-bold" target="_blank">', "</a>");
    const text_license_row_3 = sprintf(__("As a valued MonsterInsights Lite user you %1$sreceive 50%% off%2$s, automatically applied at checkout!", "google-analytics-for-wordpress"), '<span class="monsterinsights-highlighted-text">', "</span>");
    const text_upgrade_to_pro = __("Unlock PRO Features Now", "google-analytics-for-wordpress");
    const text_license_placeholder = __("Paste your license key here", "google-analytics-for-wordpress");
    const text_license_label = sprintf(__("Already purchased? Simply enter your license key below to connect with MonsterInsights PRO! %1$sRetrieve your license key%2$s.", "google-analytics-for-wordpress"), '<a href="' + getUrl("license", "settings_panel", "https://www.monsterinsights.com/my-account/") + '" target="_blank">', "</a>");
    let fieldInputTimer = null;
    function fieldInput() {
      clearTimeout(fieldInputTimer);
      fieldInputTimer = setTimeout(() => {
        show_connect.value = connect_key.value !== "";
      }, 100);
    }
    function startUpgradeToPro() {
      loadingToast(__("Please wait...", "google-analytics-for-wordpress"));
      licenseApi.getUpgradeLink(connect_key.value).then((response) => {
        if (response.success && response.data && response.data.url) {
          window.location = response.data.url;
        } else if (response && response.url) {
          window.location = response.url;
        } else {
          const message = response.data && response.data.message ? response.data.message : __("There was an error unlocking MonsterInsights PRO please try again or install manually.", "google-analytics-for-wordpress");
          errorToast({ title: __("Error", "google-analytics-for-wordpress"), text: message });
        }
      }).catch(() => {
        closeToast();
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", { innerHTML: unref(text_license_row_1) }, null, 8, _hoisted_2$1),
        createBaseVNode("p", { innerHTML: unref(text_license_row_2) }, null, 8, _hoisted_3$1),
        createBaseVNode("p", { innerHTML: unref(text_license_row_3) }, null, 8, _hoisted_4$1),
        createBaseVNode("div", _hoisted_5$1, [
          createBaseVNode("label", {
            for: "monsterinsights-license-key",
            innerHTML: unref(text_license_label)
          }, null, 8, _hoisted_6$1),
          createBaseVNode("div", _hoisted_7$1, [
            withDirectives(createBaseVNode("input", {
              id: "monsterinsights-license-key",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => connect_key.value = $event),
              readonly: is_loading.value,
              type: "text",
              autocomplete: "off",
              placeholder: unref(text_license_placeholder),
              onInput: fieldInput
            }, null, 40, _hoisted_8$1), [
              [vModelText, connect_key.value]
            ]),
            show_connect.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              class: "monsterinsights-button",
              onClick: withModifiers(startUpgradeToPro, ["prevent"]),
              textContent: toDisplayString(unref(text_upgrade_to_pro))
            }, null, 8, _hoisted_9$1)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "monsterinsights-network-notice" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "default")
  ]);
}
const SettingsNetworkNotice = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = { class: "monsterinsights-settings-input monsterinsights-settings-input-authenticate" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { key: 1 };
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = {
  key: 0,
  class: "monsterinsights-auth-manual-connect-paragraph"
};
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = { key: 2 };
const _hoisted_11 = ["textContent"];
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = ["value"];
const _hoisted_14 = {
  key: 0,
  class: "monsterinsights-error"
};
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["value"];
const _hoisted_19 = {
  key: 3,
  class: "monsterinsights-auth-info"
};
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = ["textContent"];
const _hoisted_23 = { key: 0 };
const _hoisted_24 = { class: "monsterinsights-auth-actions" };
const _hoisted_25 = ["textContent"];
const _hoisted_26 = ["textContent"];
const _hoisted_27 = ["textContent"];
const _hoisted_28 = ["textContent"];
const _hoisted_29 = ["innerHTML"];
const _hoisted_30 = ["value"];
const _sfc_main = {
  __name: "monsterinsights-SettingsInputAuthenticate-Lite",
  props: {
    label: String,
    description: String
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const { loadingToast, savingToast, successToast, errorToast, closeToast } = useToast();
    const dialog = useDialog();
    const auth = ref(getMiGlobal("auth", { v4: "", manual_v4: "", network_v4: "", network_manual_v4: "", viewname: "", network_viewname: "", measurement_protocol_secret: "", network_measurement_protocol_secret: "" }));
    const is_network = getMiGlobal("network", false);
    const force_deauth = ref(false);
    const showButtons = ref(false);
    const showManualOnClick = ref(false);
    const has_error = ref(false);
    const text_button_connect = __("Connect MonsterInsights", "google-analytics-for-wordpress");
    const text_button_verify = __("Verify Credentials", "google-analytics-for-wordpress");
    const text_button_reconnect = __("Reconnect MonsterInsights", "google-analytics-for-wordpress");
    const text_website_profile = __("Website Profile", "google-analytics-for-wordpress");
    const text_active_profile = __("Active Profile", "google-analytics-for-wordpress");
    const text_auth_network = __("Your website profile has been set at the network level of your WordPress Multisite.", "google-analytics-for-wordpress");
    const text_auth_network_2 = __("If you would like to use a different profile for this subsite, you can authenticate below.", "google-analytics-for-wordpress");
    const text_manual_v4_label = __("Manually enter your GA4 Measurement ID", "google-analytics-for-wordpress");
    const text_manual_v4_description = __("Warning: If you use a manual GA4 Measurement ID, you won't be able to use any of the reporting and some of the tracking features. Your Measurement ID should look like G-XXXXXXXXXX or GT-XXXXX where the X's are combination of numbers and letters.", "google-analytics-for-wordpress");
    const text_manual_connect = __("Or manually enter GA4 Measurement ID (limited functionality)", "google-analytics-for-wordpress");
    const text_v4_measurement_protocol = __("Measurement Protocol API Secret", "google-analytics-for-wordpress");
    const text_v4_measurement_protocol_description = sprintf(
      __("The Measurement Protocol API secret allows your site to send tracking data to Google Analytics. To retrieve your Measurement Protocol API Secret, follow %1$sthis guide%2$s.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("dual-tracking", "settings", "https://www.monsterinsights.com/docs/how-to-create-your-measurement-protocol-api-secret-in-ga4/") + '" target="_blank">',
      "</a>"
    );
    const text_button_disconnect_label = computed(() => {
      return force_deauth.value ? __("Force Deauthenticate", "google-analytics-for-wordpress") : __("Disconnect MonsterInsights", "google-analytics-for-wordpress");
    });
    const iconClass = computed(() => {
      let cls = "monstericon-arrow";
      if (showButtons.value) cls += " monstericon-down";
      return cls;
    });
    const is_authed = computed(() => {
      if (is_network) {
        return auth.value.network_v4 !== "" && auth.value.network_v4 !== false;
      }
      return auth.value.v4 !== "" && auth.value.v4 !== false;
    });
    const show_manual_v4 = computed(() => {
      return is_network ? auth.value.network_manual_v4 : auth.value.manual_v4;
    });
    const measurement_protocol_secret = computed(() => {
      return is_network ? auth.value.network_measurement_protocol_secret : auth.value.measurement_protocol_secret;
    });
    async function doAuth(e) {
      e.preventDefault();
      loadingToast(__("Authenticating", "google-analytics-for-wordpress"));
      try {
        const response = await authApi.getAuthRedirect(is_network);
        if (response.redirect) {
          window.location = response.redirect;
        } else if (response.data?.redirect) {
          window.location = response.data.redirect;
        } else {
          closeToast();
          errorToast({ title: response.data?.message || __("Error", "google-analytics-for-wordpress") });
        }
      } catch {
        closeToast();
      }
    }
    async function doReAuth(e) {
      e.preventDefault();
      loadingToast(__("Re-Authenticating", "google-analytics-for-wordpress"));
      try {
        const response = await authApi.getReAuthRedirect(is_network);
        if (response.redirect) {
          window.location = response.redirect;
        } else if (response.data?.redirect) {
          window.location = response.data.redirect;
        } else {
          closeToast();
          errorToast({ title: response.data?.message || __("Error", "google-analytics-for-wordpress") });
        }
      } catch {
        closeToast();
      }
    }
    async function handleVerifyAuth(e) {
      e.preventDefault();
      loadingToast(__("Verifying Credentials", "google-analytics-for-wordpress"));
      try {
        const response = await authApi.verifyAuth(is_network);
        closeToast();
        dialog.alert({
          variant: "success",
          title: response.message || __("Successfully verified.", "google-analytics-for-wordpress"),
          message: __("Your site is connected to MonsterInsights!", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
      } catch (err) {
        closeToast();
        dialog.alert({
          variant: "error",
          title: __("Error", "google-analytics-for-wordpress"),
          html: err?.message || __("Could not verify credentials.", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
      }
    }
    async function handleDeleteAuth(e) {
      e.preventDefault();
      loadingToast(__("Deauthenticating", "google-analytics-for-wordpress"));
      try {
        const response = await authApi.deleteAuth(is_network, force_deauth.value);
        const freshAuth = await authApi.fetchAuth();
        if (freshAuth) auth.value = freshAuth;
        closeToast();
        dialog.alert({
          variant: "success",
          title: response.message || __("Disconnected", "google-analytics-for-wordpress"),
          message: __("You've disconnected your site from MonsterInsights. Your site is no longer being tracked by Google Analytics and you won't see reports anymore.", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
      } catch (err) {
        closeToast();
        dialog.alert({
          variant: "error",
          title: __("Error", "google-analytics-for-wordpress"),
          html: err?.message || __("Could not disconnect.", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
        force_deauth.value = true;
      }
    }
    function processActionResponse(response) {
      if (response.success === false || response === false) {
        if (response.data?.v4_error) ;
        has_error.value = response.data?.error || true;
        errorToast({});
      } else {
        has_error.value = false;
        successToast({});
      }
    }
    async function handleUpdateManualV4(e) {
      savingToast({});
      has_error.value = false;
      try {
        const response = await authApi.updateManualV4(e.target.value, is_network);
        processActionResponse(response);
      } catch {
        errorToast({});
      }
    }
    async function handleUpdateMeasurementProtocolSecret(e) {
      savingToast({});
      has_error.value = false;
      try {
        const response = await authApi.updateMeasurementProtocolSecret(e.target.value, is_network);
        processActionResponse(response);
      } catch {
        errorToast({});
      }
    }
    function toggleButtons(e) {
      e.preventDefault();
      showButtons.value = !showButtons.value;
    }
    function showManualClick() {
      showManualOnClick.value = true;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        auth.value.network_v4 && !unref(is_network) && !auth.value.v4 ? (openBlock(), createBlock(SettingsNetworkNotice, { key: 0 }, {
          default: withCtx(() => [
            createBaseVNode("strong", {
              textContent: toDisplayString(unref(text_auth_network))
            }, null, 8, _hoisted_2),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_auth_network_2))
            }, null, 8, _hoisted_3)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        !is_authed.value ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(__props.label)
          }, null, 8, _hoisted_5),
          createBaseVNode("p", { innerHTML: __props.description }, null, 8, _hoisted_6),
          renderSlot(_ctx.$slots, "before_connect"),
          createBaseVNode("button", {
            class: "monsterinsights-button",
            onClick: doAuth,
            textContent: toDisplayString(unref(text_button_connect))
          }, null, 8, _hoisted_7),
          !show_manual_v4.value && !showManualOnClick.value ? (openBlock(), createElementBlock("p", _hoisted_8, [
            createBaseVNode("a", {
              href: "#monsterinsights-auth-manual-ua-input",
              class: "monsterinsights-auth-manual-connect-text",
              onClick: showManualClick,
              innerHTML: unref(text_manual_connect)
            }, null, 8, _hoisted_9)
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        showManualOnClick.value || show_manual_v4.value ? (openBlock(), createElementBlock("div", _hoisted_10, [
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_manual_v4_label))
          }, null, 8, _hoisted_11),
          createBaseVNode("p", { innerHTML: unref(text_manual_v4_description) }, null, 8, _hoisted_12),
          createBaseVNode("input", {
            id: "monsterinsights-auth-manual-v4-input",
            type: "text",
            class: "monsterinsights-manual-ua",
            value: unref(is_network) ? auth.value.network_manual_v4 : auth.value.manual_v4,
            onChange: handleUpdateManualV4
          }, null, 40, _hoisted_13),
          has_error.value ? (openBlock(), createElementBlock("label", _hoisted_14, [
            _cache[0] || (_cache[0] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
            createBaseVNode("span", {
              innerHTML: unref(sanitizeHtml)(has_error.value)
            }, null, 8, _hoisted_15)
          ])) : createCommentVNode("", true),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createBaseVNode("label", {
            for: "monsterinsights-v4-measurement-protocol",
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_v4_measurement_protocol))
          }, null, 8, _hoisted_16),
          createBaseVNode("p", {
            class: "monsterinsights-field-description",
            innerHTML: unref(text_v4_measurement_protocol_description)
          }, null, 8, _hoisted_17),
          createBaseVNode("input", {
            id: "monsterinsights-v4-measurement-protocol",
            type: "text",
            class: "monsterinsights-manual-ua",
            value: measurement_protocol_secret.value,
            onChange: handleUpdateMeasurementProtocolSecret
          }, null, 40, _hoisted_18)
        ])) : createCommentVNode("", true),
        is_authed.value ? (openBlock(), createElementBlock("div", _hoisted_19, [
          createBaseVNode("span", {
            class: "monsterinsights-settings-input-toggle-collapsible",
            role: "button",
            onClick: toggleButtons,
            onKeyup: [
              withKeys(toggleButtons, ["enter"]),
              withKeys(toggleButtons, ["space"])
            ]
          }, [
            createBaseVNode("i", {
              class: normalizeClass(iconClass.value),
              tabindex: "0",
              onkeypress: "if(event.keyCode==32||event.keyCode==13){return false;};"
            }, null, 2)
          ], 32),
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_website_profile))
          }, null, 8, _hoisted_20),
          createBaseVNode("p", null, [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_active_profile))
            }, null, 8, _hoisted_21),
            _cache[3] || (_cache[3] = createTextVNode(": ", -1)),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(is_network) ? auth.value.network_viewname : auth.value.viewname)
            }, null, 8, _hoisted_22)
          ]),
          createVNode(SlideDownUp, null, {
            default: withCtx(() => [
              showButtons.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                createBaseVNode("div", _hoisted_24, [
                  createBaseVNode("button", {
                    class: "monsterinsights-button",
                    onClick: doReAuth,
                    textContent: toDisplayString(unref(text_button_reconnect))
                  }, null, 8, _hoisted_25),
                  createBaseVNode("button", {
                    class: "monsterinsights-button monsterinsights-button-secondary",
                    onClick: handleVerifyAuth,
                    textContent: toDisplayString(unref(text_button_verify))
                  }, null, 8, _hoisted_26),
                  createBaseVNode("button", {
                    class: "monsterinsights-button monsterinsights-button-secondary",
                    onClick: handleDeleteAuth,
                    textContent: toDisplayString(text_button_disconnect_label.value)
                  }, null, 8, _hoisted_27)
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
                createBaseVNode("label", {
                  for: "monsterinsights-v4-measurement-protocol",
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_v4_measurement_protocol))
                }, null, 8, _hoisted_28),
                createBaseVNode("p", {
                  class: "monsterinsights-field-description",
                  innerHTML: unref(text_v4_measurement_protocol_description)
                }, null, 8, _hoisted_29),
                createBaseVNode("input", {
                  id: "monsterinsights-v4-measurement-protocol",
                  type: "text",
                  class: "monsterinsights-manual-ua",
                  value: measurement_protocol_secret.value,
                  onChange: handleUpdateMeasurementProtocolSecret
                }, null, 40, _hoisted_30)
              ])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main$2 as _,
  _sfc_main as a
};
