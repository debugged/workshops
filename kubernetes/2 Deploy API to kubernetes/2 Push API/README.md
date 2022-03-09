# Push API docker image
Now that we've build the image, we need to push it to the registry we created earlier. We can do this by using the `docker push` command.

```bash
docker push localhost:5001/api:v0.1
```