"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[2616],{4388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=n(7624),r=n(2172);const s={title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},o="AWS",a={id:"providers/aws",title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",source:"@site/docs/providers/aws.md",sourceDirName:"providers",slug:"/providers/aws",permalink:"/docs/providers/aws",draft:!1,unlisted:!1,editUrl:"https://github.com/defang-io/defang-docs/tree/main/docs/providers/aws.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"AWS",description:"Defang allows you to easily create and manage full, scalable applications with AWS.",sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Providers",permalink:"/docs/category/providers"},next:{title:"Azure",permalink:"/docs/providers/azure"}},c={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Secrets",id:"secrets",level:3},{value:"Deployment",id:"deployment",level:3},{value:"Runtime",id:"runtime",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"aws",children:"AWS"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Public Beta of the v1 Defang BYOC AWS Provider is released as of Feb 1 2024."})}),"\n",(0,i.jsx)(t.p,{children:"Why should you use Defang with AWS? Defang allows you to easily create and manage full, scalable applications with AWS. Defang aims to make it easier to deploy your services to the cloud. Don't waste your time learning the ins and outs of AWS, deciding which of the 200+ services to use, and then writing the infrastructure code to deploy your services, and making sure they are properly secured. Defang does all of that for you."}),"\n",(0,i.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(t.p,{children:["Getting started with the Defang BYOC AWS Provider is easy. First, make sure you ",(0,i.jsx)(t.a,{href:"../getting-started#authenticate-with-defang",children:"install the latest version of the Defang CLI"}),". Then, make sure you have properly ",(0,i.jsx)(t.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html",children:"authenticated your AWS account"}),". The Defang CLI will automatically check for environment variables like ",(0,i.jsx)(t.code,{children:"AWS_PROFILE"}),", ",(0,i.jsx)(t.code,{children:"AWS_REGION"}),", ",(0,i.jsx)(t.code,{children:"AWS_ACCESS_KEY_ID"})," and ",(0,i.jsx)(t.code,{children:"AWS_SECRET_ACCESS_KEY"}),". If they are set, the CLI will automatically use the Defang BYOC AWS Provider using the appropriate credentials. If you have credentials in the ",(0,i.jsx)(t.code,{children:"~/.aws/credentials"})," file, but nothing configured in environment variables, you can use the ",(0,i.jsx)(t.code,{children:"--provider=aws"})," flag to tell the Defang CLI to use the AWS Provider."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["If you have the aws CLI installed, you should be able to successfully run ",(0,i.jsx)(t.code,{children:"aws sts get-caller-identity"})," and see your account ID."]})}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["The Defang CLI does not depend on the AWS CLI. It uses the ",(0,i.jsx)(t.a,{href:"https://aws.amazon.com/sdk-for-go/",children:"AWS SDK for Go"})," to interact with your AWS account. In most cases, if you can run the ",(0,i.jsx)(t.code,{children:"aws sts get-caller-identity"})," from the tip above, you should be good to go. However, due to a difference between the AWS CLI and the AWS SDK for Go, there is at least one case where they behave differently: if you are using ",(0,i.jsx)(t.code,{children:"aws sso login"})," and have clashing profiles in your ",(0,i.jsx)(t.code,{children:".aws/config"})," and ",(0,i.jsx)(t.code,{children:".aws/credentials"})," files, the AWS CLI will prioritize SSO profiles and caches over regular profiles, but the AWS SDK for Go will prioritize the credentials file, and it may fail."]})}),"\n",(0,i.jsx)(t.h2,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(t.p,{children:"Defang uses resources that are native to the cloud provider you are using. The following describes the current state of Defang's support for AWS, the specific resources that Defang uses, and the roadmap for future support."}),"\n",(0,i.jsx)(t.h3,{id:"secrets",children:"Secrets"}),"\n",(0,i.jsx)(t.p,{children:"Defang allows you to configure your services with secrets. Secrets are stored in AWS Systems Manager Parameter Store, and are encrypted."}),"\n",(0,i.jsx)(t.h3,{id:"deployment",children:"Deployment"}),"\n",(0,i.jsx)(t.p,{children:"To deploy your services, the Defang CLI packages your code and uploads it to an S3 bucket in your account. The CLI then deploys an ECS task that uses Pulumi to build your container image and run your service."}),"\n",(0,i.jsx)(t.h3,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsx)(t.p,{children:"The provider runs your workloads using ECS using Fargate. It provisions a VPC with public and private subnets, and deploys your services to the private subnets. It then provisions an Application Load Balancer (ALB) and CloudFront to route traffic to your services."})]})}function u(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>a,M:()=>o});var i=n(1504);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);