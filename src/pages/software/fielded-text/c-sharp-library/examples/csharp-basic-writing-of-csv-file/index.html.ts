import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
    return redirect('https://pbkware.klink.au/fielded-text/c-sharp-library/examples/csharp-basic-writing-of-csv-file/', 301);
}
