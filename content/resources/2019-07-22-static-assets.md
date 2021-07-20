---
title: Static Assets
status: Published
date: '2019-07-22'
index: '3'
level: '2'
meta:
  description: >-
    For serverless applications that require multiple actions or static assets
    as HTML, use Nimbella's command-line tool. Try Deploying Static Assets
    Calculator 
  title: How to Deploy Static Assets (Calculator) using Command Line?
---
# Deploying Static Assets (Calculator 1)

* For serverless applications that require multiple actions or static assets such as html, we use Nimbella's command line tool, `nim`. As an example, we will develop a calculator website consisting of an html page and a backing action that performs the evaluation.  Start by running these commands in a terminal window to create a project in your home directory.


```
cd ~
mkdir -p calcsample/web
```

* A Nimbella "project" is just a directory (`calcsample` in this case) with some well-known files and subdirectories (`web` in this case). The `web` folder holds static assets including html.  Open your favorite editor to edit the file `calcsample/web/calc.html` and paste the following content into the editor, then save the file.


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Your Serverless Cloud Example. Beautiful.</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  </head>
  <body style="padding-top:100px">
    <div class="container" style="width:600px">
      <center><img src="https://nimbella.com/images/logo.png" width="150"></center>
      <h1>Simple Calculator</h1>
      <div class="form-group" style="height:30px">
        <form id="myform" onsubmit="generate(); return false">
          <input id="mytext" class="form-control" style="float:left;width:85%;" type="text" name="text" maxlength="128"
                 placeholder="type a simple numerical expression and click Evaluate" value=""/>
          <button id="mysubmit" type="button" class="btn btn-primary" style="float:right">Evaluate</button>
        </form>
      </div>
      <div style="container" style="width:600px" id="myresult"></div>
    </div>
    <script type="text/javascript">
      $("#mysubmit").click(function() { doit() })
      function doit() {
        let txt = $("#mytext").val().trim()
        let src = '/api/calc/eval.json?text=' + encodeURIComponent(txt)
        $.get(src, function(jsonResult) { update(jsonResult) })
          .fail(function(err) { update({ result: '<p>You have not deployed the function yet. Please follow the <a href="https://nimbella.com/docs/platform/add-function" target="_blank">next step</a></p>' }) })
      }
      function update(jsonResult) {
        $("#myresult").html(jsonResult.result)
      }
    </script>
  </body>
</html>
```

* Next we will add a project configuration file to indicate the page we just created is the main page for the project.  Create the project configuration file `calcsample/project.yml` with the content below.


```
bucket:
  mainPageSuffix: calc.html
```

* Now we are ready to deploy our project by running the following command:


```
nim project deploy calcsample
```

Here's what the output will resemble.

```
Deploying project '<path...>/calcsample'
  to namespace '<namespace>'
  on host 'https://apigcp.nimbella.io'

Deployed 1 web content items to
  https://<namespace>-apigcp.nimbella.io
```

* Try out the website by navigating to the URL displayed in your deployment.  If you try to use the calculator though, nothing happens because we have not deployed the backing function yet.  We'll do that next.

![Calc](/images/uploads/calc-4.png)
