(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[389],{7942:function(e,n,t){"use strict";var i=t(5696);n.default=void 0;var r,a=(r=t(7294))&&r.__esModule?r:{default:r},o=t(4957),s=t(9898),l=t(639);var c={};function d(e,n,t,i){if(e&&o.isLocalURL(n)){e.prefetch(n,t,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[n+"%"+t+(r?"%"+r:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,r=s.useRouter(),u=a.default.useMemo((function(){var n=o.resolveHref(r,e.href,!0),t=i(n,2),a=t[0],s=t[1];return{href:a,as:e.as?o.resolveHref(r,e.as):s||a}}),[r,e.href,e.as]),f=u.href,p=u.as,h=e.children,m=e.replace,g=e.shallow,x=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var v=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,j=l.useIntersection({rootMargin:"200px"}),w=i(j,2),_=w[0],b=w[1],C=a.default.useCallback((function(e){_(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,_]);a.default.useEffect((function(){var e=b&&t&&o.isLocalURL(f),n="undefined"!==typeof y?y:r&&r.locale,i=c[f+"%"+p+(n?"%"+n:"")];e&&!i&&d(r,f,p,{locale:n})}),[p,f,b,y,t,r]);var k={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,i,r,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(t))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),n[r?"replace":"push"](t,i,{shallow:a,locale:l,scroll:s}))}(e,r,f,p,m,g,x,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(f)&&d(r,f,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof y?y:r&&r.locale,E=r&&r.isLocaleDomain&&o.getDomainLocale(p,N,r&&r.locales,r&&r.domainLocales);k.href=E||o.addBasePath(o.addLocale(p,N,r&&r.defaultLocale))}return a.default.cloneElement(n,k)};n.default=u},639:function(e,n,t){"use strict";var i=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,l=e.disabled||!o,c=r.useRef(),d=r.useState(!1),u=i(d,2),f=u[0],p=u[1],h=r.useState(n?n.current:null),m=i(h,2),g=m[0],x=m[1],y=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||f||e&&e.tagName&&(c.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:r,elements:i}),t}(t),r=i.id,a=i.observer,o=i.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&p(e)}),{root:g,rootMargin:t}))}),[l,g,t,f]);return r.useEffect((function(){if(!o&&!f){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),r.useEffect((function(){n&&x(n.current)}),[n]),[y,f]};var r=t(7294),a=t(6286),o="undefined"!==typeof IntersectionObserver;var s=new Map},8093:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var i=t(29),r=t(7794),a=t.n(r),o=t(2125),s=t(1664),l=t(7294),c=t(7061),d={account:function(){var e=(0,i.Z)(a().mark((function e(){var n,t,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=window,"undefined"!=typeof(t=n.ethereum)){e.next=3;break}return e.abrupt("return",{type:"error"});case 3:return e.next=5,t.request({method:"eth_requestAccounts"});case 5:return i=e.sent,sessionStorage.setItem("account",i[0]),e.abrupt("return",{type:"success",data:i[0]});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},u=t(3421),f=t(5893),p=o.ZP.div.withConfig({displayName:"headTop__HeaderBox",componentId:"sc-15koa18-0"})(["padding-top:0.1rem;.mainContent{display:flex;justify-content:space-between;align-items:center;}@media(max-width:1176px){.mainContent{padding:0 0.1rem;display:flex;margin-top:-0.3rem;}}"]),h=o.ZP.ul.withConfig({displayName:"headTop__Ulbox",componentId:"sc-15koa18-1"})(["display:flex;align-items:center;li{margin-left:0.3rem;line-height:0.2rem;display:flex;a{color:#1FC0FF;font-size:0.16rem;font-weight:300;text-decoration:none;}}"]),m=o.ZP.div.withConfig({displayName:"headTop__Rht",componentId:"sc-15koa18-2"})(["display:flex;@media(max-width:1176px){display:none;}"]),g=o.ZP.div.withConfig({displayName:"headTop__BtnBox",componentId:"sc-15koa18-3"})(["background:#1FC0FF;border-radius:0.04rem;font-size:0.14rem;font-family:Arial;font-weight:400;color:#000;display:flex;justify-content:center;align-content:center;width:1.6rem;line-height:0.2rem;height:0.36rem;padding-top:0.08rem;box-sizing:border-box;margin-left:0.64rem;img{width:0.2rem;height:0.2rem;margin-right:0.1rem;}"]),x=o.ZP.div.withConfig({displayName:"headTop__MenuBox",componentId:"sc-15koa18-4"})(["width:0.24rem;height:0.24rem;@media(min-width:1177px){display:none;}"]),y=o.ZP.div.withConfig({displayName:"headTop__NaviHeader",componentId:"sc-15koa18-5"})(['background:url("/assets/images/mobile/bg01.jpg") no-repeat center center;background-size:auto 100%;width:100vw;height:100vh;position:fixed;left:0;top:0;display:flex;flex-direction:column;@media(min-width:1177px){display:none;}']),v=o.ZP.div.withConfig({displayName:"headTop__FirstLine",componentId:"sc-15koa18-6"})(["display:flex;padding:0 0.1rem;justify-content:space-between;margin-top:-0.2rem;"]),j=o.ZP.div.withConfig({displayName:"headTop__LogoBox",componentId:"sc-15koa18-7"})([""]),w=o.ZP.div.withConfig({displayName:"headTop__CloseBox",componentId:"sc-15koa18-8"})(["width:0.24rem;"]),_=o.ZP.ul.withConfig({displayName:"headTop__Navli",componentId:"sc-15koa18-9"})(["font-size:0.14rem;font-family:Arial;font-weight:400;color:#1FC0FF;line-height:0.2rem;text-align:center;flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;padding:0.78rem 0 1rem;"]),b=o.ZP.ul.withConfig({displayName:"headTop__BtmLi",componentId:"sc-15koa18-10"})(["width:1.92rem;margin:0 auto;padding-bottom:0.52rem;display:flex;justify-content:space-between;flex-wrap:wrap;li{width:0.32rem;height:0.32rem;margin:0.16rem;font-size:0;}"]),C=o.ZP.div.withConfig({displayName:"headTop__Lft",componentId:"sc-15koa18-11"})(["display:flex;align-items:center;padding:0.1rem 0;"]),k=o.ZP.div.withConfig({displayName:"headTop__AddressBox",componentId:"sc-15koa18-12"})(["font-size:0.16rem;font-family:Arial;font-weight:400;line-height:0.4rem;margin-left:0.2rem;text-align:center;color:#FAFEFF;width:1.6rem;height:0.4rem;border-radius:4px;border:1px solid #FAFEFF;"]);function N(){var e=(0,c.$)(),n=e.dispatch,t=e.state,r=t.web3Provider,o=(t.account,(0,l.useState)(!1)),N=o[0],E=o[1],I=(0,l.useState)(!0),T=(I[0],I[1],(0,l.useState)("")),P=T[0],M=T[1],F=(0,l.useState)("/"),L=(F[0],F[1]);(0,l.useEffect)((function(){L("https://discord.com/api/oauth2/authorize?client_id=".concat("960507044371238912","&redirect_uri=").concat("http://192.168.0.102:3000","&response_type=code&scope=identify email"))}),[]),(0,l.useEffect)((function(){if(null!=r){var e=sessionStorage.getItem("account");e&&(n({type:u.U.SET_ACCOUNT,payload:e}),M(e))}}),[r]);var Z=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.account();case 2:"success"===(t=e.sent).type?(M(t.data),n({type:u.U.SET_ACCOUNT,payload:t.data}),sessionStorage.setItem("account",t.data)):n({type:u.U.SET_ERROR,payload:"Please install MetaMask"});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsx)("div",{children:(0,f.jsx)(p,{children:(0,f.jsxs)("div",{className:"mainContent",children:[(0,f.jsx)(C,{children:(0,f.jsx)(s.default,{href:"/",passHref:!0,children:(0,f.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})})}),(0,f.jsxs)(m,{children:[(0,f.jsxs)(h,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Governance"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Whitepaper"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"About us"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Blog"})}),P&&(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/medals",children:"My nowhere"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"More"})})]}),!P&&(0,f.jsxs)(g,{onClick:function(){return Z()},children:[(0,f.jsx)("img",{src:"/assets/images/wallet_nor.png",alt:""}),(0,f.jsx)("span",{children:"Connect Wallet"})]}),P&&(0,f.jsx)(k,{children:function(e){var n=e.substring(0,4),t=e.substring(e.length-4,e.length);return"".concat(n,"****").concat(t)}(P)})]}),N&&(0,f.jsxs)(y,{children:[(0,f.jsxs)(v,{children:[(0,f.jsx)(j,{children:(0,f.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})}),(0,f.jsx)(w,{onClick:function(){E(!1)},children:(0,f.jsx)("img",{src:"/assets/images/mobile/close.png",alt:""})})]}),(0,f.jsxs)(_,{children:[(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Governance"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Whitepaper"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"About us"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"Blog"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/medals",children:"My nowhere"})}),(0,f.jsx)("li",{children:(0,f.jsx)(s.default,{href:"/",children:"More"})})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/twitter.png",alt:""})}),(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/discord.png",alt:""})}),(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/youtube.png",alt:""})}),(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/reddit.png",alt:""})}),(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/notion.png",alt:""})}),(0,f.jsx)("li",{children:(0,f.jsx)("img",{src:"/assets/images/mirror.png",alt:""})})]})]}),(0,f.jsx)(x,{onClick:function(){E(!0)},children:(0,f.jsx)("img",{src:"/assets/images/mobile/menu.png",alt:""})})]})})})}},2682:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var i=t(8093),r=t(2125),a=t(5893),o=r.ZP.div.withConfig({displayName:"layout__Box",componentId:"sc-1t9f2q1-0"})(["display:flex;flex-direction:column;main{flex-grow:1;}"]);function s(e){var n=e.children;return(0,a.jsxs)(o,{children:[(0,a.jsx)(i.default,{}),(0,a.jsx)("main",{children:n})]})}},7926:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/layout",function(){return t(2682)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=7926,e(e.s=n);var n}));var n=e.O();_N_E=n}]);