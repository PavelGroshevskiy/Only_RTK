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

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/ActionCreators */ \"./store/reducers/ActionCreators.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Posts = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var ref1 = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.postReducer;\n    }), posts = ref1.posts, error = ref1.error, isLoading = ref1.isLoading;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        search: \"\",\n        type: \"\"\n    }), query = ref2[0], setQuery = ref2[1];\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(query));\n    }, [\n        query\n    ]);\n    var onChange = function(e) {\n        setValue(e.target.value);\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(setQuery(_objectSpread({}, query, {\n            search: e.target.value\n        })))); //Попробовать здесь реализовать логику дебоунса\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setQuery(_objectSpread({}, query, {\n                        type: \"event\"\n                    }));\n                },\n                children: \"Event\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setQuery(_objectSpread({}, query, {\n                        type: \"new\"\n                    }));\n                },\n                children: \"New\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Loading... \"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 31,\n                columnNumber: 21\n            }, _this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 32,\n                columnNumber: 17\n            }, _this),\n            posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" Title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" Description: \",\n                                post.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \" Type: \",\n                                post.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, post.event_date, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true);\n};\n_s(Posts, \"W4kfeR++C9EolvAExQjbsJ5VScE=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi9ob29rcy9yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9yc1wiO1xuXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCB7IHBvc3RzLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VBcHBTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RSZWR1Y2VyXG4gICk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoeyBzZWFyY2g6IFwiXCIsIHR5cGU6IFwiXCIgfSk7XG4gIGNvbnN0IHRpbWVyID0gdXNlUmVmKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHF1ZXJ5KSk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHNldFF1ZXJ5KHsgLi4ucXVlcnksIHNlYXJjaDogZS50YXJnZXQudmFsdWUgfSkpKTsgLy/Qn9C+0L/RgNC+0LHQvtCy0LDRgtGMINC30LTQtdGB0Ywg0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQu9C+0LPQuNC60YMg0LTQtdCx0L7Rg9C90YHQsFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7IC4uLnF1ZXJ5LCB0eXBlOiBcImV2ZW50XCIgfSl9PlxuICAgICAgICBFdmVudFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgLi4ucXVlcnksIHR5cGU6IFwibmV3XCIgfSl9Pk5ldzwvYnV0dG9uPlxuXG4gICAgICB7aXNMb2FkaW5nICYmIDxoMT4gTG9hZGluZy4uLiA8L2gxPn1cbiAgICAgIHtlcnJvciAmJiA8aDE+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPn1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QuZXZlbnRfZGF0ZX0+XG4gICAgICAgICAgPGgyPiBUaXRsZToge3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2PiBEZXNjcmlwdGlvbjoge3Bvc3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPGgzPiBUeXBlOiB7cG9zdC50eXBlfTwvaDM+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJmZXRjaFBvc3RzIiwiUG9zdHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGlzcGF0Y2giLCJzdGF0ZSIsInBvc3RSZWR1Y2VyIiwicG9zdHMiLCJlcnJvciIsImlzTG9hZGluZyIsInNlYXJjaCIsInR5cGUiLCJxdWVyeSIsInNldFF1ZXJ5IiwidGltZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpbnB1dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsIm1hcCIsInBvc3QiLCJkaXYiLCJoMiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJoMyIsImhyIiwiZXZlbnRfZGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});