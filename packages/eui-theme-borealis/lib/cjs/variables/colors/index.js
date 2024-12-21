"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colors = void 0;
var _semantic_colors = require("./_semantic_colors");
var _colors_light = require("./_colors_light");
var _colors_dark = require("./_colors_dark");
var _colors_vis = require("./_colors_vis");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

var colors = exports.colors = {
  ghost: _semantic_colors.SEMANTIC_COLORS.plainLight,
  ink: _semantic_colors.SEMANTIC_COLORS.plainDark,
  LIGHT: _colors_light.light_colors,
  DARK: _colors_dark.dark_colors,
  vis: _colors_vis.colorVis
};
//# sourceMappingURL=index.js.map