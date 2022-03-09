#!/usr/bin/env bash

set -o errexit

# Name of the cluster
CLUSTER_NAME=kubernetes-workshop
REGISTRY_NAME=$CLUSTER_NAME-registry
REGISTRY_PORT=5000
HTTP_PORT=9080
HTTPS_PORT=9443

# Create a registry to use for the cluster
k3d registry create $REGISTRY_NAME --port $REGISTRY_PORT || true

# Create the actual cluster with corresponding name and settings
k3d cluster create $CLUSTER_NAME \
    --servers 1 \
    --agents 1 \
    --port $HTTP_PORT:80@loadbalancer \
    --port $HTTPS_PORT:443@loadbalancer \
    --registry-use $REGISTRY_NAME:$REGISTRY_PORT

