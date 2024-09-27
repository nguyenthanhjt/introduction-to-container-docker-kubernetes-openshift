# Module 5 - CheatSheet: Container with Docker, Kubernetes, and OpenShift

## Docker CLI  

| **Command**                   | **Description**                                                                        |
|-------------------------------|----------------------------------------------------------------------------------------|
| `curl localhost`              | Pings the application.                                                                 |
| `docker build`                | Builds a Docker image from a specified Dockerfile.                                     |
| `docker build . -t`           | Builds the image and tags the image ID.                                                |
| `docker CLI`                  | Starts the Docker Command Line Interface (CLI).                                        |
| `docker container rm`         | Removes a container.                                                                   |
| `docker images`               | Displays a list of all available Docker images.                                        |
| `docker ps`                   | Lists the containers.                                                                  |
| `docker ps -a`                | Lists the containers that ran and exited successfully.                                 |
| `docker pull`                 | Pulls the latest image or repository from a registry.                                  |
| `docker push`                 | Pushes an image or a repository to a registry.                                         |
| `docker run`                  | Runs a command in a new container.                                                     |
| `docker run -p`               | Runs the container by publishing the ports.                                            |
| `docker stop`                 | Stops one or more running containers.                                                  |
| `docker stop $(docker ps -q)` | Stops all currently running containers.                                                |
| `docker tag`                  | Creates a tag for a target image that refers to a source image.                        |
| `docker –version`             | Displays the version of the Docker CLI.                                                |
| `exit`                        | Closes the terminal session.                                                           |
| `export MY_NAMESPACE`         | Exports a namespace as an environment variable.                                        |
| `git clone`                   | Clones the git repository that contains the artifacts needed.                          |
| `ibmcloud cr images`          | Lists images in the IBM Cloud Container Registry.                                      |
| `ibmcloud cr login`           | Logs your local Docker daemon into IBM Cloud Container Registry.                       |
| `ibmcloud cr namespaces`      | Displays the namespaces available to the current user in IBM Cloud Container Registry. |
| `ibmcloud cr region-set`      | Ensures that you are targeting the region appropriate to your cloud account.           |
| `ibmcloud target`             | Provides information about the account you're targeting.                               |
| `ibmcloud version`            | Displays the current version of the IBM Cloud CLI.                                     |
| `ls`                          | Lists the files and directories in the current directory.                              |

## Understanding Kubernetes Architecture  

| **Command**                   | **Description**                                                           |
|-------------------------------|---------------------------------------------------------------------------|
| `for …do`                     | Runs a sequence of commands multiple times as specified.                  |
| `kubectl apply`               | Applies a specified configuration to a resource.                          |
| `kubectl config get-clusters` | Displays all clusters defined in the kubeconfig.                          |
| `kubectl config get-contexts` | Displays the current context.                                             |
| `kubectl create`              | Creates a new Kubernetes resource based on a given specification.         |
| `kubectl delete`              | Deletes resources.                                                        |
| `kubectl describe`            | Provides details of a resource or group of resources.                     |
| `kubectl expose`              | Exposes a resource to the internet as a Kubernetes service.               |
| `kubectl get`                 | Displays resources.                                                       |
| `kubectl get pods`            | Lists all the Pods.                                                       |
| `kubectl get pods -o wide`    | Lists all the Pods with details.                                          |
| `kubectl get deployments`     | Displays all deployments created.                                         |
| `kubectl get services`        | Lists the services created.                                               |
| `kubectl proxy`               | Creates a proxy server between a localhost and the Kubernetes API server. |
| `kubectl run`                 | Creates and runs a particular image in a pod.                             |
| `kubectl version`             | Prints the client and server version information.                         |

## Managing Applications with Kubernetes  

| **Command**                       | **Description**                                       |
|-----------------------------------|-------------------------------------------------------|
| `kubectl autoscale deployment`    | Autoscales a Kubernetes Deployment.                   |
| `kubectl create configmap`        | Creates a ConfigMap resource.                         |
| `kubectl get deployments -o wide` | Lists deployments with details.                       |
| `kubectl get hpa`                 | Lists Horizontal Pod Autoscalers (hpa).               |
| `kubectl scale deployment`        | Scales a deployment.                                  |
| `kubectl set image deployment`    | Updates the current deployment.                       |
| `kubectl rollout`                 | Manages the rollout of a resource.                    |
| `kubectl rollout restart`         | Restarts the resource so that the containers restart. |
| `kubectl rollout undo`            | Rollbacks the resource.                               |

## OpenShift CLI  

| **Command**  | **Description**                  |
|--------------|----------------------------------|
| `oc get`     | Displays a resource.             |
| `oc project` | Switches to a different project. |
| `oc version` | Displays version information.    |
