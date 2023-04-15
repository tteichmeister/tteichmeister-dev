---
id: 3
slug: "portfolio-website"
title: "Portfolio website"
description: "An overview about how I built my portfolio website and which stack I chose for the implementation."
fromDate: "January 2023"
toDate: "April 2023"
link:
  title: GitHub
  url: "https://github.com/tteichmeister/tteichmeister-dev"
tags: ["Astro", "Tailwind CSS", "Preact", "Vercel"]
lastModified: 2023-04-15
---

## Table of Contents

##

For some time now, I had been thinking about creating my own portfolio website, but due to time constraints, I had not been able to dedicate myself to the project. However, after completing the two research projects, I finally had more time to devote to other things. So, at the beginning of this year (end of January 2023), I decided to start working on it. My goal was to showcase my projects and work experience to give people an idea of my professional background. It took a little longer to develop the website because I only had a few hours on some weekends to work on it. However, it is now ready for use. Now, I would like to share some details about the tech stack that I have used here.

## Which frameworks to choose?

To begin with, I spent some time researching which framework to use for implementing the website. Since a portfolio website is similar to a blog, I wanted a framework that would make it easy to add new entries to the website with minimal effort. Another important aspect for me was that the website should be highly performant while keeping hosting costs to a minimum.

I had already used different frameworks for implementing websites in some of my private projects. In the last two projects, I used very different frameworks: [Blazor](https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor) and [Next.js](https://nextjs.org/).

For this project, I decided to use [Static Site Generation (SSG)](https://en.wikipedia.org/wiki/Static_site_generator) as the content of my website seldom changes. The foundation for the website's content is markdown files, which I use to describe the content. Using markdown files to describe my content is great because it has a well-known syntax for developers, and it is also an excellent way to present content in a blog post format.
Not only does the rarely changing content speak in favor of SSG websites, but they are also very performant, and hosting these websites is often very cheap, if not free.

For this project, I wanted to use a framework that supported SSG out of the box, which is why I decided not to use Blazor.
I had a great experience using Next.js in my last project, and it was a lot of fun to work with. However, I recently learned about Astro, which sounded very exciting to me.

### Astro

The [Astro framework](https://astro.build/) is a content-focused framework that achieves blazingly fast performance by minimizing the amount of JavaScript used on the website. Essentially, Astro renders the entire page as HTML and removes JavaScript entirely. JavaScript is only used when it is explicitly needed.
The fact that the Astro framework supports SSG and allows the use of Markdown files to create website content was a key factor for me.

In general, Astro can be used to implement an entire website, but any frontend framework can also be used in combination with Astro, as it is a UI-agnostic framework.

For these reasons, I took a closer look at the framework and tried it out. After a short time, it became clear that the framework is excellent. It is very easy to learn and is really performant. The integration of Markdown and its [Content Collection](https://docs.astro.build/en/guides/content-collections/) feature, in combination with TypeScript, makes the handling of the website's content very straightforward and, in my opinion, leads to an excellent developer experience.

### Preact

For the implementation of the website, I mainly used Astro. However, for certain components such as the theme switcher, I used [Preact](https://preactjs.com/). React and Preact are almost identical in their usage, but Preact is significantly smaller in size. Since I am familiar with React from using Next.js, but want the website to remain performant and its size to be kept small, I decided to use Preact.

### Tailwind CSS

For styling, I chose [Tailwind CSS](https://tailwindcss.com/) because I had already used this framework in my last two private projects. Although it was initially challenging for someone who doesn't regularly develop and design websites to create custom components, it had the advantage of allowing me to develop my own design for my website, which is an essential aspect of a portfolio website. However, after some time, I began to appreciate TailwindCSS and enjoy using it again.

These are essentially the key frameworks that I utilized to implement the portfolio website.

## Where should I host the website?

I have already tried out several cloud hosting providers such as [Heroku](https://www.heroku.com/), [Microsoft Azure](https://azure.microsoft.com/), and [Vercel](https://vercel.com/). However, I did not want to use Heroku anymore because there is no longer a free plan available for hobby or private projects.
To host a website that only features static content, there are various providers available, such as [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), and many others. These providers offer free hosting for such websites.

I had already had experience with Vercel in combination with Next.js, and the experience was excellent. Hosting was extremely easy, and their free plan is completely sufficient for private or hobby projects. For this reason, I have decided to stick with Vercel again.

## Final thoughts

Developing the website was a truly enjoyable experience for me. However, the design development process took a bit longer than initially anticipated, as I wanted to experiment with different design elements to ensure that the final version would look its best.

I hope you like the website. If you would like to learn more about the website, please don't hesitate to contact me or take a look at the [repository](https://github.com/tteichmeister/tteichmeister-dev).

## Additional Links

- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Preact](https://preactjs.com/)
- [Vercel](https://vercel.com/)
