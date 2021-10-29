import { MyService } from '../models/my-service.model';

export const myServices: MyService[] = [
  {
    iconUrl: '/assets/icons/client-icon.svg',
    title: 'Frontend-Entwicklung',
    description:
      'Mit Hilfe aktueller Web-Frameworks kann ich aus einer Designvorlage eine schicke und funktionelle Website bauen',
  },
  {
    iconUrl: '/assets/icons/server-icon.svg',
    title: 'Backend-Entwicklung',
    description:
      'Datenmanagement, Authentifizierungs- oder Payment-Lösungen etc.: Ich übernehm’s',
  },
  {
    iconUrl: '/assets/icons/deployment-icon.svg',
    title: 'Deployment',
    description:
      'Ich mach den Schritt von der  Entwicklungs- zur Live-Umgebung',
  },
];
