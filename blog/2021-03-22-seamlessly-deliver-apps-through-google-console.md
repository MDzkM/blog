---
id: seamlessly-deliver-apps-through-google-console
title: Seamlessly Deliver Apps Through Google Console
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, django, flutter, react, mobile]
description: A short recollection of my firsthand experience publishing an app on Play Store.
---

A short recollection of my firsthand experience publishing an app on Play Store.

<!--truncate-->

During the task assignment phase of my current project, there was a backlog for deployment that was split into three parts, backend, frontend, and mobile. Since I have never tried publishing any apps to a mobile platform, I took the chance to learn about it by picking the mobile deployment task.

The first step was exploring the codebase. It was built on flutter, and the project structure itself is not too hard to understand. I was also able to run the app on my phone as the device connected to android studio. However, when I tried to build the project it gave me a key error for signing the app. At first I thought it was just an environment variable that was missing and re-checked the `app_settings.json` located in the `pilar-mobile/assets/cfg/` folder.

![Project Structure in Android Studio](https://i.ibb.co/vsRMXC5/Project-Structure-in-Android-Studio.png)

But it seems that that wasn't the core issue, and after doing a bit of searching I found out that to build flutter apps and get it published on Play Store you need a developer's key to sign the app to identify it is actually being delivered by the correct developer.

So, I asked the lead developer of my project for the `key.jks` and `key.properties` files. Once all the prerequisites are met, I could finally build the project.

When I was ready to publish the app bundle to the Play Store, my lead developer granted access to the Google Play Console. An important note here because the project already belongs to an organization maintained by my university, I don't need to create a new developers account to access the console.

![Account Choice](https://i.ibb.co/wYCknT0/Google-Play-Console-Choose-Account.png)

![One-Off Fee](https://i.ibb.co/k4HgnXp/Google-Play-Console-One-Off-Fee.png)

If you are a lone developer that want to publish apps there is a one-time fee to create your account.

![Google Play Console Dashboard](https://i.ibb.co/GFzrXDd/Google-Play-Console-Dashboard.png)

Through there I can access Production releases and all other stages of the release. In this post I'm just going to touch on two of the other stages which are Open Testing and Internal Testing.

![Google Play Console Testing Menu](https://i.ibb.co/0hryZBr/Google-Play-Console-Testing-Menu.png)

The differences between those two are Internal Testing is a release build for the developers and a few select individuals that is officially included as testers to test the application on the live platform whilst Open Testing is more aimed towards the general public that people can enroll in if they are interested to try the release. Open Testing however, requires the app to be reviewed by Google that might take up to three days meanwhile the Internal Testing release can instantly be downloaded through the Play Store once the developers rolled it out.

I was assigned to rollout the staging release which belongs to the Open Testing category. All I had to do was upload the `app-release.aab` file to the console and set the name and release notes.

![Upload Bundle File](https://i.ibb.co/R0T1S7R/Google-Play-Console-Upload-Bundle.png)

![Add Release Notes](https://i.ibb.co/hXvdPF9/Google-Play-Console-Add-Release-Details.png)

When that's done, I can review the app before moving on to the rollout phase.Something to note here that there is an option to include previous releases in the current release we want to rollout. But when I tried it I was met with an error because the new release overwrites the older one (so basically redundant I guess) and I haven't looked into it more.

If you are sure that everything is in place click the rollout button on the bottom right corner of the page and you're finished!

![Rollout Button](https://i.ibb.co/LNKfcPZ/Google-Play-Console-Review-Before-Rollout.png)

![All Releases Overview](https://i.ibb.co/CsX2c7h/Google-Play-Console-All-Releases-Overview.png)

It surprises me that the process was fairly simple and very straightforward to organize the different stages of the release. There are a few things that I haven't mentioned and might explain a bit more in another post. All in all, the Google Play Console offers lots of features that makes delivering and managing releases easier.
