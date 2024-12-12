---
layout: '@layouts/MarkdownPageLayout.astro'
date: 2017-01-29
title: Fielded Text Standard
---

At work I often had to write text file parsers to obtain data from information vendors.  After a while, I found myself repeating the same patterns whenever I wrote another parser.  So (in my spare time), I decided to try and write a general purpose text parser.

This project was only supposed to take a month or so but it just grew and grew.  In the evenings and weekends I snatched whatever hours I could to continue on my text parser.  (However, being careful that my wife and kids did not think I was too obsessed with it).

As the project evolved, it started to look like a database API.  In fact, Fielded Text now associates a small XML file with a text (eg CSV) file.  This XML file (the Meta file) describes the structure and format of the data within the file.  Once the Meta file is associated with the text file, you can read it in exactly the same way you read a database table.  For example, create a DataReader, read a record and then obtain the value for each field in that record.

About halfway through this project, I had to decide where I wanted this project to head.  Did I want to make a commercial product out of it?  There were already some CSV Parsing libraries/components on the market; did I want to compete with them?  I decided I did not want to do that.

Instead, I decided to try and make a standard for text files.  Maybe an overly idealised goal and certainly not commercially rewarding - however I was enjoying the technical challenge.  Maybe I will get some recognition out of it?

Anyway, that's how [http://www.fieldedtext.org](http://www.fieldedtext.org) came about.  My approach to ordering the world of CSV files and other text files of that ilk.  The ultimate aim of the Fielded Text standard is for people (or organisations) which publish data text files, to also publish the corresponding Meta files.  Then parsing these files will be so much easier.

Documentation covering my implementations of this standard and utilities are available at [https://pbkware.klink.au/fielded-text/](https://pbkware.klink.au/fielded-text/)
