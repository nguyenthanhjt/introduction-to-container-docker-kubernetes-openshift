# Module 1 - Part 2 - Section 14:  Creating an IBM Cloud Container Registry Namespace

## Objectives

After completing this lab, you will be able to:
- Describe the IBM Cloud Container Registry service
- Create a Container Registry namespace

## Lab Overview

In this lab, you will create an IBM Cloud Container Registry namespace, which you will use in subsequent labs.

## Pre-requisites

You will need an IBM Cloud account to do this lab. If you have not created one already, click on this link and follow the instructions to create an IBM Cloud account.

## About IBM Cloud

The IBM Cloud platform is deployed across data centers around the world. It combines platform as a service (PaaS) with infrastructure as a service (IaaS) to provide an integrated experience. The platform scales and supports both large enterprise businesses and small development teams and organizations.

The platform is built to support your needs, whether it’s working only in the public cloud or taking advantage of a multicloud deployment model. IBM Cloud offers a variety of services, including Compute, Network, Storage, Management, Security, Databases, Analytics, AI, and Cloud Paks.

## About IBM Cloud Container Registry Namespaces

IBM Cloud® Container Registry provides a multi-tenant, encrypted private image registry that you can use to store and access your container images in a highly available and scalable architecture. The namespace is a slice of the registry to which you can push your images. The namespace will be a part of the image name when you tag and push an image. For example, `us.icr.io/<my_namespace>/<my_repo>:<my_tag>`.

## Create a Container Registry Namespace

1. Go to the [IBM Cloud catalog page](https://cloud.ibm.com/catalog).

2. In the **Catalog** search box, type `Container Registry`.

3. Click on **Container Registry** in the search results.

   - You can now read about the Container Registry service and visit links for API documentation and docs about how to use the service.

4. At the top right, click **Get started**.

   - Ensure that the location is set to Dallas.

5. On the left-hand side panel, click the **Namespaces** tab.

6. On the right side of the **Namespaces** panel, click **Create**.

   - A **Create namespace** panel opens.

7. In the **Resource group** field, select the name of the resource group you would like this namespace to reside in. For this lab, you can simply leave the selection as `Default`.

8. In the **Name** field, type a unique name for the namespace. The name must be unique across all users of the Container Registry service in this region.

9. Click **Create** at the bottom of the panel to create the namespace.

You now have a namespace (as shown below) to which you can push images.

---

**Congratulations!** You have completed the first lab for the first module of this course.
