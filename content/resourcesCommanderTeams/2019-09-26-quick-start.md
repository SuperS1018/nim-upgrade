---
title: Overview
status: Published
index: '0'
anchor-subject:
  - anchor-item: []
    body: >-
      Commander is Nimbella's development platform for a variety of messaging
      system platforms including Microsoft Teams. With Commander, you can
      create, manage and run custom Teams commands without leaving the Microsoft
      Teams environment.
    title: What is Commander?
  - body: >-
      You can create Microsoft Teams commands to accomplish just about any web
      operation you can think of in Teams, such as:


      * Retrieve and display your billing statements from companies like Amazon
      AWS, Google Cloud, or Microsoft Azure.

      * Report signups for your website or social media.

      * Display sales to date.

      * Manage your DNS hostnames or SSL certificates.


      Commander also lets you initiate commands from webhooks, such as:


      * Something was uploaded to Dropbox.

      * A GitHub checkin occurs.

      * A system alert is triggered in a cloud monitoring service.


      Commander has other powerful features that administrators can control by
      issuing Commander slash commands in Teams:


      * Assign user roles and create user groups for your app.

      * Create secret values for command parameters that neither users nor Teams
      has access to.

      * View logs.

      * Import and export command sets.
    title: What can I do with it?
  - body: >-
      Here’s a diagram of how Commander works in the Microsoft Teams
      environment.


      CMS-IMAGECLASS IMAGE=/images/uploads/commanderteams.png INDENT=0 CLASS=w50
      ALT=How does Commander work


      Here’s how all these components fit together:


      The diagram above shows Commander interacts with Microsoft Teams using
      Azure Bot framework, AppInsights and Language Understanding Service
      (LUIS). Users interact with Commander Bot in Teams and Commander Bot that
      is running in Azure Cloud interacts with Commander running in Nimbella
      cloud.  


      After you install Commander, you can immediately start using it to create,
      install and run Teams commands.


      You can install a set of commands using **csm install** and you can create
      your own commands using **command create**. There’s no extra services or
      servers you need to run commands. The commands you install or create run
      in the Nimbella Serverless Cloud.


      Using Commander, you can install and create commands, edit their source
      code, and perform other administrative tasks, such as:


      * Manage administration user roles, edit command source code, and run
      commands.

      * Encrypt values for sensitive information used as command parameters so
      Teams and users never see it.


      See the sections below for more information about Commander features that
      enhance Microsoft Teams with custom commands.


      For a tutorial with detailed steps on how to create custom commands, see
      the [Quickstart
      Guide](/docs/commander/microsoft-teams/quickstart#quickstart-guide).
    title: How does it work?
  - body: >-
      Commander allows you to create and manage custom commands in Teams itself.

      With Commander, your commands run on the Nimbella Cloud. There's nothing
      to install, no servers to manage, and no services you need to provision.


      Commander includes advanced features such as:


      * [User
      Roles](/docs/commander/microsoft-teams/guide#about-user-roles) that
      let you control which Teams users can run commands, edit source code or
      administer your Teams commands.

      * [Groups](/docs/commander/microsoft-teams/guide#about-user-groups)
      that allow you to group users, making it easier to manage access rights.

      * [Secrets](/docs/commander/microsoft-teams/guide#secrets) so you can
      encrypt API keys and passwords and keep them out of your source code.

      * [Command Sets](/docs/commander/microsoft-teams/guide#command-sets)
      allow you to load commands from external locations and export commands to
      share with others

      * [Logs](/docs/commander/microsoft-teams/guide#logs) let you see the
      actions that users, tasks, and triggers have taken.


      Commands can be created by app developers or even operations specialists.
    title: Why use it to manage custom Teams commands?
  - body: >-
      You can start using Commander for free, with limitations. See the [pricing
      page](https://nimbella.com/pricing/commander#microsoft-teams) for
      information about terms and upgrades.


      Here's what you can do with the free version of Commander:


      * Implement your custom commands as JavaScript source code, which is
      executed directly as serverless functions in the Nimbella Cloud.

      * Edit and debug the JavaScript serverless function code.

      * Set access roles for users or groups, such as which Teams users can run
      a command and which can edit code.

      * Manage secret values for passwords and API keys.

      * View logs for users, commands or apps.

      * Install prebuilt sets of commands, created by Nimbella or third parties,
      directly from Github or other web locations.


      With a Pro upgrade, you can:


      * Create apps with custom runtimes.

      * Develop commands in languages other than JavaScript.


      Commander is one example of our main platform, Nimbella. [See what else
      Nimbella can do](https://nimbella.com).
    title: How do I get it?
meta:
  description: >-
    Commander is Nimbella's development platform for messaging platforms,
    including Microsoft Teams. With Commander, you can create and manage custom
    Teams commands without leaving the Teams environment.
  title: Commander Resources - Overview
---

