import { o as openBlock, c as createElementBlock, F as Fragment, f as renderList, t as toDisplayString, s as createCommentVNode, a as createBaseVNode, i as normalizeClass, w as withDirectives, v as vModelText, B as withModifiers, u as unref, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { q as sanitizeHtml } from "./ajax-B_XS1gT5.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
const _hoisted_1 = { class: "monsterinsights-settings-input-repeater" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-settings-input-repeater-labels monsterinsights-settings-input-repeater-row"
};
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "monsterinsights-settings-input-repeater-row" };
const _hoisted_5 = ["onUpdate:modelValue", "readonly", "onChange"];
const _hoisted_6 = ["title", "onClick"];
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-error"
};
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = {
  key: 1,
  class: "monsterinsights-error"
};
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = {
  key: 2,
  class: "monsterinsights-error"
};
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = ["title", "textContent"];
const _sfc_main = {
  __name: "SettingsInputRepeater",
  props: {
    structure: Array,
    name: String,
    text_add: String,
    delete_icon: { type: String, default: "monstericon-times-circle" },
    max_items: { type: Number, default: -1 },
    min_items: { type: Number, default: -1 },
    max_item_error_notice: { type: String, default: "You can add maximum 5 items." },
    min_item_error_notice: { type: String, default: "At least 0 item required." }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const { isAuthed, needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const text_add_path = props.text_add ? props.text_add : __("Add Another Link Path", "google-analytics-for-wordpress");
    const text_remove_row = __("Remove row", "google-analytics-for-wordpress");
    const has_errors = ref([]);
    const show_max_item_error = ref(false);
    const show_min_item_error = ref(false);
    const disabled = computed(() => !isAuthed.value);
    const button_class = computed(() => {
      let cls = "monsterinsights-button";
      if (disabled.value) cls += " monsterinsights-button-disabled";
      return cls;
    });
    const rows = computed({
      get() {
        const settings = settingsStore.getSettings;
        if (!settings[props.name]) return [];
        return JSON.parse(JSON.stringify(settings[props.name]));
      },
      set() {
        updateSetting(false);
      }
    });
    function updateSetting(new_row) {
      if (disabled.value) return false;
      if (!new_row) {
        if (!validateSettings()) return false;
      }
      savingToast({});
      settingsStore.updateSetting({
        name: props.name,
        value: rows.value
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function addRow() {
      const new_row = {};
      if (rows.value.length === props.max_items) {
        show_max_item_error.value = true;
        return;
      }
      for (const index in props.structure) {
        new_row[props.structure[index].name] = "";
      }
      rows.value.push(new_row);
      if (rows.value.length !== props.min_items) {
        show_min_item_error.value = false;
      }
      updateSetting(true);
    }
    function removeRow(index) {
      if (rows.value.length === props.min_items) {
        show_min_item_error.value = true;
        return;
      }
      if (rows.value && Array.isArray(rows.value)) {
        rows.value.splice(index, 1);
      }
      if (rows.value.length !== props.max_items) {
        show_max_item_error.value = false;
      }
      updateSetting();
    }
    function validateSettings() {
      has_errors.value = [];
      const no_duplicates = {};
      for (const index in rows.value) {
        for (const structure in props.structure) {
          if (rows.value[index][props.structure[structure].name] === "") {
            has_errors.value[index] = sprintf(__("%s can't be empty.", "google-analytics-for-wordpress"), "<strong>" + props.structure[structure].label + "</strong>");
            break;
          }
          if (props.structure[structure].pattern) {
            const match = props.structure[structure].pattern.test(rows.value[index][props.structure[structure].name]);
            if (!match) {
              has_errors.value[index] = props.structure[structure].error;
              break;
            }
          }
          if (props.structure[structure].prevent_duplicates) {
            if (typeof no_duplicates[props.structure[structure].name] === "undefined") {
              no_duplicates[props.structure[structure].name] = [];
            }
            no_duplicates[props.structure[structure].name].push(rows.value[index][props.structure[structure].name]);
            const names = no_duplicates[props.structure[structure].name];
            const unique = names.filter((v, i) => names.indexOf(v) === i);
            if (names.length !== unique.length) {
              has_errors.value[index] = __("Duplicate values are not allowed.", "google-analytics-for-wordpress");
            }
          }
        }
      }
      return has_errors.value.length === 0;
    }
    function errorClass(index, name) {
      if (rows.value[index][name] === "") return "";
      if (has_errors.value[index]) return "monsterinsights-input-error";
      return "monsterinsights-input-valid";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        rows.value.length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.structure, (input, index) => {
            return openBlock(), createElementBlock("label", {
              key: index,
              textContent: toDisplayString(input.label)
            }, null, 8, _hoisted_3);
          }), 128))
        ])) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList(rows.value, (row, index) => {
          return openBlock(), createElementBlock(Fragment, { key: index }, [
            createBaseVNode("div", _hoisted_4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(__props.structure, (input, label) => {
                return openBlock(), createElementBlock("span", {
                  key: label,
                  class: normalizeClass(errorClass(index, input.name))
                }, [
                  withDirectives(createBaseVNode("input", {
                    "onUpdate:modelValue": ($event) => rows.value[index][input.name] = $event,
                    type: "text",
                    readonly: disabled.value,
                    onChange: ($event) => updateSetting(false, input.pattern)
                  }, null, 40, _hoisted_5), [
                    [vModelText, rows.value[index][input.name]]
                  ])
                ], 2);
              }), 128)),
              createBaseVNode("button", {
                title: unref(text_remove_row),
                onClick: withModifiers(($event) => removeRow(index), ["prevent"])
              }, [
                createBaseVNode("i", {
                  class: normalizeClass(__props.delete_icon)
                }, null, 2)
              ], 8, _hoisted_6)
            ]),
            has_errors.value[index] ? (openBlock(), createElementBlock("label", _hoisted_7, [
              _cache[0] || (_cache[0] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
              createBaseVNode("span", {
                innerHTML: unref(sanitizeHtml)(has_errors.value[index])
              }, null, 8, _hoisted_8)
            ])) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        show_max_item_error.value ? (openBlock(), createElementBlock("label", _hoisted_9, [
          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
          createBaseVNode("span", { innerHTML: __props.max_item_error_notice }, null, 8, _hoisted_10)
        ])) : createCommentVNode("", true),
        show_min_item_error.value ? (openBlock(), createElementBlock("label", _hoisted_11, [
          _cache[2] || (_cache[2] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
          createBaseVNode("span", { innerHTML: __props.min_item_error_notice }, null, 8, _hoisted_12)
        ])) : createCommentVNode("", true),
        createBaseVNode("button", {
          title: disabled.value ? unref(needToAuthMessage) : "",
          class: normalizeClass(button_class.value),
          onClick: withModifiers(addRow, ["prevent"]),
          textContent: toDisplayString(unref(text_add_path))
        }, null, 10, _hoisted_13)
      ]);
    };
  }
};
export {
  _sfc_main as _
};
