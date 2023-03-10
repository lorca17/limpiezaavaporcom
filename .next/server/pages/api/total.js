"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/total";
exports.ids = ["pages/api/total"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/total/index.js":
/*!**********************************!*\
  !*** ./pages/api/total/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    const jsonDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    const fileContents = await fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(jsonDirectory);\n    let sitemap = fileContents.map((e)=>{\n        let obj = {};\n        let value = e.split(\".\")[0];\n        obj.id = value;\n        return obj;\n    });\n    res.status(200).json(sitemap);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdG90YWwvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUVULGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1DLGdCQUFnQkosZ0RBQVMsQ0FBQ00sUUFBUUMsR0FBRyxJQUFJO0lBQy9DLE1BQU1DLGVBQWUsTUFBTVQscURBQWMsQ0FBQ0s7SUFFMUMsSUFBSU0sVUFBVUYsYUFBYUcsR0FBRyxDQUFDLENBQUNDLElBQU07UUFDcEMsSUFBSUMsTUFBTSxDQUFDO1FBQ1gsSUFBSUMsUUFBUUYsRUFBRUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNCRixJQUFJRyxFQUFFLEdBQUdGO1FBQ1QsT0FBT0Q7SUFDVDtJQUVBVixJQUFJYyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUjtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWF3ZWIvLi9wYWdlcy9hcGkvdG90YWwvaW5kZXguanM/MDE3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGpzb25EaXJlY3RvcnkgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXCJkYXRhXCIpO1xuICBjb25zdCBmaWxlQ29udGVudHMgPSBhd2FpdCBmcy5yZWFkZGlyU3luYyhqc29uRGlyZWN0b3J5KTtcblxuICBsZXQgc2l0ZW1hcCA9IGZpbGVDb250ZW50cy5tYXAoKGUpID0+IHtcbiAgICBsZXQgb2JqID0ge307XG4gICAgbGV0IHZhbHVlID0gZS5zcGxpdChcIi5cIilbMF07XG4gICAgb2JqLmlkID0gdmFsdWU7XG4gICAgcmV0dXJuIG9iajtcbiAgfSk7XG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oc2l0ZW1hcCk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImpzb25EaXJlY3RvcnkiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImZpbGVDb250ZW50cyIsInJlYWRkaXJTeW5jIiwic2l0ZW1hcCIsIm1hcCIsImUiLCJvYmoiLCJ2YWx1ZSIsInNwbGl0IiwiaWQiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/total/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/total/index.js"));
module.exports = __webpack_exports__;

})();