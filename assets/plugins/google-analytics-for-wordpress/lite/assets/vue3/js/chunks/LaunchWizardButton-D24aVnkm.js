import { j as getMiGlobal } from "./ajax-B_XS1gT5.js";
import { a as useToast } from "./addons-CSVIjAyY.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, t as toDisplayString, i as normalizeClass, s as createCommentVNode } from "./toastStore-CRCNwITM.js";
const _sfc_main = {
  __name: "LaunchWizardButton",
  props: {
    buttonClass: {
      type: [String, Object, Array],
      default: "monsterinsights-button"
    },
    buttonText: {
      type: String,
      default: "Launch Wizard"
    },
    arrowIcon: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const { loadingToast, closeToast } = useToast();
    function launchSetupWizard() {
      const wizardUrl = getMiGlobal("wizard_url");
      if (wizardUrl && wizardUrl !== "#") {
        window.location.href = wizardUrl;
        return;
      }
      loadingToast(__("Preparing setup wizard...", "google-analytics-for-wordpress"));
      wp.ajax.post("monsterinsights_generate_setup_wizard_url", {
        nonce: getMiGlobal("nonce")
      }).done((response) => {
        if (response && response.wizard_url) {
          window.location.href = response.wizard_url;
        }
      }).fail((error) => {
        console.error("Error launching wizard:", error);
        closeToast();
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(__props.buttonClass),
        onClick: launchSetupWizard
      }, [
        createBaseVNode("span", null, toDisplayString(__props.buttonText), 1),
        __props.arrowIcon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(__props.arrowIcon)
        }, null, 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
};
export {
  _sfc_main as _
};
