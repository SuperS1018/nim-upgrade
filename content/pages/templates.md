---
title: Widget Examples
desc: This is a page to show widget examples.
content: >-
  ## Three types of input fields


  Before learning about widgets, you need to know input field types.


  1. **String input fields -**


  CMS-INDENT INDENT=1 CONTENT=String input fields usually use for a short
  sentence. Usually you will find it on title, button name, link inputs.


  CMS-IMAGECLASS IMAGE=/images/uploads/templates-string-input.png INDENT=1
  CLASS=w75 ALT=String input fileds


  2. **Text input fileds -**


  CMS-INDENT INDENT=1 CONTENT=Text input fields usually use for a simple text
  paragraph. Usually we use it on subtitle, description.


  CMS-IMAGECLASS IMAGE=/images/uploads/templates-text-input.png INDENT=1
  CLASS=w75 ALT=Text input fields


  3. **Markdown input fields -**


  CMS-INDENT INDENT=1 CONTENT=Markdown input fields usually use for complex and
  multiple paragraphs. You can choose widgets, and HTML tags on markdown input
  fields. Usually we use it on page contents, such as blog pages, resources
  pages content.


  CMS-IMAGECLASS IMAGE=/images/uploads/templates-markdown-input.png INDENT=1
  CLASS=w75 ALT=Markdown input fields


  ## What are widgets


  Widgets are components that you can use ONLY on **markdown fields**. Currently
  available widgets are **YouTube**,** Image Class**, **Indent**, **Slack
  Command**, **Anchor**, **Animated Gif**, **Image**, **Commander Command**,
  **Twitter Embed**, and **PDF**. Only **Image widget **(not Image Class Widget)
  is the original widget that created by Netlify, and I don't suggest to use
  because it doesn't provide class fields.


  CMS-IMAGECLASS IMAGE=/images/uploads/templates-what-are-widgets.png INDENT=0
  CLASS=w75 ALT=What are widgets


  ## All Widgets


  **YouTube Widget**


  This is the widget to embed YouTube video to the content.


  * **ID -** YouTube ID. You can find it from the YouTube link. For example, if
  the YouTube link is **https://www.youtube.com./watch?v=AfyI8ozw9DY**, the ID
  will be **AfyI8ozw9DY**.

  * **ALIGN -** the alignment of the widget. I will suggest to select
  **center**.

  * **WIDTH -** the width of the video. I will suggest to select **75%**.


  CMS-YOUTUBE ID=AfyI8ozw9DY ALIGN=center WIDTH=75


  **Image Class Widget**


  This is the widget to make image embed customizable.


  * **IMAGE -** click **Choose an image** to upload or select existed images.
  Accepted image format are jpeg, jpg, png, gif (not animated), svg.

  * **INDENT -** in some cases, the image is under a bullet list. This is the
  solution to indent the image so the image will be aligned to the list level.

  * **CLASS NAME -** this is the option you can add a class name based on
  Bootstrap. The basic name to use is w-100 (100% width), w-75 (75% width), w-50
  (50% width), w-25 (25% width), border (add border around), mt-3 (add space to
  the top), mb-3 (add space to the bottom), etc. You can separate them by
  **space**.

  * **ALT -** alt tag for SEO. Alt tags should be related to the topic of the
  image so the image will show on the result when people google search for the
  keyword.


  CMS-IMAGECLASS IMAGE=/images/uploads/banner-nimbella.jpg INDENT=0 CLASS=w-75
  border mt-2 mb-3 ALT=Image class widget


  **Indent Widget**


  This is the widget to indent text. For example, if there are more than two
  paragraph under a bullet list, it's a good to indent the second paragraph so
  the second paragraph will be aligned with the first paragraph (see the example
  below the list).


  * **INDENT -** indent the text to align with the list.

  * **CONTENT -** add paragraph here. Please note that if the text contains bold
  face or other style, the widget interface will be gone, but it will still be
  ok on converting to HTML code.


  Example 1 - align second paragraph to the first paragraph under a bullet list


  * first item

  * second item (first paragraph)


  CMS-INDENT INDENT=1 CONTENT=second item (second paragraph)


  Example 2 - indent text with bold face but the preview still looks ok


  CMS-INDENT INDENT=2 CONTENT=This is a **bold face** example with indent 2.


  **Slack Command and Commander Command Widget**


  **Anchor Widget**


  **Podcast Widget**


  CMS-PODCAST INDENT=0 WIDTH=100 SRC=/images/uploads/sample.mp3
  ART=/images/uploads/blog-serverless-slack-apps-and-slash-commands-2.png
  TITLE=EP1. Sample of podcast widget


  **Animated Gif Widget**


  **Twitter Embed Widget**


  **PDF Widget**
meta:
  noindex: true
---

