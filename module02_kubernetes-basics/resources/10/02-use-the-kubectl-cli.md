# Use the kubectl CLI

Recall that Kubernetes namespaces enable you to virtualize a cluster. You already have access to one namespace in a Kubernetes cluster, and `kubectl` is already set to target that cluster and namespace.

Let’s look at some basic `kubectl` commands.

## Get cluster information

`kubectl` requires configuration so that it targets the appropriate cluster. Get cluster information with the following command:

```sh
$ kubectl config get-clusters
#output
NAME
labs-prod-kubernetes-sandbox/c8ana0sw0ljj8gkugn50
```

## View your current context

A `kubectl` context is a group of access parameters, including a cluster, a user, and a namespace. View your current context with the following command:

```sh
$ kubectl config get-contexts
#output
CURRENT   NAME                   CLUSTER                                             AUTHINFO       NAMESPACE
*         nguyenthanhj-context   labs-prod-kubernetes-sandbox/c8ana0sw0ljj8gkugn50   nguyenthanhj   sn-labs-nguyenthanhj
```

## List all the Pods in your namespace

If this is a new session for you, you will not see any Pods.

```sh
$ kubectl get pods
#output
NAME                             READY   STATUS    RESTARTS   AGE
my-daemonset-7dfqt               1/1     Running   0          42m
my-daemonset-8pwmf               1/1     Running   0          42m
my-daemonset-c9dkg               1/1     Running   0          42m
my-daemonset-cz8s7               1/1     Running   0          42m
my-daemonset-hqqpt               1/1     Running   0          42m
my-daemonset-r4n5v               1/1     Running   0          42m
my-deployment1-68bcd84fd-ljjql   1/1     Running   0          64m
my-test-pod                      1/1     Running   0          52m
```