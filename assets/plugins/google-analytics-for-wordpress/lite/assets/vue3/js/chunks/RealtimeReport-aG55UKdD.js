import { _ as __$1, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { G as rejectReport, E as relayFallbackFetch, H as createRequestQueue, F as isSampleDataEnabled } from "../reports-LbXqkgoM.js";
import { k as getMiGlobal, y as onMounted, z as onBeforeUnmount, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, t as toDisplayString, u as unref, c as createElementBlock, s as createCommentVNode, b as createVNode, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { e as ensureBearerToken, c as guardReportingConnection } from "./ajax-B_XS1gT5.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useModal } from "./addons-CSVIjAyY.js";
import { b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import { A as ApexLineChart } from "./ApexLineChart-BDoZ0ljB.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./dateIntervals-BPoui_3H.js";
import "./Icon-Cz1-Vo-r.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./Modal-B9mMTzc_.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./useNotices-BpzNuZJ7.js";
import "./settings-DM9kkmj_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ReportTableModal-CDgzf1E8.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
const { __ } = wp.i18n;
const REALTIME_API_PATH = "api/v3/reporting/realtime";
const realtimeQueue = createRequestQueue({ concurrency: 1, delayMs: 0 });
async function getRealtimeRelayOptions(body = {}) {
  guardReportingConnection();
  const hasToken = await ensureBearerToken();
  const token = getMiGlobal("bearer_token");
  if (!hasToken || !token || typeof token !== "string") {
    throw new Error("Bearer token unavailable or expired");
  }
  const relayApiUrl = (getMiGlobal("relay_api_url") || "").replace(/\/$/, "");
  const pluginVersion = getMiGlobal("plugin_version", "1.0.0");
  return {
    url: relayApiUrl ? `${relayApiUrl}/${REALTIME_API_PATH}` : "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: { ...body, plugin_version: pluginVersion }
  };
}
async function _realtimeQueryRaw(body = {}) {
  const relay = await getRealtimeRelayOptions(body);
  if (!relay.url) {
    throw new Error("Relay URL not configured");
  }
  const response = await fetch(relay.url, {
    method: "POST",
    headers: relay.headers,
    body: JSON.stringify(relay.body)
  });
  const decoded = await response.json();
  if (!response.ok || decoded?.success === false && decoded?.error) {
    const msg = decoded?.error?.message ?? decoded?.error ?? decoded?.message ?? "Request failed";
    throw new Error(typeof msg === "string" ? msg : JSON.stringify(msg));
  }
  return decoded;
}
function extractRealtimeData(body) {
  if (body?.success && body?.data) {
    return body.data?.realtime ? body.data : body.data;
  }
  return body?.realtime ? body : body?.data ?? body;
}
async function fetchRealtimeData() {
  const errorLabel = __("Error loading real-time report data", "google-analytics-for-wordpress");
  const reportingApi = getMiGlobal("reporting_api", {});
  const canUseBearer = await ensureBearerToken();
  if (!canUseBearer && (!reportingApi.url || !reportingApi.key || !reportingApi.token)) {
    return rejectReport(
      errorLabel,
      __("Reporting API credentials are not available.", "google-analytics-for-wordpress")
    );
  }
  if (canUseBearer) {
    return realtimeQueue.enqueue(async () => {
      const body = await _realtimeQueryRaw();
      return extractRealtimeData(body);
    });
  }
  return relayFallbackFetch(
    REALTIME_API_PATH,
    {},
    (body) => extractRealtimeData(body),
    errorLabel
  );
}
function seededRandom(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const ch = seed.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  const x = Math.sin(hash) * 1e4;
  return x - Math.floor(x);
}
function generatePageviewsOvertime() {
  const datapoints = [];
  const labels = [];
  const trendpoints = [];
  const timestamps = [];
  const now = Math.floor(Date.now() / 1e3);
  let previous = 0;
  for (let i = 29; i >= 0; i--) {
    const rand = seededRandom(`pv-${i}`);
    const pageviews = Math.round(5 + rand * 20);
    datapoints.push(pageviews);
    labels.push(i);
    trendpoints.push(i < 29 && previous > 0 ? Math.round((pageviews - previous) / previous * 100 * 100) / 100 : 0);
    previous = pageviews;
    timestamps.push(now - i * 60);
  }
  return { datapoints, labels, trendpoints, timestamps, counts: 30 };
}
function generateTopPages() {
  const pages = [
    "Home",
    "About Us",
    "Blog",
    "Contact",
    "Pricing",
    "Features",
    "Documentation",
    "Support",
    "Login",
    "Register"
  ];
  let total = 0;
  const data = pages.map((title, idx) => {
    const rand = seededRandom(`page-${idx}`);
    const count = Math.max(1, Math.round(50 * (1 - idx * 0.08) * (0.6 + rand * 0.8)));
    const eventCount = Math.round(count * (0.3 + rand * 0.5));
    total += count;
    return { title, count, eventCount };
  });
  return data.map((item) => ({
    ...item,
    percent: total > 0 ? (item.count / total * 100).toFixed(2) : "0.00"
  }));
}
function generateCountries() {
  const countries = [
    { country: "US", name: "United States", iso: "us" },
    { country: "GB", name: "United Kingdom", iso: "gb" },
    { country: "DE", name: "Germany", iso: "de" },
    { country: "FR", name: "France", iso: "fr" },
    { country: "CA", name: "Canada", iso: "ca" },
    { country: "AU", name: "Australia", iso: "au" },
    { country: "IN", name: "India", iso: "in" },
    { country: "BR", name: "Brazil", iso: "br" },
    { country: "JP", name: "Japan", iso: "jp" },
    { country: "NL", name: "Netherlands", iso: "nl" }
  ];
  let total = 0;
  const data = countries.map((c, idx) => {
    const rand = seededRandom(`country-${idx}`);
    const count = Math.max(1, Math.round(30 * (1 - idx * 0.07) * (0.5 + rand)));
    total += count;
    return { ...c, count };
  });
  return data.map((item) => ({
    ...item,
    percent: total > 0 ? (item.count / total * 100).toFixed(2) : "0.00"
  }));
}
function generateCities() {
  const cities = [
    { city: "New York", country: "US", name: "United States", iso: "us" },
    { city: "London", country: "GB", name: "United Kingdom", iso: "gb" },
    { city: "Berlin", country: "DE", name: "Germany", iso: "de" },
    { city: "Paris", country: "FR", name: "France", iso: "fr" },
    { city: "Toronto", country: "CA", name: "Canada", iso: "ca" },
    { city: "Sydney", country: "AU", name: "Australia", iso: "au" },
    { city: "Mumbai", country: "IN", name: "India", iso: "in" },
    { city: "São Paulo", country: "BR", name: "Brazil", iso: "br" },
    { city: "Los Angeles", country: "US", name: "United States", iso: "us" },
    { city: "Amsterdam", country: "NL", name: "Netherlands", iso: "nl" }
  ];
  let total = 0;
  const data = cities.map((c, idx) => {
    const rand = seededRandom(`city-${idx}`);
    const count = Math.max(1, Math.round(20 * (1 - idx * 0.06) * (0.5 + rand)));
    total += count;
    return { ...c, count };
  });
  return data.map((item) => ({
    ...item,
    percent: total > 0 ? (item.count / total * 100).toFixed(2) : "0.00"
  }));
}
function generateRealtimeSample() {
  return {
    realtime: {
      pageviewsovertime: generatePageviewsOvertime(),
      toppages: generateTopPages(),
      countries: generateCountries(),
      cities: generateCities(),
      now: 24
    }
  };
}
const _hoisted_1 = { class: "monsterinsights-report-row monsterinsights-overview-report-two-col" };
const _hoisted_2 = { class: "monsterinsights-overview-report-table monsterinsights-realtime-right-now" };
const _hoisted_3 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_4 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_5 = { class: "monsterinsights-realtime-right-now__body" };
const _hoisted_6 = {
  key: 0,
  class: "monsterinsights-realtime-right-now__count"
};
const _hoisted_7 = {
  key: 1,
  class: "monsterinsights-realtime-right-now__label"
};
const _hoisted_8 = {
  key: 2,
  class: "monsterinsights-realtime-right-now__unavailable"
};
const _hoisted_9 = { class: "monsterinsights-realtime-right-now__note" };
const _hoisted_10 = { class: "monsterinsights-realtime-right-now__refresh" };
const _hoisted_11 = { class: "monsterinsights-overview-report-table monsterinsights-realtime-chart" };
const _hoisted_12 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_13 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_14 = { class: "monsterinsights-realtime-chart__body" };
const _hoisted_15 = {
  key: 0,
  class: "monsterinsights-overview-chart-loading"
};
const _hoisted_16 = {
  key: 2,
  class: "monsterinsights-realtime-chart__empty"
};
const _hoisted_17 = { class: "monsterinsights-overview-report-two-col" };
const MAX_FETCH_ERRORS = 5;
const POLL_INTERVAL_MS = 6e4;
const _sfc_main = {
  __name: "RealtimeReport",
  setup(__props) {
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
    const { showConfirmModal } = useModal();
    const loading = ref(false);
    const rawData = ref(null);
    const seconds = ref(0);
    const fetchErrors = ref(0);
    let pollTimer = null;
    let autoFetchTimer = null;
    let pausedModal = null;
    let isUnmounted = false;
    const realtimeData = computed(() => rawData.value?.realtime ?? null);
    const chartData = computed(() => {
      const pv = realtimeData.value?.pageviewsovertime;
      if (!pv?.datapoints?.length) return { series: [], categories: [] };
      return {
        series: [{
          name: __$1("Pageviews", "google-analytics-for-wordpress"),
          data: pv.datapoints
        }],
        categories: pv.labels.map(
          (m) => sprintf(__$1("%s min ago", "google-analytics-for-wordpress"), m)
        )
      };
    });
    const realtimeChartOptions = {
      xaxis: {
        tickAmount: 6
      }
    };
    const topPagesColumns = [
      { key: "page", label: __$1("Page", "google-analytics-for-wordpress"), sortable: true },
      { key: "count", label: __$1("Pageview Count", "google-analytics-for-wordpress"), sortable: true },
      { key: "percent", label: __$1("Percent of Total", "google-analytics-for-wordpress"), sortable: true },
      { key: "eventCount", label: __$1("Events Count", "google-analytics-for-wordpress"), sortable: true }
    ];
    const topPagesRows = computed(() => {
      const pages = realtimeData.value?.toppages;
      if (!Array.isArray(pages) || pages.length === 0) return [];
      return pages.filter((row) => !shouldHideNotSetValue(row.title)).map((row) => ({
        page: row.title || __$1("(not set)", "google-analytics-for-wordpress"),
        count: formatNum(row.count),
        percent: `${row.percent}%`,
        eventCount: formatNum(row.eventCount)
      }));
    });
    const countriesColumns = [
      { key: "country", label: __$1("Country", "google-analytics-for-wordpress"), sortable: true },
      { key: "count", label: __$1("Count", "google-analytics-for-wordpress"), sortable: true },
      { key: "percent", label: __$1("Percent", "google-analytics-for-wordpress"), sortable: true }
    ];
    const countriesRows = computed(() => {
      const countries = realtimeData.value?.countries;
      if (!Array.isArray(countries) || countries.length === 0) return [];
      return countries.filter((row) => !shouldHideNotSetValue(row.name || row.country)).map((row) => {
        const iso = row.iso ? row.iso.toLowerCase() : (row.country || "").toLowerCase();
        const name = row.name || row.country || __$1("(not set)", "google-analytics-for-wordpress");
        return {
          country: name,
          countryFlag: iso,
          count: formatNum(row.count),
          percent: `${row.percent}%`
        };
      });
    });
    const citiesColumns = [
      { key: "city", label: __$1("City", "google-analytics-for-wordpress"), sortable: true },
      { key: "country", label: __$1("Country", "google-analytics-for-wordpress"), sortable: true },
      { key: "count", label: __$1("Count", "google-analytics-for-wordpress"), sortable: true }
    ];
    const citiesRows = computed(() => {
      const cities = realtimeData.value?.cities;
      if (!Array.isArray(cities) || cities.length === 0) return [];
      return cities.filter((row) => !shouldHideNotSetValue(row.city)).map((row) => {
        const name = row.name || row.country || __$1("(not set)", "google-analytics-for-wordpress");
        return {
          city: row.city || __$1("(not set)", "google-analytics-for-wordpress"),
          country: name,
          count: formatNum(row.count)
        };
      });
    });
    const refreshAgoText = computed(
      () => sprintf(
        __$1("The real-time report was last updated %s seconds ago.", "google-analytics-for-wordpress"),
        seconds.value
      )
    );
    function formatNumber(val) {
      return new Intl.NumberFormat().format(val);
    }
    function loadSampleData() {
      rawData.value = generateRealtimeSample();
    }
    async function loadData(isFirstLoad = false) {
      if (isUnmounted) return;
      if (isBlocked.value || isSampleDataEnabled()) {
        loadSampleData();
        loading.value = false;
        fetchErrors.value = 0;
        seconds.value = 0;
        startPoll();
        return;
      }
      if (fetchErrors.value >= MAX_FETCH_ERRORS) return;
      if (!isFirstLoad && !document.hasFocus()) {
        stopPoll();
        showPausedModal();
        return;
      }
      loading.value = isFirstLoad;
      try {
        rawData.value = await fetchRealtimeData();
        fetchErrors.value = 0;
        seconds.value = 0;
        startPoll();
      } catch {
        fetchErrors.value++;
      } finally {
        loading.value = false;
      }
    }
    function startPoll() {
      if (isUnmounted) return;
      stopPoll();
      pollTimer = setInterval(() => {
        seconds.value++;
      }, 1e3);
      autoFetchTimer = setTimeout(() => {
        clearInterval(pollTimer);
        loadData();
      }, POLL_INTERVAL_MS);
    }
    function stopPoll() {
      if (pollTimer) {
        clearInterval(pollTimer);
        pollTimer = null;
      }
      if (autoFetchTimer) {
        clearTimeout(autoFetchTimer);
        autoFetchTimer = null;
      }
    }
    function showPausedModal() {
      if (isUnmounted) return;
      pausedModal = showConfirmModal({
        title: __$1("Real-Time Report Paused", "google-analytics-for-wordpress"),
        message: __$1("The Real-Time Report automatically paused due to inactivity. Click Resume to continue receiving live data.", "google-analytics-for-wordpress"),
        confirmButtonText: __$1("Resume", "google-analytics-for-wordpress"),
        cancelButtonText: __$1("Close", "google-analytics-for-wordpress"),
        clickToClose: true,
        escToClose: true,
        onConfirm: () => {
          loadData(true);
        }
      });
    }
    function dismissPausedModal() {
      if (pausedModal) {
        pausedModal.close();
        pausedModal = null;
      }
    }
    onMounted(() => {
      loadData(true);
    });
    onBeforeUnmount(() => {
      isUnmounted = true;
      stopPoll();
      dismissPausedModal();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "upsell-feature": "realtime"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("h3", _hoisted_4, toDisplayString(unref(__$1)("Right Now", "google-analytics-for-wordpress")), 1)
              ]),
              createBaseVNode("div", _hoisted_5, [
                realtimeData.value ? (openBlock(), createElementBlock("div", _hoisted_6, toDisplayString(formatNumber(realtimeData.value.now || 0)), 1)) : createCommentVNode("", true),
                realtimeData.value ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(unref(__$1)("Active users on site", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true),
                !realtimeData.value && !loading.value ? (openBlock(), createElementBlock("p", _hoisted_8, toDisplayString(unref(__$1)("The real-time graph of visitors over time is not currently available for this site. Please try again later.", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true),
                createBaseVNode("p", _hoisted_9, toDisplayString(unref(__$1)("Important: this only includes users who are tracked in real-time. Not all users are tracked in real-time including (but not limited to) logged-in site administrators, certain mobile users, and users who match a Google Analytics filter.", "google-analytics-for-wordpress")), 1),
                createBaseVNode("p", _hoisted_10, toDisplayString(unref(__$1)("The real-time report automatically updates approximately every 60 seconds.", "google-analytics-for-wordpress")) + " " + toDisplayString(refreshAgoText.value) + " " + toDisplayString(unref(__$1)("The latest data will be automatically shown on this page when it becomes available.", "google-analytics-for-wordpress")), 1)
              ])
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("h3", _hoisted_13, toDisplayString(unref(__$1)("Pageviews Per Minute", "google-analytics-for-wordpress")), 1)
              ]),
              createBaseVNode("div", _hoisted_14, [
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_15, [
                  createVNode(LoadingSpinnerInline)
                ])) : chartData.value.series && chartData.value.series.length ? (openBlock(), createBlock(unref(ApexLineChart), {
                  key: 1,
                  data: chartData.value,
                  height: 250,
                  "chart-type": "area",
                  "show-legend": false,
                  "chart-options": realtimeChartOptions
                }, null, 8, ["data"])) : (openBlock(), createElementBlock("div", _hoisted_16, toDisplayString(unref(__$1)("No pageview data available.", "google-analytics-for-wordpress")), 1))
              ])
            ])
          ]),
          createVNode(_sfc_main$1, {
            title: unref(__$1)("Top Pages", "google-analytics-for-wordpress"),
            columns: topPagesColumns,
            rows: topPagesRows.value,
            loading: loading.value,
            "empty-message": unref(__$1)("No pageviews currently.", "google-analytics-for-wordpress"),
            "has-load-more": false
          }, null, 8, ["title", "rows", "loading", "empty-message"]),
          createBaseVNode("div", _hoisted_17, [
            createVNode(_sfc_main$1, {
              title: unref(__$1)("Top Countries", "google-analytics-for-wordpress"),
              columns: countriesColumns,
              rows: countriesRows.value,
              loading: loading.value,
              "empty-message": unref(__$1)("No traffic currently.", "google-analytics-for-wordpress"),
              "has-load-more": false
            }, null, 8, ["title", "rows", "loading", "empty-message"]),
            createVNode(_sfc_main$1, {
              title: unref(__$1)("Top Cities", "google-analytics-for-wordpress"),
              columns: citiesColumns,
              rows: citiesRows.value,
              loading: loading.value,
              "empty-message": unref(__$1)("No traffic currently.", "google-analytics-for-wordpress"),
              "has-load-more": false
            }, null, 8, ["title", "rows", "loading", "empty-message"])
          ])
        ]),
        _: 1
      });
    };
  }
};
const RealtimeReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0bc77549"]]);
export {
  RealtimeReport as default
};
