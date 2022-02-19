"use strict";
exports.id = 566;
exports.ids = [566];
exports.modules = {

/***/ 566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const FirstLine = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__FirstLine",
  componentId: "sc-5qf8y7-0"
})(["display:flex;justify-content:space-between;align-content:center;margin-top:80px;.lft{display:flex;align-content:center;}.topLine{height:4px;background:#1FC0FF;border-radius:2px;width:24px;margin-bottom:16px;}"]);
const MiddleBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__MiddleBox",
  componentId: "sc-5qf8y7-1"
})(["display:flex;margin-top:20px;.medal{width:40px;height:40px;margin-right:32px;}.more{width:40px;height:40px;border-radius:20px;border:1px solid #1FC0FF;font-size:12px;font-family:\"Roboto-Regular\";font-weight:400;color:#1FC0FF;line-height:40px;flex-shrink:0;text-align:center;text-transform:capitalize;cursor:pointer;}.decoration{width:40px;height:40px;margin-left:80px;}"]);
const ProgressBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__ProgressBox",
  componentId: "sc-5qf8y7-2"
})(["display:flex;.title{font-size:16px;font-family:\"Roboto-Regular\";font-weight:400;color:#1FC0FF;line-height:28px;}.progress{height:4px;background:rgba(250,254,255,.15);border-radius:2px;flex-grow:1;margin:12px 0 0 8px;overflow:hidden;}.inner{height:4px;background:#1FC0FF;border-radius:2px;}"]);
const Avatar = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__Avatar",
  componentId: "sc-5qf8y7-3"
})(["width:80px;height:80px;border-radius:80px;overflow:hidden;margin-right:24px;img{width:100%;height:100%;}"]);
const NameBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__NameBox",
  componentId: "sc-5qf8y7-4"
})(["display:flex;align-content:center;flex-direction:column;justify-content:center;.name{font-size:20px;font-family:\"Roboto-Bold\";font-weight:bold;color:#FAFEFF;line-height:28px;}"]);
const RhtBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "info__RhtBox",
  componentId: "sc-5qf8y7-5"
})(["display:flex;&>div{width:255px;margin-left:48px;}.titleTips{font-size:16px;font-family:\"Roboto-Regular\";font-weight:400;color:#FAFEFF;line-height:28px;opacity:0.65;}.num{font-size:20px;font-family:\"Roboto-Bold\";font-weight:bold;color:#FAFEFF;line-height:28px;}.symbol{font-size:14px;font-family:\"Roboto-Regular\";font-weight:400;color:#FAFEFF;line-height:24px;}"]);

const Info = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(FirstLine, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "lft",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Avatar, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
          src: "/assets/images/demo/photo.png",
          alt: ""
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(NameBox, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "name",
          children: "This is user name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ProgressBox, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "title",
            children: "Lv.01"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
            className: "progress",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: "inner",
              style: {
                width: '50%'
              }
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(MiddleBox, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: "/assets/images/demo/medal.png",
        className: "medal",
        alt: ""
      }), router.pathname === '/mynowhere' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/medals",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "more",
          children: "more"
        })
      }), router.pathname === '/medals' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
        href: "/mynowhere",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "more",
          children: "back"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
        src: "/assets/images/middeBg.png",
        className: "decoration",
        alt: ""
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(RhtBox, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "topLine"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "titleTips",
          children: "Number of airdrops obtained today"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "num",
            children: "987,654,321,000.00 "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "symbol",
            children: "FTX"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "topLine"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: "titleTips",
          children: "Total number of airdrops obtained"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "num",
            children: "987,654,321,000.00 "
          }), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
            className: "symbol",
            children: "FTX"
          })]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);

/***/ })

};
;