import { l as defineStore, y as onMounted, J as onUnmounted, o as openBlock, c as createElementBlock, a as createBaseVNode, B as withModifiers, F as Fragment, f as renderList, i as normalizeClass, s as createCommentVNode, j as ref, m as computed, A as createTextVNode, t as toDisplayString, G as withKeys, u as unref, a1 as storeToRefs, E as createBlock, b as createVNode, a2 as resolveDirective, w as withDirectives, C as watch, a3 as useSlots, K as renderSlot, a4 as createSlots, D as withCtx, n as normalizeStyle, a5 as resolveDynamicComponent, x as nextTick, d as createApp } from "./chunks/toastStore-CRCNwITM.js";
import { r as miAjax, j as getMiGlobal, k as isPro, n as getUpgradeUrl, q as sanitizeHtml, p as isNetworkAdmin, s as setupPinia } from "./chunks/ajax-B_XS1gT5.js";
import { _ as _sfc_main$A, i as installOverlays } from "./chunks/AppOverlays-BGer0Qoo.js";
import { d as dateIntervals } from "./chunks/dateIntervals-BPoui_3H.js";
import { u as useLicenseStore } from "./chunks/license-Boh3_ZVs.js";
import { m } from "./chunks/vue3-apexcharts-C-WQ0zow.js";
import { v as vTooltip } from "./chunks/vTooltip-DWqiyUWL.js";
import "./chunks/_plugin-vue_export-helper-1tPrXgE0.js";
import "./chunks/default-i18n-KrIlCc2E.js";
import "./chunks/useNotices-BpzNuZJ7.js";
const { __: __$1 } = wp.i18n;
function defaultReports() {
  return {
    overview: {
      type: "overview",
      name: __$1("Overview Report", "google-analytics-for-wordpress"),
      enabled: true,
      component: "WidgetReportOverview"
    },
    toppages: {
      type: "overview",
      name: __$1("Top Posts/Pages", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows your website's most viewed posts and pages based on pageviews.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportTopPosts"
    },
    newvsreturn: {
      type: "overview",
      name: __$1("New vs. Returning Visitors", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This graph shows what percent of your user sessions come from new versus repeat visitors.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportNewVsReturning"
    },
    devices: {
      type: "overview",
      name: __$1("Device Breakdown", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This graph shows the percentage of sessions on your site from different types of devices: traditional desktops/laptops, tablets, and mobile phones.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportDevices"
    },
    landingpages: {
      type: "publisher",
      name: __$1("Top Landing Pages", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the top pages users first land on when visiting your website.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportLandingPages"
    },
    outboundlinks: {
      type: "publisher",
      name: __$1("Top Outbound Links", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the top links clicked on your website that go to another website.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportOutboundLinks"
    },
    affiliatelinks: {
      type: "publisher",
      name: __$1("Top Affiliate Links", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the top affiliate links your visitors clicked the most.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportAffiliateLinks"
    },
    downloadlinks: {
      type: "publisher",
      name: __$1("Top Download Links", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the download links your visitors clicked the most.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportDownloadLinks"
    },
    infobox: {
      type: "ecommerce",
      name: __$1("Overview", "google-analytics-for-wordpress"),
      enabled: false,
      component: "WidgetReportEcommerceOverview"
    },
    products: {
      type: "ecommerce",
      name: __$1("Top Products", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the top selling products on your website.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportTopProducts"
    },
    conversions: {
      type: "ecommerce",
      name: __$1("Top Conversion Sources", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "This list shows the top referral websites in terms of product revenue.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportTopConversions"
    },
    addremove: {
      type: "ecommerce",
      name: __$1("Total Add/Remove", "google-analytics-for-wordpress"),
      enabled: false,
      component: "WidgetReportAddRemove"
    },
    newcustomers: {
      type: "ecommerce",
      name: __$1("New Customers", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "The percentage of first time purchasers.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportNewCustomers"
    },
    abandonedcheckouts: {
      type: "ecommerce",
      name: __$1("Abandoned Checkouts", "google-analytics-for-wordpress"),
      tooltip: __$1(
        "The percentage of checkouts that do not result in a transaction.",
        "google-analytics-for-wordpress"
      ),
      enabled: false,
      component: "WidgetReportAbandonedCheckouts"
    }
  };
}
const useWidgetStore = defineStore("widget", {
  state: () => ({
    width: "regular",
    interval: "30",
    loaded: false,
    compact: false,
    reports: defaultReports(),
    error: {},
    notice30day: false
  }),
  getters: {
    isFullWidth: (state) => state.width !== "regular",
    reportsByType: (state) => (type) => Object.fromEntries(
      Object.entries(state.reports).filter(
        ([, report]) => report?.type === type
      )
    ),
    activeReportTypes: (state) => {
      const types = /* @__PURE__ */ new Set();
      for (const key of Object.keys(state.reports)) {
        const report = state.reports[key];
        if (report?.enabled) {
          types.add(report.type);
        }
      }
      return Array.from(types);
    }
  },
  actions: {
    /**
     * Hydrate state from the `window.monsterinsights.widget_state` payload
     * that the PHP enqueue writes at page load.
     */
    initFromGlobal() {
      const bootstrap = getMiGlobal("widget_state") || {};
      if (bootstrap.reports && typeof bootstrap.reports === "object") {
        for (const type of Object.keys(bootstrap.reports)) {
          const reportGroup = bootstrap.reports[type] || {};
          for (const key of Object.keys(reportGroup)) {
            if (this.reports[key]) {
              this.reports[key].enabled = !!reportGroup[key];
            }
          }
        }
      }
      if (bootstrap.width) {
        this.width = bootstrap.width;
      }
      if (bootstrap.interval) {
        this.interval = String(bootstrap.interval);
      }
      this.notice30day = !!bootstrap.notice30day;
      const rawCompact = bootstrap.compact;
      this.compact = rawCompact === true || rawCompact === "true" || rawCompact === 1;
    },
    setWidth(width) {
      this.width = width;
    },
    setInterval(interval) {
      this.interval = String(interval);
    },
    setCompact(compact) {
      this.compact = !!compact;
    },
    setLoaded(loaded) {
      this.loaded = !!loaded;
    },
    setReportError(type, message) {
      this.error = { ...this.error, [type]: message };
    },
    clearReportError(type) {
      const { [type]: _omit, ...rest } = this.error;
      this.error = rest;
    },
    enableReport(key) {
      if (this.reports[key]) {
        this.reports[key].enabled = true;
      }
    },
    disableReport(key) {
      if (this.reports[key]) {
        this.reports[key].enabled = false;
      }
    },
    toggleReport(key) {
      if (!this.reports[key]) {
        return;
      }
      this.reports[key].enabled = !this.reports[key].enabled;
    },
    async saveWidgetState() {
      const groupedReports = { overview: {}, publisher: {}, ecommerce: {} };
      for (const key of Object.keys(this.reports)) {
        const report = this.reports[key];
        if (!report?.type) {
          continue;
        }
        if (!groupedReports[report.type]) {
          groupedReports[report.type] = {};
        }
        groupedReports[report.type][key] = !!report.enabled;
      }
      try {
        await miAjax("monsterinsights_save_widget_state", {
          width: this.width,
          reports: JSON.stringify(groupedReports),
          interval: this.interval,
          compact: this.compact ? "true" : "false",
          notice: this.notice30day ? 1 : 0
        });
      } catch (_err) {
      }
    },
    async markNoticeClosed() {
      try {
        await miAjax("monsterinsights_mark_notice_closed");
        this.notice30day = true;
      } catch (_err) {
      }
    }
  }
});
const { __ } = wp.i18n;
const LITE_REPORTS = ["overview", "site_summary", "yearinreview"];
const useWidgetReportsStore = defineStore("widgetReports", {
  state: () => {
    const intervalKey = String(getMiGlobal("widget_state", {})?.interval || "30");
    const interval = resolveInterval(intervalKey);
    return {
      date: {
        interval: intervalKey,
        start: interval.start.format("YYYY-MM-DD"),
        end: interval.end.format("YYYY-MM-DD"),
        compareReport: false,
        compareStart: interval.compareStart?.format("YYYY-MM-DD") ?? "",
        compareEnd: interval.compareEnd?.format("YYYY-MM-DD") ?? ""
      },
      reload_report: false,
      reauth: false,
      blur: false,
      // Counts in-flight fetches so concurrent reports don't toggle blur off
      // before they all settle. Single source of truth for the blur class.
      _inflight: 0,
      // Per-type loading state. Each entry is the type name (overview /
      // publisher / ecommerce) currently being fetched. Used by
      // WidgetAccordion to swap the report card with the spinner during
      // refetches (cache miss after a date change), not just on first load.
      loadingTypes: {},
      overview: null,
      publisher: null,
      ecommerce: null
    };
  },
  getters: {
    isLoading: (state) => (type) => !!state.loadingTypes[type]
  },
  actions: {
    setDateRange({ interval, start, end, compareStart, compareEnd, compareReport }) {
      this.date = {
        interval,
        start,
        end,
        compareReport: !!compareReport,
        compareStart: compareStart || "",
        compareEnd: compareEnd || ""
      };
    },
    applyIntervalFromKey(intervalKey) {
      const interval = resolveInterval(intervalKey);
      this.date = {
        interval: intervalKey,
        start: interval.start.format("YYYY-MM-DD"),
        end: interval.end.format("YYYY-MM-DD"),
        compareReport: false,
        compareStart: interval.compareStart?.format("YYYY-MM-DD") ?? "",
        compareEnd: interval.compareEnd?.format("YYYY-MM-DD") ?? ""
      };
    },
    setReportData(report, data) {
      this[report] = data;
    },
    setReauth(value) {
      this.reauth = !!value;
    },
    /** Mark the widget as loading (adds the `monsterinsights-blur` class). */
    enableBlur() {
      this._inflight += 1;
      this.blur = true;
    },
    /** Decrement the in-flight counter and clear blur when the last request settles. */
    disableBlur() {
      this._inflight = Math.max(0, this._inflight - 1);
      if (this._inflight === 0) {
        this.blur = false;
      }
    },
    setTypeLoading(type, loading) {
      if (loading) {
        this.loadingTypes = { ...this.loadingTypes, [type]: true };
      } else {
        const { [type]: _omit, ...rest } = this.loadingTypes;
        this.loadingTypes = rest;
      }
    },
    /**
     * Classic Vue 2 endpoint: POSTs to admin-ajax `monsterinsights_vue_get_report_data`
     * with the report name + date range. Matches the existing PHP handler.
     *
     * Toggles the shared `blur` flag so `App.vue` can add the
     * `monsterinsights-blur` class while the widget is fetching — same UX as
     * the Vue 2 widget.
     */
    async fetchReportData(report) {
      if (!LITE_REPORTS.includes(report)) {
        return null;
      }
      const cached = this[report];
      if (!this.reload_report && cached && cached.reportcurrentrange && cached.reportcurrentrange.startDate === this.date.start && cached.reportcurrentrange.endDate === this.date.end && !this.date.compareReport) {
        return cached;
      }
      const payload = {
        report,
        start: this.date.start,
        end: this.date.end
      };
      if (this.date.compareReport) {
        payload.compare_report = true;
        payload.compare_start = this.date.compareStart;
        payload.compare_end = this.date.compareEnd;
      }
      this.enableBlur();
      this.setTypeLoading(report, true);
      try {
        const data = await miAjax("monsterinsights_vue_get_report_data", payload);
        if (data && data.message === "invalid_grant") {
          this.reauth = true;
          return null;
        }
        if (data && data.message === "license_level") {
          return null;
        }
        this[report] = data;
        this.reload_report = false;
        return data;
      } catch (err) {
        const message = err?.message || __("Error loading report data.", "google-analytics-for-wordpress");
        throw { report, message, raw: err };
      } finally {
        this.disableBlur();
        this.setTypeLoading(report, false);
      }
    }
  }
});
function resolveInterval(intervalKey) {
  const legacyMap = {
    30: "last30days",
    7: "last7days",
    90: "last90days"
  };
  const resolvedKey = dateIntervals[intervalKey] ? intervalKey : legacyMap[intervalKey] || "last30days";
  return dateIntervals[resolvedKey] || dateIntervals.last30days;
}
const _hoisted_1$x = { class: "monsterinsights-widget-datepicker" };
const _hoisted_2$k = { class: "monsterinsights-reports-datepicker" };
const _hoisted_3$e = { class: "monsterinsights-reports-interval-dropdown-container" };
const _hoisted_4$d = ["innerHTML"];
const _hoisted_5$7 = { class: "monsterinsights-datepicker-default-buttons" };
const _hoisted_6$6 = ["onClick", "innerHTML"];
const _sfc_main$z = {
  __name: "WidgetSettingsInterval",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    const LEGACY_KEYS = {
      7: "last7days",
      30: "last30days",
      90: "last90days"
    };
    const triggerEl = ref(null);
    const dropdownEl = ref(null);
    const dropdownVisible = ref(false);
    const options = computed(
      () => Object.keys(dateIntervals).map((key) => ({
        key,
        text: dateIntervals[key].text,
        start: dateIntervals[key].start,
        end: dateIntervals[key].end
      }))
    );
    const normalizedKey = computed(() => {
      const key = widgetStore.interval;
      return dateIntervals[key] ? key : LEGACY_KEYS[key] || "last30days";
    });
    const selectedIntervalHtml = computed(() => {
      const opt = options.value.find((o) => o.key === normalizedKey.value);
      if (!opt) return "";
      return formatOption(opt);
    });
    function formatOption(option) {
      const startDate = option.start;
      const endDate = option.end;
      const dateText = startDate.format("YYYYMMDD") === endDate.format("YYYYMMDD") ? startDate.format("MMMM D, YYYY") : startDate.format("MMMM D") + " - " + endDate.format("MMMM D, YYYY");
      return `<b>${option.text}:</b> ${dateText}`;
    }
    function buttonClass(key) {
      return {
        "monsterinsights-button": true,
        "monsterinsights-selected-interval": normalizedKey.value === key
      };
    }
    function toggleDropdown() {
      dropdownVisible.value = !dropdownVisible.value;
    }
    async function selectInterval(key) {
      dropdownVisible.value = false;
      widgetStore.setInterval(key);
      widgetReports.applyIntervalFromKey(key);
      const activeTypes = widgetStore.activeReportTypes;
      for (const type of activeTypes) {
        widgetReports.fetchReportData(type).catch(() => {
          widgetStore.setReportError(
            type,
            __2("Error loading report data.", "google-analytics-for-wordpress")
          );
        });
      }
      widgetStore.saveWidgetState();
    }
    function handleClickOutside(event) {
      if (!dropdownVisible.value) return;
      if (dropdownEl.value && !dropdownEl.value.contains(event.target) && triggerEl.value && !triggerEl.value.contains(event.target)) {
        dropdownVisible.value = false;
      }
    }
    onMounted(() => document.addEventListener("click", handleClickOutside));
    onUnmounted(() => document.removeEventListener("click", handleClickOutside));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$x, [
        createBaseVNode("div", _hoisted_2$k, [
          createBaseVNode("div", _hoisted_3$e, [
            createBaseVNode("button", {
              ref_key: "triggerEl",
              ref: triggerEl,
              type: "button",
              class: "monsterinsights-reports-interval-date-info",
              onClick: withModifiers(toggleDropdown, ["stop"])
            }, [
              createBaseVNode("span", { innerHTML: selectedIntervalHtml.value }, null, 8, _hoisted_4$d),
              _cache[0] || (_cache[0] = createBaseVNode("i", {
                class: "monstericon-calendar-alt",
                "aria-hidden": "true"
              }, null, -1))
            ], 512),
            dropdownVisible.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              ref_key: "dropdownEl",
              ref: dropdownEl,
              class: "monsterinsights-reports-intervals-dropdown"
            }, [
              createBaseVNode("div", _hoisted_5$7, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(options.value, (option) => {
                  return openBlock(), createElementBlock("div", {
                    key: option.key
                  }, [
                    createBaseVNode("button", {
                      type: "button",
                      class: normalizeClass(buttonClass(option.key)),
                      onClick: ($event) => selectInterval(option.key),
                      innerHTML: formatOption(option)
                    }, null, 10, _hoisted_6$6)
                  ]);
                }), 128))
              ])
            ], 512)) : createCommentVNode("", true)
          ])
        ])
      ]);
    };
  }
};
const _hoisted_1$w = ["aria-label", "title"];
const _sfc_main$y = {
  __name: "WidgetSettingsWidth",
  setup(__props, { expose: __expose }) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    const iconClass = computed(
      () => widgetStore.isFullWidth ? "monstericon-compress" : "monstericon-expand"
    );
    const tooltip = computed(
      () => widgetStore.isFullWidth ? __2("Show in widget mode", "google-analytics-for-wordpress") : __2("Show in full-width mode", "google-analytics-for-wordpress")
    );
    async function onToggle() {
      const nextFull = !widgetStore.isFullWidth;
      widgetStore.setWidth(nextFull ? "full" : "regular");
      applyFullWidthDom();
      if (nextFull) {
        const activeTypes = widgetStore.activeReportTypes;
        for (const type of activeTypes) {
          widgetReports.fetchReportData(type).catch(() => {
            widgetStore.setReportError(type, __2("Error loading report data.", "google-analytics-for-wordpress"));
          });
        }
      }
      widgetStore.saveWidgetState();
    }
    function applyFullWidthDom() {
      const widgetEl = document.getElementById("monsterinsights_reports_widget");
      const sortables = document.getElementById("normal-sortables");
      const welcomePanel = document.getElementById("dashboard-widgets-wrap");
      if (!widgetEl || !welcomePanel) return;
      if (widgetStore.isFullWidth) {
        widgetEl.classList.add("monsterinsights-widget-full-width");
        widgetEl.classList.remove("monsterinsights-widget-regular-width");
        welcomePanel.parentNode?.insertBefore(widgetEl, welcomePanel);
      } else {
        widgetEl.classList.remove("monsterinsights-widget-full-width");
        widgetEl.classList.add("monsterinsights-widget-regular-width");
        sortables?.insertBefore(widgetEl, sortables.firstChild);
        sortables?.classList.remove("empty-container");
      }
    }
    __expose({ applyFullWidthDom });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "monsterinsights-width-button",
        "aria-label": tooltip.value,
        title: tooltip.value,
        onClick: onToggle
      }, [
        createBaseVNode("i", {
          class: normalizeClass(iconClass.value),
          "aria-hidden": "true"
        }, null, 2)
      ], 8, _hoisted_1$w);
    };
  }
};
const _hoisted_1$v = ["onKeyup"];
const _hoisted_2$j = ["checked"];
const _sfc_main$x = {
  __name: "WidgetReportToggle",
  props: {
    report: { type: Object, required: true },
    reportKey: { type: String, required: true }
  },
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const props = __props;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    async function onToggle() {
      widgetStore.toggleReport(props.reportKey);
      if (widgetStore.reports[props.reportKey]?.enabled && widgetStore.isFullWidth) {
        widgetReports.fetchReportData(props.report.type).catch(() => {
          widgetStore.setReportError(
            props.report.type,
            __2("Error loading report data.", "google-analytics-for-wordpress")
          );
        });
      }
      widgetStore.saveWidgetState();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass(__props.report.enabled ? "monsterinsights-checked" : ""),
        tabindex: "0",
        onClick: withModifiers(onToggle, ["prevent"]),
        onKeyup: [
          withKeys(withModifiers(onToggle, ["prevent"]), ["enter"]),
          withKeys(withModifiers(onToggle, ["prevent"]), ["space"])
        ]
      }, [
        createBaseVNode("input", {
          type: "checkbox",
          checked: __props.report.enabled,
          onClick: withModifiers(onToggle, ["stop"])
        }, null, 8, _hoisted_2$j),
        createTextVNode(" " + toDisplayString(__props.report.name), 1)
      ], 42, _hoisted_1$v);
    };
  }
};
const _hoisted_1$u = { class: "monsterinsights-widget-compact-toggle" };
const _hoisted_2$i = ["onKeyup"];
const _hoisted_3$d = ["checked"];
const _sfc_main$w = {
  __name: "WidgetSettingsCompact",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const text_compact = __2("Compact View", "google-analytics-for-wordpress");
    function toggle() {
      widgetStore.setCompact(!widgetStore.compact);
      widgetStore.saveWidgetState();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$u, [
        createBaseVNode("label", {
          class: normalizeClass(unref(widgetStore).compact ? "monsterinsights-checked" : ""),
          tabindex: "0",
          onClick: withModifiers(toggle, ["prevent"]),
          onKeyup: [
            withKeys(withModifiers(toggle, ["prevent"]), ["enter"]),
            withKeys(withModifiers(toggle, ["prevent"]), ["space"])
          ]
        }, [
          createBaseVNode("input", {
            type: "checkbox",
            checked: unref(widgetStore).compact,
            onClick: withModifiers(toggle, ["stop"])
          }, null, 8, _hoisted_3$d),
          createTextVNode(" " + toDisplayString(unref(text_compact)), 1)
        ], 42, _hoisted_2$i)
      ]);
    };
  }
};
const _hoisted_1$t = { class: "monsterinsights-widget-setting-hide" };
const _hoisted_2$h = ["href"];
const _sfc_main$v = {
  __name: "WidgetSettingsHide",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const text_hide_widget = __2(
      "How to hide the widget",
      "google-analytics-for-wordpress"
    );
    const screenOptionsHelp = __2(
      "https://www.monsterinsights.com/docs/how-to-hide-the-monsterinsights-dashboard-widget/",
      "google-analytics-for-wordpress"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$t, [
        createBaseVNode("a", {
          href: unref(screenOptionsHelp),
          target: "_blank",
          rel: "noopener"
        }, toDisplayString(unref(text_hide_widget)), 9, _hoisted_2$h)
      ]);
    };
  }
};
const _hoisted_1$s = { class: "monsterinsights-widget-dropdown" };
const _hoisted_2$g = ["aria-label", "aria-pressed"];
const _hoisted_3$c = ["textContent"];
const _hoisted_4$c = ["textContent"];
const _hoisted_5$6 = ["textContent"];
const _sfc_main$u = {
  __name: "WidgetSettingsReports",
  props: {
    lite: { type: Boolean, default: false }
  },
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const { reports } = storeToRefs(widgetStore);
    const dropdownVisible = ref(false);
    const dropdownEl = ref(null);
    const text_settings_dropdown = __2("Settings Menu", "google-analytics-for-wordpress");
    const text_overview = __2("Show Overview Reports", "google-analytics-for-wordpress");
    const text_publisher = __2("Show Publishers Reports", "google-analytics-for-wordpress");
    const text_ecommerce = __2("Show eCommerce Reports", "google-analytics-for-wordpress");
    function filterByType(type) {
      const out = {};
      for (const key of Object.keys(reports.value)) {
        if (key === "overview") continue;
        const report = reports.value[key];
        if (report?.type === type) out[key] = report;
      }
      return out;
    }
    const overviewReports = computed(() => filterByType("overview"));
    const publisherReports = computed(() => filterByType("publisher"));
    const ecommerceReports = computed(() => filterByType("ecommerce"));
    function toggleDropdown() {
      dropdownVisible.value = !dropdownVisible.value;
    }
    function handleClickOutside(event) {
      if (!dropdownVisible.value) return;
      if (dropdownEl.value && !dropdownEl.value.contains(event.target)) {
        dropdownVisible.value = false;
      }
    }
    onMounted(() => document.addEventListener("click", handleClickOutside));
    onUnmounted(() => document.removeEventListener("click", handleClickOutside));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$s, [
        createBaseVNode("button", {
          type: "button",
          class: "monsterinsights-widget-cog",
          "aria-label": unref(text_settings_dropdown),
          "aria-pressed": dropdownVisible.value,
          onClick: withModifiers(toggleDropdown, ["stop"])
        }, [..._cache[0] || (_cache[0] = [
          createBaseVNode("i", {
            class: "monstericon-cog",
            "aria-hidden": "true"
          }, null, -1)
        ])], 8, _hoisted_2$g),
        dropdownVisible.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "dropdownEl",
          ref: dropdownEl,
          class: "monsterinsights-widget-dropdown-content"
        }, [
          !__props.lite ? (openBlock(), createBlock(_sfc_main$w, { key: 0 })) : createCommentVNode("", true),
          createBaseVNode("span", {
            textContent: toDisplayString(unref(text_overview))
          }, null, 8, _hoisted_3$c),
          (openBlock(true), createElementBlock(Fragment, null, renderList(overviewReports.value, (report, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "monsterinsights-widget-setting"
            }, [
              createVNode(_sfc_main$x, {
                report,
                "report-key": key
              }, null, 8, ["report", "report-key"])
            ]);
          }), 128)),
          !__props.lite ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_publisher))
            }, null, 8, _hoisted_4$c),
            (openBlock(true), createElementBlock(Fragment, null, renderList(publisherReports.value, (report, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "monsterinsights-widget-setting"
              }, [
                createVNode(_sfc_main$x, {
                  report,
                  "report-key": key
                }, null, 8, ["report", "report-key"])
              ]);
            }), 128)),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_ecommerce))
            }, null, 8, _hoisted_5$6),
            (openBlock(true), createElementBlock(Fragment, null, renderList(ecommerceReports.value, (report, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "monsterinsights-widget-setting"
              }, [
                createVNode(_sfc_main$x, {
                  report,
                  "report-key": key
                }, null, 8, ["report", "report-key"])
              ]);
            }), 128))
          ], 64)) : createCommentVNode("", true),
          createVNode(_sfc_main$v)
        ], 512)) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$r = ["href", "innerHTML"];
const _sfc_main$t = {
  __name: "WidgetFullReportButton",
  props: {
    seeReport: { type: String, default: "" },
    activeReport: { type: String, default: "overview" }
  },
  setup(__props) {
    const { __: __2, sprintf } = wp.i18n;
    const props = __props;
    const reportsUrl = computed(() => getMiGlobal("reports_url", ""));
    const fullReportLink = computed(() => {
      let slug = props.activeReport || "overview";
      if (slug === "publisher") slug += "s";
      return `${reportsUrl.value}#/${slug}`;
    });
    const buttonHtml = computed(() => {
      if (props.seeReport) return props.seeReport;
      return __2("See Full Report", "google-analytics-for-wordpress");
    });
    return (_ctx, _cache) => {
      return reportsUrl.value ? (openBlock(), createElementBlock("a", {
        key: 0,
        href: fullReportLink.value,
        class: "monsterinsights-button monsterinsights-button-full-report",
        innerHTML: buttonHtml.value
      }, null, 8, _hoisted_1$r)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$q = { class: "monsterinsights-widget-settings" };
const _hoisted_2$f = ["textContent"];
const _sfc_main$s = {
  __name: "WidgetSettings",
  setup(__props, { expose: __expose }) {
    const widgetStore = useWidgetStore();
    const width = ref(null);
    const isProVersion = isPro();
    const showFullReportButton = computed(() => {
      const settings = getMiGlobal("settings", {});
      return !settings?.dashboards_disabled;
    });
    const selectedIntervalText = computed(() => {
      const key = widgetStore.interval;
      const interval = dateIntervals[key] || dateIntervals[resolveLegacyKey(key)] || dateIntervals.last30days;
      return interval.text;
    });
    function resolveLegacyKey(key) {
      if (key === "7") return "last7days";
      if (key === "30") return "last30days";
      if (key === "90") return "last90days";
      return key;
    }
    __expose({
      applyFullWidthDom() {
        width.value?.applyFullWidthDom?.();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$q, [
        unref(isProVersion) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$z),
          createVNode(_sfc_main$y, {
            ref_key: "width",
            ref: width
          }, null, 512),
          createVNode(_sfc_main$u),
          showFullReportButton.value ? (openBlock(), createBlock(_sfc_main$t, { key: 0 })) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          (openBlock(), createElementBlock("div", {
            key: 1,
            class: "monsterinsights-widget-interval-static",
            textContent: toDisplayString(selectedIntervalText.value)
          }, null, 8, _hoisted_2$f)),
          createVNode(_sfc_main$y, {
            ref_key: "width",
            ref: width
          }, null, 512),
          createVNode(_sfc_main$u, { lite: true }),
          createCommentVNode("", true)
        ], 64))
      ]);
    };
  }
};
const _hoisted_1$p = {
  key: 0,
  class: "monsterinsights-reports-link"
};
const _hoisted_2$e = ["href"];
const _sfc_main$r = {
  __name: "WidgetReportsLink",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const reportsUrl = computed(() => getMiGlobal("reports_url", ""));
    const text_view_all = __2("View All Reports", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return reportsUrl.value ? (openBlock(), createElementBlock("div", _hoisted_1$p, [
        createBaseVNode("a", {
          href: reportsUrl.value,
          class: "monsterinsights-button monsterinsights-button-small"
        }, [
          createTextVNode(toDisplayString(unref(text_view_all)) + " ", 1),
          _cache[0] || (_cache[0] = createBaseVNode("i", {
            class: "monstericon-long-arrow-right-light",
            "aria-hidden": "true"
          }, null, -1))
        ], 8, _hoisted_2$e)
      ])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$o = {
  key: 0,
  class: "monsterinsights-info",
  tabindex: "0"
};
const _sfc_main$q = {
  __name: "InfoTooltip",
  props: {
    content: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return __props.content ? withDirectives((openBlock(), createElementBlock("span", _hoisted_1$o, [..._cache[0] || (_cache[0] = [
        createBaseVNode("i", {
          class: "monstericon monstericon-info-circle-regular",
          "aria-hidden": "true"
        }, null, -1)
      ])])), [
        [_directive_tooltip, __props.content]
      ]) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$n = { class: "monsterinsights-widget-loading" };
const _sfc_main$p = {
  __name: "WidgetLoading",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$m = { class: "monsterinsights-upsell-overlay" };
const _hoisted_2$d = { class: "monsterinsights-upsell-top" };
const _hoisted_3$b = ["textContent"];
const _hoisted_4$b = { class: "monsterinsights-upsell-content" };
const _hoisted_5$5 = { class: "monsterinsights-upsell-content__features" };
const _hoisted_6$5 = ["textContent"];
const _hoisted_7$5 = ["textContent"];
const _hoisted_8$4 = ["textContent"];
const _hoisted_9$4 = { class: "monsterinsights-upsell-content__features-cliff" };
const _hoisted_10$2 = ["textContent"];
const _hoisted_11$1 = ["innerHTML"];
const _hoisted_12$1 = { class: "monsterinsights-upsell-content-buttons" };
const _hoisted_13 = ["href", "textContent"];
const _sfc_main$o = {
  __name: "WidgetReportUpsell",
  props: {
    /**
     * Report type — `overview`, `publisher`, or `ecommerce`. Drives both the
     * upsell copy and the utm campaign passed to `getUpgradeUrl`.
     */
    type: { type: String, default: "publisher" },
    /**
     * Force a two-column features grid even when there are 4 or fewer items.
     * Mirrors Vue 2 `ReportUpsellOverlay.forceTwoColumns`.
     */
    forceTwoColumns: { type: Boolean, default: false }
  },
  setup(__props) {
    const { __: __2, sprintf } = wp.i18n;
    const props = __props;
    const UPSELL_CONTENT = {
      publisher: {
        mainheading: __2("Publishers Report", "google-analytics-for-wordpress"),
        title: __2(
          "Improve Your Conversion Rate With Insights Into Which Content Works Best.",
          "google-analytics-for-wordpress"
        ),
        features: [
          __2("Top Landing Pages", "google-analytics-for-wordpress"),
          __2("Top Affilliate Links", "google-analytics-for-wordpress"),
          __2("Top Exit Pages", "google-analytics-for-wordpress"),
          __2("Top Download Links", "google-analytics-for-wordpress"),
          __2("Top Outbound Links", "google-analytics-for-wordpress"),
          __2("Scroll Depth", "google-analytics-for-wordpress")
        ]
      },
      overview: {
        mainheading: __2("Publishers Report", "google-analytics-for-wordpress"),
        title: __2(
          "Improve Your Conversion Rate With Insights Into Which Content Works Best.",
          "google-analytics-for-wordpress"
        ),
        features: [
          __2("Top Landing Pages", "google-analytics-for-wordpress"),
          __2("Top Affilliate Links", "google-analytics-for-wordpress"),
          __2("Top Exit Pages", "google-analytics-for-wordpress"),
          __2("Top Download Links", "google-analytics-for-wordpress"),
          __2("Top Outbound Links", "google-analytics-for-wordpress"),
          __2("Scroll Depth", "google-analytics-for-wordpress")
        ]
      },
      ecommerce: {
        mainheading: __2("eCommerce Report", "google-analytics-for-wordpress"),
        title: __2(
          "Increase Sales and Make More Money With Enhanced eCommerce Insights.",
          "google-analytics-for-wordpress"
        ),
        features: [
          __2("10+ eCommerce Integrations", "google-analytics-for-wordpress"),
          __2("Average Order Value", "google-analytics-for-wordpress"),
          __2("Total Revenue", "google-analytics-for-wordpress"),
          __2("Sessions to Purchase", "google-analytics-for-wordpress"),
          __2("Top Conversion Sources", "google-analytics-for-wordpress"),
          __2("Top Products", "google-analytics-for-wordpress"),
          __2("Number of Transactions", "google-analytics-for-wordpress"),
          __2("Time to Purchase", "google-analytics-for-wordpress")
        ]
      }
    };
    const content = computed(
      () => UPSELL_CONTENT[props.type] || UPSELL_CONTENT.publisher
    );
    const featuresClass = computed(
      () => content.value.features?.length > 4 || props.forceTwoColumns ? "columns-2" : "columns-1"
    );
    const subheading = computed(
      () => content.value.mainheading ? sprintf(
        // translators: %s — the report mainheading (e.g. "Publishers Report").
        __2("What’s in the %s?", "google-analytics-for-wordpress"),
        content.value.mainheading
      ) : ""
    );
    const upgradeLink = computed(() => getUpgradeUrl("dashboard-widget", props.type));
    const footer_notice = computed(
      () => sprintf(
        // translators: 1: <strong>, 2: </strong>, 3: <a href="...">, 4: </a>, 5: product name
        __2(
          "%1$sPlus%2$s, upgrading to %5$s will unlock %1$sall%2$s advanced reports, tracking, and integrations. %3$sLearn more about %5$s%4$s",
          "google-analytics-for-wordpress"
        ),
        "<strong>",
        "</strong>",
        `<a target="_blank" rel="noopener" href="${upgradeLink.value}">`,
        "</a>",
        "Pro"
      )
    );
    const text_features_cliff = __2("And more!", "google-analytics-for-wordpress");
    const text_upgrade_button = __2("Upgrade and Unlock", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$m, [
        createBaseVNode("div", _hoisted_2$d, [
          content.value.mainheading ? (openBlock(), createElementBlock("h3", {
            key: 0,
            textContent: toDisplayString(content.value.mainheading)
          }, null, 8, _hoisted_3$b)) : createCommentVNode("", true)
        ]),
        createBaseVNode("div", _hoisted_4$b, [
          createBaseVNode("div", _hoisted_5$5, [
            content.value.title ? (openBlock(), createElementBlock("h3", {
              key: 0,
              textContent: toDisplayString(content.value.title)
            }, null, 8, _hoisted_6$5)) : createCommentVNode("", true),
            subheading.value ? (openBlock(), createElementBlock("h4", {
              key: 1,
              textContent: toDisplayString(subheading.value)
            }, null, 8, _hoisted_7$5)) : createCommentVNode("", true),
            content.value.features?.length ? (openBlock(), createElementBlock("ul", {
              key: 2,
              class: normalizeClass(featuresClass.value)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(content.value.features, (feature, idx) => {
                return openBlock(), createElementBlock("li", {
                  key: idx,
                  textContent: toDisplayString(feature)
                }, null, 8, _hoisted_8$4);
              }), 128))
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_9$4, [
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_features_cliff))
              }, null, 8, _hoisted_10$2)
            ]),
            createBaseVNode("p", { innerHTML: footer_notice.value }, null, 8, _hoisted_11$1),
            createBaseVNode("div", _hoisted_12$1, [
              createBaseVNode("a", {
                href: upgradeLink.value,
                class: "monsterinsights-button monsterinsights-button-green",
                target: "_blank",
                rel: "noopener",
                textContent: toDisplayString(unref(text_upgrade_button))
              }, null, 8, _hoisted_13)
            ])
          ])
        ])
      ]);
    };
  }
};
function formatNumber(value, fractionDigits = 2) {
  const num = typeof value === "number" ? value : Number(value || 0);
  if (!Number.isFinite(num)) {
    return "0";
  }
  return num.toLocaleString("en-US", { maximumFractionDigits: fractionDigits });
}
function formatCurrency(value, fractionDigits = 2) {
  const num = typeof value === "number" ? value : Number(value || 0);
  const currency = getMiGlobal("currency", "USD") || "USD";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits
    }).format(num);
  } catch (_e) {
    return `$${formatNumber(num, fractionDigits)}`;
  }
}
function formatPercent(value, fractionDigits = 2) {
  return `${formatNumber(value, fractionDigits)}%`;
}
const _hoisted_1$l = ["id"];
const _hoisted_2$c = ["textContent"];
const _hoisted_3$a = { class: "monsterinsights-clearfix" };
const _hoisted_4$a = ["title", "textContent"];
const _hoisted_5$4 = {
  key: 1,
  class: "monsterinsights-reports-infobox-number",
  title: "0"
};
const _hoisted_6$4 = ["innerHTML"];
const _hoisted_7$4 = ["textContent"];
const _sfc_main$n = {
  __name: "ReportInfobox",
  props: {
    title: { type: String, default: "" },
    value: { type: [String, Number], default: "0" },
    id: { type: String, default: "" },
    days: { type: [Number, String], default: 0 },
    tooltip: { type: String, default: "" },
    change: { type: [Number, String], default: "" },
    color: { type: String, default: "green" },
    direction: { type: String, default: "up" }
  },
  setup(__props) {
    const { __: __2, _n, sprintf } = wp.i18n;
    const props = __props;
    const compareText = computed(() => {
      const days = Number(props.days) || 0;
      return _n(
        "vs. Previous Day",
        sprintf("vs. Previous %s Days", days),
        days,
        "google-analytics-for-wordpress"
      );
    });
    const changeClass = computed(() => {
      let cls = "monsterinsights-reports-infobox-prev";
      if (props.change === "" || props.change == null || typeof props.change === "undefined") {
        return cls + " monsterinsights-prev-nochange";
      }
      return cls + " monsterinsights-" + props.color;
    });
    const changeText = computed(() => {
      const change = Number(props.change);
      if (!isNaN(change) && change !== 0) {
        if (props.direction === "") {
          return change + "%";
        }
        return '<span class="monsterinsights-arrow monsterinsights-' + props.direction + " monsterinsights-" + props.color + '"></span> ' + Math.abs(change) + "%";
      }
      return __2("No change", "google-analytics-for-wordpress");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        class: "monsterinsights-reports-infobox"
      }, [
        __props.title ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "monsterinsights-report-title",
          textContent: toDisplayString(__props.title)
        }, null, 8, _hoisted_2$c)) : createCommentVNode("", true),
        createVNode(_sfc_main$q, { content: __props.tooltip }, null, 8, ["content"]),
        createBaseVNode("div", _hoisted_3$a, [
          __props.value !== "" && __props.value !== null && __props.value !== void 0 ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "monsterinsights-reports-infobox-number",
            title: String(__props.value),
            textContent: toDisplayString(__props.value)
          }, null, 8, _hoisted_4$a)) : (openBlock(), createElementBlock("div", _hoisted_5$4, "0")),
          createBaseVNode("div", {
            class: normalizeClass(changeClass.value),
            innerHTML: changeText.value
          }, null, 10, _hoisted_6$4),
          __props.days ? (openBlock(), createElementBlock("div", {
            key: 2,
            class: "monsterinsights-reports-infobox-compare",
            textContent: toDisplayString(compareText.value)
          }, null, 8, _hoisted_7$4)) : createCommentVNode("", true)
        ])
      ], 8, _hoisted_1$l);
    };
  }
};
const _hoisted_1$k = { class: "monsterinsights-report-tabs-navigation" };
const _hoisted_2$b = ["textContent"];
const _hoisted_3$9 = ["textContent"];
const _hoisted_4$9 = { class: "monsterinsights-report-tabs-content" };
const _hoisted_5$3 = {
  key: 1,
  class: "monsterinsights-report-tabs-content-overlay"
};
const _hoisted_6$3 = { class: "monsterinsights-report-tabs-content-overlay-box" };
const _hoisted_7$3 = ["textContent"];
const _hoisted_8$3 = ["textContent"];
const _hoisted_9$3 = { class: "monsterinsights-report-row monsterinsights-report-infobox-row" };
const _sfc_main$m = {
  __name: "WidgetReportOverview",
  setup(__props) {
    const { __: __2, sprintf } = wp.i18n;
    const apexchart = m;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    const chartKey = ref(0);
    const current_tab = ref("sessions");
    const text_sessions = __2("Sessions", "google-analytics-for-wordpress");
    const text_pageviews = __2("Pageviews", "google-analytics-for-wordpress");
    const text_duration = __2("Avg. Session Duration", "google-analytics-for-wordpress");
    const text_total_users = __2("Total Users", "google-analytics-for-wordpress");
    const text_bounce = __2("Bounce Rate", "google-analytics-for-wordpress");
    const text_new_users = __2("New Users", "google-analytics-for-wordpress");
    const text_waiting_for_your_stats = __2(
      "We're Waiting for Your Stats!",
      "google-analytics-for-wordpress"
    );
    const text_waiting_to_process_your_data = __2(
      "We're waiting to process your data which might take up to 24 hours.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_sessions = __2(
      "A session is the browsing session of a single user to your site.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_pageviews = __2(
      "A pageview is defined as a view of a page on your site that is being tracked by the Analytics tracking code.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_duration = __2(
      "Average session duration is calculated by dividing the total time spent by all users on your site (in seconds) by the number of sessions.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_bounce = __2(
      "Bounce Rate represents the percentage of sessions that don't meet the criteria for an engaged session.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_totalusers = __2(
      "The number of distinct tracked users",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_newusers = __2(
      "Users who interacted with your site for the first time.",
      "google-analytics-for-wordpress"
    );
    const BRAND_COLOR = "#3a93dd";
    const overview = computed(() => widgetReports.overview || {});
    const showChart = computed(() => {
      const graph = overview.value?.overviewgraph;
      if (!graph) return false;
      return graph.count !== 0;
    });
    const showOverlay = computed(() => !!overview.value?.show_chart_overlay);
    const infoboxRange = computed(() => overview.value?.infobox?.range ?? 0);
    const chartOptions = computed(() => ({
      chart: {
        toolbar: { show: false },
        zoom: { enabled: false }
      },
      stroke: { curve: "smooth", width: 2 },
      colors: [BRAND_COLOR],
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.55, opacityTo: 0.05 }
      },
      dataLabels: { enabled: false },
      grid: { show: true, borderColor: "#f3f6fa" },
      xaxis: {
        categories: overview.value?.overviewgraph?.labels || [],
        labels: { style: { fontSize: "11px", colors: "#8c98a8" } },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: { fontSize: "11px", colors: "#8c98a8" },
          formatter: (v) => typeof v === "number" ? v.toLocaleString() : v
        }
      },
      tooltip: {
        theme: "light",
        x: { show: true },
        y: { formatter: (v) => typeof v === "number" ? v.toLocaleString() : v }
      },
      markers: { size: 0, hover: { size: 4 } }
    }));
    const chartSeries = computed(() => {
      const graph = overview.value?.overviewgraph;
      if (!graph) return [];
      const key = current_tab.value;
      const section = graph[key];
      if (!section?.datapoints) return [];
      const name = key === "sessions" ? text_sessions : text_pageviews;
      return [{ name, data: section.datapoints }];
    });
    function tabClass(tab) {
      return tab === current_tab.value ? "monsterinsights-active-tab-button" : "";
    }
    function switchTab(tab) {
      current_tab.value = tab;
    }
    function infoboxData(type, reversed = false) {
      const box = overview.value?.infobox?.[type];
      const result = { value: "", change: "", direction: "", color: "" };
      if (!box) return result;
      result.value = box.value?.toString?.() ?? box.value ?? "";
      result.change = box.prev;
      if (box.prev === 0) {
        result.direction = "";
      } else if (box.prev > 0) {
        result.direction = "up";
        result.color = "green";
      } else {
        result.direction = "down";
        result.color = "red";
      }
      if (reversed) {
        result.color = result.direction === "down" ? "green" : "red";
      }
      return result;
    }
    function forceRerender() {
      chartKey.value += 1;
    }
    onMounted(() => {
      if (typeof window !== "undefined" && window.jQuery) {
        const container = document.getElementById("dashboard-widgets");
        if (container) {
          window.jQuery(container).on("sortstop.monsterinsights-widget-overview", forceRerender);
        }
      }
    });
    onUnmounted(() => {
      if (typeof window !== "undefined" && window.jQuery) {
        const container = document.getElementById("dashboard-widgets");
        if (container) {
          window.jQuery(container).off("sortstop.monsterinsights-widget-overview", forceRerender);
        }
      }
    });
    watch(() => widgetStore.width, () => forceRerender());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        showChart.value ? (openBlock(), createElementBlock("div", {
          key: chartKey.value,
          class: "monsterinsights-report-tabs monsterinsights-report-row"
        }, [
          createBaseVNode("div", _hoisted_1$k, [
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass(tabClass("sessions")),
              onClick: _cache[0] || (_cache[0] = ($event) => switchTab("sessions"))
            }, [
              _cache[2] || (_cache[2] = createBaseVNode("i", {
                class: "monstericon-user",
                "aria-hidden": "true"
              }, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_sessions))
              }, null, 8, _hoisted_2$b)
            ], 2),
            createBaseVNode("button", {
              type: "button",
              class: normalizeClass(tabClass("pageviews")),
              onClick: _cache[1] || (_cache[1] = ($event) => switchTab("pageviews"))
            }, [
              _cache[3] || (_cache[3] = createBaseVNode("i", {
                class: "monstericon-eye",
                "aria-hidden": "true"
              }, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_pageviews))
              }, null, 8, _hoisted_3$9)
            ], 2)
          ]),
          createBaseVNode("div", _hoisted_4$9, [
            chartSeries.value.length ? (openBlock(), createBlock(unref(apexchart), {
              key: 0,
              type: "area",
              height: "260",
              options: chartOptions.value,
              series: chartSeries.value
            }, null, 8, ["options", "series"])) : createCommentVNode("", true),
            showOverlay.value ? (openBlock(), createElementBlock("div", _hoisted_5$3, [
              createBaseVNode("div", _hoisted_6$3, [
                createBaseVNode("h3", {
                  textContent: toDisplayString(unref(text_waiting_for_your_stats))
                }, null, 8, _hoisted_7$3),
                createBaseVNode("p", {
                  textContent: toDisplayString(unref(text_waiting_to_process_your_data))
                }, null, 8, _hoisted_8$3)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_9$3, [
          createVNode(_sfc_main$n, {
            title: unref(text_sessions),
            value: unref(formatNumber)(infoboxData("sessions").value),
            change: infoboxData("sessions").change,
            direction: infoboxData("sessions").direction,
            color: infoboxData("sessions").color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_sessions)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_pageviews),
            value: unref(formatNumber)(infoboxData("pageviews").value),
            change: infoboxData("pageviews").change,
            direction: infoboxData("pageviews").direction,
            color: infoboxData("pageviews").color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_pageviews)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_duration),
            value: infoboxData("duration").value,
            change: infoboxData("duration").change,
            direction: infoboxData("duration").direction,
            color: infoboxData("duration").color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_duration)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_total_users),
            value: unref(formatNumber)(infoboxData("totalusers").value),
            change: infoboxData("totalusers").change,
            direction: infoboxData("totalusers").direction,
            color: infoboxData("totalusers").color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_totalusers)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_bounce),
            value: infoboxData("bounce_rate", true).value,
            change: infoboxData("bounce_rate", true).change,
            direction: infoboxData("bounce_rate", true).direction,
            color: infoboxData("bounce_rate", true).color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_bounce)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_new_users),
            value: unref(formatNumber)(infoboxData("new_users").value),
            change: infoboxData("new_users").change,
            direction: infoboxData("new_users").direction,
            color: infoboxData("new_users").color,
            days: infoboxRange.value,
            tooltip: unref(text_tooltip_newusers)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"])
        ])
      ]);
    };
  }
};
const _hoisted_1$j = { class: "monsterinsights-report-row monsterinsights-report-infobox-row" };
const _sfc_main$l = {
  __name: "WidgetReportOverviewLite",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const overview = computed(() => widgetReports.overview || {});
    const infoboxRange = computed(() => overview.value?.infobox?.range ?? 0);
    const text_sessions = __2("Sessions", "google-analytics-for-wordpress");
    const text_pageviews = __2("Pageviews", "google-analytics-for-wordpress");
    const text_duration = __2("Avg. Session Duration", "google-analytics-for-wordpress");
    const text_total_users = __2("Total Users", "google-analytics-for-wordpress");
    const text_bounce = __2("Bounce Rate", "google-analytics-for-wordpress");
    const text_new_users = __2("New Users", "google-analytics-for-wordpress");
    const text_tooltip_sessions = __2(
      "A session is the browsing session of a single user to your site.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_pageviews = __2(
      "A pageview is defined as a view of a page on your site that is being tracked by the Analytics tracking code.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_duration = __2(
      "Average session duration is calculated by dividing the total time spent by all users on your site (in seconds) by the number of sessions.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_bounce = __2(
      "Bounce Rate represents the percentage of sessions that don't meet the criteria for an engaged session.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_totalusers = __2(
      "The number of distinct tracked users",
      "google-analytics-for-wordpress"
    );
    const text_tooltip_newusers = __2(
      "Users who interacted with your site for the first time.",
      "google-analytics-for-wordpress"
    );
    function infoboxData(type, reversed = false) {
      const box = overview.value?.infobox?.[type];
      const result = { value: "", change: "", direction: "", color: "" };
      if (!box) return result;
      result.value = box.value?.toString?.() ?? box.value ?? "";
      result.change = box.prev;
      if (box.prev === 0) {
        result.direction = "";
      } else if (box.prev > 0) {
        result.direction = "up";
        result.color = "green";
      } else {
        result.direction = "down";
        result.color = "red";
      }
      if (reversed) {
        result.color = result.direction === "down" ? "green" : "red";
      }
      return result;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$j, [
        createVNode(_sfc_main$n, {
          title: unref(text_sessions),
          value: unref(formatNumber)(infoboxData("sessions").value),
          change: infoboxData("sessions").change,
          direction: infoboxData("sessions").direction,
          color: infoboxData("sessions").color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_sessions)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
        createVNode(_sfc_main$n, {
          title: unref(text_pageviews),
          value: unref(formatNumber)(infoboxData("pageviews").value),
          change: infoboxData("pageviews").change,
          direction: infoboxData("pageviews").direction,
          color: infoboxData("pageviews").color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_pageviews)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
        createVNode(_sfc_main$n, {
          title: unref(text_duration),
          value: infoboxData("duration").value,
          change: infoboxData("duration").change,
          direction: infoboxData("duration").direction,
          color: infoboxData("duration").color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_duration)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
        createVNode(_sfc_main$n, {
          title: unref(text_total_users),
          value: unref(formatNumber)(infoboxData("totalusers").value),
          change: infoboxData("totalusers").change,
          direction: infoboxData("totalusers").direction,
          color: infoboxData("totalusers").color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_totalusers)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
        createVNode(_sfc_main$n, {
          title: unref(text_bounce),
          value: infoboxData("bounce_rate", true).value,
          change: infoboxData("bounce_rate", true).change,
          direction: infoboxData("bounce_rate", true).direction,
          color: infoboxData("bounce_rate", true).color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_bounce)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
        createVNode(_sfc_main$n, {
          title: unref(text_new_users),
          value: unref(formatNumber)(infoboxData("new_users").value),
          change: infoboxData("new_users").change,
          direction: infoboxData("new_users").direction,
          color: infoboxData("new_users").color,
          days: infoboxRange.value,
          tooltip: unref(text_tooltip_newusers)
        }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"])
      ]);
    };
  }
};
const _hoisted_1$i = ["id"];
const _hoisted_2$a = ["textContent"];
const _hoisted_3$8 = { class: "monsterinsights-table-box-list" };
const _hoisted_4$8 = { class: "monsterinsights-table-list-item-td-text" };
const _hoisted_5$2 = ["textContent"];
const _hoisted_6$2 = ["innerHTML"];
const _hoisted_7$2 = { class: "monsterinsights-table-list-item-td-number" };
const _hoisted_8$2 = ["innerHTML"];
const _hoisted_9$2 = {
  key: 1,
  class: "monsterinsights-table-box-footer"
};
const _sfc_main$k = {
  __name: "ReportListBox",
  props: {
    title: { type: String, default: "" },
    id: { type: String, default: "" },
    tooltip: { type: String, default: "" },
    rows: { type: Array, default: () => [] },
    icon: { type: String, default: "" },
    columnType: {
      type: String,
      default: null,
      validator: (v) => !v || ["numeric", "percentage", "average", "duration", "pricing"].includes(v)
    },
    maxRows: { type: Number, default: 0 }
    // 0 means no limit
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const titleClass = computed(() => {
      let cls = "monsterinsights-report-title";
      if (props.icon) cls += " " + props.icon;
      return cls;
    });
    const hasButtonSlot = computed(() => !!slots.button);
    const tableRows = computed(() => {
      const rows = props.maxRows > 0 ? props.rows.slice(0, props.maxRows) : [...props.rows];
      while (rows.length < 10) {
        rows.push({ number: "", text: "", right: "", sessions: "" });
      }
      return rows;
    });
    const detectedColumnType = computed(() => {
      if (props.columnType) return props.columnType;
      const titleText = String(props.title || "").toLowerCase();
      if (titleText.includes("percent") || titleText.includes("%") || titleText.includes("rate") && (titleText.includes("conversion") || titleText.includes("bounce"))) {
        return "percentage";
      }
      if (titleText.includes("average") || titleText.includes("avg")) return "average";
      if (titleText.includes("duration") || titleText.includes("time") && (titleText.includes("to") || titleText.includes("purchase"))) {
        return "duration";
      }
      if (titleText.includes("revenue") || titleText.includes("price") || titleText.includes("cost") || titleText.includes("amount") || titleText.includes("sales") || titleText.includes("value")) {
        return "pricing";
      }
      return "numeric";
    });
    const numberFormatterWithCommas = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
    const numberFormatterWholeWithCommas = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
    const pricingFormatter = new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    function parseNumericValue(value) {
      if (value === "" || value == null) return 0;
      if (typeof value === "number") return isFinite(value) ? value : 0;
      let str = String(value).trim();
      str = str.replace(/<[^>]*>/g, "");
      str = str.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&");
      str = str.replace(/%/g, "");
      str = str.replace(/[^\d.,-]/g, "").replace(/,/g, "");
      const num = parseFloat(str);
      return isNaN(num) ? 0 : num;
    }
    function formatNumericValue(value, excludeCommas = false) {
      if (typeof value !== "number" || !isFinite(value)) return "0";
      const rounded = Math.round(value * 100) / 100;
      if (Math.abs(rounded) >= 1e3 && !excludeCommas) {
        if (rounded % 1 === 0) {
          return numberFormatterWholeWithCommas.format(Math.round(rounded));
        }
        return numberFormatterWithCommas.format(rounded).replace(/\.?0+$/, "");
      }
      if (rounded % 1 === 0) return Math.round(rounded).toString();
      return rounded.toFixed(2).replace(/\.?0+$/, "");
    }
    function formatCellValue(value) {
      if (value === "" || value == null) return "";
      const numValue = parseNumericValue(value);
      if (detectedColumnType.value === "pricing") {
        return "$" + pricingFormatter.format(numValue);
      }
      if (detectedColumnType.value === "percentage") {
        return formatNumericValue(numValue, true) + "%";
      }
      if (detectedColumnType.value === "duration") {
        return value;
      }
      if (numValue !== 0 || value !== "0") {
        return formatNumericValue(numValue);
      }
      return value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        class: "monsterinsights-table-box"
      }, [
        __props.title ? (openBlock(), createElementBlock("h3", {
          key: 0,
          class: normalizeClass(titleClass.value),
          textContent: toDisplayString(__props.title)
        }, null, 10, _hoisted_2$a)) : createCommentVNode("", true),
        createVNode(_sfc_main$q, { content: __props.tooltip }, null, 8, ["content"]),
        createBaseVNode("div", _hoisted_3$8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(tableRows.value, (row, index) => {
            return openBlock(), createElementBlock("div", {
              key: index,
              class: "monsterinsights-table-list-item"
            }, [
              createBaseVNode("div", _hoisted_4$8, [
                createBaseVNode("span", {
                  class: "monsterinsights-reports-list-count",
                  textContent: toDisplayString(row.number)
                }, null, 8, _hoisted_5$2),
                createBaseVNode("span", {
                  class: "monsterinsights-reports-list-text",
                  innerHTML: unref(sanitizeHtml)(row.text)
                }, null, 8, _hoisted_6$2)
              ]),
              createBaseVNode("div", _hoisted_7$2, [
                createBaseVNode("span", {
                  class: "monsterinsights-reports-list-number",
                  innerHTML: row.number ? formatCellValue(row.right) : ""
                }, null, 8, _hoisted_8$2)
              ])
            ]);
          }), 128))
        ]),
        hasButtonSlot.value ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
          renderSlot(_ctx.$slots, "button")
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1$i);
    };
  }
};
function getReportUrl(route) {
  const base = getMiGlobal("overview_reports_url", "");
  if (!base || !route) {
    return "";
  }
  return `${base}#/${route}`;
}
const _hoisted_1$h = ["href", "textContent"];
const _sfc_main$j = {
  __name: "WidgetReportTopPosts",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const text_button = __2("View Full Posts/Pages Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("publishers-pages");
    const text_top_posts = __2("Top Posts/Pages", "google-analytics-for-wordpress");
    const text_top_posts_tooltip = __2(
      "This list shows your website's most viewed posts and pages based on pageviews.",
      "google-analytics-for-wordpress"
    );
    const overview = computed(() => widgetReports.overview || {});
    const topPostsData = computed(() => {
      const pages = overview.value?.toppages;
      if (!Array.isArray(pages)) return [];
      return pages.map((page, index) => {
        const text = page.hostname ? `<a href="${page.hostname}${page.url}" target="_blank" rel="noreferrer noopener">${page.title}</a>` : page.title;
        return {
          number: index + 1 + ".",
          text,
          right: page.sessions
        };
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$k, {
        title: unref(text_top_posts),
        rows: topPostsData.value,
        tooltip: unref(text_top_posts_tooltip),
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$h)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "rows", "tooltip"]);
    };
  }
};
const _hoisted_1$g = ["id"];
const _hoisted_2$9 = ["textContent"];
const _hoisted_3$7 = ["title"];
const _hoisted_4$7 = { class: "monsterinsights-reports-pie-chart-holder" };
const _hoisted_5$1 = { class: "monsterinsights-reports-pie-chart-and-legend" };
const _hoisted_6$1 = {
  key: 0,
  class: "monsterinsights-widget-chart-empty"
};
const _hoisted_7$1 = {
  key: 0,
  class: "monsterinsights-pie-chart-legend"
};
const _hoisted_8$1 = { class: "monsterinsights-pie-chart-legend-text-and-value" };
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = { class: "monsterinsights-pie-chart-legend-value" };
const _sfc_main$i = {
  __name: "ReportPieChart",
  props: {
    id: { type: String, default: "" },
    title: { type: String, default: "" },
    tooltip: { type: String, default: "" },
    /** chartData shape: { labels: string[], values: number[], backgroundColor?: string[] } */
    chartData: { type: [Object, Boolean], default: null },
    chartWidth: { type: [String, Number], default: 200 },
    chartHeight: { type: [String, Number], default: 200 }
  },
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const apexchart = m;
    const props = __props;
    const text_no_data = __2("No data available", "google-analytics-for-wordpress");
    const chartStyle = computed(() => ({
      maxWidth: `${props.chartWidth}px`,
      maxHeight: `${props.chartHeight}px`
    }));
    const defaultColors = ["#2679c1", "#57a9f1", "#b1dafd", "#F2994A", "#704CBC", "#5cc0a5"];
    const colors = computed(() => props.chartData?.backgroundColor || defaultColors);
    const hasData = computed(() => {
      if (!props.chartData) return false;
      const values = props.chartData.values || [];
      return values.some((v) => Number(v) > 0);
    });
    const series = computed(() => {
      if (!props.chartData) return [];
      return (props.chartData.values || []).map((v) => Number(v) || 0);
    });
    const chartOptions = computed(() => ({
      chart: { toolbar: { show: false } },
      labels: props.chartData?.labels || [],
      colors: colors.value,
      legend: { show: false },
      dataLabels: { enabled: false },
      stroke: { width: 2, colors: ["#ffffff"] },
      tooltip: {
        y: {
          formatter: (v) => typeof v === "number" ? v.toLocaleString() + "%" : v
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: "62%",
            labels: { show: false }
          },
          expandOnClick: false
        }
      },
      states: {
        hover: { filter: { type: "none" } },
        active: { filter: { type: "none" } }
      }
    }));
    return (_ctx, _cache) => {
      return __props.chartData ? (openBlock(), createElementBlock("div", {
        key: 0,
        id: __props.id,
        class: "monsterinsights-reports-pie-chart"
      }, [
        __props.title ? (openBlock(), createElementBlock("h3", {
          key: 0,
          class: "monsterinsights-report-title",
          textContent: toDisplayString(__props.title)
        }, null, 8, _hoisted_2$9)) : createCommentVNode("", true),
        __props.tooltip ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "monsterinsights-info",
          title: __props.tooltip,
          tabindex: "0"
        }, [..._cache[0] || (_cache[0] = [
          createBaseVNode("i", {
            class: "monstericon monstericon-info-circle-regular",
            "aria-hidden": "true"
          }, null, -1)
        ])], 8, _hoisted_3$7)) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_4$7, [
            createBaseVNode("div", _hoisted_5$1, [
              createBaseVNode("div", {
                class: "monsterinsights-pie-chart",
                style: normalizeStyle(chartStyle.value)
              }, [
                !hasData.value ? (openBlock(), createElementBlock("div", _hoisted_6$1, toDisplayString(unref(text_no_data)), 1)) : (openBlock(), createBlock(unref(apexchart), {
                  key: 1,
                  type: "donut",
                  width: __props.chartWidth,
                  height: __props.chartHeight,
                  options: chartOptions.value,
                  series: series.value
                }, null, 8, ["width", "height", "options", "series"]))
              ], 4),
              hasData.value ? (openBlock(), createElementBlock("ul", _hoisted_7$1, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.chartData.values, (value, index) => {
                  return openBlock(), createElementBlock("li", { key: index }, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pie-chart-legend-color",
                      style: normalizeStyle({ backgroundColor: colors.value[index % colors.value.length] })
                    }, null, 4),
                    createBaseVNode("span", _hoisted_8$1, [
                      createBaseVNode("span", {
                        class: "monsterinsights-pie-chart-legend-text",
                        textContent: toDisplayString(__props.chartData.labels[index])
                      }, null, 8, _hoisted_9$1),
                      createBaseVNode("span", _hoisted_10$1, toDisplayString(value || 0) + "% ", 1)
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ])
        ])
      ], 8, _hoisted_1$g)) : createCommentVNode("", true);
    };
  }
};
const _sfc_main$h = {
  __name: "WidgetReportNewVsReturning",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const text_title = __2("New vs. Returning Visitors", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This graph shows what percent of your user sessions come from new versus repeat visitors.",
      "google-analytics-for-wordpress"
    );
    const overview = computed(() => widgetReports.overview || {});
    const chartData = computed(() => {
      const nvr = overview.value?.newreturning;
      if (!nvr) return false;
      return {
        labels: [
          __2("New Visitors", "google-analytics-for-wordpress"),
          __2("Returning Visitors", "google-analytics-for-wordpress")
        ],
        values: [Number(nvr.newusers) || 0, Number(nvr.returnusers) || 0],
        backgroundColor: ["#2679c1", "#57a9f1"]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$i, {
        id: "newvsreturning",
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        "chart-data": chartData.value
      }, null, 8, ["title", "tooltip", "chart-data"]);
    };
  }
};
const _sfc_main$g = {
  __name: "WidgetReportDevices",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const text_title = __2("Device Breakdown", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This graph shows the percentage of sessions on your site from different types of devices: traditional desktops/laptops, tablets, and mobile phones.",
      "google-analytics-for-wordpress"
    );
    const overview = computed(() => widgetReports.overview || {});
    const chartData = computed(() => {
      const devices = overview.value?.devices;
      if (!devices) return false;
      return {
        labels: [
          __2("Desktop", "google-analytics-for-wordpress"),
          __2("Tablet", "google-analytics-for-wordpress"),
          __2("Mobile", "google-analytics-for-wordpress")
        ],
        values: [
          Number(devices.desktop) || 0,
          Number(devices.tablet) || 0,
          Number(devices.mobile) || 0
        ],
        backgroundColor: ["#2679c1", "#57a9f1", "#b1dafd"]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$i, {
        id: "devices",
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        "chart-data": chartData.value
      }, null, 8, ["title", "tooltip", "chart-data"]);
    };
  }
};
const _hoisted_1$f = ["id"];
const _hoisted_2$8 = ["textContent"];
const _hoisted_3$6 = { class: "monsterinsights-table-box-list monsterinsights-table-box-table" };
const _hoisted_4$6 = { key: 0 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { class: "monsterinsights-report-box-table-head-columns" };
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = {
  key: 1,
  class: "monsterinsights-table-no-data"
};
const _hoisted_11 = ["textContent"];
const _hoisted_12 = {
  key: 1,
  class: "monsterinsights-table-box-footer"
};
const _sfc_main$f = {
  __name: "ReportTableBox",
  props: {
    id: { type: String, default: "" },
    title: { type: String, default: "" },
    tooltip: { type: String, default: "" },
    emptytext: { type: String, default: "" },
    headers: { type: Array, default: () => [] },
    rows: { type: Array, default: () => [] },
    maxRows: { type: Number, default: 0 }
    // 0 means no limit
  },
  setup(__props) {
    const props = __props;
    const slots = useSlots();
    const hasButtonSlot = computed(() => !!slots.button);
    const tableRows = computed(() => {
      if (props.maxRows > 0 && props.rows.length > props.maxRows) {
        return props.rows.slice(0, props.maxRows);
      }
      return props.rows;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: __props.id,
        class: "monsterinsights-table-box"
      }, [
        __props.title ? (openBlock(), createElementBlock("h3", {
          key: 0,
          class: "monsterinsights-report-title",
          textContent: toDisplayString(__props.title)
        }, null, 8, _hoisted_2$8)) : createCommentVNode("", true),
        createVNode(_sfc_main$q, { content: __props.tooltip }, null, 8, ["content"]),
        createBaseVNode("div", _hoisted_3$6, [
          tableRows.value.length > 0 ? (openBlock(), createElementBlock("table", _hoisted_4$6, [
            __props.headers.length > 0 ? (openBlock(), createElementBlock("thead", _hoisted_5, [
              createBaseVNode("tr", _hoisted_6, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(__props.headers, (header, index) => {
                  return openBlock(), createElementBlock("th", {
                    key: index,
                    textContent: toDisplayString(header)
                  }, null, 8, _hoisted_7);
                }), 128))
              ])
            ])) : createCommentVNode("", true),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(tableRows.value, (row, rowIndex) => {
                return openBlock(), createElementBlock("tr", {
                  key: rowIndex,
                  class: "monsterinsights-table-list-item"
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(row, (cell, cellIndex) => {
                    return openBlock(), createElementBlock("td", { key: cellIndex }, [
                      createBaseVNode("div", {
                        class: "monsterinsights-table-mobile-heading",
                        textContent: toDisplayString(__props.headers[cellIndex] || "")
                      }, null, 8, _hoisted_8),
                      createBaseVNode("div", {
                        class: "monsterinsights-table-item-content",
                        innerHTML: unref(sanitizeHtml)(cell)
                      }, null, 8, _hoisted_9)
                    ]);
                  }), 128))
                ]);
              }), 128))
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_10, [
            createBaseVNode("h3", {
              textContent: toDisplayString(__props.emptytext)
            }, null, 8, _hoisted_11)
          ]))
        ]),
        hasButtonSlot.value ? (openBlock(), createElementBlock("div", _hoisted_12, [
          renderSlot(_ctx.$slots, "button")
        ])) : createCommentVNode("", true)
      ], 8, _hoisted_1$f);
    };
  }
};
const _hoisted_1$e = { class: "monsterinsights-widget-pro-upsell" };
const _hoisted_2$7 = ["textContent"];
const _hoisted_3$5 = { class: "monsterinsights-widget-pro-upsell__body" };
const _hoisted_4$5 = ["href"];
const _sfc_main$e = {
  __name: "WidgetPublisherUpsell",
  props: {
    title: { type: String, required: true },
    type: { type: String, default: "publisher" }
  },
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const props = __props;
    const text_description = __2(
      "Upgrade to Pro to unlock this report and more advanced analytics.",
      "google-analytics-for-wordpress"
    );
    const text_upgrade = __2("Upgrade to Pro", "google-analytics-for-wordpress");
    const upgradeUrl = computed(() => getUpgradeUrl("dashboard-widget", props.type));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$e, [
        createBaseVNode("p", {
          class: "monsterinsights-widget-pro-upsell__title",
          textContent: toDisplayString(__props.title)
        }, null, 8, _hoisted_2$7),
        createBaseVNode("p", _hoisted_3$5, toDisplayString(unref(text_description)), 1),
        createBaseVNode("a", {
          class: "monsterinsights-button monsterinsights-button-green",
          href: upgradeUrl.value,
          target: "_blank",
          rel: "noopener"
        }, toDisplayString(unref(text_upgrade)), 9, _hoisted_4$5)
      ]);
    };
  }
};
const _hoisted_1$d = ["href", "textContent"];
const _sfc_main$d = {
  __name: "WidgetReportLandingPages",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const licenseStore = useLicenseStore();
    const text_title = __2("Top Landing Pages", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This list shows the top pages users first land on when visiting your website.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("View Full Top Landing Pages Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("traffic-landing-pages");
    const text_empty = __2(
      "No landing pages tracked during this time period.",
      "google-analytics-for-wordpress"
    );
    const headers = [
      __2("Page Titles", "google-analytics-for-wordpress"),
      __2("Visits", "google-analytics-for-wordpress"),
      __2("Avg. Duration", "google-analytics-for-wordpress"),
      __2("Bounce Rate", "google-analytics-for-wordpress")
    ];
    const publisher = computed(() => widgetReports.publisher || {});
    const showUpsell = computed(() => {
      const license = isNetworkAdmin() ? licenseStore.license_network : licenseStore.license;
      return license?.type === "basic";
    });
    const rows = computed(() => {
      const pages = publisher.value?.landingpages;
      if (!Array.isArray(pages)) return [];
      return pages.map((row) => {
        if (typeof row.entrances !== "undefined") {
          return [escape(row.title), formatNumber(row.entrances)];
        }
        return [
          escape(row.title),
          formatNumber(row.visits),
          row.duration,
          `${formatNumber(row.bounce)}%`
        ];
      });
    });
    function escape(str) {
      return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "publisher"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$f, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        headers,
        rows: rows.value,
        emptytext: unref(text_empty),
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$d)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "rows", "emptytext"]));
    };
  }
};
const _hoisted_1$c = ["href", "textContent"];
const _sfc_main$c = {
  __name: "WidgetReportOutboundLinks",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const licenseStore = useLicenseStore();
    const text_title = __2("Top Outbound Links", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This list shows the top links clicked on your website that go to another website.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("View Full Outbound Links Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("publishers");
    const publisher = computed(() => widgetReports.publisher || {});
    const showUpsell = computed(() => {
      const license = isNetworkAdmin() ? licenseStore.license_network : licenseStore.license;
      return license?.type === "basic";
    });
    const listRows = computed(() => {
      const links = publisher.value?.outboundlinks;
      if (!Array.isArray(links)) return [];
      return links.map((row, index) => ({
        number: index + 1 + ".",
        text: row.url ? `<a href="${row.url}" target="_blank" rel="noopener noreferrer">${row.name || row.url}</a>` : row.name || "",
        right: row.count || row.clicks || 0
      }));
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "publisher"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$k, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        rows: listRows.value,
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$c)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "rows"]));
    };
  }
};
const _hoisted_1$b = ["href", "textContent"];
const _sfc_main$b = {
  __name: "WidgetReportAffiliateLinks",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const licenseStore = useLicenseStore();
    const text_title = __2("Top Affiliate Links", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This list shows the top affiliate links your visitors clicked the most.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("View Full Affiliate Links Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("publishers");
    const publisher = computed(() => widgetReports.publisher || {});
    const showUpsell = computed(() => {
      const license = isNetworkAdmin() ? licenseStore.license_network : licenseStore.license;
      return license?.type === "basic";
    });
    const listRows = computed(() => {
      const links = publisher.value?.affiliatelinks;
      if (!Array.isArray(links)) return [];
      return links.map((row, index) => ({
        number: index + 1 + ".",
        text: row.url ? `<a href="${row.url}" target="_blank" rel="noopener noreferrer">${row.name || row.url}</a>` : row.name || "",
        right: row.count || row.clicks || 0
      }));
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "publisher"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$k, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        rows: listRows.value,
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$b)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "rows"]));
    };
  }
};
const _hoisted_1$a = ["href", "textContent"];
const _sfc_main$a = {
  __name: "WidgetReportDownloadLinks",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    const licenseStore = useLicenseStore();
    const text_title = __2("Top Download Links", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This list shows the download links your visitors clicked the most.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("View Full Download Links Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("publishers");
    const publisher = computed(() => widgetReports.publisher || {});
    const showUpsell = computed(() => {
      const license = isNetworkAdmin() ? licenseStore.license_network : licenseStore.license;
      return license?.type === "basic";
    });
    const listRows = computed(() => {
      const links = publisher.value?.downloadlinks;
      if (!Array.isArray(links)) return [];
      return links.map((row, index) => ({
        number: index + 1 + ".",
        text: row.url ? `<a href="${row.url}" target="_blank" rel="noopener noreferrer">${row.name || row.url}</a>` : row.name || "",
        right: row.count || row.clicks || 0
      }));
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "publisher"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$k, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        rows: listRows.value,
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$a)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "rows"]));
    };
  }
};
const _hoisted_1$9 = {
  key: 1,
  class: "monsterinsights-ecommerce-overview"
};
const _hoisted_2$6 = { class: "monsterinsights-report-row monsterinsights-report-infobox-row" };
const _sfc_main$9 = {
  __name: "WidgetReportEcommerceOverview",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("eCommerce Overview", "google-analytics-for-wordpress");
    const text_conversion_rate = __2("Conversion Rate", "google-analytics-for-wordpress");
    const text_transactions = __2("Transactions", "google-analytics-for-wordpress");
    const text_revenue = __2("Revenue", "google-analytics-for-wordpress");
    const text_avg_order = __2("Avg. Order Value", "google-analytics-for-wordpress");
    const text_conversion_rate_tooltip = __2(
      "The percentage of website sessions resulting in a transaction.",
      "google-analytics-for-wordpress"
    );
    const text_transactions_tooltip = __2(
      "The number of orders on your website.",
      "google-analytics-for-wordpress"
    );
    const text_revenue_tooltip = __2(
      "The total amount of revenue you made from all your orders.",
      "google-analytics-for-wordpress"
    );
    const text_avg_order_tooltip = __2(
      "The average amount spent on each order made on your website.",
      "google-analytics-for-wordpress"
    );
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const range = computed(() => ecommerce.value?.infobox?.range ?? 0);
    const showUpsell = computed(() => {
      return true;
    });
    function rawInfobox(type, reversed = false) {
      const box = ecommerce.value?.infobox?.[type];
      const out = { rawValue: "", change: "", direction: "", color: "" };
      if (!box) return out;
      out.rawValue = box.value;
      out.change = box.prev;
      if (box.prev === 0) {
        out.direction = "";
      } else if (box.prev > 0) {
        out.direction = "up";
        out.color = "green";
      } else {
        out.direction = "down";
        out.color = "red";
      }
      if (reversed) {
        out.color = out.direction === "down" ? "green" : "red";
      }
      return out;
    }
    const conversionRateData = computed(() => {
      const raw = rawInfobox("conversionrate");
      return { ...raw, value: raw.rawValue ? formatPercent(raw.rawValue) : "" };
    });
    const transactionsData = computed(() => {
      const raw = rawInfobox("transactions");
      return { ...raw, value: raw.rawValue ? formatNumber(raw.rawValue) : "0" };
    });
    const revenueData = computed(() => {
      const raw = rawInfobox("revenue");
      return { ...raw, value: formatCurrency(raw.rawValue || 0) };
    });
    const orderValueData = computed(() => {
      const raw = rawInfobox("ordervalue");
      return { ...raw, value: formatCurrency(raw.rawValue || 0) };
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createElementBlock("div", _hoisted_1$9, [
        createBaseVNode("div", _hoisted_2$6, [
          createVNode(_sfc_main$n, {
            title: unref(text_conversion_rate),
            value: conversionRateData.value.value,
            change: conversionRateData.value.change,
            direction: conversionRateData.value.direction,
            color: conversionRateData.value.color,
            days: range.value,
            tooltip: unref(text_conversion_rate_tooltip)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_transactions),
            value: transactionsData.value.value,
            change: transactionsData.value.change,
            direction: transactionsData.value.direction,
            color: transactionsData.value.color,
            days: range.value,
            tooltip: unref(text_transactions_tooltip)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_revenue),
            value: revenueData.value.value,
            change: revenueData.value.change,
            direction: revenueData.value.direction,
            color: revenueData.value.color,
            days: range.value,
            tooltip: unref(text_revenue_tooltip)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"]),
          createVNode(_sfc_main$n, {
            title: unref(text_avg_order),
            value: orderValueData.value.value,
            change: orderValueData.value.change,
            direction: orderValueData.value.direction,
            color: orderValueData.value.color,
            days: range.value,
            tooltip: unref(text_avg_order_tooltip)
          }, null, 8, ["title", "value", "change", "direction", "color", "days", "tooltip"])
        ])
      ]));
    };
  }
};
const _hoisted_1$8 = ["href", "textContent"];
const _sfc_main$8 = {
  __name: "WidgetReportTopProducts",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("Top Products", "google-analytics-for-wordpress");
    const text_empty = __2(
      "No product sales tracked during this time period.",
      "google-analytics-for-wordpress"
    );
    const text_tooltip = __2(
      "This list shows the top selling products on your website.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("View Full Top Products Report", "google-analytics-for-wordpress");
    const reportUrl = getReportUrl("ecommerce");
    const headers = [
      __2("Product Name", "google-analytics-for-wordpress"),
      __2("Quantity", "google-analytics-for-wordpress"),
      __2("% of Sales", "google-analytics-for-wordpress"),
      __2("Total Revenue", "google-analytics-for-wordpress")
    ];
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const showUpsell = computed(() => {
      return true;
    });
    const rows = computed(() => {
      const products = ecommerce.value?.products;
      if (!Array.isArray(products)) return [];
      return products.map((row) => [
        escape(row.name || ""),
        formatNumber(row.quantity),
        formatNumber(row.percent) + "%",
        formatCurrency(row.revenue)
      ]);
    });
    function escape(str) {
      return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$f, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        emptytext: unref(text_empty),
        headers,
        rows: rows.value,
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$8)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "emptytext", "rows"]));
    };
  }
};
const _hoisted_1$7 = ["href", "textContent"];
const _sfc_main$7 = {
  __name: "WidgetReportTopConversions",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("Top Conversion Sources", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "This list shows the top referral websites in terms of product revenue.",
      "google-analytics-for-wordpress"
    );
    const text_empty = __2(
      "No conversion sources tracked during this time period.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2(
      "View Top Conversions Sources Report",
      "google-analytics-for-wordpress"
    );
    const reportUrl = getReportUrl("ecommerce");
    const headers = [
      __2("Sources", "google-analytics-for-wordpress"),
      __2("Visits", "google-analytics-for-wordpress"),
      __2("% of Visits", "google-analytics-for-wordpress"),
      __2("Revenue", "google-analytics-for-wordpress")
    ];
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const showUpsell = computed(() => {
      return true;
    });
    const rows = computed(() => {
      const items = ecommerce.value?.conversions;
      if (!Array.isArray(items)) return [];
      return items.map((row) => {
        const url = row.url || "";
        const favicon = url ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(url)}` : "";
        const sourceCell = favicon ? `<img class="monsterinsights-reports-referral-icon" src="${favicon}" alt="referral-icon" /> ${escape(url)}` : escape(url);
        return [
          sourceCell,
          formatNumber(row.sessions),
          formatNumber(row.percent) + "%",
          formatCurrency(row.revenue)
        ];
      });
    });
    function escape(str) {
      return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createBlock(_sfc_main$f, {
        key: 1,
        title: unref(text_title),
        tooltip: unref(text_tooltip),
        emptytext: unref(text_empty),
        headers,
        rows: rows.value,
        "max-rows": 10
      }, createSlots({ _: 2 }, [
        unref(reportUrl) ? {
          name: "button",
          fn: withCtx(() => [
            createBaseVNode("a", {
              href: unref(reportUrl),
              class: "monsterinsights-button",
              textContent: toDisplayString(unref(text_button))
            }, null, 8, _hoisted_1$7)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["title", "tooltip", "emptytext", "rows"]));
    };
  }
};
const _hoisted_1$6 = {
  key: 1,
  class: "monsterinsights-report-row monsterinsights-report-infobox-row"
};
const _sfc_main$6 = {
  __name: "WidgetReportAddRemove",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("Total Add/Remove", "google-analytics-for-wordpress");
    const text_added = __2("Added to Cart", "google-analytics-for-wordpress");
    const text_removed = __2("Removed from Cart", "google-analytics-for-wordpress");
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const range = computed(() => ecommerce.value?.infobox?.range ?? 0);
    const showUpsell = computed(() => {
      return true;
    });
    function infobox(type) {
      const box = ecommerce.value?.infobox?.[type];
      const result = { value: "", change: "", direction: "", color: "" };
      if (!box) return result;
      result.value = box.value?.toString?.() ?? box.value ?? "";
      result.change = box.prev;
      if (box.prev === 0) {
        result.direction = "";
      } else if (box.prev > 0) {
        result.direction = "up";
        result.color = "green";
      } else {
        result.direction = "down";
        result.color = "red";
      }
      return result;
    }
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(_sfc_main$n, {
          title: unref(text_added),
          value: unref(formatNumber)(infobox("addedtocart").value),
          change: infobox("addedtocart").change,
          direction: infobox("addedtocart").direction,
          color: infobox("addedtocart").color,
          days: range.value
        }, null, 8, ["title", "value", "change", "direction", "color", "days"]),
        createVNode(_sfc_main$n, {
          title: unref(text_removed),
          value: unref(formatNumber)(infobox("removedfromcart").value),
          change: infobox("removedfromcart").change,
          direction: infobox("removedfromcart").direction,
          color: infobox("removedfromcart").color,
          days: range.value
        }, null, 8, ["title", "value", "change", "direction", "color", "days"])
      ]));
    };
  }
};
const _hoisted_1$5 = {
  key: 1,
  class: "monsterinsights-reports-infobox monsterinsights-widget-simple-metric"
};
const _hoisted_2$5 = ["textContent"];
const _hoisted_3$4 = { class: "monsterinsights-clearfix" };
const _hoisted_4$4 = ["textContent"];
const _sfc_main$5 = {
  __name: "WidgetReportNewCustomers",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("New Customers", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "The percentage of first time purchasers.",
      "google-analytics-for-wordpress"
    );
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const showUpsell = computed(() => {
      return true;
    });
    const valueDisplay = computed(() => {
      const val = ecommerce.value?.newcustomers;
      if (val == null || val === "") return "-";
      return `${val}%`;
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("div", {
          class: "monsterinsights-report-title",
          textContent: toDisplayString(unref(text_title))
        }, null, 8, _hoisted_2$5),
        createVNode(_sfc_main$q, { content: unref(text_tooltip) }, null, 8, ["content"]),
        createBaseVNode("div", _hoisted_3$4, [
          createBaseVNode("div", {
            class: "monsterinsights-reports-infobox-number",
            textContent: toDisplayString(valueDisplay.value)
          }, null, 8, _hoisted_4$4)
        ])
      ]));
    };
  }
};
const _hoisted_1$4 = {
  key: 1,
  class: "monsterinsights-reports-infobox monsterinsights-widget-simple-metric"
};
const _hoisted_2$4 = ["textContent"];
const _hoisted_3$3 = { class: "monsterinsights-clearfix" };
const _hoisted_4$3 = ["textContent"];
const _sfc_main$4 = {
  __name: "WidgetReportAbandonedCheckouts",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetReports = useWidgetReportsStore();
    useLicenseStore();
    const text_title = __2("Abandoned Checkouts", "google-analytics-for-wordpress");
    const text_tooltip = __2(
      "The percentage of checkouts that do not result in a transaction.",
      "google-analytics-for-wordpress"
    );
    const ecommerce = computed(() => widgetReports.ecommerce || {});
    const showUpsell = computed(() => {
      return true;
    });
    const valueDisplay = computed(() => {
      const val = ecommerce.value?.abandonedcheckouts;
      if (val == null || val === "") return "-";
      return `${val}%`;
    });
    return (_ctx, _cache) => {
      return showUpsell.value ? (openBlock(), createBlock(_sfc_main$e, {
        key: 0,
        title: unref(text_title),
        type: "ecommerce"
      }, null, 8, ["title"])) : (openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: "monsterinsights-report-title",
          textContent: toDisplayString(unref(text_title))
        }, null, 8, _hoisted_2$4),
        createVNode(_sfc_main$q, { content: unref(text_tooltip) }, null, 8, ["content"]),
        createBaseVNode("div", _hoisted_3$3, [
          createBaseVNode("div", {
            class: "monsterinsights-reports-infobox-number",
            textContent: toDisplayString(valueDisplay.value)
          }, null, 8, _hoisted_4$3)
        ])
      ]));
    };
  }
};
const _hoisted_1$3 = ["onClick", "onKeyup"];
const _hoisted_2$3 = { class: "monsterinsights-widget-report-title" };
const _hoisted_3$2 = {
  key: 1,
  class: "monsterinsights-widget-content"
};
const _hoisted_4$2 = {
  key: 0,
  class: "monsterinsights-widget-report-error"
};
const MOBILE_WIDTH = 782;
const _sfc_main$3 = {
  __name: "WidgetAccordion",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    const { reports, isFullWidth } = storeToRefs(widgetStore);
    const isMobile = ref(false);
    const activeReport = ref("overview");
    const isMI = true;
    const COMPONENT_MAP = {
      WidgetReportOverview: _sfc_main$m,
      WidgetReportTopPosts: _sfc_main$j,
      WidgetReportNewVsReturning: _sfc_main$h,
      WidgetReportDevices: _sfc_main$g,
      WidgetReportLandingPages: _sfc_main$d,
      WidgetReportOutboundLinks: _sfc_main$c,
      WidgetReportAffiliateLinks: _sfc_main$b,
      WidgetReportDownloadLinks: _sfc_main$a,
      WidgetReportEcommerceOverview: _sfc_main$9,
      WidgetReportTopProducts: _sfc_main$8,
      WidgetReportTopConversions: _sfc_main$7,
      WidgetReportAddRemove: _sfc_main$6,
      WidgetReportNewCustomers: _sfc_main$5,
      WidgetReportAbandonedCheckouts: _sfc_main$4
    };
    const accordionClass = computed(() => ({
      "monsterinsights-widget-accordion-lite": !isFullWidth.value
    }));
    const visibleReports = computed(() => {
      const out = {};
      for (const key of Object.keys(reports.value)) {
        const report = reports.value[key];
        if (!report || !report.enabled) continue;
        out[key] = report;
      }
      return out;
    });
    function reportRowClass(key) {
      return `monsterinsights-widget-report-element monsterinsights-widget-report-${key}`;
    }
    function toggleClass(key) {
      return {
        "monsterinsights-widget-toggle": true,
        "monsterinsights-widget-toggle-active": activeReport.value === key
      };
    }
    function showReportTitle(enabled) {
      if (isFullWidth.value) return true;
      return enabled;
    }
    function showReport(key, report) {
      if (isFullWidth.value && report.enabled && !isMobile.value) {
        return true;
      }
      return activeReport.value === key;
    }
    function getReportComponent(name, key) {
      if (key === "overview" && true && isMI) {
        return _sfc_main$l;
      }
      return COMPONENT_MAP[name] || null;
    }
    function isReportLoaded(type) {
      return !!widgetReports[type];
    }
    useLicenseStore();
    function shouldShowUpsell(key, report) {
      report?.type;
      {
        return key !== "overview";
      }
    }
    function upsellType(report) {
      if (report?.type === "ecommerce") return "ecommerce";
      return "publisher";
    }
    async function toggle(event, key) {
      const report = reports.value[key];
      if (!report) return;
      widgetStore.clearReportError(report.type);
      if (!isReportLoaded(report.type)) {
        widgetReports.fetchReportData(report.type).catch(() => {
          widgetStore.setReportError(
            report.type,
            __2("Error loading report data.", "google-analytics-for-wordpress")
          );
        });
      }
      activeReport.value = activeReport.value === key ? "" : key;
      if (activeReport.value && event?.target?.getBoundingClientRect) {
        requestAnimationFrame(() => {
          const rect = event.target.getBoundingClientRect();
          window.scrollTo({
            top: rect.top - 50 + window.pageYOffset,
            left: 0,
            behavior: "smooth"
          });
        });
      }
    }
    let resizing = false;
    function handleResize() {
      if (resizing) return;
      resizing = true;
      (window.requestAnimationFrame || ((cb) => setTimeout(cb, 66)))(() => {
        isMobile.value = window.innerWidth < MOBILE_WIDTH;
        resizing = false;
      });
    }
    onMounted(() => {
      widgetReports.fetchReportData("overview").catch(() => {
        widgetStore.setReportError(
          "overview",
          __2("Error loading report data.", "google-analytics-for-wordpress")
        );
      });
      if (isFullWidth.value) {
        for (const type of widgetStore.activeReportTypes) {
          if (type === "overview") continue;
          widgetReports.fetchReportData(type).catch(() => {
            widgetStore.setReportError(
              type,
              __2("Error loading report data.", "google-analytics-for-wordpress")
            );
          });
        }
      }
      window.addEventListener("resize", handleResize);
      handleResize();
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });
    watch(isFullWidth, (full) => {
      if (!full) return;
      for (const type of widgetStore.activeReportTypes) {
        if (!widgetReports[type]) {
          widgetReports.fetchReportData(type).catch(() => {
            widgetStore.setReportError(
              type,
              __2("Error loading report data.", "google-analytics-for-wordpress")
            );
          });
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-widget-accordion", accordionClass.value])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(visibleReports.value, (report, key) => {
          return openBlock(), createElementBlock("div", {
            key,
            class: normalizeClass(reportRowClass(key))
          }, [
            showReportTitle(report.enabled) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(toggleClass(key)),
              tabindex: "0",
              onClick: withModifiers(($event) => toggle($event, key), ["prevent"]),
              onKeyup: [
                withKeys(($event) => toggle($event, key), ["space"]),
                withKeys(($event) => toggle($event, key), ["enter"])
              ]
            }, [
              createBaseVNode("h2", _hoisted_2$3, [
                createBaseVNode("span", null, toDisplayString(report.name), 1),
                createVNode(_sfc_main$q, {
                  content: report.tooltip || ""
                }, null, 8, ["content"])
              ])
            ], 42, _hoisted_1$3)) : createCommentVNode("", true),
            showReport(key, report) ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
              unref(widgetStore).error[report.type] ? (openBlock(), createElementBlock("div", _hoisted_4$2, toDisplayString(unref(widgetStore).error[report.type]), 1)) : shouldShowUpsell(key, report) ? (openBlock(), createBlock(_sfc_main$o, {
                key: 1,
                type: upsellType(report)
              }, null, 8, ["type"])) : !isReportLoaded(report.type) || unref(widgetReports).isLoading(report.type) ? (openBlock(), createBlock(_sfc_main$p, { key: 2 })) : (openBlock(), createBlock(resolveDynamicComponent(getReportComponent(report.component, key)), {
                key: 3,
                "report-key": key
              }, null, 8, ["report-key"]))
            ])) : createCommentVNode("", true)
          ], 2);
        }), 128)),
        !unref(widgetStore).isFullWidth ? (openBlock(), createBlock(_sfc_main$r, { key: 0 })) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "monsterinsights-widget-footer"
};
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$1 = ["href", "textContent"];
const _hoisted_4$1 = ["href", "textContent"];
const _sfc_main$2 = {
  __name: "WidgetFooter",
  setup(__props) {
    const { __: __2, sprintf } = wp.i18n;
    const text_learn_more = __2("Learn More", "google-analytics-for-wordpress");
    const userfeedbackInstalled = computed(() => !!getMiGlobal("userfeedback_installed", false));
    const userfeedbackEnabled = computed(() => !!getMiGlobal("userfeedback_enabled", false));
    const userfeedbackUrl = computed(() => getMiGlobal("userfeedback_url", ""));
    const wpformsInstalled = computed(() => !!getMiGlobal("wpforms_installed", false));
    const wpformsEnabled = computed(() => !!getMiGlobal("wpforms_enabled", false));
    const wpformsUrl = computed(() => getMiGlobal("wpforms_url", ""));
    const formidableInstalled = computed(() => !!getMiGlobal("formidableforms_installed", false));
    const suggestion = computed(() => {
      if (!userfeedbackInstalled.value) {
        return {
          plugin: "UserFeedback",
          actionText: __2("Install", "google-analytics-for-wordpress"),
          actionUrl: userfeedbackUrl.value,
          learnUrl: "https://userfeedback.com/?utm_source=MI&utm_medium=referral&utm_campaign=milink"
        };
      }
      if (!userfeedbackEnabled.value) {
        return {
          plugin: "UserFeedback",
          actionText: __2("Activate", "google-analytics-for-wordpress"),
          actionUrl: userfeedbackUrl.value,
          learnUrl: "https://userfeedback.com/"
        };
      }
      if (formidableInstalled.value) return null;
      if (!wpformsInstalled.value) {
        return {
          plugin: "WPForms",
          actionText: __2("Install", "google-analytics-for-wordpress"),
          actionUrl: wpformsUrl.value,
          learnUrl: "https://wpforms.com/"
        };
      }
      if (!wpformsEnabled.value) {
        return {
          plugin: "WPForms",
          actionText: __2("Activate", "google-analytics-for-wordpress"),
          actionUrl: wpformsUrl.value,
          learnUrl: "https://wpforms.com/"
        };
      }
      return null;
    });
    const display = computed(() => !!suggestion.value);
    const actionText = computed(() => suggestion.value?.actionText ?? "");
    const actionUrl = computed(() => suggestion.value?.actionUrl ?? "#");
    const learnUrl = computed(() => suggestion.value?.learnUrl ?? "#");
    const recommendedPrefix = computed(() => {
      const pluginName = suggestion.value?.plugin ?? "";
      return sprintf(
        '%1$s <span class="monsterinsights-dark">%2$s</span>',
        __2("Recommended Plugin:", "google-analytics-for-wordpress"),
        pluginName
      );
    });
    return (_ctx, _cache) => {
      return display.value ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("span", { innerHTML: recommendedPrefix.value }, null, 8, _hoisted_2$2),
        _cache[0] || (_cache[0] = createBaseVNode("span", null, " - ", -1)),
        createBaseVNode("a", {
          href: actionUrl.value,
          textContent: toDisplayString(actionText.value)
        }, null, 8, _hoisted_3$1),
        createBaseVNode("a", {
          href: learnUrl.value,
          target: "_blank",
          rel: "noopener",
          textContent: toDisplayString(unref(text_learn_more))
        }, null, 8, _hoisted_4$1)
      ])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-widget-reauth" };
const _hoisted_2$1 = ["href"];
const _sfc_main$1 = {
  __name: "ReportReAuth",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const text_heading = __2("Authentication Expired", "google-analytics-for-wordpress");
    const text_body = __2(
      "Your Google Analytics authentication has expired. Please re-authenticate from MonsterInsights Settings.",
      "google-analytics-for-wordpress"
    );
    const text_button = __2("Open Settings", "google-analytics-for-wordpress");
    const settingsUrl = computed(() => {
      const url = getMiGlobal("reports_url", "");
      if (!url) return getMiGlobal("wizard_url", "#");
      return url.replace("monsterinsights_reports", "monsterinsights_settings");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("h3", null, toDisplayString(unref(text_heading)), 1),
        createBaseVNode("p", null, toDisplayString(unref(text_body)), 1),
        createBaseVNode("a", {
          href: settingsUrl.value,
          class: "monsterinsights-button"
        }, toDisplayString(unref(text_button)), 9, _hoisted_2$1)
      ]);
    };
  }
};
const _hoisted_1 = {
  key: 0,
  class: "mi-dw-not-authed"
};
const _hoisted_2 = {
  key: 1,
  class: "mi-dw-not-authed"
};
const _hoisted_3 = ["href"];
const _hoisted_4 = { class: "monsterinsights-fullwidth-report-title" };
const _sfc_main = {
  __name: "App",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const widgetStore = useWidgetStore();
    const widgetReports = useWidgetReportsStore();
    const settings = ref(null);
    const canViewReports = computed(() => !!getMiGlobal("can_view_reports", true));
    const isAuthenticated = computed(() => !!getMiGlobal("authed", false));
    const wizardUrl = computed(() => getMiGlobal("wizard_url", "#"));
    const text_overview_report = __2("Overview Report", "google-analytics-for-wordpress");
    const text_no_permission = __2(
      "You don't have permission to view MonsterInsights reports.",
      "google-analytics-for-wordpress"
    );
    const text_not_authed_heading = __2(
      "Website Analytics is not Setup",
      "google-analytics-for-wordpress"
    );
    const text_not_authed_body = __2(
      "To see your website stats, please connect MonsterInsights to Google Analytics.",
      "google-analytics-for-wordpress"
    );
    const text_setup_button = __2("Setup Website Analytics", "google-analytics-for-wordpress");
    const mainClass = computed(() => {
      const classes = ["monsterinsights-dashboard-widget-page"];
      if (widgetStore.compact) classes.push("monsterinsights-dashboard-widget-compact");
      if (widgetReports.blur) classes.push("monsterinsights-blur");
      return classes.join(" ");
    });
    onMounted(async () => {
      widgetStore.initFromGlobal();
      widgetReports.applyIntervalFromKey(widgetStore.interval);
      await nextTick();
      if (widgetStore.isFullWidth && settings.value?.applyFullWidthDom) {
        settings.value.applyFullWidthDom();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-app-surface", mainClass.value])
      }, [
        createVNode(_sfc_main$s, {
          ref_key: "settings",
          ref: settings
        }, null, 512),
        !canViewReports.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("h2", null, toDisplayString(unref(text_no_permission)), 1)
        ])) : !isAuthenticated.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createBaseVNode("h2", null, toDisplayString(unref(text_not_authed_heading)), 1),
          createBaseVNode("p", null, toDisplayString(unref(text_not_authed_body)), 1),
          createBaseVNode("a", {
            href: wizardUrl.value,
            class: "mi-dw-btn-large monsterinsights-setup-wizard-link"
          }, toDisplayString(unref(text_setup_button)), 9, _hoisted_3)
        ])) : unref(widgetReports).reauth ? (openBlock(), createBlock(_sfc_main$1, { key: 2 })) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(_sfc_main$3),
          unref(widgetStore).isFullWidth ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-fullwidth-mascot" }, null, -1)),
            createBaseVNode("div", _hoisted_4, toDisplayString(unref(text_overview_report)), 1)
          ], 64)) : (openBlock(), createBlock(_sfc_main$2, { key: 1 }))
        ], 64)),
        createVNode(_sfc_main$A)
      ], 2);
    };
  }
};
const mountEl = document.getElementById("monsterinsights-dashboard-widget");
if (mountEl) {
  const app = createApp(_sfc_main);
  setupPinia(app);
  installOverlays(app);
  app.directive("tooltip", vTooltip);
  app.config.errorHandler = (err, _vm, info) => {
    console.error("[monsterinsights-widget]", err, info);
  };
  app.mount(mountEl);
}
