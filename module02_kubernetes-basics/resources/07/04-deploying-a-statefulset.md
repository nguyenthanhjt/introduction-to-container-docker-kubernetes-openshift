# Task 3: Deploying a StatefulSet

A StatefulSet manages the deployment and scaling of a set of pods, and maintains a sticky identity for each of their Pods, ensuring that each Pod has a persistent identity and storage.

1. Create and open a file named `statefulset.yaml` in edit mode.  

    ```shell
    touch statefulset.yaml
    ```

2. Open `statefulset.yaml`, and add the following code, and save the file:

    ```yaml
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: my-statefulset
    spec:
      serviceName: "nginx"
      replicas: 3
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          containers:
          - name: nginx
            image: nginx
            ports:
            - containerPort: 80
              name: web
      volumeClaimTemplates:
      - metadata:
          name: www
        spec:
          accessModes: [ "ReadWriteOnce" ]
          resources:
            requests:
              storage: 1Gi
    ```

3. Apply the StatefulSet configuration.  
    
    ```shell
    kubectl apply -f statefulset.yaml
    #output
    statefulset.apps/my-statefulset created
    ```
    
    This command tells Kubernetes to create the resources defined in the YAML file.

4. Verify that the StatefulSet is created.  

    ```shell
    kubectl get statefulsets
    #output
    NAME             READY   AGE
    my-statefulset   0/3     49s
    ```
    
    After applying the StatefulSet, you should verify that the StatefulSet has been created and is running. This can be done using the `kubectl get` command.

By following these steps, you can successfully apply a StatefulSet in Kubernetes. The `kubectl apply` command is used to create the StatefulSet, and the `kubectl get` command helps you verify that the StatefulSet is running as expected.