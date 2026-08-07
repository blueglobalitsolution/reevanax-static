import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-CYWVyQOI.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-BVSw1vKp.js";
import { c as fetchPurchasesByLocationData } from "./ecommerceReports-CNyjngur.js";
import { u as useReportPermissions } from "./useReportPermissions-BmPoRU_L.js";
import { u as useReport } from "./useReport-DcI-6j1p.js";
import { d as generatePurchasesByLocationSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { a as formatCurr, f as formatPct, b as formatNum } from "./overviewTableFormatters-wFNZFFbq.js";
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
  __name: "EcommercePurchasesByLocationReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const columns = [
      { key: "location", label: __("Location", "google-analytics-for-wordpress"), sortable: true },
      { key: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctTransactions", label: __("% of Transactions", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctRevenue", label: __("% of Revenue", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-for-wordpress"), sortable: true, totalType: "average" }
    ];
    const aggregatedLocation = computed(
      () => aggregateDateEntityRows(rawData.value?.purchases_location_table?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 0
      })
    );
    function periodTotals(vals) {
      return {
        totalTransactions: vals.reduce((sum, v) => sum + (v[0] || 0), 0),
        totalRevenue: vals.reduce((sum, v) => sum + (v[1] || 0), 0)
      };
    }
    function formatLocationRow(dims, vals, totals) {
      const transactions = vals[0] || 0;
      const revenue = vals[1] || 0;
      const pctTx = totals.totalTransactions > 0 ? transactions / totals.totalTransactions * 100 : 0;
      const pctRev = totals.totalRevenue > 0 ? revenue / totals.totalRevenue * 100 : 0;
      return {
        location: String(dims[0] || "").trim() || "(not set)",
        transactions: formatNum(transactions),
        pctTransactions: formatPct(pctTx),
        revenue: formatCurr(revenue),
        pctRevenue: formatPct(pctRev),
        avgOrderValue: formatCurr(vals[2] || 0)
      };
    }
    const tableRows = computed(() => {
      const totals = periodTotals(aggregatedLocation.value.map((entity) => entity.current));
      return aggregatedLocation.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatLocationRow(entity.dims, entity.current, totals));
    });
    const compareRows = computed(() => {
      const prev = aggregateDateEntityRows(rawData.value?.purchases_location_table_prev?.rows, {
        metricCount: 3,
        avgIndices: [2],
        weightIndex: 0
      });
      if (prev.length === 0) return [];
      const totals = periodTotals(prev.map((entity) => entity.current));
      return prev.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatLocationRow(entity.dims, entity.current, totals));
    });
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading } = useReport({
      fetch: () => fetchPurchasesByLocationData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generatePurchasesByLocationSample("country", dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce-purchases-by-location",
        "required-addon": "ecommerce"
      }, {
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Purchases by Geography", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No orders tracked during this time period.", "google-analytics-for-wordpress"),
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
