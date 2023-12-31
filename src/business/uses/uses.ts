import { withIds } from '@/technical/helpers/with-ids';

import { Use, UseCategories } from './types';

const uses: Use[] = withIds([
  {
    title: 'MacBook M1 Pro (14-inch, 2021) - 16 GB',
    description:
      'My faithful laptop. I use it for devs, designing and actually everything else.',
    category: UseCategories.Hardware,
  },
  {
    title: 'Keychron K2 Wireless Mechanical Keyboard (V2)',
    description:
      'One of the rare mechanical keyboard with an ANSI - FR Mac layout.',
    category: UseCategories.Hardware,
    link: 'https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard',
  },
  {
    title: 'Apple Magic Mouse',
    description: 'Best mouse for Mac user. Big cons, definitely not ergonomic.',
    category: UseCategories.Hardware,
    link: 'https://www.apple.com/shop/product/MMMQ3AM/A/magic-mouse-black-multi-touch-surface',
  },
  {
    title: 'Bose wireless QuietComfort 35 II',
    description:
      'Music is a fuel while coding and the noise cancelling is game changer.',
    category: UseCategories.Hardware,
    link: 'https://support.bose.com/s/display-articles?productId=01t8c00000OydKkAAJ&articleId=ka08c000000hH48AAE&language=en_US',
  },
  {
    title: 'Visual Studio Code',
    description:
      'Well known code editor. I use it with some extensions and Monaspace Neon font.',
    category: UseCategories.Software,
    link: 'https://code.visualstudio.com/',
  },
  {
    title: 'Notion',
    description:
      'My favorite note taking application. I use it both for work and personal stuffs.',
    category: UseCategories.Software,
    link: 'https://www.notion.so/',
    tags: ['notes'],
  },
  {
    title: 'Figma',
    description: 'Mock ups and prototypes are so easy to do with this app.',
    category: UseCategories.Software,
    link: 'https://www.figma.com/',
    tags: ['design', 'prototypes'],
  },
  {
    title: 'TypeScript',
    description:
      'I think this is mandatory for easy, safe and fast JavaScript devs.',
    category: UseCategories.Technology,
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'React',
    description:
      'Web JavaScript framework with a huge community and lot of capabilities. My go to web framework.',
    category: UseCategories.Technology,
    link: 'https://react.dev/',
    tags: ['frontend'],
  },
  {
    title: 'NextJS',
    description: 'React alone is good, but with NextJS it is way better.',
    category: UseCategories.Technology,
    link: 'https://nextjs.org/',
    tags: ['frontend', 'react'],
  },
  {
    title: 'Apollo GraphQL',
    description:
      'GraphQL APIs are fun to build and consume, even more with Apollo.',
    category: UseCategories.Technology,
    link: 'https://www.apollographql.com/',
    tags: ['backend', 'graphql'],
  },
  {
    title: 'NestJS',
    description:
      'Backend framework creating a robust structure to your application.',
    category: UseCategories.Technology,
    link: 'https://nestjs.com/',
    tags: ['backend'],
  },
  {
    title: 'Tailwindcss',
    description:
      'It might just be trend but I love it. I style my app with Tailwindcss whenever I want to go fast.',
    category: UseCategories.Technology,
    link: 'https://tailwindcss.com/',
    tags: ['frontend', 'styling'],
  },
  {
    title: 'Plasmo',
    description:
      "I'm a big fan of Chrome Extension and this is the best framework so far to build them.",
    category: UseCategories.Technology,
    link: 'https://docs.plasmo.com/',
    tags: ['extension', 'react'],
  },
  {
    title: 'MongoDB Atlas',
    description:
      'The databases I use the most. With Atlas it is super easy to deploy and manage a only database.',
    category: UseCategories.Technology,
    link: 'https://www.mongodb.com/atlas/database',
    tags: ['database'],
  },
  {
    title: 'Gitlab',
    description:
      "It's just what I use in my current job. Nothing to complain about but I've never tried something else.",
    category: UseCategories.Technology,
    link: 'https://gitlab.com/',
    tags: ['git', 'ci-cd'],
  },
  {
    title: 'AWS',
    description: 'The host in which I deploy my biggest app.',
    category: UseCategories.Technology,
    link: 'https://aws.amazon.com/',
    tags: ['host', 'infra'],
  },
  {
    title: 'Vercel',
    description:
      "When I need to deploy a little app, I'm looking at Vercel which is incredibly easy to setup.",
    category: UseCategories.Technology,
    link: 'https://vercel.com/',
    tags: ['host'],
  },
  {
    title: 'Serverless',
    description:
      'A powerful framework to deploy infra and application code at the same time. Very handy for little or middle size projects.',
    category: UseCategories.Technology,
    link: 'https://www.serverless.com/',
    tags: ['infra'],
  },
  {
    title: 'Terraform',
    description: 'Very handy for deploying and maintaining infrastructures.',
    category: UseCategories.Technology,
    link: 'https://www.terraform.io/',
    tags: ['infra'],
  },
]);

export { uses };
