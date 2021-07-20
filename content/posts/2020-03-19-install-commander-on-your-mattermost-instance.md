---
title: Install Commander on your Mattermost Instance
status: Published
date: 'August 10, 2020 4:00 PM'
postFeaturedImage: /images/uploads/blog-install-commander-on-your-mattermost-instance.jpg
excerpt: >-
  Nimbella Commander is your one-stop destination to create or run custom slash
  commands on  Mattermost or Slack. It also has a development and runtime
  framework built in so you can create and build your custom plugins and publish
  it as a Command Set for everyone to use. Our command building functionality
  will not only allow your developers to quickly design commands, but to also
  import our premade Command Sets without having to handle any backend. This
  will help all of your Mattermost teams to communicate much more effectively.
categories:
  - category: Commander
meta:
  description: >-
    Nimbella Commander has a development and runtime framework built in so you
    can create and build your custom plugins! ✔
  title: Install Commander on your Mattermost Instance ✔
---
[Nimbella Commander](https://nimbella.com/integrations/commander) is your one-stop destination to create or run custom slash commands on  [Mattermost](https://mattermost.com/) or [Slack](http://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). It also has a development and runtime framework built in so you can create and build your custom plugins and publish it as a [Command Set](https://github.com/nimbella/command-sets) for everyone to use. Our command building functionality will not only allow your developers to quickly design commands, but to also import our premade Command Sets without having to handle any backend. This will help all of your Mattermost teams to communicate much more effectively.

CMS-IMAGECLASS IMAGE=/images/uploads/ncinstallcs.png INDENT=0 CLASS=border w50 ALT=csm install translate

This blog aims to help you to install Commander on your Mattermost instance. I assume you have already installed and setup Mattermost and you are the admin, so you have the ability to create slash commands.

1. First, we need to add Commander as a slash command integration in Mattermost in order to use Commander. We can create a slash integration by clicking on the settings bar on the left side of your screen and then click on **Integrations**.

CMS-IMAGECLASS IMAGE=/images/uploads/mmintegrations.png INDENT=1 CLASS=border w50 ALT=Create a slash integration

2. Next, click on Slash Commands

CMS-IMAGECLASS IMAGE=/images/uploads/mmslash.png INDENT=1 CLASS=border w75 ALT=Click on Slash Commands

3. Click on the Add Slash Command button.

CMS-IMAGECLASS IMAGE=/images/uploads/mmaddslash.png INDENT=1 CLASS=border ALT=Add Slash Command

4. You would need to add just 1 slash command. Name the slash command  `/nc`. This slash command will be used to create, configure, and manage your Commander Account and run your custom commands. We add /nc like below. Note that the request URL needs to be https://apigcp.nimbella.io/api/v1/web/nc/portal/gateway\
   Once done, click on **Save**. 

CMS-IMAGECLASS IMAGE=/images/uploads/mmendpoint.png INDENT=1 CLASS=border w100 ALT=Add /nc

CMS-IMAGECLASS IMAGE=/images/uploads/mmendpoint2.png INDENT=1 CLASS=border ALT=Click on Save

5. That’s it! After saving, you should see that /nc is set up. Once this is done, click on “**Back to Mattermost**” to start using Commander.

CMS-IMAGECLASS IMAGE=/images/uploads/mmsetupcomplete.png INDENT=1 CLASS=border ALT=Back to Mattermost

6. Register your workspace with Commander by running  `/nc register`

CMS-IMAGECLASS IMAGE=/images/uploads/ncregister.png INDENT=1 CLASS=border w50 ALT=Register workspace with Commander

7. You can now go install your favorite [Command Sets](https://github.com/nimbella/command-sets).   

CMS-IMAGECLASS IMAGE=/images/uploads/ncinstallcs.png INDENT=1 CLASS=border w50 ALT=Install Command Sets

8. Once you’ve installed a Command Set, that code is yours to edit. You can edit the code by typing `/nc command_code <command_name>`

CMS-IMAGECLASS IMAGE=/images/uploads/nc-command-code-translate.png INDENT=1 CLASS=border w50 ALT=Edit the code

9. If there are certain commands you only want certain users to run, then you can type `/nc command_runners <command_name> + @user1 + @user2`. Substituting for “user1” and “user2” the Mattermost names of your teammates that should have access to the Commands.

CMS-IMAGECLASS IMAGE=/images/uploads/nc-commander-runner-translate.png INDENT=1 CLASS=border w50 ALT=Add Command Runners

10. You even have access to a log that can show you who is running your Command Sets. Type `/nc command_log <command_name>` into Mattermost to run this functionality. 

CMS-IMAGECLASS IMAGE=/images/uploads/nc-command-log-mattermost.png INDENT=1 CLASS=border w75 ALT=Show command log

 For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our community [Slack channel](https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc) or on [GitHub](https://github.com/nimbella/command-sets).
