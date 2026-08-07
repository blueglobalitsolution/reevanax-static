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
function hasCompare(dateRange) {
  return !!(dateRange?.compareReport && dateRange?.compareStart && dateRange?.compareEnd);
}
function metricVal(seed, base, isCompare, isDecimal = false) {
  const currRand = seededRandom(`${seed}-curr`);
  const prevRand = seededRandom(`${seed}-prev`);
  const curr = Math.max(1, Math.round(base * (0.4 + currRand * 1.2)));
  const prev = Math.max(1, Math.round(base * 0.85 * (0.4 + prevRand * 1.2)));
  const fmtCurr = isDecimal ? curr.toFixed(2) : String(curr);
  const fmtPrev = isDecimal ? prev.toFixed(2) : String(prev);
  return isCompare ? [fmtPrev, fmtCurr] : fmtCurr;
}
function generateTableRows(dimensions, prefix, baseCounts, isCompare = false) {
  const rows = dimensions.map((dim) => {
    const rand = seededRandom(`${prefix}-${dim}`);
    const metrics = baseCounts.map((base, colIdx) => {
      const seed = `${prefix}-${dim}-col${colIdx}`;
      if (isCompare) {
        return metricVal(seed, base, true, base % 1 !== 0);
      }
      const colRand = seededRandom(seed);
      if (base < 1) {
        return (base * (0.5 + colRand)).toFixed(6);
      }
      const val = Math.max(1, Math.round(base * (0.4 + colRand * 1.2)));
      return base % 1 !== 0 ? val.toFixed(2) : String(val);
    });
    return {
      d: [dim],
      m: [metrics],
      _sort: rand
    };
  });
  rows.sort((a, b) => b._sort - a._sort);
  return rows.map(({ d, m }) => ({ d, m }));
}
function generateChartRows(dates) {
  return dates.map((date) => {
    const sessions = sampleMetric(date, "sessions", 150, 0.45);
    const pageViews = sampleMetric(date, "pageviews", Math.round(sessions * 1.6), 0.2);
    const purchases = sampleMetric(date, "purchases", 8, 0.5);
    const convRate = (purchases / sessions).toFixed(6);
    return { d: [date], m: [[String(sessions), String(pageViews), String(purchases), convRate]] };
  });
}
function generateEcommerceOverviewSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const products = ["Premium Widget", "Basic T-Shirt", "Wireless Headphones", "Phone Case", "USB Cable", "Laptop Stand", "Mouse Pad", "Water Bottle"];
  const sources = ["google / organic", "direct / (none)", "facebook / social", "newsletter / email", "bing / cpc", "twitter / social"];
  const metricsRows = dates.map((date) => ({
    d: [date],
    m: [[
      String(sampleMetric(date, "km-sessions", 150, 0.4)),
      String(sampleMetric(date, "km-purchases", 8, 0.5)),
      String(`${sampleMetric(date, "km-revenue", 580, 0.45)}.${String(Math.round(seededRandom(`${date}kmr`) * 99)).padStart(2, "0")}`),
      String(`${sampleMetric(date, "km-aov", 72, 0.3)}.${String(Math.round(seededRandom(`${date}kma`) * 99)).padStart(2, "0")}`),
      String(sampleMetric(date, "km-atc", 22, 0.5)),
      String(sampleMetric(date, "km-ftp", 3, 0.6))
    ]]
  }));
  const compare = hasCompare(dateRange);
  return {
    sessions_chart: { rows: generateChartRows(dates) },
    ecommerce_key_metrics: { rows: metricsRows },
    ecommerce_event_counts: {
      rows: [
        { d: ["add_to_cart"], m: [["842"]] },
        { d: ["remove_from_cart"], m: [["156"]] },
        { d: ["begin_checkout"], m: [["534"]] },
        { d: ["purchase"], m: [["312"]] },
        { d: ["view_item"], m: [["4521"]] }
      ]
    },
    products_table: {
      rows: generateTableRows(products, "ecom-products", [28, 1450], compare)
    },
    conversions_table: {
      rows: generateTableRows(sources, "ecom-conversions", [320, 2800], compare)
    }
  };
}
function generateCouponsSample(dateRange) {
  const coupons = ["SAVE10", "WELCOME20", "SUMMER15", "FREESHIP", "VIP25", "FLASH30", "HOLIDAY10"];
  const compare = hasCompare(dateRange);
  return {
    coupons_table: {
      rows: generateTableRows(coupons, "coupons", [1250, 18, 68.5], compare)
    }
  };
}
function generateCartAbandonmentSample(dateRange) {
  const products = ["Premium Widget", "Basic T-Shirt", "Wireless Headphones", "Phone Case", "USB Cable", "Laptop Stand"];
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const compare = hasCompare(dateRange);
  return {
    cart_abandonment_product: {
      rows: generateTableRows(products, "cart-product", [45, 12, 350, 8], compare)
    },
    cart_abandonment_day: {
      rows: dates.map((date) => {
        const m = compare ? [[
          metricVal(`${date}-atc`, 30, true),
          metricVal(`${date}-tx`, 8, true),
          metricVal(`${date}-rev`, 250, true, true),
          metricVal(`${date}-co`, 6, true)
        ]] : [[
          String(sampleMetric(date, "addToCarts", 30, 0.4)),
          String(sampleMetric(date, "purchases", 8, 0.5)),
          String(sampleMetric(date, "revenue", 250, 0.45)),
          String(sampleMetric(date, "checkouts", 6, 0.5))
        ]];
        return { d: [date], m };
      })
    }
  };
}
function generateSpendByDaySample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const compare = hasCompare(dateRange);
  return {
    spend_by_day: {
      rows: dates.map((date) => {
        const m = compare ? [[
          metricVal(`${date}-rev`, 850, true, true),
          metricVal(`${date}-tx`, 12, true),
          metricVal(`${date}-items`, 18, true)
        ]] : [[
          String(`${sampleMetric(date, "revenue", 850, 0.45)}.${String(Math.round(seededRandom(`${date}dec`) * 99)).padStart(2, "0")}`),
          String(sampleMetric(date, "purchases", 12, 0.5)),
          String(sampleMetric(date, "items", 18, 0.4))
        ]];
        return { d: [date], m };
      })
    }
  };
}
function generateSpendByHourSample(dateRange) {
  const hours = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, "0"));
  const compare = hasCompare(dateRange);
  return {
    spend_by_hour: {
      rows: hours.map((hour) => {
        const h = parseInt(hour, 10);
        const factor = h >= 9 && h <= 17 ? 1.5 : h >= 6 && h <= 21 ? 1 : 0.3;
        if (compare) {
          return {
            d: [hour],
            m: [[
              metricVal(`hour-rev-${hour}`, Math.round(620 * factor), true, true),
              metricVal(`hour-tx-${hour}`, Math.round(8 * factor), true),
              metricVal(`hour-items-${hour}`, Math.round(12 * factor), true)
            ]]
          };
        }
        const rev = Math.round(620 * factor * (0.7 + seededRandom(`hour-rev-${hour}`) * 0.6) * 100) / 100;
        const tx = Math.max(1, Math.round(8 * factor * (0.5 + seededRandom(`hour-tx-${hour}`) * 1)));
        const items = Math.max(1, Math.round(tx * (1.2 + seededRandom(`hour-items-${hour}`) * 0.8)));
        return {
          d: [hour],
          m: [[String(rev), String(tx), String(items)]]
        };
      })
    }
  };
}
function generateRefundsSample(dateRange) {
  const dates = generateDates(dateRange?.start || "2026-01-01", dateRange?.end || "2026-01-31");
  const products = ["Wireless Headphones", "Premium Widget", "Phone Case", "USB Cable", "Laptop Stand"];
  const compare = hasCompare(dateRange);
  return {
    refunds_chart: {
      rows: dates.map((date) => ({
        d: [date],
        m: [[
          String(`${sampleMetric(date, "refund-amount", 45, 0.6)}.${String(Math.round(seededRandom(`${date}ref`) * 99)).padStart(2, "0")}`),
          String(sampleMetric(date, "refund-count", 2, 0.8))
        ]]
      }))
    },
    refunds_table: {
      rows: generateTableRows(products, "refunds", [25, 8, 180], compare)
    }
  };
}
function generatePurchasesByLocationSample(breakdown = "country", dateRange = null) {
  const dims = {
    country: ["United States", "United Kingdom", "Canada", "Germany", "Australia", "France", "India", "Brazil"],
    state: ["California", "New York", "Texas", "Florida", "Illinois", "Pennsylvania", "Ohio"],
    city: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "San Antonio", "San Diego"]
  };
  const compare = hasCompare(dateRange);
  return {
    purchases_location_table: {
      rows: generateTableRows(dims[breakdown] || dims.country, `purchases-${breakdown}`, [45, 3200, 72], compare)
    }
  };
}
function generateRefundsByGeoSample(breakdown = "country", dateRange = null) {
  const dims = {
    country: ["United States", "United Kingdom", "Canada", "Germany", "Australia", "France"],
    state: ["California", "New York", "Texas", "Florida", "Illinois"],
    city: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"]
  };
  const compare = hasCompare(dateRange);
  return {
    refunds_geo_table: {
      rows: generateTableRows(dims[breakdown] || dims.country, `refunds-geo-${breakdown}`, [280, 8, 35], compare)
    }
  };
}
function generateFunnelSample() {
  return {
    funnelTable: {
      rows: [
        { d: ["1. view_item", "RESERVED_TOTAL"], m: [["13502", "0.55", "6076", "0.45"]] },
        { d: ["2. add_to_cart", "RESERVED_TOTAL"], m: [["7426", "0.38", "4589", "0.62"]] },
        { d: ["3. purchase", "RESERVED_TOTAL"], m: [["2837", "0", "0", "0"]] }
      ]
    }
  };
}
export {
  generateCouponsSample as a,
  generateCartAbandonmentSample as b,
  generateFunnelSample as c,
  generatePurchasesByLocationSample as d,
  generateSpendByDaySample as e,
  generateSpendByHourSample as f,
  generateEcommerceOverviewSample as g,
  generateRefundsSample as h,
  generateRefundsByGeoSample as i
};
