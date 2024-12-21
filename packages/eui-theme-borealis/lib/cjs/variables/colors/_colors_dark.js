"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark_transparent_background_colors = exports.dark_text_colors = exports.dark_special_colors = exports.dark_shades = exports.dark_colors = exports.dark_brand_text_colors = exports.dark_brand_colors = exports.dark_border_colors = exports.dark_background_colors = void 0;
var _primitive_colors = require("./_primitive_colors");
var _semantic_colors = require("./_semantic_colors");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
/*
 * DARK THEME
 */

var dark_brand_colors = exports.dark_brand_colors = {
  primary: _semantic_colors.SEMANTIC_COLORS.primary70,
  accent: _semantic_colors.SEMANTIC_COLORS.accent70,
  accentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary70,
  success: _semantic_colors.SEMANTIC_COLORS.success60,
  warning: _semantic_colors.SEMANTIC_COLORS.warning40,
  danger: _semantic_colors.SEMANTIC_COLORS.danger70
};
var dark_brand_text_colors = exports.dark_brand_text_colors = {
  /* Legacy colors */
  primaryText: _semantic_colors.SEMANTIC_COLORS.primary60,
  accentText: _semantic_colors.SEMANTIC_COLORS.accent60,
  successText: _semantic_colors.SEMANTIC_COLORS.success60,
  warningText: _semantic_colors.SEMANTIC_COLORS.warning30,
  dangerText: _semantic_colors.SEMANTIC_COLORS.danger60,
  /* New colors */
  textPrimary: _semantic_colors.SEMANTIC_COLORS.primary60,
  textAccent: _semantic_colors.SEMANTIC_COLORS.accent60,
  textAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary60,
  textSuccess: _semantic_colors.SEMANTIC_COLORS.success60,
  textWarning: _semantic_colors.SEMANTIC_COLORS.warning30,
  textDanger: _semantic_colors.SEMANTIC_COLORS.danger60
};
var dark_text_colors = exports.dark_text_colors = {
  /* Legacy colors */
  text: _semantic_colors.SEMANTIC_COLORS.shade20,
  title: _semantic_colors.SEMANTIC_COLORS.shade15,
  subduedText: _semantic_colors.SEMANTIC_COLORS.shade60,
  link: _semantic_colors.SEMANTIC_COLORS.primary60,
  /* New colors */
  textParagraph: _semantic_colors.SEMANTIC_COLORS.shade20,
  textHeading: _semantic_colors.SEMANTIC_COLORS.shade15,
  textSubdued: _semantic_colors.SEMANTIC_COLORS.shade60,
  textDisabled: _semantic_colors.SEMANTIC_COLORS.shade80,
  textInverse: _semantic_colors.SEMANTIC_COLORS.plainDark
};
var dark_shades = exports.dark_shades = {
  emptyShade: _semantic_colors.SEMANTIC_COLORS.shade145,
  lightestShade: _semantic_colors.SEMANTIC_COLORS.shade135,
  lightShade: _semantic_colors.SEMANTIC_COLORS.shade125,
  mediumShade: _semantic_colors.SEMANTIC_COLORS.shade95,
  darkShade: _semantic_colors.SEMANTIC_COLORS.shade75,
  darkestShade: _semantic_colors.SEMANTIC_COLORS.shade30,
  fullShade: _semantic_colors.SEMANTIC_COLORS.plainLight
};
var dark_background_colors = exports.dark_background_colors = {
  backgroundBasePrimary: _semantic_colors.SEMANTIC_COLORS.primary140,
  backgroundBaseAccent: _semantic_colors.SEMANTIC_COLORS.accent140,
  backgroundBaseAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary140,
  backgroundBaseSuccess: _semantic_colors.SEMANTIC_COLORS.success140,
  backgroundBaseWarning: _semantic_colors.SEMANTIC_COLORS.warning140,
  backgroundBaseDanger: _semantic_colors.SEMANTIC_COLORS.danger140,
  backgroundBaseSubdued: _semantic_colors.SEMANTIC_COLORS.plainDark,
  backgroundBasePlain: _semantic_colors.SEMANTIC_COLORS.shade145,
  backgroundBaseDisabled: _semantic_colors.SEMANTIC_COLORS.shade130,
  backgroundBaseFormsPrepend: _semantic_colors.SEMANTIC_COLORS.shade125,
  backgroundBaseFormsControlDisabled: _semantic_colors.SEMANTIC_COLORS.shade120,
  backgroundBaseInteractiveHover: _primitive_colors.PRIMITIVE_COLORS.transparent.white10,
  backgroundBaseInteractiveSelect: _semantic_colors.SEMANTIC_COLORS.shade125,
  backgroundBaseInteractiveOverlay: _semantic_colors.SEMANTIC_COLORS.shadeTransparent80,
  backgroundBaseSkeletonEdge: _primitive_colors.PRIMITIVE_COLORS.transparent.white30,
  backgroundBaseSkeletonMiddle: _primitive_colors.PRIMITIVE_COLORS.transparent.white10,
  backgroundLightPrimary: _semantic_colors.SEMANTIC_COLORS.primary130,
  backgroundLightAccent: _semantic_colors.SEMANTIC_COLORS.accent130,
  backgroundLightAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary130,
  backgroundLightSuccess: _semantic_colors.SEMANTIC_COLORS.success130,
  backgroundLightWarning: _semantic_colors.SEMANTIC_COLORS.warning130,
  backgroundLightDanger: _semantic_colors.SEMANTIC_COLORS.danger130,
  backgroundLightText: _semantic_colors.SEMANTIC_COLORS.shade130,
  backgroundFilledPrimary: _semantic_colors.SEMANTIC_COLORS.primary60,
  backgroundFilledAccent: _semantic_colors.SEMANTIC_COLORS.accent60,
  backgroundFilledAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary60,
  backgroundFilledSuccess: _semantic_colors.SEMANTIC_COLORS.success60,
  backgroundFilledWarning: _semantic_colors.SEMANTIC_COLORS.warning40,
  backgroundFilledDanger: _semantic_colors.SEMANTIC_COLORS.danger60,
  backgroundFilledText: _semantic_colors.SEMANTIC_COLORS.shade60
};

/**
 * NOTE: temp values for migration - these should not be used,
 * use backgroundBase tokens instead
 * TODO: remove once obsolete
 */
var dark_transparent_background_colors = exports.dark_transparent_background_colors = {
  backgroundTransparent: _primitive_colors.PRIMITIVE_COLORS.transparent.white0,
  backgroundTransparentPrimary: dark_background_colors.backgroundBasePrimary,
  backgroundTransparentAccent: dark_background_colors.backgroundBaseAccent,
  backgroundTransparentAccentSecondary: dark_background_colors.backgroundBaseAccent,
  backgroundTransparentSuccess: dark_background_colors.backgroundBaseSuccess,
  backgroundTransparentWarning: dark_background_colors.backgroundBaseWarning,
  backgroundTransparentDanger: dark_background_colors.backgroundBaseDanger,
  backgroundTransparentSubdued: dark_background_colors.backgroundBaseSubdued,
  backgroundTransparentPlain: dark_background_colors.backgroundBasePlain
};
var dark_border_colors = exports.dark_border_colors = {
  borderBasePrimary: _semantic_colors.SEMANTIC_COLORS.primary120,
  borderBaseAccent: _semantic_colors.SEMANTIC_COLORS.accent120,
  borderBaseAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary120,
  borderBaseSuccess: _semantic_colors.SEMANTIC_COLORS.success120,
  borderBaseWarning: _semantic_colors.SEMANTIC_COLORS.warning120,
  borderBaseDanger: _semantic_colors.SEMANTIC_COLORS.danger120,
  borderBasePlain: _semantic_colors.SEMANTIC_COLORS.shade100,
  borderBaseSubdued: _semantic_colors.SEMANTIC_COLORS.shade120,
  borderBaseDisabled: _semantic_colors.SEMANTIC_COLORS.shade100,
  borderBaseFloating: _semantic_colors.SEMANTIC_COLORS.shade120,
  borderBaseFormsColorSwatch: _primitive_colors.PRIMITIVE_COLORS.transparent.white30,
  borderBaseFormsControl: _semantic_colors.SEMANTIC_COLORS.shade80,
  borderStrongPrimary: _semantic_colors.SEMANTIC_COLORS.primary60,
  borderStrongAccent: _semantic_colors.SEMANTIC_COLORS.accent60,
  borderStrongAccentSecondary: _semantic_colors.SEMANTIC_COLORS.accentSecondary60,
  borderStrongSuccess: _semantic_colors.SEMANTIC_COLORS.success60,
  borderStrongWarning: _semantic_colors.SEMANTIC_COLORS.warning40,
  borderStrongDanger: _semantic_colors.SEMANTIC_COLORS.danger60
};
var dark_special_colors = exports.dark_special_colors = {
  body: _semantic_colors.SEMANTIC_COLORS.plainDark,
  highlight: _semantic_colors.SEMANTIC_COLORS.primary100,
  disabled: _semantic_colors.SEMANTIC_COLORS.shade130,
  disabledText: _semantic_colors.SEMANTIC_COLORS.shade80,
  shadow: _primitive_colors.PRIMITIVE_COLORS.black
};
var dark_colors = exports.dark_colors = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _semantic_colors.SEMANTIC_COLORS), dark_brand_colors), dark_shades), dark_special_colors), dark_brand_text_colors), dark_text_colors), dark_background_colors), dark_transparent_background_colors), dark_border_colors);
//# sourceMappingURL=_colors_dark.js.map