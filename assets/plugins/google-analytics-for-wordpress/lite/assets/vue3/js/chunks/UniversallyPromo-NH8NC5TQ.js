import { o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, A as createTextVNode, u as unref, i as normalizeClass, m as computed, j as ref, k as getMiGlobal } from "./toastStore-CRCNwITM.js";
import { c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "monsterinsights-universally-promo__text" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-universally-promo__info"
};
const _hoisted_3 = {
  key: 0,
  class: "monsterinsights-universally-promo__lead"
};
const _hoisted_4 = ["disabled"];
const _hoisted_5 = {
  key: 2,
  class: "monsterinsights-universally-promo__done"
};
const _hoisted_6 = ["aria-label"];
const UNIVERSALLY_SLUG = "universally-language-translation-multilingual-tool";
const UNIVERSALLY_BASENAME = "universally-language-translation-multilingual-tool/universally.php";
const _sfc_main = {
  __name: "UniversallyPromo",
  props: {
    // Distinct dismissal key per placement so each banner dismisses independently.
    promoId: {
      type: String,
      required: true
    },
    // Body copy shown after the lead.
    text: {
      type: String,
      required: true
    },
    // Bold lead-in (e.g. "Pro Tip:"). Pass an empty string to omit.
    lead: {
      type: String,
      default: () => __("Pro Tip:", "google-analytics-for-wordpress")
    },
    // Text of the install link.
    linkText: {
      type: String,
      default: () => __("Install Now", "google-analytics-for-wordpress")
    },
    // Whether the dismiss (x) control renders.
    dismissible: {
      type: Boolean,
      default: true
    },
    // When true, a decorative info "i" icon renders before the text.
    showInfo: {
      type: Boolean,
      default: false
    },
    // When true, drops the bordered/rounded card chrome so the promo reads as a
    // flush full-width strip (e.g. attached under a report table).
    bare: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const addonsStore = useAddonsStore();
    const canInstall = computed(() => !!getMiGlobal("install_plugins", false));
    const installing = ref(false);
    const installed = ref(false);
    const dismissedLocal = ref(false);
    const isDismissed = computed(() => {
      if (dismissedLocal.value) {
        return true;
      }
      const dismissed = getMiGlobal("dismissed_promos", []);
      return Array.isArray(dismissed) && dismissed.includes(props.promoId);
    });
    const shouldShow = computed(
      () => canInstall.value && !getMiGlobal("universally_active", false) && !installed.value && !isDismissed.value
    );
    async function handleInstall() {
      if (installing.value) {
        return;
      }
      installing.value = true;
      try {
        const installResult = await addonsStore.installPluginAction({ slug: UNIVERSALLY_SLUG, id: UNIVERSALLY_SLUG });
        if (installResult?.error) {
          throw new Error(installResult.error);
        }
        const activateResult = await addonsStore.activateAddonAction({ slug: UNIVERSALLY_SLUG, basename: UNIVERSALLY_BASENAME });
        if (activateResult?.error) {
          throw new Error(activateResult.error);
        }
        installed.value = true;
        installing.value = false;
      } catch (error) {
        installing.value = false;
      }
    }
    function dismiss() {
      dismissedLocal.value = true;
      const dismissed = getMiGlobal("dismissed_promos", []);
      if (Array.isArray(dismissed) && !dismissed.includes(props.promoId)) {
        dismissed.push(props.promoId);
      }
      if (window.wp && window.wp.ajax) {
        window.wp.ajax.post("monsterinsights_vue_dismiss_promo", {
          nonce: getMiGlobal("nonce"),
          promo_id: props.promoId
        });
      }
    }
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["monsterinsights-universally-promo", { "monsterinsights-universally-promo--bare": __props.bare }])
      }, [
        createBaseVNode("span", _hoisted_1, [
          __props.showInfo ? (openBlock(), createElementBlock("span", _hoisted_2, [..._cache[0] || (_cache[0] = [
            createBaseVNode("i", {
              class: "monstericon monstericon-info-circle-regular",
              "aria-hidden": "true"
            }, null, -1)
          ])])) : createCommentVNode("", true),
          createBaseVNode("span", null, [
            __props.lead ? (openBlock(), createElementBlock("strong", _hoisted_3, toDisplayString(__props.lead), 1)) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(__props.text), 1)
          ]),
          !installed.value ? (openBlock(), createElementBlock("button", {
            key: 1,
            type: "button",
            class: "monsterinsights-universally-promo__link",
            disabled: installing.value,
            onClick: handleInstall
          }, toDisplayString(installing.value ? unref(__)("Installing…", "google-analytics-for-wordpress") : __props.linkText), 9, _hoisted_4)) : (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(__)("Installed", "google-analytics-for-wordpress")), 1))
        ]),
        __props.dismissible ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          class: "monsterinsights-universally-promo__dismiss",
          "aria-label": unref(__)("Dismiss this recommendation", "google-analytics-for-wordpress"),
          onClick: dismiss
        }, [..._cache[1] || (_cache[1] = [
          createBaseVNode("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "aria-hidden": "true"
          }, [
            createBaseVNode("path", {
              d: "M1 1L11 11M11 1L1 11",
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round"
            })
          ], -1)
        ])], 8, _hoisted_6)) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true);
    };
  }
};
const UniversallyPromo = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db7e75b2"]]);
export {
  UniversallyPromo as U
};
