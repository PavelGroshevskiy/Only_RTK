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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/YjE3MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/Posts.tsx":
/*!******************************!*\
  !*** ./components/Posts.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/ActionCreators */ \"./store/reducers/ActionCreators.ts\");\n\n\n\n\nconst Posts = ()=>{\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const { posts , error , isLoading  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.postReducer\n    );\n    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        search: \"\",\n        type: \"\"\n    });\n    const { 0: typingTimeout , 1: setTypingTimeout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(query));\n    }, [\n        query\n    ]);\n    const onChange = (e)=>{\n        const target = e.target.value;\n        setValue(target);\n        clearTimeout(typingTimeout);\n        const timeout = setTimeout(()=>{\n            dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(setQuery({\n                ...query,\n                search: target\n            })));\n        }, 1000);\n        setTypingTimeout(()=>timeout\n        );\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of posts\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setQuery({\n                        ...query,\n                        type: \"event\"\n                    })\n                ,\n                children: \"Event\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setQuery({\n                        ...query,\n                        type: \"new\"\n                    })\n                ,\n                children: \"New\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Loading... \"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 38,\n                columnNumber: 21\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 39,\n                columnNumber: 17\n            }, undefined),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" Title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" Description: \",\n                                post.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \" Type: \",\n                                post.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, post.event_date, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, undefined)\n            )\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEyQztBQUNvQjtBQUNGO0FBRTdELEtBQUssQ0FBQ0ssS0FBSyxPQUFTLENBQUM7SUFDbkIsS0FBSyxNQUFFQyxLQUFLLE1BQUVDLFFBQVEsTUFBSU4sK0NBQVEsQ0FBQyxDQUFFO0lBQ3JDLEtBQUssQ0FBQ08sUUFBUSxHQUFHTiw0REFBYztJQUMvQixLQUFLLENBQUMsQ0FBQyxDQUFDTyxLQUFLLEdBQUVDLEtBQUssR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBR1IsNERBQWMsRUFDL0NTLEtBQUssR0FBS0EsS0FBSyxDQUFDQyxXQUFXOztJQUU5QixLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJZCwrQ0FBUSxDQUFDLENBQUM7UUFBQ2UsTUFBTSxFQUFFLENBQUU7UUFBRUMsSUFBSSxFQUFFLENBQUU7SUFBQyxDQUFDO0lBQzNELEtBQUssTUFBRUMsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSWxCLCtDQUFRO0lBRWxERCxnREFBUyxLQUFPLENBQUM7UUFDZlEsUUFBUSxDQUFDSiwwRUFBVSxDQUFDVSxLQUFLLEVBQUUsQ0FBQztJQUM5QixDQUFDLEVBQUUsQ0FBQ0E7UUFBQUEsS0FBSztJQUFBLENBQUMsQ0FBQyxDQUFDO0lBRVosS0FBSyxDQUFDTSxRQUFRLElBQUlDLENBQU0sR0FBSyxDQUFDO1FBQzVCLEtBQUssQ0FBQ0MsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ2hCLEtBQUs7UUFDN0JDLFFBQVEsQ0FBQ2UsTUFBTSxDQUFDLENBQUM7UUFFakJDLFlBQVksQ0FBQ0wsYUFBYSxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDTSxPQUFPLEdBQW1CQyxVQUFVLEtBQU8sQ0FBQztZQUNoRGpCLFFBQVEsQ0FBQ0osMEVBQVUsQ0FBQ1csUUFBUSxDQUFDLENBQUM7bUJBQUlELEtBQUs7Z0JBQUVFLE1BQU0sRUFBRU0sTUFBTTtZQUFDLENBQUMsR0FBRyxDQUFDO1FBQy9ELENBQUMsRUFBRSxJQUFJO1FBQ1BILGdCQUFnQixLQUFPSyxPQUFPO1NBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsTUFBTTs7d0ZBRURFLENBQUU7MEJBQUMsQ0FBYTs7Ozs7O3dGQUNoQkMsQ0FBSztnQkFBQ1YsSUFBSSxFQUFDLENBQU07Z0JBQUNYLEtBQUssRUFBRUEsS0FBSztnQkFBRWMsUUFBUSxFQUFFQSxRQUFROzs7Ozs7d0ZBQ2xEUSxDQUFNO2dCQUFDQyxPQUFPLE1BQVFkLFFBQVEsQ0FBQyxDQUFDOzJCQUFJRCxLQUFLO3dCQUFFRyxJQUFJLEVBQUUsQ0FBTztvQkFBQyxDQUFDOzswQkFBRyxDQUU5RDs7Ozs7O3dGQUNDVyxDQUFNO2dCQUFDQyxPQUFPLE1BQVFkLFFBQVEsQ0FBQyxDQUFDOzJCQUFJRCxLQUFLO3dCQUFFRyxJQUFJLEVBQUUsQ0FBSztvQkFBQyxDQUFDOzswQkFBRyxDQUFHOzs7Ozs7WUFFOUROLFNBQVMsZ0ZBQUtlLENBQUU7MEJBQUMsQ0FBWTs7Ozs7O1lBQzdCaEIsS0FBSyxnRkFBS2dCLENBQUU7MEJBQUMsQ0FBb0I7Ozs7OztZQUNqQ2pCLEtBQUssQ0FBQ3FCLEdBQUcsRUFBRUMsSUFBSSwrRUFDYkMsQ0FBRzs7b0dBQ0RDLENBQUU7O2dDQUFDLENBQVE7Z0NBQUNGLElBQUksQ0FBQ0csS0FBSzs7Ozs7OztvR0FDdEJGLENBQUc7O2dDQUFDLENBQWM7Z0NBQUNELElBQUksQ0FBQ0ksV0FBVzs7Ozs7OztvR0FDbkNDLENBQUU7O2dDQUFDLENBQU87Z0NBQUNMLElBQUksQ0FBQ2QsSUFBSTs7Ozs7OztvR0FDcEJvQixDQUFFOzs7Ozs7bUJBSktOLElBQUksQ0FBQ08sVUFBVTs7Ozs7Ozs7QUFTakMsQ0FBQztBQUVELGlFQUFlakMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vY29tcG9uZW50cy9Qb3N0cy50c3g/ZWZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vaG9va3MvcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tIFwiLi4vc3RvcmUvcmVkdWNlcnMvQWN0aW9uQ3JlYXRvcnNcIjtcblxuY29uc3QgUG9zdHMgPSAoKSA9PiB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBwb3N0cywgZXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlQXBwU2VsZWN0b3IoXG4gICAgKHN0YXRlKSA9PiBzdGF0ZS5wb3N0UmVkdWNlclxuICApO1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKHsgc2VhcmNoOiBcIlwiLCB0eXBlOiBcIlwiIH0pO1xuICBjb25zdCBbdHlwaW5nVGltZW91dCwgc2V0VHlwaW5nVGltZW91dF0gPSB1c2VTdGF0ZTxOb2RlSlMuVGltZW91dD4oKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKGZldGNoUG9zdHMocXVlcnkpKTtcbiAgfSwgW3F1ZXJ5XSk7XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQudmFsdWU7XG4gICAgc2V0VmFsdWUodGFyZ2V0KTtcblxuICAgIGNsZWFyVGltZW91dCh0eXBpbmdUaW1lb3V0KTtcbiAgICBjb25zdCB0aW1lb3V0OiBOb2RlSlMuVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZmV0Y2hQb3N0cyhzZXRRdWVyeSh7IC4uLnF1ZXJ5LCBzZWFyY2g6IHRhcmdldCB9KSkpO1xuICAgIH0sIDEwMDApO1xuICAgIHNldFR5cGluZ1RpbWVvdXQoKCkgPT4gdGltZW91dCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkxpc3Qgb2YgcG9zdHM8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHsgLi4ucXVlcnksIHR5cGU6IFwiZXZlbnRcIiB9KX0+XG4gICAgICAgIEV2ZW50XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0UXVlcnkoeyAuLi5xdWVyeSwgdHlwZTogXCJuZXdcIiB9KX0+TmV3PC9idXR0b24+XG5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPGgxPiBMb2FkaW5nLi4uIDwvaDE+fVxuICAgICAge2Vycm9yICYmIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDE+fVxuICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17cG9zdC5ldmVudF9kYXRlfT5cbiAgICAgICAgICA8aDI+IFRpdGxlOiB7cG9zdC50aXRsZX08L2gyPlxuICAgICAgICAgIDxkaXY+IERlc2NyaXB0aW9uOiB7cG9zdC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICA8aDM+IFR5cGU6IHtwb3N0LnR5cGV9PC9oMz5cbiAgICAgICAgICA8aHIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImZldGNoUG9zdHMiLCJQb3N0cyIsInZhbHVlIiwic2V0VmFsdWUiLCJkaXNwYXRjaCIsInBvc3RzIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJzdGF0ZSIsInBvc3RSZWR1Y2VyIiwicXVlcnkiLCJzZXRRdWVyeSIsInNlYXJjaCIsInR5cGUiLCJ0eXBpbmdUaW1lb3V0Iiwic2V0VHlwaW5nVGltZW91dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaDEiLCJpbnB1dCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJwb3N0IiwiZGl2IiwiaDIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaDMiLCJociIsImV2ZW50X2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

/***/ }),

/***/ "./hooks/redux.ts":
/*!************************!*\
  !*** ./hooks/redux.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()\n;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy9yZWR1eC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQStEO0FBQ3RCO0FBR2xDLEtBQUssQ0FBQ0UsY0FBYyxPQUFTRCx3REFBVzs7QUFDeEMsS0FBSyxDQUFDRSxjQUFjLEdBQW9DSCxvREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2hvb2tzL3JlZHV4LnRzPzBjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgQXBwRGlzcGF0Y2gsIFJvb3RTdGF0ZSB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2ggPSAoKSA9PiB1c2VEaXNwYXRjaDxBcHBEaXNwYXRjaD4oKTtcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xuIl0sIm5hbWVzIjpbInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/redux.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Posts */ \"./components/Posts.tsx\");\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// export const getStaticProps = async () => {\n//   const response = await fetch(\n//     \"https://dev.retnback.only.com.ru/api/news/list \"\n//   );\n//   const posts = await response.json();\n//   return {\n//     props: { posts: posts.data },\n//   };\n// };\nconst store = (0,_store_store__WEBPACK_IMPORTED_MODULE_4__.setUpStore)();\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n        store: store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                            children: \"Only Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                            name: \"description\",\n                            content: \"Generated by create next app\"\n                        }, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQzRCO0FBQ1U7QUFDQztBQUNJO0FBQ0c7QUFFOUMsRUFBOEM7QUFDOUMsRUFBa0M7QUFDbEMsRUFBd0Q7QUFDeEQsRUFBTztBQUVQLEVBQXlDO0FBRXpDLEVBQWE7QUFDYixFQUFvQztBQUNwQyxFQUFPO0FBQ1AsRUFBSztBQUVMLEtBQUssQ0FBQ0ssS0FBSyxHQUFHRix3REFBVTtBQUV4QixLQUFLLENBQUNHLElBQUksT0FBbUIsQ0FBQztJQUM1QixNQUFNLDZFQUNITCxpREFBUTtRQUFDSSxLQUFLLEVBQUVBLEtBQUs7OEZBQ25CRSxDQUFHO1lBQUNDLFNBQVMsRUFBRUosMEVBQWdCOzs0RkFDN0JKLGtEQUFJOztvR0FDRlUsQ0FBSztzQ0FBQyxDQUFTOzs7Ozs7b0dBQ2ZDLENBQUk7NEJBQUNDLElBQUksRUFBQyxDQUFhOzRCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7Ozs7Ozs7Ozs0RkFFaEVYLHlEQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWQsQ0FBQztBQUVELGlFQUFlSSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgUG9zdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdHNcIjtcbmltcG9ydCB7IHNldFVwU3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuLy8gZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuLy8gICAgIFwiaHR0cHM6Ly9kZXYucmV0bmJhY2sub25seS5jb20ucnUvYXBpL25ld3MvbGlzdCBcIlxuLy8gICApO1xuXG4vLyAgIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgcHJvcHM6IHsgcG9zdHM6IHBvc3RzLmRhdGEgfSxcbi8vICAgfTtcbi8vIH07XG5cbmNvbnN0IHN0b3JlID0gc2V0VXBTdG9yZSgpO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPk9ubHkgTmV4dDwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxQb3N0cyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlByb3ZpZGVyIiwiUG9zdHMiLCJzZXRVcFN0b3JlIiwic3R5bGVzIiwic3RvcmUiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/reducers/ActionCreators.ts":
/*!******************************************!*\
  !*** ./store/reducers/ActionCreators.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"fetchPosts\": () => (/* binding */ fetchPosts)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async (query)=>{\n    const response = await fetch(`https://dev.retnback.only.com.ru/api/news/list?search=` + query.search + \"&type=\" + query.type);\n    const posts = await response.json();\n    if (!posts) {\n        return {\n            notFound: true\n        };\n    }\n    return posts.data;\n};\nconst fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"post/fetch\", getStaticProps);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBRTVDLEtBQUssQ0FBQ0MsY0FBYyxVQUFVQyxLQUFVLEdBQUssQ0FBQztJQUNuRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssRUFDekIsc0RBQXNELElBQ3JERixLQUFLLENBQUNHLE1BQU0sR0FDWixDQUFRLFVBQ1JILEtBQUssQ0FBQ0ksSUFBSTtJQUVkLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0osUUFBUSxDQUFDSyxJQUFJO0lBRWpDLEVBQUUsR0FBR0QsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsQ0FBQztZQUNORSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJO0FBQ25CLENBQUM7QUFFTSxLQUFLLENBQUNDLFVBQVUsR0FBR1gsa0VBQWdCLENBQUMsQ0FBWSxhQUFFQyxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3RvcmUvcmVkdWNlcnMvQWN0aW9uQ3JlYXRvcnMudHM/NmJiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHF1ZXJ5OiBhbnkpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kZXYucmV0bmJhY2sub25seS5jb20ucnUvYXBpL25ld3MvbGlzdD9zZWFyY2g9YCArXG4gICAgICBxdWVyeS5zZWFyY2ggK1xuICAgICAgXCImdHlwZT1cIiArXG4gICAgICBxdWVyeS50eXBlXG4gICk7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIGlmICghcG9zdHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90Rm91bmQ6IHRydWUsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcG9zdHMuZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzID0gY3JlYXRlQXN5bmNUaHVuayhcInBvc3QvZmV0Y2hcIiwgZ2V0U3RhdGljUHJvcHMpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsInNlYXJjaCIsInR5cGUiLCJwb3N0cyIsImpzb24iLCJub3RGb3VuZCIsImRhdGEiLCJmZXRjaFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/ActionCreators.ts\n");

/***/ }),

/***/ "./store/reducers/postSlice.ts":
/*!*************************************!*\
  !*** ./store/reducers/postSlice.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postSlice\": () => (/* binding */ postSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ActionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionCreators */ \"./store/reducers/ActionCreators.ts\");\n\n\nconst initialState = {\n    posts: [],\n    isLoading: false,\n    error: \"\"\n};\nconst postSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"post\",\n    initialState,\n    reducers: {},\n    extraReducers: {\n        [_ActionCreators__WEBPACK_IMPORTED_MODULE_1__.fetchPosts.fulfilled.type]: (state, action)=>{\n            state.isLoading = false;\n            state.error = \"\";\n            state.posts = action.payload;\n        },\n        [_ActionCreators__WEBPACK_IMPORTED_MODULE_1__.fetchPosts.pending.type]: (state)=>{\n            state.isLoading = true;\n        },\n        [_ActionCreators__WEBPACK_IMPORTED_MODULE_1__.fetchPosts.rejected.type]: (state, action)=>{\n            state.isLoading = false;\n            state.error = action.payload;\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9wb3N0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkQ7QUFFaEI7QUFRN0MsS0FBSyxDQUFDRSxZQUFZLEdBQWMsQ0FBQztJQUMvQkMsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNUQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsS0FBSyxFQUFFLENBQUU7QUFDWCxDQUFDO0FBRU0sS0FBSyxDQUFDQyxTQUFTLEdBQUdOLDZEQUFXLENBQUMsQ0FBQztJQUNwQ08sSUFBSSxFQUFFLENBQU07SUFDWkwsWUFBWTtJQUNaTSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ1pDLGFBQWEsRUFBRSxDQUFDO1NBQ2JSLHNFQUF5QixJQUFJVyxLQUFLLEVBQUVDLE1BQThCLEdBQUssQ0FBQztZQUN2RUQsS0FBSyxDQUFDUixTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3hCUSxLQUFLLENBQUNQLEtBQUssR0FBRyxDQUFFLEVBQUM7WUFDakJPLEtBQUssQ0FBQ1QsS0FBSyxHQUFHVSxNQUFNLENBQUNDLE9BQU8sQ0FBQztRQUMvQixDQUFDO1NBQ0FiLG9FQUF1QixJQUFJVyxLQUFLLEdBQUssQ0FBQztZQUNyQ0EsS0FBSyxDQUFDUixTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUM7U0FDQUgscUVBQXdCLElBQUlXLEtBQUssRUFBRUMsTUFBNkIsR0FBSyxDQUFDO1lBQ3JFRCxLQUFLLENBQUNSLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDeEJRLEtBQUssQ0FBQ1AsS0FBSyxHQUFHUSxNQUFNLENBQUNDLE9BQU8sQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxpRUFBZVIsU0FBUyxDQUFDVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9yZWR1Y2Vycy9wb3N0U2xpY2UudHM/YTZhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBJUG9zdCB9IGZyb20gXCIuLi8uLi90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gXCIuL0FjdGlvbkNyZWF0b3JzXCI7XG5cbmludGVyZmFjZSBQb3N0U3RhdGUge1xuICBwb3N0czogSVBvc3RbXTtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG5jb25zdCBpbml0aWFsU3RhdGU6IFBvc3RTdGF0ZSA9IHtcbiAgcG9zdHM6IFtdLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICBlcnJvcjogXCJcIixcbn07XG5cbmV4cG9ydCBjb25zdCBwb3N0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwicG9zdFwiLFxuICBpbml0aWFsU3RhdGUsXG4gIHJlZHVjZXJzOiB7fSxcbiAgZXh0cmFSZWR1Y2Vyczoge1xuICAgIFtmZXRjaFBvc3RzLmZ1bGZpbGxlZC50eXBlXTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248SVBvc3RbXT4pID0+IHtcbiAgICAgIHN0YXRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc3RhdGUuZXJyb3IgPSBcIlwiO1xuICAgICAgc3RhdGUucG9zdHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIFtmZXRjaFBvc3RzLnBlbmRpbmcudHlwZV06IChzdGF0ZSkgPT4ge1xuICAgICAgc3RhdGUuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgICB9LFxuICAgIFtmZXRjaFBvc3RzLnJlamVjdGVkLnR5cGVdOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XG4gICAgICBzdGF0ZS5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBwb3N0U2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImZldGNoUG9zdHMiLCJpbml0aWFsU3RhdGUiLCJwb3N0cyIsImlzTG9hZGluZyIsImVycm9yIiwicG9zdFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiZXh0cmFSZWR1Y2VycyIsImZ1bGZpbGxlZCIsInR5cGUiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJwZW5kaW5nIiwicmVqZWN0ZWQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/postSlice.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setUpStore\": () => (/* binding */ setUpStore)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_postSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/postSlice */ \"./store/reducers/postSlice.ts\");\n\n\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    postReducer: _reducers_postSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\nconst setUpStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: rootReducer\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtFO0FBQ3BCO0FBRTlDLEtBQUssQ0FBQ0csV0FBVyxHQUFHSCxpRUFBZSxDQUFDLENBQUM7SUFDbkNFLFdBQVc7QUFDYixDQUFDO0FBRU0sS0FBSyxDQUFDRSxVQUFVLE9BQVMsQ0FBQztJQUMvQixNQUFNLENBQUNILGdFQUFjLENBQUMsQ0FBQztRQUNyQkksT0FBTyxFQUFFRixXQUFXO0lBQ3RCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vc3RvcmUvc3RvcmUudHM/MTJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMsIGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBwb3N0UmVkdWNlciBmcm9tIFwiLi9yZWR1Y2Vycy9wb3N0U2xpY2VcIjtcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBwb3N0UmVkdWNlcixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNvbmZpZ3VyZVN0b3JlKHtcbiAgICByZWR1Y2VyOiByb290UmVkdWNlcixcbiAgfSk7XG59O1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiByb290UmVkdWNlcj47XG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIHNldFVwU3RvcmU+O1xuZXhwb3J0IHR5cGUgQXBwRGlzcGF0Y2ggPSBBcHBTdG9yZVtcImRpc3BhdGNoXCJdO1xuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwicG9zdFJlZHVjZXIiLCJyb290UmVkdWNlciIsInNldFVwU3RvcmUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();