---
title: See the time in different cities on Slack with Nimbella Commander
status: Published
date: 'March 31, 2020 4:00 PM'
postFeaturedImage: /images/uploads/display-times-in-slack-header.png
excerpt: >-
  Have you ever wanted to see what time it is in a particular city? With
  Nimbella Commander, you can find out what time it is in any part of the world
  in one command in your Slack workspace.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    With Nimbella Commander, you can find out what time it is in any part of the
    world in one command in your Slack workspace ✔
  shareImageUrl: /images/uploads/display-times-in-slack-header.png
  title: How to Setup Multiple Time Zones on your Slack Workspace?
---
_“A global awakening can not happen. We all live in different time zones.”
_

_―Ljupka Cvetanova, **The New Land**
_

Have you ever wanted to see what time it is in a particular city before reaching out to a friend who lives in that city? Maybe you needed to set up a reasonable time to schedule a meeting with coworkers who live in different parts of the world. With [Nimbella Commander](https://nimbella.com/integrations/commander), you can find out what time it is in any part of the world in one command in your [Slack workspace](https://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0), which will allow you and your team to have an easier time to schedule discussions. 

CMS-IMAGECLASS IMAGE=/images/uploads/display-times-in-slack-with-nimbella-commander.png INDENT=0 CLASS=w75 ALT=

Additionally, I’ll show you how to set the default cities so that you don’t have to specify the city names every time you run the command.

In just 3 simple steps, we will install Commander into Slack, install the times command, and run the command to see the current time in different cities. I’ll also teach you how to edit code to set the default city names, allow other users to run the command and see the command logs or execution history.

1. Add [Nimbella Commander to your Slack page](https://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). You can add it by searching “Nimbella” in the apps tab on Slack. You can also add it by [going to our official website](https://nimbella.com) and clicking the “Add to Slack” button.

CMS-IMAGECLASS IMAGE=/images/uploads/install-nimbella-commander-into-slack.png INDENT=1 CLASS=w100 ALT=display time in slack by installing commander into slack

2. In order to get times working, you’ll need to install the [translate Command Set](https://github.com/nimbella/command-sets) into the default app. Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Command Sets are installed into your Slack teams via the Nimbella Commander by typing the command `/nc csm_install times` in your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/install-times-into-slack-to-display-times-in-slack.png INDENT=1 CLASS=w50 ALT=display time in slack installing times with commander in slack

3. Finally, run the built-in command `/nc times [<comma-separated-city-list>]` to see current time in specific cities.

CMS-IMAGECLASS IMAGE=/images/uploads/display-times-in-slack-with-nimbella-commander-final.png INDENT=1 CLASS=w50 ALT=display times in slack

If you don’t like specifying cities list every time you run the command and you have a predefined list of cities. You can change the default city list by running `/nc command_code times`

CMS-IMAGECLASS IMAGE=/images/uploads/edit-times-code-in-slack.png INDENT=0 CLASS=w50 ALT=display time in slack by editing the code

Clicking on **edit the code** link will lead you to a new browser tab.

CMS-IMAGECLASS IMAGE=/images/uploads/code-for-times-in-slack.png INDENT=0 CLASS=w75 ALT=display time in slack by hard-coding locations

You can change the very first code line to include your desired cities list, by default it’s 'delhi, rome, new york, los angeles'.

Now only running the `/nc times` will show current time in those cities.

CMS-IMAGECLASS IMAGE=/images/uploads/display-times-in-slack-with-nimbella-commander-hardcode.png INDENT=0 CLASS=w50 ALT=display time in slack

You likely want other teammates in your Slack team to run this command. Nimbella Commander offers a neat feature to allow other users to run specific commands. For example, you can allow access to the translate command to other users using `/nc command_runners times + @user1 + @user2`, substituting for “user1” and “user2” the Slack names of your teammates.

CMS-IMAGECLASS IMAGE=/images/uploads/display-time-in-slack-and-who-runs-command.png INDENT=0 CLASS=w50 ALT=display times in slack and control who can display times in slack

It’s worth also mentioning that you have access to an audit trail to see who’s run your commands. This is useful for administrators and team oversight where appropriate.

Type `/nc command_log times`

CMS-IMAGECLASS IMAGE=/images/uploads/display-time-in-slack-and-see-logs-of-who-ran-command.png INDENT=0 CLASS=w100 ALT=display time in slack and see who is running the command

Using Nimbella’s access control you can also limit who can view and edit the code that implements a particular command as well. With Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don’t exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our [community Slack channel](https://nimbella.com/slack) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, then [click this link to get started](https://slack.com/apps/AS833QXL0-nimbella-commander)!

Written by Chandan Rai ([Twitter](https://twitter.com/bhageena), [Medium](https://medium.com/@bhageena))
