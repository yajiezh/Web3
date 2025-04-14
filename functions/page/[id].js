export async function onRequestGet({ params, env }) {
    const content = await env.HTML_STORE.get(params.id);
    
    return new Response(content || 'Not Found', {
        status: content ? 200 : 404,
        headers: { 
            'Content-Type': 'text/html',
            'X-Frame-Options': 'DENY'
        }
    });
}
