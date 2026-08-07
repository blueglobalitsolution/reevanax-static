import { a1 as storeToRefs, o as openBlock, E as createBlock, D as withCtx, b as createVNode, u as unref, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { _ as __$1 } from "./default-i18n-KrIlCc2E.js";
import { A as applyFiltersToQuery, B as relayReportingQuery, E as relayFallbackFetch, u as useOverviewReportStore, F as isSampleDataEnabled, b as buildApiFilters } from "../reports-LbXqkgoM.js";
import { f as fetchCachedReportSection } from "./reportCache-BGhGkpr3.js";
import { u as useReportPermissions } from "./useReportPermissions-Lp2-kd6x.js";
import { u as useReport } from "./useReport-1GAdDSvm.js";
import { f as formatPct, b as formatNum } from "./overviewTableFormatters-Bh6rmRkk.js";
import { s as shouldHideNotSetValue } from "./reportValues-hnaHRbaC.js";
import { g as getCompareDateLabels } from "./compareDateLabels-B56Y3XjZ.js";
import { f as formatDateLabel } from "./useOverviewChartData-ea-7IFwh.js";
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
const MEDIA_CHART_QUERY = {
  id: "media_chart",
  dimensions: ["customEvent:video_url", "date"],
  metrics: ["totalUsers"],
  groupBy: "date",
  limit: 500,
  filters: {
    operator: "and",
    conditions: [
      { field: "eventName", type: "dimension", match: "exact", value: "video_start" }
    ]
  }
};
const MEDIA_TABLE_QUERY = {
  id: "media_table",
  dimensions: ["customEvent:video_title", "eventName"],
  metrics: ["totalUsers", "eventCount", "customEvent:video_duration"],
  orderBy: [{ field: "eventName", desc: true }],
  limit: 100,
  filters: {
    operator: "and",
    conditions: [
      { field: "eventName", type: "dimension", match: "in", values: ["video_start", "video_complete", "video_progress"] }
    ]
  }
};
const QUERY_IDS = ["media_chart", "media_table"];
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
async function fetchMediaReportData(dateRange, apiFilters = null) {
  const chartQuery = withCompare(applyFiltersToQuery({ ...MEDIA_CHART_QUERY }, apiFilters), dateRange);
  const tableQuery = applyFiltersToQuery({ ...MEDIA_TABLE_QUERY }, apiFilters);
  const queries = [chartQuery, tableQuery];
  const errorLabel = __("Error loading media report data", "google-analytics-for-wordpress");
  const prevBody = isCompareActive(dateRange) ? buildRequestBody(dateRange.compareStart, dateRange.compareEnd, [tableQuery], null) : null;
  return fetchCachedReportSection({
    cacheGroup: "media",
    cacheKeyPrefix: "media_report",
    dateRange,
    apiFilters,
    errorLabel,
    onBearer: async ({ start, end }) => {
      const [body, prevResult] = await Promise.all([
        relayReportingQuery(buildRequestBody(start, end, queries, dateRange)),
        prevBody ? relayReportingQuery(prevBody) : Promise.resolve(null)
      ]);
      return {
        ...extractQueryResults(body, QUERY_IDS),
        ...prevBody ? { media_table_prev: extractQueryResults(prevResult, ["media_table"]).media_table } : {}
      };
    },
    onFallback: async ({ start, end }) => {
      const [current, prev] = await Promise.all([
        relayFallbackFetch(
          "api/v3/reporting/query",
          buildRequestBody(start, end, queries, dateRange),
          (body) => extractQueryResults(body, QUERY_IDS),
          errorLabel
        ),
        prevBody ? relayFallbackFetch(
          "api/v3/reporting/query",
          prevBody,
          (body) => ({ media_table_prev: extractQueryResults(body, ["media_table"]).media_table }),
          errorLabel
        ) : Promise.resolve({})
      ]);
      return { ...current, ...prev || {} };
    }
  });
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
const SAMPLE_VIDEOS = [
  "[Case Study] 6 Ways WPBeginner Uses MonsterInsights to Grow Their Business",
  "How to Integrate TrustPulse with Google Tag Manager",
  "Announcing New RafflePress Polls & Surveys for Your Giveaways",
  "WPForms Hits 6,000 5-Star Reviews — Giveaway Time!",
  "Say Hello to WP Mail SMTP Pro – Easy Email Deliverability for WordPress",
  "MonsterInsights Just got 10X Better – New Design + Custom Reports + Powerful Addons",
  "30 Easy Ways to Make Money With OptinMonster",
  "Top 5 Creative Methods to Increase Sales with MonsterInsights in 2024",
  "How to Create a Mastermind Group with MemberPress",
  "SeedProd is Now Part of the Awesome Motive Family"
];
function generateChartRows(dates) {
  return dates.map((date) => {
    const totalPlays = sampleMetric(date, "media-plays", 42, 0.45);
    return {
      d: [date],
      m: [[String(totalPlays)]],
      rows: [
        { d: [date, "https://youtube.com/watch?sample1"], m: [[String(Math.round(totalPlays * 0.6))]] },
        { d: [date, "https://youtube.com/watch?sample2"], m: [[String(Math.round(totalPlays * 0.4))]] }
      ]
    };
  });
}
function metricValue(curr, seed, compare) {
  const prev = Math.max(0, Math.round(Number(curr) * (0.74 + seededRandom(`${seed}-prev`) * 0.2)));
  return [String(prev), String(curr)];
}
function generateTableRows(compare = false) {
  const rows = [];
  for (const title of SAMPLE_VIDEOS) {
    const rand = seededRandom(`media-table-${title}`);
    const starts = Math.max(3, Math.round(14 * (0.3 + rand)));
    const duration = Math.round(120 + rand * 180);
    const completeRand = seededRandom(`media-complete-${title}`);
    const completes = Math.max(0, Math.round(starts * completeRand * 0.5));
    const progressRand = seededRandom(`media-progress-${title}`);
    const progressUsers = Math.max(1, Math.round(starts * 0.7));
    const progressEvents = Math.round(progressUsers * (1 + progressRand * 3));
    rows.push({
      d: [title, "video_start"],
      m: compare ? [
        metricValue(starts, `${title}-vs`),
        metricValue(starts, `${title}-ec`),
        metricValue(duration * starts, `${title}-vd`)
      ] : [[String(starts), String(starts), String(duration * starts)]]
    });
    if (completes > 0) {
      rows.push({
        d: [title, "video_complete"],
        m: compare ? [
          metricValue(completes, `${title}-vc-u`),
          metricValue(completes, `${title}-vc-ec`),
          metricValue(duration * completes, `${title}-vc-d`)
        ] : [[String(completes), String(completes), String(duration * completes)]]
      });
    }
    rows.push({
      d: [title, "video_progress"],
      m: compare ? [
        metricValue(progressUsers, `${title}-vp-u`),
        metricValue(progressEvents, `${title}-vp-ev`),
        metricValue(duration * progressUsers, `${title}-vp-d`)
      ] : [[String(progressUsers), String(progressEvents), String(duration * progressUsers)]]
    });
  }
  return rows;
}
function generateMediaReportSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const compare = !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
  return {
    media_chart: { rows: generateChartRows(dates) },
    media_table: { rows: generateTableRows(compare) }
  };
}
const _sfc_main = {
  __name: "MediaReport",
  setup(__props) {
    const overviewStore = useOverviewReportStore();
    const { dateRange, activeFilters: storeActiveFilters, activeDevice: storeActiveDevice } = storeToRefs(overviewStore);
    const { isBlocked } = useReportPermissions({ minTier: "plus", requiredAddon: "media" });
    const activeChartTab = ref("video_plays");
    const chartTabs = [
      { id: "video_plays", label: __$1("Video Plays", "google-analytics-for-wordpress"), icon: "video-play" }
    ];
    const isCompareActive2 = computed(
      () => !!(dateRange.value?.compareReport && dateRange.value?.compareStart && dateRange.value?.compareEnd)
    );
    const compareDateLabelsForTable = computed(() => getCompareDateLabels(dateRange.value));
    function extractMediaMetricsFromRow(row, periodIdx, isCompareFormat) {
      const m = row?.m ?? [];
      {
        const m0 = Array.isArray(m[0]) ? m[0] : [];
        return {
          totalUsers: parseFloat(m0[0]) || 0,
          eventCount: parseFloat(m0[1]) || 0,
          videoDuration: parseFloat(m0[2]) || 0
        };
      }
    }
    const chartRawDates = computed(() => {
      const result = rawData.value?.media_chart;
      if (!result?.rows?.length) return [];
      const firstRow = result.rows[0];
      if (Array.isArray(firstRow.rows)) {
        return result.rows.map((row) => row?.d?.[0] || "");
      }
      const dates = [...new Set(result.rows.map((r) => r?.d?.[1] || ""))];
      dates.sort();
      return dates;
    });
    const chartData = computed(() => {
      const result = rawData.value?.media_chart;
      if (!result?.rows?.length) return { categories: [], series: [] };
      const primaryColor = "#3A93DD";
      const compareColor = "#A0AEC0";
      const firstRow = result.rows[0];
      const isGrouped = Array.isArray(firstRow.rows);
      if (isGrouped) {
        const categories2 = [];
        const data = [];
        for (const row of result.rows) {
          categories2.push(formatDateLabel(row.d[0]));
          data.push(Number(row?.m?.[0]?.[0]) || 0);
        }
        return {
          categories: categories2,
          series: [{ name: "Video Plays", data }],
          colors: [primaryColor],
          strokeDashArray: [0]
        };
      }
      const byDate = {};
      for (const row of result.rows) {
        const date = row?.d?.[1] || "";
        const m0 = Array.isArray(row?.m?.[0]) ? row.m[0] : [];
        if (!byDate[date]) byDate[date] = { curr: 0, prev: 0 };
        if (m0.length === 2 && isCompareActive2.value) {
          byDate[date].prev += Number(m0[0]) || 0;
          byDate[date].curr += Number(m0[1]) || 0;
        } else {
          byDate[date].curr += Number(m0[0]) || 0;
        }
      }
      const sortedDates = Object.keys(byDate).sort();
      const categories = sortedDates.map((d) => formatDateLabel(d));
      const currData = sortedDates.map((d) => byDate[d].curr);
      const prevData = sortedDates.map((d) => byDate[d].prev);
      const hasCompare = prevData.some((v) => v > 0) && isCompareActive2.value;
      const series = [{ name: "Video Plays", data: currData }];
      const colors = [primaryColor];
      const strokeDashArray = [0];
      if (hasCompare) {
        series.push({ name: "Previous Period", data: prevData });
        colors.push(compareColor);
        strokeDashArray.push(5);
      }
      return { categories, series, colors, strokeDashArray };
    });
    const columns = [
      { key: "title", label: __$1("Video Details", "google-analytics-for-wordpress"), sortable: true },
      { key: "videoPlays", label: __$1("Video Plays", "google-analytics-for-wordpress"), sortable: true },
      { key: "avgWatchTime", label: __$1("Avg. Watch Time", "google-analytics-for-wordpress"), sortable: true },
      { key: "avgPercentWatched", label: __$1("Avg. % Watched", "google-analytics-for-wordpress"), sortable: true },
      { key: "completionRate", label: __$1("Completion Rate", "google-analytics-for-wordpress"), sortable: true }
    ];
    function secondsToTimeString(seconds) {
      const s = Math.max(0, Math.round(seconds));
      if (s < 60) return `${s}s`;
      const m = Math.floor(s / 60);
      const rem = s % 60;
      return rem > 0 ? `${m}m ${rem}s` : `${m}m`;
    }
    function buildMediaTableRowsForPeriod(rows, periodIdx, isCompareFormat) {
      if (!Array.isArray(rows) || rows.length === 0) return [];
      const dimCount = Array.isArray(rows[0]?.d) ? rows[0].d.length : 2;
      const eventNameIdx = dimCount - 1;
      const titleIdx = dimCount - 2;
      const videos = {};
      for (const row of rows) {
        const title = row?.d?.[titleIdx] || "";
        const eventName = row?.d?.[eventNameIdx] || "";
        const { totalUsers, eventCount, videoDuration } = extractMediaMetricsFromRow(
          row
        );
        if (!videos[title]) {
          videos[title] = {
            title,
            videoStart: 0,
            videoComplete: 0,
            videoProgressEvents: 0,
            videoProgressUsers: 0,
            videoDurationSum: 0,
            videoStartEvents: 0
          };
        }
        if (eventName === "video_start") {
          videos[title].videoStart += totalUsers;
          videos[title].videoDurationSum += videoDuration;
          videos[title].videoStartEvents += eventCount;
        } else if (eventName === "video_complete") {
          videos[title].videoComplete += totalUsers;
        } else if (eventName === "video_progress") {
          videos[title].videoProgressEvents += eventCount;
          videos[title].videoProgressUsers += totalUsers;
        }
      }
      return Object.values(videos).filter((v) => !shouldHideNotSetValue(v.title)).map((v) => {
        v.videoDuration = v.videoStartEvents > 0 ? Math.round(v.videoDurationSum / v.videoStartEvents) : 0;
        const completionRate = v.videoStart > 0 ? v.videoComplete / v.videoStart * 100 : 0;
        let avgPercentWatched = 0;
        if (v.videoComplete > 0 && v.videoProgressUsers === 0) {
          avgPercentWatched = 100;
        } else if (v.videoProgressUsers > 0) {
          const totalExpected = v.videoProgressUsers * 4;
          avgPercentWatched = Math.round(v.videoProgressEvents / totalExpected * 100);
        }
        const avgWatchSeconds = Math.round(v.videoDuration * avgPercentWatched / 100);
        return {
          title: v.title || __$1("(not set)", "google-analytics-for-wordpress"),
          videoPlays: formatNum(v.videoStart),
          avgWatchTime: secondsToTimeString(avgWatchSeconds),
          avgPercentWatched: formatPct(avgPercentWatched),
          completionRate: formatPct(completionRate),
          _sortPlays: v.videoStart
        };
      }).sort((a, b) => b._sortPlays - a._sortPlays);
    }
    const tableRows = computed(() => {
      const rows = Array.isArray(rawData.value?.media_table?.rows) ? rawData.value.media_table.rows : [];
      return buildMediaTableRowsForPeriod(rows);
    });
    const compareTableRows = computed(() => {
      const rows = Array.isArray(rawData.value?.media_table_prev?.rows) ? rawData.value.media_table_prev.rows : [];
      return buildMediaTableRowsForPeriod(rows);
    });
    const { rawData, loading, error, reload } = useReport({
      fetch: () => fetchMediaReportData(
        dateRange.value,
        buildApiFilters(storeActiveFilters.value, storeActiveDevice.value)
      ),
      sample: () => generateMediaReportSample(dateRange.value),
      sampleWhen: () => isBlocked.value || isSampleDataEnabled(),
      isBlocked,
      watch: [dateRange, storeActiveFilters, storeActiveDevice],
      guard: () => !!(dateRange.value?.start && dateRange.value?.end)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ReportPageLayout, {
        "required-license": "plus",
        "required-addon": "media",
        "upsell-feature": "media"
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
            "raw-dates": chartRawDates.value,
            "onUpdate:activeTab": _cache[0] || (_cache[0] = ($event) => activeChartTab.value = $event),
            onSiteNotesSaved: unref(reload)
          }, null, 8, ["active-tab", "chart-data", "loading", "error", "show-site-notes", "date-range", "raw-dates", "onSiteNotesSaved"])
        ]),
        table: withCtx(() => [
          createVNode(_sfc_main$1, {
            title: unref(__$1)("Video Details", "google-analytics-for-wordpress"),
            columns,
            rows: tableRows.value,
            "compare-rows": compareTableRows.value,
            "compare-date-labels": compareDateLabelsForTable.value,
            loading: unref(loading),
            "empty-message": unref(__$1)("No video plays tracked during this time period.", "google-analytics-for-wordpress")
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
