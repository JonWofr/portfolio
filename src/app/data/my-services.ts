import { MyService } from '../models/my-service.model';

export const myServices: MyService[] = [
  {
    iconUrl: '/assets/icons/client-icon.svg',
    title: 'Frontend development',
    description:
      'I create stunning GUIs based on design mockups with the help of modern frontend frameworks/libraries .',
  },
  {
    iconUrl: '/assets/icons/blockchain-icon.svg',
    title: 'Web3\ndevelopment',
    description:
      'In order for an app to become a dApp it needs to communicate with the blockchain. I can take care of that!',
  },
  {
    iconUrl: '/assets/icons/deployment-icon.svg',
    title: 'Deployment',
    description:
      'I make the transition from development to live environment happen.',
  },
];
