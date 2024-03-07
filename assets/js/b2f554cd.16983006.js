"use strict";(self.webpackChunkdefang_docs=self.webpackChunkdefang_docs||[]).push([[6880],{8256:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"about-my-journey-deploying-my-first-web-application","metadata":{"permalink":"/blog/about-my-journey-deploying-my-first-web-application","source":"@site/blog/2024-03-04-about-my-journey-deploying-my-first-web-application.mdx","title":"About my Journey Deploying my First Web Application","description":"About the author: Aaron Yu is currently an intern at Defang Software Labs with a keen interest in the area of web development. He wrote this blog post after trying to deploy an application by himself directly on AWS first, and then using Defang.","date":"2024-03-04T00:00:00.000Z","formattedDate":"March 4, 2024","tags":[{"label":"Cloud","permalink":"/blog/tags/cloud"},{"label":"NoDevOps","permalink":"/blog/tags/no-dev-ops"},{"label":"BYOC","permalink":"/blog/tags/byoc"},{"label":"AWS ECS","permalink":"/blog/tags/aws-ecs"},{"label":"defang compose up","permalink":"/blog/tags/defang-compose-up"}],"readingTime":3.17,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"about-my-journey-deploying-my-first-web-application","title":"About my Journey Deploying my First Web Application","tags":["Cloud","NoDevOps","BYOC","AWS ECS","defang compose up"]},"unlisted":false,"nextItem":{"title":"Announcing the Defang Public Beta","permalink":"/blog/announcing-defang-public-beta"}},"content":"<div align=\\"center\\">\\n    <em>About the author: Aaron Yu is currently an intern at Defang Software Labs with a keen interest in the area of web development. He wrote this blog post after trying to deploy an application by himself directly on AWS first, and then using Defang.</em>\\n</div>\\n<br/>\\n\\nAs a student at University of British Columbia, new to the area of web development, I needed to develop and deploy a web application as a course project. It was already a huge challenge to complete the coding part. I could not believe that an even bigger challenge awaited. Picking the right platform and services is tough to start with. Do you know that AWS offers 200 different services? Lucky for me my professors\u2019 instructed us to use ECS. Otherwise, I would have been totally lost.\\n\\nStarting my project, honestly, it felt like I was hitting a brick wall. Diving into AWS with little to no clue was tough. Terms like \\"ECS clusters,\\" \\"task definitions,\\" and \\"IAM roles\\" were flying over my head. I was scared of messing something up, especially when it came to setting up things like ECR and load balancers.\\n\\nIt was overwhelming when all these unfamiliar concepts came at me at once. I searched them up on the internet and went straight to a top-rated YouTube tutorial. I spent an hour and a half going through the whole video series. Those tutorials, as helpful as they were, couldn\'t fully prepare me for the hands-on challenges of real-life implementation. It\'s one thing to follow along with a guide when everything goes right; it\'s another to adapt when things don\'t quite match up to the tutorial\u2019s scenarios.\\n\\n\\n<div align=\\"center\\">\\n    <img src=\\"/img/how-AWS-looks.png\\" alt=\\"Example banner\\" width=\\"550px\\"/>\\n</div>\\n\\n<div align=\\"center\\">\\n   <em>It could be confusing if you are new to this area</em>\\n</div>\\n<br/>\\n\\nI ran into so many problems with configuring services. Sometimes it is caused by carelessly selecting the wrong options; sometimes it is due to the fact that I have no idea what the buttons mean; sometimes it is just a bug with my code. Those errors triple the time it took to deploy my project. It was indeed extremely frustrating.\\n\\n<div align=\\"center\\">\\n    <img src=\\"/img/error-AWS.png\\" alt=\\"error-AWS\\" width=\\"550px\\"/>\\n</div>\\n\\n<div align=\\"center\\">\\n    <em>I have this scary screen when trying to delete the service I created; this is merely one of the many errors I faced</em>\\n</div>\\n<br/>\\n\\nThen I found Defang (www.defang.io), and it was like someone flipped a switch. Suddenly, all that complicated stuff became way easier. All I needed to do is to install Defang, build a compose.yaml file to describe my application, and run a single command - defang compose up. And Defang even has a Gen-AI assistant to help you write the code and compose file for your application. Defang automatically does all the heavy-lifting behind the scenes - configuring all the necessary services in a secure and optimal way, and automatically building and deploying my application components. No more late nights trying to figure out AWS docs or stressing about getting everything right. Deploying my Django Restaurant Homepage went from being my biggest worry to one of the smoothest parts of my project.\\n\\n\\n<div align=\\"center\\">\\n    <img src=\\"/img/defang-compose-up.png\\" alt=\\"defang-compose-up\\" width=\\"550px\\"/>\\n</div>\\n\\n<div align=\\"center\\">\\n    <em>with just a single command in the CLI</em>\\n</div>\\n<br/>\\n\\nWith Defang, I could chill a bit and actually enjoy working on my project, focusing on the cool parts without getting bogged down by all the technical stuff. It made cloud deployment feel doable and fun, even for someone like me who was pretty much a beginner. Give it a try yourself - go to www.defang.io to get started.\\n\\n\\n<div align=\\"center\\">\\n    <img src=\\"/img/sample-result.png\\" alt=\\"sample-result\\" width=\\"550px\\"/>\\n</div>\\n\\n<div align=\\"center\\">\\n   <em>It is deployed to the internet! (arorschach is my username)</em>\\n</div>\\n<br/>\\n\\nTry it yourself!\\n\\nSample Code: [Restaurant Homepage](https://github.com/HongchenY/Sample-Restaurant-Homepage)\\n\\nDefang Docs: [Docs](https://docs.defang.io/docs/intro)"},{"id":"announcing-defang-public-beta","metadata":{"permalink":"/blog/announcing-defang-public-beta","source":"@site/blog/2024-02-12-announcing-defang-public-beta.md","title":"Announcing the Defang Public Beta","description":"Announcing the Defang Public Beta","date":"2024-02-12T00:00:00.000Z","formattedDate":"February 12, 2024","tags":[{"label":"Cloud","permalink":"/blog/tags/cloud"},{"label":"GenerativeAI","permalink":"/blog/tags/generative-ai"},{"label":"NoDevOps","permalink":"/blog/tags/no-dev-ops"},{"label":"BYOC","permalink":"/blog/tags/byoc"},{"label":"AWS","permalink":"/blog/tags/aws"}],"readingTime":1.61,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"announcing-defang-public-beta","title":"Announcing the Defang Public Beta","tags":["Cloud","GenerativeAI","NoDevOps","BYOC","AWS"]},"unlisted":false,"prevItem":{"title":"About my Journey Deploying my First Web Application","permalink":"/blog/about-my-journey-deploying-my-first-web-application"},"nextItem":{"title":"Announcing the Private Beta for the Defang Opinionated Platform","permalink":"/blog/announcement"}},"content":"**Announcing the Defang Public Beta**\\n\\n**A radically simpler way for developers to create, deploy, and manage cloud applications.**\\n\\nEver since we shipped our Private Beta in the summer of 2023, we have been working with early adopters and listening to their feedback. While these early customers loved the ease with which they could create, deploy, and manage a cloud application, they had one big request - to deploy their applications to their own cloud (e.g. AWS) account. This was important to them for a number of reasons - to leverage their cloud credits, to enforce their IAM roles and security settings, to integrate new application components with their existing deployments, and more.\\n\\nAnd so, today with our Public Beta, we are addressing this request. With today\u2019s release of [Defang BYOC](https://docs.defang.io/docs/concepts/defang-byoc) (Bring-your-own-Cloud), you can now enjoy all the benefits of Defang **and** deploy applications to your own AWS account! Our Private Beta experience is still available as [Defang Playground](https://docs.defang.io/docs/concepts/defang-playground) for you to quickly and easily prototype applications and deploy them to our hosted environment.\\n\\nYou can learn more about Defang [here](https://docs.defang.io/docs/intro). Also check out our [tutorials](https://docs.defang.io/docs/category/tutorials), [samples](https://docs.defang.io/docs/samples), and [FAQ](https://docs.defang.io/docs/faq) to know more.\\n\\n**Try the Public Beta!**\\n\\nTo try the Public Beta, please go to [defang.io](http://defang.io) and click on [Download](https://github.com/defang-io/defang/releases/latest) to download the CLI and [get started](https://docs.defang.io/docs/getting-started). We would love to have you kick the tires and give us your feedback! Once you sign up you\u2019ll receive an invitation to our Slack support channel in email. You are also welcome to file [Github issues here](https://github.com/defang-io/defang/issues). \\n\\n**Stay Tuned for More**\\n\\nWhile the Public Beta is an important step forward, we have already heard requests for additional features - from support for additional cloud platforms such as Azure and GCP, to the ability to easily write cloud-agnostic applications while leveraging the best of each cloud platform. We are already working on these items and shall have more to share in the coming months - stay tuned!"},{"id":"announcement","metadata":{"permalink":"/blog/announcement","source":"@site/blog/2023-06-29-Announcing-the-Private-Beta-for-the-DOP.md","title":"Announcing the Private Beta for the Defang Opinionated Platform","description":"Announcing the Private Beta for the Defang Opinionated Platform: Radically Simplifying and Cloud Application Development, Deployment, and Optimization","date":"2023-06-29T00:00:00.000Z","formattedDate":"June 29, 2023","tags":[{"label":"Cloud","permalink":"/blog/tags/cloud"},{"label":"GenerativeAI","permalink":"/blog/tags/generative-ai"},{"label":"NoDevOps","permalink":"/blog/tags/no-dev-ops"}],"readingTime":2.055,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"announcement","title":"Announcing the Private Beta for the Defang Opinionated Platform","tags":["Cloud","GenerativeAI","NoDevOps"]},"unlisted":false,"prevItem":{"title":"Announcing the Defang Public Beta","permalink":"/blog/announcing-defang-public-beta"}},"content":"**Announcing the Private Beta for the Defang Opinionated Platform: Radically Simplifying and Cloud Application Development, Deployment, and Optimization**\\n\\nWe\'re thrilled to announce the release of our Private Beta for the Defang Opinionated Platform (DOP). We started Defang because, as practitioners with experience in both building cloud apps and building cloud platforms, we were unhappy with the state of the art. It was, and remains, too difficult to develop, deploy, and optimize cloud applications. In architecting and building a cloud app, developers need to consider a variety of factors such as performance, scalability, cost, security, flexibility, simplicity, etc. At the same time, they face a bewildering array of choices - from app architecture to choice of cloud platforms and services, to configuration and deployment, CI-CD, security setting, etc. - in topics that they are not experts in. Clearly, we need a better way.\\n\\nWe realize that improving on this state of affairs is a long journey. Today, we are taking an initial step with the release of the Private Beta of the DOP. The DOP enables **AI-assisted development**, with the ability to specify a high-level prompt and get back an initial version of your cloud service code, which can then be refined further. The DOP **simplifies CI-CD** by automatically building and deploying new artifacts to your target environments when you push new code to your source repository, taking care of all dependency management and build tasks. And the **DOP pre-provisions properly secured and configured staging and production environments** for your application, optimized for security, scaling, and cost.\\n\\n**Try the Private Beta!**\\n\\nTo try the Private Beta, please go to [portal.defang.dev](https://portal.defang.dev) and register. We would love to have you kick the tires and give us your feedback! You can also check out our [documentation](https://docs.defang.io/docs/intro), [samples](https://docs.defang.io/docs/intro), and our [Github repository](https://github.com/defang-io).\\n\\n**Stay Tuned for More**\\n\\nWhile the Private Beta is a start, we have already heard requests for additional features from some of our early adopters and have a lot more in the pipeline! Top of the list is the ability to bring your own cloud accounts (AWS, Azure, GCP). Another frequent request is the ability to access a variety of compute and storage services native to the underlying platform while still maintaining app portability. And we also hear about the need to be able to monitor and optimize an app once deployed. We are already working on all these items and hope to have more to share in the coming months - stay tuned!"}]}')}}]);