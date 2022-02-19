"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
;// CONCATENATED MODULE: ./public/utils/GloablStyle.ts

const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["@font-face{font-family:\"sf-pro-display_regular\";src:url('../fonts/SF-Pro-Display-Regular.otf');}@font-face{font-family:\"Roboto-Regular\";src:url('../fonts/Roboto-Regular.ttf');}@font-face{font-family:\"Roboto-Bold\";src:url('../fonts/Roboto-Bold.ttf');}@font-face{font-family:\"SFProDisplay-Bold\";src:url('../fonts/SF-Pro-Text-Bold.otf');}@font-face{font-family:\"BodoniFLF-Bold\";src:url('../fonts/Bodoni-72-Bold-39.otf');}@font-face{font-family:\"BodoniFLF-Roman\";src:url('../fonts/BodoniSvtyTwoITCTT-Book.ttf');}*{padding:0;margin:0;}body,html{background:#000;color:#fff;}li,ul{padding:0;margin:0;list-style:none;}.mainContent{width:1200px;margin:0 auto;}"]);
/* harmony default export */ const GloablStyle = (GlobalStyle);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  var _Component$getLayout;

  const getLayout = (_Component$getLayout = Component.getLayout) !== null && _Component$getLayout !== void 0 ? _Component$getLayout : page => page;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "nowhere"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Gather Energy & Transfer Value"
      })]
    }), getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))), /*#__PURE__*/jsx_runtime_.jsx(GloablStyle, {})]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(876));
module.exports = __webpack_exports__;

})();