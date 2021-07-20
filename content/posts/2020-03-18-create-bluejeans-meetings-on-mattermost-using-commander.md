---
title: Create BlueJeans meetings on Mattermost using Commander
status: Published
date: 'March 18, 2020 4:00 PM'
postFeaturedImage: ''
excerpt: >-
  Nimbella Commander is your one-stop destination to create or run custom slash
  commands on  Mattermost or Slack. It also has a development and runtime
  framework built in so you can create and build your custom plugins and publish
  it as a Command Set for everyone to use.  Our command building functionality
  will not only allow your developers to quickly design commands, but to also
  import our premade Command Sets without having to handle any backend. This
  will help all of your Mattermost teams to communicate much more effectively.
categories:
  - category: Commander
meta:
  description: >-
    Nimbella Commander is your one-stop destination to create or run custom
    slash commands on  Mattermost or Slack ✔
  title: Create BlueJeans meetings on Mattermost using Commander
---
[Nimbella Commander](https://nimbella.com/integrations/commander) is your one-stop destination to create or run custom slash commands on  [Mattermost](https://mattermost.com/) or [Slack](http://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). It also has a development and runtime framework built in so you can create and build your custom plugins and publish it as a [Command Set](https://github.com/nimbella/command-sets) for everyone to use.  Our command building functionality will not only allow your developers to quickly design commands, but to also import our premade Command Sets without having to handle any backend. This will help all of your Mattermost teams to communicate much more effectively.

One such Command Set we have written is [BlueJeans](https://github.com/nimbella/command-sets/tree/master/bluejeans). The BlueJeans Command Set allows you to create, manage, list, and cancel BlueJeans meetings. Here, I will show you how to install and use the BlueJeans Command Set on Mattermost. I assume you have already installed and set up Commander on Mattermost and if you’ve not, you can follow the instructions on how to install it [here](https://nimbella.com/blog/install-commander-on-your-mattermost-instance)

1. In order to use BlueJeans Command Set, you need to have a BlueJeans account enabled in order to run the BlueJeans commands. You would need to send an [email](mailto:Support@BlueJeans.com) to their support. You would be receiving 2 keys which you will be feeding to Commander as bluejeansAppKey and bluejeansAppSecret. How to do that is described in detail below. 
2. Run `/nc csm_install bluejeans` to install [BlueJeans](https://github.com/nimbella/command-sets/tree/master/bluejeans) Command Set.

CMS-IMAGECLASS IMAGE=/images/uploads/ncregister.png INDENT=1 CLASS=border w50 ALT=Intall BlueJeans Command Set

3. See the commands installed within your Command Sets by running `/nc csm_info bluejeans`. You can also run `/nc command_list` to list all the commands installed in your Default App.

CMS-IMAGECLASS IMAGE=/images/uploads/nccommandlist.png INDENT=1 CLASS=border ALT=See commands installed

4. Next, we need to let BlueJeans commands know about the BlueJeans API keys. Specifically, the API keys you generated earlier for the BlueJeans API will be encrypted (outside of Mattermost) and attached to the slash command. To do this, type `/nc secret_create` to bring up the Nimbella Secret Creator. We’re creating the secrets outside of Mattermost so that Mattermost will only see encrypted strings and not your API keys. When you run the secret command, you will see an output that looks like this:

CMS-IMAGECLASS IMAGE=/images/uploads/ncsecretcreate.png INDENT=1 CLASS=border w50 ALT=Secret Create

5. Click on the Secret Creator link to be redirected to the page which encrypts your API keys. 

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-secret-creator-for-devops.png INDENT=1 CLASS=undefined ALT=Click on the Secret Creator link

6. Add your bluejeansAppKey and bluejeansAppSecret from Step 1 to the fields in the Secret Creator as illustrated in the following figure. Next, click the “Make Secrets” button to generate the commands you’ll need to copy and paste into your Mattermost prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/bluejeans-secret-creator-for-devops-bluejeansapikey.png INDENT=1 CLASS=undefined ALT=Add bluejeansAppKey and bluejeansAppSecret

7. After clicking the “Make Secrets” button, the commands you’ll need to run on your Mattermost page will appear. Copy each command one at a time and paste them into Mattermost. This will take your Application Key and Application Secret and apply them to your nc app. (Note: I have stripped the secret. It's usually pretty long) 

CMS-IMAGECLASS IMAGE=/images/uploads/bluejeans-secret-creator-devops-apikey-applicationkey.png INDENT=1 CLASS=undefined ALT=Apply Application Key and Application Secret to nc app

CMS-IMAGECLASS IMAGE=/images/uploads/ncsecretadd.png INDENT=1 CLASS=border w75 ALT=Secret add bluejeansAppKey

8. Now you can create a BlueJeans meeting by running the `/nc bluejeans_create` command as shown below. The command also accepts optional parameters to specify invitees and date and of the meeting. Note that the date format is “mm/dd/yy” and the time is in UTC.  

CMS-IMAGECLASS IMAGE=/images/uploads/ncbluejeanscreate.png INDENT=1 CLASS=border ALT=bluejeans create

   Once the meeting is created, you will get an email about it

CMS-IMAGECLASS IMAGE=/images/uploads/email-after-meeting-created.png INDENT=1 CLASS=undefined ALT=Get email after meeting is created

9. You can list all the meetings with `/nc bluejeans_list`

CMS-IMAGECLASS IMAGE=/images/uploads/ncbluejeanslist.png INDENT=1 CLASS=border w75 ALT=List all meetings

10. You can also cancel the meetings with `/nc bluejeans_cancel <meeting-id> <cancellation message>`. Both meeting ID and cancellation message is required

CMS-IMAGECLASS IMAGE=/images/uploads/ncbluejeanscancel.png INDENT=1 CLASS=border w75 ALT=bluejeans cancel

   If and when the meeting is canceled, you will receive an email about it.

CMS-IMAGECLASS IMAGE=/images/uploads/receive-email.png INDENT=1 CLASS=border w75 ALT=Receive email after meeting canceled

11. We also have a helper command `/nc bluejeans` which lists all the above commands with usage.

CMS-IMAGECLASS IMAGE=/images/uploads/ncbluejeans.png INDENT=1 CLASS=border ALT=Helper Command

12. Once you’ve installed a Command Set, that code is yours to edit. You can edit the code by typing `/nc command_code bluejeans_create`

CMS-IMAGECLASS IMAGE=/images/uploads/nc-command-code-bluejeans-create.png INDENT=1 CLASS=border w50 ALT=Edit BlueJeans Code

Click on “edit the code” link above. Change the code and press save. Re-run the command to see your changes take effect. I changed by `bluejeans_create` command to just print a message

CMS-IMAGECLASS IMAGE=/images/uploads/nc-bluejeans-create.png INDENT=1 CLASS=border w50 ALT=Print a message

13. You can also revert your changes or update your Command Set to get the latest changes by running `/nc csm_update bluejeans`

CMS-IMAGECLASS IMAGE=/images/uploads/nc-csm-update-bluejeans.png INDENT=1 CLASS=border w50 ALT=Revert or update Command Set

14. If you want only certain users to run the bluejeans command, then you can type `/nc command_runners <command_name> + @user1 + @user2`. Substituting for “user1” and “user2” the Mattermost names of your teammates that should have access to the Commands

CMS-IMAGECLASS IMAGE=/images/uploads/nc-command-runners-bluejeans-create.png INDENT=1 CLASS=border w75 ALT=Add runners

15. You even have access to a log that can show you who is running your Bluejeans Commands. Type `/nc command_log <command_name>` into Mattermost to run this functionality

CMS-IMAGECLASS IMAGE=/images/uploads/nc-command-log.png INDENT=1 CLASS=border ALT=Show who is running Bluejeans Command

There you have it. You now have the ability to create and manage your BlueJeans meeting. 

To see what else you can do with Commander, you can look at our Resources (Resource link to tutorials/blogs and Videos). For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our community [Slack channel](https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc) or on [GitHub](https://github.com/nimbella/command-sets).
