# Module 5 - Practice Project: Understanding ConfigMaps, DaemonSets, Kubernetes Services, Secrets, and Persistent Volume Claims

Services, Secrets & Persistent Volume Claims
In this lab, we will build and deploy an application to Kubernetes, then understand and create ConfigMaps, DaemonSets, Kubernetes Services, Secrets, and further explore Volumes & Persistent Volume Claims

## Table of Contents

- [Objectives](#objectives)
- [Main content](#main-content)
  - [About the Docker file](#about-the-docker-file)
  - [Build and deploy the application to Kubernetes](#build-and-deploy-the-application-to-kubernetes)
  - [Exercise 1: ConfigMap](#exercise-1-configmap)
  - [Exercise 2: DaemonSets](#exercise-2-daemonsets)
  - [Exercise 3: Kubernetes Services](#exercise-3-kubernetes-services)
  - [Exercise 4: Secrets](#exercise-4-secrets)
  - [Exercise 5: Volumes and Persistent Volume Claims (PVCs)](#exercise-5-volumes-and-persistent-volume-claims-pvcs)

## Objectives

In this Practice Project, you will build and deploy a JavaScript application to Kubernetes using Docker.
You will understand and create the following:

* ConfigMap
* DaemonSet
* Kubernetes Service
* Secret
* Volumes and Persistent Volume Claims

[Reference: Full lab instruction - PDF file](resources/lab_understanding_config_maps-daemon_sets-kubernetes_services-secrets-persistent_volume_claims.pdf)

---
## Main content

### About the Docker file

1. Clone the repository containing the starter code to begin the project.

    `git clone https://github.com/ibm-developer-skills-network/containers-project.git`

2. Open the Dockerfile located in the main project directory.

3. It's content will be as follows:

    ```Dockerfile
    # Use an official Node.js runtime as a parent image
    FROM node:14
    # Set the working directory in the container
    WORKDIR /app
    # Copy the application files to the working directory
    COPY main.js .
    COPY public/index.html public/index.html
    COPY public/style.css public/style.css
    # Make port 3000 available to the world outside this container
    EXPOSE 3000
    # Run the application when the container launches
    CMD ["node", "main.js"]
    ```

    **Here is an explanation of the code in it:**

    * `FROM node:14` specifies the base image to be used, which is an official Node.js runtime version 14.
    * `WORKDIR /app` sets the working directory inside the container to `/app`.
    * `COPY main.js .` copies `main.js` from the host to the current directory (`.`) in the container.
    * `COPY public/index.html public/index.html` copies `index.html` from the `public` directory on the host to the `public` directory in the container.
    * `COPY public/style.css public/style.css` copies `style.css` from the `public` directory on the host to the `public` directory in the container.
    * `EXPOSE 3000` exposes port 3000 of the container to allow connections from the outside.
    * `CMD ["node", "main.js"]` specifies the command to run when the container launches, which is to execute `node main.js`.

---
### Build and deploy the application to Kubernetes

The repository already has the code for the application as you have observed in the earlier section. We are just going to build the docker image and push to the registry.

You will be giving the name `myapp` to your Kubernetes deployed application.

1. Navigate to the project directory.

    `cd containers-project/`
2. Export your namespace.

    `export MY_NAMESPACE=sn-labs-$USERNAME`
3. Build the Docker image.

    ```shell
   >> docker build . -t us.icr.io/$MY_NAMESPACE/myapp:v1`
    => [internal] load build definition from Dockerfile                     0.0s
    => => transferring dockerfile: 464B
    ...
    => [2/5] WORKDIR /app                                                   0.0s
    => [3/5] COPY main.js .                                                 0.0s
    => [4/5] COPY public/index.html public/index.html                       0.0s
    => [5/5] COPY public/style.css public/style.css                         0.0s
    => exporting to image                                                   5.5s
    => => exporting layers                                                  5.5s
    => => writing image sha256:d36994778573a1f6e49f9c2504f2159a1a4d9192a0a  0.0s
    => => naming to us.icr.io/sn-labs-nguyenthanhj/myapp:v1  
   ```

4. Push the tagged image to the IBM Cloud container registry.

    ```shell
    >> docker push us.icr.io/$MY_NAMESPACE/myapp:v1
    [+] Building 57.3s (11/11) FINISHED                            docker:default
    The push refers to repository [us.icr.io/sn-labs-nguyenthanhj/myapp]
    1db36d9a832d: Pushed 
    ... 
    b2dba7477754: Pushed 
    v1: digest: sha256:9cfd7fa77ca098e20eff7db132ef8d50a1237de36272a07c716ea519f7df5316 size: 3042
    ```

5. List all the images available. You will see the newly created myapp image.

    ```shell
   >> ibmcloud cr images
   Listing images...
   Repository                              Tag   Digest   Namespace  Created  Size     Security status
   us.icr.io/sn-labs-nguyenthanhj/myapp    v1     9cfd7
   ```

6. Open the `deployment.yml` file located in the main project directory. It's content will be as follows:

    ```yaml
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: myapp
      labels:
        app: myapp
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: myapp
      strategy:
        rollingUpdate:
          maxSurge: 25%
          maxUnavailable: 25%
        type: RollingUpdate
      template:
        metadata:
          labels:
            app: myapp
        spec:
          containers:
          - image: us.icr.io/<your SN labs namespace>/myapp:v1
            imagePullPolicy: Always
            name: myapp
            ports:
            - containerPort: 3000
              name: http
            resources:
              limits:
                cpu: 50m
              requests:
                cpu: 20m
    ```

    **Here is an explanation of the code within it:**

    * `apiVersion: apps/v1` specifies the version of the Kubernetes API being used and the resource type (Deployment).
    * `kind: Deployment` indicates that this YAML defines a Deployment object.
    * `metadata` section includes metadata about the Deployment, such as its name and labels.
    * `spec` section defines the desired state for the Deployment, including the number of replicas, update strategy, and pod template.
    * `replicas: 1` specifies that there should be one replica of the application running.
    * `selector` defines how the Deployment finds which Pods to manage, using labels.
    * `strategy` specifies the update strategy for the Deployment, here using rolling updates with certain constraints.
    * `template` describes the Pod template used for creating new Pods.
    * `containers` lists the containers within the Pod.
    * `image` specifies the Docker image to use for the container.
    * `imagePullPolicy: Always` ensures that the latest image is always pulled from the registry.
    * `name` assigns a name to the container.
    * `ports` section specifies which ports should be exposed by the container.
    * `resources` defines resource requests and limits for the container, such as CPU.

7. Replace `<your SN labs namespace>` with your actual SN labs namespace. 

   Run the command oc project, and use the namespace mapped to your project name
   Run the command ibmcloud cr namespaces and use the one which shows your sn-labs-username

   ```shell
   >> oc project
   Using project "sn-labs-nguyenthanhj" from context named "nguyenthanhj-context" on server "https://c1.us-east.containers.cloud.ibm.com:22916".
   >> ibmcloud cr namespaces
   Listing namespaces for account 'QuickLabs - IBM Skills Network' in registry 'us.icr.io'...
   
   Namespace
   sn-labs-nguyenthanhj
   sn-labsassets
   
   OK
   ```

8. Apply the deployment.

    ```shell
    >> kubectl apply -f deployment.yml
    deployment.apps/myapp created
    ```
   
9. Verify that the application pods are running and accessible.

    ```shell
    >> kubectl get pods
    NAME                     READY   STATUS    RESTARTS   AGE
    myapp-7b7b7b7b7b-abcde   1/1     Running   0          2m
    ```
   
10. Start the application on port-forward.

    ```shell
    >> kubectl port-forward deployment.apps/myapp 3000:3000
    Forwarding from 127.0.0.1:3000 -> 3000
    Forwarding from [::1]:3000 -> 3000
    ```

11. Launch the app on Port 3000 to view the application output.
12. You should see the message `Hello from MyApp. Your app is up!`.
13. Stop the server before proceeding further, by pressing `CTRL + C`.

---
### Exercise 1: ConfigMap

In this exercise, you will cover how to set up a ConfigMap to manage configuration data for the `myapp` application.

1. The following command is the syntax (with placeholder values) for creating a ConfigMap named `myapp-config`:

    ```bash
    >> kubectl create configmap myapp-config --from-literal=env-var1=value1 --from-literal=env-var2=value2
    configmap/myapp-config created
    ```

    * This command creates a ConfigMap named `myapp-config` that stores environment-related configuration data for the `myapp` application. 
    * The `--from-literal` flag indicates that the data for the ConfigMap will be provided directly on the command line. 
    * It specifies key-value pairs, which define environment variables and their corresponding values within the ConfigMap.

2. As an example, you can use the following key-value pairs:

   - **env-var1**: `server-url`  
   - **value1**: `http://example.com`  
   - **env-var2**: `timeout`  
   - **value2**: `5000`

3. As per these, execute the following command to create a ConfigMap:
    
    ```bash
    >> kubectl create configmap myapp-config --from-literal=server-url=http://example.com --from-literal=timeout=5000
    configmap/myapp-config created
    ```

   * Here, the `server-url` is set to `http://example.com` and `timeout` is set to `5000`.
   * The `server-url` might store the URL of an external server that the application needs to communicate with, and `timeout` might represent the maximum time the application waits for a response before timing out.

4. Verify the successful creation of the ConfigMap by executing the below command:

    ```bash
    >> kubectl get configmap myapp-config
    NAME               DATA   AGE
    kube-root-ca.crt   1      4h16m
    myapp-config       2      29s
    ```

    * The output will indicate the presence of a ConfigMap named `myapp-config`, which contains two key-value pairs and was created moments ago.

---
### Exercise 2: DaemonSets

In this exercise, you'll create a DaemonSet to ensure that a pod runs on each node in the cluster, including the nodes where the `myapp` pods are deployed. Creating a DaemonSet enhances the availability and fault tolerance of your application (`myapp`) by ensuring that it runs on every node in the cluster, providing redundancy and load distribution.

1. Open the `daemonset.yaml` file located in the main project directory. Its content will be as below:

    ```yaml
    apiVersion: apps/v1
    kind: DaemonSet
    metadata:
      name: myapp-daemonset
      labels:
        app: myapp
    spec:
      selector:
        matchLabels:
          app: myapp
      template:
        metadata:
          labels:
            app: myapp
        spec:
          containers:
          - name: myapp-container
            image: us.icr.io/name-space/myapp:v1
            ports:
            - containerPort: 3000
              name: http
          tolerations:
          - key: node-role.kubernetes.io/master
            effect: NoSchedule
    ```

2. The code explanation is as follows:

   - `apiVersion: apps/v1`: This line specifies the Kubernetes API version that this YAML file adheres to, in this case, `apps/v1`.
   - `kind: DaemonSet`: Specifies the Kubernetes resource type, which ensures that all (or some) nodes run a copy of a specific pod.

     ```yaml
      metadata:
         name: myapp-daemonset
         labels:
           app: myapp
     ```
   - The above lines specify metadata about the DaemonSet. It gives the DaemonSet a name (`myapp-daemonset`) and attaches labels to it. Labels are key-value pairs used to organize and select subsets of objects. In this case, the label `app: myapp` is attached to this DaemonSet.

     ```yaml
     spec:
       selector:
         matchLabels:
           app: myapp
     ```
   - The above lines define the selector for the DaemonSet. It specifies how the DaemonSet identifies which pods it should manage. Here, it selects pods with the label `app: myapp`.

     ```yaml
     spec:
       containers:
       - name: myapp-container
         image: us.icr.io/<your SN labs namespace>/myapp:v1
         ports:
         - containerPort: 3000
           name: http
     ```
   - The above lines define the specification for the containers within the pods. It specifies the name of the container (`myapp-container`), the Docker image to use, and the ports to expose. In this case, it exposes port `3000` with the name `http`.

   ```yaml
    tolerations:
    - key: node-role.kubernetes.io/master
      effect: NoSchedule
   ```
   - The above lines define tolerations for the DaemonSet pods. Tolerations allow pods to be scheduled onto nodes with matching taints. Here, it tolerates the taint with the key `node-role.kubernetes.io/master` and the effect `NoSchedule`, meaning it can be scheduled on nodes with the master role.

3. Apply the `daemonset.yaml` to your Kubernetes cluster using the following command:

    ```bash
    >> kubectl apply -f daemonset.yaml
    daemonset.apps/myapp-daemonset created
    ```

4. After applying the DaemonSet, verify its status to ensure that it has been successfully deployed and is running as expected. Use the following command:

    ```bash
    >> kubectl get daemonsets
    NAME              DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    myapp-daemonset   8         7         0       7            0           <none>          14m
    ```

    The output shows information about the DaemonSets in the Kubernetes cluster:

    - **DESIRED**: `6` indicates the desired number of DaemonSet pods.
    - **CURRENT**: `6` signifies the current number of DaemonSet pods.
    - **READY**: `6` represents the number of DaemonSet pods that are ready.
    - **UP-TO-DATE**: `6` means all DaemonSet pods are up-to-date.
    - **AVAILABLE**: `6` denotes that all DaemonSet pods are available for service.
    - **NODE SELECTOR**: `<none>` means no node selector is specified.
    - **AGE**: `23s` indicates the age of the DaemonSet since its creation.

---
### Exercise 3: Kubernetes Services

In this exercise, you will create a Kubernetes Service to expose your application within the cluster.

1. Open the `service.yaml` file located in the main project directory. Its content will be as below:

    ```yaml
    apiVersion: v1
    kind: Service
    metadata:
      name: myapp-service
    spec:
      selector:
        app: myapp
      ports:
        - protocol: TCP
          port: 80
          targetPort: 3000
      type: NodePort
    ```

2. The code explanation is as follows:

   - `apiVersion: v1`: This line specifies the Kubernetes API version that this YAML file adheres to. In this case, it's using the core/v1 API version, which is the most basic Kubernetes API version.

   - `kind: Service`: This line specifies the Kubernetes resource type being defined in this YAML file. In this case, it's a Service. A Service in Kubernetes is an abstraction that defines a logical set of pods and defines a policy for accessing them.

   ```yaml
    metadata:
      name: myapp-service
   ```
   - The above lines specify metadata about the Service, giving it a name (`myapp-service`).

   ```yaml
    spec:
      selector:
        app: myapp
   ```
   - These lines define the selector for the Service, specifying which pods the Service should target based on their labels. In this case, it selects pods with the label `app: myapp`.

   ```yaml
    ports:
      - protocol: TCP
        port: 80
        targetPort: 3000
   ```
   - These lines define the ports configuration for the Service. It specifies the ports to expose on the Service and where to forward the traffic. Here, it exposes port `80` on the Service and forwards traffic to port `3000` on the pods.

   ```yaml
    type: NodePort
   ```
   - This line specifies the type of Service as **NodePort**. It is a Kubernetes Service that exposes the Service on a specific port of each node in the cluster for clients to access it.

3. Apply this configuration to your Kubernetes cluster using the following command:

    ```bash
    >> kubectl apply -f service.yaml
    service/myapp-service created
    ```

4. Retrieve all the services present by using the following command:

    ```bash
    >> kubectl get services
    NAME               TYPE    CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
    myapp-service   NodePort   172.21.225.162   <none>        80:32364/TCP   29s
    ```

    This command will display the `myapp-service` that you have just created.

5. In the output, you will see details about the `myapp-service` as follows:

   - `TYPE: NodePort`: It specifies that this service is of type NodePort, meaning it exposes the service on a port on all nodes in the cluster.
   
   - `CLUSTER-IP: 172.21.225.162`: This is the internal Cluster IP address assigned to the service. It is used for communication within the Kubernetes cluster.

   - `EXTERNAL-IP: <none>`: It indicates that there is no external IP address assigned to this service. External clients cannot directly access this service from outside the Kubernetes cluster.

   - `PORT(S): 80:32364/TCP`: This indicates that port `80` is exposed internally by the service, and externally it is accessible on port `32364` using the TCP protocol. The format is `externalPort/protocol`.

   - `AGE: 29s`: It shows that the service has been running for `29 seconds` since its creation.

   > **Note**: Based on the availability of Cluster-IP addresses or ports, this value may differ in your lab environment.

---
### Exercise 4: Secrets

In this exercise, you will learn how to create and manage secrets in Kubernetes to securely store sensitive information, such as passwords, tokens, and SSH keys.

1. To create a secret named `myapp-secret` with key-value pairs for sensitive data, use the following command:

    ```bash
    kubectl create secret generic <secret-name> --from-literal=<key1>=<value1> --from-literal=<key2>=<value2> ...
    ```

    For example, to create a secret with `username: myuser` and `password: mysecretpassword`, use:

    ```bash
    >> kubectl create secret generic myapp-secret --from-literal=username=myuser --from-literal=password=mysecretpassword
    ecret/myapp-secret created
    ```

    This command creates a Secret named `myapp-secret` and populates it with key-value pairs where `username` is set to `myuser` and `password` is set to `mysecretpassword`.

2. To verify that the secret was successfully created, run the following command:

    ```bash
    >> kubectl get secret myapp-secret
    NAME           TYPE     DATA   AGE
    myapp-secret   Opaque   2      28s
    ```

    This command will display the `myapp-secret` that you have just created.

3. The output provides the following details about the `myapp-secret`:

   - **NAME: myapp-secret**: This column displays the name of the secret, which in this case is `myapp-secret`.

   - **TYPE: Opaque**: This column specifies the type of the secret. "Opaque" indicates that it's a generic secret, meaning it does not have a specific type associated with it (e.g., Docker credentials or TLS keys).

   - **DATA: 2**: This column indicates the number of key-value pairs stored within the secret. In this case, it shows `2`, which corresponds to the `username` and `password` keys.

   - **AGE: 22s**: This column indicates how long it has been since the secret was created. In this case, the secret was created `22 seconds` ago.

   > **Note**: The `AGE` and other fields may differ based on the environment or when you execute the command.


### Exercise 5: Volumes and Persistent Volume Claims (PVCs)

In this exercise, you will explore how to define Volumes and Persistent Volume Claims (PVCs) in Kubernetes to provide storage for your application.

A **PersistentVolume (PV)** is a storage resource provisioned by an administrator in the cluster. It exists independently of any Pod that might use it and can be dynamically provisioned or statically defined. 

A **PersistentVolumeClaim (PVC)** is a request for storage by a user or a Pod, which consumes PersistentVolumes. PVCs allow users to request specific storage resources within their namespace.

1. Open the `volume-and-pvc.yaml` file located in the main project directory. This file defines both a PersistentVolume (PV) and a PersistentVolumeClaim (PVC). Here is the snippet for the PersistentVolume:

    ```yaml
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: myapp-volume
    spec:
      capacity:
        storage: 1Gi
      accessModes:
        - ReadWriteOnce
      hostPath:
        path: /data
    ```

    The explanation of the code is as follows:

   - `apiVersion: v1`: Specifies the Kubernetes API version being used for the PersistentVolume.

   - `kind: PersistentVolume`: Indicates that this YAML file defines a PersistentVolume resource.

   ```yaml
    metadata:
      name: myapp-volume
   ```

   - Defines metadata about the PersistentVolume, specifying its name as `myapp-volume`.

   ```yaml
    spec:
      capacity:
        storage: 1Gi
      accessModes:
        - ReadWriteOnce
      hostPath:
        path: /data
   ```

   - Defines the specifications of the PersistentVolume:
     - `capacity: storage: 1Gi`: This PersistentVolume has a storage capacity of 1 gigabyte.
     - `accessModes: ReadWriteOnce`: The volume can be mounted as read-write by only a single node.
     - `hostPath: path: /data`: The PersistentVolume is backed by a directory on the host, which is `/data` in this case.

2. After defining the PersistentVolume, the next part of the file defines a PersistentVolumeClaim (PVC). Here's the code snippet for the PVC:

    ```yaml
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: myapp-pvc
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
    ```

    The explanation of the code is as follows:

   - `apiVersion: v1`: Specifies the Kubernetes API version being used for the PersistentVolumeClaim.

   - `kind: PersistentVolumeClaim`: Indicates that this YAML file defines a PersistentVolumeClaim resource.

   ```yaml
    metadata:
      name: myapp-pvc
   ```

   - Defines metadata about the PersistentVolumeClaim, specifying its name as `myapp-pvc`.

   ```yaml
    spec:
      accessModes:
        - ReadWriteOnce
      resources:
        requests:
          storage: 1Gi
   ```

   - Defines the specifications of the PersistentVolumeClaim:
     - `accessModes: ReadWriteOnce`: The PVC requests a volume that can be mounted as read-write by a single node.
     - `resources: requests: storage: 1Gi`: This PVC requests a storage capacity of 1 gigabyte.

3. To apply both the PersistentVolume and the PersistentVolumeClaim to your Kubernetes cluster, run the following command:

    ```bash
    >> kubectl apply -f volume-and-pvc.yaml
    persistentvolume/myapp-volume created
    persistentvolumeclaim/myapp-pvc created
    ```

4. To verify the creation of both resources, you can use the following commands:

   - Check the PersistentVolume:

     ```bash
     >> kubectl get pv myapp-volume
     NAME           CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS   CLAIM   STORAGECLASS   REASON   AGE
     myapp-volume   1Gi        RWO            Retain           Bound    default/myapp-pvc               35s
     ```

   - Check the PersistentVolumeClaim:

     ```bash
     >> kubectl get pvc myapp-pvc
     NAME        STATUS   VOLUME         CAPACITY   ACCESS MODES   STORAGECLASS   AGE
     myapp-pvc   Bound    myapp-volume   1Gi        RWO                           35s
     ```

5. In the output:

   - **PersistentVolume (PV)**: 
     - `CAPACITY: 1Gi`: Shows the storage capacity of the volume.
     - `ACCESS MODES: RWO`: Indicates that the volume can be mounted as read-write by only one node.
     - `STATUS: Bound`: Indicates that the PersistentVolume is bound to a PersistentVolumeClaim (`myapp-pvc`).

   - **PersistentVolumeClaim (PVC)**: 
     - `VOLUME: myapp-volume`: The PVC is successfully bound to the PersistentVolume `myapp-volume`.
     - `CAPACITY: 1Gi`: The requested storage capacity is 1 gigabyte.
     - `STATUS: Bound`: The PVC is bound to the PV, indicating successful provisioning.

   > **Note**: The `AGE` and other fields may vary based on when you execute the commands.

## Conclusion

In this Practice Project, you started by building and deploying a Javascript application to Kubernetes using Docker.

You further created and understood a ConfigMap to manage configuration data for the application, a DaemonSet to ensure that a pod runs on each node in the cluster, a Kubernetes Service to expose your application within the cluster, and a Secret to securely store sensitive information.

Further, you explored how to define volumes and persistent volume claims to provide storage for your application.