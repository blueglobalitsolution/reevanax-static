import { u as useAuthGate } from "./useAuthGate-DCWToggq.js";
import { j as getMiGlobal, k as isPro, i as isAddonActive } from "./ajax-B_XS1gT5.js";
import { m as computed } from "./toastStore-CRCNwITM.js";
function useReportPermissions(options = {}) {
  const minTier = String(options.minTier ?? "lite").toLowerCase();
  const { requiredAddon = "" } = options;
  const {
    isAuthenticated,
    showAuthModal,
    showReAuthModal,
    shouldBlurContent,
    openAuthModal,
    openReAuthModal,
    closeAuthModal
  } = useAuthGate();
  const canViewReports = computed(() => getMiGlobal("can_view_reports", true));
  const isPremium = computed(() => isPro());
  const licenseType = computed(() => {
    const license = getMiGlobal("license", {});
    if (license?.is_agency) {
      return "agency";
    }
    return license?.type || "lite";
  });
  const showUpsell = computed(() => {
    {
      return true;
    }
  });
  const showUpsellPlus = computed(() => {
    {
      return true;
    }
  });
  const addonRequired = computed(() => {
    if (!requiredAddon) {
      return false;
    }
    return !isAddonActive(requiredAddon);
  });
  const needsAddonOnly = computed(() => {
    {
      return false;
    }
  });
  const isBlocked = computed(() => {
    {
      return minTier !== "lite";
    }
  });
  const needsReAuth = computed(() => {
    return canViewReports.value && isAuthenticated.value === false;
  });
  const shouldBlur = computed(() => shouldBlurContent.value);
  return {
    canViewReports,
    isAuthenticated,
    isPremium,
    licenseType,
    showUpsell,
    showUpsellPlus,
    addonRequired,
    needsAddonOnly,
    isBlocked,
    needsReAuth,
    shouldBlur,
    showAuthModal,
    showReAuthModal,
    openAuthModal,
    openReAuthModal,
    closeAuthModal
  };
}
export {
  useReportPermissions as u
};
