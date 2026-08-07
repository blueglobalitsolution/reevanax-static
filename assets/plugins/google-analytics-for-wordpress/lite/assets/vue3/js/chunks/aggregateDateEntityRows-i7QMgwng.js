function aggregateDateEntityRows(rows, { metricCount, avgIndices = [], weightIndex = 0 }) {
  if (!Array.isArray(rows) || rows.length === 0) {
    return [];
  }
  const avgSet = new Set(avgIndices);
  const map = /* @__PURE__ */ new Map();
  let anyCompare = false;
  const firstDim = String(rows[0]?.d?.[0] ?? "");
  const hasDateDim = /^\d{8}$/.test(firstDim) || /^\d{4}-\d{2}-\d{2}$/.test(firstDim);
  for (const row of rows) {
    const d = Array.isArray(row?.d) ? row.d : [];
    const entityDims = hasDateDim ? d.slice(1) : d.slice(0);
    const key = entityDims.join("");
    const { curr, prev } = extractRowValues(row?.m, metricCount);
    if (prev) {
      anyCompare = true;
    }
    let acc = map.get(key);
    if (!acc) {
      acc = {
        dims: entityDims,
        currSum: new Array(metricCount).fill(0),
        prevSum: new Array(metricCount).fill(0),
        currWeightedNum: new Array(metricCount).fill(0),
        prevWeightedNum: new Array(metricCount).fill(0),
        currWeight: 0,
        prevWeight: 0
      };
      map.set(key, acc);
    }
    const currWeight = curr[weightIndex] || 0;
    const prevWeight = prev ? prev[weightIndex] || 0 : 0;
    acc.currWeight += currWeight;
    acc.prevWeight += prevWeight;
    for (let i = 0; i < metricCount; i++) {
      const cv = curr[i] || 0;
      const pv = prev ? prev[i] || 0 : 0;
      if (avgSet.has(i)) {
        acc.currWeightedNum[i] += cv * currWeight;
        acc.prevWeightedNum[i] += pv * prevWeight;
      } else {
        acc.currSum[i] += cv;
        acc.prevSum[i] += pv;
      }
    }
  }
  const result = [];
  for (const acc of map.values()) {
    const current = new Array(metricCount);
    const previous = anyCompare ? new Array(metricCount) : null;
    for (let i = 0; i < metricCount; i++) {
      if (avgSet.has(i)) {
        current[i] = acc.currWeight > 0 ? acc.currWeightedNum[i] / acc.currWeight : 0;
        if (previous) {
          previous[i] = acc.prevWeight > 0 ? acc.prevWeightedNum[i] / acc.prevWeight : 0;
        }
      } else {
        current[i] = acc.currSum[i];
        if (previous) {
          previous[i] = acc.prevSum[i];
        }
      }
    }
    result.push({ dims: acc.dims, current, previous });
  }
  result.sort((a, b) => (b.current[0] || 0) - (a.current[0] || 0));
  return result;
}
function extractRowValues(m, metricCount) {
  if (!Array.isArray(m) || m.length === 0) {
    return { curr: [], prev: null };
  }
  if (m.length > 1 && Array.isArray(m[0]) && m[0].length === 2 && !Array.isArray(m[0][0])) {
    return {
      curr: m.map((pair) => Number(pair[1]) || 0),
      prev: m.map((pair) => Number(pair[0]) || 0)
    };
  }
  if (metricCount === 1 && m.length === 1 && Array.isArray(m[0]) && m[0].length === 2 && !Array.isArray(m[0][0])) {
    return { curr: [Number(m[0][1]) || 0], prev: [Number(m[0][0]) || 0] };
  }
  if (m.length === 1 && Array.isArray(m[0]) && Array.isArray(m[0][0]) && m[0][0].length === 2) {
    return {
      curr: m[0].map((pair) => Number(pair[1]) || 0),
      prev: m[0].map((pair) => Number(pair[0]) || 0)
    };
  }
  if (m.length === 1 && Array.isArray(m[0])) {
    return { curr: m[0].map((v) => Number(v) || 0), prev: null };
  }
  return { curr: [], prev: null };
}
export {
  aggregateDateEntityRows as a
};
