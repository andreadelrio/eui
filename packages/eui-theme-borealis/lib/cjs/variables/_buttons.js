"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttons = void 0;
var _semantic_colors = require("./colors/_semantic_colors");
var _colors_light = require("./colors/_colors_light");
var _colors_dark = require("./colors/_colors_dark");
/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

var _buttons = {
  backgroundPrimary: _colors_light.background_colors.backgroundLightPrimary,
  backgroundAccent: _colors_light.background_colors.backgroundLightAccent,
  backgroundAccentSecondary: _colors_light.background_colors.backgroundLightAccentSecondary,
  backgroundSuccess: _colors_light.background_colors.backgroundLightSuccess,
  backgroundWarning: _colors_light.background_colors.backgroundLightWarning,
  backgroundDanger: _colors_light.background_colors.backgroundLightDanger,
  backgroundText: _colors_light.background_colors.backgroundLightText,
  backgroundDisabled: _colors_light.background_colors.backgroundBaseDisabled,
  backgroundFilledPrimary: _colors_light.background_colors.backgroundFilledPrimary,
  backgroundFilledAccent: _colors_light.background_colors.backgroundFilledAccent,
  backgroundFilledAccentSecondary: _colors_light.background_colors.backgroundFilledAccentSecondary,
  backgroundFilledSuccess: _colors_light.background_colors.backgroundFilledSuccess,
  backgroundFilledWarning: _colors_light.background_colors.backgroundFilledWarning,
  backgroundFilledDanger: _colors_light.background_colors.backgroundFilledDanger,
  backgroundFilledText: _colors_light.background_colors.backgroundFilledText,
  backgroundFilledDisabled: _colors_light.background_colors.backgroundBaseDisabled,
  // Temp. mapping to support more variants in old theme
  backgroundEmptyPrimaryHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyAccentHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyAccentSecondaryHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptySuccessHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyWarningHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyDangerHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyTextHover: _colors_light.background_colors.backgroundBaseInteractiveHover,
  textColorPrimary: _colors_light.brand_text_colors.textPrimary,
  textColorAccent: _colors_light.brand_text_colors.textAccent,
  textColorAccentSecondary: _colors_light.brand_text_colors.textAccentSecondary,
  textColorSuccess: _colors_light.brand_text_colors.textSuccess,
  textColorWarning: _colors_light.brand_text_colors.textWarning,
  textColorDanger: _colors_light.brand_text_colors.textDanger,
  textColorText: _colors_light.text_colors.textParagraph,
  textColorDisabled: _colors_light.text_colors.textDisabled,
  textColorFilledPrimary: _colors_light.text_colors.textInverse,
  textColorFilledAccent: _colors_light.text_colors.textInverse,
  textColorFilledAccentSecondary: _colors_light.text_colors.textInverse,
  textColorFilledSuccess: _colors_light.text_colors.textInverse,
  textColorFilledWarning: _semantic_colors.SEMANTIC_COLORS.warning110,
  textColorFilledDanger: _colors_light.text_colors.textInverse,
  textColorFilledText: _colors_light.text_colors.textInverse,
  textColorFilledDisabled: _colors_light.text_colors.textDisabled
};
var _dark_buttons = {
  backgroundPrimary: _colors_dark.dark_background_colors.backgroundLightPrimary,
  backgroundAccent: _colors_dark.dark_background_colors.backgroundLightAccent,
  backgroundAccentSecondary: _colors_dark.dark_background_colors.backgroundLightAccentSecondary,
  backgroundSuccess: _colors_dark.dark_background_colors.backgroundLightSuccess,
  backgroundWarning: _colors_dark.dark_background_colors.backgroundLightWarning,
  backgroundDanger: _colors_dark.dark_background_colors.backgroundLightDanger,
  backgroundText: _colors_dark.dark_background_colors.backgroundLightText,
  backgroundDisabled: _colors_dark.dark_background_colors.backgroundBaseDisabled,
  backgroundFilledPrimary: _colors_dark.dark_background_colors.backgroundFilledPrimary,
  backgroundFilledAccent: _colors_dark.dark_background_colors.backgroundFilledAccent,
  backgroundFilledAccentSecondary: _colors_dark.dark_background_colors.backgroundFilledAccentSecondary,
  backgroundFilledSuccess: _colors_dark.dark_background_colors.backgroundFilledSuccess,
  backgroundFilledWarning: _colors_dark.dark_background_colors.backgroundFilledWarning,
  backgroundFilledDanger: _colors_dark.dark_background_colors.backgroundFilledDanger,
  backgroundFilledText: _colors_dark.dark_background_colors.backgroundFilledText,
  backgroundFilledDisabled: _colors_dark.dark_background_colors.backgroundBaseDisabled,
  backgroundEmptyPrimaryHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyAccentHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyAccentSecondaryHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptySuccessHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyWarningHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyDangerHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  backgroundEmptyTextHover: _colors_dark.dark_background_colors.backgroundBaseInteractiveHover,
  textColorPrimary: _colors_dark.dark_brand_text_colors.textPrimary,
  textColorAccent: _colors_dark.dark_brand_text_colors.textAccent,
  textColorAccentSecondary: _colors_dark.dark_brand_text_colors.textAccentSecondary,
  textColorSuccess: _colors_dark.dark_brand_text_colors.textSuccess,
  textColorWarning: _colors_dark.dark_brand_text_colors.textWarning,
  textColorDanger: _colors_dark.dark_brand_text_colors.textDanger,
  textColorText: _colors_dark.dark_text_colors.textParagraph,
  textColorDisabled: _colors_dark.dark_text_colors.textDisabled,
  textColorFilledPrimary: _colors_dark.dark_text_colors.textInverse,
  textColorFilledAccent: _colors_dark.dark_text_colors.textInverse,
  textColorFilledAccentSecondary: _colors_dark.dark_text_colors.textInverse,
  textColorFilledSuccess: _colors_dark.dark_text_colors.textInverse,
  textColorFilledWarning: _semantic_colors.SEMANTIC_COLORS.warning110,
  textColorFilledDanger: _colors_dark.dark_text_colors.textInverse,
  textColorFilledText: _colors_dark.dark_text_colors.textInverse,
  textColorFilledDisabled: _colors_dark.dark_text_colors.textDisabled
};
var buttons = exports.buttons = {
  LIGHT: _buttons,
  DARK: _dark_buttons
};
//# sourceMappingURL=_buttons.js.map