---
title: "Exploring the Next.js App Router"
date: "7-15-2023"
---

#### Introduction

In the world of Next.js, the release of the App Router alongside Next.js 13 has stirred up the community. Many are questioning the need for change when the Pages Router worked so well. However, after taking a closer look, it's clear that the App Router leverages new React features and offers a comparable level of simplicity, if not even easier to use.

As a developer diving into the Next.js App Router for the first time, I am excited about the advanced patterns it brings for optimization and configuration, but while building this blog, I focused on exploring its basic capabilities, and in this post, I'll share my thoughts on some key aspects that stood out to me.

#### File Structure

Having been accustomed to the previous Pages Router, I found it helpful to visually compare the file structures of the two systems. Here's a glimpse:

[figJam iframe]

Ultimately, I found the App Router's file structure to be more flexible, allowing for granular customization for each route. However, migrating existing Next.js projects from the Pages Router to the App Router might be challenging. Luckily for this blog I'm starting fresh! That's giving me the freedom to embrace the App Router system fully.

#### Server-side Routing, Client-side Navigation

By default, the App Router performs server-side routing for components, while navigation occurs on the client side. This means that when navigating between sibling components with the Next.js `Link` component (or the `useRouter()` Next.js hook), the root route segment layout they share will persist (not be re-rendered). In my case, this means the app root layout (e.g. What renders my Nav Bar and Theme Toggle Button components on every page) will not need to be re-rendered when someone clicks on one of my blog post links, making it faster for my readers to see the post. I wouldn't want you to lose interest!

#### Enhanced Data Fetching Methods

In the Pages Router, we relied on `getServerSideProps` to fetch data, which resulted in a loading UI that remained until data for the entire route segment was loaded. With the App Router, however, React's [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) features come into play, allowing users to interact with components that don't require data while other components on the same page are still pending data retrieval. This ability to provide a responsive interface, even when certain components are still loading, is an objective win for user experience! Data fetching on the Client-side is still being perfected by the Next.js team and it's still recommended we use SWR or ReactQuery for that.

#### Per-request Caching

One notable advantage of the App Router is its support for per-request caching. Unlike the segment-level caching mechanism used in the Pages Router, per-request caching enables us to cache data on an individual request basis. When the same request is made multiple times, the App Router automatically deduplicates the subsequent requests, eliminating the need for redundant data retrieval. This caching optimization not only saves time but also improves rendering efficiency. For instance, in my implementation of the [postId] leaf route, where I make a request to getSortedPostsData, [per-request caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching) plays a significant role.

#### Rendering

There are two new changes to the rendering strategy with the App Router. The rendering environment (client or server) is determined on a component/route level rather than the app-wide decision required previously when we had to wrap our app in providers in order to get layouts to be customizable on a route level.

Application code can be rendered either on the client or the server. It used to be that every component was a client component, but the App Router uses React Server Components for all components unless we explicitly use the 'use client' directive at the top of our component file. That allows us to opt in for when to use state, lifecycle methods and client-side APIs that the browser provides, which results in sending javascript to the browser only when necessary.

Static Rendering is the App Router's counterpart to the Pages Router's Static Site Generation. It allows both server and client components to be pre-rendered on the server during the **build** process. Developers can choose the rendering environment (server or client) for each component, and the results are cached and reused for subsequent requests. I used the generateStaticParams() function

Dynamic Rendering, on the other hand, corresponds to the Pages Router's Server-Side Rendering (using `getServerSideProps`). In Dynamic Rendering, neither server nor client components are pre-rendered. Instead, they are rendered on the server at **request** time, and the results are not cached.

By default, Next.js 13 employs static rendering, dynamically rendering the entire route when it detects dynamic functions or fetch() requests. It's worth noting that while the App Router introduces new terminology, as far as I can tell, the concepts of Static Site Generation and Static Rendering or Server-side rendering and Dynamic Rendering are identical. Although the change in terminology might seem unnecessary, it probably just indicates refinements in the rendering implementation within the framework.

I personally love that the App Router replaces all the old rendering methods (getServerSideProps, getStaticProps) with default Server Components. It should be optimized methods first, and opt in to less optimized methods where needed.

#### Conclusion

Vibes.analyze({thing:"Next.js App Router", moment: "July 2023"}) // 👍🏻👍🏻
