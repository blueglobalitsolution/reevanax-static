import { F as isSampleDataEnabled, A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { g as generateEcommerceOverviewSample, a as generateCouponsSample, b as generateCartAbandonmentSample, d as generatePurchasesByLocationSample, e as generateSpendByDaySample, f as generateSpendByHourSample, h as generateRefundsSample, i as generateRefundsByGeoSample } from "./ecommerceSampleData-CfcmM5cV.js";
const { __ } = wp.i18n;
function isCompareActive(dateRange) {
  return !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
}
function withCompare(query, dateRange) {
  if (!isCompareActive(dateRange)) {
    return query;
  }
  const dims = Array.isArray(query?.dimensions) ? query.dimensions : [];
  if (!dims.includes("date") && query?.groupBy !== "date") {
    return query;
  }
  return {
    ...query,
    compare: true,
    compare_start: dateRange.compareStart,
    compare_end: dateRange.compareEnd
  };
}
function getPreviousPeriod(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  const diffMs = e.getTime() - s.getTime();
  const prevEnd = new Date(s.getTime() - 1);
  const prevStart = new Date(prevEnd.getTime() - diffMs);
  const fmt = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  return { compareStart: fmt(prevStart), compareEnd: fmt(prevEnd) };
}
function withAlwaysCompare(query, dateRange) {
  if (isCompareActive(dateRange)) {
    return withCompare(query, dateRange);
  }
  if (!dateRange?.start || !dateRange?.end) {
    return query;
  }
  const { compareStart, compareEnd } = getPreviousPeriod(dateRange.start, dateRange.end);
  return {
    ...query,
    compare: true,
    compare_start: compareStart,
    compare_end: compareEnd
  };
}
function buildRequestBody(start, end, queries, dateRange) {
  const body = { start, end, queries };
  if (isCompareActive(dateRange)) {
    body.compareStart = dateRange.compareStart;
    body.compareEnd = dateRange.compareEnd;
  }
  return body;
}
function buildRequestBodyAlwaysCompare(start, end, queries, dateRange) {
  const body = { start, end, queries };
  if (isCompareActive(dateRange)) {
    body.compareStart = dateRange.compareStart;
    body.compareEnd = dateRange.compareEnd;
  } else if (dateRange?.start && dateRange?.end) {
    const { compareStart, compareEnd } = getPreviousPeriod(dateRange.start, dateRange.end);
    body.compareStart = compareStart;
    body.compareEnd = compareEnd;
  }
  return body;
}
function extractQueryResults(body, queryIds) {
  let data = null;
  if (body?.success && body?.data) {
    data = body.data?.data ?? body.data;
  } else if (body?.data) {
    data = body.data?.data ?? body.data;
  } else {
    data = body;
  }
  const results = {};
  for (let i = 0; i < queryIds.length; i++) {
    const id = queryIds[i];
    results[id] = data?.[id] || data?.[i] || { rows: [] };
  }
  return results;
}
function getSessionsChartQuery() {
  return {
    id: "sessions_chart",
    dimensions: ["date"],
    metrics: ["sessions", "screenPageViews", "ecommercePurchases", "sessionKeyEventRate"],
    groupBy: "date",
    limit: 200
  };
}
const ECOMMERCE_PRODUCTS_TABLE_QUERY = {
  id: "products_table",
  dimensions: ["itemName"],
  metrics: ["itemsPurchased", "itemRevenue"],
  orderBy: [{ field: "itemsPurchased", desc: true }],
  limit: 1e3
};
const ECOMMERCE_CONVERSIONS_TABLE_QUERY = {
  id: "conversions_table",
  dimensions: ["sessionSourceMedium"],
  metrics: ["totalUsers", "totalRevenue"],
  orderBy: [{ field: "totalUsers", desc: true }],
  dimensionFilter: {
    operator: "and",
    conditions: [{
      field: "ecommercePurchases",
      type: "metric",
      match: "greaterThan",
      value: "0"
    }]
  },
  limit: 1e3
};
const ECOMMERCE_KEY_METRICS_QUERY = {
  id: "ecommerce_key_metrics",
  dimensions: ["date"],
  metrics: ["sessions", "ecommercePurchases", "totalRevenue", "averagePurchaseRevenue", "addToCarts", "firstTimePurchasers"],
  groupBy: "date",
  limit: 200
};
const ECOMMERCE_EVENT_COUNTS_QUERY = {
  id: "ecommerce_event_counts",
  dimensions: ["eventName"],
  metrics: ["eventCount"],
  limit: 1e3
};
const COUPONS_TABLE_QUERY = {
  id: "coupons_table",
  dimensions: ["orderCoupon"],
  metrics: ["totalRevenue", "ecommercePurchases", "averagePurchaseRevenue"],
  orderBy: [{ field: "totalRevenue", desc: true }],
  limit: 1e3
};
const CART_ABANDONMENT_PRODUCT_QUERY = {
  id: "cart_abandonment_product",
  dimensions: ["itemId", "itemName"],
  metrics: ["itemsAddedToCart", "itemsPurchased", "itemRevenue", "itemsCheckedOut"],
  orderBy: [{ field: "itemsAddedToCart", desc: true }],
  filters: {
    operator: "and",
    conditions: [{
      field: "itemName",
      type: "dimension",
      match: "exact",
      value: "(not set)",
      not: true
    }]
  },
  limit: 1e3
};
const CART_ABANDONMENT_DAY_QUERY = {
  id: "cart_abandonment_day",
  dimensions: ["date"],
  metrics: ["addToCarts", "transactions", "purchaseRevenue", "checkouts"],
  orderBy: [{ field: "date", desc: true }],
  limit: 1e3
};
function getSpendByDayQuery() {
  return {
    id: "spend_by_day",
    dimensions: ["date"],
    metrics: ["purchaseRevenue", "transactions", "itemsPurchased"],
    orderBy: [{ field: "date", desc: false }],
    filters: {
      operator: "and",
      conditions: [{
        field: "eventName",
        type: "dimension",
        match: "exact",
        value: "refund",
        not: true
      }]
    },
    groupBy: "date",
    limit: 500
  };
}
const SPEND_BY_HOUR_QUERY = {
  id: "spend_by_hour",
  // Grouped by `[date, hour]` so the API returns date-comparison data (it only does that
  // for date-grouped queries); the view aggregates the per-date rows back to 24 hour
  // buckets. `hour` alone returned no compare data.
  dimensions: ["date", "hour"],
  metrics: ["purchaseRevenue", "transactions", "itemsPurchased"],
  orderBy: [{ field: "hour", desc: false }],
  filters: {
    operator: "and",
    conditions: [{
      field: "eventName",
      type: "dimension",
      match: "exact",
      value: "refund",
      not: true
    }]
  },
  limit: 1e3
};
function getRefundsChartQuery() {
  return {
    id: "refunds_chart",
    dimensions: ["date"],
    metrics: ["eventCount", "purchaseRevenue"],
    filters: {
      operator: "and",
      conditions: [{
        field: "eventName",
        type: "dimension",
        match: "exact",
        value: "refund"
      }]
    },
    groupBy: "date",
    limit: 200
  };
}
const REFUNDS_TABLE_QUERY = {
  id: "refunds_table",
  dimensions: ["itemName"],
  metrics: ["itemsPurchased", "itemsCheckedOut", "itemRefundAmount"],
  orderBy: [{ field: "itemRefundAmount", desc: true }],
  limit: 1e3
};
function getPurchasesByLocationQuery(breakdown = "country") {
  const dimMap = { country: "country", state: "region", city: "city" };
  return {
    id: "purchases_location_table",
    // No `date`: GA4 aggregates one row per location over the full range. With
    // `date`, the relay's alphabetical dimension sort returned [location, date]
    // for country/city breakdowns, so the client de-dup never collapsed the rows
    // and every location was repeated once per day.
    dimensions: [dimMap[breakdown] || "country"],
    metrics: ["ecommercePurchases", "totalRevenue", "averagePurchaseRevenue"],
    orderBy: [{ field: "ecommercePurchases", desc: true }],
    limit: 1e3
  };
}
function getRefundsByGeoQuery(breakdown = "country") {
  const dimMap = { country: "country", state: "region", city: "city" };
  return {
    id: "refunds_geo_table",
    // No `date` — one row per location over the full range (see purchases-by-location).
    dimensions: [dimMap[breakdown] || "country"],
    metrics: ["eventCount", "purchaseRevenue", "transactions"],
    orderBy: [{ field: "eventCount", desc: true }],
    filters: {
      operator: "and",
      conditions: [{
        field: "eventName",
        type: "dimension",
        match: "exact",
        value: "refund"
      }]
    },
    limit: 1e3
  };
}
async function fetchEcommerceOverviewReportData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateEcommerceOverviewSample(dateRange);
  }
  const chartQuery = withCompare(applyFiltersToQuery({ ...getSessionsChartQuery() }, apiFilters), dateRange);
  const metricsQuery = withAlwaysCompare(applyFiltersToQuery({ ...ECOMMERCE_KEY_METRICS_QUERY }, apiFilters), dateRange);
  const eventCountsQuery = applyFiltersToQuery({ ...ECOMMERCE_EVENT_COUNTS_QUERY }, apiFilters);
  const productsQuery = applyFiltersToQuery({ ...ECOMMERCE_PRODUCTS_TABLE_QUERY }, apiFilters);
  const conversionsQuery = applyFiltersToQuery({ ...ECOMMERCE_CONVERSIONS_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, metricsQuery, eventCountsQuery, productsQuery, conversionsQuery];
  const queryIds = ["sessions_chart", "ecommerce_key_metrics", "ecommerce_event_counts", "products_table", "conversions_table"];
  const errorLabel = __("Error loading eCommerce overview data", "google-analytics-for-wordpress");
  const prevIds = ["products_table", "conversions_table"];
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [productsQuery, conversionsQuery], null) : null;
  const withPrev = (current, prev) => prevBody ? { ...current, products_table_prev: prev?.products_table, conversions_table_prev: prev?.conversions_table } : current;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_overview",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevRaw] = await Promise.all([
        relayReportingQuery(buildRequestBodyAlwaysCompare(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return withPrev(extractQueryResults(body, queryIds), prevBody ? extractQueryResults(prevRaw, prevIds) : null);
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch("api/v3/reporting/query", buildRequestBodyAlwaysCompare(start, end, queries, dateRange), (body) => extractQueryResults(body, queryIds), errorLabel),
        prevBody ? relayFallbackFetch("api/v3/reporting/query", prevBody, (body) => extractQueryResults(body, prevIds), errorLabel) : Promise.resolve(null)
      ]);
      return withPrev(current, prev);
    }
  });
}
async function fetchEcommerceCouponsData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateCouponsSample(dateRange);
  }
  const queries = [applyFiltersToQuery({ ...COUPONS_TABLE_QUERY }, apiFilters)];
  const errorLabel = __("Error loading coupons data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, queries, null) : null;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_coupons",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevRaw] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      const current = extractQueryResults(body, ["coupons_table"]);
      if (!prevBody) {
        return current;
      }
      return { ...current, coupons_table_prev: extractQueryResults(prevRaw, ["coupons_table"]).coupons_table };
    },
    onFallback: async ({ start, end }) => {
      const [current, prevExtracted] = await Promise.all([
        relayFallbackFetch("api/v3/reporting/query", buildRequestBody(start, end, queries, dateRange), (b) => extractQueryResults(b, ["coupons_table"]), errorLabel),
        prevBody ? relayFallbackFetch("api/v3/reporting/query", prevBody, (b) => extractQueryResults(b, ["coupons_table"]), errorLabel) : Promise.resolve(null)
      ]);
      if (!prevBody) {
        return current;
      }
      return { ...current, coupons_table_prev: prevExtracted?.coupons_table };
    }
  });
}
async function fetchCartAbandonmentData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateCartAbandonmentSample(dateRange);
  }
  const productQuery = applyFiltersToQuery({ ...CART_ABANDONMENT_PRODUCT_QUERY }, apiFilters);
  const dayQuery = withCompare(applyFiltersToQuery({ ...CART_ABANDONMENT_DAY_QUERY }, apiFilters), dateRange);
  const queries = [productQuery, dayQuery];
  const ids = ["cart_abandonment_product", "cart_abandonment_day"];
  const errorLabel = __("Error loading cart abandonment data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [productQuery], null) : null;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_cart_abandonment",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevRaw] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      const current = extractQueryResults(body, ids);
      if (!prevBody) {
        return current;
      }
      return { ...current, cart_abandonment_product_prev: extractQueryResults(prevRaw, ["cart_abandonment_product"]).cart_abandonment_product };
    },
    onFallback: async ({ start, end }) => {
      const [current, prevExtracted] = await Promise.all([
        relayFallbackFetch("api/v3/reporting/query", buildRequestBody(start, end, queries, dateRange), (b) => extractQueryResults(b, ids), errorLabel),
        prevBody ? relayFallbackFetch("api/v3/reporting/query", prevBody, (b) => extractQueryResults(b, ["cart_abandonment_product"]), errorLabel) : Promise.resolve(null)
      ]);
      if (!prevBody) {
        return current;
      }
      return { ...current, cart_abandonment_product_prev: prevExtracted?.cart_abandonment_product };
    }
  });
}
async function fetchSpendByDayData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateSpendByDaySample(dateRange);
  }
  const query = withCompare(applyFiltersToQuery({ ...getSpendByDayQuery() }, apiFilters), dateRange);
  const queries = [query];
  const errorLabel = __("Error loading spend by day data", "google-analytics-for-wordpress");
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_spend_by_day",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const body = await relayReportingQuery(buildRequestBody(start, end, queries, dateRange));
      return extractQueryResults(body, ["spend_by_day"]);
    },
    onFallback: ({ start, end }) => relayFallbackFetch(
      "api/v3/reporting/query",
      buildRequestBody(start, end, queries, dateRange),
      (body) => extractQueryResults(body, ["spend_by_day"]),
      errorLabel
    )
  });
}
async function fetchSpendByHourData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateSpendByHourSample(dateRange);
  }
  const query = withCompare(applyFiltersToQuery({ ...SPEND_BY_HOUR_QUERY }, apiFilters), dateRange);
  const queries = [query];
  const errorLabel = __("Error loading spend by hour data", "google-analytics-for-wordpress");
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_spend_by_hour",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const body = await relayReportingQuery(buildRequestBody(start, end, queries, dateRange));
      return extractQueryResults(body, ["spend_by_hour"]);
    },
    onFallback: ({ start, end }) => relayFallbackFetch(
      "api/v3/reporting/query",
      buildRequestBody(start, end, queries, dateRange),
      (body) => extractQueryResults(body, ["spend_by_hour"]),
      errorLabel
    )
  });
}
async function fetchRefundsData(dateRange, apiFilters = null) {
  if (isSampleDataEnabled()) {
    return generateRefundsSample(dateRange);
  }
  const chartQuery = withCompare(applyFiltersToQuery({ ...getRefundsChartQuery() }, apiFilters), dateRange);
  const tableQuery = applyFiltersToQuery({ ...REFUNDS_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, tableQuery];
  const errorLabel = __("Error loading refunds data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [tableQuery], null) : null;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_refunds",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevRaw] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      const current = extractQueryResults(body, ["refunds_chart", "refunds_table"]);
      if (!prevBody) {
        return current;
      }
      return { ...current, refunds_table_prev: extractQueryResults(prevRaw, ["refunds_table"]).refunds_table };
    },
    onFallback: async ({ start, end }) => {
      const [current, prevExtracted] = await Promise.all([
        relayFallbackFetch("api/v3/reporting/query", buildRequestBody(start, end, queries, dateRange), (b) => extractQueryResults(b, ["refunds_chart", "refunds_table"]), errorLabel),
        prevBody ? relayFallbackFetch("api/v3/reporting/query", prevBody, (b) => extractQueryResults(b, ["refunds_table"]), errorLabel) : Promise.resolve(null)
      ]);
      if (!prevBody) {
        return current;
      }
      return { ...current, refunds_table_prev: prevExtracted?.refunds_table };
    }
  });
}
async function fetchPurchasesByLocationData(dateRange, apiFilters = null, breakdown = "country") {
  if (isSampleDataEnabled()) {
    return generatePurchasesByLocationSample(breakdown, dateRange);
  }
  const queries = [applyFiltersToQuery(getPurchasesByLocationQuery(breakdown), apiFilters)];
  const errorLabel = __("Error loading purchases by location data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, queries, null) : null;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_purchases_by_location",
    extraKey: breakdown,
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return {
        ...extractQueryResults(body, ["purchases_location_table"]),
        ...prevBody ? { purchases_location_table_prev: extractQueryResults(prevResult, ["purchases_location_table"]).purchases_location_table } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, ["purchases_location_table"]),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => ({ purchases_location_table_prev: extractQueryResults(body, ["purchases_location_table"]).purchases_location_table }),
          errorLabel
        ) : Promise.resolve({})
      ]);
      return { ...current, ...prev || {} };
    }
  });
}
async function fetchRefundsByGeoData(dateRange, apiFilters = null, breakdown = "country") {
  if (isSampleDataEnabled()) {
    return generateRefundsByGeoSample(breakdown, dateRange);
  }
  const queries = [applyFiltersToQuery(getRefundsByGeoQuery(breakdown), apiFilters)];
  const errorLabel = __("Error loading refunds by geo data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, queries, null) : null;
  return fetchCachedReportSection({
    cacheGroup: "ecommerce",
    cacheKeyPrefix: "ecommerce_refunds_by_geo",
    extraKey: breakdown,
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return {
        ...extractQueryResults(body, ["refunds_geo_table"]),
        ...prevBody ? { refunds_geo_table_prev: extractQueryResults(prevResult, ["refunds_geo_table"]).refunds_geo_table } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, ["refunds_geo_table"]),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => ({ refunds_geo_table_prev: extractQueryResults(body, ["refunds_geo_table"]).refunds_geo_table }),
          errorLabel
        ) : Promise.resolve({})
      ]);
      return { ...current, ...prev || {} };
    }
  });
}
export {
  fetchEcommerceCouponsData as a,
  fetchCartAbandonmentData as b,
  fetchPurchasesByLocationData as c,
  fetchSpendByDayData as d,
  fetchSpendByHourData as e,
  fetchEcommerceOverviewReportData as f,
  fetchRefundsData as g,
  fetchRefundsByGeoData as h
};
