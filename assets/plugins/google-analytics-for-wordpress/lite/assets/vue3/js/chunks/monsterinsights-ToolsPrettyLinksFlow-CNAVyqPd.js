import { c as useAddonsStore, d as useDialog } from "./addons-CSVIjAyY.js";
import { r as miAjax } from "./ajax-B_XS1gT5.js";
import { k as getMiGlobal, y as onMounted, z as onBeforeUnmount, o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, i as normalizeClass, m as computed, j as ref, aR as addQueryArg } from "./toastStore-CRCNwITM.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-tools-prettylinks-flow" };
const _hoisted_2 = { class: "monsterinsights-tools-prettylinks-flow-header" };
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = { class: "monsterinsights-tools-prettylinks-flow-content" };
const _hoisted_6 = { class: "monsterinsights-tools-info-row" };
const _hoisted_7 = { class: "monsterinsights-tools-prettylinks-row-image" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "monsterinsights-tools-prettylinks-row-description" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["textContent"];
const _hoisted_12 = {
  key: 0,
  class: "monsterinsights-prettylinks-flow-counter"
};
const _hoisted_13 = ["textContent"];
const _hoisted_14 = { class: "monsterinsights-tools-prettylinks-action monsterinsights-tools-install-prettylinks" };
const _hoisted_15 = ["textContent"];
const _hoisted_16 = ["textContent"];
const _hoisted_17 = ["disabled", "textContent"];
const _hoisted_18 = ["textContent"];
const _hoisted_19 = ["textContent"];
const _hoisted_20 = { class: "monsterinsights-tools-prettylinks-action monsterinsights-tools-create-prettylinks" };
const _hoisted_21 = ["textContent"];
const _hoisted_22 = ["textContent"];
const _hoisted_23 = ["href", "textContent"];
const bodyClass = "monsterinsights-prettylinks-flow-page";
const _sfc_main = {
  __name: "monsterinsights-ToolsPrettyLinksFlow",
  setup(__props) {
    const { __ } = wp.i18n;
    const addonsStore = useAddonsStore();
    const dialog = useDialog();
    const new_pretty_link_url = getMiGlobal("new_pretty_link_url", "");
    const miIllustration = new URL("" + new URL("../../assets/prettylinks-illustration-mi-DQmg-MF9.svg", import.meta.url).href, import.meta.url).href;
    new URL("" + new URL("../../assets/prettylinks-illustration-DiDnqFhJ.svg", import.meta.url).href, import.meta.url).href;
    const illustrationSrc = miIllustration;
    const text_prettylinks_flow_title = __("Make your MonsterInsights campaign links prettier with Pretty Links!", "google-analytics-for-wordpress");
    const text_prettylinks_flow_description = __("Pretty Links turns those ugly, long campaign links into clean, memorable, speakable, totally shareable links.", "google-analytics-for-wordpress");
    const text_prettylinks_flow_process = __("Take your MonsterInsights campaign links from our URL Builder and shorten them with Pretty Links!", "google-analytics-for-wordpress");
    const text_use_prettylinks_user = __("Over 200,000 websites use Pretty Links!", "google-analytics-for-wordpress");
    const text_prettylinks_install_button = __("Install Pretty Links", "google-analytics-for-wordpress");
    const text_prettylinks_activate_button = __("Activate Pretty Links", "google-analytics-for-wordpress");
    const text_prettylinks_activating_button = __("Activating Pretty Links...", "google-analytics-for-wordpress");
    const text_prettylinks_installing_button = __("Installing Pretty Links...", "google-analytics-for-wordpress");
    const text_prettylinks_activated = __("Pretty Links Installed & Activated", "google-analytics-for-wordpress");
    const text_download_prettylinks = __("Download Pretty Links", "google-analytics-for-wordpress");
    const text_install_prettylinks_from_wp = __("Install Pretty Links from the WordPress.org plugin repository.", "google-analytics-for-wordpress");
    const text_create_prettylinks = __("Create New Pretty Link", "google-analytics-for-wordpress");
    const text_create_new_prettylink = __("Create a New Pretty Link", "google-analytics-for-wordpress");
    const text_create_prettylink_process = __("Grab your campaign link and paste it into the Target URL field.", "google-analytics-for-wordpress");
    const text_counter_one = __("1", "google-analytics-for-wordpress");
    const text_counter_two = __("2", "google-analytics-for-wordpress");
    const busy = ref(false);
    const localState = ref("");
    const prettyLinksAddon = computed(() => {
      const addons = addonsStore.addons || {};
      return addons["pretty-link"] || null;
    });
    const prettyLinksActive = computed(() => !!prettyLinksAddon.value?.active);
    const prettyLinksInstalled = computed(() => !!prettyLinksAddon.value?.installed);
    const installButtonText = computed(() => {
      if (localState.value === "installing") return text_prettylinks_installing_button;
      if (localState.value === "activating") return text_prettylinks_activating_button;
      if (prettyLinksInstalled.value) return text_prettylinks_activate_button;
      return text_prettylinks_install_button;
    });
    const installRowClass = computed(() => {
      let cls = "monsterinsights-tools-info-row monsterinsights-prettylinks-flow-install-wizard";
      cls += prettyLinksActive.value ? " prettylinks-status-active" : " prettylinks-not-activated";
      return cls;
    });
    const addNewPrettyLinkPageUrl = computed(() => {
      if (!new_pretty_link_url) return "#";
      return addQueryArg(new_pretty_link_url, "monsterinsights_reference", "url_builder");
    });
    async function installOrActivate() {
      if (busy.value) return;
      busy.value = true;
      const addon = prettyLinksAddon.value;
      try {
        if (!prettyLinksInstalled.value) {
          localState.value = "installing";
          await miAjax("monsterinsights_vue_install_plugin", {
            slug: addon?.slug || "pretty-link"
          });
          addonsStore.setAddonInstalled({
            slug: "pretty-link",
            basename: addon?.basename || "pretty-link/pretty-link.php"
          });
        }
        const refreshed = addonsStore.addons["pretty-link"] || addon;
        const basename = refreshed?.basename || "pretty-link/pretty-link.php";
        localState.value = "activating";
        const activateData = {
          nonce: getMiGlobal("activate_nonce", ""),
          plugin: basename
        };
        if (getMiGlobal("network", false)) activateData.isnetwork = true;
        await miAjax("monsterinsights_activate_addon", activateData);
        addonsStore.setAddonActive("pretty-link");
      } catch (error) {
        dialog.alert({
          variant: "error",
          title: __("Pretty Links could not be installed", "google-analytics-for-wordpress"),
          message: error?.message || __("Please install Pretty Links manually from the WordPress plugin repository.", "google-analytics-for-wordpress"),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
      } finally {
        busy.value = false;
        localState.value = "";
      }
    }
    onMounted(() => {
      document.body.classList.add(bodyClass);
      window.scrollTo(0, 0);
    });
    onBeforeUnmount(() => {
      document.body.classList.remove(bodyClass);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("header", _hoisted_2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-tools-prettylinks-flow-header-logo" }, null, -1)),
          createBaseVNode("h1", {
            class: "monsterinsights-prettylinks-flow-title",
            textContent: toDisplayString(unref(text_prettylinks_flow_title))
          }, null, 8, _hoisted_3),
          createBaseVNode("p", {
            class: "monsterinsights-prettylinks-flow-description",
            textContent: toDisplayString(unref(text_prettylinks_flow_description))
          }, null, 8, _hoisted_4)
        ]),
        createBaseVNode("main", _hoisted_5, [
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("img", {
                src: unref(illustrationSrc),
                alt: ""
              }, null, 8, _hoisted_8)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_use_prettylinks_user))
              }, null, 8, _hoisted_10),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_prettylinks_flow_process))
              }, null, 8, _hoisted_11)
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(installRowClass.value)
          }, [
            prettyLinksActive.value ? (openBlock(), createElementBlock("div", _hoisted_12, [..._cache[1] || (_cache[1] = [
              createBaseVNode("svg", {
                width: "25",
                height: "18",
                viewBox: "0 0 25 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("path", {
                  d: "M8.90625 17.5781L1.07812 9.79688C0.859375 9.57812 0.75 9.29688 0.75 8.95312C0.75 8.60938 0.859375 8.32812 1.07812 8.10938L2.8125 6.42188C3.03125 6.17188 3.29688 6.04688 3.60938 6.04688C3.95312 6.04688 4.25 6.17188 4.5 6.42188L9.75 11.6719L21 0.421875C21.25 0.171875 21.5312 0.046875 21.8438 0.046875C22.1875 0.046875 22.4688 0.171875 22.6875 0.421875L24.4219 2.10938C24.6406 2.32813 24.75 2.60938 24.75 2.95312C24.75 3.29688 24.6406 3.57812 24.4219 3.79688L10.5938 17.5781C10.375 17.8281 10.0938 17.9531 9.75 17.9531C9.40625 17.9531 9.125 17.8281 8.90625 17.5781Z",
                  fill: "white"
                })
              ], -1)
            ])])) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: "monsterinsights-prettylinks-flow-counter",
              textContent: toDisplayString(unref(text_counter_one))
            }, null, 8, _hoisted_13)),
            createBaseVNode("div", _hoisted_14, [
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_download_prettylinks))
              }, null, 8, _hoisted_15),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_install_prettylinks_from_wp))
              }, null, 8, _hoisted_16),
              !prettyLinksActive.value ? (openBlock(), createElementBlock("button", {
                key: 0,
                class: "monsterinsights-button",
                disabled: busy.value,
                onClick: installOrActivate,
                textContent: toDisplayString(installButtonText.value)
              }, null, 8, _hoisted_17)) : (openBlock(), createElementBlock("button", {
                key: 1,
                class: "monsterinsights-button",
                textContent: toDisplayString(unref(text_prettylinks_activated))
              }, null, 8, _hoisted_18))
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["monsterinsights-tools-info-row monsterinsights-prettylinks-flow-install-wizard", prettyLinksActive.value ? "prettylinks-activated" : ""])
          }, [
            createBaseVNode("div", {
              class: "monsterinsights-prettylinks-flow-counter",
              textContent: toDisplayString(unref(text_counter_two))
            }, null, 8, _hoisted_19),
            createBaseVNode("div", _hoisted_20, [
              createBaseVNode("h3", {
                textContent: toDisplayString(unref(text_create_new_prettylink))
              }, null, 8, _hoisted_21),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(text_create_prettylink_process))
              }, null, 8, _hoisted_22),
              createBaseVNode("a", {
                href: addNewPrettyLinkPageUrl.value,
                class: "monsterinsights-button",
                textContent: toDisplayString(unref(text_create_prettylinks))
              }, null, 8, _hoisted_23)
            ])
          ], 2)
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
