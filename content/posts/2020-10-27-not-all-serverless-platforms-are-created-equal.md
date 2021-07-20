---
title: Not All Serverless Platforms Are Created Equal
status: Published
date: 'October 27, 2020 3:39 PM'
postFeaturedImage: /images/uploads/blog-not-all-serverless-platforms-are-created-equal_900.jpg
excerpt: >-
  Ever since Serverless gained traction among developers with the early success
  of AWS Lambda, there is quite some confusion on how these platforms fit
  application needs. In the last two years, there was a proliferation of the
  next generation of Serverless platforms, going beyond the event-driven use
  cases to support complex enterprise applications.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    There has been a proliferation of the next gen of Serverless platforms,
    going beyond the event-driven use cases to support complex enterprise
    applications ✔
  shareImageUrl: /images/uploads/blog-not-all-serverless-platforms-are-created-equal_900.jpg
  title: Not All Serverless Platforms Are Created Equal
---
Ever since Serverless gained traction among developers with the early success of AWS Lambda, there is quite some confusion on how these platforms fit application needs. In the last two years, there was a proliferation of the next generation of Serverless platforms, going beyond the event-driven use cases to support complex enterprise applications. In the early days, AWS Lambda and other Serverless offerings imposed severe constraints on developers, limiting the application architectures supported by these platforms. However, the newer Serverless platforms are versatile, giving developers more choice with limited constraints on the application architectures. In this blog post, we will discuss the evolution of Serverless platforms and highlight the enterprise-grade features offered by newer platforms.  

The Serverless market has been steadily growing, driven by agility needs and a shift in how enterprise applications are architected. Microservices and Serverless Functions help developers churn out features at the speed of business, rather than the traditional approach of refreshing applications on longer timeframes. In fact, the market research firm [Markets and Markets predicts the FaaS market size](https://www.marketsandmarkets.com/Market-Reports/function-as-a-service-market-127202409.html) to grow to more than 7 Billion in 2021, driven mainly by the shift from DevOps to Serverless Computing. Based on our conversations with enterprise developers and decision-makers, we expect the growth in the Serverless market to be fueled by the large-scale adoption of Serverless computing in the enterprise. Enterprises see value in Serverless, but their application needs require a more flexible platform that does not constrain developers unlike the Serverless offerings from major cloud providers. 

## Serverless - Going beyond DevOps in the Enterprise

The needs of enterprise developers are different from that of individual developers coding for their itch or even startup developers. Enterprise applications go beyond just event-driven functions to complex stateful applications. Any Serverless platform should not only support stateful applications but also give developers necessary flexibility to handle the complex needs of typical enterprise applications. 

### Stateful and Big Data Applications

Even though the early iterations of Serverless platforms focused on supporting stateless applications, newer platforms support application state. These platforms not only support databases, object storage, and in-memory data grids out of the box, but also ensure that the data storage systems scale seamlessly with usage as well as simultaneous invocations of the functions with scale. These next-gen Serverless platforms provide more flexibility and impose minimal constraints because they are built on top of open-source platforms like Apache OpenWhisk and Kubernetes. By taking advantage of the container engine supported by these platforms, newer Serverless platforms provide more enterprise-grade features. These platforms go beyond supporting simple functions to microservices, big data workloads, and other complex stateful applications. 

### Better Developer experience

Early Serverless platforms imposed significant constraints on developers, and while some of these constraints are being lifted, others remain. For example, take the upper limit on the execution time of a function. AWS Lambda has a limit of 15 minutes per function invocation, and if the job takes more than 15 minutes, you need to either invoke containers from AWS Fargate or Virtual Machines from AWS EC2. There are other ways to run long running jobs like calling Lambda functions asynchronous by taking [advantage of context objects](https://medium.com/@vsaravind007/implementing-long-running-serverless-functions-with-aws-lambda-fe06d97120b2). Enterprise developers don’t want such constraints or workarounds and they want a more seamless experience. The newer breed of enterprise-grade Serverless offerings support log running jobs out of the box and they can scale seamlessly without additional overhead. Some platforms provide support for containers, vastly increasing support for libraries and other dependencies needed by the enterprise applications. Even though serverless is supposed to provide a better developer abstraction, the early Serverless platforms required developers to have operations knowledge to put together the backend; data storage and to handle scale. Today’s enterprise-grade Serverless platforms provide a more out of the box experience for building enterprise applications without the additional DevOps knowledge.

### Enterprise-Grade Security

While all Serverless platforms provide security needed to secure the applications, enterprises security needs require easy integration with their existing security tools. Beyond integrating with Identity and Access Management tools, the Serverless platforms should integrate with other security and auditing tools like container vulnerability scanning tools, network security tools and auditing tools. Enterprises cannot easily use general purpose Serverless offerings from the large cloud providers to integrate with their existing security toolchain to ensure security and governance. Such an integration requires customization of the Serverless platforms which is not supported by the ones offered by major cloud providers.

### Application architecture flexibility

Unlike the early Serverless platforms, the newer enterprise-grade platforms support many different applications from event-driven applications to microservices to web applications and big data workloads; This is possible because these platforms are built on top of industry-tested container platforms, giving developers the flexibility to deploy complex architectures without compromising on the ease of use. These newer platforms also provide a canvas that can be used by developers to define the workflows so that they can develop on local machines and test on the cloud seamlessly. This also removes some of the operational and DevOps complexities associated with 1st generation Serverless platforms. With tight integration to data stores and other backend services needed for enterprise applications, modern Serverless platforms support a wide range of application architectures.

### On-Premises and Multi-Cloud support

Today’s modern enterprises require applications to provide the best user experience, not just acceptable user experience. In order to deliver the best user experience, developers should be empowered to use the right set of dependency services rather than compromising by using services supported by a single cloud provider. Moreover, many enterprises have existing applications running on their own data centers. For many enterprises, they need the flexibility to run their Serverless applications on-premises as well as in the cloud. While the early Serverless platforms were cloud-based and constrained only to the specific cloud providers, modern Serverless platforms deliver both the flexibility of a cloud-based service across multiple cloud providers and deployability on-premises with little operational overhead. The modern FaaS platforms enable both hybrid cloud and multi-cloud architectures.

### Conclusion

Serverless changes how applications are developed and deployed to meet the challenges of global business. Modern enterprises will not (and cannot) compromise on agility and seamless user experience. Adding constraints to developers may not be optimal in the enterprise context. As FaaS became attractive among developers, the need for enterprise-centric features became more apparent. Modern Serverless platforms like [Nimbella](https://nimbella.com) are built for enterprise needs and  offer a better and more integrated developer experience. In future posts, we will delve deeper into how these modern platforms are helping enterprise developers deliver at the speed of business.

**Krish Subramanian**
**Founder and Chief Research Advisor**
Rishidot Research
[@krishnan](https://twitter.com/krishnan)
