(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[891],{7304:function(e,i,t){"use strict";function n(e,i){(null==i||i>e.length)&&(i=e.length);for(var t=0,n=new Array(i);t<i;t++)n[t]=e[t];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,i){if(e){if("string"===typeof e)return n(e,i);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,i):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.r(i),t.d(i,{default:function(){return p}});var s=t(2125),a=t(9716),r=t(7294),l=t(5893),d=s.ZP.div.withConfig({displayName:"listItem__ItemBox",componentId:"sc-g7ebxf-0"})([".active{}"]),c=s.ZP.div.withConfig({displayName:"listItem__Titlex",componentId:"sc-g7ebxf-1"})(['font-size:20px;font-family:"Roboto-Bold";font-weight:bold;color:#FAFEFF;line-height:28px;display:flex;padding-left:24px;img{margin:3px 8px 0 0;width:20px;height:20px;}']),x=s.ZP.ul.withConfig({displayName:"listItem__List",componentId:"sc-g7ebxf-2"})(['display:flex;flex-direction:column;justify-content:flex-start;li{border-bottom:1px solid rgba(250,254,255,0.15);cursor:pointer;position:relative;margin:24px 24px 0;.modalbox{display:none;width:calc(100% + 48px);position:absolute;z-index:9;left:0;margin-left:-24px;}&:nth-child(1){.modalbox{top:-77px;}}&:nth-child(2){.modalbox{top:-161px;}}&:nth-child(3){.modalbox{top:-245px;}}&:nth-child(4){.modalbox{top:-329px;}}&:nth-child(5){.modalbox{top:-413px;}}&:hover{.modalbox{display:block;}}}.time{opacity:0.4;font-size:12px;font-weight:400;color:#FAFEFF;line-height:20px;margin-bottom:4px;}.content{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:"Roboto-Regular";font-size:16px;line-height:28px;font-weight:400;margin-bottom:7px;padding-left:15px;box-sizing:border-box;}']);function p(e){var i=(0,r.useState)(["Doing","Plans","Done"])[0],t=(0,r.useState)(!0),n=t[0],s=(t[1],(0,r.useState)(0)),p=(s[0],s[1],e.img),m=e.index,h=e.active;e.setShowBox;return(0,l.jsx)(d,{children:(0,l.jsxs)("div",{className:n&&m===h?"active":"",children:[(0,l.jsxs)(c,{children:[(0,l.jsx)("img",{src:p,alt:""}),i[m-1]]}),(0,l.jsx)(x,{children:o(Array(5)).map((function(e,i){return(0,l.jsxs)("li",{children:[(0,l.jsx)("div",{className:"modalbox",children:(0,l.jsx)(a.default,{})}),(0,l.jsxs)("div",{className:"first",children:[(0,l.jsx)("div",{className:"circle"}),(0,l.jsx)("div",{className:"time",children:"2022-01-31 22:22:23"})]}),(0,l.jsx)("div",{className:"content",children:"Maecenas sed diam eget risus varius ame diam eget risus varius ame"})]},i)}))})]})})}},9604:function(e,i,t){"use strict";t.r(i);var n=t(7294),o=t(2125),s=t(7304),a=t(5893),r=o.ZP.ul.withConfig({displayName:"listbox__Ulbox",componentId:"sc-upc5ot-0"})(["margin-top:48px;display:flex;justify-content:space-between;&> li{width:31.5%;background:rgba(250,254,255,0.02);border-radius:8px;border:1px solid rgba(250,254,255,0.15);padding:24px 0;box-sizing:border-box;min-height:500px;.circle{width:6px;height:6px;border-radius:6px;margin-right:8px;margin-top:5px;}.first{display:flex;}&:nth-child(1){.circle{background:#FFCE1F;}}&:nth-child(2){.circle{background:#1FFF28;}}&:nth-child(3){.circle{background:#1FC0FF;}}}"]);i.default=function(){var e=(0,n.useState)(1),i=e[0],t=e[1],o=function(e){t(e)};return(0,a.jsxs)(r,{children:[(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{active:i,setShowBox:o,index:1,img:"/assets/images/doing_nor.png"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{active:i,setShowBox:o,index:2,img:"/assets/images/plans.png"})}),(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{active:i,setShowBox:o,index:3,img:"/assets/images/done.png"})})]})}},9716:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return d}});var n=t(2125),o=t(7294),s=t(5893),a=n.ZP.div.withConfig({displayName:"modal__ModalBox",componentId:"sc-wc3fa9-0"})(['height:500px;border-radius:8px;background:url("/assets/images/card.jpg") no-repeat;background-size:100% 100%;padding:72px 24px;box-sizing:border-box;display:flex;justify-content:space-between;flex-direction:column;.contentbox{width:100%;font-family:"Roboto-Regular";font-size:14px;line-height:24px;font-weight:400;margin-bottom:7px;padding-left:15px;box-sizing:border-box;margin-top:16px;opacity:0.65;}']),r=n.ZP.div.withConfig({displayName:"modal__TitleBox",componentId:"sc-wc3fa9-1"})(['border-bottom:1px solid rgba(250,254,255,0.15);.time{opacity:0.4;font-size:12px;font-weight:400;color:#FAFEFF;line-height:20px;margin-bottom:4px;}.title{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-family:"Roboto-Regular";font-size:16px;line-height:28px;font-weight:400;margin-bottom:7px;padding-left:15px;box-sizing:border-box;}']),l=n.ZP.div.withConfig({displayName:"modal__Lasthr",componentId:"sc-wc3fa9-2"})(['padding-left:15px;box-sizing:border-box;display:flex;justify-content:space-between;align-content:center;font-size:12px;font-family:"Roboto-Regular";font-weight:400;color:#1FC0FF;line-height:20px;.lftbox{display:flex;align-content:center;img{margin-right:10px;width:16px;height:16px;}}']);function d(){var e=(0,o.useState)(!1),i=e[0],t=e[1];return(0,s.jsxs)(a,{children:[(0,s.jsxs)("div",{children:[(0,s.jsxs)(r,{children:[(0,s.jsxs)("div",{className:"first",children:[(0,s.jsx)("div",{className:"circle"}),(0,s.jsx)("div",{className:"time",children:"2022-01-31 22:22:23"})]}),(0,s.jsx)("div",{className:"title",children:"Maecenas sed diam eget risus varius ame diam eget risus varius ame"})]}),(0,s.jsx)("div",{className:"contentbox",children:"Here are the details of the current task, which are used to describe the contents of this task."})]}),(0,s.jsxs)(l,{children:[(0,s.jsxs)("div",{className:"lftbox",onClick:function(){t(!i)},children:[i&&(0,s.jsx)("img",{src:"/assets/images/selected.png",alt:""}),!i&&(0,s.jsx)("img",{src:"/assets/images/unselected.png",alt:""}),"Mark as completed"]}),(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"/assets/images/remove.png",alt:""})})]})]})}},5568:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/listbox",function(){return t(9604)}])}},function(e){e.O(0,[774,888,179],(function(){return i=5568,e(e.s=i);var i}));var i=e.O();_N_E=i}]);