// import { ImageResponse } from "next/server";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  const responseJson = await fetch(new URL("./image.png", import.meta.url)).then((res) =>
    res.json(),
  );
  const imageData = responseJson.stringify();
  console.log({ imageData });

  // return new ImageResponse(
  //   (
  //     <div
  //       style={{
  //         display: "flex",
  //         background: "#f6f6f6",
  //         width: "100%",
  //         height: "100%",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //       }}
  //     >
  //       <img width="256" height="256" src={imageData} />
  //     </div>
  //   ),
  //   {
  //     width: 1200,
  //     height: 630,
  //   },
  // );
}
