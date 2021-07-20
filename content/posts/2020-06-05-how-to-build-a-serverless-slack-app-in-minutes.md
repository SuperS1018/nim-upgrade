---
title: How to Build a Serverless Slack App in Minutes.
status: Published
date: 'June 05, 2020 4:00 PM'
postFeaturedImage: >-
  /images/uploads/build-a-serverless-slack-app-in-minutes-nikhils-blog-header.png
excerpt: Learn how to build a Serverless Slack App in Minutes.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    This blog illustrates how to create a Serverless Slack app using Nimbella
    Commander, avoiding any effort associated with an infrastructure for your
    APIs ✔
  shareImageUrl: >-
    /images/uploads/build-a-serverless-slack-app-in-minutes-nikhils-blog-header.png
  title: How to Build a Serverless Slack App in Minutes? | Nimbella Blog
---
This blog is a continuation of “[How to Build a Serverless Slack Slash Command in Minutes](https://nimbella.com/blog/how-to-build-a-serverless-slack-command-in-minutes)”. If you haven’t already read that blog, I recommend you read it first to gain a good understanding of the basics of Nimbella Commander.

Once you have learned the basics of Nimbella Commander and how to create and run commands in Slack, you can start building serverless apps in Slack. Using Nimbella Commander, you don’t have to worry about any of the infrastructure associated with a server. All you have to focus on is your code logic! Nimbella Commander makes it even easier by enabling you to build your serverless app in Slack without ever leaving the Slack environment. Once you’ve finished creating your first serverless app, we’ll show you how to publish your code as a command-set. This will allow other developers to install your commands on Slack and other messaging platforms! 

This blog assumes you have installed Nimbella Commander for Slack into your workspace.

**This blog covers the following topics:
**

* Creating a serverless custom app in Slack
* Sharing your commands via GitHub and auditing usages from Slack commands

## Currency Converter App

You will see the ease of using Nimbella Commander by seeing how to build a currency converter slack app. The app will consist of a single slash command called “convert” which requires 2 mandatory parameters (“from” and “to”) and converts the “from” currency to “to” currency. The command will look like this: 

`/currency convert usd eur`

To begin, create an app within Nimbella Commander. This creates a secure serverless API endpoint which will be your app endpoint that Slack will send requests to. This avoids the typical need to create an API for your app manually by logging into any of the cloud provider’s serverless consoles.   

To create an app, we will use the Nimbella Commander  [app_add ](https://nimbella.com/docs/commander/slack/reference#app_add)command. Run `/nc app_add currency /currency`

CMS-IMAGECLASS IMAGE=/images/uploads/slack-app-currency.png INDENT=0 CLASS=w100 ALT=serverless slack app

Take a note of the URL provided by Nimbella Commander, above. This URL will be the Request URL or the Endpoint URL in our Slack APP. 

Next, let’s create a slack app. Go to [https://api.slack.co/apps](https://api.slack.com/apps) and create an app by following the steps shown below:

CMS-ANIMATEDGIF IMAGE=/images/uploads/slack-serverless-app-gif.gif INDENT=0 WIDTH=100

Please follow these steps to create an app in Slack:

1. Click the “Create New App” button
2. Call the app “Currency” and select the **Slack Workspace** you want to install this into.
3. On the left side of the screen, locate and click the tab labeled “Slash Commands”.  
4. Then click the “Create New Command” button that appears in the center of your screen.
5. In Command, add the Slash command /currency. In Requested URL, add the URL that Nimbella Commander provided in response to our “app_add” command, above. In Short Description, write that it’s a Currency Converter. Click the “Save” button at the bottom of your page when you’ve filled out these three sections.
   Make sure you’ve checked “**Escape channels, users, and links sent to your app**”
6. Install the App into your workspace. You can do this by clicking the “Install App” tab on the left side of your screen and clicking the “Install App to Workspace” button that appears. 
7. You’ll be asked for permission to install it once you click it. Just click “Allow”. 

Once the Currency app is created and installed, go back to your slack workspace and type “/currency” and you will see that it doesn’t have any commands yet. When you type “/currency”, a request is sent to the API endpoint you created with the “app_add” command. 

CMS-IMAGECLASS IMAGE=/images/uploads/slack-app-currency-run.png INDENT=0 CLASS=w100 ALT=serverless slack app

Create the convert command by typing** /nc command_create convert <from><to>**. 

CMS-IMAGECLASS IMAGE=/images/uploads/currency-slack-app-ran-it-2.png INDENT=0 CLASS=w100 ALT=serverless slack app

Now, let's write the **code for the currency converter**. We will use the exchange-rates-api npm package to convert the currency. You can find the source of the command [here](https://gist.github.com/niks3089/14848e80ea837791ec1f84710d06b03b). Copy the code from the link and paste it over all the code found in the page that pulls up when you click “edit the code”.

CMS-IMAGECLASS IMAGE=/images/uploads/slack-code-for-currency.png INDENT=0 CLASS=w100 ALT=serverless slack app

Once this is done, press “Save”, go back to your Slack prompt and run the command `/currency convert usd eur`. As shown below, the command converts 1 USD to Euro. 

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-slack-app-run.png INDENT=0 CLASS=w100 ALT=serverless

The app now has a convert command and more commands can be added to the app with command_create command. Once done, your app can be used within your team or you can choose to publish it to the Slack app directory for the general public.

## Publish your commands as Command-set:

After you publish your Slack app, you can also publish related commands as Command-Sets in Github in Nimbella's Command Set Registry repo. This is similar to the npm registry and contains a collection of command-sets. This way, anyone can install your commands by running, /nc csm_install currency in their slack. 

You can also publish your command-set in your repos as well. I have created a public command-set for currency here which anyone can install with /nc csm_install github:niks3089/currency-command-set

CMS-IMAGECLASS IMAGE=/images/uploads/slack-serverless-app-history-32q.png INDENT=0 CLASS=w100 ALT=serverless

The advantages of publishing your command within a Command-Set: 

You can write your commands once and run it on other messaging platforms such as Teams (support for Mattermost is planned)

It is easier to add, make changes, and update your commands. You wouldn’t have to wait for the approval and can simply update with “csm_update”

As command-sets, you get built-in access control, logging, and debugging as explained in Blog 1. 

## Summary

This blog illustrated how to create a Serverless Slack app using Nimbella Commander. This process is agnostic of  Cloud providers and avoided any effort associated with an infrastructure for your APIs. Nimbella Commander enables you to focus solely on writing your business logic, which allows you to developer Slack apps much faster than the traditional way. Our plans are to make Nimbella Commander a cross-platform tool so you write a command once, deploy it nowhere, and run it from anywhere. Stay tuned! 

For more information about Nimbella Commander, [visit our website](https://nimbella.com/integrations/commander). We’d love to hear from you via our [community Slack channel](https://nimbella.com/slack) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, just [click this link to get started](https://nimbella.com/commander/slack/install?version=2)!

Written by Nikhil
([medium](https://medium.com/@niks3089))
