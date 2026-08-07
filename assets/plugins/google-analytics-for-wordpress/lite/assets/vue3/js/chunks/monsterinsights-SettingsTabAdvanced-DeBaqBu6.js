import { o as getUrl, k as isPro, j as getMiGlobal, r as miAjax } from "./ajax-B_XS1gT5.js";
import { u as useAuth } from "./monsterinsights-Lite-uQE5cjXl.js";
import { _ as _sfc_main$d } from "./SettingsBlock-DC9CU9Pg.js";
import { S as SettingsInputSelect } from "./SettingsInputSelect-CeXJ757T.js";
import { _ as _sfc_main$f } from "./SettingsInputRadio-BbQ7Dhsq.js";
import { _ as _sfc_main$9 } from "./SettingsInputCheckbox-DMSbcuhM.js";
import { S as SettingsInputText } from "./SettingsInputText-DEkJNBzd.js";
import { o as openBlock, c as createElementBlock, a as createBaseVNode, s as createCommentVNode, w as withDirectives, aG as vModelDynamic, F as Fragment, t as toDisplayString, B as withModifiers, m as computed, j as ref, u as unref, b as createVNode, i as normalizeClass, E as createBlock, D as withCtx } from "./toastStore-CRCNwITM.js";
import { u as useSettingsStore, f as fetchLocalGtagRemote } from "./settings-DM9kkmj_.js";
import { a as useToast, c as useAddonsStore, d as useDialog } from "./addons-CSVIjAyY.js";
import { _ as _sfc_main$a } from "./SettingsInputRepeater-DyYwxKfe.js";
import { _ as _sfc_main$b } from "./SettingsAddonUpgrade-BDHiAret.js";
import { u as useLicenseStore } from "./license-Boh3_ZVs.js";
import { _ as _sfc_main$c } from "./SettingsAddonDisabled-T8OUEbF2.js";
import { S as SettingsInputNumber } from "./SettingsInputNumber-WTq-M48c.js";
import { _ as _sfc_main$e } from "./SettingsLiteUpsellLarge-lnF3P2B8.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./TheAppHeader-DEdY-dez.js";
import "./vue-multiselect.esm-DVzdjNub.js";
import "./SettingsInfoTooltip-05GT3kKT.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const _hoisted_1$8 = { class: "monsterinsights-upload-media-wrapper" };
const _hoisted_2$7 = { class: "monsterinsights-upload-media-label" };
const _hoisted_3$6 = ["innerHTML"];
const _hoisted_4$6 = ["innerHTML"];
const _hoisted_5$4 = {
  key: 0,
  class: "monsterinsights-uploaded-media"
};
const _hoisted_6$4 = ["src"];
const _hoisted_7$4 = { class: "monsterinsights-upload-media" };
const _hoisted_8$3 = { class: "settings-input-text-input monsterinsights-upload-media-input" };
const _hoisted_9$3 = ["type", "name"];
const _hoisted_10$3 = { class: "inline-field" };
const _hoisted_11$3 = ["textContent"];
const _hoisted_12$3 = ["textContent"];
const _hoisted_13$3 = ["textContent"];
const _sfc_main$8 = {
  __name: "SettingsInputUploadMedia",
  props: {
    name: String,
    label: String,
    description: String,
    type: { type: String, default: "hidden" },
    uploadButtonText: String,
    clearMediaButtonText: String,
    uploadDifferentMediaButtonText: String
  },
  setup(__props) {
    const { __ } = wp.i18n;
    const props = __props;
    const settingsStore = useSettingsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const id = "input-" + props.name;
    const updated_value = ref(false);
    const value = computed({
      get() {
        return updated_value.value !== false ? updated_value.value : settingsStore.getSettings[props.name];
      },
      set(val) {
        updated_value.value = val;
      }
    });
    function updateSettingValue(name, val) {
      savingToast({});
      settingsStore.updateSetting({
        name,
        value: val
      }).then(() => {
        successToast({});
      }).catch(() => {
        errorToast({});
      });
    }
    function uploadImage() {
      const settings = {
        uploaderTitle: __("Select or upload image", "google-analytics-for-wordpress"),
        uploaderButton: __("Set Image", "google-analytics-for-wordpress"),
        multiple: false
      };
      const file_frame = wp.media.frames.file_frame = wp.media({
        title: settings.uploaderTitle,
        button: { text: settings.uploaderButton },
        multiple: settings.multiple
      }).on("select", function() {
        const attachment = file_frame.state().get("selection").first().toJSON();
        updated_value.value = attachment.url;
        updateSettingValue(props.name, attachment.url);
      }).open();
    }
    function clearImage() {
      updated_value.value = "";
      updateSettingValue(props.name, "");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$8, [
        createBaseVNode("p", _hoisted_2$7, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            innerHTML: __props.label
          }, null, 8, _hoisted_3$6),
          __props.description ? (openBlock(), createElementBlock("span", {
            key: 0,
            innerHTML: __props.description
          }, null, 8, _hoisted_4$6)) : createCommentVNode("", true)
        ]),
        value.value ? (openBlock(), createElementBlock("div", _hoisted_5$4, [
          createBaseVNode("img", { src: value.value }, null, 8, _hoisted_6$4)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_7$4, [
          createBaseVNode("div", _hoisted_8$3, [
            withDirectives(createBaseVNode("input", {
              id,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
              type: __props.type,
              name: __props.name,
              readonly: ""
            }, null, 8, _hoisted_9$3), [
              [vModelDynamic, value.value]
            ])
          ])
        ]),
        createBaseVNode("div", _hoisted_10$3, [
          value.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("button", {
              class: "monsterinsights-button",
              onClick: withModifiers(uploadImage, ["prevent"]),
              textContent: toDisplayString(__props.uploadDifferentMediaButtonText)
            }, null, 8, _hoisted_11$3),
            createBaseVNode("button", {
              class: "monsterinsights-button monsterinsights-button-green",
              onClick: withModifiers(clearImage, ["prevent"]),
              textContent: toDisplayString(__props.clearMediaButtonText)
            }, null, 8, _hoisted_12$3)
          ], 64)) : (openBlock(), createElementBlock("button", {
            key: 1,
            class: "monsterinsights-button",
            onClick: withModifiers(uploadImage, ["prevent"]),
            textContent: toDisplayString(__props.uploadButtonText)
          }, null, 8, _hoisted_13$3))
        ])
      ]);
    };
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "monsterinsights-email-summaries-settings monsterinsights-collapsible"
};
const _hoisted_2$6 = ["innerHTML"];
const _hoisted_3$5 = {
  key: 1,
  class: "monsterinsights-email-summaries-settings monsterinsights-collapsible"
};
const _hoisted_4$5 = ["innerHTML"];
const _hoisted_5$3 = ["innerHTML"];
const _hoisted_6$3 = {
  key: 0,
  class: "monsterinsights-collapsible-content"
};
const _hoisted_7$3 = ["innerHTML"];
const _hoisted_8$2 = ["innerHTML"];
const _hoisted_9$2 = ["innerHTML"];
const _hoisted_10$2 = { class: "inline-field" };
const _hoisted_11$2 = ["disabled", "innerHTML"];
const _hoisted_12$2 = ["innerHTML"];
const _hoisted_13$2 = ["disabled", "innerHTML"];
const _sfc_main$7 = {
  __name: "SettingsInputEmailSummaries",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const settingsStore = useSettingsStore();
    const addonsStore = useAddonsStore();
    const { savingToast, successToast, errorToast } = useToast();
    const settings = computed(() => settingsStore.getSettings);
    const addons = computed(() => addonsStore.addons);
    const text_description_lite = __("Our email summaries feature sends a monthly summary of the most important site analytics information.", "google-analytics-for-wordpress");
    const text_email_summaries_title = __("Email Summaries", "google-analytics-for-wordpress");
    const text_email_summaries_label = __("Enable Email Summaries", "google-analytics-for-wordpress");
    const text_html_template_label = __("Enable HTML email templates for the best experience (recommended)", "google-analytics-for-wordpress");
    const text_html_template_tooltip_text = __("HTML-formatted emails provide the best experience by combining insightful analytics with an easy-to-read format. You can disable this feature if your email provider does not support HTML emails (uncommon).", "google-analytics-for-wordpress");
    const text_show_blog_posts_label = __("Show blog posts inside weekly emails", "google-analytics-for-wordpress");
    const text_show_update_notices_label = __("Show Update Notices", "google-analytics-for-wordpress");
    const text_header_image_label = __("Header Image", "google-analytics-for-wordpress");
    const text_header_image_description = __("To use a custom logo on the Email summaries feature, upload or select from the WordPress Media Library, a PNG format image with a recommended dimension of 300 pixels in width by 100 pixels in height or smaller using the button below.", "google-analytics-for-wordpress");
    const text_upload_image_button = __("Use Custom Header", "google-analytics-for-wordpress");
    const clear_image_button_text = __("Use The Default Header Image", "google-analytics-for-wordpress");
    const choose_different_media_button_text = __("Choose A Different Header Image", "google-analytics-for-wordpress");
    const text_add_email = __("Add Email", "google-analytics-for-wordpress");
    const text_email_addresses = __("Email addresses", "google-analytics-for-wordpress");
    const email_addresses_label = __("Add email addresses to send notifications.", "google-analytics-for-wordpress");
    const max_emails_error_text = __("You can add up to 5 emails.", "google-analytics-for-wordpress");
    const min_emails_error_text = __("At least 1 email required.", "google-analytics-for-wordpress");
    const text_install_wp_mail_smtp = sprintf(
      __("%1$sNot receiving the emails?%2$s Some hosting providers aren't able to send out emails reliably. To ensure your users get emails from your WordPress site, we recommend %3$sWP Mail SMTP%4$s", "google-analytics-for-wordpress"),
      "<strong>",
      "</strong>",
      '<strong><a href="' + getUrl("monsterinsights-settings-tab", "email-summaries", "https://wpmailsmtp.com/") + '" target="_blank">',
      "</a></strong>"
    );
    const text_installed_wp_mail_smtp = __("To send an example email summary to the email addresses configured above, use the button below", "google-analytics-for-wordpress");
    const emailStructure = [
      {
        name: "email",
        // Translators: Placeholder adds an email.
        label: sprintf(__("Example: %s", "google-analytics-for-wordpress"), "abc@example.com"),
        pattern: new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "i"),
        error: __("Please enter a valid email address (example someone@yoursite.com).", "google-analytics-for-wordpress"),
        prevent_duplicates: true
      }
    ];
    const sendingEmail = ref(false);
    const is_disabled = ref(false);
    const send_test_email_btn_text = ref(__("Send Test Email", "google-analytics-for-wordpress"));
    const send_test_email_btn_class = ref("monsterinsights-button monsterinsights-button-green");
    const SMTPpluginActive = ref(true);
    const showMailSMTPNotice = computed(() => {
      if (addons.value["wp-mail-smtp"] && addons.value["wp-mail-smtp"].active && SMTPpluginActive.value) {
        return false;
      }
      return true;
    });
    const textSummariesDescription = computed(() => {
      let text = __("Our email summaries feature sends a weekly summary of the most important site analytics information.", "google-analytics-for-wordpress");
      if (typeof settings.value["email_summaries"] === "undefined") {
        return text;
      }
      if (settings.value["email_summaries"] === "on") {
        const emailSummaryUrl = getMiGlobal("email_summary_url", "");
        text += sprintf(
          __(" %1$sView Example Email Summary%2$s", "google-analytics-for-wordpress"),
          '<a href="' + emailSummaryUrl + '" target="_blank">',
          "</a>"
        );
      }
      return text;
    });
    function sendTestEmail() {
      sendingEmail.value = true;
      is_disabled.value = true;
      send_test_email_btn_text.value = __("Sending Email...", "google-analytics-for-wordpress");
      savingToast({
        title: __("Sending Email...", "google-analytics-for-wordpress")
      });
      miAjax("monsterinsights_send_test_email").then(() => {
        sendingEmail.value = false;
        send_test_email_btn_class.value = "monsterinsights-button-disabled monsterinsights-button monsterinsights-button-green";
        send_test_email_btn_text.value = __("Email Sent!", "google-analytics-for-wordpress");
        successToast({
          title: __("Email Sent!", "google-analytics-for-wordpress")
        });
        setTimeout(() => {
          send_test_email_btn_text.value = __("Send Test Email", "google-analytics-for-wordpress");
          send_test_email_btn_class.value = "monsterinsights-button monsterinsights-button-green";
          is_disabled.value = false;
        }, 3e3);
      }).catch((error) => {
        sendingEmail.value = false;
        is_disabled.value = false;
        send_test_email_btn_text.value = __("Send Test Email", "google-analytics-for-wordpress");
        send_test_email_btn_class.value = "monsterinsights-button monsterinsights-button-green";
        errorToast({
          title: sprintf(__("Can't send email. %1$s", "google-analytics-for-wordpress"), error?.message || "")
        });
      });
    }
    function resetOtherOptions() {
      if (typeof settings.value["email_summaries"] === "undefined") {
        return;
      }
      if (settings.value["email_summaries"] === "off") {
        const adminEmail = getMiGlobal("admin_email", "");
        settings.value["summaries_email_addresses"] = [{ email: adminEmail }];
        settings.value["summaries_header_image"] = "";
      }
    }
    return (_ctx, _cache) => {
      return !unref(isPro)() ? (openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("p", null, [
          createBaseVNode("span", { innerHTML: unref(text_description_lite) }, null, 8, _hoisted_2$6)
        ]),
        createVNode(_sfc_main$9, {
          name: "email_summaries",
          label: unref(text_email_summaries_label),
          "value-on": "on",
          "value-off": "off"
        }, null, 8, ["label"])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$5, [
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark",
            innerHTML: unref(text_email_summaries_title)
          }, null, 8, _hoisted_4$5),
          createBaseVNode("span", { innerHTML: textSummariesDescription.value }, null, 8, _hoisted_5$3)
        ]),
        createVNode(_sfc_main$9, {
          name: "email_summaries",
          label: unref(text_email_summaries_label),
          "value-on": "on",
          "value-off": "off",
          onCheckbox_option_updated: resetOtherOptions
        }, null, 8, ["label"]),
        "on" === settings.value["email_summaries"] ? (openBlock(), createElementBlock("div", _hoisted_6$3, [
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createBaseVNode("label", null, [
            createBaseVNode("span", {
              class: "monsterinsights-dark",
              innerHTML: unref(text_email_addresses)
            }, null, 8, _hoisted_7$3),
            createBaseVNode("span", { innerHTML: unref(email_addresses_label) }, null, 8, _hoisted_8$2)
          ]),
          createVNode(_sfc_main$a, {
            text_add: unref(text_add_email),
            structure: emailStructure,
            name: "summaries_email_addresses",
            max_items: 5,
            min_items: 1,
            max_item_error_notice: unref(max_emails_error_text),
            min_item_error_notice: unref(min_emails_error_text)
          }, null, 8, ["text_add", "max_item_error_notice", "min_item_error_notice"]),
          showMailSMTPNotice.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("p", {
              class: "monsterinsights-install-plugin-text",
              innerHTML: unref(text_install_wp_mail_smtp)
            }, null, 8, _hoisted_9$2),
            createBaseVNode("div", _hoisted_10$2, [
              createBaseVNode("button", {
                class: normalizeClass([sendingEmail.value ? "monsterinsights-button-disabled" : "", send_test_email_btn_class.value]),
                disabled: is_disabled.value,
                onClick: withModifiers(sendTestEmail, ["prevent"]),
                innerHTML: send_test_email_btn_text.value
              }, null, 10, _hoisted_11$2)
            ])
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createBaseVNode("p", {
              class: "monsterinsights-install-plugin-text",
              innerHTML: unref(text_installed_wp_mail_smtp)
            }, null, 8, _hoisted_12$2),
            createBaseVNode("button", {
              class: normalizeClass([sendingEmail.value ? "monsterinsights-button-disabled" : "", send_test_email_btn_class.value]),
              disabled: is_disabled.value,
              onClick: withModifiers(sendTestEmail, ["prevent"]),
              innerHTML: send_test_email_btn_text.value
            }, null, 10, _hoisted_13$2)
          ], 64)),
          _cache[4] || (_cache[4] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createVNode(_sfc_main$9, {
            name: "summaries_html_template",
            "value-on": "yes",
            "value-off": "no",
            label: unref(text_html_template_label),
            tooltip: unref(text_html_template_tooltip_text)
          }, null, 8, ["label", "tooltip"]),
          "yes" === settings.value["summaries_html_template"] ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$8, {
              name: "summaries_header_image",
              label: unref(text_header_image_label),
              description: unref(text_header_image_description),
              uploadButtonText: unref(text_upload_image_button),
              clearMediaButtonText: unref(clear_image_button_text),
              uploadDifferentMediaButtonText: unref(choose_different_media_button_text)
            }, null, 8, ["label", "description", "uploadButtonText", "clearMediaButtonText", "uploadDifferentMediaButtonText"])
          ], 64)) : createCommentVNode("", true),
          (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$9, {
              name: "summaries_show_blog_posts",
              "value-on": "yes",
              "value-off": "no",
              label: unref(text_show_blog_posts_label)
            }, null, 8, ["label"]),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$9, {
              name: "summaries_show_update_notices",
              "value-on": "yes",
              "value-off": "no",
              label: unref(text_show_update_notices_label)
            }, null, 8, ["label"])
          ], 64))
        ])) : createCommentVNode("", true)
      ]));
    };
  }
};
const _hoisted_1$6 = ["innerHTML"];
const _hoisted_2$5 = {
  key: 1,
  class: "monsterinsights-pdf-exports-settings"
};
const _sfc_main$6 = {
  __name: "SettingsInputPdfReports",
  setup(__props) {
    const { __ } = wp.i18n;
    const text_description = __("Download the analytics reports instantly from the WordPress dashboard as PDF files and share them with anyone.", "google-analytics-for-wordpress");
    const text_pdf_reports_header_image_label = __("Header Image", "google-analytics-for-wordpress");
    const text_pdf_reports_header_image_description = __("To use a custom logo on the PDF export feature, upload or select from the WordPress Media Library, a PNG format image with a recommended dimension of 300 pixels in width by 45 pixels in height or smaller using the button below.", "google-analytics-for-wordpress");
    const text_upload_image_button = __("Use Custom Header Image", "google-analytics-for-wordpress");
    const clear_image_button_text = __("Use The Default Header Image", "google-analytics-for-wordpress");
    const choose_different_media_button_text = __("Choose A Different Header Image", "google-analytics-for-wordpress");
    return (_ctx, _cache) => {
      return !unref(isPro)() ? (openBlock(), createBlock(_sfc_main$b, {
        key: 0,
        addon: "forms",
        utm_campaign: "pdf"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_1$6)
        ]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_2$5, [
        createVNode(_sfc_main$8, {
          name: "pdf_reports_header_image",
          label: unref(text_pdf_reports_header_image_label),
          description: unref(text_pdf_reports_header_image_description),
          uploadButtonText: unref(text_upload_image_button),
          clearMediaButtonText: unref(clear_image_button_text),
          uploadDifferentMediaButtonText: unref(choose_different_media_button_text)
        }, null, 8, ["label", "description", "uploadButtonText", "clearMediaButtonText", "uploadDifferentMediaButtonText"])
      ]));
    };
  }
};
const _hoisted_1$5 = ["innerHTML"];
const _hoisted_2$4 = {
  key: 1,
  class: "monsterinsights-collapsible"
};
const _hoisted_3$4 = ["innerHTML"];
const _hoisted_4$4 = ["innerHTML"];
const _hoisted_5$2 = {
  key: 0,
  class: "monsterinsights-collapsible-content"
};
const _hoisted_6$2 = ["innerHTML"];
const _hoisted_7$2 = ["innerHTML"];
const _sfc_main$5 = {
  __name: "SettingsExceptionReports",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const settingsStore = useSettingsStore();
    useLicenseStore();
    const settings = computed(() => settingsStore.getSettings);
    const text_description = __("Our exception alerts feature will instantly notify you when MonsterInsights detects potential problems with your website's key metrics and stats.", "google-analytics-for-wordpress");
    const text_exception_alerts = __("Exception Alerts", "google-analytics-for-wordpress");
    const text_summaries_description = __("Our exception alerts feature will instantly notify you when MonsterInsights detects potential problems with your website's key metrics and stats.", "google-analytics-for-wordpress");
    const text_enabled = __("Enabled", "google-analytics-for-wordpress");
    const text_add_site_note = __("Add a Site Note when an exception is triggered", "google-analytics-for-wordpress");
    const text_add_notification = __("Add a MonsterInsights Notification when an exception is triggered", "google-analytics-for-wordpress");
    const max_emails_error_text = __("You can add up to 5 emails.", "google-analytics-for-wordpress");
    const min_emails_error_text = __("At least 1 email required.", "google-analytics-for-wordpress");
    const text_email_addresses = __("Email addresses", "google-analytics-for-wordpress");
    const email_addresses_label = __("Add email addresses to send notifications.", "google-analytics-for-wordpress");
    const text_add_email = __("Add Email", "google-analytics-for-wordpress");
    const emailStructure = [
      {
        name: "email",
        // Translators: Placeholder adds an email.
        label: sprintf(__("Example: %s", "google-analytics-for-wordpress"), "abc@example.com"),
        pattern: new RegExp("[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}", "i"),
        error: __("Please enter a valid email address (example someone@yoursite.com).", "google-analytics-for-wordpress"),
        prevent_duplicates: true
      }
    ];
    const showUpsell = computed(() => {
      {
        return true;
      }
    });
    function updateEmailAlertCheckbox() {
      if (typeof settings.value["exception_email_alert"] === "undefined") {
        return;
      }
      if ("on" === settings.value["exception_email_alert"]) {
        const adminEmail = [{ email: getMiGlobal("admin_email", "") }];
        if (!settings.value["exception_alert_email_addresses"]) {
          sendUpdateEmailsSettingsRequest(adminEmail);
        }
        if (settings.value["exception_alert_email_addresses"]?.length === 0) {
          sendUpdateEmailsSettingsRequest(adminEmail);
        }
        settings.value["exception_alert_email_addresses"] = adminEmail;
      }
    }
    function sendUpdateEmailsSettingsRequest(adminEmail) {
      settingsStore.updateSetting({
        name: "exception_alert_email_addresses",
        value: adminEmail
      });
    }
    return (_ctx, _cache) => {
      return !unref(isPro)() || showUpsell.value ? (openBlock(), createBlock(_sfc_main$b, {
        key: 0,
        addon: "exceptions"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_1$5)
        ]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_2$4, [
        createBaseVNode("p", null, [
          createBaseVNode("span", {
            class: "monsterinsights-dark monsterinsights-display-block",
            innerHTML: unref(text_exception_alerts)
          }, null, 8, _hoisted_3$4),
          createBaseVNode("span", { innerHTML: unref(text_summaries_description) }, null, 8, _hoisted_4$4)
        ]),
        createVNode(_sfc_main$9, {
          name: "exception_email_alert",
          label: unref(text_enabled),
          "value-on": "on",
          "value-off": "off",
          onCheckbox_option_updated: updateEmailAlertCheckbox
        }, null, 8, ["label"]),
        "on" === settings.value["exception_email_alert"] ? (openBlock(), createElementBlock("div", _hoisted_5$2, [
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createBaseVNode("label", null, [
            createBaseVNode("span", {
              class: "monsterinsights-dark monsterinsights-display-block",
              innerHTML: unref(text_email_addresses)
            }, null, 8, _hoisted_6$2),
            createBaseVNode("span", { innerHTML: unref(email_addresses_label) }, null, 8, _hoisted_7$2)
          ]),
          createVNode(_sfc_main$a, {
            text_add: unref(text_add_email),
            structure: emailStructure,
            name: "exception_alert_email_addresses",
            max_items: 5,
            min_items: 1,
            max_item_error_notice: unref(max_emails_error_text),
            min_item_error_notice: unref(min_emails_error_text)
          }, null, 8, ["text_add", "max_item_error_notice", "min_item_error_notice"])
        ])) : createCommentVNode("", true),
        _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createVNode(_sfc_main$9, {
          name: "exception_add_site_note",
          label: unref(text_add_site_note),
          "value-on": "on",
          "value-off": "off"
        }, null, 8, ["label"]),
        _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
        createVNode(_sfc_main$9, {
          name: "exception_add_notification",
          label: unref(text_add_notification),
          "value-on": "on",
          "value-off": "off"
        }, null, 8, ["label"])
      ]));
    };
  }
};
const _hoisted_1$4 = ["innerHTML"];
const _hoisted_2$3 = { key: 1 };
const _hoisted_3$3 = ["innerHTML"];
const _hoisted_4$3 = ["innerHTML"];
const _sfc_main$4 = {
  __name: "SiteNotesImportantEvents",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const addonsStore = useAddonsStore();
    useLicenseStore();
    const text_description = __("Designed specifically for enterprise and marketing agencies, our Site Notes Addon lets you easily create, update, and delete site notes programmatically.", "google-analytics-for-wordpress");
    const text_site_notes_events_description = __("Enable which events you want to log.", "google-analytics-for-wordpress");
    const text_plugin_activated = __("Plugin activated", "google-analytics-for-wordpress");
    const text_wordpress_version_updated = __("WordPress version updated", "google-analytics-for-wordpress");
    const text_new_site_health_notice = __("New site health notice", "google-analytics-for-wordpress");
    const text_addon_disabled = sprintf(
      __("In order to use the Site Notes Important Events features, please %1$sinstall and activate%2$s the Site Notes Important Events addon.", "google-analytics-for-wordpress"),
      '<a href="' + getMiGlobal("addons_url", "#") + '">',
      "</a>"
    );
    const showUpsell = computed(() => {
      {
        return true;
      }
    });
    const isAddonActive = computed(() => {
      const addons = addonsStore.addons || {};
      if (addons["site-notes-important-events"]) {
        return addons["site-notes-important-events"].active;
      }
      return false;
    });
    return (_ctx, _cache) => {
      return !unref(isPro)() || showUpsell.value ? (openBlock(), createBlock(_sfc_main$b, {
        key: 0,
        addon: "site-notes-important-events"
      }, {
        default: withCtx(() => [
          createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_1$4)
        ]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_2$3, [
        isAddonActive.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("p", null, [
            createBaseVNode("span", { innerHTML: unref(text_site_notes_events_description) }, null, 8, _hoisted_3$3)
          ]),
          createVNode(_sfc_main$9, {
            name: "site_notes_log_plugin_activated",
            label: unref(text_plugin_activated)
          }, null, 8, ["label"]),
          _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createVNode(_sfc_main$9, {
            name: "site_notes_log_wordpress_version_updated",
            label: unref(text_wordpress_version_updated)
          }, null, 8, ["label"]),
          _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createVNode(_sfc_main$9, {
            name: "site_notes_log_new_site_health_notice",
            label: unref(text_new_site_health_notice)
          }, null, 8, ["label"])
        ], 64)) : (openBlock(), createBlock(_sfc_main$c, { key: 1 }, {
          default: withCtx(() => [
            createBaseVNode("span", { innerHTML: unref(text_addon_disabled) }, null, 8, _hoisted_4$3)
          ]),
          _: 1
        }))
      ]));
    };
  }
};
const _hoisted_1$3 = {
  key: 0,
  class: "settings-input settings-input-consent-mode"
};
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$2 = {
  key: 0,
  class: "settings-input settings-input-consent-mode"
};
const _hoisted_4$2 = ["innerHTML"];
const _hoisted_5$1 = ["innerHTML"];
const _hoisted_6$1 = ["innerHTML"];
const _hoisted_7$1 = {
  key: 0,
  class: "consent-mode-wpconsent-promo"
};
const _hoisted_8$1 = { class: "consent-mode-wpconsent-promo-wrapper" };
const _hoisted_9$1 = { class: "consent-mode-wpconsent-promo-content" };
const _hoisted_10$1 = ["innerHTML"];
const _hoisted_11$1 = ["innerHTML"];
const _hoisted_12$1 = ["innerHTML"];
const _hoisted_13$1 = ["innerHTML"];
const link = "https://www.monsterinsights.com/docs/cookie-consent-plugins-gdpr-compliance/";
const wpconsent_link = "https://www.wpconsent.com";
const _sfc_main$3 = {
  __name: "SettingsInputConsentMode",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    useSettingsStore();
    const addonsStore = useAddonsStore();
    useLicenseStore();
    const text_description_lite = __("Displays a small banner on your website to collect user consent for advertising and personalization through Google Ads and Google Analytics.", "google-analytics-for-wordpress");
    const text_description = __("Displays a small banner on your website to collect user consent for advertising and personalization through Google Ads and Google Analytics. ", "google-analytics-for-wordpress");
    const text_link = __("Learn More Here", "google-analytics-for-wordpress");
    const text_addon_disabled = sprintf(
      __("In order to use this features, please %1$sinstall and activate%2$s the EU Compliance addon.", "google-analytics-for-wordpress"),
      '<a href="' + getMiGlobal("addons_url", "#") + '">',
      "</a>"
    );
    const text_warning = __("Enabling Consent Mode may lead to analytics data loss.", "google-analytics-for-wordpress");
    const text_toggle_label = __("Enable Consent Mode Banner", "google-analytics-for-wordpress");
    const text_wpconsent_header = __("Cookie Banner by WPConsent", "google-analytics-for-wordpress");
    const text_wpconsent = __("Get the most powerful and easy to use consent manager. Built by the same people behind MonsterInsights.", "google-analytics-for-wordpress");
    const text_wpconsent_link = __("Install Free", "google-analytics-for-wordpress");
    const isEUComplianceActive = computed(() => {
      const addons = addonsStore.addons || {};
      if (addons["eu-compliance"]) {
        return addons["eu-compliance"].active;
      }
      return false;
    });
    const isProLicensed = computed(() => {
      {
        return false;
      }
    });
    const isConsentModeOn = computed(() => {
      return false;
    });
    return (_ctx, _cache) => {
      return !unref(isPro)() ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
        createVNode(_sfc_main$b, { addon: "performance" }, {
          default: withCtx(() => [
            createBaseVNode("span", { innerHTML: unref(text_description_lite) }, null, 8, _hoisted_2$2)
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        isProLicensed.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [
          isEUComplianceActive.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createBaseVNode("p", null, [
              createBaseVNode("span", { innerHTML: unref(text_description) }, null, 8, _hoisted_4$2),
              createBaseVNode("a", {
                href: link,
                target: "_blank",
                innerHTML: unref(text_link)
              }, null, 8, _hoisted_5$1)
            ]),
            createBaseVNode("p", {
              class: "settings-input-warning-text",
              innerHTML: unref(text_warning)
            }, null, 8, _hoisted_6$1),
            createVNode(_sfc_main$9, {
              name: "consent_mode_banner",
              label: unref(text_toggle_label),
              "value-on": "on",
              "value-off": "off"
            }, null, 8, ["label"]),
            isConsentModeOn.value ? (openBlock(), createElementBlock("div", _hoisted_7$1, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("div", _hoisted_8$1, [
                createBaseVNode("div", _hoisted_9$1, [
                  createBaseVNode("h3", { innerHTML: unref(text_wpconsent_header) }, null, 8, _hoisted_10$1),
                  createBaseVNode("p", { innerHTML: unref(text_wpconsent) }, null, 8, _hoisted_11$1),
                  createBaseVNode("a", {
                    href: wpconsent_link,
                    class: "monsterinsights-button",
                    target: "_blank",
                    innerHTML: unref(text_wpconsent_link)
                  }, null, 8, _hoisted_12$1)
                ])
              ])
            ])) : createCommentVNode("", true)
          ], 64)) : (openBlock(), createBlock(_sfc_main$c, { key: 1 }, {
            default: withCtx(() => [
              createBaseVNode("span", { innerHTML: unref(text_addon_disabled) }, null, 8, _hoisted_13$1)
            ]),
            _: 1
          }))
        ])) : createCommentVNode("", true)
      ], 64));
    };
  }
};
const _hoisted_1$2 = {
  key: 0,
  class: "settings-input settings-input-performance"
};
const _hoisted_2$1 = ["innerHTML"];
const _hoisted_3$1 = {
  key: 1,
  class: "settings-input settings-input-performance"
};
const _hoisted_4$1 = { key: 0 };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { key: 1 };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = {
  id: "monsterinsights-local-gtag-js-settings",
  class: "settings-action-button"
};
const _hoisted_9 = {
  key: 0,
  for: "monsterinsights-seo"
};
const _hoisted_10 = ["innerHTML"];
const _hoisted_11 = ["innerHTML"];
const _hoisted_12 = { class: "settings-action-button-input" };
const _hoisted_13 = ["disabled"];
const _hoisted_14 = { class: "monsterinsights-local-file-last-modified" };
const _hoisted_15 = ["innerHTML"];
const _sfc_main$2 = {
  __name: "SettingsInputPerformance",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const settingsStore = useSettingsStore();
    const addonsStore = useAddonsStore();
    const dialog = useDialog();
    const settings = computed(() => settingsStore.getSettings);
    const addons = computed(() => addonsStore.addons || {});
    const text_description_lite = __("Tweak advanced Google Analytics settings for popular and busy websites to ensure you don't go over processing limits.", "google-analytics-for-wordpress");
    const text_gtag_checkbox_label = __("Add Gtag.js File Locally", "google-analytics-for-wordpress");
    const text_gtag_checkbox_tooltip = __("Enable this feature to create and embed a Gtag.js file directly from your local server.", "google-analytics-for-wordpress");
    const text_sample_rate_label = __("Sample Rate", "google-analytics-for-wordpress");
    const text_sample_rate_description = __("Specifies what percentage of users should be tracked", "google-analytics-for-wordpress");
    const text_sample_rate_tooltip = sprintf(
      __("Adjust the sample rate to specify the percentage of users tracked in Google Analytics. This is set to 100 by default (when the field is blank), meaning all users are tracked. Reducing the sample rate for larger sites can help stay within Google Analytics' processing limits. %1$sNote:%2$s setting this below 100 means some user data will not be tracked.", "google-analytics-for-wordpress"),
      "<strong>",
      "</strong>"
    );
    const text_sample_rate_speed_label = __("Site Speed Sample Rate", "google-analytics-for-wordpress");
    const text_sample_rate_speed_description = __("Determines how often site speed tracking beacons will be sent. By default, 1% of users will be tracked.", "google-analytics-for-wordpress");
    const text_performance_addon_disabled = sprintf(
      __("In order to use the performance tracking features, please %1$sinstall and activate%2$s the performance addon.", "google-analytics-for-wordpress"),
      '<a href="' + getMiGlobal("addons_url", "#") + '">',
      "</a>"
    );
    const text_performance_update_notice = sprintf(
      __("In order to use the local gtag.js feature, please %1$supdate%2$s the performance addon.", "google-analytics-for-wordpress"),
      '<a href="' + getMiGlobal("wp_plugins_page_url", "#") + '">',
      "</a>"
    );
    const text_local_gtag_label = __("Local gtag.js", "google-analytics-for-wordpress");
    const text_local_gtag_description = __("Click on the button below to fetch latest gtag.js code from Google's Server and update the local file.", "google-analytics-for-wordpress");
    const text_local_gtag_last_modified_text = __("File Last Updated:. ", "google-analytics-for-wordpress");
    const fetchDisabled = ref(false);
    const localGtagButtonText = ref(__("Fetch and Update the local gtag.js file. ", "google-analytics-for-wordpress"));
    const isPerformanceAddonActive = computed(() => {
      if (addons.value["performance"]) {
        return addons.value["performance"].active;
      }
      return false;
    });
    const needUpdate = computed(() => {
      if (addons.value) {
        if ("performance" in addons.value) {
          if ("active_version" in addons.value.performance) {
            const version = parseFloat(addons.value.performance.active_version);
            if (version >= 1.5) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const localGtagLastModified = computed(() => {
      if (settings.value.local_gtag_file_modified_at) {
        const timestamp = settings.value.local_gtag_file_modified_at;
        const date = new Date(timestamp * 1e3);
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        const hoursStr = String(hours).padStart(2, "0");
        return `${month}-${day}-${year} @ ${hoursStr}:${minutes} ${ampm}`;
      }
      return __("No File Found Yet.", "google-analytics-for-wordpress");
    });
    async function fetchGtagJsFromRemote() {
      fetchDisabled.value = true;
      localGtagButtonText.value = __("Fetching. Please wait... ", "google-analytics-for-wordpress");
      try {
        const fetched = await fetchLocalGtagRemote();
        if (false === fetched.result) {
          dialog.alert({
            variant: "error",
            title: __("We encountered an issue", "google-analytics-for-wordpress"),
            message: fetched.error,
            confirmText: __("Ok", "google-analytics-for-wordpress")
          });
          localGtagButtonText.value = __("Fetch and Update the local gtag.js file. ", "google-analytics-for-wordpress");
          fetchDisabled.value = false;
        } else {
          await dialog.alert({
            variant: "success",
            title: __("Local gtag.js file updated successfully. ", "google-analytics-for-wordpress"),
            confirmText: __("Ok", "google-analytics-for-wordpress")
          });
          await settingsStore.fetchSettings();
          localGtagButtonText.value = __("Fetch and Update the local gtag.js file. ", "google-analytics-for-wordpress");
          fetchDisabled.value = false;
        }
      } catch (error) {
        dialog.alert({
          variant: "error",
          title: __("We encountered an issue", "google-analytics-for-wordpress"),
          message: error?.message || String(error),
          confirmText: __("Ok", "google-analytics-for-wordpress")
        });
        localGtagButtonText.value = __("Fetch and Update the local gtag.js file. ", "google-analytics-for-wordpress");
        fetchDisabled.value = false;
      }
    }
    return (_ctx, _cache) => {
      return !unref(isPro)() ? (openBlock(), createElementBlock("div", _hoisted_1$2, [
        createVNode(_sfc_main$b, { addon: "performance" }, {
          default: withCtx(() => [
            createBaseVNode("span", { innerHTML: unref(text_description_lite) }, null, 8, _hoisted_2$1)
          ]),
          _: 1
        })
      ])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
        isPerformanceAddonActive.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createVNode(SettingsInputNumber, {
            type: "number",
            min: 1,
            max: 100,
            name: "samplerate",
            label: unref(text_sample_rate_label),
            description: unref(text_sample_rate_description),
            tooltip: unref(text_sample_rate_tooltip)
          }, null, 8, ["label", "description", "tooltip"]),
          _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          createVNode(SettingsInputNumber, {
            type: "number",
            min: 1,
            max: 100,
            name: "speedsamplerate",
            label: unref(text_sample_rate_speed_label),
            description: unref(text_sample_rate_speed_description),
            round: true
          }, null, 8, ["label", "description"]),
          _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
          needUpdate.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
            createVNode(_sfc_main$c, null, {
              default: withCtx(() => [
                createBaseVNode("span", { innerHTML: unref(text_performance_update_notice) }, null, 8, _hoisted_5)
              ]),
              _: 1
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
            createVNode(_sfc_main$9, {
              name: "add_local_gtag_js_file",
              label: unref(text_gtag_checkbox_label),
              tooltip: unref(text_gtag_checkbox_tooltip),
              "value-on": "on",
              "value-off": "off"
            }, null, 8, ["label", "tooltip"]),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            "on" === settings.value["add_local_gtag_js_file"] ? (openBlock(), createElementBlock("div", _hoisted_7, [
              createBaseVNode("div", _hoisted_8, [
                unref(text_local_gtag_label) ? (openBlock(), createElementBlock("label", _hoisted_9, [
                  createBaseVNode("span", {
                    class: "monsterinsights-dark",
                    innerHTML: unref(text_local_gtag_label)
                  }, null, 8, _hoisted_10),
                  _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
                  createBaseVNode("span", { innerHTML: unref(text_local_gtag_description) }, null, 8, _hoisted_11)
                ])) : createCommentVNode("", true),
                createBaseVNode("div", _hoisted_12, [
                  createBaseVNode("button", {
                    id: "monsterinsights-local-gtag-js-fetch-remote",
                    class: "monsterinsights-button",
                    disabled: fetchDisabled.value,
                    onClick: fetchGtagJsFromRemote
                  }, toDisplayString(localGtagButtonText.value), 9, _hoisted_13)
                ])
              ]),
              createBaseVNode("p", _hoisted_14, toDisplayString(unref(text_local_gtag_last_modified_text) + localGtagLastModified.value), 1)
            ])) : createCommentVNode("", true)
          ]))
        ], 64)) : (openBlock(), createBlock(_sfc_main$c, { key: 1 }, {
          default: withCtx(() => [
            createBaseVNode("span", { innerHTML: unref(text_performance_addon_disabled) }, null, 8, _hoisted_15)
          ]),
          _: 1
        }))
      ]));
    };
  }
};
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = ["innerHTML"];
const _hoisted_4 = ["innerHTML"];
const _sfc_main$1 = {
  __name: "SettingsInputMisc",
  setup(__props) {
    const isEM = false;
    const { __, sprintf } = wp.i18n;
    const dialog = useDialog();
    const text_misc_title = __("Miscellaneous", "google-analytics-for-wordpress");
    const text_announcements_title = __("Hide Announcements", "google-analytics-for-wordpress");
    const text_announcements_description = __("Hides plugin announcements and update details. This includes critical notices we use to inform about deprecations and important required configuration changes.", "google-analytics-for-wordpress");
    const text_announcements_label = __("Hide Announcements", "google-analytics-for-wordpress");
    const text_anonymous_data_title = __("Usage Tracking", "google-analytics-for-wordpress");
    const text_anonymous_data_description = __("By allowing us to track usage data we can better help you because we know with which WordPress configurations, themes and plugins we should test.", "google-analytics-for-wordpress");
    const text_anonymous_data_label = __("Allow usage tracking", "google-analytics-for-wordpress");
    const text_anonymous_data_tooltip = sprintf(
      __("Complete documentation on usage tracking is available %1$shere%2$s.", "google-analytics-for-wordpress"),
      '<a href="' + getUrl("settings-panel", "usage-tracking", "https://www.monsterinsights.com/docs/usage-tracking/") + '" target="_blank">',
      "</a>"
    );
    const text_reset_google_ads_experience = __("Reset Google Ads Experience", "google-analytics-for-wordpress");
    async function resetGoogleAdsExperience() {
      try {
        const response = await wp.ajax.send("monsterinsights_ads_reset_experience", {
          data: {
            nonce: getMiGlobal("nonce", "")
          }
        });
        dialog.alert({
          variant: "success",
          title: response.message
        });
      } catch (error) {
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(_sfc_main$d, {
          title: unref(text_misc_title),
          icon: "",
          collapsible: isEM
        }, {
          default: withCtx(() => [
            createBaseVNode("p", null, [
              createBaseVNode("span", {
                class: "monsterinsights-dark",
                innerHTML: unref(text_announcements_title)
              }, null, 8, _hoisted_1$1),
              createBaseVNode("span", { innerHTML: unref(text_announcements_description) }, null, 8, _hoisted_2)
            ]),
            createVNode(_sfc_main$9, {
              name: "hide_am_notices",
              label: unref(text_announcements_label)
            }, null, 8, ["label"]),
            !unref(isPro)() ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
              createBaseVNode("p", null, [
                createBaseVNode("span", {
                  class: "monsterinsights-dark",
                  innerHTML: unref(text_anonymous_data_title)
                }, null, 8, _hoisted_3),
                createBaseVNode("span", { innerHTML: unref(text_anonymous_data_description) }, null, 8, _hoisted_4)
              ]),
              createVNode(_sfc_main$9, {
                name: "anonymous_data",
                label: unref(text_anonymous_data_label),
                tooltip: unref(text_anonymous_data_tooltip)
              }, null, 8, ["label", "tooltip"])
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createBaseVNode("button", {
                class: "monsterinsights-button",
                onClick: resetGoogleAdsExperience
              }, toDisplayString(unref(text_reset_google_ads_experience)), 1)
            ], 64))
          ]),
          _: 1
        }, 8, ["title", "icon"]),
        !unref(isPro)() && !isEM ? (openBlock(), createBlock(_sfc_main$e, { key: 0 })) : createCommentVNode("", true)
      ]);
    };
  }
};
const SettingsInputMisc = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7839dec3"]]);
const _hoisted_1 = { class: "monsterinsights-settings-content settings-advanced" };
const _sfc_main = {
  __name: "monsterinsights-SettingsTabAdvanced",
  setup(__props) {
    const { __, sprintf } = wp.i18n;
    const { hasV4 } = useAuth();
    const excludeQueryParamsRef = ref(null);
    const text_email_summaries_title = __("Email Summaries", "google-analytics-for-wordpress");
    const text_export_pdf_reports_title = __("Export PDF Reports", "google-analytics-for-wordpress");
    const text_permissions_title = __("Permissions", "google-analytics-for-wordpress");
    const text_permissions_view_label = __("Allow These User Roles to See Reports", "google-analytics-for-wordpress");
    const text_permissions_view_description = __("Users that have at least one of these roles will be able to view the reports.", "google-analytics-for-wordpress");
    const text_permissions_view_tooltip = __("Enable specific user roles to access and view the MonsterInsights reports here. A user with the 'manage_options' capability and any user with at least one of these roles can view the reports.", "google-analytics-for-wordpress");
    const text_permissions_save_label = __("Allow These User Roles to Save Settings", "google-analytics-for-wordpress");
    const text_permissions_save_description = __("Users that have at least one of these roles will be able to view and save the settings panel.", "google-analytics-for-wordpress");
    const text_permissions_save_tooltip = __("A user with the 'manage_options' capability and any user with at least one of these roles will have permission to view and save the settings panel.", "google-analytics-for-wordpress");
    const text_permissions_ignore_label = __("Exclude These User Roles From Tracking", "google-analytics-for-wordpress");
    const text_permissions_ignore_description = __("Users that have at least one of these roles will not be tracked into Google Analytics.", "google-analytics-for-wordpress");
    const text_permissions_ignore_tooltip = __("Users with at least one of these roles will not be tracked in Google Analytics.", "google-analytics-for-wordpress");
    const text_performance_title = __("Performance", "google-analytics-for-wordpress");
    const text_consent_mode_title = __("Consent Mode Banner", "google-analytics-for-wordpress");
    const text_reports_title = __("Reports", "google-analytics-for-wordpress");
    const text_automatic_updates_title = __("Automatic Updates", "google-analytics-for-wordpress");
    const text_hide_admin_bar = __("Hide Admin Bar Reports", "google-analytics-for-wordpress");
    const text_hide_not_set_values = __("Hide (not set) values from Reports", "google-analytics-for-wordpress");
    const text_exception_alerts = __("Exception Alerts", "google-analytics-for-wordpress");
    const text_site_notes_important_events = __("Site Notes Important Events", "google-analytics-for-wordpress");
    const text_exclude_query_params = __("Exclude URL Query Parameters", "google-analytics-for-wordpress");
    const label_exclude_query_params = __("Filter out specific URL query parameters from being tracked inside Google Analytics.", "google-analytics-for-wordpress");
    const label_exclude_query_params_options = __("Exclude Query Parameters", "google-analytics-for-wordpress");
    const text_error_exclude_query_params = __("MonsterInsights can only exclude parameters that are alphanumeric, contain dashes, or underscores.", "google-analytics-for-wordpress");
    const text_tooltip_exclude_query_params = __("Remove specific URL query parameters from your reports by listing them here, separated by commas. Only use alphanumeric characters, hyphens, and underscores.", "google-analytics-for-wordpress");
    const reports_options = [
      {
        value: "0",
        // Translators: placeholders make text small.
        label: sprintf(__("Enabled %1$s- Show reports and dashboard widget.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "dashboard_widget",
        // Translators: placeholders make text small.
        label: sprintf(__("Dashboard Widget Only %1$s- Disable reports, but show dashboard widget.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "disabled",
        // Translators: placeholders make text small.
        label: sprintf(__("Disabled %1$s- Hide reports and dashboard widget.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      }
    ];
    const automatic_updates = [
      {
        value: "all",
        // Translators: placeholders make text small.
        label: sprintf(__("Yes (recommended) %1$s- Get the latest features, bugfixes, and security updates as they are released.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "minor",
        // Translators: placeholders make text small.
        label: sprintf(__("Minor only %1$s- Get bugfixes and security updates, but not major features.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      },
      {
        value: "none",
        // Translators: placeholders make text small.
        label: sprintf(__("None %1$s- Manually update everything.%2$s", "google-analytics-for-wordpress"), "<small>", "</small>")
      }
    ];
    const user_roles = computed(() => {
      const roles = [];
      const miRoles = getMiGlobal("roles", {});
      for (const role in miRoles) {
        roles.push({
          label: miRoles[role],
          value: role
        });
      }
      return roles;
    });
    const user_roles_manage_options = computed(() => {
      const roles = [];
      const miRoles = getMiGlobal("roles_manage_options", {});
      for (const role in miRoles) {
        roles.push({
          label: miRoles[role],
          value: role
        });
      }
      return roles;
    });
    const disabled = computed(() => !hasV4.value);
    function sanitizeQueryParams() {
      const input = excludeQueryParamsRef.value;
      if (!input) {
        return { success: true, value: "" };
      }
      const input_value = input.value;
      const escape_values = /([`~!@#$%^*:&\n\t\v+?()/<>.;'"{}\p{Extended_Pictographic}[]|\]+)/gu;
      if (input_value.match(escape_values)) {
        return {
          success: false,
          error_text: text_error_exclude_query_params
        };
      }
      const result = input_value.replace(/(,{1,})+/g, ",").replace(/\s/g, "").replace(/(^,+)/, "").replace(/([,_-])*$/, "");
      return {
        success: true,
        value: result
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createVNode(_sfc_main$d, {
          id: "monsterinsights-settings-block-email-summaries",
          title: unref(text_email_summaries_title)
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$7)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_exception_alerts) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$5)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_export_pdf_reports_title) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$6)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_site_notes_important_events) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$4)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_permissions_title) }, {
          default: withCtx(() => [
            createVNode(SettingsInputSelect, {
              options: user_roles.value,
              forced: user_roles_manage_options.value,
              multiple: true,
              name: "view_reports",
              label: unref(text_permissions_view_label),
              description: unref(text_permissions_view_description),
              tooltip: unref(text_permissions_view_tooltip),
              disabled: disabled.value
            }, null, 8, ["options", "forced", "label", "description", "tooltip", "disabled"]),
            _cache[0] || (_cache[0] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(SettingsInputSelect, {
              options: user_roles.value,
              forced: user_roles_manage_options.value,
              multiple: true,
              name: "save_settings",
              label: unref(text_permissions_save_label),
              description: unref(text_permissions_save_description),
              tooltip: unref(text_permissions_save_tooltip)
            }, null, 8, ["options", "forced", "label", "description", "tooltip"]),
            _cache[1] || (_cache[1] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(SettingsInputSelect, {
              options: user_roles.value,
              multiple: true,
              name: "ignore_users",
              label: unref(text_permissions_ignore_label),
              description: unref(text_permissions_ignore_description),
              tooltip: unref(text_permissions_ignore_tooltip),
              disabled: disabled.value
            }, null, 8, ["options", "label", "description", "tooltip", "disabled"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_consent_mode_title) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, {
          title: unref(text_performance_title),
          icon: "monstericon-eye-far"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$2)
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, {
          title: unref(text_exclude_query_params),
          blockContentClass: "exclude-query-params-content"
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$9, {
              name: "exclude_query_params",
              label: unref(label_exclude_query_params),
              tooltip: unref(text_tooltip_exclude_query_params),
              default: false
            }, {
              collapsible: withCtx(() => [
                createVNode(SettingsInputText, {
                  ref_key: "excludeQueryParamsRef",
                  ref: excludeQueryParamsRef,
                  name: "exclude_query_params_options",
                  label: unref(label_exclude_query_params_options),
                  validate: sanitizeQueryParams
                }, null, 8, ["label"])
              ]),
              _: 1
            }, 8, ["label", "tooltip"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_reports_title) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$f, {
              options: reports_options,
              name: "dashboards_disabled"
            }),
            _cache[2] || (_cache[2] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$9, {
              name: "hide_admin_bar_reports",
              label: unref(text_hide_admin_bar)
            }, null, 8, ["label"]),
            _cache[3] || (_cache[3] = createBaseVNode("div", { class: "monsterinsights-separator" }, null, -1)),
            createVNode(_sfc_main$9, {
              name: "hide_not_set_values_from_reports",
              label: unref(text_hide_not_set_values),
              "value-on": "on",
              "value-off": "off"
            }, null, 8, ["label"])
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(_sfc_main$d, { title: unref(text_automatic_updates_title) }, {
          default: withCtx(() => [
            createVNode(_sfc_main$f, {
              options: automatic_updates,
              name: "automatic_updates"
            })
          ]),
          _: 1
        }, 8, ["title"]),
        createVNode(SettingsInputMisc)
      ]);
    };
  }
};
const monsterinsightsSettingsTabAdvanced = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-516b635d"]]);
export {
  monsterinsightsSettingsTabAdvanced as default
};
