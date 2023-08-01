import { CldImage } from "next-cloudinary";
import { ImageResponse } from "next/server";

export const contentType = "image/png";

// Image generation
export default async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasPostId = searchParams.has("postId");
    const postId = hasPostId ? searchParams.get("postId")?.slice(0, 100) : "Kelley's Blog";

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
          <CldImage alt={postId ? postId : "kelley's Blog"} src={`blog/${postId}`} />
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
