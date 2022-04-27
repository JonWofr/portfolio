
export interface Job {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  employer: {
    name: string;
    logoUrl: string;
  };
}
