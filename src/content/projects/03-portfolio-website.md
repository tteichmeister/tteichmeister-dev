---
id: 3
type: "project"
slug: "portfolio-website"
title: "Portfolio website"
description: "A personal website built to showcase my work and experience in a clear and professional way. Designed with static site generation for performance, low costs, and easy maintenance, it also provides additional insights beyond what a CV can show."
start: "January 2023"
link:
  title: GitHub
  url: "https://github.com/tteichmeister/tteichmeister-dev"
tags: ["Astro", "Tailwind CSS", "Preact", "Vercel"]
lastModified: 2025-09-15
---

## Table of Contents

## Summary

I built a personal portfolio website to present my projects and professional experience in a clear and accessible way. The focus was on performance, low hosting costs, and simple content updates with Markdown and static generation. Beyond serving as a showcase for potential employers, the site also provides additional insights and reflections that go beyond a traditional CV.

## Motivation

After completing two research projects, I wanted to create a small side project at home that would provide more context about my work and highlight details that often don’t fit into a standard CV. The goal was to keep the site straightforward, easy to maintain, and professional in appearance.

## Approach & Stack

To implement the site, I evaluated several frameworks with an emphasis on performance, ease of content management, and minimal hosting costs.

Since the site’s content changes only rarely, I decided on a Static Site Generation (SSG) approach with Markdown files, offering developer-friendly authoring in a blog-style format. For the framework itself, I turned to [Astro](https://astro.build/): unlike [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) and [Next.js](https://nextjs.org/), which I had used in previous projects, Astro is designed with content at its core and provides strong SSG support with minimal JavaScript—making it a perfect fit for this portfolio. This approach allowed pages to be rendered as lightweight HTML while still supporting TypeScript and Content Collections for type-safe content handling.

For interactive elements like the theme switcher, I used [Preact](https://preactjs.com/), a lightweight alternative to React, and styled the site with [Tailwind CSS](https://tailwindcss.com/) to efficiently create a custom design. Combined, these technologies formed the foundation of a fast, maintainable, and developer-friendly portfolio site.

## Hosting

After comparing different providers, I chose [Vercel](https://vercel.com/) for its simple static deployments, fast global delivery, and generous free tier. The SSG setup keeps runtime requirements low, making hosting both cost-effective and reliable.

## Outcome

The result is a performant, easy-to-maintain portfolio with a flexible content model and minimal JavaScript footprint. It presents my work and experience clearly while also offering visitors additional insights into past projects and ideally encourages professional connections and feedback.

I hope you like the website. If you would like to learn more about the website, please don't hesitate to contact me or take a look at the [repository](https://github.com/tteichmeister/tteichmeister-dev).

## Additional Links

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Preact](https://preactjs.com/)
- [Vercel](https://vercel.com/)
