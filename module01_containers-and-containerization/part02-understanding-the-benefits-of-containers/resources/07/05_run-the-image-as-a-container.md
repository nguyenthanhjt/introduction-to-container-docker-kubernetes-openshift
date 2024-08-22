# Run the Image as a Container

Now that your image is built, run it as a container with the following command:

```bash
docker run -dp 8080:8080 myimage:v1
#output
e4379ac3b32badc7bcc75fea0c6136e90ae5c77332eff2e992e4e1d73ac1eea4
```

- The output is a unique code allocated by Docker for the application you are running.

Run the `curl` command to ping the application as given below:

```bash
curl localhost:8080
#output
Hello world from e4379ac3b32b! Your app is up and running!
```

- If you see the output as above, it indicates that "Your app is up and running!".

To stop the container, use `docker stop` followed by the container ID. The following command uses `docker ps -q` to pass in the list of all running containers:

```bash
docker stop $(docker ps -q)
#output
e4379ac3b32b
```

Check if the container has stopped by running the following command:

```bash
docker ps
#output
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```
