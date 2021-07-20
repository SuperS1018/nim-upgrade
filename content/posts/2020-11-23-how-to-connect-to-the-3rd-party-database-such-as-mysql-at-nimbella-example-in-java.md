---
title: >-
  How to connect to the 3rd party database such as MySQL at Nimbella (example in
  Java)
status: Published
date: 'November 23, 2020 9:41 AM'
postFeaturedImage: >-
  /images/uploads/how-to-connect-to-the-3rd-party-database-such-as-mysql-at-nimbella.png
excerpt: >-
  With Nimbella, we can easily integrate any DB into any language like the way a
  beginner learns JDBC, PyMongo, etc. Implementation through their IDE.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    With Nimbella, we can easily integrate any DB into any language like the way
    a beginner learns JDBC, PyMongo, etc. Implementation through their IDE.
  shareImageUrl: >-
    /images/uploads/how-to-connect-to-the-3rd-party-database-such-as-mysql-at-nimbella.png
  title: >-
    How to connect to the 3rd party database such as MySQL at Nimbella (example
    in Java)
---
With [Nimbella](https://nimbella.com), we can easily integrate any DB into any language like the way a beginner learns JDBC, PyMongo,etc. Implementation through their IDE.

This blog is a part 1 on illustrating basic DB Integration with Nimbella. Also note that there will be performance issues during high traffic since MySQL is not designed to scale by default.

**Let’s  create a Table named "Runs" which contains the data of Cricket Players as shown.**

CMS-IMAGECLASS IMAGE=/images/uploads/create-database-in-mysql.png INDENT=0 CLASS=w75 ALT=Create a Database in MySQL

Please consider that we are going to create an [API in the Nimbella Platform](https://nimbella.com/integrations/postman) which returns player data as per the player Name in the Request.

Create a Maven Project (**getplayerstats**) and then Create a package (**playerdata**) under src/main/java and then Create the Following Files.

CMS-IMAGECLASS IMAGE=/images/uploads/create-playerdata-package.png INDENT=0 CLASS=w75 border ALT=Create a playerdata package

1. **DBUtil.java:**
   — to facilitate DB Operations which contain below methods

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step1.png INDENT=1 CLASS=w100 border ALT=DBUtil.java

2. **GetPlayerData.java**
   — contains a main method, which returns the Json Object as Response and receives the Client request in the Form of JsonObject as arguments. Client Request lifecycle starts and ends in this main method.

CMS-INDENT INDENT=1 CONTENT=i.e, when a client sends a request mapped to this function, Nimbella receives the request and forwards it to this function and returns the response of the main method to the client as Response.

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step2.png INDENT=1 CLASS=w100 border ALT=GetPlayerData.java

3. **Player.java **
   — Data model class for the Player Object

CMS-INDENT INDENT=1 CONTENT=i.e, it contains the getter,setter for Player Object.

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step3.png INDENT=1 CLASS=w50 border ALT=Player.java

4. **PlayerDao**
   — DAO for the Player object. The Data Access Object  (DAO) is an object or an interface that provides access to an underlying database,

CMS-INDENT INDENT=1 CONTENT=i.e., it provides an abstraction between database and business logic.

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step4.png INDENT=1 CLASS=w75 border ALT=PlayerDao

5. **PlayerDaoImplementation.java** 
   — This class will be used as a DAO to perform CRUD operations.

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step5.png INDENT=1 CLASS=w75 border ALT=PlayerDaoImplementation.java

6. **Build.sh File:**
   Nimbella creates a jar file containing all the libraries mentioned in the pom.xml. To do so, we need to create a build.sh file in the root directory of the project.

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step6.png INDENT=1 CLASS=w75 border ALT=Build.sh File

7. **Pom.xml**

CMS-IMAGECLASS IMAGE=/images/uploads/create-3rd-party-database-in-nimbella-step7.png INDENT=1 CLASS=w75 border ALT=Pom.xml

## Set up Nimbella for Deployment:

1. [**Create an account**](https://nimbella.com/signup)** in Nimbella and **[**install nim CLI**](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes)** and then log in to it, as below**

   CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-step1-1.png INDENT=0 CLASS=w100 ALT=Set up Nimbella for Deployment 1-1

   CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-step1-2.png INDENT=0 CLASS=w100 ALT=Set up Nimbella for Deployment 1-2

   (or )
   Execute below command in CLI. On successful login, it would look like below
   ```
   nim login
   ```
   CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-step1-3.png INDENT=0 CLASS=w100 ALT=Set up Nimbella for Deployment 1-3
2. **Get Base URL/workspace By Executing below command:** 
   ```
    nim auth current
   ```

CMS-IMAGECLASS IMAGE=/images/uploads/set-up-nimbella-for-deployment-step2.png INDENT=1 CLASS=w100 ALT=Set up Nimbella for Deployment 2

## Deployment Procedure:

Everything is set properly. Now it's time to deploy our Maven project into Nimbella. To Deploy we should follow a specific folder structure as [per Nimbella’s recommendation](https://nimbella.com/docs/platform/getting-started/add-function).

We have created a maven project named "**getplayerstats**". Now we are going to do the below.

1. Create a Folder named "**CricketStatsApp**" and create a folder named "packages" inside it.
2. Inside "**CricketStatsApp**" folder we are going to create another file named project.yml, which is used as a Deployment configuration file in Nimbella.

CMS-IMAGECLASS IMAGE=/images/uploads/deployment-procedure2.png INDENT=1 CLASS=w75 ALT=Deployment Procedure 2

3. Now we are going to create a folder named "**cricket**" and paste the created Maven project directory inside it.
   Our Project Directory looks as below.

CMS-IMAGECLASS IMAGE=/images/uploads/deployment-procedure3.png INDENT=1 CLASS=w50 border ALT=Deployment Procedure 3

## Deployed URL:

As per the above folder structure, the URL for Our Function will be

<https://pathitha-4mpb1smu66t-apigcp.nimbella.io/api/cricket/getplayerstats>

<https://pathitha-4mpb1smu66t-apigcp.nimbella.io/api/> →BaseURL/Nimbellaworkspace

cricket/getplayerstats →End point as per Folder Creation

## **How to Configure Environment Variables in Nimbella for deployment: **

1. In the Project.yml file specify the environment variables to be used for deployment under the "environment" section inside the respective function block, as below.

CMS-IMAGECLASS IMAGE=/images/uploads/config-environment-variables-in-nimbella-for-deployment-step1.png INDENT=1 CLASS=w75 border ALT=Configure Environment Variables in Nimbella for deployment 1

2. Create a .env file and mention the values of the environment variables in this file, as below.

CMS-IMAGECLASS IMAGE=/images/uploads/config-environment-variables-in-nimbella-for-deployment-step2.png INDENT=1 CLASS=w50 border ALT=Configure Environment Variables in Nimbella for deployment 2

Once done, we can run Nimbella’s deployment command by passing the path of the environment (.env) file as an argument to set the environment variables for the Serverless function.

## Deployment Command:

```
 nim project deploy CricketStatsApp --env={path of environment file}
```

CMS-IMAGECLASS IMAGE=/images/uploads/deployment-command.png INDENT=0 CLASS=w100 ALT=Deployment Command

[Access API using Postman](https://nimbella.com/integrations/postman):

Once deployment is over, API can be accessed through Postman to retrieve the stored Player data from 3rd Party DB(MySQL).

CMS-IMAGECLASS IMAGE=/images/uploads/access-api-using-postman1.png INDENT=0 CLASS=w75 ALT=Access API using Postman 1

CMS-IMAGECLASS IMAGE=/images/uploads/access-api-using-postman2.png INDENT=0 CLASS=w75 ALT=Access API using Postman 2

CMS-IMAGECLASS IMAGE=/images/uploads/access-api-using-postman3.png INDENT=0 CLASS=w75 ALT=Access API using Postman 3

## In Brief:

1. [Create a Nimbella account](https://nimbella.com/signup) and install Nimbella CLI
2. [Login to the CLI](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) with "_nim login_"
3. Create a Maven project and write your logic to connect & retrieve data from an external database and return a JSON object, having the data as a response inside the "body" attribute.
4. Create build.sh and provide artifact id from pom.xml in this.
5. Create a packages folder which encloses all these Maven project files.
6. Create project.yml and specify the file where the main method is written.
7. Configure Environment Variables for the deployment through the project.yml file.
8. Deploy the project and [hit Postman](https://nimbella.com/integrations/postman) with the deployed URL once it's deployed to get the response.

**GitHub Source:** <https://github.com/boltathi24/nimbella-sql-java>

By - Athithan Raj P.
Follow him on Twitter: [@raj_athithan](https://twitter.com/raj_athithan)
