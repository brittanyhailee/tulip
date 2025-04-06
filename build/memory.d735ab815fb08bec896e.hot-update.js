"use strict";
self["webpackHotUpdatetulip"]("memory",{

/***/ "./src/pages/Memory/Memory.tsx":
/*!*************************************!*\
  !*** ./src/pages/Memory/Memory.tsx ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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



var Main = function (_d) {
    var memory = _d.memory, handleClick = _d.handleClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "A memory to live for"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "memory-btn", onClick: handleClick }, "Remember a memory"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "memory: "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, memory
                .split("\n")
                .map(function (line, index) { return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { key: index }, line); })))));
};
_a = Main;
__webpack_require__.$Refresh$.register(_a, "Main");
var Memory = function () {
    _c();
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), memory = _d[0], setMemory = _d[1];
    function fetchMemory() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve((0,_db_Request__WEBPACK_IMPORTED_MODULE_2__.getValueFromMemory)());
            }, 2000);
        });
    }
    var handleClick = function () {
        (0,_db_Request__WEBPACK_IMPORTED_MODULE_2__.getValueFromMemory)().then(function (memory) {
            // memory = memory.replace(/\\n/g, "\n"); replace new line with spaces 
            memory = memory.replace(/\\n/g, "\n");
            memory = memory.replace(/\n/g, '<br>');
            document.getElementById('memory-div').innerHTML = memory;
            setMemory(memory);
        }).catch(function (error) {
            console.log("Error fetching memory: ", error);
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, { memory: memory, handleClick: handleClick });
};
_b = Memory;
__webpack_require__.$Refresh$.register(_b, "Memory");
_c(Memory, "fX6AIh86/DHIVZFERQK27/xnLLY=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Memory);


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
/******/ 	__webpack_require__.h = () => ("ae523e80c5054952aa24")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.d735ab815fb08bec896e.hot-update.js.map