/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/src/background/fetch-sse.js":
/*!*****************************************!*\
  !*** ./lib/src/background/fetch-sse.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchingSSE: () => (/* binding */ fetchingSSE)
/* harmony export */ });
/* harmony import */ var eventsource_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventsource-parser */ "./node_modules/eventsource-parser/dist/index.mjs");
/* harmony import */ var _stream_async_iterable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stream-async-iterable.js */ "./lib/src/background/stream-async-iterable.js");


//copied code from https://github.com/jflam/chat-gpt-jupyter-extension/blob/main/src/background/fetch-sse.mjs
async function fetchingSSE(resource, options) {
  const {
    onMessage,
    onError,
    ...fetchOptions
  } = options;
  const resp = await fetch(resource, fetchOptions).catch(err => onError(err));
  const parser = (0,eventsource_parser__WEBPACK_IMPORTED_MODULE_1__.createParser)(event => {
    if (event.type === "event") {
      onMessage(event.data);
    }
  });
  for await (const chunk of (0,_stream_async_iterable_js__WEBPACK_IMPORTED_MODULE_0__.streamAsyncIterable)(resp.body)) {
    const str = new TextDecoder().decode(chunk);
    parser.feed(str);
  }
}

/***/ }),

/***/ "./lib/src/background/stream-async-iterable.js":
/*!*****************************************************!*\
  !*** ./lib/src/background/stream-async-iterable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   streamAsyncIterable: () => (/* binding */ streamAsyncIterable)
/* harmony export */ });
async function* streamAsyncIterable(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const {
        done,
        value
      } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

/***/ }),

/***/ "./node_modules/expiry-map/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/expiry-map/dist/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const mapAgeCleaner = __webpack_require__(/*! map-age-cleaner */ "./node_modules/map-age-cleaner/dist/index.js");
class ExpiryMap {
    constructor(maxAge, data) {
        this.maxAge = maxAge;
        this[Symbol.toStringTag] = 'Map';
        this.data = new Map();
        // Bootstrap the cleanup process which frees up memory when an item expires
        mapAgeCleaner(this.data);
        if (data) { // tslint:disable-line:early-exit
            for (const [key, value] of data) {
                this.set(key, value);
            }
        }
    }
    get size() {
        return this.data.size;
    }
    clear() {
        this.data.clear();
    }
    delete(key) {
        return this.data.delete(key);
    }
    has(key) {
        return this.data.has(key);
    }
    get(key) {
        const value = this.data.get(key);
        if (value) {
            return value.data;
        }
        return;
    }
    set(key, value) {
        this.data.set(key, {
            maxAge: Date.now() + this.maxAge,
            data: value
        });
        return this;
    }
    values() {
        return this.createIterator(item => item[1].data);
    }
    keys() {
        return this.data.keys();
    }
    entries() {
        return this.createIterator(item => [item[0], item[1].data]);
    }
    forEach(callbackfn, thisArg) {
        for (const [key, value] of this.entries()) {
            callbackfn.apply(thisArg, [value, key, this]);
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
    *createIterator(projection) {
        for (const item of this.data.entries()) {
            yield projection(item);
        }
    }
}
module.exports = ExpiryMap;


/***/ }),

/***/ "./node_modules/map-age-cleaner/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/map-age-cleaner/dist/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const pDefer = __webpack_require__(/*! p-defer */ "./node_modules/p-defer/index.js");
function mapAgeCleaner(map, property = 'maxAge') {
    let processingKey;
    let processingTimer;
    let processingDeferred;
    const cleanup = async () => {
        if (processingKey !== undefined) {
            // If we are already processing an item, we can safely exit
            return;
        }
        const setupTimer = async (item) => {
            processingDeferred = pDefer();
            const delay = item[1][property] - Date.now();
            if (delay <= 0) {
                // Remove the item immediately if the delay is equal to or below 0
                map.delete(item[0]);
                processingDeferred.resolve();
                return;
            }
            // Keep track of the current processed key
            processingKey = item[0];
            processingTimer = setTimeout(() => {
                // Remove the item when the timeout fires
                map.delete(item[0]);
                if (processingDeferred) {
                    processingDeferred.resolve();
                }
            }, delay);
            // tslint:disable-next-line:strict-type-predicates
            if (typeof processingTimer.unref === 'function') {
                // Don't hold up the process from exiting
                processingTimer.unref();
            }
            return processingDeferred.promise;
        };
        try {
            for (const entry of map) {
                await setupTimer(entry);
            }
        }
        catch (_a) {
            // Do nothing if an error occurs, this means the timer was cleaned up and we should stop processing
        }
        processingKey = undefined;
    };
    const reset = () => {
        processingKey = undefined;
        if (processingTimer !== undefined) {
            clearTimeout(processingTimer);
            processingTimer = undefined;
        }
        if (processingDeferred !== undefined) { // tslint:disable-line:early-exit
            processingDeferred.reject(undefined);
            processingDeferred = undefined;
        }
    };
    const originalSet = map.set.bind(map);
    map.set = (key, value) => {
        if (map.has(key)) {
            // If the key already exist, remove it so we can add it back at the end of the map.
            map.delete(key);
        }
        // Call the original `map.set`
        const result = originalSet(key, value);
        // If we are already processing a key and the key added is the current processed key, stop processing it
        if (processingKey && processingKey === key) {
            reset();
        }
        // Always run the cleanup method in case it wasn't started yet
        cleanup(); // tslint:disable-line:no-floating-promises
        return result;
    };
    cleanup(); // tslint:disable-line:no-floating-promises
    return map;
}
module.exports = mapAgeCleaner;


/***/ }),

/***/ "./node_modules/p-defer/index.js":
/*!***************************************!*\
  !*** ./node_modules/p-defer/index.js ***!
  \***************************************/
/***/ ((module) => {


module.exports = () => {
	const ret = {};

	ret.promise = new Promise((resolve, reject) => {
		ret.resolve = resolve;
		ret.reject = reject;
	});

	return ret;
};


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./node_modules/eventsource-parser/dist/index.mjs":
/*!********************************************************!*\
  !*** ./node_modules/eventsource-parser/dist/index.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParser: () => (/* binding */ createParser)
/* harmony export */ });
function createParser(onParse) {
  let isFirstChunk;
  let buffer;
  let startingPosition;
  let startingFieldLength;
  let eventId;
  let eventName;
  let data;
  reset();
  return {
    feed,
    reset
  };

  function reset() {
    isFirstChunk = true;
    buffer = "";
    startingPosition = 0;
    startingFieldLength = -1;
    eventId = void 0;
    eventName = void 0;
    data = "";
  }

  function feed(chunk) {
    buffer = buffer ? buffer + chunk : chunk;

    if (isFirstChunk && hasBom(buffer)) {
      buffer = buffer.slice(BOM.length);
    }

    isFirstChunk = false;
    const length = buffer.length;
    let position = 0;
    let discardTrailingNewline = false;

    while (position < length) {
      if (discardTrailingNewline) {
        if (buffer[position] === "\n") {
          ++position;
        }

        discardTrailingNewline = false;
      }

      let lineLength = -1;
      let fieldLength = startingFieldLength;
      let character;

      for (let index = startingPosition; lineLength < 0 && index < length; ++index) {
        character = buffer[index];

        if (character === ":" && fieldLength < 0) {
          fieldLength = index - position;
        } else if (character === "\r") {
          discardTrailingNewline = true;
          lineLength = index - position;
        } else if (character === "\n") {
          lineLength = index - position;
        }
      }

      if (lineLength < 0) {
        startingPosition = length - position;
        startingFieldLength = fieldLength;
        break;
      } else {
        startingPosition = 0;
        startingFieldLength = -1;
      }

      parseEventStreamLine(buffer, position, fieldLength, lineLength);
      position += lineLength + 1;
    }

    if (position === length) {
      buffer = "";
    } else if (position > 0) {
      buffer = buffer.slice(position);
    }
  }

  function parseEventStreamLine(lineBuffer, index, fieldLength, lineLength) {
    if (lineLength === 0) {
      if (data.length > 0) {
        onParse({
          type: "event",
          id: eventId,
          event: eventName || void 0,
          data: data.slice(0, -1)
        });
        data = "";
        eventId = void 0;
      }

      eventName = void 0;
      return;
    }

    const noValue = fieldLength < 0;
    const field = lineBuffer.slice(index, index + (noValue ? lineLength : fieldLength));
    let step = 0;

    if (noValue) {
      step = lineLength;
    } else if (lineBuffer[index + fieldLength + 1] === " ") {
      step = fieldLength + 2;
    } else {
      step = fieldLength + 1;
    }

    const position = index + step;
    const valueLength = lineLength - step;
    const value = lineBuffer.slice(position, position + valueLength).toString();

    if (field === "data") {
      data += value ? "".concat(value, "\n") : "\n";
    } else if (field === "event") {
      eventName = value;
    } else if (field === "id" && !value.includes("\0")) {
      eventId = value;
    } else if (field === "retry") {
      const retry = parseInt(value, 10);

      if (!Number.isNaN(retry)) {
        onParse({
          type: "reconnect-interval",
          value: retry
        });
      }
    }
  }
}

const BOM = [239, 187, 191];

function hasBom(buffer) {
  return BOM.every((charCode, index) => buffer.charCodeAt(index) === charCode);
}


//# sourceMappingURL=index.mjs.map


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************************!*\
  !*** ./lib/src/background/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var expiry_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! expiry-map */ "./node_modules/expiry-map/dist/index.js");
/* harmony import */ var expiry_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(expiry_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _fetch_sse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-sse.js */ "./lib/src/background/fetch-sse.js");



let ua = navigator.userAgent;
let browserName = ua.indexOf("Chrome") > -1 ? "Chrome" : "Firefox";
let CORE = browserName === "Chrome" ? chrome : browser;
const KEY_ACCESS_TOKEN = "accessToken";
let prompt = "";
let apiKey = "";
CORE.storage.sync.get(["prompt", "apiKey"], function (items) {
  if (items && items.prompt) {
    prompt = items.prompt;
  } else {
    // Choose default (en) prompt
    prompt = "You are acting as a summarization AI, and for the input text please summarize it to the most important 3 to 5 bullet points for brevity: ";
  }
  if (items && items.apiKey) {
    apiKey = items.apiKey;
  }
});
const cache = new (expiry_map__WEBPACK_IMPORTED_MODULE_1___default())(10 * 1000);
async function gettingAccessToken() {
  if (cache.get(KEY_ACCESS_TOKEN)) {
    return cache.get(KEY_ACCESS_TOKEN);
  }
  const resp = await fetch("https://chat.openai.com/api/auth/session").then(r => r.json()).catch(() => ({}));
  if (!resp.accessToken) {
    throw new Error("UNAUTHORIZED");
  }
  cache.set(KEY_ACCESS_TOKEN, resp.accessToken);
  return resp.accessToken;
}
async function getSummary(question, callback) {
  const accToken = await gettingAccessToken();
  const msgJSON = {
    action: "next",
    messages: [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      author: {
        role: "user"
      },
      role: "user",
      content: {
        content_type: "text",
        parts: [question]
      }
    }],
    model: "text-davinci-002-render",
    parent_message_id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])()
  };
  await (0,_fetch_sse_js__WEBPACK_IMPORTED_MODULE_0__.fetchingSSE)("https://chat.openai.com/backend-api/conversation", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accToken}`
    },
    body: JSON.stringify(msgJSON),
    onMessage(message) {
      if (message === "[DONE]") {
        return;
      }
      try {
        const data = JSON.parse(message);
        const text = data.message?.content?.parts?.[0];
        if (text) {
          callback(text);
        }
      } catch (err) {
        console.log("sse message", message);
        console.log(`Error in onMessage: ${err}`);
      }
    },
    onError(err) {
      console.log(`Error in fetchingSSE: ${err}`);
    }
  });
}
let preventIns = {};
function executeScp(tab) {
  const tabId = tab.id;
  // return if we've already created the summary for this website
  if (preventIns[tabId]) return;
  preventIns[tabId] = true;
  setTimeout(() => delete preventIns[tabId], 10000);

  // Add a badge to signify the extension is in use
  CORE.action.setBadgeBackgroundColor({
    color: [242, 38, 19, 230]
  });
  CORE.action.setBadgeText({
    text: "GPT"
  });
  CORE.scripting.executeScript({
    target: {
      tabId
    },
    files: ["content.bundle.js"]
  });
  setTimeout(function () {
    CORE.action.setBadgeText({
      text: ""
    });
  }, 1000);
}

// Load on clicking the extension icon
CORE.action.onClicked.addListener(async (...args) => {
  let tab = args[0];
  // Add request permission for "https://*.openai.com/"
  // Without this request permission, User should enable optional permission for "https://*.openai.com/"
  if (browserName === "Firefox") {
    CORE.permissions.request({
      origins: ["https://*.openai.com/"]
    });
  }
  executeScp(...args);
});

// Listen for messages
CORE.runtime.onConnect.addListener(port => {
  port.onMessage.addListener(async (request, sender, sendResponse) => {
    console.debug("received msg ", request.content);
    try {
      const maxLength = 3000;
      const text = request.content;
      console.debug('Text:', text);
      const chunks = splitTextIntoChunks(text, maxLength);
      let currentSummary = "";
      for (const chunk of chunks) {
        const gptQuestion = prompt + `\n\n${chunk}`;
        let currentAnswer = "";
        await getSummary(gptQuestion, answer => {
          currentAnswer = answer;
          port.postMessage({
            answer: combineSummaries([currentSummary, answer])
          });
        });
        // await deleteConversation(await getConversationId());
        currentSummary = combineSummaries([currentSummary, currentAnswer]) + "\n\n";
      }
    } catch (err) {
      console.error(err);
      port.postMessage({
        error: err.message
      });
      cache.delete(KEY_ACCESS_TOKEN);
    }
  });
});
function splitTextIntoChunks(text, maxLength) {
  const chunks = [];
  const words = text.split(/\s+/);
  let currentChunk = "";
  for (const word of words) {
    if (currentChunk.length + word.length + 1 <= maxLength) {
      currentChunk += (currentChunk ? " " : "") + word;
    } else {
      chunks.push(currentChunk);
      currentChunk = word;
    }
  }
  if (currentChunk) {
    chunks.push(currentChunk);
  }
  return chunks;
}
function combineSummaries(summaries) {
  let combinedSummary = "";
  for (const summary of summaries) {
    combinedSummary += (combinedSummary ? " " : "") + summary;
  }
  return combinedSummary;
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLE1BQU0sR0FBRyxDQUFDLElBQUlmLFNBQVMsRUFBRTtNQUN0RGEsWUFBWSxJQUFJLENBQUNBLFlBQVksR0FBRyxHQUFHLEdBQUcsRUFBRSxJQUFJQyxJQUFJO0lBQ2xELENBQUMsTUFBTTtNQUNMYixNQUFNLENBQUNlLElBQUksQ0FBQ0gsWUFBWSxDQUFDO01BQ3pCQSxZQUFZLEdBQUdDLElBQUk7SUFDckI7RUFDRjtFQUVBLElBQUlELFlBQVksRUFBRTtJQUNoQlosTUFBTSxDQUFDZSxJQUFJLENBQUNILFlBQVksQ0FBQztFQUMzQjtFQUVBLE9BQU9aLE1BQU07QUFDZjtBQUVBLFNBQVNPLGdCQUFnQkEsQ0FBQ1MsU0FBUyxFQUFFO0VBQ25DLElBQUlDLGVBQWUsR0FBRyxFQUFFO0VBQ3hCLEtBQUssTUFBTUMsT0FBTyxJQUFJRixTQUFTLEVBQUU7SUFDL0JDLGVBQWUsSUFBSSxDQUFDQSxlQUFlLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSUMsT0FBTztFQUMzRDtFQUVBLE9BQU9ELGVBQWU7QUFDeEIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9saWIvc3JjL2JhY2tncm91bmQvZmV0Y2gtc3NlLmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9saWIvc3JjL2JhY2tncm91bmQvc3RyZWFtLWFzeW5jLWl0ZXJhYmxlLmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvZXhwaXJ5LW1hcC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvbWFwLWFnZS1jbGVhbmVyL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy9wLWRlZmVyL2luZGV4LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL25hdGl2ZS5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9yZWdleC5qcyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci9ybmcuanMiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3Y0LmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3ZhbGlkYXRlLmpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9ub2RlX21vZHVsZXMvZXZlbnRzb3VyY2UtcGFyc2VyL2Rpc3QvaW5kZXgubWpzIiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdW1tYXJpemUtZ3B0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3VtbWFyaXplLWdwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N1bW1hcml6ZS1ncHQvLi9saWIvc3JjL2JhY2tncm91bmQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUGFyc2VyIH0gZnJvbSBcImV2ZW50c291cmNlLXBhcnNlclwiO1xuaW1wb3J0IHsgc3RyZWFtQXN5bmNJdGVyYWJsZSB9IGZyb20gXCIuL3N0cmVhbS1hc3luYy1pdGVyYWJsZS5qc1wiO1xuLy9jb3BpZWQgY29kZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9qZmxhbS9jaGF0LWdwdC1qdXB5dGVyLWV4dGVuc2lvbi9ibG9iL21haW4vc3JjL2JhY2tncm91bmQvZmV0Y2gtc3NlLm1qc1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoaW5nU1NFKHJlc291cmNlLCBvcHRpb25zKSB7XG4gIGNvbnN0IHsgb25NZXNzYWdlLCBvbkVycm9yLCAuLi5mZXRjaE9wdGlvbnMgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChyZXNvdXJjZSwgZmV0Y2hPcHRpb25zKS5jYXRjaCgoZXJyKSA9PiBvbkVycm9yKGVycikpO1xuICBjb25zdCBwYXJzZXIgPSBjcmVhdGVQYXJzZXIoKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwiZXZlbnRcIikge1xuICAgICAgb25NZXNzYWdlKGV2ZW50LmRhdGEpO1xuICAgIH1cbiAgfSk7XG4gIGZvciBhd2FpdCAoY29uc3QgY2h1bmsgb2Ygc3RyZWFtQXN5bmNJdGVyYWJsZShyZXNwLmJvZHkpKSB7XG4gICAgY29uc3Qgc3RyID0gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKGNodW5rKTtcbiAgICBwYXJzZXIuZmVlZChzdHIpO1xuICB9XG59XG4iLCJleHBvcnQgYXN5bmMgZnVuY3Rpb24qIHN0cmVhbUFzeW5jSXRlcmFibGUoc3RyZWFtKSB7XG4gIGNvbnN0IHJlYWRlciA9IHN0cmVhbS5nZXRSZWFkZXIoKTtcbiAgdHJ5IHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgIGlmIChkb25lKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHZhbHVlO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBtYXBBZ2VDbGVhbmVyID0gcmVxdWlyZShcIm1hcC1hZ2UtY2xlYW5lclwiKTtcbmNsYXNzIEV4cGlyeU1hcCB7XG4gICAgY29uc3RydWN0b3IobWF4QWdlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMubWF4QWdlID0gbWF4QWdlO1xuICAgICAgICB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ10gPSAnTWFwJztcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IE1hcCgpO1xuICAgICAgICAvLyBCb290c3RyYXAgdGhlIGNsZWFudXAgcHJvY2VzcyB3aGljaCBmcmVlcyB1cCBtZW1vcnkgd2hlbiBhbiBpdGVtIGV4cGlyZXNcbiAgICAgICAgbWFwQWdlQ2xlYW5lcih0aGlzLmRhdGEpO1xuICAgICAgICBpZiAoZGF0YSkgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOmVhcmx5LWV4aXRcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5zaXplO1xuICAgIH1cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5kYXRhLmNsZWFyKCk7XG4gICAgfVxuICAgIGRlbGV0ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmhhcyhrZXkpO1xuICAgIH1cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhLmdldChrZXkpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5kYXRhO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhLnNldChrZXksIHtcbiAgICAgICAgICAgIG1heEFnZTogRGF0ZS5ub3coKSArIHRoaXMubWF4QWdlLFxuICAgICAgICAgICAgZGF0YTogdmFsdWVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB2YWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUl0ZXJhdG9yKGl0ZW0gPT4gaXRlbVsxXS5kYXRhKTtcbiAgICB9XG4gICAga2V5cygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5rZXlzKCk7XG4gICAgfVxuICAgIGVudHJpZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUl0ZXJhdG9yKGl0ZW0gPT4gW2l0ZW1bMF0sIGl0ZW1bMV0uZGF0YV0pO1xuICAgIH1cbiAgICBmb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgdGhpcy5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrZm4uYXBwbHkodGhpc0FyZywgW3ZhbHVlLCBrZXksIHRoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBbU3ltYm9sLml0ZXJhdG9yXSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW50cmllcygpO1xuICAgIH1cbiAgICAqY3JlYXRlSXRlcmF0b3IocHJvamVjdGlvbikge1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5kYXRhLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgeWllbGQgcHJvamVjdGlvbihpdGVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gRXhwaXJ5TWFwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBwRGVmZXIgPSByZXF1aXJlKFwicC1kZWZlclwiKTtcbmZ1bmN0aW9uIG1hcEFnZUNsZWFuZXIobWFwLCBwcm9wZXJ0eSA9ICdtYXhBZ2UnKSB7XG4gICAgbGV0IHByb2Nlc3NpbmdLZXk7XG4gICAgbGV0IHByb2Nlc3NpbmdUaW1lcjtcbiAgICBsZXQgcHJvY2Vzc2luZ0RlZmVycmVkO1xuICAgIGNvbnN0IGNsZWFudXAgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzaW5nS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGFyZSBhbHJlYWR5IHByb2Nlc3NpbmcgYW4gaXRlbSwgd2UgY2FuIHNhZmVseSBleGl0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2V0dXBUaW1lciA9IGFzeW5jIChpdGVtKSA9PiB7XG4gICAgICAgICAgICBwcm9jZXNzaW5nRGVmZXJyZWQgPSBwRGVmZXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5ID0gaXRlbVsxXVtwcm9wZXJ0eV0gLSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKGRlbGF5IDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGl0ZW0gaW1tZWRpYXRlbHkgaWYgdGhlIGRlbGF5IGlzIGVxdWFsIHRvIG9yIGJlbG93IDBcbiAgICAgICAgICAgICAgICBtYXAuZGVsZXRlKGl0ZW1bMF0pO1xuICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gS2VlcCB0cmFjayBvZiB0aGUgY3VycmVudCBwcm9jZXNzZWQga2V5XG4gICAgICAgICAgICBwcm9jZXNzaW5nS2V5ID0gaXRlbVswXTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgaXRlbSB3aGVuIHRoZSB0aW1lb3V0IGZpcmVzXG4gICAgICAgICAgICAgICAgbWFwLmRlbGV0ZShpdGVtWzBdKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzc2luZ0RlZmVycmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NpbmdEZWZlcnJlZC5yZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvY2Vzc2luZ1RpbWVyLnVucmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgaG9sZCB1cCB0aGUgcHJvY2VzcyBmcm9tIGV4aXRpbmdcbiAgICAgICAgICAgICAgICBwcm9jZXNzaW5nVGltZXIudW5yZWYoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzaW5nRGVmZXJyZWQucHJvbWlzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgbWFwKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgc2V0dXBUaW1lcihlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAvLyBEbyBub3RoaW5nIGlmIGFuIGVycm9yIG9jY3VycywgdGhpcyBtZWFucyB0aGUgdGltZXIgd2FzIGNsZWFuZWQgdXAgYW5kIHdlIHNob3VsZCBzdG9wIHByb2Nlc3NpbmdcbiAgICAgICAgfVxuICAgICAgICBwcm9jZXNzaW5nS2V5ID0gdW5kZWZpbmVkO1xuICAgIH07XG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICAgIHByb2Nlc3NpbmdLZXkgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzaW5nVGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHByb2Nlc3NpbmdUaW1lcik7XG4gICAgICAgICAgICBwcm9jZXNzaW5nVGltZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3NpbmdEZWZlcnJlZCAhPT0gdW5kZWZpbmVkKSB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6ZWFybHktZXhpdFxuICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkLnJlamVjdCh1bmRlZmluZWQpO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ0RlZmVycmVkID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbFNldCA9IG1hcC5zZXQuYmluZChtYXApO1xuICAgIG1hcC5zZXQgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAobWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUga2V5IGFscmVhZHkgZXhpc3QsIHJlbW92ZSBpdCBzbyB3ZSBjYW4gYWRkIGl0IGJhY2sgYXQgdGhlIGVuZCBvZiB0aGUgbWFwLlxuICAgICAgICAgICAgbWFwLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsIGBtYXAuc2V0YFxuICAgICAgICBjb25zdCByZXN1bHQgPSBvcmlnaW5hbFNldChrZXksIHZhbHVlKTtcbiAgICAgICAgLy8gSWYgd2UgYXJlIGFscmVhZHkgcHJvY2Vzc2luZyBhIGtleSBhbmQgdGhlIGtleSBhZGRlZCBpcyB0aGUgY3VycmVudCBwcm9jZXNzZWQga2V5LCBzdG9wIHByb2Nlc3NpbmcgaXRcbiAgICAgICAgaWYgKHByb2Nlc3NpbmdLZXkgJiYgcHJvY2Vzc2luZ0tleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFsd2F5cyBydW4gdGhlIGNsZWFudXAgbWV0aG9kIGluIGNhc2UgaXQgd2Fzbid0IHN0YXJ0ZWQgeWV0XG4gICAgICAgIGNsZWFudXAoKTsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgY2xlYW51cCgpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWZsb2F0aW5nLXByb21pc2VzXG4gICAgcmV0dXJuIG1hcDtcbn1cbm1vZHVsZS5leHBvcnRzID0gbWFwQWdlQ2xlYW5lcjtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4ge1xuXHRjb25zdCByZXQgPSB7fTtcblxuXHRyZXQucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRyZXQucmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0cmV0LnJlamVjdCA9IHJlamVjdDtcblx0fSk7XG5cblx0cmV0dXJuIHJldDtcbn07XG4iLCJjb25zdCByYW5kb21VVUlEID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLnJhbmRvbVVVSUQgJiYgY3J5cHRvLnJhbmRvbVVVSUQuYmluZChjcnlwdG8pO1xuZXhwb3J0IGRlZmF1bHQge1xuICByYW5kb21VVUlEXG59OyIsImV4cG9ydCBkZWZhdWx0IC9eKD86WzAtOWEtZl17OH0tWzAtOWEtZl17NH0tWzEtNV1bMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn18MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwKSQvaTsiLCIvLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiBJbiB0aGUgYnJvd3NlciB3ZSB0aGVyZWZvcmVcbi8vIHJlcXVpcmUgdGhlIGNyeXB0byBBUEkgYW5kIGRvIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGZhbGxiYWNrIHRvIGxvd2VyIHF1YWxpdHkgcmFuZG9tIG51bWJlclxuLy8gZ2VuZXJhdG9ycyAobGlrZSBNYXRoLnJhbmRvbSgpKS5cbmxldCBnZXRSYW5kb21WYWx1ZXM7XG5jb25zdCBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLlxuICAgIGdldFJhbmRvbVZhbHVlcyA9IHR5cGVvZiBjcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG5cbiAgICBpZiAoIWdldFJhbmRvbVZhbHVlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufSIsImltcG9ydCB2YWxpZGF0ZSBmcm9tICcuL3ZhbGlkYXRlLmpzJztcbi8qKlxuICogQ29udmVydCBhcnJheSBvZiAxNiBieXRlIHZhbHVlcyB0byBVVUlEIHN0cmluZyBmb3JtYXQgb2YgdGhlIGZvcm06XG4gKiBYWFhYWFhYWC1YWFhYLVhYWFgtWFhYWC1YWFhYWFhYWFhYWFhcbiAqL1xuXG5jb25zdCBieXRlVG9IZXggPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7ICsraSkge1xuICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAvLyBOb3RlOiBCZSBjYXJlZnVsIGVkaXRpbmcgdGhpcyBjb2RlISAgSXQncyBiZWVuIHR1bmVkIGZvciBwZXJmb3JtYW5jZVxuICAvLyBhbmQgd29ya3MgaW4gd2F5cyB5b3UgbWF5IG5vdCBleHBlY3QuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQvcHVsbC80MzRcbiAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgbmF0aXZlIGZyb20gJy4vbmF0aXZlLmpzJztcbmltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBpZiAobmF0aXZlLnJhbmRvbVVVSUQgJiYgIWJ1ZiAmJiAhb3B0aW9ucykge1xuICAgIHJldHVybiBuYXRpdmUucmFuZG9tVVVJRCgpO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGNvbnN0IHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gdW5zYWZlU3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCJmdW5jdGlvbiBjcmVhdGVQYXJzZXIob25QYXJzZSkge1xuICBsZXQgaXNGaXJzdENodW5rO1xuICBsZXQgYnVmZmVyO1xuICBsZXQgc3RhcnRpbmdQb3NpdGlvbjtcbiAgbGV0IHN0YXJ0aW5nRmllbGRMZW5ndGg7XG4gIGxldCBldmVudElkO1xuICBsZXQgZXZlbnROYW1lO1xuICBsZXQgZGF0YTtcbiAgcmVzZXQoKTtcbiAgcmV0dXJuIHtcbiAgICBmZWVkLFxuICAgIHJlc2V0XG4gIH07XG5cbiAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgaXNGaXJzdENodW5rID0gdHJ1ZTtcbiAgICBidWZmZXIgPSBcIlwiO1xuICAgIHN0YXJ0aW5nUG9zaXRpb24gPSAwO1xuICAgIHN0YXJ0aW5nRmllbGRMZW5ndGggPSAtMTtcbiAgICBldmVudElkID0gdm9pZCAwO1xuICAgIGV2ZW50TmFtZSA9IHZvaWQgMDtcbiAgICBkYXRhID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZlZWQoY2h1bmspIHtcbiAgICBidWZmZXIgPSBidWZmZXIgPyBidWZmZXIgKyBjaHVuayA6IGNodW5rO1xuXG4gICAgaWYgKGlzRmlyc3RDaHVuayAmJiBoYXNCb20oYnVmZmVyKSkge1xuICAgICAgYnVmZmVyID0gYnVmZmVyLnNsaWNlKEJPTS5sZW5ndGgpO1xuICAgIH1cblxuICAgIGlzRmlyc3RDaHVuayA9IGZhbHNlO1xuICAgIGNvbnN0IGxlbmd0aCA9IGJ1ZmZlci5sZW5ndGg7XG4gICAgbGV0IHBvc2l0aW9uID0gMDtcbiAgICBsZXQgZGlzY2FyZFRyYWlsaW5nTmV3bGluZSA9IGZhbHNlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgbGVuZ3RoKSB7XG4gICAgICBpZiAoZGlzY2FyZFRyYWlsaW5nTmV3bGluZSkge1xuICAgICAgICBpZiAoYnVmZmVyW3Bvc2l0aW9uXSA9PT0gXCJcXG5cIikge1xuICAgICAgICAgICsrcG9zaXRpb247XG4gICAgICAgIH1cblxuICAgICAgICBkaXNjYXJkVHJhaWxpbmdOZXdsaW5lID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGxldCBsaW5lTGVuZ3RoID0gLTE7XG4gICAgICBsZXQgZmllbGRMZW5ndGggPSBzdGFydGluZ0ZpZWxkTGVuZ3RoO1xuICAgICAgbGV0IGNoYXJhY3RlcjtcblxuICAgICAgZm9yIChsZXQgaW5kZXggPSBzdGFydGluZ1Bvc2l0aW9uOyBsaW5lTGVuZ3RoIDwgMCAmJiBpbmRleCA8IGxlbmd0aDsgKytpbmRleCkge1xuICAgICAgICBjaGFyYWN0ZXIgPSBidWZmZXJbaW5kZXhdO1xuXG4gICAgICAgIGlmIChjaGFyYWN0ZXIgPT09IFwiOlwiICYmIGZpZWxkTGVuZ3RoIDwgMCkge1xuICAgICAgICAgIGZpZWxkTGVuZ3RoID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IFwiXFxyXCIpIHtcbiAgICAgICAgICBkaXNjYXJkVHJhaWxpbmdOZXdsaW5lID0gdHJ1ZTtcbiAgICAgICAgICBsaW5lTGVuZ3RoID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChjaGFyYWN0ZXIgPT09IFwiXFxuXCIpIHtcbiAgICAgICAgICBsaW5lTGVuZ3RoID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGluZUxlbmd0aCA8IDApIHtcbiAgICAgICAgc3RhcnRpbmdQb3NpdGlvbiA9IGxlbmd0aCAtIHBvc2l0aW9uO1xuICAgICAgICBzdGFydGluZ0ZpZWxkTGVuZ3RoID0gZmllbGRMZW5ndGg7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhcnRpbmdQb3NpdGlvbiA9IDA7XG4gICAgICAgIHN0YXJ0aW5nRmllbGRMZW5ndGggPSAtMTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VFdmVudFN0cmVhbUxpbmUoYnVmZmVyLCBwb3NpdGlvbiwgZmllbGRMZW5ndGgsIGxpbmVMZW5ndGgpO1xuICAgICAgcG9zaXRpb24gKz0gbGluZUxlbmd0aCArIDE7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uID09PSBsZW5ndGgpIHtcbiAgICAgIGJ1ZmZlciA9IFwiXCI7XG4gICAgfSBlbHNlIGlmIChwb3NpdGlvbiA+IDApIHtcbiAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zbGljZShwb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VFdmVudFN0cmVhbUxpbmUobGluZUJ1ZmZlciwgaW5kZXgsIGZpZWxkTGVuZ3RoLCBsaW5lTGVuZ3RoKSB7XG4gICAgaWYgKGxpbmVMZW5ndGggPT09IDApIHtcbiAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgb25QYXJzZSh7XG4gICAgICAgICAgdHlwZTogXCJldmVudFwiLFxuICAgICAgICAgIGlkOiBldmVudElkLFxuICAgICAgICAgIGV2ZW50OiBldmVudE5hbWUgfHwgdm9pZCAwLFxuICAgICAgICAgIGRhdGE6IGRhdGEuc2xpY2UoMCwgLTEpXG4gICAgICAgIH0pO1xuICAgICAgICBkYXRhID0gXCJcIjtcbiAgICAgICAgZXZlbnRJZCA9IHZvaWQgMDtcbiAgICAgIH1cblxuICAgICAgZXZlbnROYW1lID0gdm9pZCAwO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5vVmFsdWUgPSBmaWVsZExlbmd0aCA8IDA7XG4gICAgY29uc3QgZmllbGQgPSBsaW5lQnVmZmVyLnNsaWNlKGluZGV4LCBpbmRleCArIChub1ZhbHVlID8gbGluZUxlbmd0aCA6IGZpZWxkTGVuZ3RoKSk7XG4gICAgbGV0IHN0ZXAgPSAwO1xuXG4gICAgaWYgKG5vVmFsdWUpIHtcbiAgICAgIHN0ZXAgPSBsaW5lTGVuZ3RoO1xuICAgIH0gZWxzZSBpZiAobGluZUJ1ZmZlcltpbmRleCArIGZpZWxkTGVuZ3RoICsgMV0gPT09IFwiIFwiKSB7XG4gICAgICBzdGVwID0gZmllbGRMZW5ndGggKyAyO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGVwID0gZmllbGRMZW5ndGggKyAxO1xuICAgIH1cblxuICAgIGNvbnN0IHBvc2l0aW9uID0gaW5kZXggKyBzdGVwO1xuICAgIGNvbnN0IHZhbHVlTGVuZ3RoID0gbGluZUxlbmd0aCAtIHN0ZXA7XG4gICAgY29uc3QgdmFsdWUgPSBsaW5lQnVmZmVyLnNsaWNlKHBvc2l0aW9uLCBwb3NpdGlvbiArIHZhbHVlTGVuZ3RoKS50b1N0cmluZygpO1xuXG4gICAgaWYgKGZpZWxkID09PSBcImRhdGFcIikge1xuICAgICAgZGF0YSArPSB2YWx1ZSA/IFwiXCIuY29uY2F0KHZhbHVlLCBcIlxcblwiKSA6IFwiXFxuXCI7XG4gICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJldmVudFwiKSB7XG4gICAgICBldmVudE5hbWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKGZpZWxkID09PSBcImlkXCIgJiYgIXZhbHVlLmluY2x1ZGVzKFwiXFwwXCIpKSB7XG4gICAgICBldmVudElkID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gXCJyZXRyeVwiKSB7XG4gICAgICBjb25zdCByZXRyeSA9IHBhcnNlSW50KHZhbHVlLCAxMCk7XG5cbiAgICAgIGlmICghTnVtYmVyLmlzTmFOKHJldHJ5KSkge1xuICAgICAgICBvblBhcnNlKHtcbiAgICAgICAgICB0eXBlOiBcInJlY29ubmVjdC1pbnRlcnZhbFwiLFxuICAgICAgICAgIHZhbHVlOiByZXRyeVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY29uc3QgQk9NID0gWzIzOSwgMTg3LCAxOTFdO1xuXG5mdW5jdGlvbiBoYXNCb20oYnVmZmVyKSB7XG4gIHJldHVybiBCT00uZXZlcnkoKGNoYXJDb2RlLCBpbmRleCkgPT4gYnVmZmVyLmNoYXJDb2RlQXQoaW5kZXgpID09PSBjaGFyQ29kZSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZVBhcnNlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBFeHBpcnlNYXAgZnJvbSBcImV4cGlyeS1tYXBcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5pbXBvcnQgeyBmZXRjaGluZ1NTRSB9IGZyb20gXCIuL2ZldGNoLXNzZS5qc1wiO1xuXG5sZXQgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xubGV0IGJyb3dzZXJOYW1lID0gdWEuaW5kZXhPZihcIkNocm9tZVwiKSA+IC0xID8gXCJDaHJvbWVcIiA6IFwiRmlyZWZveFwiO1xubGV0IENPUkUgPSBicm93c2VyTmFtZSA9PT0gXCJDaHJvbWVcIiA/IGNocm9tZSA6IGJyb3dzZXI7XG5cbmNvbnN0IEtFWV9BQ0NFU1NfVE9LRU4gPSBcImFjY2Vzc1Rva2VuXCI7XG5cbmxldCBwcm9tcHQgPSBcIlwiO1xubGV0IGFwaUtleSA9IFwiXCI7XG5DT1JFLnN0b3JhZ2Uuc3luYy5nZXQoW1wicHJvbXB0XCIsIFwiYXBpS2V5XCJdLCBmdW5jdGlvbiAoaXRlbXMpIHtcbiAgaWYgKGl0ZW1zICYmIGl0ZW1zLnByb21wdCkge1xuICAgIHByb21wdCA9IGl0ZW1zLnByb21wdDtcbiAgfSBlbHNlIHtcbiAgICAvLyBDaG9vc2UgZGVmYXVsdCAoZW4pIHByb21wdFxuICAgIHByb21wdCA9IFwiWW91IGFyZSBhY3RpbmcgYXMgYSBzdW1tYXJpemF0aW9uIEFJLCBhbmQgZm9yIHRoZSBpbnB1dCB0ZXh0IHBsZWFzZSBzdW1tYXJpemUgaXQgdG8gdGhlIG1vc3QgaW1wb3J0YW50IDMgdG8gNSBidWxsZXQgcG9pbnRzIGZvciBicmV2aXR5OiBcIlxuICB9XG4gIGlmIChpdGVtcyAmJiBpdGVtcy5hcGlLZXkpIHtcbiAgICBhcGlLZXkgPSBpdGVtcy5hcGlLZXk7XG4gIH1cbn0pO1xuXG5jb25zdCBjYWNoZSA9IG5ldyBFeHBpcnlNYXAoMTAgKiAxMDAwKTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0dGluZ0FjY2Vzc1Rva2VuKCkge1xuICBpZiAoY2FjaGUuZ2V0KEtFWV9BQ0NFU1NfVE9LRU4pKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChLRVlfQUNDRVNTX1RPS0VOKTtcbiAgfVxuICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2NoYXQub3BlbmFpLmNvbS9hcGkvYXV0aC9zZXNzaW9uXCIpXG4gICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxuICAgIC5jYXRjaCgoKSA9PiAoe30pKTtcbiAgaWYgKCFyZXNwLmFjY2Vzc1Rva2VuKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVU5BVVRIT1JJWkVEXCIpO1xuICB9XG4gIGNhY2hlLnNldChLRVlfQUNDRVNTX1RPS0VOLCByZXNwLmFjY2Vzc1Rva2VuKTtcbiAgcmV0dXJuIHJlc3AuYWNjZXNzVG9rZW47XG59XG5cblxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdW1tYXJ5KHF1ZXN0aW9uLCBjYWxsYmFjaykge1xuICBjb25zdCBhY2NUb2tlbiA9IGF3YWl0IGdldHRpbmdBY2Nlc3NUb2tlbigpO1xuICBjb25zdCBtc2dKU09OID0ge1xuICAgIGFjdGlvbjogXCJuZXh0XCIsXG4gICAgbWVzc2FnZXM6IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICBjb250ZW50X3R5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBhcnRzOiBbcXVlc3Rpb25dLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICBdLFxuICAgIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDItcmVuZGVyXCIsXG4gICAgcGFyZW50X21lc3NhZ2VfaWQ6IHV1aWR2NCgpLFxuICB9O1xuICBhd2FpdCBmZXRjaGluZ1NTRShcImh0dHBzOi8vY2hhdC5vcGVuYWkuY29tL2JhY2tlbmQtYXBpL2NvbnZlcnNhdGlvblwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2NUb2tlbn1gLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkobXNnSlNPTiksXG4gICAgb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgIGlmIChtZXNzYWdlID09PSBcIltET05FXVwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCB0ZXh0ID0gZGF0YS5tZXNzYWdlPy5jb250ZW50Py5wYXJ0cz8uWzBdO1xuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgIGNhbGxiYWNrKHRleHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzc2UgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIG9uTWVzc2FnZTogJHtlcnJ9YCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkVycm9yKGVycikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIGluIGZldGNoaW5nU1NFOiAke2Vycn1gKTtcbiAgICB9LFxuICB9KTtcbn1cblxubGV0IHByZXZlbnRJbnMgPSB7fTtcbmZ1bmN0aW9uIGV4ZWN1dGVTY3AodGFiKSB7XG4gIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuICAvLyByZXR1cm4gaWYgd2UndmUgYWxyZWFkeSBjcmVhdGVkIHRoZSBzdW1tYXJ5IGZvciB0aGlzIHdlYnNpdGVcbiAgaWYgKHByZXZlbnRJbnNbdGFiSWRdKSByZXR1cm47XG5cbiAgcHJldmVudEluc1t0YWJJZF0gPSB0cnVlO1xuICBzZXRUaW1lb3V0KCgpID0+IGRlbGV0ZSBwcmV2ZW50SW5zW3RhYklkXSwgMTAwMDApO1xuXG4gIC8vIEFkZCBhIGJhZGdlIHRvIHNpZ25pZnkgdGhlIGV4dGVuc2lvbiBpcyBpbiB1c2VcbiAgQ09SRS5hY3Rpb24uc2V0QmFkZ2VCYWNrZ3JvdW5kQ29sb3IoeyBjb2xvcjogWzI0MiwgMzgsIDE5LCAyMzBdIH0pO1xuICBDT1JFLmFjdGlvbi5zZXRCYWRnZVRleHQoeyB0ZXh0OiBcIkdQVFwiIH0pO1xuXG4gIENPUkUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgIGZpbGVzOiBbXCJjb250ZW50LmJ1bmRsZS5qc1wiXSxcbiAgfSk7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgQ09SRS5hY3Rpb24uc2V0QmFkZ2VUZXh0KHsgdGV4dDogXCJcIiB9KTtcbiAgfSwgMTAwMCk7XG59XG5cbi8vIExvYWQgb24gY2xpY2tpbmcgdGhlIGV4dGVuc2lvbiBpY29uXG5DT1JFLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMgKC4uLmFyZ3MpID0+IHtcbiAgbGV0IHRhYiA9IGFyZ3NbMF07XG4gIC8vIEFkZCByZXF1ZXN0IHBlcm1pc3Npb24gZm9yIFwiaHR0cHM6Ly8qLm9wZW5haS5jb20vXCJcbiAgLy8gV2l0aG91dCB0aGlzIHJlcXVlc3QgcGVybWlzc2lvbiwgVXNlciBzaG91bGQgZW5hYmxlIG9wdGlvbmFsIHBlcm1pc3Npb24gZm9yIFwiaHR0cHM6Ly8qLm9wZW5haS5jb20vXCJcbiAgaWYoYnJvd3Nlck5hbWUgPT09IFwiRmlyZWZveFwiKSB7XG4gICAgQ09SRS5wZXJtaXNzaW9ucy5yZXF1ZXN0KHtcbiAgICAgIG9yaWdpbnM6IFtcImh0dHBzOi8vKi5vcGVuYWkuY29tL1wiXSxcbiAgICB9KTtcbiAgfVxuIGV4ZWN1dGVTY3AoLi4uYXJncyk7XG59KTtcblxuLy8gTGlzdGVuIGZvciBtZXNzYWdlc1xuQ09SRS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmRlYnVnKFwicmVjZWl2ZWQgbXNnIFwiLCByZXF1ZXN0LmNvbnRlbnQpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYXhMZW5ndGggPSAzMDAwO1xuICAgICAgY29uc3QgdGV4dCA9IHJlcXVlc3QuY29udGVudDtcbiAgICAgIGNvbnNvbGUuZGVidWcoJ1RleHQ6JywgdGV4dClcbiAgICAgIGNvbnN0IGNodW5rcyA9IHNwbGl0VGV4dEludG9DaHVua3ModGV4dCwgbWF4TGVuZ3RoKTtcblxuICAgICAgbGV0IGN1cnJlbnRTdW1tYXJ5ID0gXCJcIjtcbiAgICAgIGZvciAoY29uc3QgY2h1bmsgb2YgY2h1bmtzKSB7XG4gICAgICAgIGNvbnN0IGdwdFF1ZXN0aW9uID0gcHJvbXB0ICsgYFxcblxcbiR7Y2h1bmt9YDtcbiAgICAgICAgbGV0IGN1cnJlbnRBbnN3ZXIgPSBcIlwiO1xuICAgICAgICBhd2FpdCBnZXRTdW1tYXJ5KGdwdFF1ZXN0aW9uLCAoYW5zd2VyKSA9PiB7XG4gICAgICAgICAgY3VycmVudEFuc3dlciA9IGFuc3dlcjtcbiAgICAgICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIGFuc3dlcjogY29tYmluZVN1bW1hcmllcyhbY3VycmVudFN1bW1hcnksIGFuc3dlcl0pLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAvLyBhd2FpdCBkZWxldGVDb252ZXJzYXRpb24oYXdhaXQgZ2V0Q29udmVyc2F0aW9uSWQoKSk7XG4gICAgICAgIGN1cnJlbnRTdW1tYXJ5ID1cbiAgICAgICAgICBjb21iaW5lU3VtbWFyaWVzKFtjdXJyZW50U3VtbWFyeSwgY3VycmVudEFuc3dlcl0pICsgXCJcXG5cXG5cIjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2UoeyBlcnJvcjogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICBjYWNoZS5kZWxldGUoS0VZX0FDQ0VTU19UT0tFTik7XG4gICAgfVxuICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBzcGxpdFRleHRJbnRvQ2h1bmtzKHRleHQsIG1heExlbmd0aCkge1xuICBjb25zdCBjaHVua3MgPSBbXTtcbiAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KC9cXHMrLyk7XG4gIGxldCBjdXJyZW50Q2h1bmsgPSBcIlwiO1xuXG4gIGZvciAoY29uc3Qgd29yZCBvZiB3b3Jkcykge1xuICAgIGlmIChjdXJyZW50Q2h1bmsubGVuZ3RoICsgd29yZC5sZW5ndGggKyAxIDw9IG1heExlbmd0aCkge1xuICAgICAgY3VycmVudENodW5rICs9IChjdXJyZW50Q2h1bmsgPyBcIiBcIiA6IFwiXCIpICsgd29yZDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2h1bmtzLnB1c2goY3VycmVudENodW5rKTtcbiAgICAgIGN1cnJlbnRDaHVuayA9IHdvcmQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGN1cnJlbnRDaHVuaykge1xuICAgIGNodW5rcy5wdXNoKGN1cnJlbnRDaHVuayk7XG4gIH1cblxuICByZXR1cm4gY2h1bmtzO1xufVxuXG5mdW5jdGlvbiBjb21iaW5lU3VtbWFyaWVzKHN1bW1hcmllcykge1xuICBsZXQgY29tYmluZWRTdW1tYXJ5ID0gXCJcIjtcbiAgZm9yIChjb25zdCBzdW1tYXJ5IG9mIHN1bW1hcmllcykge1xuICAgIGNvbWJpbmVkU3VtbWFyeSArPSAoY29tYmluZWRTdW1tYXJ5ID8gXCIgXCIgOiBcIlwiKSArIHN1bW1hcnk7XG4gIH1cblxuICByZXR1cm4gY29tYmluZWRTdW1tYXJ5O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVBhcnNlciIsInN0cmVhbUFzeW5jSXRlcmFibGUiLCJmZXRjaGluZ1NTRSIsInJlc291cmNlIiwib3B0aW9ucyIsIm9uTWVzc2FnZSIsIm9uRXJyb3IiLCJmZXRjaE9wdGlvbnMiLCJyZXNwIiwiZmV0Y2giLCJjYXRjaCIsImVyciIsInBhcnNlciIsImV2ZW50IiwidHlwZSIsImRhdGEiLCJjaHVuayIsImJvZHkiLCJzdHIiLCJUZXh0RGVjb2RlciIsImRlY29kZSIsImZlZWQiLCJzdHJlYW0iLCJyZWFkZXIiLCJnZXRSZWFkZXIiLCJkb25lIiwidmFsdWUiLCJyZWFkIiwicmVsZWFzZUxvY2siLCJFeHBpcnlNYXAiLCJ2NCIsInV1aWR2NCIsInVhIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiYnJvd3Nlck5hbWUiLCJpbmRleE9mIiwiQ09SRSIsImNocm9tZSIsImJyb3dzZXIiLCJLRVlfQUNDRVNTX1RPS0VOIiwicHJvbXB0IiwiYXBpS2V5Iiwic3RvcmFnZSIsInN5bmMiLCJnZXQiLCJpdGVtcyIsImNhY2hlIiwiZ2V0dGluZ0FjY2Vzc1Rva2VuIiwidGhlbiIsInIiLCJqc29uIiwiYWNjZXNzVG9rZW4iLCJFcnJvciIsInNldCIsImdldFN1bW1hcnkiLCJxdWVzdGlvbiIsImNhbGxiYWNrIiwiYWNjVG9rZW4iLCJtc2dKU09OIiwiYWN0aW9uIiwibWVzc2FnZXMiLCJpZCIsImF1dGhvciIsInJvbGUiLCJjb250ZW50IiwiY29udGVudF90eXBlIiwicGFydHMiLCJtb2RlbCIsInBhcmVudF9tZXNzYWdlX2lkIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJKU09OIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsInBhcnNlIiwidGV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50SW5zIiwiZXhlY3V0ZVNjcCIsInRhYiIsInRhYklkIiwic2V0VGltZW91dCIsInNldEJhZGdlQmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJzZXRCYWRnZVRleHQiLCJzY3JpcHRpbmciLCJleGVjdXRlU2NyaXB0IiwidGFyZ2V0IiwiZmlsZXMiLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJwZXJtaXNzaW9ucyIsInJlcXVlc3QiLCJvcmlnaW5zIiwicnVudGltZSIsIm9uQ29ubmVjdCIsInBvcnQiLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJkZWJ1ZyIsIm1heExlbmd0aCIsImNodW5rcyIsInNwbGl0VGV4dEludG9DaHVua3MiLCJjdXJyZW50U3VtbWFyeSIsImdwdFF1ZXN0aW9uIiwiY3VycmVudEFuc3dlciIsImFuc3dlciIsInBvc3RNZXNzYWdlIiwiY29tYmluZVN1bW1hcmllcyIsImVycm9yIiwiZGVsZXRlIiwid29yZHMiLCJzcGxpdCIsImN1cnJlbnRDaHVuayIsIndvcmQiLCJsZW5ndGgiLCJwdXNoIiwic3VtbWFyaWVzIiwiY29tYmluZWRTdW1tYXJ5Iiwic3VtbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=