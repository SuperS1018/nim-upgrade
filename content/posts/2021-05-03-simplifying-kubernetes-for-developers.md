---
title: Simplifying Kubernetes For Developers
status: Published
date: 'May 6, 2021 4:39 PM'
postFeaturedImage: /images/uploads/simplifying-kubernetes-for-developers.png
excerpt: >-
  Kubernetes offers many benefits, it also offers many challenges which
  organizations have to overcome to realize optimal ROI. In this blog post, we
  will talk about how the Nimbella Serverless Platform helps organizations
  overcome some of the challenges and help improve developer agility, leading to
  much better ROI for organizations.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    A quick explanation about Kubernetes architecture, benefits and shortcomings
    of Kubernetes, abstracting away YAML complexity with Nimbella ✔
  shareImageUrl: /images/uploads/simplifying-kubernetes-for-developers-twitter.png
  title: Simplifying Kubernetes For Developers
---
## Introduction to Kubernetes Architecture

For the past several years, Kubernetes has been gaining traction among the developers including enterprise developers. Gartner [predicts](https://www.gartner.com/en/documents/3985796/forecast-analysis-container-management-software-and-serv) that Container Management will grow to $944 Million by 2024 and Kubernetes is expected to drive the growth. Forrester points out a vibrant [Kubernetes landscape ](https://www.gartner.com/en/documents/3985796/forecast-analysis-container-management-software-and-serv)driven by large-scale adoption of Kubernetes. 

### Kubernetes: solid growth for the coming years

The [Cloud Native Survey 2020 ](https://www.google.com/url?q=https://www.cncf.io/wp-content/uploads/2020/12/CNCF_Survey_Report_2020.pdf&sa=D&source=editors&ust=1620072217237000&usg=AOvVaw1HHLF_QwRvLCSC1oWb579e) put out by Cloud Native Compute Foundation points out to 300% increase in container adoption since 2016 and an 83% increase of Kubernetes adoption in production. The success of Kubernetes was driven by the developer adoption of container technologies and an operational need for standardization. While Kubernetes offers many benefits, it also offers many challenges which organizations have to overcome to realize optimal ROI.

 In this blog post, we will talk about how the Nimbella platform helps organizations overcome some of the challenges and help improve developer agility, leading to much better ROI for organizations.

CMS-IMAGECLASS IMAGE=/images/uploads/kubernetes-architecture.jpeg INDENT=0 CLASS=w75 d-block mx-auto ALT=

## Benefits & Shortcomings of Kubernetes

Even though container adoption was kickstarted by the developer community, Kubernetes gained more traction among the IT operations and DevOps, mainly driven by the declarative approach to Operations and standardization. Today Kubernetes is used by developers, DevOps, SRE, and IT Operations teams in many large organizations. 

### The strengths of Kubernetes

Some of the benefits of using Kubernetes are:

* **Increased agility for developers** as they can easily package their code and dependencies into containers and push it across the DevOps pipeline
* **Ability to run both legacy applications** (through lift and shift) and modern applications under similar environments
* **Standardization of Operations**, simplifying the cost of IT operations
* **Better resource usage **as more applications can be packed into the compute units by using containers

### YAML Complexity impacts Developer Productivity

While Kubernetes provides these advantages to both developers and IT operations, it adds significant challenge for developers due to what is known as YAML complexity. As we have pointed out earlier, Kubernetes uses a declarative approach to orchestrating and managing the containers. In order to do it successfully, Kubernetes requires a configuration file in the YAML format. 

A developer wanting to push their application to a Kubernetes cluster will have to define everything about their application, deployment, services, the definition of how states are handled, network, security bindings, etc. using multiple YAML files (as shown in the image below).

#### Kubernetes and complex applications: a difficult relationship

While it may not be complex for simple applications, the YAML configuration files become very complex for complex applications and most enterprise applications. In fact, the [Cloud Native Survey 2020](https://www.cncf.io/wp-content/uploads/2020/12/CNCF_Survey_Report_2020.pdf) by CNCF points out complexity as the major challenge faced by the users of Kubernetes. This YAML complexity dramatically impacts developer productivity and agility, leading to suboptimal benefits that defeat the very use of Kubernetes by modern enterprises. 

#### Lack of Programming Model

Another big challenge with Kubernetes is the lack of an inbuilt programming model that will make it easy for developers to deploy their applications. While Kubernetes operators do a good job in providing a resource model to manage the underlying clusters and some application dependencies, it doesn’t provide developers to easily handle the application dependencies from the programming language of their choice. They will need to rely on third-party libraries to handle these needs, impacting developer productivity and adding unnecessary DevOps overhead.

## Abstracting Away YAML Complexity from Kubernetes With Nimbella

However, there’s a way of taking advantage of the strengths of Kubernetes without the hassle of the YAML and other limitations. This is called Nimbella.

### Nimbella helps Developers focus on business logic

If Cloud Computing is about abstracting the infrastructure complexities and making it easy for users, then adding operational overhead for developers and adding friction makes little sense. It is important to provide an abstraction that gives a simple interface for developers so that they focus on the business logic rather than the configuration files needed to deploy applications in a containerized environment. 

Nimbella, a Serverless platform built on top of Kubernetes, tries to solve this challenge and make it frictionless for developers to deploy their applications in a Kubernetes environment. With the Nimbella platform, developers need not worry about the DevOps overhead and focus on innovating at the speed of business. Nimbella provides the developer abstraction that allows developers to easily deploy serverless API by focusing on the code than the operational elements of the underlying container infrastructure or YAML complexity. 

With this abstraction, developer productivity is significantly enhanced and allows them to deploy their applications friction-free, at the speed of business.

### Nimbella makes cloud-native development seamless

Nimbella also tackles the lack of programming language support from Kubernetes by providing necessary integrations that allow developers to focus on the application code and not worry about managing the application dependencies, further adding to the YAML complexity. 

> Nimbella removes the friction point for developers using Kubernetes by giving a seamless Serverless experience. For example, Nimbella’s Netlify addon provides Jamstack developers an easy serverless experience, removing friction and improving productivity.

Whether you are deploying modern applications that are stateless or stateful enterprise applications, Nimbella takes the pain out of managing the dependencies and the YAML complexity associated with deploying applications that use these dependencies including the state. Enterprises should remove any friction for their developers including any DevOps overhead like the YAML complexity problem of Kubernetes platforms.

_The blog post is authored by Rishidot Research_

**About **[**Rishidot Research:**](https://rishidot.com/)

Rishidot Research is the next-gen research and analysis firm focused on helping modern enterprise decision-makers understand and navigate cloud-native and artificial intelligence landscape.
