# Exercise 2: Implement Vertical Pod Autoscaler (VPA)

Vertical Pod Autoscaler (VPA) helps you manage resource requests and limits for containers running in a pod. It ensures pods have the appropriate resources to operate efficiently by automatically adjusting the CPU and memory requests and limits based on the observed resource usage.

1. Create a VPA configuration

    You will create a Vertical Pod Autoscaler (VPA) configuration to automatically adjust the resource requests and limits for the `myapp` deployment.

    Explore the `vpa.yaml` file, which has the following content:

    ```yaml
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
    ```

    > Explanation: This YAML file defines a VPA configuration for the `myapp` deployment. The `updateMode: "Auto"` setting means that VPA will automatically update the resource requests and limits for the pods in this deployment based on the observed usage.

2. Apply the VPA

    Apply the VPA configuration using the following command:

    ```shell
    >> kubectl apply -f vpa.yaml
    verticalpodautoscaler.autoscaling.k8s.io/myvpa created
    ```

3. Retrieve the details of the VPA

    Retrieve the created VPA:

    ```shell
    >> kubectl get vpa
    NAME    MODE   CPU   MEM         PROVIDED   AGE
    myvpa   Auto   15m   104857600   True       56s
    ```

    This output shows that:

    - The VPA named `myvpa` is in Auto mode, recommending 15 milli-cores of CPU and 104 MB of memory for the pods it manages.
    - It has been created 56 seconds ago and has been providing these recommendations since then.

    Retrieve the details and current running status of the VPA:

    ```shell
    >> kubectl describe vpa myvpa
    Name:         myvpa
    Namespace:    sn-labs-nguyenthanhj
    Labels:       <none>
    Annotations:  <none>
    API Version:  autoscaling.k8s.io/v1
    Kind:         VerticalPodAutoscaler
    Metadata:
      Creation Timestamp:  2024-09-19T07:15:03Z
      Generation:          1
      Resource Version:    325587437
      UID:                 54015a9a-112f-4bda-807e-d3bd568b451a
    Spec:
      Target Ref:
        API Version:  apps/v1
        Kind:         Deployment
        Name:         myapp
      Update Policy:
        Update Mode:  Auto
    Status:
      Conditions:
        Last Transition Time:  2024-09-19T07:15:30Z
        Status:                True
        Type:                  RecommendationProvided
      Recommendation:
        Container Recommendations:
          Container Name:  myapp
          Lower Bound:
            Cpu:     15m
            Memory:  104857600
          Target:
            Cpu:     15m
            Memory:  104857600
          Uncapped Target:
            Cpu:     15m
            Memory:  104857600
          Upper Bound:
            Cpu:     38m
            Memory:  104857600
    Events:          <none>
    ```

    > Explanation: The output of `kubectl describe vpa myvpa` is providing recommendations for CPU and memory:

    | Resource        | 	Definition                            |
    |-----------------|----------------------------------------|
    | Lower Bound     | 	Minimum resources the VPA recommends. |
    | Target          | 	Optimal resources the VPA recommends. |
    | Uncapped Target | 	Target without any predefined limits. |
    | Upper Bound     | 	Maximum resources the VPA recommends. |

    | Resource        | CPU | Memory |
    |-----------------|-----|--------|
    | Lower Bound     | 15m | 104MiB |
    | Target          | 15m | 104MiB |
    | Uncapped Target | 25m | 104MiB |
    | Upper Bound     | 38m | 104GiB |

    **These recommendations indicate that the VPA is functioning correctly and is providing target values based on observed usage.**

4. Stop the Kubernetes proxy and load generation commands on the other two terminals by pressing `CTRL + C`.
