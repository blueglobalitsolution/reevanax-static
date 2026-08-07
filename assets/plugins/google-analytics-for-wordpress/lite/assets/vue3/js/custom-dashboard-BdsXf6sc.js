const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./chunks/DashboardList.lite-Dv67H_DG.js","./chunks/TheAppHeader-DEdY-dez.js","./chunks/toastStore-CRCNwITM.js","./chunks/ajax-B_XS1gT5.js","./chunks/useSampleData-oQ1vi02W.js","./chunks/default-i18n-KrIlCc2E.js","./chunks/Modal-B9mMTzc_.js","../css/main-monsterinsights-nGno5xCI.css","./chunks/Icon-Cz1-Vo-r.js","./chunks/_plugin-vue_export-helper-1tPrXgE0.js","../css/main-monsterinsights-DdCOUrGJ.css","./chunks/license-Boh3_ZVs.js","./chunks/useNotices-BpzNuZJ7.js","../css/main-monsterinsights-tn0RQdqM.css","./chunks/useFeatureGate-Ds3Z3eq-.js","./chunks/DashboardCreate-CuXNIZY7.js","./chunks/ErrorModal-CHhSUNns.js","./chunks/useChartColors-Bi1Kbjjv.js","./chunks/LoadingSpinnerInline-B4kX5NYb.js","../css/main-monsterinsights-CKJSBouy.css","./chunks/vue3-apexcharts-C-WQ0zow.js","./chunks/ApexBarChart-El9oBk9E.js","../css/main-monsterinsights-BPvLcjwH.css","./chunks/dateIntervals-BPoui_3H.js","./chunks/useAuthGate-DCWToggq.js","./chunks/flatpickr-CNAtgokQ.js","../css/main-monsterinsights-CMSe2SYd.css","../css/main-monsterinsights-h4_uXCXe.css","../css/main-monsterinsights-C4pIkCGG.css","./chunks/ReAuthModal-B3ASDJ6j.js","./chunks/auth-CC6F9_ZC.js","../css/main-monsterinsights-CusxVmhz.css","../css/main-monsterinsights-C_BN-_xE.css","./chunks/DashboardEdit-c2qNO8gN.js","./chunks/DashboardView-B6SU8li9.js"])))=>i.map(i=>d[i]);
import { c as createElementBlock, a as createBaseVNode, b as createVNode, r as resolveComponent, o as openBlock, d as createApp } from "./chunks/toastStore-CRCNwITM.js";
import { _ as _sfc_main$1, c as createRouter, a as createWebHashHistory } from "./chunks/TheAppHeader-DEdY-dez.js";
import { _ as __vitePreload, s as setupPinia } from "./chunks/ajax-B_XS1gT5.js";
import { _ as _sfc_main$2, i as installOverlays } from "./chunks/AppOverlays-BGer0Qoo.js";
import "./chunks/default-i18n-KrIlCc2E.js";
import "./chunks/_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "mi-custom-dashboard-app monsterinsights-app-surface" };
const _hoisted_2 = { id: "monsterinsights-app" };
const _hoisted_3 = { class: "monsterinsights-dashboard-content" };
const _hoisted_4 = { class: "monsterinsights-container" };
const _sfc_main = {
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_RouterView = resolveComponent("RouterView");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("div", _hoisted_3, [
            createVNode(_sfc_main$1),
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_RouterView)
            ])
          ])
        ]),
        createVNode(_sfc_main$2)
      ]);
    };
  }
};
const DashboardList = () => __vitePreload(() => import("./chunks/DashboardList.lite-Dv67H_DG.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]) : void 0, import.meta.url);
const DashboardCreate = () => __vitePreload(() => import("./chunks/DashboardCreate-CuXNIZY7.js"), true ? __vite__mapDeps([15,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,6,7,28,11,12,4,13,29,30,31,32]) : void 0, import.meta.url);
const DashboardEdit = () => __vitePreload(() => import("./chunks/DashboardEdit-c2qNO8gN.js"), true ? __vite__mapDeps([33,15,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,6,7,28,11,12,4,13,29,30,31,32]) : void 0, import.meta.url);
const DashboardView = () => __vitePreload(() => import("./chunks/DashboardView-B6SU8li9.js"), true ? __vite__mapDeps([34,1,2,3,5,16,8,9,10,14,17,18,19,20,21,22,23,24,25,26,27,6,7,28,4,11,12,13,29,30,31]) : void 0, import.meta.url);
const routes = [
  {
    path: "/",
    redirect: "/dashboards"
  },
  {
    path: "/dashboards",
    name: "dashboard-list",
    component: DashboardList,
    meta: {
      title: "Custom Views",
      requiresAuth: true
    }
  },
  {
    path: "/dashboards/add",
    name: "dashboard-add",
    component: DashboardList,
    meta: {
      title: "Add Custom View",
      requiresAuth: true,
      requiresEdit: true,
      showTemplateSelector: true
    }
  },
  {
    path: "/dashboards/new",
    name: "dashboard-create",
    component: DashboardCreate,
    meta: {
      title: "Create View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/edit",
    name: "dashboard-edit",
    component: DashboardEdit,
    props: true,
    meta: {
      title: "Edit View",
      requiresAuth: true,
      requiresEdit: true
    }
  },
  {
    path: "/dashboards/:id/view",
    name: "dashboard-view",
    component: DashboardView,
    props: true,
    meta: {
      title: "View",
      requiresAuth: true
    }
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/dashboards"
  }
];
function hasCustomViewsAccess() {
  return false;
}
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach((to, _from, next) => {
  if (!hasCustomViewsAccess() && (to.name === "dashboard-list" || to.path === "/dashboards")) {
    next({ name: "dashboard-view", params: { id: "sample" } });
    return;
  }
  next();
});
const app = createApp(_sfc_main);
app.use(router);
setupPinia(app);
installOverlays(app);
app.config.errorHandler = (err, _vm, info) => {
  console.error("Custom View Error:", err, info);
};
app.mount("#monsterinsights-custom-dashboard-app");
