import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { C as watch, y as onMounted, j as ref } from "./toastStore-CRCNwITM.js";
function useReport(options = {}) {
  const {
    fetch,
    watch: watchSources = [],
    sample = null,
    isBlocked = null,
    sampleWhen = null,
    transform = null,
    immediate = true,
    guard = null,
    beforeFetch = null
  } = options;
  const rawData = ref(null);
  const loading = ref(false);
  const error = ref(null);
  let loadId = 0;
  const shouldUseSample = () => sampleWhen ? !!sampleWhen() : !!isBlocked?.value;
  function loadSample() {
    if (!sample) {
      return;
    }
    const result = sample();
    rawData.value = transform ? transform(result) : result;
    loading.value = false;
    error.value = null;
  }
  async function reload() {
    if (guard && !guard()) {
      return;
    }
    if (shouldUseSample()) {
      loadSample();
      return;
    }
    if (beforeFetch && !beforeFetch()) {
      return;
    }
    const currentLoadId = ++loadId;
    loading.value = true;
    error.value = null;
    try {
      const response = await fetch();
      if (currentLoadId !== loadId) {
        return;
      }
      rawData.value = transform ? transform(response) : response;
    } catch (err) {
      if (currentLoadId !== loadId) {
        return;
      }
      error.value = err?.message || err?.title || __("Error loading report data.", "google-analytics-for-wordpress");
    } finally {
      if (currentLoadId === loadId) {
        loading.value = false;
      }
    }
  }
  if (watchSources.length > 0) {
    watch(watchSources, () => reload(), { deep: true });
  }
  if (immediate) {
    onMounted(() => reload());
  }
  return { rawData, loading, error, reload, loadSample };
}
export {
  useReport as u
};
