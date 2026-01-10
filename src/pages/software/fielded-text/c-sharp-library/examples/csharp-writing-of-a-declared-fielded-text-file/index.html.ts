import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://pbkware.klink.au/fielded-text/c-sharp-library/examples/csharp-writing-of-a-declared-fielded-text-file/', 301);
};
