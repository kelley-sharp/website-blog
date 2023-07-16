---
title: "On Building this Blog"
date: "7-11-2023"
---

I wanted to document the various projects I'm working on! So I set out to use Next.js, TypeScript, Tailwind CSS and Markdown files to create blog posts on a new personal site.

I followed this [Next.js Blog Website tutorial](https://www.youtube.com/watch?v=puIQhnjOfbc&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=6) from Dave Gray which was a revision to Shu Uesugi's pre-Next.js 13 [blog example](https://next-learn-starter.vercel.app/).

Other resources I used:

[🔗 Next.js App Router](https://nextjs.org/docs/app/building-your-application)

[🔗 TailwindCSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)

[🔗 TailwindCSS Typography](https://tailwindcss.com/docs/typography-plugin)

[🔗 gray-matter](https://www.npmjs.com/package/gray-matter)

[🔗 remark](https://www.npmjs.com/package/remark)

[🔗 remark-html](https://www.npmjs.com/package/remark-html)

[🔗 react-icons](https://www.npmjs.com/package/react-icons)

[🔗 next-themes](https://github.com/pacocoursey/next-themes)

## What I learned

### React 18 is awesome!

Amoung the newest React features, components are now Server Components by default. We have to use the "use client" directive at the top of our component when we want to use browser-only APIs, interactivity/event listeners, State/Lifecycle effects, or React Class Components. I learned this when I implemented `next-themes` for light/dark theme control, which relies on some of these things behind the scenes. With React Server Components, bundle size does not necessarily grow with app size anymore. Less JavaScript is sent to the client than with traditional React Client Components, which is one of the reasons why this change is great for performance. Other benefits include having access to the DB, and having better security by not exposing API keys and other secrets to the client.

### Some things about Next.js's new App Directory Architecture

### Aspirations

- Add some loading UI
- Optimize my Metadata (mostly for a nice social media sharing experience)
- Update this blog to support MDX eventually (because adding React components in these posts sounds fun and useful)
