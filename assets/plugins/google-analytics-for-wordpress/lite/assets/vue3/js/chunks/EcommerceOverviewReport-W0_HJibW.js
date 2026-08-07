import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as __ } from "./default-i18n-KrIlCc2E.js";
import { u as useOverviewReportStore, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchEcommerceOverviewReportData } from "./ecommerceReports-D13-vEUK.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { g as generateEcommerceOverviewSample } from "./ecommerceSampleData-CfcmM5cV.js";
import { b as formatNum, a as formatCurr, f as formatPct } from "./overviewTableFormatters-Bh6rmRkk.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
import { j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { a as aggregateDateEntityRows } from "./aggregateDateEntityRows-i7QMgwng.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$3 } from "./ReportChartSection-CPrm1WSX.js";
import { _ as _sfc_main$2 } from "./ReportDataTable-cdFWEqiZ.js";
import { _ as _sfc_main$1 } from "./ReportKeyMetrics-DORZJ7iF.js";
import "./TheAppHeader-DEdY-dez.js";
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
import "./settings-DM9kkmj_.js";
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ApexLineChart-BDoZ0ljB.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
import "./LoadingSpinnerInline-B4kX5NYb.js";
import "./SiteNotes-sUVlPnw7.js";
import "./siteNotes-CUK65xMh.js";
import "./ReportTableModal-CDgzf1E8.js";
const _sfc_main = {
  __name: "EcommerceOverviewReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "pro" });
    const activeChartTab = ref("sessions");
    const chartTabs = [
      { id: "sessions", label: __("Sessions", "google-analytics-for-wordpress"), icon: "users" },
      { id: "pageviews", label: __("Pageviews", "google-analytics-for-wordpress"), icon: "view" }
    ];
    const chartRawDates = computed(() => {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) return [];
      return chartResult.rows.map((row) => row?.d?.[0] || "");
    });
    const isCompareActive = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const chartData = computed(() => {
      const chartResult = rawData.value?.sessions_chart;
      if (!chartResult?.rows?.length) return { categories: [], series: [] };
      const rows = chartResult.rows;
      const categories = [];
      const sessionsCurr = [];
      const pageViewsCurr = [];
      const purchasesCurr = [];
      const convRateCurr = [];
      const sessionsPrev = [];
      const pageViewsPrev = [];
      const purchasesPrev = [];
      const convRatePrev = [];
      const firstM = rows[0]?.m;
      const isCompareFormat = Array.isArray(firstM) && firstM.length === 4 && Array.isArray(firstM[0]) && firstM[0].length === 2 && isCompareActive.value;
      for (const row of rows) {
        const date = row?.d?.[0] || "";
        categories.push(formatDateLabel(date));
        if (isCompareFormat) {
          const mSessions = row?.m?.[0] || [];
          const mPageViews = row?.m?.[1] || [];
          const mPurchases = row?.m?.[2] || [];
          const mConvRate = row?.m?.[3] || [];
          sessionsPrev.push(Number(mSessions[0]) || 0);
          sessionsCurr.push(Number(mSessions[1]) || 0);
          pageViewsPrev.push(Number(mPageViews[0]) || 0);
          pageViewsCurr.push(Number(mPageViews[1]) || 0);
          purchasesPrev.push(Number(mPurchases[0]) || 0);
          purchasesCurr.push(Number(mPurchases[1]) || 0);
          convRatePrev.push(Math.round((Number(mConvRate[0]) || 0) * 1e4) / 100);
          convRateCurr.push(Math.round((Number(mConvRate[1]) || 0) * 1e4) / 100);
        } else {
          const m0 = Array.isArray(row?.m?.[0]) ? row.m[0] : [];
          sessionsCurr.push(Number(m0[0]) || 0);
          pageViewsCurr.push(Number(m0[1]) || 0);
          purchasesCurr.push(Number(m0[2]) || 0);
          convRateCurr.push(Math.round((Number(m0[3]) || 0) * 1e4) / 100);
        }
      }
      const primaryColor = "#3A93DD";
      const secondaryColor = "#1EC185";
      const compareColor = "#A0AEC0";
      const isSessionsTab = activeChartTab.value === "sessions";
      const series = [];
      const colors = [];
      const strokeDashArray = [];
      series.push({
        name: isSessionsTab ? "Sessions" : "Pageviews",
        data: isSessionsTab ? sessionsCurr : pageViewsCurr
      });
      colors.push(primaryColor);
      strokeDashArray.push(0);
      series.push({
        name: isSessionsTab ? "Purchases" : "Conversion Rate",
        data: isSessionsTab ? purchasesCurr : convRateCurr
      });
      colors.push(secondaryColor);
      strokeDashArray.push(0);
      if (isCompareFormat) {
        series.push({
          name: isSessionsTab ? "Sessions (prev)" : "Pageviews (prev)",
          data: isSessionsTab ? sessionsPrev : pageViewsPrev
        });
        colors.push(compareColor);
        strokeDashArray.push(5);
        series.push({
          name: isSessionsTab ? "Purchases (prev)" : "Conv. Rate (prev)",
          data: isSessionsTab ? purchasesPrev : convRatePrev
        });
        colors.push("#D4A0A0");
        strokeDashArray.push(5);
      }
      return { categories, series, colors, strokeDashArray };
    });
    function aggregateMetrics(rows, periodIdx) {
      let sessions = 0;
      let purchases = 0;
      let revenue = 0;
      let addToCarts = 0;
      let firstTimePurchasers = 0;
      for (const row of rows) {
        let read = function(cell) {
          if (Array.isArray(cell) && cell.length >= 2) return parseFloat(cell[periodIdx]) || 0;
          return parseFloat(cell) || 0;
        };
        let metricsRow = row?.m ?? [];
        if (metricsRow.length === 1 && Array.isArray(metricsRow[0])) metricsRow = metricsRow[0];
        sessions += read(metricsRow[0]);
        purchases += read(metricsRow[1]);
        revenue += read(metricsRow[2]);
        addToCarts += read(metricsRow[4]);
        firstTimePurchasers += read(metricsRow[5]);
      }
      const avgOrderValue = purchases > 0 ? revenue / purchases : 0;
      const conversionRate = sessions > 0 ? purchases / sessions * 100 : 0;
      return { sessions, purchases, revenue, avgOrderValue, conversionRate, addToCarts, firstTimePurchasers };
    }
    function readEventCountByName(rows, eventName) {
      if (!Array.isArray(rows) || rows.length === 0) return 0;
      const row = rows.find((r) => String(r?.d?.[0] || "").toLowerCase() === eventName);
      if (!row) return 0;
      let metricsRow = row?.m ?? [];
      if (metricsRow.length === 1 && Array.isArray(metricsRow[0])) metricsRow = metricsRow[0];
      const cell = metricsRow[0];
      return parseFloat(cell) || 0;
    }
    function calcTrend(current, previous) {
      if (!previous || previous === 0) return null;
      return Math.round((current - previous) / previous * 1e3) / 10;
    }
    function fmtCurrency(val) {
      const currency = getMiGlobal("currency", "USD") || "USD";
      try {
        return new Intl.NumberFormat(void 0, {
          style: "currency",
          currency,
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(val);
      } catch {
        return formatCurr(val);
      }
    }
    const keyMetrics = computed(() => {
      const metricsResult = rawData.value?.ecommerce_key_metrics;
      const rows = Array.isArray(metricsResult?.rows) ? metricsResult.rows : [];
      if (rows.length === 0) {
        return [
          { id: "conversionRate", label: __("Conversion Rate", "google-analytics-for-wordpress"), value: "0%", trend: null },
          { id: "transactions", label: __("Transactions", "google-analytics-for-wordpress"), value: "0", trend: null },
          { id: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), value: fmtCurrency(0), trend: null },
          { id: "aov", label: __("Avg. Order Value", "google-analytics-for-wordpress"), value: fmtCurrency(0), trend: null }
        ];
      }
      const firstRow = rows[0];
      let rawFirst = firstRow?.m ?? [];
      if (rawFirst.length === 1 && Array.isArray(rawFirst[0])) rawFirst = rawFirst[0];
      const isCompare = rawFirst.length > 0 && Array.isArray(rawFirst[0]) && rawFirst[0].length === 2;
      const curr = aggregateMetrics(rows, isCompare ? 1 : 0);
      const prev = isCompare ? aggregateMetrics(rows, 0) : null;
      return [
        {
          id: "conversionRate",
          label: __("Conversion Rate", "google-analytics-for-wordpress"),
          value: `${curr.conversionRate.toFixed(1)}%`,
          trend: prev ? calcTrend(curr.conversionRate, prev.conversionRate) ?? 0 : null
        },
        {
          id: "transactions",
          label: __("Transactions", "google-analytics-for-wordpress"),
          value: formatNum(curr.purchases),
          trend: prev ? calcTrend(curr.purchases, prev.purchases) ?? 0 : null
        },
        {
          id: "revenue",
          label: __("Revenue", "google-analytics-for-wordpress"),
          value: fmtCurrency(curr.revenue),
          trend: prev ? calcTrend(curr.revenue, prev.revenue) ?? 0 : null
        },
        {
          id: "aov",
          label: __("Avg. Order Value", "google-analytics-for-wordpress"),
          value: fmtCurrency(curr.avgOrderValue),
          trend: prev ? calcTrend(curr.avgOrderValue, prev.avgOrderValue) ?? 0 : null
        }
      ];
    });
    const cartMetrics = computed(() => {
      const metricsResult = rawData.value?.ecommerce_key_metrics;
      const metricsRows = Array.isArray(metricsResult?.rows) ? metricsResult.rows : [];
      const eventCountsResult = rawData.value?.ecommerce_event_counts;
      const eventCountsRows = Array.isArray(eventCountsResult?.rows) ? eventCountsResult.rows : [];
      if (metricsRows.length === 0) {
        return [
          { id: "addToCarts", label: __("Total Add to Carts", "google-analytics-for-wordpress"), value: "0", trend: 0 },
          { id: "removedFromCart", label: __("Total Removed from Cart", "google-analytics-for-wordpress"), value: "0", trend: 0 },
          { id: "newCustomers", label: __("New Customers", "google-analytics-for-wordpress"), value: "0", trend: 0 },
          { id: "abandonedCheckouts", label: __("Abandoned Checkouts", "google-analytics-for-wordpress"), value: "0%", trend: 0 }
        ];
      }
      const firstRow = metricsRows[0];
      let rawFirst = firstRow?.m ?? [];
      if (rawFirst.length === 1 && Array.isArray(rawFirst[0])) rawFirst = rawFirst[0];
      const isCompare = rawFirst.length > 0 && Array.isArray(rawFirst[0]) && rawFirst[0].length === 2;
      const curr = aggregateMetrics(metricsRows, isCompare ? 1 : 0);
      const prev = isCompare ? aggregateMetrics(metricsRows, 0) : null;
      const currRemoved = readEventCountByName(eventCountsRows, "remove_from_cart");
      const currAbandonRate = curr.addToCarts > 0 ? (curr.addToCarts - curr.purchases) / curr.addToCarts * 100 : 0;
      const prevAbandonRate = prev && prev.addToCarts > 0 ? (prev.addToCarts - prev.purchases) / prev.addToCarts * 100 : null;
      const currNewCustomersPct = curr.purchases > 0 ? curr.firstTimePurchasers / curr.purchases * 100 : 0;
      const prevNewCustomersPct = prev && prev.purchases > 0 ? prev.firstTimePurchasers / prev.purchases * 100 : null;
      return [
        {
          id: "addToCarts",
          label: __("Total Add to Carts", "google-analytics-for-wordpress"),
          value: formatNum(curr.addToCarts),
          trend: prev ? calcTrend(curr.addToCarts, prev.addToCarts) ?? 0 : null
        },
        {
          id: "removedFromCart",
          label: __("Total Removed from Cart", "google-analytics-for-wordpress"),
          value: formatNum(currRemoved),
          trend: null
          // event counts query doesn't support compare
        },
        {
          id: "newCustomers",
          label: __("New Customers", "google-analytics-for-wordpress"),
          value: `${currNewCustomersPct.toFixed(1)}%`,
          trend: prev ? calcTrend(currNewCustomersPct, prevNewCustomersPct) ?? 0 : null
        },
        {
          id: "abandonedCheckouts",
          label: __("Abandoned Checkouts", "google-analytics-for-wordpress"),
          value: `${currAbandonRate.toFixed(1)}%`,
          trend: prev ? calcTrend(currAbandonRate, prevAbandonRate) ?? 0 : null
        }
      ];
    });
    const productsColumns = [
      { key: "name", label: __("Product Name", "google-analytics-for-wordpress"), sortable: true },
      { key: "quantity", label: __("Quantity", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctSales", label: __("% of Sales", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "revenue", label: __("Total Revenue", "google-analytics-for-wordpress"), sortable: true }
    ];
    const aggregatedProducts = computed(
      () => aggregateDateEntityRows(rawData.value?.products_table?.rows, {
        metricCount: 2,
        avgIndices: [],
        weightIndex: 0
      })
    );
    function formatProductsRow(dims, vals, periodTotal) {
      const itemsPurchased = vals[0] || 0;
      const itemRevenue = vals[1] || 0;
      const pctOfSales = periodTotal > 0 ? itemsPurchased / periodTotal * 100 : 0;
      return {
        name: String(dims[0] || "").trim() || "(not set)",
        quantity: formatNum(itemsPurchased),
        pctSales: formatPct(pctOfSales),
        revenue: formatCurr(itemRevenue)
      };
    }
    const productsCurrentTotal = computed(
      () => aggregatedProducts.value.reduce((sum, e) => sum + (e.current[0] || 0), 0)
    );
    const aggregatedProductsPrev = computed(
      () => aggregateDateEntityRows(rawData.value?.products_table_prev?.rows, {
        metricCount: 2,
        avgIndices: [],
        weightIndex: 0
      })
    );
    const productsPreviousTotal = computed(
      () => aggregatedProductsPrev.value.reduce((sum, e) => sum + (e.current[0] || 0), 0)
    );
    const productsRows = computed(
      () => aggregatedProducts.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatProductsRow(entity.dims, entity.current, productsCurrentTotal.value))
    );
    const productsCompareRows = computed(
      () => aggregatedProductsPrev.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatProductsRow(entity.dims, entity.current, productsPreviousTotal.value))
    );
    const conversionsColumns = [
      { key: "source", label: __("Source", "google-analytics-for-wordpress"), sortable: true },
      { key: "users", label: __("Total Users", "google-analytics-for-wordpress"), sortable: true },
      { key: "pctUsers", label: __("% of Users", "google-analytics-for-wordpress"), sortable: true, totalType: "average" },
      { key: "revenue", label: __("Revenue", "google-analytics-for-wordpress"), sortable: true }
    ];
    const aggregatedConversions = computed(
      () => aggregateDateEntityRows(rawData.value?.conversions_table?.rows, {
        metricCount: 2,
        avgIndices: [],
        weightIndex: 0
      })
    );
    function formatConversionsRow(dims, vals, periodTotal) {
      const users = vals[0] || 0;
      const revenue = vals[1] || 0;
      const pct = periodTotal > 0 ? users / periodTotal * 100 : 0;
      return {
        source: String(dims[0] || "").trim() || "(not set)",
        users: formatNum(users),
        pctUsers: formatPct(pct),
        revenue: formatCurr(revenue)
      };
    }
    const conversionsCurrentTotal = computed(
      () => aggregatedConversions.value.reduce((sum, e) => sum + (e.current[0] || 0), 0)
    );
    const aggregatedConversionsPrev = computed(
      () => aggregateDateEntityRows(rawData.value?.conversions_table_prev?.rows, {
        metricCount: 2,
        avgIndices: [],
        weightIndex: 0
      })
    );
    const conversionsPreviousTotal = computed(
      () => aggregatedConversionsPrev.value.reduce((sum, e) => sum + (e.current[0] || 0), 0)
    );
    const conversionsRows = computed(
      () => aggregatedConversions.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatConversionsRow(entity.dims, entity.current, conversionsCurrentTotal.value))
    );
    const conversionsCompareRows = computed(
      () => aggregatedConversionsPrev.value.filter((entity) => !shouldHideNotSetValue(entity.dims[0])).map((entity) => formatConversionsRow(entity.dims, entity.current, conversionsPreviousTotal.value))
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    const { rawData, loading, error, reload } = useReport({
      fetch: () => fetchEcommerceOverviewReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateEcommerceOverviewSample(dateRange.value),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "pro",
        "upsell-feature": "ecommerce",
        "required-addon": "ecommerce"
      }, {
        chart: withCtx(() => [
          createVNode(_sfc_main$3, {
            tabs: chartTabs,
            "active-tab": activeChartTab.value,
            "chart-data": chartData.value,
            loading: unref(loading),
            error: unref(error),
            "show-site-notes": !unref(isBlocked),
            "date-range": unref(overviewStore).dateRange,
            "raw-dates": chartRawDates.value,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: unref(reload)
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range", "raw-dates", "onSiteNotesSaved"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, { metrics: keyMetrics.value }, null, 8, ["metrics"]),
          createVNode(_sfc_main$2, {
            title: unref(__)("Top Products", "google-analytics-for-wordpress"),
            columns: productsColumns,
            rows: productsRows.value,
            "compare-rows": productsCompareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No product sales tracked during this time period.", "google-analytics-for-wordpress"),
            "required-addon": "ecommerce",
            "required-addon-name": "eCommerce"
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"]),
          createVNode(_sfc_main$2, {
            title: unref(__)("Top Conversion Sources", "google-analytics-for-wordpress"),
            columns: conversionsColumns,
            rows: conversionsRows.value,
            "compare-rows": conversionsCompareRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__)("No conversion sources tracked during this time period.", "google-analytics-for-wordpress"),
            "required-addon": "ecommerce",
            "required-addon-name": "eCommerce"
          }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "loading", "empty-message"]),
          createVNode(_sfc_main$1, { metrics: cartMetrics.value }, null, 8, ["metrics"])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
