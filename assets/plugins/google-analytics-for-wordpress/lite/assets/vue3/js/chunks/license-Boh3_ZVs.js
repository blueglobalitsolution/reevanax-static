import { k as getMiGlobal, O as getMonsterInsightsUrl, l as defineStore, N as isNetworkAdmin, p as getUrl } from "./toastStore-CRCNwITM.js";
import { r as miAjax } from "./ajax-B_XS1gT5.js";
import { u as useNotices } from "./useNotices-BpzNuZJ7.js";
const { __: __$1, sprintf } = wp.i18n;
const fetchLicense = async () => {
  try {
    return await miAjax("monsterinsights_vue_get_license");
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-loading-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue fetching your license details, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred while fetching license.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const verifyLicense = async (key, isNetwork = false) => {
  try {
    return await miAjax("monsterinsights_verify_license", {
      license: key,
      network: isNetwork || void 0
    });
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-verifying-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue verifying your license, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred during license verification.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const validateLicense = async (isNetwork = false) => {
  try {
    return await miAjax("monsterinsights_validate_license", {
      network: isNetwork || void 0
    });
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-validating-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue validating your license, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred while validating license.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const deactivateLicense = async (key, isNetwork = false) => {
  try {
    return await miAjax("monsterinsights_deactivate_license", {
      license: key,
      network: isNetwork || void 0
    });
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-deactivating-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue deactivating your license, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred while deactivating license.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const deactivateExpiredLicense = async (key, isNetwork = false) => {
  try {
    return await miAjax("monsterinsights_deactivate_expired_license", {
      license: key,
      network: isNetwork || void 0
    });
  } catch (error) {
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-deactivating-expired-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue deactivating your expired license, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred while deactivating your expired license.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const getUpgradeLink = async (key) => {
  try {
    const response = await miAjax("monsterinsights_connect_url", {
      key,
      network: getMiGlobal("network")
    });
    if (response) {
      return response;
    }
    throw {
      title: __$1("Error Getting Upgrade Link", "google-analytics-for-wordpress"),
      message: __$1("Empty response from server when trying to get upgrade link.", "google-analytics-for-wordpress"),
      support_url: getMonsterInsightsUrl(
        "admin-notices",
        "error-upgrading-license",
        "https://www.monsterinsights.com/my-account/support/"
      )
    };
  } catch (error) {
    if (error?.title) {
      throw error;
    }
    const support_url = getMonsterInsightsUrl(
      "admin-notices",
      "error-upgrading-license",
      "https://www.monsterinsights.com/my-account/support/"
    );
    const title = sprintf(
      __$1(
        "Oops! There was an issue getting your upgrade link, please try again. If the issue persists, please %1$scontact our support team%2$s.",
        "google-analytics-for-wordpress"
      ),
      `<a target="_blank" href="${support_url}">`,
      `</a>`
    );
    let message = "";
    if (error?.error) {
      message = error.error;
    } else if (typeof error === "string" && error.length > 0) {
      message = error;
    } else {
      message = error?.message || __$1(
        "An unknown error occurred while getting your upgrade link.",
        "google-analytics-for-wordpress"
      );
    }
    throw { title, message, support_url };
  }
};
const licenseApi = {
  fetchLicense,
  verifyLicense,
  validateLicense,
  deactivateLicense,
  deactivateExpiredLicense,
  getUpgradeLink
};
const { __ } = wp.i18n;
function getLicenseFromGlobals() {
  const license = getMiGlobal("license", {});
  return {
    key: license.key || "",
    type: license.type || "",
    is_expired: license.is_expired || false,
    is_disabled: license.is_disabled || false,
    is_invalid: license.is_invalid !== false,
    // Default to true if not explicitly false
    expiry_date: license.expiry_date || ""
  };
}
function getNetworkLicenseFromGlobals() {
  const license = getMiGlobal("license_network", {});
  return {
    key: license.key || "",
    type: license.type || "",
    is_expired: license.is_expired || false,
    is_disabled: license.is_disabled || false,
    is_invalid: license.is_invalid !== false,
    // Default to true if not explicitly false
    expiry_date: license.expiry_date || ""
  };
}
const useLicenseStore = defineStore("license", {
  state: () => ({
    license: getLicenseFromGlobals(),
    license_network: getNetworkLicenseFromGlobals(),
    isLoading: false
    // For UI feedback during API calls
  }),
  getters: {
    // Direct state access is common in Pinia, but getters can be defined for computed/derived state
    // Or to maintain a similar interface to the old Vuex getters if preferred by components
    getLicenseDetails: (state) => state.license,
    getLicenseNetworkDetails: (state) => state.license_network,
    activeLicense(state) {
      return isNetworkAdmin() ? state.license_network : state.license;
    },
    activeLicenseType() {
      return this.activeLicense ? this.activeLicense.type : "";
    },
    isCurrentLicenseActive() {
      const license = this.activeLicense;
      return license?.type && !license.is_expired && !license.is_disabled && !license.is_invalid;
    },
    // Example of a more specific getter if needed
    isLicenseActive: (state) => state.license.type && !state.license.is_expired && !state.license.is_disabled && !state.license.is_invalid,
    isNetworkLicenseActive: (state) => state.license_network.type && !state.license_network.is_expired && !state.license_network.is_disabled && !state.license_network.is_invalid,
    isLicenseExpired: (state) => {
      const siteLicenseIsExpired = state.license?.is_expired;
      const networkLicenseIsExpired = state.license_network?.is_expired;
      return !!(siteLicenseIsExpired || networkLicenseIsExpired);
    },
    activeLicenseExpiryDate: (state) => {
      const licenseToUse = isNetworkAdmin() ? state.license_network : state.license;
      return licenseToUse?.expiry_date ? licenseToUse.expiry_date : "";
    },
    // Feature Access Getters for Upsell System
    /**
     * Check if user has Pro or higher license
     * @returns {boolean}
     */
    hasProAccess() {
      const licenseType = this.activeLicenseType;
      return ["Pro", "Elite"].includes(licenseType);
    },
    /**
     * Check if user has Plus or higher license
     * @returns {boolean}
     */
    hasPlusAccess() {
      const licenseType = this.activeLicenseType;
      return ["Starter", "Plus", "Pro", "Elite"].includes(licenseType);
    },
    /**
     * Check if user is on Lite license
     * @returns {boolean}
     */
    isLiteLicense() {
      const licenseType = this.activeLicenseType;
      return licenseType === "Lite" || !licenseType;
    },
    /**
     * Check if specific feature is available for current license
     * @returns {function(string): boolean}
     */
    hasFeatureAccess() {
      return (feature) => {
        const licenseType = this.activeLicenseType;
        const featureMap = {
          "custom-dashboard": ["Pro", "Elite"],
          ecommerce: ["Starter", "Plus", "Pro", "Elite"],
          forms: ["Starter", "Plus", "Pro", "Elite"],
          "search-console": ["Starter", "Plus", "Pro", "Elite"],
          "real-time": ["Starter", "Plus", "Pro", "Elite"],
          publishers: ["Pro", "Elite"],
          media: ["Starter", "Plus", "Pro", "Elite"],
          dimensions: ["Starter", "Plus", "Pro", "Elite"],
          "popular-products": ["Starter", "Plus", "Pro", "Elite"],
          "site-speed": ["Starter", "Plus", "Pro", "Elite"]
        };
        return featureMap[feature]?.includes(licenseType) || false;
      };
    },
    /**
     * Get minimum required license for a feature
     * @returns {function(string): string}
     */
    getMinimumLicenseForFeature() {
      return (feature) => {
        const featureMap = {
          "custom-dashboard": "Pro",
          ecommerce: "Plus",
          forms: "Plus",
          "search-console": "Plus",
          "real-time": "Plus",
          publishers: "Pro",
          media: "Plus",
          dimensions: "Plus",
          "popular-products": "Plus",
          "site-speed": "Plus"
        };
        return featureMap[feature] || "Plus";
      };
    }
  },
  actions: {
    // Mutations from Vuex are converted into direct state modifications here
    updateLicenseKey(key) {
      this.license.key = key;
    },
    updateLicenseData(licenseData) {
      this.license = { ...this.license, ...licenseData };
    },
    updateNetworkLicenseKey(key) {
      this.license_network.key = key;
    },
    updateNetworkLicenseData(licenseData) {
      this.license_network = { ...this.license_network, ...licenseData };
    },
    // Initial actions based on Vuex store
    async fetchLicenseData() {
      this.isLoading = true;
      try {
        const response = await licenseApi.fetchLicense();
        if (response.network) {
          this.updateNetworkLicenseData(response.network);
        }
        if (response.site) {
          this.updateLicenseData(response.site);
        }
        this.addLicenseNotices();
      } catch {
      } finally {
        this.isLoading = false;
      }
    },
    async verifyLicense(licenseKey, isNetwork = false) {
      this.isLoading = true;
      try {
        const response = await licenseApi.verifyLicense(licenseKey, isNetwork);
        const licenseData = {
          key: licenseKey,
          type: response.license_type || "",
          is_expired: false,
          is_disabled: false,
          is_invalid: false
        };
        if (isNetwork) {
          this.updateNetworkLicenseData(licenseData);
        } else {
          this.updateLicenseData(licenseData);
        }
        this.addLicenseNotices();
        return response;
      } finally {
        this.isLoading = false;
      }
    },
    // Debounced version - apiVerifyLicense in Vuex
    // We can define it within the store or call a debounced api function directly.
    // For simplicity, let's assume api.verifyLicense can be called directly and components can debounce if needed,
    // or we create a debounced version of the above action if used frequently from multiple places.
    async updateLicense(newLicenseKey) {
      return this.verifyLicense(newLicenseKey, false);
    },
    async updateNetworkLicense(newLicenseKey) {
      this.updateNetworkLicenseKey(newLicenseKey);
      return this.verifyLicense(newLicenseKey, true);
    },
    async validateLicense(isNetwork = false) {
      this.isLoading = true;
      try {
        const response = await licenseApi.validateLicense(isNetwork);
        if (response?.data?.success) {
          if (isNetwork) {
            if (response.data.license) {
              this.updateNetworkLicenseData(response.data.license);
            }
          } else {
            if (response.data.license) {
              this.updateLicenseData(response.data.license);
            }
          }
          this.addLicenseNotices();
        }
        return response;
      } finally {
        this.isLoading = false;
      }
    },
    async deactivateLicense(isNetwork = false) {
      this.isLoading = true;
      try {
        const licenseKeyToDeactivate = isNetwork ? this.license_network.key : this.license.key;
        const response = await licenseApi.deactivateLicense(
          licenseKeyToDeactivate,
          isNetwork
        );
        const clearedLicense = {
          key: "",
          type: "",
          is_expired: false,
          is_disabled: false,
          is_invalid: true
        };
        if (isNetwork) {
          this.updateNetworkLicenseData(clearedLicense);
        } else {
          this.updateLicenseData(clearedLicense);
        }
        this.addLicenseNotices();
        return response;
      } finally {
        this.isLoading = false;
      }
    },
    async deactivateExpiredLicense(isNetwork = false) {
      this.isLoading = true;
      try {
        const licenseKeyToDeactivate = isNetwork ? this.license_network.key : this.license.key;
        const response = await licenseApi.deactivateExpiredLicense(
          licenseKeyToDeactivate,
          isNetwork
        );
        const clearedLicense = {
          key: "",
          type: "",
          is_expired: false,
          is_disabled: false,
          is_invalid: true
        };
        if (isNetwork) {
          this.updateNetworkLicenseData(clearedLicense);
        } else {
          this.updateLicenseData(clearedLicense);
        }
        this.addLicenseNotices();
        return response;
      } finally {
        this.isLoading = false;
      }
    },
    removeLicenseNotices() {
      const { removeNotice } = useNotices();
      removeNotice("license_expired");
      removeNotice("license_disabled");
      removeNotice("license_invalid");
    },
    addLicenseNotices() {
      const { addNotice } = useNotices();
      this.removeLicenseNotices();
      const licenseToUse = isNetworkAdmin() ? this.license_network : this.license;
      licenseToUse.type;
      getUrl("pricing", "license-notice");
      __("Upgrade Now", "google-analytics-dashboard-for-wp");
      if (licenseToUse.is_expired) {
        addNotice({
          id: "license_expired",
          title: __(
            "Your license has expired.",
            "google-analytics-for-wordpress"
          ),
          content: __(
            "To ensure tracking works properly, reactivate your license",
            "google-analytics-for-wordpress"
          ),
          button: {
            enabled: true,
            text: __("Reactivate License", "google-analytics-for-wordpress"),
            link: getUrl(
              "admin-notices",
              "expired-license",
              "https://www.monsterinsights.com/login/"
            )
          },
          icon: '<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5742 19.6992L15.2617 1.78125C14.4883 0.449219 12.4688 0.40625 11.6953 1.78125L1.38281 19.6992C0.609375 21.0312 1.59766 22.75 3.1875 22.75H23.7695C25.3594 22.75 26.3477 21.0742 25.5742 19.6992ZM13.5 15.9609C14.5742 15.9609 15.4766 16.8633 15.4766 17.9375C15.4766 19.0547 14.5742 19.9141 13.5 19.9141C12.3828 19.9141 11.5234 19.0547 11.5234 17.9375C11.5234 16.8633 12.3828 15.9609 13.5 15.9609ZM11.6094 8.87109C11.5664 8.57031 11.8242 8.3125 12.125 8.3125H14.832C15.1328 8.3125 15.3906 8.57031 15.3477 8.87109L15.0469 14.7148C15.0039 15.0156 14.7891 15.1875 14.5312 15.1875H12.4258C12.168 15.1875 11.9531 15.0156 11.9102 14.7148L11.6094 8.87109Z" fill="#E64949"/></svg>',
          type: "error"
        });
        return;
      }
      if (licenseToUse.is_disabled) {
        addNotice({
          id: "license_disabled",
          content: __(
            "Your license key for MonsterInsights has been disabled. Please use a different key.",
            "google-analytics-for-wordpress"
          ),
          type: "error"
        });
        return;
      }
      if (licenseToUse.is_invalid) {
        addNotice({
          id: "license_invalid",
          content: __(
            "Your license key for MonsterInsights is invalid. The key no longer exists or the user associated with the key has been deleted. Please use a different key.",
            "google-analytics-for-wordpress"
          ),
          type: "error"
        });
      }
    }
  }
});
export {
  licenseApi as l,
  useLicenseStore as u
};
