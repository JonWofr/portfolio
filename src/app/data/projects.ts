import { ProjectType } from '../enums/project-type.enum';
import { Project } from '../models/project.model';
import { TechnologyName } from '../enums/technology-name.enum';

export const projects: Project[] = [
  {
    id: 'deemo',
    title: 'Deemo',
    type: ProjectType.DAPP,
    thumbnailImageUrl: '/assets/images/projects/deemo/deemo-thumbnail.png',
    shortDescription:
      'With Deemo you can mint audio memos like sounds, vocals, noises as NFTs on the Polygon blockchain.',
    task: 'Deemo was built within a 3-day long weekend challenge. The challenge consisted of building a decentralised application from A-Z with a set of technologies like Next.js, tailwindcss, wagmi etc. that would use the Polygon blockchain within the specified timeframe.',
    result:
      'After coming up with the idea and creating a basic design mockup I built a dApp with Next.js that lets you select/record memos. A memo can then be minted on Polygon with the help of the wagmi library. The NFT data is stored on IPFS. All existing Deemos (decentralised memos) are shown and can be listened to on the website.',
    slideshowImagesUrls: [
      '/assets/images/projects/deemo/deemo-1.jpg',
      '/assets/images/projects/deemo/deemo-2.jpg',
      '/assets/images/projects/deemo/deemo-3.jpg',
      '/assets/images/projects/deemo/deemo-4.jpg',
    ],
    technologyNames: [
      TechnologyName.NEXT,
      TechnologyName.REACT,
      TechnologyName.TAILWINDCSS,
      TechnologyName.ETHERS,
      TechnologyName.WAGMI,
      TechnologyName.IPFS,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.HTML,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
    ],
    websiteUrl: 'https://deemo.vercel.app/',
    codeUrl: 'https://github.com/JonWofr/deemo',
  },
  {
    id: 'artimon',
    title: 'Artimon',
    type: ProjectType.DAPP,
    thumbnailImageUrl: '/assets/images/projects/artimon/artimon-thumbnail.png',
    shortDescription:
      'Artimon is a decentralised application that lets you generate unique monsters (Artimons) with the help of AI which can then be minted as NFTs.',
    task: 'The challenge was to create a website which makes it possible to bring monsters generated by a machine learning model onto the Ethereum blockchain in the form of NFTs and display all Aritmons with their corresponding owner.',
    result:
      'I built a React dApp which uses a Tensorflow model to generate unique Artimons. Artimons can then be minted as NFTs via the MetaMask wallet. Furthermore the data of all Artimons ever minted is read from the Ethereum blockchain and displayed in the form of the Artidex.',
    slideshowImagesUrls: [
      '/assets/images/projects/artimon/artimon-1.jpg',
      '/assets/images/projects/artimon/artimon-2.jpg',
      '/assets/images/projects/artimon/artimon-3.jpg',
      '/assets/images/projects/artimon/artimon-4.jpg',
      '/assets/images/projects/artimon/artimon-5.jpg',
      '/assets/images/projects/artimon/artimon-6.jpg',
    ],
    technologyNames: [
      TechnologyName.REACT,
      TechnologyName.TAILWINDCSS,
      TechnologyName.ETHERS,
      TechnologyName.META_MASK,
      TechnologyName.IPFS,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.HTML,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
    ],
    websiteUrl: 'https://artimon.web.app/',
    codeUrl: 'https://github.com/JonWofr/artimon-frontend',
  },
  {
    id: 'thai-rin-ruam',
    title: 'Thai Rin Ruam',
    type: ProjectType.WEB_APP,
    thumbnailImageUrl:
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-thumbnail.png',
    shortDescription:
      'The website is the digital presence of the renowned Thai restaurant Thai Rin Ruam based in Kevelaer, Germany.',
    task: 'The challenge was to renew their existing website. This primarily included a modern redesign, making the website responsive and the functionality to change the menu and the news section by Thai Rin Ruam themselves at any given time.',
    result:
      'I created a web application with the help of Angular based on a design mockup. The website is divided into two spaces, one for users, one for admins. The former displays information like news, all available dishes, address information etc. The latter is used to provide the functionality for authenticated users to dynamically change dishes and news which enabled Thai Rin Ruam to make changes to the website themselves after project handover.',
    slideshowImagesUrls: [
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-1.jpg',
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-2.jpg',
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-3.jpg',
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-4.jpg',
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-5.jpg',
      '/assets/images/projects/thai-rin-ruam/thai-rin-ruam-6.jpg',
    ],
    technologyNames: [
      TechnologyName.ANGULAR,
      TechnologyName.SASS,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.FIREBASE,
      TechnologyName.HTML,
      TechnologyName.JAVA_SCRIPT,
    ],
    websiteUrl: 'https://thairinruam.de/',
    codeUrl: 'https://github.com/JonWofr/thai-rin-ruam',
  },
  {
    id: 'tomke-nils',
    title: 'Tomke Nils',
    type: ProjectType.WEB_APP,
    thumbnailImageUrl:
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-thumbnail.png',
    shortDescription:
      'The web application serves as a portfolio for the rising photo-, videographer, social media manager and influencer Tomke Nils.',
    task: 'The challenge was to first come up with a modern and sleek design and then build a responsive website that would display information regarding provided services, recent projects, a live Instagram feed etc. He also requested the functionality to make changes to certain content himself after project handover.',
    result:
      'A responsive Angular application was created based on a design mockup which encompasses a user and an admin space. The user space shows static information like services, contact information etc. as well as dynamic information like projects and an Instagram feed. The dynamic information is controlled via the admin space which is login-locked and provides an easy-to-use interface to create, edit and delete information by Tomke himself.',
    slideshowImagesUrls: [
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-1.jpg',
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-2.jpg',
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-3.jpg',
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-4.jpg',
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-5.jpg',
      '/assets/images/projects/tomke-portfolio/tomke-portfolio-6.jpg',
    ],
    technologyNames: [
      TechnologyName.ANGULAR,
      TechnologyName.SASS,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.FIREBASE,
      TechnologyName.HTML,
      TechnologyName.JAVA_SCRIPT,
    ],
    websiteUrl: 'https://tomke-nils.de/',
    codeUrl: 'https://github.com/JonWofr/tomke-portfolio',
  },
];
