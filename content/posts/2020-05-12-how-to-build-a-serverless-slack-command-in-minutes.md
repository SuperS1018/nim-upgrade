---
title: How to Build a Serverless Slack Command in minutes
status: Published
date: 'May 12, 2020 4:00 PM'
postFeaturedImage: /images/uploads/how-to-build-a-serverless-slack-command-in-minutes.png
excerpt: >-
  Create custom serverless slash commands and serverless Slack apps without
  leaving the Slack environment.
categories:
  - category: Commander
meta:
  description: >-
    Create custom serverless slash commands and serverless Slack apps without
    leaving the Slack environment.
  shareImageUrl: /images/uploads/how-to-build-a-serverless-slack-command-in-minutes.png
  title: '[Guide] How to Build a Serverless Slack Command in Minutes?'
---
**Commander** is a **Slack app** that provides a framework for developers to create** custom serverless slash commands** and serverless **Slack apps** without leaving the **Slack environment**. Commander is an app that simplifies your workflow to build custom apps. The commands which are created using Commander are **serverless commands** which run on Nimbella’s **Serverless Cloud**. There's nothing to install, no servers to manage, and no services you need to provision. Simplifying the **process of creating Apps** and **slash commands** allows you to quickly create or install functionality for your team to more efficiently communicate with each other.

## Why Serverless?

**Serverless computing** with functions fundamentally reduces the amount of code you develop and deploy for **cloud applications**, eschewing the “server” parts, and allowing you to focus on just your functions. For a cloud-native application, [where functions are APIs](https://medium.com/openwhisk/the-duality-between-serverless-functions-and-apis-3cc4e525edab), an integrated API gateway handles the routing of events and **REST requests** to your functions.

The advantage of Commander is minimal configuration setup, easier development & deployment, and sharing across your team. Not only that but with Commander you also get access control, built-in security, and logging and all within Slack itself. These are unique and important features for small and large Slack teams alike, and we will describe them in our next article in the series.

## What are slash commands?

According to Slack, “Slash Commands allow users to invoke your app by typing a string into the message composer box. A submitted Slash Command will cause a payload of data to be sent from Slack to the associated app. The app can then respond in whatever way it wants using the context provided by that payload. These commands are the entry points for complex workflows, integrations with external services, or even just simple message responses. They're the knock at your app's front door that could be the start of a great conversation”.

## Installing Commander

Install the Commander Slack app from the Slack App Directory or [Nimbella’s Website](https://nimbella.com). 

CMS-IMAGECLASS IMAGE=/images/uploads/image8.png INDENT=0 CLASS=w100 ALT=Serverless Slack app

After Installation, you should see the following message.

CMS-IMAGECLASS IMAGE=/images/uploads/image6-1.png INDENT=0 CLASS=w100 ALT=Serverless Slack app default message

We have extensive [documentation for Nimbella Commander](https://nimbella.com/docs/commander/slack/overview#what-is-commander) and the slash commands it provides. Commander comes with the “/nc” **slash command** (short for Nimbella Commander). This command is used to **create, manage, and run your custom commands**. This is also the primary command to interact with the Commander.

## Commands and what you can do with them

For Commander, commands are serverless functions which are invoked using Slack’s slash command. Commander allows you to create your own commands.  Try it by typing /nc command_create demo to create a command named demo as shown below. The command is created with a stub function which you can immediately run with the command /nc demo. The stub function outputs a placeholder response which you can edit by clicking the shown “edit the code” link.

CMS-IMAGECLASS IMAGE=/images/uploads/image7.png INDENT=0 CLASS=w100 ALT=Serverless Slack command

It’s that simple! We just created a serverless function and ran it on slack with just a single command. The content of the command is shown below, but the cool thing now is, it’s just upto your imagination to decide what you want your command to do. 

The default language for slash commands is Javascript. You can change the language of your command to Python or Go as well. For this tutorial, we will use JavaScript. 

CMS-IMAGECLASS IMAGE=/images/uploads/image15.png INDENT=0 CLASS=w100 ALT=Serverless Slack command code

You can also create commands which can take multiple arguments as shown below. If the arguments are not sent in the command, Commander automatically handles the error for you. 

CMS-IMAGECLASS IMAGE=/images/uploads/image9.png INDENT=0 CLASS=w100 ALT=serverless Slack command

## Command Set Registry, a home for all the commands

We showed above how easy it is to create a serverless command in slack. Now, normal use cases would require you to create multiple commands and what if you want to share it with everyone including your team? Enter, Command-Sets. 

Command-sets are a way for you to group related commands under a single command-set. We have created a large number of command-sets and made it available on Github for public use. We call it “[Command Set Registry](https://github.com/nimbella/command-sets)”.  Anyone can install, run and modify the commands under the command-set and the way to do it would be using “csm” or command-set-management command. 

Let’s look at how to do this below: 

“/nc csm” lists all the available command-sets which you can install from our registry 

CMS-IMAGECLASS IMAGE=/images/uploads/image17.png INDENT=0 CLASS=w100 ALT=serverless command

Let’s install the “corona_stats” command-set to see the stats of the country infected with COVID-19.  The Corona stats command set has 1 command, “corona_stats”. We can run the command with “/nc corona_stats” as shown below

CMS-IMAGECLASS IMAGE=/images/uploads/image4.png INDENT=0 CLASS=w100 ALT=Serverless slack app

Not only, can you install any of the command-sets, you can also modify the code on our online editor. Let’s assume that your country stats are not shown and you want to add it. You can simply run “/nc command_code corona_stats”, make changes on the online editor, save it and run it. Once your changes look fine, you can submit your patch by creating a PR  [here
](https://github.com/nimbella/command-sets/)

After that is merged, how can anyone get your changes? Simple: 

CMS-IMAGECLASS IMAGE=/images/uploads/image5.png INDENT=0 CLASS=w100 ALT=Serverless Slack app

You can also create your own command-set in your github repository and install it with “csm”. I have created a command-set on my [repo](https://github.com/niks3089/image-analyser) which I can install and run as shown: 

CMS-IMAGECLASS IMAGE=/images/uploads/image101.png INDENT=0 CLASS=w100 ALT=Serverless Slack app command

Oops! Looks like there’s an error. My command, image-analyser, takes an image URL as an input and analyses and gives an output. However, we don’t see this happening. That’s because I am making an API call to IBM Watson’s api which requires an API key and I don’t want to put the key in the code. So what do I do? I use Commander’s secret store. 

Commander provides a way to create secrets and use those secrets in code. We create the secrets like shown below: 

CMS-IMAGECLASS IMAGE=/images/uploads/image13.png INDENT=0 CLASS=w100 ALT=serverless slack app

Clicking on the link will open the browser and you can add the secret as shown below

CMS-IMAGECLASS IMAGE=/images/uploads/image1.png INDENT=0 CLASS=w100 ALT=serverless slack app

After adding the secrets, click on clipboard copy and paste in slack and press enter. Once we do this, we can run the command

CMS-IMAGECLASS IMAGE=/images/uploads/image2.png INDENT=0 CLASS=w100 ALT=serverless slack app

How would we use the secrets in code? Simple, by looking the secret argument passed to the function:

CMS-IMAGECLASS IMAGE=/images/uploads/image14.png INDENT=0 CLASS=w100 ALT=serverless Slack app code

Not only do you get a secure storage for your secrets, but you also get access control. Since I installed Commander, that makes me a default admin. Others in the workspace cannot run the commands without permission as shown below

CMS-IMAGECLASS IMAGE=/images/uploads/image3.png INDENT=0 CLASS=w100 ALT=serverless slack app

App admins have the ability to create and install commands and also determine who can run, edit or create commands. You can add other admins as shown below

CMS-IMAGECLASS IMAGE=/images/uploads/admins-commander-add.png INDENT=0 CLASS=w100 ALT=serverless slack app

Along with access control, you can also get logging. You can see app, user and command logs, I’ll just show how you can see app logs, but it's easy to see command and user logs. Just run “/nc command_log <command>” and “/nc user_log @user” respectively. 

CMS-IMAGECLASS IMAGE=/images/uploads/image16.png INDENT=0 CLASS=w100 ALT=serverless Slack App

For developers, it might be useful to add logs and to be able to debug while writing commands and Commander allows you to fetch the logs as well. Let’s say I have added a couple of logs to the “hello” command as shown

CMS-IMAGECLASS IMAGE=/images/uploads/image11.png INDENT=0 CLASS=w100 ALT=serverless slack app code example

I will first run the “hello” command and then fetch the logs by running “/nc activation_log” command to fetch the logs as shown below

CMS-IMAGECLASS IMAGE=/images/uploads/image12.png INDENT=0 CLASS=w100 ALT=Serverless Slack App

One of the other useful features is the ability to run the command outside of Slack. You can create a command in Slack but run the command from anywhere and here’s how you do it. 

You can use the api_get command to get the command parameters which you can use in your code to call your command or just use curl 

CMS-IMAGECLASS IMAGE=/images/uploads/nc-api-get-hellp-code.png INDENT=0 CLASS=w100 ALT=serverelss

## Why Commander?

This article demonstrated how easy it is to create a serverless Slack command using Nimbella Commander. I showed you how to install Commander, create and run your first command, work with command-sets and also showed you the built in secret-store, access control, logging and debugging that is packed with it. 

I’ll conclude by summarizing the benefits of using Nimbella Commander for building Slack apps.

1. You don’t have to download any external tools other than Slack. 
2. There is no infrastructure for you to manage or operate.
3. As a developer, you get to focus on writing just the business logic of your app, with Nimbella Commander doing the rest of the heavy lifting for you.
4. There is no complicated Slack setup, and you can use and share the slash commands with everyone in your Slack team.

## The future for Commander

Slack is one of the integrations we support for Commander. We are working on creating more integrations for other messaging systems such as MS Teams and Mattermost. We also support running commands from anywhere. You would be able to use curl/wget and invoke your commands from the terminal. You can also integrate the commands as serverless buttons on your website. We are also working on a Commander CLI which you use with “nim”, the official Nimbella’s CLI to develop commands and command-sets from your terminal. The other important use of Commander is the ability to write code once and run it on different platforms. Imagine your company exposes 4 APIs and you want to write an App for Slack, MS Teams. You would have to spend several months in development. With Commander, create a Command-set, write 4 commands which use your APIs and publish them as Command-Sets. The users will be able to install and run your “App” on Slack or Teams or even on their terminal! How cool would that be! If you’re interested to track our progress, follow us on Twitter or join our Slack community to get notified of the updates.
