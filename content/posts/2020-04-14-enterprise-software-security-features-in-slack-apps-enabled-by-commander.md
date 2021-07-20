---
title: >-
  Software Security Features on Enterprise Serverless Slack Apps Enabled by
  Nimbella Commander
status: Published
date: 'April 27, 2020 4:00 PM'
postFeaturedImage: /images/uploads/header-eric.png
excerpt: >-
  We interview Eric Swildens, architect of Nimbella Commander to discuss the
  security features for Commander. 
ctaBanner:
  - banner: Commander Slack
categories:
  - category: Commander
meta:
  description: >-
    We interview Eric Swildens, the architect of Nimbella Commander to discuss
    the security features for Commander. 
  shareImageUrl: /images/uploads/slack-security-header.png
  title: >-
    Software Security Features on Enterprise Serverless Slack Apps | Nimbella
    Blog
---
We have received a lot of questions from several of our users on the security features of [Nimbella Commander](https://nimbella.com/integrations/commander). Commander enables Slack developers/users to write serverless functions as slash commands that can be executed within Slack. But just how safe are the functions once they’re created? How do Slack users make sure their API keys can’t be stolen if they’re used in a function? Can I restrict who has access to my functions? I wanted to be able to provide deep technical explanations, so I contacted the architect of Commander, Eric Swildens to answer these questions 

**1) Jamie**: _When I write and store my code in the editor provided by Commander, where is it running? What is being done to make sure that stored code is secure?_

**Eric:** The code is hosted on the Nimbella platform which creates a unique namespace on the underlying platform for every **Slack application**. When a developer is using the Nimbella platform, the code in each namespace is isolated from the code in every other namespace. Code is stored associated with a specific namespace and when code is run, the code is run in an isolation Docker container. This prevents the running code from accessing the memory, networking, or any other resources of any other running function code. Only one function is run at a time in a given Docker container. When a function is done running, the container is cleaned up if other functions will be run in the container. If the same function can run in the container again, the container can be re-used but it can only be re-used by the same function. So your code is secured both at rest and at runtime. 

CMS-IMAGECLASS IMAGE=/images/uploads/code.png INDENT=0 CLASS=w100 ALT=secure code serverless slack app

**2) Jamie**: _We run commands that access our resources on AWS, DigitalOcean, Google Cloud and other cloud services. How are my access keys to these services kept secure?_

**Eric:** With Commander, you can store API keys and passwords as “secrets”. A user uses the Commander “secret creator” to encrypt values. The secret creator itself is a web interface and doesn’t keep any logs so nothing is retained in the history of the browser session. When a value is encrypted using the secret creator, it is encrypted internally using multiple 256-bit encryption keys. One of the internal keys is specific to the app that the secret is encrypted for. If an encrypted key did ever manage to leak from one app to another (which should never happen) the key in one app will not be able to decrypt the other app’s encrypted values.

Commander stores the encrypted key/value in a database. The unencrypted value is never stored in plain text or decrypted form.

When Commander calls a function to execute it, the key is decrypted as part of the command function invocation during runtime.					

The multiple secret keys and encryption methods are internal to Commander. The encryption keys and encryption methods themselves are not available to external developers. 

CMS-IMAGECLASS IMAGE=/images/uploads/slack-security-api-keys-new.png INDENT=0 CLASS=w100 ALT=slack serverless app secure code

**3)** **Jamie: **_Can I control who runs my code and who can edit my code?_	

**Eric: **Yes. There are 3 personas supported by Commander: Administrators, Coders, and Runners. They can also authorize who can code and who can run. They can **install the commands** and give access rights to different individuals. Coders can edit and run the code. Runners can only run the code.  	

Administrators can also create groups and assign these rights to a group of users. 	

CMS-IMAGECLASS IMAGE=/images/uploads/slack-security-command-to-restrict-users.png INDENT=0 CLASS=w75 ALT=user access serverless slack app

**4)** _**Jamie: Who manages the user identity within Commander? Can someone else pretend to be another user? 	 **_	 		

**Eric: **Commander leverages identity by accepting the identity of the messaging system being used. In Slack, a user has authenticated through their **Slack identity**. Commander allows you to use that identity for access control. No separate identity is needed.

When Commander receives a **request from Slack** (when a slash command is run), it first authenticates that the request came from Slack. Slack has a method to verify a request comes from Slack itself using signatures and access tokens. Commander checks the signature/access tokens of the request to make sure the request is coming from Slack itself before doing anything. 

When Slack sends a request, it also sends the user-identity associated with the request. This is how Commander validates a user running a Commander command. 	

**5) Jamie:**_ Can I see who ran the commands in case there is a problem?_

_**Eric:**_ Commander has a command for viewing audit logs per application, per command and per user. Only the users that I have access rights to run the specific commands can view the user logs. Administrators can view all logs. 	

CMS-IMAGECLASS IMAGE=/images/uploads/slack-security-audit-logs.png INDENT=0 CLASS=w100 ALT=view command audit logs slack app

For more information about Commander, visit [Nimbella's website](https://nimbella.com/integrations/commander). We’d also love to hear from you via Nimbella’s community [Slack channel](https://nimbella.com/slack) or on [GitHub](https://github.com/nimbella/command-sets).

If you wish to add Commander to your Slack account, then [click on this link to get started](https://nimbella.com/commander/slack/install?version=2)!
