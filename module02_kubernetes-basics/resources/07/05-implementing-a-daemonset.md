# Task 4: Implementing a DaemonSet

A DaemonSet ensures that a copy of a specific Pod runs on all (or some) nodes in the cluster. It is particularly useful for deploying system-level applications that provide essential services across the nodes in a cluster, such as log collection, monitoring, or networking services.

1. Create a file named `daemonset.yaml` and open it in edit mode.

    ```shell
    touch daemonset.yaml
    ```

2. Add the following code to `daemonset.yaml`, and save the file:

    ```yaml
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: my-daemonset
    spec:
      selector:
        matchLabels:
          name: my-daemonset
      template:
        metadata:
          labels:
            name: my-daemonset
        spec:
          containers:
          - name: my-daemonset
            image: nginx
    ```

3. Apply the DaemonSet configuration.

    ```shell
    kubectl apply -f daemonset.yaml
    #output
    daemonset.apps/my-daemonset created
    ```

    This command tells Kubernetes to apply the configuration defined in the `daemonset.yaml` file. The `apply` command is used to create or update Kubernetes resources based on the configuration provided in the YAML file.

4. Verify that the DaemonSet has been created.

    ```shell
    kubectl get daemonsets
    #output
    NAME           DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    my-daemonset   8         6         6       6            6           <none>          45s
    ```

    This output from `kubectl get daemonsets` provides information about the DaemonSet named "my-daemonset" in your Kubernetes cluster.

    - **NAME**: The name of the DaemonSet, which is "my-daemonset" in this case.
    - **DESIRED**: The desired number of DaemonSet pods. In your case, it's set to 7.
    - **CURRENT**: The current number of DaemonSet pods running. It shows 6 pods are currently running.
    - **READY**: The number of DaemonSet pods that are ready and available for use. All 6 running pods are ready.
    - **UP-TO-DATE**: The number of DaemonSet pods that are up-to-date with the latest configuration.
    - **AVAILABLE**: The number of DaemonSet pods that are available for use.
    - **NODE SELECTOR**: Specifies which nodes in the cluster the DaemonSet should run on. In this case, it's set to `<none>`, meaning the DaemonSet is not restricted to specific nodes.
    - **AGE**: The age of the DaemonSet, indicating how long it has been running.

## Conclusion

Congratulations! You have completed the practice lab on Kubernetes. You created a Kubernetes Service, used various `kubectl` commands, deployed StatefulSets for stateful applications, and implemented DaemonSets for uniform pod deployment across cluster nodes.
