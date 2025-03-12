"use strict";
self["webpackHotUpdatetulip"]("panel",{

/***/ "./src/pages/Panel/Panel.tsx":
/*!***********************************!*\
  !*** ./src/pages/Panel/Panel.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Panel.css */ "./src/pages/Panel/Panel.css");
/* harmony import */ var _db_indexedDb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../db/indexedDb */ "./src/db/indexedDb.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _a, _b;
var _c;
_c = __webpack_require__.$Refresh$.signature();



var Main = function (_d) {
    var handleClick = _d.handleClick, textareaRef = _d.textareaRef;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Your memory"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", { action: "#", id: "input" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", null, "What would you like to remember?"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", { ref: textareaRef, id: "memory" }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleClick, type: "submit", value: "send" }, "send"))));
};
_a = Main;
__webpack_require__.$Refresh$.register(_a, "Main");
var Panel = function () {
    _c();
    var textareaRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);
    var db = new _db_indexedDb__WEBPACK_IMPORTED_MODULE_2__["default"]('test');
    db.createObjectStore(['memories']);
    var dateTime = new Date();
    console.log("current date is " + dateTime);
    var handleClick = function () {
        var memory = "";
        var text = textareaRef.current.value.trim();
        if (text.length !== 0) {
            console.log(textareaRef.current.value);
            memory = textareaRef.current.value;
            db.putValue('memories', { name: memory });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Main, { handleClick: handleClick, textareaRef: textareaRef })
    // <div className="container">
    //   <h1>Your memory</h1>
    //   <form action="#" id="input">
    //     <label>What would you like to remember?</label>
    //     <textarea ref={textareaRef} id="memory"></textarea>
    //     <button onClick={handleClick} type="submit" value="send">send</button>
    //   </form>
    // </div>
    );
};
_b = Panel;
__webpack_require__.$Refresh$.register(_b, "Panel");
_c(Panel, "gJtT2aPnbUb4WH8ANBrFCKASbhs=");
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
/******/ 	__webpack_require__.h = () => ("bc4f4357b2b8b319f84c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=panel.1e4c3745cf501fecd371.hot-update.js.map