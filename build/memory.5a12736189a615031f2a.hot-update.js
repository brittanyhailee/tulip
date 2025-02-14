"use strict";
self["webpackHotUpdatetulip"]("memory",{

/***/ "./src/db/Request.ts":
/*!***************************!*\
  !*** ./src/db/Request.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getValueFromMemory": () => (/* binding */ getValueFromMemory)
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var storeName = 'memories';
var dbName = 'test';
var key = 1;
var db;
var request = indexedDB.open(dbName, 1);
request.onerror = function (event) {
    console.error('Error opening database:', event.target.error);
};
request.onsuccess = function (event) {
    db = event.target.result;
    getValueFromMemory();
};
request.onupgradeneeded = function (event) {
    var db = event.target.result;
    db.createObjectStore(storeName, { keyPath: 'id' });
};
function getValueFromMemory() {
    return new Promise(function (resolve, reject) { return ; });
    var transaction = db.transaction(storeName, "readonly");
    var store = transaction.objectStore(storeName);
    var getRequest = store.get(key);
    getRequest.onsuccess = function (event) {
        var value = event.target.result;
        if (value) {
            console.log("Value retrieved: ", value);
            console.log("Memory: ", value.name);
            return JSON.stringify(value.name);
        }
        else {
            console.log("No value found for key: ", key);
            return ("No value found for key: " + key);
        }
    };
    getRequest.onerror = function (event) {
        console.error("Error getting value: ", event);
    };
    return "";
}


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
/******/ 	__webpack_require__.h = () => ("a519f644de6a85df3afb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.5a12736189a615031f2a.hot-update.js.map