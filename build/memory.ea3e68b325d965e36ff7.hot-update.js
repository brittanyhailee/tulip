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
// export function getValueFromMemory() {
//     const transaction = db.transaction(storeName, "readonly");
//     const store = transaction.objectStore(storeName);
//     const getRequest = store.get(key);
//     getRequest.onsuccess = (event) => {
//         const value = (event.target as IDBRequest).result;
//         if (value) {
//             console.log("Value retrieved: ", value);
//             console.log("Memory: ", value.name);
//             return value.name;
//         } else {
//             console.log("No value found for key: ", key);
//             return ("No value found for key: " + key);
//         }
//     };
//     getRequest.onerror = (event) => {
//         console.error("Error getting value: ", event);
//     };
//     return "";
// }
function getValueFromMemory(key) {
    return new Promise((resolve, reject));
    {
        getRequest.onsuccess = function (event) {
            var value = event.target.result;
            if (value) {
                console.log("Value retrieved: ", value);
                console.log("Memory: ", value.name);
                resolve(value.name); // Resolve the promise with the value
            }
            else {
                console.log("No value found for key: ", key);
                resolve("No value found for key: " + key); // Resolve with an error message
            }
        };
    }
    ;
    getRequest.onerror = function (event) {
        console.error("Error getting value: ", event);
        reject("Error retrieving value."); // Reject the promise in case of an error
    };
}
;


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
/******/ 	__webpack_require__.h = () => ("ae6d6a4645174535d840")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.ea3e68b325d965e36ff7.hot-update.js.map