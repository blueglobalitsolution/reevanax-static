import { u as useNotices } from "./useNotices-BpzNuZJ7.js";
import { u as unref, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, f as renderList, i as normalizeClass, s as createCommentVNode, t as toDisplayString, S as Go, j as ref, m as computed, L as reactive, U as useToastStore, k as getMiGlobal, O as getMonsterInsightsUrl, l as defineStore } from "./toastStore-CRCNwITM.js";
import { q as sanitizeHtml, r as miAjax } from "./ajax-B_XS1gT5.js";
import { _ as _sfc_main$1 } from "./Modal-B9mMTzc_.js";
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-notices-area"
};
const _hoisted_2 = { class: "monsterinsights-container" };
const _hoisted_3 = { class: "monsterinsights-notice-inner" };
const _hoisted_4 = ["aria-label", "onClick"];
const _hoisted_5 = { class: "notice-content" };
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = {
  key: 1,
  class: "monsterinsights-notice-button"
};
const _hoisted_10 = ["href", "textContent"];
const _sfc_main = {
  __name: "TheAppNotices",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const text_dismiss = __2("Dismiss", "google-analytics-for-wordpress");
    const { allNotices, hasNotices, removeNotice } = useNotices();
    function getNoticeClass(type, id) {
      return `monsterinsights-notice monsterinsights-notice-${type} monsterinsights-${id}`;
    }
    function buttonClass(type) {
      let cls = "monsterinsights-button";
      if (type === "success") {
        cls += " monsterinsights-button-green";
      }
      if (type === "error") {
        cls += " monsterinsights-button-error";
      }
      return cls;
    }
    return (_ctx, _cache) => {
      return unref(hasNotices) ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(allNotices), (notice, id) => {
            return openBlock(), createElementBlock("div", {
              key: id,
              class: normalizeClass(getNoticeClass(notice.type, notice.id || id))
            }, [
              createBaseVNode("div", _hoisted_3, [
                notice.dismissable ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  type: "button",
                  class: "dismiss-notice",
                  "aria-label": unref(text_dismiss),
                  onClick: ($event) => unref(removeNotice)(id)
                }, [..._cache[0] || (_cache[0] = [
                  createBaseVNode("i", { class: "monstericon-times" }, null, -1)
                ])], 8, _hoisted_4)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_5, [
                  createBaseVNode("div", {
                    class: normalizeClass(notice.icon ? "monsterinsights-flex" : "")
                  }, [
                    notice.icon ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(`monsterinsights-notice-icon monsterinsights-${notice.id || id}-icon`)
                    }, [
                      createBaseVNode("span", {
                        innerHTML: notice.icon
                      }, null, 8, _hoisted_6)
                    ], 2)) : createCommentVNode("", true),
                    createBaseVNode("div", null, [
                      notice.title ? (openBlock(), createElementBlock("h2", {
                        key: 0,
                        class: "notice-title",
                        innerHTML: unref(sanitizeHtml)(notice.title)
                      }, null, 8, _hoisted_7)) : createCommentVNode("", true),
                      createBaseVNode("span", {
                        class: "monsterinsights-notice-content",
                        innerHTML: unref(sanitizeHtml)(notice.content)
                      }, null, 8, _hoisted_8),
                      notice.button && notice.button.enabled ? (openBlock(), createElementBlock("div", _hoisted_9, [
                        createBaseVNode("a", {
                          class: normalizeClass(buttonClass(notice.type)),
                          target: "_blank",
                          rel: "noopener noreferrer",
                          href: notice.button.link,
                          textContent: toDisplayString(notice.button.text)
                        }, null, 10, _hoisted_10)
                      ])) : createCommentVNode("", true)
                    ])
                  ], 2)
                ])
              ])
            ], 2);
          }), 128))
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const currentModalVModel = ref(null);
const currentModalController = ref(null);
function useModal() {
  const openModal = (options = {}) => {
    if (currentModalVModel.value?.value) {
      currentModalVModel.value.value = false;
    }
    const variant = options.type || "success";
    const component = options.component || _sfc_main$1;
    const modalProps = {
      variant,
      title: options.title || "",
      message: options.message || "",
      icon: options.icon,
      confirmButtonText: options.confirmButtonText,
      cancelButtonText: options.cancelButtonText,
      customClass: options.customClass || {},
      onConfirm: options.onConfirm,
      onCancel: options.onCancel,
      onClosed: options.onClosed,
      ...options
      // Pass through any additional options
    };
    try {
      const {
        open,
        close,
        options: modalVm
      } = Go({
        component,
        attrs: {
          ...modalProps,
          modelValue: true
        }
      });
      currentModalVModel.value = modalVm.modelValue;
      currentModalController.value = { close, options: modalVm };
      open();
      return {
        close,
        options: modalVm
      };
    } catch (error) {
      console.error("Error in useVueFinalModal:", error);
      throw error;
    }
  };
  const closeModal = (options = {}) => {
    if (options.controller) {
      options.controller.close();
      return;
    }
    if (currentModalVModel.value?.value) {
      currentModalVModel.value.value = false;
    }
    if (currentModalController.value) {
      currentModalController.value.close();
      currentModalController.value = null;
    }
  };
  const showLoadingModal = (titleOrOptions = "Loading...", options = {}) => {
    let config;
    if (typeof titleOrOptions === "string") {
      config = { title: titleOrOptions, ...options };
    } else {
      config = { title: "Loading...", ...titleOrOptions };
    }
    return openModal({
      type: "loading",
      ...config
    });
  };
  const showSuccessModal = (titleOrOptions, messageOrOptions, options = {}) => {
    let config;
    if (typeof titleOrOptions === "object" && titleOrOptions !== null) {
      config = titleOrOptions;
    } else if (typeof titleOrOptions === "string" && typeof messageOrOptions === "object") {
      config = { title: titleOrOptions, ...messageOrOptions };
    } else {
      config = {
        title: titleOrOptions || "Success",
        message: messageOrOptions || "",
        ...options
      };
    }
    return openModal({
      type: "success",
      confirmButtonText: "OK",
      clickToClose: true,
      escToClose: true,
      ...config
    });
  };
  const showErrorModal = (titleOrOptions, messageOrOptions, options = {}) => {
    let config;
    if (typeof titleOrOptions === "object" && titleOrOptions !== null) {
      config = titleOrOptions;
    } else if (typeof titleOrOptions === "string" && typeof messageOrOptions === "object") {
      config = { title: titleOrOptions, ...messageOrOptions };
    } else {
      config = {
        title: titleOrOptions || "Error",
        message: messageOrOptions || "",
        ...options
      };
    }
    return openModal({
      type: "error",
      confirmButtonText: "OK",
      clickToClose: true,
      escToClose: true,
      ...config
    });
  };
  const showConfirmModal = (titleOrOptions, messageOrOnConfirm, onConfirm, onCancel, options = {}) => {
    let config;
    if (typeof titleOrOptions === "object" && titleOrOptions !== null) {
      config = titleOrOptions;
    } else if (typeof messageOrOnConfirm === "function") {
      config = {
        title: titleOrOptions || "Confirm",
        message: options.message || "Are you sure?",
        onConfirm: messageOrOnConfirm,
        onCancel: onConfirm,
        // shifted parameter
        ...onCancel
        // shifted parameter (options)
      };
    } else {
      config = {
        title: titleOrOptions || "Confirm",
        message: messageOrOnConfirm || "Are you sure?",
        onConfirm,
        onCancel,
        ...options
      };
    }
    return openModal({
      type: "confirm",
      confirmButtonText: config.confirmButtonText || "Confirm",
      cancelButtonText: config.cancelButtonText || "Cancel",
      clickToClose: false,
      escToClose: false,
      ...config
    });
  };
  const isModalVisible = () => {
    return currentModalVModel.value && currentModalVModel.value.value === true;
  };
  const { __: __2 } = wp.i18n;
  const showAddonInstallModal = (slug, status, error = null) => {
    const addonName = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    switch (status) {
      case "installing":
        return showLoadingModal({
          title: __2("Installing Addon", "google-analytics-for-wordpress"),
          message: __2("Installing", "google-analytics-for-wordpress") + ` ${addonName}...`,
          clickToClose: false,
          escToClose: false
        });
      case "activating":
        return showLoadingModal({
          title: __2("Activating Addon", "google-analytics-for-wordpress"),
          message: __2("Activating", "google-analytics-for-wordpress") + ` ${addonName}...`,
          clickToClose: false,
          escToClose: false
        });
      case "errorInstall":
        return showErrorModal({
          title: __2("Installation Failed", "google-analytics-for-wordpress"),
          message: error?.message || __2("Failed to install", "google-analytics-for-wordpress") + ` ${addonName}. ` + __2("Please try again.", "google-analytics-for-wordpress"),
          confirmButtonText: __2("OK", "google-analytics-for-wordpress")
        });
      default:
        console.warn(`Unknown addon install status: ${status}`);
        return null;
    }
  };
  const showAddonActivateModal = (addonName, status, error = null) => {
    switch (status) {
      case "activating":
        return showLoadingModal({
          title: __2("Activating Addon", "google-analytics-for-wordpress"),
          message: __2("Activating", "google-analytics-for-wordpress") + ` ${addonName}...`,
          clickToClose: false,
          escToClose: false
        });
      case "successReload":
        return showSuccessModal({
          title: __2("Addon Activated", "google-analytics-for-wordpress"),
          message: `${addonName} ` + __2(
            "has been successfully activated. The page will reload in a moment to complete the setup.",
            "google-analytics-for-wordpress"
          ),
          confirmButtonText: __2("OK", "google-analytics-for-wordpress"),
          onConfirm: () => {
            setTimeout(() => {
              window.location.reload();
            }, 1e3);
          }
        });
      case "errorActivate":
        return showErrorModal({
          title: __2("Activation Failed", "google-analytics-for-wordpress"),
          message: error?.message || __2("Failed to activate", "google-analytics-for-wordpress") + ` ${addonName}. ` + __2("Please try again.", "google-analytics-for-wordpress"),
          confirmButtonText: __2("OK", "google-analytics-for-wordpress")
        });
      default:
        console.warn(`Unknown addon activate status: ${status}`);
        return null;
    }
  };
  const setModalState = (state2) => {
    const { type, status, slug, addonName, error } = state2;
    switch (type) {
      case "addonInstall":
        return showAddonInstallModal(slug, status, error);
      case "addonActivate":
        return showAddonActivateModal(addonName, status, error);
      default:
        console.warn(`Unknown modal type: ${type}`);
        return null;
    }
  };
  return {
    // Core modal methods
    openModal,
    closeModal,
    isModalVisible,
    // Specific modal types
    showLoadingModal,
    showSuccessModal,
    showErrorModal,
    showConfirmModal,
    // Addon-specific modals (replaces appStore.setModalState)
    showAddonInstallModal,
    showAddonActivateModal,
    setModalState
    // Legacy compatibility
  };
}
const { __: __$3 } = wp.i18n;
function useDialog() {
  const { openModal } = useModal();
  function confirm(opts = {}) {
    return new Promise((resolve) => {
      let settled = false;
      const done = (value) => {
        if (!settled) {
          settled = true;
          resolve(value);
        }
      };
      openModal({
        type: "confirm",
        title: opts.title || "",
        message: opts.message || "",
        confirmButtonText: opts.confirmText || __$3("Confirm", "google-analytics-for-wordpress"),
        cancelButtonText: opts.cancelText || __$3("Cancel", "google-analytics-for-wordpress"),
        clickToClose: false,
        escToClose: false,
        onConfirm: () => done(true),
        onCancel: () => done(false),
        onClosed: () => done(false)
      });
    });
  }
  function alert(opts = {}) {
    const type = opts.variant === "error" ? "error" : "success";
    return new Promise((resolve) => {
      let settled = false;
      const done = () => {
        if (!settled) {
          settled = true;
          resolve();
        }
      };
      openModal({
        type,
        icon: opts.variant === "info" ? "info" : void 0,
        title: opts.title || "",
        message: opts.message || "",
        html: opts.html || "",
        confirmButtonText: opts.confirmText || __$3("OK", "google-analytics-for-wordpress"),
        clickToClose: true,
        escToClose: true,
        onConfirm: done,
        onClosed: done
      });
    });
  }
  function loading(opts = {}) {
    const controller = openModal({
      type: "loading",
      title: opts.title || __$3("Loading…", "google-analytics-for-wordpress"),
      message: opts.message || "",
      clickToClose: false,
      escToClose: false
    });
    return { close: () => controller?.close?.() };
  }
  return { confirm, alert, loading };
}
const SAVED_TTL_MS = 3e3;
const state = reactive({
  inFlight: 0,
  status: "idle"
  // 'idle' | 'saving' | 'saved' | 'error'
});
let erroredThisRun = false;
let savedTimer = null;
function clearSavedTimer() {
  if (savedTimer) {
    clearTimeout(savedTimer);
    savedTimer = null;
  }
}
function useSaveStatus() {
  function begin() {
    clearSavedTimer();
    if (state.inFlight === 0) {
      erroredThisRun = false;
    }
    state.inFlight++;
    state.status = "saving";
  }
  function settle(ok = true) {
    if (state.inFlight === 0) {
      return;
    }
    if (!ok) {
      erroredThisRun = true;
    }
    state.inFlight--;
    if (state.inFlight !== 0) {
      return;
    }
    if (erroredThisRun) {
      state.status = "error";
      return;
    }
    state.status = "saved";
    clearSavedTimer();
    savedTimer = setTimeout(() => {
      if (state.inFlight === 0 && state.status === "saved") {
        state.status = "idle";
      }
      savedTimer = null;
    }, SAVED_TTL_MS);
  }
  return {
    state,
    status: computed(() => state.status),
    begin,
    settle
  };
}
const { __: __$2 } = wp.i18n;
let loaderController = null;
let savingToastId = null;
function useToast() {
  const { add, update, dismiss } = useToastStore();
  const dialog = useDialog();
  const saveStatus = useSaveStatus();
  function savingToast(settings = {}) {
    if (!settings.title) {
      saveStatus.begin();
      return null;
    }
    const title = settings.title;
    if (savingToastId) {
      update(savingToastId, {
        type: "loading",
        title,
        message: settings.text || "",
        timer: 0
      });
    } else {
      savingToastId = add({
        type: "loading",
        title,
        message: settings.text || "",
        timer: 0,
        dismissible: false
      });
    }
    return savingToastId;
  }
  function successToast(settings = {}) {
    if (savingToastId) {
      clearSaving();
      return add({
        type: "success",
        title: settings.title || __$2("Settings Updated", "google-analytics-for-wordpress"),
        message: settings.text || "",
        timer: settings.timer || 2e3
      });
    }
    if (settings.title) {
      return add({
        type: "success",
        title: settings.title,
        message: settings.text || "",
        timer: settings.timer || 2e3
      });
    }
    saveStatus.settle(true);
    return false;
  }
  function errorToast(settings = {}) {
    if (savingToastId) {
      clearSaving();
    } else if (!settings.title) {
      saveStatus.settle(false);
    }
    const html = [settings.text, settings.footer].filter(Boolean).join("<br>");
    return add({
      type: "error",
      title: settings.title || __$2("Could Not Save Changes", "google-analytics-for-wordpress"),
      // `text` historically contained HTML (links); render sanitized.
      html,
      timer: settings.timer || 3e3
    });
  }
  function loadingToast(title) {
    if (loaderController) {
      loaderController.close();
    }
    loaderController = dialog.loading({
      title: title || __$2("Loading Settings", "google-analytics-for-wordpress")
    });
  }
  function closeToast() {
    clearSaving();
    if (loaderController) {
      loaderController.close();
      loaderController = null;
    }
  }
  function clearSaving() {
    if (savingToastId) {
      dismiss(savingToastId);
      savingToastId = null;
    }
  }
  return {
    savingToast,
    successToast,
    errorToast,
    loadingToast,
    closeToast
  };
}
const { __: __$1 } = wp.i18n;
const fetchAddons = async () => {
  return await miAjax("monsterinsights_vue_get_addons", {
    network: getMiGlobal("network", false)
  });
};
const installAddon = async (addonUrl, ftpData = null) => {
  const data = {
    nonce: getMiGlobal("install_nonce", ""),
    plugin: addonUrl
  };
  if (ftpData) {
    data.hostname = ftpData.hostname;
    data.username = ftpData.username;
    data.password = ftpData.password;
    data.connection_type = ftpData.connectionType;
  }
  return await miAjax("monsterinsights_install_addon", data);
};
const installWPForms = async () => {
  return await miAjax("monsterinsights_onboarding_wpforms_install", {
    nonce: getMiGlobal("install_nonce", "")
  });
};
const activateAddon = async (addon) => {
  const plugin = typeof addon === "string" ? addon : addon?.basename || "";
  try {
    const response = await miAjax("monsterinsights_activate_addon", {
      nonce: getMiGlobal("activate_nonce", ""),
      isnetwork: getMiGlobal("network", false),
      plugin
    });
    if (response && response.success !== false) {
      return response;
    }
    throw {
      title: __$1("Addon Activation Error", "monsterinsights"),
      message: response.error || response.message || __$1("Activation failed", "monsterinsights")
    };
  } catch (error) {
    if (error?.title) {
      throw error;
    }
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-activating-addon",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __$1("Addon activation failed", "monsterinsights"),
      message: error?.message || __$1("AJAX request failed", "monsterinsights"),
      support_url
    };
  }
};
const deactivateAddon = async (addon) => {
  const plugin = typeof addon === "string" ? addon : addon?.basename || "";
  try {
    const response = await miAjax("monsterinsights_deactivate_addon", {
      nonce: getMiGlobal("deactivate_nonce", ""),
      isnetwork: getMiGlobal("network", false),
      plugin
    });
    if (response && response.success !== false) {
      return response;
    }
    throw {
      title: __$1("Addon Deactivation Error", "monsterinsights"),
      message: response.error || response.message || __$1("Deactivation failed", "monsterinsights")
    };
  } catch (error) {
    if (error?.title) {
      throw error;
    }
    throw {
      title: __$1("Addon deactivation failed", "monsterinsights"),
      message: error?.message || __$1("AJAX request failed", "monsterinsights")
    };
  }
};
const installPlugin = async (pluginSlug) => {
  return await miAjax("monsterinsights_vue_install_plugin", {
    slug: pluginSlug
  });
};
const installUserFeedback = async () => {
  return await miAjax("monsterinsights_vue_install_plugin", {
    slug: "userfeedback-lite"
  });
};
const activateUserFeedback = async () => {
  return await miAjax("monsterinsights_activate_addon", {
    nonce: getMiGlobal("activate_nonce"),
    isnetwork: getMiGlobal("network"),
    plugin: "userfeedback-lite/userfeedback.php"
  });
};
const installRewardsWP = async () => {
  return await miAjax("monsterinsights_vue_install_plugin", {
    slug: "rewardswp"
  });
};
const activateRewardsWP = async (basename = "rewardswp/rewardswp.php") => {
  return await miAjax("monsterinsights_activate_addon", {
    nonce: getMiGlobal("activate_nonce"),
    isnetwork: getMiGlobal("network"),
    plugin: basename
  });
};
async function getAddon(addonSlug) {
  try {
    const addons = await fetchAddons();
    if (addons) {
      return addons[addonSlug];
    }
  } catch (_error) {
  }
  return null;
}
const addonsApi = {
  fetchAddons,
  installAddon,
  activateAddon,
  deactivateAddon,
  installWPForms,
  installPlugin,
  installUserFeedback,
  activateUserFeedback,
  installRewardsWP,
  activateRewardsWP,
  getAddon
};
const { __, sprintf } = wp.i18n;
const NEW_KEYS = ["site-notes-important-events", "exceptions", "user-journey"];
const PUBLISHER_KEYS = ["amp", "dimensions", "forms", "media", "page-insights"];
const ECOMMERCE_KEYS = [
  "ecommerce",
  "user-journey",
  "ppc-tracking",
  "dimensions",
  "forms",
  "page-insights"
];
function moveAdsToEnd(list) {
  const result = [...list];
  for (let i = 0; i < result.length; i++) {
    if (result[i]?.slug === "ads") {
      const [ads] = result.splice(i, 1);
      result.push(ads);
      break;
    }
  }
  return result;
}
const useAddonsStore = defineStore("addons", {
  state: () => ({
    addons: {},
    loaded: false,
    search: "",
    activeTab: "all",
    websiteType: "all",
    ftpForm: {
      visible: false,
      action: "",
      data: null,
      hostname: "",
      username: "",
      password: "",
      connectionType: "ftp",
      form: ""
    }
  }),
  getters: {
    filteredAddons: (state2) => {
      const items = [];
      for (const i in state2.addons) {
        const addon = state2.addons[i];
        if (!addon || !addon.type) {
          continue;
        }
        if (state2.search) {
          if (typeof addon.title === "string" && addon.title.search(new RegExp(state2.search, "i")) >= 0) {
            items.push(addon);
          }
          continue;
        }
        if (state2.activeTab === "popular" && !NEW_KEYS.includes(i)) {
          items.push(addon);
          continue;
        }
        if (state2.activeTab === "new" && NEW_KEYS.includes(i)) {
          items.push(addon);
          continue;
        }
        if (state2.activeTab === "active" && addon.active) {
          items.push(addon);
          continue;
        }
        if (state2.websiteType === "business") {
          items.push(addon);
        } else if (state2.websiteType === "publisher" && PUBLISHER_KEYS.includes(i)) {
          items.push(addon);
        } else if (state2.websiteType === "ecommerce" && ECOMMERCE_KEYS.includes(i)) {
          items.push(addon);
        }
      }
      return moveAdsToEnd(items);
    },
    isFilterMode: (state2) => {
      return !!state2.search || state2.activeTab !== "all" || state2.websiteType !== "all";
    },
    isAddonActive: (state2) => (addonSlug) => !!state2.addons?.[addonSlug]?.active,
    isAddonInstalled: (state2) => (addonSlug) => !!state2.addons?.[addonSlug]?.installed
  },
  actions: {
    updateSearch(search) {
      this.search = search;
    },
    updateActiveTab(tab) {
      this.activeTab = tab;
    },
    updateWebsiteType(type) {
      this.websiteType = type;
    },
    setAddonActive(addonSlug) {
      if (this.addons?.[addonSlug]) {
        this.addons[addonSlug].active = true;
      }
    },
    setAddonDeactivated(addonSlug) {
      if (this.addons?.[addonSlug]) {
        this.addons[addonSlug].active = false;
      }
    },
    setAddonInstalled({ slug, id, basename }) {
      const key = id || slug;
      if (!key) {
        return;
      }
      if (this.addons?.[key]) {
        this.addons[key].installed = true;
        if (basename) {
          this.addons[key].basename = basename;
        }
      }
    },
    showFtpForm({ action, data, form }) {
      this.ftpForm = {
        ...this.ftpForm,
        visible: true,
        action,
        data,
        form: form || ""
      };
    },
    hideFtpForm() {
      this.ftpForm = {
        ...this.ftpForm,
        visible: false,
        action: "",
        data: null,
        form: ""
      };
    },
    setFtpField(field, value) {
      if (field in this.ftpForm) {
        this.ftpForm[field] = value;
      }
    },
    /**
     * Fetches all addons and installs AMP notice when relevant.
     * Vue 2 equivalent: `$_addons/getAddons`.
     */
    async fetchAddonsAction() {
      try {
        const response = await addonsApi.fetchAddons();
        if (response && typeof response === "object") {
          this.addons = response;
          this.addAddonNoticesAction();
        }
        return response;
      } finally {
        this.loaded = true;
      }
    },
    refreshAddons() {
      return this.fetchAddonsAction();
    },
    addAddonNoticesAction() {
      const { addNotice, removeNotice } = useNotices();
      removeNotice("google_amp_addon");
      if (this.isAddonActive("amp") && !this.isAddonActive("google_amp")) {
        const mi = getMiGlobal("mi") || {};
        const installUrl = mi.install_amp_url || "#";
        const installActivateText = typeof installUrl === "string" && installUrl.indexOf("activate") > 0 ? __("Activate", "google-analytics-for-wordpress") : __("Install", "google-analytics-for-wordpress");
        const learnMoreLink = `<a target="_blank" rel="noopener noreferrer" href="${getMonsterInsightsUrl(
          "settings-panel",
          "amp-plugin-notice",
          "https://www.monsterinsights.com/docs/how-to-get-started-with-the-google-amp-addon/"
        )}">`;
        let content;
        if (getMiGlobal("install_plugins", false)) {
          content = sprintf(
            // Translators: Adds link to activate/install plugin and documentation.
            __(
              "In order for the MonsterInsights Google AMP addon to work properly, you need to install the WordPress AMP plugin by Automattic. %1$s%2$s Plugin%3$s | %4$sLearn More%5$s",
              "google-analytics-for-wordpress"
            ),
            `<a href="${installUrl}">`,
            installActivateText,
            "</a>",
            learnMoreLink,
            "</a>"
          );
        } else {
          content = sprintf(
            // Translators: Adds a link to documentation.
            __(
              "In order for the MonsterInsights Google AMP addon to work properly, please ask your webmaster to install the WordPress AMP plugin by Automattic. %1$sLearn More%2$s",
              "google-analytics-for-wordpress"
            ),
            learnMoreLink,
            "</a>"
          );
        }
        addNotice({
          id: "google_amp_addon",
          content,
          type: "error"
        });
      }
    },
    /**
     * Install an addon by url (MonsterInsights addon download URL).
     * Matches Vue 2 `$_addons/installAddon` behavior.
     */
    async installAddonAction(addon) {
      const ftpData = this.ftpForm.hostname ? {
        hostname: this.ftpForm.hostname,
        username: this.ftpForm.username,
        password: this.ftpForm.password,
        connectionType: this.ftpForm.connectionType
      } : null;
      const response = await addonsApi.installAddon(addon.url, ftpData);
      if (response?.form) {
        this.showFtpForm({
          action: "installAddonAction",
          data: addon,
          form: response.form
        });
        return response;
      }
      if (response && !response.error) {
        this.setAddonInstalled({
          slug: addon.slug,
          basename: response.plugin
        });
      }
      return response;
    },
    /**
     * Installs a plugin via slug (non-addon, e.g. WPForms, EDD).
     * Matches Vue 2 `$_addons/installPlugin`.
     */
    async installPluginAction(addon) {
      const response = await addonsApi.installPlugin(addon.slug);
      if (response && !response.error) {
        await this.fetchAddonsAction();
        this.setAddonInstalled({ slug: addon.slug, id: addon.id });
      }
      return response;
    },
    /**
     * Install during onboarding — no store mutations, returns response.
     */
    async installOnboardingPluginAction(addon) {
      return await addonsApi.installPlugin(addon.slug);
    },
    async activateAddonAction(addon) {
      const response = await addonsApi.activateAddon(addon.basename);
      if (response && !response.error) {
        await this.fetchAddonsAction();
        this.setAddonActive(addon.slug);
      }
      return response;
    },
    async activateOnboardingAddonAction(addon) {
      const response = await addonsApi.activateAddon(addon.basename);
      if (response && !response.error) {
        this.setAddonActive(addon.slug);
      }
      return response;
    },
    async deactivateAddonAction(addon) {
      const response = await addonsApi.deactivateAddon(addon.basename);
      if (response && !response.error) {
        await this.fetchAddonsAction();
        this.setAddonDeactivated(addon.slug);
      }
      return response;
    },
    async installWPFormsAction() {
      const response = await addonsApi.installWPForms();
      if (response && !response.error) {
        this.setAddonInstalled({ slug: "wpforms-lite" });
      }
      return response;
    }
  }
});
export {
  _sfc_main as _,
  useToast as a,
  useSaveStatus as b,
  useAddonsStore as c,
  useDialog as d,
  addonsApi as e,
  useModal as u
};
