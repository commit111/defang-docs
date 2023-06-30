"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6281:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Deploy code using the CLI",c={unversionedId:"Tutorials/Deploy code using the CLI",id:"Tutorials/Deploy code using the CLI",title:"Deploy code using the CLI",description:"This tutorial assumes that the code normally gets built into a container and has a Dockerfile file in the current folder.",source:"@site/docs/03-Tutorials/02-Deploy code using the CLI.mdx",sourceDirName:"03-Tutorials",slug:"/Tutorials/Deploy code using the CLI",permalink:"/docs/Tutorials/Deploy code using the CLI",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generate new code using AI",permalink:"/docs/Tutorials/Generate new code using AI"},next:{title:"Deploy container using the CLI",permalink:"/docs/Tutorials/Deploy container using the CLI"}},l={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-code-using-the-cli"},"Deploy code using the CLI"),(0,o.kt)("p",null,"This tutorial assumes that the code normally gets built into a container and has a Dockerfile file in the current folder."),(0,o.kt)("h1",{id:"step-1---docker-compose"},"Step 1 - Docker Compose"),(0,o.kt)("p",null,"If you already have a Docker Compose file for your service(s) you can use it directly. Else you can create one like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\nservices:\n  service1:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    ports:\n      - mode: ingress\n        target: 3000        \n")),(0,o.kt)("h1",{id:"step-2---deploy"},"Step 2 - Deploy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"defang compose up --tail\n")))}d.isMDXComponent=!0}}]);