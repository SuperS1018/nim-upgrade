---
title: Create a Serverless Slack App in 60 seconds
status: Draft
date: 'April 27, 2020 4:00 PM'
postFeaturedImage: /images/uploads/header-create-app-60.png
excerpt: >-
  Commander is a Slack app that provides a framework that enables developers to
  create custom slash commands and/or Slack apps without leaving the Slack
  environment.
categories:
  - category: Commander
meta:
  description: >-
    Commander is a Slack app that provides a framework that enables developers
    to create custom slash commands and/or Slack apps without leaving the Slack
    environment.
  shareImageUrl: /images/uploads/header-create-app-60.png
  title: Create a Serverless Slack App in 60 seconds
---
**Commander** is a **Slack app** that provides a framework that enables developers to create **custom slash commands** and/or **Slack apps** without leaving the **Slack environment**. Commander is an app that simplifies your **workflow to build custom apps**. The commands which are written using the Commander are **serverless commands** which then run on Nimbella’s **Serverless platform**. In fact, Commander is a **serverless app** as well.  With Commander, your commands run on the Nimbella Cloud. There's nothing to install, no servers to manage, and no services you need to provision. Simplifying the **process of creating Apps** and **slash commands** allows you to quickly create or install functionality for your team to more efficiently communicate with each other.

* Why Serverless Slack App?
* How to Build a Currency Converter Chatbot Slack App?
* Why Commander?

## Why Serverless Slack App?

**Serverless computing **with functions fundamentally reduces the amount of code you develop and deploy for **cloud applications**, eschewing the “server” parts, and allowing you to focus on just your functions. For a cloud-native application, [where functions are APIs](https://medium.com/openwhisk/the-duality-between-serverless-functions-and-apis-3cc4e525edab), an integrated API gateway handles the routing of events and **REST requests** to your functions.

There are other resources that show ‘How to write Serverless Slack Apps’. However, the advantage of Commander is minimal configuration setup, easier development & deployment and sharing across your team. Not only that but with Commander you also get access control, built-in security and logging and all within Slack itself! 

## How to Build a Currency Converter Chatbot Slack App?

Without further ado, let’s get started. The **Slack app** we will be writing today is a simple currency converter. The app will have just 1 slash command. 

`/currency convert  <from-currency> <to-currency>`

The above command will convert 1 unit of from-currency to to-currency). For example, running `/currency convert usd eur` will convert 1 USD to Euro.

Before we could build our own custom app in Commander, we need to install it. In 2 simple steps, we will install Command and create a basic **slash command** that users can run in Slack.

1. First, install the Commander Slack app from the Slack App Directory or [Nimbella’s Website](https://nimbella.com/). 

CMS-IMAGECLASS IMAGE=/images/uploads/add-nimbella-to-slack-to-create-serverless-slack-apps.png INDENT=1 CLASS=w70 ALT=Serverless Slack App

After Installation, you should see the following message

CMS-IMAGECLASS IMAGE=/images/uploads/slack-app-confirmation-after-installing-to-create-serverless-slack-app.png INDENT=1 CLASS=w75 ALT=Slack app confirmation for Serverless Slack App

2. Feel free to read Nimbella’s extensive [list of Slack slash commands](https://nimbella.com/docs/commander/slack/overview#what-is-commander) on available commands the Commander provides. The Commander comes with the “/nc” **slash command** which is used to **create, manage, and run your custom commands**. Just for a demo, type`/nc command_create demo` to create a demo command as shown below. The command is created and you can then run the command with `/nc demo` and it outputs the result to Slack. It's that simple! Clicking the link will open a code-editor and you can see and edit the code however you see fit. 

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-install-functionality.png INDENT=1 CLASS=w75 ALT=Serverless Slack Ap install command for code

The default language is Javascript. You can change the language of your command to Python and Go as well. For this tutorial, we will use Javascript. 

CMS-IMAGECLASS IMAGE=/images/uploads/code-for-serverless-slack-app.png INDENT=1 CLASS=w75 ALT=code for Serverless Slack App

3. Now let’s **create a currency converter command**. The command should take 2 mandatory parameters, “from” and “to”.  _from_ is the currency we want to convert and _to_ is the currency we want to convert it to. We will again use [command_create](https://nimbella.com/docs/commander/slack/reference#command_create) for this.
   Type `/nc command_create convert <from> <to>` into Slack. Once you run the command, click the “edit the code” button to pull up the code for your newly created command.

CMS-IMAGECLASS IMAGE=/images/uploads/code-for-serverless-slack-app-to-convert-money.png INDENT=1 CLASS=w75 ALT=code for Serverless Slack App to convert money

4. Now once you create a command, let's write the **logic for the currency converter**. We will use the exchange-rates-api npm package to convert the currency. You can find the source of the command [here](https://gist.github.com/niks3089/14848e80ea837791ec1f84710d06b03b). Take the code from this line, copy-and-paste over all the code found in the page that pulls up when you click “edit the code”.

CMS-IMAGECLASS IMAGE=/images/uploads/code-for-serverless-slack-app-example.png INDENT=1 CLASS=w75 ALT=code for Serverless Slack App in Javascript

5. Once this is done, press save, go back to your Slack and run the command `/nc convert usd eur`. As shown below, the command converts 1 USD to Euro. 

CMS-IMAGECLASS IMAGE=/images/uploads/slack-command-for-serverless-slack-app-that-converts-usd-and-eur.png INDENT=1 CLASS=w100 ALT=command for Serverless Slack App that converts usd to eur

The commands can also be published for public use in GitHub in  [Nimbella's Command Set Registry](https://github.com/nimbella/command-sets) repo which is similar to the npm registry and its a collection of several command-sets where each command-set has a set of related commands. This way, anyone can install your commands by running, `/nc csm_install currency` in their Slack for example. Where currency is the command-set and convert is a command under it. I have created a public command-set for currency [here](https://github.com/niks3089/currency-command-set) which anyone can install with `/nc csm_install github:niks3089/currency-command-set`

CMS-IMAGECLASS IMAGE=/images/uploads/github-command-to-install-code-for-serverless-slack-app.png INDENT=1 CLASS=w75 ALT=Github code to install Serverless Slack App

Note that you also have built-in logging capacity for your app.  This allows you to know who is running your command. For example, `/nc app_log` shows the last 10 app commands ran in your Slack workspace.

CMS-IMAGECLASS IMAGE=/images/uploads/slack-command-to-see-log-in-serverless-slack-app.png INDENT=1 CLASS=w75 ALT=Slack log command to view log history in Serverless Slack App

We can also see the history of specific commands and when they were launched. Try `/nc command_log convert` to see who is running your convert command.

CMS-IMAGECLASS IMAGE=/images/uploads/slack-command-to-see-log-for-serverless-slack-app-command.png INDENT=1 CLASS=w75 ALT=Slack command to display Serverless Slack App command log history

We can even see the history of specific users and the command they are running. Try `/nc user_log @userNameHere` to see their activity. 

CMS-IMAGECLASS IMAGE=/images/uploads/slack-command-for-user-log-for-serverless-slack-app.png INDENT=1 CLASS=W75 ALT=Serverless Slack App command to display username for Serverless Slack App

Let’s create a custom app inside of Commander and call it /currency

6. Here, instead of running /nc convert, we would want to run /currency convert. We do this by using Nimbella Commander’s [app_add](https://nimbella.com/docs/commander/slack/reference#app_add) command. The `app_add` command creates an app within Commander and exposes an API endpoint that Slack can use to send requests to. Run `/nc app_add currency /currency`

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-command-in-slack-to-run-serverless-slack-app.png INDENT=1 CLASS=W100 ALT=Serverless Slack App command to run Serverless Slack App

7. The URL above will be the Request URL or the Endpoint URL in our Slack APP. Now go to [https://api.slack.co/apps](https://api.slack.com/apps) and create a Currency App by clicking the “Create New App” button

CMS-IMAGECLASS IMAGE=/images/uploads/button-to-start-creating-serverless-slack-app.png INDENT=1 CLASS=W75 ALT=button to create Serverless Slack App in Slack

Call the app “Currency” and select the **Slack Workspace** you want to install this into.

CMS-IMAGECLASS IMAGE=/images/uploads/creating-serverless-slack-app-in-slack-app-section.png INDENT=1 CLASS=W75 ALT=creating Serverless Slack App in Slack App section

On the left side of the screen, look for the tab that says “Slash Commands”. Click that and click the “Create New Command” button that appears in the center of your screen.

CMS-IMAGECLASS IMAGE=/images/uploads/creating-slash-command-in-serverless-slack-app-section-in-slack.png INDENT=1 CLASS=w75 ALT=creating Slash command for Serverless Slack App in Slack section

In Command, add the Slash command /currency

In Requested URL, add the URL that generated Slack.

In Short Description, write that it’s a Currency Converter

Click the “Save” button at the bottom of your page when you’ve filled out these three sections.

CMS-IMAGECLASS IMAGE=/images/uploads/create-new-command-for-serverless-slack-app-in-slack.png INDENT=1 CLASS=W75 ALT=create new command for Serverless Slack App in Slack

Install the App into your workspace. You can do this by clicking the “Install App” tab in the left side of your screen and clicking the “Install App to Workspace” button that appears. 

CMS-IMAGECLASS IMAGE=/images/uploads/install-serverless-slack-app-into-slack.png INDENT=1 CLASS=w75 ALT=install-Serverless-Slack-App-in-Slack

You’ll be asked for permission to install it once you click it. Just click “Allow”. 

CMS-IMAGECLASS IMAGE=/images/uploads/give-slack-permission-to-install-serverless-slack-app.png INDENT=1 CLASS=w75 ALT=install Serverless Slack App in Slack

Once the Currency app is created and installed, go back to your Slack workspace and type `/currency` and you will see that it doesn’t have any commands yet

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-command-to-display-currency-info.png INDENT=1 CLASS=w75 ALT=Serverless Slack App command to display command info

Create the convert command and copy/paste the code like we did before

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-command-to-create-command.png INDENT=1 CLASS=w75 ALT=Serverless Slack App command to install Slash Command in Slack

Run the command `/currency convert usd inr` to see the result. 

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-command-to-convert-usd-to-inr-in-slack.png INDENT=1 CLASS=w75 ALT=Serverless Slack App command to convert usd to inr in Slack

The app now has a convert command and more commands can be added to the app with `command_create` command. Once done, your app can now be published to the Slack app directory.

## Why Commander?

1. As a developer, you will be focusing on writing just the business logic of your app  and you let the Commander app and Nimbella App do the other heavy lifting for you
2. You don’t have to download any external tools other than Slack. 
3. You would need to just publish your app and not worry about any other infrastructure. 
4. You wouldn’t have to worry about any configuration and can jump in right away by writing your own commands. 
5. You can install other command-sets that are open-sourced by running just a single command.
6. Along with having the ability to publish the Slack app, you also have the ability to publish them as Command-Sets. Doing this will allow others to contribute to your command-sets and allows you to make changes rapidly without waiting for any approval. 
7. You get access-control, logging and monitoring for free.
