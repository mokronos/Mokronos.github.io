"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,d=s["".concat(c,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5295:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Docker"},l="Docker",i={permalink:"/blog/docker",source:"@site/blog/docker.md",title:"Docker",description:"I wanted to just have a raw ubuntu install to test my dotfiles.",date:"2023-11-11T19:10:35.000Z",formattedDate:"November 11, 2023",tags:[],readingTime:.615,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Docker"},prevItem:{title:"Training Guide",permalink:"/blog/deep_learning"},nextItem:{title:"Electric vehicles",permalink:"/blog/electric_vehicles"}},c={authorsImageUrls:[]},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I wanted to just have a raw ubuntu install to test my dotfiles."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create Dockerfile")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dockerfile"},"FROM ubuntu:latest\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Build image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker build -t ubuntu .\n")),(0,a.kt)("p",null,"-t creates a tag for this image, to reference it later.  "),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Run image")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --name ubuntu -td ubuntu\n")),(0,a.kt)("p",null,"--name gives the container a name, so you can reference it later.",(0,a.kt)("br",{parentName:"p"}),"\n","-t allocates a pseudo-TTY, so when all processes defined in Dockerfile are finished, the container will not exit.",(0,a.kt)("br",{parentName:"p"}),"\n","-d keeps the container running in the background.  "),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Attach to container")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -i -t ubuntu /bin/bash\n")),(0,a.kt)("p",null,"-i interactive mode",(0,a.kt)("br",{parentName:"p"}),"\n","-t allocate a pseudo-TTY",(0,a.kt)("br",{parentName:"p"}),"\n","runs bash in the container and attaches to it. Uses name specified in --name."))}m.isMDXComponent=!0}}]);