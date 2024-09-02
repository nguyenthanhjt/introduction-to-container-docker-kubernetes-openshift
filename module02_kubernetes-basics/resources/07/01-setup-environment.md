# Setting Up the Environment

Open a terminal window using the menu: **Terminal > New Terminal**.

> **Note:** If the terminal is already opened, please skip this step.

### Step 1: Verify kubectl Version

Before proceeding, ensure that you have `kubectl` installed and properly configured. To check the version of `kubectl`, run the following command:

```bash
kubectl version

#output
theia@theiadocker-nguyenthanhj:/home/project$ kubectl version
WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.  Use --output=yaml|json to get the full version.
Client Version: version.Info{Major:"1", Minor:"27", GitVersion:"v1.27.6", GitCommit:"741c8db18a52787d734cbe4795f0b4ad860906d6", GitTreeState:"clean", BuildDate:"2023-09-13T09:21:34Z", GoVersion:"go1.20.8", Compiler:"gc", Platform:"linux/amd64"}
Kustomize Version: v5.0.1
Server Version: version.Info{Major:"1", Minor:"28", GitVersion:"v1.28.13+IKS", GitCommit:"6a8ad23c9d04d8bcca724fd730dd0c28287c8b38", GitTreeState:"clean", BuildDate:"2024-08-15T14:53:42Z", GoVersion:"go1.22.5", Compiler:"gc", Platform:"linux/amd64"}
```