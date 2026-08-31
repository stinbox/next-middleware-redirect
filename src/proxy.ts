import { NextResponse, type NextRequest } from "next/server";

export default function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/with-next-response-redirect") {
    const redirectUrl = new URL("/redirected", request.url);
    console.log(redirectUrl.toString());
    return NextResponse.redirect(redirectUrl);
  }

  if (request.nextUrl.pathname === "/with-next-response-constructor") {
    const redirectUrl = new URL("/redirected", request.url);
    console.log(redirectUrl.toString());
    return new NextResponse(null, {
      status: 307,
      headers: { Location: redirectUrl.toString() },
    });
  }

  if (request.nextUrl.pathname === "/with-standard-response-redirect") {
    const redirectUrl = new URL("/redirected", request.url);
    console.log(redirectUrl.toString());
    return Response.redirect(redirectUrl);
  }

  if (request.nextUrl.pathname === "/with-standard-response-constructor") {
    const redirectUrl = new URL("/redirected", request.url);
    console.log(redirectUrl.toString());
    return new Response(null, {
      status: 307,
      headers: { Location: redirectUrl.toString() },
    });
  }

  if (request.nextUrl.pathname === "/external") {
    const redirectUrl = new URL("https://example.com");
    console.log(redirectUrl.toString());
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}
