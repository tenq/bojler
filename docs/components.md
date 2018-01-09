---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Components
description: Components are pre-made blocks of code which you can use to build your own email template. These components are optional and other things don’t depend on them.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Utility classes
        url: /utility-classes
---

<div class="callout callout--info">
    <p><strong>We use <a href="https://en.bem.info/methodology">BEM</a> for components.</strong> The Block, Element, Modifier methodology (commonly referred to as <a href="https://en.bem.info/methodology">BEM</a>) is a popular naming convention for classes in HTML and CSS. Its goal is to help developers better understand the relationship between the HTML and CSS in a given project.</p>
    <p>We strongly recommend you to <a href="https://css-tricks.com/bem-101">read more about BEM here</a>. Also, we recommend you to use it for new/custom components.</p>
</div>

## Preheader
Preheader is a snippet of copy pulled in from the body of your email and typically displayed underneath the sender name and subject line in a subscriber’s inbox.

It is pulled from the first few lines of text found within an email. Preheader can either be displayed or hidden in the body of your campaign. We decided to hide it.

<div class="callout callout--info">
    <p><strong>Remove it if you don't need it.</strong> Preheader is already included to all boilerplate files, if you don't need it just erase it.</p>
</div>
```html
<table id="preheader" width="0" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>Your preheader text goes here. This block should be hidden.</td>
    </tr>
</table><!-- /#preheader -->
```

## Buttons
We have implemented bulletproof buttons that work properly on all email clients.

We've prepared few button variations for you. To apply the variation just add one of the following classes next to your `btn` class:

- Full width: `btn--full-width`
- Rounded: `btn--rounded`
- Green: `btn--green`
- Red: `btn--red`
- Blue: `btn--blue`
- Dark: `btn--dark`

<div class="example">
    <a href="/examples/buttons.html" target="blank">Preview</a>
</div>
```html
<table class="btn" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.btn -->
<table class="btn btn--red" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.btn -->
```

## Hero
Hero is component with background image and content inside it. With this component we're trying to recreate widely popular hero sections seen all around web.

Everything regarding CSS and reset for this component is already implemented inside our `email.html` except markup. You can copy markup from example below.

<div class="callout callout--info">
    <p><strong>Define width and height!</strong> You have to define width and height on hero element, otherwise your hero component will be broken on some Outlook email clients!</p>
    <p>Furthermore, your background image should have the same dimensions as your hero component, otherwise it will be broken on some Outlook email clients.</p>
</div>
<div class="example">
    <a href="/examples/hero.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="hero" width="600" height="350" background="https://dummyimage.com/600x350/d9f0ff/cccccc.jpg">
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px; height: 350px;">
            <v:fill type="frame" src="https://dummyimage.com/600x350/d9f0ff/cccccc.jpg" color="#ffffff" />
            <v:textbox inset="0, 0, 0, 0">
            <![endif]-->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="hero__inner">
                        <table width="520" align="center" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="align-center">
                                    <h1>Title</h1>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="btn btn--blue yahoo-center" border="0" cellpadding="0" cellspacing="0" align="center">
                                        <tr>
                                            <td>
                                                <a href="#">Click me!</a>
                                            </td>
                                        </tr>
                                    </table><!-- /.btn -->
                                </td>
                            </tr>
                        </table>
                    </td><!-- /.hero__inner -->
                </tr>
            </table>
            <!--[if gte mso 9]>
            </v:textbox>
            </v:rect>
            <![endif]-->
        </td><!-- /.hero -->
    </tr>
</table><!-- /.container -->
```
