import { a1 as storeToRefs, C as watch, y as onMounted, o as openBlock, E as createBlock, D as withCtx, a as createBaseVNode, c as createElementBlock, b as createVNode, t as toDisplayString, u as unref, F as Fragment, s as createCommentVNode, j as ref, m as computed } from "./toastStore-CRCNwITM.js";
import { _ as __$1, s as sprintf } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { q as sanitizeHtml, n as getUpgradeUrl, j as getMiGlobal, t as getMonsterInsightsUrl } from "./ajax-B_XS1gT5.js";
import { f as formatPct, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { a as buildGaExplorerReportUrl } from "./buildGaExplorerReportUrl-EaZ84MNO.js";
import { R as ReportPageLayout } from "./ReportPageLayout-CL25dyVF.js";
import { _ as _sfc_main$1 } from "./ReportDataTable-cdFWEqiZ.js";
import { _ as _sfc_main$2 } from "./ReportPieChart-DOkDJooB.js";
import { A as ApexBarChart } from "./ApexBarChart-El9oBk9E.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
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
import "./ReAuthModal-B3ASDJ6j.js";
import "./auth-CC6F9_ZC.js";
import "./ReportTableModal-CDgzf1E8.js";
import "./vue3-apexcharts-C-WQ0zow.js";
import "./useChartColors-Bi1Kbjjv.js";
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
function extractQueryResults(body, queryIds) {
  const data = body?.data ? body.data?.data ?? body.data : body;
  const results = {};
  for (let i = 0; i < queryIds.length; i++) {
    const id = queryIds[i];
    results[id] = data?.[id] || data?.[i] || { rows: [] };
  }
  return results;
}
function num(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}
function percentChange(curr, prev) {
  const c = num(curr);
  const p = num(prev);
  if (p === 0) {
    return 0;
  }
  return (c - p) / p * 100;
}
function secondsToTimestring(secs) {
  const s = Math.round(num(secs));
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m <= 0) {
    return `${r}s`;
  }
  return `${m}m ${r}s`;
}
function unwrapMetricsRow(m) {
  const mr = m ?? [];
  return mr.length === 1 && Array.isArray(mr[0]) ? mr[0] : mr;
}
function getMetricPair(metricsRow, i, isCompareFormat) {
  const cell = metricsRow[i];
  if (isCompareFormat && Array.isArray(cell) && cell.length >= 2) {
    return { curr: num(cell[1]), prev: num(cell[0]) };
  }
  return { curr: num(cell), prev: 0 };
}
function detectCompareFormat(rows, compareActive) {
  if (!rows?.length || !compareActive) {
    return false;
  }
  const firstM = unwrapMetricsRow(rows[0]?.m);
  return firstM.length > 0 && Array.isArray(firstM[0]) && firstM[0].length === 2;
}
const LANDING_PAGES_QUERY = {
  id: "landing_pages",
  dimensions: ["pageTitle", "pageLocation"],
  metrics: ["sessions", "averageSessionDuration", "bounceRate"],
  orderBy: [{ field: "sessions", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      {
        field: "pageTitle",
        type: "dimension",
        match: "exact",
        value: "(not set)",
        not: true
      }
    ]
  },
  limit: 50
};
const OUTBOUND_LINKS_QUERY = {
  id: "outbound_links",
  // No `date`: GA4 aggregates one row per link over the full range (mirrors the
  // legacy PublisherServiceV4). With `date`, the relay's alphabetical dimension
  // sort puts date AFTER customEvent:link_text, so the client de-dup keyed on a
  // leading date dimension failed and every link was repeated per day.
  dimensions: ["customEvent:link_text"],
  metrics: ["eventCount"],
  orderBy: [{ field: "eventCount", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      { field: "eventName", type: "dimension", match: "exact", value: "click" },
      {
        field: "customEvent:outbound",
        type: "dimension",
        match: "exact",
        value: "true"
      },
      {
        field: "customEvent:is_affiliate_link",
        type: "dimension",
        match: "exact",
        value: "true",
        not: true
      }
    ]
  },
  limit: 10
};
const AFFILIATE_LINKS_QUERY = {
  id: "affiliate_links",
  // No `date` — one row per link over the full range (mirrors PublisherServiceV4).
  dimensions: ["linkText", "linkUrl"],
  metrics: ["eventCount"],
  orderBy: [{ field: "eventCount", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      { field: "eventName", type: "dimension", match: "exact", value: "click" },
      {
        field: "customEvent:outbound",
        type: "dimension",
        match: "exact",
        value: "true"
      },
      {
        field: "customEvent:is_affiliate_link",
        type: "dimension",
        match: "exact",
        value: "true"
      }
    ]
  },
  limit: 10
};
const DOWNLOAD_LINKS_QUERY = {
  id: "download_links",
  // No `date` — one row per link over the full range (mirrors PublisherServiceV4).
  // Same alphabetical-sort de-dup bug as outbound links when `date` was present.
  dimensions: ["customEvent:link_text"],
  metrics: ["eventCount"],
  orderBy: [{ field: "eventCount", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      {
        field: "eventName",
        type: "dimension",
        match: "exact",
        value: "file_download"
      }
    ]
  },
  limit: 10
};
const GENDER_QUERY = {
  id: "gender",
  dimensions: ["userGender"],
  metrics: ["sessions"]
};
const AGE_QUERY = {
  id: "age",
  dimensions: ["userAgeBracket"],
  metrics: ["sessions"]
};
const INTEREST_QUERY = {
  id: "interest",
  dimensions: ["brandingInterest"],
  metrics: ["sessions"],
  orderBy: [{ field: "sessions", desc: true }],
  limit: 10
};
const SCROLL_QUERY = {
  id: "scroll",
  dimensions: ["customEvent:percentage"],
  metrics: ["sessions"],
  orderBy: [{ field: "sessions", desc: true }],
  filters: {
    operator: "and",
    conditions: [
      {
        field: "eventName",
        type: "dimension",
        match: "exact",
        value: "scroll_depth"
      }
    ]
  },
  limit: 10
};
function parseLandingPages(result, prevResult = null) {
  const rows = Array.isArray(result?.rows) ? result.rows : [];
  if (rows.length === 0) {
    return [];
  }
  const hasCompare = prevResult != null;
  const prevByPage = /* @__PURE__ */ new Map();
  if (hasCompare) {
    const prevRows = Array.isArray(prevResult?.rows) ? prevResult.rows : [];
    for (const prevRow of prevRows) {
      const pd = Array.isArray(prevRow?.d) ? prevRow.d : [];
      const pm = unwrapMetricsRow(prevRow?.m);
      prevByPage.set(`${pd[0] ?? ""}\0${pd[1] ?? ""}`, {
        sessions: num(pm[0]),
        duration: num(pm[1]),
        bounce: num(pm[2]) * 100
      });
    }
  }
  const items = rows.map((row, index) => {
    const d = Array.isArray(row?.d) ? row.d : [];
    const url = d[0] ?? "";
    const rawTitle = d[1] ?? "";
    const title = rawTitle || `Unknown page ${index}`;
    const m = unwrapMetricsRow(row?.m);
    const sessions = num(m[0]);
    const duration = num(m[1]);
    const bounce = num(m[2]) * 100;
    const item = {
      title: [String(title)],
      url,
      visits: [sessions],
      duration: [secondsToTimestring(duration)],
      bounce: [bounce],
      // Raw values kept for visits-weighted totals (the display strings can't
      // be summed/averaged meaningfully).
      durationSeconds: duration
    };
    if (hasCompare) {
      const prev = prevByPage.get(`${url}\0${rawTitle}`) || { sessions: 0, duration: 0, bounce: 0 };
      item.visits.push(prev.sessions, percentChange(sessions, prev.sessions));
      item.duration.push(
        secondsToTimestring(prev.duration),
        percentChange(duration, prev.duration)
      );
      item.bounce.push(prev.bounce, percentChange(bounce, prev.bounce));
    }
    return item;
  });
  items.sort((a, b) => (b.visits[0] || 0) - (a.visits[0] || 0));
  return items;
}
function parseLinksReport(result, prevResult = null, { withLink = false } = {}) {
  const rows = Array.isArray(result?.rows) ? result.rows : [];
  if (rows.length === 0) {
    return [];
  }
  const readRow = (row) => {
    const d = Array.isArray(row?.d) ? row.d : [];
    return {
      title: String(d[0] ?? ""),
      link: String(d[1] ?? ""),
      clicks: num(unwrapMetricsRow(row?.m)[0])
    };
  };
  const keyOf = (r) => withLink ? `${r.title} ${r.link}` : r.title;
  const hasCompare = prevResult != null;
  const prevByKey = /* @__PURE__ */ new Map();
  if (hasCompare) {
    const prevRows = Array.isArray(prevResult?.rows) ? prevResult.rows : [];
    for (const prevRow of prevRows) {
      const r = readRow(prevRow);
      prevByKey.set(keyOf(r), r.clicks);
    }
  }
  const out = [];
  for (const row of rows) {
    const r = readRow(row);
    if (!r.title.trim()) {
      continue;
    }
    const item = { title: [r.title], clicks: [r.clicks] };
    if (withLink) {
      item.link = [r.link];
    }
    if (hasCompare) {
      const cPrev = prevByKey.get(keyOf(r)) || 0;
      item.clicks.push(cPrev, percentChange(r.clicks, cPrev));
    }
    out.push(item);
  }
  return out;
}
function parsePercentReport(result, compareActive, { includeGraph = true } = {}) {
  const rows = Array.isArray(result?.rows) ? result.rows : [];
  const isCompareFormat = detectCompareFormat(rows, compareActive);
  let totalCurr = 0;
  let totalPrev = 0;
  const enriched = rows.map((row) => {
    const label = row?.d?.[0] ?? "";
    const metricsRow = unwrapMetricsRow(row?.m);
    const sessions = getMetricPair(metricsRow, 0, isCompareFormat);
    totalCurr += sessions.curr;
    totalPrev += sessions.prev;
    return { label: String(label), curr: sessions.curr, prev: sessions.prev };
  });
  if (includeGraph) {
    const labels = enriched.map((r) => r.label);
    const data = enriched.map(
      (r) => totalCurr > 0 ? r.curr / totalCurr * 100 : 0
    );
    const graph = { labels, data };
    if (isCompareFormat) {
      graph.compare = enriched.map(
        (r) => totalPrev > 0 ? r.prev / totalPrev * 100 : 0
      );
    }
    return { graph };
  }
  return enriched.map((r) => {
    const pctCurr = totalCurr > 0 ? r.curr / totalCurr * 100 : 0;
    const entry = {
      interest: [r.label],
      percent: [pctCurr]
    };
    if (isCompareFormat) {
      const pctPrev = totalPrev > 0 ? r.prev / totalPrev * 100 : 0;
      entry.percent.push(pctPrev, percentChange(pctCurr, pctPrev));
    }
    return entry;
  });
}
function parseScrollReport(result) {
  const rows = Array.isArray(result?.rows) ? result.rows : [];
  if (rows.length === 0) {
    return { average: "0.0" };
  }
  let totalScroll = 0;
  let totalSessions = 0;
  for (const row of rows) {
    const raw = row?.d?.[0] ?? "0";
    const percent = parseInt(String(raw).replace("%", ""), 10) || 0;
    const metricsRow = unwrapMetricsRow(row?.m);
    const cell = metricsRow[0];
    const sessions = Array.isArray(cell) ? num(cell[1]) : num(cell);
    totalScroll += percent * sessions;
    totalSessions += sessions;
  }
  const avg = totalSessions === 0 ? 0 : totalScroll / totalSessions;
  return { average: avg.toFixed(1) };
}
async function fetchPublisherReportData(dateRange, apiFilters = null) {
  if (!dateRange?.start || !dateRange?.end) {
    throw new Error("Missing date range");
  }
  const compareActive = isCompareActive(dateRange);
  const contentQueries = [
    withCompare(
      applyFiltersToQuery({ ...LANDING_PAGES_QUERY }, apiFilters),
      dateRange
    ),
    withCompare(
      applyFiltersToQuery({ ...OUTBOUND_LINKS_QUERY }, apiFilters),
      dateRange
    ),
    withCompare(
      applyFiltersToQuery({ ...AFFILIATE_LINKS_QUERY }, apiFilters),
      dateRange
    ),
    withCompare(
      applyFiltersToQuery({ ...DOWNLOAD_LINKS_QUERY }, apiFilters),
      dateRange
    )
  ];
  const audienceQueries = [
    withCompare(applyFiltersToQuery({ ...GENDER_QUERY }, apiFilters), dateRange),
    withCompare(applyFiltersToQuery({ ...AGE_QUERY }, apiFilters), dateRange),
    withCompare(
      applyFiltersToQuery({ ...INTEREST_QUERY }, apiFilters),
      dateRange
    ),
    // Scroll intentionally omits compare to match PHP.
    applyFiltersToQuery({ ...SCROLL_QUERY }, apiFilters)
  ];
  const contentIds = [
    "landing_pages",
    "outbound_links",
    "affiliate_links",
    "download_links"
  ];
  const audienceIds = ["gender", "age", "interest", "scroll"];
  const errorLabel = __(
    "Error loading publisher report data",
    "google-analytics-for-wordpress"
  );
  const prevContentQueries = compareActive ? [
    applyFiltersToQuery({ ...LANDING_PAGES_QUERY }, apiFilters),
    applyFiltersToQuery({ ...OUTBOUND_LINKS_QUERY }, apiFilters),
    applyFiltersToQuery({ ...AFFILIATE_LINKS_QUERY }, apiFilters),
    applyFiltersToQuery({ ...DOWNLOAD_LINKS_QUERY }, apiFilters)
  ] : null;
  const prevBody = prevContentQueries ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, prevContentQueries, null) : null;
  const results = await fetchCachedReportSection({
    cacheGroup: "publishers",
    cacheKeyPrefix: "publishers_overview",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const batches = [
        relayReportingQuery(
          buildRequestBody(start, end, contentQueries, dateRange)
        ),
        relayReportingQuery(
          buildRequestBody(start, end, audienceQueries, dateRange)
        )
      ];
      if (prevBody) {
        batches.push(relayReportingQuery(prevBody));
      }
      const [contentBody, audienceBody, prevResultBody] = await Promise.all(batches);
      return {
        ...extractQueryResults(contentBody, contentIds),
        ...extractQueryResults(audienceBody, audienceIds),
        ...prevBody ? { _prev: extractQueryResults(prevResultBody, contentIds) } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const calls = [
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, contentQueries, dateRange),
          (body) => extractQueryResults(body, contentIds),
          errorLabel
        ),
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, audienceQueries, dateRange),
          (body) => extractQueryResults(body, audienceIds),
          errorLabel
        )
      ];
      if (prevBody) {
        calls.push(
          relayFallbackFetch(
            "api/v3/reporting/query",
            prevBody,
            (body) => ({ _prev: extractQueryResults(body, contentIds) }),
            errorLabel
          )
        );
      }
      const [contentResults, audienceResults, prevResults] = await Promise.all(calls);
      return { ...contentResults, ...audienceResults, ...prevResults || {} };
    }
  });
  const prev = results._prev || {};
  return {
    landingpages: parseLandingPages(results.landing_pages, prev.landing_pages ?? null),
    outboundlinks: parseLinksReport(results.outbound_links, prev.outbound_links ?? null, {
      withLink: false
    }),
    affiliatelinks: parseLinksReport(results.affiliate_links, prev.affiliate_links ?? null, {
      withLink: true
    }),
    downloadlinks: parseLinksReport(results.download_links, prev.download_links ?? null, {
      withLink: false
    }),
    gender: parsePercentReport(results.gender, compareActive, {
      includeGraph: true
    }),
    age: parsePercentReport(results.age, compareActive, { includeGraph: true }),
    interest: parsePercentReport(results.interest, compareActive, {
      includeGraph: false
    }),
    scroll: parseScrollReport(results.scroll)
  };
}
function seeded(seed) {
  const x = Math.sin(seed) * 1e4;
  return x - Math.floor(x);
}
const SITE_ORIGIN = "https://www.example.com";
const LANDING_PAGE_ROWS = [
  { title: "Home", path: "/" },
  { title: "Blog — WordPress & Analytics Tips", path: "/blog/" },
  { title: "How to Set Up Google Analytics in WordPress", path: "/blog/google-analytics-wordpress/" },
  { title: "Pricing & Plans", path: "/pricing/" },
  { title: "Contact Support", path: "/contact/" },
  { title: "Features — MonsterInsights Overview", path: "/features/" },
  { title: "Documentation: Getting Started", path: "/docs/getting-started/" },
  { title: "Thank You — Newsletter Confirmed", path: "/thank-you/newsletter/" }
];
const DURATION_POOL = ["0m 38s", "0m 52s", "1m 04s", "1m 18s", "1m 42s", "2m 05s", "2m 31s", "0m 45s"];
const OUTBOUND_LINK_LABELS = [
  "Twitter / X — profile",
  "YouTube — channel",
  "GitHub — open source",
  "LinkedIn — company page",
  "Facebook — business page",
  "WordPress.org — plugin directory"
];
const AFFILIATE_ROWS = [
  { title: "Bluehost — WordPress hosting", link: "https://www.bluehost.com/track/example" },
  { title: "WPForms — drag & drop forms", link: "https://shareasale.com/r.cfm?b=example" },
  { title: "Semrush — SEO toolkit", link: "https://www.semrush.com/partner/example" },
  { title: "OptinMonster — lead generation", link: "https://optinmonster.com/?ref=example" },
  { title: "AWeber — email marketing", link: "https://www.aweber.com/easy-email.htm" },
  { title: "MemberPress — membership plugin", link: "https://memberpress.com/ref/example" }
];
const DOWNLOAD_FILES = [
  "product-one-pager-2025.pdf",
  "brand-guidelines.pdf",
  "pricing-sheet-q1.pdf",
  "annual-report-2024.pdf",
  "media-kit.zip",
  "whitepaper-conversion-rate.pdf"
];
const INTEREST_LABELS = [
  "Technophiles / Shoppers",
  "Media & Entertainment",
  "Travel / Hotels & Accommodations",
  "Home & Garden",
  "Banking & Finance",
  "Sports & Fitness"
];
function generatePublisherSample(_dateRange) {
  const base = 42;
  const landingpages = LANDING_PAGE_ROWS.map((row, i) => {
    const s = base + i * 7;
    const url = SITE_ORIGIN + row.path;
    return {
      title: [row.title],
      url,
      visits: [1200 + Math.floor(seeded(s) * 5e3)],
      duration: [DURATION_POOL[i % DURATION_POOL.length]],
      bounce: [35 + seeded(s + 1) * 40]
    };
  });
  const outboundlinks = OUTBOUND_LINK_LABELS.map((title, i) => {
    const s = base + i * 3;
    return {
      title: [title],
      clicks: [80 + Math.floor(seeded(s) * 400)]
    };
  });
  const affiliatelinks = AFFILIATE_ROWS.map((row, i) => {
    const s = base + i * 5;
    return {
      title: [row.title],
      link: [row.link],
      clicks: [40 + Math.floor(seeded(s) * 200)]
    };
  });
  const downloadlinks = DOWNLOAD_FILES.map((name, i) => {
    const s = base + i * 11;
    return {
      title: [name],
      clicks: [25 + Math.floor(seeded(s) * 150)]
    };
  });
  const ageLabels = ["18-24", "25-34", "35-44", "45-54", "55-64", "65+"];
  const ageValues = ageLabels.map((_, i) => Math.round(5 + seeded(base + i * 13) * 25));
  const genderLabels = ["Male", "Female", "Unknown"];
  const genderValues = [48, 45, 7];
  const interest = INTEREST_LABELS.map((label, i) => {
    const s = base + i * 17;
    return {
      interest: [label],
      percent: [Math.round(3 + seeded(s) * 20)]
    };
  });
  return {
    landingpages,
    outboundlinks,
    affiliatelinks,
    downloadlinks,
    age: {
      graph: {
        data: ageValues,
        labels: ageLabels,
        colors: []
      }
    },
    gender: {
      graph: {
        data: genderValues,
        labels: genderLabels,
        colors: []
      }
    },
    interest,
    scroll: {
      average: "62.5"
    },
    galinks: {}
  };
}
const _hoisted_1 = { class: "monsterinsights-overview-report monsterinsights-publishers-report" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-publishers-report__loading"
};
const _hoisted_3 = {
  key: 1,
  class: "monsterinsights-publishers-report__error"
};
const _hoisted_4 = { class: "monsterinsights-publishers-report__section" };
const _hoisted_5 = { class: "monsterinsights-publishers-report__row monsterinsights-overview-report-two-col" };
const _hoisted_6 = { class: "monsterinsights-publishers-report__col" };
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-overview-report-table"
};
const _hoisted_8 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_9 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_10 = { class: "monsterinsights-publishers-report__section-error" };
const _hoisted_11 = { class: "monsterinsights-publishers-report__col" };
const _hoisted_12 = {
  key: 0,
  class: "monsterinsights-overview-report-table"
};
const _hoisted_13 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_14 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_15 = { class: "monsterinsights-publishers-report__section-error" };
const _hoisted_16 = { class: "monsterinsights-publishers-report__section" };
const _hoisted_17 = {
  key: 0,
  class: "monsterinsights-overview-report-table"
};
const _hoisted_18 = { class: "monsterinsights-overview-report-table__header" };
const _hoisted_19 = { class: "monsterinsights-overview-report-table__title" };
const _hoisted_20 = { class: "monsterinsights-publishers-report__section-error" };
const _hoisted_21 = {
  key: 0,
  class: "monsterinsights-publishers-report__row monsterinsights-overview-report-two-col monsterinsights-publishers-report__row--charts"
};
const _hoisted_22 = { class: "monsterinsights-publishers-report__chart-card" };
const _hoisted_23 = { class: "monsterinsights-publishers-report__chart-title" };
const _hoisted_24 = {
  key: 1,
  class: "monsterinsights-publishers-report__chart-empty"
};
const _hoisted_25 = { class: "monsterinsights-publishers-report__chart-card" };
const _hoisted_26 = { class: "monsterinsights-publishers-report__chart-title" };
const _hoisted_27 = {
  key: 0,
  class: "monsterinsights-publishers-report__period-label"
};
const _hoisted_28 = { class: "monsterinsights-publishers-report__period-label monsterinsights-publishers-report__period-label--prev" };
const _hoisted_29 = {
  key: 1,
  class: "monsterinsights-publishers-report__chart-empty"
};
const _hoisted_30 = { class: "monsterinsights-publishers-report__row monsterinsights-publishers-report__row--interest-scroll-split" };
const _hoisted_31 = {
  key: 0,
  class: "monsterinsights-publishers-report__col monsterinsights-publishers-report__col--interests"
};
const _hoisted_32 = {
  key: 1,
  class: "monsterinsights-publishers-report__scroll-card"
};
const _hoisted_33 = { class: "monsterinsights-publishers-report__scroll-title" };
const _hoisted_34 = {
  key: 0,
  class: "monsterinsights-publishers-report__scroll-error"
};
const _hoisted_35 = { class: "monsterinsights-publishers-report__scroll-metric" };
const _hoisted_36 = { class: "monsterinsights-publishers-report__scroll-label" };
const _hoisted_37 = ["innerHTML"];
const _sfc_main = {
  __name: "PublishersOverviewReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "plus" });
    const loading = ref(false);
    const loadError = ref(null);
    const publisher = ref({});
    const isCompareActive2 = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    function formatShortDate(dateStr) {
      if (!dateStr) return "";
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateStr);
      const d = match ? new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3])) : new Date(dateStr);
      if (Number.isNaN(d.getTime())) return dateStr;
      return d.toLocaleDateString(void 0, { month: "short", day: "numeric" });
    }
    const currentDateLabel = computed(() => {
      const s = dateRange.value?.start;
      const e = dateRange.value?.end;
      if (!s || !e) return "";
      return `${formatShortDate(s)} – ${formatShortDate(e)}`;
    });
    const previousDateLabel = computed(() => {
      const s = dateRange.value?.compareStart;
      const e = dateRange.value?.compareEnd;
      if (!s || !e) return __$1("Previous period", "google-analytics-for-wordpress");
      return `${formatShortDate(s)} – ${formatShortDate(e)}`;
    });
    const compareDateLabels = computed(() => ({
      current: currentDateLabel.value || __$1("Current period", "google-analytics-for-wordpress"),
      previous: previousDateLabel.value || __$1("Previous period", "google-analytics-for-wordpress")
    }));
    const landingColumns = [
      { key: "pageTitle", label: __$1("Page Titles", "google-analytics-for-wordpress"), sortable: true, linkKey: "pageUrl" },
      { key: "visits", label: __$1("Visits", "google-analytics-for-wordpress"), sortable: true, type: "string" },
      { key: "duration", label: __$1("Avg. Duration", "google-analytics-for-wordpress"), sortable: true, type: "string" },
      { key: "bounce", label: __$1("Bounce Rate", "google-analytics-for-wordpress"), sortable: true, type: "string" }
    ];
    const outboundColumns = [
      { key: "link", label: __$1("Links", "google-analytics-for-wordpress"), sortable: true },
      { key: "clicks", label: __$1("Total Clicks", "google-analytics-for-wordpress"), sortable: true, type: "string" }
    ];
    const affiliateColumns = [
      { key: "label", label: __$1("Label", "google-analytics-for-wordpress"), sortable: true, compare: false },
      { key: "link", label: __$1("Link", "google-analytics-for-wordpress"), sortable: true, compare: false },
      { key: "clicks", label: __$1("Total Clicks", "google-analytics-for-wordpress"), sortable: true, type: "string" }
    ];
    const downloadColumns = [
      { key: "label", label: __$1("Link Label", "google-analytics-for-wordpress"), sortable: true },
      { key: "clicks", label: __$1("Clicks", "google-analytics-for-wordpress"), sortable: true, type: "string" }
    ];
    const interestColumns = [
      { key: "category", label: __$1("Categories", "google-analytics-for-wordpress"), sortable: true },
      { key: "percent", label: __$1("% of Interest", "google-analytics-for-wordpress"), sortable: true, type: "string" }
    ];
    function metricTriple(val) {
      if (Array.isArray(val) && val.length >= 2) {
        return { curr: val[0], prev: val[1] };
      }
      return { curr: val, prev: null };
    }
    function formatVisits(v) {
      const t = metricTriple(v);
      return formatNum(Number(t.curr) || 0);
    }
    function formatVisitsPrev(v) {
      const t = metricTriple(v);
      if (t.prev === null || t.prev === void 0) return "";
      return formatNum(Number(t.prev) || 0);
    }
    function formatDuration(v) {
      const t = metricTriple(v);
      return String(t.curr ?? "");
    }
    function formatDurationPrev(v) {
      const t = metricTriple(v);
      if (t.prev === null || t.prev === void 0) return "";
      return String(t.prev);
    }
    function formatBounce(v) {
      const t = metricTriple(v);
      return formatPct(Number(t.curr) || 0);
    }
    function formatBouncePrev(v) {
      const t = metricTriple(v);
      if (t.prev === null || t.prev === void 0) return "";
      return formatPct(Number(t.prev) || 0);
    }
    function formatClicks(v) {
      const t = metricTriple(v);
      return formatNum(Number(t.curr) || 0);
    }
    function formatClicksPrev(v) {
      const t = metricTriple(v);
      if (t.prev === null || t.prev === void 0) return "";
      return formatNum(Number(t.prev) || 0);
    }
    function formatPercentInterest(v) {
      const t = metricTriple(v);
      return formatPct(Number(t.curr) || 0);
    }
    function formatPercentInterestPrev(v) {
      const t = metricTriple(v);
      if (t.prev === null || t.prev === void 0) return "";
      return formatPct(Number(t.prev) || 0);
    }
    const landingRows = computed(() => {
      const rows = publisher.value?.landingpages;
      if (!Array.isArray(rows)) return [];
      return rows.map((row) => {
        const title = Array.isArray(row.title) ? row.title[0] : row.title;
        return {
          // `title` is the GA4 pageTitle; the URL (row.url) is the link target
          // via the column's linkKey, so it isn't shown as text.
          pageTitle: String(title ?? ""),
          pageUrl: row.url || "",
          visits: formatVisits(row.visits),
          duration: formatDuration(row.duration),
          bounce: formatBounce(row.bounce)
        };
      });
    });
    const landingCompareRows = computed(() => {
      if (!isCompareActive2.value) return [];
      const rows = publisher.value?.landingpages;
      if (!Array.isArray(rows)) return [];
      return rows.map((row) => {
        const title = Array.isArray(row.title) ? row.title[0] : row.title;
        return {
          pageTitle: String(title ?? ""),
          pageUrl: row.url || "",
          visits: formatVisitsPrev(row.visits),
          duration: formatDurationPrev(row.duration),
          bounce: formatBouncePrev(row.bounce)
        };
      });
    });
    const landingTotals = computed(() => {
      const rows = publisher.value?.landingpages;
      if (!Array.isArray(rows) || rows.length === 0) return null;
      let visits = 0;
      let durationSum = 0;
      let bounceSum = 0;
      for (const row of rows) {
        visits += Number(Array.isArray(row.visits) ? row.visits[0] : row.visits) || 0;
        durationSum += Number(row.durationSeconds) || 0;
        bounceSum += Number(Array.isArray(row.bounce) ? row.bounce[0] : row.bounce) || 0;
      }
      const count = rows.length;
      const avgDuration = count > 0 ? durationSum / count : 0;
      const avgBounce = count > 0 ? bounceSum / count : 0;
      return {
        pageTitle: __$1("Totals", "google-analytics-for-wordpress"),
        visits: formatNum(visits),
        duration: secondsToTimestring(avgDuration),
        bounce: formatPct(avgBounce)
      };
    });
    const outboundRows = computed(() => parseLinkRows(publisher.value?.outboundlinks, false));
    const outboundCompareRows = computed(
      () => isCompareActive2.value ? parseLinkRowsPrev(publisher.value?.outboundlinks, false) : []
    );
    const affiliateRows = computed(() => parseLinkRows(publisher.value?.affiliatelinks, true));
    const affiliateCompareRows = computed(
      () => isCompareActive2.value ? parseLinkRowsPrev(publisher.value?.affiliatelinks, true) : []
    );
    const downloadRows = computed(() => parseDownloadRows(publisher.value?.downloadlinks));
    const downloadCompareRows = computed(
      () => isCompareActive2.value ? parseDownloadRowsPrev(publisher.value?.downloadlinks) : []
    );
    function parseLinkRows(data, includeLink) {
      if (!Array.isArray(data)) return [];
      return data.map((row) => {
        const titleArr = row.title;
        const titleText = Array.isArray(titleArr) ? titleArr[0] : titleArr;
        if (includeLink) {
          const linkArr = row.link;
          const linkText = Array.isArray(linkArr) ? linkArr[0] : linkArr;
          return {
            label: String(titleText ?? ""),
            link: String(linkText ?? ""),
            clicks: formatClicks(row.clicks)
          };
        }
        return {
          link: String(titleText ?? ""),
          clicks: formatClicks(row.clicks)
        };
      });
    }
    function parseLinkRowsPrev(data, includeLink) {
      if (!Array.isArray(data)) return [];
      return data.map((row) => {
        const titleArr = row.title;
        const titleText = Array.isArray(titleArr) ? titleArr[0] : titleArr;
        if (includeLink) {
          const linkArr = row.link;
          const linkText = Array.isArray(linkArr) ? linkArr[0] : linkArr;
          return {
            label: String(titleText ?? ""),
            link: String(linkText ?? ""),
            clicks: formatClicksPrev(row.clicks)
          };
        }
        return {
          link: String(titleText ?? ""),
          clicks: formatClicksPrev(row.clicks)
        };
      });
    }
    function parseDownloadRows(data) {
      if (!Array.isArray(data)) return [];
      return data.map((row) => {
        const titleArr = row.title;
        const titleText = Array.isArray(titleArr) ? titleArr[0] : titleArr;
        return {
          label: String(titleText ?? ""),
          clicks: formatClicks(row.clicks)
        };
      });
    }
    function parseDownloadRowsPrev(data) {
      if (!Array.isArray(data)) return [];
      return data.map((row) => {
        const titleArr = row.title;
        const titleText = Array.isArray(titleArr) ? titleArr[0] : titleArr;
        return {
          label: String(titleText ?? ""),
          clicks: formatClicksPrev(row.clicks)
        };
      });
    }
    const interestRows = computed(() => {
      const rows = publisher.value?.interest;
      if (!Array.isArray(rows)) return [];
      return rows.map((row) => ({
        category: Array.isArray(row.interest) ? String(row.interest[0]) : String(row.interest ?? ""),
        percent: formatPercentInterest(row.percent)
      }));
    });
    const interestCompareRows = computed(() => {
      if (!isCompareActive2.value) return [];
      const rows = publisher.value?.interest;
      if (!Array.isArray(rows)) return [];
      return rows.map((row) => ({
        category: Array.isArray(row.interest) ? String(row.interest[0]) : String(row.interest ?? ""),
        percent: formatPercentInterestPrev(row.percent)
      }));
    });
    const showAgeGenderRow = computed(() => {
      const p = publisher.value;
      return !!(p?.age?.graph?.labels?.length || p?.gender?.graph?.labels?.length);
    });
    const ageCompareActive = computed(() => {
      const g = publisher.value?.age?.graph;
      return !!(isCompareActive2.value && g?.compare?.length);
    });
    const ageBarData = computed(() => {
      const g = publisher.value?.age?.graph;
      if (!g?.labels?.length) return { categories: [], series: [] };
      const data = (g.data || []).map((v) => Number(v) || 0);
      const series = [{ name: compareDateLabels.value.current, data }];
      if (ageCompareActive.value && Array.isArray(g.compare)) {
        series.push({
          name: compareDateLabels.value.previous,
          data: g.compare.map((v) => Number(v) || 0)
        });
      }
      return { categories: g.labels, series };
    });
    const genderChartCurrent = computed(() => {
      const g = publisher.value?.gender?.graph;
      if (!g?.labels?.length) return { series: [], labels: [] };
      const series = (g.data || []).map((v) => Number(v) || 0);
      return { series, labels: g.labels };
    });
    const genderChartPrev = computed(() => {
      const g = publisher.value?.gender?.graph;
      if (!isCompareActive2.value || !g?.compare?.length) return { series: [], labels: [] };
      const series = g.compare.map((v) => Number(v) || 0);
      return { series, labels: g.labels || [] };
    });
    const scrollPercent = computed(() => {
      const s = publisher.value?.scroll;
      if (!s || s.error) return "0%";
      const avg = s.average ?? "0";
      const str = String(avg);
      return str.includes("%") ? str : `${str}%`;
    });
    const textErrors = {
      MISSING_CUSTOM_DIMENSION: __$1(
        'Please set up custom dimension "%s" for this report to work.',
        "google-analytics-for-wordpress"
      ),
      UNKNOWN_ERROR: __$1("An unknown error has occurred.", "google-analytics-for-wordpress")
    };
    function errorMessage(err) {
      if (!err?.code) return textErrors.UNKNOWN_ERROR;
      const tpl = textErrors[err.code] || textErrors.UNKNOWN_ERROR;
      return sprintf(tpl, err.data || "");
    }
    function sectionError(key) {
      const block = publisher.value?.[key];
      if (block && typeof block === "object" && !Array.isArray(block) && block.error) {
        return errorMessage(block.error);
      }
      return "";
    }
    const scrollErrorText = computed(() => {
      const s = publisher.value?.scroll;
      if (s && typeof s === "object" && s.error) {
        return errorMessage(s.error);
      }
      return "";
    });
    const scrollExplainerHtml = computed(() => {
      const url = getMonsterInsightsUrl(
        "docs",
        "scroll-tracking",
        "https://www.monsterinsights.com/docs/scroll-tracking-and-reporting/"
      );
      return sprintf(
        __$1(
          "Scroll Depth events are triggered at 25%%, 50%%, 75%% and 100%% scrolling. The number above represents the average scroll depth from your visitors in the selected interval for all your website's pages. %1$sYou can read more about how to read this number in our %2$sknowledge base%3$s.%4$s",
          "google-analytics-for-wordpress"
        ),
        '<span class="monsterinsights-ignore-data-from-pdf-reports">',
        `<a href="${url}" target="_blank" rel="noopener noreferrer">`,
        "</a>",
        "</span>"
      );
    });
    const GA_LINKS_CONFIG = {
      landingpages: {
        reportName: "landing-page",
        endpoint: "explorer",
        extra: "_u..nav=maui"
      },
      outboundlinks: {
        reportName: "events-overview",
        endpoint: "dashboard",
        extra: '_r..dimension-value={"dimension":"eventName","value":"click"}&_u..comparisons=[{"name":"Outbound includes true; Is Affiliate Link includes false","filters":[{"fieldName":"customParamDimension:14","expressionList":["true"],"isCaseSensitive":true},{"fieldName":"customParamDimension:9","expressionList":["false"],"isCaseSensitive":true}]}]'
      },
      affiliatelinks: {
        reportName: "events-overview",
        endpoint: "dashboard",
        extra: '_r..dimension-value={"dimension":"eventName","value":"click"}&_u..comparisons=[{"name":"Outbound includes true; Is Affiliate Link includes false","filters":[{"fieldName":"customParamDimension:14","expressionList":["true"],"isCaseSensitive":true},{"fieldName":"customParamDimension:15","expressionList":["true"],"isCaseSensitive":true}]}]'
      },
      downloadlinks: {
        reportName: "events-overview",
        endpoint: "dashboard",
        extra: '_u..nav=maui&_r..dimension-value={"dimension":"eventName","value":"file_download"}'
      },
      interest: {
        reportName: "user-demographics-overview",
        endpoint: "dashboard",
        extra: "_u..nav=maui"
      }
    };
    function gaLinkOrUpgrade(key) {
      if (isBlocked.value) {
        return getUpgradeUrl("report", "publisher", "https://www.monsterinsights.com/pricing/");
      }
      const cfg = GA_LINKS_CONFIG[key];
      if (!cfg) return "";
      const referral = getMiGlobal("ga_referral_url", "");
      return buildGaExplorerReportUrl(
        referral,
        cfg.reportName,
        dateRange.value,
        cfg.extra,
        cfg.endpoint
      );
    }
    async function loadData() {
      if (!dateRange.value?.start || !dateRange.value?.end) return;
      loadError.value = null;
      if (isBlocked.value || isSampleDataEnabled()) {
        publisher.value = generatePublisherSample(dateRange.value);
        return;
      }
      loading.value = true;
      try {
        const apiFilters = buildApiFilters(storeActiveFilters.value, storeActiveDevice.value);
        publisher.value = await fetchPublisherReportData(dateRange.value, apiFilters);
      } catch (e) {
        loadError.value = e?.message || __$1("Error loading report.", "google-analytics-for-wordpress");
        publisher.value = {};
      } finally {
        loading.value = false;
      }
    }
    watch([dateRange, storeActiveFilters, storeActiveDevice, isBlocked], () => loadData(), { deep: true });
    onMounted(() => loadData());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "upsell-feature": "publisher"
      }, {
        table: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            loading.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(LoadingSpinnerInline),
              createBaseVNode("span", null, toDisplayString(unref(__$1)("Loading…", "google-analytics-for-wordpress")), 1)
            ])) : loadError.value ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(loadError.value), 1)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createBaseVNode("div", _hoisted_4, [
                createVNode(_sfc_main$1, {
                  title: unref(__$1)("Top Landing Pages", "google-analytics-for-wordpress"),
                  columns: landingColumns,
                  rows: landingRows.value,
                  "compare-rows": landingCompareRows.value,
                  "compare-date-labels": compareDateLabels.value,
                  "totals-override": landingTotals.value,
                  loading: false,
                  "ga-link": gaLinkOrUpgrade("landingpages"),
                  "ga-link-label": unref(__$1)("View Full Top Landing Pages Report", "google-analytics-for-wordpress"),
                  "empty-message": unref(__$1)("No landing pages tracked during this time period.", "google-analytics-for-wordpress")
                }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "totals-override", "ga-link", "ga-link-label", "empty-message"])
              ]),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  sectionError("outboundlinks") ? (openBlock(), createElementBlock("div", _hoisted_7, [
                    createBaseVNode("div", _hoisted_8, [
                      createBaseVNode("h3", _hoisted_9, toDisplayString(unref(__$1)("Top Outbound Links", "google-analytics-for-wordpress")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_10, toDisplayString(sectionError("outboundlinks")), 1)
                  ])) : (openBlock(), createBlock(_sfc_main$1, {
                    key: 1,
                    title: unref(__$1)("Top Outbound Links", "google-analytics-for-wordpress"),
                    columns: outboundColumns,
                    rows: outboundRows.value,
                    "compare-rows": outboundCompareRows.value,
                    "compare-date-labels": compareDateLabels.value,
                    loading: false,
                    "empty-message": unref(__$1)("No outbound link clicks detected for this time period.", "google-analytics-for-wordpress")
                  }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "empty-message"]))
                ]),
                createBaseVNode("div", _hoisted_11, [
                  sectionError("affiliatelinks") ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    createBaseVNode("div", _hoisted_13, [
                      createBaseVNode("h3", _hoisted_14, toDisplayString(unref(__$1)("Top Affiliate Links", "google-analytics-for-wordpress")), 1)
                    ]),
                    createBaseVNode("div", _hoisted_15, toDisplayString(sectionError("affiliatelinks")), 1)
                  ])) : (openBlock(), createBlock(_sfc_main$1, {
                    key: 1,
                    title: unref(__$1)("Top Affiliate Links", "google-analytics-for-wordpress"),
                    columns: affiliateColumns,
                    rows: affiliateRows.value,
                    "compare-rows": affiliateCompareRows.value,
                    "compare-date-labels": compareDateLabels.value,
                    loading: false,
                    "empty-message": unref(__$1)("No affiliate link clicks detected for this time period.", "google-analytics-for-wordpress")
                  }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "empty-message"]))
                ])
              ]),
              createBaseVNode("div", _hoisted_16, [
                sectionError("downloadlinks") ? (openBlock(), createElementBlock("div", _hoisted_17, [
                  createBaseVNode("div", _hoisted_18, [
                    createBaseVNode("h3", _hoisted_19, toDisplayString(unref(__$1)("Top Download Links", "google-analytics-for-wordpress")), 1)
                  ]),
                  createBaseVNode("div", _hoisted_20, toDisplayString(sectionError("downloadlinks")), 1)
                ])) : (openBlock(), createBlock(_sfc_main$1, {
                  key: 1,
                  title: unref(__$1)("Top Download Links", "google-analytics-for-wordpress"),
                  columns: downloadColumns,
                  rows: downloadRows.value,
                  "compare-rows": downloadCompareRows.value,
                  "compare-date-labels": compareDateLabels.value,
                  loading: false,
                  "ga-link": gaLinkOrUpgrade("downloadlinks"),
                  "ga-link-label": unref(__$1)("View All Download Links Report", "google-analytics-for-wordpress"),
                  "empty-message": unref(__$1)("No download link clicks detected for this time period.", "google-analytics-for-wordpress")
                }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "ga-link", "ga-link-label", "empty-message"]))
              ]),
              showAgeGenderRow.value ? (openBlock(), createElementBlock("div", _hoisted_21, [
                createBaseVNode("div", _hoisted_22, [
                  createBaseVNode("h3", _hoisted_23, toDisplayString(unref(__$1)("Age", "google-analytics-for-wordpress")), 1),
                  ageBarData.value.series?.length ? (openBlock(), createBlock(ApexBarChart, {
                    key: 0,
                    data: ageBarData.value,
                    height: ageCompareActive.value ? 380 : 260,
                    "show-legend": ageCompareActive.value
                  }, null, 8, ["data", "height", "show-legend"])) : (openBlock(), createElementBlock("div", _hoisted_24, toDisplayString(unref(__$1)("No age data available.", "google-analytics-for-wordpress")), 1))
                ]),
                createBaseVNode("div", _hoisted_25, [
                  createBaseVNode("h3", _hoisted_26, toDisplayString(unref(__$1)("Gender", "google-analytics-for-wordpress")), 1),
                  genderChartCurrent.value.series?.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    isCompareActive2.value && genderChartPrev.value.series?.length ? (openBlock(), createElementBlock("p", _hoisted_27, toDisplayString(currentDateLabel.value), 1)) : createCommentVNode("", true),
                    createVNode(_sfc_main$2, {
                      data: genderChartCurrent.value,
                      height: 240
                    }, null, 8, ["data"]),
                    isCompareActive2.value && genderChartPrev.value.series?.length ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-publishers-report__compare-divider" }, null, -1)),
                      createBaseVNode("p", _hoisted_28, toDisplayString(previousDateLabel.value), 1),
                      createVNode(_sfc_main$2, {
                        data: genderChartPrev.value,
                        height: 220
                      }, null, 8, ["data"])
                    ], 64)) : createCommentVNode("", true)
                  ], 64)) : (openBlock(), createElementBlock("div", _hoisted_29, toDisplayString(unref(__$1)("No gender data available.", "google-analytics-for-wordpress")), 1))
                ])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_30, [
                publisher.value.interest ? (openBlock(), createElementBlock("div", _hoisted_31, [
                  createVNode(_sfc_main$1, {
                    title: unref(__$1)("Interests", "google-analytics-for-wordpress"),
                    columns: interestColumns,
                    rows: interestRows.value,
                    "compare-rows": interestCompareRows.value,
                    "compare-date-labels": compareDateLabels.value,
                    loading: false,
                    "ga-link": gaLinkOrUpgrade("interest"),
                    "ga-link-label": unref(__$1)("View Full Interests Report", "google-analytics-for-wordpress"),
                    "empty-message": unref(__$1)("No interest groups detected for this time period.", "google-analytics-for-wordpress")
                  }, null, 8, ["title", "rows", "compare-rows", "compare-date-labels", "ga-link", "ga-link-label", "empty-message"])
                ])) : createCommentVNode("", true),
                publisher.value.scroll ? (openBlock(), createElementBlock("div", _hoisted_32, [
                  createBaseVNode("h3", _hoisted_33, toDisplayString(unref(__$1)("Scroll", "google-analytics-for-wordpress")), 1),
                  scrollErrorText.value ? (openBlock(), createElementBlock("div", _hoisted_34, toDisplayString(scrollErrorText.value), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createBaseVNode("div", _hoisted_35, toDisplayString(scrollPercent.value), 1),
                    createBaseVNode("div", _hoisted_36, toDisplayString(unref(__$1)("Average Scroll Depth", "google-analytics-for-wordpress")), 1)
                  ], 64)),
                  createBaseVNode("p", {
                    class: "monsterinsights-publishers-report__scroll-explainer",
                    innerHTML: unref(sanitizeHtml)(scrollExplainerHtml.value)
                  }, null, 8, _hoisted_37)
                ])) : createCommentVNode("", true)
              ])
            ], 64))
          ])
        ]),
        _: 1
      });
    };
  }
};
export {
  _sfc_main as default
};
