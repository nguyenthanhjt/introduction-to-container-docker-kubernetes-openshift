# 07 - Autoscale the hello-world application using Horizontal Pod Autoscaler

Horizontal Pod Autoscaler (HPA) automatically scales the number of pods in a deployment based on observed CPU utilization or other select metrics. This helps in managing the load on the application efficiently.

1. Add the following section to the `deployment.yaml` file under the `template.spec.containers` section for increasing the CPU resource utilization:

    ```yaml
    containers:
    - name: http
      resources:
        limits:
          cpu: 50m
        requests:
          cpu: 20m
    ```

    > Note: After making the changes, do not forget to save the file.
    The updated file will be as below:

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
            image: us.icr.io/sn-labs-nguyenthanhj/hello-world:1
            ports:
            - containerPort: 8080
              name: http
            resources:
              limits:
                cpu: 50m
              requests:
                cpu: 20m
            
          imagePullSecrets:
            - name: icr
    ```

2. Apply the deployment:

    ```shell
    >> kubectl apply -f deployment.yaml
    deployment.apps/hello-world configured
    ```
    After this, the old deployment will be replaced with the new one: old pods will be terminated, and new pods will be created with the updated configuration.

3. Autoscale the hello-world deployment using the below command:

    ```shell
    >> kubectl autoscale deployment hello-world --cpu-percent=5 --min=1 --max=10
    horizontalpodautoscaler.autoscaling/hello-world autoscaled
    ```

4. Check the current status of the newly-made HorizontalPodAutoscaler by running:

    ```shell
    >> kubectl get hpa hello-world
    NAME          REFERENCE                TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    hello-world   Deployment/hello-world   0%/5%     1         10        1          2m
    ```

5. Ensure that the Kubernetes proxy is still running in the 2nd terminal. If it is not, please start it again by running:

    ```shell
    kubectl proxy
    ```

6. Open another new terminal and enter the below command to spam the app with multiple requests for increasing the load:

    ```shell
    for i in `seq 100000`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy; done
    ```

7. Continue further commands in the 1st terminal. Run the below command to observe the replicas increase in accordance with the autoscaling:

    ```shell
    >> kubectl get hpa hello-world --watch
    NAME          REFERENCE                TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    hello-world   Deployment/hello-world   22%/5%    1         10        9          6m33s
    hello-world   Deployment/hello-world   10%/5%    1         10        9          6m47s
    hello-world   Deployment/hello-world   10%/5%    1         10        10         7m2s
    hello-world   Deployment/hello-world   11%/5%    1         10        10         7m32s
    ```

    > You will see an increase in the number of replicas which shows that your application has been autoscaled. Stop this command by pressing CTRL + C.

8. Run the below command to observe the details of the horizontal pod autoscaler:

    ```shell
    kubectl get hpa hello-world
    ```

    > You will notice that the number of replicas has increased now. Stop the proxy and the load generation commands running in the other 2 terminals by pressing CTRL + C.

9. Delete the Deployment:

    ```shell
    >> kubectl delete deployment hello-world
    hello-world-7b8ddf76-49g42   1/1     Terminating   0          4m54s
    hello-world-7b8ddf76-4h7zh   1/1     Terminating   0          2m38s
    hello-world-7b8ddf76-5zjqb   1/1     Terminating   0          4m8s
    hello-world-7b8ddf76-c7j98   1/1     Terminating   0          9m54s
    hello-world-7b8ddf76-dkrvd   1/1     Terminating   0          3m53s
    hello-world-7b8ddf76-fz2qn   1/1     Terminating   0          4m8s
    hello-world-7b8ddf76-jww54   1/1     Terminating   0          3m38s
    hello-world-7b8ddf76-nlpnv   1/1     Terminating   0          3m53s
    hello-world-7b8ddf76-whl6k   1/1     Terminating   0          3m53s
    hello-world-7b8ddf76-zmjw8   1/1     Terminating   0          3m53s
    ```

10. Delete the Service:

    ```shell
    >> kubectl delete service hello-world
    service "hello-world" deleted
    ```
