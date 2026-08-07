import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as usePopularPostsStore, _ as _sfc_main$7, P as PopularPostsThemeLicense, a as _sfc_main$8, b as _sfc_main$9, d as debounce, c as _sfc_main$c, e as _sfc_main$d, f as _sfc_main$g, g as _sfc_main$h, h as _sfc_main$i } from "./PopularPostsVideoModal-DwXBhNEd.js";
import { _ as _sfc_main$e } from "./SettingsBlock-DC9CU9Pg.js";
import { _ as _sfc_main$f } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { S as SettingsInputNumber } from "./SettingsInputNumber-WTq-M48c.js";
import { L as LoadingSpinnerInline } from "./LoadingSpinnerInline-B4kX5NYb.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, u as unref, i as normalizeClass, s as createCommentVNode, n as normalizeStyle, F as Fragment, f as renderList, E as createBlock, m as computed, b as createVNode, D as withCtx, j as ref, y as onMounted } from "./toastStore-CRCNwITM.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$b } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { d as _sfc_main$a } from "./monsterinsights-Lite-uQE5cjXl.js";
import { n as getUpgradeUrl } from "./ajax-B_XS1gT5.js";
import "./popularPosts-YBcx2bWk.js";
import "./SettingsInputText-DEkJNBzd.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./vue-multiselect.esm-DVzdjNub.js";
import "./SettingsInputSelect-CeXJ757T.js";
import "./Modal-B9mMTzc_.js";
import "./default-i18n-KrIlCc2E.js";
import "./useNotices-BpzNuZJ7.js";
import "./TheAppHeader-DEdY-dez.js";
import "./license-Boh3_ZVs.js";
const _hoisted_1$5 = { class: "monsterinsights-pp-inline-theme-preview" };
const _hoisted_2$4 = ["textContent"];
const _hoisted_3$4 = ["textContent"];
const _hoisted_4$3 = {
  key: 0,
  class: "monsterinsights-inline-popular-posts-image"
};
const _hoisted_5$3 = { class: "monsterinsights-inline-popular-posts-text" };
const _hoisted_6$3 = {
  width: "14",
  height: "19",
  viewBox: "0 0 14 19",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_7$3 = ["fill"];
const _hoisted_8$3 = ["textContent"];
const _hoisted_9$3 = ["textContent"];
const _hoisted_10$3 = {
  key: 4,
  class: "monsterinsights-inline-popular-posts-list"
};
const _hoisted_11$3 = ["textContent"];
const _hoisted_12$3 = ["textContent"];
const _sfc_main$6 = {
  __name: "PopularPostsThemePreview",
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
    const text_dummy_p_1 = __(
      "Sartorial taxidermy venmo you probably haven't heard of them, tofu fingerstache ethical pickled hella ramps vice snackwave seitan typewriter tofu.",
      "google-analytics-for-wordpress"
    );
    const text_dummy_p_2 = __(
      "Austin typewriter heirloom distillery twee migas wayfarers. Fingerstache master cleanse quinoa humblebrag, iPhone taxidermy snackwave seitan typewriter tofu organic affogato kitsch. Artisan",
      "google-analytics-for-wordpress"
    );
    const preview = computed(() => popularPostsStore.theme_preview_inline);
    const active = computed(() => {
      return preview.value ? preview.value : settingsStore.getSettings[props.name];
    });
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
      () => "monsterinsights-inline-popular-posts-widget monsterinsights-inline-popular-posts-" + active.value
    );
    const themeAvailable = computed(
      () => props.themes[active.value] ? PopularPostsThemeLicense.isThemeAvailable(props.themes[active.value].level) : false
    );
    const renderCssClass = computed(() => {
      let cls = "monsterinsights-pp-inline-theme-preview-render";
      if (!themeAvailable.value) {
        cls += " monsterinsights-pp-blurred";
      }
      return cls;
    });
    function getThemeOption(object, key) {
      const storedKey = props.name + "_" + object + "_" + key;
      if (!themeOptions.value || !themeOptions.value[object]) return "";
      if (typeof themeOptions.value[object][key] === "undefined") {
        return "";
      }
      const settings = settingsStore.getSettings;
      if (settings[storedKey] && "" !== settings[storedKey]) {
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
        if ("" === value) {
          continue;
        }
        const cssProp = cssProps[i];
        if ("fontSize" === cssProp) {
          value += "px";
        }
        styles[cssProp] = value;
      }
      return styles;
    }
    function getImageClass(img) {
      const normalized = img.replace(".jpg", "").replace(".png", "");
      return "monsterinsights-bg-img monsterinsights-pp-" + normalized;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createBaseVNode("h3", {
          textContent: toDisplayString(unref(text_theme_preview))
        }, null, 8, _hoisted_2$4),
        themeOptions.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(renderCssClass.value)
        }, [
          createBaseVNode("p", {
            textContent: toDisplayString(unref(text_dummy_p_1))
          }, null, 8, _hoisted_3$4),
          createBaseVNode("div", {
            class: normalizeClass(themeClass.value),
            style: normalizeStyle(objectStyle("background", ["color", "border"], ["background", "borderColor"]))
          }, [
            themeOptions.value.image ? (openBlock(), createElementBlock("div", _hoisted_4$3, [
              createBaseVNode("div", {
                class: normalizeClass(getImageClass(themeOptions.value.image))
              }, null, 2)
            ])) : createCommentVNode("", true),
            createBaseVNode("div", _hoisted_5$3, [
              themeOptions.value.icon ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "monsterinsights-inline-popular-posts-icon",
                style: normalizeStyle(objectStyle("icon", ["background"], ["backgroundColor"]))
              }, [
                (openBlock(), createElementBlock("svg", _hoisted_6$3, [
                  createBaseVNode("path", {
                    d: "M7.875 0.899463C7.875 1.59183 8.0816 2.24711 8.49479 2.8653C8.93229 3.48349 9.44271 4.06458 10.026 4.60859C10.6337 5.15259 11.2292 5.73369 11.8125 6.35188C12.4201 6.97007 12.9306 7.76135 13.3438 8.72572C13.7812 9.66537 14 10.7163 14 11.8785C14 13.832 13.3073 15.5011 11.9219 16.8858C10.5608 18.2953 8.92014 19 7 19C5.07986 19 3.42708 18.2953 2.04167 16.8858C0.680556 15.5011 0 13.832 0 11.8785C0 9.94973 0.668403 8.28062 2.00521 6.87116C2.27257 6.57443 2.58854 6.50024 2.95312 6.64861C3.31771 6.79697 3.5 7.08134 3.5 7.50171V10.6545C3.5 11.3221 3.71875 11.8908 4.15625 12.3607C4.61806 12.8305 5.16493 13.0654 5.79688 13.0654C6.45312 13.0654 7.01215 12.8428 7.47396 12.3978C7.93576 11.9279 8.16667 11.3592 8.16667 10.6916C8.16667 10.2712 8.04514 9.86318 7.80208 9.46754C7.58333 9.0719 7.31597 8.71336 7 8.3919C6.68403 8.07044 6.34375 7.73662 5.97917 7.39043C5.63889 7.04425 5.34722 6.66097 5.10417 6.2406C4.88542 5.82024 4.73958 5.35041 4.66667 4.83114C4.59375 4.31186 4.67882 3.68131 4.92188 2.93948C5.18924 2.17293 5.63889 1.33219 6.27083 0.417277C6.51389 0.0463641 6.84201 -0.0772735 7.25521 0.0463641C7.6684 0.170002 7.875 0.454368 7.875 0.899463Z",
                    fill: getThemeOption("icon", "color")
                  }, null, 8, _hoisted_7$3)
                ]))
              ], 4)) : createCommentVNode("", true),
              themeOptions.value.label ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: "monsterinsights-inline-popular-posts-label",
                style: normalizeStyle(objectStyle("label", ["color", "background"], ["color", "background"])),
                textContent: toDisplayString(getThemeOption("label", "text"))
              }, null, 12, _hoisted_8$3)) : createCommentVNode("", true),
              themeOptions.value.border ? (openBlock(), createElementBlock("span", {
                key: 2,
                class: "monsterinsights-inline-popular-posts-border",
                style: normalizeStyle(objectStyle("border", ["color"], ["borderColor"]))
              }, null, 4)) : createCommentVNode("", true),
              themeOptions.value.title && !themeOptions.value.list ? (openBlock(), createElementBlock("a", {
                key: 3,
                class: "monsterinsights-inline-popular-posts-title",
                href: "#",
                style: normalizeStyle(objectStyle("title", ["color", "size"], ["color", "fontSize"])),
                textContent: toDisplayString(getThemeOption("title", "text"))
              }, null, 12, _hoisted_9$3)) : createCommentVNode("", true),
              themeList.value ? (openBlock(), createElementBlock("ul", _hoisted_10$3, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(themeList.value, (item, index) => {
                  return openBlock(), createElementBlock("li", {
                    key: index,
                    style: normalizeStyle(objectStyle("title", ["color", "size"], ["color", "fontSize"])),
                    textContent: toDisplayString(item)
                  }, null, 12, _hoisted_11$3);
                }), 128))
              ])) : createCommentVNode("", true),
              themeOptions.value.border && themeOptions.value.border.color2 ? (openBlock(), createElementBlock("span", {
                key: 5,
                class: "monsterinsights-inline-popular-posts-border-2",
                style: normalizeStyle(objectStyle("border", ["color2"], ["borderColor"]))
              }, null, 4)) : createCommentVNode("", true)
            ])
          ], 6),
          createBaseVNode("p", {
            textContent: toDisplayString(unref(text_dummy_p_2))
          }, null, 8, _hoisted_12$3)
        ], 2)) : createCommentVNode("", true),
        !themeAvailable.value ? (openBlock(), createBlock(_sfc_main$7, { key: 1 })) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$4 = { class: "monsterinsights-pp-theme-controls-holder" };
const _hoisted_2$3 = {
  key: 0,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-title"
};
const _hoisted_3$3 = ["textContent"];
const _hoisted_4$2 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_5$2 = { key: 0 };
const _hoisted_6$2 = ["textContent"];
const _hoisted_7$2 = { key: 1 };
const _hoisted_8$2 = ["textContent"];
const _hoisted_9$2 = {
  key: 1,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-label"
};
const _hoisted_10$2 = ["textContent"];
const _hoisted_11$2 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_12$2 = { key: 0 };
const _hoisted_13$2 = ["textContent"];
const _hoisted_14$1 = { class: "monsterinsights-pp-color-input-inline" };
const _hoisted_15$1 = ["value"];
const _hoisted_16$1 = { key: 1 };
const _hoisted_17$1 = ["textContent"];
const _hoisted_18$1 = {
  key: 2,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-icon"
};
const _hoisted_19$1 = ["textContent"];
const _hoisted_20$1 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_21$1 = { key: 0 };
const _hoisted_22 = ["textContent"];
const _hoisted_23 = { key: 1 };
const _hoisted_24 = ["textContent"];
const _hoisted_25 = {
  key: 3,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-background"
};
const _hoisted_26 = ["textContent"];
const _hoisted_27 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_28 = { key: 0 };
const _hoisted_29 = ["textContent"];
const _hoisted_30 = { key: 1 };
const _hoisted_31 = ["textContent"];
const _hoisted_32 = {
  key: 4,
  class: "monsterinsights-pp-controls monsterinsights-pp-controls-border"
};
const _hoisted_33 = ["textContent"];
const _hoisted_34 = { class: "monsterinsights-pp-controls-inputs" };
const _hoisted_35 = { key: 0 };
const _hoisted_36 = ["textContent"];
const _hoisted_37 = { key: 1 };
const _hoisted_38 = ["textContent"];
const _sfc_main$5 = {
  __name: "PopularPostsThemeCustomizeControls",
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
    const text_color = __("Color", "google-analytics-for-wordpress");
    const text_size = __("Size", "google-analytics-for-wordpress");
    const text_title = __("Title", "google-analytics-for-wordpress");
    const text_label = __("Label", "google-analytics-for-wordpress");
    const text_background = __("Background", "google-analytics-for-wordpress");
    const text_border = __("Border", "google-analytics-for-wordpress");
    const text_icon = __("Icon", "google-analytics-for-wordpress");
    const preview = computed(() => popularPostsStore.theme_preview_inline);
    const active = computed(() => {
      return preview.value ? preview.value : settingsStore.getSettings[props.name];
    });
    const themeOptions = computed(() => {
      if (active.value && props.themes[active.value]) {
        return props.themes[active.value].styles;
      }
      return {};
    });
    const themeAvailable = computed(
      () => props.themes[active.value] ? PopularPostsThemeLicense.isThemeAvailable(props.themes[active.value].level) : false
    );
    const renderCssClass = computed(() => {
      let cls = "monsterinsights-pp-inline-theme-controls";
      if (!themeAvailable.value) {
        cls += " monsterinsights-pp-blurred";
      }
      return cls;
    });
    function getThemeOption(object, key) {
      if (!themeOptions.value[object] || !themeOptions.value[object][key]) return "";
      return themeOptions.value[object][key].default ? themeOptions.value[object][key].default : themeOptions.value[object][key];
    }
    async function saveSetting(object, key, value) {
      const data = {
        type: "inline",
        theme: active.value,
        object,
        key,
        value
      };
      savingToast({});
      try {
        await popularPostsStore.updateThemeSetting(data);
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: normalizeClass(renderCssClass.value)
        }, [
          themeOptions.value.title ? (openBlock(), createElementBlock("div", _hoisted_2$3, [
            createBaseVNode("label", {
              class: "monsterinsights-pp-controls-description",
              textContent: toDisplayString(unref(text_title))
            }, null, 8, _hoisted_3$3),
            createBaseVNode("div", _hoisted_4$2, [
              themeOptions.value.title.color ? (openBlock(), createElementBlock("label", _hoisted_5$2, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_color))
                }, null, 8, _hoisted_6$2),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("title", "color"),
                  onChangeColor: _cache[0] || (_cache[0] = (c) => unref(updateColor)("title", "color", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true),
              themeOptions.value.title.size ? (openBlock(), createElementBlock("label", _hoisted_7$2, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_size))
                }, null, 8, _hoisted_8$2),
                createVNode(_sfc_main$9, {
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
              themeOptions.value.label.color ? (openBlock(), createElementBlock("label", _hoisted_12$2, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_color))
                }, null, 8, _hoisted_13$2),
                createBaseVNode("span", _hoisted_14$1, [
                  createVNode(_sfc_main$8, {
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
                createVNode(_sfc_main$8, {
                  color: getThemeOption("label", "background"),
                  onChangeColor: _cache[4] || (_cache[4] = (c) => unref(updateColor)("label", "background", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          themeOptions.value.icon ? (openBlock(), createElementBlock("div", _hoisted_18$1, [
            createBaseVNode("label", {
              class: "monsterinsights-pp-controls-description",
              textContent: toDisplayString(unref(text_icon))
            }, null, 8, _hoisted_19$1),
            createBaseVNode("div", _hoisted_20$1, [
              themeOptions.value.icon.color ? (openBlock(), createElementBlock("label", _hoisted_21$1, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_color))
                }, null, 8, _hoisted_22),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("icon", "color"),
                  onChangeColor: _cache[5] || (_cache[5] = (c) => unref(updateColor)("icon", "color", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true),
              themeOptions.value.icon.background ? (openBlock(), createElementBlock("label", _hoisted_23, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_background))
                }, null, 8, _hoisted_24),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("icon", "background"),
                  onChangeColor: _cache[6] || (_cache[6] = (c) => unref(updateColor)("icon", "background", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          themeOptions.value.background ? (openBlock(), createElementBlock("div", _hoisted_25, [
            createBaseVNode("label", {
              class: "monsterinsights-pp-controls-description",
              textContent: toDisplayString(unref(text_background))
            }, null, 8, _hoisted_26),
            createBaseVNode("div", _hoisted_27, [
              themeOptions.value.background.color ? (openBlock(), createElementBlock("label", _hoisted_28, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_color))
                }, null, 8, _hoisted_29),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("background", "color"),
                  onChangeColor: _cache[7] || (_cache[7] = (c) => unref(updateColor)("background", "color", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true),
              themeOptions.value.background.border ? (openBlock(), createElementBlock("label", _hoisted_30, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(unref(text_border))
                }, null, 8, _hoisted_31),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("background", "border"),
                  onChangeColor: _cache[8] || (_cache[8] = (c) => unref(updateColor)("background", "border", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true),
          themeOptions.value.border ? (openBlock(), createElementBlock("div", _hoisted_32, [
            createBaseVNode("label", {
              class: "monsterinsights-pp-controls-description",
              textContent: toDisplayString(unref(text_border))
            }, null, 8, _hoisted_33),
            createBaseVNode("div", _hoisted_34, [
              themeOptions.value.border.color ? (openBlock(), createElementBlock("label", _hoisted_35, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(themeOptions.value.border.color.label ? themeOptions.value.border.color.label : unref(text_color))
                }, null, 8, _hoisted_36),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("border", "color"),
                  onChangeColor: _cache[9] || (_cache[9] = (c) => unref(updateColor)("border", "color", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true),
              themeOptions.value.border.color2 ? (openBlock(), createElementBlock("label", _hoisted_37, [
                createBaseVNode("span", {
                  class: "monsterinsights-pp-control-label",
                  textContent: toDisplayString(themeOptions.value.border.color2.label ? themeOptions.value.border.color2.label : unref(text_color))
                }, null, 8, _hoisted_38),
                createVNode(_sfc_main$8, {
                  color: getThemeOption("border", "color2"),
                  onChangeColor: _cache[10] || (_cache[10] = (c) => unref(updateColor)("border", "color2", c))
                }, null, 8, ["color"])
              ])) : createCommentVNode("", true)
            ])
          ])) : createCommentVNode("", true)
        ], 2),
        !themeAvailable.value ? (openBlock(), createBlock(_sfc_main$7, { key: 0 })) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "monsterinsights-dark" };
const _hoisted_2$2 = ["textContent"];
const _hoisted_3$2 = ["innerHTML"];
const _sfc_main$4 = {
  __name: "monsterinsights-PopularPostsGaInput-Lite",
  props: {
    name: String
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const text_add_top_5_ga = __("Add Top 5 Posts from Google Analytics", "google-analytics-for-wordpress");
    const text_add_top_5_ga_tooltip = __(
      "To load the top posts from Google Analytics, you must enable the Custom Dimensions addon and set up the Post Type custom dimension in the MonsterInsights settings.",
      "google-analytics-for-wordpress"
    );
    const text_needs_pro = __("Pro version is required", "google-analytics-for-wordpress");
    const text_automated = __("Automated + Curated", "google-analytics-for-wordpress");
    const text_automated_description = sprintf(
      __(
        "Automatically add the top 5 Posts from the past 30 days to your Curated list of Posts using Custom Dimensions (Pro version required. %1$sUpgrade now%2$s).",
        "google-analytics-for-wordpress"
      ),
      `<a href="${getUpgradeUrl("popular-posts", "ga-sorting")}" target="_blank" rel="noopener">`,
      "</a>"
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("p", null, [
          createBaseVNode("span", _hoisted_1$3, [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_automated))
            }, null, 8, _hoisted_2$2),
            createVNode(_sfc_main$a)
          ]),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", { innerHTML: unref(text_automated_description) }, null, 8, _hoisted_3$2)
        ]),
        createVNode(_sfc_main$b, {
          faux: true,
          default: false,
          faux_tooltip_off: unref(text_needs_pro),
          label: unref(text_add_top_5_ga),
          tooltip: unref(text_add_top_5_ga_tooltip)
        }, null, 8, ["faux_tooltip_off", "label", "tooltip"])
      ]);
    };
  }
};
const _hoisted_1$2 = ["textContent"];
const _sfc_main$3 = {
  __name: "monsterinsights-PopularPostsMultipleEntries-Lite",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_multiple_entries = __("Multiple Entries", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$b, {
        faux: true,
        default: false
      }, {
        label: withCtx(() => [
          createBaseVNode("span", {
            textContent: toDisplayString(unref(text_multiple_entries))
          }, null, 8, _hoisted_1$2),
          createVNode(_sfc_main$a)
        ]),
        _: 1
      });
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-pp-manual-placement" };
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = ["textContent"];
const _hoisted_4$1 = { class: "monsterinsights-pp-manual-placement-options" };
const _hoisted_5$1 = ["onClick"];
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = ["textContent"];
const _hoisted_8$1 = {
  key: 0,
  class: "monsterinsights-pp-manual-placement-content"
};
const _hoisted_9$1 = ["textContent"];
const _hoisted_10$1 = ["textContent"];
const _hoisted_11$1 = { class: "monsterinsights-pp-manual-placement-content-columns" };
const _hoisted_12$1 = { class: "monsterinsights-pp-manual-placement-content-steps" };
const _hoisted_13$1 = ["innerHTML"];
const _hoisted_14 = {
  key: 1,
  class: "monsterinsights-pp-manual-placement-content"
};
const _hoisted_15 = ["textContent"];
const _hoisted_16 = ["textContent"];
const _hoisted_17 = { class: "monsterinsights-pp-manual-placement-content-columns" };
const _hoisted_18 = { class: "monsterinsights-pp-manual-placement-content-steps" };
const _hoisted_19 = ["textContent"];
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _sfc_main$2 = {
  __name: "PopularPostsInlinePlacement",
  props: {
    video_gutenberg: String,
    video_shortcode: String
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const selected = ref("gutenberg");
    const options = {
      gutenberg: {
        icon: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 36.0001C28.8366 36.0001 36 28.8367 36 20.0001C36 11.1636 28.8366 4.00012 20 4.00012C11.1634 4.00012 4 11.1636 4 20.0001C4 28.8367 11.1634 36.0001 20 36.0001ZM20 40.0001C31.0457 40.0001 40 31.0458 40 20.0001C40 8.95443 31.0457 0.00012207 20 0.00012207C8.9543 0.00012207 0 8.95443 0 20.0001C0 31.0458 8.9543 40.0001 20 40.0001ZM19.9997 11.6669C19.0793 11.6669 18.3331 12.4131 18.3331 13.3336V18.3336H13.334C12.4135 18.3336 11.6673 19.0798 11.6673 20.0002C11.6673 20.9207 12.4135 21.6669 13.334 21.6669H18.3331V26.6669C18.3331 27.5874 19.0793 28.3336 19.9997 28.3336C20.9202 28.3336 21.6664 27.5874 21.6664 26.6669V21.6669H26.6673C27.5878 21.6669 28.334 20.9207 28.334 20.0002C28.334 19.0798 27.5878 18.3336 26.6673 18.3336H21.6664V13.3336C21.6664 12.4131 20.9202 11.6669 19.9997 11.6669Z" fill="#338EEF"/></svg>',
        name: "Gutenberg"
      },
      shortcode: {
        icon: '<svg width="41" height="24" viewBox="0 0 41 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.63001 23.0821C10.8947 24.3062 12.9451 24.3062 14.2097 23.0821C15.4744 21.858 15.4744 19.8733 14.2097 18.6492L7.34018 11.9999L14.2094 5.35106C15.474 4.12696 15.474 2.1423 14.2094 0.918198C12.9447 -0.305904 10.8943 -0.305903 9.62962 0.918198L2.76045 7.56708L2.76041 7.56705L1.28645 8.99374C-0.428818 10.654 -0.428816 13.3458 1.28645 15.0061L9.63001 23.0821ZM30.4005 23.0821C29.1359 24.3062 27.0855 24.3062 25.8208 23.0821C24.5561 21.858 24.5561 19.8733 25.8208 18.6492L32.6904 11.9999L25.8212 5.35106C24.5565 4.12696 24.5565 2.1423 25.8212 0.918198C27.0858 -0.305904 29.1363 -0.305903 30.4009 0.918198L37.2701 7.56708L37.2701 7.56705L38.7441 8.99374C40.4594 10.654 40.4594 13.3458 38.7441 15.0061L30.4005 23.0821Z" fill="#338EEF"/></svg>',
        name: "Shortcode"
      }
    };
    const text_display_method = __("Display Method", "google-analytics-for-wordpress");
    const text_display_method_desc = __(
      "There are two ways to manual include the widget in your posts.",
      "google-analytics-for-wordpress"
    );
    const text_gutenberg_title = __("Using the Gutenberg Block", "google-analytics-for-wordpress");
    const text_shortcode_title = __("Using the Shortcode", "google-analytics-for-wordpress");
    const text_gutenberg_desc = __(
      "Learn how to insert the widget using Gutenberg blocks.",
      "google-analytics-for-wordpress"
    );
    const text_shortcode_desc = __(
      "Learn how to insert the widget using out Shortcode.",
      "google-analytics-for-wordpress"
    );
    const text_gutenberg_video = sprintf(
      // Translators: Placeholders add a bold tag.
      __(
        "%1$sWatch Video%2$s - How to Add the Inline Popular Post widget using Gutenberg",
        "google-analytics-for-wordpress"
      ),
      "<b>",
      "</b>"
    );
    const text_gutenberg_steps = [
      // Translators: Placeholders add a bold tag.
      sprintf(
        __("%1$sStep 1%2$s - Click the “Add Block” icon while editing a Post or Page.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      // Translators: Placeholders add a bold tag.
      sprintf(
        __("%1$sStep 2%2$s - Search for “Inline Popular Posts by MonsterInsights”.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      ),
      // Translators: Placeholders add a bold tag.
      sprintf(
        __("%1$sStep 3%2$s - Style the widget using the Block Settings sidebar.", "google-analytics-for-wordpress"),
        "<b>",
        "</b>"
      )
    ];
    const text_shortcode = __("Shortcode", "google-analytics-for-wordpress");
    const text_shortcode_copy = __(
      "Copy the shortcode and paste it into your Page and/or Post templates or using a shortcode plugin.",
      "google-analytics-for-wordpress"
    );
    const text_copy = __("Copy Shortcode", "google-analytics-for-wordpress");
    const text_shortcode_video = sprintf(
      // Translators: Placeholders add a bold tag.
      __(
        "%1$sWatch Video%2$s - How to Add the Inline Popular Post widget using our Shortcode",
        "google-analytics-for-wordpress"
      ),
      "<b>",
      "</b>"
    );
    function selectorClass(key) {
      let cls = "monsterinsights-pp-manual-placement-option monsterinsights-pp-manual-placement-option-" + key;
      if (key === selected.value) {
        cls += " monsterinsights-pp-manual-placement-option-active";
      }
      return cls;
    }
    function copyToClipboard() {
      document.querySelector("#monsterinsights-shortcode-copy").select();
      document.execCommand("copy");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_display_method))
          }, null, 8, _hoisted_2$1),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", {
            textContent: toDisplayString(unref(text_display_method_desc))
          }, null, 8, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          (openBlock(), createElementBlock(Fragment, null, renderList(options, (option, key) => {
            return createBaseVNode("div", {
              key,
              class: normalizeClass(selectorClass(key)),
              onClick: ($event) => selected.value = key
            }, [
              createBaseVNode("span", {
                class: "monsterinsights-pp-manual-placement-options-icon",
                innerHTML: option.icon
              }, null, 8, _hoisted_6$1),
              createBaseVNode("span", {
                textContent: toDisplayString(option.name)
              }, null, 8, _hoisted_7$1)
            ], 10, _hoisted_5$1);
          }), 64))
        ]),
        _cache[6] || (_cache[6] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        "gutenberg" === selected.value ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
          createBaseVNode("p", null, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              textContent: toDisplayString(unref(text_gutenberg_title))
            }, null, 8, _hoisted_9$1),
            _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_gutenberg_desc))
            }, null, 8, _hoisted_10$1)
          ]),
          createBaseVNode("div", _hoisted_11$1, [
            createVNode(_sfc_main$c, {
              video: __props.video_gutenberg,
              title: unref(text_gutenberg_video)
            }, null, 8, ["video", "title"]),
            createBaseVNode("ul", _hoisted_12$1, [
              (openBlock(), createElementBlock(Fragment, null, renderList(text_gutenberg_steps, (text, index) => {
                return createBaseVNode("li", {
                  key: index,
                  innerHTML: text
                }, null, 8, _hoisted_13$1);
              }), 64))
            ])
          ])
        ])) : createCommentVNode("", true),
        "shortcode" === selected.value ? (openBlock(), createElementBlock("div", _hoisted_14, [
          createBaseVNode("p", null, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              textContent: toDisplayString(unref(text_shortcode_title))
            }, null, 8, _hoisted_15),
            _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_shortcode_desc))
            }, null, 8, _hoisted_16)
          ]),
          createBaseVNode("div", _hoisted_17, [
            createVNode(_sfc_main$c, {
              video: __props.video_shortcode,
              title: unref(text_shortcode_video)
            }, null, 8, ["video", "title"]),
            createBaseVNode("ul", _hoisted_18, [
              createBaseVNode("li", null, [
                createBaseVNode("p", null, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    textContent: toDisplayString(unref(text_shortcode))
                  }, null, 8, _hoisted_19),
                  _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("span", {
                    textContent: toDisplayString(unref(text_shortcode_copy))
                  }, null, 8, _hoisted_20)
                ]),
                _cache[4] || (_cache[4] = createBaseVNode("input", {
                  id: "monsterinsights-shortcode-copy",
                  type: "text",
                  readonly: true,
                  value: "[monsterinsights_popular_posts_inline]"
                }, null, -1)),
                createBaseVNode("button", {
                  class: "monsterinsights-button monsterinsights-button-secondary",
                  onClick: copyToClipboard,
                  textContent: toDisplayString(unref(text_copy))
                }, null, 8, _hoisted_21)
              ])
            ])
          ])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const video_gutenberg = "https://www.youtube.com/embed/E1nS0j2S9n4";
const video_shortcode = "https://www.youtube.com/embed/C_uq7hU_NRc";
const _sfc_main$1 = {
  __name: "monsterinsights-InlinePlacement",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$2, {
        video_gutenberg,
        video_shortcode
      });
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-settings-content monsterinsights-settings-content-pp-inline" };
const _hoisted_2 = ["textContent"];
const _hoisted_3 = ["textContent"];
const _hoisted_4 = ["textContent"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = {
  key: 0,
  class: "monsterinsights-notice-no-posts"
};
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = ["textContent"];
const _hoisted_10 = ["textContent"];
const _hoisted_11 = ["textContent"];
const _hoisted_12 = ["textContent"];
const _hoisted_13 = ["innerHTML"];
const _sfc_main = {
  __name: "PopularPostsInline",
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
    const text_placement = __("Placement", "google-analytics-for-wordpress");
    const text_placement_description = __(
      "Choose how you'd like to place the widget.",
      "google-analytics-for-wordpress"
    );
    const text_insert_after = __("Insert After", "google-analytics-for-wordpress");
    const text_insert_after_description = __(
      "Choose where in the post body the widget will be placed.",
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
    const text_customize_design = __("Customize Design", "google-analytics-for-wordpress");
    const text_loading_themes = __("Loading Themes", "google-analytics-for-wordpress");
    const text_words = __("words", "google-analytics-for-wordpress");
    const text_select_one_post = __(
      "Please select at least one post to display.",
      "google-analytics-for-wordpress"
    );
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
    const placement_options = [
      {
        value: "automatic",
        label: sprintf(
          __(
            "Automatic %1$s- The widget is automatically placed inside the post body.%2$s",
            "google-analytics-for-wordpress"
          ),
          "<small>",
          "</small>"
        )
      },
      {
        value: "manual",
        label: sprintf(
          __(
            "Manual %1$s- Manually place the widget using Gutenberg blocks or using our shortcode.%2$s",
            "google-analytics-for-wordpress"
          ),
          "<small>",
          "</small>"
        )
      }
    ];
    const theme_options = computed(() => popularPostsStore.themes_inline);
    const themeReady = computed(() => Object.hasOwn(theme_options.value, "alpha"));
    const placement_option = computed(() => settingsStore.getSettings["popular_posts_inline_placement"] || "");
    const ga_enabled = computed(() => settingsStore.getSettings["popular_posts_inline_ga"] || false);
    const no_posts_selected = computed(() => {
      const settings = settingsStore.getSettings;
      return !ga_enabled.value && "curated" === settings["popular_posts_inline_sort"] && typeof settings["popular_posts_inline_curated"] !== "undefined" && settings["popular_posts_inline_curated"].length === 0;
    });
    onMounted(() => {
      if (!Object.hasOwn(theme_options.value, "alpha")) {
        popularPostsStore.fetchThemes("inline");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$e, {
          title: unref(text_choose_theme),
          icon: "monstericon-search"
        }, {
          default: withCtx(() => [
            themeReady.value ? (openBlock(), createBlock(_sfc_main$d, {
              key: 0,
              options: theme_options.value,
              name: "popular_posts_inline_theme",
              type: "inline"
            }, null, 8, ["options"])) : (openBlock(), createBlock(LoadingSpinnerInline, {
              key: 1,
              text: unref(text_loading_themes)
            }, null, 8, ["text"])),
            themeReady.value ? (openBlock(), createBlock(_sfc_main$6, {
              key: 2,
              themes: theme_options.value,
              name: "popular_posts_inline_theme"
            }, null, 8, ["themes"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title"]),
        themeReady.value ? (openBlock(), createBlock(_sfc_main$e, {
          key: 0,
          title: unref(text_customize_design),
          icon: "monstericon-eye-far"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$5, {
              name: "popular_posts_inline_theme",
              themes: theme_options.value
            }, null, 8, ["themes"])
          ]),
          _: 1
        }, 8, ["title"])) : createCommentVNode("", true),
        createVNode(_sfc_main$e, {
          title: unref(text_behavior),
          icon: "monstericon-mouse-pointer"
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_widget_styling))
              }, null, 8, _hoisted_2),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_widget_styling_desc))
              }, null, 8, _hoisted_3)
            ]),
            createVNode(_sfc_main$f, {
              auth_disabled: false,
              options: styling_options,
              name: "popular_posts_inline_styling"
            }),
            _cache[8] || (_cache[8] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_sort_by))
              }, null, 8, _hoisted_4),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_sort_by_description))
              }, null, 8, _hoisted_5)
            ]),
            createVNode(_sfc_main$f, {
              auth_disabled: false,
              options: sort_options,
              name: "popular_posts_inline_sort"
            }, {
              sharedcount: withCtx(() => [
                createVNode(_sfc_main$h)
              ]),
              curated: withCtx(() => [
                createVNode(_sfc_main$g, { name: "popular_posts_inline_curated" }),
                no_posts_selected.value ? (openBlock(), createElementBlock("label", _hoisted_6, [
                  createBaseVNode("span", { innerHTML: unref(text_select_one_post) }, null, 8, _hoisted_7)
                ])) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            _cache[9] || (_cache[9] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$4, { name: "popular_posts_inline_ga" }),
            _cache[10] || (_cache[10] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                textContent: toDisplayString(unref(text_placement))
              }, null, 8, _hoisted_8),
              _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("span", {
                textContent: toDisplayString(unref(text_placement_description))
              }, null, 8, _hoisted_9)
            ]),
            createVNode(_sfc_main$f, {
              auth_disabled: false,
              options: placement_options,
              name: "popular_posts_inline_placement"
            }),
            placement_option.value === "automatic" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[5] || (_cache[5] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_insert_after))
                }, null, 8, _hoisted_10),
                _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", {
                  textContent: toDisplayString(unref(text_insert_after_description))
                }, null, 8, _hoisted_11)
              ]),
              createVNode(SettingsInputNumber, {
                auth_disabled: false,
                name: "popular_posts_inline_after_count",
                min: 0,
                inline_desc: unref(text_words)
              }, null, 8, ["inline_desc"]),
              _cache[6] || (_cache[6] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createVNode(_sfc_main$3),
              _cache[7] || (_cache[7] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createVNode(_sfc_main$i, {
                name: "popular_posts_inline_post_types",
                label: unref(text_post_type),
                description: unref(text_post_type_description)
              }, null, 8, ["label", "description"]),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  textContent: toDisplayString(unref(text_exclude_posts))
                }, null, 8, _hoisted_12),
                _cache[4] || (_cache[4] = createBaseVNode("br", null, null, -1)),
                createBaseVNode("span", { innerHTML: unref(text_exclude_posts_description) }, null, 8, _hoisted_13)
              ]),
              createVNode(_sfc_main$g, { name: "popular_posts_inline_exclude_posts" })
            ], 64)) : createCommentVNode("", true),
            placement_option.value === "manual" ? (openBlock(), createBlock(_sfc_main$1, { key: 1 })) : createCommentVNode("", true)
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
