export default {
    async post({ request, env }) {
        const html = await request.text();
        const id = crypto.randomUUID();
        
        await env.HTML_STORE.put(id, html, {
            metadata: { created: Date.now() }
        });
        
        return new Response(JSON.stringify({ id }), {
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Cache-Control': 'no-store'
            }
        });
    }
}
