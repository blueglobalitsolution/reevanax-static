import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { k as getMiGlobal, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, t as toDisplayString, u as unref, c as createElementBlock, s as createCommentVNode, j as ref, m as computed, q as purify } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$2 } from "./Modal-B9mMTzc_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { a as authApi } from "./auth-CC6F9_ZC.js";
const _hoisted_1$1 = { class: "monsterinsights-not-authenticated-notice" };
const _hoisted_2$1 = { class: "monsterinsights-settings-input monsterinsights-settings-input-authenticate" };
const _hoisted_3$1 = { class: "monsterinsights-dark" };
const _hoisted_4 = { key: 0 };
const _hoisted_5 = ["disabled"];
const _hoisted_6 = { class: "monsterinsights-disclaimer-note" };
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { class: "monsterinsights-dark" };
const _sfc_main$1 = {
  __name: "AuthModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props) {
    const { sprintf } = wp.i18n;
    const isLoading = ref(false);
    const errorMessage = ref("");
    const canUpdateSettings = getMiGlobal("can_view_reports", true);
    const sanitizedErrorMessage = computed(
      () => errorMessage.value ? purify.sanitize(errorMessage.value, { ADD_ATTR: ["target"] }) : ""
    );
    const productName = "MonsterInsights";
    const text_no_auth = __("You must connect with MonsterInsights before you can view reports.", "google-analytics-for-wordpress");
    const text_auth_label = __("MonsterInsights makes it effortless for you to connect your site with Google Analytics and see reports right here in the WordPress dashboard.", "google-analytics-for-wordpress");
    const text_wizard = __("Launch Setup Wizard", "google-analytics-for-wordpress");
    const text_ask_webmaster = __("Please ask your webmaster to connect MonsterInsights to Google Analytics.", "google-analytics-for-wordpress");
    const text_onboarding_note = sprintf(__("Note: You will be transfered to %1$s.com to complete the setup wizard.", "google-analytics-for-wordpress"), productName);
    const text_error = __("We could not start the Setup Wizard. Please refresh the page and try again.", "google-analytics-for-wordpress");
    function launchSetupWizard() {
      const preGeneratedUrl = getMiGlobal("wizard_url");
      if (preGeneratedUrl && preGeneratedUrl !== "#") {
        window.location.href = preGeneratedUrl;
        return;
      }
      isLoading.value = true;
      errorMessage.value = "";
      const action = "monsterinsights_generate_setup_wizard_url";
      const ajaxData = {
        nonce: getMiGlobal("nonce")
      };
      wp.ajax.post(action, ajaxData).done((response) => {
        if (response && response.wizard_url) {
          window.location.href = response.wizard_url;
          return;
        }
        isLoading.value = false;
        errorMessage.value = response && response.message || text_error;
      }).fail((response) => {
        isLoading.value = false;
        errorMessage.value = response && response.message || text_error;
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        "model-value": __props.isOpen,
        mode: "gate",
        backdrop: "transparent",
        "content-class": "monsterinsights-auth-notice-shell",
        "overlay-class": "monsterinsights-auth-notice-shell-overlay",
        dismissable: false
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("h3", null, toDisplayString(unref(text_no_auth)), 1),
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("span", _hoisted_3$1, toDisplayString(unref(text_auth_label)), 1),
              unref(canUpdateSettings) ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createBaseVNode("button", {
                  type: "button",
                  class: "monsterinsights-button-alt monsterinsights-button",
                  disabled: isLoading.value,
                  onClick: launchSetupWizard
                }, [
                  createBaseVNode("span", null, toDisplayString(unref(text_wizard)), 1)
                ], 8, _hoisted_5),
                createBaseVNode("p", _hoisted_6, toDisplayString(unref(text_onboarding_note)), 1),
                errorMessage.value ? (openBlock(), createElementBlock("p", {
                  key: 0,
                  class: "monsterinsights-auth-modal__error",
                  role: "alert",
                  innerHTML: sanitizedErrorMessage.value
                }, null, 8, _hoisted_7)) : createCommentVNode("", true)
              ])) : (openBlock(), createElementBlock("div", _hoisted_8, [
                createBaseVNode("p", _hoisted_9, [
                  createBaseVNode("strong", null, toDisplayString(unref(text_ask_webmaster)), 1)
                ])
              ]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
const AuthModal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f1616f6a"]]);
const _hoisted_1 = { class: "monsterinsights-not-authenticated-notice" };
const _hoisted_2 = ["disabled"];
const _hoisted_3 = ["innerHTML"];
const _sfc_main = {
  __name: "ReAuthModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props) {
    const isLoading = ref(false);
    const errorMessage = ref("");
    const isNetwork = getMiGlobal("network", false);
    const sanitizedErrorMessage = computed(
      () => errorMessage.value ? purify.sanitize(errorMessage.value, { ADD_ATTR: ["target"] }) : ""
    );
    const text_no_auth = __("MonsterInsights encountered an error loading your report data", "google-analytics-for-wordpress");
    const text_auth_label = __("There is an issue with your Google Account authentication. Please use the button below to fix it by re-authenticating.", "google-analytics-for-wordpress");
    const text_button_reconnect = __("Reconnect MonsterInsights", "google-analytics-for-wordpress");
    const text_error = __("We could not start the re-authentication flow. Please refresh the page and try again.", "google-analytics-for-wordpress");
    async function doReAuth() {
      isLoading.value = true;
      errorMessage.value = "";
      try {
        const response = await authApi.getReAuthRedirect(isNetwork);
        const redirect = response && response.redirect || response && response.data && response.data.redirect;
        if (redirect) {
          window.location.href = redirect;
          return;
        }
        isLoading.value = false;
        errorMessage.value = text_error;
      } catch (error) {
        isLoading.value = false;
        errorMessage.value = error && error.message || text_error;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        "model-value": __props.isOpen,
        mode: "gate",
        backdrop: "transparent",
        "content-class": "monsterinsights-auth-notice-shell",
        "overlay-class": "monsterinsights-auth-notice-shell-overlay",
        dismissable: false
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("h3", null, toDisplayString(unref(text_no_auth)), 1),
            createBaseVNode("p", null, toDisplayString(unref(text_auth_label)), 1),
            createBaseVNode("p", null, [
              createBaseVNode("button", {
                type: "button",
                class: "monsterinsights-button-alt monsterinsights-button",
                disabled: isLoading.value,
                onClick: doReAuth
              }, toDisplayString(unref(text_button_reconnect)), 9, _hoisted_2)
            ]),
            errorMessage.value ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "monsterinsights-auth-modal__error",
              role: "alert",
              innerHTML: sanitizedErrorMessage.value
            }, null, 8, _hoisted_3)) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
const ReAuthModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c463e11a"]]);
export {
  AuthModal as A,
  ReAuthModal as R
};
