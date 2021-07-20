---
title: Kick-Start Your Serverless Journey
status: Published
date: 'December 17, 2020 8:59 PM'
postFeaturedImage: /images/uploads/blog-kick-start-your-serverless-journey.png
excerpt: >-
  Serverless computing is a cloud computing execution model in which the cloud
  provider runs the server, and dynamically manages the allocation of machine
  resources. Pricing is based on the actual amount of resources consumed by an
  application, rather than on pre-purchased units of capacity.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    Pricing is based on the actual amount of resources consumed by an
    application, rather than on pre-purchased units of capacity ✔
  shareImageUrl: /images/uploads/blog-kick-start-your-serverless-journey.png
  title: Kick-Start Your Serverless Journey
---
[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing) is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity. 

CMS-IMAGECLASS IMAGE=/images/uploads/server-computing1.png INDENT=0 CLASS=w75 ALT=Serverless computing

## How Serverless Works

Developers write code logic as a function and deploy it on a serverless platform. The flow shown below depicts the general way of how serverless processes client requests once the function is deployed. The exact amount of resources needed is allocated dynamically by the cloud provider instead of pre-provisioning resources in the usual cloud services. This makes a win-win situation between the serverless consumer and serverless provider.

CMS-IMAGECLASS IMAGE=/images/uploads/how-serverless-work1.png INDENT=0 CLASS=w75 ALT=How Serverless Works

### Benefits

Serverless is inevitable. Some of its benefits are: 

* Build highly scalable application instantly. 
* Focus only on the App’s code logic by getting rid of Server logic and Infra Set up.
* Highly secure. i.e., secure app’s code alone and not infra or other security concerns.
* Budget-friendly since you pay only when users consume.
* Ship ideas faster to market and analyse the market's response.

## How to deploy a function in a Serverless environment? (example)

We shall create a custom business landing page where we showcase what businesses do and connect with business users through a contact us form using React.js (for front-end), Node.js(for back-end) and MongoDB (as the database). Let’s implement our serverless application with [Nimbella](https://nimbella.com) which is one among a number of serverless cloud providers like AWS Lambda, Google Cloud Functions, etc.,

## Directory Structure to Deploy Serverless In Nimbella:

As per Nimbella, front-end code needs to be wrapped inside a directory named "web" whereas back-end code is kept  inside a directory named "packages". Also note that the directory name acts as end-point once deployed. Hence name the directory as per the name of end-points you would like to create.

CMS-IMAGECLASS IMAGE=/images/uploads/directory-structure-to-deploy-serverless-in-nimbella1.png INDENT=0 CLASS=w50 ALT=Directory Structure to Deploy Serverless In Nimbella

## Steps to Follow to Make Our App Live:

1. Create a serverless function which stores the enquiry details from users into the database with Node.js.
2. Create a React front-end which consumes an Api Created from the above step to facilitate the user interface.
3. [Set up Nimbella](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) and Login Nim CLI. Deploy both front-end and back-end into Nimbella Serverless platform through Nim CLI.

CMS-IMAGECLASS IMAGE=/images/uploads/steps-to-follow-to-make-our-app-live1.png INDENT=0 CLASS=w75 ALT=Steps to Follow to Make Our App Live

## Step #1 Developing Back-End Serverless function:

Like any business landing pages, when a user enquiry is being received, we will be storing it in our DB and will get back to the user to resolve their query. The process flow for the same is depicted as below.

CMS-IMAGECLASS IMAGE=/images/uploads/step1-developing-back-end-serverless-function1.png INDENT=0 CLASS=w25 mx-auto d-block ALT=Developing Back-End Serverless function

Create a directory for the app and navigate to the directory. And then create an index.js file. 

Run the command below to initialize the project and provide the entry point as index.js. 

```
npm init
```

We need to install npm packages mongoose (to interact with MongoDB)

```
npm install mongoose
```

### Implementing App Logic

As per the process flow depicts, we need to store the user enquiry details into our mongoDB. 

For that, we carry out the following: 

1. Establish MongoDB connection
2. Create model for user enquiry details
3. Store it in the DB and return a JSON response having the acknowledgement inside the "body" attribute. The code for the same is shown below.

CMS-IMAGECLASS IMAGE=/images/uploads/implementing-app-logic1.jpg INDENT=0 CLASS=w75 ALT=Implementing App Logic

Now our directory, having a back-end serverless function in Node.js is shown below.

CMS-IMAGECLASS IMAGE=/images/uploads/back-end-serverless-function-in-nodejs1.png INDENT=0 CLASS=w75 ALT=Back-end serverless function in Node.js

## Step #2 Developing Front-End

Create the front-end for our business landing page having fields to get enquiry details in React with below command.

```
npx create-react-app {my-app-name}
```

Let’s modify and design our front end in the usual React.js way and consume our API developed with the above steps using the npm package "axios".

CMS-IMAGECLASS IMAGE=/images/uploads/step2-developing-front-end1.jpg INDENT=0 CLASS=w75 ALT=Developing Front-End

### Structuring the Directory for Deployment

As mentioned earlier, we will wrap out front-end code inside the "web" directory and the back-end code inside the "packages" directory.

Inside the web directory, create two files, as build.sh and .include

**.include** → the Build directory of our React App is identified in this file.

CMS-IMAGECLASS IMAGE=/images/uploads/structuring-the-directory-for-development-include1.png INDENT=0 CLASS=w25 ALT=.include

**build.sh** →  contains the npm command to build the React App.

CMS-IMAGECLASS IMAGE=/images/uploads/structuring-the-directory-for-development-buildsh1.png INDENT=0 CLASS=w50 ALT=build.sh

Once the directory structure is modified as specified, it appears as shown below:

CMS-IMAGECLASS IMAGE=/images/uploads/structuring-the-directory-for-development1.png INDENT=0 CLASS=w75 ALT=Directory structure

**Project.yml File** 

In Nimbella, we will be specifying the artifacts to be deployed in a yml configuration file. Let’s create a file named "project.yml" and specify the configuration for deployment as below.

CMS-IMAGECLASS IMAGE=/images/uploads/structuring-the-directory-for-development-project-yml1.png INDENT=0 CLASS=w75 ALT=Project.yml File

### How to configure the environment variable in Nimbella for deployment

Create a .env file having the values of the environment variables to be used ins. Environment values will be passed to the functions through Nimbella by specifying the variables in project.yml under the environment section.

CMS-IMAGECLASS IMAGE=/images/uploads/how-to-configure-the-environment-variable-in-nimbella-for-development-env1.png INDENT=0 CLASS=w50 ALT=How to configure the environment variable in Nimbella for deployment

## Step #3 Set up Nimbella for Deployment:

1. [Create an account](https://nimbella.com/signup) in Nimbella, and [install nim CLI](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) and then log in with the command below in nim CLI.
   ```
   nim login
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/setup-nimbella-for-development-11.png INDENT=1 CLASS=w100 ALT=Create an account in Nimbella

2. Deploy the application in Nimbella with the command below in nim CLI.
   ```
   nim project deploy {application’s directory} --env={path of environment file}
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/setup-nimbella-for-development-2-11.png INDENT=1 CLASS=w100 ALT=Deploy in Nimbella with nim CLI

CMS-IMAGECLASS IMAGE=/images/uploads/setup-nimbella-for-development-2-21.png INDENT=1 CLASS=w100 ALT=Deploy in Nimbella with nim CLI

3. Get the URL of deployed serverless function/action with the command below.
   ```
   nim action get {deployed action’s name} --url
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/setup-nimbella-for-development-31.png INDENT=1 CLASS=w100 ALT=URL of deployed serverless function/action

Hurray! Our API is deployed to the above URL and the front-end is deployed to the host of our API.

Let’s test our API for the Shortener service with [Postman](https://nimbella.com/integrations/postman).

CMS-IMAGECLASS IMAGE=/images/uploads/test-api-for-shortener-service-with-postman1.png INDENT=0 CLASS=w75 ALT=Test our API for the Shortener service with Postman

Let’s try our App through UI by visiting the host URL of our API https://athithan-thk5opxvfdh-apigcp.nimbella.io/ 

CMS-IMAGECLASS IMAGE=/images/uploads/try-app-through-ui1.jpg INDENT=0 CLASS=w75 ALT=Try our App through UI

GitHub Source: https://github.com/boltathi24/custom_form_nimbella

The blog is written by the guest author: **Athithan Raj P. as a part of "Off-by-none" contest.**

**Follow him on Twitter: **[**@raj_athithan**](https://twitter.com/raj_athithan)
