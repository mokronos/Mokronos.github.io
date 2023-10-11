"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,d=s["".concat(u,".").concat(h)]||s[h]||m[h]||i;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Neural network",layout:"base"},l="Overview of neural network architecture",o={permalink:"/blog/neural_network",source:"@site/blog/neural_network.md",title:"Neural network",description:"Intuitive understanding",date:"2023-10-11T22:07:49.000Z",formattedDate:"October 11, 2023",tags:[],readingTime:.99,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Neural network",layout:"base"},prevItem:{title:"Machine Learning",permalink:"/blog/machine_learning"},nextItem:{title:"notes",permalink:"/blog/notes"}},u={authorsImageUrls:[]},p=[{value:"Intuitive understanding",id:"intuitive-understanding",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Optimization",id:"optimization",level:2},{value:"Data",id:"data",level:2},{value:"Perceptron",id:"perceptron",level:2},{value:"Implement small deep learning library from scratch (with numpy)",id:"implement-small-deep-learning-library-from-scratch-with-numpy",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"intuitive-understanding"},"Intuitive understanding"),(0,a.kt)("p",null,"A neural network is pretty much just a function that maps a bunch of inputs to a bunch of outputs. First that function does bad at mapping. By showing a lot of input/output pairs the parameters in the function get adjusted to improve the mapping."),(0,a.kt)("p",null,"So there are three big parts of a neural network. The architecture of the network, the optimization of the parameters and the amount and quality of the data."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How many layers?"),(0,a.kt)("li",{parentName:"ul"},"What type of layers?"),(0,a.kt)("li",{parentName:"ul"},"What activation functions?"),(0,a.kt)("li",{parentName:"ul"},"Input and output dimensions?")),(0,a.kt)("h2",{id:"optimization"},"Optimization"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"What does the loss function look like?"),(0,a.kt)("li",{parentName:"ul"},"Gradient descent?"),(0,a.kt)("li",{parentName:"ul"},"What optimizer?"),(0,a.kt)("li",{parentName:"ul"},"When and how fast to change the parameters?"),(0,a.kt)("li",{parentName:"ul"},"When to stop training?"),(0,a.kt)("li",{parentName:"ul"},"Is there overfitting?")),(0,a.kt)("h2",{id:"data"},"Data"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How much data is there?"),(0,a.kt)("li",{parentName:"ul"},"Is Data argumentation necessary and/or useful?"),(0,a.kt)("li",{parentName:"ul"},"Can there be too much data?"),(0,a.kt)("li",{parentName:"ul"},"Is there bias in data?")),(0,a.kt)("h1",{id:"practical-stuff"},"Practical Stuff"),(0,a.kt)("h2",{id:"perceptron"},"Perceptron"),(0,a.kt)("p",null,"The Perceptron is the simplest neural network possible."),(0,a.kt)("h2",{id:"implement-small-deep-learning-library-from-scratch-with-numpy"},"Implement small deep learning library from scratch (with numpy)"),(0,a.kt)("p",null,"At some point!! To help with a deeper understanding of backpropagation and the inner workings in general."))}m.isMDXComponent=!0}}]);