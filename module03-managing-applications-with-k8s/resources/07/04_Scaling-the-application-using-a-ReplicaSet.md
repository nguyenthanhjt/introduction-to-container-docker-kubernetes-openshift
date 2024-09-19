# 04 - Scaling the application using a ReplicaSet

In real-world situations, load on an application can vary over time. If our application begins experiencing heightened load, we want to scale it up to accommodate that load. There is a simple `kubectl` command for scaling.

1. Use the `scale` command to scale up your Deployment. Make sure to run this in the terminal window that is not running the `proxy` command.
    
    ```shell
    >> kubectl scale deployment hello-world --replicas=3
    deployment.apps/hello-world scaled
    ```
   
2. Get Pods to ensure that there are now three Pods instead of just one. In addition, the status should eventually update to “Running” for all three.

    ```shell
    >> kubectl get pods
     NAME                           READY   STATUS              RESTARTS   AGE
     hello-world-7db85d4977-4gnn4   0/1     ContainerCreating   0          4s
     hello-world-7db85d4977-mvgtc   0/1     ContainerCreating   0          4s
     hello-world-7db85d4977-xp6m2   1/1     Running             0          10m
    ```

3. As you did in the last lab, ping your application multiple times to ensure that Kubernetes is load-balancing across the replicas.

    ```shell
    >> for i in `seq 10`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy; done
    Hello world from hello-world-7db85d4977-xp6m2! Your app is up and running!
    Hello world from hello-world-7db85d4977-xp6m2! Your app is up and running!
    Hello world from hello-world-7db85d4977-mvgtc! Your app is up and running!
    Hello world from hello-world-7db85d4977-mvgtc! Your app is up and running!
    Hello world from hello-world-7db85d4977-xp6m2! Your app is up and running!
    Hello world from hello-world-7db85d4977-4gnn4! Your app is up and running!
    Hello world from hello-world-7db85d4977-mvgtc! Your app is up and running!
    Hello world from hello-world-7db85d4977-xp6m2! Your app is up and running!
    Hello world from hello-world-7db85d4977-mvgtc! Your app is up and running!
    Hello world from hello-world-7db85d4977-mvgtc! Your app is up and running!
    ```

4. Similarly, you can use the `scale` command to scale down your Deployment.

    ```shell
    >> kubectl scale deployment hello-world --replicas=1
    deployment.apps/hello-world scaled
    ```

5. Check the Pods to see that two are deleted or being deleted.

    ```shell
    >> kubectl get pods
    NAME                           READY   STATUS        RESTARTS   AGE
    hello-world-7db85d4977-4gnn4   1/1     Terminating   0          2m4s
    hello-world-7db85d4977-mvgtc   1/1     Terminating   0          2m4s
    hello-world-7db85d4977-xp6m2   1/1     Running       0          12m
    ```

6. Please wait for some time & run the same command again to ensure that only one pod exists.

    ```shell
    >> kubectl get pods
    NAME                           READY   STATUS    RESTARTS   AGE
    hello-world-7db85d4977-xp6m2   1/1     Running   0          12m 
    ```

