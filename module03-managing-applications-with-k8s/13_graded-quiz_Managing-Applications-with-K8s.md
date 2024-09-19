# Module 3 - Section 13 - Graded Quiz: Managing Applications with K8s

## 1. **Question 1**: What Kubernetes object adds or deletes pods for scaling and redundancy?

- [ ] A DaemonSet
- [ ] A Secret
- [ ] A Config Map
- [x] A ReplicaSet

> A ReplicaSet ensures the right number of pods are always up and running. 
---

## 2. **Question 2**: What are the three required steps to bind the IBM Cloud Service to your Cluster?

- [ ] Erase the credential configuration file after credential setup.
- [x] Bind the Service to your Cluster to create credentials.
- [x] Provision an instance of the Service.
- [x] Configure your app to access the credentials.

> The required steps to bind an IBM Cloud Service to your Cluster are: Provision an instance of the service, Bind the Service to your Cluster to create credentials, Store the credentials, and Configure your app to access the credentials.
---

## 3. **Question 3**: Which rolling update types ensure 100% app availability?

- [ ] All-at-once updates and rollbacks ensure 100% app availability.
- [ ] No rolling update types can ensure 100% app availability.
- [x] One-at-a-time updates and rollbacks ensure 100% app availability.
- [ ] Both all-at-once and one-at-a-time updates and rollbacks ensure 100% app availability.

> One-at-a-time updates and rollbacks ensure 100% app availability.

---

## 4. **Question 4**: What are three ways to create a ConfigMap?

- [x] By using string literals
- [x] By providing a ConfigMap YAML descriptor file
- [x] By using an existing property or ‘key’ = ‘value’ file
- [ ] By adding another environment to the deployment descriptor

> A ConfigMap is created using string literals, using an existing property or ‘key’ = ‘value’ file, or by providing a ConfigMap YAML descriptor file.
---

## 5. **Question 5**: What does a ConfigMap do?

- [x] Mounts a file using the volumes plugin
- [ ] Verifies that a Secret was created
- [ ] Provides sensitive information to your application

> Can use a ConfigMap to provide variables for your application. 
---

## 6. **Question 6**: Which Kubernetes autoscaler type scales the Cluster?

- [ ] Vertical Pod Autoscaler (VPA)
- [ ] Cluster Autoscaler (CA)
- [ ] You cannot autoscale a Kubernetes Cluster.
- [ ] Horizontal Pod Autoscaler (HPA)

> The Cluster Autoscaler (CA) scales the Cluster in Kubernetes.
---

## 7. **Question 7**: How do you create a ReplicaSet from scratch?

- [ ] Apply a JSON file that includes the number of desired replicas.
- [ ] Use the ‘get pods’ command.
- [x] Apply a YAML file with the ‘kind’ attribute set to ‘ReplicaSet’.
- [ ] Use the ‘scale’ command to scale the deployment.

> To create a ReplicaSet from scratch, apply a YAML file with the ‘kind’ attribute set to ‘ReplicaSet’.
---

## 8. **Question 8**: What does Service binding do?

- [ ] Provides variables for your application
- [x] Manages configuration and credentials for back-end Services while protecting sensitive data
- [ ] Calls the service without using binding credentials.
- [ ] Makes Service credentials hidden.

> Service binding manages configuration and credentials for back-end Services while protecting sensitive data.
---

## 9. **Question 9**: How do you prepare your application to enable rolling updates?

- [ ] Set the maxSurge to 50%.
- [ ] Use autoscaling.
- [x] Add liveness and readiness probes to deployments.
- [ ] Set the maxSurge to 100%.
> Add liveness and readiness probes to deployments to enable rolling updates for an application.
---

## 10. **Question 10**: What are three ways to create a Secret?

- [ ] By providing a ConfigMap YAML descriptor file
- [x] By using environment variables
- [x] By using a string literal
- [x] By using volume mounts
> You create a Secret by using a string literal, by using environment variables, or by using volume mounts.