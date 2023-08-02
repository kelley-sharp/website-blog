"use-client";
// import Image from "next/image";
import { ImageResponse } from "next/server";

export const contentType = "image/png";

export const runtime = "edge";

type ImageProps = {
  params: { postId: string };
};

// Image generation
export default function Image({ params: { postId } }: ImageProps) {
  try {
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
          <img alt={postId} src={`/${postId}.png`} />
        </div>
      ),
      {
        width: 1200,
        height: 630,
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
