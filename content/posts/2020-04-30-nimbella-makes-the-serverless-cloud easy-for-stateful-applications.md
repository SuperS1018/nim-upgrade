---
title: How to Build a Stateful Serverless Cloud Web Application?
status: Published
date: 'April 30, 2020 4:00 PM'
postFeaturedImage: /images/uploads/4-1-.png
excerpt: >-
  As a developer, your primary concern should be the innovation you want to
  realize into a cloud application. Nimbella is built to allow you to focus on
  your frontend and backend logic, and with a single command, deploy and run
  your application in the cloud, served from a URL that is dedicated to your
  work. Simply put, Nimbella's built-in capabilities and security save you time
  and make all aspects of cloud development easy.
ctaBanner:
  - banner: Platform
categories:
  - category: Article
  - category: Technology
meta:
  description: >-
    This article demonstrates how to build a stateful web application using
    Nimbella and I'll go over what you won't have to do as a developer. ✔
  shareImageUrl: /images/uploads/4-1-.png
  title: How to Build a Stateful Serverless Cloud Web Application?
---
This article demonstrates how to build a stateful web application using [Nimbella](https://nimbella.com). I will use a Stock Trading application as the running example, and highlight how a developer can build the complete application, consisting of a frontend and a stateful backend. This application mimics the functionality of a transactional application that buys and sells stocks. We won't be dealing with real money or real stock transactions.

Before I show you what to do, let's go over what you won't have to do as a developer. You won't have to configure cloud storage for your frontend static assets (HTML, CSS, and JavaScript), or configure a content delivery network (CDN) to serve the application from the cloud. You also won't create any infrastructure for your backend, operate any servers, or even configure a database to be backed up and secured. You won't have to do those things because all of that functionality is done for you when you use Nimbella.

As a developer, your primary concern should be the innovation you want to realize into a cloud application. Nimbella is built to allow you to focus on your frontend and backend logic, and with a single command, deploy and run your application reproducibly in the cloud, served from a URL that is dedicated to your work. Simply put, Nimbella's built-in capabilities and security save you time and make all aspects of cloud development easy.

Here's the roadmap for the rest of the article.

1. [Application Architecture](#application-architecture)
2. [The Frontend](#the-frontend)
3. [Backend APIs and Stateful Implementation](#backend-apis-and-stateful-implementation)
4. [Code to Cloud in 60 Seconds with Nimbella](#code-to-cloud-in-60-seconds-with-nimbella)

- - -

CMS-ANCHOR ID=application-architecture

## 1. Application Architecture

I am going to describe the trading application used for this demonstration in this article. It consists of an application frontend that is delivered to the browser as the user interface (UI). Every unique visitor to the stock trading application is allotted virtual dollars to build their own portfolio. The frontend performs backend operations to execute the desired transactions - which include general account management, buying a stock, selling a stock, and looking at one's virtual portfolio. This is a stateful application which has to remember the site visitor, their transactions, and the portfolio specific to them.

The following diagram illustrates how the UI interacts with the backend APIs, here specifically to buy a stock.

![An example stateful serverless application. Executing a transaction to buy a stock.](/images/uploads/tradedemo-architecture.png)

Once a visitor selects which stock they want to buy in the UI, the details are transmitted to the backend. The transaction is recorded in a way that is unique to each visitor using Nimbella's integrated Key-Value (KV) data store.

Already you can see there are several elements of this application one has to think about for the frontend, the backend, and the data store.

* How do you host the frontend?
* How do you run the backend?
* How do you secure the data store?
* Did I mention [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)?
* Will this scale with users?

These are only some of the questions you might ask yourself, and you haven't even started building. At Nimbella, we want you to just build. We take care of all these boring challenges so you don't have to. Your business logic is the frontend UI, the APIs you want to create, and the implementation of those APIs. The rest is on us.

OK then, let's make it easy. You need a frontend. You need to define the APIs and implement them. Let's get started.

If you want to skip the details and read the code instead, you can find this [project on GitHub](https://github.com/nimbella/demo-projects/tree/master/trade). You can also try it [here](https://tradedemo-apigcp.nimbella.io/) or [sign-up for a Nimbella account](/signup) and deploy your own copy.

- - -

CMS-ANCHOR ID=the-frontend

## 2. The Frontend

There are many frameworks out there to build a frontend. The way we built the UI, it is purely static content that can be served from a content delivery network (CDN). Using static assets allows the UI to be delivered quickly and securely from pre-rendered content. This removes the need to run a web server strictly for serving files and is a model for building modern web applications using a [Jamstack](https://jamstack.org). There are many frameworks for creating pre-rendered content. They include [Gatsby](https://www.gatsbyjs.org), [Hugo](https://gohugo.io), [React](https://reactjs.org), and [Vue](https://vuejs.org) as some examples. With Nimbella, you can use the framework you're already familiar with and accustomed to using. Nimbella's build and deployment system will pick up the static assets from a predefined folder called "web" and deploy them automatically to a CDN.

![Dashboard for the stock trading application.](/images/uploads/tradedemo-dashboard.png)

Above is a screenshot of the frontend we built for Stock Trading using React. Nimbella will automatically configure the cache policy on the CDN during development, and allows you modify the caching duration when you're ready to deploy to production. This is so that while you're developing, you can actually test and preview your project in the cloud, as it will eventually appear and function. Additionally, the frontend is automatically configured to allow API calls to your backend functions, without you having to worry about Cross-Origin Resource Sharing (CORS). Nimbella allocates a dedicated domain name, secured with an SSL certificate, for your project. This is where your frontend application will be served from. All API calls will be relative to this domain name.

- - -

CMS-ANCHOR ID=backend-apis-and-stateful-implementation

## 3. Backend APIs and Stateful Implementation

The backend implements the account management and stock transactions. Each of the tasks is handled by a specific API and implementation. Let's take a look at what capabilities we need on the backend.

* **New Account** ([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/newAccount.js))**:** this API allocates a new account id for each unique visitor and initializes their account with virtual dollars so they can build their portfolio. This is a stateful operation that has to update a data store.
* **Get Cash Balance** ([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/getCashBalance.js))**:** this API retrieves the account balance for a given user id. It is used to show the available cash in the user account. This too is a stateful operation as the data store is queried to determine the account balance.
* **Get Stock Positions** ([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/getPositions.js))**:** this API retrieves the stock symbols and quantities held in a given account. This operation also queries the data store.
* **Buy Stock** ([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/buyStock.js))**:** this API is called by the UI to purchase a stock. The implementation checks if the account balance is sufficient to cover the transaction, then executes the trade. The data store is updated to reflect the new cash balance and stock positions.
* **Sell Stock **([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/sellStock.js))**:** this API is called by the UI to sell a stock. The account balance in the data store is credited with the corresponding stock cash value, and the portfolio is adjusted to remove shares sold for the given stock symbol.
* **Get Stock Description **([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/getStockDescription.js))**:** this API retrieves various details about a particular  stock to be displayed in the UI. We use an external service provided by IEX Cloud to retrieve a stock's PE ratio, Market Cap, and a description of the Company associated with the stock. This is a stateless API.
* **Get Stock History** ([see the code](https://github.com/nimbella/demo-projects/blob/master/trade/packages/tradedemo/getStockHistory.js))**:** this API retrieves the stock price history from IEX Cloud and plots the historical stock price in the UI. This is a stateless API as well.

With this set of APIs, we have the functionality needed to implement the backend. The frontend will call each of these APIs depending on the user interactions from the browser. Each of the APIs is implemented in Node.js, and is a standalone function. This keeps separation of concerns between the APIs and reduces the attack surface of any one function because it handles exactly one operation. The frontend references the APIs relative to the domain name allocated to the project.

**What about the datastore?** Several of the APIs above are stateful and interact with storage to retrieve account and transaction details. Every Nimbella developer can create stateful functions right out of the box. This is done by deep platform integration so that your functions and storage are co-located in the cloud for fast and secure access. You don't provision infrastructure or a database because we've done it for you. In this example, the implementation uses Nimbella's Key-Value store to record the application state. The data store is automatically backed up, and is only accessible from your functions.

- - -

CMS-ANCHOR ID=code-to-cloud-in-60-seconds-with-nimbella

## 4. Code to Cloud in 60 Seconds with Nimbella

The entire application is organized as a single Nimbella project and available on [GitHub](https://github.com/nimbella/demo-projects/tree/master/trade). The Nimbella command line [tool called `nim`](https://docs.nimbella.com/) will deploy the entire project to a dedicated domain name unique to every Nimbella developer. To get started, visit the Nimbella [signup page](/signup) to create an account and download `nim`.

The [project structure](https://docs.nimbella.com/deployer-overview) is such that all static assets for the frontend are built and stored in a folder called [`web`](https://github.com/nimbella/demo-projects/tree/master/trade/web). The functions which implement the APIs are stored in a dedicated package located in the folder [`packages/tradedemo`](https://github.com/nimbella/demo-projects/tree/master/trade/packages/tradedemo).

The project does not require any configuration or manifests [except to provide](https://github.com/nimbella/demo-projects/blob/master/trade/project.yml) an API key for [IEX Cloud](https://iexcloud.io) which provides the stock data. It is free to sign up for a free account.

To deploy this project to Nimbella, you run `nim project deploy` from your terminal. First, export the IEX Cloud API key to your environment.

```
export IEXCLOUD_API_TOKEN=...
```

You can deploy the project directly from GitHub without cloning the project locally. 

```
nim project deploy github:nimbella/demo-projects/trade
```

For active development, you can clone the project locally and activate the incremental deployment features which can watch for changes in your project and continuously mirrors you local changes to the cloud.

Every Nimbella project is accessible from a dedicated domain name unique to your account. You can see the final result as an example on our [website](https://tradedemo-apigcp.nimbella.io).

- - -

Nimbella is the Cloud made easy. You can build complete and stateful cloud applications using the technologies you know, and deploy to the cloud with no infrastructure for you to worry about, ever. We take care of the boring details of the cloud so you don't have to. That means you can develop your exciting ideas into real world applications quickly, securely, and reliably.

Check out [our website](https://nimbella.com) for more information or to [signup](/signup) and start creating. You can reach us on [Twitter](https://twitter.com/nimbella) or via our [community Slack](https://nimbella.com/slack). 

We'd love to hear from you. What can we help you build next?

_Authored by: Rodric Rabbah (_[_Twitter_](https://twitter.com/rabbah)_, _[_Linkedin_](https://www.linkedin.com/in/rodric)_, _[_GitHub_](https://github.com/rabbah)_)_
