---
title: 'AWS re:Invent Serverless Highlights'
status: Published
date: 'December 11, 2020 5:58 PM'
postFeaturedImage: /images/uploads/blog-aws-re-invent-serverless-highlights_900.jpg
excerpt: >-
  AWS re:Invent kicked off last week with a dizzying number of announcements
  related to Serverless Computing. This article reviews several new offerings on
  AWS and what they mean for developers, IT Managers and Executives. At
  Nimbella, we are building a serverless cloud that is easy to use, and which
  offers the best of serverless innovations no matter the cloud your choose.
ctaBanner:
  - banner: Platform
categories:
  - category: Technology
meta:
  description: >-
    This article reviews several new offerings on AWS and what they mean for
    developers, IT Managers and Executives ✔
  shareImageUrl: /images/uploads/blog-aws-re-invent-serverless-highlights_900.jpg
  title: 'AWS re:Invent Serverless Highlights | Nimbella Blog'
---
[AWS re:Invent](https://reinvent.awsevents.com/) kicked off last week with AWS CEO Andy Jassy delivering a fast paced and announcement-packed keynote. If you missed it, you can watch it on [replay](https://virtual.awsevents.com/media/t/1_2dqukpps/186983933), or read on for a recap of the most notable news and implications related to Serverless Computing. A [short video discussion](https://youtu.be/A2uW-VdLc_k) with [Krish Subramanian](https://twitter.com/krishnan) of [Rishidot Research](https://www.youtube.com/channel/UCiGzV6MW0VsTgqJqm8-TY1Q) highlights some of the points I discuss below, for those who prefer streaming content instead.

CMS-YOUTUBE ID=A2uW-VdLc_k ALIGN=center WIDTH=100

Several of the serverless announcements are an exciting validation for the technology and products we built and are continuing to improve at [Nimbella](https://nimbella.com). Our goal is to create the easiest serverless cloud to use. We are already helping organizations accelerate their serverless journey, whether it is to AWS or another cloud they are already committed to.

- - -

Let's look at the re:Invent announcements aimed at developers. You should note the narrowing of the gap between Serverless Functions and **Serverless Containers**. AWS now supports packaging code as a Docker container rather than as a Zip file. While this capability has been offered by some serverless providers, it is remarkable for a provider at Lambda's scale. Given AWS' focus on the customer and developer needs, this is great validation for open source serverless platforms like [Apache OpenWhisk](https://github.com/apache/openwhisk), for Nimbella (where we build on OpenWhisk), and for other clouds which have offered this capability for some time.

Serverless containers on AWS are driven by two factors. The first factor is the mature ecosystem and tools that reduce the difficulties of developing, testing and debugging serverless functions. The second factor is the growth of AI and ML workloads. With serverless containers on Lambda, you can now package Tensorflow and similar ML frameworks, into the function runtime, and tailor the packages available to your needs, without the constraints Lambda imposes on package size. AWS has also increased the available memory and CPU resources, thus making Lambda even more attractive for AI/ML workloads. I'm expecting Lambda with hardware acceleration and GPU support to eventually surface. Maybe at the next re:Invent.

The container-related announcements should also appeal to IT Managers and Executives. At Nimbella we view serverless containers as a way to bridge the gap, and provide a gentle migration for organizations that are on a container-first strategy. Serverless, while having experienced exponential growth in the last six years, is still relatively nascent in the evolution of the cloud. There is a decade of container-based technology and tools being wielded by developers already, at organizations large and small. Serverless containers will play an essential role in lowering the barriers of entry and in accelerating both cloud and serverless adoption.

At Nimbella, we are convinced that Serverless is inevitable and can be an easy "on ramp" to the cloud.

- - -

Lambda wasn't the only serverless product to get exciting updates.

Consider **Step Functions** and synchronous workflows. This enhancement enables executing a workflow in a request/response style (i.e., the API is synchronous) while orchestrating many serverless steps and APIs in the backend.

We see AWS moving toward satisfying the [Serverless Trilemma](https://dl.acm.org/doi/10.1145/3133850.3133855), which defines the design trade-offs a serverless platform must make to offer composable serverless functions and workflows.

CMS-IMAGECLASS IMAGE=/images/uploads/serverless-trilemma.png INDENT=0 CLASS=undefined ALT=Serverless Trilemma.

CMS-CAPTION ALIGN=center CONTENT=Without intrinsic support, Step Functions which are compositions-as-functions violate at least one constraint. AWS is moving toward satisfying the Serverless Trilemma.

Satisfying the Serverless Trilemma unlocks a powerful programming model for building serverless applications because 1) it allows workflows to be treated (i.e., substituted) as functions, 2) treats functions as opaque computational units, and 3) [does not double bill](https://medium.com/openwhisk/composing-functions-into-applications-70d3200d0fac) the user for the orchestration time and the computation time. During my time at IBM Research, my colleagues and I pioneered these concepts and [contributed a programming model and implementation](https://github.com/apache/openwhisk-composer) that satisfy the Serverless Trilemma to the Apache OpenWhisk project.

Developers will love this capability. And forward-thinking IT Managers and Executives should see this as a way of building reusable assets and libraries within their organization, for future cloud applications and APIs.

Next, consider **Aurora Serverless** which is now in version 2. Aurora is a serverless MySQL database, which can scale up in a fraction of a second. If you're serverless first, and on AWS, this is a great complementary service to Lambda. No more database infrastructure and capacity planning for you to manage.

Aurora also shows that while there are still enhancements remaining for Lambda, the aperture is widening to also focus on memory and the data management in the cloud. This is crucial. First there are the sheer mechanics of managing and scaling the database. But we also need emphasis on data locality and improving the efficiency of data flow in the cloud between services.

Today, this is largely still done at the user level. At [Nimbella](https://nimbella.com) we view this as a fundamental capability to building distributed and cloud applications in a serverless and event driven way.

Efficient data flow is important for improving latency, reducing costs,  and for being more eco-friendly. Moving large ML models around between an object store and Lambda (for example), is not the best use of the underlying infrastructure. This is a core competency for us at Nimbella, and is one of the areas we developed innovative solutions for, and continue to improve on.

- - -

Lastly, let's look at **EKS Anywhere** and open source contributions from AWS. EKS is now a public distribution that  enables running the AWS version of Kubernetes on other clouds. So AWS is signaling that it is moving to appease potential concerns around vendor lock-in. With Lambda supporting serverless containers, AWS is also providing reference container images and runtime implementations as open source. The underlying technology for running Lambdas is already being developed in the open as part of [Firecracker](https://aws.amazon.com/blogs/aws/firecracker-lightweight-virtualization-for-serverless-computing/).

How much more will AWS do in open source? Clearly AWS understands the difference between capabilities that are open sourced, and the expertise required to run those capabilities at scale. This sometimes causes friction in the open source communities when AWS offers popular open source projects as hosted services.

But, we believe if AWS were to open source a Lambda control plane, they could pursue Kubernetes more directly. Of course, until that happens, there's [Apache OpenWhisk](https://github.com/apache/openwhisk) which is the best open source serverless functions runtime compared to Lambda. In some ways, the programming model in OpenWhisk is just what Lambda and Step Functions are starting to offer now. Nimbella extends these capabilities to make it easier to build serverless applications that are also stateful.

Our goal at Nimbella is to build a serverless cloud that is the easiest to use. We believe the cloud must be more accessible to developers, of different skill sets, and on the cloud of their choice. We also believe all services should be fully managed so that developers can stop wondering what serverless is good for, and just build. Development at the pace of innovation is the way it should be, and that is what is driving our innovations at Nimbella.

- - -

I am the co-founder and CTO at [Nimbella](https://nimbela.com). We have the technology and experience to help you succeed and accelerate your serverless transformation. If you doubt that the future of the cloud is serverless, I’ll change your mind. You can reach me on [Twitter](https://twitter.com/rabbah) or in our Nimbella [community Slack](https://nimbella.com/slack).
