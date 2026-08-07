import { H as createPinia, q as purify, k as getMiGlobal$1 } from "./toastStore-CRCNwITM.js";
function setupPinia(app) {
  const pinia = createPinia();
  app.use(pinia);
  return pinia;
}
const scriptRel = "modulepreload";
const assetsURL = function(dep, importerUrl) {
  return new URL(dep, importerUrl).href;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    let allSettled = function(promises$2) {
      return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
        status: "fulfilled",
        value: value$1
      }), (reason) => ({
        status: "rejected",
        reason
      }))));
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled(deps.map((dep) => {
      dep = assetsURL(dep, importerUrl);
      if (dep in seen) return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (!!importerUrl) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
        const link$1 = links[i$1];
        if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
      }
      else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) link.as = "script";
      link.crossOrigin = "";
      link.href = dep;
      if (cspNonce) link.setAttribute("nonce", cspNonce);
      document.head.appendChild(link);
      if (isCss) return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
      });
    }));
  }
  function handlePreloadError(err$2) {
    const e$1 = new Event("vite:preloadError", { cancelable: true });
    e$1.payload = err$2;
    window.dispatchEvent(e$1);
    if (!e$1.defaultPrevented) throw err$2;
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};
const getMiGlobal = (key, defaultValue = null) => {
  return typeof window !== "undefined" && window.monsterinsights && typeof window.monsterinsights === "object" && Object.hasOwn(window.monsterinsights, key) ? window.monsterinsights[key] : defaultValue;
};
const getMonsterInsightsUrl = (type, id, fallbackUrl) => {
  if (typeof window !== "undefined" && window.monsterinsights) {
    if (typeof window.monsterinsights.getUrl === "function") {
      try {
        const url = window.monsterinsights.getUrl(type, id, fallbackUrl);
        if (url) {
          return url;
        }
      } catch (_e) {
      }
    }
    if (window.monsterinsights.utils && typeof window.monsterinsights.utils.getUrl === "function") {
      try {
        const url = window.monsterinsights.utils.getUrl(type, id, fallbackUrl);
        if (url) {
          return url;
        }
      } catch (_e) {
      }
    }
  }
  return fallbackUrl || "#";
};
async function ensureBearerToken(minValidityMs = 5 * 60 * 1e3) {
  if (typeof window === "undefined") {
    return false;
  }
  const bearerToken = getMiGlobal("bearer_token");
  const bearerExpires = getMiGlobal("bearer_expires");
  if (bearerToken && bearerExpires) {
    const expiresAtMs = bearerExpires * 1e3;
    const now = Date.now();
    const remainingMs = expiresAtMs - now;
    if (remainingMs > minValidityMs) {
      return true;
    }
  }
  if (!window.wp || !window.wp.ajax) {
    return false;
  }
  const nonce = getMiGlobal("nonce");
  try {
    const response = await window.wp.ajax.post("monsterinsights_get_bearer_token", {
      nonce
    });
    const body = response?.data && typeof response.data === "object" ? response.data : response;
    const inner = body?.data && typeof body.data === "object" ? body.data : body;
    const token = inner?.token ?? body?.token;
    const expiresAt = inner?.expires_at ?? body?.expires_at;
    if (token && typeof token === "string") {
      if (window.monsterinsights && typeof window.monsterinsights === "object") {
        window.monsterinsights.bearer_token = token;
        window.monsterinsights.bearer_expires = expiresAt ?? 0;
      }
      return true;
    }
  } catch (_e) {
  }
  return false;
}
const isPro = () => {
  return false;
};
const isAddonActive = (addon) => {
  const addons = getMiGlobal("addons", {});
  return !!addons[addon];
};
const isAddonInstalled = (addon) => {
  const info = getMiGlobal("addons_info", {});
  return !!info[addon]?.installed;
};
const getAddonBasename = (addon) => {
  const info = getMiGlobal("addons_info", {});
  return info[addon]?.basename || "";
};
const getAddonsPageUrl = () => {
  return getMiGlobal("addons_page_url", "/wp-admin/admin.php?page=monsterinsights_settings#/addons");
};
const isAuthed = () => {
  return getMiGlobal("authed", false);
};
const REPORTING_REAUTH_ERROR = "reporting_reauthenticate";
const isReportingConnected = () => {
  if (getMiGlobal("sample_data_enabled", false)) {
    return true;
  }
  const license = getMiGlobal("license", {}) || {};
  const auth = getMiGlobal("auth", {}) || {};
  if (getMiGlobal("network", false)) {
    return !!(license.license_network?.type && auth.network_v4);
  }
  return !!(license.type && auth.v4);
};
const guardReportingConnection = () => {
  if (!isReportingConnected()) {
    throw new Error(REPORTING_REAUTH_ERROR);
  }
};
const isNetworkAdmin = () => {
  return getMiGlobal("network", false);
};
const sampleDataModules = /* @__PURE__ */ Object.assign({ "../stores/sample-data/custom-dashboard/sample-view.json": () => __vitePreload(() => import("./sample-view-DCgpbF5N.js"), true ? [] : void 0, import.meta.url), "../stores/sample-data/custom-dashboard/widgets-data.json": () => __vitePreload(() => import("./widgets-data-TjimP1Ju.js"), true ? [] : void 0, import.meta.url) });
const getSampleData = async (type) => {
  if (!type) {
    return null;
  }
  const path = `../stores/sample-data/${type}.json`;
  if (sampleDataModules[path]) {
    try {
      const module = await sampleDataModules[path]();
      return module.default?.data || module.default;
    } catch (error) {
      console.error(`Error loading sample data for '${type}':`, error);
      return null;
    }
  }
  return null;
};
function addQueryArg(uri, key, value) {
  let hash = "";
  const re = new RegExp(`([?&])${key}=.*?(&|#|$)`, "i");
  const separator = uri.indexOf("?") !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, `$1${key}=${value}$2`);
  } else {
    if (uri.indexOf("#") !== -1) {
      hash = uri.replace(/.*#/, "#");
      uri = uri.replace(/#.*/, "");
    }
    return `${uri + separator + key}=${value}${hash}`;
  }
}
function getUrl(medium, campaign, url) {
  const source = "liteplugin", default_url = "lite/", content = getMiGlobal("plugin_version", "1.0.0");
  medium = medium ? medium : "defaultmedium";
  campaign = campaign ? campaign : "defaultcampaign";
  url = url ? url : `https://www.monsterinsights.com/${default_url}`;
  url = addQueryArg(url, "utm_source", source);
  url = addQueryArg(url, "utm_medium", medium);
  url = addQueryArg(url, "utm_campaign", campaign);
  url = addQueryArg(url, "utm_content", content);
  return url;
}
function getUpgradeUrl(medium, campaign, url) {
  const upgrade_url = getUrl(medium, campaign, url);
  const shareasale_id = getMiGlobal("shareasale_id", 0);
  const shareasale_url = getMiGlobal("shareasale_url", "");
  if (shareasale_id && "0" !== shareasale_id && shareasale_url) {
    return addQueryArg(shareasale_url, "urllink", upgrade_url);
  }
  return upgrade_url;
}
function sanitizeHtml(html) {
  if (html == null || html === "") {
    return "";
  }
  return purify.sanitize(String(html), { ADD_ATTR: ["target", "rel"] });
}
function getAjaxUrl() {
  return getMiGlobal$1("ajax") || window.ajaxurl;
}
function getNonce() {
  return getMiGlobal$1("nonce");
}
async function miAjax(action, data = {}, options = {}) {
  const params = new URLSearchParams();
  params.append("action", action);
  if (!("nonce" in data)) {
    params.append("nonce", getNonce());
  }
  for (const [key, value] of Object.entries(data)) {
    if (value !== void 0 && value !== null) {
      params.append(key, value);
    }
  }
  const response = await fetch(getAjaxUrl(), {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" },
    body: params.toString(),
    signal: options.signal
  });
  if (!response.ok) {
    throw { message: `${response.status} ${response.statusText}` };
  }
  const json = await response.json();
  if (json && json.success === false) {
    throw json.data || { message: "Request failed" };
  }
  if (json && json.success === true && typeof json.data !== "undefined") {
    return json.data;
  }
  return json;
}
async function ajaxPost(formData) {
  const response = await fetch(getAjaxUrl(), {
    method: "POST",
    body: formData
  });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}
export {
  REPORTING_REAUTH_ERROR as R,
  __vitePreload as _,
  ajaxPost as a,
  getAjaxUrl as b,
  guardReportingConnection as c,
  isReportingConnected as d,
  ensureBearerToken as e,
  isAuthed as f,
  getNonce as g,
  getAddonBasename as h,
  isAddonActive as i,
  getMiGlobal as j,
  isPro as k,
  isAddonInstalled as l,
  getAddonsPageUrl as m,
  getUpgradeUrl as n,
  getUrl as o,
  isNetworkAdmin as p,
  sanitizeHtml as q,
  miAjax as r,
  setupPinia as s,
  getMonsterInsightsUrl as t,
  getSampleData as u
};
