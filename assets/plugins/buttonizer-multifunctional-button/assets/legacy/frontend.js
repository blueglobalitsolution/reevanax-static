/*!
 * 
 *         This file is part of the Buttonizer plugin that is downloadable through Wordpress.org,
 *         please do not redistribute this plugin or the files without any written permission of the author.
 *
 *         If you need support:
 *         - pleae create a ticket: https://community.buttonizer.pro/tickets
 *         - or visit our community website: https://community.buttonizer.pro/
 *
 *         Buttonizer is Freemium software. The free version (build) does not contain premium functionality.
 *
 *         (C) 2017-2025 Buttonizer buttonizer-legacy - 2.9.3
 *
 */
/*!
 * 
 *         This file is part of the Buttonizer plugin that is downloadable through Wordpress.org,
 *         please do not redistribute this plugin or the files without any written permission of the author.
 *
 *         If you need support:
 *         - pleae create a ticket: https://community.buttonizer.pro/tickets
 *         - or visit our community website: https://community.buttonizer.pro/
 *
 *         Buttonizer is Freemium software. The free version (build) does not contain premium functionality.
 *
 *         (C) 2017-2025 Buttonizer buttonizer-legacy - 2.9.3
 *
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 65011:
/***/ (function(module) {

/* global module */
module.exports = {
  group: {},
  button: {}
};

/***/ }),

/***/ 98588:
/***/ (function(module) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global module */
var button = {
  group_size: 56,
  button_size: 56,
  box_shadow_enabled: [false],
  label_box_shadow_enabled: [false],
  border_radius: ["0px"],
  label_spacing: 0,
  label_border_radius: ["0px"]
};
module.exports = {
  button: _objectSpread({}, button),
  menu_button: _objectSpread({}, button),
  group: _objectSpread(_objectSpread({}, button), {}, {
    label_same_width: true,
    label_same_height: true,
    space: 0
  })
};

/***/ }),

/***/ 78867:
/***/ (function(module) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* global module */
var button = {
  box_shadow_enabled: [false],
  label_box_shadow_enabled: [false],
  border_radius: ["0px"],
  label_spacing: 0,
  label_border_radius: ["0px"]
};
module.exports = {
  button: _objectSpread({}, button),
  menu_button: _objectSpread({}, button),
  group: _objectSpread(_objectSpread({}, button), {}, {
    group_size: 56,
    button_size: 56,
    show_label_desktop: "hover",
    show_label_mobile: "hide",
    label_same_height: true,
    space: 0
  })
};

/***/ }),

/***/ 11571:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* global module, require */
var Default = __webpack_require__(65011);

var Square = __webpack_require__(78867);

var Rectangle = __webpack_require__(98588);
/* webpack-strip-block:removed */


module.exports = {
  "default": Default,
  square: Square,
  rectangle: Rectangle
  /* webpack-strip-block:removed */

};

/***/ }),

/***/ 42226:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* global module, require */
var defaults = __webpack_require__(46314);

var menuStyles = __webpack_require__(11571);

var merge = __webpack_require__(82492);

module.exports = {
  get button() {
    var result = {};
    Object.entries(defaults.button).map(function (key) {
      merge(result, key[1]);
    });
    return result; // return merge({}, defaults.button.general, defaults.button.styling);
  },

  get group() {
    var result = {};
    Object.entries(merge({}, defaults.button, defaults.group)).map(function (key) {
      merge(result, key[1]);
    });
    return result;
  },

  get menu_button() {
    var result = {};
    Object.entries(merge({}, defaults.button, defaults.menu_button)).map(function (key) {
      merge(result, key[1]);
    });
    return result;
  },

  get formatted() {
    var result = {};
    Object.entries(merge({}, defaults.button, defaults.group)).map(function (key) {
      merge(result, key[1]);
    });
    return Object.entries(result).filter(function (entry) {
      return Array.isArray(entry[1]);
    }).map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];

      return key;
    });
  },

  get menuStyle() {
    return menuStyles;
  }

};

/***/ }),

/***/ 25730:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(58612);

var $apply = __webpack_require__(1768);
var $call = __webpack_require__(68928);
var $reflectApply = __webpack_require__(59770);

/** @type {import('./actualApply')} */
module.exports = $reflectApply || bind.call($call, $apply);


/***/ }),

/***/ 1768:
/***/ (function(module) {

"use strict";


/** @type {import('./functionApply')} */
module.exports = Function.prototype.apply;


/***/ }),

/***/ 68928:
/***/ (function(module) {

"use strict";


/** @type {import('./functionCall')} */
module.exports = Function.prototype.call;


/***/ }),

/***/ 40319:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(58612);
var $TypeError = __webpack_require__(14453);

var $call = __webpack_require__(68928);
var $actualApply = __webpack_require__(25730);

/** @type {(args: [Function, thisArg?: unknown, ...args: unknown[]]) => Function} TODO FIXME, find a way to use import('.') */
module.exports = function callBindBasic(args) {
	if (args.length < 1 || typeof args[0] !== 'function') {
		throw new $TypeError('a function is required');
	}
	return $actualApply(bind, $call, args);
};


/***/ }),

/***/ 59770:
/***/ (function(module) {

"use strict";


/** @type {import('./reflectApply')} */
module.exports = typeof Reflect !== 'undefined' && Reflect && Reflect.apply;


/***/ }),

/***/ 21924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(40210);

var callBind = __webpack_require__(55559);

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ 55559:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(58612);
var GetIntrinsic = __webpack_require__(40210);

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ 26905:
/***/ (function(module) {

!function(t,n){ true?module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}:0}(this);
//# sourceMappingURL=dlv.umd.js.map


/***/ }),

/***/ 96504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var callBind = __webpack_require__(40319);
var gOPD = __webpack_require__(27296);

var hasProtoAccessor;
try {
	// eslint-disable-next-line no-extra-parens, no-proto
	hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */ ([]).__proto__ === Array.prototype;
} catch (e) {
	if (!e || typeof e !== 'object' || !('code' in e) || e.code !== 'ERR_PROTO_ACCESS') {
		throw e;
	}
}

// eslint-disable-next-line no-extra-parens
var desc = !!hasProtoAccessor && gOPD && gOPD(Object.prototype, /** @type {keyof typeof Object.prototype} */ ('__proto__'));

var $Object = Object;
var $getPrototypeOf = $Object.getPrototypeOf;

/** @type {import('./get')} */
module.exports = desc && typeof desc.get === 'function'
	? callBind([desc.get])
	: typeof $getPrototypeOf === 'function'
		? /** @type {import('./get')} */ function getDunder(value) {
			// eslint-disable-next-line eqeqeq
			return $getPrototypeOf(value == null ? value : $Object(value));
		}
		: false;


/***/ }),

/***/ 24429:
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
var $defineProperty = Object.defineProperty || false;
if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = false;
	}
}

module.exports = $defineProperty;


/***/ }),

/***/ 53981:
/***/ (function(module) {

"use strict";


/** @type {import('./eval')} */
module.exports = EvalError;


/***/ }),

/***/ 81648:
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Error;


/***/ }),

/***/ 24726:
/***/ (function(module) {

"use strict";


/** @type {import('./range')} */
module.exports = RangeError;


/***/ }),

/***/ 26712:
/***/ (function(module) {

"use strict";


/** @type {import('./ref')} */
module.exports = ReferenceError;


/***/ }),

/***/ 33464:
/***/ (function(module) {

"use strict";


/** @type {import('./syntax')} */
module.exports = SyntaxError;


/***/ }),

/***/ 14453:
/***/ (function(module) {

"use strict";


/** @type {import('./type')} */
module.exports = TypeError;


/***/ }),

/***/ 43915:
/***/ (function(module) {

"use strict";


/** @type {import('./uri')} */
module.exports = URIError;


/***/ }),

/***/ 68892:
/***/ (function(module) {

"use strict";


/** @type {import('.')} */
module.exports = Object;


/***/ }),

/***/ 17648:
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var toStr = Object.prototype.toString;
var max = Math.max;
var funcType = '[object Function]';

var concatty = function concatty(a, b) {
    var arr = [];

    for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
    }
    for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
    }

    return arr;
};

var slicy = function slicy(arrLike, offset) {
    var arr = [];
    for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
    }
    return arr;
};

var joiny = function (arr, joiner) {
    var str = '';
    for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
            str += joiner;
        }
    }
    return str;
};

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slicy(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                concatty(args, arguments)
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        }
        return target.apply(
            that,
            concatty(args, arguments)
        );

    };

    var boundLength = max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = '$' + i;
    }

    bound = Function('binder', 'return function (' + joiny(boundArgs, ',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ 58612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(17648);

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 40210:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $Object = __webpack_require__(68892);

var $Error = __webpack_require__(81648);
var $EvalError = __webpack_require__(53981);
var $RangeError = __webpack_require__(24726);
var $ReferenceError = __webpack_require__(26712);
var $SyntaxError = __webpack_require__(33464);
var $TypeError = __webpack_require__(14453);
var $URIError = __webpack_require__(43915);

var abs = __webpack_require__(59738);
var floor = __webpack_require__(76329);
var max = __webpack_require__(52264);
var min = __webpack_require__(55730);
var pow = __webpack_require__(20707);
var round = __webpack_require__(63862);
var sign = __webpack_require__(29550);

var $Function = Function;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = __webpack_require__(27296);
var $defineProperty = __webpack_require__(24429);

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(41405)();

var getProto = __webpack_require__(81618);
var $ObjectGPO = __webpack_require__(68899);
var $ReflectGPO = __webpack_require__(10443);

var $apply = __webpack_require__(1768);
var $call = __webpack_require__(68928);

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	__proto__: null,
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,
	'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': $Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': $EvalError,
	'%Float16Array%': typeof Float16Array === 'undefined' ? undefined : Float16Array,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': $Object,
	'%Object.getOwnPropertyDescriptor%': $gOPD,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': $RangeError,
	'%ReferenceError%': $ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': $URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,

	'%Function.prototype.call%': $call,
	'%Function.prototype.apply%': $apply,
	'%Object.defineProperty%': $defineProperty,
	'%Object.getPrototypeOf%': $ObjectGPO,
	'%Math.abs%': abs,
	'%Math.floor%': floor,
	'%Math.max%': max,
	'%Math.min%': min,
	'%Math.pow%': pow,
	'%Math.round%': round,
	'%Math.sign%': sign,
	'%Reflect.getPrototypeOf%': $ReflectGPO
};

if (getProto) {
	try {
		null.error; // eslint-disable-line no-unused-expressions
	} catch (e) {
		// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
		var errorProto = getProto(getProto(e));
		INTRINSICS['%Error.prototype%'] = errorProto;
	}
}

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen && getProto) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	__proto__: null,
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(58612);
var hasOwn = __webpack_require__(48824);
var $concat = bind.call($call, Array.prototype.concat);
var $spliceApply = bind.call($apply, Array.prototype.splice);
var $replace = bind.call($call, String.prototype.replace);
var $strSlice = bind.call($call, String.prototype.slice);
var $exec = bind.call($call, RegExp.prototype.exec);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	if ($exec(/^%?[^%]*%?$/, name) === null) {
		throw new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');
	}
	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ 68899:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $Object = __webpack_require__(68892);

/** @type {import('./Object.getPrototypeOf')} */
module.exports = $Object.getPrototypeOf || null;


/***/ }),

/***/ 10443:
/***/ (function(module) {

"use strict";


/** @type {import('./Reflect.getPrototypeOf')} */
module.exports = (typeof Reflect !== 'undefined' && Reflect.getPrototypeOf) || null;


/***/ }),

/***/ 81618:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var reflectGetProto = __webpack_require__(10443);
var originalGetProto = __webpack_require__(68899);

var getDunderProto = __webpack_require__(96504);

/** @type {import('.')} */
module.exports = reflectGetProto
	? function getProto(O) {
		// @ts-expect-error TS can't narrow inside a closure, for some reason
		return reflectGetProto(O);
	}
	: originalGetProto
		? function getProto(O) {
			if (!O || (typeof O !== 'object' && typeof O !== 'function')) {
				throw new TypeError('getProto: not an object');
			}
			// @ts-expect-error TS can't narrow inside a closure, for some reason
			return originalGetProto(O);
		}
		: getDunderProto
			? function getProto(O) {
				// @ts-expect-error TS can't narrow inside a closure, for some reason
				return getDunderProto(O);
			}
			: null;


/***/ }),

/***/ 40690:
/***/ (function(module) {

"use strict";


/** @type {import('./gOPD')} */
module.exports = Object.getOwnPropertyDescriptor;


/***/ }),

/***/ 27296:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/** @type {import('.')} */
var $gOPD = __webpack_require__(40690);

if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ 49948:
/***/ (function(__unused_webpack_module, exports) {

// Copyright (c) 2014 Rafael Caricio. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var GradientParser = {};

GradientParser.parse = (function() {

  var tokens = {
    linearGradient: /^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,
    repeatingLinearGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,
    radialGradient: /^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,
    repeatingRadialGradient: /^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,
    sideOrCorner: /^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,
    extentKeywords: /^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,
    positionKeywords: /^(left|center|right|top|bottom)/i,
    pixelValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,
    percentageValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,
    emValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,
    angleValue: /^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,
    startCall: /^\(/,
    endCall: /^\)/,
    comma: /^,/,
    hexColor: /^\#([0-9a-fA-F]+)/,
    literalColor: /^([a-zA-Z]+)/,
    rgbColor: /^rgb/i,
    rgbaColor: /^rgba/i,
    number: /^(([0-9]*\.[0-9]+)|([0-9]+\.?))/
  };

  var input = '';

  function error(msg) {
    var err = new Error(input + ': ' + msg);
    err.source = input;
    throw err;
  }

  function getAST() {
    var ast = matchListDefinitions();

    if (input.length > 0) {
      error('Invalid input not EOF');
    }

    return ast;
  }

  function matchListDefinitions() {
    return matchListing(matchDefinition);
  }

  function matchDefinition() {
    return matchGradient(
            'linear-gradient',
            tokens.linearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'repeating-linear-gradient',
            tokens.repeatingLinearGradient,
            matchLinearOrientation) ||

          matchGradient(
            'radial-gradient',
            tokens.radialGradient,
            matchListRadialOrientations) ||

          matchGradient(
            'repeating-radial-gradient',
            tokens.repeatingRadialGradient,
            matchListRadialOrientations);
  }

  function matchGradient(gradientType, pattern, orientationMatcher) {
    return matchCall(pattern, function(captures) {

      var orientation = orientationMatcher();
      if (orientation) {
        if (!scan(tokens.comma)) {
          error('Missing comma before color stops');
        }
      }

      return {
        type: gradientType,
        orientation: orientation,
        colorStops: matchListing(matchColorStop)
      };
    });
  }

  function matchCall(pattern, callback) {
    var captures = scan(pattern);

    if (captures) {
      if (!scan(tokens.startCall)) {
        error('Missing (');
      }

      result = callback(captures);

      if (!scan(tokens.endCall)) {
        error('Missing )');
      }

      return result;
    }
  }

  function matchLinearOrientation() {
    return matchSideOrCorner() ||
      matchAngle();
  }

  function matchSideOrCorner() {
    return match('directional', tokens.sideOrCorner, 1);
  }

  function matchAngle() {
    return match('angular', tokens.angleValue, 1);
  }

  function matchListRadialOrientations() {
    var radialOrientations,
        radialOrientation = matchRadialOrientation(),
        lookaheadCache;

    if (radialOrientation) {
      radialOrientations = [];
      radialOrientations.push(radialOrientation);

      lookaheadCache = input;
      if (scan(tokens.comma)) {
        radialOrientation = matchRadialOrientation();
        if (radialOrientation) {
          radialOrientations.push(radialOrientation);
        } else {
          input = lookaheadCache;
        }
      }
    }

    return radialOrientations;
  }

  function matchRadialOrientation() {
    var radialType = matchCircle() ||
      matchEllipse();

    if (radialType) {
      radialType.at = matchAtPosition();
    } else {
      var defaultPosition = matchPositioning();
      if (defaultPosition) {
        radialType = {
          type: 'default-radial',
          at: defaultPosition
        };
      }
    }

    return radialType;
  }

  function matchCircle() {
    var circle = match('shape', /^(circle)/i, 0);

    if (circle) {
      circle.style = matchLength() || matchExtentKeyword();
    }

    return circle;
  }

  function matchEllipse() {
    var ellipse = match('shape', /^(ellipse)/i, 0);

    if (ellipse) {
      ellipse.style =  matchDistance() || matchExtentKeyword();
    }

    return ellipse;
  }

  function matchExtentKeyword() {
    return match('extent-keyword', tokens.extentKeywords, 1);
  }

  function matchAtPosition() {
    if (match('position', /^at/, 0)) {
      var positioning = matchPositioning();

      if (!positioning) {
        error('Missing positioning value');
      }

      return positioning;
    }
  }

  function matchPositioning() {
    var location = matchCoordinates();

    if (location.x || location.y) {
      return {
        type: 'position',
        value: location
      };
    }
  }

  function matchCoordinates() {
    return {
      x: matchDistance(),
      y: matchDistance()
    };
  }

  function matchListing(matcher) {
    var captures = matcher(),
      result = [];

    if (captures) {
      result.push(captures);
      while (scan(tokens.comma)) {
        captures = matcher();
        if (captures) {
          result.push(captures);
        } else {
          error('One extra comma');
        }
      }
    }

    return result;
  }

  function matchColorStop() {
    var color = matchColor();

    if (!color) {
      error('Expected color definition');
    }

    color.length = matchDistance();
    return color;
  }

  function matchColor() {
    return matchHexColor() ||
      matchRGBAColor() ||
      matchRGBColor() ||
      matchLiteralColor();
  }

  function matchLiteralColor() {
    return match('literal', tokens.literalColor, 0);
  }

  function matchHexColor() {
    return match('hex', tokens.hexColor, 1);
  }

  function matchRGBColor() {
    return matchCall(tokens.rgbColor, function() {
      return  {
        type: 'rgb',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchRGBAColor() {
    return matchCall(tokens.rgbaColor, function() {
      return  {
        type: 'rgba',
        value: matchListing(matchNumber)
      };
    });
  }

  function matchNumber() {
    return scan(tokens.number)[1];
  }

  function matchDistance() {
    return match('%', tokens.percentageValue, 1) ||
      matchPositionKeyword() ||
      matchLength();
  }

  function matchPositionKeyword() {
    return match('position-keyword', tokens.positionKeywords, 1);
  }

  function matchLength() {
    return match('px', tokens.pixelValue, 1) ||
      match('em', tokens.emValue, 1);
  }

  function match(type, pattern, captureIndex) {
    var captures = scan(pattern);
    if (captures) {
      return {
        type: type,
        value: captures[captureIndex]
      };
    }
  }

  function scan(regexp) {
    var captures,
        blankCaptures;

    blankCaptures = /^[\n\r\t\s]+/.exec(input);
    if (blankCaptures) {
        consume(blankCaptures[0].length);
    }

    captures = regexp.exec(input);
    if (captures) {
        consume(captures[0].length);
    }

    return captures;
  }

  function consume(size) {
    input = input.substr(size);
  }

  return function(code) {
    input = code.toString();
    return getAST();
  };
})();

exports.parse = (GradientParser || {}).parse;


/***/ }),

/***/ 41405:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(55419);

/** @type {import('.')} */
module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ 55419:
/***/ (function(module) {

"use strict";


/** @type {import('./shams')} */
/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	/** @type {{ [k in symbol]?: unknown }} */
	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (var _ in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		// eslint-disable-next-line no-extra-parens
		var descriptor = /** @type {PropertyDescriptor} */ (Object.getOwnPropertyDescriptor(obj, sym));
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ 48824:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var call = Function.prototype.call;
var $hasOwn = Object.prototype.hasOwnProperty;
var bind = __webpack_require__(58612);

/** @type {import('.')} */
module.exports = bind.call(call, $hasOwn);


/***/ }),

/***/ 49674:
/***/ (function(module) {

/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

var selector = ':not(#\\20)';
var defaultOptions = { repeat: 3 };

module.exports = function increaseSpecificity(userOptions) {
  var options = Object.assign({}, defaultOptions, userOptions);
  var prefix = Array(options.repeat + 1).join(selector);

  function onProcessRule(rule, sheet) {
    var parent = rule.options.parent;

    if (
      sheet.options.increaseSpecificity === false ||
      rule.type !== 'style' ||
      (parent && parent.type === 'keyframes')
    ) return;

    rule.selectorText = prefix + rule.selectorText;
  }

  return { onProcessRule: onProcessRule };
};


/***/ }),

/***/ 18552:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852),
    root = __webpack_require__(55639);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 1989:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hashClear = __webpack_require__(51789),
    hashDelete = __webpack_require__(80401),
    hashGet = __webpack_require__(57667),
    hashHas = __webpack_require__(21327),
    hashSet = __webpack_require__(81866);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 38407:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var listCacheClear = __webpack_require__(27040),
    listCacheDelete = __webpack_require__(14125),
    listCacheGet = __webpack_require__(82117),
    listCacheHas = __webpack_require__(67518),
    listCacheSet = __webpack_require__(54705);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 57071:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852),
    root = __webpack_require__(55639);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 83369:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(24785),
    mapCacheDelete = __webpack_require__(11285),
    mapCacheGet = __webpack_require__(96000),
    mapCacheHas = __webpack_require__(49916),
    mapCacheSet = __webpack_require__(95265);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 53818:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852),
    root = __webpack_require__(55639);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 58525:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852),
    root = __webpack_require__(55639);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 88668:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(83369),
    setCacheAdd = __webpack_require__(90619),
    setCacheHas = __webpack_require__(72385);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 46384:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(38407),
    stackClear = __webpack_require__(37465),
    stackDelete = __webpack_require__(63779),
    stackGet = __webpack_require__(67599),
    stackHas = __webpack_require__(44758),
    stackSet = __webpack_require__(34309);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 62705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 11149:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 70577:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852),
    root = __webpack_require__(55639);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 96874:
/***/ (function(module) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 77412:
/***/ (function(module) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 34963:
/***/ (function(module) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
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

/***/ 14636:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseTimes = __webpack_require__(22545),
    isArguments = __webpack_require__(35694),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(44144),
    isIndex = __webpack_require__(65776),
    isTypedArray = __webpack_require__(36719);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 29932:
/***/ (function(module) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
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

/***/ 62488:
/***/ (function(module) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
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

/***/ 82908:
/***/ (function(module) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
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

/***/ 86556:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(89465),
    eq = __webpack_require__(77813);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 34865:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(89465),
    eq = __webpack_require__(77813);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 18470:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(77813);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
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

/***/ 44037:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(98363),
    keys = __webpack_require__(3674);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 63886:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(98363),
    keysIn = __webpack_require__(81704);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 89465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var defineProperty = __webpack_require__(38777);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 85990:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(46384),
    arrayEach = __webpack_require__(77412),
    assignValue = __webpack_require__(34865),
    baseAssign = __webpack_require__(44037),
    baseAssignIn = __webpack_require__(63886),
    cloneBuffer = __webpack_require__(64626),
    copyArray = __webpack_require__(278),
    copySymbols = __webpack_require__(18805),
    copySymbolsIn = __webpack_require__(1911),
    getAllKeys = __webpack_require__(58234),
    getAllKeysIn = __webpack_require__(46904),
    getTag = __webpack_require__(64160),
    initCloneArray = __webpack_require__(43824),
    initCloneByTag = __webpack_require__(29148),
    initCloneObject = __webpack_require__(38517),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(44144),
    isMap = __webpack_require__(56688),
    isObject = __webpack_require__(13218),
    isSet = __webpack_require__(72928),
    keys = __webpack_require__(3674),
    keysIn = __webpack_require__(81704);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
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

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 3118:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(13218);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 41848:
/***/ (function(module) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 21078:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(62488),
    isFlattenable = __webpack_require__(37285);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 28483:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var createBaseFor = __webpack_require__(25063);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 97786:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(71811),
    toKey = __webpack_require__(40327);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 68866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(62488),
    isArray = __webpack_require__(1469);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 44239:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705),
    getRawTag = __webpack_require__(89607),
    objectToString = __webpack_require__(2333);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 13:
/***/ (function(module) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 42118:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(41848),
    baseIsNaN = __webpack_require__(62722),
    strictIndexOf = __webpack_require__(42351);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 74221:
/***/ (function(module) {

/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOfWith(array, value, fromIndex, comparator) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (comparator(array[index], value)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseIndexOfWith;


/***/ }),

/***/ 9454:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 90939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(2492),
    isObjectLike = __webpack_require__(37005);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 2492:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(46384),
    equalArrays = __webpack_require__(67114),
    equalByTag = __webpack_require__(18351),
    equalObjects = __webpack_require__(16096),
    getTag = __webpack_require__(64160),
    isArray = __webpack_require__(1469),
    isBuffer = __webpack_require__(44144),
    isTypedArray = __webpack_require__(36719);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
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
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 25588:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(64160),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 62722:
/***/ (function(module) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 28458:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(23560),
    isMasked = __webpack_require__(15346),
    isObject = __webpack_require__(13218),
    toSource = __webpack_require__(80346);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 29221:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getTag = __webpack_require__(64160),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 38749:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isLength = __webpack_require__(41780),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
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

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 280:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPrototype = __webpack_require__(25726),
    nativeKeys = __webpack_require__(86916);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
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

/***/ 10313:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isObject = __webpack_require__(13218),
    isPrototype = __webpack_require__(25726),
    nativeKeysIn = __webpack_require__(33498);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 42980:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Stack = __webpack_require__(46384),
    assignMergeValue = __webpack_require__(86556),
    baseFor = __webpack_require__(28483),
    baseMergeDeep = __webpack_require__(59783),
    isObject = __webpack_require__(13218),
    keysIn = __webpack_require__(81704),
    safeGet = __webpack_require__(36390);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 59783:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(86556),
    cloneBuffer = __webpack_require__(64626),
    cloneTypedArray = __webpack_require__(77133),
    copyArray = __webpack_require__(278),
    initCloneObject = __webpack_require__(38517),
    isArguments = __webpack_require__(35694),
    isArray = __webpack_require__(1469),
    isArrayLikeObject = __webpack_require__(29246),
    isBuffer = __webpack_require__(44144),
    isFunction = __webpack_require__(23560),
    isObject = __webpack_require__(13218),
    isPlainObject = __webpack_require__(68630),
    isTypedArray = __webpack_require__(36719),
    safeGet = __webpack_require__(36390),
    toPlainObject = __webpack_require__(59881);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 25970:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var basePickBy = __webpack_require__(63012),
    hasIn = __webpack_require__(79095);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, paths) {
  return basePickBy(object, paths, function(value, path) {
    return hasIn(object, path);
  });
}

module.exports = basePick;


/***/ }),

/***/ 63012:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(97786),
    baseSet = __webpack_require__(10611),
    castPath = __webpack_require__(71811);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = baseGet(object, path);

    if (predicate(value, path)) {
      baseSet(result, castPath(path, object), value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ }),

/***/ 65464:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932),
    baseIndexOf = __webpack_require__(42118),
    baseIndexOfWith = __webpack_require__(74221),
    baseUnary = __webpack_require__(7518),
    copyArray = __webpack_require__(278);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns `array`.
 */
function basePullAll(array, values, iteratee, comparator) {
  var indexOf = comparator ? baseIndexOfWith : baseIndexOf,
      index = -1,
      length = values.length,
      seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    var fromIndex = 0,
        value = values[index],
        computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}

module.exports = basePullAll;


/***/ }),

/***/ 5976:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var identity = __webpack_require__(6557),
    overRest = __webpack_require__(45357),
    setToString = __webpack_require__(30061);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 10611:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(34865),
    castPath = __webpack_require__(71811),
    isIndex = __webpack_require__(65776),
    isObject = __webpack_require__(13218),
    toKey = __webpack_require__(40327);

/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */
function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]),
        newValue = value;

    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      return object;
    }

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject(objValue)
          ? objValue
          : (isIndex(path[index + 1]) ? [] : {});
      }
    }
    assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

module.exports = baseSet;


/***/ }),

/***/ 56560:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var constant = __webpack_require__(75703),
    defineProperty = __webpack_require__(38777),
    identity = __webpack_require__(6557);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 14259:
/***/ (function(module) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 22545:
/***/ (function(module) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
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

/***/ 80531:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705),
    arrayMap = __webpack_require__(29932),
    isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 7518:
/***/ (function(module) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 57406:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(71811),
    last = __webpack_require__(10928),
    parent = __webpack_require__(40292),
    toKey = __webpack_require__(40327);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 74757:
/***/ (function(module) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 71811:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(1469),
    isKey = __webpack_require__(15403),
    stringToPath = __webpack_require__(55514),
    toString = __webpack_require__(79833);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 74318:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Uint8Array = __webpack_require__(11149);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 64626:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(55639);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 57157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(74318);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 93147:
/***/ (function(module) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 40419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 77133:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(74318);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 278:
/***/ (function(module) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 98363:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assignValue = __webpack_require__(34865),
    baseAssignValue = __webpack_require__(89465);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 18805:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(98363),
    getSymbols = __webpack_require__(99551);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 1911:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(98363),
    getSymbolsIn = __webpack_require__(51442);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 14429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var root = __webpack_require__(55639);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 21463:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseRest = __webpack_require__(5976),
    isIterateeCall = __webpack_require__(16612);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 25063:
/***/ (function(module) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 60696:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isPlainObject = __webpack_require__(68630);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 38777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 67114:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var SetCache = __webpack_require__(88668),
    arraySome = __webpack_require__(82908),
    cacheHas = __webpack_require__(74757);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
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

/***/ 18351:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705),
    Uint8Array = __webpack_require__(11149),
    eq = __webpack_require__(77813),
    equalArrays = __webpack_require__(67114),
    mapToArray = __webpack_require__(68776),
    setToArray = __webpack_require__(21814);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
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

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
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

/***/ 16096:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getAllKeys = __webpack_require__(58234);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
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
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
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
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 99021:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var flatten = __webpack_require__(85564),
    overRest = __webpack_require__(45357),
    setToString = __webpack_require__(30061);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 31957:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ 58234:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(68866),
    getSymbols = __webpack_require__(99551),
    keys = __webpack_require__(3674);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 46904:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(68866),
    getSymbolsIn = __webpack_require__(51442),
    keysIn = __webpack_require__(81704);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 45050:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isKeyable = __webpack_require__(37019);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 10852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsNative = __webpack_require__(28458),
    getValue = __webpack_require__(47801);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 85924:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(5569);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 89607:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
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

/***/ 99551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayFilter = __webpack_require__(34963),
    stubArray = __webpack_require__(70479);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 51442:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayPush = __webpack_require__(62488),
    getPrototype = __webpack_require__(85924),
    getSymbols = __webpack_require__(99551),
    stubArray = __webpack_require__(70479);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 64160:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DataView = __webpack_require__(18552),
    Map = __webpack_require__(57071),
    Promise = __webpack_require__(53818),
    Set = __webpack_require__(58525),
    WeakMap = __webpack_require__(70577),
    baseGetTag = __webpack_require__(44239),
    toSource = __webpack_require__(80346);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 47801:
/***/ (function(module) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 222:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var castPath = __webpack_require__(71811),
    isArguments = __webpack_require__(35694),
    isArray = __webpack_require__(1469),
    isIndex = __webpack_require__(65776),
    isLength = __webpack_require__(41780),
    toKey = __webpack_require__(40327);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
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
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 51789:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(94536);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 80401:
/***/ (function(module) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 57667:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(94536);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
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

/***/ 21327:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(94536);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 81866:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var nativeCreate = __webpack_require__(94536);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 43824:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 29148:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(74318),
    cloneDataView = __webpack_require__(57157),
    cloneRegExp = __webpack_require__(93147),
    cloneSymbol = __webpack_require__(40419),
    cloneTypedArray = __webpack_require__(77133);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

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

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 38517:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseCreate = __webpack_require__(3118),
    getPrototype = __webpack_require__(85924),
    isPrototype = __webpack_require__(25726);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 37285:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Symbol = __webpack_require__(62705),
    isArguments = __webpack_require__(35694),
    isArray = __webpack_require__(1469);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 65776:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 16612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var eq = __webpack_require__(77813),
    isArrayLike = __webpack_require__(98612),
    isIndex = __webpack_require__(65776),
    isObject = __webpack_require__(13218);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 15403:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArray = __webpack_require__(1469),
    isSymbol = __webpack_require__(33448);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 37019:
/***/ (function(module) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 15346:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var coreJsData = __webpack_require__(14429);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 25726:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 27040:
/***/ (function(module) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 14125:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18470);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
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

/***/ 82117:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18470);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 67518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18470);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 54705:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(18470);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
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

/***/ 24785:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var Hash = __webpack_require__(1989),
    ListCache = __webpack_require__(38407),
    Map = __webpack_require__(57071);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 11285:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(45050);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 96000:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(45050);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 49916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(45050);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 95265:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getMapData = __webpack_require__(45050);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 68776:
/***/ (function(module) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 24523:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoize = __webpack_require__(88306);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
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

/***/ 94536:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getNative = __webpack_require__(10852);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 86916:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var overArg = __webpack_require__(5569);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 33498:
/***/ (function(module) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 31167:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(31957);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 2333:
/***/ (function(module) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 5569:
/***/ (function(module) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 45357:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var apply = __webpack_require__(96874);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 40292:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGet = __webpack_require__(97786),
    baseSlice = __webpack_require__(14259);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 55639:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var freeGlobal = __webpack_require__(31957);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 36390:
/***/ (function(module) {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ 90619:
/***/ (function(module) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 72385:
/***/ (function(module) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 21814:
/***/ (function(module) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 30061:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseSetToString = __webpack_require__(56560),
    shortOut = __webpack_require__(21275);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 21275:
/***/ (function(module) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 37465:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(38407);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 63779:
/***/ (function(module) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 67599:
/***/ (function(module) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 44758:
/***/ (function(module) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 34309:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var ListCache = __webpack_require__(38407),
    Map = __webpack_require__(57071),
    MapCache = __webpack_require__(83369);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
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

/***/ 42351:
/***/ (function(module) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 55514:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(24523);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 40327:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isSymbol = __webpack_require__(33448);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 80346:
/***/ (function(module) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 75703:
/***/ (function(module) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 77813:
/***/ (function(module) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 85564:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseFlatten = __webpack_require__(21078);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 79095:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseHasIn = __webpack_require__(13),
    hasPath = __webpack_require__(222);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 6557:
/***/ (function(module) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 35694:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(9454),
    isObjectLike = __webpack_require__(37005);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1469:
/***/ (function(module) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 98612:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isFunction = __webpack_require__(23560),
    isLength = __webpack_require__(41780);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 29246:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isArrayLike = __webpack_require__(98612),
    isObjectLike = __webpack_require__(37005);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 44144:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(55639),
    stubFalse = __webpack_require__(95062);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 18446:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(90939);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),

/***/ 23560:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isObject = __webpack_require__(13218);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 41780:
/***/ (function(module) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 56688:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsMap = __webpack_require__(25588),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 13218:
/***/ (function(module) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 37005:
/***/ (function(module) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 68630:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    getPrototype = __webpack_require__(85924),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 72928:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsSet = __webpack_require__(29221),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 33448:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseGetTag = __webpack_require__(44239),
    isObjectLike = __webpack_require__(37005);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 36719:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(38749),
    baseUnary = __webpack_require__(7518),
    nodeUtil = __webpack_require__(31167);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 3674:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(14636),
    baseKeys = __webpack_require__(280),
    isArrayLike = __webpack_require__(98612);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 81704:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(14636),
    baseKeysIn = __webpack_require__(10313),
    isArrayLike = __webpack_require__(98612);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 10928:
/***/ (function(module) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 88306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var MapCache = __webpack_require__(83369);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
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
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 82492:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseMerge = __webpack_require__(42980),
    createAssigner = __webpack_require__(21463);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 57557:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayMap = __webpack_require__(29932),
    baseClone = __webpack_require__(85990),
    baseUnset = __webpack_require__(57406),
    castPath = __webpack_require__(71811),
    copyObject = __webpack_require__(98363),
    customOmitClone = __webpack_require__(60696),
    flatRest = __webpack_require__(99021),
    getAllKeysIn = __webpack_require__(46904);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 78718:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var basePick = __webpack_require__(25970),
    flatRest = __webpack_require__(99021);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, paths) {
  return object == null ? {} : basePick(object, paths);
});

module.exports = pick;


/***/ }),

/***/ 45604:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var basePullAll = __webpack_require__(65464);

/**
 * This method is like `_.pull` except that it accepts an array of values to remove.
 *
 * **Note:** Unlike `_.difference`, this method mutates `array`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Array} values The values to remove.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
function pullAll(array, values) {
  return (array && array.length && values && values.length)
    ? basePullAll(array, values)
    : array;
}

module.exports = pullAll;


/***/ }),

/***/ 70479:
/***/ (function(module) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 95062:
/***/ (function(module) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 59881:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var copyObject = __webpack_require__(98363),
    keysIn = __webpack_require__(81704);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 79833:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var baseToString = __webpack_require__(80531);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 59738:
/***/ (function(module) {

"use strict";


/** @type {import('./abs')} */
module.exports = Math.abs;


/***/ }),

/***/ 76329:
/***/ (function(module) {

"use strict";


/** @type {import('./floor')} */
module.exports = Math.floor;


/***/ }),

/***/ 43678:
/***/ (function(module) {

"use strict";


/** @type {import('./isNaN')} */
module.exports = Number.isNaN || function isNaN(a) {
	return a !== a;
};


/***/ }),

/***/ 52264:
/***/ (function(module) {

"use strict";


/** @type {import('./max')} */
module.exports = Math.max;


/***/ }),

/***/ 55730:
/***/ (function(module) {

"use strict";


/** @type {import('./min')} */
module.exports = Math.min;


/***/ }),

/***/ 20707:
/***/ (function(module) {

"use strict";


/** @type {import('./pow')} */
module.exports = Math.pow;


/***/ }),

/***/ 63862:
/***/ (function(module) {

"use strict";


/** @type {import('./round')} */
module.exports = Math.round;


/***/ }),

/***/ 29550:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var $isNaN = __webpack_require__(43678);

/** @type {import('./sign')} */
module.exports = function sign(number) {
	if ($isNaN(number) || number === 0) {
		return number;
	}
	return number < 0 ? -1 : +1;
};


/***/ }),

/***/ 70631:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(24654).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 55798:
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 80129:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(58261);
var parse = __webpack_require__(55235);
var formats = __webpack_require__(55798);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 55235:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(12769);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ 58261:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(37478);
var utils = __webpack_require__(12769);
var formats = __webpack_require__(55798);
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    if (sideChannel.has(object)) {
        throw new RangeError('Cyclic object value');
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = typeof key === 'object' && key.value !== undefined ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
            : prefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, true);
        var valueSideChannel = getSideChannel();
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ 12769:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(55798);

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 37478:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(40210);
var callBound = __webpack_require__(21924);
var inspect = __webpack_require__(70631);

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ 67121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ es; }
});

;// CONCATENATED MODULE: ./node_modules/symbol-observable/es/ponyfill.js
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

;// CONCATENATED MODULE: ./node_modules/symbol-observable/es/index.js
/* module decorator */ module = __webpack_require__.hmd(module);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof __webpack_require__.g !== 'undefined') {
  root = __webpack_require__.g;
} else if (true) {
  root = module;
} else {}

var result = symbolObservablePonyfill(root);
/* harmony default export */ var es = (result);


/***/ }),

/***/ 45327:
/***/ (function(module) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ 85217:
/***/ (function(module) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 71171:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var rng = __webpack_require__(85217);
var bytesToUuid = __webpack_require__(45327);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 10221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isFQDN;

var _assertString = _interopRequireDefault(__webpack_require__(65571));

var _merge = _interopRequireDefault(__webpack_require__(84808));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_numeric_tld: false,
  allow_wildcard: false
};

function isFQDN(str, options) {
  (0, _assertString.default)(str);
  options = (0, _merge.default)(options, default_fqdn_options);
  /* Remove the optional trailing dot before checking validity */

  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  /* Remove the optional wildcard before checking validity */


  if (options.allow_wildcard === true && str.indexOf('*.') === 0) {
    str = str.substring(2);
  }

  var parts = str.split('.');
  var tld = parts[parts.length - 1];

  if (options.require_tld) {
    // disallow fqdns without tld
    if (parts.length < 2) {
      return false;
    }

    if (!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    } // disallow spaces


    if (/\s/.test(tld)) {
      return false;
    }
  } // reject numeric TLDs


  if (!options.allow_numeric_tld && /^\d+$/.test(tld)) {
    return false;
  }

  return parts.every(function (part) {
    if (part.length > 63) {
      return false;
    }

    if (!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    } // disallow full-width chars


    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    } // disallow parts starting or ending with hyphen


    if (/^-|-$/.test(part)) {
      return false;
    }

    if (!options.allow_underscores && /_/.test(part)) {
      return false;
    }

    return true;
  });
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ 61028:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isIP;

var _assertString = _interopRequireDefault(__webpack_require__(65571));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
11.3.  Examples

   The following addresses

             fe80::1234 (on the 1st link of the node)
             ff02::5678 (on the 5th link of the node)
             ff08::9abc (on the 10th organization of the node)

   would be represented as follows:

             fe80::1234%1
             ff02::5678%5
             ff08::9abc%10

   (Here we assume a natural translation from a zone index to the
   <zone_id> part, where the Nth zone of any scope is translated into
   "N".)

   If we use interface names as <zone_id>, those addresses could also be
   represented as follows:

            fe80::1234%ne0
            ff02::5678%pvc1.3
            ff08::9abc%interface10

   where the interface "ne0" belongs to the 1st link, "pvc1.3" belongs
   to the 5th link, and "interface10" belongs to the 10th organization.
 * * */
var IPv4SegmentFormat = '(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])';
var IPv4AddressFormat = "(".concat(IPv4SegmentFormat, "[.]){3}").concat(IPv4SegmentFormat);
var IPv4AddressRegExp = new RegExp("^".concat(IPv4AddressFormat, "$"));
var IPv6SegmentFormat = '(?:[0-9a-fA-F]{1,4})';
var IPv6AddressRegExp = new RegExp('^(' + "(?:".concat(IPv6SegmentFormat, ":){7}(?:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){6}(?:").concat(IPv4AddressFormat, "|:").concat(IPv6SegmentFormat, "|:)|") + "(?:".concat(IPv6SegmentFormat, ":){5}(?::").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,2}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){4}(?:(:").concat(IPv6SegmentFormat, "){0,1}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,3}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){3}(?:(:").concat(IPv6SegmentFormat, "){0,2}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,4}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){2}(?:(:").concat(IPv6SegmentFormat, "){0,3}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,5}|:)|") + "(?:".concat(IPv6SegmentFormat, ":){1}(?:(:").concat(IPv6SegmentFormat, "){0,4}:").concat(IPv4AddressFormat, "|(:").concat(IPv6SegmentFormat, "){1,6}|:)|") + "(?::((?::".concat(IPv6SegmentFormat, "){0,5}:").concat(IPv4AddressFormat, "|(?::").concat(IPv6SegmentFormat, "){1,7}|:))") + ')(%[0-9a-zA-Z-.:]{1,})?$');

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  (0, _assertString.default)(str);
  version = String(version);

  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  }

  if (version === '4') {
    if (!IPv4AddressRegExp.test(str)) {
      return false;
    }

    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  }

  if (version === '6') {
    return !!IPv6AddressRegExp.test(str);
  }

  return false;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ 66823:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = isURL;

var _assertString = _interopRequireDefault(__webpack_require__(65571));

var _isFQDN = _interopRequireDefault(__webpack_require__(10221));

var _isIP = _interopRequireDefault(__webpack_require__(61028));

var _merge = _interopRequireDefault(__webpack_require__(84808));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
options for isURL method

require_protocol - if set as true isURL will return false if protocol is not present in the URL
require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
protocols - valid protocols can be modified with this option
require_host - if set as false isURL will not check if host is present in the URL
require_port - if set as true isURL will check if port is present in the URL
allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
validate_length - if set as false isURL will skip string length validation (IE maximum is 2083)

*/
var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_port: false,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false,
  allow_fragments: true,
  allow_query_components: true,
  validate_length: true
};
var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];

    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }

  return false;
}

function isURL(url, options) {
  (0, _assertString.default)(url);

  if (!url || /[\s<>]/.test(url)) {
    return false;
  }

  if (url.indexOf('mailto:') === 0) {
    return false;
  }

  options = (0, _merge.default)(options, default_url_options);

  if (options.validate_length && url.length >= 2083) {
    return false;
  }

  if (!options.allow_fragments && url.includes('#')) {
    return false;
  }

  if (!options.allow_query_components && (url.includes('?') || url.includes('&'))) {
    return false;
  }

  var protocol, auth, host, hostname, port, port_str, split, ipv6;
  split = url.split('#');
  url = split.shift();
  split = url.split('?');
  url = split.shift();
  split = url.split('://');

  if (split.length > 1) {
    protocol = split.shift().toLowerCase();

    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }

    split[0] = url.substr(2);
  }

  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');

  if (split.length > 1) {
    if (options.disallow_auth) {
      return false;
    }

    if (split[0] === '') {
      return false;
    }

    auth = split.shift();

    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }

    var _auth$split = auth.split(':'),
        _auth$split2 = _slicedToArray(_auth$split, 2),
        user = _auth$split2[0],
        password = _auth$split2[1];

    if (user === '' && password === '') {
      return false;
    }
  }

  hostname = split.join('@');
  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);

  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();

    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null && port_str.length > 0) {
    port = parseInt(port_str, 10);

    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  } else if (options.require_port) {
    return false;
  }

  if (options.host_whitelist) {
    return checkHost(host, options.host_whitelist);
  }

  if (!(0, _isIP.default)(host) && !(0, _isFQDN.default)(host, options) && (!ipv6 || !(0, _isIP.default)(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ 65571:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = assertString;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    var invalidType = _typeof(input);

    if (input === null) invalidType = 'null';else if (invalidType === 'object') invalidType = input.constructor.name;
    throw new TypeError("Expected a string but received a ".concat(invalidType));
  }
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ 84808:
/***/ (function(module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = merge;

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments.length > 1 ? arguments[1] : undefined;

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }

  return obj;
}

module.exports = exports.default;
module.exports.default = exports.default;

/***/ }),

/***/ 46314:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"button":{"general":{"show_mobile":true,"show_desktop":true,"label":"","action":"#","type":"url","messenger_lang":"en_US","action_new_tab":false},"styling":{"icon":["fas fa-home"],"icon_type":"icon","icon_image":[""],"icon_size":[20],"icon_image_size":[16],"background_is_image":[false],"background_image":[],"border_radius":["50%"],"background_color":["#2f7789","#f08419"],"icon_color":["#fff"],"icon_image_border_radius":[50],"label_background_color":["#4e4c4c"],"label_color":["#fff"],"label_border_radius":["3px"],"label_font_size":[12],"label_margin":["0px 0px 0px 0px"],"label_padding":["5px 15px 5px 15px"],"label_font_family":"","label_spacing":9,"horizontal_position_label":"auto","box_shadow":["0px 2px 6px 1px rgba(0, 0, 0, 0.20)","0px 5px 11px 1px rgba(0, 0, 0, 0.25)"],"box_shadow_enabled":[true],"label_box_shadow_enabled":[false],"label_box_shadow":["0px 0px 0px 0px rgba(0, 0, 0, 1)"]}},"group":{"general":{"horizontal":"right: 5%","vertical":"bottom: 5%","menu_style":"default"},"advanced":{"menu_animation":"none","menu_animation_delay":10,"menu_animation_repeat_count":0,"show_on_schedule_trigger":true,"show_on_rule_trigger":true,"advanced_timeout_once":true,"advanced_scroll_hide":false,"exit_intent_animation":"focused","exit_intent_trigger_amount":"once_page"},"styling":{"group_size":56,"button_size":42,"show_label_mobile":"always","show_label_desktop":"always","label_same_width":false,"label_same_height":false,"label_inside":false,"space":10}},"menu_button":{"general":{"name":"Menu button","type":"opengroup","menu_opening_animation":"default","start_opened":false,"close_on_click_outside":true,"close_on_click_inside":true,"open_on_mouseover":false,"close_on_mouseleave":true},"styling":{"icon":["fas fa-plus"],"icon_size":[25],"icon_image_size":[25],"space":0}}}');

/***/ }),

/***/ 24654:
/***/ (function() {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.hmd = function(module) {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: function() {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// NAMESPACE OBJECT: ./node_modules/axios/lib/platform/common/utils.js
var common_utils_namespaceObject = {};
__webpack_require__.r(common_utils_namespaceObject);
__webpack_require__.d(common_utils_namespaceObject, {
  "hasBrowserEnv": function() { return hasBrowserEnv; },
  "hasStandardBrowserEnv": function() { return hasStandardBrowserEnv; },
  "hasStandardBrowserWebWorkerEnv": function() { return hasStandardBrowserWebWorkerEnv; },
  "navigator": function() { return _navigator; },
  "origin": function() { return origin; }
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/bind.js


function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/utils.js




// utils is a library of generic helper functions non-specific to axios

const {toString: utils_toString} = Object.prototype;
const {getPrototypeOf} = Object;
const {iterator, toStringTag} = Symbol;

const kindOf = (cache => thing => {
    const str = utils_toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(Object.create(null));

const kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type
}

const typeOfTest = type => thing => typeof thing === type;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 *
 * @returns {boolean} True if value is an Array, otherwise false
 */
const {isArray} = Array;

/**
 * Determine if a value is undefined
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if the value is undefined, otherwise false
 */
const isUndefined = typeOfTest('undefined');

/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
const isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  let result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a String, otherwise false
 */
const isString = typeOfTest('string');

/**
 * Determine if a value is a Function
 *
 * @param {*} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
const isFunction = typeOfTest('function');

/**
 * Determine if a value is a Number
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Number, otherwise false
 */
const isNumber = typeOfTest('number');

/**
 * Determine if a value is an Object
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an Object, otherwise false
 */
const isObject = (thing) => thing !== null && typeof thing === 'object';

/**
 * Determine if a value is a Boolean
 *
 * @param {*} thing The value to test
 * @returns {boolean} True if value is a Boolean, otherwise false
 */
const isBoolean = thing => thing === true || thing === false;

/**
 * Determine if a value is a plain Object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a plain Object, otherwise false
 */
const isPlainObject = (val) => {
  if (kindOf(val) !== 'object') {
    return false;
  }

  const prototype = getPrototypeOf(val);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(toStringTag in val) && !(iterator in val);
}

/**
 * Determine if a value is a Date
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Date, otherwise false
 */
const isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Blob, otherwise false
 */
const isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a File, otherwise false
 */
const isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Stream
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Stream, otherwise false
 */
const isStream = (val) => isObject(val) && isFunction(val.pipe);

/**
 * Determine if a value is a FormData
 *
 * @param {*} thing The value to test
 *
 * @returns {boolean} True if value is an FormData, otherwise false
 */
const isFormData = (thing) => {
  let kind;
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) || (
      isFunction(thing.append) && (
        (kind = kindOf(thing)) === 'formdata' ||
        // detect form-data instance
        (kind === 'object' && isFunction(thing.toString) && thing.toString() === '[object FormData]')
      )
    )
  )
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
const isURLSearchParams = kindOfTest('URLSearchParams');

const [isReadableStream, isRequest, isResponse, isHeaders] = ['ReadableStream', 'Request', 'Response', 'Headers'].map(kindOfTest);

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 *
 * @returns {String} The String freed of excess whitespace
 */
const trim = (str) => str.trim ?
  str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}

const _global = (() => {
  /*eslint no-undef:0*/
  if (typeof globalThis !== "undefined") return globalThis;
  return typeof self !== "undefined" ? self : (typeof window !== 'undefined' ? window : global)
})();

const isContextDefined = (context) => !isUndefined(context) && context !== _global;

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  const {caseless} = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  }

  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 *
 * @param {Boolean} [allOwnKeys]
 * @returns {Object} The resulting value of object a
 */
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 *
 * @returns {string} content value without BOM
 */
const stripBOM = (content) => {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 *
 * @returns {void}
 */
const inherits = (constructor, superConstructor, props, descriptors) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, 'super', {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function|Boolean} [filter]
 * @param {Function} [propFilter]
 *
 * @returns {Object}
 */
const toFlatObject = (sourceObj, destObj, filter, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};

  destObj = destObj || {};
  // eslint-disable-next-line no-eq-null,eqeqeq
  if (sourceObj == null) return destObj;

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/**
 * Determines whether a string ends with the characters of a specified string
 *
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 *
 * @returns {boolean}
 */
const endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object or null if failed
 *
 * @param {*} [thing]
 *
 * @returns {?Array}
 */
const toArray = (thing) => {
  if (!thing) return null;
  if (isArray(thing)) return thing;
  let i = thing.length;
  if (!isNumber(i)) return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

/**
 * Checking if the Uint8Array exists and if it does, it returns a function that checks if the
 * thing passed in is an instance of Uint8Array
 *
 * @param {TypedArray}
 *
 * @returns {Array}
 */
// eslint-disable-next-line func-names
const isTypedArray = (TypedArray => {
  // eslint-disable-next-line func-names
  return thing => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && getPrototypeOf(Uint8Array));

/**
 * For each entry in the object, call the function with the key and value.
 *
 * @param {Object<any, any>} obj - The object to iterate over.
 * @param {Function} fn - The function to call for each entry.
 *
 * @returns {void}
 */
const forEachEntry = (obj, fn) => {
  const generator = obj && obj[iterator];

  const _iterator = generator.call(obj);

  let result;

  while ((result = _iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
}

/**
 * It takes a regular expression and a string, and returns an array of all the matches
 *
 * @param {string} regExp - The regular expression to match against.
 * @param {string} str - The string to search.
 *
 * @returns {Array<boolean>}
 */
const matchAll = (regExp, str) => {
  let matches;
  const arr = [];

  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }

  return arr;
}

/* Checking if the kindOfTest function returns true when passed an HTMLFormElement. */
const isHTMLForm = kindOfTest('HTMLFormElement');

const toCamelCase = str => {
  return str.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};

/* Creating a function that will check if an object has a property. */
const utils_hasOwnProperty = (({hasOwnProperty}) => (obj, prop) => hasOwnProperty.call(obj, prop))(Object.prototype);

/**
 * Determine if a value is a RegExp object
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a RegExp object, otherwise false
 */
const isRegExp = kindOfTest('RegExp');

const reduceDescriptors = (obj, reducer) => {
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};

  forEach(descriptors, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });

  Object.defineProperties(obj, reducedDescriptors);
}

/**
 * Makes all methods read-only
 * @param {Object} obj
 */

const freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    // skip restricted props in strict mode
    if (isFunction(obj) && ['arguments', 'caller', 'callee'].indexOf(name) !== -1) {
      return false;
    }

    const value = obj[name];

    if (!isFunction(value)) return;

    descriptor.enumerable = false;

    if ('writable' in descriptor) {
      descriptor.writable = false;
      return;
    }

    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error('Can not rewrite read-only method \'' + name + '\'');
      };
    }
  });
}

const toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};

  const define = (arr) => {
    arr.forEach(value => {
      obj[value] = true;
    });
  }

  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));

  return obj;
}

const noop = () => {}

const toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
}

/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[toStringTag] === 'FormData' && thing[iterator]);
}

const toJSONObject = (obj) => {
  const stack = new Array(10);

  const visit = (source, i) => {

    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }

      if(!('toJSON' in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};

        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });

        stack[i] = undefined;

        return target;
      }
    }

    return source;
  }

  return visit(obj, 0);
}

const isAsyncFn = kindOfTest('AsyncFunction');

const isThenable = (thing) =>
  thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);

// original code
// https://github.com/DigitalBrainJS/AxiosPromise/blob/16deab13710ec09779922131f3fa5954320f83ab/lib/utils.js#L11-L34

const _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }

  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({source, data}) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);

    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    }
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === 'function',
  isFunction(_global.postMessage)
);

const asap = typeof queueMicrotask !== 'undefined' ?
  queueMicrotask.bind(_global) : ( typeof process !== 'undefined' && process.nextTick || _setImmediate);

// *********************


const isIterable = (thing) => thing != null && isFunction(thing[iterator]);


/* harmony default export */ var utils = ({
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty: utils_hasOwnProperty,
  hasOwnProp: utils_hasOwnProperty, // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap,
  isIterable
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosError.js




/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});

const AxiosError_prototype = AxiosError.prototype;
const descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
// eslint-disable-next-line func-names
].forEach(code => {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(AxiosError_prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(AxiosError_prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  }, prop => {
    return prop !== 'isAxiosError';
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.cause = error;

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

/* harmony default export */ var core_AxiosError = (AxiosError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/null.js
// eslint-disable-next-line strict
/* harmony default export */ var helpers_null = (null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toFormData.js




// temporary hotfix to avoid circular references until AxiosURLSearchParams is refactored


/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */
function isVisitable(thing) {
  return utils.isPlainObject(thing) || utils.isArray(thing);
}

/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */
function removeBrackets(key) {
  return utils.endsWith(key, '[]') ? key.slice(0, -2) : key;
}

/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */
function renderKey(path, key, dots) {
  if (!path) return key;
  return path.concat(key).map(function each(token, i) {
    // eslint-disable-next-line no-param-reassign
    token = removeBrackets(token);
    return !dots && i ? '[' + token + ']' : token;
  }).join(dots ? '.' : '');
}

/**
 * If the array is an array and none of its elements are visitable, then it's a flat array.
 *
 * @param {Array<any>} arr - The array to check
 *
 * @returns {boolean}
 */
function isFlatArray(arr) {
  return utils.isArray(arr) && !arr.some(isVisitable);
}

const predicates = utils.toFlatObject(utils, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});

/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **/

/**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */
function toFormData(obj, formData, options) {
  if (!utils.isObject(obj)) {
    throw new TypeError('target must be an object');
  }

  // eslint-disable-next-line no-param-reassign
  formData = formData || new (helpers_null || FormData)();

  // eslint-disable-next-line no-param-reassign
  options = utils.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    // eslint-disable-next-line no-eq-null,eqeqeq
    return !utils.isUndefined(source[option]);
  });

  const metaTokens = options.metaTokens;
  // eslint-disable-next-line no-use-before-define
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== 'undefined' && Blob;
  const useBlob = _Blob && utils.isSpecCompliantForm(formData);

  if (!utils.isFunction(visitor)) {
    throw new TypeError('visitor must be a function');
  }

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isBoolean(value)) {
      return value.toString();
    }

    if (!useBlob && utils.isBlob(value)) {
      throw new core_AxiosError('Blob is not supported. Use a Buffer instead.');
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return useBlob && typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  /**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */
  function defaultVisitor(value, key, path) {
    let arr = value;

    if (value && !path && typeof value === 'object') {
      if (utils.endsWith(key, '{}')) {
        // eslint-disable-next-line no-param-reassign
        key = metaTokens ? key : key.slice(0, -2);
        // eslint-disable-next-line no-param-reassign
        value = JSON.stringify(value);
      } else if (
        (utils.isArray(value) && isFlatArray(value)) ||
        ((utils.isFileList(value) || utils.endsWith(key, '[]')) && (arr = utils.toArray(value))
        )) {
        // eslint-disable-next-line no-param-reassign
        key = removeBrackets(key);

        arr.forEach(function each(el, index) {
          !(utils.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : (indexes === null ? key : key + '[]'),
            convertValue(el)
          );
        });
        return false;
      }
    }

    if (isVisitable(value)) {
      return true;
    }

    formData.append(renderKey(path, key, dots), convertValue(value));

    return false;
  }

  const stack = [];

  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });

  function build(value, path) {
    if (utils.isUndefined(value)) return;

    if (stack.indexOf(value) !== -1) {
      throw Error('Circular reference detected in ' + path.join('.'));
    }

    stack.push(value);

    utils.forEach(value, function each(el, key) {
      const result = !(utils.isUndefined(el) || el === null) && visitor.call(
        formData, el, utils.isString(key) ? key.trim() : key, path, exposedHelpers
      );

      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });

    stack.pop();
  }

  if (!utils.isObject(obj)) {
    throw new TypeError('data must be an object');
  }

  build(obj);

  return formData;
}

/* harmony default export */ var helpers_toFormData = (toFormData);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/AxiosURLSearchParams.js




/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */
function encode(str) {
  const charMap = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\x00'
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}

/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */
function AxiosURLSearchParams(params, options) {
  this._pairs = [];

  params && helpers_toFormData(params, this, options);
}

const AxiosURLSearchParams_prototype = AxiosURLSearchParams.prototype;

AxiosURLSearchParams_prototype.append = function append(name, value) {
  this._pairs.push([name, value]);
};

AxiosURLSearchParams_prototype.toString = function toString(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;

  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + '=' + _encode(pair[1]);
  }, '').join('&');
};

/* harmony default export */ var helpers_AxiosURLSearchParams = (AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/buildURL.js





/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */
function buildURL_encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @param {?(object|Function)} options
 *
 * @returns {string} The formatted url
 */
function buildURL(url, params, options) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }
  
  const _encode = options && options.encode || buildURL_encode;

  if (utils.isFunction(options)) {
    options = {
      serialize: options
    };
  } 

  const serializeFn = options && options.serialize;

  let serializedParams;

  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils.isURLSearchParams(params) ?
      params.toString() :
      new helpers_AxiosURLSearchParams(params, options).toString(_encode);
  }

  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");

    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/InterceptorManager.js




class InterceptorManager {
  constructor() {
    this.handlers = [];
  }

  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }

  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }

  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }

  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
}

/* harmony default export */ var core_InterceptorManager = (InterceptorManager);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/transitional.js


/* harmony default export */ var defaults_transitional = ({
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/URLSearchParams.js



/* harmony default export */ var classes_URLSearchParams = (typeof URLSearchParams !== 'undefined' ? URLSearchParams : helpers_AxiosURLSearchParams);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/FormData.js


/* harmony default export */ var classes_FormData = (typeof FormData !== 'undefined' ? FormData : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/classes/Blob.js


/* harmony default export */ var classes_Blob = (typeof Blob !== 'undefined' ? Blob : null);

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/browser/index.js




/* harmony default export */ var browser = ({
  isBrowser: true,
  classes: {
    URLSearchParams: classes_URLSearchParams,
    FormData: classes_FormData,
    Blob: classes_Blob
  },
  protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/common/utils.js
const hasBrowserEnv = typeof window !== 'undefined' && typeof document !== 'undefined';

const _navigator = typeof navigator === 'object' && navigator || undefined;

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 *
 * @returns {boolean}
 */
const hasStandardBrowserEnv = hasBrowserEnv &&
  (!_navigator || ['ReactNative', 'NativeScript', 'NS'].indexOf(_navigator.product) < 0);

/**
 * Determine if we're running in a standard browser webWorker environment
 *
 * Although the `isStandardBrowserEnv` method indicates that
 * `allows axios to run in a web worker`, the WebWorker will still be
 * filtered out due to its judgment standard
 * `typeof window !== 'undefined' && typeof document !== 'undefined'`.
 * This leads to a problem when axios post `FormData` in webWorker
 */
const hasStandardBrowserWebWorkerEnv = (() => {
  return (
    typeof WorkerGlobalScope !== 'undefined' &&
    // eslint-disable-next-line no-undef
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts === 'function'
  );
})();

const origin = hasBrowserEnv && window.location.href || 'http://localhost';



;// CONCATENATED MODULE: ./node_modules/axios/lib/platform/index.js



/* harmony default export */ var platform = ({
  ...common_utils_namespaceObject,
  ...browser
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/toURLEncodedForm.js






function toURLEncodedForm(data, options) {
  return helpers_toFormData(data, new platform.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform.isNode && utils.isBuffer(value)) {
        this.append(key, value.toString('base64'));
        return false;
      }

      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/formDataToJSON.js




/**
 * It takes a string like `foo[x][y][z]` and returns an array like `['foo', 'x', 'y', 'z']
 *
 * @param {string} name - The name of the property to get.
 *
 * @returns An array of strings.
 */
function parsePropPath(name) {
  // foo[x][y][z]
  // foo.x.y.z
  // foo-x-y-z
  // foo x y z
  return utils.matchAll(/\w+|\[(\w*)]/g, name).map(match => {
    return match[0] === '[]' ? '' : match[1] || match[0];
  });
}

/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}

/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name = path[index++];

    if (name === '__proto__') return true;

    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils.isArray(target) ? target.length : name;

    if (isLast) {
      if (utils.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }

      return !isNumericKey;
    }

    if (!target[name] || !utils.isObject(target[name])) {
      target[name] = [];
    }

    const result = buildPath(path, value, target[name], index);

    if (result && utils.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }

    return !isNumericKey;
  }

  if (utils.isFormData(formData) && utils.isFunction(formData.entries)) {
    const obj = {};

    utils.forEachEntry(formData, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });

    return obj;
  }

  return null;
}

/* harmony default export */ var helpers_formDataToJSON = (formDataToJSON);

;// CONCATENATED MODULE: ./node_modules/axios/lib/defaults/index.js










/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */
function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

const defaults = {

  transitional: defaults_transitional,

  adapter: ['xhr', 'http', 'fetch'],

  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || '';
    const hasJSONContentType = contentType.indexOf('application/json') > -1;
    const isObjectPayload = utils.isObject(data);

    if (isObjectPayload && utils.isHTMLForm(data)) {
      data = new FormData(data);
    }

    const isFormData = utils.isFormData(data);

    if (isFormData) {
      return hasJSONContentType ? JSON.stringify(helpers_formDataToJSON(data)) : data;
    }

    if (utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data) ||
      utils.isReadableStream(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      headers.setContentType('application/x-www-form-urlencoded;charset=utf-8', false);
      return data.toString();
    }

    let isFileList;

    if (isObjectPayload) {
      if (contentType.indexOf('application/x-www-form-urlencoded') > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }

      if ((isFileList = utils.isFileList(data)) || contentType.indexOf('multipart/form-data') > -1) {
        const _FormData = this.env && this.env.FormData;

        return helpers_toFormData(
          isFileList ? {'files[]': data} : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }

    if (isObjectPayload || hasJSONContentType ) {
      headers.setContentType('application/json', false);
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    const transitional = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    const JSONRequested = this.responseType === 'json';

    if (utils.isResponse(data) || utils.isReadableStream(data)) {
      return data;
    }

    if (data && utils.isString(data) && ((forcedJSONParsing && !this.responseType) || JSONRequested)) {
      const silentJSONParsing = transitional && transitional.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;

      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw core_AxiosError.from(e, core_AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: platform.classes.FormData,
    Blob: platform.classes.Blob
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': undefined
    }
  }
};

utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (method) => {
  defaults.headers[method] = {};
});

/* harmony default export */ var lib_defaults = (defaults);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseHeaders.js




// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
const ignoreDuplicateOf = utils.toObjectSet([
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
]);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */
/* harmony default export */ var parseHeaders = (rawHeaders => {
  const parsed = {};
  let key;
  let val;
  let i;

  rawHeaders && rawHeaders.split('\n').forEach(function parser(line) {
    i = line.indexOf(':');
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();

    if (!key || (parsed[key] && ignoreDuplicateOf[key])) {
      return;
    }

    if (key === 'set-cookie') {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/AxiosHeaders.js





const $internals = Symbol('internals');

function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}

function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }

  return utils.isArray(value) ? value.map(normalizeValue) : String(value);
}

function parseTokens(str) {
  const tokens = Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;

  while ((match = tokensRE.exec(str))) {
    tokens[match[1]] = match[2];
  }

  return tokens;
}

const isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());

function matchHeaderValue(context, value, header, filter, isHeaderNameFilter) {
  if (utils.isFunction(filter)) {
    return filter.call(this, value, header);
  }

  if (isHeaderNameFilter) {
    value = header;
  }

  if (!utils.isString(value)) return;

  if (utils.isString(filter)) {
    return value.indexOf(filter) !== -1;
  }

  if (utils.isRegExp(filter)) {
    return filter.test(value);
  }
}

function formatHeader(header) {
  return header.trim()
    .toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
      return char.toUpperCase() + str;
    });
}

function buildAccessors(obj, header) {
  const accessorName = utils.toCamelCase(' ' + header);

  ['get', 'set', 'has'].forEach(methodName => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}

class AxiosHeaders {
  constructor(headers) {
    headers && this.set(headers);
  }

  set(header, valueOrRewrite, rewrite) {
    const self = this;

    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);

      if (!lHeader) {
        throw new Error('header name must be a non-empty string');
      }

      const key = utils.findKey(self, lHeader);

      if(!key || self[key] === undefined || _rewrite === true || (_rewrite === undefined && self[key] !== false)) {
        self[key || _header] = normalizeValue(_value);
      }
    }

    const setHeaders = (headers, _rewrite) =>
      utils.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));

    if (utils.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite)
    } else if(utils.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders(header), valueOrRewrite);
    } else if (utils.isObject(header) && utils.isIterable(header)) {
      let obj = {}, dest, key;
      for (const entry of header) {
        if (!utils.isArray(entry)) {
          throw TypeError('Object iterator must return a key-value pair');
        }

        obj[key = entry[0]] = (dest = obj[key]) ?
          (utils.isArray(dest) ? [...dest, entry[1]] : [dest, entry[1]]) : entry[1];
      }

      setHeaders(obj, valueOrRewrite)
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }

    return this;
  }

  get(header, parser) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      if (key) {
        const value = this[key];

        if (!parser) {
          return value;
        }

        if (parser === true) {
          return parseTokens(value);
        }

        if (utils.isFunction(parser)) {
          return parser.call(this, value, key);
        }

        if (utils.isRegExp(parser)) {
          return parser.exec(value);
        }

        throw new TypeError('parser must be boolean|regexp|function');
      }
    }
  }

  has(header, matcher) {
    header = normalizeHeader(header);

    if (header) {
      const key = utils.findKey(this, header);

      return !!(key && this[key] !== undefined && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }

    return false;
  }

  delete(header, matcher) {
    const self = this;
    let deleted = false;

    function deleteHeader(_header) {
      _header = normalizeHeader(_header);

      if (_header) {
        const key = utils.findKey(self, _header);

        if (key && (!matcher || matchHeaderValue(self, self[key], key, matcher))) {
          delete self[key];

          deleted = true;
        }
      }
    }

    if (utils.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }

    return deleted;
  }

  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;

    while (i--) {
      const key = keys[i];
      if(!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }

    return deleted;
  }

  normalize(format) {
    const self = this;
    const headers = {};

    utils.forEach(this, (value, header) => {
      const key = utils.findKey(headers, header);

      if (key) {
        self[key] = normalizeValue(value);
        delete self[header];
        return;
      }

      const normalized = format ? formatHeader(header) : String(header).trim();

      if (normalized !== header) {
        delete self[header];
      }

      self[normalized] = normalizeValue(value);

      headers[normalized] = true;
    });

    return this;
  }

  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }

  toJSON(asStrings) {
    const obj = Object.create(null);

    utils.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils.isArray(value) ? value.join(', ') : value);
    });

    return obj;
  }

  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }

  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ': ' + value).join('\n');
  }

  getSetCookie() {
    return this.get("set-cookie") || [];
  }

  get [Symbol.toStringTag]() {
    return 'AxiosHeaders';
  }

  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }

  static concat(first, ...targets) {
    const computed = new this(first);

    targets.forEach((target) => computed.set(target));

    return computed;
  }

  static accessor(header) {
    const internals = this[$internals] = (this[$internals] = {
      accessors: {}
    });

    const accessors = internals.accessors;
    const prototype = this.prototype;

    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);

      if (!accessors[lHeader]) {
        buildAccessors(prototype, _header);
        accessors[lHeader] = true;
      }
    }

    utils.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);

    return this;
  }
}

AxiosHeaders.accessor(['Content-Type', 'Content-Length', 'Accept', 'Accept-Encoding', 'User-Agent', 'Authorization']);

// reserved names hotfix
utils.reduceDescriptors(AxiosHeaders.prototype, ({value}, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1); // map `set` => `Set`
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  }
});

utils.freezeMethods(AxiosHeaders);

/* harmony default export */ var core_AxiosHeaders = (AxiosHeaders);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/transformData.js






/**
 * Transform the data for a request or a response
 *
 * @param {Array|Function} fns A single function or Array of functions
 * @param {?Object} response The response object
 *
 * @returns {*} The resulting transformed data
 */
function transformData(fns, response) {
  const config = this || lib_defaults;
  const context = response || config;
  const headers = core_AxiosHeaders.from(context.headers);
  let data = context.data;

  utils.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : undefined);
  });

  headers.normalize();

  return data;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/isCancel.js


function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CanceledError.js





/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */
function CanceledError(message, config, request) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  core_AxiosError.call(this, message == null ? 'canceled' : message, core_AxiosError.ERR_CANCELED, config, request);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, core_AxiosError, {
  __CANCEL__: true
});

/* harmony default export */ var cancel_CanceledError = (CanceledError);

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/settle.js




/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 *
 * @returns {object} The response.
 */
function settle(resolve, reject, response) {
  const validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new core_AxiosError(
      'Request failed with status code ' + response.status,
      [core_AxiosError.ERR_BAD_REQUEST, core_AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/parseProtocol.js


function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/speedometer.js


/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;

  min = min !== undefined ? min : 1000;

  return function push(chunkLength) {
    const now = Date.now();

    const startedAt = timestamps[tail];

    if (!firstSampleTS) {
      firstSampleTS = now;
    }

    bytes[head] = chunkLength;
    timestamps[head] = now;

    let i = tail;
    let bytesCount = 0;

    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }

    head = (head + 1) % samplesCount;

    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }

    if (now - firstSampleTS < min) {
      return;
    }

    const passed = startedAt && now - startedAt;

    return passed ? Math.round(bytesCount * 1000 / passed) : undefined;
  };
}

/* harmony default export */ var helpers_speedometer = (speedometer);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/throttle.js
/**
 * Throttle decorator
 * @param {Function} fn
 * @param {Number} freq
 * @return {Function}
 */
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1000 / freq;
  let lastArgs;
  let timer;

  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  }

  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if ( passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs)
        }, threshold - passed);
      }
    }
  }

  const flush = () => lastArgs && invoke(lastArgs);

  return [throttled, flush];
}

/* harmony default export */ var helpers_throttle = (throttle);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/progressEventReducer.js




const progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = helpers_speedometer(50, 250);

  return helpers_throttle(e => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : undefined;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;

    bytesNotified = loaded;

    const data = {
      loaded,
      total,
      progress: total ? (loaded / total) : undefined,
      bytes: progressBytes,
      rate: rate ? rate : undefined,
      estimated: rate && total && inRange ? (total - loaded) / rate : undefined,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? 'download' : 'upload']: true
    };

    listener(data);
  }, freq);
}

const progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;

  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
}

const asyncDecorator = (fn) => (...args) => utils.asap(() => fn(...args));

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isURLSameOrigin.js


/* harmony default export */ var isURLSameOrigin = (platform.hasStandardBrowserEnv ? ((origin, isMSIE) => (url) => {
  url = new URL(url, platform.origin);

  return (
    origin.protocol === url.protocol &&
    origin.host === url.host &&
    (isMSIE || origin.port === url.port)
  );
})(
  new URL(platform.origin),
  platform.navigator && /(msie|trident)/i.test(platform.navigator.userAgent)
) : () => true);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/cookies.js



/* harmony default export */ var cookies = (platform.hasStandardBrowserEnv ?

  // Standard browser envs support document.cookie
  {
    write(name, value, expires, path, domain, secure) {
      const cookie = [name + '=' + encodeURIComponent(value)];

      utils.isNumber(expires) && cookie.push('expires=' + new Date(expires).toGMTString());

      utils.isString(path) && cookie.push('path=' + path);

      utils.isString(domain) && cookie.push('domain=' + domain);

      secure === true && cookie.push('secure');

      document.cookie = cookie.join('; ');
    },

    read(name) {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return (match ? decodeURIComponent(match[3]) : null);
    },

    remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  }

  :

  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {},
    read() {
      return null;
    },
    remove() {}
  });


;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAbsoluteURL.js


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 *
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/combineURLs.js


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 *
 * @returns {string} The combined URL
 */
function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/?\/$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/buildFullPath.js





/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 *
 * @returns {string} The combined full path
 */
function buildFullPath(baseURL, requestedURL, allowAbsoluteUrls) {
  let isRelativeUrl = !isAbsoluteURL(requestedURL);
  if (baseURL && (isRelativeUrl || allowAbsoluteUrls == false)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/mergeConfig.js





const headersToObject = (thing) => thing instanceof core_AxiosHeaders ? { ...thing } : thing;

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 *
 * @returns {Object} New object resulting from merging config2 to config1
 */
function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  const config = {};

  function getMergedValue(target, source, prop, caseless) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge.call({caseless}, target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(a, b, prop , caseless) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(a, b, prop , caseless);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a, prop , caseless);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(a, b) {
    if (!utils.isUndefined(b)) {
      return getMergedValue(undefined, b);
    } else if (!utils.isUndefined(a)) {
      return getMergedValue(undefined, a);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(undefined, a);
    }
  }

  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b , prop) => mergeDeepProperties(headersToObject(a), headersToObject(b),prop, true)
  };

  utils.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge(config1[prop], config2[prop], prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/resolveConfig.js









/* harmony default export */ var resolveConfig = ((config) => {
  const newConfig = mergeConfig({}, config);

  let {data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth} = newConfig;

  newConfig.headers = headers = core_AxiosHeaders.from(headers);

  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url, newConfig.allowAbsoluteUrls), config.params, config.paramsSerializer);

  // HTTP basic authentication
  if (auth) {
    headers.set('Authorization', 'Basic ' +
      btoa((auth.username || '') + ':' + (auth.password ? unescape(encodeURIComponent(auth.password)) : ''))
    );
  }

  let contentType;

  if (utils.isFormData(data)) {
    if (platform.hasStandardBrowserEnv || platform.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(undefined); // Let the browser set it
    } else if ((contentType = headers.getContentType()) !== false) {
      // fix semicolon duplication issue for ReactNative FormData implementation
      const [type, ...tokens] = contentType ? contentType.split(';').map(token => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || 'multipart/form-data', ...tokens].join('; '));
    }
  }

  // Add xsrf header
  // This is only done if running in a standard browser environment.
  // Specifically not if we're in a web worker, or react-native.

  if (platform.hasStandardBrowserEnv) {
    withXSRFToken && utils.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));

    if (withXSRFToken || (withXSRFToken !== false && isURLSameOrigin(newConfig.url))) {
      // Add xsrf header
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies.read(xsrfCookieName);

      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }

  return newConfig;
});


;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/xhr.js











const isXHRAdapterSupported = typeof XMLHttpRequest !== 'undefined';

/* harmony default export */ var xhr = (isXHRAdapterSupported && function (config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig(config);
    let requestData = _config.data;
    const requestHeaders = core_AxiosHeaders.from(_config.headers).normalize();
    let {responseType, onUploadProgress, onDownloadProgress} = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;

    function done() {
      flushUpload && flushUpload(); // flush events
      flushDownload && flushDownload(); // flush events

      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);

      _config.signal && _config.signal.removeEventListener('abort', onCanceled);
    }

    let request = new XMLHttpRequest();

    request.open(_config.method.toUpperCase(), _config.url, true);

    // Set the request timeout in MS
    request.timeout = _config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      const responseHeaders = core_AxiosHeaders.from(
        'getAllResponseHeaders' in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === 'text' || responseType === 'json' ?
        request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new core_AxiosError('Request aborted', core_AxiosError.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? 'timeout of ' + _config.timeout + 'ms exceeded' : 'timeout exceeded';
      const transitional = _config.transitional || defaults_transitional;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new core_AxiosError(
        timeoutErrorMessage,
        transitional.clarifyTimeoutError ? core_AxiosError.ETIMEDOUT : core_AxiosError.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Remove Content-Type if data is undefined
    requestData === undefined && requestHeaders.setContentType(null);

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = _config.responseType;
    }

    // Handle progress if needed
    if (onDownloadProgress) {
      ([downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true));
      request.addEventListener('progress', downloadThrottled);
    }

    // Not all browsers support upload events
    if (onUploadProgress && request.upload) {
      ([uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress));

      request.upload.addEventListener('progress', uploadThrottled);

      request.upload.addEventListener('loadend', flushUpload);
    }

    if (_config.cancelToken || _config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = cancel => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new cancel_CanceledError(null, config, request) : cancel);
        request.abort();
        request = null;
      };

      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener('abort', onCanceled);
      }
    }

    const protocol = parseProtocol(_config.url);

    if (protocol && platform.protocols.indexOf(protocol) === -1) {
      reject(new core_AxiosError('Unsupported protocol ' + protocol + ':', core_AxiosError.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData || null);
  });
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/composeSignals.js




const composeSignals = (signals, timeout) => {
  const {length} = (signals = signals ? signals.filter(Boolean) : []);

  if (timeout || length) {
    let controller = new AbortController();

    let aborted;

    const onabort = function (reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof core_AxiosError ? err : new cancel_CanceledError(err instanceof Error ? err.message : err));
      }
    }

    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new core_AxiosError(`timeout ${timeout} of ms exceeded`, core_AxiosError.ETIMEDOUT))
    }, timeout)

    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach(signal => {
          signal.unsubscribe ? signal.unsubscribe(onabort) : signal.removeEventListener('abort', onabort);
        });
        signals = null;
      }
    }

    signals.forEach((signal) => signal.addEventListener('abort', onabort));

    const {signal} = controller;

    signal.unsubscribe = () => utils.asap(unsubscribe);

    return signal;
  }
}

/* harmony default export */ var helpers_composeSignals = (composeSignals);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/trackStream.js

const streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;

  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }

  let pos = 0;
  let end;

  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
}

const readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
}

const readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }

  const reader = stream.getReader();
  try {
    for (;;) {
      const {done, value} = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
}

const trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);

  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  }

  return new ReadableStream({
    async pull(controller) {
      try {
        const {done, value} = await iterator.next();

        if (done) {
         _onFinish();
          controller.close();
          return;
        }

        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  })
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/fetch.js










const isFetchSupported = typeof fetch === 'function' && typeof Request === 'function' && typeof Response === 'function';
const isReadableStreamSupported = isFetchSupported && typeof ReadableStream === 'function';

// used only inside the fetch adapter
const encodeText = isFetchSupported && (typeof TextEncoder === 'function' ?
    ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) :
    async (str) => new Uint8Array(await new Response(str).arrayBuffer())
);

const test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false
  }
}

const supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;

  const hasContentType = new Request(platform.origin, {
    body: new ReadableStream(),
    method: 'POST',
    get duplex() {
      duplexAccessed = true;
      return 'half';
    },
  }).headers.has('Content-Type');

  return duplexAccessed && !hasContentType;
});

const DEFAULT_CHUNK_SIZE = 64 * 1024;

const supportsResponseStream = isReadableStreamSupported &&
  test(() => utils.isReadableStream(new Response('').body));


const resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};

isFetchSupported && (((res) => {
  ['text', 'arrayBuffer', 'blob', 'formData', 'stream'].forEach(type => {
    !resolvers[type] && (resolvers[type] = utils.isFunction(res[type]) ? (res) => res[type]() :
      (_, config) => {
        throw new core_AxiosError(`Response type '${type}' is not supported`, core_AxiosError.ERR_NOT_SUPPORT, config);
      })
  });
})(new Response));

const getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }

  if(utils.isBlob(body)) {
    return body.size;
  }

  if(utils.isSpecCompliantForm(body)) {
    const _request = new Request(platform.origin, {
      method: 'POST',
      body,
    });
    return (await _request.arrayBuffer()).byteLength;
  }

  if(utils.isArrayBufferView(body) || utils.isArrayBuffer(body)) {
    return body.byteLength;
  }

  if(utils.isURLSearchParams(body)) {
    body = body + '';
  }

  if(utils.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
}

const resolveBodyLength = async (headers, body) => {
  const length = utils.toFiniteNumber(headers.getContentLength());

  return length == null ? getBodyLength(body) : length;
}

/* harmony default export */ var adapters_fetch = (isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = 'same-origin',
    fetchOptions
  } = resolveConfig(config);

  responseType = responseType ? (responseType + '').toLowerCase() : 'text';

  let composedSignal = helpers_composeSignals([signal, cancelToken && cancelToken.toAbortSignal()], timeout);

  let request;

  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
      composedSignal.unsubscribe();
  });

  let requestContentLength;

  try {
    if (
      onUploadProgress && supportsRequestStream && method !== 'get' && method !== 'head' &&
      (requestContentLength = await resolveBodyLength(headers, data)) !== 0
    ) {
      let _request = new Request(url, {
        method: 'POST',
        body: data,
        duplex: "half"
      });

      let contentTypeHeader;

      if (utils.isFormData(data) && (contentTypeHeader = _request.headers.get('content-type'))) {
        headers.setContentType(contentTypeHeader)
      }

      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );

        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }

    if (!utils.isString(withCredentials)) {
      withCredentials = withCredentials ? 'include' : 'omit';
    }

    // Cloudflare Workers throws when credentials are defined
    // see https://github.com/cloudflare/workerd/issues/902
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : undefined
    });

    let response = await fetch(request, fetchOptions);

    const isStreamResponse = supportsResponseStream && (responseType === 'stream' || responseType === 'response');

    if (supportsResponseStream && (onDownloadProgress || (isStreamResponse && unsubscribe))) {
      const options = {};

      ['status', 'statusText', 'headers'].forEach(prop => {
        options[prop] = response[prop];
      });

      const responseContentLength = utils.toFiniteNumber(response.headers.get('content-length'));

      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];

      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }

    responseType = responseType || 'text';

    let responseData = await resolvers[utils.findKey(resolvers, responseType) || 'text'](response, config);

    !isStreamResponse && unsubscribe && unsubscribe();

    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: core_AxiosHeaders.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      })
    })
  } catch (err) {
    unsubscribe && unsubscribe();

    if (err && err.name === 'TypeError' && /Load failed|fetch/i.test(err.message)) {
      throw Object.assign(
        new core_AxiosError('Network Error', core_AxiosError.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      )
    }

    throw core_AxiosError.from(err, err && err.code, config, request);
  }
}));



;// CONCATENATED MODULE: ./node_modules/axios/lib/adapters/adapters.js






const knownAdapters = {
  http: helpers_null,
  xhr: xhr,
  fetch: adapters_fetch
}

utils.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

const renderReason = (reason) => `- ${reason}`;

const isResolvedHandle = (adapter) => utils.isFunction(adapter) || adapter === null || adapter === false;

/* harmony default export */ var adapters = ({
  getAdapter: (adapters) => {
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;

    const rejectedReasons = {};

    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;

      adapter = nameOrAdapter;

      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];

        if (adapter === undefined) {
          throw new core_AxiosError(`Unknown adapter '${id}'`);
        }
      }

      if (adapter) {
        break;
      }

      rejectedReasons[id || '#' + i] = adapter;
    }

    if (!adapter) {

      const reasons = Object.entries(rejectedReasons)
        .map(([id, state]) => `adapter ${id} ` +
          (state === false ? 'is not supported by the environment' : 'is not available in the build')
        );

      let s = length ?
        (reasons.length > 1 ? 'since :\n' + reasons.map(renderReason).join('\n') : ' ' + renderReason(reasons[0])) :
        'as no adapter specified';

      throw new core_AxiosError(
        `There is no suitable adapter to dispatch the request ` + s,
        'ERR_NOT_SUPPORT'
      );
    }

    return adapter;
  },
  adapters: knownAdapters
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/dispatchRequest.js









/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new cancel_CanceledError(null, config);
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 *
 * @returns {Promise} The Promise to be fulfilled
 */
function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  config.headers = core_AxiosHeaders.from(config.headers);

  // Transform request data
  config.data = transformData.call(
    config,
    config.transformRequest
  );

  if (['post', 'put', 'patch'].indexOf(config.method) !== -1) {
    config.headers.setContentType('application/x-www-form-urlencoded', false);
  }

  const adapter = adapters.getAdapter(config.adapter || lib_defaults.adapter);

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );

    response.headers = core_AxiosHeaders.from(response.headers);

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = core_AxiosHeaders.from(reason.response.headers);
      }
    }

    return Promise.reject(reason);
  });
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/env/data.js
const VERSION = "1.10.0";
;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/validator.js





const validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

const deprecatedWarnings = {};

/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return (value, opt, opts) => {
    if (validator === false) {
      throw new core_AxiosError(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        core_AxiosError.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

validators.spelling = function spelling(correctSpelling) {
  return (value, opt) => {
    // eslint-disable-next-line no-console
    console.warn(`${opt} is likely a misspelling of ${correctSpelling}`);
    return true;
  }
};

/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new core_AxiosError('options must be an object', core_AxiosError.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new core_AxiosError('option ' + opt + ' must be ' + result, core_AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new core_AxiosError('Unknown option ' + opt, core_AxiosError.ERR_BAD_OPTION);
    }
  }
}

/* harmony default export */ var validator = ({
  assertOptions,
  validators
});

;// CONCATENATED MODULE: ./node_modules/axios/lib/core/Axios.js











const Axios_validators = validator.validators;

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 *
 * @return {Axios} A new instance of Axios
 */
class Axios_Axios {
  constructor(instanceConfig) {
    this.defaults = instanceConfig || {};
    this.interceptors = {
      request: new core_InterceptorManager(),
      response: new core_InterceptorManager()
    };
  }

  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy = {};

        Error.captureStackTrace ? Error.captureStackTrace(dummy) : (dummy = new Error());

        // slice off the Error: ... line
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, '') : '';
        try {
          if (!err.stack) {
            err.stack = stack;
            // match without the 2 top stack lines
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ''))) {
            err.stack += '\n' + stack
          }
        } catch (e) {
          // ignore the case where "stack" is an un-writable property
        }
      }

      throw err;
    }
  }

  _request(configOrUrl, config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof configOrUrl === 'string') {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }

    config = mergeConfig(this.defaults, config);

    const {transitional, paramsSerializer, headers} = config;

    if (transitional !== undefined) {
      validator.assertOptions(transitional, {
        silentJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        forcedJSONParsing: Axios_validators.transitional(Axios_validators.boolean),
        clarifyTimeoutError: Axios_validators.transitional(Axios_validators.boolean)
      }, false);
    }

    if (paramsSerializer != null) {
      if (utils.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        }
      } else {
        validator.assertOptions(paramsSerializer, {
          encode: Axios_validators.function,
          serialize: Axios_validators.function
        }, true);
      }
    }

    // Set config.allowAbsoluteUrls
    if (config.allowAbsoluteUrls !== undefined) {
      // do nothing
    } else if (this.defaults.allowAbsoluteUrls !== undefined) {
      config.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls;
    } else {
      config.allowAbsoluteUrls = true;
    }

    validator.assertOptions(config, {
      baseUrl: Axios_validators.spelling('baseURL'),
      withXsrfToken: Axios_validators.spelling('withXSRFToken')
    }, true);

    // Set config.method
    config.method = (config.method || this.defaults.method || 'get').toLowerCase();

    // Flatten headers
    let contextHeaders = headers && utils.merge(
      headers.common,
      headers[config.method]
    );

    headers && utils.forEach(
      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
      (method) => {
        delete headers[method];
      }
    );

    config.headers = core_AxiosHeaders.concat(contextHeaders, headers);

    // filter out skipped interceptors
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
        return;
      }

      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });

    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });

    let promise;
    let i = 0;
    let len;

    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), undefined];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;

      promise = Promise.resolve(config);

      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }

      return promise;
    }

    len = requestInterceptorChain.length;

    let newConfig = config;

    i = 0;

    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }

    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }

    i = 0;
    len = responseInterceptorChain.length;

    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }

    return promise;
  }

  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url, config.allowAbsoluteUrls);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
}

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios_Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios_Axios.prototype[method] = generateHTTPMethod();

  Axios_Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

/* harmony default export */ var core_Axios = (Axios_Axios);

;// CONCATENATED MODULE: ./node_modules/axios/lib/cancel/CancelToken.js




/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */
class CancelToken {
  constructor(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    let resolvePromise;

    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });

    const token = this;

    // eslint-disable-next-line func-names
    this.promise.then(cancel => {
      if (!token._listeners) return;

      let i = token._listeners.length;

      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });

    // eslint-disable-next-line func-names
    this.promise.then = onfulfilled => {
      let _resolve;
      // eslint-disable-next-line func-names
      const promise = new Promise(resolve => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);

      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };

      return promise;
    };

    executor(function cancel(message, config, request) {
      if (token.reason) {
        // Cancellation has already been requested
        return;
      }

      token.reason = new cancel_CanceledError(message, config, request);
      resolvePromise(token.reason);
    });
  }

  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }

  /**
   * Subscribe to the cancel signal
   */

  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }

    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }

  /**
   * Unsubscribe from the cancel signal
   */

  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }

  toAbortSignal() {
    const controller = new AbortController();

    const abort = (err) => {
      controller.abort(err);
    };

    this.subscribe(abort);

    controller.signal.unsubscribe = () => this.unsubscribe(abort);

    return controller.signal;
  }

  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
}

/* harmony default export */ var cancel_CancelToken = (CancelToken);

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/spread.js


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 *
 * @returns {Function}
 */
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/isAxiosError.js




/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 *
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
}

;// CONCATENATED MODULE: ./node_modules/axios/lib/helpers/HttpStatusCode.js
const HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};

Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});

/* harmony default export */ var helpers_HttpStatusCode = (HttpStatusCode);

;// CONCATENATED MODULE: ./node_modules/axios/lib/axios.js




















/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  const context = new core_Axios(defaultConfig);
  const instance = bind(core_Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, core_Axios.prototype, context, {allOwnKeys: true});

  // Copy context to instance
  utils.extend(instance, context, null, {allOwnKeys: true});

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
const axios = createInstance(lib_defaults);

// Expose Axios class to allow class inheritance
axios.Axios = core_Axios;

// Expose Cancel & CancelToken
axios.CanceledError = cancel_CanceledError;
axios.CancelToken = cancel_CancelToken;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = helpers_toFormData;

// Expose AxiosError class
axios.AxiosError = core_AxiosError;

// alias for CanceledError for backward compatibility
axios.Cancel = axios.CanceledError;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = spread;

// Expose isAxiosError
axios.isAxiosError = isAxiosError;

// Expose mergeConfig
axios.mergeConfig = mergeConfig;

axios.AxiosHeaders = core_AxiosHeaders;

axios.formToJSON = thing => helpers_formDataToJSON(utils.isHTMLForm(thing) ? new FormData(thing) : thing);

axios.getAdapter = adapters.getAdapter;

axios.HttpStatusCode = helpers_HttpStatusCode;

axios.default = axios;

// this module should only have a default export
/* harmony default export */ var lib_axios = (axios);

// EXTERNAL MODULE: ./node_modules/qs/lib/index.js
var lib = __webpack_require__(80129);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/lodash/merge.js
var lodash_merge = __webpack_require__(82492);
var merge_default = /*#__PURE__*/__webpack_require__.n(lodash_merge);
;// CONCATENATED MODULE: ./node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function clsx_m() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}

;// CONCATENATED MODULE: ./src/js/frontend/Group.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Group_createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Group = /*#__PURE__*/function () {
  function Group(_ref) {
    var _this = this;

    var data = _ref.data,
        stylesheet = _ref.stylesheet,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        _ref$renderExtender = _ref.renderExtender,
        renderExtender = _ref$renderExtender === void 0 ? [] : _ref$renderExtender,
        _ref$extensions = _ref.extensions,
        extensions = _ref$extensions === void 0 ? [] : _ref$extensions,
        menu_button = _ref.menu_button,
        buttons = _ref.buttons;

    _classCallCheck(this, Group);

    this.data = data;
    this.buttons = buttons;
    this.element = document.createElement("div");
    this.generators = generators;
    this.renderExtender = renderExtender;
    this.extensions = extensions;
    this.menuButton = null;
    this.stylesheet = stylesheet;

    if (typeof buttons === "undefined" || buttons.length === 0) {
      console.error("Oh no, I have no buttons!", this.data.id);
      return;
    }

    this.menuButton = Object.keys(menu_button)[0];
    merge_default()(this.buttons, menu_button); // Initialize generators

    this.generators.forEach(function (gen) {
      return gen.generate(_this);
    }); // Initialize extensions

    this.extensions.forEach(function (ext) {
      return ext.subscribe(_this);
    });
  }

  Group_createClass(Group, [{
    key: "render",
    value: function render() {
      var _group,
          _this2 = this;

      this.stylesheet.update({
        group: (_group = {}, _defineProperty(_group, this.data.horizontal[0], this.data.horizontal[1]), _defineProperty(_group, this.data.vertical[0], this.data.vertical[1]), _defineProperty(_group, "flexDirection", this.data.vertical[0] === "bottom" ? "column-reverse" : "column"), _group)
      });

      if (!(this.buttons[this.menuButton].data.show_desktop === false && this.buttons[this.menuButton].data.show_mobile === false)) {
        var _this$buttons$this$me = this.buttons[this.menuButton].render(),
            element = _this$buttons$this$me.element;

        element.classList.add("buttonizer-head");
        this.element.appendChild(element);
      }

      Object.values(this.buttons).forEach(function (button) {
        if (button.data.id === _this2.menuButton) return;

        _this2.element.appendChild(button.render().element);
      });
      this.element.className = clsx_m(this.element.className, "buttonizer", "buttonizer-group", this.stylesheet.classes.group);
      /* webpack-strip-block:removed */
      // Device visibility

      if (!this.data.show_desktop) {
        this.setHide("desktop");
      }

      if (!this.data.show_mobile) {
        this.setHide("mobile");
      }

      this.renderExtender.forEach(function (extender) {
        return extender.extend(_this2);
      });
      this.stylesheet.attach();
      return this.element;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this3 = this;

      // Unsubscribe
      this.extensions.forEach(function (ext) {
        return ext.unsubscribe(_this3);
      });
      if (this.element) this.element.remove();
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        group: _defineProperty({}, "@media screen and (".concat(size, ")"), {
          display: "none"
        })
      });
    }
  }]);

  return Group;
}();


;// CONCATENATED MODULE: ./src/js/frontend/Extensions/template.js
function template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function template_createClass(Constructor, protoProps, staticProps) { if (protoProps) template_defineProperties(Constructor.prototype, protoProps); if (staticProps) template_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @Buttonizer Extension container
 *
 * This class is required for all extensions
 */
var Extension = /*#__PURE__*/function () {
  function Extension() {
    template_classCallCheck(this, Extension);

    this.subscriptions = []; // Define default extension name

    this.name = "unknown";
  }
  /**
   * Subscribe object to this extension
   *
   * @param {Group} obj
   */


  template_createClass(Extension, [{
    key: "subscribe",
    value: function subscribe(obj) {
      // Make sure object is not subscribed already
      if (this.subscriptions.indexOf(obj) > 0) {
        console.error("This object is already subscribed to the ".concat(this.name, " extension."));
        return false;
      } // Subscribe


      this.subscriptions.push(obj); // Trigger event

      this.onSubscribe(obj);
    }
    /**
     * Unsubscribe object from this extension
     *
     * @param {Group} obj
     */

  }, {
    key: "unsubscribe",
    value: function unsubscribe(obj) {
      // Find object subscription
      var objIndex = this.subscriptions.indexOf(obj); // Object not subscribed

      if (objIndex === -1) {
        console.error("This object is not subscribed to the ".concat(this.name, " extension."));
        return false;
      } // Trigger event


      this.onUnsubscribe(obj); // Unsubscribe

      this.subscriptions.splice(objIndex, 1);
    } // Placeholder

  }, {
    key: "onSubscribe",
    value: function onSubscribe(obj) {
      obj;
    } // Placeholder

  }, {
    key: "onUnsubscribe",
    value: function onUnsubscribe(obj) {
      obj;
    }
  }]);

  return Extension;
}();


;// CONCATENATED MODULE: ./src/js/frontend/Extensions/CloseOnClickOutside.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function CloseOnClickOutside_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CloseOnClickOutside_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CloseOnClickOutside_createClass(Constructor, protoProps, staticProps) { if (protoProps) CloseOnClickOutside_defineProperties(Constructor.prototype, protoProps); if (staticProps) CloseOnClickOutside_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { CloseOnClickOutside_defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function CloseOnClickOutside_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var CloseOnClickOutside = /*#__PURE__*/function (_Extension) {
  _inherits(CloseOnClickOutside, _Extension);

  var _super = _createSuper(CloseOnClickOutside);

  function CloseOnClickOutside() {
    var _thisSuper, _this;

    CloseOnClickOutside_classCallCheck(this, CloseOnClickOutside);

    _this = _super.call(this); // Set extension name

    _set((_thisSuper = _assertThisInitialized(_this), _getPrototypeOf(CloseOnClickOutside.prototype)), "name", "close on click outside", _thisSuper, true);

    _this.watchClick();

    return _this;
  } // Add click event listener


  CloseOnClickOutside_createClass(CloseOnClickOutside, [{
    key: "watchClick",
    value: function watchClick() {
      var _this2 = this;

      document.addEventListener("click", function (e) {
        _this2.notify(e.target);
      });
    } // Hide or show button on subscribe

  }, {
    key: "notify",
    value: function notify(target) {
      this.subscriptions.forEach(function (group) {
        if (group && group.state && group.state.isOpened() && !group.element.contains(target)) {
          group.state.close();
        }
      });
    }
  }]);

  return CloseOnClickOutside;
}(Extension); // Export close on click outside extension


/* harmony default export */ var Extensions_CloseOnClickOutside = (new CloseOnClickOutside());
// EXTERNAL MODULE: ./node_modules/dlv/dist/dlv.umd.js
var dlv_umd = __webpack_require__(26905);
var dlv_umd_default = /*#__PURE__*/__webpack_require__.n(dlv_umd);
;// CONCATENATED MODULE: ./src/js/frontend/Utils/buttonizerInPreview.js
function buttonizerInPreview_inPreview() {
  if (typeof buttonizer_ajax === "undefined" || !buttonizer_ajax) return document.location.href.indexOf("buttonizer-preview=1") >= 0 && document.location.href.indexOf("identifier=") >= 0;
  return buttonizer_ajax.in_preview === "1";
}
;// CONCATENATED MODULE: ./src/js/frontend/Extensions/CloseOnClickInside.js
function CloseOnClickInside_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CloseOnClickInside_typeof = function _typeof(obj) { return typeof obj; }; } else { CloseOnClickInside_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CloseOnClickInside_typeof(obj); }

function CloseOnClickInside_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CloseOnClickInside_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CloseOnClickInside_createClass(Constructor, protoProps, staticProps) { if (protoProps) CloseOnClickInside_defineProperties(Constructor.prototype, protoProps); if (staticProps) CloseOnClickInside_defineProperties(Constructor, staticProps); return Constructor; }

function CloseOnClickInside_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CloseOnClickInside_setPrototypeOf(subClass, superClass); }

function CloseOnClickInside_setPrototypeOf(o, p) { CloseOnClickInside_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CloseOnClickInside_setPrototypeOf(o, p); }

function CloseOnClickInside_createSuper(Derived) { var hasNativeReflectConstruct = CloseOnClickInside_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CloseOnClickInside_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CloseOnClickInside_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CloseOnClickInside_possibleConstructorReturn(this, result); }; }

function CloseOnClickInside_possibleConstructorReturn(self, call) { if (call && (CloseOnClickInside_typeof(call) === "object" || typeof call === "function")) { return call; } return CloseOnClickInside_assertThisInitialized(self); }

function CloseOnClickInside_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CloseOnClickInside_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CloseOnClickInside_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { CloseOnClickInside_set = Reflect.set; } else { CloseOnClickInside_set = function set(target, property, value, receiver) { var base = CloseOnClickInside_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { CloseOnClickInside_defineProperty(receiver, property, value); } return true; }; } return CloseOnClickInside_set(target, property, value, receiver); }

function Extensions_CloseOnClickInside_set(target, property, value, receiver, isStrict) { var s = CloseOnClickInside_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function CloseOnClickInside_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CloseOnClickInside_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = CloseOnClickInside_getPrototypeOf(object); if (object === null) break; } return object; }

function CloseOnClickInside_getPrototypeOf(o) { CloseOnClickInside_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CloseOnClickInside_getPrototypeOf(o); }





var CloseOnClickInside = /*#__PURE__*/function (_Extension) {
  CloseOnClickInside_inherits(CloseOnClickInside, _Extension);

  var _super = CloseOnClickInside_createSuper(CloseOnClickInside);

  function CloseOnClickInside() {
    var _thisSuper, _this;

    CloseOnClickInside_classCallCheck(this, CloseOnClickInside);

    _this = _super.call(this); // Set extension name

    Extensions_CloseOnClickInside_set((_thisSuper = CloseOnClickInside_assertThisInitialized(_this), CloseOnClickInside_getPrototypeOf(CloseOnClickInside.prototype)), "name", "close on click inside", _thisSuper, true);

    return _this;
  } // Add click event listener


  CloseOnClickInside_createClass(CloseOnClickInside, [{
    key: "onSubscribe",
    value: function onSubscribe(group) {
      var _this2 = this;

      var mainButton = group.buttons[dlv_umd_default()(group, "menuButton", null)];
      Object.values(group.buttons).forEach(function (button) {
        if (mainButton.data.id === button.data.id) return;
        button.element.addEventListener("click", function (event) {
          // Don't close if edit button was clicked
          // Or in preview mode and not holding ctrl key
          if (event.target.className.includes("buttonizer-edit-action") || event.target.parentElement.className.includes("buttonizer-edit-action") || buttonizerInPreview_inPreview() && button.disableClickInPreview) return;

          _this2.notify(group);
        });
      });
    }
  }, {
    key: "notify",
    value: function notify(group) {
      if (group && group.state && group.state.isOpened()) {
        group.state.close();
      }
    }
  }]);

  return CloseOnClickInside;
}(Extension); // Export close on click outside extension


/* harmony default export */ var Extensions_CloseOnClickInside = (new CloseOnClickInside());
;// CONCATENATED MODULE: ./src/js/frontend/Generators/template.js
function Generators_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Generators_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Generators_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) Generators_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) Generators_template_defineProperties(Constructor, staticProps); return Constructor; }



var Generator = /*#__PURE__*/function () {
  function Generator() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Generators_template_classCallCheck(this, Generator);

    this.mobileSingleButton = dlv_umd_default()(obj, "mobileSingleButton", false);
    this.desktopSingleButton = dlv_umd_default()(obj, "desktopSingleButton", false);
  }

  Generators_template_createClass(Generator, [{
    key: "generate",
    value: function generate(group) {
      this.createJss(group, "mobile", group.data.is_menu_mobile, group.data.is_menu_mobile ? group.data.button_size : group.data.group_size);
      this.createJss(group, "desktop", group.data.is_menu_desktop, group.data.is_menu_desktop ? group.data.button_size : group.data.group_size);
    } // Placeholder

  }, {
    key: "createJss",
    value: function createJss() {}
  }]);

  return Generator;
}();


;// CONCATENATED MODULE: ./src/js/frontend/Generators/Hoverer.js
function Hoverer_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hoverer_typeof = function _typeof(obj) { return typeof obj; }; } else { Hoverer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hoverer_typeof(obj); }

function Hoverer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hoverer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hoverer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Hoverer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Hoverer_defineProperties(Constructor, staticProps); return Constructor; }

function Hoverer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Hoverer_setPrototypeOf(subClass, superClass); }

function Hoverer_setPrototypeOf(o, p) { Hoverer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Hoverer_setPrototypeOf(o, p); }

function Hoverer_createSuper(Derived) { var hasNativeReflectConstruct = Hoverer_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Hoverer_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Hoverer_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Hoverer_possibleConstructorReturn(this, result); }; }

function Hoverer_possibleConstructorReturn(self, call) { if (call && (Hoverer_typeof(call) === "object" || typeof call === "function")) { return call; } return Hoverer_assertThisInitialized(self); }

function Hoverer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Hoverer_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Hoverer_getPrototypeOf(o) { Hoverer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Hoverer_getPrototypeOf(o); }



var Hoverer_Hoverer = /*#__PURE__*/function (_Generator) {
  Hoverer_inherits(Hoverer, _Generator);

  var _super = Hoverer_createSuper(Hoverer);

  function Hoverer(func) {
    var _this;

    Hoverer_classCallCheck(this, Hoverer);

    _this = _super.call(this);
    _this.callback = func;
    return _this;
  }

  Hoverer_createClass(Hoverer, [{
    key: "generate",
    value: function generate(button) {
      var _this2 = this;

      button.element.addEventListener("mouseover", function () {
        return _this2.callback(true);
      });
      button.element.addEventListener("mouseout", function () {
        return _this2.callback(false);
      });
    }
  }]);

  return Hoverer;
}(Generator);


// EXTERNAL MODULE: ./src/js/utils/buttonizer-defaults/index.js
var buttonizer_defaults = __webpack_require__(42226);
var buttonizer_defaults_default = /*#__PURE__*/__webpack_require__.n(buttonizer_defaults);
;// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Icon.js
function Icon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Icon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Icon_createClass(Constructor, protoProps, staticProps) { if (protoProps) Icon_defineProperties(Constructor.prototype, protoProps); if (staticProps) Icon_defineProperties(Constructor, staticProps); return Constructor; }





var Icon = /*#__PURE__*/function () {
  function Icon(_ref) {
    var data = _ref.data,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        stylesheet = _ref.stylesheet;

    Icon_classCallCheck(this, Icon);

    this.data = data;
    this.generators = generators;
    this.stylesheet = stylesheet;
  }

  Icon_createClass(Icon, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.element = document.createElement("i");
      this.element.setAttribute("aria-hidden", "true");
      this.JSS = {
        icon: {
          color: this.data.icon_color[0],
          "font-size": this.data.icon_size[0]
        },
        button: {
          "&:hover": {
            "& $icon": {
              color: this.data.icon_color[1],
              "font-size": this.data.icon_size[1] == null ? this.data.icon_size[0] : this.data.icon_size[1]
            }
          }
        }
      };
      this.element.className = clsx_m(this.data.icon[0] || (buttonizer_defaults_default())[this.data.model].icon[0], this.stylesheet.classes.icon);
      if (this.data.icon[1]) this.generators.push(new Hoverer_Hoverer(function (b) {
        return _this.setHoverIcon(b);
      }));
      return this;
    }
  }, {
    key: "setHoverIcon",
    value: function setHoverIcon(hover) {
      if (hover) {
        this.element.className = clsx_m(this.data.icon[1], this.stylesheet.classes.icon);
      } else {
        this.element.className = clsx_m(this.data.icon[0] || (buttonizer_defaults_default())[this.data.model].icon[0], this.stylesheet.classes.icon);
      }
    }
  }]);

  return Icon;
}();


;// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Image.js
function Image_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Image_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Image_createClass(Constructor, protoProps, staticProps) { if (protoProps) Image_defineProperties(Constructor.prototype, protoProps); if (staticProps) Image_defineProperties(Constructor, staticProps); return Constructor; }




var Image = /*#__PURE__*/(/* unused pure expression or super */ null && (function () {
  function Image(_ref) {
    var data = _ref.data,
        _ref$generators = _ref.generators,
        generators = _ref$generators === void 0 ? [] : _ref$generators,
        stylesheet = _ref.stylesheet;

    Image_classCallCheck(this, Image);

    this.data = data;
    this.generators = generators;
    this.stylesheet = stylesheet;
  }

  Image_createClass(Image, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.element = document.createElement("img");
      this.stylesheet.update({
        image: {
          width: this.data.icon_image_size[0],
          "border-radius": this.data.icon_image_border_radius[0]
        },
        button: {
          "&:hover": {
            "& $image": {
              width: this.data.icon_image_size[1],
              "border-radius": this.data.icon_image_border_radius[1]
            }
          }
        }
      });
      this.element.src = this.data.icon_image[0];
      this.element.className = clsx(this.stylesheet.classes.image);
      if (this.data.icon_image[1]) this.generators.push(new Hoverer(function (b) {
        return _this.setHoverImage(b);
      }));
      return this;
    }
  }, {
    key: "setHoverImage",
    value: function setHoverImage(hover) {
      if (hover) {
        this.element.src = this.data.icon_image[1];
      } else {
        this.element.src = this.data.icon_image[0];
      }
    }
  }]);

  return Image;
}()));


;// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Label.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Label_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Label_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Label_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Label_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Label_createClass(Constructor, protoProps, staticProps) { if (protoProps) Label_defineProperties(Constructor.prototype, protoProps); if (staticProps) Label_defineProperties(Constructor, staticProps); return Constructor; }





var Label = /*#__PURE__*/function () {
  function Label(_ref) {
    var data = _ref.data,
        stylesheet = _ref.stylesheet;

    Label_classCallCheck(this, Label);

    this.data = data;
    this.stylesheet = stylesheet;
    this.element = document.createElement("div");
    this.generators = [];
    this.JSS = {};
  }

  Label_createClass(Label, [{
    key: "render",
    value: function render() {
      // Add label text in element
      this.element.innerText = this.data.label;
      this.setJSS(); // Add className

      this.element.className = clsx_m(this.element.className, "buttonizer-label", this.stylesheet.classes.label);
      this.element.id = this.stylesheet.classes.button + "-label";
      return this;
    }
  }, {
    key: "setJSS",
    value: function setJSS() {
      var _label;

      // Get horizontal position data
      var horizontalProperty = this.data.horizontal_position_label === "auto" ? this.data.horizontal[0] : this.data.horizontal_position_label;
      this.JSS = {
        label: (_label = {
          color: this.data.label_color[0],
          background: this.data.label_background_color[0],
          "font-size": this.data.label_font_size[0]
        }, Label_defineProperty(_label, horizontalProperty, this.data.label_spacing + (this.data.label_inside ? 0 : this.data.button_size)), Label_defineProperty(_label, "border-radius", this.data.label_border_radius[0]), Label_defineProperty(_label, "text-align", this.data.horizontal[0] === "right" ? "end" : "start"), _label),
        button: {
          "&:hover": {
            "& $label": {
              color: this.data.label_color[1],
              background: this.data.label_background_color[1]
            }
          }
        }
      };

      if (this.data.label_box_shadow_enabled[0] === false) {
        merge_default()(this.JSS, {
          label: {
            "box-shadow": "none"
          }
        });
      }

      if (dlv_umd_default()(this.data.label_box_shadow_enabled, "1", this.data.label_box_shadow_enabled[0]) === false) {
        merge_default()(this.JSS, {
          button: {
            "&:hover": {
              "& $label": {
                "box-shadow": "none"
              }
            }
          }
        });
      }

      merge_default()(this.JSS, {
        label: _objectSpread({}, this.boxShadow(0)),
        button: {
          "&:hover": {
            "& $label": _objectSpread({}, this.boxShadow(1))
          }
        }
      });
      /* webpack-strip-block:removed */

      if (!this.data.is_menu_desktop) {
        this.setMenuStyling("desktop");
      }

      if (!this.data.is_menu_mobile) {
        this.setMenuStyling("mobile");
      } // If visibility is set to hide, display block. If set on hover, display block on hover.


      if (!this.data.label_inside) {
        this.data.show_label_desktop === "always" && this.setShow("desktop");
        this.data.show_label_desktop === "hide" && this.setHide("desktop");
        this.data.show_label_desktop === "hover" && this.setHover();
        this.data.show_label_mobile === "always" && this.setShow("mobile");
        this.data.show_label_mobile === "hide" && this.setHide("mobile");
      }

      return this.JSS;
    }
  }, {
    key: "setMenuStyling",
    value: function setMenuStyling(device) {
      var horizontalProperty = this.data.horizontal_position_label === "auto" ? this.data.horizontal[0] : this.data.horizontal_position_label;
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        label: Label_defineProperty({}, "@media screen and (".concat(size, ")"), Label_defineProperty({}, horizontalProperty, this.data.label_spacing + (this.data.label_inside ? 0 : this.data.group_size)))
      });
    }
  }, {
    key: "setShow",
    value: function setShow(device) {
      // Does it need to use on desktop only or mobile?
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.JSS = merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (".concat(size, ")"), {
          opacity: 1,
          visibility: "visible"
        })
      });
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      // Does it need to use on desktop only or mobile?
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (".concat(size, ")"), {
          opacity: 0,
          visibility: "hidden"
        })
      });
    }
  }, {
    key: "setHover",
    value: function setHover() {
      merge_default()(this.JSS, {
        label: Label_defineProperty({}, "@media screen and (min-width: 770px)", {
          opacity: 0,
          visibility: "hidden"
        }),
        button: Label_defineProperty({}, "@media screen and (min-width: 770px)", Label_defineProperty({}, "&:hover $label", {
          opacity: 1,
          visibility: "visible"
        }))
      });
    }
  }, {
    key: "hasBoxShadow",
    value: function hasBoxShadow() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (normal_hover === 1) return (// should have image, great
        this.data.label_box_shadow_enabled[1] === true || this.data.label_box_shadow_enabled[0] === true && this.data.label_box_shadow_enabled[1] == null
      );
      return (// should have image, great
        this.data.label_box_shadow_enabled[0] === true
      );
    }
  }, {
    key: "boxShadow",
    value: function boxShadow() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.data.label_box_shadow) {
        var shadow = this.data.label_box_shadow[normal_hover];
        if (shadow == null) return {};
        if (this.hasBoxShadow(normal_hover)) return {
          "box-shadow": shadow
        };
        return {};
      }

      return {};
    }
  }]);

  return Label;
}();


;// CONCATENATED MODULE: ./src/js/frontend/Actions/template.js
function Actions_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Actions_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Actions_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) Actions_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) Actions_template_defineProperties(Constructor, staticProps); return Constructor; }

var Action = /*#__PURE__*/function () {
  function Action(data, button, stylesheet, groupId) {
    Actions_template_classCallCheck(this, Action);

    this.data = data;
    this.button = button;
    this.stylesheet = stylesheet;
    this.groupId = groupId;
  }

  Actions_template_createClass(Action, [{
    key: "execute",
    value: function execute() {// Do nothing
    }
  }, {
    key: "addAttr",
    value: function addAttr() {
      return {
        attr: "href",
        val: "javascript:void(0)"
      };
    }
  }]);

  return Action;
}();


// EXTERNAL MODULE: ./node_modules/validator/lib/isURL.js
var isURL = __webpack_require__(66823);
var isURL_default = /*#__PURE__*/__webpack_require__.n(isURL);
;// CONCATENATED MODULE: ./src/js/utils/isValidURL.js

function isValidURL(value) {
  return isURL_default()(value, {
    protocols: ["http", "https"],
    require_tld: false,
    require_host: false
  }) || value.substr(0, 1) === "#";
}
;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/WebsiteUrl.js
function WebsiteUrl_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WebsiteUrl_typeof = function _typeof(obj) { return typeof obj; }; } else { WebsiteUrl_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WebsiteUrl_typeof(obj); }

function WebsiteUrl_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WebsiteUrl_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WebsiteUrl_createClass(Constructor, protoProps, staticProps) { if (protoProps) WebsiteUrl_defineProperties(Constructor.prototype, protoProps); if (staticProps) WebsiteUrl_defineProperties(Constructor, staticProps); return Constructor; }

function WebsiteUrl_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WebsiteUrl_setPrototypeOf(subClass, superClass); }

function WebsiteUrl_setPrototypeOf(o, p) { WebsiteUrl_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WebsiteUrl_setPrototypeOf(o, p); }

function WebsiteUrl_createSuper(Derived) { var hasNativeReflectConstruct = WebsiteUrl_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WebsiteUrl_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WebsiteUrl_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WebsiteUrl_possibleConstructorReturn(this, result); }; }

function WebsiteUrl_possibleConstructorReturn(self, call) { if (call && (WebsiteUrl_typeof(call) === "object" || typeof call === "function")) { return call; } return WebsiteUrl_assertThisInitialized(self); }

function WebsiteUrl_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WebsiteUrl_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function WebsiteUrl_getPrototypeOf(o) { WebsiteUrl_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WebsiteUrl_getPrototypeOf(o); }





var WebsiteUrl = /*#__PURE__*/function (_Action) {
  WebsiteUrl_inherits(WebsiteUrl, _Action);

  var _super = WebsiteUrl_createSuper(WebsiteUrl);

  function WebsiteUrl() {
    WebsiteUrl_classCallCheck(this, WebsiteUrl);

    return _super.apply(this, arguments);
  }

  WebsiteUrl_createClass(WebsiteUrl, [{
    key: "openPopup",
    value: function openPopup(myURL, title, myWidth, myHeight) {
      var left = (screen.width - myWidth) / 2;
      var top = (screen.height - myHeight) / 4;
      window.open(myURL, title, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + myWidth + ", height=" + myHeight + ", top=" + top + ", left=" + left);
    }
  }, {
    key: "fullScreenWindow",
    value: function fullScreenWindow(url) {
      var fullScreen = window.open(url, "_blank", "fullscreen");

      if (fullScreen.outerWidth < screen.availWidth || fullScreen.outerHeight < screen.availHeight) {
        fullScreen.moveTo(0, 0);
        fullScreen.resizeTo(screen.availWidth, screen.availHeight);
      }
    }
  }, {
    key: "addAttr",
    value: function addAttr() {
      // Add rel attribute to the button
      if (dlv_umd_default()(this.data, "action_rel_attributes", false)) {
        this.button.setAttribute("rel", this.data.action_rel_attributes);
      } // Add target attribute to the button


      if (dlv_umd_default()(this.data, "action_new_tab", false)) {
        if (!["_newWindow", "_popupWindow"].includes(this.data.action_new_tab)) this.button.setAttribute("target", this.data.action_new_tab === true ? "_blank" : this.data.action_new_tab); // don't include href if it is opened in a new window
        else return;
      } // Add download attribute to the button


      if (dlv_umd_default()(this.data, "type", "url") === "download") {
        this.button.setAttribute("download", "");
        this.button.setAttribute("target", "_blank");
      }

      var url = dlv_umd_default()(this.data, "action", "#"); // Stop any kind of XSS

      if (!isValidURL(url)) {
        console.error("Buttonizer: Sorry, we have blocked your URL '".concat(url, "' for security reasons."));
        return;
      }

      return {
        attr: "href",
        val: url
      };
    }
  }, {
    key: "execute",
    value: function execute() {
      if (dlv_umd_default()(this.data, "action_new_tab", false)) {
        if (this.data.action_new_tab === "_newWindow") this.fullScreenWindow(this.data.action);
        if (this.data.action_new_tab === "_popupWindow") this.openPopup(this.data.action, "_blank", 640, 480);
      }
    }
  }]);

  return WebsiteUrl;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Phone.js
function Phone_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Phone_typeof = function _typeof(obj) { return typeof obj; }; } else { Phone_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Phone_typeof(obj); }

function Phone_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Phone_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Phone_createClass(Constructor, protoProps, staticProps) { if (protoProps) Phone_defineProperties(Constructor.prototype, protoProps); if (staticProps) Phone_defineProperties(Constructor, staticProps); return Constructor; }

function Phone_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Phone_setPrototypeOf(subClass, superClass); }

function Phone_setPrototypeOf(o, p) { Phone_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Phone_setPrototypeOf(o, p); }

function Phone_createSuper(Derived) { var hasNativeReflectConstruct = Phone_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Phone_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Phone_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Phone_possibleConstructorReturn(this, result); }; }

function Phone_possibleConstructorReturn(self, call) { if (call && (Phone_typeof(call) === "object" || typeof call === "function")) { return call; } return Phone_assertThisInitialized(self); }

function Phone_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Phone_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Phone_getPrototypeOf(o) { Phone_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Phone_getPrototypeOf(o); }



var Phone = /*#__PURE__*/function (_Action) {
  Phone_inherits(Phone, _Action);

  var _super = Phone_createSuper(Phone);

  function Phone() {
    Phone_classCallCheck(this, Phone);

    return _super.apply(this, arguments);
  }

  Phone_createClass(Phone, [{
    key: "addAttr",
    value: function addAttr() {
      return {
        attr: "href",
        val: "tel:".concat(this.data.action || "000000000000")
      };
    }
  }]);

  return Phone;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Mail.js
function Mail_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Mail_typeof = function _typeof(obj) { return typeof obj; }; } else { Mail_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Mail_typeof(obj); }

function Mail_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Mail_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Mail_createClass(Constructor, protoProps, staticProps) { if (protoProps) Mail_defineProperties(Constructor.prototype, protoProps); if (staticProps) Mail_defineProperties(Constructor, staticProps); return Constructor; }

function Mail_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Mail_setPrototypeOf(subClass, superClass); }

function Mail_setPrototypeOf(o, p) { Mail_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Mail_setPrototypeOf(o, p); }

function Mail_createSuper(Derived) { var hasNativeReflectConstruct = Mail_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Mail_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Mail_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Mail_possibleConstructorReturn(this, result); }; }

function Mail_possibleConstructorReturn(self, call) { if (call && (Mail_typeof(call) === "object" || typeof call === "function")) { return call; } return Mail_assertThisInitialized(self); }

function Mail_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Mail_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Mail_getPrototypeOf(o) { Mail_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Mail_getPrototypeOf(o); }




var Mail = /*#__PURE__*/function (_Action) {
  Mail_inherits(Mail, _Action);

  var _super = Mail_createSuper(Mail);

  function Mail() {
    Mail_classCallCheck(this, Mail);

    return _super.apply(this, arguments);
  }

  Mail_createClass(Mail, [{
    key: "execute",
    value: function execute() {
      var parameters = ""; // Add subject if the subject parameter exists

      if (dlv_umd_default()(this.data, "text_subject", false)) {
        parameters += "?subject=".concat(encodeURIComponent(this.data.text_subject || "Subject"));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_body", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "body=").concat(encodeURIComponent(this.data.text_body));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_cc", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "cc=").concat(encodeURIComponent(this.data.text_cc));
      } // Add body if the body parameter exists


      if (dlv_umd_default()(this.data, "text_bcc", false)) {
        parameters += "".concat(parameters !== "" ? "&" : "?", "bcc=").concat(encodeURIComponent(this.data.text_bcc));
      }

      window.location.href = "mailto:".concat(this.data.action).concat(parameters);
    }
  }]);

  return Mail;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/WhatsAppChat.js
function WhatsAppChat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WhatsAppChat_typeof = function _typeof(obj) { return typeof obj; }; } else { WhatsAppChat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WhatsAppChat_typeof(obj); }

function WhatsAppChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WhatsAppChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WhatsAppChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) WhatsAppChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) WhatsAppChat_defineProperties(Constructor, staticProps); return Constructor; }

function WhatsAppChat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WhatsAppChat_setPrototypeOf(subClass, superClass); }

function WhatsAppChat_setPrototypeOf(o, p) { WhatsAppChat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WhatsAppChat_setPrototypeOf(o, p); }

function WhatsAppChat_createSuper(Derived) { var hasNativeReflectConstruct = WhatsAppChat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WhatsAppChat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WhatsAppChat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WhatsAppChat_possibleConstructorReturn(this, result); }; }

function WhatsAppChat_possibleConstructorReturn(self, call) { if (call && (WhatsAppChat_typeof(call) === "object" || typeof call === "function")) { return call; } return WhatsAppChat_assertThisInitialized(self); }

function WhatsAppChat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WhatsAppChat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function WhatsAppChat_getPrototypeOf(o) { WhatsAppChat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WhatsAppChat_getPrototypeOf(o); }




var WhatsAppChat = /*#__PURE__*/function (_Action) {
  WhatsAppChat_inherits(WhatsAppChat, _Action);

  var _super = WhatsAppChat_createSuper(WhatsAppChat);

  function WhatsAppChat() {
    WhatsAppChat_classCallCheck(this, WhatsAppChat);

    return _super.apply(this, arguments);
  }

  WhatsAppChat_createClass(WhatsAppChat, [{
    key: "execute",
    value: function execute() {
      var whatsapp = "https://wa.me/".concat(this.data.action); // Add whatsapp body

      if (dlv_umd_default()(this.data, "text_body", false)) {
        whatsapp += "?text=".concat(encodeURIComponent(this.data.text_body));
      }

      window.open(whatsapp);
    }
  }]);

  return WhatsAppChat;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Utils/sliding-scroll.js
/*
 * Source: https://github.com/Robbendebiene/Sliding-Scroll/
 * y: the y coordinate to scroll, 0 = top
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * element: the html element that should be scrolled ; default is the main scrolling element
 */
function scrollToY(y) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.scrollingElement;
  // cancel if already on target position
  if (element.scrollTop === y) return;
  var cosParameter = (element.scrollTop - y) / 2;
  var scrollCount = 0,
      oldTimestamp = null;

  function step(newTimestamp) {
    if (oldTimestamp !== null) {
      // if duration is 0 scrollCount will be Infinity
      scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
      if (scrollCount >= Math.PI) return element.scrollTop = y;
      element.scrollTop = cosParameter + y + cosParameter * Math.cos(scrollCount);
    }

    oldTimestamp = newTimestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}
/*
 * id: the id of the element as a string that should be scrolled to
 * duration: scroll duration in milliseconds; default is 0 (no transition)
 * this function is using the scrollToY function on the main scrolling element
 */

function scrollToId(id) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var offset = Math.round(document.getElementById(id).getBoundingClientRect().top);
  scrollToY(document.scrollingElement.scrollTop + offset, duration);
}
;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/BackToTop.js
function BackToTop_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BackToTop_typeof = function _typeof(obj) { return typeof obj; }; } else { BackToTop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BackToTop_typeof(obj); }

function BackToTop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BackToTop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BackToTop_createClass(Constructor, protoProps, staticProps) { if (protoProps) BackToTop_defineProperties(Constructor.prototype, protoProps); if (staticProps) BackToTop_defineProperties(Constructor, staticProps); return Constructor; }

function BackToTop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BackToTop_setPrototypeOf(subClass, superClass); }

function BackToTop_setPrototypeOf(o, p) { BackToTop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BackToTop_setPrototypeOf(o, p); }

function BackToTop_createSuper(Derived) { var hasNativeReflectConstruct = BackToTop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BackToTop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BackToTop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BackToTop_possibleConstructorReturn(this, result); }; }

function BackToTop_possibleConstructorReturn(self, call) { if (call && (BackToTop_typeof(call) === "object" || typeof call === "function")) { return call; } return BackToTop_assertThisInitialized(self); }

function BackToTop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BackToTop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function BackToTop_getPrototypeOf(o) { BackToTop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BackToTop_getPrototypeOf(o); }




var BackToTop = /*#__PURE__*/function (_Action) {
  BackToTop_inherits(BackToTop, _Action);

  var _super = BackToTop_createSuper(BackToTop);

  function BackToTop() {
    BackToTop_classCallCheck(this, BackToTop);

    return _super.apply(this, arguments);
  }

  BackToTop_createClass(BackToTop, [{
    key: "execute",
    value: function execute() {
      scrollToY(0, 1000);
    }
  }]);

  return BackToTop;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/GoToBottom.js
function GoToBottom_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoToBottom_typeof = function _typeof(obj) { return typeof obj; }; } else { GoToBottom_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoToBottom_typeof(obj); }

function GoToBottom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoToBottom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoToBottom_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoToBottom_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoToBottom_defineProperties(Constructor, staticProps); return Constructor; }

function GoToBottom_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoToBottom_setPrototypeOf(subClass, superClass); }

function GoToBottom_setPrototypeOf(o, p) { GoToBottom_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoToBottom_setPrototypeOf(o, p); }

function GoToBottom_createSuper(Derived) { var hasNativeReflectConstruct = GoToBottom_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GoToBottom_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GoToBottom_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GoToBottom_possibleConstructorReturn(this, result); }; }

function GoToBottom_possibleConstructorReturn(self, call) { if (call && (GoToBottom_typeof(call) === "object" || typeof call === "function")) { return call; } return GoToBottom_assertThisInitialized(self); }

function GoToBottom_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoToBottom_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GoToBottom_getPrototypeOf(o) { GoToBottom_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoToBottom_getPrototypeOf(o); }




var GoToBottom = /*#__PURE__*/function (_Action) {
  GoToBottom_inherits(GoToBottom, _Action);

  var _super = GoToBottom_createSuper(GoToBottom);

  function GoToBottom() {
    GoToBottom_classCallCheck(this, GoToBottom);

    return _super.apply(this, arguments);
  }

  GoToBottom_createClass(GoToBottom, [{
    key: "execute",
    value: function execute() {
      scrollToY(Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight), 1000);
    }
  }]);

  return GoToBottom;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/GoBackPage.js
function GoBackPage_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoBackPage_typeof = function _typeof(obj) { return typeof obj; }; } else { GoBackPage_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoBackPage_typeof(obj); }

function GoBackPage_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GoBackPage_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GoBackPage_createClass(Constructor, protoProps, staticProps) { if (protoProps) GoBackPage_defineProperties(Constructor.prototype, protoProps); if (staticProps) GoBackPage_defineProperties(Constructor, staticProps); return Constructor; }

function GoBackPage_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GoBackPage_setPrototypeOf(subClass, superClass); }

function GoBackPage_setPrototypeOf(o, p) { GoBackPage_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GoBackPage_setPrototypeOf(o, p); }

function GoBackPage_createSuper(Derived) { var hasNativeReflectConstruct = GoBackPage_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GoBackPage_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GoBackPage_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GoBackPage_possibleConstructorReturn(this, result); }; }

function GoBackPage_possibleConstructorReturn(self, call) { if (call && (GoBackPage_typeof(call) === "object" || typeof call === "function")) { return call; } return GoBackPage_assertThisInitialized(self); }

function GoBackPage_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GoBackPage_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GoBackPage_getPrototypeOf(o) { GoBackPage_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GoBackPage_getPrototypeOf(o); }



var GoBackPage = /*#__PURE__*/function (_Action) {
  GoBackPage_inherits(GoBackPage, _Action);

  var _super = GoBackPage_createSuper(GoBackPage);

  function GoBackPage() {
    GoBackPage_classCallCheck(this, GoBackPage);

    return _super.apply(this, arguments);
  }

  GoBackPage_createClass(GoBackPage, [{
    key: "execute",
    value: function execute() {
      window.history.back();
    }
  }]);

  return GoBackPage;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Utils/messageAdminEditor.js
/**
 * Feature to message the admin buttonizer editor
 *
 * @param message
 */
function messageButtonizerAdminEditor(type, message) {
  try {
    window.parent.postMessage({
      eventType: "buttonizer",
      messageType: type,
      message: message
    }, document.location.origin);
  } catch (e) {
    console.error("Buttonizer tried to warn you in the front-end editor. But the message didn't came through. Well. Doesn't matter, it's just an extra function. It's nice to have.");
    console.error(e);
  }
}
;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/JavaScriptPro.js
function JavaScriptPro_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { JavaScriptPro_typeof = function _typeof(obj) { return typeof obj; }; } else { JavaScriptPro_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return JavaScriptPro_typeof(obj); }

function JavaScriptPro_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function JavaScriptPro_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function JavaScriptPro_createClass(Constructor, protoProps, staticProps) { if (protoProps) JavaScriptPro_defineProperties(Constructor.prototype, protoProps); if (staticProps) JavaScriptPro_defineProperties(Constructor, staticProps); return Constructor; }

function JavaScriptPro_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) JavaScriptPro_setPrototypeOf(subClass, superClass); }

function JavaScriptPro_setPrototypeOf(o, p) { JavaScriptPro_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return JavaScriptPro_setPrototypeOf(o, p); }

function JavaScriptPro_createSuper(Derived) { var hasNativeReflectConstruct = JavaScriptPro_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = JavaScriptPro_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = JavaScriptPro_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return JavaScriptPro_possibleConstructorReturn(this, result); }; }

function JavaScriptPro_possibleConstructorReturn(self, call) { if (call && (JavaScriptPro_typeof(call) === "object" || typeof call === "function")) { return call; } return JavaScriptPro_assertThisInitialized(self); }

function JavaScriptPro_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function JavaScriptPro_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function JavaScriptPro_getPrototypeOf(o) { JavaScriptPro_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return JavaScriptPro_getPrototypeOf(o); }




var JavaScriptPro = /*#__PURE__*/function (_Action) {
  JavaScriptPro_inherits(JavaScriptPro, _Action);

  var _super = JavaScriptPro_createSuper(JavaScriptPro);

  function JavaScriptPro() {
    JavaScriptPro_classCallCheck(this, JavaScriptPro);

    return _super.apply(this, arguments);
  }

  JavaScriptPro_createClass(JavaScriptPro, [{
    key: "execute",
    value: function execute() {
      // Disable action on standalone
      if (window.Buttonizer.isStandalone() || this.data.action === "") return;

      try {
        Function('"use strict";console.log("BZ - Run");' + decodeURIComponent(this.data.action) + ';console.log("BZ - Finish");')();
      } catch (e) {
        console.error("Buttonizer error: " + e.message);
        messageButtonizerAdminEditor("javascript_error", e.message);
      }
    }
  }]);

  return JavaScriptPro;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Sms.js
function Sms_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Sms_typeof = function _typeof(obj) { return typeof obj; }; } else { Sms_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Sms_typeof(obj); }

function Sms_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sms_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sms_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sms_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sms_defineProperties(Constructor, staticProps); return Constructor; }

function Sms_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Sms_setPrototypeOf(subClass, superClass); }

function Sms_setPrototypeOf(o, p) { Sms_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Sms_setPrototypeOf(o, p); }

function Sms_createSuper(Derived) { var hasNativeReflectConstruct = Sms_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Sms_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Sms_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Sms_possibleConstructorReturn(this, result); }; }

function Sms_possibleConstructorReturn(self, call) { if (call && (Sms_typeof(call) === "object" || typeof call === "function")) { return call; } return Sms_assertThisInitialized(self); }

function Sms_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Sms_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Sms_getPrototypeOf(o) { Sms_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Sms_getPrototypeOf(o); }




var Sms = /*#__PURE__*/function (_Action) {
  Sms_inherits(Sms, _Action);

  var _super = Sms_createSuper(Sms);

  function Sms() {
    Sms_classCallCheck(this, Sms);

    return _super.apply(this, arguments);
  }

  Sms_createClass(Sms, [{
    key: "execute",
    value: function execute() {
      var sms = "sms:".concat(this.data.action); // Add SMS body

      if (dlv_umd_default()(this.data, "text_body", false)) {
        sms += ";?&body=".concat(encodeURIComponent(this.data.text_body));
      }

      window.location.href = sms;
    }
  }]);

  return Sms;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/MessengerChat.js
function MessengerChat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerChat_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerChat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerChat_typeof(obj); }

function MessengerChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerChat_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerChat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerChat_setPrototypeOf(subClass, superClass); }

function MessengerChat_setPrototypeOf(o, p) { MessengerChat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerChat_setPrototypeOf(o, p); }

function MessengerChat_createSuper(Derived) { var hasNativeReflectConstruct = MessengerChat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MessengerChat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MessengerChat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerChat_possibleConstructorReturn(this, result); }; }

function MessengerChat_possibleConstructorReturn(self, call) { if (call && (MessengerChat_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerChat_assertThisInitialized(self); }

function MessengerChat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerChat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function MessengerChat_getPrototypeOf(o) { MessengerChat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerChat_getPrototypeOf(o); }




var MessengerChat = /*#__PURE__*/function (_Action) {
  MessengerChat_inherits(MessengerChat, _Action);

  var _super = MessengerChat_createSuper(MessengerChat);

  function MessengerChat() {
    MessengerChat_classCallCheck(this, MessengerChat);

    return _super.apply(this, arguments);
  }

  MessengerChat_createClass(MessengerChat, [{
    key: "execute",
    value: function execute() {
      var _this = this;

      if (typeof window.Buttonizer.initializedFacebookChat !== "undefined") {
        // FB Widget is still loading in
        if (document.querySelectorAll(".buttonizer-facebook-messenger-loading").length > 0) {
          if (this.button.querySelector("[class*=buttonizer-icon]")) {
            this.button.querySelector("[class*=buttonizer-icon]").classList = clsx_m(this.stylesheet.classes.icon, "fas fa-spinner buttonizer-spin");
            var amountFailed = 0;

            var loadMessenger = function loadMessenger() {
              _this.button.querySelector("[class*=buttonizer-icon]").classList = clsx_m(_this.stylesheet.classes.icon, _this.data.icon);
              FB.CustomerChat.showDialog();
            };

            var FBWidgetLoading = setInterval(function () {
              if (document.querySelectorAll(".buttonizer-facebook-messenger-loading").length === 0 && document.querySelectorAll(".fb_iframe_widget").length > 0) {
                loadMessenger();
                clearInterval(FBWidgetLoading);
                return;
              }

              amountFailed++;

              if (amountFailed > 70) {
                console.error("Buttonizer: Sorry, we were unable to open Facebook Messenger! Take a screenshot of the console above and send it to us.");
                _this.button.querySelector("[class*=buttonizer-icon]").classList = clsx_m(_this.stylesheet.classes.icon, _this.data.icon);
                clearInterval(FBWidgetLoading);
              }
            }, 250);
          }

          return;
        } // Show widget


        FB.CustomerChat.showDialog();
      } else {
        if (window.Buttonizer.previewInitialized) {
          window.Buttonizer.messageButtonizerAdminEditor("warning", "Facebook Messenger button is not found, it may be blocked or this domain is not allowed to load the Facebook widget.");
        }
      }
    }
  }]);

  return MessengerChat;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/MessengerLink.js
function MessengerLink_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerLink_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerLink_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerLink_typeof(obj); }

function MessengerLink_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerLink_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerLink_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerLink_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerLink_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerLink_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerLink_setPrototypeOf(subClass, superClass); }

function MessengerLink_setPrototypeOf(o, p) { MessengerLink_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerLink_setPrototypeOf(o, p); }

function MessengerLink_createSuper(Derived) { var hasNativeReflectConstruct = MessengerLink_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MessengerLink_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MessengerLink_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerLink_possibleConstructorReturn(this, result); }; }

function MessengerLink_possibleConstructorReturn(self, call) { if (call && (MessengerLink_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerLink_assertThisInitialized(self); }

function MessengerLink_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerLink_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function MessengerLink_getPrototypeOf(o) { MessengerLink_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerLink_getPrototypeOf(o); }



var MessengerLink = /*#__PURE__*/function (_Action) {
  MessengerLink_inherits(MessengerLink, _Action);

  var _super = MessengerLink_createSuper(MessengerLink);

  function MessengerLink() {
    MessengerLink_classCallCheck(this, MessengerLink);

    return _super.apply(this, arguments);
  }

  MessengerLink_createClass(MessengerLink, [{
    key: "execute",
    value: function execute() {
      window.open(this.data.action);
    }
  }]);

  return MessengerLink;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/TwitterDm.js
function TwitterDm_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TwitterDm_typeof = function _typeof(obj) { return typeof obj; }; } else { TwitterDm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TwitterDm_typeof(obj); }

function TwitterDm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TwitterDm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TwitterDm_createClass(Constructor, protoProps, staticProps) { if (protoProps) TwitterDm_defineProperties(Constructor.prototype, protoProps); if (staticProps) TwitterDm_defineProperties(Constructor, staticProps); return Constructor; }

function TwitterDm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TwitterDm_setPrototypeOf(subClass, superClass); }

function TwitterDm_setPrototypeOf(o, p) { TwitterDm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TwitterDm_setPrototypeOf(o, p); }

function TwitterDm_createSuper(Derived) { var hasNativeReflectConstruct = TwitterDm_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TwitterDm_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TwitterDm_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TwitterDm_possibleConstructorReturn(this, result); }; }

function TwitterDm_possibleConstructorReturn(self, call) { if (call && (TwitterDm_typeof(call) === "object" || typeof call === "function")) { return call; } return TwitterDm_assertThisInitialized(self); }

function TwitterDm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TwitterDm_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function TwitterDm_getPrototypeOf(o) { TwitterDm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TwitterDm_getPrototypeOf(o); }




var TwitterDm = /*#__PURE__*/function (_Action) {
  TwitterDm_inherits(TwitterDm, _Action);

  var _super = TwitterDm_createSuper(TwitterDm);

  function TwitterDm() {
    TwitterDm_classCallCheck(this, TwitterDm);

    return _super.apply(this, arguments);
  }

  TwitterDm_createClass(TwitterDm, [{
    key: "execute",
    value: function execute() {
      var body = dlv_umd_default()(this.data, "body", null);
      var dms = "https://twitter.com/messages/compose?recipient_id=".concat(this.data.action).concat(body ? "&text=" + encodeURIComponent(body) : "");
      window.open(dms);
    }
  }]);

  return TwitterDm;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Skype.js
function Skype_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Skype_typeof = function _typeof(obj) { return typeof obj; }; } else { Skype_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Skype_typeof(obj); }

function Skype_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Skype_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Skype_createClass(Constructor, protoProps, staticProps) { if (protoProps) Skype_defineProperties(Constructor.prototype, protoProps); if (staticProps) Skype_defineProperties(Constructor, staticProps); return Constructor; }

function Skype_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Skype_setPrototypeOf(subClass, superClass); }

function Skype_setPrototypeOf(o, p) { Skype_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Skype_setPrototypeOf(o, p); }

function Skype_createSuper(Derived) { var hasNativeReflectConstruct = Skype_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Skype_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Skype_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Skype_possibleConstructorReturn(this, result); }; }

function Skype_possibleConstructorReturn(self, call) { if (call && (Skype_typeof(call) === "object" || typeof call === "function")) { return call; } return Skype_assertThisInitialized(self); }

function Skype_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Skype_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Skype_getPrototypeOf(o) { Skype_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Skype_getPrototypeOf(o); }



var Skype = /*#__PURE__*/function (_Action) {
  Skype_inherits(Skype, _Action);

  var _super = Skype_createSuper(Skype);

  function Skype() {
    Skype_classCallCheck(this, Skype);

    return _super.apply(this, arguments);
  }

  Skype_createClass(Skype, [{
    key: "execute",
    value: function execute() {
      window.location.href = "skype:".concat(this.data.action, "?chat");
    }
  }]);

  return Skype;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Line.js
function Line_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Line_typeof = function _typeof(obj) { return typeof obj; }; } else { Line_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Line_typeof(obj); }

function Line_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Line_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Line_createClass(Constructor, protoProps, staticProps) { if (protoProps) Line_defineProperties(Constructor.prototype, protoProps); if (staticProps) Line_defineProperties(Constructor, staticProps); return Constructor; }

function Line_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Line_setPrototypeOf(subClass, superClass); }

function Line_setPrototypeOf(o, p) { Line_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Line_setPrototypeOf(o, p); }

function Line_createSuper(Derived) { var hasNativeReflectConstruct = Line_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Line_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Line_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Line_possibleConstructorReturn(this, result); }; }

function Line_possibleConstructorReturn(self, call) { if (call && (Line_typeof(call) === "object" || typeof call === "function")) { return call; } return Line_assertThisInitialized(self); }

function Line_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Line_getPrototypeOf(o) { Line_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Line_getPrototypeOf(o); }



var Line = /*#__PURE__*/function (_Action) {
  Line_inherits(Line, _Action);

  var _super = Line_createSuper(Line);

  function Line() {
    Line_classCallCheck(this, Line);

    return _super.apply(this, arguments);
  }

  Line_createClass(Line, [{
    key: "execute",
    value: function execute() {
      window.open("https://line.me/ti/p/~".concat(this.data.action));
    }
  }]);

  return Line;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Telegram.js
function Telegram_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Telegram_typeof = function _typeof(obj) { return typeof obj; }; } else { Telegram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Telegram_typeof(obj); }

function Telegram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Telegram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Telegram_createClass(Constructor, protoProps, staticProps) { if (protoProps) Telegram_defineProperties(Constructor.prototype, protoProps); if (staticProps) Telegram_defineProperties(Constructor, staticProps); return Constructor; }

function Telegram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Telegram_setPrototypeOf(subClass, superClass); }

function Telegram_setPrototypeOf(o, p) { Telegram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Telegram_setPrototypeOf(o, p); }

function Telegram_createSuper(Derived) { var hasNativeReflectConstruct = Telegram_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Telegram_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Telegram_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Telegram_possibleConstructorReturn(this, result); }; }

function Telegram_possibleConstructorReturn(self, call) { if (call && (Telegram_typeof(call) === "object" || typeof call === "function")) { return call; } return Telegram_assertThisInitialized(self); }

function Telegram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Telegram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Telegram_getPrototypeOf(o) { Telegram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Telegram_getPrototypeOf(o); }



var Telegram = /*#__PURE__*/function (_Action) {
  Telegram_inherits(Telegram, _Action);

  var _super = Telegram_createSuper(Telegram);

  function Telegram() {
    Telegram_classCallCheck(this, Telegram);

    return _super.apply(this, arguments);
  }

  Telegram_createClass(Telegram, [{
    key: "execute",
    value: function execute() {
      window.open("https://telegram.me/".concat(this.data.action));
    }
  }]);

  return Telegram;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Viber.js
function Viber_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Viber_typeof = function _typeof(obj) { return typeof obj; }; } else { Viber_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Viber_typeof(obj); }

function Viber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Viber_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Viber_createClass(Constructor, protoProps, staticProps) { if (protoProps) Viber_defineProperties(Constructor.prototype, protoProps); if (staticProps) Viber_defineProperties(Constructor, staticProps); return Constructor; }

function Viber_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Viber_setPrototypeOf(subClass, superClass); }

function Viber_setPrototypeOf(o, p) { Viber_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Viber_setPrototypeOf(o, p); }

function Viber_createSuper(Derived) { var hasNativeReflectConstruct = Viber_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Viber_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Viber_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Viber_possibleConstructorReturn(this, result); }; }

function Viber_possibleConstructorReturn(self, call) { if (call && (Viber_typeof(call) === "object" || typeof call === "function")) { return call; } return Viber_assertThisInitialized(self); }

function Viber_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Viber_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Viber_getPrototypeOf(o) { Viber_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Viber_getPrototypeOf(o); }



var Viber = /*#__PURE__*/function (_Action) {
  Viber_inherits(Viber, _Action);

  var _super = Viber_createSuper(Viber);

  function Viber() {
    Viber_classCallCheck(this, Viber);

    return _super.apply(this, arguments);
  }

  Viber_createClass(Viber, [{
    key: "execute",
    value: function execute() {
      window.location.href = "viber://chat?number=".concat(this.data.action);
    }
  }]);

  return Viber;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Facebook.js
function Facebook_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Facebook_typeof = function _typeof(obj) { return typeof obj; }; } else { Facebook_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Facebook_typeof(obj); }

function Facebook_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Facebook_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Facebook_createClass(Constructor, protoProps, staticProps) { if (protoProps) Facebook_defineProperties(Constructor.prototype, protoProps); if (staticProps) Facebook_defineProperties(Constructor, staticProps); return Constructor; }

function Facebook_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Facebook_setPrototypeOf(subClass, superClass); }

function Facebook_setPrototypeOf(o, p) { Facebook_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Facebook_setPrototypeOf(o, p); }

function Facebook_createSuper(Derived) { var hasNativeReflectConstruct = Facebook_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Facebook_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Facebook_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Facebook_possibleConstructorReturn(this, result); }; }

function Facebook_possibleConstructorReturn(self, call) { if (call && (Facebook_typeof(call) === "object" || typeof call === "function")) { return call; } return Facebook_assertThisInitialized(self); }

function Facebook_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Facebook_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Facebook_getPrototypeOf(o) { Facebook_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Facebook_getPrototypeOf(o); }



var Facebook = /*#__PURE__*/function (_Action) {
  Facebook_inherits(Facebook, _Action);

  var _super = Facebook_createSuper(Facebook);

  function Facebook() {
    Facebook_classCallCheck(this, Facebook);

    return _super.apply(this, arguments);
  }

  Facebook_createClass(Facebook, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.facebook.com/".concat(this.data.action));
    }
  }]);

  return Facebook;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Twitter.js
function Twitter_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Twitter_typeof = function _typeof(obj) { return typeof obj; }; } else { Twitter_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Twitter_typeof(obj); }

function Twitter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Twitter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Twitter_createClass(Constructor, protoProps, staticProps) { if (protoProps) Twitter_defineProperties(Constructor.prototype, protoProps); if (staticProps) Twitter_defineProperties(Constructor, staticProps); return Constructor; }

function Twitter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Twitter_setPrototypeOf(subClass, superClass); }

function Twitter_setPrototypeOf(o, p) { Twitter_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Twitter_setPrototypeOf(o, p); }

function Twitter_createSuper(Derived) { var hasNativeReflectConstruct = Twitter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Twitter_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Twitter_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Twitter_possibleConstructorReturn(this, result); }; }

function Twitter_possibleConstructorReturn(self, call) { if (call && (Twitter_typeof(call) === "object" || typeof call === "function")) { return call; } return Twitter_assertThisInitialized(self); }

function Twitter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Twitter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Twitter_getPrototypeOf(o) { Twitter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Twitter_getPrototypeOf(o); }



var Twitter = /*#__PURE__*/function (_Action) {
  Twitter_inherits(Twitter, _Action);

  var _super = Twitter_createSuper(Twitter);

  function Twitter() {
    Twitter_classCallCheck(this, Twitter);

    return _super.apply(this, arguments);
  }

  Twitter_createClass(Twitter, [{
    key: "execute",
    value: function execute() {
      window.open("https://twitter.com/".concat(this.data.action));
    }
  }]);

  return Twitter;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Instagram.js
function Instagram_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Instagram_typeof = function _typeof(obj) { return typeof obj; }; } else { Instagram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Instagram_typeof(obj); }

function Instagram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Instagram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Instagram_createClass(Constructor, protoProps, staticProps) { if (protoProps) Instagram_defineProperties(Constructor.prototype, protoProps); if (staticProps) Instagram_defineProperties(Constructor, staticProps); return Constructor; }

function Instagram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Instagram_setPrototypeOf(subClass, superClass); }

function Instagram_setPrototypeOf(o, p) { Instagram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Instagram_setPrototypeOf(o, p); }

function Instagram_createSuper(Derived) { var hasNativeReflectConstruct = Instagram_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Instagram_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Instagram_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Instagram_possibleConstructorReturn(this, result); }; }

function Instagram_possibleConstructorReturn(self, call) { if (call && (Instagram_typeof(call) === "object" || typeof call === "function")) { return call; } return Instagram_assertThisInitialized(self); }

function Instagram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Instagram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Instagram_getPrototypeOf(o) { Instagram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Instagram_getPrototypeOf(o); }



var Instagram = /*#__PURE__*/function (_Action) {
  Instagram_inherits(Instagram, _Action);

  var _super = Instagram_createSuper(Instagram);

  function Instagram() {
    Instagram_classCallCheck(this, Instagram);

    return _super.apply(this, arguments);
  }

  Instagram_createClass(Instagram, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.instagram.com/".concat(this.data.action));
    }
  }]);

  return Instagram;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Snapchat.js
function Snapchat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Snapchat_typeof = function _typeof(obj) { return typeof obj; }; } else { Snapchat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Snapchat_typeof(obj); }

function Snapchat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Snapchat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Snapchat_createClass(Constructor, protoProps, staticProps) { if (protoProps) Snapchat_defineProperties(Constructor.prototype, protoProps); if (staticProps) Snapchat_defineProperties(Constructor, staticProps); return Constructor; }

function Snapchat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Snapchat_setPrototypeOf(subClass, superClass); }

function Snapchat_setPrototypeOf(o, p) { Snapchat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Snapchat_setPrototypeOf(o, p); }

function Snapchat_createSuper(Derived) { var hasNativeReflectConstruct = Snapchat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Snapchat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Snapchat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Snapchat_possibleConstructorReturn(this, result); }; }

function Snapchat_possibleConstructorReturn(self, call) { if (call && (Snapchat_typeof(call) === "object" || typeof call === "function")) { return call; } return Snapchat_assertThisInitialized(self); }

function Snapchat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Snapchat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Snapchat_getPrototypeOf(o) { Snapchat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Snapchat_getPrototypeOf(o); }



var Snapchat = /*#__PURE__*/function (_Action) {
  Snapchat_inherits(Snapchat, _Action);

  var _super = Snapchat_createSuper(Snapchat);

  function Snapchat() {
    Snapchat_classCallCheck(this, Snapchat);

    return _super.apply(this, arguments);
  }

  Snapchat_createClass(Snapchat, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.snapchat.com/add/".concat(this.data.action));
    }
  }]);

  return Snapchat;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Linkedin.js
function Linkedin_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Linkedin_typeof = function _typeof(obj) { return typeof obj; }; } else { Linkedin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Linkedin_typeof(obj); }

function Linkedin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Linkedin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Linkedin_createClass(Constructor, protoProps, staticProps) { if (protoProps) Linkedin_defineProperties(Constructor.prototype, protoProps); if (staticProps) Linkedin_defineProperties(Constructor, staticProps); return Constructor; }

function Linkedin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Linkedin_setPrototypeOf(subClass, superClass); }

function Linkedin_setPrototypeOf(o, p) { Linkedin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Linkedin_setPrototypeOf(o, p); }

function Linkedin_createSuper(Derived) { var hasNativeReflectConstruct = Linkedin_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Linkedin_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Linkedin_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Linkedin_possibleConstructorReturn(this, result); }; }

function Linkedin_possibleConstructorReturn(self, call) { if (call && (Linkedin_typeof(call) === "object" || typeof call === "function")) { return call; } return Linkedin_assertThisInitialized(self); }

function Linkedin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Linkedin_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Linkedin_getPrototypeOf(o) { Linkedin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Linkedin_getPrototypeOf(o); }



var Linkedin_Snapchat = /*#__PURE__*/function (_Action) {
  Linkedin_inherits(Snapchat, _Action);

  var _super = Linkedin_createSuper(Snapchat);

  function Snapchat() {
    Linkedin_classCallCheck(this, Snapchat);

    return _super.apply(this, arguments);
  }

  Linkedin_createClass(Snapchat, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.linkedin.com/".concat(this.data.action));
    }
  }]);

  return Snapchat;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Vk.js
function Vk_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Vk_typeof = function _typeof(obj) { return typeof obj; }; } else { Vk_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Vk_typeof(obj); }

function Vk_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vk_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vk_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vk_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vk_defineProperties(Constructor, staticProps); return Constructor; }

function Vk_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Vk_setPrototypeOf(subClass, superClass); }

function Vk_setPrototypeOf(o, p) { Vk_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Vk_setPrototypeOf(o, p); }

function Vk_createSuper(Derived) { var hasNativeReflectConstruct = Vk_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Vk_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Vk_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Vk_possibleConstructorReturn(this, result); }; }

function Vk_possibleConstructorReturn(self, call) { if (call && (Vk_typeof(call) === "object" || typeof call === "function")) { return call; } return Vk_assertThisInitialized(self); }

function Vk_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Vk_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Vk_getPrototypeOf(o) { Vk_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Vk_getPrototypeOf(o); }



var Vk = /*#__PURE__*/function (_Action) {
  Vk_inherits(Vk, _Action);

  var _super = Vk_createSuper(Vk);

  function Vk() {
    Vk_classCallCheck(this, Vk);

    return _super.apply(this, arguments);
  }

  Vk_createClass(Vk, [{
    key: "execute",
    value: function execute() {
      window.open("https://vk.me/".concat(this.data.action));
    }
  }]);

  return Vk;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Waze.js
function Waze_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Waze_typeof = function _typeof(obj) { return typeof obj; }; } else { Waze_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Waze_typeof(obj); }

function Waze_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Waze_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Waze_createClass(Constructor, protoProps, staticProps) { if (protoProps) Waze_defineProperties(Constructor.prototype, protoProps); if (staticProps) Waze_defineProperties(Constructor, staticProps); return Constructor; }

function Waze_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Waze_setPrototypeOf(subClass, superClass); }

function Waze_setPrototypeOf(o, p) { Waze_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Waze_setPrototypeOf(o, p); }

function Waze_createSuper(Derived) { var hasNativeReflectConstruct = Waze_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Waze_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Waze_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Waze_possibleConstructorReturn(this, result); }; }

function Waze_possibleConstructorReturn(self, call) { if (call && (Waze_typeof(call) === "object" || typeof call === "function")) { return call; } return Waze_assertThisInitialized(self); }

function Waze_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Waze_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Waze_getPrototypeOf(o) { Waze_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Waze_getPrototypeOf(o); }



var Waze = /*#__PURE__*/function (_Action) {
  Waze_inherits(Waze, _Action);

  var _super = Waze_createSuper(Waze);

  function Waze() {
    Waze_classCallCheck(this, Waze);

    return _super.apply(this, arguments);
  }

  Waze_createClass(Waze, [{
    key: "execute",
    value: function execute() {
      window.location.href = this.data.action;
    }
  }]);

  return Waze;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/ElementorPopup.js
function ElementorPopup_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ElementorPopup_typeof = function _typeof(obj) { return typeof obj; }; } else { ElementorPopup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ElementorPopup_typeof(obj); }

function ElementorPopup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ElementorPopup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ElementorPopup_createClass(Constructor, protoProps, staticProps) { if (protoProps) ElementorPopup_defineProperties(Constructor.prototype, protoProps); if (staticProps) ElementorPopup_defineProperties(Constructor, staticProps); return Constructor; }

function ElementorPopup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ElementorPopup_setPrototypeOf(subClass, superClass); }

function ElementorPopup_setPrototypeOf(o, p) { ElementorPopup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ElementorPopup_setPrototypeOf(o, p); }

function ElementorPopup_createSuper(Derived) { var hasNativeReflectConstruct = ElementorPopup_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ElementorPopup_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ElementorPopup_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ElementorPopup_possibleConstructorReturn(this, result); }; }

function ElementorPopup_possibleConstructorReturn(self, call) { if (call && (ElementorPopup_typeof(call) === "object" || typeof call === "function")) { return call; } return ElementorPopup_assertThisInitialized(self); }

function ElementorPopup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ElementorPopup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ElementorPopup_getPrototypeOf(o) { ElementorPopup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ElementorPopup_getPrototypeOf(o); }



var ElementorPopup = /*#__PURE__*/function (_Action) {
  ElementorPopup_inherits(ElementorPopup, _Action);

  var _super = ElementorPopup_createSuper(ElementorPopup);

  function ElementorPopup() {
    ElementorPopup_classCallCheck(this, ElementorPopup);

    return _super.apply(this, arguments);
  }

  ElementorPopup_createClass(ElementorPopup, [{
    key: "addAttr",
    value: function addAttr() {
      return {
        attr: this.data.action.substring(this.data.action.length - 3) === "Ev2" ? "buttonizer-popup" : "href",
        val: "#" + this.data.action
      };
    }
  }]);

  return ElementorPopup;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/PopupMaker.js
function PopupMaker_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PopupMaker_typeof = function _typeof(obj) { return typeof obj; }; } else { PopupMaker_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PopupMaker_typeof(obj); }

function PopupMaker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PopupMaker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PopupMaker_createClass(Constructor, protoProps, staticProps) { if (protoProps) PopupMaker_defineProperties(Constructor.prototype, protoProps); if (staticProps) PopupMaker_defineProperties(Constructor, staticProps); return Constructor; }

function PopupMaker_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PopupMaker_setPrototypeOf(subClass, superClass); }

function PopupMaker_setPrototypeOf(o, p) { PopupMaker_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PopupMaker_setPrototypeOf(o, p); }

function PopupMaker_createSuper(Derived) { var hasNativeReflectConstruct = PopupMaker_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = PopupMaker_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = PopupMaker_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return PopupMaker_possibleConstructorReturn(this, result); }; }

function PopupMaker_possibleConstructorReturn(self, call) { if (call && (PopupMaker_typeof(call) === "object" || typeof call === "function")) { return call; } return PopupMaker_assertThisInitialized(self); }

function PopupMaker_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PopupMaker_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function PopupMaker_getPrototypeOf(o) { PopupMaker_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PopupMaker_getPrototypeOf(o); }



var PopupMaker = /*#__PURE__*/function (_Action) {
  PopupMaker_inherits(PopupMaker, _Action);

  var _super = PopupMaker_createSuper(PopupMaker);

  function PopupMaker() {
    PopupMaker_classCallCheck(this, PopupMaker);

    return _super.apply(this, arguments);
  }

  PopupMaker_createClass(PopupMaker, [{
    key: "addAttr",
    value: function addAttr() {
      return {
        attr: this.data.action.substring(this.data.action.length - 3) === "Pv2" ? "buttonizer-popup" : "href",
        val: "#" + this.data.action
      };
    }
  }]);

  return PopupMaker;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Popups.js
function Popups_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Popups_typeof = function _typeof(obj) { return typeof obj; }; } else { Popups_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Popups_typeof(obj); }

function Popups_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Popups_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Popups_createClass(Constructor, protoProps, staticProps) { if (protoProps) Popups_defineProperties(Constructor.prototype, protoProps); if (staticProps) Popups_defineProperties(Constructor, staticProps); return Constructor; }

function Popups_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Popups_setPrototypeOf(subClass, superClass); }

function Popups_setPrototypeOf(o, p) { Popups_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Popups_setPrototypeOf(o, p); }

function Popups_createSuper(Derived) { var hasNativeReflectConstruct = Popups_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Popups_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Popups_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Popups_possibleConstructorReturn(this, result); }; }

function Popups_possibleConstructorReturn(self, call) { if (call && (Popups_typeof(call) === "object" || typeof call === "function")) { return call; } return Popups_assertThisInitialized(self); }

function Popups_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Popups_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Popups_getPrototypeOf(o) { Popups_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Popups_getPrototypeOf(o); }



var Popups = /*#__PURE__*/function (_Action) {
  Popups_inherits(Popups, _Action);

  var _super = Popups_createSuper(Popups);

  function Popups() {
    Popups_classCallCheck(this, Popups);

    return _super.apply(this, arguments);
  }

  Popups_createClass(Popups, [{
    key: "execute",
    value: function execute() {
      if (!window.SPU) return;
      var remove = this.data.action; // is NaN

      if (isNaN(remove)) {
        remove = remove.replace(/\D/g, "");
      } // Show popup


      window.SPU.show(remove);
    }
  }]);

  return Popups;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/WPPopups.js
function WPPopups_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { WPPopups_typeof = function _typeof(obj) { return typeof obj; }; } else { WPPopups_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return WPPopups_typeof(obj); }

function WPPopups_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function WPPopups_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function WPPopups_createClass(Constructor, protoProps, staticProps) { if (protoProps) WPPopups_defineProperties(Constructor.prototype, protoProps); if (staticProps) WPPopups_defineProperties(Constructor, staticProps); return Constructor; }

function WPPopups_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) WPPopups_setPrototypeOf(subClass, superClass); }

function WPPopups_setPrototypeOf(o, p) { WPPopups_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return WPPopups_setPrototypeOf(o, p); }

function WPPopups_createSuper(Derived) { var hasNativeReflectConstruct = WPPopups_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = WPPopups_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = WPPopups_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return WPPopups_possibleConstructorReturn(this, result); }; }

function WPPopups_possibleConstructorReturn(self, call) { if (call && (WPPopups_typeof(call) === "object" || typeof call === "function")) { return call; } return WPPopups_assertThisInitialized(self); }

function WPPopups_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function WPPopups_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function WPPopups_getPrototypeOf(o) { WPPopups_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return WPPopups_getPrototypeOf(o); }



var WPPopups = /*#__PURE__*/function (_Action) {
  WPPopups_inherits(WPPopups, _Action);

  var _super = WPPopups_createSuper(WPPopups);

  function WPPopups() {
    WPPopups_classCallCheck(this, WPPopups);

    return _super.apply(this, arguments);
  }

  WPPopups_createClass(WPPopups, [{
    key: "execute",
    value: function execute() {
      if (!window.wppopups) return;
      var remove = this.data.action; // is NaN

      if (isNaN(remove)) {
        remove = remove.replace(/\D/g, "");
      } // Show popup


      window.wppopups.showPopup(remove, true);
    }
  }]);

  return WPPopups;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Print.js
function Print_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Print_typeof = function _typeof(obj) { return typeof obj; }; } else { Print_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Print_typeof(obj); }

function Print_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Print_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Print_createClass(Constructor, protoProps, staticProps) { if (protoProps) Print_defineProperties(Constructor.prototype, protoProps); if (staticProps) Print_defineProperties(Constructor, staticProps); return Constructor; }

function Print_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Print_setPrototypeOf(subClass, superClass); }

function Print_setPrototypeOf(o, p) { Print_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Print_setPrototypeOf(o, p); }

function Print_createSuper(Derived) { var hasNativeReflectConstruct = Print_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Print_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Print_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Print_possibleConstructorReturn(this, result); }; }

function Print_possibleConstructorReturn(self, call) { if (call && (Print_typeof(call) === "object" || typeof call === "function")) { return call; } return Print_assertThisInitialized(self); }

function Print_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Print_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Print_getPrototypeOf(o) { Print_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Print_getPrototypeOf(o); }



var Print_PopupMaker = /*#__PURE__*/function (_Action) {
  Print_inherits(PopupMaker, _Action);

  var _super = Print_createSuper(PopupMaker);

  function PopupMaker() {
    Print_classCallCheck(this, PopupMaker);

    return _super.apply(this, arguments);
  }

  Print_createClass(PopupMaker, [{
    key: "execute",
    value: function execute() {
      window.print();
    }
  }]);

  return PopupMaker;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Clipboard.js
function Clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { Clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Clipboard_typeof(obj); }

function Clipboard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Clipboard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Clipboard_createClass(Constructor, protoProps, staticProps) { if (protoProps) Clipboard_defineProperties(Constructor.prototype, protoProps); if (staticProps) Clipboard_defineProperties(Constructor, staticProps); return Constructor; }

function Clipboard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Clipboard_setPrototypeOf(subClass, superClass); }

function Clipboard_setPrototypeOf(o, p) { Clipboard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Clipboard_setPrototypeOf(o, p); }

function Clipboard_createSuper(Derived) { var hasNativeReflectConstruct = Clipboard_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Clipboard_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Clipboard_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Clipboard_possibleConstructorReturn(this, result); }; }

function Clipboard_possibleConstructorReturn(self, call) { if (call && (Clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return Clipboard_assertThisInitialized(self); }

function Clipboard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Clipboard_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Clipboard_getPrototypeOf(o) { Clipboard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Clipboard_getPrototypeOf(o); }




var Clipboard = /*#__PURE__*/function (_Action) {
  Clipboard_inherits(Clipboard, _Action);

  var _super = Clipboard_createSuper(Clipboard);

  function Clipboard() {
    Clipboard_classCallCheck(this, Clipboard);

    return _super.apply(this, arguments);
  }

  Clipboard_createClass(Clipboard, [{
    key: "execute",
    value: function execute() {
      this.copyClipboard();
    }
  }, {
    key: "copyClipboard",
    value: function copyClipboard() {
      var _this = this;

      var searchString = "".concat(document.location.href.indexOf("?") >= 0 ? "&" : "?", "utm_source=buttonizer");
      console.log("".concat(document.location.href).concat(searchString)); // New API to access clipboard

      navigator.clipboard.writeText("".concat(document.location.href).concat(searchString));

      if (this.button.querySelector("[class*=buttonizer-icon]")) {
        this.button.querySelector("[class*=buttonizer-icon]").classList = clsx_m(this.stylesheet.classes.icon, "fa fa-check"); // remove label

        setTimeout(function () {
          _this.button.querySelector("[class*=buttonizer-icon]").classList = clsx_m(_this.stylesheet.classes.icon, _this.data.icon);
        }, 2500);
      }
    }
  }]);

  return Clipboard;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/Poptin.js
function Poptin_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Poptin_typeof = function _typeof(obj) { return typeof obj; }; } else { Poptin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Poptin_typeof(obj); }

function Poptin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Poptin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Poptin_createClass(Constructor, protoProps, staticProps) { if (protoProps) Poptin_defineProperties(Constructor.prototype, protoProps); if (staticProps) Poptin_defineProperties(Constructor, staticProps); return Constructor; }

function Poptin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Poptin_setPrototypeOf(subClass, superClass); }

function Poptin_setPrototypeOf(o, p) { Poptin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Poptin_setPrototypeOf(o, p); }

function Poptin_createSuper(Derived) { var hasNativeReflectConstruct = Poptin_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Poptin_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Poptin_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Poptin_possibleConstructorReturn(this, result); }; }

function Poptin_possibleConstructorReturn(self, call) { if (call && (Poptin_typeof(call) === "object" || typeof call === "function")) { return call; } return Poptin_assertThisInitialized(self); }

function Poptin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Poptin_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Poptin_getPrototypeOf(o) { Poptin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Poptin_getPrototypeOf(o); }



var Poptin = /*#__PURE__*/function (_Action) {
  Poptin_inherits(Poptin, _Action);

  var _super = Poptin_createSuper(Poptin);

  function Poptin() {
    Poptin_classCallCheck(this, Poptin);

    return _super.apply(this, arguments);
  }

  Poptin_createClass(Poptin, [{
    key: "addAttr",
    value: function addAttr() {
      return {
        attr: "href",
        val: this.data.action
      };
    }
  }]);

  return Poptin;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/OpenGroup.js
function OpenGroup_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OpenGroup_typeof = function _typeof(obj) { return typeof obj; }; } else { OpenGroup_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OpenGroup_typeof(obj); }

function OpenGroup_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OpenGroup_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OpenGroup_createClass(Constructor, protoProps, staticProps) { if (protoProps) OpenGroup_defineProperties(Constructor.prototype, protoProps); if (staticProps) OpenGroup_defineProperties(Constructor, staticProps); return Constructor; }

function OpenGroup_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OpenGroup_setPrototypeOf(subClass, superClass); }

function OpenGroup_setPrototypeOf(o, p) { OpenGroup_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OpenGroup_setPrototypeOf(o, p); }

function OpenGroup_createSuper(Derived) { var hasNativeReflectConstruct = OpenGroup_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = OpenGroup_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = OpenGroup_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return OpenGroup_possibleConstructorReturn(this, result); }; }

function OpenGroup_possibleConstructorReturn(self, call) { if (call && (OpenGroup_typeof(call) === "object" || typeof call === "function")) { return call; } return OpenGroup_assertThisInitialized(self); }

function OpenGroup_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OpenGroup_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function OpenGroup_getPrototypeOf(o) { OpenGroup_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OpenGroup_getPrototypeOf(o); }



var OpenGroup = /*#__PURE__*/function (_Action) {
  OpenGroup_inherits(OpenGroup, _Action);

  var _super = OpenGroup_createSuper(OpenGroup);

  function OpenGroup() {
    OpenGroup_classCallCheck(this, OpenGroup);

    return _super.apply(this, arguments);
  }

  OpenGroup_createClass(OpenGroup, [{
    key: "execute",
    value: // Toggle group
    function execute() {
      window.Buttonizer.toggle(this.groupId);
    }
  }]);

  return OpenGroup;
}(Action);


;// CONCATENATED MODULE: ./src/js/utils/social-share-media.js
/*
 * This file has been forked/copied/stolen from https://github.com/bradvin/social-share-urls.
 * This Software is licensed under the permissive BSD-3-Clause License, so we can use it in closed-source commercial projects for free.
 * Since the rep is updated well, we should update this file once in a while. Also, it should be really easy to add social sharing links this way.
 *
 * Updated 17 june 2021
 */
var action2api = {
  facebook: "facebook",
  twitter: "twitter",
  whatsapp: "whatsapp",
  linkedin: "linkedin",
  pinterest: "pinterest",
  mail: "email",
  reddit: "reddit",
  tumblr: "tumblr",
  weibo: "weibo",
  vk: "vk",
  ok: "ok.ru",
  xing: "xing",
  blogger: "blogger",
  flipboard: "flipboard",
  line: "line.me"
};
var actionShouldPopup = {
  facebook: true,
  twitter: true,
  whatsapp: false,
  linkedin: true,
  pinterest: false,
  mail: "href",
  reddit: false,
  tumblr: false,
  weibo: false,
  vk: false,
  ok: false,
  xing: false,
  blogger: false,
  flipboard: false,
  line: false
}; // Social Media Site Links With Share Links
// -------------------------------------------------

function GetSocialMediaSiteLinks_WithShareLinks(args) {
  var validargs = ["url", "title", "image", "desc", "appid", "redirecturl", "via", "hashtags", "provider", "language", "userid", "category", "phonenumber", "emailaddress", "cemailaddress", "bccemailaddress"];

  for (var i = 0; i < validargs.length; i++) {
    var validarg = validargs[i];

    if (!args[validarg]) {
      args[validarg] = "";
    }
  }

  var url = fixedEncodeURIComponent(args.url);
  var title = fixedEncodeURIComponent(args.title);
  var image = fixedEncodeURIComponent(args.image);
  var desc = fixedEncodeURIComponent(args.desc); //   const app_id = fixedEncodeURIComponent(args.appid);
  //   const redirect_url = fixedEncodeURIComponent(args.redirecturl);

  var via = fixedEncodeURIComponent(args.via);
  var hash_tags = fixedEncodeURIComponent(args.hashtags); //   const provider = fixedEncodeURIComponent(args.provider);

  var language = fixedEncodeURIComponent(args.language);
  var user_id = fixedEncodeURIComponent(args.userid);
  var category = fixedEncodeURIComponent(args.category);
  var phone_number = fixedEncodeURIComponent(args.phonenumber);
  var email_address = fixedEncodeURIComponent(args.emailaddress);
  var cc_email_address = fixedEncodeURIComponent(args.ccemailaddress);
  var bcc_email_address = fixedEncodeURIComponent(args.bccemailaddress);
  var text = title;

  if (desc) {
    if (title) text += "%20%3A%20"; // This is just this, " : "

    text += desc;
  }

  return {
    "add.this": "http://www.addthis.com/bookmark.php?url=" + url,
    blogger: "https://www.blogger.com/blog-this.g?u=" + url + "&n=" + title + "&t=" + desc,
    buffer: "https://buffer.com/add?text=" + text + "&url=" + url,
    diaspora: "https://share.diasporafoundation.org/?title=" + title + "&url=" + url,
    douban: "http://www.douban.com/recommend/?url=" + url + "&title=" + text,
    email: "mailto:" + email_address + "?subject=" + title + "&body=" + desc,
    evernote: "https://www.evernote.com/clip.action?url=" + url + "&title=" + text,
    getpocket: "https://getpocket.com/edit?url=" + url,
    facebook: "http://www.facebook.com/sharer.php?u=" + url + "&t=" + desc,
    flattr: "https://flattr.com/submit/auto?user_id=" + user_id + "&url=" + url + "&title=" + title + "&description=" + text + "&language=" + language + "&tags=" + hash_tags + "&hidden=HIDDEN&category=" + category,
    flipboard: "https://share.flipboard.com/bookmarklet/popout?v=2&title=" + title + "&url=" + url,
    gmail: "https://mail.google.com/mail/?view=cm&to=" + email_address + "&su=" + title + "&body=" + url + "&bcc=" + bcc_email_address + "&cc=" + cc_email_address,
    "google.bookmarks": "https://www.google.com/bookmarks/mark?op=edit&bkmk=" + url + "&title=" + title + "&annotation=" + text + "&labels=" + hash_tags + "",
    instapaper: "http://www.instapaper.com/edit?url=" + url + "&title=" + title + "&description=" + desc,
    "line.me": "https://lineit.line.me/share/ui?url=" + url
    /*+ "&text=" + desc*/
    ,
    linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" + url,
    livejournal: "http://www.livejournal.com/update.bml?subject=" + text + "&event=" + url,
    "hacker.news": "https://news.ycombinator.com/submitlink?u=" + url + "&t=" + title,
    "ok.ru": "https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=" + url,
    pinterest: "http://pinterest.com/pin/create/button/?url=" + url,
    qzone: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url,
    reddit: "https://reddit.com/submit?url=" + url + "&title=" + title,
    renren: "http://widget.renren.com/dialog/share?resourceUrl=" + url + "&srcUrl=" + url + "&title=" + text + "&description=" + desc,
    skype: "https://web.skype.com/share?url=" + url + "&text=" + text,
    sms: "sms:" + "?body=" + desc,
    "surfingbird.ru": "http://surfingbird.ru/share?url=" + url + "&description=" + desc + "&screenshot=" + image + "&title=" + title,
    "telegram.me": "https://t.me/share/url?url=" + url + "&text=" + text + "&to=" + phone_number,
    threema: "threema://compose?text=" + text + "&id=" + user_id,
    tumblr: "https://www.tumblr.com/widgets/share/tool?canonicalUrl=" + url + "&title=" + title + "&caption=" + desc + "&tags=" + hash_tags,
    twitter: "https://twitter.com/intent/tweet?url=" +
    /* url + */
    "&text=" + desc
    /* text */
    + "&via=" + via + "&hashtags=" + hash_tags,
    vk: "http://vk.com/share.php?url=" + url + "&title=" + title + "&comment=" + desc,
    weibo: "http://service.weibo.com/share/share.php?url=" + ""
    /*url*/
    + "&appkey=&title=" + desc + "&pic=&ralateUid=",
    whatsapp: "https://api.whatsapp.com/send?text=" + desc
    /*+ "%20" + url*/
    ,
    xing: "https://www.xing.com/spi/shares/new?url=" + url,
    yahoo: "http://compose.mail.yahoo.com/?to=" + email_address + "&subject=" + title + "&body=" + text
  };
}

function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return "%" + c.charCodeAt(0).toString(16);
  });
} // export all stuff, yay



;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/SocialSharing.js
function SocialSharing_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SocialSharing_typeof = function _typeof(obj) { return typeof obj; }; } else { SocialSharing_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SocialSharing_typeof(obj); }

function SocialSharing_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SocialSharing_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SocialSharing_createClass(Constructor, protoProps, staticProps) { if (protoProps) SocialSharing_defineProperties(Constructor.prototype, protoProps); if (staticProps) SocialSharing_defineProperties(Constructor, staticProps); return Constructor; }

function SocialSharing_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SocialSharing_setPrototypeOf(subClass, superClass); }

function SocialSharing_setPrototypeOf(o, p) { SocialSharing_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SocialSharing_setPrototypeOf(o, p); }

function SocialSharing_createSuper(Derived) { var hasNativeReflectConstruct = SocialSharing_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SocialSharing_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SocialSharing_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SocialSharing_possibleConstructorReturn(this, result); }; }

function SocialSharing_possibleConstructorReturn(self, call) { if (call && (SocialSharing_typeof(call) === "object" || typeof call === "function")) { return call; } return SocialSharing_assertThisInitialized(self); }

function SocialSharing_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SocialSharing_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SocialSharing_getPrototypeOf(o) { SocialSharing_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SocialSharing_getPrototypeOf(o); }




var replaceParameters = function replaceParameters(text) {
  return text.replace(/\[site-url\]/g, document.location).replace(/\[site-title\]/g, document.title);
};

var SocialSharing = /*#__PURE__*/function (_Action) {
  SocialSharing_inherits(SocialSharing, _Action);

  var _super = SocialSharing_createSuper(SocialSharing);

  function SocialSharing(data, button, stylesheet) {
    SocialSharing_classCallCheck(this, SocialSharing);

    return _super.call(this, data, button, stylesheet);
  }

  SocialSharing_createClass(SocialSharing, [{
    key: "execute",
    value: function execute() {
      switch (this.getURL().popup) {
        case "href":
          window.location.href = this.getURL().url;
          break;

        case true:
          window.open(this.getURL().url, "popup", "width=610, height=480, resizable=0, toolbar=0, menubar=0, status=0, location=0, scrollbars=0");
          break;

        case false:
        default:
          window.open(this.getURL().url);
          break;
      }
    }
  }, {
    key: "getURL",
    value: function getURL() {
      var args = {
        url: document.location.href,
        desc: replaceParameters(this.data.text_body || "Check this out! " + document.location.href),
        title: document.title
      };
      return {
        url: GetSocialMediaSiteLinks_WithShareLinks(args)[action2api[this.data.action]],
        popup: actionShouldPopup[this.data.action]
      };
    }
  }]);

  return SocialSharing;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/SignalGroupChat.js
function SignalGroupChat_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SignalGroupChat_typeof = function _typeof(obj) { return typeof obj; }; } else { SignalGroupChat_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SignalGroupChat_typeof(obj); }

function SignalGroupChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SignalGroupChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SignalGroupChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) SignalGroupChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) SignalGroupChat_defineProperties(Constructor, staticProps); return Constructor; }

function SignalGroupChat_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SignalGroupChat_setPrototypeOf(subClass, superClass); }

function SignalGroupChat_setPrototypeOf(o, p) { SignalGroupChat_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SignalGroupChat_setPrototypeOf(o, p); }

function SignalGroupChat_createSuper(Derived) { var hasNativeReflectConstruct = SignalGroupChat_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SignalGroupChat_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SignalGroupChat_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SignalGroupChat_possibleConstructorReturn(this, result); }; }

function SignalGroupChat_possibleConstructorReturn(self, call) { if (call && (SignalGroupChat_typeof(call) === "object" || typeof call === "function")) { return call; } return SignalGroupChat_assertThisInitialized(self); }

function SignalGroupChat_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SignalGroupChat_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SignalGroupChat_getPrototypeOf(o) { SignalGroupChat_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SignalGroupChat_getPrototypeOf(o); }



var SignalGroupChat = /*#__PURE__*/function (_Action) {
  SignalGroupChat_inherits(SignalGroupChat, _Action);

  var _super = SignalGroupChat_createSuper(SignalGroupChat);

  function SignalGroupChat() {
    SignalGroupChat_classCallCheck(this, SignalGroupChat);

    return _super.apply(this, arguments);
  }

  SignalGroupChat_createClass(SignalGroupChat, [{
    key: "execute",
    value: function execute() {
      window.open(this.data.action);
    }
  }]);

  return SignalGroupChat;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/ButtonActions/TikTok.js
function TikTok_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TikTok_typeof = function _typeof(obj) { return typeof obj; }; } else { TikTok_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TikTok_typeof(obj); }

function TikTok_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TikTok_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TikTok_createClass(Constructor, protoProps, staticProps) { if (protoProps) TikTok_defineProperties(Constructor.prototype, protoProps); if (staticProps) TikTok_defineProperties(Constructor, staticProps); return Constructor; }

function TikTok_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TikTok_setPrototypeOf(subClass, superClass); }

function TikTok_setPrototypeOf(o, p) { TikTok_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TikTok_setPrototypeOf(o, p); }

function TikTok_createSuper(Derived) { var hasNativeReflectConstruct = TikTok_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = TikTok_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = TikTok_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return TikTok_possibleConstructorReturn(this, result); }; }

function TikTok_possibleConstructorReturn(self, call) { if (call && (TikTok_typeof(call) === "object" || typeof call === "function")) { return call; } return TikTok_assertThisInitialized(self); }

function TikTok_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TikTok_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function TikTok_getPrototypeOf(o) { TikTok_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TikTok_getPrototypeOf(o); }



var TikTok = /*#__PURE__*/function (_Action) {
  TikTok_inherits(TikTok, _Action);

  var _super = TikTok_createSuper(TikTok);

  function TikTok() {
    TikTok_classCallCheck(this, TikTok);

    return _super.apply(this, arguments);
  }

  TikTok_createClass(TikTok, [{
    key: "execute",
    value: function execute() {
      window.open("https://www.tiktok.com/@".concat(this.data.action));
    }
  }]);

  return TikTok;
}(Action);


;// CONCATENATED MODULE: ./src/js/frontend/Actions/index.js


































/* harmony default export */ var Actions = ({
  url: WebsiteUrl,
  page: WebsiteUrl,
  download: WebsiteUrl,
  phone: Phone,
  mail: Mail,
  whatsapp: WhatsAppChat,
  backtotop: BackToTop,
  gotobottom: GoToBottom,
  gobackpage: GoBackPage,
  javascript_pro: JavaScriptPro,
  sms: Sms,
  messenger_chat: MessengerChat,
  messenger: MessengerLink,
  twitter_dm: TwitterDm,
  skype: Skype,
  line: Line,
  telegram: Telegram,
  viber: Viber,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  snapchat: Snapchat,
  linkedin: Linkedin_Snapchat,
  vk: Vk,
  waze: Waze,
  tiktok: TikTok,
  poptin: Poptin,
  elementor_popup: ElementorPopup,
  popup_maker: PopupMaker,
  popups: Popups,
  wppopups: WPPopups,
  print: Print_PopupMaker,
  clipboard: Clipboard,
  opengroup: OpenGroup,
  socialsharing: SocialSharing,
  signal_group: SignalGroupChat
});
;// CONCATENATED MODULE: ./src/js/frontend/Utils/GoogleAnalyticsEvent.js
function GoogleAnalyticsEvent_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GoogleAnalyticsEvent_typeof = function _typeof(obj) { return typeof obj; }; } else { GoogleAnalyticsEvent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GoogleAnalyticsEvent_typeof(obj); }

/**
 * Google analytics event
 *
 * @param object
 */
function googleAnalyticsEvent(object) {
  if (!window.Buttonizer.allowGoogleAnalyticsTracking) return;

  if ("gtag" in window && typeof gtag === "function" || "ga" in window || "dataLayer" in window && GoogleAnalyticsEvent_typeof(window.dataLayer) === "object" && typeof window.dataLayer.push === "function") {
    var actionData = {}; // Opening or closing a group

    if (object.type === "group-open-close") {
      actionData.groupName = object.name;
      actionData.action = object.interaction;
    } else if (object.type === "button-click") {
      actionData.groupName = object.groupName;
      actionData.action = "Clicked button: " + object.buttonName;
    } // Gtag support


    if ("gtag" in window && typeof gtag === "function") {
      // Work with Google Tag Manager
      gtag("event", "Buttonizer", {
        event_category: "Buttonizer group: " + actionData.groupName,
        event_action: actionData.action,
        event_label: document.title,
        page_url: document.location.href
      });
    } else if ("ga" in window) {
      try {
        // Fallback to tracker
        var tracker = ga.getAll()[0];

        if (tracker) {
          tracker.send("event", "Buttonizer group: " + actionData.groupName, actionData.action, document.title);
        } else {
          throw "No tracker found";
        }
      } catch (e) {
        console.error("Buttonizer Google Analytics: Last try to push to Google Analytics.");
        console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17"); // Fallback to old Google Analytics

        ga("send", "event", {
          eventCategory: "Buttonizer group: " + actionData.groupName,
          eventAction: actionData.action,
          eventLabel: document.title
        });
      }
    } else {
      console.error("Buttonizer Google Analytics: Unable to push data to Google Analytics");
      console.error("What does this mean?", "https://community.buttonizer.pro/knowledgebase/17");
    }
  }
}
;// CONCATENATED MODULE: ./src/js/utils/color-helpers.js
/* global require */
var gradientParser = __webpack_require__(49948);

var rgbToRgba = function rgbToRgba(rgb) {
  var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return /rgba/.test(rgb) ? rgb : rgb.replace("rgb(", "rgba(").replace(")", ", ".concat(a, ")"));
};
var getRadialGradientPreview = function getRadialGradientPreview(palette) {
  var background = "radial-gradient(".concat(palette.map(function (_ref) {
    var color = _ref.color,
        offset = _ref.offset,
        opacity = _ref.opacity;
    return "".concat(rgbToRgba(color, opacity), " ").concat(offset * 100, "%");
  }).join(", "), ")");
  return {
    background: background
  };
};
var getSolidPreview = function getSolidPreview(palette) {
  if (typeof palette !== "string") return {
    background: rgbToRgba(palette[0].color, palette[0].opacity)
  };
  return {
    background: palette
  };
};
var getColorType = function getColorType(value) {
  if (value == null) return "solid";
  if (/radial/.test(value)) return "radial";
  if (/linear/.test(value)) return "linear";
  return "solid";
};
var getPaletteAngle = function getPaletteAngle(value) {
  if (value == null) return {
    palette: null,
    angle: 90
  };
  /* webpack-strip-block:removed */

  var type = getColorType(value);
  if (type === "solid") return {
    palette: value,
    angle: 90
  };

  if (type === "linear" || type === "radial") {
    var stop = gradientParser.parse(value)[0].colorStops[0];
    return {
      palette: "".concat(stop.type, "(").concat(stop.value.join(", "), ")"),
      angle: 90
    };
  }
};
var getFirstColor = function getFirstColor(color) {
  var type = getColorType(color);
  if (type === "solid") return color;
  var result = gradientParser.parse(color)[0];
  var stop = result.colorStops[0];
  if (stop.type === "hex") return "#".concat(stop.value); // hex

  return "".concat(stop.type, "(").concat(stop.value.join(", "), ")"); // rgb(a) or hsl
};
function colorValues(color) {
  if (!color) return;
  if (color.toLowerCase() === "transparent") return {
    r: 0,
    g: 0,
    b: 0,
    a: 0
  };

  if (color[0] === "#") {
    if (color.length < 7) {
      // convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA
      color = "#" + color[1] + color[1] + color[2] + color[2] + color[3] + color[3] + (color.length > 4 ? color[4] + color[4] : "");
    }

    return {
      r: parseInt(color.substr(1, 2), 16),
      g: parseInt(color.substr(3, 2), 16),
      b: parseInt(color.substr(5, 2), 16),
      a: color.length > 7 ? parseInt(color.substr(7, 2), 16) / 255 : 1
    };
  }

  if (color.indexOf("rgb") === -1) {
    // convert named colors
    var temp_elem = document.body.appendChild(document.createElement("fictum")); // intentionally use unknown tag to lower chances of css rule override with !important

    var flag = "rgb(1, 2, 3)"; // this flag tested on chrome 59, ff 53, ie9, ie10, ie11, edge 14

    temp_elem.style.color = flag;
    if (temp_elem.style.color !== flag) return; // color set failed - some monstrous css rule is probably taking over the color of our object

    temp_elem.style.color = color;
    if (temp_elem.style.color === flag || temp_elem.style.color === "") return; // color parse failed

    color = getComputedStyle(temp_elem).color;
    document.body.removeChild(temp_elem);
  }

  if (color.indexOf("rgb") === 0) {
    if (color.indexOf("rgba") === -1) color += ",1"; // convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below

    var newColor = color.match(/[\.\d]+/g).map(function (a) {
      return +a;
    });
    return {
      r: newColor[0],
      g: newColor[1],
      b: newColor[2],
      a: newColor[3]
    };
  }
}
;// CONCATENATED MODULE: ./src/js/frontend/FloatingContent/Button.js
function Button_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Button_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Button_ownKeys(Object(source), true).forEach(function (key) { Button_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Button_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Button_createClass(Constructor, protoProps, staticProps) { if (protoProps) Button_defineProperties(Constructor.prototype, protoProps); if (staticProps) Button_defineProperties(Constructor, staticProps); return Constructor; }









var disableActionInPreview = ["poptin", "elementor_popup", "popup_maker", "popups", "wppopups", "twitter", "javascript_pro", "messenger_chat", "clipboard", "download"];

var Button = /*#__PURE__*/function () {
  function Button(_ref) {
    var data = _ref.data,
        _ref$label = _ref.label,
        label = _ref$label === void 0 ? false : _ref$label,
        groupName = _ref.groupName,
        groupId = _ref.groupId,
        _ref$icon = _ref.icon,
        icon = _ref$icon === void 0 ? false : _ref$icon,
        generators = _ref.generators,
        renderExtender = _ref.renderExtender,
        stylesheet = _ref.stylesheet;

    Button_classCallCheck(this, Button);

    this.data = data;
    this.label = label;
    this.icon = icon;
    this.stylesheet = stylesheet;
    this.groupName = groupName ? groupName : false;
    this.action = null;
    this.JSS = {};
    this.JSSImage = {};
    this.JSSImageHover = {};
    this.generators = generators || [];
    this.renderExtender = renderExtender || [];
    this.element = document.createElement("a");
    this.element.setAttribute("role", "button");
    this.visibility = {
      desktop: function desktop() {
        return dlv_umd_default()(data, "show_desktop", true);
      },
      mobile: function mobile() {
        return dlv_umd_default()(data, "show_mobile", true);
      }
    }; // Add all actions

    this.action = new Actions[dlv_umd_default()(data, "type", "url")](data, this.element, this.stylesheet, groupId);
    if (buttonizerInPreview_inPreview()) this.disableClickInPreview = true;
  }

  Button_createClass(Button, [{
    key: "render",
    value: function render() {
      var _this = this,
          _button;

      if (this.icon) {
        var _this$generators;

        this.element.appendChild(this.icon.render().element);

        (_this$generators = this.generators).push.apply(_this$generators, _toConsumableArray(this.icon.generators));
      } // Don't add element if label is empty


      if (this.label && this.data.label.length !== 0) {
        var _this$generators2;

        this.element.appendChild(this.label.render().element);

        (_this$generators2 = this.generators).push.apply(_this$generators2, _toConsumableArray(this.label.generators));
      }

      this.generators.forEach(function (generator) {
        return generator.generate(_this);
      }); // remove possible parent background image if there should be none

      if (this.data.background_is_image[0] === false) {
        merge_default()(this.JSS, {
          button: {
            "&::before": {
              visibility: "hidden",
              opacity: "0"
            }
          }
        });
      }

      if (dlv_umd_default()(this.data.background_is_image, "1", this.data.background_is_image[0]) === false) {
        merge_default()(this.JSS, {
          button: {
            "&:hover": {
              "&::before": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          }
        });
      }

      if (this.data.box_shadow_enabled[0] === false) {
        merge_default()(this.JSS, {
          button: {
            "box-shadow": "none"
          }
        });
      }

      if (dlv_umd_default()(this.data.box_shadow_enabled, "1", this.data.box_shadow_enabled[0]) === false) {
        merge_default()(this.JSS, {
          button: {
            "&:hover": {
              "box-shadow": "none"
            }
          }
        });
      }

      merge_default()(this.JSS, {
        button: Button_objectSpread(Button_objectSpread(Button_objectSpread(Button_objectSpread({}, this.background(0)), this.backgroundImage(0)), this.boxShadow(0)), {}, {
          "&:hover": Button_objectSpread(Button_objectSpread(Button_objectSpread({}, this.background(1)), this.backgroundImage(1)), this.boxShadow(1))
        })
      });
      merge_default()(this.JSS, {
        button: (_button = {
          width: this.data.button_size,
          height: this.data.button_size,
          "border-radius": this.data.border_radius[0]
        }, Button_defineProperty(_button, "margin-".concat(this.data.vertical[0]), this.data.space), Button_defineProperty(_button, "&::before", {
          "border-radius": this.data.border_radius_override ? this.data.border_radius_override : this.data.border_radius[0]
        }), _button)
      }, this.icon.JSS, this.label.JSS);
      /* webpack-strip-block:removed */

      this.stylesheet.update(this.JSS); // Device visibility

      if (!this.data.show_desktop) {
        this.setHide("desktop");
      }

      if (!this.data.show_mobile) {
        this.setHide("mobile");
      }

      if (!this.data.is_menu_desktop) {
        this.setMenuStyling("desktop");
      }

      if (!this.data.is_menu_mobile) {
        this.setMenuStyling("mobile");
      } // Add action


      if (this.action) this.setAction(this.action);
      this.element.className = clsx_m(this.element.className, "buttonizer-button", this.stylesheet.classes.button);
      this.element.classList.add(this.stylesheet.classes.button);
      /* webpack-strip-block:removed */

      this.renderExtender.forEach(function (extender) {
        return extender.extend(_this);
      }); // Add accesebility referer

      if (this.label && this.data.label.length !== 0) {
        this.element.setAttribute("aria-describedby", this.stylesheet.classes.button + "-label");
      } else {
        this.element.setAttribute("aria-label", this.data.label !== "" ? this.data.label : this.data.name !== "" ? this.data.name : "Unnamed button with icon: ".concat(this.icon.data.icon[0]));
      }

      this.stylesheet.attach();
      return this;
    }
  }, {
    key: "setAction",
    value: function setAction(action) {
      var _this2 = this;

      // Add attribute
      if (action.addAttr() && action.addAttr().attr) this.element.setAttribute(action.addAttr().attr, action.addAttr().val); // Remove existing click events

      this.element.removeEventListener("click", function () {
        return _this2.action.execute();
      }); // Update action to latest version

      this.action = action;

      if (buttonizerInPreview_inPreview()) {
        this.element.addEventListener("contextmenu", function (e) {
          e.preventDefault(); // Disable some actions in preview mode

          if (disableActionInPreview.indexOf(_this2.data.type) >= 0) {
            messageButtonizerAdminEditor("action-disabled", _this2.data.type);
            return;
          }

          _this2.disableClickInPreview = false;

          _this2.element.click();
        });
      } // On click


      this.element.addEventListener("click", function (e) {
        // Disable button click action and link to editor
        if (buttonizerInPreview_inPreview() && _this2.disableClickInPreview || e.target.hasAttribute("data-no-action")) {
          e.preventDefault();
          return;
        }
        /* webpack-strip-block:removed */
        // Only activate button-click on groups
        // Do not trigger on menu-button click (different analytics behaviour, see OpenGroup.js)


        if (_this2.groupName) {
          googleAnalyticsEvent({
            type: "button-click",
            groupName: _this2.groupName,
            buttonName: _this2.data.name
          });
        } // Execute action


        _this2.action.execute();

        if (buttonizerInPreview_inPreview()) _this2.disableClickInPreview = true;
      });
    }
  }, {
    key: "setHide",
    value: function setHide(device) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        button: Button_defineProperty({}, "@media screen and (".concat(size, ")"), {
          display: "none"
        })
      });
    }
  }, {
    key: "setMenuStyling",
    value: function setMenuStyling(device) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      this.stylesheet.update({
        button: Button_defineProperty({}, "@media screen and (".concat(size, ")"), {
          width: this.data.group_size,
          height: this.data.group_size,
          visibility: "visible",
          opacity: "1"
        })
      });
    }
  }, {
    key: "hasBackgroundImage",
    value: function hasBackgroundImage() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (normal_hover === 1) return (// should have image, great
        this.data.background_is_image[1] === true || this.data.background_is_image[0] === true && this.data.background_is_image[1] == null
      );
      return (// should have image, great
        this.data.background_is_image[0] === true
      );
    }
  }, {
    key: "background",
    value: function background() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bgColor = this.data.background_color[normal_hover];

      if (normal_hover === 1) {
        bgColor = dlv_umd_default()(this.data.background_color, "1", this.data.background_color[0]);
      }

      if (bgColor == null) return {};

      if (bgColor.includes("gradient")) {
        /* webpack-strip-block:removed */
        return {
          "background-color": getFirstColor(bgColor)
        };
      }

      return {
        "background-image": "none",
        "background-color": bgColor
      };
    }
  }, {
    key: "backgroundImage",
    value: function backgroundImage() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var bg = this.data.background_image[normal_hover];
      /* webpack-strip-block:removed */

      return {};
    }
  }, {
    key: "hasBoxShadow",
    value: function hasBoxShadow() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (normal_hover === 1) return (// should have image, great
        this.data.box_shadow_enabled[1] === true || this.data.box_shadow_enabled[0] === true && this.data.box_shadow_enabled[1] == null
      );
      return (// should have image, great
        this.data.box_shadow_enabled[0] === true
      );
    }
  }, {
    key: "boxShadow",
    value: function boxShadow() {
      var normal_hover = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (this.data.box_shadow) {
        var shadow = this.data.box_shadow[normal_hover];
        if (shadow == null) return {};
        if (this.hasBoxShadow(normal_hover)) return {
          "box-shadow": shadow
        };
        return {};
      }

      return {};
    }
  }]);

  return Button;
}();


// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__(57557);
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);
// EXTERNAL MODULE: ./node_modules/lodash/pick.js
var pick = __webpack_require__(78718);
var pick_default = /*#__PURE__*/__webpack_require__.n(pick);
// EXTERNAL MODULE: ./node_modules/lodash/pullAll.js
var pullAll = __webpack_require__(45604);
var pullAll_default = /*#__PURE__*/__webpack_require__.n(pullAll);
// EXTERNAL MODULE: ./node_modules/lodash/isEqual.js
var isEqual = __webpack_require__(18446);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual);
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}
;// CONCATENATED MODULE: ./node_modules/is-in-browser/dist/module.js
var module_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : module_typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : module_typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ var dist_module = (isBrowser);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
function createClass_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function createClass_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) createClass_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) createClass_defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function setPrototypeOf_setPrototypeOf(o, p) {
  setPrototypeOf_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return setPrototypeOf_setPrototypeOf(o, p);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  setPrototypeOf_setPrototypeOf(subClass, superClass);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function assertThisInitialized_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
;// CONCATENATED MODULE: ./node_modules/jss/dist/jss.esm.js








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     false ? 0 : void 0;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
var toCssValue = function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
};

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var jss_esm_escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       false ? 0 : void 0;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(assertThisInitialized_assertThisInitialized(assertThisInitialized_assertThisInitialized(_this)), sheet);
      _this.selectorText = "." + jss_esm_escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  createClass_createClass(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name || "@" + this.at;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       false ? 0 : void 0;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : jss_esm_escape(generateId(this, sheet));
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       false ? 0 : void 0;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var jss_esm_plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  _inheritsLoose(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? _extends({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, jss_esm_plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = _extends({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name,
      keyframes: this.keyframes,
      selector: undefined
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + jss_esm_escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe[invalid-tuple-index]

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);

    if (!rule || // Style sheet was created without link: true and attached, in this case we
    // won't be able to remove the CSS rule from the DOM.
    this.attached && !rule.renderable) {
      return false;
    }

    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe[prop-missing]
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           false ? 0 : void 0;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  createClass_createClass(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var registry = new SheetsRegistry();

/* eslint-disable */

/**
 * Now that `globalThis` is available on most platforms
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
 * we check for `globalThis` first. `globalThis` is necessary for jss
 * to run in Agoric's secure version of JavaScript (SES). Under SES,
 * `globalThis` exists, but `window`, `self`, and `Function('return
 * this')()` are all undefined for security reasons.
 *
 * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
 */
var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis$1[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       false ? 0 : void 0;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
var getPropertyValue = function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
};

/**
 * Set a style property.
 */
var setProperty = function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
};

/**
 * Remove a style property.
 */
var removeProperty = function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     false ? 0 : void 0;
  }
};

/**
 * Set the selector.
 */
var setSelector = function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
};
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


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

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry$1 = registry.registry;

  if (registry$1.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry$1, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     false ? 0 : void 0;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  false ? 0 : void 0;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     false ? 0 : void 0;
    return false;
  }

  return container.cssRules[index];
};

var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    return maxIndex;
  }

  return index;
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  // Will be empty if link: true option is not set, because
  // it is only for use together with insertRule API.
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    this.cssRules = [];
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) registry.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.sheet) return;
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
    // Though IE will keep them and we need a consistent behavior.

    if (this.sheet.options.link) {
      this.cssRules = [];
      this.element.textContent = '\n';
    }
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), _insertionIndex);

        if (latestNativeParent === false) {
          return false;
        }

        this.refCssRule(rule, _insertionIndex, latestNativeParent);
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;
    var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

    var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    this.refCssRule(rule, insertionIndex, nativeRule);
    return nativeRule;
  };

  _proto.refCssRule = function refCssRule(rule, index, cssRule) {
    rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
    // like rules inside media queries or keyframes

    if (rule.options.parent instanceof StyleSheet) {
      this.cssRules[index] = cssRule;
    }
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    return this.cssRules.indexOf(cssRule);
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    this.cssRules.splice(index, 1);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.6.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: dist_module ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = _extends({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = registry.index === 0 ? 0 : registry.index + 1;
    }

    var sheet = new StyleSheet(styles, _extends({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    registry.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      // $FlowFixMe[incompatible-call]
      return this.createRule(undefined, name, style);
    } // $FlowFixMe[incompatible-type]


    var ruleOptions = _extends({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
(/* unused pure expression or super */ null && (function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    warning(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      warning(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  _createClass(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}()));

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var jss = create();

/* harmony default export */ var jss_esm = (jss);


;// CONCATENATED MODULE: ./src/js/frontend/Utils/Style.js
function Style_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Style_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Style_ownKeys(Object(source), true).forEach(function (key) { Style_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Style_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Style_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Style_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Style = function Style(styles, options) {
  var _this = this;

  Style_classCallCheck(this, Style);

  this.cachedData = styles;
  var sheet = jss_esm.createStyleSheet(Object.keys(styles) // [button, icon]
  .reduce(function (acc, key) {
    return Style_objectSpread(Style_objectSpread({}, acc), {}, Style_defineProperty({}, key, function (data) {
      return data[key];
    }));
  }, {}), Style_objectSpread({
    link: true,
    element: document.getElementById("buttonizer-styling"),
    classNamePrefix: "buttonizer-"
  }, options));
  sheet.oldUpdate = sheet.update;

  sheet.update = function (data) {
    merge_default()(_this.cachedData, data);
  };

  sheet.oldAttach = sheet.attach;

  sheet.attach = function () {
    sheet.oldUpdate(_this.cachedData);
    sheet.oldAttach();
  };

  sheet.getCachedData = function () {
    return _this.cachedData;
  };

  return sheet;
};


;// CONCATENATED MODULE: ./src/js/frontend/Utils/Stylesheets.js
function Stylesheets_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Stylesheets_button() {
  var _button, _label;

  return new Style({
    button: (_button = {
      display: "block",
      cursor: "pointer",
      outline: "none",
      position: "relative",
      width: 42,
      height: 42,
      maxWidth: "none !important",
      color: "#fff",
      "background-color": "#48A4DC",
      "box-shadow": "0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12)",
      textAlign: "center",
      textDecoration: "none",
      margin: "0 auto 0 auto",
      "border-radius": "50%",
      transition: "ease-in-out 250ms",
      visibility: "visible"
    }, Stylesheets_defineProperty(_button, "outline", "none !important"), Stylesheets_defineProperty(_button, "userSelect", "none"), Stylesheets_defineProperty(_button, "background-size", "cover"), Stylesheets_defineProperty(_button, "background-repeat", "no-repeat"), Stylesheets_defineProperty(_button, "background-position", "center center"), Stylesheets_defineProperty(_button, "&::before", {
      content: "''",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "background-position": "center center",
      "border-radius": "50%",
      position: "absolute",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      left: 0,
      top: 0,
      transition: "all 250ms ease-in-out 0s"
    }), Stylesheets_defineProperty(_button, "&:hover", {
      "&::before": {
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center center"
      },
      "background-color": "#F08419",
      "box-shadow": "0 5px 11px 0 rgba(0,0,0,0.18), 0 4px 15px 0 rgba(0,0,0,0.15)",
      "background-size": "cover",
      "background-repeat": "no-repeat",
      "background-position": "center center"
    }), _button),
    icon: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      "font-size": "16px",
      color: "#fff",
      "text-align": "center",
      transition: "all 0.2s ease-out",
      "z-index": 1
    },
    image: {
      width: 16,
      "max-width": "unset",
      transition: "all 0.2s ease-out",
      position: "absolute",
      transform: "translate(-50%,-50%)",
      top: "50%",
      left: "50%",
      "z-index": 1
    },
    label: (_label = {
      color: "#FFFFFFFF",
      background: "#4E4C4CFF",
      "font-size": 12,
      "font-family": "unset",
      "border-radius": "3px 3px 3px 3px",
      margin: "0px 0px 0px 0px",
      padding: "5px 15px 5px 15px",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      transition: "all 0.1s ease-out",
      "line-height": "initial",
      "white-space": "nowrap"
    }, Stylesheets_defineProperty(_label, "transition", "all 0.2s ease-out"), Stylesheets_defineProperty(_label, "& img", {
      "max-width": "initial"
    }), Stylesheets_defineProperty(_label, "z-index", 1), _label),
    opened: {},
    closed: {},
    exit_intent_animate: {}
  }, {
    link: true
  });
}
function Stylesheets_group() {
  return new Style({
    group: {
      position: "fixed",
      display: "flex",
      visibility: "hidden",
      // bottom: typeof data.vertical === "undefined" ? "5%" : undefined,
      // right: typeof data.horizontal === "undefined" ? "5%" : undefined,
      "z-index": 99999,
      transition: "ease-in-out 250ms"
    },
    hidden: {
      opacity: 0,
      visibility: "hidden",
      transform: "translate(0, 50px)",
      pointerEvents: "none"
    }
  }, {
    link: true
  });
}
;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Default.js
function Default_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Default_typeof = function _typeof(obj) { return typeof obj; }; } else { Default_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Default_typeof(obj); }

function Default_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Default_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Default_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Default_createClass(Constructor, protoProps, staticProps) { if (protoProps) Default_defineProperties(Constructor.prototype, protoProps); if (staticProps) Default_defineProperties(Constructor, staticProps); return Constructor; }

function Default_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Default_setPrototypeOf(subClass, superClass); }

function Default_setPrototypeOf(o, p) { Default_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Default_setPrototypeOf(o, p); }

function Default_createSuper(Derived) { var hasNativeReflectConstruct = Default_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Default_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Default_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Default_possibleConstructorReturn(this, result); }; }

function Default_possibleConstructorReturn(self, call) { if (call && (Default_typeof(call) === "object" || typeof call === "function")) { return call; } return Default_assertThisInitialized(self); }

function Default_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Default_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Default_getPrototypeOf(o) { Default_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Default_getPrototypeOf(o); }



var Default = /*#__PURE__*/function (_Generator) {
  Default_inherits(Default, _Generator);

  var _super = Default_createSuper(Default);

  function Default() {
    Default_classCallCheck(this, Default);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Default_createClass(Default, [{
    key: "createJss",
    value: function createJss(group, device, isMenu, buttonSize) {
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var previousHeight = 0;
      var buttonCount = 0;
      Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          previousHeight = button.data.group_size;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          button.stylesheet.update({
            opened: Default_defineProperty({}, deviceKey, {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            })
          });
        } else {
          if (isMenu) {
            var _deviceKey;

            var diff = parseInt(buttonSize) / 2 + parseInt(previousHeight) / 2;
            previousHeight = buttonSize;
            button.stylesheet.update({
              closed: Default_defineProperty({}, deviceKey, (_deviceKey = {}, Default_defineProperty(_deviceKey, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")), Default_defineProperty(_deviceKey, "opacity", 0), Default_defineProperty(_deviceKey, "visibility", "hidden"), Default_defineProperty(_deviceKey, "pointer-events", "none"), Default_defineProperty(_deviceKey, "& $label", {
                visibility: "hidden",
                opacity: "0"
              }), _deviceKey))
            });
          } else {
            if (buttonCount === 0) {
              button.stylesheet.update({
                button: Default_defineProperty({}, deviceKey, Default_defineProperty({}, "margin-".concat(group.data.vertical[0]), 0))
              });
            } // Update button count


            if (visibility) {
              buttonCount++;
            }
          }
        }
      });
    }
  }]);

  return Default;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Pop.js
function Pop_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Pop_typeof = function _typeof(obj) { return typeof obj; }; } else { Pop_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Pop_typeof(obj); }

function Pop_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Pop_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Pop_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Pop_createClass(Constructor, protoProps, staticProps) { if (protoProps) Pop_defineProperties(Constructor.prototype, protoProps); if (staticProps) Pop_defineProperties(Constructor, staticProps); return Constructor; }

function Pop_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Pop_setPrototypeOf(subClass, superClass); }

function Pop_setPrototypeOf(o, p) { Pop_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Pop_setPrototypeOf(o, p); }

function Pop_createSuper(Derived) { var hasNativeReflectConstruct = Pop_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Pop_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Pop_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Pop_possibleConstructorReturn(this, result); }; }

function Pop_possibleConstructorReturn(self, call) { if (call && (Pop_typeof(call) === "object" || typeof call === "function")) { return call; } return Pop_assertThisInitialized(self); }

function Pop_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Pop_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Pop_getPrototypeOf(o) { Pop_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Pop_getPrototypeOf(o); }



var Pop = /*#__PURE__*/function (_Generator) {
  Pop_inherits(Pop, _Generator);

  var _super = Pop_createSuper(Pop);

  function Pop() {
    Pop_classCallCheck(this, Pop);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Pop_createClass(Pop, [{
    key: "createJss",
    value: function createJss(group, device, isMenu) {
      // Count button index
      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          button.stylesheet.update({
            button: {
              width: 56,
              height: 56,
              "z-index": 9999
            }
          });
          if (button.icon) button.icon.stylesheet.update({
            icon: {
              "font-size": "25px",
              transition: "all ease-in-out 250ms"
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else if (visibility) {
          if (isMenu) {
            button.stylesheet.update({
              closed: Pop_defineProperty({}, deviceKey, {
                transform: "scale(0)",
                opacity: 0,
                visibility: "hidden",
                "pointer-events": "none",
                "& $label": {
                  visibility: "hidden",
                  opacity: "0"
                }
              })
            });
            button.stylesheet.update({
              opened: Pop_defineProperty({}, deviceKey, {
                opacity: 1,
                visibility: "visible",
                transform: "scale(1)",
                transition: "all 300ms ease-in, transform 200ms ".concat(buttonCount * 35, "ms,\n              opacity 200ms ").concat(buttonCount * 35, "ms")
              })
            }); // Update button count

            if (visibility) {
              buttonCount++;
            }
          } else {
            if (buttonCount === 0) {
              button.stylesheet.update({
                button: Pop_defineProperty({}, deviceKey, Pop_defineProperty({}, "margin-".concat(group.data.vertical[0]), 0))
              });
            } // Update button count


            if (visibility) {
              buttonCount++;
            }
          }
        }
      });
    }
  }]);

  return Pop;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/Faded.js
function Faded_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Faded_typeof = function _typeof(obj) { return typeof obj; }; } else { Faded_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Faded_typeof(obj); }

function Faded_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Faded_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Faded_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Faded_createClass(Constructor, protoProps, staticProps) { if (protoProps) Faded_defineProperties(Constructor.prototype, protoProps); if (staticProps) Faded_defineProperties(Constructor, staticProps); return Constructor; }

function Faded_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Faded_setPrototypeOf(subClass, superClass); }

function Faded_setPrototypeOf(o, p) { Faded_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Faded_setPrototypeOf(o, p); }

function Faded_createSuper(Derived) { var hasNativeReflectConstruct = Faded_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Faded_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Faded_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Faded_possibleConstructorReturn(this, result); }; }

function Faded_possibleConstructorReturn(self, call) { if (call && (Faded_typeof(call) === "object" || typeof call === "function")) { return call; } return Faded_assertThisInitialized(self); }

function Faded_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Faded_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function Faded_getPrototypeOf(o) { Faded_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Faded_getPrototypeOf(o); }



var Faded = /*#__PURE__*/function (_Generator) {
  Faded_inherits(Faded, _Generator);

  var _super = Faded_createSuper(Faded);

  function Faded() {
    Faded_classCallCheck(this, Faded);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  Faded_createClass(Faded, [{
    key: "createJss",
    value: function createJss(group, device, isMenu) {
      // Count button index
      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          button.stylesheet.update({
            button: {
              "z-index": 9999999
            }
          });
          button.stylesheet.update({
            opened: Faded_defineProperty({}, deviceKey, {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            })
          });
        } else if (visibility) {
          if (isMenu) {
            var _deviceKey, _deviceKey2;

            button.stylesheet.update({
              closed: Faded_defineProperty({}, deviceKey, (_deviceKey = {}, Faded_defineProperty(_deviceKey, group.data.horizontal[0], "-50px"), Faded_defineProperty(_deviceKey, "opacity", 0), Faded_defineProperty(_deviceKey, "visibility", "hidden"), Faded_defineProperty(_deviceKey, "transition", "all 300ms ease-in"), Faded_defineProperty(_deviceKey, "pointer-events", "none"), Faded_defineProperty(_deviceKey, "& $label", {
                visibility: "hidden",
                opacity: "0"
              }), _deviceKey))
            });
            button.stylesheet.update({
              opened: Faded_defineProperty({}, deviceKey, (_deviceKey2 = {}, Faded_defineProperty(_deviceKey2, group.data.horizontal[0], "0px"), Faded_defineProperty(_deviceKey2, "opacity", 1), Faded_defineProperty(_deviceKey2, "visibility", "visible"), Faded_defineProperty(_deviceKey2, "transition", "all 300ms ease-in, ".concat(group.data.horizontal[0], " 300ms ").concat(buttonCount * 150, "ms,\n              opacity 300ms ").concat(buttonCount * 150, "ms")), _deviceKey2))
            }); // Update button count

            if (visibility) {
              buttonCount++;
            }
          } else {
            if (buttonCount === 0) {
              button.stylesheet.update({
                button: Faded_defineProperty({}, deviceKey, Faded_defineProperty({}, "margin-".concat(group.data.vertical[0]), 0))
              });
            } // Update button count


            if (visibility) {
              buttonCount++;
            }
          }
        }
      });
    }
  }]);

  return Faded;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/BuildUp.js
function BuildUp_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { BuildUp_typeof = function _typeof(obj) { return typeof obj; }; } else { BuildUp_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return BuildUp_typeof(obj); }

function BuildUp_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function BuildUp_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function BuildUp_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function BuildUp_createClass(Constructor, protoProps, staticProps) { if (protoProps) BuildUp_defineProperties(Constructor.prototype, protoProps); if (staticProps) BuildUp_defineProperties(Constructor, staticProps); return Constructor; }

function BuildUp_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) BuildUp_setPrototypeOf(subClass, superClass); }

function BuildUp_setPrototypeOf(o, p) { BuildUp_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return BuildUp_setPrototypeOf(o, p); }

function BuildUp_createSuper(Derived) { var hasNativeReflectConstruct = BuildUp_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = BuildUp_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = BuildUp_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return BuildUp_possibleConstructorReturn(this, result); }; }

function BuildUp_possibleConstructorReturn(self, call) { if (call && (BuildUp_typeof(call) === "object" || typeof call === "function")) { return call; } return BuildUp_assertThisInitialized(self); }

function BuildUp_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function BuildUp_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function BuildUp_getPrototypeOf(o) { BuildUp_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return BuildUp_getPrototypeOf(o); }



var BuildUp = /*#__PURE__*/function (_Generator) {
  BuildUp_inherits(BuildUp, _Generator);

  var _super = BuildUp_createSuper(BuildUp);

  function BuildUp() {
    BuildUp_classCallCheck(this, BuildUp);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  BuildUp_createClass(BuildUp, [{
    key: "createJss",
    value: function createJss(group, device, isMenu, buttonSize) {
      var previousHeight = 56; // Count button index

      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          previousHeight = button.data.group_size;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          button.stylesheet.update({
            opened: {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: "0"
              }
            }
          });
        } else if (visibility) {
          if (isMenu) {
            var _deviceKey;

            var diff = parseInt(buttonSize) / 2 + parseInt(previousHeight) / 2;
            previousHeight = buttonSize;
            button.stylesheet.update({
              closed: BuildUp_defineProperty({}, deviceKey, (_deviceKey = {
                "pointer-events": "none"
              }, BuildUp_defineProperty(_deviceKey, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")), BuildUp_defineProperty(_deviceKey, "opacity", 0), BuildUp_defineProperty(_deviceKey, "visibility", "hidden"), BuildUp_defineProperty(_deviceKey, "& $label", {
                visibility: "hidden",
                opacity: "0"
              }), _deviceKey))
            });
            button.stylesheet.update({
              opened: BuildUp_defineProperty({}, deviceKey, {
                transition: "all ease-in-out 250ms, margin-".concat(group.data.vertical[0], " 200ms ").concat(buttonCount * 150, "ms,\n              opacity 200ms ").concat(buttonCount * 150, "ms"),
                opacity: 1,
                visibility: "visible"
              })
            }); // Update button count

            if (visibility) {
              buttonCount++;
            }
          } else {
            if (buttonCount === 0) {
              button.stylesheet.update({
                button: BuildUp_defineProperty({}, deviceKey, BuildUp_defineProperty({}, "margin-".concat(group.data.vertical[0]), 0))
              });
            } // Update button count


            if (visibility) {
              buttonCount++;
            }
          }
        }
      });
    }
  }]);

  return BuildUp;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/CornerCircle.js
function CornerCircle_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CornerCircle_typeof = function _typeof(obj) { return typeof obj; }; } else { CornerCircle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CornerCircle_typeof(obj); }

function CornerCircle_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function CornerCircle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CornerCircle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CornerCircle_createClass(Constructor, protoProps, staticProps) { if (protoProps) CornerCircle_defineProperties(Constructor.prototype, protoProps); if (staticProps) CornerCircle_defineProperties(Constructor, staticProps); return Constructor; }

function CornerCircle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CornerCircle_setPrototypeOf(subClass, superClass); }

function CornerCircle_setPrototypeOf(o, p) { CornerCircle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CornerCircle_setPrototypeOf(o, p); }

function CornerCircle_createSuper(Derived) { var hasNativeReflectConstruct = CornerCircle_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CornerCircle_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CornerCircle_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CornerCircle_possibleConstructorReturn(this, result); }; }

function CornerCircle_possibleConstructorReturn(self, call) { if (call && (CornerCircle_typeof(call) === "object" || typeof call === "function")) { return call; } return CornerCircle_assertThisInitialized(self); }

function CornerCircle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CornerCircle_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CornerCircle_getPrototypeOf(o) { CornerCircle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CornerCircle_getPrototypeOf(o); }

 // Might move this function to a different file.

var getCoordinates = function getCoordinates() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var hor = arguments.length > 1 ? arguments[1] : undefined;
  var ver = arguments.length > 2 ? arguments[2] : undefined;
  // Used for starting every row at index 0
  var indexCorrection = 0; // Used for a small correction in radius, which puts the buttons closer together

  var radiusCorrection = 1.2; // X and Y, x starts at -1 so the initial condition is incorrect.

  var y;
  var x = -1; // Start at first row

  var r = 1; // Start at index 0

  var i = 0;

  do {
    x = Math.round(70 * Math.cos(0.5 * (i - indexCorrection) * Math.PI / (r + 1))); // px

    y = Math.round(70 * Math.sin(0.5 * (i - indexCorrection) * Math.PI / (r + 1)));
    i++;

    if (x < 0) {
      // If x is smaller dan 0, it it out of bounds and we should try again on the next row
      i--;
      indexCorrection = i;
      radiusCorrection += 0.9;
      r += 1;
    } // Generate every step until we reach *index*

  } while (i <= index);

  x = radiusCorrection * x;
  y = radiusCorrection * y; // Flip menu when on other side

  if (hor === "right") x = -x;
  if (ver === "bottom") y = -y;
  return [x, y];
};

var CornerCircle = /*#__PURE__*/function (_Generator) {
  CornerCircle_inherits(CornerCircle, _Generator);

  var _super = CornerCircle_createSuper(CornerCircle);

  function CornerCircle() {
    CornerCircle_classCallCheck(this, CornerCircle);

    return _super.call(this);
    /**
     * This generator is used for turning a normal button into a menu button.
     */
  }

  CornerCircle_createClass(CornerCircle, [{
    key: "createJss",
    value: function createJss(group, device, isMenu, buttonSize) {
      var previousHeight = 56; // Count button index

      var buttonCount = 0;
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      Object.keys(group.buttons).map(function (key) {
        var button = group.buttons[key];
        var visibility = device === "mobile" ? button.visibility.mobile() : button.visibility.desktop();

        if (key === group.menuButton) {
          previousHeight = button.data.group_size;
          button.stylesheet.update({
            button: {
              "z-index": 9999
            }
          });
          button.stylesheet.update({
            opened: CornerCircle_defineProperty({}, deviceKey, {
              "& $icon": {
                transform: "translate(-50%, -50%) rotate(45deg)"
              },
              "& $label": {
                visibility: "hidden",
                opacity: 0,
                pointerEvents: "none"
              }
            })
          });
        } else if (visibility) {
          if (isMenu) {
            var _deviceKey2;

            var diff = parseInt(buttonSize) / 2 + parseInt(previousHeight) / 2;
            previousHeight = buttonSize;
            var coorDesktop = getCoordinates(buttonCount, group.data.horizontal[0], group.data.vertical[0]);
            button.stylesheet.update({
              closed: CornerCircle_defineProperty({}, deviceKey, CornerCircle_defineProperty({
                opacity: 0,
                visibility: "hidden",
                "pointer-events": "none",
                "& $label": {
                  visibility: "hidden",
                  opacity: "0"
                }
              }, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")))
            });
            button.stylesheet.update({
              opened: CornerCircle_defineProperty({}, deviceKey, (_deviceKey2 = {
                opacity: 1,
                visibility: "visible"
              }, CornerCircle_defineProperty(_deviceKey2, "margin-".concat(group.data.vertical[0]), "-".concat(diff, "px")), CornerCircle_defineProperty(_deviceKey2, "transform", "translate(".concat(coorDesktop[0], "px, ").concat(coorDesktop[1], "px)")), CornerCircle_defineProperty(_deviceKey2, "transition", "all ease-in-out 250ms, transform 200ms ".concat(buttonCount * 150, "ms, opacity 200ms ").concat(buttonCount * 150, "ms")), CornerCircle_defineProperty(_deviceKey2, "& $label", {
                visibility: "hidden",
                opacity: 0,
                pointerEvents: "none"
              }), CornerCircle_defineProperty(_deviceKey2, "&:hover", {
                "z-index": 1
              }), CornerCircle_defineProperty(_deviceKey2, "&:hover $label", {
                visibility: "visible",
                opacity: 1
              }), _deviceKey2))
            }); // Update button count

            if (visibility) {
              buttonCount++;
            }
          } else {
            if (buttonCount === 0) {
              button.stylesheet.update({
                button: CornerCircle_defineProperty({}, deviceKey, CornerCircle_defineProperty({}, "margin-".concat(group.data.vertical[0]), 0))
              });
            } // Update button count


            if (visibility) {
              buttonCount++;
            }
          }
        }
      });
    }
  }]);

  return CornerCircle;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/OpeningAnimations/index.js





/* harmony default export */ var OpeningAnimations = ({
  "default": Default,
  pop: Pop,
  faded: Faded,
  "building-up": BuildUp,
  "corner-circle": CornerCircle
});
;// CONCATENATED MODULE: ./src/js/frontend/renderExtender/template.js
function renderExtender_template_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function renderExtender_template_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function renderExtender_template_createClass(Constructor, protoProps, staticProps) { if (protoProps) renderExtender_template_defineProperties(Constructor.prototype, protoProps); if (staticProps) renderExtender_template_defineProperties(Constructor, staticProps); return Constructor; }

var template_Generator = /*#__PURE__*/function () {
  function Generator() {
    var group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    renderExtender_template_classCallCheck(this, Generator);

    this.group = group;
  }

  renderExtender_template_createClass(Generator, [{
    key: "extend",
    value: function extend() {} // Placeholder

  }, {
    key: "createJss",
    value: function createJss() {}
  }]);

  return Generator;
}();


;// CONCATENATED MODULE: ./src/js/frontend/renderExtender/SetSameHeightLabels.js
function SetSameHeightLabels_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetSameHeightLabels_typeof = function _typeof(obj) { return typeof obj; }; } else { SetSameHeightLabels_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetSameHeightLabels_typeof(obj); }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, undefined, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = _RegExp.call(this, re, flags); _groups.set(_this, groups || _groups.get(re)); return _this; } SetSameHeightLabels_inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (SetSameHeightLabels_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, SetSameHeightLabels_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return SetSameHeightLabels_setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (SetSameHeightLabels_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) SetSameHeightLabels_setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function SetSameHeightLabels_toConsumableArray(arr) { return SetSameHeightLabels_arrayWithoutHoles(arr) || SetSameHeightLabels_iterableToArray(arr) || SetSameHeightLabels_unsupportedIterableToArray(arr) || SetSameHeightLabels_nonIterableSpread(); }

function SetSameHeightLabels_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SetSameHeightLabels_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SetSameHeightLabels_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SetSameHeightLabels_arrayLikeToArray(o, minLen); }

function SetSameHeightLabels_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function SetSameHeightLabels_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return SetSameHeightLabels_arrayLikeToArray(arr); }

function SetSameHeightLabels_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SetSameHeightLabels_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SetSameHeightLabels_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetSameHeightLabels_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetSameHeightLabels_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetSameHeightLabels_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetSameHeightLabels_defineProperties(Constructor, staticProps); return Constructor; }

function SetSameHeightLabels_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetSameHeightLabels_setPrototypeOf(subClass, superClass); }

function SetSameHeightLabels_setPrototypeOf(o, p) { SetSameHeightLabels_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetSameHeightLabels_setPrototypeOf(o, p); }

function SetSameHeightLabels_createSuper(Derived) { var hasNativeReflectConstruct = SetSameHeightLabels_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SetSameHeightLabels_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SetSameHeightLabels_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SetSameHeightLabels_possibleConstructorReturn(this, result); }; }

function SetSameHeightLabels_possibleConstructorReturn(self, call) { if (call && (SetSameHeightLabels_typeof(call) === "object" || typeof call === "function")) { return call; } return SetSameHeightLabels_assertThisInitialized(self); }

function SetSameHeightLabels_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SetSameHeightLabels_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SetSameHeightLabels_getPrototypeOf(o) { SetSameHeightLabels_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetSameHeightLabels_getPrototypeOf(o); }





var SetSameHeightLabels = /*#__PURE__*/function (_Generator) {
  SetSameHeightLabels_inherits(SetSameHeightLabels, _Generator);

  var _super = SetSameHeightLabels_createSuper(SetSameHeightLabels);

  function SetSameHeightLabels() {
    SetSameHeightLabels_classCallCheck(this, SetSameHeightLabels);

    return _super.apply(this, arguments);
  }

  SetSameHeightLabels_createClass(SetSameHeightLabels, [{
    key: "extend",
    value: function extend(button) {
      button.stylesheet.update(this.getJSS(button, "mobile", button.data.is_menu_mobile, button.data.is_menu_mobile ? button.data.button_size : button.data.group_size));
      button.stylesheet.update(this.getJSS(button, "desktop", button.data.is_menu_desktop, button.data.is_menu_desktop ? button.data.button_size : button.data.group_size));
    }
  }, {
    key: "getJSS",
    value: function getJSS(button, device, isMenu, buttonSize) {
      return merge_default()({}, this.setPadding(button, device, isMenu, buttonSize), this.setSameHeightLabels(button, device, isMenu, buttonSize));
    }
  }, {
    key: "setSameHeightLabels",
    value: function setSameHeightLabels(button, device, isMenu, buttonSize) {
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      return {
        label: SetSameHeightLabels_defineProperty({}, deviceKey, {
          height: buttonSize,
          "line-height": buttonSize + "px"
        })
      };
    }
  }, {
    key: "setPadding",
    value: function setPadding(button, device) {
      var deviceKey = device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)";
      var label_paddingNormal = dlv_umd_default()(button, "data.label_padding.0", "5px 15px 5px 15px");
      var label_paddingHover = dlv_umd_default()(button, "data.label_padding.1", label_paddingNormal);

      var paddingNormalGroups = SetSameHeightLabels_toConsumableArray(label_paddingNormal.matchAll( /*#__PURE__*/_wrapRegExp(/(.*px) (.*px) (.*px) (.*px)/g, {
        top: 1,
        right: 2,
        bottom: 3,
        left: 4
      })))[0]["groups"];

      var paddingHoverGroups = SetSameHeightLabels_toConsumableArray(label_paddingHover.matchAll( /*#__PURE__*/_wrapRegExp(/(.*px) (.*px) (.*px) (.*px)/g, {
        top: 1,
        right: 2,
        bottom: 3,
        left: 4
      })))[0]["groups"];

      return {
        label: SetSameHeightLabels_defineProperty({}, deviceKey, {
          padding: "0px ".concat(paddingNormalGroups.right, " 0px ").concat(paddingNormalGroups.left)
        }),
        button: SetSameHeightLabels_defineProperty({}, deviceKey, {
          "&:hover": {
            "& $label": {
              padding: "0px ".concat(paddingHoverGroups.right, " 0px ").concat(paddingHoverGroups.left)
            }
          }
        })
      };
    }
  }]);

  return SetSameHeightLabels;
}(template_Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/SingleButton.js
function SingleButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SingleButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SingleButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SingleButton_typeof(obj); }

function SingleButton_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SingleButton_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SingleButton_ownKeys(Object(source), true).forEach(function (key) { SingleButton_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SingleButton_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SingleButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SingleButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SingleButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SingleButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SingleButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SingleButton_defineProperties(Constructor, staticProps); return Constructor; }

function SingleButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SingleButton_setPrototypeOf(subClass, superClass); }

function SingleButton_setPrototypeOf(o, p) { SingleButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SingleButton_setPrototypeOf(o, p); }

function SingleButton_createSuper(Derived) { var hasNativeReflectConstruct = SingleButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SingleButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SingleButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SingleButton_possibleConstructorReturn(this, result); }; }

function SingleButton_possibleConstructorReturn(self, call) { if (call && (SingleButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SingleButton_assertThisInitialized(self); }

function SingleButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SingleButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SingleButton_getPrototypeOf(o) { SingleButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SingleButton_getPrototypeOf(o); }





var SingleButton = /*#__PURE__*/function (_Generator) {
  SingleButton_inherits(SingleButton, _Generator);

  var _super = SingleButton_createSuper(SingleButton);

  function SingleButton(_ref) {
    var _this;

    var button = _ref.button,
        visibility = _ref.visibility,
        hideMenu = _ref.hideMenu;

    SingleButton_classCallCheck(this, SingleButton);

    _this = _super.call(this);
    _this.visibility = visibility;
    _this.button = button; // button id

    _this.hideMenu = hideMenu; // Should hide menu button in other device too

    return _this;
  }

  SingleButton_createClass(SingleButton, [{
    key: "generate",
    value: function generate(group) {
      var _objectSpread2;

      var sameHeight;
      if (group.data.label_same_height === true && group.data.label_inside === false) sameHeight = new SetSameHeightLabels().getJSS({
        data: SingleButton_objectSpread(SingleButton_objectSpread({}, group.buttons[this.button].data), {}, {
          width: group.data.width,
          height: group.data.width
        })
      }); // Update single button size & visibilty

      var jssSingleButton = SingleButton_objectSpread((_objectSpread2 = {
        width: group.data.width,
        height: group.data.height
      }, SingleButton_defineProperty(_objectSpread2, "margin-".concat(group.data.vertical[0]), "0 !important"), SingleButton_defineProperty(_objectSpread2, group.data.horizontal[0], "0px !important"), SingleButton_defineProperty(_objectSpread2, "visibility", "visible !important"), SingleButton_defineProperty(_objectSpread2, "opacity", "1 !important"), SingleButton_defineProperty(_objectSpread2, "pointer-events", "unset !important"), _objectSpread2), dlv_umd_default()(sameHeight, "button", {}));

      var horizontalProperty = group.buttons[this.button].data.horizontal_position_label === "auto" ? group.buttons[this.button].data.horizontal[0] : group.buttons[this.button].data.horizontal_position_label; // Adjust label spacing based on group size

      var jssSingleButtonLabel = SingleButton_objectSpread(SingleButton_defineProperty({}, horizontalProperty, group.buttons[this.button].data.label_spacing + (group.buttons[this.button].data.label_inside ? 0 : group.data.width)), dlv_umd_default()(sameHeight, "label", {})); // Hide menu button


      var jssHideMenuButton = {
        display: "none !important"
      };

      switch (this.visibility) {
        // Update the styling for desktop if it's a single button on desktop
        case "desktop":
          group.buttons[this.button].stylesheet.update({
            button: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssSingleButton),
            label: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssSingleButtonLabel)
          });

          if (group.menuButton) {
            // Hide main button
            group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssHideMenuButton)
            });
            if (this.hideMenu) group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssHideMenuButton)
            });
          }

          break;
        // Update the styling for mobile if it's a single button on mobile

        case "mobile":
          group.buttons[this.button].stylesheet.update({
            button: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssSingleButton),
            label: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssSingleButtonLabel)
          });

          if (group.menuButton) {
            // Hide main button
            group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (max-width: 769px)", jssHideMenuButton)
            });
            if (this.hideMenu) group.buttons[group.menuButton].stylesheet.update({
              button: SingleButton_defineProperty({}, "@media screen and (min-width: 769px)", jssHideMenuButton)
            });
          }

          break;
      }
    }
  }]);

  return SingleButton;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/AttentionAnimation.js
function AttentionAnimation_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AttentionAnimation_typeof = function _typeof(obj) { return typeof obj; }; } else { AttentionAnimation_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AttentionAnimation_typeof(obj); }

function AttentionAnimation_toConsumableArray(arr) { return AttentionAnimation_arrayWithoutHoles(arr) || AttentionAnimation_iterableToArray(arr) || AttentionAnimation_unsupportedIterableToArray(arr) || AttentionAnimation_nonIterableSpread(); }

function AttentionAnimation_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function AttentionAnimation_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AttentionAnimation_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AttentionAnimation_arrayLikeToArray(o, minLen); }

function AttentionAnimation_iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function AttentionAnimation_arrayWithoutHoles(arr) { if (Array.isArray(arr)) return AttentionAnimation_arrayLikeToArray(arr); }

function AttentionAnimation_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function AttentionAnimation_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function AttentionAnimation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AttentionAnimation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AttentionAnimation_createClass(Constructor, protoProps, staticProps) { if (protoProps) AttentionAnimation_defineProperties(Constructor.prototype, protoProps); if (staticProps) AttentionAnimation_defineProperties(Constructor, staticProps); return Constructor; }

function AttentionAnimation_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AttentionAnimation_setPrototypeOf(subClass, superClass); }

function AttentionAnimation_setPrototypeOf(o, p) { AttentionAnimation_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AttentionAnimation_setPrototypeOf(o, p); }

function AttentionAnimation_createSuper(Derived) { var hasNativeReflectConstruct = AttentionAnimation_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = AttentionAnimation_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = AttentionAnimation_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return AttentionAnimation_possibleConstructorReturn(this, result); }; }

function AttentionAnimation_possibleConstructorReturn(self, call) { if (call && (AttentionAnimation_typeof(call) === "object" || typeof call === "function")) { return call; } return AttentionAnimation_assertThisInitialized(self); }

function AttentionAnimation_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AttentionAnimation_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function AttentionAnimation_getPrototypeOf(o) { AttentionAnimation_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AttentionAnimation_getPrototypeOf(o); }







var AttentionAnimation = /*#__PURE__*/function (_Generator) {
  AttentionAnimation_inherits(AttentionAnimation, _Generator);

  var _super = AttentionAnimation_createSuper(AttentionAnimation);

  function AttentionAnimation(_ref) {
    var _this;

    var data = _ref.data;

    AttentionAnimation_classCallCheck(this, AttentionAnimation);

    _this = _super.call(this);
    _this.groupAnimationDelay = data.menu_animation_delay;
    _this.animationRepeatCount = data.menu_animation_repeat_count;
    _this.animationCount = 0;
    _this.animation = data.menu_animation;
    _this.menuButtonId = "";
    _this.animationClasses = {};
    _this.animatedButtons = [];
    return _this;
  }

  AttentionAnimation_createClass(AttentionAnimation, [{
    key: "generate",
    value: function generate(group) {
      var _this2 = this;

      // Loop through the generators
      group.generators.forEach(function (generator) {
        if (generator instanceof SingleButton) {
          _this2.animatedButtons.push({
            button: group.buttons[generator.button],
            device: generator.visibility
          });
        }
      }); // Add menu button

      this.animatedButtons.push({
        button: group.buttons[group.menuButton]
      }); // Set menu button (to stop all sub animations, but continue the group button)

      this.menuButtonId = group.menuButton; // Generate animated style for each button

      this.animatedButtons.forEach(function (animatedButton) {
        var deviceKey = animatedButton.device === "mobile" ? "@media screen and (max-width: 769px)" : "@media screen and (min-width: 769px)"; // If pulse, generate background color and border radius

        if (_this2.animation === "pulse") {
          var borderRadius = animatedButton.button.data.border_radius.length >= 1 && animatedButton.button.data.border_radius[0] != "" ? animatedButton.button.data.border_radius[0] : animatedButton.button.stylesheet.getCachedData().button["border-radius"];
          var animatedElement = document.createElement("span");
          animatedElement.className = "buttonizer-pulse-animation";
          animatedButton.button.element.appendChild(animatedElement);
          var pulse = {
            "@global .buttonizer-pulse-animation": {
              "&:before, &:after": {
                content: '""',
                position: "absolute",
                opacity: 0.8,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                "z-index": -3,
                display: "block",
                background: dlv_umd_default()(animatedButton.button.data, "background_color.0", dlv_umd_default()(group.data, "background_color.0", animatedButton.button.stylesheet.getCachedData().button.background)),
                "border-radius": borderRadius
              },
              "&:before": {
                animation: "buttonizer-pulse 1.8s 0s ease-out"
              },
              "&:after": {
                animation: "buttonizer-pulse 1.8s 0.333s ease-out"
              }
            }
          };
          var animation = animatedButton.device ? AttentionAnimation_defineProperty({}, deviceKey, pulse) : pulse;
          var animationRule = animatedButton.device ? "animate-".concat(animatedButton.device) : "animate"; //  Create pulse CSS class

          if (_this2.animationClasses[animatedButton.button.data.id]) {
            _this2.animationClasses[animatedButton.button.data.id].push(animatedButton.button.stylesheet.addRule(animationRule, animation).id);
          } else {
            _this2.animationClasses[animatedButton.button.data.id] = [animatedButton.button.stylesheet.addRule(animationRule, animation).id];
          }
        } else {
          var animationCSS = {
            animation: "buttonizer-".concat(_this2.animation, " ").concat(_this2.animation === "hello" ? "2s" : "1s", " linear")
          };

          var _animation = animatedButton.device ? AttentionAnimation_defineProperty({}, deviceKey, animationCSS) : animationCSS;

          var _animationRule = animatedButton.device ? "animate-".concat(animatedButton.device) : "animate"; // Default animations
          //  Create pulse CSS class


          if (_this2.animationClasses[animatedButton.button.data.id]) {
            _this2.animationClasses[animatedButton.button.data.id].push(animatedButton.button.stylesheet.addRule(_animationRule, _animation).id);
          } else {
            _this2.animationClasses[animatedButton.button.data.id] = [animatedButton.button.stylesheet.addRule(_animationRule, _animation).id];
          }
        }
      }); // Start animating

      this.animate(); // Auto stop animation when opening

      if (!buttonizerInPreview_inPreview()) {
        window.addEventListener("buttonizer_group_opened", function (data) {
          if (data.detail.group_id === group.data.id) {
            _this2.stopAnimation(true);
          }
        });
      }
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this3 = this;

      /* webpack-strip-block:removed */
      // Start animating all buttons
      this.animatedButtons.forEach(function (animatedButton) {
        if (!animatedButton.button.element.classList.contains(animatedButton.button.stylesheet.classes.opened)) {
          var _animatedButton$butto;

          (_animatedButton$butto = animatedButton.button.element.classList).add.apply(_animatedButton$butto, AttentionAnimation_toConsumableArray(_this3.animationClasses[animatedButton.button.data.id]));
        }
      }); // Stop animation

      setTimeout(function () {
        _this3.stopAnimation();
      }, 2000);
      /* webpack-strip-block:removed */

      setTimeout(function () {
        return _this3.animate();
      }, 10000);
    } // Stop animation if not finished

  }, {
    key: "stopAnimation",
    value: function stopAnimation() {
      var _this4 = this;

      var slowCooldown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.animatedButtons.forEach(function (animatedButton) {
        var _animatedButton$butto2;

        // Do not stop the menu button
        if (slowCooldown && animatedButton.button.data.id === _this4.menuButtonId) return;

        (_animatedButton$butto2 = animatedButton.button.element.classList).remove.apply(_animatedButton$butto2, AttentionAnimation_toConsumableArray(_this4.animationClasses[animatedButton.button.data.id]));
      });
    }
  }]);

  return AttentionAnimation;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/MessengerChatWidget.js
function MessengerChatWidget_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MessengerChatWidget_typeof = function _typeof(obj) { return typeof obj; }; } else { MessengerChatWidget_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MessengerChatWidget_typeof(obj); }

function MessengerChatWidget_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MessengerChatWidget_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MessengerChatWidget_createClass(Constructor, protoProps, staticProps) { if (protoProps) MessengerChatWidget_defineProperties(Constructor.prototype, protoProps); if (staticProps) MessengerChatWidget_defineProperties(Constructor, staticProps); return Constructor; }

function MessengerChatWidget_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MessengerChatWidget_setPrototypeOf(subClass, superClass); }

function MessengerChatWidget_setPrototypeOf(o, p) { MessengerChatWidget_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MessengerChatWidget_setPrototypeOf(o, p); }

function MessengerChatWidget_createSuper(Derived) { var hasNativeReflectConstruct = MessengerChatWidget_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = MessengerChatWidget_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = MessengerChatWidget_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return MessengerChatWidget_possibleConstructorReturn(this, result); }; }

function MessengerChatWidget_possibleConstructorReturn(self, call) { if (call && (MessengerChatWidget_typeof(call) === "object" || typeof call === "function")) { return call; } return MessengerChatWidget_assertThisInitialized(self); }

function MessengerChatWidget_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MessengerChatWidget_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function MessengerChatWidget_getPrototypeOf(o) { MessengerChatWidget_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MessengerChatWidget_getPrototypeOf(o); }



var MessengerChatWidget = /*#__PURE__*/function (_Generator) {
  MessengerChatWidget_inherits(MessengerChatWidget, _Generator);

  var _super = MessengerChatWidget_createSuper(MessengerChatWidget);

  function MessengerChatWidget() {
    var _this;

    MessengerChatWidget_classCallCheck(this, MessengerChatWidget);

    _this = _super.call(this);
    _this.initializedFacebookChat = false;
    _this.button;
    return _this;
  }

  MessengerChatWidget_createClass(MessengerChatWidget, [{
    key: "generate",
    value: function generate(button) {
      this.button = button;
      var messengerDiv = document.createElement("div");
      messengerDiv.className = "fb-customerchat buttonizer-facebook-messenger-loading";
      messengerDiv.setAttribute("page-id", "".concat(button.data.action));
      messengerDiv.setAttribute("greeting_dialog_display", "icon");
      button.element.appendChild(messengerDiv);
      this.addMessengerWindow(button);
    }
  }, {
    key: "addMessengerWindow",
    value: function addMessengerWindow() {
      if (typeof window.Buttonizer.initializedFacebookChat !== "undefined") {
        // Already done
        return;
      }

      window.Buttonizer.initializedFacebookChat = this.button.data.action === "#" ? undefined : this.button.data.action; // Add script

      var fbMessengerScript = document.createElement("script");
      fbMessengerScript.innerHTML = "\n            // Initialize first\n            window.fbAsyncInit = function() {\n              FB.init({\n                xfbml: true,\n                version: \"v9.0\",\n              });\n            };\n\n             (function(d, s, id) {\n              var js, fjs = d.getElementsByTagName(s)[0];\n              if (d.getElementById(id)) return;\n              js = d.createElement(s); js.id = id;\n              js.src = 'https://connect.facebook.net/".concat(this.button.data.messenger_lang, "/sdk/xfbml.customerchat.js';\n              fjs.parentNode.insertBefore(js, fjs);\n            }(document, 'script', 'facebook-jssdk'));");
      document.head.appendChild(fbMessengerScript);
      document.head.appendChild(this.css());
    }
  }, {
    key: "css",
    value: function css() {
      var messengerChatStyling = document.createElement("style");
      var regex = /^([0-9]+)(px|%)/;
      var horizontalOpposite = this.button.data.horizontal[0] === "right" ? "left" : "right";
      var verticalOpposite = this.button.data.vertical[0] === "bottom" ? "top" : "bottom";
      var horizontalType = this.button.data.horizontal[1].match(regex)[2];
      var horizontalValue = horizontalType === "%" ? Math.max(0, Number(this.button.data.horizontal[1].match(regex)[1]) - 1) : Math.max(0, Number(this.button.data.horizontal[1].match(regex)[1]) - 30);
      var verticalType = this.button.data.vertical[1].match(regex)[2];
      var verticalValue = verticalType === "%" ? Math.max(0, Number(this.button.data.vertical[1].match(regex)[1]) + 4) : Math.max(0, Number(this.button.data.vertical[1].match(regex)[1]) + 40);
      messengerChatStyling.innerHTML = "\n                .buttonizer-spin {\n                  animation: buttonizer-spin-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n                }\n                .fb_dialog, .buttonizer-facebook-messenger-loading {\n                    display: none !important;\n                }\n                .fb_iframe_widget span iframe {\n                    ".concat(horizontalOpposite, ": unset !important;\n                    ").concat(verticalOpposite, ": unset !important;\n                    ").concat(this.button.data.horizontal[0], ": ").concat(horizontalValue).concat(horizontalType, " !important;\n                    ").concat(this.button.data.vertical[0], ": ").concat(verticalValue).concat(verticalType, " !important;\n                }\n                @media screen and (max-width: 769px){\n                    .fb_iframe_widget span iframe {\n                      left: unset !important;\n                      top: unset !important;\n                      right: 0% !important;\n                      bottom: 0% !important;\n                    }\n                }\n                .fb_iframe_widget span .fb_customer_chat_bounce_in_v2 {\n                    animation-duration: 300ms;\n                    animation-name: fb_bounce_in_v3 !important;\n                    transition-timing-function: ease-in-out;   \n                }\n                .fb_iframe_widget span .fb_customer_chat_bounce_out_v2 {\n                    max-height: 0px !important;\n                }\n                @keyframes fb_bounce_in_v3 {\n                    0% {\n                        opacity: 0;\n                        transform: scale(0, 0);\n                        transform-origin: bottom;\n                    }\n                    50% {\n                        transform: scale(1.03, 1.03);\n                        transform-origin: bottom;\n                    }\n                    100% {\n                        opacity: 1;\n                        transform: scale(1, 1);\n                        transform-origin: bottom;\n                    }\n                }\n\n                @keyframes buttonizer-spin-animation {\n                  0% {\n                    transform: ").concat(this.button.data.label_inside ? "" : "translate(-50%, -50%)", " rotate(0deg);\n                  }\n                  100% {\n                    transform: ").concat(this.button.data.label_inside ? "" : "translate(-50%, -50%)", " rotate(360deg);\n                  \n                }\n            ");
      return messengerChatStyling;
    }
  }]);

  return MessengerChatWidget;
}(Generator);


;// CONCATENATED MODULE: ./src/js/frontend/renderExtender/SetSameWidthLabels.js
function SetSameWidthLabels_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetSameWidthLabels_typeof = function _typeof(obj) { return typeof obj; }; } else { SetSameWidthLabels_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetSameWidthLabels_typeof(obj); }

function SetSameWidthLabels_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetSameWidthLabels_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetSameWidthLabels_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetSameWidthLabels_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetSameWidthLabels_defineProperties(Constructor, staticProps); return Constructor; }

function SetSameWidthLabels_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetSameWidthLabels_setPrototypeOf(subClass, superClass); }

function SetSameWidthLabels_setPrototypeOf(o, p) { SetSameWidthLabels_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetSameWidthLabels_setPrototypeOf(o, p); }

function SetSameWidthLabels_createSuper(Derived) { var hasNativeReflectConstruct = SetSameWidthLabels_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SetSameWidthLabels_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SetSameWidthLabels_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SetSameWidthLabels_possibleConstructorReturn(this, result); }; }

function SetSameWidthLabels_possibleConstructorReturn(self, call) { if (call && (SetSameWidthLabels_typeof(call) === "object" || typeof call === "function")) { return call; } return SetSameWidthLabels_assertThisInitialized(self); }

function SetSameWidthLabels_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SetSameWidthLabels_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SetSameWidthLabels_getPrototypeOf(o) { SetSameWidthLabels_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetSameWidthLabels_getPrototypeOf(o); }




var SetSameWidthLabels = /*#__PURE__*/function (_Generator) {
  SetSameWidthLabels_inherits(SetSameWidthLabels, _Generator);

  var _super = SetSameWidthLabels_createSuper(SetSameWidthLabels);

  function SetSameWidthLabels() {
    SetSameWidthLabels_classCallCheck(this, SetSameWidthLabels);

    return _super.apply(this, arguments);
  }

  SetSameWidthLabels_createClass(SetSameWidthLabels, [{
    key: "extend",
    value: function extend(group) {
      var _this = this;

      window.Buttonizer.addHook("buttonizer_loaded", function (_ref) {
        var groups = _ref.groups;
        return _this.setSameWidthLabels(groups[group.data.id].buttons);
      }); // Reset label width when preview changes

      if (buttonizerInPreview_inPreview()) {
        window.Buttonizer.addHook("buttonizer_live_update", function (_ref2) {
          var groups = _ref2.groups,
              groupId = _ref2.groupId,
              key = _ref2.key;

          if (groupId === group.data.id && (key === "label" || key === "menu_style")) {
            _this.setSameWidthLabels(groups[group.data.id].buttons);
          }
        });
      }
    }
  }, {
    key: "setSameWidthLabels",
    value: function setSameWidthLabels(buttons) {
      var maxWidth = Object.keys(buttons).reduce(function (acc, key) {
        var button = buttons[key];
        if (!button.label) return acc;
        return Math.max(button.label.element.clientWidth, acc);
      }, 0);
      Object.values(buttons).forEach(function (button) {
        var horizontalProperty = button.data.horizontal_position_label === "auto" ? button.data.horizontal[0] : button.data.horizontal_position_label;
        button.stylesheet.update({
          label: {
            "min-width": maxWidth,
            "text-align": horizontalProperty === "right" ? "end" : "start"
          }
        });
        button.stylesheet.attach();
      });
    }
  }]);

  return SetSameWidthLabels;
}(template_Generator);


;// CONCATENATED MODULE: ./src/js/frontend/renderExtender/SetLabelInsideButton.js
function SetLabelInsideButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SetLabelInsideButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SetLabelInsideButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SetLabelInsideButton_typeof(obj); }

function SetLabelInsideButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SetLabelInsideButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SetLabelInsideButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SetLabelInsideButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SetLabelInsideButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SetLabelInsideButton_defineProperties(Constructor, staticProps); return Constructor; }

function SetLabelInsideButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SetLabelInsideButton_setPrototypeOf(subClass, superClass); }

function SetLabelInsideButton_setPrototypeOf(o, p) { SetLabelInsideButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SetLabelInsideButton_setPrototypeOf(o, p); }

function SetLabelInsideButton_createSuper(Derived) { var hasNativeReflectConstruct = SetLabelInsideButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SetLabelInsideButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SetLabelInsideButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SetLabelInsideButton_possibleConstructorReturn(this, result); }; }

function SetLabelInsideButton_possibleConstructorReturn(self, call) { if (call && (SetLabelInsideButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SetLabelInsideButton_assertThisInitialized(self); }

function SetLabelInsideButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SetLabelInsideButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function SetLabelInsideButton_getPrototypeOf(o) { SetLabelInsideButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SetLabelInsideButton_getPrototypeOf(o); }




var SetLabelInsideButton = /*#__PURE__*/function (_Generator) {
  SetLabelInsideButton_inherits(SetLabelInsideButton, _Generator);

  var _super = SetLabelInsideButton_createSuper(SetLabelInsideButton);

  function SetLabelInsideButton() {
    SetLabelInsideButton_classCallCheck(this, SetLabelInsideButton);

    return _super.apply(this, arguments);
  }

  SetLabelInsideButton_createClass(SetLabelInsideButton, [{
    key: "extend",
    value: function extend(group) {
      this.setLabelInsideButton(group);
      if (group.data.label_same_width) this.setSameWidthIcons(group.buttons);
    }
  }, {
    key: "setLabelInsideButton",
    value: function setLabelInsideButton(group) {
      Object.values(group.buttons).forEach(function (button) {
        var horizontalProperty = button.data.horizontal_position_label === "auto" ? button.data.horizontal[0] : button.data.horizontal_position_label;
        button.stylesheet.update({
          button: {
            width: button.data.width,
            height: button.data.height,
            "align-items": "center",
            display: "flex",
            "margin-right": 0,
            "margin-left": 0,
            "flex-direction": horizontalProperty === "right" ? "row-reverse" : "row",
            "min-width": "fit-content",
            "&:hover": {
              "& $label": {
                background: "transparent",
                margin: "0px",
                padding: "0px 20px",
                "box-shadow": "unset"
              }
            }
          },
          icon: SetLabelInsideButton_defineProperty({
            top: 0,
            position: "initial",
            transform: "initial",
            margin: "0"
          }, "margin-".concat(horizontalProperty), "15px"),
          image: SetLabelInsideButton_defineProperty({
            top: 0,
            position: "initial",
            transform: "initial",
            margin: "0"
          }, "margin-".concat(horizontalProperty), "15px"),
          label: {
            display: "inline-block",
            opacity: 1,
            visibility: "visible",
            position: "initial",
            height: "".concat(button.data.height, "px"),
            "line-height": "".concat(button.data.height, "px"),
            top: 0,
            transform: "initial",
            background: "transparent",
            margin: "0px",
            padding: "0px 20px",
            "box-shadow": "unset"
          }
        });
        button.stylesheet.update({
          opened: {
            "& $icon": {
              transform: "initial"
            },
            "& $label": {
              visibility: "visible",
              opacity: "1"
            }
          },
          closed: {
            // Close the menu
            "& $label": {
              visibility: "visible",
              opacity: "1"
            }
          }
        });
        button.stylesheet.attach();
      });
      group.stylesheet.update({
        group: {
          "align-items": group.data.horizontal[0] === "right" ? "flex-end" : "flex-start"
        }
      });
      group.stylesheet.attach();
    }
  }, {
    key: "setSameWidthIcons",
    value: function setSameWidthIcons(buttons) {
      var maxWidthNormal = Object.keys(buttons).reduce(function (acc, key) {
        var button = buttons[key];
        if (!dlv_umd_default()(button, "data.icon_size.0", false)) return acc;
        return Math.max(button.data.icon_size[0], acc);
      }, 0);
      var maxWidthHover = Object.keys(buttons).reduce(function (acc, key) {
        var button = buttons[key];
        if (!dlv_umd_default()(button, "data.icon_size.1", false)) return acc;
        return Math.max(button.data.icon_size[1], acc);
      }, 0);
      Object.values(buttons).forEach(function (button) {
        var horizontalProperty = button.data.horizontal_position_label === "auto" ? button.data.horizontal[0] : button.data.horizontal_position_label;
        button.stylesheet.update({
          icon: {
            "min-width": Math.max(maxWidthNormal, maxWidthHover)
          },
          image: {
            "margin-left": (Math.max(maxWidthNormal, maxWidthHover) - button.data.icon_size) / 2 + (horizontalProperty === "right" ? 0 : 15),
            "margin-right": (Math.max(maxWidthNormal, maxWidthHover) - button.data.icon_size) / 2 + (horizontalProperty === "left" ? 0 : 15)
          }
        });
        button.stylesheet.attach();
      });
    }
  }]);

  return SetLabelInsideButton;
}(template_Generator);


;// CONCATENATED MODULE: ./src/js/frontend/Generators/NewGroupPulse.js
function NewGroupPulse_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewGroupPulse_typeof = function _typeof(obj) { return typeof obj; }; } else { NewGroupPulse_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewGroupPulse_typeof(obj); }

function NewGroupPulse_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NewGroupPulse_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewGroupPulse_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewGroupPulse_createClass(Constructor, protoProps, staticProps) { if (protoProps) NewGroupPulse_defineProperties(Constructor.prototype, protoProps); if (staticProps) NewGroupPulse_defineProperties(Constructor, staticProps); return Constructor; }

function NewGroupPulse_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NewGroupPulse_setPrototypeOf(subClass, superClass); }

function NewGroupPulse_setPrototypeOf(o, p) { NewGroupPulse_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NewGroupPulse_setPrototypeOf(o, p); }

function NewGroupPulse_createSuper(Derived) { var hasNativeReflectConstruct = NewGroupPulse_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NewGroupPulse_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NewGroupPulse_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NewGroupPulse_possibleConstructorReturn(this, result); }; }

function NewGroupPulse_possibleConstructorReturn(self, call) { if (call && (NewGroupPulse_typeof(call) === "object" || typeof call === "function")) { return call; } return NewGroupPulse_assertThisInitialized(self); }

function NewGroupPulse_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NewGroupPulse_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NewGroupPulse_getPrototypeOf(o) { NewGroupPulse_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NewGroupPulse_getPrototypeOf(o); }




var NewGroupPulse = /*#__PURE__*/function (_Generator) {
  NewGroupPulse_inherits(NewGroupPulse, _Generator);

  var _super = NewGroupPulse_createSuper(NewGroupPulse);

  function NewGroupPulse() {
    NewGroupPulse_classCallCheck(this, NewGroupPulse);

    return _super.call(this);
  }

  NewGroupPulse_createClass(NewGroupPulse, [{
    key: "generate",
    value: function generate(group) {
      var _beforeAfter;

      var isMenu = group.data.is_menu_desktop || group.data.is_menu_mobile;
      console.log(isMenu, group);
      group.stylesheet.update({
        group: {
          "&::before, &::after": (_beforeAfter = {
            content: '""',
            position: "absolute",
            inset: isMenu ? "unset" : 0,
            "z-index": -1,
            display: "block",
            background: " #f08419",
            visibility: "hidden"
          }, NewGroupPulse_defineProperty(_beforeAfter, "inset", isMenu ? "unset" : 0), NewGroupPulse_defineProperty(_beforeAfter, "border-radius", isMenu ? "50%" : "10px"), NewGroupPulse_defineProperty(_beforeAfter, "height", isMenu ? group.data.group_size : "unset"), NewGroupPulse_defineProperty(_beforeAfter, "width", isMenu ? group.data.group_size : "unset"), _beforeAfter),
          "&::before": {
            animation: "".concat(isMenu ? "buttonizer-pulse-new-group-circle" : "buttonizer-pulse-new-group-square", " 1s 0s ease-out")
          },
          "&:after": {
            animation: "".concat(isMenu ? "buttonizer-pulse-new-group-circle" : "buttonizer-pulse-new-group-square", " 1s 0.185s ease-out")
          }
        }
      });
    }
  }]);

  return NewGroupPulse;
}(Generator);


;// CONCATENATED MODULE: ./src/js/utils/utils/data-utils.js
/* global Map */

var cache = new Map();
function dateToFormat(date) {
  if (!date) return null;

  var pad = function pad(num, size) {
    var s = String(num);

    while (s.length < (size || 2)) {
      s = "0" + s;
    }

    return s;
  };

  return "".concat(date.getDate(), "-").concat(pad(date.getMonth() + 1, 2), "-").concat(date.getFullYear());
}
function formatToDate(format) {
  if (!format) return null;
  var dateParts = format.split("-");
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
var importIcons = function importIcons() {
  var icon_library = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "fontawesome";
  var icon_library_version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "5.free";
  var url = buttonizer_admin.assets + "/icon_definitions/" + icon_library + "." + icon_library_version + ".json?buttonizer-icon-cache=" + buttonizer_admin.version;
  if (cache.has(url)) return cache.get(url);
  var value = Axios({
    url: url,
    dataType: "json",
    method: "get"
  });
  cache.set(url, value);
  return value;
};
var importTemplates = function importTemplates() {
  var url = buttonizer_admin.assets + "/templates/templates.json?buttonizer-icon-cache=" + buttonizer_admin.version;
  return new Promise(function (resolve, reject) {
    if (cache.has(url)) resolve(cache.get(url));
    Axios({
      url: url
    }).then(function (data) {
      cache.set(url, data.data);
      resolve(data.data);
    })["catch"](function (e) {
      return reject({
        message: "Something went wrong",
        error: e
      });
    });
  });
};
// EXTERNAL MODULE: ./node_modules/uuid/v4.js
var v4 = __webpack_require__(71171);
var v4_default = /*#__PURE__*/__webpack_require__.n(v4);
;// CONCATENATED MODULE: ./src/js/utils/utils/random.js

function GenerateUniqueId() {
  return v4_default()();
}
function shuffleTips(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function uniqueCharset() {
  return Array.apply(0, Array(15)).map(function () {
    return function (charset) {
      return charset.charAt(Math.floor(Math.random() * charset.length));
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
  }).join("");
}
;// CONCATENATED MODULE: ./src/js/utils/utils/index.js



;// CONCATENATED MODULE: ./src/js/frontend/Generators/EditButton.js
function EditButton_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EditButton_typeof = function _typeof(obj) { return typeof obj; }; } else { EditButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EditButton_typeof(obj); }

function EditButton_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function EditButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EditButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EditButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) EditButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) EditButton_defineProperties(Constructor, staticProps); return Constructor; }

function EditButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EditButton_setPrototypeOf(subClass, superClass); }

function EditButton_setPrototypeOf(o, p) { EditButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EditButton_setPrototypeOf(o, p); }

function EditButton_createSuper(Derived) { var hasNativeReflectConstruct = EditButton_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = EditButton_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = EditButton_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return EditButton_possibleConstructorReturn(this, result); }; }

function EditButton_possibleConstructorReturn(self, call) { if (call && (EditButton_typeof(call) === "object" || typeof call === "function")) { return call; } return EditButton_assertThisInitialized(self); }

function EditButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EditButton_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function EditButton_getPrototypeOf(o) { EditButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EditButton_getPrototypeOf(o); }




var editButtonStyling = {
  position: "absolute",
  visibility: "visible",
  opacity: "0",
  cursor: "pointer",
  transition: "all 250ms ease-in-out 0s",
  pointerEvents: "none",
  width: "100%",
  display: "flex",
  height: "100%",
  zIndex: 99999999,
  "&.group": {
    pointerEvents: "unset",
    zIndex: "unset",
    "& .buttonizer-button-spoof": {
      margin: "-30px"
    }
  },
  "&.opened": {
    maxHeight: "100%"
  },
  "& .buttonizer-button-spoof": {
    height: "unset",
    // margin: "-20px",
    inset: "0px",
    width: "unset",
    position: "absolute",
    border: "2px dashed rgb(47, 119, 137)",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    "&:hover": {
      "& .buttonizer-edit-tooltip": {
        transition: "opacity 150ms ease-in 1s",
        opacity: 1
      }
    }
  },
  "& .buttonizer-edit-tooltip": {
    position: "absolute",
    fontSize: 10,
    background: "#4e4c4c",
    border: "1px solid white",
    top: "-30px",
    width: "fit-content",
    padding: "4px 6px",
    borderRadius: 5,
    color: "white",
    opacity: 0,
    whiteSpace: "nowrap",
    "&::before, &::after": {
      content: '""',
      width: 0,
      height: 0,
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      position: "absolute",
      right: "23px"
    },
    "&::before": {
      borderTop: "5px solid #ffffff",
      bottom: "-5px"
    },
    "&:after": {
      borderTop: "5px solid #4e4c4c",
      bottom: "-4px"
    }
  },
  "& .buttonizer-edit-icon": {
    position: "absolute",
    width: "25px",
    height: "25px",
    lineHeight: "25px",
    color: "#FFFFFF",
    "border-radius": "10px 0 0 0",
    background: "#2a6b7e",
    padding: "unset",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    "& i": {
      "font-size": "11px !important"
    },
    transform: "scale(0.8)",
    top: "-5px",
    left: "-5px"
  }
};

var EditButton = /*#__PURE__*/function (_Generator) {
  EditButton_inherits(EditButton, _Generator);

  var _super = EditButton_createSuper(EditButton);

  function EditButton(_ref) {
    var _this;

    var horizontal = _ref.horizontal,
        vertical = _ref.vertical;

    EditButton_classCallCheck(this, EditButton);

    _this = _super.call(this);
    _this.horizontal = horizontal[0] === "left" && Number(horizontal[1].match(/^[0-9]+/g)[0]) <= "50" || horizontal[0] === "right" && Number(horizontal[1].match(/^[0-9]+/g)[0]) >= "50" ? "right" : "left";
    _this.vertical = vertical[0] === "bottom" && Number(vertical[1].match(/^[0-9]+/g)[0]) <= "50" || vertical[0] === "top" && Number(vertical[1].match(/^[0-9]+/g)[0]) >= "50" ? "top" : "bottom";
    return _this;
  }

  EditButton_createClass(EditButton, [{
    key: "generate",
    value: function generate(group) {
      var _this2 = this;

      this.createBorder(group, true);
      Object.values(group.buttons).map(function (button) {
        _this2.editAction(button, group.data.id, button.data.id === group.menuButton);

        _this2.createBorder(button);
      });
    }
  }, {
    key: "editAction",
    value: function editAction(button, group_id, is_menuButton) {
      var listenerData = {}; // If it's a menu button, go to menu button

      if (is_menuButton) {
        listenerData = {
          type: "to-menu",
          data: {
            group: group_id
          }
        };
      } // if it's a button, add button event listener and styling
      else {
          listenerData = {
            type: "to-button",
            data: {
              group: group_id,
              button: button.data.id
            }
          };
        }

      button.element.addEventListener("click", function (e) {
        if (button.disableClickInPreview) {
          e.preventDefault();
          messageButtonizerAdminEditor("admin-link-redirect", listenerData);
        }
      });
    }
  }, {
    key: "createBorder",
    value: function createBorder(_ref2) {
      var element = _ref2.element,
          stylesheet = _ref2.stylesheet,
          data = _ref2.data;
      var isGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var groupNavBorder = document.createElement("div");
      groupNavBorder.className = "buttonizer-styling-border"; // Create edit button element

      var editButton = document.createElement("div");
      editButton.className = "buttonizer-edit-icon";
      editButton.innerHTML = '<i class="fa fa-pencil-alt fa fa-pencil" data-no-action="true"></i>';
      var tooltip = document.createElement("span");
      tooltip.className = "buttonizer-edit-tooltip";
      var buttonSpoof = document.createElement("div");
      buttonSpoof.className = "buttonizer-button-spoof";
      buttonSpoof.appendChild(tooltip);
      buttonSpoof.appendChild(editButton);
      groupNavBorder.appendChild(buttonSpoof);

      if (isGroup) {
        groupNavBorder.classList.add("group");
        tooltip.innerHTML = "Edit group";
        groupNavBorder.addEventListener("click", function () {
          messageButtonizerAdminEditor("admin-link-redirect", {
            type: "to-group",
            data: {
              group: data.id
            }
          });
        });
        stylesheet.update({
          group: {
            "& .buttonizer-styling-border.group": merge_default()({}, editButtonStyling, {
              maxHeight: data.group_size
            }),
            "&:hover": {
              "& .buttonizer-styling-border.group": {
                opacity: 1
              }
            }
          }
        });
        if (!data.is_menu_desktop) this.forceMaxHeight("desktop", stylesheet);
        if (!data.is_menu_mobile) this.forceMaxHeight("mobile", stylesheet);
      } else {
        tooltip.innerHTML = "Edit button";
        stylesheet.update({
          button: {
            "& .buttonizer-styling-border": editButtonStyling,
            "&:hover": {
              "& .buttonizer-styling-border": {
                opacity: 1
              },
              "& .buttonizer-edit-tooltip": {
                transition: "opacity 150ms ease-in 1s",
                opacity: 1
              }
            }
          }
        });
      }

      element.appendChild(groupNavBorder);
    }
  }, {
    key: "forceMaxHeight",
    value: function forceMaxHeight(device, stylesheet) {
      var size = device === "desktop" ? "min-width: 770px" : "max-width: 769px";
      stylesheet.update({
        group: {
          "& .buttonizer-styling-border.group": EditButton_defineProperty({}, "@media screen and (".concat(size, ")"), {
            maxHeight: "100%"
          })
        }
      });
    }
  }]);

  return EditButton;
}(Generator);


;// CONCATENATED MODULE: ./src/js/utils/buttonizer-constants.js
function buttonizer_constants_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || buttonizer_constants_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function buttonizer_constants_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return buttonizer_constants_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return buttonizer_constants_arrayLikeToArray(o, minLen); }

function buttonizer_constants_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function buttonizer_constants_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { buttonizer_constants_typeof = function _typeof(obj) { return typeof obj; }; } else { buttonizer_constants_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return buttonizer_constants_typeof(obj); }

var buttonizer_constants_defaults = __webpack_require__(46314);

var buttonizer_constants_merge = __webpack_require__(82492);
/**
 * Constants
 */


var actionTypes = {
  INIT: "INIT",
  // Adding and removing buttons/groups
  ADD_MODEL: "ADD_MODEL",
  //Relation actionTypes
  ADD_RELATION: "ADD_RELATION",
  CHANGE_RELATION: "CHANGE_RELATION",
  REMOVE_RELATION: "REMOVE_RELATION",
  //Data actionTypes
  GET_DATA_BEGIN: "GET_DATA_BEGIN",
  GET_DATA_SUCCESS: "GET_DATA_SUCCESS",
  GET_DATA_FAILURE: "GET_DATA_FAILURE",
  GET_DATA_END: "GET_DATA_END",
  HAS_CHANGES: "HAS_CHANGES",
  IS_UPDATING: "IS_UPDATING",
  STOP_LOADING: "STOP_LOADING",
  //Setting values
  SET_SETTING_VALUE: "SET_SETTING_VALUE",
  SET_MISC_VALUE: "SET_MISC_VALUE",
  //Drawer
  OPEN_DRAWER: "OPENING DRAWER",
  CLOSE_DRAWER: "CLOSING DRAWER",
  groups: {
    ADD_RECORD: "ADDING GROUP RECORD",
    REMOVE_RECORD: "REMOVING GROUP RECORD",
    SET_KEY_VALUE: "SET KEY VALUE GROUPS",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS GROUPS"
  },
  buttons: {
    ADD_RECORD: "ADDING BUTTON RECORD",
    REMOVE_RECORD: "REMOVING BUTTON RECORD",
    SET_KEY_VALUE: "SET KEY VALUE BUTTONS",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS BUTTONS"
  },
  menu_button: {
    ADD_RECORD: "ADDING MENU BUTTON RECORD",
    REMOVE_RECORD: "REMOVING MENU BUTTON RECORD",
    SET_KEY_VALUE: "SET KEY VALUE MENU BUTTONS",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS MENU BUTTONS"
  },
  timeSchedules: {
    // Time Schedule actionTypes
    ADD_RECORD: "ADDING TIME SCHEDULE",
    REMOVE_RECORD: "REMOVING TIME SCHEDULE",
    SET_KEY_VALUE: "SET KEY VALUE TIMESCHEDULES",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS TIMESCHEDULES",
    ADD_TIMESCHEDULE: "ADD_TIMESCHEDULE",
    SET_WEEKDAY: "SET_WEEKDAY",
    ADD_EXCLUDED_DATE: "ADD_EXCLUDED_DATE",
    SET_EXCLUDED_DATE: "SET_EXCLUDED_DATE",
    REMOVE_EXCLUDED_DATE: "REMOVE_EXCLUDED_DATE"
  },
  pageRules: {
    ADD_RECORD: "ADDING PAGE RULE",
    REMOVE_RECORD: "REMOVING PAGE RULE",
    SET_KEY_VALUE: "SET KEY VALUE PAGERULES",
    SET_KEY_FORMAT: "SET FORMATTED KEY VALUE PAIRS PAGERULES",
    ADD_PAGE_RULE_GROUP: "ADD_PAGE_RULE_GROUP",
    REMOVE_PAGE_RULE_GROUP: "REMOVE_PAGE_RULE_GROUP",
    SET_PAGE_RULE_GROUP_TYPE: "SET_PAGE_RULE_GROUP_TYPE",
    ADD_PAGE_RULE_ROW: "ADD_PAGE_RULE_ROW",
    SET_PAGE_RULE_ROW: "SET_PAGE_RULE_ROW",
    REMOVE_PAGE_RULE_ROW: "REMOVE_PAGE_RULE_ROW"
  },
  wp: {
    //Data actionTypes
    GET_DATA_BEGIN: "GET_DATA_BEGIN_WP",
    GET_DATA_SUCCESS: "GET_DATA_SUCCESS_WP",
    GET_DATA_FAILURE: "GET_DATA_FAILURE_WP",
    GET_DATA_END: "GET_DATA_END_WP"
  },
  templates: {
    INIT: "INIT TEMPLATES",
    GET_DATA_BEGIN: "GET TEMPLATES DATA BEGIN",
    GET_DATA_FAILURE: "GET TEMPLATES DATA FAILURE",
    GET_DATA_END: "GET TEMPLATES DATA END",

    /**
     * Not used
     */
    ADD_RECORD: "ADDING TEMPLATE"
  }
};
var wpActionTypes = {};
var weekdays = (/* unused pure expression or super */ null && (["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]));
var models = {
  MENU_BUTTON: "menu_button",
  BUTTON: "buttons",
  GROUP: "groups",
  TIME_SCHEDULE: "timeSchedules",
  PAGE_RULE: "pageRules"
};
var initialStore = {
  name: "peter",
  loading: {
    showLoading: false,
    loadingString: "",
    loadingSlowWebsite: false,
    loaded: false,
    error: null
  },
  frameUrl: "about:blank",
  loadingIframe: false,
  settings: null,
  _premium: false,
  buttons: {},
  groups: {},
  timeSchedules: {}
};
var drawers = {
  MENU: "menu",
  SETTINGS: "settings",
  SETTINGS_PAGES: {
    analytics: "analytics",
    iconLibrary: "iconlibrary",
    preferences: "preferences",
    reset: "reset"
  },
  BUTTONIZER_TOUR: "buttonizertour",
  WELCOME_DIALOG: "welcome-splash",
  TIME_SCHEDULES: "timeschedules",
  PAGE_RULES: "pagerules"
};
var formats = {
  /**
   * Combine values with normal;hover.
   */
  normal_hover: {
    format: function format(normal, hover) {
      return [normal, hover].map(function (val) {
        return val === "unset" ? "" : val == null ? "" : val;
      }).filter(function (val, key, arr) {
        return key === 0 || val !== "" && val !== arr[0];
      }) // remove duplicates
      .join(";") || "unset";
    },
    parse: function parse(val) {
      var value = val; // Convert booleans to a string

      if (typeof val === "boolean") value = String(val); // Convert numbers to a string

      if (typeof val === "number") value = String(val); // Value is undefined, return empty array

      if (typeof val === "undefined") return []; // If it's an array due to mistake, fix it by joining it

      if (buttonizer_constants_typeof(val) === "object" && val.length <= 2) {
        value = val.join(";");
      } // If the value is not a string


      if (typeof value !== "string") {
        console.trace();
        console.log(buttonizer_constants_typeof(value), value);
        return [];
      }

      var match = value.split(";");
      return match.map(function (val) {
        if (!val) return undefined;
        if (val === "true") return true;
        if (val === "false") return false;
        if (!isNaN(Number(val))) return Number(val);
        return val;
      }).map(function (val, key, arr) {
        return key === 0 ? val : val === arr[0] ? undefined : val;
      }); // remove duplicates!
    }
  },

  /**
   * Px for four sides, for example for margin or padding.
   */
  fourSidesPx: {
    format: function format(val1, val2, val3, val4) {
      return "".concat(val1, "px ").concat(val2, "px ").concat(val3, "px ").concat(val4, "px");
    },
    parse: function parse(val) {
      var reg = /\d+/g;
      var match = val.match(reg);
      return match;
    }
  },

  /**
   * Position format, example: 'bottom: 5px', or 'left: 10%'
   */
  position: {
    format: function format(type, mode, value) {
      return "".concat(type, ": ").concat(value).concat(mode);
    }
  }
};
var excludedPropertyRequests = ["selected_schedule", "show_on_schedule_trigger", "selected_page_rule", "show_on_rule_trigger", "show_mobile", "show_desktop"];
var import_export = {
  propertiesToOmit: ["export_type", "selected_page_rule", "selected_schedule", "id", "parent", "show_on_rule_trigger", "show_on_schedule_trigger"]
};
var settingKeys = {
  // Returns all default button settings keys
  get button() {
    var result = {
      general: [],
      styling: [],
      advanced: []
    };
    Object.entries(buttonizer_constants_defaults.button).map(function (key) {
      buttonizer_constants_merge(result, buttonizer_constants_defineProperty({}, key[0], Object.entries(key[1]).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            key = _ref2[0];

        return key;
      })));
    });
    return result;
  },

  // Returns all default button settings keys
  get menu_button() {
    var result = {
      general: [],
      styling: [],
      advanced: []
    };
    Object.entries(buttonizer_constants_defaults.menu_button).map(function (key) {
      buttonizer_constants_merge(result, buttonizer_constants_defineProperty({}, key[0], Object.entries(key[1]).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            key = _ref4[0];

        return key;
      })));
    });
    return result;
  },

  // Returns all default group settings keys
  get group() {
    var result = {
      general: [],
      styling: [],
      advanced: []
    };
    Object.entries(buttonizer_constants_defaults.group).map(function (key) {
      buttonizer_constants_merge(result, buttonizer_constants_defineProperty({}, key[0], Object.entries(key[1]).map(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 1),
            key = _ref6[0];

        return key;
      })));
    });
    return result;
  },

  // Returns all default setting keys
  get allSettings() {
    var result = {
      general: [],
      styling: [],
      advanced: []
    };
    Object.entries(buttonizer_constants_merge({}, buttonizer_constants_defaults.button, buttonizer_constants_defaults.menu_button, buttonizer_constants_defaults.group)).map(function (key) {
      buttonizer_constants_merge(result, buttonizer_constants_defineProperty({}, key[0], Object.entries(key[1]).map(function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 1),
            key = _ref8[0];

        return key;
      })));
    });
    return result;
  },

  // Returns default hover styling setting key
  get stylingHover() {
    return Object.entries(buttonizer_constants_merge({}, buttonizer_constants_defaults.button.styling, buttonizer_constants_defaults.group.styling)).filter(function (entry) {
      return Array.isArray(entry[1]);
    }).map(function (_ref9) {
      var _ref10 = _slicedToArray(_ref9, 1),
          key = _ref10[0];

      return key;
    });
  }

};
;// CONCATENATED MODULE: ./src/js/utils/cookies.js
/**
 * Get cookie util
 *
 * @param {string} cname
 */
// Get cookie
function getCookie(name) {
  var value = "; ".concat(document.cookie);
  var parts = value.split("; ".concat(name, "="));
  if (parts.length === 2) return parts.pop().split(";").shift();
  return false;
} // Set cookie

function setCookie(cname, value) {
  document.cookie = cname + "=" + value;
}
;// CONCATENATED MODULE: ./src/js/frontend/Utils/groupOpened.js



function getOpenedGroups() {
  var openedGroups = getCookie("buttonizer_".concat(buttonizerInPreview_inPreview() ? "dashboard" : "live", "_groups_opened")); // Parse opened groups

  if (openedGroups) {
    return JSON.parse(openedGroups);
  } // No remembered group status


  return {};
} // Check if group is opened


function getGroupOpened(groupId) {
  var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var openedGroups = getOpenedGroups();
  return typeof openedGroups[groupId] !== "undefined" ? openedGroups[groupId] : defaultStatus;
} // Update cookie

function setGroupOpened(id) {
  var opened = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var openedGroups = getOpenedGroups();
  openedGroups[id] = opened; // Update cookie

  setCookie("buttonizer_".concat(buttonizerInPreview_inPreview() ? "dashboard" : "live", "_groups_opened"), JSON.stringify(openedGroups));
  return null;
}
;// CONCATENATED MODULE: ./src/js/frontend/Extensions/GroupOpenedState.js
function GroupOpenedState_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { GroupOpenedState_typeof = function _typeof(obj) { return typeof obj; }; } else { GroupOpenedState_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return GroupOpenedState_typeof(obj); }

function GroupOpenedState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function GroupOpenedState_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function GroupOpenedState_createClass(Constructor, protoProps, staticProps) { if (protoProps) GroupOpenedState_defineProperties(Constructor.prototype, protoProps); if (staticProps) GroupOpenedState_defineProperties(Constructor, staticProps); return Constructor; }

function GroupOpenedState_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) GroupOpenedState_setPrototypeOf(subClass, superClass); }

function GroupOpenedState_setPrototypeOf(o, p) { GroupOpenedState_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return GroupOpenedState_setPrototypeOf(o, p); }

function GroupOpenedState_createSuper(Derived) { var hasNativeReflectConstruct = GroupOpenedState_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = GroupOpenedState_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = GroupOpenedState_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return GroupOpenedState_possibleConstructorReturn(this, result); }; }

function GroupOpenedState_possibleConstructorReturn(self, call) { if (call && (GroupOpenedState_typeof(call) === "object" || typeof call === "function")) { return call; } return GroupOpenedState_assertThisInitialized(self); }

function GroupOpenedState_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function GroupOpenedState_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function GroupOpenedState_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { GroupOpenedState_set = Reflect.set; } else { GroupOpenedState_set = function set(target, property, value, receiver) { var base = GroupOpenedState_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { GroupOpenedState_defineProperty(receiver, property, value); } return true; }; } return GroupOpenedState_set(target, property, value, receiver); }

function Extensions_GroupOpenedState_set(target, property, value, receiver, isStrict) { var s = GroupOpenedState_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function GroupOpenedState_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function GroupOpenedState_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = GroupOpenedState_getPrototypeOf(object); if (object === null) break; } return object; }

function GroupOpenedState_getPrototypeOf(o) { GroupOpenedState_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return GroupOpenedState_getPrototypeOf(o); }






var GroupOpenedState = /*#__PURE__*/function (_Extension) {
  GroupOpenedState_inherits(GroupOpenedState, _Extension);

  var _super = GroupOpenedState_createSuper(GroupOpenedState);

  function GroupOpenedState(_ref) {
    var _thisSuper, _this;

    var menu_button = _ref.menu_button;

    GroupOpenedState_classCallCheck(this, GroupOpenedState);

    _this = _super.call(this);
    _this.group;
    _this.opened = false;
    _this.menu_button = menu_button;

    Extensions_GroupOpenedState_set((_thisSuper = GroupOpenedState_assertThisInitialized(_this), GroupOpenedState_getPrototypeOf(GroupOpenedState.prototype)), "name", "open group functions", _thisSuper, true);

    return _this;
  } // Add click event listener


  GroupOpenedState_createClass(GroupOpenedState, [{
    key: "onSubscribe",
    value: function onSubscribe(group) {
      this.group = group; // Only open group

      if (this.menu_button.data.start_opened === true && getGroupOpened(this.group.data.id, true) === true || buttonizerInPreview_inPreview() && getGroupOpened(this.group.data.id) === true) {
        this.open(false);
      } else this.close(false);

      this.group.state = this;
    }
  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var updateCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.Buttonizer.activateHook("buttonizer_group_opened", {
        open: true,
        group_id: this.group.data.id
      }); // Send Google Analytics event

      googleAnalyticsEvent({
        type: "group-open-close",
        name: this.group.data.name,
        interaction: "open"
      });
      Object.keys(this.group.buttons).map(function (key) {
        var button = _this2.group.buttons[key];
        var openedClass = button.stylesheet.classes.opened;
        var closedClass = button.stylesheet.classes.closed;

        if (openedClass && !button.element.classList.contains(openedClass)) {
          button.element.classList.add(openedClass);
        }

        if (closedClass && button.element.classList.contains(closedClass)) {
          button.element.classList.remove(closedClass);
        }
      });

      if (buttonizerInPreview_inPreview()) {
        var stylingBorder = this.group.element.querySelector(".buttonizer-styling-border");

        if (stylingBorder && !stylingBorder.classList.contains("opened")) {
          stylingBorder.classList.add("opened");
        }
      } // Update group cookie


      if (updateCookie) {
        setGroupOpened(this.group.data.id, true);
      }

      this.opened = true;
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var updateCookie = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      window.Buttonizer.activateHook("buttonizer_group_opened", {
        open: false,
        group_id: this.group.data.id
      }); // Send Google Analytics event

      googleAnalyticsEvent({
        type: "group-open-close",
        name: this.group.data.name,
        interaction: "close"
      });
      Object.keys(this.group.buttons).map(function (key) {
        var button = _this3.group.buttons[key];
        var openedClass = button.stylesheet.classes.opened;
        var closedClass = button.stylesheet.classes.closed;

        if (openedClass && button.element.classList.contains(openedClass)) {
          button.element.classList.remove(openedClass);
        }

        if (closedClass && !button.element.classList.contains(closedClass)) {
          button.element.classList.add(closedClass);
        }
      });

      if (buttonizerInPreview_inPreview()) {
        var stylingBorder = this.group.element.querySelector(".buttonizer-styling-border");

        if (stylingBorder && stylingBorder.classList.contains("opened")) {
          stylingBorder.classList.remove("opened");
        }
      } // Update group cookie


      if (updateCookie) {
        setGroupOpened(this.group.data.id, false);
      }

      this.opened = false;
    } // Toggle group

  }, {
    key: "toggle",
    value: function toggle() {
      if (this.opened) {
        this.close();
      } else {
        this.open();
      }
    } // Return status

  }, {
    key: "isOpened",
    value: function isOpened() {
      return this.opened;
    }
  }]);

  return GroupOpenedState;
}(Extension);


;// CONCATENATED MODULE: ./src/js/frontend/Utils/ButtonizerUtils.js
function ButtonizerUtils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ButtonizerUtils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ButtonizerUtils_ownKeys(Object(source), true).forEach(function (key) { ButtonizerUtils_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ButtonizerUtils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ButtonizerUtils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* webpack-strip-block:removed */











 // import menuStyles from "../Generators/MenuStyles/index";















function createGroup() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref.data,
      buttons = _ref.buttons,
      _ref$menu_button = _ref.menu_button,
      menu_button = _ref$menu_button === void 0 ? {} : _ref$menu_button;

  var extensions = [];
  var generators = [];
  var renderExtender = [];
  var actions = [];
  var stylesheet = Stylesheets_group();

  var _parseData = parseData({
    data: data,
    model: "group",
    menu_style: data.menu_style,
    position: {
      horizontal: data.horizontal,
      vertical: data.vertical
    }
  }),
      parsedData = _parseData.parsedData,
      extraJSS = _parseData.extraJSS;

  stylesheet.update(extraJSS);
  /**
   * ====================
   *  Single button mode
   */

  var mobileSingleButton, desktopSingleButton; // Count mobile buttons

  mobileSingleButton = Object.values(buttons).filter(function (obj) {
    return obj.show_mobile === true;
  }); // Count desktop buttons

  desktopSingleButton = Object.values(buttons).filter(function (obj) {
    return obj.show_desktop === true;
  }); // There is only one button for mobile

  if (mobileSingleButton.length === 1) {
    // If it doesn't have an id. Make one
    if (typeof mobileSingleButton[0].id !== "string") mobileSingleButton[0].id = GenerateUniqueId();
    generators.push(new SingleButton({
      button: mobileSingleButton[0].id,
      visibility: "mobile",
      hideMenu: desktopSingleButton.length < 1
    }));
  } // There is only one button for desktop


  if (desktopSingleButton.length === 1) {
    // If it doesn't have an id. Make one
    if (typeof desktopSingleButton[0].id !== "string") desktopSingleButton[0].id = GenerateUniqueId();
    generators.push(new SingleButton({
      button: desktopSingleButton[0].id,
      visibility: "desktop",
      hideMenu: mobileSingleButton.length < 1
    }));
  }

  if (parsedData.label_same_width === true) {
    renderExtender.push(new SetSameWidthLabels());
  }

  if (parsedData.label_inside === true) {
    renderExtender.push(new SetLabelInsideButton());
  }
  /**
   * ====================
   */

  /**
   * ====================
   *  Menu button
   */


  menu_button = createButton({
    group: parsedData,
    menu_style: data.menu_style,
    data: menu_button,
    pos: {
      horizontal: parsedData.horizontal,
      vertical: parsedData.vertical
    },
    model: "menu_button",
    buttonCount: {
      mobile: mobileSingleButton.length,
      desktop: desktopSingleButton.length
    }
  });
  var is_menu_mobile = menu_button[Object.keys(menu_button)[0]].data.show_mobile && mobileSingleButton.length > 1;
  var is_menu_desktop = menu_button[Object.keys(menu_button)[0]].data.show_desktop && desktopSingleButton.length > 1;
  /**
   * ====================
   */
  // Add all extensions

  extensions.push(new GroupOpenedState({
    menu_button: menu_button[Object.keys(menu_button)[0]]
  }));

  if (menu_button[Object.keys(menu_button)[0]].data.close_on_click_outside && buttons.length > 1 && (is_menu_desktop || is_menu_mobile)) {
    if (menu_button[Object.keys(menu_button)[0]].data.open_on_mouseover === false || menu_button[Object.keys(menu_button)[0]].data.close_on_mouseleave === false && menu_button[Object.keys(menu_button)[0]].data.open_on_mouseover === true) extensions.push(Extensions_CloseOnClickOutside);
  }

  if (menu_button[Object.keys(menu_button)[0]].data.close_on_click_inside && menu_button[Object.keys(menu_button)[0]].data.open_on_mouseover === false && buttons.length > 1 && (is_menu_desktop || is_menu_mobile)) extensions.push(Extensions_CloseOnClickInside);
  /* webpack-strip-block:removed */

  if ((is_menu_desktop || is_menu_mobile) && Object.values(buttons).length > 1 && Object.keys(OpeningAnimations).includes(menu_button[Object.keys(menu_button)[0]].data.menu_opening_animation)) {
    /* webpack-strip-block:removed */
    generators.push(new OpeningAnimations[menu_button[Object.keys(menu_button)[0]].data.menu_opening_animation]({
      data: parsedData,
      buttons: buttons
    }));
  }

  if (parsedData.menu_animation !== "none") generators.push(new AttentionAnimation({
    data: parsedData,
    mobileSingleButton: mobileSingleButton,
    desktopSingleButton: desktopSingleButton
  })); // Add edit button if in preview

  if (buttonizerInPreview_inPreview()) {
    generators.push(new EditButton({
      horizontal: parsedData.horizontal,
      vertical: parsedData.vertical,
      mobileSingleButton: mobileSingleButton.length === 1 ? mobileSingleButton[0].id : false,
      desktopSingleButton: desktopSingleButton.length === 1 ? desktopSingleButton[0].id : false
    }));
    if (dlv_umd_default()(Buttonizer, "container.newestGroupId", false) === parsedData.id) generators.push(new NewGroupPulse());
  }

  buttons = buttons.reduce(function (acc, buttonData) {
    return ButtonizerUtils_objectSpread(ButtonizerUtils_objectSpread({}, acc), createButton({
      group: parsedData,
      menu_style: data.menu_style,
      data: ButtonizerUtils_objectSpread(ButtonizerUtils_objectSpread({}, buttonData), {}, {
        is_menu_mobile: is_menu_mobile,
        is_menu_desktop: is_menu_desktop
      }),
      pos: {
        horizontal: parsedData.horizontal,
        vertical: parsedData.vertical
      }
    }));
  }, {});
  var args = {
    data: ButtonizerUtils_objectSpread(ButtonizerUtils_objectSpread({}, parsedData), {}, {
      is_menu_mobile: is_menu_mobile,
      is_menu_desktop: is_menu_desktop
    }),
    stylesheet: stylesheet,
    extensions: extensions,
    generators: generators,
    renderExtender: renderExtender,
    actions: actions,
    buttons: buttons,
    menu_button: menu_button
  };
  var group = new Group(args);
  return ButtonizerUtils_defineProperty({}, parsedData.id, group);
}
function createButton() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref3.data,
      menu_style = _ref3.menu_style,
      _ref3$generators = _ref3.generators,
      generators = _ref3$generators === void 0 ? [] : _ref3$generators,
      pos = _ref3.pos,
      _ref3$model = _ref3.model,
      model = _ref3$model === void 0 ? "button" : _ref3$model,
      group = _ref3.group,
      buttonCount = _ref3.buttonCount;

  var _parseData2 = parseData({
    data: data,
    model: model,
    menu_style: menu_style,
    position: pos,
    group: group,
    buttonCount: buttonCount
  }),
      parsedData = _parseData2.parsedData,
      extraJSS = _parseData2.extraJSS;

  var extensions = [];
  var renderExtender = [];
  var stylesheet = Stylesheets_button();
  stylesheet.update(extraJSS);
  var result = {
    groupName: dlv_umd_default()(group, "name", null),
    groupId: dlv_umd_default()(group, "id", null),
    data: ButtonizerUtils_objectSpread(ButtonizerUtils_objectSpread({}, parsedData), pos),
    stylesheet: stylesheet,
    extensions: extensions,
    generators: generators,
    renderExtender: renderExtender
  }; // Add messenger

  if (parsedData.type === "messenger_chat") result.generators.push(new MessengerChatWidget());

  if (parsedData.label_same_height === true && parsedData.label_inside === false) {
    result.renderExtender.push(new SetSameHeightLabels());
  }

  if (parsedData.icon_type !== "off") {
    if (!isEqual_default()(parsedData.icon, [""]) && parsedData.icon_type === "icon") result.icon = new Icon({
      stylesheet: stylesheet,
      data: {
        icon: parsedData.icon,
        icon_color: parsedData.icon_color,
        icon_size: parsedData.icon_size,
        model: model
      }
    });else if (!isEqual_default()(parsedData.icon_image, [""]) && parsedData.icon_type === "image") {
      /* webpack-strip-block:removed */
      // Fallback when icon_type is image but doesn't have premium.
      if (parsedData.icon !== "unset" && !result.icon) {
        result.icon = new Icon({
          stylesheet: stylesheet,
          data: {
            icon: parsedData.icon,
            icon_color: parsedData.icon_color,
            icon_size: parsedData.icon_size
          }
        });
      }
    }
  }

  if (parsedData.label) result.label = new Label({
    stylesheet: stylesheet,
    data: ButtonizerUtils_objectSpread(ButtonizerUtils_objectSpread({}, parsedData), pos)
  });
  var button = new Button(result);
  return ButtonizerUtils_defineProperty({}, parsedData.id, button);
}
function parseData(_ref5) {
  var _ref5$data = _ref5.data,
      data = _ref5$data === void 0 ? {} : _ref5$data,
      _ref5$model = _ref5.model,
      model = _ref5$model === void 0 ? "button" : _ref5$model,
      _ref5$menu_style = _ref5.menu_style,
      menu_style = _ref5$menu_style === void 0 ? "default" : _ref5$menu_style,
      _ref5$position = _ref5.position,
      position = _ref5$position === void 0 ? {} : _ref5$position,
      _ref5$group = _ref5.group,
      group = _ref5$group === void 0 ? false : _ref5$group,
      buttonCount = _ref5.buttonCount;
  var menuStyle = dlv_umd_default()((buttonizer_defaults_default()).menuStyle, menu_style, dlv_umd_default()((buttonizer_defaults_default()).menuStyle, "default", {})); // Merged defaults

  var allDefs = merge_default()({}, merge_default()({}, (buttonizer_defaults_default())[model]), dlv_umd_default()(menuStyle, model, {}), pick_default()(group, pullAll_default()(settingKeys.allSettings.styling, model === "menu_button" && settingKeys.menu_button.styling)));
  var parsedPosition = {
    horizontal: parsePosition(position.horizontal || allDefs.horizontal),
    vertical: parsePosition(position.vertical || allDefs.vertical)
  };

  if (menuStyle.extraJSS) {
    menuStyle.extraJSS.setPosition = parsedPosition;
  }

  var extraJSS = omit_default()(dlv_umd_default()(menuStyle, "extraJSS", {}), ["position", "setPosition"]);
  var parsedData = data;
  /** normal;hover settings */

  settingKeys.stylingHover.forEach(function (key) {
    if (Array.isArray(parsedData[key])) return;
    var result = formats.normal_hover.parse(parsedData[key]);

    if (!result) {
      parsedData[key] = [undefined, undefined];
      return;
    }

    if (result.length === 1) {
      parsedData[key] = [result[0], result[0]];
      return;
    }

    parsedData[key] = result;
  });
  parsedData.horizontal = parsedPosition.horizontal;
  parsedData.vertical = parsedPosition.vertical;
  if (typeof parsedData.id !== "string") parsedData.id = GenerateUniqueId();

  if (model === "menu_button") {
    if (buttonCount.mobile === 0) parsedData.show_mobile = false;
    if (buttonCount.desktop === 0) parsedData.show_desktop = false;
  } // Add label placeholder


  if (dlv_umd_default()(parsedData, "label_inside", allDefs.label_inside) && !parsedData.label) parsedData.label = model === "menu_button" ? "Menu button's label" : parsedData.name + "'s label";
  return {
    parsedData: merge_default()({}, allDefs, parsedData),
    extraJSS: extraJSS
  };
}
function parsePosition(pos) {
  /* Parse Horizontal & vertical settings */
  if (typeof pos === "string") {
    pos = pos.match(/(.+): ?(.+)/).splice(1, 2);
    pos[1] = pos[1].replace("undefined", "%"); // Migration fix

    if (isNaN(parseFloat(pos[1]))) {
      pos[1] = "5%";
    }

    return pos;
  }

  return pos;
}
;// CONCATENATED MODULE: ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;

var functionPlugin = function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = createRule(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe[prop-missing]


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule; // $FlowFixMe[prop-missing]

      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (false) { var prop; }
      } // $FlowFixMe[prop-missing]


      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
};

/* harmony default export */ var jss_plugin_rule_value_function_esm = (functionPlugin);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js + 1 modules
var es = __webpack_require__(67121);
;// CONCATENATED MODULE: ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js



var isObservable = function isObservable(value) {
  return value && value[es/* default */.Z] && value === value[es/* default */.Z]();
};

var observablePlugin = function observablePlugin(updateOptions) {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!isObservable(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

      var style$ = decl;
      var rule = createRule(name, {}, options); // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.

      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (rule && rule.type !== 'style') return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!isObservable(value)) return "continue";
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue, updateOptions);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === "continue") continue;
      }
    }
  };
};

/* harmony default export */ var jss_plugin_rule_value_observable_esm = (observablePlugin);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js


var semiWithNl = /;\n/;

/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */
var parse = function parse(cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);

  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || '').trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
       false ? 0 : void 0;
      continue;
    }

    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }

  return style;
};

var onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    // $FlowFixMe[prop-missing] We can safely assume that rule has the style property
    rule.style = parse(rule.style);
  }
};

function templatePlugin() {
  return {
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ var jss_plugin_template_esm = (templatePlugin);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (rule) this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule, sheet) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule, sheet) {
    if (rule.type !== 'style' || !sheet) return;
    handleNestedGlobalContainerRule(rule, sheet);
    handlePrefixedGlobalRule(rule, sheet);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ var jss_plugin_global_esm = (jssGlobal);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js



var jss_plugin_extend_esm_isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

var valueNs = "extendCurrValue" + Date.now();

function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend; // Extend using a rule name.

  if (extendType === 'string') {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;

    if (refRule === rule) {
       false ? 0 : void 0;
      return;
    }

    var parent = refRule.options.parent;

    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      jss_plugin_extend_esm_extend(originalStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend using an array.


  if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      var singleExtend = style.extend[index];
      var singleStyle = typeof singleExtend === 'string' ? _extends({}, style, {
        extend: singleExtend
      }) : style.extend[index];
      jss_plugin_extend_esm_extend(singleStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend is a style object.


  for (var prop in style.extend) {
    if (prop === 'extend') {
      jss_plugin_extend_esm_extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }

    if (jss_plugin_extend_esm_isObject(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      jss_plugin_extend_esm_extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    newStyle[prop] = style.extend[prop];
  }
}

function mergeRest(style, rule, sheet, newStyle) {
  // Copy base style.
  for (var prop in style) {
    if (prop === 'extend') continue;

    if (jss_plugin_extend_esm_isObject(newStyle[prop]) && jss_plugin_extend_esm_isObject(style[prop])) {
      jss_plugin_extend_esm_extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    if (jss_plugin_extend_esm_isObject(style[prop])) {
      newStyle[prop] = jss_plugin_extend_esm_extend(style[prop], rule, sheet);
      continue;
    }

    newStyle[prop] = style[prop];
  }
}
/**
 * Recursively extend styles.
 */


function jss_plugin_extend_esm_extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }

  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */


function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    if ('extend' in style) return jss_plugin_extend_esm_extend(style, rule, sheet);
    return style;
  }

  function onChangeValue(value, prop, rule) {
    if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

    if (value == null || value === false) {
      // $FlowFixMe[prop-missing]
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      } // $FlowFixMe[prop-missing] Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = null;
      return null;
    }

    if (typeof value === 'object') {
      // $FlowFixMe[invalid-in-rhs] This will be an object
      for (var _key in value) {
        // $FlowFixMe[incompatible-use] This will be an object
        rule.prop(_key, value[_key]);
      } // $FlowFixMe[prop-missing] Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = value;
    } // Make sure we don't set the value in the core.


    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_extend_esm = (jssExtend);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js



var jss_plugin_nested_esm_separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var jss_plugin_nested_esm_refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       false ? 0 : void 0;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(jss_plugin_nested_esm_separatorRegExp);
    var nestedSelectors = nestedProp.split(jss_plugin_nested_esm_separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return _extends({}, prevOptions, {
      index: prevOptions.index + 1 // $FlowFixMe[prop-missing]

    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(jss_plugin_nested_esm_refRegExp, replaceRef);
        container.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe[incompatible-use]
        // $FlowFixMe[prop-missing]
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_nested_esm = (jssNested);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js


/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  } // Support space separated class names `{composes: 'foo bar'}`


  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var _ref = rule.options,
      parent = _ref.parent; // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
       false ? 0 : void 0;
      return false;
    }

    if (refRule === rule) {
       false ? 0 : void 0;
      return false;
    }

    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }

  parent.classes[rule.key] += " " + className;
  return true;
}
/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!('composes' in style)) return style;
    registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

    delete style.composes;
    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_compose_esm = (jssCompose);

;// CONCATENATED MODULE: ./node_modules/hyphenate-style-name/index.js
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var hyphenate_style_name_cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (hyphenate_style_name_cache.hasOwnProperty(name)) {
    return hyphenate_style_name_cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (hyphenate_style_name_cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ var hyphenate_style_name = (hyphenateStyleName);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : hyphenate_style_name(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = hyphenate_style_name(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_camel_case_esm = (camelCase);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js


var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  'border-block': px,
  'border-block-end': px,
  'border-block-end-width': px,
  'border-block-start': px,
  'border-block-start-width': px,
  'border-block-width': px,
  'border-inline': px,
  'border-inline-end': px,
  'border-inline-end-width': px,
  'border-inline-start': px,
  'border-inline-start-width': px,
  'border-inline-width': px,
  'border-start-start-radius': px,
  'border-start-end-radius': px,
  'border-end-start-radius': px,
  'border-end-end-radius': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  'margin-block': px,
  'margin-block-end': px,
  'margin-block-start': px,
  'margin-inline': px,
  'margin-inline-end': px,
  'margin-inline-start': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  'padding-block': px,
  'padding-block-end': px,
  'padding-block-start': px,
  'padding-inline': px,
  'padding-inline-end': px,
  'padding-inline-start': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  inset: px,
  'inset-block': px,
  'inset-block-end': px,
  'inset-block-start': px,
  'inset-inline': px,
  'inset-inline-end': px,
  'inset-inline-start': px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-decoration-thickness': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  gap: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'row-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (value == null) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    } // eslint-disable-next-line no-restricted-globals

  } else if (typeof value === 'number' && isNaN(value) === false) {
    var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

    if (unit && !(value === 0 && unit === px)) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

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

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_default_unit_esm = (defaultUnit);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'border-width': true,
  'border-style': true,
  'border-color': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */

};
var propArrayInObj = {
  position: true,
  // background-position
  size: true // background-size

  /**
   * A scheme for parsing and building correct styles from passed objects.
   */

};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */

};
var customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image',
    width: 'border-width',
    style: 'border-style',
    color: 'border-color'
  },
  'border-bottom': {
    width: 'border-bottom-width',
    style: 'border-bottom-style',
    color: 'border-bottom-color'
  },
  'border-top': {
    width: 'border-top-width',
    style: 'border-top-style',
    color: 'border-top-color'
  },
  'border-left': {
    width: 'border-left-width',
    style: 'border-left-style',
    color: 'border-left-color'
  },
  'border-right': {
    width: 'border-right-width',
    style: 'border-right-style',
    color: 'border-right-color'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height',
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  },
  grid: {
    'template-columns': 'grid-template-columns',
    templateColumns: 'grid-template-columns',
    'template-rows': 'grid-template-rows',
    templateRows: 'grid-template-rows',
    'template-areas': 'grid-template-areas',
    templateAreas: 'grid-template-areas',
    template: 'grid-template',
    'auto-columns': 'grid-auto-columns',
    autoColumns: 'grid-auto-columns',
    'auto-rows': 'grid-auto-rows',
    autoRows: 'grid-auto-rows',
    'auto-flow': 'grid-auto-flow',
    autoFlow: 'grid-auto-flow',
    row: 'grid-row',
    column: 'grid-column',
    'row-start': 'grid-row-start',
    rowStart: 'grid-row-start',
    'row-end': 'grid-row-end',
    rowEnd: 'grid-row-end',
    'column-start': 'grid-column-start',
    columnStart: 'grid-column-start',
    'column-end': 'grid-column-end',
    columnEnd: 'grid-column-end',
    area: 'grid-area',
    gap: 'grid-gap',
    'row-gap': 'grid-row-gap',
    rowGap: 'grid-row-gap',
    'column-gap': 'grid-column-gap',
    columnGap: 'grid-column-gap'
  }
};

/* eslint-disable no-use-before-define */

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
/**
 * Convert array to nested array, if needed
 */


function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

  if (typeof value[0] === 'object') {
    return mapValuesByProp(value, prop, rule);
  }

  return [value];
}
/**
 * Convert object to array.
 */


function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result = []; // Check if exists any non-standard property

  if (customPropObj[prop]) {
    // eslint-disable-next-line no-param-reassign
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  } // Pass throught all standart props


  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
        } else result.push(value[baseProp]);

        continue;
      } // Add default value from props config.


      if (propObj[prop][baseProp] != null) {
        result.push(propObj[prop][baseProp]);
      }
    }
  }

  if (!result.length || isInArray) return result;
  return [result];
}
/**
 * Convert custom properties values to styles adding them to rule directly
 */


function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var _styleDetector;

      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    } // Delete converted property to avoid double converting


    delete value[prop];
  }

  return value;
}
/**
 * Detect if a style needs to be converted.
 */


function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }

          continue;
        }

        style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

      if (!style[prop].length) delete style[prop];
    } // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}
/**
 * Adds possibility to write expanded styles.
 */


function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }

      return style;
    }

    return styleDetector(style, rule);
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ var jss_plugin_expand_esm = (jssExpand);

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function arrayLikeToArray_arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function arrayWithoutHoles_arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray_arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function iterableToArray_iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function unsupportedIterableToArray_unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray_arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray_arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function nonIterableSpread_nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function toConsumableArray_toConsumableArray(arr) {
  return arrayWithoutHoles_arrayWithoutHoles(arr) || iterableToArray_iterableToArray(arr) || unsupportedIterableToArray_unsupportedIterableToArray(arr) || nonIterableSpread_nonIterableSpread();
}
;// CONCATENATED MODULE: ./node_modules/css-vendor/dist/css-vendor.esm.js



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var css_vendor_esm_browser = '';
var isTouch = dist_module && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (dist_module) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    css_vendor_esm_browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: css_vendor_esm_browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var css_vendor_esm_plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = css_vendor_esm_plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = css_vendor_esm_plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, toConsumableArray_toConsumableArray(p.noPrefill));
  return a;
}, []);

var el;
var css_vendor_esm_cache = {};

if (dist_module) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) css_vendor_esm_cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete css_vendor_esm_cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && css_vendor_esm_cache[prop] != null) {
    return css_vendor_esm_cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    css_vendor_esm_cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (css_vendor_esm_cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return css_vendor_esm_cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (dist_module) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}



;// CONCATENATED MODULE: ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = supportedKeyframes(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return supportedValue(prop, toCssValue(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ var jss_plugin_vendor_prefixer_esm = (jssVendorPrefixer);

;// CONCATENATED MODULE: ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ var jss_plugin_props_sort_esm = (jssPropsSort);

;// CONCATENATED MODULE: ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js













var jss_preset_default_esm_create = function create(options) {
  if (options === void 0) {
    options = {};
  }

  return {
    plugins: [jss_plugin_rule_value_function_esm(), jss_plugin_rule_value_observable_esm(options.observable), jss_plugin_template_esm(), jss_plugin_global_esm(), jss_plugin_extend_esm(), jss_plugin_nested_esm(), jss_plugin_compose_esm(), jss_plugin_camel_case_esm(), jss_plugin_default_unit_esm(options.defaultUnit), jss_plugin_expand_esm(), jss_plugin_vendor_prefixer_esm(), jss_plugin_props_sort_esm()]
  };
};

/* harmony default export */ var jss_preset_default_esm = (jss_preset_default_esm_create);

// EXTERNAL MODULE: ./node_modules/jss-increase-specificity/index.js
var jss_increase_specificity = __webpack_require__(49674);
var jss_increase_specificity_default = /*#__PURE__*/__webpack_require__.n(jss_increase_specificity);
;// CONCATENATED MODULE: ./src/js/frontend/Utils/Api.js
function Api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Api_ownKeys(Object(source), true).forEach(function (key) { Api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Api_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Api_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Api_typeof = function _typeof(obj) { return typeof obj; }; } else { Api_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Api_typeof(obj); }

function Api_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Api_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Api_createClass(Constructor, protoProps, staticProps) { if (protoProps) Api_defineProperties(Constructor.prototype, protoProps); if (staticProps) Api_defineProperties(Constructor, staticProps); return Constructor; }

/* global WeakSet */


/**
 * Buttonizer API
 */

var ButtonizerApi = /*#__PURE__*/function () {
  function ButtonizerApi(buttonizer) {
    Api_classCallCheck(this, ButtonizerApi);

    this.container = buttonizer;
    this._isStandAlone = false;
    this.allowGoogleAnalyticsTracking = false;
    this.debug = [];
  } // Debug data


  Api_createClass(ButtonizerApi, [{
    key: "log",
    value: function log() {
      this.debug.forEach(function (err) {
        console.warn(err);
      });
    } // Activate Buttonizer stand alone version

  }, {
    key: "init",
    value: function init(id) {
      this._isStandAlone = true;
      this.container.initStandAlone(id);
    } // Is ready

  }, {
    key: "isReady",
    value: function isReady() {} // Is stand alone?

  }, {
    key: "isStandalone",
    value: function isStandalone() {
      return this._isStandAlone;
    } // In dashboard?

  }, {
    key: "inPreview",
    value: function inPreview() {
      return buttonizerInPreview_inPreview();
    } // Has premium?

  }, {
    key: "hasPremium",
    value: function hasPremium() {
      return this.container.hasPremium();
    } // Get group opverview

  }, {
    key: "groups",
    value: function groups() {
      var _this = this;

      return Object.keys(this.container.groups).map(function (groupId) {
        return _this.options(groupId);
      });
    }
  }, {
    key: "dump",
    value: function dump() {
      var getCircularReplacer = function getCircularReplacer() {
        var seen = new WeakSet();
        return function (_, value) {
          if (Api_typeof(value) === "object" && value !== null) {
            if (seen.has(value)) {
              return "[cyclic ".concat(value.constructor.name, "]").concat(dlv_umd_default()(value, "data.id", false) != null ? ", id: " : "").concat(dlv_umd_default()(value, "data.id", ""));
            }

            seen.add(value);
          }

          return value;
        };
      };

      return JSON.stringify(Object.assign({}, this.container.groups), getCircularReplacer(), 2);
    } // Open group

  }, {
    key: "open",
    value: function open() {
      var _this2 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Close all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this2.options(groupId);

          if (group.open) {
            group.open();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.open) {
          group.open();
        }
      }

      return true;
    } // Close group

  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // Close all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this3.options(groupId);

          if (group.close) {
            group.close();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.close) {
          group.close();
        }
      }

      return true;
    } // Toggle group

  }, {
    key: "toggle",
    value: function toggle() {
      var _this4 = this;

      var groupId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // toggle all groups
      if (!groupId) {
        Object.keys(this.container.groups).map(function (groupId) {
          var group = _this4.options(groupId);

          if (group.toggle) {
            group.toggle();
          }
        });
      } else {
        var group = this.options(groupId); // Group exists

        if (group.toggle) {
          group.toggle();
        }
      }

      return true;
    } // Group options

  }, {
    key: "options",
    value: function options(groupId) {
      var group = dlv_umd_default()(this.container.groups, groupId, null);
      var options = {}; // Group not found

      if (!group || group === null) {
        this.debug.push("Buttonizer: Group ".concat(groupId, " does not exists."));
        console.error("Buttonizer: Group ".concat(groupId, " does not exists."));
        return null;
      }

      if (group && group.state) {
        options = {
          isOpened: function isOpened() {
            return group.state.isOpened();
          },
          toggle: function toggle() {
            return group.state.toggle();
          },
          open: function open() {
            return group.state.open();
          },
          close: function close() {
            return group.state.close();
          }
        };
      }

      return Api_objectSpread({
        id: groupId,
        element: group.element
      }, options);
    }
    /**
     * activate hook
     * @param {string} name of hook to activate.
     * different hooks:
     * buttonizer_loaded
     * buttonizer_initialized
     * buttonizer_group_opened
     * buttonizer_button_clicked
     * @param {*} options
     * for group/button hooks, add id
     */

  }, {
    key: "activateHook",
    value: function activateHook(name, options) {
      window.dispatchEvent(new CustomEvent(name, {
        detail: options
      }));
    }
    /**
     * subscribe to hook
     * @param {string} name
     * @param {function} callback
     * @param {boolean} once run only once and then remove itself.
     * called with event library
     */

  }, {
    key: "addHook",
    value: function addHook(name, callback) {
      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      window.addEventListener(name, function (e) {
        return callback(e.detail);
      }, {
        once: once
      });
    }
  }, {
    key: "removeHook",
    value: function removeHook(name, hook) {
      window.removeEventListener(name, hook);
    }
  }]);

  return ButtonizerApi;
}();


;// CONCATENATED MODULE: ./src/js/frontend/Buttonizer.js
function Buttonizer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Buttonizer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Buttonizer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Buttonizer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Buttonizer_defineProperties(Constructor, staticProps); return Constructor; }












var Buttonizer_Buttonizer = /*#__PURE__*/function () {
  function Buttonizer() {
    Buttonizer_classCallCheck(this, Buttonizer);

    // JSX
    jss_esm.setup(jss_preset_default_esm()).use(jss_increase_specificity_default()());
    var el = document.createElement("style");
    el.id = "buttonizer-styling";
    document.head.appendChild(el); // Data

    this.firstTimeInitialize = true;
    this.previewInitialized = false;
    this.settingsLoading = false;
    this.isInPreviewContainer = false;
    this.doNotSkipReloadRequest = false;
    this.newestGroupId = null;
    this.standAloneId = null;
    this.iconLibrary = null;
    this.premium = false;
    this.groups = [];
    this.data = {}; // In preview

    if (buttonizerInPreview_inPreview()) {
      var stylesheet = document.createElement("style");
      stylesheet.innerHTML = "html { margin-top: 0 !important; }";
      window.document.head.appendChild(stylesheet);
    } // Initialize API


    this.api = new ButtonizerApi(this); // Make the API public

    window.Buttonizer = this.api; // Start loading buttons

    if (typeof buttonizer_ajax !== "undefined") {
      this.getSettings();
    } // Initialize URL watcher


    this.initUrlWatcher();
  }
  /**
   * Watch for URL changes
   */


  Buttonizer_createClass(Buttonizer, [{
    key: "initUrlWatcher",
    value: function initUrlWatcher() {
      var _this = this;

      if (window._buttonizer && window._buttonizer.urlWatcher === false || buttonizerInPreview_inPreview()) return; // Get current URL

      function getCurrentUrl() {
        return "".concat(document.location.pathname).concat(document.location.search);
      } // Check timeout and set current full URL


      var currentUrlWatcher = setTimeout(function () {}, 0);
      var currentUrl = getCurrentUrl(); // Check for a new URL

      var MoveAwayChecker = function MoveAwayChecker() {
        // Not a PRO user
        // Do not try to reload
        if (_this.premium) return; // Clear previous timeout

        clearTimeout(currentUrlWatcher); // Create new timeout and check for URL changes

        currentUrlWatcher = setTimeout(function () {
          if (currentUrl !== getCurrentUrl()) {
            currentUrl = getCurrentUrl();

            _this.reload();
          }
        }, 500);
      }; // Check for click event


      window.addEventListener("click", MoveAwayChecker); // Check for popstate change

      window.addEventListener("popstate", MoveAwayChecker);
    }
    /**
     * Load buttonizer from domain
     *
     * @param {string} id Buttonizer unique site UUID
     */

  }, {
    key: "initStandAlone",
    value: function initStandAlone(id) {
      var _this2 = this;

      if ((typeof window.buttonizer_ajax != "undefined" || typeof window.buttonizer_data != "undefined") && buttonizerInPreview_inPreview()) {
        messageButtonizerAdminEditor("standalone_conflict");
        return null;
      } // Send Buttonizer initializing hook


      window.Buttonizer.activateHook("buttonizer_loading"); // Set loading

      this.settingsLoading = true; // Set in stand alone

      this.standAloneId = id; // Get API path

      var apiPath = window.development ? window.development.api : "https://api.buttonizer.pro"; // Send hook

      window.Buttonizer.activateHook("buttonizer_get_data_start"); // Import CSS animations

      var cssAnimations = document.createElement("link");
      cssAnimations.rel = "stylesheet";
      cssAnimations.href = "https://cdn.buttonizer.pro/frontend.css";
      cssAnimations.type = "text/css";
      cssAnimations.id = "buttonizer-animations-css"; // Add to page

      document.head.appendChild(cssAnimations); // Send request

      lib_axios({
        url: "".concat(apiPath, "/serve/").concat(id),
        method: "POST",
        data: {
          preview: buttonizerInPreview_inPreview() ? 1 : 0,
          data: {
            title: document.title,
            path: buttonizerInPreview_inPreview() ? window.previewPath : "".concat(window.location.pathname).concat(window.location.search),
            extra: window._buttonizer && window._buttonizer.data ? window._buttonizer.data : undefined
          }
        }
      }) // Success
      .then(function (_ref) {
        var data = _ref.data;
        // Send hook
        window.Buttonizer.activateHook("buttonizer_get_data_end", {
          data: data
        });

        _this2.init(data);
      })["catch"](function (e) {
        _this2.settingsLoading = false;
        console.error("Buttonizer: We could not load Buttonizer on your website. Information:");
        console.error(e.result && e.result.message ? e.result.message : e);
        console.error("Buttonizer: Visit our community if you have any questions https://community.buttonizer.pro/");
      });
    }
    /**
     * Get Buttonizer
     */

  }, {
    key: "getSettings",
    value: function getSettings() {
      var _this3 = this;

      window.Buttonizer.activateHook("buttonizer_loading"); // Cool, we already have the data!

      if (typeof buttonizer_data !== "undefined") {
        this.init(buttonizer_data);
        return;
      } // Add current url


      if (buttonizer_ajax) {
        buttonizer_ajax.current.url = document.location.href;
      }

      this.settingsLoading = true;
      window.Buttonizer.activateHook("buttonizer_get_data_start");
      lib_axios({
        url: buttonizer_ajax && buttonizer_ajax.ajaxurl + "?action=buttonizer",
        params: {
          qpu: buttonizer_ajax && buttonizer_ajax.is_admin ? Date.now() : buttonizer_ajax && buttonizer_ajax.cache,
          preview: buttonizerInPreview_inPreview() ? 1 : 0,
          data: buttonizer_ajax && buttonizer_ajax.current
        },
        paramsSerializer: function paramsSerializer(params) {
          return lib_default().stringify(params, {
            arrayFormat: "brackets"
          });
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        window.Buttonizer.activateHook("buttonizer_get_data_end", {
          data: data
        });

        if (data.status === "success") {
          _this3.init(data);
        } else {
          console.error("Buttonizer: Something went wrong! Buttonizer not loaded", data);
        }
      })["catch"](function (e) {
        _this3.settingsLoading = false;
        console.error(e);
        console.error("Buttonizer: OH NO! ERROR: '" + e.statusText + "'. That's all we know... Please check your PHP logs or contact Buttonizer support if you need help.");
        console.error("Buttonizer: Visit our community on https://community.buttonizer.pro/");
      });
    }
  }, {
    key: "init",
    value: function init(data) {
      var _this4 = this;

      // Listen to admin
      if (buttonizerInPreview_inPreview() && !this.previewInitialized) {
        this.isInPreviewContainer = true;
        this.listenToPreview();

        window.onerror = function () {
          var err = arguments.length <= 4 ? undefined : arguments[4];
          messageButtonizerAdminEditor("error", {
            name: err.name,
            message: err.message,
            column: err.column,
            line: err.line,
            sourceURL: err.sourceURL,
            stack: err.stack,
            extra: _this4.api.dump()
          });
        };
      } // Reset group keys and data on reload


      if (buttonizerInPreview_inPreview()) {
        this.data = {}; // Map through results

        data.result.map(function (group) {
          _this4.data[group.data.id] = group;
        });
      }
      /* webpack-strip-block:removed */
      // No buttons


      if (data.result.length > 0) {
        // Loop through the group(s)
        (function () {
          /* webpack-strip-block:removed */
          _this4.groups = createGroup(data.result[0]);
          document.body.appendChild(Object.values(_this4.groups)[0].render());
        })(); // Send activate hook


        window.Buttonizer.activateHook("buttonizer_loaded", {
          groups: this.groups
        }); // Set Google Analytics tracking on true

        this.api.allowGoogleAnalyticsTracking = true;

        if (this.firstTimeInitialize) {
          this.buttonizerInitialized();
        }
      } // Send message to admin panel


      if (buttonizerInPreview_inPreview() && this.previewInitialized) {
        messageButtonizerAdminEditor("(re)loaded", true);
        messageButtonizerAdminEditor("warning", data.warning);
      } // In stand alone


      if (data.misc && data.misc.icon_lib) {
        if (this.iconLibrary === null) {
          // Create new icon
          var iconLibrary = document.createElement("link");
          iconLibrary.rel = "stylesheet";
          iconLibrary.href = data.misc.icon_lib.url;
          iconLibrary.type = "text/css";
          iconLibrary.id = "buttonizer-icon-library-css"; // Add integrity attribute if needed
          // if (data.misc.icon_lib.integrity) {
          //   iconLibrary.integrity = data.misc.icon_lib.integrity;
          // }
          // Add to page

          document.head.appendChild(iconLibrary); // Cache

          this.iconLibrary = iconLibrary;
        }
      } else if (this.iconLibrary !== null) {
        this.iconLibrary.remove();
      }

      this.settingsLoading = false;
    }
    /**
     * Feature to receive messages from the admin buttonizer editor
     */

  }, {
    key: "listenToPreview",
    value: function listenToPreview() {
      var _this5 = this;

      this.previewInitialized = true;
      window.addEventListener("message", function (event) {
        if (!event.isTrusted || typeof event.data.eventType === "undefined" || event.data.eventType !== "buttonizer") return;
        var messageType = event.data.messageType; // Preview data

        if (buttonizerInPreview_inPreview() && messageType === "preview-data-update") {
          _this5.updateLivePreviewData(event.data.message);
        } // Do not skip next full reload request


        if (buttonizerInPreview_inPreview() && messageType === "full-reload-required") {
          _this5.doNotSkipReloadRequest = true;
          console.log("got it!");
        } // Do not skip next full reload request


        if (buttonizerInPreview_inPreview() && messageType === "toggle-button-group") {
          if (event.data.message.action === "open") {
            window.Buttonizer.open(event.data.message.groupId);
          } else {
            window.Buttonizer.close(event.data.message.groupId);
          }
        } // Fully reload the preview data


        if (buttonizerInPreview_inPreview() && messageType === "preview-reload") {
          if (_this5.doNotSkipReloadRequest || event.data.message.force === true) {
            _this5.doNotSkipReloadRequest = false;
            _this5.newestGroupId = event.data.message.newGroupId;

            _this5.reload();
          }
        }
      }, false);
    }
    /**
     * Reload Buttonizer
     */

  }, {
    key: "reload",
    value: function reload() {
      var _this6 = this;

      window.Buttonizer.activateHook("buttonizer_reload");

      if (this.settingsLoading) {
        console.log("[Buttonizer] Request too quick, first finish the previous one");
        setTimeout(function () {
          return _this6.reload();
        }, 500);
        return;
      }

      this.settingsLoading = true;
      Object.values(this.groups).forEach(function (group) {
        return group.destroy();
      }); // Todo: Try to find a better fix for this, why doesn't the group remove itself sometimes?

      var findButtonizer = document.querySelectorAll(".buttonizer-group");

      for (var b = 0; b < findButtonizer.length; b++) {
        findButtonizer[b].remove();
      }

      setTimeout(function () {
        _this6.groups = [];

        if (_this6.standAloneId !== null) {
          _this6.initStandAlone(_this6.standAloneId);
        } else {
          _this6.getSettings();
        }
      }, 50);
    }
    /**
     * Live update property changes
     *
     * @param {*} param0
     */

  }, {
    key: "updateLivePreviewData",
    value: function updateLivePreviewData(_ref3) {
      var _this7 = this;

      var model = _ref3.model,
          id = _ref3.id,
          key = _ref3.key,
          value = _ref3.value;

      if (excludedPropertyRequests.indexOf(key) !== -1) {
        this.doNotSkipReloadRequest = true;
        return;
      }

      var groupId = model === "group" ? id : null;

      if (model === "group") {
        // Cannot find any information, required full reload
        if (typeof this.data[id] === "undefined" || typeof this.data[id].data[key] === "undefined") {
          this.doNotSkipReloadRequest = true;
          return;
        } // Delete key


        if (value === "unset") {
          delete this.data[id].data[key];
        } else {
          this.data[id].data[key] = value;
        } // Destroy group


        this.groups[id].destroy(); // Recreate group

        this.groups[id] = createGroup(this.data[id])[id];
        document.body.appendChild(this.groups[id].render());
        window.Buttonizer.activateHook("buttonizer_loaded", {
          groups: this.groups
        });
      } else if (model === "menu_button") {
        // Cannot find any information, required full reload
        if (typeof this.data[id] === "undefined" || typeof this.data[id].menu_button === "undefined" || typeof this.data[id].menu_button[key] === "undefined") {
          this.doNotSkipReloadRequest = true;
          return;
        } // Delete key


        if (value === "unset") {
          delete this.data[id].menu_button[key];
        } else {
          this.data[id].menu_button[key] = value;
        } // Destroy group


        this.groups[id].destroy(); // Recreate group

        this.groups[id] = createGroup(this.data[id])[id];
        document.body.appendChild(this.groups[id].render());
        window.Buttonizer.activateHook("buttonizer_loaded", {
          groups: this.groups
        });
      } else {
        var foundButtonKey = null;
        groupId = Object.keys(this.data).find(function (groupObjKey) {
          return _this7.data[groupObjKey].buttons.find(function (buttonObj, buttonObjKey) {
            if (buttonObj.id === id) {
              foundButtonKey = buttonObjKey;
            }

            return foundButtonKey !== null;
          });
        }); // Update group

        if (groupId && foundButtonKey != null) {
          if (value === "unset") {
            delete this.data[groupId].buttons[foundButtonKey][key];
          } else {
            this.data[groupId].buttons[foundButtonKey][key] = value;
          } // Destroy group


          this.groups[groupId].destroy(); // Recreate group

          this.groups[groupId] = createGroup(this.data[groupId])[groupId];
          document.body.appendChild(this.groups[groupId].render());
          window.Buttonizer.activateHook("buttonizer_loaded", {
            groups: this.groups
          });
        }
      }

      window.Buttonizer.activateHook("buttonizer_live_update", {
        groups: this.groups,
        model: model,
        groupId: groupId,
        buttonId: model === "group" ? null : id,
        key: key,
        value: value
      });
    }
  }, {
    key: "hasPremium",
    value: function hasPremium() {
      return this.premium;
    }
  }, {
    key: "isStandalone",
    value: function isStandalone() {
      return this.standAloneId !== null;
    }
    /**
     * Buttonizer is initialized, call function
     */

  }, {
    key: "buttonizerInitialized",
    value: function buttonizerInitialized() {
      // Execute only once
      if (!this.firstTimeInitialize) {
        return;
      }

      window.Buttonizer.activateHook("buttonizer_initialized", {
        groups: this.groups
      }); //If user is using Messenger and FB is not defined, call parse

      if (typeof FB === "undefined" && typeof this.initializedFacebookChat !== "undefined" && !this.isInPreviewContainer) {
        console.log("Facebook Messenger is still not initilized: RUN FB.XFBLM.PARSE");

        try {
          FB.XFBML.parse();
        } catch (err) {
          console.log("FB is not defined. \n        Is your site whitelisted correctly?\n        Is your Facebook Messenger ID correct?");
        }
      } // FB is defined, check if widget is rendered.
      else if (typeof this.initializedFacebookChat !== "undefined" && !this.isInPreviewContainer && document.querySelector(".fb-customerchat")) {
          if (document.querySelector(".fb-customerchat").querySelector("iframe") === null) {
            try {
              FB.XFBML.parse();
            } catch (err) {
              console.log("FB is defined but not rendering Messenger chat. \n              Is tracking blocked in your browser?\n              Do you have another Facebook SDK on your site?\n              \n              Error message: ".concat(err));
            }
          }
        }

      this.firstTimeInitialize = false;
    }
    /**
     * Is in preview?
     *
     * @returns {boolean}
     */

  }, {
    key: "inPreview",
    value: function inPreview() {
      return this.isInPreviewContainer;
    }
  }]);

  return Buttonizer;
}();

new Buttonizer_Buttonizer();
}();
/******/ })()
;