import { p as getUrl } from "./toastStore-CRCNwITM.js";
import { r as miAjax } from "./ajax-B_XS1gT5.js";
const { __ } = wp.i18n;
const fetchAuth = async () => {
  try {
    return await miAjax("monsterinsights_vue_get_profile");
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-auth",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error loading auth details", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const getAuthRedirect = async (network = false) => {
  try {
    return await miAjax("monsterinsights_maybe_authenticate", {
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-auth-redirect",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error getting auth redirect", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const getReAuthRedirect = async (network = false) => {
  try {
    return await miAjax("monsterinsights_maybe_reauthenticate", {
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-loading-reauth-redirect",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error getting re-auth redirect", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const verifyAuth = async (network = false) => {
  try {
    return await miAjax("monsterinsights_maybe_verify", {
      isnetwork: network
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-verifying-auth",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error verifying auth", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const deleteAuth = async (network = false, force = false) => {
  try {
    return await miAjax("monsterinsights_maybe_delete", {
      isnetwork: network,
      forcedelete: force || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-deleting-auth",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error de-authenticating", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const updateManualV4 = async (v4 = "", network = false) => {
  try {
    return await miAjax("monsterinsights_update_manual_v4", {
      manual_v4_code: v4,
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-updating-v4",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error updating V4 code", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const updateMeasurementProtocolSecret = async (value = "", network = false) => {
  try {
    return await miAjax("monsterinsights_update_measurement_protocol_secret", {
      value,
      isnetwork: network || void 0
    });
  } catch (error) {
    const support_url = getUrl(
      "admin-notices",
      "error-updating-mpsecret",
      "https://www.monsterinsights.com/my-account/support/"
    );
    throw {
      title: __("Error updating Measurement Protocol Secret", "google-analytics-for-wordpress"),
      message: error?.message || __("An error occurred.", "google-analytics-for-wordpress"),
      support_url
    };
  }
};
const authApi = {
  fetchAuth,
  getAuthRedirect,
  getReAuthRedirect,
  verifyAuth,
  deleteAuth,
  updateManualV4,
  updateMeasurementProtocolSecret
};
export {
  authApi as a
};
