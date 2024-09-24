# Module 4 - Section 1 - Introduction to Red Hat OpenShift

// TODO: add images

## Introduction

In this section, we will learn about Red Hat OpenShift, a Kubernetes container platform:

- Define OpenShift and list its features.
- Its architecture.
- How it compares to Kubernetes.

## What is Red Hat OpenShift?

OpenShift is an enterprise-ready Kubernetes container platform built for an open hybrid cloud strategy.

OpenShift, developed and supported by Red Hat:

- Provides a consistent application platform to manage hybrid, multi-cloud, and edge deployments.
- Built on the technological foundation of Linux, containers, and automation.
- Offers full stack automated operations and self-service provisioning for developers to efficiently move ideas from development to production.
- Includes additional tooling around the complete lifecycle of applications, from build, to CI/CD, to monitoring, and logs.

## Kubernetes and OpenShift

Both Kubernetes and OpenShift are container orchestration platforms:

- Kubernetes is a critical component of OpenShift.
- OpenShift extends Kubernetes to provide a more robust and comprehensive platform for containerized applications.

## OpenShift Features

Here is a selection of OpenShift features:

- **Scalable**: Apps can scale to thousands of instances across hundreds of nodes in seconds.
- **Flexible hybrid infrastructure options**: Simplify deployment and management.
- **Open source** standards use Kubernetes and Open Container Initiative (OCI) containers.
- **Enhanced developer development**: Includes developer tools, multi-language support, command line, IDE integrations, and more.
- **Automated operations (installs & upgrade)**: Supports over-the-air platform upgrades and one-click service deployments.
- **Automation & streamlining**: Streamlines container and app builds, deployments, scaling, and health management.
- **Edge architecture support**: Enhances support for smaller footprint topologies in edge scenarios.
- **Multi-cluster management**: Easily manages and enforces policies across multiple clusters.
- **Advanced security & compliance**: Offers access controls, networking, enterprise registry, built-in scanner, threat detection, vulnerability management, and risk profiling.
- **Persistent storage solutions**: Supports enterprise persistent storage for running stateful and stateless apps.
- **Robust partner ecosystem**: Provides additional storage and network services, IDE, and CI integrations.

## OpenShift vs. Kubernetes

| Difference      | OpenShift                                 | Kubernetes                                             |
|-----------------|-------------------------------------------|--------------------------------------------------------|
| Type            | Product                                   | Open Source Project                                    |
| Installation    | Limited options after installation starts | Installable on every/all Linux environment             |
| Flexibility     | Some limitations                          | More flexible                                          |
| Platforms       | Available online with Azure and Dedicated | Available on EKS, AWS, GKE on GCP, and AKS on Azure    |
| Image Streams   | Easier to manage                          | Not as easy                                            |
| Security        | Strict policies                           | Easier security maintenance                            |
| Routing/Ingress | External access via router objects        | External access via Ingress objects                    |
| Deployment      | Less flexible (DeploymentConfig)          | More flexible (Deployment objects)                     |
| User Experience | Good user experience                      | Requires extra tools                                   |
| Networking      | Strong solutions out of the box           | Needs 3rd-party plugins when solutions are unavailable |
| Service Catalog | Better service catalog                    | Offers less for better services in clusters            |
| Console Layout  | User-friendly web console layout          | More difficult for beginners                           |
| CI & CD         | Integrates with Jenkins                   | Can be integrated but not with Jenkins                 |

## OpenShift Platform Architecture

OpenShift runs on top of a Kubernetes cluster, with object data stored in the etcd key-value store. It has a microservices-based architecture with services as REST APIs and controllers that manage core objects and maintain the desired state of the cluster.

## OpenShift Services

OpenShift provides several services to help users manage workloads and build cloud-native apps:

- **Rest APIs**: Expose core objects.
- **Controllers**: Read REST APIs, apply changes, report status, and maintain the cluster desired state.

In addition to Docker for container management and Kubernetes for orchestrating containers, OpenShift offers:

- **Source code, builds, and deployment management**.
- **Image promotion and management at scale**.
- **Application management at scale**.
- **Team and user tracking** for large developer organizations.
- **Networking infrastructure** for the cluster.

## OpenShift Components

OpenShift's architecture includes:

- **Cluster services**: Automated operations, integrated monitoring, private registry, networking, routers, and more.
- **Platform services**: Service Mesh, serverless builds, CI/CD pipelines, full-stack logs, and chargeback.
- **Application services**: Databases, languages, runtimes, integration, business automation, and ISV services.
- **Developer services**: CLI, VS Code extensions, IDE plugins, CodeReady Workspaces, and CodeReady Containers.

## OpenShift CLI

OpenShift offers a set of CLI tools, the most common being `oc`, which is used for admin and development operations. It runs on Windows, Linux, or Mac, and allows for working with project source code, scripting OpenShift operations, and managing projects.

- OpenShift includes `kubectl` capabilities but extends `oc` for native OpenShift features like DeploymentConfigs, BuildConfigs, Routes, and ImageStreams.
- Additional commands like `new-app` make it easier to get applications started with existing source code or images.

## Conclusion - Recap

- Kubernetes and OpenShift are container orchestration platforms.
- OpenShift is an enterprise-ready Kubernetes platform built for hybrid clouds.
- OpenShift is easier to use, integrates with Jenkins, and offers more services and features.
- OpenShift provides CLI tools for admin and development operations.
