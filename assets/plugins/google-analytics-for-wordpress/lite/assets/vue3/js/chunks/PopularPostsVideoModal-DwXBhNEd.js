import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { l as defineStore, j as ref, m as computed, C as watch, y as onMounted, J as onUnmounted, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, f as renderList, i as normalizeClass, t as toDisplayString, s as createCommentVNode, x as nextTick, u as unref, X as defineComponent, L as reactive, aI as tryOnMounted, aJ as whenever, aK as useClipboard, aL as useDebounceFn, aM as useLocalStorage, I as inject, aC as getCurrentInstance, b as createVNode, r as resolveComponent, E as createBlock, D as withCtx, a5 as resolveDynamicComponent, ay as mergeProps, K as renderSlot, n as normalizeStyle, w as withDirectives, ax as vShow, Q as Teleport, a3 as useSlots, aN as onClickOutside, v as vModelText, A as createTextVNode, aO as pushScopeId, aP as popScopeId, M as provide, z as onBeforeUnmount, B as withModifiers } from "./toastStore-CRCNwITM.js";
import { f as fetchThemes, u as updateThemeSetting, s as sharedcountGetIndexProgress, a as sharedcountStartIndexing, g as getPosts, b as getPostTypes } from "./popularPosts-YBcx2bWk.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { n as getUpgradeUrl, o as getUrl } from "./ajax-B_XS1gT5.js";
import { S as SettingsInputText } from "./SettingsInputText-DEkJNBzd.js";
import { s as script } from "./vue-multiselect.esm-DVzdjNub.js";
import { S as SettingsInputSelect } from "./SettingsInputSelect-CeXJ757T.js";
import { _ as _sfc_main$8 } from "./Modal-B9mMTzc_.js";
const usePopularPostsStore = defineStore("popularPosts", () => {
  const themes_inline = ref({});
  const themes_widget = ref({});
  const themes_products = ref({});
  const theme_preview_inline = ref("");
  const theme_preview_widget = ref("");
  const theme_preview_products = ref("");
  const getThemes = (type) => computed(() => {
    if (type === "widget") {
      return themes_widget.value;
    }
    if (type === "products") {
      return themes_products.value;
    }
    return themes_inline.value;
  });
  const getThemePreview = (type) => computed(() => {
    if (type === "widget") {
      return theme_preview_widget.value;
    }
    if (type === "products") {
      return theme_preview_products.value;
    }
    return theme_preview_inline.value;
  });
  function _themesRef(type) {
    if (type === "widget") {
      return themes_widget;
    }
    if (type === "products") {
      return themes_products;
    }
    return themes_inline;
  }
  function _previewRef(type) {
    if (type === "widget") {
      return theme_preview_widget;
    }
    if (type === "products") {
      return theme_preview_products;
    }
    return theme_preview_inline;
  }
  async function fetchThemes$1(type = "inline") {
    try {
      const data = await fetchThemes(type);
      if (data?.themes) {
        _themesRef(type).value = data.themes;
      }
    } catch (error) {
      console.error(error);
    }
  }
  function updatePreview({ type, key }) {
    if (type && typeof key !== "undefined") {
      _previewRef(type).value = key;
    }
  }
  async function updateThemeSetting$1(payload) {
    const { type, theme, object, key, value } = payload;
    if (type && theme && object && key && value) {
      const mapRef = _themesRef(type);
      if (mapRef.value[theme]?.styles?.[object]) {
        mapRef.value[theme].styles[object][key] = value;
      }
    }
    return updateThemeSetting(payload);
  }
  return {
    // state (exposed for direct reactive access if needed)
    themes_inline,
    themes_widget,
    themes_products,
    theme_preview_inline,
    theme_preview_widget,
    theme_preview_products,
    // getters
    getThemes,
    getThemePreview,
    // actions
    fetchThemes: fetchThemes$1,
    updatePreview,
    updateThemeSetting: updateThemeSetting$1
  };
});
const PopularPostsThemeLicense = {
  isThemeAvailable(license) {
    return license === "lite";
  },
  canaccess() {
    return false;
  }
};
const _hoisted_1$6 = { class: "monsterinsights-pp-theme-picker-container" };
const _hoisted_2$5 = ["onClick"];
const _hoisted_3$5 = ["textContent"];
const _hoisted_4$2 = {
  key: 0,
  class: "monsterinsights-pp-theme-active-icon"
};
const _hoisted_5$2 = {
  key: 0,
  class: "monsterinsights-pp-themes-slider-controls"
};
const _hoisted_6$2 = ["disabled"];
const _hoisted_7$1 = ["innerHTML"];
const _hoisted_8$1 = ["disabled"];
const _sfc_main$7 = {
  __name: "PopularPostsThemePicker",
  props: {
    name: String,
    options: Object,
    type: {
      type: String,
      default: "inline"
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const popularPostsStore = usePopularPostsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const sliderContainer = ref(null);
    const slider = ref(null);
    const slidesRef = ref([]);
    const sliderWidth = ref(0);
    const slidesCount = ref(0);
    const slidePage = ref(0);
    const slides = ref([]);
    const preview = computed(() => {
      if (props.type === "widget") return popularPostsStore.theme_preview_widget;
      if (props.type === "products") return popularPostsStore.theme_preview_products;
      return popularPostsStore.theme_preview_inline;
    });
    const active = computed(() => {
      return preview.value ? preview.value : settingsStore.getSettings[props.name];
    });
    const picker_class = computed(
      () => "monsterinsights-pp-theme-picker monsterinsights-pp-theme-picker-" + props.name
    );
    const pageText = computed(() => {
      const page = slidePage.value + 1;
      return sprintf(
        __("%1$sPage %3$s%2$s of %4$s", "google-analytics-for-wordpress"),
        "<b>",
        "</b>",
        page,
        slidesCount.value
      );
    });
    const prevButtonDisabled = computed(() => slidePage.value === 0);
    const nextButtonDisabled = computed(() => slidePage.value === slidesCount.value - 1);
    function themeAvailable(level) {
      return PopularPostsThemeLicense.isThemeAvailable(level);
    }
    function option_class(key) {
      let cls = "monsterinsights-pp-theme-option monsterinsights-pp-theme-" + key;
      if (active.value === key) {
        cls += " monsterinsights-pp-theme-option-selected";
      }
      if (!themeAvailable(props.options[key].level)) {
        cls += " monsterinsights-pp-theme-not-available";
      }
      return cls;
    }
    function updatePreview(key) {
      popularPostsStore.updatePreview({ type: props.type, key });
    }
    async function updateSetting(_e2, key) {
      if (!themeAvailable(props.options[key].level)) {
        updatePreview(key);
        return false;
      }
      updatePreview("");
      savingToast({});
      try {
        await settingsStore.updateSetting({
          name: props.name,
          value: key
        });
        successToast({});
      } catch (_err) {
        errorToast({});
      }
    }
    function calculatePages() {
      if (!sliderContainer.value) {
        return;
      }
      sliderWidth.value = sliderContainer.value.clientWidth;
      const itemWidth = 150;
      const itemsCount = Object.keys(props.options).length;
      const itemsWidthPerSlide = Math.floor(sliderWidth.value / itemWidth);
      slidesCount.value = Math.ceil(itemsCount / 2 / itemsWidthPerSlide);
      const itemsPerSlide = itemsWidthPerSlide * 2;
      const nextSlides = [];
      let slideIndex = 0;
      let itemsInSlide = 0;
      for (const option in props.options) {
        if (typeof nextSlides[slideIndex] === "undefined") {
          nextSlides[slideIndex] = {};
        }
        if (Object.hasOwn(props.options, option)) {
          nextSlides[slideIndex][option] = props.options[option];
          itemsInSlide++;
        }
        if (itemsInSlide === itemsPerSlide) {
          slideIndex++;
          itemsInSlide = 0;
        }
      }
      if (slider.value) {
        slider.value.style.width = sliderWidth.value * slidesCount.value + "px";
      }
      slides.value = nextSlides;
      if (slidePage.value > slides.value.length - 1) {
        slidePage.value = slides.value.length - 1;
      }
    }
    function setSlidesWidth() {
      if (!slidesRef.value) return;
      const list = slidesRef.value;
      for (let i2 = 0; i2 < list.length; i2++) {
        if (list[i2]) {
          list[i2].style.width = sliderWidth.value + "px";
        }
      }
    }
    function setSlidePage() {
      if (!slider.value) return;
      const toMove = slidePage.value * sliderWidth.value;
      slider.value.style.marginLeft = "-" + toMove + "px";
    }
    function nextSlide() {
      if (slidePage.value + 1 < slidesCount.value) {
        slidePage.value++;
        setSlidePage();
      }
    }
    function prevSlide() {
      if (slidePage.value > 0) {
        slidePage.value--;
        setSlidePage();
      }
    }
    watch(slides, async () => {
      await nextTick();
      setSlidesWidth();
      setSlidePage();
    });
    watch(active, (saved) => {
      for (let i2 = 0; i2 < slides.value.length; i2++) {
        for (const slide in slides.value[i2]) {
          if (slide === saved) {
            slidePage.value = i2;
          }
        }
      }
    });
    onMounted(() => {
      calculatePages();
      window.addEventListener("resize", calculatePages);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", calculatePages);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createBaseVNode("div", {
          ref_key: "sliderContainer",
          ref: sliderContainer,
          class: normalizeClass(picker_class.value)
        }, [
          createBaseVNode("div", {
            ref_key: "slider",
            ref: slider,
            class: "monsterinsights-pp-themes-carousel"
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(slides.value, (slide, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                ref_for: true,
                ref_key: "slidesRef",
                ref: slidesRef,
                class: "monsterinsights-pp-themes-slide"
              }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(slide, (option, index) => {
                  return openBlock(), createElementBlock("button", {
                    key: index,
                    class: normalizeClass(option_class(index)),
                    onClick: ($event) => updateSetting($event, index)
                  }, [
                    _cache[1] || (_cache[1] = createBaseVNode("span", { class: "monsterinsights-pp-theme-icon" }, null, -1)),
                    createBaseVNode("span", {
                      class: "monsterinsights-pp-theme-name",
                      textContent: toDisplayString(option.label)
                    }, null, 8, _hoisted_3$5),
                    active.value === index ? (openBlock(), createElementBlock("span", _hoisted_4$2, [..._cache[0] || (_cache[0] = [
                      createBaseVNode("svg", {
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                      }, [
                        createBaseVNode("path", {
                          d: "M20.3322 3.44051C22.6714 5.70276 23.8411 8.45203 23.8411 11.6883C23.8411 14.9246 22.6714 17.6896 20.3322 19.9832C18.025 22.2455 15.2211 23.3766 11.9205 23.3766C8.61995 23.3766 5.80004 22.2455 3.4608 19.9832C1.1536 17.6896 0 14.9246 0 11.6883C0 8.45203 1.1536 5.70276 3.4608 3.44051C5.80004 1.14684 8.61995 0 11.9205 0C15.2211 0 18.025 1.14684 20.3322 3.44051ZM10.5266 17.8624L19.3709 9.19041C19.7554 8.84478 19.7554 8.49916 19.3709 8.15354L18.3134 7.06954C17.9289 6.72392 17.5604 6.72392 17.2079 7.06954L9.99786 14.1391L6.6332 10.84C6.28071 10.4943 5.9122 10.4943 5.52767 10.84L4.4702 11.924C4.08567 12.2696 4.08567 12.6152 4.4702 12.9608L9.46913 17.8624C9.82162 18.2394 10.1741 18.2394 10.5266 17.8624Z",
                          fill: "#338EEF"
                        })
                      ], -1)
                    ])])) : createCommentVNode("", true)
                  ], 10, _hoisted_2$5);
                }), 128))
              ]);
            }), 128))
          ], 512),
          slidesCount.value > 1 ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
            createBaseVNode("button", {
              class: "monsterinsights-pp-themes-slider-button-prev",
              disabled: prevButtonDisabled.value,
              onClick: prevSlide
            }, [..._cache[2] || (_cache[2] = [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "16",
                viewBox: "0 0 10 16",
                fill: "none",
                "aria-hidden": "true"
              }, [
                createBaseVNode("path", {
                  d: "M8.5 14.5L2 8L8.5 1.5",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)
            ])], 8, _hoisted_6$2),
            createBaseVNode("span", { innerHTML: pageText.value }, null, 8, _hoisted_7$1),
            createBaseVNode("button", {
              class: "monsterinsights-pp-themes-slider-button-next",
              disabled: nextButtonDisabled.value,
              onClick: nextSlide
            }, [..._cache[3] || (_cache[3] = [
              createBaseVNode("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "10",
                height: "16",
                viewBox: "0 0 10 16",
                fill: "none",
                "aria-hidden": "true"
              }, [
                createBaseVNode("path", {
                  d: "M1.5 1.5L8 8L1.5 14.5",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })
              ], -1)
            ])], 8, _hoisted_8$1)
          ])) : createCommentVNode("", true)
        ], 2)
      ]);
    };
  }
};
const _hoisted_1$5 = { class: "monsterinsights-pp-upgrade-overlay" };
const _hoisted_2$4 = ["textContent"];
const _hoisted_3$4 = ["href", "textContent"];
const _sfc_main$6 = {
  __name: "PopularPostsUpgradeOverlay",
  props: {
    campaign: {
      type: String,
      default: "overlay"
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const text_unlock = sprintf(
      __("Unlock with %s", "google-analytics-for-wordpress"),
      "MonsterInsights Pro"
    );
    const text_upgrade = __("Upgrade", "google-analytics-for-wordpress");
    const form_upgrade_button_url = getUpgradeUrl("settings-panel", "conversions-forms");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        _cache[0] || (_cache[0] = createBaseVNode("svg", {
          width: "14",
          height: "17",
          viewBox: "0 0 14 17",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          createBaseVNode("path", {
            d: "M12.5 7.05859C12.9167 7.05859 13.2708 7.20443 13.5625 7.49609C13.8542 7.78776 14 8.14193 14 8.55859V14.5586C14 14.9753 13.8542 15.3294 13.5625 15.6211C13.2708 15.9128 12.9167 16.0586 12.5 16.0586H1.5C1.08333 16.0586 0.729167 15.9128 0.4375 15.6211C0.145833 15.3294 0 14.9753 0 14.5586V8.55859C0 8.14193 0.145833 7.78776 0.4375 7.49609C0.729167 7.20443 1.08333 7.05859 1.5 7.05859H2.25V4.80859C2.25 3.49609 2.70833 2.38151 3.625 1.46484C4.5625 0.527344 5.6875 0.0585938 7 0.0585938C8.3125 0.0585938 9.42708 0.527344 10.3438 1.46484C11.2812 2.38151 11.75 3.49609 11.75 4.80859V7.05859H12.5ZM9.25 7.05859V4.80859C9.25 4.18359 9.03125 3.65234 8.59375 3.21484C8.15625 2.77734 7.625 2.55859 7 2.55859C6.375 2.55859 5.84375 2.77734 5.40625 3.21484C4.96875 3.65234 4.75 4.18359 4.75 4.80859V7.05859H9.25Z",
            fill: "#338EEF"
          })
        ], -1)),
        createBaseVNode("span", {
          textContent: toDisplayString(unref(text_unlock))
        }, null, 8, _hoisted_2$4),
        createBaseVNode("a", {
          href: unref(form_upgrade_button_url),
          class: "monsterinsights-button monsterinsights-button-small",
          textContent: toDisplayString(unref(text_upgrade))
        }, null, 8, _hoisted_3$4)
      ]);
    };
  }
};
function debounce$1(fn3, wait = 300) {
  let timer = null;
  const wrapped = function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn3.apply(this, args);
    }, wait);
  };
  wrapped.cancel = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  return wrapped;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}
var trimLeft = /^\s+/;
var trimRight = /\s+$/;
function tinycolor(color, opts) {
  color = color ? color : "";
  opts = opts || {};
  if (color instanceof tinycolor) {
    return color;
  }
  if (!(this instanceof tinycolor)) {
    return new tinycolor(color, opts);
  }
  var rgb = inputToRGB(color);
  this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  if (this._r < 1) this._r = Math.round(this._r);
  if (this._g < 1) this._g = Math.round(this._g);
  if (this._b < 1) this._b = Math.round(this._b);
  this._ok = rgb.ok;
}
tinycolor.prototype = {
  isDark: function isDark() {
    return this.getBrightness() < 128;
  },
  isLight: function isLight() {
    return !this.isDark();
  },
  isValid: function isValid() {
    return this._ok;
  },
  getOriginalInput: function getOriginalInput() {
    return this._originalInput;
  },
  getFormat: function getFormat() {
    return this._format;
  },
  getAlpha: function getAlpha() {
    return this._a;
  },
  getBrightness: function getBrightness() {
    var rgb = this.toRgb();
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
  },
  getLuminance: function getLuminance() {
    var rgb = this.toRgb();
    var RsRGB, GsRGB, BsRGB, R2, G2, B2;
    RsRGB = rgb.r / 255;
    GsRGB = rgb.g / 255;
    BsRGB = rgb.b / 255;
    if (RsRGB <= 0.03928) R2 = RsRGB / 12.92;
    else R2 = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
    if (GsRGB <= 0.03928) G2 = GsRGB / 12.92;
    else G2 = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
    if (BsRGB <= 0.03928) B2 = BsRGB / 12.92;
    else B2 = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
    return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
  },
  setAlpha: function setAlpha(value) {
    this._a = boundAlpha(value);
    this._roundA = Math.round(100 * this._a) / 100;
    return this;
  },
  toHsv: function toHsv() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    return {
      h: hsv.h * 360,
      s: hsv.s,
      v: hsv.v,
      a: this._a
    };
  },
  toHsvString: function toHsvString() {
    var hsv = rgbToHsv(this._r, this._g, this._b);
    var h2 = Math.round(hsv.h * 360), s2 = Math.round(hsv.s * 100), v2 = Math.round(hsv.v * 100);
    return this._a == 1 ? "hsv(" + h2 + ", " + s2 + "%, " + v2 + "%)" : "hsva(" + h2 + ", " + s2 + "%, " + v2 + "%, " + this._roundA + ")";
  },
  toHsl: function toHsl() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    return {
      h: hsl.h * 360,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  },
  toHslString: function toHslString() {
    var hsl = rgbToHsl(this._r, this._g, this._b);
    var h2 = Math.round(hsl.h * 360), s2 = Math.round(hsl.s * 100), l2 = Math.round(hsl.l * 100);
    return this._a == 1 ? "hsl(" + h2 + ", " + s2 + "%, " + l2 + "%)" : "hsla(" + h2 + ", " + s2 + "%, " + l2 + "%, " + this._roundA + ")";
  },
  toHex: function toHex(allow3Char) {
    return rgbToHex(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function toHexString(allow3Char) {
    return "#" + this.toHex(allow3Char);
  },
  toHex8: function toHex8(allow4Char) {
    return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
  },
  toHex8String: function toHex8String(allow4Char) {
    return "#" + this.toHex8(allow4Char);
  },
  toRgb: function toRgb() {
    return {
      r: Math.round(this._r),
      g: Math.round(this._g),
      b: Math.round(this._b),
      a: this._a
    };
  },
  toRgbString: function toRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
  },
  toPercentageRgb: function toPercentageRgb() {
    return {
      r: Math.round(bound01(this._r, 255) * 100) + "%",
      g: Math.round(bound01(this._g, 255) * 100) + "%",
      b: Math.round(bound01(this._b, 255) * 100) + "%",
      a: this._a
    };
  },
  toPercentageRgbString: function toPercentageRgbString() {
    return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
  },
  toName: function toName() {
    if (this._a === 0) {
      return "transparent";
    }
    if (this._a < 1) {
      return false;
    }
    return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
  },
  toFilter: function toFilter(secondColor) {
    var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
    var secondHex8String = hex8String;
    var gradientType = this._gradientType ? "GradientType = 1, " : "";
    if (secondColor) {
      var s2 = tinycolor(secondColor);
      secondHex8String = "#" + rgbaToArgbHex(s2._r, s2._g, s2._b, s2._a);
    }
    return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
  },
  toString: function toString(format) {
    var formatSet = !!format;
    format = format || this._format;
    var formattedString = false;
    var hasAlpha = this._a < 1 && this._a >= 0;
    var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
    if (needsAlphaFormat) {
      if (format === "name" && this._a === 0) {
        return this.toName();
      }
      return this.toRgbString();
    }
    if (format === "rgb") {
      formattedString = this.toRgbString();
    }
    if (format === "prgb") {
      formattedString = this.toPercentageRgbString();
    }
    if (format === "hex" || format === "hex6") {
      formattedString = this.toHexString();
    }
    if (format === "hex3") {
      formattedString = this.toHexString(true);
    }
    if (format === "hex4") {
      formattedString = this.toHex8String(true);
    }
    if (format === "hex8") {
      formattedString = this.toHex8String();
    }
    if (format === "name") {
      formattedString = this.toName();
    }
    if (format === "hsl") {
      formattedString = this.toHslString();
    }
    if (format === "hsv") {
      formattedString = this.toHsvString();
    }
    return formattedString || this.toHexString();
  },
  clone: function clone() {
    return tinycolor(this.toString());
  },
  _applyModification: function _applyModification(fn3, args) {
    var color = fn3.apply(null, [this].concat([].slice.call(args)));
    this._r = color._r;
    this._g = color._g;
    this._b = color._b;
    this.setAlpha(color._a);
    return this;
  },
  lighten: function lighten() {
    return this._applyModification(_lighten, arguments);
  },
  brighten: function brighten() {
    return this._applyModification(_brighten, arguments);
  },
  darken: function darken() {
    return this._applyModification(_darken, arguments);
  },
  desaturate: function desaturate() {
    return this._applyModification(_desaturate, arguments);
  },
  saturate: function saturate() {
    return this._applyModification(_saturate, arguments);
  },
  greyscale: function greyscale() {
    return this._applyModification(_greyscale, arguments);
  },
  spin: function spin() {
    return this._applyModification(_spin, arguments);
  },
  _applyCombination: function _applyCombination(fn3, args) {
    return fn3.apply(null, [this].concat([].slice.call(args)));
  },
  analogous: function analogous() {
    return this._applyCombination(_analogous, arguments);
  },
  complement: function complement() {
    return this._applyCombination(_complement, arguments);
  },
  monochromatic: function monochromatic() {
    return this._applyCombination(_monochromatic, arguments);
  },
  splitcomplement: function splitcomplement() {
    return this._applyCombination(_splitcomplement, arguments);
  },
  // Disabled until https://github.com/bgrins/TinyColor/issues/254
  // polyad: function (number) {
  //   return this._applyCombination(polyad, [number]);
  // },
  triad: function triad() {
    return this._applyCombination(polyad, [3]);
  },
  tetrad: function tetrad() {
    return this._applyCombination(polyad, [4]);
  }
};
tinycolor.fromRatio = function(color, opts) {
  if (_typeof(color) == "object") {
    var newColor = {};
    for (var i2 in color) {
      if (color.hasOwnProperty(i2)) {
        if (i2 === "a") {
          newColor[i2] = color[i2];
        } else {
          newColor[i2] = convertToPercentage(color[i2]);
        }
      }
    }
    color = newColor;
  }
  return tinycolor(color, opts);
};
function inputToRGB(color) {
  var rgb = {
    r: 0,
    g: 0,
    b: 0
  };
  var a2 = 1;
  var s2 = null;
  var v2 = null;
  var l2 = null;
  var ok = false;
  var format = false;
  if (typeof color == "string") {
    color = stringInputToObject(color);
  }
  if (_typeof(color) == "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s2 = convertToPercentage(color.s);
      v2 = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s2, v2);
      ok = true;
      format = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s2 = convertToPercentage(color.s);
      l2 = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s2, l2);
      ok = true;
      format = "hsl";
    }
    if (color.hasOwnProperty("a")) {
      a2 = color.a;
    }
  }
  a2 = boundAlpha(a2);
  return {
    ok,
    format: color.format || format,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a: a2
  };
}
function rgbToRgb(r2, g2, b2) {
  return {
    r: bound01(r2, 255) * 255,
    g: bound01(g2, 255) * 255,
    b: bound01(b2, 255) * 255
  };
}
function rgbToHsl(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
  var h2, s2, l2 = (max2 + min2) / 2;
  if (max2 == min2) {
    h2 = s2 = 0;
  } else {
    var d2 = max2 - min2;
    s2 = l2 > 0.5 ? d2 / (2 - max2 - min2) : d2 / (max2 + min2);
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s: s2,
    l: l2
  };
}
function hslToRgb(h2, s2, l2) {
  var r2, g2, b2;
  h2 = bound01(h2, 360);
  s2 = bound01(s2, 100);
  l2 = bound01(l2, 100);
  function hue2rgb(p3, q3, t2) {
    if (t2 < 0) t2 += 1;
    if (t2 > 1) t2 -= 1;
    if (t2 < 1 / 6) return p3 + (q3 - p3) * 6 * t2;
    if (t2 < 1 / 2) return q3;
    if (t2 < 2 / 3) return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
    return p3;
  }
  if (s2 === 0) {
    r2 = g2 = b2 = l2;
  } else {
    var q2 = l2 < 0.5 ? l2 * (1 + s2) : l2 + s2 - l2 * s2;
    var p2 = 2 * l2 - q2;
    r2 = hue2rgb(p2, q2, h2 + 1 / 3);
    g2 = hue2rgb(p2, q2, h2);
    b2 = hue2rgb(p2, q2, h2 - 1 / 3);
  }
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b2 * 255
  };
}
function rgbToHsv(r2, g2, b2) {
  r2 = bound01(r2, 255);
  g2 = bound01(g2, 255);
  b2 = bound01(b2, 255);
  var max2 = Math.max(r2, g2, b2), min2 = Math.min(r2, g2, b2);
  var h2, s2, v2 = max2;
  var d2 = max2 - min2;
  s2 = max2 === 0 ? 0 : d2 / max2;
  if (max2 == min2) {
    h2 = 0;
  } else {
    switch (max2) {
      case r2:
        h2 = (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
        break;
      case g2:
        h2 = (b2 - r2) / d2 + 2;
        break;
      case b2:
        h2 = (r2 - g2) / d2 + 4;
        break;
    }
    h2 /= 6;
  }
  return {
    h: h2,
    s: s2,
    v: v2
  };
}
function hsvToRgb(h2, s2, v2) {
  h2 = bound01(h2, 360) * 6;
  s2 = bound01(s2, 100);
  v2 = bound01(v2, 100);
  var i2 = Math.floor(h2), f2 = h2 - i2, p2 = v2 * (1 - s2), q2 = v2 * (1 - f2 * s2), t2 = v2 * (1 - (1 - f2) * s2), mod = i2 % 6, r2 = [v2, q2, p2, p2, t2, v2][mod], g2 = [t2, v2, v2, q2, p2, p2][mod], b2 = [p2, p2, t2, v2, v2, q2][mod];
  return {
    r: r2 * 255,
    g: g2 * 255,
    b: b2 * 255
  };
}
function rgbToHex(r2, g2, b2, allow3Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16))];
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function rgbaToHex(r2, g2, b2, a2, allow4Char) {
  var hex = [pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16)), pad2(convertDecimalToHex(a2))];
  if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
  }
  return hex.join("");
}
function rgbaToArgbHex(r2, g2, b2, a2) {
  var hex = [pad2(convertDecimalToHex(a2)), pad2(Math.round(r2).toString(16)), pad2(Math.round(g2).toString(16)), pad2(Math.round(b2).toString(16))];
  return hex.join("");
}
tinycolor.equals = function(color1, color2) {
  if (!color1 || !color2) return false;
  return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
};
tinycolor.random = function() {
  return tinycolor.fromRatio({
    r: Math.random(),
    g: Math.random(),
    b: Math.random()
  });
};
function _desaturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s -= amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _saturate(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.s += amount / 100;
  hsl.s = clamp01(hsl.s);
  return tinycolor(hsl);
}
function _greyscale(color) {
  return tinycolor(color).desaturate(100);
}
function _lighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l += amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _brighten(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var rgb = tinycolor(color).toRgb();
  rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
  rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
  rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
  return tinycolor(rgb);
}
function _darken(color, amount) {
  amount = amount === 0 ? 0 : amount || 10;
  var hsl = tinycolor(color).toHsl();
  hsl.l -= amount / 100;
  hsl.l = clamp01(hsl.l);
  return tinycolor(hsl);
}
function _spin(color, amount) {
  var hsl = tinycolor(color).toHsl();
  var hue = (hsl.h + amount) % 360;
  hsl.h = hue < 0 ? 360 + hue : hue;
  return tinycolor(hsl);
}
function _complement(color) {
  var hsl = tinycolor(color).toHsl();
  hsl.h = (hsl.h + 180) % 360;
  return tinycolor(hsl);
}
function polyad(color, number) {
  if (isNaN(number) || number <= 0) {
    throw new Error("Argument to polyad must be a positive number");
  }
  var hsl = tinycolor(color).toHsl();
  var result = [tinycolor(color)];
  var step = 360 / number;
  for (var i2 = 1; i2 < number; i2++) {
    result.push(tinycolor({
      h: (hsl.h + i2 * step) % 360,
      s: hsl.s,
      l: hsl.l
    }));
  }
  return result;
}
function _splitcomplement(color) {
  var hsl = tinycolor(color).toHsl();
  var h2 = hsl.h;
  return [tinycolor(color), tinycolor({
    h: (h2 + 72) % 360,
    s: hsl.s,
    l: hsl.l
  }), tinycolor({
    h: (h2 + 216) % 360,
    s: hsl.s,
    l: hsl.l
  })];
}
function _analogous(color, results, slices) {
  results = results || 6;
  slices = slices || 30;
  var hsl = tinycolor(color).toHsl();
  var part = 360 / slices;
  var ret = [tinycolor(color)];
  for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
    hsl.h = (hsl.h + part) % 360;
    ret.push(tinycolor(hsl));
  }
  return ret;
}
function _monochromatic(color, results) {
  results = results || 6;
  var hsv = tinycolor(color).toHsv();
  var h2 = hsv.h, s2 = hsv.s, v2 = hsv.v;
  var ret = [];
  var modification = 1 / results;
  while (results--) {
    ret.push(tinycolor({
      h: h2,
      s: s2,
      v: v2
    }));
    v2 = (v2 + modification) % 1;
  }
  return ret;
}
tinycolor.mix = function(color1, color2, amount) {
  amount = amount === 0 ? 0 : amount || 50;
  var rgb1 = tinycolor(color1).toRgb();
  var rgb2 = tinycolor(color2).toRgb();
  var p2 = amount / 100;
  var rgba = {
    r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
    g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
    b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
    a: (rgb2.a - rgb1.a) * p2 + rgb1.a
  };
  return tinycolor(rgba);
};
tinycolor.readability = function(color1, color2) {
  var c1 = tinycolor(color1);
  var c2 = tinycolor(color2);
  return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
};
tinycolor.isReadable = function(color1, color2, wcag2) {
  var readability = tinycolor.readability(color1, color2);
  var wcag2Parms, out;
  out = false;
  wcag2Parms = validateWCAG2Parms(wcag2);
  switch (wcag2Parms.level + wcag2Parms.size) {
    case "AAsmall":
    case "AAAlarge":
      out = readability >= 4.5;
      break;
    case "AAlarge":
      out = readability >= 3;
      break;
    case "AAAsmall":
      out = readability >= 7;
      break;
  }
  return out;
};
tinycolor.mostReadable = function(baseColor, colorList, args) {
  var bestColor = null;
  var bestScore = 0;
  var readability;
  var includeFallbackColors, level, size;
  args = args || {};
  includeFallbackColors = args.includeFallbackColors;
  level = args.level;
  size = args.size;
  for (var i2 = 0; i2 < colorList.length; i2++) {
    readability = tinycolor.readability(baseColor, colorList[i2]);
    if (readability > bestScore) {
      bestScore = readability;
      bestColor = tinycolor(colorList[i2]);
    }
  }
  if (tinycolor.isReadable(baseColor, bestColor, {
    level,
    size
  }) || !includeFallbackColors) {
    return bestColor;
  } else {
    args.includeFallbackColors = false;
    return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
  }
};
var names = tinycolor.names = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
var hexNames = tinycolor.hexNames = flip$2(names);
function flip$2(o2) {
  var flipped = {};
  for (var i2 in o2) {
    if (o2.hasOwnProperty(i2)) {
      flipped[o2[i2]] = i2;
    }
  }
  return flipped;
}
function boundAlpha(a2) {
  a2 = parseFloat(a2);
  if (isNaN(a2) || a2 < 0 || a2 > 1) {
    a2 = 1;
  }
  return a2;
}
function bound01(n2, max2) {
  if (isOnePointZero(n2)) n2 = "100%";
  var processPercent = isPercentage(n2);
  n2 = Math.min(max2, Math.max(0, parseFloat(n2)));
  if (processPercent) {
    n2 = parseInt(n2 * max2, 10) / 100;
  }
  if (Math.abs(n2 - max2) < 1e-6) {
    return 1;
  }
  return n2 % max2 / parseFloat(max2);
}
function clamp01(val) {
  return Math.min(1, Math.max(0, val));
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}
function isOnePointZero(n2) {
  return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
}
function isPercentage(n2) {
  return typeof n2 === "string" && n2.indexOf("%") != -1;
}
function pad2(c2) {
  return c2.length == 1 ? "0" + c2 : "" + c2;
}
function convertToPercentage(n2) {
  if (n2 <= 1) {
    n2 = n2 * 100 + "%";
  }
  return n2;
}
function convertDecimalToHex(d2) {
  return Math.round(parseFloat(d2) * 255).toString(16);
}
function convertHexToDecimal(h2) {
  return parseIntFromHex(h2) / 255;
}
var matchers = (function() {
  var CSS_INTEGER = "[-\\+]?\\d+%?";
  var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
  var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
  var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
  return {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
    rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
    hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
    hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
    hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
    hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
  };
})();
function isValidCSSUnit(color) {
  return !!matchers.CSS_UNIT.exec(color);
}
function stringInputToObject(color) {
  color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color == "transparent") {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  var match;
  if (match = matchers.rgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = matchers.rgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = matchers.hsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = matchers.hsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = matchers.hex8.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex6.exec(color)) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = matchers.hex4.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      a: convertHexToDecimal(match[4] + "" + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = matchers.hex3.exec(color)) {
    return {
      r: parseIntFromHex(match[1] + "" + match[1]),
      g: parseIntFromHex(match[2] + "" + match[2]),
      b: parseIntFromHex(match[3] + "" + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function validateWCAG2Parms(parms) {
  var level, size;
  parms = parms || {
    level: "AA",
    size: "small"
  };
  level = (parms.level || "AA").toUpperCase();
  size = (parms.size || "small").toLowerCase();
  if (level !== "AA" && level !== "AAA") {
    level = "AA";
  }
  if (size !== "small" && size !== "large") {
    size = "small";
  }
  return {
    level,
    size
  };
}
var GradientParser = GradientParser || {};
GradientParser.stringify = /* @__PURE__ */ (function() {
  var visitor = {
    "visit_linear-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_repeating-linear-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_radial-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_repeating-radial-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_conic-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_repeating-conic-gradient": function(node) {
      return visitor.visit_gradient(node);
    },
    "visit_gradient": function(node) {
      var orientation = visitor.visit(node.orientation);
      if (orientation) {
        orientation += ", ";
      }
      return node.type + "(" + orientation + visitor.visit(node.colorStops) + ")";
    },
    "visit_shape": function(node) {
      var result = node.value, at2 = visitor.visit(node.at), style = visitor.visit(node.style);
      if (style) {
        result += " " + style;
      }
      if (at2) {
        result += " at " + at2;
      }
      return result;
    },
    "visit_default-radial": function(node) {
      var result = "", at2 = visitor.visit(node.at);
      if (at2) {
        if (node.hasAtKeyword) {
          result += "at " + at2;
        } else {
          result += at2;
        }
      }
      return result;
    },
    "visit_extent-keyword": function(node) {
      var result = node.value, at2 = visitor.visit(node.at);
      if (at2) {
        result += " at " + at2;
      }
      return result;
    },
    "visit_position-keyword": function(node) {
      return node.value;
    },
    "visit_position": function(node) {
      return visitor.visit(node.value.x) + " " + visitor.visit(node.value.y);
    },
    "visit_%": function(node) {
      return node.value + "%";
    },
    "visit_em": function(node) {
      return node.value + "em";
    },
    "visit_px": function(node) {
      return node.value + "px";
    },
    "visit_rem": function(node) {
      return node.value + "rem";
    },
    "visit_vw": function(node) {
      return node.value + "vw";
    },
    "visit_vh": function(node) {
      return node.value + "vh";
    },
    "visit_vmin": function(node) {
      return node.value + "vmin";
    },
    "visit_vmax": function(node) {
      return node.value + "vmax";
    },
    "visit_ch": function(node) {
      return node.value + "ch";
    },
    "visit_ex": function(node) {
      return node.value + "ex";
    },
    "visit_calc": function(node) {
      return "calc(" + node.value + ")";
    },
    "visit_literal": function(node) {
      return visitor.visit_color(node.value, node);
    },
    "visit_hex": function(node) {
      return visitor.visit_color("#" + node.value, node);
    },
    "visit_rgb": function(node) {
      return visitor.visit_color("rgb(" + node.value.join(", ") + ")", node);
    },
    "visit_rgba": function(node) {
      return visitor.visit_color("rgba(" + node.value.join(", ") + ")", node);
    },
    "visit_hsl": function(node) {
      return visitor.visit_color("hsl(" + node.value[0] + ", " + node.value[1] + "%, " + node.value[2] + "%)", node);
    },
    "visit_hsla": function(node) {
      return visitor.visit_color("hsla(" + node.value[0] + ", " + node.value[1] + "%, " + node.value[2] + "%, " + node.value[3] + ")", node);
    },
    "visit_var": function(node) {
      return visitor.visit_color("var(" + node.value + ")", node);
    },
    "visit_color": function(resultColor, node) {
      var result = resultColor, length = visitor.visit(node.length);
      if (length) {
        result += " " + length;
      }
      var length2 = visitor.visit(node.length2);
      if (length2) {
        result += " " + length2;
      }
      return result;
    },
    "visit_angular": function(node) {
      return node.value + (node.unit || "deg");
    },
    "visit_directional": function(node) {
      return "to " + node.value;
    },
    "visit_conic": function(node) {
      var result = "";
      if (node.angle) {
        result += "from " + visitor.visit(node.angle);
      }
      if (node.at) {
        if (result) {
          result += " ";
        }
        result += "at " + visitor.visit(node.at);
      }
      return result;
    },
    "visit_array": function(elements) {
      var result = "", size = elements.length;
      elements.forEach(function(element, i2) {
        result += visitor.visit(element);
        if (i2 < size - 1) {
          result += ", ";
        }
      });
      return result;
    },
    "visit_object": function(obj) {
      if (obj.width && obj.height) {
        return visitor.visit(obj.width) + " " + visitor.visit(obj.height);
      }
      return "";
    },
    "visit": function(element) {
      if (!element) {
        return "";
      }
      if (element instanceof Array) {
        return visitor.visit_array(element);
      } else if (typeof element === "object" && !element.type) {
        return visitor.visit_object(element);
      } else if (element.type) {
        var nodeVisitor = visitor["visit_" + element.type];
        if (nodeVisitor) {
          return nodeVisitor(element);
        } else {
          throw Error("Missing visitor visit_" + element.type);
        }
      } else {
        throw Error("Invalid node.");
      }
    }
  };
  return function(root2) {
    return visitor.visit(root2);
  };
})();
var GradientParser = GradientParser || {};
GradientParser.parse = /* @__PURE__ */ (function() {
  var tokens = {
    linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
    repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
    radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
    repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
    conicGradient: /^(\-(webkit|o|ms|moz)\-)?(conic\-gradient)/i,
    repeatingConicGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-conic\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|top (left|right)|bottom (left|right)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    remValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))rem/,
    vwValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vw/,
    vhValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vh/,
    vminValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vmin/,
    vmaxValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))vmax/,
    chValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))ch/,
    exValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))ex/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    radianValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))rad/,
    gradianValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))grad/,
    turnValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))turn/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    slash: /^\//,
    hexColor: /^\#([0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})(?![0-9a-fA-F])/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    varColor: /^var/i,
    calcValue: /^calc/i,
    variableName: /^(--[a-zA-Z0-9-,\s\#]+)/,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,
    hslColor: /^hsl/i,
    hslaColor: /^hsla/i
  };
  var input = "";
  function error(msg) {
    var err = new Error(input + ": " + msg);
    err.source = input;
    throw err;
  }
  function getAST() {
    var ast = matchListDefinitions();
    if (input.length > 0) {
      error("Invalid input not EOF");
    }
    return ast;
  }
  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }
  function matchDefinition() {
    return matchGradient(
      "linear-gradient",
      tokens.linearGradient,
      matchLinearOrientation
    ) || matchGradient(
      "repeating-linear-gradient",
      tokens.repeatingLinearGradient,
      matchLinearOrientation
    ) || matchGradient(
      "radial-gradient",
      tokens.radialGradient,
      matchListRadialOrientations
    ) || matchGradient(
      "repeating-radial-gradient",
      tokens.repeatingRadialGradient,
      matchListRadialOrientations
    ) || matchGradient(
      "conic-gradient",
      tokens.conicGradient,
      matchConicOrientation
    ) || matchGradient(
      "repeating-conic-gradient",
      tokens.repeatingConicGradient,
      matchConicOrientation
    );
  }
  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function(captures) {
      var orientation = orientationMatcher();
      if (orientation) {
        if (!scan(tokens.comma)) {
          error("Missing comma before color stops");
        }
      }
      return {
        type: gradientType,
        orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }
  function matchCall(pattern, callback) {
    var captures = scan(pattern);
    if (captures) {
      if (!scan(tokens.startCall)) {
        error("Missing (");
      }
      var result = callback(captures);
      if (!scan(tokens.endCall)) {
        error("Missing )");
      }
      return result;
    }
  }
  function matchLinearOrientation() {
    var sideOrCorner = matchSideOrCorner();
    if (sideOrCorner) {
      return sideOrCorner;
    }
    var legacyDirection = match("position-keyword", tokens.positionKeywords, 1);
    if (legacyDirection) {
      return {
        type: "directional",
        value: legacyDirection.value
      };
    }
    return matchAngle();
  }
  function matchConicOrientation() {
    var angle = matchFrom();
    var atPosition = matchAtPosition();
    if (angle || atPosition) {
      return {
        type: "conic",
        angle: angle || void 0,
        at: atPosition || void 0
      };
    }
  }
  function matchFrom() {
    if (match("from", /^from/, 0)) {
      var angle = matchAngle();
      if (!angle) {
        error('Missing angle after "from" in conic-gradient');
      }
      return angle;
    }
  }
  function matchSideOrCorner() {
    return match("directional", tokens.sideOrCorner, 1);
  }
  function matchAngle() {
    return matchAngularWithUnit("deg", tokens.angleValue) || matchAngularWithUnit("rad", tokens.radianValue) || matchAngularWithUnit("grad", tokens.gradianValue) || matchAngularWithUnit("turn", tokens.turnValue);
  }
  function matchAngularWithUnit(unit, pattern) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type: "angular",
        value: captures[1],
        unit
      };
    }
  }
  function matchListRadialOrientations() {
    var radialOrientations, radialOrientation = matchRadialOrientation(), lookaheadCache;
    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);
      lookaheadCache = input;
      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();
        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }
    return radialOrientations;
  }
  function matchRadialOrientation() {
    var radialType = matchCircle() || matchEllipse();
    if (radialType) {
      radialType.at = matchAtPosition();
    } else {
      var extent = matchExtentKeyword();
      if (extent) {
        radialType = extent;
        var positionAt = matchAtPosition();
        if (positionAt) {
          radialType.at = positionAt;
        }
      } else {
        var atPosition = matchAtPosition();
        if (atPosition) {
          radialType = {
            type: "default-radial",
            at: atPosition,
            hasAtKeyword: true
          };
        } else {
          var defaultPosition = matchPositioning();
          if (defaultPosition) {
            radialType = {
              type: "default-radial",
              at: defaultPosition
            };
          }
        }
      }
    }
    return radialType;
  }
  function matchCircle() {
    var circle = match("shape", /^(circle)/i, 0);
    if (circle) {
      circle.style = matchLength() || matchExtentKeyword();
    }
    return circle;
  }
  function matchEllipse() {
    var ellipse = match("shape", /^(ellipse)/i, 0);
    if (ellipse) {
      ellipse.style = matchPositioning() || matchDistance() || matchExtentKeyword();
    }
    return ellipse;
  }
  function matchExtentKeyword() {
    return match("extent-keyword", tokens.extentKeywords, 1);
  }
  function matchAtPosition() {
    if (match("position", /^at/, 0)) {
      var positioning = matchPositioning();
      if (!positioning) {
        error("Missing positioning value");
      }
      return positioning;
    }
  }
  function matchPositioning() {
    var location = matchCoordinates();
    if (location.x || location.y) {
      return {
        type: "position",
        value: location
      };
    }
  }
  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }
  function matchListing(matcher) {
    var captures = matcher(), result = [];
    if (captures) {
      result.push(captures);
      while (scan(tokens.comma)) {
        captures = matcher();
        if (captures) {
          result.push(captures);
        } else {
          error("One extra comma");
        }
      }
    }
    return result;
  }
  function matchColorStop() {
    var color = matchColor();
    if (!color) {
      error("Expected color definition");
    }
    color.length = matchDistance();
    if (color.length) {
      color.length2 = matchDistance();
    }
    return color;
  }
  function matchColor() {
    return matchHexColor() || matchHSLAColor() || matchHSLColor() || matchRGBAColor() || matchRGBColor() || matchVarColor() || matchLiteralColor();
  }
  function matchLiteralColor() {
    return match("literal", tokens.literalColor, 0);
  }
  function matchHexColor() {
    return match("hex", tokens.hexColor, 1);
  }
  function matchRGBColor() {
    return matchCall(tokens.rgbColor, function() {
      return matchRGBValues("rgb");
    });
  }
  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, function() {
      return matchRGBValues("rgba");
    });
  }
  function matchRGBValues(baseType) {
    var r2 = matchNumber();
    if (scan(tokens.comma)) {
      var g2 = matchNumber();
      scan(tokens.comma);
      var b2 = matchNumber();
      var values = [r2, g2, b2];
      if (scan(tokens.comma)) {
        values.push(matchNumber());
        return { type: "rgba", value: values };
      }
      return { type: baseType, value: values };
    } else {
      var g2 = matchNumber();
      var b2 = matchNumber();
      var values = [r2, g2, b2];
      if (scan(tokens.slash)) {
        values.push(matchNumber());
        return { type: "rgba", value: values };
      }
      return { type: baseType, value: values };
    }
  }
  function matchVarColor() {
    return matchCall(tokens.varColor, function() {
      return {
        type: "var",
        value: matchVariableName()
      };
    });
  }
  function matchHSLColor() {
    return matchCall(tokens.hslColor, function() {
      return matchHSLValues("hsl");
    });
  }
  function matchHSLAColor() {
    return matchCall(tokens.hslaColor, function() {
      return matchHSLValues("hsla");
    });
  }
  function matchHSLValues(baseType) {
    var lookahead = scan(tokens.percentageValue);
    if (lookahead) {
      error("HSL hue value must be a number in degrees (0-360) or normalized (-360 to 360), not a percentage");
    }
    var hue = matchNumber();
    if (scan(tokens.comma)) {
      var captures = scan(tokens.percentageValue);
      var sat = captures ? captures[1] : null;
      scan(tokens.comma);
      captures = scan(tokens.percentageValue);
      var light = captures ? captures[1] : null;
      if (!sat || !light) {
        error("Expected percentage value for saturation and lightness in HSL");
      }
      if (scan(tokens.comma)) {
        var alpha = matchNumber();
        return { type: "hsla", value: [hue, sat, light, alpha] };
      }
      return { type: baseType, value: [hue, sat, light] };
    } else {
      var captures = scan(tokens.percentageValue);
      var sat = captures ? captures[1] : null;
      captures = scan(tokens.percentageValue);
      var light = captures ? captures[1] : null;
      if (!sat || !light) {
        error("Expected percentage value for saturation and lightness in HSL");
      }
      if (scan(tokens.slash)) {
        var alpha = matchNumber();
        return { type: "hsla", value: [hue, sat, light, alpha] };
      }
      return { type: baseType, value: [hue, sat, light] };
    }
  }
  function matchVariableName() {
    return scan(tokens.variableName)[1];
  }
  function matchNumber() {
    return scan(tokens.number)[1];
  }
  function matchDistance() {
    return match("%", tokens.percentageValue, 1) || matchPositionKeyword() || matchCalc() || matchLength();
  }
  function matchPositionKeyword() {
    return match("position-keyword", tokens.positionKeywords, 1);
  }
  function matchCalc() {
    return matchCall(tokens.calcValue, function() {
      var openParenCount = 1;
      var i2 = 0;
      while (openParenCount > 0 && i2 < input.length) {
        var char = input.charAt(i2);
        if (char === "(") {
          openParenCount++;
        } else if (char === ")") {
          openParenCount--;
        }
        i2++;
      }
      if (openParenCount > 0) {
        error("Missing closing parenthesis in calc() expression");
      }
      var calcContent = input.substring(0, i2 - 1);
      consume(i2 - 1);
      return {
        type: "calc",
        value: calcContent
      };
    });
  }
  function matchLength() {
    return match("px", tokens.pixelValue, 1) || match("em", tokens.emValue, 1) || match("rem", tokens.remValue, 1) || match("vw", tokens.vwValue, 1) || match("vh", tokens.vhValue, 1) || match("vmin", tokens.vminValue, 1) || match("vmax", tokens.vmaxValue, 1) || match("ch", tokens.chValue, 1) || match("ex", tokens.exValue, 1);
  }
  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type,
        value: captures[captureIndex]
      };
    }
  }
  function scan(regexp) {
    var captures, blankCaptures;
    blankCaptures = /^[\n\r\t\s]+/.exec(input);
    if (blankCaptures) {
      consume(blankCaptures[0].length);
    }
    captures = regexp.exec(input);
    if (captures) {
      consume(captures[0].length);
    }
    return captures;
  }
  function consume(size) {
    input = input.substring(size);
  }
  return function(code) {
    input = code.toString().trim();
    if (input.endsWith(";")) {
      input = input.slice(0, -1);
    }
    return getAST();
  };
})();
const parse = GradientParser.parse;
const stringify = GradientParser.stringify;
({ parse: GradientParser.parse, stringify: GradientParser.stringify });
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
const applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect: effect$2,
  requires: ["computeStyles"]
};
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x2 = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y2 = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: y2 + height,
    left: x2,
    x: x2,
    y: y2
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v2 = within(min2, value, max2);
  return v2 > max2 ? max2 : v2;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
var toPaddingObject = function toPaddingObject2(padding, state) {
  padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$;
  var state = _ref.state, name = _ref.name, options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? "height" : "width";
  if (!arrowElement || !popperOffsets2) {
    return;
  }
  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === "y" ? top : left;
  var maxProp = axis === "y" ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
  var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2;
  var min2 = paddingObject[minProp];
  var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset2 = within(min2, center, max2);
  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect$1(_ref2) {
  var state = _ref2.state, options = _ref2.options;
  var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement == null) {
    return;
  }
  if (typeof arrowElement === "string") {
    arrowElement = state.elements.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return;
    }
  }
  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }
  state.elements.arrow = arrowElement;
}
const arrow$1 = {
  name: "arrow",
  enabled: true,
  phase: "main",
  fn: arrow,
  effect: effect$1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x2 = _ref.x, y2 = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x2 * dpr) / dpr || 0,
    y: round(y2 * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x2 = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y2 = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x: x2,
    y: y2
  }) : {
    x: x2,
    y: y2
  };
  x2 = _ref3.x;
  y2 = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y2 -= offsetY - popperRect.height;
      y2 *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x2 -= offsetX - popperRect.width;
      x2 *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x2,
    y: y2
  }, getWindow(popper2)) : {
    x: x2,
    y: y2
  };
  x2 = _ref4.x;
  y2 = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x2 + "px, " + y2 + "px)" : "translate3d(" + x2 + "px, " + y2 + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y2 + "px" : "", _Object$assign2[sideX] = hasX ? x2 + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
const computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
var passive = {
  passive: true
};
function effect(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
const eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect,
  data: {}
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x2 = 0;
  var y2 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x2 = visualViewport.offsetLeft;
      y2 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x2 + getWindowScrollBarX(element),
    y: y2
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x2 = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y2 = -winScroll.scrollTop;
  if (getComputedStyle(body || html).direction === "rtl") {
    x2 += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x: x2,
    y: y2
  };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a2, b2) {
    return overflows[a2] - overflows[b2];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i2 = 0; i2 < placements2.length; i2++) {
    var placement = placements2[i2];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break") break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
const flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }
  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: "reference"
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets,
    popperEscapeOffsets,
    isReferenceHidden,
    hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-reference-hidden": isReferenceHidden,
    "data-popper-escaped": hasPopperEscaped
  });
}
const hide$1 = {
  name: "hide",
  enabled: true,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: hide
};
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
  var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
    placement
  })) : offset2, skidding = _ref[0], distance = _ref[1];
  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name;
  var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function(acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement], x2 = _data$state$placement.x, y2 = _data$state$placement.y;
  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x2;
    state.modifiersData.popperOffsets.y += y2;
  }
  state.modifiersData[name] = data;
}
const offset$1 = {
  name: "offset",
  enabled: true,
  phase: "main",
  requires: ["popperOffsets"],
  fn: offset
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    placement: state.placement
  });
}
const popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset2 = popperOffsets2[mainAxis];
    var min$1 = offset2 + overflow[mainSide];
    var max$1 = offset2 - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset2 + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset2;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
const preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn3) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn3());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m2) {
          return m2.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn3 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn3 === "function") {
            state = fn3({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn3) {
        return fn3();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function isObject$1(o2) {
  return Object.prototype.toString.call(o2) === "[object Object]";
}
function isPlainObject$1(o2) {
  var ctor, prot;
  if (isObject$1(o2) === false) return false;
  ctor = o2.constructor;
  if (ctor === void 0) return true;
  prot = ctor.prototype;
  if (isObject$1(prot) === false) return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function t$1() {
  return t$1 = Object.assign ? Object.assign.bind() : function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var r2 = arguments[t2];
      for (var n2 in r2) Object.prototype.hasOwnProperty.call(r2, n2) && (e2[n2] = r2[n2]);
    }
    return e2;
  }, t$1.apply(this, arguments);
}
function r$1(e2, t2) {
  if (null == e2) return {};
  var r2, n2, i2 = {}, o2 = Object.keys(e2);
  for (n2 = 0; n2 < o2.length; n2++) t2.indexOf(r2 = o2[n2]) >= 0 || (i2[r2] = e2[r2]);
  return i2;
}
const n$1 = { silent: false, logLevel: "warn" }, i$1 = ["validator"], o$1 = Object.prototype, a$1 = o$1.toString, s$1 = o$1.hasOwnProperty, u$1 = /^\s*function (\w+)/;
function l$1(e2) {
  var t2;
  const r2 = null !== (t2 = null == e2 ? void 0 : e2.type) && void 0 !== t2 ? t2 : e2;
  if (r2) {
    const e3 = r2.toString().match(u$1);
    return e3 ? e3[1] : "";
  }
  return "";
}
const c$1 = isPlainObject$1, f$1 = (e2) => e2;
let d$1 = f$1;
const p$1 = (e2, t2) => s$1.call(e2, t2), y$1 = Number.isInteger || function(e2) {
  return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2;
}, v$1 = Array.isArray || function(e2) {
  return "[object Array]" === a$1.call(e2);
}, h$1 = (e2) => "[object Function]" === a$1.call(e2), b$1 = (e2) => c$1(e2) && p$1(e2, "_vueTypes_name"), g$1 = (e2) => c$1(e2) && (p$1(e2, "type") || ["_vueTypes_name", "validator", "default", "required"].some((t2) => p$1(e2, t2)));
function O$1(e2, t2) {
  return Object.defineProperty(e2.bind(t2), "__original", { value: e2 });
}
function m$1(e2, t2, r2 = false) {
  let n2, i2 = true, o2 = "";
  n2 = c$1(e2) ? e2 : { type: e2 };
  const a2 = b$1(n2) ? n2._vueTypes_name + " - " : "";
  if (g$1(n2) && null !== n2.type) {
    if (void 0 === n2.type || true === n2.type) return i2;
    if (!n2.required && void 0 === t2) return i2;
    v$1(n2.type) ? (i2 = n2.type.some((e3) => true === m$1(e3, t2, true)), o2 = n2.type.map((e3) => l$1(e3)).join(" or ")) : (o2 = l$1(n2), i2 = "Array" === o2 ? v$1(t2) : "Object" === o2 ? c$1(t2) : "String" === o2 || "Number" === o2 || "Boolean" === o2 || "Function" === o2 ? (function(e3) {
      if (null == e3) return "";
      const t3 = e3.constructor.toString().match(u$1);
      return t3 ? t3[1] : "";
    })(t2) === o2 : t2 instanceof n2.type);
  }
  if (!i2) {
    const e3 = `${a2}value "${t2}" should be of type "${o2}"`;
    return false === r2 ? (d$1(e3), false) : e3;
  }
  if (p$1(n2, "validator") && h$1(n2.validator)) {
    const e3 = d$1, o3 = [];
    if (d$1 = (e4) => {
      o3.push(e4);
    }, i2 = n2.validator(t2), d$1 = e3, !i2) {
      const e4 = (o3.length > 1 ? "* " : "") + o3.join("\n* ");
      return o3.length = 0, false === r2 ? (d$1(e4), i2) : e4;
    }
  }
  return i2;
}
function j$1(e2, t2) {
  const r2 = Object.defineProperties(t2, { _vueTypes_name: { value: e2, writable: true }, isRequired: { get() {
    return this.required = true, this;
  } }, def: { value(e3) {
    return void 0 === e3 ? (p$1(this, "default") && delete this.default, this) : h$1(e3) || true === m$1(this, e3, true) ? (this.default = v$1(e3) ? () => [...e3] : c$1(e3) ? () => Object.assign({}, e3) : e3, this) : (d$1(`${this._vueTypes_name} - invalid default value: "${e3}"`), this);
  } } }), { validator: n2 } = r2;
  return h$1(n2) && (r2.validator = O$1(n2, r2)), r2;
}
function _$1(e2, t2) {
  const r2 = j$1(e2, t2);
  return Object.defineProperty(r2, "validate", { value(e3) {
    return h$1(this.validator) && d$1(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`), this.validator = O$1(e3, this), this;
  } });
}
function T$1(e2, t2, n2) {
  const o2 = (function(e3) {
    const t3 = {};
    return Object.getOwnPropertyNames(e3).forEach((r2) => {
      t3[r2] = Object.getOwnPropertyDescriptor(e3, r2);
    }), Object.defineProperties({}, t3);
  })(t2);
  if (o2._vueTypes_name = e2, !c$1(n2)) return o2;
  const { validator: a2 } = n2, s2 = r$1(n2, i$1);
  if (h$1(a2)) {
    let { validator: e3 } = o2;
    e3 && (e3 = null !== (l2 = (u2 = e3).__original) && void 0 !== l2 ? l2 : u2), o2.validator = O$1(e3 ? function(t3) {
      return e3.call(this, t3) && a2.call(this, t3);
    } : a2, o2);
  }
  var u2, l2;
  return Object.assign(o2, s2);
}
function $$1(e2) {
  return e2.replace(/^(?!\s*$)/gm, "  ");
}
const w$1 = () => _$1("any", {}), P$2 = () => _$1("function", { type: Function }), x$1 = () => _$1("boolean", { type: Boolean }), E$1 = () => _$1("string", { type: String }), N$1 = () => _$1("number", { type: Number }), q$2 = () => _$1("array", { type: Array }), A$2 = () => _$1("object", { type: Object }), V$1 = () => j$1("integer", { type: Number, validator: (e2) => y$1(e2) }), S$1 = () => j$1("symbol", { validator: (e2) => "symbol" == typeof e2 });
function D$1(e2, t2 = "custom validation failed") {
  if ("function" != typeof e2) throw new TypeError("[VueTypes error]: You must provide a function as argument");
  return j$1(e2.name || "<<anonymous function>>", { type: null, validator(r2) {
    const n2 = e2(r2);
    return n2 || d$1(`${this._vueTypes_name} - ${t2}`), n2;
  } });
}
function L$1(e2) {
  if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument.");
  const t2 = `oneOf - value should be one of "${e2.join('", "')}".`, r2 = e2.reduce((e3, t3) => {
    if (null != t3) {
      const r3 = t3.constructor;
      -1 === e3.indexOf(r3) && e3.push(r3);
    }
    return e3;
  }, []);
  return j$1("oneOf", { type: r2.length > 0 ? r2 : void 0, validator(r3) {
    const n2 = -1 !== e2.indexOf(r3);
    return n2 || d$1(t2), n2;
  } });
}
function F$1(e2) {
  if (!v$1(e2)) throw new TypeError("[VueTypes error]: You must provide an array as argument");
  let t2 = false, r2 = [];
  for (let n3 = 0; n3 < e2.length; n3 += 1) {
    const i2 = e2[n3];
    if (g$1(i2)) {
      if (b$1(i2) && "oneOf" === i2._vueTypes_name && i2.type) {
        r2 = r2.concat(i2.type);
        continue;
      }
      if (h$1(i2.validator) && (t2 = true), true === i2.type || !i2.type) {
        d$1('oneOfType - invalid usage of "true" or "null" as types.');
        continue;
      }
      r2 = r2.concat(i2.type);
    } else r2.push(i2);
  }
  r2 = r2.filter((e3, t3) => r2.indexOf(e3) === t3);
  const n2 = r2.length > 0 ? r2 : null;
  return j$1("oneOfType", t2 ? { type: n2, validator(t3) {
    const r3 = [], n3 = e2.some((e3) => {
      const n4 = m$1(b$1(e3) && "oneOf" === e3._vueTypes_name ? e3.type || null : e3, t3, true);
      return "string" == typeof n4 && r3.push(n4), true === n4;
    });
    return n3 || d$1(`oneOfType - provided value does not match any of the ${r3.length} passed-in validators:
${$$1(r3.join("\n"))}`), n3;
  } } : { type: n2 });
}
function Y$1(e2) {
  return j$1("arrayOf", { type: Array, validator(t2) {
    let r2 = "";
    const n2 = t2.every((t3) => (r2 = m$1(e2, t3, true), true === r2));
    return n2 || d$1(`arrayOf - value validation error:
${$$1(r2)}`), n2;
  } });
}
function B$1(e2) {
  return j$1("instanceOf", { type: e2 });
}
function I$1(e2) {
  return j$1("objectOf", { type: Object, validator(t2) {
    let r2 = "";
    const n2 = Object.keys(t2).every((n3) => (r2 = m$1(e2, t2[n3], true), true === r2));
    return n2 || d$1(`objectOf - value validation error:
${$$1(r2)}`), n2;
  } });
}
function J$1(e2) {
  const t2 = Object.keys(e2), r2 = t2.filter((t3) => {
    var r3;
    return !(null === (r3 = e2[t3]) || void 0 === r3 || !r3.required);
  }), n2 = j$1("shape", { type: Object, validator(n3) {
    if (!c$1(n3)) return false;
    const i2 = Object.keys(n3);
    if (r2.length > 0 && r2.some((e3) => -1 === i2.indexOf(e3))) {
      const e3 = r2.filter((e4) => -1 === i2.indexOf(e4));
      return d$1(1 === e3.length ? `shape - required property "${e3[0]}" is not defined.` : `shape - required properties "${e3.join('", "')}" are not defined.`), false;
    }
    return i2.every((r3) => {
      if (-1 === t2.indexOf(r3)) return true === this._vueTypes_isLoose || (d$1(`shape - shape definition does not include a "${r3}" property. Allowed keys: "${t2.join('", "')}".`), false);
      const i3 = m$1(e2[r3], n3[r3], true);
      return "string" == typeof i3 && d$1(`shape - "${r3}" property validation error:
 ${$$1(i3)}`), true === i3;
    });
  } });
  return Object.defineProperty(n2, "_vueTypes_isLoose", { writable: true, value: false }), Object.defineProperty(n2, "loose", { get() {
    return this._vueTypes_isLoose = true, this;
  } }), n2;
}
const M$1 = ["name", "validate", "getter"], R$1 = /* @__PURE__ */ (() => {
  var e2;
  return (e2 = class {
    static get any() {
      return w$1();
    }
    static get func() {
      return P$2().def(this.defaults.func);
    }
    static get bool() {
      return x$1().def(this.defaults.bool);
    }
    static get string() {
      return E$1().def(this.defaults.string);
    }
    static get number() {
      return N$1().def(this.defaults.number);
    }
    static get array() {
      return q$2().def(this.defaults.array);
    }
    static get object() {
      return A$2().def(this.defaults.object);
    }
    static get integer() {
      return V$1().def(this.defaults.integer);
    }
    static get symbol() {
      return S$1();
    }
    static get nullable() {
      return { type: null };
    }
    static extend(e3) {
      if (v$1(e3)) return e3.forEach((e4) => this.extend(e4)), this;
      const { name: t2, validate: n2 = false, getter: i2 = false } = e3, o2 = r$1(e3, M$1);
      if (p$1(this, t2)) throw new TypeError(`[VueTypes error]: Type "${t2}" already defined`);
      const { type: a2 } = o2;
      if (b$1(a2)) return delete o2.type, Object.defineProperty(this, t2, i2 ? { get: () => T$1(t2, a2, o2) } : { value(...e4) {
        const r2 = T$1(t2, a2, o2);
        return r2.validator && (r2.validator = r2.validator.bind(r2, ...e4)), r2;
      } });
      let s2;
      return s2 = i2 ? { get() {
        const e4 = Object.assign({}, o2);
        return n2 ? _$1(t2, e4) : j$1(t2, e4);
      }, enumerable: true } : { value(...e4) {
        const r2 = Object.assign({}, o2);
        let i3;
        return i3 = n2 ? _$1(t2, r2) : j$1(t2, r2), r2.validator && (i3.validator = r2.validator.bind(i3, ...e4)), i3;
      }, enumerable: true }, Object.defineProperty(this, t2, s2);
    }
  }).defaults = {}, e2.sensibleDefaults = void 0, e2.config = n$1, e2.custom = D$1, e2.oneOf = L$1, e2.instanceOf = B$1, e2.oneOfType = F$1, e2.arrayOf = Y$1, e2.objectOf = I$1, e2.shape = J$1, e2.utils = { validate: (e3, t2) => true === m$1(t2, e3, true), toType: (e3, t2, r2 = false) => r2 ? _$1(e3, t2) : j$1(e3, t2) }, e2;
})();
function z$1(e2 = { func: () => {
}, bool: true, string: "", number: 0, array: () => [], object: () => ({}), integer: 0 }) {
  var r2;
  return (r2 = class extends R$1 {
    static get sensibleDefaults() {
      return t$1({}, this.defaults);
    }
    static set sensibleDefaults(r3) {
      this.defaults = false !== r3 ? t$1({}, true !== r3 ? r3 : e2) : {};
    }
  }).defaults = t$1({}, e2), r2;
}
let C$1 = class C extends z$1() {
};
var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
function e(t2) {
  var e2 = { exports: {} };
  return t2(e2, e2.exports), e2.exports;
}
var n = function(t2) {
  return t2 && t2.Math == Math && t2;
}, r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || /* @__PURE__ */ (function() {
  return this;
})() || Function("return this")(), o = function(t2) {
  try {
    return !!t2();
  } catch (t3) {
    return true;
  }
}, i = !o((function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
})), u = {}.propertyIsEnumerable, a = Object.getOwnPropertyDescriptor, c = { f: a && !u.call({ 1: 2 }, 1) ? function(t2) {
  var e2 = a(this, t2);
  return !!e2 && e2.enumerable;
} : u }, l = function(t2, e2) {
  return { enumerable: !(1 & t2), configurable: !(2 & t2), writable: !(4 & t2), value: e2 };
}, f = {}.toString, s = function(t2) {
  return f.call(t2).slice(8, -1);
}, d = "".split, v = o((function() {
  return !Object("z").propertyIsEnumerable(0);
})) ? function(t2) {
  return "String" == s(t2) ? d.call(t2, "") : Object(t2);
} : Object, p = function(t2) {
  if (null == t2) throw TypeError("Can't call method on " + t2);
  return t2;
}, g = function(t2) {
  return v(p(t2));
}, h = function(t2) {
  return "object" == typeof t2 ? null !== t2 : "function" == typeof t2;
}, y = function(t2, e2) {
  if (!h(t2)) return t2;
  var n2, r2;
  if (e2 && "function" == typeof (n2 = t2.toString) && !h(r2 = n2.call(t2))) return r2;
  if ("function" == typeof (n2 = t2.valueOf) && !h(r2 = n2.call(t2))) return r2;
  if (!e2 && "function" == typeof (n2 = t2.toString) && !h(r2 = n2.call(t2))) return r2;
  throw TypeError("Can't convert object to primitive value");
}, m = {}.hasOwnProperty, S = function(t2, e2) {
  return m.call(t2, e2);
}, x = r.document, b = h(x) && h(x.createElement), E = function(t2) {
  return b ? x.createElement(t2) : {};
}, w = !i && !o((function() {
  return 7 != Object.defineProperty(E("div"), "a", { get: function() {
    return 7;
  } }).a;
})), O = Object.getOwnPropertyDescriptor, T = { f: i ? O : function(t2, e2) {
  if (t2 = g(t2), e2 = y(e2, true), w) try {
    return O(t2, e2);
  } catch (t3) {
  }
  if (S(t2, e2)) return l(!c.f.call(t2, e2), t2[e2]);
} }, A$1 = function(t2) {
  if (!h(t2)) throw TypeError(String(t2) + " is not an object");
  return t2;
}, k = Object.defineProperty, R = { f: i ? k : function(t2, e2, n2) {
  if (A$1(t2), e2 = y(e2, true), A$1(n2), w) try {
    return k(t2, e2, n2);
  } catch (t3) {
  }
  if ("get" in n2 || "set" in n2) throw TypeError("Accessors not supported");
  return "value" in n2 && (t2[e2] = n2.value), t2;
} }, I = i ? function(t2, e2, n2) {
  return R.f(t2, e2, l(1, n2));
} : function(t2, e2, n2) {
  return t2[e2] = n2, t2;
}, j = function(t2, e2) {
  try {
    I(r, t2, e2);
  } catch (n2) {
    r[t2] = e2;
  }
  return e2;
}, C2 = r["__core-js_shared__"] || j("__core-js_shared__", {}), L = Function.toString;
"function" != typeof C2.inspectSource && (C2.inspectSource = function(t2) {
  return L.call(t2);
});
var P$1, M, _, D = C2.inspectSource, U = r.WeakMap, N = "function" == typeof U && /native code/.test(D(U)), F = e((function(t2) {
  (t2.exports = function(t3, e2) {
    return C2[t3] || (C2[t3] = void 0 !== e2 ? e2 : {});
  })("versions", []).push({ version: "3.8.3", mode: "global", copyright: "© 2021 Denis Pushkarev (zloirock.ru)" });
})), W$1 = 0, z = Math.random(), $ = function(t2) {
  return "Symbol(" + String(void 0 === t2 ? "" : t2) + ")_" + (++W$1 + z).toString(36);
}, B = F("keys"), Y = function(t2) {
  return B[t2] || (B[t2] = $(t2));
}, G = {}, H = r.WeakMap;
if (N) {
  var X = C2.state || (C2.state = new H()), V = X.get, K = X.has, q$1 = X.set;
  P$1 = function(t2, e2) {
    return e2.facade = t2, q$1.call(X, t2, e2), e2;
  }, M = function(t2) {
    return V.call(X, t2) || {};
  }, _ = function(t2) {
    return K.call(X, t2);
  };
} else {
  var Q = Y("state");
  G[Q] = true, P$1 = function(t2, e2) {
    return e2.facade = t2, I(t2, Q, e2), e2;
  }, M = function(t2) {
    return S(t2, Q) ? t2[Q] : {};
  }, _ = function(t2) {
    return S(t2, Q);
  };
}
var J = { set: P$1, get: M, has: _, enforce: function(t2) {
  return _(t2) ? M(t2) : P$1(t2, {});
}, getterFor: function(t2) {
  return function(e2) {
    var n2;
    if (!h(e2) || (n2 = M(e2)).type !== t2) throw TypeError("Incompatible receiver, " + t2 + " required");
    return n2;
  };
} }, Z = e((function(t2) {
  var e2 = J.get, n2 = J.enforce, o2 = String(String).split("String");
  (t2.exports = function(t3, e3, i2, u2) {
    var a2, c2 = !!u2 && !!u2.unsafe, l2 = !!u2 && !!u2.enumerable, f2 = !!u2 && !!u2.noTargetGet;
    "function" == typeof i2 && ("string" != typeof e3 || S(i2, "name") || I(i2, "name", e3), (a2 = n2(i2)).source || (a2.source = o2.join("string" == typeof e3 ? e3 : ""))), t3 !== r ? (c2 ? !f2 && t3[e3] && (l2 = true) : delete t3[e3], l2 ? t3[e3] = i2 : I(t3, e3, i2)) : l2 ? t3[e3] = i2 : j(e3, i2);
  })(Function.prototype, "toString", (function() {
    return "function" == typeof this && e2(this).source || D(this);
  }));
})), tt = r, et = function(t2) {
  return "function" == typeof t2 ? t2 : void 0;
}, nt = function(t2, e2) {
  return arguments.length < 2 ? et(tt[t2]) || et(r[t2]) : tt[t2] && tt[t2][e2] || r[t2] && r[t2][e2];
}, rt = Math.ceil, ot = Math.floor, it$1 = function(t2) {
  return isNaN(t2 = +t2) ? 0 : (t2 > 0 ? ot : rt)(t2);
}, ut$1 = Math.min, at = function(t2) {
  return t2 > 0 ? ut$1(it$1(t2), 9007199254740991) : 0;
}, ct$1 = Math.max, lt$1 = Math.min, ft$1 = function(t2, e2) {
  var n2 = it$1(t2);
  return n2 < 0 ? ct$1(n2 + e2, 0) : lt$1(n2, e2);
}, st$1 = function(t2) {
  return function(e2, n2, r2) {
    var o2, i2 = g(e2), u2 = at(i2.length), a2 = ft$1(r2, u2);
    if (t2 && n2 != n2) {
      for (; u2 > a2; ) if ((o2 = i2[a2++]) != o2) return true;
    } else for (; u2 > a2; a2++) if ((t2 || a2 in i2) && i2[a2] === n2) return t2 || a2 || 0;
    return !t2 && -1;
  };
}, dt$1 = { indexOf: st$1(false) }, vt$1 = dt$1.indexOf, pt$1 = function(t2, e2) {
  var n2, r2 = g(t2), o2 = 0, i2 = [];
  for (n2 in r2) !S(G, n2) && S(r2, n2) && i2.push(n2);
  for (; e2.length > o2; ) S(r2, n2 = e2[o2++]) && (~vt$1(i2, n2) || i2.push(n2));
  return i2;
}, gt$1 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ht$1 = gt$1.concat("length", "prototype"), yt$1 = { f: Object.getOwnPropertyNames || function(t2) {
  return pt$1(t2, ht$1);
} }, mt$1 = { f: Object.getOwnPropertySymbols }, St$1 = nt("Reflect", "ownKeys") || function(t2) {
  var e2 = yt$1.f(A$1(t2)), n2 = mt$1.f;
  return n2 ? e2.concat(n2(t2)) : e2;
}, xt$1 = function(t2, e2) {
  for (var n2 = St$1(e2), r2 = R.f, o2 = T.f, i2 = 0; i2 < n2.length; i2++) {
    var u2 = n2[i2];
    S(t2, u2) || r2(t2, u2, o2(e2, u2));
  }
}, bt$1 = /#|\.prototype\./, Et$1 = function(t2, e2) {
  var n2 = Ot$1[wt$1(t2)];
  return n2 == At$1 || n2 != Tt$1 && ("function" == typeof e2 ? o(e2) : !!e2);
}, wt$1 = Et$1.normalize = function(t2) {
  return String(t2).replace(bt$1, ".").toLowerCase();
}, Ot$1 = Et$1.data = {}, Tt$1 = Et$1.NATIVE = "N", At$1 = Et$1.POLYFILL = "P", kt$1 = Et$1, Rt$1 = T.f, It$1 = function(t2, e2) {
  var n2, o2, i2, u2, a2, c2 = t2.target, l2 = t2.global, f2 = t2.stat;
  if (n2 = l2 ? r : f2 ? r[c2] || j(c2, {}) : (r[c2] || {}).prototype) for (o2 in e2) {
    if (u2 = e2[o2], i2 = t2.noTargetGet ? (a2 = Rt$1(n2, o2)) && a2.value : n2[o2], !kt$1(l2 ? o2 : c2 + (f2 ? "." : "#") + o2, t2.forced) && void 0 !== i2) {
      if (typeof u2 == typeof i2) continue;
      xt$1(u2, i2);
    }
    (t2.sham || i2 && i2.sham) && I(u2, "sham", true), Z(n2, o2, u2, t2);
  }
}, jt$1 = function(t2, e2) {
  var n2 = [][t2];
  return !!n2 && o((function() {
    n2.call(null, e2 || function() {
      throw 1;
    }, 1);
  }));
}, Ct$1 = Object.defineProperty, Lt$1 = {}, Pt$1 = function(t2) {
  throw t2;
}, Mt$1 = function(t2, e2) {
  if (S(Lt$1, t2)) return Lt$1[t2];
  e2 || (e2 = {});
  var n2 = [][t2], r2 = !!S(e2, "ACCESSORS") && e2.ACCESSORS, u2 = S(e2, 0) ? e2[0] : Pt$1, a2 = S(e2, 1) ? e2[1] : void 0;
  return Lt$1[t2] = !!n2 && !o((function() {
    if (r2 && !i) return true;
    var t3 = { length: -1 };
    r2 ? Ct$1(t3, 1, { enumerable: true, get: Pt$1 }) : t3[1] = 1, n2.call(t3, u2, a2);
  }));
}, _t$1 = dt$1.indexOf, Dt$1 = [].indexOf, Ut$1 = !!Dt$1 && 1 / [1].indexOf(1, -0) < 0, Nt$1 = jt$1("indexOf"), Ft$1 = Mt$1("indexOf", { ACCESSORS: true, 1: 0 });
function Wt$1(t2, e2) {
  if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
}
function zt$1(t2, e2) {
  for (var n2 = 0; n2 < e2.length; n2++) {
    var r2 = e2[n2];
    r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(t2, r2.key, r2);
  }
}
function $t$1(t2, e2, n2) {
  return n2 && zt$1(t2, n2), t2;
}
It$1({ target: "Array", proto: true, forced: Ut$1 || !Nt$1 || !Ft$1 }, { indexOf: function(t2) {
  return Ut$1 ? Dt$1.apply(this, arguments) || 0 : _t$1(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} });
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "isInBrowser", value: function() {
    return "undefined" != typeof window;
  } }, { key: "isServer", value: function() {
    return "undefined" == typeof window;
  } }, { key: "getUA", value: function() {
    return t2.isInBrowser() ? window.navigator.userAgent.toLowerCase() : "";
  } }, { key: "isMobile", value: function() {
    return /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
  } }, { key: "isOpera", value: function() {
    return -1 !== navigator.userAgent.indexOf("Opera");
  } }, { key: "isIE", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && e2.indexOf("msie") > 0;
  } }, { key: "isIE9", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && e2.indexOf("msie 9.0") > 0;
  } }, { key: "isEdge", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && e2.indexOf("edge/") > 0;
  } }, { key: "isChrome", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && /chrome\/\d+/.test(e2) && !t2.isEdge();
  } }, { key: "isPhantomJS", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && /phantomjs/.test(e2);
  } }, { key: "isFirefox", value: function() {
    var e2 = t2.getUA();
    return "" !== e2 && /firefox/.test(e2);
  } }]), t2;
})();
var Yt$1 = [].join, Gt$1 = v != Object, Ht$1 = jt$1("join", ",");
It$1({ target: "Array", proto: true, forced: Gt$1 || !Ht$1 }, { join: function(t2) {
  return Yt$1.call(g(this), void 0 === t2 ? "," : t2);
} });
var Xt$1, Vt$1, Kt$1 = function(t2) {
  return Object(p(t2));
}, qt$1 = Array.isArray || function(t2) {
  return "Array" == s(t2);
}, Qt$1 = !!Object.getOwnPropertySymbols && !o((function() {
  return !String(/* @__PURE__ */ Symbol());
})), Jt$1 = Qt$1 && !Symbol.sham && "symbol" == typeof Symbol.iterator, Zt$1 = F("wks"), te = r.Symbol, ee = Jt$1 ? te : te && te.withoutSetter || $, ne = function(t2) {
  return S(Zt$1, t2) || (Qt$1 && S(te, t2) ? Zt$1[t2] = te[t2] : Zt$1[t2] = ee("Symbol." + t2)), Zt$1[t2];
}, re$1 = ne("species"), oe = function(t2, e2) {
  var n2;
  return qt$1(t2) && ("function" != typeof (n2 = t2.constructor) || n2 !== Array && !qt$1(n2.prototype) ? h(n2) && null === (n2 = n2[re$1]) && (n2 = void 0) : n2 = void 0), new (void 0 === n2 ? Array : n2)(0 === e2 ? 0 : e2);
}, ie = function(t2, e2, n2) {
  var r2 = y(e2);
  r2 in t2 ? R.f(t2, r2, l(0, n2)) : t2[r2] = n2;
}, ue$1 = nt("navigator", "userAgent") || "", ae = r.process, ce = ae && ae.versions, le = ce && ce.v8;
le ? Vt$1 = (Xt$1 = le.split("."))[0] + Xt$1[1] : ue$1 && (!(Xt$1 = ue$1.match(/Edge\/(\d+)/)) || Xt$1[1] >= 74) && (Xt$1 = ue$1.match(/Chrome\/(\d+)/)) && (Vt$1 = Xt$1[1]);
var fe$1 = Vt$1 && +Vt$1, se = ne("species"), de$1 = function(t2) {
  return fe$1 >= 51 || !o((function() {
    var e2 = [];
    return (e2.constructor = {})[se] = function() {
      return { foo: 1 };
    }, 1 !== e2[t2](Boolean).foo;
  }));
}, ve$1 = de$1("splice"), pe = Mt$1("splice", { ACCESSORS: true, 0: 0, 1: 2 }), ge = Math.max, he = Math.min;
It$1({ target: "Array", proto: true, forced: !ve$1 || !pe }, { splice: function(t2, e2) {
  var n2, r2, o2, i2, u2, a2, c2 = Kt$1(this), l2 = at(c2.length), f2 = ft$1(t2, l2), s2 = arguments.length;
  if (0 === s2 ? n2 = r2 = 0 : 1 === s2 ? (n2 = 0, r2 = l2 - f2) : (n2 = s2 - 2, r2 = he(ge(it$1(e2), 0), l2 - f2)), l2 + n2 - r2 > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
  for (o2 = oe(c2, r2), i2 = 0; i2 < r2; i2++) (u2 = f2 + i2) in c2 && ie(o2, i2, c2[u2]);
  if (o2.length = r2, n2 < r2) {
    for (i2 = f2; i2 < l2 - r2; i2++) a2 = i2 + n2, (u2 = i2 + r2) in c2 ? c2[a2] = c2[u2] : delete c2[a2];
    for (i2 = l2; i2 > l2 - r2 + n2; i2--) delete c2[i2 - 1];
  } else if (n2 > r2) for (i2 = l2 - r2; i2 > f2; i2--) a2 = i2 + n2 - 1, (u2 = i2 + r2 - 1) in c2 ? c2[a2] = c2[u2] : delete c2[a2];
  for (i2 = 0; i2 < n2; i2++) c2[i2 + f2] = arguments[i2 + 2];
  return c2.length = l2 - r2 + n2, o2;
} });
var ye$1 = {};
ye$1[ne("toStringTag")] = "z";
var me$1 = "[object z]" === String(ye$1), Se$1 = ne("toStringTag"), xe = "Arguments" == s(/* @__PURE__ */ (function() {
  return arguments;
})()), be$1 = me$1 ? s : function(t2) {
  var e2, n2, r2;
  return void 0 === t2 ? "Undefined" : null === t2 ? "Null" : "string" == typeof (n2 = (function(t3, e3) {
    try {
      return t3[e3];
    } catch (t4) {
    }
  })(e2 = Object(t2), Se$1)) ? n2 : xe ? s(e2) : "Object" == (r2 = s(e2)) && "function" == typeof e2.callee ? "Arguments" : r2;
}, Ee = me$1 ? {}.toString : function() {
  return "[object " + be$1(this) + "]";
};
me$1 || Z(Object.prototype, "toString", Ee, { unsafe: true });
var we = function() {
  var t2 = A$1(this), e2 = "";
  return t2.global && (e2 += "g"), t2.ignoreCase && (e2 += "i"), t2.multiline && (e2 += "m"), t2.dotAll && (e2 += "s"), t2.unicode && (e2 += "u"), t2.sticky && (e2 += "y"), e2;
};
function Oe(t2, e2) {
  return RegExp(t2, e2);
}
var Te, Ae$1, ke$1 = { UNSUPPORTED_Y: o((function() {
  var t2 = Oe("a", "y");
  return t2.lastIndex = 2, null != t2.exec("abcd");
})), BROKEN_CARET: o((function() {
  var t2 = Oe("^r", "gy");
  return t2.lastIndex = 2, null != t2.exec("str");
})) }, Re = RegExp.prototype.exec, Ie = String.prototype.replace, je = Re, Ce$1 = (Te = /a/, Ae$1 = /b*/g, Re.call(Te, "a"), Re.call(Ae$1, "a"), 0 !== Te.lastIndex || 0 !== Ae$1.lastIndex), Le$1 = ke$1.UNSUPPORTED_Y || ke$1.BROKEN_CARET, Pe$1 = void 0 !== /()??/.exec("")[1];
(Ce$1 || Pe$1 || Le$1) && (je = function(t2) {
  var e2, n2, r2, o2, i2 = this, u2 = Le$1 && i2.sticky, a2 = we.call(i2), c2 = i2.source, l2 = 0, f2 = t2;
  return u2 && (-1 === (a2 = a2.replace("y", "")).indexOf("g") && (a2 += "g"), f2 = String(t2).slice(i2.lastIndex), i2.lastIndex > 0 && (!i2.multiline || i2.multiline && "\n" !== t2[i2.lastIndex - 1]) && (c2 = "(?: " + c2 + ")", f2 = " " + f2, l2++), n2 = new RegExp("^(?:" + c2 + ")", a2)), Pe$1 && (n2 = new RegExp("^" + c2 + "$(?!\\s)", a2)), Ce$1 && (e2 = i2.lastIndex), r2 = Re.call(u2 ? n2 : i2, f2), u2 ? r2 ? (r2.input = r2.input.slice(l2), r2[0] = r2[0].slice(l2), r2.index = i2.lastIndex, i2.lastIndex += r2[0].length) : i2.lastIndex = 0 : Ce$1 && r2 && (i2.lastIndex = i2.global ? r2.index + r2[0].length : e2), Pe$1 && r2 && r2.length > 1 && Ie.call(r2[0], n2, (function() {
    for (o2 = 1; o2 < arguments.length - 2; o2++) void 0 === arguments[o2] && (r2[o2] = void 0);
  })), r2;
});
var Me$1 = je;
It$1({ target: "RegExp", proto: true, forced: /./.exec !== Me$1 }, { exec: Me$1 });
var _e$1 = RegExp.prototype, De = _e$1.toString, Ue = o((function() {
  return "/a/b" != De.call({ source: "a", flags: "b" });
})), Ne$1 = "toString" != De.name;
(Ue || Ne$1) && Z(RegExp.prototype, "toString", (function() {
  var t2 = A$1(this), e2 = String(t2.source), n2 = t2.flags;
  return "/" + e2 + "/" + String(void 0 === n2 && t2 instanceof RegExp && !("flags" in _e$1) ? we.call(t2) : n2);
}), { unsafe: true });
var Fe = ne("species"), We = !o((function() {
  var t2 = /./;
  return t2.exec = function() {
    var t3 = [];
    return t3.groups = { a: "7" }, t3;
  }, "7" !== "".replace(t2, "$<a>");
})), ze = "$0" === "a".replace(/./, "$0"), $e = ne("replace"), Be = !!/./[$e] && "" === /./[$e]("a", "$0"), Ye$1 = !o((function() {
  var t2 = /(?:)/, e2 = t2.exec;
  t2.exec = function() {
    return e2.apply(this, arguments);
  };
  var n2 = "ab".split(t2);
  return 2 !== n2.length || "a" !== n2[0] || "b" !== n2[1];
})), Ge = function(t2, e2, n2, r2) {
  var i2 = ne(t2), u2 = !o((function() {
    var e3 = {};
    return e3[i2] = function() {
      return 7;
    }, 7 != ""[t2](e3);
  })), a2 = u2 && !o((function() {
    var e3 = false, n3 = /a/;
    return "split" === t2 && ((n3 = {}).constructor = {}, n3.constructor[Fe] = function() {
      return n3;
    }, n3.flags = "", n3[i2] = /./[i2]), n3.exec = function() {
      return e3 = true, null;
    }, n3[i2](""), !e3;
  }));
  if (!u2 || !a2 || "replace" === t2 && (!We || !ze || Be) || "split" === t2 && !Ye$1) {
    var c2 = /./[i2], l2 = n2(i2, ""[t2], (function(t3, e3, n3, r3, o2) {
      return e3.exec === Me$1 ? u2 && !o2 ? { done: true, value: c2.call(e3, n3, r3) } : { done: true, value: t3.call(n3, e3, r3) } : { done: false };
    }), { REPLACE_KEEPS_$0: ze, REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Be }), f2 = l2[0], s2 = l2[1];
    Z(String.prototype, t2, f2), Z(RegExp.prototype, i2, function(t3, e3) {
      return s2.call(t3, this, e3);
    });
  }
  r2 && I(RegExp.prototype[i2], "sham", true);
}, He = ne("match"), Xe = function(t2) {
  var e2;
  return h(t2) && (void 0 !== (e2 = t2[He]) ? !!e2 : "RegExp" == s(t2));
}, Ve$1 = function(t2) {
  if ("function" != typeof t2) throw TypeError(String(t2) + " is not a function");
  return t2;
}, Ke$1 = ne("species"), qe$1 = function(t2) {
  return function(e2, n2) {
    var r2, o2, i2 = String(p(e2)), u2 = it$1(n2), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t2 ? "" : void 0 : (r2 = i2.charCodeAt(u2)) < 55296 || r2 > 56319 || u2 + 1 === a2 || (o2 = i2.charCodeAt(u2 + 1)) < 56320 || o2 > 57343 ? t2 ? i2.charAt(u2) : r2 : t2 ? i2.slice(u2, u2 + 2) : o2 - 56320 + (r2 - 55296 << 10) + 65536;
  };
}, Qe = { charAt: qe$1(true) }, Je = Qe.charAt, Ze = function(t2, e2, n2) {
  return e2 + (n2 ? Je(t2, e2).length : 1);
}, tn = function(t2, e2) {
  var n2 = t2.exec;
  if ("function" == typeof n2) {
    var r2 = n2.call(t2, e2);
    if ("object" != typeof r2) throw TypeError("RegExp exec method returned something other than an Object or null");
    return r2;
  }
  if ("RegExp" !== s(t2)) throw TypeError("RegExp#exec called on incompatible receiver");
  return Me$1.call(t2, e2);
}, en = [].push, nn = Math.min, rn = !o((function() {
  return !RegExp(4294967295, "y");
}));
Ge("split", 2, (function(t2, e2, n2) {
  var r2;
  return r2 = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t3, n3) {
    var r3 = String(p(this)), o2 = void 0 === n3 ? 4294967295 : n3 >>> 0;
    if (0 === o2) return [];
    if (void 0 === t3) return [r3];
    if (!Xe(t3)) return e2.call(r3, t3, o2);
    for (var i2, u2, a2, c2 = [], l2 = (t3.ignoreCase ? "i" : "") + (t3.multiline ? "m" : "") + (t3.unicode ? "u" : "") + (t3.sticky ? "y" : ""), f2 = 0, s2 = new RegExp(t3.source, l2 + "g"); (i2 = Me$1.call(s2, r3)) && !((u2 = s2.lastIndex) > f2 && (c2.push(r3.slice(f2, i2.index)), i2.length > 1 && i2.index < r3.length && en.apply(c2, i2.slice(1)), a2 = i2[0].length, f2 = u2, c2.length >= o2)); ) s2.lastIndex === i2.index && s2.lastIndex++;
    return f2 === r3.length ? !a2 && s2.test("") || c2.push("") : c2.push(r3.slice(f2)), c2.length > o2 ? c2.slice(0, o2) : c2;
  } : "0".split(void 0, 0).length ? function(t3, n3) {
    return void 0 === t3 && 0 === n3 ? [] : e2.call(this, t3, n3);
  } : e2, [function(e3, n3) {
    var o2 = p(this), i2 = null == e3 ? void 0 : e3[t2];
    return void 0 !== i2 ? i2.call(e3, o2, n3) : r2.call(String(o2), e3, n3);
  }, function(t3, o2) {
    var i2 = n2(r2, t3, this, o2, r2 !== e2);
    if (i2.done) return i2.value;
    var u2 = A$1(t3), a2 = String(this), c2 = (function(t4, e3) {
      var n3, r3 = A$1(t4).constructor;
      return void 0 === r3 || null == (n3 = A$1(r3)[Ke$1]) ? e3 : Ve$1(n3);
    })(u2, RegExp), l2 = u2.unicode, f2 = (u2.ignoreCase ? "i" : "") + (u2.multiline ? "m" : "") + (u2.unicode ? "u" : "") + (rn ? "y" : "g"), s2 = new c2(rn ? u2 : "^(?:" + u2.source + ")", f2), d2 = void 0 === o2 ? 4294967295 : o2 >>> 0;
    if (0 === d2) return [];
    if (0 === a2.length) return null === tn(s2, a2) ? [a2] : [];
    for (var v2 = 0, p2 = 0, g2 = []; p2 < a2.length; ) {
      s2.lastIndex = rn ? p2 : 0;
      var h2, y2 = tn(s2, rn ? a2 : a2.slice(p2));
      if (null === y2 || (h2 = nn(at(s2.lastIndex + (rn ? 0 : p2)), a2.length)) === v2) p2 = Ze(a2, p2, l2);
      else {
        if (g2.push(a2.slice(v2, p2)), g2.length === d2) return g2;
        for (var m2 = 1; m2 <= y2.length - 1; m2++) if (g2.push(y2[m2]), g2.length === d2) return g2;
        p2 = v2 = h2;
      }
    }
    return g2.push(a2.slice(v2)), g2;
  }];
}), !rn);
var on = "	\n\v\f\r                　\u2028\u2029\uFEFF", un = "[" + on + "]", an = RegExp("^" + un + un + "*"), cn = RegExp(un + un + "*$"), ln = function(t2) {
  return function(e2) {
    var n2 = String(p(e2));
    return 1 & t2 && (n2 = n2.replace(an, "")), 2 & t2 && (n2 = n2.replace(cn, "")), n2;
  };
}, fn2 = { trim: ln(3) }, sn = fn2.trim;
It$1({ target: "String", proto: true, forced: (function(t2) {
  return o((function() {
    return !!on[t2]() || "​᠎" != "​᠎"[t2]() || on[t2].name !== t2;
  }));
})("trim") }, { trim: function() {
  return sn(this);
} });
var dn = de$1("slice"), vn = Mt$1("slice", { ACCESSORS: true, 0: 0, 1: 2 }), pn = ne("species"), gn = [].slice, hn = Math.max;
It$1({ target: "Array", proto: true, forced: !dn || !vn }, { slice: function(t2, e2) {
  var n2, r2, o2, i2 = g(this), u2 = at(i2.length), a2 = ft$1(t2, u2), c2 = ft$1(void 0 === e2 ? u2 : e2, u2);
  if (qt$1(i2) && ("function" != typeof (n2 = i2.constructor) || n2 !== Array && !qt$1(n2.prototype) ? h(n2) && null === (n2 = n2[pn]) && (n2 = void 0) : n2 = void 0, n2 === Array || void 0 === n2)) return gn.call(i2, a2, c2);
  for (r2 = new (void 0 === n2 ? Array : n2)(hn(c2 - a2, 0)), o2 = 0; a2 < c2; a2++, o2++) a2 in i2 && ie(r2, o2, i2[a2]);
  return r2.length = o2, r2;
} });
var yn = Object.keys || function(t2) {
  return pt$1(t2, gt$1);
}, mn = o((function() {
  yn(1);
}));
It$1({ target: "Object", stat: true, forced: mn }, { keys: function(t2) {
  return yn(Kt$1(t2));
} });
var Sn, xn = function(t2) {
  if (Xe(t2)) throw TypeError("The method doesn't accept regular expressions");
  return t2;
}, bn = ne("match"), En = T.f, wn = "".startsWith, On = Math.min, Tn = (function(t2) {
  var e2 = /./;
  try {
    "/./"[t2](e2);
  } catch (n2) {
    try {
      return e2[bn] = false, "/./"[t2](e2);
    } catch (t3) {
    }
  }
  return false;
})("startsWith"), An = !(Tn || (Sn = En(String.prototype, "startsWith"), !Sn || Sn.writable));
function kn(t2) {
  return (kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  })(t2);
}
It$1({ target: "String", proto: true, forced: !An && !Tn }, { startsWith: function(t2) {
  var e2 = String(p(this));
  xn(t2);
  var n2 = at(On(arguments.length > 1 ? arguments[1] : void 0, e2.length)), r2 = String(t2);
  return wn ? wn.call(e2, r2, n2) : e2.slice(n2, n2 + r2.length) === r2;
} });
var jn = function(t2) {
  return "string" == typeof t2;
}, Mn = function(t2) {
  return null !== t2 && "object" === kn(t2);
}, Vn = (function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "isWindow", value: function(t3) {
    return t3 === window;
  } }, { key: "addEventListener", value: function(t3, e2, n2) {
    var r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    t3 && e2 && n2 && t3.addEventListener(e2, n2, r2);
  } }, { key: "removeEventListener", value: function(t3, e2, n2) {
    var r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    t3 && e2 && n2 && t3.removeEventListener(e2, n2, r2);
  } }, { key: "triggerDragEvent", value: function(e2, n2) {
    var r2 = false, o2 = function(t3) {
      var e3;
      null === (e3 = n2.drag) || void 0 === e3 || e3.call(n2, t3);
    }, i2 = function e3(i3) {
      var u2;
      t2.removeEventListener(document, "mousemove", o2), t2.removeEventListener(document, "mouseup", e3), document.onselectstart = null, document.ondragstart = null, r2 = false, null === (u2 = n2.end) || void 0 === u2 || u2.call(n2, i3);
    };
    t2.addEventListener(e2, "mousedown", (function(e3) {
      var u2;
      r2 || (document.onselectstart = function() {
        return false;
      }, document.ondragstart = function() {
        return false;
      }, t2.addEventListener(document, "mousemove", o2), t2.addEventListener(document, "mouseup", i2), r2 = true, null === (u2 = n2.start) || void 0 === u2 || u2.call(n2, e3));
    }));
  } }, { key: "getBoundingClientRect", value: function(t3) {
    return t3 && Mn(t3) && 1 === t3.nodeType ? t3.getBoundingClientRect() : null;
  } }, { key: "hasClass", value: function(t3, e2) {
    return !!(t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType) && t3.classList.contains(e2.trim());
  } }, { key: "addClass", value: function(e2, n2) {
    if (e2 && Mn(e2) && jn(n2) && 1 === e2.nodeType && (n2 = n2.trim(), !t2.hasClass(e2, n2))) {
      var r2 = e2.className;
      e2.className = r2 ? r2 + " " + n2 : n2;
    }
  } }, { key: "removeClass", value: function(t3, e2) {
    if (t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType && "string" == typeof t3.className) {
      e2 = e2.trim();
      for (var n2 = t3.className.trim().split(" "), r2 = n2.length - 1; r2 >= 0; r2--) n2[r2] = n2[r2].trim(), n2[r2] && n2[r2] !== e2 || n2.splice(r2, 1);
      t3.className = n2.join(" ");
    }
  } }, { key: "toggleClass", value: function(t3, e2, n2) {
    t3 && Mn(t3) && jn(e2) && 1 === t3.nodeType && t3.classList.toggle(e2, n2);
  } }, { key: "replaceClass", value: function(e2, n2, r2) {
    e2 && Mn(e2) && jn(n2) && jn(r2) && 1 === e2.nodeType && (n2 = n2.trim(), r2 = r2.trim(), t2.removeClass(e2, n2), t2.addClass(e2, r2));
  } }, { key: "getScrollTop", value: function(t3) {
    var e2 = "scrollTop" in t3 ? t3.scrollTop : t3.pageYOffset;
    return Math.max(e2, 0);
  } }, { key: "setScrollTop", value: function(t3, e2) {
    "scrollTop" in t3 ? t3.scrollTop = e2 : t3.scrollTo(t3.scrollX, e2);
  } }, { key: "getRootScrollTop", value: function() {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  } }, { key: "setRootScrollTop", value: function(e2) {
    t2.setScrollTop(window, e2), t2.setScrollTop(document.body, e2);
  } }, { key: "getElementTop", value: function(e2, n2) {
    if (t2.isWindow(e2)) return 0;
    var r2 = n2 ? t2.getScrollTop(n2) : t2.getRootScrollTop();
    return e2.getBoundingClientRect().top + r2;
  } }, { key: "getVisibleHeight", value: function(e2) {
    return t2.isWindow(e2) ? e2.innerHeight : e2.getBoundingClientRect().height;
  } }, { key: "isHidden", value: function(t3) {
    if (!t3) return false;
    var e2 = window.getComputedStyle(t3), n2 = "none" === e2.display, r2 = null === t3.offsetParent && "fixed" !== e2.position;
    return n2 || r2;
  } }, { key: "triggerEvent", value: function(t3, e2) {
    if ("createEvent" in document) {
      var n2 = document.createEvent("HTMLEvents");
      n2.initEvent(e2, false, true), t3.dispatchEvent(n2);
    }
  } }, { key: "calcAngle", value: function(t3, e2) {
    var n2 = t3.getBoundingClientRect(), r2 = n2.left + n2.width / 2, o2 = n2.top + n2.height / 2, i2 = Math.abs(r2 - e2.clientX), u2 = Math.abs(o2 - e2.clientY), a2 = u2 / Math.sqrt(Math.pow(i2, 2) + Math.pow(u2, 2)), c2 = Math.acos(a2), l2 = Math.floor(180 / (Math.PI / c2));
    return e2.clientX > r2 && e2.clientY > o2 && (l2 = 180 - l2), e2.clientX == r2 && e2.clientY > o2 && (l2 = 180), e2.clientX > r2 && e2.clientY == o2 && (l2 = 90), e2.clientX < r2 && e2.clientY > o2 && (l2 = 180 + l2), e2.clientX < r2 && e2.clientY == o2 && (l2 = 270), e2.clientX < r2 && e2.clientY < o2 && (l2 = 360 - l2), l2;
  } }, { key: "querySelector", value: function(t3, e2) {
    return e2 ? e2.querySelector(t3) : document.querySelector(t3);
  } }, { key: "createElement", value: function(t3) {
    for (var e2 = document.createElement(t3), n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++) r2[o2 - 1] = arguments[o2];
    for (var i2 = 0; i2 < r2.length; i2++) r2[i2] && e2.classList.add(r2[i2]);
    return e2;
  } }, { key: "appendChild", value: function(t3) {
    for (var e2 = 0; e2 < (arguments.length <= 1 ? 0 : arguments.length - 1); e2++) t3.appendChild(e2 + 1 < 1 || arguments.length <= e2 + 1 ? void 0 : arguments[e2 + 1]);
  } }, { key: "getWindow", value: function(t3) {
    if ("[object Window]" !== t3.toString()) {
      var e2 = t3.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t3;
  } }, { key: "isElement", value: function(t3) {
    return t3 instanceof this.getWindow(t3).Element || t3 instanceof Element;
  } }, { key: "isHTMLElement", value: function(t3) {
    return t3 instanceof this.getWindow(t3).HTMLElement || t3 instanceof HTMLElement;
  } }, { key: "isShadowRoot", value: function(t3) {
    return "undefined" != typeof ShadowRoot && (t3 instanceof this.getWindow(t3).ShadowRoot || t3 instanceof ShadowRoot);
  } }, { key: "getWindowScroll", value: function(t3) {
    var e2 = this.getWindow(t3);
    return { scrollLeft: e2.pageXOffset || 0, scrollTop: e2.pageYOffset || 0 };
  } }]), t2;
})(), Kn = Math.floor, qn = "".replace, Qn = /\$([$&'`]|\d\d?|<[^>]*>)/g, Jn = /\$([$&'`]|\d\d?)/g, Zn = function(t2, e2, n2, r2, o2, i2) {
  var u2 = n2 + t2.length, a2 = r2.length, c2 = Jn;
  return void 0 !== o2 && (o2 = Kt$1(o2), c2 = Qn), qn.call(i2, c2, (function(i3, c3) {
    var l2;
    switch (c3.charAt(0)) {
      case "$":
        return "$";
      case "&":
        return t2;
      case "`":
        return e2.slice(0, n2);
      case "'":
        return e2.slice(u2);
      case "<":
        l2 = o2[c3.slice(1, -1)];
        break;
      default:
        var f2 = +c3;
        if (0 === f2) return i3;
        if (f2 > a2) {
          var s2 = Kn(f2 / 10);
          return 0 === s2 ? i3 : s2 <= a2 ? void 0 === r2[s2 - 1] ? c3.charAt(1) : r2[s2 - 1] + c3.charAt(1) : i3;
        }
        l2 = r2[f2 - 1];
    }
    return void 0 === l2 ? "" : l2;
  }));
}, tr = Math.max, er = Math.min;
Ge("replace", 2, (function(t2, e2, n2, r2) {
  var o2 = r2.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, i2 = r2.REPLACE_KEEPS_$0, u2 = o2 ? "$" : "$0";
  return [function(n3, r3) {
    var o3 = p(this), i3 = null == n3 ? void 0 : n3[t2];
    return void 0 !== i3 ? i3.call(n3, o3, r3) : e2.call(String(o3), n3, r3);
  }, function(t3, r3) {
    if (!o2 && i2 || "string" == typeof r3 && -1 === r3.indexOf(u2)) {
      var a2 = n2(e2, t3, this, r3);
      if (a2.done) return a2.value;
    }
    var c2 = A$1(t3), l2 = String(this), f2 = "function" == typeof r3;
    f2 || (r3 = String(r3));
    var s2 = c2.global;
    if (s2) {
      var d2 = c2.unicode;
      c2.lastIndex = 0;
    }
    for (var v2 = []; ; ) {
      var p2 = tn(c2, l2);
      if (null === p2) break;
      if (v2.push(p2), !s2) break;
      "" === String(p2[0]) && (c2.lastIndex = Ze(l2, at(c2.lastIndex), d2));
    }
    for (var g2, h2 = "", y2 = 0, m2 = 0; m2 < v2.length; m2++) {
      p2 = v2[m2];
      for (var S2 = String(p2[0]), x2 = tr(er(it$1(p2.index), l2.length), 0), b2 = [], E2 = 1; E2 < p2.length; E2++) b2.push(void 0 === (g2 = p2[E2]) ? g2 : String(g2));
      var w2 = p2.groups;
      if (f2) {
        var O2 = [S2].concat(b2, x2, l2);
        void 0 !== w2 && O2.push(w2);
        var T2 = String(r3.apply(void 0, O2));
      } else T2 = Zn(S2, l2, x2, b2, w2, r3);
      x2 >= y2 && (h2 += l2.slice(y2, x2) + T2, y2 = x2 + S2.length);
    }
    return h2 + l2.slice(y2);
  }];
}));
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "camelize", value: function(t3) {
    return t3.replace(/-(\w)/g, (function(t4, e2) {
      return e2 ? e2.toUpperCase() : "";
    }));
  } }, { key: "capitalize", value: function(t3) {
    return t3.charAt(0).toUpperCase() + t3.slice(1);
  } }]), t2;
})();
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "_clone", value: function() {
  } }]), t2;
})();
var or = ne("isConcatSpreadable"), ir = fe$1 >= 51 || !o((function() {
  var t2 = [];
  return t2[or] = false, t2.concat()[0] !== t2;
})), ur = de$1("concat"), ar = function(t2) {
  if (!h(t2)) return false;
  var e2 = t2[or];
  return void 0 !== e2 ? !!e2 : qt$1(t2);
};
It$1({ target: "Array", proto: true, forced: !ir || !ur }, { concat: function(t2) {
  var e2, n2, r2, o2, i2, u2 = Kt$1(this), a2 = oe(u2, 0), c2 = 0;
  for (e2 = -1, r2 = arguments.length; e2 < r2; e2++) if (ar(i2 = -1 === e2 ? u2 : arguments[e2])) {
    if (c2 + (o2 = at(i2.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    for (n2 = 0; n2 < o2; n2++, c2++) n2 in i2 && ie(a2, c2, i2[n2]);
  } else {
    if (c2 >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
    ie(a2, c2++, i2);
  }
  return a2.length = c2, a2;
} });
var cr, lr = function(t2, e2, n2) {
  if (Ve$1(t2), void 0 === e2) return t2;
  switch (n2) {
    case 0:
      return function() {
        return t2.call(e2);
      };
    case 1:
      return function(n3) {
        return t2.call(e2, n3);
      };
    case 2:
      return function(n3, r2) {
        return t2.call(e2, n3, r2);
      };
    case 3:
      return function(n3, r2, o2) {
        return t2.call(e2, n3, r2, o2);
      };
  }
  return function() {
    return t2.apply(e2, arguments);
  };
}, fr = [].push, sr = function(t2) {
  var e2 = 1 == t2, n2 = 2 == t2, r2 = 3 == t2, o2 = 4 == t2, i2 = 6 == t2, u2 = 7 == t2, a2 = 5 == t2 || i2;
  return function(c2, l2, f2, s2) {
    for (var d2, p2, g2 = Kt$1(c2), h2 = v(g2), y2 = lr(l2, f2, 3), m2 = at(h2.length), S2 = 0, x2 = s2 || oe, b2 = e2 ? x2(c2, m2) : n2 || u2 ? x2(c2, 0) : void 0; m2 > S2; S2++) if ((a2 || S2 in h2) && (p2 = y2(d2 = h2[S2], S2, g2), t2)) if (e2) b2[S2] = p2;
    else if (p2) switch (t2) {
      case 3:
        return true;
      case 5:
        return d2;
      case 6:
        return S2;
      case 2:
        fr.call(b2, d2);
    }
    else switch (t2) {
      case 4:
        return false;
      case 7:
        fr.call(b2, d2);
    }
    return i2 ? -1 : r2 || o2 ? o2 : b2;
  };
}, dr = { find: sr(5), findIndex: sr(6) }, vr = i ? Object.defineProperties : function(t2, e2) {
  A$1(t2);
  for (var n2, r2 = yn(e2), o2 = r2.length, i2 = 0; o2 > i2; ) R.f(t2, n2 = r2[i2++], e2[n2]);
  return t2;
}, pr = nt("document", "documentElement"), gr = Y("IE_PROTO"), hr = function() {
}, yr = function(t2) {
  return "<script>" + t2 + "<\/script>";
}, mr = function() {
  try {
    cr = document.domain && new ActiveXObject("htmlfile");
  } catch (t3) {
  }
  var t2, e2;
  mr = cr ? (function(t3) {
    t3.write(yr("")), t3.close();
    var e3 = t3.parentWindow.Object;
    return t3 = null, e3;
  })(cr) : ((e2 = E("iframe")).style.display = "none", pr.appendChild(e2), e2.src = String("javascript:"), (t2 = e2.contentWindow.document).open(), t2.write(yr("document.F=Object")), t2.close(), t2.F);
  for (var n2 = gt$1.length; n2--; ) delete mr.prototype[gt$1[n2]];
  return mr();
};
G[gr] = true;
var Sr = Object.create || function(t2, e2) {
  var n2;
  return null !== t2 ? (hr.prototype = A$1(t2), n2 = new hr(), hr.prototype = null, n2[gr] = t2) : n2 = mr(), void 0 === e2 ? n2 : vr(n2, e2);
}, xr = ne("unscopables"), br = Array.prototype;
null == br[xr] && R.f(br, xr, { configurable: true, value: Sr(null) });
var Er = function(t2) {
  br[xr][t2] = true;
}, wr = dr.find, Or = true, Tr = Mt$1("find");
"find" in [] && Array(1).find((function() {
  Or = false;
})), It$1({ target: "Array", proto: true, forced: Or || !Tr }, { find: function(t2) {
  return wr(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} }), Er("find");
var Ar = dr.findIndex, kr = true, Rr = Mt$1("findIndex");
"findIndex" in [] && Array(1).findIndex((function() {
  kr = false;
})), It$1({ target: "Array", proto: true, forced: kr || !Rr }, { findIndex: function(t2) {
  return Ar(this, t2, arguments.length > 1 ? arguments[1] : void 0);
} }), Er("findIndex");
var Ir = function(t2, e2, n2, r2, o2, i2, u2, a2) {
  for (var c2, l2 = o2, f2 = 0, s2 = !!u2 && lr(u2, a2, 3); f2 < r2; ) {
    if (f2 in n2) {
      if (c2 = s2 ? s2(n2[f2], f2, e2) : n2[f2], i2 > 0 && qt$1(c2)) l2 = Ir(t2, e2, c2, at(c2.length), l2, i2 - 1) - 1;
      else {
        if (l2 >= 9007199254740991) throw TypeError("Exceed the acceptable array length");
        t2[l2] = c2;
      }
      l2++;
    }
    f2++;
  }
  return l2;
}, jr = Ir;
It$1({ target: "Array", proto: true }, { flat: function() {
  var t2 = arguments.length ? arguments[0] : void 0, e2 = Kt$1(this), n2 = at(e2.length), r2 = oe(e2, 0);
  return r2.length = jr(r2, e2, e2, n2, 0, void 0 === t2 ? 1 : it$1(t2)), r2;
} });
var Cr = function(t2) {
  var e2 = t2.return;
  if (void 0 !== e2) return A$1(e2.call(t2)).value;
}, Lr = function(t2, e2, n2, r2) {
  try {
    return r2 ? e2(A$1(n2)[0], n2[1]) : e2(n2);
  } catch (e3) {
    throw Cr(t2), e3;
  }
}, Pr = {}, Mr = ne("iterator"), _r = Array.prototype, Dr = function(t2) {
  return void 0 !== t2 && (Pr.Array === t2 || _r[Mr] === t2);
}, Ur = ne("iterator"), Nr = function(t2) {
  if (null != t2) return t2[Ur] || t2["@@iterator"] || Pr[be$1(t2)];
}, Fr = ne("iterator"), Wr = false;
try {
  var zr = 0, $r = { next: function() {
    return { done: !!zr++ };
  }, return: function() {
    Wr = true;
  } };
  $r[Fr] = function() {
    return this;
  }, Array.from($r, (function() {
    throw 2;
  }));
} catch (t2) {
}
var Br = function(t2, e2) {
  if (!Wr) return false;
  var n2 = false;
  try {
    var r2 = {};
    r2[Fr] = function() {
      return { next: function() {
        return { done: n2 = true };
      } };
    }, t2(r2);
  } catch (t3) {
  }
  return n2;
}, Yr = !Br((function(t2) {
  Array.from(t2);
}));
It$1({ target: "Array", stat: true, forced: Yr }, { from: function(t2) {
  var e2, n2, r2, o2, i2, u2, a2 = Kt$1(t2), c2 = "function" == typeof this ? this : Array, l2 = arguments.length, f2 = l2 > 1 ? arguments[1] : void 0, s2 = void 0 !== f2, d2 = Nr(a2), v2 = 0;
  if (s2 && (f2 = lr(f2, l2 > 2 ? arguments[2] : void 0, 2)), null == d2 || c2 == Array && Dr(d2)) for (n2 = new c2(e2 = at(a2.length)); e2 > v2; v2++) u2 = s2 ? f2(a2[v2], v2) : a2[v2], ie(n2, v2, u2);
  else for (i2 = (o2 = d2.call(a2)).next, n2 = new c2(); !(r2 = i2.call(o2)).done; v2++) u2 = s2 ? Lr(o2, f2, [r2.value, v2], true) : r2.value, ie(n2, v2, u2);
  return n2.length = v2, n2;
} });
var Gr = function(t2) {
  return function(e2, n2, r2, o2) {
    Ve$1(n2);
    var i2 = Kt$1(e2), u2 = v(i2), a2 = at(i2.length), c2 = t2 ? a2 - 1 : 0, l2 = t2 ? -1 : 1;
    if (r2 < 2) for (; ; ) {
      if (c2 in u2) {
        o2 = u2[c2], c2 += l2;
        break;
      }
      if (c2 += l2, t2 ? c2 < 0 : a2 <= c2) throw TypeError("Reduce of empty array with no initial value");
    }
    for (; t2 ? c2 >= 0 : a2 > c2; c2 += l2) c2 in u2 && (o2 = n2(o2, u2[c2], c2, i2));
    return o2;
  };
}, Hr = { left: Gr(false) }, Xr = "process" == s(r.process), Vr = Hr.left, Kr = jt$1("reduce"), qr = Mt$1("reduce", { 1: 0 });
It$1({ target: "Array", proto: true, forced: !Kr || !qr || !Xr && fe$1 > 79 && fe$1 < 83 }, { reduce: function(t2) {
  return Vr(this, t2, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
} }), Er("flat");
var Qr, Jr, Zr, to$1 = !o((function() {
  return Object.isExtensible(Object.preventExtensions({}));
})), eo$1 = e((function(t2) {
  var e2 = R.f, n2 = $("meta"), r2 = 0, o2 = Object.isExtensible || function() {
    return true;
  }, i2 = function(t3) {
    e2(t3, n2, { value: { objectID: "O" + ++r2, weakData: {} } });
  }, u2 = t2.exports = { REQUIRED: false, fastKey: function(t3, e3) {
    if (!h(t3)) return "symbol" == typeof t3 ? t3 : ("string" == typeof t3 ? "S" : "P") + t3;
    if (!S(t3, n2)) {
      if (!o2(t3)) return "F";
      if (!e3) return "E";
      i2(t3);
    }
    return t3[n2].objectID;
  }, getWeakData: function(t3, e3) {
    if (!S(t3, n2)) {
      if (!o2(t3)) return true;
      if (!e3) return false;
      i2(t3);
    }
    return t3[n2].weakData;
  }, onFreeze: function(t3) {
    return to$1 && u2.REQUIRED && o2(t3) && !S(t3, n2) && i2(t3), t3;
  } };
  G[n2] = true;
})), no$1 = function(t2, e2) {
  this.stopped = t2, this.result = e2;
}, ro$1 = function(t2, e2, n2) {
  var r2, o2, i2, u2, a2, c2, l2, f2 = n2 && n2.that, s2 = !(!n2 || !n2.AS_ENTRIES), d2 = !(!n2 || !n2.IS_ITERATOR), v2 = !(!n2 || !n2.INTERRUPTED), p2 = lr(e2, f2, 1 + s2 + v2), g2 = function(t3) {
    return r2 && Cr(r2), new no$1(true, t3);
  }, h2 = function(t3) {
    return s2 ? (A$1(t3), v2 ? p2(t3[0], t3[1], g2) : p2(t3[0], t3[1])) : v2 ? p2(t3, g2) : p2(t3);
  };
  if (d2) r2 = t2;
  else {
    if ("function" != typeof (o2 = Nr(t2))) throw TypeError("Target is not iterable");
    if (Dr(o2)) {
      for (i2 = 0, u2 = at(t2.length); u2 > i2; i2++) if ((a2 = h2(t2[i2])) && a2 instanceof no$1) return a2;
      return new no$1(false);
    }
    r2 = o2.call(t2);
  }
  for (c2 = r2.next; !(l2 = c2.call(r2)).done; ) {
    try {
      a2 = h2(l2.value);
    } catch (t3) {
      throw Cr(r2), t3;
    }
    if ("object" == typeof a2 && a2 && a2 instanceof no$1) return a2;
  }
  return new no$1(false);
}, oo$1 = function(t2, e2, n2) {
  if (!(t2 instanceof e2)) throw TypeError("Incorrect " + (n2 ? n2 + " " : "") + "invocation");
  return t2;
}, io$1 = R.f, uo$1 = ne("toStringTag"), ao$1 = function(t2, e2, n2) {
  t2 && !S(t2 = n2 ? t2 : t2.prototype, uo$1) && io$1(t2, uo$1, { configurable: true, value: e2 });
}, co$1 = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
  var t2, e2 = false, n2 = {};
  try {
    (t2 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n2, []), e2 = n2 instanceof Array;
  } catch (t3) {
  }
  return function(n3, r2) {
    return A$1(n3), (function(t3) {
      if (!h(t3) && null !== t3) throw TypeError("Can't set " + String(t3) + " as a prototype");
    })(r2), e2 ? t2.call(n3, r2) : n3.__proto__ = r2, n3;
  };
})() : void 0), lo$1 = function(t2, e2, n2) {
  for (var r2 in e2) Z(t2, r2, e2[r2], n2);
  return t2;
}, fo$1 = !o((function() {
  function t2() {
  }
  return t2.prototype.constructor = null, Object.getPrototypeOf(new t2()) !== t2.prototype;
})), so$1 = Y("IE_PROTO"), vo$1 = Object.prototype, po$1 = fo$1 ? Object.getPrototypeOf : function(t2) {
  return t2 = Kt$1(t2), S(t2, so$1) ? t2[so$1] : "function" == typeof t2.constructor && t2 instanceof t2.constructor ? t2.constructor.prototype : t2 instanceof Object ? vo$1 : null;
}, go$1 = ne("iterator"), ho$1 = false;
[].keys && ("next" in (Zr = [].keys()) ? (Jr = po$1(po$1(Zr))) !== Object.prototype && (Qr = Jr) : ho$1 = true), (null == Qr || o((function() {
  var t2 = {};
  return Qr[go$1].call(t2) !== t2;
}))) && (Qr = {}), S(Qr, go$1) || I(Qr, go$1, (function() {
  return this;
}));
var yo$1 = { IteratorPrototype: Qr, BUGGY_SAFARI_ITERATORS: ho$1 }, mo$1 = yo$1.IteratorPrototype, So$1 = function() {
  return this;
}, xo = yo$1.IteratorPrototype, bo$1 = yo$1.BUGGY_SAFARI_ITERATORS, Eo$1 = ne("iterator"), wo$1 = function() {
  return this;
}, Oo$1 = function(t2, e2, n2, r2, o2, i2, u2) {
  !(function(t3, e3, n3) {
    var r3 = e3 + " Iterator";
    t3.prototype = Sr(mo$1, { next: l(1, n3) }), ao$1(t3, r3, false), Pr[r3] = So$1;
  })(n2, e2, r2);
  var a2, c2, f2, s2 = function(t3) {
    if (t3 === o2 && h2) return h2;
    if (!bo$1 && t3 in p2) return p2[t3];
    switch (t3) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new n2(this, t3);
        };
    }
    return function() {
      return new n2(this);
    };
  }, d2 = e2 + " Iterator", v2 = false, p2 = t2.prototype, g2 = p2[Eo$1] || p2["@@iterator"] || o2 && p2[o2], h2 = !bo$1 && g2 || s2(o2), y2 = "Array" == e2 && p2.entries || g2;
  if (y2 && (a2 = po$1(y2.call(new t2())), xo !== Object.prototype && a2.next && (po$1(a2) !== xo && (co$1 ? co$1(a2, xo) : "function" != typeof a2[Eo$1] && I(a2, Eo$1, wo$1)), ao$1(a2, d2, true))), "values" == o2 && g2 && "values" !== g2.name && (v2 = true, h2 = function() {
    return g2.call(this);
  }), p2[Eo$1] !== h2 && I(p2, Eo$1, h2), Pr[e2] = h2, o2) if (c2 = { values: s2("values"), keys: i2 ? h2 : s2("keys"), entries: s2("entries") }, u2) for (f2 in c2) (bo$1 || v2 || !(f2 in p2)) && Z(p2, f2, c2[f2]);
  else It$1({ target: e2, proto: true, forced: bo$1 || v2 }, c2);
  return c2;
}, To$1 = ne("species"), Ao$1 = R.f, ko$1 = eo$1.fastKey, Ro$1 = J.set, Io$1 = J.getterFor;
!(function(t2, e2, n2) {
  var i2 = -1 !== t2.indexOf("Map"), u2 = -1 !== t2.indexOf("Weak"), a2 = i2 ? "set" : "add", c2 = r[t2], l2 = c2 && c2.prototype, f2 = c2, s2 = {}, d2 = function(t3) {
    var e3 = l2[t3];
    Z(l2, t3, "add" == t3 ? function(t4) {
      return e3.call(this, 0 === t4 ? 0 : t4), this;
    } : "delete" == t3 ? function(t4) {
      return !(u2 && !h(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
    } : "get" == t3 ? function(t4) {
      return u2 && !h(t4) ? void 0 : e3.call(this, 0 === t4 ? 0 : t4);
    } : "has" == t3 ? function(t4) {
      return !(u2 && !h(t4)) && e3.call(this, 0 === t4 ? 0 : t4);
    } : function(t4, n3) {
      return e3.call(this, 0 === t4 ? 0 : t4, n3), this;
    });
  };
  if (kt$1(t2, "function" != typeof c2 || !(u2 || l2.forEach && !o((function() {
    new c2().entries().next();
  }))))) f2 = n2.getConstructor(e2, t2, i2, a2), eo$1.REQUIRED = true;
  else if (kt$1(t2, true)) {
    var v2 = new f2(), p2 = v2[a2](u2 ? {} : -0, 1) != v2, g2 = o((function() {
      v2.has(1);
    })), y2 = Br((function(t3) {
      new c2(t3);
    })), m2 = !u2 && o((function() {
      for (var t3 = new c2(), e3 = 5; e3--; ) t3[a2](e3, e3);
      return !t3.has(-0);
    }));
    y2 || ((f2 = e2((function(e3, n3) {
      oo$1(e3, f2, t2);
      var r2 = (function(t3, e4, n4) {
        var r3, o2;
        return co$1 && "function" == typeof (r3 = e4.constructor) && r3 !== n4 && h(o2 = r3.prototype) && o2 !== n4.prototype && co$1(t3, o2), t3;
      })(new c2(), e3, f2);
      return null != n3 && ro$1(n3, r2[a2], { that: r2, AS_ENTRIES: i2 }), r2;
    }))).prototype = l2, l2.constructor = f2), (g2 || m2) && (d2("delete"), d2("has"), i2 && d2("get")), (m2 || p2) && d2(a2), u2 && l2.clear && delete l2.clear;
  }
  s2[t2] = f2, It$1({ global: true, forced: f2 != c2 }, s2), ao$1(f2, t2), u2 || n2.setStrong(f2, t2, i2);
})("Set", (function(t2) {
  return function() {
    return t2(this, arguments.length ? arguments[0] : void 0);
  };
}), { getConstructor: function(t2, e2, n2, r2) {
  var o2 = t2((function(t3, u3) {
    oo$1(t3, o2, e2), Ro$1(t3, { type: e2, index: Sr(null), first: void 0, last: void 0, size: 0 }), i || (t3.size = 0), null != u3 && ro$1(u3, t3[r2], { that: t3, AS_ENTRIES: n2 });
  })), u2 = Io$1(e2), a2 = function(t3, e3, n3) {
    var r3, o3, a3 = u2(t3), l2 = c2(t3, e3);
    return l2 ? l2.value = n3 : (a3.last = l2 = { index: o3 = ko$1(e3, true), key: e3, value: n3, previous: r3 = a3.last, next: void 0, removed: false }, a3.first || (a3.first = l2), r3 && (r3.next = l2), i ? a3.size++ : t3.size++, "F" !== o3 && (a3.index[o3] = l2)), t3;
  }, c2 = function(t3, e3) {
    var n3, r3 = u2(t3), o3 = ko$1(e3);
    if ("F" !== o3) return r3.index[o3];
    for (n3 = r3.first; n3; n3 = n3.next) if (n3.key == e3) return n3;
  };
  return lo$1(o2.prototype, { clear: function() {
    for (var t3 = u2(this), e3 = t3.index, n3 = t3.first; n3; ) n3.removed = true, n3.previous && (n3.previous = n3.previous.next = void 0), delete e3[n3.index], n3 = n3.next;
    t3.first = t3.last = void 0, i ? t3.size = 0 : this.size = 0;
  }, delete: function(t3) {
    var e3 = this, n3 = u2(e3), r3 = c2(e3, t3);
    if (r3) {
      var o3 = r3.next, a3 = r3.previous;
      delete n3.index[r3.index], r3.removed = true, a3 && (a3.next = o3), o3 && (o3.previous = a3), n3.first == r3 && (n3.first = o3), n3.last == r3 && (n3.last = a3), i ? n3.size-- : e3.size--;
    }
    return !!r3;
  }, forEach: function(t3) {
    for (var e3, n3 = u2(this), r3 = lr(t3, arguments.length > 1 ? arguments[1] : void 0, 3); e3 = e3 ? e3.next : n3.first; ) for (r3(e3.value, e3.key, this); e3 && e3.removed; ) e3 = e3.previous;
  }, has: function(t3) {
    return !!c2(this, t3);
  } }), lo$1(o2.prototype, n2 ? { get: function(t3) {
    var e3 = c2(this, t3);
    return e3 && e3.value;
  }, set: function(t3, e3) {
    return a2(this, 0 === t3 ? 0 : t3, e3);
  } } : { add: function(t3) {
    return a2(this, t3 = 0 === t3 ? 0 : t3, t3);
  } }), i && Ao$1(o2.prototype, "size", { get: function() {
    return u2(this).size;
  } }), o2;
}, setStrong: function(t2, e2, n2) {
  var r2 = e2 + " Iterator", o2 = Io$1(e2), u2 = Io$1(r2);
  Oo$1(t2, e2, (function(t3, e3) {
    Ro$1(this, { type: r2, target: t3, state: o2(t3), kind: e3, last: void 0 });
  }), (function() {
    for (var t3 = u2(this), e3 = t3.kind, n3 = t3.last; n3 && n3.removed; ) n3 = n3.previous;
    return t3.target && (t3.last = n3 = n3 ? n3.next : t3.state.first) ? "keys" == e3 ? { value: n3.key, done: false } : "values" == e3 ? { value: n3.value, done: false } : { value: [n3.key, n3.value], done: false } : (t3.target = void 0, { value: void 0, done: true });
  }), n2 ? "entries" : "values", !n2, true), (function(t3) {
    var e3 = nt(t3), n3 = R.f;
    i && e3 && !e3[To$1] && n3(e3, To$1, { configurable: true, get: function() {
      return this;
    } });
  })(e2);
} });
var jo$1 = Qe.charAt, Co$1 = J.set, Lo$1 = J.getterFor("String Iterator");
Oo$1(String, "String", (function(t2) {
  Co$1(this, { type: "String Iterator", string: String(t2), index: 0 });
}), (function() {
  var t2, e2 = Lo$1(this), n2 = e2.string, r2 = e2.index;
  return r2 >= n2.length ? { value: void 0, done: true } : (t2 = jo$1(n2, r2), e2.index += t2.length, { value: t2, done: false });
}));
var Po$1 = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Mo$1 = J.set, _o$1 = J.getterFor("Array Iterator"), Do$1 = Oo$1(Array, "Array", (function(t2, e2) {
  Mo$1(this, { type: "Array Iterator", target: g(t2), index: 0, kind: e2 });
}), (function() {
  var t2 = _o$1(this), e2 = t2.target, n2 = t2.kind, r2 = t2.index++;
  return !e2 || r2 >= e2.length ? (t2.target = void 0, { value: void 0, done: true }) : "keys" == n2 ? { value: r2, done: false } : "values" == n2 ? { value: e2[r2], done: false } : { value: [r2, e2[r2]], done: false };
}), "values");
Pr.Arguments = Pr.Array, Er("keys"), Er("values"), Er("entries");
var Uo$1 = ne("iterator"), No$1 = ne("toStringTag"), Fo$1 = Do$1.values;
for (var Wo$1 in Po$1) {
  var zo$1 = r[Wo$1], $o$1 = zo$1 && zo$1.prototype;
  if ($o$1) {
    if ($o$1[Uo$1] !== Fo$1) try {
      I($o$1, Uo$1, Fo$1);
    } catch (t2) {
      $o$1[Uo$1] = Fo$1;
    }
    if ($o$1[No$1] || I($o$1, No$1, Wo$1), Po$1[Wo$1]) {
      for (var Bo$1 in Do$1) if ($o$1[Bo$1] !== Do$1[Bo$1]) try {
        I($o$1, Bo$1, Do$1[Bo$1]);
      } catch (t2) {
        $o$1[Bo$1] = Do$1[Bo$1];
      }
    }
  }
}
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "deduplicate", value: function(t3) {
    return Array.from(new Set(t3));
  } }, { key: "flat", value: function(e2) {
    return e2.reduce((function(e3, n2) {
      var r2 = Array.isArray(n2) ? t2.flat(n2) : n2;
      return e3.concat(r2);
    }), []);
  } }, { key: "find", value: function(t3, e2) {
    return t3.find(e2);
  } }, { key: "findIndex", value: function(t3, e2) {
    return t3.findIndex(e2);
  } }]), t2;
})();
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "today", value: function() {
    return /* @__PURE__ */ new Date();
  } }]), t2;
})();
(function() {
  function t2() {
    Wt$1(this, t2);
  }
  return $t$1(t2, null, [{ key: "range", value: function(t3, e2, n2) {
    return Math.min(Math.max(t3, e2), n2);
  } }, { key: "clamp", value: function(t3, e2, n2) {
    return e2 < n2 ? t3 < e2 ? e2 : t3 > n2 ? n2 : t3 : t3 < n2 ? n2 : t3 > e2 ? e2 : t3;
  } }]), t2;
})();
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var Symbol$1 = root.Symbol;
var objectProto$9 = Object.prototype;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var nativeObjectToString$1 = objectProto$9.toString;
var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty$7.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e2) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var objectProto$8 = Object.prototype;
var nativeObjectToString = objectProto$8.toString;
function objectToString(value) {
  return nativeObjectToString.call(value);
}
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isArray = Array.isArray;
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
function identity(value) {
  return value;
}
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var coreJsData = root["__core-js_shared__"];
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
})();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var funcProto$2 = Function.prototype;
var funcToString$2 = funcProto$2.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$2.call(func);
    } catch (e2) {
    }
    try {
      return func + "";
    } catch (e2) {
    }
  }
  return "";
}
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto$1 = Function.prototype, objectProto$7 = Object.prototype;
var funcToString$1 = funcProto$1.toString;
var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString$1.call(hasOwnProperty$6).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : void 0;
}
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0:
      return func.call(thisArg);
    case 1:
      return func.call(thisArg, args[0]);
    case 2:
      return func.call(thisArg, args[0], args[1]);
    case 3:
      return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
var HOT_COUNT = 800, HOT_SPAN = 16;
var nativeNow = Date.now;
function shortOut(func) {
  var count = 0, lastCalled = 0;
  return function() {
    var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(void 0, arguments);
  };
}
function constant(value) {
  return function() {
    return value;
  };
}
var defineProperty = (function() {
  try {
    var func = getNative(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e2) {
  }
})();
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, "toString", {
    "configurable": true,
    "enumerable": false,
    "value": constant(string),
    "writable": true
  });
};
var setToString = shortOut(baseSetToString);
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var objectProto$6 = Object.prototype;
var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$5.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
var nativeMax = Math.max;
function overRest(func, start2, transform) {
  start2 = nativeMax(start2 === void 0 ? func.length - 1 : start2, 0);
  return function() {
    var args = arguments, index = -1, length = nativeMax(args.length - start2, 0), array = Array(length);
    while (++index < length) {
      array[index] = args[start2 + index];
    }
    index = -1;
    var otherArgs = Array(start2 + 1);
    while (++index < start2) {
      otherArgs[index] = args[index];
    }
    otherArgs[start2] = transform(array);
    return apply(func, this, otherArgs);
  };
}
function baseRest(func, start2) {
  return setToString(overRest(func, start2, identity), func + "");
}
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
var objectProto$5 = Object.prototype;
function isPrototype(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$5;
  return value === proto;
}
function baseTimes(n2, iteratee) {
  var index = -1, result = Array(n2);
  while (++index < n2) {
    result[index] = iteratee(index);
  }
  return result;
}
var argsTag$1 = "[object Arguments]";
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag$1;
}
var objectProto$4 = Object.prototype;
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;
var isArguments = baseIsArguments(/* @__PURE__ */ (function() {
  return arguments;
})()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
function stubFalse() {
  return false;
}
var freeExports$2 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$2 = freeExports$2 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$2 = freeModule$2 && freeModule$2.exports === freeExports$2;
var Buffer$1 = moduleExports$2 ? root.Buffer : void 0;
var nativeIsBuffer = Buffer$1 ? Buffer$1.isBuffer : void 0;
var isBuffer = nativeIsBuffer || stubFalse;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag$1 = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
function baseIsTypedArray(value) {
  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}
var freeExports$1 = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule$1 = freeExports$1 && typeof module == "object" && module && !module.nodeType && module;
var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
var freeProcess = moduleExports$1 && freeGlobal.process;
var nodeUtil = (function() {
  try {
    var types = freeModule$1 && freeModule$1.require && freeModule$1.require("util").types;
    if (types) {
      return types;
    }
    return freeProcess && freeProcess.binding && freeProcess.binding("util");
  } catch (e2) {
  }
})();
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if (!(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeysIn(object);
}
var nativeCreate = getNative(Object, "create");
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
var objectProto$2 = Object.prototype;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? void 0 : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : void 0;
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== void 0 : hasOwnProperty$1.call(data, key);
}
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
  return this;
}
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf(data, key);
  return index < 0 ? void 0 : data[index][1];
}
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
var Map$1 = getNative(root, "Map");
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$1 || ListCache)(),
    "string": new Hash()
  };
}
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
function mapCacheDelete(key) {
  var result = getMapData(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
function mapCacheSet(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag = "[object Object]";
var funcProto = Function.prototype, objectProto = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}
function stackDelete(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
function stackGet(key) {
  return this.__data__.get(key);
}
function stackHas(key) {
  return this.__data__.has(key);
}
var LARGE_ARRAY_SIZE = 200;
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : void 0;
Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  {
    return buffer.slice();
  }
}
var Uint8Array = root.Uint8Array;
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = cloneArrayBuffer(typedArray.buffer);
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
var qe = Object.defineProperty;
var Ye = (e2, t2, o2) => t2 in e2 ? qe(e2, t2, { enumerable: true, configurable: true, writable: true, value: o2 }) : e2[t2] = o2;
var W = (e2, t2, o2) => (Ye(e2, typeof t2 != "symbol" ? t2 + "" : t2, o2), o2);
const P = (e2) => Math.round(e2 * 100) / 100;
class A {
  constructor(t2) {
    W(this, "instance");
    W(this, "alphaValue", 0);
    W(this, "redValue", 0);
    W(this, "greenValue", 0);
    W(this, "blueValue", 0);
    W(this, "hueValue", 0);
    W(this, "saturationValue", 0);
    W(this, "brightnessValue", 0);
    W(this, "hslSaturationValue", 0);
    W(this, "lightnessValue", 0);
    W(this, "initAlpha", () => {
      const t3 = this.instance.getAlpha();
      this.alphaValue = Math.min(1, t3) * 100;
    });
    W(this, "initLightness", () => {
      const { s: t3, l: o2 } = this.instance.toHsl();
      this.hslSaturationValue = P(t3), this.lightnessValue = P(o2);
    });
    W(this, "initRgb", () => {
      const { r: t3, g: o2, b: n2 } = this.instance.toRgb();
      this.redValue = P(t3), this.greenValue = P(o2), this.blueValue = P(n2);
    });
    W(this, "initHsb", () => {
      const { h: t3, s: o2, v: n2 } = this.instance.toHsv();
      this.hueValue = Math.min(360, Math.ceil(t3)), this.saturationValue = P(o2), this.brightnessValue = P(n2);
    });
    W(this, "toHexString", () => this.instance.toHexString());
    W(this, "toRgbString", () => this.instance.toRgbString());
    this.instance = tinycolor(t2), this.initRgb(), this.initHsb(), this.initLightness(), this.initAlpha();
  }
  toString(t2) {
    return this.instance.toString(t2);
  }
  get hex() {
    return this.instance.toHex();
  }
  set hex(t2) {
    this.instance = tinycolor(t2), this.initHsb(), this.initRgb(), this.initAlpha(), this.initLightness();
  }
  // 色调
  set hue(t2) {
    this.saturation === 0 && this.brightness === 0 && (this.saturationValue = 1, this.brightnessValue = 1), this.instance = tinycolor({
      h: P(t2),
      s: this.saturation,
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.hueValue = P(t2);
  }
  get hue() {
    return this.hueValue;
  }
  // 饱和度
  set saturation(t2) {
    this.instance = tinycolor({
      h: this.hue,
      s: P(t2),
      v: this.brightness,
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.saturationValue = P(t2);
  }
  get saturation() {
    return this.saturationValue;
  }
  // 明度
  set brightness(t2) {
    this.instance = tinycolor({
      h: this.hue,
      s: this.saturation,
      v: P(t2),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initLightness(), this.brightnessValue = P(t2);
  }
  get brightness() {
    return this.brightnessValue;
  }
  // 亮度
  set lightness(t2) {
    this.instance = tinycolor({
      h: this.hue,
      s: this.hslSaturationValue,
      l: P(t2),
      a: this.alphaValue / 100
    }), this.initRgb(), this.initHsb(), this.lightnessValue = P(t2);
  }
  get lightness() {
    return this.lightnessValue;
  }
  // red
  set red(t2) {
    const o2 = this.instance.toRgb();
    this.instance = tinycolor({
      ...o2,
      r: P(t2),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.redValue = P(t2);
  }
  get red() {
    return this.redValue;
  }
  // green
  set green(t2) {
    const o2 = this.instance.toRgb();
    this.instance = tinycolor({
      ...o2,
      g: P(t2),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.greenValue = P(t2);
  }
  get green() {
    return this.greenValue;
  }
  // blue
  set blue(t2) {
    const o2 = this.instance.toRgb();
    this.instance = tinycolor({
      ...o2,
      b: P(t2),
      a: this.alphaValue / 100
    }), this.initHsb(), this.initLightness(), this.blueValue = P(t2);
  }
  get blue() {
    return this.blueValue;
  }
  // alpha
  set alpha(t2) {
    this.instance.setAlpha(t2 / 100), this.alphaValue = t2;
  }
  get alpha() {
    return this.alphaValue;
  }
  get RGB() {
    return [this.red, this.green, this.blue, parseFloat((this.alpha / 100).toFixed(2))];
  }
  get HSB() {
    return [this.hue, this.saturation, this.brightness, parseFloat((this.alpha / 100).toFixed(2))];
  }
  get HSL() {
    return [
      this.hue,
      this.hslSaturationValue,
      this.lightness,
      parseFloat((this.alpha / 100).toFixed(2))
    ];
  }
}
function Ae(e2, t2, o2, n2) {
  return `rgba(${[e2, t2, o2, n2 / 100].join(",")})`;
}
const ue = (e2, t2, o2) => t2 < o2 ? e2 < t2 ? t2 : e2 > o2 ? o2 : e2 : e2 < o2 ? o2 : e2 > t2 ? t2 : e2, fe = "color-history", Ce = 8;
const q = (e2, t2) => {
  const o2 = e2.__vccOpts || e2;
  for (const [n2, i2] of t2)
    o2[n2] = i2;
  return o2;
}, lt = defineComponent({
  name: "Alpha",
  props: {
    color: C$1.instanceOf(A),
    size: C$1.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    const o2 = ref(null), n2 = ref(null);
    let i2 = e2.color || new A();
    const l2 = reactive({
      red: i2.red,
      green: i2.green,
      blue: i2.blue,
      alpha: i2.alpha
    });
    watch(
      () => e2.color,
      (g2) => {
        g2 && (i2 = g2, merge(l2, {
          red: g2.red,
          green: g2.green,
          blue: g2.blue,
          alpha: g2.alpha
        }));
      },
      { deep: true }
    );
    const a2 = computed(() => {
      const g2 = Ae(l2.red, l2.green, l2.blue, 0), d2 = Ae(l2.red, l2.green, l2.blue, 100);
      return {
        background: `linear-gradient(to right, ${g2} , ${d2})`
      };
    }), r2 = () => {
      if (o2.value && n2.value) {
        const g2 = l2.alpha / 100, d2 = o2.value.getBoundingClientRect(), m2 = n2.value.offsetWidth;
        return Math.round(g2 * (d2.width - m2) + m2 / 2);
      }
      return 0;
    }, c2 = computed(() => ({
      left: r2() + "px",
      top: 0
    })), k2 = (g2) => {
      g2.target !== o2.value && p2(g2);
    }, p2 = (g2) => {
      if (g2.stopPropagation(), o2.value && n2.value) {
        const d2 = o2.value.getBoundingClientRect(), m2 = n2.value.offsetWidth;
        let b2 = g2.clientX - d2.left;
        b2 = Math.max(m2 / 2, b2), b2 = Math.min(b2, d2.width - m2 / 2);
        const h2 = Math.round((b2 - m2 / 2) / (d2.width - m2) * 100);
        i2.alpha = h2, l2.alpha = h2, t2("change", h2);
      }
    };
    return tryOnMounted(() => {
      const g2 = {
        drag: (d2) => {
          p2(d2);
        },
        end: (d2) => {
          p2(d2);
        }
      };
      o2.value && n2.value && Vn.triggerDragEvent(o2.value, g2);
    }), { barElement: o2, cursorElement: n2, getCursorStyle: c2, getBackgroundStyle: a2, onClickSider: k2 };
  }
}), st = (e2) => (pushScopeId("data-v-18925ba6"), e2 = e2(), popScopeId(), e2), it = /* @__PURE__ */ st(() => /* @__PURE__ */ createBaseVNode("div", { class: "vc-alpha-slider__bar-handle" }, null, -1)), ct = [
  it
];
function ut(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-alpha-slider", "transparent", { "small-slider": e2.size === "small" }])
  }, [
    createBaseVNode("div", {
      ref: "barElement",
      class: "vc-alpha-slider__bar",
      style: normalizeStyle(e2.getBackgroundStyle),
      onClick: t2[0] || (t2[0] = (...a2) => e2.onClickSider && e2.onClickSider(...a2))
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["vc-alpha-slider__bar-pointer", { "small-bar": e2.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(e2.getCursorStyle)
      }, ct, 6)
    ], 4)
  ], 2);
}
const ve = /* @__PURE__ */ q(lt, [["render", ut], ["__scopeId", "data-v-18925ba6"]]);
const dt = [
  // 第一行
  [
    "#fcc02e",
    "#f67c01",
    "#e64a19",
    "#d81b43",
    "#8e24aa",
    "#512da7",
    "#1f87e8",
    "#008781",
    "#05a045"
  ],
  // 第二行
  [
    "#fed835",
    "#fb8c00",
    "#f5511e",
    "#eb1d4e",
    "#9c28b1",
    "#5d35b0",
    "#2097f3",
    "#029688",
    "#4cb050"
  ],
  // 第三行
  [
    "#ffeb3c",
    "#ffa727",
    "#fe5722",
    "#eb4165",
    "#aa47bc",
    "#673bb7",
    "#42a5f6",
    "#26a59a",
    "#83c683"
  ],
  // 第四行
  [
    "#fff176",
    "#ffb74e",
    "#ff8a66",
    "#f1627e",
    "#b968c7",
    "#7986cc",
    "#64b5f6",
    "#80cbc4",
    "#a5d6a7"
  ],
  // 第五行
  [
    "#fff59c",
    "#ffcc80",
    "#ffab91",
    "#fb879e",
    "#cf93d9",
    "#9ea8db",
    "#90caf8",
    "#b2dfdc",
    "#c8e6ca"
  ],
  // 最后一行
  [
    "transparent",
    "#ffffff",
    "#dedede",
    "#a9a9a9",
    "#4b4b4b",
    "#353535",
    "#212121",
    "#000000",
    "advance"
  ]
], gt = defineComponent({
  name: "Palette",
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    return { palettes: dt, computedBgStyle: (i2) => i2 === "transparent" ? i2 : i2 === "advance" ? {} : { background: tinycolor(i2).toRgbString() }, onColorChange: (i2) => {
      t2("change", i2);
    } };
  }
}), ht = { class: "vc-compact" }, pt = ["onClick"];
function ft(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", ht, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(e2.palettes, (a2, r2) => (openBlock(), createElementBlock("div", {
      key: r2,
      class: "vc-compact__row"
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a2, (c2, k2) => (openBlock(), createElementBlock("div", {
        key: k2,
        class: "vc-compact__color-cube--wrap",
        onClick: (p2) => e2.onColorChange(c2)
      }, [
        createBaseVNode("div", {
          class: normalizeClass([
            "vc-compact__color_cube",
            {
              advance: c2 === "advance",
              transparent: c2 === "transparent"
            }
          ]),
          style: normalizeStyle(e2.computedBgStyle(c2))
        }, null, 6)
      ], 8, pt))), 128))
    ]))), 128))
  ]);
}
const Ke = /* @__PURE__ */ q(gt, [["render", ft], ["__scopeId", "data-v-b969fd48"]]);
const Ct = defineComponent({
  name: "Board",
  props: {
    color: C$1.instanceOf(A),
    round: C$1.bool.def(false),
    hide: C$1.bool.def(true)
  },
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    var y2, f2, w2;
    const o2 = getCurrentInstance(), n2 = {
      h: ((y2 = e2.color) == null ? void 0 : y2.hue) || 0,
      s: 1,
      v: 1
    }, i2 = new A(n2).toHexString(), l2 = reactive({
      hueColor: i2,
      saturation: ((f2 = e2.color) == null ? void 0 : f2.saturation) || 0,
      brightness: ((w2 = e2.color) == null ? void 0 : w2.brightness) || 0
    }), a2 = ref(0), r2 = ref(0), c2 = ref(), k2 = computed(() => ({
      top: a2.value + "px",
      left: r2.value + "px"
    })), p2 = () => {
      if (o2) {
        const S2 = o2.vnode.el;
        r2.value = l2.saturation * (S2 == null ? void 0 : S2.clientWidth), a2.value = (1 - l2.brightness) * (S2 == null ? void 0 : S2.clientHeight);
      }
    };
    let g2 = false;
    const d2 = (S2) => {
      g2 = true, h2(S2);
    }, m2 = (S2) => {
      g2 && h2(S2);
    }, b2 = () => {
      g2 = false;
    }, h2 = (S2) => {
      if (o2) {
        const F2 = o2.vnode.el, E2 = F2 == null ? void 0 : F2.getBoundingClientRect();
        let L2 = S2.clientX - E2.left, U2 = S2.clientY - E2.top;
        L2 = ue(L2, 0, E2.width), U2 = ue(U2, 0, E2.height);
        const J2 = L2 / E2.width, X = ue(-(U2 / E2.height) + 1, 0, 1);
        r2.value = L2, a2.value = U2, l2.saturation = J2, l2.brightness = X, t2("change", J2, X);
      }
    };
    return tryOnMounted(() => {
      o2 && o2.vnode.el && c2.value && nextTick(() => {
        p2();
      });
    }), whenever(
      () => e2.color,
      (S2) => {
        merge(l2, {
          hueColor: new A({ h: S2.hue, s: 1, v: 1 }).toHexString(),
          saturation: S2.saturation,
          brightness: S2.brightness
        }), p2();
      },
      { deep: true }
    ), { state: l2, cursorElement: c2, getCursorStyle: k2, onClickBoard: d2, onDrag: m2, onDragEnd: b2 };
  }
}), be = (e2) => (pushScopeId("data-v-7f0cdcdf"), e2 = e2(), popScopeId(), e2), vt = /* @__PURE__ */ be(() => /* @__PURE__ */ createBaseVNode("div", { class: "vc-saturation__white" }, null, -1)), bt = /* @__PURE__ */ be(() => /* @__PURE__ */ createBaseVNode("div", { class: "vc-saturation__black" }, null, -1)), yt = /* @__PURE__ */ be(() => /* @__PURE__ */ createBaseVNode("div", null, null, -1)), _t = [
  yt
];
function mt(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", {
    ref: "boardElement",
    class: normalizeClass(["vc-saturation", { "vc-saturation__chrome": e2.round, "vc-saturation__hidden": e2.hide }]),
    style: normalizeStyle({ backgroundColor: e2.state.hueColor }),
    onMousedown: t2[0] || (t2[0] = (...a2) => e2.onClickBoard && e2.onClickBoard(...a2)),
    onMousemove: t2[1] || (t2[1] = (...a2) => e2.onDrag && e2.onDrag(...a2)),
    onMouseup: t2[2] || (t2[2] = (...a2) => e2.onDragEnd && e2.onDragEnd(...a2))
  }, [
    vt,
    bt,
    createBaseVNode("div", {
      class: "vc-saturation__cursor",
      ref: "cursorElement",
      style: normalizeStyle(e2.getCursorStyle)
    }, _t, 4)
  ], 38);
}
const ye = /* @__PURE__ */ q(Ct, [["render", mt], ["__scopeId", "data-v-7f0cdcdf"]]);
const St = defineComponent({
  name: "Hue",
  props: {
    color: C$1.instanceOf(A),
    size: C$1.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    const o2 = ref(null), n2 = ref(null);
    let i2 = e2.color || new A();
    const l2 = reactive({
      hue: i2.hue || 0
    });
    watch(
      () => e2.color,
      (p2) => {
        p2 && (i2 = p2, merge(l2, { hue: i2.hue }));
      },
      { deep: true }
    );
    const a2 = () => {
      if (o2.value && n2.value) {
        const p2 = o2.value.getBoundingClientRect(), g2 = n2.value.offsetWidth;
        return l2.hue === 360 ? p2.width - g2 / 2 : l2.hue % 360 * (p2.width - g2) / 360 + g2 / 2;
      }
      return 0;
    }, r2 = computed(() => ({
      left: a2() + "px",
      top: 0
    })), c2 = (p2) => {
      p2.target !== o2.value && k2(p2);
    }, k2 = (p2) => {
      if (p2.stopPropagation(), o2.value && n2.value) {
        const g2 = o2.value.getBoundingClientRect(), d2 = n2.value.offsetWidth;
        let m2 = p2.clientX - g2.left;
        m2 = Math.min(m2, g2.width - d2 / 2), m2 = Math.max(d2 / 2, m2);
        const b2 = Math.round((m2 - d2 / 2) / (g2.width - d2) * 360);
        i2.hue = b2, l2.hue = b2, t2("change", b2);
      }
    };
    return tryOnMounted(() => {
      const p2 = {
        drag: (g2) => {
          k2(g2);
        },
        end: (g2) => {
          k2(g2);
        }
      };
      o2.value && n2.value && Vn.triggerDragEvent(o2.value, p2);
    }), { barElement: o2, cursorElement: n2, getCursorStyle: r2, onClickSider: c2 };
  }
}), kt = (e2) => (pushScopeId("data-v-e1a08576"), e2 = e2(), popScopeId(), e2), $t = /* @__PURE__ */ kt(() => /* @__PURE__ */ createBaseVNode("div", { class: "vc-hue-slider__bar-handle" }, null, -1)), wt = [
  $t
];
function Bt(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-hue-slider", { "small-slider": e2.size === "small" }])
  }, [
    createBaseVNode("div", {
      ref: "barElement",
      class: "vc-hue-slider__bar",
      onClick: t2[0] || (t2[0] = (...a2) => e2.onClickSider && e2.onClickSider(...a2))
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["vc-hue-slider__bar-pointer", { "small-bar": e2.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(e2.getCursorStyle)
      }, wt, 6)
    ], 512)
  ], 2);
}
const _e = /* @__PURE__ */ q(St, [["render", Bt], ["__scopeId", "data-v-e1a08576"]]);
const Ht = defineComponent({
  name: "Lightness",
  props: {
    color: C$1.instanceOf(A),
    size: C$1.oneOf(["small", "default"]).def("default")
  },
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    const o2 = ref(null), n2 = ref(null);
    let i2 = e2.color || new A();
    const [l2, a2, r2] = i2.HSL, c2 = reactive({
      hue: l2,
      saturation: a2,
      lightness: r2
    });
    watch(
      () => e2.color,
      (b2) => {
        if (b2) {
          i2 = b2;
          const [h2, y2, f2] = i2.HSL;
          merge(c2, {
            hue: h2,
            saturation: y2,
            lightness: f2
          });
        }
      },
      { deep: true }
    );
    const k2 = computed(() => {
      const b2 = tinycolor({
        h: c2.hue,
        s: c2.saturation,
        l: 0.8
      }).toPercentageRgbString(), h2 = tinycolor({
        h: c2.hue,
        s: c2.saturation,
        l: 0.6
      }).toPercentageRgbString(), y2 = tinycolor({
        h: c2.hue,
        s: c2.saturation,
        l: 0.4
      }).toPercentageRgbString(), f2 = tinycolor({
        h: c2.hue,
        s: c2.saturation,
        l: 0.2
      }).toPercentageRgbString();
      return {
        background: [
          `linear-gradient(to right, rgb(255, 255, 255), ${b2}, ${h2}, ${y2}, ${f2}, rgb(0, 0, 0))`,
          `-webkit-linear-gradient(left, rgb(255, 255, 255), ${b2}, ${h2}, ${y2}, ${f2}, rgb(0, 0, 0))`,
          `-moz-linear-gradient(left, rgb(255, 255, 255), ${b2}, ${h2}, ${y2}, ${f2}, rgb(0, 0, 0))`,
          `-ms-linear-gradient(left, rgb(255, 255, 255), ${b2}, ${h2}, ${y2}, ${f2}, rgb(0, 0, 0))`
        ]
      };
    }), p2 = () => {
      if (o2.value && n2.value) {
        const b2 = c2.lightness, h2 = o2.value.getBoundingClientRect(), y2 = n2.value.offsetWidth;
        return (1 - b2) * (h2.width - y2) + y2 / 2;
      }
      return 0;
    }, g2 = computed(() => ({
      left: p2() + "px",
      top: 0
    })), d2 = (b2) => {
      b2.target !== o2.value && m2(b2);
    }, m2 = (b2) => {
      if (b2.stopPropagation(), o2.value && n2.value) {
        const h2 = o2.value.getBoundingClientRect(), y2 = n2.value.offsetWidth;
        let f2 = b2.clientX - h2.left;
        f2 = Math.max(y2 / 2, f2), f2 = Math.min(f2, h2.width - y2 / 2);
        const w2 = 1 - (f2 - y2 / 2) / (h2.width - y2);
        i2.lightness = w2, t2("change", w2);
      }
    };
    return tryOnMounted(() => {
      const b2 = {
        drag: (h2) => {
          m2(h2);
        },
        end: (h2) => {
          m2(h2);
        }
      };
      o2.value && n2.value && Vn.triggerDragEvent(o2.value, b2);
    }), { barElement: o2, cursorElement: n2, getCursorStyle: g2, getBackgroundStyle: k2, onClickSider: d2 };
  }
}), Rt = (e2) => (pushScopeId("data-v-94a50a9e"), e2 = e2(), popScopeId(), e2), At = /* @__PURE__ */ Rt(() => /* @__PURE__ */ createBaseVNode("div", { class: "vc-lightness-slider__bar-handle" }, null, -1)), Pt = [
  At
];
function Vt(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-lightness-slider", { "small-slider": e2.size === "small" }])
  }, [
    createBaseVNode("div", {
      ref: "barElement",
      class: "vc-lightness-slider__bar",
      style: normalizeStyle(e2.getBackgroundStyle),
      onClick: t2[0] || (t2[0] = (...a2) => e2.onClickSider && e2.onClickSider(...a2))
    }, [
      createBaseVNode("div", {
        class: normalizeClass(["vc-lightness-slider__bar-pointer", { "small-bar": e2.size === "small" }]),
        ref: "cursorElement",
        style: normalizeStyle(e2.getCursorStyle)
      }, Pt, 6)
    ], 4)
  ], 2);
}
const Le = /* @__PURE__ */ q(Ht, [["render", Vt], ["__scopeId", "data-v-94a50a9e"]]);
const Mt = defineComponent({
  name: "History",
  props: {
    colors: C$1.arrayOf(String).def(() => []),
    round: C$1.bool.def(false)
  },
  emits: ["change"],
  setup(e2, { emit: t2 }) {
    return { onColorSelect: (n2) => {
      t2("change", n2);
    } };
  }
}), Et = {
  key: 0,
  class: "vc-colorPicker__record"
}, It = { class: "color-list" }, Kt = ["onClick"];
function Lt(e2, t2, o2, n2, i2, l2) {
  return e2.colors && e2.colors.length > 0 ? (openBlock(), createElementBlock("div", Et, [
    createBaseVNode("div", It, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e2.colors, (a2, r2) => (openBlock(), createElementBlock("div", {
        key: r2,
        class: normalizeClass(["color-item", "transparent", { "color-item__round": e2.round }]),
        onClick: (c2) => e2.onColorSelect(a2)
      }, [
        createBaseVNode("div", {
          class: "color-item__display",
          style: normalizeStyle({ backgroundColor: a2 })
        }, null, 4)
      ], 10, Kt))), 128))
    ])
  ])) : createCommentVNode("", true);
}
const me = /* @__PURE__ */ q(Mt, [["render", Lt], ["__scopeId", "data-v-0f657238"]]);
const Nt = defineComponent({
  name: "Display",
  props: {
    color: C$1.instanceOf(A),
    disableAlpha: C$1.bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(e2, { emit: t2 }) {
    var m2, b2, h2, y2;
    const { copy: o2, copied: n2, isSupported: i2 } = useClipboard(), l2 = ref("hex"), a2 = reactive({
      color: e2.color,
      hex: (m2 = e2.color) == null ? void 0 : m2.hex,
      alpha: Math.round(((b2 = e2.color) == null ? void 0 : b2.alpha) || 100),
      rgba: (h2 = e2.color) == null ? void 0 : h2.RGB,
      previewBgColor: (y2 = e2.color) == null ? void 0 : y2.toRgbString()
    }), r2 = computed(() => ({
      background: a2.previewBgColor
    })), c2 = () => {
      l2.value = l2.value === "rgba" ? "hex" : "rgba";
    }, k2 = useDebounceFn((f2) => {
      if (!f2.target.value)
        return;
      let w2 = parseInt(f2.target.value.replace("%", ""));
      w2 > 100 && (f2.target.value = "100", w2 = 100), w2 < 0 && (f2.target.value = "0", w2 = 0), isNaN(w2) && (f2.target.value = "100", w2 = 100), !isNaN(w2) && a2.color && (a2.color.alpha = w2), t2("change", a2.color);
    }, 300), p2 = useDebounceFn((f2, w2) => {
      if (a2.color) {
        if (l2.value === "hex") {
          const S2 = f2.target.value.replace("#", "");
          tinycolor(S2).isValid() ? [3, 4].includes(S2.length) && (a2.color.hex = S2) : a2.color.hex = "000000", t2("change", a2.color);
        } else if (l2.value === "rgba" && w2 === 3 && f2.target.value.toString() === "0." && a2.rgba) {
          a2.rgba[w2] = f2.target.value;
          const [S2, F2, E2, L2] = a2.rgba;
          a2.color.hex = tinycolor({ r: S2, g: F2, b: E2 }).toHex(), a2.color.alpha = Math.round(L2 * 100), t2("change", a2.color);
        }
      }
    }, 100), g2 = useDebounceFn((f2, w2) => {
      if (f2.target.value) {
        if (l2.value === "hex") {
          const S2 = f2.target.value.replace("#", "");
          tinycolor(S2).isValid() && a2.color && [6, 8].includes(S2.length) && (a2.color.hex = S2);
        } else if (w2 !== void 0 && a2.rgba && a2.color) {
          if (f2.target.value < 0 && (f2.target.value = 0), w2 === 3 && ((f2.target.value > 1 || isNaN(f2.target.value)) && (f2.target.value = 1), f2.target.value.toString() === "0."))
            return;
          w2 < 3 && f2.target.value > 255 && (f2.target.value = 255), a2.rgba[w2] = f2.target.value;
          const [S2, F2, E2, L2] = a2.rgba;
          a2.color.hex = tinycolor({ r: S2, g: F2, b: E2 }).toHex(), a2.color.alpha = Math.round(L2 * 100);
        }
        t2("change", a2.color);
      }
    }, 300), d2 = () => {
      if (i2 && a2.color) {
        const f2 = l2.value === "hex" ? a2.color.toString(a2.color.alpha === 100 ? "hex6" : "hex8") : a2.color.toRgbString();
        o2(f2 || "");
      }
    };
    return whenever(
      () => e2.color,
      (f2) => {
        f2 && (a2.color = f2, a2.alpha = Math.round(a2.color.alpha), a2.hex = a2.color.hex, a2.rgba = a2.color.RGB);
      },
      { deep: true }
    ), whenever(
      () => a2.color,
      () => {
        a2.color && (a2.previewBgColor = a2.color.toRgbString());
      },
      { deep: true }
    ), {
      state: a2,
      getBgColorStyle: r2,
      inputType: l2,
      copied: n2,
      onInputTypeChange: c2,
      onAlphaBlur: k2,
      onInputChange: g2,
      onBlurChange: p2,
      onCopyColorStr: d2
    };
  }
}), Wt = { class: "vc-display" }, Dt = { class: "vc-current-color vc-transparent" }, Tt = {
  key: 0,
  class: "copy-text"
}, Ot = {
  key: 0,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, zt = { class: "vc-color-input" }, Gt = {
  key: 0,
  class: "vc-alpha-input"
}, Ft = ["value"], Xt = {
  key: 1,
  style: { display: "flex", flex: "1", gap: "4px", height: "100%" }
}, qt = ["value", "onInput", "onBlur"];
function Yt(e2, t2, o2, n2, i2, l2) {
  return openBlock(), createElementBlock("div", Wt, [
    createBaseVNode("div", Dt, [
      createBaseVNode("div", {
        class: "color-cube",
        style: normalizeStyle(e2.getBgColorStyle),
        onClick: t2[0] || (t2[0] = (...a2) => e2.onCopyColorStr && e2.onCopyColorStr(...a2))
      }, [
        e2.copied ? (openBlock(), createElementBlock("span", Tt, "Copied!")) : createCommentVNode("", true)
      ], 4)
    ]),
    e2.inputType === "hex" ? (openBlock(), createElementBlock("div", Ot, [
      createBaseVNode("div", zt, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": t2[1] || (t2[1] = (a2) => e2.state.hex = a2),
          maxlength: "8",
          onInput: t2[2] || (t2[2] = (...a2) => e2.onInputChange && e2.onInputChange(...a2)),
          onBlur: t2[3] || (t2[3] = (...a2) => e2.onBlurChange && e2.onBlurChange(...a2))
        }, null, 544), [
          [vModelText, e2.state.hex]
        ])
      ]),
      e2.disableAlpha ? createCommentVNode("", true) : (openBlock(), createElementBlock("div", Gt, [
        createBaseVNode("input", {
          class: "vc-alpha-input__inner",
          value: e2.state.alpha,
          onInput: t2[4] || (t2[4] = (...a2) => e2.onAlphaBlur && e2.onAlphaBlur(...a2))
        }, null, 40, Ft),
        createTextVNode("% ")
      ]))
    ])) : e2.state.rgba ? (openBlock(), createElementBlock("div", Xt, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(e2.state.rgba, (a2, r2) => (openBlock(), createElementBlock("div", {
        class: "vc-color-input",
        key: r2
      }, [
        createBaseVNode("input", {
          value: a2,
          onInput: (c2) => e2.onInputChange(c2, r2),
          onBlur: (c2) => e2.onBlurChange(c2, r2)
        }, null, 40, qt)
      ]))), 128))
    ])) : createCommentVNode("", true),
    createBaseVNode("div", {
      class: "vc-input-toggle",
      onClick: t2[5] || (t2[5] = (...a2) => e2.onInputTypeChange && e2.onInputTypeChange(...a2))
    }, toDisplayString(e2.inputType), 1)
  ]);
}
const Se = /* @__PURE__ */ q(Nt, [["render", Yt], ["__scopeId", "data-v-7334ac20"]]);
const Ut = defineComponent({
  name: "FkColorPicker",
  components: { Display: Se, Alpha: ve, Palette: Ke, Board: ye, Hue: _e, Lightness: Le, History: me },
  props: {
    color: C$1.instanceOf(A),
    disableHistory: C$1.bool.def(false),
    roundHistory: C$1.bool.def(false),
    disableAlpha: C$1.bool.def(false)
  },
  emits: ["update:color", "change", "advanceChange"],
  setup(e2, { emit: t2 }) {
    const o2 = e2.color || new A(), n2 = reactive({
      color: o2,
      hex: o2.toHexString(),
      rgb: o2.toRgbString()
    }), i2 = ref(false), l2 = computed(() => ({ background: n2.rgb })), a2 = () => {
      i2.value = false, t2("advanceChange", false);
    }, r2 = useLocalStorage(fe, [], {}), c2 = useDebounceFn(() => {
      if (e2.disableHistory)
        return;
      const h2 = n2.color.toRgbString();
      if (r2.value = r2.value.filter((y2) => !tinycolor.equals(y2, h2)), !r2.value.includes(h2)) {
        for (; r2.value.length > Ce; )
          r2.value.pop();
        r2.value.unshift(h2);
      }
    }, 500), k2 = (h2) => {
      h2 === "advance" ? (i2.value = true, t2("advanceChange", true)) : (n2.color.hex = h2, t2("advanceChange", false));
    }, p2 = (h2) => {
      n2.color.alpha = h2;
    }, g2 = (h2) => {
      n2.color.hue = h2;
    }, d2 = (h2, y2) => {
      n2.color.saturation = h2, n2.color.brightness = y2;
    }, m2 = (h2) => {
      n2.color.lightness = h2;
    }, b2 = (h2) => {
      const f2 = h2.target.value.replace("#", "");
      tinycolor(f2).isValid() && (n2.color.hex = f2);
    };
    return whenever(
      () => e2.color,
      (h2) => {
        h2 && (n2.color = h2);
      },
      { deep: true }
    ), whenever(
      () => n2.color,
      () => {
        n2.hex = n2.color.hex, n2.rgb = n2.color.toRgbString(), c2(), t2("update:color", n2.color), t2("change", n2.color);
      },
      { deep: true }
    ), {
      state: n2,
      advancePanelShow: i2,
      onBack: a2,
      onCompactChange: k2,
      onAlphaChange: p2,
      onHueChange: g2,
      onBoardChange: d2,
      onLightChange: m2,
      onInputChange: b2,
      previewStyle: l2,
      historyColors: r2
    };
  }
}), jt = (e2) => (pushScopeId("data-v-48e3c224"), e2 = e2(), popScopeId(), e2), Zt = { class: "vc-fk-colorPicker" }, Jt = { class: "vc-fk-colorPicker__inner" }, Qt = { class: "vc-fk-colorPicker__header" }, xt = /* @__PURE__ */ jt(() => /* @__PURE__ */ createBaseVNode("div", { class: "back" }, null, -1)), eo = [
  xt
];
function to(e2, t2, o2, n2, i2, l2) {
  const a2 = resolveComponent("Palette"), r2 = resolveComponent("Board"), c2 = resolveComponent("Hue"), k2 = resolveComponent("Lightness"), p2 = resolveComponent("Alpha"), g2 = resolveComponent("Display"), d2 = resolveComponent("History");
  return openBlock(), createElementBlock("div", Zt, [
    createBaseVNode("div", Jt, [
      createBaseVNode("div", Qt, [
        e2.advancePanelShow ? (openBlock(), createElementBlock("span", {
          key: 0,
          style: { cursor: "pointer" },
          onClick: t2[0] || (t2[0] = (...m2) => e2.onBack && e2.onBack(...m2))
        }, eo)) : createCommentVNode("", true)
      ]),
      e2.advancePanelShow ? createCommentVNode("", true) : (openBlock(), createBlock(a2, {
        key: 0,
        onChange: e2.onCompactChange
      }, null, 8, ["onChange"])),
      e2.advancePanelShow ? (openBlock(), createBlock(r2, {
        key: 1,
        color: e2.state.color,
        onChange: e2.onBoardChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      e2.advancePanelShow ? (openBlock(), createBlock(c2, {
        key: 2,
        color: e2.state.color,
        onChange: e2.onHueChange
      }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
      e2.advancePanelShow ? createCommentVNode("", true) : (openBlock(), createBlock(k2, {
        key: 3,
        color: e2.state.color,
        onChange: e2.onLightChange
      }, null, 8, ["color", "onChange"])),
      e2.disableAlpha ? createCommentVNode("", true) : (openBlock(), createBlock(p2, {
        key: 4,
        color: e2.state.color,
        onChange: e2.onAlphaChange
      }, null, 8, ["color", "onChange"])),
      createVNode(g2, {
        color: e2.state.color,
        "disable-alpha": e2.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e2.disableHistory ? createCommentVNode("", true) : (openBlock(), createBlock(d2, {
        key: 5,
        round: e2.roundHistory,
        colors: e2.historyColors,
        onChange: e2.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const Pe = /* @__PURE__ */ q(Ut, [["render", to], ["__scopeId", "data-v-48e3c224"]]);
const oo = defineComponent({
  name: "ChromeColorPicker",
  components: { Display: Se, Alpha: ve, Board: ye, Hue: _e, History: me },
  props: {
    color: C$1.instanceOf(A),
    disableHistory: C$1.bool.def(false),
    roundHistory: C$1.bool.def(false),
    disableAlpha: C$1.bool.def(false)
  },
  emits: ["update:color", "change"],
  setup(e2, { emit: t2 }) {
    const o2 = e2.color || new A(), n2 = reactive({
      color: o2,
      hex: o2.toHexString(),
      rgb: o2.toRgbString()
    }), i2 = computed(() => ({ background: n2.rgb })), l2 = useLocalStorage(fe, [], {}), a2 = useDebounceFn(() => {
      if (e2.disableHistory)
        return;
      const d2 = n2.color.toRgbString();
      if (l2.value = l2.value.filter((m2) => !tinycolor.equals(m2, d2)), !l2.value.includes(d2)) {
        for (; l2.value.length > Ce; )
          l2.value.pop();
        l2.value.unshift(d2);
      }
    }, 500), r2 = (d2) => {
      n2.color.alpha = d2;
    }, c2 = (d2) => {
      n2.color.hue = d2;
    }, k2 = (d2) => {
      d2.hex !== void 0 && (n2.color.hex = d2.hex), d2.alpha !== void 0 && (n2.color.alpha = d2.alpha);
    }, p2 = (d2, m2) => {
      n2.color.saturation = d2, n2.color.brightness = m2;
    }, g2 = (d2) => {
      d2 !== "advance" && (n2.color.hex = d2);
    };
    return whenever(
      () => e2.color,
      (d2) => {
        d2 && (n2.color = d2);
      },
      { deep: true }
    ), whenever(
      () => n2.color,
      () => {
        n2.hex = n2.color.hex, n2.rgb = n2.color.toRgbString(), a2(), t2("update:color", n2.color), t2("change", n2.color);
      },
      { deep: true }
    ), {
      state: n2,
      previewStyle: i2,
      historyColors: l2,
      onAlphaChange: r2,
      onHueChange: c2,
      onBoardChange: p2,
      onInputChange: k2,
      onCompactChange: g2
    };
  }
}), no = { class: "vc-chrome-colorPicker" }, ao = { class: "vc-chrome-colorPicker-body" }, ro = { class: "chrome-controls" }, lo = { class: "chrome-sliders" };
function so(e2, t2, o2, n2, i2, l2) {
  const a2 = resolveComponent("Board"), r2 = resolveComponent("Hue"), c2 = resolveComponent("Alpha"), k2 = resolveComponent("Display"), p2 = resolveComponent("History");
  return openBlock(), createElementBlock("div", no, [
    createVNode(a2, {
      round: true,
      hide: false,
      color: e2.state.color,
      onChange: e2.onBoardChange
    }, null, 8, ["color", "onChange"]),
    createBaseVNode("div", ao, [
      createBaseVNode("div", ro, [
        createBaseVNode("div", lo, [
          createVNode(r2, {
            size: "small",
            color: e2.state.color,
            onChange: e2.onHueChange
          }, null, 8, ["color", "onChange"]),
          e2.disableAlpha ? createCommentVNode("", true) : (openBlock(), createBlock(c2, {
            key: 0,
            size: "small",
            color: e2.state.color,
            onChange: e2.onAlphaChange
          }, null, 8, ["color", "onChange"]))
        ])
      ]),
      createVNode(k2, {
        color: e2.state.color,
        "disable-alpha": e2.disableAlpha
      }, null, 8, ["color", "disable-alpha"]),
      e2.disableHistory ? createCommentVNode("", true) : (openBlock(), createBlock(p2, {
        key: 0,
        round: e2.roundHistory,
        colors: e2.historyColors,
        onChange: e2.onCompactChange
      }, null, 8, ["round", "colors", "onChange"]))
    ])
  ]);
}
const Ve = /* @__PURE__ */ q(oo, [["render", so], ["__scopeId", "data-v-2611d66c"]]), ke = "Vue3ColorPickerProvider", io = (e2, t2) => {
  const o2 = e2.getBoundingClientRect(), n2 = o2.left + o2.width / 2, i2 = o2.top + o2.height / 2, l2 = Math.abs(n2 - t2.clientX), a2 = Math.abs(i2 - t2.clientY), r2 = Math.sqrt(Math.pow(l2, 2) + Math.pow(a2, 2)), c2 = a2 / r2, k2 = Math.acos(c2);
  let p2 = Math.floor(180 / (Math.PI / k2));
  return t2.clientX > n2 && t2.clientY > i2 && (p2 = 180 - p2), t2.clientX == n2 && t2.clientY > i2 && (p2 = 180), t2.clientX > n2 && t2.clientY == i2 && (p2 = 90), t2.clientX < n2 && t2.clientY > i2 && (p2 = 180 + p2), t2.clientX < n2 && t2.clientY == i2 && (p2 = 270), t2.clientX < n2 && t2.clientY < i2 && (p2 = 360 - p2), p2;
};
let de = false;
const co = (e2, t2) => {
  const o2 = function(i2) {
    var l2;
    (l2 = t2.drag) == null || l2.call(t2, i2);
  }, n2 = function(i2) {
    var l2;
    document.removeEventListener("mousemove", o2, false), document.removeEventListener("mouseup", n2, false), document.onselectstart = null, document.ondragstart = null, de = false, (l2 = t2.end) == null || l2.call(t2, i2);
  };
  e2 && e2.addEventListener("mousedown", (i2) => {
    var l2;
    de || (document.onselectstart = () => false, document.ondragstart = () => false, document.addEventListener("mousemove", o2, false), document.addEventListener("mouseup", n2, false), de = true, (l2 = t2.start) == null || l2.call(t2, i2));
  });
};
const uo = {
  angle: {
    type: Number,
    default: 0
  },
  size: {
    type: Number,
    default: 16,
    validator: (e2) => e2 >= 16
  },
  borderWidth: {
    type: Number,
    default: 1,
    validator: (e2) => e2 >= 1
  },
  borderColor: {
    type: String,
    default: "#666"
  }
}, go = defineComponent({
  name: "Angle",
  props: uo,
  emits: ["update:angle", "change"],
  setup(e2, {
    emit: t2
  }) {
    const o2 = ref(null), n2 = ref(0);
    watch(() => e2.angle, (r2) => {
      n2.value = r2;
    });
    const i2 = () => {
      let r2 = Number(n2.value);
      isNaN(r2) || (r2 = r2 > 360 || r2 < 0 ? e2.angle : r2, n2.value = r2 === 360 ? 0 : r2, t2("update:angle", n2.value), t2("change", n2.value));
    }, l2 = computed(() => ({
      width: e2.size + "px",
      height: e2.size + "px",
      borderWidth: e2.borderWidth + "px",
      borderColor: e2.borderColor,
      transform: `rotate(${n2.value}deg)`
    })), a2 = (r2) => {
      o2.value && (n2.value = io(o2.value, r2) % 360, i2());
    };
    return onMounted(() => {
      const r2 = {
        drag: (c2) => {
          a2(c2);
        },
        end: (c2) => {
          a2(c2);
        }
      };
      o2.value && co(o2.value, r2);
    }), () => createVNode("div", {
      class: "bee-angle"
    }, [createVNode("div", {
      class: "bee-angle__round",
      ref: o2,
      style: l2.value
    }, null)]);
  }
});
const ho = defineComponent({
  name: "GradientColorPicker",
  components: { Angle: go, Display: Se, Alpha: ve, Palette: Ke, Board: ye, Hue: _e, Lightness: Le, History: me },
  props: {
    startColor: C$1.instanceOf(A).isRequired,
    endColor: C$1.instanceOf(A).isRequired,
    startColorStop: C$1.number.def(0),
    endColorStop: C$1.number.def(100),
    angle: C$1.number.def(0),
    type: C$1.oneOf(["linear", "radial"]).def("linear"),
    disableHistory: C$1.bool.def(false),
    roundHistory: C$1.bool.def(false),
    disableAlpha: C$1.bool.def(false),
    pickerType: C$1.oneOf(["fk", "chrome"]).def("fk")
  },
  emits: [
    "update:startColor",
    "update:endColor",
    "update:angle",
    "update:startColorStop",
    "update:endColorStop",
    "startColorChange",
    "endColorChange",
    "advanceChange",
    "angleChange",
    "startColorStopChange",
    "endColorStopChange",
    "typeChange"
  ],
  setup(e2, { emit: t2 }) {
    const o2 = reactive({
      startActive: true,
      startColor: e2.startColor,
      endColor: e2.endColor,
      startColorStop: e2.startColorStop,
      endColorStop: e2.endColorStop,
      angle: e2.angle,
      type: e2.type,
      // rgba
      startColorRgba: e2.startColor.toRgbString(),
      endColorRgba: e2.endColor.toRgbString()
    }), n2 = inject(ke), i2 = ref(e2.pickerType === "chrome"), l2 = ref(), a2 = ref(), r2 = ref();
    watch(
      () => [e2.startColor, e2.endColor, e2.angle],
      (s2) => {
        o2.startColor = s2[0], o2.endColor = s2[1], o2.angle = s2[2];
      }
    ), watch(
      () => e2.type,
      (s2) => {
        o2.type = s2;
      }
    );
    const c2 = computed({
      get: () => o2.startActive ? o2.startColor : o2.endColor,
      set: (s2) => {
        if (o2.startActive) {
          o2.startColor = s2;
          return;
        }
        o2.endColor = s2;
      }
    }), k2 = computed(() => {
      if (r2.value && l2.value) {
        const s2 = o2.startColorStop / 100, _2 = r2.value.getBoundingClientRect(), H2 = l2.value.offsetWidth;
        return Math.round(s2 * (_2.width - H2) + H2 / 2);
      }
      return 0;
    }), p2 = computed(() => {
      if (r2.value && a2.value) {
        const s2 = o2.endColorStop / 100, _2 = r2.value.getBoundingClientRect(), H2 = a2.value.offsetWidth;
        return Math.round(s2 * (_2.width - H2) + H2 / 2);
      }
      return 0;
    }), g2 = computed(() => {
      let s2 = `background: linear-gradient(${o2.angle}deg, ${o2.startColorRgba} ${o2.startColorStop}%, ${o2.endColorRgba} ${o2.endColorStop}%)`;
      return o2.type === "radial" && (s2 = `background: radial-gradient(circle, ${o2.startColorRgba} ${o2.startColorStop}%, ${o2.endColorRgba} ${o2.endColorStop}%)`), s2;
    }), d2 = (s2) => {
      var _2;
      if (o2.startActive = true, r2.value && l2.value) {
        const H2 = (_2 = r2.value) == null ? void 0 : _2.getBoundingClientRect();
        let N2 = s2.clientX - H2.left;
        N2 = Math.max(l2.value.offsetWidth / 2, N2), N2 = Math.min(N2, H2.width - l2.value.offsetWidth / 2), o2.startColorStop = Math.round(
          (N2 - l2.value.offsetWidth / 2) / (H2.width - l2.value.offsetWidth) * 100
        ), t2("update:startColorStop", o2.startColorStop), t2("startColorStopChange", o2.startColorStop);
      }
    }, m2 = (s2) => {
      var _2;
      if (o2.startActive = false, r2.value && a2.value) {
        const H2 = (_2 = r2.value) == null ? void 0 : _2.getBoundingClientRect();
        let N2 = s2.clientX - H2.left;
        N2 = Math.max(a2.value.offsetWidth / 2, N2), N2 = Math.min(N2, H2.width - a2.value.offsetWidth / 2), o2.endColorStop = Math.round(
          (N2 - a2.value.offsetWidth / 2) / (H2.width - a2.value.offsetWidth) * 100
        ), t2("update:endColorStop", o2.endColorStop), t2("endColorStopChange", o2.endColorStop);
      }
    }, b2 = (s2) => {
      const _2 = s2.target, H2 = parseInt(_2.value.replace("°", ""));
      isNaN(H2) || (o2.angle = H2 % 360), t2("update:angle", o2.angle), t2("angleChange", o2.angle);
    }, h2 = (s2) => {
      o2.angle = s2, t2("update:angle", o2.angle), t2("angleChange", o2.angle);
    }, y2 = (s2) => {
      s2 === "advance" ? (i2.value = true, t2("advanceChange", true)) : (c2.value.hex = s2, t2("advanceChange", false)), L2();
    }, f2 = (s2) => {
      c2.value.alpha = s2, L2();
    }, w2 = (s2) => {
      c2.value.hue = s2, L2();
    }, S2 = (s2, _2) => {
      c2.value.saturation = s2, c2.value.brightness = _2, L2();
    }, F2 = (s2) => {
      c2.value.lightness = s2, L2();
    }, E2 = () => {
      L2();
    }, L2 = () => {
      o2.startActive ? (t2("update:startColor", o2.startColor), t2("startColorChange", o2.startColor)) : (t2("update:endColor", o2.endColor), t2("endColorChange", o2.endColor));
    }, U2 = () => {
      i2.value = false, t2("advanceChange", false);
    }, J2 = () => {
      o2.type = o2.type === "linear" ? "radial" : "linear", t2("typeChange", o2.type);
    }, X = useLocalStorage(fe, [], {}), ce2 = useDebounceFn(() => {
      if (e2.disableHistory)
        return;
      const s2 = c2.value.toRgbString();
      if (X.value = X.value.filter((_2) => !tinycolor.equals(_2, s2)), !X.value.includes(s2)) {
        for (; X.value.length > Ce; )
          X.value.pop();
        X.value.unshift(s2);
      }
    }, 500);
    return tryOnMounted(() => {
      a2.value && l2.value && (Vn.triggerDragEvent(a2.value, {
        drag: (s2) => {
          m2(s2);
        },
        end: (s2) => {
          m2(s2);
        }
      }), Vn.triggerDragEvent(l2.value, {
        drag: (s2) => {
          d2(s2);
        },
        end: (s2) => {
          d2(s2);
        }
      }));
    }), whenever(
      () => o2.startColor,
      (s2) => {
        o2.startColorRgba = s2.toRgbString();
      },
      { deep: true }
    ), whenever(
      () => o2.endColor,
      (s2) => {
        o2.endColorRgba = s2.toRgbString();
      },
      { deep: true }
    ), whenever(
      () => c2.value,
      () => {
        ce2();
      },
      { deep: true }
    ), {
      startGradientRef: l2,
      stopGradientRef: a2,
      colorRangeRef: r2,
      state: o2,
      currentColor: c2,
      getStartColorLeft: k2,
      getEndColorLeft: p2,
      gradientBg: g2,
      advancePanelShow: i2,
      onDegreeBlur: b2,
      onCompactChange: y2,
      onAlphaChange: f2,
      onHueChange: w2,
      onBoardChange: S2,
      onLightChange: F2,
      historyColors: X,
      onBack: U2,
      onDegreeChange: h2,
      onDisplayChange: E2,
      onTypeChange: J2,
      lang: n2 == null ? void 0 : n2.lang
    };
  }
}), Ne = (e2) => (pushScopeId("data-v-c4d6d6ea"), e2 = e2(), popScopeId(), e2), po = { class: "vc-gradient-picker" }, fo = { class: "vc-gradient-picker__header" }, Co = { class: "vc-gradient__types" }, vo = { class: "vc-gradient-wrap__types" }, bo = { class: "vc-picker-degree-input vc-degree-input" }, yo = { class: "vc-degree-input__control" }, _o = ["value"], mo = { class: "vc-degree-input__panel" }, So = { class: "vc-degree-input__disk" }, ko = { class: "vc-gradient-picker__body" }, $o = {
  class: "vc-color-range",
  ref: "colorRangeRef"
}, wo = { class: "vc-color-range__container" }, Bo = { class: "vc-gradient__stop__container" }, Ho = ["title"], Ro = /* @__PURE__ */ Ne(() => /* @__PURE__ */ createBaseVNode("span", { class: "vc-gradient__stop--inner" }, null, -1)), Ao = [
  Ro
], Po = ["title"], Vo = /* @__PURE__ */ Ne(() => /* @__PURE__ */ createBaseVNode("span", { class: "vc-gradient__stop--inner" }, null, -1)), Mo = [
  Vo
];
function Eo(e2, t2, o2, n2, i2, l2) {
  var b2, h2;
  const a2 = resolveComponent("Angle"), r2 = resolveComponent("Board"), c2 = resolveComponent("Hue"), k2 = resolveComponent("Palette"), p2 = resolveComponent("Lightness"), g2 = resolveComponent("Alpha"), d2 = resolveComponent("Display"), m2 = resolveComponent("History");
  return openBlock(), createElementBlock("div", po, [
    createBaseVNode("div", fo, [
      createBaseVNode("div", null, [
        withDirectives(createBaseVNode("div", {
          class: "back",
          style: { cursor: "pointer" },
          onClick: t2[0] || (t2[0] = (...y2) => e2.onBack && e2.onBack(...y2))
        }, null, 512), [
          [vShow, e2.pickerType === "fk" && e2.advancePanelShow]
        ])
      ]),
      createBaseVNode("div", Co, [
        createBaseVNode("div", vo, [
          (openBlock(), createElementBlock(Fragment, null, renderList(["linear", "radial"], (y2) => createBaseVNode("div", {
            class: normalizeClass(["vc-gradient__type", { active: e2.state.type === y2 }]),
            key: y2,
            onClick: t2[1] || (t2[1] = (...f2) => e2.onTypeChange && e2.onTypeChange(...f2))
          }, toDisplayString(e2.lang ? e2.lang[y2] : y2), 3)), 64))
        ]),
        withDirectives(createBaseVNode("div", bo, [
          createBaseVNode("div", yo, [
            createBaseVNode("input", {
              value: e2.state.angle,
              onBlur: t2[2] || (t2[2] = (...y2) => e2.onDegreeBlur && e2.onDegreeBlur(...y2))
            }, null, 40, _o),
            createTextVNode("deg ")
          ]),
          createBaseVNode("div", mo, [
            createBaseVNode("div", So, [
              createVNode(a2, {
                angle: e2.state.angle,
                "onUpdate:angle": t2[3] || (t2[3] = (y2) => e2.state.angle = y2),
                size: 40,
                onChange: e2.onDegreeChange
              }, null, 8, ["angle", "onChange"])
            ])
          ])
        ], 512), [
          [vShow, e2.state.type === "linear"]
        ])
      ])
    ]),
    createBaseVNode("div", ko, [
      createBaseVNode("div", $o, [
        createBaseVNode("div", wo, [
          createBaseVNode("div", {
            class: "vc-background",
            style: normalizeStyle(e2.gradientBg)
          }, null, 4),
          createBaseVNode("div", Bo, [
            createBaseVNode("div", {
              class: normalizeClass(["vc-gradient__stop", {
                "vc-gradient__stop--current": e2.state.startActive
              }]),
              ref: "startGradientRef",
              title: (b2 = e2.lang) == null ? void 0 : b2.start,
              style: normalizeStyle({ left: e2.getStartColorLeft + "px", backgroundColor: e2.state.startColorRgba })
            }, Ao, 14, Ho),
            createBaseVNode("div", {
              class: normalizeClass(["vc-gradient__stop", {
                "vc-gradient__stop--current": !e2.state.startActive
              }]),
              ref: "stopGradientRef",
              title: (h2 = e2.lang) == null ? void 0 : h2.end,
              style: normalizeStyle({ left: e2.getEndColorLeft + "px", backgroundColor: e2.state.endColorRgba })
            }, Mo, 14, Po)
          ])
        ])
      ], 512)
    ]),
    e2.advancePanelShow ? (openBlock(), createBlock(r2, {
      key: 0,
      color: e2.currentColor,
      onChange: e2.onBoardChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    e2.advancePanelShow ? (openBlock(), createBlock(c2, {
      key: 1,
      color: e2.currentColor,
      onChange: e2.onHueChange
    }, null, 8, ["color", "onChange"])) : createCommentVNode("", true),
    e2.advancePanelShow ? createCommentVNode("", true) : (openBlock(), createBlock(k2, {
      key: 2,
      onChange: e2.onCompactChange
    }, null, 8, ["onChange"])),
    e2.advancePanelShow ? createCommentVNode("", true) : (openBlock(), createBlock(p2, {
      key: 3,
      color: e2.currentColor,
      onChange: e2.onLightChange
    }, null, 8, ["color", "onChange"])),
    e2.disableAlpha ? createCommentVNode("", true) : (openBlock(), createBlock(g2, {
      key: 4,
      color: e2.currentColor,
      onChange: e2.onAlphaChange
    }, null, 8, ["color", "onChange"])),
    createVNode(d2, {
      color: e2.currentColor,
      "disable-alpha": e2.disableAlpha,
      onChange: e2.onDisplayChange
    }, null, 8, ["color", "disable-alpha", "onChange"]),
    e2.disableHistory ? createCommentVNode("", true) : (openBlock(), createBlock(m2, {
      key: 5,
      round: e2.roundHistory,
      colors: e2.historyColors,
      onChange: e2.onCompactChange
    }, null, 8, ["round", "colors", "onChange"]))
  ]);
}
const Me = /* @__PURE__ */ q(ho, [["render", Eo], ["__scopeId", "data-v-c4d6d6ea"]]);
const Io = defineComponent({
  name: "WrapContainer",
  props: {
    theme: C$1.oneOf(["white", "black"]).def("white"),
    showTab: C$1.bool.def(false),
    activeKey: C$1.oneOf(["pure", "gradient"]).def("pure")
  },
  emits: ["update:activeKey", "change"],
  setup(e2, { emit: t2 }) {
    const o2 = reactive({
      activeKey: e2.activeKey
    }), n2 = inject(ke), i2 = (l2) => {
      o2.activeKey = l2, t2("update:activeKey", l2), t2("change", l2);
    };
    return whenever(
      () => e2.activeKey,
      (l2) => {
        o2.activeKey = l2;
      }
    ), { state: o2, onActiveKeyChange: i2, lang: n2 == null ? void 0 : n2.lang };
  }
}), Ko = { class: "vc-colorpicker--container" }, Lo = {
  key: 0,
  class: "vc-colorpicker--tabs"
}, No = { class: "vc-colorpicker--tabs__inner" }, Wo = { class: "vc-btn__content" }, Do = { class: "vc-btn__content" };
function To(e2, t2, o2, n2, i2, l2) {
  var a2, r2;
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["vc-colorpicker", e2.theme])
  }, [
    createBaseVNode("div", Ko, [
      e2.showTab ? (openBlock(), createElementBlock("div", Lo, [
        createBaseVNode("div", No, [
          createBaseVNode("div", {
            class: normalizeClass([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e2.state.activeKey === "pure"
              }
            ]),
            onClick: t2[0] || (t2[0] = (c2) => e2.onActiveKeyChange("pure"))
          }, [
            createBaseVNode("button", null, [
              createBaseVNode("div", Wo, toDisplayString((a2 = e2.lang) == null ? void 0 : a2.pure), 1)
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([
              "vc-colorpicker--tabs__btn",
              {
                "vc-btn-active": e2.state.activeKey === "gradient"
              }
            ]),
            onClick: t2[1] || (t2[1] = (c2) => e2.onActiveKeyChange("gradient"))
          }, [
            createBaseVNode("button", null, [
              createBaseVNode("div", Do, toDisplayString((r2 = e2.lang) == null ? void 0 : r2.gradient), 1)
            ])
          ], 2),
          createBaseVNode("div", {
            class: "vc-colorpicker--tabs__bg",
            style: normalizeStyle({
              width: "50%",
              left: `calc(${e2.state.activeKey === "gradient" ? 50 : 0}%)`
            })
          }, null, 4)
        ])
      ])) : createCommentVNode("", true),
      renderSlot(e2.$slots, "default", {}, void 0, true)
    ])
  ], 2);
}
const Oo = /* @__PURE__ */ q(Io, [["render", To], ["__scopeId", "data-v-0492277d"]]), zo = {
  start: "Start",
  end: "End",
  pure: "Pure",
  gradient: "Gradient",
  linear: "linear",
  radial: "radial"
}, Go = {
  start: "开始",
  end: "结束",
  pure: "纯色",
  gradient: "渐变",
  linear: "线性",
  radial: "径向"
}, Fo = {
  En: zo,
  "ZH-cn": Go
};
const Xo = {
  isWidget: C$1.bool.def(false),
  pickerType: C$1.oneOf(["fk", "chrome"]).def("fk"),
  shape: C$1.oneOf(["circle", "square"]).def("square"),
  pureColor: {
    type: [String, Object],
    default: "#000000"
  },
  gradientColor: C$1.string.def(
    "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 1) 100%)"
  ),
  format: {
    type: String,
    default: "rgb"
  },
  disableAlpha: C$1.bool.def(false),
  disableHistory: C$1.bool.def(false),
  roundHistory: C$1.bool.def(false),
  useType: C$1.oneOf(["pure", "gradient", "both"]).def("pure"),
  activeKey: C$1.oneOf(["pure", "gradient"]).def("pure"),
  lang: {
    type: String,
    default: "ZH-cn"
  },
  zIndex: C$1.number.def(9999),
  pickerContainer: {
    type: [String, HTMLElement],
    default: "body"
  },
  debounce: C$1.number.def(100),
  theme: C$1.oneOf(["white", "black"]).def("white"),
  blurClose: C$1.bool.def(false),
  defaultPopup: C$1.bool.def(false)
}, qo = defineComponent({
  name: "ColorPicker",
  components: { FkColorPicker: Pe, ChromeColorPicker: Ve, GradientColorPicker: Me, WrapContainer: Oo },
  inheritAttrs: false,
  props: Xo,
  emits: [
    "update:pureColor",
    "pureColorChange",
    "update:gradientColor",
    "gradientColorChange",
    "update:activeKey",
    "activeKeyChange"
  ],
  setup(e2, { emit: t2 }) {
    provide(ke, {
      lang: computed(() => Fo[e2.lang || "ZH-cn"])
    });
    const o2 = !!useSlots().extra, n2 = reactive({
      pureColor: e2.pureColor || "",
      activeKey: e2.useType === "gradient" ? "gradient" : e2.activeKey,
      //  "pure" | "gradient"
      isAdvanceMode: false
    }), i2 = new A("#000"), l2 = new A("#000"), a2 = new A(n2.pureColor), r2 = reactive({
      startColor: i2,
      endColor: l2,
      startColorStop: 0,
      endColorStop: 100,
      angle: 0,
      type: "linear",
      gradientColor: e2.gradientColor
    }), c2 = ref(a2), k2 = ref(e2.defaultPopup), p2 = ref(null), g2 = ref(null);
    let d2 = null;
    const m2 = computed(() => ({
      background: n2.activeKey !== "gradient" ? tinycolor(n2.pureColor).toRgbString() : r2.gradientColor
    })), b2 = computed(() => n2.activeKey === "gradient" ? Me.name : e2.pickerType === "fk" ? Pe.name : Ve.name), h2 = (s2) => {
      n2.isAdvanceMode = s2;
    }, y2 = computed(() => {
      const s2 = {
        disableAlpha: e2.disableAlpha,
        disableHistory: e2.disableHistory,
        roundHistory: e2.roundHistory,
        pickerType: e2.pickerType
      };
      return n2.activeKey === "gradient" ? {
        ...s2,
        startColor: r2.startColor,
        endColor: r2.endColor,
        angle: r2.angle,
        type: r2.type,
        startColorStop: r2.startColorStop,
        endColorStop: r2.endColorStop,
        onStartColorChange: (_2) => {
          r2.startColor = _2, E2();
        },
        onEndColorChange: (_2) => {
          r2.endColor = _2, E2();
        },
        onStartColorStopChange: (_2) => {
          r2.startColorStop = _2, E2();
        },
        onEndColorStopChange: (_2) => {
          r2.endColorStop = _2, E2();
        },
        onAngleChange: (_2) => {
          r2.angle = _2, E2();
        },
        onTypeChange: (_2) => {
          r2.type = _2, E2();
        },
        onAdvanceChange: h2
      } : {
        ...s2,
        disableAlpha: e2.disableAlpha,
        disableHistory: e2.disableHistory,
        roundHistory: e2.roundHistory,
        color: c2.value,
        onChange: J2,
        onAdvanceChange: h2
      };
    }), f2 = () => {
      k2.value = true, d2 ? d2.update() : U2();
    }, w2 = () => {
      k2.value = false;
    }, S2 = useDebounceFn(() => {
      !e2.isWidget && e2.blurClose && w2();
    }, 100);
    onClickOutside(g2, () => {
      w2();
    });
    const F2 = () => {
      var s2, _2, H2, N2;
      try {
        const [z2] = parse(r2.gradientColor);
        if (z2 && z2.type.includes("gradient") && z2.colorStops.length >= 2) {
          const $e2 = z2.colorStops[0], we2 = z2.colorStops[1];
          r2.startColorStop = Number((s2 = $e2.length) == null ? void 0 : s2.value) || 0, r2.endColorStop = Number((_2 = we2.length) == null ? void 0 : _2.value) || 0, z2.type === "linear-gradient" && ((H2 = z2.orientation) == null ? void 0 : H2.type) === "angular" && (r2.angle = Number((N2 = z2.orientation) == null ? void 0 : N2.value) || 0), r2.type = z2.type.split("-")[0];
          const [We2, De2, Te2, Oe2] = $e2.value, [ze2, Ge2, Fe2, Xe2] = we2.value;
          r2.startColor = new A({
            r: Number(We2),
            g: Number(De2),
            b: Number(Te2),
            a: Number(Oe2)
          }), r2.endColor = new A({
            r: Number(ze2),
            g: Number(Ge2),
            b: Number(Fe2),
            a: Number(Xe2)
          });
        }
      } catch (z2) {
        console.log(`[Parse Color]: ${z2}`);
      }
    }, E2 = useDebounceFn(() => {
      const s2 = L2();
      try {
        r2.gradientColor = stringify(s2), t2("update:gradientColor", r2.gradientColor), t2("gradientColorChange", r2.gradientColor);
      } catch (_2) {
        console.log(_2);
      }
    }, e2.debounce), L2 = () => {
      const s2 = [], _2 = r2.startColor.RGB.map((z2) => z2.toString()), H2 = r2.endColor.RGB.map((z2) => z2.toString()), N2 = [
        {
          type: "rgba",
          value: [_2[0], _2[1], _2[2], _2[3]],
          length: { value: r2.startColorStop + "", type: "%" }
        },
        {
          type: "rgba",
          value: [H2[0], H2[1], H2[2], H2[3]],
          length: { value: r2.endColorStop + "", type: "%" }
        }
      ];
      return r2.type === "linear" ? s2.push({
        type: "linear-gradient",
        orientation: { type: "angular", value: r2.angle + "" },
        colorStops: N2
      }) : r2.type === "radial" && s2.push({
        type: "radial-gradient",
        orientation: [{ type: "shape", value: "circle" }],
        colorStops: N2
      }), s2;
    }, U2 = () => {
      p2.value && g2.value && (d2 = createPopper(p2.value, g2.value, {
        placement: "auto",
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8]
            }
          },
          {
            name: "flip",
            options: {
              allowedAutoPlacements: ["top", "bottom", "left", "right"],
              rootBoundary: "viewport"
            }
          }
        ]
      }));
    }, J2 = (s2) => {
      c2.value = s2, n2.pureColor = s2.toString(e2.format), X();
    }, X = useDebounceFn(() => {
      t2("update:pureColor", n2.pureColor), t2("pureColorChange", n2.pureColor);
    }, e2.debounce), ce2 = (s2) => {
      n2.activeKey = s2, t2("update:activeKey", s2), t2("activeKeyChange", s2);
    };
    return tryOnMounted(() => {
      F2(), d2 || U2();
    }), whenever(
      () => e2.gradientColor,
      (s2) => {
        s2 != r2.gradientColor && (r2.gradientColor = s2);
      }
    ), whenever(
      () => r2.gradientColor,
      () => {
        F2();
      }
    ), whenever(
      () => e2.activeKey,
      (s2) => {
        n2.activeKey = s2;
      }
    ), whenever(
      () => e2.useType,
      (s2) => {
        n2.activeKey !== "gradient" && s2 === "gradient" ? n2.activeKey = "gradient" : n2.activeKey = "pure";
      }
    ), whenever(
      () => e2.pureColor,
      (s2) => {
        tinycolor.equals(s2, n2.pureColor) || (n2.pureColor = s2, c2.value = new A(s2));
      },
      { deep: true }
    ), {
      colorCubeRef: p2,
      pickerRef: g2,
      showPicker: k2,
      colorInstance: c2,
      getBgColorStyle: m2,
      getComponentName: b2,
      getBindArgs: y2,
      state: n2,
      hasExtra: o2,
      onColorChange: J2,
      onShowPicker: f2,
      onActiveKeyChange: ce2,
      onAutoClose: S2
    };
  }
}), Yo = {
  key: 0,
  class: "vc-color-extra"
}, Uo = {
  key: 0,
  class: "vc-color-extra"
};
function jo(e2, t2, o2, n2, i2, l2) {
  const a2 = resolveComponent("WrapContainer");
  return openBlock(), createElementBlock(Fragment, null, [
    e2.isWidget ? (openBlock(), createBlock(a2, {
      key: 0,
      "active-key": e2.state.activeKey,
      "onUpdate:activeKey": t2[0] || (t2[0] = (r2) => e2.state.activeKey = r2),
      "show-tab": e2.useType === "both",
      style: normalizeStyle({ zIndex: e2.zIndex }),
      theme: e2.theme,
      onChange: e2.onActiveKeyChange
    }, {
      default: withCtx(() => [
        (openBlock(), createBlock(resolveDynamicComponent(e2.getComponentName), mergeProps({ key: e2.getComponentName }, e2.getBindArgs), null, 16)),
        e2.hasExtra ? (openBlock(), createElementBlock("div", Yo, [
          renderSlot(e2.$slots, "extra", {}, void 0, true)
        ])) : createCommentVNode("", true)
      ]),
      _: 3
    }, 8, ["active-key", "show-tab", "style", "theme", "onChange"])) : createCommentVNode("", true),
    e2.isWidget ? createCommentVNode("", true) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createBaseVNode("div", {
        class: normalizeClass(["vc-color-wrap transparent", { round: e2.shape === "circle" }]),
        ref: "colorCubeRef"
      }, [
        createBaseVNode("div", {
          class: "current-color",
          style: normalizeStyle(e2.getBgColorStyle),
          onClick: t2[1] || (t2[1] = (...r2) => e2.onShowPicker && e2.onShowPicker(...r2))
        }, null, 4)
      ], 2),
      (openBlock(), createBlock(Teleport, { to: e2.pickerContainer }, [
        withDirectives(createBaseVNode("div", {
          ref: "pickerRef",
          style: normalizeStyle({ zIndex: e2.zIndex }),
          onMouseleave: t2[3] || (t2[3] = (...r2) => e2.onAutoClose && e2.onAutoClose(...r2))
        }, [
          e2.showPicker ? (openBlock(), createBlock(a2, {
            key: 0,
            "show-tab": e2.useType === "both" && !e2.state.isAdvanceMode,
            theme: e2.theme,
            "active-key": e2.state.activeKey,
            "onUpdate:activeKey": t2[2] || (t2[2] = (r2) => e2.state.activeKey = r2),
            onChange: e2.onActiveKeyChange
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(e2.getComponentName), mergeProps({ key: e2.getComponentName }, e2.getBindArgs), null, 16)),
              e2.hasExtra ? (openBlock(), createElementBlock("div", Uo, [
                renderSlot(e2.$slots, "extra", {}, void 0, true)
              ])) : createCommentVNode("", true)
            ]),
            _: 3
          }, 8, ["show-tab", "theme", "active-key", "onChange"])) : createCommentVNode("", true)
        ], 36), [
          [vShow, e2.showPicker]
        ])
      ], 8, ["to"]))
    ], 64))
  ], 64);
}
const re = /* @__PURE__ */ q(qo, [["render", jo], ["__scopeId", "data-v-354ca836"]]);
const _hoisted_1$4 = { class: "monsterinsights-color-picker" };
const _sfc_main$5 = {
  __name: "ColorPicker",
  props: {
    color: {
      type: String,
      default: ""
    }
  },
  emits: ["changeColor"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const showColorPicker = ref(false);
    const selectedColor = ref(props.color);
    const pickerRef = ref(null);
    const colorStyle = computed(() => ({
      backgroundColor: selectedColor.value
    }));
    watch(() => props.color, (val) => {
      selectedColor.value = val;
    });
    function togglePicker() {
      if (showColorPicker.value) {
        closePicker();
      } else {
        openPicker();
      }
    }
    function openPicker() {
      showColorPicker.value = true;
      nextTick(() => {
        document.addEventListener("click", handleDocClick);
      });
    }
    function closePicker() {
      showColorPicker.value = false;
      document.removeEventListener("click", handleDocClick);
    }
    function handleDocClick(event) {
      if (!pickerRef.value) return;
      if (pickerRef.value === event.target || pickerRef.value.contains(event.target)) {
        return;
      }
      closePicker();
    }
    function handleChange(color) {
      let next = "";
      if (color && typeof color === "object") {
        if (typeof color.toRgbString === "function") {
          next = color.toRgbString();
        } else if (typeof color.red === "number") {
          const a2 = typeof color.alpha === "number" ? color.alpha : 1;
          next = `rgba(${color.red}, ${color.green}, ${color.blue}, ${a2})`;
        } else {
          next = String(color);
        }
      } else {
        next = String(color ?? "");
      }
      selectedColor.value = next;
      emit("changeColor", next);
    }
    onBeforeUnmount(() => {
      document.removeEventListener("click", handleDocClick);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createBaseVNode("div", {
          class: "monsterinsights-colorpicker-preview",
          onClick: withModifiers(togglePicker, ["stop"])
        }, [
          createBaseVNode("span", {
            style: normalizeStyle(colorStyle.value)
          }, null, 4)
        ]),
        showColorPicker.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          ref_key: "pickerRef",
          ref: pickerRef,
          class: "monsterinsights-colorpicker-picker"
        }, [
          createVNode(unref(re), {
            "pure-color": selectedColor.value,
            format: "rgb",
            shape: "square",
            "use-type": "pure",
            "is-widget": true,
            "disable-history": true,
            onPureColorChange: handleChange
          }, null, 8, ["pure-color"])
        ], 512)) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$3 = { class: "monsterinsights-number-input-no-arrows" };
const _hoisted_2$3 = ["name", "value"];
const _hoisted_3$3 = ["textContent"];
const _sfc_main$4 = {
  __name: "PopularPostsSizeInput",
  props: {
    name: String,
    value: {
      type: [String, Number],
      default: 0
    },
    min: {
      type: Number,
      default: void 0
    },
    max: {
      type: Number,
      default: 100
    },
    unit: {
      type: String,
      default: "px"
    }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const displayValue = ref(props.value);
    watch(() => props.value, (val) => {
      displayValue.value = val;
    });
    function emitFakeChange() {
      emit("change", {
        target: {
          value: displayValue.value
        }
      });
    }
    function emitChange(e2) {
      if (props.max !== void 0 && Number(e2.target.value) > props.max) {
        displayValue.value = props.max;
        return emitFakeChange();
      }
      displayValue.value = e2.target.value;
      emit("change", e2);
    }
    function increment() {
      if (props.max !== void 0) {
        if (Number(displayValue.value) < props.max) {
          displayValue.value = Number(displayValue.value) + 1;
        } else {
          return;
        }
      } else {
        displayValue.value = Number(displayValue.value) + 1;
      }
      emitFakeChange();
    }
    function decrement() {
      if (props.min !== void 0) {
        if (Number(displayValue.value) > props.min) {
          displayValue.value = Number(displayValue.value) - 1;
        } else {
          return;
        }
      } else {
        displayValue.value = Number(displayValue.value) - 1;
      }
      emitFakeChange();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", _hoisted_1$3, [
        createBaseVNode("input", {
          type: "number",
          name: __props.name,
          value: displayValue.value,
          onChange: emitChange
        }, null, 40, _hoisted_2$3),
        createBaseVNode("span", { class: "monsterinsights-number-input-arrows" }, [
          createBaseVNode("button", {
            class: "monsterinsights-number-input-arrow monsterinsights-number-input-arrow-up",
            onClick: increment
          }, [..._cache[0] || (_cache[0] = [
            createBaseVNode("i", { class: "monstericon-arrow" }, null, -1)
          ])]),
          createBaseVNode("button", {
            class: "monsterinsights-number-input-arrow monsterinsights-number-input-arrow-down",
            onClick: decrement
          }, [..._cache[1] || (_cache[1] = [
            createBaseVNode("i", { class: "monstericon-arrow" }, null, -1)
          ])])
        ]),
        __props.unit ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "monsterinsights-number-input-unit",
          textContent: toDisplayString(__props.unit)
        }, null, 8, _hoisted_3$3)) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$2 = { class: "monsterinsights-pp-sharedcount-controls" };
const _hoisted_2$2 = ["textContent"];
const _hoisted_3$2 = ["innerHTML"];
const _hoisted_4$1 = { class: "inline-field" };
const _hoisted_5$1 = ["disabled"];
const _hoisted_6$1 = ["textContent"];
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-sharedcount-status"
};
const _hoisted_8 = ["innerHTML"];
const _sfc_main$3 = {
  __name: "PopularPostsSharedCount",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const { errorToast } = useToast();
    const text_sharedcount_api = __("SharedCount API Key", "google-analytics-for-wordpress");
    const text_sharedcount_api_description = sprintf(
      // Translators: Placeholders add a link to the sharedcount account page.
      __(
        "Insert your sharedcount API key found in your %1$sSettings%2$s panel. After, click Start Indexing.",
        "google-analytics-for-wordpress"
      ),
      '<a href="https://www.sharedcount.com/app/account-info" target="_blank" rel="noreferrer noopener">',
      "</a>"
    );
    const text_start_indexing = __("Start Indexing", "google-analytics-for-wordpress");
    const text_indexing_progress = __(
      "%1$sIndex Progress: %2$s%%.%3$s You may leave this page during indexing.",
      "google-analytics-for-wordpress"
    );
    const text_indexing_complete = __(
      "Indexing completed, counts will update automatically every day.",
      "google-analytics-for-wordpress"
    );
    const indexingButtonDisabled = ref(false);
    const sharedcountStatus = ref(false);
    const text_indexing_button = ref(text_start_indexing);
    const sharedcountButtonClass = computed(() => {
      let cls = "monsterinsights-button monsterinsights-button-gray";
      if (indexingButtonDisabled.value) {
        cls += " monsterinsights-button-disabled";
      }
      return cls;
    });
    function update_progress_text(percent) {
      if (percent === 100) {
        sharedcountStatus.value = text_indexing_complete;
      } else {
        sharedcountStatus.value = sprintf(text_indexing_progress, "<b>", percent, "</b>");
      }
    }
    async function start_sharedcount_indexing() {
      if (indexingButtonDisabled.value) return;
      indexingButtonDisabled.value = true;
      text_indexing_button.value = __("Please wait", "google-analytics-for-wordpress");
      try {
        const data = await sharedcountStartIndexing();
        text_indexing_button.value = __("Indexing started", "google-analytics-for-wordpress");
        if (data?.max_pages) {
          const progress = Math.floor(100 / data.max_pages);
          update_progress_text(progress);
        }
      } catch (err) {
        indexingButtonDisabled.value = false;
        text_indexing_button.value = text_start_indexing;
        if (err?.message) {
          errorToast({ title: err.message });
        }
      }
    }
    async function get_sharedcount_index_progress() {
      indexingButtonDisabled.value = true;
      try {
        const data = await sharedcountGetIndexProgress();
        if (data?.progress) {
          indexingButtonDisabled.value = true;
          text_indexing_button.value = __("Indexing started", "google-analytics-for-wordpress");
          update_progress_text(data.progress);
        } else {
          indexingButtonDisabled.value = false;
        }
      } catch (_err) {
        indexingButtonDisabled.value = false;
      }
    }
    onMounted(() => {
      get_sharedcount_index_progress();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            textContent: toDisplayString(unref(text_sharedcount_api))
          }, null, 8, _hoisted_2$2),
          _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
          createBaseVNode("span", { innerHTML: unref(text_sharedcount_api_description) }, null, 8, _hoisted_3$2)
        ]),
        createBaseVNode("div", _hoisted_4$1, [
          createVNode(SettingsInputText, {
            name: "sharedcount_key",
            auth_disabled: false
          }),
          createBaseVNode("button", {
            class: normalizeClass(sharedcountButtonClass.value),
            disabled: indexingButtonDisabled.value,
            onClick: start_sharedcount_indexing
          }, [
            createBaseVNode("span", {
              textContent: toDisplayString(text_indexing_button.value)
            }, null, 8, _hoisted_6$1)
          ], 10, _hoisted_5$1)
        ]),
        sharedcountStatus.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          createBaseVNode("span", { innerHTML: sharedcountStatus.value }, null, 8, _hoisted_8)
        ])) : createCommentVNode("", true)
      ]);
    };
  }
};
const _hoisted_1$1 = { class: "monsterinsights-pp-posts-picker" };
const _hoisted_2$1 = ["textContent"];
const _hoisted_3$1 = ["textContent"];
const _sfc_main$2 = {
  __name: "PopularPostsPostsPicker",
  props: {
    name: {
      type: String,
      required: true
    },
    post_type: {
      type: String,
      default: "post"
    },
    placeholder: {
      type: String,
      default: () => wp.i18n.__("Select posts/search", "google-analytics-for-wordpress")
    }
  },
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const pages = ref([]);
    const isLoading = ref(false);
    const text_search_pages_placeholder = props.placeholder;
    const text_search_pages_not_found = __("Oops! No posts found.", "google-analytics-for-wordpress");
    const text_search_no_options = __("Search by post title", "google-analytics-for-wordpress");
    const posts = computed({
      get() {
        const value = settingsStore.getSettings[props.name];
        if (!value) return [];
        try {
          return JSON.parse(JSON.stringify(value));
        } catch (_e2) {
          return [];
        }
      },
      set() {
      }
    });
    const findPages = debounce$1(async (query) => {
      isLoading.value = true;
      try {
        const response = await getPosts({
          post_type: props.post_type,
          keyword: query
        });
        pages.value = Array.isArray(response) ? response : [];
      } catch (_err) {
        const support_url = getUrl(
          "admin-notices",
          "error-upgrading-license",
          "https://www.monsterinsights.com/my-account/support"
        );
        errorToast({
          // Translators: Support link tag starts with url and support link tag ends.
          title: sprintf(
            __(
              "Oops! Can't load posts. Please try again in a few minutes. If the issue persists, please %1$scontact our support%2$s team.",
              "google-analytics-for-wordpress"
            ),
            `<a target="_blank" href="${support_url}">`,
            "</a>"
          )
        });
      } finally {
        isLoading.value = false;
      }
    }, 300);
    async function updateSetting(newValue) {
      isLoading.value = false;
      savingToast({});
      try {
        await settingsStore.updateSetting({
          name: props.name,
          // Raw array — `@/api/settings.js` already JSON-stringifies arrays
          // before posting to `monsterinsights_vue_update_settings`.
          value: newValue
        });
        successToast({});
      } catch (_err) {
        errorToast({});
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createVNode(unref(script), {
          modelValue: posts.value,
          "onUpdate:modelValue": [
            _cache[0] || (_cache[0] = ($event) => posts.value = $event),
            updateSetting
          ],
          "clear-on-select": false,
          "close-on-select": true,
          "internal-search": false,
          loading: isLoading.value,
          "max-height": 600,
          options: pages.value,
          placeholder: unref(text_search_pages_placeholder),
          searchable: true,
          "show-no-results": true,
          "show-labels": false,
          label: "title",
          "track-by": "id",
          multiple: true,
          onSearchChange: unref(findPages)
        }, {
          noResult: withCtx(() => [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_search_pages_not_found))
            }, null, 8, _hoisted_2$1)
          ]),
          noOptions: withCtx(() => [
            createBaseVNode("span", {
              textContent: toDisplayString(unref(text_search_no_options))
            }, null, 8, _hoisted_3$1)
          ]),
          _: 1
        }, 8, ["modelValue", "loading", "options", "placeholder", "onSearchChange"])
      ]);
    };
  }
};
const _sfc_main$1 = {
  __name: "PopularPostsPostTypePicker",
  props: {
    name: String,
    label: String,
    description: String
  },
  setup(__props) {
    const post_types = ref([]);
    function setPostTypes(data) {
      const next = [];
      for (const value in data) {
        if (Object.hasOwn(data, value)) {
          next.push({
            label: data[value],
            value
          });
        }
      }
      post_types.value = next;
    }
    onMounted(async () => {
      try {
        const response = await getPostTypes();
        if (response) {
          setPostTypes(response);
        }
      } catch (error) {
        console.warn("Failed to load post types:", error);
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SettingsInputSelect, {
        options: post_types.value,
        multiple: true,
        name: __props.name,
        label: __props.label,
        description: __props.description
      }, null, 8, ["options", "name", "label", "description"]);
    };
  }
};
const _hoisted_1 = { class: "monsterinsights-pp-video-block" };
const _hoisted_2 = {
  key: 0,
  class: "monsterinsights-pp-video-block-icon"
};
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = { class: "monsterinsights-pp-video-modal-content" };
const _hoisted_5 = ["aria-label"];
const _hoisted_6 = ["src"];
const _sfc_main = {
  __name: "PopularPostsVideoModal",
  props: {
    video: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    icon: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const videoVisible = ref(false);
    const text_close = __("Close", "google-analytics-for-wordpress");
    const imgClass = computed(() => `monsterinsights-bg-img${props.image}`);
    const videoSrc = computed(
      () => `${props.video}?autoplay=1&modestbranding=1&showinfo=0&rel=0&fs=1`
    );
    function onModelValue(value) {
      if (!value) {
        videoVisible.value = false;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", {
          onClick: _cache[0] || (_cache[0] = ($event) => videoVisible.value = true)
        }, [
          __props.icon ? (openBlock(), createElementBlock("span", _hoisted_2, [..._cache[2] || (_cache[2] = [
            createBaseVNode("svg", {
              width: "32",
              height: "32",
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg"
            }, [
              createBaseVNode("path", {
                d: "M4.64516 4.70968C7.78495 1.56989 11.5699 0 16 0C20.4301 0 24.1935 1.56989 27.2903 4.70968C30.4301 7.80645 32 11.5699 32 16C32 20.4301 30.4301 24.2151 27.2903 27.3548C24.1935 30.4516 20.4301 32 16 32C11.5699 32 7.78495 30.4516 4.64516 27.3548C1.54839 24.2151 0 20.4301 0 16C0 11.5699 1.54839 7.80645 4.64516 4.70968ZM23.4839 17.5484C23.7419 17.4194 23.9355 17.2258 24.0645 16.9677C24.1935 16.7097 24.2581 16.4516 24.2581 16.1935C24.2581 15.9355 24.1935 15.6774 24.0645 15.4194C23.9355 15.1613 23.7419 14.9677 23.4839 14.8387L12.129 7.93548C11.6129 7.63441 11.0968 7.63441 10.5806 7.93548C10.0645 8.23656 9.80645 8.68817 9.80645 9.29032V22.7097C9.80645 23.3118 10.0645 23.7634 10.5806 24.0645C11.0968 24.3656 11.6129 24.3656 12.129 24.0645L23.4839 17.5484Z",
                fill: "white"
              })
            ], -1)
          ])])) : createCommentVNode("", true),
          __props.image ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(imgClass.value)
          }, null, 2)) : createCommentVNode("", true),
          __props.title ? (openBlock(), createElementBlock("p", {
            key: 2,
            innerHTML: __props.title
          }, null, 8, _hoisted_3)) : createCommentVNode("", true)
        ]),
        createVNode(_sfc_main$8, {
          mode: "dialog",
          "content-class": "monsterinsights-dialog-shell",
          "overlay-class": "monsterinsights-dialog-shell-overlay monsterinsights-pp-video-modal",
          "model-value": videoVisible.value,
          dismissable: true,
          "onUpdate:modelValue": onModelValue
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createBaseVNode("button", {
                type: "button",
                class: "monsterinsights-pp-video-modal-close",
                "aria-label": unref(text_close),
                onClick: _cache[1] || (_cache[1] = ($event) => videoVisible.value = false)
              }, [..._cache[3] || (_cache[3] = [
                createBaseVNode("svg", {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg"
                }, [
                  createBaseVNode("path", {
                    d: "M8 6.5L14 0.5L15.5 2L9.5 8L15.5 14L14 15.5L8 9.5L2 15.5L0.5 14L6.5 8L0.5 2L2 0.5L8 6.5Z",
                    fill: "white"
                  })
                ], -1)
              ])], 8, _hoisted_5),
              videoVisible.value ? (openBlock(), createElementBlock("iframe", {
                key: 0,
                width: "1280",
                height: "720",
                src: videoSrc.value,
                frameborder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowfullscreen: ""
              }, null, 8, _hoisted_6)) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["model-value"])
      ]);
    };
  }
};
export {
  PopularPostsThemeLicense as P,
  _sfc_main$6 as _,
  _sfc_main$5 as a,
  _sfc_main$4 as b,
  _sfc_main as c,
  debounce$1 as d,
  _sfc_main$7 as e,
  _sfc_main$2 as f,
  _sfc_main$3 as g,
  _sfc_main$1 as h,
  usePopularPostsStore as u
};
