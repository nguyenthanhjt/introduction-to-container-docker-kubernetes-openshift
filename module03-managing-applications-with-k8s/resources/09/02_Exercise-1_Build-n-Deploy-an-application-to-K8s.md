# Exercise 1: Build and deploy an application to Kubernetes

The Dockerfile in this repository already has the code for the application. You are just going to build the docker image and push it to the registry.

You will be giving the name `myapp` to your Kubernetes deployed application.

1. Build the Docker image

    Navigate to the project directory.

    ```shell
    >> cd k8-scaling-and-secrets-mgmt
    ```

    Export your namespace.

    ```shell
    >> export MY_NAMESPACE=sn-labs-$USERNAME
    ```

    Build the Docker image.

    ```shell
    >> docker build . -t us.icr.io/$MY_NAMESPACE/myapp:v1
    [+] Building 28.1s (5/10)                                 docker:default:dockerfile:1.0.0
    ...
    [+] Building 28.1s (10/10) FINISHED                        docker:default:dockerfile:1.0.0
    ...
     => exporting to image                                              4.4s
     => => exporting layers                                             4.4s
     => => writing image sha256:106b37f38e0fd2c643bc70cb35327f71f627bc  0.0s
     => => naming to us.icr.io/sn-labs-nguyenthanhj/myapp:v1
    ```

2. Push and list the image

    Push the tagged image to the IBM Cloud Container Registry.

    ```shell
    >> docker push us.icr.io/$MY_NAMESPACE/myapp:v1
    The push refers to repository [us.icr.io/sn-labs-nguyenthanhj/myapp]
    ...
    b2dba7477754: Pushed 
    v1: digest: sha256:a8bcd06547196c2131ecf6e95215d299f034def5798b026b2eb11c4e6f6997c6 size: 3042
    ```

    List all the images available. You will see the newly created `myapp` image.

    ```shell
    >> ibmcloud cr images
    Listing images...
    3   0c4dc8122c97   sn-labs-nguyenthanhj   51 minutes ago   28 MB    -us.icr.io/sn-labs-nguyenthanhj/myapp:v1 
    ```

3. Deploy your application

    Open the `deployment.yaml` file located in the main project directory. Its content will be as follows:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: myapp
      labels:
        app: myapp
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: myapp
      strategy:
        rollingUpdate:
          maxSurge: 25%
          maxUnavailable: 25%
        type: RollingUpdate
      template:
        metadata:
          labels:
            app: myapp
        spec:
          containers:
          - image: us.icr.io/sn-labs-nguyenthanhj/myapp:v1
            imagePullPolicy: Always
            name: myapp
            ports:
            - containerPort: 3000
              name: http
            resources:
              limits:
                cpu: 50m
              requests:
                cpu: 20m
    ```

    Replace `<your SN labs namespace>` with your actual SN lab's namespace.

4. Apply the deployment.

    ```shell
    >> kubectl get pods
    No resources found in default namespace.
    >> kubectl apply -f deployment.yaml
    deployment.apps/myapp created
    ```

    Verify that the application pods are running and accessible.

    ```shell
    >> kubectl get pods
    NAME                    READY   STATUS    RESTARTS   AGE
    myapp-5b74b6f57-7bdjx   1/1     Running   0          10s
    ```

5. View the application output

    Start the application on port-forward:

    ```shell
    >> kubectl port-forward deployment.apps/myapp 3000:3000
    Forwarding from 127.0.0.1:3000 -> 3000
    Forwarding from [::1]:3000 -> 3000
    ```

    Launch the app on Port 3000 to view the application output.

    You should see the message `Hello from MyApp. Your app is up!`.

    Stop the server before proceeding further by pressing `CTRL + C`.

    Create a ClusterIP service for exposing the application to the internet:

    ```shell
    >> kubectl expose deployment/myapp
    service/myapp exposed
    ```
