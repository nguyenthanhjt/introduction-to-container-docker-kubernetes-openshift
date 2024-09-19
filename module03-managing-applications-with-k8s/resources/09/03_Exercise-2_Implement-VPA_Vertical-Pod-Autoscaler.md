# Exercise 2: Implement Vertical Pod Autoscaler (VPA)

## Raw content

Vertical Pod Autoscaler (VPA) helps you manage resource requests and limits for containers running in a pod. It ensures pods have the appropriate resources to operate efficiently by automatically adjusting the CPU and memory requests and limits based on the observed resource usage.

Step 1: Create a VPA configuration
You will create a Vertical Pod Autoscaler (VPA) configuration to automatically adjust the resource requests and limits for the myapp deployment.

Explore the vpa.yaml file, which has the following content:

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
apiVersion: autoscaling.k8s.io/v1
kind: VerticalPodAutoscaler
metadata:
  name: myvpa
spec:
  targetRef:
    apiVersion: "apps/v1"
    kind: Deployment
    name: myapp
  updatePolicy:
    updateMode: "Auto"  # VPA will automatically update the resource requests and limits
Copied!
Explanation
This YAML file defines a VPA configuration for the myapp deployment. The updateMode: "Auto" setting means that VPA will automatically update the resource requests and limits for the pods in this deployment based on the observed usage.

Step 2: Apply the VPA
Apply the VPA configuration using the following command:

1
kubectl apply -f vpa.yaml
Copied!
apply-VPA.png

Step 3: Retrieve the details of the VPA
Retrieve the created VPA:
1
kubectl get vpa
Copied!
get-VPA-01.png

This output shows that:

The VPA named myvpa is in Auto mode, recommending 25 milli-cores of CPU and 256 MB of memory for the pods it manages.
It has been created 29 seconds ago and has been providing these recommendations since then.
Retrieve the details and current running status of the VPA.
1
kubectl describe vpa myvpa
Copied!
describe-VPA-name.png

Explanation
The output of kubectl describe vpa myvpa is providing recommendations for CPU and memory:

Resource	Definition
Lower Bound	Minimum resources the VPA recommends.
Target	Optimal resources the VPA recommends.
Uncapped Target	Target without any predefined limits.
Upper Bound	Maximum resources the VPA recommends.
Resource	CPU	Memory
Lower Bound	25m	256MiB (262144KiB)
Target	25m	256MiB
Uncapped Target	25m	256MiB
Upper Bound	671m	1.34GiB (1438074878KiB)
These recommendations indicate that the VPA is functioning correctly and is providing target values based on observed usage.
You can stop the Kubernetes proxy and load generation commands on the other two terminals by pressing CTRL + C before continuing further.