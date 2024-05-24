"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[3372],{6720:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>$,contentTitle:()=>D,default:()=>E,frontMatter:()=>w,metadata:()=>C,toc:()=>M});var n=t(7624),r=t(2172),a=t(9118),l=t(7729),i=t(8948),c=t(9944),o=t(4184),d=t(4744),h=t(3926),p=t(8968),m=t(5904),g=t(6960),u=t(8760),x=t(2712),f=t(1608),j=t(3232),b=t(6340),y=t(1504),k=t(2124);const v={python:"#FFFFE0",nodejs:"#90EE90",typescript:"#cabbff",golang:"#b8e4f3",go:"#b8e4f3",sql:"#ebaef4",ruby:"#FF7F7F",other:"lightgray"};function F(e,s){let t=0;const[r]=s,{indices:a}=r,l=[];for(const[i,c]of a)l.push(e.slice(t,i)),l.push((0,n.jsx)("mark",{children:e.slice(i,c+1)})),t=c+1;return l.push(e.slice(t)),(0,n.jsx)(n.Fragment,{children:l.map(((e,s)=>(0,n.jsx)(y.Fragment,{children:e},`${e}${s}`)))})}function S(){const[e,s]=(0,y.useState)([]),[t,r]=(0,y.useState)(""),[S,w]=(0,y.useState)(null),[D,C]=(0,y.useState)(!0),$=(0,y.useRef)(new b.c(e,{keys:["title","category","shortDescription","tags","languages"],includeMatches:!0,isCaseSensitive:!1,threshold:.3})).current;(0,y.useEffect)((()=>{(async()=>{const e=await fetch("/samples-v2.json"),t=await e.json();$.setCollection(t),s(t),C(!1)})()}),[]);const M=(0,y.useDeferredValue)(t),_=(0,y.useMemo)((()=>M?$.search({$and:M.split(/\s+/).map((e=>({$or:[{title:e},{category:e},{shortDescription:e},{tags:e},{languages:e}]})))}):e.map(((e,s)=>({item:e,score:0,refIndex:s,matches:[]})))),[M,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.c,{open:!!S,onClose:()=>w(null),fullWidth:!0,maxWidth:"md",scroll:"paper",PaperProps:{sx:{maxHeight:"calc(100vh - 100px)"}},children:S&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.c,{component:"div",display:"flex",children:[(0,n.jsxs)(i.c,{children:[(0,n.jsx)(i.c,{fontWeight:"bold",component:"span",children:S.title}),(S.languages?.length??0)>0&&S.languages?.map((e=>(0,n.jsx)(c.c,{label:e,size:"small",sx:{backgroundColor:v[e]||v.other,ml:1}})))]}),(0,n.jsx)(i.c,{sx:{flexGrow:1}}),(0,n.jsxs)(o.c,{sx:{"&:hover":{},flexShrink:0},size:"small",variant:"text",href:`https://github.com/DefangLabs/samples/tree/main/samples/${S.name}`,target:"_blank",children:["Open Sample",(0,n.jsx)(j.c,{})]})]}),(0,n.jsx)(d.c,{sx:{borderTop:"1px solid grey",borderBottom:"1px solid grey"},children:(0,n.jsx)(i.c,{sx:{py:4},children:(0,n.jsx)(k.I,{children:S.readme})})}),(0,n.jsx)(h.c,{children:(0,n.jsxs)(i.c,{sx:{flexGrow:1,overflow:"auto","& .theme-code-block":{mb:0}},children:[(0,n.jsxs)("small",{children:["Use this sample (",(0,n.jsx)("b",{children:(0,n.jsx)("a",{href:"https://docs.defang.io/docs/getting-started/installing",target:"_blank",children:"requires Defang CLI v0.5.21 or later"})}),")"]}),(0,n.jsx)(f.c,{language:"bash",children:`defang generate ${S.name}`})]})})]})}),(0,n.jsxs)(p.c,{children:[(0,n.jsxs)(i.c,{children:[(0,n.jsx)(m.c,{label:"Search samples",value:t,onChange:e=>r(e.target.value),variant:"filled"}),D&&(0,n.jsx)("p",{children:"Loading samples..."})]}),(0,n.jsx)(g.c,{sx:{display:{xs:"block",sm:"grid"},gridTemplateColumns:{sm:"repeat(2, 1fr)"}},children:_.map((e=>{const s=e.item,{matches:t}=e;let r=s.title;const a=t.find((e=>"title"===e.key));let l=s.category;const i=t.find((e=>"category"===e.key));let o=s.shortDescription.slice(0,80);s.shortDescription.length>80&&(o+="...");const d=t.find((e=>"shortDescription"===e.key));return a&&(r=F(s.title,[a])),i&&(l=F(s.category,[i])),d&&(o=function(e,s){let t=0;const[r]=s,{indices:a}=r,l=[];for(const[i,c]of a.slice(0,3))i>t&&(l.push(e.slice(Math.max(0,t),Math.max(0,i-5))),l.push("...")),l.push((0,n.jsx)("mark",{children:e.slice(i,c+1)},`${i}-${c}`)),t=c+1;return t<e.length&&(l.push(e.slice(t,Math.min(t+5,e.length))),l.push("...")),(0,n.jsx)(n.Fragment,{children:l.map(((e,s)=>(0,n.jsx)(y.Fragment,{children:e},`${e}${s}`)))})}(s.shortDescription,[d])),(0,n.jsx)(u.c,{sx:{borderBottom:1,borderColor:"divider"},onClick:()=>w(s),children:(0,n.jsx)(x.c,{primary:r,secondary:(0,n.jsxs)(n.Fragment,{children:[l&&(0,n.jsx)(c.c,{component:"span",label:l,size:"small",sx:{backgroundColor:v[s.category]||v.other}}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),o]})]})})},`${s.category}-${s.name}`)}))})]})]})}const w={title:"Samples",description:"Sample projects to help you launch services faster with Defang.",sidebar_position:500},D="Samples",C={id:"samples",title:"Samples",description:"Sample projects to help you launch services faster with Defang.",source:"@site/docs/samples.md",sourceDirName:".",slug:"/samples",permalink:"/docs/samples",draft:!1,unlisted:!1,editUrl:"https://github.com/DefangLabs/defang-docs/tree/main/docs/samples.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{title:"Samples",description:"Sample projects to help you launch services faster with Defang.",sidebar_position:500},sidebar:"docsSidebar",previous:{title:"defang whoami",permalink:"/docs/cli/defang_whoami"},next:{title:"FAQ",permalink:"/docs/faq"}},$={},M=[];function _(e){const s={h1:"h1",p:"p",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"samples",children:"Samples"}),"\n",(0,n.jsx)(s.p,{children:"Check out our sample projects here to get some inspiration and get a sense of how defang works."}),"\n","\n","\n",(0,n.jsx)(S,{})]})}function E(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(_,{...e})}):_(e)}}}]);