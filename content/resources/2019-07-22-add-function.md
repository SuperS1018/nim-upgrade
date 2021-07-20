---
title: Add Function
status: Published
date: '2019-07-22'
index: '4'
level: '2'
meta:
  description: >-
    Here's a developer documentation on how to add a function get started with
    Nimbella. Sign up for free now and develop your fist serverless app in
    minutes
  title: How to add Calculator function using Slack Commander?
---
# Adding a Function (Calculator 2)

* Next we will deploy a function has the calculator logic.  All function code files reside in the `packages` direcotry.  In addition, we must choose a particular package folder.  Here we'll pick `calc` as the folder name and place the code in `eval.js`.  The code is very short as we will (unsafely) use nodejs's _eval_ to perform the computation.  Make the new directory as follows.


```
mkdir -p calcsample/packages/calc
```

Then use your favorite editor to edit the file `calcsample/packages/calc/eval.js`.  The content should be as follows.

```
function main(args) {
    let expr = args['text']
    let result = eval(expr)
    return { 'result': result }
}

exports.main = main
```

* Without modifying the project configuration file (we'll explain why), deploy the project again with `nim project deploy calcsample`.  Note that the output indicates that the action has also been deployed now.


```
Deploying project '<path...>/calcsample'
  to namespace '<namespace>'
  on host 'https://apigcp.nimbella.io'
Deployed 1 web content items to
  https://<namespace>-apigcp.nimbella.io
Deployed actions:
  - calc/eval
```

* Try out the webpage again and this time the calculator button will trigger a computation remotely and display the result.

![Calc](/images/uploads/calc6.png)
