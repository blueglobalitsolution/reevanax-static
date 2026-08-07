import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed } from "./toastStore-CYWVyQOI.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-BVSw1vKp.js";
import { b as fetchCartAbandonmentData } from "./ecommerceReports-CNyjngur.js";
import { u as useReportPermissions } from "./useReportPermissions-BmPoRU_L.js";
import { u as useReport } from "./useReport-DcI-6j1p.js";
import { b as generateCartAbandonmentSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { f as formatPct, a as formatCurr, b as formatNum } from "./overviewTableFormatters-wFNZFFbq.js";
import { f as formatDateLabel } from "./useOverviewChartData-J818YDWf.js";
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
  __name: "EcommerceCartAbandonmentReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const isCompareActive = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    function detectCompareFormat(rows) {
      if (!rows || rows.length === 0) return false;
      let rawFirst = rows[0]?.m ?? [];
      if (rawFirst.length === 1 && Array.isArray(rawFirst[0])) rawFirst = rawFirst[0];
      return rawFirst.length > 0 && Array.isArray(rawFirst[0]) && rawFirst[0].length === 2 && isCompareActive.value;
    }
    const productColumns = [
      { key: "product", label: __("Product", "google-analytics-for-wordpress"), sortable: true },
      { key: "quantity", label: __("Quantity", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "cartAbandonment", label: __("Cart Abandonment", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "checkoutAbandonment", label: __("Checkout Abandonment", "google-analytics-for-wordpress"), sortable: true, totalType: "average" }
    ];
    const dayColumns = [
      { key: "date", label: __("Date", "google-analytics-for-wordpress"), sortable: true },
      { key: "quantity", label: __("Quantity", "google-analytics-for-wordpress"), sortable: true },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "cartAbandonment", label: __("Cart Abandonment", "google-analytics-for-wordpress"), sortable: true },
      { key: "checkoutAbandonment", label: __("Checkout Abandonment", "google-analytics-for-wordpress"), sortable: true }
    ];
    function calcAbandonmentRates(addToCarts, purchases, checkedOut) {
      const cartAbandon = addToCarts > 0 ? (addToCarts - purchases) / addToCarts * 100 : 0;
      const checkoutAbandon = checkedOut > 0 ? (checkedOut - purchases) / checkedOut * 100 : 0;
      return { cartAbandon, checkoutAbandon };
    }
    function formatProductRow(dims, vals) {
      const name = String(dims[1] || dims[0] || "").trim() || "(not set)";
      const addToCarts = vals[0] || 0;
      const purchases = vals[1] || 0;
      const revenue = vals[2] || 0;
      const checkedOut = vals[3] || 0;
      const { cartAbandon, checkoutAbandon } = calcAbandonmentRates(addToCarts, purchases, checkedOut);
      return {
        product: name,
        quantity: formatNum(purchases),
        revenue: formatCurr(revenue),
        cartAbandonment: formatPct(cartAbandon),
        checkoutAbandonment: formatPct(checkoutAbandon)
      };
    }
    function parseDayRows(rows, periodIdx, isCompare) {
      return rows.map((row) => {
        const dateStr = row?.d?.[0] || "";
        let metricsRow = row?.m ?? [];
        if (metricsRow.length === 1 && Array.isArray(metricsRow[0])) metricsRow = metricsRow[0];
        let addToCarts, purchases, revenue, checkouts;
        if (isCompare) {
          addToCarts = parseFloat(metricsRow[0]?.[periodIdx]) || 0;
          purchases = parseFloat(metricsRow[1]?.[periodIdx]) || 0;
          revenue = parseFloat(metricsRow[2]?.[periodIdx]) || 0;
          checkouts = parseFloat(metricsRow[3]?.[periodIdx]) || 0;
        } else {
          addToCarts = parseFloat(metricsRow[0]) || 0;
          purchases = parseFloat(metricsRow[1]) || 0;
          revenue = parseFloat(metricsRow[2]) || 0;
          checkouts = parseFloat(metricsRow[3]) || 0;
        }
        const { cartAbandon, checkoutAbandon } = calcAbandonmentRates(addToCarts, purchases, checkouts);
        return {
          date: formatDateLabel(dateStr),
          quantity: formatNum(purchases),
          revenue: formatCurr(revenue),
          cartAbandonment: formatPct(cartAbandon),
          checkoutAbandonment: formatPct(checkoutAbandon)
        };
      });
    }
    const aggregatedProducts = computed(
      () => aggregateDateEntityRows(rawData.value?.cart_abandonment_product?.rows, {
        metricCount: 4,
        avgIndices: []
      })
    );
    const productRows = computed(
      () => aggregatedProducts.value.filter((entity) => !shouldHideNotSetValue(entity.dims[1] || entity.dims[0])).map((entity) => formatProductRow(entity.dims, entity.current))
    );
    const compareProductRows = computed(
      () => aggregateDateEntityRows(rawData.value?.cart_abandonment_product_prev?.rows, {
        metricCount: 4,
        avgIndices: []
      }).filter((entity) => !shouldHideNotSetValue(entity.dims[1] || entity.dims[0])).map((entity) => formatProductRow(entity.dims, entity.current))
    );
    const dayRows = computed(() => {
      const tableResult = rawData.value?.cart_abandonment_day;
      const rows = Array.isArray(tableResult?.rows) ? tableResult.rows : [];
      if (rows.length === 0) return [];
      const isCompare = detectCompareFormat(rows);
      return parseDayRows(rows, isCompare ? 1 : 0, isCompare);
    });
    const compareDayRows = computed(() => {
      const tableResult = rawData.value?.cart_abandonment_day;
      const rows = Array.isArray(tableResult?.rows) ? tableResult.rows : [];
      if (rows.length === 0) return [];
      const isCompare = detectCompareFormat(rows);
      if (!isCompare) return [];
      return parseDayRows(rows, 0, true);
    });
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading } = useReport({
      fetch: () => fetchCartAbandonmentData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateCartAbandonmentSample(dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "cart-abandonment",
        "required-addon": "ecommerce"
      }, {
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Cart Abandonment", "google-analytics-for-wordpress"),
            columns: productColumns,
            rows: productRows.value,
            "compare-rows": compareProductRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No data currently for the Cart Abandonment report.", "google-analytics-for-wordpress"),
            "required-addon": "ecommerce",
            "required-addon-name": "eCommerce"
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"]),
          createVNode(_sfc_main$1, {
            title: unref(__)("Cart Abandonment by Day", "google-analytics-for-wordpress"),
            columns: dayColumns,
            rows: dayRows.value,
            "compare-rows": compareDayRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No daily abandonment data available.", "google-analytics-for-wordpress"),
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
