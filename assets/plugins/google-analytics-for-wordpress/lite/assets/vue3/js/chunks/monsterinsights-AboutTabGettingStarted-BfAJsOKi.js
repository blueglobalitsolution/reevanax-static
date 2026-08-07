import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { n as getUpgradeUrl, o as getUrl, p as isNetworkAdmin } from "./ajax-B_XS1gT5.js";
import { A as AboutBlock } from "./AboutBlock-BfOKyBy8.js";
import { _ as _sfc_main$1 } from "./LaunchWizardButton-D24aVnkm.js";
import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, t as toDisplayString, u as unref, E as createBlock, F as Fragment, f as renderList, s as createCommentVNode, i as normalizeClass, m as computed } from "./toastStore-CRCNwITM.js";
import "./useNotices-BpzNuZJ7.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./addons-CSVIjAyY.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1 = { class: "monsterinsights-container" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "monsterinsights-two-column" };
const _hoisted_10 = { class: "monsterinsights-list-check" };
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { class: "monsterinsights-list-check" };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = { class: "monsterinsights-lite-vs-pro-footer monsterinsights-small" };
const _hoisted_15 = ["href", "textContent"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = {
  key: 0,
  class: "monsterinsights-separator"
};
const _hoisted_18 = { class: "monsterinsights-about-docs-image" };
const _hoisted_19 = { class: "monsterinsights-about-docs-text" };
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = ["innerHTML"];
const _hoisted_22 = ["href", "textContent"];
const _sfc_main = {
  __name: "monsterinsights-AboutTabGettingStarted",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const productName = "MonsterInsights";
    const text_getting_started_title = __(
      "Getting Started with MonsterInsights",
      "google-analytics-for-wordpress"
    );
    const text_getting_started_p1 = __(
      "MonsterInsights is the easiest analytics solution on the market to get started with, as we walk you through exactly what you need to do, in plain english, using our 3 minute setup wizard.",
      "google-analytics-for-wordpress"
    );
    const text_getting_started_p2 = __(
      "To begin with, we’ll get your site authorized with Google Analytics, so we can start tracking and generating reports for you right away.",
      "google-analytics-for-wordpress"
    );
    const text_getting_started_p3 = __(
      "In no time at all, and after just a few clicks, you'll have setup the most powerful Google Analytics tracking available for WordPress. It's easy to double your traffic and sales when you know exactly how people find and use your website. Let's get started!.",
      "google-analytics-for-wordpress"
    );
    const text_getting_started_link1 = __("Launch the wizard!", "google-analytics-for-wordpress");
    const text_get_pro = __(
      "Get MonsterInsights Pro and Unlock all the Powerful Features",
      "google-analytics-for-wordpress"
    );
    const text_get_pro_text = sprintf(
      __(
        "Thanks for being a loyal MonsterInsights Lite user. %1$sUpgrade to MonsterInsights Pro%2$s to unlock all the awesome features and experience why MonsterInsights is consistently rated the best Google Analytics solution for WordPress.",
        "google-analytics-for-wordpress"
      ),
      "<strong>",
      "</strong>"
    );
    const check_list = [
      __(
        "Google Analytics Tracking across devices and campaigns with just a few clicks.",
        "google-analytics-for-wordpress"
      ),
      __(
        "See your website analytics reports inside the WordPress dashboard",
        "google-analytics-for-wordpress"
      ),
      __("Get real-time stats right inside WordPress", "google-analytics-for-wordpress"),
      __(
        "1-click Google Analytics Enhanced eCommerce tracking",
        "google-analytics-for-wordpress"
      ),
      __("Get detailed stats for each post and page.", "google-analytics-for-wordpress")
    ];
    const check_list_2 = [
      __(
        "Automatically track clicks on your affiliate links and ads.",
        "google-analytics-for-wordpress"
      ),
      __(
        "Make Google Analytics GDPR compliant automatically",
        "google-analytics-for-wordpress"
      ),
      __(
        "Setup tracking for authors, categories, tags, custom post types, users and more",
        "google-analytics-for-wordpress"
      ),
      __("More advanced features", "google-analytics-for-wordpress")
    ];
    const text_get_upgrade = __(
      "Get MonsterInsights Pro Today and Unlock all the Powerful Features",
      "google-analytics-for-wordpress"
    );
    const text_upgrade_subtitle = sprintf(
      __(
        "Bonus: MonsterInsights Lite users get %1$s50%% off regular price%2$s, automatically applied at checkout.",
        "google-analytics-for-wordpress"
      ),
      '<span class="monsterinsights-green-text">',
      "</span>"
    );
    const text_documentation = __("Read Documentation", "google-analytics-for-wordpress");
    const text_onboarding_note = sprintf(
      __(
        "Note: You will be transfered to %1$s.com to complete the setup wizard.",
        "google-analytics-for-wordpress"
      ),
      productName
    );
    const upgradeUrl = getUpgradeUrl("about-page", "lite-vs-pro");
    const docs_rows = [
      {
        image: "monsterinsights-bg-img monsterinsights-about-docs-1",
        title: __("How to Connect to Google Analytics", "google-analytics-for-wordpress"),
        text: __(
          "After you install MonsterInsights, you’ll need to connect your WordPress site with your Google Analytics account. MonsterInsights makes the process easy, with no coding required.",
          "google-analytics-for-wordpress"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.monsterinsights.com/docs/connect-google-analytics/"
        )
      },
      {
        image: "monsterinsights-bg-img monsterinsights-about-docs-2",
        title: __(
          "Guide and Checklist for Advanced Insights",
          "google-analytics-for-wordpress"
        ),
        text: __(
          "Our goal is to make it as easy as possible for you to measure and track your stats so you can grow your business. This easy-to-follow guide and checklist will get you set up with MonsterInsights’ advanced tracking.",
          "google-analytics-for-wordpress"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.monsterinsights.com/docs/getting-started-guide-checklist/"
        )
      },
      {
        image: "monsterinsights-bg-img monsterinsights-about-docs-3",
        title: __("GDPR Guide", "google-analytics-for-wordpress"),
        text: __(
          "Compliance with European data laws including GDPR can be confusing and time-consuming. In order to help MonsterInsights users comply with these laws, we’ve created an addon that automates a lot of the necessary configuration changes for you. ",
          "google-analytics-for-wordpress"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.monsterinsights.com/docs/getting-started-with-the-eu-compliance-addon/"
        )
      },
      {
        image: "monsterinsights-bg-img monsterinsights-about-docs-4",
        title: __(
          "How to Install and Activate MonsterInsights Addons",
          "google-analytics-for-wordpress"
        ),
        text: __(
          "The process for installing and activating addons is quick and easy after you install the MonsterInsights plugin. In this guide we’ll walk you through the process, step by step.",
          "google-analytics-for-wordpress"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.monsterinsights.com/docs/how-to-install-monsterinsights-addon/"
        )
      },
      {
        image: "monsterinsights-bg-img monsterinsights-about-docs-5",
        title: __("Enabling eCommerce Tracking and Reports", "google-analytics-for-wordpress"),
        text: __(
          "Want to track your eCommerce sales data for your WooCommerce, MemberPress, or Easy Digital Downloads store with MonsterInsights? In this guide, we’ll show you how to enable eCommerce tracking in Google Analytics in just a few clicks.",
          "google-analytics-for-wordpress"
        ),
        link: getUrl(
          "about-page",
          "documentation",
          "https://www.monsterinsights.com/docs/enable-ecommerce-tracking/"
        )
      }
    ];
    const licenseStore = useLicenseStore();
    const showLitePro = computed(() => {
      isNetworkAdmin() ? licenseStore.license_network?.type ?? "" : licenseStore.license?.type ?? "";
      return true;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AboutBlock, null, {
          default: withCtx(() => [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-about-page-right-image" }, [
              createBaseVNode("iframe", {
                width: "560",
                height: "315",
                src: "https://www.youtube.com/embed/4Y8TGGkdcGY?modestbranding=1&showinfo=0&rel=0&fs=1",
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: ""
              })
            ], -1)),
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_getting_started_title))
            }, null, 8, _hoisted_2),
            createBaseVNode("p", { innerHTML: unref(text_getting_started_p1) }, null, 8, _hoisted_3),
            createBaseVNode("p", { innerHTML: unref(text_getting_started_p2) }, null, 8, _hoisted_4),
            createBaseVNode("p", { innerHTML: unref(text_getting_started_p3) }, null, 8, _hoisted_5),
            createBaseVNode("p", null, [
              createVNode(_sfc_main$1, {
                "button-class": "monsterinsights-button",
                "button-text": unref(text_getting_started_link1)
              }, null, 8, ["button-text"])
            ]),
            createBaseVNode("p", {
              class: "monsterinsights-disclaimer-note",
              textContent: toDisplayString(unref(text_onboarding_note))
            }, null, 8, _hoisted_6)
          ]),
          _: 1
        }),
        showLitePro.value ? (openBlock(), createBlock(AboutBlock, { key: 0 }, {
          default: withCtx(() => [
            createBaseVNode("h3", {
              textContent: toDisplayString(unref(text_get_pro))
            }, null, 8, _hoisted_7),
            createBaseVNode("p", { innerHTML: unref(text_get_pro_text) }, null, 8, _hoisted_8),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("div", _hoisted_10, [
                createBaseVNode("ul", null, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(check_list, (item, index) => {
                    return createBaseVNode("li", {
                      key: index,
                      innerHTML: item
                    }, null, 8, _hoisted_11);
                  }), 64))
                ])
              ]),
              createBaseVNode("div", _hoisted_12, [
                createBaseVNode("ul", null, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(check_list_2, (item, index) => {
                    return createBaseVNode("li", {
                      key: index,
                      innerHTML: item
                    }, null, 8, _hoisted_13);
                  }), 64))
                ])
              ])
            ]),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("h3", null, [
                createBaseVNode("a", {
                  target: "_blank",
                  href: unref(upgradeUrl),
                  textContent: toDisplayString(unref(text_get_upgrade))
                }, null, 8, _hoisted_15)
              ]),
              createBaseVNode("p", { innerHTML: unref(text_upgrade_subtitle) }, null, 8, _hoisted_16)
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(AboutBlock, null, {
          default: withCtx(() => [
            (openBlock(), createElementBlock(Fragment, null, renderList(docs_rows, (row, index) => {
              return createBaseVNode("div", {
                key: index,
                class: "monsterinsights-about-docs-row"
              }, [
                index > 0 ? (openBlock(), createElementBlock("div", _hoisted_17)) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_18, [
                  createBaseVNode("div", {
                    class: normalizeClass(row.image)
                  }, null, 2)
                ]),
                createBaseVNode("div", _hoisted_19, [
                  createBaseVNode("h3", {
                    innerHTML: row.title
                  }, null, 8, _hoisted_20),
                  createBaseVNode("p", {
                    innerHTML: row.text
                  }, null, 8, _hoisted_21),
                  createBaseVNode("a", {
                    href: row.link,
                    target: "_blank",
                    class: "monsterinsights-button monsterinsights-button-green",
                    textContent: toDisplayString(unref(text_documentation))
                  }, null, 8, _hoisted_22)
                ])
              ]);
            }), 64))
          ]),
          _: 1
        })
      ]);
    };
  }
};
export {
  _sfc_main as default
};
