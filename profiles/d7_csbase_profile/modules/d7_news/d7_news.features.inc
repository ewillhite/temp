<?php
/**
 * @file
 * d7_news.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function d7_news_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "context" && $api == "context") {
    return array("version" => "3");
  }
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function d7_news_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function d7_news_node_info() {
  $items = array(
    'news_article' => array(
      'name' => t('News Article'),
      'base' => 'node_content',
      'description' => t('Use <em>News Articles</em> for time-sensitive content like news and press releases.'),
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
