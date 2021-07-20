---
externalImage: ''
title: 'How we learned to Jamstack, Our Caputron Story.'
status: Published
date: 'October 05, 2020 4:00 PM'
postFeaturedImage: /images/uploads/blog-caputron-story-nimbella-plus-netlify-900-a.jpg
excerpt: >-
  We love the flexibility offered by Nimbella such as running serverless
  functions for our backend with customizable durations and runtime
  environments, an integrated data-store for our stateful APIs. And, Netlify
  makes the entire experience of delivering our application to the cloud
  “frictionless” by allowing us to bring our own domain name, offering an easily
  configurable proxy to redirect API calls to our backend.
ctaBanner:
  - banner: Netlify
categories:
  - category: Technology
meta:
  description: >-
    Nimbella offers flexibility such as running serverless functions for our
    backend with customizable durations and runtime environments ✔
  shareImageUrl: /images/uploads/blog-caputron-story-nimbella-plus-netlify-900-a.jpg
  title: 'How we learned to Jamstack, our Caputron story | Nimbella Blog'
---
## _Development at the pace of innovation using Nimbella and its powerful cloud integrations._

[Caputron](https://caputron.com) is the leading worldwide distributor of professional and research neurostimulation technology. Caputron is also advancing the state of the art through the development of novel therapeutics and devices to bridge the gap between research and consumer.

We are a medical device company first, and as with all companies today, we are also a technology company. And when we needed a serverless cloud-based solution to streamline the sale of consumer devices which require medical professional approval, we turned to [Nimbella](https://nimbella.com). Their technology and developer tools for building our cloud application were awesome. Moreover, their support was fantastic, and they clearly understood our requirements. This is also when they introduced us to [Jamstack](https://jamstack.org) and [Netlify](https://www.netlify.com).

Using serverless technology from Nimbella, coupled with automation and several key features offered by Netlify, we quickly built a cloud application that satisfied our needs. Moreover, we were able to develop and operate the application with the skills we already had in-house. This meant we could focus on our core business and deliver value to our consumers. We delegate all aspects of infrastructure, operations, deployment, and delivery to the software companies we have come to love: Netlify and Nimbella.

- - -

## What is it?

Several of the therapeutic devices we offer are FDA cleared for the treatment of depression, anxiety, and insomnia. Regulations require the approval of a licensed medical professional before we can sell a device to a consumer. As a result, we wanted to streamline and automate as much of the interaction between our consumers and licensed medical professionals to prescribe our therapeutic devices. Our cloud application is hosted by Netlify and served securely from their CDN, and backed by the Nimbella serverless cloud where we run our stateful APIs and workflows.

## Why Nimbella Serverless Cloud?

We use Nimbella because it provides our developers the ability to build a stateful serverless backend without needing to learn new skills, without managing infrastructure, and without explicitly operating and securing data-stores that may contain transient confidential information. These things are all done for us, out of the box, by Nimbella. Our developers love delivering more in less time. The developer tooling offered by Nimbella accelerated our delivery tenfold by enabling our small team to build, collaborate, and test the entire application in the cloud.

## Why Netlify?

Our entire application is published to a private GitHub repo. We love the automatically triggered Netlify builds and deployments as we Git-push new features. Netlify builds are also flexible enough that we were able to integrate the deployment of our frontend and backend assets into a single process using the [Nimbella add-on for Netlify](https://nimbella.com/integrations/netlify). The frontend components are deployed to the Netlify CDN. This means our user interface is served globally with speedy page loads, and our application is secured by an SSL certificate that we never have to worry about renewing because Netlify handles that too!

## Which are your Favorite Features?

We love the flexibility offered by Nimbella such as running serverless functions for our backend with customizable durations and runtime environments, an integrated data-store for our stateful APIs, rapid access to logs during development, and readily available performance metrics. And, Netlify makes the entire experience of delivering our application to the cloud "frictionless" by allowing us to bring our own domain name, offering an easily configurable proxy to redirect API calls to our backend with one line of code, and best of all, enabling us to do more in less time and with less work.

- - -

## What Did We Do?

Caputron provides neuromodulation products for people dealing with depression, anxiety, and insomnia. These devices must be prescribed by a medical professional. Our cloud application, deployed with Nimbella and their Netlify add-on, simplifies the process of orchestrating the approval request, case review, and fulfillment for each approved device purchase.

Here is a sample of our storefront for one of the devices we sell, the [mindGear CES](https://caputron.com/collections/cranial-electrotherapy-stimulation/products/mindgear-cranial-electrotherapy-stimulator).

CMS-IMAGECLASS IMAGE=/images/uploads/blog-caputron-1.png INDENT=0 CLASS=w75 ALT=MindGear CES

From our product page, a potential consumer can initiate a request for medical authorization, complete the required questionnaire, submit their payment, and be connected to an authorized healthcare provider who then reviews the application. If the request is approved, the device purchase is processed and fulfilled. Our clients are informed of every step of the workflow through automated notifications, and we are able to track the authorization and processing workflow as needed.

Our application consists of a web frontend and several backend APIs. Some of the APIs are reached from the frontend, and others are triggered by external events and webhooks such as Stripe payment events.

The application is implemented using React for the frontend. We considered several of the languages available from Nimbella to implement our APIs, including Go, Node.js, PHP, and Python. We concluded Node.js was most convenient due to our developer’s previous experience. The entire development effort was completed and we were live in about a week! It was amazingly productive that a single developer, with mostly frontend experience, was able to build the full stack. This is the power of the Jamstack.

We used a private GitHub repository for our application and organized the code as a [Nimbella project](https://docs.nimbella.com/projects). Our web frontend was stored in a "web" directory, and our APIs implemented in a "packages" directory. The structure of the "packages" directory informs the Nimbella project deployment tool about how to build, bundle, and install each of our APIs as secure end-points in the Nimbella serverless cloud. This meant initially there was no project manifests for us to develop and maintain, which made it easy to mockup the entire application directly in the cloud.

Later, we refined the project to include a manifest for the purpose of binding certain third-party secrets to APIs. These include Stripe and SendGrid service keys for managing payment and sending workflow notifications.

Using the [Nimbella CLI](https://docs.nimbella.com/), our developer deployed the project continuously during development, and in a repeatable way, first to staging and later to the production environment, both hosted by Nimbella. Our projects required several cloud resources, all of which were handled without effort by our developer:

* Compute resources for our API implementations were provided by the Nimbella serverless compute capabilities.
* Workflow state and application state for our stateful APIs were stored in the Nimbella integrated key-value store. The key-value store is essentially a database. It is automatically secured and well-suited for the transient state that needs to be shared across our APIs.
* The datastore is dedicated to our compute resources and isolated per environment (e.g., staging vs production). The datastore is conveniently accessible from the command line for inspection when necessary.
* Our frontend is deployed to the Nimbella integrated object store, and frontend by a CDN. The content is served from a Nimbella domain name dedicated to our environment. 
* Each project domain is secured by an SSL certificate that does not require provisioning or renewing.

The Nimbella cloud handles all of the above and more, enabling us to reap the full power of the serverless cloud.

Lastly, we use the [Nimbella add-on for Netlify](https://nimbella.com/integrations/netlify) to deploy the same application in a way that allows us to also take advantage of Netlify’s custom domain name and DNS capabilities. We created a Netlify domain for our application and used the Netlify automated builds to deploy our site to the custom domain directly from GitHub. An overview of our application architecture and deployment is shown below.

CMS-IMAGECLASS IMAGE=/images/uploads/blog-nimbella-netlify-diagram.jpg INDENT=0 CLASS=w75 ALT=Nimbella and Netlify integration

The Nimbella and Netlify integration meant that we didn’t have to change anything about the project structure. We continue to develop, and test, either locally or in the Nimbella cloud, and when ready, a Git-push stages the deployment for production. The integration of these two services is simply magical. You can read more about it [here](https://github.com/nimbella/netlify-plugin-nimbella).

- - -

If you’re interested in purchasing any of our products, then check out our website [Caputron.com](https://caputron.com). If you have any questions about our experience, feel free to [contact us](https://caputron.com/pages/contact) and we’ll be happy to help with any questions you may have.

Better yet, we recommend that you visit [Nimbella.com](https://nimbella.com) to start building with their serverless cloud platform. You should also join their [community Slack channel](https://nimbella.com/slack) where you can share what you’re building and ask questions. Their support team made our entire experience delightful.

\- Robin Azzam, CEO [Caputron](https://caputron.com)
