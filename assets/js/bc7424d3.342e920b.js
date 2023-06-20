"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[1704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5677:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Defang Alpha Documentation",i={unversionedId:"Defang Alpha Test 2",id:"Defang Alpha Test 2",title:"Defang Alpha Documentation",description:"Created38 AM",source:"@site/docs/Defang Alpha Test 2.md",sourceDirName:".",slug:"/Defang Alpha Test 2",permalink:"/docs/Defang Alpha Test 2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Defang Alpha Test 2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Translate your site",permalink:"/docs/tutorial-extras/translate-your-site"}},p={},s=[],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"defang-alpha-documentation"},"Defang Alpha Documentation"),(0,a.kt)("p",null,"Created: June 19, 2023 7:38 AM\nCreated By: Prakash\nLast Edited By: Prakash\nLast Edited Time: June 20, 2023 11:19 AM"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overview - What is the Defang Opinionated Platform (DOP)?")),(0,a.kt)("p",null,"The Defang Opinionated Platform (DOP) is a radically simpler way to build and deploy production-ready cloud apps. The DOP is a serverless platform that lets you quickly build your application in the language of your choice and deploy to the cloud with a single command. The DOP CLI includes an AI-assisted co-pilot that translates natural language commands to a starting point in code for your services that you can then refine. Once you merge the code to your Github repository, the DOP automatically builds your project and deploys it to the cloud, taking care of all the heavy lifting such as configuring the networking, auto-scaling, security, observability and all the other details that usually trip up the average cloud developer. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Details")," "),(0,a.kt)("p",null,"The DOP provides a unified experience to develop, deploy, run, and observe your cloud applications. It supports the following features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Types of applications - web applications, APIs, ML applications, ???"),(0,a.kt)("li",{parentName:"ul"},"Support for Node.js, Python, and Go"),(0,a.kt)("li",{parentName:"ul"},"AI-assisted co-pilot to go from natural language prompt to code skeleton"),(0,a.kt)("li",{parentName:"ul"},"Support for Docker containers, ???"),(0,a.kt)("li",{parentName:"ul"},"Support for Docker Compose"),(0,a.kt)("li",{parentName:"ul"},"APIs - support for REST?, gRPC?,???"),(0,a.kt)("li",{parentName:"ul"},"Support for CPUs and GPUs"),(0,a.kt)("li",{parentName:"ul"},"Ability to deploy to SPOT instances"),(0,a.kt)("li",{parentName:"ul"},"Pre-configured staging and production environments, with built-in networking, auto-scaling, security, and observability"),(0,a.kt)("li",{parentName:"ul"},"Automated build of your source directly from your Github repository to your staging or production environments"),(0,a.kt)("li",{parentName:"ul"},"Pulumi integration"),(0,a.kt)("li",{parentName:"ul"},"Storage - databases, object stores etc.?"),(0,a.kt)("li",{parentName:"ul"},"Queues - ?"),(0,a.kt)("li",{parentName:"ul"},"Observability via tail of logs?"),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Downloading the Defang CLI")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CLI Commands")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Deploying an App to DOP")),(0,a.kt)("p",null,"Containers"),(0,a.kt)("p",null,"FaaS"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitoring your App")),(0,a.kt)("p",null,"Viewing the log"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Samples")),(0,a.kt)("p",null,"Link to samples repo"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FAQ")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Which cloud/region is the app being deployed to?")),(0,a.kt)("p",null,"Currently we are deploying to AWS, us-east-1 ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I bring my own AWS or other cloud account?")),(0,a.kt)("p",null,"With the current release, which is designed for customers to try out the Defang model with non-production apps, your apps are deployed to Defang\u2019s AWS account. We are working on bring-your-own-account for an upcoming release."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"On AWS, can I deploy to services such as EC2 or EKS or Lambda?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Can I access AWS storage services such as S3 or database services such as RDS ? How?")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Do you plan to support other clouds?")),(0,a.kt)("p",null,"While we currently deploy to AWS, the Defang model is designed to be inherently portable. We plan to support other clouds in future releases."))}d.isMDXComponent=!0}}]);