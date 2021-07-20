---
nimbellaCommander:
  challenge:
    list:
      - img: /images/uploads/challenges-infrastructure-management.svg
        title: Infrastructure management
      - img: /images/uploads/challenges-speed-to-marketplace.svg
        title: Speed to marketplace
      - img: /images/uploads/challenges-security.svg
        title: Security
    title: Challenges in developing slash commands
  commandSets:
    btmTxt: >-
      Check out the other Command Sets we've open-sourced
      [here](https://github.com/nimbella/command-sets)
    cataList:
      - cata: DevOps
        commandList:
          - command: /nc csm_install aws
            icon: /images/uploads/aws-logo.svg
            name: AWS
            readme: 'https://github.com/nimbella/command-sets/tree/master/aws'
          - command: /nc csm_install do
            icon: /images/uploads/digitalocean-logo.svg
            name: DigitalOcean
            readme: 'https://github.com/nimbella/command-sets/tree/master/do'
          - command: /nc csm_install ibm
            icon: /images/uploads/ibm-logo.svg
            name: IBM
            readme: 'https://github.com/nimbella/command-sets/tree/master/ibm'
          - command: /nc csm_install vultr
            icon: /images/uploads/vultr-logo.svg
            name: Vultr
            readme: 'https://github.com/nimbella/command-sets/tree/master/vultr'
          - command: /nc csm_install github
            icon: /images/uploads/github-logo.svg
            name: GitHub
            readme: 'https://github.com/nimbella/command-sets/tree/master/github'
          - command: /nc csm_install jira
            icon: /images/uploads/jira-logo.svg
            name: Jira
            readme: 'https://github.com/nimbella/command-sets/tree/master/jira'
          - command: /nc csm_install gitlab
            icon: /images/uploads/gitlab-logo.svg
            name: GitLab
            readme: 'https://github.com/nimbella/command-sets/tree/master/gitlab'
          - command: /nc csm_install netlify
            icon: /images/uploads/netlify-logo.svg
            name: Netlify
            readme: 'https://github.com/nimbella/command-sets/tree/master/netlify'
      - cata: Finance
        commandList:
          - command: /nc csm_install awbill
            icon: /images/uploads/aws-logo.svg
            name: AWS Bill
            readme: 'https://github.com/nimbella/command-sets/tree/master/awsbill'
          - command: /nc csm_install dobill
            icon: /images/uploads/digitalocean-logo.svg
            name: DigitalOcean Bill
            readme: 'https://github.com/nimbella/command-sets/tree/master/dobill'
          - command: /nc csm_install gcloud
            icon: /images/uploads/gcloud-logo.svg
            name: Google Cloud Bill
            readme: 'https://github.com/nimbella/command-sets/tree/master/gcloud'
          - command: /nc csm_install shopify
            icon: /images/uploads/shopify-logo.svg
            name: Shopify
            readme: 'https://github.com/nimbella/command-sets/tree/master/shopify'
      - cata: Utilities
        commandList:
          - command: /nc csm_install corona_stats
            icon: /images/uploads/coronavirus-logo.svg
            name: Corona Statistics
            readme: 'https://github.com/nimbella/command-sets/tree/master/corona_stats'
          - command: /nc csm_install times
            icon: /images/uploads/timezone-logo.svg
            name: Time Zones
            readme: 'https://github.com/nimbella/command-sets/tree/master/times'
          - command: /nc csm_install weather
            icon: /images/uploads/weather-logo.svg
            name: Weather
            readme: 'https://github.com/nimbella/command-sets/tree/master/weather'
          - command: /nc csm_install translate
            icon: /images/uploads/translator-logo.svg
            name: Translate
            readme: 'https://github.com/nimbella/command-sets/tree/master/translate'
    desc: (Cut & paste in your collaboration platform and run)
    title: 'We''ve built some Commands for you, run them in one click'
  pageBanner:
    backgroundImage: /images/uploads/product-commander-banner2.png
    subtitle: >-
      Build, run and share commands and custom automations from Slack in
      one-click
    title: Nimbella Commander
  pageBanner1:
    backgroundImage: /images/uploads/product-commander-hero-banner.jpg
    btnTxt: Add Commander now
    featuredBgImage: /images/uploads/product-commander-hero-featured-bg3.svg
    featuredImage: /images/uploads/demo-commander-weather.gif
    subtitle: >-
      Build, run and share serverless commands in your messaging platform -
      Slack, Mattermost & Teams
    title: Nimbella Commander
  scheduleDemo:
    btn: Schedule DEMO
    formDesc: Give us a few details to customize your demo
    formTitle: Schedule a Demo
    title: Any question left? We're happy to conduct a demo for you
  signupBanner:
    btn: Sign up
    title: Start absolutely **FREE** (no credit card sign-up needed)
  tableComparison:
    commander:
      logo: /images/uploads/commander-logo-tran.svg
      thead: Slack Apps with Commander
    list:
      - commander: Automatically<br>deploy and run on Nimbella Cloud
        feature: Deployment and execution
        slack: Developer responsibility
      - commander: Integrated with Slack
        feature: Development experience
        slack: Separate
      - commander: Automated for you so you can just build
        feature: Slack API authentication
        slack: Developer responsibility<br>(OAuth 2.0)
      - commander: Automated by Commander so you don't have to
        feature: Parameter parsing
        slack: Developer responsibility
      - commander: >-
          Automatically encrypted and stored by Commander so you can share code
          freely
        feature: API keys and secret management
        slack: Developer responsibility
      - commander: >-
          Easily share command sets, install directly from Slack with a single
          command
        feature: Community-created commands
        slack: 'Developer responsibility, including deployment and execution'
      - commander: >-
          Integrated into Commander and readily accessible directly from your
          Slack interface
        feature: Audit logs
        slack: Developer responsibility
      - commander: Set up tasks with a single command
        feature: Automated tasks
        slack: Multi-step developer responsibility
      - commander: >-
          Incoming and outgoing webhooks (called Triggers), with integrated
          logging and access control
        feature: Webhooks/APIs
        slack: Incoming webhooks to post in Slack channels
      - commander: Fine-grained access control over to separate roles for your team
        feature: Role based access tools
        slack: Developer responsibility
    slack:
      logo: /images/uploads/slack-logo-tran.svg
      thead: Slack Apps
    title: Why add Commander to Slack?
  threeSteps:
    btmTxt: 'Hooray, congratulations you’re done!'
    desc: >-
      Simply follow **three steps** to create your first serverless commands
      with Commander:
    steps:
      - desc: >-
          **Add** Commander to your messaging system by clicking
          [here](https://nimbella.com/commander/slack/install?version=2)
        img: /images/uploads/commander-step-1-num.svg
      - desc: '**Create** your first command by typing `/nc command_create hello`'
        img: /images/uploads/commander-step-2-num.svg
      - desc: '**Run** the command by typing `/nc hello`'
        img: /images/uploads/commander-step-3-num.svg
    subtitle: When we say **the fastest** - we mean it.
    title: Nimbella Commander is the **fastest way** to create Commands.
  why:
    desc: >-
      Commander allows you to build and run slash commands without servers -
      write your code and Commander does the rest. There’s nothing to install,
      no servers to manage, and no services to provision. You can automate any
      workflow and you can run these commands from any device. With Commander
      you also get these additional security capabilities to manage your
      environment and program your tasks:
    list:
      - desc: >-
          Control which users can run commands, edit source code or administer
          your commands and apps. Add users to custom groups to allow for easier
          management of access rights.
        icon: /images/uploads/product-commander-access-control.svg
        title: Access Control
      - desc: >-
          Share your code freely without compromising security. API keys and
          sensitive data are encrypted and stored securely.
        icon: /images/uploads/product-commander-secret-key.svg
        title: Secret Keys
      - desc: >-
          Users and identities are managed by your collaboration platform, so
          don't worry about security. Each command runs in its own environment,
          and each app is in its own authenticated namespace.
        icon: /images/uploads/product-commander-built-in-security.svg
        title: Built-in Security
      - desc: 'Get the logs of each app, command, or user using Commander.'
        icon: /images/uploads/product-commander-audit-log.svg
        title: Audit Logs
      - desc: >-
          Set up an external API to call your command with a trigger. Select a
          channel for the command to output into and give your command webhook
          to your external API.
        icon: /images/uploads/product-commander-trigger.svg
        title: Triggers
      - desc: Create fully programmable tasks that run on specified time intervals.
        icon: /images/uploads/product-commander-tasks.svg
        title: Tasks
      - desc: >-
          Build and easily, share your slash commands with the community.
          Install in any  workspace.
        icon: /images/uploads/product-commander-open-source.svg
        title: Command Sets - Open Source
    title: Why use Nimbella Commander?
meta:
  canonicalLink: /integrations/commander/
  description: >-
    FIND out how to BUILD, RUN, and SHARE Slack commands with one click.
    Nimbella supports every step and ensures your data security. Try it now for
    FREE!
  title: Build Serverless Applications for FREE using Slack Commands
---

