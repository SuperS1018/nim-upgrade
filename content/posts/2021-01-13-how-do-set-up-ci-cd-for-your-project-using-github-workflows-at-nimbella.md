---
title: How do set up CI/CD for your project using GitHub workflows at Nimbella
status: Draft
date: 'January 13, 2021 5:32 PM'
postFeaturedImage: >-
  /images/uploads/blog-how-do-set-up-ci-cd-for-your-project-using-github-workflows-at-nimbella.jpg
excerpt: >-
  By now few developers or IT managers dispute the importance of DevOps.
  However, it is crucial to understand how it works.  CI (Continuous
  Integration) and CD (Continuous Delivery or Continuous Deployment) are DevOps
  practices as depicted in Figure 1.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    By now few developers or IT managers dispute the importance of DevOps.
    However, it is crucial to understand how it works.  CI (Continuous
    Integration) and CD (Continuous Delivery or Continuous Deployment) are
    DevOps practices as depicted in Figure 1.
  shareImageUrl: >-
    /images/uploads/blog-how-do-set-up-ci-cd-for-your-project-using-github-workflows-at-nimbella.jpg
  title: How do set up CI/CD for your project using GitHub workflows at Nimbella
---
## _Nimbella puts your CI/CD pipeline on steroids - learn how_

By now few developers or IT managers dispute the importance of DevOps. However, it is crucial to understand how it works.  CI (Continuous Integration) and CD (Continuous Delivery or Continuous Deployment) are DevOps practices as depicted in Figure 1.

**Figure 1**

CMS-IMAGECLASS IMAGE=/images/uploads/ci-cd.png INDENT=0 CLASS=w75 ALT=CI & CD

But, how does it really work? Ideally, much of the Dev/Ops process is automated so that developers are able to focus their time on development rather than the mundane mechanics related to underlying infrastructure.

## Continuous Integration

First we’ll explore Continuous Integration. With a version control tool like Github, SVN etc., developers can push their code to the tool as part of the CI Process. In fact, the code from multiple developers can be pushed to the central repository and merged. 

## Continuous Delivery

Next, in the Continuous Delivery process, the merged code is validated, and a unit is built. Integration tests can be performed on the code automatically.

## Continuous Deployment

Then, in the Continuous Deployment process, the code is deployed on the server automatically.

## How do you get this level of automation? Start with Nimbella & GitHub

To start with you just need the following:

* GitHub Account creation
* Nimbella project creation

Figure 2: Nimbella benefits include:

CMS-IMAGECLASS IMAGE=/images/uploads/nimbella-features.png INDENT=0 CLASS=w75 ALT=Nimbella benefits

* Stateful Computing
* Stateless Computing
* It speeds up your Software development - Nimbella has commands to create project stub and also add actions to the project. Developers only need to add business logic. All the mundane, non-coding tasks are handled by Nimbella.
* Scaling of resources

A developer can create a project using Nimbella with a simple command:

* **nim project create:\[projectName]**

Of course business functionality must be added to a Nimbella project (termed a "Nimbella Action"). This business functionality can be written in any of the languages that Nimbella currently supports including: JavaScript, TypeScript, PHP, Python, Java, Go or Swift.

Also, github credentials must be attached to the Nimbella Action. That is done by the simple command:

* **nim auth github — initial**

Nimbella provides a default namespace which is used for development and deployment.

* It has a web content area and a project area
* A redis store
* A DNS name used for deployment purpose

Simple commands control Nimbella such as "**_nim auth list_**", will give you your Nimbella namespace name and details. 

And that’s all it takes to start a deployment.

## Alternative - Manual Deployment

The Nimbella command "**_nim project deploy_**" can be used to deploy a project manually. However, manual deployment entails manual effort every time a change is made to the local repository. This can become a logistical nightmare and defeats part of the advantages of Dev Ops. I suggest adding a CI/CD pipeline as mentioned earlier to deploy code automatically whenever changes are made. 

## A Closer Look at Deployment Using CI/CD Pipeline

Please refer to the following URL for more information about a sample github project for CI/CD pipeline:

https://github.com/niks3089/nimbella-node-project

Five Easy steps for Deployment:

1. Create project Structure
2. Create .env file
3. Create .include and .exclude files
4. Create project.yml to map Nimbella actions
5. Add deployment steps to package.json

**Figure 3: Project Structure**

CMS-IMAGECLASS IMAGE=/images/uploads/nimbella_project_structure1.png INDENT=0 CLASS=w75 ALT=Project Structure

## Nimbella Node Project Structure

Now let’s look at the Nimbella Node structure more closely. As seen in  Figure 3, a typical Nimbella project has several important components:

**Web** — Which contains all static content like HTML, JSX etc.

**Package** — Which contains Nimbella actions. This is typically the business functionality.

**package.json** — This typically is a file which triggers automatic deployment. There are two forms of package.json files:

* The root package.json inside source folder will be used for deployment.
* The package.json inside Nimbella actions like Register and Login will store dependencies for that particular action. Each Nimbella action will have its own package.json.

**build.sh** — For Nimbella projects on a linux system, use build.sh. For Nimbella projects on a Windows system, use build.cmd. This file contains the project build scripts.

The following code snippet is a sample build.sh file.

```
cd nimbus-ui && npm install if [[ -e ../../../.env ]];
then cp ../../../.env .env.production
fi rm -fr buildnpm run build
```

## .env file

The .env file has a key/value pair format and it stores values which are specific to a particular environment. For example, CoffeeImage path on Dev server could be /res1/dev/nim. But, CoffeeImage path on UAT server, could be /res1/uat/nim.

CMS-IMAGECLASS IMAGE=/images/uploads/ci-cd-envs.png INDENT=0 CLASS=w75 ALT=CI CD .env

A developer can create multiple versions (e.g., .env.test and .env.dev) of the file based on various environments involved in the project. However, during build these values must be copied to the .env file as only this file will be used during the build process.

```
USERID=jane
PASSWORD=notanactualpassword
```

## Create .include and .exclude files

* The .include file mentions files, folders and its subsidiaries to be included in the build process.
* The .exclude file mentions files, folders and its subsidiaries to be excluded from the build process.

The demo code shows .include file. In a similar manner .exclude file can be created.

```
nimbus-ui/build
nimbus-ui/example-folder/
```

## Create a project.yml to map Nimbella Actions

A sample project.yml is as follows:

```
bucket: 
   strip: 2
   packages: 
- name: nimbus   
    actions:     
- &default_action       
    environment:         
    NODE_ENV: ${NODE_ENV}         
    DB_HOST: ${DB_HOST}         
    DB_PORT: "${DB_PORT}"         
    DB_USER: ${DB_USER}         
    DB_PASS: ${DB_PASS}         
    DB_NAME: ${DB_NAME}         
    JWT_SECRET: ${JWT_SECRET}        
    API_BASE_URL: ${API_BASE_URL}        
    runtime: nodejs:10       
- <<: *default_action       
    name: register
- <<: *default_action       
    name: login      
- <<: *default_action       
    name: get-image-url
```

The project.yml adds a Nimbella action list.

Nimbella provides a default bucket with the Nimbella cloud account where static content, images etc.

Default action is where a developer can add any Nimbella action. A Nimbella action with any other name can be added in project.yml with the similar code snippet.

Environment specifies the environment variables in the Nimbella project. The variable values come from the .env file name.

## Add deployment steps to package.json

Following is a sample package.json for the root level of the project.

```
{
  "name": "nimbella-node-project", 
  "version": "1.0.0", 
  "description": "Web app for Nimbella node project", 
  "scripts": {   
    "start": "nodemon test/index.js",   
    "db:create": "sequelize-cli db:create --charset utf8mb4 --collate utf8mb4_general_ci",   
    "db:migrate": "sequelize-cli db:migrate",   
    "migration:create": "sequelize-cli migration:generate --name",    "check": "eslint '\*\*/*.js' --ignore-pattern node_modules/ --ignore-pattern web/",   
    "deploy": "nim project deploy src --env .env --yarn",    "ci:deploy": "nim --version && nim auth login $DEPLOYER_LOGIN_TOKEN && npm run deploy",   
    "pretest": "npm run db:migrate && node scripts/create-data.js",    "test": "env NODE_ENV=test jest --coverage --runInBand --forceExit --verbose false" 
  }, 
  "repository": {   
    "type": "git",   
    "url": "git+https://github.com/something/nimbella-node-project.git"
  },
  "dependencies": {   
    "@nimbus/models": "file:plugins/models",  
    "@nimbus/utils": "file:plugins/utils",   
    "axios": "^0.20.0",   
    "bcrypt": "^5.0.0",   
    "dotenv": "^8.2.0",   
    "jsonwebtoken": "^8.5.1",   
    "mysql2": "^2.2.2",   
    "react-scripts": "^3.4.3",   
    "sequelize": "^6.3.5",   
    "sequelize-cli": "^6.2.0" 
  },
  "devDependencies": {  
    "codecov": "^3.7.2",   
    "eslint": "^6.6.0",   
    "eslint-plugin-jest": "^24.0.1",   
    "express": "^4.17.1",   
  }
}
```

Below is the description of every Key of the document:

1. **Name** — specifies the name of the project.
2. **Version** — defines the project version.
3. **Description** — gives a brief description of the project.
4. **Scripts** — gives some start off scripts for Nimbella project which will be used in CI/CD pipeline as follows:
   * **start** — the file that will be used when the app starts.
   * **db:create** — command used for starting the default SQL database that Nimbella provides.
   * **migration;create** — specifies essential commands to start off migration.
   * **deploy** — the main command which actually deploys Nimbella code. It specifies nim project deploy which is the command actually used for deployment along with environment variables passed as command line arguments. Also, it will login using Nimbella credentials and deploy the app.
   * **pretest** — command that runs all the tests to proceed with a project deployment.
5. **Repository** — your github repository starting with
   * https://github.com
6. **Dependencies** — specifies the default dependencies that Nimbella provides because they are general purpose and  used by most developers.
7. **DevDependencies**— All the dependencies (e.g., security modules, bootstrap modules, third party modules) that are required for a development project.

So, that's the whole story.👍

After using these directions to set up your project, try changing something in your code and check your github account. The changes might appear in your github account automatically.😍😍😍

Please like and share my blog post if you like it. Please post any questions and I will try to respond soon.👍👍👍

Author: Rimmi Gandhi.
[Follow her on Twitter](https://twitter.com/rimigandhi1)
