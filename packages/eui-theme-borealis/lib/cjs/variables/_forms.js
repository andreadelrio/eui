"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forms = void 0;
var _colors_dark = require("./colors/_colors_dark");
var _colors_light = require("./colors/_colors_light");
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
var _forms = {
  background: _colors_light.background_colors.backgroundBasePlain,
  backgroundDisabled: _colors_light.background_colors.backgroundBaseDisabled,
  backgroundReadOnly: _colors_light.background_colors.backgroundBasePlain,
  backgroundFocused: _colors_light.background_colors.backgroundBasePlain,
  backgroundAutofilled: _colors_light.background_colors.backgroundBasePrimary,
  prependBackground: _colors_light.background_colors.backgroundBaseFormsPrepend,
  border: _colors_light.border_colors.borderBasePlain,
  borderDisabled: _colors_light.border_colors.borderBaseDisabled,
  borderAutofilled: _colors_light.border_colors.borderBasePrimary,
  controlBorder: _colors_light.border_colors.borderBaseFormsControl,
  controlBorderSelected: _colors_light.border_colors.borderStrongPrimary,
  controlBorderDisabled: _colors_light.border_colors.borderBaseDisabled,
  controlBackgroundUnselected: 'transparent',
  controlBackgroundDisabled: _colors_light.background_colors.backgroundBaseFormsControlDisabled,
  colorHasPlaceholder: _colors_light.text_colors.textSubdued,
  colorDisabled: _colors_light.text_colors.textDisabled,
  iconDisabled: _colors_light.text_colors.textDisabled
};
var _dark_forms = _objectSpread(_objectSpread({}, _forms), {}, {
  background: _colors_dark.dark_background_colors.backgroundBasePlain,
  backgroundDisabled: _colors_dark.dark_background_colors.backgroundBaseDisabled,
  backgroundReadOnly: _colors_dark.dark_background_colors.backgroundBasePlain,
  backgroundFocused: _colors_dark.dark_background_colors.backgroundBasePlain,
  backgroundAutofilled: _colors_dark.dark_background_colors.backgroundBasePrimary,
  prependBackground: _colors_dark.dark_background_colors.backgroundBaseFormsPrepend,
  border: _colors_dark.dark_border_colors.borderBasePlain,
  borderDisabled: _colors_dark.dark_border_colors.borderBaseDisabled,
  borderAutofilled: _colors_dark.dark_border_colors.borderBasePrimary,
  controlBorder: _colors_dark.dark_border_colors.borderBaseFormsControl,
  controlBorderSelected: _colors_dark.dark_border_colors.borderStrongPrimary,
  controlBorderDisabled: _colors_dark.dark_border_colors.borderBaseDisabled,
  controlBackgroundUnselected: 'transparent',
  controlBackgroundDisabled: _colors_dark.dark_background_colors.backgroundBaseFormsControlDisabled,
  colorHasPlaceholder: _colors_dark.dark_text_colors.textSubdued,
  colorDisabled: _colors_dark.dark_text_colors.textDisabled,
  iconDisabled: _colors_dark.dark_text_colors.textDisabled
});
var forms = exports.forms = {
  LIGHT: _forms,
  DARK: _dark_forms
};
//# sourceMappingURL=_forms.js.map