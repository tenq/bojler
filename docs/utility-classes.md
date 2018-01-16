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
        content: Objects
        url: /objects
    next:
        content: Components
        url: /components
---
## Backgrounds
Utilities for controlling an element's background color.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-bg-white</code></td>
            <td>Set the background color of an element to white.</td>
        </tr>
        <tr>
            <td><code>.u-bg-black</code></td>
            <td>Set the background color of an element to black.</td>
        </tr>
        <tr>
            <td><code>.u-bg-dark</code></td>
            <td>Set the background color of an element to dark.</td>
        </tr>
        <tr>
            <td><code>.u-bg-red</code></td>
            <td>Set the background color of an element to red.</td>
        </tr>
        <tr>
            <td><code>.u-bg-green</code></td>
            <td>Set the background color of an element to green.</td>
        </tr>
        <tr>
            <td><code>.u-bg-blue</code></td>
            <td>Set the background color of an element to blue.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Background color classes are customizable</strong> Background color utilities are auto generated, you can modify and add or remove colors in <code>$colors</code> map inside <code>settings/core.scss</code> file.</p>
</div>

## Display
Utilities for controlling the display box type of an element.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-block</code></td>
            <td>Set the box type of the element to block.</td>
        </tr>
        <tr>
            <td><code>.u-table</code></td>
            <td>Set the box type of the element to table.</td>
        </tr>
        <tr>
            <td><code>.u-table-row</code></td>
            <td>Set the box type of the element to table-row.</td>
        </tr>
        <tr>
            <td><code>.u-table-cell</code></td>
            <td>Set the box type of the element to table-cell.</td>
        </tr>
        <tr>
            <td><code>.u-hidden</code></td>
            <td>Set the box type of the element to none.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Display classes are responsive</strong> Bojler uses an intuitive <code>@&lt;breakpoint&gt;</code> (<code>@sm</code>) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.</p>
    <p>For example, if you want to apply <code>.u-block</code> on small screens only you'll use this class: <code>.u-block@sm</code>.</p>
</div>

## Headings
We redefined all of our basic heading styles against utility classes so as to allow for double stranded heading hierarchy, e.g. we semantically need an H2, but we want it to be sized like an H1.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-h1</code></td>
            <td>Add <code>&lt;h1&gt;</code> element styles to other element.</td>
        </tr>
        <tr>
            <td><code>.u-h2</code></td>
            <td>Add <code>&lt;h2&gt;</code> element styles to other element.</td>
        </tr>
        <tr>
            <td><code>.u-h3</code></td>
            <td>Add <code>&lt;h3&gt;</code> element styles to other element.</td>
        </tr>
        <tr>
            <td><code>.u-h4</code></td>
            <td>Add <code>&lt;h4&gt;</code> element styles to other element.</td>
        </tr>
        <tr>
            <td><code>.u-h5</code></td>
            <td>Add <code>&lt;h5&gt;</code> element styles to other element.</td>
        </tr>
        <tr>
            <td><code>.u-h6</code></td>
            <td>Add <code>&lt;h6&gt;</code> element styles to other element.</td>
        </tr>
    </tbody>
</table>

## Images
### Reset
We've implemented `.u-image-reset` class which you can use to reset image
`font-size` and `line-height` properties to display properly on every Outlook email client.
Use this class only on your parent `<td>` element, not on `<img>`.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="220"><code>.u-image-reset</code></td>
            <td>Reset image <code>font-size</code> and <code>line-height</code> properties.</td>
        </tr>
    </tbody>
</table>

<div class="example">
    <a href="../examples/utilities/image-reset.html" target="blank">Preview</a>
</div>
```html
<table class="o-container" width="600" align="center" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="o-column-12 is-first is-last u-image-reset">
            <img src="example.png" />
        </td><!-- /.o-col -->
    </tr>
</table><!-- /.o-container -->
```

## Spacing
Utilities for controlling an element’s padding and margin.

Control an element’s padding and margin using the <code>.u-p{side}-{size}</code> and <code>.u-m{side}-{size}</code> utilities.

For example, <code>.u-pt-1</code> would add <code>10px</code> of padding to the top of the element, <code>.u-mx-0</code> would make the horizontal margin zero.

These keywords are available by default:

<table>
    <thead>
        <tr>
            <th>Keyword</th>
            <th>Property</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="100" align="center"><code>p</code></td>
            <td>Padding</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>m</code></td>
            <td>Margin</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Keyword</th>
            <th>Side</th>
            <th>Compatibility</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="100" align="center"><code>t</code></td>
            <td>Top</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>r</code></td>
            <td>Right</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>b</code></td>
            <td>Bottom</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>l</code></td>
            <td>Left</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>x</code></td>
            <td>Horizontal</td>
            <td>Paddings and margins</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Keyword</th>
            <th>Value</th>
            <th>Compatibility</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td width="100" align="center"><code>auto</code></td>
            <td>Auto</td>
            <td>Margins only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>0</code></td>
            <td>0</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>1</code></td>
            <td>10px</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>2</code></td>
            <td>20px</td>
            <td>Paddings only</td>
        </tr>
        <tr>
            <td width="100" align="center"><code>3</code></td>
            <td>30px</td>
            <td>Paddings only</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Spacing classes are responsive</strong> Bojler uses an intuitive <code>@&lt;breakpoint&gt;</code> (<code>@sm</code>) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.</p>
    <p>For example, if you want to apply <code>.u-pt-1</code> on small screens only you'll use this class: <code>.u-pt-1@sm</code>.</p>
</div>

<div class="callout callout--info">
    <p><strong>Spacing classes are customizable</strong> Spacing utilities are auto generated, you can modify and add or remove sizes and sides in <code>$spacers</code> and <code>$spacing-sides</code> maps inside <code>settings/core.scss</code> file.</p>
</div>

<div class="example">
    <a href="../examples/utilities/spacing.html" target="blank">Preview</a>
</div>
```html
<!--
This will add 10px padding to the left side of an element
and 20px padding to the bottom side of an element.
-->

<td class="u-pl-1 u-pb-2">
    Add some padding
</td>

<!--
This will add 30px padding to the left and right side
of an element (horizontaly).
-->

<td class="u-px-3">
    Add some padding
</td>

<!--
This will add `margin-left: auto;` and `margin-right: auto;`
to the specific element (horizontaly).
-->

<table class="u-mx-auto">
    This table should be centered.
</table>
```

## Typography
### Text color
Utilities for controlling the text color of an element.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-text-white</code></td>
            <td>Set the text color of an element to white.</td>
        </tr>
        <tr>
            <td><code>.u-text-black</code></td>
            <td>Set the text color of an element to black.</td>
        </tr>
        <tr>
            <td><code>.u-text-dark</code></td>
            <td>Set the text color of an element to dark.</td>
        </tr>
        <tr>
            <td><code>.u-text-red</code></td>
            <td>Set the text color of an element to red.</td>
        </tr>
        <tr>
            <td><code>.u-text-green</code></td>
            <td>Set the text color of an element to green.</td>
        </tr>
        <tr>
            <td><code>.u-text-blue</code></td>
            <td>Set the text color of an element to blue.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Text color classes are customizable</strong> Text color utilities are auto generated, you can modify and add or remove colors in <code>$colors</code> map inside <code>settings/core.scss</code> file.</p>
</div>

### Font weight
Utilities for controlling the font weight of an element.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-font-normal</code></td>
            <td>Set the font weight of an element to normal.</td>
        </tr>
        <tr>
            <td><code>.u-font-bold</code></td>
            <td>Set the font weight of an element to bold.</td>
        </tr>
    </tbody>
</table>

### Text alignment
Utilities for controlling the alignment of text.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-text-left</code></td>
            <td>Align text to the left.</td>
        </tr>
        <tr>
            <td><code>.u-text-right</code></td>
            <td>Align text to the right.</td>
        </tr>
        <tr>
            <td><code>.u-text-center</code></td>
            <td>Align text to the center.</td>
        </tr>
    </tbody>
</table>

<div class="callout callout--info">
    <p><strong>Text alignment classes are responsive</strong> Bojler uses an intuitive <code>@&lt;breakpoint&gt;</code> (<code>@sm</code>) suffix that makes it easy to notice responsive classes in your markup while keeping the original class name recognizable and intact.</p>
    <p>For example, if you want to apply <code>.u-text-center</code> on small screens only you'll use this class: <code>.u-text-center@sm</code>.</p>
</div>

### Style and decoration
Utilities for controlling the style of text.

<table>
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-italic</code></td>
            <td>Italicizes the text within an element.</td>
        </tr>
        <tr>
            <td><code>.u-roman</code></td>
            <td>Sets the text to roman (disables italics) within an element.</td>
        </tr>
        <tr>
            <td><code>.u-uppercase</code></td>
            <td>Makes all text uppercase within an element.</td>
        </tr>
    </tbody>
</table>
