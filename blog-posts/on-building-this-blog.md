---
title: "On Building this Blog"
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

[🔗 next-themes](https://github.com/pacocoursey/next-themes)

### What I learned

#### Static Generation vs. Server-side rendering

#### React is changing!

Among the newest React features, components are now server components by default. We have to use the "use client" directive at the top of our component when we want to use a Context. I learned this when I implemented `next-themes` for light/dark theme control, which relies on using a Context behind the scenes. With React server components bundle size does not necessarily grow with app size anymore, like it does with traditional React client components, which is one of the reasons why this change is great for performance.

#### Some things about Next.js's new App directory architecture

The Next.js App Router, that released shortly after Next.js 13 came out, takes advantage of these new React features by making rendering strategy more granular than rendering vs their Page Router system. The App Router rendering strategy is not limited to page-wide rendering, but data is rendered per component. So `app/<route>/<sub-route-1>` doesn't have to wait for `app/<route>/<sub-route-2>` data to load in addition to it's own. When using getServerSideProps in the Pages Router, the loading spinner would show until data for the entire route (and it's subtree routes) has loaded. If we wanted to use this approach in the App Router system we would put getServerSideProps in the layout file for that route (`app/<route>/layout.jsx/js/tsx`), which is where the root code of the route and therefore sub-routes (or as they call them "subtrees") lives, but we don't want to do that! It is more useful to put the getServerSideProps in the component itself so the user only needs to wait for the data _that_ subtree needs to load. This makes for a much better user experience.
