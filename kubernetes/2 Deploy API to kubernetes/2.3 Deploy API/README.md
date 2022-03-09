# Kubernetes deployment
To deploy the image to our kubernetes cluster we need the following command.
```bash
kubectl apply -f deployment.yaml
```

## Check deployment status
To check if a deployment was succesfull we can run.
```bash
kubectl get deployment
```

## Port forward pod
To check whenever we can reach the api we can use the `kubectl port-forward` command.

```bash
kubectl port-forward [POD_NAME] 3000
```