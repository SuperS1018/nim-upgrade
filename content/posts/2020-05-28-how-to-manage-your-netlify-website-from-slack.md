---
title: How to Manage your Netlify Website from Slack?
status: Published
date: 'May 28, 2020 4:00 PM'
postFeaturedImage: /images/uploads/netlify-for-slack-header.png
excerpt: >-
  Learn how to manage your Netlify website without leaving the Slack
  environment. 
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    At Nimbella, we have shown how to manage your Netlify website using Slack.
    Do checkout the blog ✔
  shareImageUrl: /images/uploads/netlify-for-slack-header.png
  title: How to Manage your Netlify Website from Slack?
---
We use Netlify at Nimbella to host our website. We have found the flow, integration, and ease of use are fantastic. We also use Netlify forms and we realized that we wanted to view the submissions without leaving Slack.

Our co-founder started building Slack apps to enable authorized Nimbella employees to use Slack commands for actions such as managing hostnames, managing SSL certificates, checking on or rebooting servers, etc. These capabilities were implemented as apps on Nimbella’s serverless platform. He discovered the need to write our own code to deal with things like parsing command parameters, creating a command logging system, managing secret keys for accessing APIs, and handling user access control. Knowing that users outside of Nimbella would have similar needs, we developed Nimbella Commander, a system that does all these things for developers. Using Nimbella commander, developers don’t have to manage servers to write commands that work with Slack or several other messaging systems. Developers can just write code and it runs automatically on the Nimbella Serverless Cloud platform. By removing the need to host a server and associated infrastructure, Nimbella accelerates creating functionality. 

In addition, Nimbella Commander frees up even more developer time by handling security, parameters parsing, and secrets management. Personally, I really liked Nimbella Commander from my beginning as an intern. In a few hours, I built a Slack Slash command to show real-time usage of cloud resources. In those few hours, I was able to focus solely on my app logic such as how to calculate usage based on the run time of our resources.

Check out [Nimbella Commander](https://nimbella.com/integrations/commander) and get an idea on [how to use Slack effectively](https://nimbella.com/blog/how-to-build-a-serverless-slack-command-in-minutes).

Here’s a screenshot of a Slack command we built to show all form submissions made by our customers.

CMS-IMAGECLASS IMAGE=/images/uploads/slack-command-form-submissions.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

This is very useful for us. And naturally, once you get a hang of something, you want to do more. So we built a few more Slack commands for fun.

Nimbella Commander has a concept called command sets which are bundles of related commands. The bundles make it easier to distribute and install the commands. 

As an aid to other developers, we combined all commands related to Netlify into a command set and uploaded it to our registry (a GitHub repo).  

I’ll walk you through the simple steps to install and use the commands in your Slack workspace. First, add [Nimbella Commander](https://nimbella.slack.com/apps/AS833QXL0-nimbella-commander) to your workspace and run `/nc csm_install netlify`.

CMS-IMAGECLASS IMAGE=/images/uploads/add-nimbella-commander-slack-workspace.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

Next, for the Netlify commands to work, you need to create a secret named `netlifyToken`with our Netlify Personal Access Token. In order to keep your Netlify Access Token secure, we will encrypt it outside of Slack. That way your Access Token isn’t public when you apply it to Commander 

Run `/nc secret_create` to bring up the link to Secret Creator. 

CMS-IMAGECLASS IMAGE=/images/uploads/netlify-access-token-secure-key.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

Then add your Netlify Personal Access Token and click Make Secrets. 

CMS-IMAGECLASS IMAGE=/images/uploads/netlify-personal-access-token.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

Finally, click “Clipboard Copy” to copy the command provided by Secret Creator and paste it in your Slack workspace and the secret is created.

CMS-IMAGECLASS IMAGE=/images/uploads/e.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

You now have the ability to use the Netlify Command Set in your Slack! Here are a few more commands you can run with the Netlify Command Set.

`/nc list_deploys` lists all deployments of a website. 

CMS-IMAGECLASS IMAGE=/images/uploads/list-slack-commands-for-deployment.png INDENT=0 CLASS=w100 ALT=how to manage website from Slack

`/nc list_sites` lists all sites under your account. It also shows a preview image of your site on the side.  

CMS-IMAGECLASS IMAGE=/images/uploads/preview-image-website-on-slack.png INDENT=0 CLASS=undefined ALT=

If you’re interested in using this Command Set or building your own, then visit [the Netlify Command Set](https://github.com/nimbella/command-sets/tree/master/netlify) page to learn more about the usage of commands. 

Thanks for reading! Please send any questions or feedback to satya@nimbella.com.  

Written by Satya ([satyarohith.com](https://satyarohith.com/))
