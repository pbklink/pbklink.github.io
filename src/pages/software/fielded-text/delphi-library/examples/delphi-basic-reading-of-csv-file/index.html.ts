import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
    return redirect('https://pbkware.klink.au/fielded-text/delphi-library/examples/delphi-basic-reading-of-csv-file/', 301);
}
