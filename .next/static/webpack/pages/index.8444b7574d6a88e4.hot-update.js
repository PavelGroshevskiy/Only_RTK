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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useDebounce */ \"./hooks/useDebounce.ts\");\n/* harmony import */ var _store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/reducers/ActionCreators */ \"./store/reducers/ActionCreators.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Posts = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), value = ref[0], setValue = ref[1];\n    var debouncedSearch = (0,_hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts, 2200);\n    var dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var ref1 = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.postReducer;\n    }), posts = ref1.posts, error = ref1.error, isLoading = ref1.isLoading;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), query = ref2.query, setQuery = ref2.setQuery;\n    // const query = {\n    //   search: \"\",\n    //   type: \"new\",\n    // };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts)(query));\n    }, []);\n    var onChange = function(e) {\n        setValue(e.target.value);\n        debouncedSearch(dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_4__.fetchPosts)(e.target.value))); //Попробовать здесь реализовать логику дебоунса\n    // dispatch(fetchPosts(e.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Loading... \"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 35,\n                columnNumber: 21\n            }, _this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 36,\n                columnNumber: 17\n            }, _this),\n            console.log(posts),\n            posts.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" Title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" Description: \",\n                                post.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \" Type: \",\n                                post.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, post.event_date, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true);\n};\n_s(Posts, \"Cnr+o6TTFDt3pBohmWZwPDdr7F4=\", false, function() {\n    return [\n        _hooks_useDebounce__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = Posts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Posts);\nvar _c;\n$RefreshReg$(_c, \"Posts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBQ29CO0FBQ2pCO0FBQ2U7O0FBRTdELEdBQUssQ0FBQ00sS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7O0lBQ25CLEdBQUssQ0FBcUJMLEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTlCTSxLQUFLLEdBQWNOLEdBQVksS0FBeEJPLFFBQVEsR0FBSVAsR0FBWTtJQUN0QyxHQUFLLENBQUNRLGVBQWUsR0FBR0wsOERBQVcsQ0FBQ0Msc0VBQVUsRUFBRSxJQUFJO0lBQ3BELEdBQUssQ0FBQ0ssUUFBUSxHQUFHUiw0REFBYztJQUMvQixHQUFLLENBQStCQyxJQUVuQyxHQUZtQ0EsNERBQWMsQ0FDaEQsUUFBUSxDQUFQUSxLQUFLO2VBQUtBLEtBQUssQ0FBQ0MsV0FBVztRQUR0QkMsS0FBSyxHQUF1QlYsSUFFbkMsQ0FGT1UsS0FBSyxFQUFFQyxLQUFLLEdBQWdCWCxJQUVuQyxDQUZjVyxLQUFLLEVBQUVDLFNBQVMsR0FBS1osSUFFbkMsQ0FGcUJZLFNBQVM7SUFHL0IsR0FBSyxDQUF1QmQsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBL0JlLEtBQUssR0FBZWYsSUFBWSxDQUFoQ2UsS0FBSyxFQUFFQyxRQUFRLEdBQUtoQixJQUFZLENBQXpCZ0IsUUFBUTtJQUV2QixFQUFrQjtJQUNsQixFQUFnQjtJQUNoQixFQUFpQjtJQUNqQixFQUFLO0lBRUxqQixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmVSxRQUFRLENBQUNMLDBFQUFVLENBQUNXLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRVAsR0FBSyxDQUFDRSxRQUFRLEdBQUcsUUFBUSxDQUFQQyxDQUFNLEVBQUssQ0FBQztRQUM1QlgsUUFBUSxDQUFDVyxDQUFDLENBQUNDLE1BQU0sQ0FBQ2IsS0FBSyxDQUFDLENBQUM7UUFFekJFLGVBQWUsQ0FBQ0MsUUFBUSxDQUFDTCwwRUFBVSxDQUFDYyxDQUFDLENBQUNDLE1BQU0sQ0FBQ2IsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUErQztJQUV0RyxFQUF3QztJQUMxQyxDQUFDO0lBRUQsTUFBTTs7d0ZBRURjLENBQUs7Z0JBQUNDLElBQUksRUFBQyxDQUFNO2dCQUFDZixLQUFLLEVBQUVBLEtBQUs7Z0JBQUVXLFFBQVEsRUFBRUEsUUFBUTs7Ozs7O1lBQ2xESCxTQUFTLGdGQUFLUSxDQUFFOzBCQUFDLENBQVk7Ozs7OztZQUM3QlQsS0FBSyxnRkFBS1MsQ0FBRTswQkFBQyxDQUFvQjs7Ozs7O1lBQ2pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osS0FBSztZQUVqQkEsS0FBSyxDQUFDYSxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJO21HQUNiQyxDQUFHOztvR0FDREMsQ0FBRTs7Z0NBQUMsQ0FBUTtnQ0FBQ0YsSUFBSSxDQUFDRyxLQUFLOzs7Ozs7O29HQUN0QkYsQ0FBRzs7Z0NBQUMsQ0FBYztnQ0FBQ0QsSUFBSSxDQUFDSSxXQUFXOzs7Ozs7O29HQUNuQ0MsQ0FBRTs7Z0NBQUMsQ0FBTztnQ0FBQ0wsSUFBSSxDQUFDTCxJQUFJOzs7Ozs7O29HQUNwQlcsQ0FBRTs7Ozs7O21CQUpLTixJQUFJLENBQUNPLFVBQVU7Ozs7Ozs7O0FBU2pDLENBQUM7R0EzQ0s1QixLQUFLOztRQUVlRiwwREFBVztRQUNsQkYsd0RBQWM7UUFDS0Msd0RBQWM7OztLQUo5Q0csS0FBSztBQTZDWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdHMudHN4P2VmY2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIi4uL2hvb2tzL3JlZHV4XCI7XG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uL2hvb2tzL3VzZURlYm91bmNlXCI7XG5pbXBvcnQgeyBmZXRjaFBvc3RzIH0gZnJvbSBcIi4uL3N0b3JlL3JlZHVjZXJzL0FjdGlvbkNyZWF0b3JzXCI7XG5cbmNvbnN0IFBvc3RzID0gKCkgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBkZWJvdW5jZWRTZWFyY2ggPSB1c2VEZWJvdW5jZShmZXRjaFBvc3RzLCAyMjAwKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCB7IHBvc3RzLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VBcHBTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RSZWR1Y2VyXG4gICk7XG4gIGNvbnN0IHsgcXVlcnksIHNldFF1ZXJ5IH0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAvLyBjb25zdCBxdWVyeSA9IHtcbiAgLy8gICBzZWFyY2g6IFwiXCIsXG4gIC8vICAgdHlwZTogXCJuZXdcIixcbiAgLy8gfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUG9zdHMocXVlcnkpKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcblxuICAgIGRlYm91bmNlZFNlYXJjaChkaXNwYXRjaChmZXRjaFBvc3RzKGUudGFyZ2V0LnZhbHVlKSkpOyAvL9Cf0L7Qv9GA0L7QsdC+0LLQsNGC0Ywg0LfQtNC10YHRjCDRgNC10LDQu9C40LfQvtCy0LDRgtGMINC70L7Qs9C40LrRgyDQtNC10LHQvtGD0L3RgdCwXG5cbiAgICAvLyBkaXNwYXRjaChmZXRjaFBvc3RzKGUudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICB7aXNMb2FkaW5nICYmIDxoMT4gTG9hZGluZy4uLiA8L2gxPn1cbiAgICAgIHtlcnJvciAmJiA8aDE+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gxPn1cbiAgICAgIHtjb25zb2xlLmxvZyhwb3N0cyl9XG4gICAgICB7Lyoge09iamVjdC5rZXlzKHBvc3RzKX0gKi99XG4gICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtwb3N0LmV2ZW50X2RhdGV9PlxuICAgICAgICAgIDxoMj4gVGl0bGU6IHtwb3N0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgPGRpdj4gRGVzY3JpcHRpb246IHtwb3N0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgICAgIDxoMz4gVHlwZToge3Bvc3QudHlwZX08L2gzPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwidXNlRGVib3VuY2UiLCJmZXRjaFBvc3RzIiwiUG9zdHMiLCJ2YWx1ZSIsInNldFZhbHVlIiwiZGVib3VuY2VkU2VhcmNoIiwiZGlzcGF0Y2giLCJzdGF0ZSIsInBvc3RSZWR1Y2VyIiwicG9zdHMiLCJlcnJvciIsImlzTG9hZGluZyIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJpbnB1dCIsInR5cGUiLCJoMSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJwb3N0IiwiZGl2IiwiaDIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJociIsImV2ZW50X2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ })

});