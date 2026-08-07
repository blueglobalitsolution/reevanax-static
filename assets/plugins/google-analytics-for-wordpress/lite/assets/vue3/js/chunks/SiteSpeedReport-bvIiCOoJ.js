import { _ as __$1, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { G as rejectReport, E as relayFallbackFetch, H as createRequestQueue, F as isSampleDataEnabled, _ as _sfc_main$1 } from "../reports-LbXqkgoM.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { k as getMiGlobal, j as ref, y as onMounted, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, i as normalizeClass, b as createVNode, E as createBlock, D as withCtx, s as createCommentVNode, F as Fragment, n as normalizeStyle, f as renderList, m as computed } from "./toastStore-CRCNwITM.js";
import { e as ensureBearerToken, c as guardReportingConnection, q as sanitizeHtml } from "./ajax-B_XS1gT5.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./auth-CC6F9_ZC.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./dateIntervals-BPoui_3H.js";
import "./Icon-Cz1-Vo-r.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./UniversallyPromo-NH8NC5TQ.js";
const { __ } = wp.i18n;
const SITE_SPEED_API_PATH = "api/v3/reporting/site-speed";
const siteSpeedQueue = createRequestQueue({ concurrency: 1, delayMs: 0 });
async function getSiteSpeedRelayOptions(body = {}) {
  guardReportingConnection();
  const hasToken = await ensureBearerToken();
  const token = getMiGlobal("bearer_token");
  if (!hasToken || !token || typeof token !== "string") {
    throw new Error("Bearer token unavailable or expired");
  }
  const relayApiUrl = (getMiGlobal("relay_api_url") || "").replace(/\/$/, "");
  const pluginVersion = getMiGlobal("plugin_version", "1.0.0");
  return {
    url: relayApiUrl ? `${relayApiUrl}/${SITE_SPEED_API_PATH}` : "",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: { ...body, plugin_version: pluginVersion }
  };
}
async function _siteSpeedQueryRaw(body = {}) {
  const relay = await getSiteSpeedRelayOptions(body);
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
function extractSiteSpeedData(body) {
  if (body?.success && body?.data) {
    return body.data;
  }
  return body?.data ?? body;
}
async function fetchSiteSpeedData(strategy = "desktop", force = false) {
  const errorLabel = __("Error loading site speed report data", "google-analytics-for-wordpress");
  const reportingApi = getMiGlobal("reporting_api", {});
  const canUseBearer = await ensureBearerToken();
  if (!canUseBearer && (!reportingApi.url || !reportingApi.key || !reportingApi.token)) {
    return rejectReport(
      errorLabel,
      __("Reporting API credentials are not available.", "google-analytics-for-wordpress")
    );
  }
  const requestBody = { strategy, force };
  if (canUseBearer) {
    return siteSpeedQueue.enqueue(async () => {
      const body = await _siteSpeedQueryRaw(requestBody);
      return extractSiteSpeedData(body);
    });
  }
  return relayFallbackFetch(
    SITE_SPEED_API_PATH,
    requestBody,
    (body) => extractSiteSpeedData(body),
    errorLabel
  );
}
function generateSiteSpeedSample(strategy = "desktop") {
  return {
    score: strategy === "desktop" ? 0.68 : 0.52,
    strategy,
    "server-response-time": {
      value: strategy === "desktop" ? "0.45s" : "0.62s",
      title: "Server Response Time",
      description: "Initial server response time is the time it takes for the server to respond with the first byte of data.",
      score: strategy === "desktop" ? 0.88 : 0.72
    },
    "first-contentful-paint": {
      value: strategy === "desktop" ? "1.20s" : "2.40s",
      title: "First Contentful Paint",
      description: "First Contentful Paint marks the time at which the first text or image is painted.",
      score: strategy === "desktop" ? 0.91 : 0.64
    },
    "total-blocking-time": {
      value: strategy === "desktop" ? "0.12s" : "0.38s",
      title: "Total Blocking Time",
      description: "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms.",
      score: strategy === "desktop" ? 0.95 : 0.58
    },
    "interactive": {
      value: strategy === "desktop" ? "2.10s" : "4.50s",
      title: "Time to Interactive",
      description: "Time to Interactive is the amount of time it takes for the page to become fully interactive.",
      score: strategy === "desktop" ? 0.85 : 0.42
    },
    "cumulative-layout-shift": {
      value: strategy === "desktop" ? "0.05s" : "0.12s",
      title: "Cumulative Layout Shift",
      description: "Cumulative Layout Shift measures the movement of visible elements within the viewport.",
      score: strategy === "desktop" ? 0.98 : 0.78
    },
    "largest-contentful-paint": {
      value: strategy === "desktop" ? "1.80s" : "3.60s",
      title: "Largest Contentful Paint",
      description: "Largest Contentful Paint marks the time at which the largest text or image is painted.",
      score: strategy === "desktop" ? 0.72 : 0.38
    },
    "interaction-to-next-paint": {
      value: strategy === "desktop" ? "180ms" : "320ms",
      title: "Interaction to Next Paint",
      description: "Interaction to Next Paint is a metric that assesses a page's overall responsiveness to user interactions.",
      // Same 0–1 scale as other metrics; SiteSpeedReport.getStatIcon() does Math.round(score * 100).
      score: strategy === "desktop" ? 1 : 0.55
    }
  };
}
const _hoisted_1 = { class: "monsterinsights-site-speed-header" };
const _hoisted_2 = { class: "monsterinsights-site-speed-header__left" };
const _hoisted_3 = { class: "monsterinsights-site-speed-header__title" };
const _hoisted_4 = { class: "monsterinsights-device-toggle" };
const _hoisted_5 = { class: "monsterinsights-site-speed-header__right" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { class: "monsterinsights-site-speed-report" };
const _hoisted_9 = {
  key: 0,
  class: "monsterinsights-site-speed-empty"
};
const _hoisted_10 = { class: "monsterinsights-site-speed-empty__title" };
const _hoisted_11 = { class: "monsterinsights-site-speed-empty__text" };
const _hoisted_12 = {
  key: 1,
  class: "monsterinsights-site-speed-loading"
};
const _hoisted_13 = { class: "monsterinsights-site-speed-main" };
const _hoisted_14 = { class: "monsterinsights-site-speed-gauge" };
const _hoisted_15 = { class: "monsterinsights-speed-indicator" };
const _hoisted_16 = { class: "monsterinsights-speed-indicator__device-icon" };
const _hoisted_17 = {
  key: 0,
  width: "35",
  height: "56",
  viewBox: "0 0 35 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_18 = {
  key: 1,
  width: "64",
  height: "56",
  viewBox: "0 0 64 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_19 = { class: "monsterinsights-speed-indicator__label" };
const _hoisted_20 = {
  class: "monsterinsights-speed-indicator__ring",
  viewBox: "-4 -4 114 114",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_21 = ["stroke", "stroke-dasharray"];
const _hoisted_22 = { class: "monsterinsights-site-speed-metrics" };
const _hoisted_23 = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_24 = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_25 = {
  key: 2,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_26 = { class: "monsterinsights-site-speed-metric__value" };
const _hoisted_27 = { class: "monsterinsights-site-speed-metric__label" };
const _hoisted_28 = {
  key: 0,
  class: "monsterinsights-site-speed-accordion"
};
const _hoisted_29 = { class: "monsterinsights-site-speed-accordion__title" };
const _hoisted_30 = ["onClick"];
const _hoisted_31 = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_32 = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_33 = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_34 = { class: "monsterinsights-site-speed-accordion__header-text" };
const _hoisted_35 = ["innerHTML"];
const STORAGE_KEY = "monsterinsights_sitespeed_current_device";
const _sfc_main = {
  __name: "SiteSpeedReport",
  setup(__props) {
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
    const strategy = ref(localStorage.getItem(STORAGE_KEY) || "desktop");
    const siteSpeedData = ref(null);
    const isLoading = ref(false);
    const isAuditing = ref(false);
    const openAccordion = ref(null);
    const formattedScore = computed(() => {
      if (!siteSpeedData.value) return 0;
      return Math.round((siteSpeedData.value.score || 0) * 100);
    });
    const scoreColor = computed(() => {
      const s = formattedScore.value;
      if (s >= 90) return "#27AE60";
      if (s >= 50) return "#F2994A";
      return "#EB5757";
    });
    const ringDasharray = computed(() => {
      const pct = formattedScore.value / 100;
      return `${pct * 100 * Math.PI}, 9999`;
    });
    function getStatIcon(score) {
      const s = Math.round((score || 0) * 100);
      if (s >= 90) return "success";
      if (s >= 50) return "warning";
      return "danger";
    }
    const METRIC_DEFS = [
      { key: "total-blocking-time", label: __$1("Total Blocking Time", "google-analytics-for-wordpress") },
      { key: "cumulative-layout-shift", label: __$1("Cumulative Layout Shift", "google-analytics-for-wordpress") },
      { key: "largest-contentful-paint", label: __$1("Largest Contentful Paint", "google-analytics-for-wordpress") },
      { key: "server-response-time", label: __$1("Server Response Time", "google-analytics-for-wordpress") },
      { key: "first-contentful-paint", label: __$1("First Contentful Paint", "google-analytics-for-wordpress") },
      { key: "interaction-to-next-paint", label: __$1("Interaction to Next Paint", "google-analytics-for-wordpress") }
    ];
    const metricCards = computed(() => {
      if (!siteSpeedData.value) return [];
      const data = siteSpeedData.value;
      return METRIC_DEFS.filter((def) => data[def.key]).map((def) => {
        const m = data[def.key];
        return {
          key: def.key,
          value: m.value,
          label: def.label,
          icon: getStatIcon(m.score),
          score: m.score
        };
      });
    });
    function buildAccordionContent() {
      if (!siteSpeedData.value) return [];
      const data = siteSpeedData.value;
      const items = [];
      if (data["cumulative-layout-shift"]) {
        const d = data["cumulative-layout-shift"];
        items.push({
          key: "cls",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("Cumulative Layout Shift - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            '<p>%1$s</p><p><strong>%2$s </strong>%3$s</p><h2>%4$s</h2><p>%5$s</p><p>%6$s</p><p>%7$s <a target="_blank" href="https://www.wpbeginner.com/wp-themes/how-to-add-custom-fonts-in-wordpress/">%8$s</a></p>',
            __$1("Cumulative Layout Shift is a measure of the largest burst of layout shift scores for every unexpected layout shift that occurs during the lifespan of a page. A layout shift occurs any time a visible element changes its position from one rendered frame to the next.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for 0.1 or less.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("A common reason for unexpected layout shifts is images without specified dimensions or reserved space for their aspect ratio. This can also be the case for ads, embeds, or any other late-loaded content.", "google-analytics-for-wordpress"),
            __$1("Changes to CSS property values can require the browser to react to these changes. Some values, such as box-shadow and box-sizing, trigger re-layout, paint, and composite. Changing the top and left properties also cause layout shifts, even when the element being moved is on its own layer. Avoid animating using these properties.", "google-analytics-for-wordpress"),
            __$1("Downloading and rendering web fonts can cause layout shifts. If you are using custom fonts we recommend reading", "google-analytics-for-wordpress"),
            __$1("this article", "google-analytics-for-wordpress")
          )
        });
      }
      if (data["largest-contentful-paint"]) {
        const d = data["largest-contentful-paint"];
        items.push({
          key: "lcp",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("Largest Contentful Paint - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            "<p>%1$s</p><p><strong>%2$s </strong>%3$s</p><h2>%4$s</h2><p>%5$s</p><p>%6$s</p>",
            __$1("Largest Contentful Paint reports the render time of the largest image or text block visible in the viewport, relative to when the user first navigated to the page.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for 2.5 seconds or less.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("A number of factors can affect how quickly the browser can load and render a web page(including Time to first byte), and delays across any of them can have a significant impact on Largest Contentful Paint.", "google-analytics-for-wordpress"),
            __$1("To improve Largest Contentful Paint you have to look at the entire loading process and make sure every step along the way is optimized and there are no delays for resources.", "google-analytics-for-wordpress")
          )
        });
      }
      if (data["server-response-time"]) {
        const d = data["server-response-time"];
        items.push({
          key: "srt",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("Server Response Time - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            '<p>%1$s</p><p><strong>%2$s </strong>%3$s</p><h2>%4$s</h2><p>%5$s <a target="_blank" href="https://www.wpbeginner.com/plugins/best-wordpress-caching-plugins/">%7$s</a>.</p><p>%6$s <a target="_blank" href="https://www.wpbeginner.com/wordpress-performance-speed">%7$s</a>.</p>',
            __$1("Server Response Time is the time it takes to connect to the website server to the time it takes the server to process your request and start returning data to load the website.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for 600ms or less server response time.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("To improve server response time, you should use a caching plugin if you aren't using one already. A caching plugin will save a static version of your website and instead of loading the database and PHP scripts, it will serve that to your user directly. You can learn more about caching plugins", "google-analytics-for-wordpress"),
            __$1("We also have a great roundup of the best ways to improve your website's performance that can be found", "google-analytics-for-wordpress"),
            __$1("here", "google-analytics-for-wordpress")
          )
        });
      }
      if (data["first-contentful-paint"]) {
        const d = data["first-contentful-paint"];
        items.push({
          key: "fcp",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("First Contentful Paint - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            '<p>%1$s</p><p>%2$s</p><p><strong>%3$s </strong>%4$s</p><h2>%5$s</h2><p>%6$s <a target="_blank" href="https://www.wpbeginner.com/wp-themes/how-to-add-custom-fonts-in-wordpress/">%7$s</a>.</p><p>%8$s <a target="_blank" href="https://www.wpbeginner.com/beginners-guide/speed-wordpress-save-images-optimized-web/">%9$s</a>.</p>',
            __$1("First Contentful Paint looks at the time it takes for the first visible element on your page to be rendered, like images and fonts.", "google-analytics-for-wordpress"),
            __$1("The score you get is based on a comparison of your page's first contentful paint with other live websites.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for a time of 1.5 seconds or less.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("The most common reason causing issues with the First Contentful Paint is using custom fonts that get rendered too slow as they have to load first. If you are using custom fonts, we recommend reading", "google-analytics-for-wordpress"),
            __$1("this article", "google-analytics-for-wordpress"),
            __$1("Another way to improve First Contentful Paint is to make sure the images on your site are optimized to load as fast as possible. For tips on how to speed up image loading time, check out", "google-analytics-for-wordpress"),
            __$1("this helpful guide", "google-analytics-for-wordpress")
          )
        });
      }
      if (data["total-blocking-time"]) {
        const d = data["total-blocking-time"];
        items.push({
          key: "tbt",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("Total Blocking Time - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            '<p>%1$s</p><p><strong>%2$s </strong>%3$s</p><h2>%4$s</h2><p>%5$s <a target="_blank" href="https://www.wpbeginner.com/wp-tutorials/how-to-fix-render-blocking-javascript-and-css-in-wordpress/">%6$s</a></p>',
            __$1("Total Blocking time is a measurement of the time it takes until your website visitor can interact with your website. When your page first loads it takes a moment before you can click/tap or scroll the page.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for a Total Blocking Time of 300ms or less.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("The most common reason for a long blocking time is JavaScript code that is either not efficient or is too large. A quick way to improve that is to use an efficient caching plugin that will improve the way scripts are loaded on your page. For an easy way to improve your Total Blocking Time, check out", "google-analytics-for-wordpress"),
            __$1("this summary", "google-analytics-for-wordpress")
          )
        });
      }
      if (data["interaction-to-next-paint"]) {
        const d = data["interaction-to-next-paint"];
        items.push({
          key: "inp",
          score: d.score,
          icon: getStatIcon(d.score),
          title: sprintf(__$1("Interaction to Next Paint - %s", "google-analytics-for-wordpress"), d.value),
          details: sprintf(
            '<p>%1$s</p><p>%2$s</p><p><strong>%3$s </strong>%4$s</p><h2>%5$s</h2><p>%6$s</p><p>%7$s <a target="_blank" href="https://www.wpbeginner.com/wp-tutorials/what-is-google-inp-score-and-how-to-improve-it-in-wordpress/">%8$s</a></p>',
            __$1("Interaction to Next Paint looks at the time it takes for the next paint after the user interacts with the page.", "google-analytics-for-wordpress"),
            __$1("The score you get is based on a comparison of your page's interaction to next paint with other live websites.", "google-analytics-for-wordpress"),
            __$1("Goal:", "google-analytics-for-wordpress"),
            __$1("You should be aiming for a time of 1.5 seconds or less.", "google-analytics-for-wordpress"),
            __$1("How to Improve", "google-analytics-for-wordpress"),
            __$1("Ideally, you should diagnose and find slow user interactions in the field to optimize them.", "google-analytics-for-wordpress"),
            __$1("It takes time and effort to improve INP, but the reward is a better user experience. That's why we recommend to learn more about", "google-analytics-for-wordpress"),
            __$1("Interaction to Next Paint ", "google-analytics-for-wordpress")
          )
        });
      }
      items.sort((a, b) => a.score - b.score);
      return items;
    }
    const accordionItems = computed(() => buildAccordionContent());
    function toggleAccordion(index) {
      openAccordion.value = openAccordion.value === index ? null : index;
    }
    async function loadData(force = false) {
      isLoading.value = true;
      try {
        if (isBlocked.value || isSampleDataEnabled()) {
          siteSpeedData.value = generateSiteSpeedSample(strategy.value);
        } else {
          const data = await fetchSiteSpeedData(strategy.value, force);
          siteSpeedData.value = data;
        }
      } catch (e) {
        siteSpeedData.value = generateSiteSpeedSample(strategy.value);
      } finally {
        isLoading.value = false;
      }
    }
    function switchStrategy(newStrategy) {
      if (isBlocked.value && !isSampleDataEnabled() || strategy.value === newStrategy) return;
      strategy.value = newStrategy;
      localStorage.setItem(STORAGE_KEY, newStrategy);
      openAccordion.value = null;
      if (siteSpeedData.value) {
        loadData();
      }
    }
    async function runAudit() {
      if (isBlocked.value && !isSampleDataEnabled() || isAuditing.value) return;
      isAuditing.value = true;
      openAccordion.value = null;
      try {
        await loadData(true);
      } finally {
        isAuditing.value = false;
      }
    }
    function onSeeSample() {
      siteSpeedData.value = generateSiteSpeedSample(strategy.value);
    }
    onMounted(() => {
      if (isBlocked.value || isSampleDataEnabled()) {
        loadData();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", _hoisted_3, toDisplayString(unref(__$1)("Site Speed", "google-analytics-for-wordpress")), 1),
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("button", {
                class: normalizeClass(["monsterinsights-device-toggle__btn", { "monsterinsights-device-toggle__btn--active": strategy.value === "mobile" }]),
                onClick: _cache[0] || (_cache[0] = ($event) => switchStrategy("mobile"))
              }, [..._cache[2] || (_cache[2] = [
                createBaseVNode("svg", {
                  width: "13",
                  height: "23",
                  viewBox: "0 0 13 23",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M10.875 0H2.125C1.07031 0 0.25 0.859375 0.25 1.875V18.125C0.25 19.1797 1.07031 20 2.125 20H10.875C11.8906 20 12.75 19.1797 12.75 18.125V1.875C12.75 0.859375 11.8906 0 10.875 0ZM6.5 18.75C5.79688 18.75 5.25 18.2031 5.25 17.5C5.25 16.8359 5.79688 16.25 6.5 16.25C7.16406 16.25 7.75 16.8359 7.75 17.5C7.75 18.2031 7.16406 18.75 6.5 18.75ZM10.875 14.5312C10.875 14.8047 10.6406 15 10.4062 15H2.59375C2.32031 15 2.125 14.8047 2.125 14.5312V2.34375C2.125 2.10938 2.32031 1.875 2.59375 1.875H10.4062C10.6406 1.875 10.875 2.10938 10.875 2.34375V14.5312Z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 2),
              createBaseVNode("button", {
                class: normalizeClass(["monsterinsights-device-toggle__btn", { "monsterinsights-device-toggle__btn--active": strategy.value === "desktop" }]),
                onClick: _cache[1] || (_cache[1] = ($event) => switchStrategy("desktop"))
              }, [..._cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  width: "23",
                  height: "23",
                  viewBox: "0 0 23 23",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M20.875 0H2.125C1.07031 0 0.25 0.859375 0.25 1.875V14.375C0.25 15.4297 1.07031 16.25 2.125 16.25H9.625L9 18.125H6.1875C5.64062 18.125 5.25 18.5547 5.25 19.0625C5.25 19.6094 5.64062 20 6.1875 20H16.8125C17.3203 20 17.75 19.6094 17.75 19.0625C17.75 18.5547 17.3203 18.125 16.8125 18.125H14L13.375 16.25H20.875C21.8906 16.25 22.75 15.4297 22.75 14.375V1.875C22.75 0.859375 21.8906 0 20.875 0ZM20.25 13.75H2.75V2.5H20.25V13.75Z",
                    fill: "currentColor"
                  })
                ], -1)
              ])], 2)
            ])
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_sfc_main$1, {
              "show-csv": false,
              "show-excel": false
            }),
            createBaseVNode("button", {
              class: "monsterinsights-run-audit-btn",
              disabled: isAuditing.value,
              onClick: runAudit
            }, [
              isAuditing.value ? (openBlock(), createBlock(LoadingSpinnerInline, { key: 0 })) : (openBlock(), createElementBlock("span", _hoisted_7, toDisplayString(unref(__$1)("Run Audit", "google-analytics-for-wordpress")), 1))
            ], 8, _hoisted_6)
          ])
        ]),
        createVNode(ReportPageLayout, {
          "required-license": "plus",
          "upsell-feature": "sitespeed",
          onSeeSample
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_8, [
              !siteSpeedData.value && !isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_9, [
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-site-speed-empty__icon" }, [
                  createBaseVNode("svg", {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createBaseVNode("circle", {
                      cx: "32",
                      cy: "32",
                      r: "30",
                      stroke: "#D0D5DD",
                      "stroke-width": "4",
                      fill: "none"
                    }),
                    createBaseVNode("path", {
                      d: "M32 18V34L42 40",
                      stroke: "#D0D5DD",
                      "stroke-width": "4",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    })
                  ])
                ], -1)),
                createBaseVNode("h3", _hoisted_10, toDisplayString(unref(__$1)('Click "Run Audit" to check your site speed', "google-analytics-for-wordpress")), 1),
                createBaseVNode("p", _hoisted_11, toDisplayString(unref(__$1)("Run a PageSpeed Insights audit to see your performance score, core web vitals, and tips to improve your site speed.", "google-analytics-for-wordpress")), 1)
              ])) : createCommentVNode("", true),
              isLoading.value && !siteSpeedData.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
                createVNode(LoadingSpinnerInline),
                createBaseVNode("span", null, toDisplayString(unref(__$1)("Running site speed audit...", "google-analytics-for-wordpress")), 1)
              ])) : createCommentVNode("", true),
              siteSpeedData.value ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                createBaseVNode("div", _hoisted_13, [
                  createBaseVNode("div", _hoisted_14, [
                    createBaseVNode("div", _hoisted_15, [
                      createBaseVNode("div", _hoisted_16, [
                        strategy.value === "mobile" ? (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[5] || (_cache[5] = [
                          createBaseVNode("path", {
                            d: "M29.75 0H5.25C2.29688 0 0 2.40625 0 5.25V50.75C0 53.7031 2.29688 56 5.25 56H29.75C32.5938 56 35 53.7031 35 50.75V5.25C35 2.40625 32.5938 0 29.75 0ZM17.5 52.5C15.5312 52.5 14 50.9688 14 49C14 47.1406 15.5312 45.5 17.5 45.5C19.3594 45.5 21 47.1406 21 49C21 50.9688 19.3594 52.5 17.5 52.5ZM29.75 40.6875C29.75 41.4531 29.0938 42 28.4375 42H6.5625C5.79688 42 5.25 41.4531 5.25 40.6875V6.5625C5.25 5.90625 5.79688 5.25 6.5625 5.25H28.4375C29.0938 5.25 29.75 5.90625 29.75 6.5625V40.6875Z",
                            fill: "#393F4C"
                          }, null, -1)
                        ])])) : (openBlock(), createElementBlock("svg", _hoisted_18, [..._cache[6] || (_cache[6] = [
                          createBaseVNode("path", {
                            d: "M 58.085938 0 L 5.914062 0 C 2.976562 0 0.695312 2.40625 0.695312 5.25 L 0.695312 40.25 C 0.695312 43.203125 2.976562 45.5 5.914062 45.5 L 26.78125 45.5 L 25.042969 50.75 L 17.21875 50.75 C 15.695312 50.75 14.609375 51.953125 14.609375 53.375 C 14.609375 54.90625 15.695312 56 17.21875 56 L 46.78125 56 C 48.195312 56 49.390625 54.90625 49.390625 53.375 C 49.390625 51.953125 48.195312 50.75 46.78125 50.75 L 38.957031 50.75 L 37.21875 45.5 L 58.085938 45.5 C 60.914062 45.5 63.304688 43.203125 63.304688 40.25 L 63.304688 5.25 C 63.304688 2.40625 60.914062 0 58.085938 0 Z M 56.347656 38.5 L 7.652344 38.5 L 7.652344 7 L 56.347656 7 Z",
                            fill: "#393F4C"
                          }, null, -1)
                        ])]))
                      ]),
                      createBaseVNode("div", {
                        class: "monsterinsights-speed-indicator__score",
                        style: normalizeStyle({ color: scoreColor.value })
                      }, toDisplayString(formattedScore.value), 5),
                      createBaseVNode("div", _hoisted_19, toDisplayString(unref(__$1)("Overall Score", "google-analytics-for-wordpress")), 1),
                      (openBlock(), createElementBlock("svg", _hoisted_20, [
                        _cache[7] || (_cache[7] = createBaseVNode("circle", {
                          cx: "53",
                          cy: "53",
                          r: "50",
                          stroke: "#FCEAD9",
                          "stroke-width": "8",
                          fill: "none"
                        }, null, -1)),
                        createBaseVNode("circle", {
                          cx: "53",
                          cy: "53",
                          r: "50",
                          stroke: scoreColor.value,
                          "stroke-width": "8",
                          fill: "none",
                          "stroke-linecap": "round",
                          "stroke-dasharray": ringDasharray.value,
                          transform: "rotate(-125 53 53)"
                        }, null, 8, _hoisted_21)
                      ]))
                    ])
                  ]),
                  createBaseVNode("div", _hoisted_22, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(metricCards.value, (metric) => {
                      return openBlock(), createElementBlock("div", {
                        key: metric.key,
                        class: "monsterinsights-site-speed-metric"
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(["monsterinsights-site-speed-metric__icon", "monsterinsights-site-speed-metric__icon--" + metric.icon])
                        }, [
                          metric.icon === "success" ? (openBlock(), createElementBlock("svg", _hoisted_23, [..._cache[8] || (_cache[8] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#27AE60"
                            }, null, -1),
                            createBaseVNode("path", {
                              d: "M6 10L9 13L14 7",
                              stroke: "white",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }, null, -1)
                          ])])) : metric.icon === "warning" ? (openBlock(), createElementBlock("svg", _hoisted_24, [..._cache[9] || (_cache[9] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#F2994A"
                            }, null, -1),
                            createBaseVNode("rect", {
                              x: "9",
                              y: "5",
                              width: "2",
                              height: "7",
                              rx: "1",
                              fill: "white"
                            }, null, -1),
                            createBaseVNode("rect", {
                              x: "9",
                              y: "13.5",
                              width: "2",
                              height: "2",
                              rx: "1",
                              fill: "white"
                            }, null, -1)
                          ])])) : (openBlock(), createElementBlock("svg", _hoisted_25, [..._cache[10] || (_cache[10] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#EB5757"
                            }, null, -1),
                            createBaseVNode("path", {
                              d: "M7 7L13 13M13 7L7 13",
                              stroke: "white",
                              "stroke-width": "2",
                              "stroke-linecap": "round"
                            }, null, -1)
                          ])]))
                        ], 2),
                        createBaseVNode("h2", _hoisted_26, toDisplayString(metric.value), 1),
                        createBaseVNode("p", _hoisted_27, toDisplayString(metric.label), 1)
                      ]);
                    }), 128))
                  ])
                ]),
                accordionItems.value.length ? (openBlock(), createElementBlock("div", _hoisted_28, [
                  createBaseVNode("h2", _hoisted_29, toDisplayString(unref(__$1)("How to Improve", "google-analytics-for-wordpress")), 1),
                  (openBlock(true), createElementBlock(Fragment, null, renderList(accordionItems.value, (item, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: item.key,
                      class: normalizeClass(["monsterinsights-site-speed-accordion__item", { "monsterinsights-site-speed-accordion__item--open": openAccordion.value === index }])
                    }, [
                      createBaseVNode("button", {
                        class: "monsterinsights-site-speed-accordion__header",
                        onClick: ($event) => toggleAccordion(index)
                      }, [
                        createBaseVNode("span", {
                          class: normalizeClass(["monsterinsights-site-speed-accordion__icon", "monsterinsights-site-speed-accordion__icon--" + item.icon])
                        }, [
                          item.icon === "success" ? (openBlock(), createElementBlock("svg", _hoisted_31, [..._cache[11] || (_cache[11] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#27AE60"
                            }, null, -1),
                            createBaseVNode("path", {
                              d: "M6 10L9 13L14 7",
                              stroke: "white",
                              "stroke-width": "2",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }, null, -1)
                          ])])) : item.icon === "warning" ? (openBlock(), createElementBlock("svg", _hoisted_32, [..._cache[12] || (_cache[12] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#F2994A"
                            }, null, -1),
                            createBaseVNode("rect", {
                              x: "9",
                              y: "5",
                              width: "2",
                              height: "7",
                              rx: "1",
                              fill: "white"
                            }, null, -1),
                            createBaseVNode("rect", {
                              x: "9",
                              y: "13.5",
                              width: "2",
                              height: "2",
                              rx: "1",
                              fill: "white"
                            }, null, -1)
                          ])])) : (openBlock(), createElementBlock("svg", _hoisted_33, [..._cache[13] || (_cache[13] = [
                            createBaseVNode("circle", {
                              cx: "10",
                              cy: "10",
                              r: "10",
                              fill: "#EB5757"
                            }, null, -1),
                            createBaseVNode("path", {
                              d: "M7 7L13 13M13 7L7 13",
                              stroke: "white",
                              "stroke-width": "2",
                              "stroke-linecap": "round"
                            }, null, -1)
                          ])]))
                        ], 2),
                        createBaseVNode("span", _hoisted_34, toDisplayString(item.title), 1),
                        _cache[14] || (_cache[14] = createBaseVNode("span", { class: "monsterinsights-site-speed-accordion__arrow" }, [
                          createBaseVNode("svg", {
                            width: "12",
                            height: "8",
                            viewBox: "0 0 12 8",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createBaseVNode("path", {
                              d: "M1 1L6 6L11 1",
                              stroke: "#393F4C",
                              "stroke-width": "2",
                              "stroke-linecap": "round"
                            })
                          ])
                        ], -1))
                      ], 8, _hoisted_30),
                      openAccordion.value === index ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: "monsterinsights-site-speed-accordion__body",
                        innerHTML: unref(sanitizeHtml)(item.details)
                      }, null, 8, _hoisted_35)) : createCommentVNode("", true)
                    ], 2);
                  }), 128))
                ])) : createCommentVNode("", true)
              ], 64)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        })
      ], 64);
    };
  }
};
export {
  _sfc_main as default
};
