import { ProjectType } from '../enums/project-type.enum';
import { Project } from '../models/project.model';
import { TechnologyName } from '../enums/technology-name.enum';

export const projects: Project[] = [
  {
    id: 'fitstagram',
    title: 'Fitstagram',
    type: ProjectType.MOBILE,
    thumbnailImageUrl:
      '/assets/images/projects/fitstagram/fitstagram-thumbnail.png',
    shortDescription:
      'Fitstagram ist ein soziales Netzwerk, auf dem sich Nutzer gegenseitig mit Hilfe von Challenges und Gamification-Elementen zu sportlichen Aktivitäten motivieren können.',
    task: ' Auf Basis einer Design-Vorlage sollte ich als Teammitglied an der Programmierung des Frontends und an der Anbindung des Backends mitwirken.',
    result:
      'Mit Hilfe von Angular erstellte ich mehrere Screens des Frontends und verknüpfte diese mit dem Backend.',
    slideshowImagesUrls: [
      '/assets/images/projects/fitstagram/fitstagram-screen-1.png',
      '/assets/images/projects/fitstagram/fitstagram-screen-2.png',
      '/assets/images/projects/fitstagram/fitstagram-screen-3.png',
      '/assets/images/projects/fitstagram/fitstagram-screen-4.png',
      '/assets/images/projects/fitstagram/fitstagram-screen-5.png',
    ],
    technologyNames: [
      TechnologyName.HTML,
      TechnologyName.CSS,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.ANGULAR,
    ],
    execution: '',
    accentColor: '#6568CF',
  },
  {
    id: 'dein-geschenkgutschein',
    title: 'Dein Geschenkgutschein',
    type: ProjectType.RESPONSIVE,
    thumbnailImageUrl:
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-thumbnail.png',
    shortDescription:
      'dein geschenkgutschein ist ein Marketplace für Geschenkgutscheine, auf dem kleine, lokale Unternehmen Gutscheine anbieten können, die von den Nutzern gekauft werden können.',
    task: 'Auf Basis einer Designvorlage sollte ich ein bereits bestehendes Frontend überarbeiten, erweitern und responsive machen. Zusätzlich sollte ich die Anbindung an das Backend übernehmen.',
    result:
      'Mit Hilfe der Library React überarbeitete ich gemäß der Designvorlage bereits bestehende Screens, erstellte neue und machte Anpassungen für Mobile- und Tablet-Layouts. Zusätzlich band ich das Backend an für die Darstellung der echten Daten.',
    slideshowImagesUrls: [
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-1-1080p.png',
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-2-1200p.png',
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-3-1200p.png',
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-4.png',
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-5.png',
      '/assets/images/projects/dein-geschenkgutschein/dein-geschenkgutschein-screen-6.png',
    ],
    technologyNames: [
      TechnologyName.HTML,
      TechnologyName.CSS,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
      TechnologyName.REACT,
    ],
    execution: '',
    accentColor: '#2A2A2A',
  },
  {
    id: 'agile-toolbox',
    title: 'Agile Toolbox',
    type: ProjectType.DESKTOP,
    thumbnailImageUrl:
      '/assets/images/projects/agile-toolbox/agile-toolbox-thumbnail.png',
    shortDescription:
      'Agile Toolbox dient als Informationsplattform für Methoden der agilen Produktentwicklung. Nutzer der Plattform können die für ihr aktuelles Projekt nützlichen Methoden ihrer “Toolbox” hinzufügen, wodurch sie diese und deren Funktionsweisen stets im Blick behalten.',
    task: 'Auf Basis einer Designvorlage sollte ich das Frontend der Applikation programmieren und die Datenbank anbinden.',
    result:
      'Ich programmierte die Seite von Grund auf mit Hilfe der Library React und stellte die Brücke zur Datenbank bereit.',
    slideshowImagesUrls: [
      '/assets/images/projects/agile-toolbox/agile-toolbox-screen-1.png',
      '/assets/images/projects/agile-toolbox/agile-toolbox-screen-2.png',
      '/assets/images/projects/agile-toolbox/agile-toolbox-screen-3.png',
    ],
    technologyNames: [
      TechnologyName.HTML,
      TechnologyName.CSS,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
      TechnologyName.REACT,
    ],
    execution: '',
    accentColor: '#000000',
  },
  {
    id: 'paintable-paws',
    title: 'Paintable Paws',
    type: ProjectType.MOBILE,
    thumbnailImageUrl:
      '/assets/images/projects/paintable-paws/paintable-paws-thumbnail.png',
    shortDescription:
      'Paintable Paws ermöglicht es Fotografien von Haustieren mit Hilfe von KI in Kunst zu verwandeln, wobei zwischen einer Vielzahl von verschiedenen Kunststilen gewählt werden kann.',
    task: 'Ich sollte ein Machine-Learning-Modell optimieren, welches ein beliebiges Foto in ein Kunstwerk mit einem beliebigen Kunststil verwandeln kann. Außerdem sollte ich mich um die Anbindung dieses Modells an die Web-Applikation kümmern. Zusätzlich sollte ich bei Bedarf noch im Frontend aushelfen.',
    result:
      'Ich habe ein PyTorch Machine-Learning-Modell so optimiert, das es einen beliebigen Style auf ein beliebiges Bild übertragen kann. Für die Inferenz des trainierten Modells habe ich einen Flask-Server in Python aufgesetzt. Zusätzlich erstellte ich das Backend der Web-Applikation mit Hilfe von Firebase. Das Firebase-Backend diente dabei als Vermittler zwischen Frontend und Machine-Learning-Modell. Zuletzt half ich auch noch im Angular-Frontend aus.',
    slideshowImagesUrls: [
      '/assets/images/projects/paintable-paws/paintable-paws-screen-1-1200p.png',
      '/assets/images/projects/paintable-paws/paintable-paws-screen-2-1200p.png',
      '/assets/images/projects/paintable-paws/paintable-paws-screen-3-1200p.png',
      '/assets/images/projects/paintable-paws/paintable-paws-screen-4-1200p.png',
      '/assets/images/projects/paintable-paws/paintable-paws-screen-5-1200p.png',
    ],
    technologyNames: [
      TechnologyName.HTML,
      TechnologyName.CSS,
      TechnologyName.SASS,
      TechnologyName.JAVA_SCRIPT,
      TechnologyName.TYPE_SCRIPT,
      TechnologyName.ANGULAR,
      TechnologyName.FIREBASE,
      TechnologyName.PYTHON,
      TechnologyName.PY_TORCH,
    ],
    execution: '',
    accentColor: '#554A7D',
  },
];
