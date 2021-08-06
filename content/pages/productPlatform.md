---
heroBanner:
  desc: >-
    Customizable and cloud-agnostic serverless solution for your cloud
  btnLink: /signup
  btnTxt: Create an account
  title: >-
    Nimbella Serverless Platform
secondSection:
  list:
    - title: Nimbella Serverless Cloud
      desc: Collaborate with teams and work on the cloud individually
      linkTxt: HOW IT WORKS
      link: /platform/nimbella-cloud
    - title: Nimbella Enterprise
      desc: Portable and cloud-agnostic serverless solution for your enterprise workloads
      linkTxt: HOW IT WORKS
      link: /platform/nimbella-enterprise
  title: 'Nimbella Serverless Platform is available as:'
thirdSection:
  list:
    - img: /images/uploads/nimbella-architecture-1.png
    - img: /images/uploads/nimbella-architecture-2.png
  content: >-
    Nimbella is a cloud-native software stack that delivers a runtime environment for serverless and containerized applications. It is a full-stack platform which can be deployed either on dedicated infrastructure, private or public clouds. Nimbella utilizes Kubernetes as part of its foundation. It hides all aspects of Kubernetes, because, well, Kubernetes is designed for operators, not developers.
    
    
    The Nimbella platform administers the underlying components, including storage management, capacity provisioning, auto-scaling, identity management, monitoring, and logging. New capabilities are constantly added to improve the developer experience and make it easy for organizations to adopt serverless for their enterprise workloads.
  title: Nimbella architecture
fourthSection:
  list:
    - item: The flexibility of deploying "just code" or code packaged as containers.
    - item: Native support for stateful APIs and workflows.
    - item: A dedicated and secure domain name for each cloud application.
    - item: Static front-end assets are automatically deployed to and served from a global CDN.
    - item: Workflows to orchestrate long-running tasks and compose APIs.
    - item: A secured data bucket to upload files. Limit access as needed.
    - item: Application state recorded in a key-value store, with data accessible to all back-end logic at very low latency.
    - item: Back-ends which implement APIs as serverless functions, with resources provisioned on-demand, near-instantly. No servers for the developers to manage.
    - item: A command-line interface and a cloud Workbench to manage Nimbella services, build projects, and deploy applications to the cloud.
    - item: Customization for the CPU, memory, and logging resources available to APIs.
    - item: Ability to tune the Platform for performance requirements specific to the organization.
    - item: Customization of the platform for enterprise needs.
    - item: Integrations with popular developer tools.
  subtitle: >-
    Nimbella exposes serverless compute, serverless storage, and system services as Platform Services that can be easily consumed in the application. 
  title: 'Nimbella Serverless Platform provides the following key capabilities:'
fifthSection:
  btnLink: /whitepaper
  btnTxt: Download Whitepaper
  title: Download the Technical Whitepaper to explore more
sixthSection:
  list:
    - item: >-
        **Nimbella CLI** (Command Line Interface) is called nim. The CLI runs locally on the developer's terminal and integrates with their typical development workflow. It allows a developer to manage, develop and deploy serverless APIs (even entire applications that include front-end assets, key-value storage, and object storage), from their terminal.
    - item: >-
        **Developer Workbench**, the graphical user interface as a web application. The Workbench allows developers to use CLI commands (from the terminal) directly in their browser. This allows for one and uniform experience that extends from the desktop to the cloud. The Workbench allows a developer to manage namespaces, manage packages, manage functions, list function activations, work with an integrated object store, work with an integrated key/value store, manage routes, rules and triggers and manage web contents.
    - item: >-
        **Nimbella Deployer** is part of the Nimbella CLI and Nimbella Workbench. It can be used by developers or operations people to deploy a release into a Nimbella cloud, public or private.
    - item: >-
        **Integrations with Developer tools:** Postman, Netlify, and Nimbella Commander, an entirely serverless application that adds messaging system user access roles, in-messaging logging, secret values, and command set management into the most popular messaging systems (Slack, Microsoft Team, and Mattermost)
    - item: >-
        **Management Dashboard.** A Prometheus-based UI is included for monitoring historical load activity and other statistics about the platform. Additionally, the platform includes Kibana dashboards for monitoring developer usage, and to view system logs.
    - item: >-
        **Admin tool** the entire platform is deployed using the Nimbella Admin Tool (called nimadmin) which automates the entire build and deploy steps for the platform. The tool also provides administrative functions to operate and perform routine maintenance of the platform.
  title: Experience ease of serverless deployment with built-in tools and features
seventhSection:
  list:
    - name: JavaScript
      img: /images/uploads/javascript-icon.png
      link: 'https://www.javascript.com/'
    - name: TypeScript
      img: /images/uploads/typescript-icon.png
      link: 'https://www.typescriptlang.org/'
    - name: Python
      img: /images/uploads/python-icon-color.png
      link: 'https://www.python.org/'
    - name: PHP
      img: /images/uploads/php-icon.png
      link: 'https://www.php.net/'
    - name: Java
      img: /images/uploads/java-icon.png
      link: 'https://www.java.com/'
    - name: Go
      img: /images/uploads/go-icon.png
      link: 'https://golang.org/'
    - name: Ruby
      img: /images/uploads/ruby-icon.png
      link: 'https://www.ruby-lang.org/'
    - name: Swift
      img: /images/uploads/swift-icon.png
      link: 'https://swift.org/'
  subtitle: 'The Nimbella platform supports the development of serverless APIs using a function in a wide variety of programming languages including:'
  title: Experience ease of serverless deployment with built-in tools and features
eighthSection:
  list:
    - demolink: https://ocrdemo-apigcp.nimbella.io/
      command: nim project deploy github:nimbella/demo-projects/ocr
      image: /images/uploads/platform-ocrdemo-screenshot.jpg
      name: Optical Character Recognition
      runtime: React + Node.js + Key-Value and Object Store
    - demolink: https://chatdemo-apigcp.nimbella.io/
      command: nim project deploy github:nimbella/demo-projects/chat
      image: /images/uploads/platform-chatroom-screenshot.jpg
      name: Chat
      runtime: React + Node.js + Key-Value and Object Store
    - demolink: https://tradedemo-apigcp.nimbella.io/
      command: nim project deploy github:nimbella/demo-projects/trade
      image: /images/uploads/platform-tradedemo-screenshot.jpg
      name: Stock Trading
      runtime: React + Node.js + Key-Value and Object Store
    - demolink: https://electiondemo-apigcp.nimbella.io/
      command: nim project deploy github:nimbella/demo-projects/election
      image: /images/uploads/platform-election2020-screenshot.jpg
      name: Election 2020
      runtime: React + Node.js
    - demolink: https://qrdemo-apigcp.nimbella.io/
      command: nim project deploy github:nimbella/demo-projects/qrcode
      image: /images/uploads/platform-qrcode-screenshot.jpg
      name: QR Code Generator
      runtime: HTML + Node.js
    - demolink: ''
      command: nim project deploy github:nimbella/demo-projects/visits
      image: /images/uploads/platform-visits-screenshot.jpg
      name: Page Visit Counter
      runtime: HTML + PHP + Key-Value and Object Store
  other:
    - command: git clone https://github.com/nimbella/demo-projects/images
      name: Image Resize
    - command: git clone https://github.com/nimbella/demo-projects/calculator
      name: Calculator
    - command: git clone https://github.com/nimbella/demo-projects/printer
      name: Printer
  subtitle: Deploy Starter Projects from GitHub
  desc: >-
    [Download a whitepaper](/whitepaper) for enterprise decision-makers
    
    on
    
    The State of Serverless in the Enterprise
  title: No vendor lock-in, use Nimbella multi-cloud serverless 
ninethSection:
  list:
    - question: What is Nimbella Serverless Platfrom?
      answer: >-
        The Nimbella Serverless Platform allows developers to create stateful, stateless, streaming or long-running applications that can operate at enterprise scale, with high performance and built-in security. The Platform is available as a cloud offering (running on public clouds) and also as installable software that can be run on Kubernetes services like AWS EKS, GCP GKE and other Kubernetes distributions running in private cloud or private infrastructure. 
        Unlike other Function-as-a-Service (FaaS) platforms, Nimbella is not just a FaaS platform, instead it is a true Serverless platform that enables a developer to build applications to handle variety of enterprise workloads.
    - question: Which tier is best for me?
      answer: >-
        If you are the only developer, the Starter account is likely the best match for you. It provides you with all the capabilities of the Platform. If you are part of a small team or working on multiple projects at the same time, we suggest the [Pro tier](/pricing/platform).
    - question: What are the benefits of an integrated key value store?
      answer: >-
        Nimbella provides an integrated key value store as part of the service. It is managed by the Platform, and includes automatic backup. The key value store is only accessible from your functions. This capability allows you to build stateful applications that are also serverless. Use the key value store for session state, transient data, caching, or as a small database.
        Serverless cloud-applications (frоnt-end, back-end, Jamstack).
    - question: How do I get started?
      answer: >-
        Our Starter accounts are free. [Sign up](/signup) to get started. You can upgrade from Starter to Pro at any time.
    - question: What can I do with the Playground?
      answer: >-
        The Playground affords you the opportunity to try out a few capabilities of the platform, anonymously and at no cost to you. You can create, run and share up to 10 serverless functions in multiple languages: JavaScript, Python, PHP, GO, Java, Swift, and Typescript. The execution time allowed is 3 seconds and the functions may not consume more than 128MB. If you start with the Playground and later decide to sign up for an account, you can export your functions into your account.
    - question: What are the benefits of an integrated object store?
      answer: >-
        Nimbella provides an object store as part of the service so you don’t have to sign up, provision and manage it separately. The object store is also integrated with a CDN for serving your static project assets quickly and securily. With integrated storage, you can build complete.
    - question: How do I get support for Nimbella?
      answer: >-
        You will find us on [Slack](https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc#/), and you can also email us. If you’re using our Enterprise offering, we provide 24x7 support.
  title: FAQ
tenthSection:
  btnLink: https://apigcp.nimbella.io/wb/?command=playground
  btnTxt: Try Playground instead
  title: Not ready to signup for Nimbella Platform?
meta:
  description: >-
    Sign up for FREE to build stateful apps on serverless cloud platform to accelerate your development and deployment. You can focus on the app logic while Nimbella handles everything else 
  title: '[FREE] Serverless Cloud Computing App Development Platform'
---
