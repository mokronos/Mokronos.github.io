"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6638],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function m(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?m(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)t=m[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},N=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,m=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),N=r,k=c["".concat(l,".").concat(N)]||c[N]||h[N]||m;return t?n.createElement(k,s(s({ref:a},o),{},{components:t})):n.createElement(k,s({ref:a},o))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var m=t.length,s=new Array(m);s[0]=N;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:r,s[1]=p;for(var i=2;i<m;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},1868:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>m,metadata:()=>p,toc:()=>i});var n=t(7462),r=(t(7294),t(3905));const m={title:"Search",layout:"base"},s="Search algorithms",p={permalink:"/blog/search",source:"@site/blog/search.md",title:"Search",description:"Implementation of different search algorithms in python.",date:"2023-09-23T17:36:49.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:1.245,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Search",layout:"base"},prevItem:{title:"PyTorch",permalink:"/blog/pytorch"},nextItem:{title:"Sort",permalink:"/blog/sort"}},l={authorsImageUrls:[]},i=[{value:"Linear Search",id:"linear-search",level:2},{value:"Binary Search",id:"binary-search",level:2},{value:"Sorting",id:"sorting",level:2}],o={toc:i},c="wrapper";function h(e){let{components:a,...t}=e;return(0,r.kt)(c,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implementation of different search algorithms in python."),(0,r.kt)("p",null,"Sample Array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"x = [3,1,4,5,9,6,2]\n")),(0,r.kt)("p",null,"Goal:"),(0,r.kt)("p",null,"Search 1 specific number. If not in array, return ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),". If in array return the index of the number."),(0,r.kt)("h2",{id:"linear-search"},"Linear Search"),(0,r.kt)("p",null,"Just look through every entry from left to right and check if the entry is equal to the target."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def linear(input, target):\n    for idx, entry in enumerate(input):\n        if entry == target:\n            return idx\n    return -1\n")),(0,r.kt)("p",null,"Complexity:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("h2",{id:"binary-search"},"Binary Search"),(0,r.kt)("p",null,"Only works with a sorted list!",(0,r.kt)("br",{parentName:"p"}),"\n","Look at the middle of the list first and check if that entry is the target. If it isn't the target, compare that number with the target. If the target is higher, repeat from the first step with the right half of the list, otherwise with the left half."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def binary(input, target, idx = None):\n    \n    length = len(input)\n\n    if length == 0:\n        return -1\n\n    middle = length//2\n\n    if idx == None:\n        idx = middle\n\n    if input[middle]==target:\n        return idx\n\n    if input[middle]>target:\n        return binary(input[:middle], target, idx-((middle//2)+1))\n    else:\n        return binary(input[middle+1:], target, idx+((middle//2)+1))\n")),(0,r.kt)("p",null,"Complexity:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"O"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"log"),(0,r.kt)("mo",{parentName:"mrow"},"\u2061"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(\\log n)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mop"},"lo",(0,r.kt)("span",{parentName:"span",style:{marginRight:"0.01389em"}},"g")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"))))),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega(1)")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,r.kt)("h2",{id:"sorting"},"Sorting"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Now the question is:"),(0,r.kt)("br",{parentName:"p"}),"\n","Is it better to just do linear search or sort the array and then do binary search. For one search linear search would make more sense. However in practice the same arrays often get searched multiple times. So it is better to sort them once and then do binary search multiple times on the sorted array to save time.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"/blog/sort"},"Some Sort Algorithms.")))}h.isMDXComponent=!0}}]);