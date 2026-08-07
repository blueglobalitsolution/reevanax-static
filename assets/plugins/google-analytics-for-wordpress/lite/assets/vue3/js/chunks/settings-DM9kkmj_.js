import { O as getMonsterInsightsUrl, Z as isPro, l as defineStore, j as ref, m as computed } from "./toastStore-CRCNwITM.js";
import { r as miAjax } from "./ajax-B_XS1gT5.js";
const { __: __$1 } = wp.i18n;
const fetchSettings = async () => {
  try {
    return await miAjax("monsterinsights_vue_get_settings");
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-loading-settings",
      "https://www.monsterinsights.com/my-account/support"
    );
    throw {
      title: __$1("Error Loading Settings", "google-analytics-for-wordpress"),
      message: error?.message || __$1("You appear to be offline. Please check your connection.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const saveSettings = async (setting) => {
  const data = { setting: setting.name };
  if (false !== setting.value) {
    data.value = Array.isArray(setting.value) ? JSON.stringify(setting.value) : setting.value;
  }
  try {
    await miAjax("monsterinsights_vue_update_settings", data);
    return true;
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-saving-settings",
      "https://www.monsterinsights.com/my-account/support"
    );
    throw {
      title: __$1("Error Saving Settings", "google-analytics-for-wordpress"),
      message: error?.message || __$1("Could not save settings.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const saveBulkSettings = async (settings) => {
  try {
    return await miAjax("monsterinsights_vue_update_settings_bulk", {
      settings: JSON.stringify(settings)
    });
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-bulk-saving-settings",
      "https://www.monsterinsights.com/my-account/support"
    );
    throw {
      title: __$1("Error Saving Settings", "google-analytics-for-wordpress"),
      message: error?.message || __$1("Could not save settings.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const fetchLocalGtagRemote = async () => {
  try {
    return await miAjax("monsterinsights_vue_get_local_gtag_js_from_remote");
  } catch (error) {
    throw {
      title: __$1("Error Fetching Remote Gtag", "google-analytics-for-wordpress"),
      message: error?.message || error
    };
  }
};
const updateIncludedMetrics = async (metrics) => {
  try {
    return await miAjax("monsterinsights_vue_update_included_metrics", {
      selected_metrics: metrics.selected_metrics
    });
  } catch (error) {
    throw {
      title: __$1("Error Updating Metrics", "google-analytics-for-wordpress"),
      message: error?.message || error
    };
  }
};
const removePremiumMetrics = (metricsData) => {
  const premiumMetrics = [
    "revenue_sales",
    "average_revenue_per_user",
    "average_revenue_per_session",
    "ecommerce_purchases"
  ];
  return {
    data: metricsData.split(",").filter((metric) => !premiumMetrics.includes(metric)).join(","),
    success: true
  };
};
const fetchIncludedMetrics = async () => {
  try {
    const response = await miAjax("monsterinsights_vue_get_user_included_metrics");
    if (response?.success) {
      if (false === isPro()) {
        return removePremiumMetrics(response.data);
      }
      return response;
    }
    return response;
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-fetching-metrics",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __$1("Error Fetching Metrics", "google-analytics-for-wordpress"),
      message: error?.message || __$1("Could not fetch metrics.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const { __ } = wp.i18n;
const useSettingsStore = defineStore("settings", () => {
  const settings = ref({
    automatic_updates: "all",
    // Default from old store
    is_saving: false
    // Added based on mutations
  });
  const includedMetrics = ref([
    {
      id: "sessions",
      name: __("Sessions", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "pageviews",
      name: __("Page Views", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "totalusers",
      name: __("Total Users", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "pageviews_per_user",
      name: __("Page Views/User", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "average_session_duration",
      name: __("Session Duration", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "bounce_rate",
      name: __("Bounce Rate", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "revenue_sales",
      name: __("Revenue/Sales", "google-analytics-for-wordpress"),
      checked: false,
      isPro: true
    },
    {
      id: "average_revenue_per_user",
      name: __("Average revenue per user", "google-analytics-for-wordpress"),
      checked: false,
      isPro: true
    },
    {
      id: "average_revenue_per_session",
      name: __("Average revenue per session", "google-analytics-for-wordpress"),
      checked: false,
      isPro: true
    },
    {
      id: "new_users",
      name: __("New Users", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "ecommerce_purchases",
      name: __("ECommerce Purchases", "google-analytics-for-wordpress"),
      checked: false,
      isPro: true
    },
    {
      id: "engagement_rate",
      name: __("Engagement Rate", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    },
    {
      id: "sessions_per_user",
      name: __("Sessions per user", "google-analytics-for-wordpress"),
      checked: false,
      isPro: false
    }
  ]);
  const history = ref([]);
  const historyIndex = ref(-1);
  const EEACheckerData = ref({
    ga_checker: {},
    compliant: true,
    loaded: false
  });
  const getSettings = computed(() => settings.value);
  const getHistory = computed(() => history.value);
  const getHistoryIndex = computed(() => historyIndex.value);
  const getEEACheckerData = computed(() => EEACheckerData.value);
  const getIncludedMetrics = computed(() => includedMetrics.value);
  const getSetting = (key, defaultValue = null) => {
    return computed(() => {
      if (settings.value && Object.hasOwn(settings.value, key)) {
        return settings.value[key];
      }
      return defaultValue;
    });
  };
  async function fetchSettingsAction() {
    try {
      const data = await fetchSettings();
      if (data) {
        settings.value = { ...data, is_saving: false };
        return data;
      } else {
        const errorDetails = {
          title: __("Fetch Settings Error", "google-analytics-for-wordpress"),
          message: __(
            "Received no data from API.",
            "google-analytics-for-wordpress"
          )
        };
        throw errorDetails;
      }
    } catch (error) {
      const errorDetails = {
        title: error.title || __("Fetch Settings Error", "google-analytics-for-wordpress"),
        message: error.message,
        support_url: error.support_url
      };
      throw errorDetails;
    }
  }
  async function updateSetting(update) {
    const previousValue = settings.value[update.name];
    history.value.splice(historyIndex.value + 1);
    history.value.push({ name: update.name, value: previousValue });
    historyIndex.value++;
    settings.value = {
      ...settings.value,
      [update.name]: update.value,
      is_saving: true
    };
    try {
      await saveSettings(update);
      settings.value.is_saving = false;
    } catch (error) {
      settings.value.is_saving = false;
      throw error;
    }
  }
  async function saveBulkSettingsAction(newSettings) {
    settings.value = { ...settings.value, ...newSettings, is_saving: true };
    try {
      const response = await saveBulkSettings(newSettings);
      settings.value.is_saving = false;
      return response;
    } catch (error) {
      settings.value.is_saving = false;
      throw error;
    }
  }
  async function undoAction() {
    if (historyIndex.value >= 0) {
      const lastChange = history.value[historyIndex.value];
      console.warn("Undo functionality is simplified and may need review.");
      const settingToUndo = { name: lastChange.name, value: lastChange.value };
      const currentValueForRedo = settings.value[lastChange.name];
      settings.value = {
        ...settings.value,
        [lastChange.name]: lastChange.value,
        is_saving: true
      };
      historyIndex.value--;
      try {
        const response = await saveSettings(settingToUndo);
        settings.value.is_saving = false;
        return response;
      } catch (error) {
        settings.value.is_saving = false;
        settings.value = {
          ...settings.value,
          [lastChange.name]: currentValueForRedo,
          is_saving: false
        };
        historyIndex.value++;
        throw error;
      }
    } else {
      console.log("Nothing to undo");
      return Promise.resolve();
    }
  }
  async function redoAction() {
    console.warn("Redo functionality is simplified and may need review.");
    return Promise.resolve();
  }
  async function fetchUserIncludedMetricsAction() {
    try {
      const response = await fetchIncludedMetrics();
      if (typeof response === "string") {
        const metricsIds = response.split(",");
        includedMetrics.value = includedMetrics.value.map((metric) => ({
          ...metric,
          checked: metricsIds.includes(metric.id)
        }));
        return response;
      } else {
        const errorDetails = {
          title: __("Fetch Metrics Error", "google-analytics-for-wordpress"),
          message: __(
            "Received no or invalid data for metrics.",
            "google-analytics-for-wordpress"
          )
        };
        throw errorDetails;
      }
    } catch (error) {
      const errorDetails = {
        title: error.title || __("Fetch Metrics Error", "google-analytics-for-wordpress"),
        message: error.message,
        support_url: error.support_url
      };
      throw errorDetails;
    }
  }
  async function saveIncludedMetricsAction(selectedMetricsString) {
    settings.value.is_saving = true;
    try {
      const response = await updateIncludedMetrics({
        selected_metrics: selectedMetricsString
      });
      const metricsIds = selectedMetricsString.split(",");
      includedMetrics.value = includedMetrics.value.map((metric) => ({
        ...metric,
        checked: metricsIds.includes(metric.id)
      }));
      settings.value.is_saving = false;
      return response;
    } catch (error) {
      settings.value.is_saving = false;
      throw error;
    }
  }
  function updateEEACheckerData(data) {
    EEACheckerData.value = { ...data, loaded: true };
  }
  async function simulateSaveAction() {
    settings.value.is_saving = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        settings.value.is_saving = false;
        resolve({ success: true, message: "Simulation complete" });
      }, 1e3);
    });
  }
  return {
    includedMetrics,
    history,
    historyIndex,
    EEACheckerData,
    // Getters
    getSettings,
    getHistory,
    getHistoryIndex,
    getEEACheckerData,
    getIncludedMetrics,
    getSetting,
    // Actions
    fetchSettings: fetchSettingsAction,
    updateSetting,
    saveBulkSettings: saveBulkSettingsAction,
    undo: undoAction,
    redo: redoAction,
    fetchUserIncludedMetrics: fetchUserIncludedMetricsAction,
    saveIncludedMetrics: saveIncludedMetricsAction,
    updateEEACheckerData,
    simulateSave: simulateSaveAction
  };
});
export {
  fetchLocalGtagRemote as f,
  useSettingsStore as u
};
