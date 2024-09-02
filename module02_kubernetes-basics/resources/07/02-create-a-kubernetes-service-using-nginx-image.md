# Task 1: Create a Kubernetes Service using nginx image

A popular open-source web server, nginx is known for its high performance, stability, and low resource usage. It can also function as a reverse proxy, load balancer, and HTTP cache.

Creating a Kubernetes Service using an nginx image involves setting up a networking layer that allows other components within the Kubernetes cluster or external users to access the nginx application running in pods. To run nginx as a service in Kubernetes, you can follow these steps:

1. Create a Deployment named my-deployment1 using the nginx image
    
   ```shell
    kubectl create deployment my-deployment1 --image=nginx
    #output
    deployment.apps/my-deployment1 created
    ```
    
    `kubectl`: The command-line tool for interacting with the Kubernetes API.
    
    `create deployment`: Tells Kubernetes that you want to create a new Deployment. A Deployment is a Kubernetes object that manages a set of replicated Pods, ensuring that the specified number of replicas are running and updated.
    
    `my-deployment1`: It is the name of the Deployment being created. In this case, the Deployment is named my-deployment1.
    
    `--image=nginx`: It specifies the container image used for the Pods managed by this Deployment. The nginx image is a popular web server and reverse proxy server.
    
    It creates a Deployment named my-deployment1 that uses the nginx image. Deployments manage the rollout and scaling of applications.

2. Expose the deployment as a service  
    ```shell
    kubectl expose deployment my-deployment1 --port=80 --type=NodePort --name=my-service1
    #outputy
    service/my-service1 exposed
    ```
    
    It exposes the my-deployment1 Deployment as a Service named my-service1, making it accessible on port 80 through a NodePort. NodePort services allow external traffic to access the service.

3. Lists all services in the default namespace. Services provide a stable IP address and DNS name for accessing a set of pods.  
    ```shell
    kubectl get services
    #output
    NAME          TYPE       CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
    my-service1   NodePort   172.21.200.143   <none>        80:31552/TCP   29s
    ```
    
    This command lists all the services in the default namespace, including nginx-service, and provides details such as the ClusterIP, NodePort, and target port.

By following these steps, you create a Kubernetes Service named nginx, which routes traffic to the nginx pods running in your cluster, making them accessible internally and externally via the assigned NodePort.