webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/common/Layout/Layout.js":
/*!********************************************!*\
  !*** ./components/common/Layout/Layout.js ***!
  \********************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Layout\", function() { return Layout; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.modern.js\");\n/* harmony import */ var react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toggle-dark-mode */ \"./node_modules/react-toggle-dark-mode/dist/index.js\");\n/* harmony import */ var react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_6__);\n\n\nvar _jsxFileName = \"/home/bill/code/nextjs-starter-blog/components/common/Layout/Layout.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Layout(_ref) {\n  var children = _ref.children;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"w-full min-h-screen bg-gray-100 dark:bg-gray-700 dark:text-white\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"max-w-screen-sm px-4 py-12 mx-auto antialiased font-body\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Header, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        children: children\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        className: \"text-lg font-light\",\n        children: [\"\\xA9 \", new Date().getFullYear(), \" If you have any questions please feel free to \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: \"mailto:a8508235@gmail.com\",\n          children: \"contact me!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 86\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n_c = Layout;\n\nvar Header = function Header() {\n  _s();\n\n  var _useTheme = Object(next_themes__WEBPACK_IMPORTED_MODULE_5__[\"useTheme\"])(),\n      setTheme = _useTheme.setTheme,\n      resolvedTheme = _useTheme.resolvedTheme;\n\n  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])(),\n      pathname = _useRouter.pathname;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      mounted = _useState[0],\n      setMounted = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    return setMounted(true);\n  }, []);\n\n  var toggleDarkMode = function toggleDarkMode(checked) {\n    var isDarkMode = checked;\n    if (isDarkMode) setTheme(\"dark\");else setTheme(\"light\");\n  };\n\n  var isRoot = pathname === \"/\";\n  var isDarkMode = resolvedTheme === \"dark\";\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"flex items-center justify-between \", {\n      \"mb-8\": isRoot,\n      \"mb-2\": !isRoot\n    }),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"max-w-md\",\n      children: isRoot ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(LargeTitle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SmallTitle, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 36\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), mounted && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_toggle_dark_mode__WEBPACK_IMPORTED_MODULE_6__[\"DarkModeSwitch\"], {\n      checked: isDarkMode,\n      onChange: toggleDarkMode,\n      className: isRoot ? 28 : 24\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Header, \"YaNft18cBYNRnTx/PWRMJWget2s=\", false, function () {\n  return [next_themes__WEBPACK_IMPORTED_MODULE_5__[\"useTheme\"], next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c2 = Header;\n\nvar LargeTitle = function LargeTitle() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"text-3xl font-black leading-none text-blue-800 no-underline font-display\", \"sm:text-5xl\", \"dark:text-blue-400\"),\n        children: \"Minimal blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = LargeTitle;\n\nvar SmallTitle = function SmallTitle() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      href: \"/\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"text-2xl font-black text-blue-800 no-underline font-display\", \"dark:text-blue-400\"),\n        children: \"Minimal blog\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 3\n  }, _this);\n};\n\n_c4 = SmallTitle;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Layout\");\n$RefreshReg$(_c2, \"Header\");\n$RefreshReg$(_c3, \"LargeTitle\");\n$RefreshReg$(_c4, \"SmallTitle\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTGF5b3V0L0xheW91dC5qcz83ZWUzIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiSGVhZGVyIiwidXNlVGhlbWUiLCJzZXRUaGVtZSIsInJlc29sdmVkVGhlbWUiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInVzZVN0YXRlIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VFZmZlY3QiLCJ0b2dnbGVEYXJrTW9kZSIsImNoZWNrZWQiLCJpc0RhcmtNb2RlIiwiaXNSb290IiwiY2xzeCIsIkxhcmdlVGl0bGUiLCJTbWFsbFRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVPLFNBQVNBLE1BQVQsT0FBOEI7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7QUFDbkMsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsa0VBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQywwREFBZjtBQUFBLDhCQUNFLHFFQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBT0E7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFRLGlCQUFTLEVBQUMsb0JBQWxCO0FBQUEsNEJBSUssSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBSkwsa0VBSTZFO0FBQUcsY0FBSSxFQUFDLDJCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUo3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDtLQWZlSCxNOztBQWlCaEIsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNpQkMsNERBQVEsRUFEekI7QUFBQSxNQUNYQyxRQURXLGFBQ1hBLFFBRFc7QUFBQSxNQUNEQyxhQURDLGFBQ0RBLGFBREM7O0FBQUEsbUJBRUVDLDZEQUFTLEVBRlg7QUFBQSxNQUVYQyxRQUZXLGNBRVhBLFFBRlc7O0FBQUEsa0JBR1dDLHNEQUFRLENBQUMsS0FBRCxDQUhuQjtBQUFBLE1BR1pDLE9BSFk7QUFBQSxNQUdIQyxVQUhHOztBQUtuQkMseURBQVMsQ0FBQztBQUFBLFdBQU1ELFVBQVUsQ0FBQyxJQUFELENBQWhCO0FBQUEsR0FBRCxFQUF5QixFQUF6QixDQUFUOztBQUVBLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsT0FBRCxFQUFhO0FBQ2xDLFFBQU1DLFVBQVUsR0FBR0QsT0FBbkI7QUFFQSxRQUFJQyxVQUFKLEVBQWdCVixRQUFRLENBQUMsTUFBRCxDQUFSLENBQWhCLEtBQ0tBLFFBQVEsQ0FBQyxPQUFELENBQVI7QUFDTixHQUxEOztBQU9BLE1BQU1XLE1BQU0sR0FBR1IsUUFBUSxLQUFLLEdBQTVCO0FBQ0EsTUFBTU8sVUFBVSxHQUFHVCxhQUFhLEtBQUssTUFBckM7QUFFQSxzQkFDRTtBQUNFLGFBQVMsRUFBRVcsb0RBQUksQ0FBQyxvQ0FBRCxFQUF1QztBQUNwRCxjQUFRRCxNQUQ0QztBQUVwRCxjQUFRLENBQUNBO0FBRjJDLEtBQXZDLENBRGpCO0FBQUEsNEJBTUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBLGdCQUNHQSxNQUFNLGdCQUFHLHFFQUFDLFVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILGdCQUFvQixxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLEVBU0tOLE9BQU8saUJBQ04scUVBQUMscUVBQUQ7QUFDRSxhQUFPLEVBQUVLLFVBRFg7QUFFRSxjQUFRLEVBQUVGLGNBRlo7QUFHRSxlQUFTLEVBQUVHLE1BQU0sR0FBRyxFQUFILEdBQVE7QUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcENEOztHQUFNYixNO1VBQ2dDQyxvRCxFQUNmRyxxRDs7O01BRmpCSixNOztBQXNDTixJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHNCQUNqQjtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUVELG9EQUFJLENBQ2IsMEVBRGEsRUFFYixhQUZhLEVBR2Isb0JBSGEsQ0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURpQjtBQUFBLENBQW5COztNQUFNQyxVOztBQWdCTixJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLHNCQUNqQjtBQUFBLDJCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUVGLG9EQUFJLENBQ2IsNkRBRGEsRUFFYixvQkFGYSxDQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O01BQU1FLFUiLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbW1vbi9MYXlvdXQvTGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcblxuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tIFwicmVhY3QtdG9nZ2xlLWRhcmstbW9kZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktNzAwIGRhcms6dGV4dC13aGl0ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tc20gcHgtNCBweS0xMiBteC1hdXRvIGFudGlhbGlhc2VkIGZvbnQtYm9keVwiPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWxpZ2h0XCI+XG4gICAgICAgICAgey8qIMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LCBCdWlsdCB3aXRoe1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCI+TmV4dC5qczwvYT5cbiAgICAgICAgICAmIzEyODI5MzsgKi99XG4gICAgICAgICAgwqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyBwbGVhc2UgZmVlbCBmcmVlIHRvIDxhIGhyZWY9XCJtYWlsdG86YTg1MDgyMzVAZ21haWwuY29tXCI+Y29udGFjdCBtZSE8L2E+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgeyBzZXRUaGVtZSwgcmVzb2x2ZWRUaGVtZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0TW91bnRlZCh0cnVlKSwgW10pO1xuXG4gIGNvbnN0IHRvZ2dsZURhcmtNb2RlID0gKGNoZWNrZWQpID0+IHtcbiAgICBjb25zdCBpc0RhcmtNb2RlID0gY2hlY2tlZDtcblxuICAgIGlmIChpc0RhcmtNb2RlKSBzZXRUaGVtZShcImRhcmtcIik7XG4gICAgZWxzZSBzZXRUaGVtZShcImxpZ2h0XCIpO1xuICB9O1xuXG4gIGNvbnN0IGlzUm9vdCA9IHBhdGhuYW1lID09PSBcIi9cIjtcbiAgY29uc3QgaXNEYXJrTW9kZSA9IHJlc29sdmVkVGhlbWUgPT09IFwiZGFya1wiO1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlclxuICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIFwiLCB7XG4gICAgICAgIFwibWItOFwiOiBpc1Jvb3QsXG4gICAgICAgIFwibWItMlwiOiAhaXNSb290LFxuICAgICAgfSl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy1tZFwiPlxuICAgICAgICB7aXNSb290ID8gPExhcmdlVGl0bGUgLz4gOiA8U21hbGxUaXRsZSAvPn1cbiAgICAgIDwvZGl2PlxuICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgPERhcmtNb2RlU3dpdGNoXG4gICAgICAgICAgICBjaGVja2VkPXtpc0RhcmtNb2RlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RvZ2dsZURhcmtNb2RlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtpc1Jvb3QgPyAyOCA6IDI0fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5jb25zdCBMYXJnZVRpdGxlID0gKCkgPT4gKFxuICA8aDE+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgICBcInRleHQtM3hsIGZvbnQtYmxhY2sgbGVhZGluZy1ub25lIHRleHQtYmx1ZS04MDAgbm8tdW5kZXJsaW5lIGZvbnQtZGlzcGxheVwiLFxuICAgICAgICAgIFwic206dGV4dC01eGxcIixcbiAgICAgICAgICBcImRhcms6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIE1pbmltYWwgYmxvZ1xuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgPC9oMT5cbik7XG5cbmNvbnN0IFNtYWxsVGl0bGUgPSAoKSA9PiAoXG4gIDxoMT5cbiAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIFwidGV4dC0yeGwgZm9udC1ibGFjayB0ZXh0LWJsdWUtODAwIG5vLXVuZGVybGluZSBmb250LWRpc3BsYXlcIixcbiAgICAgICAgICBcImRhcms6dGV4dC1ibHVlLTQwMFwiXG4gICAgICAgICl9XG4gICAgICA+XG4gICAgICAgIE1pbmltYWwgYmxvZ1xuICAgICAgPC9hPlxuICAgIDwvTGluaz5cbiAgPC9oMT5cbik7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/common/Layout/Layout.js\n");

/***/ })

})