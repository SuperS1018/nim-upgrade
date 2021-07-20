---
title: Deploy your Shopify Storefront to Nimbella
status: Published
date: 'October 30, 2020 2:55 PM'
postFeaturedImage: /images/uploads/shopify-header.png
excerpt: >-
  Learn how to launch a Shopify storefront built with React to the Nimbella
  cloud.
ctaBanner:
  - banner: Platform
categories:
  - category: Tutorials
meta:
  description: Learn how to launch a React app using Shopify as a backend to the cloud!
  shareImageUrl: /images/uploads/shopify-header.png
  title: 'Deploy your Shopify backend to the cloud! '
---
Shopify is an incredible service if you want to be able to sell online. They have templates you can use for your website, but if you want more customization in your frontend, then you can just use Shopify as a backend and set up your frontend in whichever frontend framework you prefer.

I built this tutorial to show you how easy it is to take demo apps from [Shopify’s GitHub page](https://github.com/Shopify/storefront-api-examples) and deploy existing starter storefronts to the cloud using Nimbella. We’ll work with the [react-js-buy](https://github.com/Shopify/storefront-api-examples/tree/master/react-js-buy) storefront which uses [React](https://reactjs.org/) and Shopify's [JavaScript Buy SDK](https://github.com/Shopify/js-buy-sdk). By the end of this tutorial, you'll have a cloud hosted storefront, from a dedicated domain, secured by SSL. Nimbella makes this easy to accomplish in minutes and in just three steps:

1. Git clone the project.
2. Add a build script to build the storefront.
3. Deploy and enjoy.

CMS-IMAGECLASS IMAGE=/images/uploads/example-app.png INDENT=0 CLASS=w100 ALT=shopify serverless app

## Setup your development environment for Nimbella

You will need to set up your computer for the Nimbella cloud if you haven't already done so. This is easy to do. First visit our signup page at [nimbella.com/signup](https://nimbella.com/signup) to create an account, then download the Nimbella CLI and login. This entire process should take less than 3 minutes. Congratulations! You are now ready to launch the storefront to the cloud by following the three steps below.

## 1. Clone the Shopify storefront samples

Once your Nimbella CLI is configured, git clone the Shopify starter project locally.
```
git clone git@github.com:shopify/storefront-api-examples.git
```

We will be working with the `react-js-buy` starter project so let's change into that directory for the next step.
```
cd storefront-api-examples/react-js-buy
```

## 2. Add a Build script

The Nimbella CLI launches your projects to the cloud. We need to inform the CLI which files to deploy for the storefront. So it’s important to understand what files go where.

Inside the **react-js-buy** directory, we will create a folder called **web**. Everything inside this web folder is deployed to the Nimbella cloud to be served as your frontend application. _(In a later tutorial, we will discuss deploying backend APIs as well.)_

Inside the web folder, we will need to add a build script called `build.sh`. From the [Shopify project page for this starter](https://github.com/Shopify/storefront-api-examples/tree/master/react-js-buy) we see that we should use `yarn` to install dependencies and build the project. The results of the build will reside in a `build` folder. So our build script will run these steps and copy the build output to the web folder.

Create the file `web/build.sh` with the following content.
```
#!/bin/bash

(cd .. && yarn install && yarn build)
cp -r ../build/ .
```

And make the build script executable.
```
chmod +x web/build.sh
```

**Note for Windows developers:** Instead of a `build.sh`, you will create a `build.cmd` file, and execute the equivalent commands to run yarn install, yarn build, and file copy.

## 3. Deploy and Enjoy

Your next step is easy. Using the Nimbella CLI, which is called `nim`, you will deploy the project to the cloud.
```
nim project deploy .
```

The deployment process will emit progress to your console similar to the following output.
```
Deploying project 'storefront-api-examples/react-js-buy'
 to namespace ‘example’
 on host 'https://apigcp.nimbella.io'
Started running ./build.sh in react-js-buy/web
Still running ./build.sh in react-js-buy/web
Finished running ./build.sh in react-js-buy/web
Deployment status recorded in '.nimbella'

Deployed 7 web content items to
  https://example-apigcp.nimbella.io
```

The Nimbella project deployer detects the presence of a web folder and executes the build file it contains. At the end of the build, the web folder contains all of the Shopify storefront web assets to be launched to the cloud and copies all of these files and web assets to your dedicates domain on the Nimbella cloud.

When the project deployment is complete, your storefront is live. Visit the URL shown in your console output to enjoy your new storefront.

**Pro tip:** A convenient way to locate the cloud URL for your app is to run `nim auth current --web`.

If you would like to connect your storefront to your Shopify backend, open up **src/index.js** and update the **domain** and **storefrontAccessToken**:

```
const client = Client.buildClient({
  storefrontAccessToken: 'your-storefront-access-token',
  domain: 'your-shop-name.myshopify.com',
});
```

And that’s all you need to launch your Shopify storefront application to the cloud. If you’re interested in getting started, just create a free account on [Nimbella.com](https://nimbella.com/signup). I also welcome you to join us on our [Slack community channel](https://nimbella.com/slack) to share what you’re building and ask questions.
