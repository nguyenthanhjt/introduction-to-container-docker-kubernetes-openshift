# Module 3 - Section 11 - Practice Quiz: Managing Applications with K8s

## 1. **Question 1**: What rollout command do you use to implement a rollback to a previous version in Kubernetes?

- [ ] A ‘status’ command
- [ ] A ‘delete’ command
- [ ] A ‘history’ command
- [x] An ‘undo’ command

> Correct! Use the ‘rollout undo’ command to roll back the update.
---

## 2. **Question 2**: Which three statements about ConfigMaps are correct?

- [x] Data stored in a ConfigMap must not exceed one megabyte.
- [x] A ConfigMap provides configuration data to pods and deployments.
- [x] A ConfigMap object stores non-confidential data in key-value pairs.
- [ ] A ConfigMap is meant for sensitive information (encrypted).

> Correct! Data stored in a ConfigMap must not exceed one megabyte, ConfigMaps provide configuration data to pods and deployments, and a ConfigMap object stores non-confidential data in key-value pairs.
---

## 3. **Question 3**: What Kubernetes object adds or deletes pods for scaling and redundancy?

- [ ] A Secret
- [ ] A DaemonSet
- [ ] A ConfigMap
- [x] A ReplicaSet

> Correct! A ReplicaSet ensures the right number of pods are always up and running.
---

## 4. **Question 4**: What are the autoscaling types in Kubernetes?

- [ ] Horizontal, Vertical, Node
- [ ] Horizontal and Vertical
- [x] Horizontal, Vertical, and Cluster
- [ ] Deployment, Node, and Pod

> The three autoscaler types in Kubernetes are Horizontal Pod Autoscaler (HPA), Vertical Pod Autoscaler (VPA), and Cluster Autoscaler (CA).
---

## 5. **Question 5**: What is Service binding?

- [x] The process needed to consume external Service or backing Services, including REST APIs, databases, and event buses in your applications
- [ ] The process of attaching key-value pairs to objects
- [ ] A Kubernetes capability that performs container auto-placement based on resource requirements and conditions without sacrificing high availability
- [ ] The process of storing non-confidential data

> Service binding is the process needed to consume external Service or backing Services, including REST APIs, databases, and event buses in our applications. 