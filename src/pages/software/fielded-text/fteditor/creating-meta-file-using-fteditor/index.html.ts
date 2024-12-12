import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
    return redirect('https://pbkware.klink.au/fielded-text/fteditor/creating-meta-file-using-fteditor/', 301);
}
