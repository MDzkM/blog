---
id: software-project-review
title: Software Project Review
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, bisago, tbcare]
description: A review of three projects that I'm going to be working on.
---

A review of three projects that I'm going to be working on.

<!--truncate-->

This year I'm taking the software project course and there are three different products available for development which are Pilar Home Industry, TBCare, and bisaGo. I am going to briefly explain them below.

### 1. Pilar Home Industry

![Pilar Home Industry Banner](https://i.ibb.co/wd2mXcg/Pilar-Home-Industry.jpg)

The first product that was introduced by the lecturer's assistant during class was Pilar Home Industry. This app is an online marketplace with an android based platform and a separate web based platform for the admin page. Being a marketplace, Pilar offers the basic features of buying products, search for products, transaction history, and donations. It is aimed towards social communities and attempts to help small businesses grow. Pilar also helps the prevention of going outside during the occuring pandemic to reduce unnecessary contact with other people. Aside from purchasing products regularly, users can also pre-order them. The interface of this app is fairly simple and easy to understand without neglecting the modern feel and a clean user interface.

For purchases, Pilar provides several options to do the transaction. The first option is the more conventional method, bank transfer. And the other option is to pay when the product has been delivered (cash on delivery). Aside from those features, Pilar also houses some events that can be funded through donations. Events such as online workshops, bootcamps, and many more are available for donations based crowdfunding to gather the necessary resources to run the event. The transactions history for purchases and donations are also separated which is a nice touch.

Now that I've gone over the basic overview of the app let's move through the technical side of things. As mentioned previously the mobile app (based on flutter) is for the users to use and interact with, whilst the web version of the app is reserved for the administrator only. The web version consists of a React based frontend and a Django backend. This version of the app is mostly used for management.

There are three environments currently available in the codebase, which are development, staging, and production with the order of least tested to most user ready state. There is a provided CI/CD pipeline for the development and staging branch however the production branch requires manual deployment to avoid any breakage in the live version of the app.

The deployment environment of the backend uses NGINX to leverage the usage of gunicorn in managing requests to be sent to the available sockets. As a webserver NGINX is responsible to direct requests and point to static files if requested any as gunicorn is not able to process them. The Django REST framework provides an easy to understand REST API structure for the frontend to use.

All in all Pilar is a robust marketplace with interesting features that could be developed more during my time in this course (which coincidentally I'm part of the developers chosen to work on this project) or in the future.

### 2. bisaGo

![bisaGo Banner](https://i.ibb.co/sWBRXMk/bisaGo.png)

Next on the list is bisaGo. This one is quite straightforward, bisaGo is a beautiful mobile app that provides online service to help the disabled locate public disability facilities. Even though we are currently living in a modern information and technology era, there is a severe lack of easilly accessible information for the disabled about the whereabouts of certain facilities. The aim of this app is to alleviate that problem by offering a user friendly experience to browse and locate nearby facilities easily and quickly.

In the dashboard of this application is a map where users can search for a desired location. A location that has facilities will show an option to view details which gives more specific information of said facility. To boost the reliability of the information provided in this platform there is also a review feature, where users can review a facility and give recommendations. The feature includes the basic use cases of upvoting a review, attaching an image, and so on.

From the development side of things, this project consists of two parts which are the frontend that utilizes flutter and the backend that uses Django REST. The same as the previous project, bisaGo uses NGINX to manage requests and act as a proxy to bridge the client and the backend. Another key feature is Google API is used to provide location information. As for continuous integration and development, the only pipeline available at the current time of writing this is only for the backend. The frontend of this application still needs to be deployed manually although a pipelined CI/CD for it is in development.

My thoughts on this project are firstly it is an incredible step forward for accessibility, since there are an abundance of technology so there's no excuse whatsoever to not provide accessibility information such as this. And second, even though it looks quite simple the user interface feels natural and non-intrusive which is a great choice for making it as easily accessible as it can be.

### 3. TBCare

![TBCare Banner](https://i.ibb.co/z4P21bM/TBCare.png)

The last one for today is TBCare. To put it simply, TBCare is an app that has the purpose of aiding organizations to investigate areas that are potentially susceptible to tuberculosis. For the time being this application is used by Perkumpulan Pemberantas Tuberkolosis Indonesia (PPTI) that mainly focuses on Depok as the location of interest. This app provides features to streamline the process of gathering and managing data of the infected people or potentially infected so it would be more efficient and reliable.

There is not much to say about this one since it's mainly centered around administrative purposes, so the features are more or less a form that would be sent to the servers to be stored in a database.

Taking a look at the codebase, there are three version of the app distributed on different platforms. The first one is the general user purposed mobile app, the second one is the web based version for admins to manage the data, and the last is the backend. There is nothing new here from the previous projects explained above, it uses NGINX as a proxy gate and the same technology stack (flutter for mobile, react for webpage, and django for backend). The CI/CD for this app is also already available for the admin page and backend, what's left is the mobile version that still needs to be deployed manually. However, the interesting thing to mention is that this project will be migrated from the heroku servers it once used to the Computer Science of Universitas Indonesia server which has its own private gitlab runner.

It is certainly a useful app to minimize the work needed to gather and manage data and I would love to see more improvements to its features in the future.

---

**Overall I think all the products that are showed in the course I'm taking are all interesting and would be a huge benefit for society. And then this would be the abrupt end of this review. I hope this short overview gave a bit of insight and inspiration for other developers and/or other people that might read this post.**
