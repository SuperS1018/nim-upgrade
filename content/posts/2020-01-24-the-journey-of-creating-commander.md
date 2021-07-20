---
title: The Journey of Creating Commander
status: Draft
date: 'January 29, 2020 4:00 PM'
excerpt: >-
  Eric Swildens discusses why he created Commander, and how it streamlined his
  own development process. 
categories:
  - category: Blog
  - category: 4 minutes
---
People always say building a startup is one of the easiest things you can do. They also say Rome was built in a day, right? No, they don’t, and neither is building a start-up 

There are hundreds of things that require your attention, especially when building an entire platform that allows developers to do what they do best. To make their lives easier, we had to deal with their DevOps and IT pains, over and over.

These attention-grabbers, requests like creating DNS hostname A records, CNAMEs, setting up MX records, creating SSL certs, managing SSL certificate renewal, setting up databases, and creating/monitoring/rebooting VMs and Kubernetes pods/clusters.

As I started getting a lot of requests to do these and similar things, I decided it would speed things up to create a tool that allows people to easily do these tasks on their own. To create this, I’d need an easily accessible UI and environment, hopefully, ones that we were already using.

## Why reinvent the wheel?

Instead of providing a separate DevOps environment, what if we just developed it to work with platforms that already exist? What better platform to start building for than the one I was getting these requests on? A messaging service like Slack is a perfect way to manage all the tasks. Everyone in the company uses Slack and it already has an interface for input, output, and basic slash commands.

Slack provides an amazing way to connect with outside applications, but why provision more servers and set up more databases when I could use the product that I was working on already. Why not just use our serverless platform? It works amazingly for these types of operations. 

I didn't need to monitor any server, worry about scalability, deal with security patches, or any other issues you’d normally have to deal with. I wasn’t required to handle any of it because of my choice of serverless functions over servers or containers. 

## Building the first commands

I wrote each command's code on Nimbella's [serverless platform](https://nimbella.com/platform), then created slash commands that others in my workspace could use. I connected the two parts and **my code executed when someone used a slash command**.

These early commands proved its usefulness by speeding up our team's development life-cycle. With this proof of concept saving my team and I time, I decided we could expand it into it's own product, so other communities and teams could use it as well. 

## Project to product

Although it was useful, there were tons of limitations when I developed my serverless slash commands in Slack. Some of the issues were:

* I didn't have a way to restrict access to the slash commands; anyone in the channel could run them
* All my API keys resided in the source code
* I didn't have any logging capabilities
* Each command function had to parse parameters on its own
* There wasn't a way to automate command execution
* I couldn't hook up external webhooks to my commands
* I didn't have an easy way to share the source code for the commands with others

After whetting my appetite solving my problems by developing my commands, I decided to build a full development platform for Slack that solved all the above issues. After working hard to finish up development, I'm happy to announce that Commander is built and ready for public use in Slack. We'll be building commands along side you, and bringing Commander to other community chat platforms as well.

There ends the story of how and why Nimbella Commander came to be, but here begins the story of why it’s revolutionary for communities.

## What's possible with Commander?

One of the great advantages of using a messaging system to manage commands is that you can run the command in a shared channel and everyone in the channel can see the output. You don't need to get data and then copy or repost it into a channel to tell someone about the data. Additionally, if someone has ran into an issue running one of your commands, you can show someone the command by typing it in a channel they are in. Another cool advantage is that we get to use the fancy new term **ChatOps**.

Commander also allows you to create and manage your own sets of commands. Other events can run those commands such as external webhooks and triggers. You can also run them on a schedule or at a rate, like once a day. You can specify which users can run the commands you create or install. Viewing logs is a breeze and you get to store your API keys safely and easily, no more dealing with keeping your API keys off GitHub. For more details on each of these features visit our Commander pr

We built some essential pre-built [open-source command sets](https://github.com/nimbella/command-sets), that you can install and use right away. Our goal is to have the community build useful commands and share them on GitHub so that others may build on their achievements. Enjoy a community or Nimbella created command, but want to customize it? Edit any command to fit exactly what you need, at any time. 

Come visit our [documentation](https://nimbella.com/docs/commander/slack/overview) for detailed explanations and examples. If you ever need help you can reach out at [devrel@nimbella.com](devrel@nimbella.com) or [join our Slack community](https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc)
