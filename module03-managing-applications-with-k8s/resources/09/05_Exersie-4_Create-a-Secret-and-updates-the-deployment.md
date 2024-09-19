# Exercise 4: Create a Secret and update the deployment

## Raw Content
Kubernetes Secrets lets you securely store and manage sensitive information, such as passwords, OAuth tokens, and SSH keys. Secrets are base64-encoded and can be used in your applications as environment variables or mounted as files.

Step 1: Create a Secret
Explore the content of the file secret.yaml:

1
2
3
4
5
6
7
8
apiVersion: v1
kind: Secret
metadata:
  name: myapp-secret
type: Opaque
data:
  username: bXl1c2VybmFtZQ==
  password: bXlwYXNzd29yZA==
Copied!
Explanation
This YAML file defines a secret named mysecret with two key-value pairs: username and password. The values are base64-encoded strings.

Step 2: Update the deployment to utilize the secret
Add the following lines at the end of deployment.yaml:

1
2
3
4
5
6
7
8
9
10
11
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
Copied!
Explanation
name: - Defines the environment variables: 'MYAPP_USERNAME' and 'MYAPP_PASSWORD', respectively.
valueFrom: - Specifies that the value of the environment variable should be sourced from another location rather than being hardcoded.
secretKeyRef: - Indicates that the value of the environment variable should come from a Kubernetes secret.
name: myapp-secret - Specifies the name of the secret 'myapp-secret', from which to retrieve the value.
key: - Specifies which key within the secret is to be used for the value of the 'MYAPP_USERNAME' and 'MYAPP_PASSWORD' environment variables, respectively.
With these updates, the myapp application can now read these environment variables to get the required credentials, making it more secure and flexible.

Step 3: Apply the secret and deployment
Apply the secret using the following command:
1
kubectl apply -f secret.yaml
Copied!
apply-secret-N2.png

Apply the updated deployment using the following command:
1
kubectl apply -f deployment.yaml
Copied!
secret-dply-apply-N2.png

Step 4: Verify the secret and deployment
You will now verify if the secret and the deployment using it have been applied.

Run the following command to retrieve the details of myapp-secret showing its name, type, and creation timestamp:
1
kubectl get secret
Copied!
get-secret.png

Run the following command to show the status of the deployment, including information about replicas and available replicas.
1
kubectl get deployment
Copied!
Ex3-secrets-get-deplymn.png

Previous
