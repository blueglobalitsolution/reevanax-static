import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { k as getMiGlobal, y as onMounted, z as onBeforeUnmount, C as watch, o as openBlock, c as createElementBlock, a as createBaseVNode, B as withModifiers, i as normalizeClass, w as withDirectives, ax as vShow, F as Fragment, f as renderList, K as renderSlot, A as createTextVNode, t as toDisplayString, aF as vModelCheckbox, u as unref, s as createCommentVNode, v as vModelText, b as createVNode, j as ref, m as computed, G as withKeys, l as defineStore, L as reactive, E as createBlock, D as withCtx } from "./toastStore-CRCNwITM.js";
import { s as script } from "./vue-multiselect.esm-DVzdjNub.js";
import { g as getNonce, b as getAjaxUrl, q as sanitizeHtml } from "./ajax-B_XS1gT5.js";
import { C as Component } from "./flatpickr-CNAtgokQ.js";
import { h as hooks, d as dateIntervals } from "./dateIntervals-BPoui_3H.js";
import "./useAuthGate-DCWToggq.js";
import { u as useOverviewReportStore } from "../reports-LbXqkgoM.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { u as useNotices } from "./useNotices-BpzNuZJ7.js";
import "./default-i18n-KrIlCc2E.js";
import "./Modal-B9mMTzc_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./auth-CC6F9_ZC.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./Icon-Cz1-Vo-r.js";
import "./UniversallyPromo-NH8NC5TQ.js";
const _hoisted_1$2 = { class: "monsterinsights-reports-datepicker" };
const _hoisted_2$2 = { class: "monsterinsights-reports-interval-dropdown-container" };
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$2 = { class: "monsterinsights-datepicker-default-buttons" };
const _hoisted_5$2 = ["onClick", "innerHTML"];
const _hoisted_6$2 = ["textContent"];
const _hoisted_7 = { key: 0 };
const _hoisted_8 = { class: "monsterinsights-datepicker-input-switch" };
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = { class: "monsterinsights-datepicker-range-inputs" };
const _hoisted_11$1 = { class: "monsterinsights-datepicker-range-input" };
const _hoisted_12$1 = ["textContent"];
const _hoisted_13$1 = { class: "monsterinsights-datepicker-range-input-fields" };
const _hoisted_14$1 = {
  key: 0,
  class: "monsterinsights-datepicker-range-input"
};
const _hoisted_15$1 = ["textContent"];
const _hoisted_16$1 = { class: "monsterinsights-datepicker-range-input-fields" };
const _hoisted_17$1 = { class: "monsterinsights-datepicker-calender-wrapper" };
const _hoisted_18$1 = { class: "monsterinsights-datepicker-calenders" };
const _hoisted_19$1 = { class: "monsterinsights-datepicker-calender" };
const _hoisted_20$1 = {
  key: 0,
  class: "monsterinsights-datepicker-calender"
};
const _hoisted_21$1 = {
  key: 0,
  class: "monsterinsights-datepicker-calenders-bottom"
};
const _hoisted_22$1 = ["textContent"];
const _hoisted_23$1 = ["disabled", "textContent"];
const MOBILE_WIDTH = 783;
const _sfc_main$3 = {
  __name: "ReportsDatePicker",
  props: {
    /**
     * Two-way value model — { start, end, interval, compareReport, compareStart, compareEnd, text, compareText }.
     */
    modelValue: {
      type: Object,
      default: () => ({
        start: "",
        end: "",
        interval: "last30days",
        compareReport: false,
        compareStart: "",
        compareEnd: "",
        text: "",
        compareText: ""
      })
    },
    compareOptions: { type: Boolean, default: true }
  },
  emits: ["update:modelValue", "date-changed", "apply"],
  setup(__props, { emit: __emit }) {
    const { __: __2, sprintf } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const isMobile = ref(window.innerWidth < MOBILE_WIDTH);
    const dropdownVisible = ref(false);
    const isCalendarOpen = ref(false);
    const dateInputStart = ref("");
    const dateInputEnd = ref("");
    const dateCompareStart = ref("");
    const dateCompareEnd = ref("");
    const compareDateLocal = ref(false);
    const datePicker = ref(null);
    const comparePicker = ref(null);
    const dropdownEl = ref(null);
    const text_compare_to_previous = __2("Compare to Previous", "google-analytics-for-wordpress");
    const text_cancel = __2("Cancel", "google-analytics-for-wordpress");
    const text_apply = __2("Apply", "google-analytics-for-wordpress");
    const text_date_range = __2("Date Range", "google-analytics-for-wordpress");
    const text_compare_to = __2("Compare To", "google-analytics-for-wordpress");
    const tz = getMiGlobal("timezone") || "UTC";
    const config = {
      mode: "range",
      disableMobile: "true",
      dateFormat: "Y-m-d",
      disable: [
        (dataDate) => {
          const odate = hooks(dataDate).tz(tz);
          const today = hooks();
          const lowerBound = hooks("01-01-2005", "MM-DD-YYYY").tz(tz);
          const inrange_left = odate.isBetween(lowerBound, today);
          const inrange_right = hooks(dataDate).isBetween(lowerBound, today);
          return !inrange_left || !inrange_right;
        }
      ],
      static: true,
      inline: true
    };
    const intervals = computed(() => dateIntervals);
    const interval = computed({
      get() {
        let i = props.modelValue.interval;
        if (i === 30 || i === "30" || i === "false") i = "last30days";
        if (i === 7 || i === "7") i = "last7days";
        return i;
      },
      set(value) {
        emitUpdate({ interval: value });
      }
    });
    const localDate = computed({
      get: () => props.modelValue.text || "",
      set: (value) => emitUpdate({ text: value })
    });
    const comparePickerDate = computed({
      get: () => props.modelValue.compareText || "",
      set: (value) => emitUpdate({ compareText: value })
    });
    const compareDate = computed({
      get: () => compareDateLocal.value,
      set: (value) => {
        compareDateLocal.value = value;
        if (!value) emitUpdate({ compareReport: value });
        if (interval.value) {
          dropdownVisible.value = false;
          sendReportRequest();
        }
      }
    });
    const dropdownClass = computed(() => {
      let cls = "monsterinsights-reports-intervals-dropdown";
      if (!dropdownVisible.value) cls += " monsterinsights-hide";
      return cls;
    });
    const showDefaultButtons = computed(() => true);
    const textDatepickerPlaceholder = computed(() => {
      return isMobile.value ? __2("Custom Date Range", "google-analytics-for-wordpress") : __2("Set Custom Date Range", "google-analytics-for-wordpress");
    });
    const selectedIntervalText = computed(() => {
      if (props.modelValue.compareReport) {
        return sprintf(
          __2("%1$sComparison:%2$s %3$s To %4$s", "google-analytics-for-wordpress"),
          '<b class="monsterinsights-custom-dates-label">',
          "</b>",
          props.modelValue.intervalText || "",
          props.modelValue.intervalCompareText || ""
        );
      }
      if (interval.value && intervals.value[interval.value]) {
        const i = intervals.value[interval.value];
        return getIntervalFormatted(i.text, i.start, i.end);
      }
      let startDate = hooks(props.modelValue.start);
      let endDate = hooks(props.modelValue.end);
      if (dateInputStart.value && !props.modelValue.start) startDate = hooks(dateInputStart.value);
      if (dateInputEnd.value && !props.modelValue.end) endDate = hooks(dateInputEnd.value);
      return sprintf(
        __2("%1$sCustom dates:%2$s %3$s - %4$s", "google-analytics-for-wordpress"),
        '<b class="monsterinsights-custom-dates-label">',
        "</b>",
        startDate.format("MMMM D"),
        endDate.format("MMMM D, YYYY")
      );
    });
    const showIfFlatpickrClass = computed(() => {
      if (!datePicker.value) return "monsterinsights-hide";
      if (isCalendarOpen.value || !interval.value) return "";
      return "monsterinsights-hide";
    });
    const isReadyToApply = computed(() => {
      if (!compareDate.value) return true;
      return !!(props.modelValue.compareStart && props.modelValue.compareEnd);
    });
    function emitUpdate(partial) {
      emit("update:modelValue", { ...props.modelValue, ...partial });
    }
    function intervalButtonClass(days) {
      let cls = "monsterinsights-button ";
      if (interval.value === days) cls += " monsterinsights-interval-active";
      return cls;
    }
    function getIntervalText(startDate, endDate) {
      if (startDate.format("YYYYMMDD") === endDate.format("YYYYMMDD")) {
        return startDate.format("MMMM D, YYYY");
      }
      return startDate.format("MMMM D") + " - " + endDate.format("MMMM D, YYYY");
    }
    function getIntervalFormatted(text, startDate, endDate) {
      return "<b>" + text + '<span class="monsterinsights-datepicker-colon">:</span></b> <span class="monsterinsights-datepicker-interval-dates">' + getIntervalText(startDate, endDate) + "</span>";
    }
    function toggleDropdown() {
      dropdownVisible.value = !dropdownVisible.value;
      isCalendarOpen.value = false;
    }
    function getFormattedDate(d) {
      if (d instanceof Date) {
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${d.getFullYear()}-${m}-${day}`;
      }
      return d;
    }
    function getInterval(available) {
      dropdownVisible.value = false;
      emitUpdate({
        interval: available.interval,
        start: available.start.format("YYYY-MM-DD"),
        end: available.end.format("YYYY-MM-DD"),
        compareStart: available.compareStart.format("YYYY-MM-DD"),
        compareEnd: available.compareEnd.format("YYYY-MM-DD")
      });
      emit("date-changed", available.interval);
      window.blur && window.blur();
      sendReportRequest();
      defaultSelectClear();
    }
    function openFlatPicker() {
      isCalendarOpen.value = true;
      emitUpdate({
        interval: false,
        start: "",
        end: "",
        compareStart: "",
        compareEnd: ""
      });
    }
    function updateDates(selectedDates) {
      if (compareDate.value) return;
      dropdownVisible.value = false;
      if (selectedDates[0] && selectedDates[1]) {
        const start = getFormattedDate(selectedDates[0]);
        const end = getFormattedDate(selectedDates[1]);
        emitUpdate({ start, end, interval: false });
        document.activeElement?.blur && document.activeElement.blur();
        emit("date-changed");
        sendReportRequest();
      }
    }
    function onDatePickerChange(event) {
      if (event[0]) {
        dateInputStart.value = hooks(event[0]).format("MMMM D, YYYY");
        emitUpdate({ start: getFormattedDate(event[0]) });
      }
      if (event[1]) {
        dateInputEnd.value = hooks(event[1]).format("MMMM D, YYYY");
        emitUpdate({ end: getFormattedDate(event[1]) });
      }
    }
    function onComparePickerChange(event) {
      if (event[0]) {
        dateCompareStart.value = hooks(event[0]).format("MMMM D, YYYY");
        emitUpdate({ compareStart: getFormattedDate(event[0]) });
      }
      if (event[1]) {
        dateCompareEnd.value = hooks(event[1]).format("MMMM D, YYYY");
        emitUpdate({ compareEnd: getFormattedDate(event[1]) });
      }
    }
    function onCancelDatepicker() {
      isCalendarOpen.value = false;
      dropdownVisible.value = false;
    }
    function onApplyDatepicker() {
      if (!isReadyToApply.value) return;
      dropdownVisible.value = false;
      emitUpdate({ interval: false });
      window.blur && window.blur();
      sendReportRequest();
    }
    function sendReportRequest() {
      emitUpdate({ compareReport: compareDateLocal.value });
      emit("apply", { ...props.modelValue, compareReport: compareDateLocal.value });
    }
    function maybeHideDropdown(event) {
      if (!dropdownEl.value) return;
      if (dropdownEl.value.contains(event.target)) return;
      isCalendarOpen.value = false;
      if (dropdownVisible.value) dropdownVisible.value = false;
    }
    function defaultSelectClear() {
      dateInputStart.value = "";
      dateInputEnd.value = "";
      dateCompareStart.value = "";
      dateCompareEnd.value = "";
    }
    let resizing = false;
    function handleResize() {
      if (resizing) return;
      resizing = true;
      const cb = () => {
        isMobile.value = window.innerWidth < MOBILE_WIDTH;
        resizing = false;
      };
      if (window.requestAnimationFrame) window.requestAnimationFrame(cb);
      else setTimeout(cb, 66);
    }
    onMounted(() => {
      compareDateLocal.value = !!props.modelValue.compareReport;
      if (!interval.value) {
        if (props.modelValue.start) dateInputStart.value = hooks(props.modelValue.start).format("MMMM D, YYYY");
        if (props.modelValue.end) dateInputEnd.value = hooks(props.modelValue.end).format("MMMM D, YYYY");
      }
      if (props.modelValue.compareReport) {
        if (props.modelValue.compareStart) dateCompareStart.value = hooks(props.modelValue.compareStart).format("MMMM D, YYYY");
        if (props.modelValue.compareEnd) dateCompareEnd.value = hooks(props.modelValue.compareEnd).format("MMMM D, YYYY");
      }
      window.addEventListener("resize", handleResize);
      document.body.addEventListener("click", maybeHideDropdown);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      document.body.removeEventListener("click", maybeHideDropdown);
    });
    watch(() => props.modelValue.compareReport, (val) => {
      compareDateLocal.value = !!val;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("div", _hoisted_2$2, [
          createBaseVNode("button", {
            class: "monsterinsights-reports-interval-date-info",
            onClick: withModifiers(toggleDropdown, ["stop"])
          }, [
            createBaseVNode("span", { innerHTML: selectedIntervalText.value }, null, 8, _hoisted_3$2),
            _cache[7] || (_cache[7] = createBaseVNode("i", { class: "monstericon-calendar-alt" }, null, -1))
          ]),
          createBaseVNode("div", {
            ref_key: "dropdownEl",
            ref: dropdownEl,
            class: normalizeClass(dropdownClass.value)
          }, [
            withDirectives(createBaseVNode("div", _hoisted_4$2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(intervals.value, (available, key) => {
                return openBlock(), createElementBlock("div", { key }, [
                  createBaseVNode("button", {
                    class: normalizeClass(intervalButtonClass(available.interval)),
                    onClick: ($event) => getInterval(available),
                    innerHTML: getIntervalFormatted(available.text, available.start, available.end)
                  }, null, 10, _hoisted_5$2)
                ]);
              }), 128)),
              renderSlot(_ctx.$slots, "beforeinterval"),
              createBaseVNode("div", null, [
                createBaseVNode("button", {
                  class: normalizeClass(intervalButtonClass(false)),
                  onClick: openFlatPicker
                }, [
                  _cache[8] || (_cache[8] = createBaseVNode("i", { class: "monstericon-calendar-alt" }, null, -1)),
                  _cache[9] || (_cache[9] = createTextVNode()),
                  createBaseVNode("span", {
                    textContent: toDisplayString(textDatepickerPlaceholder.value)
                  }, null, 8, _hoisted_6$2)
                ], 2)
              ]),
              __props.compareOptions ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createBaseVNode("div", _hoisted_8, [
                  createBaseVNode("label", null, [
                    createBaseVNode("span", {
                      class: normalizeClass(["monsterinsights-styled-checkbox", { "monsterinsights-styled-checkbox-checked": compareDate.value }])
                    }, null, 2),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => compareDate.value = $event),
                      type: "checkbox"
                    }, null, 512), [
                      [vModelCheckbox, compareDate.value]
                    ]),
                    createBaseVNode("span", {
                      class: "monsterinsights-checkbox-label",
                      textContent: toDisplayString(unref(text_compare_to_previous))
                    }, null, 8, _hoisted_9$1)
                  ])
                ])
              ])) : createCommentVNode("", true)
            ], 512), [
              [vShow, showDefaultButtons.value]
            ]),
            createBaseVNode("div", {
              class: normalizeClass(["monsterinsights-datepicker-range-wrapper", showIfFlatpickrClass.value])
            }, [
              createBaseVNode("div", _hoisted_10$1, [
                createBaseVNode("div", _hoisted_11$1, [
                  createBaseVNode("h3", {
                    textContent: toDisplayString(unref(text_date_range))
                  }, null, 8, _hoisted_12$1),
                  createBaseVNode("div", _hoisted_13$1, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => dateInputStart.value = $event),
                      type: "text"
                    }, null, 512), [
                      [vModelText, dateInputStart.value]
                    ]),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => dateInputEnd.value = $event),
                      type: "text"
                    }, null, 512), [
                      [vModelText, dateInputEnd.value]
                    ])
                  ])
                ]),
                compareDate.value ? (openBlock(), createElementBlock("div", _hoisted_14$1, [
                  createBaseVNode("h3", {
                    textContent: toDisplayString(unref(text_compare_to))
                  }, null, 8, _hoisted_15$1),
                  createBaseVNode("div", _hoisted_16$1, [
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => dateCompareStart.value = $event),
                      type: "text"
                    }, null, 512), [
                      [vModelText, dateCompareStart.value]
                    ]),
                    withDirectives(createBaseVNode("input", {
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => dateCompareEnd.value = $event),
                      type: "text"
                    }, null, 512), [
                      [vModelText, dateCompareEnd.value]
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createBaseVNode("div", _hoisted_17$1, [
                createBaseVNode("div", _hoisted_18$1, [
                  createBaseVNode("div", _hoisted_19$1, [
                    createVNode(unref(Component), {
                      ref_key: "datePicker",
                      ref: datePicker,
                      modelValue: localDate.value,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => localDate.value = $event),
                      config,
                      class: "monsterinsights-datepicker",
                      onOnClose: updateDates,
                      onOnChange: onDatePickerChange
                    }, null, 8, ["modelValue"])
                  ]),
                  compareDate.value ? (openBlock(), createElementBlock("div", _hoisted_20$1, [
                    createVNode(unref(Component), {
                      ref_key: "comparePicker",
                      ref: comparePicker,
                      modelValue: comparePickerDate.value,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => comparePickerDate.value = $event),
                      config,
                      class: "monsterinsights-datepicker",
                      onOnChange: onComparePickerChange
                    }, null, 8, ["modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                compareDate.value ? (openBlock(), createElementBlock("div", _hoisted_21$1, [
                  createBaseVNode("button", {
                    class: "monsterinsights-button monsterinsights-button-secondary",
                    onClick: onCancelDatepicker,
                    textContent: toDisplayString(unref(text_cancel))
                  }, null, 8, _hoisted_22$1),
                  createBaseVNode("button", {
                    class: normalizeClass(["monsterinsights-button", "monsterinsights-button-primary", { "monsterinsights-button-disabled": !isReadyToApply.value }]),
                    disabled: !isReadyToApply.value,
                    onClick: onApplyDatepicker,
                    textContent: toDisplayString(unref(text_apply))
                  }, null, 10, _hoisted_23$1)
                ])) : createCommentVNode("", true)
              ])
            ], 2)
          ], 2)
        ])
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "user-journey-report-pagination tablenav" };
const _hoisted_2$1 = {
  key: 0,
  class: "pagination-links"
};
const _hoisted_3$1 = { class: "paging-input" };
const _hoisted_4$1 = ["max"];
const _hoisted_5$1 = { class: "tablenav-paging-text" };
const _hoisted_6$1 = { class: "total-pages" };
const _sfc_main$2 = {
  __name: "UserJourneyPagination",
  props: {
    pagination: { type: Object, default: () => ({}) }
  },
  emits: ["page-change"],
  setup(__props, { emit: __emit }) {
    const { __: __2 } = wp.i18n;
    const props = __props;
    const emit = __emit;
    const text_of = __2("of", "google-analytics-for-wordpress");
    const currentPage = ref(props.pagination.page || 1);
    function goToPrev() {
      emit("page-change", Number(props.pagination.page) - 1);
    }
    function goToNext() {
      emit("page-change", Number(props.pagination.page) + 1);
    }
    function goToPage(page) {
      emit("page-change", Number(page));
    }
    watch(() => props.pagination.page, (val) => {
      currentPage.value = val;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", {
          class: normalizeClass(["tablenav-pages", { "one-page": __props.pagination.pages === 1 }])
        }, [
          __props.pagination.pages > 1 ? (openBlock(), createElementBlock("span", _hoisted_2$1, [
            Number(__props.pagination.page) === 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[4] || (_cache[4] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "«", -1)),
              _cache[5] || (_cache[5] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "‹", -1))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("a", {
                class: "first-page button",
                href: "#",
                role: "button",
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => goToPage(1), ["prevent"]))
              }, [..._cache[6] || (_cache[6] = [
                createBaseVNode("span", { "aria-hidden": "true" }, "«", -1)
              ])]),
              createBaseVNode("a", {
                class: "prev-page button",
                href: "#",
                role: "button",
                onClick: withModifiers(goToPrev, ["prevent"])
              }, [..._cache[7] || (_cache[7] = [
                createBaseVNode("span", { "aria-hidden": "true" }, "‹", -1)
              ])])
            ], 64)),
            createBaseVNode("span", _hoisted_3$1, [
              withDirectives(createBaseVNode("input", {
                id: "current-page-selector",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
                class: "current-page",
                type: "text",
                name: "paged",
                size: "1",
                "aria-describedby": "table-paging",
                max: __props.pagination.pages,
                onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => goToPage(currentPage.value), ["enter"]))
              }, null, 40, _hoisted_4$1), [
                [vModelText, currentPage.value]
              ]),
              createBaseVNode("span", _hoisted_5$1, [
                createTextVNode(toDisplayString(unref(text_of)) + " ", 1),
                createBaseVNode("span", _hoisted_6$1, toDisplayString(__props.pagination.pages), 1)
              ])
            ]),
            Number(__props.pagination.page) === Number(__props.pagination.pages) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              _cache[8] || (_cache[8] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "›", -1)),
              _cache[9] || (_cache[9] = createBaseVNode("span", {
                class: "tablenav-pages-navspan button disabled",
                "aria-hidden": "true"
              }, "»", -1))
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [
              createBaseVNode("a", {
                class: "next-page button",
                href: "#",
                role: "button",
                onClick: withModifiers(goToNext, ["prevent"])
              }, [..._cache[10] || (_cache[10] = [
                createBaseVNode("span", { "aria-hidden": "true" }, "›", -1)
              ])]),
              createBaseVNode("a", {
                class: "last-page button",
                href: "#",
                role: "button",
                onClick: _cache[3] || (_cache[3] = withModifiers(($event) => goToPage(__props.pagination.pages), ["prevent"]))
              }, [..._cache[11] || (_cache[11] = [
                createBaseVNode("span", { "aria-hidden": "true" }, "»", -1)
              ])])
            ], 64))
          ])) : createCommentVNode("", true)
        ], 2)
      ]);
    };
  }
};
const { __ } = wp.i18n;
const useUserJourneyStore = defineStore("userJourney", () => {
  const filterForm = reactive({
    search: "",
    sources: { value: "", label: __("All Sources", "google-analytics-for-wordpress") },
    mediums: { value: "", label: __("All Mediums", "google-analytics-for-wordpress") },
    campaigns: { value: "", label: __("All Campaigns", "google-analytics-for-wordpress") }
  });
  const journeyReports = ref({ items: [], pagination: {} });
  const isLoading = ref(false);
  const isDemo = ref(false);
  const addonError = ref(null);
  const itemsCount = computed(() => (journeyReports.value.items || []).length);
  function updateFilterForm({ name, value }) {
    filterForm[name] = value;
  }
  async function fetchReport(page = 1) {
    isLoading.value = true;
    addonError.value = null;
    const { dateRange } = useOverviewReportStore();
    const formData = new FormData();
    formData.append("action", "monsterinsights_user_journey_report");
    formData.append("nonce", getNonce());
    formData.append("search", filterForm.search || "");
    formData.append("start_date", dateRange.start);
    formData.append("end_date", dateRange.end);
    formData.append("sources", filterForm.sources?.value || "");
    formData.append("mediums", filterForm.mediums?.value || "");
    formData.append("campaigns", filterForm.campaigns?.value || "");
    formData.append("page", page);
    try {
      const response = await fetch(getAjaxUrl(), { method: "POST", body: formData });
      if (response.status === 400) {
        addonError.value = { status: 400 };
        isLoading.value = false;
        return { success: false, addonError: true };
      }
      const json = await response.json();
      if (json?.success) {
        journeyReports.value = {
          items: json.items || [],
          pagination: json.pagination || {}
        };
        isDemo.value = false;
      } else if (json?.demo) {
        journeyReports.value = { items: json.items || [], pagination: {} };
        isDemo.value = true;
      }
      return json;
    } catch (error) {
      return { success: false, error };
    } finally {
      isLoading.value = false;
    }
  }
  async function fetchFilterParams() {
    const formData = new FormData();
    formData.append("action", "monsterinsights_user_journey_report_filter_params");
    formData.append("nonce", getNonce());
    try {
      const response = await fetch(getAjaxUrl(), { method: "POST", body: formData });
      const json = await response.json();
      if (json?.success && json.data) {
        return json.data;
      }
    } catch (_e) {
    }
    return { campaigns: [], mediums: [], sources: [] };
  }
  return {
    filterForm,
    journeyReports,
    isLoading,
    isDemo,
    addonError,
    itemsCount,
    updateFilterForm,
    fetchReport,
    fetchFilterParams
  };
});
const _hoisted_1 = { class: "monsterinsights-navigation-bar" };
const _hoisted_2 = { class: "monsterinsights-container" };
const _hoisted_3 = { class: "monsterinsights-user-journey-navbar" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = {
  id: "monsterinsights-user-journey-report",
  class: "monsterinsights-user-journey-report"
};
const _hoisted_6 = { class: "monsterinsights-container" };
const _hoisted_9 = { class: "monsterinsights-user-journey-report-filters" };
const _hoisted_10 = { class: "monsterinsights-user-journey-report-filters-left" };
const _hoisted_11 = { class: "monsterinsights-user-journey-report-filters-right" };
const _hoisted_12 = ["placeholder"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_15 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_16 = ["href"];
const _hoisted_17 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_18 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_19 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_20 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_21 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_22 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_23 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_24 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_25 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_26 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_27 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_28 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_29 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_30 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_31 = ["innerHTML"];
const _hoisted_32 = { class: "monsterinsights-ujr-table-small-device-content" };
const _hoisted_33 = { class: "monsterinsights-ujr-table-small-device-label" };
const _hoisted_34 = { class: "monsterinsights-ujr-table-small-device-value" };
const _hoisted_35 = {
  key: 2,
  class: "monsterinsights-notice monsterinsights-notice-info"
};
const _hoisted_36 = { class: "monsterinsights-notice-inner" };
const _hoisted_37 = { class: "notice-content" };
const _hoisted_38 = { class: "monsterinsights-notice-content" };
const DEMO_NOTICE_ID = "user_journey_report_notice";
const _sfc_main$1 = {
  __name: "UserJourneyReport",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const store = useUserJourneyStore();
    const overviewStore = useOverviewReportStore();
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const { loadingToast, closeToast } = useToast();
    const { addNotice, removeNotice } = useNotices();
    const text_heading = __2("User Journey Report", "google-analytics-for-wordpress");
    const text_filter = __2("Filter", "google-analytics-for-wordpress");
    const text_transaction_id = __2("Transaction ID", "google-analytics-for-wordpress");
    const text_search_journeys = __2("Search Journeys", "google-analytics-for-wordpress");
    const text_col_transaction = __2("Transaction ID", "google-analytics-for-wordpress");
    const text_col_purchase_date = __2("Purchase Date", "google-analytics-for-wordpress");
    const text_col_utm_campaign = __2("UTM Campaign", "google-analytics-for-wordpress");
    const text_col_utm_medium = __2("UTM Medium", "google-analytics-for-wordpress");
    const text_col_utm_source = __2("UTM Source", "google-analytics-for-wordpress");
    const text_col_order_total = __2("Order Total", "google-analytics-for-wordpress");
    const text_col_steps = __2("Steps to Purchase", "google-analytics-for-wordpress");
    const text_no_items = __2("No User Journey's matched your filters. Please remove some conditions and try again.", "google-analytics-for-wordpress");
    const text_demo_notice = __2("This is a demo report. The demo report will replaced after the first sale is tracked.", "google-analytics-for-wordpress");
    const isMobileView = ref(false);
    const currentExpandedRow = ref(null);
    const dataFetched = ref(false);
    const SAMPLE_JOURNEYS = [
      { transaction_id: "#10472", edit_order_url: "#", purchase_date: "June 9, 2026", utm_campaign: "summer-sale", utm_medium: "cpc", utm_source: "google", order_total: "$128.00", steps: 6 },
      { transaction_id: "#10468", edit_order_url: "#", purchase_date: "June 8, 2026", utm_campaign: "newsletter", utm_medium: "email", utm_source: "mailchimp", order_total: "$54.99", steps: 4 },
      { transaction_id: "#10455", edit_order_url: "#", purchase_date: "June 7, 2026", utm_campaign: "retargeting", utm_medium: "social", utm_source: "facebook", order_total: "$212.50", steps: 9 },
      { transaction_id: "#10441", edit_order_url: "#", purchase_date: "June 6, 2026", utm_campaign: "(not set)", utm_medium: "organic", utm_source: "google", order_total: "$76.00", steps: 3 },
      { transaction_id: "#10433", edit_order_url: "#", purchase_date: "June 5, 2026", utm_campaign: "spring-promo", utm_medium: "referral", utm_source: "partner-blog", order_total: "$340.00", steps: 11 },
      { transaction_id: "#10421", edit_order_url: "#", purchase_date: "June 4, 2026", utm_campaign: "summer-sale", utm_medium: "cpc", utm_source: "bing", order_total: "$45.25", steps: 5 },
      { transaction_id: "#10410", edit_order_url: "#", purchase_date: "June 3, 2026", utm_campaign: "newsletter", utm_medium: "email", utm_source: "mailchimp", order_total: "$159.99", steps: 7 }
    ];
    const parameters = ref({
      sources: [{ value: "", label: __2("All Sources", "google-analytics-for-wordpress") }],
      mediums: [{ value: "", label: __2("All Mediums", "google-analytics-for-wordpress") }],
      campaigns: [{ value: "", label: __2("All Campaigns", "google-analytics-for-wordpress") }]
    });
    const searchJourneysField = computed({
      get: () => store.filterForm.search,
      set: (val) => store.updateFilterForm({ name: "search", value: val })
    });
    const filterFieldCampaigns = computed({
      get: () => store.filterForm.campaigns,
      set: (val) => store.updateFilterForm({ name: "campaigns", value: val })
    });
    const filterFieldMediums = computed({
      get: () => store.filterForm.mediums,
      set: (val) => store.updateFilterForm({ name: "mediums", value: val })
    });
    const filterFieldSources = computed({
      get: () => store.filterForm.sources,
      set: (val) => store.updateFilterForm({ name: "sources", value: val })
    });
    const dateRangeModelValue = computed(() => ({
      interval: overviewStore.dateRange.interval ?? "last30days",
      start: overviewStore.dateRange.start ?? "",
      end: overviewStore.dateRange.end ?? "",
      compareReport: false,
      compareStart: "",
      compareEnd: ""
    }));
    let applyingDateChange = false;
    function onDateChange(updates) {
      if (applyingDateChange) {
        return;
      }
      applyingDateChange = true;
      Promise.resolve().then(() => {
        applyingDateChange = false;
      });
      overviewStore.updateDateRange(updates);
    }
    watch(
      () => [overviewStore.dateRange.start, overviewStore.dateRange.end],
      () => {
        if (isBlocked.value) return;
        loadingToast(__2("Searching Journeys", "google-analytics-for-wordpress"));
        store.fetchReport(1).finally(() => {
          dataFetched.value = true;
          closeToast();
        });
      }
    );
    function syncDemoNotice() {
      if (store.isDemo) {
        addNotice({
          id: DEMO_NOTICE_ID,
          type: "warning",
          dismissable: false,
          content: text_demo_notice
        });
      } else {
        removeNotice(DEMO_NOTICE_ID);
      }
    }
    watch(() => store.isDemo, syncDemoNotice, { immediate: true });
    function searchJourneys() {
      loadingToast(__2("Searching Journeys", "google-analytics-for-wordpress"));
      store.fetchReport(1).finally(() => {
        dataFetched.value = true;
        closeToast();
      });
    }
    function onFilterClick() {
      loadingToast(__2("Searching Journeys", "google-analytics-for-wordpress"));
      store.fetchReport(1).finally(() => {
        dataFetched.value = true;
        closeToast();
      });
    }
    function pageChange(page) {
      loadingToast(__2("Loading Journeys", "google-analytics-for-wordpress"));
      store.fetchReport(page).finally(() => {
        closeToast();
      });
    }
    function handleResize() {
      isMobileView.value = window.innerWidth < 783;
    }
    function expandCurrentRow(index) {
      currentExpandedRow.value = currentExpandedRow.value === index ? null : index;
    }
    async function loadFilterParams() {
      if (isBlocked.value) return;
      const params = await store.fetchFilterParams();
      (params.campaigns || []).forEach((value) => {
        parameters.value.campaigns.push({ value, label: value });
      });
      (params.mediums || []).forEach((value) => {
        parameters.value.mediums.push({ value, label: value });
      });
      (params.sources || []).forEach((value) => {
        parameters.value.sources.push({ value, label: value });
      });
    }
    function loadSampleData() {
      store.journeyReports.items = SAMPLE_JOURNEYS;
      store.journeyReports.pagination = {};
      dataFetched.value = true;
    }
    onMounted(() => {
      window.addEventListener("resize", handleResize);
      handleResize();
      if (isBlocked.value) {
        loadSampleData();
        return;
      }
      store.fetchReport(1).then(() => {
        dataFetched.value = true;
        loadFilterParams();
      });
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      removeNotice(DEMO_NOTICE_ID);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", _hoisted_1, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("nav", null, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("h1", {
                  textContent: toDisplayString(unref(text_heading))
                }, null, 8, _hoisted_4)
              ])
            ])
          ])
        ]),
        createBaseVNode("main", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createCommentVNode("", true),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createVNode(_sfc_main$3, {
                  "model-value": dateRangeModelValue.value,
                  "compare-options": false,
                  "onUpdate:modelValue": onDateChange
                }, null, 8, ["model-value"]),
                createVNode(unref(script), {
                  modelValue: filterFieldCampaigns.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filterFieldCampaigns.value = $event),
                  options: parameters.value.campaigns,
                  multiple: false,
                  "track-by": "value",
                  label: "label",
                  searchable: false,
                  selectLabel: "",
                  selectedLabel: "",
                  deselectLabel: "",
                  "allow-empty": false
                }, null, 8, ["modelValue", "options"]),
                createVNode(unref(script), {
                  modelValue: filterFieldMediums.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => filterFieldMediums.value = $event),
                  options: parameters.value.mediums,
                  multiple: false,
                  "track-by": "value",
                  label: "label",
                  searchable: false,
                  selectLabel: "",
                  selectedLabel: "",
                  deselectLabel: "",
                  "allow-empty": false
                }, null, 8, ["modelValue", "options"]),
                createVNode(unref(script), {
                  modelValue: filterFieldSources.value,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => filterFieldSources.value = $event),
                  options: parameters.value.sources,
                  multiple: false,
                  "track-by": "value",
                  label: "label",
                  searchable: false,
                  selectLabel: "",
                  selectedLabel: "",
                  deselectLabel: "",
                  "allow-empty": false
                }, null, 8, ["modelValue", "options"]),
                createBaseVNode("button", {
                  class: "monsterinsights-button monsterinsights-button-outline",
                  onClick: onFilterClick
                }, toDisplayString(unref(text_filter)), 1)
              ]),
              createBaseVNode("div", _hoisted_11, [
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => searchJourneysField.value = $event),
                  type: "text",
                  placeholder: unref(text_transaction_id),
                  class: "monsterinsights-search-transaction-id",
                  onKeyup: withKeys(searchJourneys, ["enter"])
                }, null, 40, _hoisted_12), [
                  [vModelText, searchJourneysField.value]
                ]),
                createBaseVNode("button", {
                  class: "monsterinsights-button",
                  onClick: searchJourneys
                }, toDisplayString(unref(text_search_journeys)), 1)
              ])
            ]),
            unref(store).journeyReports.items && unref(store).journeyReports.items.length > 0 ? (openBlock(), createElementBlock("table", {
              key: 1,
              class: normalizeClass(["monsterinsights-user-journey-report-table", { "monsterinsights-ujr-table-small-device": isMobileView.value }])
            }, [
              createBaseVNode("thead", null, [
                createBaseVNode("tr", null, [
                  createBaseVNode("th", null, toDisplayString(unref(text_col_transaction)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_purchase_date)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_utm_campaign)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_utm_medium)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_utm_source)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_order_total)), 1),
                  createBaseVNode("th", null, toDisplayString(unref(text_col_steps)), 1)
                ])
              ]),
              createBaseVNode("tbody", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).journeyReports.items, (report, index) => {
                  return openBlock(), createElementBlock("tr", {
                    key: String(report.transaction_id) + index,
                    class: normalizeClass({
                      "monsterinsights-ujr-table-small-device-row": isMobileView.value,
                      "monsterinsights-ujr-table-small-device-row-expanded": currentExpandedRow.value === index
                    })
                  }, [
                    createBaseVNode("td", {
                      class: "monsterinsights-ujr-table-small-device-heading",
                      onClick: ($event) => expandCurrentRow(index)
                    }, [
                      createBaseVNode("span", _hoisted_14, toDisplayString(unref(text_col_transaction)), 1),
                      createBaseVNode("span", _hoisted_15, [
                        createBaseVNode("a", {
                          href: report.edit_order_url
                        }, toDisplayString(report.transaction_id), 9, _hoisted_16)
                      ])
                    ], 8, _hoisted_13),
                    createBaseVNode("td", _hoisted_17, [
                      createBaseVNode("span", _hoisted_18, toDisplayString(unref(text_col_purchase_date)), 1),
                      createBaseVNode("span", _hoisted_19, toDisplayString(report.purchase_date), 1)
                    ]),
                    createBaseVNode("td", _hoisted_20, [
                      createBaseVNode("span", _hoisted_21, toDisplayString(unref(text_col_utm_campaign)), 1),
                      createBaseVNode("span", _hoisted_22, toDisplayString(report.utm_campaign), 1)
                    ]),
                    createBaseVNode("td", _hoisted_23, [
                      createBaseVNode("span", _hoisted_24, toDisplayString(unref(text_col_utm_medium)), 1),
                      createBaseVNode("span", _hoisted_25, toDisplayString(report.utm_medium), 1)
                    ]),
                    createBaseVNode("td", _hoisted_26, [
                      createBaseVNode("span", _hoisted_27, toDisplayString(unref(text_col_utm_source)), 1),
                      createBaseVNode("span", _hoisted_28, toDisplayString(report.utm_source), 1)
                    ]),
                    createBaseVNode("td", _hoisted_29, [
                      createBaseVNode("span", _hoisted_30, toDisplayString(unref(text_col_order_total)), 1),
                      createBaseVNode("span", {
                        class: "monsterinsights-ujr-table-small-device-value",
                        innerHTML: unref(sanitizeHtml)(report.order_total)
                      }, null, 8, _hoisted_31)
                    ]),
                    createBaseVNode("td", _hoisted_32, [
                      createBaseVNode("span", _hoisted_33, toDisplayString(unref(text_col_steps)), 1),
                      createBaseVNode("span", _hoisted_34, toDisplayString(report.steps), 1)
                    ])
                  ], 2);
                }), 128))
              ])
            ], 2)) : dataFetched.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
              createBaseVNode("div", _hoisted_36, [
                createBaseVNode("div", _hoisted_37, [
                  createBaseVNode("span", _hoisted_38, toDisplayString(unref(text_no_items)), 1)
                ])
              ])
            ])) : createCommentVNode("", true),
            createVNode(_sfc_main$2, {
              pagination: unref(store).journeyReports.pagination,
              onPageChange: pageChange
            }, null, 8, ["pagination"])
          ])
        ])
      ], 64);
    };
  }
};
const _sfc_main = {
  __name: "UserJourneyReport",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "userjourney"
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$1)
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
