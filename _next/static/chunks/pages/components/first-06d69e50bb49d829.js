(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7942:function(e,n,t){"use strict";var r=t(5696);n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(4957),u=t(9898),f=t(4206);var l={};function i(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),s=a.default.useMemo((function(){var n=c.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?c.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,_=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,g=f.useIntersection({rootMargin:"200px"}),L=r(g,2),m=L[0],w=L[1],M=a.default.useCallback((function(e){m(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,m]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&i(o,d,p,{locale:n})}),[p,d,w,b,t,o]);var k={ref:M,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,f){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:f,scroll:u}))}(e,o,d,p,h,y,_,b)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(d)&&i(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof b?b:o&&o.locale,R=o&&o.isLocaleDomain&&c.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);k.href=R||c.addBasePath(c.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,k)};n.default=s},4206:function(e,n,t){"use strict";var r=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,f=e.disabled||!c,l=o.useRef(),i=o.useState(!1),s=r(i,2),d=s[0],p=s[1],v=o.useState(n?n.current:null),h=r(v,2),y=h[0],_=h[1],b=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),f||d||e&&e.tagName&&(l.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:t}))}),[f,y,t,d]);return o.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){n&&_(n.current)}),[n]),[b,d]};var o=t(7294),a=t(6286),c="undefined"!==typeof IntersectionObserver;var u=new Map},870:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/first",function(){return t(3520)}])},1664:function(e,n,t){e.exports=t(7942)}},function(e){e.O(0,[520,774,888,179],(function(){return n=870,e(e.s=n);var n}));var n=e.O();_N_E=n}]);