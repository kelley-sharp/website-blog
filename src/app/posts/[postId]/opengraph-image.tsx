import { CldImage } from "next-cloudinary";
import { ImageResponse } from "next/server";
import { getPostByName } from "src/lib/posts";

export const contentType = "image/png";

// Image generation
export default async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const postId = searchParams.get("postId")?.slice(0, 100);
    const name = postId ? postId.concat("/index.mdx") : undefined;
    const blogPost = await getPostByName(name);

    return new ImageResponse(
      (
        // ImageResponse JSX element
        <div
          style={{
            fontSize: 128,
            background: "white",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {postId ? (
            <CldImage alt={postId} src={`blog/${postId}`} />
          ) : (
            <CldImage alt="Kelley Sharp" src={"blog/afsqeub2vc0rvfvkar56"} />
          )}

          <p>{blogPost?.meta.title || "Kelley's Blog"}</p>
          <p>
            {blogPost?.meta.description ||
              "Musings from a Software Engineer with 5 years of experience"}
          </p>
          <p>`Author: ${blogPost?.meta.author || "Kelley Sharp"}`</p>
        </div>
      ),
      // ImageResponse options
      {
        width: 1200,
        height: 630,
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}