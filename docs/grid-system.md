---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Grid system
description: Bojler uses 12-column grid with a 600px container. <br>On mobile devices (under 640px wide), columns become full width and stack vertically.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Typography
        url: /typography
    next:
        content: Utility classes
        url: /utility-classes
---

## Grid options
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

## Container
All emails should have a container element. This gives the email a maximum width for email clients on larger screens. It also orients the email in the center.

<div class="example">
    <a href="/examples/grid-container.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td>
            Content goes here ...
        </td>
    </tr>
</table><!-- /.container -->
```

## Columns
Content should be placed within columns, and columns should be placed as `<td>` of your `.container`.
You can define width of the column with classes such as `.column-1`, `.column-2`, `.column-3` etc.
In `.container` you can place max. 12 columns.

<div class="example">
    <a href="/examples/grid-columns-1.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-12 first last">
            Content goes here ...
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

<div class="example">
    <a href="/examples/grid-columns-2.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-6 first">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-6 last">
            Content goes here ...
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

<div class="example">
    <a href="/examples/grid-columns-3.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-3 first">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-3">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-3">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-3 last">
            Content goes here ...
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

## First and last classes
The `.first` class adds the appropriate amount of padding-left to space the content away from the container’s edge. The `.last` class is added to your last set of columns in a row to add padding-right to the column. If you have columns in between `.first` and `.last`, these classes are not needed on the middle columns.

The reason these classes exist is that CSS properties like `:last-child` don’t work in most email clients so a class is needed.

<div class="example">
    <a href="/examples/grid-first-last.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-4 first">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-4">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-4 last">
            Content goes here ...
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

## Columns without gutter
If you need columns without gutter than you should use `.no-gutter` class on your `.container`.

<div class="example">
    <a href="/examples/grid-no-gutter.html" target="blank">Preview</a>
</div>
```html
<table class="container no-gutter" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-6">
            Content goes here ...
        </td><!-- /.col -->
        <td class="column-6">
            Content goes here ...
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

<div class="callout callout--warning">
    <p><strong>Don't use .first and .last classes</strong> Don't use <code>.first</code> and <code>.last</code> classes in combination with <code>.no-gutter</code> class, otherwise you'll have problem with unexpected paddings.</p>
</div>
