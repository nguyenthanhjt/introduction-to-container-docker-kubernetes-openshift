## Question 1: What are the two features of an ImageStream?

- [ ] Provides content for Builds
- [] Stores images
- [x] Provides a trigger capability when a new version of an image is available
- [x] Creates and updates container images

> An ImageStream points to images stored in different registries. 
> ImageStreams include a trigger capability that invokes Builds and deployments when a new version of an image is available.
---

## Question 2: What are the three Build triggers used in OpenShift?

- [ ] ImageStream
- [x] Image change
- [x] Webhook
- [x] Configuration change

> The image change trigger automates a Build when a new version of an image is available. It is useful for keeping base images up to date.
> The configuration change trigger automates a build when you create a new BuildConfig.
> he GitHub webhook trigger allows you to trigger a new Build by sending requests to an OpenShift Container Platform API endpoint. Additionally, generic webhooks are also supported.

---

## Question 3: Which three statements are true?

- [ ] The `oc` and `kubectl` binary offer different capabilities.
- [x] The `oc` lets you manage projects during restricted bandwidth or availability of the web console.
- [x] The `oc` lets you script OpenShift operations.
- [x] The `oc` lets you work directly with project source code using command script.

> The oc lets users work directly with source code, script OpenShift operations, and manage projects during restricted bandwidth and availability of the web console.
> The oc lets users work directly with source code, script OpenShift operations, and manage projects during restricted bandwidth and availability of the web console.
> The oc lets users work directly with source code, script OpenShift operations, and manage projects during restricted bandwidth and availability of the web console.  

---

## Question 4: What packages, deploys, and manages native apps in Kubernetes?

- [ ] A Container
- [ ] A Deployment
- [ ] A ReplicaSet
- [x] An Operator

> Operators package, deploy, and manage (repeatable installation and upgrades) native apps in Kubernetes, automate other tasks, and ensure all relevant components are included.

---

## Question 5: What strategy was Red Hat OpenShift designed for?

- [ ] A private cloud strategy
- [ ] A public cloud strategy
- [ ] An on-premises strategy
- [x] A hybrid-cloud strategy

> Red Hat OpenShift is an enterprise-ready Kubernetes container platform built for a hybrid cloud strategy.
---

## Question 6: What provides traffic management to control the flow of traffic between Services?

- [ ] An autoscaler
- [ ] A container
- [ ] Kubectl
- [x] A service mesh

> A service mesh provides security to encrypt traffic between services.


---

## Question 7: What three processes are performed by the Operator Framework tool set?

- [x] Testing
- [x] Coding
- [] Building
- [x] Package

> The Operate Framework is an open source tool set that covers coding, testing, delivery, and Operator updates.
> The Package is an open source tool set that covers coding, testing, delivery, and Operator updates.
---

## Question 8: What are the three features of Custom Resource Definitions (CRDs)?

- [x] Make Kubernetes API more modular
- [x] Extend Kubernetes functionality
- [ ] Control the install, upgrade, and role-based access control (RBAC) of Operators in a cluster
- [x] Can be engaged with `kubectl`

> CRDs make the Kubernetes API more modular and flexible. They extend Kubernetes functionality and can be engaged with `kubectl` commands.

---

## Question 9: In Istio, what handles communication between services?

- [ ] The proxy server
- [ ] The control plane
- [ ] Environmental changes
- [x] The data plane

> The main components in Istio are the control plane and the data plane. The control plane takes the desired configuration and dynamically programs and updates the proxy servers as the environment changes. The data plane handles communication between services.
---

## Question 10: What are three added features that OpenShift provides?

- [ ] More flexible
- [x] Better management through image streams
- [x] Good networking solutions out of the box
- [x] Better user experience

> OpenShift image streams provide better management while Kubernetes container image management is not easy.
> OpenShift provides good networking solutions out of the box.
> OpenShift provides a better user experience than Kubernetes.

  

