import { j as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, u as unref, B as withModifiers, E as createBlock, w as withDirectives, aG as vModelDynamic, m as computed } from "./toastStore-CRCNwITM.js";
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
const _hoisted_6 = ["title", "type", "name", "placeholder", "readonly"];
const _hoisted_7 = {
  key: 1,
  class: "monsterinsights-error"
};
const _hoisted_8 = ["innerHTML"];
const _sfc_main = {
  __name: "SettingsInputText",
  props: {
    name: String,
    label: String,
    description: String,
    placeholder: String,
    type: { type: String, default: "text" },
    tooltip: String,
    default_value: String,
    format: RegExp,
    auth_disabled: { type: Boolean, default: true },
    readonly: { type: Boolean, default: false },
    validate: Function
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const { isAuthed, needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const has_error = ref(false);
    const text_error = ref(__("The value entered does not match the required format", "google-analytics-for-wordpress"));
    const updated_value = ref(false);
    const id = "input-" + props.name;
    const text_reset = __("Reset to default", "google-analytics-for-wordpress");
    const disabled = computed(() => {
      if (!props.auth_disabled) return false;
      return !isAuthed.value;
    });
    const value = computed({
      get() {
        return updated_value.value !== false ? updated_value.value : settingsStore.getSettings[props.name];
      },
      set(val) {
        updated_value.value = val;
      }
    });
    const showReset = computed(() => {
      return props.default_value && settingsStore.getSettings[props.name] !== props.default_value;
    });
    function inputUpdate(e) {
      updateSetting(e.target.name, e.target.value);
    }
    function updateSetting(name, val) {
      if (disabled.value) return false;
      has_error.value = false;
      if (props.format) {
        if (!props.format.test(val)) {
          has_error.value = true;
          return false;
        }
      }
      if (props.validate) {
        const validated = props.validate(val);
        if (validated.success !== true) {
          text_error.value = validated.error_text;
          has_error.value = true;
          return false;
        } else if (validated.value) {
          val = validated.value;
        }
      }
      savingToast({});
      value.value = val;
      settingsStore.updateSetting({
        name,
        value: val
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
        __props.label || __props.description || __props.tooltip ? (openBlock(), createElementBlock("label", {
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
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            title: disabled.value ? unref(needToAuthMessage) : "",
            type: __props.type,
            name: __props.name,
            placeholder: __props.placeholder,
            readonly: disabled.value || __props.readonly,
            onChange: inputUpdate
          }, null, 40, _hoisted_6), [
            [vModelDynamic, value.value]
          ])
        ]),
        has_error.value ? (openBlock(), createElementBlock("label", _hoisted_7, [
          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
          createBaseVNode("span", { innerHTML: text_error.value }, null, 8, _hoisted_8)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const SettingsInputText = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-019a1473"]]);
export {
  SettingsInputText as S
};
