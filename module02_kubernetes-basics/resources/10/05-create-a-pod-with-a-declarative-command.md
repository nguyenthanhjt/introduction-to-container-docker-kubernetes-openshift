# Create a Pod with a declarative command

The previous two ways to create a Pod were imperative – we explicitly told `kubectl` what to do. While the imperative commands are easy to understand and run, they are not ideal for a production environment. Let’s look at declarative commands.

## View and edit the configuration file

1. A sample `hello-world-apply.yaml` file is provided in this directory. Use the Explorer again to open this file. Notice the following:
   - We are creating a Deployment (`kind: Deployment`).
   - There will be three replica Pods for this Deployment (`replicas: 3`).
   - The Pods should run the `hello-world` image (`- image: us.icr.io/<my_namespace>/hello-world:1`).

2. Use the Explorer to edit `hello-world-apply.yaml`

    Need to insert your namespace where it says `<my_namespace>`. Make sure to save the file when you’re done.

3. Use the `kubectl apply` command to set this configuration as the desired state in Kubernetes.

    ```sh
    kubectl apply -f hello-world-apply.yaml
    ```

4. Get the Deployments

    Ensure that a Deployment was created.
    
    ```sh
    kubectl get deployments
    ```

5. List the Pods

    Ensure that three replicas exist.
    
    ```sh
    kubectl get pods
    ```
    
    With declarative management, we did not tell Kubernetes which actions to perform. Instead, `kubectl` inferred that this Deployment needed to be created. If you delete a Pod now, a new one will be created in its place to maintain three replicas.

6. Delete a Pod and list the Pods

    Note one of the Pod names from the previous step, replace the `pod_name` in the following command with the pod name that you noted and delete that Pod and list the pods. To see one pod being terminated, thereby having just 2 pods, we will follow the delete, immediately with get.
    
    ```sh
    kubectl delete pod <pod_name> && kubectl get pods
    ```
    
    This command takes a while to execute the deletion of the pod. Please wait till the terminal prompt appears again.

7. Verify that a new Pod is created

    List the Pods to see a new one being created. You may have to run this command a few times as it may take a while to create the new pod.
    
    ```sh
    kubectl get pods
    ```
    
    The output should reflect three pods running.
    
    ```sh
    NAME                          READY   STATUS    RESTARTS   AGE
    hello-world-774ddf45b5-28k7j  1/1     Running   0          36s
    hello-world-774ddf45b5-9cbv2  1/1     Running   0          112s
    hello-world-774ddf45b5-svpf7  1/1     Running   0          112s
    ```