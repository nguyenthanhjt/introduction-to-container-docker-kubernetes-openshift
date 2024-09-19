# 05 - Perform rolling updates

Rolling updates are an easy way to update our application in an automated and controlled fashion. To simulate an update, let’s first build a new version of our application and push it to Container Registry.


1. Use the Explorer to edit the `app.js`. The path to this file is `CC201/labs/3_K8sScaleAndUpdate/`. Change the welcome message from `'Hello world from ' + hostname + '! Your app is up and running!\n'` to `'Welcome to ' + hostname + '! Your app is up and running!\n'`. Make sure to save the file when you’re done.

    ```js
    var express = require('express')

    var os = require("os");
    var hostname = os.hostname();
    var app = express()
    
    app.get('/', function(req, res) {
    res.send('Welcome to ' + hostname + '! Your app is up and running!\n')
    })
    app.listen(8080, function() {
    console.log('Sample app is listening on port 8080.')
    }) 
   ```

2. Build and push this new version to Container Registry. Update the tag to indicate that this is a second version of this application. Make sure to use the terminal window that isn’t running the proxy command.

    > Note: Do not close the terminal that is running the proxy command.
    
    ```sh
   >> docker build -t us.icr.io/$MY_NAMESPACE/hello-world:2 . && docker push us.icr.io/$MY_NAMESPACE/hello-world:2
   Sending build context to Docker daemon  6.656kB
   Step 1/6 : FROM node:9.4.0-alpine
   ---> b5f94997f35f
   Step 2/6 : COPY app.js .
   ---> c463f32f50a2
   Step 3/6 : COPY package.json .
   ---> 18eac2dca7e9
   Step 4/6 : RUN npm install &&    apk update &&    apk upgrade
   ---> Running in 2cd08e882ea5
   npm notice created a lockfile as package-lock.json. You should commit this file.
   npm WARN hello-world-armada@0.0.1 No repository field.
   npm WARN hello-world-armada@0.0.1 No license field.
   ...
   9dfa40a0da3b: Layer already exists 
   2: digest: sha256:90548173d324b1de0d67b00c35b31ee146b0fa294d9e402b483a93cbbedd47ac size: 1576
    ```

3. List images in Container Registry to see all the different versions of this application that you have pushed so far.

    ```sh
   >> ibmcloud cr images
   Listing images...

   Repository                                   Tag   Digest         Namespace Created      Size     Security status space              Created          Size     Security status
   us.icr.io/sn-labs-nguyenthanhj/hello-world   1     92059bf5dac9   sn-labs-nguyenthanhj   22 minutes ago   28 MB    No Issues         us.icr.io/sn-labs-nguyenthanhj   22 minutes ago   28 MB    No Issues
   us.icr.io/sn-labs-nguyenthanhj/hello-world   2     90548173d324   sn-labs-nguyenthanhj   1 minute ago     28 MB    No Issues         us.icr.io/sn-labs-nguyenthanhj   1 minute ago     28 MB    No Issues
   ...
   
   OK
   ```
   Ensure that the new image shows `No Issues`, else re-run the image several times till there are no issues.

4. Update the deployment to use this version instead.

    ```sh
    >> kubectl set image deployment/hello-world hello-world=us.icr.io/$MY_NAMESPACE/hello-world:2
    deployment.apps/hello-world image updated
    ```

5. Get a status of the rolling update by using the following command:

    ```sh
    >> kubectl rollout status deployment/hello-world
    deployment "hello-world" successfully rolled out
    ```

6. Get the Deployment with the `wide` option to see that the new tag is used for the image.

    ```sh
    >> kubectl get deployments -o wide
    NAME          READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS    IMAGES                                         SELECTOR
    hello-world   1/1     1            1           24m   hello-world   us.icr.io/sn-labs-nguyenthanhj/hello-world:2   run=hello-world
    ```
    Look for the `IMAGES` column and ensure that the tag is `2`.

7. Ping your application to ensure that the new welcome message is displayed.

    ```sh
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-$MY_NAMESPACE/services/hello-world/proxy
    Welcome to hello-world-778476c756-2x5z9! Your app is up and running!

8. It’s possible that a new version of an application contains a bug. In that case, Kubernetes can roll back the Deployment like this:

    ```sh
    >> kubectl rollout undo deployment/hello-world
    deployment.apps/hello-world rolled back
    ```
9. Get the status of the rolling update by using the following command:

    ```sh
    >> kubectl rollout status deployment/hello-world
    deployment "hello-world" successfully rolled out
    ```

10. Get the Deployment with the `wide` option to see that the old tag is used.

    ```sh
    >> kubectl get deployments -o wide
    NAME          READY   UP-TO-DATE   AVAILABLE   AGE   CONTAINERS    IMAGES                                         SELECTOR
    hello-world   1/1     1            1           24m   hello-world   us.icr.io/sn-labs-nguyenthanhj/hello-world:1   run=hello-world
    ```
    Look for the `IMAGES` column and ensure that the tag is `1`.

11. Ping your application to ensure that the earlier `Hello World..Your app is up & running!` message is displayed.

    ```sh
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-$MY_NAMESPACE/services/hello-world/proxy
    Hello world from hello-world-778476c756-2x5z9! Your app is up and running!
    ```
