<?php
/**
 * @file
 * d7_base_feature.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function d7_base_feature_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}
