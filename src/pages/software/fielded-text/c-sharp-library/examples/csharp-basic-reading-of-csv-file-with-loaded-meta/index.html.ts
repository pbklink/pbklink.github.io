import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://pbkware.klink.au/fielded-text/c-sharp-library/examples/csharp-basic-reading-of-csv-file-with-loaded-meta/', 301);
};
