# Exercise 3: Implement Horizontal Pod Autoscaler (HPA)

Horizontal Pod Autoscaler (HPA) automatically scales the number of pod replicas based on observed CPU/memory utilization or other custom metrics. VPA adjusts the resource requests and limits for individual pods. However, HPA changes the number of pod replicas to handle the load.

1. Create an HPA configuration

    You will configure a Horizontal Pod Autoscaler (HPA) to scale the number of replicas of the `myapp` deployment based on CPU utilization.

    Explore the `hpa.yaml` file, which has the following content:

    ```yaml
    apiVersion: autoscaling/v1
    kind: HorizontalPodAutoscaler
    metadata:
      name: myhpa
    spec:
      scaleTargetRef:
        apiVersion: apps/v1
        kind: Deployment
        name: myapp
      minReplicas: 1         # Minimum number of replicas
      maxReplicas: 10        # Maximum number of replicas
      targetCPUUtilizationPercentage: 5  # Target CPU utilization for scaling
    ```

    > Explanation: This YAML file defines a Horizontal Pod Autoscaler configuration for the `myapp` deployment. The HPA will ensure that the average CPU utilization across all pods remains close to 5%. If the utilization is higher, HPA will increase the number of replicas, and if it's lower, it will decrease the number of replicas within the specified range of 1 to 10 replicas.

2. Configure the HPA

    Apply the HPA configuration:

    ```shell
    >> kubectl apply -f hpa.yaml
    horizontalpodautoscaler.autoscaling/myhpa created
    ```

3. Verify the HPA

    Obtain the status of the created HPA resource by executing the following command:

    ```shell
    >> kubectl get hpa myhpa
    NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    myhpa   Deployment/myapp   0%/5%     1         10        1          97s
    ```

    This command provides details about the current and target CPU utilization and the number of replicas.

4. Start the Kubernetes proxy

    Open another terminal and start the Kubernetes proxy:

    ```shell
    >> kubectl proxy
       Starting to serve on 127.0.0.1:8001
    ```

5. Spam and increase the load on the app

    Open another new terminal and enter the below command to spam the app with multiple requests for increasing the load:

    ```shell
    >> for i in `seq 100000`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/myapp/proxy; done
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Simple App - v1</title>
       <link rel="stylesheet" href="./style.css">
   </head>
   <body>
       <h1>MyApp</h1>
       <p>Hello from MyApp. Your app is up!</p>
   </body>
   </html>
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Simple App - v1</title>
       <link rel="stylesheet" href="./style.css">
   </head>
   <body>
       <h1>MyApp</h1>
       <p>Hello from MyApp. Your app is up!</p>
   </body>
   </html>
    ```

6. Observe the effect of autoscaling

    Run the following command to observe the replicas increase in accordance with the autoscaling:

    ```shell
    >> kubectl get hpa myhpa --watch
    NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    myhpa   Deployment/myapp   0%/5%     1         10        1          97s
    myhpa   Deployment/myapp   45%/5%    1         10        1          106s
    myhpa   Deployment/myapp   45%/5%    1         10        4          2m1s
    myhpa   Deployment/myapp   43%/5%    1         10        4          3m16s
    myhpa   Deployment/myapp   43%/5%    1         10        8          3m31s
    myhpa   Deployment/myapp   43%/5%    1         10        10         3m46s
    ```

    > You will see an increase in the number of replicas, which shows that your application has been autoscaled. Terminate this command by pressing `CTRL + C`.

7. Observe the details of the HPA

    Run the following command to observe the details of the horizontal pod autoscaler:

    ```shell
    >> kubectl get hpa myhpa
    NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
    myhpa   Deployment/myapp   43%/5%    1         10        10         7m54s
    ```

    > You will notice that the number of replicas has increased now. 
      Stop the proxy and the load generation commands running in the other two terminals by pressing `CTRL + C`.
      After stopping the load generation, the number of replicas will decrease to the minimum value.
   
   ```shell
   >> kubectl get hpa myhpa --watch
   NAME    REFERENCE          TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
   myhpa   Deployment/myapp   17%/5%    1         10        10         7m54s
   myhpa   Deployment/myapp   8%/5%     1         10        10         8m33s
   myhpa   Deployment/myapp   0%/5%     1         10        10         9m18s
   ```