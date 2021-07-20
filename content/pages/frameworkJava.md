---
frameworkReact:
  banner:
    backgroundImage: /images/uploads/framework-banner-bg.jpg
    featuredImage: /images/uploads/java-icon.png
    subtitle: >-
      Deploying Java through Nimbella’s serverless infrastructure allows you to
      code and run any app in minutes. 
    title: Deploy **Java apps** Serverless
  change:
    bottomTxt: >-
      Nimbella’s focus and main objective is dedicated to facilitating the
      widespread **adoption of cloud computing** to any kind of user and team of
      developers.


      > Nimbella's Serverless infrastructure offers and **delivers a serverless
      cloud with a beautiful developer experience.**
    content: >-
      ### How to Deploy Serverless Java with our platform


      We can deploy java apps easily into Nimbella Serverless Platform with
      these steps below:


      1. Code your business logic such that Java's main method consumes user
      requests as JSON object parameters. 

      2. Process User Request in Java as per your business logic.

      3. Return the processed Response to the user as a JSON object.

      4. Wrap your java project as per Nimbella's directory structure
      recommendation for deployment.

      5. Configure the YAML file for deployment and deploy it through Nimbella's
      CLI.


      CMS-IMAGECLASS IMAGE=/images/uploads/nimbella-java-flowchart.png INDENT=0
      CLASS=w50 border ALT=Serverless Java App file structure


      Here’s an example of a typical directory structure of a serverless java
      maven project on Nimbella.


      CMS-IMAGECLASS
      IMAGE=/images/uploads/nimbella-serverless-java-maven-project-example.png
      INDENT=0 CLASS=w50 border ALT=Serverless Java Maven project example


      ### You can deploy your serverless Java code with us directly through our
      platform or also through a GitHub path.


      If you are running the app through our console just type:


      ```

      nim project deploy

      ```


      And if you want to deploy through a GitHub path the command is the
      following:


      ```

      github:

      git@github.com:

      https://github.com

      ```


      so as an example of deployment through GitHub the code would be: 


      ```

      nim project deploy github:nimbella/demo-projects/visits

      nim project deploy git@github.com:/my-account/my-repo-with-project/#dev

      ```
    list:
      - img: /images/uploads/enterprise.png
        title: >-
          **Big enterprise developers** working serverless based can gain in
          agility, focus, and costs on coding, deploying and maintaining apps.
      - img: /images/uploads/small-team.png
        title: >-
          **Small teams and freelancers **can deliver large-scale distributed
          applications faster and more securely than ever before without the
          need of an infrastructure on-premise.
    title: >-
      **Nimbella cloud & serverless infrastructure** changes the way
      applications are developed and deployed
  cta:
    btnLink: 'https://apigcp.nimbella.io/wb/?command=playground'
    btnTxt: Try Playground Now
    content: >-
      The Playground allows you to try our serverless environment without the
      need of creating an account and anonymously, but with limits in terms of
      the number of functions you can deploy (max 10), execution time (max 3
      seconds) and system usage (max 128 MB).
    desc: >-
      You can try our serverless platform even without signing up just by
      visiting our Playground.
    title: Try deploying serverless Java code now for free
  data:
    content: >-
      The founders of Nimbella had first in mind to make things easy, safe and
      quick for any developer or team of developers wanting to code Serverless.
      That is why when you decide to deploy Java apps through our platform you
      get:


      * A dedicated and SSL-secured domain name for your Java apps. If you are a
      big team of developers and have extra needs, just let us know in private
      and we can extend those capabilities for you

      * Static front-end assets deployed automatically from a global CDN

      * The team or developer gets back-ends that can be run on-demand, as many
      times as needed, almost instantly. There are no servers to maintain and
      take care of

      * A secure space inside the platform to upload files, with access limits
      as needed

      * The state of the app is recorded in a Redis key-value store, with data
      accessible from the private back-end offering near-to-zero latency

      * Workflow Builder for organizing long-running tasks within the developing
      team or for yourself

      * CLI and workbench tools to manage Nimbella services, build projects and
      deploy your Java apps

      * The developer working through Nimbella can code the app once in one or
      more clouds and run it through the local machine

      * Nimbella serverless infrastructure allows you to implement APIs from
      third-party apps in a few clicks

      * Nimbella infrastructure integrates gracefully with all the most famous
      public clouds (AWS, Google Cloud, Azure), with private clouds and also
      through a multi-cloud strategy: you can write the code once and deploy in
      all the clouds at the same time
    title: Data about our Serverless platform for **Java Apps**
  deploy:
    content: >-
      Java is the most widely used enterprise programming language. It is a
      technology with nearly 30 years worth of development - providing a stable,
      mature and efficient virtual-machine-based runtime for executing
      server-side applications. Java support on cloud platforms is essential for
      enterprises looking to adopt serverless technology

      ### Uses of Serverless Java

      Nowadays Java has been substituted by other programming languages in many
      fields, but still is the base of small apps that run internally in many
      systems, and is the core of the coding for apps in Android smartphones and
      devices. Java is also used as a connector between environments, for
      example, to connect to a MySQL database.  <br>

      https://nimbella.com/blog/how-to-connect-to-the-3rd-party-database-such-as-mysql-at-nimbella-example-in-java

      <br> As well, Java is still really useful to create whole applications
      that run in a single computer or through a network of computers. Java can
      also be combined with other frameworks to create apps of your choice.
    list:
      - btn: Go to Docs
        img: /images/uploads/doc-icon.png
        link: 'https://docs.nimbella.com'
        title: Learn how to get started
      - btn: Visit GitHub
        img: /images/uploads/github-icon.png
        link: 'https://github.com/nimbella/demo-projects'
        title: Deploy Starter Projects from GitHub
    title: Write **Java apps** and functions serverless in minutes with Nimbella
  faq:
    items:
      - answer: >-
          Our starter accounts are free: you just have to [**sign
          up**](https://nimbella.com/signup) to get started. If you need more
          capabilities you can upgrade from Starter account to Pro account at
          any time.
        question: How do I get started?
      - answer: >-
          If you are the only developer the Starter free account is likely the
          best match for you. The Starter account provides you with all the
          capabilities of the platform. On the other hand, if you are part of a
          small team of developers and/or you are working with multiple projects
          at the same time, we suggest you the [**Pro
          account.**](https://nimbella.com/pricing/platform)
        question: Which tier/account type is best for me?
      - answer: >-
          [**The Playground
          **](https://apigcp.nimbella.io/wb/?command=playground) allows you to
          try out a few capabilities of Nimbella’s serverless platform
          anonymously, without the need of signing up and for free. You can
          create, run and share up to 10 serverless functions in multiple
          languages like React, JS, Python, PHP, Go, Java, Swift and Typescript.
          However, the Playground has limits: maximum execution time is 3
          seconds and the function may not consume more than 128 MB. If you
          start trying out the Playground and you decide to sign up for an
          account you can export the functions you have coded into your account.
        question: What is Nimbella’s Playground and what can I do with it?
      - answer: >-
          You will find us on [**Slack**](https://nimbella.com/slack) and you
          can email us at any moment. If you are using our Enterprise account we
          provide 24x7 support
        question: How do I get support from Nimbella?
    title: FAQ’s about our Java Serverless integration
  other:
    list:
      - img: /images/uploads/react-icon.png
        link: /react
        name: React
      - img: /images/uploads/node-icon.png
        link: /node
        name: Node
      - img: /images/uploads/python-icon.png
        link: /python
        name: Python
      - img: /images/uploads/java-icon.png
        link: /java
        name: Java
      - img: /images/uploads/scala-icon.png
        link: /scala
        name: Scala
      - img: /images/uploads/golan-icon.png
        link: /go
        name: Go
      - img: /images/uploads/ruby-icon.png
        link: /ruby
        name: Ruby
    subtitle: >-
      We support a few more frameworks along with Java in our serverless
      infrastructure. Combine Java with these other languages and frameworks to
      create amazing serverless apps with Nimbella.
    title: Nimbella serverless is not only Java
meta:
  canonicalLink: ''
  description: >-
    Deploying Java through Nimbella’s serverless infrastructure allows you to code and run any app in minutes.
  title: Deploy Java apps Serverless
---

