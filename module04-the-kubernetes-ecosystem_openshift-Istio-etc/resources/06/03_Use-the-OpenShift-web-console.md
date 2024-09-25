# 03 - Use the OpenShift web console

In addition to the CLI, OpenShift provides an intuitive web console. This is a useful and powerful feature because it enables you to deploy applications, view resources, monitor applications, and view logs, all from a visual interface.

Let's open up the console and have a look around.

1. To open the OpenShift web console, click on the Skills Network button on the right. It will open the Skills Network Toolbox. Then click on Cloud and then Open OpenShift console.

    It can take a few minutes to become available after opening the lab environment, so if you get an error, wait a minute and try again

2. The console should open to the project details for the project you have been assigned. Take a look at all the information OpenShift provides you in an intuitive, visual manner. Click through the Dashboard, Overview, and other tabs for this project to see additional information. You should see inventory on the resources that currently exist in this project, the YAML that defines this project, and much more.

3. Familiarize yourself with the items in the left navigation menu. You can see Operators, many different Kubernetes objects, and some OpenShift-specific objects, all of which we have talked about in this course. There won't yet be many instances of these objects, but they will fill up once we deploy our application.

4. Notice the word “Administrator” at the top left. This indicates that you are in the Administrator perspective. There is also a Developer perspective. Each perspective provides workflows specific to that persona. Switch to the Developer perspective to begin deploying an application. (If it says “Developer” already, don't change it.)

