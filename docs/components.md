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

## Buttons
We have implemented bulletproof buttons that work properly on all email clients.

We've prepared few button variations for you. To apply the variation just add one of the following classes next to your `.c-btn` class:

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.c-btn--full-width</code></td>
            <td>100% width button.</td>
        </tr>
        <tr>
            <td><code>.c-btn--rounded</code></td>
            <td>Button with rounded corners.</td>
        </tr>
        <tr>
            <td><code>.c-btn--dark</code></td>
            <td>Button with dark background color.</td>
        </tr>
        <tr>
            <td><code>.c-btn--red</code></td>
            <td>Button with red background color.</td>
        </tr>
        <tr>
            <td><code>.c-btn--green</code></td>
            <td>Button with green background color.</td>
        </tr>
        <tr>
            <td><code>.c-btn--blue</code></td>
            <td>Button with blue background color.</td>
        </tr>
    </tbody>
</table>

<div class="example">
    <a href="../examples/components/buttons.html" target="blank">Preview</a>
</div>
```html
<!--
Default button.
-->

<table class="c-btn" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Full width button.
-->

<table class="c-btn c-btn--full-width" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Button with rounded corners.
-->

<table class="c-btn c-btn--rounded" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Dark button.
-->

<table class="c-btn c-btn--dark" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Red button.
-->

<table class="c-btn c-btn--red" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Green button.
-->

<table class="c-btn c-btn--green" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->

<!--
Blue button.
-->

<table class="c-btn c-btn--blue" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            <a href="#">Click me!</a>
        </td>
    </tr>
</table><!-- /.c-btn -->
```

## Hero
Hero is component with background image and content inside it. With this component we're trying to recreate widely popular hero sections seen all around web.

Everything regarding CSS and reset for this component is already implemented inside our [starter template](/getting-started/#starter-template) except markup. You can copy markup from example below.

<div class="callout callout--info">
    <p><strong>Define width and height!</strong> You have to define width and height on hero element, otherwise your hero component will be broken on some Outlook email clients!</p>
    <p>Furthermore, your background image should have the same dimensions as your hero component, otherwise it will be broken on some Outlook email clients.</p>
</div>
<div class="example">
    <a href="../examples/components/hero.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="c-hero" width="600" height="350" background="https://dummyimage.com/600x350/d9f0ff/cccccc.jpg">
            <!--[if gte mso 9]>
            <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px; height: 350px;">
            <v:fill type="frame" src="https://dummyimage.com/600x350/d9f0ff/cccccc.jpg" color="#ffffff" />
            <v:textbox inset="0, 0, 0, 0">
            <![endif]-->
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                    <td class="c-hero__inner">
                        <table width="520" align="center" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td class="u-text-center">
                                    <h1>Title</h1>
                                </td>
                            </tr>
                            <tr>
                                <td class="u-text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</td>
                            </tr>
                            <tr>
                                <td>
                                    <table class="c-btn c-btn--blue u-mx-auto" border="0" cellpadding="0" cellspacing="0" align="center">
                                        <tr>
                                            <td>
                                                <a href="#">Click me!</a>
                                            </td>
                                        </tr>
                                    </table><!-- /.c-btn -->
                                </td>
                            </tr>
                        </table>
                    </td><!-- /.c-hero__inner -->
                </tr>
            </table>
            <!--[if gte mso 9]>
            </v:textbox>
            </v:rect>
            <![endif]-->
        </td><!-- /.c-hero -->
    </tr>
</table><!-- /.o-container -->
```
