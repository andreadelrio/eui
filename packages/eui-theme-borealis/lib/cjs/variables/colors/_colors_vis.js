"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorVis = void 0;
var _semantic_colors = require("./_semantic_colors");
var _primitive_colors = require("./_primitive_colors");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// Maps allow for easier JSON usage
// Use map_merge(euiColorVisColors, $yourMap) to change individual colors after importing ths file
// The `behindText` variant is a direct copy of the hex output by the JS euiPaletteColorBlindBehindText() function
var euiPaletteColorBlind = {
  euiColorVis0: {
    graphic: _semantic_colors.SEMANTIC_COLORS.accentSecondary60
  },
  euiColorVis1: {
    graphic: _semantic_colors.SEMANTIC_COLORS.accentSecondary30
  },
  euiColorVis2: {
    graphic: _semantic_colors.SEMANTIC_COLORS.primary60
  },
  euiColorVis3: {
    graphic: _semantic_colors.SEMANTIC_COLORS.primary30
  },
  euiColorVis4: {
    graphic: _semantic_colors.SEMANTIC_COLORS.accent60
  },
  euiColorVis5: {
    graphic: _semantic_colors.SEMANTIC_COLORS.accent30
  },
  euiColorVis6: {
    graphic: _semantic_colors.SEMANTIC_COLORS.danger60
  },
  euiColorVis7: {
    graphic: _semantic_colors.SEMANTIC_COLORS.danger30
  },
  euiColorVis8: {
    graphic: _semantic_colors.SEMANTIC_COLORS.warning60
  },
  euiColorVis9: {
    graphic: _semantic_colors.SEMANTIC_COLORS.warning30
  }
};
var colorVis = exports.colorVis = {
  euiColorVis0: euiPaletteColorBlind.euiColorVis0.graphic,
  euiColorVis1: euiPaletteColorBlind.euiColorVis1.graphic,
  euiColorVis2: euiPaletteColorBlind.euiColorVis2.graphic,
  euiColorVis3: euiPaletteColorBlind.euiColorVis3.graphic,
  euiColorVis4: euiPaletteColorBlind.euiColorVis4.graphic,
  euiColorVis5: euiPaletteColorBlind.euiColorVis5.graphic,
  euiColorVis6: euiPaletteColorBlind.euiColorVis6.graphic,
  euiColorVis7: euiPaletteColorBlind.euiColorVis7.graphic,
  euiColorVis8: euiPaletteColorBlind.euiColorVis8.graphic,
  euiColorVis9: euiPaletteColorBlind.euiColorVis9.graphic,
  euiColorVisAsTextLight0: _semantic_colors.SEMANTIC_COLORS.accentSecondary100,
  euiColorVisAsTextLight1: _semantic_colors.SEMANTIC_COLORS.primary100,
  euiColorVisAsTextLight2: _semantic_colors.SEMANTIC_COLORS.accent100,
  euiColorVisAsTextLight3: _semantic_colors.SEMANTIC_COLORS.danger100,
  euiColorVisAsTextLight4: _semantic_colors.SEMANTIC_COLORS.warning100,
  euiColorVisAsTextLight5: _semantic_colors.SEMANTIC_COLORS.success100,
  euiColorVisAsTextLight6: _semantic_colors.SEMANTIC_COLORS.assistance100,
  euiColorVisAsTextDark0: _semantic_colors.SEMANTIC_COLORS.accentSecondary60,
  euiColorVisAsTextDark1: _semantic_colors.SEMANTIC_COLORS.primary60,
  euiColorVisAsTextDark2: _semantic_colors.SEMANTIC_COLORS.accent60,
  euiColorVisAsTextDark3: _semantic_colors.SEMANTIC_COLORS.danger60,
  euiColorVisAsTextDark4: _semantic_colors.SEMANTIC_COLORS.warning60,
  euiColorVisAsTextDark5: _semantic_colors.SEMANTIC_COLORS.success60,
  euiColorVisAsTextDark6: _semantic_colors.SEMANTIC_COLORS.assistance60,
  euiColorVisSuccess0: _semantic_colors.SEMANTIC_COLORS.success60,
  euiColorVisSuccess1: _semantic_colors.SEMANTIC_COLORS.success30,
  euiColorVisWarning0: _semantic_colors.SEMANTIC_COLORS.warning30,
  euiColorVisDanger0: _semantic_colors.SEMANTIC_COLORS.danger60,
  euiColorVisDanger1: _semantic_colors.SEMANTIC_COLORS.danger30,
  euiColorVisNeutral0: _primitive_colors.PRIMITIVE_COLORS.mutedGrey10,
  euiColorVisGrey0: _primitive_colors.PRIMITIVE_COLORS.blueGrey30,
  euiColorVisGrey1: _primitive_colors.PRIMITIVE_COLORS.blueGrey60,
  euiColorVisGrey2: _primitive_colors.PRIMITIVE_COLORS.blueGrey90,
  euiColorVisGrey3: _primitive_colors.PRIMITIVE_COLORS.blueGrey130,
  euiColorVisWarm0: _semantic_colors.SEMANTIC_COLORS.danger10,
  euiColorVisWarm1: _semantic_colors.SEMANTIC_COLORS.danger40,
  euiColorVisWarm2: _semantic_colors.SEMANTIC_COLORS.danger60,
  euiColorVisCool0: _semantic_colors.SEMANTIC_COLORS.primary10,
  euiColorVisCool1: _semantic_colors.SEMANTIC_COLORS.primary40,
  euiColorVisCool2: _semantic_colors.SEMANTIC_COLORS.primary60,
  euiColorVisComplementary0: _semantic_colors.SEMANTIC_COLORS.primary60,
  euiColorVisComplementary1: _semantic_colors.SEMANTIC_COLORS.warning60
};
//# sourceMappingURL=_colors_vis.js.map