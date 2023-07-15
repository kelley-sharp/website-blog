---
title: "My Thoughts on the Next.js App Router"
date: "7-15-2023"
---

The Next.js App Router, that released shortly after Next.js 13 came out, takes advantage of new React features.
This is my first experience using the App Router and I'm excited about all the advanced patterns and special files that can be utilized for things like loading and error UIs in nested routes, but there's a lot about Next.js to learn so I've focused on the following that are more or less relevant to the creation a simple blog such as this as of today.

#### File Structure

I'm familiar with the preceeding Pages Router so I found it helpful to create a visual comparison of the file structures between the two.

[figJam iframe]

Ultimately I prefer the App Router system because it allows for more granular customization per each of the routes, but it would be a pain to switch my previous Next.js projects over from the Pages Router system. Luckily for this blog I'm starting fresh!

#### Server-side Routing, Client-side Navigation

Although components are routed on the server side by the App Router by default, navigation is client-side. So when navigating between sibling components with the Next.js `Link` component (or the `useRouter()` Next.js hook), the root route segment layout they share will persist (not be re-rendered). In my case, this means the app root layout (e.g. What renders my Nav Bar and Theme Toggle Button components on every page) will not need to be re-rendered when someone clicks on one of my blog post links, making it faster for my readers to see the post. I wouldn't want you to lose interest!

#### New Methods of Fetching Data

When using getServerSideProps (not a thing in App Router) in the Pages Router to fetch data, the loading UI (hopefully not lack thereof) shows until data for the entire route segment has loaded. In the App Router world, via React's [Streaming and Suspense](https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming#streaming-with-suspense) features, users can interact with any components that don't require data while other components on that same page are still pending the data they need. This seems like an objective win for user experience!

#### Caching Per Request

The App Router Next.js has support for caching data on a per-request basis, not just on a segment level (a mechanism that allows different segments of a path to control the cache lifetime of the entire route). With [per-request caching](https://nextjs.org/docs/app/building-your-application/data-fetching/caching#per-request-caching), if we make the same request twice, the second request will be de-duped meaning we don't actually make the second request. This saves time to render (ttr). You can see this in my `page.tsx` of the `[postId]` leaf route (segment without children nodes) under the `post` route where I make the request to `getSortedPostsData`.

#### Static Rendering and Dynamic Rendering (on the server)

Static Rendering is the App Router version of what was Static Site Generation on the Pages Router. It means that both server and client components _can_ be pre-rendered on the server at **build time**. You can choose the rendering environment (server or client) on a component level and the result is cached and reused on subsequent requests.

Dynamic Rendering is the App Router version of what was Server-Side Rendering (getServerSideProps()) in the Pages Router. In Dynamic Rendering, neither Server nor Client Components are pre-rendered. They are rendered on the server at **request time** and the result is not cached.

Next.js uses static rendering by default and will render the entire route dynamically where dynamic functions or dynamic `fetch()` requests are detected.

My only thoughts on this - why change the terminology for the App Router architecture? I think it's probably to indicate changes to how rendering is implemented within the framework, but as far as I can tell, the concepts of Static Site Generation and Static Rendering or Server-side rendering and Dynamic Rendering are identical.

#### Conclusion

Vibes.analyze({thing:"Next.js App Router", moment: "July 2023"}) // 👍🏻👍🏻
