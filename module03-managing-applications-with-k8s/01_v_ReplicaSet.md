# Module 3 - Section 01: ReplicaSet

## Introduction

In this section, we will learn about ReplicaSets in Kubernetes. A ReplicaSet ensures that a specified number of pod replicas are running at any given time.

## Key Concepts

### Definition

A ReplicaSet is a Kubernetes resource that ensures a specified number of pod replicas are running at any given time. It replaces the older ReplicationController and provides additional features.

### How it Works

- A ReplicaSet maintains the desired number of pod replicas by creating or deleting pods as needed.
- It uses pod labels to identify which pods it should manage.
- The ReplicaSet controller continuously monitors the actual state of the pods and compares it to the desired state, making adjustments as necessary.

### Benefits

- **High Availability**: Provides redundancy by ensuring multiple pod replicas are running.
- **Scalability**: Automatically adds or removes pods to match the desired state.
- **Self-Healing**: Replaces failed pods to maintain the desired number of replicas.

## Steps to Create and Manage ReplicaSet

### Creating a ReplicaSet

To create a ReplicaSet, you can use a YAML file with the kind attribute set to ReplicaSet.

Example YAML:
```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-container
        image: my-image

