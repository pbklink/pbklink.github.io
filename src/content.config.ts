import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const postsSchema = z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
});

const blog = defineCollection({
    loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/pages/blog' }),
    schema: postsSchema,
});

const articles = defineCollection({
    loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './src/pages/articles' }),
    schema: postsSchema,
});

// const musicPlayList = defineCollection({
//     loader: file("src/data/paul-spotify-play-list.csv", { parser: (text) => parseCsv(text, { columns: true, skipEmptyLines: true })})
// });

export const collections = { blog, articles };