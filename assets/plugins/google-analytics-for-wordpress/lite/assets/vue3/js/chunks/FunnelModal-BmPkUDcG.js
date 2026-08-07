import { y as onMounted, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, u as unref, b as createVNode, t as toDisplayString, w as withDirectives, v as vModelText, c as createElementBlock, F as Fragment, f as renderList, P as vModelSelect, i as normalizeClass, s as createCommentVNode, k as getMiGlobal, j as ref } from "./toastStore-CRCNwITM.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { d as _sfc_main$1 } from "./TheAppHeader-DEdY-dez.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { u as useOverviewReportStore, I as DEFAULT_ECOMMERCE_FUNNEL } from "../reports-LbXqkgoM.js";
import { _ as __, s as sprintf } from "./default-i18n-KrIlCc2E.js";
const _hoisted_1 = ["aria-label"];
const _hoisted_2 = { class: "monsterinsights-funnel-modal__header" };
const _hoisted_3 = {
  id: "funnel-modal-title",
  class: "monsterinsights-funnel-modal__title"
};
const _hoisted_4 = { class: "monsterinsights-funnel-modal__body" };
const _hoisted_5 = { class: "monsterinsights-funnel-modal__create-section" };
const _hoisted_6 = { class: "monsterinsights-funnel-modal__section-title" };
const _hoisted_7 = { class: "monsterinsights-funnel-modal__name-field" };
const _hoisted_8 = { class: "monsterinsights-funnel-modal__field-label" };
const _hoisted_9 = ["placeholder"];
const _hoisted_10 = { class: "monsterinsights-funnel-modal__steps-section" };
const _hoisted_11 = { class: "monsterinsights-funnel-modal__steps-label" };
const _hoisted_12 = { class: "monsterinsights-funnel-modal__steps-list" };
const _hoisted_13 = { class: "monsterinsights-funnel-modal__step-number" };
const _hoisted_14 = { class: "monsterinsights-funnel-modal__select-wrapper" };
const _hoisted_15 = ["onUpdate:modelValue"];
const _hoisted_16 = ["value"];
const _hoisted_17 = { class: "monsterinsights-funnel-modal__step-value-wrapper" };
const _hoisted_18 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_19 = ["onClick"];
const _hoisted_20 = { class: "monsterinsights-funnel-modal__step-actions" };
const _hoisted_21 = ["disabled"];
const _hoisted_22 = { class: "monsterinsights-funnel-modal__saved-section" };
const _hoisted_23 = { class: "monsterinsights-funnel-modal__section-title" };
const _hoisted_24 = {
  key: 0,
  class: "monsterinsights-funnel-modal__empty-state"
};
const _hoisted_25 = {
  key: 1,
  class: "monsterinsights-funnel-modal__saved-list"
};
const _hoisted_26 = ["onMouseenter"];
const _hoisted_27 = { class: "monsterinsights-funnel-modal__saved-item-header" };
const _hoisted_28 = { class: "monsterinsights-funnel-modal__saved-item-info" };
const _hoisted_29 = { class: "monsterinsights-funnel-modal__saved-item-name" };
const _hoisted_30 = { class: "monsterinsights-funnel-modal__saved-item-steps" };
const _hoisted_31 = {
  key: 0,
  class: "monsterinsights-funnel-modal__saved-item-status monsterinsights-funnel-modal__saved-item-status--applied"
};
const _hoisted_32 = ["onClick"];
const _hoisted_33 = { class: "monsterinsights-funnel-modal__saved-item-actions" };
const _hoisted_34 = {
  key: 0,
  class: "monsterinsights-funnel-modal__saved-item-status monsterinsights-funnel-modal__saved-item-status--default"
};
const _hoisted_35 = ["onClick"];
const _hoisted_36 = ["onClick"];
const _hoisted_37 = {
  key: 0,
  class: "monsterinsights-funnel-modal__saved-item-edit"
};
const _hoisted_38 = { class: "monsterinsights-funnel-modal__step-number" };
const _hoisted_39 = { class: "monsterinsights-funnel-modal__select-wrapper" };
const _hoisted_40 = ["onUpdate:modelValue"];
const _hoisted_41 = ["value"];
const _hoisted_42 = { class: "monsterinsights-funnel-modal__step-value-wrapper" };
const _hoisted_43 = ["onUpdate:modelValue", "placeholder"];
const _hoisted_44 = ["onClick"];
const _hoisted_45 = { class: "monsterinsights-funnel-modal__edit-actions" };
const _hoisted_46 = ["disabled", "onClick"];
const _sfc_main = {
  __name: "FunnelModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const isDefaultFunnel = (id) => id === DEFAULT_ECOMMERCE_FUNNEL.id;
    const overviewStore = useOverviewReportStore();
    const emit = __emit;
    const texts = {
      pagePathPlaceholder: __("Enter page path", "google-analytics-for-wordpress"),
      eventNamePlaceholder: __("Enter event name", "google-analytics-for-wordpress")
    };
    const { successToast, errorToast } = useToast();
    const showSuccessToast = ({ message }) => successToast({ title: message, text: "" });
    const showErrorToast = ({ message }) => errorToast({ title: message, text: "" });
    const stepTypeOptions = [
      { value: "page", label: __("Page", "google-analytics-for-wordpress") },
      { value: "event", label: __("Event", "google-analytics-for-wordpress") }
    ];
    const newFunnelName = ref("");
    const newFunnelSteps = ref([
      { type: "page", value: "" },
      { type: "page", value: "" }
    ]);
    const editingFunnelId = ref(null);
    const editFunnelSteps = ref([]);
    const isSaving = ref(false);
    const hoveredFunnelId = ref(null);
    const closeModal = () => {
      editingFunnelId.value = null;
      editFunnelSteps.value = [];
      emit("close");
    };
    const applySavedFunnel = (savedFunnel) => {
      overviewStore.setActiveFunnelId(savedFunnel.id);
    };
    const addNewStep = () => {
      newFunnelSteps.value.push({ type: "page", value: "" });
    };
    const removeNewStep = (index) => {
      if (newFunnelSteps.value.length > 2) {
        newFunnelSteps.value.splice(index, 1);
      }
    };
    const resetNewFunnelForm = () => {
      newFunnelName.value = "";
      newFunnelSteps.value = [
        { type: "page", value: "" },
        { type: "page", value: "" }
      ];
    };
    const createFunnel = () => {
      if (isSaving.value) return;
      if (!newFunnelName.value.trim()) return;
      const validSteps = newFunnelSteps.value.filter((s) => s.value.trim());
      if (validSteps.length < 2) return;
      const funnelData = {
        name: newFunnelName.value.trim(),
        steps: validSteps.map((s) => ({ type: s.type, value: s.value.trim() }))
      };
      const ajaxData = {
        action: "monsterinsights_overview_report_save_funnel_filter",
        nonce: getMiGlobal("nonce", ""),
        funnel: JSON.stringify(funnelData)
      };
      isSaving.value = true;
      wp.ajax.post(ajaxData).done((response) => {
        if (response && response.id) {
          overviewStore.addFunnel({
            id: response.id,
            name: response.name || funnelData.name,
            steps: response.steps || funnelData.steps
          });
          if (!overviewStore.activeFunnelId) {
            overviewStore.setActiveFunnelId(response.id);
          }
          resetNewFunnelForm();
          showSuccessToast({
            message: sprintf(
              /* translators: %s - funnel name */
              __('Funnel "%s" has been created successfully.', "google-analytics-for-wordpress"),
              response.name
            )
          });
        }
      }).fail(() => {
        showErrorToast({
          message: __("Failed to create funnel. Please try again.", "google-analytics-for-wordpress")
        });
      }).always(() => {
        isSaving.value = false;
      });
    };
    const toggleEditFunnel = (savedFunnel) => {
      if (editingFunnelId.value === savedFunnel.id) {
        editingFunnelId.value = null;
        editFunnelSteps.value = [];
      } else {
        editingFunnelId.value = savedFunnel.id;
        editFunnelSteps.value = savedFunnel.steps ? savedFunnel.steps.map((s) => ({ ...s })) : [{ type: "page", value: "" }, { type: "page", value: "" }];
      }
    };
    const addEditStep = () => {
      editFunnelSteps.value.push({ type: "page", value: "" });
    };
    const removeEditStep = (index) => {
      if (editFunnelSteps.value.length > 2) {
        editFunnelSteps.value.splice(index, 1);
      }
    };
    const saveEditFunnel = (funnelId) => {
      if (isSaving.value) return;
      const validSteps = editFunnelSteps.value.filter((s) => s.value.trim());
      if (validSteps.length < 2) return;
      const funnel = overviewStore.funnels.find((f) => f.id === funnelId);
      if (!funnel) return;
      const updatedFunnel = {
        ...funnel,
        steps: validSteps.map((s) => ({ type: s.type, value: s.value.trim() }))
      };
      const ajaxData = {
        action: "monsterinsights_overview_report_update_funnel_filter",
        nonce: getMiGlobal("nonce", ""),
        funnel_id: funnelId,
        funnel: JSON.stringify(updatedFunnel)
      };
      isSaving.value = true;
      wp.ajax.post(ajaxData).done(() => {
        overviewStore.updateFunnel(updatedFunnel);
        editingFunnelId.value = null;
        editFunnelSteps.value = [];
        showSuccessToast({
          message: sprintf(
            /* translators: %s - funnel name */
            __('Funnel "%s" has been updated successfully.', "google-analytics-for-wordpress"),
            updatedFunnel.name
          )
        });
      }).fail(() => {
        showErrorToast({
          message: __("Failed to update funnel. Please try again.", "google-analytics-for-wordpress")
        });
      }).always(() => {
        isSaving.value = false;
      });
    };
    const deleteFunnel = (funnelId) => {
      const ajaxData = {
        action: "monsterinsights_overview_report_delete_funnel_filter",
        nonce: getMiGlobal("nonce", ""),
        funnel_id: funnelId
      };
      wp.ajax.post(ajaxData).done(() => {
        overviewStore.removeFunnel(funnelId);
        if (editingFunnelId.value === funnelId) {
          editingFunnelId.value = null;
          editFunnelSteps.value = [];
        }
        showSuccessToast({
          message: __("Funnel deleted successfully.", "google-analytics-for-wordpress")
        });
      }).fail(() => {
        showErrorToast({
          message: __("Failed to delete funnel. Please try again.", "google-analytics-for-wordpress")
        });
      });
    };
    const clearForm = () => {
      resetNewFunnelForm();
      editingFunnelId.value = null;
      editFunnelSteps.value = [];
    };
    const fetchSavedFunnels = () => {
      const ajaxData = {
        action: "monsterinsights_overview_report_get_funnel_filters",
        nonce: getMiGlobal("nonce", "")
      };
      wp.ajax.post(ajaxData).done((response) => {
        if (response && response.funnels) {
          overviewStore.setFunnels(response.funnels);
        }
      }).fail(() => {
        overviewStore.setFunnels([]);
      });
    };
    onMounted(() => {
      fetchSavedFunnels();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        open: __props.isOpen,
        "overlay-class": "monsterinsights-funnel-modal-overlay",
        "panel-class": "monsterinsights-funnel-modal",
        labelledby: "funnel-modal-title",
        onClose: closeModal
      }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            type: "button",
            class: "monsterinsights-funnel-modal__close",
            "aria-label": unref(__)("Close funnel panel", "google-analytics-for-wordpress"),
            onClick: closeModal
          }, [
            createVNode(Icon, {
              name: "close",
              size: 16
            })
          ], 8, _hoisted_1),
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("h2", _hoisted_3, toDisplayString(unref(__)("Manage Funnels", "google-analytics-for-wordpress")), 1),
            createBaseVNode("button", {
              type: "button",
              class: "monsterinsights-funnel-modal__clear-all",
              onClick: clearForm
            }, toDisplayString(unref(__)("Clear All", "google-analytics-for-wordpress")), 1)
          ]),
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("h3", _hoisted_6, toDisplayString(unref(__)("Create New Funnel", "google-analytics-for-wordpress")), 1),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("label", _hoisted_8, toDisplayString(unref(__)("Funnel Name", "google-analytics-for-wordpress")), 1),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newFunnelName.value = $event),
                  type: "text",
                  class: "monsterinsights-funnel-modal__name-input",
                  placeholder: unref(__)("e.g. Checkout Funnel", "google-analytics-for-wordpress")
                }, null, 8, _hoisted_9), [
                  [vModelText, newFunnelName.value]
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", _hoisted_11, toDisplayString(unref(__)("Funnel Steps (Min 2)", "google-analytics-for-wordpress")), 1),
              createBaseVNode("div", _hoisted_12, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(newFunnelSteps.value, (step, index) => {
                  return openBlock(), createElementBlock("div", {
                    key: index,
                    class: "monsterinsights-funnel-modal__step-row"
                  }, [
                    createBaseVNode("span", _hoisted_13, toDisplayString(index + 1) + ".", 1),
                    createBaseVNode("div", _hoisted_14, [
                      withDirectives(createBaseVNode("select", {
                        "onUpdate:modelValue": ($event) => step.type = $event,
                        class: "monsterinsights-funnel-modal__select"
                      }, [
                        (openBlock(), createElementBlock(Fragment, null, renderList(stepTypeOptions, (opt) => {
                          return createBaseVNode("option", {
                            key: opt.value,
                            value: opt.value
                          }, toDisplayString(opt.label), 9, _hoisted_16);
                        }), 64))
                      ], 8, _hoisted_15), [
                        [vModelSelect, step.type]
                      ]),
                      createVNode(Icon, {
                        name: "chevron-down",
                        size: 16
                      })
                    ]),
                    createBaseVNode("div", _hoisted_17, [
                      withDirectives(createBaseVNode("input", {
                        "onUpdate:modelValue": ($event) => step.value = $event,
                        type: "text",
                        class: "monsterinsights-funnel-modal__step-input",
                        placeholder: step.type === "page" ? texts.pagePathPlaceholder : texts.eventNamePlaceholder
                      }, null, 8, _hoisted_18), [
                        [vModelText, step.value]
                      ])
                    ]),
                    createBaseVNode("button", {
                      type: "button",
                      class: "monsterinsights-funnel-modal__step-delete",
                      onClick: ($event) => removeNewStep(index)
                    }, [
                      createVNode(Icon, {
                        name: "trash",
                        size: 16
                      })
                    ], 8, _hoisted_19)
                  ]);
                }), 128))
              ]),
              createBaseVNode("div", _hoisted_20, [
                createBaseVNode("button", {
                  type: "button",
                  class: "monsterinsights-funnel-modal__add-step-btn",
                  onClick: addNewStep
                }, [
                  createVNode(Icon, {
                    name: "plus",
                    size: 20
                  }),
                  createBaseVNode("span", null, toDisplayString(unref(__)("Add Step", "google-analytics-for-wordpress")), 1)
                ]),
                createBaseVNode("button", {
                  type: "button",
                  class: "monsterinsights-funnel-modal__create-btn",
                  disabled: isSaving.value,
                  onClick: createFunnel
                }, toDisplayString(isSaving.value ? unref(__)("Creating...", "google-analytics-for-wordpress") : unref(__)("Create Funnel", "google-analytics-for-wordpress")), 9, _hoisted_21)
              ])
            ])
          ]),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-funnel-modal__divider" }, null, -1)),
          createBaseVNode("div", _hoisted_22, [
            createBaseVNode("h3", _hoisted_23, toDisplayString(unref(__)("Your Saved Funnels", "google-analytics-for-wordpress")), 1),
            unref(overviewStore).funnels.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
              createVNode(Icon, {
                name: "no-saved-filters",
                size: 64
              }),
              createBaseVNode("p", null, toDisplayString(unref(__)("No funnels found", "google-analytics-for-wordpress")), 1)
            ])) : (openBlock(), createElementBlock("div", _hoisted_25, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(overviewStore).funnels, (savedFunnel) => {
                return openBlock(), createElementBlock("div", {
                  key: savedFunnel.id,
                  class: normalizeClass(["monsterinsights-funnel-modal__saved-item", {
                    "monsterinsights-funnel-modal__saved-item--applied": savedFunnel.id === unref(overviewStore).activeFunnelId,
                    "monsterinsights-funnel-modal__saved-item--editing": editingFunnelId.value === savedFunnel.id
                  }]),
                  onMouseenter: ($event) => hoveredFunnelId.value = savedFunnel.id,
                  onMouseleave: _cache[1] || (_cache[1] = ($event) => hoveredFunnelId.value = null)
                }, [
                  createBaseVNode("div", _hoisted_27, [
                    createBaseVNode("div", _hoisted_28, [
                      createBaseVNode("span", _hoisted_29, toDisplayString(savedFunnel.name), 1),
                      createBaseVNode("span", _hoisted_30, toDisplayString(unref(sprintf)(
                        /* translators: %d - number of steps */
                        unref(__)("%d Steps", "google-analytics-for-wordpress"),
                        savedFunnel.steps ? savedFunnel.steps.length : 0
                      )), 1),
                      savedFunnel.id === unref(overviewStore).activeFunnelId ? (openBlock(), createElementBlock("span", _hoisted_31, toDisplayString(unref(__)("Applied", "google-analytics-for-wordpress")), 1)) : hoveredFunnelId.value === savedFunnel.id && editingFunnelId.value !== savedFunnel.id ? (openBlock(), createElementBlock("span", {
                        key: 1,
                        class: "monsterinsights-funnel-modal__saved-item-status monsterinsights-funnel-modal__saved-item-status--apply",
                        onClick: ($event) => applySavedFunnel(savedFunnel)
                      }, toDisplayString(unref(__)("Apply", "google-analytics-for-wordpress")), 9, _hoisted_32)) : createCommentVNode("", true)
                    ]),
                    createBaseVNode("div", _hoisted_33, [
                      isDefaultFunnel(savedFunnel.id) ? (openBlock(), createElementBlock("span", _hoisted_34, toDisplayString(unref(__)("Default", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true),
                      !isDefaultFunnel(savedFunnel.id) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "monsterinsights-funnel-modal__saved-item-btn",
                          onClick: ($event) => toggleEditFunnel(savedFunnel)
                        }, [
                          createVNode(Icon, {
                            name: "pencil",
                            size: 16
                          })
                        ], 8, _hoisted_35),
                        createBaseVNode("button", {
                          type: "button",
                          class: "monsterinsights-funnel-modal__saved-item-btn",
                          onClick: ($event) => deleteFunnel(savedFunnel.id)
                        }, [
                          createVNode(Icon, {
                            name: "trash",
                            size: 16
                          })
                        ], 8, _hoisted_36)
                      ], 64)) : createCommentVNode("", true)
                    ])
                  ]),
                  editingFunnelId.value === savedFunnel.id ? (openBlock(), createElementBlock("div", _hoisted_37, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(editFunnelSteps.value, (editStep, editIndex) => {
                      return openBlock(), createElementBlock("div", {
                        key: editIndex,
                        class: "monsterinsights-funnel-modal__step-row"
                      }, [
                        createBaseVNode("span", _hoisted_38, toDisplayString(editIndex + 1) + ".", 1),
                        createBaseVNode("div", _hoisted_39, [
                          withDirectives(createBaseVNode("select", {
                            "onUpdate:modelValue": ($event) => editStep.type = $event,
                            class: "monsterinsights-funnel-modal__select"
                          }, [
                            (openBlock(), createElementBlock(Fragment, null, renderList(stepTypeOptions, (opt) => {
                              return createBaseVNode("option", {
                                key: opt.value,
                                value: opt.value
                              }, toDisplayString(opt.label), 9, _hoisted_41);
                            }), 64))
                          ], 8, _hoisted_40), [
                            [vModelSelect, editStep.type]
                          ]),
                          createVNode(Icon, {
                            name: "chevron-down",
                            size: 16
                          })
                        ]),
                        createBaseVNode("div", _hoisted_42, [
                          withDirectives(createBaseVNode("input", {
                            "onUpdate:modelValue": ($event) => editStep.value = $event,
                            type: "text",
                            class: "monsterinsights-funnel-modal__step-input",
                            placeholder: editStep.type === "page" ? texts.pagePathPlaceholder : texts.eventNamePlaceholder
                          }, null, 8, _hoisted_43), [
                            [vModelText, editStep.value]
                          ])
                        ]),
                        editFunnelSteps.value.length > 2 ? (openBlock(), createElementBlock("button", {
                          key: 0,
                          type: "button",
                          class: "monsterinsights-funnel-modal__step-delete",
                          onClick: ($event) => removeEditStep(editIndex)
                        }, [
                          createVNode(Icon, {
                            name: "trash",
                            size: 16
                          })
                        ], 8, _hoisted_44)) : createCommentVNode("", true)
                      ]);
                    }), 128)),
                    createBaseVNode("div", _hoisted_45, [
                      createBaseVNode("button", {
                        type: "button",
                        class: "monsterinsights-funnel-modal__add-step-btn monsterinsights-funnel-modal__add-step-btn--sm",
                        onClick: addEditStep
                      }, [
                        createVNode(Icon, {
                          name: "plus",
                          size: 20
                        }),
                        createBaseVNode("span", null, toDisplayString(unref(__)("Add Step", "google-analytics-for-wordpress")), 1)
                      ]),
                      createBaseVNode("button", {
                        type: "button",
                        class: "monsterinsights-funnel-modal__save-edit-btn",
                        disabled: isSaving.value,
                        onClick: ($event) => saveEditFunnel(savedFunnel.id)
                      }, toDisplayString(isSaving.value ? unref(__)("Saving...", "google-analytics-for-wordpress") : unref(__)("Save", "google-analytics-for-wordpress")), 9, _hoisted_46)
                    ])
                  ])) : createCommentVNode("", true)
                ], 42, _hoisted_26);
              }), 128))
            ]))
          ])
        ]),
        _: 1
      }, 8, ["open"]);
    };
  }
};
export {
  _sfc_main as _
};
