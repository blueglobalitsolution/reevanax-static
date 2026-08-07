import { o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, E as createBlock, b as createVNode, D as withCtx, F as Fragment, f as renderList, B as withModifiers, i as normalizeClass, t as toDisplayString, G as withKeys, u as unref, m as computed } from "./toastStore-CRCNwITM.js";
import { s as script } from "./vue-multiselect.esm-DVzdjNub.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { _ as _sfc_main$1 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "monsterinsights-settings-input-select" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "monsterinsights-settings-input-select-input" };
const _hoisted_5 = ["data-text"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["onKeypress", "onMousedown"];
const _sfc_main = {
  __name: "SettingsInputSelect",
  props: {
    options: Array,
    forced: { type: Array, default: () => [] },
    name: String,
    label: String,
    description: String,
    multiple: { type: Boolean, default: false },
    tooltip: String,
    disabled: { type: Boolean, default: false },
    addtext: String
  },
  setup(__props) {
    const props = __props;
    const settingsStore = useSettingsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const { needToAuthMessage } = useAuth();
    const id = "input-" + props.name;
    const selected = computed({
      get() {
        const forcedCopy = JSON.parse(JSON.stringify(props.forced));
        const settings = settingsStore.getSettings;
        if (settings[props.name]) {
          for (const option of props.options) {
            if (settings[props.name].indexOf(option.value) >= 0) {
              if (notForced(option)) {
                forcedCopy.push(option);
              }
            }
          }
        }
        return forcedCopy;
      },
      set() {
      }
    });
    function updateSetting(value) {
      if (props.disabled) return false;
      savingToast({});
      const processed_value = value.map((v) => v.value);
      settingsStore.updateSetting({
        name: props.name,
        value: processed_value
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function notForced(option) {
      return !props.forced.some((f) => f.value === option.value);
    }
    function tagClass(option) {
      let cls = "multiselect__tag";
      if (!notForced(option)) {
        cls += " monsterinsights-tag-forced";
      }
      return cls;
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
          __props.tooltip ? (openBlock(), createBlock(_sfc_main$1, {
            key: 1,
            content: __props.tooltip
          }, null, 8, ["content"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_4, [
          createVNode(unref(script), {
            modelValue: selected.value,
            "onUpdate:modelValue": [
              _cache[1] || (_cache[1] = ($event) => selected.value = $event),
              updateSetting
            ],
            options: __props.options,
            multiple: __props.multiple,
            "track-by": "value",
            label: "label",
            searchable: false,
            "select-label": "",
            "selected-label": "",
            "deselect-label": "",
            disabled: __props.disabled,
            title: __props.disabled ? unref(needToAuthMessage) : ""
          }, {
            selection: withCtx(({ values, remove }) => [
              createBaseVNode("div", {
                class: "multiselect__tags-wrap",
                "data-text": __props.addtext
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(values, (option, index) => {
                  return openBlock(), createElementBlock("span", {
                    key: index,
                    class: normalizeClass(tagClass(option)),
                    onMousedown: _cache[0] || (_cache[0] = withModifiers(() => {
                    }, ["prevent"]))
                  }, [
                    createBaseVNode("span", {
                      textContent: toDisplayString(option.label)
                    }, null, 8, _hoisted_6),
                    createBaseVNode("i", {
                      "aria-hidden": "true",
                      tabindex: "0",
                      class: "multiselect__tag-icon",
                      onKeypress: withKeys(withModifiers(($event) => remove(option), ["prevent"]), ["enter"]),
                      onMousedown: withModifiers(($event) => remove(option), ["prevent"])
                    }, null, 40, _hoisted_7)
                  ], 34);
                }), 128))
              ], 8, _hoisted_5)
            ]),
            _: 1
          }, 8, ["modelValue", "options", "multiple", "disabled", "title"])
        ])
      ]);
    };
  }
};
const SettingsInputSelect = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5277f631"]]);
export {
  SettingsInputSelect as S
};
