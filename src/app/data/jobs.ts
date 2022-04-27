import { Job } from "../models/job.model";

 export const jobs: Job[] = [
    {
      title: 'Mobile Media (B. Sc.)',
      description:
        'Within the course of my studies I put an emphasis on web development and was already able to gain a lot of practical experience by completing numerous projects. I successfully finished my studies by graduating with honors (avg. 1.3).',
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
        'Adrodev is an agency for web and app development. During my employment there I was able to gain experience in the field of frontend development and managed to find out what it means to work in a small startup-like company.',
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
        'Daimler Protics is a 100% subsidiary of the Daimler AG, which specialises in data processing. At Daimler Protics, I helped develop the frontend of an internal Daimler web application and was able to experience how work is done in a large company.',
      startDate: '2020',
      endDate: '2020',
      employer: {
        name: 'Daimler Protics',
        logoUrl: '/assets/logos/daimler-protics-logo.png',
      },
    },
 ]