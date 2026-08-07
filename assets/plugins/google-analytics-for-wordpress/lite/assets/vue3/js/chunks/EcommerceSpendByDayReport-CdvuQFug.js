import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { d as fetchSpendByDayData } from "./ecommerceReports-D13-vEUK.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { e as generateSpendByDaySample } from "./ecommerceSampleData-CfcmM5cV.js";
import { a as formatCurr, f as formatPct, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$2 } from "./ReportChartSection-CPrm1WSX.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import "./TheAppHeader-DEdY-dez.js";
import "./ajax-B_XS1gT5.js";
import "./AppOverlays-BGer0Qoo.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./dateIntervals-BPoui_3H.js";
import "./addons-CSVIjAyY.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./Icon-Cz1-Vo-r.js";
import "./useAuthGate-DCWToggq.js";
import "./flatpickr-CNAtgokQ.js";
import "./useFeatureGate-Ds3Z3eq-.js";
import "./UniversallyPromo-NH8NC5TQ.js";
import "./reportCache-BGhGkpr3.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ApexLineChart-BDoZ0ljB.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
import "./LoadingSpinnerInline-B4kX5NYb.js";
import "./SiteNotes-sUVlPnw7.js";
import "./siteNotes-CUK65xMh.js";
import "./useOverviewChartData-ea-7IFwh.js";
import "./ReportTableModal-CDgzf1E8.js";
const _sfc_main = {
  __name: "EcommerceSpendByDayReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const activeChartTab = ref("revenue");
    const chartTabs = [
      { id: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), icon: "revenue" },
      { id: "purchases", label: __("Purchases", "google-analytics-for-wordpress"), icon: "cart" }
    ];
    const WEEKDAY_ORDER = [1, 2, 3, 4, 5, 6, 0];
    const WEEKDAY_LABELS = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday"
    };
    const isCompareActive = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    function detectCompareFormat(rows) {
      if (!rows || rows.length === 0) return false;
      let rawFirst = rows[0]?.m ?? [];
      if (rawFirst.length === 1 && Array.isArray(rawFirst[0])) rawFirst = rawFirst[0];
      return rawFirst.length >= 3 && Array.isArray(rawFirst[0]) && rawFirst[0].length === 2 && isCompareActive.value;
    }
    function aggregateByWeekday(rows, periodIdx, isCompare) {
      const agg = {};
      for (let w = 0; w < 7; w++) {
        agg[w] = { revenue: 0, transactions: 0, items: 0 };
      }
      for (const row of rows) {
        const dateStr = row?.d?.[0];
        if (!dateStr || dateStr.length !== 8) continue;
        const year = parseInt(dateStr.substring(0, 4), 10);
        const month = parseInt(dateStr.substring(4, 6), 10) - 1;
        const day = parseInt(dateStr.substring(6, 8), 10);
        const weekday = new Date(year, month, day).getDay();
        let metricsRow = row?.m ?? [];
        if (metricsRow.length === 1 && Array.isArray(metricsRow[0])) metricsRow = metricsRow[0];
        let revenue, transactions, items;
        if (isCompare) {
          revenue = parseFloat(metricsRow[0]?.[periodIdx]) || 0;
          transactions = parseInt(metricsRow[1]?.[periodIdx], 10) || 0;
          items = parseInt(metricsRow[2]?.[periodIdx], 10) || 0;
        } else {
          revenue = parseFloat(metricsRow[0]) || 0;
          transactions = parseInt(metricsRow[1], 10) || 0;
          items = parseInt(metricsRow[2], 10) || 0;
        }
        agg[weekday].revenue += revenue;
        agg[weekday].transactions += transactions;
        agg[weekday].items += items;
      }
      return agg;
    }
    const chartData = computed(() => {
      const result = rawData.value?.spend_by_day;
      const rows = Array.isArray(result?.rows) ? result.rows : [];
      if (rows.length === 0) return { categories: [], series: [] };
      const isCompare = detectCompareFormat(rows);
      const currAgg = aggregateByWeekday(rows, isCompare ? 1 : 0, isCompare);
      const categories = WEEKDAY_ORDER.map((w) => WEEKDAY_LABELS[w]);
      const revenueCurr = WEEKDAY_ORDER.map((w) => Math.round(currAgg[w].revenue * 100) / 100);
      const purchasesCurr = WEEKDAY_ORDER.map((w) => currAgg[w].transactions);
      const primaryColor = "#3A93DD";
      const compareColor = "#A0AEC0";
      const isRevenueTab = activeChartTab.value === "revenue";
      const series = [];
      const colors = [];
      const strokeDashArray = [];
      series.push({
        name: isRevenueTab ? "Revenue" : "Purchases",
        data: isRevenueTab ? revenueCurr : purchasesCurr
      });
      colors.push(primaryColor);
      strokeDashArray.push(0);
      if (isCompare) {
        const prevAgg = aggregateByWeekday(rows, 0, true);
        const revenuePrev = WEEKDAY_ORDER.map((w) => Math.round(prevAgg[w].revenue * 100) / 100);
        const purchasesPrev = WEEKDAY_ORDER.map((w) => prevAgg[w].transactions);
        series.push({
          name: "Previous Period",
          data: isRevenueTab ? revenuePrev : purchasesPrev
        });
        colors.push(compareColor);
        strokeDashArray.push(5);
      }
      return { categories, series, colors, strokeDashArray };
    });
    const columns = [
      { key: "day", label: __("Day", "google-analytics-for-wordpress"), sortable: true },
      { key: "itemsSold", label: __("Items Sold", "google-analytics-for-wordpress"), sortable: true },
      { key: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctTransactions", label: __("% of Transactions", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctRevenue", label: __("% of Revenue", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "avgOrderValue", label: __("Avg. Order Value", "google-analytics-for-wordpress"), sortable: true, totalType: "average" }
    ];
    const tableRows = computed(() => {
      const result = rawData.value?.spend_by_day;
      const rows = Array.isArray(result?.rows) ? result.rows : [];
      if (rows.length === 0) return [];
      const isCompare = detectCompareFormat(rows);
      const agg = aggregateByWeekday(rows, isCompare ? 1 : 0, isCompare);
      let totalTransactions = 0;
      let totalRevenue = 0;
      for (const w of WEEKDAY_ORDER) {
        totalTransactions += agg[w].transactions;
        totalRevenue += agg[w].revenue;
      }
      return WEEKDAY_ORDER.map((w) => {
        const { revenue, transactions, items } = agg[w];
        const pctTx = totalTransactions > 0 ? transactions / totalTransactions * 100 : 0;
        const pctRev = totalRevenue > 0 ? revenue / totalRevenue * 100 : 0;
        const avg = transactions > 0 ? revenue / transactions : 0;
        return {
          day: WEEKDAY_LABELS[w],
          itemsSold: formatNum(items),
          transactions: formatNum(transactions),
          pctTransactions: formatPct(pctTx),
          revenue: formatCurr(revenue),
          pctRevenue: formatPct(pctRev),
          avgOrderValue: formatCurr(avg)
        };
      });
    });
    function buildWeekdayRows(agg, totalTransactions, totalRevenue) {
      return WEEKDAY_ORDER.map((w) => {
        const { revenue, transactions, items } = agg[w];
        const pctTx = totalTransactions > 0 ? transactions / totalTransactions * 100 : 0;
        const pctRev = totalRevenue > 0 ? revenue / totalRevenue * 100 : 0;
        const avg = transactions > 0 ? revenue / transactions : 0;
        return {
          day: WEEKDAY_LABELS[w],
          itemsSold: formatNum(items),
          transactions: formatNum(transactions),
          pctTransactions: formatPct(pctTx),
          revenue: formatCurr(revenue),
          pctRevenue: formatPct(pctRev),
          avgOrderValue: formatCurr(avg)
        };
      });
    }
    const compareTableRows = computed(() => {
      const result = rawData.value?.spend_by_day;
      const rows = Array.isArray(result?.rows) ? result.rows : [];
      if (rows.length === 0) return [];
      const isCompare = detectCompareFormat(rows);
      if (!isCompare) return [];
      const prevAgg = aggregateByWeekday(rows, 0, true);
      let totalTransactions = 0;
      let totalRevenue = 0;
      for (const w of WEEKDAY_ORDER) {
        totalTransactions += prevAgg[w].transactions;
        totalRevenue += prevAgg[w].revenue;
      }
      return buildWeekdayRows(prevAgg, totalTransactions, totalRevenue);
    });
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading, error, reload } = useReport({
      fetch: () => fetchSpendByDayData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateSpendByDaySample(dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce-spend-by-day",
        "required-addon": "ecommerce"
      }, {
        chart: withCtx(() => [
          createVNode(_sfc_main$2, {
            tabs: chartTabs,
            "active-tab": activeChartTab.value,
            "chart-data": chartData.value,
            loading: unref(loading),
            error: unref(error),
            "show-site-notes": !unref(isBlocked),
            "date-range": unref(overviewStore).dateRange,
            "raw-dates": [],
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: unref(reload)
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range", "onSiteNotesSaved"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__)("Spending by Day of Week", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareTableRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No spending data for this time period.", "google-analytics-for-wordpress"),
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
