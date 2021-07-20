---
link: >-
  https://medium.com/openwhisk/serverless-http-handlers-with-openwhisk-90a986cc7cdd
title: Serverless HTTP handlers with OpenWhisk
status: Published
date: 'February 08, 2017 4:00 PM'
postFeaturedImage: /images/uploads/openwhisk.jpg
excerpt: >-
  In this article, I’ll describe a new OpenWhisk feature: web actions. In short,
  you can now write HTTP handlers using OpenWhisk actions.

  An action is “code” (e.g., a function) that runs in response to an HTTP
  request. As a reminder: actions receive a JSON object as input and produce a
  JSON object as a result. Using web actions, it is possible to implement HTTP
  handlers that respond with headers, status code, and content of different
  types. The web action must still return a JSON object, but the OpenWhisk
  system (“controller”) will treat such actions differently if its result
  includes one or more of the following as top level JSON properties:
categories:
  - category: Technology
---

