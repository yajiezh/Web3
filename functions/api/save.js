export default {
    async post(request, env) {
        const html = await request.text();
        const id = crypto.randomUUID();
        
        await env.HTML_STORE.put(id, html, {
            metadata: {
                createdAt: Date.now()
            }
        });

        return new Response(JSON.stringify({ id }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
