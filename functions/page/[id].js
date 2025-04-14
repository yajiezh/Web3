export async function onRequestGet({ params, env }) {
    const html = await env.HTML_STORE.get(params.id);
    
    if (!html) {
        return new Response('页面不存在', { 
            status: 404,
            headers: { 'Content-Type': 'text/html' }
        });
    }

    return new Response(html, {
        headers: { 'Content-Type': 'text/html' }
    });
}
