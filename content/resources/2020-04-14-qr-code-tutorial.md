---
title: QR Code Tutorial
status: Published
date: '2020-04-14'
index: '9'
level: '2'
meta:
  description: >-
    This tutorial explains the QR Code demo available on GitHub and shows you
    how to deploy it to the Nimbella Cloud.
  title: '[Tutorial] to Build, Deploy and Run QR Codes'
---
# How to Build, Deploy and Run QR Codes using Nimbella Platform?

This tutorial explains the [QR Code demo](https://github.com/nimbella/demo-projects/tree/master/qrcode) available on GitHub and shows you how to deploy it to the Nimbella Cloud.

The QR Code demo is a stateless single-page web application that generates a [QR code](https://en.wikipedia.org/wiki/QR_code) from text that a user submits. You can [view the app here](https://qrdemo-apigcp.nimbella.io).
The QR Code demo has the following code and configuration components:

* A single index.html file, which has a field for a visitor to enter some text and click **Submit**.
* A single JavaScript file that provides the backend logic for the conversion of text to QR code.
* A Node package manager file called _package.json_, which describes what dependencies the function has.

### Project file structure

The GitHub project has the file structure that Nimbella uses to intelligently deploy the project:

CMS-IMAGECLASS IMAGE=/images/uploads/qrcodetutorial-file_structure.png INDENT=0 CLASS=w50 ALT=QR Code Tutorial - Project file structure

The _packages_ directory contains the project's actions, and in this example, there's only one. The first subdirectory name usually serves as the package qualifier, but when it's named _default_, no qualifier is prepended to the action name. The next subdirectory, _qr_, is the name of the action, and the _qr.js_ file contains the logic for that action.

The _web_ directory contains the  web content for the project. In this case, there is just one HTML file and one image. The _index.html_ file contains a form with a text box for the user to input the text that will be converted.

### Notes on QR logic

The code for the QR action is standard Node.js. It uses an existing Node [library](https://www.npmjs.com/package/qrcode) for the actual code generation.

### Notes on QR web content

The _index.html_ file contains the usual markup and logic that you'd write for standard web deployment, with an input form for text. In this case, it calls an API to retrieve a QR code for the form input. This API is implemented by _qr.js_.

### Notes on package.json

The _package.json_ file in the _qr_ directory triggers an automatic build of the action when the _qr.js_ file is modified. For more information about builds, see the [section on incorporating build steps in the Nimbella Command Line Tool document](https://docs.nimbella.com/building).

### Deploy this project to the Nimbella Cloud

If you have the [Nimbella command line tool called `nim`](https://docs.nimbella.com/install) installed, you can deploy this project directly from GitHub, either online or from the local repository  cloned to your  disk.

* Run the following command in your terminal:
   `nim project deploy /path/to/qrcode`
   The output of this command will include a link to where the application is running in the cloud.
