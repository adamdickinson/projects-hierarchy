module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+ApW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _isInBrowser = __webpack_require__("QDke");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__("78jo");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__("teOa");

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__("xBPe");

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__("pePJ");

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__("QJHX");

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__("iE6D");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__("GcxN");

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__("WcDi");

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__("XxCd");

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__("NxHG");

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.8.0";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])();

    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName;

        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      }

      if (options.plugins) this.use.apply(this, options.plugins);

      return this;
    }

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);

      return sheet;
    }

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);

      return rule;
    }

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);
          _this.plugins.use(plugin);
        }
      });

      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),

/***/ "+FOY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SvgIcon = __webpack_require__("vWq+");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SvgIcon).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/***/ }),

/***/ "+HdU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__("e7NH");

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__("rmh+");

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__("eJdH");

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__("eOdm");

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__("ciB6");

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__("iE6D");

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__("GcxN");

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__("+ApW");

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

exports['default'] = create();

/***/ }),

/***/ "+bWy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__("yEjJ");

var arrayProto = Array.prototype;

var splice = arrayProto.splice;

function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "/wuY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__("NB7d")('keys');
var uid = __webpack_require__("X6va");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),

/***/ "0J1o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var overArg = __webpack_require__("4/4o");

var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "0O3Z":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "0WCH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),

/***/ "0kgT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;

function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "0pJf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__("MIhM");

var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "11Ut":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__("Gfzd").f;
var has = __webpack_require__("yS17");
var TAG = __webpack_require__("Ug9I")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),

/***/ "1RxS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__("FTXF");

function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "1iuS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__("pKN0");

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),

/***/ "1kq3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),

/***/ "1qpN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var coreJsData = __webpack_require__("q3B8");

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "1yXR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var generatorCounter = 0;

function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === undefined ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === undefined ? 'jss' : _options$productionPr;

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var ruleCounter = 0;

  if ("production" === 'production' && typeof window !== 'undefined' && productionPrefix === 'jss') {
    generatorCounter += 1;

    if (generatorCounter > 2) {
      console.error(['Material-UI: we have detected more than needed creation of the class name generator.', 'You should only use one class name generator on the client side.', 'If you do otherwise, you take the risk to have conflicting class names in production.'].join('\n'));
    }
  }

  return function (rule, styleSheet) {
    ruleCounter += 1;
     false ? (0, _warning2.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0;

    if (dangerouslyUseGlobalCSS) {
      if (styleSheet && styleSheet.options.classNamePrefix) {
        var prefix = styleSheet.options.classNamePrefix;

        prefix = prefix.replace(escapeRegex, '-');

        if (prefix.match(/^Mui/)) {
          return prefix + '-' + rule.key;
        }

        if (false) {
          return prefix + '-' + rule.key + '-' + ruleCounter;
        }
      }

      if (true) {
        return '' + productionPrefix + ruleCounter;
      }

      return rule.key + '-' + ruleCounter;
    }

    if (true) {
      return '' + productionPrefix + ruleCounter;
    }

    if (styleSheet && styleSheet.options.classNamePrefix) {
      var _prefix = styleSheet.options.classNamePrefix;

      _prefix = _prefix.replace(escapeRegex, '-');

      return _prefix + '-' + rule.key + '-' + ruleCounter;
    }

    return rule.key + '-' + ruleCounter;
  };
}

/***/ }),

/***/ "2Axb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoize = __webpack_require__("EiMJ");

var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "2DKW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
    ( false ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : global.hoistNonReactStatics = factory();
})(undefined, function () {
    'use strict';

    var REACT_STATICS = {
        childContextTypes: true,
        contextTypes: true,
        defaultProps: true,
        displayName: true,
        getDefaultProps: true,
        getDerivedStateFromProps: true,
        mixins: true,
        propTypes: true,
        type: true
    };

    var KNOWN_STATICS = {
        name: true,
        length: true,
        prototype: true,
        caller: true,
        callee: true,
        arguments: true,
        arity: true
    };

    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

    return function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
        if (typeof sourceComponent !== 'string') {

            if (objectPrototype) {
                var inheritedComponent = getPrototypeOf(sourceComponent);
                if (inheritedComponent && inheritedComponent !== objectPrototype) {
                    hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
                }
            }

            var keys = getOwnPropertyNames(sourceComponent);

            if (getOwnPropertySymbols) {
                keys = keys.concat(getOwnPropertySymbols(sourceComponent));
            }

            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                    var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                    try {
                        defineProperty(targetComponent, key, descriptor);
                    } catch (e) {}
                }
            }

            return targetComponent;
        }

        return targetComponent;
    };
});

/***/ }),

/***/ "2L2L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__("e5TX"),
    isLength = __webpack_require__("GmNU"),
    isObjectLike = __webpack_require__("OuyB");

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "2SH0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__("x6MZ")('Map') });

/***/ }),

/***/ "2ibm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = __webpack_require__("p/0c"),
    isSymbol = __webpack_require__("bgO7");

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "2mwf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("c2zY")('observable');

/***/ }),

/***/ "32ty":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    } });
};

/***/ }),

/***/ "393P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__("QDke");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var js = '';

var css = '';

if (_isInBrowser2['default']) {
  var jsCssMap = {
    Moz: '-moz-',

    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

exports['default'] = { js: js, css: css };

/***/ }),

/***/ "3Lw+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};

exports.default = zIndex;

/***/ }),

/***/ "3Q8v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseHasIn = __webpack_require__("Gsi0"),
    hasPath = __webpack_require__("E1jM");

function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),

/***/ "3tMo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : result + current;
    }
  }
  return result;
}

module.exports = baseSum;

/***/ }),

/***/ "3til":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsArguments = __webpack_require__("pK4Y"),
    isObjectLike = __webpack_require__("OuyB");

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

var propertyIsEnumerable = objectProto.propertyIsEnumerable;

var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "3v7p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("htFH");
var $Object = __webpack_require__("zKeE").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),

/***/ "3w4y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__("wppe"),
    arrayMap = __webpack_require__("BblM"),
    isArray = __webpack_require__("p/0c"),
    isSymbol = __webpack_require__("bgO7");

var INFINITY = 1 / 0;

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

function baseToString(value) {
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "3zRh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__("g31e");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),

/***/ "4/4o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "41+b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "49I8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__("Xk23"),
    stackClear = __webpack_require__("4y4D"),
    stackDelete = __webpack_require__("TpjK"),
    stackGet = __webpack_require__("skbs"),
    stackHas = __webpack_require__("9ocJ"),
    stackSet = __webpack_require__("fwYF");

function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "4E2n":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
	if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["esprima"] = factory();else root["esprima"] = factory();
})(undefined, function () {
	return function (modules) {
		var installedModules = {};

		function __webpack_require__(moduleId) {
			if (installedModules[moduleId]) return installedModules[moduleId].exports;

			var module = installedModules[moduleId] = { exports: {},
				id: moduleId,
				loaded: false
			};

			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

			module.loaded = true;

			return module.exports;
		}

		__webpack_require__.m = modules;

		__webpack_require__.c = installedModules;

		__webpack_require__.p = "";

		return __webpack_require__(0);
	}([function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var comment_handler_1 = __webpack_require__(1);
		var jsx_parser_1 = __webpack_require__(3);
		var parser_1 = __webpack_require__(8);
		var tokenizer_1 = __webpack_require__(15);
		function parse(code, options, delegate) {
			var commentHandler = null;
			var proxyDelegate = function proxyDelegate(node, metadata) {
				if (delegate) {
					delegate(node, metadata);
				}
				if (commentHandler) {
					commentHandler.visit(node, metadata);
				}
			};
			var parserDelegate = typeof delegate === 'function' ? proxyDelegate : null;
			var collectComment = false;
			if (options) {
				collectComment = typeof options.comment === 'boolean' && options.comment;
				var attachComment = typeof options.attachComment === 'boolean' && options.attachComment;
				if (collectComment || attachComment) {
					commentHandler = new comment_handler_1.CommentHandler();
					commentHandler.attach = attachComment;
					options.comment = true;
					parserDelegate = proxyDelegate;
				}
			}
			var isModule = false;
			if (options && typeof options.sourceType === 'string') {
				isModule = options.sourceType === 'module';
			}
			var parser;
			if (options && typeof options.jsx === 'boolean' && options.jsx) {
				parser = new jsx_parser_1.JSXParser(code, options, parserDelegate);
			} else {
				parser = new parser_1.Parser(code, options, parserDelegate);
			}
			var program = isModule ? parser.parseModule() : parser.parseScript();
			var ast = program;
			if (collectComment && commentHandler) {
				ast.comments = commentHandler.comments;
			}
			if (parser.config.tokens) {
				ast.tokens = parser.tokens;
			}
			if (parser.config.tolerant) {
				ast.errors = parser.errorHandler.errors;
			}
			return ast;
		}
		exports.parse = parse;
		function parseModule(code, options, delegate) {
			var parsingOptions = options || {};
			parsingOptions.sourceType = 'module';
			return parse(code, parsingOptions, delegate);
		}
		exports.parseModule = parseModule;
		function parseScript(code, options, delegate) {
			var parsingOptions = options || {};
			parsingOptions.sourceType = 'script';
			return parse(code, parsingOptions, delegate);
		}
		exports.parseScript = parseScript;
		function tokenize(code, options, delegate) {
			var tokenizer = new tokenizer_1.Tokenizer(code, options);
			var tokens;
			tokens = [];
			try {
				while (true) {
					var token = tokenizer.getNextToken();
					if (!token) {
						break;
					}
					if (delegate) {
						token = delegate(token);
					}
					tokens.push(token);
				}
			} catch (e) {
				tokenizer.errorHandler.tolerate(e);
			}
			if (tokenizer.errorHandler.tolerant) {
				tokens.errors = tokenizer.errors();
			}
			return tokens;
		}
		exports.tokenize = tokenize;
		var syntax_1 = __webpack_require__(2);
		exports.Syntax = syntax_1.Syntax;

		exports.version = '4.0.0';
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var syntax_1 = __webpack_require__(2);
		var CommentHandler = function () {
			function CommentHandler() {
				this.attach = false;
				this.comments = [];
				this.stack = [];
				this.leading = [];
				this.trailing = [];
			}
			CommentHandler.prototype.insertInnerComments = function (node, metadata) {
				if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
					var innerComments = [];
					for (var i = this.leading.length - 1; i >= 0; --i) {
						var entry = this.leading[i];
						if (metadata.end.offset >= entry.start) {
							innerComments.unshift(entry.comment);
							this.leading.splice(i, 1);
							this.trailing.splice(i, 1);
						}
					}
					if (innerComments.length) {
						node.innerComments = innerComments;
					}
				}
			};
			CommentHandler.prototype.findTrailingComments = function (metadata) {
				var trailingComments = [];
				if (this.trailing.length > 0) {
					for (var i = this.trailing.length - 1; i >= 0; --i) {
						var entry_1 = this.trailing[i];
						if (entry_1.start >= metadata.end.offset) {
							trailingComments.unshift(entry_1.comment);
						}
					}
					this.trailing.length = 0;
					return trailingComments;
				}
				var entry = this.stack[this.stack.length - 1];
				if (entry && entry.node.trailingComments) {
					var firstComment = entry.node.trailingComments[0];
					if (firstComment && firstComment.range[0] >= metadata.end.offset) {
						trailingComments = entry.node.trailingComments;
						delete entry.node.trailingComments;
					}
				}
				return trailingComments;
			};
			CommentHandler.prototype.findLeadingComments = function (metadata) {
				var leadingComments = [];
				var target;
				while (this.stack.length > 0) {
					var entry = this.stack[this.stack.length - 1];
					if (entry && entry.start >= metadata.start.offset) {
						target = entry.node;
						this.stack.pop();
					} else {
						break;
					}
				}
				if (target) {
					var count = target.leadingComments ? target.leadingComments.length : 0;
					for (var i = count - 1; i >= 0; --i) {
						var comment = target.leadingComments[i];
						if (comment.range[1] <= metadata.start.offset) {
							leadingComments.unshift(comment);
							target.leadingComments.splice(i, 1);
						}
					}
					if (target.leadingComments && target.leadingComments.length === 0) {
						delete target.leadingComments;
					}
					return leadingComments;
				}
				for (var i = this.leading.length - 1; i >= 0; --i) {
					var entry = this.leading[i];
					if (entry.start <= metadata.start.offset) {
						leadingComments.unshift(entry.comment);
						this.leading.splice(i, 1);
					}
				}
				return leadingComments;
			};
			CommentHandler.prototype.visitNode = function (node, metadata) {
				if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
					return;
				}
				this.insertInnerComments(node, metadata);
				var trailingComments = this.findTrailingComments(metadata);
				var leadingComments = this.findLeadingComments(metadata);
				if (leadingComments.length > 0) {
					node.leadingComments = leadingComments;
				}
				if (trailingComments.length > 0) {
					node.trailingComments = trailingComments;
				}
				this.stack.push({
					node: node,
					start: metadata.start.offset
				});
			};
			CommentHandler.prototype.visitComment = function (node, metadata) {
				var type = node.type[0] === 'L' ? 'Line' : 'Block';
				var comment = {
					type: type,
					value: node.value
				};
				if (node.range) {
					comment.range = node.range;
				}
				if (node.loc) {
					comment.loc = node.loc;
				}
				this.comments.push(comment);
				if (this.attach) {
					var entry = {
						comment: {
							type: type,
							value: node.value,
							range: [metadata.start.offset, metadata.end.offset]
						},
						start: metadata.start.offset
					};
					if (node.loc) {
						entry.comment.loc = node.loc;
					}
					node.type = type;
					this.leading.push(entry);
					this.trailing.push(entry);
				}
			};
			CommentHandler.prototype.visit = function (node, metadata) {
				if (node.type === 'LineComment') {
					this.visitComment(node, metadata);
				} else if (node.type === 'BlockComment') {
					this.visitComment(node, metadata);
				} else if (this.attach) {
					this.visitNode(node, metadata);
				}
			};
			return CommentHandler;
		}();
		exports.CommentHandler = CommentHandler;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		exports.Syntax = {
			AssignmentExpression: 'AssignmentExpression',
			AssignmentPattern: 'AssignmentPattern',
			ArrayExpression: 'ArrayExpression',
			ArrayPattern: 'ArrayPattern',
			ArrowFunctionExpression: 'ArrowFunctionExpression',
			AwaitExpression: 'AwaitExpression',
			BlockStatement: 'BlockStatement',
			BinaryExpression: 'BinaryExpression',
			BreakStatement: 'BreakStatement',
			CallExpression: 'CallExpression',
			CatchClause: 'CatchClause',
			ClassBody: 'ClassBody',
			ClassDeclaration: 'ClassDeclaration',
			ClassExpression: 'ClassExpression',
			ConditionalExpression: 'ConditionalExpression',
			ContinueStatement: 'ContinueStatement',
			DoWhileStatement: 'DoWhileStatement',
			DebuggerStatement: 'DebuggerStatement',
			EmptyStatement: 'EmptyStatement',
			ExportAllDeclaration: 'ExportAllDeclaration',
			ExportDefaultDeclaration: 'ExportDefaultDeclaration',
			ExportNamedDeclaration: 'ExportNamedDeclaration',
			ExportSpecifier: 'ExportSpecifier',
			ExpressionStatement: 'ExpressionStatement',
			ForStatement: 'ForStatement',
			ForOfStatement: 'ForOfStatement',
			ForInStatement: 'ForInStatement',
			FunctionDeclaration: 'FunctionDeclaration',
			FunctionExpression: 'FunctionExpression',
			Identifier: 'Identifier',
			IfStatement: 'IfStatement',
			ImportDeclaration: 'ImportDeclaration',
			ImportDefaultSpecifier: 'ImportDefaultSpecifier',
			ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
			ImportSpecifier: 'ImportSpecifier',
			Literal: 'Literal',
			LabeledStatement: 'LabeledStatement',
			LogicalExpression: 'LogicalExpression',
			MemberExpression: 'MemberExpression',
			MetaProperty: 'MetaProperty',
			MethodDefinition: 'MethodDefinition',
			NewExpression: 'NewExpression',
			ObjectExpression: 'ObjectExpression',
			ObjectPattern: 'ObjectPattern',
			Program: 'Program',
			Property: 'Property',
			RestElement: 'RestElement',
			ReturnStatement: 'ReturnStatement',
			SequenceExpression: 'SequenceExpression',
			SpreadElement: 'SpreadElement',
			Super: 'Super',
			SwitchCase: 'SwitchCase',
			SwitchStatement: 'SwitchStatement',
			TaggedTemplateExpression: 'TaggedTemplateExpression',
			TemplateElement: 'TemplateElement',
			TemplateLiteral: 'TemplateLiteral',
			ThisExpression: 'ThisExpression',
			ThrowStatement: 'ThrowStatement',
			TryStatement: 'TryStatement',
			UnaryExpression: 'UnaryExpression',
			UpdateExpression: 'UpdateExpression',
			VariableDeclaration: 'VariableDeclaration',
			VariableDeclarator: 'VariableDeclarator',
			WhileStatement: 'WhileStatement',
			WithStatement: 'WithStatement',
			YieldExpression: 'YieldExpression'
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		var __extends = this && this.__extends || function () {
			var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
				d.__proto__ = b;
			} || function (d, b) {
				for (var p in b) {
					if (b.hasOwnProperty(p)) d[p] = b[p];
				}
			};
			return function (d, b) {
				extendStatics(d, b);
				function __() {
					this.constructor = d;
				}
				d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
			};
		}();
		Object.defineProperty(exports, "__esModule", { value: true });
		var character_1 = __webpack_require__(4);
		var JSXNode = __webpack_require__(5);
		var jsx_syntax_1 = __webpack_require__(6);
		var Node = __webpack_require__(7);
		var parser_1 = __webpack_require__(8);
		var token_1 = __webpack_require__(13);
		var xhtml_entities_1 = __webpack_require__(14);
		token_1.TokenName[100] = 'JSXIdentifier';
		token_1.TokenName[101] = 'JSXText';

		function getQualifiedElementName(elementName) {
			var qualifiedName;
			switch (elementName.type) {
				case jsx_syntax_1.JSXSyntax.JSXIdentifier:
					var id = elementName;
					qualifiedName = id.name;
					break;
				case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
					var ns = elementName;
					qualifiedName = getQualifiedElementName(ns.namespace) + ':' + getQualifiedElementName(ns.name);
					break;
				case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
					var expr = elementName;
					qualifiedName = getQualifiedElementName(expr.object) + '.' + getQualifiedElementName(expr.property);
					break;

				default:
					break;
			}
			return qualifiedName;
		}
		var JSXParser = function (_super) {
			__extends(JSXParser, _super);
			function JSXParser(code, options, delegate) {
				return _super.call(this, code, options, delegate) || this;
			}
			JSXParser.prototype.parsePrimaryExpression = function () {
				return this.match('<') ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
			};
			JSXParser.prototype.startJSX = function () {
				this.scanner.index = this.startMarker.index;
				this.scanner.lineNumber = this.startMarker.line;
				this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
			};
			JSXParser.prototype.finishJSX = function () {
				this.nextToken();
			};
			JSXParser.prototype.reenterJSX = function () {
				this.startJSX();
				this.expectJSX('}');

				if (this.config.tokens) {
					this.tokens.pop();
				}
			};
			JSXParser.prototype.createJSXNode = function () {
				this.collectComments();
				return {
					index: this.scanner.index,
					line: this.scanner.lineNumber,
					column: this.scanner.index - this.scanner.lineStart
				};
			};
			JSXParser.prototype.createJSXChildNode = function () {
				return {
					index: this.scanner.index,
					line: this.scanner.lineNumber,
					column: this.scanner.index - this.scanner.lineStart
				};
			};
			JSXParser.prototype.scanXHTMLEntity = function (quote) {
				var result = '&';
				var valid = true;
				var terminated = false;
				var numeric = false;
				var hex = false;
				while (!this.scanner.eof() && valid && !terminated) {
					var ch = this.scanner.source[this.scanner.index];
					if (ch === quote) {
						break;
					}
					terminated = ch === ';';
					result += ch;
					++this.scanner.index;
					if (!terminated) {
						switch (result.length) {
							case 2:
								numeric = ch === '#';
								break;
							case 3:
								if (numeric) {
									hex = ch === 'x';
									valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
									numeric = numeric && !hex;
								}
								break;
							default:
								valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
								valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
								break;
						}
					}
				}
				if (valid && terminated && result.length > 2) {
					var str = result.substr(1, result.length - 2);
					if (numeric && str.length > 1) {
						result = String.fromCharCode(parseInt(str.substr(1), 10));
					} else if (hex && str.length > 2) {
						result = String.fromCharCode(parseInt('0' + str.substr(1), 16));
					} else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
						result = xhtml_entities_1.XHTMLEntities[str];
					}
				}
				return result;
			};

			JSXParser.prototype.lexJSX = function () {
				var cp = this.scanner.source.charCodeAt(this.scanner.index);

				if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
					var value = this.scanner.source[this.scanner.index++];
					return {
						type: 7,
						value: value,
						lineNumber: this.scanner.lineNumber,
						lineStart: this.scanner.lineStart,
						start: this.scanner.index - 1,
						end: this.scanner.index
					};
				}

				if (cp === 34 || cp === 39) {
					var start = this.scanner.index;
					var quote = this.scanner.source[this.scanner.index++];
					var str = '';
					while (!this.scanner.eof()) {
						var ch = this.scanner.source[this.scanner.index++];
						if (ch === quote) {
							break;
						} else if (ch === '&') {
							str += this.scanXHTMLEntity(quote);
						} else {
							str += ch;
						}
					}
					return {
						type: 8,
						value: str,
						lineNumber: this.scanner.lineNumber,
						lineStart: this.scanner.lineStart,
						start: start,
						end: this.scanner.index
					};
				}

				if (cp === 46) {
					var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
					var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
					var value = n1 === 46 && n2 === 46 ? '...' : '.';
					var start = this.scanner.index;
					this.scanner.index += value.length;
					return {
						type: 7,
						value: value,
						lineNumber: this.scanner.lineNumber,
						lineStart: this.scanner.lineStart,
						start: start,
						end: this.scanner.index
					};
				}

				if (cp === 96) {
					return {
						type: 10,
						value: '',
						lineNumber: this.scanner.lineNumber,
						lineStart: this.scanner.lineStart,
						start: this.scanner.index,
						end: this.scanner.index
					};
				}

				if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
					var start = this.scanner.index;
					++this.scanner.index;
					while (!this.scanner.eof()) {
						var ch = this.scanner.source.charCodeAt(this.scanner.index);
						if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
							++this.scanner.index;
						} else if (ch === 45) {
							++this.scanner.index;
						} else {
							break;
						}
					}
					var id = this.scanner.source.slice(start, this.scanner.index);
					return {
						type: 100,
						value: id,
						lineNumber: this.scanner.lineNumber,
						lineStart: this.scanner.lineStart,
						start: start,
						end: this.scanner.index
					};
				}
				return this.scanner.lex();
			};
			JSXParser.prototype.nextJSXToken = function () {
				this.collectComments();
				this.startMarker.index = this.scanner.index;
				this.startMarker.line = this.scanner.lineNumber;
				this.startMarker.column = this.scanner.index - this.scanner.lineStart;
				var token = this.lexJSX();
				this.lastMarker.index = this.scanner.index;
				this.lastMarker.line = this.scanner.lineNumber;
				this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
				if (this.config.tokens) {
					this.tokens.push(this.convertToken(token));
				}
				return token;
			};
			JSXParser.prototype.nextJSXText = function () {
				this.startMarker.index = this.scanner.index;
				this.startMarker.line = this.scanner.lineNumber;
				this.startMarker.column = this.scanner.index - this.scanner.lineStart;
				var start = this.scanner.index;
				var text = '';
				while (!this.scanner.eof()) {
					var ch = this.scanner.source[this.scanner.index];
					if (ch === '{' || ch === '<') {
						break;
					}
					++this.scanner.index;
					text += ch;
					if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
						++this.scanner.lineNumber;
						if (ch === '\r' && this.scanner.source[this.scanner.index] === '\n') {
							++this.scanner.index;
						}
						this.scanner.lineStart = this.scanner.index;
					}
				}
				this.lastMarker.index = this.scanner.index;
				this.lastMarker.line = this.scanner.lineNumber;
				this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
				var token = {
					type: 101,
					value: text,
					lineNumber: this.scanner.lineNumber,
					lineStart: this.scanner.lineStart,
					start: start,
					end: this.scanner.index
				};
				if (text.length > 0 && this.config.tokens) {
					this.tokens.push(this.convertToken(token));
				}
				return token;
			};
			JSXParser.prototype.peekJSXToken = function () {
				var state = this.scanner.saveState();
				this.scanner.scanComments();
				var next = this.lexJSX();
				this.scanner.restoreState(state);
				return next;
			};

			JSXParser.prototype.expectJSX = function (value) {
				var token = this.nextJSXToken();
				if (token.type !== 7 || token.value !== value) {
					this.throwUnexpectedToken(token);
				}
			};

			JSXParser.prototype.matchJSX = function (value) {
				var next = this.peekJSXToken();
				return next.type === 7 && next.value === value;
			};
			JSXParser.prototype.parseJSXIdentifier = function () {
				var node = this.createJSXNode();
				var token = this.nextJSXToken();
				if (token.type !== 100) {
						this.throwUnexpectedToken(token);
					}
				return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
			};
			JSXParser.prototype.parseJSXElementName = function () {
				var node = this.createJSXNode();
				var elementName = this.parseJSXIdentifier();
				if (this.matchJSX(':')) {
					var namespace = elementName;
					this.expectJSX(':');
					var name_1 = this.parseJSXIdentifier();
					elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
				} else if (this.matchJSX('.')) {
					while (this.matchJSX('.')) {
						var object = elementName;
						this.expectJSX('.');
						var property = this.parseJSXIdentifier();
						elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
					}
				}
				return elementName;
			};
			JSXParser.prototype.parseJSXAttributeName = function () {
				var node = this.createJSXNode();
				var attributeName;
				var identifier = this.parseJSXIdentifier();
				if (this.matchJSX(':')) {
					var namespace = identifier;
					this.expectJSX(':');
					var name_2 = this.parseJSXIdentifier();
					attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
				} else {
					attributeName = identifier;
				}
				return attributeName;
			};
			JSXParser.prototype.parseJSXStringLiteralAttribute = function () {
				var node = this.createJSXNode();
				var token = this.nextJSXToken();
				if (token.type !== 8) {
						this.throwUnexpectedToken(token);
					}
				var raw = this.getTokenRaw(token);
				return this.finalize(node, new Node.Literal(token.value, raw));
			};
			JSXParser.prototype.parseJSXExpressionAttribute = function () {
				var node = this.createJSXNode();
				this.expectJSX('{');
				this.finishJSX();
				if (this.match('}')) {
					this.tolerateError('JSX attributes must only be assigned a non-empty expression');
				}
				var expression = this.parseAssignmentExpression();
				this.reenterJSX();
				return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
			};
			JSXParser.prototype.parseJSXAttributeValue = function () {
				return this.matchJSX('{') ? this.parseJSXExpressionAttribute() : this.matchJSX('<') ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
			};
			JSXParser.prototype.parseJSXNameValueAttribute = function () {
				var node = this.createJSXNode();
				var name = this.parseJSXAttributeName();
				var value = null;
				if (this.matchJSX('=')) {
					this.expectJSX('=');
					value = this.parseJSXAttributeValue();
				}
				return this.finalize(node, new JSXNode.JSXAttribute(name, value));
			};
			JSXParser.prototype.parseJSXSpreadAttribute = function () {
				var node = this.createJSXNode();
				this.expectJSX('{');
				this.expectJSX('...');
				this.finishJSX();
				var argument = this.parseAssignmentExpression();
				this.reenterJSX();
				return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
			};
			JSXParser.prototype.parseJSXAttributes = function () {
				var attributes = [];
				while (!this.matchJSX('/') && !this.matchJSX('>')) {
					var attribute = this.matchJSX('{') ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
					attributes.push(attribute);
				}
				return attributes;
			};
			JSXParser.prototype.parseJSXOpeningElement = function () {
				var node = this.createJSXNode();
				this.expectJSX('<');
				var name = this.parseJSXElementName();
				var attributes = this.parseJSXAttributes();
				var selfClosing = this.matchJSX('/');
				if (selfClosing) {
					this.expectJSX('/');
				}
				this.expectJSX('>');
				return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
			};
			JSXParser.prototype.parseJSXBoundaryElement = function () {
				var node = this.createJSXNode();
				this.expectJSX('<');
				if (this.matchJSX('/')) {
					this.expectJSX('/');
					var name_3 = this.parseJSXElementName();
					this.expectJSX('>');
					return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
				}
				var name = this.parseJSXElementName();
				var attributes = this.parseJSXAttributes();
				var selfClosing = this.matchJSX('/');
				if (selfClosing) {
					this.expectJSX('/');
				}
				this.expectJSX('>');
				return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
			};
			JSXParser.prototype.parseJSXEmptyExpression = function () {
				var node = this.createJSXChildNode();
				this.collectComments();
				this.lastMarker.index = this.scanner.index;
				this.lastMarker.line = this.scanner.lineNumber;
				this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
				return this.finalize(node, new JSXNode.JSXEmptyExpression());
			};
			JSXParser.prototype.parseJSXExpressionContainer = function () {
				var node = this.createJSXNode();
				this.expectJSX('{');
				var expression;
				if (this.matchJSX('}')) {
					expression = this.parseJSXEmptyExpression();
					this.expectJSX('}');
				} else {
					this.finishJSX();
					expression = this.parseAssignmentExpression();
					this.reenterJSX();
				}
				return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
			};
			JSXParser.prototype.parseJSXChildren = function () {
				var children = [];
				while (!this.scanner.eof()) {
					var node = this.createJSXChildNode();
					var token = this.nextJSXText();
					if (token.start < token.end) {
						var raw = this.getTokenRaw(token);
						var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
						children.push(child);
					}
					if (this.scanner.source[this.scanner.index] === '{') {
						var container = this.parseJSXExpressionContainer();
						children.push(container);
					} else {
						break;
					}
				}
				return children;
			};
			JSXParser.prototype.parseComplexJSXElement = function (el) {
				var stack = [];
				while (!this.scanner.eof()) {
					el.children = el.children.concat(this.parseJSXChildren());
					var node = this.createJSXChildNode();
					var element = this.parseJSXBoundaryElement();
					if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
						var opening = element;
						if (opening.selfClosing) {
							var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
							el.children.push(child);
						} else {
							stack.push(el);
							el = { node: node, opening: opening, closing: null, children: [] };
						}
					}
					if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
						el.closing = element;
						var open_1 = getQualifiedElementName(el.opening.name);
						var close_1 = getQualifiedElementName(el.closing.name);
						if (open_1 !== close_1) {
							this.tolerateError('Expected corresponding JSX closing tag for %0', open_1);
						}
						if (stack.length > 0) {
							var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
							el = stack[stack.length - 1];
							el.children.push(child);
							stack.pop();
						} else {
							break;
						}
					}
				}
				return el;
			};
			JSXParser.prototype.parseJSXElement = function () {
				var node = this.createJSXNode();
				var opening = this.parseJSXOpeningElement();
				var children = [];
				var closing = null;
				if (!opening.selfClosing) {
					var el = this.parseComplexJSXElement({ node: node, opening: opening, closing: closing, children: children });
					children = el.children;
					closing = el.closing;
				}
				return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
			};
			JSXParser.prototype.parseJSXRoot = function () {
				if (this.config.tokens) {
					this.tokens.pop();
				}
				this.startJSX();
				var element = this.parseJSXElement();
				this.finishJSX();
				return element;
			};
			JSXParser.prototype.isStartOfExpression = function () {
				return _super.prototype.isStartOfExpression.call(this) || this.match('<');
			};
			return JSXParser;
		}(parser_1.Parser);
		exports.JSXParser = JSXParser;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });

		var Regex = {
			NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,

			NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
		};
		exports.Character = {
			fromCodePoint: function fromCodePoint(cp) {
				return cp < 0x10000 ? String.fromCharCode(cp) : String.fromCharCode(0xD800 + (cp - 0x10000 >> 10)) + String.fromCharCode(0xDC00 + (cp - 0x10000 & 1023));
			},

			isWhiteSpace: function isWhiteSpace(cp) {
				return cp === 0x20 || cp === 0x09 || cp === 0x0B || cp === 0x0C || cp === 0xA0 || cp >= 0x1680 && [0x1680, 0x2000, 0x2001, 0x2002, 0x2003, 0x2004, 0x2005, 0x2006, 0x2007, 0x2008, 0x2009, 0x200A, 0x202F, 0x205F, 0x3000, 0xFEFF].indexOf(cp) >= 0;
			},

			isLineTerminator: function isLineTerminator(cp) {
				return cp === 0x0A || cp === 0x0D || cp === 0x2028 || cp === 0x2029;
			},

			isIdentifierStart: function isIdentifierStart(cp) {
				return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp));
			},
			isIdentifierPart: function isIdentifierPart(cp) {
				return cp === 0x24 || cp === 0x5F || cp >= 0x41 && cp <= 0x5A || cp >= 0x61 && cp <= 0x7A || cp >= 0x30 && cp <= 0x39 || cp === 0x5C || cp >= 0x80 && Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp));
			},

			isDecimalDigit: function isDecimalDigit(cp) {
				return cp >= 0x30 && cp <= 0x39;
			},
			isHexDigit: function isHexDigit(cp) {
				return cp >= 0x30 && cp <= 0x39 || cp >= 0x41 && cp <= 0x46 || cp >= 0x61 && cp <= 0x66;
			},
			isOctalDigit: function isOctalDigit(cp) {
				return cp >= 0x30 && cp <= 0x37;
			}
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var jsx_syntax_1 = __webpack_require__(6);

		var JSXClosingElement = function () {
			function JSXClosingElement(name) {
				this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
				this.name = name;
			}
			return JSXClosingElement;
		}();
		exports.JSXClosingElement = JSXClosingElement;
		var JSXElement = function () {
			function JSXElement(openingElement, children, closingElement) {
				this.type = jsx_syntax_1.JSXSyntax.JSXElement;
				this.openingElement = openingElement;
				this.children = children;
				this.closingElement = closingElement;
			}
			return JSXElement;
		}();
		exports.JSXElement = JSXElement;
		var JSXEmptyExpression = function () {
			function JSXEmptyExpression() {
				this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
			}
			return JSXEmptyExpression;
		}();
		exports.JSXEmptyExpression = JSXEmptyExpression;
		var JSXExpressionContainer = function () {
			function JSXExpressionContainer(expression) {
				this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
				this.expression = expression;
			}
			return JSXExpressionContainer;
		}();
		exports.JSXExpressionContainer = JSXExpressionContainer;
		var JSXIdentifier = function () {
			function JSXIdentifier(name) {
				this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
				this.name = name;
			}
			return JSXIdentifier;
		}();
		exports.JSXIdentifier = JSXIdentifier;
		var JSXMemberExpression = function () {
			function JSXMemberExpression(object, property) {
				this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
				this.object = object;
				this.property = property;
			}
			return JSXMemberExpression;
		}();
		exports.JSXMemberExpression = JSXMemberExpression;
		var JSXAttribute = function () {
			function JSXAttribute(name, value) {
				this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
				this.name = name;
				this.value = value;
			}
			return JSXAttribute;
		}();
		exports.JSXAttribute = JSXAttribute;
		var JSXNamespacedName = function () {
			function JSXNamespacedName(namespace, name) {
				this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
				this.namespace = namespace;
				this.name = name;
			}
			return JSXNamespacedName;
		}();
		exports.JSXNamespacedName = JSXNamespacedName;
		var JSXOpeningElement = function () {
			function JSXOpeningElement(name, selfClosing, attributes) {
				this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
				this.name = name;
				this.selfClosing = selfClosing;
				this.attributes = attributes;
			}
			return JSXOpeningElement;
		}();
		exports.JSXOpeningElement = JSXOpeningElement;
		var JSXSpreadAttribute = function () {
			function JSXSpreadAttribute(argument) {
				this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
				this.argument = argument;
			}
			return JSXSpreadAttribute;
		}();
		exports.JSXSpreadAttribute = JSXSpreadAttribute;
		var JSXText = function () {
			function JSXText(value, raw) {
				this.type = jsx_syntax_1.JSXSyntax.JSXText;
				this.value = value;
				this.raw = raw;
			}
			return JSXText;
		}();
		exports.JSXText = JSXText;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		exports.JSXSyntax = {
			JSXAttribute: 'JSXAttribute',
			JSXClosingElement: 'JSXClosingElement',
			JSXElement: 'JSXElement',
			JSXEmptyExpression: 'JSXEmptyExpression',
			JSXExpressionContainer: 'JSXExpressionContainer',
			JSXIdentifier: 'JSXIdentifier',
			JSXMemberExpression: 'JSXMemberExpression',
			JSXNamespacedName: 'JSXNamespacedName',
			JSXOpeningElement: 'JSXOpeningElement',
			JSXSpreadAttribute: 'JSXSpreadAttribute',
			JSXText: 'JSXText'
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var syntax_1 = __webpack_require__(2);

		var ArrayExpression = function () {
			function ArrayExpression(elements) {
				this.type = syntax_1.Syntax.ArrayExpression;
				this.elements = elements;
			}
			return ArrayExpression;
		}();
		exports.ArrayExpression = ArrayExpression;
		var ArrayPattern = function () {
			function ArrayPattern(elements) {
				this.type = syntax_1.Syntax.ArrayPattern;
				this.elements = elements;
			}
			return ArrayPattern;
		}();
		exports.ArrayPattern = ArrayPattern;
		var ArrowFunctionExpression = function () {
			function ArrowFunctionExpression(params, body, expression) {
				this.type = syntax_1.Syntax.ArrowFunctionExpression;
				this.id = null;
				this.params = params;
				this.body = body;
				this.generator = false;
				this.expression = expression;
				this.async = false;
			}
			return ArrowFunctionExpression;
		}();
		exports.ArrowFunctionExpression = ArrowFunctionExpression;
		var AssignmentExpression = function () {
			function AssignmentExpression(operator, left, right) {
				this.type = syntax_1.Syntax.AssignmentExpression;
				this.operator = operator;
				this.left = left;
				this.right = right;
			}
			return AssignmentExpression;
		}();
		exports.AssignmentExpression = AssignmentExpression;
		var AssignmentPattern = function () {
			function AssignmentPattern(left, right) {
				this.type = syntax_1.Syntax.AssignmentPattern;
				this.left = left;
				this.right = right;
			}
			return AssignmentPattern;
		}();
		exports.AssignmentPattern = AssignmentPattern;
		var AsyncArrowFunctionExpression = function () {
			function AsyncArrowFunctionExpression(params, body, expression) {
				this.type = syntax_1.Syntax.ArrowFunctionExpression;
				this.id = null;
				this.params = params;
				this.body = body;
				this.generator = false;
				this.expression = expression;
				this.async = true;
			}
			return AsyncArrowFunctionExpression;
		}();
		exports.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
		var AsyncFunctionDeclaration = function () {
			function AsyncFunctionDeclaration(id, params, body) {
				this.type = syntax_1.Syntax.FunctionDeclaration;
				this.id = id;
				this.params = params;
				this.body = body;
				this.generator = false;
				this.expression = false;
				this.async = true;
			}
			return AsyncFunctionDeclaration;
		}();
		exports.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
		var AsyncFunctionExpression = function () {
			function AsyncFunctionExpression(id, params, body) {
				this.type = syntax_1.Syntax.FunctionExpression;
				this.id = id;
				this.params = params;
				this.body = body;
				this.generator = false;
				this.expression = false;
				this.async = true;
			}
			return AsyncFunctionExpression;
		}();
		exports.AsyncFunctionExpression = AsyncFunctionExpression;
		var AwaitExpression = function () {
			function AwaitExpression(argument) {
				this.type = syntax_1.Syntax.AwaitExpression;
				this.argument = argument;
			}
			return AwaitExpression;
		}();
		exports.AwaitExpression = AwaitExpression;
		var BinaryExpression = function () {
			function BinaryExpression(operator, left, right) {
				var logical = operator === '||' || operator === '&&';
				this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
				this.operator = operator;
				this.left = left;
				this.right = right;
			}
			return BinaryExpression;
		}();
		exports.BinaryExpression = BinaryExpression;
		var BlockStatement = function () {
			function BlockStatement(body) {
				this.type = syntax_1.Syntax.BlockStatement;
				this.body = body;
			}
			return BlockStatement;
		}();
		exports.BlockStatement = BlockStatement;
		var BreakStatement = function () {
			function BreakStatement(label) {
				this.type = syntax_1.Syntax.BreakStatement;
				this.label = label;
			}
			return BreakStatement;
		}();
		exports.BreakStatement = BreakStatement;
		var CallExpression = function () {
			function CallExpression(callee, args) {
				this.type = syntax_1.Syntax.CallExpression;
				this.callee = callee;
				this.arguments = args;
			}
			return CallExpression;
		}();
		exports.CallExpression = CallExpression;
		var CatchClause = function () {
			function CatchClause(param, body) {
				this.type = syntax_1.Syntax.CatchClause;
				this.param = param;
				this.body = body;
			}
			return CatchClause;
		}();
		exports.CatchClause = CatchClause;
		var ClassBody = function () {
			function ClassBody(body) {
				this.type = syntax_1.Syntax.ClassBody;
				this.body = body;
			}
			return ClassBody;
		}();
		exports.ClassBody = ClassBody;
		var ClassDeclaration = function () {
			function ClassDeclaration(id, superClass, body) {
				this.type = syntax_1.Syntax.ClassDeclaration;
				this.id = id;
				this.superClass = superClass;
				this.body = body;
			}
			return ClassDeclaration;
		}();
		exports.ClassDeclaration = ClassDeclaration;
		var ClassExpression = function () {
			function ClassExpression(id, superClass, body) {
				this.type = syntax_1.Syntax.ClassExpression;
				this.id = id;
				this.superClass = superClass;
				this.body = body;
			}
			return ClassExpression;
		}();
		exports.ClassExpression = ClassExpression;
		var ComputedMemberExpression = function () {
			function ComputedMemberExpression(object, property) {
				this.type = syntax_1.Syntax.MemberExpression;
				this.computed = true;
				this.object = object;
				this.property = property;
			}
			return ComputedMemberExpression;
		}();
		exports.ComputedMemberExpression = ComputedMemberExpression;
		var ConditionalExpression = function () {
			function ConditionalExpression(test, consequent, alternate) {
				this.type = syntax_1.Syntax.ConditionalExpression;
				this.test = test;
				this.consequent = consequent;
				this.alternate = alternate;
			}
			return ConditionalExpression;
		}();
		exports.ConditionalExpression = ConditionalExpression;
		var ContinueStatement = function () {
			function ContinueStatement(label) {
				this.type = syntax_1.Syntax.ContinueStatement;
				this.label = label;
			}
			return ContinueStatement;
		}();
		exports.ContinueStatement = ContinueStatement;
		var DebuggerStatement = function () {
			function DebuggerStatement() {
				this.type = syntax_1.Syntax.DebuggerStatement;
			}
			return DebuggerStatement;
		}();
		exports.DebuggerStatement = DebuggerStatement;
		var Directive = function () {
			function Directive(expression, directive) {
				this.type = syntax_1.Syntax.ExpressionStatement;
				this.expression = expression;
				this.directive = directive;
			}
			return Directive;
		}();
		exports.Directive = Directive;
		var DoWhileStatement = function () {
			function DoWhileStatement(body, test) {
				this.type = syntax_1.Syntax.DoWhileStatement;
				this.body = body;
				this.test = test;
			}
			return DoWhileStatement;
		}();
		exports.DoWhileStatement = DoWhileStatement;
		var EmptyStatement = function () {
			function EmptyStatement() {
				this.type = syntax_1.Syntax.EmptyStatement;
			}
			return EmptyStatement;
		}();
		exports.EmptyStatement = EmptyStatement;
		var ExportAllDeclaration = function () {
			function ExportAllDeclaration(source) {
				this.type = syntax_1.Syntax.ExportAllDeclaration;
				this.source = source;
			}
			return ExportAllDeclaration;
		}();
		exports.ExportAllDeclaration = ExportAllDeclaration;
		var ExportDefaultDeclaration = function () {
			function ExportDefaultDeclaration(declaration) {
				this.type = syntax_1.Syntax.ExportDefaultDeclaration;
				this.declaration = declaration;
			}
			return ExportDefaultDeclaration;
		}();
		exports.ExportDefaultDeclaration = ExportDefaultDeclaration;
		var ExportNamedDeclaration = function () {
			function ExportNamedDeclaration(declaration, specifiers, source) {
				this.type = syntax_1.Syntax.ExportNamedDeclaration;
				this.declaration = declaration;
				this.specifiers = specifiers;
				this.source = source;
			}
			return ExportNamedDeclaration;
		}();
		exports.ExportNamedDeclaration = ExportNamedDeclaration;
		var ExportSpecifier = function () {
			function ExportSpecifier(local, exported) {
				this.type = syntax_1.Syntax.ExportSpecifier;
				this.exported = exported;
				this.local = local;
			}
			return ExportSpecifier;
		}();
		exports.ExportSpecifier = ExportSpecifier;
		var ExpressionStatement = function () {
			function ExpressionStatement(expression) {
				this.type = syntax_1.Syntax.ExpressionStatement;
				this.expression = expression;
			}
			return ExpressionStatement;
		}();
		exports.ExpressionStatement = ExpressionStatement;
		var ForInStatement = function () {
			function ForInStatement(left, right, body) {
				this.type = syntax_1.Syntax.ForInStatement;
				this.left = left;
				this.right = right;
				this.body = body;
				this.each = false;
			}
			return ForInStatement;
		}();
		exports.ForInStatement = ForInStatement;
		var ForOfStatement = function () {
			function ForOfStatement(left, right, body) {
				this.type = syntax_1.Syntax.ForOfStatement;
				this.left = left;
				this.right = right;
				this.body = body;
			}
			return ForOfStatement;
		}();
		exports.ForOfStatement = ForOfStatement;
		var ForStatement = function () {
			function ForStatement(init, test, update, body) {
				this.type = syntax_1.Syntax.ForStatement;
				this.init = init;
				this.test = test;
				this.update = update;
				this.body = body;
			}
			return ForStatement;
		}();
		exports.ForStatement = ForStatement;
		var FunctionDeclaration = function () {
			function FunctionDeclaration(id, params, body, generator) {
				this.type = syntax_1.Syntax.FunctionDeclaration;
				this.id = id;
				this.params = params;
				this.body = body;
				this.generator = generator;
				this.expression = false;
				this.async = false;
			}
			return FunctionDeclaration;
		}();
		exports.FunctionDeclaration = FunctionDeclaration;
		var FunctionExpression = function () {
			function FunctionExpression(id, params, body, generator) {
				this.type = syntax_1.Syntax.FunctionExpression;
				this.id = id;
				this.params = params;
				this.body = body;
				this.generator = generator;
				this.expression = false;
				this.async = false;
			}
			return FunctionExpression;
		}();
		exports.FunctionExpression = FunctionExpression;
		var Identifier = function () {
			function Identifier(name) {
				this.type = syntax_1.Syntax.Identifier;
				this.name = name;
			}
			return Identifier;
		}();
		exports.Identifier = Identifier;
		var IfStatement = function () {
			function IfStatement(test, consequent, alternate) {
				this.type = syntax_1.Syntax.IfStatement;
				this.test = test;
				this.consequent = consequent;
				this.alternate = alternate;
			}
			return IfStatement;
		}();
		exports.IfStatement = IfStatement;
		var ImportDeclaration = function () {
			function ImportDeclaration(specifiers, source) {
				this.type = syntax_1.Syntax.ImportDeclaration;
				this.specifiers = specifiers;
				this.source = source;
			}
			return ImportDeclaration;
		}();
		exports.ImportDeclaration = ImportDeclaration;
		var ImportDefaultSpecifier = function () {
			function ImportDefaultSpecifier(local) {
				this.type = syntax_1.Syntax.ImportDefaultSpecifier;
				this.local = local;
			}
			return ImportDefaultSpecifier;
		}();
		exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
		var ImportNamespaceSpecifier = function () {
			function ImportNamespaceSpecifier(local) {
				this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
				this.local = local;
			}
			return ImportNamespaceSpecifier;
		}();
		exports.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
		var ImportSpecifier = function () {
			function ImportSpecifier(local, imported) {
				this.type = syntax_1.Syntax.ImportSpecifier;
				this.local = local;
				this.imported = imported;
			}
			return ImportSpecifier;
		}();
		exports.ImportSpecifier = ImportSpecifier;
		var LabeledStatement = function () {
			function LabeledStatement(label, body) {
				this.type = syntax_1.Syntax.LabeledStatement;
				this.label = label;
				this.body = body;
			}
			return LabeledStatement;
		}();
		exports.LabeledStatement = LabeledStatement;
		var Literal = function () {
			function Literal(value, raw) {
				this.type = syntax_1.Syntax.Literal;
				this.value = value;
				this.raw = raw;
			}
			return Literal;
		}();
		exports.Literal = Literal;
		var MetaProperty = function () {
			function MetaProperty(meta, property) {
				this.type = syntax_1.Syntax.MetaProperty;
				this.meta = meta;
				this.property = property;
			}
			return MetaProperty;
		}();
		exports.MetaProperty = MetaProperty;
		var MethodDefinition = function () {
			function MethodDefinition(key, computed, value, kind, isStatic) {
				this.type = syntax_1.Syntax.MethodDefinition;
				this.key = key;
				this.computed = computed;
				this.value = value;
				this.kind = kind;
				this.static = isStatic;
			}
			return MethodDefinition;
		}();
		exports.MethodDefinition = MethodDefinition;
		var Module = function () {
			function Module(body) {
				this.type = syntax_1.Syntax.Program;
				this.body = body;
				this.sourceType = 'module';
			}
			return Module;
		}();
		exports.Module = Module;
		var NewExpression = function () {
			function NewExpression(callee, args) {
				this.type = syntax_1.Syntax.NewExpression;
				this.callee = callee;
				this.arguments = args;
			}
			return NewExpression;
		}();
		exports.NewExpression = NewExpression;
		var ObjectExpression = function () {
			function ObjectExpression(properties) {
				this.type = syntax_1.Syntax.ObjectExpression;
				this.properties = properties;
			}
			return ObjectExpression;
		}();
		exports.ObjectExpression = ObjectExpression;
		var ObjectPattern = function () {
			function ObjectPattern(properties) {
				this.type = syntax_1.Syntax.ObjectPattern;
				this.properties = properties;
			}
			return ObjectPattern;
		}();
		exports.ObjectPattern = ObjectPattern;
		var Property = function () {
			function Property(kind, key, computed, value, method, shorthand) {
				this.type = syntax_1.Syntax.Property;
				this.key = key;
				this.computed = computed;
				this.value = value;
				this.kind = kind;
				this.method = method;
				this.shorthand = shorthand;
			}
			return Property;
		}();
		exports.Property = Property;
		var RegexLiteral = function () {
			function RegexLiteral(value, raw, pattern, flags) {
				this.type = syntax_1.Syntax.Literal;
				this.value = value;
				this.raw = raw;
				this.regex = { pattern: pattern, flags: flags };
			}
			return RegexLiteral;
		}();
		exports.RegexLiteral = RegexLiteral;
		var RestElement = function () {
			function RestElement(argument) {
				this.type = syntax_1.Syntax.RestElement;
				this.argument = argument;
			}
			return RestElement;
		}();
		exports.RestElement = RestElement;
		var ReturnStatement = function () {
			function ReturnStatement(argument) {
				this.type = syntax_1.Syntax.ReturnStatement;
				this.argument = argument;
			}
			return ReturnStatement;
		}();
		exports.ReturnStatement = ReturnStatement;
		var Script = function () {
			function Script(body) {
				this.type = syntax_1.Syntax.Program;
				this.body = body;
				this.sourceType = 'script';
			}
			return Script;
		}();
		exports.Script = Script;
		var SequenceExpression = function () {
			function SequenceExpression(expressions) {
				this.type = syntax_1.Syntax.SequenceExpression;
				this.expressions = expressions;
			}
			return SequenceExpression;
		}();
		exports.SequenceExpression = SequenceExpression;
		var SpreadElement = function () {
			function SpreadElement(argument) {
				this.type = syntax_1.Syntax.SpreadElement;
				this.argument = argument;
			}
			return SpreadElement;
		}();
		exports.SpreadElement = SpreadElement;
		var StaticMemberExpression = function () {
			function StaticMemberExpression(object, property) {
				this.type = syntax_1.Syntax.MemberExpression;
				this.computed = false;
				this.object = object;
				this.property = property;
			}
			return StaticMemberExpression;
		}();
		exports.StaticMemberExpression = StaticMemberExpression;
		var Super = function () {
			function Super() {
				this.type = syntax_1.Syntax.Super;
			}
			return Super;
		}();
		exports.Super = Super;
		var SwitchCase = function () {
			function SwitchCase(test, consequent) {
				this.type = syntax_1.Syntax.SwitchCase;
				this.test = test;
				this.consequent = consequent;
			}
			return SwitchCase;
		}();
		exports.SwitchCase = SwitchCase;
		var SwitchStatement = function () {
			function SwitchStatement(discriminant, cases) {
				this.type = syntax_1.Syntax.SwitchStatement;
				this.discriminant = discriminant;
				this.cases = cases;
			}
			return SwitchStatement;
		}();
		exports.SwitchStatement = SwitchStatement;
		var TaggedTemplateExpression = function () {
			function TaggedTemplateExpression(tag, quasi) {
				this.type = syntax_1.Syntax.TaggedTemplateExpression;
				this.tag = tag;
				this.quasi = quasi;
			}
			return TaggedTemplateExpression;
		}();
		exports.TaggedTemplateExpression = TaggedTemplateExpression;
		var TemplateElement = function () {
			function TemplateElement(value, tail) {
				this.type = syntax_1.Syntax.TemplateElement;
				this.value = value;
				this.tail = tail;
			}
			return TemplateElement;
		}();
		exports.TemplateElement = TemplateElement;
		var TemplateLiteral = function () {
			function TemplateLiteral(quasis, expressions) {
				this.type = syntax_1.Syntax.TemplateLiteral;
				this.quasis = quasis;
				this.expressions = expressions;
			}
			return TemplateLiteral;
		}();
		exports.TemplateLiteral = TemplateLiteral;
		var ThisExpression = function () {
			function ThisExpression() {
				this.type = syntax_1.Syntax.ThisExpression;
			}
			return ThisExpression;
		}();
		exports.ThisExpression = ThisExpression;
		var ThrowStatement = function () {
			function ThrowStatement(argument) {
				this.type = syntax_1.Syntax.ThrowStatement;
				this.argument = argument;
			}
			return ThrowStatement;
		}();
		exports.ThrowStatement = ThrowStatement;
		var TryStatement = function () {
			function TryStatement(block, handler, finalizer) {
				this.type = syntax_1.Syntax.TryStatement;
				this.block = block;
				this.handler = handler;
				this.finalizer = finalizer;
			}
			return TryStatement;
		}();
		exports.TryStatement = TryStatement;
		var UnaryExpression = function () {
			function UnaryExpression(operator, argument) {
				this.type = syntax_1.Syntax.UnaryExpression;
				this.operator = operator;
				this.argument = argument;
				this.prefix = true;
			}
			return UnaryExpression;
		}();
		exports.UnaryExpression = UnaryExpression;
		var UpdateExpression = function () {
			function UpdateExpression(operator, argument, prefix) {
				this.type = syntax_1.Syntax.UpdateExpression;
				this.operator = operator;
				this.argument = argument;
				this.prefix = prefix;
			}
			return UpdateExpression;
		}();
		exports.UpdateExpression = UpdateExpression;
		var VariableDeclaration = function () {
			function VariableDeclaration(declarations, kind) {
				this.type = syntax_1.Syntax.VariableDeclaration;
				this.declarations = declarations;
				this.kind = kind;
			}
			return VariableDeclaration;
		}();
		exports.VariableDeclaration = VariableDeclaration;
		var VariableDeclarator = function () {
			function VariableDeclarator(id, init) {
				this.type = syntax_1.Syntax.VariableDeclarator;
				this.id = id;
				this.init = init;
			}
			return VariableDeclarator;
		}();
		exports.VariableDeclarator = VariableDeclarator;
		var WhileStatement = function () {
			function WhileStatement(test, body) {
				this.type = syntax_1.Syntax.WhileStatement;
				this.test = test;
				this.body = body;
			}
			return WhileStatement;
		}();
		exports.WhileStatement = WhileStatement;
		var WithStatement = function () {
			function WithStatement(object, body) {
				this.type = syntax_1.Syntax.WithStatement;
				this.object = object;
				this.body = body;
			}
			return WithStatement;
		}();
		exports.WithStatement = WithStatement;
		var YieldExpression = function () {
			function YieldExpression(argument, delegate) {
				this.type = syntax_1.Syntax.YieldExpression;
				this.argument = argument;
				this.delegate = delegate;
			}
			return YieldExpression;
		}();
		exports.YieldExpression = YieldExpression;
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var assert_1 = __webpack_require__(9);
		var error_handler_1 = __webpack_require__(10);
		var messages_1 = __webpack_require__(11);
		var Node = __webpack_require__(7);
		var scanner_1 = __webpack_require__(12);
		var syntax_1 = __webpack_require__(2);
		var token_1 = __webpack_require__(13);
		var ArrowParameterPlaceHolder = 'ArrowParameterPlaceHolder';
		var Parser = function () {
			function Parser(code, options, delegate) {
				if (options === void 0) {
					options = {};
				}
				this.config = {
					range: typeof options.range === 'boolean' && options.range,
					loc: typeof options.loc === 'boolean' && options.loc,
					source: null,
					tokens: typeof options.tokens === 'boolean' && options.tokens,
					comment: typeof options.comment === 'boolean' && options.comment,
					tolerant: typeof options.tolerant === 'boolean' && options.tolerant
				};
				if (this.config.loc && options.source && options.source !== null) {
					this.config.source = String(options.source);
				}
				this.delegate = delegate;
				this.errorHandler = new error_handler_1.ErrorHandler();
				this.errorHandler.tolerant = this.config.tolerant;
				this.scanner = new scanner_1.Scanner(code, this.errorHandler);
				this.scanner.trackComment = this.config.comment;
				this.operatorPrecedence = {
					')': 0,
					';': 0,
					',': 0,
					'=': 0,
					']': 0,
					'||': 1,
					'&&': 2,
					'|': 3,
					'^': 4,
					'&': 5,
					'==': 6,
					'!=': 6,
					'===': 6,
					'!==': 6,
					'<': 7,
					'>': 7,
					'<=': 7,
					'>=': 7,
					'<<': 8,
					'>>': 8,
					'>>>': 8,
					'+': 9,
					'-': 9,
					'*': 11,
					'/': 11,
					'%': 11
				};
				this.lookahead = {
					type: 2,
					value: '',
					lineNumber: this.scanner.lineNumber,
					lineStart: 0,
					start: 0,
					end: 0
				};
				this.hasLineTerminator = false;
				this.context = {
					isModule: false,
					await: false,
					allowIn: true,
					allowStrictDirective: true,
					allowYield: true,
					firstCoverInitializedNameError: null,
					isAssignmentTarget: false,
					isBindingElement: false,
					inFunctionBody: false,
					inIteration: false,
					inSwitch: false,
					labelSet: {},
					strict: false
				};
				this.tokens = [];
				this.startMarker = {
					index: 0,
					line: this.scanner.lineNumber,
					column: 0
				};
				this.lastMarker = {
					index: 0,
					line: this.scanner.lineNumber,
					column: 0
				};
				this.nextToken();
				this.lastMarker = {
					index: this.scanner.index,
					line: this.scanner.lineNumber,
					column: this.scanner.index - this.scanner.lineStart
				};
			}
			Parser.prototype.throwError = function (messageFormat) {
				var values = [];
				for (var _i = 1; _i < arguments.length; _i++) {
					values[_i - 1] = arguments[_i];
				}
				var args = Array.prototype.slice.call(arguments, 1);
				var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
					assert_1.assert(idx < args.length, 'Message reference must be in range');
					return args[idx];
				});
				var index = this.lastMarker.index;
				var line = this.lastMarker.line;
				var column = this.lastMarker.column + 1;
				throw this.errorHandler.createError(index, line, column, msg);
			};
			Parser.prototype.tolerateError = function (messageFormat) {
				var values = [];
				for (var _i = 1; _i < arguments.length; _i++) {
					values[_i - 1] = arguments[_i];
				}
				var args = Array.prototype.slice.call(arguments, 1);
				var msg = messageFormat.replace(/%(\d)/g, function (whole, idx) {
					assert_1.assert(idx < args.length, 'Message reference must be in range');
					return args[idx];
				});
				var index = this.lastMarker.index;
				var line = this.scanner.lineNumber;
				var column = this.lastMarker.column + 1;
				this.errorHandler.tolerateError(index, line, column, msg);
			};

			Parser.prototype.unexpectedTokenError = function (token, message) {
				var msg = message || messages_1.Messages.UnexpectedToken;
				var value;
				if (token) {
					if (!message) {
						msg = token.type === 2 ? messages_1.Messages.UnexpectedEOS : token.type === 3 ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 ? messages_1.Messages.UnexpectedNumber : token.type === 8 ? messages_1.Messages.UnexpectedString : token.type === 10 ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
						if (token.type === 4) {
								if (this.scanner.isFutureReservedWord(token.value)) {
									msg = messages_1.Messages.UnexpectedReserved;
								} else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
									msg = messages_1.Messages.StrictReservedWord;
								}
							}
					}
					value = token.value;
				} else {
					value = 'ILLEGAL';
				}
				msg = msg.replace('%0', value);
				if (token && typeof token.lineNumber === 'number') {
					var index = token.start;
					var line = token.lineNumber;
					var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
					var column = token.start - lastMarkerLineStart + 1;
					return this.errorHandler.createError(index, line, column, msg);
				} else {
					var index = this.lastMarker.index;
					var line = this.lastMarker.line;
					var column = this.lastMarker.column + 1;
					return this.errorHandler.createError(index, line, column, msg);
				}
			};
			Parser.prototype.throwUnexpectedToken = function (token, message) {
				throw this.unexpectedTokenError(token, message);
			};
			Parser.prototype.tolerateUnexpectedToken = function (token, message) {
				this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
			};
			Parser.prototype.collectComments = function () {
				if (!this.config.comment) {
					this.scanner.scanComments();
				} else {
					var comments = this.scanner.scanComments();
					if (comments.length > 0 && this.delegate) {
						for (var i = 0; i < comments.length; ++i) {
							var e = comments[i];
							var node = void 0;
							node = {
								type: e.multiLine ? 'BlockComment' : 'LineComment',
								value: this.scanner.source.slice(e.slice[0], e.slice[1])
							};
							if (this.config.range) {
								node.range = e.range;
							}
							if (this.config.loc) {
								node.loc = e.loc;
							}
							var metadata = {
								start: {
									line: e.loc.start.line,
									column: e.loc.start.column,
									offset: e.range[0]
								},
								end: {
									line: e.loc.end.line,
									column: e.loc.end.column,
									offset: e.range[1]
								}
							};
							this.delegate(node, metadata);
						}
					}
				}
			};

			Parser.prototype.getTokenRaw = function (token) {
				return this.scanner.source.slice(token.start, token.end);
			};
			Parser.prototype.convertToken = function (token) {
				var t = {
					type: token_1.TokenName[token.type],
					value: this.getTokenRaw(token)
				};
				if (this.config.range) {
					t.range = [token.start, token.end];
				}
				if (this.config.loc) {
					t.loc = {
						start: {
							line: this.startMarker.line,
							column: this.startMarker.column
						},
						end: {
							line: this.scanner.lineNumber,
							column: this.scanner.index - this.scanner.lineStart
						}
					};
				}
				if (token.type === 9) {
						var pattern = token.pattern;
						var flags = token.flags;
						t.regex = { pattern: pattern, flags: flags };
					}
				return t;
			};
			Parser.prototype.nextToken = function () {
				var token = this.lookahead;
				this.lastMarker.index = this.scanner.index;
				this.lastMarker.line = this.scanner.lineNumber;
				this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
				this.collectComments();
				if (this.scanner.index !== this.startMarker.index) {
					this.startMarker.index = this.scanner.index;
					this.startMarker.line = this.scanner.lineNumber;
					this.startMarker.column = this.scanner.index - this.scanner.lineStart;
				}
				var next = this.scanner.lex();
				this.hasLineTerminator = token.lineNumber !== next.lineNumber;
				if (next && this.context.strict && next.type === 3) {
						if (this.scanner.isStrictModeReservedWord(next.value)) {
							next.type = 4;
						}
					}
				this.lookahead = next;
				if (this.config.tokens && next.type !== 2) {
						this.tokens.push(this.convertToken(next));
					}
				return token;
			};
			Parser.prototype.nextRegexToken = function () {
				this.collectComments();
				var token = this.scanner.scanRegExp();
				if (this.config.tokens) {
					this.tokens.pop();
					this.tokens.push(this.convertToken(token));
				}

				this.lookahead = token;
				this.nextToken();
				return token;
			};
			Parser.prototype.createNode = function () {
				return {
					index: this.startMarker.index,
					line: this.startMarker.line,
					column: this.startMarker.column
				};
			};
			Parser.prototype.startNode = function (token) {
				return {
					index: token.start,
					line: token.lineNumber,
					column: token.start - token.lineStart
				};
			};
			Parser.prototype.finalize = function (marker, node) {
				if (this.config.range) {
					node.range = [marker.index, this.lastMarker.index];
				}
				if (this.config.loc) {
					node.loc = {
						start: {
							line: marker.line,
							column: marker.column
						},
						end: {
							line: this.lastMarker.line,
							column: this.lastMarker.column
						}
					};
					if (this.config.source) {
						node.loc.source = this.config.source;
					}
				}
				if (this.delegate) {
					var metadata = {
						start: {
							line: marker.line,
							column: marker.column,
							offset: marker.index
						},
						end: {
							line: this.lastMarker.line,
							column: this.lastMarker.column,
							offset: this.lastMarker.index
						}
					};
					this.delegate(node, metadata);
				}
				return node;
			};

			Parser.prototype.expect = function (value) {
				var token = this.nextToken();
				if (token.type !== 7 || token.value !== value) {
					this.throwUnexpectedToken(token);
				}
			};

			Parser.prototype.expectCommaSeparator = function () {
				if (this.config.tolerant) {
					var token = this.lookahead;
					if (token.type === 7 && token.value === ',') {
						this.nextToken();
					} else if (token.type === 7 && token.value === ';') {
						this.nextToken();
						this.tolerateUnexpectedToken(token);
					} else {
						this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
					}
				} else {
					this.expect(',');
				}
			};

			Parser.prototype.expectKeyword = function (keyword) {
				var token = this.nextToken();
				if (token.type !== 4 || token.value !== keyword) {
					this.throwUnexpectedToken(token);
				}
			};

			Parser.prototype.match = function (value) {
				return this.lookahead.type === 7 && this.lookahead.value === value;
			};

			Parser.prototype.matchKeyword = function (keyword) {
				return this.lookahead.type === 4 && this.lookahead.value === keyword;
			};

			Parser.prototype.matchContextualKeyword = function (keyword) {
				return this.lookahead.type === 3 && this.lookahead.value === keyword;
			};

			Parser.prototype.matchAssign = function () {
				if (this.lookahead.type !== 7) {
						return false;
					}
				var op = this.lookahead.value;
				return op === '=' || op === '*=' || op === '**=' || op === '/=' || op === '%=' || op === '+=' || op === '-=' || op === '<<=' || op === '>>=' || op === '>>>=' || op === '&=' || op === '^=' || op === '|=';
			};

			Parser.prototype.isolateCoverGrammar = function (parseFunction) {
				var previousIsBindingElement = this.context.isBindingElement;
				var previousIsAssignmentTarget = this.context.isAssignmentTarget;
				var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
				this.context.isBindingElement = true;
				this.context.isAssignmentTarget = true;
				this.context.firstCoverInitializedNameError = null;
				var result = parseFunction.call(this);
				if (this.context.firstCoverInitializedNameError !== null) {
					this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
				}
				this.context.isBindingElement = previousIsBindingElement;
				this.context.isAssignmentTarget = previousIsAssignmentTarget;
				this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
				return result;
			};
			Parser.prototype.inheritCoverGrammar = function (parseFunction) {
				var previousIsBindingElement = this.context.isBindingElement;
				var previousIsAssignmentTarget = this.context.isAssignmentTarget;
				var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
				this.context.isBindingElement = true;
				this.context.isAssignmentTarget = true;
				this.context.firstCoverInitializedNameError = null;
				var result = parseFunction.call(this);
				this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
				this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
				this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
				return result;
			};
			Parser.prototype.consumeSemicolon = function () {
				if (this.match(';')) {
					this.nextToken();
				} else if (!this.hasLineTerminator) {
					if (this.lookahead.type !== 2 && !this.match('}')) {
						this.throwUnexpectedToken(this.lookahead);
					}
					this.lastMarker.index = this.startMarker.index;
					this.lastMarker.line = this.startMarker.line;
					this.lastMarker.column = this.startMarker.column;
				}
			};

			Parser.prototype.parsePrimaryExpression = function () {
				var node = this.createNode();
				var expr;
				var token, raw;
				switch (this.lookahead.type) {
					case 3:
						if ((this.context.isModule || this.context.await) && this.lookahead.value === 'await') {
							this.tolerateUnexpectedToken(this.lookahead);
						}
						expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
						break;
					case 6:
					case 8:
						if (this.context.strict && this.lookahead.octal) {
							this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
						}
						this.context.isAssignmentTarget = false;
						this.context.isBindingElement = false;
						token = this.nextToken();
						raw = this.getTokenRaw(token);
						expr = this.finalize(node, new Node.Literal(token.value, raw));
						break;
					case 1:
						this.context.isAssignmentTarget = false;
						this.context.isBindingElement = false;
						token = this.nextToken();
						raw = this.getTokenRaw(token);
						expr = this.finalize(node, new Node.Literal(token.value === 'true', raw));
						break;
					case 5:
						this.context.isAssignmentTarget = false;
						this.context.isBindingElement = false;
						token = this.nextToken();
						raw = this.getTokenRaw(token);
						expr = this.finalize(node, new Node.Literal(null, raw));
						break;
					case 10:
						expr = this.parseTemplateLiteral();
						break;
					case 7:
						switch (this.lookahead.value) {
							case '(':
								this.context.isBindingElement = false;
								expr = this.inheritCoverGrammar(this.parseGroupExpression);
								break;
							case '[':
								expr = this.inheritCoverGrammar(this.parseArrayInitializer);
								break;
							case '{':
								expr = this.inheritCoverGrammar(this.parseObjectInitializer);
								break;
							case '/':
							case '/=':
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								this.scanner.index = this.startMarker.index;
								token = this.nextRegexToken();
								raw = this.getTokenRaw(token);
								expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
								break;
							default:
								expr = this.throwUnexpectedToken(this.nextToken());
						}
						break;
					case 4:
						if (!this.context.strict && this.context.allowYield && this.matchKeyword('yield')) {
							expr = this.parseIdentifierName();
						} else if (!this.context.strict && this.matchKeyword('let')) {
							expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
						} else {
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
							if (this.matchKeyword('function')) {
								expr = this.parseFunctionExpression();
							} else if (this.matchKeyword('this')) {
								this.nextToken();
								expr = this.finalize(node, new Node.ThisExpression());
							} else if (this.matchKeyword('class')) {
								expr = this.parseClassExpression();
							} else {
								expr = this.throwUnexpectedToken(this.nextToken());
							}
						}
						break;
					default:
						expr = this.throwUnexpectedToken(this.nextToken());
				}
				return expr;
			};

			Parser.prototype.parseSpreadElement = function () {
				var node = this.createNode();
				this.expect('...');
				var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
				return this.finalize(node, new Node.SpreadElement(arg));
			};
			Parser.prototype.parseArrayInitializer = function () {
				var node = this.createNode();
				var elements = [];
				this.expect('[');
				while (!this.match(']')) {
					if (this.match(',')) {
						this.nextToken();
						elements.push(null);
					} else if (this.match('...')) {
						var element = this.parseSpreadElement();
						if (!this.match(']')) {
							this.context.isAssignmentTarget = false;
							this.context.isBindingElement = false;
							this.expect(',');
						}
						elements.push(element);
					} else {
						elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
						if (!this.match(']')) {
							this.expect(',');
						}
					}
				}
				this.expect(']');
				return this.finalize(node, new Node.ArrayExpression(elements));
			};

			Parser.prototype.parsePropertyMethod = function (params) {
				this.context.isAssignmentTarget = false;
				this.context.isBindingElement = false;
				var previousStrict = this.context.strict;
				var previousAllowStrictDirective = this.context.allowStrictDirective;
				this.context.allowStrictDirective = params.simple;
				var body = this.isolateCoverGrammar(this.parseFunctionSourceElements);
				if (this.context.strict && params.firstRestricted) {
					this.tolerateUnexpectedToken(params.firstRestricted, params.message);
				}
				if (this.context.strict && params.stricted) {
					this.tolerateUnexpectedToken(params.stricted, params.message);
				}
				this.context.strict = previousStrict;
				this.context.allowStrictDirective = previousAllowStrictDirective;
				return body;
			};
			Parser.prototype.parsePropertyMethodFunction = function () {
				var isGenerator = false;
				var node = this.createNode();
				var previousAllowYield = this.context.allowYield;
				this.context.allowYield = false;
				var params = this.parseFormalParameters();
				var method = this.parsePropertyMethod(params);
				this.context.allowYield = previousAllowYield;
				return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
			};
			Parser.prototype.parsePropertyMethodAsyncFunction = function () {
				var node = this.createNode();
				var previousAllowYield = this.context.allowYield;
				var previousAwait = this.context.await;
				this.context.allowYield = false;
				this.context.await = true;
				var params = this.parseFormalParameters();
				var method = this.parsePropertyMethod(params);
				this.context.allowYield = previousAllowYield;
				this.context.await = previousAwait;
				return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
			};
			Parser.prototype.parseObjectPropertyKey = function () {
				var node = this.createNode();
				var token = this.nextToken();
				var key;
				switch (token.type) {
					case 8:
					case 6:
						if (this.context.strict && token.octal) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
						}
						var raw = this.getTokenRaw(token);
						key = this.finalize(node, new Node.Literal(token.value, raw));
						break;
					case 3:
					case 1:
					case 5:
					case 4:
						key = this.finalize(node, new Node.Identifier(token.value));
						break;
					case 7:
						if (token.value === '[') {
							key = this.isolateCoverGrammar(this.parseAssignmentExpression);
							this.expect(']');
						} else {
							key = this.throwUnexpectedToken(token);
						}
						break;
					default:
						key = this.throwUnexpectedToken(token);
				}
				return key;
			};
			Parser.prototype.isPropertyKey = function (key, value) {
				return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
			};
			Parser.prototype.parseObjectProperty = function (hasProto) {
				var node = this.createNode();
				var token = this.lookahead;
				var kind;
				var key = null;
				var value = null;
				var computed = false;
				var method = false;
				var shorthand = false;
				var isAsync = false;
				if (token.type === 3) {
						var id = token.value;
						this.nextToken();
						computed = this.match('[');
						isAsync = !this.hasLineTerminator && id === 'async' && !this.match(':') && !this.match('(') && !this.match('*');
						key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
					} else if (this.match('*')) {
					this.nextToken();
				} else {
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
				}
				var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
				if (token.type === 3 && !isAsync && token.value === 'get' && lookaheadPropertyKey) {
					kind = 'get';
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					this.context.allowYield = false;
					value = this.parseGetterMethod();
				} else if (token.type === 3 && !isAsync && token.value === 'set' && lookaheadPropertyKey) {
					kind = 'set';
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					value = this.parseSetterMethod();
				} else if (token.type === 7 && token.value === '*' && lookaheadPropertyKey) {
					kind = 'init';
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					value = this.parseGeneratorMethod();
					method = true;
				} else {
					if (!key) {
						this.throwUnexpectedToken(this.lookahead);
					}
					kind = 'init';
					if (this.match(':') && !isAsync) {
						if (!computed && this.isPropertyKey(key, '__proto__')) {
							if (hasProto.value) {
								this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
							}
							hasProto.value = true;
						}
						this.nextToken();
						value = this.inheritCoverGrammar(this.parseAssignmentExpression);
					} else if (this.match('(')) {
						value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
						method = true;
					} else if (token.type === 3) {
							var id = this.finalize(node, new Node.Identifier(token.value));
							if (this.match('=')) {
								this.context.firstCoverInitializedNameError = this.lookahead;
								this.nextToken();
								shorthand = true;
								var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
								value = this.finalize(node, new Node.AssignmentPattern(id, init));
							} else {
								shorthand = true;
								value = id;
							}
						} else {
						this.throwUnexpectedToken(this.nextToken());
					}
				}
				return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
			};
			Parser.prototype.parseObjectInitializer = function () {
				var node = this.createNode();
				this.expect('{');
				var properties = [];
				var hasProto = { value: false };
				while (!this.match('}')) {
					properties.push(this.parseObjectProperty(hasProto));
					if (!this.match('}')) {
						this.expectCommaSeparator();
					}
				}
				this.expect('}');
				return this.finalize(node, new Node.ObjectExpression(properties));
			};

			Parser.prototype.parseTemplateHead = function () {
				assert_1.assert(this.lookahead.head, 'Template literal must start with a template head');
				var node = this.createNode();
				var token = this.nextToken();
				var raw = token.value;
				var cooked = token.cooked;
				return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
			};
			Parser.prototype.parseTemplateElement = function () {
				if (this.lookahead.type !== 10) {
						this.throwUnexpectedToken();
					}
				var node = this.createNode();
				var token = this.nextToken();
				var raw = token.value;
				var cooked = token.cooked;
				return this.finalize(node, new Node.TemplateElement({ raw: raw, cooked: cooked }, token.tail));
			};
			Parser.prototype.parseTemplateLiteral = function () {
				var node = this.createNode();
				var expressions = [];
				var quasis = [];
				var quasi = this.parseTemplateHead();
				quasis.push(quasi);
				while (!quasi.tail) {
					expressions.push(this.parseExpression());
					quasi = this.parseTemplateElement();
					quasis.push(quasi);
				}
				return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
			};

			Parser.prototype.reinterpretExpressionAsPattern = function (expr) {
				switch (expr.type) {
					case syntax_1.Syntax.Identifier:
					case syntax_1.Syntax.MemberExpression:
					case syntax_1.Syntax.RestElement:
					case syntax_1.Syntax.AssignmentPattern:
						break;
					case syntax_1.Syntax.SpreadElement:
						expr.type = syntax_1.Syntax.RestElement;
						this.reinterpretExpressionAsPattern(expr.argument);
						break;
					case syntax_1.Syntax.ArrayExpression:
						expr.type = syntax_1.Syntax.ArrayPattern;
						for (var i = 0; i < expr.elements.length; i++) {
							if (expr.elements[i] !== null) {
								this.reinterpretExpressionAsPattern(expr.elements[i]);
							}
						}
						break;
					case syntax_1.Syntax.ObjectExpression:
						expr.type = syntax_1.Syntax.ObjectPattern;
						for (var i = 0; i < expr.properties.length; i++) {
							this.reinterpretExpressionAsPattern(expr.properties[i].value);
						}
						break;
					case syntax_1.Syntax.AssignmentExpression:
						expr.type = syntax_1.Syntax.AssignmentPattern;
						delete expr.operator;
						this.reinterpretExpressionAsPattern(expr.left);
						break;
					default:
						break;
				}
			};
			Parser.prototype.parseGroupExpression = function () {
				var expr;
				this.expect('(');
				if (this.match(')')) {
					this.nextToken();
					if (!this.match('=>')) {
						this.expect('=>');
					}
					expr = {
						type: ArrowParameterPlaceHolder,
						params: [],
						async: false
					};
				} else {
					var startToken = this.lookahead;
					var params = [];
					if (this.match('...')) {
						expr = this.parseRestElement(params);
						this.expect(')');
						if (!this.match('=>')) {
							this.expect('=>');
						}
						expr = {
							type: ArrowParameterPlaceHolder,
							params: [expr],
							async: false
						};
					} else {
						var arrow = false;
						this.context.isBindingElement = true;
						expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
						if (this.match(',')) {
							var expressions = [];
							this.context.isAssignmentTarget = false;
							expressions.push(expr);
							while (this.lookahead.type !== 2) {
								if (!this.match(',')) {
									break;
								}
								this.nextToken();
								if (this.match(')')) {
									this.nextToken();
									for (var i = 0; i < expressions.length; i++) {
										this.reinterpretExpressionAsPattern(expressions[i]);
									}
									arrow = true;
									expr = {
										type: ArrowParameterPlaceHolder,
										params: expressions,
										async: false
									};
								} else if (this.match('...')) {
									if (!this.context.isBindingElement) {
										this.throwUnexpectedToken(this.lookahead);
									}
									expressions.push(this.parseRestElement(params));
									this.expect(')');
									if (!this.match('=>')) {
										this.expect('=>');
									}
									this.context.isBindingElement = false;
									for (var i = 0; i < expressions.length; i++) {
										this.reinterpretExpressionAsPattern(expressions[i]);
									}
									arrow = true;
									expr = {
										type: ArrowParameterPlaceHolder,
										params: expressions,
										async: false
									};
								} else {
									expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
								}
								if (arrow) {
									break;
								}
							}
							if (!arrow) {
								expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
							}
						}
						if (!arrow) {
							this.expect(')');
							if (this.match('=>')) {
								if (expr.type === syntax_1.Syntax.Identifier && expr.name === 'yield') {
									arrow = true;
									expr = {
										type: ArrowParameterPlaceHolder,
										params: [expr],
										async: false
									};
								}
								if (!arrow) {
									if (!this.context.isBindingElement) {
										this.throwUnexpectedToken(this.lookahead);
									}
									if (expr.type === syntax_1.Syntax.SequenceExpression) {
										for (var i = 0; i < expr.expressions.length; i++) {
											this.reinterpretExpressionAsPattern(expr.expressions[i]);
										}
									} else {
										this.reinterpretExpressionAsPattern(expr);
									}
									var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr];
									expr = {
										type: ArrowParameterPlaceHolder,
										params: parameters,
										async: false
									};
								}
							}
							this.context.isBindingElement = false;
						}
					}
				}
				return expr;
			};

			Parser.prototype.parseArguments = function () {
				this.expect('(');
				var args = [];
				if (!this.match(')')) {
					while (true) {
						var expr = this.match('...') ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
						args.push(expr);
						if (this.match(')')) {
							break;
						}
						this.expectCommaSeparator();
						if (this.match(')')) {
							break;
						}
					}
				}
				this.expect(')');
				return args;
			};
			Parser.prototype.isIdentifierName = function (token) {
				return token.type === 3 || token.type === 4 || token.type === 1 || token.type === 5;
			};
			Parser.prototype.parseIdentifierName = function () {
				var node = this.createNode();
				var token = this.nextToken();
				if (!this.isIdentifierName(token)) {
					this.throwUnexpectedToken(token);
				}
				return this.finalize(node, new Node.Identifier(token.value));
			};
			Parser.prototype.parseNewExpression = function () {
				var node = this.createNode();
				var id = this.parseIdentifierName();
				assert_1.assert(id.name === 'new', 'New expression must start with `new`');
				var expr;
				if (this.match('.')) {
					this.nextToken();
					if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === 'target') {
						var property = this.parseIdentifierName();
						expr = new Node.MetaProperty(id, property);
					} else {
						this.throwUnexpectedToken(this.lookahead);
					}
				} else {
					var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
					var args = this.match('(') ? this.parseArguments() : [];
					expr = new Node.NewExpression(callee, args);
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
				}
				return this.finalize(node, expr);
			};
			Parser.prototype.parseAsyncArgument = function () {
				var arg = this.parseAssignmentExpression();
				this.context.firstCoverInitializedNameError = null;
				return arg;
			};
			Parser.prototype.parseAsyncArguments = function () {
				this.expect('(');
				var args = [];
				if (!this.match(')')) {
					while (true) {
						var expr = this.match('...') ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
						args.push(expr);
						if (this.match(')')) {
							break;
						}
						this.expectCommaSeparator();
						if (this.match(')')) {
							break;
						}
					}
				}
				this.expect(')');
				return args;
			};
			Parser.prototype.parseLeftHandSideExpressionAllowCall = function () {
				var startToken = this.lookahead;
				var maybeAsync = this.matchContextualKeyword('async');
				var previousAllowIn = this.context.allowIn;
				this.context.allowIn = true;
				var expr;
				if (this.matchKeyword('super') && this.context.inFunctionBody) {
					expr = this.createNode();
					this.nextToken();
					expr = this.finalize(expr, new Node.Super());
					if (!this.match('(') && !this.match('.') && !this.match('[')) {
						this.throwUnexpectedToken(this.lookahead);
					}
				} else {
					expr = this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
				}
				while (true) {
					if (this.match('.')) {
						this.context.isBindingElement = false;
						this.context.isAssignmentTarget = true;
						this.expect('.');
						var property = this.parseIdentifierName();
						expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
					} else if (this.match('(')) {
						var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
						this.context.isBindingElement = false;
						this.context.isAssignmentTarget = false;
						var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
						expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
						if (asyncArrow && this.match('=>')) {
							for (var i = 0; i < args.length; ++i) {
								this.reinterpretExpressionAsPattern(args[i]);
							}
							expr = {
								type: ArrowParameterPlaceHolder,
								params: args,
								async: true
							};
						}
					} else if (this.match('[')) {
						this.context.isBindingElement = false;
						this.context.isAssignmentTarget = true;
						this.expect('[');
						var property = this.isolateCoverGrammar(this.parseExpression);
						this.expect(']');
						expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
					} else if (this.lookahead.type === 10 && this.lookahead.head) {
						var quasi = this.parseTemplateLiteral();
						expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
					} else {
						break;
					}
				}
				this.context.allowIn = previousAllowIn;
				return expr;
			};
			Parser.prototype.parseSuper = function () {
				var node = this.createNode();
				this.expectKeyword('super');
				if (!this.match('[') && !this.match('.')) {
					this.throwUnexpectedToken(this.lookahead);
				}
				return this.finalize(node, new Node.Super());
			};
			Parser.prototype.parseLeftHandSideExpression = function () {
				assert_1.assert(this.context.allowIn, 'callee of new expression always allow in keyword.');
				var node = this.startNode(this.lookahead);
				var expr = this.matchKeyword('super') && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword('new') ? this.parseNewExpression : this.parsePrimaryExpression);
				while (true) {
					if (this.match('[')) {
						this.context.isBindingElement = false;
						this.context.isAssignmentTarget = true;
						this.expect('[');
						var property = this.isolateCoverGrammar(this.parseExpression);
						this.expect(']');
						expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
					} else if (this.match('.')) {
						this.context.isBindingElement = false;
						this.context.isAssignmentTarget = true;
						this.expect('.');
						var property = this.parseIdentifierName();
						expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
					} else if (this.lookahead.type === 10 && this.lookahead.head) {
						var quasi = this.parseTemplateLiteral();
						expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
					} else {
						break;
					}
				}
				return expr;
			};

			Parser.prototype.parseUpdateExpression = function () {
				var expr;
				var startToken = this.lookahead;
				if (this.match('++') || this.match('--')) {
					var node = this.startNode(startToken);
					var token = this.nextToken();
					expr = this.inheritCoverGrammar(this.parseUnaryExpression);
					if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
						this.tolerateError(messages_1.Messages.StrictLHSPrefix);
					}
					if (!this.context.isAssignmentTarget) {
						this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
					}
					var prefix = true;
					expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
				} else {
					expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
					if (!this.hasLineTerminator && this.lookahead.type === 7) {
							if (this.match('++') || this.match('--')) {
								if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
									this.tolerateError(messages_1.Messages.StrictLHSPostfix);
								}
								if (!this.context.isAssignmentTarget) {
									this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
								}
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
								var operator = this.nextToken().value;
								var prefix = false;
								expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
							}
						}
				}
				return expr;
			};

			Parser.prototype.parseAwaitExpression = function () {
				var node = this.createNode();
				this.nextToken();
				var argument = this.parseUnaryExpression();
				return this.finalize(node, new Node.AwaitExpression(argument));
			};
			Parser.prototype.parseUnaryExpression = function () {
				var expr;
				if (this.match('+') || this.match('-') || this.match('~') || this.match('!') || this.matchKeyword('delete') || this.matchKeyword('void') || this.matchKeyword('typeof')) {
					var node = this.startNode(this.lookahead);
					var token = this.nextToken();
					expr = this.inheritCoverGrammar(this.parseUnaryExpression);
					expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
					if (this.context.strict && expr.operator === 'delete' && expr.argument.type === syntax_1.Syntax.Identifier) {
						this.tolerateError(messages_1.Messages.StrictDelete);
					}
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
				} else if (this.context.await && this.matchContextualKeyword('await')) {
					expr = this.parseAwaitExpression();
				} else {
					expr = this.parseUpdateExpression();
				}
				return expr;
			};
			Parser.prototype.parseExponentiationExpression = function () {
				var startToken = this.lookahead;
				var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
				if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match('**')) {
					this.nextToken();
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
					var left = expr;
					var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
					expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression('**', left, right));
				}
				return expr;
			};

			Parser.prototype.binaryPrecedence = function (token) {
				var op = token.value;
				var precedence;
				if (token.type === 7) {
						precedence = this.operatorPrecedence[op] || 0;
					} else if (token.type === 4) {
						precedence = op === 'instanceof' || this.context.allowIn && op === 'in' ? 7 : 0;
					} else {
					precedence = 0;
				}
				return precedence;
			};
			Parser.prototype.parseBinaryExpression = function () {
				var startToken = this.lookahead;
				var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
				var token = this.lookahead;
				var prec = this.binaryPrecedence(token);
				if (prec > 0) {
					this.nextToken();
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
					var markers = [startToken, this.lookahead];
					var left = expr;
					var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
					var stack = [left, token.value, right];
					var precedences = [prec];
					while (true) {
						prec = this.binaryPrecedence(this.lookahead);
						if (prec <= 0) {
							break;
						}

						while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
							right = stack.pop();
							var operator = stack.pop();
							precedences.pop();
							left = stack.pop();
							markers.pop();
							var node = this.startNode(markers[markers.length - 1]);
							stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
						}

						stack.push(this.nextToken().value);
						precedences.push(prec);
						markers.push(this.lookahead);
						stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
					}

					var i = stack.length - 1;
					expr = stack[i];
					markers.pop();
					while (i > 1) {
						var node = this.startNode(markers.pop());
						var operator = stack[i - 1];
						expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
						i -= 2;
					}
				}
				return expr;
			};

			Parser.prototype.parseConditionalExpression = function () {
				var startToken = this.lookahead;
				var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
				if (this.match('?')) {
					this.nextToken();
					var previousAllowIn = this.context.allowIn;
					this.context.allowIn = true;
					var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
					this.context.allowIn = previousAllowIn;
					this.expect(':');
					var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
					expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
					this.context.isAssignmentTarget = false;
					this.context.isBindingElement = false;
				}
				return expr;
			};

			Parser.prototype.checkPatternParam = function (options, param) {
				switch (param.type) {
					case syntax_1.Syntax.Identifier:
						this.validateParam(options, param, param.name);
						break;
					case syntax_1.Syntax.RestElement:
						this.checkPatternParam(options, param.argument);
						break;
					case syntax_1.Syntax.AssignmentPattern:
						this.checkPatternParam(options, param.left);
						break;
					case syntax_1.Syntax.ArrayPattern:
						for (var i = 0; i < param.elements.length; i++) {
							if (param.elements[i] !== null) {
								this.checkPatternParam(options, param.elements[i]);
							}
						}
						break;
					case syntax_1.Syntax.ObjectPattern:
						for (var i = 0; i < param.properties.length; i++) {
							this.checkPatternParam(options, param.properties[i].value);
						}
						break;
					default:
						break;
				}
				options.simple = options.simple && param instanceof Node.Identifier;
			};
			Parser.prototype.reinterpretAsCoverFormalsList = function (expr) {
				var params = [expr];
				var options;
				var asyncArrow = false;
				switch (expr.type) {
					case syntax_1.Syntax.Identifier:
						break;
					case ArrowParameterPlaceHolder:
						params = expr.params;
						asyncArrow = expr.async;
						break;
					default:
						return null;
				}
				options = {
					simple: true,
					paramSet: {}
				};
				for (var i = 0; i < params.length; ++i) {
					var param = params[i];
					if (param.type === syntax_1.Syntax.AssignmentPattern) {
						if (param.right.type === syntax_1.Syntax.YieldExpression) {
							if (param.right.argument) {
								this.throwUnexpectedToken(this.lookahead);
							}
							param.right.type = syntax_1.Syntax.Identifier;
							param.right.name = 'yield';
							delete param.right.argument;
							delete param.right.delegate;
						}
					} else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === 'await') {
						this.throwUnexpectedToken(this.lookahead);
					}
					this.checkPatternParam(options, param);
					params[i] = param;
				}
				if (this.context.strict || !this.context.allowYield) {
					for (var i = 0; i < params.length; ++i) {
						var param = params[i];
						if (param.type === syntax_1.Syntax.YieldExpression) {
							this.throwUnexpectedToken(this.lookahead);
						}
					}
				}
				if (options.message === messages_1.Messages.StrictParamDupe) {
					var token = this.context.strict ? options.stricted : options.firstRestricted;
					this.throwUnexpectedToken(token, options.message);
				}
				return {
					simple: options.simple,
					params: params,
					stricted: options.stricted,
					firstRestricted: options.firstRestricted,
					message: options.message
				};
			};
			Parser.prototype.parseAssignmentExpression = function () {
				var expr;
				if (!this.context.allowYield && this.matchKeyword('yield')) {
					expr = this.parseYieldExpression();
				} else {
					var startToken = this.lookahead;
					var token = startToken;
					expr = this.parseConditionalExpression();
					if (token.type === 3 && token.lineNumber === this.lookahead.lineNumber && token.value === 'async') {
						if (this.lookahead.type === 3 || this.matchKeyword('yield')) {
							var arg = this.parsePrimaryExpression();
							this.reinterpretExpressionAsPattern(arg);
							expr = {
								type: ArrowParameterPlaceHolder,
								params: [arg],
								async: true
							};
						}
					}
					if (expr.type === ArrowParameterPlaceHolder || this.match('=>')) {
						this.context.isAssignmentTarget = false;
						this.context.isBindingElement = false;
						var isAsync = expr.async;
						var list = this.reinterpretAsCoverFormalsList(expr);
						if (list) {
							if (this.hasLineTerminator) {
								this.tolerateUnexpectedToken(this.lookahead);
							}
							this.context.firstCoverInitializedNameError = null;
							var previousStrict = this.context.strict;
							var previousAllowStrictDirective = this.context.allowStrictDirective;
							this.context.allowStrictDirective = list.simple;
							var previousAllowYield = this.context.allowYield;
							var previousAwait = this.context.await;
							this.context.allowYield = true;
							this.context.await = isAsync;
							var node = this.startNode(startToken);
							this.expect('=>');
							var body = void 0;
							if (this.match('{')) {
								var previousAllowIn = this.context.allowIn;
								this.context.allowIn = true;
								body = this.parseFunctionSourceElements();
								this.context.allowIn = previousAllowIn;
							} else {
								body = this.isolateCoverGrammar(this.parseAssignmentExpression);
							}
							var expression = body.type !== syntax_1.Syntax.BlockStatement;
							if (this.context.strict && list.firstRestricted) {
								this.throwUnexpectedToken(list.firstRestricted, list.message);
							}
							if (this.context.strict && list.stricted) {
								this.tolerateUnexpectedToken(list.stricted, list.message);
							}
							expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body, expression));
							this.context.strict = previousStrict;
							this.context.allowStrictDirective = previousAllowStrictDirective;
							this.context.allowYield = previousAllowYield;
							this.context.await = previousAwait;
						}
					} else {
						if (this.matchAssign()) {
							if (!this.context.isAssignmentTarget) {
								this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
							}
							if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
								var id = expr;
								if (this.scanner.isRestrictedWord(id.name)) {
									this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
								}
								if (this.scanner.isStrictModeReservedWord(id.name)) {
									this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
								}
							}
							if (!this.match('=')) {
								this.context.isAssignmentTarget = false;
								this.context.isBindingElement = false;
							} else {
								this.reinterpretExpressionAsPattern(expr);
							}
							token = this.nextToken();
							var operator = token.value;
							var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
							expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
							this.context.firstCoverInitializedNameError = null;
						}
					}
				}
				return expr;
			};

			Parser.prototype.parseExpression = function () {
				var startToken = this.lookahead;
				var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
				if (this.match(',')) {
					var expressions = [];
					expressions.push(expr);
					while (this.lookahead.type !== 2) {
						if (!this.match(',')) {
							break;
						}
						this.nextToken();
						expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
					}
					expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
				}
				return expr;
			};

			Parser.prototype.parseStatementListItem = function () {
				var statement;
				this.context.isAssignmentTarget = true;
				this.context.isBindingElement = true;
				if (this.lookahead.type === 4) {
						switch (this.lookahead.value) {
							case 'export':
								if (!this.context.isModule) {
									this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
								}
								statement = this.parseExportDeclaration();
								break;
							case 'import':
								if (!this.context.isModule) {
									this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
								}
								statement = this.parseImportDeclaration();
								break;
							case 'const':
								statement = this.parseLexicalDeclaration({ inFor: false });
								break;
							case 'function':
								statement = this.parseFunctionDeclaration();
								break;
							case 'class':
								statement = this.parseClassDeclaration();
								break;
							case 'let':
								statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
								break;
							default:
								statement = this.parseStatement();
								break;
						}
					} else {
					statement = this.parseStatement();
				}
				return statement;
			};
			Parser.prototype.parseBlock = function () {
				var node = this.createNode();
				this.expect('{');
				var block = [];
				while (true) {
					if (this.match('}')) {
						break;
					}
					block.push(this.parseStatementListItem());
				}
				this.expect('}');
				return this.finalize(node, new Node.BlockStatement(block));
			};

			Parser.prototype.parseLexicalBinding = function (kind, options) {
				var node = this.createNode();
				var params = [];
				var id = this.parsePattern(params, kind);
				if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
					if (this.scanner.isRestrictedWord(id.name)) {
						this.tolerateError(messages_1.Messages.StrictVarName);
					}
				}
				var init = null;
				if (kind === 'const') {
					if (!this.matchKeyword('in') && !this.matchContextualKeyword('of')) {
						if (this.match('=')) {
							this.nextToken();
							init = this.isolateCoverGrammar(this.parseAssignmentExpression);
						} else {
							this.throwError(messages_1.Messages.DeclarationMissingInitializer, 'const');
						}
					}
				} else if (!options.inFor && id.type !== syntax_1.Syntax.Identifier || this.match('=')) {
					this.expect('=');
					init = this.isolateCoverGrammar(this.parseAssignmentExpression);
				}
				return this.finalize(node, new Node.VariableDeclarator(id, init));
			};
			Parser.prototype.parseBindingList = function (kind, options) {
				var list = [this.parseLexicalBinding(kind, options)];
				while (this.match(',')) {
					this.nextToken();
					list.push(this.parseLexicalBinding(kind, options));
				}
				return list;
			};
			Parser.prototype.isLexicalDeclaration = function () {
				var state = this.scanner.saveState();
				this.scanner.scanComments();
				var next = this.scanner.lex();
				this.scanner.restoreState(state);
				return next.type === 3 || next.type === 7 && next.value === '[' || next.type === 7 && next.value === '{' || next.type === 4 && next.value === 'let' || next.type === 4 && next.value === 'yield';
			};
			Parser.prototype.parseLexicalDeclaration = function (options) {
				var node = this.createNode();
				var kind = this.nextToken().value;
				assert_1.assert(kind === 'let' || kind === 'const', 'Lexical declaration must be either let or const');
				var declarations = this.parseBindingList(kind, options);
				this.consumeSemicolon();
				return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
			};

			Parser.prototype.parseBindingRestElement = function (params, kind) {
				var node = this.createNode();
				this.expect('...');
				var arg = this.parsePattern(params, kind);
				return this.finalize(node, new Node.RestElement(arg));
			};
			Parser.prototype.parseArrayPattern = function (params, kind) {
				var node = this.createNode();
				this.expect('[');
				var elements = [];
				while (!this.match(']')) {
					if (this.match(',')) {
						this.nextToken();
						elements.push(null);
					} else {
						if (this.match('...')) {
							elements.push(this.parseBindingRestElement(params, kind));
							break;
						} else {
							elements.push(this.parsePatternWithDefault(params, kind));
						}
						if (!this.match(']')) {
							this.expect(',');
						}
					}
				}
				this.expect(']');
				return this.finalize(node, new Node.ArrayPattern(elements));
			};
			Parser.prototype.parsePropertyPattern = function (params, kind) {
				var node = this.createNode();
				var computed = false;
				var shorthand = false;
				var method = false;
				var key;
				var value;
				if (this.lookahead.type === 3) {
						var keyToken = this.lookahead;
						key = this.parseVariableIdentifier();
						var init = this.finalize(node, new Node.Identifier(keyToken.value));
						if (this.match('=')) {
							params.push(keyToken);
							shorthand = true;
							this.nextToken();
							var expr = this.parseAssignmentExpression();
							value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
						} else if (!this.match(':')) {
							params.push(keyToken);
							shorthand = true;
							value = init;
						} else {
							this.expect(':');
							value = this.parsePatternWithDefault(params, kind);
						}
					} else {
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					this.expect(':');
					value = this.parsePatternWithDefault(params, kind);
				}
				return this.finalize(node, new Node.Property('init', key, computed, value, method, shorthand));
			};
			Parser.prototype.parseObjectPattern = function (params, kind) {
				var node = this.createNode();
				var properties = [];
				this.expect('{');
				while (!this.match('}')) {
					properties.push(this.parsePropertyPattern(params, kind));
					if (!this.match('}')) {
						this.expect(',');
					}
				}
				this.expect('}');
				return this.finalize(node, new Node.ObjectPattern(properties));
			};
			Parser.prototype.parsePattern = function (params, kind) {
				var pattern;
				if (this.match('[')) {
					pattern = this.parseArrayPattern(params, kind);
				} else if (this.match('{')) {
					pattern = this.parseObjectPattern(params, kind);
				} else {
					if (this.matchKeyword('let') && (kind === 'const' || kind === 'let')) {
						this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
					}
					params.push(this.lookahead);
					pattern = this.parseVariableIdentifier(kind);
				}
				return pattern;
			};
			Parser.prototype.parsePatternWithDefault = function (params, kind) {
				var startToken = this.lookahead;
				var pattern = this.parsePattern(params, kind);
				if (this.match('=')) {
					this.nextToken();
					var previousAllowYield = this.context.allowYield;
					this.context.allowYield = true;
					var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
					this.context.allowYield = previousAllowYield;
					pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
				}
				return pattern;
			};

			Parser.prototype.parseVariableIdentifier = function (kind) {
				var node = this.createNode();
				var token = this.nextToken();
				if (token.type === 4 && token.value === 'yield') {
					if (this.context.strict) {
						this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
					} else if (!this.context.allowYield) {
						this.throwUnexpectedToken(token);
					}
				} else if (token.type !== 3) {
						if (this.context.strict && token.type === 4 && this.scanner.isStrictModeReservedWord(token.value)) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
						} else {
							if (this.context.strict || token.value !== 'let' || kind !== 'var') {
								this.throwUnexpectedToken(token);
							}
						}
					} else if ((this.context.isModule || this.context.await) && token.type === 3 && token.value === 'await') {
					this.tolerateUnexpectedToken(token);
				}
				return this.finalize(node, new Node.Identifier(token.value));
			};
			Parser.prototype.parseVariableDeclaration = function (options) {
				var node = this.createNode();
				var params = [];
				var id = this.parsePattern(params, 'var');
				if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
					if (this.scanner.isRestrictedWord(id.name)) {
						this.tolerateError(messages_1.Messages.StrictVarName);
					}
				}
				var init = null;
				if (this.match('=')) {
					this.nextToken();
					init = this.isolateCoverGrammar(this.parseAssignmentExpression);
				} else if (id.type !== syntax_1.Syntax.Identifier && !options.inFor) {
					this.expect('=');
				}
				return this.finalize(node, new Node.VariableDeclarator(id, init));
			};
			Parser.prototype.parseVariableDeclarationList = function (options) {
				var opt = { inFor: options.inFor };
				var list = [];
				list.push(this.parseVariableDeclaration(opt));
				while (this.match(',')) {
					this.nextToken();
					list.push(this.parseVariableDeclaration(opt));
				}
				return list;
			};
			Parser.prototype.parseVariableStatement = function () {
				var node = this.createNode();
				this.expectKeyword('var');
				var declarations = this.parseVariableDeclarationList({ inFor: false });
				this.consumeSemicolon();
				return this.finalize(node, new Node.VariableDeclaration(declarations, 'var'));
			};

			Parser.prototype.parseEmptyStatement = function () {
				var node = this.createNode();
				this.expect(';');
				return this.finalize(node, new Node.EmptyStatement());
			};

			Parser.prototype.parseExpressionStatement = function () {
				var node = this.createNode();
				var expr = this.parseExpression();
				this.consumeSemicolon();
				return this.finalize(node, new Node.ExpressionStatement(expr));
			};

			Parser.prototype.parseIfClause = function () {
				if (this.context.strict && this.matchKeyword('function')) {
					this.tolerateError(messages_1.Messages.StrictFunction);
				}
				return this.parseStatement();
			};
			Parser.prototype.parseIfStatement = function () {
				var node = this.createNode();
				var consequent;
				var alternate = null;
				this.expectKeyword('if');
				this.expect('(');
				var test = this.parseExpression();
				if (!this.match(')') && this.config.tolerant) {
					this.tolerateUnexpectedToken(this.nextToken());
					consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
				} else {
					this.expect(')');
					consequent = this.parseIfClause();
					if (this.matchKeyword('else')) {
						this.nextToken();
						alternate = this.parseIfClause();
					}
				}
				return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
			};

			Parser.prototype.parseDoWhileStatement = function () {
				var node = this.createNode();
				this.expectKeyword('do');
				var previousInIteration = this.context.inIteration;
				this.context.inIteration = true;
				var body = this.parseStatement();
				this.context.inIteration = previousInIteration;
				this.expectKeyword('while');
				this.expect('(');
				var test = this.parseExpression();
				if (!this.match(')') && this.config.tolerant) {
					this.tolerateUnexpectedToken(this.nextToken());
				} else {
					this.expect(')');
					if (this.match(';')) {
						this.nextToken();
					}
				}
				return this.finalize(node, new Node.DoWhileStatement(body, test));
			};

			Parser.prototype.parseWhileStatement = function () {
				var node = this.createNode();
				var body;
				this.expectKeyword('while');
				this.expect('(');
				var test = this.parseExpression();
				if (!this.match(')') && this.config.tolerant) {
					this.tolerateUnexpectedToken(this.nextToken());
					body = this.finalize(this.createNode(), new Node.EmptyStatement());
				} else {
					this.expect(')');
					var previousInIteration = this.context.inIteration;
					this.context.inIteration = true;
					body = this.parseStatement();
					this.context.inIteration = previousInIteration;
				}
				return this.finalize(node, new Node.WhileStatement(test, body));
			};

			Parser.prototype.parseForStatement = function () {
				var init = null;
				var test = null;
				var update = null;
				var forIn = true;
				var left, right;
				var node = this.createNode();
				this.expectKeyword('for');
				this.expect('(');
				if (this.match(';')) {
					this.nextToken();
				} else {
					if (this.matchKeyword('var')) {
						init = this.createNode();
						this.nextToken();
						var previousAllowIn = this.context.allowIn;
						this.context.allowIn = false;
						var declarations = this.parseVariableDeclarationList({ inFor: true });
						this.context.allowIn = previousAllowIn;
						if (declarations.length === 1 && this.matchKeyword('in')) {
							var decl = declarations[0];
							if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
								this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, 'for-in');
							}
							init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
							this.nextToken();
							left = init;
							right = this.parseExpression();
							init = null;
						} else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
							init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
							this.nextToken();
							left = init;
							right = this.parseAssignmentExpression();
							init = null;
							forIn = false;
						} else {
							init = this.finalize(init, new Node.VariableDeclaration(declarations, 'var'));
							this.expect(';');
						}
					} else if (this.matchKeyword('const') || this.matchKeyword('let')) {
						init = this.createNode();
						var kind = this.nextToken().value;
						if (!this.context.strict && this.lookahead.value === 'in') {
							init = this.finalize(init, new Node.Identifier(kind));
							this.nextToken();
							left = init;
							right = this.parseExpression();
							init = null;
						} else {
							var previousAllowIn = this.context.allowIn;
							this.context.allowIn = false;
							var declarations = this.parseBindingList(kind, { inFor: true });
							this.context.allowIn = previousAllowIn;
							if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword('in')) {
								init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
								this.nextToken();
								left = init;
								right = this.parseExpression();
								init = null;
							} else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword('of')) {
								init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
								this.nextToken();
								left = init;
								right = this.parseAssignmentExpression();
								init = null;
								forIn = false;
							} else {
								this.consumeSemicolon();
								init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
							}
						}
					} else {
						var initStartToken = this.lookahead;
						var previousAllowIn = this.context.allowIn;
						this.context.allowIn = false;
						init = this.inheritCoverGrammar(this.parseAssignmentExpression);
						this.context.allowIn = previousAllowIn;
						if (this.matchKeyword('in')) {
							if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
								this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
							}
							this.nextToken();
							this.reinterpretExpressionAsPattern(init);
							left = init;
							right = this.parseExpression();
							init = null;
						} else if (this.matchContextualKeyword('of')) {
							if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
								this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
							}
							this.nextToken();
							this.reinterpretExpressionAsPattern(init);
							left = init;
							right = this.parseAssignmentExpression();
							init = null;
							forIn = false;
						} else {
							if (this.match(',')) {
								var initSeq = [init];
								while (this.match(',')) {
									this.nextToken();
									initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
								}
								init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
							}
							this.expect(';');
						}
					}
				}
				if (typeof left === 'undefined') {
					if (!this.match(';')) {
						test = this.parseExpression();
					}
					this.expect(';');
					if (!this.match(')')) {
						update = this.parseExpression();
					}
				}
				var body;
				if (!this.match(')') && this.config.tolerant) {
					this.tolerateUnexpectedToken(this.nextToken());
					body = this.finalize(this.createNode(), new Node.EmptyStatement());
				} else {
					this.expect(')');
					var previousInIteration = this.context.inIteration;
					this.context.inIteration = true;
					body = this.isolateCoverGrammar(this.parseStatement);
					this.context.inIteration = previousInIteration;
				}
				return typeof left === 'undefined' ? this.finalize(node, new Node.ForStatement(init, test, update, body)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body)) : this.finalize(node, new Node.ForOfStatement(left, right, body));
			};

			Parser.prototype.parseContinueStatement = function () {
				var node = this.createNode();
				this.expectKeyword('continue');
				var label = null;
				if (this.lookahead.type === 3 && !this.hasLineTerminator) {
					var id = this.parseVariableIdentifier();
					label = id;
					var key = '$' + id.name;
					if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
						this.throwError(messages_1.Messages.UnknownLabel, id.name);
					}
				}
				this.consumeSemicolon();
				if (label === null && !this.context.inIteration) {
					this.throwError(messages_1.Messages.IllegalContinue);
				}
				return this.finalize(node, new Node.ContinueStatement(label));
			};

			Parser.prototype.parseBreakStatement = function () {
				var node = this.createNode();
				this.expectKeyword('break');
				var label = null;
				if (this.lookahead.type === 3 && !this.hasLineTerminator) {
					var id = this.parseVariableIdentifier();
					var key = '$' + id.name;
					if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
						this.throwError(messages_1.Messages.UnknownLabel, id.name);
					}
					label = id;
				}
				this.consumeSemicolon();
				if (label === null && !this.context.inIteration && !this.context.inSwitch) {
					this.throwError(messages_1.Messages.IllegalBreak);
				}
				return this.finalize(node, new Node.BreakStatement(label));
			};

			Parser.prototype.parseReturnStatement = function () {
				if (!this.context.inFunctionBody) {
					this.tolerateError(messages_1.Messages.IllegalReturn);
				}
				var node = this.createNode();
				this.expectKeyword('return');
				var hasArgument = !this.match(';') && !this.match('}') && !this.hasLineTerminator && this.lookahead.type !== 2;
				var argument = hasArgument ? this.parseExpression() : null;
				this.consumeSemicolon();
				return this.finalize(node, new Node.ReturnStatement(argument));
			};

			Parser.prototype.parseWithStatement = function () {
				if (this.context.strict) {
					this.tolerateError(messages_1.Messages.StrictModeWith);
				}
				var node = this.createNode();
				var body;
				this.expectKeyword('with');
				this.expect('(');
				var object = this.parseExpression();
				if (!this.match(')') && this.config.tolerant) {
					this.tolerateUnexpectedToken(this.nextToken());
					body = this.finalize(this.createNode(), new Node.EmptyStatement());
				} else {
					this.expect(')');
					body = this.parseStatement();
				}
				return this.finalize(node, new Node.WithStatement(object, body));
			};

			Parser.prototype.parseSwitchCase = function () {
				var node = this.createNode();
				var test;
				if (this.matchKeyword('default')) {
					this.nextToken();
					test = null;
				} else {
					this.expectKeyword('case');
					test = this.parseExpression();
				}
				this.expect(':');
				var consequent = [];
				while (true) {
					if (this.match('}') || this.matchKeyword('default') || this.matchKeyword('case')) {
						break;
					}
					consequent.push(this.parseStatementListItem());
				}
				return this.finalize(node, new Node.SwitchCase(test, consequent));
			};
			Parser.prototype.parseSwitchStatement = function () {
				var node = this.createNode();
				this.expectKeyword('switch');
				this.expect('(');
				var discriminant = this.parseExpression();
				this.expect(')');
				var previousInSwitch = this.context.inSwitch;
				this.context.inSwitch = true;
				var cases = [];
				var defaultFound = false;
				this.expect('{');
				while (true) {
					if (this.match('}')) {
						break;
					}
					var clause = this.parseSwitchCase();
					if (clause.test === null) {
						if (defaultFound) {
							this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
						}
						defaultFound = true;
					}
					cases.push(clause);
				}
				this.expect('}');
				this.context.inSwitch = previousInSwitch;
				return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
			};

			Parser.prototype.parseLabelledStatement = function () {
				var node = this.createNode();
				var expr = this.parseExpression();
				var statement;
				if (expr.type === syntax_1.Syntax.Identifier && this.match(':')) {
					this.nextToken();
					var id = expr;
					var key = '$' + id.name;
					if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
						this.throwError(messages_1.Messages.Redeclaration, 'Label', id.name);
					}
					this.context.labelSet[key] = true;
					var body = void 0;
					if (this.matchKeyword('class')) {
						this.tolerateUnexpectedToken(this.lookahead);
						body = this.parseClassDeclaration();
					} else if (this.matchKeyword('function')) {
						var token = this.lookahead;
						var declaration = this.parseFunctionDeclaration();
						if (this.context.strict) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
						} else if (declaration.generator) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
						}
						body = declaration;
					} else {
						body = this.parseStatement();
					}
					delete this.context.labelSet[key];
					statement = new Node.LabeledStatement(id, body);
				} else {
					this.consumeSemicolon();
					statement = new Node.ExpressionStatement(expr);
				}
				return this.finalize(node, statement);
			};

			Parser.prototype.parseThrowStatement = function () {
				var node = this.createNode();
				this.expectKeyword('throw');
				if (this.hasLineTerminator) {
					this.throwError(messages_1.Messages.NewlineAfterThrow);
				}
				var argument = this.parseExpression();
				this.consumeSemicolon();
				return this.finalize(node, new Node.ThrowStatement(argument));
			};

			Parser.prototype.parseCatchClause = function () {
				var node = this.createNode();
				this.expectKeyword('catch');
				this.expect('(');
				if (this.match(')')) {
					this.throwUnexpectedToken(this.lookahead);
				}
				var params = [];
				var param = this.parsePattern(params);
				var paramMap = {};
				for (var i = 0; i < params.length; i++) {
					var key = '$' + params[i].value;
					if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
						this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
					}
					paramMap[key] = true;
				}
				if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
					if (this.scanner.isRestrictedWord(param.name)) {
						this.tolerateError(messages_1.Messages.StrictCatchVariable);
					}
				}
				this.expect(')');
				var body = this.parseBlock();
				return this.finalize(node, new Node.CatchClause(param, body));
			};
			Parser.prototype.parseFinallyClause = function () {
				this.expectKeyword('finally');
				return this.parseBlock();
			};
			Parser.prototype.parseTryStatement = function () {
				var node = this.createNode();
				this.expectKeyword('try');
				var block = this.parseBlock();
				var handler = this.matchKeyword('catch') ? this.parseCatchClause() : null;
				var finalizer = this.matchKeyword('finally') ? this.parseFinallyClause() : null;
				if (!handler && !finalizer) {
					this.throwError(messages_1.Messages.NoCatchOrFinally);
				}
				return this.finalize(node, new Node.TryStatement(block, handler, finalizer));
			};

			Parser.prototype.parseDebuggerStatement = function () {
				var node = this.createNode();
				this.expectKeyword('debugger');
				this.consumeSemicolon();
				return this.finalize(node, new Node.DebuggerStatement());
			};

			Parser.prototype.parseStatement = function () {
				var statement;
				switch (this.lookahead.type) {
					case 1:
					case 5:
					case 6:
					case 8:
					case 10:
					case 9:
						statement = this.parseExpressionStatement();
						break;
					case 7:
						var value = this.lookahead.value;
						if (value === '{') {
							statement = this.parseBlock();
						} else if (value === '(') {
							statement = this.parseExpressionStatement();
						} else if (value === ';') {
							statement = this.parseEmptyStatement();
						} else {
							statement = this.parseExpressionStatement();
						}
						break;
					case 3:
						statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
						break;
					case 4:
						switch (this.lookahead.value) {
							case 'break':
								statement = this.parseBreakStatement();
								break;
							case 'continue':
								statement = this.parseContinueStatement();
								break;
							case 'debugger':
								statement = this.parseDebuggerStatement();
								break;
							case 'do':
								statement = this.parseDoWhileStatement();
								break;
							case 'for':
								statement = this.parseForStatement();
								break;
							case 'function':
								statement = this.parseFunctionDeclaration();
								break;
							case 'if':
								statement = this.parseIfStatement();
								break;
							case 'return':
								statement = this.parseReturnStatement();
								break;
							case 'switch':
								statement = this.parseSwitchStatement();
								break;
							case 'throw':
								statement = this.parseThrowStatement();
								break;
							case 'try':
								statement = this.parseTryStatement();
								break;
							case 'var':
								statement = this.parseVariableStatement();
								break;
							case 'while':
								statement = this.parseWhileStatement();
								break;
							case 'with':
								statement = this.parseWithStatement();
								break;
							default:
								statement = this.parseExpressionStatement();
								break;
						}
						break;
					default:
						statement = this.throwUnexpectedToken(this.lookahead);
				}
				return statement;
			};

			Parser.prototype.parseFunctionSourceElements = function () {
				var node = this.createNode();
				this.expect('{');
				var body = this.parseDirectivePrologues();
				var previousLabelSet = this.context.labelSet;
				var previousInIteration = this.context.inIteration;
				var previousInSwitch = this.context.inSwitch;
				var previousInFunctionBody = this.context.inFunctionBody;
				this.context.labelSet = {};
				this.context.inIteration = false;
				this.context.inSwitch = false;
				this.context.inFunctionBody = true;
				while (this.lookahead.type !== 2) {
					if (this.match('}')) {
						break;
					}
					body.push(this.parseStatementListItem());
				}
				this.expect('}');
				this.context.labelSet = previousLabelSet;
				this.context.inIteration = previousInIteration;
				this.context.inSwitch = previousInSwitch;
				this.context.inFunctionBody = previousInFunctionBody;
				return this.finalize(node, new Node.BlockStatement(body));
			};
			Parser.prototype.validateParam = function (options, param, name) {
				var key = '$' + name;
				if (this.context.strict) {
					if (this.scanner.isRestrictedWord(name)) {
						options.stricted = param;
						options.message = messages_1.Messages.StrictParamName;
					}
					if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
						options.stricted = param;
						options.message = messages_1.Messages.StrictParamDupe;
					}
				} else if (!options.firstRestricted) {
					if (this.scanner.isRestrictedWord(name)) {
						options.firstRestricted = param;
						options.message = messages_1.Messages.StrictParamName;
					} else if (this.scanner.isStrictModeReservedWord(name)) {
						options.firstRestricted = param;
						options.message = messages_1.Messages.StrictReservedWord;
					} else if (Object.prototype.hasOwnProperty.call(options.paramSet, key)) {
						options.stricted = param;
						options.message = messages_1.Messages.StrictParamDupe;
					}
				}

				if (typeof Object.defineProperty === 'function') {
					Object.defineProperty(options.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
				} else {
					options.paramSet[key] = true;
				}
			};
			Parser.prototype.parseRestElement = function (params) {
				var node = this.createNode();
				this.expect('...');
				var arg = this.parsePattern(params);
				if (this.match('=')) {
					this.throwError(messages_1.Messages.DefaultRestParameter);
				}
				if (!this.match(')')) {
					this.throwError(messages_1.Messages.ParameterAfterRestParameter);
				}
				return this.finalize(node, new Node.RestElement(arg));
			};
			Parser.prototype.parseFormalParameter = function (options) {
				var params = [];
				var param = this.match('...') ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
				for (var i = 0; i < params.length; i++) {
					this.validateParam(options, params[i], params[i].value);
				}
				options.simple = options.simple && param instanceof Node.Identifier;
				options.params.push(param);
			};
			Parser.prototype.parseFormalParameters = function (firstRestricted) {
				var options;
				options = {
					simple: true,
					params: [],
					firstRestricted: firstRestricted
				};
				this.expect('(');
				if (!this.match(')')) {
					options.paramSet = {};
					while (this.lookahead.type !== 2) {
						this.parseFormalParameter(options);
						if (this.match(')')) {
							break;
						}
						this.expect(',');
						if (this.match(')')) {
							break;
						}
					}
				}
				this.expect(')');
				return {
					simple: options.simple,
					params: options.params,
					stricted: options.stricted,
					firstRestricted: options.firstRestricted,
					message: options.message
				};
			};
			Parser.prototype.matchAsyncFunction = function () {
				var match = this.matchContextualKeyword('async');
				if (match) {
					var state = this.scanner.saveState();
					this.scanner.scanComments();
					var next = this.scanner.lex();
					this.scanner.restoreState(state);
					match = state.lineNumber === next.lineNumber && next.type === 4 && next.value === 'function';
				}
				return match;
			};
			Parser.prototype.parseFunctionDeclaration = function (identifierIsOptional) {
				var node = this.createNode();
				var isAsync = this.matchContextualKeyword('async');
				if (isAsync) {
					this.nextToken();
				}
				this.expectKeyword('function');
				var isGenerator = isAsync ? false : this.match('*');
				if (isGenerator) {
					this.nextToken();
				}
				var message;
				var id = null;
				var firstRestricted = null;
				if (!identifierIsOptional || !this.match('(')) {
					var token = this.lookahead;
					id = this.parseVariableIdentifier();
					if (this.context.strict) {
						if (this.scanner.isRestrictedWord(token.value)) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
						}
					} else {
						if (this.scanner.isRestrictedWord(token.value)) {
							firstRestricted = token;
							message = messages_1.Messages.StrictFunctionName;
						} else if (this.scanner.isStrictModeReservedWord(token.value)) {
							firstRestricted = token;
							message = messages_1.Messages.StrictReservedWord;
						}
					}
				}
				var previousAllowAwait = this.context.await;
				var previousAllowYield = this.context.allowYield;
				this.context.await = isAsync;
				this.context.allowYield = !isGenerator;
				var formalParameters = this.parseFormalParameters(firstRestricted);
				var params = formalParameters.params;
				var stricted = formalParameters.stricted;
				firstRestricted = formalParameters.firstRestricted;
				if (formalParameters.message) {
					message = formalParameters.message;
				}
				var previousStrict = this.context.strict;
				var previousAllowStrictDirective = this.context.allowStrictDirective;
				this.context.allowStrictDirective = formalParameters.simple;
				var body = this.parseFunctionSourceElements();
				if (this.context.strict && firstRestricted) {
					this.throwUnexpectedToken(firstRestricted, message);
				}
				if (this.context.strict && stricted) {
					this.tolerateUnexpectedToken(stricted, message);
				}
				this.context.strict = previousStrict;
				this.context.allowStrictDirective = previousAllowStrictDirective;
				this.context.await = previousAllowAwait;
				this.context.allowYield = previousAllowYield;
				return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body, isGenerator));
			};
			Parser.prototype.parseFunctionExpression = function () {
				var node = this.createNode();
				var isAsync = this.matchContextualKeyword('async');
				if (isAsync) {
					this.nextToken();
				}
				this.expectKeyword('function');
				var isGenerator = isAsync ? false : this.match('*');
				if (isGenerator) {
					this.nextToken();
				}
				var message;
				var id = null;
				var firstRestricted;
				var previousAllowAwait = this.context.await;
				var previousAllowYield = this.context.allowYield;
				this.context.await = isAsync;
				this.context.allowYield = !isGenerator;
				if (!this.match('(')) {
					var token = this.lookahead;
					id = !this.context.strict && !isGenerator && this.matchKeyword('yield') ? this.parseIdentifierName() : this.parseVariableIdentifier();
					if (this.context.strict) {
						if (this.scanner.isRestrictedWord(token.value)) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
						}
					} else {
						if (this.scanner.isRestrictedWord(token.value)) {
							firstRestricted = token;
							message = messages_1.Messages.StrictFunctionName;
						} else if (this.scanner.isStrictModeReservedWord(token.value)) {
							firstRestricted = token;
							message = messages_1.Messages.StrictReservedWord;
						}
					}
				}
				var formalParameters = this.parseFormalParameters(firstRestricted);
				var params = formalParameters.params;
				var stricted = formalParameters.stricted;
				firstRestricted = formalParameters.firstRestricted;
				if (formalParameters.message) {
					message = formalParameters.message;
				}
				var previousStrict = this.context.strict;
				var previousAllowStrictDirective = this.context.allowStrictDirective;
				this.context.allowStrictDirective = formalParameters.simple;
				var body = this.parseFunctionSourceElements();
				if (this.context.strict && firstRestricted) {
					this.throwUnexpectedToken(firstRestricted, message);
				}
				if (this.context.strict && stricted) {
					this.tolerateUnexpectedToken(stricted, message);
				}
				this.context.strict = previousStrict;
				this.context.allowStrictDirective = previousAllowStrictDirective;
				this.context.await = previousAllowAwait;
				this.context.allowYield = previousAllowYield;
				return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body)) : this.finalize(node, new Node.FunctionExpression(id, params, body, isGenerator));
			};

			Parser.prototype.parseDirective = function () {
				var token = this.lookahead;
				var node = this.createNode();
				var expr = this.parseExpression();
				var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
				this.consumeSemicolon();
				return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
			};
			Parser.prototype.parseDirectivePrologues = function () {
				var firstRestricted = null;
				var body = [];
				while (true) {
					var token = this.lookahead;
					if (token.type !== 8) {
							break;
						}
					var statement = this.parseDirective();
					body.push(statement);
					var directive = statement.directive;
					if (typeof directive !== 'string') {
						break;
					}
					if (directive === 'use strict') {
						this.context.strict = true;
						if (firstRestricted) {
							this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
						}
						if (!this.context.allowStrictDirective) {
							this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
						}
					} else {
						if (!firstRestricted && token.octal) {
							firstRestricted = token;
						}
					}
				}
				return body;
			};

			Parser.prototype.qualifiedPropertyName = function (token) {
				switch (token.type) {
					case 3:
					case 8:
					case 1:
					case 5:
					case 6:
					case 4:
						return true;
					case 7:
						return token.value === '[';
					default:
						break;
				}
				return false;
			};
			Parser.prototype.parseGetterMethod = function () {
				var node = this.createNode();
				var isGenerator = false;
				var previousAllowYield = this.context.allowYield;
				this.context.allowYield = false;
				var formalParameters = this.parseFormalParameters();
				if (formalParameters.params.length > 0) {
					this.tolerateError(messages_1.Messages.BadGetterArity);
				}
				var method = this.parsePropertyMethod(formalParameters);
				this.context.allowYield = previousAllowYield;
				return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
			};
			Parser.prototype.parseSetterMethod = function () {
				var node = this.createNode();
				var isGenerator = false;
				var previousAllowYield = this.context.allowYield;
				this.context.allowYield = false;
				var formalParameters = this.parseFormalParameters();
				if (formalParameters.params.length !== 1) {
					this.tolerateError(messages_1.Messages.BadSetterArity);
				} else if (formalParameters.params[0] instanceof Node.RestElement) {
					this.tolerateError(messages_1.Messages.BadSetterRestParameter);
				}
				var method = this.parsePropertyMethod(formalParameters);
				this.context.allowYield = previousAllowYield;
				return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
			};
			Parser.prototype.parseGeneratorMethod = function () {
				var node = this.createNode();
				var isGenerator = true;
				var previousAllowYield = this.context.allowYield;
				this.context.allowYield = true;
				var params = this.parseFormalParameters();
				this.context.allowYield = false;
				var method = this.parsePropertyMethod(params);
				this.context.allowYield = previousAllowYield;
				return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
			};

			Parser.prototype.isStartOfExpression = function () {
				var start = true;
				var value = this.lookahead.value;
				switch (this.lookahead.type) {
					case 7:
						start = value === '[' || value === '(' || value === '{' || value === '+' || value === '-' || value === '!' || value === '~' || value === '++' || value === '--' || value === '/' || value === '/=';
						break;
					case 4:
						start = value === 'class' || value === 'delete' || value === 'function' || value === 'let' || value === 'new' || value === 'super' || value === 'this' || value === 'typeof' || value === 'void' || value === 'yield';
						break;
					default:
						break;
				}
				return start;
			};
			Parser.prototype.parseYieldExpression = function () {
				var node = this.createNode();
				this.expectKeyword('yield');
				var argument = null;
				var delegate = false;
				if (!this.hasLineTerminator) {
					var previousAllowYield = this.context.allowYield;
					this.context.allowYield = false;
					delegate = this.match('*');
					if (delegate) {
						this.nextToken();
						argument = this.parseAssignmentExpression();
					} else if (this.isStartOfExpression()) {
						argument = this.parseAssignmentExpression();
					}
					this.context.allowYield = previousAllowYield;
				}
				return this.finalize(node, new Node.YieldExpression(argument, delegate));
			};

			Parser.prototype.parseClassElement = function (hasConstructor) {
				var token = this.lookahead;
				var node = this.createNode();
				var kind = '';
				var key = null;
				var value = null;
				var computed = false;
				var method = false;
				var isStatic = false;
				var isAsync = false;
				if (this.match('*')) {
					this.nextToken();
				} else {
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					var id = key;
					if (id.name === 'static' && (this.qualifiedPropertyName(this.lookahead) || this.match('*'))) {
						token = this.lookahead;
						isStatic = true;
						computed = this.match('[');
						if (this.match('*')) {
							this.nextToken();
						} else {
							key = this.parseObjectPropertyKey();
						}
					}
					if (token.type === 3 && !this.hasLineTerminator && token.value === 'async') {
						var punctuator = this.lookahead.value;
						if (punctuator !== ':' && punctuator !== '(' && punctuator !== '*') {
							isAsync = true;
							token = this.lookahead;
							key = this.parseObjectPropertyKey();
							if (token.type === 3) {
									if (token.value === 'get' || token.value === 'set') {
										this.tolerateUnexpectedToken(token);
									} else if (token.value === 'constructor') {
										this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
									}
								}
						}
					}
				}
				var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
				if (token.type === 3) {
						if (token.value === 'get' && lookaheadPropertyKey) {
							kind = 'get';
							computed = this.match('[');
							key = this.parseObjectPropertyKey();
							this.context.allowYield = false;
							value = this.parseGetterMethod();
						} else if (token.value === 'set' && lookaheadPropertyKey) {
							kind = 'set';
							computed = this.match('[');
							key = this.parseObjectPropertyKey();
							value = this.parseSetterMethod();
						}
					} else if (token.type === 7 && token.value === '*' && lookaheadPropertyKey) {
					kind = 'init';
					computed = this.match('[');
					key = this.parseObjectPropertyKey();
					value = this.parseGeneratorMethod();
					method = true;
				}
				if (!kind && key && this.match('(')) {
					kind = 'init';
					value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
					method = true;
				}
				if (!kind) {
					this.throwUnexpectedToken(this.lookahead);
				}
				if (kind === 'init') {
					kind = 'method';
				}
				if (!computed) {
					if (isStatic && this.isPropertyKey(key, 'prototype')) {
						this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
					}
					if (!isStatic && this.isPropertyKey(key, 'constructor')) {
						if (kind !== 'method' || !method || value && value.generator) {
							this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
						}
						if (hasConstructor.value) {
							this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
						} else {
							hasConstructor.value = true;
						}
						kind = 'constructor';
					}
				}
				return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
			};
			Parser.prototype.parseClassElementList = function () {
				var body = [];
				var hasConstructor = { value: false };
				this.expect('{');
				while (!this.match('}')) {
					if (this.match(';')) {
						this.nextToken();
					} else {
						body.push(this.parseClassElement(hasConstructor));
					}
				}
				this.expect('}');
				return body;
			};
			Parser.prototype.parseClassBody = function () {
				var node = this.createNode();
				var elementList = this.parseClassElementList();
				return this.finalize(node, new Node.ClassBody(elementList));
			};
			Parser.prototype.parseClassDeclaration = function (identifierIsOptional) {
				var node = this.createNode();
				var previousStrict = this.context.strict;
				this.context.strict = true;
				this.expectKeyword('class');
				var id = identifierIsOptional && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
				var superClass = null;
				if (this.matchKeyword('extends')) {
					this.nextToken();
					superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
				}
				var classBody = this.parseClassBody();
				this.context.strict = previousStrict;
				return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
			};
			Parser.prototype.parseClassExpression = function () {
				var node = this.createNode();
				var previousStrict = this.context.strict;
				this.context.strict = true;
				this.expectKeyword('class');
				var id = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
				var superClass = null;
				if (this.matchKeyword('extends')) {
					this.nextToken();
					superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
				}
				var classBody = this.parseClassBody();
				this.context.strict = previousStrict;
				return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
			};

			Parser.prototype.parseModule = function () {
				this.context.strict = true;
				this.context.isModule = true;
				var node = this.createNode();
				var body = this.parseDirectivePrologues();
				while (this.lookahead.type !== 2) {
					body.push(this.parseStatementListItem());
				}
				return this.finalize(node, new Node.Module(body));
			};
			Parser.prototype.parseScript = function () {
				var node = this.createNode();
				var body = this.parseDirectivePrologues();
				while (this.lookahead.type !== 2) {
					body.push(this.parseStatementListItem());
				}
				return this.finalize(node, new Node.Script(body));
			};

			Parser.prototype.parseModuleSpecifier = function () {
				var node = this.createNode();
				if (this.lookahead.type !== 8) {
						this.throwError(messages_1.Messages.InvalidModuleSpecifier);
					}
				var token = this.nextToken();
				var raw = this.getTokenRaw(token);
				return this.finalize(node, new Node.Literal(token.value, raw));
			};

			Parser.prototype.parseImportSpecifier = function () {
				var node = this.createNode();
				var imported;
				var local;
				if (this.lookahead.type === 3) {
						imported = this.parseVariableIdentifier();
						local = imported;
						if (this.matchContextualKeyword('as')) {
							this.nextToken();
							local = this.parseVariableIdentifier();
						}
					} else {
					imported = this.parseIdentifierName();
					local = imported;
					if (this.matchContextualKeyword('as')) {
						this.nextToken();
						local = this.parseVariableIdentifier();
					} else {
						this.throwUnexpectedToken(this.nextToken());
					}
				}
				return this.finalize(node, new Node.ImportSpecifier(local, imported));
			};

			Parser.prototype.parseNamedImports = function () {
				this.expect('{');
				var specifiers = [];
				while (!this.match('}')) {
					specifiers.push(this.parseImportSpecifier());
					if (!this.match('}')) {
						this.expect(',');
					}
				}
				this.expect('}');
				return specifiers;
			};

			Parser.prototype.parseImportDefaultSpecifier = function () {
				var node = this.createNode();
				var local = this.parseIdentifierName();
				return this.finalize(node, new Node.ImportDefaultSpecifier(local));
			};

			Parser.prototype.parseImportNamespaceSpecifier = function () {
				var node = this.createNode();
				this.expect('*');
				if (!this.matchContextualKeyword('as')) {
					this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
				}
				this.nextToken();
				var local = this.parseIdentifierName();
				return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
			};
			Parser.prototype.parseImportDeclaration = function () {
				if (this.context.inFunctionBody) {
					this.throwError(messages_1.Messages.IllegalImportDeclaration);
				}
				var node = this.createNode();
				this.expectKeyword('import');
				var src;
				var specifiers = [];
				if (this.lookahead.type === 8) {
						src = this.parseModuleSpecifier();
					} else {
					if (this.match('{')) {
						specifiers = specifiers.concat(this.parseNamedImports());
					} else if (this.match('*')) {
						specifiers.push(this.parseImportNamespaceSpecifier());
					} else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword('default')) {
						specifiers.push(this.parseImportDefaultSpecifier());
						if (this.match(',')) {
							this.nextToken();
							if (this.match('*')) {
								specifiers.push(this.parseImportNamespaceSpecifier());
							} else if (this.match('{')) {
								specifiers = specifiers.concat(this.parseNamedImports());
							} else {
								this.throwUnexpectedToken(this.lookahead);
							}
						}
					} else {
						this.throwUnexpectedToken(this.nextToken());
					}
					if (!this.matchContextualKeyword('from')) {
						var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
						this.throwError(message, this.lookahead.value);
					}
					this.nextToken();
					src = this.parseModuleSpecifier();
				}
				this.consumeSemicolon();
				return this.finalize(node, new Node.ImportDeclaration(specifiers, src));
			};

			Parser.prototype.parseExportSpecifier = function () {
				var node = this.createNode();
				var local = this.parseIdentifierName();
				var exported = local;
				if (this.matchContextualKeyword('as')) {
					this.nextToken();
					exported = this.parseIdentifierName();
				}
				return this.finalize(node, new Node.ExportSpecifier(local, exported));
			};
			Parser.prototype.parseExportDeclaration = function () {
				if (this.context.inFunctionBody) {
					this.throwError(messages_1.Messages.IllegalExportDeclaration);
				}
				var node = this.createNode();
				this.expectKeyword('export');
				var exportDeclaration;
				if (this.matchKeyword('default')) {
					this.nextToken();
					if (this.matchKeyword('function')) {
						var declaration = this.parseFunctionDeclaration(true);
						exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
					} else if (this.matchKeyword('class')) {
						var declaration = this.parseClassDeclaration(true);
						exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
					} else if (this.matchContextualKeyword('async')) {
						var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
						exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
					} else {
						if (this.matchContextualKeyword('from')) {
							this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
						}

						var declaration = this.match('{') ? this.parseObjectInitializer() : this.match('[') ? this.parseArrayInitializer() : this.parseAssignmentExpression();
						this.consumeSemicolon();
						exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
					}
				} else if (this.match('*')) {
					this.nextToken();
					if (!this.matchContextualKeyword('from')) {
						var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
						this.throwError(message, this.lookahead.value);
					}
					this.nextToken();
					var src = this.parseModuleSpecifier();
					this.consumeSemicolon();
					exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src));
				} else if (this.lookahead.type === 4) {
						var declaration = void 0;
						switch (this.lookahead.value) {
							case 'let':
							case 'const':
								declaration = this.parseLexicalDeclaration({ inFor: false });
								break;
							case 'var':
							case 'class':
							case 'function':
								declaration = this.parseStatementListItem();
								break;
							default:
								this.throwUnexpectedToken(this.lookahead);
						}
						exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
					} else if (this.matchAsyncFunction()) {
					var declaration = this.parseFunctionDeclaration();
					exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
				} else {
					var specifiers = [];
					var source = null;
					var isExportFromIdentifier = false;
					this.expect('{');
					while (!this.match('}')) {
						isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword('default');
						specifiers.push(this.parseExportSpecifier());
						if (!this.match('}')) {
							this.expect(',');
						}
					}
					this.expect('}');
					if (this.matchContextualKeyword('from')) {
						this.nextToken();
						source = this.parseModuleSpecifier();
						this.consumeSemicolon();
					} else if (isExportFromIdentifier) {
						var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
						this.throwError(message, this.lookahead.value);
					} else {
						this.consumeSemicolon();
					}
					exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
				}
				return exportDeclaration;
			};
			return Parser;
		}();
		exports.Parser = Parser;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		function assert(condition, message) {
			if (!condition) {
				throw new Error('ASSERT: ' + message);
			}
		}
		exports.assert = assert;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var ErrorHandler = function () {
			function ErrorHandler() {
				this.errors = [];
				this.tolerant = false;
			}
			ErrorHandler.prototype.recordError = function (error) {
				this.errors.push(error);
			};
			ErrorHandler.prototype.tolerate = function (error) {
				if (this.tolerant) {
					this.recordError(error);
				} else {
					throw error;
				}
			};
			ErrorHandler.prototype.constructError = function (msg, column) {
				var error = new Error(msg);
				try {
					throw error;
				} catch (base) {
					if (Object.create && Object.defineProperty) {
						error = Object.create(base);
						Object.defineProperty(error, 'column', { value: column });
					}
				}

				return error;
			};
			ErrorHandler.prototype.createError = function (index, line, col, description) {
				var msg = 'Line ' + line + ': ' + description;
				var error = this.constructError(msg, col);
				error.index = index;
				error.lineNumber = line;
				error.description = description;
				return error;
			};
			ErrorHandler.prototype.throwError = function (index, line, col, description) {
				throw this.createError(index, line, col, description);
			};
			ErrorHandler.prototype.tolerateError = function (index, line, col, description) {
				var error = this.createError(index, line, col, description);
				if (this.tolerant) {
					this.recordError(error);
				} else {
					throw error;
				}
			};
			return ErrorHandler;
		}();
		exports.ErrorHandler = ErrorHandler;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });

		exports.Messages = {
			BadGetterArity: 'Getter must not have any formal parameters',
			BadSetterArity: 'Setter must have exactly one formal parameter',
			BadSetterRestParameter: 'Setter function argument must not be a rest parameter',
			ConstructorIsAsync: 'Class constructor may not be an async method',
			ConstructorSpecialMethod: 'Class constructor may not be an accessor',
			DeclarationMissingInitializer: 'Missing initializer in %0 declaration',
			DefaultRestParameter: 'Unexpected token =',
			DuplicateBinding: 'Duplicate binding %0',
			DuplicateConstructor: 'A class may only have one constructor',
			DuplicateProtoProperty: 'Duplicate __proto__ fields are not allowed in object literals',
			ForInOfLoopInitializer: '%0 loop variable declaration may not have an initializer',
			GeneratorInLegacyContext: 'Generator declarations are not allowed in legacy contexts',
			IllegalBreak: 'Illegal break statement',
			IllegalContinue: 'Illegal continue statement',
			IllegalExportDeclaration: 'Unexpected token',
			IllegalImportDeclaration: 'Unexpected token',
			IllegalLanguageModeDirective: 'Illegal \'use strict\' directive in function with non-simple parameter list',
			IllegalReturn: 'Illegal return statement',
			InvalidEscapedReservedWord: 'Keyword must not contain escaped characters',
			InvalidHexEscapeSequence: 'Invalid hexadecimal escape sequence',
			InvalidLHSInAssignment: 'Invalid left-hand side in assignment',
			InvalidLHSInForIn: 'Invalid left-hand side in for-in',
			InvalidLHSInForLoop: 'Invalid left-hand side in for-loop',
			InvalidModuleSpecifier: 'Unexpected token',
			InvalidRegExp: 'Invalid regular expression',
			LetInLexicalBinding: 'let is disallowed as a lexically bound name',
			MissingFromClause: 'Unexpected token',
			MultipleDefaultsInSwitch: 'More than one default clause in switch statement',
			NewlineAfterThrow: 'Illegal newline after throw',
			NoAsAfterImportNamespace: 'Unexpected token',
			NoCatchOrFinally: 'Missing catch or finally after try',
			ParameterAfterRestParameter: 'Rest parameter must be last formal parameter',
			Redeclaration: '%0 \'%1\' has already been declared',
			StaticPrototype: 'Classes may not have static property named prototype',
			StrictCatchVariable: 'Catch variable may not be eval or arguments in strict mode',
			StrictDelete: 'Delete of an unqualified identifier in strict mode.',
			StrictFunction: 'In strict mode code, functions can only be declared at top level or inside a block',
			StrictFunctionName: 'Function name may not be eval or arguments in strict mode',
			StrictLHSAssignment: 'Assignment to eval or arguments is not allowed in strict mode',
			StrictLHSPostfix: 'Postfix increment/decrement may not have eval or arguments operand in strict mode',
			StrictLHSPrefix: 'Prefix increment/decrement may not have eval or arguments operand in strict mode',
			StrictModeWith: 'Strict mode code may not include a with statement',
			StrictOctalLiteral: 'Octal literals are not allowed in strict mode.',
			StrictParamDupe: 'Strict mode function may not have duplicate parameter names',
			StrictParamName: 'Parameter name eval or arguments is not allowed in strict mode',
			StrictReservedWord: 'Use of future reserved word in strict mode',
			StrictVarName: 'Variable name may not be eval or arguments in strict mode',
			TemplateOctalLiteral: 'Octal literals are not allowed in template strings.',
			UnexpectedEOS: 'Unexpected end of input',
			UnexpectedIdentifier: 'Unexpected identifier',
			UnexpectedNumber: 'Unexpected number',
			UnexpectedReserved: 'Unexpected reserved word',
			UnexpectedString: 'Unexpected string',
			UnexpectedTemplate: 'Unexpected quasi %0',
			UnexpectedToken: 'Unexpected token %0',
			UnexpectedTokenIllegal: 'Unexpected token ILLEGAL',
			UnknownLabel: 'Undefined label \'%0\'',
			UnterminatedRegExp: 'Invalid regular expression: missing /'
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var assert_1 = __webpack_require__(9);
		var character_1 = __webpack_require__(4);
		var messages_1 = __webpack_require__(11);
		function hexValue(ch) {
			return '0123456789abcdef'.indexOf(ch.toLowerCase());
		}
		function octalValue(ch) {
			return '01234567'.indexOf(ch);
		}
		var Scanner = function () {
			function Scanner(code, handler) {
				this.source = code;
				this.errorHandler = handler;
				this.trackComment = false;
				this.length = code.length;
				this.index = 0;
				this.lineNumber = code.length > 0 ? 1 : 0;
				this.lineStart = 0;
				this.curlyStack = [];
			}
			Scanner.prototype.saveState = function () {
				return {
					index: this.index,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart
				};
			};
			Scanner.prototype.restoreState = function (state) {
				this.index = state.index;
				this.lineNumber = state.lineNumber;
				this.lineStart = state.lineStart;
			};
			Scanner.prototype.eof = function () {
				return this.index >= this.length;
			};
			Scanner.prototype.throwUnexpectedToken = function (message) {
				if (message === void 0) {
					message = messages_1.Messages.UnexpectedTokenIllegal;
				}
				return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
			};
			Scanner.prototype.tolerateUnexpectedToken = function (message) {
				if (message === void 0) {
					message = messages_1.Messages.UnexpectedTokenIllegal;
				}
				this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
			};

			Scanner.prototype.skipSingleLineComment = function (offset) {
				var comments = [];
				var start, loc;
				if (this.trackComment) {
					comments = [];
					start = this.index - offset;
					loc = {
						start: {
							line: this.lineNumber,
							column: this.index - this.lineStart - offset
						},
						end: {}
					};
				}
				while (!this.eof()) {
					var ch = this.source.charCodeAt(this.index);
					++this.index;
					if (character_1.Character.isLineTerminator(ch)) {
						if (this.trackComment) {
							loc.end = {
								line: this.lineNumber,
								column: this.index - this.lineStart - 1
							};
							var entry = {
								multiLine: false,
								slice: [start + offset, this.index - 1],
								range: [start, this.index - 1],
								loc: loc
							};
							comments.push(entry);
						}
						if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
							++this.index;
						}
						++this.lineNumber;
						this.lineStart = this.index;
						return comments;
					}
				}
				if (this.trackComment) {
					loc.end = {
						line: this.lineNumber,
						column: this.index - this.lineStart
					};
					var entry = {
						multiLine: false,
						slice: [start + offset, this.index],
						range: [start, this.index],
						loc: loc
					};
					comments.push(entry);
				}
				return comments;
			};
			Scanner.prototype.skipMultiLineComment = function () {
				var comments = [];
				var start, loc;
				if (this.trackComment) {
					comments = [];
					start = this.index - 2;
					loc = {
						start: {
							line: this.lineNumber,
							column: this.index - this.lineStart - 2
						},
						end: {}
					};
				}
				while (!this.eof()) {
					var ch = this.source.charCodeAt(this.index);
					if (character_1.Character.isLineTerminator(ch)) {
						if (ch === 0x0D && this.source.charCodeAt(this.index + 1) === 0x0A) {
							++this.index;
						}
						++this.lineNumber;
						++this.index;
						this.lineStart = this.index;
					} else if (ch === 0x2A) {
						if (this.source.charCodeAt(this.index + 1) === 0x2F) {
							this.index += 2;
							if (this.trackComment) {
								loc.end = {
									line: this.lineNumber,
									column: this.index - this.lineStart
								};
								var entry = {
									multiLine: true,
									slice: [start + 2, this.index - 2],
									range: [start, this.index],
									loc: loc
								};
								comments.push(entry);
							}
							return comments;
						}
						++this.index;
					} else {
						++this.index;
					}
				}

				if (this.trackComment) {
					loc.end = {
						line: this.lineNumber,
						column: this.index - this.lineStart
					};
					var entry = {
						multiLine: true,
						slice: [start + 2, this.index],
						range: [start, this.index],
						loc: loc
					};
					comments.push(entry);
				}
				this.tolerateUnexpectedToken();
				return comments;
			};
			Scanner.prototype.scanComments = function () {
				var comments;
				if (this.trackComment) {
					comments = [];
				}
				var start = this.index === 0;
				while (!this.eof()) {
					var ch = this.source.charCodeAt(this.index);
					if (character_1.Character.isWhiteSpace(ch)) {
						++this.index;
					} else if (character_1.Character.isLineTerminator(ch)) {
						++this.index;
						if (ch === 0x0D && this.source.charCodeAt(this.index) === 0x0A) {
							++this.index;
						}
						++this.lineNumber;
						this.lineStart = this.index;
						start = true;
					} else if (ch === 0x2F) {
						ch = this.source.charCodeAt(this.index + 1);
						if (ch === 0x2F) {
							this.index += 2;
							var comment = this.skipSingleLineComment(2);
							if (this.trackComment) {
								comments = comments.concat(comment);
							}
							start = true;
						} else if (ch === 0x2A) {
							this.index += 2;
							var comment = this.skipMultiLineComment();
							if (this.trackComment) {
								comments = comments.concat(comment);
							}
						} else {
							break;
						}
					} else if (start && ch === 0x2D) {
						if (this.source.charCodeAt(this.index + 1) === 0x2D && this.source.charCodeAt(this.index + 2) === 0x3E) {
							this.index += 3;
							var comment = this.skipSingleLineComment(3);
							if (this.trackComment) {
								comments = comments.concat(comment);
							}
						} else {
							break;
						}
					} else if (ch === 0x3C) {
						if (this.source.slice(this.index + 1, this.index + 4) === '!--') {
							this.index += 4;
							var comment = this.skipSingleLineComment(4);
							if (this.trackComment) {
								comments = comments.concat(comment);
							}
						} else {
							break;
						}
					} else {
						break;
					}
				}
				return comments;
			};

			Scanner.prototype.isFutureReservedWord = function (id) {
				switch (id) {
					case 'enum':
					case 'export':
					case 'import':
					case 'super':
						return true;
					default:
						return false;
				}
			};
			Scanner.prototype.isStrictModeReservedWord = function (id) {
				switch (id) {
					case 'implements':
					case 'interface':
					case 'package':
					case 'private':
					case 'protected':
					case 'public':
					case 'static':
					case 'yield':
					case 'let':
						return true;
					default:
						return false;
				}
			};
			Scanner.prototype.isRestrictedWord = function (id) {
				return id === 'eval' || id === 'arguments';
			};

			Scanner.prototype.isKeyword = function (id) {
				switch (id.length) {
					case 2:
						return id === 'if' || id === 'in' || id === 'do';
					case 3:
						return id === 'var' || id === 'for' || id === 'new' || id === 'try' || id === 'let';
					case 4:
						return id === 'this' || id === 'else' || id === 'case' || id === 'void' || id === 'with' || id === 'enum';
					case 5:
						return id === 'while' || id === 'break' || id === 'catch' || id === 'throw' || id === 'const' || id === 'yield' || id === 'class' || id === 'super';
					case 6:
						return id === 'return' || id === 'typeof' || id === 'delete' || id === 'switch' || id === 'export' || id === 'import';
					case 7:
						return id === 'default' || id === 'finally' || id === 'extends';
					case 8:
						return id === 'function' || id === 'continue' || id === 'debugger';
					case 10:
						return id === 'instanceof';
					default:
						return false;
				}
			};
			Scanner.prototype.codePointAt = function (i) {
				var cp = this.source.charCodeAt(i);
				if (cp >= 0xD800 && cp <= 0xDBFF) {
					var second = this.source.charCodeAt(i + 1);
					if (second >= 0xDC00 && second <= 0xDFFF) {
						var first = cp;
						cp = (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
					}
				}
				return cp;
			};
			Scanner.prototype.scanHexEscape = function (prefix) {
				var len = prefix === 'u' ? 4 : 2;
				var code = 0;
				for (var i = 0; i < len; ++i) {
					if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
						code = code * 16 + hexValue(this.source[this.index++]);
					} else {
						return null;
					}
				}
				return String.fromCharCode(code);
			};
			Scanner.prototype.scanUnicodeCodePointEscape = function () {
				var ch = this.source[this.index];
				var code = 0;

				if (ch === '}') {
					this.throwUnexpectedToken();
				}
				while (!this.eof()) {
					ch = this.source[this.index++];
					if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
						break;
					}
					code = code * 16 + hexValue(ch);
				}
				if (code > 0x10FFFF || ch !== '}') {
					this.throwUnexpectedToken();
				}
				return character_1.Character.fromCodePoint(code);
			};
			Scanner.prototype.getIdentifier = function () {
				var start = this.index++;
				while (!this.eof()) {
					var ch = this.source.charCodeAt(this.index);
					if (ch === 0x5C) {
						this.index = start;
						return this.getComplexIdentifier();
					} else if (ch >= 0xD800 && ch < 0xDFFF) {
						this.index = start;
						return this.getComplexIdentifier();
					}
					if (character_1.Character.isIdentifierPart(ch)) {
						++this.index;
					} else {
						break;
					}
				}
				return this.source.slice(start, this.index);
			};
			Scanner.prototype.getComplexIdentifier = function () {
				var cp = this.codePointAt(this.index);
				var id = character_1.Character.fromCodePoint(cp);
				this.index += id.length;

				var ch;
				if (cp === 0x5C) {
					if (this.source.charCodeAt(this.index) !== 0x75) {
						this.throwUnexpectedToken();
					}
					++this.index;
					if (this.source[this.index] === '{') {
						++this.index;
						ch = this.scanUnicodeCodePointEscape();
					} else {
						ch = this.scanHexEscape('u');
						if (ch === null || ch === '\\' || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
							this.throwUnexpectedToken();
						}
					}
					id = ch;
				}
				while (!this.eof()) {
					cp = this.codePointAt(this.index);
					if (!character_1.Character.isIdentifierPart(cp)) {
						break;
					}
					ch = character_1.Character.fromCodePoint(cp);
					id += ch;
					this.index += ch.length;

					if (cp === 0x5C) {
						id = id.substr(0, id.length - 1);
						if (this.source.charCodeAt(this.index) !== 0x75) {
							this.throwUnexpectedToken();
						}
						++this.index;
						if (this.source[this.index] === '{') {
							++this.index;
							ch = this.scanUnicodeCodePointEscape();
						} else {
							ch = this.scanHexEscape('u');
							if (ch === null || ch === '\\' || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
								this.throwUnexpectedToken();
							}
						}
						id += ch;
					}
				}
				return id;
			};
			Scanner.prototype.octalToDecimal = function (ch) {
				var octal = ch !== '0';
				var code = octalValue(ch);
				if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
					octal = true;
					code = code * 8 + octalValue(this.source[this.index++]);

					if ('0123'.indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
						code = code * 8 + octalValue(this.source[this.index++]);
					}
				}
				return {
					code: code,
					octal: octal
				};
			};

			Scanner.prototype.scanIdentifier = function () {
				var type;
				var start = this.index;

				var id = this.source.charCodeAt(start) === 0x5C ? this.getComplexIdentifier() : this.getIdentifier();

				if (id.length === 1) {
					type = 3;
				} else if (this.isKeyword(id)) {
					type = 4;
				} else if (id === 'null') {
					type = 5;
				} else if (id === 'true' || id === 'false') {
					type = 1;
				} else {
					type = 3;
				}
				if (type !== 3 && start + id.length !== this.index) {
					var restore = this.index;
					this.index = start;
					this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
					this.index = restore;
				}
				return {
					type: type,
					value: id,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};

			Scanner.prototype.scanPunctuator = function () {
				var start = this.index;

				var str = this.source[this.index];
				switch (str) {
					case '(':
					case '{':
						if (str === '{') {
							this.curlyStack.push('{');
						}
						++this.index;
						break;
					case '.':
						++this.index;
						if (this.source[this.index] === '.' && this.source[this.index + 1] === '.') {
							this.index += 2;
							str = '...';
						}
						break;
					case '}':
						++this.index;
						this.curlyStack.pop();
						break;
					case ')':
					case ';':
					case ',':
					case '[':
					case ']':
					case ':':
					case '?':
					case '~':
						++this.index;
						break;
					default:
						str = this.source.substr(this.index, 4);
						if (str === '>>>=') {
							this.index += 4;
						} else {
							str = str.substr(0, 3);
							if (str === '===' || str === '!==' || str === '>>>' || str === '<<=' || str === '>>=' || str === '**=') {
								this.index += 3;
							} else {
								str = str.substr(0, 2);
								if (str === '&&' || str === '||' || str === '==' || str === '!=' || str === '+=' || str === '-=' || str === '*=' || str === '/=' || str === '++' || str === '--' || str === '<<' || str === '>>' || str === '&=' || str === '|=' || str === '^=' || str === '%=' || str === '<=' || str === '>=' || str === '=>' || str === '**') {
									this.index += 2;
								} else {
									str = this.source[this.index];
									if ('<>=!+-*%&|^/'.indexOf(str) >= 0) {
										++this.index;
									}
								}
							}
						}
				}
				if (this.index === start) {
					this.throwUnexpectedToken();
				}
				return {
					type: 7,
					value: str,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};

			Scanner.prototype.scanHexLiteral = function (start) {
				var num = '';
				while (!this.eof()) {
					if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
						break;
					}
					num += this.source[this.index++];
				}
				if (num.length === 0) {
					this.throwUnexpectedToken();
				}
				if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
					this.throwUnexpectedToken();
				}
				return {
					type: 6,
					value: parseInt('0x' + num, 16),
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};
			Scanner.prototype.scanBinaryLiteral = function (start) {
				var num = '';
				var ch;
				while (!this.eof()) {
					ch = this.source[this.index];
					if (ch !== '0' && ch !== '1') {
						break;
					}
					num += this.source[this.index++];
				}
				if (num.length === 0) {
					this.throwUnexpectedToken();
				}
				if (!this.eof()) {
					ch = this.source.charCodeAt(this.index);

					if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
						this.throwUnexpectedToken();
					}
				}
				return {
					type: 6,
					value: parseInt(num, 2),
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};
			Scanner.prototype.scanOctalLiteral = function (prefix, start) {
				var num = '';
				var octal = false;
				if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
					octal = true;
					num = '0' + this.source[this.index++];
				} else {
					++this.index;
				}
				while (!this.eof()) {
					if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
						break;
					}
					num += this.source[this.index++];
				}
				if (!octal && num.length === 0) {
					this.throwUnexpectedToken();
				}
				if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
					this.throwUnexpectedToken();
				}
				return {
					type: 6,
					value: parseInt(num, 8),
					octal: octal,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};
			Scanner.prototype.isImplicitOctalLiteral = function () {
				for (var i = this.index + 1; i < this.length; ++i) {
					var ch = this.source[i];
					if (ch === '8' || ch === '9') {
						return false;
					}
					if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
						return true;
					}
				}
				return true;
			};
			Scanner.prototype.scanNumericLiteral = function () {
				var start = this.index;
				var ch = this.source[start];
				assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === '.', 'Numeric literal must start with a decimal digit or a decimal point');
				var num = '';
				if (ch !== '.') {
					num = this.source[this.index++];
					ch = this.source[this.index];

					if (num === '0') {
						if (ch === 'x' || ch === 'X') {
							++this.index;
							return this.scanHexLiteral(start);
						}
						if (ch === 'b' || ch === 'B') {
							++this.index;
							return this.scanBinaryLiteral(start);
						}
						if (ch === 'o' || ch === 'O') {
							return this.scanOctalLiteral(ch, start);
						}
						if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
							if (this.isImplicitOctalLiteral()) {
								return this.scanOctalLiteral(ch, start);
							}
						}
					}
					while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
						num += this.source[this.index++];
					}
					ch = this.source[this.index];
				}
				if (ch === '.') {
					num += this.source[this.index++];
					while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
						num += this.source[this.index++];
					}
					ch = this.source[this.index];
				}
				if (ch === 'e' || ch === 'E') {
					num += this.source[this.index++];
					ch = this.source[this.index];
					if (ch === '+' || ch === '-') {
						num += this.source[this.index++];
					}
					if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
						while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
							num += this.source[this.index++];
						}
					} else {
						this.throwUnexpectedToken();
					}
				}
				if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
					this.throwUnexpectedToken();
				}
				return {
					type: 6,
					value: parseFloat(num),
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};

			Scanner.prototype.scanStringLiteral = function () {
				var start = this.index;
				var quote = this.source[start];
				assert_1.assert(quote === '\'' || quote === '"', 'String literal must starts with a quote');
				++this.index;
				var octal = false;
				var str = '';
				while (!this.eof()) {
					var ch = this.source[this.index++];
					if (ch === quote) {
						quote = '';
						break;
					} else if (ch === '\\') {
						ch = this.source[this.index++];
						if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
							switch (ch) {
								case 'u':
									if (this.source[this.index] === '{') {
										++this.index;
										str += this.scanUnicodeCodePointEscape();
									} else {
										var unescaped_1 = this.scanHexEscape(ch);
										if (unescaped_1 === null) {
											this.throwUnexpectedToken();
										}
										str += unescaped_1;
									}
									break;
								case 'x':
									var unescaped = this.scanHexEscape(ch);
									if (unescaped === null) {
										this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
									}
									str += unescaped;
									break;
								case 'n':
									str += '\n';
									break;
								case 'r':
									str += '\r';
									break;
								case 't':
									str += '\t';
									break;
								case 'b':
									str += '\b';
									break;
								case 'f':
									str += '\f';
									break;
								case 'v':
									str += '\x0B';
									break;
								case '8':
								case '9':
									str += ch;
									this.tolerateUnexpectedToken();
									break;
								default:
									if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
										var octToDec = this.octalToDecimal(ch);
										octal = octToDec.octal || octal;
										str += String.fromCharCode(octToDec.code);
									} else {
										str += ch;
									}
									break;
							}
						} else {
							++this.lineNumber;
							if (ch === '\r' && this.source[this.index] === '\n') {
								++this.index;
							}
							this.lineStart = this.index;
						}
					} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
						break;
					} else {
						str += ch;
					}
				}
				if (quote !== '') {
					this.index = start;
					this.throwUnexpectedToken();
				}
				return {
					type: 8,
					value: str,
					octal: octal,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};

			Scanner.prototype.scanTemplate = function () {
				var cooked = '';
				var terminated = false;
				var start = this.index;
				var head = this.source[start] === '`';
				var tail = false;
				var rawOffset = 2;
				++this.index;
				while (!this.eof()) {
					var ch = this.source[this.index++];
					if (ch === '`') {
						rawOffset = 1;
						tail = true;
						terminated = true;
						break;
					} else if (ch === '$') {
						if (this.source[this.index] === '{') {
							this.curlyStack.push('${');
							++this.index;
							terminated = true;
							break;
						}
						cooked += ch;
					} else if (ch === '\\') {
						ch = this.source[this.index++];
						if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
							switch (ch) {
								case 'n':
									cooked += '\n';
									break;
								case 'r':
									cooked += '\r';
									break;
								case 't':
									cooked += '\t';
									break;
								case 'u':
									if (this.source[this.index] === '{') {
										++this.index;
										cooked += this.scanUnicodeCodePointEscape();
									} else {
										var restore = this.index;
										var unescaped_2 = this.scanHexEscape(ch);
										if (unescaped_2 !== null) {
											cooked += unescaped_2;
										} else {
											this.index = restore;
											cooked += ch;
										}
									}
									break;
								case 'x':
									var unescaped = this.scanHexEscape(ch);
									if (unescaped === null) {
										this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
									}
									cooked += unescaped;
									break;
								case 'b':
									cooked += '\b';
									break;
								case 'f':
									cooked += '\f';
									break;
								case 'v':
									cooked += '\v';
									break;
								default:
									if (ch === '0') {
										if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
											this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
										}
										cooked += '\0';
									} else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
										this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
									} else {
										cooked += ch;
									}
									break;
							}
						} else {
							++this.lineNumber;
							if (ch === '\r' && this.source[this.index] === '\n') {
								++this.index;
							}
							this.lineStart = this.index;
						}
					} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
						++this.lineNumber;
						if (ch === '\r' && this.source[this.index] === '\n') {
							++this.index;
						}
						this.lineStart = this.index;
						cooked += '\n';
					} else {
						cooked += ch;
					}
				}
				if (!terminated) {
					this.throwUnexpectedToken();
				}
				if (!head) {
					this.curlyStack.pop();
				}
				return {
					type: 10,
					value: this.source.slice(start + 1, this.index - rawOffset),
					cooked: cooked,
					head: head,
					tail: tail,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};

			Scanner.prototype.testRegExp = function (pattern, flags) {
				var astralSubstitute = '\uFFFF';
				var tmp = pattern;
				var self = this;
				if (flags.indexOf('u') >= 0) {
					tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function ($0, $1, $2) {
						var codePoint = parseInt($1 || $2, 16);
						if (codePoint > 0x10FFFF) {
							self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
						}
						if (codePoint <= 0xFFFF) {
							return String.fromCharCode(codePoint);
						}
						return astralSubstitute;
					}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
				}

				try {
					RegExp(tmp);
				} catch (e) {
					this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
				}

				try {
					return new RegExp(pattern, flags);
				} catch (exception) {
					return null;
				}
			};
			Scanner.prototype.scanRegExpBody = function () {
				var ch = this.source[this.index];
				assert_1.assert(ch === '/', 'Regular expression literal must start with a slash');
				var str = this.source[this.index++];
				var classMarker = false;
				var terminated = false;
				while (!this.eof()) {
					ch = this.source[this.index++];
					str += ch;
					if (ch === '\\') {
						ch = this.source[this.index++];

						if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
							this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
						}
						str += ch;
					} else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
						this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
					} else if (classMarker) {
						if (ch === ']') {
							classMarker = false;
						}
					} else {
						if (ch === '/') {
							terminated = true;
							break;
						} else if (ch === '[') {
							classMarker = true;
						}
					}
				}
				if (!terminated) {
					this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
				}

				return str.substr(1, str.length - 2);
			};
			Scanner.prototype.scanRegExpFlags = function () {
				var str = '';
				var flags = '';
				while (!this.eof()) {
					var ch = this.source[this.index];
					if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
						break;
					}
					++this.index;
					if (ch === '\\' && !this.eof()) {
						ch = this.source[this.index];
						if (ch === 'u') {
							++this.index;
							var restore = this.index;
							var char = this.scanHexEscape('u');
							if (char !== null) {
								flags += char;
								for (str += '\\u'; restore < this.index; ++restore) {
									str += this.source[restore];
								}
							} else {
								this.index = restore;
								flags += 'u';
								str += '\\u';
							}
							this.tolerateUnexpectedToken();
						} else {
							str += '\\';
							this.tolerateUnexpectedToken();
						}
					} else {
						flags += ch;
						str += ch;
					}
				}
				return flags;
			};
			Scanner.prototype.scanRegExp = function () {
				var start = this.index;
				var pattern = this.scanRegExpBody();
				var flags = this.scanRegExpFlags();
				var value = this.testRegExp(pattern, flags);
				return {
					type: 9,
					value: '',
					pattern: pattern,
					flags: flags,
					regex: value,
					lineNumber: this.lineNumber,
					lineStart: this.lineStart,
					start: start,
					end: this.index
				};
			};
			Scanner.prototype.lex = function () {
				if (this.eof()) {
					return {
						type: 2,
						value: '',
						lineNumber: this.lineNumber,
						lineStart: this.lineStart,
						start: this.index,
						end: this.index
					};
				}
				var cp = this.source.charCodeAt(this.index);
				if (character_1.Character.isIdentifierStart(cp)) {
					return this.scanIdentifier();
				}

				if (cp === 0x28 || cp === 0x29 || cp === 0x3B) {
					return this.scanPunctuator();
				}

				if (cp === 0x27 || cp === 0x22) {
					return this.scanStringLiteral();
				}

				if (cp === 0x2E) {
					if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
						return this.scanNumericLiteral();
					}
					return this.scanPunctuator();
				}
				if (character_1.Character.isDecimalDigit(cp)) {
					return this.scanNumericLiteral();
				}

				if (cp === 0x60 || cp === 0x7D && this.curlyStack[this.curlyStack.length - 1] === '${') {
					return this.scanTemplate();
				}

				if (cp >= 0xD800 && cp < 0xDFFF) {
					if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
						return this.scanIdentifier();
					}
				}
				return this.scanPunctuator();
			};
			return Scanner;
		}();
		exports.Scanner = Scanner;
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		exports.TokenName = {};
		exports.TokenName[1] = 'Boolean';
		exports.TokenName[2] = '<end>';
		exports.TokenName[3] = 'Identifier';
		exports.TokenName[4] = 'Keyword';
		exports.TokenName[5] = 'Null';
		exports.TokenName[6] = 'Numeric';
		exports.TokenName[7] = 'Punctuator';
		exports.TokenName[8] = 'String';
		exports.TokenName[9] = 'RegularExpression';
		exports.TokenName[10] = 'Template';
	}, function (module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		exports.XHTMLEntities = {
			quot: '"',
			amp: '&',
			apos: '\'',
			gt: '>',
			nbsp: '\xA0',
			iexcl: '\xA1',
			cent: '\xA2',
			pound: '\xA3',
			curren: '\xA4',
			yen: '\xA5',
			brvbar: '\xA6',
			sect: '\xA7',
			uml: '\xA8',
			copy: '\xA9',
			ordf: '\xAA',
			laquo: '\xAB',
			not: '\xAC',
			shy: '\xAD',
			reg: '\xAE',
			macr: '\xAF',
			deg: '\xB0',
			plusmn: '\xB1',
			sup2: '\xB2',
			sup3: '\xB3',
			acute: '\xB4',
			micro: '\xB5',
			para: '\xB6',
			middot: '\xB7',
			cedil: '\xB8',
			sup1: '\xB9',
			ordm: '\xBA',
			raquo: '\xBB',
			frac14: '\xBC',
			frac12: '\xBD',
			frac34: '\xBE',
			iquest: '\xBF',
			Agrave: '\xC0',
			Aacute: '\xC1',
			Acirc: '\xC2',
			Atilde: '\xC3',
			Auml: '\xC4',
			Aring: '\xC5',
			AElig: '\xC6',
			Ccedil: '\xC7',
			Egrave: '\xC8',
			Eacute: '\xC9',
			Ecirc: '\xCA',
			Euml: '\xCB',
			Igrave: '\xCC',
			Iacute: '\xCD',
			Icirc: '\xCE',
			Iuml: '\xCF',
			ETH: '\xD0',
			Ntilde: '\xD1',
			Ograve: '\xD2',
			Oacute: '\xD3',
			Ocirc: '\xD4',
			Otilde: '\xD5',
			Ouml: '\xD6',
			times: '\xD7',
			Oslash: '\xD8',
			Ugrave: '\xD9',
			Uacute: '\xDA',
			Ucirc: '\xDB',
			Uuml: '\xDC',
			Yacute: '\xDD',
			THORN: '\xDE',
			szlig: '\xDF',
			agrave: '\xE0',
			aacute: '\xE1',
			acirc: '\xE2',
			atilde: '\xE3',
			auml: '\xE4',
			aring: '\xE5',
			aelig: '\xE6',
			ccedil: '\xE7',
			egrave: '\xE8',
			eacute: '\xE9',
			ecirc: '\xEA',
			euml: '\xEB',
			igrave: '\xEC',
			iacute: '\xED',
			icirc: '\xEE',
			iuml: '\xEF',
			eth: '\xF0',
			ntilde: '\xF1',
			ograve: '\xF2',
			oacute: '\xF3',
			ocirc: '\xF4',
			otilde: '\xF5',
			ouml: '\xF6',
			divide: '\xF7',
			oslash: '\xF8',
			ugrave: '\xF9',
			uacute: '\xFA',
			ucirc: '\xFB',
			uuml: '\xFC',
			yacute: '\xFD',
			thorn: '\xFE',
			yuml: '\xFF',
			OElig: '\u0152',
			oelig: '\u0153',
			Scaron: '\u0160',
			scaron: '\u0161',
			Yuml: '\u0178',
			fnof: '\u0192',
			circ: '\u02C6',
			tilde: '\u02DC',
			Alpha: '\u0391',
			Beta: '\u0392',
			Gamma: '\u0393',
			Delta: '\u0394',
			Epsilon: '\u0395',
			Zeta: '\u0396',
			Eta: '\u0397',
			Theta: '\u0398',
			Iota: '\u0399',
			Kappa: '\u039A',
			Lambda: '\u039B',
			Mu: '\u039C',
			Nu: '\u039D',
			Xi: '\u039E',
			Omicron: '\u039F',
			Pi: '\u03A0',
			Rho: '\u03A1',
			Sigma: '\u03A3',
			Tau: '\u03A4',
			Upsilon: '\u03A5',
			Phi: '\u03A6',
			Chi: '\u03A7',
			Psi: '\u03A8',
			Omega: '\u03A9',
			alpha: '\u03B1',
			beta: '\u03B2',
			gamma: '\u03B3',
			delta: '\u03B4',
			epsilon: '\u03B5',
			zeta: '\u03B6',
			eta: '\u03B7',
			theta: '\u03B8',
			iota: '\u03B9',
			kappa: '\u03BA',
			lambda: '\u03BB',
			mu: '\u03BC',
			nu: '\u03BD',
			xi: '\u03BE',
			omicron: '\u03BF',
			pi: '\u03C0',
			rho: '\u03C1',
			sigmaf: '\u03C2',
			sigma: '\u03C3',
			tau: '\u03C4',
			upsilon: '\u03C5',
			phi: '\u03C6',
			chi: '\u03C7',
			psi: '\u03C8',
			omega: '\u03C9',
			thetasym: '\u03D1',
			upsih: '\u03D2',
			piv: '\u03D6',
			ensp: '\u2002',
			emsp: '\u2003',
			thinsp: '\u2009',
			zwnj: '\u200C',
			zwj: '\u200D',
			lrm: '\u200E',
			rlm: '\u200F',
			ndash: '\u2013',
			mdash: '\u2014',
			lsquo: '\u2018',
			rsquo: '\u2019',
			sbquo: '\u201A',
			ldquo: '\u201C',
			rdquo: '\u201D',
			bdquo: '\u201E',
			dagger: '\u2020',
			Dagger: '\u2021',
			bull: '\u2022',
			hellip: '\u2026',
			permil: '\u2030',
			prime: '\u2032',
			Prime: '\u2033',
			lsaquo: '\u2039',
			rsaquo: '\u203A',
			oline: '\u203E',
			frasl: '\u2044',
			euro: '\u20AC',
			image: '\u2111',
			weierp: '\u2118',
			real: '\u211C',
			trade: '\u2122',
			alefsym: '\u2135',
			larr: '\u2190',
			uarr: '\u2191',
			rarr: '\u2192',
			darr: '\u2193',
			harr: '\u2194',
			crarr: '\u21B5',
			lArr: '\u21D0',
			uArr: '\u21D1',
			rArr: '\u21D2',
			dArr: '\u21D3',
			hArr: '\u21D4',
			forall: '\u2200',
			part: '\u2202',
			exist: '\u2203',
			empty: '\u2205',
			nabla: '\u2207',
			isin: '\u2208',
			notin: '\u2209',
			ni: '\u220B',
			prod: '\u220F',
			sum: '\u2211',
			minus: '\u2212',
			lowast: '\u2217',
			radic: '\u221A',
			prop: '\u221D',
			infin: '\u221E',
			ang: '\u2220',
			and: '\u2227',
			or: '\u2228',
			cap: '\u2229',
			cup: '\u222A',
			int: '\u222B',
			there4: '\u2234',
			sim: '\u223C',
			cong: '\u2245',
			asymp: '\u2248',
			ne: '\u2260',
			equiv: '\u2261',
			le: '\u2264',
			ge: '\u2265',
			sub: '\u2282',
			sup: '\u2283',
			nsub: '\u2284',
			sube: '\u2286',
			supe: '\u2287',
			oplus: '\u2295',
			otimes: '\u2297',
			perp: '\u22A5',
			sdot: '\u22C5',
			lceil: '\u2308',
			rceil: '\u2309',
			lfloor: '\u230A',
			rfloor: '\u230B',
			loz: '\u25CA',
			spades: '\u2660',
			clubs: '\u2663',
			hearts: '\u2665',
			diams: '\u2666',
			lang: '\u27E8',
			rang: '\u27E9'
		};
	}, function (module, exports, __webpack_require__) {

		"use strict";

		Object.defineProperty(exports, "__esModule", { value: true });
		var error_handler_1 = __webpack_require__(10);
		var scanner_1 = __webpack_require__(12);
		var token_1 = __webpack_require__(13);
		var Reader = function () {
			function Reader() {
				this.values = [];
				this.curly = this.paren = -1;
			}

			Reader.prototype.beforeFunctionExpression = function (t) {
				return ['(', '{', '[', 'in', 'typeof', 'instanceof', 'new', 'return', 'case', 'delete', 'throw', 'void', '=', '+=', '-=', '*=', '**=', '/=', '%=', '<<=', '>>=', '>>>=', '&=', '|=', '^=', ',', '+', '-', '*', '**', '/', '%', '++', '--', '<<', '>>', '>>>', '&', '|', '^', '!', '~', '&&', '||', '?', ':', '===', '==', '>=', '<=', '<', '>', '!=', '!=='].indexOf(t) >= 0;
			};

			Reader.prototype.isRegexStart = function () {
				var previous = this.values[this.values.length - 1];
				var regex = previous !== null;
				switch (previous) {
					case 'this':
					case ']':
						regex = false;
						break;
					case ')':
						var keyword = this.values[this.paren - 1];
						regex = keyword === 'if' || keyword === 'while' || keyword === 'for' || keyword === 'with';
						break;
					case '}':
						regex = false;
						if (this.values[this.curly - 3] === 'function') {
							var check = this.values[this.curly - 4];
							regex = check ? !this.beforeFunctionExpression(check) : false;
						} else if (this.values[this.curly - 4] === 'function') {
							var check = this.values[this.curly - 5];
							regex = check ? !this.beforeFunctionExpression(check) : true;
						}
						break;
					default:
						break;
				}
				return regex;
			};
			Reader.prototype.push = function (token) {
				if (token.type === 7 || token.type === 4) {
						if (token.value === '{') {
							this.curly = this.values.length;
						} else if (token.value === '(') {
							this.paren = this.values.length;
						}
						this.values.push(token.value);
					} else {
					this.values.push(null);
				}
			};
			return Reader;
		}();
		var Tokenizer = function () {
			function Tokenizer(code, config) {
				this.errorHandler = new error_handler_1.ErrorHandler();
				this.errorHandler.tolerant = config ? typeof config.tolerant === 'boolean' && config.tolerant : false;
				this.scanner = new scanner_1.Scanner(code, this.errorHandler);
				this.scanner.trackComment = config ? typeof config.comment === 'boolean' && config.comment : false;
				this.trackRange = config ? typeof config.range === 'boolean' && config.range : false;
				this.trackLoc = config ? typeof config.loc === 'boolean' && config.loc : false;
				this.buffer = [];
				this.reader = new Reader();
			}
			Tokenizer.prototype.errors = function () {
				return this.errorHandler.errors;
			};
			Tokenizer.prototype.getNextToken = function () {
				if (this.buffer.length === 0) {
					var comments = this.scanner.scanComments();
					if (this.scanner.trackComment) {
						for (var i = 0; i < comments.length; ++i) {
							var e = comments[i];
							var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
							var comment = {
								type: e.multiLine ? 'BlockComment' : 'LineComment',
								value: value
							};
							if (this.trackRange) {
								comment.range = e.range;
							}
							if (this.trackLoc) {
								comment.loc = e.loc;
							}
							this.buffer.push(comment);
						}
					}
					if (!this.scanner.eof()) {
						var loc = void 0;
						if (this.trackLoc) {
							loc = {
								start: {
									line: this.scanner.lineNumber,
									column: this.scanner.index - this.scanner.lineStart
								},
								end: {}
							};
						}
						var startRegex = this.scanner.source[this.scanner.index] === '/' && this.reader.isRegexStart();
						var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
						this.reader.push(token);
						var entry = {
							type: token_1.TokenName[token.type],
							value: this.scanner.source.slice(token.start, token.end)
						};
						if (this.trackRange) {
							entry.range = [token.start, token.end];
						}
						if (this.trackLoc) {
							loc.end = {
								line: this.scanner.lineNumber,
								column: this.scanner.index - this.scanner.lineStart
							};
							entry.loc = loc;
						}
						if (token.type === 9) {
								var pattern = token.pattern;
								var flags = token.flags;
								entry.regex = { pattern: pattern, flags: flags };
							}
						this.buffer.push(entry);
					}
				}
				return this.buffer.shift();
			};
			return Tokenizer;
		}();
		exports.Tokenizer = Tokenizer;
	}]);
});
;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "4N03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),

/***/ "4y4D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__("Xk23");

function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "5U5Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__("yeiR");

function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "6D6M":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseExtremum = __webpack_require__("tEIQ"),
    baseGt = __webpack_require__("UVCT"),
    baseIteratee = __webpack_require__("lW7l");

function maxBy(array, iteratee) {
    return array && array.length ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt) : undefined;
}

module.exports = maxBy;

/***/ }),

/***/ "6KFX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ "6MLN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__("wLcK")(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "6fmF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var yaml = __webpack_require__("BW56");

module.exports = yaml;

/***/ }),

/***/ "6t7t":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("nFDa"), __esModule: true };

/***/ }),

/***/ "6ykg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__("49I8"),
    equalArrays = __webpack_require__("pkMv"),
    equalByTag = __webpack_require__("oaAh"),
    equalObjects = __webpack_require__("mFpP"),
    getTag = __webpack_require__("tQCT"),
    isArray = __webpack_require__("p/0c"),
    isBuffer = __webpack_require__("iyC2"),
    isTypedArray = __webpack_require__("kwIb");

var COMPARE_PARTIAL_FLAG = 1;

var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "78AQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function YAMLException(reason, mark) {
  Error.call(this);

  this.name = 'YAMLException';
  this.reason = reason;
  this.mark = mark;
  this.message = (this.reason || '(unknown reason)') + (this.mark ? ' ' + this.mark.toString() : '');

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || '';
  }
}

YAMLException.prototype = Object.create(Error.prototype);
YAMLException.prototype.constructor = YAMLException;

YAMLException.prototype.toString = function toString(compact) {
  var result = this.name + ': ';

  result += this.reason || '(unknown reason)';

  if (!compact && this.mark) {
    result += ' ' + this.mark.toString();
  }

  return result;
};

module.exports = YAMLException;

/***/ }),

/***/ "78jo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _linkRule = __webpack_require__("KzYS");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__("ciB6");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var StyleSheet = function () {
  function StyleSheet(styles, options) {
    _classCallCheck(this, StyleSheet);

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;

        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      this.deployed = false;

      return rule;
    }

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        added.push(this.addRule(name, styles[name], options));
      }
      return added;
    }

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

  }, {
    key: 'update',
    value: function update(name, data) {
      this.rules.update(name, data);
      return this;
    }

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),

/***/ "7AqT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("ZHvQ");
var ITERATOR = __webpack_require__("Ug9I")('iterator');
var Iterators = __webpack_require__("dhak");
module.exports = __webpack_require__("zKeE").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),

/***/ "7BjG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "7Liz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),

/***/ "7Mmb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "7XZw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__("8FtN");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _deepmerge = __webpack_require__("BokN");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!theme.overrides || !name || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _extends3.default)({}, styles);

    (0, _keys2.default)(overrides).forEach(function (key) {
       false ? (0, _warning2.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', 'Fix the `' + key + '` key of `theme.overrides.' + name + '`.'].join('\n')) : void 0;
      stylesWithOverrides[key] = (0, _deepmerge2.default)(stylesWithOverrides[key], overrides[key]);
    });

    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

exports.default = getStylesCreator;

/***/ }),

/***/ "7tZR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");
var isArray = __webpack_require__("ayXv");
var SPECIES = __webpack_require__("Ug9I")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }return C === undefined ? Array : C;
};

/***/ }),

/***/ "808+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = global.CSS;

var env = "production";

var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};

/***/ }),

/***/ "85ue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__("ZC1a");

function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "8FtN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("eOjq"), __esModule: true };

/***/ }),

/***/ "9I/U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',

  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};

/***/ }),

/***/ "9kxq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");
var document = __webpack_require__("i1Q6").document;

var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),

/***/ "9ocJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "9okA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("5D9O");

exports['default'] = {
  jss: (0, _propTypes.shape)({
    options: (0, _propTypes.shape)({
      createGenerateClassName: _propTypes.func.isRequired
    }).isRequired,
    createStyleSheet: _propTypes.func.isRequired,
    removeStyleSheet: _propTypes.func.isRequired
  }),
  registry: (0, _propTypes.shape)({
    add: _propTypes.func.isRequired,
    toString: _propTypes.func.isRequired
  })
};

/***/ }),

/***/ "9qb7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg === 'undefined' ? 'undefined' : _typeof(arg);

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if ("function" === 'function' && _typeof(__webpack_require__("yNJ0")) === 'object' && __webpack_require__("yNJ0")) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
})();

/***/ }),

/***/ "A+gr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var MAX_SAFE_INTEGER = 9007199254740991;

var reIsUint = /^(?:0|[1-9]\d*)$/;

function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "A8RV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseToString = __webpack_require__("3w4y");

function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "AHkM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};

exports.default = pink;

/***/ }),

/***/ "Aa2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var global = __webpack_require__("i1Q6");
var has = __webpack_require__("yS17");
var DESCRIPTORS = __webpack_require__("6MLN");
var $export = __webpack_require__("vSO4");
var redefine = __webpack_require__("gojl");
var META = __webpack_require__("e8vu").KEY;
var $fails = __webpack_require__("wLcK");
var shared = __webpack_require__("NB7d");
var setToStringTag = __webpack_require__("11Ut");
var uid = __webpack_require__("X6va");
var wks = __webpack_require__("Ug9I");
var wksExt = __webpack_require__("ZxII");
var wksDefine = __webpack_require__("c2zY");
var enumKeys = __webpack_require__("ycyv");
var isArray = __webpack_require__("ayXv");
var anObject = __webpack_require__("zotD");
var isObject = __webpack_require__("BxvP");
var toIObject = __webpack_require__("Wyka");
var toPrimitive = __webpack_require__("EKwp");
var createDesc = __webpack_require__("0WCH");
var _create = __webpack_require__("TNJq");
var gOPNExt = __webpack_require__("rMkZ");
var $GOPD = __webpack_require__("sxPs");
var $DP = __webpack_require__("Gfzd");
var $keys = __webpack_require__("knrM");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("Ni5N").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("z7R8").f = $propertyIsEnumerable;
  __webpack_require__("Ocr3").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("1kq3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },

  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  create: $create,

  defineProperty: $defineProperty,

  defineProperties: $defineProperties,

  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,

  getOwnPropertyNames: $getOwnPropertyNames,

  getOwnPropertySymbols: $getOwnPropertySymbols
});

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();

  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return;
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("akPY")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);

setToStringTag($Symbol, 'Symbol');

setToStringTag(Math, 'Math', true);

setToStringTag(global.JSON, 'JSON', true);

/***/ }),

/***/ "AePr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__("Gfzd").f;
var create = __webpack_require__("TNJq");
var redefineAll = __webpack_require__("O6kh");
var ctx = __webpack_require__("3zRh");
var anInstance = __webpack_require__("KUik");
var forOf = __webpack_require__("ozpD");
var $iterDefine = __webpack_require__("uRfg");
var step = __webpack_require__("xwD+");
var setSpecies = __webpack_require__("FGzK");
var DESCRIPTORS = __webpack_require__("6MLN");
var fastKey = __webpack_require__("e8vu").fastKey;
var validate = __webpack_require__("7Liz");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;
      that._i = create(null);
      that._f = undefined;
      that._l = undefined;
      that[SIZE] = 0;
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },

      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }return !!entry;
      },

      forEach: function forEach(callbackfn) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },

      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;

    if (entry) {
      entry.v = value;
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        k: key,
        v: value,
        p: prev = that._l,
        n: undefined,
        r: false };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;

      if (index !== 'F') that._i[index] = entry;
    }return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME);
      this._k = kind;
      this._l = undefined;
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;

      while (entry && entry.r) {
        entry = entry.p;
      }
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        that._t = undefined;
        return step(1);
      }

      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    setSpecies(NAME);
  }
};

/***/ }),

/***/ "Ag0p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__("FTXF");

var HASH_UNDEFINED = '__lodash_hash_undefined__';

function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "Aq8W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("dXs8"), __esModule: true };

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "B/Nj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isPrototype = __webpack_require__("nhsl"),
    nativeKeys = __webpack_require__("0J1o");

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "B9Lq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("yS17");
var toIObject = __webpack_require__("Wyka");
var arrayIndexOf = __webpack_require__("LNnS")(false);
var IE_PROTO = __webpack_require__("/wuY")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  }
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "BW56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var loader = __webpack_require__("puZk");
var dumper = __webpack_require__("ZuFa");

function deprecated(name) {
  return function () {
    throw new Error('Function ' + name + ' is deprecated and cannot be used.');
  };
}

module.exports.Type = __webpack_require__("XcPh");
module.exports.Schema = __webpack_require__("nYLM");
module.exports.FAILSAFE_SCHEMA = __webpack_require__("EJga");
module.exports.JSON_SCHEMA = __webpack_require__("ZUfC");
module.exports.CORE_SCHEMA = __webpack_require__("wwCT");
module.exports.DEFAULT_SAFE_SCHEMA = __webpack_require__("tLdR");
module.exports.DEFAULT_FULL_SCHEMA = __webpack_require__("HKwV");
module.exports.load = loader.load;
module.exports.loadAll = loader.loadAll;
module.exports.safeLoad = loader.safeLoad;
module.exports.safeLoadAll = loader.safeLoadAll;
module.exports.dump = dumper.dump;
module.exports.safeDump = dumper.safeDump;
module.exports.YAMLException = __webpack_require__("78AQ");

module.exports.MINIMAL_SCHEMA = __webpack_require__("EJga");
module.exports.SAFE_SCHEMA = __webpack_require__("tLdR");
module.exports.DEFAULT_SCHEMA = __webpack_require__("HKwV");

module.exports.scan = deprecated('scan');
module.exports.parse = deprecated('parse');
module.exports.compose = deprecated('compose');
module.exports.addConstructor = deprecated('addConstructor');

/***/ }),

/***/ "BX4+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("ky2m"), __esModule: true };

/***/ }),

/***/ "BblM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "BokN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value) && !isSpecial(value);
};

function isNonNullObject(value) {
	return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]' || stringValue === '[object Date]' || isReactElement(value);
}

var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE;
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {};
}

function cloneUnlessOtherwiseSpecified(value, optionsArgument) {
	var clone = !optionsArgument || optionsArgument.clone !== false;

	return clone && isMergeableObject(value) ? deepmerge(emptyTarget(value), value, optionsArgument) : value;
}

function defaultArrayMerge(target, source, optionsArgument) {
	return target.concat(source).map(function (element) {
		return cloneUnlessOtherwiseSpecified(element, optionsArgument);
	});
}

function mergeObject(target, source, optionsArgument) {
	var destination = {};
	if (isMergeableObject(target)) {
		Object.keys(target).forEach(function (key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], optionsArgument);
		});
	}
	Object.keys(source).forEach(function (key) {
		if (!isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], optionsArgument);
		} else {
			destination[key] = deepmerge(target[key], source[key], optionsArgument);
		}
	});
	return destination;
}

function deepmerge(target, source, optionsArgument) {
	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var options = optionsArgument || { arrayMerge: defaultArrayMerge };
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, optionsArgument);
	} else if (sourceIsArray) {
		var arrayMerge = options.arrayMerge || defaultArrayMerge;
		return arrayMerge(target, source, optionsArgument);
	} else {
		return mergeObject(target, source, optionsArgument);
	}
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array');
	}

	return array.reduce(function (prev, next) {
		return deepmerge(prev, next, optionsArgument);
	}, {});
};

var deepmerge_1 = deepmerge;

exports.default = deepmerge_1;

/***/ }),

/***/ "BtHH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__("mbLO");
var $getPrototypeOf = __webpack_require__("HHE0");

__webpack_require__("cOHw")('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),

/***/ "BxvP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),

/***/ "C8N4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hashClear = __webpack_require__("1RxS"),
    hashDelete = __webpack_require__("qBl2"),
    hashGet = __webpack_require__("hClK"),
    hashHas = __webpack_require__("YIaf"),
    hashSet = __webpack_require__("Ag0p");

function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "C8j1":
/***/ (function(module, exports) {

module.exports = {"label":"Frontend","status":"done","icon":"check","children":[{"label":"Presentation","status":"done","icon":"check","children":[{"label":"HTML","children":[{"label":"Navigation"},{"label":"Semantics"},{"label":"Input"}]},{"label":"CSS","status":"active","icon":"ellipsis","children":[{"label":"Layout"},{"label":"Positioning"},{"label":"Styling"}]}]},{"label":"Scripting","children":[{"label":"Javascript","children":[{"label":"Variables","children":[{"label":"Functions","children":[{"label":"Events","children":[{"label":"DOM"}]},{"label":"Async"},{"label":"Classes"},{"label":"Pure Functions","children":[{"label":"Unit Testing"}]}]},{"label":"Collections","children":[{"label":"Loops"},{"label":"Observables"},{"label":"Proxies"},{"label":"Immutability"}]}]}]}]}]}

/***/ }),

/***/ "C9fO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

function resolveYamlNull(data) {
  if (data === null) return true;

  var max = data.length;

  return max === 1 && data === '~' || max === 4 && (data === 'null' || data === 'Null' || data === 'NULL');
}

function constructYamlNull() {
  return null;
}

function isNull(object) {
  return object === null;
}

module.exports = new Type('tag:yaml.org,2002:null', {
  kind: 'scalar',
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function canonical() {
      return '~';
    },
    lowercase: function lowercase() {
      return 'null';
    },
    uppercase: function uppercase() {
      return 'NULL';
    },
    camelcase: function camelcase() {
      return 'Null';
    }
  },
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "COf8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("OYXR");
var global = __webpack_require__("i1Q6");
var hide = __webpack_require__("akPY");
var Iterators = __webpack_require__("dhak");
var TO_STRING_TAG = __webpack_require__("Ug9I")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),

/***/ "CXfR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("u9vI"),
    now = __webpack_require__("0pJf"),
    toNumber = __webpack_require__("iS0Z");

var FUNC_ERROR_TEXT = 'Expected a function';

var nativeMax = Math.max,
    nativeMin = Math.min;

function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    lastInvokeTime = time;

    timerId = setTimeout(timerExpired, wait);

    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "CjKE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};

exports.default = grey;

/***/ }),

/***/ "E1jM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__("Tnr5"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isIndex = __webpack_require__("A+gr"),
    isLength = __webpack_require__("GmNU"),
    toKey = __webpack_require__("RQ0L");

function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),

/***/ "E5Ce":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__("ShN9");

module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),

/***/ "E5qx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("u9vI");

function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ }),

/***/ "EJga":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var Schema = __webpack_require__("nYLM");

module.exports = new Schema({
  explicit: [__webpack_require__("Fal9"), __webpack_require__("U5Pz"), __webpack_require__("a4cL")]
});

/***/ }),

/***/ "EKwp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");

module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),

/***/ "EiMJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__("wtMJ");

var FUNC_ERROR_TEXT = 'Expected a function';

function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),

/***/ "EvLK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayFilter = __webpack_require__("uvMU"),
    stubArray = __webpack_require__("7Mmb");

var objectProto = Object.prototype;

var propertyIsEnumerable = objectProto.propertyIsEnumerable;

var nativeGetSymbols = Object.getOwnPropertySymbols;

var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),

/***/ "Ewuv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__("yEjJ");

function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "FFZn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("3v7p"), __esModule: true };

/***/ }),

/***/ "FGzK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("i1Q6");
var core = __webpack_require__("zKeE");
var dP = __webpack_require__("Gfzd");
var DESCRIPTORS = __webpack_require__("6MLN");
var SPECIES = __webpack_require__("Ug9I")('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),

/***/ "FTXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC");

var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "Fal9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

module.exports = new Type('tag:yaml.org,2002:str', {
  kind: 'scalar',
  construct: function construct(data) {
    return data !== null ? data : '';
  }
});

/***/ }),

/***/ "FrMg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("Q3lV");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("+FOY");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' });

var MoreHoriz = function MoreHoriz(props) {
  return _react2.default.createElement(SvgIconCustom, props, _ref);
};

MoreHoriz = (0, _pure2.default)(MoreHoriz);
MoreHoriz.muiName = 'SvgIcon';

exports.default = MoreHoriz;

/***/ }),

/***/ "FzLb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

/***/ }),

/***/ "G3gK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__("ZC1a");

function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "GPtb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';

/***/ }),

/***/ "GcxN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__("78jo");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__("hM0O");

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var maxRules = 1e10;

var env = "production";

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';

  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),

/***/ "Gfzd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("zotD");
var IE8_DOM_DEFINE = __webpack_require__("R6c1");
var toPrimitive = __webpack_require__("EKwp");
var dP = Object.defineProperty;

exports.f = __webpack_require__("6MLN") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),

/***/ "GmNU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MAX_SAFE_INTEGER = 9007199254740991;

function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "GrS1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

function resolveYamlBoolean(data) {
  if (data === null) return false;

  var max = data.length;

  return max === 4 && (data === 'true' || data === 'True' || data === 'TRUE') || max === 5 && (data === 'false' || data === 'False' || data === 'FALSE');
}

function constructYamlBoolean(data) {
  return data === 'true' || data === 'True' || data === 'TRUE';
}

function isBoolean(object) {
  return Object.prototype.toString.call(object) === '[object Boolean]';
}

module.exports = new Type('tag:yaml.org,2002:bool', {
  kind: 'scalar',
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function lowercase(object) {
      return object ? 'true' : 'false';
    },
    uppercase: function uppercase(object) {
      return object ? 'TRUE' : 'FALSE';
    },
    camelcase: function camelcase(object) {
      return object ? 'True' : 'False';
    }
  },
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "Gsi0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),

/***/ "GyB/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _iterator = __webpack_require__("6t7t");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("ibPW");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "HHE0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__("yS17");
var toObject = __webpack_require__("mbLO");
var IE_PROTO = __webpack_require__("/wuY")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),

/***/ "HI10":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayLikeKeys = __webpack_require__("VcL+"),
    baseKeys = __webpack_require__("B/Nj"),
    isArrayLike = __webpack_require__("LN6c");

function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "HKwV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var Schema = __webpack_require__("nYLM");

module.exports = Schema.DEFAULT = new Schema({
  include: [__webpack_require__("tLdR")],
  explicit: [__webpack_require__("fT4J"), __webpack_require__("bAag"), __webpack_require__("a0mu")]
});

/***/ }),

/***/ "IAJx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("jHxp");
module.exports = __webpack_require__("zKeE").Number.isNaN;

/***/ }),

/***/ "IC7E":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");
var aFunction = __webpack_require__("g31e");
var ctx = __webpack_require__("3zRh");
var forOf = __webpack_require__("ozpD");

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    } });
};

/***/ }),

/***/ "ID6i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {};

/***/ }),

/***/ "IEr9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var common = {
  black: '#000',
  white: '#fff'
};

exports.default = common;

/***/ }),

/***/ "IVes":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),

/***/ "JZ8d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),

/***/ "JkW7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _demo = __webpack_require__("QpFG");

var _demo2 = _interopRequireDefault(_demo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _demo2.default;

/***/ }),

/***/ "Jpv1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "Ju+9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__("S/mA");

function Mark(name, buffer, position, line, column) {
  this.name = name;
  this.buffer = buffer;
  this.position = position;
  this.line = line;
  this.column = column;
}

Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
  var head, start, tail, end, snippet;

  if (!this.buffer) return null;

  indent = indent || 4;
  maxLength = maxLength || 75;

  head = '';
  start = this.position;

  while (start > 0 && '\0\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(start - 1)) === -1) {
    start -= 1;
    if (this.position - start > maxLength / 2 - 1) {
      head = ' ... ';
      start += 5;
      break;
    }
  }

  tail = '';
  end = this.position;

  while (end < this.buffer.length && '\0\r\n\x85\u2028\u2029'.indexOf(this.buffer.charAt(end)) === -1) {
    end += 1;
    if (end - this.position > maxLength / 2 - 1) {
      tail = ' ... ';
      end -= 5;
      break;
    }
  }

  snippet = this.buffer.slice(start, end);

  return common.repeat(' ', indent) + head + snippet + tail + '\n' + common.repeat(' ', indent + this.position - start + head.length) + '^';
};

Mark.prototype.toString = function toString(compact) {
  var snippet,
      where = '';

  if (this.name) {
    where += 'in "' + this.name + '" ';
  }

  where += 'at line ' + (this.line + 1) + ', column ' + (this.column + 1);

  if (!compact) {
    snippet = this.getSnippet();

    if (snippet) {
      where += ':\n' + snippet;
    }
  }

  return where;
};

module.exports = Mark;

/***/ }),

/***/ "K+F3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("tuDi");
__webpack_require__("i+u+");
__webpack_require__("COf8");
__webpack_require__("SKjJ");
__webpack_require__("2SH0");
__webpack_require__("oRPk");
__webpack_require__("VEMT");
module.exports = __webpack_require__("zKeE").Map;

/***/ }),

/***/ "K9uV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "KH2K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

   false ? (0, _warning2.default)(value >= min && value <= max, 'Material-UI: the value provided ' + value + ' is out of range [' + min + ', ' + max + '].') : void 0;

  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

function convertHexToRGB(color) {
  color = color.substr(1);

  var re = new RegExp('.{1,' + color.length / 3 + '}', 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? 'rgb(' + colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', ') + ')' : '';
}

function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') > -1) {
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  }

  if (type.indexOf('hsl') > -1) {
    values[1] = values[1] + '%';
    values[2] = values[2] + '%';
  }

  return color.type + '(' + values.join(', ') + ')';
}

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') > -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } else if (decomposedColor.type.indexOf('hsl') > -1) {
    return decomposedColor.values[2] / 100;
  }

  throw new Error('Material-UI: unsupported `' + color + '` color.');
}

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

function fade(color, value) {
   false ? (0, _warning2.default)(color, 'Material-UI: missing color argument in fade(' + color + ', ' + value + ').') : void 0;

  if (!color) return color;

  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return recomposeColor(color);
}

function darken(color, coefficient) {
   false ? (0, _warning2.default)(color, 'Material-UI: missing color argument in darken(' + color + ', ' + coefficient + ').') : void 0;

  if (!color) return color;

  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}

function lighten(color, coefficient) {
   false ? (0, _warning2.default)(color, 'Material-UI: missing color argument in lighten(' + color + ', ' + coefficient + ').') : void 0;

  if (!color) return color;

  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == (typeof o === "undefined" ? "undefined" : _typeof(o))) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();

/***/ }),

/***/ "KQdW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = undefined;

var _keys = __webpack_require__("8FtN");

var _keys2 = _interopRequireDefault(_keys);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _isNan = __webpack_require__("qwoA");

var _isNan2 = _interopRequireDefault(_isNan);

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var easing = exports.easing = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',

  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',

  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

var duration = exports.duration = {
  shortest: 150,
  shorter: 200,
  short: 250,

  standard: 300,

  complex: 375,

  enteringScreen: 225,

  leavingScreen: 195
};

var formatMs = exports.formatMs = function formatMs(milliseconds) {
  return Math.round(milliseconds) + 'ms';
};
var isString = exports.isString = function isString(value) {
  return typeof value === 'string';
};
var isNumber = exports.isNumber = function isNumber(value) {
  return !(0, _isNan2.default)(parseFloat(value));
};

exports.default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
        durationOption = _options$duration === undefined ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === undefined ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === undefined ? 0 : _options$delay,
        other = (0, _objectWithoutProperties3.default)(options, ['duration', 'easing', 'delay']);

     false ? (0, _warning2.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.') : void 0;
     false ? (0, _warning2.default)(isNumber(durationOption) || isString(durationOption), 'Material-UI: argument "duration" must be a number or a string but found ' + durationOption + '.') : void 0;
     false ? (0, _warning2.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string.') : void 0;
     false ? (0, _warning2.default)(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.') : void 0;
     false ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'Material-UI: unrecognized argument(s) [' + (0, _keys2.default)(other).join(',') + ']') : void 0;

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return animatedProp + ' ' + (typeof durationOption === 'string' ? durationOption : formatMs(durationOption)) + ' ' + easingOption + ' ' + (typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36;

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};

/***/ }),

/***/ "KUik":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }return it;
};

/***/ }),

/***/ "KxjL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),

/***/ "Ky5l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("Aa2f");
__webpack_require__("tuDi");
__webpack_require__("c6mp");
__webpack_require__("2mwf");
module.exports = __webpack_require__("zKeE").Symbol;

/***/ }),

/***/ "KzYS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;

function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),

/***/ "L1YQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__("GyB/");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = __webpack_require__("8FtN");

var _keys2 = _interopRequireDefault(_keys);

exports.capitalize = capitalize;
exports.contains = contains;
exports.findIndex = findIndex;
exports.find = find;
exports.createChainedFunction = createChainedFunction;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function capitalize(string) {
  if (false) {
    throw new Error('Material-UI: capitalize(string) expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function contains(obj, pred) {
  return (0, _keys2.default)(pred).every(function (key) {
    return obj.hasOwnProperty(key) && obj[key] === pred[key];
  });
}

function findIndex(arr, pred) {
  var predType = typeof pred === 'undefined' ? 'undefined' : (0, _typeof3.default)(pred);
  for (var i = 0; i < arr.length; i += 1) {
    if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
      return i;
    }
    if (predType === 'object' && contains(arr[i], pred)) {
      return i;
    }
    if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
      return arr.indexOf(pred);
    }
  }
  return -1;
}

function find(arr, pred) {
  var index = findIndex(arr, pred);
  return index > -1 ? arr[index] : undefined;
}

function createChainedFunction() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (func) {
    return func != null;
  }).reduce(function (acc, func) {
     false ? (0, _warning2.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.') : void 0;

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "LIpy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "LN6c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__("dRuq"),
    isLength = __webpack_require__("GmNU");

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "LNnS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toIObject = __webpack_require__("Wyka");
var toLength = __webpack_require__("S7IM");
var toAbsoluteIndex = __webpack_require__("Zwq5");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];

      if (value != value) return true;
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),

/***/ "LaPR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return [(arguments.length <= 0 ? undefined : arguments[0]) + 'px ' + (arguments.length <= 1 ? undefined : arguments[1]) + 'px ' + (arguments.length <= 2 ? undefined : arguments[2]) + 'px ' + (arguments.length <= 3 ? undefined : arguments[3]) + 'px rgba(0, 0, 0, ' + shadowKeyUmbraOpacity + ')', (arguments.length <= 4 ? undefined : arguments[4]) + 'px ' + (arguments.length <= 5 ? undefined : arguments[5]) + 'px ' + (arguments.length <= 6 ? undefined : arguments[6]) + 'px ' + (arguments.length <= 7 ? undefined : arguments[7]) + 'px rgba(0, 0, 0, ' + shadowKeyPenumbraOpacity + ')', (arguments.length <= 8 ? undefined : arguments[8]) + 'px ' + (arguments.length <= 9 ? undefined : arguments[9]) + 'px ' + (arguments.length <= 10 ? undefined : arguments[10]) + 'px ' + (arguments.length <= 11 ? undefined : arguments[11]) + 'px rgba(0, 0, 0, ' + shadowAmbientShadowOpacity + ')'].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

exports.default = shadows;

/***/ }),

/***/ "LkZ7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;

var _ponyfill = __webpack_require__("JZ8d");

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2.default)(root);
exports.default = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "Lmch":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};

exports.default = red;

/***/ }),

/***/ "LpAF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.walkNode = exports.positionNodeChildren = exports.positionNode = exports.measureNode = exports.getTreeNodes = exports.getTreeLines = exports.getNodeLines = exports.getNodeSiblingOffset = exports.generateHierarchyData = exports.UNIT = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _maxBy = __webpack_require__("6D6M");

var _maxBy2 = _interopRequireDefault(_maxBy);

var _sumBy = __webpack_require__("mqk9");

var _sumBy2 = _interopRequireDefault(_sumBy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNIT = exports.UNIT = 100;

var generateHierarchyData = exports.generateHierarchyData = function generateHierarchyData(tree) {
  tree = measureNode(tree);
  tree = _extends({}, tree, { x: tree.width / 2, y: 0 });
  tree = walkNode(tree, positionNodeChildren);

  var nodes = getTreeNodes(tree);
  var lines = getTreeLines(tree);
  var width = tree.width;
  var height = (0, _maxBy2.default)(nodes, "y").y - tree.y;

  return { nodes: nodes, lines: lines, width: width, height: height };
};

var getNodeSiblingOffset = exports.getNodeSiblingOffset = function getNodeSiblingOffset(node, siblings) {
  var index = siblings.indexOf(node);
  return index ? (0, _sumBy2.default)(siblings.slice(0, index), "width") : 0;
};

var getNodeLines = exports.getNodeLines = function getNodeLines(node) {
  if (!node.children) return [];
  return node.children.map(function (child) {
    var line = {
      x1: node.x,
      y1: node.y,
      x2: child.x,
      y2: child.y
    };

    if (child.status) line.status = child.status;
    return line;
  });
};

var getTreeLines = exports.getTreeLines = function getTreeLines(tree) {
  var lines = [];
  walkNode(tree, function (node) {
    lines.push.apply(lines, getNodeLines(node));
  });
  return lines;
};

var getTreeNodes = exports.getTreeNodes = function getTreeNodes(tree) {
  var nodes = [];
  walkNode(tree, function (node) {
    nodes.push(node);
  });
  return nodes;
};

var measureNode = exports.measureNode = function measureNode(node) {
  if (!node.children || !node.children.length) return _extends({}, node, { width: UNIT });

  var children = node.children.map(function (child) {
    return measureNode(child);
  });
  return _extends({}, node, { children: children, width: (0, _sumBy2.default)(children, "width") });
};

var positionNode = exports.positionNode = function positionNode(node, parent) {
  return _extends({}, node, {
    y: parent.y + UNIT,
    x: parent.x - parent.width / 2 + getNodeSiblingOffset(node, parent.children) + node.width / 2
  });
};

var positionNodeChildren = exports.positionNodeChildren = function positionNodeChildren(node) {
  return _extends({}, node, {
    children: node.children && node.children.map(function (child) {
      return positionNode(child, node);
    })
  });
};

var walkNode = exports.walkNode = function walkNode(node, fn) {
  var result = fn(node);
  if (result) node = result;

  return _extends({}, node, {
    children: node.children && node.children.map(function (child) {
      return walkNode(child, fn);
    })
  });
};

/***/ }),

/***/ "MIhM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__("j3D9");

var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "Mmn3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  unit: 8
};

/***/ }),

/***/ "MpYs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),

/***/ "N0V4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isStrictComparable = __webpack_require__("E5qx"),
    keys = __webpack_require__("HI10");

function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ }),

/***/ "NB7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("i1Q6");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),

/***/ "Ni5N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $keys = __webpack_require__("B9Lq");
var hiddenKeys = __webpack_require__("KxjL").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),

/***/ "Nk5W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "NxHG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setProperty',
    value: function setProperty() {
      return true;
    }
  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue() {
      return '';
    }
  }, {
    key: 'removeProperty',
    value: function removeProperty() {}
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),

/***/ "O2oT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns$jss$ns$sheetOptio;

var _propTypes = __webpack_require__("5D9O");

var _ns = __webpack_require__("GPtb");

var ns = _interopRequireWildcard(_ns);

var _propTypes2 = __webpack_require__("9okA");

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj['default'] = obj;return newObj;
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetOptions, _propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns.managers, _propTypes.object), _ns$jss$ns$sheetOptio);

/***/ }),

/***/ "O6kh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hide = __webpack_require__("akPY");
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
  }return target;
};

/***/ }),

/***/ "OYXR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__("ID6i");
var step = __webpack_require__("xwD+");
var Iterators = __webpack_require__("dhak");
var toIObject = __webpack_require__("Wyka");

module.exports = __webpack_require__("uRfg")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),

/***/ "Ocr3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),

/***/ "OuyB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "PBPf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__("j3D9");

var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

var moduleExports = freeModule && freeModule.exports === freeExports;

var freeProcess = moduleExports && freeGlobal.process;

var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "PDcB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toObject = __webpack_require__("mbLO");
var $keys = __webpack_require__("knrM");

__webpack_require__("cOHw")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),

/***/ "PYZb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "PkFN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__("lyLi");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _shallowEqual2.default;

/***/ }),

/***/ "PnXa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "Pr8W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__("S/mA");
var Type = __webpack_require__("XcPh");

var YAML_FLOAT_PATTERN = new RegExp('^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?' + '|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?' + '|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*' + '|[-+]?\\.(?:inf|Inf|INF)' + '|\\.(?:nan|NaN|NAN))$');

function resolveYamlFloat(data) {
  if (data === null) return false;

  if (!YAML_FLOAT_PATTERN.test(data) || data[data.length - 1] === '_') {
    return false;
  }

  return true;
}

function constructYamlFloat(data) {
  var value, sign, base, digits;

  value = data.replace(/_/g, '').toLowerCase();
  sign = value[0] === '-' ? -1 : 1;
  digits = [];

  if ('+-'.indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }

  if (value === '.inf') {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === '.nan') {
    return NaN;
  } else if (value.indexOf(':') >= 0) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseFloat(v, 10));
    });

    value = 0.0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;
  }
  return sign * parseFloat(value, 10);
}

var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;

function representYamlFloat(object, style) {
  var res;

  if (isNaN(object)) {
    switch (style) {
      case 'lowercase':
        return '.nan';
      case 'uppercase':
        return '.NAN';
      case 'camelcase':
        return '.NaN';
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '.inf';
      case 'uppercase':
        return '.INF';
      case 'camelcase':
        return '.Inf';
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case 'lowercase':
        return '-.inf';
      case 'uppercase':
        return '-.INF';
      case 'camelcase':
        return '-.Inf';
    }
  } else if (common.isNegativeZero(object)) {
    return '-0.0';
  }

  res = object.toString(10);

  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace('e', '.e') : res;
}

function isFloat(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && (object % 1 !== 0 || common.isNegativeZero(object));
}

module.exports = new Type('tag:yaml.org,2002:float', {
  kind: 'scalar',
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: 'lowercase'
});

/***/ }),

/***/ "Q3lV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shouldUpdate = __webpack_require__("e0pw");

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__("PkFN");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__("1iuS");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("ytkY");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (false) {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;

/***/ }),

/***/ "QDke":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var isBrowser = exports.isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

exports.default = isBrowser;

/***/ }),

/***/ "QJHX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__("ciB6");

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("WcDi");

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var now = Date.now();

var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};
    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[prop] = value;
    }
    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }
    if (!(rule instanceof _StyleRule2['default'])) return;

    rule = rule;

    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;

    var fnStyle = rule[fnStyleNs];

    if (fnStyle) {
      var style = fnStyle(data);
      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),

/***/ "QpFG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Demo = undefined;

var _debounce = __webpack_require__("CXfR");

var _debounce2 = _interopRequireDefault(_debounce);

var _preact = __webpack_require__("KM04");

var _jsYaml = __webpack_require__("6fmF");

var _hierarchy = __webpack_require__("ooYQ");

var _hierarchy2 = _interopRequireDefault(_hierarchy);

var _Check = __webpack_require__("hd31");

var _Check2 = _interopRequireDefault(_Check);

var _MoreHoriz = __webpack_require__("FrMg");

var _MoreHoriz2 = _interopRequireDefault(_MoreHoriz);

__webpack_require__("0O3Z");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Textarea.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    return false;
  };

  Textarea.prototype.render = function render(props) {
    return __webpack_require__("KM04").h("textarea", props);
  };

  return Textarea;
}(_preact.Component);

var Demo = exports.Demo = function (_Component2) {
  _inherits(Demo, _Component2);

  function Demo(props) {
    _classCallCheck(this, Demo);

    var _this2 = _possibleConstructorReturn(this, _Component2.call(this, props));

    _this2.updateStructure = (0, _debounce2.default)(_this2.updateStructure, 300);
    _this2.state = {
      hierarchy: __webpack_require__("C8j1")
    };
    return _this2;
  }

  Demo.prototype.updateStructure = function updateStructure(value) {
    try {
      var hierarchy = (0, _jsYaml.safeLoad)(value);
      this.setState({ hierarchy: hierarchy });
    } catch (error) {
      console.warn(error);
      this.setState({ error: error });
    }
  };

  Demo.prototype.render = function render(props) {
    var _this3 = this;

    var icons = {
      check: _Check2.default,
      ellipsis: _MoreHoriz2.default
    };

    var getIcon = function getIcon(_ref) {
      var icon = _ref.icon,
          x = _ref.x,
          y = _ref.y;

      if (!(icon in icons)) return;
      var Icon = icons[icon];
      return __webpack_require__("KM04").h(Icon, { x: x - 12, y: y - 12, width: "24", height: "24" });
    };

    return __webpack_require__("KM04").h(
      "div",
      { className: "demo" },
      __webpack_require__("KM04").h(Textarea, { defaultValue: (0, _jsYaml.safeDump)(this.state.hierarchy), onInput: function onInput(e) {
          return _this3.updateStructure(e.target.value);
        } }),
      __webpack_require__("KM04").h(
        "div",
        { className: "hierarchy-wrap" },
        __webpack_require__("KM04").h(_hierarchy2.default, { tree: this.state.hierarchy, getIcon: getIcon })
      )
    );
  };

  return Demo;
}(_preact.Component);

exports.default = Demo;

/***/ }),

/***/ "R6c1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__("6MLN") && !__webpack_require__("wLcK")(function () {
  return Object.defineProperty(__webpack_require__("9kxq")('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),

/***/ "R9xs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _deepmerge = __webpack_require__("BokN");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _createTypography = __webpack_require__("liDP");

var _createTypography2 = _interopRequireDefault(_createTypography);

var _createBreakpoints = __webpack_require__("anQp");

var _createBreakpoints2 = _interopRequireDefault(_createBreakpoints);

var _createPalette = __webpack_require__("beZl");

var _createPalette2 = _interopRequireDefault(_createPalette);

var _createMixins = __webpack_require__("i656");

var _createMixins2 = _interopRequireDefault(_createMixins);

var _shadows = __webpack_require__("LaPR");

var _shadows2 = _interopRequireDefault(_shadows);

var _transitions = __webpack_require__("KQdW");

var _transitions2 = _interopRequireDefault(_transitions);

var _zIndex = __webpack_require__("3Lw+");

var _zIndex2 = _interopRequireDefault(_zIndex);

var _spacing = __webpack_require__("Mmn3");

var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$palette = options.palette,
      paletteInput = _options$palette === undefined ? {} : _options$palette,
      _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === undefined ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === undefined ? {} : _options$mixins,
      _options$typography = options.typography,
      typographyInput = _options$typography === undefined ? {} : _options$typography,
      shadowsInput = options.shadows,
      other = (0, _objectWithoutProperties3.default)(options, ['palette', 'breakpoints', 'mixins', 'typography', 'shadows']);

  var palette = (0, _createPalette2.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints2.default)(breakpointsInput);

  var muiTheme = (0, _extends3.default)({
    direction: 'ltr',
    palette: palette,
    typography: (0, _createTypography2.default)(palette, typographyInput),
    mixins: (0, _createMixins2.default)(breakpoints, _spacing2.default, mixinsInput),
    breakpoints: breakpoints,
    shadows: shadowsInput || _shadows2.default
  }, (0, _deepmerge2.default)({
    transitions: _transitions2.default,
    spacing: _spacing2.default,
    zIndex: _zIndex2.default
  }, other));

   false ? (0, _warning2.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;

  return muiTheme;
}
exports.default = createMuiTheme;

/***/ }),

/***/ "RQ0L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__("bgO7");

var INFINITY = 1 / 0;

function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "S/mA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNothing(subject) {
  return typeof subject === 'undefined' || subject === null;
}

function isObject(subject) {
  return (typeof subject === 'undefined' ? 'undefined' : _typeof(subject)) === 'object' && subject !== null;
}

function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;else if (isNothing(sequence)) return [];

  return [sequence];
}

function extend(target, source) {
  var index, length, key, sourceKeys;

  if (source) {
    sourceKeys = Object.keys(source);

    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }

  return target;
}

function repeat(string, count) {
  var result = '',
      cycle;

  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }

  return result;
}

function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}

module.exports.isNothing = isNothing;
module.exports.isObject = isObject;
module.exports.toArray = toArray;
module.exports.repeat = repeat;
module.exports.isNegativeZero = isNegativeZero;
module.exports.extend = extend;

/***/ }),

/***/ "S7IM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__("MpYs");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
};

/***/ }),

/***/ "S8I9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("bBbC"), __esModule: true };

/***/ }),

/***/ "SKjJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__("AePr");
var validate = __webpack_require__("7Liz");
var MAP = 'Map';

module.exports = __webpack_require__("cYD/")(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },

  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),

/***/ "SfCF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "ShN9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),

/***/ "T4f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__("gc0D");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),

/***/ "TCEC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelCase;

var _hyphenateStyleName = __webpack_require__("jNGL");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

    if (prop === hyphenatedProp) return value;

    rule.prop(hyphenatedProp, value);

    return null;
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "TD/Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var speciesConstructor = __webpack_require__("7tZR");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),

/***/ "TNJq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("zotD");
var dPs = __webpack_require__("gjjs");
var enumBugKeys = __webpack_require__("KxjL");
var IE_PROTO = __webpack_require__("/wuY")('IE_PROTO');
var Empty = function Empty() {};
var PROTOTYPE = 'prototype';

var _createDict = function createDict() {
  var iframe = __webpack_require__("9kxq")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("ebIA").appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;

    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),

/***/ "Tnr5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__("p/0c"),
    isKey = __webpack_require__("2ibm"),
    stringToPath = __webpack_require__("jXGU"),
    toString = __webpack_require__("A8RV");

function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "TpjK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "U5Pz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

module.exports = new Type('tag:yaml.org,2002:seq', {
  kind: 'sequence',
  construct: function construct(data) {
    return data !== null ? data : [];
  }
});

/***/ }),

/***/ "U72i":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),

/***/ "UQex":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "UVCT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;

/***/ }),

/***/ "UY82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__("ZC1a");

function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "Ug9I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__("NB7d")('wks');
var uid = __webpack_require__("X6va");
var _Symbol = __webpack_require__("i1Q6").Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),

/***/ "VEMT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("IC7E")('Map');

/***/ }),

/***/ "VOrx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("GyB/");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "VcL+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseTimes = __webpack_require__("r8MY"),
    isArguments = __webpack_require__("3til"),
    isArray = __webpack_require__("p/0c"),
    isBuffer = __webpack_require__("iyC2"),
    isIndex = __webpack_require__("A+gr"),
    isTypedArray = __webpack_require__("kwIb");

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "Vhgk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var arrayPush = __webpack_require__("srRO"),
    isArray = __webpack_require__("p/0c");

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "WcDi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__("ioJm");

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),

/***/ "Wyka":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IObject = __webpack_require__("E5Ce");
var defined = __webpack_require__("U72i");
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),

/***/ "X6va":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),

/***/ "XJYD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "XOCG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),

/***/ "XcPh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var YAMLException = __webpack_require__("78AQ");

var TYPE_CONSTRUCTOR_OPTIONS = ['kind', 'resolve', 'construct', 'instanceOf', 'predicate', 'represent', 'defaultStyle', 'styleAliases'];

var YAML_NODE_KINDS = ['scalar', 'sequence', 'mapping'];

function compileStyleAliases(map) {
  var result = {};

  if (map !== null) {
    Object.keys(map).forEach(function (style) {
      map[style].forEach(function (alias) {
        result[String(alias)] = style;
      });
    });
  }

  return result;
}

function Type(tag, options) {
  options = options || {};

  Object.keys(options).forEach(function (name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });

  this.tag = tag;
  this.kind = options['kind'] || null;
  this.resolve = options['resolve'] || function () {
    return true;
  };
  this.construct = options['construct'] || function (data) {
    return data;
  };
  this.instanceOf = options['instanceOf'] || null;
  this.predicate = options['predicate'] || null;
  this.represent = options['represent'] || null;
  this.defaultStyle = options['defaultStyle'] || null;
  this.styleAliases = compileStyleAliases(options['styleAliases'] || null);

  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}

module.exports = Type;

/***/ }),

/***/ "Xk23":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var listCacheClear = __webpack_require__("s9iF"),
    listCacheDelete = __webpack_require__("+bWy"),
    listCacheGet = __webpack_require__("Ewuv"),
    listCacheHas = __webpack_require__("xDQX"),
    listCacheSet = __webpack_require__("h0zV");

function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "Xos8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("FFZn");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ "XxCd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__("iE6D");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__("rmh+");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var memoize = function memoize(fn) {
  var value = void 0;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

function getPropertyValue(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    return '';
  }
}

function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    return false;
  }
  return true;
}

function removeProperty(cssRule, prop) {
  try {
    cssRule.style.removeProperty(prop);
  } catch (err) {
    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

};var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;

      if (name) return '@keyframes ' + name;

      var cssText = cssRule.cssText;

      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    }

    return extractKey(cssRule.cssText);
  };
}();

function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;

  return cssRule.selectorText === selectorText;
}

var getHead = memoize(function () {
  return document.head || document.getElementsByTagName('head')[0];
});

var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;

  return function (rules) {
    var map = {};

    if (!style) style = document.createElement('style');
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector;


      if (selector && selector.indexOf('\\') !== -1) {
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }
        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;

          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }
    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }
    return map;
  };
}();

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

function findPrevNode(options) {
  var registry = _sheets2['default'].registry;

  if (registry.length > 0) {
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;

    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false;

    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.type = 'text/css';
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      if (this.element.parentNode || !this.sheet) return;

      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var str = rule.toString();
      if (!index) index = cssRules.length;

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }
      this.hasInsertedRules = true;

      return cssRules[index];
    }

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;

      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }
      return -1;
    }

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;

/***/ }),

/***/ "YD0x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("uj5A") });

/***/ }),

/***/ "YIaf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__("FTXF");

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "YLmZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forOf = __webpack_require__("ozpD");

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

/***/ }),

/***/ "YZrv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("K+F3"), __esModule: true };

/***/ }),

/***/ "ZC1a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isKeyable = __webpack_require__("XJYD");

function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "ZEJm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "ZHvQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__("ShN9");
var TAG = __webpack_require__("Ug9I")('toStringTag');

var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {}
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),

/***/ "ZKjc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("Aq8W");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("yeEC");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("GyB/");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "ZUfC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var Schema = __webpack_require__("nYLM");

module.exports = new Schema({
  include: [__webpack_require__("EJga")],
  implicit: [__webpack_require__("C9fO"), __webpack_require__("GrS1"), __webpack_require__("elsh"), __webpack_require__("Pr8W")]
});

/***/ }),

/***/ "ZaKr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");
var anObject = __webpack_require__("zotD");
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
    try {
      set = __webpack_require__("3zRh")(Function.call, __webpack_require__("sxPs").f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),

/***/ "ZuFa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var common = __webpack_require__("S/mA");
var YAMLException = __webpack_require__("78AQ");
var DEFAULT_FULL_SCHEMA = __webpack_require__("HKwV");
var DEFAULT_SAFE_SCHEMA = __webpack_require__("tLdR");

var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CHAR_TAB = 0x09;
var CHAR_LINE_FEED = 0x0A;
var CHAR_SPACE = 0x20;
var CHAR_EXCLAMATION = 0x21;
var CHAR_DOUBLE_QUOTE = 0x22;
var CHAR_SHARP = 0x23;
var CHAR_PERCENT = 0x25;
var CHAR_AMPERSAND = 0x26;
var CHAR_SINGLE_QUOTE = 0x27;
var CHAR_ASTERISK = 0x2A;
var CHAR_COMMA = 0x2C;
var CHAR_MINUS = 0x2D;
var CHAR_COLON = 0x3A;
var CHAR_GREATER_THAN = 0x3E;
var CHAR_QUESTION = 0x3F;
var CHAR_COMMERCIAL_AT = 0x40;
var CHAR_LEFT_SQUARE_BRACKET = 0x5B;
var CHAR_RIGHT_SQUARE_BRACKET = 0x5D;
var CHAR_GRAVE_ACCENT = 0x60;
var CHAR_LEFT_CURLY_BRACKET = 0x7B;
var CHAR_VERTICAL_LINE = 0x7C;
var CHAR_RIGHT_CURLY_BRACKET = 0x7D;

var ESCAPE_SEQUENCES = {};

ESCAPE_SEQUENCES[0x00] = '\\0';
ESCAPE_SEQUENCES[0x07] = '\\a';
ESCAPE_SEQUENCES[0x08] = '\\b';
ESCAPE_SEQUENCES[0x09] = '\\t';
ESCAPE_SEQUENCES[0x0A] = '\\n';
ESCAPE_SEQUENCES[0x0B] = '\\v';
ESCAPE_SEQUENCES[0x0C] = '\\f';
ESCAPE_SEQUENCES[0x0D] = '\\r';
ESCAPE_SEQUENCES[0x1B] = '\\e';
ESCAPE_SEQUENCES[0x22] = '\\"';
ESCAPE_SEQUENCES[0x5C] = '\\\\';
ESCAPE_SEQUENCES[0x85] = '\\N';
ESCAPE_SEQUENCES[0xA0] = '\\_';
ESCAPE_SEQUENCES[0x2028] = '\\L';
ESCAPE_SEQUENCES[0x2029] = '\\P';

var DEPRECATED_BOOLEANS_SYNTAX = ['y', 'Y', 'yes', 'Yes', 'YES', 'on', 'On', 'ON', 'n', 'N', 'no', 'No', 'NO', 'off', 'Off', 'OFF'];

function compileStyleMap(schema, map) {
  var result, keys, index, length, tag, style, type;

  if (map === null) return {};

  result = {};
  keys = Object.keys(map);

  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map[tag]);

    if (tag.slice(0, 2) === '!!') {
      tag = 'tag:yaml.org,2002:' + tag.slice(2);
    }
    type = schema.compiledTypeMap['fallback'][tag];

    if (type && _hasOwnProperty.call(type.styleAliases, style)) {
      style = type.styleAliases[style];
    }

    result[tag] = style;
  }

  return result;
}

function encodeHex(character) {
  var string, handle, length;

  string = character.toString(16).toUpperCase();

  if (character <= 0xFF) {
    handle = 'x';
    length = 2;
  } else if (character <= 0xFFFF) {
    handle = 'u';
    length = 4;
  } else if (character <= 0xFFFFFFFF) {
    handle = 'U';
    length = 8;
  } else {
    throw new YAMLException('code point within a string may not be greater than 0xFFFFFFFF');
  }

  return '\\' + handle + common.repeat('0', length - string.length) + string;
}

function State(options) {
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.indent = Math.max(1, options['indent'] || 2);
  this.skipInvalid = options['skipInvalid'] || false;
  this.flowLevel = common.isNothing(options['flowLevel']) ? -1 : options['flowLevel'];
  this.styleMap = compileStyleMap(this.schema, options['styles'] || null);
  this.sortKeys = options['sortKeys'] || false;
  this.lineWidth = options['lineWidth'] || 80;
  this.noRefs = options['noRefs'] || false;
  this.noCompatMode = options['noCompatMode'] || false;
  this.condenseFlow = options['condenseFlow'] || false;

  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;

  this.tag = null;
  this.result = '';

  this.duplicates = [];
  this.usedDuplicates = null;
}

function indentString(string, spaces) {
  var ind = common.repeat(' ', spaces),
      position = 0,
      next = -1,
      result = '',
      line,
      length = string.length;

  while (position < length) {
    next = string.indexOf('\n', position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }

    if (line.length && line !== '\n') result += ind;

    result += line;
  }

  return result;
}

function generateNextLine(state, level) {
  return '\n' + common.repeat(' ', state.indent * level);
}

function testImplicitResolving(state, str) {
  var index, length, type;

  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type = state.implicitTypes[index];

    if (type.resolve(str)) {
      return true;
    }
  }

  return false;
}

function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}

function isPrintable(c) {
  return 0x00020 <= c && c <= 0x00007E || 0x000A1 <= c && c <= 0x00D7FF && c !== 0x2028 && c !== 0x2029 || 0x0E000 <= c && c <= 0x00FFFD && c !== 0xFEFF || 0x10000 <= c && c <= 0x10FFFF;
}

function isPlainSafe(c) {
  return isPrintable(c) && c !== 0xFEFF && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && c !== CHAR_SHARP;
}

function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== 0xFEFF && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}

var STYLE_PLAIN = 1,
    STYLE_SINGLE = 2,
    STYLE_LITERAL = 3,
    STYLE_FOLDED = 4,
    STYLE_DOUBLE = 5;

function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
  var i;
  var char;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(string.charCodeAt(0)) && !isWhitespace(string.charCodeAt(string.length - 1));

  if (singleLineOnly) {
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }
  } else {
    for (i = 0; i < string.length; i++) {
      char = string.charCodeAt(i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;

        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char);
    }

    hasFoldableLine = hasFoldableLine || shouldTrackWidth && i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== ' ';
  }

  if (!hasLineBreak && !hasFoldableLine) {
    return plain && !testAmbiguousType(string) ? STYLE_PLAIN : STYLE_SINGLE;
  }

  if (string[0] === ' ' && indentPerLevel > 9) {
    return STYLE_DOUBLE;
  }

  return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
}

function writeScalar(state, string, level, iskey) {
  state.dump = function () {
    if (string.length === 0) {
      return "''";
    }
    if (!state.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1) {
      return "'" + string + "'";
    }

    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);

    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string) {
      return testImplicitResolving(state, string);
    }

    switch (chooseScalarStyle(string, singleLineOnly, state.indent, lineWidth, testAmbiguity)) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return '|' + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return '>' + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string, lineWidth) + '"';
      default:
        throw new YAMLException('impossible error: invalid scalar style');
    }
  }();
}

function blockHeader(string, indentPerLevel) {
  var indentIndicator = string[0] === ' ' ? String(indentPerLevel) : '';

  var clip = string[string.length - 1] === '\n';
  var keep = clip && (string[string.length - 2] === '\n' || string === '\n');
  var chomp = keep ? '+' : clip ? '' : '-';

  return indentIndicator + chomp + '\n';
}

function dropEndingNewline(string) {
  return string[string.length - 1] === '\n' ? string.slice(0, -1) : string;
}

function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;

  var result = function () {
    var nextLF = string.indexOf('\n');
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }();

  var prevMoreIndented = string[0] === '\n' || string[0] === ' ';
  var moreIndented;

  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1],
        line = match[2];
    moreIndented = line[0] === ' ';
    result += prefix + (!prevMoreIndented && !moreIndented && line !== '' ? '\n' : '') + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }

  return result;
}

function foldLine(line, width) {
  if (line === '' || line[0] === ' ') return line;

  var breakRe = / [^ ]/g;
  var match;

  var start = 0,
      end,
      curr = 0,
      next = 0;
  var result = '';

  while (match = breakRe.exec(line)) {
    next = match.index;

    if (next - start > width) {
      end = curr > start ? curr : next;
      result += '\n' + line.slice(start, end);

      start = end + 1;
    }
    curr = next;
  }

  result += '\n';

  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + '\n' + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }

  return result.slice(1);
}

function escapeString(string) {
  var result = '';
  var char, nextChar;
  var escapeSeq;

  for (var i = 0; i < string.length; i++) {
    char = string.charCodeAt(i);

    if (char >= 0xD800 && char <= 0xDBFF) {
        nextChar = string.charCodeAt(i + 1);
        if (nextChar >= 0xDC00 && nextChar <= 0xDFFF) {
            result += encodeHex((char - 0xD800) * 0x400 + nextChar - 0xDC00 + 0x10000);

            i++;continue;
          }
      }
    escapeSeq = ESCAPE_SEQUENCES[char];
    result += !escapeSeq && isPrintable(char) ? string[i] : escapeSeq || encodeHex(char);
  }

  return result;
}

function writeFlowSequence(state, level, object) {
  var _result = '',
      _tag = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    if (writeNode(state, level, object[index], false, false)) {
      if (index !== 0) _result += ',' + (!state.condenseFlow ? ' ' : '');
      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = '[' + _result + ']';
}

function writeBlockSequence(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      index,
      length;

  for (index = 0, length = object.length; index < length; index += 1) {
    if (writeNode(state, level + 1, object[index], true, true)) {
      if (!compact || index !== 0) {
        _result += generateNextLine(state, level);
      }

      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += '-';
      } else {
        _result += '- ';
      }

      _result += state.dump;
    }
  }

  state.tag = _tag;
  state.dump = _result || '[]';
}

function writeFlowMapping(state, level, object) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      pairBuffer;

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = state.condenseFlow ? '"' : '';

    if (index !== 0) pairBuffer += ', ';

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }

    if (state.dump.length > 1024) pairBuffer += '? ';

    pairBuffer += state.dump + (state.condenseFlow ? '"' : '') + ':' + (state.condenseFlow ? '' : ' ');

    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }

    pairBuffer += state.dump;

    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = '{' + _result + '}';
}

function writeBlockMapping(state, level, object, compact) {
  var _result = '',
      _tag = state.tag,
      objectKeyList = Object.keys(object),
      index,
      length,
      objectKey,
      objectValue,
      explicitPair,
      pairBuffer;

  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === 'function') {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new YAMLException('sortKeys must be a boolean or a function');
  }

  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = '';

    if (!compact || index !== 0) {
      pairBuffer += generateNextLine(state, level);
    }

    objectKey = objectKeyList[index];
    objectValue = object[objectKey];

    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }

    explicitPair = state.tag !== null && state.tag !== '?' || state.dump && state.dump.length > 1024;

    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += '?';
      } else {
        pairBuffer += '? ';
      }
    }

    pairBuffer += state.dump;

    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }

    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }

    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ':';
    } else {
      pairBuffer += ': ';
    }

    pairBuffer += state.dump;

    _result += pairBuffer;
  }

  state.tag = _tag;
  state.dump = _result || '{}';
}

function detectType(state, object, explicit) {
  var _result, typeList, index, length, type, style;

  typeList = explicit ? state.explicitTypes : state.implicitTypes;

  for (index = 0, length = typeList.length; index < length; index += 1) {
    type = typeList[index];

    if ((type.instanceOf || type.predicate) && (!type.instanceOf || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object instanceof type.instanceOf) && (!type.predicate || type.predicate(object))) {

      state.tag = explicit ? type.tag : '?';

      if (type.represent) {
        style = state.styleMap[type.tag] || type.defaultStyle;

        if (_toString.call(type.represent) === '[object Function]') {
          _result = type.represent(object, style);
        } else if (_hasOwnProperty.call(type.represent, style)) {
          _result = type.represent[style](object, style);
        } else {
          throw new YAMLException('!<' + type.tag + '> tag resolver accepts not "' + style + '" style');
        }

        state.dump = _result;
      }

      return true;
    }
  }

  return false;
}

function writeNode(state, level, object, block, compact, iskey) {
  state.tag = null;
  state.dump = object;

  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }

  var type = _toString.call(state.dump);

  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }

  var objectOrArray = type === '[object Object]' || type === '[object Array]',
      duplicateIndex,
      duplicate;

  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }

  if (state.tag !== null && state.tag !== '?' || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }

  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = '*ref_' + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type === '[object Object]') {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object Array]') {
      if (block && state.dump.length !== 0) {
        writeBlockSequence(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = '&ref_' + duplicateIndex + ' ' + state.dump;
        }
      }
    } else if (type === '[object String]') {
      if (state.tag !== '?') {
        writeScalar(state, state.dump, level, iskey);
      }
    } else {
      if (state.skipInvalid) return false;
      throw new YAMLException('unacceptable kind of an object to dump ' + type);
    }

    if (state.tag !== null && state.tag !== '?') {
      state.dump = '!<' + state.tag + '> ' + state.dump;
    }
  }

  return true;
}

function getDuplicateReferences(object, state) {
  var objects = [],
      duplicatesIndexes = [],
      index,
      length;

  inspectNode(object, objects, duplicatesIndexes);

  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}

function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;

  if (object !== null && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object') {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);

      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);

        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}

function dump(input, options) {
  options = options || {};

  var state = new State(options);

  if (!state.noRefs) getDuplicateReferences(input, state);

  if (writeNode(state, 0, input, true, true)) return state.dump + '\n';

  return '';
}

function safeDump(input, options) {
  return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}

module.exports.dump = dump;
module.exports.safeDump = safeDump;

/***/ }),

/***/ "Zwq5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__("MpYs");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),

/***/ "ZxII":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__("Ug9I");

/***/ }),

/***/ "a0mu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

var esprima;

try {
  var _require = require;
  esprima = __webpack_require__("4E2n");
} catch (_) {
  if (typeof window !== 'undefined') esprima = window.esprima;
}

var Type = __webpack_require__("XcPh");

function resolveJavascriptFunction(data) {
  if (data === null) return false;

  try {
    var source = '(' + data + ')',
        ast = esprima.parse(source, { range: true });

    if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'ArrowFunctionExpression' && ast.body[0].expression.type !== 'FunctionExpression') {
      return false;
    }

    return true;
  } catch (err) {
    return false;
  }
}

function constructJavascriptFunction(data) {

  var source = '(' + data + ')',
      ast = esprima.parse(source, { range: true }),
      params = [],
      body;

  if (ast.type !== 'Program' || ast.body.length !== 1 || ast.body[0].type !== 'ExpressionStatement' || ast.body[0].expression.type !== 'ArrowFunctionExpression' && ast.body[0].expression.type !== 'FunctionExpression') {
    throw new Error('Failed to resolve function');
  }

  ast.body[0].expression.params.forEach(function (param) {
    params.push(param.name);
  });

  body = ast.body[0].expression.body.range;

  return new Function(params, source.slice(body[0] + 1, body[1] - 1));
}

function representJavascriptFunction(object) {
  return object.toString();
}

function isFunction(object) {
  return Object.prototype.toString.call(object) === '[object Function]';
}

module.exports = new Type('tag:yaml.org,2002:js/function', {
  kind: 'scalar',
  resolve: resolveJavascriptFunction,
  construct: constructJavascriptFunction,
  predicate: isFunction,
  represent: representJavascriptFunction
});

/***/ }),

/***/ "a4cL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

module.exports = new Type('tag:yaml.org,2002:map', {
  kind: 'mapping',
  construct: function construct(data) {
    return data !== null ? data : {};
  }
});

/***/ }),

/***/ "af0K":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Iterators = __webpack_require__("dhak");
var ITERATOR = __webpack_require__("Ug9I")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),

/***/ "akPY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__("Gfzd");
var createDesc = __webpack_require__("0WCH");
module.exports = __webpack_require__("6MLN") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),

/***/ "anQp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keys = undefined;

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createBreakpoints;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === undefined ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === undefined ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === undefined ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties3.default)(breakpoints, ['values', 'unit', 'step']);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return '@media (min-width:' + value + unit + ')';
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return '@media (max-width:' + (value - step / 100) + unit + ')';
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return '@media (min-width:' + values[start] + unit + ') and ' + ('(max-width:' + (values[keys[endIndex]] - step / 100) + unit + ')');
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0, _extends3.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "ayXv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cof = __webpack_require__("ShN9");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),

/***/ "b1tA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__("ZaKr").set });

/***/ }),

/***/ "b7Q2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__("TNJq");
var descriptor = __webpack_require__("0WCH");
var setToStringTag = __webpack_require__("11Ut");
var IteratorPrototype = {};

__webpack_require__("akPY")(IteratorPrototype, __webpack_require__("Ug9I")('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),

/***/ "bAag":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

function resolveJavascriptRegExp(data) {
  if (data === null) return false;
  if (data.length === 0) return false;

  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = '';

  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];

    if (modifiers.length > 3) return false;

    if (regexp[regexp.length - modifiers.length - 1] !== '/') return false;
  }

  return true;
}

function constructJavascriptRegExp(data) {
  var regexp = data,
      tail = /\/([gim]*)$/.exec(data),
      modifiers = '';

  if (regexp[0] === '/') {
    if (tail) modifiers = tail[1];
    regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
  }

  return new RegExp(regexp, modifiers);
}

function representJavascriptRegExp(object) {
  var result = '/' + object.source + '/';

  if (object.global) result += 'g';
  if (object.multiline) result += 'm';
  if (object.ignoreCase) result += 'i';

  return result;
}

function isRegExp(object) {
  return Object.prototype.toString.call(object) === '[object RegExp]';
}

module.exports = new Type('tag:yaml.org,2002:js/regexp', {
  kind: 'scalar',
  resolve: resolveJavascriptRegExp,
  construct: constructJavascriptRegExp,
  predicate: isRegExp,
  represent: representJavascriptRegExp
});

/***/ }),

/***/ "bBbC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("FzLb");
module.exports = -0x1fffffffffffff;

/***/ }),

/***/ "bJ7U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__("LkZ7");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),

/***/ "bJLp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

var _toString = Object.prototype.toString;

function resolveYamlPairs(data) {
  if (data === null) return true;

  var index,
      length,
      pair,
      keys,
      result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    if (_toString.call(pair) !== '[object Object]') return false;

    keys = Object.keys(pair);

    if (keys.length !== 1) return false;

    result[index] = [keys[0], pair[keys[0]]];
  }

  return true;
}

function constructYamlPairs(data) {
  if (data === null) return [];

  var index,
      length,
      pair,
      keys,
      result,
      object = data;

  result = new Array(object.length);

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];

    keys = Object.keys(pair);

    result[index] = [keys[0], pair[keys[0]]];
  }

  return result;
}

module.exports = new Type('tag:yaml.org,2002:pairs', {
  kind: 'sequence',
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});

/***/ }),

/***/ "bKbX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _RuleList = __webpack_require__("ciB6");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),

/***/ "bViC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsNative = __webpack_require__("iEGD"),
    getValue = __webpack_require__("Nk5W");

function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "beZl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = undefined;

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createPalette;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _deepmerge = __webpack_require__("BokN");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

var _indigo = __webpack_require__("h8rx");

var _indigo2 = _interopRequireDefault(_indigo);

var _pink = __webpack_require__("AHkM");

var _pink2 = _interopRequireDefault(_pink);

var _grey = __webpack_require__("CjKE");

var _grey2 = _interopRequireDefault(_grey);

var _red = __webpack_require__("Lmch");

var _red2 = _interopRequireDefault(_red);

var _common = __webpack_require__("IEr9");

var _common2 = _interopRequireDefault(_common);

var _colorManipulator = __webpack_require__("KH2K");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',

    secondary: 'rgba(0, 0, 0, 0.54)',

    disabled: 'rgba(0, 0, 0, 0.38)',

    hint: 'rgba(0, 0, 0, 0.38)'
  },

  divider: 'rgba(0, 0, 0, 0.12)',

  background: {
    paper: _common2.default.white,
    default: _grey2.default[50]
  },

  action: {
    active: 'rgba(0, 0, 0, 0.54)',

    hover: 'rgba(0, 0, 0, 0.08)',

    selected: 'rgba(0, 0, 0, 0.14)',

    disabled: 'rgba(0, 0, 0, 0.26)',

    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};

var dark = exports.dark = {
  text: {
    primary: _common2.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _grey2.default[800],
    default: '#303030'
  },
  action: {
    active: _common2.default.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === undefined ? {
    light: _indigo2.default[300],
    main: _indigo2.default[500],
    dark: _indigo2.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === undefined ? {
    light: _pink2.default.A200,
    main: _pink2.default.A400,
    dark: _pink2.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === undefined ? {
    light: _red2.default[300],
    main: _red2.default[500],
    dark: _red2.default[700]
  } : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === undefined ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === undefined ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === undefined ? 0.2 : _palette$tonalOffset,
      other = (0, _objectWithoutProperties3.default)(palette, ['primary', 'secondary', 'error', 'type', 'contrastThreshold', 'tonalOffset']);

  function getContrastText(background) {
    var contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (false) {
      var contrast = (0, _colorManipulator.getContrastRatio)(background, contrastText);
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(contrast >= 3, ['Material-UI: the contrast ratio of ' + contrast + ':1 for ' + contrastText + ' on ' + background, 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n')) : void 0;
    }

    return contrastText;
  }

  function augmentColor(color, mainShade, lightShade, darkShade) {
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
  }

  augmentColor(primary, 500, 300, 700);
  augmentColor(secondary, 'A400', 'A200', 'A700');
  augmentColor(error, 500, 300, 700);

  var types = { dark: dark, light: light };

   false ? (0, _warning2.default)(types[type], 'Material-UI: the palette type `' + type + '` is not supported.') : void 0;

  var paletteOutput = (0, _deepmerge2.default)((0, _extends3.default)({
    common: _common2.default,

    type: type,

    primary: primary,

    secondary: secondary,

    error: error,

    grey: _grey2.default,

    contrastThreshold: contrastThreshold,

    getContrastText: getContrastText,

    tonalOffset: tonalOffset
  }, types[type]), other, {
    clone: false });

  return paletteOutput;
}

/***/ }),

/***/ "bgO7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__("e5TX"),
    isObjectLike = __webpack_require__("OuyB");

var symbolTag = '[object Symbol]';

function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "c2zY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("i1Q6");
var core = __webpack_require__("zKeE");
var LIBRARY = __webpack_require__("1kq3");
var wksExt = __webpack_require__("ZxII");
var defineProperty = __webpack_require__("Gfzd").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),

/***/ "c6mp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("c2zY")('asyncIterator');

/***/ }),

/***/ "cDyG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getMapData = __webpack_require__("ZC1a");

function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "cOHw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");
var core = __webpack_require__("zKeE");
var fails = __webpack_require__("wLcK");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),

/***/ "cYD/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("i1Q6");
var $export = __webpack_require__("vSO4");
var meta = __webpack_require__("e8vu");
var fails = __webpack_require__("wLcK");
var hide = __webpack_require__("akPY");
var redefineAll = __webpack_require__("O6kh");
var forOf = __webpack_require__("ozpD");
var anInstance = __webpack_require__("KUik");
var isObject = __webpack_require__("BxvP");
var setToStringTag = __webpack_require__("11Ut");
var dP = __webpack_require__("Gfzd").f;
var each = __webpack_require__("tMiz")(0);
var DESCRIPTORS = __webpack_require__("6MLN");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function get() {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

/***/ }),

/***/ "ciB6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _createRule = __webpack_require__("WcDi");

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__("KzYS");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__("808+");

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RuleList = function () {
  function RuleList(options) {
    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.options = options;
    this.classes = options.classes;
  }

  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options = this.options,
          parent = _options.parent,
          sheet = _options.sheet,
          jss = _options.jss,
          Renderer = _options.Renderer,
          generateClassName = _options.generateClassName;

      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;

      var rule = (0, _createRule2['default'])(name, decl, options);

      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;


      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }

  }, {
    key: 'update',
    value: function update(name, data) {
      var _options2 = this.options,
          plugins = _options2.jss.plugins,
          sheet = _options2.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, this.get(name), sheet);
        return;
      }

      for (var index = 0; index < this.index.length; index++) {
        plugins.onUpdate(name, this.index[index], sheet);
      }
    }

  }, {
    key: 'link',
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var _key = this.options.sheet.renderer.getKey(cssRule);
        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        if (!css && !link) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),

/***/ "cjsw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("yOG5");
var $Object = __webpack_require__("zKeE").Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),

/***/ "cvfj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),

/***/ "dACh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "dG94":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

var _hasOwnProperty = Object.prototype.hasOwnProperty;
var _toString = Object.prototype.toString;

function resolveYamlOmap(data) {
  if (data === null) return true;

  var objectKeys = [],
      index,
      length,
      pair,
      pairKey,
      pairHasKey,
      object = data;

  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;

    if (_toString.call(pair) !== '[object Object]') return false;

    for (pairKey in pair) {
      if (_hasOwnProperty.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;else return false;
      }
    }

    if (!pairHasKey) return false;

    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);else return false;
  }

  return true;
}

function constructYamlOmap(data) {
  return data !== null ? data : [];
}

module.exports = new Type('tag:yaml.org,2002:omap', {
  kind: 'sequence',
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});

/***/ }),

/***/ "dRuq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__("e5TX"),
    isObject = __webpack_require__("u9vI");

var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }

    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "dXs8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("b1tA");
module.exports = __webpack_require__("zKeE").Object.setPrototypeOf;

/***/ }),

/***/ "dhak":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),

/***/ "e0pw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _react = __webpack_require__("eW0v");

var _setDisplayName = __webpack_require__("1iuS");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("ytkY");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (false) {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;

/***/ }),

/***/ "e5TX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__("wppe"),
    getRawTag = __webpack_require__("uiOY"),
    objectToString = __webpack_require__("lPmd");

var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "e7NH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports['default'] = function (styles) {
  function extract(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = extract(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  return extract(styles);
};

/***/ }),

/***/ "e8vu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __webpack_require__("X6va")('meta');
var isObject = __webpack_require__("BxvP");
var has = __webpack_require__("yS17");
var setDesc = __webpack_require__("Gfzd").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("wLcK")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id,
      w: {} } });
};
var fastKey = function fastKey(it, create) {
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';

    if (!create) return 'E';

    setMeta(it);
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;

    if (!create) return false;

    setMeta(it);
  }return it[META].w;
};

var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),

/***/ "eBHa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

var YAML_DATE_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9])' + '-([0-9][0-9])$');

var YAML_TIMESTAMP_REGEXP = new RegExp('^([0-9][0-9][0-9][0-9])' + '-([0-9][0-9]?)' + '-([0-9][0-9]?)' + '(?:[Tt]|[ \\t]+)' + '([0-9][0-9]?)' + ':([0-9][0-9])' + ':([0-9][0-9])' + '(?:\\.([0-9]*))?' + '(?:[ \\t]*(Z|([-+])([0-9][0-9]?)' + '(?::([0-9][0-9]))?))?$');

function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}

function constructYamlTimestamp(data) {
  var match,
      year,
      month,
      day,
      hour,
      minute,
      second,
      fraction = 0,
      delta = null,
      tz_hour,
      tz_minute,
      date;

  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);

  if (match === null) throw new Error('Date resolve error');

  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];

  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }

  hour = +match[4];
  minute = +match[5];
  second = +match[6];

  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += '0';
    }
    fraction = +fraction;
  }

  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 60000;
    if (match[9] === '-') delta = -delta;
  }

  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));

  if (delta) date.setTime(date.getTime() - delta);

  return date;
}

function representYamlTimestamp(object) {
  return object.toISOString();
}

module.exports = new Type('tag:yaml.org,2002:timestamp', {
  kind: 'scalar',
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});

/***/ }),

/***/ "eJdH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',

    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;

      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',

    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),

/***/ "eOdm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),

/***/ "eOjq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("PDcB");
module.exports = __webpack_require__("zKeE").Object.keys;

/***/ }),

/***/ "eW0v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.__spread = exports.unstable_renderSubtreeIntoContainer = exports.PureComponent = exports.Component = exports.unmountComponentAtNode = exports.findDOMNode = exports.isValidElement = exports.cloneElement = exports.createElement = exports.createFactory = exports.createClass = exports.render = exports.Children = exports.PropTypes = exports.DOM = exports.version = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _preact = __webpack_require__("KM04");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '15.1.0';

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

var DEV = typeof process === 'undefined' || !process.env || "production" !== 'production';

function EmptyComponent() {
	return null;
}

var VNode = (0, _preact.h)('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = _preact.options.event;
_preact.options.event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = _preact.options.vnode;
_preact.options.vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = (0, _preact.render)(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = (0, _preact.h)(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		(0, _preact.render)((0, _preact.h)(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(_preact.h.apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && (typeof ref === 'undefined' ? 'undefined' : _typeof(ref));
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = (0, _preact.h)(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);

	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(_preact.cloneElement.apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}

	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		if (props.children && _typeof(props.children) === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			_propTypes2.default.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	_preact.Component.call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new _preact.Component(), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: _propTypes2.default,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

exports.version = version;
exports.DOM = DOM;
exports.PropTypes = _propTypes2.default;
exports.Children = Children;
exports.render = render$1;
exports.createClass = createClass;
exports.createFactory = createFactory;
exports.createElement = createElement;
exports.cloneElement = cloneElement$1;
exports.isValidElement = isValidElement;
exports.findDOMNode = findDOMNode;
exports.unmountComponentAtNode = unmountComponentAtNode;
exports.Component = Component$1;
exports.PureComponent = PureComponent;
exports.unstable_renderSubtreeIntoContainer = renderSubtreeIntoContainer;
exports.__spread = extend;
exports.default = index;

/***/ }),

/***/ "ebIA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__("i1Q6").document;
module.exports = document && document.documentElement;

/***/ }),

/***/ "elsh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__("S/mA");
var Type = __webpack_require__("XcPh");

function isHexCode(c) {
  return 0x30 <= c && c <= 0x39 || 0x41 <= c && c <= 0x46 || 0x61 <= c && c <= 0x66;
}

function isOctCode(c) {
  return 0x30 <= c && c <= 0x37;
}

function isDecCode(c) {
  return 0x30 <= c && c <= 0x39;
}

function resolveYamlInteger(data) {
  if (data === null) return false;

  var max = data.length,
      index = 0,
      hasDigits = false,
      ch;

  if (!max) return false;

  ch = data[index];

  if (ch === '-' || ch === '+') {
    ch = data[++index];
  }

  if (ch === '0') {
    if (index + 1 === max) return true;
    ch = data[++index];

    if (ch === 'b') {
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (ch !== '0' && ch !== '1') return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    if (ch === 'x') {
      index++;

      for (; index < max; index++) {
        ch = data[index];
        if (ch === '_') continue;
        if (!isHexCode(data.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== '_';
    }

    for (; index < max; index++) {
      ch = data[index];
      if (ch === '_') continue;
      if (!isOctCode(data.charCodeAt(index))) return false;
      hasDigits = true;
    }
    return hasDigits && ch !== '_';
  }

  if (ch === '_') return false;

  for (; index < max; index++) {
    ch = data[index];
    if (ch === '_') continue;
    if (ch === ':') break;
    if (!isDecCode(data.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }

  if (!hasDigits || ch === '_') return false;

  if (ch !== ':') return true;

  return (/^(:[0-5]?[0-9])+$/.test(data.slice(index))
  );
}

function constructYamlInteger(data) {
  var value = data,
      sign = 1,
      ch,
      base,
      digits = [];

  if (value.indexOf('_') !== -1) {
    value = value.replace(/_/g, '');
  }

  ch = value[0];

  if (ch === '-' || ch === '+') {
    if (ch === '-') sign = -1;
    value = value.slice(1);
    ch = value[0];
  }

  if (value === '0') return 0;

  if (ch === '0') {
    if (value[1] === 'b') return sign * parseInt(value.slice(2), 2);
    if (value[1] === 'x') return sign * parseInt(value, 16);
    return sign * parseInt(value, 8);
  }

  if (value.indexOf(':') !== -1) {
    value.split(':').forEach(function (v) {
      digits.unshift(parseInt(v, 10));
    });

    value = 0;
    base = 1;

    digits.forEach(function (d) {
      value += d * base;
      base *= 60;
    });

    return sign * value;
  }

  return sign * parseInt(value, 10);
}

function isInteger(object) {
  return Object.prototype.toString.call(object) === '[object Number]' && object % 1 === 0 && !common.isNegativeZero(object);
}

module.exports = new Type('tag:yaml.org,2002:int', {
  kind: 'scalar',
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function binary(obj) {
      return obj >= 0 ? '0b' + obj.toString(2) : '-0b' + obj.toString(2).slice(1);
    },
    octal: function octal(obj) {
      return obj >= 0 ? '0' + obj.toString(8) : '-0' + obj.toString(8).slice(1);
    },
    decimal: function decimal(obj) {
      return obj.toString(10);
    },

    hexadecimal: function hexadecimal(obj) {
      return obj >= 0 ? '0x' + obj.toString(16).toUpperCase() : '-0x' + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: 'decimal',
  styleAliases: {
    binary: [2, 'bin'],
    octal: [8, 'oct'],
    decimal: [10, 'dec'],
    hexadecimal: [16, 'hex']
  }
});

/***/ }),

/***/ "fLfT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),

/***/ "fT4J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

function resolveJavascriptUndefined() {
  return true;
}

function constructJavascriptUndefined() {
  return undefined;
}

function representJavascriptUndefined() {
  return '';
}

function isUndefined(object) {
  return typeof object === 'undefined';
}

module.exports = new Type('tag:yaml.org,2002:js/undefined', {
  kind: 'scalar',
  resolve: resolveJavascriptUndefined,
  construct: constructJavascriptUndefined,
  predicate: isUndefined,
  represent: representJavascriptUndefined
});

/***/ }),

/***/ "fwYF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ListCache = __webpack_require__("Xk23"),
    Map = __webpack_require__("K9uV"),
    MapCache = __webpack_require__("wtMJ");

var LARGE_ARRAY_SIZE = 200;

function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "fy20":
/***/ (function(module, exports) {

module.exports = require("buffer");

/***/ }),

/***/ "g31e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),

/***/ "g55O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var funcProto = Function.prototype;

var funcToString = funcProto.toString;

function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "gTE+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getNative = __webpack_require__("bViC"),
    root = __webpack_require__("MIhM");

var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),

/***/ "gU5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _toCss = __webpack_require__("zAZ2");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),

/***/ "gc0D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("vcHl"), __esModule: true };

/***/ }),

/***/ "gjjs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__("Gfzd");
var anObject = __webpack_require__("zotD");
var getKeys = __webpack_require__("knrM");

module.exports = __webpack_require__("6MLN") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),

/***/ "gojl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("akPY");

/***/ }),

/***/ "gwKb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

var _prefix = __webpack_require__("393P");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__("wjI/");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__("hz6I");

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ "h0zV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__("yEjJ");

function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "h8rx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};

exports.default = indigo;

/***/ }),

/***/ "hClK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var nativeCreate = __webpack_require__("FTXF");

var HASH_UNDEFINED = '__lodash_hash_undefined__';

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "hEIm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("zotD");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),

/***/ "hM0O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global[ns] == null) global[ns] = 0;

exports['default'] = global[ns]++;

/***/ }),

/***/ "hd31":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _pure = __webpack_require__("Q3lV");

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = __webpack_require__("+FOY");

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var SvgIconCustom = global.__MUI_SvgIcon__ || _SvgIcon2.default;

var _ref = _react2.default.createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' });

var Check = function Check(props) {
  return _react2.default.createElement(SvgIconCustom, props, _ref);
};

Check = (0, _pure2.default)(Check);
Check.muiName = 'SvgIcon';

exports.default = Check;

/***/ }),

/***/ "hmcW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Stack = __webpack_require__("49I8"),
    baseIsEqual = __webpack_require__("iKxp");

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ }),

/***/ "htFH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.S + $export.F * !__webpack_require__("6MLN"), 'Object', { defineProperty: __webpack_require__("Gfzd").f });

/***/ }),

/***/ "hz6I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__("QDke");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("393P");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

function supportedValue(property, value) {
  if (!el) return value;

  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  try {
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    value = _prefix2['default'].css + value;

    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  el.style[property] = '';

  return cache[cacheKey];
}

/***/ }),

/***/ "i+u+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__("lytE")(true);

__webpack_require__("uRfg")(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),

/***/ "i1Q6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),

/***/ "i4/Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require;

var NodeBuffer;

try {
  var _require = require;
  NodeBuffer = __webpack_require__("fy20").Buffer;
} catch (__) {}

var Type = __webpack_require__("XcPh");

var BASE64_MAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r';

function resolveYamlBinary(data) {
  if (data === null) return false;

  var code,
      idx,
      bitlen = 0,
      max = data.length,
      map = BASE64_MAP;

  for (idx = 0; idx < max; idx++) {
    code = map.indexOf(data.charAt(idx));

    if (code > 64) continue;

    if (code < 0) return false;

    bitlen += 6;
  }

  return bitlen % 8 === 0;
}

function constructYamlBinary(data) {
  var idx,
      tailbits,
      input = data.replace(/[\r\n=]/g, ''),
      max = input.length,
      map = BASE64_MAP,
      bits = 0,
      result = [];

  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 0xFF);
      result.push(bits >> 8 & 0xFF);
      result.push(bits & 0xFF);
    }

    bits = bits << 6 | map.indexOf(input.charAt(idx));
  }

  tailbits = max % 4 * 6;

  if (tailbits === 0) {
    result.push(bits >> 16 & 0xFF);
    result.push(bits >> 8 & 0xFF);
    result.push(bits & 0xFF);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 0xFF);
    result.push(bits >> 2 & 0xFF);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 0xFF);
  }

  if (NodeBuffer) {
    return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
  }

  return result;
}

function representYamlBinary(object) {
  var result = '',
      bits = 0,
      idx,
      tail,
      max = object.length,
      map = BASE64_MAP;

  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map[bits >> 18 & 0x3F];
      result += map[bits >> 12 & 0x3F];
      result += map[bits >> 6 & 0x3F];
      result += map[bits & 0x3F];
    }

    bits = (bits << 8) + object[idx];
  }

  tail = max % 3;

  if (tail === 0) {
    result += map[bits >> 18 & 0x3F];
    result += map[bits >> 12 & 0x3F];
    result += map[bits >> 6 & 0x3F];
    result += map[bits & 0x3F];
  } else if (tail === 2) {
    result += map[bits >> 10 & 0x3F];
    result += map[bits >> 4 & 0x3F];
    result += map[bits << 2 & 0x3F];
    result += map[64];
  } else if (tail === 1) {
    result += map[bits >> 2 & 0x3F];
    result += map[bits << 4 & 0x3F];
    result += map[64];
    result += map[64];
  }

  return result;
}

function isBinary(object) {
  return NodeBuffer && NodeBuffer.isBuffer(object);
}

module.exports = new Type('tag:yaml.org,2002:binary', {
  kind: 'scalar',
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});

/***/ }),

/***/ "i656":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = __webpack_require__("Xos8");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = __webpack_require__("T4f3");

var _extends4 = _interopRequireDefault(_extends3);

exports.default = createMixins;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _extends4.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      return (0, _extends4.default)({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, (0, _defineProperty3.default)({}, breakpoints.up('sm'), (0, _extends4.default)({
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty3.default)(_toolbar, breakpoints.up('xs') + ' and (orientation: landscape)', {
      minHeight: 48
    }), (0, _defineProperty3.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "iE6D":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__("eJdH");

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = new _SheetsRegistry2['default']();

/***/ }),

/***/ "iEGD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isFunction = __webpack_require__("dRuq"),
    isMasked = __webpack_require__("1qpN"),
    isObject = __webpack_require__("u9vI"),
    toSource = __webpack_require__("g55O");

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

var reIsHostCtor = /^\[object .+?Constructor\]$/;

var funcProto = Function.prototype,
    objectProto = Object.prototype;

var funcToString = funcProto.toString;

var hasOwnProperty = objectProto.hasOwnProperty;

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "iKxp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqualDeep = __webpack_require__("6ykg"),
    isObjectLike = __webpack_require__("OuyB");

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "iS0Z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("u9vI"),
    isSymbol = __webpack_require__("bgO7");

var NAN = 0 / 0;

var reTrim = /^\s+|\s+$/g;

var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

var reIsBinary = /^0b[01]+$/i;

var reIsOctal = /^0o[0-7]+$/i;

var freeParseInt = parseInt;

function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "ibPW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("Ky5l"), __esModule: true };

/***/ }),

/***/ "ioJm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__("bJ7U");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var isArray = Array.isArray;
function cloneStyle(style) {
  if (style == null) return style;

  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  }

  if (isArray(style)) return style.map(cloneStyle);

  if ((0, _isObservable2['default'])(style)) return style;

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),

/***/ "iyC2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__("MIhM"),
    stubFalse = __webpack_require__("PYZb");

var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

var moduleExports = freeModule && freeModule.exports === freeExports;

var Buffer = moduleExports ? root.Buffer : undefined;

var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "j3D9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/***/ }),

/***/ "j5AU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

exports['default'] = defaultUnit;

var _defaultUnits = __webpack_require__("9I/U");

var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "jE9R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGet = __webpack_require__("yeiR");

function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),

/***/ "jHxp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    return number != number;
  }
});

/***/ }),

/***/ "jNGL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
  return string in cache ? cache[string] : cache[string] = string.replace(uppercasePattern, '-$&').toLowerCase().replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

/***/ }),

/***/ "jXGU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var memoizeCapped = __webpack_require__("2Axb");

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

var reEscapeChar = /\\(\\)?/g;

var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
      result.push('');
    }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),

/***/ "jx4H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__("FFZn");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),

/***/ "knrM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $keys = __webpack_require__("B9Lq");
var enumBugKeys = __webpack_require__("KxjL");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),

/***/ "kwIb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsTypedArray = __webpack_require__("2L2L"),
    baseUnary = __webpack_require__("PnXa"),
    nodeUtil = __webpack_require__("PBPf");

var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "ky2m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("BtHH");
module.exports = __webpack_require__("zKeE").Object.getPrototypeOf;

/***/ }),

/***/ "l262":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];

		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "lBq7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Hash = __webpack_require__("C8N4"),
    ListCache = __webpack_require__("Xk23"),
    Map = __webpack_require__("K9uV");

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "lPmd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectProto = Object.prototype;

var nativeObjectToString = objectProto.toString;

function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "lW7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseMatches = __webpack_require__("s6cN"),
    baseMatchesProperty = __webpack_require__("zCYT"),
    identity = __webpack_require__("Jpv1"),
    isArray = __webpack_require__("p/0c"),
    property = __webpack_require__("mWmH");

function baseIteratee(value) {
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ }),

/***/ "liDP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = createTypography;

var _deepmerge = __webpack_require__("BokN");

var _deepmerge2 = _interopRequireDefault(_deepmerge);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === undefined ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === undefined ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === undefined ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === undefined ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === undefined ? 500 : _ref$fontWeightMedium,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === undefined ? 16 : _ref$htmlFontSize,
      other = (0, _objectWithoutProperties3.default)(_ref, ['fontFamily', 'fontSize', 'fontWeightLight', 'fontWeightRegular', 'fontWeightMedium', 'htmlFontSize']);

  function pxToRem(value) {
    return value / htmlFontSize + 'rem';
  }

  return (0, _deepmerge2.default)({
    pxToRem: pxToRem,
    round: round,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    display4: {
      fontSize: pxToRem(112),
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: round(128 / 112) + 'em',
      marginLeft: '-.06em',
      color: palette.text.secondary
    },
    display3: {
      fontSize: pxToRem(56),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: round(73 / 56) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    display2: {
      fontSize: pxToRem(45),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(48 / 45) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    display1: {
      fontSize: pxToRem(34),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(41 / 34) + 'em',
      marginLeft: '-.04em',
      color: palette.text.secondary
    },
    headline: {
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(32.5 / 24) + 'em',
      color: palette.text.primary
    },
    title: {
      fontSize: pxToRem(21),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: round(24.5 / 21) + 'em',
      color: palette.text.primary
    },
    subheading: {
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(24 / 16) + 'em',
      color: palette.text.primary
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: round(24 / 14) + 'em',
      color: palette.text.primary
    },
    body1: {
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(20.5 / 14) + 'em',
      color: palette.text.primary
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: round(16.5 / 12) + 'em',
      color: palette.text.secondary
    },
    button: {
      fontSize: pxToRem(fontSize),
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily
    }
  }, other, {
    clone: false });
}

/***/ }),

/***/ "lyLi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "lytE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__("MpYs");
var defined = __webpack_require__("U72i");

module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),

/***/ "mFpP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getAllKeys = __webpack_require__("uf6I");

var COMPARE_PARTIAL_FLAG = 1;

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }

  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }

    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "mWmH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseProperty = __webpack_require__("wcxQ"),
    basePropertyDeep = __webpack_require__("jE9R"),
    isKey = __webpack_require__("2ibm"),
    toKey = __webpack_require__("RQ0L");

function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ }),

/***/ "mbLO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defined = __webpack_require__("U72i");
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),

/***/ "mqk9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIteratee = __webpack_require__("lW7l"),
    baseSum = __webpack_require__("3tMo");

function sumBy(array, iteratee) {
    return array && array.length ? baseSum(array, baseIteratee(iteratee, 2)) : 0;
}

module.exports = sumBy;

/***/ }),

/***/ "nFDa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("i+u+");
__webpack_require__("COf8");
module.exports = __webpack_require__("ZxII").f('iterator');

/***/ }),

/***/ "nYLM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__("S/mA");
var YAMLException = __webpack_require__("78AQ");
var Type = __webpack_require__("XcPh");

function compileList(schema, name, result) {
  var exclude = [];

  schema.include.forEach(function (includedSchema) {
    result = compileList(includedSchema, name, result);
  });

  schema[name].forEach(function (currentType) {
    result.forEach(function (previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
        exclude.push(previousIndex);
      }
    });

    result.push(currentType);
  });

  return result.filter(function (type, index) {
    return exclude.indexOf(index) === -1;
  });
}

function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {}
  },
      index,
      length;

  function collectType(type) {
    result[type.kind][type.tag] = result['fallback'][type.tag] = type;
  }

  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}

function Schema(definition) {
  this.include = definition.include || [];
  this.implicit = definition.implicit || [];
  this.explicit = definition.explicit || [];

  this.implicit.forEach(function (type) {
    if (type.loadKind && type.loadKind !== 'scalar') {
      throw new YAMLException('There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.');
    }
  });

  this.compiledImplicit = compileList(this, 'implicit', []);
  this.compiledExplicit = compileList(this, 'explicit', []);
  this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
}

Schema.DEFAULT = null;

Schema.create = function createSchema() {
  var schemas, types;

  switch (arguments.length) {
    case 1:
      schemas = Schema.DEFAULT;
      types = arguments[0];
      break;

    case 2:
      schemas = arguments[0];
      types = arguments[1];
      break;

    default:
      throw new YAMLException('Wrong number of arguments for Schema.create function');
  }

  schemas = common.toArray(schemas);
  types = common.toArray(types);

  if (!schemas.every(function (schema) {
    return schema instanceof Schema;
  })) {
    throw new YAMLException('Specified list of super schemas (or a single Schema object) contains a non-Schema object.');
  }

  if (!types.every(function (type) {
    return type instanceof Type;
  })) {
    throw new YAMLException('Specified list of YAML types (or a single Type object) contains a non-Type object.');
  }

  return new Schema({
    include: schemas,
    explicit: types
  });
};

module.exports = Schema;

/***/ }),

/***/ "nhsl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectProto = Object.prototype;

function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "noYc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _RuleList = __webpack_require__("ciB6");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),

/***/ "np4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;

var _cssVendor = __webpack_require__("gwKb");

var vendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj['default'] = obj;return newObj;
  }
}

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "oRPk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("32ty")('Map');

/***/ }),

/***/ "oVtX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

exports['default'] = jssGlobal;

var _jss = __webpack_require__("+HdU");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new _jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}

/***/ }),

/***/ "oaAh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__("wppe"),
    Uint8Array = __webpack_require__("yfX1"),
    eq = __webpack_require__("LIpy"),
    equalArrays = __webpack_require__("pkMv"),
    mapToArray = __webpack_require__("7BjG"),
    setToArray = __webpack_require__("ZEJm");

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }

      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "ooYQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Hierarchy = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hierarchy = __webpack_require__("LpAF");

var _preact = __webpack_require__("KM04");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hierarchy = exports.Hierarchy = function Hierarchy(props) {
  var _buffer$circleSize$st = _extends({ buffer: _hierarchy.UNIT, circleSize: 40, style: __webpack_require__("pHRv"), textDistance: 35 }, props),
      tree = _buffer$circleSize$st.tree,
      buffer = _buffer$circleSize$st.buffer,
      circleSize = _buffer$circleSize$st.circleSize,
      getIcon = _buffer$circleSize$st.getIcon,
      onClick = _buffer$circleSize$st.onClick,
      style = _buffer$circleSize$st.style,
      textDistance = _buffer$circleSize$st.textDistance;

  var _generateHierarchyDat = (0, _hierarchy.generateHierarchyData)(tree),
      nodes = _generateHierarchyDat.nodes,
      lines = _generateHierarchyDat.lines,
      width = _generateHierarchyDat.width,
      height = _generateHierarchyDat.height;

  var viewBox = [-buffer, -buffer, width + buffer * 2, height + buffer * 2];
  return __webpack_require__("KM04").h(
    "svg",
    { "class": style.hierarchy, viewBox: viewBox.join(" "), width: "100%", height: "100%" },
    lines.map(function (line) {
      return __webpack_require__("KM04").h("line", { "class": style[line.status], x1: line.x1, x2: line.x2, y1: line.y1, y2: line.y2 });
    }),
    nodes.map(function (node) {
      var circleProps = {};
      if (onClick) circleProps.onClick = onClick;

      return __webpack_require__("KM04").h(
        "g",
        { "class": style[node.status] },
        __webpack_require__("KM04").h("circle", _extends({ className: onClick ? "clickable" : "" }, circleProps, { cx: node.x, cy: node.y, r: circleSize / 2 })),
        __webpack_require__("KM04").h(
          "text",
          { x: node.x, y: node.y, dy: textDistance },
          node.label
        ),
        !!getIcon && getIcon(node)
      );
    })
  );
};

Hierarchy.propTypes = {
  buffer: _propTypes2.default.integer,
  circleSize: _propTypes2.default.integer,
  getIcon: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  style: _propTypes2.default.object,
  textDistance: _propTypes2.default.integer,
  tree: _propTypes2.default.object.isRequired
};

exports.default = Hierarchy;

/***/ }),

/***/ "ozpD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__("3zRh");
var call = __webpack_require__("hEIm");
var isArrayIter = __webpack_require__("af0K");
var anObject = __webpack_require__("zotD");
var toLength = __webpack_require__("S7IM");
var getIterFn = __webpack_require__("7AqT");
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),

/***/ "p/0c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "pHRv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hierarchy":"hierarchy__1Kgbe","clickable":"clickable__FvRlU","active":"active__11sRO","done":"done__2FB5y"};

/***/ }),

/***/ "pK4Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetTag = __webpack_require__("e5TX"),
    isObjectLike = __webpack_require__("OuyB");

var argsTag = '[object Arguments]';

function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "pKN0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    BaseComponent[key] = value;

    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),

/***/ "pePJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__("v3CT");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("WcDi");

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__("bJ7U");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null;

    var style$ = decl;

    var rule = (0, _createRule2['default'])(name, {}, options);

    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });

    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),

/***/ "pkMv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SetCache = __webpack_require__("thFQ"),
    arraySome = __webpack_require__("SfCF"),
    cacheHas = __webpack_require__("qxaq");

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }

  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }

    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "puZk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var common = __webpack_require__("S/mA");
var YAMLException = __webpack_require__("78AQ");
var Mark = __webpack_require__("Ju+9");
var DEFAULT_SAFE_SCHEMA = __webpack_require__("tLdR");
var DEFAULT_FULL_SCHEMA = __webpack_require__("HKwV");

var _hasOwnProperty = Object.prototype.hasOwnProperty;

var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;

var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;

var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;

function is_EOL(c) {
  return c === 0x0A || c === 0x0D;
}

function is_WHITE_SPACE(c) {
  return c === 0x09 || c === 0x20;
}

function is_WS_OR_EOL(c) {
  return c === 0x09 || c === 0x20 || c === 0x0A || c === 0x0D;
}

function is_FLOW_INDICATOR(c) {
  return c === 0x2C || c === 0x5B || c === 0x5D || c === 0x7B || c === 0x7D;
}

function fromHexCode(c) {
  var lc;

  if (0x30 <= c && c <= 0x39) {
    return c - 0x30;
  }

  lc = c | 0x20;

  if (0x61 <= lc && lc <= 0x66) {
    return lc - 0x61 + 10;
  }

  return -1;
}

function escapedHexLen(c) {
  if (c === 0x78) {
      return 2;
    }
  if (c === 0x75) {
      return 4;
    }
  if (c === 0x55) {
      return 8;
    }
  return 0;
}

function fromDecimalCode(c) {
  if (0x30 <= c && c <= 0x39) {
    return c - 0x30;
  }

  return -1;
}

function simpleEscapeSequence(c) {
  return c === 0x30 ? '\x00' : c === 0x61 ? '\x07' : c === 0x62 ? '\x08' : c === 0x74 ? '\x09' : c === 0x09 ? '\x09' : c === 0x6E ? '\x0A' : c === 0x76 ? '\x0B' : c === 0x66 ? '\x0C' : c === 0x72 ? '\x0D' : c === 0x65 ? '\x1B' : c === 0x20 ? ' ' : c === 0x22 ? '\x22' : c === 0x2F ? '/' : c === 0x5C ? '\x5C' : c === 0x4E ? '\x85' : c === 0x5F ? '\xA0' : c === 0x4C ? '\u2028' : c === 0x50 ? '\u2029' : '';
}

function charFromCodepoint(c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c);
  }

  return String.fromCharCode((c - 0x010000 >> 10) + 0xD800, (c - 0x010000 & 0x03FF) + 0xDC00);
}

var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (var i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}

function State(input, options) {
  this.input = input;

  this.filename = options['filename'] || null;
  this.schema = options['schema'] || DEFAULT_FULL_SCHEMA;
  this.onWarning = options['onWarning'] || null;
  this.legacy = options['legacy'] || false;
  this.json = options['json'] || false;
  this.listener = options['listener'] || null;

  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;

  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;

  this.documents = [];
}

function generateError(state, message) {
  return new YAMLException(message, new Mark(state.filename, state.input, state.position, state.line, state.position - state.lineStart));
}

function throwError(state, message) {
  throw generateError(state, message);
}

function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}

var directiveHandlers = {

  YAML: function handleYamlDirective(state, name, args) {

    var match, major, minor;

    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive');
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument');
    }

    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive');
    }

    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document');
    }

    state.version = args[0];
    state.checkLineBreaks = minor < 2;

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document');
    }
  },

  TAG: function handleTagDirective(state, name, args) {

    var handle, prefix;

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments');
    }

    handle = args[0];
    prefix = args[1];

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive');
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive');
    }

    state.tagMap[handle] = prefix;
  }
};

function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;

  if (start < end) {
    _result = state.input.slice(start, end);

    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 0x09 || 0x20 <= _character && _character <= 0x10FFFF)) {
          throwError(state, 'expected valid JSON character');
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters');
    }

    state.result += _result;
  }
}

function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;

  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable');
  }

  sourceKeys = Object.keys(source);

  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];

    if (!_hasOwnProperty.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}

function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
  var index, quantity;

  keyNode = String(keyNode);

  if (_result === null) {
    _result = {};
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.position = startPos || state.position;
      throwError(state, 'duplicated mapping key');
    }
    _result[keyNode] = valueNode;
    delete overridableKeys[keyNode];
  }

  return _result;
}

function readLineBreak(state) {
  var ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x0A) {
      state.position++;
    } else if (ch === 0x0D) {
      state.position++;
      if (state.input.charCodeAt(state.position) === 0x0A) {
          state.position++;
        }
    } else {
    throwError(state, 'a line break is expected');
  }

  state.line += 1;
  state.lineStart = state.position;
}

function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0,
      ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    if (allowComments && ch === 0x23) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0x0A && ch !== 0x0D && ch !== 0);
      }

    if (is_EOL(ch)) {
      readLineBreak(state);

      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;

      while (ch === 0x20) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation');
  }

  return lineBreaks;
}

function testDocumentSeparator(state) {
  var _position = state.position,
      ch;

  ch = state.input.charCodeAt(_position);

  if ((ch === 0x2D || ch === 0x2E) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {

    _position += 3;

    ch = state.input.charCodeAt(_position);

    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }

  return false;
}

function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += ' ';
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1);
  }
}

function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding,
      following,
      captureStart,
      captureEnd,
      hasPendingContent,
      _line,
      _lineStart,
      _lineIndent,
      _kind = state.kind,
      _result = state.result,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 0x23 || ch === 0x26 || ch === 0x2A || ch === 0x21 || ch === 0x7C || ch === 0x3E || ch === 0x27 || ch === 0x22 || ch === 0x25 || ch === 0x40 || ch === 0x60) {
      return false;
    }

  if (ch === 0x3F || ch === 0x2D) {
      following = state.input.charCodeAt(state.position + 1);

      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        return false;
      }
    }

  state.kind = 'scalar';
  state.result = '';
  captureStart = captureEnd = state.position;
  hasPendingContent = false;

  while (ch !== 0) {
    if (ch === 0x3A) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          break;
        }
      } else if (ch === 0x23) {
        preceding = state.input.charCodeAt(state.position - 1);

        if (is_WS_OR_EOL(preceding)) {
          break;
        }
      } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }

    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }

    ch = state.input.charCodeAt(++state.position);
  }

  captureSegment(state, captureStart, captureEnd, false);

  if (state.result) {
    return true;
  }

  state.kind = _kind;
  state.result = _result;
  return false;
}

function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x27) {
      return false;
    }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (ch === 0x27) {
            captureStart = state.position;
            state.position++;
            captureEnd = state.position;
          } else {
          return true;
        }
      } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar');
}

function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x22) {
      return false;
    }

  state.kind = 'scalar';
  state.result = '';
  state.position++;
  captureStart = captureEnd = state.position;

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22) {
        captureSegment(state, captureStart, state.position, true);
        state.position++;
        return true;
      } else if (ch === 0x5C) {
        captureSegment(state, captureStart, state.position, true);
        ch = state.input.charCodeAt(++state.position);

        if (is_EOL(ch)) {
          skipSeparationSpace(state, false, nodeIndent);
        } else if (ch < 256 && simpleEscapeCheck[ch]) {
          state.result += simpleEscapeMap[ch];
          state.position++;
        } else if ((tmp = escapedHexLen(ch)) > 0) {
          hexLength = tmp;
          hexResult = 0;

          for (; hexLength > 0; hexLength--) {
            ch = state.input.charCodeAt(++state.position);

            if ((tmp = fromHexCode(ch)) >= 0) {
              hexResult = (hexResult << 4) + tmp;
            } else {
              throwError(state, 'expected hexadecimal character');
            }
          }

          state.result += charFromCodepoint(hexResult);

          state.position++;
        } else {
          throwError(state, 'unknown escape sequence');
        }

        captureStart = captureEnd = state.position;
      } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar');
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar');
}

function readFlowCollection(state, nodeIndent) {
  var readNext = true,
      _line,
      _tag = state.tag,
      _result,
      _anchor = state.anchor,
      following,
      terminator,
      isPair,
      isExplicitPair,
      isMapping,
      overridableKeys = {},
      keyNode,
      keyTag,
      valueNode,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x5B) {
      terminator = 0x5D;
      isMapping = false;
      _result = [];
    } else if (ch === 0x7B) {
      terminator = 0x7D;
      isMapping = true;
      _result = {};
    } else {
    return false;
  }

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(++state.position);

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? 'mapping' : 'sequence';
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries');
    }

    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;

    if (ch === 0x3F) {
        following = state.input.charCodeAt(state.position + 1);

        if (is_WS_OR_EOL(following)) {
          isPair = isExplicitPair = true;
          state.position++;
          skipSeparationSpace(state, true, nodeIndent);
        }
      }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if ((isExplicitPair || state.line === _line) && ch === 0x3A) {
        isPair = true;
        ch = state.input.charCodeAt(++state.position);
        skipSeparationSpace(state, true, nodeIndent);
        composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
        valueNode = state.result;
      }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode));
    } else {
      _result.push(keyNode);
    }

    skipSeparationSpace(state, true, nodeIndent);

    ch = state.input.charCodeAt(state.position);

    if (ch === 0x2C) {
        readNext = true;
        ch = state.input.charCodeAt(++state.position);
      } else {
      readNext = false;
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection');
}

function readBlockScalar(state, nodeIndent) {
  var captureStart,
      folding,
      chomping = CHOMPING_CLIP,
      didReadContent = false,
      detectedIndent = false,
      textIndent = nodeIndent,
      emptyLines = 0,
      atMoreIndented = false,
      tmp,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch === 0x7C) {
      folding = false;
    } else if (ch === 0x3E) {
      folding = true;
    } else {
    return false;
  }

  state.kind = 'scalar';
  state.result = '';

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);

    if (ch === 0x2B || ch === 0x2D) {
        if (CHOMPING_CLIP === chomping) {
          chomping = ch === 0x2B ? CHOMPING_KEEP : CHOMPING_STRIP;
        } else {
          throwError(state, 'repeat of a chomping mode identifier');
        }
      } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one');
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, 'repeat of an indentation width identifier');
      }
    } else {
      break;
    }
  }

  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));

    if (ch === 0x23) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (!is_EOL(ch) && ch !== 0);
      }
  }

  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;

    ch = state.input.charCodeAt(state.position);

    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 0x20) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }

    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }

    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += '\n';
        }
      }

      break;
    }

    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;

        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat('\n', emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += ' ';
        }
      } else {
        state.result += common.repeat('\n', emptyLines);
      }
    } else {
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines);
    }

    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;

    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }

    captureSegment(state, captureStart, state.position, false);
  }

  return true;
}

function readBlockSequence(state, nodeIndent) {
  var _line,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = [],
      following,
      detected = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {

    if (ch !== 0x2D) {
        break;
      }

    following = state.input.charCodeAt(state.position + 1);

    if (!is_WS_OR_EOL(following)) {
      break;
    }

    detected = true;
    state.position++;

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }

    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, 'bad indentation of a sequence entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'sequence';
    state.result = _result;
    return true;
  }
  return false;
}

function readBlockMapping(state, nodeIndent, flowIndent) {
  var following,
      allowCompact,
      _line,
      _pos,
      _tag = state.tag,
      _anchor = state.anchor,
      _result = {},
      overridableKeys = {},
      keyTag = null,
      keyNode = null,
      valueNode = null,
      atExplicitKey = false,
      detected = false,
      ch;

  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }

  ch = state.input.charCodeAt(state.position);

  while (ch !== 0) {
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    _pos = state.position;

    if ((ch === 0x3F || ch === 0x3A) && is_WS_OR_EOL(following)) {

      if (ch === 0x3F) {
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
            keyTag = keyNode = valueNode = null;
          }

          detected = true;
          atExplicitKey = true;
          allowCompact = true;
        } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line');
      }

      state.position += 1;
      ch = following;
    } else if (composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);

        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }

        if (ch === 0x3A) {
            ch = state.input.charCodeAt(++state.position);

            if (!is_WS_OR_EOL(ch)) {
              throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping');
            }

            if (atExplicitKey) {
              storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }

            detected = true;
            atExplicitKey = false;
            allowCompact = false;
            keyTag = state.tag;
            keyNode = state.result;
          } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed');
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key');
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    } else {
        break;
      }

    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
        keyTag = keyNode = valueNode = null;
      }

      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }

    if (state.lineIndent > nodeIndent && ch !== 0) {
      throwError(state, 'bad indentation of a mapping entry');
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }

  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null);
  }

  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = 'mapping';
    state.result = _result;
  }

  return detected;
}

function readTagProperty(state) {
  var _position,
      isVerbatim = false,
      isNamed = false,
      tagHandle,
      tagName,
      ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x21) return false;

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property');
  }

  ch = state.input.charCodeAt(++state.position);

  if (ch === 0x3C) {
      isVerbatim = true;
      ch = state.input.charCodeAt(++state.position);
    } else if (ch === 0x21) {
      isNamed = true;
      tagHandle = '!!';
      ch = state.input.charCodeAt(++state.position);
    } else {
    tagHandle = '!';
  }

  _position = state.position;

  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 0x3E);

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag');
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {

      if (ch === 0x21) {
          if (!isNamed) {
            tagHandle = state.input.slice(_position - 1, state.position + 1);

            if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
              throwError(state, 'named tag handle cannot contain such characters');
            }

            isNamed = true;
            _position = state.position + 1;
          } else {
            throwError(state, 'tag suffix cannot contain exclamation marks');
          }
        }

      ch = state.input.charCodeAt(++state.position);
    }

    tagName = state.input.slice(_position, state.position);

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters');
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName);
  }

  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === '!') {
    state.tag = '!' + tagName;
  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }

  return true;
}

function readAnchorProperty(state) {
  var _position, ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x26) return false;

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property');
  }

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character');
  }

  state.anchor = state.input.slice(_position, state.position);
  return true;
}

function readAlias(state) {
  var _position, alias, ch;

  ch = state.input.charCodeAt(state.position);

  if (ch !== 0x2A) return false;

  ch = state.input.charCodeAt(++state.position);
  _position = state.position;

  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character');
  }

  alias = state.input.slice(_position, state.position);

  if (!state.anchorMap.hasOwnProperty(alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }

  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}

function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles,
      allowBlockScalars,
      allowBlockCollections,
      indentStatus = 1,
      atNewLine = false,
      hasContent = false,
      typeIndex,
      typeQuantity,
      type,
      flowIndent,
      blockIndent;

  if (state.listener !== null) {
    state.listener('open', state);
  }

  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;

  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;

      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }

  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;

        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }

    blockIndent = state.position - state.lineStart;

    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties');
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;

          if (state.tag === null) {
            state.tag = '?';
          }
        }

        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }

  if (state.tag !== null && state.tag !== '!') {
    if (state.tag === '?') {
      for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
        type = state.implicitTypes[typeIndex];

        if (type.resolve(state.result)) {
          state.result = type.construct(state.result);
          state.tag = type.tag;
          if (state.anchor !== null) {
            state.anchorMap[state.anchor] = state.result;
          }
          break;
        }
      }
    } else if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag];

      if (state.result !== null && type.kind !== state.kind) {
        throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"');
      }

      if (!type.resolve(state.result)) {
        throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag');
      } else {
        state.result = type.construct(state.result);
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else {
      throwError(state, 'unknown tag !<' + state.tag + '>');
    }
  }

  if (state.listener !== null) {
    state.listener('close', state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}

function readDocument(state) {
  var documentStart = state.position,
      _position,
      directiveName,
      directiveArgs,
      hasDirectives = false,
      ch;

  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = {};
  state.anchorMap = {};

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);

    ch = state.input.charCodeAt(state.position);

    if (state.lineIndent > 0 || ch !== 0x25) {
        break;
      }

    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;

    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }

    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length');
    }

    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      if (ch === 0x23) {
          do {
            ch = state.input.charCodeAt(++state.position);
          } while (ch !== 0 && !is_EOL(ch));
          break;
        }

      if (is_EOL(ch)) break;

      _position = state.position;

      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }

      directiveArgs.push(state.input.slice(_position, state.position));
    }

    if (ch !== 0) readLineBreak(state);

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }

  skipSeparationSpace(state, true, -1);

  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 0x2D && state.input.charCodeAt(state.position + 1) === 0x2D && state.input.charCodeAt(state.position + 2) === 0x2D) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected');
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);

  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content');
  }

  state.documents.push(state.result);

  if (state.position === state.lineStart && testDocumentSeparator(state)) {

    if (state.input.charCodeAt(state.position) === 0x2E) {
        state.position += 3;
        skipSeparationSpace(state, true, -1);
      }
    return;
  }

  if (state.position < state.length - 1) {
    throwError(state, 'end of the stream or a document separator is expected');
  } else {
    return;
  }
}

function loadDocuments(input, options) {
  input = String(input);
  options = options || {};

  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 0x0A && input.charCodeAt(input.length - 1) !== 0x0D) {
        input += '\n';
      }

    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1);
    }
  }

  var state = new State(input, options);

  state.input += '\0';

  while (state.input.charCodeAt(state.position) === 0x20) {
    state.lineIndent += 1;
    state.position += 1;
  }

  while (state.position < state.length - 1) {
    readDocument(state);
  }

  return state.documents;
}

function loadAll(input, iterator, options) {
  var documents = loadDocuments(input, options),
      index,
      length;

  if (typeof iterator !== 'function') {
    return documents;
  }

  for (index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}

function load(input, options) {
  var documents = loadDocuments(input, options);

  if (documents.length === 0) {
    return undefined;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new YAMLException('expected a single document in the stream, but found more');
}

function safeLoadAll(input, output, options) {
  if (typeof output === 'function') {
    loadAll(input, output, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
  } else {
    return loadAll(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
  }
}

function safeLoad(input, options) {
  return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options));
}

module.exports.loadAll = loadAll;
module.exports.load = load;
module.exports.safeLoadAll = safeLoadAll;
module.exports.safeLoad = safeLoad;

/***/ }),

/***/ "q3B8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__("MIhM");

var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "qBl2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "qwoA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("IAJx"), __esModule: true };

/***/ }),

/***/ "qxaq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "r0r+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var HASH_UNDEFINED = '__lodash_hash_undefined__';

function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "r4gY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANNEL = undefined;

var _defineProperty2 = __webpack_require__("Xos8");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var CHANNEL = exports.CHANNEL = '__THEMING__';

var themeListener = {
  contextTypes: (0, _defineProperty3.default)({}, CHANNEL, _propTypes2.default.object),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  },
  unsubscribe: function unsubscribe(context, subscriptionId) {
    if (context[CHANNEL]) {
      context[CHANNEL].unsubscribe(subscriptionId);
    }
  }
};

exports.default = themeListener;

/***/ }),

/***/ "r8MY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "rMkZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var toIObject = __webpack_require__("Wyka");
var gOPN = __webpack_require__("Ni5N").f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),

/***/ "rVo6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

var _hasOwnProperty = Object.prototype.hasOwnProperty;

function resolveYamlSet(data) {
  if (data === null) return true;

  var key,
      object = data;

  for (key in object) {
    if (_hasOwnProperty.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }

  return true;
}

function constructYamlSet(data) {
  return data !== null ? data : {};
}

module.exports = new Type('tag:yaml.org,2002:set', {
  kind: 'mapping',
  resolve: resolveYamlSet,
  construct: constructYamlSet
});

/***/ }),

/***/ "rmh+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var join = function join(value, by) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }
  return result;
};

function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Array.isArray(value)) return value;

  var cssValue = '';

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),

/***/ "s6cN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsMatch = __webpack_require__("hmcW"),
    getMatchData = __webpack_require__("N0V4"),
    matchesStrictComparable = __webpack_require__("sruz");

function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),

/***/ "s9iF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "sQx0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jssGlobal = __webpack_require__("oVtX");

var _jssGlobal2 = _interopRequireDefault(_jssGlobal);

var _jssNested = __webpack_require__("vQxc");

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssCamelCase = __webpack_require__("TCEC");

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssDefaultUnit = __webpack_require__("j5AU");

var _jssDefaultUnit2 = _interopRequireDefault(_jssDefaultUnit);

var _jssVendorPrefixer = __webpack_require__("np4e");

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _jssPropsSort = __webpack_require__("0kgT");

var _jssPropsSort2 = _interopRequireDefault(_jssPropsSort);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function jssPreset() {
  return {
    plugins: [(0, _jssGlobal2.default)(), (0, _jssNested2.default)(), (0, _jssCamelCase2.default)(), (0, _jssDefaultUnit2.default)(), (0, _jssVendorPrefixer2.default)(), (0, _jssPropsSort2.default)()]
  };
}

exports.default = jssPreset;

/***/ }),

/***/ "skbs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "srRO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "sruz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),

/***/ "sxPs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pIE = __webpack_require__("z7R8");
var createDesc = __webpack_require__("0WCH");
var toIObject = __webpack_require__("Wyka");
var toPrimitive = __webpack_require__("EKwp");
var has = __webpack_require__("yS17");
var IE8_DOM_DEFINE = __webpack_require__("R6c1");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("6MLN") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),

/***/ "tEIQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isSymbol = __webpack_require__("bgO7");

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;

/***/ }),

/***/ "tLdR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var Schema = __webpack_require__("nYLM");

module.exports = new Schema({
  include: [__webpack_require__("wwCT")],
  implicit: [__webpack_require__("eBHa"), __webpack_require__("yG2a")],
  explicit: [__webpack_require__("i4/Y"), __webpack_require__("dG94"), __webpack_require__("bJLp"), __webpack_require__("rVo6")]
});

/***/ }),

/***/ "tMiz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ctx = __webpack_require__("3zRh");
var IObject = __webpack_require__("E5Ce");
var toObject = __webpack_require__("mbLO");
var toLength = __webpack_require__("S7IM");
var asc = __webpack_require__("TD/Z");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
              case 3:
                return true;
              case 5:
                return val;
              case 6:
                return index;
              case 2:
                result.push(val);} else if (IS_EVERY) return false;
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),

/***/ "tOVe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _toCss = __webpack_require__("zAZ2");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),

/***/ "tQCT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var DataView = __webpack_require__("fLfT"),
    Map = __webpack_require__("K9uV"),
    Promise = __webpack_require__("gTE+"),
    Set = __webpack_require__("IVes"),
    WeakMap = __webpack_require__("4N03"),
    baseGetTag = __webpack_require__("e5TX"),
    toSource = __webpack_require__("g55O");

var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

var getTag = baseGetTag;

if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),

/***/ "teOa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []

    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);

        rule.style = nextStyle;
      }
    }

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),

/***/ "thFQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MapCache = __webpack_require__("wtMJ"),
    setCacheAdd = __webpack_require__("r0r+"),
    setCacheHas = __webpack_require__("41+b");

function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),

/***/ "tuDi":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "u9vI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "uRfg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__("1kq3");
var $export = __webpack_require__("vSO4");
var redefine = __webpack_require__("gojl");
var hide = __webpack_require__("akPY");
var has = __webpack_require__("yS17");
var Iterators = __webpack_require__("dhak");
var $iterCreate = __webpack_require__("b7Q2");
var setToStringTag = __webpack_require__("11Ut");
var getPrototypeOf = __webpack_require__("HHE0");
var ITERATOR = __webpack_require__("Ug9I")('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = !BUGGY && $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);

      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }

  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }

  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }

  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),

/***/ "uf6I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseGetAllKeys = __webpack_require__("Vhgk"),
    getSymbols = __webpack_require__("EvLK"),
    keys = __webpack_require__("HI10");

function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "uiOY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Symbol = __webpack_require__("wppe");

var objectProto = Object.prototype;

var hasOwnProperty = objectProto.hasOwnProperty;

var nativeObjectToString = objectProto.toString;

var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "uj5A":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__("knrM");
var gOPS = __webpack_require__("Ocr3");
var pIE = __webpack_require__("z7R8");
var toObject = __webpack_require__("mbLO");
var IObject = __webpack_require__("E5Ce");
var $assign = Object.assign;

module.exports = !$assign || __webpack_require__("wLcK")(function () {
  var A = {};
  var B = {};

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }return T;
} : $assign;

/***/ }),

/***/ "utiW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sheetsManager = undefined;

var _keys = __webpack_require__("8FtN");

var _keys2 = _interopRequireDefault(_keys);

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__("BX4+");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("dACh");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("jx4H");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("VOrx");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("ZKjc");

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _map = __webpack_require__("YZrv");

var _map2 = _interopRequireDefault(_map);

var _minSafeInteger = __webpack_require__("S8I9");

var _minSafeInteger2 = _interopRequireDefault(_minSafeInteger);

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _hoistNonReactStatics = __webpack_require__("2DKW");

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getDisplayName = __webpack_require__("6KFX");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _wrapDisplayName = __webpack_require__("ytkY");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _contextTypes = __webpack_require__("O2oT");

var _contextTypes2 = _interopRequireDefault(_contextTypes);

var _jss = __webpack_require__("+HdU");

var _ns = __webpack_require__("GPtb");

var ns = _interopRequireWildcard(_ns);

var _jssPreset = __webpack_require__("sQx0");

var _jssPreset2 = _interopRequireDefault(_jssPreset);

var _createMuiTheme = __webpack_require__("R9xs");

var _createMuiTheme2 = _interopRequireDefault(_createMuiTheme);

var _themeListener = __webpack_require__("r4gY");

var _themeListener2 = _interopRequireDefault(_themeListener);

var _createGenerateClassName = __webpack_require__("1yXR");

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _getStylesCreator = __webpack_require__("7XZw");

var _getStylesCreator2 = _interopRequireDefault(_getStylesCreator);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }newObj.default = obj;return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var jss = (0, _jss.create)((0, _jssPreset2.default)());

var generateClassName = (0, _createGenerateClassName2.default)();

var indexCounter = _minSafeInteger2.default;

var sheetsManager = exports.sheetsManager = new _map2.default();

var noopTheme = {};

var defaultTheme = void 0;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme2.default)();
  return defaultTheme;
}

var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === undefined ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === undefined ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties3.default)(options, ['withTheme', 'flip', 'name']);

    var stylesCreator = (0, _getStylesCreator2.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';

    indexCounter += 1;
    stylesCreator.options.index = indexCounter;

     false ? (0, _warning2.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var WithStyles = function (_React$Component) {
      (0, _inherits3.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        (0, _classCallCheck3.default)(this, WithStyles);

        var _this = (0, _possibleConstructorReturn3.default)(this, (WithStyles.__proto__ || (0, _getPrototypeOf2.default)(WithStyles)).call(this, props, context));

        _this.state = {};
        _this.disableStylesGeneration = false;
        _this.jss = null;
        _this.sheetOptions = null;
        _this.sheetsManager = sheetsManager;
        _this.stylesCreatorSaved = null;
        _this.theme = null;
        _this.unsubscribeId = null;

        _this.jss = _this.context[ns.jss] || jss;

        var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        }

        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]);

        _this.theme = listenToTheme ? _themeListener2.default.initial(context) || getDefaultTheme() : noopTheme;

        _this.attach(_this.theme);
        return _this;
      }

      (0, _createClass3.default)(WithStyles, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener2.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;
            _this2.attach(_this2.theme);

            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {
          if (this.stylesCreatorSaved === stylesCreator || "production" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener2.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: 'attach',
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

          if (!sheetManager) {
            sheetManager = new _map2.default();
            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
          }

          var sheetManagerTheme = sheetManager.get(theme);

          if (!sheetManagerTheme) {
            sheetManagerTheme = {
              refs: 0,
              sheet: null
            };
            sheetManager.set(theme, sheetManagerTheme);
          }

          if (sheetManagerTheme.refs === 0) {
            var styles = stylesCreatorSaved.create(theme, name);
            var meta = name;

            if (false) {
              meta = (0, _getDisplayName2.default)(Component);
            }

            var sheet = this.jss.createStyleSheet(styles, (0, _extends3.default)({
              meta: meta,
              classNamePrefix: meta,
              flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
              link: false
            }, this.sheetOptions, stylesCreatorSaved.options, {
              name: name
            }, styleSheetOptions));

            sheetManagerTheme.sheet = sheet;
            sheet.attach();

            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManagerTheme.refs += 1;
        }
      }, {
        key: 'detach',
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
          var sheetManagerTheme = sheetManager.get(theme);

          sheetManagerTheme.refs -= 1;

          if (sheetManagerTheme.refs === 0) {
            sheetManager.delete(theme);
            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
            var sheetsRegistry = this.context[ns.sheetsRegistry];
            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManagerTheme.sheet);
            }
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);

          var classes = void 0;
          var renderedClasses = {};

          if (!this.disableStylesGeneration) {
            var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
            var sheetsManagerTheme = sheetManager.get(this.theme);
            renderedClasses = sheetsManagerTheme.sheet.classes;
          }

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (accumulator, key) {
               false ? (0, _warning2.default)(renderedClasses[key] || _this3.disableStylesGeneration, ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not implemented in ' + (0, _getDisplayName2.default)(Component) + '.'), 'You can only override one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

               false ? (0, _warning2.default)(!classesProp[key] || typeof classesProp[key] === 'string', ['Material-UI: the key `' + key + '` ' + ('provided to the classes property is not valid for ' + (0, _getDisplayName2.default)(Component) + '.'), 'You need to provide a non empty string instead of: ' + classesProp[key] + '.'].join('\n')) : void 0;

              if (classesProp[key]) {
                accumulator[key] = renderedClasses[key] + ' ' + classesProp[key];
              }

              return accumulator;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          var more = {};

          if (withTheme) {
            more.theme = this.theme;
          }

          return _react2.default.createElement(Component, (0, _extends3.default)({ classes: classes }, more, other, { ref: innerRef }));
        }
      }]);
      return WithStyles;
    }(_react2.default.Component);

    WithStyles.propTypes =  false ? {
      classes: _propTypes2.default.object,

      innerRef: _propTypes2.default.func
    } : {};

    WithStyles.contextTypes = (0, _extends3.default)({
      muiThemeProviderOptions: _propTypes2.default.object
    }, _contextTypes2.default, listenToTheme ? _themeListener2.default.contextTypes : {});

    if (false) {
      WithStyles.displayName = (0, _wrapDisplayName2.default)(Component, 'WithStyles');
    }

    (0, _hoistNonReactStatics2.default)(WithStyles, Component);

    if (false) {
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};

exports.default = withStyles;

/***/ }),

/***/ "uvMU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "v3CT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__("zAZ2");

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__("rmh+");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  _createClass(StyleRule, [{
    key: 'prop',

    value: function prop(name, value) {
      if (value === undefined) return this.style[name];

      if (this.style[name] === value) return this;

      value = this.options.jss.plugins.onChangeValue(value, name, this);

      var isEmpty = value == null || value === false;
      var isDefined = name in this.style;

      if (isEmpty && !isDefined) return this;

      var remove = isEmpty && isDefined;

      if (remove) delete this.style[name];else this.style[name] = value;

      if (this.renderable) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
      }
      return this;
    }

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setProperty(renderable, prop, json[prop]);
      }return this;
    }

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;

      this.selectorText = selector;

      if (!this.renderable) return;

      var hasChanged = this.renderer.setSelector(this.renderable, selector);

      if (!hasChanged && this.renderable) {
        var renderable = this.renderer.replaceRule(this.renderable, this);
        if (renderable) this.renderable = renderable;
      }
    },

    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),

/***/ "vQxc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

exports.default = jssNested;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

function jssNested() {
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';

        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector);if (!replaceRef) replaceRef = getReplaceRef(container);selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        container.addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "vSO4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__("i1Q6");
var core = __webpack_require__("zKeE");
var ctx = __webpack_require__("3zRh");
var hide = __webpack_require__("akPY");
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;

    out = own ? target[key] : source[key];

    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key] : IS_BIND && own ? ctx(out, global) : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;

    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;

      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};

$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),

/***/ "vWq+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = undefined;

var _extends2 = __webpack_require__("T4f3");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("Xos8");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = __webpack_require__("zCAL");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = __webpack_require__("eW0v");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("9qb7");

var _classnames2 = _interopRequireDefault(_classnames);

var _withStyles = __webpack_require__("utiW");

var _withStyles2 = _interopRequireDefault(_withStyles);

var _helpers = __webpack_require__("L1YQ");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var styles = exports.styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      nativeColor = props.nativeColor,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'color', 'nativeColor', 'titleAccess', 'viewBox']);

  var className = (0, _classnames2.default)(classes.root, (0, _defineProperty3.default)({}, classes['color' + (0, _helpers.capitalize)(color)], color !== 'inherit'), classNameProp);

  return _react2.default.createElement('svg', (0, _extends3.default)({
    className: className,
    focusable: 'false',
    viewBox: viewBox,
    color: nativeColor,
    'aria-hidden': titleAccess ? 'false' : 'true'
  }, other), titleAccess ? _react2.default.createElement('title', null, titleAccess) : null, children);
}

SvgIcon.propTypes =  false ? {
  children: _propTypes2.default.node.isRequired,

  classes: _propTypes2.default.object.isRequired,

  className: _propTypes2.default.string,

  color: _propTypes2.default.oneOf(['action', 'disabled', 'error', 'inherit', 'primary', 'secondary']),

  nativeColor: _propTypes2.default.string,

  titleAccess: _propTypes2.default.string,

  viewBox: _propTypes2.default.string
} : {};

SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};

SvgIcon.muiName = 'SvgIcon';

exports.default = (0, _withStyles2.default)(styles, { name: 'MuiSvgIcon' })(SvgIcon);

/***/ }),

/***/ "vcHl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("YD0x");
module.exports = __webpack_require__("zKeE").Object.assign;

/***/ }),

/***/ "wLcK":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),

/***/ "wRU+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1;
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var emptyFunction = __webpack_require__("UQex");
var invariant = __webpack_require__("wRU+");
var ReactPropTypesSecret = __webpack_require__("Asjh");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "wcxQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),

/***/ "wjI/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__("QDke");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("393P");

var _prefix2 = _interopRequireDefault(_prefix);

var _camelize = __webpack_require__("xDSW");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

function supportedProperty(prop) {
  if (!el) return prop;

  if (cache[prop] != null) return cache[prop];

  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  } else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}

/***/ }),

/***/ "wppe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__("MIhM");

var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "wtMJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mapCacheClear = __webpack_require__("lBq7"),
    mapCacheDelete = __webpack_require__("cDyG"),
    mapCacheGet = __webpack_require__("G3gK"),
    mapCacheHas = __webpack_require__("85ue"),
    mapCacheSet = __webpack_require__("UY82");

function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "wwCT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var Schema = __webpack_require__("nYLM");

module.exports = new Schema({
  include: [__webpack_require__("ZUfC")]
});

/***/ }),

/***/ "x6MZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("ZHvQ");
var from = __webpack_require__("YLmZ");
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};

/***/ }),

/***/ "xBPe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__("cvfj");

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__("noYc");

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__("bKbX");

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__("gU5c");

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__("tOVe");

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

};
exports['default'] = Object.keys(classes).map(function (key) {
  var re = new RegExp('^' + key);
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new classes[key](name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});

/***/ }),

/***/ "xDQX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var assocIndexOf = __webpack_require__("yEjJ");

function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "xDSW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/***/ }),

/***/ "xwD+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),

/***/ "yEjJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var eq = __webpack_require__("LIpy");

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "yG2a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Type = __webpack_require__("XcPh");

function resolveYamlMerge(data) {
  return data === '<<' || data === null;
}

module.exports = new Type('tag:yaml.org,2002:merge', {
  kind: 'scalar',
  resolve: resolveYamlMerge
});

/***/ }),

/***/ "yNJ0":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),

/***/ "yOG5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__("vSO4");

$export($export.S, 'Object', { create: __webpack_require__("TNJq") });

/***/ }),

/***/ "yS17":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),

/***/ "ycyv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getKeys = __webpack_require__("knrM");
var gOPS = __webpack_require__("Ocr3");
var pIE = __webpack_require__("z7R8");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),

/***/ "yeEC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__("cjsw"), __esModule: true };

/***/ }),

/***/ "yeiR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var castPath = __webpack_require__("Tnr5"),
    toKey = __webpack_require__("RQ0L");

function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "yfX1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var root = __webpack_require__("MIhM");

var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "ytkY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__("6KFX");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ "z7R8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),

/***/ "zAZ2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__("rmh+");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;

  indent++;

  if (fallbacks) {
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    } else {
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  if (!result && !options.allowEmpty) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}

/***/ }),

/***/ "zCAL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

/***/ }),

/***/ "zCYT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var baseIsEqual = __webpack_require__("iKxp"),
    get = __webpack_require__("5U5Y"),
    hasIn = __webpack_require__("3Q8v"),
    isKey = __webpack_require__("2ibm"),
    isStrictComparable = __webpack_require__("E5qx"),
    matchesStrictComparable = __webpack_require__("sruz"),
    toKey = __webpack_require__("RQ0L");

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),

/***/ "zKeE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core;

/***/ }),

/***/ "zotD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__("BxvP");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map