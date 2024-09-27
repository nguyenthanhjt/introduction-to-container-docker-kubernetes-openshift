# Module 5 - Hands-on Lab: Build and Deploy a Simple Guestbook App

## Table of Contents

- [Objectives](#objectives)

## Objectives

In this lab, you will:

* Build and deploy a simple Guestbook application
* Autoscale the Guestbook application using Horizontal Pod Autoscaler
* Perform Rolling Updates and Rollbacks

[Reference: Full lab instruction - PDF file](resources/Hands-on-Lab_Build-and-Deploy-a-Simple-Guestbook-App.pdf)

## Main content

### Project Overview

**Guestbook application**

Guestbook is a simple web application that we will build and deploy with Docker and Kubernetes. 

The application consists of a web front end which will have a text input where you can enter any text and submit.

For all of these we will create Kubernetes Deployments and Pods. Then we will apply Horizontal Pod Scaling to the Guestbook application and finally work on Rolling Updates and Rollbacks.

---

### Verify the Environment and Command Line Tools

Follow the steps below to set up your environment and verify that the required command line tools are installed.

1. **Open a Terminal Window:**
   - If a terminal is not already open, you can open one by using the menu in the editor:
     - Navigate to **Terminal** > **New Terminal**.
     - **Note**: Please wait a few moments for the terminal prompt to appear.

2. **Change to Your Project Folder:**
   - If you are not already in the `/home/project` folder, change to it by using the following command:

     ```bash
     cd /home/project
     ```

     - **Note**: If you are already in the `/home/project` folder, you can skip this step.

3. **Clone the Git Repository:**
   - Clone the repository containing the artifacts needed for this lab by using the command below:

     ```bash
     [ ! -d 'guestbook' ] && git clone https://github.com/ibm-developer-skills-network/guestbook
     ```

     - This command checks if the directory `guestbook` does not already exist. If it doesn't, it clones the `guestbook` repository from GitHub. Otherwise, it skips cloning to avoid duplication.

4. **Change to the `guestbook` Directory:**
   - Once the repository is cloned, navigate to the `guestbook` directory using the command:

     ```bash
     cd guestbook
     ```

5. **List the Contents of the Directory:**
   - To see the artifacts provided in this lab, list the contents of the `guestbook` directory:

     ```bash
     ls
     ```

     The expected output should display the following files and directories:

     ```plaintext
     Dockerfile  README.md  kubernetes  node-server
     ```

   > **Explanation**:
   > - `Dockerfile`: Contains instructions to build the Docker image for the guestbook application.
   > - `README.md`: Provides documentation and instructions for the project.
   > - `kubernetes`: Directory containing Kubernetes configuration files for deploying the guestbook application.
   > - `node-server`: Contains the source code of the Node.js server used in the application.

6. **Verify Successful Setup:**
   - If all the files and directories mentioned above are present, your environment is set up correctly. You are now ready to proceed with the lab exercises.

---

### Build the Guestbook App

To begin, we will build and deploy the web front end for the guestbook app.

1. **Change to the `v1/guestbook` Directory:**

   ```bash
   >> cd v1/guestbook
   ```

2. **Understand the Dockerfile:**
   - The Dockerfile incorporates a more advanced strategy called multi-stage builds, so feel free to read more about that here.
   - Complete the Dockerfile with the necessary Docker commands to build and push your image. The path to this file is `guestbook/v1/guestbook/Dockerfile`.

   **Hint!**: to complete, refer [Dockerfile Reference](resources/Dockerfile-v1)
   - The `FROM` instruction initializes a new build stage and specifies the base image that subsequent instructions will build upon.
   - The `COPY` command enables us to copy files to our image.
   - The `ADD` command is used to copy files/directories into a Docker image.
   - The `RUN` instruction executes commands.
   - The `EXPOSE` instruction exposes a particular port with a specified protocol inside a Docker Container.
   - The `CMD` instruction provides a default for executing a container, or in other words, an executable that should run in your container.
   - Copy the code of the completed Dockerfile with you. You will be prompted to submit it in the text box in the Peer Assignment.

3. **Export Your Namespace:**
   - Export your namespace as an environment variable so that it can be used in subsequent commands:

     ```bash
     >> export MY_NAMESPACE=sn-labs-$USERNAME
     ```

4. **Build the Guestbook App:**
   - Build the guestbook app using the Docker build command:

     ```bash
     >> docker build . -t us.icr.io/$MY_NAMESPACE/guestbook:v1
     [+] Building 124.2s (21/21) FINISHED                                                   docker:default
     => ...                                                                                         0.0s
     => [stage-1 1/7] FROM docker.io/library/ubuntu:18.04@sha256:152dc042452c496007f07ca9127571cb9  26.2s
     => => resolve docker.io/library/ubuntu:18.04@sha256:152dc042452c496007f07ca9127571cb9c29697f42  0.0s
     => [builder 2/6] WORKDIR /app                                                                   0.0s
     => [builder 3/6] COPY main.go .                                                                 0.0s
     => [builder 4/6] RUN go mod init guestbook                                                      0.3s
     => [builder 5/6] RUN go mod tidy                                                                1.6s
     => [builder 6/6] RUN go build -o main main.go                                                  62.4s
     => [stage-1 2/7] COPY --from=builder /app/main /app/guestbook                                   0.2s
     => [stage-1 3/7] COPY public/index.html /app/public/index.html                                  0.0s
     => [stage-1 4/7] COPY public/script.js /app/public/script.js                                    0.0s
     => [stage-1 5/7] COPY public/style.css /app/public/style.css                                    0.0s
     => [stage-1 6/7] COPY public/jquery.min.js /app/public/jquery.min.js                            0.1s
     => [stage-1 7/7] WORKDIR /app                                                                   0.0s
     => exporting to image                                                                           0.8s
     => => exporting layers                                                                          0.8s
     => => writing image sha256:b2027c1c6fdfa13bc93a3b95a7baaf758a7da73151a5d939b9404c42b4f3cf86     0.0s
     => => naming to us.icr.io/name-space/guestbook:v1 
     ```

5. **Push the Image to IBM Cloud Container Registry:**

   ```bash
   >> docker push us.icr.io/$MY_NAMESPACE/guestbook:v1
    The push refers to repository [us.icr.io/name-space/guestbook]
    ... 
    548a79621a42: Pushed 
    v1: digest: sha256:0b55211113ce0d77260446a15d89dddd9d5f8d943b9a3bfb007aecf574bf410a size: 1776
   ```

   **Note:** If you have tried this lab earlier, there might be a possibility that the previous session is still persistent. In such a case, you will see a ‘Layer already exists’ message instead of the ‘Pushed’ message in the above output. We recommend you proceed with the next steps of the lab.

6. **Verify the Image Push:**
   - Verify that the image was pushed successfully:

     ```bash
     >> ibmcloud cr images
     Listing images...

     Repository                         Tag   Digest         Namespace    Created         Size     Security status
     us.icr.io/name-space/guestbook     v1    0b55211113ce   name-space   2 minutes ago   32 MB    -
     ```

7. **Take a Screenshot:**
   - Take a screenshot of the output of Step 6 and save it as a `.jpg` or `.png` with the filename `crimages.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

8. **View the Deployment Configuration:**
   - Open the `deployment.yml` file in the `v1/guestbook` directory and view the code for the deployment of the application:

     ```yaml
     apiVersion: apps/v1
     kind: Deployment
     metadata:
       name: guestbook
       labels:
         app: guestbook
     spec:
       replicas: 1
       selector:
         matchLabels:
           app: guestbook
       strategy:
         rollingUpdate:
           maxSurge: 25%
           maxUnavailable: 25%
         type: RollingUpdate
       template:
         metadata:
           labels:
             app: guestbook
         spec:
           containers:
           - image: us.icr.io/<your sn labs namespace>/guestbook:v1
             imagePullPolicy: Always
             name: guestbook
             ports:
             - containerPort: 3000
               name: http
             resources:
               limits:
                 cpu: 50m
               requests:
                 cpu: 20m
     ```

   - **Note:** Replace `<your sn labs namespace>` with your SN labs namespace. To check your SN labs namespace, run the command:

     ```bash
     >> ibmcloud cr namespaces
     Listing images...

     Repository                                  Tag   Digest         Namespace              Created         Size     Security status
     us.icr.io/sn-labs-nguyenthanhj/guestbook    v1    0b55211113ce   sn-labs-nguyenthanhj   2 minutes ago   32 MB    -
     ```

9. **Apply the Deployment:**
   - Apply the deployment using:

     ```bash
     >> kubectl apply -f deployment.yml
     deployment.apps/guestbook created
     >> kubectl get deployment
     NAME                    READY   UP-TO-DATE   AVAILABLE   AGE
     guestbook               1/1     1            1           8m33s
     openshift-web-console   2/2     2            2           80m
     ```

10. **Forward the Port for the Guestbook App:**
    - Open a new terminal and enter the below command to view your application:

      ```bash
      >> kubectl port-forward deployment.apps/guestbook 3000:3000
      ```

11. **Launch the Application:**
    - Click on the Skills Network button on the right; it will open the “Skills Network Toolbox”. 
    - Then click **Other**, then **Launch Application**. From there, enter port 3000 and launch.

12. **Verify the Running Application:**
    - Now you should be able to see your running application. Please copy the app URL provided below.

13. **Take a Screenshot of Your Deployed Application:**
    - Take a screenshot of your deployed application and save it as a `.jpg` or `.png` with the filename `app.png`.
    - You will be prompted to upload the screenshot in the Peer Assignment.

14. **Test the Guestbook Application:**
    - Try out the guestbook by entering a few entries. You should see them appear above the input box after you hit **Submit**.

---

### Autoscale the Guestbook Application Using Horizontal Pod Autoscaler

1. **Autoscale the Guestbook Deployment:** `kubectl autoscale deployment`
   - Use the following command to autoscale the Guestbook deployment:

     ```bash
     >> kubectl autoscale deployment guestbook --cpu-percent=50 --min=1 --max=10
     horizontalpodautoscaler.autoscaling/guestbook autoscaled
     ```

2. **Check the Status of the Horizontal Pod Autoscaler:**
   - You can check the current status of the newly-made `HorizontalPodAutoscaler` by running:

     ```bash
     >> kubectl get hpa guestbook
     NAME        REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
     guestbook   Deployment/guestbook   0%/5%     1         10        0          7s
     ```

   - The current replicas will be `0` as there is no load on the server.

3. **Take a Screenshot:**
   - Take a screenshot of your Horizontal Pod Autoscaler and save it as a `.jpg` or `.png` with the filename `hpa.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

4. **Generate Load on the Application:**
   - Open another new terminal and enter the below command to generate load on the app to observe the autoscaling (Please ensure your port-forward command is running. In case you have stopped your application, please run the port-forward command to re-run the application at port 3000.):

     ```bash
     >> kubectl run -i --tty load-generator --rm --image=busybox:1.36.0 --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- <your app URL>; done"
     ```

   - Please replace `<your app URL>` in the command with your app URL from step 11 of the previous task.
     - My example: `kubectl run -i --tty load-generator --rm --image=busybox:1.36.0 --restart=Never -- /bin/sh -c "while sleep 0.01; do wget -q -O- https://nguyenthanhj-3000.theiaopenshiftnext-1-labs-prod-theiaopenshift-4-tor01.proxy.cognitiveclass.ai/; done"`

5. **Handle Load Generator Errors:**
   - If you get a `Load generator already exists` error, suffix a number after `load-generator`, e.g., `load-generator-1` or `load-generator-2`.

6. **Monitor Load:**
   - You will keep getting an output similar to the below, indicating the increasing load on the app:

     ```
     --2024-09-25 10:34:23--  http://app-url/
     Resolving app-url... 192.168.0.1
     Connecting to app-url|192.168.0.1|:80... connected.
     Length: unspecified [text/html]
     Saving to: 'stdout'
     ```

7. **Observe the Replicas Increase:**
   - Run the below command in the **first terminal** to observe the replicas increase in accordance with the autoscaling:

     ```bash
     >> kubectl get hpa guestbook --watch
     NAME        REFERENCE              TARGETS   MINPODS   MAXPODS   REPLICAS   AGE
     guestbook   Deployment/guestbook   0%/5%     1         10        1          4m14s
     guestbook   Deployment/guestbook   0%/5%     1         10        1          5m19s
     guestbook   Deployment/guestbook   15%/5%    1         10        1          8m50s
     guestbook   Deployment/guestbook   15%/5%    1         10        3          9m5s
     guestbook   Deployment/guestbook   25%/5%    1         10        3          9m20s
     guestbook   Deployment/guestbook   25%/5%    1         10        5          9m36s
     guestbook   Deployment/guestbook   20%/5%    1         10        5          9m51s
     guestbook   Deployment/guestbook   0%/5%     1         10        5          10m
     guestbook   Deployment/guestbook   0%/5%     1         10        5          10m
     ```

   - Run the above command again after 5-10 minutes, and you will see an increase in the number of replicas, showing that your application has been autoscaled.

8. **Take a Screenshot of Autoscaler Details:**
   - Take a screenshot of your Autoscaler details and save it as a `.jpg` or `.png` with the filename `hpa2.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

9. **Observe the Horizontal Pod Autoscaler:**
   - Run the following command to observe the details of the horizontal pod autoscaler:

     ```bash
     kubectl get hpa guestbook
     ```

10. **Close Other Terminals:**
    - Please close the other terminals where load generator and port-forward commands are running.

---

### Perform Rolling Updates and Rollbacks on the Guestbook Application

1. **Update the `index.html` File:**
   - Update the title and header in `index.html` to any suitable title and header, for example:

     ```html
     <title><Your Name> Guestbook - v2</title>
     <h1>Guestbook - v2</h1>
     ```

2. **Build and Push Your Updated App Image:**
   - Run the following command to build and push your updated app image:

     ```bash
     >> docker build . -t us.icr.io/$MY_NAMESPACE/guestbook:v1 && docker push us.icr.io/$MY_NAMESPACE/guestbook:v1
     ```

   - **Screenshot:** Take a screenshot of your updated image and save it as a `.jpg` or `.png` with the filename `upguestbook.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

3. **Update the CPU Values in `deployment.yml`:**
   - Open the `deployment.yml` file and update the CPU values as below:

     ```yaml
     resources:
       limits:
         cpu: 5m
       requests:
         cpu: 2m
     ```

4. **Apply the Changes to the Deployment:**
   - Apply the changes made in the `deployment.yml` file:

     ```bash
     kubectl apply -f deployment.yml
     ```

   - **Screenshot:** Take a screenshot of the details of the output of this command and save it as a `.jpg` or `.png` with the filename `deployment.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

5. **Run the `port-forward` Command to Start the App:**
   - Open a new terminal and run the following command to start the app:

     ```bash
     kubectl port-forward deployment.apps/guestbook 3000:3000
     ```

6. **Launch Your Application:**
   - Launch your application on port 3000.
   - Click on the Skills Network button on the right, it will open the “Skills Network Toolbox”.
   - Then click `Other` > `Launch Application`. From there you should be able to enter the port and launch.

7. **Screenshot of the Updated Application:**
   - Take a screenshot of your updated application and save it as a `.jpg` or `.png` with the filename `up-app.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

8. **View Deployment Rollout History:**
   - Run the following command to see the history of deployment rollouts:

     ```bash
     kubectl rollout history deployment/guestbook
     ```

9. **View Details of a Specific Revision:**
   - Run the following command to see the details of Revision 2 of the deployment rollout:

     ```bash
     kubectl rollout history deployments guestbook --revision=2
     ```

   - **Screenshot:** Take a screenshot of the details of the correct Revision and save it as a `.jpg` or `.png` with the filename `rev.png`.
   - You will be prompted to upload the screenshot in the Peer Assignment.

10. **Get Replica Sets:**
    - Run the following command to get the replica sets and observe the deployment being used:

      ```bash
      kubectl get rs
      ```

11. **Undo the Deployment to Revision 1:**
    - Run the below command to undo the deployment and set it back to Revision 1:

      ```bash
      kubectl rollout undo deployment/guestbook --to-revision=1
      ```

12. **Get Replica Sets After Rollback:**
    - Run the below command to get the replica sets after the rollback has been done:

      ```bash
      kubectl get rs
      ```

    - **Screenshot:** Take a screenshot of the output of Step 12 and save it as a `.jpg` or `.png` with the filename `rs.png`.
    - You will be prompted to upload the screenshot in the Peer Assignment.

13. **Completion:**
    - Congratulations! You have completed the final project for this course.
    - Do not log out of the lab environment (you can close the browser though) or delete any of the artifacts created during the lab, as these will be needed for the next lab.

---

**Optional:** Deploy Guestbook App from the OpenShift Internal Registry.
