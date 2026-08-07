import { k as getMiGlobal } from "./toastStore-CRCNwITM.js";
import { J as useCachedFetch, K as getBackfillCache, L as fetchOverviewSection, N as backfillToWp, R as buildCacheKey, F as isSampleDataEnabled } from "../reports-LbXqkgoM.js";
function reportCacheKeyFrom(dateRange, apiFilters, extraKey) {
  return {
    start: dateRange?.start ?? null,
    end: dateRange?.end ?? null,
    compare: dateRange?.compareReport ?? null,
    compareStart: dateRange?.compareStart ?? null,
    compareEnd: dateRange?.compareEnd ?? null,
    filters: apiFilters ?? null,
    extra: extraKey ?? null
  };
}
function canUseDirectFetch() {
  return !isSampleDataEnabled() && !!getMiGlobal("bearer_token");
}
function fetchCachedReportSection({
  cacheGroup,
  cacheKeyPrefix,
  extraKey = null,
  dateRange,
  apiFilters = null,
  errorLabel,
  onBearer,
  onFallback
}) {
  const keyFrom = (dr, af) => reportCacheKeyFrom(dr, af, extraKey);
  const cached = useCachedFetch({
    cacheKeyPrefix,
    cacheKeyFrom: keyFrom,
    canDirectFetch: canUseDirectFetch,
    // Fast path: bearer request only; its raw result is what gets cached.
    directFetch: (dr) => onBearer({ start: dr?.start || "", end: dr?.end || "" }),
    backfill: async (dr, af, rawData) => {
      const key = buildCacheKey(cacheKeyPrefix, keyFrom, dr, af);
      await backfillToWp(cacheGroup, key, rawData);
    },
    // Cache read. On miss: bearer sites fetch fresh via onBearer and repopulate
    // the cache so later loads hit (this is also the terminal fallback when the
    // fast directFetch failed transiently, surfacing the real Relay error rather
    // than a bare cache-miss). A re-auth error thrown by onBearer propagates to
    // the composable, which surfaces it — never masked by stale cache. Non-bearer
    // sites keep the pre-cache X-Relay fallback.
    wpFetch: async (cacheKey, dr, af) => {
      try {
        return await getBackfillCache(cacheKey, cacheGroup);
      } catch {
        if (!canUseDirectFetch()) {
          return fetchOverviewSection({ dateRange: dr, apiFilters: af, errorLabel, onBearer, onFallback });
        }
        const raw = await onBearer({ start: dr?.start || "", end: dr?.end || "" });
        await backfillToWp(cacheGroup, buildCacheKey(cacheKeyPrefix, keyFrom, dr, af), raw);
        return raw;
      }
    },
    formatResponse: (rawData) => rawData
  });
  return cached.fetchWithCache(dateRange, apiFilters);
}
export {
  fetchCachedReportSection as f
};
