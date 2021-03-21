---
id: docker-is-the-future-of-platform-agnostic-development
title: Docker is the Future of Platform Agnostic Development
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, django, flutter, react, mobile]
description: How Docker impacted my experience during the development of Pilar.
---

How Docker impacted my experience during the development of Pilar.

<!--truncate-->

As you might know from the previous post, I'm currently assigned a project from my course that has three seperate codebases which are REST API using Django, admin webpage that utilizes React, and the mobile app built on flutter.

To start it off, let me preface this by giving my experience at the start of my first sprint and explain a bit about Docker itself. Before we were assigned any tasks, we had the chance to clone the repository and run all of it locally, however, not long after pulling all the necessary files, I was struck with my first obstacle. It seems that for the backend, some dependecies cannot be resolved due to a combination of a mismatched version of python I was running and conflicts of package versions which (I guess) exists on other platforms but doesn't on Windows (however that may be).

Luckily, my team and I decided to dockerize the backend as our first pre-task even though we haven't specified for the CI/CD to make use of it. After creating all the config files and building the image, the container was ready to go. The result was amazing, not only that none of the previous problems I mentioned non-existent, but the environment itself was self-contained including the database. Because, of that things became easier to adopt as we don't need to handle any platform specific errors when preparing to develop the project.

---

At this point you might ask, **'What actually is Docker? And how does that help development in any meaningful way?'** so let me elaborate on that for a moment.

Docker is a platform so to speak that acts as a container engine which developers will use to, you guessed it, contain projects inside a predefined environment. For example, the Docker container environment we used for the backend of Pilar was python since it is a python codebase.

To better quote from an official [source](https://docs.docker.com/get-started/overview/),

> ## Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications.
>
> ### - _Official Docker Documentation_

So from there we can conclude that Docker's purpose is to create a cleaner and more seamless development environment. We will touch on more about that at the end of this article.

---

Continuing where we left off, I thought **'Why stop there?'** and immediately after I went on to dockerize the frontend side of the project. The process was fairly simple and much less complex than the backend since the frontend only consists of React and static pages that don't need a database whatsoever. These are the steps I took when creating the Docker image:

I first created a file named `Dockerfile` which will contain the initial commands and setup the image needs to prepare. The following code is what I used in my `Dockerfile` (or as you can see on my commit [here](https://gitlab.cs.ui.ac.id/ppl-fasilkom-ui/sosial/pilar/pilar-backend/-/commit/4dd5ccc0fe42e533d74ccf654efbeeaf912e57a8)),

```docker
FROM node:15.11.0
WORKDIR /app
COPY . .
RUN npm install -g npm@7.6.3 && npm install && npm install -g serve && npm run build
CMD ["serve", "-s", "dist"]
```

To briefly explain the code above:
- `FROM` specifies what image we want to use for our container. Since we are running a javascript application (with the React library) it needs node as the runtime environment. The version code may vary from one project to another, the reason we picked `15.11.00` was because it's the latest and fully compatible with every dependency included in the project.
- `WORKDIR` is the default working directory inside the container where all the commands below it will be ran at.
- `COPY` simply copies the specified path (with `.` meaning the current directory) to the second specified path relative to the working directory declared above it.
- `RUN` will execute the arguments given to it in which we told it to install the dependencies and additional packages needed to build the project.
- and last but not least `CMD`, which is similar to `RUN` but instead is executed last as a means to start the project within the container.

However, the `Dockerfile` is not enough to setup the image we are building. So, we're gonna need another file named `docker-compose.yml` where it will store the configuration of the image itself. This is the code I implemented on said file (which can also be found [here](https://gitlab.cs.ui.ac.id/ppl-fasilkom-ui/sosial/pilar/pilar-backend/-/commit/4dd5ccc0fe42e533d74ccf654efbeeaf912e57a8)),

```docker
version: '3.9'

services:
  web:
    container_name: pilar-web
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - '.:/app'
      - '/app/node_modules'
    ports:
      - 9000:5000
```

Again, I'm going to briefly explain the commands written above:
- `version` is just specifying which version of Docker engine we want to use. It might impact the format of the `docker-compose.yml` file itself but here there is not much to be considered as the configuration is not that complex.
- `services` define what and how many containers we want to run, as you can see we are only going to initiate one container as `web`.
- In the `web` container we are going to name it `pilar-web` to give it a more recognizable name. This would help when you have many images running because then it is easier to identify which is which.
- Next on is `context` which tells Docker where to look for necessary files during the image building process and we are going to point out the `dockerfile` configuration exists in the `Dockerfile` we have created previously.
- `volumes` is where we define paths that we are going to persist, if we are running multiple containers and want it to access the same persisted data in a volume, we can also define the `volumes` as a top level item which can be referenced by other containers.
- And `ports` consists of the external port `9000` that we can access from outside of the container and the internal port `5000` that can only be accessed from inside the container. The external port can be arbitrary however the internal port depends on where to service is running, in this case the `serve` command we are using to run the react project is bound by default to port `5000`.

After all of the above, now is the time to build the Docker image which is supposedly the easiest step unless you ran into some errors from the configuration. To start building the image you only need to run the command `docker-compose up -d --build` in the directory where the previously created two files are located. Docker will begin to execute the predefined commands and _voilà_ the image is ready to use.

![Docker Hub Showing the Image](https://i.ibb.co/ynGCx2R/Frontend-Docker-Image.png)

When we open `localhost:9000` in our browser we are greeted with the form for the admin page.

![Pilar Admin Web Page](https://i.ibb.co/hF56zNS/Pilar-Admin-Page.png)

To close this article, I'm just gonna summarize and conclude based on the experience that I've just walked you through. I used Docker as workaround to the dependecy problem I was having on Windows and it turns out I achieved more than what I needed it to do. By using Docker, it negates the platform specific errors and acts accordingly to the defined environment on whichever platform we decide to run the Docker from. I think this is truly incredible since we can make the codebase more accessible. And we haven't even gotten to the part where Docker can also run scripts to configure other components that will tie in to the CI/CD of the project. However, I'm gonna go into details on that in another post.

My conclusion is, the existence of Docker can become the alternative to serve a project locally during development or even in production builds. The versatility of Docker will come in handy as an option readily available. I guess that's enough for this post, thank you for all the readers and I hope this article might help as a source of knowledge or reference to the viewers.
