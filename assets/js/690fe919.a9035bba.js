"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5027],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,d=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(d,i(i({ref:t},h),{},{components:a})):r.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8415:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const o={title:"Human Robot Interaction",layout:"base"},i="Comparison of Human Robot Interaction Interfaces",l={permalink:"/blog/hri",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/hri.md",source:"@site/blog/hri.md",title:"Human Robot Interaction",description:"Task",date:"2023-09-23T13:56:24.000Z",formattedDate:"September 23, 2023",tags:[],readingTime:17.45,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Human Robot Interaction",layout:"base"},prevItem:{title:"Habits",permalink:"/blog/habits"},nextItem:{title:"Logic",permalink:"/blog/logic"}},s={authorsImageUrls:[]},p=[{value:"Task",id:"task",level:2},{value:"Comparison VR, AR, Bio-signal-based",id:"comparison-vr-ar-bio-signal-based",level:2},{value:"Virtual reality(VR)",id:"virtual-realityvr",level:3},{value:"Augmented reality(AR)",id:"augmented-realityar",level:3},{value:"Bio-signal-based",id:"bio-signal-based",level:3},{value:"Some abbreviations",id:"some-abbreviations",level:3},{value:"General papers",id:"general-papers",level:3},{value:"General comparisons",id:"general-comparisons",level:3},{value:"get at least one paper with an example for every interface type (VR, AR, bio-signal-based)",id:"get-at-least-one-paper-with-an-example-for-every-interface-type-vr-ar-bio-signal-based",level:3},{value:"VR",id:"vr",level:4},{value:"AR",id:"ar",level:4},{value:"Bio-signal-based",id:"bio-signal-based-1",level:4},{value:"Comparison",id:"comparison",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"Devices",id:"devices",level:3},{value:"Ease of use",id:"ease-of-use",level:3},{value:"Cost",id:"cost",level:3},{value:"Problems",id:"problems",level:3},{value:"Future potential",id:"future-potential",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"todo",id:"todo",level:2}],h={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"task"},"Task"),(0,n.kt)("p",null,"HRI interface comparisons with examples (VR, AR, bio-signal-based)"),(0,n.kt)("h2",{id:"comparison-vr-ar-bio-signal-based"},"Comparison VR, AR, Bio-signal-based"),(0,n.kt)("p",null,"Advantage of all of them is that the user can often interact with the robot in a natural way through hand and body gestures. This makes it possible for users without the technical knowledge of controlling the robot traditionally, to control the robot."),(0,n.kt)("h3",{id:"virtual-realityvr"},"Virtual reality(VR)"),(0,n.kt)("p",null,"Virtual reality puts a human into a virtual world to interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands.\nOne important aspect is ability to get almost instant feedback from the robot motion. This is important for the human to be able to learn how to control the robot.\nVR headsets can often be uncomfortable to wear for long periods of time. Newer headsets have batteries instead of cable connections, which can be better or worse depending on the use case.\nVR could technically do the save as AR does, by just recording the world around the human and displaying parts of it in VR. However the technology isn't there yet to perfectly display reality, so there is still clearly a difference.\nCould pre-render the actions given to the robot, before executing them."),(0,n.kt)("h3",{id:"augmented-realityar"},"Augmented reality(AR)"),(0,n.kt)("p",null,"Augmented reality enhances the real world around the human with digital information to better interact with a robot. The human can see the robot and the robot can see the human. The human can interact with the robot by using a controller or by using their hands.\nOne difference to VR is the ability to also see and better interact with the real world around the human."),(0,n.kt)("h3",{id:"bio-signal-based"},"Bio-signal-based"),(0,n.kt)("p",null,"Bio-signal-based devices can be used to control robots. Many different types of bio-signal-based devices exist, such as EEG, EOG, EMG, ECG, ERG, EGG, GSR and EDA."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Electroencephalography (EEG): Measures electrical activity of the brain."),(0,n.kt)("li",{parentName:"ul"},"Electrooculography (EOG): Measures electrical activity of the eye."),(0,n.kt)("li",{parentName:"ul"},"Electromyography (EMG): Measures electrical activity of the muscles."),(0,n.kt)("li",{parentName:"ul"},"Electrocardiography (ECG): Measures electrical activity of the heart."),(0,n.kt)("li",{parentName:"ul"},"Electroretinography (ERG): Measures electrical activity of the retina."),(0,n.kt)("li",{parentName:"ul"},"Electroglottography (EGG): Measures electrical activity of the vocal cords."),(0,n.kt)("li",{parentName:"ul"},"Galvanic skin response (GSR)/Electrodermal activity (EDA): Measures electrical activity of the skin.")),(0,n.kt)("p",null,"These devices can be used to control robots in many different ways. For example, a person can control a robot by thinking about moving it, or by moving their eyes to look at different parts of the robot. Bio-signal-based devices can also be used to control robots by measuring the person's heart rate, or by measuring the person's sweat levels."),(0,n.kt)("h3",{id:"some-abbreviations"},"Some abbreviations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ROS: Robot Operating System")),(0,n.kt)("h3",{id:"general-papers"},"General papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://link.springer.com/content/pdf/10.1007/s43154-020-00005-6.pdf"},"https://link.springer.com/content/pdf/10.1007/s43154-020-00005-6.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"overview of different HRI interfaces"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://graphics.cs.wisc.edu/Papers/2017/LRMG17/roman-vr-2017.pdf"},"https://graphics.cs.wisc.edu/Papers/2017/LRMG17/roman-vr-2017.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"general paper about VR as a HRI interface"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://ti.rutgers.edu/publications/papers/1999_ieee_tra.pdf"},"http://ti.rutgers.edu/publications/papers/1999_ieee_tra.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"paper about using VR for HRI"),(0,n.kt)("li",{parentName:"ul"},"decent overview of VR"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://robotics.mit.edu/teleoperating-robots-virtual-reality"},"https://robotics.mit.edu/teleoperating-robots-virtual-reality")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT article"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.allerin.com/blog/ar-vr-and-other-ways-of-controlling-robots"},"https://www.allerin.com/blog/ar-vr-and-other-ways-of-controlling-robots")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"article about different HRI interfaces"),(0,n.kt)("li",{parentName:"ul"},"might be perfect overview"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.mdpi.com/1424-8220/21/20/6863"},"https://www.mdpi.com/1424-8220/21/20/6863")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"huge summary/survey of bio-signal-based solutions"),(0,n.kt)("li",{parentName:"ul"},"for assistance/rehabilitation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2203.03254.pdf"},"https://arxiv.org/pdf/2203.03254.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"AR summary"),(0,n.kt)("li",{parentName:"ul"},"2022 paper")))),(0,n.kt)("h3",{id:"general-comparisons"},"General comparisons"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://reader.elsevier.com/reader/sd/pii/S2212827120314815?token=674B622691122E381C72A6FD9A55D0F0163342C7E2F3F3785601BAECC912EB05ED29318E11A2834A7D0B9019B9EE27A6&originRegion=eu-west-1&originCreation=20221104125245"},"https://reader.elsevier.com/reader/sd/pii/S2212827120314815?token=674B622691122E381C72A6FD9A55D0F0163342C7E2F3F3785601BAECC912EB05ED29318E11A2834A7D0B9019B9EE27A6&originRegion=eu-west-1&originCreation=20221104125245")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Review of VR/AR solutions for HRI"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://cs.brown.edu/people/er35/publications/SIEDS_2020.pdf"},"https://cs.brown.edu/people/er35/publications/SIEDS_2020.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"comparison of different VR approaches"),(0,n.kt)("li",{parentName:"ul"},"positional control (waypoint navigation)"),(0,n.kt)("li",{parentName:"ul"},"trajectory control (click and drag)")))),(0,n.kt)("h3",{id:"get-at-least-one-paper-with-an-example-for-every-interface-type-vr-ar-bio-signal-based"},"get at least one paper with an example for every interface type (VR, AR, bio-signal-based)"),(0,n.kt)("h4",{id:"vr"},"VR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1903.10064.pdf"},"https://arxiv.org/pdf/1903.10064.pdf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"controlling a swarm of robots with VR"),(0,n.kt)("li",{parentName:"ul"},"manipulating the environment in VR, zooming in and out"),(0,n.kt)("li",{parentName:"ul"},"placing walls in the environment to block the robots"),(0,n.kt)("li",{parentName:"ul"},"highlights intuitiveness of VR"),(0,n.kt)("li",{parentName:"ul"},"gestures are intuitive, but need some training"),(0,n.kt)("li",{parentName:"ul"},"visual information from the robots gets sent to pc and dynamically rendered in VR"),(0,n.kt)("li",{parentName:"ul"},"technically human swarm interaction (HSI)"),(0,n.kt)("li",{parentName:"ul"},"summary:\nVR is used in \\cite to control a swarm of robots. The robots are able to navigate and interact with each other on their own.\nThe user can use VR to manipulate the environment, zoom in and out, and place walls in the environment to block or guide the robots. Additionally the robots can be picked up and placed in a new location. Leap Motion is used to identify the users motions.\nThus the user can propose future actions or locations in the virtual environment and the robots will try to execute or move to them in the real world.\nThe authors conducted a usability study with 10 participants between the ages 20 and 35 with an engineering background. Is showed that the controls are intuitive and the test missions are accelerated with the help of human intervention. They note however that some of the gestures, specifically the wall placement and the world resizing, need some training to get used to.")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://h2r.cs.brown.edu/wp-content/uploads/whitney18.pdf"},"https://h2r.cs.brown.edu/wp-content/uploads/whitney18.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cs.brown.edu/people/gdk/pubs/vr_teleop.pdf"},"https://cs.brown.edu/people/gdk/pubs/vr_teleop.pdf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"controlling robots over the internet with VR (teleoperation)"),(0,n.kt)("li",{parentName:"ul"},"created interface to be used by other researchers"),(0,n.kt)("li",{parentName:"ul"},"can be used with consumer-grade headsets"),(0,n.kt)("li",{parentName:"ul"},"testing approach: ",(0,n.kt)("a",{parentName:"li",href:"https://cs.brown.edu/people/er35/publications/testing.pdf"},"https://cs.brown.edu/people/er35/publications/testing.pdf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"establishes baseline for other research"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1703.01270.pdf"},"https://arxiv.org/pdf/1703.01270.pdf"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"control of robot arms in VR"),(0,n.kt)("li",{parentName:"ul"},"VR Control Room"),(0,n.kt)("li",{parentName:"ul"},"highlights collocation capabilities of VR"),(0,n.kt)("li",{parentName:"ul"},"pick, place, assembly, manufacturing tasks"),(0,n.kt)("li",{parentName:"ul"},'summary:\nIn \\cite a team of researchers use VR to control a robot arm. The robot has two arms and is equipped with a camera at its "head". The user uses the consumer-grade headset Oculus Rift CV1 and two Razer Hydra hand trackers as controllers.\nIn VR the robot can then be controlled from a control room, which includes the view of the main camera and two optional views from the two robot arms. So the user feels as if they were in the robots head.\nTo test the system, the authors made an expert user pick up and assemble a Lego piece. They compared it to an automated algorithm on the same task and were able to show that the human performed perfect, whereas the algorithm showed some weakness on the assembly. The user reported that the cameras in the robot arms helped with the alignment of the pieces.\nThe teleoperation allows the user to perform actions from a save environment.\nThe paper highlights the ability of VR to utilize consumer-grade hardware.')))),(0,n.kt)("h4",{id:"ar"},"AR"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.frontiersin.org/articles/10.3389/frobt.2017.00020/full"},"https://www.frontiersin.org/articles/10.3389/frobt.2017.00020/full"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"uses tablet"),(0,n.kt)("li",{parentName:"ul"},"displays information about the robots motion on the tablet"),(0,n.kt)("li",{parentName:"ul"},"one tiltable camera, 1/3 of workspace visible at a time"),(0,n.kt)("li",{parentName:"ul"},"uses the tablet to control the robot"),(0,n.kt)("li",{parentName:"ul"},"3 interfaces: control with accelerometer of tablet",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"egocentric: user sees the workspace from the robots perspective. Parts of the workspace are not observable due to the lack of field of view and movement of the camera."),(0,n.kt)("li",{parentName:"ul"},"exocentric: user sees the workspace from a fixed position on the ceiling. Vision under the robot arm is blocked, so some objects can't be interacted with."),(0,n.kt)("li",{parentName:"ul"},"mobile mixed reality: user sees workspace from tablet in arbitrary position. Can access any location."))),(0,n.kt)("li",{parentName:"ul"},"pretrial (place one box somewhere else)  was easier with AR plot over workspace enabled"),(0,n.kt)("li",{parentName:"ul"},"mobile performs best"),(0,n.kt)("li",{parentName:"ul"},"article about it: ",(0,n.kt)("a",{parentName:"li",href:"https://thenewstack.io/smartphone-app-can-control-robots-augmented-reality/"},"https://thenewstack.io/smartphone-app-can-control-robots-augmented-reality/")),(0,n.kt)("li",{parentName:"ul"},"summary:\nAR can be used to enhance the environment. In \\cite the authors compare 3 interfaces. One egocentric, with a tiltable camera on the robots head, one exocentric, with the camera on the ceiling looking down, and the proposed method of using a mobile tablet as the camera. All three approaches use the tablets accelerometer to control the robots arms. The main advantage of the proposed method is, that its cameras field of view can reach all places, unlike the other two.\nThe users can see an overlay over the workspace on the tablet screen, where the robots maximum range of motion and potential actions can be projected.\nWhen testing the system, users performed better on the pretrial, when having the AR plot enabled. Additionally the mobile reality interface shows better performance than the other two.\nThe main points to take away, are that this approach needs visual markers in the environment, the user and the robot need to be in the same environment for the mobile version and the AR overlay helps the user and the robot interact better.")))),(0,n.kt)("h4",{id:"bio-signal-based-1"},"Bio-signal-based"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://link.springer.com/article/10.1007/s10514-020-09916-x"},"https://link.springer.com/article/10.1007/s10514-020-09916-x")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"earlier work used only EEG: ",(0,n.kt)("a",{parentName:"li",href:"http://groups.csail.mit.edu/drl/wiki/images/e/ec/Correcting_Robot_Mistakes_in_Real_Time_Using_EEG_Signals.pdf"},"http://groups.csail.mit.edu/drl/wiki/images/e/ec/Correcting_Robot_Mistakes_in_Real_Time_Using_EEG_Signals.pdf")),(0,n.kt)("li",{parentName:"ul"},"Uses EMG(muscle) + EEG(brain) to give swift feedback to robot"),(0,n.kt)("li",{parentName:"ul"},"EMG is used to detect the users intention, EEG is used to detect potential errors the robot or the human makes"),(0,n.kt)("li",{parentName:"ul"},"summary:\nIn the paper \\cite the authors used a hybrid of electromyography (EMG) and electroencephalography (EEG) to control a arm with a tool on it. The robot was supposed to hit one of three holes in the wall in front of it with the electric screwdriver in their hand. The user is equipped with electrodes on their head and surface bar electrodes are applied to their forearms. The signals of those devices are processed separately and then used to determine the action of the robot arm.\nThe user observes the robot and its environment directly and tries to move the tool in the robots hand via muscle movements. When the robot or the user themself make a mistake, the users brain reacts a certain way, often unconsciously, which can be detected by the EEG processor. Those signals are then used to stop and then correct the robot.\nThe system was evaluated on 7 participants. The users were untrained, to reduce the hurdle for new users. The correct target was hit in roughly 70% of the trials, when the robot randomly chose. With the help of the correction through the participant, the success rate jumped to 97%.\nThe authors concluded, that the reliability needs to be improved to be able to deploy the system in safety critical situations. Specifically, the neural network that classified the EEG signal into mistake or no-mistake, had only a 54% accuracy. They also highlight that more users would be needed to make the system more robust towards inter-person variations. However, the system shows potential for an effective supervision system."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.jmir.org/2019/10/e16194/"},"https://www.jmir.org/2019/10/e16194/")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"neuralink whitepaper"),(0,n.kt)("li",{parentName:"ul"},"uses brain signals to control a robot"),(0,n.kt)("li",{parentName:"ul"},"might be interesting, but not used on humans yet"),(0,n.kt)("li",{parentName:"ul"},'don\'t know if it "counts" as an example'),(0,n.kt)("li",{parentName:"ul"},"mainly describes a way to get information out of the human brain, not however how to interpret it or control a robot."),(0,n.kt)("li",{parentName:"ul"},"but really important"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://static.aminer.org/pdf/PDF/000/329/658/emg_based_human_machine_interface_system.pdf"},"https://static.aminer.org/pdf/PDF/000/329/658/emg_based_human_machine_interface_system.pdf")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"example of using EMG to control a robot"),(0,n.kt)("li",{parentName:"ul"},"really old paper")))),(0,n.kt)("h2",{id:"comparison"},"Comparison"),(0,n.kt)("p",null,'AR is the cheapest of the three, as no special hardware is needed most of the time. VR however has huge upside of remote operation, by emerging the user in the distant environment. Additionally VR can be more intuitive because the user can be "in the skin" of the robot. Bio-signal-based solutions are in the early stages but offer huge potential for swift intuitive interaction with robots.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Example use cases"),(0,n.kt)("th",{parentName:"tr",align:null},"Example devices"),(0,n.kt)("th",{parentName:"tr",align:null},"ease of use"),(0,n.kt)("th",{parentName:"tr",align:null},"unique functions"),(0,n.kt)("th",{parentName:"tr",align:null},"cost"),(0,n.kt)("th",{parentName:"tr",align:null},"future potential"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VR"),(0,n.kt)("td",{parentName:"tr",align:null},"control robot motion over internet by moving controllers and observing results"),(0,n.kt)("td",{parentName:"tr",align:null},"Oculus rift, Meta quest pro, smartphone"),(0,n.kt)("td",{parentName:"tr",align:null},"special equipment necessary (headset and controllers), often uncomfortable for long periods of time, either battery (limited work time) or cables (limited motion range)"),(0,n.kt)("td",{parentName:"tr",align:null},"teleoperation, see whole environment of the robot from somewhere else; ego perspective and feel of robot (step into skin of robot, more hands on), but strong stable internet connection necessary"),(0,n.kt)("td",{parentName:"tr",align:null},"expensive special equipment, getting cheaper when consumer grade equipment can be used"),(0,n.kt)("td",{parentName:"tr",align:null},'might become important to remotely help out "almost fully" autonomous systems in difficult situations; need better form factors')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AR"),(0,n.kt)("td",{parentName:"tr",align:null},"display important robot information about the robot(range of motion, wear and tear, pre-rendering of action)"),(0,n.kt)("td",{parentName:"tr",align:null},"google glasses, tablet, smartphone"),(0,n.kt)("td",{parentName:"tr",align:null},"really simple"),(0,n.kt)("td",{parentName:"tr",align:null},"no special equipment required"),(0,n.kt)("td",{parentName:"tr",align:null},"pretty low, no special equipment"),(0,n.kt)("td",{parentName:"tr",align:null},"integration into normal glasses, or contact lenses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bio-signal-based"),(0,n.kt)("td",{parentName:"tr",align:null},"signal if robot did right or wrong action directly with ones mind, control of prosthesis via muscle signals(EMG)"),(0,n.kt)("td",{parentName:"tr",align:null},"implants (Neuralink), EEG, EMG, etc."),(0,n.kt)("td",{parentName:"tr",align:null},"some special equipment needed, sometimes easy to use (wrist bands), sometimes permanent augment (implant)"),(0,n.kt)("td",{parentName:"tr",align:null},"if implemented well, can read the humans mind and make robot smooth extension of human"),(0,n.kt)("td",{parentName:"tr",align:null},"ranges from cheap(wrist bands) to expensive(implants)"),(0,n.kt)("td",{parentName:"tr",align:null},"huge potential to merge with robots and full control of a robot with a humans thoughts")))),(0,n.kt)("h3",{id:"use-cases"},"Use cases"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"teleoperation"),(0,n.kt)("li",{parentName:"ul"},"swarm operation"),(0,n.kt)("li",{parentName:"ul"},"full birds eye view or different perspective"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"AR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"display important information about the environment and the robot"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bio-signal-based"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"control of robot"),(0,n.kt)("li",{parentName:"ul"},"possibly more complex, and faster controls possible"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Comparison\nVR has the special property that it can transport the user into a completely different environment to control a robot through teleoperation. Additionally one can view the environment from any perspective, for example a birds eye view, as in \\ref. This can help to gain an overview over the environment and thus control swarms or other robots.\nAR and bio-signal-based technologies have direct visual contact from the user or through the camera of a handheld device, like a tablet \\ref, most of the time.\nHowever, AR can enhance the real environment with important information about the workspace and the robot. This can help the user to perform the tasks faster and saver. It is to be noted that technically VR can do the same, by recording the environment with its front camera and displaying the information in the headset, but the user might have a lower field of view compared to AR glasses or a tablet.\nBio-signal-based technologies can be used to control the robot directly with ones mind (EEG) or muscles (EMG), like in \\ref. The applications are still limited to simple controls of robot arms or the detection of mistakes with the human mind.\nThe main difference to AR and VR is the fact that the reactions can be faster as the thinking about the mistake can be detected unconsciously by the system. The main issue is that the reliability is still low and thus not save to use with big and powerful robots."))),(0,n.kt)("h3",{id:"devices"},"Devices"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Meta quest 2"),(0,n.kt)("li",{parentName:"ul"},"smartphone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"AR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"google glasses"),(0,n.kt)("li",{parentName:"ul"},"tablet"),(0,n.kt)("li",{parentName:"ul"},"smartphone"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bio-signal-based"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"EEG"),(0,n.kt)("li",{parentName:"ul"},"EMG"),(0,n.kt)("li",{parentName:"ul"},"implants (Neuralink)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Comparison\nVR devices are mostly headsets to display the environment with controllers to control the robot and the position of the user. For headsets, the Meta Quest 2/Pro or the Valve Index can be used. For the controllers, Razer Hydra hand trackers or the default VR controllers that come with the headsets are available. The user can also use a smartphone as a headset, but the field of view is limited, the performance might not be enough and the resolution is not as good as with a dedicated headset.\nFor AR, dedicated glasses are still early in the development. However handheld devices like tablets or smartphones can be used as well, as in \\ref.\nBio-signal-based devices can be wrist bands, that measure muscle contraction, electrodes on the scalp to measure signals from the brain or various other specialized technology. One main difference is that VR and AR devices are bought on the consumer market, which can help with cost and development, whereas bio-signal-based devices aren't often used in everyday live."))),(0,n.kt)("h3",{id:"ease-of-use"},"Ease of use"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"special equipment necessary (headset and controllers), often uncomfortable for long periods of time, either battery (limited work time) or cables (limited motion range)"),(0,n.kt)("li",{parentName:"ul"},"intuitive, ego perspective"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"AR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"really simple"),(0,n.kt)("li",{parentName:"ul"},"need to control by touchscreen, which is not as intuitive as VR"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bio-signal-based"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"some special equipment needed, sometimes easy to use (wrist bands), sometimes permanent augment (implant)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"comparison"))),(0,n.kt)("h3",{id:"cost"},"Cost"),(0,n.kt)("p",null,"Table:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"technology"),(0,n.kt)("th",{parentName:"tr",align:null},"device"),(0,n.kt)("th",{parentName:"tr",align:null},"cost"),(0,n.kt)("th",{parentName:"tr",align:null},"link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VR"),(0,n.kt)("td",{parentName:"tr",align:null},"Meta Quest 2"),(0,n.kt)("td",{parentName:"tr",align:null},"450$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.meta.com/de/en/quest/products/quest-2/"},"https://www.meta.com/de/en/quest/products/quest-2/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VR"),(0,n.kt)("td",{parentName:"tr",align:null},"Valve Index"),(0,n.kt)("td",{parentName:"tr",align:null},"1079$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://store.steampowered.com/valveindex"},"https://store.steampowered.com/valveindex"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AR"),(0,n.kt)("td",{parentName:"tr",align:null},"I-pad"),(0,n.kt)("td",{parentName:"tr",align:null},"449$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.apple.com/shop/buy-ipad/ipad"},"https://www.apple.com/shop/buy-ipad/ipad"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AR"),(0,n.kt)("td",{parentName:"tr",align:null},"Galaxy Tab S8"),(0,n.kt)("td",{parentName:"tr",align:null},"200$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.samsung.com/us/tablets/galaxy-tab-s8/buy/"},"https://www.samsung.com/us/tablets/galaxy-tab-s8/buy/"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"AR"),(0,n.kt)("td",{parentName:"tr",align:null},"Google Glasses"),(0,n.kt)("td",{parentName:"tr",align:null},"999$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.theverge.com/2019/5/20/18632689/google-glass-enterprise-edition-2-augmented-reality-headset-pricing"},"https://www.theverge.com/2019/5/20/18632689/google-glass-enterprise-edition-2-augmented-reality-headset-pricing"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bio-signal-based"),(0,n.kt)("td",{parentName:"tr",align:null},"EEG electrode hat"),(0,n.kt)("td",{parentName:"tr",align:null},"1500$"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://shop.openbci.com/collections/frontpage"},"https://shop.openbci.com/collections/frontpage"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"comparison\nTo compare the cost of the different technologies, The prices of the different devices were looked up and summarized in \\ref. Note that this is only a fraction of possible devices.\nThe low end Meta Quest 2 in the same price range as the high end I-Pad. But when comparing the more powerful Valve Index, to a more budget tablet, like the Galaxy Tab S8, VR devices are considerably more expensive than a basic AR device. Additionally for most VR headsets, an additional high end PC is necessary to process the visuals.\nAnother alternative for AR are the Google Glasses, which come at a higher price, similar to the VR headsets.\nBio-signal-based devices, specifically EEG, are starting at the price of a VR headset. They might however get cheaper if those devices get produced in higher numbers. The prices can get way higher as well, if implants through operations are used.\nSo in general, AR is the cheapest option, as one can simply use a smartphone or a tablet. VR requires some special technology in form of a headset and probably a high end PC. Finally, the bio-signal-based devices come out as most expensive, as they are still early in development.")),(0,n.kt)("h3",{id:"problems"},"Problems"),(0,n.kt)("p",null,"The main ways VR and AR can improve from today are general hardware improvements like better batteries, "),(0,n.kt)("h3",{id:"future-potential"},"Future potential"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"VR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'might become important to remotely help out "almost fully" autonomous systems in difficult situations'),(0,n.kt)("li",{parentName:"ul"},"need better form factors and better hardware:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"batteries"),(0,n.kt)("li",{parentName:"ul"},"more comfortable"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"AR"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"integration into normal glasses, or contact lenses"),(0,n.kt)("li",{parentName:"ul"},"more powerful hardware, or remote processing"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bio-signal-based"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"huge potential to merge with robots and full control of a robot with a humans thoughts"),(0,n.kt)("li",{parentName:"ul"},"more consumer based hardware"),(0,n.kt)("li",{parentName:"ul"},"improved reliability"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Comparison:\nVR might be used at some point to have the human help out almost fully autonomous systems by stepping in the perspective of the robot. Or it can be used to fully control robots remotely and remove the need for humans to work in dangerous environments.\nAR could have a huge jump in usability if it were to be integrated into everyday glasses or even contact lenses. This could enable people without training to use them. If robots are more common in everyday life this might increase the trust in the robots by displaying certain information about the robots future actions in the environment.\nBio-signal-based technologies could be used to completely and reliably control robots with human thoughts, which would be a huge step in the field of human-robot interaction. If this technology is achieved, most other control devices might be obsolete.\nSo the biggest potential certainly lies within EEG technologies, as they can enable a direct link between human and robot. However the other two technologies might also play a crucial role in some more niche cases."))),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Summarize the key points and findings of the paper:\nIn summary, it is difficult to compare the three technologies, because they each have their different use cases, as seen in \\ref. Additionally, they are never tested against each other, with regard to user feedback.\nWhen comparing the use cases, VR shows a clear advantage in teleoperation, AR in merging digital information into the real world environment and bio-signal-based technology can use quick reactions directly from the human brain to mitigate mistakes.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Highlight the main contributions of the paper and its impact on the field of HRI interfaces:\nThis paper compares some examples of the three technologies and their use cases. It also extrapolates those comparisons to the whole categories. Hopefully it can give some ideas on the future research directions of the field. Additionally, this is an encouragement to further investigate how to better compare the three technologies to then be able to better predict what technology is worth more efforts. To conclude this report, some recommendations for future research are the following.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Discuss future directions for research in HRI interfaces, including VR, AR, and bio-signal-based:"))),(0,n.kt)("p",null,"The final achievement would be to have a direct link between human and robot in both directions. Until then, all three technologies will need to be improved gradually.\nFor VR, the ability to wear the headset for a long time and training programs should be the focus.\nAR might be more useful, if the technology gets integrated better into glasses to not need an extra tablet while working with a robot in the workspace.\nBio-signal-based technologies first need to improve their reliability before they can be used in real-world applications. A next step would be to improve the designs behind the devices, so they can be used more for consumer products and accelerate the development."),(0,n.kt)("h2",{id:"todo"},"todo"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add picture maybe"),(0,n.kt)("li",{parentName:"ul"},"add VR/AR review")))}u.isMDXComponent=!0}}]);