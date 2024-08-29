# Module 2 - Section 6: Using kubectl

## Table of Contents
- [Introduction](#introduction)
- [Command Structure](#command-structure)
- [Command Types](#command-types)
  - [Imperative Commands](#imperative-commands)
  - [Imperative Object Configuration](#imperative-object-configuration)
  - [Declarative Object Configuration](#declarative-object-configuration)
- [Commonly Used kubectl Commands](#commonly-used-kubectl-commands)
- [Summary](#summary)

## Introduction
In this section, you will learn about `kubectl`, the Kubernetes command-line interface (CLI). `kubectl` stands for kube command tool line and is essential for deploying applications, inspecting and managing cluster resources, viewing logs, and more.

## Command Structure
`kubectl` commands follow a specific structure:
- **Command**: The operation to be performed (e.g., create, get, apply, delete).
- **Type**: The resource type (e.g., pod, deployment, replica set).
- **Name**: The resource name, if applicable.
- **Flags**: Special options or modifiers that override default values.

## Command Types
There are three main types of `kubectl` commands:

### Imperative Commands
Imperative commands allow you to create, update, and delete live objects directly. They are easy to learn and run but do not provide an audit trail and are not flexible. They are ideal for development and test environments.

Example:
```sh
kubectl create pod my-pod --image=nginx
```

### Imperative Object Configuration
Imperative object configuration uses configuration files in YAML or JSON format. This method provides audit trails and templates for creating new objects but requires understanding the object schema.

Example:
```sh
kubectl create -f nginx.yaml
```

### Declarative Object Configuration
Declarative object configuration stores configuration data in files. Kubernetes automatically determines the necessary operations to match the current state to the desired state. This approach is ideal for production systems.

Example:
```sh
kubectl apply -f ./config-directory/
```

## Commonly Used kubectl Commands
Here are a few commonly used `kubectl` commands and their descriptions:

- `kubectl get`: Accesses a file, container, or any other resource.
- `kubectl delete`: Deletes a file or container.
- `kubectl autoscale`: Applies the auto-scaling process to the selected file or container.
- `kubectl apply`: Creates resources using YAML or JSON files.
- `kubectl scale`: Scales the number of replicas.

Example:
```sh
kubectl get pods
kubectl delete pod my-pod
kubectl autoscale deployment my-deployment --min=2 --max=5
kubectl apply -f my-config.yaml
kubectl scale --replicas=3 -f my-deployment.yaml
```

## Summary
In this section, you learned that `kubectl` is the Kubernetes command-line interface. The `kubectl` command structure is `kubectl command type name flags`. Imperative commands are the easiest to learn but have no audit trail and are not flexible. Imperative object configuration uses templates to ensure proper deployment and replication. Finally, declarative object configuration is automated, requires no user input, and is ideal for production systems.