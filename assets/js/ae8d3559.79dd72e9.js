"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8957],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>h});var n=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),i=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):m(m({},a),e)),t},o=function(e){var a=i(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=i(t),u=s,h=c["".concat(l,".").concat(u)]||c[u]||N[u]||r;return t?n.createElement(h,m(m({ref:a},o),{},{components:t})):n.createElement(h,m({ref:a},o))}));function h(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,m=new Array(r);m[0]=u;var p={};for(var l in a)hasOwnProperty.call(a,l)&&(p[l]=a[l]);p.originalType=e,p[c]="string"==typeof e?e:s,m[1]=p;for(var i=2;i<r;i++)m[i]=t[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2917:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>m,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=t(7462),s=(t(7294),t(3905));const r={title:"Sort",layout:"base"},m="Sorting algorithms",p={permalink:"/blog/sort",source:"@site/blog/sort.md",title:"Sort",description:"Implementation of different search algorithms in python.",date:"2023-09-23T17:36:49.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:1.435,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Sort",layout:"base"},prevItem:{title:"Search",permalink:"/blog/search"},nextItem:{title:"Tidy data",permalink:"/blog/tidy_data"}},l={authorsImageUrls:[]},i=[{value:"Selection sort",id:"selection-sort",level:2},{value:"Bubble sort",id:"bubble-sort",level:2},{value:"Merge sort",id:"merge-sort",level:2},{value:"Visualization",id:"visualization",level:2}],o={toc:i},c="wrapper";function N(e){let{components:a,...t}=e;return(0,s.kt)(c,(0,n.Z)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Implementation of different search algorithms in python."),(0,s.kt)("p",null,"Sample Array:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"x = [3,1,4,5,9,6,2]\n")),(0,s.kt)("p",null,"Goal:"),(0,s.kt)("p",null,"Sort array from lowest to highest entry and return it."),(0,s.kt)("h2",{id:"selection-sort"},"Selection sort"),(0,s.kt)("p",null,"Go through whole list and find the lowest number. Swap that number with the first number in the list. Start with one position to the right and repeat."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def selection(input):\n\n    for i in range(len(input)):\n\n        min_idx = i\n        for j in range(i,len(input)):\n            if input[j] < input[min_idx]:\n                min_idx = j\n        \n        input[i], input[min_idx] = input[min_idx], input[i]\n\n    return input\n")),(0,s.kt)("p",null,"Complexity:",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("h2",{id:"bubble-sort"},"Bubble sort"),(0,s.kt)("p",null,"Go through list and check if number is higher than the following number. If yes, swap the two numbers. If no, go to the next number. Repeat from the first step, but end one further position to the left."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def bubble(input):\n\n    for i in range(len(input)):\n        for j in range(len(input)-i-1):\n            if input[j] > input[j+1]:\n                input[j], input[j+1] = input[j+1], input[j]\n\n\n    return input\n")),(0,s.kt)("p",null,"Complexity:",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"O"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mi",{parentName:"msup"},"n"),(0,s.kt)("mn",{parentName:"msup"},"2")),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n^2)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0641em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))),(0,s.kt)("span",{parentName:"span",className:"mclose"},")"))))),(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u03a9"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,s.kt)("mi",{parentName:"mrow"},"n"),(0,s.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Omega(n)")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"\u03a9"),(0,s.kt)("span",{parentName:"span",className:"mopen"},"("),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,s.kt)("span",{parentName:"span",className:"mclose"},")")))))),(0,s.kt)("h2",{id:"merge-sort"},"Merge sort"),(0,s.kt)("p",null,'Divide list in middle and recursively repeat for left and right. When a list is only 1 number return it. When two of these lists got returned, they are sorted. Then they are combined again, by looking at the first entry in each list and appending the lower number to the result. Repeat until right and left are "empty".'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"def merge(input):\n\n    if len(input)==1:\n        return input\n\n    middle = len(input)//2\n\n    left, right = input[:middle], input[middle:]\n\n    left = merge(left)\n    right = merge(right)\n\n    result=[]\n\n    i = j = 0\n    while i < len(left) and j < len(right):\n        if left[i]<right[j]:\n            result.append(left[i])\n            i+=1\n        else:\n            result.append(right[j])\n            j+=1\n    \n    if i < len(left):\n        result += left[i:]\n\n    if j < len(right):\n        result += right[j:]\n\n    return result\n")),(0,s.kt)("p",null,"Complexity:",(0,s.kt)("br",{parentName:"p"}),"\n","\\","(O(n \\log n)","\\",")",(0,s.kt)("br",{parentName:"p"}),"\n","\\","(\\Omega(n \\log n)","\\",")"),(0,s.kt)("h2",{id:"visualization"},"Visualization"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.cs.usfca.edu/~galles/visualization/ComparisonSort.html"},"Here.")))}N.isMDXComponent=!0}}]);