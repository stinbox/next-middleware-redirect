export const GET = (request: Request) => {
  const redirectUrl = new URL("/redirected", request.url);
  console.log({ redirectUrl: redirectUrl.toString() });
  return Response.redirect(redirectUrl);
};
