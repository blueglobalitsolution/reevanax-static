import { b as useRoute } from "./TheAppHeader-DEdY-dez.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, i as normalizeClass, t as toDisplayString, w as withDirectives, aF as vModelCheckbox, s as createCommentVNode, u as unref, B as withModifiers, m as computed, j as ref, a1 as storeToRefs, E as createBlock, D as withCtx, aS as isRef, v as vModelText, aT as vModelRadio, A as createTextVNode, y as onMounted, F as Fragment, f as renderList, b as createVNode } from "./toastStore-CRCNwITM.js";
import { c as useAddonsStore, a as useToast, d as useDialog } from "./addons-CSVIjAyY.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { n as getUpgradeUrl, k as isPro } from "./ajax-B_XS1gT5.js";
import { _ as _sfc_main$3 } from "./Modal-B9mMTzc_.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
const _hoisted_1$2 = ["id"];
const _hoisted_2$2 = { class: "monsterinsights-addon-top" };
const _hoisted_3$2 = { class: "monsterinsights-addon-image" };
const _hoisted_4$2 = {
  key: 0,
  class: "icon"
};
const _hoisted_5$2 = ["src", "alt"];
const _hoisted_6$2 = {
  key: 1,
  class: "icon"
};
const _hoisted_7$2 = ["src", "alt"];
const _hoisted_8$2 = { class: "monsterinsights-addon-text" };
const _hoisted_9$2 = { class: "monsterinsights-addon-title" };
const _hoisted_10$2 = ["href", "textContent"];
const _hoisted_11$2 = {
  key: 0,
  class: "monsterinsights-settings-input-checkbox"
};
const _hoisted_12$2 = {
  key: 0,
  class: "monsterinsights-addon-excerpt-row"
};
const _hoisted_13$2 = ["textContent"];
const _hoisted_14$2 = { class: "monsterinsights-interior" };
const _hoisted_15$2 = ["textContent"];
const _hoisted_16$2 = { class: "monsterinsights-addon-action" };
const _hoisted_17$2 = { key: 0 };
const _hoisted_18$2 = {
  key: 0,
  class: "monsterinsights-button",
  type: "button"
};
const _hoisted_19$2 = ["textContent"];
const _hoisted_20$2 = { key: 1 };
const _hoisted_21$2 = ["textContent"];
const _hoisted_22$1 = { key: 2 };
const _hoisted_23$1 = ["innerHTML"];
const _sfc_main$2 = {
  __name: "AddonPageBlock",
  props: {
    addon: { type: Object, required: true }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const addonsStore = useAddonsStore();
    const licenseStore = useLicenseStore();
    const { savingToast, successToast, errorToast } = useToast();
    const dialog = useDialog();
    const activating = ref(false);
    const deactivating = ref(false);
    const installing = ref(false);
    const text_expired = __("License Expired", "google-analytics-for-wordpress");
    const text_upgrade_now = __("Upgrade Now", "google-analytics-for-wordpress");
    const categoriesLc = computed(
      () => (props.addon.categories || []).map((c) => String(c).toLowerCase())
    );
    const addonTitle = computed(() => {
      let title = props.addon.title || "";
      if (title.indexOf("MonsterInsights") === 0) {
        title = title.replace("MonsterInsights ", "");
      }
      return title;
    });
    const learnMoreUrl = computed(
      () => getUpgradeUrl(
        "addons-page",
        String(addonTitle.value).toLocaleLowerCase().replaceAll(/\s+/g, "-")
      )
    );
    const isAgencyAddon = computed(() => categoriesLc.value.includes("agency"));
    const isAgencyLicense = computed(() => !!licenseStore.license?.is_agency);
    const showCheckbox = computed(() => {
      if (isAgencyAddon.value && isAgencyLicense.value) {
        return true;
      }
      return !!props.addon.installed && props.addon.type === "licensed" && !isAgencyAddon.value;
    });
    const activateCheckbox = computed({
      get() {
        return !!props.addon.active;
      },
      async set(checked) {
        if (checked) {
          await activate();
        } else {
          await deactivate();
        }
      }
    });
    const actionsClass = computed(() => {
      let cls = "monsterinsights-addon-message ";
      if (props.addon.type === "licensed") {
        if (props.addon.active) cls += "monsterinsights-addon-active";
        else if (props.addon.installed === false)
          cls += "monsterinsights-addon-not-installed";
        else cls += "monsterinsights-addon-inactive";
      } else {
        cls += "monsterinsights-addon-not-available";
      }
      return cls;
    });
    const textAddonBadge = computed(() => {
      if (categoriesLc.value.includes("agency")) return "AGENCY";
      if (categoriesLc.value.includes("pro")) return "PRO";
      return "PLUS";
    });
    const licenseExpired = computed(
      () => !!(licenseStore.license?.is_expired || licenseStore.license_network?.is_expired)
    );
    const needsUpgrade = computed(() => {
      if (props.addon.type === "unlicensed") return true;
      if (isAgencyAddon.value && !isAgencyLicense.value) return true;
      return false;
    });
    const textButtonAction = computed(() => {
      if (needsUpgrade.value) return text_upgrade_now;
      if (activating.value)
        return __("Activating...", "google-analytics-for-wordpress");
      if (deactivating.value)
        return __("Deactivating...", "google-analytics-for-wordpress");
      if (installing.value)
        return __("Installing...", "google-analytics-for-wordpress");
      if (props.addon.active)
        return __("Deactivate", "google-analytics-for-wordpress");
      if (props.addon.installed)
        return __("Activate", "google-analytics-for-wordpress");
      if (props.addon.redirect)
        return __("Visit Website", "google-analytics-for-wordpress");
      return __("Download & Activate", "google-analytics-for-wordpress");
    });
    async function clickAction() {
      if (activating.value || deactivating.value || installing.value) return;
      if (props.addon.installed) {
        if (props.addon.active) await deactivate();
        else await activate();
      } else {
        await installThenActivate();
      }
    }
    async function installThenActivate() {
      installing.value = true;
      try {
        const response = await addonsStore.installAddonAction(props.addon);
        installing.value = false;
        if (response && !response.error && !response.form) {
          await activate();
        }
      } catch (e) {
        installing.value = false;
      }
    }
    async function activate() {
      activating.value = true;
      savingToast({
        title: __("Activating Addon", "google-analytics-for-wordpress")
      });
      try {
        await addonsStore.activateAddonAction(props.addon);
        successToast({
          title: __("Addon Activated", "google-analytics-for-wordpress")
        });
      } catch (e) {
        errorToast({
          title: e?.title || __("Could not activate addon", "google-analytics-for-wordpress"),
          text: e?.message || ""
        });
      } finally {
        activating.value = false;
      }
    }
    async function deactivate() {
      deactivating.value = true;
      savingToast({
        title: __("Deactivating Addon", "google-analytics-for-wordpress")
      });
      try {
        await addonsStore.deactivateAddonAction(props.addon);
        successToast({
          title: __("Addon Deactivated", "google-analytics-for-wordpress")
        });
      } catch (e) {
        errorToast({
          title: e?.title || __("Could not deactivate addon", "google-analytics-for-wordpress"),
          text: e?.message || ""
        });
      } finally {
        deactivating.value = false;
      }
    }
    function openUpgradeUrl() {
      document.addEventListener("visibilitychange", onVisibilityChange);
      window.open(learnMoreUrl.value, "_blank");
    }
    function onVisibilityChange() {
      if (document.visibilityState !== "visible") return;
      let html = sprintf(
        "<p>%s</p>",
        sprintf(
          // Translators: %s is a link to the contact page.
          __(
            "If you have any questions or issues just %slet us know%s.",
            "google-analytics-for-wordpress"
          ),
          '<a href="https://www.monsterinsights.com/contact/" target="_blank">',
          "</a>"
        )
      );
      html += sprintf(
        "<p>%s</p>",
        sprintf(
          // Translators: Placeholders make the text bold.
          __(
            "After purchasing a license, %1$sjust enter your license key on the MonsterInsights Settings page%2$s. This will let your site automatically upgrade to MonsterInsights Pro! (Don't worry, all your reports and settings will be preserved.)",
            "google-analytics-for-wordpress"
          ),
          "<strong>",
          "</strong>"
        )
      );
      html += sprintf(
        "<p>%s</p>",
        sprintf(
          // Translators: %s is a link to the documentation.
          __(
            "Check out %1$sour documentation%2$s for step-by-step instructions.",
            "google-analytics-for-wordpress"
          ),
          '<a href="https://www.monsterinsights.com/docs/go-lite-pro/" target="_blank">',
          "</a>"
        )
      );
      dialog.alert({
        variant: "info",
        title: __(
          "Thanks for your interest in MonsterInsights Pro!",
          "google-analytics-for-wordpress"
        ),
        html
      });
      document.removeEventListener("visibilitychange", onVisibilityChange);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: `monsterinsights-addon-${__props.addon.slug}`,
        class: "monsterinsights-addon"
      }, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("div", _hoisted_3$2, [
            __props.addon.svg_icon_path ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
              createBaseVNode("img", {
                src: __props.addon.svg_icon_path,
                alt: __props.addon.title
              }, null, 8, _hoisted_5$2)
            ])) : __props.addon.icon ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
              createBaseVNode("img", {
                src: __props.addon.icon,
                alt: __props.addon.title
              }, null, 8, _hoisted_7$2)
            ])) : (openBlock(), createElementBlock("i", {
              key: 2,
              class: normalizeClass(["monsterinsights-bg-img", `monsterinsights-addon-${__props.addon.slug}`])
            }, null, 2))
          ]),
          createBaseVNode("div", _hoisted_8$2, [
            createBaseVNode("h3", _hoisted_9$2, [
              createBaseVNode("a", {
                href: learnMoreUrl.value,
                textContent: toDisplayString(addonTitle.value)
              }, null, 8, _hoisted_10$2)
            ])
          ]),
          showCheckbox.value ? (openBlock(), createElementBlock("div", _hoisted_11$2, [
            createBaseVNode("label", null, [
              createBaseVNode("span", {
                class: normalizeClass({
                  "monsterinsights-styled-checkbox": true,
                  "monsterinsights-styled-checkbox-checked": __props.addon.active
                })
              }, null, 2),
              withDirectives(createBaseVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activateCheckbox.value = $event),
                type: "checkbox"
              }, null, 512), [
                [vModelCheckbox, activateCheckbox.value]
              ])
            ])
          ])) : createCommentVNode("", true)
        ]),
        __props.addon.excerpt ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
          createBaseVNode("p", {
            class: "monsterinsights-addon-excerpt",
            textContent: toDisplayString(__props.addon.excerpt)
          }, null, 8, _hoisted_13$2)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(actionsClass.value)
        }, [
          createBaseVNode("div", _hoisted_14$2, [
            createBaseVNode("p", {
              class: "monsterinsights-addon-badge",
              textContent: toDisplayString(textAddonBadge.value)
            }, null, 8, _hoisted_15$2),
            createBaseVNode("div", _hoisted_16$2, [
              licenseExpired.value ? (openBlock(), createElementBlock("div", _hoisted_17$2, [
                __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", _hoisted_18$2, [
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_expired))
                  }, null, 8, _hoisted_19$2)
                ])) : createCommentVNode("", true)
              ])) : needsUpgrade.value ? (openBlock(), createElementBlock("div", _hoisted_20$2, [
                createBaseVNode("a", {
                  href: "#",
                  class: "monsterinsights-button monsterinsights-button-green",
                  onClick: withModifiers(openUpgradeUrl, ["prevent"]),
                  textContent: toDisplayString(unref(text_upgrade_now))
                }, null, 8, _hoisted_21$2)
              ])) : __props.addon.type === "licensed" ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
                !__props.addon.installed ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "monsterinsights-button monsterinsights-button-green",
                  type: "button",
                  onClick: withModifiers(clickAction, ["prevent"])
                }, [
                  createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_23$1)
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 2)
      ], 8, _hoisted_1$2);
    };
  }
};
const _hoisted_1$1 = {
  id: "request-filesystem-credentials-dialog",
  class: "notification-dialog-wrap request-filesystem-credentials-dialog"
};
const _hoisted_2$1 = {
  class: "notification-dialog",
  role: "dialog",
  "aria-labelledby": "request-filesystem-credentials-title",
  tabindex: "0"
};
const _hoisted_3$1 = { class: "request-filesystem-credentials-dialog-content" };
const _hoisted_4$1 = {
  id: "request-filesystem-credentials-form",
  class: "request-filesystem-credentials-form"
};
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = { for: "hostname" };
const _hoisted_8$1 = ["textContent"];
const _hoisted_9$1 = { class: "ftp-username" };
const _hoisted_10$1 = { for: "username" };
const _hoisted_11$1 = ["textContent"];
const _hoisted_12$1 = { class: "ftp-password" };
const _hoisted_13$1 = { for: "password" };
const _hoisted_14$1 = ["textContent"];
const _hoisted_15$1 = ["textContent"];
const _hoisted_16$1 = ["textContent"];
const _hoisted_17$1 = { for: "ftp" };
const _hoisted_18$1 = { for: "ftps" };
const _hoisted_19$1 = { class: "request-filesystem-credentials-action-buttons" };
const _hoisted_20$1 = ["textContent"];
const _hoisted_21$1 = ["textContent"];
const _sfc_main$1 = {
  __name: "TheAppFTPForm",
  setup(__props) {
    const { __ } = wp.i18n;
    const addonsStore = useAddonsStore();
    const { ftpForm } = storeToRefs(addonsStore);
    const { loadingToast, closeToast } = useToast();
    const text_form_title = __("Connection Information", "google-analytics-for-wordpress");
    const text_form_description = __(
      "To perform the requested action, WordPress needs to access your web server. Please enter your FTP credentials to proceed. If you do not remember your credentials, you should contact your web host.",
      "google-analytics-for-wordpress"
    );
    const text_hostname_label = __("Hostname", "google-analytics-for-wordpress");
    const text_username_label = __("FTP Username", "google-analytics-for-wordpress");
    const text_password_label = __("FTP Password", "google-analytics-for-wordpress");
    const text_password_description = __(
      "This password will not be stored on the server.",
      "google-analytics-for-wordpress"
    );
    const text_connection_type_label = __("Connection Type", "google-analytics-for-wordpress");
    const text_button_cancel = __("Cancel", "google-analytics-for-wordpress");
    const text_button_proceed = __("Proceed", "google-analytics-for-wordpress");
    function makeField(field) {
      return computed({
        get: () => addonsStore.ftpForm[field],
        set: (value) => addonsStore.setFtpField(field, value)
      });
    }
    const localHostname = makeField("hostname");
    const localUsername = makeField("username");
    const localPassword = makeField("password");
    const localConnectionType = makeField("connectionType");
    function hideForm() {
      addonsStore.hideFtpForm();
    }
    function onModelValue(value) {
      if (!value) {
        hideForm();
      }
    }
    async function retryAction() {
      const { action, data } = ftpForm.value;
      addonsStore.hideFtpForm();
      loadingToast(__("Please wait...", "google-analytics-for-wordpress"));
      try {
        if (action && typeof addonsStore[action] === "function") {
          await addonsStore[action](data);
        }
      } finally {
        closeToast();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, {
        "model-value": unref(ftpForm).visible,
        mode: "dialog",
        "content-class": "monsterinsights-dialog-shell",
        "overlay-class": "monsterinsights-dialog-shell-overlay",
        dismissable: false,
        "onUpdate:modelValue": onModelValue
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("div", _hoisted_2$1, [
              createBaseVNode("div", _hoisted_3$1, [
                createBaseVNode("div", _hoisted_4$1, [
                  createBaseVNode("h1", {
                    id: "request-filesystem-credentials-title",
                    textContent: toDisplayString(unref(text_form_title))
                  }, null, 8, _hoisted_5$1),
                  createBaseVNode("p", {
                    id: "request-filesystem-credentials-desc",
                    textContent: toDisplayString(unref(text_form_description))
                  }, null, 8, _hoisted_6$1),
                  createBaseVNode("label", _hoisted_7$1, [
                    createBaseVNode("span", {
                      class: "field-title",
                      textContent: toDisplayString(unref(text_hostname_label))
                    }, null, 8, _hoisted_8$1),
                    withDirectives(createBaseVNode("input", {
                      id: "hostname",
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(localHostname) ? localHostname.value = $event : null),
                      name: "hostname",
                      type: "text",
                      class: "code",
                      "aria-describedby": "request-filesystem-credentials-desc",
                      placeholder: "example: www.wordpress.org",
                      autocomplete: "off"
                    }, null, 512), [
                      [vModelText, unref(localHostname)]
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_9$1, [
                    createBaseVNode("label", _hoisted_10$1, [
                      createBaseVNode("span", {
                        class: "field-title",
                        textContent: toDisplayString(unref(text_username_label))
                      }, null, 8, _hoisted_11$1),
                      withDirectives(createBaseVNode("input", {
                        id: "username",
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(localUsername) ? localUsername.value = $event : null),
                        name: "username",
                        type: "text",
                        autocomplete: "off"
                      }, null, 512), [
                        [vModelText, unref(localUsername)]
                      ])
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_12$1, [
                    createBaseVNode("label", _hoisted_13$1, [
                      createBaseVNode("span", {
                        class: "field-title",
                        textContent: toDisplayString(unref(text_password_label))
                      }, null, 8, _hoisted_14$1),
                      withDirectives(createBaseVNode("input", {
                        id: "password",
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(localPassword) ? localPassword.value = $event : null),
                        name: "password",
                        type: "password",
                        autocomplete: "off"
                      }, null, 512), [
                        [vModelText, unref(localPassword)]
                      ]),
                      createBaseVNode("em", {
                        textContent: toDisplayString(unref(text_password_description))
                      }, null, 8, _hoisted_15$1)
                    ])
                  ]),
                  createBaseVNode("fieldset", null, [
                    createBaseVNode("legend", {
                      textContent: toDisplayString(unref(text_connection_type_label))
                    }, null, 8, _hoisted_16$1),
                    createBaseVNode("label", _hoisted_17$1, [
                      withDirectives(createBaseVNode("input", {
                        id: "ftp",
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(localConnectionType) ? localConnectionType.value = $event : null),
                        type: "radio",
                        name: "connection_type",
                        value: "ftp"
                      }, null, 512), [
                        [vModelRadio, unref(localConnectionType)]
                      ]),
                      _cache[5] || (_cache[5] = createTextVNode(" FTP ", -1))
                    ]),
                    createBaseVNode("label", _hoisted_18$1, [
                      withDirectives(createBaseVNode("input", {
                        id: "ftps",
                        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(localConnectionType) ? localConnectionType.value = $event : null),
                        type: "radio",
                        name: "connection_type",
                        value: "ftps"
                      }, null, 512), [
                        [vModelRadio, unref(localConnectionType)]
                      ]),
                      _cache[6] || (_cache[6] = createTextVNode(" FTPS (SSL) ", -1))
                    ])
                  ]),
                  createBaseVNode("p", _hoisted_19$1, [
                    createBaseVNode("button", {
                      class: "button cancel-button",
                      "data-js-action": "close",
                      type: "button",
                      onClick: hideForm,
                      textContent: toDisplayString(unref(text_button_cancel))
                    }, null, 8, _hoisted_20$1),
                    createBaseVNode("button", {
                      id: "upgrade",
                      class: "button",
                      type: "button",
                      onClick: retryAction,
                      textContent: toDisplayString(unref(text_button_proceed))
                    }, null, 8, _hoisted_21$1)
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
};
const TheAppFTPForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9d871ebe"]]);
const _hoisted_1 = ["data-license"];
const _hoisted_2 = { class: "monsterinsights-addons-area" };
const _hoisted_3 = {
  key: 0,
  class: "monsterinsights-addons-list"
};
const _hoisted_4 = {
  key: 1,
  class: "monsterinsights-notice monsterinsights-notice-warning"
};
const _hoisted_5 = { class: "monsterinsights-notice-inner" };
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = {
  key: 0,
  class: "monsterinsights-addons-list"
};
const _hoisted_9 = {
  key: 2,
  class: "monsterinsights-addons-upsell"
};
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = ["textContent"];
const _hoisted_12 = ["textContent"];
const _hoisted_13 = ["textContent"];
const _hoisted_14 = ["textContent"];
const _hoisted_15 = ["textContent"];
const _hoisted_16 = { class: "monsterinsights-addons-upsell-action" };
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["href", "textContent"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = {
  key: 0,
  class: "monsterinsights-addons-list"
};
const _hoisted_21 = {
  key: 0,
  class: "monsterinsights-addons-no-results"
};
const _hoisted_22 = ["textContent"];
const _hoisted_23 = ["textContent"];
const _sfc_main = {
  __name: "AddonsPage",
  setup(__props) {
    const { __ } = wp.i18n;
    const route = useRoute();
    const addonsStore = useAddonsStore();
    useLicenseStore();
    const { loadingToast, closeToast, successToast } = useToast();
    const { addons, loaded, filteredAddons, isFilterMode } = storeToRefs(addonsStore);
    const isProVersion = isPro();
    const RECOMMEND_KEYS = ["ppc-tracking", "amp", "dimensions"];
    const text_no_addons = __(
      "There was an issue retrieving the addons for this site. Please click on the button below the refresh the addons data.",
      "google-analytics-for-wordpress"
    );
    const text_no_addons_found = __("No addons found.", "google-analytics-for-wordpress");
    const text_refresh_addons = __("Refresh Addons", "google-analytics-for-wordpress");
    const text_recommend_for_you = __(
      "Recommended For You",
      "google-analytics-for-wordpress"
    );
    const text_you_might_also = __(
      "You Might Also Like",
      "google-analytics-for-wordpress"
    );
    const text_upgrade_unlock = __(
      "Upgrade to Pro<br>and Unlock",
      "google-analytics-for-wordpress"
    );
    const text_upsell_list_1 = __(
      "All Advanced Analytics Features",
      "google-analytics-for-wordpress"
    );
    const text_upsell_list_2 = __("eCommerce Reporting", "google-analytics-for-wordpress");
    const text_upsell_list_3 = __(
      "Form Conversion Reporting",
      "google-analytics-for-wordpress"
    );
    const text_upsell_list_4 = __(
      "10+ One Click Integrations",
      "google-analytics-for-wordpress"
    );
    const text_upsell_list_5 = __(
      "...and MUCH More!",
      "google-analytics-for-wordpress"
    );
    const text_save_50 = __("Save 50%", "google-analytics-for-wordpress");
    const text_upgrade_now = __("Upgrade Now", "google-analytics-for-wordpress");
    const upgradeUrl = computed(() => getUpgradeUrl("addons-page", "upsell-cta"));
    const licenseType = computed(() => {
      return "lite";
    });
    const addonsList = computed(() => {
      const list = [];
      for (const key in addons.value) {
        if (addons.value[key]?.type) {
          list.push(addons.value[key]);
        }
      }
      return list;
    });
    const recommendAddons = computed(() => {
      const list = [];
      for (const key of RECOMMEND_KEYS) {
        if (addons.value[key]) {
          list.push(addons.value[key]);
        }
      }
      return list;
    });
    const likeAddonsList = computed(() => {
      const list = addonsList.value.filter(
        (addon) => !RECOMMEND_KEYS.includes(addon.slug)
      );
      for (let i = 0; i < list.length; i++) {
        if (list[i].slug === "ads") {
          const [ads] = list.splice(i, 1);
          list.push(ads);
          break;
        }
      }
      return list;
    });
    const showNoText = computed(
      () => loaded.value && addonsList.value.length === 0
    );
    async function refreshAddons() {
      loadingToast(__("Refreshing Addons", "google-analytics-for-wordpress"));
      try {
        await addonsStore.fetchAddonsAction();
      } finally {
        closeToast();
      }
    }
    async function processAdsAddonDeactivation() {
      loadingToast(__("Deactivating Ads Addon", "google-analytics-for-wordpress"));
      await addonsStore.deactivateAddonAction({
        basename: "monsterinsights-ads/monsterinsights-ads.php",
        slug: "ads"
      });
      const start = Date.now();
      const poll = async () => {
        if (addonsStore.addons?.["ppc-tracking"]) {
          closeToast();
          const ppc = addonsStore.addons["ppc-tracking"];
          loadingToast(
            __("Installing PPC Tracking Addon", "google-analytics-for-wordpress")
          );
          try {
            await addonsStore.installAddonAction(ppc);
            await addonsStore.activateAddonAction(ppc);
            successToast({
              title: __(
                "PPC Addon Successfully Activated",
                "google-analytics-for-wordpress"
              )
            });
          } catch (e) {
            closeToast();
          }
          return;
        }
        if (Date.now() - start > 2e4) {
          closeToast();
          return;
        }
        setTimeout(poll, 2e3);
      };
      poll();
    }
    onMounted(() => {
      if (route.query?.ads_addon_ppc_alert) {
        processAdsAddonDeactivation();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        id: "monsterinsights-addons",
        class: "monsterinsights-addons monsterinsights-container",
        "data-license": licenseType.value
      }, [
        createBaseVNode("div", _hoisted_2, [
          unref(isFilterMode) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            unref(filteredAddons).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredAddons), (addon, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `filter-${addon.slug || index}`,
                  class: "monsterinsights-addon-column"
                }, [
                  createVNode(_sfc_main$2, { addon }, null, 8, ["addon"])
                ]);
              }), 128))
            ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", {
                  class: "notice-content",
                  textContent: toDisplayString(unref(text_no_addons_found))
                }, null, 8, _hoisted_6)
              ])
            ]))
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("h2", {
              class: "monsterinsights-addons-heading",
              textContent: toDisplayString(unref(text_recommend_for_you))
            }, null, 8, _hoisted_7),
            recommendAddons.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_8, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(recommendAddons.value, (addon, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `rec-${addon.slug || index}`,
                  class: "monsterinsights-addon-column"
                }, [
                  createVNode(_sfc_main$2, { addon }, null, 8, ["addon"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ], 64)),
          !unref(isProVersion) ? (openBlock(), createElementBlock("section", _hoisted_9, [
            createBaseVNode("h2", {
              class: "monsterinsights-addons-upsell-heading",
              innerHTML: unref(text_upgrade_unlock)
            }, null, 8, _hoisted_10),
            createBaseVNode("ul", null, [
              createBaseVNode("li", {
                textContent: toDisplayString(unref(text_upsell_list_1))
              }, null, 8, _hoisted_11),
              createBaseVNode("li", {
                textContent: toDisplayString(unref(text_upsell_list_2))
              }, null, 8, _hoisted_12),
              createBaseVNode("li", {
                textContent: toDisplayString(unref(text_upsell_list_3))
              }, null, 8, _hoisted_13),
              createBaseVNode("li", {
                textContent: toDisplayString(unref(text_upsell_list_4))
              }, null, 8, _hoisted_14),
              createBaseVNode("li", {
                textContent: toDisplayString(unref(text_upsell_list_5))
              }, null, 8, _hoisted_15)
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("div", {
                class: "monsterinsights-addons-upsell-action-offer",
                textContent: toDisplayString(unref(text_save_50))
              }, null, 8, _hoisted_17),
              createBaseVNode("a", {
                class: "monsterinsights-button",
                href: upgradeUrl.value,
                target: "_blank",
                textContent: toDisplayString(unref(text_upgrade_now))
              }, null, 8, _hoisted_18)
            ])
          ])) : createCommentVNode("", true),
          !unref(isFilterMode) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            createBaseVNode("h2", {
              class: "monsterinsights-addons-heading",
              textContent: toDisplayString(unref(text_you_might_also))
            }, null, 8, _hoisted_19),
            likeAddonsList.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_20, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(likeAddonsList.value, (addon, index) => {
                return openBlock(), createElementBlock("div", {
                  key: `like-${addon.slug || index}`,
                  class: "monsterinsights-addon-column"
                }, [
                  createVNode(_sfc_main$2, { addon }, null, 8, ["addon"])
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ], 64)) : createCommentVNode("", true)
        ]),
        showNoText.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
          createBaseVNode("p", {
            textContent: toDisplayString(unref(text_no_addons))
          }, null, 8, _hoisted_22),
          createBaseVNode("button", {
            class: "monsterinsights-button",
            type: "button",
            onClick: refreshAddons,
            textContent: toDisplayString(unref(text_refresh_addons))
          }, null, 8, _hoisted_23)
        ])) : createCommentVNode("", true),
        createVNode(TheAppFTPForm)
      ], 8, _hoisted_1);
    };
  }
};
export {
  _sfc_main as default
};
