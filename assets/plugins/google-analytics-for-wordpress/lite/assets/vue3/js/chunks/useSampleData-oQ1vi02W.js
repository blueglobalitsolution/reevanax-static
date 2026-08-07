import { _ as __, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { _ as _sfc_main$1 } from "./Modal-B9mMTzc_.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, c as createElementBlock, t as toDisplayString, s as createCommentVNode, u as unref, b as createVNode, i as normalizeClass, F as Fragment, f as renderList, n as normalizeStyle, m as computed, az as getUpgradeUrl, k as getMiGlobal, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { u as getSampleData } from "./ajax-B_XS1gT5.js";
const _hoisted_1 = { class: "monsterinsights-upsell-overlay" };
const _hoisted_2 = { class: "monsterinsights-upsell-modal" };
const _hoisted_3 = { class: "monsterinsights-upsell-top" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["aria-label"];
const _hoisted_6 = { class: "monsterinsights-upsell-content" };
const _hoisted_7 = { class: "monsterinsights-upsell-content__features" };
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { class: "monsterinsights-upsell-content-buttons" };
const _sfc_main = {
  __name: "UpsellModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    dismissible: {
      type: Boolean,
      default: true
    },
    feature: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    },
    customSubheading: {
      type: String,
      default: null
    },
    showSampleButton: {
      type: Boolean,
      default: true
    },
    noImage: {
      type: Boolean,
      default: false
    },
    forceTwoColumns: {
      type: Boolean,
      default: false
    },
    customImage: {
      type: String,
      default: null
    }
  },
  emits: ["close", "upgrade", "see-sample", "learn-more"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const licenseStore = useLicenseStore();
    const currentLicense = computed(() => {
      return licenseStore.activeLicenseType || "Lite";
    });
    const minimumLicense = computed(() => {
      return licenseStore.getMinimumLicenseForFeature(props.feature);
    });
    const buttonText = computed(() => {
      if (!props.content.buttonText) {
        return `Upgrade to ${minimumLicense.value}`;
      }
      if (typeof props.content.buttonText === "object") {
        return props.content.buttonText[currentLicense.value] || `Upgrade to ${minimumLicense.value}`;
      }
      return props.content.buttonText;
    });
    const subheading = computed(() => {
      if (props.customSubheading) {
        return props.customSubheading;
      }
      if (props.content.mainHeading) {
        return sprintf(
          __("What's in the %s?", "google-analytics-for-wordpress"),
          props.content.mainHeading
        );
      }
      return "";
    });
    const footerNotice = computed(() => {
      const upgradeLevel = minimumLicense.value;
      return sprintf(
        __("Upgrade to %1$s to unlock deeper insights, advanced tracking, and powerful integrations so you never miss what's driving results. %2$sLearn more about %1$s%3$s", "google-analytics-for-wordpress"),
        upgradeLevel,
        `<a target="_blank" href="${getUpgradeLink()}" class="monsterinsights-upsell-learn-more">`,
        "</a>"
      );
    });
    const featuresClass = computed(() => {
      const featureCount = props.content.features?.length || 0;
      return featureCount > 4 || props.forceTwoColumns ? "columns-2" : "columns-1";
    });
    const hasSampleData = computed(() => {
      return props.content.sampleDataAvailable !== false;
    });
    const imageClass = computed(() => {
      return `upsell-${props.feature}`;
    });
    const imageStyle = computed(() => {
      if (props.customImage) {
        {
          const assetsUrl = getMiGlobal("assets_url", "");
          return {
            "--upsell-image": `url(${assetsUrl}/assets/${props.customImage})`
          };
        }
      }
      return {};
    });
    function getUpgradeLink() {
      return getUpgradeUrl(
        "custom-dashboard-upsell",
        `upgrade-${props.feature}`,
        props.content.learnMoreUrl || `https://www.${"monsterinsights"}.com/pricing/`
      );
    }
    function handleClose() {
      emit("close");
    }
    function onOpenChange(value) {
      if (!value) {
        emit("close");
      }
    }
    function handleUpgrade() {
      const upgradeUrl = getUpgradeLink();
      window.open(upgradeUrl, "_blank");
      emit("upgrade", upgradeUrl);
    }
    function handleSeeSample() {
      emit("see-sample");
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        "model-value": __props.isOpen,
        mode: "gate",
        backdrop: "transparent",
        "content-class": "monsterinsights-upsell-modal-shell",
        "overlay-class": "monsterinsights-upsell-modal-shell-overlay",
        dismissable: __props.dismissible,
        "onUpdate:modelValue": onOpenChange
      }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                __props.content.mainHeading ? (openBlock(), createElementBlock("h3", {
                  key: 0,
                  textContent: toDisplayString(__props.content.mainHeading)
                }, null, 8, _hoisted_4)) : createCommentVNode("", true),
                __props.dismissible ? (openBlock(), createElementBlock("button", {
                  key: 1,
                  class: "monsterinsights-upsell-close",
                  onClick: handleClose,
                  "aria-label": unref(__)("Close", "google-analytics-for-wordpress")
                }, [
                  createVNode(Icon, {
                    name: "dashicons-no-alt",
                    size: 24
                  })
                ], 8, _hoisted_5)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  __props.content.title ? (openBlock(), createElementBlock("h3", {
                    key: 0,
                    textContent: toDisplayString(__props.content.title)
                  }, null, 8, _hoisted_8)) : createCommentVNode("", true),
                  subheading.value ? (openBlock(), createElementBlock("h4", {
                    key: 1,
                    textContent: toDisplayString(subheading.value)
                  }, null, 8, _hoisted_9)) : createCommentVNode("", true),
                  __props.content.features && __props.content.features.length ? (openBlock(), createElementBlock("ul", {
                    key: 2,
                    class: normalizeClass(featuresClass.value)
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(__props.content.features, (feature, index) => {
                      return openBlock(), createElementBlock("li", { key: index }, [
                        createVNode(Icon, {
                          name: "dashicons-plus-alt2",
                          size: 16,
                          color: "inherit",
                          class: "feature-checkmark"
                        }),
                        createBaseVNode("span", {
                          textContent: toDisplayString(feature)
                        }, null, 8, _hoisted_10)
                      ]);
                    }), 128))
                  ], 2)) : createCommentVNode("", true),
                  createBaseVNode("p", {
                    class: "monsterinsights-upsell-footer-notice",
                    innerHTML: footerNotice.value
                  }, null, 8, _hoisted_11),
                  createBaseVNode("div", _hoisted_12, [
                    createBaseVNode("button", {
                      class: "monsterinsights-button monsterinsights-button-upgrade",
                      onClick: handleUpgrade
                    }, toDisplayString(buttonText.value), 1),
                    __props.showSampleButton && hasSampleData.value ? (openBlock(), createElementBlock("button", {
                      key: 0,
                      class: "monsterinsights-upsell-content-button-sample-report",
                      onClick: handleSeeSample
                    }, toDisplayString(unref(__)("See a Demo", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true)
                  ])
                ]),
                !__props.noImage ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass([imageClass.value, "monsterinsights-upsell-content__img"]),
                  style: normalizeStyle(imageStyle.value)
                }, null, 6)) : createCommentVNode("", true)
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["model-value", "dismissable"]);
    };
  }
};
const UpsellModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c31703d7"]]);
function useSampleData(feature, dataType = "overview") {
  const sampleData = ref(null);
  const isLoading = ref(false);
  const error = ref(null);
  const loadSampleData = async () => {
    if (sampleData.value) {
      return;
    }
    isLoading.value = true;
    error.value = null;
    try {
      const path = `${feature}/${dataType}`;
      const data = await getSampleData(path);
      if (!data) {
        throw new Error(`Sample data not found for ${path}`);
      }
      if (data.widgets) {
        Object.values(data.widgets).forEach((widget) => {
          if (!widget.chart) {
            widget.chart = {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
              datasets: [
                {
                  label: "Sample Data",
                  data: [12, 19, 3, 5, 2, 3],
                  fill: true,
                  backgroundColor: "rgba(54, 162, 235, 0.2)",
                  borderColor: "rgb(54, 162, 235)",
                  borderWidth: 1
                }
              ]
            };
          }
        });
      }
      sampleData.value = data;
    } catch (err) {
      error.value = err.message;
      console.error("[useSampleData] Error loading sample data:", err);
    } finally {
      isLoading.value = false;
    }
  };
  const clearSampleData = () => {
    sampleData.value = null;
    error.value = null;
  };
  return {
    sampleData,
    isLoading,
    error,
    loadSampleData,
    clearSampleData
  };
}
export {
  UpsellModal as U,
  useSampleData as u
};
