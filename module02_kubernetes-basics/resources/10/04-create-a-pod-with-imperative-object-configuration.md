# Create a Pod with imperative object configuration

Imperative object configuration lets you create objects by specifying the action to take (e.g., create, update, delete) while using a configuration file. A configuration file, `hello-world-create.yaml`, is provided to you in this directory.

1. Use the Explorer to view and edit the configuration file. Click the Explorer icon (it looks like a sheet of paper) on the left side of the window, and then navigate to the directory for this lab: `CC201 > labs > 2_IntroKubernetes`. Click `hello-world-create.yaml` to view the configuration file.

2. Use the Explorer to edit `hello-world-create.yaml`. You need to insert your namespace where it says `<my_namespace>`. Make sure to save the file when you’re done.

3. Imperatively create a Pod using the provided configuration file

    ```sh
    kubectl create -f hello-world-create.yaml
    ```
    
    Note that this is indeed imperative, as you explicitly told Kubernetes to create the resources defined in the file.

4. List the Pods in your namespace

    ```sh
    kubectl get pods
    ```

5. Delete the Pod

    ```sh
    kubectl delete pod hello-world
    ```
    
    This command takes a while to execute the deletion of the pod. Please wait till the terminal prompt appears again.

6. Verify that no Pods exist

    ```sh
    kubectl get pods
    ```
