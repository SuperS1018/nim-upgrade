---
title: Setting Up
status: Published
date: '2019-07-11'
index: '1'
level: '1'
second: []
meta:
  description: >-
    Try Nimbella Workbench to develop applications from your browser, deploy
    applications directly from GitHub, and assess your cloud activity.  Deploy
    now for free
  title: How to setup Slack Commander Workbench?
---
# Introduction to Nimbella

Nimbella is the Cloud made easy. You can build complete cloud applications using the technologies you know, and deploy to the cloud with no infrastrcuture for you to worry about, ever. We take care of the boring details of the cloud so you don't have to. That means you can develop your exciting ideas into real world applications quickly, securely, and reliably.

To get started you need to [sign up for an account](https://nimbella.com/request). Not ready to sign up? You can try the [Nimbella Playground](https://apigcp.nimbella.io/wb/?command=playground) instead.

Once your account is created, you will be shown a login token that you can use to get started with Nimbella. You can use the token with the Nimbella Workbench or with the Nimbella command line tool called `nim`.

### The Workbench

The Workbench allows you to develop some light weight applications from your browser, deploy some applications directly from GitHub, look at your Nimbella cloud assets, and activity. The Workbench is acessible from [https://apigcp.nimbella.io/wb](https://apigcp.nimbella.io/wb?command=menu).
* Run the command `nim auth login` to authenticate.  
* To confirm that things are OK, run `nim auth current` to see your namespace.
* Then run `nim action list`. The command should complete successfully but will not list any actions since you do not yet have any.

![Initial Check](/images/uploads/initialcheck-workbench.png)

### The Nimbella CLI

For richer development, you will need to download the Nimbella CLI, called `nim` and run it from your local machine.

* Obtain the correct installer for your system by visiting the [Nimbella landing page](https://nimbella.io).
* Run the installer.  On Mac OS or Windows you can double-click the downloaded file to launch the installer.  On Linux, use `sudo nim-install-linux.sh`.
* At a command prompt, issue `nim auth login` to authenticate.
* You are ready to proceed with the rest of the tutorial, which uses `nim` command features.
