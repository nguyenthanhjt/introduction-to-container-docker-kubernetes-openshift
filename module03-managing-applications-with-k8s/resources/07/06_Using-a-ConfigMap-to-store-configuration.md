# 06 - Using a ConfigMap to store configuration

ConfigMaps and Secrets are used to store configuration information separate from the code so that nothing is hardcoded. It also lets the application pick up configuration changes without needing to be redeployed. To demonstrate this, we’ll store the application’s message in a ConfigMap so that the message can be updated simply by updating the ConfigMap.

1. Create a ConfigMap that contains a new message.

    ```shell
    >> kubectl create configmap app-config --from-literal=MESSAGE="This message came from a ConfigMap!"
    configmap/app-config created
    ```
    > NOTE: If you have tried this lab earlier, there might be a possibility that the previous session is still persistent. In such a case, you will see an ‘error: failed to create configmap: configmaps “app-config” already exists’ message, instead of the ‘Created’ message as below. We would recommend you to continue with the further steps of the lab.
2. Use the Explorer to edit `deployment-configmap-env-var.yaml`. The path to this file is `CC201/labs/3_K8sScaleAndUpdate/`. You need to insert your namespace where it says `<my_namespace>`. Make sure to save the file when you’re done.

    In the same file, notice the section reproduced below. The bottom portion indicates that environment variables should be defined in the container from the data in a ConfigMap named `app-config`.

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: hello-world
    spec:
      selector:
        matchLabels:
          run: hello-world
      template:
        metadata:
          labels:
            run: hello-world
        spec:
          containers:
          - name: hello-world
            image: us.icr.io/sn-labs-nguyenthanhj/hello-world:3
            ports:
            - containerPort: 8080
            envFrom:
            - configMapRef:
                name: app-config
          imagePullSecrets:
            - name: icr

    ```
3. Use the Explorer to open the `app.js` file. The path to this file is `CC201/labs/3_K8sScaleAndUpdate/`. Find the line that says, `res.send('Welcome to ' + hostname + '! Your app is up and running!\n')`. Edit this line to look like the following:

    ```javascript
    var express = require('express')
    var os = require("os");
    var hostname = os.hostname();
    var app = express()
    
    app.get('/', function (req, res) {
        //res.send('Welcome to ' + hostname + '! Your app is up and running!\n')
        res.send(process.env.MESSAGE + '\n')
    })
    app.listen(8080, function () {
        console.log('Sample app is listening on port 8080.')
    })
    ```

    Make sure to save the file when you’re done. This change indicates that requests to the app will return the environment variable `MESSAGE`.
4. Build and push a new image that contains your new application code.

    ```shell
    >> docker build -t us.icr.io/$MY_NAMESPACE/hello-world:3 . && docker push us.icr.io/$MY_NAMESPACE/hello-world:3
    Sending build context to Docker daemon  6.656kB
    ...
    Successfully built 34c1c27a0513
    Successfully tagged us.icr.io/sn-labs-nguyenthanhj/hello-world:3
    The push refers to repository [us.icr.io/sn-labs-nguyenthanhj/hello-world]
    b9ff2a492d3f: Pushed 
    2fce017d9e10: Layer already exists 
    7f89971466f1: Pushed 
    0804854a4553: Layer already exists 
    6bd4a62f5178: Layer already exists 
    9dfa40a0da3b: Layer already exists 
    3: digest: sha256:9512991e4f0c9a2d6ce10e1c968318791eba2fff758d71ff34551b83ea0696be size: 1576
    ```

    The `deployment-configmap-env-var.yaml` file is already configured to use the tag `3`.
5. Apply the new Deployment configuration.

    ```shell
    >> kubectl apply -f deployment-configmap-env-var.yaml
    deployment.apps/hello-world configured
    ```
6. Ping your application again to see if the message from the environment variable is returned.

    > NOTE: You can run this command again. As it may not show the "This message came from a ConfigMap!" message right away.

    ```shell
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy
    This message came from a ConfigMap!
    ```
   If you see the message, “This message came from a ConfigMap!”, then great job!

    > NOTE: If your previous session is still persisting, you might see the below output. If so, we would recommend you to move to the further steps of the lab.

7. If the new version contains a bug, delete the old ConfigMap and create a new one with a different message.

    Because the configuration is separate from the code, the message can be changed without rebuilding the image. Using the following command, delete the old ConfigMap and create a new one with the same name but a different message.

    ```shell
    >> kubectl delete configmap app-config && kubectl create configmap app-config --from-literal=MESSAGE="This message is different, and you didn't have to rebuild the image!"
    configmap "app-config" deleted
    configmap/app-config created
    ```
8. Restart the Deployment so that the containers restart. This is necessary since the environment variables are set at start time.

    ```shell
    >> kubectl rollout restart deployment hello-world
    deployment.apps/hello-world restarted
    ```
9. Ping your application again to see if the new message from the environment variable is returned.

    ```shell
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy
    This message is different, and you didn't have to rebuild the image!
    ```