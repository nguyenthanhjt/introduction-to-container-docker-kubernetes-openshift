# Create a Pod with an imperative command

This Pod will run the `hello-world` image you built and pushed to IBM Cloud Container Registry in the last lab. 

We can create a Pod imperatively or declaratively. Let’s do it imperatively first.

## Export your namespace as an environment variable

```sh
$ export MY_NAMESPACE=sn-labs-$USERNAME
```

## Navigate to the directory for this lab

Click the Explorer icon (it looks like a sheet of paper) on the left side of the window, and then navigate to the directory for this lab: `CC201 > labs > 2_IntroKubernetes`. Click on `Dockerfile`. This is the file that will be used to build our image.

## Build and push the image again

```sh
$ docker build -t us.icr.io/$MY_NAMESPACE/hello-world:1 . && docker push us.icr.io/$MY_NAMESPACE/hello-world:1
```

## Run the hello-world image as a container in Kubernetes

```sh
kubectl run hello-world --image us.icr.io/$MY_NAMESPACE/hello-world:1 --overrides='{"spec":{"template":{"spec":{"imagePullSecrets":[{"name":"icr"}]}}}}'
```

The `--overrides` option here enables us to specify the needed credentials to pull this image from IBM Cloud Container Registry. Note that this is an imperative command, as we told Kubernetes explicitly what to do: run `hello-world`.

## List the Pods in your namespace

```sh
kubectl get pods
```

Great, the previous command indeed created a Pod for us. You can see an auto-generated name was given to this Pod.

## Get more details about the resource

```sh
kubectl get pods -o wide
```

## Describe the Pod to get more details about it

```sh
kubectl describe pod hello-world
```

Note: The output shows the pod parameters like Namespace, Pod Name, IP address, the time when the pod started running and also the container parameters like container ID, image name & ID, running status and the memory/CPU limits.

## Delete the Pod

```sh
kubectl delete pod hello-world
```

This command takes a while to execute the deletion of the pod. Please wait till the terminal prompt appears again.

## Verify that no Pods exist

```sh
kubectl get pods
```