---
title: How to Stay Updated with Coronavirus Statistics on Slack?
status: Published
date: 'March 18, 2020 4:00 PM'
postFeaturedImage: /images/uploads/header-image-corona-stats.png
excerpt: >-
  Everyone in our team in India was Googling the statistics of Coronavirus. So I
  created this command which has made it easy for our teams to be aware of the
  issue and still be able to focus on the task we needed to complete. We have
  found it very useful, therefore, I am sharing how you can run our Nimbella
  Commander corona_stats command in your Slack workspace.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    I am sharing how you can run our Nimbella Commander corona stats command in
    your Slack workspace ✔
  shareImageUrl: /images/uploads/header-image-corona-stats.png
  title: How to Stay Updated with Coronavirus Statistics on Slack?
---
_“After all it really is all of humanity that is under threat during a pandemic.”_

_\- Margaret Chan_

Everyone in our team in India was Googling the statistics of Coronavirus. So I created this command which has made it easy for our teams to be aware of the issue and still be able to focus on the task we needed to complete. We have found it very useful, therefore, I am sharing how you can run our [Nimbella Commander](https://nimbella.com/integrations/commander) corona_stats command in your [Slack workspace](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0).         

CMS-IMAGECLASS IMAGE=/images/uploads/corona-stats-being-displayed-on-slack.png INDENT=0 CLASS=w100 ALT=corona stats being displayed in slack with nimbella commander

In just 3 simple steps, we will install Commander into Slack, install the corona_stats command, run the command to see the current stats worldwide or in a specific country, allow other users to run the command and see the command logs or execution history.

1. Add [Nimbella Commander to your Slack page](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). You can add it by searching “Nimbella” in the apps tab on Slack. You can also add it by [going to our official website](https://nimbella.com) and clicking the “Add to Slack” button.

CMS-IMAGECLASS IMAGE=/images/uploads/nimbella-commander-being-added-to-slack-for-corona-stats.png INDENT=1 CLASS=w75 ALT=adding nimbella commander to slack in the apps tab in slack

2. In order to get the stats working for you, you’ll need to install the [corona_stats Command Set](https://github.com/nimbella/command-sets). Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Command Sets are installed into your Slack teams via the Nimbella Commander by typing the command `/nc csm_install corona_stats` in your Slack prompt. 

CMS-IMAGECLASS IMAGE=/images/uploads/corona-stats-being-added-to-commander-in-slack.png INDENT=1 CLASS=w50 ALT=corona stats being installed in slack with nimbella commander

3. Finally, run the command `/nc corona_stats [<countryName>]` to see current stats in the specified country.

CMS-IMAGECLASS IMAGE=/images/uploads/corona-stat-us-in-slack.png INDENT=1 CLASS=w80 ALT=corona stats being displayed in slack with Nimbella Commander

You likely want other teammates in your Slack team to run this command. Nimbella Commander offers a neat feature to allow other users to run specific commands. For example, you can allow access to the corona_stats command to all users using  `/nc command_runners corona_stats + anyone`

CMS-IMAGECLASS IMAGE=/images/uploads/corona-stats-functionality-being-given-to-everyone-on-slack.png INDENT=0 CLASS=w75 ALT=corona stats command permissions on slack

It’s worth also mentioning that you have access to an audit trail to see who’s run your commands. This is useful for administrators and team oversight where appropriate.

Type `/nc command_log corona_stats`

CMS-IMAGECLASS IMAGE=/images/uploads/corona-stats-command-log-in-slack-for-commander.png INDENT=0 CLASS=w100 ALT=corona stats command log in slack

Using Nimbella’s access control you can also limit who can view and edit the code that implements a particular command as well. With Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don’t exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our community [Slack channel](https://app.slack.com/client/TL64TJWVB/DTK6BBZGD) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, then [click this link to get started](https://slack.com/apps/AS833QXL0-nimbella-commander)!

_Written by Chandan Rai. (_[_Twitter_](https://twitter.com/bhageena)_, _[_Medium_](https://medium.com/@bhageena)_)_
