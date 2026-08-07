import { o as openBlock, c as createElementBlock, a as createBaseVNode, m as computed, a1 as storeToRefs, C as watch, y as onMounted, E as createBlock, D as withCtx, t as toDisplayString, u as unref, w as withDirectives, F as Fragment, f as renderList, P as vModelSelect, b as createVNode, s as createCommentVNode, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as __, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, F as isSampleDataEnabled } from "../reports-LbXqkgoM.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useModal } from "./addons-CSVIjAyY.js";
import { i as isAddonActive, g as getNonce, a as ajaxPost } from "./ajax-B_XS1gT5.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TheAppHeader-DEdY-dez.js";
import "./AppOverlays-BGer0Qoo.js";
import "./dateIntervals-BPoui_3H.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./Modal-B9mMTzc_.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./useNotices-BpzNuZJ7.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
const _hoisted_1$1 = {
  key: 0,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$1 = {
  key: 1,
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _sfc_main$1 = {
  __name: "ExceptionsStatus",
  props: {
    status: {
      type: [String, Boolean],
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isUnresolved = computed(() => String(props.status) !== "true");
    return (_ctx, _cache) => {
      return isUnresolved.value ? (openBlock(), createElementBlock("svg", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
        createBaseVNode("path", {
          d: "M10 0C4.47715 0 0 4.47715 0 10C0 15.5229 4.47715 20 10 20C15.5229 20 20 15.5229 20 10C20 4.47715 15.5229 0 10 0ZM14.2908 4.68383L16.3684 6.76147L9.87915 13.252L7.81372 15.3162L5.73608 13.2385L3.63158 11.1328L5.6958 9.06858L7.8003 11.1743L14.2908 4.68383Z",
          fill: "#4CAF50"
        }, null, -1)
      ])])) : (openBlock(), createElementBlock("svg", _hoisted_2$1, [..._cache[1] || (_cache[1] = [
        createBaseVNode("path", {
          d: "M10 0C4.47717 0 0 4.47717 0 10C0 15.5228 4.47717 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47717 15.5228 0 10 0ZM10 2.17285C14.3228 2.17285 17.8259 5.67827 17.8259 10C17.8259 14.3218 14.3228 17.8259 10 17.8259C5.67717 17.8259 2.17407 14.3218 2.17407 10C2.17408 5.67827 5.67717 2.17285 10 2.17285ZM13.8318 5.25147L8.03588 11.0486L6.156 9.1687L4.31152 11.012L6.1914 12.8919L8.04808 14.7485L9.89137 12.9041L15.6885 7.10815L13.8318 5.25147Z",
          fill: "#BDBDBD"
        }, null, -1)
      ])]));
    };
  }
};
const sampleData = [
  {
    id: 529,
    category: "Engagement",
    time: "August 21, 9:15:23 AM",
    resolved: false,
    description: "Bounce rate decreased by 25% over the past 7 days"
  },
  {
    id: 535,
    category: "eCommerce",
    time: "August 19, 10:45:12 PM",
    resolved: false,
    description: "Prior day AOV was the lowest in the last 30 days."
  },
  {
    id: 530,
    category: "Engagement",
    time: "August 15, 2:30:45 PM",
    resolved: false,
    description: "Average time on site decreased by 35% compared to the prior 7 days"
  },
  {
    id: 525,
    category: "eCommerce",
    time: "August 12, 11:20:33 AM",
    resolved: false,
    description: "In the last 5 days number of sales increased by 85%"
  },
  {
    id: 534,
    category: "eCommerce",
    time: "August 8, 3:55:18 PM",
    resolved: false,
    description: "Prior day AOV was the highest in the last 30 days."
  },
  {
    id: 528,
    category: "Engagement",
    time: "August 5, 1:05:42 PM",
    resolved: false,
    description: "In the last 7 days engagement rate dropped by 28%"
  },
  {
    id: 533,
    category: "eCommerce",
    time: "August 3, 8:40:27 AM",
    resolved: false,
    description: "Prior day transactions were the lowest in the last 30 days."
  },
  {
    id: 532,
    category: "eCommerce",
    time: "July 31, 4:12:59 PM",
    resolved: false,
    description: "Prior day transactions were the highest in the last 30 days."
  },
  {
    id: 531,
    category: "Engagement",
    time: "July 28, 7:25:36 AM",
    resolved: false,
    description: "Returning visits decreased by 22%"
  },
  {
    id: 524,
    category: "eCommerce",
    time: "July 25, 5:48:14 PM",
    resolved: false,
    description: "In the last 5 days conversion rate increased by 15%"
  },
  {
    id: 526,
    category: "Marketing",
    time: "July 22, 12:15:08 PM",
    resolved: false,
    description: "In the last 5 days test_campaign campaign generated 12 sales"
  },
  {
    id: 527,
    category: "Marketing",
    time: "July 19, 6:33:52 PM",
    resolved: false,
    description: "In the last 5 days test_source source generated 7 sales"
  },
  {
    id: 509,
    category: "Engagement",
    time: "July 16, 9:45:21 AM",
    resolved: false,
    description: "In the last 7 days engagement rate dropped by 32%"
  },
  {
    id: 515,
    category: "eCommerce",
    time: "July 13, 2:18:37 PM",
    resolved: false,
    description: "Prior day AOV was the highest in the last 30 days."
  },
  {
    id: 507,
    category: "Marketing",
    time: "July 10, 11:05:49 AM",
    resolved: false,
    description: "In the last 5 days test_campaign campaign generated 8 sales"
  },
  {
    id: 511,
    category: "Engagement",
    time: "July 7, 3:42:15 PM",
    resolved: false,
    description: "Average time on site decreased by 18% compared to the prior 7 days"
  },
  {
    id: 512,
    category: "Engagement",
    time: "July 4, 1:27:33 PM",
    resolved: false,
    description: "Returning visits decreased by 27%"
  },
  {
    id: 516,
    category: "eCommerce",
    time: "July 1, 4:55:28 PM",
    resolved: false,
    description: "Prior day AOV was the lowest in the last 30 days."
  },
  {
    id: 505,
    category: "eCommerce",
    time: "June 28, 10:12:45 AM",
    resolved: false,
    description: "In the last 5 days conversion rate increased by 9%"
  },
  {
    id: 506,
    category: "eCommerce",
    time: "June 25, 8:30:17 AM",
    resolved: false,
    description: "In the last 5 days number of sales increased by 120%"
  }
];
const _hoisted_1 = { class: "monsterinsights-overview-report-table monsterinsights-exceptions-report" };
const _hoisted_2 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_3 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_4 = { class: "monsterinsights-overview-report-table__header-right" };
const _hoisted_5 = { class: "monsterinsights-filter-modal__select-wrapper" };
const _hoisted_6 = ["value"];
const _hoisted_7 = { class: "monsterinsights-filter-modal__select-wrapper" };
const _hoisted_8 = ["value"];
const _hoisted_9 = { class: "monsterinsights-overview-report-table__table-wrapper" };
const _hoisted_10 = { class: "monsterinsights-overview-report-table__table" };
const _hoisted_11 = { key: 0 };
const _hoisted_12 = {
  key: 0,
  class: "monsterinsights-overview-report-table__row--loading"
};
const _hoisted_13 = ["colspan"];
const _hoisted_14 = {
  key: 1,
  class: "monsterinsights-overview-report-table__row--empty"
};
const _hoisted_15 = ["colspan"];
const _hoisted_16 = { class: "monsterinsights-exceptions-report__status-cell" };
const _hoisted_17 = {
  key: 0,
  class: "monsterinsights-exceptions-report__action-cell"
};
const _hoisted_18 = ["onClick"];
const _hoisted_19 = {
  key: 0,
  class: "monsterinsights-exceptions-report__pagination"
};
const _hoisted_20 = ["disabled"];
const _hoisted_21 = ["disabled"];
const _sfc_main = {
  __name: "ExceptionsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "agency", requiredAddon: "exceptions" });
    const { showLoadingModal, showErrorModal, closeModal } = useModal();
    const loading = ref(false);
    const items = ref([]);
    const pagination = ref({ total: 0, pages: 0, page: 1, per_page: 20 });
    const pageNumber = ref(1);
    const statusFilter = ref("");
    const categoryFilter = ref("");
    const statusOptions = [
      { value: "", label: __("Any", "google-analytics-for-wordpress") },
      { value: "resolved", label: __("Once", "google-analytics-for-wordpress") },
      { value: "unresolved", label: __("Recurring", "google-analytics-for-wordpress") }
    ];
    const categoryOptions = [
      { value: "", label: __("All Categories", "google-analytics-for-wordpress") },
      { value: "ecommerce", label: __("eCommerce", "google-analytics-for-wordpress") },
      { value: "engagement", label: __("Engagement", "google-analytics-for-wordpress") },
      { value: "marketing", label: __("Marketing", "google-analytics-for-wordpress") },
      { value: "sources", label: __("Sources", "google-analytics-for-wordpress") }
    ];
    function loadSampleData() {
      items.value = sampleData;
      pagination.value = { total: sampleData.length, pages: 1, page: 1, per_page: 20 };
    }
    async function fetchReport() {
      if (!dateRange.value?.start || !dateRange.value?.end) return;
      if (isBlocked.value || isSampleDataEnabled()) {
        loadSampleData();
        return;
      }
      if (!isAddonActive("exceptions")) {
        loadSampleData();
        return;
      }
      loading.value = true;
      try {
        const formData = new FormData();
        formData.set("action", "monsterinsights_exceptions_report");
        formData.set("nonce", getNonce());
        formData.set("start", dateRange.value.start);
        formData.set("end", dateRange.value.end);
        formData.set("status", statusFilter.value);
        formData.set("category", categoryFilter.value);
        formData.set("page", pageNumber.value);
        formData.set("per_page", "20");
        const response = await ajaxPost(formData);
        if (response.success && response.data) {
          items.value = response.data.items || [];
          pagination.value = response.data.pagination || { total: 0, pages: 0, page: 1, per_page: 20 };
        }
      } catch (_err) {
        items.value = [];
      } finally {
        loading.value = false;
      }
    }
    function onFilterChange() {
      pageNumber.value = 1;
      fetchReport();
    }
    function goToPage(page) {
      pageNumber.value = page;
      fetchReport();
    }
    async function deleteException(exceptionId) {
      showLoadingModal({ title: __("Deleting Exception", "google-analytics-for-wordpress") });
      try {
        const formData = new FormData();
        formData.set("action", "monsterinsights_exceptions_delete");
        formData.set("nonce", getNonce());
        formData.set("exception_id", exceptionId);
        const response = await ajaxPost(formData);
        closeModal();
        if (response.success) {
          fetchReport();
        }
      } catch (_err) {
        closeModal();
        showErrorModal({ title: __("Error deleting exception.", "google-analytics-for-wordpress") });
      }
    }
    watch(dateRange, () => {
      pageNumber.value = 1;
      fetchReport();
    }, { deep: true });
    onMounted(() => fetchReport());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "agency",
        "required-addon": "exceptions",
        "upsell-feature": "exceptions"
      }, {
        table: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h3", _hoisted_3, toDisplayString(unref(__)("Exceptions Report", "google-analytics-for-wordpress")), 1),
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("div", _hoisted_5, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => statusFilter.value = $event),
                    onChange: onFilterChange
                  }, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(statusOptions, (opt) => {
                      return createBaseVNode("option", {
                        key: opt.value,
                        value: opt.value
                      }, toDisplayString(opt.label), 9, _hoisted_6);
                    }), 64))
                  ], 544), [
                    [vModelSelect, statusFilter.value]
                  ]),
                  createVNode(Icon, {
                    name: "chevron-down",
                    size: 16
                  })
                ]),
                createBaseVNode("div", _hoisted_7, [
                  withDirectives(createBaseVNode("select", {
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => categoryFilter.value = $event),
                    onChange: onFilterChange
                  }, [
                    (openBlock(), createElementBlock(Fragment, null, renderList(categoryOptions, (opt) => {
                      return createBaseVNode("option", {
                        key: opt.value,
                        value: opt.value
                      }, toDisplayString(opt.label), 9, _hoisted_8);
                    }), 64))
                  ], 544), [
                    [vModelSelect, categoryFilter.value]
                  ]),
                  createVNode(Icon, {
                    name: "chevron-down",
                    size: 16
                  })
                ])
              ])
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("table", _hoisted_10, [
                createBaseVNode("thead", null, [
                  createBaseVNode("tr", null, [
                    createBaseVNode("th", null, toDisplayString(unref(__)("Category", "google-analytics-for-wordpress")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(__)("Time", "google-analytics-for-wordpress")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(__)("Recurring", "google-analytics-for-wordpress")), 1),
                    createBaseVNode("th", null, toDisplayString(unref(__)("Description", "google-analytics-for-wordpress")), 1),
                    !unref(isBlocked) ? (openBlock(), createElementBlock("th", _hoisted_11, toDisplayString(unref(__)("Action", "google-analytics-for-wordpress")), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createBaseVNode("tbody", null, [
                  loading.value ? (openBlock(), createElementBlock("tr", _hoisted_12, [
                    createBaseVNode("td", {
                      colspan: unref(isBlocked) ? 4 : 5,
                      class: "monsterinsights-overview-report-table__cell-loading"
                    }, [
                      createBaseVNode("span", null, toDisplayString(unref(__)("Loading...", "google-analytics-for-wordpress")), 1)
                    ], 8, _hoisted_13)
                  ])) : items.value.length === 0 ? (openBlock(), createElementBlock("tr", _hoisted_14, [
                    createBaseVNode("td", {
                      colspan: unref(isBlocked) ? 4 : 5,
                      class: "monsterinsights-overview-report-table__cell-empty"
                    }, toDisplayString(unref(__)("No exceptions found for the selected date range.", "google-analytics-for-wordpress")), 9, _hoisted_15)
                  ])) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(items.value, (item) => {
                    return openBlock(), createElementBlock("tr", {
                      key: item.id
                    }, [
                      createBaseVNode("td", null, toDisplayString(item.category), 1),
                      createBaseVNode("td", null, toDisplayString(item.time), 1),
                      createBaseVNode("td", _hoisted_16, [
                        createVNode(_sfc_main$1, {
                          status: String(item.resolved)
                        }, null, 8, ["status"])
                      ]),
                      createBaseVNode("td", null, toDisplayString(item.description), 1),
                      !unref(isBlocked) ? (openBlock(), createElementBlock("td", _hoisted_17, [
                        createBaseVNode("button", {
                          type: "button",
                          class: "monsterinsights-exceptions-report__delete-btn",
                          onClick: ($event) => deleteException(item.id)
                        }, [
                          _cache[4] || (_cache[4] = createBaseVNode("svg", {
                            width: "12",
                            height: "14",
                            viewBox: "0 0 12 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg"
                          }, [
                            createBaseVNode("path", {
                              d: "M10.9688 2.15625H8.86133L7.99805 0.734375C7.79492 0.404297 7.33789 0.125 6.95703 0.125H4.39258C4.01172 0.125 3.55469 0.404297 3.35156 0.734375L2.48828 2.15625H0.40625C0.177734 2.15625 0 2.35938 0 2.5625V2.96875C0 3.19727 0.177734 3.375 0.40625 3.375H0.8125L1.3457 11.9824C1.37109 12.6172 1.92969 13.125 2.56445 13.125H8.78516C9.41992 13.125 9.97852 12.6172 10.0039 11.9824L10.5625 3.375H10.9688C11.1719 3.375 11.375 3.19727 11.375 2.96875V2.5625C11.375 2.35938 11.1719 2.15625 10.9688 2.15625ZM4.39258 1.34375H6.95703L7.43945 2.15625H3.91016L4.39258 1.34375ZM8.78516 11.9062H2.56445L2.03125 3.375H9.31836L8.78516 11.9062Z",
                              fill: "#EB5757"
                            })
                          ], -1)),
                          createBaseVNode("span", null, toDisplayString(unref(__)("Delete", "google-analytics-for-wordpress")), 1)
                        ], 8, _hoisted_18)
                      ])) : createCommentVNode("", true)
                    ]);
                  }), 128))
                ])
              ])
            ]),
            pagination.value.pages > 1 ? (openBlock(), createElementBlock("div", _hoisted_19, [
              createBaseVNode("button", {
                type: "button",
                disabled: pageNumber.value <= 1,
                onClick: _cache[2] || (_cache[2] = ($event) => goToPage(pageNumber.value - 1))
              }, toDisplayString(unref(__)("Previous", "google-analytics-for-wordpress")), 9, _hoisted_20),
              createBaseVNode("span", null, toDisplayString(unref(sprintf)(unref(__)("Page %1$d of %2$d", "google-analytics-for-wordpress"), pageNumber.value, pagination.value.pages)), 1),
              createBaseVNode("button", {
                type: "button",
                disabled: pageNumber.value >= pagination.value.pages,
                onClick: _cache[3] || (_cache[3] = ($event) => goToPage(pageNumber.value + 1))
              }, toDisplayString(unref(__)("Next", "google-analytics-for-wordpress")), 9, _hoisted_21)
            ])) : createCommentVNode("", true)
          ])
        ]),
        _: 1
      });
    };
  }
};
const ExceptionsReport = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c95f02c5"]]);
export {
  ExceptionsReport as default
};
