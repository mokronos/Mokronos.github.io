"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={layout:"base",title:"Data Preparation and Feature Engineering"},i="SQL vs Python vs Excel/Sheets",l={permalink:"/blog/data_preparation",source:"@site/blog/data_preparation.md",title:"Data Preparation and Feature Engineering",description:'SQL is probably most useful, when it just comes to data manipulation and query. Excel is easier because it is more "what you see is what you get" due to the UI. If you need to go beyond data manipulation into machine learning python is probably the best.',date:"2023-11-11T19:10:35.000Z",formattedDate:"November 11, 2023",tags:[],readingTime:1.4,hasTruncateMarker:!1,authors:[],frontMatter:{layout:"base",title:"Data Preparation and Feature Engineering"},prevItem:{title:"Daily ToDos",permalink:"/blog/daily"},nextItem:{title:"Training Guide",permalink:"/blog/deep_learning"}},s={authorsImageUrls:[]},u=[{value:"When to transform",id:"when-to-transform",level:2},{value:"Prior to training",id:"prior-to-training",level:3},{value:"Pros",id:"pros",level:4},{value:"Cons",id:"cons",level:4},{value:"Within the model",id:"within-the-model",level:3},{value:"Pros",id:"pros-1",level:4},{value:"Cons",id:"cons-1",level:4},{value:"Visualizations",id:"visualizations",level:2},{value:"Normalization",id:"normalization",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'SQL is probably most useful, when it just comes to data manipulation and query. Excel is easier because it is more "what you see is what you get" due to the UI. If you need to go beyond data manipulation into machine learning python is probably the best.',(0,r.kt)("br",{parentName:"p"}),"\n","To learn SQL and use python for establishing a pipeline for machine learning, the best thing might be to use python to automate SQL commands. For quick stuff google sheets is probably good to learn."),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Machine Learning generally tries to recognize patterns in data to then generate new data points.\nTo achieve that, one needs to generate and transform a dataset to feed into the algorithms."),(0,r.kt)("p",null,"Mainly just notes taken from ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/machine-learning/data-prep"},"Google"),"."),(0,r.kt)("h1",{id:"dataset-generation"},"Dataset Generation"),(0,r.kt)("h1",{id:"dataset-transformation"},"Dataset Transformation"),(0,r.kt)("h2",{id:"when-to-transform"},"When to transform"),(0,r.kt)("h3",{id:"prior-to-training"},"Prior to training"),(0,r.kt)("h4",{id:"pros"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"computation only performed once")),(0,r.kt)("h4",{id:"cons"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Transformations need to be reproduced at prediction time. New data can be unpredictable."),(0,r.kt)("li",{parentName:"ul"},"need to rerun dataset generation when changing transformations, which may lead to slow iterations. Not an issue with a small dataset.")),(0,r.kt)("h3",{id:"within-the-model"},"Within the model"),(0,r.kt)("h4",{id:"pros-1"},"Pros"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can always use the same data, as happen in the model."),(0,r.kt)("li",{parentName:"ul"},"when changing transformations the same data is still used, which leads to fast iterations.")),(0,r.kt)("h4",{id:"cons-1"},"Cons"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transformations can increase latency, this is the case with transformations at prediction time as well.")),(0,r.kt)("h2",{id:"visualizations"},"Visualizations"),(0,r.kt)("p",null,"Always look at graphs or other visualizations of your dataset, before and after transformations to detect errors or irregularities."),(0,r.kt)("h2",{id:"normalization"},"Normalization"),(0,r.kt)("p",null,"When having features with highly different ranges of numeric values it is recommended to perform normalization.\nGradient decent can have issues and slowly converge otherwise."))}d.isMDXComponent=!0}}]);