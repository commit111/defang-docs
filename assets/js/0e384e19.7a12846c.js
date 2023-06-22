"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),f=o,m=c["".concat(s,".").concat(f)]||c[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Overview",l={unversionedId:"intro",id:"intro",title:"Overview",description:"What is the Defang Opinionated Platform (DOP)?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Samples",permalink:"/docs/category/samples"}},s={},u=[{value:"<strong>What is the Defang Opinionated Platform (DOP)?</strong>",id:"what-is-the-defang-opinionated-platform-dop",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"what-is-the-defang-opinionated-platform-dop"},(0,o.kt)("strong",{parentName:"h2"},"What is the Defang Opinionated Platform (DOP)?")),(0,o.kt)("p",null,"The Defang Opinionated Platform (DOP) is a radically simpler way to build and deploy production-ready cloud apps. The DOP is a serverless platform that lets you quickly build your application in the language of your choice and deploy to the cloud with a single command. The DOP CLI includes an AI-assisted co-pilot that translates natural language to a starting point in code for your services that you can then refine. Once you publish your code and the DOP automatically builds your project and deploys it to the cloud, taking care of all the heavy lifting such as configuring the networking, auto-scaling, security, observability and all the other details that usually trip up the average cloud developer. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Details")," "),(0,o.kt)("p",null,"The DOP provides a unified experience to develop, deploy, run, and observe your cloud applications. The DOP supports the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Various types of applications - web applications, APIs, ML applications, ???"),(0,o.kt)("li",{parentName:"ul"},"Choice of programming languages: Node.js, Python, and Go"),(0,o.kt)("li",{parentName:"ul"},"AI assistance to go from natural language prompt to code skeleton"),(0,o.kt)("li",{parentName:"ul"},"Automated build of your source directly from your Github repository"),(0,o.kt)("li",{parentName:"ul"},"Support for pre-built Docker containers"),(0,o.kt)("li",{parentName:"ul"},"Express your configuration using Docker Compose"),(0,o.kt)("li",{parentName:"ul"},"Pre-configured staging and production environments, with built-in networking, auto-scaling, security, and observability"),(0,o.kt)("li",{parentName:"ul"},"One-command deploy to your staging or production environments"),(0,o.kt)("li",{parentName:"ul"},"Ability to deploy to SPOT instances"),(0,o.kt)("li",{parentName:"ul"},"Choice of deploying to CPUs or GPUs"),(0,o.kt)("li",{parentName:"ul"},"Pulumi integration"),(0,o.kt)("li",{parentName:"ul"},"Storage - databases, object stores, queues  etc.?"),(0,o.kt)("li",{parentName:"ul"},"Built-in observability")))}d.isMDXComponent=!0}}]);