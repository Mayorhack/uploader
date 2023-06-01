"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard/documents",{

/***/ "./src/pages/dashboard/documents/index.jsx":
/*!*************************************************!*\
  !*** ./src/pages/dashboard/documents/index.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Button */ \"./src/components/Button.jsx\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Card */ \"./src/components/Card.jsx\");\n/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Overlay */ \"./src/components/Overlay.jsx\");\n/* harmony import */ var _components_tables_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/tables/Table */ \"./src/components/tables/Table.jsx\");\n/* harmony import */ var _data_tableData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/data/tableData */ \"./src/data/tableData.js\");\n/* harmony import */ var _utilities_fetchFunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utilities/fetchFunction */ \"./src/utilities/fetchFunction.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst Document = ()=>{\n    _s();\n    const [showDeleteModal, setShowDeleteModal] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);\n    const [getTableRow, setGetTableRow] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(\"\");\n    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([\n        \"documents\"\n    ], ()=>{\n        return _utilities_fetchFunction__WEBPACK_IMPORTED_MODULE_6__.publicFetch.request({\n            url: \"dashboard/document/getall\"\n        });\n    });\n    const deleteDocument = ()=>{\n        setShowDeleteModal(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"my-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Filter\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_tables_Table__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    columns: _data_tableData__WEBPACK_IMPORTED_MODULE_5__.columns,\n                    onClick: deleteDocument,\n                    setTableRow: (row)=>setGetTableRow(row),\n                    data: (data === null || data === void 0 ? void 0 : data.data) || []\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Overlay__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                openState: showDeleteModal,\n                onClick: ()=>setShowDeleteModal(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-md text-center w-full space-y-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid place-items-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fi__WEBPACK_IMPORTED_MODULE_9__.FiTrash2, {\n                                className: \"text-red-600 text-center border-2 border-red-500 p-2 rounded-full \",\n                                size: \"70px\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: \"text-2xl font-semibold \",\n                            children: \"You are about to delete this document\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"font-medium text-highlight mr-2\",\n                                    children: getTableRow.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                \"will be deleted permamently\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                \" Are you sure?\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-7 items-center justify-end\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    variant: \"outlined\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    className: \"bg-red-500 hover:bg-red-400\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\m-shodipo\\\\Documents\\\\uploader\\\\uploader\\\\src\\\\pages\\\\dashboard\\\\documents\\\\index.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Document, \"p0gRti3Z3zi0EZESQRfuvW6HV8k=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery\n    ];\n});\n_c = Document;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Document);\nvar _c;\n$RefreshReg$(_c, \"Document\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2RvY3VtZW50cy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0o7QUFDTTtBQUNHO0FBQ0g7QUFDYTtBQUNQO0FBQ2hCO0FBQ1M7QUFFekMsTUFBTVMsV0FBVyxJQUFNOztJQUNyQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDNUQsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sRUFBRU8sS0FBSSxFQUFFLEdBQUdSLCtEQUFRQSxDQUFDO1FBQUM7S0FBWSxFQUFFLElBQU07UUFDN0MsT0FBT0QseUVBQW1CLENBQUM7WUFDekJXLEtBQUs7UUFDUDtJQUNGO0lBQ0EsTUFBTUMsaUJBQWlCLElBQU07UUFDM0JOLG1CQUFtQixJQUFJO0lBQ3pCO0lBRUEscUJBQ0UsOERBQUNPOzswQkFDQyw4REFBQ2pCLHdEQUFJQTtnQkFBQ2tCLFdBQVU7MEJBQ2QsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFTiw4REFBQ25CLHdEQUFJQTswQkFDSCw0RUFBQ0UsZ0VBQUtBO29CQUNKQyxTQUFTQSxvREFBT0E7b0JBQ2hCaUIsU0FBU0o7b0JBQ1RLLGFBQWEsQ0FBQ0MsTUFBUVYsZUFBZVU7b0JBQ3JDVCxNQUFNQSxDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1BLElBQUksS0FBSSxFQUFFOzs7Ozs7Ozs7OzswQkFHMUIsOERBQUNaLDJEQUFPQTtnQkFDTnNCLFdBQVdkO2dCQUNYVyxTQUFTLElBQU1WLG1CQUFtQixLQUFLOzBCQUV2Qyw0RUFBQ087b0JBQUlDLFdBQVc7O3NDQUNkLDhEQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ1gsb0RBQVFBO2dDQUNQVyxXQUFVO2dDQUNWTSxNQUFNOzs7Ozs7Ozs7OztzQ0FJViw4REFBQ0M7NEJBQUdQLFdBQVU7c0NBQTBCOzs7Ozs7c0NBR3hDLDhEQUFDUTs7OENBQ0MsOERBQUNDO29DQUFLVCxXQUFVOzhDQUNiUCxZQUFZaUIsSUFBSTs7Ozs7O2dDQUNaOzhDQUVQLDhEQUFDQzs7Ozs7Z0NBQUs7Ozs7Ozs7c0NBRVIsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ25CLDBEQUFNQTtvQ0FBQytCLFNBQVE7OENBQVc7Ozs7Ozs4Q0FDM0IsOERBQUMvQiwwREFBTUE7b0NBQUNtQixXQUFXOzhDQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUQ7R0F2RE1WOztRQUdhSCwyREFBUUE7OztLQUhyQkc7QUF5RE4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9kb2N1bWVudHMvaW5kZXguanN4PzU3YjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAL2NvbXBvbmVudHMvQ2FyZCdcclxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnQC9jb21wb25lbnRzL092ZXJsYXknXHJcbmltcG9ydCBUYWJsZSBmcm9tICdAL2NvbXBvbmVudHMvdGFibGVzL1RhYmxlJ1xyXG5pbXBvcnQgeyBjb2x1bW5zIH0gZnJvbSAnQC9kYXRhL3RhYmxlRGF0YSdcclxuaW1wb3J0IHsgcHVibGljRmV0Y2ggfSBmcm9tICdAL3V0aWxpdGllcy9mZXRjaEZ1bmN0aW9uJ1xyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmlUcmFzaDIgfSBmcm9tICdyZWFjdC1pY29ucy9maSdcclxuXHJcbmNvbnN0IERvY3VtZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzaG93RGVsZXRlTW9kYWwsIHNldFNob3dEZWxldGVNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbZ2V0VGFibGVSb3csIHNldEdldFRhYmxlUm93XSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoWydkb2N1bWVudHMnXSwgKCkgPT4ge1xyXG4gICAgcmV0dXJuIHB1YmxpY0ZldGNoLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6ICdkYXNoYm9hcmQvZG9jdW1lbnQvZ2V0YWxsJyxcclxuICAgIH0pXHJcbiAgfSlcclxuICBjb25zdCBkZWxldGVEb2N1bWVudCA9ICgpID0+IHtcclxuICAgIHNldFNob3dEZWxldGVNb2RhbCh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICA8aDM+RmlsdGVyPC9oMz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8Q2FyZD5cclxuICAgICAgICA8VGFibGVcclxuICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICBvbkNsaWNrPXtkZWxldGVEb2N1bWVudH1cclxuICAgICAgICAgIHNldFRhYmxlUm93PXsocm93KSA9PiBzZXRHZXRUYWJsZVJvdyhyb3cpfVxyXG4gICAgICAgICAgZGF0YT17ZGF0YT8uZGF0YSB8fCBbXX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxPdmVybGF5XHJcbiAgICAgICAgb3BlblN0YXRlPXtzaG93RGVsZXRlTW9kYWx9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd0RlbGV0ZU1vZGFsKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWF4LXctbWQgdGV4dC1jZW50ZXIgdy1mdWxsIHNwYWNlLXktNSd9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHBsYWNlLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8RmlUcmFzaDJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC02MDAgdGV4dC1jZW50ZXIgYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAgcC0yIHJvdW5kZWQtZnVsbCBcIlxyXG4gICAgICAgICAgICAgIHNpemU9eyc3MHB4J31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIFwiPlxyXG4gICAgICAgICAgICBZb3UgYXJlIGFib3V0IHRvIGRlbGV0ZSB0aGlzIGRvY3VtZW50XHJcbiAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtaGlnaGxpZ2h0IG1yLTJcIj5cclxuICAgICAgICAgICAgICB7Z2V0VGFibGVSb3cubmFtZX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB3aWxsIGJlIGRlbGV0ZWQgcGVybWFtZW50bHlcclxuICAgICAgICAgICAgPGJyIC8+IEFyZSB5b3Ugc3VyZT9cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNyBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIj5DYW5jZWw8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9eydiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC00MDAnfT5EZWxldGU8L0J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L092ZXJsYXk+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERvY3VtZW50XHJcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJDYXJkIiwiT3ZlcmxheSIsIlRhYmxlIiwiY29sdW1ucyIsInB1YmxpY0ZldGNoIiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIkZpVHJhc2gyIiwiRG9jdW1lbnQiLCJzaG93RGVsZXRlTW9kYWwiLCJzZXRTaG93RGVsZXRlTW9kYWwiLCJnZXRUYWJsZVJvdyIsInNldEdldFRhYmxlUm93IiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJkZWxldGVEb2N1bWVudCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwib25DbGljayIsInNldFRhYmxlUm93Iiwicm93Iiwib3BlblN0YXRlIiwic2l6ZSIsImg0IiwicCIsInNwYW4iLCJuYW1lIiwiYnIiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/documents/index.jsx\n"));

/***/ })

});