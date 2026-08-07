import { u as unref, o as openBlock, E as createBlock, s as createCommentVNode, c as createElementBlock, a as createBaseVNode, t as toDisplayString, F as Fragment, f as renderList, A as createTextVNode, k as getMiGlobal, y as onMounted, r as resolveComponent, b as createVNode, D as withCtx, w as withDirectives, v as vModelText, i as normalizeClass, G as withKeys, B as withModifiers, aF as vModelCheckbox, j as ref, m as computed, aR as addQueryArg } from "./toastStore-CRCNwITM.js";
import { _ as _sfc_main$5 } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$4 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { k as isPro } from "./ajax-B_XS1gT5.js";
import { _ as _sfc_main$3 } from "./SettingsLiteUpsellLarge-lnF3P2B8.js";
import { c as useAddonsStore } from "./addons-CSVIjAyY.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _sfc_main$2 = {
  __name: "ToolsTabFooter",
  setup(__props) {
    const pro = isPro();
    return (_ctx, _cache) => {
      return !unref(pro) ? (openBlock(), createBlock(_sfc_main$3, { key: 0 })) : createCommentVNode("", true);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-tools-info-row" };
const _hoisted_2$1 = { class: "monsterinsights-tools-info-label" };
const _hoisted_3$1 = ["innerHTML"];
const _hoisted_4$1 = { class: "monsterinsights-tools-info-description" };
const _hoisted_5$1 = ["textContent"];
const _hoisted_6$1 = ["textContent"];
const _hoisted_7$1 = { class: "monsterinsights-tools-info-row" };
const _hoisted_8$1 = { class: "monsterinsights-tools-info-label" };
const _hoisted_9$1 = ["innerHTML"];
const _hoisted_10$1 = { class: "monsterinsights-tools-info-description" };
const _hoisted_11$1 = ["textContent"];
const _hoisted_12$1 = ["textContent"];
const _hoisted_13$1 = { class: "monsterinsights-tools-info-row" };
const _hoisted_14$1 = { class: "monsterinsights-tools-info-label" };
const _hoisted_15$1 = ["innerHTML"];
const _hoisted_16$1 = { class: "monsterinsights-tools-info-description" };
const _hoisted_17$1 = ["textContent"];
const _hoisted_18$1 = ["textContent"];
const _hoisted_19$1 = { class: "monsterinsights-tools-info-row" };
const _hoisted_20$1 = { class: "monsterinsights-tools-info-label" };
const _hoisted_21$1 = ["innerHTML"];
const _hoisted_22$1 = { class: "monsterinsights-tools-info-description" };
const _hoisted_23$1 = ["textContent"];
const _hoisted_24$1 = ["textContent"];
const _hoisted_25$1 = { class: "monsterinsights-tools-info-row" };
const _hoisted_26$1 = { class: "monsterinsights-tools-info-label" };
const _hoisted_27$1 = ["innerHTML"];
const _hoisted_28$1 = { class: "monsterinsights-tools-info-description" };
const _hoisted_29$1 = ["textContent"];
const _hoisted_30$1 = ["textContent"];
const _hoisted_31$1 = ["textContent"];
const _hoisted_32$1 = ["href", "textContent"];
const _sfc_main$1 = {
  __name: "UrlBuilderInfoRows",
  props: {
    isEm: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const text_row_1_label = __("Campaign Source", "google-analytics-for-wordpress");
    const text_row_1_description = __("Required. Use utm_source to identify a search engine, newsletter name, or other source.", "google-analytics-for-wordpress");
    const text_row_2_label = __("Campaign Medium", "google-analytics-for-wordpress");
    const text_row_2_description = __("Use utm_medium to identify a medium such as email or cost-per-click.", "google-analytics-for-wordpress");
    const text_row_3_label = __("Campaign Name", "google-analytics-for-wordpress");
    const text_row_3_description = __("Used for keyword analysis. Use utm_campaign to identify a specific product promotion or strategic campaign.", "google-analytics-for-wordpress");
    const text_row_4_label = __("Campaign Term", "google-analytics-for-wordpress");
    const text_row_4_description = __("Used for paid search. Use utm_term to note the keywords for this ad.", "google-analytics-for-wordpress");
    const text_row_5_label = __("Campaign Content", "google-analytics-for-wordpress");
    const text_row_5_description = __("Used for A/B testing and content-targeted ads. Use utm_content to differentiate ads or links that point to the same URL.", "google-analytics-for-wordpress");
    const text_example = __("Example: %s", "google-analytics-for-wordpress");
    const text_examples = __("Examples: %s", "google-analytics-for-wordpress");
    const text_additional_title = __("Additional Information", "google-analytics-for-wordpress");
    const additional_information = props.isEm ? [
      {
        text: __("GA4 UTM Parameters: How to Find Them + Best URL Builder", "google-analytics-for-wordpress"),
        url: "https://exactmetrics.com/ga4-utm-parameters-how-to-find-them-best-url-builder/"
      },
      {
        text: __("Google Analytics Help Guide: Collect Campaign Data with Custom URLs", "google-analytics-for-wordpress"),
        url: "https://support.google.com/analytics/answer/10917952?hl=en&sjid=16623977448499936504-NC#parameters&zippy=%2Cin-this-article"
      }
    ] : [
      {
        text: __("How to Set Up Marketing Campaign Tracking in Google Analytics", "google-analytics-for-wordpress"),
        url: "https://www.monsterinsights.com/marketing-campaign-tracking-in-google-analytics-tutorial/"
      },
      {
        text: __("A Beginners Guide to UTM Parameters (And How to Use Them)", "google-analytics-for-wordpress"),
        url: "https://www.monsterinsights.com/a-beginners-guide-to-utm-parameters/"
      },
      {
        text: __("Google Analytics Help Guide: Collect Campaign Data with Custom URLs", "google-analytics-for-wordpress"),
        url: "https://support.google.com/analytics/answer/10917952?hl=en&sjid=16623977448499936504-NC#parameters&zippy=%2Cin-this-article"
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("div", _hoisted_1$1, [
          createBaseVNode("div", _hoisted_2$1, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_row_1_label)
            }, null, 8, _hoisted_3$1),
            _cache[0] || (_cache[0] = createBaseVNode("p", null, "utm_source", -1))
          ]),
          createBaseVNode("div", _hoisted_4$1, [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_row_1_description))
            }, null, 8, _hoisted_5$1),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(sprintf)(unref(text_example), "google"))
            }, null, 8, _hoisted_6$1)
          ])
        ]),
        _cache[8] || (_cache[8] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("div", _hoisted_7$1, [
          createBaseVNode("div", _hoisted_8$1, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_row_2_label)
            }, null, 8, _hoisted_9$1),
            _cache[1] || (_cache[1] = createBaseVNode("p", null, "utm_medium", -1))
          ]),
          createBaseVNode("div", _hoisted_10$1, [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_row_2_description))
            }, null, 8, _hoisted_11$1),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(sprintf)(unref(text_example), "cpc"))
            }, null, 8, _hoisted_12$1)
          ])
        ]),
        _cache[9] || (_cache[9] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("div", _hoisted_13$1, [
          createBaseVNode("div", _hoisted_14$1, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_row_3_label)
            }, null, 8, _hoisted_15$1),
            _cache[2] || (_cache[2] = createBaseVNode("p", null, "utm_name", -1))
          ]),
          createBaseVNode("div", _hoisted_16$1, [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_row_3_description))
            }, null, 8, _hoisted_17$1),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(sprintf)(unref(text_example), "utm_campaign=spring_sale"))
            }, null, 8, _hoisted_18$1)
          ])
        ]),
        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("div", _hoisted_19$1, [
          createBaseVNode("div", _hoisted_20$1, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_row_4_label)
            }, null, 8, _hoisted_21$1),
            _cache[3] || (_cache[3] = createBaseVNode("p", null, "utm_term", -1))
          ]),
          createBaseVNode("div", _hoisted_22$1, [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_row_4_description))
            }, null, 8, _hoisted_23$1),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(sprintf)(unref(text_example), "running+shoes"))
            }, null, 8, _hoisted_24$1)
          ])
        ]),
        _cache[11] || (_cache[11] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("div", _hoisted_25$1, [
          createBaseVNode("div", _hoisted_26$1, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_row_5_label)
            }, null, 8, _hoisted_27$1),
            _cache[4] || (_cache[4] = createBaseVNode("p", null, "utm_content", -1))
          ]),
          createBaseVNode("div", _hoisted_28$1, [
            createBaseVNode("p", {
              textContent: toDisplayString(unref(text_row_5_description))
            }, null, 8, _hoisted_29$1),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(sprintf)(unref(text_examples), "logolink or textlink"))
            }, null, 8, _hoisted_30$1)
          ])
        ]),
        _cache[12] || (_cache[12] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_additional_title))
          }, null, 8, _hoisted_31$1)
        ]),
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(additional_information), (link, index) => {
          return openBlock(), createElementBlock("p", {
            key: index,
            class: "monsterinsights-toolsadditional-info"
          }, [
            _cache[5] || (_cache[5] = createBaseVNode("i", { class: "monstericon-files" }, null, -1)),
            _cache[6] || (_cache[6] = createTextVNode()),
            createBaseVNode("a", {
              href: link.url,
              target: "_blank",
              textContent: toDisplayString(link.text)
            }, null, 8, _hoisted_32$1)
          ]);
        }), 128))
      ]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-tools-url-builder" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = { class: "monsterinsigits-info-url-builder" };
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "monsterinsights-input-text" };
const _hoisted_7 = { for: "monsterinsights-tools-website-url" };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = ["innerHTML"];
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = { class: "monsterinsights-input-text" };
const _hoisted_12 = { for: "monsterinsights-tools-campaign-source" };
const _hoisted_13 = ["innerHTML"];
const _hoisted_14 = ["innerHTML"];
const _hoisted_15 = ["innerHTML"];
const _hoisted_16 = { class: "monsterinsights-input-text" };
const _hoisted_17 = { for: "monsterinsights-tools-campaign-medium" };
const _hoisted_18 = ["innerHTML"];
const _hoisted_19 = ["innerHTML"];
const _hoisted_20 = ["innerHTML"];
const _hoisted_21 = { class: "monsterinsights-input-text" };
const _hoisted_22 = { for: "monsterinsights-tools-campaign-name" };
const _hoisted_23 = ["innerHTML"];
const _hoisted_24 = ["innerHTML"];
const _hoisted_25 = ["innerHTML"];
const _hoisted_26 = { class: "monsterinsights-input-text" };
const _hoisted_27 = { for: "monsterinsights-tools-campaign-term" };
const _hoisted_28 = ["innerHTML"];
const _hoisted_29 = ["innerHTML"];
const _hoisted_30 = ["innerHTML"];
const _hoisted_31 = { class: "monsterinsights-input-text" };
const _hoisted_32 = { for: "monsterinsights-tools-campaign-content" };
const _hoisted_33 = ["innerHTML"];
const _hoisted_34 = ["innerHTML"];
const _hoisted_35 = ["innerHTML"];
const _hoisted_36 = { class: "monsterinsights-input-text" };
const _hoisted_37 = { for: "monsterinsights-tools-use-fragment" };
const _hoisted_38 = ["innerHTML"];
const _hoisted_39 = ["innerHTML"];
const _hoisted_40 = { class: "monsterinsights-settings-input-checkbox" };
const _hoisted_41 = ["innerHTML"];
const _hoisted_42 = { class: "monsterinsights-input-text" };
const _hoisted_43 = { for: "monsterinsights-tools-url-to-use" };
const _hoisted_44 = ["innerHTML"];
const _hoisted_45 = ["innerHTML"];
const _hoisted_46 = ["textContent"];
const _hoisted_47 = ["textContent"];
const _hoisted_48 = {
  key: 0,
  class: "monsterinsights-prettylinks-flow-ad"
};
const _hoisted_49 = ["textContent"];
const _hoisted_50 = ["textContent"];
const _hoisted_51 = ["textContent"];
const local_storage_key = "MonsterInsightsURL";
const _sfc_main = {
  __name: "monsterinsights-ToolsTabUrlBuilder",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const isEM = false;
    const addonsStore = useAddonsStore();
    const text_block_label = __("Custom Campaign Parameters", "google-analytics-for-wordpress");
    const text_url_builder_description = __("The URL builder helps you add parameters to your URLs you use in custom web or email ad campaigns.", "google-analytics-for-wordpress");
    const text_url_builder_tooltip = __("A custom campaign is any ad campaign that does not use the Google Ads auto-tagging feature. When users click one of the custom links, the unique parameters are sent to your Google Analytics account so you can identify the most effective URLs in attracting users to your content.", "google-analytics-for-wordpress");
    const text_website_url_label = sprintf(__("Website URL %s", "google-analytics-for-wordpress"), '<span class="monsterinsights-required">*</span>');
    const text_website_url_description = sprintf(__("The full website URL (e.g. %1$s %2$s%3$s)", "google-analytics-for-wordpress"), "<em>", window.location.origin, "</em>");
    const text_campaign_source_label = sprintf(__("Campaign Source %s", "google-analytics-for-wordpress"), '<span class="monsterinsights-required">*</span>');
    const text_campaign_source_description = sprintf(__("Enter a referrer (e.g. %1$sfacebook, newsletter, google%2$s)", "google-analytics-for-wordpress"), "<em>", "</em>");
    const text_campaign_medium_label = __("Campaign Medium", "google-analytics-for-wordpress");
    const text_campaign_medium_description = sprintf(__("Enter a marketing medium (e.g. %1$scpc, banner, email%2$s)", "google-analytics-for-wordpress"), "<em>", "</em>");
    const text_campaign_name_label = __("Campaign Name", "google-analytics-for-wordpress");
    const text_campaign_name_description = sprintf(__("Enter a name to easily identify (e.g. %1$sspring_sale%2$s)", "google-analytics-for-wordpress"), "<em>", "</em>");
    const text_campaign_term_label = __("Campaign Term", "google-analytics-for-wordpress");
    const text_campaign_term_description = __("Enter the paid keyword", "google-analytics-for-wordpress");
    const text_campaign_content_label = __("Campaign Content", "google-analytics-for-wordpress");
    const text_campaign_content_description = __("Enter something to differentiate ads", "google-analytics-for-wordpress");
    const text_use_fragment_label = __("Use Fragment", "google-analytics-for-wordpress");
    const text_use_fragment_description = sprintf(__("Set the parameters in the fragment portion of the URL %1$s(not recommended)%2$s", "google-analytics-for-wordpress"), "<strong>", "</strong>");
    const text_url_to_use_label = __("URL to use", "google-analytics-for-wordpress");
    const text_url_to_use_description = __("(Updates automatically)", "google-analytics-for-wordpress");
    const text_copy = __("Copy to Clipboard", "google-analytics-for-wordpress");
    const text_copy_to_prettylinks = __("Copy to Pretty Links", "google-analytics-for-wordpress");
    const text_prettylinks_flow_ad_title = __("Make your campaign links prettier!", "google-analytics-for-wordpress");
    const text_prettylinks_flow_ad_description = __("Pretty Links turns those ugly, long campaign links into clean, memorable, speakable and totally shareable links.", "google-analytics-for-wordpress");
    const text_prettylinks_flow_ad_button = __("Download Pretty Links", "google-analytics-for-wordpress");
    const text_block_info_label = __("More Information & Examples", "google-analytics-for-wordpress");
    const text_block_info_description = __("The following table gives a detailed explanation and example of each of the campaign parameters.", "google-analytics-for-wordpress");
    const website_url = ref(window.location.origin);
    const campaign_source = ref("");
    const campaign_medium = ref("");
    const campaign_name = ref("");
    const campaign_term = ref("");
    const campaign_content = ref("");
    const use_fragment = ref(false);
    const new_pretty_link_url = getMiGlobal("new_pretty_link_url", "");
    const url_to_use = computed(() => {
      let url = "";
      if (website_url.value && campaign_source.value) {
        url = website_url.value;
        url = addQueryArg(url, "utm_source", campaign_source.value);
        if (campaign_medium.value) url = addQueryArg(url, "utm_medium", campaign_medium.value);
        if (campaign_name.value) url = addQueryArg(url, "utm_campaign", campaign_name.value);
        if (campaign_term.value) url = addQueryArg(url, "utm_term", campaign_term.value);
        if (campaign_content.value) url = addQueryArg(url, "utm_content", campaign_content.value);
        if (use_fragment.value) url = url.replace("?", "#");
      }
      return encodeURI(url);
    });
    const checkboxClass = computed(() => {
      let cls = "monsterinsights-styled-checkbox";
      if (use_fragment.value) cls += " monsterinsights-styled-checkbox-checked";
      return cls;
    });
    function isAddonActive(addon) {
      const addons = addonsStore.addons || {};
      return !!addons[addon]?.active;
    }
    function isAddonInstalled(addon) {
      const addons = addonsStore.addons || {};
      return !!addons[addon]?.installed;
    }
    function copyToClipboard() {
      const el = document.querySelector("#monsterinsights-tools-url-to-use");
      if (!el) return;
      el.select();
      document.execCommand("copy");
    }
    function copyToPrettyLinks() {
      if (url_to_use.value && new_pretty_link_url) {
        const now = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
        const expireTime = 10 * 60;
        const item = {
          value: url_to_use.value,
          expiry: now + expireTime
        };
        localStorage.setItem(local_storage_key, JSON.stringify(item));
        const redirect_to = addQueryArg(new_pretty_link_url, "monsterinsights_reference", "url_builder");
        if (redirect_to && isAddonActive("pretty-link")) {
          window.location.href = redirect_to;
        }
      }
    }
    function getWithExpiry() {
      const savedData = localStorage.getItem(local_storage_key);
      if (!savedData) return;
      let item;
      try {
        item = JSON.parse(savedData);
      } catch (_e) {
        return;
      }
      const now = Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3);
      if (now > item.expiry) {
        localStorage.removeItem(local_storage_key);
        return;
      }
      const url = item.value;
      let pathArray = url.split("?");
      if (pathArray.length <= 1) {
        pathArray = url.split("#");
        use_fragment.value = true;
      }
      website_url.value = pathArray[0];
      const urlParams = new URLSearchParams(pathArray[1]);
      if (urlParams.has("utm_source")) campaign_source.value = urlParams.get("utm_source");
      if (urlParams.has("utm_medium")) campaign_medium.value = urlParams.get("utm_medium");
      if (urlParams.has("utm_campaign")) campaign_name.value = urlParams.get("utm_campaign");
      if (urlParams.has("utm_term")) campaign_term.value = urlParams.get("utm_term");
      if (urlParams.has("utm_content")) campaign_content.value = urlParams.get("utm_content");
    }
    function stopClick() {
      use_fragment.value = !use_fragment.value;
    }
    onMounted(() => {
      getWithExpiry();
    });
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$5, {
          title: unref(text_block_label),
          icon: ""
        }, {
          default: withCtx(() => [
            isEM ? (openBlock(), createElementBlock("p", _hoisted_2, [
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_url_builder_description))
              }, null, 8, _hoisted_3),
              _cache[9] || (_cache[9] = createTextVNode(" ", -1)),
              createVNode(_sfc_main$4, { content: unref(text_url_builder_tooltip) }, null, 8, ["content"])
            ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createBaseVNode("div", _hoisted_4, [
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_url_builder_description))
                }, null, 8, _hoisted_5),
                _cache[10] || (_cache[10] = createTextVNode(" ", -1)),
                createVNode(_sfc_main$4, { content: unref(text_url_builder_tooltip) }, null, 8, ["content"])
              ]),
              _cache[11] || (_cache[11] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1))
            ], 64)),
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("label", _hoisted_7, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_website_url_label)
                }, null, 8, _hoisted_8),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_website_url_description)
                }, null, 8, _hoisted_9)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-website-url",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => website_url.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, website_url.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_website_url_description)
              }, null, 8, _hoisted_10)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("label", _hoisted_12, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_campaign_source_label)
                }, null, 8, _hoisted_13),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_campaign_source_description)
                }, null, 8, _hoisted_14)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-campaign-source",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => campaign_source.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, campaign_source.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_campaign_source_description)
              }, null, 8, _hoisted_15)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_16, [
              createBaseVNode("label", _hoisted_17, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_campaign_medium_label)
                }, null, 8, _hoisted_18),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_campaign_medium_description)
                }, null, 8, _hoisted_19)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-campaign-medium",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => campaign_medium.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, campaign_medium.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_campaign_medium_description)
              }, null, 8, _hoisted_20)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_21, [
              createBaseVNode("label", _hoisted_22, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_campaign_name_label)
                }, null, 8, _hoisted_23),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_campaign_name_description)
                }, null, 8, _hoisted_24)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-campaign-name",
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => campaign_name.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, campaign_name.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_campaign_name_description)
              }, null, 8, _hoisted_25)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_26, [
              createBaseVNode("label", _hoisted_27, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_campaign_term_label)
                }, null, 8, _hoisted_28),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_campaign_term_description)
                }, null, 8, _hoisted_29)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-campaign-term",
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => campaign_term.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, campaign_term.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_campaign_term_description)
              }, null, 8, _hoisted_30)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_31, [
              createBaseVNode("label", _hoisted_32, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_campaign_content_label)
                }, null, 8, _hoisted_33),
                !isEM ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  innerHTML: unref(text_campaign_content_description)
                }, null, 8, _hoisted_34)) : createCommentVNode("", true)
              ]),
              withDirectives(createBaseVNode("input", {
                id: "monsterinsights-tools-campaign-content",
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => campaign_content.value = $event),
                type: "text"
              }, null, 512), [
                [vModelText, campaign_content.value]
              ]),
              isEM ? (openBlock(), createElementBlock("p", {
                key: 0,
                class: "monsterinsights-input-description",
                innerHTML: unref(text_campaign_content_description)
              }, null, 8, _hoisted_35)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_36, [
              createBaseVNode("label", _hoisted_37, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_use_fragment_label)
                }, null, 8, _hoisted_38),
                createBaseVNode("span", {
                  class: normalizeClass(isEM ? "monsterinsights-tools-description-top" : ""),
                  innerHTML: unref(text_use_fragment_description)
                }, null, 10, _hoisted_39)
              ]),
              createBaseVNode("div", _hoisted_40, [
                createBaseVNode("label", {
                  onClick: withModifiers(stopClick, ["prevent"]),
                  onKeyup: [
                    withKeys(stopClick, ["enter"]),
                    withKeys(stopClick, ["space"])
                  ]
                }, [
                  createBaseVNode("span", {
                    class: normalizeClass(checkboxClass.value),
                    tabindex: "0"
                  }, null, 2),
                  withDirectives(createBaseVNode("input", {
                    id: "monsterinsights-tools-use-fragment",
                    "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => use_fragment.value = $event),
                    type: "checkbox"
                  }, null, 512), [
                    [vModelCheckbox, use_fragment.value]
                  ]),
                  createBaseVNode("span", {
                    class: "monsterinsights-checkbox-label",
                    innerHTML: unref(text_use_fragment_label)
                  }, null, 8, _hoisted_41)
                ], 32)
              ])
            ]),
            !isEM ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              _cache[13] || (_cache[13] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("div", _hoisted_42, [
                createBaseVNode("label", _hoisted_43, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    innerHTML: unref(text_url_to_use_label)
                  }, null, 8, _hoisted_44),
                  createBaseVNode("span", { innerHTML: unref(text_url_to_use_description) }, null, 8, _hoisted_45)
                ]),
                withDirectives(createBaseVNode("textarea", {
                  id: "monsterinsights-tools-url-to-use",
                  "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => url_to_use.value = $event),
                  readonly: ""
                }, null, 512), [
                  [vModelText, url_to_use.value]
                ])
              ]),
              createBaseVNode("div", null, [
                createBaseVNode("button", {
                  class: "monsterinsights-button",
                  onClick: copyToClipboard,
                  textContent: toDisplayString(unref(text_copy))
                }, null, 8, _hoisted_46),
                isAddonActive("pretty-link") ? (openBlock(), createElementBlock("button", {
                  key: 0,
                  class: "monsterinsights-button monsterinsights-button-copy-to-prettylinks",
                  onClick: copyToPrettyLinks,
                  textContent: toDisplayString(unref(text_copy_to_prettylinks))
                }, null, 8, _hoisted_47)) : createCommentVNode("", true)
              ]),
              !isAddonInstalled("pretty-link") || !isAddonActive("pretty-link") ? (openBlock(), createElementBlock("div", _hoisted_48, [
                createBaseVNode("h2", {
                  class: "monsterinsights-prettylinks-flow-ad-title",
                  textContent: toDisplayString(unref(text_prettylinks_flow_ad_title))
                }, null, 8, _hoisted_49),
                createBaseVNode("p", {
                  class: "monsterinsights-prettylinks-flow-ad-description",
                  textContent: toDisplayString(unref(text_prettylinks_flow_ad_description))
                }, null, 8, _hoisted_50),
                createVNode(_component_RouterLink, {
                  class: "monsterinsights-button",
                  to: "/tools/prettylinks-flow",
                  onClick: copyToPrettyLinks,
                  textContent: toDisplayString(unref(text_prettylinks_flow_ad_button))
                }, null, 8, ["textContent"]),
                _cache[12] || (_cache[12] = createBaseVNode("div", { class: "monsterinsights-prettylinks-flow-ad-logo" }, null, -1))
              ])) : createCommentVNode("", true)
            ], 64)) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title", "icon"]),
        (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$2),
          createVNode(_sfc_main$5, { title: unref(text_block_info_label) }, {
            default: withCtx(() => [
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_block_info_description))
              }, null, 8, _hoisted_51),
              createVNode(_sfc_main$1, { "is-em": false })
            ]),
            _: 1
          }, 8, ["title"])
        ], 64)),
        createCommentVNode("", true)
      ]);
    };
  }
};
export {
  _sfc_main as default
};
