# 01 - Verify the environment and command line tools

1. If a terminal is not already open, open a terminal window by using the menu in the editor: `Terminal > New Terminal`.
2. Change to your project folder.
    `cd /home/project`
3. Clone the git repository that contains the artifacts needed for this lab, if it doesn’t already exist.
   `[ ! -d 'CC201' ] && git clone https://github.com/ibm-developer-skills-network/CC201.git`
4. Change to the directory for this lab.
   `cd CC201/labs/3_K8sScaleAndUpdate/`
5. List the contents of this directory to see the artifacts for this lab.
   ```shell
   >> ls
   app.js deployment-configmap-env-var.yaml deployment.yaml Dockerfile package.json
   ```
