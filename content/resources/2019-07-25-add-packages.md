---
title: Add Packages
status: Published
date: '2019-07-25'
index: '6'
level: '2'
meta:
  description: >-
    Here're adding Packages (Calculator 4), it safe and simple. Get started with
    Nimbella for FREE and try it NOW!
  title: How to add Calculator packages using Slack Command Line?
---
# Adding Packages (Calculator 4)

* The use of `eval` is unsafe as it will allow arbitrary code to be written whereas we only want to evaluate numerical expression.  We'll replace `eval` with the npm package `expression-eval`.  To use packages at all, we'll need to restructure our function directory a bit by moving the `eval.js` file into its own directory with a `package.json` file.


```
mkdir ~/calcsample/packages/calc/eval
mv calcsample/packages/calc/eval.js ~/calcsample/packages/calc/eval/
```

* Use your favorite editor to make a new file `calcsample/packages/calc/eval/package.json` with the following contents:


```
{
  "name": "calc",
  "version": "1.0.0",
  "description": "Serverless caculator demo",
  "main": "eval.js",
  "dependencies": {
    "expression-eval": "^2.0.0"
  },
  "devDependencies": {}
}
```

* At this point, the function is set up to be able to use the package but is not doing so yet.  Add `const expr = require('expression-eval')` to the beginning of `calc.js`.  Replace the call to nodejs's `eval` with a call to this newly defined function:


```
function evaluate(exprStr) {
    try {
        let ast = expeval.parse(exprStr)
        return expeval.eval(ast)
    } catch {
	return "error evaluating expression"
    }
}
```

* The updated `calc.js` should look like this:


```
const expeval = require('expression-eval')
const nim = require('nim')
const key = 'counter'

function main(args) {
    let expr = args['text']
    let result = evaluate(expr)
    let redis = nim.redis()
    return redis.getAsync(key)
      .then(reply => { return updateAndReply(redis, asCount(reply), result) })
      .catch(err =>  { return updateAndReply(redis, 0, result) } )
}

function evaluate(exprStr) {
    try {
        let ast = expeval.parse(exprStr)
        return expeval.eval(ast)
    } catch {
	return "error evaluating expression"
    }
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

* Attempting to evaluate a non-numeric expression will now be detected and caught.

![Calc](/images/uploads/calc8.png)
