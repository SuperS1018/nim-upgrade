---
title: Step by step guide on how to port from AWS to Nimbella
status: Published
date: 'June 14, 2021 4:27 PM'
postFeaturedImage: /images/uploads/blog-cover-3cover-1.png
excerpt: >
  Drawing into the multi-cloud era and boom of serverless, we want to share
  step-by-step instructions on how to avoid vendor lock-in and deploy Nimbella
  on top of AWS. In this article, we shall walk you through how Nimbella can
  fill up the space of AWS Lambda as an alternative, and how you can port your
  functions to Nimbella.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    Step-by-step instructions on avoiding the vendor lock-in and deploying
    Nimbella on top of AWS and how to port your functions to Nimbella.
  shareImageUrl: /images/uploads/blog-cover-3cover-1.png
  title: Step by step guide on how to port from AWS to Nimbella
---
AWS is the largest public cloud provider - but that doesn't make it easy to use!

**It can be challenging to work with because:**

1. AWS is confusing for developers without deep experience in low-level cloud technologies.
2. Businesses have to pay a hefty amount to get technical support from AWS.
3. AWS Pricing is fiendishly complex and difficult to predict. Also, it doesn't allow you to set a hard spending limit.
4. Need a credit card to sign-up.

Giuseppe Miragliotta, Backend Software Engineer at Xtream 

> AWS Lambda’s pay-per-use pricing model is ideal for sporadic usages because you’re never paying for over-provisioned infrastructure. On the other end, costs can sum up rapidly on highly intensive workloads since these kinds of resources are expensive. Nimbella can help you save costs by using LaaS or CaaS services that are cheaper than FaaS, providing a proven and actively maintained architecture.
>
> Backed by [Apache OpenWhisk](https://openwhisk.apache.org/), an open-source serverless solution, Nimbella comes with a high degree of portability. This means that the cost of moving to another cloud provider is greatly reduced and a multi-cloud strategy is also feasible, letting you choose the best products that suit your needs. 

All these urge many users to look for the best AWS alternative which eventually gets **them away from AWS Cloud lock-in. **

In this article, we shall walk you through how Nimbella can fill up the space of AWS Lambda as an alternative and how you can port your functions to Nimbella.

## Pros of Nimbella over AWS

The developers using the Nimbella platform only have to code the logic and Nimbella handles the rest including storage management, capacity provisioning, auto-scaling, monitoring, and logging.

CMS-IMAGECLASS IMAGE=/images/uploads/app-logic-flowchart.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=Pros of Nimbella over AWS

### Try Nimbella's platform with a real example

Let's create a new App and deploy it on Nimbella to get ourselves familiar with porting the functions from AWS-Lambda to Nimbella.

Please consider that we are going to create an invoice processing App with the below features

1. Approve/Reject invoices
2. Adding new invoices
3. Exporting invoices

It will use [React.js](https://nimbella.com/react) for the front-end and [Node.js](https://nimbella.com/node) for the Back-end. For data storage, we can use Amazon's dynamo DB in AWS-lambda and Nimbella's Redis in Nimbella Platform.

#### Basic architecture on Nimbella

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot3.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Basic architecture on Nimbella

#### Directory Structure on Nimbella:

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot4.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Directory Structure on Nimbella

### Port your AWS Lambda functions to Nimbella

The following step-by-step guide will easily allow you to move your Lambda Functions to Nimbella.

#### 1. Accounts creation and configuration

* **Nimbella: **[Create a new Nimbella Account](https://nimbella.com/signup) and it gets activated without providing any card details.

#### 2. Install & Set-up CLI

Let's install CLI to deploy and interact with the cloud platform through the terminal.

Nimbella's CLI can be installed by referring to [this link](https://nimbella.com/blog/how-to-set-up-your-serverless-environment-and-get-started-in-less-than-2-minutes) for the respective Operating System.

To set up the CLI for Deployment and other activities we just need to log in to the CLI using the below command

```
nim auth login
```

#### 3. Set-up Data Storage

Please consider that we are going to store our invoices as documents in the data storage.

Nimbella provides dedicated pre-integrated Redis key-value storage. We can directly use it as data storage without any configuration. We can do CRUD operation with our DB via CLI using the traditional Redis command as below.

```
nim kv set <keyName> <keyvalue>
```

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot6.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Set-up Data Storage

#### 4. Create Your API for Invoice Processor

1. Create a directory named "packages" which wraps the back-end code.
2. Create a new directory that represents the app name inside packages.
3. Create a new directory name that represents the API endpoint. Please note that in Nimbella each directory name represents API endpoints. Hence, create the directory how you want to name the API endpoints.
4. Initiate a node js project with nim init -y
5. Install nim-sdk package to access Nimbella's Redis.

Once done, we can read our invoice data from Nimbella's Redis with the below code.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot9.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Create Your API for Invoice Processor 1

Create a project.yml file and specify our directory structure (http end-points) of our function as below.

CMS-IMAGECLASS IMAGE=/images/uploads/create-your-api-for-invoice-processor.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Create Your API for Invoice Processor 2

Our Serverless function can be deployed by running the below-given command in Nim-CLI.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot11.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Create Your API for Invoice Processor 3

```
nim project deploy <directory containing our proj>
```

Once deployed, we can get the API URL for the deployed function using the below command.

```
nim action get action <functionName>
```

Now, our API is ready to serve the requests seamlessly.

**Deployed API URL (Nimbella):**

<https://boltnew2-doofwstmxcq-apigcp.nimbella.io/api/invoice/getdata>

**Front-End**

Let's create a React App by running the below command.

```
npx create-react-app <appName>
```

Once React App is created, we can implement the below features in the UI for the Invoice Processor in the usual React way as below.

1. Consume the API created in the previous step to render the invoices
2. Approve/Reject Invoices
3. Export Approved/Rejected/Pending invoices (using [jsPdf](https://www.npmjs.com/package/jspdf))
4. Add new invoices.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot12.png INDENT=0 CLASS=w75 d-block mx-auto ALT=Invoice Processor

Our React App can be hosted on Nimbella by following simple steps:

1. Create a build.sh file and specify the commands to create a build from React Ap

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot14.png INDENT=0 CLASS=w75 d-block mx-auto ALT=React App hosts on Nimbella 1

2. Create a .include file and specify the file to be included for deployment

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot15.png INDENT=0 CLASS=w75 d-block mx-auto ALT=React App hosts on Nimbella 2

3. Configure project.yml for hosting our front-end as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot16.png INDENT=0 CLASS=w75 d-block mx-auto ALT=React App hosts on Nimbella 3-1

Directory of our Invoice Processor having the React App (front-end) & Serverless function (Back-end) looks as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot17.png INDENT=0 CLASS=w75 d-block mx-auto ALT=React App hosts on Nimbella 3-2

We can deploy our Invoice Processor App by running the below command.

```
nim project deploy <projectDirectory>
```

Once completed the host URL of Invoice Processor can be found in CLI as below.

CMS-IMAGECLASS IMAGE=/images/uploads/screenshot18.png INDENT=0 CLASS=w75 d-block mx-auto ALT=React App hosts on Nimbella 3-3

<https://boltnew2-doofwstmxcq-apigcp.nimbella.io/>

**GitHub Source:** <https://github.com/boltathi24/nimbella_redis_react_invoice_processor>

**In Brief: Porting Aws-lambda to Nimbella:**

1. Wrap the AWS-Lambda's functions inside the directory named "packages".
2. Wrap the front-end code inside the directory named "web".
3. Create a project.yml file and specify the configuration of the serverless function.
4. Deploy it to Nimbella using Nimbella's deploy command.

### Benefits of Nimbella over AWS-lambda limitations

1. Nimbella provides a better developer experience by letting developers focus and invest time on App logic by removing architectural complexity.
2. Nimbella supports multi-cloud deployment. Serverless Apps built on Nimbella can be deployed into your choice of cloud provider at any time.
3. Nimbella provides integrated monitoring and logging to conveniently access logs and statistics from the terminal. Logging is more centralized and the output of the function won't be feeling disjointed anymore since Logging can be accessed with Nimbella's CLI instead of heading to CloudWatch in AWS.
4. Our smart CLI builds the artifacts to be deployed dynamically from the project's configuration file, unlike AWS Lambda where we zip the dependencies for deployment.
5. Vendor lock-in is avoided with our multi-cloud deployment feature.
6. Most of the popular programming languages are supported by the Nimbella Cloud (e.g., JavaScript, TypeScript, PHP, Python, Java, Go, or Swift, etc.)
7. Nimbella lets developers feel themselves developing the end-to-end application by providing a way to deploy front-end (UI) and back-end (API) as a single deployment.
8. Nimbella cloud platform is built on an open-source, [Apache OpenWhisk](https://openwhisk.apache.org/). Hence it provides more data security and access control.
9. No card details are required. Start with a generous free tier and grow with us. 
10. Nimbella offers dedicated secure domain, certificate management, CDN, and much more with ease.
11. There is no development effort when you switch between cloud providers.
12. The learning curve with Nimbella is very simple. You won't be amused with the 'n' number of services like AWS.
13. Native support for state with in-memory high-performance data storage(Redis).

### Conclusions

Nimbella is a modern developer-friendly Serverless platform that empowers you to build and run serverless applications in the simplest way. When you look out for alternatives to AWS Lambda, Nimbella suits perfectly and you can port your functions to Nimbella without much effort.

Please feel free to check out the latest [Forrester Report](https://nimbella.com/forrester-report) on why Nimbella has been named as a Strong Performer among multiple players in the serverless space. Nimbella is a rising new generation serverless platform that could be considered as a great alternative to AWS and other cloud providers. 

Author details: Athithan Raj P

Athithan started his career with Cognizant and experienced himself in the testing field primarily. Later he started getting involved in different fields like Development, Security, Content writing, etc. He now works with a reputed organization as a Software Development Engineer in Test where he is responsible for the product quality through Automation.

Follow him on Twitter: [@raj_athithan](https://twitter.com/raj_athithan)
