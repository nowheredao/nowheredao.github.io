(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{7942:function(e,n,i){"use strict";var t=i(5696);n.default=void 0;var r,a=(r=i(7294))&&r.__esModule?r:{default:r},o=i(4957),s=i(9898),l=i(639);var c={};function d(e,n,i,t){if(e&&o.isLocalURL(n)){e.prefetch(n,i,t).catch((function(e){0}));var r=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;c[n+"%"+i+(r?"%"+r:"")]=!0}}var f=function(e){var n,i=!1!==e.prefetch,r=s.useRouter(),f=a.default.useMemo((function(){var n=o.resolveHref(r,e.href,!0),i=t(n,2),a=i[0],s=i[1];return{href:a,as:e.as?o.resolveHref(r,e.as):s||a}}),[r,e.href,e.as]),u=f.href,h=f.as,p=e.children,m=e.replace,g=e.shallow,x=e.scroll,j=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var v=(n=a.default.Children.only(p))&&"object"===typeof n&&n.ref,y=l.useIntersection({rootMargin:"200px"}),w=t(y,2),_=w[0],b=w[1],C=a.default.useCallback((function(e){_(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,_]);a.default.useEffect((function(){var e=b&&i&&o.isLocalURL(u),n="undefined"!==typeof j?j:r&&r.locale,t=c[u+"%"+h+(n?"%"+n:"")];e&&!t&&d(r,u,h,{locale:n})}),[h,u,b,j,i,r]);var k={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,i,t,r,a,s,l){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),null==s&&t.indexOf("#")>=0&&(s=!1),n[r?"replace":"push"](i,t,{shallow:a,locale:l,scroll:s}))}(e,r,u,h,m,g,x,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),o.isLocalURL(u)&&d(r,u,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof j?j:r&&r.locale,I=r&&r.isLocaleDomain&&o.getDomainLocale(h,N,r&&r.locales,r&&r.domainLocales);k.href=I||o.addBasePath(o.addLocale(h,N,r&&r.defaultLocale))}return a.default.cloneElement(n,k)};n.default=f},639:function(e,n,i){"use strict";var t=i(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,i=e.rootMargin,l=e.disabled||!o,c=r.useRef(),d=r.useState(!1),f=t(d,2),u=f[0],h=f[1],p=r.useState(n?n.current:null),m=t(p,2),g=m[0],x=m[1],j=r.useCallback((function(e){c.current&&(c.current(),c.current=void 0),l||u||e&&e.tagName&&(c.current=function(e,n,i){var t=function(e){var n=e.rootMargin||"",i=s.get(n);if(i)return i;var t=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;n&&i&&n(i)}))}),e);return s.set(n,i={id:n,observer:r,elements:t}),i}(i),r=t.id,a=t.observer,o=t.elements;return o.set(e,n),a.observe(e),function(){o.delete(e),a.unobserve(e),0===o.size&&(a.disconnect(),s.delete(r))}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:i}))}),[l,g,i,u]);return r.useEffect((function(){if(!o&&!u){var e=a.requestIdleCallback((function(){return h(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),r.useEffect((function(){n&&x(n.current)}),[n]),[j,u]};var r=i(7294),a=i(6286),o="undefined"!==typeof IntersectionObserver;var s=new Map},3047:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return v}});var t=i(2125),r=i(1664),a=i(7294),o=i(5893),s=t.ZP.div.withConfig({displayName:"headTop__HeaderBox",componentId:"sc-15koa18-0"})(["padding-top:0.1rem;.mainContent{display:flex;justify-content:space-between;align-items:center;}@media(max-width:1176px){.mainContent{padding:0 0.1rem;display:flex;margin-top:-0.3rem;}}"]),l=t.ZP.ul.withConfig({displayName:"headTop__Ulbox",componentId:"sc-15koa18-1"})(["display:flex;align-items:center;li{margin-left:0.3rem;line-height:0.2rem;display:flex;a{color:#1FC0FF;font-size:0.16rem;font-weight:300;text-decoration:none;}}"]),c=t.ZP.div.withConfig({displayName:"headTop__Rht",componentId:"sc-15koa18-2"})(["display:flex;@media(max-width:1176px){display:none;}"]),d=t.ZP.div.withConfig({displayName:"headTop__BtnBox",componentId:"sc-15koa18-3"})(["background:#1FC0FF;border-radius:0.04rem;font-size:0.14rem;font-family:Arial;font-weight:400;color:#000;display:flex;justify-content:center;align-content:center;width:1.6rem;line-height:0.2rem;height:0.36rem;padding-top:0.08rem;box-sizing:border-box;margin-left:0.64rem;img{width:0.2rem;height:0.2rem;margin-right:0.1rem;}"]),f=t.ZP.div.withConfig({displayName:"headTop__MenuBox",componentId:"sc-15koa18-4"})(["width:0.24rem;height:0.24rem;@media(min-width:1177px){display:none;}"]),u=t.ZP.div.withConfig({displayName:"headTop__NaviHeader",componentId:"sc-15koa18-5"})(['background:url("/assets/images/mobile/bg01.jpg") no-repeat center center;background-size:auto 100%;width:100vw;height:100vh;position:fixed;left:0;top:0;display:flex;flex-direction:column;@media(min-width:1177px){display:none;}']),h=t.ZP.div.withConfig({displayName:"headTop__FirstLine",componentId:"sc-15koa18-6"})(["display:flex;padding:0 0.1rem;justify-content:space-between;margin-top:-0.2rem;"]),p=t.ZP.div.withConfig({displayName:"headTop__LogoBox",componentId:"sc-15koa18-7"})([""]),m=t.ZP.div.withConfig({displayName:"headTop__CloseBox",componentId:"sc-15koa18-8"})(["width:0.24rem;"]),g=t.ZP.ul.withConfig({displayName:"headTop__Navli",componentId:"sc-15koa18-9"})(["font-size:0.14rem;font-family:Arial-Regular,Arial;font-weight:400;color:#1FC0FF;line-height:0.2rem;text-align:center;flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;padding:0.78rem 0 1rem;"]),x=t.ZP.ul.withConfig({displayName:"headTop__BtmLi",componentId:"sc-15koa18-10"})(["width:1.92rem;margin:0 auto;padding-bottom:0.52rem;display:flex;justify-content:space-between;flex-wrap:wrap;li{width:0.32rem;height:0.32rem;margin:0.16rem;font-size:0;}"]),j=t.ZP.div.withConfig({displayName:"headTop__Lft",componentId:"sc-15koa18-11"})(["display:flex;align-items:center;padding:0.1rem 0;"]);function v(){var e=(0,a.useState)(!1),n=e[0],i=e[1],t=(0,a.useState)("/"),v=(t[0],t[1]);(0,a.useEffect)((function(){v("https://discord.com/api/oauth2/authorize?client_id=".concat("960507044371238912","&redirect_uri=").concat("http://192.168.0.102:3000","&response_type=code&scope=identify email"))}),[]);return(0,o.jsx)(s,{children:(0,o.jsxs)("div",{className:"mainContent",children:[(0,o.jsx)(j,{children:(0,o.jsx)(r.default,{href:"/",passHref:!0,children:(0,o.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})})}),(0,o.jsxs)(c,{children:[(0,o.jsxs)(l,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Governance"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Whitepaper"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"About us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Blog"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/medals",children:"My nowhere"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"More"})})]}),(0,o.jsxs)(d,{children:[(0,o.jsx)("img",{src:"/assets/images/wallet_nor.png",alt:""}),(0,o.jsx)("span",{children:"Connect Wallet"})]})]}),n&&(0,o.jsxs)(u,{children:[(0,o.jsxs)(h,{children:[(0,o.jsx)(p,{children:(0,o.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})}),(0,o.jsx)(m,{onClick:function(){i(!1)},children:(0,o.jsx)("img",{src:"/assets/images/mobile/close.png",alt:""})})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Governance"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Whitepaper"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"About us"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"Blog"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/medals",children:"My nowhere"})}),(0,o.jsx)("li",{children:(0,o.jsx)(r.default,{href:"/",children:"More"})})]}),(0,o.jsxs)(x,{children:[(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/twitter.png",alt:""})}),(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/discord.png",alt:""})}),(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/youtube.png",alt:""})}),(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/reddit.png",alt:""})}),(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/notion.png",alt:""})}),(0,o.jsx)("li",{children:(0,o.jsx)("img",{src:"/assets/images/mirror.png",alt:""})})]})]}),(0,o.jsx)(f,{onClick:function(){i(!0)},children:(0,o.jsx)("img",{src:"/assets/images/mobile/menu.png",alt:""})})]})})}},1660:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/headTop",function(){return i(3047)}])},1664:function(e,n,i){e.exports=i(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=1660,e(e.s=n);var n}));var n=e.O();_N_E=n}]);