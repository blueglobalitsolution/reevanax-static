import { c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { A as AboutBlock } from "./AboutBlock-BfOKyBy8.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, t as toDisplayString, u as unref, B as withModifiers, i as normalizeClass, m as computed, j as ref, b as createVNode, D as withCtx, F as Fragment, f as renderList, E as createBlock } from "./toastStore-CRCNwITM.js";
import { b as useRoute, u as useRouter } from "./TheAppHeader-DEdY-dez.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { n as getUpgradeUrl, p as isNetworkAdmin } from "./ajax-B_XS1gT5.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1$1 = ["id"];
const _hoisted_2$1 = { class: "monsterinsights-addon-top" };
const _hoisted_3$1 = {
  key: 0,
  class: "monsterinsights-addon-image"
};
const _hoisted_4$1 = ["src", "alt"];
const _hoisted_5$1 = { class: "monsterinsights-addon-text" };
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = ["textContent"];
const _hoisted_8$1 = { class: "monsterinsights-interior" };
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { class: "monsterinsights-addon-action" };
const _hoisted_12 = { key: 0 };
const _hoisted_13 = { key: 0 };
const _hoisted_14 = {
  key: 0,
  class: "monsterinsights-button"
};
const _hoisted_15 = ["textContent"];
const _hoisted_16 = { key: 1 };
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["href", "textContent"];
const _hoisted_19 = { key: 1 };
const _hoisted_20 = { key: 0 };
const _hoisted_21 = ["href", "textContent"];
const _hoisted_22 = { key: 1 };
const _hoisted_23 = ["innerHTML"];
const _hoisted_24 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "AddonBlock",
  props: {
    addon: {
      type: Object,
      required: true
    },
    isAddon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const route = useRoute();
    const router = useRouter();
    const addonsStore = useAddonsStore();
    const licenseStore = useLicenseStore();
    const activating = ref(false);
    const deactivating = ref(false);
    const installing = ref(false);
    const text_status = __("Status: %s", "google-analytics-for-wordpress");
    const text_expired = __("License Expired", "google-analytics-for-wordpress");
    const text_upgrade_required = __("Status: Upgrade Required", "google-analytics-for-wordpress");
    const currentRouteName = computed(() => route.name);
    const isUserFeedback = computed(() => props.addon.slug === "userfeedback-lite");
    const addonTitle = computed(() => {
      let title = props.addon.title || "";
      if (title.indexOf("MonsterInsights") === 0) {
        title = title.replace("MonsterInsights ", "");
      }
      return title;
    });
    const upgradeUrl = computed(
      () => getUpgradeUrl(
        "addons-page",
        String(addonTitle.value).toLocaleLowerCase().replaceAll(/\s+/g, "-")
      )
    );
    const isLicenseExpired = computed(() => !!licenseStore.license?.is_expired);
    const isNetworkLicenseExpired = computed(() => !!licenseStore.license_network?.is_expired);
    const actionsClass = computed(() => {
      let cls = "monsterinsights-addon-message ";
      if (props.addon.type === "licensed") {
        if (props.addon.active) {
          cls += "monsterinsights-addon-active";
        } else if (props.addon.installed === false) {
          cls += "monsterinsights-addon-not-installed";
        } else {
          cls += "monsterinsights-addon-inactive";
        }
      } else {
        cls += "monsterinsights-addon-not-available";
      }
      return cls;
    });
    const statusText = computed(() => {
      let status = __("Not Installed", "google-analytics-for-wordpress");
      if (props.addon.type !== "licensed") {
        status = __("Not Available", "google-analytics-for-wordpress");
      } else if (props.addon.active) {
        status = isNetworkAdmin() ? __("Network Active", "google-analytics-for-wordpress") : __("Active", "google-analytics-for-wordpress");
      } else if (props.addon.installed) {
        status = __("Inactive", "google-analytics-for-wordpress");
      }
      return sprintf(text_status, `<span>${status}</span>`);
    });
    const textButtonAction = computed(() => {
      let installLabel = __("Install", "google-analytics-for-wordpress");
      if (props.addon.redirect) {
        installLabel = __("Visit Website", "google-analytics-for-wordpress");
      }
      if (props.addon.type !== "licensed") {
        return __("Upgrade Now", "google-analytics-for-wordpress");
      }
      if (activating.value) return __("Activating...", "google-analytics-for-wordpress");
      if (deactivating.value) return __("Deactivating...", "google-analytics-for-wordpress");
      if (installing.value) return __("Installing...", "google-analytics-for-wordpress");
      if (props.addon.active) return __("Deactivate", "google-analytics-for-wordpress");
      if (props.addon.installed) return __("Activate", "google-analytics-for-wordpress");
      return installLabel;
    });
    function clickAction() {
      if (activating.value || deactivating.value || installing.value) return;
      if (props.addon.installed) {
        if (props.addon.active) {
          deactivateAddon();
        } else if (isUserFeedback.value) {
          router.push({ name: "userfeedback" });
        } else {
          activateAddon();
        }
      } else {
        installAddon();
      }
    }
    async function installAddon() {
      installing.value = true;
      try {
        if (props.isAddon) {
          await addonsStore.installAddonAction(props.addon);
        } else {
          await addonsStore.installPluginAction(props.addon);
        }
      } catch (_e) {
      } finally {
        installing.value = false;
      }
    }
    async function activateAddon() {
      activating.value = true;
      try {
        await addonsStore.activateAddonAction(props.addon);
      } catch (_e) {
      } finally {
        activating.value = false;
      }
    }
    async function deactivateAddon() {
      deactivating.value = true;
      try {
        await addonsStore.deactivateAddonAction(props.addon);
      } catch (_e) {
      } finally {
        deactivating.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: `monsterinsights-addon-${__props.addon.slug}`,
        class: "monsterinsights-addon"
      }, [
        createBaseVNode("div", _hoisted_2$1, [
          __props.addon.icon ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
            createBaseVNode("img", {
              class: "monsterinsights-addon-thumb",
              src: __props.addon.icon,
              alt: __props.addon.title
            }, null, 8, _hoisted_4$1)
          ])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("h3", {
              class: "monsterinsights-addon-title",
              textContent: toDisplayString(addonTitle.value)
            }, null, 8, _hoisted_6$1),
            __props.addon.excerpt ? (openBlock(), createElementBlock("p", {
              key: 0,
              class: "monsterinsights-addon-excerpt",
              textContent: toDisplayString(__props.addon.excerpt)
            }, null, 8, _hoisted_7$1)) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", {
          class: normalizeClass(actionsClass.value)
        }, [
          createBaseVNode("div", _hoisted_8$1, [
            __props.addon.type === "unlicensed" ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "monsterinsights-addon-status monsterinsights-green-text",
              innerHTML: unref(text_upgrade_required)
            }, null, 8, _hoisted_9$1)) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: "monsterinsights-addon-status",
              innerHTML: statusText.value
            }, null, 8, _hoisted_10)),
            createBaseVNode("div", _hoisted_11, [
              currentRouteName.value === "addons" ? (openBlock(), createElementBlock("div", _hoisted_12, [
                isLicenseExpired.value || isNetworkLicenseExpired.value ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", _hoisted_14, [
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_expired))
                    }, null, 8, _hoisted_15)
                  ])) : createCommentVNode("", true)
                ])) : (openBlock(), createElementBlock("div", _hoisted_16, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "monsterinsights-button",
                    onClick: withModifiers(clickAction, ["prevent"])
                  }, [
                    createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_17)
                  ])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    href: upgradeUrl.value,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_18))
                ]))
              ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
                __props.addon.redirect && !__props.addon.installed ? (openBlock(), createElementBlock("div", _hoisted_20, [
                  createBaseVNode("a", {
                    href: __props.addon.redirect,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_21)
                ])) : (openBlock(), createElementBlock("div", _hoisted_22, [
                  __props.addon.type === "licensed" ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: "monsterinsights-button",
                    onClick: withModifiers(clickAction, ["prevent"])
                  }, [
                    createBaseVNode("span", { innerHTML: textButtonAction.value }, null, 8, _hoisted_23)
                  ])) : (openBlock(), createElementBlock("a", {
                    key: 1,
                    href: upgradeUrl.value,
                    target: "_blank",
                    class: "monsterinsights-button",
                    textContent: toDisplayString(textButtonAction.value)
                  }, null, 8, _hoisted_24))
                ]))
              ]))
            ])
          ])
        ], 2)
      ], 8, _hoisted_1$1);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-container" };
const _hoisted_2 = { class: "monsterinsights-about-page-right-image" };
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["innerHTML"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "monsterinsights-addons-list" };
const _sfc_main = {
  __name: "monsterinsights-AboutTabAboutUs",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_about_title = __(
      "Hello and welcome to MonsterInsights, the best Google Analytics plugin for WordPress. MonsterInsights shows you exactly which content gets the most visits, so you can analyze and optimize it for higher conversions.",
      "google-analytics-for-wordpress"
    );
    const text_about_p1 = __(
      "Over the years, we found that in order to get the most out of Google Analytics, you needed a full time developer who could implement custom tracking, so that Google Analytics would integrate with things like WooCommerce, and track things which Google doesn't by default, like outbound links.",
      "google-analytics-for-wordpress"
    );
    const text_about_p2 = __(
      'Our goal is to take the pain out of analytics, making it simple and easy, by eliminating the need to have to worry about code, putting the best reports directly into the area you already go to (your WordPress dashboard), and adding the most advanced insights and features without complicating our plugin with tons of settings. Quite simply, it should "just work".',
      "google-analytics-for-wordpress"
    );
    const text_about_p3 = __(
      "MonsterInsights is brought to you by the same team that's behind the largest WordPress resource site, WPBeginner, the most popular lead-generation software, OptinMonster, and the best WordPress forms plugin, WPForms.",
      "google-analytics-for-wordpress"
    );
    const text_about_p4 = __(
      "Yup, we know a thing or two about building awesome products that customers love.",
      "google-analytics-for-wordpress"
    );
    const text_team_members = __("The MonsterInsights Team", "google-analytics-for-wordpress");
    const addonsIncluded = [
      "userfeedback-lite",
      "wpconsent",
      "wpforms-lite",
      "aioseo",
      "optinmonster",
      "rafflepress",
      "coming-soon",
      "wp-mail-smtp",
      "easy_digital_downloads",
      "smash-balloon-instagram",
      "smash-balloon-facebook",
      "smash-balloon-youtube",
      "smash-balloon-twitter",
      "trustpulse",
      "searchwp",
      "affiliate-wp",
      "wpsimplepay",
      "sugarcalendar",
      "charitable",
      "wpcode",
      "duplicator",
      "pushengage",
      "uncanny-automator"
    ];
    const addonsStore = useAddonsStore();
    const addonsList = computed(() => {
      const result = [];
      for (const slug of addonsIncluded) {
        const source = addonsStore.addons?.[slug];
        if (source) {
          result.push({ ...source, type: "licensed" });
        }
      }
      return result;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AboutBlock, null, {
          default: withCtx(() => [
            createBaseVNode("figure", _hoisted_2, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-bg-img monsterinsights-about-team" }, null, -1)),
              createBaseVNode("figcaption", { innerHTML: unref(text_team_members) }, null, 8, _hoisted_3)
            ]),
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_about_title))
            }, null, 8, _hoisted_4),
            createBaseVNode("p", { innerHTML: unref(text_about_p1) }, null, 8, _hoisted_5),
            createBaseVNode("p", { innerHTML: unref(text_about_p2) }, null, 8, _hoisted_6),
            createBaseVNode("p", { innerHTML: unref(text_about_p3) }, null, 8, _hoisted_7),
            createBaseVNode("p", { innerHTML: unref(text_about_p4) }, null, 8, _hoisted_8)
          ]),
          _: 1
        }),
        createBaseVNode("div", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(addonsList.value, (addon, index) => {
            return openBlock(), createBlock(_sfc_main$1, {
              key: index,
              addon,
              "is-addon": false
            }, null, 8, ["addon"]);
          }), 128))
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
