import { b as useRoute } from "./TheAppHeader-DEdY-dez.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { j as getMiGlobal, p as isNetworkAdmin, k as isPro } from "./ajax-B_XS1gT5.js";
import { m as computed, j as ref, o as openBlock, c as createElementBlock, t as toDisplayString, u as unref, i as normalizeClass, s as createCommentVNode, a as createBaseVNode, r as resolveComponent, b as createVNode, D as withCtx, A as createTextVNode, E as createBlock, C as watch, F as Fragment, w as withDirectives, v as vModelText, B as withModifiers, f as renderList } from "./toastStore-CRCNwITM.js";
import { a as useToast, c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
const { sprintf, __ } = wp.i18n;
const auth = ref(
  getMiGlobal("auth", {
    v4: "",
    manual_v4: "",
    network_v4: "",
    network_manual_v4: ""
  })
);
const isNetwork = computed(() => getMiGlobal("network", false));
const isAuthed = computed(() => {
  if (isNetwork.value) {
    return !!(auth.value.network_v4 || auth.value.network_manual_v4);
  }
  return !!(auth.value.v4 || auth.value.manual_v4);
});
const hasV4 = computed(() => {
  if (isNetwork.value) {
    return auth.value.network_v4 !== "";
  }
  return auth.value.v4 !== "";
});
const wizardUrl = computed(() => getMiGlobal("wizard_url", "#"));
const needToAuthMessage = computed(() => {
  return sprintf(
    __("You need to %1$sconnect MonsterInsights%2$s first", "google-analytics-for-wordpress"),
    `<a href="${wizardUrl.value}" class="monsterinsights-connect-inline">`,
    "</a>"
  );
});
function updateAuth(newAuth) {
  auth.value = { ...auth.value, ...newAuth };
}
function useAuth() {
  return {
    auth,
    isNetwork,
    isAuthed,
    hasV4,
    wizardUrl,
    needToAuthMessage,
    updateAuth
  };
}
const _hoisted_1$5 = ["title", "textContent"];
const _sfc_main$6 = {
  __name: "SettingsButtonSave",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const route = useRoute();
    const settingsStore = useSettingsStore();
    const { isAuthed: isAuthed2, needToAuthMessage: needToAuthMessage2 } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const text_save_changes = __2("Save Changes", "google-analytics-for-wordpress");
    const isRouteSettings = computed(() => {
      const name = route.name;
      if (!name) return true;
      const hiddenRoutes = ["addons", "growth-tools", "google-ads"];
      if (hiddenRoutes.includes(name)) return false;
      if (name.indexOf("site-notes") === 0) return false;
      if (name.indexOf("about") === 0) return false;
      if (name.indexOf("seo") === 0) return false;
      if (name.indexOf("tools-url-builder") === 0 || name.indexOf("tools-import-export") === 0 || name.indexOf("tools-prettylinks-flow") === 0) return false;
      if (name.indexOf("user-journey-report") === 0) return false;
      return true;
    });
    const buttonClass = computed(() => {
      let cls = "monsterinsights-button";
      if (settingsStore.getSettings.is_saving || !isAuthed2.value) {
        cls += " monsterinsights-button-disabled";
      }
      return cls;
    });
    function simulateSave() {
      if (buttonClass.value.indexOf("monsterinsights-button-disabled") > -1) {
        return false;
      }
      savingToast({});
      settingsStore.simulateSave().then(() => successToast({})).catch(() => errorToast({}));
    }
    return (_ctx, _cache) => {
      return isRouteSettings.value ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: normalizeClass(buttonClass.value),
        title: !unref(isAuthed2) ? unref(needToAuthMessage2) : "",
        onClick: simulateSave,
        textContent: toDisplayString(unref(text_save_changes))
      }, null, 10, _hoisted_1$5)) : createCommentVNode("", true);
    };
  }
};
const _sfc_main$5 = {
  __name: "monsterinsights-PopularPostsProPill-Lite",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [..._cache[0] || (_cache[0] = [
        createBaseVNode("span", { class: "monsterinsights-pro-pill" }, "PRO", -1)
      ])]);
    };
  }
};
const _hoisted_1$4 = { class: "monsterinsights-popular-posts-navbar" };
const _hoisted_2$2 = ["textContent"];
const _sfc_main$4 = {
  __name: "PopularPostsNavigation",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const text_inline_popular_posts = __2("Inline Popular Posts", "google-analytics-for-wordpress");
    const text_popular_posts_widget = __2("Popular Posts Widget", "google-analytics-for-wordpress");
    const text_popular_posts_products = __2("Popular Products", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createVNode(_component_RouterLink, {
          class: "monsterinsights-navigation-tab-link",
          to: "/popular-posts",
          "exact-active-class": "router-link-exact-active",
          textContent: toDisplayString(unref(text_inline_popular_posts))
        }, null, 8, ["textContent"]),
        createVNode(_component_RouterLink, {
          class: "monsterinsights-navigation-tab-link",
          to: "/popular-posts/widget",
          textContent: toDisplayString(unref(text_popular_posts_widget))
        }, null, 8, ["textContent"]),
        createVNode(_component_RouterLink, {
          class: "monsterinsights-navigation-tab-link",
          to: "/popular-posts/products"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_popular_posts_products))
            }, null, 8, _hoisted_2$2),
            createVNode(_sfc_main$5)
          ]),
          _: 1
        })
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "monsterinsights-about-navbar" };
const _sfc_main$3 = {
  __name: "AboutTabNavigation",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const text_about_us = __2("About Us", "google-analytics-for-wordpress");
    const text_getting_started = __2("Getting Started", "google-analytics-for-wordpress");
    const text_lite_vs_pro = __2("Lite vs Pro", "google-analytics-for-wordpress");
    const licenseStore = useLicenseStore();
    const showLitePro = computed(() => {
      isNetworkAdmin() ? licenseStore.license_network?.type ?? "" : licenseStore.license?.type ?? "";
      return true;
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_component_RouterLink, {
          class: "monsterinsights-navigation-tab-link",
          to: { name: "about-us" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(text_about_us)), 1)
          ]),
          _: 1
        }),
        createVNode(_component_RouterLink, {
          class: "monsterinsights-navigation-tab-link",
          to: { name: "about-getting-started" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(text_getting_started)), 1)
          ]),
          _: 1
        }),
        showLitePro.value ? (openBlock(), createBlock(_component_RouterLink, {
          key: 0,
          class: "monsterinsights-navigation-tab-link",
          to: { name: "about-lite-vs-pro" }
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(text_lite_vs_pro)), 1)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$2 = ["textContent"];
const _sfc_main$2 = {
  __name: "SettingsTabsNavigation",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const route = useRoute();
    useAddonsStore();
    const showEcommerce = computed(() => {
      return true;
    });
    const text_settings = __2("General", "google-analytics-for-wordpress");
    const text_engagement = __2("Engagement", "google-analytics-for-wordpress");
    const text_ecommerce = __2("eCommerce", "google-analytics-for-wordpress");
    const text_publisher = __2("Publisher", "google-analytics-for-wordpress");
    const text_conversions = __2("Conversions", "google-analytics-for-wordpress");
    const text_advanced = __2("Advanced", "google-analytics-for-wordpress");
    const text_setup_checklist = __2("Setup Checklist", "google-analytics-for-wordpress");
    const nav_open = ref(false);
    const routeTitle = computed(() => {
      return route.meta?.title || "";
    });
    const navGroup = computed(() => {
      const path = route.path || "";
      if (path === "/popular-posts" || path.startsWith("/popular-posts/")) return "popular-posts";
      if (path === "/about" || path.startsWith("/about/")) return "about";
      return "default";
    });
    const buttonIconClass = computed(() => {
      let cls = "monstericon-arrow";
      if (nav_open.value) {
        cls += " monstericon-down";
      }
      return cls;
    });
    const navClass = computed(() => {
      let cls = "monsterinsights-main-navigation";
      if (nav_open.value) {
        cls += " monsterinsights-main-navigation-open";
      }
      return cls;
    });
    const triggerClass = computed(() => {
      let cls = "monsterinsights-mobile-nav-trigger";
      if (nav_open.value) {
        cls += " monsterinsights-mobile-nav-trigger-open";
      }
      return cls;
    });
    function maybeCloseMenu() {
      const wrap = document.getElementById("wpwrap");
      if (wrap && wrap.classList.contains("wp-responsive-open")) {
        const toggle = document.getElementById("wp-admin-bar-menu-toggle");
        if (toggle) toggle.click();
      }
    }
    watch(() => route.name, () => {
      nav_open.value = false;
      maybeCloseMenu();
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("button", {
          class: normalizeClass(triggerClass.value),
          onClick: _cache[0] || (_cache[0] = ($event) => nav_open.value = !nav_open.value)
        }, [
          createBaseVNode("span", {
            textContent: toDisplayString(routeTitle.value)
          }, null, 8, _hoisted_1$2),
          createBaseVNode("i", {
            class: normalizeClass(buttonIconClass.value)
          }, null, 2)
        ], 2),
        createBaseVNode("nav", {
          class: normalizeClass(navClass.value)
        }, [
          navGroup.value === "popular-posts" ? (openBlock(), createBlock(_sfc_main$4, { key: 0 })) : navGroup.value === "about" ? (openBlock(), createBlock(_sfc_main$3, { key: 1 })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/",
              textContent: toDisplayString(unref(text_settings))
            }, null, 8, ["textContent"]),
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/engagement",
              textContent: toDisplayString(unref(text_engagement))
            }, null, 8, ["textContent"]),
            showEcommerce.value ? (openBlock(), createBlock(_component_RouterLink, {
              key: 0,
              class: "monsterinsights-navigation-tab-link",
              to: "/ecommerce",
              textContent: toDisplayString(unref(text_ecommerce))
            }, null, 8, ["textContent"])) : createCommentVNode("", true),
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/publisher",
              textContent: toDisplayString(unref(text_publisher))
            }, null, 8, ["textContent"]),
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/conversions",
              textContent: toDisplayString(unref(text_conversions))
            }, null, 8, ["textContent"]),
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/advanced",
              textContent: toDisplayString(unref(text_advanced))
            }, null, 8, ["textContent"]),
            createVNode(_component_RouterLink, {
              class: "monsterinsights-navigation-tab-link",
              to: "/setup-checklist",
              textContent: toDisplayString(unref(text_setup_checklist))
            }, null, 8, ["textContent"])
          ], 64))
        ], 2)
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-addons-navbar" };
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = { class: "monsterinsights-addons-filters" };
const _hoisted_4$1 = ["placeholder"];
const _sfc_main$1 = {
  __name: "AddonsNavigation",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const addonsStore = useAddonsStore();
    const text_addons_title = __2("MonsterInsights Addons", "google-analytics-for-wordpress");
    const text_addons_search = __2("Search Addons", "google-analytics-for-wordpress");
    const localSearch = computed({
      get() {
        return addonsStore.search;
      },
      set(value) {
        addonsStore.updateSearch(value);
        addonsStore.updateWebsiteType("all");
        addonsStore.updateActiveTab("all");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("h1", {
          textContent: toDisplayString(unref(text_addons_title))
        }, null, 8, _hoisted_2$1),
        createBaseVNode("div", _hoisted_3$1, [
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => localSearch.value = $event),
            type: "text",
            placeholder: unref(text_addons_search),
            class: "monsterinsights-addons-search"
          }, null, 8, _hoisted_4$1), [
            [vModelText, localSearch.value]
          ]),
          _cache[1] || (_cache[1] = createBaseVNode("i", { class: "monstericon-search" }, null, -1))
        ])
      ]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-navigation-bar monsterinsights-addons-filter-wrapper" };
const _hoisted_2 = { class: "monsterinsights-container" };
const _hoisted_3 = { class: "monsterinsights-addons-filter-left" };
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = { class: "monsterinsights-addons-filter-right" };
const _hoisted_9 = ["value"];
const _hoisted_10 = ["value"];
const _sfc_main = {
  __name: "AddonsFilter",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const addonsStore = useAddonsStore();
    const isProVersion = isPro();
    const activeTab = computed(() => addonsStore.activeTab);
    const websiteType = computed(() => addonsStore.websiteType);
    const websiteTypes = [
      { value: "all", label: __2("All Website Types", "google-analytics-for-wordpress") },
      { value: "business", label: __2("Business Website", "google-analytics-for-wordpress") },
      { value: "publisher", label: __2("Publisher (Blog)", "google-analytics-for-wordpress") },
      { value: "ecommerce", label: __2("Ecommerce", "google-analytics-for-wordpress") }
    ];
    const texts = {
      all: __2("All", "google-analytics-for-wordpress"),
      popular: __2("Popular", "google-analytics-for-wordpress"),
      new: __2("New", "google-analytics-for-wordpress"),
      active: __2("Active", "google-analytics-for-wordpress")
    };
    function tabClass(tab) {
      return {
        "monsterinsights-navigation-tab-link": true,
        "router-link-exact-active": activeTab.value === tab
      };
    }
    function changeTab(value) {
      addonsStore.updateActiveTab(value);
      addonsStore.updateWebsiteType("all");
    }
    function changeWebsiteType(event) {
      addonsStore.updateActiveTab("all");
      addonsStore.updateWebsiteType(event.target.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("a", {
              href: "#",
              class: normalizeClass(tabClass("all")),
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => changeTab("all"), ["prevent"])),
              textContent: toDisplayString(texts.all)
            }, null, 10, _hoisted_4),
            createBaseVNode("a", {
              href: "#",
              class: normalizeClass(tabClass("popular")),
              onClick: _cache[1] || (_cache[1] = withModifiers(($event) => changeTab("popular"), ["prevent"])),
              textContent: toDisplayString(texts.popular)
            }, null, 10, _hoisted_5),
            createBaseVNode("a", {
              href: "#",
              class: normalizeClass(tabClass("new")),
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => changeTab("new"), ["prevent"])),
              textContent: toDisplayString(texts.new)
            }, null, 10, _hoisted_6),
            unref(isProVersion) ? (openBlock(), createElementBlock("a", {
              key: 0,
              href: "#",
              class: normalizeClass(tabClass("active")),
              onClick: _cache[3] || (_cache[3] = withModifiers(($event) => changeTab("active"), ["prevent"])),
              textContent: toDisplayString(texts.active)
            }, null, 10, _hoisted_7)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_8, [
            createBaseVNode("select", {
              class: "monsterinsights-addons-select",
              value: websiteType.value,
              onChange: changeWebsiteType
            }, [
              (openBlock(), createElementBlock(Fragment, null, renderList(websiteTypes, (option) => {
                return createBaseVNode("option", {
                  key: option.value,
                  value: option.value
                }, toDisplayString(option.label), 9, _hoisted_10);
              }), 64))
            ], 40, _hoisted_9)
          ])
        ])
      ]);
    };
  }
};
export {
  _sfc_main$6 as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b,
  _sfc_main as c,
  _sfc_main$5 as d,
  useAuth as u
};
