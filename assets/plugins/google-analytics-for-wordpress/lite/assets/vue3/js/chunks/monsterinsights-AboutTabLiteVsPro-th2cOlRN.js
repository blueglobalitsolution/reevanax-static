import { n as getUpgradeUrl } from "./ajax-B_XS1gT5.js";
import { A as AboutBlock } from "./AboutBlock-BfOKyBy8.js";
import { o as openBlock, c as createElementBlock, b as createVNode, D as withCtx, a as createBaseVNode, t as toDisplayString, u as unref, F as Fragment, f as renderList, i as normalizeClass, s as createCommentVNode } from "./toastStore-CRCNwITM.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _hoisted_1 = { class: "monsterinsights-container" };
const _hoisted_2 = { class: "monsterinsights-lite-vs-pro-header" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "monsterinsights-features-table" };
const _hoisted_6 = { class: "monsterinsights-features-table-head" };
const _hoisted_7 = { class: "monsterinsights-features-table-header-cell" };
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "monsterinsights-features-table-header-cell" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = { class: "monsterinsights-features-table-header-cell" };
const _hoisted_12 = ["textContent"];
const _hoisted_13 = { class: "monsterinsights-features-table-body" };
const _hoisted_14 = { class: "monsterinsights-features-table-body-cell" };
const _hoisted_15 = ["textContent"];
const _hoisted_16 = { class: "monsterinsights-features-table-body-cell" };
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["textContent"];
const _hoisted_19 = { class: "monsterinsights-features-table-body-cell" };
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = { class: "monsterinsights-lite-vs-pro-footer" };
const _hoisted_23 = ["href", "textContent"];
const _hoisted_24 = ["innerHTML"];
const _sfc_main = {
  __name: "monsterinsights-AboutTabLiteVsPro",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const text_lite_vs_pro = __("Lite vs Pro", "google-analytics-for-wordpress");
    const text_subtitle = __(
      "Get the most out of MonsterInsights by upgrading to Pro and unlocking all of the powerful features.",
      "google-analytics-for-wordpress"
    );
    const text_feature = __("Feature", "google-analytics-for-wordpress");
    const text_lite = __("Lite", "google-analytics-for-wordpress");
    const text_pro = __("Pro", "google-analytics-for-wordpress");
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
    const upgradeUrl = getUpgradeUrl("about-page", "lite-vs-pro");
    const features = [
      {
        title: __("Google Analytics Setup", "google-analytics-for-wordpress"),
        lite_text: __("Included", "google-analytics-for-wordpress"),
        pro_text: __("Included", "google-analytics-for-wordpress"),
        lite: true,
        pro: true
      },
      {
        title: __("Custom Google Analytics Link Tracking", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Standard Tracking", "google-analytics-for-wordpress"),
        pro_text: __("Advanced Tracking", "google-analytics-for-wordpress"),
        lite_subtitle: __(
          "Automatic tracking of outbound/external, file download, affiliate, email, and telephone links. Simple Custom Link Attribution markup for custom link tracking.",
          "google-analytics-for-wordpress"
        ),
        pro_subtitle: __(
          "Scroll tracking as well as tracking on Google Accelerated Mobile Pages (AMP).",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("No-Code-Needed Tracking Features", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Basic Tracking Options", "google-analytics-for-wordpress"),
        lite_subtitle: __(
          "Cross-domain tracking, anonymization of IP addresses, automatic exclusion of administrators from tracking.",
          "google-analytics-for-wordpress"
        ),
        pro_text: __("Advanced Tracking Options", "google-analytics-for-wordpress"),
        pro_subtitle: __("", "google-analytics-for-wordpress")
      },
      {
        title: __("eCommerce Tracking", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __("One-click eCommerce Tracking", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Automatically works with WooCommerce, Easy Digital Downloads, MemberPress, WPCharitable, MemberMouse, Restrict Content Pro, GiveWP, LifterLMS, C stores with no code or settings required.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("EU Compliance & PII Protection", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __("GDPR Compliance", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Automatically removes PII (Personally Identifiable Information) and helps ensure GDPR compliance.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Forms Tracking", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __("One-click Form Events Tracking", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Supports WPForms, Ninja Forms, Contact Form 7, Gravity Forms, and all standard HTML forms.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("WordPress Admin Area Reports", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Standard Reports", "google-analytics-for-wordpress"),
        lite_subtitle: __("Overview reports for the last 30 days.", "google-analytics-for-wordpress"),
        pro_text: __("Advanced Reports", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Traffic, Landing Pages, Geography, Devices, Publisher, eCommerce, Search Console, Custom Dimensions, Forms, and Real-Time reports with custom date ranges and comparisons",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Popular Posts", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Basic Options", "google-analytics-for-wordpress"),
        lite_subtitle: __(
          "Order by comments or shares, 3 simple theme choices.",
          "google-analytics-for-wordpress"
        ),
        pro_text: __(
          "Dynamic Popular Posts & Popular Products",
          "google-analytics-for-wordpress"
        ),
        pro_subtitle: __(
          "Based on Google Analytics traffic data, 20+ advanced themes, and WooCommerce integration.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Dashboard Widget", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Basic Widget", "google-analytics-for-wordpress"),
        lite_subtitle: __("Overview Report Synopsis.", "google-analytics-for-wordpress"),
        pro_text: __("Advanced Dashboard Widget", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Complete Overview report, Publisher reports, and 6+ eCommerce reports.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Headline Analyzer", "google-analytics-for-wordpress"),
        lite_text: __("Included", "google-analytics-for-wordpress"),
        pro_text: __("Included", "google-analytics-for-wordpress"),
        lite: true,
        pro: true
      },
      {
        title: __("Email Summaries", "google-analytics-for-wordpress"),
        lite_text: __("Included", "google-analytics-for-wordpress"),
        lite_subtitle: __("Monthly Email Summaries", "google-analytics-for-wordpress"),
        pro_text: __("Included", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Receive weekly traffic reports and key insights directly in your inbox.",
          "google-analytics-for-wordpress"
        ),
        lite: "partial",
        pro: true
      },
      {
        title: __("Publisher Reports", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __(
          "Advanced Publisher Reports & Tracking",
          "google-analytics-for-wordpress"
        ),
        pro_subtitle: __(
          "View Top Landing/Exit Pages, Top Links, Demographics & Interests, and more.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Custom Dimensions", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __(
          "Complete Custom Dimensions Tracking",
          "google-analytics-for-wordpress"
        ),
        pro_subtitle: __(
          "Track by Author, Post Type, Category, Tag, SEO Score, Focus Keyword, Logged-in User, User ID, and Published Time.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Video / Media Tracking", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __("Automatic Media Tracking", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Track engagement and key metrics for all videos that are hosted on YouTube, Vimeo, or uploaded as HTML5.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("PPC Tracking", "google-analytics-for-wordpress"),
        lite: false,
        pro: true,
        lite_text: __("Not Available", "google-analytics-for-wordpress"),
        pro_text: __("Zero Code Pixel Tracking", "google-analytics-for-wordpress"),
        pro_subtitle: __(
          "Easily track campaign performance for Meta, Google, Microsoft, Snapchat, LinkedIn, TikTok, and Pinterest campaigns.",
          "google-analytics-for-wordpress"
        )
      },
      {
        title: __("Support", "google-analytics-for-wordpress"),
        lite: "partial",
        pro: true,
        lite_text: __("Limited Support", "google-analytics-for-wordpress"),
        pro_text: __("Priority Support", "google-analytics-for-wordpress")
      }
    ];
    function checkClass(enabled) {
      if (enabled === true) return "monsterinsights-features-full";
      if (enabled === "partial") return "monsterinsights-features-partial";
      return "monsterinsights-features-none";
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(AboutBlock, { class: "monsterinsights-lite-vs-pro-table" }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("h1", {
                textContent: toDisplayString(unref(text_lite_vs_pro))
              }, null, 8, _hoisted_3),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_subtitle))
              }, null, 8, _hoisted_4)
            ]),
            createBaseVNode("div", _hoisted_5, [
              createBaseVNode("div", _hoisted_6, [
                createBaseVNode("div", _hoisted_7, [
                  createBaseVNode("p", {
                    textContent: toDisplayString(unref(text_feature))
                  }, null, 8, _hoisted_8)
                ]),
                createBaseVNode("div", _hoisted_9, [
                  createBaseVNode("p", {
                    textContent: toDisplayString(unref(text_lite))
                  }, null, 8, _hoisted_10)
                ]),
                createBaseVNode("div", _hoisted_11, [
                  createBaseVNode("p", {
                    textContent: toDisplayString(unref(text_pro))
                  }, null, 8, _hoisted_12)
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                (openBlock(), createElementBlock(Fragment, null, renderList(features, (feature, index) => {
                  return createBaseVNode("div", {
                    key: index,
                    class: "monsterinsights-features-table-body-row"
                  }, [
                    createBaseVNode("div", _hoisted_14, [
                      createBaseVNode("p", {
                        textContent: toDisplayString(feature.title)
                      }, null, 8, _hoisted_15)
                    ]),
                    createBaseVNode("div", _hoisted_16, [
                      createBaseVNode("p", {
                        class: normalizeClass(checkClass(feature.lite))
                      }, [
                        feature.lite_text ? (openBlock(), createElementBlock("strong", {
                          key: 0,
                          textContent: toDisplayString(feature.lite_text)
                        }, null, 8, _hoisted_17)) : createCommentVNode("", true),
                        feature.lite_subtitle ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          textContent: toDisplayString(feature.lite_subtitle)
                        }, null, 8, _hoisted_18)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    createBaseVNode("div", _hoisted_19, [
                      createBaseVNode("p", {
                        class: normalizeClass(checkClass(feature.pro))
                      }, [
                        feature.pro_text ? (openBlock(), createElementBlock("strong", {
                          key: 0,
                          textContent: toDisplayString(feature.pro_text)
                        }, null, 8, _hoisted_20)) : createCommentVNode("", true),
                        feature.pro_subtitle ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          textContent: toDisplayString(feature.pro_subtitle)
                        }, null, 8, _hoisted_21)) : createCommentVNode("", true)
                      ], 2)
                    ])
                  ]);
                }), 64))
              ])
            ]),
            createBaseVNode("div", _hoisted_22, [
              createBaseVNode("h3", null, [
                createBaseVNode("a", {
                  target: "_blank",
                  href: unref(upgradeUrl),
                  textContent: toDisplayString(unref(text_get_upgrade))
                }, null, 8, _hoisted_23)
              ]),
              createBaseVNode("p", { innerHTML: unref(text_upgrade_subtitle) }, null, 8, _hoisted_24)
            ])
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
