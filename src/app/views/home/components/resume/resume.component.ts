import { Component, OnInit } from '@angular/core';
import { JobType } from 'src/app/enums/job-type.enum';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  academicJobs: Job[] = [
    {
      title: 'Allgemeine Hochschulreife',
      description: 'Consectetur ex ea sit magna.',
      startDate: '2008',
      endDate: '2016',
      type: JobType.ABITUR,
      employer: {
        name: 'Kardinal von Galen Gymnasium',
        logoUrl: '/assets/logos/daimler-protics-logo.png',
      },
    },
    {
      title: 'Mobile Medien (B. Sc.)',
      description: 'Id amet non non id nulla dolor culpa occaecat qui.',
      startDate: '2017',
      endDate: '2021',
      type: JobType.STUDIUM,
      employer: {
        name: 'Hochschule der Medien',
        logoUrl: '/assets/logos/adrodev-logo.png',
      },
    },
  ];

  jobs: Job[] = [
    {
      title: 'Frontend-Entwickler',
      description:
        'Mollit non qui ea laboris ipsum quis ut ullamco eiusmod incididunt. Voluptate laboris ut minim amet enim incididunt eiusmod quis reprehenderit est incididunt sit. Id aliquip sit proident do culpa et.',
      startDate: '2019',
      endDate: '2020',
      type: JobType.PRAKTIKUM,
      employer: {
        name: 'Adrodev',
        logoUrl: '/assets/logos/adrodev-logo.png',
      },
    },
    {
      title: 'Frontend-Entwickler',
      description:
        'Mollit non qui ea laboris ipsum quis ut ullamco eiusmod incididunt. Voluptate laboris ut minim amet enim incididunt eiusmod quis reprehenderit est incididunt sit. Id aliquip sit proident do culpa et.',
      startDate: '2019',
      endDate: '2020',
      type: JobType.WERKSTUDIUM,
      employer: {
        name: 'Daimler Protics',
        logoUrl: '/assets/logos/daimler-protics-logo.png',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
