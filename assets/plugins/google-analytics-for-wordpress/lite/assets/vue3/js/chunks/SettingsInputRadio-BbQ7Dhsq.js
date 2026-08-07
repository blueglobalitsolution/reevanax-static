import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, f as renderList, i as normalizeClass, u as unref, K as renderSlot, s as createCommentVNode, m as computed } from "./toastStore-CRCNwITM.js";
const _hoisted_1 = ["for"];
const _hoisted_2 = ["title"];
const _hoisted_3 = ["id", "name", "value", "checked", "readonly"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = {
  key: 0,
  class: "monsterinsights-radio-sub-panel"
};
const _sfc_main = {
  __name: "SettingsInputRadio",
  props: {
    options: Array,
    name: String,
    auth_disabled: {
      type: Boolean,
      default: true
    },
    classes: String
  },
  emits: ["change", "updated"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const settingsStore = useSettingsStore();
    const { isAuthed, needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const disabled = computed(() => {
      if (!props.auth_disabled) return false;
      return !isAuthed.value;
    });
    function updateSetting(e) {
      if (disabled.value) return false;
      emit("change", e.target.value);
      savingToast({});
      settingsStore.updateSetting({
        name: props.name,
        value: e.target.value
      }).then(() => {
        emit("updated", e.target.value);
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function titleClass(value) {
      let cls = "monsterinsights-styled-radio";
      if (isChecked(value)) cls += " monsterinsights-styled-radio-checked";
      return cls;
    }
    function labelClass(option) {
      let cls = "";
      if (isChecked(option.value)) cls += " monsterinsights-styled-radio-label-checked";
      return cls;
    }
    function isChecked(value) {
      const settings = settingsStore.getSettings;
      if (settings[props.name]) {
        return value === settings[props.name];
      }
      return value === props.options[0].value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("fieldset", null, [
        createBaseVNode("div", {
          class: normalizeClass(["monsterinsights-settings-input-radio", __props.classes])
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createElementBlock("span", {
              key: option.value
            }, [
              createBaseVNode("label", {
                class: normalizeClass(labelClass(option)),
                for: "monsterinsights-settings-radio-" + __props.name + "[" + option.value + "]"
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(titleClass(option.value)),
                  title: disabled.value ? unref(needToAuthMessage) : ""
                }, null, 10, _hoisted_2),
                createBaseVNode("input", {
                  id: "monsterinsights-settings-radio-" + __props.name + "[" + option.value + "]",
                  type: "radio",
                  name: __props.name,
                  value: option.value,
                  checked: isChecked(option.value),
                  autocomplete: "off",
                  readonly: disabled.value,
                  onChange: updateSetting
                }, null, 40, _hoisted_3),
                createBaseVNode("span", {
                  class: "monsterinsights-settings-radio-text",
                  innerHTML: option.label
                }, null, 8, _hoisted_4)
              ], 10, _hoisted_1),
              _ctx.$slots[option.value] && isChecked(option.value) ? (openBlock(), createElementBlock("span", _hoisted_5, [
                isChecked(option.value) ? renderSlot(_ctx.$slots, option.value, { key: 0 }) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ]);
          }), 128))
        ], 2)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
