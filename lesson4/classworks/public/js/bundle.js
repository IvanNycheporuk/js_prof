/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observers_demo_obs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observers/demo_obs */ \"./application/observers/demo_obs.js\");\n// import App from './task1';\r\n\r\n// let app = document.getElementById('App');\r\n\r\n// new App(app);\r\n\r\n//console.log(app);\r\n\r\n\r\n\r\nObject(_observers_demo_obs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/observers/Observer.js":
/*!*******************************************!*\
  !*** ./application/observers/Observer.js ***!
  \*******************************************/
/*! exports provided: Observable, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observable\", function() { return Observable; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Observer\", function() { return Observer; });\nfunction Observable(){\r\n  // Создаем список подписаных обьектов\r\n  const observers = [];\r\n  // Оповещение всех подписчиков о сообщении\r\n  this.sendMessage = function( msg ){\r\n      observers.map( ( obs ) => {\r\n        obs.notify(msg);\r\n      });\r\n  };\r\n  // Добавим наблюдателя\r\n  this.addObserver = function( observer ){\r\n    observers.push( observer );\r\n  };\r\n}\r\n\r\n// Сам наблюдатель:\r\nfunction Observer( behavior ){\r\n  // Делаем функцию, что бы через callback можно\r\n  // было использовать различные функции внутри\r\n  this.notify = function( msg ){\r\n    behavior( msg );\r\n  };\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./application/observers/Observer.js?");

/***/ }),

/***/ "./application/observers/demo_obs.js":
/*!*******************************************!*\
  !*** ./application/observers/demo_obs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ \"./application/observers/Observer.js\");\n\r\n\r\nconst Demo1 = () => {\r\n  console.log( 'DEMO 1 ONLINE');\r\n  let observable = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observable\"]();\r\n  \r\n  let obs1 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.log(msg));\r\n  let obs2 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.warn(msg));\r\n  let obs3 = new _Observer__WEBPACK_IMPORTED_MODULE_0__[\"Observer\"]( (msg) => console.error(msg));\r\n\r\n  observable.addObserver( obs1 );\r\n  observable.addObserver( obs2 );\r\n  observable.addObserver( obs3 );\r\n\r\n  // console.log( observable );\r\n  observable.sendMessage('hello');\r\n  //  Проверим абстрактно как оно работает:\r\n  setTimeout(\r\n    ()=>{\r\n      // оправим сообщение, с текущей датой:\r\n      observable.sendMessage('Now is' + new Date());\r\n    }, 2000\r\n  );\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Demo1);\r\n\n\n//# sourceURL=webpack:///./application/observers/demo_obs.js?");

/***/ })

/******/ });