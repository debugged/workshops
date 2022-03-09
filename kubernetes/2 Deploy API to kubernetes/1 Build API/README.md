# Build API docker image
In order to deploy our API, we first need to create a docker image of it. It's important that this docker image is tagged the right way.

```bash
docker build -t localhost:5001/api:v0.1 $PATH_TO_API_FOLDER
```