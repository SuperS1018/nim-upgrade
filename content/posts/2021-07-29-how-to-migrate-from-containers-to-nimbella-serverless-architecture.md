---
title: How to Migrate from Containers to Nimbella Serverless Architecture
status: Published
date: 'July 29, 2021 12:30 PM'
postFeaturedImage: /images/uploads/blog-cover-5blog-6-cover.png
excerpt: >

  In this article, you will learn about container deployment, serverless
  deployment, and the steps & benefits of migrating containers to the Nimbella
  serverless platform.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    Learn about container deployment, serverless deployment, and the steps &
    benefits of migrating containers to the Nimbella serverless platform.
  title: How to Migrate from Containers to Nimbella Serverless Architecture
---
Serverless and containers are different cloud application development approaches that can enable faster and more reliable deployment of web applications.

In this article, we shall learn about container deployment, serverless deployment, and the steps & benefits of migrating containers to the Nimbella serverless platform.

## **Prerequisites:**

* Knowledge of HTML, CSS & JavaScript
* Basic Knowledge of Serverless architecture
* Node & Docker installed on the local development machine

## **What are containers?**

A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. Thus, containers make sure that software runs correctly when it is moved from one computing environment to another. The image below depicts how apps get deployed in a containerized environment. [Docker Container Documentation](https://docs.docker.com/get-started/overview/) explains it in detail.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_1.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

## **What is serverless?**

[Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing) is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_2.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

## **Why containers and serverless are related but different?**

The below image illustrates how serverless and containers are related but different.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_3.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

## **When is serverless better than containers?**

```
Serverless offers the following over containers and is well suited in such cases.
```

1. Fast-growing apps requiring quick deployments and changes
2. Serverless is a pay-per-request model and can be inherited when traffic is unpredictable, results in cost-effectiveness
3. There’s no worry about scalability since a serverless provider manages it
4. Deployment simplicity is what makes Serverless incredible. There’s no administration of infrastructure needed

## **When containers are better than serverless?**

Serverless has restrictions in terms of memory and size. Hence containers are preferred for long-running processes. Serverless provides a decreased start-up time and latency when compared to containers.

Let’s learn container deployment and then the steps to deploy the same app on Nimbella serverless platform by deploying a developer portfolio website on both with the below steps.

The below diagram depicts the architecture of our portfolio app.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_4.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

### Step 1: Creating a simple App (Developer Portfolio site with React.js & Node.js)

**GitHub Source: 
**

[https://github.com/boltathi24/Dockerized_Developer_Portfolio_React_Node/
](https://github.com/boltathi24/Dockerized_Developer_Portfolio_React_Node/)

Please consider that we are going to create a  developer portfolio website using **React.js** as front-end, **Node.js** as the back-end, and **MongoDB** as Data Storage.

**React.js as Front-End:
**

Let's create our react app to bring the below to fruition.

1. A clean UI to depict the skills and uniqueness of a Developer.
2. A contact me form to collect visitor queries.

We can create React boilerplate code by running below in the terminal.

```
npx create-react-app {appName}
```

Once created, let’s modify and design our front-end in the usual React.js way using React Components as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_5.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_6.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

Let us create an API that stores the queries from visitors using Node.js as below.

**Node.js Back-end:**

Please consider that we are going to store the queries into a [free cloud MongoDB instance](https://www.mongodb.com/free-cloud-database).

Let’s initiate the project by running the below command in the terminal.

```
npm init -y
```

We need to install express (for creating server-side web applications), mongoose (to interact with MongoDB) by running the below command in the terminal.

```
npm install express mongoose
```

Let's code the logic to store the queries into DB as below.

<https://gist.github.com/boltathi24/0c750f8e382051e6dcec184ea930e92b>

### Step 2: Running the app in Docker Container

We can run our app on docker with the below steps.

1. Create a Dockerfile (contains command line to assemble an image)

**Dockerfile for Express API:**

<https://gist.github.com/boltathi24/f0e30e2bbe54fdf632444408e7c2fb96>

**Dockerfile for React App:**

<https://gist.github.com/boltathi24/54baf4ab6d338869176bddc2007b5a35>

2. Define services in a docker-compose.yml file (include above docker file inside this yml configuration)

**docker-compose.yml for Express API**:

<https://gist.github.com/boltathi24/130aa62c27e70f795ed0f7ab2fe44678>

**docker-compose.yml for React App:**

<https://gist.github.com/boltathi24/378412fd1a8ce9a40702295fd9a1df0f>

3. Build and run your app with the Docker Compose tool

We can run our React & Express App in a container by running the below command from the respective docker-compose.yml file directory.

```
docker-compose up -d
```

We can see our react app live on the port specified in Dockerfile.

We can ensure the same by running the below docker command.

```
docker ps
```

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_7.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

Now, We have created the developer portfolio app and deployed it inside a container. Let's learn how we can do the same with Nimbella Serverless.

**Running App on Serverless:**

### Step 3: Creating a new account on Nimbella

Let’s do the below steps to get started with the [Nimbella platform for deployment in 2 mins](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes).

1. Create an [account in Nimbella](https://nimbella.com/signup)
2. [Install nim CLI](https://docs.nimbella.com/install/)
3. Login to nim CLI with the below command


```
nim login
```

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_8.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

We are a step away from deploying our app in Nimbella. We need to modify the directory structure. 

### Step 4: Updating the app for Nimbella

As per [Nimbella’s Deployment Standard](https://nimbella.com/resources/platform/getting-started), the back-end/actions code for API has to be placed under a directory named “**packages**” and front-end/static code into a directory named "**web**".

Please follow the below steps to migrate our **React App to Nimbella **

1. Wrap the React/front-end code inside the directory named web
2. Create **build.sh** and specify below commands inside to build the React App

<https://gist.github.com/boltathi24/023ccfe738961411e7740fc47d3e7c3d>

3. Create **.include** file and specify “build” inside as the Build directory of our React App is identified with this file

<https://gist.github.com/boltathi24/a0c35ee33f6f83d6a17335a8efcee6bf>

Please follow the below steps to Migrate our **Node.js based App to Nimbella**

In brief, we would have coded our business logic inside the routes specified in Express.

To migrate to Nimbella, we just need to wrap the same business logic inside the main function as below. 

<https://gist.github.com/boltathi24/9ced4d6bd82b4498dbfa4ac89ad50029>

Please note that in express, we have specified the desired URL path inside the Routes But in Nimbella, the directory name represents endpoints, once deployed. Hence the directory name needs to be created with the name of the endpoints we would like to have in our API.

To migrate the express app to Nimbella, create a directory named packages.

Inside packages, create a directory that represents the app name as “form”.

Inside the app directory, create another directory as “insert” that represents serverless action. Now copy the serverless function which we have written inside the serverless action directory.

The below diagram depicts the directory structure on the Nimbella platform.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_9.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

Our app’s final directory after modifying the directory as specified looks as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_10.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

### Step 5: Running/Testing the app

Create a project.yml file and configure it for deployment as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_11.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

Let’s make our app live by running the below command.

```
nim project deploy {application’s directory} --env={path of environment file}
```

Our App and API are deployed successfully into the Nimbella Serverless Platform as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_12.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

​​

As per the above execution log, we can access our app with the below URL→ [https://dlrowtlo-jyam4452nxf-apigcp.Nimbella.io/](https://dlrowtlo-jyam4452nxf-apigcp.nimbella.io/)

You can get your serverless URL of Serverless action/API by running the below.

```
nim action get {actionName} --url
```

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_13.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

We have successfully migrated a developer portfolio app from containers to Nimbella Serverless Platform and the app can be accessed at the link below.

[https://dlrowtlo-jyam4452nxf-apigcp.Nimbella.io/](https://dlrowtlo-jyam4452nxf-apigcp.nimbella.io/)

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot_14.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

Github Source: <https://github.com/boltathi24/Nimbella_Developer_Portfolio_React_Node>

**TL;DR**

Serverless and containers came into existence as an evolution towards maximizing utilization of computational power. We can migrate from containers to serverless with the below steps.  

1. [SignUp/Login to Nimbella](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) account by installing nim CLI.
2. Wrap the business logic used inside existing API methods as functions.
3. Modify the directory of existing code as per serverless standards.
4. Configure a [project.yml](https://gist.github.com/boltathi24/0d78462d22dc44cecf14ed883b2cbbf3) file for serverless deployment.
5. Deploy into Nimbella using deploy command.

## **Benefits for Migrating Containers to Nimbella Serverless**

1. Zero administration yet provides high security to date.
2. The aforementioned scalability problem of containers is avoided. 
3. By reducing the overhead complexity of infra, developers can focus more on business logic resulting in faster time to market with reliability.
4. Delivering code changes more frequently and reliably using [CI/CD Pipeline](https://nimbella.com/blog/ci/cd-pipeline-with-github-actions).
5. No need to worry about scalability during unpredicted traffic.
6. Developers do not need to worry about purchasing, provisioning, and managing backend servers.
7. Pay per request model facilitates cost-effectiveness since you pay only when service is consumed by the user.
8. Dedicated secure domain.
9. Integrated key-value store.
10. Integrated object-store.
11. Integrated logging & monitoring.
12. Global CDN.
13. MultiCloud deployment and much more.

Nimbella is named a strong performer in the serverless world by [Forrestor](https://nimbella.com/forrester-report). Please feel free to check out how Nimbella spreads the power of serverless on [CRN](https://www.crn.com/slide-shows/cloud/the-20-coolest-cloud-infrastructure-companies-of-the-2021-cloud-100/14) & [Rishdot Research](https://nimbella.com/whitepaper).

**Author details: Athithan Raj P**

Athithan started his career with Cognizant and experienced himself in the testing field primarily. Later he started getting involved in different fields like Development, Security, Content writing, etc. He now works with a reputed organization as a Software Development Engineer in Test where he is responsible for the product quality through Automation.

**Follow him on Twitter:** [@raj_athithan](https://twitter.com/raj_athithan)
