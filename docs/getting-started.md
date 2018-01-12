---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Getting started
description: In this section you'll find features and support table, basic information about Bojler and how to use it properly. If you're first time user then you should read this first.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    next:
        content: Typography
        url: /typography
---

## Introduction
Bojler is an CSS email framework for developing responsive and lightweight email templates that will render correctly across each of the most popular email clients.

If you have experience with email template development, you know how painful it is to build a perfect email template that works across all email clients.

To make it easier for you to develop responsive and lightweight email templates we have created Bojler.

## Download
Download Bojler to get the compiled CSS, source code, or include it with npm.

### Compiled CSS
Download ready-to-use compiled code for Bojler to easily drop into your project.
This doesn’t include documentation and source files.

<a href="https://github.com/Slicejack/bojler/releases/download/v3.0.0/bojler-3.0.0-dist.zip" class="btn btn--dark btn--rounded">Download — v3.0.0</a>

### Source files
Compile Bojler with your own asset pipeline by downloading our source Sass and documentation files. This option requires some additional tooling such as Sass compiler.

<a href="https://github.com/Slicejack/bojler/archive/v3.0.0.zip" class="btn btn--dark btn--rounded">Download — v3.0.0</a>

### Via NPM
Install Bojler in your Node.js powered apps with the npm package:

```sh
$ npm install @slicejack/bojler
```

## Usage
### 1. Inline CSS
Bojler have file called `inline.css` and you should inline all the styles from it to your `.html` email template.

Some email clients strip out `<head>` and `<style>` tags from emails, so it’s best to have your CSS written inline within your markup.

### 2. Embed CSS
Bojler also have file called `embed.css` and you should embed it to the `<head>` of your email template.

Styles inside `embed.css` can't be inlined because they style elements added dynamically by email clients or they are media queries which also can't be inlined.

### 3. You're ready to go! 🔥
Now you're ready to build your first email template with Bojler!

## Features
This is list of features we've implemented to Bojler. Few of them have their own section in this documentation, we recommend you to read them all.

### It's responsive 🖥️ 💻 📱
Bojler is responsive. Your email templates will work perfectly even on mobile devices and tablets.

### Built with SASS 🎉
Modifying and extending Bojler is now a lot easier because it's written with SASS. Nesting, extending, mixins, use them all!

### Inline and Embed CSS
You don't have to worry about styles position in your markup anymore! All you have to do is to inline your `inline.css` and embed your `embed.css`. Bojler handles everything else.

### Reset styles
Reset styles are great starting point for your email template development. They fix all well known bugs in various email clients.

### Typography ✍️
Bojler includes simple and easily customized typography for headings, table cells and lists.

To read more about [Typography](/typography) please go to it's own [section here](/typography).

### Grid system
Bojler uses 12-column grid with a 600px container.
On mobile devices (under 640px wide), columns become full width and stack vertically.

To read more about [Grid system](/grid-system) please go to it's own [section here](/grid-system).

### Utility classes 🛠️
High-specificity, very explicit selectors and helper classes. We use them to easily manipulate with things such as alignments and images.

To read more about [Utility classes](/utility-classes) please go to their own [section here](/utility-classes).

### Components
Components are pre-made blocks of code which you can use to build your own email template. These components are optional and other things don’t depend on them.

To read more about [Components](/components) please go to their own [section here](/components).

## Directory structure
Everything you want to know about directory structure can be found here:

```sh
bojler/
├── dist/ # Distribution files.
│   ├── embed.css # Styles that should be embedded in the <head> of your email template.
│   ├── embed.min.css # Styles that should be embedded in the <head> of your email template (minified version).
│   ├── inline.css # Styles you should inline directly to your .html email template markup.
│   └── inline.min.scss # Styles you should inline directly to your .html email template markup (minified version).
├── docs/ # Project documentation (Powered by Jekyll and Doks theme).
├── gulp/ # Gulp tasks and configuration files.
├── scss/ # Directory with SASS files.
│   ├── components/ # Pre-made blocks of code which you can use to build your own email template.
│   ├── embed/ # SASS partials that gets included into embed.scss.
│   ├── generic/ # Low-specificity, far-reaching rulesets (e.g. resets).
│   ├── objects/ # Objects, abstractions, and design patterns.
│   ├── settings/ # Global variables, site-wide settings, config switches, etc.
│   ├── utilities/ # High-specificity, very explicit selectors.
│   ├── embed.scss # Embed CSS gets copiled from this file.
│   └── inline.scss # Inline CSS gets copiled from this file.
├── .eslintrc # ESlint configuration file.
├── .gitignore # Git related file which specifies intentionally untracked files to ignore.
├── .stylelintrc # Stylelint configuration file.
├── .travis.yml # Travis CI configuration file.
├── CHANGELOG.md # All notable changes to this project will be documented in this file.
├── CONTRIBUTING.md # Contributing guide.
├── gulpfile.js # Gulp configuration file.
├── LICENSE.md # Project license.
├── package-lock.json # Automatically generated file for any operations where npm modifies either the node_modules tree, or package.json.
├── package.json # This file contains meta data about npm modules.
└── README.md # Quick start guide.
```

## Compatibility
We have tested Bojler on numerous email clients and devices. In table below you can see what's supported:

<table>
    <thead>
        <tr>
            <th>Email clients</th>
            <th>Web email clients</th>
            <th>Mobile devices</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                Apple Mail 7<br>
                Apple Mail 8<br>
                Outlook 2000<br>
                Outlook 2002<br>
                Outlook 2003<br>
                Outlook 2007<br>
                Outlook 2010<br>
                Outlook 2011<br>
                Outlook 2013<br>
                Outlook 2016
            </td>
            <td>
                Gmail<br>
                Google Apps<br>
                Office 365<br>
                Outlook.com<br>
                Yahoo! Mail
            </td>
            <td>
                Android 4.4<br>
                iPhone 5<br>
                iPhone 6<br>
                iPad<br>
                iPad Mini
            </td>
        </tr>
    </tbody>
</table>

## Best practices
### Follow [this](https://www.campaignmonitor.com/css/) email CSS guide
On [this link](https://www.campaignmonitor.com/css/) you can find a complete breakdown of the CSS support for the top 10 most popular mobile, web and desktop email clients on the planet. It is recommended to use it as often as possible.

### DPI Scaling in Outlook 2007-2013
If you need to solve issues with DPI Scaling in Outlook 2007-2013 please refer to [this thread](https://litmus.com/community/discussions/151-mystery-solved-dpi-scaling-in-outlook-2007-2013) and [this article](https://blog.jmwhite.co.uk/2014/03/28/solving-dpi-scaling-issues-with-html-email-in-outlook/).

<div class="callout callout--info">
    <p><strong>Support for VML and images is already implemented.</strong> We've already implemented solution to make VML and images scale properly, as you can see <a href="https://github.com/Slicejack/bojler/blob/master/source/email.html" target="blank">here</a>.</p>
</div>

### Compress and optimize your images
It’s also a really great idea to try to keep your entire email as small as humanly possible: under 100kb is ideal but not always possible, under 250kb is pretty standard.

Use a compression app like [compressor.io](https://compressor.io/) to cut all your images down to size as much as possible before you send. Slower load times, especially on mobile, can make or break your email if the overall file size is too large.

<div class="callout callout--info">
    <p><strong>How to use images locally?</strong> We recommend you to add <code>/assets</code> directory containing your images inside <code>/public</code> directory. Bojler will not delete your <code>/assets</code> directory on build or during development mode.</p>
	<p>Also <code>npm run gulp clean</code> command will not delete your <code>/assets</code> directory.</p>
</div>

### Test your email properly
Before you send your HTML email you should test it properly. We recommend you to use [Litmus](http://litmus.com) or [Email on Acid](https://www.emailonacid.com).

### Send your email properly
Best way to send your HTML email would be using an Email Service Provider (ESP) such as [MailChimp](http://www.mailchimp.com) or [Campaign Monitor](https://www.campaignmonitor.com/). If you’re just running a quick test we recommend you to use [Putsmail](https://putsmail.com/).
