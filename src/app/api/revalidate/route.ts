import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * use in client cli (like Insomnia) after 'run build' and 'run start' to revalidate on demand
 * api/revalidate?path=/&secret=MY_SECRET_TOKEN
 */

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.MY_SECRET_TOKEN) {
    return new NextResponse(JSON.stringify({ message: "Invalid Token" }), {
      status: 401,
      statusText: "unauthorized",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return NextResponse.json({ revalidated: true });
}
