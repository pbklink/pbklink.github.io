import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request, redirect }) => {
    return redirect('https://pbkware.klink.au/fielded-text/c-sharp-library/examples/csharp-basic-example-meta-file/', 301);
}
