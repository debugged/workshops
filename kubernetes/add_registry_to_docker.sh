#!/usr/bin/env bash

# Place json in daemon file
bash -c 'cat <<EOT >>/etc/docker/daemon.json
{
  "insecure-registries" : ["localhost:$REGISTRY_PORT"]
}
EOT
'