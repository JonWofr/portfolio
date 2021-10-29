import { TechnologyName } from '../enums/technology-name.enum';

export interface Technology {
  name: TechnologyName;
  iconUrl: string;
  accentColor: string;
}
