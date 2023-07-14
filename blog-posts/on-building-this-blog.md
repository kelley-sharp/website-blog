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

Amoung the newest React features, components are now Server Components by default. We have to use the "use client" directive at the top of our component when we want to use a Context. I learned this when I implemented `next-themes` for light/dark theme control, which relies on using a Context behind the scenes. With React Server Components, bundle size does not necessarily grow with app size anymore. Less JavaScript is sent to the client than with traditional React Client Components, which is one of the reasons why this change is great for performance.

### Some things about Next.js's new App Directory Architecture

The Next.js App Router, that released shortly after Next.js 13 came out, takes advantage of these new React features.
This is my first experience using the App Router and I'm excited about all the advanced patterns and special files that can be utilized for things like loading and error UIs in nested routes, but apart from playing with the not-found file feature, at the time I'm writing this I've focused on learning the following concepts.

#### File Structure

I'm familiar with the preceeding Pages Router so I found it helpful to create a visual comparison of the file structures between the two.

#### Caching Per Request

The App Router Next.js has support for caching data on a per-request basis, not just an entire route segment. With [per-request caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching), if we make the same request twice, the second request will be de-duped meaning we don't actually make the second request. This saves time to render (ttr). You can see this in my `page.tsx` of the `[postId]` leaf (segment without children nodes) under the `post` route where I make the request to `getSortedPostsData`.

#### Server-side Routing, Client-side Navigation

Although components are routed on the server side now, navigation is client-side. So when navigating between sibling components with the Next.js `Link` component (or the `useRouter()` hook), the root layout file content they share will persist (not be re-rendered). In my case, this means the app root layout (e.g. What renders my Nav Bar and Theme Toggle Button components on every page) will not need to be re-rendered when someone clicks on one of my blog post links.

#### Rendering Strategy

When using getServerSideProps (not a thing in App Router) in the Pages Router, the loading spinner shows until data for the entire route (segment) and it's sub-routes (subtrees and/or leafs) has loaded. In the App Router world some data can already be loaded and placeholder skeleton components can show where components with data pending will render once downloaded.

#### Static Rendering vs Dynamic Rendering

Static Rendering is the App Router term for what was Static Site Generation on the Pages Router. It means that both server and client components _can_ be pre-rendered on the server at **build time** and the result is cached and reused on subsequent requests.

Dynamic Rendering is the App Router term for what was Server-Side Rendering (getServerSideProps()) in the Pages Router. This is when Server _and_ Client Components are not pre-rendered. They are rendered on the server at **request time** and the result is not cached.

Next.js uses static rendering by default and will render the entire route dynamically where dynamic functions or dynamic `fetch()` requests are detected.

### Aspirations

- Add some loading UI
- Optimize my Metadata (mostly for a nice social media sharing experience)
- Update this blog to support MDX eventually (because adding React components in these posts sounds fun and useful)
