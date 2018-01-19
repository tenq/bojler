---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Objects
description: Objects are non-cosmetic styles that handle the skeletal aspect of a lot of UI components. Lets take a look at objects implemented into bojlers core.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Foundations
        url: /foundations
    next:
        content: Utility classes
        url: /utility-classes
---

## Main wrapper
Main wrapper is used to define main table inside our email template.
You should use it in every email template you build with bojler.

Basically, main wrapper adds spacing around your table to move it from browser edge. You can define spacing in your `settings/_core.scss`:

<div class="example"></div>
```scss
$page-vertical-spacing: 40px;
$page-vertical-spacing-mobile: 20px;
```

Your markup should look like this:

<div class="example">
    <a href="../examples/objects/main-wrapper.html" target="blank">Preview</a>
</div>
```html
<html>
    <head></head>
    <body>
        <table class="o-main-wrapper" width="100%" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td class="o-main-wrapper__inner" align="center" valign="top"><!-- 10 -->
                    Your content goes here ...
                </td><!-- /.o-main-wrapper__inner -->
            </tr>
        </table><!-- /.o-main-wrapper -->
    </body>
</html>
```

## Preheader
Preheader is a snippet of copy pulled in from the body of your email and typically displayed underneath the sender name and subject line in a subscriber’s inbox.

It is pulled from the first few lines of text found within an email. Preheader can either be displayed or hidden in the body of your campaign. We decided to hide it.

<div class="example"></div>
```html
<table class="o-preheader" width="0" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>Your preheader text goes here. This block should be hidden.</td>
    </tr>
</table><!-- /.o-preheader -->
```

## Grid
### Grid options
See how aspects of this grid work across devices with a handy table.
<table>
    <thead>
        <tr>
            <th></th>
            <th>Small devices (&lt;640px)</th>
            <th>Large devices (&gt;640px)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grid behaviour</td>
            <td>Horizontal</td>
            <td>Collapsed</td>
        </tr>
        <tr>
            <td>Container width</td>
            <td>100%</td>
            <td>600px</td>
        </tr>
        <tr>
            <td>Number of columns</td>
            <td colspan="2">12</td>
        </tr>
        <tr>
            <td>Column width</td>
            <td>100%</td>
            <td>50px</td>
        </tr>
        <tr>
            <td>Gutter width</td>
            <td colspan="2">20px <i>(10px on each side of a column)</i></td>
        </tr>
    </tbody>
</table>

### Container
All emails should have a container element. This gives the email a maximum width for email clients on larger screens. It also orients the email in the center.

<div class="example">
    <a href="../examples/objects/grid/grid-1.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            Content goes here ...
        </td>
    </tr>
</table><!-- /.o-container -->
```

### Columns
Content should be placed within columns, and columns should be placed as `<td>` of your `.o-container`.
You can define width of the column with classes such as `.o-column-1`, `.o-column-2`, `.o-column-3` etc.
In `.o-container` you can place max. 12 columns.

<div class="example">
    <a href="../examples/objects/grid/grid-2.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-12 is-first is-last">
            Content goes here ...
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

<div class="example">
    <a href="../examples/objects/grid/grid-3.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-6 is-first">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-6 is-last">
            Content goes here ...
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

<div class="example">
    <a href="../examples/objects/grid/grid-4.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-3 is-first">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-3">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-3">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-3 is-last">
            Content goes here ...
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

### First and last classes
The `.is-first` class adds the appropriate amount of padding-left to space the content away from the container’s edge. The `.is-last` class is added to your last set of columns in a row to add padding-right to the column. If you have columns in between `.is-first` and `.is-last`, these classes are not needed on the middle columns.

The reason these classes exist is that CSS properties like `:last-child` don’t work in most email clients so a class is needed.

<div class="example">
    <a href="../examples/objects/grid/grid-5.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-4 is-first">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-4">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-4 is-last">
            Content goes here ...
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

### Columns without gutter
If you need columns without gutter than you should use `.no-gutter` class on your `.o-container`.

<div class="example">
    <a href="../examples/objects/grid/grid-6.html" target="blank">Preview</a>
</div>
```html
<table class="o-container no-gutter" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-6">
            Content goes here ...
        </td><!-- /.o-col -->
        <td class="o-column-6">
            Content goes here ...
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

<div class="callout callout--warning">
    <p><strong>Don't use <code>.is-first</code> and <code>.is-last</code> classes</strong> Don't use <code>.is-first</code> and <code>.is-last</code> classes in combination with <code>.no-gutter</code> class, otherwise you'll have problem with unexpected paddings.</p>
</div>

## List reset
Lists won't work properly in Outlook 2007/10/13 unless you wrap them with table cell (`td`) that have class `.o-list-reset`.

Outlook 2007/10/13 don't support padding by default on lists so we have to add it manually.

<div class="example">
    <a href="../examples/objects/list-reset.html" target="blank">Preview</a>
</div>
```html
<table border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-list-reset">
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
            </ul>
        </td>
    </tr>
</table>
```
