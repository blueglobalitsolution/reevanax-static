import { y as onMounted, C as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, w as withDirectives, P as vModelSelect, F as Fragment, f as renderList, s as createCommentVNode, i as normalizeClass, v as vModelText, G as withKeys, A as createTextVNode, j as ref, L as reactive, m as computed, B as withModifiers, aF as vModelCheckbox, K as renderSlot, a3 as useSlots, E as createBlock, D as withCtx, u as unref, b as createVNode, az as getUpgradeUrl, k as getMiGlobal, Z as isPro$1 } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$a } from "./SettingsBlock-DC9CU9Pg.js";
import { q as sanitizeHtml, k as isPro } from "./ajax-B_XS1gT5.js";
import { C as Component } from "./flatpickr-CNAtgokQ.js";
import { g as getCategories, s as saveNote, a as getNotes, t as trashNotes, r as restoreNotes, d as deleteNotes, e as exportNotes, i as importNotes } from "./siteNotes-CUK65xMh.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1$8 = { class: "admin-table__navigation tablenav" };
const _hoisted_2$8 = {
  key: 0,
  class: "alignleft actions bulkactions"
};
const _hoisted_3$8 = {
  for: "bulk-action-selector-top",
  class: "screen-reader-text"
};
const _hoisted_4$8 = { value: "-1" };
const _hoisted_5$7 = ["value"];
const _hoisted_6$7 = ["value"];
const _hoisted_7$7 = {
  key: 1,
  class: "alignleft filters"
};
const _hoisted_8$5 = ["onUpdate:modelValue", "name"];
const _hoisted_9$4 = ["value", "textContent"];
const _hoisted_10$3 = {
  key: 0,
  class: "pagination-links"
};
const _hoisted_11$2 = { class: "screen-reader-text" };
const _hoisted_12$2 = { class: "screen-reader-text" };
const _hoisted_13$2 = { class: "paging-input" };
const _hoisted_14$2 = {
  for: "current-page-selector",
  class: "screen-reader-text"
};
const _hoisted_15$2 = ["max"];
const _hoisted_16$2 = { class: "tablenav-paging-text" };
const _hoisted_17$1 = { class: "total-pages" };
const _hoisted_18$1 = { class: "screen-reader-text" };
const _hoisted_19 = { class: "screen-reader-text" };
const _hoisted_20 = {
  key: 2,
  class: "alignright filters search-filters"
};
const _hoisted_21 = ["placeholder"];
const _sfc_main$9 = {
  __name: "AdminTableNavigation",
  props: {
    selectedAction: { type: [String, Number], default: -1 },
    bulkActions: { type: Array, default: () => [] },
    filters: { type: Array, default: () => [] },
    pagination: { type: Object, default: () => ({}) },
    allowSearch: { type: Boolean, default: false }
  },
  emits: ["update:selectedAction", "apply-action", "filter-values", "page-change", "search"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const currentPage = ref(1);
    const filterValues = reactive({});
    const keywords = ref("");
    let keywordsTimeout = null;
    const texts = {
      selectBulkAction: __("Select bulk action", "google-analytics-for-wordpress"),
      bulkActions: __("Bulk Actions", "google-analytics-for-wordpress"),
      apply: __("Apply", "google-analytics-for-wordpress"),
      currentPage: __("Current Page", "google-analytics-for-wordpress"),
      firstPage: __("First Page", "google-analytics-for-wordpress"),
      prevPage: __("Previous Page", "google-analytics-for-wordpress"),
      nextPage: __("Next Page", "google-analytics-for-wordpress"),
      lastPage: __("Last Page", "google-analytics-for-wordpress"),
      of: __("of", "google-analytics-for-wordpress"),
      search_placeholder: __("Search..", "google-analytics-for-wordpress")
    };
    const ownSelectedAction = computed({
      get: () => props.selectedAction,
      set: (val) => emit("update:selectedAction", val)
    });
    function goToPrev() {
      emit("page-change", Number.parseInt(props.pagination.page) - 1);
    }
    function goToNext() {
      emit("page-change", Number.parseInt(props.pagination.page) + 1);
    }
    function goToPage(page) {
      emit("page-change", page);
    }
    function emitKeywords() {
      clearTimeout(keywordsTimeout);
      keywordsTimeout = setTimeout(() => {
        emit("search", keywords.value);
      }, 500);
    }
    onMounted(() => {
      currentPage.value = props.pagination.page;
      if (!props.filters) return;
      props.filters.forEach((filter) => {
        filterValues[filter.id] = 0;
      });
    });
    watch(() => props.pagination.page, (val) => {
      currentPage.value = val;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        __props.bulkActions.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
          createBaseVNode("label", _hoisted_3$8, toDisplayString(texts.selectBulkAction), 1),
          withDirectives(createBaseVNode("select", {
            id: "bulk-action-selector-top",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ownSelectedAction.value = $event),
            name: "action"
          }, [
            createBaseVNode("option", _hoisted_4$8, toDisplayString(texts.bulkActions), 1),
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.bulkActions, (action) => {
              return openBlock(), createElementBlock("option", {
                key: action.value,
                value: action.value
              }, toDisplayString(action.label), 9, _hoisted_5$7);
            }), 128))
          ], 512), [
            [vModelSelect, ownSelectedAction.value]
          ]),
          createBaseVNode("input", {
            id: "doaction",
            type: "button",
            class: "button action",
            value: texts.apply,
            onClick: _cache[1] || (_cache[1] = ($event) => emit("apply-action"))
          }, null, 8, _hoisted_6$7)
        ])) : createCommentVNode("", true),
        __props.filters.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_7$7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.filters, (filter) => {
            return openBlock(), createElementBlock("div", {
              key: filter.id,
              class: normalizeClass("filter-" + filter.id)
            }, [
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": ($event) => filterValues[filter.id] = $event,
                name: "filter[" + filter.id + "]",
                onChange: _cache[2] || (_cache[2] = ($event) => emit("filter-values", filterValues))
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(filter.options, (option, option_id) => {
                  return openBlock(), createElementBlock("option", {
                    key: option_id,
                    value: option_id,
                    textContent: toDisplayString(option)
                  }, null, 8, _hoisted_9$4);
                }), 128))
              ], 40, _hoisted_8$5), [
                [vModelSelect, filterValues[filter.id]]
              ])
            ], 2);
          }), 128))
        ])) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["tablenav-pages", { "one-page": __props.pagination.pages === 1 }])
        }, [
          __props.pagination.pages > 1 ? (openBlock(), createElementBlock("span", _hoisted_10$3, [
            __props.pagination.page == 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[8] || (_cache[8] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "«", -1)),
              _cache[9] || (_cache[9] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "‹", -1))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("a", {
                class: "first-page button",
                href: "javascript:",
                role: "button",
                onClick: _cache[3] || (_cache[3] = ($event) => goToPage(1))
              }, [
                createBaseVNode("span", _hoisted_11$2, toDisplayString(texts.firstPage), 1),
                _cache[10] || (_cache[10] = createBaseVNode("span", { "aria-hidden": "true" }, "«", -1))
              ]),
              createBaseVNode("a", {
                class: "prev-page button",
                href: "javascript:",
                role: "button",
                onClick: goToPrev
              }, [
                createBaseVNode("span", _hoisted_12$2, toDisplayString(texts.prevPage), 1),
                _cache[11] || (_cache[11] = createBaseVNode("span", { "aria-hidden": "true" }, "‹", -1))
              ])
            ], 64)),
            createBaseVNode("span", _hoisted_13$2, [
              createBaseVNode("label", _hoisted_14$2, toDisplayString(texts.currentPage), 1),
              withDirectives(createBaseVNode("input", {
                id: "current-page-selector",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => currentPage.value = $event),
                class: "current-page",
                type: "text",
                name: "paged",
                size: "1",
                "aria-describedby": "table-paging",
                max: __props.pagination.pages,
                onKeyup: _cache[5] || (_cache[5] = withKeys(($event) => goToPage(currentPage.value), ["enter"]))
              }, null, 40, _hoisted_15$2), [
                [vModelText, currentPage.value]
              ]),
              createBaseVNode("span", _hoisted_16$2, [
                createTextVNode(toDisplayString(texts.of) + " ", 1),
                createBaseVNode("span", _hoisted_17$1, toDisplayString(__props.pagination.pages), 1)
              ])
            ]),
            __props.pagination.page == __props.pagination.pages ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              _cache[12] || (_cache[12] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "›", -1)),
              _cache[13] || (_cache[13] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "»", -1))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createBaseVNode("a", {
                class: "next-page button",
                href: "javascript:",
                role: "button",
                onClick: goToNext
              }, [
                createBaseVNode("span", _hoisted_18$1, toDisplayString(texts.nextPage), 1),
                _cache[14] || (_cache[14] = createBaseVNode("span", { "aria-hidden": "true" }, "›", -1))
              ]),
              createBaseVNode("a", {
                class: "last-page button",
                href: "javascript:",
                role: "button",
                onClick: _cache[6] || (_cache[6] = ($event) => goToPage(__props.pagination.pages))
              }, [
                createBaseVNode("span", _hoisted_19, toDisplayString(texts.lastPage), 1),
                _cache[15] || (_cache[15] = createBaseVNode("span", { "aria-hidden": "true" }, "»", -1))
              ])
            ], 64))
          ])) : createCommentVNode("", true)
        ], 2),
        __props.allowSearch ? (openBlock(), createElementBlock("div", _hoisted_20, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => keywords.value = $event),
            placeholder: texts.search_placeholder,
            type: "search",
            onInput: emitKeywords
          }, null, 40, _hoisted_21), [
            [vModelText, keywords.value]
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$7 = {
  key: 0,
  id: "cb",
  class: "manage-column column-cb check-column"
};
const _hoisted_2$7 = {
  class: "screen-reader-text",
  for: "cb-select-all-1"
};
const _hoisted_3$7 = ["checked"];
const _hoisted_4$7 = ["id"];
const _hoisted_5$6 = ["onClick"];
const _hoisted_6$6 = { key: 1 };
const _hoisted_7$6 = { key: 1 };
const _sfc_main$8 = {
  __name: "AdminTableHead",
  props: {
    allowSelectAll: { type: Boolean, default: true },
    columns: { type: Array, required: true },
    orderby: { type: String, default: "" },
    order: { type: String, default: "desc" },
    hasActionsColumn: { type: Boolean, default: false },
    isSelectingAll: { type: Boolean, default: false }
  },
  emits: ["update:orderby", "update:order", "select-all"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const texts = {
      selectAll: __("Select All", "google-analytics-for-wordpress"),
      actions: __("Actions", "google-analytics-for-wordpress")
    };
    function changeSort(key, e) {
      e.target.closest("a")?.blur();
      if (key === props.orderby) {
        emit("update:order", props.order === "desc" ? "asc" : "desc");
      } else {
        emit("update:orderby", key);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("thead", null, [
        createBaseVNode("tr", null, [
          __props.allowSelectAll ? (openBlock(), createElementBlock("th", _hoisted_1$7, [
            createBaseVNode("label", _hoisted_2$7, toDisplayString(texts.selectAll), 1),
            createBaseVNode("input", {
              id: "cb-select-all-1",
              checked: __props.isSelectingAll,
              type: "checkbox",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("select-all"), ["stop"]))
            }, null, 8, _hoisted_3$7)
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column, index) => {
            return openBlock(), createElementBlock("th", {
              id: column.key,
              key: index,
              scope: "col",
              class: normalizeClass(["manage-column column-title column-primary", { sortable: column.sortable, sorted: __props.orderby === column.key, [__props.order]: true }])
            }, [
              column.sortable ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: "javascript:",
                role: "button",
                onClick: (e) => changeSort(column.key, e)
              }, [
                createBaseVNode("span", null, toDisplayString(typeof column.title === "function" ? column.title() : column.title), 1),
                _cache[1] || (_cache[1] = createBaseVNode("span", { class: "sorting-indicator" }, null, -1))
              ], 8, _hoisted_5$6)) : (openBlock(), createElementBlock("span", _hoisted_6$6, toDisplayString(typeof column.title === "function" ? column.title() : column.title), 1))
            ], 10, _hoisted_4$7);
          }), 128)),
          __props.hasActionsColumn ? (openBlock(), createElementBlock("th", _hoisted_7$6, toDisplayString(texts.actions), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "manage-column column-cb check-column"
};
const _hoisted_2$6 = {
  class: "screen-reader-text",
  for: "cb-select-all-2"
};
const _hoisted_3$6 = ["checked"];
const _hoisted_4$6 = { key: 1 };
const _sfc_main$7 = {
  __name: "AdminTableFoot",
  props: {
    allowSelectAll: { type: Boolean, default: true },
    columns: { type: Array, required: true },
    hasActionsColumn: { type: Boolean, default: false },
    isSelectingAll: { type: Boolean, default: false }
  },
  emits: ["select-all"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const emit = __emit;
    const texts = {
      selectAll: __("Select All", "google-analytics-for-wordpress"),
      actions: __("Actions", "google-analytics-for-wordpress")
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("tfoot", null, [
        createBaseVNode("tr", null, [
          __props.allowSelectAll ? (openBlock(), createElementBlock("td", _hoisted_1$6, [
            createBaseVNode("label", _hoisted_2$6, toDisplayString(texts.selectAll), 1),
            createBaseVNode("input", {
              id: "cb-select-all-2",
              checked: __props.isSelectingAll,
              type: "checkbox",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("select-all"), ["stop"]))
            }, null, 8, _hoisted_3$6)
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column, index) => {
            return openBlock(), createElementBlock("th", {
              key: index,
              scope: "col",
              class: "manage-column column-title column-primary"
            }, [
              createBaseVNode("span", null, toDisplayString(typeof column.title === "function" ? column.title() : column.title), 1)
            ]);
          }), 128)),
          __props.hasActionsColumn ? (openBlock(), createElementBlock("th", _hoisted_4$6, toDisplayString(texts.actions), 1)) : createCommentVNode("", true)
        ])
      ]);
    };
  }
};
const _hoisted_1$5 = {
  key: 0,
  scope: "row",
  class: "check-column"
};
const _hoisted_2$5 = ["for"];
const _hoisted_3$5 = ["id", "name", "value"];
const _hoisted_4$5 = ["innerHTML"];
const _hoisted_5$5 = {
  key: 0,
  class: "row-actions"
};
const _hoisted_6$5 = ["onClick"];
const _hoisted_7$5 = ["href"];
const _hoisted_8$4 = ["innerHTML"];
const _sfc_main$6 = {
  __name: "AdminTableRow",
  props: {
    checkboxGroupName: { type: String, default: "post" },
    selected: { type: Array, required: true },
    item: { type: Object, required: true },
    itemIdAttribute: { type: String, default: "id" },
    columns: { type: Array, required: true },
    rowActions: { type: Array, default: () => [] },
    allowSelect: { type: Boolean, default: true }
  },
  emits: ["update:selected"],
  setup(__props, { emit: __emit }) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const selectedItems = computed({
      get: () => props.selected,
      set: (val) => emit("update:selected", val)
    });
    const rowTitle = computed(() => {
      const titleColumn = props.columns.find((c) => c.isRowTitle);
      return titleColumn ? props.item[titleColumn.key] : "";
    });
    const texts = computed(() => ({
      selectItem: sprintf(__("Select %s", "google-analytics-for-wordpress"), rowTitle.value)
    }));
    function getColumnValue(column) {
      const value = column.value && typeof column.value === "function" ? column.value(props.item) : props.item[column.key];
      return sanitizeHtml(value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("tr", null, [
          __props.allowSelect ? (openBlock(), createElementBlock("th", _hoisted_1$5, [
            createBaseVNode("label", {
              class: "screen-reader-text",
              for: `cb-select-${__props.item[__props.itemIdAttribute]}`
            }, toDisplayString(texts.value.selectItem), 9, _hoisted_2$5),
            withDirectives(createBaseVNode("input", {
              id: `cb-select-${__props.item[__props.itemIdAttribute]}`,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedItems.value = $event),
              type: "checkbox",
              name: `${__props.checkboxGroupName}[]`,
              value: __props.item[__props.itemIdAttribute]
            }, null, 8, _hoisted_3$5), [
              [vModelCheckbox, selectedItems.value]
            ])
          ])) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.columns, (column, index) => {
            return openBlock(), createElementBlock("td", {
              key: index,
              class: normalizeClass([
                { "has-row-actions column-primary page-title": column.isRowTitle },
                `column-cell-${column.key}`
              ])
            }, [
              column.isRowTitle ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                renderSlot(_ctx.$slots, "row-before-title", { item: __props.item }),
                createBaseVNode("span", {
                  class: "row-title",
                  innerHTML: getColumnValue(column)
                }, null, 8, _hoisted_4$5),
                __props.rowActions.length ? (openBlock(), createElementBlock("div", _hoisted_5$5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.rowActions, (action, currentIndex) => {
                    return openBlock(), createElementBlock(Fragment, { key: currentIndex }, [
                      typeof action.hide !== "function" || !action.hide(__props.item) ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: normalizeClass(action.path)
                      }, [
                        action.handle && typeof action.handle === "function" ? (openBlock(), createElementBlock("a", {
                          key: 0,
                          href: "javascript:",
                          onClick: ($event) => action.handle(__props.item[__props.itemIdAttribute])
                        }, [
                          createBaseVNode("span", null, toDisplayString(action.label), 1)
                        ], 8, _hoisted_6$5)) : (openBlock(), createElementBlock("a", {
                          key: 1,
                          href: typeof action.path === "function" ? action.path(__props.item[__props.itemIdAttribute]) : action.path
                        }, [
                          createBaseVNode("span", null, toDisplayString(action.label), 1)
                        ], 8, _hoisted_7$5))
                      ], 2)) : createCommentVNode("", true)
                    ], 64);
                  }), 128))
                ])) : createCommentVNode("", true)
              ], 64)) : (openBlock(), createElementBlock("div", {
                key: 1,
                innerHTML: getColumnValue(column)
              }, null, 8, _hoisted_8$4))
            ], 2);
          }), 128)),
          renderSlot(_ctx.$slots, "row-end-actions", { item: __props.item })
        ]),
        renderSlot(_ctx.$slots, "row-below", { item: __props.item })
      ], 64);
    };
  }
};
const _hoisted_1$4 = {
  key: 0,
  class: "subsubsub"
};
const _hoisted_2$4 = ["onClick"];
const _hoisted_3$4 = { class: "count" };
const _hoisted_4$4 = { class: "wp-list-table widefat striped table-view-list" };
const _hoisted_5$4 = { key: 0 };
const _hoisted_6$4 = ["colspan"];
const _hoisted_7$4 = { class: "admin-table__empty" };
const _hoisted_8$3 = { key: 1 };
const _hoisted_9$3 = ["colspan"];
const _hoisted_10$2 = { class: "admin-table__empty" };
const _sfc_main$5 = {
  __name: "AdminTable",
  props: {
    brandTable: { type: Boolean, default: false },
    checkboxGroupName: { type: String, default: "post" },
    itemIdAttribute: { type: String, default: "id" },
    allowSelectAll: { type: Boolean, default: true },
    allowItemsSelect: { type: Boolean, default: true },
    hasPagination: { type: Boolean, default: true },
    noHeader: { type: Boolean, default: false },
    noFooter: { type: Boolean, default: false },
    columns: {
      type: Array,
      required: true,
      validator(value) {
        return value.every((col) => {
          let isOk = Object.hasOwn(col, "title");
          if (col.sortable || col.isRowTitle) {
            isOk = isOk && Object.hasOwn(col, "key");
          }
          return isOk;
        });
      }
    },
    rowActions: { type: Array, default: () => [] },
    items: { type: Array, required: true },
    bulkActions: { type: Array, default: () => [] },
    filters: { type: Array, default: () => [] },
    pagination: { type: Object, default: () => ({}) },
    quickFilters: {
      type: Array,
      default: () => [],
      validator(value) {
        return value.every((f) => Object.hasOwn(f, "attribute") && Object.hasOwn(f, "value"));
      }
    },
    currentQuickFilter: { type: String, default: "all" },
    isLoading: { type: Boolean, default: false },
    allowSearch: { type: Boolean, default: false }
  },
  emits: [
    "update:currentQuickFilter",
    "quick-filter",
    "sort-change",
    "page-change",
    "search",
    "filter-change"
  ],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const selected = ref([]);
    const orderby = ref(null);
    const order = ref("desc");
    const selectedAction = ref(-1);
    const effectivePagination = computed(() => {
      return props.pagination && Object.keys(props.pagination).length ? props.pagination : { page: 1, pages: 1, per_page: 10, total: 1 };
    });
    const isSelectingAll = computed(() => {
      return props.items.length > 0 && selected.value.length === props.items.length;
    });
    const hasActionsColumn = computed(() => !!slots["row-end-actions"]);
    function getCodedFilter({ attribute, value }) {
      return `${attribute}:${value}`;
    }
    function getFilterClass(filter) {
      const codedFilter = getCodedFilter(filter);
      if (codedFilter === props.currentQuickFilter) return "current";
      return null;
    }
    function applyBulkAction() {
      const action = props.bulkActions.find((a) => a.value === selectedAction.value);
      if (action && typeof action.handle === "function") {
        action.handle(selected.value);
        selected.value = [];
      }
    }
    function applyFilterChange(filterValues) {
      emit("filter-change", filterValues);
    }
    function onSelectAll() {
      if (selected.value.length === props.items.length) {
        selected.value = [];
      } else {
        selected.value = props.items.map((item) => item[props.itemIdAttribute]);
      }
    }
    function emitSortChange() {
      emit("sort-change", { orderby: orderby.value, order: order.value });
    }
    function emitPageChange(page) {
      const newPagination = { ...effectivePagination.value, page };
      emit("page-change", newPagination);
    }
    function applyQuickFilter(filter) {
      const codedFilter = getCodedFilter(filter);
      emit("update:currentQuickFilter", codedFilter);
      emit("quick-filter", codedFilter);
    }
    function emitSearchKeywords(value) {
      emit("search", value);
    }
    watch(() => props.currentQuickFilter, () => {
      selectedAction.value = -1;
      selected.value = [];
    });
    watch(orderby, () => emitSortChange());
    watch(order, () => emitSortChange());
    watch(() => props.quickFilters, (filters) => {
      if (props.currentQuickFilter !== "all" && props.currentQuickFilter !== null) return;
      const allFilter = filters.find((f) => f.value === "all");
      if (allFilter) {
        emit("update:currentQuickFilter", getCodedFilter(allFilter));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["admin-table", { "brand-table": __props.brandTable }])
      }, [
        __props.quickFilters.length && __props.pagination ? (openBlock(), createElementBlock("ul", _hoisted_1$4, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.quickFilters, (filter, index) => {
            return openBlock(), createElementBlock("li", {
              key: index,
              class: normalizeClass(filter.value)
            }, [
              createBaseVNode("a", {
                href: "javascript:",
                class: normalizeClass(["admin-table__quick-filter", getFilterClass(filter)]),
                onClick: ($event) => applyQuickFilter(filter)
              }, [
                createTextVNode(toDisplayString(filter.label) + " ", 1),
                createBaseVNode("span", _hoisted_3$4, "(" + toDisplayString(filter.count) + ")", 1)
              ], 10, _hoisted_2$4)
            ], 2);
          }), 128))
        ])) : createCommentVNode("", true),
        __props.hasPagination ? (openBlock(), createBlock(_sfc_main$9, {
          key: 1,
          class: "top",
          "allow-search": __props.allowSearch,
          "bulk-actions": __props.bulkActions,
          filters: __props.filters,
          pagination: effectivePagination.value,
          "selected-action": selectedAction.value,
          "onUpdate:selectedAction": _cache[0] || (_cache[0] = ($event) => selectedAction.value = $event),
          onSearch: emitSearchKeywords,
          onApplyAction: applyBulkAction,
          onPageChange: emitPageChange,
          onFilterValues: applyFilterChange
        }, null, 8, ["allow-search", "bulk-actions", "filters", "pagination", "selected-action"])) : createCommentVNode("", true),
        createBaseVNode("table", _hoisted_4$4, [
          !__props.noHeader ? (openBlock(), createBlock(_sfc_main$8, {
            key: 0,
            orderby: orderby.value,
            "onUpdate:orderby": _cache[1] || (_cache[1] = ($event) => orderby.value = $event),
            order: order.value,
            "onUpdate:order": _cache[2] || (_cache[2] = ($event) => order.value = $event),
            "has-actions-column": hasActionsColumn.value,
            "is-selecting-all": isSelectingAll.value,
            "allow-select-all": __props.allowSelectAll,
            columns: __props.columns,
            onSelectAll
          }, null, 8, ["orderby", "order", "has-actions-column", "is-selecting-all", "allow-select-all", "columns"])) : createCommentVNode("", true),
          renderSlot(_ctx.$slots, "before-body"),
          createBaseVNode("tbody", null, [
            __props.isLoading ? (openBlock(), createElementBlock("tr", _hoisted_5$4, [
              createBaseVNode("td", {
                colspan: __props.columns.length + 1
              }, [
                createBaseVNode("div", _hoisted_7$4, [
                  renderSlot(_ctx.$slots, "table-loading")
                ])
              ], 8, _hoisted_6$4)
            ])) : !__props.items.length ? (openBlock(), createElementBlock("tr", _hoisted_8$3, [
              createBaseVNode("td", {
                colspan: __props.columns.length + 1
              }, [
                createBaseVNode("div", _hoisted_10$2, [
                  renderSlot(_ctx.$slots, "table-empty")
                ])
              ], 8, _hoisted_9$3)
            ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(__props.items, (item) => {
              return openBlock(), createBlock(_sfc_main$6, {
                key: item[__props.itemIdAttribute],
                item,
                columns: __props.columns,
                selected: selected.value,
                "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => selected.value = $event),
                "checkbox-group-name": __props.checkboxGroupName,
                "item-id-attribute": __props.itemIdAttribute,
                "allow-select": __props.allowItemsSelect,
                "row-actions": __props.rowActions
              }, {
                "row-before-title": withCtx(() => [
                  renderSlot(_ctx.$slots, "row-before-title", { item })
                ]),
                "row-end-actions": withCtx(() => [
                  renderSlot(_ctx.$slots, "row-end-actions", { item })
                ]),
                "row-below": withCtx(() => [
                  renderSlot(_ctx.$slots, "row-below", { item })
                ]),
                _: 2
              }, 1032, ["item", "columns", "selected", "checkbox-group-name", "item-id-attribute", "allow-select", "row-actions"]);
            }), 128))
          ]),
          !__props.noFooter ? (openBlock(), createBlock(_sfc_main$7, {
            key: 1,
            "is-selecting-all": isSelectingAll.value,
            "allow-select-all": __props.allowSelectAll,
            columns: __props.columns,
            "has-actions-column": hasActionsColumn.value,
            onSelectAll
          }, null, 8, ["is-selecting-all", "allow-select-all", "columns", "has-actions-column"])) : createCommentVNode("", true)
        ]),
        __props.hasPagination ? (openBlock(), createBlock(_sfc_main$9, {
          key: 2,
          class: "bottom",
          "bulk-actions": __props.bulkActions,
          filters: __props.filters,
          pagination: effectivePagination.value,
          "selected-action": selectedAction.value,
          "onUpdate:selectedAction": _cache[4] || (_cache[4] = ($event) => selectedAction.value = $event),
          onApplyAction: applyBulkAction,
          onPageChange: emitPageChange
        }, null, 8, ["bulk-actions", "filters", "pagination", "selected-action"])) : createCommentVNode("", true)
      ], 2);
    };
  }
};
const _sfc_main$4 = {
  __name: "SiteNotesDatePickerField",
  props: {
    disabled: { type: Boolean, default: false },
    modelValue: { type: String, default: "" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const today = /* @__PURE__ */ new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
    const innerValue = computed({
      get() {
        return props.modelValue || todayStr;
      },
      set(val) {
        emit("update:modelValue", val);
      }
    });
    const config = {
      dateFormat: "Y-m-d",
      maxDate: "today",
      allowInput: false,
      // Tag the body-appended calendar so its month/year caption styling applies
      // (prevents the header being clipped by flatpickr's fixed-height month row).
      onReady: (_selectedDates, _dateStr, instance) => {
        instance.calendarContainer.classList.add("monsterinsights-site-note-calendar");
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Component), {
        id: "note_date",
        modelValue: innerValue.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => innerValue.value = $event),
        disabled: __props.disabled,
        config,
        class: "monsterinsights-site-notes-datepicker"
      }, null, 8, ["modelValue", "disabled"]);
    };
  }
};
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$3 = ["textContent"];
const _hoisted_3$3 = { class: "site-notes-media-container" };
const _hoisted_4$3 = {
  key: 0,
  class: "inline-fields"
};
const _hoisted_5$3 = { class: "field" };
const _hoisted_6$3 = ["textContent"];
const _hoisted_7$3 = {
  key: 1,
  class: "inline-fields"
};
const _hoisted_8$2 = { class: "field" };
const _hoisted_9$2 = ["textContent"];
const _sfc_main$3 = {
  __name: "SiteNotesMediasField",
  props: {
    modelValue: { type: Object, default: () => ({}) },
    classNames: { type: String, default: "" },
    showLabel: { type: Boolean, default: true }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const pro = isPro();
    const props = __props;
    const emit = __emit;
    const texts = {
      note_medias: __("Media", "google-analytics-for-wordpress"),
      uploadImage: __("Select Media", "google-analytics-for-wordpress"),
      chooseAnother: __("Change Media", "google-analytics-for-wordpress")
    };
    const hasValue = computed(() => {
      return props.modelValue && Object.keys(props.modelValue).length !== 0;
    });
    const uploadedBtnText = computed(() => {
      const first = props.modelValue ? Object.values(props.modelValue)[0] : null;
      if (!first || !first.name) return texts.chooseAnother;
      return first.name.slice(0, 13);
    });
    function uploadImage() {
      if (!window.wp || !window.wp.media) return;
      const fileFrame = window.wp.media({
        title: __("Select or upload image", "google-analytics-for-wordpress"),
        button: { text: __("Set Image", "google-analytics-for-wordpress") },
        multiple: false
      }).on("select", () => {
        const attachments = fileFrame.state().get("selection");
        const medias = {};
        attachments.forEach((item) => {
          const url = item.changed?.url || item.attributes?.url || "";
          const name = item.changed?.filename || item.attributes?.filename || "";
          medias[item.id] = { url, name };
        });
        emit("update:modelValue", medias);
      }).open();
    }
    return (_ctx, _cache) => {
      return !unref(pro) ? (openBlock(), createElementBlock("span", _hoisted_1$3)) : (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(__props.classNames || "settings-input")
      }, [
        __props.showLabel ? (openBlock(), createElementBlock("label", {
          key: 0,
          for: "note_medias",
          textContent: toDisplayString(texts.note_medias)
        }, null, 8, _hoisted_2$3)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_3$3, [
          createBaseVNode("div", null, [
            !hasValue.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
              createBaseVNode("div", _hoisted_5$3, [
                createBaseVNode("a", {
                  href: "#",
                  class: "monsterinsights-upload-button",
                  onClick: withModifiers(uploadImage, ["prevent"]),
                  textContent: toDisplayString(texts.uploadImage)
                }, null, 8, _hoisted_6$3)
              ])
            ])) : createCommentVNode("", true),
            hasValue.value ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
              createBaseVNode("div", _hoisted_8$2, [
                createBaseVNode("a", {
                  href: "#",
                  class: "monsterinsights-upload-button",
                  onClick: withModifiers(uploadImage, ["prevent"]),
                  textContent: toDisplayString(uploadedBtnText.value)
                }, null, 8, _hoisted_9$2)
              ])
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 2));
    };
  }
};
const _hoisted_1$2 = { class: "monsterinsights-site-notes-create-form" };
const _hoisted_2$2 = {
  key: 0,
  class: "monsterinsights-loader is-inline"
};
const _hoisted_3$2 = { class: "monsterinsights-site-notes-create__table-item" };
const _hoisted_4$2 = ["textContent"];
const _hoisted_5$2 = { class: "settings-input monsterinsights-site-notes-create__table-item-note" };
const _hoisted_6$2 = ["placeholder"];
const _hoisted_7$2 = { class: "monsterinsights-flex-container" };
const _hoisted_8$1 = { class: "monsterinsights-site-notes-create__table-item" };
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = { class: "settings-input" };
const _hoisted_11$1 = { class: "monsterinsights-site-notes-create__table-item" };
const _hoisted_12$1 = ["textContent"];
const _hoisted_13$1 = ["textContent"];
const _hoisted_14$1 = ["value", "textContent"];
const _hoisted_15$1 = ["textContent"];
const _hoisted_16$1 = ["textContent"];
const _sfc_main$2 = {
  __name: "SiteNotesCreateForm",
  props: {
    note: {
      type: Object,
      default: () => ({
        id: null,
        note_title: "",
        category: { id: 0 },
        note_date: null,
        note_date_ymd: null,
        important: false,
        medias: {}
      })
    }
  },
  emits: ["site-note-cancel-edit", "site-note-save-success", "site-note-save-after"],
  setup(__props, { emit: __emit }) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const { successToast, errorToast } = useToast();
    const texts = {
      note_date: __("Date", "google-analytics-for-wordpress"),
      note_title: __("Your Note", "google-analytics-for-wordpress"),
      note_category: __("Category", "google-analytics-for-wordpress"),
      note_category_select: __("Select Category", "google-analytics-for-wordpress"),
      save_changes: __("Add Site Note", "google-analytics-for-wordpress"),
      save_changes_update: __("Save Changes", "google-analytics-for-wordpress"),
      cancel: __("Cancel", "google-analytics-for-wordpress"),
      title: __("Title", "google-analytics-for-wordpress")
    };
    const noteCategories = ref([]);
    const isEdit = ref(false);
    const isSaving = ref(false);
    const localNote = ref({
      id: null,
      note_title: "",
      category: { id: 0 },
      note_date: null,
      note_date_ymd: null,
      important: false,
      medias: {}
    });
    const starClasses = computed(() => {
      return "monsterinsights-star" + (!localNote.value.important ? "-empty" : "");
    });
    function fetchCategories() {
      isSaving.value = true;
      getCategories({ page: 1, orderby: "name", order: "asc", select: ["name"] }).then((result) => {
        noteCategories.value = result?.items || [];
      }).finally(() => {
        isSaving.value = false;
      });
    }
    function saveNote$1() {
      isSaving.value = true;
      saveNote(localNote.value).then((result) => {
        if (result?.published) {
          successToast({
            title: localNote.value.id ? __("Site note is updated successfully.", "google-analytics-for-wordpress") : __("Site note is added successfully.", "google-analytics-for-wordpress")
          });
          emit("site-note-save-success", isEdit.value, localNote.value);
        } else {
          errorToast({
            title: result?.message || __("Could not save site note", "google-analytics-for-wordpress"),
            text: __("Please add some information into your site notes.", "google-analytics-for-wordpress")
          });
        }
      }).catch((error) => {
        errorToast({
          title: error?.title || error?.message || __("Could not save site note", "google-analytics-for-wordpress"),
          text: error?.message
        });
      }).finally(() => {
        emit("site-note-save-after", isEdit.value, localNote.value);
        isSaving.value = false;
      });
    }
    function toggleStar() {
      localNote.value.important = !localNote.value.important;
    }
    function cancel() {
      emit("site-note-cancel-edit");
    }
    function syncFromProps() {
      isEdit.value = props.note.id !== null && props.note.id !== void 0;
      localNote.value = {
        ...props.note,
        category: props.note.category ? { ...props.note.category } : { id: 0 },
        medias: props.note.medias ? { ...props.note.medias } : {}
      };
    }
    watch(() => props.note, syncFromProps, { deep: false });
    onMounted(() => {
      fetchCategories();
      syncFromProps();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        isSaving.value ? (openBlock(), createElementBlock("div", _hoisted_2$2)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(["monsterinsights-site-notes-create__table", isSaving.value ? "loading" : ""])
        }, [
          createBaseVNode("div", _hoisted_3$2, [
            createBaseVNode("label", {
              for: "site_note",
              textContent: toDisplayString(texts.title)
            }, null, 8, _hoisted_4$2),
            createBaseVNode("div", _hoisted_5$2, [
              createBaseVNode("a", {
                href: "#",
                class: normalizeClass(starClasses.value),
                onClick: withModifiers(toggleStar, ["prevent"])
              }, null, 2),
              withDirectives(createBaseVNode("textarea", {
                id: "site_note",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localNote.value.note_title = $event),
                rows: "1",
                placeholder: texts.note_title,
                class: "custom-textarea"
              }, null, 8, _hoisted_6$2), [
                [vModelText, localNote.value.note_title]
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_7$2, [
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("label", {
                for: "note_date",
                textContent: toDisplayString(texts.note_date)
              }, null, 8, _hoisted_9$1),
              createBaseVNode("div", _hoisted_10$1, [
                createVNode(_sfc_main$4, {
                  modelValue: localNote.value.note_date_ymd,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => localNote.value.note_date_ymd = $event),
                  disabled: isSaving.value
                }, null, 8, ["modelValue", "disabled"])
              ])
            ]),
            createBaseVNode("div", _hoisted_11$1, [
              createBaseVNode("label", {
                for: "note_category",
                textContent: toDisplayString(texts.note_category)
              }, null, 8, _hoisted_12$1),
              withDirectives(createBaseVNode("select", {
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => localNote.value.category.id = $event)
              }, [
                createBaseVNode("option", {
                  value: "0",
                  textContent: toDisplayString(texts.note_category_select)
                }, null, 8, _hoisted_13$1),
                (openBlock(true), createElementBlock(Fragment, null, renderList(noteCategories.value, (category, index) => {
                  return openBlock(), createElementBlock("option", {
                    key: index,
                    value: category.id,
                    textContent: toDisplayString(category.name)
                  }, null, 8, _hoisted_14$1);
                }), 128))
              ], 512), [
                [vModelSelect, localNote.value.category.id]
              ])
            ]),
            createVNode(_sfc_main$3, {
              modelValue: localNote.value.medias,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => localNote.value.medias = $event),
              "class-names": "monsterinsights-site-notes-create__table-item"
            }, null, 8, ["modelValue"])
          ])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(["monsterinsights-site-notes-create__button", isSaving.value ? "loading" : ""])
        }, [
          createBaseVNode("div", null, [
            createBaseVNode("button", {
              class: "monsterinsights-button",
              onClick: saveNote$1,
              textContent: toDisplayString(isEdit.value ? texts.save_changes_update : texts.save_changes)
            }, null, 8, _hoisted_15$1),
            createBaseVNode("button", {
              class: "monsterinsights-button monsterinsights-button-secondary",
              onClick: withModifiers(cancel, ["prevent"]),
              textContent: toDisplayString(texts.cancel)
            }, null, 8, _hoisted_16$1)
          ])
        ], 2)
      ]);
    };
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "monsterinsights-import-upsell-popup"
};
const _hoisted_2$1 = { class: "monsterinsights-import-upsell-popup-inner" };
const _hoisted_3$1 = ["aria-label"];
const _hoisted_4$1 = ["textContent"];
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = { class: "monsterinsights-popup-buttons" };
const _hoisted_7$1 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "SiteNotesImportUpsell",
  props: {
    show: { type: Boolean, default: false }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const { __ } = wp.i18n;
    const emit = __emit;
    const upgradeUrl = getUpgradeUrl("site-notes", "import-notes-overlay-button");
    const texts = {
      title: __("Upgrade to Pro", "google-analytics-for-wordpress"),
      message: __("Upgrade to PRO to easily import your site notes from Google Analytics.", "google-analytics-for-wordpress"),
      upgrade: __("Upgrade", "google-analytics-for-wordpress"),
      close: __("Close", "google-analytics-for-wordpress")
    };
    function onClose() {
      emit("close");
    }
    return (_ctx, _cache) => {
      return __props.show ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("button", {
            class: "monsterinsights-popup-close",
            "aria-label": texts.close,
            onClick: onClose
          }, [..._cache[0] || (_cache[0] = [
            createBaseVNode("i", { class: "monstericon-times" }, null, -1)
          ])], 8, _hoisted_3$1),
          createBaseVNode("h3", {
            textContent: toDisplayString(texts.title)
          }, null, 8, _hoisted_4$1),
          createBaseVNode("p", {
            textContent: toDisplayString(texts.message)
          }, null, 8, _hoisted_5$1),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("a", {
              href: unref(upgradeUrl),
              class: "monsterinsights-button monsterinsights-button-small",
              target: "_blank",
              rel: "noopener",
              textContent: toDisplayString(texts.upgrade)
            }, null, 8, _hoisted_7$1)
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-site-notes-wrapper" };
const _hoisted_2 = { class: "monsterinsights-site-notes-list__table" };
const _hoisted_3 = { class: "monsterinsights-site-notes-list__table-create" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "monsterinsights-site-notes-list__table-create-link-wrapper" };
const _hoisted_6 = {
  key: 0,
  class: "monsterinsights-site-notes-list__table-create-link"
};
const _hoisted_7 = ["textContent"];
const _hoisted_8 = { class: "monsterinsights-site-notes-list__table-create-link--export" };
const _hoisted_9 = {
  key: 0,
  class: "monsterinsights-loader is-inline"
};
const _hoisted_10 = {
  class: "monsterinsights-import-button-wrapper",
  style: { "position": "relative", "display": "inline-block" }
};
const _hoisted_11 = {
  key: 0,
  class: "monsterinsights-site-notes-list__table-create-form"
};
const _hoisted_12 = {
  key: 0,
  class: "progress-bar is-absolute"
};
const _hoisted_13 = {
  key: 1,
  class: "progress-bar is-absolute is-danger"
};
const _hoisted_14 = ["textContent"];
const _hoisted_15 = ["aria-label", "onClick"];
const _hoisted_16 = {
  key: 0,
  class: "edit-row"
};
const _hoisted_17 = ["colspan"];
const _hoisted_18 = ["textContent"];
const _sfc_main = {
  __name: "SiteNotesList",
  setup(__props) {
    const { __ } = wp.i18n;
    const pro = isPro$1();
    const { successToast, errorToast } = useToast();
    const text_site_notes = __("Site Notes", "google-analytics-for-wordpress");
    const text_empty_notes = __("There aren’t any site notes. Go ahead and create one!", "google-analytics-for-wordpress");
    const text_filter_category = __("All Categories", "google-analytics-for-wordpress");
    const text_add_new = __("Add Site Note", "google-analytics-for-wordpress");
    const text_add_new_description = __("Keep track of important website events with Site Notes. Site Notes can help you track and monitor changes to your website traffic, clicks, or conversion rates over a period of time.", "google-analytics-for-wordpress");
    const text_edit_title = __("Edit Site Note", "google-analytics-for-wordpress");
    const showProgressBar = ref(false);
    const deletingIds = ref([]);
    const currentQuickFilter = ref(null);
    const notes = ref({ items: [], pagination: null, status_filters: null });
    const filters = ref({});
    const isLoading = ref(false);
    const noteCategories = ref([]);
    const selectedItemID = ref(0);
    const createFormShown = ref(false);
    const activeRequestParams = ref(false);
    const isExporting = ref(false);
    const isImporting = ref(false);
    const showImportUpsell = ref(false);
    const siteNotesExported = ref(parseInt(getMiGlobal("site_notes_export_synced"), 10) || 0);
    const siteNotesImported = ref(parseInt(getMiGlobal("site_notes_import_synced"), 10) || 0);
    const appliedFilters = computed(() => {
      const rawFilter = currentQuickFilter.value;
      if (rawFilter === null) return null;
      const [attribute, value] = rawFilter.split(":");
      return { filter: { [attribute]: value } };
    });
    function starClasses(item) {
      return "monsterinsights-star" + (!item.important ? "-empty" : "");
    }
    function getStarAriaLabel(item) {
      return item.important ? __("Remove from important", "google-analytics-for-wordpress") : __("Mark as important", "google-analytics-for-wordpress");
    }
    function toggleImportant(item) {
      const localNote = { ...item, important: !item.important };
      saveNote(localNote).then(() => {
        fetchNotes({}, true);
      }).catch(() => {
      });
    }
    function fetchNotes(params, disableLoading = false) {
      const requestParams = Object.assign(
        {
          page: 1,
          orderby: "id",
          order: "desc",
          ...appliedFilters.value || {},
          ...filters.value
        },
        params || {}
      );
      selectedItemID.value = 0;
      activeRequestParams.value = requestParams;
      if (!disableLoading) {
        isLoading.value = true;
      }
      getNotes(requestParams).then((result) => {
        notes.value = result || { items: [], pagination: null, status_filters: null };
      }).catch(() => {
        notes.value = { items: [], pagination: null, status_filters: null };
      }).finally(() => {
        if (!disableLoading) {
          isLoading.value = false;
        }
      });
    }
    function setFilters(filterValues) {
      if (!filterValues) return;
      Object.keys(filterValues).forEach((filter) => {
        filters.value[filter] = filterValues[filter];
      });
      fetchNotes();
    }
    function setSearchFilters(keywords) {
      filters.value.search = keywords;
      fetchNotes();
    }
    function fetchCategories() {
      return getCategories({ page: 1, orderby: "id", order: "desc" });
    }
    function maybeResetFilters(deleteCount) {
      if (deleteCount === notes.value.items.length) {
        currentQuickFilter.value = null;
      }
    }
    function restoreSelectedNotes(noteIds) {
      const ids = Array.isArray(noteIds) ? noteIds : [noteIds];
      showProgressBar.value = true;
      restoreNotes(ids).then((result) => {
        if (result?.success) {
          successToast({ title: __("Restored successfully.", "google-analytics-for-wordpress") });
          maybeResetFilters(ids.length);
          fetchNotes();
        } else {
          errorToast({ title: result?.message || __("Could not restore notes", "google-analytics-for-wordpress") });
        }
      }).catch((error) => errorToast({ title: error?.message || __("Could not restore notes", "google-analytics-for-wordpress") })).finally(() => {
        showProgressBar.value = false;
      });
    }
    function trashSelectedNotes(noteIds) {
      const ids = Array.isArray(noteIds) ? noteIds : [noteIds];
      deletingIds.value = ids;
      if (ids.indexOf(selectedItemID.value) > -1) {
        selectedItemID.value = 0;
      }
      trashNotes(ids).then((result) => {
        if (result?.success) {
          successToast({ title: __("Trashed successfully.", "google-analytics-for-wordpress") });
          maybeResetFilters(ids.length);
          fetchNotes();
        } else {
          errorToast({ title: result?.message || __("Could not trash notes", "google-analytics-for-wordpress") });
        }
      }).catch((error) => errorToast({ title: error?.message || __("Could not trash notes", "google-analytics-for-wordpress") })).finally(() => {
        deletingIds.value = [];
      });
    }
    function deleteSelectedNotes(noteIds) {
      const ids = Array.isArray(noteIds) ? noteIds : [noteIds];
      deletingIds.value = ids;
      deleteNotes(ids).then((result) => {
        if (result?.success) {
          successToast({ title: __("Deleted successfully.", "google-analytics-for-wordpress") });
          maybeResetFilters(ids.length);
          fetchNotes();
        } else {
          errorToast({ title: result?.message || __("Could not delete notes", "google-analytics-for-wordpress") });
        }
      }).catch((error) => errorToast({ title: error?.message || __("Could not delete notes", "google-analytics-for-wordpress") })).finally(() => {
        deletingIds.value = [];
      });
    }
    function selectItemForEdit(itemID) {
      selectedItemID.value = itemID;
    }
    function cancelEdit() {
      selectedItemID.value = 0;
    }
    function afterSaveEdit() {
      selectedItemID.value = 0;
      fetchNotes(activeRequestParams.value, true);
    }
    function afterSaveCreate() {
      createFormShown.value = false;
      fetchNotes();
    }
    function cancelCreate() {
      createFormShown.value = false;
    }
    function runExportNotes() {
      const allNotes = notes.value.items || [];
      if (allNotes.length === 0) {
        errorToast({ title: __("No notes to export.", "google-analytics-for-wordpress") });
        return;
      }
      const transformed = allNotes.map((note) => {
        const { note_title, note_date, ...rest } = note;
        return { ...rest, title: note_title, annotation_date: note_date };
      });
      isExporting.value = true;
      return exportNotes(transformed).then((response) => {
        if (response?.success && response.data) {
          successToast({ title: response.data.message });
        }
      }).catch(() => {
      }).finally(() => {
        isExporting.value = false;
      });
    }
    function runImportNotes() {
      isImporting.value = true;
      return importNotes().then((response) => {
        if (response?.success && response.data) {
          successToast({ title: response.data.message });
        }
      }).catch(() => {
      }).finally(() => {
        fetchNotes();
        isImporting.value = false;
      });
    }
    const tableColumns = computed(() => {
      const columns = [
        {
          title: __("Site Note", "google-analytics-for-wordpress"),
          key: "note_title",
          sortable: true,
          isRowTitle: true
        },
        {
          title: __("Author", "google-analytics-for-wordpress"),
          key: "author",
          value: (note) => note.author ? note.author.name : "-",
          sortable: true
        },
        {
          title: __("Created", "google-analytics-for-wordpress"),
          key: "note_date",
          sortable: true
        },
        {
          title: __("Category", "google-analytics-for-wordpress"),
          key: "category",
          sortable: true,
          value: (note) => {
            if (!note.category || !note.category.name) return "";
            if (note.category.background_color) {
              return '<span class="monsterinsights-category-with-bg" style="background-color: ' + note.category.background_color + ';">' + note.category.name + "</span>";
            }
            return '<span class="monsterinsights-category-without-bg">' + note.category.name + "</span>";
          }
        }
      ];
      return columns;
    });
    const rowActions = computed(() => [
      {
        label: __("Edit", "google-analytics-for-wordpress"),
        path: "edit",
        handle: selectItemForEdit,
        hide: (note) => note.status === "trash" || note.id === selectedItemID.value
      },
      {
        path: "trash",
        label: __("Trash", "google-analytics-for-wordpress"),
        handle: trashSelectedNotes,
        hide: (note) => note.status === "trash" || note.id === selectedItemID.value
      },
      {
        path: "restore",
        label: __("Restore", "google-analytics-for-wordpress"),
        handle: restoreSelectedNotes,
        hide: (note) => note.status === "publish"
      },
      {
        path: "delete",
        label: __("Delete Permanently", "google-analytics-for-wordpress"),
        handle: deleteSelectedNotes,
        hide: (note) => note.status === "publish"
      }
    ]);
    const tableBulkActions = computed(() => {
      if (currentQuickFilter.value === "status:trash") {
        return [
          { label: __("Restore", "google-analytics-for-wordpress"), value: "restore", handle: restoreSelectedNotes },
          { label: __("Delete Permanently", "google-analytics-for-wordpress"), value: "delete", handle: deleteSelectedNotes }
        ];
      }
      return [
        { label: __("Trash", "google-analytics-for-wordpress"), value: "trash", handle: trashSelectedNotes }
      ];
    });
    const tableFilters = computed(() => {
      if (!noteCategories.value || noteCategories.value.length === 0) return [];
      const options = { 0: text_filter_category };
      noteCategories.value.forEach((category) => {
        options[category.id] = category.name;
      });
      return [{ id: "category", options }];
    });
    const quickFilters = computed(() => {
      const statusFilters = notes.value.status_filters;
      if (!statusFilters) return [];
      const getStatusLabel = (status) => {
        switch (status) {
          case "all":
            return __("All", "google-analytics-for-wordpress");
          case "draft":
            return __("Draft", "google-analytics-for-wordpress");
          case "trash":
            return __("Trash", "google-analytics-for-wordpress");
          default:
            return status;
        }
      };
      const result = [];
      const allFilter = statusFilters.find((f) => f.status === "all");
      if (allFilter) {
        result.push({
          attribute: "status",
          value: allFilter.status,
          count: allFilter.count,
          label: getStatusLabel(allFilter.status)
        });
      }
      const draftFilter = statusFilters.find((f) => f.status === "draft");
      if (draftFilter) {
        result.push({
          attribute: "status",
          value: draftFilter.status,
          count: draftFilter.count,
          label: getStatusLabel(draftFilter.status)
        });
      }
      const trashFilter = statusFilters.find((f) => f.status === "trash");
      if (trashFilter) {
        result.push({
          attribute: "status",
          value: trashFilter.status,
          count: trashFilter.count,
          label: getStatusLabel(trashFilter.status)
        });
      }
      return result;
    });
    const syncAttempted = ref(false);
    async function runOneTimeGa4Sync() {
      if (siteNotesExported.value === 0) {
        siteNotesExported.value = 1;
        await runExportNotes();
      }
      if (siteNotesImported.value === 0) {
        siteNotesImported.value = 1;
        await runImportNotes();
      }
    }
    watch(() => notes.value.items, (newItems) => {
      if (syncAttempted.value) {
        return;
      }
      if (Array.isArray(newItems) && newItems.length > 0) {
        syncAttempted.value = true;
        runOneTimeGa4Sync();
      }
    });
    onMounted(() => {
      fetchCategories().then((result) => {
        noteCategories.value = result?.items || [];
        fetchNotes();
      }).catch(() => {
        fetchNotes();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$a, {
          title: unref(text_site_notes),
          icon: "monsterinsights-icon-note"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("div", {
                  class: "monsterinsights-site-notes-list__table-create-text",
                  textContent: toDisplayString(unref(text_add_new_description))
                }, null, 8, _hoisted_4),
                createBaseVNode("div", _hoisted_5, [
                  !createFormShown.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
                    createBaseVNode("a", {
                      href: "javascript:",
                      class: "monsterinsights-button",
                      onClick: _cache[0] || (_cache[0] = withModifiers(($event) => createFormShown.value = true, ["prevent"])),
                      textContent: toDisplayString(unref(text_add_new))
                    }, null, 8, _hoisted_7)
                  ])) : createCommentVNode("", true),
                  createBaseVNode("div", _hoisted_8, [
                    isExporting.value || isImporting.value ? (openBlock(), createElementBlock("div", _hoisted_9)) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_10, [
                      createVNode(_sfc_main$1, {
                        show: showImportUpsell.value,
                        onClose: _cache[1] || (_cache[1] = ($event) => showImportUpsell.value = false)
                      }, null, 8, ["show"])
                    ])
                  ])
                ])
              ]),
              createFormShown.value ? (openBlock(), createElementBlock("div", _hoisted_11, [
                createVNode(_sfc_main$2, {
                  onSiteNoteCancelEdit: cancelCreate,
                  onSiteNoteSaveSuccess: afterSaveCreate
                })
              ])) : createCommentVNode("", true),
              createVNode(_sfc_main$5, {
                items: notes.value.items,
                pagination: notes.value.pagination,
                "allow-search": true,
                columns: tableColumns.value,
                "row-actions": rowActions.value,
                "bulk-actions": tableBulkActions.value,
                filters: tableFilters.value,
                "quick-filters": quickFilters.value,
                "current-quick-filter": currentQuickFilter.value,
                "onUpdate:currentQuickFilter": _cache[2] || (_cache[2] = ($event) => currentQuickFilter.value = $event),
                "is-loading": isLoading.value,
                "no-footer": true,
                "checkbox-group-name": "note",
                onPageChange: fetchNotes,
                onSortChange: fetchNotes,
                onQuickFilter: _cache[3] || (_cache[3] = () => fetchNotes()),
                onFilterChange: setFilters,
                onSearch: setSearchFilters
              }, {
                "before-body": withCtx(() => [
                  showProgressBar.value ? (openBlock(), createElementBlock("div", _hoisted_12)) : createCommentVNode("", true),
                  deletingIds.value.length ? (openBlock(), createElementBlock("div", _hoisted_13)) : createCommentVNode("", true)
                ]),
                "table-loading": withCtx(() => [..._cache[4] || (_cache[4] = [
                  createBaseVNode("div", { class: "monsterinsights-loader" }, null, -1)
                ])]),
                "table-empty": withCtx(() => [
                  createBaseVNode("div", {
                    textContent: toDisplayString(unref(text_empty_notes))
                  }, null, 8, _hoisted_14)
                ]),
                "row-before-title": withCtx(({ item }) => [
                  createBaseVNode("a", {
                    href: "#",
                    class: "monsterinsights-toggle-note-important",
                    "aria-label": getStarAriaLabel(item),
                    onClick: withModifiers(($event) => toggleImportant(item), ["prevent"])
                  }, [
                    createBaseVNode("span", {
                      class: normalizeClass(starClasses(item))
                    }, null, 2)
                  ], 8, _hoisted_15)
                ]),
                "row-below": withCtx(({ item }) => [
                  selectedItemID.value === item.id ? (openBlock(), createElementBlock("tr", _hoisted_16, [
                    createBaseVNode("td", {
                      colspan: unref(pro) ? 6 : 5
                    }, [
                      createBaseVNode("div", {
                        class: "monsterinsights-edit-title",
                        textContent: toDisplayString(unref(text_edit_title))
                      }, null, 8, _hoisted_18),
                      createVNode(_sfc_main$2, {
                        note: item,
                        onSiteNoteCancelEdit: cancelEdit,
                        onSiteNoteSaveSuccess: afterSaveEdit
                      }, null, 8, ["note"])
                    ], 8, _hoisted_17)
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["items", "pagination", "columns", "row-actions", "bulk-actions", "filters", "quick-filters", "current-quick-filter", "is-loading"])
            ])
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
