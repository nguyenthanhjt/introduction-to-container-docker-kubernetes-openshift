# Push the Image to IBM Cloud Container Registry

1. The environment should have already logged you into the IBM Cloud account that has been automatically generated for you by the Skills Network Labs environment. The following command will give you information about the account you're targeting:

  ```bash
  ibmcloud target
  #output
  API endpoint:      https://cloud.ibm.com
  Region:            us-south
  User:              ServiceId-0e5e17ad-1ecf-463d-a231-d9e8a8dcc52b (sn-labs-nguyenthanhj)
  Account:           QuickLabs - IBM Skills Network (f672382e1b43496b83f7a82fd31a59e8)
  Resource group:    No resource group targeted, use 'ibmcloud target -g RESOURCE_GROUP'
  CF API endpoint:   
  Org:               
  Space
  ```

2. The environment also created an IBM Cloud Container Registry (ICR) namespace for you. Since Container Registry is multi-tenant, namespaces are used to divide the registry among several users. Use the following command to see the namespaces you have access to:

  ```bash
  ibmcloud cr namespaces
  #output
  Listing namespaces for account 'QuickLabs - IBM Skills Network' in registry 'us.icr.io'...
  
  Namespace
  sn-labs-nguyenthanhj
  sn-labsassets
  
  OK
  ```
  
  - You should see two namespaces listed starting with `sn-labs`:
    - The first one with your username is a namespace just for you. You have full read and write access to this namespace.
    - The second namespace, which is a shared namespace, provides you with only Read Access.

3. Ensure that you are targeting the region appropriate to your cloud account, for instance, `us-south` region where these namespaces reside as you saw in the output of the `ibmcloud target` command:

  ```bash
  ibmcloud cr region-set us-south
  #output
  The region is set to 'us-south', the registry is 'us.icr.io'.

  OK
  ```

4. Log your local Docker daemon into IBM Cloud Container Registry so that you can push to and pull from the registry:

  ```bash
  ibmcloud cr login
  #output
  Logging 'docker' in to 'us.icr.io'...
  Logged in to 'us.icr.io'.
  
  OK
  ```

5. Export your namespace as an environment variable so that it can be used in subsequent commands:

```bash
export MY_NAMESPACE=sn-labs-$USERNAME
#export MY_NAMESPACE=sn-labs-nguyenthanhj
```

6. Tag your image so that it can be pushed to IBM Cloud Container Registry:

```bash
docker tag myimage:v1 us.icr.io/$MY_NAMESPACE/hello-world:1
```

7. Push the newly tagged image to IBM Cloud Container Registry:

  ```bash
  docker push us.icr.io/$MY_NAMESPACE/hello-world:1
  #output
  The push refers to repository [us.icr.io/sn-labs-nguyenthanhj/hello-world]
  c012e769a0c1: Pushed 
  0531e0be6110: Pushed 
  d3ae084f09eb: Pushed 
  0804854a4553: Pushed 
  6bd4a62f5178: Pushed 
  9dfa40a0da3b: Pushed 
  1: digest: sha256:ed0180f723050d143d8647d2f75ad73937b7dd4f4564ff9d02ec1d4a1876060b size: 1576
  ```

> **Note:** If you have tried this lab earlier, there might be a possibility that the previous session is still persistent. In such a case, you will see a ‘Layer already Exists’ message instead of the ‘Pushed’ message in the above output. We recommend you proceed with the next steps of the lab.

8. Verify that the image was successfully pushed by listing images in Container Registry:

```bash
ibmcloud cr images
#output
Listing images...

Repository                                                               Tag                                                                           Digest         Namespace              Created          Size     Security status
us.icr.io/sn-labs-nguyenthanhj/hello-world                               1                                                                             ed0180f72305   sn-labs-nguyenthanhj   14 minutes ago   28 MB    -
```

Optionally, to only view images within a specific namespace:

```bash
ibmcloud cr images --restrict $MY_NAMESPACE
```

- You should see your image name in the output.

Congratulations! You have completed the second lab for the first module of this course.