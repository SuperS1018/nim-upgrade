---
title: How to Create an Optical Character Recognition (OCR) Application?
status: Published
date: 'April 30, 2020 4:00 PM'
postFeaturedImage: /images/uploads/ocr-thumb.png
excerpt: >-
  In this tutorial, you'll learn to create an Optical Character Recognition
  (OCR) application using Nimbella. 
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    In this tutorial, you'll learn to create an Optical Character Recognition
    (OCR) application using Nimbella. 
  shareImageUrl: /images/uploads/ocr-thumb.png
  title: How to Create an Optical Character Recognition (OCR) Application?
---
In this tutorial, you'll learn to create an Optical Character Recognition (OCR) application. This program takes in images with text, scans the images looking for text using the [Tesseract OCR engine](https://github.com/tesseract-ocr/tesseract), and reads the text out loud from your choice of English, Spanish, or Chinese. I'll break down the functionality of the frontend and backend and by the end of the tutorial, you'll have your own URL that can be shared so that others can run this application.

Before I tell you what to do, let's go over what you won't have to do as a developer. You won't be updating your frontend static assets (HTML, CSS, and Javascript) to a CDN (content delivery network), running your backend on a server, and making sure your database is secure so people can't steal important user data. You won't have to do those things because that functionality is done for you when you're building in the Nimbella Cloud.

As a developer, you just write your frontend/backend logic, run a single command in your terminal and you get your own URL that you can use to view and share your project. Plus Nimbella Cloud's built-in security eliminates the effort of protecting your customer's financial information.

Here's the roadmap for this tutorial:

1. OCR architecture
2. Project organization
3. The OCR UI (frontend)
4. Serverless API Implementation (backend)
5. Code to Cloud in 30 Seconds

## 1: OCR Architecture

There are five main actions that can be run in this application:

* Accepting an image
* Credential
* Image to Text
* Progress
* Text to Speech

Each of these actions occurs depending on how the user interacts with the applications. The reason we're able to easily make stateful applications like this is that the Progress action is storing information in a Key-Value cache.

## 2: Project Organization

Here is how we build an application (e.g., frontend + backend) using Nimbella:

The application has a web component that will host the HTML, CSS, JavaScript, and other static assets for the application. For the backend, we will implement the APIs using Node.js although any one of these other languages could be used: TypeScript, Python, PHP, Java, Go, or even Swift.

## 3: The OCR UI (frontend)

In this example, the OCR frontend is built with React which we store in the web folder. But, you could use any Framework such as Vue, Angular, jQuery, ASP.NET, Ruby on Rails, etc.

When you first load your application, you have three options to interact with the UI. You can 1) drag and drop an image that's in the JPG, GIF, or PNG format, 2) click the Upload Image button to pull up a folder on your computer, or 3) you can select the language you'd like the application to read out loud in.

CMS-IMAGECLASS IMAGE=/images/uploads/loading-0.png INDENT=1 CLASS=w100 ALT=serverless OCR frontend UI

Once you decide which images you want to run into the OCR, you can watch the image processing in real-time. Here's an example of three images being loaded at the same time.

CMS-IMAGECLASS IMAGE=/images/uploads/loading-1.png INDENT=1 CLASS=w100 ALT=serverless OCR applicaiton

Once your images are loaded, you can click on the picture and select the speak option.

CMS-IMAGECLASS IMAGE=/images/uploads/loading-2.png INDENT=1 CLASS=w100 ALT=serverless OCR app

You can even flip an image while one of the images is being read out loud.

CMS-IMAGECLASS IMAGE=/images/uploads/loading-3.png INDENT=1 CLASS=w100 ALT=serverless OCR applicaiton

Following is a chart illustrating the paths of these actions.

CMS-IMAGECLASS IMAGE=/images/uploads/ocr-pattern-updated.png INDENT=1 CLASS=w100 ALT=serverless OCR application structure

## 4: Commands found in the backend

Now let's look at the Packages folder which will contact the backend logic to run the commands. First, we'll consider the five backend functions and how they're operating.

## **Accept an Image**

**/ocr/acceptImage** gets called when you select an image for the application process. When you begin this functionality, the **ocr/imageToText** is running to convert the images to text and the ocr/progress function helps the loading bar showing you how the image is being processed. We're using the built-in [OpenWhisk](https://github.com/apache/openwhisk-composer) functionality to simplify this process by using the [retain](https://github.com/apache/openwhisk-composer/blob/master/docs/COMBINATORS.md#retain) and [sequence](https://github.com/apache/openwhisk-composer/blob/master/docs/COMBINATORS.md#sequence) commands.

## **Check your credential**

In **ocr/credential**, we specify our secure get and put operations between the web page and storage bucket. You can call on the built-in storage functionality by calling **nimbella.storage()** into your code!

## **Image to Text**

**ocr/imageToText** is where we will be incorporating the Tesseract Engine to convert the image to text. Tesseract scans the image and returns text, which we store and display. We're also using the built-in Key-Value functionality to store/update our text.

## **Progress**

We're able to see the image loading in real-time because we're using the functionality in **ocr/progress**. For this, we are using key-value storage that's connected to your Nimbella namespace to track the progress, status, and the text that will be displayed in the UI.

## **Text to Speech**

And finally, **ocr/textToSpeech** function enables us to hear the text read out loud. After the app has successfully processed the image and stored the associated text, clicking the speak button on your app will run your text through Google Translate to read the text through your speakers.

Here's a layout of all the actions stored in your packages folder:

CMS-IMAGECLASS IMAGE=/images/uploads/file-structure-packages.png INDENT=1 CLASS=w100 ALT=OCR project folder structure

## 5: Code to cloud in 30 seconds

The Nimbella CLI is called nim. It helps you organize and deploy your applications to the Nimbella cloud, in a secure domain that is unique to your projects. You will need to download the CLI and login with an access key to get started. Please visit the [signup page](https://nimbella-apigcp.nimbella.io/) to configure your CLI if you haven't previously done this. As described earlier, deploying your functionality and UI is incredibly simple with the following line of code.

```
nim project:deploy <project_name>
```

Within seconds, Nimbella will tell you how many files and actions they hosted. Navigate to the link provided by Nimbella after running the command to access your finished OCR.

This tutorial detailed the steps involved in creating an OCR application using the Nimbella Platform. Nimbella is evolving and expanding. Check out [our website](https://nimbella.com) for more information on our upcoming products and news.

Contact us at info@nimbella.com or on our [community Slack](https://nimbella.com/slack) if you have any further questions. You can also check out the [OCR source code on GitHub](https://github.com/nimbella/demo-projects/tree/master/ocr).

_Written by: Jamie Dawson (_[_Twitter_](https://twitter.com/JamieDawsonCode)_, _[_Linkedin_](https://www.linkedin.com/in/jamie-dawson-205351113/)_, _[_GitHub_](https://github.com/JamieDawson)_)_
