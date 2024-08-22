# Pull an Image from Docker Hub and Run It as a Container

1. **Use the Docker CLI to list your images**:
   ```bash
   docker images
   ```
   - You should see an empty table (with only headings) since you don't have any images yet.
   ```bash
   #Output 
   theia@theiadocker-nguyenthanhj:/home/project/CC201/labs/1_ContainersAndDocker$ docker images
    REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
   ```

2. **Pull your first image from Docker Hub**:
   ```bash
   docker pull hello-world
   #Output
    Using default tag: latest
    latest: Pulling from library/hello-world
    c1ec31eb5944: Pull complete 
    Digest: sha256:53cc4d415d839c98be39331c948609b659ed725170ad2ca8eb36951288f81b75
    Status: Downloaded newer image for hello-world:latest
    docker.io/library/hello-world:latest
   ```

3. **List images again**:
   ```bash
   docker images
   ```
   - You should now see the `hello-world` image present in the table.
   ```bash
    REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
    hello-world   latest    d2c94e258dcb   15 months ago   13.3kB
   ```

4. **Run the hello-world image as a container**:
   ```bash
   docker run hello-world
   ```
   - You should see a "Hello from Docker!" message, along with an explanation of what Docker did to generate this message.
   ```bash
   Hello from Docker!
    This message shows that your installation appears to be working correctly.

    To generate this message, Docker took the following steps:
   1. The Docker client contacted the Docker daemon.
   2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
      (amd64)
   3. The Docker daemon created a new container from that image which runs the
      executable that produces the output you are currently reading.
   4. The Docker daemon streamed that output to the Docker client, which sent it
      to your terminal.
    
    To try something more ambitious, you can run an Ubuntu container with:
     $ docker run -it ubuntu bash
    
    Share images, automate workflows, and more with a free Docker ID:
     https://hub.docker.com/
    
    For more examples and ideas, visit:
     https://docs.docker.com/get-started/
   ```

5. **List the containers**:
   - To see that your container ran and exited successfully:
   ```bash
   docker ps -a
   ```
   - Among other things, for this container, you should see a container ID, the image name (`hello-world`), and a status that indicates that the container exited successfully.
   ```bash
    CONTAINER ID   IMAGE         COMMAND    CREATED              STATUS                          PORTS     NAMES
    391e465a2785   hello-world   "/hello"   About a minute ago   Exited (0) About a minute ago             amazing_driscoll
   ```

6. **Remove your container**:
   - Note the `CONTAINER ID` from the previous output and replace the `<container_id>` tag in the command below with this value:
   ```bash
   #docker container rm <container_id>
   docker container rm 391e465a2785
   #output
   391e465a2785
   ```

7. **Verify that the container has been removed**:
   ```bash
   docker ps -a
   #output
   CONTAINER ID   IMAGE         COMMAND    CREATED              STATUS                          PORTS     NAMES
   ```

**Congratulations on pulling an image from Docker Hub and running your first container!** Now let's try to build our own image.
