import { ImageResponse } from "next/server";

// Route segment config
export const runtime = "edge";

export const contentType = "image/png";

// Font
// const interSemiBold = fetch(new URL("./Inter-SemiBold.ttf", import.meta.url)).then((res) =>
//   res.arrayBuffer(),
// );

//image

// Image generation
export default async function Image({ params: { postId } }: { params: { postId: string } }) {
  const imageUrl = await getImageByPostId({ postId: `${postId}/images/opengraph-image.png` });

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
        {/* Cloudinary Image Goes Here */}
      </div>
    ),
    // ImageResponse options
    {
      width: 1200,
      height: 630,
    },
  );
}

async function getImageByPostId({ postId }: { postId: string }): Promise<string> {
  // fetch here
}
