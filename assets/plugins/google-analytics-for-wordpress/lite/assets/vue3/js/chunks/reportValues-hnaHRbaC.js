import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
function isNotSetValue(value) {
  if (value === void 0 || value === null) {
    return true;
  }
  const normalized = String(value).trim();
  return normalized === "" || normalized.toLowerCase() === "(not set)";
}
function notSetLabel(value) {
  return isNotSetValue(value) ? __("(not set)", "google-analytics-for-wordpress") : String(value);
}
function shouldHideNotSetValue(value) {
  if (!isNotSetValue(value)) {
    return false;
  }
  const settingsStore = useSettingsStore();
  const setting = settingsStore.getSetting("hide_not_set_values_from_reports", "on").value;
  return setting !== "off";
}
export {
  notSetLabel as n,
  shouldHideNotSetValue as s
};
