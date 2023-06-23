---
sidebar_position: 2
---

### **Downloading CLI**

```bash
go install …
nix-env …
nix profile …
brew install …
```

### **CLI Commands**

```bash
defang help
defang version
defang login
```

### **Generating code using AI assistance**

```bash
defang generate
```

### Using Docker Compose YML

Create a new file  `docker-compose.yml` with the following contents:

```yaml
services:
  service1:
		image: nginx:latest
```

Build and deploy your app to your environment:

```bash
defang compose up --tail
```

### Using Defang CLI Imperatively

- Using the Defang CLI imperatively with a pre-built container image:
    
    ```bash
    defang up --name service1 --image … --tail
    ```
    
- Using the Defang CLI imperatively, building from local sources:
    
    ```bash
    defang up --name service1 --build . --tail
    ```
    

### Using the Defang TypeScript Pulumi provider:

```tsx
const image = new docker.Image("…", {
	context: ".",
});

const service1 = new defang.Service("…", {
	image: image.url,
});
```

By default, Pulumi will not touch the deployment if nothing has changed. Set `forceNewDeployment: true` to instruct Pulumi to force the re-deployment of the service.

### **Monitoring your app**

By default, all the output (stdout and stderr) from your app is routed through the Defang log cluster. You can view these logs in real-time. You can view logs for all your services, one service, or even one specific deployment of a service.

- From the CLI:
    
    ```tsx
    defang tail --name service1
    ```
    
- From the Defang portal:
    
    [https://portal.defang.io/](https://portal.defang.io/) 
    

### **Upgrading your app**

To upgrade your app (for example, updating the base image of your container) you can run the same update command as before and it will build and deploy the latest version. Your current version of the service will keep running and handling traffic while the new version is being built and deployed. Only after the new version passes the health checks and accepts traffic will the older version be stopped.
