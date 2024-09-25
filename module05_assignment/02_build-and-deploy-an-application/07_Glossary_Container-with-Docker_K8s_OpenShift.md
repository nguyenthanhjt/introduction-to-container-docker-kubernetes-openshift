# Module 5 - Glossary: Container with Docker, Kubernetes, and OpenShift

Welcome! This alphabetized glossary contains many of the terms you'll find within this course. This comprehensive glossary also includes additional industry-recognized terms not used in course videos. These terms are important for you to recognize when working in the industry, participating in user groups, and participating in other certificate programs.

---
## Container Basics

| **Term**                                | **Definition**                                                                                                                                                                                                                               |
|-----------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Agile**                               | An iterative approach to project management and software development that helps teams deliver value to their customers faster and with fewer issues.                                                                                         |
| **Client-server architecture**          | A distributed application structure that divides jobs or workloads between the providers of a resource or service, known as servers, and the users, known as clients.                                                                        |
| **Container**                           | A standard unit of software, powered by a containerization engine, that encapsulates the application code, runtime, system tools, system libraries, and settings necessary for programmers to efficiently build, ship, and run applications. |
| **Container Registry**                  | A system used for the storage and distribution of named container images. Its primary functions include storing images and enabling their retrieval.                                                                                         |
| **CI/CD pipelines**                     | A sequence of automated steps designed to streamline the process of delivering new software versions. It enhances the software development life cycle by focusing on automation to improve software delivery efficiency and quality.         |
| **Cloud native**                        | A type of application specifically designed for a cloud computing architecture. They operate directly in the cloud and take full advantage of cloud-based software delivery models.                                                          |
| **Daemon-less**                         | A container runtime that operates without running any specific background process (daemon) to create and manage objects such as images, containers, networks, and volumes.                                                                   |
| **DevOps**                              | A set of practices, tools, and a cultural philosophy aimed at automating and integrating processes between software development and IT teams to improve efficiency and collaboration.                                                        |
| **Docker**                              | An open container platform that enables the development, deployment, and execution of applications within containers.                                                                                                                        |
| **Dockerfile**                          | A configuration file with instructions for creating a Docker image. Docker can automatically build images by following the instructions specified in a Dockerfile.                                                                           |
| **Docker client**                       | The main interface for many Docker users. When you issue commands like `docker run`, the client sends these instructions to the Docker daemon (`dockerd`), which executes them using the Docker API.                                         |
| **Docker Command Line Interface (CLI)** | The Docker client provides a command line interface (CLI) that allows users to execute commands for building, running, and stopping applications through interaction with a Docker daemon.                                                   |
| **Docker daemon (dockerd)**             | The core engine responsible for creating and managing Docker objects, such as images, containers, networks, and volumes.                                                                                                                     |
| **Docker Hub**                          | A cloud-based registry service that allows you to create, manage, and deliver containerized applications. It provides a centralized platform for storing, sharing, and deploying Docker images.                                              |
| **Docker localhost**                    | Docker offers a host network mode that allows containers to use the host's network stack. This means that a localhost in a container resolves to the physical host, instead of the container itself.                                         |
| **Docker remote host**                  | A Docker Engine operating on a machine, either on the local network or externally, that is accessible for managing Docker containers remotely via the Docker Engine API.                                                                     |
| **Docker networks**                     | Provide a way to isolate container communications, allowing you to create separate networks for different groups of containers. This ensures that containers can only communicate with each other if they are on the same network.           |
| **Docker plugins**                      | Extensions that add functionality to Docker, such as connecting external storage platforms or providing features like networking, security, or logging.                                                                                      |
| **Docker storage**                      | Methods used to maintain data beyond the lifecycle of a container, including volumes and bind mounts. Volumes provide a shared directory between the host and container, while bind mounts allow direct access to host files.                |
| **IBM Cloud Container Registry**        | A fully managed private registry that stores and distributes container images.                                                                                                                                                               |
| **Image**                               | A static file that includes all the source code, libraries, and dependencies needed to run an application. Images serve as templates or blueprints for a container.                                                                          |
| **Immutability**                        | Refers to the read-only nature of images. Any modifications to an image result in the creation of a new image.                                                                                                                               |
| **LXC**                                 | An OS-level virtualization technology that allows for the creation and management of isolated Linux virtual environments (VEs) on a single host system.                                                                                      |
| **Microservices**                       | A cloud-native architectural approach in which a single application contains many loosely coupled and independently deployable smaller components or services.                                                                               |
| **Namespace**                           | A Linux kernel feature that isolates and virtualizes system resources, ensuring that processes within a namespace can only interact with resources or other processes within the same namespace.                                             |
| **Operating System Virtualization**     | An OS-level technology that enables the kernel to support multiple isolated user space instances, often referred to as containers, zones, virtual private servers, partitions, virtual environments, or jails.                               |
| **Private Registry**                    | A registry that restricts access to images, allowing only authorized users to view and use them. This provides additional security and control over containerized applications.                                                              |
| **REST API**                            | A RESTful API conforms to the constraints of REST architectural style and allows for interaction with RESTful web services.                                                                                                                  |
| **Registry**                            | A hosted service that stores repositories of Docker images and interacts with clients through the Registry API.                                                                                                                              |
| **Repository**                          | A collection of Docker images that can be shared by uploading to a registry server. Each image within the repository can be labeled with tags to differentiate versions or configurations.                                                   |
| **Server Virtualization**               | The process of dividing a physical server into multiple unique and isolated virtual servers using a software application, each capable of running its own operating system.                                                                  |
| **Serverless**                          | A cloud-native development methodology that enables developers to create and deploy applications without needing to manage servers.                                                                                                          |
| **Tag**                                 | A label that differentiates Docker images within a repository.                                                                                                                                                                               |

---

---
## Kubernetes Basics

| **Term**                            | **Definition**                                                                                                                                             |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Automated bin packing               | A technique that increases resource utilization and cost savings using a mix of critical and best-effort workloads.                                        |
| Batch execution                     | Handles batch and continuous integration workloads. Automatically replaces failed containers to ensure continuous operation.                               |
| Cloud Controller Manager            | A part of the Kubernetes control plane that handles cloud-specific control logic, integrating Kubernetes with various cloud provider services.             |
| Cluster                             | A set of worker machines, known as nodes, that run and manage containerized applications in a coordinated manner.                                          |
| Container Orchestration             | The process of automating the lifecycle management of containerized applications.                                                                          |
| Container Runtime                   | The software that executes and manages containers, ensuring they run as intended.                                                                          |
| Control Loop                        | A continuous, non-terminating loop that maintains the desired state of a system by monitoring and adjusting as needed.                                     |
| Control plane                       | The core component of container orchestration that provides the API and interfaces for defining, deploying, and managing the lifecycle of containers.      |
| Controller                          | Control loops in Kubernetes that watch the state of the cluster and make or request changes as necessary.                                                  |
| Data (Worker) Plane                 | Provides essential resources like CPU, memory, network bandwidth, and storage needed for containers to operate and interact within a network.              |
| DaemonSet                           | Ensures Pods are scheduled across designated worker nodes, ideal for deploying system daemons like log collection or monitoring tools.                     |
| Declarative Management              | A Kubernetes approach where the desired state of the system is defined, and Kubernetes continuously monitors and adjusts to align the current state.       |
| Deployment                          | Manages updates and scaling for Pods and their ReplicaSets, facilitating the automated rollout and rollback of application versions.                       |
| Designed for extensibility          | Kubernetes' ability to add features to the cluster without modifying the source code.                                                                      |
| Docker Swarm                        | Automates deployment of containerized applications, designed specifically to work with Docker Engine and tools.                                            |
| Ecosystem                           | The array of services, support, and tools that are broadly available and compatible with Kubernetes.                                                       |
| etcd                                | A key-value store used as a reliable and consistent data store for distributed systems.                                                                    |
| Eviction                            | The process of terminating and removing one or more Pods from a Node.                                                                                      |
| Imperative commands                 | Commands that directly create, update, and delete live objects.                                                                                            |
| Imperative Management               | An approach that defines steps and actions to reach a desired state.                                                                                       |
| Ingress                             | Manages external access to services in a cluster, providing a single entry point for incoming traffic and routing requests to multiple services.           |
| IPv4/IPv6 dual stack                | Assigns both IPv4 and IPv6 addresses to Pods and Services, ensuring compatibility with both network types.                                                 |
| Job                                 | A task with a defined start and end, commonly used for batch operations in a Kubernetes cluster.                                                           |
| Kubectl                             | The command-line interface tool for interacting with the Kubernetes control plane, allowing you to manage clusters and resources.                          |
| Kubelet                             | The primary node agent that manages containers, executes tasks, and communicates with the control plane.                                                   |
| Kubernetes                          | The leading open-source platform standard for container orchestration.                                                                                     |
| Kubernetes API                      | A RESTful interface that serves Kubernetes functionality and stores cluster state, enabling automation, tool creation, and integration with other systems. |
| Kubernetes API Server               | Validates and configures data for API objects in Kubernetes.                                                                                               |
| Kubernetes Controller Manager       | Operates controller processes that continuously observe and regulate the Kubernetes cluster, ensuring its actual state aligns with the desired state.      |
| Kubernetes Cloud Controller Manager | Embeds cloud-specific control logic into Kubernetes.                                                                                                       |
| Kubernetes Proxy                    | A network proxy service that manages communication between Pods and services in the cluster.                                                               |
| kube-scheduler                      | Responsible for selecting the appropriate node on which newly created Pods will run.                                                                       |
| Label Selector                      | Filters resources based on assigned labels, making it easier to select specific resources in the cluster.                                                  |
| Labels                              | Key-value pairs attached to objects like Pods or Services, providing metadata for grouping and organizing resources.                                       |
| Load balancing                      | Distributes network traffic evenly across multiple Pods to optimize performance and ensure availability.                                                   |
| Marathon                            | An Apache Mesos framework for scaling container infrastructure.                                                                                            |
| Namespace                           | Supports isolation of resources within a single cluster.                                                                                                   |
| Node                                | A worker machine within a Kubernetes cluster responsible for running containerized applications, managed by the control plane.                             |
| Nomad                               | A cluster management and scheduling tool supporting Docker and other applications.                                                                         |
| Object                              | Represents an entity in the Kubernetes system.                                                                                                             |
| Persistence                         | Ensures objects exist until explicitly modified or removed, providing continuity and stability of resources.                                               |
| Preemption                          | Helps pending Pods find a suitable Node by evicting low-priority Pods, ensuring high-priority Pods are scheduled quickly.                                  |
| Pod                                 | The smallest execution unit in Kubernetes, representing one or more containers running together with shared resources.                                     |
| Proxy                               | An intermediary server for remote services.                                                                                                                |
| ReplicaSet                          | Ensures a specified number of identical Pods are running at all times, providing redundancy and scaling capabilities.                                      |
| Self-healing                        | Automatically restarts, replaces, reschedules, and kills failing containers.                                                                               |
| Service                             | A network abstraction that exposes a group of Pods as a single consistent endpoint, providing load balancing and stable IP addresses.                      |
| Service Discovery                   | The process of discovering and connecting to Pods using their IP addresses or a single DNS name.                                                           |
| StatefulSet                         | Manages the deployment and scaling of Pods, ensuring ordering and uniqueness for stateful applications like databases.                                     |
| Storage                             | Mechanisms for providing persistent and temporary storage for Pods, such as Persistent Volumes and Volume Claims.                                          |
| Storage Orchestration               | Automatically mounts storage systems for Pods, simplifying storage management for stateful applications.                                                   |
| Workload                            | An application running on Kubernetes.                                                                                                                      |

## Managing Applications with Kubernetes

| **Term**                      | **Definition**                                                                                                                                                                                                 |
|-------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Cluster Autoscaler            | Also known as CA. An API resource that autoscales the cluster itself by increasing and decreasing the number of available nodes that pods can run on.                                                          |
| Config Map                    | A Kubernetes object that allows to store configuration data as key-value pairs. It provides a way to manage and inject configuration settings into containers, decoupling configuration from application code. |
| Horizontal Pod Autoscaler     | An API resource in Kubernetes that automatically adjusts the number of Pod replicas based on specified metrics like CPU utilization or custom metrics.                                                         |
| IBM Cloud catalog             | A collection of various services provided by IBM, ranging from visual recognition and natural language processing to creating chatbots.                                                                        |
| Linguistic Analysis           | The process of detecting the tone in a given text.                                                                                                                                                             |
| Persistent Volume             | Within the Kubernetes API, a Persistent Volume acts as an abstraction for persistent storage, ensuring enduring storage for applications running within the cluster.                                           |
| Persistent Volume Claim       | A Kubernetes API object representing storage that persists independently of any Pod's lifecycle, providing durable storage for applications within the cluster.                                                |
| Rolling Updates               | A strategy that provides a way to roll out application changes in an automated and controlled fashion throughout your pods, allowing rollback if something goes wrong.                                         |
| Secrets                       | Secrets store sensitive information such as passwords, OAuth tokens, and ssh keys, providing a secure way to manage sensitive data.                                                                            |
| Service binding               | The process of establishing connections between applications and external or backing services, such as REST APIs, databases, and event buses.                                                                  |
| Tone Analyzer Service         | An IBM Cloud Service that uses linguistic analysis to detect tone in a given text.                                                                                                                             |
| Vertical Pod Autoscaler (VPA) | Also known as VPA. An API resource that adjusts the CPU and memory resources allocated to an existing Pod, allowing a service to scale vertically within a cluster.                                            |
| Volume                        | A directory containing data, accessible to multiple containers in a Pod.                                                                                                                                       |
| Volume Mount                  | Mounting of the declared volume into a container in the same Pod.                                                                                                                                              |
| Volume Plugin                 | Facilitates the integration of storage into a Pod within Kubernetes, enabling containers within the Pod to access and use persistent storage resources.                                                        |


---
## OpenShift Basics

| **Term**                           | **Definition**                                                                                                                                                  |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A/B testing                        | A strategy often used to test new features in front-end applications by evaluating two versions to determine which performs better.                             |
| Build                              | The process of transforming inputs into a resultant object.                                                                                                     |
| BuildConfig                        | An OpenShift-specific object that outlines the steps and strategy for executing a build. It serves as a blueprint for the build process.                        |
| Canary Deployments                 | A deployment strategy where a new version of an application is gradually rolled out to a subset of users, allowing real-world testing before a full deployment. |
| Circuit breaking                   | A method to prevent errors in one microservice from cascading to other microservices.                                                                           |
| Configuration Change               | A trigger that causes a new build to run when a new BuildConfig resource is created.                                                                            |
| Control Plane                      | The control plane dynamically programs and updates proxy servers as the environment changes.                                                                    |
| Custom build strategy              | In OpenShift, a build strategy that enables users to define and use their own custom builder image.                                                             |
| Custom builder images              | Regular Docker images containing the logic needed to transform inputs into the expected output.                                                                 |
| CRDs (Custom Resource Definitions) | Custom code that defines a resource to add to your Kubernetes API server without building a complete custom server.                                             |
| Custom controllers                 | Custom controllers manage Custom Resource Definitions (CRDs) by ensuring their current state aligns with the desired state.                                     |
| Data plane                         | The layer in network architecture that handles communication between services, essential for service mesh decisions.                                            |
| Enforceability (Control)           | Istio enforces policies to manage and regulate the use of services, ensuring fair resource distribution.                                                        |
| Envoy proxy                        | A proxy used by Istio to intercept and manage all network traffic, providing load balancing, observability, and security.                                       |
| Human operators                    | Individuals who manage systems by deploying services, identifying issues, and implementing solutions.                                                           |
| Image Change                       | A trigger that rebuilds a containerized application when a new or updated image version is available.                                                           |
| ImageStream                        | In OpenShift, an abstraction used to reference container images, containing metadata such as image IDs or digests.                                              |
| ImageStream Tag                    | An identifier within an ImageStream that points to a specific image in a registry, representing a named reference to a particular version.                      |
| Istio                              | A platform-independent service mesh that controls traffic and API calls between services in Kubernetes.                                                         |
| Man-in-the-middle attacks          | A cyber-attack where the attacker secretly intercepts and relays messages between two parties.                                                                  |
| Observability                      | The ability to monitor and understand traffic flow within a service mesh, trace dependencies, and view metrics such as latency and errors.                      |
| OpenShift                          | A hybrid cloud, enterprise Kubernetes platform that enables developers to build, deploy, and manage containerized applications efficiently.                     |
| OpenShift CI/CD process            | A continuous integration and deployment process that automatically merges code changes, builds, tests, and deploys new versions to environments.                |
| Operators                          | Software extensions that automate complex tasks and extend the Kubernetes API, acting as custom controllers.                                                    |
| Operator Framework                 | A suite of tools and capabilities designed to enhance the development, testing, delivery, and updating of Operators in Kubernetes environments.                 |
| OperatorHub                        | A web console in OpenShift for discovering and installing Operators, including Red Hat Certified and community Operators.                                       |
| Operator Lifecycle Manager (OLM)   | Manages installation, upgrades, and role-based access control (RBAC) for Operators within Kubernetes or OpenShift clusters.                                     |
| Operator maturity model            | A framework that defines stages of maturity for Operators, ranging from basic installation to fully automated operations (Auto Pilot).                          |
| Operator Pattern                   | A system design linking a Controller to one or more custom resources.                                                                                           |
| Operator Registry                  | A system that stores Custom Resource Definitions (CRDs) and metadata about Operators, providing catalog data to OLM.                                            |
| Operator SDK                       | A toolkit to build, test, and package Operators without requiring extensive knowledge of Kubernetes API complexities.                                           |
| postCommit                         | A section in a build configuration that defines an optional hook.                                                                                               |
| Retries                            | A method to prevent errors in one microservice from cascading to others.                                                                                        |
| runPolicy                          | A field within a BuildConfig object dictating how builds are executed, controlling whether they run sequentially or concurrently.                               |
| Service Broker                     | Provides a short-running process that cannot perform operations like upgrades, failovers, or scaling.                                                           |
| Service Mesh                       | A layer ensuring the security and reliability of service-to-service communication, offering traffic management, security, and observability.                    |
| Software operators                 | Try to capture the knowledge of human operators and automate the same processes.                                                                                |
| Source-to-Image (S2i)              | A tool for building reproducible container images by injecting application source code directly into a base container image.                                    |
| Source strategy                    | A strategy indicating how builds are executed—whether through handling source code directly (Source), containers (Docker), or custom configurations.            |
| Source type                        | The primary input, such as a Git repository, an inline Dockerfile, or binary payloads.                                                                          |
| Webhook                            | A trigger that sends a request to an OpenShift API endpoint, automating development flows for builds.                                                           |

