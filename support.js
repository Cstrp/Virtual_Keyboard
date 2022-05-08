/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([[551],{

/***/ 3845:
/***/ (() => {

eval("var background = document.querySelector('.background');\nvar background_cx = background.getContext('2d');\nvar background_w, background_h;\nvar cv = document.createElement('canvas');\nvar cx = cv.getContext('2d');\nvar cw = cv.width = 200;\nvar ch = cv.height = 200;\nvar dt = cx.createImageData(cw, ch);\nvar dd = dt.data,\n    dl = dt.width * dt.height;\n\nfunction generateNoise() {\n  var p = 0,\n      i = 0;\n\n  for (; i < dl; ++i) {\n    dd[p++] = c = Math.floor(Math.random() * 100);\n    dd[p++] = c;\n    dd[p++] = c;\n    dd[p++] = 225;\n  }\n\n  cx.putImageData(dt, 0, 0);\n}\n\nfunction resize() {\n  var w = window.innerWidth;\n  var h = window.innerHeight;\n  background_w = background.width = w >> 1;\n  background_h = background.height = h >> 1;\n  background.style.width = w + 'px';\n  background.style.height = h + 'px';\n}\n\nresize();\nwindow.addEventListener('resize', resize, false);\nwindow.addEventListener('load', function () {\n  var s = +new Date();\n  generateNoise();\n  background_cx.fillStyle = background_cx.createPattern(cv, 'repeat');\n  background_cx.fillRect(0, 0, background_w, background_h);\n  setTimeout(arguments.callee, 10);\n}, false);\n\n//# sourceURL=webpack:///./js/sup.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(3845));
/******/ }
]);