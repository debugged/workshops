#!/usr/bin/env bash

set -o errexit

# Name of the cluster
CLUSTER_NAME=kw
REGISTRY_NAME=$CLUSTER_NAME-r
REGISTRY_PORT=5001
HTTP_PORT=9080

# Create a registry to use for the cluster (always continue)
k3d registry create $REGISTRY_NAME --port $REGISTRY_PORT || true

# Create the actual cluster with corresponding name and settings
k3d cluster create $CLUSTER_NAME \
    --servers 1 \
    --agents 1 \
    --port $HTTP_PORT:80@loadbalancer \
    --registry-use $REGISTRY_NAME:$REGISTRY_PORT \
    --registry-config registries.yaml