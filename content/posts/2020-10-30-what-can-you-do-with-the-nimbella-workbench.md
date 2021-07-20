---
title: What can you do with the Nimbella Workbench?
status: Published
date: 'October 30, 2020 11:10 AM'
postFeaturedImage: /images/uploads/nimbella-workbench-thumbnail.png
excerpt: Find out what you can do with the Nimbella Workbench.
ctaBanner:
  - banner: Platform
categories:
  - category: Tutorials
meta:
  description: Find out what you can do with the Nimbella Workbench.
  shareImageUrl: /images/uploads/nimbella-workbench-thumbnail.png
  title: What can you do with the Nimbella Workbench?
---
The Nimbella Workbench offers a rich terminal-like experience in the browser. Workbench can be used instead of CLI to develop some lightweight applications from your browser, deploy some applications directly from GitHub, look at your Nimbella cloud assets, and activity.

In this blog, we’re going to go over all the things you can do with the Nimbella workbench. 

* Getting started
* Playground
* Quickstart
* Auth
* Nim
* License
* Themes
* Toggle-menu
* Action list

## Getting started

After creating an account and [clicking on the link to be redirected to the workbench](https://apigcp.nimbella.io/wb/). You’ll see a menu of all the different options.

To remove everything from the screen, type `clear`.
To bring the menu back up, type `help`. 

CMS-IMAGECLASS IMAGE=/images/uploads/workbench-intro.png INDENT=0 CLASS=w100 ALT=serverless functions UI

## Playground

The playground is an interactive environment where you can build and test serverless functions without having to create them with your namespace. You can access it by clicking on the **playground **button or type `playground` in the workbench.

CMS-IMAGECLASS IMAGE=/images/uploads/workbench-playground.png INDENT=0 CLASS=w100 ALT=serverless functions ui

**What you can do in the workbench:
**

* Select from different languages to experiment with (Javascript, Typescript, Python, Swift, Java, Go, PHP)
* Click the **run **button to run the command and test the output
* Change the value in **input parameters** to test the argument (For example, try changing “nimbella” to your name and see what happens)
* Click the **publish** button to get a secure domain for the function. Paste that domain into your browser

## Quickstart

Quickstart is an option that shows a basic overview of how to get started. Click on the **quickstart **button or type `quickstart` in the workbench to display it. 

CMS-IMAGECLASS IMAGE=/images/uploads/workbench-quickstart-1.png INDENT=0 CLASS=w100 ALT=serverless functions UI

## Auth

Auth allows you to manage your Nimbella and Github credentials. This is a list of arguments you can apply to auth and what they do.

* **auth **
  * **auth current**: Get current namespace with optional details
  * **auth export**: Make a token for switching to another machine or web browser
  * **auth github**: Manage GitHub accounts
  * **auth list**: List all your Nimbella namespaces
  * **auth login**: Gain access to a Nimbella namespace
  * **auth logout**: Drop access to Nimbella namespaces
  * **auth refresh**: Refresh Nimbella namespace credentials by rereading the latest from the backend
  * **auth switch**: Switch to a different Nimbella namespace

## Nim

Commands incorporated from the Nimbella CLI.

* **action**
  * **action delete**: Deletes and action
  * **action get**: Retrieves an action
  * **action invoke**: Invokes an action
  * **action list**: List all actions
* **activation**
  * **activation get**: Retrieves an Activation
  * **activation list**: Lists all the Activations
  * **activation logs**: Retrieves the Logs for an Activation
  * **activation result**: Retrieves the Results for an Activation
* **auth**
  * **auth current**: Get current namespace with optional details
  * **auth export**: Make a token for switching to another machine or web browser
  * **auth github**:  Manage GitHub accounts
  * **auth list**: List all your Nimbella namespaces
  * **auth login**: Gain access to a Nimbella namespace
  * **auth logout**: Drop access to Nimbella namespaces
  * **auth refresh**: Refresh Nimbella namespace credentials by re-reading the latest from the backend
  * **auth switch**: Switch to a different Nimbella namespace
* **doc**
  * **doc:** Pulls up another tab to display the Nimbella CLI documentation
* **info**
  * **Info**: Show information about this version of 'nim'
* **key-value**
  * **key-value clean**: Clears the Key-Value Store, be cautious
  * k**ey-value del**: Removes the specified keys and returns the number of keys that were removed. A key is ignored if it does not exist
  * **key-value expire**: Sets the specified ttl value for the specified key
  * **key-value get**: Get Value for a Key
  * **key-value getMany**: Gets values for given Keys
  * **key-value list**: Lists Keys from Key-Value Store
  * **key-value llen**: Returns the length of the list stored at key. If a key does not exist, it is interpreted as an empty list and 0 is returned. An error is returned when the value stored at the key is not a list.
    **key-value lrange**: Returns the specified elements of the list stored at key. The offsets start and stop are zero-based indexes, with 0 being the first element of the list, 1 being the next element, and so on
    **key-value rpush**: Insert all the specified values at the tail of the list stored at key. It is created as an empty list before performing the push operation if the key does not exist. An error is returned when the key holds such a value that is not a list
    **key-value set**: Sets the specified value at the specified key
    **key-value setMany**: Set Value for a Key
    **key-value ttl**: Get ttl value for a Key
* **namespace**
  * **namespace clean**: Remove content from a namespace
  * **namespace free**: Remove project ownership restrictions from namespaces
  * **namespace get**: Get triggers, actions, and rules in the registry for namespace
* **object**
  * **object clean**: Deletes all objects from the Object Store
  * **object delete**: Deletes Object from the Object Store
  * **object list**: Lists Objects from Object Store
  * **object update**: Updates Object in the Object Store
  * **object url**: Generates Signed URL for an Object in the Object Store
* **package**
  * **package bind**: Bind parameters to a package
  * **package create**: Creates a Package
  * **package delete**: Deletes a Package
  * **package get**: Retrieves a Package
  * **package list**: Lists all the Packages
  * **package update**: Updates a Package
* **project**
  * **project deploy**: Deploy Nimbella projects
* **route**
  * **route create**: Create a new API route
  * **route delete**: Delete an API
  * **route get**: get API details
  * **route list**: List routes/APIs
* **rule**
  * **rule create**: Create a Rule
  * **rule delete**: Delete a Rule
  * **rule disable**: Disable a Rule
  * **rule enable**: Enable a Rule
  * **rule get**: Retrieves a Rule
  * **rule list**: Retrieves a list of Rules
  * **rule status**: Get the status of a Rule
  * **rule update**: Update a Rule
* **trigger**
  * **trigger create**: Create a Trigger
  * **trigger delete**: Delete a Trigger
  * **trigger fire**: Fire a Trigger
  * **trigger get**: Get a Trigger
  * **trigger list**: List all of your Triggers
  * **trigger update**: Update or create a Trigger
* **web**
  * **web clean**: Deletes all Content from Web Storage
  * **web delete**: Deletes Content from the Web Storage
  * **web list**: Lists Web Content
  * **web update**: Updates Content in the Web Storage

## License

This command shows your Nimbella license for this software.

Type `license` or click the **license **button to see the info.

## Theme

This command allows you to switch from dark mode to light mode. Type `theme` or click the **theme **button to display this option. 

CMS-IMAGECLASS IMAGE=/images/uploads/workbench-theme.png INDENT=0 CLASS=w100 ALT=nimbella workbench

## Toggle-menu

This option will turn the menu on and off when you start the workbench. Type `toggle-menu` or click the **toggle-menu** button to turn this on and off.

## Action list

Display the list of actions that you have stored. Type `action list` or click the **action list** button to see your actions.

## Activation list

See the list of all of your activations. Type `activation list` or click the **activation list** button to see your activations. 

And that is all the commands you can run inside the Workbench. You have the ability to [start with the playground](https://apigcp.nimbella.io/wb/?command=playground) without having to make an account. But if you’re interested in starting your serverless journey, you [click this link and make a free account](https://nimbella.com/signup). I also welcome you to join us on our [Slack community channel](https://nimbella.com/slack) to share what you’re building and ask questions.
