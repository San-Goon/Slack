"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkdofront"] = self["webpackChunkdofront"] || []).push([["pages_SignUp_index_tsx"],{

/***/ "./pages/SignUp/index.tsx":
/*!********************************!*\
  !*** ./pages/SignUp/index.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./pages/SignUp/styles.tsx\");\n/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hooks/useInput */ \"./hooks/useInput.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.esm.js\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/fetcher */ \"./utils/fetcher.ts\");\n/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js\");\n/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ \"./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js\");\n__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ \"./node_modules/react-refresh/runtime.js\");\n\nvar _s = __webpack_require__.$Refresh$.signature();\n\n\n\n\n\n\n\n\n\n\n\nconst SignUp = () => {\n  _s();\n\n  const {\n    data,\n    error,\n    mutate\n  } = (0,swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('/api/users', _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  const [email, onChangeEmail] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('');\n  const [nickname, onChangeNickname] = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('');\n  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [passwordCheck, setPasswordCheck] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [mismatchError, setMismatchError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [signUpError, setSignUpError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n  const [signUpSuccess, setSignUpSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const onChangePassword = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setPassword(e.target.value);\n    setMismatchError(e.target.value !== passwordCheck);\n  }, [passwordCheck]);\n  const onChangePasswordCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    setPasswordCheck(e.target.value);\n    setMismatchError(e.target.value !== password);\n  }, [password]);\n  const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {\n    e.preventDefault();\n\n    if (!mismatchError) {\n      console.log('회원가입하기');\n      setSignUpError('');\n      setSignUpSuccess(false);\n      axios__WEBPACK_IMPORTED_MODULE_3___default().post('/api/users', {\n        email,\n        nickname,\n        password\n      }).then(response => {\n        console.log(response);\n        setSignUpSuccess(true);\n      }).catch(error => {\n        console.log(error.response);\n        setSignUpError(error.response.data);\n      }).finally(() => {});\n    }\n  }, [email, nickname, password, passwordCheck, mismatchError]);\n\n  if (data === undefined) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, \"\\uB85C\\uB529\\uC911...\");\n  }\n\n  if (data) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__.Redirect, {\n      to: \"/workspace/sleact/channel/\\uC77C\\uBC18\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Header, null, \"Sleact\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Form, {\n    onSubmit: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    id: \"email-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\uC774\\uBA54\\uC77C \\uC8FC\\uC18C\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"email\",\n    id: \"email\",\n    value: email,\n    onChange: onChangeEmail\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    id: \"nickname-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\uB2C9\\uB124\\uC784\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"text\",\n    id: \"nickname\",\n    value: nickname,\n    onChange: onChangeNickname\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    id: \"password-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\uBE44\\uBC00\\uBC88\\uD638\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"password\",\n    id: \"password\",\n    name: \"password\",\n    value: password,\n    onChange: onChangePassword\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Label, {\n    id: \"password-check-label\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, \"\\uBE44\\uBC00\\uBC88\\uD638 \\uD655\\uC778\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Input, {\n    type: \"password\",\n    id: \"password-check\",\n    name: \"password-check\",\n    value: passwordCheck,\n    onChange: onChangePasswordCheck\n  })), mismatchError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, \"\\uBE44\\uBC00\\uBC88\\uD638\\uAC00 \\uC77C\\uCE58\\uD558\\uC9C0 \\uC54A\\uC2B5\\uB2C8\\uB2E4.\"), !nickname && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, \"\\uB2C9\\uB124\\uC784\\uC744 \\uC785\\uB825\\uD574\\uC8FC\\uC138\\uC694.\"), signUpError && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Error, null, signUpError), signUpSuccess && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Success, null, \"\\uD68C\\uC6D0\\uAC00\\uC785\\uB418\\uC5C8\\uC2B5\\uB2C8\\uB2E4! \\uB85C\\uADF8\\uC778\\uD574\\uC8FC\\uC138\\uC694.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, {\n    type: \"submit\"\n  }, \"\\uD68C\\uC6D0\\uAC00\\uC785\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.LinkContainer, null, \"\\uC774\\uBBF8 \\uD68C\\uC6D0\\uC774\\uC2E0\\uAC00\\uC694?\\xA0\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Link, {\n    to: \"/login\"\n  }, \"\\uB85C\\uADF8\\uC778 \\uD558\\uB7EC\\uAC00\\uAE30\")));\n};\n\n_s(SignUp, \"USNNI9oF81ZGTbV19b4FagFLeZY=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = SignUp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignUp);\n\nvar _c;\n\n__webpack_require__.$Refresh$.register(_c, \"SignUp\");\n\nvar $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;\nvar $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(\n\t$ReactRefreshModuleId$\n);\n\nfunction $ReactRefreshModuleRuntime$(exports) {\n\tif (true) {\n\t\tvar errorOverlay;\n\t\tif (typeof __react_refresh_error_overlay__ !== 'undefined') {\n\t\t\terrorOverlay = __react_refresh_error_overlay__;\n\t\t}\n\t\tvar testMode;\n\t\tif (typeof __react_refresh_test__ !== 'undefined') {\n\t\t\ttestMode = __react_refresh_test__;\n\t\t}\n\t\treturn __react_refresh_utils__.executeRuntime(\n\t\t\texports,\n\t\t\t$ReactRefreshModuleId$,\n\t\t\tmodule.hot,\n\t\t\terrorOverlay,\n\t\t\ttestMode\n\t\t);\n\t}\n}\n\nif (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {\n\t$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);\n} else {\n\t$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);\n}\n\n//# sourceURL=webpack://dofront/./pages/SignUp/index.tsx?");

/***/ })

}]);