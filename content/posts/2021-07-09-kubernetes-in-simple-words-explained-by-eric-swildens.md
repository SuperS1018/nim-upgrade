---
title: 'Kubernetes in simple words: explained by Eric Swildens'
status: Published
date: 'July 9, 2021 5:35 PM'
postFeaturedImage: /images/uploads/blog-cover-7eric-swildens.png
excerpt: >-
  In this blog post, Eric Swildens, Co-founder and Chief Architect at Nimbella,
  will explain Kubernetes and answer the most commonly asked questions in simple
  words that can be easily understood by junior developers, DevOps specialists,
  and even non-tech professionals. 
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
  - category: Kubernetes
meta:
  description: >-
    The most commonly asked questions about Kubernetes have been answered in
    simple words that can be easily understood by even non-tech professionals.
  title: Kubernetes in SIMPLE WORDS | Nimbella.com®
---
## Find the answers to the most commonly asked questions related to Kubernetes (k8s) explained simply.

# 

In this blog post, Eric Swildens, Co-founder and Chief Architect at Nimbella, will explain Kubernetes and answer the most commonly asked questions in simple words that can be easily understood by junior developers, DevOps specialists, and even non-tech professionals. 

## Questions that have been answered in this blog post

If you want to know what is Kubernetes and why is it so trendy, check out the next most common FAQ’s we have answered here:

* Kubernetes in simple words, using real-life examples.
* How is Kubernetes different from Docker?
* What are Kubernetes clusters?
* What are some benefits of using Kubernetes?
* What are some products built on top of Kubernetes?
* What are some good ways of learning Kubernetes?

### First and most important: what is Kubernetes?

Let us explain it in very simple words: 

Kubernetes is a system that manages containers (containerized applications) where a container could be explained as a lightweight virtual machine. To build an application you need to build a bunch of containers and then use Kubernetes to manage those containers. This sounds like something very difficult and time-consuming, but the advantage is that **Kubernetes can create and scale containers automatically and manage storage among all the containers. **

CMS-IMAGECLASS IMAGE=/images/uploads/pic-1-eric.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

CMS-CAPTION ALIGN=center CONTENT=Source [Kubernetes.io](https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/)

Suppose you are trying to build a company. You need multiple departments to run the company: CFO, call center, engineering team, marketing, sales, etc. Think of them as different kinds of containers. So Kubernetes has a file which has the description of all the containers and how they work together: sales work with marketing and marketing work with engineering and this is how everybody talks to each other. Then you tell Kubernetes to execute it, hire all “containers” and if one of them fails it will restart it and redo it. 

That's a simple explanation of what Kubernetes is. 

**To get a broader picture about Kubernetes and get more information we suggest  some resources to read and watch: **

* Latest Cloud Native Foundation surveys  <https://github.com/cncf/surveys>
* Google Cloud Tech Video:  <https://youtu.be/cC46cg5FFAM>

### Kubernetes and Docker: how do they work together

#### What is Docker?

Docker is a container engine that is used to create containers. Let’s make it even more simple: **_Docker is a type of container and Kubernetes manages (deploys) Docker Containers or other types of containers. _**

For example, you built a web search application and you have a container that contains a web server. When visitors connect to your website, they connect to the web server in the container to get content. Let’s say a lot of visitors start connecting to your web server.

_Kubernetes can identify the increased traffic and **create another container containing another web server**. _

Kubernetes can restart a container as it fails, kills a container if it doesn't work, can do rollouts, put more containers and manage the [networking for containers](https://www.aquasec.com/cloud-native-academy/kubernetes-101/kubernetes-networking/). 

### What is a  Kubernetes cluster?

A Kubernetes system with a full set of Kubernetes components is called a **cluster**. The cluster can run on actual physical machines (such as PCs or laptops) or as virtual machines. If you just have one machine and it’s running a full Kubernetes system then that is your Kubernetes cluster, and if you have two machines that are running the Kubernetes, those two machines host your Kubernetes cluster. The cluster can run on any combination of virtual and physical machines. 

### What are the benefits of using Kubernetes?

If you need just one container for your application there is no benefit of using Kubernetes.  For example, if you have one employee in a company, there is no reason to have a company. You can just have that one employee work on his own and that's exactly similar to Kubernetes. So if you are a company and you have sales, engineering, and all the other departments, then you need to hire people and you also need **_to manage_** them. 

#### _Kubernetes allows you to manage multiple containers, scale up, scale down and restart them._

Here are some of the benefits that Kubernetes offers:  

* Kubernetes does load balancing when there is too much traffic.
* Kubernetes helps you do some storage stuff with a disc.
* Kubernetes eliminates many of the manual processes involved in deploying and scaling containerized applications and standardizes them. 
* Kubernetes orchestration allows you to build application services that span multiple containers, schedule containers across a cluster, scale those containers, and manage their health over time.
* Kubernetes [High-Availability](https://medium.com/velotio-perspectives/demystifying-high-availability-in-kubernetes-using-kubeadm-3d83ed8c458b) is another benefit because if something fails, it will replace it and restart over. 

### Real-life examples of Kubernetes in more detail

When you are developing an application, you need 

* a database
* a specialized server that you develop
* a web server to look at the webpage. 
* a machine to run everything. 

**The first problem** arrives when your traffic starts drastically growing.  If it runs on a physical machine then the solution would be **to get another machine**, install the operating system on it and put all the stuff on it.  

**The second problem** that you possibly need to solve -  **load balancing**. The solution would be to get a load balancer. 

Imagine that now we are getting more traffic so **we fire up four more machines**.  If you manage that manually **then you have to do a lot of work**. 

**So this is where Kubernetes comes in:**

* You install Kubernetes

You describe processes and applications and:

* if you have four machines it uses all four machines.  
* If you have 16 machines, it uses all 16 machines. 

If you need another Kubernetes cluster, you shall have a description of how to deploy on Kubernetes and it would deploy it on the other cluster. 

So Kubernetes allows you to create **_scalable_** web applications and use all sorts of different resources that are composed of different components.

So as a business case, you want to standardize how your application is deployed and developed and this is the way of describing all the services and processes that you need. Then you use a scalable system called - Kubernetes.

To give you an idea of how big these things can get and answer the next question:

### What are some worldwide famous products built on top of Kubernetes?

Some well-known applications that are currently using Kubernetes are the following.

#### Netflix

**Let’s take the example of Netflix.** Netflix [launches half a million containers and 200k clusters per day](https://netflixtechblog.com/titus-the-netflix-container-management-platform-is-now-open-source-f868c9fb5436). It has grown from thousands of containers launched per week to three million launched per week. It hosts thousands of applications globally over these machines and they are deployed on virtual machines. Imagine having to manage all this manually 🤒🤒🤒. So such a size of workload is usually managed on Kubernetes. 

#### Spotify

The next example is Spotify, a well-known audio streaming and media services provider with over 200 million users worldwide. The biggest service currently running on Kubernetes takes about 10 million requests per second as an aggregate service and benefits greatly from autoscaling, [says Site Reliability Engineer James Wen.](https://kubernetes.io/case-studies/spotify/)

Plus, he adds, "Before, teams would have to wait for an hour to create a new service and get an operational host to run it in production, but with Kubernetes, they can do that on the order of seconds and minutes." In addition, with Kubernetes's bin-packing and multi-tenancy capabilities, CPU utilization has improved on average two- to threefold.

#### Adidas

Another example is Adidas. Currently, [100% of the Adidas e-commerce sites](https://kubernetes.io/case-studies/adidas/) are running on Kubernetes. With 4,000 pods, 200 nodes, and 80,000 builds per month, Adidas is now running 40% of its most critical, impactful systems on its cloud-native platform.

They drastically speed up the load time and releases went from every 4-6 weeks to 3-4 times a day. With Kubernetes, they solved the problem of getting quick access to all developer tools.

## Kubernetes made easy has a name: Nimbella

However, Kubernetes is a bit complex:** if you are a developer and you want to run some code in Kubernetes, you have to figure out the **[**orchestration**](https://kubernetes.io/)** and learn more.** 

In such a case Nimbella could offer [ease of development](https://nimbella.com/blog/simplifying-kubernetes-for-developers), so that means you get the benefits of Kubernetes without the hassle of having to go in-depth into it.

CMS-IMAGECLASS IMAGE=/images/uploads/comic-strip-2-1-.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

That's the way Nimbella works and what [Nimbella offers](https://nimbella.com/blog/what-is-nimbella-and-what-does-it-offer). That's called scale to zero. In Kubernetes, that's not true. You have all these containers and even if nothing is going early-stage on, containers are still taking up resources.

**Nimbella Serverless Platform offers: Here's the code, use our **[**CLI**](https://docs.nimbella.com/install/)** and run it. **

If ten people have to run it, then make a bunch of containers so _there is enough to run them all_. And once they are done, _get rid of the containers_. 

And the last question for this blog: 

### What are some good ways of learning Kubernetes?

YouTube videos are one of the best ways. There are many tutorials and videos available. 

**We recommend some channels and specific videos: **

Google Cloud Tech Youtube channel: 

* [What is Kubernetes?](https://youtu.be/cC46cg5FFAM)
* [How to run containers on Kubernetes](https://youtu.be/_2fiMli8p3E)

TechWorld with Nana Youtube channel:

* [Kubernetes tutorial for beginners (4 hours crash course)](https://youtu.be/X48VuDVv0do)

IBM Cloud  Youtube channel:

* [Kubernetes Explained](https://youtu.be/aSrqRSk43lY)

Then you can use Kubernetes on Google and Amazon. They all have Kubernetes clusters. Use those clusters and get started instead of deploying your own Kubernetes cluster, which can be a lot of work.  

## Over to you: Kubernetes is hard - but worth the pain

In conclusion, we would like to share some highlights from the [CNFC 2020 Survey](https://www.cncf.io/wp-content/uploads/2020/11/CNCF_Survey_Report_2020.pdf) and the perspective of Kubernetes to grow. 

The survey cities: 

* The use of containers in production has increased to 92%, up from 84% last year, and up 300% from our first survey in 2016. 
* Kubernetes use in production has increased to 83%, up from 78% last year. 
* There has been a 50% increase in the use of all CNCF projects since last year’s survey. 
* Usage of cloud-native tools: 
* 82% of respondents use CI/CD pipelines in production. 
* 30% of respondents use serverless technologies in production. 
* 27% of respondents use a service mesh in production, a 50% increase over last year. 
* 55% of respondents use stateful applications in containers in production. 

The trend and quick adoption of Kubernetes by enterprises is growing yearly and widely adopted by DevOps engineers, cloud architects, backend developers, DevOps management, full-stack developers, and other tech specialists.  

If you’re looking for a scalable cloud solution then you should surely consider Kubernetes. 

To ease the development of Kubernetes we offer [Nimbella serverless platform](https://nimbella.com/platform) that is available on prem, private, hybrid, and public cloud. 

**_This interview has been taken by Yulia Aslamova. _**

**_Head of Marketing and User Acquisition at Nimbella_**
