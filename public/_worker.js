// Cloudflare Pages Worker for redirecting .pages.dev to custom domain
export default {
  async onRequest(context) {
    const { request } = context;
    const url = new URL(request.url);
    
    // If someone accesses via .pages.dev domain, redirect to custom domain
    if (url.hostname === 'lucia-cativa-yoga.pages.dev') {
      const redirectUrl = 'https://luciacativayoga.com' + url.pathname + url.search + url.hash;
      return Response.redirect(redirectUrl, 301);
    }
    
    // Otherwise, serve the page normally
    return context.next();
  }
};
