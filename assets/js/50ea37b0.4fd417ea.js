"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const i={layout:"base",title:"Coding"},a="Random collection of Coding tips",l={permalink:"/blog/coding",source:"@site/blog/coding.md",title:"Coding",description:"Gitignore",date:"2023-09-23T15:55:21.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:.41,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"base",title:"Coding"},prevItem:{title:"classes",permalink:"/blog/classes"},nextItem:{title:"CS50",permalink:"/blog/cs50"}},c={authorsImageUrls:[]},p=[{value:"Gitignore",id:"gitignore",level:2},{value:"Python random seed",id:"python-random-seed",level:2},{value:"Vim tips",id:"vim-tips",level:2}],u={toc:p},s="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"gitignore"},"Gitignore"),(0,o.kt)("p",null,"Just select a gitignore template when creating a repository on github. Overview can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/github/gitignore"},"here"),"."),(0,o.kt)("h2",{id:"python-random-seed"},"Python random seed"),(0,o.kt)("p",null,"Need to set the seed in the file of the execution of the function. If the function is imported from another file, the seed will not be set for the imported function. Same for PyTorch."),(0,o.kt)("h2",{id:"vim-tips"},"Vim tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"gf to open file under cursor (markdown internal links)"),(0,o.kt)("li",{parentName:"ul"},"gx to open file under cursor with default program (images, urls)")))}f.isMDXComponent=!0}}]);