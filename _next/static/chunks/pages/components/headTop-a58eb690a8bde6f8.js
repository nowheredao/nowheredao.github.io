(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[364],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(4957),l=t(9898),s=t(639);var c={};function f(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[n+"%"+t+(o?"%"+o:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,o=l.useRouter(),u=i.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=r(n,2),i=t[0],l=t[1];return{href:i,as:e.as?a.resolveHref(o,e.as):l||i}}),[o,e.href,e.as]),d=u.href,h=u.as,p=e.children,m=e.replace,g=e.shallow,v=e.scroll,x=e.locale;"string"===typeof p&&(p=i.default.createElement("a",null,p));var y=(n=i.default.Children.only(p))&&"object"===typeof n&&n.ref,j=s.useIntersection({rootMargin:"200px"}),_=r(j,2),w=_[0],b=_[1],C=i.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);i.default.useEffect((function(){var e=b&&t&&a.isLocalURL(d),n="undefined"!==typeof x?x:o&&o.locale,r=c[d+"%"+h+(n?"%"+n:"")];e&&!r&&f(o,d,h,{locale:n})}),[h,d,b,x,t,o]);var k={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:l}))}(e,o,d,h,m,g,v,x)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&f(o,d,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var E="undefined"!==typeof x?x:o&&o.locale,M=o&&o.isLocaleDomain&&a.getDomainLocale(h,E,o&&o.locales,o&&o.domainLocales);k.href=M||a.addBasePath(a.addLocale(h,E,o&&o.defaultLocale))}return i.default.cloneElement(n,k)};n.default=u},639:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,s=e.disabled||!a,c=o.useRef(),f=o.useState(!1),u=r(f,2),d=u[0],h=u[1],p=o.useState(n?n.current:null),m=r(p,2),g=m[0],v=m[1],x=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),s||d||e&&e.tagName&&(c.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=l.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),l.delete(o))}}(e,(function(e){return e&&h(e)}),{root:g,rootMargin:t}))}),[s,g,t,d]);return o.useEffect((function(){if(!a&&!d){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&v(n.current)}),[n]),[x,d]};var o=t(7294),i=t(6286),a="undefined"!==typeof IntersectionObserver;var l=new Map},3047:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(7379),o=t(1664),i=t(5893),a=r.ZP.div.withConfig({displayName:"headTop__HeaderBox",componentId:"sc-15koa18-0"})(["padding-top:0.1rem;.mainContent{display:flex;justify-content:space-between;}@media(max-width:1176px){.mainContent{padding:0 0.1rem;display:flex;margin-top:-0.3rem;}}"]),l=r.ZP.ul.withConfig({displayName:"headTop__Ulbox",componentId:"sc-15koa18-1"})(["display:flex;li{margin-left:0.3rem;line-height:0.4rem;a{color:#1FC0FF;font-family:Arial;font-size:0.16rem;font-weight:300;text-decoration:none;}}"]),s=r.ZP.div.withConfig({displayName:"headTop__Rht",componentId:"sc-15koa18-2"})(["display:flex;@media(max-width:1176px){display:none;}"]),c=r.ZP.div.withConfig({displayName:"headTop__BtnBox",componentId:"sc-15koa18-3"})(["background:#1FC0FF;border-radius:0.04rem;font-size:0.14rem;font-family:Arial;font-weight:400;color:#000;display:flex;justify-content:center;align-content:center;width:1.6rem;line-height:0.2rem;height:0.36rem;padding-top:0.08rem;box-sizing:border-box;margin-left:0.64rem;img{width:0.2rem;height:0.2rem;margin-right:0.1rem;}"]),f=r.ZP.div.withConfig({displayName:"headTop__MenuBox",componentId:"sc-15koa18-4"})(["width:0.24rem;height:0.24rem;"]);function u(){return(0,i.jsx)(a,{children:(0,i.jsxs)("div",{className:"mainContent",children:[(0,i.jsx)("div",{children:(0,i.jsx)("img",{src:"/assets/images/logoTop.png",alt:""})}),(0,i.jsxs)(s,{children:[(0,i.jsxs)(l,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"Governance"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"Whitepaper"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"About us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"Blog"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"My nowhere"})}),(0,i.jsx)("li",{children:(0,i.jsx)(o.default,{href:"/",children:"More"})})]}),(0,i.jsxs)(c,{children:[(0,i.jsx)("img",{src:"/assets/images/wallet_nor.png",alt:""}),(0,i.jsx)("span",{children:"Connect Wallet"})]})]}),(0,i.jsx)(f,{children:(0,i.jsx)("img",{src:"/assets/images/mobile/menu.png",alt:""})})]})})}},1660:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/headTop",function(){return t(3047)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[774,888,179],(function(){return n=1660,e(e.s=n);var n}));var n=e.O();_N_E=n}]);