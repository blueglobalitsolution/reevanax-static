import { o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, u as unref, B as withModifiers, E as createBlock, w as withDirectives, v as vModelText, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { q as sanitizeHtml } from "./ajax-B_XS1gT5.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$1 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "settings-input-text" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "settings-input-text-input" };
const _hoisted_6 = ["title", "name", "placeholder", "min", "max", "step", "readonly"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = {
  key: 1,
  class: "monsterinsights-error"
};
const _hoisted_9 = ["innerHTML"];
const _sfc_main = {
  __name: "SettingsInputNumber",
  props: {
    name: String,
    label: String,
    description: String,
    placeholder: String,
    tooltip: String,
    default_value: String,
    min: Number,
    max: Number,
    step: { type: Number, default: 1 },
    round: { type: Boolean, default: false },
    inline_desc: String,
    auth_disabled: { type: Boolean, default: true }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const { isAuthed, needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const has_error = ref(false);
    const id = "input-" + props.name;
    const text_reset = __("Reset to default", "google-analytics-for-wordpress");
    const updated_number_value = ref(false);
    const text_error_value = sprintf(__("Please enter a value between %1$s and %2$s", "google-analytics-for-wordpress"), "<strong>" + props.min + "</strong>", "<strong>" + props.max + "</strong>");
    const text_error_has_min = sprintf(__("Please enter a value higher than %s", "google-analytics-for-wordpress"), "<strong>" + props.min + "</strong>");
    const text_error_has_max = sprintf(__("Please enter a value lower than %s", "google-analytics-for-wordpress"), "<strong>" + props.max + "</strong>");
    const text_error_generic = __("Please enter a number", "google-analytics-for-wordpress");
    const text_error_round = __("Value has to be a round number", "google-analytics-for-wordpress");
    const disabled = computed(() => {
      if (!props.auth_disabled) return false;
      return !isAuthed.value;
    });
    const number_value = computed({
      get() {
        return updated_number_value.value !== false ? updated_number_value.value : settingsStore.getSettings[props.name];
      },
      set(val) {
        updated_number_value.value = val;
      }
    });
    const error_text = computed(() => {
      if (typeof props.min !== "undefined" && typeof props.max !== "undefined") return text_error_value;
      if (typeof props.min !== "undefined") return text_error_has_min;
      if (typeof props.max !== "undefined") return text_error_has_max;
      return text_error_generic;
    });
    const showReset = computed(() => {
      return props.default_value && settingsStore.getSettings[props.name] !== props.default_value;
    });
    function inputUpdate(e) {
      updateSetting(e.target.name, e.target.value);
    }
    function updateSetting(name, value) {
      if (disabled.value) return false;
      has_error.value = false;
      value = parseFloat(value);
      if (props.round && value % 1 !== 0) {
        has_error.value = text_error_round;
        return false;
      }
      if (isNaN(value) || typeof props.max !== "undefined" && value > props.max || typeof props.min !== "undefined" && value < props.min) {
        has_error.value = error_text.value;
        return false;
      }
      savingToast({});
      settingsStore.updateSetting({
        name,
        value
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function resetValue() {
      updateSetting(props.name, props.default_value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        __props.label ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: id
        }, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            innerHTML: __props.label
          }, null, 8, _hoisted_2),
          __props.description ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: __props.description
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          showReset.value ? (openBlock(), createElementBlock("a", {
            key: 1,
            class: "monsterinsights-reset-default",
            href: "#",
            onClick: withModifiers(resetValue, ["prevent"]),
            textContent: toDisplayString(unref(text_reset))
          }, null, 8, _hoisted_4)) : createCommentVNode("", true),
          __props.tooltip ? (openBlock(), createBlock(_sfc_main$1, {
            key: 2,
            content: __props.tooltip
          }, null, 8, ["content"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_5, [
          withDirectives(createBaseVNode("input", {
            id,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => number_value.value = $event),
            title: disabled.value ? unref(needToAuthMessage) : "",
            type: "number",
            name: __props.name,
            placeholder: __props.placeholder,
            min: __props.min,
            max: __props.max,
            step: __props.step,
            readonly: disabled.value,
            onChange: inputUpdate
          }, null, 40, _hoisted_6), [
            [vModelText, number_value.value]
          ]),
          __props.inline_desc ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "monsterinsights-inline-desc",
            innerHTML: __props.inline_desc
          }, null, 8, _hoisted_7)) : createCommentVNode("", true)
        ]),
        has_error.value ? (openBlock(), createElementBlock("label", _hoisted_8, [
          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
          createBaseVNode("span", {
            innerHTML: unref(sanitizeHtml)(has_error.value)
          }, null, 8, _hoisted_9)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const SettingsInputNumber = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-61abd85e"]]);
export {
  SettingsInputNumber as S
};
