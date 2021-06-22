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

/***/ "./src/scripts/faq-items.js":
/*!**********************************!*\
  !*** ./src/scripts/faq-items.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  title: 'How long does Red Alert stay active after enabling?',\n  content: 'Once you enable Red Alert, it stays active until the moment you have set during the initial setup of your Red Alert Home Alarm. By Default this is 06:00 in the morning.'\n}, {\n  title: 'When should I replace Red Alert?',\n  content: 'Replace Red alert after 10 years, or when it breaks'\n}, {\n  title: 'What is the benefit of Red Alert compared to other home invasion alarms?',\n  content: 'Red Alert is much cheaper than other home invasion alarms'\n}, {\n  title: 'What guarantees does Red Alert give against burglary?',\n  content: 'Red Alert gives no guarantees against burglary'\n}, {\n  title: 'Why is Red Aleert so cheap compared to competitors',\n  content: 'Red Alert is made from very cheap materials'\n}]);\n\n//# sourceURL=webpack://frontend-assignment-exercise/./src/scripts/faq-items.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _faq_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-items */ \"./src/scripts/faq-items.js\");\n\nconst faqList = document.querySelector(\"#faq-list\");\n\nconst toggleFaqItem = title => {\n  const content = document.getElementById(title);\n  const isClosed = content.classList.contains('collapsed');\n  document.querySelectorAll('.faq-item').forEach(item => item.classList.add('collapsed'));\n\n  if (isClosed) {\n    content.classList.remove('collapsed');\n  }\n};\n\n_faq_items__WEBPACK_IMPORTED_MODULE_0__.default.forEach(faq => {\n  const element = document.createElement(\"div\");\n  const template = `\n        <div class=\"faq-title\">\n            ${faq.title}\n            <img class=\"collapse-icon\" src=\"../../public/assets/images/grey-triangle.png\">\n        </div>\n        <div id=\"${faq.title}\" class=\"faq-content\">${faq.content}</div> \n    `;\n  element.innerHTML = template;\n  element.className = 'faq-item collapsed';\n  element.id = faq.title;\n  element.addEventListener('click', () => toggleFaqItem(faq.title));\n  faqList.appendChild(element);\n});\ndocument.querySelector('.button-information').addEventListener('click', () => {\n  document.querySelector('.modal').classList.add('display');\n});\ndocument.querySelector('.close-button').addEventListener('click', () => {\n  document.querySelector('.modal').classList.remove('display');\n});\n\n//# sourceURL=webpack://frontend-assignment-exercise/./src/scripts/main.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontend-assignment-exercise/./src/styles/main.scss?");

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
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;