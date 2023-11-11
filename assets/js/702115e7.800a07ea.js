"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5539],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),h=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=h(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var h=2;h<s;h++)i[h]=a[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},51:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var r=a(7462),n=(a(7294),a(3905));const s={title:"CS50",layout:"base"},i="CS50 Notes",o={permalink:"/blog/cs50",source:"@site/blog/cs50.md",title:"CS50",description:"Lecture 0",date:"2023-11-11T19:10:35.000Z",formattedDate:"November 11, 2023",tags:[],readingTime:7.345,hasTruncateMarker:!1,authors:[],frontMatter:{title:"CS50",layout:"base"},prevItem:{title:"Coding",permalink:"/blog/coding"},nextItem:{title:"Daily ToDos",permalink:"/blog/daily"}},l={authorsImageUrls:[]},h=[{value:"Lecture 0",id:"lecture-0",level:2},{value:"Lecture 1",id:"lecture-1",level:2},{value:"Compiling",id:"compiling",level:3},{value:"Basic C syntax",id:"basic-c-syntax",level:3},{value:"Lecture 2",id:"lecture-2",level:2},{value:"Some more compiling",id:"some-more-compiling",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Lecture 3",id:"lecture-3",level:2},{value:"Search",id:"search",level:3},{value:"Big <em>O</em>",id:"big-o",level:3},{value:"Different search algorithms",id:"different-search-algorithms",level:3},{value:"Different sorting algorithms",id:"different-sorting-algorithms",level:3},{value:"Recursion",id:"recursion",level:3},{value:"Lecture 4",id:"lecture-4",level:2},{value:"Lecture 5",id:"lecture-5",level:2},{value:"Linked lists",id:"linked-lists",level:3},{value:"Trees",id:"trees",level:3},{value:"Other data structures",id:"other-data-structures",level:3},{value:"Lecture 6",id:"lecture-6",level:2},{value:"Learning a new programming language",id:"learning-a-new-programming-language",level:3},{value:"Lecture 7",id:"lecture-7",level:2},{value:"Data processing",id:"data-processing",level:3},{value:"Lecture 8",id:"lecture-8",level:2},{value:"The internet",id:"the-internet",level:3},{value:"IP",id:"ip",level:4},{value:"TPC/UDP",id:"tpcudp",level:4},{value:"DNS",id:"dns",level:4},{value:"Clientside",id:"clientside",level:3},{value:"HTTP",id:"http",level:4},{value:"URL",id:"url",level:4},{value:"GET/POST",id:"getpost",level:4},{value:"HTML",id:"html",level:4},{value:"CSS",id:"css",level:4},{value:"JavaScript",id:"javascript",level:4},{value:"Lecture 9",id:"lecture-9",level:2},{value:"Web server programming",id:"web-server-programming",level:3}],c={toc:h},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"lecture-0"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/0/"},"Lecture 0")),(0,n.kt)("h2",{id:"lecture-1"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/1/"},"Lecture 1")),(0,n.kt)("h3",{id:"compiling"},"Compiling"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"make <program_name>\n")),(0,n.kt)("p",null,"With file ending."),(0,n.kt)("p",null,"Make can be used to compile most files. Then one can execute them without file ending."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./<program_name>\n")),(0,n.kt)("h3",{id:"basic-c-syntax"},"Basic C syntax"),(0,n.kt)("p",null,"No need to go over this."),(0,n.kt)("h2",{id:"lecture-2"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/2/"},"Lecture 2")),(0,n.kt)("h3",{id:"some-more-compiling"},"Some more compiling"),(0,n.kt)("p",null,"Make is essentially calling the language specific compilers. For C clang is called. With clang includes need to be manually added as an argument. Make does this automatically."),(0,n.kt)("p",null,"Compiling is generally done in multiple steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Preprocessing:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"adding in includes and macros"),(0,n.kt)("li",{parentName:"ul"},"removing comments"))),(0,n.kt)("li",{parentName:"ol"},"Compiling",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"converts code to assembly"))),(0,n.kt)("li",{parentName:"ol"},"Assembling",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"converts assembly to binary, which is machine code and can be run on a CPU."))),(0,n.kt)("li",{parentName:"ol"},"Linking",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"puts compiled includes in the binary code. No need to compile includes multiple times.")))),(0,n.kt)("h3",{id:"debugging"},"Debugging"),(0,n.kt)("p",null,"Bugs are errors in a program, so that it performs differently than expected. Finding and fixing these errors is called Debugging."),(0,n.kt)("h2",{id:"lecture-3"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/3/"},"Lecture 3")),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",null,"Arrays are just lists of entries. Computers can only look at one entry at a time, so search algorithms are needed to look up specific entries."),(0,n.kt)("h3",{id:"big-o"},"Big ",(0,n.kt)("em",{parentName:"h3"},"O")),(0,n.kt)("p",null,"Most search algorithms try to achieve the same thing. The main difference is the running time. This is not exactly in seconds but as the complexity of the algorithm."),(0,n.kt)("p",null,"To do that one uses the big ",(0,n.kt)("em",{parentName:"p"},"O")," notation, which describes how much time the algorithm takes approximately dependent on the size of the problem. The most common running times are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\\","(O(n^2)","\\",")"),(0,n.kt)("li",{parentName:"ul"},"\\","(O(n \\log n)","\\",")"),(0,n.kt)("li",{parentName:"ul"},"\\","(O(n)","\\",")"),(0,n.kt)("li",{parentName:"ul"},"\\","(O(\\log n)","\\",")"),(0,n.kt)("li",{parentName:"ul"},"\\","(O(1)","\\",")")),(0,n.kt)("p",null,"The ","\\","(O","\\",") describes the upper bound of time steps an algorithm takes. The lower bound is described by ","\\","(\\Omega","\\","), and if the two are the same one uses ","\\","(\\Theta","\\",")."),(0,n.kt)("h3",{id:"different-search-algorithms"},"Different search algorithms"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/search"},"Here.")),(0,n.kt)("h3",{id:"different-sorting-algorithms"},"Different sorting algorithms"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/sort"},"Some Sort Algorithms.")),(0,n.kt)("h3",{id:"recursion"},"Recursion"),(0,n.kt)("p",null,"Recursion can be helpful to express logic, for example binary search. One needs to be careful when defining the breaking condition, so not too much memory is used by going too deep."),(0,n.kt)("h2",{id:"lecture-4"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/4/"},"Lecture 4")),(0,n.kt)("p",null,"Pointers are variables which store memory addresses where the values of other variables might be stored. It's important to know the difference, so not to copy the address and think one copied the value of the variable.",(0,n.kt)("br",{parentName:"p"}),"\n","The Syntax for arrays just uses the address of the first element and adds the indices of the successive elements to that address. Same is happening with strings. Strings are just one pointer to the first character. The computer looks at the successive addresses and stops at the element ",(0,n.kt)("inlineCode",{parentName:"p"},"\\0"),".",(0,n.kt)("br",{parentName:"p"}),"\n","It's important to know that when accessing uninitialized memory one can see values that have been saved by previous programs at that address. This can be dangerous, if there are passwords saved for example.",(0,n.kt)("br",{parentName:"p"}),"\n","One can check memory errors with valgrind on the command line.",(0,n.kt)("br",{parentName:"p"}),"\n","All this is important if one wants to make the program as efficient as possible and debug deep down. But for high level languages like python this is not as important as python mostly handles this for you, with less efficiency."),(0,n.kt)("h2",{id:"lecture-5"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/5/"},"Lecture 5")),(0,n.kt)("h3",{id:"linked-lists"},"Linked lists"),(0,n.kt)("p",null,"Linked lists are list where the elements are not stored behind each other in memory but at separate places. After the first value one needs to store a pointer to the next value, and so on.",(0,n.kt)("br",{parentName:"p"}),"\n","If one wants to add a element to a normal array and the memory slot after the originally last element is already full, we have an issue. We can either copy the array to a new location in memory with enough space, which requires some runtime, or we use a linked list where adding a new element is trivial, as the element after the last element is always reserved for a pointer to a potential new element.",(0,n.kt)("br",{parentName:"p"}),"\n","So if we have a constant length list, use a normal array, as the linked list would require more memory. If we might change the length of the list, use a linked list, as the overhead is less than the potential cost of copying a normal array."),(0,n.kt)("h3",{id:"trees"},"Trees"),(0,n.kt)("p",null,"Trees are just defined by nodes. A node is a data structure which has one value and can have multiple pointers to child nodes."),(0,n.kt)("h3",{id:"other-data-structures"},"Other data structures"),(0,n.kt)("p",null,"There are several other data structures like queues (first-in-first-out), stacks (last-in-first-out) and dictionaries."),(0,n.kt)("h2",{id:"lecture-6"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/6/"},"Lecture 6")),(0,n.kt)("h3",{id:"learning-a-new-programming-language"},"Learning a new programming language"),(0,n.kt)("p",null,"Most programming languages are pretty similar. All of them have conditions, operators, data structures and other things. Differences are often just syntax or bigger things like how they handle scopes of variables and types. All in all, if you have mastered one language it is pretty easy to learn another language up to a decent level."),(0,n.kt)("h2",{id:"lecture-7"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/7/"},"Lecture 7")),(0,n.kt)("h3",{id:"data-processing"},"Data processing"),(0,n.kt)("p",null,"When downloading datasets or even collecting them yourself, most of them are not cleaned. Which means, there might be typos, different names for the same thing, columns which should be multiple columns and much more ugliness. Python is well equipped to clean data, especially with the help of regular expressions. However for quick fixes or searches a database language like sqlite is probably easier. To combine both, one can execute sql commands from within python with the sqlite library.",(0,n.kt)("br",{parentName:"p"}),"\n","When working with databases the most important thing is to escape user input to avoid injection attacks. When working with multiple servers and multiple users one should lock data that is currently changed by one server. Otherwise a second server might change the same data at the same time and one change gets lost or even worse unintended stuff happens."),(0,n.kt)("h2",{id:"lecture-8"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/8/"},"Lecture 8")),(0,n.kt)("h3",{id:"the-internet"},"The internet"),(0,n.kt)("h4",{id:"ip"},"IP"),(0,n.kt)("p",null,"The internet is basically just a big web of all the routers and in extension the computers/devices and servers of a lot of people in the world. One can send information to any other point in that web. To achieve that, one needs the internet protocol (IP) to tell the routers where to send the information.  "),(0,n.kt)("h4",{id:"tpcudp"},"TPC/UDP"),(0,n.kt)("p",null,"TPC is another protocol that helps with sending information to different programs of one IP address. It also allows sending large chunks of data in multiple parts. If the user has a bad connection certain parts can be sent again instead of all the parts. UDP is a protocol that allows sending large amounts of data, but it doesn't grantee delivery. This is useful for calls or other real time applications as one doesn't want to wait for new data, just to resend earlier data to get the perfect result.  "),(0,n.kt)("h4",{id:"dns"},"DNS"),(0,n.kt)("p",null,"When you type in a address in your web browser the computer and then your router somehow needs to know what IP address corresponds to the web address. This is done with DNS servers, which have huge lists which save these correspondences. So your router always first contacts a DNS server and gets a IP address back, which then can be used to contact the correct server to get the information one wants."),(0,n.kt)("h3",{id:"clientside"},"Clientside"),(0,n.kt)("h4",{id:"http"},"HTTP"),(0,n.kt)("p",null,"Browsers use Hypertext Transfer Protocol (HTTP) to interface with TPC/IP packets. HTTPS ensures the packets that arrive at the browser are encrypted."),(0,n.kt)("h4",{id:"url"},"URL"),(0,n.kt)("p",null,"A web address like ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com"},"https://www.google.com")," is also called a URL."),(0,n.kt)("h4",{id:"getpost"},"GET/POST"),(0,n.kt)("p",null,"GET and POST requests can be used by browsers to request content from servers.",(0,n.kt)("br",{parentName:"p"}),"\n","You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"curl")," on the command line to check the headers of the responses of servers to GET requests.  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},"curl -I -X GET https://www.harvard.edu/\n")),(0,n.kt)("p",null,"The status codes one gets back can then be interpreted and used to modify the request to get the correct response."),(0,n.kt)("h4",{id:"html"},"HTML"),(0,n.kt)("p",null,"Hypertext Markup Language is used to tell the browser what and how to display information. It is however not a programming language."),(0,n.kt)("h4",{id:"css"},"CSS"),(0,n.kt)("p",null,"To style HTML one can use Cascading Style Sheets (CSS) which isn't a programming language either."),(0,n.kt)("h4",{id:"javascript"},"JavaScript"),(0,n.kt)("p",null,"To change elements and styling one can use JavaScript, which is a programming language. It will be executed on the device of the user."),(0,n.kt)("h2",{id:"lecture-9"},(0,n.kt)("a",{parentName:"h2",href:"https://cs50.harvard.edu/college/2022/spring/notes/9/"},"Lecture 9")),(0,n.kt)("h3",{id:"web-server-programming"},"Web server programming"),(0,n.kt)("p",null,"A framework like flask or django can be used to program a server with python to send responses to users. So when the user types in a certain URL or clicks on a link, the server sends data in terms of a HTML page, CSS and JavaScript back. This data can be dynamically generated with the full power of python. The python code then communicates on the server with a database, sometimes on another server.",(0,n.kt)("br",{parentName:"p"}),"\n","This enables accounts and other things where the website needs to remember stuff about the user. Often times, for example for autocomplete it is helpful to use a mix of JavaScript and serverside code to accelerate the results, as responses from the server take some time compared to calculations on device."))}d.isMDXComponent=!0}}]);