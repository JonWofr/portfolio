import { Job } from '../models/job.model';

export const jobs: Job[] = [
  {
    title: 'Computer Science (B. Sc.)',
    description:
      'Within the course of my studies I put an emphasis on web development and was already able to gain a lot of practical experience by completing numerous projects. I successfully finished my studies by graduating with honours (avg. 1.3).',
    startDate: '2017',
    endDate: '2021',
    employer: {
      name: 'Stuttgart Media University',
      logoUrl: '/assets/logos/hdm-logo.svg',
    },
  },
  {
    title: 'Frontend developer',
    description:
      'Adrodev is an agency for web and app development. During my employment there I worked on numerous client projects using React and managed to find out what it means to work in a small startup-like company.',
    startDate: '2019',
    endDate: '2020',
    employer: {
      name: 'Adrodev GmbH',
      logoUrl: '/assets/logos/adrodev-logo.png',
    },
  },
  {
    title: 'Frontend developer',
    description:
      'Daimler Protics is a 100% subsidiary of the Daimler AG, which specialises in data processing. At Daimler Protics, I helped develop the frontend of an internal Daimler web application with the help of the Angular framework.',
    startDate: '2020',
    endDate: '2020',
    employer: {
      name: 'Daimler Protics GmbH',
      logoUrl: '/assets/logos/daimler-protics-logo.png',
    },
  },
  {
    title: 'Frontend & Web3 Developer',
    description:
      'I built several web apps and dApps for clients coming from Europe and America. With an eye for design, the use of state of the art technology and years of experience I helped them modernise and scale their businesses.',
    startDate: '2021',
    endDate: 'now',
    employer: {
      name: 'Freelance',
      logoUrl: '/assets/logos/portfolio-logo-bold-with-background.svg',
    },
  },
];
