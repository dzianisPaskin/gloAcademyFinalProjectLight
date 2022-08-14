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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./modules/smoothScroll.js\");\n/* harmony import */ var _modules_openModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/openModal */ \"./modules/openModal.js\");\n/* harmony import */ var _modules_closeModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/closeModal */ \"./modules/closeModal.js\");\n/* harmony import */ var _modules_mainSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mainSlider */ \"./modules/mainSlider.js\");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ \"./modules/maskPhone.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/accordion */ \"./modules/accordion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst swiper = new Swiper(\".swiper\", {\r\n  slidesPerView: 3,\r\n  spaceBetween: 30,\r\n  freeMode: true,\r\n  slidesPerGroup: 3,\r\n  loop: true,\r\n  breakpoints: {\r\n    0: {\r\n      slidesPerView: 1,\r\n      spaceBetween: 30,\r\n    },\r\n    576: {\r\n      slidesPerView: 2,\r\n      spaceBetween: 40,\r\n    },\r\n    1124: {\r\n      slidesPerView: 3,\r\n      spaceBetween: 30,\r\n    },\r\n  },\r\n  navigation: {\r\n    prevEl: \".arrow-left\",\r\n    nextEl: \".arrow-right\",\r\n  },\r\n});\r\n\r\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_0__.smoothScroll)();\r\n(0,_modules_openModal__WEBPACK_IMPORTED_MODULE_1__.openModal)();\r\n(0,_modules_closeModal__WEBPACK_IMPORTED_MODULE_2__.closeModal)();\r\n(0,_modules_mainSlider__WEBPACK_IMPORTED_MODULE_3__.mainSlider)();\r\n(0,_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__.maskPhone)({ formId: \"form\" }, '+7 (____) __ __ __');\r\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__.sendForm)({ formId: \"form\" });\r\n(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_6__.accordion)();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\r\n  const accordion = document.querySelector(\".accordeon\");\r\n  const elem = accordion.querySelectorAll(\".element\");\r\n  const elemContent = accordion.querySelectorAll(\".element-content\");\r\n\r\n  accordion.addEventListener(\"click\", (e) => {\r\n    const target = e.target.closest(\".element\");\r\n    if (target) {\r\n      elem.forEach((el, ind) => {\r\n        if (target.classList.contains(\"active\")) {\r\n          el.classList.remove(\"active\");\r\n          elemContent[ind].style.display = \"none\";\r\n        } else if (el === target) {\r\n          elemContent[ind].style.display = \"block\";\r\n          el.classList.add(\"active\");\r\n        } else {\r\n          el.classList.remove(\"active\");\r\n          elemContent[ind].style.display = \"none\";\r\n        }\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/accordion.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mainSlider\": () => (/* binding */ mainSlider)\n/* harmony export */ });\nconst mainSlider = () => {\r\n  const slides = document.querySelectorAll(\".item\");\r\n  const tableText = document.querySelectorAll(\".table\");\r\n  let currentSlide = 0;\r\n  tableText[currentSlide].classList.add(\"active\")\r\n  setTimeout(() => tableText[currentSlide].classList.remove(\"active\"), 2700);\r\n\r\n  const showText = () => {\r\n    slides[currentSlide].classList.add(\"item-active\");\r\n\r\n    setTimeout(() => tableText[currentSlide].classList.add(\"active\"), 300);\r\n  };\r\n  const hideText = () => {\r\n    slides[currentSlide].classList.remove(\"item-active\");\r\n\r\n    setTimeout(() => tableText[currentSlide].classList.remove(\"active\"), 2700);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    hideText();\r\n\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    showText();\r\n  };\r\n\r\n  const startSlide = () => {\r\n    setInterval(autoSlide, 3000);\r\n  };\r\n\r\n  startSlide();\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/mainSlider.js?");

/***/ }),

/***/ "./modules/maskPhone.js":
/*!******************************!*\
  !*** ./modules/maskPhone.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"maskPhone\": () => (/* binding */ maskPhone)\n/* harmony export */ });\nconst maskPhone = ({ formId },masked) => {\r\n\r\n\r\n  const form = document.getElementById(formId);\r\n  const inputTel = form.querySelector(\".tel\");\r\n\r\n  function mask(event) {\r\n    const keyCode = event.keyCode;\r\n    const template = masked,\r\n      def = template.replace(/\\D/g, \"\"),\r\n      val = this.value.replace(/\\D/g, \"\");\r\n    let i = 0,\r\n      newValue = template.replace(/[_\\d]/g, function (a) {\r\n        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\r\n      });\r\n    i = newValue.indexOf(\"_\");\r\n    if (i != -1) {\r\n      newValue = newValue.slice(0, i);\r\n    }\r\n    let reg = template.substr(0, this.value.length).replace(/_+/g,\r\n      function (a) {\r\n        return \"\\\\d{1,\" + a.length + \"}\";\r\n      }).replace(/[+()]/g, \"\\\\$&\");\r\n    reg = new RegExp(\"^\" + reg + \"$\");\r\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\r\n      this.value = newValue;\r\n    }\r\n    if (event.type == \"blur\" && this.value.length < 5) {\r\n      this.value = \"\";\r\n    }\r\n  \r\n  }\r\n  \r\n  inputTel.addEventListener(\"input\", mask);\r\n  inputTel.addEventListener(\"focus\", mask);\r\n  inputTel.addEventListener(\"blur\", mask);\r\n \r\n}\n\n//# sourceURL=webpack:///./modules/maskPhone.js?");

/***/ }),

/***/ "./modules/openModal.js":
/*!******************************!*\
  !*** ./modules/openModal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openModal\": () => (/* binding */ openModal)\n/* harmony export */ });\nconst openModal = () => {\r\n\r\n  const overlay = document.querySelector(\".modal-overlay\");\r\n  const modal = document.querySelector(\".modal-callback\");\r\n  const orderCall = document.querySelectorAll(\".fancyboxModal\");\r\n\r\n\r\n  window.addEventListener(\"click\", (e) => {\r\n    const target = e.target.closest(\".fancyboxModal\");\r\n    if (target) {\r\n      orderCall.forEach((el) => {\r\n        if (el === target) overlay.style.display = \"block\";\r\n        modal.style.display = \"block\";\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/openModal.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendForm\": () => (/* binding */ sendForm)\n/* harmony export */ });\nconst sendForm = ({ formId }) => {\r\n  const form = document.getElementById(formId);\r\n  const statusBlock = document.createElement(\"div\");\r\n  const statusBlockName = document.createElement(\"div\");\r\n  const statusBlockTel = document.createElement(\"div\");\r\n  const inputName = form.querySelector(\".name\");\r\n  const inputTel = form.querySelector(\".tel\");\r\n  const formGroup_1 = document.querySelector(\".form-group_1\");\r\n  const formGroup_2 = document.querySelector(\".form-group_2\");\r\n\r\n  const loadText = \"Идёт отправка..\";\r\n  const errorText = \"Ошибка...\";\r\n  const succesText = \"Отправлено...\";\r\n\r\n  const checkInputName = () => {\r\n    const reg = /[^а-яА-Я]/gi;\r\n    if (reg.test(inputName.value) || inputName.value.length <= 2) {\r\n      inputName.classList.add(\"error\");\r\n      statusBlockName.textContent = `Только кириллица и не меньше 2х символов`;\r\n\r\n      formGroup_1.append(statusBlockName);\r\n      inputName.value = inputName.value.replace(reg, \"\");\r\n    } else {\r\n      inputName.classList.remove(\"error\");\r\n      statusBlockName.remove();\r\n    }\r\n  };\r\n\r\n  const checkInputTel = () => {\r\n    if (inputTel.value.length === 18) {\r\n      inputTel.classList.remove(\"error\");\r\n\r\n      statusBlockTel.remove();\r\n    } else {\r\n      statusBlockTel.textContent = `Введите корректный номер +7 (****) ** ** **`;\r\n      formGroup_2.append(statusBlockTel);\r\n      inputTel.classList.add(\"error\");\r\n    }\r\n  };\r\n\r\n  const sendData = (data) => {\r\n    return fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n      method: \"POST\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  };\r\n\r\n  const submitForm = () => {\r\n    const formData = new FormData(form);\r\n    const formBody = {};\r\n\r\n    statusBlock.textContent = loadText;\r\n    form.append(statusBlock);\r\n\r\n    formData.forEach((val, key) => {\r\n      formBody[key] = val;\r\n    });\r\n\r\n if (\r\n      !inputName.classList.contains(\"error\") &&\r\n      !inputTel.classList.contains(\"error\")\r\n    ) {\r\n      sendData(formBody)\r\n        .then((data) => {\r\n          statusBlock.textContent = succesText;\r\n          inputName.value = \"\";\r\n          inputTel.value = \"\";\r\n        })\r\n        .catch((error) => {\r\n          statusBlock.textContent = errorText;\r\n        });\r\n    } else {\r\n      statusBlock.textContent = \"Данные введены неверно\";\r\n    }\r\n  };\r\n\r\n  try {\r\n    if (!form) {\r\n      throw Error(\"Верните форму\");\r\n    }\r\n    form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n        [inputName, inputTel].forEach((el) => {\r\n          if (el.value === \"\") {\r\n            el.classList.add(\"error\");\r\n            statusBlock.textContent = \"Заполните все поля\";\r\n            form.append(statusBlock);\r\n          } else {\r\n            el.classList.remove(\"error\");\r\n            statusBlock.remove()\r\n          }\r\n    \r\n        })\r\n      checkInputName()\r\n      checkInputTel()\r\n      submitForm();\r\n    });\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/smoothScroll.js":
/*!*********************************!*\
  !*** ./modules/smoothScroll.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"smoothScroll\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n  const menuItems = document.querySelectorAll(\".header-link\");\r\n  const mainItem = document.querySelector(`a[href='#services']`);\r\n  const arrowUp = document.querySelector(\".up\");\r\n\r\n  const scroll = (e) => {\r\n    e.preventDefault();\r\n    const blockID = mainItem.getAttribute(\"href\");\r\n    document.querySelector(blockID).scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  };\r\n\r\n  arrowUp.addEventListener(\"click\", scroll);\r\n  mainItem.addEventListener(\"click\", scroll);\r\n  menuItems.forEach((anchor) => {\r\n    anchor.addEventListener(\"click\", (e) => {\r\n      e.preventDefault();\r\n\r\n      const blockID = anchor.getAttribute(\"href\");\r\n\r\n      document.querySelector(blockID).scrollIntoView({\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      });\r\n    });\r\n  });\r\n\r\n  window.addEventListener(\"scroll\", (e) => {\r\n    const scrollTop = document.documentElement.scrollTop;\r\n    if (scrollTop < 620) {\r\n      arrowUp.style.display = \"none\";\r\n    } else {\r\n      arrowUp.style.display = \"block\";\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./modules/smoothScroll.js?");

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