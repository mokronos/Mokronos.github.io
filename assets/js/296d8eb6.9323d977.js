"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8023],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),h=i,d=c["".concat(s,".").concat(h)]||c[h]||m[h]||n;return a?r.createElement(d,l(l({ref:t},u),{},{components:a})):r.createElement(d,l({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},7613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(7462),i=(a(7294),a(3905));const n={title:"Machine Learning",layout:"base"},l="Machine Learning",o={permalink:"/blog/machine_learning",source:"@site/blog/machine_learning.md",title:"Machine Learning",description:"Preparation",date:"2023-11-11T19:10:35.000Z",formattedDate:"November 11, 2023",tags:[],readingTime:2.865,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Machine Learning",layout:"base"},prevItem:{title:"Logic",permalink:"/blog/logic"},nextItem:{title:"Neural network",permalink:"/blog/neural_network"}},s={authorsImageUrls:[]},p=[{value:"Preparation",id:"preparation",level:2},{value:"Sources",id:"sources",level:2},{value:"Problem description",id:"problem-description",level:2},{value:"Problem solution",id:"problem-solution",level:2},{value:"How to get there",id:"how-to-get-there",level:2},{value:"Define the problem",id:"define-the-problem",level:3},{value:"Prepare Data",id:"prepare-data",level:3},{value:"Spot check algorithms",id:"spot-check-algorithms",level:3},{value:"Improving Results",id:"improving-results",level:3},{value:"Present Results",id:"present-results",level:3},{value:"Confusion Matrix:",id:"confusion-matrix",level:2},{value:"Performance Metrics:",id:"performance-metrics",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"preparation"},"Preparation"),(0,i.kt)("p",null,"Going Through ",(0,i.kt)("a",{parentName:"p",href:"https://cs50.harvard.edu/college/2022/spring/notes/0/"},"CS50")," for refresh of some basics (",(0,i.kt)("a",{parentName:"p",href:"/blog/cs50"},"Notes"),")."),(0,i.kt)("h2",{id:"sources"},"Sources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/start-here/"},"Roadmap/Plan"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"http://karpathy.github.io/2022/03/14/lecun1989/"},"Motivation/Karpathy is a cool dude")),(0,i.kt)("h2",{id:"problem-description"},"Problem description"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Find a model or procedure that makes best use of historical data comprised of inputs and outputs in order to skillfully predict outputs given new and unseen inputs in the future. ",(0,i.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/think-machine-learning/#:~:text=Find%20a%20model%20or%20procedure%20that%20makes%20best%20use%20of%20historical%20data%20comprised%20of%20inputs%20and%20outputs%20in%20order%20to%20skillfully%20predict%20outputs%20given%20new%20and%20unseen%20inputs%20in%20the%20future."},"[1]"))),(0,i.kt)("h2",{id:"problem-solution"},"Problem solution"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A model or procedure that automatically creates the most likely approximation of the unknown underlying relationship between inputs and associated outputs in historical data. ",(0,i.kt)("a",{parentName:"p",href:"https://machinelearningmastery.com/think-machine-learning/#:~:text=as%20the%20following%3A-,A%20model%20or%20procedure%20that%20automatically%20creates%20the%20most%20likely%20approximation%20of%20the%20unknown%20underlying%20relationship%20between%20inputs%20and%20associated%20outputs%20in%20historical%20data.,-Again%2C%20this%20is"},"[1]"))),(0,i.kt)("h2",{id:"how-to-get-there"},"How to get there"),(0,i.kt)("h3",{id:"define-the-problem"},"Define the problem"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Describe problem informally and formally and list assumptions and similar problems"),(0,i.kt)("li",{parentName:"ul"},"List motivations for solving the problem, the benefits a solution provides and how the solution will be used."),(0,i.kt)("li",{parentName:"ul"},"Describe how the problem could be solved manually.")),(0,i.kt)("h3",{id:"prepare-data"},"Prepare Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider what data is available, what data is missing and what data can be removed."),(0,i.kt)("li",{parentName:"ul"},"Organize your selected data by formatting, cleaning and sampling from it."),(0,i.kt)("li",{parentName:"ul"},"Transform preprocessed data into features ready for machine learning.")),(0,i.kt)("h3",{id:"spot-check-algorithms"},"Spot check algorithms"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create small experiment with different transformations of the dataset and different standard algorithms"),(0,i.kt)("li",{parentName:"ul"},"run every pair a bunch of times and compare mean and variance"),(0,i.kt)("li",{parentName:"ul"},"helps flushing out the problem structure and getting the algorithms on which to focus in the next steps")),(0,i.kt)("h3",{id:"improving-results"},"Improving Results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Search through parameter space to find best performing models"),(0,i.kt)("li",{parentName:"ul"},"Ensemble: combine results of multiple models")),(0,i.kt)("h3",{id:"present-results"},"Present Results"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Define the context of the problem and the motivation"),(0,i.kt)("li",{parentName:"ul"},"Describe Problem as a question that got answered"),(0,i.kt)("li",{parentName:"ul"},"Concisely describe the solution as an answer to the question"),(0,i.kt)("li",{parentName:"ul"},"Specify limitations of the model, what questions it can't answer and with what probability it can answer questions")),(0,i.kt)("h1",{id:"precision-and-recall"},"Precision and Recall"),(0,i.kt)("p",null,"Let's assume we have a dataset of 10 items and some metric with a threshold | beyond witch our correctly classified items should lie.\nX is the positive class, o is the negative class.\nTo the right of the threshold the positive class is correctly classified, to the left it is not."),(0,i.kt)("p",null,"o o o o o x x | x o x"),(0,i.kt)("p",null,"We can then calculate the true positives, false positives, true negatives and false negatives."),(0,i.kt)("h2",{id:"confusion-matrix"},"Confusion Matrix:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"True Positives (TP): 2 (Number of positive items correctly classified)"),(0,i.kt)("li",{parentName:"ul"},"False Positives (FP): 2 (Number of positive items incorrectly classified)"),(0,i.kt)("li",{parentName:"ul"},"True Negatives (TN): 5 (Number of negative items correctly classified)"),(0,i.kt)("li",{parentName:"ul"},"False Negatives (FN): 1 (Number of negative items incorrectly classified)")),(0,i.kt)("h2",{id:"performance-metrics"},"Performance Metrics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Accuracy: (TP + TN) / (TP + TN + FP + FN) = 8/10"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rate of correct classifications."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Precision: TP / (TP + FP) = 2/4"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Precision is the rate of correctly predicted positives of all predicted positives. Should be high for detecting spam email. You want to let all important emails through, and it's fine if some spam get's through."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Recall: TP / (TP + FN) = 2/3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Recall is the rate of correctly predicted positives of all actual positives. Should be high for detecting thiefs. It's important to catch all of them, and fine if you pull out a few normal customers."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"F1 Score: 2 ",(0,i.kt)("em",{parentName:"p"}," (Precision ")," Recall) / (Precision + Recall) = 2/3"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Harmonic mean of precision and recall."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Specificity: TN / (TN + FP) = 5/7"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Rate of correct negative classifications.")))))}m.isMDXComponent=!0}}]);