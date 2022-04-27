import { ProjectType } from '../enums/project-type.enum';
import { Project } from '../models/project.model';
import { TechnologyName } from '../enums/technology-name.enum';

export const projects: Project[] = [
  {
    id: 'paintable-paws',
    title: 'Paintable Paws',
    type: ProjectType.MOBILE,
    thumbnailImageUrl:
      '/assets/images/projects/paintable-paws/paintable-paws-thumbnail.png',
    shortDescription:
      'Paintable Paws allows you to turn photographs of pets into art using AI, with a variety of different art styles to choose from.',
    task: 'The challenge was to optimise a machine learning model that can turn an arbitrary photo into an artwork with a user-defined style. A web application should then be built to enable users to upload a photograph of their pet and select their preferred style as well as submit their email so that they can receive the artwork once it\'s processed by the AI.',
    result:
      'I optimised a machine learning model so that it can apply any style to any image. Furthermore I assisted in developing the frontend application in Angular and took care of the connection to the backend with the help of Firebase.',
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
  {
    id: 'paintable-paws-2',
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
  {
    id: 'paintable-paws-3',
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
  {
    id: 'paintable-paws-4',
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
