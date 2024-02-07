"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[8936],{2984:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>l,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var n=o(7624),r=o(2172);const c={title:"Resources",description:"Customize the resources your Defang services use.",sidebar_position:275},t="Resources",i={id:"concepts/resources",title:"Resources",description:"Customize the resources your Defang services use.",source:"@site/docs/concepts/resources.md",sourceDirName:"concepts",slug:"/concepts/resources",permalink:"/docs/concepts/resources",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/concepts/resources.md",tags:[],version:"current",sidebarPosition:275,frontMatter:{title:"Resources",description:"Customize the resources your Defang services use.",sidebar_position:275},sidebar:"docsSidebar",previous:{title:"Deployment",permalink:"/docs/concepts/deployments"},next:{title:"Secrets",permalink:"/docs/concepts/secrets"}},a={},u=[{value:"Examples",id:"examples",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"Pulumi",id:"pulumi",level:3}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"resources",children:"Resources"}),"\n",(0,n.jsx)(s.p,{children:"You can configure the resources available to your Defang services as required. You can configure the CPU, memory, and disk space allocated to your services as well as the number of replicas and whether or not your services requires access to GPUs."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-yaml",children:"services:\n  gpu-service:\n    deploy:\n      replicas: 3\n      resources:\n        reservations:\n          cpus: '1.0'\n          memory: 2048M\n          devices:\n            - capabilities: [\"gpu\"]\n"})}),"\n",(0,n.jsx)(s.h3,{id:"pulumi",children:"Pulumi"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-typescript",children:"const service = new defang.DefangService(\"gpu-service\", {\n  deploy: {\n    replicas: 3,\n    resources: {\n        reservations: {\n            cpu: 1.0,\n            memory: 2048,\n            devices: [{capabilities: ['gpu']}]\n        }\n    }\n  }\n});\n"})}),"\n",(0,n.jsx)(s.admonition,{title:"GPUs",type:"info",children:(0,n.jsxs)(s.p,{children:["If you require access to GPUs, you can specify this in the ",(0,n.jsx)(s.code,{children:"deploy.resources.reservations.devices[0].capabilities"})," section of your service as in the examples above. You can learn more about this in the ",(0,n.jsx)(s.a,{href:"https://docs.docker.com/compose/gpu-support/",children:"docker-compose documentation"}),". This is the only supported value in the ",(0,n.jsx)(s.code,{children:"deploy.resources.reservations.devices"})," section."]})})]})}function l(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},2172:(e,s,o)=>{o.d(s,{I:()=>i,M:()=>t});var n=o(1504);const r={},c=n.createContext(r);function t(e){const s=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(c.Provider,{value:s},e.children)}}}]);