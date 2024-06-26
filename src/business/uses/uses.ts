import { withIds } from '@/technical/helpers/with-ids';

import { Use, UseCategories, UseCategory } from './types';

const uses: Record<UseCategory, Use[]> = {
  [UseCategories.Technology]: withIds(
    [
      {
        title: 'TypeScript',
        description:
          'I think this is mandatory for easy, safe and fast JavaScript devs.',
        link: 'https://www.typescriptlang.org/',
      },
      {
        title: 'React',
        description:
          'Web JavaScript framework with a huge community and lot of capabilities. My go to web framework.',
        link: 'https://react.dev/',
        tags: ['frontend'],
      },
      {
        title: 'NextJS',
        description: 'React alone is good, but with NextJS it is way better.',
        link: 'https://nextjs.org/',
        tags: ['frontend', 'react'],
      },
      {
        title: 'Apollo GraphQL',
        description:
          'GraphQL APIs are fun to build and consume, even more with Apollo.',
        link: 'https://www.apollographql.com/',
        tags: ['backend', 'graphql'],
      },
      {
        title: 'NestJS',
        description:
          'Backend framework creating a robust structure to your application.',
        link: 'https://nestjs.com/',
        tags: ['backend'],
      },
      {
        title: 'Tailwindcss',
        description:
          'It might just be trend but I love it. I style my app with Tailwindcss whenever I want to go fast.',
        link: 'https://tailwindcss.com/',
        tags: ['frontend', 'styling'],
      },
      {
        title: 'Plasmo',
        description:
          "I'm a big fan of Chrome Extension and this is the best framework so far to build them.",
        link: 'https://docs.plasmo.com/',
        tags: ['extension', 'react'],
      },
      {
        title: 'MongoDB Atlas',
        description:
          'The databases I use the most. With Atlas it is super easy to deploy and manage a only database.',
        link: 'https://www.mongodb.com/atlas/database',
        tags: ['database'],
      },
      {
        title: 'Gitlab',
        description:
          "It's just what I use in my current job. Nothing to complain about but I've never tried something else.",
        link: 'https://gitlab.com/',
        tags: ['git', 'ci-cd'],
      },
      {
        title: 'AWS',
        description: 'The host in which I deploy my biggest app.',
        link: 'https://aws.amazon.com/',
        tags: ['host', 'infra'],
      },
      {
        title: 'Vercel',
        description:
          "When I need to deploy a little app, I'm looking at Vercel which is incredibly easy to setup.",
        link: 'https://vercel.com/',
        tags: ['host'],
      },
      {
        title: 'Serverless',
        description:
          'A powerful framework to deploy infra and application code at the same time. Very handy for little or middle size projects.',
        link: 'https://www.serverless.com/',
        tags: ['infra'],
      },
      {
        title: 'Terraform',
        description:
          'Very handy for deploying and maintaining infrastructures.',
        link: 'https://www.terraform.io/',
        tags: ['infra'],
      },
    ],
    UseCategories.Technology
  ),
  [UseCategories.Software]: withIds(
    [
      {
        title: 'Visual Studio Code',
        description:
          'Well known code editor. I use it with some extensions and Monaspace Neon font.',
        link: 'https://code.visualstudio.com/',
      },
      {
        title: 'Notion',
        description:
          'My favorite note taking application. I use it both for work and personal stuffs.',
        link: 'https://www.notion.so/',
        tags: ['notes'],
      },
      {
        title: 'Figma',
        description: 'Mock ups and prototypes are so easy to do with this app.',
        link: 'https://www.figma.com/',
        tags: ['design', 'prototypes'],
      },
      {
        title: 'Strut',
        description:
          'AI powered writing assistant. Some articles in this blog are written with this application.',
        link: 'https://strut.so',
        tags: ['writing', 'AI'],
      },
    ],
    UseCategories.Software
  ),
  [UseCategories.Hardware]: withIds(
    [
      {
        title: 'MacBook M1 Pro (14-inch, 2021) - 16 GB',
        description:
          'My faithful laptop. I use it for devs, designing and actually everything else.',
      },
      {
        title: 'iPad Pro (14-inch, 3rd generation)',
        description:
          'It mainly replaces notebooks and papers but also sometimes my laptops.',
      },
      {
        title: 'Keychron K2 Wireless Mechanical Keyboard (V2)',
        description:
          'One of the rare mechanical keyboard with an ANSI - FR Mac layout.',
        link: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
      },
      {
        title: 'Apple Magic Mouse',
        description:
          'Best mouse for Mac user. Big cons, definitely not ergonomic.',
        link: 'https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface',
      },
      {
        title: 'Bose wireless QuietComfort 35 II',
        description:
          'Music is a fuel while coding and the noise cancelling is game changer.',
        link: 'https://support.bose.com/s/display-articles?productId=01t8c00000OydKkAAJ&articleId=ka08c000000hH48AAE&language=en_US',
      },
      {
        title: 'Apple Watch Series 4 (44 mm)',
        description:
          'Absolute must-have for trails and hikes. Mostly a gadget for everything else.',
      },
    ],
    UseCategories.Hardware
  ),
};

export { uses };
