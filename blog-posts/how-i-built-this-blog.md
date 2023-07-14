---
title: "How I Built This Blog"
date: "7-11-2023"
---

I wanted to document the various projects I'm working on! So I set out to use Next.js, TypeScript, Tailwind CSS and Markdown files to create blog posts on a new personal site.

I followed this [Next.js Blog Website tutorial](https://www.youtube.com/watch?v=puIQhnjOfbc&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=6) from Dave Gray which was a revision to Shu Uesugi's pre-Next.js 13 [blog example](https://next-learn-starter.vercel.app/).

Other resources I used:

[🔗 TailwindCSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

[🔗 TailwindCSS Typography](https://tailwindcss.com/docs/typography-plugin)

[🔗 gray-matter](https://www.npmjs.com/package/gray-matter)

[🔗 remark](https://www.npmjs.com/package/remark)

[🔗 remark-html](https://www.npmjs.com/package/remark-html)

[🔗 react-icons](https://www.npmjs.com/package/react-icons)

### What I learned

#### Static Generation vs. Server-side rendering

#### The basics of Next.js's new App directory architecture

#### React is changing!

The newest React treats all components as server components by default, you have to use the "use client" directive
at the top of your component when I wanted to use `next-themes` to implement dark mode.
