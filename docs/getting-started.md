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
        content: Foundations
        url: /foundations
---

## Introduction
Bojler is an CSS email framework for developing responsive and lightweight email templates that will render correctly across each of the most popular email clients.

If you have experience with email template development, you know how painful it is to build a perfect email template that works across all email clients.

To make it easier for you to develop responsive and lightweight email templates we have created Bojler.

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
Bojler includes simple and easily customized typography for headings and table cells.

To read more about typography please go to [Foundations](/foundations) section.

### Grid system
Bojler uses 12-column grid with a 600px container.
On mobile devices (under 640px wide), columns become full width and stack vertically.

To read more about grid system please go to [Objects](/objects) section.

### Utility classes 🛠️
High-specificity, very explicit selectors and helper classes. We use them to easily manipulate with things such as alignments and images.

To read more about [Utility classes](/utility-classes) please go to their own [section here](/utility-classes).

### Components
Components are pre-made blocks of code which you can use to build your own email template. These components are optional and other things don’t depend on them.

To read more about [Components](/components) please go to their own [section here](/components).

## Download
Download Bojler to get the compiled CSS, source code, or include it with npm.

### Compiled CSS
Download ready-to-use compiled code for Bojler to easily drop into your project.
This doesn’t include documentation and source files.

<a href="https://github.com/Slicejack/bojler/releases/download/v3.2.1/bojler-3.2.1-dist.zip" class="btn btn--dark btn--rounded">Download — v3.2.1</a>

### Source files
Compile Bojler with your own asset pipeline by downloading our source Sass and documentation files. This option requires some additional tooling such as Sass compiler.

<a href="https://github.com/Slicejack/bojler/archive/v3.2.1.zip" class="btn btn--dark btn--rounded">Download — v3.2.1</a>

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

## Starter template
We suggest you using our starter template as a starting point for your next email template project.

```html
<!--
  1. For best results we use XHTML Transitional.
     More info:
     - http://www.campaignmonitor.com/blog/post/3317/correct-doctype-to-use-in-html-email/
     - http://www.emailonacid.com/blog/details/C18/doctype_-_the_black_sheep_of_html_email_design
     - https://litmus.com/community/discussions/39-explanation-of-doctype-html-attributes-meta-tags-in-email
  2. DPI images scaling issue in Outlook - Fix.
     More info: https://blog.jmwhite.co.uk/2014/03/28/solving-dpi-scaling-issues-with-html-email-in-outlook/
  3. We have included meta ‘Content Type’ so that we can set the character set as
     UTF8 – specifying as much as possible can be a good thing when writing code
     for the whole range of email clients.
     More info: https://www.emailonacid.com/blog/article/email-development/the_importance_of_content-type_character_encoding_in_html_emails/
  4. The IE=Edge meta tag enables CSS3 and media queries in Windows Phone 7.5 and
     higher. That's why you should use it in your email.
     More info: https://www.campaignmonitor.com/forums/topic/7989/windows-phone-8-has-full-css3media-query-support/
  5. Meta ‘Viewport’ as seen above sets the viewable area to the width of the
     device screen – this is essential if you want your email to be responsive.
     If your email is intended solely for desktop users then don’t include this
     line of code.
  6. The final bit of meta data to set is the title tag - this is worth including
     because it is used by Outlook when people use the ‘View in Browser’ function
     and it can also appear in email preview snippets in some versions of Hotmail.
  7. Outlook line heights fix.
  8. Outlook system fonts stack fallback.
  9. DPI images scaling issue in Outlook - Fix.
     More info: https://blog.jmwhite.co.uk/2014/03/28/solving-dpi-scaling-issues-with-html-email-in-outlook/
 10. Adding spacing around main table. If you don't need this spacing just
     remove class from markup.
-->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><!-- 1 -->
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml"><!-- 2 -->
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><!-- 3 -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" /><!-- 4 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0" /><!-- 5 -->
        <title>Email title</title><!-- 6 -->

        <!-- 7 -->
        <!--[if gte mso 15]>
        <style type="text/css">
            table {
                font-size: 1px;
                line-height: 0;
                mso-margin-top-alt: 1px;
                mso-line-height-rule: exactly;
            }
            * {
                mso-line-height-rule: exactly;
            }
        </style>
        <![endif]-->

        <!-- 8 -->
        <!--[if mso]>
        <style type="text/css">
            body,
            table,
            td {
                font-family: Arial, Helvetica, sans-serif !important;
            }
        </style>
        <![endif]-->

        <!-- 9 -->
        <!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->

        <!--
        Your embed CSS should go here !
        -->
    </head>
    <body>
        <table class="o-preheader" width="0" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td>Your preheader text goes here. This block should be hidden.</td>
            </tr>
        </table><!-- /.o-preheader -->

        <table class="o-main-wrapper" width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td class="o-main-wrapper__inner" align="center" valign="top"><!-- 10 -->
                    <table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="o-column-12 is-first is-last">
                                Your content goes here ...
                            </td><!-- /.o-column -->
                        </tr>
                    </table><!-- /.o-container -->
                </td><!-- /.o-main-wrapper__inner -->
            </tr>
        </table><!-- /.o-main-wrapper -->
    </body>
</html>
```

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
├── test/ # Source test files.
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
### Follow [this](https://www.campaignmonitor.com/css/){:target="_blank"} email CSS guide
On [this link](https://www.campaignmonitor.com/css/){:target="_blank"} you can find a complete breakdown of the CSS support for the top 10 most popular mobile, web and desktop email clients on the planet. It is recommended to use it as often as possible.

### DPI Scaling in Outlook 2007-2013
If you need to solve issues with DPI Scaling in Outlook 2007-2013 please refer to [this thread](https://litmus.com/community/discussions/151-mystery-solved-dpi-scaling-in-outlook-2007-2013){:target="_blank"} and [this article](https://blog.jmwhite.co.uk/2014/03/28/solving-dpi-scaling-issues-with-html-email-in-outlook/){:target="_blank"}.

<div class="callout callout--info">
    <p><strong>Support for VML and images is already implemented.</strong> We've already implemented solution to make VML and images scale properly in our <a href="#starter-template">starter template</a>.</p>
</div>

### Compress and optimize your images
It’s also a really great idea to try to keep your entire email as small as humanly possible: under 100kb is ideal but not always possible, under 250kb is pretty standard.

Use a compression app like [compressor.io](https://compressor.io/){:target="_blank"} to cut all your images down to size as much as possible before you send. Slower load times, especially on mobile, can make or break your email if the overall file size is too large.

### Test your email properly
Before you send your HTML email you should test it properly. We recommend you to use [Litmus](http://litmus.com){:target="_blank"} or [Email on Acid](https://www.emailonacid.com){:target="_blank"}.

### Send your email properly
Best way to send your HTML email would be using an Email Service Provider (ESP) such as [MailChimp](http://www.mailchimp.com){:target="_blank"} or [Campaign Monitor](https://www.campaignmonitor.com/){:target="_blank"}. If you’re just running a quick test we recommend you to use [Putsmail](https://putsmail.com/){:target="_blank"}.

## Modifying and extending
### CSS architecture
The architecture we use on our projects is called [ITCSS](http://www.creativebloq.com/web-design/manage-large-scale-web-projects-new-css-architecture-itcss-41514731){:target="_blank"} – “Inverted Triangle CSS”. This is a methodology that involves visualising your entire CSS project as a layered, upside-down triangle. This hierarchical shape represents a model that will help you order your CSS in the most effective, least wasteful way.

What ITCSS aims to do is to provide a level of formality and structure to the way we write our CSS. It’s a way of planning and structuring your CSS for large and long-running projects.

<div class="callout callout--info">
    <p><strong>Learn more about ITCSS</strong> You can find more resources about ITCSS <a href="https://github.com/ahmadajmi/awesome-itcss" target="_blank">here</a>.</p>
</div>

### Naming convention
We use [BEM](https://en.bem.info/methodology){:target="_blank"}. The Block, Element, Modifier methodology (commonly referred to as [BEM](https://en.bem.info/methodology){:target="_blank"}) is a popular naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.

<div class="callout callout--info">
    <p><strong>Learn more about BEM</strong> You can find more resources about BEM <a href="https://css-tricks.com/bem-101" target="_blank">here</a>.</p>
</div>

### Modifying
To modify Bojler we recommend using our `settings/core.scss` partial. Duplicate it to your project, update settings and import it instead of default `settings/core.scss` file.

### Extending
If you want to extend some of existing features do the same thing you did with `core.scss` partial. Duplicate, for example, `components/hero.scss` partial to your project, update it and import it instead of default `components/hero.scss`.

## Documentation
Documentation is powered by [Jekyll](https://jekyllrb.com){:target="_blank"}.
To serve the documentation just run `npm run docs` in package root directory.
