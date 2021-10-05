import { ProjectType } from '../enums/project-type.enum';

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  thumbnailImageUrl: string;
}
