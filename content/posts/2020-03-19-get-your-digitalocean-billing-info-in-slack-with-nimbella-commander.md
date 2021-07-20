---
title: How to Fetch your Digital Ocean Billing Info on Slack?
status: Published
date: 'March 24, 2020 4:00 PM'
postFeaturedImage: /images/uploads/dobill-header.png
excerpt: >-
  Have you ever wanted an easy way of displaying your DigitalOcean billing info
  on Slack? With Nimbella Commander, you can have your current bill and next
  month’s projected bill displayed using one command to your Slack workspace.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    With Nimbella Commander, you can have your current bill and next month’s
    projected bill displayed using one command to your Slack workspace ✔
  title: How to Fetch your Digital Ocean Billing Info on Slack?
---
Have you ever wanted an easy way of displaying your DigitalOcean billing info on Slack? With Nimbella Commander, you can have your current bill and next month’s projected bill displayed using one command to your Slack workspace. This conveniently integrated DigitalOcean billing functionality will allow developers to have cost-visibility without having to navigate complex billing systems, which will benefit the entire organization in the long run.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-bill-displayed-in-slack.png INDENT=0 CLASS=w100 ALT=DigitalOcean bill displayed in Slack

By following these 7 simple steps, you can add Nimbella Commander to Slack and set it up for running this DigitalOcean billing command. Later on, I’ll show you how to restrict the access for this command, so that it is available only for the relevant people within your Slack workspace.

1. Goto your [DigitalOcean’s API](https://cloud.digitalocean.com/account/api/tokens) section and generate a new token with the name of `digitaloceanApiKey`. Copy this API token, you will be required to use this later.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-api-section-for-displaying-bill-in-slack.png INDENT=1 CLASS=w100 ALT=DigitalOcean API for displaying DigitalOcean bill in Slack

2. Add Nimbella Commander to your Slack workspace. Search `Nimbella Commander` in Slack’s app search section and proceed with it. 

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-slack-download-commander.png INDENT=1 CLASS=W100 ALT=Nimbella Commander in the Slack apps tab

Alternatively, You can visit our official website and click the “Add to Slack” button.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-download-slack-app-on-offical-website.png INDENT=1 CLASS=w100 ALT=Nimbella's official website to help you install Nimbella on Slack

3. In order to get your DigitalOcean billing details, you’ll need to install the billing Command Set into your Nimbella app. Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Type `/nc csm_install billing` in your slack’s channel or direct message.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-installing-billing-to-display-digitalocean-bill-in-slack.png INDENT=1 CLASS=w50 ALT=DigitalOcean bill displayed in Slack by installing the billing command

4. Next, we need to bind some secrets to the billing commands. Specifically, the API keys you generated earlier for the DigitalOcean API will be encrypted (outside of Slack) and attached to the slash command. To do this, type `/nc secret_create` to bring up the Nimbella Secret Creator. We’re creating the secrets outside of Slack so that Slack will only see encrypted strings and not your API keys. When you run the secrets command, you will see an output that looks like this:

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-secret-create-to-display-digitalocean-bill-in-slack.png INDENT=1 CLASS=w50 ALT=DigitalOcean bill displayed in Slack by generating the secret creating in Nimbella Commander

5. Click on the **Secret Creator** link to be redirected to the page which encrypts your API keys.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-secrets-example.png INDENT=1 CLASS=w75 ALT=DigitalOcean bill in Slack by adding your api secrets in the Nimbella secret creator

6. Add your Digital Ocean API Key and from Step 1 to the field in the Secret Creator as illustrated in the following figure. Next, click the “Make Secrets” button to generate the commands you’ll need to copy and paste into your Slack workspace.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-secret-encrypted.png INDENT=1 CLASS=w100 ALT=DigitalOcean bill displayed in Slack by getting the encrypted code in the Nimbell Commander secret Creator

7. After clicking the “**Make Secrets**” button, the command you’ll need to run on your Slack page will appear. Copy the command paste them into Slack. This will take your API Key to apply them to your Nimbella app.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-encrypt-api-in-slack-to-disdplay-digitalocean-bill-in-slack.png INDENT=1 CLASS=w75 ALT=DigitalOcean bill in Slack by adding the encrypted API keys in Slack

8. Finally, run the billing Command Set’s command `/nc dobill` to see your DigitalOcean billing info.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-bill-displayed-in-slack.png INDENT=1 CLASS=w100 ALT=DigitalOcean bill displayed in Slack with Nimbella Commander

You likely don’t want everyone in your Slack team to run this command. Nimbella Commander offers a neat feature to allow only certain users to run specific commands. For example, you can restrict access to the DigitalOcean billing command to specific users using `/nc command_runners dobill + @user1 + @user2`, substituting for “user1” and “user2” the Slack names of your teammates that should have access to the DigitalOcean billing details.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-user-command.png INDENT=0 CLASS=w75 ALT=DigitalOcean bill in Slack command that lets you select slack users who can run command

It’s worth also mentioning that you have access to an audit trail to see who’s run your commands. This is useful for administrators and team oversight where appropriate. Type `/nc command_log dobill`

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-command-log.png INDENT=0 CLASS=w100 ALT=DigitalOcean bill in Slack command that allows you to see who is running the command.

One last thing that’s important to know is that the code for the dobill command you import into Commander is yours to edit. If you type `/nc command_code dobill`, you will receive a secure link that will allow you to edit the command.

CMS-IMAGECLASS IMAGE=/images/uploads/digitalocean-edit-code-to-display-digitalocean-bill-in-slack.png INDENT=0 CLASS=w50 ALT=DigitalOcean bill in slack command that lets you edit the code

Using Nimbella’s access control you can also limit who can view and edit the code that implements a particular command as well. The built-in Secret Creator means your sensitive data remains outside of Slack and accessible only to the code you run. And with Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don’t exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our [community Slack](https://nimbella.com/slack) channel or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, then [click this link to get started](https://slack.com/apps/AS833QXL0-nimbella-commander)!

_Written by Aayush Mamgain (_[_LinkedIn_](https://www.linkedin.com/in/aayush-mamgain-74ba5177/)_, _[_Medium_](https://medium.com/@coderaayush)_)_

_Related Blogs_

[_How to fetch AWS Billing Info on Slack?_](https://nimbella.com/blog/how-to-fetch-your-aws-billing-info-on-slack)

[_How to fetch Datadog Billing on Slack?_](https://nimbella.com/blog/get-your-datadog-billing-info-in-slack-with-nimbella-commander)
