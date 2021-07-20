---
title: How to Build a Serverless Slack Command in minutes using Nimbella?
status: Draft
date: 'May 12, 2020 4:00 PM'
excerpt: test
categories:
  - category: commander
---
**Commander** is a **Slack app** that provides a framework for developers to create **custom serverless slash commands** and serverless **Slack apps** without leaving the **Slack environment**. Commander is an app that simplifies your **workflow to build custom apps**. The commands which are created using Commander are **serverless commands** which run on Nimbella’s **Serverless Cloud**. There's nothing to install, no servers to manage, and no services you need to provision. Simplifying the **process of creating Apps** and slash commands allows you to quickly create or install functionality for your team to more efficiently communicate with each other.

## Why use Serverless Slack Apps?

**Serverless computing** with functions fundamentally reduces the amount of code you develop and deploy for **cloud applications**, eschewing the “server” parts, and allowing you to focus on just your functions. For a cloud-native application, [where functions are APIs](https://medium.com/openwhisk/the-duality-between-serverless-functions-and-apis-3cc4e525edab), an integrated API gateway handles the routing of events and **REST requests** to your functions.

The advantage of Commander is minimal configuration setup, easier development & deployment, and sharing across your team. Not only that but with Commander you also get access control, built-in security, and logging and all within Slack itself. These are unique and important features for small and large Slack teams alike, and we will describe them in our next article in the series.

## What are slash commands? 

According to Slack, “Slash Commands allow users to invoke your app by typing a string into the message composer box. A submitted Slash Command will cause a payload of data to be sent from Slack to the associated app. The app can then respond in whatever way it wants using the context provided by that payload. These commands are the entry points for complex workflows, integrations with external services, or even just simple message responses. They're the knock at your app's front door that could be the start of a great conversation”.

## 

## How to Build a Currency Converter slash command?

Without further ado, let’s get started. The **slash command** we will be writing today is a simple currency converter. 

`/nc convert <from> <to>  
`

The above command will convert 1 unit of from the from parameter to the to parameter. For example, running `/nc convert usd eur` will convert 1 USD to Euro.

Before we could build our own custom command in Commander, we need to install it. In 2 simple steps, we will install Commander and create a basic **slash command** that users can run in Slack.



1. First, install the Commander Slack app from the Slack App Directory or [Nimbella’s Website](https://nimbella.com/). 

(IMAGE HERE)



After Installation, you should see the following message.



(IMAGE HERE)

2.We have extensive documentation for Nimbella Commander and the slash commands it provides. Commander comes with the “/nc” slash command (short for Nimbella Commander). This command is used to create, manage, and run your custom commands. This is also the primary command to interact with the Commander.

Try it and type /nc command_create demo to create a demo command as shown below. The command is created with a stub function which you can immediately run with the command /nc demo. The stub function outputs a placeholder response which you can edit by clicking the shown “edit the code” link.



(IMAGE HERE)
