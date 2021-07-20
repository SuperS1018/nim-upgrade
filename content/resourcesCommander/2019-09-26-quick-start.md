---
title: Overview
status: Published
index: '0'
anchor-subject:
  - anchor-item: []
    body: >-
      Commander is Nimbella's development platform for Slack. With Commander,
      you can create and manage custom Slack apps and commands without leaving
      the Slack environment.
    title: What is Commander?
  - body: >-
      You can create Slack slash commands to accomplish just about any web
      operation you can think of in Slack, such as:


      * Retrieve and display your billing statements from companies like Amazon
      AWS, Google Cloud, or Microsoft Azure.

      * Report signups for your website or social media.

      * Display sales to date.

      * Manage your DNS hostnames or SSL certificates.


      With Commander, you can schedule recurring tasks for your slash commands,
      such as the following:


      * Post a summary of your cloud bills to a Slack channel every morning.

      * Display the number of GitHub issues every morning and evening.

      * Check customer support response times every 30 minutes.


      Commander also lets you initiate slash commands from webhooks, such as:


      * Something was uploaded to Dropbox.

      * A GitHub checkin occurs.

      * A system alert is triggered in a cloud monitoring service.


      Commander has other powerful features that administrators can control by
      issuing Commander slash commands in Slack:


      * Assign user roles and create user groups for your app.

      * Create secret values for command parameters that neither users nor Slack
      has access to.

      * View logs.

      * Import and export command sets.
    title: What can I do with it?
  - body: >-
      Here’s a diagram of how Commander works in the Slack environment.


      CMS-IMAGECLASS IMAGE=/images/uploads/what-do-commander-1.png INDENT=0
      CLASS=w50 ALT=How does Commander work


      Here’s how all these components fit together:


      After you install Commander, you can immediately start using the /nc
      command to create, install and run Slack slash commands.


      You can install a set of commands using **/nc csm_install** and you can
      create your own commands using /nc command_create. There’s no extra
      services or servers you need to run commands. The commands you install or
      create run in the Nimbella Serverless Cloud.


      Using Commander, you can install and create commands, edit their source
      code, and perform other administrative tasks, such as:


      * Manage administration user roles, edit command source code, and run
      slash commands.

      * Create scheduled tasks that run commands without user input.

      * Create triggers that run commands when triggered by external webhooks.

      * Encrypt values for sensitive information used as command parameters so
      Slack and users never see it.


      See the sections below for more information about Commander features that
      enhance Slack with custom commands.


      The above diagram shows an example of a Commander slash command an
      administrator would use to create a command for your custom app. The
      command prefix **/nc** identifies all slash commands that belong to the
      Commander app, and **command_create** creates a custom slash command
      called **print** with one parameter, **<msg>**. The output from the
      command **/nc command_create print <msg>** is a link to the Nimbella Cloud
      to edit the source code for this new command.


      Users (or other commands like tasks and triggers) who have been granted
      permission to run the print command would enter a slash command such as
      **/nc print “Hello World!”**.


      For a tutorial with detailed steps on how to create a custom app and
      custom commands, see the [Quickstart
      Guide](/docs/commander/slack/quickstart).
    title: How does it work?
  - body: >-
      Slack doesn't provide an environment to develop Slack apps or a cloud that
      runs Slack apps. With Commander, your commands run on the Nimbella Cloud.
      There's nothing to install, no servers to manage, and no services you need
      to provision.


      Commander builds extra capabilities into Slack app components:


      * [Commands](/docs/commander/slack/guide#about-commands) that include
      built-in security and logging.

      * [Tasks](/docs/commander/slack/guide#tasks) that run your commands on a
      schedule or at a rate, such as once a day.

      * [Triggers](/docs/commander/slack/guide#triggers) that enable other cloud
      services to call your Slack commands.


      Commander includes advanced features such as:


      * [User Roles](/docs/commander/slack/guide#about-user-roles) that let you
      control which Slack users can run commands, edit source code or administer
      your Slack commands.

      * [Groups](/docs/commander/slack/guide#about-user-groups) that allow you to
      group users, making it easier to manage access rights.

      * [Secrets](/docs/commander/slack/guide#secrets) so you can encrypt API
      keys and passwords and keep them out of your source code.

      * [Command Sets](/docs/commander/slack/guide#command-sets) allow you to
      load commands from external locations and export commands to share with
      others

      * [Logs](/docs/commander/slack/guide#logs) let you see the actions that
      users, tasks, and triggers have taken.


      Commands can be created by app developers or even operations specialists.
    title: Why use it to manage custom Slack commands?
  - body: >-
      You can start using Commander for free, with limitations. See the [pricing
      page](https://nimbella.com/pricing/commander) for information about terms
      and upgrades.


      Here's what you can do with the free version of Commander:


      * Implement your custom commands as JavaScript source code, which is
      executed directly as serverless functions in the Nimbella Cloud.

      * Edit and debug the JavaScript serverless function code.

      * Set access roles for users or groups, such as which Slack users can run
      a command and which can edit code.

      * Manage secret values for passwords and API keys.

      * View logs for users, commands or apps.

      * Install prebuilt sets of commands, created by Nimbella or third parties,
      directly from Github or other web locations.


      With a Pro upgrade, you can:


      * Create apps with custom runtimes.

      * Create tasks that run commands on a given schedule or at a given rate.

      * Create triggers that can be called from external webhooks.

      * Develop commands in languages other than JavaScript.


      Commander is one example of our main platform, Nimbella. [See what else
      Nimbella can do](https://nimbella.com).
    title: How do I get it?
meta:
  description: >-
    Nimbella Commander provides easy and fast development of custom apps and
    commands without leaving the Slack environment. Read more in the
    documentation
  title: Resources and Documentation for Slack Commander
---

