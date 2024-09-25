# 01 - Verify the environment and command line tools

1. If a terminal is not already open, open a terminal window by using the menu in the editor: `Terminal > New Terminal`.
2. Verify that `oc` CLI is installed.

    ```shell
    >> oc version
    Client Version: 4.13.7
    Kustomize Version: v4.5.7
    Kubernetes Version: v1.26.15+4818370
   ```
   You should see output similar to this, although the versions may be different.

3. Change to your project folder.
    `cd /home/project`
4. Clone the git repository that contains the artifacts needed for this lab, if it doesn’t already exist.
   `[ ! -d 'CC201' ] && git clone https://github.com/ibm-developer-skills-network/CC201.git`
