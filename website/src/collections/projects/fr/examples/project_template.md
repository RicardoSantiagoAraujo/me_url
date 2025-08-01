---
title: Title of project
subtitle: Subtitle of project
include: true
description: Detailed description of the project
descriptionShort: Short description of the project
datePublication: 2000-1-1
authors:
    - name: Author A name
      surname: Author A surname
      include: true
    - name: Author B name
      surname: Author B surname
      include: true
tags:
    - name: tag A
      include: true
    - name: tag B
      include: true
    - name: tag C
      include: false
techstack:
    - id: techstack_a
      include: true
    - id: techstack_b
      include: true
    - id: techstack_c
      include: true
fields:
    - name: field A
      include: true
    - name: field B
      include: true
    - name: field C
      include: true
repository: www.github.com
finished: true
opensource: true
externalLink: google.com
images:
    - title: image title
      include: true
      caption: 'image caption
      url: https://docs.astro.build/assets/rose.webp
      alt: Alternative text
    - title: image title
      include: true
      caption: image caption
      url: https://docs.astro.build/assets/rose.webp
      alt: Alternative text
videos:
    - title: video title
      include: true
      caption: video caption
      url: https://docs.astro.build/assets/rose.webp
      alt: Alternative text
    - title: video title
      include: true
      caption: video caption
      url: https://docs.astro.build/assets/rose.webp
      alt: Alternative text
---

Here goes the body of the project entry. It get injected into the website at the place where the tag **<slot />** is placed in your **.astro** file.

You can use standard **markdown** syntax to organise your content, which then gets transformed by Astro into appropriate **html**.

# Header level 1

Heading level 1 (alternative syntax)
===============

## Header level 2

Heading level 2 (alternative syntax)
---------------

### Header level 3

#### Header level 4

##### Header level 5

###### Heading level 6

# Emphasis

## Bold

There are two ways to create: either with **double asterisks** or with __double underscores__.

## Italic

There are two ways to create: either with *a single asterisk* or with _a single underscore_.

## Bold and Italic

There are two ways to create: either with ***triple asterisks*** or with ___triple underscores___.

# Blockquotes

> To create a blockquote, add a **>** in front of a paragraph.

> Additionally, it is possible to create multi-paragraph blockquotes.
>
> Additionally: 
> - You can add other formatting elements
>
>> Nested blockquotes are added with a double **>>**.

# Lists

## Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
3. Third item
  1. First indented item
  2. Second indented item

## Unordered Lists

To create an unordered list, add dashes (**-**), asterisks (__*__), or plus signs (**+**) in front of line items. Indent one or more items to create a nested list.

- First item
- Second item
- Third item
  - First indented item
  - Second indented item

  ## Code Blocks

  Code blocks are normally indented four spaces or one tab. When they’re in a list, indent them eight spaces or two tabs.

  1. Open the file.
  2. Find the following code block on line 21:

          <html>
            <head>
              <title>Test</title>
            </head>

  3. Update the title to match the name of your website.

## Code

Code is denoted with `backticks`.

## Images

![Image alt text](/assets/placeholders/placeholder_image.jpg  "Optional title")

## Links

[Google](https://google.com "This optional text appears when you hover the link")

To quickly turn a URL or email address into a link, enclose it in angle brackets.

<https://www.google.com>

## Horizontal rulers

Use any of the following:

***
---
___

## HTML

Many Markdown applications allow you to use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the color of text or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

This **word** is bold. This <em>word</em> is italic.