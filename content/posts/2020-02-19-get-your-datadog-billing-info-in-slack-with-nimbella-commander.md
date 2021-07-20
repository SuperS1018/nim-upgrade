---
title: Get your Datadog billing info in Slack with Nimbella Commander
status: Published
date: 'February 14, 2020 4:00 PM'
postFeaturedImage: /images/uploads/datadog-billing-slack-banner-top.png
excerpt: >-
  Have you ever wanted a simple way of displaying your Datadog billing info on
  Slack? With Nimbella Commander, you can have your current bill and next
  month’s projected bill displayed in one command to your Slack workspace.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    With Nimbella Commander, you can have your current bill and next month’s
    projected bill displayed using one command to your Slack workspace ✔
  shareImageUrl: /images/uploads/datadog-billing-slack-banner-top.png
  title: How to Fetch your Datadog Billing Info on Slack? | Nimbella Blog
---
Have you ever wanted a simple way of displaying your [Datadog](https://www.datadoghq.com/) billing info? With [Nimbella Commander](https://nimbella.com/integrations/commander), you can have your current bill and next month's projected bill displayed in one command to your [Slack workspace](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0).

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-bill-slack.png INDENT=1 CLASS=undefined ALT=A command in Slack that shows your Datadog billing info

Later, I'll show you how to restrict who can access this Slack command so it's only available to people who need to know. Here's how to do it:

1. Inside your [Datadog API settings](https://app.datadoghq.com/account/login?next=%2Faccount%2Fsettings#api), Create a Datadog API key and Application key in Datadog's UI. You must name your API key datadogApiKey and your Application Key datadogApplicationKey.

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-billing-api-serverless-cloud-2.png INDENT=1 CLASS=undefined ALT=Page for Datadogs ApiKey and ApplicationKey which you will need to give Commander permission to displaying your billing info.

2. Add [Nimbella Commander to your Slack page](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). You can add it by searching "Nimbella" in the apps tab on Slack. You can also add it by [going to our official website](https://nimbella.com) and clicking the "Add to Slack" button.

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-billing-info-slack-commander.png INDENT=1 CLASS=undefined ALT=Slack button that you have to click to add Commander to your Slack account

3. In order to get your Datadog billing details, you'll need to install the [billing Command Set](https://github.com/nimbella/command-sets). Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Command Sets are installed into your Slack teams via the Nimbella Commander by typing the command /nc csm_install billing in your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-billing-slack.png INDENT=1 CLASS=undefined ALT=Slack command you run to get the Datadog billing ability. Billing will show you your Datadog billing info

4. Next we need to bind some secrets to the billing commands. Specifically, the API keys you generated earlier for the Datadog API will be encrypted (outside of Slack) and attached to the slash command. To do this, type /nc secret_create to bring up the Nimbella Secret Creator. We're creating the secrets outside of Slack so that Slack will only see encrypted strings and not your API keys. When you run the secrets command, you will see an output that looks like this:  

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-billing-info-slack-secret.png INDENT=1 CLASS=undefined ALT=Slack command to get the Datadog secret ApiKey and ApplicationKey

5. Click on the Secret Creator link to be redirected to the page which encrypts your API keys.  

CMS-IMAGECLASS IMAGE=/images/uploads/secret-creator.png INDENT=1 CLASS=undefined ALT=Datadog ApiKey and ApplicationKey secret creator for Commander.

6. Add your Datadog API Key and Application Key from Step 1 to the fields in the Secret Creator as illustrated in the following figure. Next, click the "Make Secrets" button to generate the commands you'll need to copy and paste into your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/secret-creator-2.png INDENT=1 CLASS=undefined ALT=Datadog secret creator and where you input your ApiKey and ApplicationKey. You need this to show your Datadog billing info in Slack

7. After clicking the "Make Secrets" button, the commands you'll need to run on your Slack page will appear. Copy each command one at a time and paste them into Slack. This will take your API Key and Application Key and apply them.

CMS-IMAGECLASS IMAGE=/images/uploads/secrete-creator-3-encrypted.png INDENT=1 CLASS=undefined ALT=Output of slash commands for Slack that apply your Datadog secrets to your account. Giving you access to your Datadog billing information

8. Finally, run the built-in command /nc datadogbill to see your Datadog billing info.

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-bill-slack.png INDENT=1 CLASS=undefined ALT=A command in Slack that shows your Datadog billing info

9. To see more details about your bill, try /nc datadogbill -detail

CMS-IMAGECLASS IMAGE=/images/uploads/nc-datadog-bill-detail.png INDENT=1 CLASS=undefined ALT=The Slack output showing your Datadog billing info. The detail command shows specific aspects of your bill.

10. You likely don't want everyone in your Slack team to run this command. Nimbella Commander offers a neat feature to allow only certain users to run specific commands. For example, you can restrict access to the Datadog billing command to specific users using /nc command_runners datadogbill + @user1 + @user2, substituting for "user1" and "user2" the Slack names of your teammates that should have access to the Datadog billing details.

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-billing-info-devops-slack-users.png INDENT=1 CLASS=undefined ALT=Slack slash command that allows specific members of your Devops team to run your Datadog billing info command.

11. It's worth also mentioning that you have access to an audit trail to see who's run your commands. This is useful for administrators and team oversight where appropriate. Type /nc command_log datadogbill

CMS-IMAGECLASS IMAGE=/images/uploads/datadog-bill-info-command-logs-slack.png INDENT=1 CLASS=undefined ALT=Slack slash command that shows which Slack users are running your Datadog billing info command on Slack.

Using Nimbella's access control you can also limit who can view and edit the code that implements a particular command as well. The built-in Secret Creator means your sensitive data remains outside of Slack and accessible only to the code you run. And with Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don't exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We'd also love to hear from you via our community [Slack channel](https://app.slack.com/client/TL64TJWVB/CQE95GHB4) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, [click this link to get started today!
](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0)

Video tutorial on how to get your Datadog billing info in Slack with Nimbella Commander:

<iframe width="560" height="315" src="https://www.youtube.com/embed/T-7qQU9iIgo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Related Blogs

[How to Fetch AWS Billing Info on Slack?](https://nimbella.com/blog/how-to-fetch-your-aws-billing-info-on-slack)

[How to Fetch Digital Ocean Billing Info on Slack?](https://nimbella.com/blog/how-to-fetch-your-digital-ocean-billing-info-on-slack)
