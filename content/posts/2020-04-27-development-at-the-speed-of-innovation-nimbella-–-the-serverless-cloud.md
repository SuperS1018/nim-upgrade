---
title: 'Development at the Speed of Innovation – Nimbella, the Serverless Cloud'
status: Published
date: 'April 30, 2020 4:00 PM'
postFeaturedImage: /images/uploads/anshu-thumb.png
excerpt: Nimbella Platform Features and Benefits
ctaBanner:
  - banner: Platform
categories:
  - category: Announcement
  - category: Technology
meta:
  description: >-
    This blog explains Nimbella Serverless Cloud, how Nimbella’s features
    address the challenges to unlock frictionless application migration and more
    ✔
  title: How to Develop Serverless Stateful Cloud Web Applications?
---
Remaining competitive in dynamic and evolving markets requires rapid adaptation or transformation of business models. Many businesses have found that rapid change could only be achieved if their traditional IT infrastructure was replaced by a flexible, responsive alternative that enabled substantial improvements in the speed and cost of application development and ongoing operations.

As a result, Cloud-based IT infrastructures typically delivered by providers of Infrastructure-as-a-Service (IaaS) such as AWS, Digital Ocean, Google, IBM, or Microsoft have become the preferred choice for enabling and catalyzing fundamental process improvements, new ways of doing business, pursuing new markets, and launching new types of offerings based on digital assets. Firms that cannot adapt rapidly and innovate cost effectively will fall behind and eventually fail.

In short, IT organizations require the ability to cost effectively develop new application solutions that accelerate the speed of business innovation. Thus, most businesses want to reap ever-increasing benefits of new application solutions while continually striving to reduce the costs of using and managing IT hardware and software infrastructure. This is illustrated in the progression from traditional dedicated infrastructure, to converged infrastructures, to shared virtualized infrastructure, to on-demand Cloud infrastructure.

## **_Serverless_ - A Free Lunch?**

The next step beyond on-demand Cloud offerings is an infrastructure alternative with a somewhat misleading name: Serverless.

The Cloud Native Computing Foundation (CNCF) definition¹ of Serverless is: “where applications, bundled as one or more functions, are uploaded to a platform and then executed, scaled, and billed in response to the exact demand needed at the moment.”

The Gartner definition² of Serverless is: “Serverless computing is a model of IT service delivery in which the underlying enabling resources are used as an opaque, virtually unlimited, shared pool that is continuously available without advance provisioning (pre-provisioning) and priced in the units of the consumed IT service.”

In other words, Serverless is a Cloud offering that enables an application to run without provisioning or managing any of the underlying hardware or software infrastructure including machine security, operating system upgrades, and scaling to satisfy dynamic loads. This offers the benefits of reducing support costs and potentially redistributing resources from support to development. In addition, resources actually consumed during execution of a Serverless application are billed with finer granularity such as per API call or on milliseconds.

There is no doubt that Serverless delivers many benefits. But, Serverless is not IT infrastructure Nirvana. The old adage – there is no such thing as a free lunch – is particularly applicable here. Selecting Serverless as your Cloud infrastructure alternative entails overcoming or accepting some or all of the following challenges and limitations:

1. **Application design complexity.** Applications are structured as sequences of functions developed by the application programmer. As the number of functions in the application grows, complexity grows. Applications are often modeled as a collection of functions driven by an event-driven architecture (EDA). Many developers are not accustomed to this structure which is not intuitive and is typically hard to debug. 
2. **Application development complexity.** Testing, debugging and migrating an application from development to operations can entail complex processes. Most developers are not accustomed to such complex processes.
3. **Lack of standards across provider offerings.** Each Cloud provider’s Serverless offering entails interfaces and functions that are not compatible with other Cloud providers’ Serverless offerings. This lack of compatibility implies lack of portability and raises the specter of “lock-in” to one Cloud provider, and means that developing apps for more than one Serverless offering can be challenging.
4. **Limitations.** Each Cloud provider’s Serverless offering imposes limitations on applications. These limitations range from maximum run times of 1 to 15 minutes, to maximum number of reads or writes to data tables, to limits on timeouts for various functions, to limits on resources for the application which can prohibit some resource-intensive applications (e.g., HPC).
5. **No support for “stateful” applications. **Serverless applications are composed of inherently stateless functions. Moreover, Serverless offerings do not support data storage that persist after the application has ended execution. State information must be externalized to platform services such as databases, shared file systems or messaging systems.
6. **Latency challenges.** One the application starts up, the Serverless offering may have to load the functions used by the application. This could take seconds.
7. **Legacy applications.** Legacy applications require revision to move to a serverless computing model. This will impede migration of legacy apps to serverless and create challenges in scheduling due to workload/data dependencies.
8. **Security.** Conventional security tools are not supported in Serverless frameworks.

## **Nimbella - The Serverless Cloud**

The preceding list of challenges and restrictions is definitely formidable. However, they are not insurmountable.

This blog introduces Nimbella - _The Serverless Cloud_ and briefly explains how Nimbella’s features address the challenges and restrictions of serverless and unlock frictionless application migration and accelerated development of new application solutions. In-depth, developer-oriented information about Nimbella is provided in separate blogs, noted below, with associated tutorials and demonstrations.

Nimbella has four broad groupings of features:

**1. Simpler developer experience.** Nimbella provides services that significantly reduce the complexity of designing, developing, testing, or migrating an application for the cloud.

* Manifest-less projects
* Deployment straight from a code repository (e.g. GitHub)
* Developer tooling to build, deploy and run entire serverless applications not just functions

**2. Native support for State.** Nimbella provides support for persistent data files and eliminates the limits imposed on applications by typical serverless offerings. 

* Managed object store for file blobs
* Managed key-value store for transient and small persistent data
* System managed resource management and data backup
* Built-in performance and cost optimizations

**3. Faster adoption, migration and delivery**. Nimbella supports several programming languages independently of the underlying serverless infrastructure offering. This eliminates any need for a developer to learn another programming language to use a different Cloud provider. 

* Customizable runtimes
* Dedicated domain with SSL per developer or project
* Managed object storage and CDN for static content
* Disconnected development and local debugging
* Integrated logging and monitoring

**4. Deploy and run Anywhere.** Nimbella provides transparent support for applications across multiple serverless offerings. This eliminates potential challenges, such as provider “lock-in”, posed by the lack of standards across serverless offerings.

* Automates underlying complicated Kubernetes management operations
* Eases operational burden with built-in playbooks
* High-availability deployment topology and configuration
* Hosted solution and also available as full-stack solution powered by open-source and deployable on other clouds (public or private)

Current Nimbella capabilities address most of the challenges posed by Serverless. In addition, the development roadmap for Nimbella includes functionality to address the few remaining challenges.

By eliminating or mitigating the challenges and restrictions, Nimbella – _The Serverless Cloud_ enables application developers to deliver new solutions at the speed of innovation by focusing solely on coding logic and ceasing to think about or wait for underlying infrastructure. 

_**References:**_

1. [CNCF Serverless Whitepaper v1.0](https://github.com/cncf/wg-serverless/blob/master/whitepapers/serverless-overview/cncf_serverless_whitepaper_v1.0.pdf)
2. [An I&O Leader's Guide to Serverless Computing](https://www.gartner.com/document/3872956)”,  Arun Chandrasekaran, Craig Lowery, Gartner, 26th April, 2018

Written by:_ Anshu Agarwal (_[_Twitter_](https://twitter.com/anshuagarwal101)_, _[_Linkedin_](https://www.linkedin.com/in/anshuagarwal/)_)_
