"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/reducers/ActionCreators.ts":
/*!******************************************!*\
  !*** ./store/reducers/ActionCreators.ts ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; },\n/* harmony export */   \"fetchPosts\": function() { return /* binding */ fetchPosts; }\n/* harmony export */ });\n/* harmony import */ var _Users_pavelgrosevskij_Documents_only_rtk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pavelgrosevskij_Documents_only_rtk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pavelgrosevskij_Documents_only_rtk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./store/store.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\nvar getStaticProps = function() {\n    var _ref = _asyncToGenerator(_Users_pavelgrosevskij_Documents_only_rtk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(query) {\n        var response, posts;\n        return _Users_pavelgrosevskij_Documents_only_rtk_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"https://dev.retnback.only.com.ru/api/news/list?search=\" + query.search + \"&type=\" + query.type);\n                case 2:\n                    response = _ctx.sent;\n                    _ctx.next = 5;\n                    return response.json();\n                case 5:\n                    posts = _ctx.sent;\n                    if (posts) {\n                        _ctx.next = 8;\n                        break;\n                    }\n                    return _ctx.abrupt(\"return\", {\n                        notFound: true\n                    });\n                case 8:\n                    return _ctx.abrupt(\"return\", {\n                        props: {\n                            initialReduxState: {\n                                posts: posts.data\n                            }\n                        }\n                    });\n                case 9:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getStaticProps(query) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar store = (0,_store__WEBPACK_IMPORTED_MODULE_1__.setUpStore)();\nvar fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createAsyncThunk)(\"post/fetch\", getStaticProps);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZDtBQUU5QixHQUFLLENBQUNFLGNBQWM7c0xBQUcsUUFBUSxTQUFEQyxLQUFVLEVBQUssQ0FBQztZQUM3Q0MsUUFBUSxFQU1SQyxLQUFLOzs7OzsyQkFOWUMsS0FBSyxDQUN6QixDQUFzRCwwREFDckRILEtBQUssQ0FBQ0ksTUFBTSxHQUNaLENBQVEsVUFDUkosS0FBSyxDQUFDSyxJQUFJOztvQkFKUkosUUFBUSxZQUpoQixDQVNHOzsyQkFDbUJBLFFBQVEsQ0FBQ0ssSUFBSTs7b0JBQTNCSixLQUFLLFlBVmIsQ0FVcUM7d0JBRTlCQSxLQUFLOzs7O2lEQUNELENBQUM7d0JBQ05LLFFBQVEsRUFBRSxJQUFJO29CQUNoQixDQUFDOztpREFHSSxDQUFDO3dCQUNOQyxLQUFLLEVBQUUsQ0FBQzs0QkFDTkMsaUJBQWlCLEVBQUUsQ0FBQztnQ0FDbEJQLEtBQUssRUFBRUEsS0FBSyxDQUFDUSxJQUFJOzRCQUNuQixDQUFDO3dCQUNILENBQUM7b0JBQ0gsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztvQkF0QllYLGNBQWMsQ0FBVUMsS0FBVTs7OztBQXdCL0MsR0FBSyxDQUFDVyxLQUFLLEdBQUdiLGtEQUFVO0FBRWpCLEdBQUssQ0FBQ2MsVUFBVSxHQUFHZixrRUFBZ0IsQ0FBQyxDQUFZLGFBQUVFLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvQWN0aW9uQ3JlYXRvcnMudHM/NmJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCB7IHNldFVwU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmVcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHF1ZXJ5OiBhbnkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kZXYucmV0bmJhY2sub25seS5jb20ucnUvYXBpL25ld3MvbGlzdD9zZWFyY2g9YCArXG4gICAgICBxdWVyeS5zZWFyY2ggK1xuICAgICAgXCImdHlwZT1cIiArXG4gICAgICBxdWVyeS50eXBlXG4gICk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcG9zdHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICAvLyByZXR1cm4gcG9zdHMuZGF0YTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHtcbiAgICAgICAgcG9zdHM6IHBvc3RzLmRhdGEsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5jb25zdCBzdG9yZSA9IHNldFVwU3RvcmUoKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoUG9zdHMgPSBjcmVhdGVBc3luY1RodW5rKFwicG9zdC9mZXRjaFwiLCBnZXRTdGF0aWNQcm9wcyk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXN5bmNUaHVuayIsInNldFVwU3RvcmUiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJwb3N0cyIsImZldGNoIiwic2VhcmNoIiwidHlwZSIsImpzb24iLCJub3RGb3VuZCIsInByb3BzIiwiaW5pdGlhbFJlZHV4U3RhdGUiLCJkYXRhIiwic3RvcmUiLCJmZXRjaFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/ActionCreators.ts\n");

/***/ })

});