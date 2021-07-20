---
title: How to Create a multi-user Chatroom Hosted on Serverless Cloud?
status: Published
date: 'April 30, 2020 4:00 PM'
postFeaturedImage: /images/uploads/chat-thumb.png
excerpt: >-
  Use the Nimbella Platform to create and deploy chat APIs with a few simple
  steps. This tutorial goes into detail on creating, viewing, and deleting users
  and messages from a "chatroom" app.
ctaBanner:
  - banner: Platform
categories:
  - category: Tutorials
  - category: 'Reading time: 6 minutes'
  - category: Technology
meta:
  description: >-
    This tutorial goes into detail on creating, viewing, and deleting users and
    messages from a "chatroom" app ✔
  shareImageUrl: /images/uploads/chat-thumb.png
  title: Create a multi-user Chatroom Hosted on Serverless Cloud
---
In this tutorial, you’ll learn how to create a multi-user chatroom that is hosted in the cloud. I’ll describe how to create the front-end (the UI) and how to implement the back-end (API and implementation), and how to make all the code live on the web. By the end of the tutorial, you’ll have a URL that you can share with others to use your chatroom.

What this tutorial won’t describe—because you won’t have to do any of it—is how to upload your front-end static assets (HTML, CSS, and Javascript) to an object store or how to front those assets by a globally distributed CDN (content-delivery network). I will also not discuss how to run your backend logic on a server, how to provision a database or how to secure it so that the database is only accessible to your code and no one else. I am not going to talk about any of these things because they're done for you automatically because you're building on the Nimbella cloud.

Instead, you will write your front-end and back-end logic, enter one command on your terminal and like magic, you will get a dedicated URL that serves your UI from a CDN from a domain name that is yours and secured by SSL. Your backend logic will run on demand as visitors use your chatroom. It will scale as more users enter your chatroom, and it will cost you almost nothing to run. What is this magic I speak of? This is Serverless Computing and it will change the way you develop cloud applications, forever.

Before you start to think this is too good to be true, let’s begin and if you aren’t a believer by the time you’re done, we will send you a t-shirt. Well, we’ll send you a t-shirt anyway for trying this tutorial out, but we’d love to know that when you go from code to cloud in 30 seconds, you’re a serverless convert and will share this joy with others. At Nimbella, our goal is to demystify the cloud and make it accessible to everyone - all developers with diverse skill sets and backgrounds. Let's start building.

Here's your roadmap for the rest of the tutorial.

1. Nimbella CLI: your tool to the cloud
2. Chatroom architecture
3. Project organization
4. The Chat UI (frontend)
5. Serverless API Implementation (backend)
6. Code to Cloud in 30 Seconds

CMS-ANCHOR ID=nimbella-cli

## 1. Nimbella CLI: your tool to the cloud

The Nimbella CLI is called "nim". It helps you organize and deploy your serverless applications to the Nimbella cloud, to a secure domain that is unique to your projects. You will need to download the CLI and login with an access key to get started. Please visit the [signup page](https://nimbella.com/join-us) to sign up and learn how to configure your CLI if you haven't previously done this.

## 2. Chatroom architecture for Serverless Chat App

The following diagram illustrates how the Chatroom UI (frontend) interacts with APIs on the backend.

![build serverless chat app Nimbella](/images/uploads/nimbella-chat-1-.png)

The APIs allow the frontend to complete the following essential actions:

* Create a new user
* Get all users
* Post a new message
* Get all messages

Each of these actions occurs when users interact with the UI. The APIs can store or retrieve information from a Key-Value cache included with every Nimbella account so you can build stateful serverless applications out of the box. After completing whatever task the API is assigned, it provides information back to the UI which displays it to the user.

## 3. Project organization

There are three steps to build and deploying an application (e.g., frontend + backend) to Nimbella:

1. Create a project folder containing a "web" and a "packages" folder. The web folder contains front-end assets such as HTML, JavaScript and CSS files. In this example, we use React to build our front-end. The contents of the web folder are deployed automatically to a CDN when you are ready to deploy the project to the cloud. The packages folder contains the backend implementation, organized into functions that respond to the API calls.
2. For each backend function, implement the required functionality. Here, you can use Node.js, Python, Java, Swift, PHP, and Go. Other languages that are coming soon include Typescript, Ruby and .NET. This tutorial focuses on Javascript using Node.js.
3. Run `nim project deploy /path/to/project` 
4. using the CLI to deploy your local project to the cloud. At this point your serverless application is live on the web, with a dedicated domain name assigned to your project and a signed SSL certificate for secure communication.

BONUS Resource: There is [extensive documentation](https://docs.nimbella.com/) for configuration and deploying your projects to Nimbella for later reading.

## 4. The Chat UI (frontend)

Our chatroom uses React to create a UI that responds to data from our APIs. You will find the [implementation](https://github.com/nimbella/demo-projects/tree/master/chat) on GitHub. The React code is located inside the **web** folder and calls the APIs we will create below. For more details about adding web content to your project, you'll want to [read the relevant parts of the CLI documentation](https://docs.nimbella.com/). For now, it suffices to know the contents must exist in a "web" folder after the React build completes. By using React, we can develop and test the frontend locally for faster iteration.

![Full Chatroom!](/images/uploads/screen-shot-2019-12-18-at-3.20.13-pm.png)

## 5. Serverless API Implementation (backend)

In a standard chatroom, there are two types of data that we transfer, the user and the message. Each message has some user data, so let's create a system to store and access users. I'm also going to go over all the other backend actions and explain how they work.

**Create a User:**

To start our collection of chat APIs, let’s create a user. In order to do that, we need to retrieve the paramters which will be the username, validate the username, and add the username to the cache provided within your namespace.

**getUserList**

You'd want your users to know who is apart of this message board. So we run a command that instantly goes through the cache of users and displays them.

**postMessage**

In order to display all the messages in the order they've been given, we just push them to the end of the cache.

**getMessages**

After sending a message, let’s build an API that retrieves messages. Include logic to page through messages if important to your use case. We parse and return the messages it provides.

**delMessage**

Lets say one of your users sends a messages but they end up regretting it. You'd want your users to easily be able to remove any mistakes they posted. That's where the delMessage command comes in. After simply clicking the "X" button next to the post you want to remove, the code will go into Redis, find the key-value of that message, and remove it from the cache. 

**DelByUsreId**

So you created an account but for whatever reason, you don't want to be apart of this message board anymore. That's where the DelByUserId function comes in. You  have the ability to remove yourself from the list of users on the board.

**delAllUsers**

So you're the admin on the message board and for whatever reason you want to remove all the users who are apart of your chat. You have three options.\

1. Delete the entire website and start from scratch.
2. Delete them all one at a time. Which isn't bad if there's only a handful of users, but an absolute nightmare if you had thousands of users.
3. Run the delAllUsers command.

Personally, I'd go with the third option. In this command, we confirm that you are indeed the admin of this board.  The last thing you'd want on a message board is for everyone to have access to a command that would remove all the users. It goes into Redis and uses the key-value store to select each user one at a time and removes all of them.

## 6. Code to cloud in 30 seconds.

The Nimbella CLI is called `nim`. It helps you organize and deploy your applications to the Nimbella cloud, in a secure domain that is unique to your projects. You will need to download the CLI and login with an access key to get started. Please visit the [signup page](https://nimbella-apigcp.nimbella.io/) to configure your CLI if you haven't previously done this. As described earlier, deploying your functionality and UI is incredibly simple with the following line of code.

```
nim project:deploy <project_name>
```

Within seconds, Nimbella will tell you how many files and actions they hosted. Navigate to the link provided by Nimbella after running the command to access your finished Serverless Chat app.

This tutorial detailed the steps involved in creating an Serverless Chat application using the [Nimbella Platform](https://nimbella.com/platform). 

Nimbella is evolving and expanding. Check out Nimbella's [website](https://nimbella.com) for more information on our upcoming products and news. Contact us at info@nimbella.com or on our [community Slack](https://nimbella.com/slack) if you have any further questions. You can also check out the [Chat app source code on GitHub](https://github.com/nimbella/demo-projects/tree/master/trade).
