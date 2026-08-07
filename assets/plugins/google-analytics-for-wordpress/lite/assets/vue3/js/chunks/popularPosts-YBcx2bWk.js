import { r as miAjax } from "./ajax-B_XS1gT5.js";
function fetchThemes(type = "inline") {
  return miAjax("monsterinsights_get_popular_posts_themes", { type });
}
function updateThemeSetting({ type, theme, object, key, value }) {
  return miAjax("monsterinsights_vue_popular_posts_update_theme_setting", {
    type,
    theme,
    object,
    key,
    value
  });
}
function emptyCache() {
  return miAjax("monsterinsights_popular_posts_empty_cache");
}
function grabPopularPostsReport() {
  return miAjax("monsterinsights_vue_grab_popular_posts_report");
}
function getPostTypes() {
  return miAjax("monsterinsights_get_post_types");
}
function getPosts({ post_type, keyword }) {
  return miAjax("monsterinsights_get_posts", { post_type, keyword });
}
function sharedcountStartIndexing() {
  return miAjax("monsterinsights_sharedcount_start_indexing");
}
function sharedcountGetIndexProgress() {
  return miAjax("monsterinsights_sharedcount_get_index_progress");
}
export {
  sharedcountStartIndexing as a,
  getPostTypes as b,
  grabPopularPostsReport as c,
  emptyCache as e,
  fetchThemes as f,
  getPosts as g,
  sharedcountGetIndexProgress as s,
  updateThemeSetting as u
};
