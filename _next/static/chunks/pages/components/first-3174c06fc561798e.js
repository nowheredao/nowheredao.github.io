(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7942:function(e,n,t){"use strict";var i=t(5696);n.default=void 0;var r,o=(r=t(7294))&&r.__esModule?r:{default:r},a=t(4957),l=t(9898),s=t(639);var c={};function d(e,n,t,i){if(e&&a.isLocalURL(n)){e.prefetch(n,t,i).catch((function(e){0}));var r=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;c[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),f=o.default.useMemo((function(){var n=a.resolveHref(r,e.href,!0),t=i(n,2),o=t[0],l=t[1];return{href:o,as:e.as?a.resolveHref(r,e.as):l||o}}),[r,e.href,e.as]),u=f.href,m=f.as,h=e.children,p=e.replace,g=e.shallow,x=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var w=(n=o.default.Children.only(h))&&"object"===typeof n&&n.ref,y=s.useIntersection({rootMargin:"200px"}),j=i(y,2),b=j[0],_=j[1],C=o.default.useCallback((function(e){b(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,b]);o.default.useEffect((function(){var e=_&&t&&a.isLocalURL(u),n="undefined"!==typeof v?v:r&&r.locale,i=c[u+"%"+m+(n?"%"+n:"")];e&&!i&&d(r,u,m,{locale:n})}),[m,u,_,v,t,r]);var N={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,i,r,o,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==l&&i.indexOf("#")>=0&&(l=!1),n[r?"replace":"push"](t,i,{shallow:o,locale:s,scroll:l}))}(e,r,u,m,p,g,x,v)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(u)&&d(r,u,m,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof v?v:r&&r.locale,E=r&&r.isLocaleDomain&&a.getDomainLocale(m,k,r&&r.locales,r&&r.domainLocales);N.href=E||a.addBasePath(a.addLocale(m,k,r&&r.defaultLocale))}return o.default.cloneElement(n,N)};n.default=f},639:function(e,n,t){"use strict";var i=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,s=e.disabled||!a,c=r.useRef(),d=r.useState(!1),f=i(d,2),u=f[0],m=f[1],h=r.useState(n?n.current:null),p=i(h,2),g=p[0],x=p[1],v=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||u||e&&e.tagName&&(c.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:r,elements:i}),t}(t),r=i.id,o=i.observer,a=i.elements;return a.set(e,n),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),l.delete(r))}}(e,(function(e){return e&&m(e)}),{root:g,rootMargin:t}))}),[s,g,t,u]);return r.useEffect((function(){if(!a&&!u){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[u]),r.useEffect((function(){n&&x(n.current)}),[n]),[v,u]};var r=t(7294),o=t(6286),a="undefined"!==typeof IntersectionObserver;var l=new Map},3520:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var i=t(7379),r=t(3047),o=t(5893),a=i.ZP.div.withConfig({displayName:"first__FirstBox",componentId:"sc-xwlov2-0"})(['width:100vw;height:100vh;background:url("/assets/images/bg01.jpg") no-repeat center center;background-size:auto 100%;.box.mainContent{width:100vw;height:100vh;display:flex;flex-direction:column;}@media(max-width:1176px){background:url("/assets/images/mobile/bg01.jpg") no-repeat center center;background-size:auto 100%;}']),l=i.ZP.div.withConfig({displayName:"first__MiddleBox",componentId:"sc-xwlov2-1"})(["flex-grow:1;display:flex;flex-direction:column;justify-content:center;align-items:center;@media(max-width:1176px){flex-grow:1;padding-bottom:2rem;}"]),s=i.ZP.div.withConfig({displayName:"first__TitleBox",componentId:"sc-xwlov2-2"})(["margin-top:0.64rem;font-size:0.8rem;font-family:Arial-Bold,Arial;font-weight:bold;color:#FAFEFF;line-height:0.84rem;@media(max-width:1176px){font-size:0.24rem;font-weight:bold;color:#FAFEFF;line-height:0.28rem;text-align:center;}"]),c=i.ZP.div.withConfig({displayName:"first__LogoBox",componentId:"sc-xwlov2-3"})(["width:1.84rem;@media(max-width:1176px){width:1.32rem;margin-top:0.6rem;}"]),d=i.ZP.div.withConfig({displayName:"first__Decoration",componentId:"sc-xwlov2-4"})(["margin:0.48rem 0;width:0.64rem;@media(max-width:1176px){display:flex;align-items:flex-start;margin:0.32rem 0;width:0.48rem;}"]),f=i.ZP.div.withConfig({displayName:"first__Detail",componentId:"sc-xwlov2-5"})(["width:5.47rem;height:0.64rem;font-size:0.2rem;font-family:Arial;font-weight:400;color:rgba(250,254,255,0.6);line-height:0.32rem;@media(max-width:1176px){width:85%;text-align:center;font-size:0.14rem;}"]);function u(){return(0,o.jsx)(a,{children:(0,o.jsxs)("div",{className:"box mainContent",children:[(0,o.jsx)(r.default,{}),(0,o.jsxs)(l,{children:[(0,o.jsx)(c,{children:(0,o.jsx)("img",{src:"/assets/images/logo.png",alt:""})}),(0,o.jsxs)(s,{children:["NoWhere to NowHere",(0,o.jsx)("br",{}),"No Doubt to DAO"]}),(0,o.jsx)(d,{children:(0,o.jsx)("img",{src:"/assets/images/dividers.png",alt:""})}),(0,o.jsxs)(f,{children:[(0,o.jsx)("div",{children:"A self-governing community with information sharing platform."}),(0,o.jsx)("div",{children:"Everyone is a contributor, and everyone is a beneficiary."})]})]})]})})}},3047:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var i=t(7379),r=t(1664),o=t(5893),a=i.ZP.div.withConfig({displayName:"headTop__HeaderBox",componentId:"sc-15koa18-0"})(["padding-top:0.1rem;.mainContent{display:flex;justify-content:space-between;}@media(max-width:1176px){.mainContent{padding:0 0.1rem;display:flex;margin-top:-0.3rem;}}"]),l=i.ZP.ul.withConfig({displayName:"headTop__Ulbox",componentId:"sc-15koa18-1"})(["display:flex;li{margin-left:0.3rem;line-height:0.4rem;a{color:#1FC0FF;font-family:Arial;font-size:0.16rem;font-weight:300;text-decoration:none;}}"]),s=i.ZP.div.withConfig({displayName:"headTop__Rht",componentId:"sc-15koa18-2"})(["display:flex;@media(max-width:1176px){display:none;}"]),c=i.ZP.div.withConfig({displayName:"headTop__BtnBox",componentId:"sc-15koa18-3"})(["background:#1FC0FF;border-radius:0.04rem;font-size:0.14rem;font-family:Arial;font-weight:400;color:#000;display:flex;justify-content:center;align-content:center;width:1.6rem;line-height:0.2rem;height:0.36rem;padding-top:0.08rem;box-sizing:border-box;margin-left:0.64rem;img{width:0.2rem;height:0.2rem;margin-right:0.1rem;}"]),d=i.ZP.div.withConfig({displayName:"headTop__MenuBox",componentId:"sc-15koa18-4"})(["width:0.24rem;height:0.24rem;@media(min-width:1177px){display:none;}"]);function f(){return(0,o.jsx)(a,{children:(0,o.jsxs)("div",{className:"mainContent",children:[(0,o.jsx)("div",{children:(0,o.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})}),(0,o.jsxs)(s,{children:[(0,o.jsxs)(l,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Governance"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Whitepaper"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"About us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Blog"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"My nowhere"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"More"})})]}),(0,o.jsxs)(c,{children:[(0,o.jsx)("img",{src:"/assets/images/wallet_nor.png",alt:""}),(0,o.jsx)("span",{children:"Connect Wallet"})]})]}),(0,o.jsx)(d,{children:(0,o.jsx)("img",{src:"/assets/images/mobile/menu.png",alt:""})})]})})}},870:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/first",function(){return t(3520)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=870,e(e.s=n);var n}));var n=e.O();_N_E=n}]);