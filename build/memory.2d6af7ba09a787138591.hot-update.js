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

var _a;
var _b;
_b = __webpack_require__.$Refresh$.signature();



var Main;
(function (_c) {
    var memory = _c.memory, handleClick = _c.handleClick;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Your memory"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "memory goes here"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { id: "memory-btn", onClick: handleClick }, "Click me please..."),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", null, "memory: "),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, memory))));
});
var Memory = function () {
    _b();
    // const [value, setValue] = useState<string>('');
    // const [isClicked, setIsClicked] = useState<boolean>(false);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), memory = _c[0], setMemory = _c[1];
    function fetchMemory() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve((0,_db_Request__WEBPACK_IMPORTED_MODULE_2__.getValueFromMemory)());
            }, 2000);
        });
    }
    var handleClick = function () {
        (0,_db_Request__WEBPACK_IMPORTED_MODULE_2__.getValueFromMemory)().then(function (memory) {
            console.log("the memory is: ", memory);
            setMemory(memory);
        }).catch(function (error) {
            console.log("Error fetching memory: ", error);
        });
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, { memory: memory, handleClick: handleClick });
};
_a = Memory;
__webpack_require__.$Refresh$.register(_a, "Memory");
_b(Memory, "fX6AIh86/DHIVZFERQK27/xnLLY=");
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
/******/ 	__webpack_require__.h = () => ("cbf57b8f4108c53974f9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.2d6af7ba09a787138591.hot-update.js.map