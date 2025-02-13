"use strict";
self["webpackHotUpdatetulip"]("memory",{

/***/ "./src/pages/Memory/Memory.tsx":
/*!*************************************!*\
  !*** ./src/pages/Memory/Memory.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Memory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Memory.css */ "./src/pages/Memory/Memory.css");
/* harmony import */ var _db_Request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/Request */ "./src/db/Request.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();



var Main = function () {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Welcome to the Main Page")));
};
_a = Main;
__webpack_require__.$Refresh$.register(_a, "Main");
var Memory = function () {
    _c();
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), value = _d[0], setValue = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isClicked = _e[0], setIsClicked = _e[1];
    var handleClick = function () {
        var valueFromMemory = (0,_db_Request__WEBPACK_IMPORTED_MODULE_2__.getValueFromMemory)();
        setValue(valueFromMemory);
        setIsClicked(true);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Your memory"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "memory goes here"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleClick }, "Click me please..."),
        isClicked && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "memory: "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null),
            ")}")),
        "; }; export default Memory;"));
};
_b = Memory;
__webpack_require__.$Refresh$.register(_b, "Memory");
_c(Memory, "cHgW4GN1+V9NHLBtd5gYma9b7IM=");


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
/******/ 	__webpack_require__.h = () => ("ecc54c5b1adab8c4c064")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.f98349c70f70ae878c62.hot-update.js.map