import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as usePopularPostsStore, _ as _sfc_main$9, P as PopularPostsThemeLicense$1, d as debounce, a as _sfc_main$a, b as _sfc_main$b, c as _sfc_main$h, e as _sfc_main$i, f as _sfc_main$j, g as _sfc_main$k, h as _sfc_main$l } from "./PopularPostsVideoModal-DwXBhNEd.js";
import { _ as _sfc_main$e } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$c } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { _ as _sfc_main$d } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { S as SettingsInputText } from "./SettingsInputText-DEkJNBzd.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, i as normalizeClass, B as withModifiers, s as createCommentVNode, F as Fragment, f as renderList, n as normalizeStyle, A as createTextVNode, E as createBlock, m as computed, j as ref, D as withCtx, b as createVNode, w as withDirectives, ax as vShow, y as onMounted } from "./toastStore-CRCNwITM.js";
import { a as useToast, c as useAddonsStore, d as useDialog } from "./addons-CSVIjAyY.js";
import { u as useAuth, d as _sfc_main$f } from "./monsterinsights-Lite-uQE5cjXl.js";
import { S as SettingsInputSelect } from "./SettingsInputSelect-CeXJ757T.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { j as getMiGlobal, o as getUrl } from "./ajax-B_XS1gT5.js";
import { _ as _sfc_main$g } from "./SettingsInfoTooltip-05GT3kKT.js";
import { c as grabPopularPostsReport } from "./popularPosts-YBcx2bWk.js";
import { I as Icon } from "./Icon-Cz1-Vo-r.js";
import "./vue-multiselect.esm-DVzdjNub.js";
import "./Modal-B9mMTzc_.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./default-i18n-KrIlCc2E.js";
import "./useNotices-BpzNuZJ7.js";
import "./TheAppHeader-DEdY-dez.js";
const _hoisted_1$7 = { class: "monsterinsights-pp-widget-theme-preview" };
const _hoisted_2$6 = ["textContent"];
const _hoisted_3$6 = { class: "monsterinsights-pp-widget-theme-preview-width" };
const _hoisted_4$4 = { class: "monsterinsights-buttons-toggle" };
const _hoisted_5$4 = ["textContent"];
const _hoisted_6$3 = ["textContent"];
const _hoisted_7$3 = { class: "monsterinsights-dummy-text" };
const _hoisted_8$3 = {
  key: 0,
  class: "monsterinsights-widget-popular-posts-list"
};
const _hoisted_9$3 = { class: "monsterinsights-widget-popular-posts-text" };
const _hoisted_10$3 = ["textContent"];
const _hoisted_11$3 = ["textContent"];
const _hoisted_12$2 = {
  key: 0,
  class: "monsterinsights-widget-popular-posts-author"
};
const _hoisted_13$2 = ["innerHTML"];
const _hoisted_14$2 = ["textContent"];
const _hoisted_15$2 = {
  width: "13",
  height: "12",
  viewBox: "0 0 13 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const text_dummy_p_1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare.";
const text_dummy_p_2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero ante. Donec ac ligula a arcu facilisis consequat. Nam rhoncus vehicula erat. Mauris sed auctor nisi, sed facilisis elit. Vestibulum ultrices risus vitae euismod convallis. Mauris elementum vitae est quis ornare. In efficitur luctus lorem non porttitor. Pellentesque iaculis sapien non imperdiet cursus. Curabitur venenatis purus sed diam pulvinar accumsan. Suspendisse sapien justo, sollicitudin ut dignissim at, ultricies sed arcu.";
const text_dummy_p_3 = "Pellentesque pharetra molestie felis, at vehicula enim consectetur sed. Vestibulum ut dolor non nunc tincidunt elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque elit elit, maximus vel pharetra sit amet, gravida eget enim.";
const _sfc_main$8 = {
  __name: "PopularPostsWidgetThemePreview",
  props: {
    name: String,
    themes: Object
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const popularPostsStore = usePopularPostsStore();
    const text_theme_preview = __("Theme Preview", "google-analytics-for-wordpress");
    const text_wide = __("Wide", "google-analytics-for-wordpress");
    const text_narrow = __("Narrow", "google-analytics-for-wordpress");
    const text_yesterday = __("Yesterday", "google-analytics-for-wordpress");
    const preview_width = ref("wide");
    const preview = computed(() => popularPostsStore.theme_preview_widget);
    const active = computed(() => {
      return preview.value ? preview.value : settingsStore.getSettings[props.name];
    });
    const columns = computed(() => settingsStore.getSettings["popular_posts_widget_theme_columns"]);
    const themeOptions = computed(() => {
      if (active.value && props.themes[active.value]) {
        return props.themes[active.value].styles;
      }
      return false;
    });
    const themeList = computed(() => {
      if (active.value && props.themes[active.value]) {
        return props.themes[active.value].list;
      }
      return false;
    });
    const themeClass = computed(
      () => "monsterinsights-widget-popular-posts-widget monsterinsights-widget-popular-posts-" + active.value + " monsterinsights-widget-popular-posts-columns-" + columns.value
    );
    const outputClass = computed(
      () => "monsterinsights-pp-widget-theme-preview-output monsterinsights-pp-widget-theme-preview-output-" + preview_width.value
    );
    const getItems = computed(() => {
      if (!themeList.value || !themeList.value.items) return [];
      return "wide" === preview_width.value ? themeList.value.items : themeList.value.items.slice(0, 3);
    });
    const themeAvailable = computed(
      () => props.themes[active.value] ? PopularPostsThemeLicense$1.isThemeAvailable(props.themes[active.value].level) : false
    );
    const renderCssClass = computed(() => {
      let cls = "monsterinsights-pp-widget-theme-preview-render";
      if (!themeAvailable.value) {
        cls += " monsterinsights-pp-blurred";
      }
      return cls;
    });
    function getThemeOption(object, key) {
      if (!themeOptions.value || !themeOptions.value[object]) return "";
      const storedKey = props.name + "_" + object + "_" + key;
      const settings = settingsStore.getSettings;
      if (typeof settings[storedKey] !== "undefined" && "" !== settings[storedKey] && false !== settings[storedKey]) {
        return settings[storedKey];
      }
      return themeOptions.value[object][key] && themeOptions.value[object][key].default ? themeOptions.value[object][key].default : themeOptions.value[object][key];
    }
    function objectStyle(object, keys, cssProps) {
      const styles = {};
      if (!themeOptions.value || typeof themeOptions.value[object] === "undefined") {
        return styles;
      }
      for (let i = 0; i < keys.length; i++) {
        let value = getThemeOption(object, keys[i]);
        const cssProp = cssProps[i];
        if ("fontSize" === cssProp) {
          value += "px";
        }
        styles[cssProp] = value;
      }
      return styles;
    }
    function themeWidthButtonClass(width) {
      let cls = "monsterinsights-button";
      if (width === preview_width.value) {
        cls += " monsterinsights-selected-interval";
      }
      return cls;
    }
    function imgClass(img) {
      const normalized = img.replace(".jpg", "").replace(".png", "");
      return "monsterinsights-bg-img monsterinsights-pp-" + normalized;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("h3", {
          textContent: toDisplayString(unref(text_theme_preview))
        }, null, 8, _hoisted_2$6),
        themeOptions.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(renderCssClass.value)
        }, [
          createBaseVNode("div", _hoisted_3$6, [
            createBaseVNode("div", _hoisted_4$4, [
              createBaseVNode("button", {
                class: normalizeClass(themeWidthButtonClass("wide")),
                onClick: _cache[0] || (_cache[0] = withModifiers(($event) => preview_width.value = "wide", ["stop"])),
                textContent: toDisplayString(unref(text_wide))
              }, null, 10, _hoisted_5$4),
              createBaseVNode("button", {
                class: normalizeClass(themeWidthButtonClass("narrow")),
                onClick: _cache[1] || (_cache[1] = withModifiers(($event) => preview_width.value = "narrow", ["stop"])),
                textContent: toDisplayString(unref(text_narrow))
              }, null, 10, _hoisted_6$3)
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(outputClass.value)
          }, [
            createBaseVNode("div", _hoisted_7$3, [
              "wide" === preview_width.value ? (openBlock(), createElementBlock("p", {
                key: 0,
                textContent: text_dummy_p_1
              })) : createCommentVNode("", true),
              "narrow" === preview_width.value ? (openBlock(), createElementBlock("p", {
                key: 1,
                textContent: text_dummy_p_2
              })) : createCommentVNode("", true),
              "narrow" === preview_width.value ? (openBlock(), createElementBlock("p", {
                key: 2,
                textContent: text_dummy_p_3
              })) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", {
              class: normalizeClass(themeClass.value)
            }, [
              themeList.value ? (openBlock(), createElementBlock("ul", _hoisted_8$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(getItems.value, (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: index,
                    style: normalizeStyle(objectStyle("background", ["color", "border"], ["background", "borderColor"]))
                  }, [
                    themeList.value.images && themeList.value.images[index] ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass(imgClass(themeList.value.images[index]))
                    }, null, 2)) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_9$3, [
                      themeOptions.value.label ? (openBlock(), createElementBlock("span", {
                        key: 0,
                        class: "monsterinsights-widget-popular-posts-label",
                        style: normalizeStyle(objectStyle("label", ["color", "background"], ["color", "background"])),
                        textContent: toDisplayString(getThemeOption("label", "text"))
                      }, null, 12, _hoisted_10$3)) : createCommentVNode("", true),
                      createBaseVNode("a", {
                        style: normalizeStyle(objectStyle("title", ["color", "size"], ["color", "fontSize"])),
                        class: "monsterinsights-widget-popular-posts-title",
                        textContent: toDisplayString(item)
                      }, null, 12, _hoisted_11$3),
                      themeOptions.value.meta ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: "monsterinsights-widget-popular-posts-meta",
                        style: normalizeStyle(objectStyle("meta", ["color", "size"], ["color", "fontSize"]))
                      }, [
                        themeOptions.value.meta.author && "off" !== getThemeOption("meta", "author") ? (openBlock(), createElementBlock("span", _hoisted_12$2, "by Aazim Akhtar")) : createCommentVNode("", true),
                        "off" !== getThemeOption("meta", "author") && "off" !== getThemeOption("meta", "date") ? (openBlock(), createElementBlock("span", {
                          key: 1,
                          innerHTML: themeOptions.value.meta.separator
                        }, null, 8, _hoisted_13$2)) : createCommentVNode("", true),
                        themeOptions.value.meta.date && "off" !== getThemeOption("meta", "date") ? (openBlock(), createElementBlock("span", {
                          key: 2,
                          class: "monsterinsights-widget-popular-posts-date",
                          textContent: toDisplayString(unref(text_yesterday))
                        }, null, 8, _hoisted_14$2)) : createCommentVNode("", true)
                      ], 4)) : createCommentVNode("", true),
                      themeOptions.value.meta && themeOptions.value.meta.comments && "off" !== getThemeOption("meta", "comments") ? (openBlock(), createElementBlock("span", {
                        key: 2,
                        class: "monsterinsights-widget-popular-posts-comments",
                        style: normalizeStyle(objectStyle("comments", ["color"], ["color"]))
                      }, [
                        (openBlock(), createElementBlock("svg", _hoisted_15$2, [
                          createBaseVNode("path", {
                            d: "M7.8251 1.25893C8.70332 2.09821 9.14243 3.10714 9.14243 4.28571C9.14243 5.46429 8.70332 6.47321 7.8251 7.3125C6.94689 8.15179 5.8887 8.57143 4.65056 8.57143C3.78674 8.57143 2.98771 8.34821 2.25346 7.90179C1.63439 8.34821 0.993719 8.57143 0.331456 8.57143C0.302662 8.57143 0.273868 8.5625 0.245074 8.54464C0.216279 8.50893 0.194684 8.47321 0.180287 8.4375C0.151493 8.34821 0.158691 8.26786 0.201882 8.19643C0.50422 7.83929 0.763366 7.35714 0.979321 6.75C0.432235 6.01786 0.158691 5.19643 0.158691 4.28571C0.158691 3.10714 0.5978 2.09821 1.47602 1.25893C2.35424 0.419643 3.41242 0 4.65056 0C5.8887 0 6.94689 0.419643 7.8251 1.25893ZM11.7771 10.1786C11.993 10.7857 12.2522 11.2679 12.5545 11.625C12.5977 11.6964 12.6049 11.7768 12.5761 11.8661C12.5473 11.9554 12.4969 12 12.425 12C11.7627 12 11.122 11.7768 10.5029 11.3304C9.7687 11.7768 8.96967 12 8.10585 12C7.18444 12 6.34941 11.7589 5.60076 11.2768C4.85212 10.7946 4.30503 10.1607 3.9595 9.375C4.21865 9.41071 4.449 9.42857 4.65056 9.42857C6.07587 9.42857 7.29241 8.92857 8.30021 7.92857C9.32239 6.91071 9.83349 5.69643 9.83349 4.28571C9.83349 4.08929 9.82629 3.91071 9.81189 3.75C10.6325 4.07143 11.302 4.59821 11.8203 5.33036C12.3386 6.04464 12.5977 6.83929 12.5977 7.71429C12.5977 8.625 12.3242 9.44643 11.7771 10.1786Z",
                            style: normalizeStyle(objectStyle("comments", ["color"], ["fill"]))
                          }, null, 4)
                        ])),
                        _cache[2] || (_cache[2] = createTextVNode(" 24 ", -1))
                      ], 4)) : createCommentVNode("", true)
                    ])
                  ], 4);
                }), 128))
              ])) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ], 2)) : createCommentVNode("", true),
        !themeAvailable.value ? (openBlock(), createBlock(_sfc_main$9, { key: 1 })) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$6 = { class: "monsterinsights-settings-input-select-simple" };
const _hoisted_2$5 = ["name"];
const _hoisted_3$5 = ["value", "selected", "textContent"];
const _sfc_main$7 = {
  __name: "SettingsInputSelectSimple",
  props: {
    options: Array,
    name: String,
    auth_disabled: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const settingsStore = useSettingsStore();
    const { isAuthed } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const disabled = computed(() => {
      if (!props.auth_disabled) return false;
      return !isAuthed.value;
    });
    function updateSetting(e) {
      if (disabled.value) return false;
      savingToast({});
      settingsStore.updateSetting({
        name: props.name,
        value: e.target.value
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function isChecked(value) {
      const settings = settingsStore.getSettings;
      if (settings[props.name]) {
        return value == settings[props.name];
      }
      return value === props.options[0].value;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("select", {
          name: __props.name,
          class: "monsterinsights-settings-select",
          autocomplete: "off",
          onChange: updateSetting
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option) => {
            return openBlock(), createElementBlock("option", {
              key: option.value,
              value: option.value,
              selected: isChecked(option.value),
              textContent: toDisplayString(option.label)
            }, null, 8, _hoisted_3$5);
          }), 128))
        ], 40, _hoisted_2$5)
      ]);
    };
  }
};
const _hoisted_1$5 = { class: "monsterinsights-pp-inline-theme-controls" };
const _hoisted_2$4 = {
  key: 0,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-title"
};
const _hoisted_3$4 = ["textContent"];
const _hoisted_4$3 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_5$3 = { key: 0 };
const _hoisted_6$2 = ["textContent"];
const _hoisted_7$2 = { key: 1 };
const _hoisted_8$2 = ["textContent"];
const _hoisted_9$2 = {
  key: 1,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-label"
};
const _hoisted_10$2 = ["textContent"];
const _hoisted_11$2 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_12$1 = { key: 0 };
const _hoisted_13$1 = ["textContent"];
const _hoisted_14$1 = { class: "monsterinsights-pp-color-input-inline" };
const _hoisted_15$1 = ["value"];
const _hoisted_16$1 = { key: 1 };
const _hoisted_17$1 = ["textContent"];
const _hoisted_18$1 = {
  key: 2,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-background"
};
const _hoisted_19$1 = ["textContent"];
const _hoisted_20$1 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_21$1 = { key: 0 };
const _hoisted_22$1 = ["textContent"];
const _hoisted_23$1 = { key: 1 };
const _hoisted_24$1 = ["textContent"];
const _hoisted_25$1 = {
  key: 3,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-border"
};
const _hoisted_26$1 = ["textContent"];
const _hoisted_27$1 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_28$1 = { key: 0 };
const _hoisted_29$1 = ["textContent"];
const _hoisted_30$1 = {
  key: 4,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-border"
};
const _hoisted_31$1 = ["textContent"];
const _hoisted_32$1 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_33$1 = { key: 0 };
const _hoisted_34$1 = ["textContent"];
const _hoisted_35$1 = { key: 1 };
const _hoisted_36 = ["textContent"];
const _hoisted_37 = {
  key: 5,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-border"
};
const _hoisted_38 = ["textContent"];
const _hoisted_39 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_40 = { key: 0 };
const _hoisted_41 = ["textContent"];
const _hoisted_42 = ["textContent"];
const _hoisted_43 = ["textContent"];
const _hoisted_44 = ["textContent"];
const _hoisted_45 = ["textContent"];
const _hoisted_46 = {
  key: 0,
  class: "monsterinsights-separator"
};
const _hoisted_47 = { key: 1 };
const _hoisted_48 = ["textContent"];
const _hoisted_49 = ["textContent"];
const _hoisted_50 = {
  key: 2,
  class: "monsterinsights-inline-checkboxes"
};
const _sfc_main$6 = {
  __name: "PopularPostsWidgetThemeCustomize",
  props: {
    name: String,
    themes: Object
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const popularPostsStore = usePopularPostsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const text_customize_design = __("Customize Design", "google-analytics-for-wordpress");
    const text_title = __("Title", "google-analytics-for-wordpress");
    const text_color = __("Color", "google-analytics-for-wordpress");
    const text_size = __("Size", "google-analytics-for-wordpress");
    const text_border = __("Border", "google-analytics-for-wordpress");
    const text_meta = __("Author/Date", "google-analytics-for-wordpress");
    const text_label = __("Label", "google-analytics-for-wordpress");
    const text_background = __("Background", "google-analytics-for-wordpress");
    const text_wide_label = __("Wide-Layout Options", "google-analytics-for-wordpress");
    const text_wide_desc = __(
      "Adjust the number of columns displayed when the widget is placed in a wide container.",
      "google-analytics-for-wordpress"
    );
    const text_display_options = __("Display Options", "google-analytics-for-wordpress");
    const text_display_options_desc = __(
      "Choose which content you would like displayed in the widget.",
      "google-analytics-for-wordpress"
    );
    const text_display_author = __("Display Author", "google-analytics-for-wordpress");
    const text_display_date = __("Display Date", "google-analytics-for-wordpress");
    const text_display_comments = __("Display Comments", "google-analytics-for-wordpress");
    const text_comments = __("Comments", "google-analytics-for-wordpress");
    const text_post_count = __("Post Count", "google-analytics-for-wordpress");
    const text_post_count_desc = __(
      "Choose how many posts you’d like displayed in the widget.",
      "google-analytics-for-wordpress"
    );
    const wide_columns = [
      {
        label: '<span class="monsterinsights-wide-column monsterinsights-wide-column-three"><span></span><span></span><span></span><span></span><span></span><span></span></span>',
        value: "3"
      },
      {
        label: '<span class="monsterinsights-wide-column monsterinsights-wide-column-two"><span></span><span></span><span></span><span></span></span>',
        value: "2"
      },
      {
        label: '<span class="monsterinsights-wide-column monsterinsights-wide-column-one"><span></span><span></span></span>',
        value: "1"
      }
    ];
    const preview = computed(() => popularPostsStore.theme_preview_widget);
    const active = computed(() => {
      return preview.value ? preview.value : settingsStore.getSettings[props.name];
    });
    const themeOptions = computed(() => {
      if (active.value && props.themes[active.value]) {
        return props.themes[active.value].styles;
      }
      return {};
    });
    const options_count = computed(() => {
      const columns = settingsStore.getSettings["popular_posts_widget_theme_columns"];
      let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      if (2 === parseInt(columns, 10)) {
        options = [2, 4, 6, 8, 10];
      }
      if (3 === parseInt(columns, 10)) {
        options = [3, 6, 9];
      }
      return options.map((option) => ({ value: option, label: option }));
    });
    const themeAvailable = computed(
      () => props.themes[active.value] ? PopularPostsThemeLicense$1.isThemeAvailable(props.themes[active.value].level) : false
    );
    const renderCssClass = computed(() => themeAvailable.value ? "" : " monsterinsights-pp-blurred");
    function getThemeOption(object, key) {
      if (!themeOptions.value[object] || !themeOptions.value[object][key]) return "";
      return themeOptions.value[object][key].default ? themeOptions.value[object][key].default : themeOptions.value[object][key];
    }
    async function saveSetting(object, key, value) {
      savingToast({});
      try {
        await popularPostsStore.updateThemeSetting({
          type: "widget",
          theme: active.value,
          object,
          key,
          value
        });
        successToast({});
      } catch (_err) {
        errorToast({});
      }
    }
    const updateColor = debounce((object, key, color) => {
      saveSetting(object, key, color);
    }, 100);
    function updateOption(object, key, event) {
      saveSetting(object, key, event.target.value);
    }
    async function updateCount(columns) {
      savingToast({});
      try {
        await settingsStore.updateSetting({
          name: "popular_posts_widget_count",
          value: columns
        });
        successToast({});
      } catch (_err) {
        errorToast({});
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$e, {
        title: unref(text_customize_design),
        class: "monsterinsights-pp-widget-controls",
        icon: "monstericon-eye-far"
      }, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(renderCssClass.value)
          }, [
            createBaseVNode("div", _hoisted_1$5, [
              themeOptions.value.title ? (openBlock(), createElementBlock("div", _hoisted_2$4, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_title))
                }, null, 8, _hoisted_3$4),
                createBaseVNode("div", _hoisted_4$3, [
                  themeOptions.value.title.color ? (openBlock(), createElementBlock("label", _hoisted_5$3, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_color))
                    }, null, 8, _hoisted_6$2),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("title", "color"),
                      onChangeColor: _cache[0] || (_cache[0] = (c) => unref(updateColor)("title", "color", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true),
                  themeOptions.value.title.size ? (openBlock(), createElementBlock("label", _hoisted_7$2, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_size))
                    }, null, 8, _hoisted_8$2),
                    createVNode(_sfc_main$b, {
                      value: getThemeOption("title", "size"),
                      min: 1,
                      onChange: _cache[1] || (_cache[1] = (e) => updateOption("title", "size", e))
                    }, null, 8, ["value"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              themeOptions.value.label ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_label))
                }, null, 8, _hoisted_10$2),
                createBaseVNode("div", _hoisted_11$2, [
                  themeOptions.value.label.color ? (openBlock(), createElementBlock("label", _hoisted_12$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_color))
                    }, null, 8, _hoisted_13$1),
                    createBaseVNode("span", _hoisted_14$1, [
                      createVNode(_sfc_main$a, {
                        color: getThemeOption("label", "color"),
                        onChangeColor: _cache[2] || (_cache[2] = (c) => unref(updateColor)("label", "color", c))
                      }, null, 8, ["color"]),
                      createBaseVNode("input", {
                        type: "text",
                        value: getThemeOption("label", "text"),
                        onChange: _cache[3] || (_cache[3] = (e) => updateOption("label", "text", e))
                      }, null, 40, _hoisted_15$1)
                    ])
                  ])) : createCommentVNode("", true),
                  themeOptions.value.label.background ? (openBlock(), createElementBlock("label", _hoisted_16$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_background))
                    }, null, 8, _hoisted_17$1),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("label", "background"),
                      onChangeColor: _cache[4] || (_cache[4] = (c) => unref(updateColor)("label", "background", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              themeOptions.value.background ? (openBlock(), createElementBlock("div", _hoisted_18$1, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_background))
                }, null, 8, _hoisted_19$1),
                createBaseVNode("div", _hoisted_20$1, [
                  themeOptions.value.background.color ? (openBlock(), createElementBlock("label", _hoisted_21$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_color))
                    }, null, 8, _hoisted_22$1),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("background", "color"),
                      onChangeColor: _cache[5] || (_cache[5] = (c) => unref(updateColor)("background", "color", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true),
                  themeOptions.value.background.border ? (openBlock(), createElementBlock("label", _hoisted_23$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_border))
                    }, null, 8, _hoisted_24$1),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("background", "border"),
                      onChangeColor: _cache[6] || (_cache[6] = (c) => unref(updateColor)("background", "border", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              themeOptions.value.border ? (openBlock(), createElementBlock("div", _hoisted_25$1, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_border))
                }, null, 8, _hoisted_26$1),
                createBaseVNode("div", _hoisted_27$1, [
                  themeOptions.value.border.color ? (openBlock(), createElementBlock("label", _hoisted_28$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(themeOptions.value.border.color.label ? themeOptions.value.border.color.label : unref(text_color))
                    }, null, 8, _hoisted_29$1),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("border", "color"),
                      onChangeColor: _cache[7] || (_cache[7] = (c) => unref(updateColor)("border", "color", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              themeOptions.value.meta ? (openBlock(), createElementBlock("div", _hoisted_30$1, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_meta))
                }, null, 8, _hoisted_31$1),
                createBaseVNode("div", _hoisted_32$1, [
                  themeOptions.value.meta.color ? (openBlock(), createElementBlock("label", _hoisted_33$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_color))
                    }, null, 8, _hoisted_34$1),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("meta", "color"),
                      onChangeColor: _cache[8] || (_cache[8] = (c) => unref(updateColor)("meta", "color", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true),
                  themeOptions.value.meta.size ? (openBlock(), createElementBlock("label", _hoisted_35$1, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_size))
                    }, null, 8, _hoisted_36),
                    createVNode(_sfc_main$b, {
                      value: getThemeOption("meta", "size"),
                      min: 1,
                      onChange: _cache[9] || (_cache[9] = (e) => updateOption("meta", "size", e))
                    }, null, 8, ["value"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true),
              themeOptions.value.comments ? (openBlock(), createElementBlock("div", _hoisted_37, [
                createBaseVNode("label", {
                  class: "monsterinsights-pp-controls-description",
                  textContent: toDisplayString(unref(text_comments))
                }, null, 8, _hoisted_38),
                createBaseVNode("div", _hoisted_39, [
                  themeOptions.value.comments.color ? (openBlock(), createElementBlock("label", _hoisted_40, [
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-control-label",
                      textContent: toDisplayString(unref(text_color))
                    }, null, 8, _hoisted_41),
                    createVNode(_sfc_main$a, {
                      color: getThemeOption("comments", "color"),
                      onChangeColor: _cache[10] || (_cache[10] = (c) => unref(updateColor)("comments", "color", c))
                    }, null, 8, ["color"])
                  ])) : createCommentVNode("", true)
                ])
              ])) : createCommentVNode("", true)
            ]),
            _cache[14] || (_cache[14] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_wide_label))
              }, null, 8, _hoisted_42),
              _cache[11] || (_cache[11] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_wide_desc))
              }, null, 8, _hoisted_43)
            ]),
            createVNode(_sfc_main$c, {
              auth_disabled: false,
              options: wide_columns,
              name: "popular_posts_widget_theme_columns",
              class: "monsterinsights-wide-column-options",
              onUpdated: updateCount
            }),
            _cache[15] || (_cache[15] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_post_count))
              }, null, 8, _hoisted_44),
              _cache[12] || (_cache[12] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_post_count_desc))
              }, null, 8, _hoisted_45)
            ]),
            createVNode(_sfc_main$7, {
              auth_disabled: false,
              name: "popular_posts_widget_count",
              options: options_count.value
            }, null, 8, ["options"]),
            themeOptions.value.meta ? (openBlock(), createElementBlock("div", _hoisted_46)) : createCommentVNode("", true),
            themeOptions.value.meta ? (openBlock(), createElementBlock("p", _hoisted_47, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_display_options))
              }, null, 8, _hoisted_48),
              _cache[13] || (_cache[13] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_display_options_desc))
              }, null, 8, _hoisted_49)
            ])) : createCommentVNode("", true),
            themeOptions.value.meta ? (openBlock(), createElementBlock("div", _hoisted_50, [
              themeOptions.value.meta && themeOptions.value.meta.author ? (openBlock(), createBlock(_sfc_main$d, {
                key: 0,
                auth_disabled: false,
                valueOff: "off",
                valueOn: "on",
                label: unref(text_display_author),
                name: "popular_posts_widget_theme_meta_author"
              }, null, 8, ["label"])) : createCommentVNode("", true),
              themeOptions.value.meta && themeOptions.value.meta.date ? (openBlock(), createBlock(_sfc_main$d, {
                key: 1,
                auth_disabled: false,
                valueOff: "off",
                valueOn: "on",
                label: unref(text_display_date),
                name: "popular_posts_widget_theme_meta_date"
              }, null, 8, ["label"])) : createCommentVNode("", true),
              themeOptions.value.meta && themeOptions.value.meta.comments ? (openBlock(), createBlock(_sfc_main$d, {
                key: 2,
                auth_disabled: false,
                valueOff: "off",
                valueOn: "on",
                label: unref(text_display_comments),
                name: "popular_posts_widget_theme_meta_comments"
              }, null, 8, ["label"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true)
          ], 2),
          !themeAvailable.value ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["title"]);
    };
  }
};
const _hoisted_1$4 = { class: "monsterinsights-popular-posts-widget-category monsterinsights-popular-posts-widget-category-lite" };
const _hoisted_2$3 = ["textContent"];
const _hoisted_3$3 = ["innerHTML"];
const _sfc_main$5 = {
  __name: "monsterinsights-PopularPostsWidgetCategory-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_only_show_posts = __(
      "Only Show Posts from These Categories",
      "google-analytics-for-wordpress"
    );
    const text_only_show_posts_desc = __(
      "Choose from which categories posts will be displayed in the widget. All categories will be used if left empty.",
      "google-analytics-for-wordpress"
    );
    const options = [];
    const forced = [
      { label: __("News", "google-analytics-for-wordpress"), value: "" },
      { label: __("Technology", "google-analytics-for-wordpress"), value: "" }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_only_show_posts))
          }, null, 8, _hoisted_2$3),
          createVNode(_sfc_main$f),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", { innerHTML: unref(text_only_show_posts_desc) }, null, 8, _hoisted_3$3)
        ]),
        createVNode(SettingsInputSelect, {
          options,
          forced,
          multiple: true,
          disabled: true
        })
      ]);
    };
  }
};
const PopularPostsThemeLicense = {
  isThemeAvailable() {
    return true;
  },
  canaccess(licenseType, level = "pro") {
    let can_access = false;
    switch (level) {
      case "master":
        can_access = licenseType === "master";
        break;
      case "pro":
        can_access = licenseType === "master" || licenseType === "pro";
        break;
      case "plus":
        can_access = licenseType === "master" || licenseType === "pro" || licenseType === "plus" || licenseType === "starter";
        break;
      case "basic":
        can_access = licenseType === "master" || licenseType === "pro" || licenseType === "plus" || licenseType === "basic" || licenseType === "starter";
        break;
      case "starter":
        can_access = licenseType === "master" || licenseType === "pro" || licenseType === "plus" || licenseType === "basic" || licenseType === "starter";
        break;
      default:
        can_access = true;
        break;
    }
    return can_access;
  }
};
const _hoisted_1$3 = {
  key: 0,
  class: "monsterinsights-pro-pill"
};
const _sfc_main$4 = {
  __name: "monsterinsights-PopularPostsProPill-Pro",
  props: {
    level: {
      type: String,
      default: "pro"
    }
  },
  setup(__props) {
    const props = __props;
    const licenseStore = useLicenseStore();
    const licenseType = computed(() => {
      const isNetwork = getMiGlobal("network", false);
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      return license?.type || "";
    });
    const canaccess = computed(() => PopularPostsThemeLicense.canaccess(licenseType.value, props.level));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        !canaccess.value ? (openBlock(), createElementBlock("span", _hoisted_1$3, "PRO")) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "monsterinsights-popular-posts-ga-settings" };
const _hoisted_2$2 = { class: "monsterinsights-dark" };
const _hoisted_3$2 = ["textContent"];
const _hoisted_4$2 = ["innerHTML"];
const _hoisted_5$2 = ["textContent"];
const _sfc_main$3 = {
  __name: "monsterinsights-PopularPostsGaInput-Pro",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const licenseStore = useLicenseStore();
    const addonsStore = useAddonsStore();
    const { alert, confirm, loading } = useDialog();
    const text_add_top_5_ga = __("Add Top 5 Posts from Google Analytics", "google-analytics-for-wordpress");
    const text_add_top_5_ga_tooltip = __(
      "To load the top posts from Google Analytics, you must enable the Custom Dimensions addon and set up the Post Type custom dimension in the MonsterInsights settings.",
      "google-analytics-for-wordpress"
    );
    const text_check_data = __("Test Automated Posts", "google-analytics-for-wordpress");
    const text_check_ga_data = __(
      "Click this button to run a series of checks that will confirm your setup is completed to load Popular Posts from Google Analytics.",
      "google-analytics-for-wordpress"
    );
    const text_automated = __("Automated + Curated", "google-analytics-for-wordpress");
    const text_automated_description = sprintf(
      __(
        "Automatically add the top 5 Posts from the past 30 days to your Curated list of Posts using %1$sCustom Dimensions%2$s. Also requires Sort By - Curated to be selected. Setup steps can be found in our %3$sknowledge base%4$s.",
        "google-analytics-for-wordpress"
      ),
      '<a href="#/conversions">',
      "</a>",
      `<a target="_blank" href="${getUrl("popular-posts", "automated-ga", "https://monsterinsights.com/docs/how-to-include-your-popular-posts-from-google-analytics/")}">`,
      "</a>"
    );
    const text_needs_pro = __("Pro version is required.", "google-analytics-for-wordpress");
    const ga_enabled = computed(() => {
      const settings = settingsStore.getSettings;
      return settings?.[props.name] ? settings[props.name] : false;
    });
    const checking_ga_data = computed(() => false);
    const ga_check_button_class = computed(() => {
      let cls = "monsterinsights-button monsterinsights-button-secondary";
      if (checking_ga_data.value) {
        cls += " monsterinsights-button-disabled";
      }
      return cls;
    });
    const licenseType = computed(() => {
      const isNetwork = getMiGlobal("network", false);
      const license = isNetwork ? licenseStore.license_network : licenseStore.license;
      return license?.type || "";
    });
    const canaccess = computed(() => PopularPostsThemeLicense.canaccess(licenseType.value));
    function isAddonInstalled(addon) {
      const addons = addonsStore.addons || {};
      return addons[addon]?.installed;
    }
    async function start_tracking() {
      const loader = loading({ title: __("Verifying Popular Posts data", "google-analytics-for-wordpress") });
      try {
        await grabPopularPostsReport();
        loader.close();
        await alert({
          variant: "success",
          title: __("Popular Posts data can be fetched correctly", "google-analytics-for-wordpress"),
          message: __(
            "Please note: depending on when you set up the Custom Dimensions settings, it may take up to 7 days to see relevant Popular Posts data loading from Google Analytics.",
            "google-analytics-for-wordpress"
          ),
          confirmText: __("Close", "google-analytics-for-wordpress")
        });
      } catch (err) {
        loader.close();
        let error_message = err?.message || "";
        const footer = err?.footer || "";
        if (footer === "install_addon") {
          const verb = isAddonInstalled("dimensions") ? __("activate", "google-analytics-for-wordpress") : __("install", "google-analytics-for-wordpress");
          error_message = sprintf(error_message, verb);
          const goToAddons = await confirm({
            title: __("Error", "google-analytics-for-wordpress"),
            message: error_message,
            confirmText: __("Visit addons page", "google-analytics-for-wordpress"),
            cancelText: __("Close", "google-analytics-for-wordpress")
          });
          if (goToAddons) {
            window.location = getMiGlobal("addons_url", "#");
          }
          return;
        }
        if (footer) {
          const footerdiv = document.createElement("div");
          footerdiv.innerHTML = footer;
          const anchor = footerdiv.firstChild;
          const goToLink = await confirm({
            title: __("Error", "google-analytics-for-wordpress"),
            message: error_message,
            confirmText: anchor?.innerText || __("OK", "google-analytics-for-wordpress"),
            cancelText: __("Close", "google-analytics-for-wordpress")
          });
          if (goToLink && anchor?.href) {
            window.location = anchor.href;
          }
          return;
        }
        await alert({
          variant: "error",
          title: __("Error", "google-analytics-for-wordpress"),
          message: error_message
        });
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", null, [
          createBaseVNode("span", _hoisted_2$2, [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_automated))
            }, null, 8, _hoisted_3$2),
            createVNode(_sfc_main$4, { level: "pro" })
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", { innerHTML: unref(text_automated_description) }, null, 8, _hoisted_4$2)
        ]),
        canaccess.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(_sfc_main$d, {
            auth_disabled: false,
            name: __props.name,
            label: unref(text_add_top_5_ga),
            tooltip: unref(text_add_top_5_ga_tooltip)
          }, null, 8, ["name", "label", "tooltip"]),
          ga_enabled.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _cache[1] || (_cache[1] = createBaseVNode("p", null, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("button", {
                class: normalizeClass(ga_check_button_class.value),
                onClick: start_tracking,
                textContent: toDisplayString(unref(text_check_data))
              }, null, 10, _hoisted_5$2),
              createVNode(_sfc_main$g, { content: unref(text_check_ga_data) }, null, 8, ["content"])
            ])
          ], 64)) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createBlock(_sfc_main$d, {
          key: 1,
          faux: true,
          default: false,
          faux_tooltip_off: unref(text_needs_pro),
          label: unref(text_add_top_5_ga),
          tooltip: unref(text_add_top_5_ga_tooltip)
        }, null, 8, ["faux_tooltip_off", "label", "tooltip"]))
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-pp-manual-placement" };
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = ["textContent"];
const _hoisted_4$1 = { class: "monsterinsights-pp-placement-options-accordion" };
const _hoisted_5$1 = { class: "monsterinsights-pp-accordion-item-title" };
const _hoisted_6$1 = { class: "monsterinsights-pp-accordion-item-title-top" };
const _hoisted_7$1 = ["textContent"];
const _hoisted_8$1 = { class: "monsterinsights-pp-accordion-item-title-bottom-container" };
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = { class: "monsterinsights-pp-accordion-item-title-top" };
const _hoisted_11$1 = ["textContent"];
const _hoisted_12 = ["textContent"];
const _hoisted_13 = {
  role: "button",
  class: "monsterinsights-settings-input-toggle-collapsible"
};
const _hoisted_14 = { class: "monsterinsights-pp-accordion-item-content" };
const _hoisted_15 = { class: "monsterinsights-pp-manual-placement-content-columns" };
const _hoisted_16 = { class: "monsterinsights-pp-manual-placement-content-steps" };
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = { class: "monsterinsights-pp-accordion-item-title-top" };
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = {
  role: "button",
  class: "monsterinsights-settings-input-toggle-collapsible"
};
const _hoisted_22 = { class: "monsterinsights-pp-accordion-item-content" };
const _hoisted_23 = { class: "monsterinsights-pp-manual-placement-content-columns" };
const _hoisted_24 = { class: "monsterinsights-pp-manual-placement-content-steps" };
const _hoisted_25 = ["textContent"];
const _hoisted_26 = ["textContent"];
const _hoisted_27 = ["textContent"];
const _hoisted_28 = { class: "monsterinsights-pp-accordion-item-title-top" };
const _hoisted_29 = ["textContent"];
const _hoisted_30 = ["textContent"];
const _hoisted_31 = {
  role: "button",
  class: "monsterinsights-settings-input-toggle-collapsible"
};
const _hoisted_32 = { class: "monsterinsights-pp-accordion-item-content" };
const _hoisted_33 = { class: "monsterinsights-pp-manual-placement-content-columns" };
const _hoisted_34 = { class: "monsterinsights-pp-manual-placement-content-steps" };
const _hoisted_35 = ["innerHTML"];
const _sfc_main$2 = {
  __name: "PopularPostsWidgetPlacement",
  props: {
    video_gutenberg: String,
    video_shortcode: String,
    video_sidebar: String
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const selected = ref("automatic");
    const text_automatic_placement = __("Automatic Placement", "google-analytics-for-wordpress");
    const text_gutenberg_block = __("Display using Gutenberg Blocks", "google-analytics-for-wordpress");
    const text_embed_options = __("Embed Options", "google-analytics-for-wordpress");
    const text_embed_options_desc = __(
      "All Embed Options can be used in conjunction with one another.",
      "google-analytics-for-wordpress"
    );
    const text_shortcode_title = __("Display using a Shortcode", "google-analytics-for-wordpress");
    const text_gutenberg_desc = __(
      "Learn how to insert the Popular Posts Widget into your posts and pages using Gutenberg Blocks. To style this widget, use the Gutenberg Block settings.",
      "google-analytics-for-wordpress"
    );
    const text_automatic_desc = __(
      "Enabling Automatic Placement will include the Popular Posts Widget after the last paragraph of any and all posts that match your Behavior settings. To style this widget use the Customize Design panel above.",
      "google-analytics-for-wordpress"
    );
    const text_shortcode_desc = __(
      "Learn how to insert the Popular Posts Widget using a shortcode. To style this widget use the Customize Design panel above.",
      "google-analytics-for-wordpress"
    );
    const text_gutenberg_video = sprintf(
      __(
        "%1$sWatch Video%2$s - How to Add the Popular Posts widget using Gutenberg",
        "google-analytics-for-wordpress"
      ),
      "<b>",
      "</b>"
    );
    const text_gutenberg_steps = [
      sprintf(
        __("%1$sStep 1%2$s - Click the “Add Block” icon while editing a Post or Page.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      sprintf(
        __("%1$sStep 2%2$s - Search for “Popular Posts”.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      sprintf(
        __("%1$sStep 3%2$s - Style the widget using the Block Settings sidebar.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      )
    ];
    const text_sidebar_steps = [
      sprintf(
        __("%1$sStep 1%2$s - Navigate to your Appearance > Widgets page using the menu on the left side your screen. Must be logged in as Admin.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      sprintf(
        __("%1$sStep 2%2$s - On the left, under Available Widgets, look for the Popular Posts - MonsterInsights widget and drag it into the desired Sidebar on the right.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      sprintf(
        __("%1$sStep 3%2$s - The widget options should automatically expand allowing you to customize the design.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      )
    ];
    const text_shortcode = __("Display using a Shortcode", "google-analytics-for-wordpress");
    const text_shortcode_copy = __(
      "Copy the shortcode and paste it into your Page and/or Post templates or using a shortcode plugin.",
      "google-analytics-for-wordpress"
    );
    const text_copy = __("Copy Shortcode", "google-analytics-for-wordpress");
    const text_shortcode_video = sprintf(
      __(
        "%1$sWatch Video%2$s - How to Add the Popular Posts widget using our Shortcode",
        "google-analytics-for-wordpress"
      ),
      "<b>",
      "</b>"
    );
    const text_sidebar_title = __("Display in a Sidebar", "google-analytics-for-wordpress");
    const text_sidebar_desc = __(
      "Learn how to insert the Popular Posts Widget into a Sidebar. To style this widget use the Customize Design panel above.",
      "google-analytics-for-wordpress"
    );
    const text_sidebar_video = __(
      "Watch Video - How to Add the Popular Posts widget using Widgets",
      "google-analytics-for-wordpress"
    );
    function copyToClipboard() {
      document.querySelector("#monsterinsights-shortcode-widget-copy").select();
      document.execCommand("copy");
    }
    function switchSelected(key) {
      selected.value = selected.value === key ? "" : key;
    }
    function accordionTitleClass(key) {
      let cls = "monsterinsights-pp-accordion-item-title monsterinsights-pp-accordion-item-title-toggle ";
      if (selected.value === key) {
        cls += "monsterinsights-pp-accordion-item-title-active";
      }
      return cls;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[10] || (_cache[10] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_embed_options))
          }, null, 8, _hoisted_2$1),
          _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", {
            textContent: toDisplayString(unref(text_embed_options_desc))
          }, null, 8, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          createBaseVNode("div", _hoisted_5$1, [
            createBaseVNode("div", _hoisted_6$1, [
              _cache[4] || (_cache[4] = createBaseVNode("svg", {
                width: "16",
                height: "14",
                viewBox: "0 0 16 14",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("path", {
                  d: "M12.8023 5.32388L12.6024 5.6892C12.5192 5.84576 12.3943 5.89794 12.2277 5.84576C11.9279 5.72399 11.6615 5.55873 11.4283 5.34998C11.2951 5.22821 11.2701 5.08904 11.3534 4.93248L11.5532 4.56717C11.3867 4.35842 11.2534 4.12358 11.1535 3.86264H10.7538C10.5706 3.86264 10.4707 3.76697 10.454 3.57561C10.3874 3.26249 10.3874 2.94067 10.454 2.61015C10.4707 2.43619 10.5706 2.34921 10.7538 2.34921H11.1535C11.2534 2.08828 11.3867 1.85344 11.5532 1.64469L11.3534 1.25328C11.2701 1.09672 11.2951 0.966253 11.4283 0.861878C11.6615 0.653129 11.9279 0.48787 12.2277 0.3661C12.3943 0.296517 12.5192 0.340006 12.6024 0.496568L12.8023 0.887972C13.0688 0.835785 13.3353 0.835785 13.6017 0.887972L13.8016 0.496568C13.8849 0.340006 14.0098 0.296517 14.1763 0.3661C14.4761 0.470474 14.7426 0.635734 14.9757 0.861878C15.109 0.966253 15.134 1.09672 15.0507 1.25328L14.8508 1.64469C15.0174 1.85344 15.1506 2.08828 15.2505 2.34921H15.6503C15.8335 2.34921 15.9334 2.43619 15.95 2.61015C16.0167 2.94067 16.0167 3.26249 15.95 3.57561C15.9334 3.76697 15.8335 3.86264 15.6503 3.86264H15.2505C15.1506 4.12358 15.0174 4.35842 14.8508 4.56717L15.0507 4.93248C15.134 5.10644 15.109 5.2456 14.9757 5.34998C14.7426 5.55873 14.4761 5.72399 14.1763 5.84576C14.0098 5.89794 13.8849 5.84576 13.8016 5.6892L13.6017 5.32388C13.3353 5.37607 13.0688 5.37607 12.8023 5.32388ZM12.5525 3.78436C12.8523 4.0279 13.1604 4.09749 13.4768 3.99311C13.7933 3.88874 13.9848 3.68869 14.0514 3.39296C14.1347 3.07983 14.0681 2.74932 13.8515 2.4014C13.5518 2.15786 13.2437 2.08828 12.9272 2.19265C12.6108 2.29703 12.4109 2.50578 12.3276 2.8189C12.261 3.11463 12.336 3.43645 12.5525 3.78436ZM9.65458 7.80278L10.504 8.24637C10.7871 8.42033 10.8704 8.67256 10.7538 9.00308C10.6039 9.45537 10.2541 10.0294 9.70454 10.7253C9.48803 10.9862 9.23821 11.0297 8.95508 10.8557L8.20562 10.4121C7.80591 10.7774 7.35623 11.0558 6.85659 11.2471V12.1343C6.85659 12.2735 6.80663 12.404 6.7067 12.5257C6.60677 12.6475 6.49019 12.7171 6.35695 12.7345C5.72408 12.8562 5.0912 12.8562 4.45832 12.7345C4.30843 12.7171 4.18352 12.6475 4.08359 12.5257C4.00032 12.404 3.95868 12.2735 3.95868 12.1343V11.2471C3.44239 11.0558 2.98439 10.7774 2.58467 10.4121L1.8602 10.8557C1.57707 11.0297 1.32725 10.9862 1.11074 10.7253C0.577788 10.0468 0.228041 9.47277 0.0614941 9.00308C-0.0550885 8.67256 0.0281848 8.42033 0.311314 8.24637L1.13572 7.80278C1.03579 7.24611 1.03579 6.69815 1.13572 6.15888L0.311314 5.71529C0.0115301 5.54133 -0.0717431 5.28909 0.0614941 4.95857C0.228041 4.48889 0.577788 3.91483 1.11074 3.2364C1.31059 2.97546 1.56041 2.93197 1.8602 3.10593L2.58467 3.52343C3.00104 3.15812 3.45904 2.88848 3.95868 2.71452V1.82734C3.95868 1.67078 4.00032 1.54031 4.08359 1.43594C4.18352 1.31417 4.30843 1.24458 4.45832 1.22719C5.0912 1.10542 5.72408 1.10542 6.35695 1.22719C6.42357 1.22719 6.48186 1.25328 6.53183 1.30547C6.59845 1.34026 6.65674 1.38375 6.7067 1.43594C6.75667 1.48812 6.78998 1.54901 6.80663 1.61859C6.83994 1.68818 6.85659 1.75776 6.85659 1.82734V2.71452C7.35623 2.90588 7.80591 3.17551 8.20562 3.52343L8.95508 3.10593C9.23821 2.91458 9.48803 2.95806 9.70454 3.2364C10.2375 3.89743 10.5872 4.47149 10.7538 4.95857C10.8704 5.28909 10.7871 5.54133 10.504 5.71529L9.65458 6.15888C9.7545 6.69815 9.7545 7.24611 9.65458 7.80278ZM6.73168 8.35074C7.01481 7.96804 7.17303 7.56794 7.20634 7.15044C7.23965 6.73294 7.1647 6.37633 6.9815 6.0806C6.7983 5.76748 6.55681 5.51524 6.25703 5.32388C5.9739 5.13253 5.63248 5.06295 5.23276 5.11514C4.83305 5.14993 4.45 5.31519 4.08359 5.61091C3.80046 5.99362 3.64225 6.39372 3.60894 6.81122C3.57563 7.22872 3.65057 7.59403 3.83377 7.90715C4.01697 8.20288 4.25014 8.44642 4.53327 8.63777C4.83305 8.82913 5.1828 8.90741 5.58251 8.87262C5.98222 8.82043 6.36528 8.64647 6.73168 8.35074ZM12.8023 13.1259L12.6024 13.4912C12.5192 13.6477 12.3943 13.6999 12.2277 13.6477C11.9279 13.526 11.6615 13.3607 11.4283 13.152C11.2951 13.0302 11.2701 12.891 11.3534 12.7345L11.5532 12.3692C11.3867 12.1604 11.2534 11.9256 11.1535 11.6646H10.7538C10.5706 11.6646 10.4707 11.569 10.454 11.3776C10.3874 11.0645 10.3874 10.7427 10.454 10.4121C10.4707 10.2382 10.5706 10.1512 10.7538 10.1512H11.1535C11.2534 9.89027 11.3867 9.64673 11.5532 9.42058L11.3534 9.05527C11.2701 8.89871 11.2951 8.75954 11.4283 8.63777C11.6615 8.42902 11.9279 8.27246 12.2277 8.16809C12.3943 8.09851 12.5192 8.14199 12.6024 8.29856L12.8023 8.68996C13.0688 8.63777 13.3353 8.63777 13.6017 8.68996L13.8016 8.29856C13.8849 8.14199 14.0098 8.09851 14.1763 8.16809C14.4761 8.27246 14.7426 8.42902 14.9757 8.63777C15.109 8.75954 15.134 8.89871 15.0507 9.05527L14.8508 9.42058C15.0174 9.64673 15.1506 9.89027 15.2505 10.1512H15.6503C15.8335 10.1512 15.9334 10.2382 15.95 10.4121C16.0167 10.7427 16.0167 11.0645 15.95 11.3776C15.9334 11.569 15.8335 11.6646 15.6503 11.6646H15.2505C15.1506 11.9256 15.0174 12.1604 14.8508 12.3692L15.0507 12.7345C15.134 12.891 15.109 13.0302 14.9757 13.152C14.7426 13.3607 14.4761 13.526 14.1763 13.6477C14.0098 13.6999 13.8849 13.6477 13.8016 13.4912L13.6017 13.1259C13.3353 13.1781 13.0688 13.1781 12.8023 13.1259ZM12.5525 11.5864C12.8523 11.8299 13.1604 11.8995 13.4768 11.7951C13.7933 11.6907 13.9848 11.4907 14.0514 11.1949C14.1347 10.8818 14.0681 10.5513 13.8515 10.2034C13.5518 9.95985 13.2437 9.89027 12.9272 9.99464C12.6108 10.099 12.4109 10.3078 12.3276 10.6209C12.261 10.9166 12.336 11.2384 12.5525 11.5864Z",
                  fill: "#338EEF"
                })
              ], -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_automatic_placement))
              }, null, 8, _hoisted_7$1)
            ]),
            createBaseVNode("div", _hoisted_8$1, [
              createBaseVNode("div", {
                class: "monsterinsights-pp-accordion-item-title-bottom",
                textContent: toDisplayString(unref(text_automatic_desc))
              }, null, 8, _hoisted_9$1),
              createVNode(_sfc_main$d, {
                auth_disabled: false,
                name: "popular_posts_widget_automatic"
              })
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(accordionTitleClass("gutenberg")),
            onClick: _cache[0] || (_cache[0] = ($event) => switchSelected("gutenberg"))
          }, [
            createBaseVNode("div", _hoisted_10$1, [
              _cache[5] || (_cache[5] = createBaseVNode("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.00008 5.00078C7.4478 5.00078 7.00008 5.4485 7.00008 6.00078V7.00078H6.00008C5.4478 7.00078 5.00008 7.4485 5.00008 8.00078C5.00008 8.55307 5.4478 9.00078 6.00008 9.00078H7.00008V10.0008C7.00008 10.5531 7.4478 11.0008 8.00008 11.0008C8.55237 11.0008 9.00008 10.5531 9.00008 10.0008V9.00078H10.0001C10.5524 9.00078 11.0001 8.55307 11.0001 8.00078C11.0001 7.4485 10.5524 7.00078 10.0001 7.00078H9.00008V6.00078C9.00008 5.4485 8.55237 5.00078 8.00008 5.00078Z",
                  fill: "#338EEF"
                })
              ], -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_gutenberg_block))
              }, null, 8, _hoisted_11$1)
            ]),
            createBaseVNode("div", {
              class: "monsterinsights-pp-accordion-item-title-bottom",
              textContent: toDisplayString(unref(text_gutenberg_desc))
            }, null, 8, _hoisted_12),
            createBaseVNode("span", _hoisted_13, [
              createVNode(Icon, {
                name: "chevron-down-bold",
                size: 18
              })
            ])
          ], 2),
          withDirectives(createBaseVNode("div", _hoisted_14, [
            createBaseVNode("div", _hoisted_15, [
              createVNode(_sfc_main$h, {
                video: __props.video_gutenberg,
                title: unref(text_gutenberg_video)
              }, null, 8, ["video", "title"]),
              createBaseVNode("ul", _hoisted_16, [
                (openBlock(), createElementBlock(Fragment, null, renderList(text_gutenberg_steps, (text, index) => {
                  return createBaseVNode("li", {
                    key: index,
                    innerHTML: text
                  }, null, 8, _hoisted_17);
                }), 64))
              ])
            ])
          ], 512), [
            [vShow, "gutenberg" === selected.value]
          ]),
          createBaseVNode("div", {
            class: normalizeClass(accordionTitleClass("shortcode")),
            onClick: _cache[1] || (_cache[1] = ($event) => switchSelected("shortcode"))
          }, [
            createBaseVNode("div", _hoisted_18, [
              _cache[6] || (_cache[6] = createBaseVNode("svg", {
                width: "16",
                height: "10",
                viewBox: "0 0 16 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M11.8058 9.42845C11.3003 9.91772 10.4808 9.91772 9.97528 9.42845C9.46981 8.93919 9.46981 8.14593 9.97528 7.65666L12.7208 4.99916L9.9755 2.34187C9.47002 1.8526 9.47002 1.05934 9.9755 0.570075C10.481 0.0808083 11.3005 0.0808083 11.806 0.570075L14.5513 3.22737L14.5515 3.22718C15.5625 4.20572 15.5625 5.79223 14.5515 6.77077L11.8058 9.42845ZM3.50396 9.42845C4.00943 9.91772 4.82897 9.91772 5.33445 9.42845C5.83993 8.93919 5.83993 8.14593 5.33445 7.65666L2.5889 4.99915L5.33423 2.34187C5.8397 1.8526 5.8397 1.05934 5.33422 0.570075C4.82875 0.0808083 4.00921 0.0808083 3.50373 0.570075L0.758402 3.22736L0.758215 3.22718C-0.252739 4.20572 -0.252738 5.79223 0.758215 6.77077L3.50396 9.42845Z",
                  fill: "#338EEF"
                })
              ], -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_shortcode_title))
              }, null, 8, _hoisted_19)
            ]),
            createBaseVNode("div", {
              class: "monsterinsights-pp-accordion-item-title-bottom",
              textContent: toDisplayString(unref(text_shortcode_desc))
            }, null, 8, _hoisted_20),
            createBaseVNode("span", _hoisted_21, [
              createVNode(Icon, {
                name: "chevron-down-bold",
                size: 18
              })
            ])
          ], 2),
          withDirectives(createBaseVNode("div", _hoisted_22, [
            createBaseVNode("div", _hoisted_23, [
              createVNode(_sfc_main$h, {
                video: __props.video_shortcode,
                title: unref(text_shortcode_video)
              }, null, 8, ["video", "title"]),
              createBaseVNode("ul", _hoisted_24, [
                createBaseVNode("li", null, [
                  createBaseVNode("p", null, [
                    createBaseVNode("span", {
                      class: "monsterinsights-dark",
                      textContent: toDisplayString(unref(text_shortcode))
                    }, null, 8, _hoisted_25),
                    _cache[7] || (_cache[7] = createBaseVNode("br", null, null, -1)),
                    createBaseVNode("span", {
                      textContent: toDisplayString(unref(text_shortcode_copy))
                    }, null, 8, _hoisted_26)
                  ]),
                  _cache[8] || (_cache[8] = createBaseVNode("input", {
                    id: "monsterinsights-shortcode-widget-copy",
                    type: "text",
                    readonly: true,
                    value: "[monsterinsights_popular_posts_widget]"
                  }, null, -1)),
                  createBaseVNode("button", {
                    class: "monsterinsights-button monsterinsights-button-secondary",
                    onClick: copyToClipboard,
                    textContent: toDisplayString(unref(text_copy))
                  }, null, 8, _hoisted_27)
                ])
              ])
            ])
          ], 512), [
            [vShow, "shortcode" === selected.value]
          ]),
          createBaseVNode("div", {
            class: normalizeClass(accordionTitleClass("sidebar")),
            onClick: _cache[2] || (_cache[2] = ($event) => switchSelected("sidebar"))
          }, [
            createBaseVNode("div", _hoisted_28, [
              _cache[9] || (_cache[9] = createBaseVNode("svg", {
                width: "16",
                height: "10",
                viewBox: "0 0 16 10",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createBaseVNode("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M13 2H3C2.44772 2 2 2.44772 2 3V7C2 7.55228 2.44772 8 3 8H13C13.5523 8 14 7.55228 14 7V3C14 2.44772 13.5523 2 13 2ZM3 0C1.34315 0 0 1.34315 0 3V7C0 8.65685 1.34315 10 3 10H13C14.6569 10 16 8.65685 16 7V3C16 1.34315 14.6569 0 13 0H3ZM3 5C3 4.44772 3.44772 4 4 4H8C8.55228 4 9 4.44772 9 5C9 5.55228 8.55228 6 8 6H4C3.44772 6 3 5.55228 3 5ZM12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4Z",
                  fill: "#338EEF"
                })
              ], -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_sidebar_title))
              }, null, 8, _hoisted_29)
            ]),
            createBaseVNode("div", {
              class: "monsterinsights-pp-accordion-item-title-bottom",
              textContent: toDisplayString(unref(text_sidebar_desc))
            }, null, 8, _hoisted_30),
            createBaseVNode("span", _hoisted_31, [
              createVNode(Icon, {
                name: "chevron-down-bold",
                size: 18
              })
            ])
          ], 2),
          withDirectives(createBaseVNode("div", _hoisted_32, [
            createBaseVNode("div", _hoisted_33, [
              createVNode(_sfc_main$h, {
                video: __props.video_sidebar,
                title: unref(text_sidebar_video)
              }, null, 8, ["video", "title"]),
              createBaseVNode("ul", _hoisted_34, [
                (openBlock(), createElementBlock(Fragment, null, renderList(text_sidebar_steps, (text, index) => {
                  return createBaseVNode("li", {
                    key: index,
                    innerHTML: text
                  }, null, 8, _hoisted_35);
                }), 64))
              ])
            ])
          ], 512), [
            [vShow, "sidebar" === selected.value]
          ])
        ])
      ]);
    };
  }
};
const video_gutenberg = "https://www.youtube.com/embed/98d-5VBPLsw";
const video_shortcode = "https://www.youtube.com/embed/SHnx6GjPsr8";
const video_sidebar = "https://www.youtube.com/embed/UIIFOK9QhR4";
const _sfc_main$1 = {
  __name: "monsterinsights-WidgetPlacement",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        video_gutenberg,
        video_shortcode,
        video_sidebar
      });
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-settings-content-pp-widget" };
const _hoisted_2 = {
  key: 2,
  class: "monsterinsights-separator"
};
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = ["textContent"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = {
  key: 0,
  class: "monsterinsights-input-text-small"
};
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["innerHTML"];
const _sfc_main = {
  __name: "PopularPostsWidget",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const settingsStore = useSettingsStore();
    const popularPostsStore = usePopularPostsStore();
    const text_choose_theme = __("Choose Theme", "google-analytics-for-wordpress");
    const text_behavior = __("Behavior", "google-analytics-for-wordpress");
    const text_widget_styling = __("Widget Styling", "google-analytics-for-wordpress");
    const text_widget_styling_desc = __(
      "Choose how you want to determine the colors, font sizes and spacing of the widget.",
      "google-analytics-for-wordpress"
    );
    const text_sort_by = __("Sort By", "google-analytics-for-wordpress");
    const text_sort_by_description = __(
      "Choose how you'd like the widget to determine your popular posts.",
      "google-analytics-for-wordpress"
    );
    const text_display_title = __("Display Title", "google-analytics-for-wordpress");
    const text_widget_title = __("Widget Title", "google-analytics-for-wordpress");
    const text_widget_title_desc = __(
      "Title your widget and set its display preferences.",
      "google-analytics-for-wordpress"
    );
    const text_post_type = __("Include in Post Types", "google-analytics-for-wordpress");
    const text_exclude_posts = __("Exclude from specific posts", "google-analytics-for-wordpress");
    const text_post_type_description = sprintf(
      __("Choose which Post Types the widget %1$sWILL%2$s be placed.", "google-analytics-for-wordpress"),
      "<b>",
      "</b>"
    );
    const text_exclude_posts_description = sprintf(
      __("Choose from which Posts the widget %1$sWILL NOT%2$s be placed.", "google-analytics-for-wordpress"),
      "<b>",
      "</b>"
    );
    const text_loading_themes = __("Loading Themes", "google-analytics-for-wordpress");
    const styling_options = [
      {
        value: "0",
        label: sprintf(
          __("Default Styles %1$s- As seen above.%2$s", "google-analytics-for-wordpress"),
          "<small>",
          "</small>"
        )
      },
      {
        value: "no_styles",
        label: sprintf(
          __("No Styles %1$s- Use your own CSS.%2$s", "google-analytics-for-wordpress"),
          "<small>",
          "</small>"
        )
      }
    ];
    const sort_options = [
      {
        value: "comments",
        label: sprintf(
          __(
            "Comments %1$s- Randomly rotate your most commented on posts from the past 30 days.%2$s",
            "google-analytics-for-wordpress"
          ),
          "<small>",
          "</small>"
        )
      },
      {
        value: "sharedcount",
        label: sprintf(
          __(
            "SharedCount %1$s- Connect with your SharedCount account to determine popular posts by share count.%2$s",
            "google-analytics-for-wordpress"
          ),
          "<small>",
          "</small>"
        )
      },
      {
        value: "curated",
        label: sprintf(
          __(
            "Curated %1$s- Choose the posts which will randomly rotate in the widget.%2$s",
            "google-analytics-for-wordpress"
          ),
          "<small>",
          "</small>"
        )
      }
    ];
    const theme_options = computed(() => popularPostsStore.themes_widget);
    const themeReady = computed(() => Object.hasOwn(theme_options.value, "alpha"));
    onMounted(() => {
      if (!Object.hasOwn(theme_options.value, "alpha")) {
        popularPostsStore.fetchThemes("widget");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$e, {
          title: unref(text_choose_theme),
          icon: "monstericon-search"
        }, {
          default: withCtx(() => [
            themeReady.value ? (openBlock(), createBlock(_sfc_main$i, {
              key: 0,
              options: theme_options.value,
              name: "popular_posts_widget_theme",
              type: "widget"
            }, null, 8, ["options"])) : (openBlock(), createBlock(LoadingSpinnerInline, {
              key: 1,
              text: unref(text_loading_themes)
            }, null, 8, ["text"])),
            themeReady.value ? (openBlock(), createElementBlock("div", _hoisted_2)) : createCommentVNode("", true),
            themeReady.value ? (openBlock(), createBlock(_sfc_main$8, {
              key: 3,
              name: "popular_posts_widget_theme",
              themes: theme_options.value
            }, null, 8, ["themes"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title"]),
        themeReady.value ? (openBlock(), createBlock(_sfc_main$6, {
          key: 0,
          themes: theme_options.value,
          name: "popular_posts_widget_theme"
        }, null, 8, ["themes"])) : createCommentVNode("", true),
        createVNode(_sfc_main$e, {
          title: unref(text_behavior),
          icon: "monstericon-mouse-pointer"
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_widget_styling))
              }, null, 8, _hoisted_3),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_widget_styling_desc))
              }, null, 8, _hoisted_4)
            ]),
            createVNode(_sfc_main$c, {
              auth_disabled: false,
              options: styling_options,
              name: "popular_posts_widget_styling"
            }),
            _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_sort_by))
              }, null, 8, _hoisted_5),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_sort_by_description))
              }, null, 8, _hoisted_6)
            ]),
            createVNode(_sfc_main$c, {
              auth_disabled: false,
              options: sort_options,
              name: "popular_posts_widget_sort"
            }, {
              sharedcount: withCtx(() => [
                createVNode(_sfc_main$k)
              ]),
              curated: withCtx(() => [
                createVNode(_sfc_main$j, { name: "popular_posts_widget_curated" })
              ]),
              _: 1
            }),
            _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$3, { name: "popular_posts_widget_ga" }),
            _cache[6] || (_cache[6] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_widget_title))
              }, null, 8, _hoisted_7),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_widget_title_desc))
              }, null, 8, _hoisted_8)
            ]),
            createVNode(_sfc_main$d, {
              auth_disabled: false,
              name: "popular_posts_widget_title",
              label: unref(text_display_title)
            }, null, 8, ["label"]),
            unref(settingsStore).getSettings["popular_posts_widget_title"] ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createVNode(SettingsInputText, {
                auth_disabled: false,
                name: "popular_posts_widget_title_text"
              })
            ])) : createCommentVNode("", true),
            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$l, {
              name: "popular_posts_widget_post_types",
              label: unref(text_post_type),
              description: unref(text_post_type_description)
            }, null, 8, ["label", "description"]),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_exclude_posts))
              }, null, 8, _hoisted_10),
              _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", { innerHTML: unref(text_exclude_posts_description) }, null, 8, _hoisted_11)
            ]),
            createVNode(_sfc_main$j, { name: "popular_posts_widget_exclude_posts" }),
            createVNode(_sfc_main$5),
            createVNode(_sfc_main$1)
          ]),
          _: 1
        }, 8, ["title"])
      ]);
    };
  }
};
export {
  _sfc_main as default
};
