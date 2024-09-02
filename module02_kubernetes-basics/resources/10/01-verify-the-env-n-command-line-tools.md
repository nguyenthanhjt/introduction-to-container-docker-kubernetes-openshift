# Verify the environment and command line tools

## Verify that kubectl CLI is installed

```sh
kubectl version
```

### Change to project folder

```sh
cd /home/project
```

### Clone the git repository that contains the artifacts needed for this lab, if it doesn’t already exist

```sh
[ ! -d 'CC201' ] && git clone https://github.com/ibm-developer-skills-network/CC201.git
```

### Change to the directory for this lab

```sh
cd CC201/labs/2_IntroKubernetes/
```

### List the contents of this directory to see the artifacts for this lab

```sh
ls
```
```