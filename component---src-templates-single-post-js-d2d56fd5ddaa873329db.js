(self.webpackChunktyped_tech_blog=self.webpackChunktyped_tech_blog||[]).push([[846],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,i){return n()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),i=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,r){var o=r(3395);e.exports={MDXRenderer:o}},3395:function(e,t,r){var o=r(9100),n=r(319),a=r(9713),i=r(7316),u=["scope","children"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c=r(7294),s=r(4983).mdx,d=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=i(e,u),l=d(t),f=c.useMemo((function(){if(!r)return null;var e=p({React:c,mdx:s},l),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return c.createElement(f,p({},a))}},6591:function(e,t,r){"use strict";r.r(t);var o=r(7294),n=r(6725),a=(r(1496),r(1934)),i=r(9),u=r(6607);var l=i.default.h1.withConfig({displayName:"singlePost__PostTitle",componentId:"sc-1yyie7s-0"})(["width:100%;margin:48px 0 24px 0;color:var(--adaptiveGray900);font-weight:600;text-align:center;"]),p=i.default.h2.withConfig({displayName:"singlePost__PostInfo",componentId:"sc-1yyie7s-1"})(["width:100%;margin:24px 0;color:var(--adaptiveGray500);text-align:center;"]),c=i.default.div.withConfig({displayName:"singlePost__MDXRendererWrapper",componentId:"sc-1yyie7s-2"})(["font-size:16px;line-height:1.5;word-wrap:break-word;background-color:var(--adaptiveGray50);padding:0 ",";padding-bottom:64px;","{padding:0 ",";padding-bottom:64px;}color:var(--adaptiveGray900);"],(function(e){return e.theme.paddings.xxxxxl}),(function(e){return e.theme.deviceSizes.desktop}),(function(e){return e.theme.paddings.global}));t.default=function(e){var t,r,i,s,d,f,x=e.data,m=(e.pageContext,null===(t=x.mdx.frontmatter)||void 0===t?void 0:t.title),y=null===(r=x.mdx.frontmatter)||void 0===r?void 0:r.excerpt,v=null===(i=x.mdx.frontmatter)||void 0===i?void 0:i.date,b=null===(s=x.mdx.frontmatter)||void 0===s?void 0:s.author;return null===(d=x.mdx.frontmatter)||void 0===d||null===(f=d.featuredImage)||void 0===f||f.childImageSharp.fixed,o.createElement(o.Fragment,null,o.createElement(a.HJ,{title:m,description:y,author:b}),o.createElement(l,Object.assign({itemprop:"headline"},(0,u.Z)("up",.75,0)),m),o.createElement(p,null,v," / ",b),o.createElement(a.iz,null),o.createElement(c,null,o.createElement(n.MDXRenderer,{className:"markdown-body"},x.mdx.body)))}}}]);
//# sourceMappingURL=component---src-templates-single-post-js-d2d56fd5ddaa873329db.js.map