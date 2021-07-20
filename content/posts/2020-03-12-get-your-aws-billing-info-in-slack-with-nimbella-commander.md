---
title: How to Fetch your AWS Billing Info on Slack?
status: Published
date: 'March 12, 2020 4:00 PM'
postFeaturedImage: /images/uploads/blog-headerxcf.png
excerpt: >-
  Have you ever wanted a simple way of displaying your AWS billing info on
  Slack? With Nimbella Commander, you can have your current bill or a bill from
  any other month displayed in one command to your Slack workspace. This
  conveniently integrated AWS billing functionality will allow developers to
  have cost-visibility without having to navigate complex billing systems, which
  will benefit the entire organization in the long run.
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    This conveniently integrated AWS billing functionality will allow developers
    to have cost-visibility without having to navigate complex billing systems ✔
  shareImageUrl: /images/uploads/blog-headerxcf.png
  title: How to Fetch your AWS Billing Info on Slack? | Nimbella Blog
---
Have you ever wanted a simple way of displaying your AWS billing info on Slack? With [Nimbella Commander](https://nimbella.com/integrations/commander), you can have your current bill or a bill from any other month displayed in one command to your [Slack workspace](https://nimbella.com/slack). This conveniently integrated AWS billing functionality will allow developers to have cost-visibility without having to navigate complex billing systems, which will benefit the entire organization in the long run.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-bill-in-slack-result-with-month.png INDENT=0 CLASS=w100 ALT=aws bill in slack result with month and year

Later, I’ll show you how to restrict who can access this Slack command so it’s only available to people who need to know.

In just 7 simple steps, we will install Commander into Slack, add the API keys to Commander, and run the commands to show your AWS bill. If you don’t have any API keys set up in your AWS account, then you can scroll down to the section titled “Creating test API Keys for Commander”. But if you already have API Keys ready, then you can start at the section titled “Install Commander into Slack”.

## Install Commander into Slack:

1. Add [Nimbella Commander to your Slack Team](http://slack.com/apps/AS833QXL0-nimbella-commander?next_id=0). You can add it by searching “Nimbella” in the apps tab on Slack. You can also add it by [going to our official website](https://nimbella.com) and clicking the “Add to Slack” button.

CMS-IMAGECLASS IMAGE=/images/uploads/commander-for-slack-to-display-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 border ALT=commander inside Slack to help display aws billing info in slack

2. In order to get your AWS billing details, you’ll need to install the [billing Command Set](https://github.com/nimbella/command-sets). Command Sets are a packaging specification for Slack commands, and a convenient way to share commands via GitHub or open source. Command Sets are installed into your Slack teams via the Nimbella Commander by typing the command /nc csm_install billing in your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/adding-billing-ability-to-display-aws-billing-info-in-slack.png INDENT=1 CLASS=w75 border ALT=billing command to display aws billing info in slack

## Applying your API Keys:

1. Next, we need to bind some secrets to the billing commands. Specifically, the AWS API keys you generated earlier for the AWS API will be encrypted (outside of Slack) and attached to the slash command. To do this, type **/nc secret_create** to bring up the Nimbella Secret Creator. We’re creating the secrets outside of Slack so that Slack will only see encrypted strings and not your API keys. When you run the secrets command, you will see an output that looks like this:

CMS-IMAGECLASS IMAGE=/images/uploads/create-api-secrets-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w75 border ALT=Secret Creator to create encrypted api keys to display aws billing info in slack

2. Click on the Secret Creator link to be redirected to the page which encrypts your API keys.

CMS-IMAGECLASS IMAGE=/images/uploads/secret-creator.png INDENT=1 CLASS=w100 border ALT=encrypt AWS api keys to help display aws billing info in Slack

3. Add your AWS keys to the fields in the Secret Creator as illustrated in the following figure. Next, click the “Make Secrets” button to generate the commands you’ll need to copy and paste into your Slack prompt.

CMS-IMAGECLASS IMAGE=/images/uploads/secret-creator-2-example.png INDENT=1 CLASS=w100 border ALT=commander secret creator to encrypt api keys for aws billing info in slack

4. After clicking the “Make Secrets” button, the commands you’ll need to run on your Slack page will appear. Copy each command one at a time and paste them into Slack (using Clipboard copy). This will take your AWS Cost Explorer keys and apply them.

CMS-IMAGECLASS IMAGE=/images/uploads/step-22.png INDENT=1 CLASS=w100 ALT=secret creator to encrypt AWS api keys to display aws billing info in slack

CMS-IMAGECLASS IMAGE=/images/uploads/commands-to-run-to-add-aws-secrets-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 border ALT=commands to encrypt aws api keys to display aws billing information in slack

## Run the billing Command Set in Slack:

1. Finally, run the built-in command /dapp awsbill to see your AWS billing info.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-bill-in-slack-result-example-here.png INDENT=1 CLASS=w100 ALT=aws billing info in slack being displayed with Commander in Slack

2. To see a particular month bill, try /dapp awsbill MM/YYYY

CMS-IMAGECLASS IMAGE=/images/uploads/aws-bill-in-slack-result-with-month.png INDENT=1 CLASS=w100 ALT=aws billing info in slack being displayed with Commander in Slack

3. You likely don’t want everyone in your Slack team to run this command. Nimbella Commander offers a neat feature to allow only certain users to run specific commands. For example, you can restrict access to the AWS billing command to specific users using\*\* \*\*/nc command_runners awsbill+ @user1 + @user2, substituting for “user1” and “user2” the Slack names of your teammates that should have access to the AWS billing details.

CMS-IMAGECLASS IMAGE=/images/uploads/command_runners.png INDENT=1 CLASS=w100 border ALT=command to run in Slack to display AWS billing information in Slack

4. It’s worth also mentioning that you have access to an audit trail to see who’s run your commands. This is useful for administrators and team oversight where appropriate.
   Type /nc command_log awsbill

CMS-IMAGECLASS IMAGE=/images/uploads/audit-log-of-people-who-ran-aws-billing-info-command-in-slack.png INDENT=1 CLASS=w100 border ALT=audit log of users who ran aws billing info in slack

5. One last thing that’s important to know is that the code for the awsbill command you import into Commander is yours to edit. If you type /nc command_code awsbill, you will receive a secure link that will allow you to edit the command. 

CMS-IMAGECLASS IMAGE=/images/uploads/command_code.png INDENT=1 CLASS=w100 ALT=command to edit code that can display aws billing info in slack

Using Nimbella’s access control you can also limit who can view and edit the code that implements a particular command as well. The built-in Secret Creator means your sensitive data remains outside of Slack and accessible only to the code you run. And with Audit Logs, you have accountability and historical data readily available at your fingertips. These are powerful features of the Commander that don’t exist in Slack otherwise. For more information about Commander, [visit our website](https://nimbella.com/integrations/commander). We’d also love to hear from you via our [community Slack](https://nimbella.com/slack) channel or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account,[ click this link to get started today!](https://nimbella-community.slack.com/apps/AS833QXL0-nimbella-commander?next_id=0)

## AWS API Keys:

**Important note**: If you’ve not enabled Cost Explorer, you’ll have to wait 24 hours once you enable it. But if you have AWS account enabled for Cost Explorer, you don’t need to do this.

CMS-IMAGECLASS IMAGE=/images/uploads/24-hour-wait.png INDENT=0 CLASS=w100 ALT=24 hour wait.

1. Go to [IAM](https://console.aws.amazon.com/iam/home?region=us-west-1#/home) in AWS services (AWS Management Console)

CMS-IMAGECLASS IMAGE=/images/uploads/aws-dashboard-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=aws access management page IAM to help display aws billing info in slack

2. In the Access Management tab on the left. Click “Policies” and select the “Create a policy” button.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-create-policy-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=create policy in AWS access management AIM to set up AWS billing info being displayed in Slack

3. On the Create Policy page. Click “service” and search ”Cost Explorer Service”. In “Actions”, select the “Read” and “list” boxes.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-creating-policy-for-aws-biling-info-in-slack.png INDENT=1 CLASS=w100 ALT=policy creation to help display AWS billing info in Slack

4. On the “Review policy” page, name it  “CostExplorerReadOnly” and click “Create Policy”. 

CMS-IMAGECLASS IMAGE=/images/uploads/aws-finishing-policy-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=creating policy in AWS AIM to display AWS billing info in Slack

5. On the IAM page, click the Groups tab and select the “Create New Group” button. 

CMS-IMAGECLASS IMAGE=/images/uploads/aws-create-group-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=Create group in AWS AIM to display AWS billing info in Slack

6. Create a group name and call it “CostExplorerGroup”.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-group-name-for-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=Set group in AWS AIM to display AWS billing info in Slack

7. Attach the policy you created by typing “CostExplorerReadOnly” in the pages search bar and select it. “Click the “next step” button at the bottom right of the screen after selecting it. The last step in creating a new group is just a review. Click “Create Group” once you’re at Step 3.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-policy-to-display-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=Attach policy in AWS AIM to display AWS billing info in Slack

8. Go to the IAM tab and select the user’s tab. Then click the “Add User” button.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-user-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=create user in AWS IAM to display AWS billing info in Slack

9. Add the user and call it “CostExplorerAPIOnly”. Select programmatic access.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-user-creation-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=user creation in AWS IAM to display AWS billing info in Slack

10. Select “CostExplorerReadOnly” on this page.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-adding-user-policy-for-aws-billing-information-in-slack.png INDENT=1 CLASS=w100 ALT=user creation in AWS IAM to display AWS billing info in Slack

11. Ignore the "add tags" section. It’s optional. Click the “Next: Review” button at the bottom right of the screen.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-user-tags-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=adding user in AWS IAM to display AWS billing info in Slack

12. Click the“Create user” button at the bottom right of this page.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-user-reveiw-for-aws-billing-for-slack.png INDENT=1 CLASS=w100 ALT=aws user in IAM to display AWS billing info in Slack

13. After clicking the “Create user” button. You’ll be directed to a page that will have your Access Key ID and Secret Access Key. You will need both of these API keys to use the AWS functionality in Slack. So keep this page open when you go to your Slack page.

CMS-IMAGECLASS IMAGE=/images/uploads/aws-add-user-final-page-for-aws-billing-info-in-slack.png INDENT=1 CLASS=w100 ALT=added user in AWS IAM to display AWS billing info in Slack

- - -

CMS-YOUTUBE ID=K1Yji9BYYtM ALIGN=center WIDTH=75

Related Blogs

[How to Fetch Digital Ocean Billing Info on Slack?](https://nimbella.com/blog/how-to-fetch-your-digital-ocean-billing-info-on-slack)

[How to Fetch Datadog Billing on Slack?](https://nimbella.com/blog/get-your-datadog-billing-info-in-slack-with-nimbella-commander)
