# Deploy kubernetes ingress
The last step to do is to deploy our ingress. The ingress tells kubernetes how the traffic from externally is routed to each and every serivce.
```bash
kubectl apply -f ingress.yaml
```