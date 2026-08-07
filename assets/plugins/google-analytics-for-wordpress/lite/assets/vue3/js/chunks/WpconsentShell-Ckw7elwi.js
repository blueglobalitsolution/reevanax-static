import { k as getMiGlobal, o as openBlock, c as createElementBlock, h as createStaticVNode, a as createBaseVNode, a1 as storeToRefs, y as onMounted, J as onUnmounted, b as createVNode, u as unref, t as toDisplayString, aQ as wpconsentFeatureImage, F as Fragment, f as renderList, i as normalizeClass, B as withModifiers, n as normalizeStyle, m as computed, j as ref } from "./toastStore-CRCNwITM.js";
import { b as useRoute } from "./TheAppHeader-DEdY-dez.js";
import { c as useAddonsStore } from "./addons-CSVIjAyY.js";
import { r as miAjax } from "./ajax-B_XS1gT5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "./useNotices-BpzNuZJ7.js";
import "./Modal-B9mMTzc_.js";
const { __ } = wp.i18n;
const installWPConsent = async () => {
  try {
    const response = await miAjax("monsterinsights_vue_install_plugin", {
      slug: "wpconsent-cookies-banner-privacy-suite"
    });
    return response;
  } catch (error) {
    throw {
      title: __("WPConsent installation failed", "google-analytics-for-wordpress"),
      message: error?.message || __("AJAX request failed", "google-analytics-for-wordpress")
    };
  }
};
const activateWPConsent = async () => {
  try {
    const response = await miAjax("monsterinsights_activate_addon", {
      nonce: getMiGlobal("activate_nonce", ""),
      isnetwork: getMiGlobal("network", false),
      plugin: "wpconsent-cookies-banner-privacy-suite/wpconsent.php"
    });
    return response;
  } catch (error) {
    throw {
      title: __("WPConsent activation failed", "google-analytics-for-wordpress"),
      message: error?.message || __("AJAX request failed", "google-analytics-for-wordpress")
    };
  }
};
const api = {
  installWPConsent,
  activateWPConsent
};
const _sfc_main$1 = {
  name: "UserFeedbackLogos",
  data() {
    return {};
  }
};
const _hoisted_1$1 = { class: "monsterinsights-userfeedback-logos" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<div class="monsterinsights-userfeedback-logos-item"><svg width="93" height="91" viewBox="0 0 93 91" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8015 76.4561H42.1956V90.8041H26.1009C23.5557 89.6812 21.4596 88.0842 19.9375 86.2128C20.5364 83.1186 22.7572 79.0762 25.8015 76.4561Z" fill="#6F4BBB"></path><path d="M26.7497 77.6538C24.5788 79.8996 22.4329 82.6195 21.7092 85.7136C23.0068 87.2607 24.7036 88.4585 26.5252 89.3318H40.2992V77.6538H26.7497Z" fill="#7D5DC2"></path><path d="M22.9569 82.5446C22.5327 83.1435 21.7342 85.5639 21.6843 85.7137C22.9819 87.2607 24.6787 88.4585 26.5003 89.3318H33.8365V83.0686C30.2183 83.0437 26.6001 82.869 22.9569 82.5446Z" fill="#9478CF"></path><path d="M25.7264 87.7598C27.4232 88.3337 28.2217 89.4067 28.4712 90.8041H22.5574C22.9566 89.6064 24.0795 88.1341 25.7264 87.7598Z" fill="#5F3EA7"></path><path d="M25.7015 88.4086C24.7782 88.6582 24.0047 89.3818 23.5056 90.2053H25.7264V88.4086H25.7015Z" fill="#6F4BBB"></path><path d="M31.5655 87.4105C33.8362 88.0343 34.9342 89.5564 35.2086 90.8041H27.3235C27.8475 89.4816 29.4445 87.7099 31.5655 87.4105Z" fill="#5F3EA7"></path><path d="M31.5158 88.0343C30.2681 88.2589 29.0454 89.1322 28.3218 90.2052H31.5657V88.0343H31.5158Z" fill="#6F4BBB"></path><path d="M61.8585 76.4561H45.4644V90.8041H61.5591C64.1043 89.6812 66.2003 88.0842 67.7225 86.2128C67.1485 83.1186 64.9277 79.0762 61.8585 76.4561Z" fill="#6F4BBB"></path><path d="M60.9355 77.6538C63.1064 79.8996 65.2524 82.6195 65.976 85.7136C64.6784 87.2607 62.9816 88.4585 61.1601 89.3318H47.386V77.6538H60.9355Z" fill="#7D5DC2"></path><path d="M64.7033 82.5446C65.1275 83.1435 65.9259 85.5639 65.9759 85.7137C64.6783 87.2607 62.9815 88.4585 61.1599 89.3318H53.8237V83.0686C57.4419 83.0437 61.0851 82.869 64.7033 82.5446Z" fill="#9478CF"></path><path d="M61.9585 87.7598C60.2617 88.3337 59.4632 89.4067 59.2136 90.8041H65.1275C64.7282 89.6064 63.6054 88.1341 61.9585 87.7598Z" fill="#5F3EA7"></path><path d="M61.9834 88.4086C62.9067 88.6582 63.6803 89.3818 64.1793 90.2053H61.9585V88.4086H61.9834Z" fill="#6F4BBB"></path><path d="M56.1192 87.4105C53.8485 88.0343 52.7506 89.5564 52.4761 90.8041H60.3612C59.8372 89.4816 58.2402 87.7099 56.1192 87.4105Z" fill="#5F3EA7"></path><path d="M56.1441 88.0343C57.3918 88.2589 58.6145 89.1322 59.3381 90.2052H56.0942V88.0343H56.1441Z" fill="#6F4BBB"></path><path d="M0 80.8728C0.0998121 83.4929 0.698685 85.539 1.84652 86.8116C3.64314 86.6619 5.16528 84.6656 5.86396 82.9439C4.81594 81.1223 2.76979 80.2989 0 80.8728Z" fill="#5F3EA7"></path><path d="M0.92334 81.5964C0.973246 83.1186 1.37249 84.6906 2.19594 85.8385L2.89463 81.6962C2.2708 81.5465 1.59707 81.5465 0.92334 81.5964Z" fill="#6F4BBB"></path><path d="M4.5415 82.2701C4.71618 84.6157 5.01561 86.6868 6.48784 88.7829C9.13286 88.209 11.204 86.7367 12.0773 84.3911C10.7798 81.4217 7.68559 81.0225 4.5415 82.2701Z" fill="#5F3EA7"></path><path d="M6.86202 87.7848L8.63369 82.5696C7.63557 82.37 6.51268 82.5197 5.4397 82.869C5.61437 84.6407 5.91381 86.2127 6.86202 87.7848Z" fill="#6F4BBB"></path><path d="M13.2251 84.1915C13.6743 86.8615 16.1945 88.184 17.4671 88.1091C18.041 87.1359 18.615 85.8633 18.615 84.3412L17.517 83.4179C15.8452 83.0935 14.0735 83.2183 13.2251 84.1915Z" fill="#5F3EA7"></path><path d="M17.018 87.2109C17.517 86.4623 17.8414 85.3144 17.8913 84.2165L16.0947 83.9171L17.018 87.2109Z" fill="#6F4BBB"></path><path d="M18.6399 48.4089V84.3163C12.4266 85.0898 5.19023 84.8403 0 80.8478C0.0998121 77.5041 0.424201 74.2353 1.02307 71.1161C2.14596 65.4767 4.26697 60.3364 7.93506 56.1194C11.179 52.4014 14.4229 50.6297 18.6399 48.4089Z" fill="#6F4BBB"></path><path d="M1.74683 80.0244C4.99072 82.5197 12.7761 83.2933 16.8684 82.7692V51.3035C6.31323 56.9179 2.12112 67.2734 1.74683 80.0244Z" fill="#9478CF"></path><path d="M1.74683 80.0244C3.39373 81.297 6.18847 82.0955 9.10797 82.5447C9.53217 74.5348 9.48226 62.4824 7.68565 59.2885C3.76802 64.853 1.99636 71.9646 1.74683 80.0244Z" fill="#A58DD4"></path><path d="M9.1078 74.6844C10.4802 74.6844 11.5782 75.7823 11.5782 77.1547C11.5782 78.5272 10.4802 79.6251 9.1078 79.6251C7.73539 79.6251 6.63745 78.5272 6.63745 77.1547C6.63745 75.7823 7.73539 74.6844 9.1078 74.6844Z" fill="#9478CF"></path><path d="M14.9966 20.4116C14.2729 15.7454 15.0714 13.3249 16.0197 9.05795C18.9891 11.5283 20.8855 13.3 24.5037 15.1215C25.2273 10.605 26.8243 6.33807 29.145 2.34559L30.5174 0C35.8074 3.99249 40.3239 7.18647 43.8173 12.4765C47.3108 7.18647 51.8273 3.99249 57.1173 0L58.4897 2.34559C60.8104 6.33807 62.4073 10.605 63.131 15.1215C66.7492 13.3 68.6456 11.5283 71.615 9.05795C72.5882 13.3 73.3617 15.7204 72.6381 20.4116L79.1758 22.2082C77.8782 39.2761 76.5557 53.8237 74.8839 70.8916C74.6593 73.2372 74.4098 75.6077 74.1602 77.9533C74.0854 78.627 73.2619 79.8497 69.7685 79.8747C52.7006 81.0225 34.8342 81.0225 17.7913 79.8747C14.2979 79.8248 13.4745 78.627 13.3996 77.9533C13.1501 75.5578 12.9005 73.1623 12.676 70.7668C12.5761 69.7936 12.4763 68.8205 12.3765 67.8223C10.9542 52.601 9.55683 37.4296 8.38403 22.1832L14.9217 20.3866H14.9966V20.4116Z" fill="#6F4BBB"></path><path d="M31.2411 3.5683C28.4214 8.35928 26.8493 13.4247 26.5499 18.6649C23.6553 17.567 20.3615 15.7703 17.5169 13.4497C16.943 15.9949 17.0677 19.3137 17.8413 22.2082C15.4458 22.7572 13.225 23.3311 11.0042 23.9799C12.2019 39.6504 13.3248 55.3209 14.8719 70.9415C15.0216 72.4886 15.346 75.8323 15.5206 77.3794C16.1445 77.7287 17.442 77.7287 17.966 77.7537C35.1337 78.9015 52.501 78.9015 69.6687 77.7537C70.2177 77.7038 71.4903 77.7038 72.1141 77.3794C72.2888 75.8572 72.6132 72.4387 72.7629 70.9415C74.285 55.2959 75.4329 39.6254 76.6306 23.9799C74.4098 23.3311 72.189 22.7572 69.7935 22.2082C70.567 19.3137 70.6918 15.9949 70.1179 13.4497C67.2982 15.7953 63.9794 17.567 61.0849 18.6649C60.7854 13.4497 59.2134 8.35928 56.3937 3.5683C50.6545 7.91013 46.8866 11.0542 43.8174 17.3424C40.7232 11.0542 36.9803 7.91013 31.2161 3.5683H31.2411Z" fill="#9478CF"></path><path d="M31.2411 3.5683C31.6653 10.5302 33.412 18.2656 36.7058 21.5095C32.314 21.0354 29.9685 20.5114 26.5748 18.6649C23.6553 17.5669 20.3615 15.7703 17.5169 13.4497C19.039 18.0411 20.5113 21.3099 23.5306 24.5039C20.9604 24.454 19.4882 23.6056 17.8413 22.2082C15.4458 22.7572 13.225 23.3311 11.0042 23.9799C12.2019 39.6504 13.3248 55.3209 14.8719 70.9415C15.0216 72.4886 15.346 75.8323 15.5206 77.3794C16.1445 77.7287 17.442 77.7287 17.966 77.7537C26.5499 78.3276 35.1836 78.6021 43.8174 78.6021V69.2696C30.4925 70.3177 18.3154 49.3072 32.314 35.5082L29.5193 37.0553C29.17 34.8344 29.8686 32.0647 30.7919 29.8189C32.6135 25.4521 37.4544 22.2082 43.8174 21.4347V17.3174C40.7232 11.0293 37.0052 7.88517 31.2411 3.5683Z" fill="#A58DD4"></path><path d="M64.1043 24.5038C67.0987 21.3098 68.5959 18.016 70.118 13.4247C70.6919 15.9699 70.5672 19.2886 69.7936 22.1832C68.1467 23.6055 66.6745 24.4539 64.1043 24.5038ZM59.0389 23.2063C60.5361 23.2063 61.7338 24.429 61.7338 25.9012C61.7338 27.3984 60.5111 28.5961 59.0389 28.5961C57.5417 28.5961 56.344 27.3734 56.344 25.9012C56.344 24.429 57.5667 23.2063 59.0389 23.2063ZM68.8953 29.2948C69.9184 29.2948 70.7668 30.1432 70.7668 31.1663C70.7668 32.1894 69.9184 33.0378 68.8953 33.0378C67.8723 33.0378 67.0239 32.1894 67.0239 31.1663C67.0239 30.1183 67.8473 29.2948 68.8953 29.2948ZM50.9541 21.4845C54.2479 18.2656 55.9946 10.5301 56.4188 3.54327C59.2385 8.33426 60.8105 13.3997 61.11 18.6399C57.6914 20.4864 55.3458 21.0104 50.9541 21.4845Z" fill="#7D5DC2"></path><path d="M19.3637 27.124C21.8091 27.124 23.8053 29.1202 23.8053 31.5656C23.8053 34.011 21.8091 36.0072 19.3637 36.0072C16.9183 36.0072 14.922 34.011 14.922 31.5656C14.922 29.1202 16.9183 27.124 19.3637 27.124ZM16.4941 40.7483C17.4672 40.7483 18.2657 41.5468 18.2657 42.52C18.2657 43.4932 17.4672 44.2917 16.4941 44.2917C15.5209 44.2917 14.7224 43.4932 14.7224 42.52C14.7224 41.5468 15.5209 40.7483 16.4941 40.7483Z" fill="#9478CF"></path><path d="M44.1167 29.5444C54.6718 29.5444 63.2307 38.1033 63.2307 48.6584C63.2307 59.2135 54.6718 67.7724 44.1167 67.7724C33.5616 67.7724 25.0027 59.2135 25.0027 48.6584C25.0027 38.1033 33.5616 29.5444 44.1167 29.5444Z" fill="#D3E8EF"></path><path d="M25.5022 44.3166C27.1741 37.1301 32.9132 31.4908 40.1496 29.9686C48.0348 29.3698 54.4228 34.8844 54.4228 42.3952C54.4228 49.956 47.935 56.6684 39.975 57.3671C31.99 58.0657 25.5271 52.5262 25.5271 44.9404C25.5022 44.7408 25.5022 44.5162 25.5022 44.3166Z" fill="white"></path><path d="M50.0058 41.3222C55.9696 41.3222 60.7855 46.1381 60.7855 52.1019C60.7855 58.0657 55.9696 62.8816 50.0058 62.8816C44.042 62.8816 39.2261 58.0657 39.2261 52.1019C39.2261 46.1631 44.042 41.3222 50.0058 41.3222Z" fill="#EA4E64"></path><path d="M50.0061 41.3222C51.5781 41.3222 53.0753 41.6466 54.4228 42.2704V42.3952C54.4228 49.7563 48.2843 56.319 40.5489 57.3171C39.7005 55.77 39.2014 53.9983 39.2014 52.1019C39.2014 46.1381 44.0173 41.3222 50.0061 41.3222Z" fill="#EC6277"></path><path d="M50.0059 45.1151C53.8737 45.1151 57.0177 48.2342 57.0177 52.1269C57.0177 55.9946 53.8986 59.1387 50.0059 59.1387C46.1382 59.1387 42.9941 56.0196 42.9941 52.1269C42.9941 48.2592 46.1133 45.1151 50.0059 45.1151Z" fill="#232323"></path><path d="M50.006 45.1151C51.4284 45.1151 52.7509 45.5393 53.8488 46.263C52.5013 50.7295 48.958 54.5224 44.4166 56.319C43.5432 55.1462 43.0192 53.674 43.0192 52.1269C42.9942 48.2592 46.1134 45.1151 50.006 45.1151Z" fill="#323232"></path><path d="M42.3701 44.0421C44.8155 44.0421 46.7867 46.0134 46.7867 48.4588C46.7867 50.9042 44.8155 52.8755 42.3701 52.8755C39.9247 52.8755 37.9534 50.9042 37.9534 48.4588C37.9534 46.0134 39.9247 44.0421 42.3701 44.0421Z" fill="white"></path><path d="M21.634 57.4169C27.0738 54.4226 35.2584 59.6627 34.6595 68.1467C29.4693 66.5498 23.8549 61.659 21.634 57.4169Z" fill="#6F4BBB"></path><path d="M21.634 57.4169C26.5747 57.5167 32.0394 60.3114 34.6595 68.1467C28.4462 67.448 22.6571 62.7069 21.634 57.4169Z" fill="#A58DD4"></path><path d="M24.2043 64.5036C24.928 64.254 28.3216 64.3289 28.5961 64.7032C28.9205 65.1523 28.0222 67.448 27.0739 68.9452C25.8263 67.9471 24.8032 66.5747 24.2043 64.5036Z" fill="#7D5DC2"></path><path d="M23.2063 63.6801C23.9299 63.4306 27.3236 63.5055 27.598 63.8798C27.9224 64.3289 27.0241 66.6246 26.0759 68.1218C24.8282 67.1237 23.8052 65.7512 23.2063 63.6801Z" fill="white"></path><path d="M24.2296 62.5073C24.4541 67.3233 30.7423 71.9645 36.7061 70.2428C37.0305 71.6401 36.0822 72.4636 35.1091 72.6632C29.6943 73.1373 24.4791 69.7187 22.7573 65.352C22.2583 64.1542 22.8072 62.657 24.2296 62.5073Z" fill="#6F4BBB"></path><path d="M23.2062 71.5403C24.7034 74.36 27.049 75.6826 29.6191 76.1068C25.951 77.7537 22.7071 75.5578 23.2062 71.5403Z" fill="#6F4BBB"></path><path d="M25.6768 72.2141C28.6212 73.861 31.416 74.385 34.6598 74.0855C32.2893 75.6576 27.648 75.8322 25.6768 72.2141Z" fill="#9478CF"></path><path d="M50.7297 24.1296C44.8158 13.8989 29.2451 19.8626 30.8172 31.341C34.7098 24.9031 42.2207 22.8071 50.7297 24.1296Z" fill="#5F3EA7"></path><path d="M50.7295 24.1296C47.3858 18.3655 40.3491 17.9912 35.6329 21.1602C35.608 22.5077 36.0072 23.4809 36.7309 24.2544C40.5487 22.4079 45.5393 21.6593 50.7295 24.1296Z" fill="#6F4BBB"></path><path d="M81.6963 63.0313C87.9096 63.0313 93 68.0219 93 74.2602C93 80.4984 87.9096 85.489 81.6963 85.489C75.483 85.489 70.3926 80.4984 70.3926 74.2602C70.3926 68.0219 75.483 63.0313 81.6963 63.0313Z" fill="#6F4BBB"></path><path d="M81.6961 64.6783C87.0361 64.6783 91.353 68.9702 91.353 74.2353C91.353 79.5253 87.0361 83.7923 81.6961 83.7923C76.3562 83.7923 72.0393 79.5004 72.0393 74.2353C72.0393 68.9702 76.3811 64.6783 81.6961 64.6783Z" fill="#9478CF"></path><path d="M81.6962 64.6783C85.4891 64.6783 88.7579 66.8492 90.3549 69.9933C90.7043 74.9839 84.6157 78.652 80.5484 76.9302C77.554 75.3083 75.4829 72.1392 75.4829 68.5211C75.4829 67.9222 75.5328 67.3483 75.6576 66.7743C77.3294 65.4768 79.4255 64.6783 81.6962 64.6783Z" fill="#A58DD4"></path><path d="M77.7536 72.7631C77.3045 71.3906 82.4448 69.6689 82.9189 71.0413L88.0093 86.2876C88.4585 87.66 83.3181 89.3818 82.844 88.0094L77.7536 72.7631Z" fill="#2B3039"></path><path d="M85.1396 71.2159C83.1184 72.4636 81.4465 73.6863 80.2488 75.957C81.9705 78.0531 84.2413 79.2009 86.7366 78.9015C88.7578 76.3563 87.7097 73.4368 85.1396 71.2159Z" fill="#5F3EA7"></path><path d="M86.7118 74.7094C86.4123 73.836 85.8634 73.0125 85.1647 72.2141C83.6176 73.2122 82.345 74.2852 81.3718 75.8322C82.4448 75.9321 84.1167 75.6576 86.7118 74.7094Z" fill="#6F4BBB"></path><path d="M87.0859 77.3294C85.0647 78.5771 83.3928 79.7998 82.1951 82.0705C83.9168 84.1665 86.1876 85.3144 88.6829 85.0149C90.7041 82.4697 89.656 79.5502 87.0859 77.3294Z" fill="#5F3EA7"></path><path d="M88.6581 80.5733C88.3586 79.7 87.8097 78.8765 87.111 78.078C85.5639 79.0761 84.2913 80.1491 83.3181 81.6962C84.3911 81.821 86.063 81.5215 88.6581 80.5733Z" fill="#6F4BBB"></path><path d="M76.5559 77.9284C78.4773 77.4543 80.1741 77.1548 82.2452 77.7537C82.4947 79.9995 81.8709 82.0456 80.2489 83.3432C77.554 83.1186 76.4062 80.773 76.5559 77.9284Z" fill="#5F3EA7"></path><path d="M77.7288 80.6482C77.3794 79.9495 77.2047 79.151 77.1299 78.2776C78.6271 77.9283 79.9995 77.7786 81.5216 78.103C80.9727 78.8266 79.8248 79.6501 77.7288 80.6482Z" fill="#6F4BBB"></path><path d="M72.7131 36.631C62.5073 37.2049 54.697 45.9635 55.2709 56.1693C55.8448 66.375 64.6034 74.1853 74.8092 73.6114C85.0149 73.0375 92.8252 64.279 92.2513 54.0732C91.6774 43.8674 82.9438 36.0571 72.7131 36.631Z" fill="#393F4C"></path><path d="M72.8628 38.9267C63.9296 39.4258 57.0675 47.1113 57.5666 56.0695C58.0657 65.0027 65.7512 71.8647 74.7093 71.3407C83.6425 70.8417 90.5046 63.1561 90.0055 54.198C89.4815 45.2648 81.8209 38.4027 72.8628 38.9267Z" fill="#D3E8EF"></path><path d="M86.1128 63.1561C87.7597 60.6109 88.6581 57.5417 88.4834 54.2728C88.1091 47.81 83.6425 42.5449 77.7286 40.923C77.2545 46.5125 76.7555 52.0021 76.2314 57.6415C78.2027 58.44 83.2932 60.9852 86.1128 63.1561Z" fill="white"></path><path d="M72.6132 40.7234C64.8279 41.1726 58.8641 47.835 59.3382 55.6204C59.413 56.7183 59.5877 57.7913 59.8872 58.7894C59.8622 58.5648 59.8372 58.3402 59.8372 58.0907C59.3382 49.0577 66.2252 41.3223 75.2582 40.7983H75.3331C74.4597 40.7234 73.5365 40.6735 72.6132 40.7234Z" fill="white"></path><path d="M59.8872 63.5304C60.1866 64.0295 60.511 64.5036 60.8604 64.9528L65.6514 58.3152L76.6806 62.9066L83.0686 49.7065L89.4815 50.9291C89.3068 50.3303 89.1322 49.7314 88.9076 49.1575L82.1703 47.8599L75.9071 60.8106L65.1273 56.319L59.8872 63.5304Z" fill="#999999"></path><path d="M65.1773 53.9734C67.0239 53.8736 68.5959 55.271 68.6957 57.1175C68.7955 58.964 67.3982 60.5361 65.5516 60.6359C63.7051 60.7357 62.1331 59.3383 62.0333 57.4918C61.9085 55.6702 63.3308 54.0982 65.1773 53.9734Z" fill="#1EC185"></path><path d="M82.42 45.4644C84.2665 45.3646 85.8386 46.762 85.9384 48.6085C86.0382 50.455 84.6408 52.0271 82.7943 52.1269C80.9478 52.2267 79.3757 50.8293 79.2759 48.9828C79.1512 47.1363 80.5735 45.5643 82.42 45.4644Z" fill="#EA4E64"></path><path d="M76.0816 58.5398C77.9282 58.44 79.5002 59.8374 79.6 61.6839C79.6998 63.5304 78.3024 65.1025 76.4559 65.2023C74.6094 65.3021 73.0374 63.9047 72.9376 62.0582C72.8128 60.2117 74.2351 58.6396 76.0816 58.5398Z" fill="#FF893A"></path></svg></div><div class="monsterinsights-userfeedback-logos-item"><svg width="54" height="47" viewBox="0 0 54 47" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M53.9989 13.9778V15.2382C53.9609 15.4077 53.9006 15.574 53.8879 15.7457C53.6342 19.1624 52.2977 22.1147 49.9007 24.5459C42.7075 31.8447 35.4816 39.1109 28.2652 46.3855C27.4553 47.2015 26.5174 47.2047 25.716 46.396C18.5112 39.133 11.2768 31.8995 4.12284 24.588C0.451728 20.8365 -0.732501 16.289 0.429523 11.1855C1.83897 4.99751 6.94912 0.55631 13.2668 0.0561758C16.9728 -0.237587 20.3489 0.753205 23.227 3.13279C24.426 4.12464 25.4939 5.27442 26.6031 6.37261C26.896 6.66322 27.0863 6.65901 27.3697 6.36735C28.2494 5.46184 29.1111 4.53212 30.0543 3.69505C33.5921 0.556311 37.7401 -0.59242 42.3766 0.285711C48.1497 1.37969 52.6339 6.0262 53.6627 11.8099C53.7906 12.529 53.8879 13.2545 54 13.9768L53.9989 13.9778Z" fill="#DC3232"></path></svg></div>', 2),
    createBaseVNode("div", { class: "monsterinsights-userfeedback-logos-item" }, [
      createBaseVNode("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100",
        height: "86",
        viewBox: "0 0 95 66",
        role: "img",
        "aria-label": "Logo Icon"
      }, [
        createBaseVNode("g", null, [
          createBaseVNode("path", {
            d: "M36.9757 2.83892C36.9757 1.2968 35.7402 0.0438371 34.2069 0.00878906H17.9183C16.9019 0.00878906 15.9644 0.560795 15.4649 1.44576L2.56726 24.3058C1.50705 26.1897 2.86516 28.5116 5.02938 28.5116H21.3004C22.3168 28.4941 23.2544 27.9508 23.7538 27.0659L36.5726 4.3197C36.5726 4.3197 36.5638 4.3197 36.5551 4.3197C36.8179 3.89036 36.9757 3.39092 36.9757 2.84768V2.83892Z",
            fill: "#0065FF"
          }),
          createBaseVNode("path", {
            d: "M93.8936 32.507C93.8936 31.9813 93.7359 31.4906 93.4906 31.07L78.2359 4.01294L66.8541 24.148L70.8233 31.1927C71.0423 31.5957 71.165 32.0601 71.165 32.5596C71.165 33.0152 71.0423 33.4358 70.8496 33.8213L55.8227 60.4928C55.4898 60.9572 55.2882 61.5267 55.2882 62.1488C55.2882 63.7172 56.55 64.979 58.1096 65.0053H74.3544C75.3708 65.0053 76.3083 64.4533 76.8077 63.5683L93.622 33.7424C93.622 33.7424 93.6133 33.7337 93.6045 33.7249C93.7797 33.3569 93.8936 32.9451 93.8936 32.4982V32.507Z",
            fill: "#0065FF"
          }),
          createBaseVNode("path", {
            d: "M78.2447 4.00424L75.9841 0L64.8826 19.513L64.5672 20.0738L62.0963 24.4197C62.587 23.5698 63.507 22.9915 64.5585 22.9915C65.5047 22.9915 66.3371 23.4559 66.8541 24.1569V24.1393L78.2359 4.00424H78.2447Z",
            fill: "#004CBA"
          }),
          createBaseVNode("path", {
            d: "M55.0517 0C55.0517 0 55.0517 0 55.0517 0.00876201C55.0166 0.00876201 54.9816 0 54.9553 0C53.8338 0 52.8699 0.657151 52.4143 1.60345L30.3165 40.6732C29.8346 41.5494 28.8796 42.1453 27.8106 42.1453C26.7416 42.1453 25.7428 41.5232 25.2696 40.6031L21.5195 33.9528C21.02 33.0591 20.0738 32.5158 19.0574 32.5158L2.82136 32.5684C0.665908 32.5684 -0.683441 34.8991 0.376762 36.7741L15.4912 63.5859C15.9907 64.4708 16.9282 65.0229 17.9446 65.0229H37.2736C37.2999 65.0229 37.3174 65.0229 37.3437 65.0229C38.4214 65.0229 39.3502 64.4183 39.8321 63.5245C39.8321 63.5245 39.8321 63.5246 39.8408 63.5333L53.7023 39.1925L62.1051 24.4285L64.576 20.0825L64.8914 19.5218L75.9841 0H55.0517Z",
            fill: "#0065FF"
          })
        ])
      ])
    ], -1)
  ])]);
}
const WpconsentLogos = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const _hoisted_1 = {
  id: "monsterinsights-userfeedback",
  class: "monsterinsights-userfeedback"
};
const _hoisted_2 = { class: "monsterinsights-userfeedback-container" };
const _hoisted_3 = { class: "monsterinsights-userfeedback-headlines monsterinsights-text-center" };
const _hoisted_4 = ["innerHTML"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "monsterinsights-userfeedback-features monsterinsights-wpconsent-features" };
const _hoisted_7 = { class: "monsterinsights-wpconsent-screenshot" };
const _hoisted_8 = ["src"];
const _hoisted_9 = { class: "monsterinsights-userfeedback-features-list" };
const _hoisted_10 = ["textContent"];
const _hoisted_11 = { class: "monsterinsights-userfeedback-install-box-step" };
const _hoisted_12 = ["textContent"];
const _hoisted_13 = { class: "monsterinsights-userfeedback-install-box-info" };
const _hoisted_14 = ["textContent"];
const _hoisted_15 = ["textContent"];
const _hoisted_16 = ["disabled", "textContent"];
const _hoisted_17 = ["textContent"];
const _hoisted_18 = ["textContent"];
const _hoisted_19 = { class: "monsterinsights-userfeedback-install-box-info" };
const _hoisted_20 = ["textContent"];
const _hoisted_21 = ["textContent"];
const _hoisted_22 = ["disabled", "textContent"];
const _sfc_main = {
  __name: "WpconsentShell",
  setup(__props) {
    const { __: __2 } = wp.i18n;
    const route = useRoute();
    const addonsStore = useAddonsStore();
    const { addons } = storeToRefs(addonsStore);
    const installing = ref(false);
    const activating = ref(false);
    const installedAndActivated = ref(false);
    const errorMessage = ref("");
    const textTopHeading = __2(
      "Make Your Website Analytics Compliant with Privacy Laws",
      "google-analytics-for-wordpress"
    );
    const textTopDescription = __2(
      "Privacy laws like GDPR, CCPA, and others require user consent before you can track visitors. Our sister plugin, WPConsent, helps you add a smart cookie consent banner for better privacy compliance with Google Analytics.",
      "google-analytics-for-wordpress"
    );
    const featuresList = [
      __2(
        "WPConsent includes an easy-to-use website scanner will automatically detect and list popular services used on your website",
        "google-analytics-for-wordpress"
      ),
      __2(
        "Includes Multiple layouts including cookie banners, cookie popups, and more, so you can create a beautiful cookie consent notice with just a few clicks.",
        "google-analytics-for-wordpress"
      ),
      __2(
        "All WPConsent data is stored right on your own servers guaranteeing you maximum privacy and data security.",
        "google-analytics-for-wordpress"
      )
    ];
    const textInstallHeading = __2("Install & Activate WPConsent", "google-analytics-for-wordpress");
    const textInstallDescription = __2(
      "Install WPConsent by clicking the button below.",
      "google-analytics-for-wordpress"
    );
    const textInstallButton = __2("Install WPConsent", "google-analytics-for-wordpress");
    const textActivateButton = __2("Activate WPConsent", "google-analytics-for-wordpress");
    const textInstallingPlugin = __2("Installing WPConsent", "google-analytics-for-wordpress");
    const textActivatingPlugin = __2("Activating WPConsent", "google-analytics-for-wordpress");
    const textInstalledPlugin = __2("Installed & Active", "google-analytics-for-wordpress");
    const textSetupHeading = __2("Set Up WPConsent", "google-analytics-for-wordpress");
    const textSetupDescription = __2(
      "Run the WPConsent setup wizard to launch a fully functional cookie banner within minutes.",
      "google-analytics-for-wordpress"
    );
    const textSetupButton = __2("Start Setup", "google-analytics-for-wordpress");
    const textErrorMessage = __2(
      "Oops! There was an error processing request. Please try again later.",
      "google-analytics-for-wordpress"
    );
    const featureImageUrl = wpconsentFeatureImage;
    const pluginInstalled = computed(() => !!addons.value?.wpconsent?.installed);
    const pluginActive = computed(() => !!addons.value?.wpconsent?.active);
    const pluginInstalledAndActive = computed(
      () => installedAndActivated.value || pluginInstalled.value && pluginActive.value
    );
    const loading = computed(() => installing.value || activating.value);
    const setupComplete = computed(() => false);
    const firstStepClass = computed(() => {
      if (pluginInstalledAndActive.value) return "monsterinsights-inactive";
      if (loading.value) return "monsterinsights-loading";
      return "";
    });
    const secondStepClass = computed(
      () => pluginInstalledAndActive.value ? "" : "monsterinsights-inactive"
    );
    const firstStepButtonText = computed(() => {
      if (pluginInstalledAndActive.value) return textInstalledPlugin;
      if (installing.value) return textInstallingPlugin;
      if (activating.value) return textActivatingPlugin;
      if (pluginInstalled.value) return textActivateButton;
      return textInstallButton;
    });
    function showErrorResult(result, show = true) {
      if (!show) {
        errorMessage.value = "";
        return;
      }
      if (result && typeof result === "object" && "error" in result && result.error) {
        errorMessage.value = result.error;
      } else {
        errorMessage.value = textErrorMessage;
      }
    }
    async function installPlugin() {
      if (pluginInstalledAndActive.value) return;
      installing.value = true;
      errorMessage.value = "";
      let installed;
      try {
        if (!pluginInstalled.value && !pluginActive.value) {
          installed = await api.installWPConsent();
          const ok = installed === true || installed?.success === true || installed && installed.success !== false;
          if (ok) {
            installed = { success: true };
            addonsStore.setAddonInstalled({
              slug: "wpconsent",
              basename: "wpconsent-cookies-banner-privacy-suite/wpconsent.php"
            });
          } else {
            installing.value = false;
            showErrorResult(installed);
            return;
          }
        } else if (pluginInstalled.value && !pluginActive.value) {
          installed = { success: true };
        }
      } catch (e) {
        installing.value = false;
        showErrorResult(e);
        return;
      }
      if (installed?.success) {
        installing.value = false;
        activating.value = true;
        showErrorResult(0, false);
        try {
          const activated = await api.activateWPConsent();
          const ok = activated === true || activated?.success === true || activated && activated.success !== false;
          if (ok) {
            activating.value = false;
            installedAndActivated.value = true;
            addonsStore.setAddonActive("wpconsent");
            showErrorResult(0, false);
          } else {
            activating.value = false;
            showErrorResult(activated);
          }
        } catch (e) {
          activating.value = false;
          showErrorResult(e);
        }
      }
    }
    function gotoSetupWizard() {
      if (!pluginInstalledAndActive.value) return;
      const target = addons.value?.wpconsent?.settings;
      if (target) window.location = target;
    }
    onMounted(() => {
      document.body.classList.add("monsterinsights-userfeedback-install-page");
      if (route.query.installnow) {
        setTimeout(() => {
          window.scrollTo({ top: 500, behavior: "smooth" });
          installPlugin();
        }, 500);
      }
    });
    onUnmounted(() => {
      document.body.classList.remove("monsterinsights-userfeedback-install-page");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(WpconsentLogos),
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("h1", { innerHTML: unref(textTopHeading) }, null, 8, _hoisted_4),
            createBaseVNode("p", {
              textContent: toDisplayString(unref(textTopDescription))
            }, null, 8, _hoisted_5)
          ]),
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createBaseVNode("img", {
                src: unref(featureImageUrl),
                alt: ""
              }, null, 8, _hoisted_8)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("ul", null, [
                (openBlock(), createElementBlock(Fragment, null, renderList(featuresList, (feature, key) => {
                  return createBaseVNode("li", { key }, [
                    createBaseVNode("span", {
                      class: "monsterinsights-userfeedback-feat-list-text",
                      textContent: toDisplayString(feature)
                    }, null, 8, _hoisted_10)
                  ]);
                }), 64))
              ])
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass(["monsterinsights-userfeedback-install-box monsterinsights-install-userfeedback", firstStepClass.value])
          }, [
            createBaseVNode("div", _hoisted_11, [
              createBaseVNode("span", {
                textContent: toDisplayString(!pluginInstalledAndActive.value ? "1" : "")
              }, null, 8, _hoisted_12)
            ]),
            createBaseVNode("div", _hoisted_13, [
              createBaseVNode("h2", {
                textContent: toDisplayString(unref(textInstallHeading))
              }, null, 8, _hoisted_14),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(textInstallDescription))
              }, null, 8, _hoisted_15),
              createBaseVNode("span", null, [
                createBaseVNode("button", {
                  class: "monsterinsights-button",
                  disabled: pluginInstalledAndActive.value || loading.value,
                  textContent: toDisplayString(firstStepButtonText.value),
                  onClick: withModifiers(installPlugin, ["prevent"])
                }, null, 8, _hoisted_16)
              ]),
              createBaseVNode("span", {
                class: "monsterinsights-userfeedback-error",
                style: normalizeStyle({ display: errorMessage.value ? "block" : "none" }),
                textContent: toDisplayString(errorMessage.value)
              }, null, 12, _hoisted_17)
            ])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(["monsterinsights-userfeedback-install-box monsterinsights-setup-userfeedback", secondStepClass.value])
          }, [
            createBaseVNode("div", {
              class: normalizeClass(["monsterinsights-userfeedback-install-box-step", setupComplete.value ? "is-complete" : ""])
            }, [
              createBaseVNode("span", {
                textContent: toDisplayString(!setupComplete.value ? "2" : "")
              }, null, 8, _hoisted_18)
            ], 2),
            createBaseVNode("div", _hoisted_19, [
              createBaseVNode("h2", {
                textContent: toDisplayString(unref(textSetupHeading))
              }, null, 8, _hoisted_20),
              createBaseVNode("p", {
                textContent: toDisplayString(unref(textSetupDescription))
              }, null, 8, _hoisted_21),
              createBaseVNode("button", {
                class: "monsterinsights-button",
                disabled: !pluginInstalledAndActive.value,
                textContent: toDisplayString(unref(textSetupButton)),
                onClick: withModifiers(gotoSetupWizard, ["prevent"])
              }, null, 8, _hoisted_22)
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
