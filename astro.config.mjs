// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

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
      '/Software/Retab/Retab.pdf': '/software/retab/retab.pdf',
      '/software/fielded-text/c-sharp-library/examples/index.html': '/software/fielded-text/c-sharp-library/examples/',
      '/c-sharp-library/examples/write_headings.html': '/c-sharp-library/examples/csharp-writing-of-csv-file-including-headings/',
      '/c-sharp-library/examples/write_events.html': '/c-sharp-library/examples/csharp-writing-of-csv-file-using-events/',
      '/c-sharp-library/examples/write_comments.html': '/c-sharp-library/examples/csharp-writing-of-csv-file-with-comments/',
      '/delphi-library/examples/basicread.html': '/delphi-library/examples/delphi-basic-reading-of-csv-file/',
      '/delphi-library/examples/basicwrite.html': '/delphi-library/examples/delphi-basic-writing-of-csv-file/',
      '/post/a-variation-of-cost-disease/': '/articles/a-variation-of-cost-disease/',
      '/post/closing-the-r+d-funding-circle/': '/articles/closing-the-rd-funding-circle/',
      '/post/innovation-diffusion/': '/articles/innovation-diffusion/',
      '/post/software-startup-rd-process/': '/articles/software-startup-rd-process/',
      '/post/understanding-rd-subsidies/': '/articles/understanding-rd-subsidies/',
      '/post/university-competition-exporting-skills-or-improving-domestic-skills/': '/articles/university-competition-exporting-skills-or-improving-domestic-skills/',
      '/post/Connecting Novation Impulse keyboard to Studio One/': '/blog/Connecting Novation Impulse keyboard to Studio One/',
      '/post/opposite-of-monopoly/': '/blog/opposite-of-monopoly/',
      '/post/change-theme-to-personal-web/': '/blog/change-theme-to-personal-web/',
      '/post/excel-2016-rtd/': '/blog/excel-2016-rtd/',
      '/post/hugo-on-tablet/': '/blog/hugo-on-tablet/',
      '/post/migrate-to-klink-au/': '/blog/migrate-to-klink-au/',
      '/post/website-fixed/': '/blog/website-fixed/',
      '/post/website-migrated-to-hugo/': '/blog/website-migrated-to-hugo/',
  },
  

  integrations: [sitemap(), mdx()],

  experimental: {
    svg: true,
  },
});