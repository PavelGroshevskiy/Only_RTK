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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/redux */ \"./hooks/redux.ts\");\n/* harmony import */ var _store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/reducers/ActionCreators */ \"./store/reducers/ActionCreators.ts\");\n\n\n\n\nconst Posts = ()=>{\n    console.log(\"rerender\");\n    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const { posts , error , isLoading  } = (0,_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.postReducer\n    );\n    const { 0: query , 1: setQuery  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        search: \"\",\n        type: \"\"\n    });\n    const { 0: typingTimeout , 1: setTypingTimeout  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: isChecked , 1: setChecked  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(query));\n    }, [\n        query\n    ]);\n    const onChange = (e)=>{\n        const target = e.target.value;\n        setValue(target);\n        clearTimeout(typingTimeout);\n        const timeout = setTimeout(()=>{\n            dispatch((0,_store_reducers_ActionCreators__WEBPACK_IMPORTED_MODULE_3__.fetchPosts)(setQuery({\n                ...query,\n                search: target\n            })));\n        }, 1000);\n        setTypingTimeout(()=>timeout\n        );\n    };\n    const handleCheckedEvent = ({ target: { checked  }  })=>{\n        setChecked(checked);\n        checked ? setQuery({\n            ...query,\n            type: \"event\"\n        }) : setQuery({\n            ...query,\n            type: \"\"\n        });\n    };\n    const handleCheckedNew = ({ target: { checked  }  })=>{\n        setChecked(checked);\n        checked ? setQuery({\n            ...query,\n            type: \"new\"\n        }) : setQuery({\n            ...query,\n            type: \"\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"List of posts\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: value,\n                onChange: onChange\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"\",\n                children: [\n                    \"Event\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: handleCheckedEvent\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"\",\n                children: [\n                    \"New\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        onChange: handleCheckedNew\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \" Loading... \"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 57,\n                columnNumber: 21\n            }, undefined),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Something went wrong\"\n            }, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                lineNumber: 58,\n                columnNumber: 17\n            }, undefined),\n            console.log(posts),\n            posts.map((post)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \" Title: \",\n                                post.title\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                \" Description: \",\n                                post.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                \" Type: \",\n                                post.type\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                            fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, post.event_date, true, {\n                    fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/components/Posts.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined)\n            )\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyxDQUFFOztvQkFBQyxDQUVoQjtnR0FBQ0YsQ0FBSzt3QkFBQ2YsSUFBSSxFQUFFLENBQVU7d0JBQUVLLFFBQVEsRUFBRU0sa0JBQWtCOzs7Ozs7Ozs7Ozs7d0ZBRXRESyxDQUFLO2dCQUFDQyxPQUFPLEVBQUMsQ0FBRTs7b0JBQUMsQ0FFaEI7Z0dBQUNGLENBQUs7d0JBQUNmLElBQUksRUFBRSxDQUFVO3dCQUFFSyxRQUFRLEVBQUVRLGdCQUFnQjs7Ozs7Ozs7Ozs7O1lBR3BEbkIsU0FBUyxnRkFBS29CLENBQUU7MEJBQUMsQ0FBWTs7Ozs7O1lBQzdCckIsS0FBSyxnRkFBS3FCLENBQUU7MEJBQUMsQ0FBb0I7Ozs7OztZQUNqQzNCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxLQUFLO1lBQ2pCQSxLQUFLLENBQUMwQixHQUFHLEVBQUVDLElBQUksK0VBQ2JDLENBQUc7O29HQUNEQyxDQUFFOztnQ0FBQyxDQUFRO2dDQUFDRixJQUFJLENBQUNHLEtBQUs7Ozs7Ozs7b0dBQ3RCRixDQUFHOztnQ0FBQyxDQUFjO2dDQUFDRCxJQUFJLENBQUNJLFdBQVc7Ozs7Ozs7b0dBQ25DQyxDQUFFOztnQ0FBQyxDQUFPO2dDQUFDTCxJQUFJLENBQUNuQixJQUFJOzs7Ozs7O29HQUNwQnlCLENBQUU7Ozs7OzttQkFKS04sSUFBSSxDQUFDTyxVQUFVOzs7Ozs7OztBQVNqQyxDQUFDO0FBRUQsaUVBQWV4QyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL1Bvc3RzLnRzeD9lZmNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCIuLi9ob29rcy9yZWR1eFwiO1xuaW1wb3J0IHsgZmV0Y2hQb3N0cyB9IGZyb20gXCIuLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9yc1wiO1xuXG5jb25zdCBQb3N0cyA9ICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJyZXJlbmRlclwiKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICBjb25zdCB7IHBvc3RzLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VBcHBTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLnBvc3RSZWR1Y2VyXG4gICk7XG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoeyBzZWFyY2g6IFwiXCIsIHR5cGU6IFwiXCIgfSk7XG4gIGNvbnN0IFt0eXBpbmdUaW1lb3V0LCBzZXRUeXBpbmdUaW1lb3V0XSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW2lzQ2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHF1ZXJ5KSk7XG4gIH0sIFtxdWVyeV0pO1xuXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHNldFZhbHVlKHRhcmdldCk7XG4gICAgY2xlYXJUaW1lb3V0KHR5cGluZ1RpbWVvdXQpO1xuICAgIGNvbnN0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaFBvc3RzKHNldFF1ZXJ5KHsgLi4ucXVlcnksIHNlYXJjaDogdGFyZ2V0IH0pKSk7XG4gICAgfSwgMTAwMCk7XG4gICAgc2V0VHlwaW5nVGltZW91dCgoKSA9PiB0aW1lb3V0KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja2VkRXZlbnQgPSAoeyB0YXJnZXQ6IHsgY2hlY2tlZCB9IH0pID0+IHtcbiAgICBzZXRDaGVja2VkKGNoZWNrZWQpO1xuICAgIGNoZWNrZWRcbiAgICAgID8gc2V0UXVlcnkoeyAuLi5xdWVyeSwgdHlwZTogXCJldmVudFwiIH0pXG4gICAgICA6IHNldFF1ZXJ5KHsgLi4ucXVlcnksIHR5cGU6IFwiXCIgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tlZE5ldyA9ICh7IHRhcmdldDogeyBjaGVja2VkIH0gfSkgPT4ge1xuICAgIHNldENoZWNrZWQoY2hlY2tlZCk7XG4gICAgY2hlY2tlZFxuICAgICAgPyBzZXRRdWVyeSh7IC4uLnF1ZXJ5LCB0eXBlOiBcIm5ld1wiIH0pXG4gICAgICA6IHNldFF1ZXJ5KHsgLi4ucXVlcnksIHR5cGU6IFwiXCIgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPkxpc3Qgb2YgcG9zdHM8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IC8+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIlwiPlxuICAgICAgICBFdmVudFxuICAgICAgICA8aW5wdXQgdHlwZT17XCJjaGVja2JveFwifSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZEV2ZW50fSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiXCI+XG4gICAgICAgIE5ld1xuICAgICAgICA8aW5wdXQgdHlwZT17XCJjaGVja2JveFwifSBvbkNoYW5nZT17aGFuZGxlQ2hlY2tlZE5ld30gLz5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIHtpc0xvYWRpbmcgJiYgPGgxPiBMb2FkaW5nLi4uIDwvaDE+fVxuICAgICAge2Vycm9yICYmIDxoMT5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDE+fVxuICAgICAge2NvbnNvbGUubG9nKHBvc3RzKX1cbiAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Bvc3QuZXZlbnRfZGF0ZX0+XG4gICAgICAgICAgPGgyPiBUaXRsZToge3Bvc3QudGl0bGV9PC9oMj5cbiAgICAgICAgICA8ZGl2PiBEZXNjcmlwdGlvbjoge3Bvc3QuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgPGgzPiBUeXBlOiB7cG9zdC50eXBlfTwvaDM+XG4gICAgICAgICAgPGhyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0cztcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJmZXRjaFBvc3RzIiwiUG9zdHMiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRpc3BhdGNoIiwicG9zdHMiLCJlcnJvciIsImlzTG9hZGluZyIsInN0YXRlIiwicG9zdFJlZHVjZXIiLCJxdWVyeSIsInNldFF1ZXJ5Iiwic2VhcmNoIiwidHlwZSIsInR5cGluZ1RpbWVvdXQiLCJzZXRUeXBpbmdUaW1lb3V0IiwiaXNDaGVja2VkIiwic2V0Q2hlY2tlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImNsZWFyVGltZW91dCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlQ2hlY2tlZEV2ZW50IiwiY2hlY2tlZCIsImhhbmRsZUNoZWNrZWROZXciLCJoMSIsImlucHV0IiwibGFiZWwiLCJodG1sRm9yIiwibWFwIiwicG9zdCIsImRpdiIsImgyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImgzIiwiaHIiLCJldmVudF9kYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Posts.tsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Posts */ \"./components/Posts.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// const store = setUpStore();\n// const store = useMemo(() => setUpStore(), []);\nconst Home = ()=>{\n    return(// <Provider store={store}>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Only Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Posts__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pavelgrosevskij/Documents/only_rtk/pages/index.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzRCO0FBRVc7QUFFTztBQUU5QyxFQUE4QjtBQUU5QixFQUFpRDtBQUVqRCxLQUFLLENBQUNHLElBQUksT0FBbUIsQ0FBQztJQUM1QixNQUFNLENBQ0osRUFBMkI7Z0ZBQzFCQyxDQUFHO1FBQUNDLFNBQVMsRUFBRUgsMEVBQWdCOzt3RkFDN0JGLGtEQUFJOztnR0FDRk8sQ0FBSztrQ0FBQyxDQUFTOzs7Ozs7Z0dBQ2ZDLENBQUk7d0JBQUNDLElBQUksRUFBQyxDQUFhO3dCQUFDQyxPQUFPLEVBQUMsQ0FBOEI7Ozs7Ozs7Ozs7Ozt3RkFFaEVULHlEQUFLOzs7Ozs7Ozs7OztBQUlaLENBQUM7QUFFRCxpRUFBZUUsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RzXCI7XG5pbXBvcnQgeyBzZXRVcFN0b3JlIH0gZnJvbSBcIi4uL3N0b3JlL3N0b3JlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5cbi8vIGNvbnN0IHN0b3JlID0gc2V0VXBTdG9yZSgpO1xuXG4vLyBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gc2V0VXBTdG9yZSgpLCBbXSk7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIC8vIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+T25seSBOZXh0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFBvc3RzIC8+XG4gICAgPC9kaXY+XG4gICAgLy8gPC9Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsIlBvc3RzIiwic3R5bGVzIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/reducers/ActionCreators.ts":
/*!******************************************!*\
  !*** ./store/reducers/ActionCreators.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"fetchPosts\": () => (/* binding */ fetchPosts)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst getStaticProps = async (query)=>{\n    const response = await fetch(`https://dev.retnback.only.com.ru/api/news/list?search=` + query.search + \"&type=\" + query.type);\n    const posts = await response.json();\n    if (!posts) {\n        return {\n            notFound: true\n        };\n    }\n    return posts.data;\n// return {\n//   props: {\n//     initialReduxState: {\n//       posts: posts.data,\n//     },\n//   },\n// };\n};\nconst fetchPosts = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"post/fetch\", getStaticProps);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9ycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBRTVDLEtBQUssQ0FBQ0MsY0FBYyxVQUFVQyxLQUFVLEdBQUssQ0FBQztJQUNuRCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssRUFDekIsc0RBQXNELElBQ3JERixLQUFLLENBQUNHLE1BQU0sR0FDWixDQUFRLFVBQ1JILEtBQUssQ0FBQ0ksSUFBSTtJQUVkLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEtBQUssQ0FBQ0osUUFBUSxDQUFDSyxJQUFJO0lBRWpDLEVBQUUsR0FBR0QsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsQ0FBQztZQUNORSxRQUFRLEVBQUUsSUFBSTtRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUNELE1BQU0sQ0FBQ0YsS0FBSyxDQUFDRyxJQUFJO0FBQ2pCLEVBQVc7QUFDWCxFQUFhO0FBQ2IsRUFBMkI7QUFDM0IsRUFBMkI7QUFDM0IsRUFBUztBQUNULEVBQU87QUFDUCxFQUFLO0FBQ1AsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsVUFBVSxHQUFHWCxrRUFBZ0IsQ0FBQyxDQUFZLGFBQUVDLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9yZWR1Y2Vycy9BY3Rpb25DcmVhdG9ycy50cz82YmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAocXVlcnk6IGFueSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2Rldi5yZXRuYmFjay5vbmx5LmNvbS5ydS9hcGkvbmV3cy9saXN0P3NlYXJjaD1gICtcbiAgICAgIHF1ZXJ5LnNlYXJjaCArXG4gICAgICBcIiZ0eXBlPVwiICtcbiAgICAgIHF1ZXJ5LnR5cGVcbiAgKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKCFwb3N0cykge1xuICAgIHJldHVybiB7XG4gICAgICBub3RGb3VuZDogdHJ1ZSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBwb3N0cy5kYXRhO1xuICAvLyByZXR1cm4ge1xuICAvLyAgIHByb3BzOiB7XG4gIC8vICAgICBpbml0aWFsUmVkdXhTdGF0ZToge1xuICAvLyAgICAgICBwb3N0czogcG9zdHMuZGF0YSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzID0gY3JlYXRlQXN5bmNUaHVuayhcInBvc3QvZmV0Y2hcIiwgZ2V0U3RhdGljUHJvcHMpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFzeW5jVGh1bmsiLCJnZXRTdGF0aWNQcm9wcyIsInF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsInNlYXJjaCIsInR5cGUiLCJwb3N0cyIsImpzb24iLCJub3RGb3VuZCIsImRhdGEiLCJmZXRjaFBvc3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/reducers/ActionCreators.ts\n");

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