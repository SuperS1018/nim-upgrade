---
title: CI/CD pipeline with GitHub Actions
status: Published
date: 'March 1, 2021 5:47 PM'
postFeaturedImage: /images/uploads/blog-ci-cd-pipeline-with-github-actions.jpg
excerpt: >-
  In this blog, we are going to learn step-by-step how to set up a Serverless
  CI/CD pipeline on Nimbella using GitHub Actions.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    In this blog, we are going to learn step-by-step how to set up a Serverless
    CI/CD pipeline on Nimbella using GitHub Actions.
  shareImageUrl: /images/uploads/blog-ci-cd-pipeline-with-github-actions.jpg
  title: CI/CD pipeline with GitHub Actions
---
In this blog, we are going to learn step-by-step how to set up a Serverless CI/CD pipeline on Nimbella using GitHub Actions.

## What is CI/CD?

**Continuous Integration** refers to the practice of creating a build as a new code.Comment end is committed to running automated tests against that build to verify that everything works correctly.

**Github-ci-cd:** https://docs.github.com/en/actions/guides/about-continuous-integration

**Continuous Delivery **is the practice of automatically deploying code to production. 

CMS-IMAGECLASS IMAGE=/images/uploads/ci-cd-flow-1.jpg INDENT=0 CLASS=w100 ALT=CI/CD Flow

CMS-CAPTION ALIGN=center CONTENT=CI/CD Flow

CI/CD pipeline is one of the best practices for devops teams to implement, for delivering code changes more frequently and reliably.

### CI/CD with GitHub Actions on Nimbella

[GitHub Actions](https://github.com/features/actions) let you build, test, and deploy your code right from GitHub.

[Nimbella](https://nimbella.com/platform) is a modern serverless platform in which CI/CD can be implemented with modern CI/CD Pipeline GitHub actions that result in saving developers time and effort. 

CMS-IMAGECLASS IMAGE=/images/uploads/ci-cd-github-actions.jpg INDENT=0 CLASS=w100 ALT=CI/CD on Nimbella using GitHub Actions

CMS-CAPTION ALIGN=center CONTENT=CI/CD on Nimbella using GitHub Actions

We can implement CI/CD pipeline on Nimbella using GitHub Actions with the below steps. 

1. Build the App.
2. Write an Automated Test for the App.
3. Set-up CI/CD using GitHub Action.

#### 1.Build the App

Please consider that we are going to build a real-time URL shortener app. We can create our shortener app with Node.js as backend and React.js as frontend which can be deployed into Nimbella Serverless Platform as mentioned in the article below. 

[How to deploy Node.js functions on Nimbella.](https://nimbella.com/blog/how-to-deploy-node-js-functions-on-nimbella) 

We may set up a free mongo DB cluster as Database for our app by referring to [Get Started with Atlas](https://docs.atlas.mongodb.com/getting-started).

Please note that to run this application, you'll need to have Git, Node.js, and NPM already installed.

Let's clone the code into our local directory using the below command.

```
git clone https://github.com/bolt-hub/github-ci-cd-nimbella-shortener.git
```

The directory having the code for our shortener app looks as below:

CMS-IMAGECLASS IMAGE=/images/uploads/project-directory-shortener-app-1.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Project Directory of Shortener App

CMS-CAPTION ALIGN=center CONTENT=Project Directory of Shortener App

#### 2.Write Automated Test for the App

Automated testing enables continuous testing and ensures that bugs get found early and are fixed before the end-users experience any breaks.

Please consider that we are going to write our automated test with the popular [Jest Framework](https://jestjs.io/). Let's execute the below commands from the root of the project directory to install npm packages for the Jest framework.

```
npm init -y 
```

```
npm install --save-dev jest mongoose nanoid dotenv
```

Create Jest configuration files i.e, jest.config.js & jest.setup.js, and change the test script defined in package.json to run the Jest binary. Now when we run the test script, this Jest command is going to run.

After updating the Jest test run command in package.json, it looks as below.

CMS-IMAGECLASS IMAGE=/images/uploads/package-json-after-updating-test-run-command.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Package.json after updating test Run command

CMS-CAPTION ALIGN=center CONTENT=Package.json after updating test Run command

Create a test file that validates test cases for the app using Jest Framework as below.

```
const { Mongoose } = require("mongoose");
const app = require("./index");
const mongoose = require('mongoose')

describe("Validates Response when URL Shortener is Requested", () => {
 test("Validates Response URL shortener for Positive flow", async () => {
   var requestBody = {
     actual_url: "https://nimbella.com/blog/how-to-deploy-node-js-functions-on-nimbella",
   };
   var appResponse = await app.main(requestBody);

   expect(appResponse.body.success).toBe(true);
   expect(appResponse.statusCode).toBe(200);
 });
});

afterAll(async done => {
 // Closing the DB connection allows Jest to exit successfully.
 mongoose.connection.close();
 done();
});
```

After writing test validation for our serverless action, the directory will look as below:

CMS-IMAGECLASS IMAGE=/images/uploads/directory-structure-after-adding-automated-tests-1.png INDENT=0 CLASS=w25 d-block mx-auto ALT=Directory Structure after Adding Automated Tests

CMS-CAPTION ALIGN=center CONTENT=Directory Structure after Adding Automated Tests

#### 3.Set-up CI/CD using GitHub Action

Create a new Repository in GitHub. Navigate to the Actions tab on this repository and set up a basic workflow.

CMS-IMAGECLASS IMAGE=/images/uploads/github-actions-link-on-repository.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=GitHub Actions Link on Repository

CMS-CAPTION ALIGN=center CONTENT=GitHub Actions Link on Repository

Let's clone our new repo which has default GitHub actions and move the code for Shortener into this.

We can get a non-expiring token to deploy our app into Nimbella by running the below command on [nim CLI](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes).  

```
nim auth export --non-expiring
```

Copy the token generated from the above command and add it as a GitHub secret. Also, add the environment variables of serverless action as GitHub secrets as below.

CMS-IMAGECLASS IMAGE=/images/uploads/configuring-github-secrets.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=Configuring GitHub Secrets

CMS-CAPTION ALIGN=center CONTENT=Configuring GitHub Secrets

The final step of configuring the Specification CI/CD pipeline on Nimbella using GitHub Action is to modify the YAML file under ./GitHub/workflows as per our deployment specifications as below.

CMS-IMAGECLASS IMAGE=/images/uploads/github-actions-yaml-specification-1.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=GitHub Actions YAML Specification

CMS-CAPTION ALIGN=center CONTENT=GitHub Actions YAML Specification

Once the above configuration is specified, whenever code changes are pushed to the repository, GitHub Action will trigger the configured CI/CD Pipeline/workflow to achieve CI/CD.

Let's test the CI/CD workflow by pushing the code to the repository. After pushing the code changes, if we check-out the "Actions" tab of the repository, it will look as below which indicates that CI/CD workflow has been triggered.

CMS-IMAGECLASS IMAGE=/images/uploads/github-actions-trigger-workflow.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=GitHub Actions Triggers Workflow

CMS-CAPTION ALIGN=center CONTENT=GitHub Actions Triggers Workflow

CMS-IMAGECLASS IMAGE=/images/uploads/successful-job-run-through-github-actions.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=Successful Job Run through GitHub Actions

CMS-CAPTION ALIGN=center CONTENT=Successful Job Run through GitHub Actions

### In Brief and to Sum-up:

1. Build your code as per Nimbella's serverless framework structure
2. Create Automated Test to validate serverless action
3. Create a GitHub Repo and navigate to Actions tab of the Repo and set up a sample GitHub workflow.
4. Configure Nimbella's Auth token & environment variables under GitHub Secrets of the same Repo.
5. Modify the GitHub action's YAML file to test deploy the app using nim CLI.
6. Push/Pull (as mentioned in the YAML file) the code to trigger the workflow.

#### GitHub Source: https://github.com/bolt-hub/github-ci-cd-nimbella-shortener.git

**Please feel free to experiment with CI/CD workflow on Nimbella using the above example with few steps given below.**

1. Create a [Nimbella Account](https://nimbella.com/signup) and [install nim CLI](https://docs.nimbella.com/install).
2. Create a new Github Repo and configure the environment variables & Nimbella’s Auth token as GitHub secrets on the same Repo.
3. Clone the above code from Git and push it to your newly created Repo. Once the workflow run has been completed, you may check-out your live URL shortener as below.

CMS-IMAGECLASS IMAGE=/images/uploads/deployment-log-info.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=Deployment Log info

CMS-CAPTION ALIGN=center CONTENT=Deployment Log info

CMS-IMAGECLASS IMAGE=/images/uploads/nimbella-url-shortner.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=URL Shortner



Guest Author: Athithan Raj P.

Follow him on Twitter: [@raj_athithan](https://twitter.com/raj_athithan)
