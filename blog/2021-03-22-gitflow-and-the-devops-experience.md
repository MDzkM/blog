---
id: gitflow-and-the-devops-experience
title: Gitflow and the DevOps Experience
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, django, flutter, react, mobile]
description: Optimizing workflow through cleaner codebase and automated jobs.
---

Optimizing workflow through cleaner codebase and automated jobs.

<!--truncate-->

This one will be short as I would like to give an overview of the workflow used in my current project. Gitflow is a workflow that streamlines continuous software development and implementing automated jobs (hence DevOps). Other than that, it helps to keep the codebase clean and organized. One of the basis of gitflow implemented in my project is using tags to categorize what part of the development does a commit belong to. For example a failing, initial commit of a new feature will be tagged as `[RED]`, meanwhile a working implementation of said feature will be tagged `[GREEN]`. There are two more tags which are `[REFACTOR]` that indicates a segment of the code has been optimized and rewritten once it has passed the test and `[CHORES]` for any non-functionality features added in the commit.

Other than that, we also use the common practices of gitflow: using stage defining branches. The three main branches are `master/main` that contains the production ready code, `staging` an almost final code that is still going to be live-tested on a secondary platform, and `dev` where the newest feature implementations are merged and tested internally. Two extra branches are provided to mitigate problems in productions which are `hotfix` and `coldfix` with the former being the branch where a patch is directly applied to the production build and the latter is a branch where a version rollback is needed.

For the development team, we can use task specific name for our branches. In this course, being a task related slug as an indication of which task we are working on. Below is an example of a commit I did in a task branch,

![Commit log](https://i.ibb.co/yQ0VS9G/Gitflow-Commit-Log.png)

Now we can move on to where the DevOps part takes place. So in this project, the existing CI/CD has been deprecated and obsolete which means deployment needs manual labor. That in and of itself is time and resource consuming already, adding the fact that the server where we need to deploy it to is behind a proxy.

**Note: the explanation from here on out will be added explanatory images at a later time since at the time of writing the server is inaccessible so I could not provide any supporting images.**

The manual process starts by entering the server using ssh (reminder that we need to use a jumphost as it is gated by my university's proxy). The administrators of the server kindly enough added my public key to ke authorized_hosts of the server so I can use my private key to enter the proxy network and another key to enter the designated server.

![Connecting to the server using SSH]()

After entering the server, we need to pull the repository and checkout the branch that corresponds to the build we want to serve (production, staging, or dev). Once finished pulling, we need to install the dependencies. However, there is a major problem that the proxy network only allows little internet access to a limited number of addresses. Luckily, the administrators have provided a script to bypass the proxy per session.

![State of limited internet access and the bypass script]()

> Oh, and don't forget to create the necessary environment variables for the project to refer to (usually in the form of an .env file)

Once the project is built and ready to serve, the last configuration we need to make is for NGINX. The first post I did on this project already explained the usage of NGINX so I won't go into detail here, but to let NGINX acknowledge the project as a runnning service to be served we need to make a configuration which points to the root of the project. This part of the deployment needs root access that the default user of the server already has since it belongs to the sudo group.

![NGINX configuration file and user groups]()

The only thing left to do after that is starting the service through `systemctl` and we're good to go.

If you noticed, that is quite a lot of work just to deploy the app, even if some of the steps only need to be configured the first time. So, I've come up with a solution that might take care of this extra labor.

In my other post I've elaborated on how I tried to dockerize the frontend and my team dockerized the backend. The only problem was although some of the steps during deployment is gone it still needed manual user input to change the NGINX configuration.

After doing some research I found out that docker can run scripts for NGINX configuration during its build process. That means that a CI/CD is perfectly possible to be implemented. As the optimal solution would be using the `gitlab-ci.yml` to access the server and building the Docker image and let the scripts during said image build time do the rest.

This _Aha!_ moment is what ties it to the overarching gitflow and DevOps theme which is to automate jobs that can be relegated to virtual runner/worker.

For the last few days I've been trying to experiment with it so I will post an update once I've dug more into it and is successful in implementing it for the staging and/or dev builds.