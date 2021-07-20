---
title: How to Build a Stateful Cloud App on Nimbella vs. AWS
status: Published
date: 'August 23, 2020 4:00 PM'
postFeaturedImage: /images/uploads/how-to-build-a-stateful-cloud-app-on-nimbella-vs.-aws.png
excerpt: >-
  Are you looking for a user-friendly solution for building serverless cloud
  applications? In this blog, we’re going to compare the user experience of
  building the same voting app with Nimbella and AWS.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    In this blog, we’re going to compare the user experience of building the
    same voting app with Nimbella and AWS ✔
  shareImageUrl: /images/uploads/how-to-build-a-stateful-cloud-app-on-nimbella-vs.-aws.png
  title: How to Build a Stateful Cloud App on Nimbella vs. AWS
---
Are you looking for a developer-friendly solution for building serverless cloud applications? In this blog, we’re going to compare the user experience of building the same voting app with Nimbella and AWS.

## Which Stateful Serverless Cloud App did I Build?

I built a voting app that keeps track of people who prefer cats or dogs. This application is stateful because I need to save user input data from one session for use in the next session.

In order to build this app, I need two things.

1. A frontend with two buttons to vote.
2. Two cloud functions that call on key-value storage to save the application’s “state”.

CMS-IMAGECLASS IMAGE=/images/uploads/dog_and_cat_ex.png INDENT=1 CLASS=w100 ALT=build stateful app

### A. How to organize the code files?

CMS-IMAGECLASS IMAGE=/images/uploads/build-stateful-app-files.png INDENT=1 CLASS=w100 ALT=build stateful app

CMS-INDENT INDENT=1 CONTENT=Before we even start talking about launching the code to the cloud. I’m going to go over how you’d structure your code for this project.

CMS-INDENT INDENT=1 CONTENT=Both projects have two folders. One folder for static content (Web) and the second one where I keep my cloud functions (Packages). The main differences are structuring the cloud functions. 

CMS-INDENT INDENT=1 CONTENT=_**With Nimbella:**_ I have to create only the cloud functions by writing them in two files (addVotes.js and getVotes.js). 

CMS-INDENT INDENT=1 CONTENT=_**With AWS:**_ I have to create separate folders for each cloud function, add the JS files, add their dependencies to each folder, and add the .zip file with the node-modules folder, the JS file, and the package.json.

### B. How to Make your App Stateful for the Cloud?

CMS-IMAGECLASS IMAGE=/images/uploads/build-stateful-app-nimbella-vs-aws.png INDENT=1 CLASS=w100 ALT=build stateful app

CMS-INDENT INDENT=1 CONTENT=In order to make the app stateful, I need key-value storage to hold the votes and present the current amount of votes when the page refreshes. Here’s how I was able to achieve that with Nimbella.

CMS-INDENT INDENT=1 CONTENT=**_With Nimbella:_**

CMS-INDENT INDENT=1 CONTENT=**1) Adding Redis (key-value storage) to your project: 
**

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Run `nim project create ProjectName` to create a new project template

CMS-INDENT INDENT=2 CONTENT=Redis is instantly available inside the project

CMS-INDENT INDENT=1 CONTENT=**2) Calling Redis from within your functions:
**

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Import `nim` into the function

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Import `Redis` from nim within the function

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Add code logic that calls on Redis to either update the number of votes or to return the current number of votes (See image below)

CMS-INDENT INDENT=1 CONTENT=**3) Deploying your stateful functions to the cloud:
**

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Make sure your functions are inside the Packages folder in your project

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Run `nim project deploy ProjectName` in your command prompt

CMS-INDENT INDENT=1 CONTENT=Overall, I didn’t have to set up any services because the services I needed to make my app stateful were available from the start. I just had to focus on code logic to call on the services I needed.

CMS-INDENT INDENT=1 CONTENT=Here is an example of the code I used to increment the number of votes:

CMS-IMAGECLASS IMAGE=/images/uploads/build-stateful-app-code.png INDENT=1 CLASS=w100 ALT=build stateful app

CMS-INDENT INDENT=1 CONTENT=_**With AWS:**_

CMS-INDENT INDENT=1 CONTENT=Making an application stateful requires several steps and AWS services. Here’s how I was able to create stateful key-value storage with AWS.

CMS-INDENT INDENT=1 CONTENT=**1) Deploy Redis (key-value storage) cluster on AWS:
**

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Select the AWS ElastiCache service and pick Redis

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Configure Redis settings by providing a name, version, port, parameter group, node type, and how many replicas you want

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Select which VPC you want to connect Your Redis cluster too

CMS-INDENT INDENT=2 CONTENT=**Step 4**: Once complete, hold on to the Primary Endpoint. This is important in the next step

CMS-INDENT INDENT=1 CONTENT=**2) Deploying EC2 on AWS**:

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Click the service tab and search for EC2. Be sure to select the region of your choice

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Click “Launch Instance”

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Choose an instance Type

CMS-INDENT INDENT=2 CONTENT=**Step 4**: Configure the instance (Important: Make sure to select the same VPC you used for ElastiCache)

CMS-INDENT INDENT=2 CONTENT=**Step 5**: Add Storage

CMS-INDENT INDENT=2 CONTENT=**Step 6**: Add tags

CMS-INDENT INDENT=2 CONTENT=**Step 7**: Configure Security Group & review

CMS-INDENT INDENT=2 CONTENT=**Step 8**: Connect SSH to your EC2 instance and then install the Redis CLI

CMS-INDENT INDENT=2 CONTENT=**Step 9**: Connect Redis instance via Redis CLI, making sure you add the primary endpoint of Redis (mentioned in “Deploy Redis cluster on AWS” Step 4)

CMS-INDENT INDENT=1 CONTENT=**3) Deploying Lambda functions on AWS and connecting it with API Gateway:
**

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Search Lambda in the service tab. Make sure your correct region is selected

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Create one function at a time. Select “Author from Scratch”, the functions name, what type of code it is (NodeJS, Python, etc)

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Connect your function with the same VPC as Redis. Go through and select the correct ports

CMS-INDENT INDENT=2 CONTENT=**Step 4**: Connect your functions with API Gateway. Select a trigger for the function, request an HTTP API as the trigger type. You’ll get a URL. You’ll use these URLs to call your functions in your code

### C. How do you Deploy your Stateful App to the Cloud with Static Assets?

CMS-IMAGECLASS IMAGE=/images/uploads/build-stateful-app-api-gateway.png INDENT=1 CLASS=w100 ALT=build stateful app

CMS-INDENT INDENT=1 CONTENT=Now that the static web assets and the cloud functions are complete, It’s time to deploy the entire app to the cloud!

CMS-INDENT INDENT=1 CONTENT=**_With Nimbella:_**

CMS-INDENT INDENT=1 CONTENT=**Deploying to the cloud with Nimbella**:

CMS-INDENT INDENT=1 CONTENT=With Nimbella, you don’t have to configure cloud storage for your front-end static assets or configure a content delivery network (CDN) to serve the application from the cloud. You just tell your code logic to get sent to the cloud and the configuration is handled for you.

CMS-INDENT INDENT=2 CONTENT=**Step 1**: run `nim project deploy ProjectName` in your Command Prompt

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Get the URL that’s provided and paste it in your browser 

CMS-INDENT INDENT=1 CONTENT=**Need to update the code with Nimbella?**:

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Run `nim project deploy ProjectName` after updating the code

CMS-INDENT INDENT=1 CONTENT=**_With AWS:_** 



CMS-INDENT INDENT=1 CONTENT=**Deploying to the cloud with AWS**:

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Go to AWS Services and select AWS S3 to get started making an S3 bucket

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Click the “Create Bucket” button and give the bucket the name and region

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Provide the bucket with the permissions you want it to have

CMS-INDENT INDENT=2 CONTENT=**Step 4**: Upload all the files and folders to the S3 bucket

CMS-INDENT INDENT=2 CONTENT=**Step 5**: Once the files are uploaded, select the option “Static Website Hosting”

CMS-INDENT INDENT=2 CONTENT=**Step 6**: Take the Endpoint and paste it into your browser

CMS-INDENT INDENT=1 CONTENT=**Need to update the code with AWS?**:

CMS-INDENT INDENT=2 CONTENT=**Step 1**: Build it again

CMS-INDENT INDENT=2 CONTENT=**Step 2**: Delete all existing files from the bucket and upload the new build version

CMS-INDENT INDENT=2 CONTENT=**Step 3**: Cross-check that index.html is mentioned in the static web host tab

## Conclusion:

By removing architectural complexity and providing built-in key-value storage and object storage, Nimbella simplifies the big aspects of developing a stateful cloud app and let you and the developer focus on code logic. 

If you’re interested in deploying your stateful app to the cloud, you can get[ started today for free with Nimbella Platform](https://nimbella.com/platform). You can also join [Nimbella’s Community Slack channel](https://nimbella.com/slack) to ask questions and share the project you're working on with our growing community.

If you’re interested in seeing the code. You can [click here for the Nimbella version](https://github.com/JamieDawson/Dog_or_cat/tree/master/picture) and [click here for the AWS version.](https://github.com/JamieDawson/dog_or_cat_for_aws)
