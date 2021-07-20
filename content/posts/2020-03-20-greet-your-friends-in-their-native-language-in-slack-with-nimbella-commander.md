---
title: Greet your friends in their native language in Slack with Nimbella Commander
status: Published
date: 'March 25, 2020 4:00 PM'
postFeaturedImage: /images/uploads/translate-in-slack-header.png
excerpt: >-
  Our team at Nimbella has employees from all over the world that work together
  by talking on Slack. With all the different languages our teammates speak, we
  decided it would be fun to translate what we are saying so that we can share
  our thought in our teammate’s native tongues. With Nimbella Commander, you can
  type in your language and get it translated in any target language in one
  command to your Slack workspace.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    With Nimbella Commander, you can type in your language and get it translated
    in any target language in one command to your Slack workspace ✔
  shareImageUrl: /images/uploads/translate-in-slack-header.png
  title: How to Greet your Friends in Native Language on Slack? | Nimbella Blog
---
_“If you talk to a man in a language he understands, that goes to his head. If you talk to him in his own language, that goes to his heart.”
_

_‒Nelson Mandela
_

Our team at Nimbella has employees from all over the world that work together by talking on Slack. With all the different languages our teammates speak, we decided it would be fun to translate what we are saying so that we can share our thought in our teammate’s native tongues. With [Nimbella Commander](https://nimbella.com/integrations/commander), you can type in your language and get it translated in any target language in one command to your [Slack workspace](http://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0).

CMS-IMAGECLASS IMAGE=/images/uploads/translate-in-slack-command.png INDENT=0 CLASS=w50 ALT=translate command in slack translating chinese

In just 3 simple steps, I will show you have to install Commander, install the translate functionality, and run the command that will translate what you want to say in any language.

1. Add [Nimbella Commander to your Slack page](http://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). You can add it by searching “Nimbella” in the apps tab on Slack. You can also add it by [going to our official website](https://nimbella.com) and clicking the “Add to Slack” button.

CMS-IMAGECLASS IMAGE=/images/uploads/nimbella-commander-in-slack.png INDENT=1 CLASS=w100 ALT=slack app tab where you install nimbella commander

2. In order to get the translator, you’ll need to install the [translate Command Set](https://github.com/nimbella/command-sets) into the default app. Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Command Sets are installed into your Slack teams via the Nimbella Commander by typing the command `/nc csm_install translate` in your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/translate-in-slack-install.png INDENT=1 CLASS=w50 ALT=translate command being installed in slack

3. Finally, run the built-in command `/nc translate <text> [language]` to see the translated test.

CMS-IMAGECLASS IMAGE=/images/uploads/translate-in-slack-command.png INDENT=1 CLASS=w50 ALT=translate commander running in slack

You likely want other teammates in your Slack team to run this command. Nimbella Commander offers a neat feature to allow other users to run specific commands. For example, you can allow access to the translate command to other users using `/nc command_runners translate + @user1 + @user2`, substituting for “user1” and “user2” the Slack names of your teammates.

CMS-IMAGECLASS IMAGE=/images/uploads/translate-in-slack-user-permissions.png INDENT=0 CLASS=w75 ALT=translate command permissions

It’s worth also mentioning that you have access to an audit trail to see who’s run your commands. This is useful for administrators and team oversight where appropriate. 

Type `/nc command_log translate`

CMS-IMAGECLASS IMAGE=/images/uploads/translate-in-slack-command-log.png INDENT=0 CLASS=w100 ALT=translate slack commander command log

Using Nimbella’s access control you can also limit who can view and edit the code that implements a particular command. With Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don’t exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our community [Slack channel](https://app.slack.com/client/TL64TJWVB/DTK6BBZGD) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, then click this [click this link to add Commander to your Slack channel](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander)!

_Written by Chandan Rai ( _[_Twitter_](https://twitter.com/bhageena)_, _[_Medium_](https://medium.com/@bhageena)_)_
