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

/***/ "./src/Post.js":
/*!*********************!*\
  !*** ./src/Post.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Post {\r\n    constructor(id, name, link, description, image) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.link = link;\r\n        this.description = description;\r\n        this.image = image;\r\n        this.likes = this.GetCurrentLikes();\r\n        this.comments = this.GetCurrentComments();\r\n\r\n        this.el;\r\n        this.isActiveLike = false;        \r\n    }\r\n\r\n    Render = () => {\r\n        let card = document.createElement('div');\r\n        card.className = 'card';       \r\n\r\n        card.innerHTML = `\r\n            <img src=\"${ this.image }\" class=\"card-img-top\" alt=\"...\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">${ this.name }</h5>\r\n                <p class=\"card-text\">${ this.description }</p>\r\n                <a href=\"#\" class=\"btn btn-primary _likeBtn\">Likes: <span class=\"_likes\">${ this.likes }</span></a>   \r\n                <form class=\"row g-3\">\r\n                    <div class=\"col-auto\">                        \r\n                        <input type=\"text\" class=\"form-control _commentInput\" placeholder=\"Comment\">\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                        <button type=\"submit\" class=\"btn btn-primary mb-3 _commentBtn\">Comment</button>\r\n                    </div>\r\n                </form>   \r\n                <div class=\"_commentWrap\">\r\n                    ${ \r\n                        this.comments.map( comment => `\r\n                            <div class=\"card\">                \r\n                                <div class=\"card-body\">                        \r\n                                    <p class=\"card-text\">${ comment }</p>                  \r\n                                </div>\r\n                            </div>\r\n                        `) \r\n                    }\r\n                </div>      \r\n            </div>\r\n        `;        \r\n\r\n        this.el = card;\r\n\r\n        this.ApplyEventListeners();\r\n\r\n        return this.el;\r\n    }\r\n\r\n    ApplyEventListeners = () => {\r\n        let likeBtn = this.el.querySelector('._likeBtn');\r\n        likeBtn.addEventListener('click', this.AddLike);\r\n\r\n        let commentBtn = this.el.querySelector('._commentBtn');\r\n        commentBtn.addEventListener('click', this.LeaveComment);\r\n    }\r\n\r\n    AddLike = (e) => {\r\n        e.preventDefault();\r\n        if(this.isActiveLike) {\r\n            return;\r\n        }\r\n        this.likes++;\r\n        \r\n        this.el.querySelector('._likes').innerHTML = this.likes;\r\n\r\n        this.isActiveLike = true;\r\n\r\n        this.UpdateLikesStorage();\r\n    }\r\n\r\n    UpdateLikesStorage = () => {\r\n        if (!localStorage.getItem('likes')) {\r\n            let likes = JSON.stringify([{ id: this.id, likes: this.likes }]);\r\n\r\n            localStorage.setItem('likes', likes);\r\n\r\n            return;\r\n        }\r\n\r\n        let likes = JSON.parse(localStorage.getItem('likes'));\r\n        let currentItem = likes.find(item => item.id === this.id);\r\n\r\n        if (currentItem) {\r\n            currentItem.likes++;            \r\n        } else {\r\n            likes.push({id: this.id, likes: this.likes})\r\n        }        \r\n\r\n        localStorage.setItem('likes', JSON.stringify(likes));\r\n    }\r\n\r\n    GetCurrentLikes = () => {\r\n        if (!localStorage.getItem('likes')) {\r\n            return 0;\r\n        }\r\n\r\n        let likedPost = this.GetLikedPost();\r\n\r\n        if (likedPost) {\r\n            return likedPost.likes;\r\n        }\r\n\r\n        return 0;\r\n    }\r\n\r\n    GetLikedPost = () => {\r\n        let likes = JSON.parse(localStorage.getItem('likes'));\r\n\r\n        return likes.find(l => l.id === this.id);\r\n    }\r\n\r\n    GetCommentedPost = () => {\r\n        let comments = JSON.parse(localStorage.getItem('comments'));\r\n\r\n        return comments.find(l => l.id === this.id);\r\n    }\r\n\r\n    GetCurrentComments = () => {\r\n        if (!localStorage.getItem('comments')) {\r\n            return [];\r\n        }\r\n\r\n        let commentedPost = this.GetCommentedPost();\r\n\r\n        if (commentedPost) {\r\n            return commentedPost.comments;\r\n        }\r\n\r\n        return [];\r\n    }\r\n\r\n    LeaveComment = (e) => {\r\n        e.preventDefault();\r\n\r\n        let text = this.el.querySelector('._commentInput').value;\r\n        if (!text) {\r\n            return;\r\n        }\r\n\r\n        let comment = document.createElement('div');\r\n        comment.innerHTML = `\r\n            <div class=\"card\">                \r\n                <div class=\"card-body\">                    \r\n                    <p class=\"card-text\">${ text }</p>                    \r\n                </div>\r\n            </div>\r\n        `;\r\n\r\n        this.el.querySelector('._commentWrap').appendChild(comment);\r\n\r\n        this.comments.push(text);\r\n\r\n        this.UpdateCommentsStorage();\r\n    }\r\n\r\n    UpdateCommentsStorage = () => {\r\n        if (!localStorage.getItem('comments')) {\r\n            let comments = JSON.stringify([{ id: this.id, comments: this.comments }]);\r\n\r\n            localStorage.setItem('comments', comments);\r\n\r\n            return;\r\n        }\r\n\r\n        let comments = JSON.parse(localStorage.getItem('comments'));\r\n        let currentItem = comments.find(item => item.id === this.id);\r\n\r\n        if (currentItem) {\r\n            currentItem.comments = this.comments;           \r\n        } else {\r\n            comments.push({ id: this.id, comments: this.comments })\r\n        }        \r\n\r\n        localStorage.setItem('comments', JSON.stringify(comments));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://lesson1/./src/Post.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"data\": () => (/* binding */ data)\n/* harmony export */ });\nconst data = [\r\n    {\r\n      id: 1,\r\n      link: \"#1\",\r\n      name: \"Established fact123123\",\r\n      description: \"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. \",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg\",\r\n    },\r\n    {\r\n      id: 2,\r\n      link: \"#1\",\r\n      name: \"Established fact\",\r\n      description: \"The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. \",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400926_file_162303.jpg\",\r\n    },\r\n    {\r\n      id: 3,\r\n      link: \"#2\",\r\n      name: \"Many packages\",\r\n      description: \"Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.\",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400859_file_162309.jpg\",\r\n    },\r\n    {\r\n      id: 4,\r\n      link: \"#3\",\r\n      name: \"Suffered alteration\",\r\n      description: \"Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.\",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400896_file_162315.jpg\",\r\n    },{\r\n      id: 5,\r\n      link: \"#4\",\r\n      name: \"Discovered source\",\r\n      description: \"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged\",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400878_file_162324.jpg\",\r\n    },{\r\n      id: 6,\r\n      link: \"#5\",\r\n      name: \"Handful model\",\r\n      description: \"The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\",\r\n      image: \"http://telegram.org.ru/uploads/posts/2017-10/1507400876_file_162328.jpg\",\r\n    },\r\n  ];\n\n//# sourceURL=webpack://lesson1/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./src/Post.js\");\n\r\n\r\n\r\nlet renderArea = document.getElementById('renderArea');\r\n\r\n_data__WEBPACK_IMPORTED_MODULE_0__.data.forEach(item => {\r\n    renderArea.appendChild(new _Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"](item.id, item.name, item.link, item.description, item.image).Render())    \r\n});\r\n\n\n//# sourceURL=webpack://lesson1/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;