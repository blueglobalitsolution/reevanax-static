import { C as watch, y as onMounted, J as onUnmounted, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, B as withModifiers, F as Fragment, f as renderList, i as normalizeClass, E as createBlock, s as createCommentVNode, t as toDisplayString, j as ref, A as createTextVNode, u as unref, m as computed, a1 as storeToRefs, n as normalizeStyle, K as renderSlot, w as withDirectives, P as vModelSelect, k as getMiGlobal$1, a4 as createSlots, D as withCtx } from "./toastStore-CRCNwITM.js";
import { _ as __, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { A as ApexLineChart } from "./ApexLineChart-BDoZ0ljB.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { u as useOverviewReportStore, b as buildApiFilters, f as fetchOverviewData, g as getInjectedMetricNames, a as getTabMetricsForQuery, O as OverviewProFeatureModal, c as generateSampleCustomDimensionsData, d as fetchCustomDimensionsData, e as fetchCustomDimensionsDeferredData, h as filterTabbedData, C as CUSTOM_DIMENSIONS_DIMENSION_TAB, i as CUSTOM_DIMENSIONS_TAB_TO_QUERY_ID, j as fetchFunnelData, k as getResponseDimensionOrder, Q as QUERY_DIMENSIONS, l as generateSampleBundleData, m as fetchFormSubmissionsData, n as filterFormSubmissionsData, o as fetchEcommerceOverviewData, p as fetchMarketingCampaignsData, q as fetchPagesData, r as fetchTopPagesData, s as fetchDemographicsData, t as fetchDevicesData, M as MC_TAB_TO_QUERY_ID, v as MC_DIMENSION_TAB, P as PAGES_TAB_TO_QUERY_ID, w as PAGES_DIMENSION_TAB, D as DEMOGRAPHICS_TAB_TO_QUERY_ID, x as DEMOGRAPHICS_DIMENSION_TAB, y as DEVICES_TAB_TO_QUERY_ID, z as DEVICES_DIMENSION_TAB } from "../reports-LbXqkgoM.js";
import { u as useSiteNotesStore, _ as _sfc_main$a } from "./SiteNotes-sUVlPnw7.js";
import { n as getUpgradeUrl, j as getMiGlobal, i as isAddonActive, R as REPORTING_REAUTH_ERROR, k as isPro } from "./ajax-B_XS1gT5.js";
import { i as isRateMetric, a as isAvgMetric, t as toPercentValue, u as useOverviewChartData, b as isDurationMetric } from "./useOverviewChartData-ea-7IFwh.js";
import { _ as _sfc_main$b, u as useSortableTable } from "./ReportTableModal-CDgzf1E8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { f as formatPct, a as formatCurr, b as formatNum, s as stripUrlDomain } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue, n as notSetLabel } from "./reportValues-hnaHRbaC.js";
import { _ as _sfc_main$c } from "./FunnelModal-BmPkUDcG.js";
import { U as UniversallyPromo } from "./UniversallyPromo-NH8NC5TQ.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { A as AuthModal, R as ReAuthModal } from "./ReAuthModal-B3ASDJ6j.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./siteNotes-CUK65xMh.js";
import "./settings-DM9kkmj_.js";
import "./auth-CC6F9_ZC.js";
const _hoisted_1$7 = { class: "monsterinsights-traffic-chart-metrics-dropdown__grid" };
const _hoisted_2$7 = ["onClick"];
const _hoisted_3$7 = { class: "monsterinsights-traffic-chart-metrics-dropdown__checkbox" };
const _sfc_main$9 = {
  __name: "MetricsDropdown",
  props: {
    open: {
      type: Boolean,
      default: false
    },
    metricsOptions: {
      type: Array,
      default: () => []
    },
    selectedMetrics: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:open", "update:selectedMetrics", "apply", "reset", "pro-upsell"],
  setup(__props, { emit: __emit }) {
    const PRO_ONLY_METRICS = ["totalRevenue", "ecommercePurchases", "averagePurchaseRevenue"];
    const props = __props;
    const emit = __emit;
    const dropdownRef = ref(null);
    const pendingSelection = ref([]);
    watch(
      () => props.open,
      (isOpen) => {
        if (isOpen) {
          pendingSelection.value = [...props.selectedMetrics || []];
        }
      },
      { immediate: true }
    );
    function toggleOpen() {
      emit("update:open", !props.open);
    }
    function togglePendingMetric(metricId) {
      if (PRO_ONLY_METRICS.includes(metricId)) {
        emit("pro-upsell");
        return;
      }
      const current = pendingSelection.value;
      const index = current.indexOf(metricId);
      if (index === -1) {
        pendingSelection.value = [...current, metricId];
      } else {
        if (current.length > 1) {
          pendingSelection.value = current.filter((id) => id !== metricId);
        }
      }
    }
    function onReset() {
      emit("reset");
    }
    function onApply() {
      emit("update:selectedMetrics", [...pendingSelection.value]);
      emit("apply");
    }
    function isProOnlyMetric(metricId) {
      return PRO_ONLY_METRICS.includes(metricId);
    }
    function handleClickOutside(event) {
      if (!dropdownRef.value || !props.open) return;
      if (dropdownRef.value.contains(event.target)) return;
      emit("update:open", false);
    }
    onMounted(() => {
      document.addEventListener("click", handleClickOutside);
    });
    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "monsterinsights-traffic-chart-metrics-dropdown",
        ref_key: "dropdownRef",
        ref: dropdownRef
      }, [
        createBaseVNode("button", {
          type: "button",
          class: "monsterinsights-traffic-chart-metrics-dropdown__trigger",
          onClick: toggleOpen
        }, [
          _cache[1] || (_cache[1] = createBaseVNode("span", null, "Metrics", -1)),
          createVNode(Icon, {
            name: "chevron-down",
            size: 16
          })
        ]),
        __props.open ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "monsterinsights-traffic-chart-metrics-dropdown__menu",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createBaseVNode("div", _hoisted_1$7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.metricsOptions, (option) => {
              return openBlock(), createElementBlock("button", {
                key: option.id,
                type: "button",
                class: normalizeClass(["monsterinsights-traffic-chart-metrics-dropdown__item", {
                  "monsterinsights-traffic-chart-metrics-dropdown__item--selected": pendingSelection.value.includes(option.id),
                  "monsterinsights-traffic-chart-metrics-dropdown__item--pro-only": isProOnlyMetric(option.id)
                }]),
                onClick: ($event) => togglePendingMetric(option.id)
              }, [
                createBaseVNode("span", _hoisted_3$7, [
                  pendingSelection.value.includes(option.id) ? (openBlock(), createBlock(Icon, {
                    key: 0,
                    name: "check",
                    size: 10
                  })) : createCommentVNode("", true)
                ]),
                createBaseVNode("span", null, toDisplayString(option.label), 1)
              ], 10, _hoisted_2$7);
            }), 128))
          ]),
          createBaseVNode("div", { class: "monsterinsights-traffic-chart-metrics-dropdown__footer" }, [
            createBaseVNode("button", {
              type: "button",
              class: "monsterinsights-traffic-chart-metrics-dropdown__btn monsterinsights-traffic-chart-metrics-dropdown__btn--reset",
              onClick: onReset
            }, " Reset Filters "),
            createBaseVNode("button", {
              type: "button",
              class: "monsterinsights-traffic-chart-metrics-dropdown__btn monsterinsights-traffic-chart-metrics-dropdown__btn--apply",
              onClick: onApply
            }, " Apply Filters ")
          ])
        ])) : createCommentVNode("", true)
      ], 512);
    };
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "monsterinsights-ecommerce-upsell-overlay"
};
const _hoisted_2$6 = { class: "monsterinsights-ecommerce-upsell-overlay__content" };
const _hoisted_3$6 = { class: "monsterinsights-ecommerce-upsell-overlay__text-section" };
const _hoisted_4$6 = { class: "monsterinsights-ecommerce-upsell-overlay__title" };
const _hoisted_5$5 = { class: "monsterinsights-ecommerce-upsell-overlay__integrations" };
const _hoisted_6$5 = ["src", "alt"];
const _hoisted_7$5 = { class: "monsterinsights-ecommerce-upsell-overlay__description" };
const _hoisted_8$5 = { class: "monsterinsights-ecommerce-upsell-overlay__actions" };
const _hoisted_9$4 = { class: "monsterinsights-ecommerce-upsell-overlay__coupon" };
const _hoisted_10$3 = { class: "monsterinsights-ecommerce-upsell-overlay__coupon-label" };
const _hoisted_11$3 = { class: "monsterinsights-ecommerce-upsell-overlay__coupon-code" };
const _hoisted_12$3 = {
  key: 0,
  class: "monsterinsights-ecommerce-upsell-overlay__copied-toast"
};
const _hoisted_13$3 = ["href"];
const _sfc_main$8 = {
  __name: "EcommerceUpsellOverlay",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    couponCode: {
      type: String,
      default: "LITEUPGRADE"
    }
  },
  setup(__props) {
    const props = __props;
    const integrationLogos = [
      { name: "WooCommerce", src: new URL("" + new URL("../../assets/woocom-CGR3qW2E.png", import.meta.url).href, import.meta.url).href },
      { name: "Easy Digital Downloads", src: new URL("" + new URL("../../assets/easy-BvW_B_Ta.png", import.meta.url).href, import.meta.url).href },
      { name: "MemberPress", src: new URL("" + new URL("../../assets/memberpress-D3zMNxUg.png", import.meta.url).href, import.meta.url).href },
      { name: "LifterLMS", src: new URL("" + new URL("../../assets/lifterlms-a1S06NYR.png", import.meta.url).href, import.meta.url).href },
      { name: "GiveWP", src: new URL("" + new URL("../../assets/givewp-C405d0U0.png", import.meta.url).href, import.meta.url).href },
      { name: "Restrict Content Pro", src: new URL("" + new URL("../../assets/restrict-x0XNKniw.png", import.meta.url).href, import.meta.url).href },
      { name: "Charitable", src: new URL("" + new URL("../../assets/charitable-jZ8z8e4W.png", import.meta.url).href, import.meta.url).href },
      { name: "WishList", src: new URL("" + new URL("../../assets/wishlistmember-logo 1-Dtdt0jIO.png", import.meta.url).href, import.meta.url).href },
      { name: "MemberMouse", src: new URL("" + new URL("../../assets/memberhouse-BJdHvZB4.png", import.meta.url).href, import.meta.url).href }
    ];
    const upsellText = {
      title: __("Upgrade to MonsterInsights Pro to Unlock More Actionable Insights", "google-analytics-for-wordpress"),
      titleLine2: __("& Save 50% OFF!", "google-analytics-for-wordpress"),
      description: __("It's easy to double your traffic and sales when you know exactly how people find and use your website. MonsterInsights Pro shows you the stats that matter!", "google-analytics-for-wordpress"),
      couponLabel: __("SAVE 50% Coupon Code", "google-analytics-for-wordpress"),
      upgradeToPro: __("Upgrade to Pro", "google-analytics-for-wordpress")
    };
    const copiedLabel = __("Copied!", "google-analytics-for-wordpress");
    const upgradeUrl = computed(() => {
      return getUpgradeUrl("ecommerce-upsell-overlay", "overview-report", "https://www.monsterinsights.com/lite/");
    });
    const couponCopied = ref(false);
    let couponCopiedTimer = null;
    function copyCouponCode() {
      const text = props.couponCode;
      if (navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      couponCopied.value = true;
      clearTimeout(couponCopiedTimer);
      couponCopiedTimer = setTimeout(() => {
        couponCopied.value = false;
      }, 1500);
    }
    return (_ctx, _cache) => {
      return __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-ecommerce-upsell-overlay__backdrop" }, null, -1)),
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("h3", _hoisted_4$6, [
              createTextVNode(toDisplayString(upsellText.title), 1),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createTextVNode(toDisplayString(upsellText.titleLine2), 1)
            ]),
            createBaseVNode("div", _hoisted_5$5, [
              (openBlock(), createElementBlock(Fragment, null, renderList(integrationLogos, (logo) => {
                return createBaseVNode("div", {
                  key: logo.name,
                  class: "monsterinsights-ecommerce-upsell-overlay__logo-card"
                }, [
                  createBaseVNode("img", {
                    src: logo.src,
                    alt: logo.name
                  }, null, 8, _hoisted_6$5)
                ]);
              }), 64))
            ]),
            createBaseVNode("p", _hoisted_7$5, toDisplayString(upsellText.description), 1)
          ]),
          createBaseVNode("div", _hoisted_8$5, [
            createBaseVNode("div", _hoisted_9$4, [
              createBaseVNode("span", _hoisted_10$3, toDisplayString(upsellText.couponLabel), 1),
              createBaseVNode("span", _hoisted_11$3, toDisplayString(__props.couponCode), 1),
              createBaseVNode("button", {
                type: "button",
                class: "monsterinsights-ecommerce-upsell-overlay__coupon-copy",
                onClick: copyCouponCode
              }, [
                createVNode(Icon, {
                  name: "copy",
                  size: 16
                }),
                couponCopied.value ? (openBlock(), createElementBlock("span", _hoisted_12$3, toDisplayString(unref(copiedLabel)), 1)) : createCommentVNode("", true)
              ])
            ]),
            createBaseVNode("a", {
              href: upgradeUrl.value,
              target: "_blank",
              rel: "noopener",
              class: "monsterinsights-ecommerce-upsell-overlay__btn"
            }, [
              createBaseVNode("span", null, toDisplayString(upsellText.upgradeToPro), 1),
              createVNode(Icon, {
                name: "arrow-right",
                size: 20,
                color: "#fff"
              })
            ], 8, _hoisted_13$3)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
function calculateAvgOrderValue(totalRevenue, ecommercePurchases) {
  const revenue = parseFloat(totalRevenue) || 0;
  const purchases = parseFloat(ecommercePurchases) || 0;
  if (purchases <= 0 || revenue <= 0) {
    return 0;
  }
  return revenue / purchases;
}
function parseChartMetrics(chartData) {
  const rows = Array.isArray(chartData?.rows) ? chartData.rows : Array.isArray(chartData) ? chartData : [];
  if (rows.length === 0) {
    return null;
  }
  let sessions = 0, engagedSessions = 0, totalUsers = 0, newUsers = 0;
  for (const row of rows) {
    const m0 = row?.m?.[0];
    if (!Array.isArray(m0) || m0.length < 5) {
      continue;
    }
    sessions += parseFloat(m0[0]) || 0;
    engagedSessions += parseFloat(m0[1]) || 0;
    totalUsers += parseFloat(m0[2]) || 0;
    newUsers += parseFloat(m0[3]) || 0;
  }
  const engagementRate = sessions > 0 ? engagedSessions / sessions * 100 : 0;
  const returningUsers = Math.max(0, totalUsers - newUsers);
  return { sessions, engagedSessions, totalUsers, newUsers, returningUsers, engagementRate };
}
function aggregateOverviewRowsByTab(rows, metricNames, usePreviousPeriod = false) {
  if (!Array.isArray(rows) || rows.length === 0 || !Array.isArray(metricNames) || metricNames.length === 0) {
    return {};
  }
  const sums = {};
  const rateWeighted = {};
  const avgWeighted = {};
  const sessionsIdx = metricNames.indexOf("sessions");
  const firstRow = rows[0];
  const isComparisonFormat = Array.isArray(firstRow?.m?.[0]) && firstRow.m[0].length === 2 && firstRow.m?.length >= metricNames.length;
  const periodIdx = usePreviousPeriod ? 0 : 1;
  for (const row of rows) {
    let readMetricVal = function(cell) {
      if (Array.isArray(cell) && cell.length >= 2) {
        return parseFloat(cell[periodIdx]) || 0;
      }
      return parseFloat(cell) || 0;
    };
    const m0 = row?.m?.[0];
    if (!Array.isArray(m0) && !Array.isArray(row?.m)) {
      continue;
    }
    const metricsRow = isComparisonFormat ? row.m : Array.isArray(m0) ? m0 : [];
    if (metricsRow.length < metricNames.length) {
      continue;
    }
    const sessionWeight = sessionsIdx >= 0 ? readMetricVal(metricsRow[sessionsIdx]) || 0 : 1;
    for (let i = 0; i < metricNames.length; i++) {
      const name = metricNames[i];
      const val = readMetricVal(metricsRow[i]);
      if (isRateMetric(name)) {
        if (!rateWeighted[i]) {
          rateWeighted[i] = { num: 0, denom: 0 };
        }
        rateWeighted[i].num += val * sessionWeight;
        rateWeighted[i].denom += sessionWeight;
      } else if (isAvgMetric(name)) {
        if (!avgWeighted[i]) {
          avgWeighted[i] = { num: 0, denom: 0 };
        }
        avgWeighted[i].num += val * sessionWeight;
        avgWeighted[i].denom += sessionWeight;
      } else {
        sums[name] = (sums[name] ?? 0) + val;
      }
    }
  }
  const result = { ...sums };
  for (let i = 0; i < metricNames.length; i++) {
    if (isRateMetric(metricNames[i])) {
      const rw = rateWeighted[i];
      result[metricNames[i]] = rw && rw.denom > 0 ? toPercentValue(rw.num / rw.denom) : 0;
    } else if (isAvgMetric(metricNames[i])) {
      const aw = avgWeighted[i];
      result[metricNames[i]] = aw && aw.denom > 0 ? Math.round(aw.num / aw.denom) : 0;
    }
  }
  if (result.totalUsers != null && result.newUsers != null) {
    result.returningUsers = Math.max(0, (result.totalUsers ?? 0) - (result.newUsers ?? 0));
  }
  if (result.sessions != null && result.sessions > 0 && result.ecommercePurchases != null) {
    result.conversionRate = (result.ecommercePurchases ?? 0) / result.sessions * 100;
  }
  if (result.screenPageViews != null) {
    result.pageViews = result.screenPageViews;
  }
  if (result.screenPageViews != null && result.totalUsers != null && result.totalUsers > 0) {
    result.pageViewsPerUser = result.screenPageViews / result.totalUsers;
  }
  if (result.totalRevenue != null) {
    result.revenue = result.totalRevenue;
  }
  if (result.ecommercePurchases != null) {
    result.transactions = result.ecommercePurchases;
  }
  if (result.averageSessionDuration != null) {
    result.avgSessionDuration = result.averageSessionDuration;
  }
  result.avgOrderValue = result.averagePurchaseRevenue != null && result.averagePurchaseRevenue !== "" ? parseFloat(result.averagePurchaseRevenue) || 0 : calculateAvgOrderValue(result.totalRevenue, result.ecommercePurchases);
  return result;
}
const METRIC_DISPLAY_CONFIG = {
  totalUsers: { label: __("Total Users", "google-analytics-for-wordpress"), type: "number", key: "totalUsers" },
  newUsers: { label: __("New Users", "google-analytics-for-wordpress"), type: "number", key: "newUsers" },
  returningUsers: { label: __("Returning Users", "google-analytics-for-wordpress"), type: "number", key: "returningUsers" },
  engagementRate: { label: __("Engagement Rate", "google-analytics-for-wordpress"), type: "percent", key: "engagementRate" },
  pageViewsPerUser: { label: __("Pageviews / User", "google-analytics-for-wordpress"), type: "decimal", key: "pageViewsPerUser" },
  bounceRate: { label: __("Bounce Rate", "google-analytics-for-wordpress"), type: "percent", key: "bounceRate" },
  ecommercePurchases: { label: __("Purchases", "google-analytics-for-wordpress"), type: "number", key: "ecommercePurchases" },
  totalRevenue: { label: __("Revenue", "google-analytics-for-wordpress"), type: "currency", key: "totalRevenue" },
  averagePurchaseRevenue: { label: __("Average Order Value", "google-analytics-for-wordpress"), type: "currency", key: "averagePurchaseRevenue" },
  averageSessionDuration: { label: __("Session Duration", "google-analytics-for-wordpress"), type: "duration", key: "averageSessionDuration" },
  sessions: { label: __("Sessions", "google-analytics-for-wordpress"), type: "number", key: "sessions" },
  engagedSessions: { label: __("Engaged Sessions", "google-analytics-for-wordpress"), type: "number", key: "engagedSessions" },
  sessionKeyEventRate: { label: __("Key Event Rate", "google-analytics-for-wordpress"), type: "percent", key: "sessionKeyEventRate" },
  screenPageViews: { label: __("Page Views", "google-analytics-for-wordpress"), type: "number", key: "screenPageViews" },
  itemsPurchased: { label: __("Items Purchased", "google-analytics-for-wordpress"), type: "number", key: "ecommercePurchases" },
  couponUsedPercent: { label: __("Coupon Used %", "google-analytics-for-wordpress"), type: "percent", key: "couponUsedPercent" },
  cartAbandonRatePercent: { label: __("Cart Abandon Rate %", "google-analytics-for-wordpress"), type: "percent", key: "cartAbandonRatePercent" }
};
function getMetricsFromSelection(selectedMetrics, aggregated = {}) {
  if (!Array.isArray(selectedMetrics) || selectedMetrics.length === 0) {
    return [];
  }
  return selectedMetrics.map((metricId) => {
    const config = METRIC_DISPLAY_CONFIG[metricId];
    if (!config) {
      return null;
    }
    const value = aggregated[config.key] ?? aggregated[metricId] ?? 0;
    return { id: metricId, label: config.label, value, type: config.type };
  }).filter(Boolean);
}
function getMetricsForTab(tabId, metrics = {}) {
  const tabMetrics = {
    traffic: [
      { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress"), value: metrics.totalUsers || 0, type: "number" },
      { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), value: metrics.newUsers || 0, type: "number" },
      { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), value: metrics.returningUsers || 0, type: "number" },
      { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), value: metrics.engagementRate || 0, type: "percent" }
    ],
    engagement: [
      { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), value: metrics.sessions || 0, type: "number" },
      { id: "pageViews", label: __("Page Views", "google-analytics-for-wordpress"), value: metrics.pageViews || 0, type: "number" },
      { id: "avgSessionDuration", label: __("Avg. Session Duration", "google-analytics-for-wordpress"), value: metrics.avgSessionDuration || 0, type: "duration" },
      { id: "bounceRate", label: __("Bounce Rate", "google-analytics-for-wordpress"), value: metrics.bounceRate || 0, type: "percent" }
    ],
    referrals: [
      { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), value: metrics.sessions || 0, type: "number" },
      { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress"), value: metrics.engagedSessions || 0, type: "number" },
      { id: "sessionKeyEventRate", label: __("Session Key Event Rate", "google-analytics-for-wordpress"), value: metrics.sessionKeyEventRate || 0, type: "percent" }
    ],
    ecommerce: [
      { id: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), value: metrics.revenue || 0, type: "currency" },
      { id: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), value: metrics.transactions || 0, type: "number" },
      { id: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-for-wordpress"), value: metrics.avgOrderValue || 0, type: "currency" },
      { id: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), value: metrics.conversionRate || 0, type: "percent" }
    ]
  };
  return tabMetrics[tabId] || tabMetrics.traffic;
}
function formatDateShort(dateStr) {
  if (!dateStr || typeof dateStr !== "string") {
    return "";
  }
  const parts = dateStr.trim().split("-");
  if (parts.length !== 3) {
    return dateStr;
  }
  const [y, m, d] = parts;
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[parseInt(m, 10) - 1] || m;
  const yearShort = y.length >= 2 ? y.slice(-2) : y;
  return `${month} ${parseInt(d, 10)}, ${yearShort}`;
}
function formatDateRangeLabel(start, end) {
  if (!start || !end) {
    return "";
  }
  const from = formatDateShort(start);
  const to = formatDateShort(end);
  return from && to ? `${from} - ${to}` : "";
}
function formatMetricValue(value, type) {
  if (value === null || value === void 0) {
    return "-";
  }
  switch (type) {
    case "number":
      if (value >= 1e6) {
        return `${(value / 1e6).toFixed(1)}M`;
      }
      if (value >= 1e3) {
        return `${(value / 1e3).toFixed(1)}K`;
      }
      return value.toLocaleString();
    case "decimal":
      return parseFloat(value).toFixed(1);
    case "percent":
      return `${parseFloat(value).toFixed(1)}%`;
    case "currency": {
      const currency = getMiGlobal("currency", "USD") || "USD";
      const formatter = new Intl.NumberFormat(void 0, { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (value >= 1e6) {
        const symbol = formatter.formatToParts(0).find((p) => p.type === "currency")?.value || "";
        return `${symbol}${(value / 1e6).toFixed(1)}M`;
      }
      if (value >= 1e3) {
        const symbol = formatter.formatToParts(0).find((p) => p.type === "currency")?.value || "";
        return `${symbol}${(value / 1e3).toFixed(1)}K`;
      }
      return formatter.format(value);
    }
    case "duration": {
      const minutes = Math.floor(value / 60);
      const seconds = Math.floor(value % 60);
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
    case "text":
      return value;
    default:
      return value;
  }
}
function useKeyMetrics(activeTab, overviewData, _tabMetricsDataUnused, chartMetricsData, overviewMetricsForChart, selectedDropdownMetrics, isCompareActive, dateRange) {
  const keyMetrics = computed(() => {
    const tabId = activeTab.value || "traffic";
    const apiMetricNames = overviewMetricsForChart.value || [];
    const dropdownIds = selectedDropdownMetrics.value || [];
    const rows = overviewData.value?.rows;
    let aggregated = {};
    if (Array.isArray(rows) && rows.length > 0 && apiMetricNames.length > 0) {
      aggregated = aggregateOverviewRowsByTab(rows, apiMetricNames);
    } else {
      const fromChart = parseChartMetrics(chartMetricsData.value) || {};
      const fromOverview = overviewData.value?.metrics || {};
      aggregated = { ...fromOverview, ...fromChart };
      if (aggregated.screenPageViews != null) {
        aggregated.pageViews = aggregated.screenPageViews;
      }
      if (aggregated.totalRevenue != null) {
        aggregated.revenue = aggregated.totalRevenue;
      }
      if (aggregated.ecommercePurchases != null) {
        aggregated.transactions = aggregated.ecommercePurchases;
      }
      if (aggregated.averageSessionDuration != null) {
        aggregated.avgSessionDuration = aggregated.averageSessionDuration;
      }
      aggregated.avgOrderValue = aggregated.averagePurchaseRevenue != null && aggregated.averagePurchaseRevenue !== "" ? parseFloat(aggregated.averagePurchaseRevenue) || 0 : calculateAvgOrderValue(aggregated.totalRevenue, aggregated.ecommercePurchases);
    }
    if (dropdownIds.length > 0) {
      const fromSelection = getMetricsFromSelection(dropdownIds, aggregated);
      if (fromSelection.length > 0) {
        return fromSelection;
      }
    }
    return getMetricsForTab(tabId, aggregated);
  });
  const keyMetricsPrevious = computed(() => {
    if (!isCompareActive.value) {
      return [];
    }
    const tabId = activeTab.value || "traffic";
    const apiMetricNames = overviewMetricsForChart.value || [];
    const dropdownIds = selectedDropdownMetrics.value || [];
    const rows = overviewData.value?.rows;
    if (!Array.isArray(rows) || rows.length === 0 || !apiMetricNames.length) {
      return [];
    }
    const firstRow = rows[0];
    const isComparisonFormat = Array.isArray(firstRow?.m?.[0]) && firstRow.m[0].length === 2 && firstRow.m?.length >= apiMetricNames.length;
    if (!isComparisonFormat) {
      return [];
    }
    const aggregated = aggregateOverviewRowsByTab(rows, apiMetricNames, true);
    if (dropdownIds.length > 0) {
      const fromSelection = getMetricsFromSelection(dropdownIds, aggregated);
      if (fromSelection.length > 0) {
        return fromSelection;
      }
    }
    return getMetricsForTab(tabId, aggregated);
  });
  const keyMetricsWithChange = computed(() => {
    const current = keyMetrics.value;
    const previous = keyMetricsPrevious.value;
    if (!Array.isArray(previous) || previous.length === 0) {
      return current;
    }
    const prevById = Object.fromEntries(previous.map((p) => [p.id, p]));
    return current.map((m) => {
      const prev = prevById[m.id];
      if (prev == null) {
        return { ...m, percentChange: null };
      }
      const currVal = Number(m.value);
      const prevVal = Number(prev.value);
      if (prevVal === 0) {
        return { ...m, percentChange: null };
      }
      const pct = (currVal - prevVal) / prevVal * 100;
      const rounded = Math.round(pct * 10) / 10;
      return {
        ...m,
        percentChange: rounded === 0 ? null : { value: rounded, positive: rounded > 0 }
      };
    });
  });
  const currentDateRangeLabel = computed(() => formatDateRangeLabel(dateRange?.start, dateRange?.end));
  const previousDateRangeLabel = computed(() => formatDateRangeLabel(dateRange?.compareStart, dateRange?.compareEnd));
  return {
    keyMetrics,
    keyMetricsPrevious,
    keyMetricsWithChange,
    formatMetricValue,
    currentDateRangeLabel,
    previousDateRangeLabel
  };
}
const _hoisted_1$5 = { class: "monsterinsights-overview-report-traffic-chart-section" };
const _hoisted_2$5 = { class: "monsterinsights-overview-report-traffic-chart-tabs" };
const _hoisted_3$5 = ["onClick"];
const _hoisted_4$5 = { class: "monsterinsights-overview-tab__label" };
const _hoisted_5$4 = { class: "monsterinsights-traffic-chart-key-metrics" };
const _hoisted_6$4 = { class: "monsterinsights-traffic-chart-key-metrics__row" };
const _hoisted_7$4 = { class: "monsterinsights-traffic-chart-key-metrics__container" };
const _hoisted_8$4 = { class: "monsterinsights-overview-metric__label" };
const _hoisted_9$3 = { class: "monsterinsights-overview-metric__value-wrap" };
const _hoisted_10$2 = { class: "monsterinsights-overview-metric__value" };
const _hoisted_11$2 = {
  key: 1,
  class: "monsterinsights-overview-metric__date-range"
};
const _hoisted_12$2 = {
  key: 0,
  class: "monsterinsights-traffic-chart-key-metrics__previous"
};
const _hoisted_13$2 = { class: "monsterinsights-traffic-chart-key-metrics__container monsterinsights-traffic-chart-key-metrics__container--previous" };
const _hoisted_14$2 = { class: "monsterinsights-overview-metric__label" };
const _hoisted_15$2 = { class: "monsterinsights-overview-metric__value-wrap" };
const _hoisted_16$2 = { class: "monsterinsights-overview-metric__value" };
const _hoisted_17$2 = {
  key: 0,
  class: "monsterinsights-overview-metric__date-range"
};
const _hoisted_18$2 = { class: "monsterinsights-traffic-chart-legends" };
const _hoisted_19$2 = { class: "monsterinsights-traffic-chart-legend__label" };
const _hoisted_20$2 = { class: "monsterinsights-overview-report-traffic-chart-wrapper" };
const _hoisted_21$2 = {
  key: 0,
  class: "monsterinsights-overview-chart-loading"
};
const _hoisted_22$2 = {
  key: 1,
  class: "monsterinsights-overview-chart-error"
};
const _hoisted_23 = { class: "monsterinsights-site-notes-toggle" };
const _hoisted_24 = {
  key: 1,
  class: "monsterinsights-site-notes-toggle"
};
const _sfc_main$7 = {
  __name: "OverviewTrafficChart",
  props: {
    dateRange: {
      type: Object,
      required: true,
      default: () => ({
        interval: "last30days",
        start: "",
        end: "",
        compareStart: "",
        compareEnd: "",
        compareReport: false
      })
    }
  },
  emits: ["overview-data-loaded", "overview-error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isLite = computed(() => true);
    const showProUpsell = computed(() => isLite.value && activeTab.value === "ecommerce");
    const SAMPLE_KEY_METRICS_BY_TAB = {
      traffic: [
        { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress"), value: 8432, type: "number", percentChange: { value: 14.2, positive: true } },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), value: 6218, type: "number", percentChange: { value: 11.5, positive: true } },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), value: 62.3, type: "percent", percentChange: { value: 4.8, positive: true } }
      ],
      engagement: [
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), value: 6218, type: "number", percentChange: { value: 11.5, positive: true } },
        { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), value: 2214, type: "number", percentChange: { value: 7.3, positive: true } },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), value: 62.3, type: "percent", percentChange: { value: 4.8, positive: true } }
      ],
      referrals: [
        { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress"), value: 3150, type: "number", percentChange: { value: 9.6, positive: true } },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), value: 2340, type: "number", percentChange: { value: 6.1, positive: true } },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), value: 58.7, type: "percent", percentChange: { value: 3.2, positive: true } }
      ],
      ecommerce: [
        { id: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), value: 12450, type: "currency", percentChange: { value: 18.4, positive: true } },
        { id: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), value: 184, type: "number", percentChange: { value: 12.1, positive: true } },
        { id: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-for-wordpress"), value: 67.66, type: "currency", percentChange: { value: 5.3, positive: true } },
        { id: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), value: 2.4, type: "percent", percentChange: { value: 8.7, positive: true } }
      ]
    };
    const overviewStore = useOverviewReportStore();
    const { activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const siteNotesStore = useSiteNotesStore();
    const siteNotesIcon = "writing-tool";
    const loading = ref(false);
    const error = ref(null);
    const overviewData = ref(null);
    const chartMetricsData = ref(null);
    const isMetricsDropdownOpen = ref(false);
    const overviewLoadId = ref(0);
    const METRICS_OPTIONS_BY_TAB = {
      traffic: [
        { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "sessionKeyEventRate", label: __("Key Event Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "pageViewsPerUser", label: __("Pageviews / User", "google-analytics-for-wordpress"), icon: "link" },
        { id: "bounceRate", label: __("Bounce Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "ecommercePurchases", label: __("Purchases", "google-analytics-for-wordpress"), icon: "link" },
        { id: "totalRevenue", label: __("Revenue", "google-analytics-for-wordpress"), icon: "link" },
        { id: "averagePurchaseRevenue", label: __("Average Order Value", "google-analytics-for-wordpress"), icon: "link" }
      ],
      engagement: [
        { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "pageViewsPerUser", label: __("Pageviews / User", "google-analytics-for-wordpress"), icon: "link" },
        { id: "bounceRate", label: __("Bounce Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "averageSessionDuration", label: __("Session Duration", "google-analytics-for-wordpress"), icon: "link" }
      ],
      referrals: [
        { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress"), icon: "link" },
        { id: "sessionKeyEventRate", label: __("Key Event Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "totalUsers", label: __("Total Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), icon: "link" },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), icon: "link" },
        { id: "pageViewsPerUser", label: __("Pageviews / User", "google-analytics-for-wordpress"), icon: "link" }
      ],
      ecommerce: [
        { id: "itemsPurchased", label: __("Items Purchased", "google-analytics-for-wordpress"), icon: "link" },
        { id: "averagePurchaseRevenue", label: __("Average Order Value (AOV)", "google-analytics-for-wordpress"), icon: "link" },
        { id: "couponUsedPercent", label: __("Coupon Used %", "google-analytics-for-wordpress"), icon: "link" },
        { id: "cartAbandonRatePercent", label: __("Cart Abandon Rate %", "google-analytics-for-wordpress"), icon: "link" }
      ]
    };
    const metricsOptions = computed(() => {
      const tabId = activeTab.value || "traffic";
      return METRICS_OPTIONS_BY_TAB[tabId] || METRICS_OPTIONS_BY_TAB.traffic;
    });
    const TAB_DEFAULT_OPTIONS = {
      traffic: ["sessions", "engagedSessions", "sessionKeyEventRate"],
      engagement: ["sessions", "engagedSessions", "engagementRate"],
      referrals: ["sessions", "engagedSessions", "sessionKeyEventRate"],
      ecommerce: ["itemsPurchased", "averagePurchaseRevenue"]
    };
    const TAB_DEFINITIONS = [
      { id: "traffic", label: __("Traffic", "google-analytics-for-wordpress"), icon: "chart-line" },
      { id: "engagement", label: __("Engagement", "google-analytics-for-wordpress"), icon: "users" },
      { id: "referrals", label: __("Referrals", "google-analytics-for-wordpress"), icon: "referrals" },
      { id: "ecommerce", label: __("eCommerce", "google-analytics-for-wordpress"), icon: "cart" }
    ];
    const activeTab = computed(() => overviewStore.getChartActiveTab);
    const selectedMetricsByTab = ref(
      Object.fromEntries(
        Object.entries(TAB_DEFAULT_OPTIONS).map(([tabId, optionIds]) => [tabId, [...optionIds]])
      )
    );
    const selectedMetrics = computed({
      get() {
        const tabId = activeTab.value || "traffic";
        return selectedMetricsByTab.value[tabId] || [];
      },
      set(newValue) {
        const tabId = activeTab.value || "traffic";
        selectedMetricsByTab.value = {
          ...selectedMetricsByTab.value,
          [tabId]: Array.isArray(newValue) ? [...newValue] : []
        };
      }
    });
    const selectedOverviewMetricsForQuery = computed(() => {
      const selected = selectedMetrics.value || [];
      const options = metricsOptions.value || [];
      const metrics = [];
      for (const option of options) {
        if (selected.includes(option.id)) metrics.push(option.id);
      }
      return metrics;
    });
    const overviewMetricsForChart = computed(() => {
      const selected = selectedOverviewMetricsForQuery.value;
      return getInjectedMetricNames(selected.length > 0 ? selected : null);
    });
    const isCompareActive = computed(
      () => !!(props.dateRange?.compareReport && props.dateRange?.compareStart && props.dateRange?.compareEnd)
    );
    const {
      chartData,
      chartSeriesConfig,
      chartLegends,
      chartColors,
      chartStrokeDashArray,
      chartRawDates,
      siteNoteAnnotations
    } = useOverviewChartData(overviewData, overviewMetricsForChart, selectedMetrics, isCompareActive, siteNotesStore);
    const {
      keyMetricsWithChange,
      keyMetricsPrevious,
      formatMetricValue: formatMetricValue2,
      currentDateRangeLabel,
      previousDateRangeLabel
    } = useKeyMetrics(
      activeTab,
      overviewData,
      null,
      // tabMetricsData no longer used — derived from overviewData
      chartMetricsData,
      overviewMetricsForChart,
      // API metric names (expanded) for row parsing
      selectedOverviewMetricsForQuery,
      // Dropdown IDs for display labels
      isCompareActive,
      props.dateRange
    );
    const activeTabs = computed(() => TAB_DEFINITIONS);
    let chartInstance = null;
    let singlePointPollTimer = null;
    const chartOptions = computed(() => {
      return {
        chart: {
          toolbar: { show: false },
          zoom: { enabled: false },
          events: {
            // Capture chart instance and apply initial annotations
            mounted: (chartContext) => {
              chartInstance = chartContext;
              applySiteNoteAnnotations();
              let attempts = 0;
              const pollGrid = () => {
                if (chartInstance?.w?.globals?.gridWidth != null || attempts >= 20) {
                  applySinglePointLine();
                } else {
                  attempts++;
                  singlePointPollTimer = setTimeout(pollGrid, 50);
                }
              };
              singlePointPollTimer = setTimeout(pollGrid, 50);
            },
            // Re-apply annotations after any chart redraw (e.g. resize)
            updated: () => {
              applySiteNoteAnnotations();
              applySinglePointLine();
            }
          }
        },
        stroke: {
          curve: "smooth",
          width: 2
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.6,
            opacityTo: 0.05
          }
        },
        tooltip: {
          theme: "light",
          shared: true,
          custom({ series, seriesIndex, dataPointIndex, w }) {
            const categoryLabel = w.globals.categoryLabels[dataPointIndex] || w.globals.labels[dataPointIndex] || "";
            let html = '<div class="monsterinsights-chart-tooltip">';
            html += '<div class="monsterinsights-chart-tooltip__date">' + categoryLabel + "</div>";
            for (let i = 0; i < series.length; i++) {
              const seriesName = w.globals.seriesNames[i] || "";
              if (!isCompareActive.value && /previous/i.test(seriesName)) continue;
              const value = series[i][dataPointIndex];
              if (value === void 0 || value === null) continue;
              const color = w.globals.colors[i] || "#228bee";
              const baseName = seriesName.replace(/\s*\(.*\)$/, "");
              const cfg = chartSeriesConfig.value?.find((c) => c.label === baseName);
              const metricKey = cfg?.metric;
              const isRate = metricKey && isRateMetric(metricKey);
              const isDuration = metricKey && isDurationMetric(metricKey);
              let displayValue;
              if (typeof value === "number") {
                if (isRate) {
                  displayValue = value.toFixed(2) + "%";
                } else if (isDuration) {
                  displayValue = value.toFixed(2) + " min";
                } else {
                  displayValue = value.toLocaleString();
                }
              } else {
                displayValue = value;
              }
              html += '<div class="monsterinsights-chart-tooltip__row">';
              html += '<span class="monsterinsights-chart-tooltip__dot" style="background:' + color + '"></span>';
              html += '<span class="monsterinsights-chart-tooltip__label">' + seriesName + ": </span>";
              html += '<span class="monsterinsights-chart-tooltip__value">' + displayValue + "</span>";
              html += "</div>";
            }
            const rawDates = chartRawDates.value;
            const notesByDate = siteNotesStore.siteNotesByDateCompact;
            if (rawDates.length > dataPointIndex) {
              const dateKey = rawDates[dataPointIndex];
              const dayNotes = notesByDate[dateKey];
              if (dayNotes && dayNotes.length) {
                html += '<div class="monsterinsights-chart-tooltip__notes"><hr />';
                dayNotes.forEach(function(note) {
                  const escaped = ("" + (note.note_title ?? "")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
                  html += "<span>" + escaped + "</span><br />";
                });
                html += "</div>";
              }
            }
            html += "</div>";
            return html;
          }
        }
      };
    });
    let isApplyingAnnotations = false;
    function applySiteNoteAnnotations() {
      if (isApplyingAnnotations || !chartInstance || loading.value) return;
      isApplyingAnnotations = true;
      try {
        chartInstance.clearAnnotations();
        const annotations = siteNoteAnnotations.value;
        for (const annotation of annotations) {
          chartInstance.addPointAnnotation(annotation, false);
        }
      } catch {
      } finally {
        isApplyingAnnotations = false;
      }
    }
    function applySinglePointLine() {
      if (!chartInstance?.w?.globals?.dom?.baseEl) return;
      const categories = chartData.value?.categories || [];
      if (categories.length !== 1) return;
      const g = chartInstance.w.globals;
      const baseEl = g.dom.baseEl;
      baseEl.querySelector(".monsterinsights-single-point-line")?.remove();
      const svgEl = baseEl.querySelector("svg");
      if (!svgEl || !g.gridWidth) return;
      const seriesArr = chartData.value?.series || [];
      const values = seriesArr.map((s) => s.data?.[0] ?? 0).filter((v) => !isNaN(v) && v !== null);
      if (values.length < 2) return;
      const minVal = Math.min(...values);
      const maxVal = Math.max(...values);
      const minYAxis = g.minY;
      const maxYAxis = g.maxY;
      const yRange = maxYAxis - minYAxis;
      if (yRange <= 0) return;
      const gridX = g.translateX;
      const gridY = g.translateY;
      const gridW = g.gridWidth;
      const gridH = g.gridHeight;
      const topY = gridY + gridH - (maxVal - minYAxis) / yRange * gridH;
      const bottomY = gridY + gridH - (minVal - minYAxis) / yRange * gridH;
      const cx = gridX + gridW / 2;
      const ns = "http://www.w3.org/2000/svg";
      const line = document.createElementNS(ns, "line");
      line.classList.add("monsterinsights-single-point-line");
      line.setAttribute("x1", cx);
      line.setAttribute("y1", topY);
      line.setAttribute("x2", cx);
      line.setAttribute("y2", bottomY);
      line.setAttribute("stroke", chartColors.value?.[0] || "#228bee");
      line.setAttribute("stroke-width", "2");
      const inner = svgEl.querySelector(".apexcharts-inner");
      if (inner) {
        svgEl.insertBefore(line, inner);
      } else {
        svgEl.appendChild(line);
      }
    }
    watch(siteNoteAnnotations, () => {
      setTimeout(() => applySiteNoteAnnotations(), 50);
    });
    async function loadOverviewData() {
      const isUpsell = showProUpsell.value;
      if (!isUpsell) {
        loading.value = true;
      }
      error.value = null;
      const currentLoadId = ++overviewLoadId.value;
      const apiFilters = buildApiFilters(storeActiveFilters.value, storeActiveDevice.value);
      try {
        const data = await fetchOverviewData(
          props.dateRange,
          apiFilters,
          selectedOverviewMetricsForQuery.value,
          activeTab.value
        );
        if (currentLoadId !== overviewLoadId.value) return;
        if (!isUpsell) {
          overviewData.value = data?.overview ?? null;
          chartMetricsData.value = data?.chart_metrics ?? null;
        }
        emit("overview-data-loaded", data);
      } catch (err) {
        if (currentLoadId !== overviewLoadId.value) return;
        if (!isUpsell) {
          error.value = err?.message || err?.title || __("Error loading overview data.", "google-analytics-for-wordpress");
        }
        emit("overview-error", err);
      } finally {
        if (currentLoadId === overviewLoadId.value) {
          loading.value = false;
        }
      }
    }
    function setActiveTab(tabId) {
      overviewStore.setChartActiveTab(tabId);
      loadOverviewData();
    }
    function resetMetricsFilters() {
      const tabId = activeTab.value || "traffic";
      selectedMetrics.value = [...TAB_DEFAULT_OPTIONS[tabId] || []];
      isMetricsDropdownOpen.value = false;
      loadOverviewData();
    }
    function applyMetricsFilters() {
      isMetricsDropdownOpen.value = false;
      loadOverviewData();
    }
    watch(
      [storeActiveFilters, storeActiveDevice],
      () => {
        loadOverviewData();
      },
      { deep: true }
    );
    watch(
      () => [props.dateRange?.start, props.dateRange?.end, props.dateRange?.compareReport, props.dateRange?.compareStart, props.dateRange?.compareEnd],
      () => {
        if (props.dateRange?.start && props.dateRange?.end) {
          loadOverviewData();
        }
      },
      { deep: true }
    );
    async function onSiteNotesSaved() {
      await siteNotesStore.fetchNotes(props.dateRange, true);
      loadOverviewData();
    }
    onMounted(() => {
      loadOverviewData();
      siteNotesStore.fetchNotes(props.dateRange);
      siteNotesStore.fetchCategories();
    });
    onUnmounted(() => {
      if (singlePointPollTimer) {
        clearTimeout(singlePointPollTimer);
        singlePointPollTimer = null;
      }
      chartInstance = null;
    });
    const displayKeyMetricsWithChange = computed(() => {
      if (showProUpsell.value) {
        const tabId = activeTab.value || "traffic";
        return SAMPLE_KEY_METRICS_BY_TAB[tabId] || SAMPLE_KEY_METRICS_BY_TAB.traffic;
      }
      return keyMetricsWithChange.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", _hoisted_2$5, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(activeTabs.value, (tab) => {
            return openBlock(), createElementBlock("button", {
              key: tab.id,
              type: "button",
              class: normalizeClass(["monsterinsights-overview-tab", { "monsterinsights-overview-tab--active": activeTab.value === tab.id }]),
              onClick: ($event) => setActiveTab(tab.id)
            }, [
              createVNode(Icon, {
                name: tab.icon,
                size: 20
              }, null, 8, ["name"]),
              createBaseVNode("span", _hoisted_4$5, toDisplayString(tab.label), 1)
            ], 10, _hoisted_3$5);
          }), 128))
        ]),
        createBaseVNode("div", {
          class: normalizeClass(["monsterinsights-overview-report-traffic-chart-content", { "monsterinsights-overview-report-traffic-chart-content--has-overlay": showProUpsell.value }])
        }, [
          createBaseVNode("div", _hoisted_5$4, [
            createBaseVNode("div", _hoisted_6$4, [
              createBaseVNode("div", _hoisted_7$4, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(displayKeyMetricsWithChange.value, (metric, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: metric.id,
                    class: normalizeClass(["monsterinsights-overview-metric", { "monsterinsights-overview-metric--highlighted": index === 0 }])
                  }, [
                    createBaseVNode("span", _hoisted_8$4, toDisplayString(metric.label), 1),
                    createBaseVNode("div", _hoisted_9$3, [
                      createBaseVNode("span", _hoisted_10$2, toDisplayString(unref(formatMetricValue2)(metric.value, metric.type)), 1),
                      metric.percentChange ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(["monsterinsights-overview-metric__percent-change", metric.percentChange.positive ? "monsterinsights-overview-metric__percent-change--positive" : "monsterinsights-overview-metric__percent-change--negative"])
                      }, toDisplayString(metric.percentChange.positive ? "+" : "-") + toDisplayString(Math.abs(metric.percentChange.value)) + "%", 3)) : createCommentVNode("", true),
                      isCompareActive.value && index === 0 && unref(currentDateRangeLabel) ? (openBlock(), createElementBlock("span", _hoisted_11$2, toDisplayString(unref(currentDateRangeLabel)), 1)) : createCommentVNode("", true)
                    ])
                  ], 2);
                }), 128))
              ]),
              createVNode(_sfc_main$9, {
                open: isMetricsDropdownOpen.value,
                "onUpdate:open": _cache[0] || (_cache[0] = ($event) => isMetricsDropdownOpen.value = $event),
                "metrics-options": metricsOptions.value,
                "selected-metrics": selectedMetrics.value,
                "onUpdate:selectedMetrics": _cache[1] || (_cache[1] = ($event) => selectedMetrics.value = $event),
                onApply: applyMetricsFilters,
                onReset: resetMetricsFilters,
                onProUpsell: _cache[2] || (_cache[2] = ($event) => unref(overviewStore).openProModal())
              }, null, 8, ["open", "metrics-options", "selected-metrics"])
            ]),
            isCompareActive.value && unref(keyMetricsPrevious).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_12$2, [
              createBaseVNode("div", _hoisted_13$2, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(keyMetricsPrevious), (metric, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: metric.id,
                    class: "monsterinsights-overview-metric monsterinsights-overview-metric--previous"
                  }, [
                    createBaseVNode("span", _hoisted_14$2, toDisplayString(metric.label), 1),
                    createBaseVNode("div", _hoisted_15$2, [
                      createBaseVNode("span", _hoisted_16$2, toDisplayString(unref(formatMetricValue2)(metric.value, metric.type)), 1),
                      isCompareActive.value && index === 0 && unref(previousDateRangeLabel) ? (openBlock(), createElementBlock("span", _hoisted_17$2, toDisplayString(unref(previousDateRangeLabel)), 1)) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ])
            ])) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_18$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(chartLegends), (legend) => {
              return openBlock(), createElementBlock("div", {
                class: "monsterinsights-traffic-chart-legend",
                key: legend.id
              }, [
                createBaseVNode("span", {
                  class: "monsterinsights-traffic-chart-legend__dot",
                  style: normalizeStyle({ backgroundColor: legend.color })
                }, null, 4),
                createBaseVNode("span", _hoisted_19$2, toDisplayString(legend.label), 1)
              ]);
            }), 128))
          ]),
          createBaseVNode("div", _hoisted_20$2, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_21$2, [
              createVNode(LoadingSpinnerInline)
            ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_22$2, toDisplayString(error.value), 1)) : (openBlock(), createBlock(ApexLineChart, {
              key: `overview-chart-${activeTab.value}`,
              data: unref(chartData),
              height: 370,
              "show-legend": false,
              colors: unref(chartColors),
              "stroke-dash-array": unref(chartStrokeDashArray),
              "chart-options": chartOptions.value,
              "chart-type": "area"
            }, null, 8, ["data", "colors", "stroke-dash-array", "chart-options"]))
          ]),
          createVNode(_sfc_main$8, { show: showProUpsell.value }, null, 8, ["show"])
        ], 2),
        createBaseVNode("div", _hoisted_23, [
          !unref(siteNotesStore).showSiteNotes ? (openBlock(), createElementBlock("button", {
            key: 0,
            type: "button",
            class: "monsterinsights-site-notes-toggle__btn",
            onClick: _cache[3] || (_cache[3] = ($event) => unref(siteNotesStore).toggleSiteNotes())
          }, [
            createVNode(Icon, {
              name: unref(siteNotesIcon),
              size: 16
            }, null, 8, ["name"]),
            createBaseVNode("span", null, toDisplayString(unref(__)("Site Notes", "google-analytics-for-wordpress")), 1)
          ])) : createCommentVNode("", true)
        ]),
        unref(siteNotesStore).showSiteNotes ? (openBlock(), createBlock(_sfc_main$a, {
          key: 0,
          "date-range": __props.dateRange,
          onRefreshOverviewReport: onSiteNotesSaved
        }, null, 8, ["date-range"])) : createCommentVNode("", true),
        unref(siteNotesStore).showSiteNotes ? (openBlock(), createElementBlock("div", _hoisted_24, [
          createBaseVNode("button", {
            class: "monsterinsights-site-notes-toggle__btn",
            onClick: _cache[4] || (_cache[4] = withModifiers(($event) => unref(siteNotesStore).toggleSiteNotes(), ["prevent"])),
            type: "button"
          }, [
            createVNode(Icon, {
              name: unref(siteNotesIcon),
              size: 16
            }, null, 8, ["name"]),
            createBaseVNode("span", null, toDisplayString(unref(__)("Close Site Notes", "google-analytics-for-wordpress")), 1)
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "monsterinsights-overview-key-metrics" };
const _hoisted_2$4 = { class: "monsterinsights-overview-key-metrics__header" };
const _hoisted_3$4 = { class: "monsterinsights-overview-key-metrics__title" };
const _hoisted_4$4 = ["href"];
const _hoisted_5$3 = { class: "monsterinsights-overview-key-metrics__container" };
const _hoisted_6$3 = { class: "monsterinsights-overview-key-metrics__item" };
const _hoisted_7$3 = { class: "monsterinsights-overview-key-metrics__label" };
const _hoisted_8$3 = { class: "monsterinsights-overview-key-metrics__value-row" };
const _hoisted_9$2 = { class: "monsterinsights-overview-key-metrics__value" };
const _sfc_main$6 = {
  __name: "OverviewKeyMetrics",
  props: {
    keyMetricsData: {
      type: [Object, Array],
      default: null
    },
    activeTab: {
      type: String,
      default: "traffic"
    },
    viewFullReportUrl: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const CHANNEL_GROUP_MAP = {
      "Organic Search": "organic",
      "Organic Shopping": "organic",
      "Organic Social": "organic",
      "Organic Video": "organic",
      Direct: "direct",
      Referral: "referral",
      Social: "social",
      "Paid Search": "paid",
      "Paid Shopping": "paid",
      "Paid Social": "paid",
      "Paid Video": "paid",
      Display: "paid",
      Email: "email"
    };
    const KEY_METRICS_BY_TAB = {
      traffic: [
        { id: "organic", label: __("Organic Sessions", "google-analytics-for-wordpress"), channelGroup: true },
        { id: "social", label: __("Social Sessions", "google-analytics-for-wordpress"), channelGroup: true },
        { id: "paid", label: __("Paid Media Sessions", "google-analytics-for-wordpress"), channelGroup: true },
        { id: "email", label: __("Email Sessions", "google-analytics-for-wordpress"), channelGroup: true },
        { id: "referral", label: __("Referral Sessions", "google-analytics-for-wordpress"), channelGroup: true },
        { id: "direct", label: __("Direct Sessions", "google-analytics-for-wordpress"), channelGroup: true }
      ],
      engagement: [
        { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), apiKey: "sessions" },
        { id: "engagementRate", label: __("Engagement Rate", "google-analytics-for-wordpress"), apiKey: "engagementRate", type: "percent" },
        { id: "bounceRate", label: __("Bounce Rate", "google-analytics-for-wordpress"), apiKey: "bounceRate", type: "percent" },
        { id: "newUsers", label: __("New Users", "google-analytics-for-wordpress"), apiKey: "newUsers" },
        { id: "returningUsers", label: __("Returning Users", "google-analytics-for-wordpress"), apiKey: "returningUsers" },
        { id: "sessionDuration", label: __("Session Duration", "google-analytics-for-wordpress"), apiKey: "averageSessionDuration", type: "duration" }
      ],
      referrals: [
        { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), apiKey: "sessions" },
        { id: "engagedSessions", label: __("Engaged Sessions", "google-analytics-for-wordpress"), apiKey: "engagedSessions" },
        { id: "users", label: __("Users", "google-analytics-for-wordpress"), apiKey: "totalUsers" }
      ],
      ecommerce: [
        { id: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), apiKey: "ecommercePurchases" },
        { id: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), apiKey: "totalRevenue", type: "currency" },
        { id: "aov", label: __("AOV", "google-analytics-for-wordpress"), apiKey: "averagePurchaseRevenue", type: "currency" },
        { id: "addToCarts", label: __("Add to Carts", "google-analytics-for-wordpress"), apiKey: "addToCarts" },
        { id: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), apiKey: "conversionRate", type: "percent" },
        { id: "abandonmentRate", label: __("Abandonment Rate", "google-analytics-for-wordpress"), apiKey: "abandonmentRate", type: "percent" }
      ]
    };
    const RATE_METRICS = /* @__PURE__ */ new Set(["engagementRate", "bounceRate", "sessionKeyEventRate", "conversionRate", "abandonmentRate"]);
    const AVG_METRICS = /* @__PURE__ */ new Set(["averageSessionDuration", "averagePurchaseRevenue"]);
    function formatDisplayValue(val, type) {
      const n = Number(val);
      if (val == null || typeof val !== "number" && isNaN(n)) return "0";
      const num = typeof val === "number" ? val : n;
      if (type === "percent") return `${Number(num).toFixed(1)}%`;
      if (type === "currency") {
        const currency = getMiGlobal("currency", "USD") || "USD";
        return new Intl.NumberFormat(void 0, { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
      }
      if (type === "duration") {
        const sec = Math.round(num);
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${String(s).padStart(2, "0")}`;
      }
      if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M`;
      if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K`;
      return Number(num).toLocaleString();
    }
    function aggregateTabMetricsRows(rows, metricNames, periodIdx = 1) {
      if (!Array.isArray(rows) || rows.length === 0 || !Array.isArray(metricNames) || !metricNames.length) return {};
      const firstRow = rows[0];
      let rawFirst = firstRow?.m ?? [];
      if (rawFirst.length === 1 && Array.isArray(rawFirst[0]) && rawFirst[0].length >= metricNames.length) {
        rawFirst = rawFirst[0];
      }
      rawFirst.length >= metricNames.length && Array.isArray(rawFirst[0]) && rawFirst[0].length === 2;
      const sessionsIdx = metricNames.indexOf("sessions");
      const sums = {};
      const rateWeighted = {};
      const avgWeighted = {};
      function read(cell) {
        if (Array.isArray(cell) && cell.length >= 2) return parseFloat(cell[periodIdx]) || 0;
        return parseFloat(cell) || 0;
      }
      for (const row of rows) {
        let metricsRow = row?.m ?? [];
        if (metricsRow.length === 1 && Array.isArray(metricsRow[0])) metricsRow = metricsRow[0];
        if (metricsRow.length < metricNames.length) continue;
        const sessionWeight = sessionsIdx >= 0 ? read(metricsRow[sessionsIdx]) || 0 : 1;
        for (let i = 0; i < metricNames.length; i++) {
          const name = metricNames[i];
          const val = read(metricsRow[i]);
          if (RATE_METRICS.has(name)) {
            if (!rateWeighted[i]) rateWeighted[i] = { num: 0, denom: 0 };
            rateWeighted[i].num += val * sessionWeight;
            rateWeighted[i].denom += sessionWeight;
          } else if (AVG_METRICS.has(name)) {
            if (!avgWeighted[i]) avgWeighted[i] = { num: 0, denom: 0 };
            avgWeighted[i].num += val * sessionWeight;
            avgWeighted[i].denom += sessionWeight;
          } else {
            sums[name] = (sums[name] ?? 0) + val;
          }
        }
      }
      const result = { ...sums };
      for (let i = 0; i < metricNames.length; i++) {
        const name = metricNames[i];
        if (RATE_METRICS.has(name)) {
          const rw = rateWeighted[i];
          result[name] = rw && rw.denom > 0 ? rw.num / rw.denom * 100 : 0;
        } else if (AVG_METRICS.has(name)) {
          const aw = avgWeighted[i];
          result[name] = aw && aw.denom > 0 ? aw.num / aw.denom : 0;
        }
      }
      if (result.totalUsers != null && result.newUsers != null) {
        result.returningUsers = Math.max(0, (result.totalUsers ?? 0) - (result.newUsers ?? 0));
      }
      if (result.sessions != null && result.sessions > 0 && result.ecommercePurchases != null) {
        result.conversionRate = (result.ecommercePurchases ?? 0) / result.sessions * 100;
      }
      if (result.addToCarts != null && result.addToCarts > 0 && result.ecommercePurchases != null) {
        result.abandonmentRate = (result.addToCarts - result.ecommercePurchases) / result.addToCarts * 100;
      }
      return result;
    }
    function aggregateRowsByChannel(data) {
      const rows = Array.isArray(data) ? data : Array.isArray(data?.rows) ? data.rows : [];
      const currentTotals = {};
      const compareTotals = {};
      const isCombinedFormat = rows.length > 0 && Array.isArray(rows[0]?.m?.[0]) && rows[0].m[0].length >= 2;
      for (const row of rows) {
        const channelGroup = row?.d?.[1] ?? "(not set)";
        const metricId = CHANNEL_GROUP_MAP[channelGroup] ?? null;
        if (!metricId) continue;
        const m0 = row?.m?.[0];
        const currentVal = Array.isArray(m0) ? parseFloat(m0[0]) || 0 : parseFloat(m0) || 0;
        const compareVal = isCombinedFormat && Array.isArray(m0) ? parseFloat(m0[1]) || 0 : 0;
        currentTotals[metricId] = (currentTotals[metricId] ?? 0) + currentVal;
        if (isCombinedFormat) compareTotals[metricId] = (compareTotals[metricId] ?? 0) + compareVal;
      }
      return { current: currentTotals, compare: compareTotals };
    }
    function calculateTrend(current, previous) {
      if (previous == null || previous === 0 || isNaN(Number(previous))) return 0;
      const curr = Number(current) || 0;
      const prev = Number(previous) || 0;
      if (prev === 0) return 0;
      return Math.round((curr - prev) / prev * 1e3) / 10;
    }
    function parseTrafficKeyMetrics(keyMetricsData) {
      if (!keyMetricsData) {
        return KEY_METRICS_BY_TAB.traffic.map(({ id, label }) => ({ id, label, value: "0", trend: null }));
      }
      const currentData = keyMetricsData?.key_metrics ?? keyMetricsData;
      const compareData = keyMetricsData?.key_metrics_compare ?? null;
      const { current: currentTotals, compare: compareFromCurrent } = aggregateRowsByChannel(currentData);
      const previousTotals = compareData != null ? aggregateRowsByChannel(compareData).current : Object.keys(compareFromCurrent).length > 0 ? compareFromCurrent : {};
      const hasCompare = Object.keys(previousTotals).length > 0 && KEY_METRICS_BY_TAB.traffic.some(({ id }) => (previousTotals[id] ?? 0) !== 0);
      return KEY_METRICS_BY_TAB.traffic.map(({ id, label }) => {
        const current = currentTotals[id] ?? 0;
        const previous = previousTotals[id] ?? 0;
        const trend = hasCompare ? calculateTrend(current, previous) : null;
        const n = Number(current);
        let value = "0";
        if (!isNaN(n)) value = n >= 1e3 ? `${(n / 1e3).toFixed(1)}K` : n.toLocaleString();
        return { id, label, value, trend: trend ?? null };
      });
    }
    function parseTabKeyMetrics(keyMetricsData, activeTab) {
      const definitions = KEY_METRICS_BY_TAB[activeTab] || KEY_METRICS_BY_TAB.traffic;
      if (definitions.some((d) => d.channelGroup)) return parseTrafficKeyMetrics(keyMetricsData);
      const tabRows = keyMetricsData?.tab_metrics?.rows ?? keyMetricsData?.tab_metrics;
      if (!Array.isArray(tabRows) || tabRows.length === 0) {
        return definitions.map(({ id, label }) => ({ id, label, value: "0", trend: null }));
      }
      const metricNames = getTabMetricsForQuery(activeTab);
      const firstRow = tabRows[0];
      const firstRowM = firstRow?.m ?? [];
      const firstCell = Array.isArray(firstRowM) && firstRowM.length > 0 ? firstRowM[0] : null;
      const isCompare = Array.isArray(firstCell) && (firstCell.length === 2 && (typeof firstCell[0] === "number" || !Number.isNaN(parseFloat(firstCell[0]))) || firstCell.length > 0 && Array.isArray(firstCell[0]) && firstCell[0].length === 2);
      const currentAgg = aggregateTabMetricsRows(tabRows, metricNames, isCompare ? 1 : 0);
      const previousAgg = isCompare ? aggregateTabMetricsRows(tabRows, metricNames, 0) : null;
      return definitions.map(({ id, label, apiKey, type }) => {
        const key = apiKey || id;
        const current = currentAgg[key] ?? 0;
        const previous = previousAgg != null ? previousAgg[key] ?? 0 : null;
        const trend = previous != null ? calculateTrend(current, previous) : null;
        return {
          id,
          label,
          value: formatDisplayValue(current, type),
          trend: trend ?? null
        };
      });
    }
    const metrics = computed(() => {
      const tab = props.activeTab || "traffic";
      const data = props.keyMetricsData;
      if (tab === "traffic") {
        return parseTrafficKeyMetrics(data);
      }
      return parseTabKeyMetrics(data, tab);
    });
    const getTrendClass = (trend) => {
      if (trend == null) return "";
      return trend >= 0 ? "monsterinsights-overview-key-metrics__trend--positive" : "monsterinsights-overview-key-metrics__trend--negative";
    };
    const formatTrend = (trend) => {
      const absValue = Math.abs(trend);
      return `${absValue}%`;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", _hoisted_2$4, [
          createBaseVNode("h2", _hoisted_3$4, toDisplayString(unref(__)("Key Metrics", "google-analytics-for-wordpress")), 1),
          __props.viewFullReportUrl ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: __props.viewFullReportUrl,
            class: "monsterinsights-overview-key-metrics__link"
          }, [
            createBaseVNode("span", null, toDisplayString(unref(__)("View Full Report", "google-analytics-for-wordpress")), 1),
            createVNode(Icon, {
              name: "chevron-right",
              size: 20
            })
          ], 8, _hoisted_4$4)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_5$3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (metric) => {
            return openBlock(), createElementBlock("div", {
              key: metric.id,
              class: "monsterinsights-overview-key-metrics__item-wrapper"
            }, [
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("span", _hoisted_7$3, toDisplayString(metric.label), 1),
                createBaseVNode("div", _hoisted_8$3, [
                  createBaseVNode("span", _hoisted_9$2, toDisplayString(metric.value), 1),
                  metric.trend != null ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(["monsterinsights-overview-key-metrics__trend", getTrendClass(metric.trend)])
                  }, [
                    createVNode(Icon, {
                      name: metric.trend >= 0 ? "trend-up" : "trend-down",
                      size: 16
                    }, null, 8, ["name"]),
                    createBaseVNode("span", null, toDisplayString(formatTrend(metric.trend)), 1)
                  ], 2)) : createCommentVNode("", true)
                ])
              ])
            ]);
          }), 128))
        ])
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "monsterinsights-overview-report-table" };
const _hoisted_2$3 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_3$3 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_4$3 = {
  key: 0,
  class: "monsterinsights-overview-report-table__demo-badge"
};
const _hoisted_5$2 = { class: "monsterinsights-overview-report-table__header-right" };
const _hoisted_6$2 = {
  key: 0,
  class: "monsterinsights-overview-report-table__tabs"
};
const _hoisted_7$2 = ["onClick"];
const _hoisted_8$2 = {
  key: 0,
  class: "monsterinsights-overview-report-table__tab-divider"
};
const _hoisted_9$1 = ["href"];
const _hoisted_10$1 = { class: "monsterinsights-overview-report-table__table-wrapper" };
const _hoisted_11$1 = { class: "monsterinsights-overview-report-table__table" };
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = { class: "monsterinsights-overview-report-table__th-content" };
const _hoisted_14$1 = {
  key: 0,
  class: "monsterinsights-overview-report-table__row--loading"
};
const _hoisted_15$1 = ["colspan"];
const _hoisted_16$1 = {
  key: 1,
  class: "monsterinsights-overview-report-table__row--empty"
};
const _hoisted_17$1 = ["colspan"];
const _hoisted_18$1 = {
  key: 0,
  class: "monsterinsights-overview-report-table__cell-with-icon"
};
const _hoisted_19$1 = ["src", "alt"];
const _hoisted_20$1 = { key: 1 };
const _hoisted_21$1 = {
  key: 0,
  class: "monsterinsights-overview-report-table__footer"
};
const _hoisted_22$1 = {
  key: 1,
  class: "monsterinsights-overview-report-table__load-more"
};
const _sfc_main$5 = {
  __name: "OverviewReportTable",
  props: {
    title: {
      type: String,
      required: true
    },
    tabs: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: String,
      default: ""
    },
    columns: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      default: () => []
    },
    /** When true, shows a loading spinner and "Loading…" in the table body. */
    loading: {
      type: Boolean,
      default: false
    },
    hasLoadMore: {
      type: Boolean,
      default: false
    },
    showViewFullReport: {
      type: Boolean,
      default: true
    },
    /** When set, "View Full Report" is rendered as a link to this URL (e.g. report detail page). When empty, it emits 'view-full-report' on click. */
    viewFullReportUrl: {
      type: String,
      default: ""
    },
    rowLimit: {
      type: Number,
      default: 10
    },
    /** Optional. Column key used for the row gradient bar (share of total). When not set, uses sort column or first metric column (index 1). Use when the first metric column is not numeric (e.g. eCommerce Data: pass "revenue"). */
    barMetricKey: {
      type: String,
      default: ""
    },
    /** Label for the first column in the modal totals row (e.g. "Total Conv. Rate"). Defaults to "Totals". */
    totalLabel: {
      type: String,
      default: ""
    },
    /** Optional default sort column key. When set, the table starts sorted by this column (descending). */
    defaultSortKey: {
      type: String,
      default: ""
    },
    /** Whether to show the totals row in the modal table footer. */
    showTotals: {
      type: Boolean,
      default: true
    },
    /** Addon slug required for this table (e.g. 'page_insights'). When set and addon is inactive, Load More shows addon modal. */
    requiredAddon: {
      type: String,
      default: ""
    },
    /** Display name for the required addon. */
    requiredAddonName: {
      type: String,
      default: ""
    }
  },
  emits: ["update:activeTab", "view-full-report", "sort"],
  setup(__props, { emit: __emit }) {
    const reportTableModalOpen = ref(false);
    const proModalOpen = ref(false);
    const isLite = computed(() => true);
    const props = __props;
    const emit = __emit;
    const rowsSource = computed(() => props.rows);
    const { sortKey, sortDirection, sortedRows, onColumnHeaderClick, toSortableValue } = useSortableTable(rowsSource);
    if (props.defaultSortKey) {
      sortKey.value = props.defaultSortKey;
      sortDirection.value = "desc";
    }
    function isIconUrl(val) {
      return typeof val === "string" && (val.startsWith("http") || val.startsWith("/") || val.startsWith("data:"));
    }
    const needsAddonGate = computed(
      () => !!props.requiredAddon && !isAddonActive(props.requiredAddon)
    );
    function handleLoadMoreClick() {
      if (isLite.value || needsAddonGate.value) {
        proModalOpen.value = true;
      } else {
        reportTableModalOpen.value = true;
      }
    }
    function handleColumnHeaderClick(column) {
      onColumnHeaderClick(column);
      emit("sort", column.key);
    }
    const displayedRows = computed(() => {
      const baseRows = sortedRows.value;
      if (props.rowLimit != null && props.rowLimit > 0) {
        return baseRows.slice(0, props.rowLimit);
      }
      return baseRows;
    });
    const gradientColors = /* @__PURE__ */ (() => {
      return { c1: "#EDE5FF", c2: "#D0E8FF", c3: "#FFFFFF" };
    })();
    const displayedRowsWithBar = computed(() => {
      const rows = displayedRows.value;
      const columns = props.columns || [];
      const firstColKey = columns[0]?.key;
      const key = sortKey.value;
      if (rows.length === 0) return [];
      const metricKey = props.barMetricKey || (key && key !== firstColKey ? key : columns[1]?.key || null);
      if (!metricKey) {
        return rows.map((row) => ({ row, barPercent: 0 }));
      }
      const getNum = (row) => toSortableValue(row?.[metricKey]).num;
      const values = rows.map(getNum);
      const total = values.reduce((a, b) => a + b, 0);
      if (total <= 0) {
        return rows.map((row) => ({ row, barPercent: 0 }));
      }
      return rows.map((row, i) => ({
        row,
        barPercent: Math.min(100, values[i] / total * 100)
      }));
    });
    function getRowGradientStyle(barPercent) {
      if (barPercent <= 0) return {};
      const { c1, c2, c3 } = gradientColors;
      const mid = barPercent / 2;
      return {
        background: `linear-gradient(to right, ${c1} 0%, ${c2} ${mid}%, ${c3} ${barPercent}%, ${c3} 100%)`
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createBaseVNode("div", _hoisted_2$3, [
          createBaseVNode("h3", _hoisted_3$3, [
            createTextVNode(toDisplayString(__props.title) + " ", 1),
            needsAddonGate.value ? (openBlock(), createElementBlock("span", _hoisted_4$3, toDisplayString(unref(__)("Demo Data", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            __props.tabs.length ? (openBlock(), createElementBlock("div", _hoisted_6$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab, index) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: tab.value
                }, [
                  createBaseVNode("button", {
                    class: normalizeClass([
                      "monsterinsights-overview-report-table__tab",
                      { "monsterinsights-overview-report-table__tab--active": tab.value === __props.activeTab }
                    ]),
                    onClick: ($event) => _ctx.$emit("update:activeTab", tab.value)
                  }, toDisplayString(tab.label), 11, _hoisted_7$2),
                  index < __props.tabs.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_8$2)) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])) : createCommentVNode("", true),
            __props.showViewFullReport && __props.viewFullReportUrl ? (openBlock(), createElementBlock("a", {
              key: 1,
              href: __props.viewFullReportUrl,
              class: "monsterinsights-overview-report-table__view-link"
            }, [
              createBaseVNode("span", null, toDisplayString(unref(__)("View Full Report", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "chevron-right",
                size: 20
              })
            ], 8, _hoisted_9$1)) : __props.showViewFullReport ? (openBlock(), createElementBlock("button", {
              key: 2,
              class: "monsterinsights-overview-report-table__view-link",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("view-full-report"))
            }, [
              createBaseVNode("span", null, toDisplayString(unref(__)("View Full Report", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "chevron-right",
                size: 20
              })
            ])) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", _hoisted_10$1, [
          createBaseVNode("table", _hoisted_11$1, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.key,
                    class: normalizeClass({ "monsterinsights-overview-report-table__th--sortable": column.sortable !== false }),
                    onClick: ($event) => handleColumnHeaderClick(column)
                  }, [
                    createBaseVNode("div", _hoisted_13$1, [
                      createBaseVNode("span", null, toDisplayString(column.label), 1),
                      column.sortable !== false ? (openBlock(), createBlock(Icon, {
                        key: 0,
                        name: "sort",
                        size: 12
                      })) : createCommentVNode("", true)
                    ])
                  ], 10, _hoisted_12$1);
                }), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              __props.loading ? (openBlock(), createElementBlock("tr", _hoisted_14$1, [
                createBaseVNode("td", {
                  colspan: __props.columns.length,
                  class: "monsterinsights-overview-report-table__cell-loading"
                }, [
                  createVNode(LoadingSpinnerInline),
                  createBaseVNode("span", null, toDisplayString(unref(__)("Loading…", "google-analytics-for-wordpress")), 1)
                ], 8, _hoisted_15$1)
              ])) : displayedRowsWithBar.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_16$1, [
                createBaseVNode("td", {
                  colspan: __props.columns.length,
                  class: "monsterinsights-overview-report-table__cell-empty"
                }, toDisplayString(unref(__)("No data available", "google-analytics-for-wordpress")), 9, _hoisted_17$1)
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(displayedRowsWithBar.value, (item, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  key: rowIndex,
                  style: normalizeStyle(getRowGradientStyle(item.barPercent))
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column) => {
                    return openBlock(), createElementBlock("td", {
                      key: column.key
                    }, [
                      column.iconKey && item.row[column.iconKey] ? (openBlock(), createElementBlock("div", _hoisted_18$1, [
                        isIconUrl(item.row[column.iconKey]) ? (openBlock(), createElementBlock("img", {
                          key: 0,
                          src: item.row[column.iconKey],
                          alt: item.row[column.key],
                          style: { "width": "20px", "height": "20px", "object-fit": "contain" }
                        }, null, 8, _hoisted_19$1)) : (openBlock(), createBlock(Icon, {
                          key: 1,
                          name: item.row[column.iconKey],
                          size: 20
                        }, null, 8, ["name"])),
                        createBaseVNode("span", null, toDisplayString(item.row[column.key]), 1)
                      ])) : (openBlock(), createElementBlock("span", _hoisted_20$1, toDisplayString(item.row[column.key]), 1))
                    ]);
                  }), 128))
                ], 4);
              }), 128))
            ])
          ]),
          _ctx.$slots["table-footer"] && !__props.loading && displayedRowsWithBar.value.length ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
            renderSlot(_ctx.$slots, "table-footer", {}, void 0, true)
          ])) : createCommentVNode("", true),
          __props.hasLoadMore && (__props.rows.length > __props.rowLimit || needsAddonGate.value) ? (openBlock(), createElementBlock("div", _hoisted_22$1, [
            createBaseVNode("button", {
              class: "monsterinsights-overview-report-table__load-more-btn",
              onClick: handleLoadMoreClick
            }, [
              createBaseVNode("span", null, toDisplayString(unref(__)("Load More", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "load-more",
                size: 16
              })
            ])
          ])) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$b, {
          modelValue: reportTableModalOpen.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => reportTableModalOpen.value = $event),
          title: __props.title,
          columns: __props.columns,
          rows: __props.rows,
          "total-label": __props.totalLabel,
          "bar-metric-key": __props.barMetricKey,
          "show-totals": __props.showTotals
        }, null, 8, ["modelValue", "title", "columns", "rows", "total-label", "bar-metric-key", "show-totals"]),
        createVNode(OverviewProFeatureModal, {
          modelValue: proModalOpen.value,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => proModalOpen.value = $event),
          "addon-slug": needsAddonGate.value ? __props.requiredAddon : "",
          "addon-name": needsAddonGate.value ? __props.requiredAddonName : ""
        }, null, 8, ["modelValue", "addon-slug", "addon-name"])
      ]);
    };
  }
};
const OverviewReportTable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-9608a31c"]]);
const _hoisted_1$2 = { class: "monsterinsights-overview-upsell-cta__content" };
const _hoisted_2$2 = { class: "monsterinsights-overview-upsell-cta__text" };
const _hoisted_3$2 = { class: "monsterinsights-overview-upsell-cta__title" };
const _hoisted_4$2 = { class: "monsterinsights-overview-upsell-cta__description" };
const _hoisted_5$1 = ["href"];
const _hoisted_6$1 = ["src"];
const _hoisted_7$1 = { class: "monsterinsights-overview-upsell-cta__image" };
const _hoisted_8$1 = ["src"];
const _sfc_main$4 = {
  __name: "OverviewReportUpsellCTA",
  setup(__props) {
    new URL("" + new URL("../../assets/em-background-BPt0ZyG0.jpg", import.meta.url).href, import.meta.url).href;
    const ctaBackgroundStyle = {};
    const chartWithCharlieImage = new URL("" + new URL("../../assets/overview-upsell-cta-chart-with-charlie-L7ZsqcRa.png", import.meta.url).href, import.meta.url).href;
    const arrowImage = new URL("data:image/svg+xml,%3csvg%20width='101'%20height='53'%20viewBox='0%200%20101%2053'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_15653_6002)'%3e%3cpath%20d='M4.87516%2011.8474C10.7298%2010.3451%2016.5859%208.83737%2022.4405%207.33513C24.5001%206.65996%2026.5977%206.12434%2028.7188%205.71859C29.433%205.58519%2030.1591%205.89107%2030.3661%206.6579C30.5513%207.35426%2030.1366%208.18411%2029.427%208.36587C27.3711%208.89461%2025.3152%209.42336%2023.2593%209.95211C20.0344%2011.0034%2016.921%2012.396%2013.9627%2014.094C22.8624%2013.8458%2031.8239%2013.932%2040.5105%2015.8744C45.5205%2016.9947%2050.4464%2018.7711%2054.8736%2021.4145C56.0849%2022.1407%2057.2918%2022.9719%2058.4001%2023.9191C60.7722%2023.4486%2063.2657%2023.546%2065.6926%2024.0328C68.1141%2024.5183%2070.4631%2025.3504%2072.7598%2026.2516C75.1087%2027.1721%2077.4183%2028.2004%2079.6697%2029.3433C84.2016%2031.6484%2088.4803%2034.4243%2092.4829%2037.5826C93.4743%2038.3639%2094.4464%2039.1756%2095.4021%2040.0066C95.9468%2040.4836%2095.8792%2041.4505%2095.3943%2041.9557C94.848%2042.5216%2094.0483%2042.456%2093.4982%2041.9776C86.541%2035.9146%2078.4525%2031.1325%2069.7968%2028.0781C66.9455%2027.0687%2063.83%2026.1973%2060.759%2026.3453C61.8539%2027.7193%2062.7%2029.2823%2063.1467%2031.0425C64.0575%2034.65%2062.6932%2038.8828%2059.6971%2041.1015C58.187%2042.2137%2056.2082%2042.6209%2054.4191%2042.1636C52.4197%2041.6577%2050.7642%2040.1327%2049.7987%2038.303C48.8032%2036.4125%2048.4385%2034.1371%2048.9916%2032.0227C49.5458%2029.9262%2050.8287%2028.0597%2052.4771%2026.7004C53.355%2025.9787%2054.2885%2025.3951%2055.263%2024.9401C54.867%2024.6607%2054.4682%2024.3924%2054.0743%2024.1489C50.168%2021.6993%2045.8195%2020.0312%2041.3698%2018.9086C32.0261%2016.5484%2022.2604%2016.5901%2012.6573%2016.8861C12.0592%2016.9022%2011.4649%2016.9252%2010.8654%2016.9468C13.4258%2019.5431%2015.9901%2022.1463%2018.5505%2024.7426C19.7672%2025.9772%2017.8687%2027.9496%2016.6481%2026.7081C12.5232%2022.5219%208.39686%2018.3413%204.27196%2014.1551C3.58031%2013.4514%203.88362%2012.1035%204.86837%2011.8515L4.87516%2011.8474ZM57.3173%2026.9986C54.1733%2028.1122%2051.1559%2031.0091%2051.4279%2034.5691C51.5534%2036.1578%2052.3956%2037.8023%2053.642%2038.7675C54.7611%2039.6291%2056.1379%2039.8264%2057.4361%2039.2901C57.4186%2039.2914%2057.6988%2039.1577%2057.772%2039.1177C57.9334%2039.0239%2058.0908%2038.9232%2058.2443%2038.8156C58.3978%2038.7079%2058.2875%2038.8032%2058.4728%2038.6389C58.6349%2038.4982%2058.7877%2038.3491%2058.9381%2038.1876C59.3822%2037.7073%2059.7387%2037.1688%2060.0791%2036.4494C60.2431%2036.1028%2060.2724%2036.0338%2060.4058%2035.5849C60.5248%2035.1914%2060.6156%2034.7964%2060.6865%2034.3903C60.7592%2033.9552%2060.7726%2032.8446%2060.6978%2032.3832C60.3449%2030.2169%2059.1481%2028.3981%2057.6253%2026.8897C57.5254%2026.9228%2057.4201%2026.9545%2057.3187%2026.9931L57.3173%2026.9986Z'%20fill='%2310529D'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_15653_6002'%3e%3crect%20width='29'%20height='96'%20fill='white'%20transform='matrix(0.250639%20-0.968081%20-0.968081%20-0.250639%2092.9358%2052.1357)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", import.meta.url).href;
    const upgradeUrl = computed(() => {
      return getUpgradeUrl("overview-upsell-cta", "overview-report", "https://www.monsterinsights.com/lite/");
    });
    const text = {
      title: __("Get Better Insights. Take Action. ", "google-analytics-for-wordpress"),
      titleHighlight: __("Grow FASTER!", "google-analytics-for-wordpress"),
      description: __("Join over 3 million owners and start making data-driven decisions to grow your business.", "google-analytics-for-wordpress"),
      upgradeToPro: __("Upgrade to Pro", "google-analytics-for-wordpress")
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "monsterinsights-overview-upsell-cta",
        style: normalizeStyle(unref(ctaBackgroundStyle))
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", _hoisted_2$2, [
            createBaseVNode("h3", _hoisted_3$2, [
              createTextVNode(toDisplayString(text.title) + " ", 1),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", null, toDisplayString(text.titleHighlight), 1)
            ]),
            createBaseVNode("p", _hoisted_4$2, toDisplayString(text.description), 1)
          ]),
          createBaseVNode("a", {
            href: upgradeUrl.value,
            target: "_blank",
            rel: "noopener",
            class: "monsterinsights-overview-upsell-cta__btn"
          }, [
            createBaseVNode("span", null, toDisplayString(text.upgradeToPro), 1),
            createVNode(Icon, {
              name: "arrow-right",
              size: 20,
              color: "inherit"
            })
          ], 8, _hoisted_5$1),
          createBaseVNode("img", {
            src: unref(arrowImage),
            class: "monsterinsights-overview-upsell-cta__arrow",
            alt: ""
          }, null, 8, _hoisted_6$1)
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("img", {
            src: unref(chartWithCharlieImage),
            alt: ""
          }, null, 8, _hoisted_8$1)
        ])
      ], 4);
    };
  }
};
const _sfc_main$3 = {
  __name: "OverviewCustomDimensionsSection",
  props: {
    dateRange: {
      type: Object,
      required: true
    },
    isPremium: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const CUSTOM_DIMENSIONS_PRO_ONLY_KEYS = ["purchases", "averageOrderValue", "conversionRate"];
    const hasDimensions = computed(() => isAddonActive("dimensions"));
    const overviewStore = useOverviewReportStore();
    const effectiveFilters = computed(() => {
      const filters = [...overviewStore.activeFilters];
      if (overviewStore.activeDevice) {
        filters.push({
          type: "deviceCategory",
          condition: "is",
          value: overviewStore.activeDevice
        });
      }
      return filters;
    });
    const text = {
      customDimensions: __("Custom Dimensions", "google-analytics-for-wordpress")
    };
    const viewFullReportUrls = {
      dimensions: "/wp-admin/admin.php?page=monsterinsights_reports#/dimensions"
    };
    const customDimensionsTabs = [
      { label: __("Logged In", "google-analytics-for-wordpress"), value: "loggedIn" },
      { label: __("Post Type", "google-analytics-for-wordpress"), value: "postType" },
      { label: __("Author", "google-analytics-for-wordpress"), value: "author" },
      { label: __("Category", "google-analytics-for-wordpress"), value: "category" },
      { label: __("Tags", "google-analytics-for-wordpress"), value: "tags" },
      { label: __("Focus Keyword", "google-analytics-for-wordpress"), value: "focusKeyword" },
      { label: __("Day of Week", "google-analytics-for-wordpress"), value: "dayOfWeek" },
      { label: __("SEO Score", "google-analytics-for-wordpress"), value: "seoScore" }
    ];
    const customDimensionsActiveTab = ref("loggedIn");
    const customDimensionsColumnLabels = {
      loggedIn: __("Logged In", "google-analytics-for-wordpress"),
      postType: __("Post Type", "google-analytics-for-wordpress"),
      author: __("Author", "google-analytics-for-wordpress"),
      category: __("Category", "google-analytics-for-wordpress"),
      tags: __("Tags", "google-analytics-for-wordpress"),
      focusKeyword: __("Focus Keyword", "google-analytics-for-wordpress"),
      dayOfWeek: __("Day of Week", "google-analytics-for-wordpress"),
      seoScore: __("SEO Score", "google-analytics-for-wordpress")
    };
    const customDimensionsColumnsBase = [
      { key: "dimensionValue", label: "" },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress") },
      { key: "users", label: __("Users", "google-analytics-for-wordpress") },
      { key: "engagement", label: __("Engagement Rate", "google-analytics-for-wordpress") },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress") },
      { key: "purchases", label: __("Purchases", "google-analytics-for-wordpress") },
      { key: "averageOrderValue", label: __("Average Order Value (AOV)", "google-analytics-for-wordpress") },
      { key: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress") }
    ];
    const customDimensionsColumns = computed(() => {
      const label = customDimensionsColumnLabels[customDimensionsActiveTab.value] ?? customDimensionsColumnLabels.loggedIn;
      const cols = props.isPremium ? customDimensionsColumnsBase : customDimensionsColumnsBase.filter((col) => !CUSTOM_DIMENSIONS_PRO_ONLY_KEYS.includes(col.key));
      return cols.map((col, i) => i === 0 ? { ...col, label } : col);
    });
    const customDimensionsDataRef = ref(null);
    const customDimensionsLoading = ref(false);
    let customDimensionsLoadId = 0;
    function parseCustomDimensionsRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        const name = notSetLabel(row?.d?.[0]);
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        const users = parseFloat(arr[1]) || 0;
        const engagementRateDecimal = parseFloat(arr[2]) || 0;
        const engagementRatePercent = engagementRateDecimal * 100;
        const revenue = parseFloat(arr[3]) || 0;
        const purchases = parseFloat(arr[4]) || 0;
        const avgPurchaseRevenue = parseFloat(arr[5]) || 0;
        const conversionRate = sessions > 0 ? purchases / sessions * 100 : 0;
        return {
          dimensionValue: name,
          sessions: formatNum(sessions),
          users: formatNum(users),
          engagement: formatPct(engagementRatePercent),
          revenue: formatCurr(revenue),
          purchases: formatNum(purchases),
          averageOrderValue: formatCurr(avgPurchaseRevenue),
          conversionRate: formatPct(conversionRate)
        };
      });
    }
    const DAY_OF_WEEK_NAMES = [
      __("Sunday", "google-analytics-for-wordpress"),
      __("Monday", "google-analytics-for-wordpress"),
      __("Tuesday", "google-analytics-for-wordpress"),
      __("Wednesday", "google-analytics-for-wordpress"),
      __("Thursday", "google-analytics-for-wordpress"),
      __("Friday", "google-analytics-for-wordpress"),
      __("Saturday", "google-analytics-for-wordpress")
    ];
    const customDimensionsData = computed(() => {
      const raw = customDimensionsDataRef.value;
      if (!raw) return [];
      const tab = customDimensionsActiveTab.value;
      const filtered = filterTabbedData(raw, CUSTOM_DIMENSIONS_DIMENSION_TAB, effectiveFilters.value, CUSTOM_DIMENSIONS_TAB_TO_QUERY_ID);
      const tabData = filtered[tab];
      const rows = parseCustomDimensionsRows(tabData);
      if (tab === "dayOfWeek") {
        return rows.map((row) => {
          const idx = parseInt(row.dimensionValue, 10);
          return {
            ...row,
            dimensionValue: DAY_OF_WEEK_NAMES[idx] ?? row.dimensionValue
          };
        });
      }
      return rows;
    });
    async function loadCustomDimensionsData() {
      if (!props.dateRange.start || !props.dateRange.end) return;
      if (!hasDimensions.value) {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const sampleData = generateSampleCustomDimensionsData({ apiFilters });
        customDimensionsDataRef.value = sampleData;
        overviewStore.setCustomDimensions(sampleData);
        return;
      }
      const loadId = ++customDimensionsLoadId;
      customDimensionsLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchCustomDimensionsData(props.dateRange, apiFilters, props.isPremium);
        if (loadId !== customDimensionsLoadId) return;
        customDimensionsDataRef.value = data;
        overviewStore.setCustomDimensions(data);
        const runDeferred = () => {
          fetchCustomDimensionsDeferredData(props.dateRange, apiFilters, props.isPremium).then((deferred) => {
            if (loadId !== customDimensionsLoadId) return;
            const current = customDimensionsDataRef.value;
            if (current && deferred) {
              const merged = { ...current, ...deferred };
              customDimensionsDataRef.value = merged;
              overviewStore.setCustomDimensions(merged);
            }
          });
        };
        if (typeof requestIdleCallback !== "undefined") {
          requestIdleCallback(runDeferred, { timeout: 500 });
        } else {
          setTimeout(runDeferred, 0);
        }
      } catch (err) {
        if (loadId === customDimensionsLoadId) {
          console.error("Error loading custom dimensions:", err);
          customDimensionsDataRef.value = null;
          overviewStore.setCustomDimensions(null);
        }
      } finally {
        customDimensionsLoading.value = false;
      }
    }
    watch(
      () => overviewStore.getChartActiveTab,
      (tab) => {
        if (tab === "engagement") {
          loadCustomDimensionsData();
        }
      },
      { immediate: true }
    );
    watch(
      () => [props.dateRange.start, props.dateRange.end],
      () => {
        if (overviewStore.getChartActiveTab === "engagement") {
          loadCustomDimensionsData();
        }
      },
      { immediate: false }
    );
    watch(effectiveFilters, () => {
      if (overviewStore.getChartActiveTab === "engagement") {
        loadCustomDimensionsData();
      }
    }, { deep: true });
    onMounted(() => {
      if (overviewStore.getChartActiveTab === "engagement") {
        loadCustomDimensionsData();
      }
    });
    return (_ctx, _cache) => {
      return unref(overviewStore).getChartActiveTab === "engagement" ? (openBlock(), createBlock(OverviewReportTable, {
        key: 0,
        title: text.customDimensions,
        tabs: customDimensionsTabs,
        "active-tab": customDimensionsActiveTab.value,
        columns: customDimensionsColumns.value,
        rows: customDimensionsData.value,
        loading: customDimensionsLoading.value,
        "has-load-more": true,
        "view-full-report-url": viewFullReportUrls.dimensions,
        "required-addon": hasDimensions.value ? "" : "dimensions",
        "required-addon-name": "Dimensions",
        "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => customDimensionsActiveTab.value = $event)
      }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url", "required-addon"])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-overview-ecommerce-funnel" };
const _hoisted_2$1 = { class: "monsterinsights-overview-ecommerce-funnel__header" };
const _hoisted_3$1 = { class: "monsterinsights-overview-ecommerce-funnel__header-left" };
const _hoisted_4$1 = { class: "monsterinsights-overview-ecommerce-funnel__title" };
const _hoisted_5 = { class: "monsterinsights-overview-ecommerce-funnel__funnel-select-wrapper" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { value: "" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "monsterinsights-overview-ecommerce-funnel__header-right" };
const _hoisted_10 = {
  href: "/wp-admin/admin.php?page=monsterinsights_reports#/ecommerce-funnel",
  class: "monsterinsights-overview-ecommerce-funnel__view-link"
};
const _hoisted_11 = {
  key: 0,
  class: "monsterinsights-overview-ecommerce-funnel__loading"
};
const _hoisted_12 = {
  key: 1,
  class: "monsterinsights-overview-ecommerce-funnel__error"
};
const _hoisted_13 = {
  key: 2,
  class: "monsterinsights-overview-ecommerce-funnel__table-wrapper"
};
const _hoisted_14 = { class: "monsterinsights-overview-ecommerce-funnel__table" };
const _hoisted_15 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_16 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_17 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_18 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_19 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_20 = { class: "monsterinsights-overview-ecommerce-funnel__th-content" };
const _hoisted_21 = {
  key: 3,
  class: "monsterinsights-overview-ecommerce-funnel__empty"
};
const _hoisted_22 = {
  key: 4,
  class: "monsterinsights-overview-ecommerce-funnel__empty"
};
const _sfc_main$2 = {
  __name: "OverviewEcommerceFunnel",
  props: {
    dateRange: {
      type: Object,
      default: () => ({ start: "", end: "" })
    }
  },
  setup(__props) {
    const props = __props;
    const overviewStore = useOverviewReportStore();
    const gradientColors = /* @__PURE__ */ (() => {
      return { c1: "#EDE5FF", c2: "#D0E8FF", c3: "#FFFFFF" };
    })();
    function getRowGradientStyle(barPercent) {
      if (barPercent <= 0) return {};
      const { c1, c2, c3 } = gradientColors;
      const mid = barPercent / 2;
      return {
        background: `linear-gradient(to right, ${c1} 0%, ${c2} ${mid}%, ${c3} ${barPercent}%, ${c3} 100%)`
      };
    }
    const funnelModalOpen = ref(false);
    const selectedFunnelId = ref("");
    const funnelDataRef = ref(null);
    const funnelLoading = ref(false);
    const funnelError = ref(null);
    watch(
      () => overviewStore.activeFunnelId,
      (newId) => {
        selectedFunnelId.value = newId || "";
      },
      { immediate: true }
    );
    const onFunnelChange = () => {
      overviewStore.setActiveFunnelId(selectedFunnelId.value || null);
    };
    const openFunnelModal = () => {
      {
        overviewStore.openProModal();
        return;
      }
    };
    const closeFunnelModal = () => {
      funnelModalOpen.value = false;
    };
    const activeFunnel = computed(() => overviewStore.activeFunnel);
    const apiFilters = computed(
      () => buildApiFilters(overviewStore.activeFilters, overviewStore.activeDevice)
    );
    function normalizeFunnelApiResponse(raw, funnelSteps = []) {
      const rows = Array.isArray(raw) ? raw : Array.isArray(raw?.funnelTable?.rows) ? raw.funnelTable.rows : Array.isArray(raw?.data) ? raw.data : Array.isArray(raw?.rows) ? raw.rows : [];
      let totalRows = rows.filter(
        (r) => r.d && Array.isArray(r.d) && r.d[1] === "RESERVED_TOTAL"
      );
      if (totalRows.length === 0 && rows.length > 0) {
        totalRows = rows.filter(
          (r) => r.d && Array.isArray(r.d) && r.m && Array.isArray(r.m)
        );
      }
      totalRows.sort((a, b) => {
        const labelA = String(a.d?.[0] ?? "");
        const labelB = String(b.d?.[0] ?? "");
        const numA = parseInt(labelA.split(".")[0], 10) || 0;
        const numB = parseInt(labelB.split(".")[0], 10) || 0;
        return numA - numB;
      });
      if (funnelSteps.length > 0 && totalRows.length < funnelSteps.length) {
        const existingByIndex = /* @__PURE__ */ new Map();
        totalRows.forEach((row) => {
          const label = String(row.d?.[0] ?? "");
          const num = parseInt(label.split(".")[0], 10);
          if (num > 0) existingByIndex.set(num, row);
        });
        const filled = funnelSteps.map((step, idx) => {
          const stepNum = idx + 1;
          if (existingByIndex.has(stepNum)) {
            return existingByIndex.get(stepNum);
          }
          return {
            d: [`${stepNum}. ${step.value}`, "RESERVED_TOTAL"],
            m: [["0", "0", "0", "0"]]
          };
        });
        totalRows = filled;
      }
      const step1Count = totalRows.length ? Number(totalRows[0].m?.[0]?.[0] ?? 0) : 0;
      const steps = totalRows.map((row) => {
        const stepName = String(row.d?.[0] ?? "").trim() || "Step";
        const activeUsers = Number(row.m?.[0]?.[0] ?? 0);
        const completionRateDecimal = Number(row.m?.[0]?.[1] ?? 0);
        const abandonments = Number(row.m?.[0]?.[2] ?? 0);
        const abandonmentRateDecimal = Number(row.m?.[0]?.[3] ?? 0);
        const completionRate = completionRateDecimal * 100;
        const abandonmentRate = abandonmentRateDecimal * 100;
        const overallConversionRate2 = step1Count > 0 ? activeUsers / step1Count * 100 : 0;
        return {
          stepName,
          activeUsers,
          completionRate,
          abandonments,
          abandonmentRate,
          overallConversionRate: overallConversionRate2
        };
      });
      return { steps };
    }
    function normalizeStepToRow(apiStep, index, stepOneCount) {
      const name = apiStep.stepName ?? apiStep.name ?? `Step ${index + 1}`;
      const count = Number(apiStep.activeUsers ?? apiStep.count ?? apiStep.users ?? 0);
      const percentOfStep1 = stepOneCount > 0 ? (count / stepOneCount * 100).toFixed(2) : "0.00";
      const completionRate = apiStep.completionRate != null ? String(apiStep.completionRate).replace(/%$/, "") : null;
      const abandonments = apiStep.abandonments != null ? Number(apiStep.abandonments) : null;
      const abandonmentRate = apiStep.abandonmentRate != null ? String(apiStep.abandonmentRate).replace(/%$/, "") : null;
      const overallConversion = apiStep.overallConversionRate != null ? String(apiStep.overallConversionRate).replace(/%$/, "") : stepOneCount > 0 ? (count / stepOneCount * 100).toFixed(1) : "0.0";
      const displayCompletion = completionRate != null ? `${Number(completionRate).toFixed(1)}%` : "—";
      const displayAbandonments = abandonments != null ? abandonments : "—";
      const displayAbandonmentRate = abandonmentRate != null ? `${Number(abandonmentRate).toFixed(1)}%` : "—";
      const displayOverall = overallConversion != null ? `${Number(overallConversion).toFixed(1)}%` : "0.0%";
      const barPercent = Math.max(10, Math.min(parseFloat(percentOfStep1) * 0.4, 100));
      return {
        stepName: name,
        activeUsers: `${count} (${percentOfStep1}%)`,
        completionRate: displayCompletion,
        abandonments: displayAbandonments,
        abandonmentRate: displayAbandonmentRate,
        overallConversionRate: displayOverall,
        barPercent
      };
    }
    const funnelTableRows = computed(() => {
      const data = funnelDataRef.value;
      if (!data || !Array.isArray(data.steps) || data.steps.length === 0) return [];
      const steps = data.steps;
      const stepOneCount = steps[0] ? Number(steps[0].activeUsers ?? steps[0].count ?? steps[0].users ?? 0) : 0;
      return steps.map(
        (apiStep, index) => normalizeStepToRow(apiStep, index, stepOneCount)
      );
    });
    const overallConversionRate = computed(() => {
      const rows = funnelTableRows.value;
      if (rows.length === 0) {
        const data = funnelDataRef.value;
        if (data && data.overallConversionRate != null) {
          const v = Number(data.overallConversionRate);
          return Number.isFinite(v) ? `${v.toFixed(1)}%` : "0.0%";
        }
        return "0.0%";
      }
      return rows[rows.length - 1].overallConversionRate;
    });
    async function loadFunnelData() {
      const funnel = activeFunnel.value;
      const start = props.dateRange?.start;
      const end = props.dateRange?.end;
      if (!funnel || !start || !end || !funnel.steps || funnel.steps.length < 2) {
        funnelDataRef.value = null;
        funnelError.value = null;
        return;
      }
      funnelLoading.value = true;
      funnelError.value = null;
      try {
        const data = await fetchFunnelData(
          { start, end },
          funnel,
          apiFilters.value
        );
        funnelDataRef.value = normalizeFunnelApiResponse(data, funnel.steps);
      } catch (err) {
        funnelDataRef.value = null;
        funnelError.value = err?.message || "Failed to load funnel data";
      } finally {
        funnelLoading.value = false;
      }
    }
    watch(
      () => [
        activeFunnel.value?.id,
        props.dateRange?.start,
        props.dateRange?.end,
        apiFilters.value
      ],
      () => loadFunnelData(),
      { immediate: true }
    );
    const fetchSavedFunnels = () => {
      const ajaxData = {
        action: "monsterinsights_overview_report_get_funnel_filters",
        nonce: getMiGlobal$1("nonce", "")
      };
      wp.ajax.post(ajaxData).done((response) => {
        if (response && response.funnels) {
          overviewStore.setFunnels(response.funnels);
        }
      }).fail(() => {
        overviewStore.setFunnels([]);
      });
    };
    onMounted(() => {
      fetchSavedFunnels();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h2", _hoisted_4$1, toDisplayString(unref(__)("Funnels", "google-analytics-for-wordpress")), 1),
            createBaseVNode("div", _hoisted_5, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedFunnelId.value = $event),
                class: "monsterinsights-overview-ecommerce-funnel__funnel-select",
                disabled: funnelLoading.value,
                onChange: onFunnelChange
              }, [
                createBaseVNode("option", _hoisted_7, toDisplayString(unref(__)("Choose Funnel", "google-analytics-for-wordpress")), 1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(overviewStore).funnels, (funnel) => {
                  return openBlock(), createElementBlock("option", {
                    key: funnel.id,
                    value: funnel.id
                  }, toDisplayString(funnel.name), 9, _hoisted_8);
                }), 128))
              ], 40, _hoisted_6), [
                [vModelSelect, selectedFunnelId.value]
              ]),
              createVNode(Icon, {
                name: "chevron-down",
                size: 16
              })
            ])
          ]),
          createBaseVNode("div", _hoisted_9, [
            createBaseVNode("button", {
              type: "button",
              class: "monsterinsights-overview-ecommerce-funnel__manage-btn",
              onClick: openFunnelModal
            }, [
              createBaseVNode("span", null, toDisplayString(unref(__)("Manage Funnels", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "settings",
                size: 16
              })
            ]),
            createBaseVNode("a", _hoisted_10, [
              createBaseVNode("span", null, toDisplayString(unref(__)("View Full Report", "google-analytics-for-wordpress")), 1),
              createVNode(Icon, {
                name: "chevron-right",
                size: 20
              })
            ])
          ])
        ]),
        activeFunnel.value && funnelLoading.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
          createBaseVNode("span", null, toDisplayString(unref(__)("Loading funnel data...", "google-analytics-for-wordpress")), 1)
        ])) : activeFunnel.value && funnelError.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
          createVNode(Icon, {
            name: "no-saved-filters",
            size: 48
          }),
          createBaseVNode("p", null, toDisplayString(funnelError.value), 1)
        ])) : activeFunnel.value && funnelTableRows.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_13, [
          createBaseVNode("table", _hoisted_14, [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_15, [
                    createBaseVNode("span", null, toDisplayString(unref(sprintf)(
                      /* translators: %s - funnel name */
                      unref(__)("%s - Steps", "google-analytics-for-wordpress"),
                      activeFunnel.value.name
                    )), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ]),
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("span", null, toDisplayString(unref(__)("Active Users (% of Step 1)", "google-analytics-for-wordpress")), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ]),
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_17, [
                    createBaseVNode("span", null, toDisplayString(unref(__)("Completion Rates", "google-analytics-for-wordpress")), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ]),
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("span", null, toDisplayString(unref(__)("Abandonments", "google-analytics-for-wordpress")), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ]),
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_19, [
                    createBaseVNode("span", null, toDisplayString(unref(__)("Abandonment Rate", "google-analytics-for-wordpress")), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ]),
                createBaseVNode("th", null, [
                  createBaseVNode("div", _hoisted_20, [
                    createBaseVNode("span", null, toDisplayString(unref(__)("Overall Conversion Rate", "google-analytics-for-wordpress")), 1),
                    createVNode(Icon, {
                      name: "sort",
                      size: 12
                    })
                  ])
                ])
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(funnelTableRows.value, (row, index) => {
                return openBlock(), createElementBlock("tr", {
                  key: index,
                  style: normalizeStyle(getRowGradientStyle(row.barPercent))
                }, [
                  createBaseVNode("td", null, toDisplayString(row.stepName), 1),
                  createBaseVNode("td", null, toDisplayString(row.activeUsers), 1),
                  createBaseVNode("td", null, toDisplayString(row.completionRate), 1),
                  createBaseVNode("td", null, toDisplayString(row.abandonments), 1),
                  createBaseVNode("td", null, toDisplayString(row.abandonmentRate), 1),
                  createBaseVNode("td", null, toDisplayString(row.overallConversionRate), 1)
                ], 4);
              }), 128))
            ]),
            createBaseVNode("tfoot", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, toDisplayString(unref(sprintf)(
                  /* translators: %s - funnel name */
                  unref(__)("%s Conversion Rate", "google-analytics-for-wordpress"),
                  activeFunnel.value.name
                )), 1),
                _cache[1] || (_cache[1] = createBaseVNode("td", null, null, -1)),
                _cache[2] || (_cache[2] = createBaseVNode("td", null, null, -1)),
                _cache[3] || (_cache[3] = createBaseVNode("td", null, null, -1)),
                _cache[4] || (_cache[4] = createBaseVNode("td", null, null, -1)),
                createBaseVNode("td", null, toDisplayString(overallConversionRate.value), 1)
              ])
            ])
          ])
        ])) : activeFunnel.value && !funnelLoading.value && !funnelError.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
          createVNode(Icon, {
            name: "no-saved-filters",
            size: 64
          }),
          createBaseVNode("p", null, toDisplayString(unref(__)("No funnel data for this period", "google-analytics-for-wordpress")), 1)
        ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
          createVNode(Icon, {
            name: "no-saved-filters",
            size: 64
          }),
          createBaseVNode("p", null, toDisplayString(unref(__)("Select a funnel to view data", "google-analytics-for-wordpress")), 1)
        ])),
        createVNode(_sfc_main$c, {
          "is-open": funnelModalOpen.value,
          onClose: closeFunnelModal
        }, null, 8, ["is-open"])
      ]);
    };
  }
};
const _sfc_main$1 = {
  __name: "OverviewPremiumReportSection",
  props: {
    dateRange: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const overviewStore = useOverviewReportStore();
    const hasForms = computed(() => isAddonActive("forms"));
    const hasEcommerce = computed(() => isAddonActive("ecommerce"));
    const isEcommerceTab = computed(() => overviewStore.getChartActiveTab === "ecommerce");
    const effectiveFilters = computed(() => {
      const filters = [...overviewStore.activeFilters];
      if (overviewStore.activeDevice) {
        filters.push({
          type: "deviceCategory",
          condition: "is",
          value: overviewStore.activeDevice
        });
      }
      return filters;
    });
    const text = {
      formSubmissions: __("Form Submissions", "google-analytics-for-wordpress"),
      eCommerceLog: __("eCommerce Log", "google-analytics-for-wordpress"),
      eCommerceData: __("eCommerce Data", "google-analytics-for-wordpress")
    };
    const viewFullReportUrls = {
      formSubmissions: "/wp-admin/admin.php?page=monsterinsights_reports#/forms",
      ecommerce: "/wp-admin/admin.php?page=monsterinsights_reports#/ecommerce"
    };
    const formSubmissionsDataRef = ref(null);
    const formSubmissionsLoading = ref(false);
    const ecommerceLoading = ref(false);
    async function loadFormSubmissionsData() {
      if (!props.dateRange.start || !props.dateRange.end) return;
      if (!hasForms.value) {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const sampleBundle = generateSampleBundleData({ dateRange: props.dateRange, apiFilters });
        formSubmissionsDataRef.value = sampleBundle.form_submissions;
        overviewStore.setFormSubmissions(sampleBundle.form_submissions);
        return;
      }
      formSubmissionsLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchFormSubmissionsData(props.dateRange, apiFilters);
        formSubmissionsDataRef.value = data;
        overviewStore.setFormSubmissions(data);
      } catch (err) {
        console.error("Error loading form submissions:", err);
        formSubmissionsDataRef.value = null;
        overviewStore.setFormSubmissions(null);
      } finally {
        formSubmissionsLoading.value = false;
      }
    }
    const formSubmissionsTabs = [
      { label: __("Source / Medium", "google-analytics-for-wordpress"), value: "sourceMedium" },
      { label: __("Campaign", "google-analytics-for-wordpress"), value: "campaign" }
    ];
    const formSubmissionsActiveTab = ref("sourceMedium");
    const formSubmissionsColumnsByTab = {
      sourceMedium: [
        { key: "formSubmitDate", label: __("Form Submit Date", "google-analytics-for-wordpress") },
        { key: "formId", label: __("Form ID", "google-analytics-for-wordpress") },
        { key: "country", label: __("Country", "google-analytics-for-wordpress") },
        { key: "source", label: __("Source", "google-analytics-for-wordpress") },
        { key: "medium", label: __("Medium", "google-analytics-for-wordpress") }
      ],
      campaign: [
        { key: "campaign", label: __("Campaign", "google-analytics-for-wordpress") },
        { key: "formId", label: __("Form ID", "google-analytics-for-wordpress") },
        { key: "country", label: __("Country", "google-analytics-for-wordpress") },
        { key: "source", label: __("Source", "google-analytics-for-wordpress") },
        { key: "medium", label: __("Medium", "google-analytics-for-wordpress") }
      ]
    };
    const formSubmissionsActiveColumns = computed(() => formSubmissionsColumnsByTab[formSubmissionsActiveTab.value] || formSubmissionsColumnsByTab.sourceMedium);
    function formatDateHour(dateHourStr) {
      if (!dateHourStr) return "-";
      const s = String(dateHourStr).trim();
      if (s.length === 10) {
        const year = s.substring(0, 4);
        const month = s.substring(4, 6);
        const day = s.substring(6, 8);
        const hour = s.substring(8, 10);
        const date = new Date(year, parseInt(month, 10) - 1, day, parseInt(hour, 10));
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + " · " + date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
      }
      if (s.length === 8) {
        const year = s.substring(0, 4);
        const month = s.substring(4, 6);
        const day = s.substring(6, 8);
        const date = new Date(year, parseInt(month, 10) - 1, day);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      }
      return s;
    }
    function buildDimIndex(queryId) {
      const dims = QUERY_DIMENSIONS[queryId];
      if (!dims) return {};
      const sorted = getResponseDimensionOrder(dims);
      const map = {};
      sorted.forEach((dim, i) => {
        map[dim] = i;
      });
      return map;
    }
    function getDim(d, index, empty) {
      if (index === void 0) return empty;
      const v = d[index];
      return v !== void 0 && v !== null && String(v).trim() !== "" ? String(v) : empty;
    }
    function parseSourceMediumRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      const empty = __("(not set)", "google-analytics-for-wordpress");
      const idx = buildDimIndex("form_submissions_source_medium");
      return rows.map((row) => {
        const d = row?.d ?? [];
        const dateHour = getDim(d, idx.dateHour, "");
        return {
          formSubmitDate: formatDateHour(dateHour),
          _sort_formSubmitDate: dateHour,
          formId: getDim(d, idx["customEvent:form_id"], empty),
          country: getDim(d, idx.country, empty),
          source: getDim(d, idx.sessionSource, empty),
          medium: getDim(d, idx.sessionMedium, empty)
        };
      });
    }
    function parseCampaignRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      const empty = __("(not set)", "google-analytics-for-wordpress");
      const idx = buildDimIndex("form_submissions_campaign");
      return rows.map((row) => {
        const d = row?.d ?? [];
        return {
          campaign: getDim(d, idx.sessionCampaignName, empty),
          formId: getDim(d, idx["customEvent:form_id"], empty),
          country: getDim(d, idx.country, empty),
          source: getDim(d, idx.sessionSource, empty),
          medium: getDim(d, idx.sessionMedium, empty)
        };
      });
    }
    const formSubmissionsData = computed(() => {
      const tabbedData = formSubmissionsDataRef.value;
      if (!tabbedData) return [];
      const filtered = filterFormSubmissionsData(tabbedData, effectiveFilters.value);
      const tab = formSubmissionsActiveTab.value;
      const tabData = filtered?.[tab];
      if (!tabData) return [];
      return tab === "campaign" ? parseCampaignRows(tabData) : parseSourceMediumRows(tabData);
    });
    const eCommerceLogTabs = [
      { label: __("Date", "google-analytics-for-wordpress"), value: "date" },
      { label: __("Source / Medium", "google-analytics-for-wordpress"), value: "sourceMedium" },
      { label: __("Campaign", "google-analytics-for-wordpress"), value: "campaign" }
    ];
    const eCommerceLogActiveTab = ref("date");
    const eCommerceLogColumnDefs = [
      { key: "transactionDate", label: __("Transaction Date", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "transactionId", label: __("Transaction ID", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "transactionSource", label: __("Transaction Source", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "transactionMedium", label: __("Transaction medium", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "transactionCampaign", label: __("Transaction Campaign", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress") }
    ];
    const ECOMMERCE_LOG_COLUMN_ORDER = {
      date: ["transactionDate", "transactionId", "transactionSource", "transactionMedium", "transactionCampaign", "revenue"],
      sourceMedium: ["transactionSource", "transactionMedium", "transactionDate", "transactionId", "transactionCampaign", "revenue"],
      campaign: ["transactionCampaign", "transactionDate", "transactionId", "transactionSource", "transactionMedium", "revenue"]
    };
    const eCommerceLogColumns = computed(() => {
      const tab = eCommerceLogActiveTab.value;
      const order = ECOMMERCE_LOG_COLUMN_ORDER[tab] || ECOMMERCE_LOG_COLUMN_ORDER.date;
      const keyToCol = Object.fromEntries(eCommerceLogColumnDefs.map((c) => [c.key, c]));
      return order.map((key) => keyToCol[key]).filter(Boolean);
    });
    const eCommerceLogDataRef = ref(null);
    function formatRevenue(value) {
      const num = typeof value === "number" ? value : parseFloat(value);
      if (Number.isNaN(num)) return "—";
      const currency = getMiGlobal("currency", "USD") || "USD";
      return new Intl.NumberFormat(void 0, { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
    }
    const ECOMMERCE_LOG_DIM_INDEX = (() => {
      const order = getResponseDimensionOrder(QUERY_DIMENSIONS.ecommerce_log_date || []);
      const idx = {};
      order.forEach((dim, i) => {
        idx[dim] = i;
      });
      return idx;
    })();
    function parseEcommerceLogRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      const empty = __("(not set)", "google-analytics-for-wordpress");
      const idx = ECOMMERCE_LOG_DIM_INDEX;
      return rows.map((row) => {
        const d = row?.d ?? [];
        const m = row?.m ?? [];
        const dateHour = getDim(d, idx.dateHour, empty);
        const transactionId = getDim(d, idx.transactionId, empty);
        const source = getDim(d, idx.sessionSource, empty);
        const medium = getDim(d, idx.sessionMedium, empty);
        const campaign = getDim(d, idx.sessionCampaignName, empty);
        const revenueNum = m[0] != null ? Number(m[0]) : 0;
        return {
          transactionDate: formatDateHour(dateHour),
          _sort_transactionDate: dateHour,
          transactionId,
          transactionSource: source,
          transactionMedium: medium,
          transactionCampaign: campaign,
          revenue: formatRevenue(revenueNum)
        };
      });
    }
    const eCommerceLogData = computed(() => {
      const rawByTab = eCommerceLogDataRef.value;
      if (!rawByTab) return [];
      const tab = eCommerceLogActiveTab.value;
      const raw = rawByTab[tab];
      return raw ? parseEcommerceLogRows(raw) : [];
    });
    const eCommerceDataTabs = [
      { label: __("Coupon", "google-analytics-for-wordpress"), value: "coupon" }
    ];
    const eCommerceDataActiveTab = ref("coupon");
    const eCommerceDataColumns = [
      { key: "productName", label: __("Product Name", "google-analytics-for-wordpress") },
      { key: "coupon", label: __("Coupon", "google-analytics-for-wordpress"), excludeFromTotals: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress") },
      { key: "orders", label: __("Orders", "google-analytics-for-wordpress") },
      { key: "percentOfSales", label: __("% of Sales", "google-analytics-for-wordpress") }
    ];
    const eCommerceDataDataRef = ref(null);
    const ECOMMERCE_DATA_DIM_INDEX = (() => {
      const order = getResponseDimensionOrder(QUERY_DIMENSIONS.ecommerce_data || []);
      const idx = {};
      order.forEach((dim, i) => {
        idx[dim] = i;
      });
      return idx;
    })();
    function parseEcommerceDataRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      const empty = __("(not set)", "google-analytics-for-wordpress");
      const idx = ECOMMERCE_DATA_DIM_INDEX;
      const parsed = rows.filter((row) => !shouldHideNotSetValue(row?.d?.[idx.itemName])).map((row) => {
        const d = row?.d ?? [];
        const m = row?.m ?? [];
        const productName = getDim(d, idx.itemName, empty);
        const coupon = getDim(d, idx.orderCoupon, empty);
        const m0 = Array.isArray(m[0]) ? m[0] : m;
        const revenueNum = m0[0] != null ? Number(m0[0]) : 0;
        const orders = m0[1] != null ? String(m0[1]) : "0";
        return {
          productName,
          coupon,
          revenue: formatRevenue(revenueNum),
          revenueNum,
          orders
        };
      });
      const totalRevenue = parsed.reduce((sum, r) => sum + r.revenueNum, 0);
      return parsed.map((r) => {
        const percentOfSales = totalRevenue > 0 ? (r.revenueNum / totalRevenue * 100).toFixed(1) + "%" : "0%";
        return {
          productName: r.productName,
          coupon: r.coupon,
          revenue: r.revenue,
          orders: r.orders,
          percentOfSales
        };
      });
    }
    const eCommerceDataData = computed(() => {
      const raw = eCommerceDataDataRef.value;
      return raw ? parseEcommerceDataRows(raw) : [];
    });
    async function loadEcommerceOverviewData() {
      if (!props.dateRange.start || !props.dateRange.end) return;
      if (!hasEcommerce.value) {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const sampleBundle = generateSampleBundleData({ dateRange: props.dateRange, apiFilters });
        const ecom = sampleBundle.ecommerce_overview;
        eCommerceLogDataRef.value = {
          date: ecom.ecommerce_log_date,
          sourceMedium: ecom.ecommerce_log_source_medium,
          campaign: ecom.ecommerce_log_campaign
        };
        eCommerceDataDataRef.value = ecom.ecommerce_data;
        return;
      }
      ecommerceLoading.value = true;
      try {
        const {
          ecommerce_log_date,
          ecommerce_log_source_medium,
          ecommerce_log_campaign,
          ecommerce_data
        } = await fetchEcommerceOverviewData(props.dateRange, effectiveFilters.value);
        eCommerceLogDataRef.value = {
          date: ecommerce_log_date,
          sourceMedium: ecommerce_log_source_medium,
          campaign: ecommerce_log_campaign
        };
        eCommerceDataDataRef.value = ecommerce_data;
        if (typeof overviewStore.setEcommerceOverview === "function") {
          overviewStore.setEcommerceOverview({
            log: {
              date: ecommerce_log_date,
              sourceMedium: ecommerce_log_source_medium,
              campaign: ecommerce_log_campaign
            },
            data: ecommerce_data
          });
        }
      } catch (err) {
        console.error("Error loading eCommerce overview data:", err);
        eCommerceLogDataRef.value = null;
        eCommerceDataDataRef.value = null;
      } finally {
        ecommerceLoading.value = false;
      }
    }
    watch(
      () => overviewStore.getChartActiveTab,
      (tab) => {
        if (tab === "ecommerce") {
          loadEcommerceOverviewData();
        }
      },
      { immediate: true }
    );
    watch(
      () => [props.dateRange.start, props.dateRange.end],
      () => {
        loadFormSubmissionsData();
        if (overviewStore.getChartActiveTab === "ecommerce") {
          loadEcommerceOverviewData();
        }
      },
      { immediate: false }
    );
    watch(effectiveFilters, () => {
      if (overviewStore.getChartActiveTab === "ecommerce") {
        loadEcommerceOverviewData();
      }
    }, { deep: true });
    onMounted(() => {
      loadFormSubmissionsData();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(OverviewReportTable, {
          title: text.formSubmissions,
          tabs: formSubmissionsTabs,
          "active-tab": formSubmissionsActiveTab.value,
          columns: formSubmissionsActiveColumns.value,
          rows: formSubmissionsData.value,
          loading: formSubmissionsLoading.value,
          "has-load-more": true,
          "show-totals": false,
          "view-full-report-url": viewFullReportUrls.formSubmissions,
          "default-sort-key": formSubmissionsActiveTab.value === "sourceMedium" ? "formSubmitDate" : "campaign",
          "required-addon": hasForms.value ? "" : "forms",
          "required-addon-name": "Forms",
          "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => formSubmissionsActiveTab.value = $event)
        }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url", "default-sort-key", "required-addon"]),
        isEcommerceTab.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(OverviewReportTable, {
            title: text.eCommerceLog,
            tabs: eCommerceLogTabs,
            "active-tab": eCommerceLogActiveTab.value,
            columns: eCommerceLogColumns.value,
            rows: eCommerceLogData.value,
            loading: ecommerceLoading.value,
            "has-load-more": true,
            "view-full-report-url": viewFullReportUrls.ecommerce,
            "default-sort-key": "transactionDate",
            "required-addon": hasEcommerce.value ? "" : "ecommerce",
            "required-addon-name": "eCommerce",
            "onUpdate:activeTab": _cache[1] || (_cache[1] = ($event) => eCommerceLogActiveTab.value = $event)
          }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url", "required-addon"]),
          createVNode(OverviewReportTable, {
            title: text.eCommerceData,
            tabs: eCommerceDataTabs,
            "active-tab": eCommerceDataActiveTab.value,
            columns: eCommerceDataColumns,
            rows: eCommerceDataData.value,
            loading: ecommerceLoading.value,
            "has-load-more": true,
            "view-full-report-url": viewFullReportUrls.ecommerce,
            "bar-metric-key": "revenue",
            "required-addon": hasEcommerce.value ? "" : "ecommerce",
            "required-addon-name": "eCommerce",
            "onUpdate:activeTab": _cache[2] || (_cache[2] = ($event) => eCommerceDataActiveTab.value = $event)
          }, null, 8, ["title", "active-tab", "rows", "loading", "view-full-report-url", "required-addon"]),
          hasEcommerce.value ? (openBlock(), createBlock(_sfc_main$2, {
            key: 0,
            "date-range": __props.dateRange
          }, null, 8, ["date-range"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "monsterinsights-not-authenticated-notice"
};
const _hoisted_2 = { class: "monsterinsights-settings-input monsterinsights-settings-input-authenticate" };
const _hoisted_3 = {
  key: 2,
  class: "monsterinsights-overview-report-two-col"
};
const _hoisted_4 = { class: "monsterinsights-overview-report-two-col" };
const _sfc_main = {
  __name: "OverviewReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const dateRange = overviewStore.dateRange;
    const {
      canViewReports,
      isAuthenticated,
      needsReAuth: authNeedsReAuth,
      shouldBlur: authShouldBlur
    } = useReportPermissions();
    const apiReAuth = ref(false);
    const needsReAuth = computed(() => authNeedsReAuth.value || apiReAuth.value);
    const shouldBlur = computed(() => authShouldBlur.value || apiReAuth.value);
    const isPremium = computed(() => isPro());
    const hasPageInsights = computed(() => isAddonActive("page_insights"));
    const effectiveFilters = computed(() => {
      const filters = [...storeActiveFilters.value];
      if (storeActiveDevice.value) {
        filters.push({
          type: "deviceCategory",
          condition: "is",
          value: storeActiveDevice.value
        });
      }
      return filters;
    });
    const text = {
      marketingCampaigns: __("Marketing Campaigns", "google-analytics-for-wordpress"),
      pages: __("Pages", "google-analytics-for-wordpress"),
      demographics: __("Demographics", "google-analytics-for-wordpress"),
      devices: __("Devices", "google-analytics-for-wordpress"),
      topReferrals: __("Top 10 Referrals", "google-analytics-for-wordpress"),
      topPosts: __("Top 10 Posts/Pages", "google-analytics-for-wordpress")
    };
    const viewFullReportUrls = {
      marketingCampaigns: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-campaign",
      pages: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-landing-pages",
      devices: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-technology",
      referrals: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-source-medium",
      topPosts: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-landing-pages"
    };
    const keyMetricsFullReportUrls = {
      traffic: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-overview",
      engagement: "/wp-admin/admin.php?page=monsterinsights_reports#/publishers",
      referrals: "/wp-admin/admin.php?page=monsterinsights_reports#/traffic-source-medium",
      ecommerce: "/wp-admin/admin.php?page=monsterinsights_reports#/ecommerce"
    };
    const keyMetricsViewFullReportUrl = computed(() => keyMetricsFullReportUrls[chartActiveTab.value] || "");
    const keyMetricsData = ref(null);
    const chartActiveTab = computed(() => overviewStore.getChartActiveTab);
    const marketingCampaignsDataRef = ref(null);
    const marketingCampaignsLoading = ref(false);
    const pagesLoading = ref(false);
    const topPagesLoading = ref(false);
    const demographicsLoading = ref(false);
    const devicesLoading = ref(false);
    function isReAuthError(err) {
      const msg = String(err?.message || err || "").toLowerCase();
      return msg.includes("invalid_grant") || msg.includes("bearer token unavailable") || msg.includes(REPORTING_REAUTH_ERROR);
    }
    function handleApiError(err) {
      if (isReAuthError(err)) {
        apiReAuth.value = true;
      }
    }
    function onOverviewError(err) {
      handleApiError(err);
    }
    function onOverviewDataLoaded(response) {
      keyMetricsData.value = {
        key_metrics: response?.key_metrics ?? null,
        key_metrics_compare: response?.key_metrics_compare ?? null,
        tab_metrics: response?.tab_metrics ?? null
      };
    }
    async function loadMarketingCampaignsData() {
      if (!dateRange.start || !dateRange.end) return;
      marketingCampaignsLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchMarketingCampaignsData(dateRange, apiFilters, isPremium.value);
        marketingCampaignsDataRef.value = data;
        overviewStore.setMarketingCampaigns(data);
      } catch (err) {
        console.error("Error loading marketing campaigns:", err);
        handleApiError(err);
        marketingCampaignsDataRef.value = null;
        overviewStore.setMarketingCampaigns(null);
      } finally {
        marketingCampaignsLoading.value = false;
      }
    }
    const pagesDataRef = ref(null);
    async function loadPagesData() {
      if (!dateRange.start || !dateRange.end) return;
      if (!hasPageInsights.value) {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const sampleBundle = generateSampleBundleData({ dateRange, apiFilters });
        pagesDataRef.value = sampleBundle.pages;
        overviewStore.setPages(sampleBundle.pages);
        return;
      }
      pagesLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchPagesData(dateRange, apiFilters, isPremium.value);
        pagesDataRef.value = data;
        overviewStore.setPages(data);
      } catch (err) {
        console.error("Error loading pages:", err);
        handleApiError(err);
        pagesDataRef.value = null;
        overviewStore.setPages(null);
      } finally {
        pagesLoading.value = false;
      }
    }
    const topPagesDataRef = ref(null);
    async function loadTopPagesData() {
      if (!dateRange.start || !dateRange.end) return;
      topPagesLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchTopPagesData(dateRange, apiFilters);
        topPagesDataRef.value = data;
      } catch (err) {
        console.error("Error loading top pages:", err);
        handleApiError(err);
        topPagesDataRef.value = null;
      } finally {
        topPagesLoading.value = false;
      }
    }
    const demographicsDataRef = ref(null);
    const devicesDataRef = ref(null);
    async function loadDemographicsData() {
      if (!dateRange.start || !dateRange.end) return;
      demographicsLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchDemographicsData(dateRange, apiFilters);
        demographicsDataRef.value = data;
        overviewStore.setDemographics(data);
      } catch (err) {
        console.error("Error loading demographics:", err);
        handleApiError(err);
        demographicsDataRef.value = null;
        overviewStore.setDemographics(null);
      } finally {
        demographicsLoading.value = false;
      }
    }
    async function loadDevicesData() {
      if (!dateRange.start || !dateRange.end) return;
      devicesLoading.value = true;
      try {
        const apiFilters = buildApiFilters(effectiveFilters.value, "");
        const data = await fetchDevicesData(dateRange, apiFilters);
        devicesDataRef.value = data;
        overviewStore.setDevices(data);
      } catch (err) {
        console.error("Error loading devices:", err);
        handleApiError(err);
        devicesDataRef.value = null;
        overviewStore.setDevices(null);
      } finally {
        devicesLoading.value = false;
      }
    }
    function scheduleTableDataLoad() {
      if (!canViewReports.value) return;
      setTimeout(() => {
        loadMarketingCampaignsData();
        loadPagesData();
        loadTopPagesData();
        loadDemographicsData();
        loadDevicesData();
      }, 0);
    }
    watch(
      () => [dateRange.start, dateRange.end],
      () => {
        scheduleTableDataLoad();
      },
      { immediate: false }
    );
    watch(
      [storeActiveFilters, storeActiveDevice],
      () => {
        scheduleTableDataLoad();
      },
      { deep: true, immediate: false }
    );
    onMounted(() => {
      scheduleTableDataLoad();
    });
    function parseMarketingCampaignsRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        const name = notSetLabel(row?.d?.[0]);
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        const users = parseFloat(arr[1]) || 0;
        const engagementRateDecimal = parseFloat(arr[2]) || 0;
        const engagementRatePercent = engagementRateDecimal * 100;
        const revenue = parseFloat(arr[3]) || 0;
        const purchases = parseFloat(arr[4]) || 0;
        const avgPurchaseRevenue = parseFloat(arr[5]) || 0;
        const conversionRate = sessions > 0 ? purchases / sessions * 100 : 0;
        return {
          campaignName: name,
          sessions: formatNum(sessions),
          users: formatNum(users),
          engagement: formatPct(engagementRatePercent),
          revenue: formatCurr(revenue),
          purchases: formatNum(purchases),
          averageOrderValue: formatCurr(avgPurchaseRevenue),
          conversionRate: formatPct(conversionRate)
        };
      });
    }
    const marketingCampaignsTabs = [
      { label: __("Campaign", "google-analytics-for-wordpress"), value: "campaign" },
      { label: __("Source", "google-analytics-for-wordpress"), value: "source" },
      { label: __("Medium", "google-analytics-for-wordpress"), value: "medium" },
      { label: __("Term", "google-analytics-for-wordpress"), value: "term" },
      { label: __("Content", "google-analytics-for-wordpress"), value: "content" }
    ];
    const marketingCampaignsActiveTab = ref("campaign");
    const marketingCampaignsColumnLabels = {
      campaign: __("Campaign Name", "google-analytics-for-wordpress"),
      source: __("Source", "google-analytics-for-wordpress"),
      medium: __("Medium", "google-analytics-for-wordpress"),
      term: __("Term", "google-analytics-for-wordpress"),
      content: __("Content", "google-analytics-for-wordpress")
    };
    const MARKETING_CAMPAIGNS_PRO_ONLY_KEYS = ["purchases", "averageOrderValue", "conversionRate"];
    const marketingCampaignsColumnsBase = [
      { key: "campaignName", label: "", sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "users", label: __("Users", "google-analytics-for-wordpress"), sortable: true },
      { key: "engagement", label: __("Engagement", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "purchases", label: __("Purchases", "google-analytics-for-wordpress"), sortable: true },
      { key: "averageOrderValue", label: __("Average Order Value", "google-analytics-for-wordpress"), sortable: true },
      { key: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), sortable: true }
    ];
    const marketingCampaignsColumns = computed(() => {
      const label = marketingCampaignsColumnLabels[marketingCampaignsActiveTab.value] ?? marketingCampaignsColumnLabels.campaign;
      const cols = isPremium.value ? marketingCampaignsColumnsBase : marketingCampaignsColumnsBase.filter((col) => !MARKETING_CAMPAIGNS_PRO_ONLY_KEYS.includes(col.key));
      return cols.map((col, i) => i === 0 ? { ...col, label } : col);
    });
    const marketingCampaignsData = computed(() => {
      const raw = marketingCampaignsDataRef.value;
      if (!raw) return [];
      const filtered = filterTabbedData(raw, MC_DIMENSION_TAB, effectiveFilters.value, MC_TAB_TO_QUERY_ID);
      const tabData = filtered[marketingCampaignsActiveTab.value];
      return parseMarketingCampaignsRows(tabData);
    });
    const pagesTabs = [
      { label: __("Landing Page", "google-analytics-for-wordpress"), value: "landingPage" },
      { label: __("Page Location", "google-analytics-for-wordpress"), value: "pageLocation" },
      { label: __("Page Title", "google-analytics-for-wordpress"), value: "pageTitle" },
      { label: __("Query String", "google-analytics-for-wordpress"), value: "queryString" }
    ];
    const pagesActiveTab = ref("landingPage");
    const pagesColumnLabels = {
      landingPage: __("Landing Page", "google-analytics-for-wordpress"),
      pageLocation: __("Page Location", "google-analytics-for-wordpress"),
      pageTitle: __("Page Title", "google-analytics-for-wordpress"),
      queryString: __("Query String", "google-analytics-for-wordpress")
    };
    const PAGES_PRO_ONLY_KEYS = ["purchases", "averageOrderValue", "conversionRate"];
    const pagesColumnsBase = [
      { key: "landingPage", label: "", sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "users", label: __("Users", "google-analytics-for-wordpress"), sortable: true },
      { key: "engagement", label: __("Engagement", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "purchases", label: __("Purchases", "google-analytics-for-wordpress"), sortable: true },
      { key: "averageOrderValue", label: __("Average Order Value", "google-analytics-for-wordpress"), sortable: true },
      { key: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), sortable: true }
    ];
    const pagesColumns = computed(() => {
      const label = pagesColumnLabels[pagesActiveTab.value] ?? pagesColumnLabels.landingPage;
      const cols = isPremium.value ? pagesColumnsBase : pagesColumnsBase.filter((col) => !PAGES_PRO_ONLY_KEYS.includes(col.key));
      return cols.map((col, i) => i === 0 ? { ...col, label } : col);
    });
    function parsePagesRows(apiData, stripDomain = false) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        let name = notSetLabel(row?.d?.[0]);
        if (stripDomain) {
          name = stripUrlDomain(name);
        }
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        const users = parseFloat(arr[1]) || 0;
        const engagementRateDecimal = parseFloat(arr[2]) || 0;
        const engagementRatePercent = engagementRateDecimal * 100;
        const revenue = parseFloat(arr[3]) || 0;
        const purchases = parseFloat(arr[4]) || 0;
        const avgPurchaseRevenue = parseFloat(arr[5]) || 0;
        const conversionRate = sessions > 0 ? purchases / sessions * 100 : 0;
        return {
          landingPage: name,
          sessions: formatNum(sessions),
          users: formatNum(users),
          engagement: formatPct(engagementRatePercent),
          revenue: formatCurr(revenue),
          purchases: formatNum(purchases),
          averageOrderValue: formatCurr(avgPurchaseRevenue),
          conversionRate: formatPct(conversionRate)
        };
      });
    }
    const pagesData = computed(() => {
      const raw = pagesDataRef.value;
      if (!raw) return [];
      const filtered = filterTabbedData(raw, PAGES_DIMENSION_TAB, effectiveFilters.value, PAGES_TAB_TO_QUERY_ID);
      const tabData = filtered[pagesActiveTab.value];
      return parsePagesRows(tabData, pagesActiveTab.value === "pageLocation");
    });
    const demographicsTabs = [
      { label: __("Country", "google-analytics-for-wordpress"), value: "country" },
      { label: __("State", "google-analytics-for-wordpress"), value: "state" },
      { label: __("New vs Returning", "google-analytics-for-wordpress"), value: "newVsReturning" }
    ];
    const demographicsActiveTab = ref("country");
    const demographicsColumnLabels = {
      country: __("Country", "google-analytics-for-wordpress"),
      state: __("State", "google-analytics-for-wordpress"),
      newVsReturning: __("New vs Returning", "google-analytics-for-wordpress")
    };
    const demographicsColumnsBase = [
      { key: "dimensionName", label: "", sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "engagement", label: __("Engagement", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true }
    ];
    const demographicsColumns = computed(() => {
      const label = demographicsColumnLabels[demographicsActiveTab.value] ?? demographicsColumnLabels.country;
      return demographicsColumnsBase.map(
        (col, i) => i === 0 ? { ...col, label } : col
      );
    });
    function parseDemographicsRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        const name = notSetLabel(row?.d?.[0]);
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        const revenue = parseFloat(arr[1]) || 0;
        const engagementRateDecimal = parseFloat(arr[2]) || 0;
        const engagementRatePercent = engagementRateDecimal * 100;
        return {
          dimensionName: name,
          sessions: formatNum(sessions),
          engagement: formatPct(engagementRatePercent),
          revenue: formatCurr(revenue)
        };
      });
    }
    const demographicsData = computed(() => {
      const raw = demographicsDataRef.value;
      if (!raw) return [];
      const filtered = filterTabbedData(raw, DEMOGRAPHICS_DIMENSION_TAB, effectiveFilters.value, DEMOGRAPHICS_TAB_TO_QUERY_ID);
      const tabData = filtered[demographicsActiveTab.value];
      return parseDemographicsRows(tabData);
    });
    const devicesTabs = [
      { label: __("Browser", "google-analytics-for-wordpress"), value: "browser" },
      { label: __("OS", "google-analytics-for-wordpress"), value: "os" },
      { label: __("Size", "google-analytics-for-wordpress"), value: "size" }
    ];
    const devicesActiveTab = ref("browser");
    const devicesColumnLabels = {
      browser: __("Browser", "google-analytics-for-wordpress"),
      os: __("OS", "google-analytics-for-wordpress"),
      size: __("Size", "google-analytics-for-wordpress")
    };
    const devicesColumnsBase = [
      { key: "dimensionName", label: "", iconKey: "icon", sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true },
      { key: "engagement", label: __("Engagement", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true }
    ];
    const devicesColumns = computed(() => {
      const label = devicesColumnLabels[devicesActiveTab.value] ?? devicesColumnLabels.browser;
      return devicesColumnsBase.map(
        (col, i) => i === 0 ? { ...col, label } : col
      );
    });
    const BROWSER_ICON_NAMES = ["chrome", "firefox", "safari", "edge", "opera", "brave"];
    function getDevicesRowIcon(dimensionValue, activeTab) {
      if (activeTab !== "browser" || !dimensionValue) return void 0;
      const name = String(dimensionValue).trim().toLowerCase();
      const match = BROWSER_ICON_NAMES.find((icon) => name.includes(icon));
      if (!match) return void 0;
      const baseAssets = getMiGlobal("plugin_assets_url", "");
      if (!baseAssets) return void 0;
      return baseAssets + "images/browsers/" + match + ".svg";
    }
    function parseDevicesRows(apiData, activeTab = "browser") {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        const dimVal = row?.d?.[0];
        const name = notSetLabel(dimVal);
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        const revenue = parseFloat(arr[1]) || 0;
        const engagementRateDecimal = parseFloat(arr[2]) || 0;
        const engagementRatePercent = engagementRateDecimal * 100;
        const icon = getDevicesRowIcon(dimVal, activeTab);
        return {
          dimensionName: name,
          icon: icon || void 0,
          sessions: formatNum(sessions),
          engagement: formatPct(engagementRatePercent),
          revenue: formatCurr(revenue)
        };
      });
    }
    const devicesData = computed(() => {
      const raw = devicesDataRef.value;
      if (!raw) return [];
      const filtered = filterTabbedData(raw, DEVICES_DIMENSION_TAB, effectiveFilters.value, DEVICES_TAB_TO_QUERY_ID);
      const tabData = filtered[devicesActiveTab.value];
      return parseDevicesRows(tabData, devicesActiveTab.value);
    });
    function parseNameSessionsRows(apiData) {
      const rows = Array.isArray(apiData?.rows) ? apiData.rows : Array.isArray(apiData) ? apiData : [];
      if (rows.length === 0) return [];
      return rows.filter((row) => !shouldHideNotSetValue(row?.d?.[0])).map((row) => {
        const name = notSetLabel(row?.d?.[0]);
        const m0 = row?.m?.[0];
        const arr = Array.isArray(m0) ? m0 : [];
        const sessions = parseFloat(arr[0]) || 0;
        return {
          name,
          sessions: formatNum(sessions)
        };
      });
    }
    const topReferralsColumns = [
      { key: "name", label: __("Referral", "google-analytics-for-wordpress"), sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true }
    ];
    const topReferralsData = computed(() => parseNameSessionsRows(marketingCampaignsDataRef.value?.source));
    const topPostsColumns = [
      { key: "name", label: __("Title", "google-analytics-for-wordpress"), sortable: true },
      { key: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), sortable: true }
    ];
    const topPostsData = computed(() => parseNameSessionsRows(topPagesDataRef.value));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-overview-report", { "monsterinsights-blur": shouldBlur.value }])
      }, [
        !unref(canViewReports) ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("h3", null, toDisplayString(unref(__)("You don't have permission to view MonsterInsights reports.", "google-analytics-for-wordpress")), 1),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("p", null, toDisplayString(unref(__)("Please check with your site administrator that your role is included in the MonsterInsights permissions settings.", "google-analytics-for-wordpress")), 1)
          ])
        ])) : createCommentVNode("", true),
        unref(canViewReports) && !unref(isAuthenticated) ? (openBlock(), createBlock(AuthModal, {
          key: 1,
          "is-open": true
        })) : createCommentVNode("", true),
        unref(canViewReports) && needsReAuth.value ? (openBlock(), createBlock(ReAuthModal, {
          key: 2,
          "is-open": true
        })) : createCommentVNode("", true),
        unref(canViewReports) ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(_sfc_main$7, {
            "date-range": unref(dateRange),
            onOverviewDataLoaded,
            onOverviewError
          }, null, 8, ["date-range"]),
          createVNode(_sfc_main$6, {
            "key-metrics-data": keyMetricsData.value,
            "active-tab": chartActiveTab.value,
            "view-full-report-url": keyMetricsViewFullReportUrl.value
          }, null, 8, ["key-metrics-data", "active-tab", "view-full-report-url"]),
          !isPremium.value ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : createCommentVNode("", true),
          !(!isPremium.value && chartActiveTab.value === "ecommerce") ? (openBlock(), createBlock(OverviewReportTable, {
            key: 1,
            title: text.marketingCampaigns,
            tabs: marketingCampaignsTabs,
            "active-tab": marketingCampaignsActiveTab.value,
            columns: marketingCampaignsColumns.value,
            rows: marketingCampaignsData.value,
            loading: marketingCampaignsLoading.value,
            "has-load-more": true,
            "view-full-report-url": viewFullReportUrls.marketingCampaigns,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => marketingCampaignsActiveTab.value = $event)
          }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url"])) : createCommentVNode("", true),
          createVNode(OverviewReportTable, {
            title: text.pages,
            tabs: pagesTabs,
            "active-tab": pagesActiveTab.value,
            columns: pagesColumns.value,
            rows: pagesData.value,
            loading: pagesLoading.value,
            "has-load-more": true,
            "view-full-report-url": viewFullReportUrls.pages,
            "required-addon": hasPageInsights.value ? "" : "page_insights",
            "required-addon-name": "Page Insights",
            "onUpdate:activeTab": _cache[1] || (_cache[1] = ($event) => pagesActiveTab.value = $event)
          }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url", "required-addon"]),
          chartActiveTab.value === "traffic" || chartActiveTab.value === "referrals" ? (openBlock(), createElementBlock("div", _hoisted_3, [
            createVNode(OverviewReportTable, {
              title: text.topReferrals,
              columns: topReferralsColumns,
              rows: topReferralsData.value,
              loading: marketingCampaignsLoading.value,
              "has-load-more": false,
              "default-sort-key": "sessions",
              "view-full-report-url": viewFullReportUrls.referrals
            }, null, 8, ["title", "rows", "loading", "view-full-report-url"]),
            createVNode(OverviewReportTable, {
              title: text.topPosts,
              columns: topPostsColumns,
              rows: topPostsData.value,
              loading: topPagesLoading.value,
              "has-load-more": false,
              "default-sort-key": "sessions",
              "view-full-report-url": viewFullReportUrls.topPosts
            }, null, 8, ["title", "rows", "loading", "view-full-report-url"])
          ])) : createCommentVNode("", true),
          !(!isPremium.value && chartActiveTab.value === "ecommerce") ? (openBlock(), createBlock(_sfc_main$3, {
            key: 3,
            "date-range": unref(dateRange),
            "is-premium": isPremium.value
          }, null, 8, ["date-range", "is-premium"])) : createCommentVNode("", true),
          createVNode(_sfc_main$1, { "date-range": unref(dateRange) }, null, 8, ["date-range"]),
          createBaseVNode("div", _hoisted_4, [
            createVNode(OverviewReportTable, {
              title: text.demographics,
              tabs: demographicsTabs,
              "active-tab": demographicsActiveTab.value,
              columns: demographicsColumns.value,
              rows: demographicsData.value,
              loading: demographicsLoading.value,
              "has-load-more": true,
              "show-view-full-report": false,
              "onUpdate:activeTab": _cache[2] || (_cache[2] = ($event) => demographicsActiveTab.value = $event)
            }, createSlots({ _: 2 }, [
              demographicsActiveTab.value === "country" && demographicsData.value.length > 0 ? {
                name: "table-footer",
                fn: withCtx(() => [
                  createVNode(UniversallyPromo, {
                    class: "monsterinsights-overview-report__universally-promo",
                    "promo-id": "universally_overview_country",
                    bare: "",
                    "show-info": "",
                    text: unref(__)("Translate your website with Universally. ", "google-analytics-for-wordpress")
                  }, null, 8, ["text"])
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["title", "active-tab", "columns", "rows", "loading"]),
            createVNode(OverviewReportTable, {
              title: text.devices,
              tabs: devicesTabs,
              "active-tab": devicesActiveTab.value,
              columns: devicesColumns.value,
              rows: devicesData.value,
              loading: devicesLoading.value,
              "has-load-more": true,
              "view-full-report-url": viewFullReportUrls.devices,
              "onUpdate:activeTab": _cache[3] || (_cache[3] = ($event) => devicesActiveTab.value = $event)
            }, null, 8, ["title", "active-tab", "columns", "rows", "loading", "view-full-report-url"])
          ])
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const OverviewReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e4cf90ff"]]);
export {
  OverviewReport as default
};
