# Module 4 - Section 07 - Practice Quiz: The Kubernetes Ecosystem: OpenShift, Istio, etc.

## Question 1: What is a valid Istio feature?

- [ ] Regular full-system health checks
- [x] Istio provides Service communication metrics for basic Service monitoring needs: latency, traffic, errors, and saturation.
- [ ] Integration with APIs and CLI tools
- [ ] Ease of repeatable installation and upgrade processes

> Istio is a platform-independent service mesh commonly used with Microservices that provides basic Service-monitoring metrics such as latency, traffic, errors, and saturation.
---

## Question 2: What are three functions of a service mesh?

- [x] Provides Service behavior metrics for optimization
- [ ] Reduces container size for faster Services
- [x] Encrypts traffic between Services
- [x] Manages traffic between Services

> A service mesh provides observability of Service behavior to troubleshoot and optimize applications. It also encrypts traffic between Services and manages traffic flow between Services.
---

## Question 3: What are three true statements about Red Hat OpenShift?

- [x] Red Hat OpenShift provides additional tooling around the complete lifecycle of applications, from Build to CI/CD, to monitoring and logs.
- [x] Red Hat OpenShift provides full-stack automated operations and self-service provisioning for developers to efficiently move ideas from development to production.
- [ ] Red Hat OpenShift uses `kubectl` CLI, the most commonly used CLI tool to perform end-to-end operations.
- [x] Red Hat OpenShift is a consistent application platform used to manage hybrid, multi-cloud, and edge deployments.

Red Hat OpenShift is an enterprise-ready Kubernetes container platform built for a hybrid cloud strategy.
---

## Question 4: What are three examples of Build input sources?

- [x] Input Secrets
- [ ] Pods
- [x] Inline Dockerfile definitions
- [x] External artifacts

> Build input sources include Input Secrets. Inline Dockerfile definitions, and External artifacts.
---

## Question 5: What do Operators provide?

- [ ] Support for connection, security, enforcement, and observability.
- [x] Integration with APIs and CLI tools
- [ ] Service communication metrics for basic Service monitoring needs: latency, traffic, errors, and saturation.
- [ ] Customizations and parameterization, but only at the time of installations

> Operators provide integration with APIs and CLI tools such as kubectl and oc commands.
