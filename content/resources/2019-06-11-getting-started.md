---
title: Getting Started
status: Published
date: '2019-06-11'
index: '2'
level: '1'
second:
  - title: Static Assets
    index: '0'
    body: >-
      # Deploying Static Assets (Calculator 1)


      * For serverless applications that require multiple actions or static
      assets such as html, we use Nimbella's command line tool, `nim`. As an
      example, we will develop a calculator website consisting of an html page
      and a backing action that performs the evaluation.  Start by running these
      commands in a terminal window to create a project in your home directory.



      ```

      cd ~

      mkdir -p calcsample/web

      ```


      * A Nimbella "project" is just a directory (`calcsample` in this case)
      with some well-known files and subdirectories (`web` in this case). The
      `web` folder holds static assets including html.  Open your favorite
      editor to edit the file `calcsample/web/calc.html` and paste the following
      content into the editor, then save the file.



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
                .fail(function(err) { update({ result: '<p>You have not deployed the function yet. Please follow the <a href="https://nimbella.com/docs/platform/getting-started/add-function" target="_blank">next step</a></p>' }) })
            }
            function update(jsonResult) {
              $("#myresult").html(jsonResult.result)
            }
          </script>
        </body>
      </html>

      ```


      * Next we will add a project configuration file to indicate the page we
      just created is the main page for the project.  Create the project
      configuration file `calcsample/project.yml` with the content below.



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


      * Try out the website by navigating to the URL displayed in your
      deployment.  If you try to use the calculator though, nothing happens
      because we have not deployed the backing function yet.  We'll do that
      next.


      ![Calc](/images/uploads/calc-4.png)
  - title: Add Function
    index: '0'
    body: >-
      # Adding a Function (Calculator 2)


      * Next we will deploy a function has the calculator logic.  All function
      code files reside in the `packages` direcotry.  In addition, we must
      choose a particular package folder.  Here we'll pick `calc` as the folder
      name and place the code in `eval.js`.  The code is very short as we will
      (unsafely) use nodejs's _eval_ to perform the computation.  Make the new
      directory as follows.



      ```

      mkdir -p calcsample/packages/calc

      ```


      Then use your favorite editor to edit the file
      `calcsample/packages/calc/eval.js`.  The content should be as follows.


      ```

      function main(args) {
          let expr = args['text']
          let result = eval(expr)
          return { 'result': result }
      }


      exports.main = main

      ```


      * Without modifying the project configuration file (we'll explain why),
      deploy the project again with `nim project deploy calcsample`.  Note that
      the output indicates that the action has also been deployed now.



      ```

      Deploying project '<path...>/calcsample'
        to namespace '<namespace>'
        on host 'https://apigcp.nimbella.io'
      Deployed 1 web content items to
        https://<namespace>-apigcp.nimbella.io
      Deployed actions:
        - calc/eval
      ```


      * Try out the webpage again and this time the calculator button will
      trigger a computation remotely and display the result.


      ![Calc](/images/uploads/calc6.png)
  - title: Add State
    index: '0'
    body: >-
      # Adding State (Calculator 3)


      * Next we will add a counter to the calculator to show how many times it
      has been run.  Edit `calc.html` and replace the function `update` with 



      ```

      function update(jsonResult) {
          let result = jsonResult.result
          let count = jsonResult.count
          $("#myresult").html('Result: ' + result + '<br><br><i>Served ' + count + ' times</i>')
      }

      ```


      * In Nimbella, every namespace comes with a redis instance that is
      configured to be accessible by every function deployed in that namespace. 
      At the beginning of the code add the line `let nim = require('nim')` to
      create a global Nimbella instance and create a bound redis object in the
      main function with `let redis = nim.redis()`.  In the case of `eval.js`,
      update the code to the following:



      ```

      let nim = require('nim')

      let key = 'counter'


      function main(args) {
          let expr = args['text']
          let result = eval(expr)
          let redis = nim.redis()
          return redis.getAsync(key)
            .then(reply => { return updateAndReply(redis, asCount(reply), result) })
            .catch(err =>  { return updateAndReply(redis, 0, result) } )
      }


      function asCount(s) {
          if (Number.isInteger(s)) { return s }
          let v = parseInt(s, 10)
          return isNaN(v) ? 0 : v
      }


      function updateAndReply(redis, count, text) {
          return redis.setAsync(key, count+1)
            .then(reply => { return { count: count, result: text } })
            .catch(err =>  { return { count: count, result: text } })
      }


      exports.main = main

      ```


      * Once the project has been redeployed with `nim project deploy`, the web
      page will look like


      ![Calc](/images/uploads/calc7.png)
  - title: Add Packages
    index: '3'
    body: "# Adding Packages (Calculator 4)\n\n* The use of `eval` is unsafe as it will allow arbitrary code to be written whereas we only want to evaluate numerical expression.  We'll replace `eval` with the npm package `expression-eval`.  To use packages at all, we'll need to restructure our function directory a bit by moving the `eval.js` file into its own directory with a `package.json` file.\n\n\n```\nmkdir ~/calcsample/packages/calc/eval\nmv calcsample/packages/calc/eval.js ~/calcsample/packages/calc/eval/\n```\n\n* Use your favorite editor to make a new file `calcsample/packages/calc/eval/package.json` with the following contents:\n\n\n```\n{\n  \"name\": \"calc\",\n  \"version\": \"1.0.0\",\n  \"description\": \"Serverless caculator demo\",\n  \"main\": \"eval.js\",\n  \"dependencies\": {\n    \"expression-eval\": \"^2.0.0\"\n  },\n  \"devDependencies\": {}\n}\n```\n\n* At this point, the function is set up to be able to use the package but is not doing so yet.  Add `const expr = require('expression-eval')` to the beginning of `calc.js`.  Replace the call to nodejs's `eval` with a call to this newly defined function:\n\n\n```\nfunction evaluate(exprStr) {\n    try {\n        let ast = expeval.parse(exprStr)\n        return expeval.eval(ast)\n    } catch {\n\treturn \"error evaluating expression\"\n    }\n}\n```\n\n* The updated `calc.js` should look like this:\n\n\n```\nconst expeval = require('expression-eval')\nconst nim = require('nim')\nconst key = 'counter'\n\nfunction main(args) {\n    let expr = args['text']\n    let result = evaluate(expr)\n    let redis = nim.redis()\n    return redis.getAsync(key)\n      .then(reply => { return updateAndReply(redis, asCount(reply), result) })\n      .catch(err =>  { return updateAndReply(redis, 0, result) } )\n}\n\nfunction evaluate(exprStr) {\n    try {\n        let ast = expeval.parse(exprStr)\n        return expeval.eval(ast)\n    } catch {\n\treturn \"error evaluating expression\"\n    }\n}\nfunction asCount(s) {\n    if (Number.isInteger(s)) { return s }\n    let v = parseInt(s, 10)\n    return isNaN(v) ? 0 : v\n}\n\nfunction updateAndReply(redis, count, text) {\n    return redis.setAsync(key, count+1)\n      .then(reply => { return { count: count, result: text } })\n      .catch(err =>  { return { count: count, result: text } })\n}\n\nexports.main = main\n```\n\n* Attempting to evaluate a non-numeric expression will now be detected and caught.\n\n![Calc](/images/uploads/calc8.png)"
meta:
  description: >-
    Deploy Nimbella NOW for FREE! Follow this step by step developer guide to
    accelerate your development and deployment
  title: Getting Started Cloud Computing Resources and Documentations
---
# Getting Started

* Make sure you've followed the steps in **Setting Up** to have a ready to go [Workbench](https://nimbella.com/docs/platform/setting-up).  In the set up phase, we ran `action list` but it did not list any actions (i.e., a cloud function) since there are none under a newly created account. Let's create a new Node.js action by running `new hello`. A sidecar containing a Node.js function will pop up to the right. By default, the supplied code is a simple hello world code snippet.

![Step1](/images/uploads/getting-started_1.png)

* Click the `Deploy` button in the bar beneath the editor portion to send the code to the Nimbella cloud and notice that the status message above the code is updated and the red asterik indicating unsaved changes is now absent.  Click in the shell portion (the left half the screen) and type `action invoke hello`.  This command runs an action in the cloud and will also retrieve and display the result in the sidecar.  We call each run of an action an _activation_ which is associated with a globally unique alphanumeric identifier called an _activation ID_.

![Step2](/images/uploads/getting-started_2.png)

* Next, let's edit the action and run it again with parameters this time.  Run `edit hello` in the shell to being the code editor back.  On line 3, change the string `Hello` to `Hey`.  On line 4, change `console.log(greeting)` to `console.log('Output:', greeting)`.  Then redeploy the action by clicking the `Deploy` button.  Back in the shell, run `action invoke hello -p name anna`.   This will run the action while passing with the parameter `name` bound to the value `anna`.  As expected, the output now includes the code change and incoming parameter so it says `Hey anna!`.  Click the `Logs` tab to see the console output.

![Step3](/images/uploads/getting-started_3.png)

* Although the action has been deployed, access is so far guarded by the credentials.  We can make this action publicly visible by using the running the command `webbify hello`.  The action is now accessible via the display URL.  Copy this URL into a browser (on another computer if desired) to test it.  You can also add the query parameter `?name=peter` to the end of the URL.
