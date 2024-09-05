# Module 2 - Section 13: Graded Quiz: Kubernetes Basics

1. **Question 1**
   What is automated bin packing?
   - [ ] A Kubernetes capability that mounts a chosen storage system
   - [ ] A Kubernetes capability that applies automatic changes
   - [x] A Kubernetes capability that performs container auto-placement based on resource requirements and conditions without sacrificing high availability
   - [ ] A Kubernetes capability that scales workloads based on metrics or commands
   > Correct! Automated bin packing is a Kubernetes feature that performs container auto-placement based on resource requirements and conditions without sacrificing high availability.

2. **Question 2**
   What component of a worker node ensures containers are running as desired?
   - [ ] Container runtime
   - [ ] The Kubernetes proxy
   - [ ] Etcd
   - [x] The kubelet
   >Correct! The kubelet communicates with the kube-api server to receive new and modified Pod specifications and ensures that the Pods and their associated containers are running as desired.

3. **Question 3**
   What are three Kubernetes capabilities?
   - [x] Automated rollouts
   - [ ] CI/CD pipelines
   - [x] Secret and configuration management
   - [x] Storage orchestration
   >Correct! Kubernetes offers many features, including automated rollouts, storage orchestration, and management of secrets and configuration.

4. **Question 4**
   In what three environments can container orchestration be implemented?
   - [x] Private cloud environments
   - [x] Public cloud environments
   - [x] On-premises environments
   - [ ] A single device
   >Correct! Container orchestration can be implemented in on-premises, public cloud, private cloud, and multicloud environments.

5. **Question 5**
   What does a control plane do?
   - [ ] Shares all the resources of a node
   - [ ] Assigns newly created Pods to nodes
   - [x] Maintains the intended Cluster state by making decisions about the Cluster and detecting and responding to events in the Cluster
   - [ ] Contains Pods
   >Correct! A control plane maintains the intended Cluster state by making decisions about the Cluster and detecting and responding to events in the Cluster.

6. **Question 6**
   What is Kubectl?
   - [ ] OpenShift command line interface (oc)
   - [ ] Cloud command line interface
   - [x] Kubernetes command line interface (CLI)
   - [ ] Docker command line interface
   > Correct! Kubectl stands for Kube Command Tool Line. Kubectl is the Kubernetes CLI.

7. **Question 7**
   What is a label?
   - [ ] A mechanism for isolating groups of resources within a single Cluster
   - [x] A key-value pair attached to an object
   - [ ] The simplest unit in Kubernetes
   - [ ] A set of identical running Pod replicas that are horizontally scaled
   > Correct! Labels are defined as key-value pairs attached to objects.

8. **Question 8**
   What Kubernetes object should be used for stateless applications?
   - [ ] StatefulSet
   - [ ] ReplicaSet
   - [ ] DaemonSet
   - [x] Deployment
   >Correct. A Deployment is suitable for stateless applications. 

9. **Question 9**
   What is the most popular container orchestration tool used as of 2022?
   - [ ] Marathon
   - [ ] Nomad
   - [x] Kubernetes
   - [ ] Docker Swarm
   >Correct! The most popular container orchestration tool in 2022 is Kubernetes.

10. **Question 10**
    What is the function of an External Name Service?
    - [ ] Creates and routes the incoming requests automatically to the ClusterIP Service
    - [ ] Directs traffic to the NodePort Service
    - [x] Maps to a DNS name
    - [ ] Provides inter-service communication within the Cluster
    >Correct! The External Name Service is the service type that maps to a DNS name. 