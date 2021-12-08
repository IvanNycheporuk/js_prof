/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task3_part2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task3/part2 */ \"./application/task3/part2.js\");\n// import Application from './BaseApp';\r\n\r\n// const NotifierApp = new Application(\r\n//     [\r\n//         {name: 'sms', image: 'images/sms.svg', type: 'kyivstar'},\r\n//         {name: 'sms', image: 'images/sms.svg', type: 'mts'},\r\n//         {name: 'mail', image: 'images/gmail.svg'},\r\n//         {name: 'telegram', image: 'images/telegram.svg'},\r\n//         {name: 'viber', image: 'images/viber.svg'},\r\n//         {name: 'slack', image: 'images/slack.svg'}\r\n//     ]\r\n//   );\r\n// NotifierApp.createInterface();\r\n\r\n\r\n\r\nlet test = new _task3_part2__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\ntest.addNumbers(1, 2);\r\nlet x = test.addNumbers(2, 2)\r\nlet y = test.multiplyNumbers(\"10\", \"2\")\r\nlet z = test.minusNumbers(10, 2)\r\nlet q = test.minusNumbers('qwe', 2)\r\nlet p = test.minusNumbers(2, 'qwe');\r\n\r\nconsole.log(x, y, z, q, p);\r\n\n\n//# sourceURL=webpack://lesson6/./application/index.js?");

/***/ }),

/***/ "./application/task3/part2.js":
/*!************************************!*\
  !*** ./application/task3/part2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 2. Написать декоратор для класса, который будет преобразовывать аргументы в число,\r\n// если они переданы строкой, и выводить ошибку если переданая переменная не\r\n// может быть преобразована в число\r\n\r\nclass Math {\r\n    addNumbers = (a, b) => a + b;\r\n    multiplyNumbers = (a, b) => a * b\r\n    minusNumbers = (a, b) => a - b\r\n}\r\n\r\nclass CoolMath extends Math {\r\n    addNumbers = (a, b) => { \r\n        if (!this.convertToInt(a, b)) {\r\n            console.warn('params are not convering to int!');\r\n            return;\r\n        }\r\n\r\n        return a + b; \r\n    }\r\n\r\n    multiplyNumbers = (a, b) => { \r\n        if (!this.convertToInt(a, b)) {\r\n            console.warn('params are not convering to int!');\r\n            return;\r\n        }\r\n\r\n        return a * b;\r\n    }\r\n\r\n    minusNumbers = (a, b) => { \r\n        if (!this.convertToInt(a, b)) {\r\n            console.warn('params are not convering to int!');\r\n            return;\r\n        }\r\n\r\n        return a - b;\r\n    }\r\n\r\n    convertToInt(a, b) {\r\n        if (isNaN(a) || isNaN(b)) {\r\n            return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CoolMath);\n\n//# sourceURL=webpack://lesson6/./application/task3/part2.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./application/index.js");
/******/ 	
/******/ })()
;