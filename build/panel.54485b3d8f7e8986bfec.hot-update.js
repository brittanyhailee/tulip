"use strict";
self["webpackHotUpdatetulip"]("panel",{

/***/ "./src/pages/Panel/Panel.tsx":
/*!***********************************!*\
  !*** ./src/pages/Panel/Panel.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Test": () => (/* binding */ Test),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.css */ "./src/pages/Panel/Panel.css");
/* harmony import */ var _indexedDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexedDb */ "./src/pages/Panel/indexedDb.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();



var Test = function () {
    _c();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var runIndexDb = function () { return __awaiter(void 0, void 0, void 0, function () {
            var indexedDb;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        indexedDb = new _indexedDb__WEBPACK_IMPORTED_MODULE_2__["default"]('test');
                        return [4 /*yield*/, indexedDb.createObjectStore(['books', 'students'])];
                    case 1:
                        _d.sent();
                        return [4 /*yield*/, indexedDb.putValue('books', { name: 'A Game of Thrones' })];
                    case 2:
                        _d.sent();
                        return [4 /*yield*/, indexedDb.putBulkValue('books', [{ name: 'A Song of Fire and Ice' }, { name: 'Harry Potter and the Chamber of Secrets' }])];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, indexedDb.getValue('books', 1)];
                    case 4:
                        _d.sent();
                        return [4 /*yield*/, indexedDb.getAllValue('books')];
                    case 5:
                        _d.sent();
                        return [4 /*yield*/, indexedDb.deleteValue('books', 1)];
                    case 6:
                        _d.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        runIndexDb();
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null));
};
_a = Test;
__webpack_require__.$Refresh$.register(_a, "Test");
_c(Test, "OD7bBpZva5O2jO+Puf00hKivP7c=");
var Panel = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Your memory"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "#", id: "input" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "What would you like to remember?"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { id: "memory" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "submit", value: "send" }))));
};
_b = Panel;
__webpack_require__.$Refresh$.register(_b, "Panel");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Panel);


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("30a0eda05a4215170c3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=panel.54485b3d8f7e8986bfec.hot-update.js.map