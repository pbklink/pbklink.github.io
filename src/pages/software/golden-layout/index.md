---
layout: '@layouts/MarkdownPageLayout.astro'
author: Paul Klink
date: 2021-06-29
title: Golden Layout
---

When I began work on Plxtra's [Motif](https://plxtra.org/overviews/front-ends/motif/) trading terminal, I decided to use [Golden Layout](https://github.com/golden-layout/golden-layout) for layout management. While this library was reasonably reliable it did have some issues. However the main problem was that its last release was in 2017. There were many commits to the repository since then however it seemed that the JavaScript resulting code base was not reliable enough to generate a new release.

The existing issues did affect Motif, so I decided to rewrite this library in TypeScript and clean up the code base. Version 2 of the Golden Layout was released in early 2021. Over the next couple of years I was the main developer/maintainer and continued to improve it with various releases up to version 2.6.

At the end of 2022, after an unpleasant encounter with the original developer of Golden Layout, I decided to step down as a maintainer.  Golden Layout now had the reliability and features needed by our trading terminal.

I enjoyed working on Golden Layout and learned a lot.  However my interest was being drawn to other projects.