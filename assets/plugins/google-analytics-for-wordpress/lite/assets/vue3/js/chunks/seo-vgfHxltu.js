import { r as miAjax } from "./ajax-B_XS1gT5.js";
import { k as getMiGlobal } from "./toastStore-CRCNwITM.js";
const { __ } = wp.i18n;
const installAioseo = async () => {
  try {
    const response = await miAjax("monsterinsights_vue_install_plugin", {
      slug: "all-in-one-seo-pack"
    });
    return response;
  } catch (error) {
    throw {
      title: __("AIOSEO installation failed", "google-analytics-for-wordpress"),
      message: error?.message || __("AJAX request failed", "google-analytics-for-wordpress")
    };
  }
};
const activateAioseo = async (pluginBasename) => {
  try {
    const response = await miAjax("monsterinsights_activate_addon", {
      nonce: getMiGlobal("activate_nonce", ""),
      isnetwork: getMiGlobal("network", false),
      plugin: pluginBasename
    });
    return response;
  } catch (error) {
    throw {
      title: __("AIOSEO activation failed", "google-analytics-for-wordpress"),
      message: error?.message || __("AJAX request failed", "google-analytics-for-wordpress")
    };
  }
};
const api = {
  installAioseo,
  activateAioseo
};
export {
  api as a
};
