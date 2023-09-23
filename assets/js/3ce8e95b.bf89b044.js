"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3762:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"Logic",layout:"base"},i="Logic",l={permalink:"/blog/logic",source:"@site/blog/logic.md",title:"Logic",description:"Some wiki stuff:",date:"2023-09-23T15:55:21.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:.715,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Logic",layout:"base"},prevItem:{title:"Human Robot Interaction",permalink:"/blog/hri"},nextItem:{title:"Machine Learning",permalink:"/blog/machine_learning"}},s={authorsImageUrls:[]},c=[{value:"Some wiki stuff:",id:"some-wiki-stuff",level:2},{value:"Idea",id:"idea",level:2}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"some-wiki-stuff"},"Some wiki stuff:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Argument_map"},"Argument map")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Logical_form"},"Logical form"))),(0,o.kt)("h2",{id:"idea"},"Idea"),(0,o.kt)("p",null,"It would be cool to have a somewhat standarised form of arguments or moral systems. This could be in form of an Argument map in a huge tree and implemented on a website or in a program."),(0,o.kt)("p",null,"So one could create ones own tree of axioms, premisses and conclusions. Those could be shared and argued about. The program could help identifiy contentions between two peoples moral systems so one can instantly focus on the disagreements."),(0,o.kt)("p",null,"The main issue is the uglieness of human input. Even with a some standard blocks like axioms and other logical forms humans still input their claims differently. So one would need some machine learning to interpret and compare arguments. With the advancements of language models like ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/GPT-3"},"GTP-3")," one may be able to achieve some decent results."))}p.isMDXComponent=!0}}]);