---
# Page settings
layout: default
keywords: email, css, html, framework, boilerplate, grid, campaigns, templates, bojler, slicejack
comments: false

# Hero section
title: Utility classes
description: High-specificity, very explicit selectors and helper classes. We use them to easily manipulate with things such as alignments and images.

# Micro navigation
micro_nav: true

# Page navigation
page_nav:
    prev:
        content: Grid system
        url: /grid-system
    next:
        content: Components
        url: /components
---

## Alignment
### Text alignment
Easily realign text to components with text alignment classes:
- Left: `.align-left`
- Right: `.align-center`
- Center: `.align-right`

<div class="example">
    <a href="/examples/utility-text-alignment.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-12 first last">
            <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td class="align-left">Align left</td>
                </tr>
                <tr>
                    <td class="align-center">Align center</td>
                </tr>
                <tr>
                    <td class="align-right">Align right</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

### Yahoo! Mail
This class helps you to fix centering issues for elements in Yahoo! Mail email client:
- Center: `.yahoo-center`

<div class="example">
    <a href="/examples/utility-yahoo-alignment.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-12 first last">
            <table class="yahoo-center" width="300" align="center" border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>This should be centered in Yahoo! Mail</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

## Images
### Reset
We've implemented images reset class which you can use to reset images  
`font-size` and `line-height` to display properly on some Outlook email clients.  
Use this class only on your parent `<td>` element, not on `<img>`:

- Reset: `.image-reset`

<div class="example">
    <a href="/examples/utility-images-reset.html" target="blank">Preview</a>
</div>
```html
<table class="container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-12 first last image-reset">
            <img src="example.png" />
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

## Spacing
### Body table spacing
By default Bojler generates email templates with spacing around template body.
If you want to disable this feature just remove `.body-table-spacing` utility class from your `.html` file.

- Body table spacing: `.body-table-spacing`
