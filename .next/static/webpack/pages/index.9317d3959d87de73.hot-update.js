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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useDebounce */ \"./hooks/useDebounce.ts\");\n/* harmony import */ var _store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/ActionCreators */ \"./store/reducers/ActionCreators.ts\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Posts = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var debounced = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts, 2000);\n    var ref1 = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.postReducer;\n    }), posts = ref1.posts, error = ref1.error, isLoading = ref1.isLoading;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        search: \"\",\n        type: \"\"\n    }), query = ref2[0], setQuery = ref2[1];\n    var timer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    //Debounce\n    // const debouncedCallback = useCallback(() =>\n    //   (...args: any) => {\n    //     if (timer.current) {\n    //       clearTimeout(timer.current);\n    //     }\n    //     timer.current = setTimeout(() => {\n    //       (fetchPosts(setQuery({ ...query, search: e.target.value, type:'' }))); //Попробовать здесь реализовать логику дебоунса\n    //     };, delay);\n    //   },\n    //   []\n    // );\n    // const debouncedCallback = useCallback(() => {\n    //   if (timer) {\n    //     clearTimeout(timer.current);\n    //   }\n    //   timer.current = setTimeout(() => {\n    //     fetchPosts;\n    //   }, 500);\n    // }, []);\n    //\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts)(query));\n    }, [\n        query\n    ]);\n    var onChange = function(e) {\n        var target = e.target.value;\n        setValue(target);\n        var timeout = setTimeout(function() {\n            dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts)(setQuery(_objectSpread({}, query, {\n                search: target\n            }))));\n        }, 1000);\n    // dispatch(fetchPosts(setQuery({ ...query, search: target }))); //Попробовать здесь реализовать логику дебоунса\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setQuery(_objectSpread({}, query, {\n                        type: \"event\"\n                    }));\n                },\n                children: \"Event\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return setQuery(_objectSpread({}, query, {\n                        type: \"new\"\n                    }));\n                },\n                children: \"New\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Loading... \"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 61,\n                columnNumber: 21\n            }, _this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 62,\n                columnNumber: 17\n            }, _this),\n            posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" Title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" Description: \",\n                                post.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \" Type: \",\n                                post.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, post.event_date, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true);\n};\n_s(Posts, \"2+PkL6scR2xLIOyyht/Ek6bWhVs=\", false, function() {\n    return [\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxRQUFRLENBQVBDLElBQUk7bUdBQ2JDLENBQUc7O29HQUNEQyxDQUFFOztnQ0FBQyxDQUFRO2dDQUFDRixJQUFJLENBQUNHLEtBQUs7Ozs7Ozs7b0dBQ3RCRixDQUFHOztnQ0FBQyxDQUFjO2dDQUFDRCxJQUFJLENBQUNJLFdBQVc7Ozs7Ozs7b0dBQ25DQyxDQUFFOztnQ0FBQyxDQUFPO2dDQUFDTCxJQUFJLENBQUNkLElBQUk7Ozs7Ozs7b0dBQ3BCb0IsQ0FBRTs7Ozs7O21CQUpLTixJQUFJLENBQUNPLFVBQVU7Ozs7Ozs7O0FBU2pDLENBQUM7R0FuRUtoQyxLQUFLOztRQUVRSix3REFBYztRQUNiRSwwREFBVztRQUNPRCx3REFBYzs7O0tBSjlDRyxLQUFLO0FBcUVYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0cy50c3g/ZWZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vaG9va3MvcmVkdXhcIjtcbmltcG9ydCB1c2VEZWJvdW5jZSBmcm9tIFwiLi4vaG9va3MvdXNlRGVib3VuY2VcIjtcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnMvQWN0aW9uQ3JlYXRvcnNcIjtcblxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgZGVib3VuY2VkID0gdXNlRGVib3VuY2UoZmV0Y2hQb3N0cywgMjAwMCk7XG4gIGNvbnN0IHsgcG9zdHMsIGVycm9yLCBpc0xvYWRpbmcgfSA9IHVzZUFwcFNlbGVjdG9yKFxuICAgIChzdGF0ZSkgPT4gc3RhdGUucG9zdFJlZHVjZXJcbiAgKTtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSh7IHNlYXJjaDogXCJcIiwgdHlwZTogXCJcIiB9KTtcbiAgY29uc3QgdGltZXIgPSB1c2VSZWYoKTtcblxuICAvL0RlYm91bmNlXG4gIC8vIGNvbnN0IGRlYm91bmNlZENhbGxiYWNrID0gdXNlQ2FsbGJhY2soKCkgPT5cbiAgLy8gICAoLi4uYXJnczogYW55KSA9PiB7XG4gIC8vICAgICBpZiAodGltZXIuY3VycmVudCkge1xuICAvLyAgICAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudCk7XG4gIC8vICAgICB9XG4gIC8vICAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gIC8vICAgICAgIChmZXRjaFBvc3RzKHNldFF1ZXJ5KHsgLi4ucXVlcnksIHNlYXJjaDogZS50YXJnZXQudmFsdWUsIHR5cGU6JycgfSkpKTsgLy/Qn9C+0L/RgNC+0LHQvtCy0LDRgtGMINC30LTQtdGB0Ywg0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQu9C+0LPQuNC60YMg0LTQtdCx0L7Rg9C90YHQsFxuICAvLyAgICAgfTssIGRlbGF5KTtcbiAgLy8gICB9LFxuICAvLyAgIFtdXG4gIC8vICk7XG5cbiAgLy8gY29uc3QgZGVib3VuY2VkQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIC8vICAgaWYgKHRpbWVyKSB7XG4gIC8vICAgICBjbGVhclRpbWVvdXQodGltZXIuY3VycmVudCk7XG4gIC8vICAgfVxuICAvLyAgIHRpbWVyLmN1cnJlbnQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgLy8gICAgIGZldGNoUG9zdHM7XG4gIC8vICAgfSwgNTAwKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHF1ZXJ5KSk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFZhbHVlKHRhcmdldCk7XG4gICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0cyhzZXRRdWVyeSh7IC4uLnF1ZXJ5LCBzZWFyY2g6IHRhcmdldCB9KSkpO1xuICAgIH0sIDEwMDApO1xuICAgIC8vIGRpc3BhdGNoKGZldGNoUG9zdHMoc2V0UXVlcnkoeyAuLi5xdWVyeSwgc2VhcmNoOiB0YXJnZXQgfSkpKTsgLy/Qn9C+0L/RgNC+0LHQvtCy0LDRgtGMINC30LTQtdGB0Ywg0YDQtdCw0LvQuNC30L7QstCw0YLRjCDQu9C+0LPQuNC60YMg0LTQtdCx0L7Rg9C90YHQsFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeSh7IC4uLnF1ZXJ5LCB0eXBlOiBcImV2ZW50XCIgfSl9PlxuICAgICAgICBFdmVudFxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgLi4ucXVlcnksIHR5cGU6IFwibmV3XCIgfSl9Pk5ldzwvYnV0dG9uPlxuXG4gICAgICB7aXNMb2FkaW5nICYmIDxoMT4gTG9hZGluZy4uLiA8L2gxPn1cbiAgICAgIHtlcnJvciAmJiA8aDE+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPn1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QuZXZlbnRfZGF0ZX0+XG4gICAgICAgICAgPGgyPiBUaXRsZToge3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2PiBEZXNjcmlwdGlvbjoge3Bvc3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPGgzPiBUeXBlOiB7cG9zdC50eXBlfTwvaDM+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJ1c2VEZWJvdW5jZSIsImZldGNoUG9zdHMiLCJQb3N0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJkaXNwYXRjaCIsImRlYm91bmNlZCIsInN0YXRlIiwicG9zdFJlZHVjZXIiLCJwb3N0cyIsImVycm9yIiwiaXNMb2FkaW5nIiwic2VhcmNoIiwidHlwZSIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJ0aW1lciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaW5wdXQiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJtYXAiLCJwb3N0IiwiZGl2IiwiaDIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJociIsImV2ZW50X2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});