---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Foundations
description: Bojler includes basic reset styles and simple, easily customized typography for headings and table cells. Lets take a look at bojler foundations.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Getting started
        url: /getting-started
    next:
        content: Objects
        url: /objects
---

## System fonts stack
Bojler defaults to the system font of a particular operating system. This method can boost performance because the browser or email client doesn't have to download any font files, it's using one it already had.

The beauty of system fonts is that it matches what the current OS uses, so it can be a comfortable look.

<div class="example">
    <a href="../examples/foundations/typography.html" target="blank">Preview</a>
</div>
```css
html,
body,
table,
table td {
    font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif !important;
}
```

## Table cells and headings
We've updated default typography values for all table cells and headings.

Default values are defined in `px` instead of `em` to work properly in all email clients (Different email clients use different baselines, which makes pixel-perfect work near-impossible when using `em`).

<table>
    <thead>
        <tr>
            <th>Element</th>
            <th>Font size</th>
            <th>Line height</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Base <em>(Table cells)</em></td>
            <td>16px</td>
            <td>23px</td>
        </tr>
        <tr>
            <td>Heading 1</td>
            <td>50px</td>
            <td>58px</td>
        </tr>
        <tr>
            <td>Heading 2</td>
            <td>38px</td>
            <td>46px</td>
        </tr>
        <tr>
            <td>Heading 3</td>
            <td>28px</td>
            <td>36px</td>
        </tr>
        <tr>
            <td>Heading 4</td>
            <td>21px</td>
            <td>29px</td>
        </tr>
        <tr>
            <td>Heading 5</td>
            <td>16px</td>
            <td>23px</td>
        </tr>
        <tr>
            <td>Heading 6</td>
            <td>12px</td>
            <td>20px</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Heading utility classes</strong> You can use specific heading utility classes to apply heading styles to any element you want in your email template. Read more about it <a href="/utility-classes/#headings">here</a>.</p>
</div>

## Links
We've updated default link styles to make them prettier. Underline is removed and new default color is applied.

You can change default link color in `settings/_core.scss`, look for `$link-color` variable.
