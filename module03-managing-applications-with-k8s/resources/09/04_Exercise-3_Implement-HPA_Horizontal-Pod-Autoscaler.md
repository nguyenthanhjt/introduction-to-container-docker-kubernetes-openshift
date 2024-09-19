# Exercise 3: Implement Horizontal Pod Autoscaler (HPA)

## Raw content
Horizontal Pod Autoscaler (HPA) automatically scales the number of pod replicas based on observed CPU/memory utilization or other custom metrics. VPA adjusts the resource requests and limits for individual pods. However, HPA changes the number of pod replicas to handle the load.

Step 1: Create an HPA configuration
You will configure a Horizontal Pod Autoscaler (HPA) to scale the number of replicas of the myapp deployment based on CPU utilization.

Explore the hpa.yaml file, which has the following content:

1
2
3
4
5
6
7
8
9
10
11
12
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
Copied!
Explanation
This YAML file defines a Horizontal Pod Autoscaler configuration for the myapp deployment. The HPA will ensure that the average CPU utilization across all pods remains close to 5%. If the utilization is higher, HPA will increase the number of replicas, and if it's lower, it will decrease the number of replicas within the specified range of 1 to 10 replicas.

Step 2: Configure the HPA
Apply the HPA configuration:

1
kubectl apply -f hpa.yaml
Copied!
apply-HPA-N2.png

Step 3: Verify the HPA
Obtain the status of the created HPA resource by executing the following command:

1
kubectl get hpa myhpa
Copied!
HPA-before-load-genrn.png

This command provides details about the current and target CPU utilization and the number of replicas.

Step 4: Start the Kubernetes proxy
Open another terminal and start the Kubernetes proxy:

1
kubectl proxy
Copied!
proxy-server'.png

Step 5: Spam and increase the load on the app
Open another new terminal and enter the below command to spam the app with multiple requests for increasing the load:

1
for i in `seq 100000`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/myapp/proxy; done
Copied!
spamming-output.png


Proceed with further commands in the new terminal.

Step 6: Observe the effect of autoscaling
Run the following command to observe the replicas increase in accordance with the autoscaling:
1
kubectl get hpa myhpa --watch
Copied!
autoscaling-RESULT.png

You will see an increase in the number of replicas, which shows that your application has been autoscaled.

Terminate this command by pressing CTRL + C.

Step 7: Observe the details of the HPA
Run the following command to observe the details of the horizontal pod autoscaler:
1
kubectl get hpa myhpa
Copied!
HPA-AFTER-load-genrn.png

You will notice that the number of replicas has increased now.

Stop the proxy and the load generation commands running in the other two terminals by pressing CTRL + C.