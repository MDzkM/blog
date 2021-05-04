---
id: sonarqube-and-the-importance-of-clean-code
title: Sonarqube and the Importance of Clean Code
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, django, flutter, react, mobile, sonarqube, clean, code]
description: Why does clean code matter? What is sonarqube and what does it do?
---

Why does clean code matter? What is sonarqube and what does it do?

<!--truncate-->

Throughout this course, I've implemented previous knowledge that has accumulated from past experiences, one of them is clean code. Although seemingly subjective, clean code itself has several best practices and a clear goal to be achieved that can be implemented in a consistent way. On the base level of understanding clean code helps developers to achieve easier understanding of:

- The execution flow of the entire application
- How different objects interact and collaborate with each other
- The role and resposibility of each class
- The purpose of a method
- And the purpose of each expression and variable

To achieve those goals, we need to delve in the technical aspects on how to actually write clean code.

> An important note is developers, including me, will always try to write an optimized code from the get go, however, not reaching that optimal clean code at the start of writing your code is okay because you can always review and refactor them.

To start with, I'm going to break it down into the part of writing variables and expression and the part of writing functions.

## Writing Variables and Expressions

When creating a variable to represent some value, make sure to make it **meaningful**, **pronounceable**, and **consistent** through the entire code. A good baseline is to take what value it is going to represent, abbreviate it if it's too long, but make it clear to understand what it actually means. Even though searchable variables are convenient, knowing what value they contain and represent is as important so make sure you implement both.

## Writing Functions

We all want a function to do its thing without crashing the entire app, right? So, the most logical thing to do to achieve that is to **keep the functions short** and have a clearly defined **purpose of one job**. Because the more jobs it handles, the more possibility for it to produce side effects.

Moreover, a function that needs an abundant amount of arguments is also not recommended. The more dependent a function is to the input, the more likely it will meet its untimely error. If a function needs to have parameters that determine what to do and what not to do then it is more preferable to split the function into several parts.

And of course, the main goal of using a function is not to repeat yourself. So make your code leaner by extracting repetitive sections into functions.

## Miscellaneous

This is an extra part I've decided to include which will basically remind you to make meaningful comments, don't leave code on comments, and always try to learn the conventions of the language you are using. Because having a global standard makes it easier for other people aside from yourself to understand the code you wrote.

---

Okay, now that that's out of the way, let's move on to the next topic. What can I use to help implement these best practices? To answer this I'm going to talk about my experiences during my current sprint first. During this sprint, I'm tasked to setup the project's sonarqube analysis and hook it up to the server. 

I didn't know what sonarqube is and basically it was my first time hearing it. I read in the documentation that it's a tool that can help you by automatically reviewing your codes, branches, and even pull requests. And the purpose of this tool is to detect any bugs, vulnerabilities, or even code smells, to enforce clean code in the project. I was interested when I learnt this because from what I saw, sonarqube also shows what needs to be changed to fix these issues. That's incredible!

The setup was fairly simple too. In my project the steps I had to do was pull the latest `master` and `dev` branch of the project. Create the config file which consists of the host address and the branch that wants to be analyzed. After that you can run a docker version of the sonarqube to start analyzing and the results will automatically be uploaded. Of course, all of that is done after creating a new project in the server along with the login key which will be used when running the analysis.

So, after learning all of the above I hope those who read my post can try and implement it in their own projects.
