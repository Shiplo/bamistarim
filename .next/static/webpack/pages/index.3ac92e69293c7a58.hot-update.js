"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/layout */ \"./src/components/layout/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/home.module.scss */ \"./src/styles/home.module.scss\");\n/* harmony import */ var _src_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_src_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Index() {\n    _s();\n    gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__.ScrollTrigger);\n    var vcontainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var section = vcontainer.current;\n        var sections = section.querySelectorAll(\".v-section\");\n        console.log(sections);\n        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to(sections, {\n            xPercent: 100 * (sections.length - 1),\n            ease: \"none\",\n            scrollTrigger: {\n                trigger: section,\n                pin: true,\n                scrub: 1,\n                snap: 1 / (sections.length - 1),\n                end: function() {\n                    return \"+=\" + section.offsetWidth;\n                }\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        header: \"hide\",\n        footer: \"hide\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            ref: vcontainer,\n            className: \"vertical-wrapper h-screen flex flex-nowrap \".concat((_src_styles_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container)),\n            id: \"vertical-scroll\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"v-section h-full w-screen bg-slate-400\"\n                }, void 0, false, {\n                    fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"v-section h-full w-screen bg-red-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"v-section h-full w-screen bg-lime-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"v-section h-full w-screen bg-sky-500\"\n                }, void 0, false, {\n                    fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/shiplorahman/Projects/bamistarim/pages/index.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Index, \"4zwHZv3KJPqWMAHFzS112iaHjo0=\");\n_c = Index;\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUF5QztBQUNJO0FBQ2xCO0FBQzRCO0FBQ0o7QUFHcEMsU0FBU00sS0FBSyxHQUFHOztJQUM5QkgscURBQW1CLENBQUNDLGtFQUFhLENBQUMsQ0FBQztJQUVuQyxJQUFJSSxVQUFVLEdBQUdQLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBRTdCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNUyxPQUFPLEdBQUdELFVBQVUsQ0FBQ0UsT0FBTztRQUNsQyxJQUFJQyxRQUFRLEdBQUdGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsWUFBWSxDQUFDO1FBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsUUFBUSxDQUFDLENBQUM7UUFDdEJSLHlDQUFPLENBQUNRLFFBQVEsRUFBRTtZQUNoQkssUUFBUSxFQUFFLEdBQUcsR0FBSUwsQ0FBQUEsUUFBUSxDQUFDTSxNQUFNLEdBQUcsQ0FBQztZQUNwQ0MsSUFBSSxFQUFFLE1BQU07WUFDWkMsYUFBYSxFQUFFO2dCQUNiQyxPQUFPLEVBQUVYLE9BQU87Z0JBQ2hCWSxHQUFHLEVBQUUsSUFBSTtnQkFDVEMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLElBQUksRUFBRSxDQUFDLEdBQUlaLENBQUFBLFFBQVEsQ0FBQ00sTUFBTSxHQUFHLENBQUM7Z0JBQzlCTyxHQUFHLEVBQUU7MkJBQU0sSUFBSSxHQUFHZixPQUFPLENBQUNnQixXQUFXO2lCQUFBO2FBQ3RDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0UsOERBQUN2Qiw4REFBTTtRQUFDd0IsTUFBTSxFQUFDLE1BQU07UUFBQ0MsTUFBTSxFQUFDLE1BQU07a0JBQ2pDLDRFQUFDbEIsU0FBTztZQUFDbUIsR0FBRyxFQUFFcEIsVUFBVTtZQUFFcUIsU0FBUyxFQUFFLDZDQUE0QyxDQUFtQixPQUFqQnhCLCtFQUFnQixDQUFFO1lBQUUwQixFQUFFLEVBQUMsaUJBQWlCOzs4QkFDekgsOERBQUNDLEtBQUc7b0JBQUNILFNBQVMsRUFBQyx3Q0FBd0M7Ozs7O3dCQUFPOzhCQUM5RCw4REFBQ0csS0FBRztvQkFBQ0gsU0FBUyxFQUFDLHNDQUFzQzs7Ozs7d0JBQU87OEJBQzVELDhEQUFDRyxLQUFHO29CQUFDSCxTQUFTLEVBQUMsdUNBQXVDOzs7Ozt3QkFBTzs4QkFDN0QsOERBQUNHLEtBQUc7b0JBQUNILFNBQVMsRUFBQyxzQ0FBc0M7Ozs7O3dCQUFPOzs7Ozs7Z0JBQ3BEOzs7OztZQUNILENBQ1Y7QUFDSCxDQUFDO0dBaEN1QnZCLEtBQUs7QUFBTEEsS0FBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJ1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gJ2dzYXAvZGlzdC9TY3JvbGxUcmlnZ2VyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zcmMvc3R5bGVzL2hvbWUubW9kdWxlLnNjc3MnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5cbiAgbGV0IHZjb250YWluZXIgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWN0aW9uID0gdmNvbnRhaW5lci5jdXJyZW50O1xuICAgIGxldCBzZWN0aW9ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLnYtc2VjdGlvbicpO1xuICAgIGNvbnNvbGUubG9nKHNlY3Rpb25zKTtcbiAgICBnc2FwLnRvKHNlY3Rpb25zLCB7XG4gICAgICB4UGVyY2VudDogMTAwICogKHNlY3Rpb25zLmxlbmd0aCAtIDEpLFxuICAgICAgZWFzZTogXCJub25lXCIsXG4gICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgIHRyaWdnZXI6IHNlY3Rpb24sXG4gICAgICAgIHBpbjogdHJ1ZSxcbiAgICAgICAgc2NydWI6IDEsXG4gICAgICAgIHNuYXA6IDEgLyAoc2VjdGlvbnMubGVuZ3RoIC0gMSksXG4gICAgICAgIGVuZDogKCkgPT4gXCIrPVwiICsgc2VjdGlvbi5vZmZzZXRXaWR0aFxuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IGhlYWRlcj0naGlkZScgZm9vdGVyPSdoaWRlJz5cbiAgICAgIDxzZWN0aW9uIHJlZj17dmNvbnRhaW5lcn0gY2xhc3NOYW1lPXtgdmVydGljYWwtd3JhcHBlciBoLXNjcmVlbiBmbGV4IGZsZXgtbm93cmFwICR7c3R5bGVzLmNvbnRhaW5lcn1gfSBpZD0ndmVydGljYWwtc2Nyb2xsJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Ytc2VjdGlvbiBoLWZ1bGwgdy1zY3JlZW4gYmctc2xhdGUtNDAwJz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Ytc2VjdGlvbiBoLWZ1bGwgdy1zY3JlZW4gYmctcmVkLTUwMCc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2LXNlY3Rpb24gaC1mdWxsIHctc2NyZWVuIGJnLWxpbWUtNTAwJz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Ytc2VjdGlvbiBoLWZ1bGwgdy1zY3JlZW4gYmctc2t5LTUwMCc+PC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJMYXlvdXQiLCJnc2FwIiwiU2Nyb2xsVHJpZ2dlciIsInN0eWxlcyIsIkluZGV4IiwicmVnaXN0ZXJQbHVnaW4iLCJ2Y29udGFpbmVyIiwic2VjdGlvbiIsImN1cnJlbnQiLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb25zb2xlIiwibG9nIiwidG8iLCJ4UGVyY2VudCIsImxlbmd0aCIsImVhc2UiLCJzY3JvbGxUcmlnZ2VyIiwidHJpZ2dlciIsInBpbiIsInNjcnViIiwic25hcCIsImVuZCIsIm9mZnNldFdpZHRoIiwiaGVhZGVyIiwiZm9vdGVyIiwicmVmIiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaWQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});