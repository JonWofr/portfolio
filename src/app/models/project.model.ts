import { ProjectType } from '../enums/project-type.enum';
import { TechnologyName } from '../enums/technology-name.enum';

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  thumbnailImageUrl: string;
  shortDescription: string;
  task: string;
  result: string;
  slideshowImagesUrls: string[];
  technologyNames: TechnologyName[];
  accentColor?: string;
  websiteUrl?: string;
  codeUrl?: string;
}
