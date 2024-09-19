# 03 - Deploy the application to Kubernetes

1. Use the Explorer to edit `deployment.yaml` in this directory. The path to this file is `CC201/labs/3_K8sScaleAndUpdate/`. You need to insert your namespace where it says `<my_namespace>`.
    Make sure to save the file when you’re done.
    > NOTE: To know your namespace, run echo $MY_NAMESPACE in the terminal

2. Run your image as a Deployment.
    ```shell
    >> kubectl apply -f deployment.yaml
    deployment.apps/hello-world created
    ```
    
    >NOTE: If you have tried this lab earlier, there might be a possibility that the previous session is still persistent. In such a case, you will see an ‘Unchanged’ message instead of the ‘Created’ message in the above output. We would recommend you to continue with the further steps of the lab.

3. List Pods until the status is “Running”.
    ```shell
    >> kubectl get pods
    NAME                            READY   STATUS    RESTARTS   AGE
    hello-world-7db85d4977-xp6m2    1/1     Running   0          51s
    ```

    >NOTE: Please move to the next step only after you see the pod status as ‘Running’. In case you see ‘Container Creating’ as the output, please re-run the command in a few minutes.

4. In order to access the application, we have to expose it to the internet via a Kubernetes Service.
    
   ```shell
    >> kubectl expose deployment/hello-world
    service/hello-world exposed
    ```
    This creates a service of type ClusterIP.

5. Open a new terminal window using `Terminal > New Terminal`.
    
    > NOTE: Do not close the terminal window you were working on.

6. Cluster IPs are only accesible within the cluster. To make this externally accessible, we will create a proxy.

    > NOTE: This is not how you would make an application externally accessible in a production scenario.

    Run this command in the new terminal window since your environment variables need to be accessible in the original window for subsequent commands.

    ```shell
    >> kubectl proxy
    ```

    This command will continue running until it exits. Keep it running so that you can continue to access your app.

7. Go back to your original terminal window, ping the application to get a response.

    > NOTE: Do not close the terminal window where the proxy command is still running.

    ```shell
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-<my_namespace>/services/hello-world/proxy
    >> curl -L localhost:8001/api/v1/namespaces/sn-labs-nguyenthanhj/services/hello-world/proxy
    ```

    Observe the message “Hello world from hello-world-xxxxxxxx-xxxx". Your app is up and running!