/**
 * plugin.js
 *
 * Released under LGPL License.
 * Copyright (c) 2015 SIRAP SAS All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

var $ = window.jQuery
var tinymce = window.tinymce

tinymce.PluginManager.add('advancedtable', createAdvancedtablePlugin)

function createAdvancedtablePlugin (editor, url) {
  editor.addMenuItem('table_select', {
    text: 'Selection',
    context: 'table',
    icon: 'help',
    prependToContext: false,
    onclick: tableSelect
  })

  editor.addButton('table_select', {
    name: 'table_select',
    title: 'Selection',
    icon: 'preview',
    context: 'table',
    hidden: false,
    onclick: tableSelect
  })

  function tableSelect (evt) {
    var selectedNode = editor.selection.getNode()
    var table = $(selectedNode).parents('table')
    editor.selection.select(table[0])
  }
}
