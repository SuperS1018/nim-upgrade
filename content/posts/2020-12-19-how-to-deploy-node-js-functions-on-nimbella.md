---
title: How to deploy Node.js functions on Nimbella
status: Published
date: 'December 18, 2020 11:51 PM'
postFeaturedImage: /images/uploads/blog-how-to-deploy-nodejs-functions-on-nimbella.png
excerpt: >-
  Node.js is highly preferred for developing data intensive real-time web
  applications. In this blog, let’s learn how to deploy Node.js functions on the
  Nimbella Serverless platform to build web applications.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    In this blog, let’s learn how to deploy Node.js functions on the Nimbella
    Serverless platform to build web applications ✔
  shareImageUrl: /images/uploads/blog-how-to-deploy-nodejs-functions-on-nimbella.png
  title: How to deploy Node.js functions on Nimbella
---
Node.js is highly preferred for developing data intensive real-time web applications. In this blog, let’s learn how to deploy Node.js functions on the [Nimbella Serverless platform](https://nimbella.com/platform) to build web applications.

Please consider that we are going to build a URL Shortener with Node.js for back-end, React.js for front-end and MongoDB as Database.

CMS-IMAGECLASS IMAGE=/images/uploads/build-a-url-shortener-with-nodejs-react-mongodb.png INDENT=0 CLASS=w75 ALT=Build a URL Shortener with Node.js for back-end, React.js for front-end and MongoDB as Database

## We are going to follow the below steps to build our app and make it live.

1. Create Node.js function and implement logic for URL Shortener.
2. Create React.js front-end which will consume the Shortener service created in the above step.
3. [Set up Nimbella](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes). Log in with nim CLI and deploy both front-end & back-end with deploy command.

Below diagram illustrates how we process the data for our Shortener Service

CMS-IMAGECLASS IMAGE=/images/uploads/diagram-how-to-process-data-for-shortener-service.png INDENT=0 CLASS=w75 ALT=Diagram of how we process the data for our Shortener Service

## Back-end:

### Initializing Node.js application

Create a directory for the app and navigate to the directory. And then, create an index.js file. 

Run the below command to initialize the project and provide the entry point as index.js. 

```
npm init
```

We need to install NPM packages Mongoose (to interact with MongoDB), and nanoid (to create unique short id).

```
npm install mongoose
```

```
npm install nanoid
```

### Establish connection with MongoDB using mongoose package

Let’s create a model for URL data and establish the connection with MongoDB as below in index.js file. We can get the username, password, and cluster URL from environment variables.

CMS-IMAGECLASS IMAGE=/images/uploads/establish-connection-with-mongodb-using-mongoose-package.png INDENT=0 CLASS=w75 ALT=Establish connection with MongoDB using mongoose package

### Implementing App Logic

In general, when a request is received by Nimbella for your deployed serverless function, Nimbella will forward it to the main function by passing the request attributes as arguments and returns the response of the function to the client as response. 

### Redirecting Users

So, let’s create a main function which will deal with the client request. When our function receives a path param, we can conclude that the user is trying to visit the actual URL with a shortened URL. Let’s implement the [redirection](https://github.com/nimbella/docs/blob/master/apache-based/webactions.md#other-web-action-examples) as below.

CMS-IMAGECLASS IMAGE=/images/uploads/redirecting-users.png INDENT=0 CLASS=w75 ALT=Redirecting Users

### Creating Short URLs

When a client request is received to our serverless function without a path param, we can conclude that the user is requesting a short URL with an actual URL. Let’s implement the same as below.

CMS-IMAGECLASS IMAGE=/images/uploads/creating-short-urls-1-1.png INDENT=0 CLASS=w75 ALT=Creating Short URLs 1

Now the index.js file looks as below after logic implementation.

CMS-IMAGECLASS IMAGE=/images/uploads/creating-short-urls-2-1.png INDENT=0 CLASS=w75 ALT=Creating Short URLs 2

Now our back-end code with node.js is completed and the directory looks as below

CMS-IMAGECLASS IMAGE=/images/uploads/backend-code-with-nodejs-completed.png INDENT=0 CLASS=w50 ALT=Back-end code with node.js is completed

## Front-end:

Let’s create a React app as front-end for our URL Shortener with below command

```
npx create-react-app {my-app-name}
```

Let’s modify and design our front-end in the usual React.js way and consume our API developed with the above steps using the NPM package “Axios’.

### Structuring the Directory for Deployment

As per [Nimbella’s Deployment Standard](https://nimbella.com/resources/platform/getting-started), the back-end code for API has to be placed under a directory named “packages” and front-end code into a directory named "web".

Please note that the directory name represents end points, once deployed into Nimbella. Hence the directory name needs to be created with the name of the end points we would like to have in our API.

So, let’s create a directory named "s" as a reference for the Shortener app and copy the Node.js project created into the directory. Copy the whole directory into the directory named "packages".

Likewise, let's copy the code for the front-end (React project) into the directory named “web”.

Once the directory structure is modified as specified, it looks as below:

CMS-IMAGECLASS IMAGE=/images/uploads/directory-structure-modified.png INDENT=0 CLASS=w50 ALT=Directory structure is modified

Inside the web folder, let's create two files named ".include" and "build.sh".

**.include** →  React app’s build directory is mentioned inside this file which gets deployed to Nimbella.

CMS-IMAGECLASS IMAGE=/images/uploads/how-to-deploy-node-include.png INDENT=0 CLASS=w25 ALT=.include

**build.sh** →  contains the npm command to build the react app.

CMS-IMAGECLASS IMAGE=/images/uploads/how-to-deploy-node-buildsh.png INDENT=0 CLASS=w50 ALT=build.sh

**Project.yml File **

In Nimbella, we will be specifying the artifacts to be deployed in a yml configuration file. Let’s create a file named "project.yml" and specify the configuration for deployment as below.

CMS-IMAGECLASS IMAGE=/images/uploads/how-to-deploy-node-project-yml.png INDENT=0 CLASS=w50 ALT=prroject.yml

### How to Configure Environment variable in Nimbella for deployment

Create an .env file having the values of the environment variables to be used. Environment values will be passed to the functions through Nimbella by specifying the variables in project.yml under the environment section.

CMS-IMAGECLASS IMAGE=/images/uploads/how-to-configure-environment-variable-in-nimbella-for-deployment.png INDENT=0 CLASS=w75 ALT=How to Configure Environment variable in Nimbella for deployment

Once the above Steps are done, directory structure looks as below having mentioned files.

CMS-IMAGECLASS IMAGE=/images/uploads/directory-structure-once-steps-done.png INDENT=0 CLASS=w75 ALT=Directory structure

### Set up Nimbella for Deployment

1. [Create an account](https://nimbella.com/signup) in Nimbella and [install nim CLI](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) and then log in with below command in nim CLI.
   ```
   nim login
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-1.png INDENT=1 CLASS=w100 ALT=Login with command in nim CLI

2. Deploy the application in Nimbella with below command in nim CLI
   ```
   nim project deploy {application’s directory} --env={path of environment file}
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-2.png INDENT=1 CLASS=w100 ALT=Deploy the application in Nimbella

3. Get URL of the deployed Serverless action with below command in nim CLI
   ```
   nim action get {deployed action’s name} --url
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-3-1.png INDENT=1 CLASS=w100 ALT=Get URL of the deployed Serverless action

Hurray! Our API is deployed to the above URL and the front-end is deployed to the host of our API.

Let’s test our API for the Shortener service with [Postman](https://nimbella.com/integrations/postman)

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-3-2.png INDENT=0 CLASS=w75 ALT=Test API for the Shortener service with Postman

Let’s try our App through UI by visiting the host URL of our API https://pathitha-4mpb1smu66t-apigcp.nimbella.io/

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-3-3.png INDENT=0 CLASS=w75 ALT=Try App through UI by visiting the host URL

**GitHub Source:** https://github.com/boltathi24/nimbella_node_url_shortner.git

**Guest Author: Athithan Raj P.**

**Follow him on Twitter: **[**@raj_athithan**](https://twitter.com/raj_athithan)
