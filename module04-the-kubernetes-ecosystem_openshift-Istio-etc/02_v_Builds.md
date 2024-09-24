# Module 04 - Section 2 - OpenShift:Builds

## Introduction

In this section, we will learn about the **Builds** process in OpenShift:

![x](resources/02/m04s02_agenda.png)

## What is a Build?

A **build** is the process of transforming inputs into a resultant object. For example, transforming source code to a container image.

A build requires a **build configuration file** or **build config**, which defines the build strategy and input sources.

Commonly used build strategies are:

- **Source-to-image, or S2I**
- **Docker**
- **Custom**

## Build Input Sources

A **build input source** provides content for builds. The following build inputs listed in order of precedence:

- Inline Dockerfile definitions
- Content extracted from existing images
- Git repositories
- Binary or local inputs
- Input secrets
- External artifacts

**Note that**:
- Multiple inputs can be combined into a single build
- An inline Dockerfile takes precedence and overwrites any external Dockerfile.

## Image Streams

An **image stream** is an abstraction for referencing container images within OpenShift. 

- Continuously creates and updates container images.
- Does not contain actual image data but is merely a pointer
- Can store source images in different registries or other ImageStreams
- Can trigger builds and deployments when a new image is available

An image stream continuously creates and updates container images but does not contain actual image data. Instead, it points to images stored in internal and external registries or to other image streams.

![x](resources/02/01_ImageStream-01.png)

A single image stream can consist of many different tags, such as `latest`, `dev`, and `test`, and each tag points to a certain image in a registry.

To deploy an application, you'll refer to the image stream tag rather than hardcode the registry URL and tag. If the source image location changes, you'll update the image stream definition rather than individually updating all the deployments.

An image stream also provides a trigger capability that automatically invokes builds and deployments when a new version of an image is available. Rather than running builds manually, automate the process using triggers.

## Build Triggers

Rather than running builds manually, automate the process using triggers:

- Webhook triggers
  - Sends a request to an OpenShift Container Platform API end-point.
  - Supports generic webhooks and the more often used **GitHub webhooks**.
- Image change trigger
  - - Useful for keeping base images up-to-date
  - New version of an image is available.
- Configuration change trigger
  - Build when create a new BuildConfig resource.

**Webhook triggers**: send a request to an API endpoint, and they also support generic webhooks and the more often used GitHub webhooks, which send the trigger request to the API endpoint on any new commit or a pull request or other circumstances.

Next is the **image change trigger**, which triggers builds when a new version of an image is available. For instance, if you build your application using a Node.js base image, that image is updated when security fixes are released and other updates occur.

Finally, a **configuration change trigger** causes a new build to run when you create a new build config resource.

## Build Config Process

Let's look at a sample configuration file for **BuildConfig**:

```yaml
kind: BuildConfig
apiVersion: build.openshift.io/v1
metadata:
  name: ruby-sample-build
spec:
  runPolicy: "Serial"
  triggers:
    - type: "Github"
      github:
        secret: "secret101"
    - type: "Generic"
      generic:
        secret: "secret101"
    - type: "ImageChange"
source:
  git:
    uri: "https://github.com/openshift/ruby-hello-world"
  strategy:
    sourceStrategy:
      from:
        kind: "ImageStreamTag"
        name: "ruby-20-centos7:latest"
  output:
    to:
      kind: "ImageStreamTag"
      name: "origin-ruby-sample:latest"
  postCommit:
    script: "bundle exec rake test"
```

1. New BuildConfig named `ruby-sample-build`: the specification creates a new build config named `ruby-sample-build`.
   - `kind`: `BuildConfig`
2. `runPolicy` shows build created sequentially: the field controls how builds created from a build configuration need to run values include the default, serial, or sequentially and simultaneously.
3. `triggers` section: you can also specify a list of triggers that creates a new build.
4. `source` section: defines the input build's source 
5. `sourceType`: determines the primary input, like a git repository, an inline Dockerfile, or binary payloads.
6. `strategy` section: shows which strategy was used to execute the build, such as source, docker, or custom strategy.
   -  This example uses source `strategy` is S2I (uses ruby-20-centos7)
7. `output` section: after the container image is built, the container image is pushed into the repository as described in this section
8. `postCommit` section: defines an optional build hook.

### Build 

## Build Strategy

### Source-to-Image (S2I) strategy

Another build strategy offered by OpenShift is called **Source-to-Image, or S2I**. 

- Is tool for building reproducible container images
- Injects application source into a container image to produce a ready-to-run image.
- Eliminates using a Dockerfile
- Go from Source to Image in one step
- OpenShift includes predefined builder images

The S2I tool builds reproducible container images and injects a container image with the app source to produce a ready-to-run image.

The new image is built by incorporating a builder image plus the source that avoids using a Dockerfile, which enables going from source-to-image in a single step.

OpenShift comes with a variety of available builder images, saving you time and development effort.

![x](resources/02/02_S2I_Source-to-Image_build-strategy.png)

### Docker build strategy

**Docker Registry:**
- Requires a repository that contains a Dockerfile and the necessary artifacts
- Invokes the `docker build` command and creates an image
- Pushes image to the internal registry (OpenShift registry)

Using a **Docker build strategy** requires a repository that contains a Dockerfile and the necessary artifacts. When you kick off a build, OpenShift takes the input, invokes the Docker build command, and creates an image, which is then pushed to the internal OpenShift registry.

**Docker build strategy methods:**
- Replace Dockerfile FROM image
- Use Dockerfile path
- Use Docker environment variables
- Add Docker build arguments

### Custom Build Strategy

In a **custom build strategy**, you must define and create your own builder image required for the build process.

- Custom builder images are regular Docker images that contain the logic needed to transform the inputs into the expected outputs.
- Custom build strategy creates additional objects like JAR files and CI/CD deployment that performs unit or integration tests.
  - Both Docker and S2I strategies result in runnable images, but the custom build strategy creates additional objects like JAR files and CI/CD deployment that performs unit or integration tests.
- Custom builds are only available to cluster administrators
  - Custom builds are only available to cluster administrators because they run with high privileges.

## Build Automation

Cloud-native development requires greater automation throughout the container lifecycle. 
- CI/CD(Continuous Integration/Continuous Delivery) deployment pipeline provides automation
  - For example: OpenShift CI/CD process
    - Merges new code changes to the repository, then builds, tests, approves, and deploys a new version to different environments.
    ![x](resources/02/03_OpenShift-CICD-process.png)

## Conclusion - Recap

- A build is a process that transforms inputs into an object
- Build inputs include inline Dockerfile definitions, content extracted from existing images, git repositories, binary (Local) inputs, input secrets, and external artifacts
- An image stream is an abstraction for referencing container images within OpenShift
- Can automate builds using Webhook, Image Change, or Configuration Change triggers
- Commonly used Build strategies include Source-toImage(S2I), Docker and Custom build strategies
- Builds require a configurations file (BuildConfig), which defines the build strategy and input sources
