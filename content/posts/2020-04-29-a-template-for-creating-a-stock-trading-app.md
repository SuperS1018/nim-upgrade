---
title: A Template for Creating a Serverless Stock Trading App
status: Draft
date: 'April 30, 2020 4:00 PM'
postFeaturedImage: /images/uploads/blog-a-template-for-creating-a-stock-trading-app.png
excerpt: >-
  This tutorial was created so that you can learn how to build a Stock Trading
  app that runs on the cloud. I'll teach you how we built the frontend and
  backend and show you how to deploy your code so that others can view it
  online.
categories:
  - category: Technology
meta:
  description: >-
    This tutorial was created so that you can learn how to build a Stock Trading
    app that runs on the cloud. I'll teach you how we built the frontend and
    backend and show you how to deploy your code so that others can view it
    online.
  shareImageUrl: /images/uploads/blog-a-template-for-creating-a-stock-trading-app.png
  title: 'How to Build a Serverless Stock Trading App (with Template)? '
---
This tutorial was created to demonstrate how to build a Stock Trading app that runs on the cloud. I'll teach you how to build the frontend and backend and show you how to deploy your code so that others can view it online. This Stock Trading app is a "toy" application that mimics the functionality of an app that would actually buy and sell stocks. (We won't be dealing with real money or real stocks transactions.) 

Before I show you what to do, let's go over what you won't have to do as a developer. You won't be updating your frontend static assets (HTML, CSS, and Javascript) to a CDN (content delivery network), running your backend on a server, or making sure your database is secure. You won't have to do those things because all of that functionality is done for you when you use the Nimbella Cloud.

As a developer, you just write your frontend/backend logic, run a single command in your terminal and you get your own URL that you can use to view and share your project. Nimbella's built-in security saves you time.

Here's your roadmap for the rest of the tutorial.

1. Stock Trading architecture
2. Project organization
3. The Stock Trading UI (frontend)
4. Serverless API Implementation (backend)
5. Code to Cloud in 30 Seconds with Nimbella CLI.

## 1: Stock Trading architecture

Following is a diagram that shows how the UI interacts with our APIs in the backend.

CMS-IMAGECLASS IMAGE=/images/uploads/stock-2.png INDENT=0 CLASS=w100 ALT=A chart explaining the UI for the serverless Stock Trading application

Once you select what stocks you want to buy, we use Key-Value storage to keep track of them. This, of course, assumes the designated account will have the appropriate funds to purchase the selected Stock.

## 2: Project Organization.

Following is how we build  an application (e.g., frontend + backend) using Nimbella:

The application has a web component that will host the HTML, CSS, JavaScript, and other static assets for the application. For the backend, we will implement the APIs using Node.js. Alternatively, you could use TypeScript, Python, PHP, Java, Go, or even Swift.

## 3: The Stock Trading UI (Frontend)

Here we built the Stock Trading Frontend using React. But, you could use any Framework such as Vue, Angular, jQuery, ASP.NET, Ruby on Rails, etc.  All of our frontend code is stored inside our **Web** folder. 

This is what it will look like after purchasing stocks.

CMS-IMAGECLASS IMAGE=/images/uploads/stock-1.png INDENT=0 CLASS=w100 ALT=UI for the serverless Stock Trading application

## 4: Commands found in the backend.

The backend contains multiple functions. Each functionality is in its own file inside the packages folder. For a clearer understanding, let's break down each functionality and what it does.

**Buy Stock **

This functionality is called when you click the Buy button at the bottom of the page. When you choose the stock and the number of shares you want to buy, it checks your balance to make sure you can actually buy that amount. You wouldn't want your app to allow you to spend money that you don't have.

**Get Cash Balance **

We need to make sure our customers balance updates as soon as they buy or sell. We can do this by using Nimbella's built-in key-value store functionality. All we do is run the customer account id into a URL that checks the balance and apply that balance to our Key-Value storage.

**Get Positions**

This function shows the stocks and the associated numbers of shares you own. Even if you were to sell all your stocks, the stock will still show up in the list from the order in which you first bought them, but they will be set to 0 shares. This is useful in case someone decides to buy stocks that they sold.

**Get Stock Description **

Once a user buys a stock, the app gives them access to tons of info about what they bought. The company description, PE ratio, Market Cap, etc. Inside the code, we simplified the process of collecting this info by using the HTTP client called [Needle](https://www.npmjs.com/package/needle). 

**Get Stock History**

This function shows the stock price history from the [iexcloud](https://iexcloud.io/) API. It's also part of the reason you're able to see the line graph showing the past and present prices. 

**New Account
**When an account isn't found, we need to set one up! We use the Node.js module called [Crypto](https://nodejs.org/api/crypto.html#crypto_crypto) to give us cryptographic functionality. We're also using our built-in Key-Value functionality to use key-value storage to store the new customer's cash amount.

When you decide to sell stock the Sell button at the bottom left of the app triggers this action. If you have no stocks to sell, the Sell button isn't selectable. This is a very clear way of letting a  user know his account is empty. 

CMS-IMAGECLASS IMAGE=/images/uploads/stock-3.png INDENT=0 CLASS=w100 ALT=stock trading serverless application folder organization

## 5: Code to cloud in 30 seconds with Nimbella CLI.

The Nimbella CLI is called "nim". It helps you organize and deploy your applications to the Nimbella cloud, in a secure domain that is unique to your projects. You will need to download the CLI and login with an access key to get started. Please visit the [signup page](https://nimbella-apigcp.nimbella.io/) to configure your CLI if you haven't previously done this.

As described earlier, deploying your functionality and UI is incredibly simple with the following line of code. Run 

```
nim project deploy <project_name> 
```

 using the CLI to deploy your local project to the cloud. At this point, your application is live on the web, with a dedicated domain name assigned to your project and a signed SSL certificate for secure communication. You can learn more about configuring and deploying by looking at our [documentation on our website](https://docs.nimbella.com/). 

Check out [our website](https://nimbella.com/) for more information on our upcoming products and news. Contact us at info@nimbella.com  or on our [community Slack](https://nimbella.com/slack) if you have any further questions or check out the [Stock Trading source code on GitHub](https://github.com/nimbella/demo-projects/tree/master/ocr).

_Written by Jamie Dawson (_[_Twitter_](https://twitter.com/JamieDawsonCode)_, _[_Linkedin_](https://www.linkedin.com/in/jamie-dawson-205351113/)_, _[_GitHub_](https://github.com/JamieDawson)_)_
