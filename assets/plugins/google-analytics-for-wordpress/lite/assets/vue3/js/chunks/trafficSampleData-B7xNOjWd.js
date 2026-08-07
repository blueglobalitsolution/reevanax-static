import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
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
function buildRequestBody(start, end, queries, dateRange) {
  const body = { start, end, queries };
  if (isCompareActive(dateRange)) {
    body.compareStart = dateRange.compareStart;
    body.compareEnd = dateRange.compareEnd;
  }
  return body;
}
function getSessionsChartQuery() {
  return {
    id: "sessions_chart",
    dimensions: ["date"],
    metrics: ["sessions", "screenPageViews"],
    groupBy: "date",
    limit: 200
  };
}
const TRAFFIC_OVERVIEW_TABLE_QUERY = {
  id: "traffic_details",
  dimensions: ["sessionDefaultChannelGroup"],
  metrics: ["sessions", "engagedSessions", "screenPageViewsPerSession", "ecommercePurchases", "sessionKeyEventRate", "totalRevenue"],
  orderBy: [{ field: "sessions", desc: true }],
  limit: 1e3
};
const TRAFFIC_SOCIAL_TABLE_QUERY = {
  id: "social_table",
  dimensions: ["sessionSource"],
  metrics: ["sessions", "engagedSessions", "bounceRate", "ecommercePurchases", "totalRevenue", "sessionKeyEventRate"],
  orderBy: [{ field: "sessions", desc: true }],
  dimensionFilter: {
    operator: "and",
    conditions: [{
      field: "sessionDefaultChannelGroup",
      type: "dimension",
      match: "exact",
      value: "Organic Social"
    }]
  },
  limit: 1e3
};
const TRAFFIC_AI_TABLE_QUERY = {
  id: "ai_table",
  dimensions: ["sessionSource"],
  metrics: ["sessions", "engagedSessions", "ecommercePurchases", "totalRevenue", "bounceRate", "averageSessionDuration"],
  orderBy: [{ field: "sessions", desc: true }],
  dimensionFilter: {
    operator: "and",
    conditions: [{
      field: "sessionDefaultChannelGroup",
      type: "dimension",
      match: "exact",
      value: "AI"
    }]
  },
  limit: 1e3
};
const TRAFFIC_LANDING_PAGES_TABLE_QUERY = {
  id: "landing_pages_table",
  dimensions: ["landingPagePlusQueryString"],
  orderBy: [{ field: "sessions", desc: true }],
  metrics: ["sessions", "engagedSessions", "screenPageViewsPerSession", "ecommercePurchases", "sessionKeyEventRate", "totalRevenue"],
  limit: 1e3
};
const TRAFFIC_TECHNOLOGY_BROWSER_QUERY = {
  id: "browser_breakdown",
  dimensions: ["browser"],
  metrics: ["sessions"],
  groupBy: "date",
  limit: 10
};
const TRAFFIC_TECHNOLOGY_DEVICE_QUERY = {
  id: "device_breakdown",
  dimensions: ["deviceCategory"],
  metrics: ["sessions"],
  groupBy: "date",
  limit: 10
};
const TRAFFIC_CAMPAIGN_TABLE_QUERY = {
  id: "campaign_table",
  dimensions: ["sessionCampaignName"],
  orderBy: [{ field: "sessions", desc: true }],
  metrics: ["sessions", "engagedSessions", "screenPageViewsPerSession", "ecommercePurchases", "sessionKeyEventRate", "totalRevenue"],
  limit: 1e3
};
const TRAFFIC_SOURCE_MEDIUM_TABLE_QUERY = {
  id: "source_medium_table",
  dimensions: ["sessionSourceMedium"],
  orderBy: [{ field: "sessions", desc: true }],
  metrics: ["sessions", "engagedSessions", "screenPageViewsPerSession", "ecommercePurchases", "sessionKeyEventRate", "totalRevenue"],
  limit: 1e3
};
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
function fetchChartPlusTable(dateRange, apiFilters, { cacheKeyPrefix, tableQuery, tableId, errorLabel }) {
  const chartQuery = withCompare(applyFiltersToQuery({ ...getSessionsChartQuery() }, apiFilters), dateRange);
  const table = applyFiltersToQuery({ ...tableQuery }, apiFilters);
  const queries = [chartQuery, table];
  const ids = ["sessions_chart", tableId];
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [table], null) : null;
  return fetchCachedReportSection({
    cacheGroup: "traffic",
    cacheKeyPrefix,
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
      return { ...current, [`${tableId}_prev`]: extractQueryResults(prevRaw, [tableId])[tableId] };
    },
    onFallback: async ({ start, end }) => {
      const [current, prevExtracted] = await Promise.all([
        relayFallbackFetch("api/v3/reporting/query", buildRequestBody(start, end, queries, dateRange), (b) => extractQueryResults(b, ids), errorLabel),
        prevBody ? relayFallbackFetch("api/v3/reporting/query", prevBody, (b) => extractQueryResults(b, [tableId]), errorLabel) : Promise.resolve(null)
      ]);
      if (!prevBody) {
        return current;
      }
      return { ...current, [`${tableId}_prev`]: prevExtracted?.[tableId] };
    }
  });
}
async function fetchTrafficOverviewData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_overview",
    tableQuery: TRAFFIC_OVERVIEW_TABLE_QUERY,
    tableId: "traffic_details",
    errorLabel: __("Error loading traffic overview data", "google-analytics-for-wordpress")
  });
}
async function fetchTrafficSocialData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_social",
    tableQuery: TRAFFIC_SOCIAL_TABLE_QUERY,
    tableId: "social_table",
    errorLabel: __("Error loading social traffic data", "google-analytics-for-wordpress")
  });
}
async function fetchTrafficAIData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_ai",
    tableQuery: TRAFFIC_AI_TABLE_QUERY,
    tableId: "ai_table",
    errorLabel: __("Error loading AI traffic data", "google-analytics-for-wordpress")
  });
}
async function fetchTrafficLandingPagesData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_landing_pages",
    tableQuery: TRAFFIC_LANDING_PAGES_TABLE_QUERY,
    tableId: "landing_pages_table",
    errorLabel: __("Error loading landing pages data", "google-analytics-for-wordpress")
  });
}
async function fetchTrafficTechnologyData(dateRange, apiFilters = null) {
  const browserQuery = withCompare(applyFiltersToQuery({ ...TRAFFIC_TECHNOLOGY_BROWSER_QUERY }, apiFilters), dateRange);
  const deviceQuery = withCompare(applyFiltersToQuery({ ...TRAFFIC_TECHNOLOGY_DEVICE_QUERY }, apiFilters), dateRange);
  const queries = [browserQuery, deviceQuery];
  const errorLabel = __("Error loading technology data", "google-analytics-for-wordpress");
  return fetchCachedReportSection({
    cacheGroup: "traffic",
    cacheKeyPrefix: "traffic_technology",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const body = await relayReportingQuery(buildRequestBody(start, end, queries, dateRange));
      return extractQueryResults(body, ["browser_breakdown", "device_breakdown"]);
    },
    onFallback: ({ start, end }) => relayFallbackFetch(
      "api/v3/reporting/query",
      buildRequestBody(start, end, queries, dateRange),
      (body) => extractQueryResults(body, ["browser_breakdown", "device_breakdown"]),
      errorLabel
    )
  });
}
async function fetchTrafficCampaignData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_campaign",
    tableQuery: TRAFFIC_CAMPAIGN_TABLE_QUERY,
    tableId: "campaign_table",
    errorLabel: __("Error loading campaigns data", "google-analytics-for-wordpress")
  });
}
async function fetchTrafficSourceMediumData(dateRange, apiFilters = null) {
  return fetchChartPlusTable(dateRange, apiFilters, {
    cacheKeyPrefix: "traffic_source_medium",
    tableQuery: TRAFFIC_SOURCE_MEDIUM_TABLE_QUERY,
    tableId: "source_medium_table",
    errorLabel: __("Error loading source/medium data", "google-analytics-for-wordpress")
  });
}
function generateDates(start, end) {
  const dates = [];
  const s = new Date(start);
  const e = new Date(end);
  while (s <= e) {
    const y = s.getFullYear();
    const m = String(s.getMonth() + 1).padStart(2, "0");
    const d = String(s.getDate()).padStart(2, "0");
    dates.push(`${y}${m}${d}`);
    s.setDate(s.getDate() + 1);
  }
  return dates;
}
function seededRandom(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const ch = seed.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  const x = Math.sin(hash) * 1e4;
  return x - Math.floor(x);
}
function sampleMetric(date, metricSeed, base, variance = 0.4) {
  const rand = seededRandom(`${date}-${metricSeed}`);
  const year = parseInt(date.substring(0, 4), 10);
  const month = parseInt(date.substring(4, 6), 10) - 1;
  const day = parseInt(date.substring(6, 8), 10);
  const dow = new Date(year, month, day).getDay();
  const weekendFactor = dow === 0 || dow === 6 ? 0.6 + rand * 0.15 : 1;
  const value = base * (1 - variance + rand * variance * 2) * weekendFactor;
  return Math.max(1, Math.round(value));
}
function generateChartRows(dates) {
  return dates.map((date) => {
    const sessions = sampleMetric(date, "sessions", 150, 0.45);
    const pageViews = sampleMetric(date, "pageviews", Math.round(sessions * 1.6), 0.2);
    return { d: [date], m: [[String(sessions), String(pageViews)]] };
  });
}
function generateTableRows(dimensions, prefix, baseCounts) {
  const rows = dimensions.map((dim) => {
    const rand = seededRandom(`${prefix}-${dim}`);
    return {
      d: [dim],
      m: [baseCounts.map((base, colIdx) => {
        const colRand = seededRandom(`${prefix}-${dim}-col${colIdx}`);
        if (base < 1) {
          const val2 = base * (0.5 + colRand);
          return val2.toFixed(6);
        }
        const val = Math.max(1, Math.round(base * (0.4 + colRand * 1.2)));
        return base % 1 !== 0 ? val.toFixed(2) : String(val);
      })],
      _sort: rand
      // For randomized ordering
    };
  });
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
function generateTrafficOverviewSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const channels = ["Organic Search", "Direct", "Referral", "Paid Search", "Organic Social", "Email", "Unassigned"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    traffic_details: {
      rows: generateTableRows(channels, "overview", [350, 200, 1.7, 8, 0.025, 850])
    }
  };
}
function generateTrafficSocialSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const networks = ["Facebook", "Instagram", "LinkedIn", "Pinterest", "Reddit", "X (Twitter)", "YouTube"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    social_table: {
      rows: generateTableRows(networks, "social", [250, 140, 0.42, 4, 600, 0.022])
    }
  };
}
function generateTrafficAISample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const sources = ["ChatGPT", "Perplexity", "Gemini", "Claude", "Copilot", "You.com"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    ai_table: {
      rows: generateTableRows(sources, "ai", [180, 100, 3, 420, 0.48, 145])
    }
  };
}
function generateTrafficLandingPagesSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const pages = ["/", "/blog/", "/products/", "/about/", "/contact/", "/pricing/", "/features/", "/docs/"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    landing_pages_table: {
      rows: generateTableRows(pages, "landing", [320, 180, 1.9, 6, 0.028, 720])
    }
  };
}
function generateTrafficTechnologySample() {
  return {
    browser_breakdown: {
      rows: [
        { d: ["Chrome"], m: [[String(Math.round(420 + seededRandom("chrome") * 80))]] },
        { d: ["Safari"], m: [[String(Math.round(150 + seededRandom("safari") * 60))]] },
        { d: ["Firefox"], m: [[String(Math.round(60 + seededRandom("firefox") * 30))]] },
        { d: ["Edge"], m: [[String(Math.round(45 + seededRandom("edge") * 25))]] },
        { d: ["Opera"], m: [[String(Math.round(10 + seededRandom("opera") * 15))]] }
      ]
    },
    device_breakdown: {
      rows: [
        { d: ["desktop"], m: [[String(Math.round(450 + seededRandom("desktop") * 100))]] },
        { d: ["mobile"], m: [[String(Math.round(220 + seededRandom("mobile") * 80))]] },
        { d: ["tablet"], m: [[String(Math.round(30 + seededRandom("tablet") * 30))]] }
      ]
    }
  };
}
function generateTrafficCampaignSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const campaigns = ["spring_sale_2026", "newsletter_feb", "google_ads_brand", "facebook_retargeting", "organic", "holiday_promo"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    campaign_table: {
      rows: generateTableRows(campaigns, "campaign", [280, 160, 1.8, 5, 0.03, 650])
    }
  };
}
function generateTrafficSourceMediumSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const sourceMediums = ["google / organic", "direct / (none)", "facebook / social", "newsletter / email", "bing / cpc", "twitter / social"];
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    source_medium_table: {
      rows: generateTableRows(sourceMediums, "source-medium", [300, 170, 1.85, 5, 0.028, 700])
    }
  };
}
export {
  generateTrafficTechnologySample as a,
  fetchTrafficTechnologyData as b,
  generateTrafficLandingPagesSample as c,
  fetchTrafficLandingPagesData as d,
  generateTrafficCampaignSample as e,
  fetchTrafficOverviewData as f,
  generateTrafficOverviewSample as g,
  fetchTrafficCampaignData as h,
  generateTrafficSourceMediumSample as i,
  fetchTrafficSourceMediumData as j,
  generateTrafficSocialSample as k,
  fetchTrafficSocialData as l,
  generateTrafficAISample as m,
  fetchTrafficAIData as n
};
