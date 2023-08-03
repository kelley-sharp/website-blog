import { ImageResponse } from "next/server";
import { getPostByName } from "src/lib/posts";

export const contentType = "image/png";

export const runtime = "nodejs";

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
            fontSize: 58,
            fontWeight: "bold",
            color: "#64748b",
            background: "#1e293b",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "10px solid #ec4899",
          }}
        >
          <p
            style={{
              background: "#1e293b",
              textTransform: "uppercase",
              border: "10px solid #60a5fa",
              borderRadius: "30px",
              marginLeft: 15,
              marginRight: 15,
              padding: 200,
            }}
          >
            {title}
          </p>
        </div>
      ),
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
