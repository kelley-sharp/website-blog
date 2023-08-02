import { ImageResponse } from "next/server";
import { getPostByName } from "src/lib/posts";

export const contentType = "image/png";

export const runtime = "edge";

type ImageProps = {
  params: { postId: string };
};

// Image generation
export default async function OGImage({ params: { postId } }: ImageProps) {
  try {
    const blogPost = await getPostByName(postId + "/index.mdx");
    if (!blogPost) throw new Error("Failed to load blog post metadata");
    const {
      meta: { title },
    } = blogPost;
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
          {title}
        </div>
      ),
      {
        width: 800,
        height: 430,
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(`${e.message}`);
    console.log({ postId });
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
