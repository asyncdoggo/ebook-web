# A comprehensive guide to web development

This a documentation by the developers of GDSC MMCOE, Pune.

This is a document will provide a brief introduction to web development and technologies. By following through we intend to make you aware of several concepts related to web and internet while maintaining a simple language for everyone to comprehend.

## Chapters

1. [Introduction](#1-introduction)
2. [Basics](#2-basics)

    2.1 [HTML](#2.1-html)

    2.2 [CSS](#2.2-CSS)

    2.3 [JavaScript](#2.3-javascript)

    2.4 [Advanced JS](#2.4-advanced-js)

    2.5 [Data Validation](#2.5-data-validation)

3. [Responsive Web Design](#3-responsive-web-design)

4. [Libraries](#4-libraries)

5. [Web Architecture](#5-web-architecture)

6. [Frontend](#6-frontend)

7. [Backend](#7-backend)

8. [Database](#8-database)

9. [Authentication and Authorization](#9-authentication-and-authorization)

10. [Git and Github](#10-git-and-github)

11. [Resources](#11-resources)

## 1. Introduction

Web development is the process of creating websites and web applications. Think of a website as a house, and web development as the construction process. Just as a house needs a blueprint and a team of builders, a website needs a design and a team of developers.

There are three main areas of web development: front-end, back-end, and full-stack.

Front-end development focuses on the parts of a website that users interact with, such as the layout, colors, fonts, and buttons. It involves using programming languages like HTML, CSS, and JavaScript to create the visual and interactive elements of a website. An example of front-end development would be designing a website's homepage to look visually appealing and user-friendly.

Back-end development focuses on the parts of a website that users don't see, such as the server and database that store and process data. It involves using programming languages like PHP, Python, and Ruby to create the logic and functionality that power a website. An example of back-end development would be creating a system that allows users to log in to a website and store their account information securely.

Full-stack development involves working on both the front-end and back-end of a website or application. This means that a full-stack developer can create both the visual and interactive parts of a website as well as the behind-the-scenes logic and functionality. An example of full-stack development would be building a website from scratch, starting with the design and layout, and then adding the necessary programming to make it work smoothly and securely.

## 2. Basics

### 2.1 HTML

HTML stands for "HyperText Markup Language," and it is used to create web pages. An HTML document is made up of a series of elements that define the structure and content of the page.

The basic structure of an HTML document looks like this:

```HTML
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <p>Paragraph text goes here.</p>
  </body>
</html>
```

Here's what each part of the structure does:

`<!DOCTYPE html>` - This is called a doctype declaration, and it tells the browser which version of HTML the page is using. In this case, it's HTML5.

`<html>` - This element is the root element of the page, and it contains all the other elements on the page.

`<head>` - This element contains information about the page that is not displayed to the user, such as the page title, metadata, and links to external resources.

`<title>` - This element is used to specify the title of the page, which is displayed in the browser's title bar.

`<body>` - This element contains all the visible content of the page, such as headings, paragraphs, images, and links.

`<h1>` - This is a heading element, and it is used to create a main heading for the page.

`<p>` - This is a paragraph element, and it is used to create blocks of text on the page.

That's a basic overview of the structure of an HTML document. Of course, there are many more elements and attributes you can use to create more complex pages we will now see the most commonly used ones:

Before we dive into commonly used HTML elements, let's first define what an attribute is.

In HTML, an attribute provides additional information about an element. Attributes are used to specify characteristics of an element, such as its size, color, position, or behavior. They can be added to any HTML element using the element's opening tag, and they are written as name-value pairs.

Here are some commonly applied attributes in HTML, along with their purposes:

### `id` attribute

The `id` attribute is used to uniquely identify an element on a web page. It is used to reference the element in CSS or JavaScript, making it easier to apply styles or behaviors to that specific element. The `id` attribute value should be unique on a page, meaning no two elements on the page should have the same `id` value.

Example:

```HTML
<div id="header">
  <h1>Welcome to my Website</h1>
</div>
```

### `class` attribute

The `class` attribute is used to identify a group of elements that share the same characteristics. It is used to apply a style or behavior to multiple elements at once. The `class` attribute value can be reused on different elements throughout the page.

Example:

```HTML
<div class="container">
  <h2 class="title">My Blog</h2>
  <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
</div>
```

### `style` attribute

The `style` attribute is used to apply inline styles to an element. Inline styles override any styles applied to the element through CSS. The `style` attribute value should be a semicolon-separated list of CSS property-value pairs.

Example:

```HTML
<div style="background-color: #F0F0F0; color: #333; font-size: 18px;">
  <p>This text is styled inline.</p>
</div>
```

These attributes are commonly used to add structure, style, and behavior to HTML elements. Knowing how and when to use them can help you create well-organized and visually appealing web pages.\
\
\
Now Lets take a look at tags

### `<div>` tag

The HTML `<div>` tag is a very useful and flexible tag that allows you to group together other HTML elements and apply styles or JavaScript functions to them as a unit. It doesn't have any specific meaning on its own, but it acts as a container for other elements, which can be useful for organizing and structuring your code.

Here's an example of how you might use the `<div>` tag:

```HTML
<div class="container">
  <h1>Welcome to my website!</h1>
  <p>This is a paragraph of text.</p>
</div>
```

### `<p>` tag

The `<p>` tag in HTML is used to create a paragraph of text. It is an inline element, meaning it is typically used within block-level elements like `<div>` or `<section>` to separate text into paragraphs.

Here is an example of the `<p>` tag in use:

```HTML
<div>
  <p>This is a paragraph of text.</p>
  <p>This is another paragraph of text.</p>
</div>
```

In this example, two paragraphs of text are contained within a `<div>` element. Each paragraph is enclosed in its own set of `<p>` tags.

### `<img>` tag

The `<img>` tag in HTML is used to display an image on a web page. It is an empty element, meaning it does not require a closing tag. Instead, its properties are specified using attributes.

Here are some commonly used attributes of the `<img>` tag:

- `src`: This attribute is used to specify the URL of the image file that should be displayed.

- `alt`: This attribute is used to provide alternative text for the image. The text will be displayed if the image cannot be loaded, or if the user is using a screen reader.

- `width` and `height`: These attributes are used to specify the width and height of the image, in pixels.

Here is an example of the `<img>` tag in use:

```HTML
<img src="https://example.com/images/puppy.jpg" alt="A cute puppy" width="500" height="400">
```

In this example, the `<img>` tag displays an image of a puppy. The `src` attribute specifies the URL of the image file, while the `alt`, `width`, and `height` attributes provide additional information about the image.

### `<a>` tag

The `<a>` tag in HTML is used to create a hyperlink to another web page or resource. It can also be used to create links to email addresses or other types of files.

Here are some commonly used attributes of the `<a>` tag:

- `href`: This attribute is used to specify the URL of the web page or resource that the link should point to.

- `target`: This attribute is used to specify where the linked page should be displayed. For example, it can be set to "_blank" to open the linked page in a new browser tab or window.

- `title`: This attribute is used to provide additional information about the link. It is often displayed as a tooltip when the user hovers their mouse over the link.

Here is an example of the `<a>` tag in use:

```HTML
<a href="https://example.com" target="_blank" title="Visit Example.com">Visit Example.com</a>
```

In this example, the `<a>` tag creates a hyperlink to the website "example.com". The `href` attribute specifies the URL of the website, while the `target` attribute opens the website in a new browser tab or window. The `title` attribute provides additional information about the link.

### list tags

HTML provides three types of list tags: `<ul>`, `<ol>`, and `<li>`.

- The `<ul>` tag is used to create an unordered list. This means that the items in the list are not numbered, and are typically displayed with bullet points or some other type of symbol.

- The `<ol>` tag is used to create an ordered list. This means that the items in the list are numbered, starting from 1 by default.

- The `<li>` tag is used to create list items. Each individual item in a list should be wrapped in an `<li>` tag.

Here is an example of an unordered list:

```HTML
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

In this example, the `<ul>` tag creates an unordered list. Each individual list item is represented by an `<li>` tag.

Here is an example of an ordered list:

```HTML
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

In this example, the `<ol>` tag creates an ordered list. Each individual list item is represented by an `<li>` tag.

And finally, here is an example of nested lists:

```HTML
<ul>
  <li>Item 1
    <ul>
      <li>Sub-item 1</li>
      <li>Sub-item 2</li>
    </ul>
  </li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### `<script>` and `<style>` tags

HTML also provides `<script>` and `<style>` tags which are used to include scripts and styles in an HTML document.

- The `<script>` tag is used to include client-side scripts, typically JavaScript. The contents of this tag are executed by the client's web browser. The `src` attribute can be used to specify an external script file to include.

Here is an example of including a script in an HTML document:

```HTML
<script>
  function myFunction() {
    alert("Hello World!");
  }
</script>
```

In this example, the contents of the `<script>` tag define a JavaScript function. This function will be executed when called from other JavaScript code or from an HTML event attribute.

Here is an example of including an external script file:

```HTML
<script src="myscript.js"></script>
```

In this example, the `src` attribute is used to specify an external JavaScript file to include.

- The `<style>` tag is used to define styles for an HTML document. These styles can be used to control the appearance of elements on the page. The `type` attribute should be set to "text/css" to indicate that the contents of the tag are CSS code.

Here is an example of defining styles using a `<style>` tag:

```HTML
<style type="text/css">
  body {
    background-color: lightblue;
  }
  h1 {
    color: navy;
    font-size: 24px;
  }
</style>
```

In this example, the contents of the `<style>` tag define CSS styles for the `<body>` and `<h1>` elements.

### `<form>` tag

The `<form>` tag is used to create an HTML form for user input. The form can be used to submit data to a server for processing.

Here is an example of a simple form:

```HTML
<form action="/process-form" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <input type="submit" value="Submit">
</form>
```

In this example, the form has an `action` attribute that specifies where the form data will be sent when it is submitted. The `method` attribute specifies whether the data should be submitted using the HTTP POST or GET method.

The form contains two input fields for the user to enter their name and email address. The `label` element is used to provide a description for each input field. The `for` attribute of the `label` element should match the `id` attribute of the corresponding input field.

The form also contains a submit button that the user can click to submit the form data to the server.

The example above is just a simple form. In practice, HTML forms can contain many different types of input fields and may be used for a wide variety of purposes.

### `<table>` tag

The `<table>` tag is used to create an HTML table.

Here is an example of a simple table:

``` html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>25</td>
      <td>Male</td>
    </tr>
    <tr>
      <td>Jane</td>
      <td>30</td>
      <td>Female</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>42</td>
      <td>Male</td>
    </tr>
  </tbody>
</table>
```

In this example, the `<table>` tag defines the beginning and end of the table. The `<thead>` tag is used to define the header section of the table, which contains the column headings. The `<tr>` tag is used to define each row of the table, and the `<th>` tag is used to define each cell of the header row.

The `<tbody>` tag is used to define the body section of the table, which contains the actual data. Each row of data is defined using the `<tr>` tag, and each cell of the row is defined using the `<td>` tag.

Additionally, the `<table>` tag can have several attributes to customize its appearance and behavior, including:

- `border`: Specifies the width of the border around the table. Default is 0.
- `cellpadding`: Specifies the amount of space between the cell content and the cell borders. Default is 1.
- `cellspacing`: Specifies the amount of space between cells. Default is 2.
- `width`: Specifies the width of the table in pixels or percentage.
- `height`: Specifies the height of the table in pixels or percentage.
- `align`: Specifies the horizontal alignment of the table within its container. Valid values are "left", "center", or "right".
- `bgcolor`: Specifies the background color of the table.

### 2.2 CSS

CSS is like the fashion designer of the internet world. It's the one that takes plain and boring web pages and makes them stylish and beautiful, just like how fashion designers transform plain fabrics into amazing clothing.

With CSS, you can add colors, fonts, images, and layouts to your website. It's like choosing the right accessories, shoes, and makeup to match your outfit. You can even make certain elements move, just like how models strut down the runway.

And just like how fashion designers have their own unique styles, you can customize your CSS to create a unique look and feel for your website. It's all about expressing yourself and making your website stand out from the crowd.

So if you want your website to look sharp, stylish, and fashionable, CSS is your go-to tool!

### Selectors

Selection by class, tag, and ID are three different ways of targeting specific elements in CSS.

Selection by class:
Classes are used to group elements that have something in common. To select an element with a particular class, you can use the class selector (`.`) followed by the class name.

Example:

```html
<div class="box">This is a box</div>
```

```css
.box {
  background-color: #ccc;
  padding: 10px;
}
```

In this example, we are targeting the element with class "box" and applying a gray background color and 10px padding.

Selection by tag:
Tags refer to the HTML tags that define elements on a web page. To select all elements of a particular tag, you can use the tag selector followed by the tag name.

Example:

```html
<h1>Header 1</h1>
<p>This is a paragraph</p>
```

```css
h1 {
  color: blue;
}

p {
  font-size: 16px;
}
```

In this example, we are targeting the `h1` and `p` tags and applying different styles to each. The `h1` tag will have blue text color, while the `p` tag will have a font size of 16px.

Selection by ID:
IDs are used to uniquely identify an element on a web page. To select an element with a particular ID, you can use the ID selector (`#`) followed by the ID name.

Example:

```html
<div id="header">This is the header</div>
```

```css
#header {
  background-color: #333;
  color: #fff;
  padding: 10px;
}
```

In this example, we are targeting the element with ID "header" and applying a black background color, white text color, and 10px padding.

### Descendant selector

Selecting the inner item of a selected item in CSS is known as a descendant selector. It allows you to target an element that is nested inside another element, and apply styles specifically to that inner element.

For example, let's say you have an HTML structure like this:

```html
<div class="outer">
  <h2>Heading</h2>
  <p>Paragraph</p>
</div>
```

If you want to style the `p` element specifically when it is inside the `div` element with class `outer`, you can use the descendant selector like this:

```css
.outer p {
  color: red;
}
```

This will apply the `color: red;` style only to the `p` element that is a descendant of the `div` element with class `outer`.

Another example, let's say you have an HTML structure like this:

```html
<ul>
  <li>List Item 1
    <ul>
      <li>Sub-Item 1</li>
      <li>Sub-Item 2</li>
    </ul>
  </li>
  <li>List Item 2</li>
</ul>
```

If you want to style the `li` elements that are nested inside the inner `ul` element, you can use the descendant selector like this:

```css
ul ul li {
  font-weight: bold;
}
```

This will apply the `font-weight: bold;` style only to the `li` elements that are descendants of the inner `ul` element.

### `display: flex`

`display: flex` is a value for the CSS `display` property that allows you to create flexible and responsive layouts. It works by setting a parent container as a flex container, which enables you to easily manipulate the layout and alignment of its child elements.

Here's a simple example of how to use `display: flex` to center a child element within a parent container:

```html
<div class="container">
  <div class="child">Hello World!</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.child {
  background-color: blue;
  color: white;
  padding: 10px;
}
```

In this example, `display: flex` is used to create a flex container for the parent `div` element with class `.container`. The `justify-content` and `align-items` properties are used to center the child element both horizontally and vertically. The child element itself has a blue background color, white text color, and some padding.

### `display: block`

`display: block` is a value for the CSS `display` property that is used to make an element behave as a block-level element. Block-level elements take up the full width of their parent container by default, and each element is placed on a new line.

Here's an example of how to use `display: block` to create a simple form:

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  <button type="submit">Submit</button>
</form>
```

```css
form {
  display: block;
}

label {
  display: block;
  margin-bottom: 10px;
}

input {
  display: block;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}

button {
  display: block;
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
```

In this example, `display: block` is used to make each form element behave as a block-level element. The `label` elements are displayed as block-level elements with a bottom margin to create some space between each label and input. The `input` elements are also displayed as block-level elements with a width of 100% to fill the full width of their parent container. Finally, the `button` element is displayed as a block-level element and given some styling to make it stand out.

### `display: inline`

`display: inline` is a value for the CSS `display` property that is used to make an element behave as an inline-level element. Inline-level elements only take up as much width as they need to display their content, and multiple inline-level elements can appear on the same line.

Here's an example of how to use `display: inline` to create a simple navigation menu:

```
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

```
nav {
  display: block;
}

a {
  display: inline;
  margin-right: 10px;
  text-decoration: none;
  color: blue;
}
```

In this example, `display: inline` is used to make the anchor elements (`<a>`) behave as inline-level elements so that they appear on the same line. The `margin-right` property is used to create some space between each link, and the `text-decoration` and `color` properties are used to style the links. The parent `nav` element is set to `display: block` to ensure that it takes up the full width of its parent container.

### `display: inline-block`

`display: inline-block` is a value for the CSS `display` property that combines the features of both `display: inline` and `display: block`. Elements with `display: inline-block` are similar to inline-level elements in that they take up only as much width as they need to display their content, but they can also have a fixed width, height, and padding, similar to block-level elements.

Here's an example of how to use `display: inline-block` to create a simple navigation menu with a fixed width and height:

```html
<nav>
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
```

```css
nav {
  display: block;
  width: 100%;
}

a {
  display: inline-block;
  width: 100px;
  height: 50px;
  padding: 10px;
  text-align: center;
  background-color: blue;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-right: 10px;
}
```

In this example, the `nav` element is displayed as a block-level element with a width of 100%. Each `a` element within the navigation menu is displayed as an inline-block element with a fixed width of 100px, a height of 50px, and some padding to create space around the text. The background color, text color, and other styling are added to make the navigation menu look more appealing. The `margin-right` property is used to create some space between each navigation link.

### Positioning

CSS Positioning allows you to control the position and layout of elements on your webpage. There are three commonly used position values: absolute, relative, and fixed.

### Relative

Relative positioning is the default positioning value for most HTML elements. With relative positioning, an element's position is based on its original position in the HTML document. So, if you add `position: relative` to an element and then use the `top`, `bottom`, `left`, or `right` properties to adjust its position, it will move relative to its original position. This means that other elements on the page will still flow around it, even if it's moved.

Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        position: relative;
        left: 50px;
        top: 50px;
        background-color: blue;
        height: 100px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <p>This is some text.</p>
  </body>
</html>
```

In this example, we have a `div` element with the class `box`. We've set its `position` to `relative`, which means that it will be positioned relative to its original position in the HTML document.

We've also set its `left` and `top` properties to `50px`, which means that it will move 50 pixels to the right and 50 pixels down from its original position.

The `background-color`, `height`, and `width` properties are just styling properties to give the box a blue background color and a height and width of 100 pixels.

Below the `div` element, we have a paragraph (`<p>`) element with some text in it. Since the `div` element has relative positioning, the paragraph element will flow around it, as if the `div` element were still in its original position.

### Absolute

With absolute positioning, an element's position is based on its closest positioned ancestor element. If an ancestor element is not positioned (i.e., it doesn't have a `position` property set to `relative`, `absolute`, or `fixed`), then the element will be positioned relative to the `html` element.

Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        position: absolute;
        top: 50px;
        right: 50px;
        background-color: blue;
        height: 100px;
        width: 100px;
      }

      .container {
        position: relative;
        height: 200px;
        width: 200px;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box"></div>
    </div>
    <p>This is some text.</p>
  </body>
</html>
```

In this example, we have a `div` element with the class box. We've set its position to absolute, which means that it will be positioned relative to its closest positioned ancestor element.

The closest positioned ancestor element is the `div` element with the class container. We've set its `position` to `relative`, which means that it will be the closest positioned ancestor element for the `div` with class `box`. We've also set its `height`, `width`, and `border` properties to give it some dimensions and a visible border.

We've set the `top` and `right` properties of the `box` element to `50px`, which means that it will be positioned 50 pixels from the top of its closest positioned ancestor element (i.e., the top of the `container` element) and 50 pixels from the right of its closest positioned ancestor element (i.e., the right side of the `container` element).

The `background-color`, `height`, and `width` properties are just styling properties to give the box a blue background color and a height and `width` of 100 pixels.

Below the `div` element, we have a paragraph `<p>` element with some text in it. Since the `div` element with class `container` has relative positioning, the paragraph element will flow around it, as if the `div` element were still in its original position.

### Fixed

With `position: fixed`, an element is positioned relative to the viewport, which means that it will stay in the same position even if the page is scrolled.

Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        position: fixed;
        top: 50px;
        right: 50px;
        background-color: blue;
        height: 100px;
        width: 100px;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <p>This is some text.</p>
  </body>
</html>
```

In this example, we have a `div` element with the class `box`. We've set its `position` to `fixed`, which means that it will be positioned relative to the viewport (i.e., the browser window), and will not move when the user scrolls the page.

We've set the `top` and `right` properties of the `box` element to `50px`, which means that it will be positioned 50 pixels from the top of the viewport and 50 pixels from the right of the viewport.

The `background-color`, `height`, and `width` properties are just styling properties to give the box a blue background color and a height and width of 100 pixels.

Below the `div` element, we have a paragraph (`<p>`) element with some text in it. Since the `div` element has fixed positioning, the paragraph element will flow behind it, as if the `div` element were not there at all.

### Padding and Margin

- `margin`: Margin refers to the space between an element and its neighboring elements. It is used to create space around an element and to separate it from other elements on the page. Margin is specified using the `margin` property, and you can set values for the top, right, bottom, and left margins individually, or use shorthand notation to set all four margins at once.

- `padding`: Padding refers to the space between an element's content and its border. It is used to create space within an element, and to separate the element's content from its border. Padding is specified using the `padding` property, and like `margin`, you can set values for the top, right, bottom, and left padding individually, or use shorthand notation to set all four paddings at once.

Here's an example of using `margin` and `padding` in CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        margin: 20px;
        padding: 10px;
        background-color: blue;
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="box">This is some text inside a box.</div>
  </body>
</html>
```

In this example, we have a `div` element with the class `box`. We've set its `margin` to `20px`, which creates a margin of 20 pixels around the entire box. We've set its `padding` to `10px`, which creates padding of 10 pixels between the content and the border of the box.

We've also set the `background-color` to blue and the `color` to white, so the text inside the box is white on a blue background.

I hope this example helps you understand how `margin` and `padding` work! Let me know if you have any other questions.

### `flex-column` and `flex-row`

- `flex-column`: `flex-column` is a value for the `flex-direction` property. It is used to create a vertical flex container, meaning that the flex items are laid out vertically from top to bottom. With `flex-column`, the main axis is vertical and the cross axis is horizontal.

- `flex-row`: `flex-row` is also a value for the `flex-direction` property. It is used to create a horizontal flex container, meaning that the flex items are laid out horizontally from left to right. With `flex-row`, the main axis is horizontal and the cross axis is vertical.

Here's an example of using `flex-column` and `flex-row` in CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
        flex-direction: row; /* this could also be flex-row */
        justify-content: center;
        align-items: center;
        height: 300px;
        background-color: lightgray;
      }

      .item {
        width: 50px;
        height: 50px;
        margin: 10px;
        background-color: white;
      }
    </style>
  </head>
  <body>
    <h2>Flex Column</h2>
    <div class="container" style="flex-direction: column;">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>

    <h2>Flex Row</h2>
    <div class="container" style="flex-direction: row;">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </body>
</html>
```

In this example, we have a `div` with the class `container` that has three child elements with the class `item`. We've set the `display` property of the `container` to `flex`, which creates a flex container, and we've set the `flex-direction` property to `row` for the first container and `column` for the second container.

We've also set the `justify-content` property to `center` and the `align-items` property to `center`, which centers the flex items both horizontally and vertically within the container.

Finally, we've given the `item` elements a width and height, some margin, and a white background color, so they're visible within the container.

I hope this example helps you understand how `flex-column` and `flex-row` work! Let me know if you have any other questions.

### Pseudo Elements

Pseudo-elements and pseudo-classes are CSS selectors that allow you to style specific parts of an HTML element.

Pseudo-elements are used to style a specific part of an element, such as the first line of text or the first letter of a paragraph. They are denoted by double colons (::) preceding the element name, and the most common ones are `::before` and `::after`. For example, you can use `::before` to add content before an element and `::after` to add content after an element.

Example:

```CSS
p::before {
  content: "Read this: ";
}
```

This will add the text "Read this: " before every paragraph on the page.

Pseudo-classes, on the other hand, are used to style an element based on its state, such as when the user hovers over it or clicks on it. They are denoted by a colon (:), and some of the most common ones are `:hover`, `:active`, `:focus`, and `:visited`.

Example:

```CSS
a:hover {
  color: red;
}
```

This will change the color of a hyperlink to red when the user hovers over it.

Combined, pseudo-elements and pseudo-classes can be used to create powerful and dynamic CSS effects that can enhance the user experience of a website.

### Media Query

Media queries are a powerful feature of CSS that allow you to apply different styles to your web page based on the size and characteristics of the device it is being viewed on. With media queries, you can make your web page look great on any device, from a small smartphone screen to a large desktop monitor.

Media queries are written using the `@media` rule, which has a similar syntax to other CSS rules. Inside the `@media` rule, you specify the conditions under which the styles inside the rule should be applied.

Here's an example of a media query that applies a different background color to the body element when the screen width is less than or equal to 768 pixels:

```CSS
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

In this example, `(max-width: 768px)` is the condition that must be true for the styles inside the media query to be applied. In this case, the condition is that the maximum width of the viewport is 768 pixels or less. If this condition is true, then the styles inside the media query (which in this case apply a light blue background color to the body element) will be applied.

Media queries can be used to apply a wide range of styles to your web page based on the characteristics of the device it is being viewed on. For example, you can use media queries to adjust font sizes, hide or show certain elements, or change the layout of your page based on the screen size.

### 2.3 JavaScript

content here

### 2.4 Advanced JS

content here

### 2.5 Data Validation

content here

## 3. Responsive Web Design

content here

## 4. Libraries

## 5. Web Architecture

Web architecture refers to the underlying structure and organization of web-based systems and applications. It includes the technologies, protocols, and standards used to build, communicate, and interact with web-based resources such as websites, web applications, and web services.

At a high level, web architecture can be thought of as consisting of three primary components: client, server, and network. The client is typically a web browser or other application that requests resources from a server. The server is a computer system that responds to client requests by serving up web pages or other content. The network is the infrastructure that connects clients and servers together, allowing them to communicate.

One common example of web architecture is the classic client-server model. In this model, a web browser (the client) sends a request to a web server for a web page or other resource. The server processes the request and sends back a response, which the client then displays to the user. The two communicate using the HTTP protocol, which is a set of rules for transmitting data over the web.

Web architecture also encompasses various other technologies and standards, such as HTML (Hypertext Markup Language) for structuring web content, CSS (Cascading Style Sheets) for styling web pages, and JavaScript for adding interactivity to web applications. In addition, there are numerous web frameworks and libraries available that can simplify web development and make it more efficient.

## 6. Frontend

Front-end web development is the development of the graphical user interface of a website. The frontend is where the design comes to life in a beautiful combination of HTML, CSS, and JavaScript.

Frontend is not only about making a user interface, but it is also about User experience. Frontend deals with presentation and making an interface that attracts users while maintaining utility.

Frontend can be looked at in two parts:

1. User expeirence/design:

    The design of a frontend application is just as important as any other part. Without a good design any application will look dull. A good design should be interactive, should use appropriate animations and make proper use of fonts and colors. There are many more aspets to user experience one can think of.

2. User Interface:

    The user interface is the part of the frontend that is interactable such as buttons, textbox, etc. It deals with handling the data in the application. It decides and defines actions performed based on an event. A simple example of this would be clicking a button to change theme.

A frontend application has another very important task:- Talking to the backend and manupilating data using APIs.

### Frontend Frameworks

Front-end frameworks have been gaining popularity in recent years as web development has become more complex and demanding. These frameworks offer a set of tools and conventions for building user interfaces and interactive web applications, allowing developers to work more efficiently and effectively.

A front-end framework is a collection of pre-built and reusable tools, libraries, and technologies used to facilitate the creation of consistent and visually appealing user interfaces for web applications.

These frameworks include various features such as pre-designed UI components, responsive layouts, and CSS styling, which help developers to create web applications with minimal effort and time.

Some popular front-end frameworks include React, Angular, Vue.js and Materialize. These frameworks provide developers with a set of tools that enable them to focus on writing application logic rather than reinventing the wheel with respect to the user interface.

A frontend framework makes managing a user interface easy. It helps by encapsulating components with the help of functions and classes.

These functions and classes makes it easier to reuse code properly without worrying of clashing of variables or creating redundancy.

### Examples of frameworks

Angular, React, and Vue is three of the most popular front-end frameworks used in modern web development. While they have many similarities, they also have some key differences that set them apart.

Lets take a look at these frameworks:

1. Angular:

    Angular is a full-fledged front-end framework developed by Google. It is a complete set of tools and features for building large-scale applications.

- It has a steep learning curve due to complex architecture and dependency injection
- It is a full-fledged framework with a complete set of tools and features for building large-scale applications
- It has very good performance
- It has large community support, but has decreased in recent years
- It uses a template-based approach for defining the UI

2. Vue:

    Vue is a lightweight front-end framework that focuses on the view layer. It has gained popularity in recent years due to its simplicity and ease of use.

- It is easy to learn and understand with a simple template syntax
- It is a lightweight framework that focuses on the view layer
- It gives good performance
- It has a strong community support, but smaller than React
- It uses a hybrid development approach that combines the template syntax with a reactive data-binding system

3. React:

    React is a library for building user interfaces. It is developed by Facebook and is known for its component-based approach and high performance.

- It has a moderate learning curve, especially for developers already familiar with JavaScript
- It is a library with a component-based approach and a focus on performance
- It is fastest among the three frameworks in terms of performance
- It has the largest community support among the three frameworks
- It uses a component-based approach for breaking down the UI into reusable components

## 7. Backend

### What is backend, why is it required?

The term backend typically refers to the part of an application that handles the logic and data processing behind the scenes. This includes things like database management, server-side scripting etc.
A backend is required in many applications because it handles the logic and processing that is necessary to provide a complete and functional user experience. Here are a few examples of why a backend is needed in different types of applications:

1. E-commerce website: An e-commerce website requires a backend to handle the processing of orders, inventory management, and payment processing. When a user places an order on the website, the backend must manage the inventory to ensure that the product is available, process the payment securely, and generate an order confirmation for the user.

2. Social media platform: A social media platform requires a backend to manage user profiles, posts, and interactions. When a user creates a post, the backend must store the content and metadata associated with the post, and make it available to other users who have permission to view it.

3. Mobile app: A mobile app requires a backend to handle data synchronization, user authentication, and storage of user preferences. When a user uses a mobile app, the backend must ensure that the user's data is synchronized across devices, verify the user's identity, and store user preferences so they are available the next time the user uses the app.

### Let us understand how it works and how frontend interacts with backend

Before we do we need to see what HTTP methods are:
HTTP methods are a way for clients (such as web browsers) and servers to communicate with each other over the internet. HTTP stands for Hypertext Transfer Protocol, which is the protocol used for transmitting data over the web.

There are several HTTP methods, also known as HTTP verbs, that are used for different types of requests:

1. GET: Used to retrieve information from a server. When a user visits a website, their web browser sends a GET request to the server to retrieve the webpage.

2. POST: Used to submit information to a server, such as when filling out a form. When a user submits a form on a website, their web browser sends a POST request to the server with the form data.

3. PUT: Used to update or replace existing information on a server. For example, a PUT request could be used to update a user's profile information.

4. DELETE: Used to delete information from a server. For example, a DELETE request could be used to delete a user's account.

5. PATCH: Used to make a partial update to existing information on a server. For example, a PATCH request could be used to update only a specific field in a user's profile.

6. HEAD: Similar to a GET request, but only retrieves the headers of the response, not the body.

A sample http request will look like this

``` http
GET /example.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
```

Here first line is the method and url, the url is relative.

Next few values such as Host, User-Agent etc are the headers, headers are used to pass additional information and configuration data.

### Let’s see how a backend looks like in terms of a program

Without going to a specific language here is a pseudocode for a simple backend. It represenents the common structure of popular backend technology.

```bash
server = CreateServer()

server.handle(“/”, handleindex)

function handleindex(request, response){
 response.send(“index.html”)
} 

Server.listen()
```

Every server starts with initialization, in the above example `createServer` is the function that creates the server object

`Server.handle` is the function that binds the path "/" of the URL to the given function, here it is the `handleindex` function

Whenever someone will visit the path "/" the server will run the `handleindex` function.

This function receives two parameters
`request` and `response`

`request` is the request object which will contain information such as body, method, headers etc

This is where data sent from a frontend is found

`response` is the response object that function will send. We can put data and other fields in response and send it back to the frontend that calls the request.

Here we are sending index.html file to the frontend through response.

You may have guessed by now that this request is called by user webpage through browser hence, we send/render the html file.

GET method is usually used to request data from the server, GET is not very secure since the values passed through GET are visible in URL, example:
<http://example.com/search?q=hello>

Here q is passed to the server with value hello this is visible in URL, GET should never be used to send sensitive data.

It is used to request for data and information passed through GET should only be related to the data that is being retrieved.

POST,PUT and DELETE are typically used to send data to the server, neither of these methods show data in the URL but that does not make them secure automatically, one can still see the request body and find sensitive information.

You should always use HTTPS when sending sensitive information like passwords, keys etc.

APIs:
APIs stand for application programming interface. In simple terms it means that an API is a function or in case of web a URL that is used to communicate with applications.

A simple example of API in case of web is as follows:

<https://www.example.com/users>

This URL is an API. Which means that if we send a GET request then the server handling the URL will send back data to us.

Similarly if we send a POST request to that URL it will do some different action.

### RESTful APIs

REST stands for REpresentational State Transfer

REST is a design principle which states that a server should make use of 4 http methods for 4 purposes as follows:

1. GET: For retrieval of data
2. POST: To create new object or to add new data to the server
3. PUT/PATCH: To update data on the server
4. DELETE: To remove data from the server

REST is not just these 4 methods there are other principles that come within REST design.
(see <https://restfulapi.net/>).

REST APIs are widely used for building web and mobile applications, as well as integrating different software systems.
They provide a flexible and scalable way to transfer data between applications, making it easier to build complex systems and enable new types of interactions between different parts of an application or between different applications.

### What are some of the most popular backend languages?

There are many but lets take a brief look at a few:

1. __Nodejs__:
NodeJs is a backend programming language that is based on JavaScript. It's used for creating web applications and server-side code. NodeJs is known for its fast performance, scalability, and non-blocking I/O operations. It's commonly used for creating real-time applications, such as chat applications, gaming platforms, and social media platforms.

2. __Python__:
Python is a versatile programming language that is used for web development, scientific computing, data analysis, and machine learning. Python has a simple syntax and a large standard library, making it easy to learn and use. It's commonly used for backend web development, data processing, and automation tasks. Python is also popular in the machine learning and data science fields.

3. __Java__:
Java is a popular programming language that is used for developing enterprise-level applications, including web applications and mobile applications. Java is known for its portability, security, and scalability. It's commonly used for backend web development, financial applications, and large-scale enterprise applications. Java is also popular in the Android mobile app development field.

4. __PHP__:
PHP is a scripting language that is used for creating dynamic web pages and server-side code. It's commonly used for backend web development, content management systems, and e-commerce platforms. PHP has a large community and many frameworks and libraries, making it easy to learn and use. However, PHP has been criticized for its security issues and inconsistencies in its syntax.

Here is a tabular comparison of the above languages

<table>
  <thead>
    <tr>
      <th>Factor</th>
      <th>Python</th>
      <th>Node.js</th>
      <th>Java</th>
      <th>PHP</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Performance</td>
      <td>Generally slower than Java, but fast enough for most use cases. Good for data science, machine learning, and scientific computing.</td>
      <td>Very fast due to its event-driven, non-blocking I/O model. Good for real-time applications, IoT, and microservices.</td>
      <td>Fast and efficient due to the JVM (Java Virtual Machine). Excellent for high-performance, large-scale applications.</td>
      <td>Generally slower than Java, but fast enough for most use cases. Good for web applications and content management systems.</td>
    </tr>
    <tr>
      <td>Scalability</td>
      <td>Good scalability, particularly with async/await and parallel processing.</td>
      <td>Good scalability due to non-blocking I/O and event-driven model.</td>
      <td>Excellent scalability due to the JVM and support for multi-threading.</td>
      <td>Average scalability due to lack of support for multi-threading.</td>
    </tr>
    <tr>
      <td>Language Features</td>
      <td>Supports multiple programming paradigms including procedural, object-oriented, and functional programming. Good for data manipulation, scientific computing, and web development.</td>
      <td>Supports asynchronous programming, event-driven model, and functional programming. Good for real-time applications, microservices, and IoT.</td>
      <td>Supports object-oriented programming, multi-threading, and strong typing. Good for large-scale applications and enterprise development.</td>
      <td>Supports procedural, object-oriented, and functional programming. Good for web development and content management systems.</td>
    </tr>
    <tr>
      <td>Security</td>
      <td>Good security features, but vulnerable to injection attacks, cross-site scripting, and code injection.</td>
      <td>Good security features, but vulnerable to injection attacks, cross-site scripting, and code injection.</td>
      <td>Excellent security features, with strong encryption and built-in security libraries.</td>
      <td>Good security features, but vulnerable to injection attacks, cross-site scripting, and code injection.</td>
    </tr>
    <tr>
      <td>Community Support</td>
      <td>Large and active community with many libraries, frameworks, and resources available. Good for web development, scientific computing, and machine learning.</td>
      <td>Large and active community with many libraries, frameworks, and resources available. Good for real-time applications, microservices, and IoT.</td>
      <td>Large and active community with many libraries, frameworks, and resources available. Good for enterprise development and large-scale applications.</td>
      <td>Large and active community with many libraries, frameworks, and resources available. Good for web development and content management systems.</td>
    </tr>
  </tbody>
</table>

There are many other factors that involve when you choose a backend technology like :- requirements, experience of developers, cost and time, maintenance etc.

## 8. Database

## 9. Authentication and Authorization

## 10. Git and Github

If you're a beginner, you might think that these two terms mean the same thing - but they're different.

### what is git?

Git is a version control system which lets you track changes you make to your files over time. Git will create a backup of your files on command, and let you go back to every backup you create (like a time traveling machine). You can also make a complete copy of your files, make changes to that copy, and then merge these changes to the original copy.
For example, you could be working on a website's landing page and discover that you do not like the navigation bar. But at the same time, you might not want to start altering its components because it might get worse.

With Git, you can create an identical copy of the entire website code (called a branch) and play around with the navigation bar. Then, when you are satisfied with your changes, you can merge the copy to the original file.

You don't necessarily need to merge that copy, you can keep it entirely separate and make something different.

You are not limited to using Git just for source code files - you can also use it to keep track of text files or even images. This means that Git is not just for developers - anyone can find it helpful.

*Wow that sounds cool, how can I actually do it?*

Well to get started initialize your project, simply run

``` bash
git init
```

This will tell Git to get ready to start watching your files for every change that occurs. It looks like this:

![initialize](init.png)

*Ah okay so my files are tracked now? All good, right?*

Not really,

Git does not immediately start tracking every file and folder you give it. It will initially not track any files. git considers your files in an untracked state.

You will need to tell git what files to track using __add__ command

### How to add files in Git

To do that, we use this command

```bash
git add <filename>
```

After this git will add the file with the file name you provide it
If you want to add a file named __about.txt__, you will use

```bash
git add about.txt
```

But what if I want to add all files in the folder? Do I keep telling git each and every file??

No, you can tell git to add everything using

```bash
git add .
```

You can check it by using

``` bash
git status
```

It will tell you status of your files

This will put your files from __untracked__ to __staged__ state. '.' (dot) is short form for current directory.

*Oh no I accidentally added a file that I didn't mean to, what do I do?*
git on the rescue, just tell git to reset

```bash
git reset HEAD <filename>
```

### git commit

Now, about creating that backup of your files, you need to commit the files that you added using

```bash
git commit -m "commit message"
```

![commit](commit.png)
When you commit your files git creates a kind of checkpoint, now git has made a backup of your files, you can freely go wild and make breaking changes to your code. In the end you can just revert to this backup or any prior committed changes you made whenever you want.

There are different ways to revert to the latest committed state. You could use

``` bash
git stash
```

This will not only revert but also store your changes into a temporary stash

### Branches

Let's take a look at how to create those copies of your entire code using branches
To create a new branch, run this command:

``` bash
git checkout -b <branch name>
```

![commit](branch.png)
This will create a new branch, a complete copy of your code.
It will also replace your current folder to show you contents of this branch.

*Okay, but what happened to my original copy? Is it gone?*

Nope, your original copy is under the branch name master, when you initialize git repository it creates a master branch and uses it as default

You can switch to your master branch using

```bash
git checkout master
```

Notice it's the same command that we used to create a new branch, the only difference is that we are not giving it -b. As you guessed correctly, the -b is used to tell git to create a new branch  

*I made a cool change in the test branch, tested a few things and I have decided to have those changes into the master branch.*

Simply checkout master branch and tell git to merge:

```bash
git merge test
```

It will merge those changes into the master branch

![commit](merge.png)

### What is Github

GitHub is an online hosting service for Git repositories. Imagine working on a project at home and while you are away, maybe at a friend's place, you suddenly remember the solution to a code error that has kept you restless for days.

You cannot make these changes because your PC is not with you. But if you have your project hosted on GitHub, you can access and download that project with a command on whatever computer you have access to. Then you can make your changes and push the latest version back to GitHub.In summary, GitHub lets you store your repo on their platform. Another awesome feature that comes with GitHub is the ability to collaborate with other developers from any location.Now that we have created and initialized our project locally, let's push it to GitHub.If you are a beginner, you will come across some new terms like push, commit, add, and so on - but do not be overwhelmed by them. With some practice you will be able to remember these terms and what they do.

### How to push a repository to GitHub

Step 1 - Create a GitHub account

Step 2 - Create a repository on github

To push your current repository to github you will need to authenticate with your github account
TODO: PUT AUTHENTICATION STEPS

You have an option to change your default branch name when you are uploading your repository the first time.
You can do that by

```bash
git branch -M <branch name>
```

TODO: PUT GIT REMOTE ADD ORIGIN STEPS AND EXPLANATION

Now make sure you have added and committed your files using git
Once you are done use the command:

```bash
git push origin <branch-name>
```

Here you tell git that you want to push these changes to your remote that you named as origin in the previous steps and you tell git that you would like to push the given branch <branch-name\>

You can check your github repository and you will see your files there.

![commit](push.png)

### How to pull changes

Suppose you are working with a friend on a project and you are collaborating on github,
Your friend makes changes and pushes them to the github repository, but you don't have those changes on your computer.
To update the changes you can use:

```bash
git pull origin <branch-name>
```

This will update changes made to the branch <branch-name\>

### How to Clone a repository

Suppose you see someone's code you like and want to use it and see it run for yourself. git provides a easy way to have a repository cloned for you

```bash
 git clone REPOSITORY_HTTPS_URL
 ```

This command downloads the remote repository into your local computer in a folder with the name of the repository.

![commit](pull.png)

<br>

If you have followed up to this point then congratulations, you are good to go.You can now use Git in your projects no matter what programming language you are using. But this is not the end, git is much more than this. These steps you saw are the basics that you will be using most commonly, but we encourage you to find and learn more about features of git using the resources below.

<br>

## 11. Resources

- Frontend technologies
   1. <https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer>
   2. <https://reactjs.org/tutorial/tutorial.html>
   3. <https://vuejs.org/guide/introduction.html>
   4. <https://angular.io/quick-start>
<br>
<br>
- Backend technologies
   1. <https://restfulapi.net/>
   2. <https://developer.mozilla.org/en-US/docs/Web/HTTP>
   3. <https://wiki.python.org/moin/WebFrameworks>
   4. <https://www.oracle.com/technical-resources/articles/javase/webapps-1.html>
   5. <https://www.php.net/>
   6. <https://nodejs.org/en/docs/guides/getting-started-guide/>
<br>
<br>
- Git and Github
   1. <https://www.freecodecamp.org/news/git-and-github-for-beginners/>
   2. <https://www.freecodecamp.org/news/how-to-use-basic-git-and-github-commands/>
   3. <https://www.youtube.com/watch?v=RGOj5yH7evk>
   4. <https://www.freecodecamp.org/news/what-is-git-and-how-to-use-it-c341b049ae61/>
   5. <https://github.com/about>
