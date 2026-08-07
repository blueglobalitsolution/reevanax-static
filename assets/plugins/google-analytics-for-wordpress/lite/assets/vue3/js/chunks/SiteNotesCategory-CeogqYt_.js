import { o as openBlock, c as createElementBlock, w as withDirectives, v as vModelText, a as createBaseVNode, B as withModifiers, i as normalizeClass, F as Fragment, f as renderList, n as normalizeStyle, s as createCommentVNode, m as computed, j as ref, y as onMounted, t as toDisplayString, u as unref, E as createBlock, az as getUpgradeUrl, b as createVNode, D as withCtx, Z as isPro } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$3 } from "./SettingsBlock-DC9CU9Pg.js";
import { b as saveCategory, g as getCategories } from "./siteNotes-CUK65xMh.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./ajax-B_XS1gT5.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1$2 = { class: "color-picker-predefined" };
const _hoisted_2$2 = { class: "color-picker-predefined__list main-list" };
const _hoisted_3$2 = ["onClick"];
const _hoisted_4$2 = {
  key: 0,
  class: "color-picker-predefined__list additional-list"
};
const _hoisted_5$2 = ["onClick"];
const _sfc_main$2 = {
  __name: "ColorPickerPredefined",
  props: {
    modelValue: { type: String, default: "" },
    predefined: {
      type: Array,
      default: () => [
        "#E9AF00",
        "#FF893A",
        "#F072B2",
        "#8D87E5",
        "#1EC185",
        "#26A69A",
        "#754FF6",
        "#1230DF",
        "#8BB1FA",
        "#5195D8",
        "#497FB2",
        "#55B9D1",
        "#E432E3",
        "#D32D1F",
        "#8D0F03",
        "#A8803D",
        "#A8AFB6",
        "#697683"
      ]
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const isOpen = ref(false);
    const innerValue = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val)
    });
    function chooseColor(color) {
      innerValue.value = color;
      isOpen.value = false;
    }
    function itemClass(color) {
      return innerValue.value === color ? "selected" : "";
    }
    function toggleList() {
      isOpen.value = !isOpen.value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => innerValue.value = $event),
          type: "hidden"
        }, null, 512), [
          [vModelText, innerValue.value]
        ]),
        createBaseVNode("a", {
          href: "#",
          class: normalizeClass("color-picker-predefined-" + (isOpen.value ? "hide" : "show")),
          onClick: withModifiers(toggleList, ["prevent"])
        }, null, 2),
        createBaseVNode("div", _hoisted_2$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.predefined.slice(0, 6), (item, index) => {
            return openBlock(), createElementBlock("a", {
              key: index,
              href: "#",
              class: normalizeClass(itemClass(item)),
              style: normalizeStyle({ backgroundColor: item }),
              onClick: withModifiers(($event) => chooseColor(item), ["prevent"])
            }, null, 14, _hoisted_3$2);
          }), 128))
        ]),
        isOpen.value ? (openBlock(), createElementBlock("div", _hoisted_4$2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.predefined.slice(6, 18), (item, index) => {
            return openBlock(), createElementBlock("a", {
              key: index,
              href: "#",
              class: normalizeClass(itemClass(item)),
              style: normalizeStyle({ backgroundColor: item }),
              onClick: withModifiers(($event) => chooseColor(item), ["prevent"])
            }, null, 14, _hoisted_5$2);
          }), 128))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-flex-container" };
const _hoisted_2$1 = { class: "settings-input" };
const _hoisted_3$1 = ["for", "textContent"];
const _hoisted_4$1 = ["id", "disabled"];
const _hoisted_5$1 = { class: "settings-input" };
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = { class: "monsterinsights-row" };
const _hoisted_8$1 = ["disabled", "textContent"];
const _hoisted_9$1 = ["disabled", "textContent"];
const _sfc_main$1 = {
  __name: "SiteNotesCategoryCreate",
  props: {
    selectedCategory: {
      type: Object,
      default: () => ({ id: null, name: "", background_color: "#E9AF00" })
    }
  },
  emits: ["monsterinsights-site-notes-category-update", "site-note-category-cancel"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const { successToast, errorToast } = useToast();
    const text_category_name = __("Category Name", "google-analytics-for-wordpress");
    const text_category_background_color = __("Select Color", "google-analytics-for-wordpress");
    const text_category_add_button = __("Add New Category", "google-analytics-for-wordpress");
    const text_category_edit_button = __("Save Changes", "google-analytics-for-wordpress");
    const text_cancel = __("Cancel", "google-analytics-for-wordpress");
    const hash = ref(null);
    const isLoading = ref(false);
    const category = ref({ id: null, name: "", background_color: "#E9AF00" });
    const mainClass = computed(() => {
      return "monsterinsights-site-notes-category__create-form" + (isLoading.value ? " monsterinsights-form-loading" : "");
    });
    function prefix(str) {
      return hash.value + "_" + str;
    }
    function save() {
      isLoading.value = true;
      saveCategory(category.value).then((result) => {
        if (result?.published) {
          successToast({
            title: __("Site note category is added successfully.", "google-analytics-for-wordpress")
          });
          emit("monsterinsights-site-notes-category-update", result.id);
        } else {
          errorToast({
            title: result?.message || __("Error saving category", "google-analytics-for-wordpress")
          });
        }
      }).catch((error) => {
        errorToast({
          title: error?.title || error?.message || __("Error saving category", "google-analytics-for-wordpress")
        });
      }).finally(() => {
        isLoading.value = false;
        category.value.name = "";
        category.value.background_color = "";
      });
    }
    function cancel() {
      emit("site-note-category-cancel");
    }
    onMounted(() => {
      hash.value = Math.floor(Math.random() * 1e8);
      if (props.selectedCategory?.id) {
        category.value = { ...props.selectedCategory };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(mainClass.value)
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("label", {
              for: prefix("category_name"),
              textContent: toDisplayString(unref(text_category_name))
            }, null, 8, _hoisted_3$1),
            withDirectives(createBaseVNode("input", {
              id: prefix("category_name"),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => category.value.name = $event),
              type: "text",
              disabled: isLoading.value
            }, null, 8, _hoisted_4$1), [
              [vModelText, category.value.name]
            ])
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("label", {
              textContent: toDisplayString(unref(text_category_background_color))
            }, null, 8, _hoisted_6$1),
            !isLoading.value ? (openBlock(), createBlock(_sfc_main$2, {
              key: 0,
              modelValue: category.value.background_color,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => category.value.background_color = $event)
            }, null, 8, ["modelValue"])) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("button", {
            disabled: isLoading.value,
            class: "monsterinsights-button",
            onClick: save,
            textContent: toDisplayString(category.value.id ? unref(text_category_edit_button) : unref(text_category_add_button))
          }, null, 8, _hoisted_8$1),
          createBaseVNode("button", {
            disabled: isLoading.value,
            class: "monsterinsights-notes-button monsterinsights-notes-button-grey",
            onClick: withModifiers(cancel, ["prevent"]),
            textContent: toDisplayString(unref(text_cancel))
          }, null, 8, _hoisted_9$1)
        ])
      ], 2);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-site-notes-category__create" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "monsterinsights-site-notes-category__list" };
const _hoisted_5 = {
  key: 0,
  class: "monsterinsights-loader"
};
const _hoisted_6 = {
  key: 1,
  class: "progress-bar is-danger"
};
const _hoisted_7 = {
  key: 2,
  class: "monsterinsights-site-notes-category__list-items"
};
const _hoisted_8 = { class: "monsterinsights-site-notes-category__list-item" };
const _hoisted_9 = { class: "monsterinsights-category-title-column" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = {
  key: 0,
  class: "monsterinsights-site-notes-category__list-item"
};
const _hoisted_12 = ["onClick"];
const _hoisted_13 = { class: "monsterinsights-category-title-column" };
const _hoisted_14 = ["textContent"];
const _hoisted_15 = { class: "monsterinsights-links" };
const _hoisted_16 = ["onClick"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["onClick"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = {
  key: 1,
  class: "monsterinsights-site-notes-category__list-item edit-category-row"
};
const _hoisted_21 = {
  key: 1,
  class: "monsterinsights-site-notes-category__list-item"
};
const _hoisted_22 = {
  key: 3,
  class: "progress-bar is-danger"
};
const _hoisted_23 = {
  key: 0,
  class: "monsterinsights-site-notes-upsell monsterinsights-bg-upsell-categories"
};
const _hoisted_24 = { class: "monsterinsights-site-notes-upsell-window" };
const _hoisted_25 = ["textContent"];
const _hoisted_26 = ["innerHTML"];
const _hoisted_27 = { class: "monsterinsights-plus-list" };
const _hoisted_28 = ["textContent"];
const _hoisted_29 = ["href", "textContent"];
const _hoisted_30 = ["href", "textContent"];
const _sfc_main = {
  __name: "SiteNotesCategory",
  setup(__props) {
    const { __ } = wp.i18n;
    const pro = isPro();
    const upgradeUrl = getUpgradeUrl("site-notes", "category-overlay-button");
    useToast();
    const text_category_add = __("Site Note Category", "google-analytics-for-wordpress");
    const text_category_name = __("Category", "google-analytics-for-wordpress");
    const text_category_add_button = __("Add New Category", "google-analytics-for-wordpress");
    const text_category_edit = __("Edit", "google-analytics-for-wordpress");
    const text_category_delete = __("Delete", "google-analytics-for-wordpress");
    const text_create_description = __("Site note categories help you keep track of related site notes so that you can see how particular types of events affect your website.", "google-analytics-for-wordpress");
    const text_no_categories = __("There aren’t any categories. Go ahead and create one!", "google-analytics-for-wordpress");
    const upsell = {
      title: __("Upgrade to MonsterInsights Pro", "google-analytics-for-wordpress"),
      subtitle: __("Create your own categories, add colors, and export your site notes with MonsterInsights Pro.", "google-analytics-for-wordpress"),
      unlock: __("Upgrade and Unlock", "google-analytics-for-wordpress"),
      view_all: __("View all Pro features", "google-analytics-for-wordpress"),
      features: [
        __("Export all of your site notes", "google-analytics-for-wordpress"),
        __("Create customizable categories", "google-analytics-for-wordpress"),
        __("Add screenshots and media to your notes", "google-analytics-for-wordpress"),
        __("Add custom colors to categories", "google-analytics-for-wordpress")
      ]
    };
    const showProgressBar = ref(false);
    const deletingIds = ref([]);
    const categories = ref({ items: [], pagination: null, status_filters: null });
    const selectedCategory = ref(null);
    const categoryCreateShown = ref(false);
    function fetchCategories() {
      categories.value = { items: [], pagination: null, status_filters: null };
      showProgressBar.value = true;
      getCategories({ page: 1, orderby: "id", order: "desc" }).then((result) => {
        categories.value = result || { items: [] };
      }).catch(() => {
        categories.value = { items: [] };
      }).finally(() => {
        showProgressBar.value = false;
        closeEdit();
      });
    }
    function deleteCategory(categoryIds) {
      return;
    }
    function onCategoryUpdated() {
      categoryCreateShown.value = false;
      fetchCategories();
    }
    function closeEdit() {
      selectedCategory.value = null;
    }
    function setSelectedCategory(category) {
      selectedCategory.value = category;
    }
    function isSelectedCategory(id) {
      return selectedCategory.value && id === selectedCategory.value.id;
    }
    function getCategoryColorStyle(category) {
      if (!category || !category.background_color) return {};
      return { backgroundColor: category.background_color };
    }
    onMounted(() => {
      fetchCategories();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["monsterinsights-site-notes-category", { "monsterinsights-site-notes-category--lite": !unref(pro) }])
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["monsterinsights-site-notes-wrapper", { "monsterinsights-site-notes-wrapper-lite": !unref(pro) }])
        }, [
          createVNode(_sfc_main$3, {
            title: unref(text_category_add),
            icon: "monsterinsights-icon-note"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                createBaseVNode("div", {
                  class: "monsterinsights-site-notes-category__create-description",
                  textContent: toDisplayString(unref(text_create_description))
                }, null, 8, _hoisted_2),
                !categoryCreateShown.value ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "monsterinsights-button",
                  onClick: _cache[0] || (_cache[0] = ($event) => categoryCreateShown.value = true),
                  textContent: toDisplayString(unref(text_category_add_button))
                }, null, 8, _hoisted_3)) : createCommentVNode("", true),
                categoryCreateShown.value ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 1,
                  onMonsterinsightsSiteNotesCategoryUpdate: onCategoryUpdated,
                  onSiteNoteCategoryCancel: _cache[1] || (_cache[1] = ($event) => categoryCreateShown.value = false)
                })) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_4, [
                showProgressBar.value ? (openBlock(), createElementBlock("div", _hoisted_5)) : createCommentVNode("", true),
                deletingIds.value.length ? (openBlock(), createElementBlock("div", _hoisted_6)) : createCommentVNode("", true),
                !showProgressBar.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                  createBaseVNode("div", _hoisted_8, [
                    createBaseVNode("div", _hoisted_9, [
                      createBaseVNode("div", {
                        class: "monsterinsights-category-title",
                        textContent: toDisplayString(unref(text_category_name))
                      }, null, 8, _hoisted_10)
                    ])
                  ]),
                  categories.value.items && categories.value.items.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(categories.value.items, (category) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: category.id
                    }, [
                      !isSelectedCategory(category.id) ? (openBlock(), createElementBlock("div", _hoisted_11, [
                        createBaseVNode("a", {
                          href: "#",
                          class: "monsterinsights-category-color",
                          onClick: withModifiers(($event) => setSelectedCategory(category), ["prevent"])
                        }, [
                          createBaseVNode("span", {
                            class: "monsterinsights-category-trigger",
                            style: normalizeStyle(getCategoryColorStyle(category))
                          }, null, 4)
                        ], 8, _hoisted_12),
                        createBaseVNode("div", _hoisted_13, [
                          createBaseVNode("div", {
                            class: "monsterinsights-category-title",
                            textContent: toDisplayString(category.name)
                          }, null, 8, _hoisted_14),
                          createBaseVNode("div", _hoisted_15, [
                            createBaseVNode("a", {
                              href: "#",
                              onClick: withModifiers(($event) => setSelectedCategory(category), ["prevent"])
                            }, [
                              createBaseVNode("span", {
                                textContent: toDisplayString(unref(text_category_edit))
                              }, null, 8, _hoisted_17)
                            ], 8, _hoisted_16),
                            createBaseVNode("a", {
                              href: "#",
                              class: "delete",
                              onClick: withModifiers(($event) => deleteCategory(category.id), ["prevent"])
                            }, [
                              createBaseVNode("span", {
                                textContent: toDisplayString(unref(text_category_delete))
                              }, null, 8, _hoisted_19)
                            ], 8, _hoisted_18)
                          ])
                        ])
                      ])) : (openBlock(), createElementBlock("div", _hoisted_20, [
                        createVNode(_sfc_main$1, {
                          "selected-category": selectedCategory.value,
                          onMonsterinsightsSiteNotesCategoryUpdate: onCategoryUpdated,
                          onSiteNoteCategoryCancel: closeEdit
                        }, null, 8, ["selected-category"])
                      ]))
                    ], 64);
                  }), 128)) : (openBlock(), createElementBlock("div", _hoisted_21, [
                    createBaseVNode("span", null, toDisplayString(unref(text_no_categories)), 1)
                  ]))
                ])) : createCommentVNode("", true),
                deletingIds.value.length ? (openBlock(), createElementBlock("div", _hoisted_22)) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["title"])
        ], 2),
        !unref(pro) ? (openBlock(), createElementBlock("div", _hoisted_23, [
          createBaseVNode("div", _hoisted_24, [
            createBaseVNode("h2", {
              textContent: toDisplayString(upsell.title)
            }, null, 8, _hoisted_25),
            createBaseVNode("p", {
              innerHTML: upsell.subtitle
            }, null, 8, _hoisted_26),
            createBaseVNode("ul", _hoisted_27, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(upsell.features, (feature, index) => {
                return openBlock(), createElementBlock("li", {
                  key: index,
                  textContent: toDisplayString(feature)
                }, null, 8, _hoisted_28);
              }), 128))
            ]),
            createBaseVNode("a", {
              href: unref(upgradeUrl),
              target: "_blank",
              rel: "noopener",
              class: "monsterinsights-button monsterinsights-button-large",
              textContent: toDisplayString(upsell.unlock)
            }, null, 8, _hoisted_29),
            _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("a", {
              href: unref(upgradeUrl),
              target: "_blank",
              rel: "noopener",
              class: "monsterinsights-button-text",
              textContent: toDisplayString(upsell.view_all)
            }, null, 8, _hoisted_30)
          ])
        ])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
export {
  _sfc_main as default
};
