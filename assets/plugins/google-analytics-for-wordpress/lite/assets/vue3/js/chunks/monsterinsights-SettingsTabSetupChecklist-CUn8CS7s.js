import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, s as createCommentVNode, i as normalizeClass, t as toDisplayString, K as renderSlot, m as computed, B as withModifiers, j as ref, b as createVNode, D as withCtx, u as unref, y as onMounted, E as createBlock } from "./toastStore-CRCNwITM.js";
import { o as getUrl, j as getMiGlobal, m as getAddonsPageUrl, r as miAjax, k as isPro } from "./ajax-B_XS1gT5.js";
import { c as useAddonsStore, a as useToast } from "./addons-CSVIjAyY.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { _ as _sfc_main$5 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$4 } from "./LaunchWizardButton-D24aVnkm.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$3 = { class: "monsterinsights-setup-checklist-milestone-content-wrapper" };
const _hoisted_2$3 = { class: "monsterinsights-setup-checklist-milestone-content-self" };
const _hoisted_3$2 = { class: "monsterinsights-setup-checklist-milestone-content-self-title" };
const _hoisted_4$1 = {
  key: 0,
  class: "monsterinsights-setup-checklist-milestone-checkmark"
};
const _hoisted_5$2 = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none"
};
const _hoisted_6$2 = ["width", "height"];
const _hoisted_7$2 = ["width", "height"];
const _hoisted_8$2 = { key: 0 };
const _sfc_main$3 = {
  __name: "Milestone",
  props: {
    title: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      default: false
    },
    subBullet: {
      type: Boolean,
      default: false
    },
    iconType: {
      type: String,
      default: "checkmark"
    }
  },
  setup(__props) {
    const props = __props;
    const iconHeightWidth = computed(() => {
      return props.subBullet ? 18 : 20;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-setup-checklist-milestone", { "monsterinsights-setup-checklist-milestone-checked": __props.checked }])
      }, [
        createBaseVNode("div", _hoisted_1$3, [
          createBaseVNode("div", _hoisted_2$3, [
            createBaseVNode("div", _hoisted_3$2, [
              __props.iconType !== "" ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
                __props.iconType === "plus" ? (openBlock(), createElementBlock("svg", _hoisted_5$2, [..._cache[0] || (_cache[0] = [
                  createBaseVNode("path", {
                    d: "M10 0C4.47887 0 0 4.47887 0 10C0 15.5211 4.47887 20 10 20C15.5211 20 20 15.5211 20 10C20 4.47887 15.5282 0 10 0ZM14.9718 11.162H11.162V14.9718C11.162 15.6127 10.6408 16.1338 10 16.1338C9.35915 16.1338 8.83803 15.6127 8.83803 14.9718V11.162H5.02817C4.38732 11.162 3.8662 10.6408 3.8662 10C3.8662 9.35915 4.38732 8.83803 5.02817 8.83803H8.83803V5.02817C8.83803 4.38732 9.35915 3.8662 10 3.8662C10.6408 3.8662 11.162 4.38732 11.162 5.02817V8.83803H14.9718C15.6127 8.83803 16.1338 9.35915 16.1338 10C16.1338 10.6408 15.6127 11.162 14.9718 11.162Z",
                    fill: "#B0BEC5"
                  }, null, -1)
                ])])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  __props.checked ? (openBlock(), createElementBlock("svg", {
                    key: 0,
                    width: iconHeightWidth.value,
                    height: iconHeightWidth.value,
                    viewBox: "0 0 20 20",
                    fill: "none"
                  }, [..._cache[1] || (_cache[1] = [
                    createBaseVNode("path", {
                      d: "M10 0C4.488 0 0 4.488 0 10C0 15.512 4.488 20 10 20C15.512 20 20 15.512 20 10C20 4.488 15.512 0 10 0ZM15.424 7.368L8.456 14.512L4.576 10.536C4.16 10.104 4.16 9.424 4.576 8.992C5.008 8.544 5.728 8.544 6.16 8.992L8.456 11.344L13.84 5.824C14.272 5.376 14.992 5.376 15.424 5.824C15.84 6.256 15.84 6.936 15.424 7.368Z",
                      fill: "#63A9F4"
                    }, null, -1)
                  ])], 8, _hoisted_6$2)) : (openBlock(), createElementBlock("svg", {
                    key: 1,
                    width: iconHeightWidth.value,
                    height: iconHeightWidth.value,
                    viewBox: "0 0 20 20",
                    fill: "none"
                  }, [..._cache[2] || (_cache[2] = [
                    createBaseVNode("path", {
                      "fill-rule": "evenodd",
                      "clip-rule": "evenodd",
                      d: "M0 10C0 15.512 4.488 20 10 20C15.512 20 20 15.512 20 10C20 4.488 15.512 0 10 0C4.488 0 0 4.488 0 10ZM1.072 10C1.072 5.08 5.08 1.072 10 1.072C14.92 1.072 18.928 5.08 18.928 10C18.928 14.92 14.92 18.928 10 18.928C5.08 18.928 1.072 14.92 1.072 10ZM6.80802 9.16C6.44802 8.792 5.85602 8.792 5.49602 9.16L5.48802 9.168C5.14402 9.52 5.14402 10.088 5.48802 10.448L8.71202 13.752L14.496 7.816C14.84 7.464 14.84 6.896 14.496 6.536C14.136 6.168 13.544 6.168 13.184 6.536L8.71202 11.12L6.80802 9.16Z",
                      fill: "#B0BEC5"
                    }, null, -1)
                  ])], 8, _hoisted_7$2))
                ], 64))
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(["monsterinsights-setup-checklist-milestone-title", { "monsterinsights-setup-checklist-milestone-title-checked": __props.checked }])
              }, [
                createBaseVNode("h4", null, [
                  createBaseVNode("span", null, toDisplayString(__props.title), 1)
                ]),
                _ctx.$slots.subtitle ? (openBlock(), createElementBlock("h5", _hoisted_8$2, [
                  renderSlot(_ctx.$slots, "subtitle")
                ])) : createCommentVNode("", true)
              ], 2)
            ]),
            renderSlot(_ctx.$slots, "button")
          ]),
          renderSlot(_ctx.$slots, "child")
        ])
      ], 2);
    };
  }
};
const _hoisted_1$2 = ["id"];
const _hoisted_2$2 = ["innerHTML"];
const _sfc_main$2 = {
  __name: "AddonButton",
  props: {
    addon: { type: Object, required: true },
    isAddon: { type: Boolean, default: true },
    id: { type: String, default: "" },
    autoActivate: { type: Boolean, default: false },
    customAction: { type: [Boolean, String], default: false },
    upgradeText: {
      type: String,
      default: () => wp.i18n.__("Upgrade Now", "google-analytics-for-wordpress")
    },
    activatingText: {
      type: String,
      default: () => wp.i18n.__("Activating...", "google-analytics-for-wordpress")
    },
    deactivatingText: {
      type: String,
      default: () => wp.i18n.__("Deactivating...", "google-analytics-for-wordpress")
    },
    installingText: {
      type: String,
      default: () => wp.i18n.__("Installing...", "google-analytics-for-wordpress")
    },
    deactivateText: {
      type: String,
      default: () => wp.i18n.__("Deactivate", "google-analytics-for-wordpress")
    },
    activateText: {
      type: String,
      default: () => wp.i18n.__("Activate", "google-analytics-for-wordpress")
    },
    installText: {
      type: String,
      default: () => wp.i18n.__("Install", "google-analytics-for-wordpress")
    }
  },
  emits: [
    "addon-installed",
    "addon-not-installed",
    "addon-activate-start",
    "addon-activated"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const addonsStore = useAddonsStore();
    const activating = ref(false);
    const deactivating = ref(false);
    const installing = ref(false);
    const textButtonAction = computed(() => {
      if (typeof props.addon.type !== "undefined" && props.addon.type !== "licensed") {
        return props.upgradeText;
      }
      if (activating.value) return props.activatingText;
      if (deactivating.value) return props.deactivatingText;
      if (installing.value) return props.installingText;
      if (props.addon.active) return props.deactivateText;
      if (props.addon.installed) return props.activateText;
      return props.installText;
    });
    function clickAction() {
      if (activating.value || deactivating.value || installing.value) {
        return;
      }
      if (props.addon.installed) {
        if (props.addon.active) {
          deactivate();
        } else {
          activate();
        }
      } else {
        install();
      }
    }
    async function install() {
      installing.value = true;
      try {
        const action = props.customAction ? props.customAction : props.isAddon ? "installAddonAction" : "installPluginAction";
        await addonsStore[action](props.addon);
        emit("addon-installed");
        if (props.autoActivate) {
          await activate();
        }
      } catch (e) {
        emit("addon-not-installed");
      } finally {
        installing.value = false;
      }
    }
    async function activate() {
      emit("addon-activate-start");
      activating.value = true;
      try {
        await addonsStore.activateAddonAction(props.addon);
        emit("addon-activated");
      } finally {
        activating.value = false;
      }
    }
    async function deactivate() {
      deactivating.value = true;
      try {
        await addonsStore.deactivateAddonAction(props.addon);
      } finally {
        deactivating.value = false;
      }
    }
    return (_ctx, _cache) => {
      return __props.addon ? (openBlock(), createElementBlock("button", {
        key: 0,
        id: __props.id || null,
        class: "monsterinsights-button",
        type: "button",
        onClick: withModifiers(clickAction, ["prevent"])
      }, [
        createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_2$2)
      ], 8, _hoisted_1$2)) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_2$1 = ["href", "textContent"];
const _hoisted_3$1 = ["href", "textContent"];
const _hoisted_4 = ["href", "textContent"];
const _hoisted_5$1 = ["href", "textContent"];
const _hoisted_6$1 = ["href", "textContent"];
const _hoisted_7$1 = ["href", "textContent"];
const _hoisted_8$1 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "monsterinsights-StepSixMilestones",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_know_more = __("Learn More", "google-analytics-for-wordpress");
    const texts = {
      beginners_guide: __("Beginner's Guide to Google Analytics: How Does it Work?", "google-analytics-for-wordpress"),
      top_11_important: __("Top 11 Important Google Analytics Metrics to Track", "google-analytics-for-wordpress"),
      how_to_track_organic: __("How to Track Organic Keywords in Google Analytics + WordPress", "google-analytics-for-wordpress"),
      top_ecommerce_metrics: __("9 Top eCommerce Metrics & KPIs to Track in Google Analytics 4", "google-analytics-for-wordpress"),
      guide_to_custom_dimensions: __("The Beginner's Guide to Google Analytics Custom Dimensions", "google-analytics-for-wordpress"),
      guide_to_GA4_conversion: __("A Complete Guide to GA4 Conversion Tracking for WordPress", "google-analytics-for-wordpress"),
      create_custom_reports: __("How to Create Google Analytics 4 Custom Reports (Step by Step)", "google-analytics-for-wordpress")
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(_sfc_main$3, {
          title: texts.beginners_guide,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/how-does-google-analytics-work-beginners-guide/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_2$1)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.top_11_important,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/what-can-you-measure-with-google-analytics-top-11-metrics/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_3$1)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.how_to_track_organic,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/how-to-track-organic-keyword-conversions-in-google-analytics/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_4)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.top_ecommerce_metrics,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/crucial-ecommerce-kpis-to-track-in-google-analytics/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_5$1)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.guide_to_custom_dimensions,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/the-beginners-guide-to-custom-dimensions-in-google-analytics/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_6$1)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.guide_to_GA4_conversion,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/conversion-tracking/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_7$1)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$3, {
          title: texts.create_custom_reports,
          checked: false,
          "icon-type": ""
        }, {
          button: withCtx(() => [
            createBaseVNode("a", {
              href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/how-to-create-google-analytics-4-custom-reports-step-by-step/"),
              class: "monsterinsights-button monsterinsights-button-outline",
              target: "_blank",
              textContent: toDisplayString(unref(text_know_more))
            }, null, 8, _hoisted_8$1)
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = { class: "monsterinsights-setup-checklist-milestone-content-child" };
const _hoisted_5 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_6 = ["href", "textContent"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["href", "textContent"];
const _hoisted_9 = ["href", "textContent"];
const _hoisted_10 = ["href", "textContent"];
const _hoisted_11 = ["href", "textContent"];
const _hoisted_12 = ["href", "textContent"];
const _hoisted_13 = ["href", "textContent"];
const _hoisted_14 = ["href", "textContent"];
const _hoisted_15 = ["textContent"];
const _hoisted_16 = ["textContent"];
const _hoisted_18 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_19 = { class: "monsterinsights-setup-checklist-milestone-content-image-section" };
const _hoisted_20 = { class: "monsterinsights-setup-checklist-milestone-sitenote-button" };
const _hoisted_21 = ["href", "textContent"];
const _hoisted_23 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_24 = ["href", "textContent"];
const _hoisted_25 = ["href", "textContent"];
const _hoisted_26 = ["href", "textContent"];
const _hoisted_27 = ["href", "textContent"];
const _hoisted_28 = ["href", "textContent"];
const _hoisted_29 = ["href", "textContent"];
const _hoisted_30 = ["href", "textContent"];
const _hoisted_31 = ["textContent"];
const _hoisted_32 = ["href", "textContent"];
const _hoisted_33 = ["href", "textContent"];
const _hoisted_34 = ["href", "textContent"];
const _hoisted_35 = ["href", "textContent"];
const _hoisted_37 = { class: "monsterinsights-setup-checklist-block-content" };
const _hoisted_38 = ["href", "textContent"];
const _hoisted_39 = ["href", "textContent"];
const _hoisted_40 = ["href", "textContent"];
const _hoisted_41 = ["href", "textContent"];
const _hoisted_42 = ["href", "textContent"];
const _hoisted_44 = { class: "monsterinsights-dismiss-setup-checklist" };
const _hoisted_45 = ["href", "textContent"];
const showCustomViewMilestone = false;
const _sfc_main = {
  __name: "monsterinsights-SettingsTabSetupChecklist",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    __("Setup Checklist", "google-analytics-for-wordpress");
    const { loadingToast, closeToast } = useToast();
    const addonsStore = useAddonsStore();
    useLicenseStore();
    const addons = computed(() => addonsStore.addons);
    getMiGlobal("network", false);
    const exitUrl = getMiGlobal("exit_url", "#");
    const reportsUrl = getMiGlobal("reports_url", "#");
    const landingPagesTopReportsUrl = reportsUrl + "#/traffic-landing-pages";
    const customViewUrl = getMiGlobal("custom_dashboard_url", "#") + "#/dashboards/add";
    const addonsPageUrl = getAddonsPageUrl();
    const productName = getMiGlobal("product_name", "MonsterInsights");
    const isProVersion = isPro();
    const auth = ref(getMiGlobal("auth", {}));
    const checklist = ref({
      step_1_connect_monsterinsights: {}
    });
    const ecommerceProvider = ref("");
    const expandedStep = ref("");
    const dataLoaded = ref(false);
    const text_step_one_title = __("Step 1 - Set Up MonsterInsights", "google-analytics-for-wordpress");
    const step_one = {
      milestone_one_title: __("Install MonsterInsights", "google-analytics-for-wordpress"),
      milestone_two_title: __("Customize MonsterInsights", "google-analytics-for-wordpress"),
      milestone_two_one_title: __("Launch the setup wizard to connect to Google Analytics", "google-analytics-for-wordpress"),
      milestone_two_two_title: __("Select a property to send data to Google Analytics", "google-analytics-for-wordpress"),
      milestone_two_three_title: __("Verify Google Analytics is receiving data (this may take up to 24 hours)", "google-analytics-for-wordpress")
    };
    const step_two_title = __("Step 2 - Customize MonsterInsights", "google-analytics-for-wordpress");
    const step_two = {
      milestone_one_title: __("Google Analytics 4 tracking is set up", "google-analytics-for-wordpress"),
      milestone_one_subtitle: sprintf(__("Google Analytics 3 is sunsetting on July 1, 2023. %1$sLearn More%2$s", "google-analytics-for-wordpress"), '<a target="_blank" href="#">', "</a>"),
      milestone_one_button_text: __("Upgrade Now", "google-analytics-for-wordpress"),
      milestone_two_title: __("Enable one click eCommerce Tracking for %1$s", "google-analytics-for-wordpress"),
      milestone_three_title: __("Connect your website with Google Search Console", "google-analytics-for-wordpress"),
      milestone_four_title: __("Track all of your form conversion rates", "google-analytics-for-wordpress"),
      milestone_five_title: __("Visit your Overview Report", "google-analytics-for-wordpress"),
      milestone_six_title: __("See your Top Landing Pages", "google-analytics-for-wordpress"),
      milestone_five_button_text: __("View Report", "google-analytics-for-wordpress"),
      milestone_seven_title: __("Create a Custom View", "google-analytics-for-wordpress")
    };
    const step_three_title = __("Step 3 - Add a Site Note", "google-analytics-for-wordpress");
    const step_three = {
      milestone_one_title: __("Create a new Site Note that you have installed MonsterInsights", "google-analytics-for-wordpress"),
      milestone_one_button_text: __("See How", "google-analytics-for-wordpress"),
      milestone_one_add_site_note_text: __("Add Site Note", "google-analytics-for-wordpress")
    };
    const step_four_title = __("Step 4 - Improve Your Analytics", "google-analytics-for-wordpress");
    const step_four = {
      milestone_one_title: __("Install UserFeedback for more insights", "google-analytics-for-wordpress"),
      milestone_two_title: __("Activate the Performance addon to customize your settings", "google-analytics-for-wordpress"),
      milestone_three_title: __("Set up Custom Dimensions", "google-analytics-for-wordpress"),
      milestone_four_title: __("Install WPConsent to help make your website privacy compliant", "google-analytics-for-wordpress"),
      milestone_five_title: __("Add custom events to your website for button clicks, images, and more", "google-analytics-for-wordpress")
    };
    const step_five_title = __("Step 5 - Get More Traffic and Engagement", "google-analytics-for-wordpress");
    const step_five = {
      milestone_two_title: __("Install AIOSEO for more organic traffic", "google-analytics-for-wordpress"),
      // Google Ads milestone intentionally removed — no longer part of this step.
      milestone_four_title: __("Turn on Popular Posts to increase your site's engagement", "google-analytics-for-wordpress"),
      milestone_five_title: __("Install OptinMonster to collect email subscribers", "google-analytics-for-wordpress"),
      milestone_six_title: __("Install Universally to automatically translate your website", "google-analytics-for-wordpress")
    };
    const step_six_title = __("Step 6 - Learn More About Google Analytics", "google-analytics-for-wordpress");
    const text_learn_more = __("Learn More", "google-analytics-for-wordpress");
    const text_get_started = __("Get Started", "google-analytics-for-wordpress");
    const text_enable_now = __("Enable Now", "google-analytics-for-wordpress");
    const text_set_up = __("Set Up", "google-analytics-for-wordpress");
    const text_upgrade = __("Upgrade", "google-analytics-for-wordpress");
    const text_connect_now = __("Connect Now", "google-analytics-for-wordpress");
    const text_dismiss_button = __("Dismiss Setup Checklist", "google-analytics-for-wordpress");
    const text_onboarding_note = sprintf(__("Note: You will be transfered to %1$s.com to complete the setup wizard.", "google-analytics-for-wordpress"), productName);
    const text_view = __("View", "google-analytics-for-wordpress");
    const componentClassName = computed(() => {
      const base = "monsterinsights-settings-content settings-setup-checklist";
      return base;
    });
    const stepTwoMilestoneTwoTitle = computed(() => {
      if (ecommerceProvider.value) {
        return sprintf(step_two.milestone_two_title, ecommerceProvider.value);
      }
      return __("Learn more about one-click eCommerce tracking", "google-analytics-for-wordpress");
    });
    const isProLicensed = computed(() => {
      {
        return false;
      }
    });
    function checklistAllChecked(list) {
      if (!list) {
        return false;
      }
      if (!Object.keys(list).length) {
        return false;
      }
      let allChecked = true;
      Object.values(list).forEach((value) => {
        if (!value) {
          allChecked = false;
        }
      });
      return allChecked;
    }
    async function fetchSetupChecklist(showLoader = true) {
      if (showLoader) {
        loadingToast();
      }
      try {
        const response = await miAjax("monsterinsights_vue_get_setup_checklist");
        if (response.checklist) {
          checklist.value = response.checklist;
          ecommerceProvider.value = response.ecommerce_provider;
          if (!dataLoaded.value) {
            expandedStep.value = response.expanded_step;
          }
          updateMenuCounter(response.milestone_left);
          closeToast();
          dataLoaded.value = true;
        }
      } catch (error) {
        closeToast();
      }
    }
    async function clickMilestoneButton(event, buttonKey, target = "_blank", showLoader = true) {
      const href = event.currentTarget?.href;
      if (target === "_blank" && href) {
        window.open(href, "_blank");
      }
      if (showLoader) {
        loadingToast(__("Loading...", "google-analytics-for-wordpress"));
      }
      try {
        const response = await miAjax("monsterinsights_vue_setup_checklist_click_track", {
          button_key: buttonKey
        });
        if (response.success && target === "_blank") {
          fetchSetupChecklist();
          return;
        }
      } catch (error) {
      }
      closeToast();
      if (target !== "_blank" && href) {
        window.location.href = href;
      }
    }
    function updateMenuCounter(milestoneLeft) {
      const indicator = document.querySelector(".monsterinsights-setup-checklist-menu-indicator");
      if (indicator) {
        indicator.textContent = milestoneLeft;
      }
    }
    onMounted(() => {
      fetchSetupChecklist(false);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", {
        class: normalizeClass(componentClassName.value)
      }, [
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(text_step_one_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_1"),
          icon: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(_sfc_main$3, {
                title: step_one.milestone_one_title,
                checked: checklist.value.step_1_install_monsterinsights
              }, null, 8, ["title", "checked"]),
              createBaseVNode("p", {
                class: "monsterinsights-disclaimer-note",
                textContent: toDisplayString(unref(text_onboarding_note))
              }, null, 8, _hoisted_2),
              createVNode(_sfc_main$3, {
                title: step_one.milestone_two_title,
                checked: checklistAllChecked(checklist.value.step_1_connect_monsterinsights)
              }, {
                button: withCtx(() => [
                  createVNode(_sfc_main$4)
                ]),
                child: withCtx(() => [
                  createBaseVNode("div", _hoisted_3, [
                    createVNode(_sfc_main$3, {
                      title: step_one.milestone_two_one_title,
                      checked: checklist.value.step_1_connect_monsterinsights.launch_setup_wizard,
                      "sub-bullet": true
                    }, null, 8, ["title", "checked"]),
                    createVNode(_sfc_main$3, {
                      title: step_one.milestone_two_two_title,
                      checked: checklist.value.step_1_connect_monsterinsights.select_a_property,
                      "sub-bullet": true
                    }, null, 8, ["title", "checked"]),
                    createVNode(_sfc_main$3, {
                      title: step_one.milestone_two_three_title,
                      checked: checklist.value.step_1_connect_monsterinsights.ga_receiving_data,
                      "sub-bullet": true
                    }, null, 8, ["title", "checked"])
                  ])
                ]),
                _: 1
              }, 8, ["title", "checked"])
            ])
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(step_two_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_2"),
          icon: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_5, [
              auth.value.ua && !auth.value.v4 ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                title: step_two.milestone_one_title,
                checked: false
              }, {
                button: withCtx(() => [
                  createBaseVNode("a", {
                    class: "monsterinsights-button",
                    href: unref(exitUrl),
                    target: "_blank",
                    textContent: toDisplayString(step_two.milestone_one_button_text)
                  }, null, 8, _hoisted_6)
                ]),
                subtitle: withCtx(() => [
                  createBaseVNode("span", {
                    innerHTML: step_two.milestone_one_subtitle
                  }, null, 8, _hoisted_7)
                ]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true),
              createVNode(_sfc_main$3, {
                title: stepTwoMilestoneTwoTitle.value,
                checked: checklist.value.step_2_ecommerce_tracking
              }, {
                button: withCtx(() => [
                  unref(isProVersion) ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: "monsterinsights-button",
                    href: unref(exitUrl) + "#/ecommerce",
                    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => clickMilestoneButton($event, "step_2_ecommerce_tracking"), ["prevent"])),
                    textContent: toDisplayString(unref(text_learn_more))
                  }, null, 8, _hoisted_8)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => clickMilestoneButton($event, "step_2_ecommerce_tracking"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_9))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_two.milestone_three_title,
                checked: checklist.value.step_2_google_search_console
              }, {
                button: withCtx(() => [
                  unref(isProVersion) ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: "monsterinsights-button",
                    href: unref(reportsUrl) + "#/search-console",
                    onClick: _cache[2] || (_cache[2] = withModifiers(($event) => clickMilestoneButton($event, "step_2_google_search_console"), ["prevent"])),
                    textContent: toDisplayString(unref(text_connect_now))
                  }, null, 8, _hoisted_10)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[3] || (_cache[3] = withModifiers(($event) => clickMilestoneButton($event, "step_2_google_search_console"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_11))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_two.milestone_four_title,
                checked: checklist.value.step_2_form_conversion
              }, {
                button: withCtx(() => [
                  unref(isProVersion) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    !checklist.value.step_2_form_conversion ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      class: "monsterinsights-button",
                      href: unref(addonsPageUrl),
                      textContent: toDisplayString(unref(text_enable_now))
                    }, null, 8, _hoisted_12)) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[4] || (_cache[4] = withModifiers(($event) => clickMilestoneButton($event, "step_2_form_conversion"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_13))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_two.milestone_five_title,
                checked: checklist.value.step_2_visit_overview_report
              }, {
                button: withCtx(() => [
                  createBaseVNode("a", {
                    class: "monsterinsights-button",
                    href: unref(reportsUrl),
                    onClick: _cache[5] || (_cache[5] = withModifiers(($event) => clickMilestoneButton($event, "step_2_visit_overview_report", "_self"), ["prevent"])),
                    textContent: toDisplayString(step_two.milestone_five_button_text)
                  }, null, 8, _hoisted_14)
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_two.milestone_six_title,
                checked: checklist.value.step__3_visit_top_landing_pages_report
              }, {
                button: withCtx(() => [
                  createBaseVNode("a", {
                    class: "monsterinsights-button",
                    href: landingPagesTopReportsUrl,
                    onClick: _cache[6] || (_cache[6] = withModifiers(($event) => clickMilestoneButton($event, "step__3_visit_top_landing_pages_report", "_self"), ["prevent"])),
                    textContent: toDisplayString(step_two.milestone_five_button_text)
                  }, null, 8, _hoisted_15)
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              showCustomViewMilestone ? (openBlock(), createBlock(_sfc_main$3, {
                key: 1,
                title: step_two.milestone_seven_title,
                checked: checklist.value.step_2_create_custom_view
              }, {
                button: withCtx(() => [
                  !checklist.value.step_2_create_custom_view ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: "monsterinsights-button",
                    href: customViewUrl,
                    onClick: _cache[7] || (_cache[7] = withModifiers(($event) => clickMilestoneButton($event, "step_2_create_custom_view", "_self"), ["prevent"])),
                    textContent: toDisplayString(unref(text_view))
                  }, null, 8, _hoisted_16)) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["title", "checked"])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(step_three_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_3"),
          icon: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_18, [
              createVNode(_sfc_main$3, {
                title: step_three.milestone_one_title,
                checked: checklist.value.step_3_create_site_note
              }, {
                child: withCtx(() => [
                  createBaseVNode("div", _hoisted_19, [
                    _cache[15] || (_cache[15] = createBaseVNode("div", { class: "monsterinsights-setup-checklist-milestone-sitenote-image" }, null, -1)),
                    createBaseVNode("div", _hoisted_20, [
                      createBaseVNode("a", {
                        class: "monsterinsights-button",
                        href: unref(exitUrl) + "#/site-notes",
                        target: "_blank",
                        textContent: toDisplayString(step_three.milestone_one_add_site_note_text)
                      }, null, 8, _hoisted_21)
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["title", "checked"])
            ])
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(step_four_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_4"),
          icon: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_23, [
              createVNode(_sfc_main$3, {
                title: step_four.milestone_one_title,
                checked: checklist.value.step_4_install_userfeedback
              }, {
                button: withCtx(() => [
                  checklist.value.step_4_install_userfeedback && addons.value["userfeedback-lite"] ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: addons.value["userfeedback-lite"].settings,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(unref(text_get_started))
                  }, null, 8, _hoisted_24)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button",
                    href: unref(addonsPageUrl),
                    textContent: toDisplayString(unref(text_enable_now))
                  }, null, 8, _hoisted_25))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_four.milestone_four_title,
                checked: checklist.value.step_4_install_wpconsent
              }, {
                button: withCtx(() => [
                  checklist.value.step_4_install_wpconsent && addons.value.wpconsent ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: addons.value.wpconsent.settings,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(unref(text_get_started))
                  }, null, 8, _hoisted_26)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button",
                    href: unref(addonsPageUrl),
                    textContent: toDisplayString(unref(text_enable_now))
                  }, null, 8, _hoisted_27))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_four.milestone_two_title,
                checked: checklist.value.step_4_performance_addon
              }, {
                button: withCtx(() => [
                  isProLicensed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    checklist.value.step_4_performance_addon ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: unref(exitUrl) + "#/advanced",
                      class: "monsterinsights-button",
                      target: "_blank",
                      textContent: toDisplayString(unref(text_set_up))
                    }, null, 8, _hoisted_28)) : (openBlock(), createElementBlock("a", {
                      key: 1,
                      class: "monsterinsights-button",
                      href: unref(addonsPageUrl),
                      textContent: toDisplayString(unref(text_enable_now))
                    }, null, 8, _hoisted_29))
                  ], 64)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[8] || (_cache[8] = withModifiers(($event) => clickMilestoneButton($event, "step_4_performance_addon"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_30))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_four.milestone_five_title,
                checked: checklist.value.step_4_custom_events
              }, {
                button: withCtx(() => [
                  isProLicensed.value ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: "https://www.monsterinsights.com/docs/",
                    class: "monsterinsights-button",
                    target: "_blank",
                    textContent: toDisplayString(unref(text_learn_more))
                  }, null, 8, _hoisted_31)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("customevents", "customevents", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[9] || (_cache[9] = withModifiers(($event) => clickMilestoneButton($event, "step_4_custom_events"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_32))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_four.milestone_three_title,
                checked: checklist.value.step_4_custom_dimensions
              }, {
                button: withCtx(() => [
                  isProLicensed.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    checklist.value.step_4_custom_dimensions ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: unref(exitUrl) + "#/conversions",
                      class: "monsterinsights-button",
                      target: "_blank",
                      textContent: toDisplayString(unref(text_set_up))
                    }, null, 8, _hoisted_33)) : (openBlock(), createElementBlock("a", {
                      key: 1,
                      class: "monsterinsights-button",
                      href: unref(addonsPageUrl),
                      textContent: toDisplayString(unref(text_enable_now))
                    }, null, 8, _hoisted_34))
                  ], 64)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button monsterinsights-button-green",
                    href: unref(getUrl)("setupchecklist", "setupchecklist", "https://www.monsterinsights.com/lite/"),
                    onClick: _cache[10] || (_cache[10] = withModifiers(($event) => clickMilestoneButton($event, "step_4_custom_dimensions"), ["prevent"])),
                    textContent: toDisplayString(unref(text_upgrade))
                  }, null, 8, _hoisted_35))
                ]),
                _: 1
              }, 8, ["title", "checked"])
            ])
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(step_five_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_5"),
          icon: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_37, [
              createVNode(_sfc_main$3, {
                title: step_five.milestone_two_title,
                checked: checklist.value.step_5_install_aioseo
              }, {
                button: withCtx(() => [
                  checklist.value.step_5_install_aioseo && addons.value.aioseo ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: addons.value.aioseo.settings,
                    class: "monsterinsights-button",
                    target: "_blank",
                    textContent: toDisplayString(unref(text_get_started))
                  }, null, 8, _hoisted_38)) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    class: "monsterinsights-button",
                    href: unref(addonsPageUrl),
                    textContent: toDisplayString(unref(text_enable_now))
                  }, null, 8, _hoisted_39))
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_five.milestone_four_title,
                checked: checklist.value.step_5_embed_popular_posts
              }, {
                button: withCtx(() => [
                  createBaseVNode("a", {
                    href: unref(exitUrl) + "#/popular-posts",
                    class: "monsterinsights-button",
                    onClick: _cache[11] || (_cache[11] = withModifiers(($event) => clickMilestoneButton($event, "step_5_embed_popular_posts", "_self"), ["prevent"])),
                    textContent: toDisplayString(unref(text_learn_more))
                  }, null, 8, _hoisted_40)
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_five.milestone_six_title,
                checked: checklist.value.step_5_install_universally
              }, {
                button: withCtx(() => [
                  checklist.value.step_5_install_universally && addons.value.universally ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: addons.value.universally.settings,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(unref(text_get_started))
                  }, null, 8, _hoisted_41)) : addons.value.universally ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    addon: addons.value.universally,
                    "is-addon": false,
                    "auto-activate": true,
                    onAddonActivated: _cache[12] || (_cache[12] = () => fetchSetupChecklist(false))
                  }, null, 8, ["addon"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["title", "checked"]),
              createVNode(_sfc_main$3, {
                title: step_five.milestone_five_title,
                checked: checklist.value.step_5_install_optinmonster
              }, {
                button: withCtx(() => [
                  checklist.value.step_5_install_optinmonster && addons.value.optinmonster ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    href: addons.value.optinmonster.settings,
                    class: "monsterinsights-button",
                    target: "_blank",
                    textContent: toDisplayString(unref(text_get_started))
                  }, null, 8, _hoisted_42)) : (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    addon: addons.value.optinmonster,
                    "is-addon": false,
                    "auto-activate": true,
                    onAddonActivated: _cache[13] || (_cache[13] = () => fetchSetupChecklist(false))
                  }, null, 8, ["addon"]))
                ]),
                _: 1
              }, 8, ["title", "checked"])
            ])
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createCommentVNode("", true),
        createVNode(_sfc_main$5, {
          title: unref(step_six_title),
          collapsible: true,
          "default-collapse": !(expandedStep.value === "step_6"),
          icon: ""
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 8, ["title", "default-collapse", "icon"]),
        createBaseVNode("div", _hoisted_44, [
          createBaseVNode("a", {
            href: unref(reportsUrl),
            onClick: _cache[14] || (_cache[14] = withModifiers(($event) => clickMilestoneButton($event, "settings_dismiss", "_self", false), ["prevent"])),
            textContent: toDisplayString(unref(text_dismiss_button))
          }, null, 8, _hoisted_45)
        ])
      ], 2);
    };
  }
};
export {
  _sfc_main as default
};
