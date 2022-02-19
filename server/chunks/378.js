"use strict";
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/headerTop.tsx





const Box = external_styled_components_default().div.withConfig({
  displayName: "headerTop__Box",
  componentId: "sc-1topnfu-0"
})(["background:#001218;width:100vw;padding:22px 0;.mainContent{display:flex;justify-content:space-between;align-content:center;}"]);
const Ulbox = external_styled_components_default().ul.withConfig({
  displayName: "headerTop__Ulbox",
  componentId: "sc-1topnfu-1"
})(["display:flex;li{margin-left:30px;line-height:40px;a{color:#1FC0FF;font-family:\"sf-pro-display_regular\";font-size:16px;font-weight:300;text-decoration:none;}}.active a{color:#D2F4FF;font-family:\"SFProDisplay-Bold\";font-weight:bold;}"]);
const BtnBox = external_styled_components_default().div.withConfig({
  displayName: "headerTop__BtnBox",
  componentId: "sc-1topnfu-2"
})(["background:#1FC0FF;border-radius:4px;font-size:14px;font-family:\"Roboto-Regular\";font-weight:400;color:#FAFEFF;display:flex;justify-content:center;align-content:center;width:148px;line-height:20px;height:36px;padding-top:8px;box-sizing:border-box;img{width:20px;height:20px;padding-right:10px;}"]);

const HeaderTop = () => {
  const router = (0,router_.useRouter)();
  return /*#__PURE__*/jsx_runtime_.jsx(Box, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mainContent",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/assets/images/logo.png",
          alt: ""
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Ulbox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: router.pathname === '/' ? 'active' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: "Dilemma"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: "Building Consensus"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: "All channel"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            children: "Our Vision"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: router.pathname === '/mynowhere' || router.pathname === '/medals' ? 'active' : '',
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/mynowhere",
            children: "My nowhere"
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(BtnBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/assets/images/wallet.png",
          alt: ""
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Connect Wallet"
        })]
      })]
    })
  });
};

/* harmony default export */ const headerTop = (HeaderTop);
;// CONCATENATED MODULE: ./components/layout.tsx



function Layout({
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(headerTop, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    })]
  });
}

/***/ })

};
;