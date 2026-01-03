---
layout: '@layouts/MarkdownPageLayout.astro'
date: 2025-01-03
title: Installing K3b on Ubuntu
summary: "When installing K3b on Ubuntu, you need to be part of the cdrom group, install with apt (not snap) and update file permissions"
---

[K3b](https://apps.kde.org/k3b/) is a CD burning application.  It is designed for KDE but works fine on Ubuntu/Gnome.

When looking for a CD burning application, I first tried [Brasero](https://wiki.gnome.org/Apps/Brasero) as it is a Gnome application, however it would fail when verifying a burn. Rather than chasing down this problem, I tried K3b instead.  K3b seemed lot better.  However I also had problems getting it to work.  After some investigation, this was my fix.

1. Make sure your Linux user account has been added to the "`cdrom`" group.
1. Do NOT install using `snap`. With this installation, you will not be able to carry out the next step. Instead, install with `apt`.  If you are using Ubuntu App Center, make sure you set the filter to "`Debian packages`".
1. The first time you run K3b, you need to change some file permissions.  Follow the instructions in Chapter 2, "`Pre-setup`", in [The K3b handbook](https://docs.kde.org/stable5/en/k3b/k3b/k3b.pdf).