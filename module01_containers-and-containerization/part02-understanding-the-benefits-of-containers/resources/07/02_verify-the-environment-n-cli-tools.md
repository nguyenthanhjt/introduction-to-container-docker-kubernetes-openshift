# Verify the Environment and Command Line Tools

1. **Open a terminal window**:
   - Use the menu in the editor: `Terminal > New Terminal`.
     - >**Note**: If the terminal is already open, please skip this step.

2. **Verify that Docker CLI is installed**:
   ```bash
   docker --version
   ```
   - You should see the following output, although the version may be different:
   
    ```bash
    theia@theiadocker-nguyenthanhj:/home/project$ docker --version
    Docker version 27.1.2, build d01f264
   ```

3. **Verify that IBM Cloud CLI is installed**:
   ```bash
   ibmcloud version
   ```
   - You should see the following output, although the version may be different:
   ```bash
    theia@theiadocker-nguyenthanhj:/home/project$ ibmcloud version
    ibmcloud version 2.20.0+f382323-2023-09-19T20:06:39+00:00
   ```

4. **Change to your project folder**:
   - **Note**: If you are already in the `/home/project` folder, please skip this step.
   ```bash
   cd /home/project
   ```

5. **Clone the git repository**:
   - Clone the repository containing the artifacts needed for this lab if it doesn't already exist:
   ```bash
    [ ! -d 'CC201' ] && git clone https://github.com/ibm-developer-skills-network/CC201.git
   
    #Output
    Cloning into 'CC201'...
    remote: Enumerating objects: 30, done.
    remote: Counting objects: 100% (7/7), done.
    remote: Compressing objects: 100% (7/7), done.
    remote: Total 30 (delta 4), reused 0 (delta 0), pack-reused 23 (from 1)
    Receiving objects: 100% (30/30), 8.67 KiB | 8.67 MiB/s, done.
    Resolving deltas: 100% (13/13), done.
   ```

> Refer repository [CC201](./CC201) or [Github](https://github.com/ibm-developer-skills-network/CC201.git) for the artifacts needed for this lab.

6. **Change to the directory for this lab**:
   - Run the following command to change the working directory:
   ```bash
   cd CC201/labs/1_ContainersAndDocker/
   ```

7. **List the contents of the directory**:
   - To see the artifacts for this lab, use:
   ```bash
   ls
   #Output
   theia@theiadocker-nguyenthanhj:/home/project/CC201/labs/1_ContainersAndDocker$ ls
   Dockerfile  app.js  package.json
   ```