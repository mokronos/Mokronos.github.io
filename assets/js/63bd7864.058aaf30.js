"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9734],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),d=o(a),g=r,s=d["".concat(m,".").concat(g)]||d[g]||k[g]||l;return a?n.createElement(s,i(i({ref:e},u),{},{components:a})):n.createElement(s,i({ref:e},u))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[d]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5159:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(7462),r=(a(7294),a(3905));const l={title:"Tidy data",layout:"base"},i="Tidying data",p={permalink:"/blog/tidy_data",source:"@site/blog/tidy_data.md",title:"Tidy data",description:"Mostly a summary of the paper tidy data.",date:"2023-09-23T15:55:21.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:.94,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Tidy data",layout:"base"},prevItem:{title:"Sort",permalink:"/blog/sort"},nextItem:{title:"Knowing the unknown",permalink:"/blog/unknown"}},m={authorsImageUrls:[]},o=[{value:"Melting",id:"melting",level:2},{value:"Messy:",id:"messy",level:3},{value:"Molten:",id:"molten",level:3},{value:"String splitting",id:"string-splitting",level:2},{value:"Casting",id:"casting",level:2}],u={toc:o},d="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mostly a summary of the paper ",(0,r.kt)("a",{parentName:"p",href:"https://vita.had.co.nz/papers/tidy-data.pdf"},"tidy data"),"."),(0,r.kt)("p",null,"Example of badly formatted data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"treatmenta"),(0,r.kt)("th",{parentName:"tr",align:null},"treatmentb"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"John Smith"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jane Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mary Johnson"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Better formatted version of that data:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"name"),(0,r.kt)("th",{parentName:"tr",align:null},"trt"),(0,r.kt)("th",{parentName:"tr",align:null},"result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jane Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"16")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Jane Doe"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"11")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"John Smith"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"John Smith"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mary Johnson"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mary Johnson"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Important guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rows: observations"),(0,r.kt)("li",{parentName:"ul"},"Columns: variables"),(0,r.kt)("li",{parentName:"ul"},"Values: variable values at specific observations")),(0,r.kt)("p",null,"Order:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"variables: fixed (descriptions of the experiment) first, then measured variables, always the ones related to each other next to each other"),(0,r.kt)("li",{parentName:"ul"},"observations: order by first variable, then break ties with the following variables")),(0,r.kt)("p",null,"This leads to a standard, which is important as programs knows how their input is structured. So they can take the data, transform it and return tidy data again."),(0,r.kt)("h1",{id:"from-messy-to-tidy"},"From messy to tidy"),(0,r.kt)("p",null,"To get a dataset from messy to tidy one can employ three operations:"),(0,r.kt)("h2",{id:"melting"},"Melting"),(0,r.kt)("p",null,"Turns multiple columns that are variables into a column with the names of the specific columns and a column with the value."),(0,r.kt)("h3",{id:"messy"},"Messy:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"row"),(0,r.kt)("th",{parentName:"tr",align:null},"a"),(0,r.kt)("th",{parentName:"tr",align:null},"b"),(0,r.kt)("th",{parentName:"tr",align:null},"c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"9")))),(0,r.kt)("h3",{id:"molten"},"Molten:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"row"),(0,r.kt)("th",{parentName:"tr",align:null},"column"),(0,r.kt)("th",{parentName:"tr",align:null},"value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"a"),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"b"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"c"),(0,r.kt)("td",{parentName:"tr",align:null},"9")))),(0,r.kt)("h2",{id:"string-splitting"},"String splitting"),(0,r.kt)("h2",{id:"casting"},"Casting"))}k.isMDXComponent=!0}}]);