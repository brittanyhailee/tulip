"use strict";
self["webpackHotUpdatetulip"]("memory",{

/***/ "./src/db/Request.ts":
/*!***************************!*\
  !*** ./src/db/Request.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dbSize": () => (/* binding */ dbSize),
/* harmony export */   "getSize": () => (/* binding */ getSize),
/* harmony export */   "getValueFromMemory": () => (/* binding */ getValueFromMemory)
/* harmony export */ });
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
var storeName = 'memories';
var dbName = 'test';
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
var dbSize = function (db, dbName) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var tx = db.transaction([dbName], 'readonly');
                var store = tx.objectStore(storeName);
                var cursorReq = store.openCursor();
                var count = 0;
                var size = 0;
                cursorReq.onsuccess = function (e) {
                    var cursor = cursorReq.result;
                    if (cursor) {
                        count++;
                        size = size + cursor.value.blob.size;
                        cursor.continue();
                        console.log("Count: ", count);
                    }
                };
                cursorReq.onerror = function (e) {
                    reject(e);
                };
                tx.oncomplete = function (e) {
                    resolve({
                        count: count,
                        size: size,
                    });
                };
                tx.onabort = function (e) {
                    reject(e);
                };
                tx.onerror = function (e) {
                    reject(e);
                };
            })];
    });
}); };
var maxKey = 0;
var keysArray = [];
var randomKeyTest = 0;
function getSize() {
    var transaction = db.transaction(storeName, "readonly");
    var objectStore = transaction.objectStore(storeName);
    // Testing
    var getAllKeysRequest = objectStore.getAllKeys();
    getAllKeysRequest.onsuccess = function () {
        keysArray = getAllKeysRequest.result;
        console.log("keysArray: " + keysArray);
    };
    // End of test
    var countRequest = objectStore.count();
    countRequest.onsuccess = function () {
        maxKey = countRequest.result;
        console.log(countRequest.result);
        return countRequest.result;
    };
}
function getRandomKey() {
    var min = 1;
    // const max = maxKey;
    // Testing
    var max = keysArray.length - 1;
    // const key = keysArray[randomKeyTest];
    // End of Testing
    var setRandomKey = Math.floor(Math.random() * (max - min + 1)) + min;
    return keysArray[setRandomKey];
}
function getValueFromMemory() {
    return new Promise(function (resolve, reject) {
        var transaction = db.transaction(storeName, "readonly");
        var store = transaction.objectStore(storeName);
        // const key = 1;
        var key = getRandomKey();
        console.log("the key we are getting is " + key);
        var getRequest = store.get(key);
        getRequest.onsuccess = function (event) {
            var value = event.target.result;
            if (value) {
                console.log("Value retrieved: ", value);
                console.log("Memory: ", value.name);
                resolve(JSON.stringify(value.name));
            }
            else {
                console.log("No value found for key: ", key);
                resolve("No value found for key: " + key);
            }
        };
        getRequest.onerror = function (event) {
            console.error("Error getting value: ", event);
        };
    });
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
/******/ 	__webpack_require__.h = () => ("a1431b9a29c751ed3342")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=memory.d9696c90359851b57cda.hot-update.js.map