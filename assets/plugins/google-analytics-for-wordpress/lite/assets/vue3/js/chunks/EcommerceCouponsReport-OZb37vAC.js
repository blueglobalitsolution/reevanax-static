import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-CYWVyQOI.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-BVSw1vKp.js";
import { a as fetchEcommerceCouponsData } from "./ecommerceReports-CNyjngur.js";
import { u as useReportPermissions } from "./useReportPermissions-BmPoRU_L.js";
import { u as useReport } from "./useReport-DcI-6j1p.js";
import { a as generateCouponsSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { a as formatCurr, b as formatNum } from "./overviewTableFormatters-wFNZFFbq.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { s as shouldHideNotSetValue } from "./reportValues-w2L28lgn.js";
import { R as ReportPageLayout } from "./ReportPageLayout-DRh-AXgM.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-CugP0h2D.js";
import "./TheAppHeader-UlGGczdg.js";
import "./ajax-Cs8hXZxp.js";
import "./AppOverlays-BiHC_lFe.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-Dhlund0O.js";
import "./useNotices-S9zihzZI.js";
import "./Modal-1xrAdYES.js";
import "./Icon-IGSMl9BJ.js";
import "./useAuthGate-C8DK-TWq.js";
import "./flatpickr-Cp745iL5.js";
import "./useFeatureGate-CUAqZTIu.js";
import "./UniversallyPromo-DeEkBX_u.js";
import "./reportCache-wRXWOVsy.js";
import "./settings-CAo9YTkR.js";
import "./ReAuthModal-OpjMHQx-.js";
import "./auth-Bv0009mY.js";
import "./LoadingSpinnerInline-vIZp-TKh.js";
import "./ReportTableModal-DOo3mbW6.js";
const _sfc_main = {
  __name: "EcommerceCouponsReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const columns = [
      { key: "couponName", label: __("Coupon Name", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), sortable: true },
      { key: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-for-wordpress"), sortable: true, totalType: "average" }
    ];
    const aggregatedCoupons = computed(
      () => aggregateDateEntityRows(rawData.value?.coupons_table?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 1
      })
    );
    function formatCouponRow(dims, vals) {
      const name = dims[0] != null && String(dims[0]).trim() !== "" ? String(dims[0]) : "(not set)";
      return {
        couponName: name,
        revenue: formatCurr(vals[0] || 0),
        transactions: formatNum(vals[1] || 0),
        avgOrderValue: formatCurr(vals[2] || 0)
      };
    }
    const tableRows = computed(
      () => aggregatedCoupons.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatCouponRow(entity.dims, entity.current))
    );
    const compareRows = computed(
      () => aggregateDateEntityRows(rawData.value?.coupons_table_prev?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 1
      }).filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatCouponRow(entity.dims, entity.current))
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading } = useReport({
      fetch: () => fetchEcommerceCouponsData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateCouponsSample(dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce-coupons",
        "required-addon": "ecommerce"
      }, {
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Coupons Report", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No data currently for the eCommerce Coupons report.", "google-analytics-for-wordpress"),
            "required-addon": "ecommerce",
            "required-addon-name": "eCommerce"
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
