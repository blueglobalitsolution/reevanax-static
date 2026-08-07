import { m as computed, L as reactive } from "./toastStore-CRCNwITM.js";
const state = reactive({
  notices: {}
});
function useNotices() {
  const allNotices = computed(() => state.notices);
  const hasNotices = computed(() => Object.keys(state.notices).length > 0);
  const addNotice = (noticeObject) => {
    state.notices = { ...state.notices, [noticeObject.id]: noticeObject };
  };
  const removeNotice = (noticeId) => {
    const { [noticeId]: _, ...rest } = state.notices;
    state.notices = rest;
  };
  const resetNotices = () => {
    state.notices = {};
  };
  const getNotice = (noticeId) => {
    return state.notices[noticeId] || null;
  };
  return {
    allNotices,
    hasNotices,
    addNotice,
    removeNotice,
    resetNotices,
    getNotice
  };
}
export {
  useNotices as u
};
