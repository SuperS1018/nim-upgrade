---
title: How to Quickly Deploy Stateful Serverless Apps with Nimbella?
status: Published
date: 'June 22, 2020 4:00 PM'
postFeaturedImage: /images/uploads/deploy-header.png
excerpt: Learn how to quickly deploy a Stateful app!
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: Learn how to quickly deploy a Stateful app!
  shareImageUrl: /images/uploads/deploy-header.png
  title: How to Quickly Deploy Stateful Serverless Apps with Nimbella?
---
CMS-YOUTUBE ID=514WaqACkxQ ALIGN=center WIDTH=100

So you want to build a serverless stateful application on the cloud. And, you’ve heard that Serverless can be an inexpensive choice among the typical cloud offerings. But you’ve also heard that it can be challenging to build a stateful Serverless app. In this blog, we show how Nimbella’s standard features make it simpler to build stateful Serverless apps.

This blog assumes you’ve experimented with the Nimbella Playground, and you have installed the Nimbella Command Line Interface (CLI). If you do not have the CLI installed, then check out Nimbella’s blog on downloading the CLI...the process will take less than 2 minutes!

Now let’s start working with the demo projects supplied by Nimbella. This will quickly give you a clear understanding of the types of Serverless cloud applications you can easily build using Nimbella.

You see that Nimbella’s Serverless platform makes it easy to build Jamstack and Stateless serverless cloud applications, AND the built-in key-value-storage capability totally eliminates the challenge of building stateful Serverless applications. 

By the way, you may be wondering about the difference between a stateful and stateless application. A good example of a stateful application is a chatroom app. You and friends are texting one another. The app saves all your ID’s and your texts. If you were to refresh the app, the texts would still be there. By storing the pertinent data the state of the application is saved. If such data is not stored, then the application is stateless. Most Serverless offerings support Stateless applications.

CMS-IMAGECLASS IMAGE=/images/uploads/stateful-serverless-cloud-applications-1.png INDENT=0 CLASS=w100 ALT=stateful serverless cloud applications

Nimbella provides several examples of Stateful serverless cloud applications that can be downloaded to see the code and try modifying it.

To access the example app, first, you need to log in to [Nimbella.com](https://nimbella.com). Then download the example apps, run your login command in the command prompt by copying and pasting the first command you see when you log into nimbella.com This command is: nim auth login + your login key. After login, you will receive a notification that Nimbella has stored a credential set for a namespace. 

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-cloud-app-commands-new.png INDENT=0 CLASS=w100 ALT=serverless cloud app commands

Now that you have your unique namespace setup, you can download the example apps. Copy and paste the command: 

 	git clone https://github.com/nimbella/demo-projects  

This will give you several stateful and stateless Serverless applications to look at and try modifying.

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-qr-code-app-development-new.png INDENT=0 CLASS=w100 ALT=serverless QR code app development

A good place to start is with the example QR generator. This is a stateless Serverless app that is written in HTML and Node.js. To deploy this code, simply run “nim project deploy” and the name of the folder which you can copy and paste from the main login page.

Once it’s done loading, your QR project will be deployed with your namespace. Copy and paste the link that is given to you and the code is yours to modify. 

The example QR app generates a QR code for the text that is entered. By typing in my name, and clicking the Translate button, and the app generates a QR code with the text “Jamie” in it. A QR reader would read “Jamie”.

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-qr-code-app.png INDENT=0 CLASS=w100 ALT=serverless QR code app

Now let’s try modifying the app by changing the logo. First, pull up the code in an IDE. Go into the web folder and find the index.html file and edit line 20. Replace it with a photo of a smiley face, save it, and then run the deploy command again. Refresh your browser and see the change you made to the example app.

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-cloud-app-code.png INDENT=0 CLASS=w100 ALT=serverless cloud app code

Incidentally, recall that this is a stateless Serverless app? Try translating the text into a QR code, then refresh the page.

As you see, the QR code disappears. This is because the state of the app is not being stored. Similarly, if this link is shared with another user while the QR code is displayed in your browser, the other user would not be able to see your QR code because it was not stored. This is another example of what it means for an app to be stateless.

Now we’ll look at a state**ful **Serverless application.

Go back to the login page and copy and paste the command to deploy the Chat room: 

nim project deploy demo-projects/chat

You can now use this link to see your deployed chat room. You can create an account by adding your name, and you can post messages. If you refresh it, the state of the app is saved automatically by Nimbella’s key-value storage. If you share this link with others, they will be able to create accounts, see your posts, and have their posts saved as well. 

CMS-IMAGECLASS IMAGE=/images/uploads/stateful-serverless-chat-application.png INDENT=0 CLASS=w100 ALT=stateful serverless chat application

But, if Serverless offerings support stateless apps, how is this app stateful? For the explanation, go to the packages folder, then the chatroom folder, and look for index.js in the postMessage folder. This is the functionality that allows users to post a message on the app. You’ll notice at the top that we are using something called Redis. Redis is open-source key-value-storage software that is built into Nimbella.

CMS-IMAGECLASS IMAGE=/images/uploads/open-source-key-value-storage-nimbella.png INDENT=0 CLASS=w100 ALT=open source key value storage Nimbella

As a developer, you don't need to provision infrastructure or a database because Nimbella has done it for you. This example app uses Nimbella's Key-Value store to save the application state. This data store is automatically backed up and is only accessible from your functions.

QR and Chat are just two of the example apps you download, study, and modify. Other examples of Serverless cloud apps include the Calculator, OCR, Stock Trading, and an example for a website that tracks how many people have visited it.

Written by Jamie Dawson ([Twitter](https://twitter.com/JamieDawsonCode), [LinkedIn](https://www.linkedin.com/in/jamie-dawson-205351113/))
