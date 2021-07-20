---
bannerTitle: Pricing and Plans
bannerSubtitle: ' '
bannerImage: /images/uploads/pricing-banner.jpg
pricingTable:
  - button: Sign up
    description: ''
    detailList: []
    level: Starter
    value: Free
  - button: Sign up
    description: ''
    level: Pro
    note: ''
    unit: '/ month / developer '
    value: '20'
  - button: Contact us
    description: ''
    detailList: []
    level: Enterprise
    note: ''
    value: Contact us
comparisonTable:
  - enterprise: Large teams with 25+ developers and shared projects
    features: Ideal For
    pro: Teams up to 25 developers with multiple projects
    starter: Single developer projects
  - enterprise: Stateless and Stateful
    features: Workloads
    pro: Stateless and Stateful
    starter: Stateless and Stateful
  - enterprise: Dedicated / On-premise
    features: Hosting
    pro: Public cloud
    starter: Public cloud
  - enterprise: Unlimited
    features: Dedicated Domains
    pro: 1 / Developer
    starter: '1'
  - enterprise: \+ Bespoke runtimes (Containers)
    features: Serverless Functions
    pro: \+ Bring your own runtimes (Containers)
    starter: 'JavaScript, Python, PHP, GO, Java, Swift, Typescript'
  - enterprise: 'Zip files, Containers'
    features: Function Packaging
    pro: 'Zip files, Containers'
    starter: Zip files
  - enterprise: 'true'
    features: Built-in SSL with CDN
    pro: 'true'
    starter: 'true'
  - enterprise: 'true'
    features: Integrated Object Store
    pro: 'true'
    starter: 'true'
  - enterprise: 'true'
    features: Integrated Key Value Store
    pro: 'true'
    starter: 'true'
  - enterprise: 'true'
    features: Integrated logging
    pro: 'true'
    starter: 'true'
  - enterprise: 'true'
    features: Share and Deploy from GitHub
    pro: 'true'
    starter: 'true'
  - enterprise: Email + Community Slack channel
    features: Support
    pro: Email + Community Slack channel
    starter: Community Slack channel
usageTable:
  - enterprise: Unlimited
    features: Max number of functions
    pro: '100'
    starter: |
      25
  - enterprise: Unlimited
    features: Max function duration
    pro: 2 minutes
    starter: 10 seconds
  - enterprise: Customizable
    features: Max memory per function
    pro: 768 MB
    starter: 256 MB
  - enterprise: Customizable
    features: Max concurrent functions
    pro: '100'
    starter: '25'
  - enterprise: Customizable
    features: Max compute time per month
    pro: |-
      2 Compute Packs
      additional at
      $7 / pack
    starter: |-
      1 Compute Pack
      additional at
      $7 / pack
  - enterprise: Customizable
    features: Max function size
    pro: 48 MB
    starter: 48 MB
  - enterprise: Customizable
    features: Environment variables
    pro: 1 MB
    starter: 1 MB
  - enterprise: Customizable
    features: Max function input
    pro: 1 MB
    starter: 1 MB
  - enterprise: Customizable
    features: Function log retention
    pro: '32 KB per activation, up to 3 days'
    starter: '4 KB per activation, up to 3 days'
  - enterprise: Customizable
    features: Egress traffic
    pro: |-
      5 GB / month
      additional at
      $0.15 / GB
    starter: |-
      1 GB / month
      additional at
      $0.15 / GB
  - enterprise: Customizable
    features: Integrated object store
    pro: |-
      10 GB
      additional at
      $0.07 / GB
    starter: |-
      1 GB
      additional at
      $0.07 / GB
  - enterprise: Customizable
    features: Integrated key value store
    pro: |-
      128 MB 
      additional at
      $7 / 128MB
    starter: |
      32 MB
noteTop: >-
  Nimbella offers 3 tiers of service: **Starter**, **Pro** and **Enterprise**.
  Not ready to sign up? You can try the Nimbella
  [Playground](https://apigcp.nimbella.io/wb/?command=playground) instead. In
  the Playground, you can create, run and share up to 10 stateless functions,
  anonymously and for free.
note: >-
  * **About Compute Packs:** Each compute pack is 400,000 GB-seconds per month.
  Unused compute packs expire at the end of the month and do not carry over.
  Function duration is calculated from the time your code starts executing until
  it returns or times out, rounded up to the nearest millisecond. To calculate
  the compute time per month, we multiply the function duration of each of your
  executed functions by the amount of memory allocated for that execution.
faq:
  items:
    - answer: >-
        Our Starter accounts are free. [Sign up](/signup) to get started. You
        can upgrade from Starter to Pro at any time.
      question: How do I get started?
    - answer: >-
        If you are the only developer, the Starter account is likely the best
        match for you. It provides you with all the capabilities of the
        Platform. If you are part of a small team or working on multiple
        projects at the same time, we suggest the Pro tier.
      question: Which tier is best for me?
    - answer: >-
        The Playground affords you the opportunity to try out a few capabilities
        of the platform, anonymously and at no cost to you. You can create, run
        and share up to 10 serverless functions in multiple languages:
        JavaScript, Python, PHP, GO, Java, Swift, and Typescript. The execution
        time allowed is 3 seconds and the functions may not consume more than
        128MB. If you start with the Playground and later decide to sign up for
        an account, you can export your functions into your account.
      question: What can I do with the Playground?
    - answer: >-
        Pro accounts are free until June 30th, 2020. When this promotional
        period ends, you can pay by signing up for automatic payment on the
        website or you can downgrade to a free Starter account.
      question: How do I pay for my Pro account?
    - answer: >-
        Nimbella provides an object store as part of the service so you don’t
        have to sign up, provision and manage it separately. The object store is
        also integrated with a CDN for serving your static project assets
        quickly and securily. With integrated storage, you can build complete
        serverless cloud-applications (front-end, back-end, Jamstack).
      question: What are the benefits of an integrated object store?
    - answer: >-
        Nimbella provides an integrated key value store as part of the service.
        It is managed by the Platform, and includes automatic backup. The key
        value store is only accessible from your functions. This capability
        allows you to build stateful applications that are also serverless. Use
        the key value store for session state, transient data, caching, or as a
        small database.
      question: What are the benefits of an integrated key value store?
    - answer: >-
        You will find us on
        [Slack](https://nimbella-community.slack.com/join/shared_invite/enQtNjg1NzE1OTE3MDI4LWRmOTE0ODVmYzMzODMxNWQ5MDIyMTMxOWZlOTY4NGMxNWUwMmFkM2E2MjRjYWZlNDE1OTUyMjFhNDAyYjZhZDc#/),
        and you can also [email us](mailto:support@nimbella.com). If you’re
        using our Enterprise offering, we provide 24x7 support.
      question: How do I get support for Nimbella?
  title: FAQ
meta:
  canonicalLink: ''
  description: >-
    Nimbella offers 3 tiers of serverless computing service: Starter, Pro, and
    Enterprise. Start NOW for FREE to accelerate your development and pay only
    as your usage grows.
  title: Pricing of Nimbella's Stateful Serverless Cloud Computing Platform?
---

