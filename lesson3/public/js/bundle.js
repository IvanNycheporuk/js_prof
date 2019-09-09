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

/***/ "./application/classworks/objectfreeze.js":
/*!************************************************!*\
  !*** ./application/classworks/objectfreeze.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Задание: написать функцию, для глубокой заморозки обьектов.\n\n  Обьект для работы:\n  \n\n  frozenUniverse.evil.humans = []; -> Не должен отработать.\n\n  Методы для работы:\n  1. Object.getOwnPropertyNames(obj);\n      -> Получаем имена свойств из объекта obj в виде массива\n\n  2. Проверка через typeof на обьект или !== null\n  if (typeof prop == 'object' && prop !== null){...}\n\n  Тестирование:\n\n\n    // let FarGalaxy = DeepFreeze(universe);\n    //   FarGalaxy.good.push('javascript'); // false\n    //   FarGalaxy.something = 'Wow!'; // false\n    //   FarGalaxy.evil.humans = [];   // false\n\n\n*/\n\n\nconst work = (obj) => {\n\n  Object.freeze(obj);\n  let arrOfKeys = Object.getOwnPropertyNames(obj);\n  console.log(arrOfKeys);\n  arrOfKeys.forEach( item => {\n    if (typeof obj[item] == 'object' && obj[item] !== null) {      \n      work(obj[item]);\n    } else {\n      Object.freeze(obj[item]);\n    }\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);\n\n\n//# sourceURL=webpack:///./application/classworks/objectfreeze.js?");

/***/ }),

/***/ "./application/classworks/singleton.js":
/*!*********************************************!*\
  !*** ./application/classworks/singleton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n  Задание:\n\n    Написать синглтон, который будет создавать обьект government\n\n    Данные:\n    {\n        laws: [\n        {\n          id: 0,\n          text: '123123'\n        }\n      ],\n        budget: 1000000\n        citizensSatisfactions: 0,\n    }\n\n    У этого обьекта будут методы:\n      .добавитьЗакон({id, name, description})\n        -> добавляет закон в laws и понижает удовлетворенность граждан на -10\n\n      .читатькКонституцию -> Вывести все законы на экран\n      .читатьЗакон(ид)\n\n      .показатьУровеньДовольства()\n      .показатьБюджет()\n      .провестиПраздник -> отнимает от бюджета 50000, повышает удовлетворенность граждан на +5\n      \n*/\n\nclass Government {\n  constructor(budget) {\n    if (Government.instance === null) {\n      this.budget = 1000000;\n      this.citizensSatisfactions = 0;\n      this.laws = [];\n    }\n    \n    return Government.instance;\n  }\n\n  addLaw(obj) {\n    this.laws.push(obj);\n  }\n\n  readConstitution() {\n    this.laws.forEach( law => {\n      console.log(law);\n    })\n  }\n\n  readLaw(lawId) {\n    console.log(this.laws.filter( law => law.id === lawId));\n  }\n\n  showBudget() {\n    console.log(this.budget);\n  }\n\n  makeCelebration() {\n    this.budget -= 50000;\n    this.citizensSatisfactions += 5;\n  }\n}\n\nGovernment.instance = null;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Government);\n\n//# sourceURL=webpack:///./application/classworks/singleton.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classworks_objectfreeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classworks/objectfreeze */ \"./application/classworks/objectfreeze.js\");\n/* harmony import */ var _classworks_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classworks/singleton */ \"./application/classworks/singleton.js\");\n\r\n\r\n\r\n// #########################################\r\n// DeepFreeze\r\n\r\nlet universe = {\r\n    infinity: Infinity,\r\n    good: ['cats', 'love', 'rock-n-roll'],\r\n    evil: {\r\n      bonuses: ['cookies', 'great look'],\r\n      test: {\r\n          test1: 'asdasdasd',\r\n          test2: [1,2,3,4,5]\r\n      }\r\n    }\r\n  };\r\n\r\nObject(_classworks_objectfreeze__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(universe);\r\n\r\n//universe.evil.test.test2.push('asd');\r\n//universe.test = 'asdasd';\r\n\r\nconsole.log(universe);\r\n\r\n// #########################################\r\n// Singleton\r\n\r\nlet government = new _classworks_singleton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\ngovernment.addLaw({id: 1, text: 'increase taxes'});\r\n\r\ngovernment.readLaw(1);\r\n\r\ngovernment.readConstitution();\r\n\r\ngovernment.makeCelebration();\r\n\r\ngovernment.showBudget();\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ })

/******/ });