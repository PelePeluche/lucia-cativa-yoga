// Cloudflare Pages Functions middleware for redirecting .pages.dev to custom domain
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  // If someone accesses via .pages.dev domain, redirect to custom domain
  if (url.hostname === 'lucia-cativa-yoga.pages.dev') {
    const redirectUrl = 'https://luciacativayoga.com' + url.pathname + url.search + url.hash;
    return new Response(null, {
      status: 301,
      headers: {
        'Location': redirectUrl,
        'Cache-Control': 'no-cache'
      }
    });
  }
  
  // Otherwise, continue to the next middleware or page
  return context.next();
}
