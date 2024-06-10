import { withIds } from '@/technical/helpers/with-ids';

import { Event } from './types';

const events: Event[] = withIds([
  {
    date: '1996',
    title: 'Born in Mulhouse, France',
    subtitle: '',
    description: '',
    tags: [],
  },
  {
    date: '2016 - 2019',
    title: (
      <>
        Engineering school{' '}
        <a
          className="text-primary underline"
          href="https://mines-nancy.univ-lorraine.fr/"
          rel="noreferrer"
          target="_blank"
        >
          Mines de Nancy
        </a>
      </>
    ),
    subtitle: '',
    description: 'Computer Science program.',
    tags: [],
  },
  {
    date: '2019 - 2020',
    title: (
      <a
        className="text-primary underline"
        href="https://www.wls.gg/"
        rel="noreferrer"
        target="_blank"
      >
        War Legend System
      </a>
    ),
    subtitle: 'Frontend developer',
    description:
      'Designed and developed data analytic tools and tournament management platform for Fortnite players.',
    tags: ['hobby'],
  },
  {
    date: '2019 - 2024',
    title: (
      <a
        className="text-primary underline"
        href="https://goshaba.com/en/goshaba-home-en/"
        rel="noreferrer"
        target="_blank"
      >
        Goshaba
      </a>
    ),
    subtitle: 'Intern → Lead Fullstack Developer',
    description:
      'Designed, developed, deployed and maintained assessment tools based on cognitive science and video games.',
    tags: [],
  },
  {
    date: '2024 - Present',
    title: (
      <a
        className="text-primary underline"
        href="https://www.elaxenergie.com/"
        rel="noreferrer"
        target="_blank"
      >
        Elax Energie
      </a>
    ),
    subtitle: 'Senior Fullstack Software Engineer',
    description:
      'Designed, developed, deployed applications optimizing energy use in water heaters, real-time monitoring systems and user-friendly interfaces for landlords and tenants.',
    tags: [],
  },
]);

export { events };
