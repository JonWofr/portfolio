import { JobType } from '../enums/job-type.enum';

export interface Job {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  type: JobType;
  employer: {
    name: string;
    logoUrl: string;
  };
}
