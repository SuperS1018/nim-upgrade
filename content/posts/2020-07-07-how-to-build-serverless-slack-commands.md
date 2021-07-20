---
title: How to Build Serverless Slack Apps and Commands
status: Published
date: 'July 07, 2020 4:00 PM'
postFeaturedImage: /images/uploads/how-to-build-serverless-slack-commands-by-rodric-header.png
excerpt: Learn how to build Serverless apps and slash commands for Slack.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: Learn how to build Serverless slash commands for Slack.
  shareImageUrl: /images/uploads/how-to-build-serverless-slack-commands-by-rodric-header.png
  title: How to Build Serverless Slack Commands
---
I was recently looking for articles that describe how to build custom Slack apps, bots, and commands. I found several informative articles that describe using Serverless technology for precisely creating a Slack bot (you can see [this](https://medium.com/slack-developer-blog/build-a-serverless-slack-bot-in-9-minutes-with-node-js-and-stdlib-b993cfa15358), [this ](https://www.freecodecamp.org/news/make-a-serverless-slack-app/)and [this ](https://github.com/johnagan/serverless-slack-app)for example). These last blogs contain a lot of details, but they also cover a lot of unnecessary steps.

## Create a Slack command in seconds

I want to introduce you to [Nimbella Commander](https://nimbella.com/integrations/commander) as the better, faster, and easier way to build Slack bots and Slack commands. Nimbella Commander requires no new accounts to set up, no command-line tools to start, and you will be done creating your first Slack command in seconds.

One-click, two Slack commands, and profit. I challenge you to find a better, faster, or easier methodology.

1. Click here and [install Nimbella Commander into your Slack team](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander). I will tell you more about Nimbella Commander shortly.
2. Create your first Slack command by entering the following text into your Slack prompt: `/nc command_create hello`
3. Run the Slack command you just created by typing the following text in your Slack prompt: `/nc hello`

CMS-IMAGECLASS IMAGE=/images/uploads/build-serverless-slack-commands.png INDENT=0 CLASS=w75 border ALT=build serverless Slack commands

You may immediately run a newly created Slack command because [Nimbella Commander](https://nimbella.com/integrations/commander) generates [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) for you. You can edit the code by clicking the link shown in your Slack team. The code editor is pictured below.

**You are effectively done.** 

The whole process should take you no more than a minute to complete. Keep reading for more about Nimbella Commander, including how it works, and some other features it offers.

- - -

## How do Serverless Slack Apps run using Nimbella Commander?

Ok, now you know how to create a Slack command using Nimbella’s commander. But you should also know that **when you create Slack commands with Nimbella Commander, your code runs as a Serverless app.** This means there are no servers for you to provision, manage, or operate.

> In fact, Serverless means there is no infrastructure at all for you to think about. You can focus on the value you are adding to your Slack team, the way innovation should be.

**You can create Slack commands using the Nimbella built-in editor which opens in your browser. No additional tools or accounts needed. **

Our browser editor supports JavaScript, Python, and Go. Commander generates boilerplate code that consists of the main method which wraps the actual implementation of the command in the function called "_command".This is shown in the code editor screenshot below.

CMS-IMAGECLASS IMAGE=/images/uploads/edit-slack-commands.png INDENT=0 CLASS=w100 ALT=edit slack commands

CMS-CAPTION ALIGN=center CONTENT=Nimbella Commander code editor available in your browser.

You can code the logic necessary to implement your command, directly in the editor. 

### Examples and templates of Slack Apps

There are several examples and templates available on GitHub, from a simple Slack [command](https://github.com/nimbella/command-sets/blob/master/echo/packages/echo/echo.js) that echoes input parameters, to more complex ones that perform [timezone conversion](https://github.com/nimbella/command-sets/blob/master/times/packages/times/times.js) or retrieve worldwide [COVID-19 statistics](https://github.com/nimbella/command-sets/blob/master/corona_stats/packages/corona_stats/corona_stats.js). 

There are also more [complex Slack apps](https://github.com/nimbella/command-sets#Catalog-of-Command-Sets) that allow you to:

* Manage infrastructure on AWS or DigitalOcean.
* inspect your Cloud spending.
* Manage GitHub or Jira projects.
* Manage inventory in your Shopify account.

These last examples are just to name a few. All of these are readily available as [open source Nimbella Commander apps](https://github.com/nimbella/command-sets#Catalog-of-Command-Sets) you can readily install and use from your Slack workspace. Best of all, since the code is yours, you can customize the apps to your needs.

### Go PRO with Slack Apps with Nimbella

If you want to create more elaborate Slack commands, install dependencies, or use other languages (e.g., PHP, Java, Swift), you can develop your Slack commands offline by [creating a Nimbella account](https://nimbella-apigcp.nimbella.io/login.html), pushing your code to GitHub and [installing the commands directly from your Slack prompt](https://nimbella.com/docs/commander/slack/reference#csm_install).

- - -

## Secrets Management and Auditing Capabilities.

We initially developed Nimbella Commander for our own needs within Nimbella. One of our earliest objectives was increasing visibility into our spending with various cloud providers. We created commands that our developers could run to see current and projected monthly cloud spending and usage. **This helped us reduce our cloud expenses by over 50%**. 

We thought this could be useful for many other developers out there, so we [open-sourced](https://github.com/nimbella/command-sets/tree/master/billing) these commands and [many others, on GitHub](https://github.com/nimbella/command-sets).

### API keys and secrets in Slack apps

While developing the cloud spending Slack commands for our use at Nimbella, we found that we needed to handle API secrets while avoiding sharing API keys in Slack, or hard coding them in the implementations. We accomplished this by adding Secrets Management which works by uniquely encrypting API keys entirely outside of Slack, and then attaching the encrypted values to Slack commands. 

> When you create Slack apps with Nimbella, secrets are automatically decrypted just before commands run, so the code you write can readily use secrets and API keys, without doing additional work.

### Limiting user access to certain commands when coding as a team

Another feature in Nimbella Commander is the ability to limit access to certain Slack commands through explicit access control and entitlement. An administrator must grant a Slack team member the rights to run a specific command or to edit the code for a command. 

> The access control management is done entirely and conveniently from Slack [using slash commands built into Nimbella Commander](https://nimbella.com/docs/commander/slack/reference#command_runners). 

Slack users may also be organized into groups for easier management of access rights. And, Nimbella Commander provides an [audit log](https://nimbella.com/docs/commander/slack/reference#command_log) so that administrators can see which commands were created, edited, or run, and by whom.

- - -

## Create your Slack App with Nimbella commander

[**Nimbella Commander**](https://nimbella.com/integrations/commander)** allows you to create Slack apps, bots and commands faster than any other technology available today.** It combines the power of Serverless with a superb developer experience so that you can develop and create rich Slack apps from the tools you are already using daily.

Nimbella Commander is collaborative by its very nature. Multiple developers can work together in shared Slack channels to build, debug, and share Slack apps with their teams. All without servers or infrastructure. It’s your logic, your code, your commands, and nothing else.

### Share your apps with us

If you read this far, you now have all the knowledge you need to create a Slack app or command of your own, and with ease using Nimbella’s Serverless platform. What commands will you create? Tell us all about the commands you’re creating, and share  your ideas and feedback with us either on [Twitter](https://twitter.com/nimbella), or in [our community Slack](https://nimbella.com/slack).

You can read more blogs on related topics:

* [How to Set up your Serverless Environment and Get Started in Less than 2 Minutes!](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes)
* [How to Quickly Deploy Stateful Serverless Apps with Nimbella?](https://nimbella.com/blog/how-to-quickly-deploy-stateful-serverless-apps-with-nimbella)
* [How to Build a Serverless Slack Command in minutes?](https://nimbella.com/blog/how-to-build-a-serverless-slack-command-in-minutes)
* [How to Build a Stateful Serverless Cloud Web Application?](https://nimbella.com/blog/how-to-build-a-stateful-serverless-cloud-web-application)
* [How to use Slack Effectively with Nimbella Commander?](https://nimbella.com/blog/how-to-use-slack-effectively-with-nimbella-commander)

Authored by: Rodric Rabbah ([Twitter](https://twitter.com/rabbah), [LinkedIn](https://www.linkedin.com/in/rodric/), [GitHub](https://github.com/rabbah/), [Medium](https://medium.com/@rabbah))
