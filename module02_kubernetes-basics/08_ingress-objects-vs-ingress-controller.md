# Module 2 - Section 8: Ingress Objects vs. Ingress Controller

In Kubernetes, external access to cluster services is overseen by Ingress, consisting of two core components: the Ingress API object and the Ingress controller. Let's understand these elements and their collaborative functionality.

## Ingress Objects

The [Ingress](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.28/#ingress-v1-networking-k8s-io) acts as a supervisor for external access, exposing routes from outside the cluster to internal [services](https://kubernetes.io/docs/concepts/services-networking/service/), mainly focusing on HTTP and HTTPS traffic. It adheres to rules defined on the Ingress resource to regulate traffic routing.

- **Functionality**: It doesn't manage arbitrary ports or protocols. Instead, it can provide services with externally accessible URLs, balance traffic, handle SSL/TLS termination, and enable name-based virtual hosting.
- **Service Types**: For non-HTTP and non-HTTPS services, specific service types such as [Service.Type=NodePort](https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport) or [Service.Type=LoadBalancer](https://kubernetes.io/docs/concepts/services-networking/service/#loadbalancer) are typically used.

## Ingress Controllers

On the operational side, the Ingress controller is the deployed cluster resource responsible for implementing rules specified by the Ingress API object.

- **Activation**: Unlike certain controllers that automatically run as part of the kube-controller-manager binary, the [Ingress controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/) requires explicit activation for the Ingress resource to function.
- **Role**: Its primary role is to execute the directives outlined in the Ingress, commonly utilizing a load balancer or setting up additional frontends to handle incoming traffic.

## Ingress Objects vs Ingress Controllers

| Feature                  | Ingress Objects                                 | Ingress Controllers                                      |
|--------------------------|-------------------------------------------------|----------------------------------------------------------|
| **Definition**           | API object managing external access to services | Cluster resource implementing rules specified by Ingress |
| **Primary Function**     | Regulates external access routing               | Implements rules, fulfilling the Ingress                 |
| **Configuration Source** | Rules defined on the Ingress resource           | Reads and processes information from the Ingress object  |
| **Traffic Handling**     | Manages HTTP and HTTPS routes                   | Utilizes load balancer, configures frontends for traffic |
| **Activation**           | Active upon configuration with Ingress resource | Must be explicitly running for Ingress to function       |
| **Handling Protocols**   | Focused on HTTP and HTTPS                       | Implements rules for various protocols and ports         |
| **Automatic Startup**    | Activated with configuration                    | Requires explicit activation in the cluster              |
| **Analogy**              | Traffic rule set for the cluster                | Executor, similar to Nginx instance handling rules       |

## Conclusion

In Kubernetes, overseeing external access includes Ingress, which consists of Ingress objects and Ingress controllers. Ingress manages the routing of HTTP and HTTPS traffic, and Ingress controllers implement these rules in the cluster. Understanding this interplay is essential for effective external access management in Kubernetes.
