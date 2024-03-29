"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[6688],{5916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var o=n(7624),a=n(2172);const i={slug:"about-my-journey-deploying-my-first-web-application",title:"About my Journey Deploying my First Web Application",tags:["Cloud","NoDevOps","BYOC","AWS ECS","defang compose up"]},s=void 0,r={permalink:"/blog/about-my-journey-deploying-my-first-web-application",source:"@site/blog/2024-03-04-about-my-journey-deploying-my-first-web-application.mdx",title:"About my Journey Deploying my First Web Application",description:"About the author: Aaron Yu is currently an intern at Defang Software Labs with a keen interest in the area of web development. He wrote this blog post after trying to deploy an application by himself directly on AWS first, and then using Defang.",date:"2024-03-04T00:00:00.000Z",formattedDate:"March 4, 2024",tags:[{label:"Cloud",permalink:"/blog/tags/cloud"},{label:"NoDevOps",permalink:"/blog/tags/no-dev-ops"},{label:"BYOC",permalink:"/blog/tags/byoc"},{label:"AWS ECS",permalink:"/blog/tags/aws-ecs"},{label:"defang compose up",permalink:"/blog/tags/defang-compose-up"}],readingTime:3.17,hasTruncateMarker:!1,authors:[],frontMatter:{slug:"about-my-journey-deploying-my-first-web-application",title:"About my Journey Deploying my First Web Application",tags:["Cloud","NoDevOps","BYOC","AWS ECS","defang compose up"]},unlisted:!1,prevItem:{title:"Add Defang to your developer environments instantly",permalink:"/blog/dev-environments"},nextItem:{title:"Announcing the Defang Public Beta",permalink:"/blog/announcing-defang-public-beta"}},l={authorsImageUrls:[]},c=[];function d(e){const t={a:"a",p:"p",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("em",{children:"About the author: Aaron Yu is currently an intern at Defang Software Labs with a keen interest in the area of web development. He wrote this blog post after trying to deploy an application by himself directly on AWS first, and then using Defang."})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"As a student at University of British Columbia, new to the area of web development, I needed to develop and deploy a web application as a course project. It was already a huge challenge to complete the coding part. I could not believe that an even bigger challenge awaited. Picking the right platform and services is tough to start with. Do you know that AWS offers 200 different services? Lucky for me my professors\u2019 instructed us to use ECS. Otherwise, I would have been totally lost."}),"\n",(0,o.jsx)(t.p,{children:'Starting my project, honestly, it felt like I was hitting a brick wall. Diving into AWS with little to no clue was tough. Terms like "ECS clusters," "task definitions," and "IAM roles" were flying over my head. I was scared of messing something up, especially when it came to setting up things like ECR and load balancers.'}),"\n",(0,o.jsx)(t.p,{children:"It was overwhelming when all these unfamiliar concepts came at me at once. I searched them up on the internet and went straight to a top-rated YouTube tutorial. I spent an hour and a half going through the whole video series. Those tutorials, as helpful as they were, couldn't fully prepare me for the hands-on challenges of real-life implementation. It's one thing to follow along with a guide when everything goes right; it's another to adapt when things don't quite match up to the tutorial\u2019s scenarios."}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{src:"/img/how-AWS-looks.png",alt:"Example banner",width:"550px"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("em",{children:"It could be confusing if you are new to this area"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"I ran into so many problems with configuring services. Sometimes it is caused by carelessly selecting the wrong options; sometimes it is due to the fact that I have no idea what the buttons mean; sometimes it is just a bug with my code. Those errors triple the time it took to deploy my project. It was indeed extremely frustrating."}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{src:"/img/error-AWS.png",alt:"error-AWS",width:"550px"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("em",{children:"I have this scary screen when trying to delete the service I created; this is merely one of the many errors I faced"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["Then I found Defang (",(0,o.jsx)(t.a,{href:"http://www.defang.io",children:"www.defang.io"}),"), and it was like someone flipped a switch. Suddenly, all that complicated stuff became way easier. All I needed to do is to install Defang, build a compose.yaml file to describe my application, and run a single command - defang compose up. And Defang even has a Gen-AI assistant to help you write the code and compose file for your application. Defang automatically does all the heavy-lifting behind the scenes - configuring all the necessary services in a secure and optimal way, and automatically building and deploying my application components. No more late nights trying to figure out AWS docs or stressing about getting everything right. Deploying my Django Restaurant Homepage went from being my biggest worry to one of the smoothest parts of my project."]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{src:"/img/defang-compose-up.png",alt:"defang-compose-up",width:"550px"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("em",{children:"with just a single command in the CLI"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["With Defang, I could chill a bit and actually enjoy working on my project, focusing on the cool parts without getting bogged down by all the technical stuff. It made cloud deployment feel doable and fun, even for someone like me who was pretty much a beginner. Give it a try yourself - go to ",(0,o.jsx)(t.a,{href:"http://www.defang.io",children:"www.defang.io"})," to get started."]}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("img",{src:"/img/sample-result.png",alt:"sample-result",width:"550px"})}),"\n",(0,o.jsx)("div",{align:"center",children:(0,o.jsx)("em",{children:"It is deployed to the internet! (arorschach is my username)"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"Try it yourself!"}),"\n",(0,o.jsxs)(t.p,{children:["Sample Code: ",(0,o.jsx)(t.a,{href:"https://github.com/HongchenY/Sample-Restaurant-Homepage",children:"Restaurant Homepage"})]}),"\n",(0,o.jsxs)(t.p,{children:["Defang Docs: ",(0,o.jsx)(t.a,{href:"https://docs.defang.io/docs/intro",children:"Docs"})]})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>s});var o=n(1504);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);