export async function onRequestGet(ctx) {
  const path = new URL(ctx.request.url).pathname.replace("/media/", "");
  const key = "video/" + path;
  console.log("Looking for R2 key:", key);
  const file = await ctx.env.MEDIA.get(key);
  if (!file) return new Response(null, { status: 404 });
  return new Response(file.body, {
    headers: { "Content-Type": file.httpMetadata.contentType },
  });
}