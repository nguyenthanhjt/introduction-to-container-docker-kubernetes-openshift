# Exercise 4: Create a Secret and update the deployment

Kubernetes Secrets lets you securely store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. Secrets are base64-encoded and can be used in your applications as environment variables or mounted as files.

1. Create a Secret

    Explore the content of the file `secret.yaml`:

    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: myapp-secret
    type: Opaque
    data:
      username: bXl1c2VybmFtZQ==
      password: bXlwYXNzd29yZA==
    ```

    **Explanation**:This YAML file defines a secret named `myapp-secret` with two key-value pairs: `username` and `password`. The values are base64-encoded strings.

2. Update the deployment to utilize the secret

    Add the following lines at the end of `deployment.yaml`:

    ```yaml
        env:
        - name: MYAPP_USERNAME
          valueFrom:
            secretKeyRef:
              name: myapp-secret
              key: username
        - name: MYAPP_PASSWORD
          valueFrom:
            secretKeyRef:
              name: myapp-secret
              key: password
    ```

    **Explanation**: 
    - `name`: - Defines the environment variables `MYAPP_USERNAME` and `MYAPP_PASSWORD`, respectively.
    - `valueFrom`: - Specifies that the value of the environment variable should be sourced from another location rather than being hardcoded.
    - `secretKeyRef`: - Indicates that the value of the environment variable should come from a Kubernetes secret.
    - `name: myapp-secret`: - Specifies the name of the secret `myapp-secret`, from which to retrieve the value.
    - `key`: - Specifies which key within the secret is to be used for the value of the `MYAPP_USERNAME` and `MYAPP_PASSWORD` environment variables, respectively.
    
    With these updates, the `myapp` application can now read these environment variables to get the required credentials, making it more secure and flexible.

3. Apply the secret and deployment

    Apply the secret using the following command:

    ```shell
    >> kubectl apply -f secret.yaml
    secret/myapp-secret created
    ```

    Apply the updated deployment using the following command:

    ```shell
    >> kubectl apply -f deployment.yaml
    deployment.apps/myapp-deployment configured
    ```

4. Verify the secret and deployment

    Retrieve the details of `myapp-secret`:

    ```shell
    >> kubectl get secret
    NAME           TYPE                             DATA   AGE
    dh             kubernetes.io/dockerconfigjson   1      14h
    icr            kubernetes.io/dockerconfigjson   1      14h
    myapp-secret   Opaque                           2      57s
    ```

   Show the status of the deployment:Run the following command to show the status of the deployment, including information about replicas and available replicas.

   ```shell
    >> kubectl get deployment
    NAME    READY   UP-TO-DATE   AVAILABLE   AGE
    myapp   1/1     1            1           13h
   ```
