import { l as defineStore, j as ref, C as watch, o as openBlock, c as createElementBlock, F as Fragment, a as createBaseVNode, t as toDisplayString, u as unref, B as withModifiers, i as normalizeClass, b as createVNode, s as createCommentVNode, f as renderList, n as normalizeStyle, w as withDirectives, v as vModelText, P as vModelSelect } from "./toastStore-CRCNwITM.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { C as Component } from "./flatpickr-CNAtgokQ.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { s as saveNote, g as getCategories, a as getNotes } from "./siteNotes-CUK65xMh.js";
const useSiteNotesStore = defineStore("siteNotes", {
  state: () => ({
    // Notes data
    notes: [],
    allCount: 0,
    importantCount: 0,
    // Categories
    categories: [],
    // UI state
    loading: false,
    showSiteNotes: false,
    // Current filter state
    importantFilter: null
    // null = all, true = important only
  }),
  getters: {
    /**
     * Notes filtered by the current importantFilter setting.
     * Used by the SiteNotes list panel for display.
     */
    filteredNotes: (state) => {
      if (state.importantFilter === true) {
        return state.notes.filter((note) => note.important);
      }
      return state.notes;
    },
    /**
     * Group ALL notes by note_date_ymd for chart annotation matching.
     * Returns { "2026-02-02": [note1, note2], ... }
     */
    siteNotesByDate: (state) => {
      const grouped = {};
      for (const note of state.notes) {
        const dateKey = note.note_date_ymd || note.note_date;
        if (!dateKey) {
          continue;
        }
        if (!grouped[dateKey]) {
          grouped[dateKey] = [];
        }
        grouped[dateKey].push(note);
      }
      return grouped;
    },
    /**
     * Group ALL notes by YYYYMMDD format for matching against chart row dates.
     * Returns { "20260202": [note1, ...], ... }
     */
    siteNotesByDateCompact: (state) => {
      const grouped = {};
      for (const note of state.notes) {
        const dateKey = note.note_date_ymd || note.note_date;
        if (!dateKey) {
          continue;
        }
        const compactDate = dateKey.replace(/-/g, "");
        if (!grouped[compactDate]) {
          grouped[compactDate] = [];
        }
        grouped[compactDate].push(note);
      }
      return grouped;
    }
  },
  actions: {
    /**
     * Fetch site notes for the given date range and filters.
     *
     * @param {Object} dateRange - { start, end, interval }
     * @param {boolean} disableLoading - If true, don't show loading state.
     */
    async fetchNotes(dateRange, disableLoading = false) {
      if (!disableLoading) {
        this.loading = true;
      }
      const filter = {
        important: null,
        date_range: dateRange || {}
      };
      const params = {
        orderby: "id",
        order: "asc",
        per_page: "-1",
        filter
      };
      try {
        const result = await getNotes(params);
        this.notes = result.items || [];
        this.allCount = result.pagination?.total_published ? parseInt(result.pagination.total_published, 10) : 0;
        this.importantCount = result.pagination?.total_important ? parseInt(result.pagination.total_important, 10) : 0;
      } catch (error) {
        console.error("Error fetching site notes:", error);
        this.notes = [];
        this.allCount = 0;
        this.importantCount = 0;
      } finally {
        if (!disableLoading) {
          this.loading = false;
        }
      }
    },
    /**
     * Fetch site note categories.
     */
    async fetchCategories() {
      const params = {
        page: 1,
        orderby: "name",
        order: "asc",
        select: ["name"]
      };
      try {
        const result = await getCategories(params);
        this.categories = result.items || [];
      } catch (error) {
        console.error("Error fetching categories:", error);
        this.categories = [];
      }
    },
    /**
     * Save (create or update) a site note, then re-fetch the notes list.
     *
     * @param {Object} note - The note to save.
     * @param {Object} dateRange - Current date range for re-fetching.
     * @returns {Promise<Object>} The save response.
     */
    async saveNote(note, dateRange) {
      const result = await saveNote(note);
      await this.fetchNotes(dateRange, true);
      return result;
    },
    /**
     * Toggle a note's important status and re-save.
     *
     * @param {Object} note - The note to toggle.
     * @param {Object} dateRange - Current date range for re-fetching.
     */
    async toggleImportant(note, dateRange) {
      const updatedNote = { ...note, important: !note.important };
      try {
        await saveNote(updatedNote);
        await this.fetchNotes(dateRange, true);
      } catch (error) {
        console.error("Error toggling important:", error);
      }
    },
    /**
     * Toggle site notes panel visibility.
     */
    toggleSiteNotes() {
      this.showSiteNotes = !this.showSiteNotes;
    },
    /**
     * Set the important filter for the list panel.
     * Filtering is done client-side via the filteredNotes getter,
     * so no re-fetch is needed and chart annotations stay stable.
     *
     * @param {boolean|null} important - null for all, true for important only.
     */
    setImportantFilter(important) {
      this.importantFilter = important;
    }
  }
});
const _hoisted_1 = { class: "monsterinsights-overview-notes" };
const _hoisted_2 = { class: "monsterinsights-overview-notes__header" };
const _hoisted_3 = { class: "monsterinsights-overview-notes__header-left" };
const _hoisted_4 = { class: "monsterinsights-overview-notes__header-left-links" };
const _hoisted_5 = { class: "text" };
const _hoisted_6 = { class: "text" };
const _hoisted_7 = { class: "monsterinsights-overview-notes__header-right" };
const _hoisted_8 = { class: "monsterinsights-overview-notes__body" };
const _hoisted_9 = { class: "monsterinsights-overview-notes__body-list" };
const _hoisted_10 = {
  key: 0,
  class: "monsterinsights-overview-notes__loading"
};
const _hoisted_11 = {
  key: 1,
  class: "monsterinsights-overview-notes__table"
};
const _hoisted_12 = { class: "monsterinsights-overview-notes__col-date" };
const _hoisted_13 = { class: "monsterinsights-overview-notes__col-date" };
const _hoisted_14 = { class: "monsterinsights-overview-notes__date-cell" };
const _hoisted_15 = ["onClick"];
const _hoisted_16 = {
  key: 0,
  class: "monsterinsights-star-spinner"
};
const _hoisted_17 = {
  key: 1,
  class: "star-icon",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "#F2C94C",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_18 = {
  key: 2,
  class: "star-icon star-icon--empty",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ccc",
  "stroke-width": "2",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_19 = { class: "monsterinsights-overview-notes__col-note" };
const _hoisted_20 = { class: "monsterinsights-overview-notes__note-cell" };
const _hoisted_21 = ["onClick"];
const _hoisted_22 = { class: "monsterinsights-overview-notes__col-category" };
const _hoisted_23 = {
  key: 1,
  class: "monsterinsights-category-badge monsterinsights-category-badge--default"
};
const _hoisted_24 = {
  key: 0,
  class: "monsterinsights-overview-notes__edit-row"
};
const _hoisted_25 = { class: "monsterinsights-overview-notes__col-date" };
const _hoisted_26 = { class: "monsterinsights-overview-notes__edit-date-cell" };
const _hoisted_27 = {
  key: 0,
  class: "star-icon",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "#F2C94C",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_28 = {
  key: 1,
  class: "star-icon star-icon--empty",
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ccc",
  "stroke-width": "2",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_29 = { class: "monsterinsights-overview-notes__col-note" };
const _hoisted_30 = { class: "monsterinsights-overview-notes__edit-note-cell" };
const _hoisted_31 = ["disabled"];
const _hoisted_32 = { class: "monsterinsights-overview-notes__edit-actions" };
const _hoisted_33 = ["disabled"];
const _hoisted_34 = { class: "monsterinsights-overview-notes__col-category" };
const _hoisted_35 = { class: "monsterinsights-site-note-select" };
const _hoisted_36 = ["disabled"];
const _hoisted_37 = { value: "0" };
const _hoisted_38 = ["value"];
const _hoisted_39 = { key: 0 };
const _hoisted_40 = { colspan: "3" };
const _hoisted_41 = { class: "monsterinsights-overview-notes__empty" };
const _hoisted_42 = {
  key: 1,
  class: "monsterinsights-overview-notes__create"
};
const _hoisted_43 = { class: "monsterinsights-overview-notes__create-header" };
const _hoisted_44 = { class: "monsterinsights-overview-notes__create-title" };
const _hoisted_45 = { class: "monsterinsights-overview-notes__create-form" };
const _hoisted_46 = { class: "monsterinsights-overview-notes__create-row" };
const _hoisted_47 = {
  key: 0,
  class: "star-icon",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "#F2C94C",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_48 = {
  key: 1,
  class: "star-icon star-icon--empty",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ccc",
  "stroke-width": "2",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_49 = { class: "monsterinsights-overview-notes__create-field monsterinsights-overview-notes__create-field--date" };
const _hoisted_50 = { class: "monsterinsights-overview-notes__create-field monsterinsights-overview-notes__create-field--name" };
const _hoisted_51 = ["placeholder", "disabled"];
const _hoisted_52 = {
  key: 0,
  class: "monsterinsights-overview-notes__create-error"
};
const _hoisted_53 = { class: "monsterinsights-overview-notes__create-field monsterinsights-overview-notes__create-field--category" };
const _hoisted_54 = { class: "monsterinsights-site-note-select" };
const _hoisted_55 = ["disabled"];
const _hoisted_56 = { value: "0" };
const _hoisted_57 = ["value"];
const _hoisted_58 = { class: "monsterinsights-overview-notes__create-buttons" };
const _hoisted_59 = ["disabled"];
const _hoisted_60 = ["disabled"];
const _sfc_main = {
  __name: "SiteNotes",
  props: {
    dateRange: {
      type: Object,
      required: true,
      default: () => ({
        interval: "last30days",
        start: "",
        end: ""
      })
    }
  },
  emits: ["refresh-overview-report"],
  setup(__props, { emit: __emit }) {
    const siteNotesStore = useSiteNotesStore();
    const props = __props;
    const emit = __emit;
    const showList = ref(true);
    const isSaving = ref(false);
    const editingNote = ref(null);
    const togglingNoteId = ref(null);
    const editCategoryId = ref(0);
    const createError = ref("");
    const newNote = ref(getEmptyNote());
    const flatpickrConfig = {
      dateFormat: "Y-m-d",
      maxDate: "today",
      disableMobile: true,
      // Tag the body-appended calendar so its month/year caption styling applies
      // (prevents the header being clipped by flatpickr's fixed-height month row).
      onReady: (_selectedDates, _dateStr, instance) => {
        instance.calendarContainer.classList.add("monsterinsights-site-note-calendar");
      }
    };
    function getEmptyNote() {
      return {
        id: null,
        note_title: "",
        category: { id: 0 },
        note_date: null,
        note_date_ymd: getDefaultDate(),
        important: false,
        medias: {}
      };
    }
    function getDefaultDate() {
      if (props.dateRange?.end) {
        return props.dateRange.end;
      }
      const yesterday = /* @__PURE__ */ new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      return formatDateToYmd(yesterday);
    }
    function formatDateToYmd(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    function formatDate(dateStr) {
      if (!dateStr) return "";
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const parts = dateStr.split("-");
      if (parts.length !== 3) return dateStr;
      const day = parseInt(parts[2], 10);
      const monthIndex = parseInt(parts[1], 10) - 1;
      return `${String(day).padStart(2, "0")} ${months[monthIndex] || ""}`;
    }
    function removeFilters() {
      siteNotesStore.setImportantFilter(null);
    }
    function filterImportant() {
      siteNotesStore.setImportantFilter(true);
    }
    function showCreateView() {
      newNote.value = getEmptyNote();
      createError.value = "";
      showList.value = false;
    }
    function showListView() {
      showList.value = true;
    }
    async function toggleImportant(note) {
      togglingNoteId.value = note.id;
      try {
        await siteNotesStore.toggleImportant(note, props.dateRange);
        emit("refresh-overview-report");
      } finally {
        togglingNoteId.value = null;
      }
    }
    function startEdit(note) {
      editingNote.value = { ...note };
      editCategoryId.value = note.category?.id || 0;
    }
    function cancelEdit() {
      editingNote.value = null;
      editCategoryId.value = 0;
    }
    function toggleEditStar() {
      if (editingNote.value) {
        editingNote.value.important = !editingNote.value.important;
      }
    }
    async function saveEditNote() {
      if (!editingNote.value) return;
      isSaving.value = true;
      const selectedCategory = siteNotesStore.categories.find((c) => c.id === editCategoryId.value);
      editingNote.value.category = selectedCategory || { id: editCategoryId.value };
      try {
        await siteNotesStore.saveNote(editingNote.value, props.dateRange);
        cancelEdit();
        emit("refresh-overview-report");
      } catch (error) {
        console.error("Error saving note:", error);
      } finally {
        isSaving.value = false;
      }
    }
    function toggleCreateStar() {
      newNote.value.important = !newNote.value.important;
    }
    async function createNote() {
      isSaving.value = true;
      createError.value = "";
      try {
        await siteNotesStore.saveNote(newNote.value, props.dateRange);
        newNote.value = getEmptyNote();
        showList.value = true;
        emit("refresh-overview-report");
      } catch (error) {
        createError.value = error?.title || error?.message || __("An error occurred.", "google-analytics-for-wordpress");
      } finally {
        isSaving.value = false;
      }
    }
    watch(
      () => [props.dateRange?.start, props.dateRange?.end],
      () => {
        siteNotesStore.fetchNotes(props.dateRange);
      },
      { deep: true }
    );
    watch(
      () => props.dateRange?.end,
      (newEnd) => {
        if (newEnd && !showList.value) {
          newNote.value.note_date_ymd = newEnd;
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        showList.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("span", null, toDisplayString(unref(__)("Show:", "google-analytics-for-wordpress")), 1),
                createBaseVNode("a", {
                  href: "#",
                  class: normalizeClass({ selected: unref(siteNotesStore).importantFilter === null }),
                  onClick: withModifiers(removeFilters, ["prevent"])
                }, [
                  createBaseVNode("span", _hoisted_5, toDisplayString(unref(__)("All", "google-analytics-for-wordpress")), 1),
                  createBaseVNode("span", null, "(" + toDisplayString(unref(siteNotesStore).allCount) + ")", 1)
                ], 2),
                createBaseVNode("a", {
                  href: "#",
                  class: normalizeClass({ selected: unref(siteNotesStore).importantFilter === true }),
                  onClick: withModifiers(filterImportant, ["prevent"])
                }, [
                  _cache[7] || (_cache[7] = createBaseVNode("svg", {
                    class: "star-icon-inline",
                    width: "14",
                    height: "14",
                    viewBox: "0 0 24 24",
                    fill: "#F2C94C",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" })
                  ], -1)),
                  createBaseVNode("span", _hoisted_6, toDisplayString(unref(__)("Important", "google-analytics-for-wordpress")), 1),
                  createBaseVNode("span", null, "(" + toDisplayString(unref(siteNotesStore).importantCount) + ")", 1)
                ], 2)
              ])
            ]),
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("button", {
                class: "monsterinsights-button",
                onClick: showCreateView
              }, [
                createVNode(Icon, {
                  name: "plus",
                  size: 11
                }),
                createBaseVNode("span", null, toDisplayString(unref(__)("Add New Site Note", "google-analytics-for-wordpress")), 1)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("div", _hoisted_9, [
              unref(siteNotesStore).loading ? (openBlock(), createElementBlock("div", _hoisted_10, [
                createVNode(LoadingSpinnerInline)
              ])) : createCommentVNode("", true),
              !unref(siteNotesStore).loading ? (openBlock(), createElementBlock("table", _hoisted_11, [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", _hoisted_12, toDisplayString(unref(__)("Date", "google-analytics-for-wordpress")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(__)("Site Note", "google-analytics-for-wordpress")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(__)("Category", "google-analytics-for-wordpress")), 1)
                  ])
                ]),
                createBaseVNode("tbody", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(siteNotesStore).filteredNotes, (note) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: note.id
                    }, [
                      createBaseVNode("tr", null, [
                        createBaseVNode("td", _hoisted_13, [
                          createBaseVNode("div", _hoisted_14, [
                            createBaseVNode("a", {
                              href: "#",
                              class: "monsterinsights-toggle-note-important",
                              onClick: withModifiers(($event) => toggleImportant(note), ["prevent"])
                            }, [
                              togglingNoteId.value === note.id ? (openBlock(), createElementBlock("span", _hoisted_16)) : note.important ? (openBlock(), createElementBlock("svg", _hoisted_17, [..._cache[8] || (_cache[8] = [
                                createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                              ])])) : (openBlock(), createElementBlock("svg", _hoisted_18, [..._cache[9] || (_cache[9] = [
                                createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                              ])]))
                            ], 8, _hoisted_15),
                            createBaseVNode("span", null, toDisplayString(formatDate(note.note_date)), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_19, [
                          createBaseVNode("div", _hoisted_20, [
                            createBaseVNode("span", null, toDisplayString(note.note_title), 1),
                            createBaseVNode("a", {
                              href: "#",
                              class: "monsterinsights-overview-notes__edit-link",
                              onClick: withModifiers(($event) => startEdit(note), ["prevent"])
                            }, toDisplayString(unref(__)("Edit", "google-analytics-for-wordpress")), 9, _hoisted_21)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_22, [
                          note.category && note.category.background_color ? (openBlock(), createElementBlock("span", {
                            key: 0,
                            class: "monsterinsights-category-badge",
                            style: normalizeStyle({ backgroundColor: note.category.background_color })
                          }, toDisplayString(note.category.name || ""), 5)) : note.category && note.category.name ? (openBlock(), createElementBlock("span", _hoisted_23, toDisplayString(note.category.name), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      editingNote.value && editingNote.value.id === note.id ? (openBlock(), createElementBlock("tr", _hoisted_24, [
                        createBaseVNode("td", _hoisted_25, [
                          createBaseVNode("div", _hoisted_26, [
                            createBaseVNode("a", {
                              href: "#",
                              onClick: withModifiers(toggleEditStar, ["prevent"])
                            }, [
                              editingNote.value.important ? (openBlock(), createElementBlock("svg", _hoisted_27, [..._cache[10] || (_cache[10] = [
                                createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                              ])])) : (openBlock(), createElementBlock("svg", _hoisted_28, [..._cache[11] || (_cache[11] = [
                                createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                              ])]))
                            ]),
                            createVNode(unref(Component), {
                              modelValue: editingNote.value.note_date_ymd,
                              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingNote.value.note_date_ymd = $event),
                              config: flatpickrConfig,
                              class: "monsterinsights-site-note-datepicker",
                              disabled: isSaving.value
                            }, null, 8, ["modelValue", "disabled"])
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_29, [
                          createBaseVNode("div", _hoisted_30, [
                            withDirectives(createBaseVNode("textarea", {
                              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => editingNote.value.note_title = $event),
                              disabled: isSaving.value,
                              rows: "1",
                              class: "monsterinsights-site-note-textarea"
                            }, null, 8, _hoisted_31), [
                              [vModelText, editingNote.value.note_title]
                            ])
                          ]),
                          createBaseVNode("div", _hoisted_32, [
                            createBaseVNode("button", {
                              class: "monsterinsights-button",
                              disabled: isSaving.value,
                              onClick: saveEditNote
                            }, toDisplayString(unref(__)("Save Changes", "google-analytics-for-wordpress")), 9, _hoisted_33),
                            createBaseVNode("a", {
                              href: "#",
                              class: "monsterinsights-button-secondary",
                              onClick: withModifiers(cancelEdit, ["prevent"])
                            }, toDisplayString(unref(__)("Cancel", "google-analytics-for-wordpress")), 1)
                          ])
                        ]),
                        createBaseVNode("td", _hoisted_34, [
                          createBaseVNode("div", _hoisted_35, [
                            withDirectives(createBaseVNode("select", {
                              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => editCategoryId.value = $event),
                              disabled: isSaving.value
                            }, [
                              createBaseVNode("option", _hoisted_37, toDisplayString(unref(__)("Select Category", "google-analytics-for-wordpress")), 1),
                              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(siteNotesStore).categories, (category) => {
                                return openBlock(), createElementBlock("option", {
                                  key: category.id,
                                  value: category.id
                                }, toDisplayString(category.name), 9, _hoisted_38);
                              }), 128))
                            ], 8, _hoisted_36), [
                              [vModelSelect, editCategoryId.value]
                            ]),
                            createVNode(Icon, {
                              name: "chevron-down",
                              size: 16
                            })
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  unref(siteNotesStore).filteredNotes.length === 0 && !unref(siteNotesStore).loading ? (openBlock(), createElementBlock("tr", _hoisted_39, [
                    createBaseVNode("td", _hoisted_40, [
                      createBaseVNode("div", _hoisted_41, toDisplayString(unref(__)("There aren't any site notes. Go ahead and create one!", "google-analytics-for-wordpress")), 1)
                    ])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
            ])
          ])
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_42, [
          createBaseVNode("div", _hoisted_43, [
            createBaseVNode("span", _hoisted_44, toDisplayString(unref(__)("Site Notes", "google-analytics-for-wordpress")), 1)
          ]),
          createBaseVNode("div", _hoisted_45, [
            createBaseVNode("div", _hoisted_46, [
              createBaseVNode("a", {
                href: "#",
                class: "monsterinsights-overview-notes__create-star",
                onClick: withModifiers(toggleCreateStar, ["prevent"])
              }, [
                newNote.value.important ? (openBlock(), createElementBlock("svg", _hoisted_47, [..._cache[12] || (_cache[12] = [
                  createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                ])])) : (openBlock(), createElementBlock("svg", _hoisted_48, [..._cache[13] || (_cache[13] = [
                  createBaseVNode("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }, null, -1)
                ])]))
              ]),
              createBaseVNode("div", _hoisted_49, [
                createBaseVNode("label", null, toDisplayString(unref(__)("Date", "google-analytics-for-wordpress")), 1),
                createVNode(unref(Component), {
                  modelValue: newNote.value.note_date_ymd,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => newNote.value.note_date_ymd = $event),
                  config: flatpickrConfig,
                  class: "monsterinsights-site-note-datepicker",
                  disabled: isSaving.value
                }, null, 8, ["modelValue", "disabled"])
              ]),
              createBaseVNode("div", _hoisted_50, [
                createBaseVNode("label", null, toDisplayString(unref(__)("Name", "google-analytics-for-wordpress")), 1),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => newNote.value.note_title = $event),
                  type: "text",
                  class: normalizeClass(["monsterinsights-site-note-input", { "monsterinsights-site-note-input--error": createError.value }]),
                  placeholder: unref(__)("e.g. Checkout Funnel", "google-analytics-for-wordpress"),
                  disabled: isSaving.value,
                  onInput: _cache[5] || (_cache[5] = ($event) => createError.value = "")
                }, null, 42, _hoisted_51), [
                  [vModelText, newNote.value.note_title]
                ]),
                createError.value ? (openBlock(), createElementBlock("span", _hoisted_52, toDisplayString(createError.value), 1)) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_53, [
                createBaseVNode("label", null, toDisplayString(unref(__)("Category", "google-analytics-for-wordpress")), 1),
                createBaseVNode("div", _hoisted_54, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => newNote.value.category.id = $event),
                    disabled: isSaving.value
                  }, [
                    createBaseVNode("option", _hoisted_56, toDisplayString(unref(__)("Select Category", "google-analytics-for-wordpress")), 1),
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(siteNotesStore).categories, (category) => {
                      return openBlock(), createElementBlock("option", {
                        key: category.id,
                        value: category.id
                      }, toDisplayString(category.name), 9, _hoisted_57);
                    }), 128))
                  ], 8, _hoisted_55), [
                    [vModelSelect, newNote.value.category.id]
                  ]),
                  createVNode(Icon, {
                    name: "chevron-down",
                    size: 16
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_58, [
              createBaseVNode("button", {
                class: "monsterinsights-button-secondary",
                disabled: isSaving.value,
                onClick: showListView
              }, toDisplayString(unref(__)("Cancel", "google-analytics-for-wordpress")), 9, _hoisted_59),
              createBaseVNode("button", {
                class: "monsterinsights-button",
                disabled: isSaving.value,
                onClick: createNote
              }, toDisplayString(unref(__)("Create Note", "google-analytics-for-wordpress")), 9, _hoisted_60)
            ])
          ])
        ]))
      ]);
    };
  }
};
export {
  _sfc_main as _,
  useSiteNotesStore as u
};
