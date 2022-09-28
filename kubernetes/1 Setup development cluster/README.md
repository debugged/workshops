# Setup development cluster
In this step you'll setup a development cluster locally.

## Requirements
- docker ([link](https://docs.docker.com/get-docker/))
- k3d ([link](https://k3d.io/v5.3.0/#installation))

### 1. Create image registry
k3d comes with a handy CLI tool to create and manage locally running cluster. In order to share your docker images with this cluster you'll need a image registry. To create this registry run the following command.
```bash
k3d registry create fontys --port 5001
```

### 2. Create k3d cluster
Now the image registry has been created. We can create a k3d cluster. To do this we run the following command.
```bash
k3d cluster create fontys \
    --servers 1 \
    --agents 1 \
    --port 9080:80@loadbalancer \
    --registry-use fontys:5001
```

### 3. Check if your cluster is running
Your kubernetes cluster should be running now. We can check this by using the `kubectl` cli tool.
```bash
kubectl get nodes
```