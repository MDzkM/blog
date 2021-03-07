---
id: software-project-review
title: Software Project Review
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, bisago, tbcare]
description: A review of three projects I'm going to be working on.
---

A review of three projects I'm going to be working on. \

<!--truncate-->

This year I'm taking the software project course and there are three different products available for development which are Pilar Home Industry, TBCare, and bisaGo. I am going to briefly explain them below.

## 1. Pilar Home Industry

![Pilar Home Industry Banner](https://i.ibb.co/wd2mXcg/Pilar-Home-Industry.jpg)

The first product that was introduced by the lecturer's assistant during class was Pilar Home Industry. This app is an online marketplace with an android based platform and a separate web based platform for the admin page. Being a marketplace, Pilar offers the basic features of buying products, search for products, transaction history, and donations. It is aimed towards social communities and attempts to help small businesses grow. Pilar also helps the prevention of going outside during the occuring pandemic to reduce unnecessary contact with other people. Aside from purchasing products regularly, users can also pre-order them. The interface of this app is fairly simple and easy to understand without neglecting the modern feel and a clean user interface.

For purchases, Pilar provides several options to do the transaction. The first option is the more conventional method, bank transfer. And the other option is to pay when the product has been delivered (cash on delivery). Aside from those features, Pilar also houses some events that can be funded through donations. Events such as online workshops, bootcamps, and many more are available for donations based crowdfunding to gather the necessary resources to run the event. The transactions history for purchases and donations are also separated which is a nice touch.

Now that I've gone over the basic overview of the app let's move through the technical side of things. As mentioned previously the mobile app (based on flutter) is for the users to use and interact with, whilst the web version of the app is reserved for the administrator only. The web version consists of a React based frontend and a Django backend. This version of the app is mostly used for management.

There are three environments currently available in the codebase, which are development, staging, and production with the order of least tested to most user ready state. There is a provided CI/CD pipeline for the development and staging branch however the production branch requires manual deployment to avoid any breakage in the live version of the app.

The deployment environment of the backend uses NGINX to leverage the usage of gunicorn in managing requests to be sent to the available sockets. As a webserver NGINX is responsible to direct requests and point to static files if requested any as gunicorn is not able to process them. The Django REST framework provides an easy to understand REST API structure for the frontend to use.

All in all Pilar is a robust marketplace with interesting features that could be developed more during my time in this course (which coincidentally I'm part of the developers chosen to work on this project) or in the future.

## 2. bisaGo

![bisaGo Banner]()

## 3. TBCare

![TBCare Banner]()
