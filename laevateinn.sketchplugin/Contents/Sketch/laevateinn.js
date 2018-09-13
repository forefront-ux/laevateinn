var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/laevateinn.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/laevateinn.js":
/*!***************************!*\
  !*** ./src/laevateinn.js ***!
  \***************************/
/*! exports provided: exportAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportAction", function() { return exportAction; });
/* harmony import */ var _token_generator_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-generator/color.js */ "./src/token-generator/color.js");
/* harmony import */ var _utils_os_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/os/dialog */ "./src/utils/os/dialog/index.js");


function exportAction() {
  var doc = context.document; // OSUI.floatPanel();

  if (doc) {
    // const alert = utils.createDialog()[0];
    // alert.runModal();
    // const res = utils.saveFile(context.document);
    var res = _token_generator_color_js__WEBPACK_IMPORTED_MODULE_0__["generateFiles"](doc);

    if (res) {
      _utils_os_dialog__WEBPACK_IMPORTED_MODULE_1__["alert"]('Congratulation!', 'Export Design Token Succeed!');
    }
  }
}

/***/ }),

/***/ "./src/token-generator/color.js":
/*!**************************************!*\
  !*** ./src/token-generator/color.js ***!
  \**************************************/
/*! exports provided: generatePalette, generateFiles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePalette", function() { return generatePalette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFiles", function() { return generateFiles; });
/* harmony import */ var _token_template_palette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token-template/palette */ "./src/token-template/palette.js");
/* harmony import */ var _utils_sketch_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/sketch/document */ "./src/utils/sketch/document.js");
/* harmony import */ var _utils_sketch_symbols__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/sketch/symbols */ "./src/utils/sketch/symbols.js");
/* harmony import */ var _utils_os_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/os/dialog */ "./src/utils/os/dialog/index.js");
/* harmony import */ var _utils_os_fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/os/fs */ "./src/utils/os/fs/index.js");
/* harmony import */ var _utils_os_panel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/os/panel */ "./src/utils/os/panel/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }







var generatePalette = function generatePalette(colors, brands) {
  var files = []; // hue files

  var hues = _toConsumableArray(new Set(colors.map(function (color) {
    return color.hue;
  })));

  hues.forEach(function (hue) {
    var file = {};
    file.name = _token_template_palette__WEBPACK_IMPORTED_MODULE_0__["default"].hues.fileName.replace('${fileName}', hue);
    var hueColors = colors.filter(function (color) {
      return color.hue === hue;
    });
    var content = {};
    hueColors.forEach(function (hc) {
      content["".concat(hc.hue, "_").concat(hc.name)] = hc.color;
    });
    file.content = content;
    files.push(file);
  }); // aliases file

  var aliasesFile = {
    name: _token_template_palette__WEBPACK_IMPORTED_MODULE_0__["default"].aliases.fileName
  };
  var aliasesContent = {
    imports: files.map(function (file) {
      return "./".concat(file.name);
    }),
    aliases: {}
  };

  if (brands) {
    if (!brands.main) {
      _utils_os_dialog__WEBPACK_IMPORTED_MODULE_3__["alert"]('Please set a main brand colors.');
      return false;
    } else if (brands.main) {
      var mainColors = colors.filter(function (color) {
        return color.hue === brands.main;
      });
      mainColors.forEach(function (mainColor) {
        aliasesContent.aliases["brand_main_".concat(mainColor.name)] = "{!".concat(mainColor.hue, "_").concat(mainColor.name, "}");
      });
    } else if (brands.second) {
      var secondColors = colors.filter(function (color) {
        return color.hue === brands.second;
      });
      secondColors.forEach(function (secondColor) {
        aliasesContent.aliases["brand_main_".concat(secondColor.name)] = "{!".concat(secondColor.hue, "_").concat(secondColor.name, "}");
      });
    }
  } else {
    _utils_os_dialog__WEBPACK_IMPORTED_MODULE_3__["alert"]('Please set brand colors.');
    return false;
  }

  aliasesFile.content = aliasesContent;
  files.push(aliasesFile); // index file

  var indexFile = {
    name: _token_template_palette__WEBPACK_IMPORTED_MODULE_0__["default"].index.fileName
  };
  var indexContent = {
    "imports": ["./aliases.json"],
    "global": {
      "type": "color",
      "category": "palette"
    },
    "props": []
  };
  hues.forEach(function (hue) {
    var hueColors = colors.filter(function (color) {
      return color.hue === hue;
    });
    hueColors.forEach(function (hc) {
      var colorName = "".concat(hc.hue, "_").concat(hc.name);
      indexContent.props.push({
        "name": colorName,
        "value": "{!".concat(colorName, "}")
      });
    });
  });
  indexFile.content = indexContent;
  files.push(indexFile);
  return files;
};
var generateFiles = function generateFiles() {
  var savePanel = _utils_os_panel__WEBPACK_IMPORTED_MODULE_5__["openDirectory"]('~/Documents/');

  if (savePanel.runModal()) {
    var dirPath = savePanel.URL().path();
    var palettePath = dirPath + '/palette';
    _utils_os_fs__WEBPACK_IMPORTED_MODULE_4__["createDirectory"](palettePath);
    var symbols = _utils_sketch_document__WEBPACK_IMPORTED_MODULE_1__["getSymbols"]();
    var tokens = _utils_sketch_symbols__WEBPACK_IMPORTED_MODULE_2__["classify"](symbols);
    var files = generatePalette(tokens.palette, {
      main: 'blue',
      second: 'green'
    });
    files.forEach(function (file) {
      var filePath = palettePath + '/' + file.name;
      _utils_os_fs__WEBPACK_IMPORTED_MODULE_4__["saveFile"](filePath, file.content);
    });
    return true;
  }

  return false;
};

/***/ }),

/***/ "./src/token-template/palette.js":
/*!***************************************!*\
  !*** ./src/token-template/palette.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  hues: {
    fileName: '${fileName}.json',
    aliases: {
      keyName: '${name}',
      value: '${value}'
    }
  },
  aliases: {
    fileName: 'aliases.json',
    imports: {
      files: '${hues}'
    },
    aliases: {
      keyName: '${brand}',
      value: '${colorAlias}'
    }
  },
  index: {
    fileName: 'index.json',
    imports: ['./aliases.json'],
    global: {
      type: 'color',
      category: 'palette'
    },
    props: []
  },
  sample: {
    blue: {
      "aliases": {
        "blue_10": "#f0f5fc",
        "blue_20": "#cfe0fc",
        "blue_30": "#accbfc",
        "blue_40": "#84b1fa",
        "blue_50": "#5691f0",
        "blue_60": "#3272d9",
        "blue_70": "#1d5bbf",
        "blue_80": "#114599",
        "blue_90": "#103570",
        "blue_100": "#15233b"
      }
    },
    aliases: {
      "imports": ["./blue.json", "./bronze.json", "./dusk.json", "./green.json", "./indigo.json", "./magenta.json", "./purple.json", "./red.json", "./sky.json", "./slate.json", "./teal.json", "./white.json", "./gray.json", "./black.json"],
      "aliases": {
        "brand_10": "{!blue_10}",
        "brand_20": "{!blue_20}",
        "brand_30": "{!blue_30}",
        "brand_40": "{!blue_40}",
        "brand_50": "{!blue_50}",
        "brand_60": "{!blue_60}",
        "brand_70": "{!blue_70}",
        "brand_80": "{!blue_80}",
        "brand_90": "{!blue_90}",
        "brand_100": "{!blue_100}"
      }
    },
    index: {
      "imports": ["./aliases.json"],
      "global": {
        "type": "color",
        "category": "palette"
      },
      "props": [{
        "name": "black",
        "value": "{!black}"
      }, {
        "name": "white",
        "value": "{!white}"
      }, {
        "name": "brand_10",
        "value": "{!brand_10}"
      }, {
        "name": "brand_20",
        "value": "{!brand_20}"
      }, {
        "name": "brand_30",
        "value": "{!brand_30}"
      }, {
        "name": "brand_40",
        "value": "{!brand_40}"
      }, {
        "name": "brand_50",
        "value": "{!brand_50}"
      }, {
        "name": "brand_60",
        "value": "{!brand_60}"
      }, {
        "name": "brand_70",
        "value": "{!brand_70}"
      }, {
        "name": "brand_80",
        "value": "{!brand_80}"
      }, {
        "name": "brand_90",
        "value": "{!brand_90}"
      }, {
        "name": "brand_100",
        "value": "{!brand_100}"
      }, {
        "name": "blue_10",
        "value": "{!blue_10}"
      }, {
        "name": "blue_20",
        "value": "{!blue_20}"
      }, {
        "name": "blue_30",
        "value": "{!blue_30}"
      }, {
        "name": "blue_40",
        "value": "{!blue_40}"
      }, {
        "name": "blue_50",
        "value": "{!blue_50}"
      }, {
        "name": "blue_60",
        "value": "{!blue_60}"
      }, {
        "name": "blue_70",
        "value": "{!blue_70}"
      }, {
        "name": "blue_80",
        "value": "{!blue_80}"
      }, {
        "name": "blue_90",
        "value": "{!blue_90}"
      }, {
        "name": "blue_100",
        "value": "{!blue_100}"
      }, {
        "name": "bronze_10",
        "value": "{!bronze_10}"
      }, {
        "name": "bronze_20",
        "value": "{!bronze_20}"
      }, {
        "name": "bronze_30",
        "value": "{!bronze_30}"
      }, {
        "name": "bronze_40",
        "value": "{!bronze_40}"
      }, {
        "name": "bronze_50",
        "value": "{!bronze_50}"
      }, {
        "name": "bronze_60",
        "value": "{!bronze_60}"
      }, {
        "name": "bronze_70",
        "value": "{!bronze_70}"
      }, {
        "name": "bronze_80",
        "value": "{!bronze_80}"
      }, {
        "name": "bronze_90",
        "value": "{!bronze_90}"
      }, {
        "name": "bronze_100",
        "value": "{!bronze_100}"
      }, {
        "name": "dusk_10",
        "value": "{!dusk_10}"
      }, {
        "name": "dusk_20",
        "value": "{!dusk_20}"
      }, {
        "name": "dusk_30",
        "value": "{!dusk_30}"
      }, {
        "name": "dusk_40",
        "value": "{!dusk_40}"
      }, {
        "name": "dusk_50",
        "value": "{!dusk_50}"
      }, {
        "name": "dusk_60",
        "value": "{!dusk_60}"
      }, {
        "name": "dusk_70",
        "value": "{!dusk_70}"
      }, {
        "name": "dusk_80",
        "value": "{!dusk_80}"
      }, {
        "name": "dusk_90",
        "value": "{!dusk_90}"
      }, {
        "name": "dusk_100",
        "value": "{!dusk_100}"
      }, {
        "name": "gray_10",
        "value": "{!gray_10}"
      }, {
        "name": "gray_20",
        "value": "{!gray_20}"
      }, {
        "name": "gray_30",
        "value": "{!gray_30}"
      }, {
        "name": "gray_40",
        "value": "{!gray_40}"
      }, {
        "name": "gray_50",
        "value": "{!gray_50}"
      }, {
        "name": "gray_60",
        "value": "{!gray_60}"
      }, {
        "name": "gray_70",
        "value": "{!gray_70}"
      }, {
        "name": "gray_80",
        "value": "{!gray_80}"
      }, {
        "name": "gray_90",
        "value": "{!gray_90}"
      }, {
        "name": "gray_100",
        "value": "{!gray_100}"
      }, {
        "name": "green_10",
        "value": "{!green_10}"
      }, {
        "name": "green_20",
        "value": "{!green_20}"
      }, {
        "name": "green_30",
        "value": "{!green_30}"
      }, {
        "name": "green_40",
        "value": "{!green_40}"
      }, {
        "name": "green_50",
        "value": "{!green_50}"
      }, {
        "name": "green_60",
        "value": "{!green_60}"
      }, {
        "name": "green_70",
        "value": "{!green_70}"
      }, {
        "name": "green_80",
        "value": "{!green_80}"
      }, {
        "name": "green_90",
        "value": "{!green_90}"
      }, {
        "name": "green_100",
        "value": "{!green_100}"
      }, {
        "name": "indigo_10",
        "value": "{!indigo_10}"
      }, {
        "name": "indigo_20",
        "value": "{!indigo_20}"
      }, {
        "name": "indigo_30",
        "value": "{!indigo_30}"
      }, {
        "name": "indigo_40",
        "value": "{!indigo_40}"
      }, {
        "name": "indigo_50",
        "value": "{!indigo_50}"
      }, {
        "name": "indigo_60",
        "value": "{!indigo_60}"
      }, {
        "name": "indigo_70",
        "value": "{!indigo_70}"
      }, {
        "name": "indigo_80",
        "value": "{!indigo_80}"
      }, {
        "name": "indigo_90",
        "value": "{!indigo_90}"
      }, {
        "name": "indigo_100",
        "value": "{!indigo_100}"
      }, {
        "name": "magenta_10",
        "value": "{!magenta_10}"
      }, {
        "name": "magenta_20",
        "value": "{!magenta_20}"
      }, {
        "name": "magenta_30",
        "value": "{!magenta_30}"
      }, {
        "name": "magenta_40",
        "value": "{!magenta_40}"
      }, {
        "name": "magenta_50",
        "value": "{!magenta_50}"
      }, {
        "name": "magenta_60",
        "value": "{!magenta_60}"
      }, {
        "name": "magenta_70",
        "value": "{!magenta_70}"
      }, {
        "name": "magenta_80",
        "value": "{!magenta_80}"
      }, {
        "name": "magenta_90",
        "value": "{!magenta_90}"
      }, {
        "name": "magenta_100",
        "value": "{!magenta_100}"
      }, {
        "name": "purple_10",
        "value": "{!purple_10}"
      }, {
        "name": "purple_20",
        "value": "{!purple_20}"
      }, {
        "name": "purple_30",
        "value": "{!purple_30}"
      }, {
        "name": "purple_40",
        "value": "{!purple_40}"
      }, {
        "name": "purple_50",
        "value": "{!purple_50}"
      }, {
        "name": "purple_60",
        "value": "{!purple_60}"
      }, {
        "name": "purple_70",
        "value": "{!purple_70}"
      }, {
        "name": "purple_80",
        "value": "{!purple_80}"
      }, {
        "name": "purple_90",
        "value": "{!purple_90}"
      }, {
        "name": "purple_100",
        "value": "{!purple_100}"
      }, {
        "name": "red_10",
        "value": "{!red_10}"
      }, {
        "name": "red_20",
        "value": "{!red_20}"
      }, {
        "name": "red_30",
        "value": "{!red_30}"
      }, {
        "name": "red_40",
        "value": "{!red_40}"
      }, {
        "name": "red_50",
        "value": "{!red_50}"
      }, {
        "name": "red_60",
        "value": "{!red_60}"
      }, {
        "name": "red_70",
        "value": "{!red_70}"
      }, {
        "name": "red_80",
        "value": "{!red_80}"
      }, {
        "name": "red_90",
        "value": "{!red_90}"
      }, {
        "name": "red_100",
        "value": "{!red_100}"
      }, {
        "name": "sky_10",
        "value": "{!sky_10}"
      }, {
        "name": "sky_20",
        "value": "{!sky_20}"
      }, {
        "name": "sky_30",
        "value": "{!sky_30}"
      }, {
        "name": "sky_40",
        "value": "{!sky_40}"
      }, {
        "name": "sky_50",
        "value": "{!sky_50}"
      }, {
        "name": "sky_60",
        "value": "{!sky_60}"
      }, {
        "name": "sky_70",
        "value": "{!sky_70}"
      }, {
        "name": "sky_80",
        "value": "{!sky_80}"
      }, {
        "name": "sky_90",
        "value": "{!sky_90}"
      }, {
        "name": "sky_100",
        "value": "{!sky_100}"
      }, {
        "name": "slate_10",
        "value": "{!slate_10}"
      }, {
        "name": "slate_20",
        "value": "{!slate_20}"
      }, {
        "name": "slate_30",
        "value": "{!slate_30}"
      }, {
        "name": "slate_40",
        "value": "{!slate_40}"
      }, {
        "name": "slate_50",
        "value": "{!slate_50}"
      }, {
        "name": "slate_60",
        "value": "{!slate_60}"
      }, {
        "name": "slate_70",
        "value": "{!slate_70}"
      }, {
        "name": "slate_80",
        "value": "{!slate_80}"
      }, {
        "name": "slate_90",
        "value": "{!slate_90}"
      }, {
        "name": "slate_100",
        "value": "{!slate_100}"
      }, {
        "name": "teal_10",
        "value": "{!teal_10}"
      }, {
        "name": "teal_20",
        "value": "{!teal_20}"
      }, {
        "name": "teal_30",
        "value": "{!teal_30}"
      }, {
        "name": "teal_40",
        "value": "{!teal_40}"
      }, {
        "name": "teal_50",
        "value": "{!teal_50}"
      }, {
        "name": "teal_60",
        "value": "{!teal_60}"
      }, {
        "name": "teal_70",
        "value": "{!teal_70}"
      }, {
        "name": "teal_80",
        "value": "{!teal_80}"
      }, {
        "name": "teal_90",
        "value": "{!teal_90}"
      }, {
        "name": "teal_100",
        "value": "{!teal_100}"
      }]
    }
  }
});

/***/ }),

/***/ "./src/utils/os/dialog/alert.js":
/*!**************************************!*\
  !*** ./src/utils/os/dialog/alert.js ***!
  \**************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/**
 *
 *
 * @export
 * @param {string} [message='']
 * @param {string} [title='Whoops']
 */
function alert() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Whoops';
  var app = NSApplication.sharedApplication();
  app.displayDialog_withTitle_(message, title);
}

/***/ }),

/***/ "./src/utils/os/dialog/index.js":
/*!**************************************!*\
  !*** ./src/utils/os/dialog/index.js ***!
  \**************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert */ "./src/utils/os/dialog/alert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _alert__WEBPACK_IMPORTED_MODULE_0__["alert"]; });



/***/ }),

/***/ "./src/utils/os/fs/createDirectory.js":
/*!********************************************!*\
  !*** ./src/utils/os/fs/createDirectory.js ***!
  \********************************************/
/*! exports provided: createDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDirectory", function() { return createDirectory; });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound */ "./src/utils/os/sound/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog */ "./src/utils/os/dialog/index.js");


/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */

function createDirectory() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fileManager = NSFileManager.defaultManager();
  var errorPtr = MOPointer.alloc().init();
  fileManager.createDirectoryAtPath_withIntermediateDirectories_attributes_error(path, true, nil, errorPtr);
  var error = errorPtr.value();

  if (error) {
    _dialog__WEBPACK_IMPORTED_MODULE_1__["alert"](errorPtr.value());
    _sound__WEBPACK_IMPORTED_MODULE_0__["alert"]('fail');
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/utils/os/fs/index.js":
/*!**********************************!*\
  !*** ./src/utils/os/fs/index.js ***!
  \**********************************/
/*! exports provided: createDirectory, readFile, saveFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDirectory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDirectory */ "./src/utils/os/fs/createDirectory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDirectory", function() { return _createDirectory__WEBPACK_IMPORTED_MODULE_0__["createDirectory"]; });

/* harmony import */ var _readFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./readFile */ "./src/utils/os/fs/readFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return _readFile__WEBPACK_IMPORTED_MODULE_1__["readFile"]; });

/* harmony import */ var _saveFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./saveFile */ "./src/utils/os/fs/saveFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return _saveFile__WEBPACK_IMPORTED_MODULE_2__["saveFile"]; });





/***/ }),

/***/ "./src/utils/os/fs/readFile.js":
/*!*************************************!*\
  !*** ./src/utils/os/fs/readFile.js ***!
  \*************************************/
/*! exports provided: readFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readFile", function() { return readFile; });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound */ "./src/utils/os/sound/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog */ "./src/utils/os/dialog/index.js");


/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */

function readFile() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var errorPtr = MOPointer.alloc().init();
  var str = NSString.stringWithContentsOfFile_encoding_error(path, NSUTF8StringEncoding, errorPtr);
  var error = errorPtr.value();

  if (error) {
    _dialog__WEBPACK_IMPORTED_MODULE_1__["alert"](errorPtr.value());
    _sound__WEBPACK_IMPORTED_MODULE_0__["alert"]('fail');
    return false;
  }

  return str;
}

/***/ }),

/***/ "./src/utils/os/fs/saveFile.js":
/*!*************************************!*\
  !*** ./src/utils/os/fs/saveFile.js ***!
  \*************************************/
/*! exports provided: saveFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sound */ "./src/utils/os/sound/index.js");
/* harmony import */ var _dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog */ "./src/utils/os/dialog/index.js");



var contentFormat = function contentFormat(content) {
  return JSON.stringify(content, null, '    ');
};
/**
 *
 *
 * @export
 * @param {string} [path='']
 * @returns {boolean}
 */


function saveFile() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var errorPtr = MOPointer.alloc().init();
  var fileContent = NSString.stringWithString(contentFormat(content));
  fileContent.writeToFile_atomically_encoding_error(path, true, NSUTF8StringEncoding, errorPtr);
  var error = errorPtr.value();

  if (error) {
    _dialog__WEBPACK_IMPORTED_MODULE_1__["alert"](errorPtr.value());
    _sound__WEBPACK_IMPORTED_MODULE_0__["alert"]('fail');
    return false;
  }

  return true;
}

/***/ }),

/***/ "./src/utils/os/panel/index.js":
/*!*************************************!*\
  !*** ./src/utils/os/panel/index.js ***!
  \*************************************/
/*! exports provided: openFile, openDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _openFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./openFile */ "./src/utils/os/panel/openFile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return _openFile__WEBPACK_IMPORTED_MODULE_0__["openFile"]; });

/* harmony import */ var _openDirectory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./openDirectory */ "./src/utils/os/panel/openDirectory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "openDirectory", function() { return _openDirectory__WEBPACK_IMPORTED_MODULE_1__["openDirectory"]; });




/***/ }),

/***/ "./src/utils/os/panel/openDirectory.js":
/*!*********************************************!*\
  !*** ./src/utils/os/panel/openDirectory.js ***!
  \*********************************************/
/*! exports provided: openDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDirectory", function() { return openDirectory; });
/* harmony import */ var _sketch_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sketch/document */ "./src/utils/sketch/document.js");

/**
 *
 *
 * @export
 * @param {string} [title="Choose a location…"]
 * @param {string} [message="Select the export location…"]
 * @param {string} [prompt="Export"]
 * @returns {NSOpenPanel}
 */

function openDirectory() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Choose a location…";
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Select the export location…";
  var prompt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Export";
  var openPanel = NSOpenPanel.openPanel();
  var defaultDirectory = _sketch_document__WEBPACK_IMPORTED_MODULE_0__["getDirectory"]();
  openPanel.setDirectoryURL(NSURL.fileURLWithPath(defaultDirectory));
  openPanel.setTitle(title);
  openPanel.setMessage(message);
  openPanel.setPrompt(prompt);
  openPanel.setCanCreateDirectories(true);
  openPanel.setCanChooseDirectories(true);
  openPanel.setCanChooseFiles(false);
  openPanel.setAllowsMultipleSelection(false);
  openPanel.setShowsHiddenFiles(false);
  openPanel.setExtensionHidden(false);
  return openPanel;
}

/***/ }),

/***/ "./src/utils/os/panel/openFile.js":
/*!****************************************!*\
  !*** ./src/utils/os/panel/openFile.js ***!
  \****************************************/
/*! exports provided: openFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return openFile; });
/**
 *
 *
 * @export
 * @param {string} [title="Choose a file…"]
 * @param {string} [message="Select the location…"]
 * @param {string} [prompt="Open"]
 * @returns {NSOpenPanel}
 */
function openFile() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Choose a file…";
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Select the location…";
  var prompt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Open";
  var openPanel = NSOpenPanel.openPanel();
  openPanel.setTitle(title);
  openPanel.setMessage(message);
  openPanel.setPrompt(prompt);
  openPanel.setCanCreateDirectories(false);
  openPanel.setCanChooseDirectories(false);
  openPanel.setCanChooseFiles(true);
  openPanel.setAllowsMultipleSelection(false);
  openPanel.setShowsHiddenFiles(false);
  openPanel.setExtensionHidden(false);
  return openPanel;
}

/***/ }),

/***/ "./src/utils/os/sound/index.js":
/*!*************************************!*\
  !*** ./src/utils/os/sound/index.js ***!
  \*************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sound__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sound */ "./src/utils/os/sound/sound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return _sound__WEBPACK_IMPORTED_MODULE_0__["alert"]; });



/***/ }),

/***/ "./src/utils/os/sound/sound.js":
/*!*************************************!*\
  !*** ./src/utils/os/sound/sound.js ***!
  \*************************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
var SystemSounds = {
  Basso: "Basso",
  Blow: "Blow",
  Bottle: "Bottle",
  Frog: "Frog",
  Funk: "Funk",
  // like system sound of failed action
  Glass: "Glass",
  // cheers sound for successful action
  Hero: "Hero",
  Morse: "Morse",
  Ping: "Ping",
  Pop: "Pop",
  Purr: "Purr",
  Sosumi: "Sosumi",
  Submarine: "Submarine",
  Tink: "Tink"
};
var PluginSounds = {
  success: SystemSounds.Glass,
  fail: SystemSounds.Funk
};
/**
 *
 *
 * @export
 * @param {string} [type='fail']
 */

function alert() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fail';
  var soundName = type == 'success' ? PluginSounds[type] : PluginSounds['fail'];
  var sound = NSSound.soundNamed(soundName);
  sound.play();
}

/***/ }),

/***/ "./src/utils/sketch/document.js":
/*!**************************************!*\
  !*** ./src/utils/sketch/document.js ***!
  \**************************************/
/*! exports provided: getSymbols, getDirectory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSymbols", function() { return getSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectory", function() { return getDirectory; });
/**
 *
 *
 * @export
 * @returns {NSArray}
 */
function getSymbols() {
  var doc = context.document;
  return doc.documentData().allSymbols();
}
/**
 *
 *
 * @export
 * @returns {String} currentDirectory
 */

function getDirectory() {
  var doc = context.document;
  var path = doc.fileURL().path();
  var currentDirectory = path.split(doc.displayName())[0];
  return currentDirectory;
}

/***/ }),

/***/ "./src/utils/sketch/styles.js":
/*!************************************!*\
  !*** ./src/utils/sketch/styles.js ***!
  \************************************/
/*! exports provided: SketchRGBAtoCSSRGBA, rgb2hex, getShadow, getInnerShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SketchRGBAtoCSSRGBA", function() { return SketchRGBAtoCSSRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb2hex", function() { return rgb2hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShadow", function() { return getShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerShadow", function() { return getInnerShadow; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * 
 * @param {String} SketchRGBAStr (r:xxxx, g:xxxx, b:xxxxx, a:xxx)
 * @return {String} rgba(number, number, number, number) 
 */
function SketchRGBAtoCSSRGBA(SketchRGBAStr) {
  var valueArr = String(SketchRGBAStr).replace(/[\(\)]/g, '').split(' ').map(function (v) {
    var _v$split = v.split(':'),
        _v$split2 = _slicedToArray(_v$split, 2),
        type = _v$split2[0],
        value = _v$split2[1];

    if (type !== 'a') {
      return Math.round(Number(value) * 255);
    }

    return Number(value);
  }).join(', ');
  return "rgba(".concat(valueArr, ")");
}
/**
 * 
 * @param {String} CSSRGBAStr
 */

function rgb2hex(CSSRGBAStr) {
  var hex = String(CSSRGBAStr).replace(/[rgba\(\)]/g, '').split(', ').map(function (v, i) {
    if (i != 3) return ("0" + parseInt(v, 10).toString(16)).slice(-2);else return '';
  }).join('').toUpperCase();
  return "#".concat(hex);
}
/**
 * 
 * @param {MSStyle} style
 */

function getShadow(style) {
  var shadows = style.enabledShadows();
  var len = shadows.length;

  if (len == 0) {
    return null;
  } else {
    return shadows[len - 1];
  }
}
/**
 * 
 * @param {MSStyle} style
 */

function getInnerShadow(style) {
  var shadows = style.enabledInnerShadows();
  var len = shadows.length;

  if (len == 0) {
    return null;
  } else {
    return shadows[len - 1];
  }
}

/***/ }),

/***/ "./src/utils/sketch/symbols.js":
/*!*************************************!*\
  !*** ./src/utils/sketch/symbols.js ***!
  \*************************************/
/*! exports provided: classify, getTextStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classify", function() { return classify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextStyles", function() { return getTextStyles; });
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ "./src/utils/sketch/styles.js");

/**
 * Get all the symbols for a document.
 * @param {NSSymbolMaster} symbol
 * @return {Category, NSSymbolMaster}
 */

function classify(symbols) {
  var tokens = {
    palette: []
  };

  for (var i = 0; i < symbols.count(); i++) {
    var symbol = symbols[i];
    var name = String(symbol.name());

    _getColorPalette(symbol, name, tokens);
  }

  print(tokens);
  return tokens;
}

function _getColorPalette(symbol, name, tokens) {
  if (name.indexOf('color') >= 0) {
    var colorShape = symbol.layers().firstObject();
    var fill = colorShape.style().fills().firstObject();
    var nameArr = name.split('/').map(function (part) {
      return part.trim();
    });
    tokens.palette.push({
      hue: nameArr[1],
      name: nameArr[2] ? nameArr.splice(2).join('_') : nameArr[1],
      color: _styles__WEBPACK_IMPORTED_MODULE_0__["rgb2hex"](_styles__WEBPACK_IMPORTED_MODULE_0__["SketchRGBAtoCSSRGBA"](fill.color()))
    });
  }
}

function getTextStyles(doc) {
  var text = doc.documentData().layerTextStyles().objects();
  var definedTextStyles = [];

  for (var i = 0; i < text.count(); i++) {
    var style = text.objectAtIndex(i);
    var attributes = style.style().textStyle().attributes();
    definedTextStyles.push({
      "attributes": attributes,
      "textStyle": style,
      "name": style.name()
    });
  }

  var styles = [];

  for (var i = 0; i < definedTextStyles.length; i++) {
    var definedTextStyle = definedTextStyles[i];
    var color = definedTextStyle.attributes.MSAttributedStringColorAttribute;

    if (color != null) {
      var red = color.red();
      var green = color.green();
      var blue = color.blue();
      var alpha = color.alpha();
    }

    var name = _getTextName(String(definedTextStyle.name));

    var family = String(definedTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontNameAttribute));
    var size = String(definedTextStyle.attributes.NSFont.fontDescriptor().objectForKey(NSFontSizeAttribute)) * 1;
    var par = definedTextStyle.attributes.NSParagraphStyle;

    if (par != null) {
      var align = par.alignment();
      var lineHeight = par.maximumLineHeight();
      var paragraphSpacing = par.paragraphSpacing();
    }

    var spacing = String(definedTextStyle.attributes.NSKern) * 1;
    var text = definedTextStyle.attributes.MSAttributedStringTextTransformAttribute;

    if (text != null) {
      var textTransform = String(definedTextStyle.attributes.MSAttributedStringTextTransformAttribute) * 1;
    } else {
      var textTransform = 0;
    }

    var strike = String(definedTextStyle.attributes.NSStrikethrough) * 1;
    var underline = String(definedTextStyle.attributes.NSUnderline) * 1;
    styles.push({
      name: name,
      font: family,
      size: size,
      color: {
        red: red,
        green: green,
        blue: blue,
        alpha: alpha
      },
      alignment: align,
      spacing: spacing,
      lineHeight: lineHeight,
      paragraphSpacing: paragraphSpacing,
      textTransform: textTransform,
      strikethrough: strike,
      underline: underline
    });
  }

  ;
  return styles;
}

function _getTextName(name) {
  var names = name.split('/').map(function (n) {
    return n.trim();
  });
  return names.join('.');
}

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['exportAction'] = __skpm_run.bind(this, 'exportAction');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=laevateinn.js.map