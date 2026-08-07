import { o as openBlock, E as createBlock, D as withCtx, i as normalizeClass, u as unref, aA as Ro, m as computed, K as renderSlot, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, q as purify } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = ["innerHTML"];
const _sfc_main = {
  __name: "Modal",
  props: {
    /** v-model: open state (declarative usage). Programmatic usage leaves it controlled by VFM. */
    modelValue: { type: Boolean, default: void 0 },
    /**
     * Teleport target.
     *  - Dialogs (`undefined`) → `<body>` (viewport modals).
     *  - Gates → default to `.monsterinsights-app-surface` (each app root carries this
     *    class + `position: relative`), so the overlay is scoped to our content box —
     *    the WP admin menu lives outside it and can never be covered. Override per consumer
     *    only if a tighter container is needed.
     */
    teleportTo: { type: [String, Boolean, Object], default: void 0 },
    variant: {
      type: String,
      default: "success"
      // success | error | loading | confirm
    },
    /**
     * Optional icon override. When set, the rendered icon follows this value instead of
     * `variant` — lets an info/neutral dialog reuse the success card layout without the
     * success checkmark. One of: success | error | info.
     */
    icon: { type: String, default: "" },
    /**
     * Interaction mode:
     *  - 'dialog' (default) — viewport-blocking, focus-trapped. For transient dialogs
     *    (success / error / confirm / loading).
     *  - 'gate' — overlay is click-through (`background="interactive"`) and focus is NOT
     *    trapped, so the surrounding WordPress admin chrome (left menu, settings nav)
     *    stays usable while the gate is shown. For the Lite/auth content gates, where the
     *    page owns a *scoped* blur on our container only — never the WP nav. The user must
     *    be able to navigate away (e.g. to run onboarding) even when the gate is not
     *    dismissable.
     */
    mode: {
      type: String,
      default: "dialog"
      // dialog | gate
    },
    /**
     * Backdrop appearance:
     *  - 'default'     — VFM dim (dialogs).
     *  - 'blurred'     — backdrop-filter blur, owned by the modal (only while open).
     *  - 'transparent' — no dim/blur; use for gates, where the page already provides a
     *                    persistent, container-scoped blur behind the card.
     */
    backdrop: {
      type: String,
      default: "default"
      // default | blurred | transparent
    },
    title: { type: String, default: "" },
    message: { type: String, default: "" },
    /** Optional rich body (sanitized with DOMPurify). Takes precedence over `message`. */
    html: { type: String, default: "" },
    confirmButtonText: { type: String, default: "" },
    cancelButtonText: { type: String, default: "" },
    /**
     * High-level dismiss control. When set, it drives both click-outside and ESC:
     *  - `true`  → user can dismiss (upsell: close button + click-outside + ESC).
     *  - `false` → user cannot dismiss (auth gate: no ESC / no click-outside).
     * Leave `undefined` to fall back to the fine-grained `clickToClose`/`escToClose`
     * (used by the programmatic dialogs).
     */
    dismissable: { type: Boolean, default: void 0 },
    clickToClose: { type: Boolean, default: false },
    escToClose: { type: Boolean, default: false },
    onConfirm: { type: Function, default: null },
    onCancel: { type: Function, default: null },
    onClosed: { type: Function, default: null },
    /** Override the content-wrapper class (defaults to the per-variant class). */
    contentClass: { type: [String, Array, Object], default: null },
    /** Override the overlay (root) class (defaults to `<content>-overlay`). */
    overlayClass: { type: [String, Array, Object], default: null }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const sanitizedHtml = computed(
      () => props.html ? purify.sanitize(props.html, { ADD_ATTR: ["target"] }) : ""
    );
    const iconVariant = computed(() => props.icon || props.variant);
    const resolvedContentClass = computed(
      () => props.contentClass || `monsterinsights-${props.variant}-modal`
    );
    const resolvedOverlayClass = computed(
      () => props.overlayClass || `monsterinsights-${props.variant}-modal-overlay`
    );
    const overlayStyle = computed(
      () => props.backdrop === "blurred" ? {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(5px)",
        WebkitBackdropFilter: "blur(5px)"
      } : void 0
      // 'default' → VFM's dim from style.css
    );
    const vfmHideOverlay = computed(() => props.backdrop === "transparent");
    const isGate = computed(() => props.mode === "gate");
    const vfmBackground = computed(() => isGate.value ? "interactive" : void 0);
    const vfmFocusTrap = computed(() => isGate.value ? false : void 0);
    const vfmLockScroll = computed(() => isGate.value ? false : void 0);
    const resolvedTeleportTo = computed(
      () => props.teleportTo !== void 0 ? props.teleportTo : isGate.value ? ".monsterinsights-app-surface" : void 0
    );
    const resolvedClickToClose = computed(
      () => props.dismissable !== void 0 ? props.dismissable : props.clickToClose
    );
    const resolvedEscToClose = computed(
      () => props.dismissable !== void 0 ? props.dismissable : props.escToClose
    );
    function handleConfirm() {
      if (typeof props.onConfirm === "function") {
        props.onConfirm();
      }
      emit("update:modelValue", false);
    }
    function handleCancel() {
      if (typeof props.onCancel === "function") {
        props.onCancel();
      }
      emit("update:modelValue", false);
    }
    function handleClosed() {
      if (typeof props.onClosed === "function") {
        props.onClosed();
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Ro), {
        "model-value": __props.modelValue,
        "teleport-to": resolvedTeleportTo.value,
        class: normalizeClass([resolvedOverlayClass.value, { "monsterinsights-gate": isGate.value }]),
        "content-class": resolvedContentClass.value,
        "overlay-style": overlayStyle.value,
        "hide-overlay": vfmHideOverlay.value,
        background: vfmBackground.value,
        "focus-trap": vfmFocusTrap.value,
        "lock-scroll": vfmLockScroll.value,
        "overlay-transition": "vfm-fade",
        "content-transition": "vfm-fade",
        "click-to-close": resolvedClickToClose.value,
        "esc-to-close": resolvedEscToClose.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = (value) => emit("update:modelValue", value)),
        onClosed: handleClosed
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            iconVariant.value === "success" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(`${resolvedContentClass.value}__icon`)
            }, [..._cache[1] || (_cache[1] = [
              createBaseVNode("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("circle", {
                  cx: "40",
                  cy: "40",
                  r: "36",
                  stroke: "#D0D5DD",
                  "stroke-width": "4",
                  fill: "none"
                }),
                createBaseVNode("path", {
                  d: "M26 40L35 49L54 30",
                  stroke: "#5CB85C",
                  "stroke-width": "4",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  fill: "none"
                })
              ], -1)
            ])], 2)) : iconVariant.value === "error" ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(`${resolvedContentClass.value}__icon`)
            }, [..._cache[2] || (_cache[2] = [
              createBaseVNode("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("circle", {
                  cx: "40",
                  cy: "40",
                  r: "36",
                  stroke: "#F97373",
                  "stroke-width": "4",
                  fill: "none"
                }),
                createBaseVNode("path", {
                  d: "M28 28L52 52",
                  stroke: "#F97373",
                  "stroke-width": "4",
                  "stroke-linecap": "round"
                }),
                createBaseVNode("path", {
                  d: "M52 28L28 52",
                  stroke: "#F97373",
                  "stroke-width": "4",
                  "stroke-linecap": "round"
                })
              ], -1)
            ])], 2)) : iconVariant.value === "info" ? (openBlock(), createElementBlock("div", {
              key: 2,
              class: normalizeClass(`${resolvedContentClass.value}__icon`)
            }, [..._cache[3] || (_cache[3] = [
              createBaseVNode("svg", {
                width: "80",
                height: "80",
                viewBox: "0 0 80 80",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("circle", {
                  cx: "40",
                  cy: "40",
                  r: "36",
                  stroke: "#509FE2",
                  "stroke-width": "4",
                  fill: "none"
                }),
                createBaseVNode("circle", {
                  cx: "40",
                  cy: "26",
                  r: "3.5",
                  fill: "#509FE2"
                }),
                createBaseVNode("path", {
                  d: "M40 37V56",
                  stroke: "#509FE2",
                  "stroke-width": "4",
                  "stroke-linecap": "round"
                })
              ], -1)
            ])], 2)) : __props.variant === "loading" ? (openBlock(), createElementBlock("div", {
              key: 3,
              class: normalizeClass(`${resolvedContentClass.value}__spinner`)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(`${resolvedContentClass.value}__spinner-circle`)
              }, null, 2)
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("h3", {
              class: normalizeClass(`${resolvedContentClass.value}__title`)
            }, toDisplayString(__props.title), 3),
            __props.html ? (openBlock(), createElementBlock("p", {
              key: 4,
              class: normalizeClass(`${resolvedContentClass.value}__message`),
              innerHTML: sanitizedHtml.value
            }, null, 10, _hoisted_1)) : __props.message ? (openBlock(), createElementBlock("p", {
              key: 5,
              class: normalizeClass(`${resolvedContentClass.value}__message`)
            }, toDisplayString(__props.message), 3)) : createCommentVNode("", true),
            __props.variant === "confirm" ? (openBlock(), createElementBlock("div", {
              key: 6,
              class: normalizeClass(`${resolvedContentClass.value}__actions`)
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([`${resolvedContentClass.value}__button`, `${resolvedContentClass.value}__button--secondary`]),
                onClick: handleCancel
              }, toDisplayString(__props.cancelButtonText), 3),
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass([`${resolvedContentClass.value}__button`, `${resolvedContentClass.value}__button--primary`]),
                onClick: handleConfirm
              }, toDisplayString(__props.confirmButtonText), 3)
            ], 2)) : __props.variant !== "loading" ? (openBlock(), createElementBlock("div", {
              key: 7,
              class: normalizeClass(`${resolvedContentClass.value}__actions`)
            }, [
              createBaseVNode("button", {
                type: "button",
                class: normalizeClass(`${resolvedContentClass.value}__button`),
                onClick: handleConfirm
              }, toDisplayString(__props.confirmButtonText), 3)
            ], 2)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 8, ["model-value", "teleport-to", "class", "content-class", "overlay-style", "hide-overlay", "background", "focus-trap", "lock-scroll", "click-to-close", "esc-to-close"]);
    };
  }
};
export {
  _sfc_main as _
};
