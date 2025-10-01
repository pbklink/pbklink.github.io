// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

const canonicalHost = 'paul.klink.au'; // Put into environmental variable for BaseLayout

export const githubHost = 'pbklink.github.io';
export const githubSite = `https://${githubHost}`;

// https://astro.build/config
export default defineConfig({
  site: 'https://paul.klink.au',
  trailingSlash: 'always',

  redirects: {
      '/Music/index.html': '/music/', // Will not compile went built on Windows due to case insensitive file match
      '/Music/SailorJim.html': '/music/sailor-jim/',
      '/Music/montage/index.html': '/music/montage/', // Will not compile went built on Windows due to case insensitive file match
      '/Music/montage/bio/index.html': '/music/montage/bio/', // Will not compile went built on Windows due to case insensitive file match
      '/Music/montage/songs.html': '/music/montage/songs/',
      '/Software/index.html': '/software/', // Will not compile went built on Windows due to case insensitive file match
      '/Software/FieldedText/index.html': '/software/fielded-text/',
      '/Software/Delphi/index.html': 'software/delphi/', // Will not compile went built on Windows due to case insensitive file match
      '/Software/Delphi/ActionUpdateInActiveX.htm': '/software/delphi/action-update-in-active-x/',
      '/Software/Delphi/DebuggingIsapiWithIisExpress.htm': '/software/delphi/debugging-isapi-with-iis-express/',
      '/Software/Delphi/DebuggingIsapiWithIisExpress': '/software/delphi/debugging-isapi-with-iis-express/',
      '/Software/Delphi/ImprovedRadioGroup.htm': '/software/delphi/improved-radio-group/',
      '/Software/Retab/index.html': '/software/retab/', // Will not compile went built on Windows due to case insensitive file match
      '/Software/Retab/Retab.pdf': '/files/retab.pdf',
      '/software/fielded-text/': '/software/fielded-text',
      '/software/fielded-text/c-sharp-library/': '/software/fielded-text/c-sharp-library',
      '/software/fielded-text/c-sharp-library/examples/': '/software/fielded-text/c-sharp-library/examples',
      '/software/fielded-text/c-sharp-library/examples/write_headings.html': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-including-headings/',
      '/software/fielded-text/c-sharp-library/examples/write_events.html': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-using-events/',
      '/software/fielded-text/c-sharp-library/examples/write_comments.html': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-with-comments/',
      '/software/fielded-text/c-sharp-library/examples/csharp-basic-example-meta-file/': '/software/fielded-text/c-sharp-library/examples/csharp-basic-example-meta-file',
      '/software/fielded-text/c-sharp-library/examples/csharp-basic-reading-of-csv-file-with-loaded-meta/': '/software/fielded-text/c-sharp-library/examples/csharp-basic-reading-of-csv-file-with-loaded-meta',
      '/software/fielded-text/c-sharp-library/examples/csharp-basic-reading-of-csv-file-with-meta-generated-programmatically/': '/software/fielded-text/c-sharp-library/examples/csharp-basic-reading-of-csv-file-with-meta-generated-programmatically',
      '/software/fielded-text/c-sharp-library/examples/csharp-basic-writing-of-csv-file/': '/software/fielded-text/c-sharp-library/examples/csharp-basic-writing-of-csv-file',
      '/software/fielded-text/c-sharp-library/examples/csharp-build-meta-for-csv-file-with-sequences/': '/software/fielded-text/c-sharp-library/examples/csharp-build-meta-for-csv-file-with-sequences',
      '/software/fielded-text/c-sharp-library/examples/csharp-counting-of-records-in-a-csv-file/': '/software/fielded-text/c-sharp-library/examples/csharp-counting-of-records-in-a-csv-file',
      '/software/fielded-text/c-sharp-library/examples/csharp-file-with-fixed-width-and-delimited-fields/': '/software/fielded-text/c-sharp-library/examples/csharp-file-with-fixed-width-and-delimited-fields',
      '/software/fielded-text/c-sharp-library/examples/csharp-reading-csv-file-with-sequences/': '/software/fielded-text/c-sharp-library/examples/csharp-reading-csv-file-with-sequences',
      '/software/fielded-text/c-sharp-library/examples/csharp-reading-csv-file-with-sequences-using-ordinals/': '/software/fielded-text/c-sharp-library/examples/csharp-reading-csv-file-with-sequences-using-ordinals',
      '/software/fielded-text/c-sharp-library/examples/csharp-reading-of-csv-file-using-events/': '/software/fielded-text/c-sharp-library/examples/csharp-reading-of-csv-file-using-events',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-csv-file-with-sequences/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-csv-file-with-sequences',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-csv-file-with-sequences-using-events/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-csv-file-with-sequences-using-events',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-a-declared-fielded-text-file/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-a-declared-fielded-text-file',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-including-headings/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-including-headings',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-using-events/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-using-events',
      '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-with-comments/': '/software/fielded-text/c-sharp-library/examples/csharp-writing-of-csv-file-with-comments',
      '/software/fielded-text/delphi-library/': '/software/fielded-text/delphi-library',
      '/software/fielded-text/delphi-library/examples/': '/software/fielded-text/delphi-library/examples',
      '/software/fielded-text/delphi-library/examples/basicread.html': '/software/fielded-text/delphi-library/examples/delphi-basic-reading-of-csv-file/',
      '/software/fielded-text/delphi-library/examples/basicwrite.html': '/software/fielded-text/delphi-library/examples/delphi-basic-writing-of-csv-file/',
      '/software/fielded-text/delphi-library/examples/delphi-basic-reading-of-csv-file/': '/software/fielded-text/delphi-library/examples/delphi-basic-reading-of-csv-file',
      '/software/fielded-text/delphi-library/examples/delphi-basic-writing-of-csv-file/': '/software/fielded-text/delphi-library/examples/delphi-basic-writing-of-csv-file',
      '/software/fielded-text/features/': '/software/fielded-text/features',
      '/software/fielded-text/fteditor/': '/software/fielded-text/fteditor',
      '/software/fielded-text/fteditor/creating-meta-file-using-fteditor/': '/software/fielded-text/fteditor/creating-meta-file-using-fteditor',
      '/software/fielded-text/ftvalid/': '/software/fielded-text/ftvalid',
      '/post/a-variation-of-cost-disease/': '/articles/a-variation-of-cost-disease/',
      '/post/closing-the-r+d-funding-circle/': '/articles/closing-the-rd-funding-circle/',
      '/post/innovation-diffusion/': '/articles/innovation-diffusion/',
      '/post/software-startup-rd-process/': '/articles/software-startup-rd-process/',
      '/post/understanding-rd-subsidies/': '/articles/understanding-rd-subsidies/',
      '/post/university-competition-exporting-skills-or-improving-domestic-skills/': '/articles/university-competition-exporting-skills-or-improving-domestic-skills/',
      '/post/connecting-novation-impulse-keyboard-to-studio-one/': '/blog/connecting-novation-impulse-keyboard-to-studio-one/',
      '/post/opposite-of-monopoly/': '/blog/opposite-of-monopoly/',
      '/post/change-theme-to-personal-web/': '/blog/change-theme-to-personal-web/',
      '/post/excel-2016-rtd/': '/blog/excel-2016-rtd/',
      '/post/hugo-on-tablet/': '/blog/hugo-on-tablet/',
      '/post/migrate-to-klink-au/': '/blog/migrate-to-klink-au/',
      '/post/website-fixed/': '/blog/website-fixed/',
      '/post/website-migrated-to-hugo/': '/blog/website-migrated-to-hugo/',
      '/tags/productivity/': '/articles/productivity/',
  },

  integrations: [
    sitemap({
      // Change sitemap URLs to use custom host supplied to GitHub.
      serialize(item) {
        const url = new URL(item.url);
        if (url.host === githubHost) {
            url.host = canonicalHost;
        }
        item.url = url.href;
        return item;
      },
      filter(pageUrl) {
        // Exclude draft articles from sitemap
        return !pageUrl.toLowerCase().includes('draft');
      }
    }),
    mdx()
  ],
});