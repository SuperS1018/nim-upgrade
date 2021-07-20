---
link: 'https://medium.com/openwhisk/the-dawn-of-the-cloud-computer-bd313e048335'
title: The dawn of the Cloud Computer
status: Published
date: 'October 23, 2018 4:00 PM'
postFeaturedImage: /images/uploads/blog-the_dawn_of_the_cloud_computer.jpg
excerpt: >-
  Serverless computing, ushered in full force with the introduction of AWS
  Lambda, is the foundation of a cloud-native transformation that is ongoing in
  the industry. It is the way cloud applications are being built and will be
  built for the most part in the future.

  An example of serverless computing that I’ll focus on here are Serverless
  Functions: units of code that execute in response to events. As a developer,
  you create your functions in the cloud and they execute in response to events.
categories:
  - category: Technology
meta:
  description: >-
    Serverless computing, ushered in full force with the introduction of AWS
    Lambda, is the foundation of a cloud-native transformation that is ongoing
    in the industry. It is the way cloud applications are being built and will
    be built for the most part in the future.

    An example of serverless computing that I’ll focus on here are Serverless
    Functions: units of code that execute in response to events. As a developer,
    you create your functions in the cloud and they execute in response to
    events.
  title: The dawn of the Cloud Computer
---
## How Serverless Computing is Shaping the Cloud

Serverless computing, ushered in full force with the introduction of AWS Lambda, is the foundation of a cloud-native transformation that is ongoing in the industry. It is the way cloud applications are being built and will be built for the most part in the future.

An example of serverless computing that I’ll focus on here are Serverless Functions: units of code that execute in response to events. As a developer, you create your functions in the cloud and they execute in response to events.

* You don’t provision servers to execute your functions.
* You don’t scale the servers because you didn’t provision any. Yet your function executions will scale with demand: more events, more functions executed in parallel.
* You don’t secure the servers because you didn’t provision any. Your functions will run isolated from other functions, in an execution environment secured for you.
* And you don’t pay for server time when your functions are not executing. Pay for what you use, and pay nothing when idle.

This is a shift toward utility based cloud computing, at the granularity of milliseconds.

...

So how and where does your function run? The answer is that it should not matter to you as the developer. When you write programs in JavaScript, Python, Java, etc. you just execute them on your computer without looking at the instructions generated or the microcode of your processor. And so it is that with serverless, you write your functions in the languages of your choice, and they just execute in a **_Cloud Computer_**.

The unit of abstraction is the function and its runtime — let’s call the combination an “action”. How and where the action executes, in a serverless model, is an implementation detail of the Cloud Computer. While some details matter for the sake of optimization and performance tuning, it is important to define the Instruction Set Architecture (ISA) for the Cloud Computer, so as not to confuse it with the “microcode”.

It happens to be the case today that functions execute inside containers, because containers provide a reproducible unit of execution and a desirable unit of isolation. Containers are used widely by open source serverless functions platforms such as [Apache OpenWhisk](http://openwhisk.com/?source=post_page---------------------------), [Kubeless](https://kubeless.io/?source=post_page---------------------------), and [OpenFaaS](https://www.openfaas.com/?source=post_page---------------------------).

But container technology such as Docker is the technology today. They are too heavy weight and Docker operations too slow, that it’s conceivable other technology will one day replace them in the Cloud Computer. There are efforts for example to use [unikernels](http://unikernel.org/?source=post_page---------------------------) instead. Docker containers are the microcode. In time, they should fade more so into the background.

A fundamental weakness of some of the serverless functions platforms developed today is that they hit you in the face with the implementation detail: the container, and its orchestration technology — like Kubernetes. This is a mistake.

If you have to create a container to execute your function, or execute a Kubernetes command, or even inspect a Kubernetes pod, you are coding at the microarchitecture level. Stop, and seek a higher abstraction.

...

**A RISC-y point of view?**

Each function invocation is an operation that executes in the Cloud Computer. The classic Reduced Instruction Set Computer (RISC) consists of the following stages — Instruction Fetch, Instruction Decode, Execute, and Write Back — which have natural analogs in the Cloud Computer.

![RICS Pipeline](/images/uploads/dawn-cloud-computer1.png)

```
An example RISC Pipeline with 4 stages: Instruction Fetch (IF), Instruction Decode (ID), Execute (EX), and Write Back (WB). Where’s the Memory Access stage? Read on.
```

* Instruction Fetch (`IF`): the function is fetched from a store and readied for execution. A function that is fetched is cached to ameliorate and amortize the cost of fetching the code from the data store.
* Instruction Decode (`ID`): resources to execute the function must be allocated, if necessary. These resources depend on the type of the function. Since functions may be implemented in a [variety of languages](https://medium.com/openwhisk/serverless-functions-in-your-favorite-language-with-openwhisk-f7c447558f42?source=post_page---------------------------) including JavaScript, Python, Swift, Java, and Go to name a few, the resource is allocated accordingly.
* Execute (`EX`): the function is ready to execute, receives its input, and computes its output.
* Write Back (`WB`): the final stage writes the result of the function back to a data store, and/or sends the data back to the caller.

When you create and deploy a serverless functions, no resources are created or allocated to execute that function. Instead, the program is simply stored in the Cloud Computer, ready to execute. (_Note: some serverless platforms today will automatically create a container ready to run the function as soon as it is created._)

The processing pipeline begins when the function is invoked, for example in response to an HTTP request or some other event. The invocation causes the Cloud Computer to fetch the function, decode it and allocate a resource to execute it. The function executes and returns the result which becomes observable to the caller.

...

**Not just Functions, but Applications**

The RISC analogy is helpful to understanding the breadth of the opportunities and challenges that are ahead for the Cloud Computer and the serverless model.

Consider for example that just as classic programs aren’t single instructions, cloud native Applications are not a single function. Rather, they are [compositions of functions](https://medium.com/openwhisk/composing-functions-into-applications-70d3200d0fac?source=post_page---------------------------), say a sequence `A => B` where the result of the function `A` flows as input to function `B`. When the application begins to execute, the Cloud Computer can predict that the execution of `A` will cause the function `B` to execute next, and can fetch the code for `B` ahead of time. It can even speculatively decode and reserve a resource to execute it. This speculation can hide the latency in provisioning resources (and is an example of the advanced optimizations being explored in Apache OpenWhisk).

Furthermore, with [advanced performance analysis and tooling](https://medium.com/@rabbah/performance-debugging-for-serverless-functions-using-the-ibm-cloud-shell-ceed43e07b5e?source=post_page---------------------------), one might ask which of the functions in the application is the performance bottleneck? Or, how well is the Cloud Computer hiding the execution overhead by pipelining the fetch and decode stages? It is immensely useful for the development and performance tuning of cloud native serverless applications to be able to _profile_ and _trace_ executions of entire applications in the Cloud Computer.

...

**Serverless data flow and the new era of computing**

I deliberately omitted a stage in the RISC pipeline above: **the Memory Access stage**. In a classic sense, this is when the processor accesses memory to load operands referenced by the instructions. The decoupling of potentially long memory accesses from the rest of the pipeline stages allows for overlap between the stages. Today, serverless computing with functions ignores the memory management and data flow between functions. Worse, because the developer has no control over the serverless platform, they cannot generally optimize their data flow. This means computation and data locality, which are essential for efficient computing in general, are largely out of reach.

The Cloud Computer abstraction _will_ evolve to encompass how data flows between functions. Simply put, history has shown that proper computing abstraction and automation foster entirely new programming paradigms, and we are still at the dawn of the serverless era. This shift toward an abstraction for serverless dataflow is already happening. One notable example is Apache OpenWhisk’s [conductor action](https://github.com/apache/incubator-openwhisk-composer?source=post_page---------------------------#apache-openwhisk-composer).

In Apache OpenWhisk, the execution of a serverless application (comprised of many functions) maintains an execution context that stores the equivalent of a program counter and stack. The context, including the state of the application on the stack, is automatically managed by the platform. In turn, this permits the result of one function to be forwarded directly between functions similar to register bypass in a RISC pipeline. Earlier prototypes showed how to externalize this state to a durable store to facilitate additional features such as suspending and resuming applications, and early termination of long running applications.

> [Read more: A Serverless Composition of Functions](https://medium.com/openwhisk/a-serverless-composition-of-functions-59b6743d3835?source=post_page---------------------------)
> Composing serverless functions for richer cloud applications.
> medium.com

...

The Cloud Computer is in its infancy, but there is little doubt among those of us at the forefront of this computing era that the future is entirely serverless, and as Cloudflare’s CTO [John Graham-Cumming](https://blog.cloudflare.com/introducing-workers-kv/?source=post_page---------------------------) put it, we are moving “closer to being a complete compute platform” embedded in the cloud.

Join us and the [serverless conversation on Slack](http://slack.openwhisk.org/?source=post_page---------------------------) and [star us on GitHub](https://github.com/apache/incubator-openwhisk/stargazers?source=post_page---------------------------).

**Rodric Rabbah**. “**The dawn of the Cloud Compute**r” Medium, <https://medium.com/openwhisk/the-dawn-of-the-cloud-computer-bd313e048335>. Accessed 23 October 2018.
