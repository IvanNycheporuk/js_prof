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

/***/ "./application/Human.js":
/*!******************************!*\
  !*** ./application/Human.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Human)\n/* harmony export */ });\nclass Human {\r\n    constructor(name){\r\n      this.name = name;\r\n      this.currentTemperature = 0;\r\n      this.minTemperature = -10;\r\n\r\n      console.log(`new Human ${this.name} arrived!`, this);\r\n    }\r\n\r\n    changeTemperature(changeValue){\r\n      console.log(\r\n        'current', this.currentTemperature + changeValue,\r\n        'min', this.minTemperature\r\n      );\r\n\r\n      let prevTemperature = this.currentTemperature;\r\n      this.currentTemperature += changeValue;\r\n\r\n      if( this.currentTemperature < this.minTemperature ){\r\n        console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);\r\n      } else {\r\n        if( this.currentTemperature > prevTemperature  ) {\r\n          console.log(`Temperature is growing. Seems someone go to Odessa or drink some hot tea?`)\r\n        } else {\r\n          console.log(`It's cold outside (${this.currentTemperature} deg), please wear some clothes, or ${this.name} will die!`);\r\n        }\r\n      }\r\n    }\r\n  }\n\n//# sourceURL=webpack://lesson5/./application/Human.js?");

/***/ }),

/***/ "./application/NewHuman.js":
/*!*********************************!*\
  !*** ./application/NewHuman.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Human__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Human */ \"./application/Human.js\");\n\r\n\r\nclass NewHuman extends _Human__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name) {\r\n        super(name);\r\n\r\n        this.coolers = [\r\n            {name: 'icecream', temperatureCoolRate: -5},\r\n            {name: 'water', temperatureCoolRate: -10},\r\n            {name: 'icetea', temperatureCoolRate: -15},\r\n            {name: 'cooler', temperatureCoolRate: -25}\r\n        ]\r\n    }\r\n\r\n    changeTemperature(changeValue){\r\n        console.log(\r\n          'current', this.currentTemperature + changeValue,\r\n          'min', this.minTemperature\r\n        );\r\n  \r\n        //let prevTemperature = this.currentTemperature;\r\n        this.currentTemperature += changeValue;\r\n\r\n        if ( this.currentTemperature < 0 ){\r\n            console.error(`Temperature is to low: ${this.currentTemperature}. ${this.name} died :(`);\r\n            return;\r\n        }  \r\n\r\n        if ( this.currentTemperature > 50 ) {\r\n            console.error(`${this.name} зажарился на солнце :(`)\r\n            return;\r\n        } \r\n\r\n        if (this.currentTemperature > 30) {\r\n            let overTemp = 30 - this.currentTemperature;\r\n            let cooler = this.coolers.find(c => c.temperatureCoolRate > overTemp);\r\n\r\n            this.currentTemperature += cooler.temperatureCoolRate;\r\n\r\n            console.log(`Temperature is: ${this.currentTemperature}. ${this.name} was freshed with ${cooler.name}`);\r\n            return;\r\n        }\r\n        \r\n        console.log(`temp was changed on ${changeValue}, but ${this.name} is ok :)`);        \r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewHuman);\n\n//# sourceURL=webpack://lesson5/./application/NewHuman.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NewHuman__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewHuman */ \"./application/NewHuman.js\");\n\r\n\r\nlet newbie = new _NewHuman__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('test');\r\n\r\nnewbie.changeTemperature(-50);\r\n\r\nnewbie.changeTemperature(60);\n\n//# sourceURL=webpack://lesson5/./application/index.js?");

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