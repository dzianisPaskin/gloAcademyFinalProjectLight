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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_openModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openModal */ \"./modules/openModal.js\");\n/* harmony import */ var _modules_closeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/closeModal */ \"./modules/closeModal.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainSlider */ \"./modules/mainSlider.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)()\r\n;(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_1__.openModal)()\r\n;(0,_modules_closeModal__WEBPACK_IMPORTED_MODULE_2__.closeModal)()\r\n;(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_3__.mainSlider)(\".top-slider\",\".item\",\".dot\")\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/closeModal.js":
/*!*******************************!*\
  !*** ./modules/closeModal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeModal\": () => (/* binding */ closeModal)\n/* harmony export */ });\nconst closeModal = () => {\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modal = document.querySelector(\".modal-callback\");\r\n\r\n  overlay.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".modal-overlay\")) {\r\n      modal.style.display = \"none\";\r\n      overlay.style.display = \"none\";\r\n    }\r\n  });\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".modal-close\")) {\r\n      overlay.style.display = \"none\";\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/closeModal.js?");

/***/ }),

/***/ "./modules/mainSlider.js":
/*!*******************************!*\
  !*** ./modules/mainSlider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainSlider\": () => (/* binding */ mainSlider)\n/* harmony export */ });\nconst mainSlider = (classSlider, classSlides, classDots) => {\r\n  const sliderBlock = document.querySelector(\".top-slider\");\r\n  const slides = document.querySelectorAll(\".item\");\r\n  const dots = document.querySelectorAll('.dot')\r\n  const tableText = document.querySelectorAll('.table')\r\n  \r\n  \r\n  let currentSlide = 0;\r\n\r\n\r\n  \r\n  const autoSlide = () => {\r\n    slides[currentSlide].classList.remove('item-active')\r\n    dots[currentSlide].classList.remove('dot-active')\r\n    tableText[currentSlide].style.visibility = 'hidden'\r\n    tableText[currentSlide].style.opacity = 0\r\n    currentSlide++\r\n\r\n    if(currentSlide >= slides.length) {\r\n      currentSlide = 0\r\n    }\r\n    slides[currentSlide].classList.add('item-active')\r\n    dots[currentSlide].classList.add('dot-active')\r\n    tableText[currentSlide].style.visibility = 'visible'\r\n    tableText[currentSlide].style.opacity = 1\r\n  };\r\n\r\n  const startSlide = () => {\r\n    setInterval(autoSlide, 3000)\r\n  }\r\n\r\n  const stopSlide = () => {};\r\n\r\n  startSlide()\r\n\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/mainSlider.js?");

/***/ }),

/***/ "./modules/openModal.js":
/*!******************************!*\
  !*** ./modules/openModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModal = () => {\r\n  const header = document.querySelector(\".header\");\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modal = document.querySelector(\".modal-callback\");\r\n\r\n  header.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\".callback-btn\")) overlay.style.display = \"block\";\r\n    modal.style.display = \"block\";\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/openModal.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const menuItems = document.querySelectorAll(\".top-menu>.top-menu__list>li>a\");\r\n  const mainItem = document.querySelector(`a[href='#services']`)\r\n\r\n\r\n  mainItem.addEventListener('click', (e) => {\r\n    e.preventDefault()\r\n    const blockID = mainItem.getAttribute('href')\r\n    document.querySelector(blockID).scrollIntoView({\r\n      behavior: 'smooth',\r\n      block: 'start'\r\n    })\r\n  })\r\n\r\n  menuItems.forEach(anchor => {\r\n    anchor.addEventListener('click', function(e) {\r\n      e.preventDefault()\r\n\r\n      const blockID = anchor.getAttribute('href');\r\n\r\n      document.querySelector(blockID).scrollIntoView({\r\n        behavior: 'smooth',\r\n        block: 'start'\r\n      })\r\n    })\r\n  })\r\n}\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;