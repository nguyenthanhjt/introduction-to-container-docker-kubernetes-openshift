# Module 2 - Section 11: Summary & Highlight: Kubernetes Basics

## Summary & Highlights: Kubernetes Basics

- Container orchestration automates the container lifecycle resulting in faster deployments, reduced errors, higher availability, and more robust security.
- Kubernetes is a highly portable, horizontally scalable, open-source container orchestration system with automated deployment and simplified management capabilities.
- Kubernetes architecture consists of a control plane and one or more worker planes.
- A control plane includes controllers, an API server, a scheduler, and an etcd.
- A worker plane includes nodes, a kubelet, container runtime, and kube-proxy.
- Kubernetes objects include Namespaces, Pods, ReplicaSets, Deployments, and Services.
- Namespaces help in isolating groups of resources within a single cluster.
- Pods represent a process or an instance of an app running in the cluster.
- ReplicaSets create and manage horizontally scaled running Pods.
- Deployments provide updates for Pods and ReplicaSets.
- A service in Kubernetes is a REST object that provides policies for accessing the pods and cluster.
- Kubernetes capabilities include automated rollouts and rollbacks, storage orchestration, horizontal scaling, automated bin packing, secret and configuration management, IPv4/IPv6 dual-stack support, batch execution, self-healing, service discovery, load balancing, and extensible design.
- Services in Kubernetes are REST objects that provide policies for accessing the pods and cluster. ClusterIP provides inter-service communication within the cluster; a NodePort Service creates and routes the incoming requests automatically to the ClusterIP Service; the External Load Balancer, or ELB, creates NodePort and ClusterIP Services automatically and External Name service represents external storage as well as enables Pods from different namespaces to talk to each other.
- Ingress is an API object that provides routing rules to manage external users' access to multiple services in a Kubernetes cluster; whereas using a DaemonSet ensures that there is at least one copy of the pod on all nodes; a StatefulSet manages stateful applications, manages Pod deployment and scaling, maintains a sticky identity for each Pod request and provides persistent storage volumes for your workloads and lastly a Job creates pods and tracks the Pod completion process; Jobs are retried until completed.