import { k as getMiGlobal, o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, B as withModifiers, t as toDisplayString, u as unref, s as createCommentVNode, F as Fragment, j as ref, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$2 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$1 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { a as useToast, d as useDialog } from "./addons-CSVIjAyY.js";
import { b as getAjaxUrl, g as getNonce } from "./ajax-B_XS1gT5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1 = { class: "monsterinsights-container" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-grey-settings-area"
};
const _hoisted_3 = { class: "monsterinsights-grey-settings-area-half" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "monsterinsights-file-input" };
const _hoisted_7 = { class: "monsterinsights-file-input-styled" };
const _hoisted_8 = { class: "monsterinsights-file-input-styled-label" };
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["textContent"];
const _hoisted_12 = {
  key: 0,
  class: "monsterinsights-error"
};
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = { class: "monsterinsights-grey-settings-area-half" };
const _hoisted_15 = {
  action: "",
  method: "post"
};
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = { class: "monsterinsights-file-input" };
const _hoisted_23 = ["textContent"];
const _hoisted_24 = {
  key: 0,
  class: "monsterinsights-error"
};
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = {
  action: "",
  method: "post"
};
const _hoisted_27 = ["textContent"];
const _hoisted_28 = ["textContent"];
const _hoisted_29 = ["value"];
const _hoisted_30 = ["textContent"];
const _sfc_main = {
  __name: "monsterinsights-ToolsTabImportExport",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const isEM = false;
    const settingsStore = useSettingsStore();
    const { loadingToast, closeToast } = useToast();
    const dialog = useDialog();
    const ajaxUrl = getAjaxUrl();
    const nonce = getMiGlobal("nonce") || getNonce();
    const has_error = ref(false);
    const selectedFile = ref(null);
    const fileInput = ref(null);
    const text_title_export_import = __("Import/Export", "google-analytics-for-wordpress");
    const text_import = __("Import", "google-analytics-for-wordpress");
    const text_import_description = __("Import settings from another MonsterInsights website.", "google-analytics-for-wordpress");
    const text_export = __("Export", "google-analytics-for-wordpress");
    const text_export_description = __("Export settings to import into another MonsterInsights install.", "google-analytics-for-wordpress");
    const text_import_button = __("Import Settings", "google-analytics-for-wordpress");
    const text_export_button = __("Export Settings", "google-analytics-for-wordpress");
    const text_has_error = __("Please choose a file to import", "google-analytics-for-wordpress");
    const text_choose_file = __("Choose file", "google-analytics-for-wordpress");
    const text_import_tooltip = sprintf(__("Select %1$sChoose file%2$s to upload a settings export file from another MonsterInsights website.", "google-analytics-for-wordpress"), "<strong>", "</strong>");
    const text_export_tooltip = sprintf(__("Click %1$sExport Settings%2$s to export a file with your MonsterInsights settings.", "google-analytics-for-wordpress"), "<strong>", "</strong>");
    const filename = computed(() => {
      if (selectedFile.value && typeof selectedFile.value.name !== "undefined") {
        return selectedFile.value.name;
      }
      return __("No file chosen", "google-analytics-for-wordpress");
    });
    function handleFileUpload(event) {
      has_error.value = false;
      selectedFile.value = event.target.files[0];
    }
    async function submitForm() {
      if (!selectedFile.value) {
        has_error.value = true;
        return;
      }
      loadingToast(__("Uploading file...", "google-analytics-for-wordpress"));
      const formData = new FormData();
      formData.append("import_file", selectedFile.value);
      formData.append("action", "monsterinsights_handle_settings_import");
      formData.append("nonce", nonce);
      try {
        const response = await fetch(ajaxUrl, {
          method: "POST",
          body: formData
        });
        const json = await response.json();
        if (json && json.success && json.data) {
          settingsStore.settings = { ...json.data, is_saving: false };
          selectedFile.value = null;
          if (fileInput.value) {
            fileInput.value.value = "";
          }
          dialog.alert({
            variant: "success",
            title: __("File imported", "google-analytics-for-wordpress"),
            message: __("Settings successfully updated!", "google-analytics-for-wordpress"),
            confirmText: __("Ok", "google-analytics-for-wordpress")
          });
        } else {
          showImportError();
        }
      } catch (_e) {
        showImportError();
      } finally {
        closeToast();
      }
    }
    function showImportError() {
      {
        dialog.alert({
          variant: "error",
          title: __("Error importing settings", "google-analytics-for-wordpress"),
          message: __("Please choose a .json file generated by a MonsterInsights settings export.", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$2, {
          title: unref(text_title_export_import),
          icon: ""
        }, {
          default: withCtx(() => [
            isEM ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("form", {
                  action: "",
                  onSubmit: withModifiers(submitForm, ["prevent"])
                }, [
                  createBaseVNode("label", null, [
                    createBaseVNode("span", {
                      class: "monsterinsights-dark",
                      textContent: toDisplayString(unref(text_import))
                    }, null, 8, _hoisted_4),
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_import_description))
                    }, null, 8, _hoisted_5),
                    createVNode(_sfc_main$1, { content: unref(text_import_tooltip) }, null, 8, ["content"])
                  ]),
                  createBaseVNode("div", _hoisted_6, [
                    createBaseVNode("label", _hoisted_7, [
                      createBaseVNode("input", {
                        ref_key: "fileInput",
                        ref: fileInput,
                        type: "file",
                        onChange: handleFileUpload
                      }, null, 544),
                      createBaseVNode("span", _hoisted_8, [
                        _cache[0] || (_cache[0] = createBaseVNode("i", { class: "monstericon-plus" }, null, -1)),
                        createBaseVNode("span", {
                          textContent: toDisplayString(unref(text_choose_file))
                        }, null, 8, _hoisted_9)
                      ])
                    ]),
                    createBaseVNode("div", {
                      class: "monsterinsights-file-input-styled-filename",
                      textContent: toDisplayString(filename.value)
                    }, null, 8, _hoisted_10)
                  ]),
                  createBaseVNode("button", {
                    type: "submit",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(unref(text_import_button))
                  }, null, 8, _hoisted_11),
                  has_error.value ? (openBlock(), createElementBlock("label", _hoisted_12, [
                    _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
                    createBaseVNode("span", { innerHTML: unref(text_has_error) }, null, 8, _hoisted_13)
                  ])) : createCommentVNode("", true)
                ], 32)
              ]),
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("form", _hoisted_15, [
                  createBaseVNode("label", null, [
                    createBaseVNode("span", {
                      class: "monsterinsights-dark",
                      textContent: toDisplayString(unref(text_export))
                    }, null, 8, _hoisted_16),
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_export_description))
                    }, null, 8, _hoisted_17),
                    createVNode(_sfc_main$1, { content: unref(text_export_tooltip) }, null, 8, ["content"])
                  ]),
                  createBaseVNode("input", {
                    type: "hidden",
                    value: unref(nonce),
                    name: "monsterinsights_export_settings"
                  }, null, 8, _hoisted_18),
                  _cache[2] || (_cache[2] = createBaseVNode("input", {
                    type: "hidden",
                    value: "monsterinsights_export_settings",
                    name: "monsterinsights_action"
                  }, null, -1)),
                  createBaseVNode("button", {
                    class: "monsterinsights-button",
                    textContent: toDisplayString(unref(text_export_button))
                  }, null, 8, _hoisted_19)
                ])
              ])
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("form", {
                action: "",
                onSubmit: withModifiers(submitForm, ["prevent"])
              }, [
                createBaseVNode("label", null, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    textContent: toDisplayString(unref(text_import))
                  }, null, 8, _hoisted_20),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_import_description))
                  }, null, 8, _hoisted_21),
                  createVNode(_sfc_main$1, { content: unref(text_import_tooltip) }, null, 8, ["content"])
                ]),
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("input", {
                    ref_key: "fileInput",
                    ref: fileInput,
                    type: "file",
                    onChange: handleFileUpload
                  }, null, 544)
                ]),
                createBaseVNode("button", {
                  type: "submit",
                  class: "monsterinsights-button",
                  textContent: toDisplayString(unref(text_import_button))
                }, null, 8, _hoisted_23),
                has_error.value ? (openBlock(), createElementBlock("label", _hoisted_24, [
                  _cache[3] || (_cache[3] = createBaseVNode("i", { class: "monstericon-warning-triangle" }, null, -1)),
                  createBaseVNode("span", { innerHTML: unref(text_has_error) }, null, 8, _hoisted_25)
                ])) : createCommentVNode("", true)
              ], 32),
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("form", _hoisted_26, [
                createBaseVNode("label", null, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    textContent: toDisplayString(unref(text_export))
                  }, null, 8, _hoisted_27),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_export_description))
                  }, null, 8, _hoisted_28),
                  createVNode(_sfc_main$1, { content: unref(text_export_tooltip) }, null, 8, ["content"])
                ]),
                createBaseVNode("input", {
                  type: "hidden",
                  value: unref(nonce),
                  name: "monsterinsights_export_settings"
                }, null, 8, _hoisted_29),
                _cache[4] || (_cache[4] = createBaseVNode("input", {
                  type: "hidden",
                  value: "monsterinsights_export_settings",
                  name: "monsterinsights_action"
                }, null, -1)),
                createBaseVNode("button", {
                  class: "monsterinsights-button",
                  textContent: toDisplayString(unref(text_export_button))
                }, null, 8, _hoisted_30)
              ])
            ], 64))
          ]),
          _: 1
        }, 8, ["title", "icon"])
      ]);
    };
  }
};
const monsterinsightsToolsTabImportExport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-263d8a0f"]]);
export {
  monsterinsightsToolsTabImportExport as default
};
