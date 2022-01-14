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

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/header.js */ \"./public/page/header.js\");\n/* harmony import */ var _page_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page/home.js */ \"./public/page/home.js\");\n/* harmony import */ var _page_login_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/login.js */ \"./public/page/login.js\");\n/* harmony import */ var _page_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/join.js */ \"./public/page/join.js\");\n/* harmony import */ var _page_write_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/write.js */ \"./public/page/write.js\");\n\r\n\r\n\r\n\r\n\r\n// import test from \"../router/router.js\";\r\n// const Header = require(\"./page/header.js\");\r\n// const Homepage = require(\"./page/home.js\");\r\n// const Loginpage = require(\"./page/login.js\");\r\n// const Joinpage = require(\"./page/join.js\");\r\n// const Writepage = require(\"./page/write.js\");\r\n\r\n// function temp(){\r\n//     const ul = document.querySelector('textul');\r\n//     let li = document.createElement('li');\r\n//     let when = document.createElement('p');\r\n//     let what = document.createElement('div');\r\n//     let who = document.createElement('p');\r\n\r\n//     test(when,what,who);\r\n//     // when.innerText = date;\r\n//     // what.innerText = text;\r\n//     // who.innerText = author;\r\n//     li.appendChild(when);\r\n//     li.appendChild(what);\r\n//     li.appendChild(who);\r\n//     ul.appendChild(li);\r\n// }\r\n\r\n\r\nfunction showMenu(){\r\n    const sidemenu = document.querySelector('.subMenu');\r\n    sidemenu.classList.toggle('showing');\r\n}\r\n\r\nfunction Login(){\r\n    history.pushState({page : 'login page'}, '', '/login');\r\n\r\n    const main = document.querySelector('.main');\r\n    (0,_page_login_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(main);\r\n\r\n    document.querySelector('.join').addEventListener(\"click\",Join);\r\n}\r\n\r\nfunction prev(){\r\n    window.history.back();\r\n}\r\n\r\nfunction Join(){\r\n    history.pushState({page : 'join page'}, '', '/join');\r\n\r\n    const main = document.querySelector('.main');\r\n    (0,_page_join_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(main);\r\n\r\n    document.querySelector('.exit').addEventListener(\"click\",prev);\r\n}\r\n\r\nfunction Home(){\r\n    history.replaceState(location.origin,'',location.origin)\r\n\r\n    const main = document.querySelector('.main');\r\n    // let text = \"\";\r\n    // test(text);\r\n    (0,_page_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(main,\"date\",\"text\",\"author\");\r\n\r\n    document.querySelector('.assign').addEventListener(\"click\",Assign);\r\n}\r\n\r\nfunction Assign(){\r\n    history.pushState({page : 'write page'}, '', '/assignment');\r\n\r\n    const main = document.querySelector('.main');\r\n\r\n    (0,_page_write_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(main);\r\n}\r\n\r\nfunction reload(){\r\n    switch (location.pathname) {\r\n        case '/': Home(); break\r\n        case '/login': Login(); break;\r\n        case '/assignment' : Assign(); break;\r\n        case '/join':\r\n            Login();\r\n            Join();\r\n            break;\r\n\r\n        default:\r\n            break;\r\n    }\r\n\r\n}\r\nasync function route(){\r\n    const root = document.querySelector('#root');\r\n    (0,_page_header_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\r\n\r\n    const menu = document.querySelector('.menu');\r\n    menu.innerText = '≡';\r\n    menu.addEventListener(\"click\", showMenu);\r\n\r\n    reload();\r\n\r\n    document.querySelector('.login').addEventListener(\"click\", Login);\r\n    document.querySelector('.home').addEventListener(\"click\", Home);\r\n}\r\n\r\nfunction init(){\r\n    window.addEventListener('popstate',route);\r\n\r\n    window.onload = () => {\r\n     awiat.route();\r\n    }\r\n    // const root = document.querySelector('#root');\r\n    // Header(root);\r\n\r\n    // const menu = document.querySelector('.menu');\r\n    // menu.innerText = '≡';\r\n    // menu.addEventListener(\"click\", showMenu);\r\n\r\n    // document.querySelector('.login').addEventListener(\"click\", Login);\r\n    // document.querySelector('.home').addEventListener(\"click\", Home);\r\n}\r\n\r\ninit();\n\n//# sourceURL=webpack://p1/./public/index.js?");

/***/ }),

/***/ "./public/page/header.js":
/*!*******************************!*\
  !*** ./public/page/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\nfunction Header(root) {\r\n    // const board = [\"자유 게시판\",\"비밀 게시판\",\"정보 게시판\",\"홍보 게시판\",\"sw 게시판\"];\r\n\r\n    root.innerHTML  =\r\n        `<header>\r\n            <div class=\"head\">\r\n                <button type=\"button\" class=\"menu\"></button>\r\n                <h2 class=\"home\">AJOU Memo</h2>\r\n                <h2 class=\"login\">Log in</h2>\r\n            </div>\r\n        </header>\r\n\r\n        <section class=\"subMenu showing\">\r\n            <div>\r\n                <ul>\r\n                    <li class=\"free\">자유 게시판</li>\r\n                    <li class=\"secret\">비밀 게시판</li>\r\n                    <li class=\"info\">정보 게시판</li>\r\n                    <li class=\"prom\">홍보 게시판</li>\r\n                    <li class=\"sw\">sw 게시판</li>\r\n                </ul>\r\n            </div>\r\n        </section>\r\n\r\n        <div class=\"main\"></div>\r\n        `;\r\n}\n\n//# sourceURL=webpack://p1/./public/page/header.js?");

/***/ }),

/***/ "./public/page/home.js":
/*!*****************************!*\
  !*** ./public/page/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Homepage)\n/* harmony export */ });\nfunction Homepage(board,title,list) {\r\n    let context = `\r\n    <section class=\"board\">\r\n        <div class=\"top\">\r\n            <div>${title}</div>\r\n            <div class=\"assign\">등록하기</div>\r\n        </div>\r\n\r\n        <div class=\"boardlist\">${list}</div>\r\n    </section>\r\n\r\n    <footer class=\"pageindex\">\r\n        <ul>\r\n            <li><a href=\"#a\">1</a></li>\r\n            <li><a href=\"#a\">2</a></li>\r\n            <li><a href=\"#a\">3</a></li>\r\n            <li><a href=\"#a\">4</a></li>\r\n            <li><a href=\"#a\">5</a></li>\r\n            <li><a href=\"#a\">6</a></li>\r\n            <li><a href=\"#a\">7</a></li>\r\n            <li><a href=\"#a\">8</a></li>\r\n            <li><a href=\"#a\">9</a></li>\r\n        </ul>\r\n    </footer>\r\n        `\r\n    board.innerHTML = context;\r\n}\n\n//# sourceURL=webpack://p1/./public/page/home.js?");

/***/ }),

/***/ "./public/page/join.js":
/*!*****************************!*\
  !*** ./public/page/join.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Join)\n/* harmony export */ });\nfunction Join(joinPage) {\r\n    joinPage.innerHTML = `\r\n    <section class=\"loginPage\">\r\n        <div>\r\n            <input type=\"text\" placeholder=\"ID를 입력하세요.\">\r\n            <button class=\"exit\">나가기</button>\r\n            <button class=\"realLogin\">회원가입</button>\r\n        </div>\r\n    </section>\r\n\r\n    `;\r\n}\n\n//# sourceURL=webpack://p1/./public/page/join.js?");

/***/ }),

/***/ "./public/page/login.js":
/*!******************************!*\
  !*** ./public/page/login.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\nfunction Login(loginPage) {\r\n    loginPage.innerHTML = `\r\n    <section class=\"loginPage\">\r\n        <div>\r\n            <input type=\"text\" placeholder=\"ID를 입력하세요.\">\r\n            <button class=\"join\">회원가입</button>\r\n            <button class=\"realLogin\">로그인</button>\r\n        </div>\r\n    </section>\r\n\r\n    `;\r\n}\n\n//# sourceURL=webpack://p1/./public/page/login.js?");

/***/ }),

/***/ "./public/page/write.js":
/*!******************************!*\
  !*** ./public/page/write.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Write)\n/* harmony export */ });\nfunction Write(assignment){\r\n    assignment.innerHTML=`\r\n    <section class=\"assignment\">\r\n        <form action=\"/assignment\" method=\"post\">\r\n            <select name=\"boardlist\" aria-placeholder=\"게시판을 선택하세요\">\r\n                <option value=\"\">게시판을 선택해주세요</option>\r\n                <option value=\"free\">자유게시판</option>\r\n                <option value=\"secret\">비밀게시판</option>\r\n                <option value=\"info\">정보게시판</option>\r\n                <option value=\"pro\">홍보게시판</option>\r\n                <option value=\"sw\">sw게시판</option>\r\n            </select>\r\n            <input type=\"text\" placeholder=\"제목을 입력하세요\" name=\"title\">\r\n            <textarea name=\"description\" placeholder=\"내용\"></textarea>\r\n            <input type=\"submit\" class=\"submit\">\r\n        </form>\r\n        <span class=\"write\">글쓰기</span>\r\n    </section>\r\n        `;\r\n}\n\n//# sourceURL=webpack://p1/./public/page/write.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/index.js");
/******/ 	
/******/ })()
;