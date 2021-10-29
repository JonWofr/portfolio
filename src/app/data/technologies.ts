import { Technology } from '../models/technology.model';
import { TechnologyName } from '../enums/technology-name.enum';

export const technologies: Technology[] = [
  {
    name: TechnologyName.ANGULAR,
    iconUrl: '/assets/logos/technologies/angular-logo.svg',
    accentColor: '#E34437',
  },
  {
    name: TechnologyName.REACT,
    iconUrl: '/assets/logos/technologies/react-logo.svg',
    accentColor: '#61DAFB',
  },
  {
    name: TechnologyName.HTML,
    iconUrl: '/assets/logos/technologies/html-logo.svg',
    accentColor: '#E34F2D',
  },
  {
    name: TechnologyName.CSS,
    iconUrl: '/assets/logos/technologies/css-logo.svg',
    accentColor: '#1B73BA',
  },
  {
    name: TechnologyName.JAVA_SCRIPT,
    iconUrl: '/assets/logos/technologies/javascript-logo.svg',
    accentColor: '#F0DB4F',
  },
  {
    name: TechnologyName.SASS,
    iconUrl: '/assets/logos/technologies/sass-logo.svg',
    accentColor: '#CF649A',
  },
  {
    name: TechnologyName.MONGO_DB,
    iconUrl: '/assets/logos/technologies/mongodb-logo.svg',
    accentColor: '#6CAC48',
  },
  {
    name: TechnologyName.MY_SQL,
    iconUrl: '/assets/logos/technologies/mysql-logo.svg',
    accentColor: '#1E546B',
  },
  {
    name: TechnologyName.PHP,
    iconUrl: '/assets/logos/technologies/php-logo.svg',
    accentColor: '#8993BE',
  },
  {
    name: TechnologyName.FIREBASE,
    iconUrl: '/assets/logos/technologies/firebase-logo.svg',
    accentColor: '#FBC927',
  },
  {
    name: TechnologyName.PYTHON,
    iconUrl: '/assets/logos/technologies/python-logo.svg',
    accentColor: '#366E9D',
  },
  {
    name: TechnologyName.TYPE_SCRIPT,
    iconUrl: '/assets/logos/technologies/typescript-logo.svg',
    accentColor: '#167ACC',
  },
  {
    name: TechnologyName.PY_TORCH,
    iconUrl: '/assets/logos/technologies/pytorch-logo.svg',
    accentColor: '#EA4B2F',
  },
];
