# Nimbella.com is using Netlify CMS + React Start

Please read the original instruction below to setup `Netlify CMS` with `React`

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![dependencies](https://david-dm.org/jinksi/netlify-cms-react-starter.svg?style=flat-square)](https://david-dm.org/jinksi/netlify-cms-react-starter)
[![Netlify Status](https://api.netlify.com/api/v1/badges/78bb8a0a-27c3-45e8-a1ee-1706a94f8ada/deploy-status)](https://app.netlify.com/sites/adoring-tereshkova-a26214/deploys)


A starter project for creating lightning-fast, offline-first websites with [Netlify CMS](https://netlifycms.org) and React.

* **[Create React App](https://github.com/facebookincubator/create-react-app)**
* **[React Router](https://github.com/ReactTraining/react-router)** for routing
* **[React Helmet](https://github.com/nfl/react-helmet)** for document titles, descriptions, meta
* **[React Snapshot](https://github.com/geelen/react-snapshot)** for pre-rendering to static html so it works without Javascript ⭐️
* **[Netlify CMS](https://github.com/netlify/netlify-cms)** for content management

## Show me the CMS!

The CMS lives at [https://www.nimbella.com/admin](https://www.nimbella.com/admin).
1. Invite users (probably yourself) to enable admin access

* Open the **Identity** tab and hit **Invite Users**

## Developing

1.  Clone your repo to your local machine

1.  Install dependencies

`yarn` or `npm install`

1.  Run the development server

`yarn start` or `npm run start`

If you are adding or editing content locally in the CMS, a couple of things to note:

1.  Changes will be pushed to the remote repo.

1.  You will be prompted to enter your site's url, this is necessary for Netlify Identity to manage user login. This is stored in `localStorage`, so you might have to empty your browser cache if you are switching projects but remaining on `localhost:3000`.

## Editing CMS fields

The Netlify CMS configuration is located in `public/admin/config.yml`. This is where you will configure the pages, fields, posts and settings that are editable by the CMS.

Find out more in the [Netlify CMS Docs](https://www.netlifycms.org/docs/#configuration).

## See also

[Netlify CMS Docs](https://www.netlifycms.org/docs/)  
[Netlify CMS Repo](https://github.com/netlify/netlify-cms)  
[Hyperstatic](https://github.com/Jinksi/hyperstatic) – the same starter project minus Netlify CMS  
[Gatsby + Netlify CMS Starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms)

## CMS Instruction

This is the instruction on how to update pages and create posts

* **Pages Update -**

    Go to [Pages](https://www.nimbella.com/admin/#/collections/pages) and find the page you want to edit. Edit fields are on the right and left column is preview.
 
    Meta section is for sharing links on social media.
 
* **Create Posts -**
 
    Click on `Quick add` dropdown at the upper-right of [Admin Page](https://www.nimbella.com/admin). You can post `Events`, `News`, `Blogs`, `Jobs`, and `Resource Documents` here.

    Before post a blog, if you want to add more `Blog catagories`, you can also find the option from `Quick add` dropdown list.

* **Nimbella Related Update -**

    If you want to update `Trademark Usage`, `Acceptable Use`, `Privacy Policy`, `Term of Use`, `Out Client List`, `Our Founders List`, or `Nimbella Information`, you can find at [Settings](https://www.nimbella.com/admin/#/collections/settings)

