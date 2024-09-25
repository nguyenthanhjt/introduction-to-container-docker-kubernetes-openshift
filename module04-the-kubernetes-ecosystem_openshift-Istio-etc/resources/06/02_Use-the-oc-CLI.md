# 02 - Use the `oc` CLI

OpenShift provides a command-line interface (CLI) called `oc` that you can use to interact with your OpenShift cluster. The `oc` CLI is similar to the `kubectl` CLI that you use to interact with Kubernetes clusters.

Let's explore some basic `oc` commands. Recall that `oc` comes with a copy of `kubectl`, so all the `kubectl` commands can be run with `oc`.

1. List the Pods in this namespace.

    ```shell
    >> oc get pods
    NAME                                    READY   STATUS    RESTARTS   AGE
    openshift-web-console-98447c58b-7mwfq   2/2     Running   0          14m
    openshift-web-console-98447c58b-pbznx   2/2     Running   0          14m
    ```

2. In addition to Kubernetes objects, you can get OpenShift-specific objects.

    ```shell
    >> oc get buildconfigs
    No resources found in sn-labs-nguyenthanhj namespace.
    ```

3. View the OpenShift project that is currently in use.

    ```shell
    >> oc project
    Using project "sn-labs-nguyenthanhj" from context named "nguyenthanhj-context" on server "https://c109-e.us-east.containers.cloud.ibm.com:30807".
    ```
    
    This project is specific to you and provides isolation within the cluster so that you can deploy your own applications.
