# Build an Image Using a Dockerfile

1. The current working directory contains a simple Node.js application that will be run in a container. The app will print a hello message along with the hostname. The following files are needed to run the app in a container:

   - Refer repository [CC201](./CC201) or [Github](https://github.com/ibm-developer-skills-network/CC201.git) for the artifacts needed for this lab.
     - `app.js`: The main application, which simply replies with a hello world message.
     - `package.json`: Defines the dependencies of the application.
     - `Dockerfile`: Defines the instructions Docker uses to build the image.

2. Use the Explorer to view the files. Click the Explorer icon (it looks like a sheet of paper) on the left side of the window, and then navigate to the directory for this lab: `CC201 > labs > 1_ContainersAndDocker`. Click `Dockerfile` to view the commands required to build an image.

   ```bash
   FROM node:9.4.0-alpine
    COPY app.js .
    COPY package.json .
    RUN npm install &&\
        apk update &&\
        apk upgrade
    EXPOSE  8080
    CMD node app.js
   ```
   - **Dockerfile in Explorer**:
     - You can refresh your understanding of the commands mentioned in the Dockerfile below:
       - **`FROM`**: Initializes a new build stage and specifies the base image that subsequent instructions will build upon.
       - **`COPY`**: Enables copying files to the image.
       - **`RUN`**: Executes commands.
       - **`EXPOSE`**: Exposes a particular port with a specified protocol inside a Docker Container.
       - **`CMD`**: Provides a default for executing a container, or in other words, an executable that should run in your container.

3. **Build the Image**:
   ```bash
   docker build . -t myimage:v1
   #output
   [+] Building 10.5s (10/10) FINISHED                                        docker:default
     => [internal] load build definition from Dockerfile                                 0.0s
     => => transferring dockerfile: 180B                                                 0.0s
     => [internal] load .dockerignore                                                    0.0s
     => => transferring context: 2B                                                      0.0s
     => [internal] load metadata for docker.io/library/node:9.4.0-alpine                 0.3s
     => [auth] library/node:pull token for registry-1.docker.io                          0.0s
     => [1/4] FROM docker.io/library/node:9.4.0-alpine@sha256:9cd67a00ed111285460a83847  4.9s
     => => resolve docker.io/library/node:9.4.0-alpine@sha256:9cd67a00ed111285460a83847  0.0s
     => => sha256:359a2efa481b9edeff9ca120128f89387ce13dafe30b05f762ec63c7f 951B / 951B  0.0s
     => => sha256:b5f94997f35f4d1ba6221656d90dbe1d9f0ce6e3bc7a41a890b46 4.94kB / 4.94kB  0.0s
     => => sha256:605ce1bd3f3164f2949a30501cc596f52a72de05da1306ab36005 1.99MB / 1.99MB  0.2s
     => => sha256:fe58b30348fe37cda551e7f3a63375c46977493a48b98f70f70 19.70MB / 19.70MB  1.2s
     => => sha256:46ef8987ccbdd5d2e0127b7eccca7b618fd9b17f6abb5c178ef50 1.02MB / 1.02MB  0.3s
     => => sha256:9cd67a00ed111285460a83847720132204185e9321ec35dacec0d 1.39kB / 1.39kB  0.0s
     => => extracting sha256:605ce1bd3f3164f2949a30501cc596f52a72de05da1306ab360055f0d7  0.2s
     => => extracting sha256:fe58b30348fe37cda551e7f3a63375c46977493a48b98f70f708747ab0  1.9s
     => => extracting sha256:46ef8987ccbdd5d2e0127b7eccca7b618fd9b17f6abb5c178ef5008de5  0.1s
     => [internal] load build context                                                    0.0s
     => => transferring context: 573B                                                    0.0s
     => [2/4] COPY app.js .                                                              0.0s
     => [3/4] COPY package.json .                                                        0.0s
     => [4/4] RUN npm install &&    apk update &&    apk upgrade                         3.9s
     => exporting to image                                                               1.2s 
     => => exporting layers                                                              1.2s 
     => => writing image sha256:19c0a353efc5d2abacd89f321a9dcf4396c6e43f9bc08f36ec92920  0.0s 
     => => naming to docker.io/library/myimage:v1
   ```
   - As seen in the module videos, the output creates a new layer for each instruction in the Dockerfile.

4. **List Images to See Your Image Tagged `myimage:v1` in the Table**:
   ```bash
   docker images
   #output
    REPOSITORY    TAG       IMAGE ID       CREATED          SIZE
    myimage       v1        19c0a353efc5   43 seconds ago   77.5MB
    hello-world   latest    d2c94e258dcb   15 months ago    13.3kB
   ```

   - Note that compared to the `hello-world` image, this image has a different image ID. This means that the two images consist of different layers – in other words, they're not the same image.