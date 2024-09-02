# Load balancing the application

Since there are three replicas of this application deployed in the cluster, Kubernetes will load balance requests across these three instances. Let’s expose our application to the internet and see how Kubernetes load balances requests.

1. In order to access the application, we have to expose it to the internet using a Kubernetes Service.
    
    ```bash
    kubectl expose deployment/hello-world
    ```
    
    This command creates what is called a ClusterIP Service. This creates an IP address that accessible within the cluster.

2. List Services in order to see that this service was created.
    
    ```bash
    kubectl get services
    ```

3. Open a new terminal window using Terminal > Split Terminal.

4. Since the cluster IP is not accessible outside of the cluster, we need to create a proxy. Note that this is not how you would make an application externally accessible in a production scenario. Run this command in the new terminal window since your environment variables need to be accessible in the original window for subsequent commands.
    
    ```bash
    kubectl proxy
    ```
    
    This command doesn’t terminate until you terminate it. Keep it running so that you can continue to access your app.

5. In the original terminal window, ping the application to get a response.
    
    ```bash
    curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy
    ```
    
    Notice that this output includes the Pod name.

6. Run the command which runs a for loop ten times creating 10 different pods and note names for each new pod.
    
    ```bash
    for i in `seq 10`; do curl -L localhost:8001/api/v1/namespaces/sn-labs-$USERNAME/services/hello-world/proxy; done
    ```
    
    You should see more than one Pod name, and quite possibly all three Pod names, in the output. This is because Kubernetes load balances the requests across the three replicas, so each request could hit a different instance of our application.

7. Delete the Deployment and Service. This can be done in a single command by using slashes.
    
    ```bash
    kubectl delete deployment/hello-world service/hello-world
    ```
    
    Note: If you face any issues in typing further commands in the terminal, press Enter.

8. Return to the terminal window running the proxy command and kill it using Ctrl+C.

Congratulations! You have completed the lab for the second module of this course.