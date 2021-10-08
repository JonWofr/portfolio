import { ProjectType } from '../enums/project-type.enum';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  thumbnailImageUrl: string;
  teaser: string;
  shortDescription: string;
  problem: string;
  solution: string;
  slideshowImagesUrls: string[];
  technologyNames: string[];
  execution: string;
}
