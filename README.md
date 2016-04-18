# Slicejack Email Boilerplate
Slicejack Email Boilerplate is merely a guideline for writing HTML code that will render correctly across each of the most popular email clients.

## Table of contents
- [**Getting started**](https://github.com/Slicejack/slicejack-email-boilerplate#getting-started)
    + [*Use lite version of boilerplate*](https://github.com/Slicejack/slicejack-email-boilerplate#use-lite-version-of-boilerplate)
    + [*Follow email CSS guide*](https://github.com/Slicejack/slicejack-email-boilerplate#follow-this-email-css-guide)
    + [*Bring your styles inline*](https://github.com/Slicejack/slicejack-email-boilerplate#bring-your-styles-inline)
    + [*Test your email properly*](https://github.com/Slicejack/slicejack-email-boilerplate#test-your-email-properly)
    + [*Send your email properly*](https://github.com/Slicejack/slicejack-email-boilerplate#send-your-email-properly)
- [**Compatibility**](https://github.com/Slicejack/slicejack-email-boilerplate#compatibility)
- [**Grid system**](https://github.com/Slicejack/slicejack-email-boilerplate#grid-system)
    + [*Use grid version of boilerplate*](https://github.com/Slicejack/slicejack-email-boilerplate#use-grid-version-of-boilerplate)
    + [*Media queries*](https://github.com/Slicejack/slicejack-email-boilerplate#media-queries)
    + [*Grid options*](https://github.com/Slicejack/slicejack-email-boilerplate#grid-options)
    + [*Container*](https://github.com/Slicejack/slicejack-email-boilerplate#container)
    + [*Columns*](https://github.com/Slicejack/slicejack-email-boilerplate#columns)
    + [*First and last classes*](https://github.com/Slicejack/slicejack-email-boilerplate#first-and-last-classes)
    + [*Columns without gutter*](https://github.com/Slicejack/slicejack-email-boilerplate#columns-without-gutter)
- [**Credits**](https://github.com/Slicejack/slicejack-email-boilerplate#credits)
- [**License**](https://github.com/Slicejack/slicejack-email-boilerplate#license)

## Getting started
### Use lite version of boilerplate
First of all we suggest you to use `email-lite.html` for your email development because you should **avoid using comments** in your final email campaign. Else you may get blocked by SPAM filters.

### Follow [this](https://www.campaignmonitor.com/css/b/) email CSS guide
On [this link](https://www.campaignmonitor.com/css/b/) you can find a complete breakdown of the CSS support for the top 10 most popular mobile, web and desktop email clients on the planet. It is recommended to use it as often as possible.

### Bring your styles inline
Some email clients strip out `<head>` and `<style>` tags from emails, so it's best to have your CSS written inline within your markup. We know that writing inline CSS is time consuming and repetitive, so [@peterbe](https://www.peterbe.com/) built [this conversion tool](https://premailer.io/) to automatically inline your email's CSS.

### Test your email properly
Before you send your HTML email you should test it properly. We recommend you to use [Litmus](http://litmus.com) or [Email on Acid](https://www.emailonacid.com).

### Send your email properly
Best way to send your HTML email would be using an Email Service Provider (ESP) such as [MailChimp](http://www.mailchimp.com) or [Campaign Monitor](https://www.campaignmonitor.com/). If you’re just running a quick test we recommend you to use https://putsmail.com/

## Compatibility
We have tested this boilerplate on numerous email clients and devices. In table below you can see what's supported:

<table>
    <tr>
        <td><strong>Email clients</strong></td>
        <td><strong>Web email clients</strong></td>
        <td><strong>Mobile devices</strong></td>
    </tr>
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
</table>

## Grid system
Slicejack email boilerplate uses 12-column grid with a 600px container. On mobile devices (under 600px wide), columns become full width and stack vertically.

### Use grid version of boilerplate
We have created special `email-grid.html` file for email development with our grid. Basically it's a `email-lite.html` combined with grid CSS.

### Media queries
We suggest you to use this media query when building responsive email with our grid.

```css
@media screen and (max-width: 600px) {}
```

### Grid options
See how aspects of this grid work across devices with a handy table.
<table>
  <tr>
    <td></td>
    <td><strong>Small devices</strong> <i>(&lt;600px)</i></td>
    <td><strong>Large devices</strong> <i>(&gt;600px)</i></td>
  </tr>
  <tr>
    <td><strong>Grid behaviour</strong></td>
    <td>Horizontal</td>
    <td>Collapsed</td>
  </tr>
  <tr>
    <td><strong>Container width</strong></td>
    <td>100%</td>
    <td>600px</td>
  </tr>
  <tr>
    <td><strong>Number of columns</strong></td>
    <td colspan="2">12</td>
  </tr>
  <tr>
    <td><strong>Column width</strong></td>
    <td>100%</td>
    <td>50px</td>
  </tr>
  <tr>
    <td><strong>Gutter width</strong></td>
    <td colspan="2">20px <i>(10px on each side of a column)</i></td>
  </tr>
</table>

### Container
All emails should have a container element. This gives the email a maximum width for email clients on larger screens. It also orients the email in the center.

*Example:*
```html
<table class="container" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td></td>
    </tr>
</table><!-- /.container -->
```

### Columns
Content should be placed within columns, and columns should be placed as `<td>` of your `.container`.
You can define width of the column with classes such as `.column-1`, `.column-2`, `.column-3` etc.
In `.container` you can place max. 12 columns.

*Examples:*
```html
<table class="container" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-12 first last">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

![Column 12](http://i.imgur.com/qhGENuF.jpg)

```html
<table class="container" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-6 first">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-6 last">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

![Column 6](http://i.imgur.com/FWefkpW.jpg)

```html
<table class="container" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-3 first">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-3">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-3">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-3 last">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

![Column 3](http://i.imgur.com/dDQ2vZ6.jpg)

### First and last classes

The `.first` class adds the appropriate amount of padding-left to space the content away from the container’s edge. The `.last` class is added to your last set of columns in a row to add padding-right to the column. If you have columns in between `.first` and `.last`, these classes are not needed on the middle columns.

The reason these classes exist is that CSS properties like `:last-child` don’t work in most email clients so a class is needed.

*Example:*
```html
<table class="container" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-4 first">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-4">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-4 last">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

![Column 4](http://i.imgur.com/NiibAQi.jpg)

### Columns without gutter

If you need columns without gutter than you should use `.no-gutter` class on your `.container`.

*Example:*
```html
<table class="container no-gutter" border="0" cellpadding="0" cellspacing="0">
    <tr>
        <td class="column-6">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->

        <td class="column-6">
            <table border="0" cellpadding="0" cellspacing="0">
                <tr>
                    <td>Content goes here</td>
                </tr>
            </table>
        </td><!-- /.col -->
    </tr>
</table><!-- /.container -->
```

![No gutter](http://i.imgur.com/SZnAkvM.jpg)

## Credits
Special thanks to: 
- [Sean Powell](https://github.com/seanpowell/Email-Boilerplate)
- [Ian Hoar](http://www.ianhoar.com/)
- [James White](https://blog.jmwhite.co.uk)
- [Campaign Monitor](https://www.campaignmonitor.com/)
- [MailChimp](http://www.mailchimp.com/)
- [Email on Acid](http://www.emailology.org/#1)
- [Litmus](http://litmus.com)
- [Bringinteraktiv](http://removebluelinks.com)
- [Zurb Foundation](http://foundation.zurb.com/emails.html)
- [Peter Bengtsson](https://www.peterbe.com/)

## License
All contents of this boilerplate are licensed under the [MIT license](https://github.com/Slicejack/slicejack-email-boilerplate/blob/master/LICENSE).