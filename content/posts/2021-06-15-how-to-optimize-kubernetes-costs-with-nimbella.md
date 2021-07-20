---
title: How to optimize Kubernetes costs with Nimbella
status: Published
date: 'June 15, 2021 4:30 PM'
postFeaturedImage: /images/uploads/blog-cover-5.png
excerpt: >-
  In this article, Daniele Giuseppe di Pisa demonstrates through a realistic
  cost model applied in a cloud-native project how Nimbella works on Kubernetes
  and allows significant cost-saving compared to a "pure" development on
  Kubernetes.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    This article demonstrates how Nimbella works on Kubernetes and allows
    significant cost-saving compared to pure development on Kubernetes.
  title: How to optimize Kubernetes costs with Nimbella
---
Talking about costs is always a difficult topic because it is easy to focus on one aspect and neglect the others, and thus give a presentation that is not entirely in line with reality.

Here, I am presenting a realistic cost model applied in a cloud-native project and I will demonstrate how Nimbella works on Kubernetes and allows significant cost-saving compared to a "pure" development on Kubernetes.

Let's first clarify exactly what we mean by a "Cloud-Native" project. 

Let's start by underlining that a "lift-and-shift" project that merely runs on Kubernetes, an application as a Virtual Machine without horizontal scalability properties, can’t be considered Cloud-Native.

## What is Cloud-Native?

A cloud-native project has the following properties:

* It scales horizontally by adding computing resources, the system adapts and uses the new resources
* It distributes the load equally over the whole system and not just on a single component
* It manages the "back-pressure".  This means that it can manage situations in which requests increase faster than the system in its current state can handle.
* It is structured in microservices, and can therefore be updated gradually in a granular and incremental way.

Essentially, it is necessary to create an architecture similar to the one that Nimbella provides, ready to use.

CMS-IMAGECLASS IMAGE=/images/uploads/pic-1.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

### Workload of a typical cloud-native project with Kubernetes

Such a project has a complex architecture, that includes message queue management, data handling with NoSQL database, cache, and cloud storage, and it cannot be improvised. A** Cloud Architect** is therefore needed for its implementation.

If the project is a micro-services project, a **pipeline** must be created to build them continuously. Typically, for this purpose, it’s necessary to use Jenkins. Note that these pipelines need to be continuously updated and maintained. You, therefore, need a **DevOps Engineer** to handle this role.

CMS-IMAGECLASS IMAGE=/images/uploads/pic-2.png INDENT=0 CLASS=w75 d-block mx-auto ALT=

A Microservice Application Development requires Kubernetes and Cloud expertise. Therefore, at least two **Senior Developers** are needed for development and two more** Junior Developers**.

### How Nimbella reduces workloads

Let us now examine how much the same project developed with Nimbella would cost.

Nimbella offers a ready-to-use architecture for Native Cloud Development. It is a well-known architecture that applies best practices and patterns and is similar to those adopted by platforms like Facebook, Linkedin or Twitter. The architecture is proven, in production use and continuously updated by Nimbella. It, therefore, does not require a cloud architect to implement the platform.

Maintenance is greatly reduced as it is highly automated. A **DevOps Engineer, part-time**, is enough to maintain it.

No cloud skills are needed for application development, and there is no need to write Cloud Code but, instead, simply write Application Code only. One **Senior Developer** supported by two **Junior Developers** for development is therefore quite sufficient.

Finally, as Nimbella eliminates the DevOps pipeline, significantly reducing the amount of code to be written and streamlining deployment procedures, the development time is consequently reduced by at least 50%.

**Everything is condensed into a spreadsheet here.
**

CMS-IMAGECLASS IMAGE=/images/uploads/pic-3.jpg INDENT=0 CLASS=w75 d-block mx-auto ALT=

**Author:** Daniele Giuseppe di Pisa

Daniele began his career at the Technical Institute for Accounting in Milan after which he worked for 15 years in Italy for a Software House and Distributor of German BIM/CAD. This is where he learned to code. He moved on to working for WETO in Germany and then moved to China. Daniele now works with Nimbella in Sales. 

Find him on [LinkedIn](https://www.linkedin.com/in/daniele-giuseppe-di-pisa-52627882/).
