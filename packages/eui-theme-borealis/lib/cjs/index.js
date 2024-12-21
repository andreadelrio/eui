"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiThemeBorealis = exports.EuiThemeBorealis = exports.EUI_THEME_BOREALIS_KEY = void 0;
var _euiThemeCommon = require("@elastic/eui-theme-common");
var _colors = require("./variables/colors");
var _animation = require("./variables/_animation");
var _breakpoint = require("./variables/_breakpoint");
var _size = require("./variables/_size");
var _borders = require("./variables/_borders");
var _levels = require("./variables/_levels");
var _typography = require("./variables/_typography");
var _states = require("./variables/_states");
var _components = require("./variables/_components");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

var EUI_THEME_BOREALIS_KEY = exports.EUI_THEME_BOREALIS_KEY = 'EUI_THEME_BOREALIS';
var euiThemeBorealis = exports.euiThemeBorealis = {
  colors: _colors.colors,
  base: _size.base,
  size: _size.size,
  border: _borders.border,
  font: _typography.font,
  animation: _animation.animation,
  breakpoint: _breakpoint.breakpoint,
  levels: _levels.levels,
  focus: _states.focus,
  components: _components.components,
  flags: {
    hasGlobalFocusColor: true,
    hasVisColorAdjustment: false
  }
};
var EuiThemeBorealis = exports.EuiThemeBorealis = (0, _euiThemeCommon.buildTheme)(euiThemeBorealis, EUI_THEME_BOREALIS_KEY);
//# sourceMappingURL=index.js.map