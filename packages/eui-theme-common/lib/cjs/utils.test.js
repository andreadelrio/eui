"use strict";

var _utils = require("./utils");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */
describe('isInverseColorMode', function () {
  it("true only if 'inverse'", function () {
    expect((0, _utils.isInverseColorMode)('LIGHT')).toBe(false);
    expect((0, _utils.isInverseColorMode)('DARK')).toBe(false);
    expect((0, _utils.isInverseColorMode)('custom')).toBe(false);
    expect((0, _utils.isInverseColorMode)()).toBe(false);
    expect((0, _utils.isInverseColorMode)('INVERSE')).toBe(true);
  });
});
describe('getColorMode', function () {
  it("defaults to 'LIGHT'", function () {
    expect((0, _utils.getColorMode)()).toEqual('LIGHT');
  });
  it('uses `parentMode` as fallback', function () {
    expect((0, _utils.getColorMode)(undefined, 'DARK')).toEqual('DARK');
  });
  it("understands 'INVERSE'", function () {
    expect((0, _utils.getColorMode)('INVERSE', 'DARK')).toEqual('LIGHT');
    expect((0, _utils.getColorMode)('INVERSE', 'LIGHT')).toEqual('DARK');
    expect((0, _utils.getColorMode)('INVERSE')).toEqual('LIGHT');
  });
});
describe('getOn', function () {
  var obj = {
    parent: {
      child: 'childVal'
    },
    other: {
      thing: {
        string: 'stringVal',
        nested: ['array'],
        number: 0,
        func: function func() {}
      }
    },
    colors: {
      LIGHT: {
        primary: '#000'
      },
      DARK: {
        primary: '#FFF'
      }
    }
  };
  it('gets values at the given path', function () {
    expect((0, _utils.getOn)(obj, 'parent')).toEqual({
      child: 'childVal'
    });
    expect((0, _utils.getOn)(obj, 'parent.child')).toEqual('childVal');
    expect((0, _utils.getOn)(obj, 'other.thing.string')).toEqual('stringVal');
  });
  it('gets values of various kinds', function () {
    expect((0, _utils.getOn)(obj, 'other.thing.nested')).toEqual(['array']);
    expect((0, _utils.getOn)(obj, 'other.thing.number')).toEqual(0);
    expect((0, _utils.getOn)(obj, 'other.thing.func')).toBeInstanceOf(Function);
  });
  it('can shortcut color modes', function () {
    expect((0, _utils.getOn)(obj, 'colors.primary', 'LIGHT')).toEqual('#000');
    expect((0, _utils.getOn)(obj, 'colors.primary', 'DARK')).toEqual('#FFF');
  });
  it('will not error', function () {
    expect((0, _utils.getOn)(obj, 'nope')).toBe(undefined);
    expect((0, _utils.getOn)(obj, 'other.nope')).toBe(undefined);
    expect((0, _utils.getOn)(obj, 'other.thing.nope')).toBe(undefined);
  });
});
describe('setOn', function () {
  var obj;
  beforeEach(function () {
    obj = {
      existing: {
        nested: {
          val: 'value'
        }
      }
    };
  });
  it('sets values at the given path', function () {
    (0, _utils.setOn)(obj, 'existing.new', 'value');
    expect(obj).toEqual({
      existing: {
        nested: {
          val: 'value'
        },
        "new": 'value'
      }
    });
    (0, _utils.setOn)(obj, 'existing.nested.new', 'value');
    expect(obj).toEqual({
      existing: {
        nested: {
          val: 'value',
          "new": 'value'
        },
        "new": 'value'
      }
    });
  });
  it('deep arbitrary creation', function () {
    (0, _utils.setOn)(obj, 'trail.blazing.happening.now', 'wow');
    expect(obj).toEqual({
      existing: {
        nested: {
          val: 'value'
        }
      },
      trail: {
        blazing: {
          happening: {
            now: 'wow'
          }
        }
      }
    });
  });
  it('overrides existing path value', function () {
    (0, _utils.setOn)(obj, 'existing.nested', 'diff');
    expect(obj).toEqual({
      existing: {
        nested: 'diff'
      }
    });
  });
});
describe('computed', function () {
  it('should transform to Computed with dependencies array', function () {
    var output = (0, _utils.computed)(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        path = _ref2[0];
      return path;
    }, ['path.to']);
    expect(output).toBeInstanceOf(_utils.Computed);
    expect(output.computer).toBeInstanceOf(Function);
    expect(output.dependencies).toEqual(['path.to']);
  });
  it('should transform to Computed with single dependency', function () {
    var output = (0, _utils.computed)(function (path) {
      return path;
    }, 'path.to');
    expect(output).toBeInstanceOf(_utils.Computed);
    expect(output.computer).toBeInstanceOf(Function);
    expect(output.dependencies).toEqual('path.to');
  });
  it('should transform to Computed without dependencies array', function () {
    var output = (0, _utils.computed)(function (path) {
      return path;
    });
    expect(output).toBeInstanceOf(_utils.Computed);
  });
});
var theme = (0, _utils.buildTheme)({
  colors: {
    LIGHT: {
      primary: '#000',
      secondary: (0, _utils.computed)(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          primary = _ref4[0];
        return "".concat(primary, "000");
      }, ['colors.primary'])
    },
    DARK: {
      primary: '#FFF',
      secondary: (0, _utils.computed)(function (theme) {
        return "".concat(theme.colors.primary, "FFF");
      })
    }
  },
  sizes: {
    small: 8
  }
}, 'minimal');
describe('getComputed', function () {
  it('computes all values and returns only the current color mode', function () {
    // @ts-expect-error intentionally not using a full EUI theme definition
    expect((0, _utils.getComputed)(theme, {}, 'LIGHT')).toEqual({
      colors: {
        primary: '#000',
        secondary: '#000000'
      },
      sizes: {
        small: 8
      },
      themeName: 'minimal'
    });
    // @ts-expect-error intentionally not using a full EUI theme definition
    expect((0, _utils.getComputed)(theme, {}, 'DARK')).toEqual({
      colors: {
        primary: '#FFF',
        secondary: '#FFFFFF'
      },
      sizes: {
        small: 8
      },
      themeName: 'minimal'
    });
  });
  it('respects simple overrides', function () {
    expect(
    // @ts-expect-error intentionally not using a full EUI theme definition
    (0, _utils.getComputed)(theme, (0, _utils.buildTheme)({
      sizes: {
        small: 4
      }
    }, ''), 'LIGHT')).toEqual({
      colors: {
        primary: '#000',
        secondary: '#000000'
      },
      sizes: {
        small: 4
      },
      themeName: 'minimal'
    });
  });
  it('respects overrides in computation', function () {
    expect((0, _utils.getComputed)(
    // @ts-expect-error intentionally not using a full EUI theme definition
    theme, (0, _utils.buildTheme)({
      colors: {
        LIGHT: {
          primary: '#CCC'
        }
      }
    }, ''), 'LIGHT')).toEqual({
      colors: {
        primary: '#CCC',
        secondary: '#CCC000'
      },
      sizes: {
        small: 8
      },
      themeName: 'minimal'
    });
  });
  it('respects property extensions', function () {
    expect((0, _utils.getComputed)(
    // @ts-expect-error intentionally not using a full EUI theme definition
    theme, (0, _utils.buildTheme)({
      colors: {
        LIGHT: {
          tertiary: '#333'
        }
      }
    }, ''), 'LIGHT')).toEqual({
      colors: {
        primary: '#000',
        secondary: '#000000',
        tertiary: '#333'
      },
      sizes: {
        small: 8
      },
      themeName: 'minimal'
    });
  });
  it('respects section extensions', function () {
    expect((0, _utils.getComputed)(
    // @ts-expect-error intentionally not using a full EUI theme definition
    theme, (0, _utils.buildTheme)({
      custom: {
        myProp: '#333'
      }
    }, ''), 'LIGHT')).toEqual({
      colors: {
        primary: '#000',
        secondary: '#000000'
      },
      sizes: {
        small: 8
      },
      custom: {
        myProp: '#333'
      },
      themeName: 'minimal'
    });
  });
  it('respects extensions in computation', function () {
    expect((0, _utils.getComputed)(
    // @ts-expect-error intentionally not using a full EUI theme definition
    theme, (0, _utils.buildTheme)({
      colors: {
        LIGHT: {
          tertiary: (0, _utils.computed)(function (_ref5) {
            var _ref6 = _slicedToArray(_ref5, 1),
              primary = _ref6[0];
            return "".concat(primary, "333");
          }, ['colors.primary'])
        }
      }
    }, ''), 'LIGHT')).toEqual({
      colors: {
        primary: '#000',
        secondary: '#000000',
        tertiary: '#000333'
      },
      sizes: {
        small: 8
      },
      themeName: 'minimal'
    });
  });
});
describe('buildTheme', function () {
  it('builds an EUI theme system', function () {
    // TypeError: 'getOwnPropertyDescriptor' on proxy: trap reported non-configurability for property 'length' which is either non-existant or configurable in the proxy target
    // expect(theme).toEqual(Proxy); // get() trap returns theme.model
    // expect(theme.root).toEqual(Proxy);
    expect(theme.key).toEqual('minimal');
  });
});
describe('mergeDeep', function () {
  it('merge simple objects, second into first', function () {
    expect((0, _utils.mergeDeep)({
      a: 1
    }, {
      b: 2
    })).toEqual({
      a: 1,
      b: 2
    });
    expect((0, _utils.mergeDeep)({
      a: 1
    }, {
      a: 2
    })).toEqual({
      a: 2
    });
  });
  it('merge complex objects, second into first', function () {
    expect((0, _utils.mergeDeep)({
      a: 1,
      b: {
        c: {
          d: 3
        }
      }
    }, {
      b: {
        c: {
          d: 4
        }
      }
    })).toEqual({
      a: 1,
      b: {
        c: {
          d: 4
        }
      }
    });
    expect((0, _utils.mergeDeep)({
      a: 1,
      b: {
        c: {
          d: 3
        }
      }
    }, {
      b: {
        c: {
          e: 5
        }
      }
    })).toEqual({
      a: 1,
      b: {
        c: {
          d: 3,
          e: 5
        }
      }
    });
  });
});
describe('getTokenName', function () {
  it('returns the correct token name', function () {
    expect((0, _utils.getTokenName)('backgroundBase', 'primary')).toEqual('backgroundBasePrimary');
    expect((0, _utils.getTokenName)('backgroundBase', 'primary', 'hovered')).toEqual('backgroundBasePrimaryHovered');
  });
});
//# sourceMappingURL=utils.test.js.map