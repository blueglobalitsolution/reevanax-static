import { a3 as useSlots, C as watch, y as onMounted, o as openBlock, c as createElementBlock, a as createBaseVNode, i as normalizeClass, w as withDirectives, aF as vModelCheckbox, s as createCommentVNode, K as renderSlot, E as createBlock, G as withKeys, B as withModifiers, b as createVNode, D as withCtx, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { u as useSettingsStore } from "./settings-DM9kkmj_.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$1 } from "./SettingsInfoTooltip-05GT3kKT.js";
import { S as SlideDownUp } from "./SettingsBlock-DC9CU9Pg.js";
const _hoisted_1 = ["title", "tabindex"];
const _hoisted_2 = ["name", "disabled"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = {
  key: 1,
  class: "monsterinsights-checkbox-label"
};
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = {
  key: 0,
  class: "monsterinsights-collapsible"
};
const _hoisted_7 = {
  key: 0,
  class: "monsterinsights-separator"
};
const _hoisted_8 = { class: "monsterinsights-collapsible-content" };
const _sfc_main = {
  __name: "SettingsInputCheckbox",
  props: {
    name: String,
    label: String,
    description: String,
    tooltip: String,
    faux: Boolean,
    faux_tooltip: String,
    faux_tooltip_off: String,
    valueOn: String,
    valueOff: String,
    default: {
      type: Boolean,
      default: true
    },
    auth_disabled: {
      type: Boolean,
      default: true
    }
  },
  emits: ["checkboxChange", "checkbox_option_updated"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const settingsStore = useSettingsStore();
    const { isAuthed, needToAuthMessage } = useAuth();
    const { savingToast, successToast, errorToast } = useToast();
    const slots = useSlots();
    const slotCollapsibleVisible = ref(false);
    const has_tag = computed(() => {
      if (!props.auth_disabled) return true;
      return isAuthed.value;
    });
    const hasCollapsibleSlot = computed(() => !!slots.collapsible);
    const hasLabelSlot = computed(() => !!slots.label);
    const iconClass = computed(() => {
      let cls = "monstericon-arrow";
      if (slotCollapsibleVisible.value) cls += " monstericon-down";
      return cls;
    });
    const componentClass = computed(() => {
      let cls = "monsterinsights-settings-input-checkbox";
      if (slots.collapsible) cls += " has-collapsible";
      return cls;
    });
    const disabled = computed(() => {
      return has_tag.value ? props.faux : true;
    });
    const faux_tooltip_text = computed(() => {
      if (!has_tag.value) return needToAuthMessage.value;
      return checked.value ? props.faux_tooltip : props.faux_tooltip_off;
    });
    const checked = computed({
      get() {
        const settings = settingsStore.getSettings;
        let value = props.valueOn ? props.valueOn === settings[props.name] : settings[props.name];
        return props.faux ? props.default : value;
      },
      set(val) {
        let value = props.valueOff ? props.valueOff : false;
        if (val) {
          value = props.valueOn ? props.valueOn : true;
        }
        updateSetting(value);
      }
    });
    const labelClass = computed(() => {
      let cls = "monsterinsights-styled-checkbox";
      if (checked.value) cls += " monsterinsights-styled-checkbox-checked";
      return cls;
    });
    watch(checked, (current) => {
      emit("checkboxChange", current);
      slotCollapsibleVisible.value = current;
    });
    function stopClick(e) {
      if (!e.target.classList.contains("monsterinsights-styled-checkbox") && !e.target.classList.contains("monsterinsights-checkbox-label")) {
        toggleCollapsible(e);
        e.stopPropagation();
      } else {
        checked.value = !checked.value;
      }
    }
    function updateSetting(value) {
      if (disabled.value) return false;
      savingToast({});
      settingsStore.updateSetting({
        name: props.name,
        value
      }).then(() => {
        emit("checkbox_option_updated");
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function toggleCollapsible(e) {
      e.preventDefault();
      e.stopPropagation();
      slotCollapsibleVisible.value = !slotCollapsibleVisible.value;
    }
    onMounted(() => {
      slotCollapsibleVisible.value = checked.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(componentClass.value)
      }, [
        createBaseVNode("label", {
          class: normalizeClass(disabled.value ? "monsterinsights-styled-checkbox-faux" : ""),
          onClick: withModifiers(stopClick, ["prevent"]),
          onKeyup: [
            withKeys(stopClick, ["enter"]),
            withKeys(stopClick, ["space"])
          ]
        }, [
          createBaseVNode("span", {
            class: normalizeClass(labelClass.value),
            title: faux_tooltip_text.value,
            tabindex: __props.faux ? "" : 0
          }, null, 10, _hoisted_1),
          withDirectives(createBaseVNode("input", {
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => checked.value = $event),
            type: "checkbox",
            name: __props.name,
            disabled: disabled.value
          }, null, 8, _hoisted_2), [
            [vModelCheckbox, checked.value]
          ]),
          __props.label ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "monsterinsights-checkbox-label",
            innerHTML: __props.label
          }, null, 8, _hoisted_3)) : createCommentVNode("", true),
          hasLabelSlot.value ? (openBlock(), createElementBlock("span", _hoisted_4, [
            renderSlot(_ctx.$slots, "label")
          ])) : createCommentVNode("", true),
          __props.description ? (openBlock(), createElementBlock("span", {
            key: 2,
            class: "monsterinsights-checkbox-description",
            innerHTML: __props.description
          }, null, 8, _hoisted_5)) : createCommentVNode("", true),
          __props.tooltip ? (openBlock(), createBlock(_sfc_main$1, {
            key: 3,
            content: __props.tooltip
          }, null, 8, ["content"])) : createCommentVNode("", true),
          hasCollapsibleSlot.value ? (openBlock(), createElementBlock("span", {
            key: 4,
            class: "monsterinsights-settings-input-toggle-collapsible",
            role: "button",
            onKeyup: [
              withKeys(toggleCollapsible, ["enter"]),
              withKeys(toggleCollapsible, ["space"])
            ]
          }, [
            createBaseVNode("i", {
              class: normalizeClass(iconClass.value),
              tabindex: "0",
              onkeypress: "if(event.keyCode==32||event.keyCode==13){return false;};"
            }, null, 2)
          ], 32)) : createCommentVNode("", true)
        ], 34),
        createVNode(SlideDownUp, null, {
          default: withCtx(() => [
            slotCollapsibleVisible.value && hasCollapsibleSlot.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
              hasCollapsibleSlot.value ? (openBlock(), createElementBlock("div", _hoisted_7)) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_8, [
                renderSlot(_ctx.$slots, "collapsible")
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 2);
    };
  }
};
export {
  _sfc_main as _
};
