import { Component, OnInit } from '@angular/core';
import { JobType } from 'src/app/enums/job-type.enum';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  jobs: Job[] = [
    {
      title: 'Mobile Medien (B. Sc.)',
      description:
        'Im Laufe des Studiums habe ich meinen Schwerpunkt auf die Webentwicklung gesetzt und konnte durch viel Projektarbeit bereits hier einiges an praktischer Erfahrung sammeln. Das Studium schloss ich mit einem Durchschnitt von 1,3 erfolgreich ab.',
      startDate: '2017',
      endDate: '2021',
      type: JobType.STUDIUM,
      employer: {
        name: 'Hochschule der Medien',
        logoUrl: '/assets/logos/hdm-logo.svg',
      },
    },
    {
      title: 'Frontend-Entwickler',
      description:
        'Adrodev ist eine Agentur für Web- und App-Entwicklung, bei der ich während meiner Anstellung Erfahrung im Bereich der Frontend-Entwicklung sammeln konnte und herausfinden durfte was es bedeutet in einem kleinen Startup-ähnlichen Unternehmen zu arbeiten.',
      startDate: '2019',
      endDate: '2020',
      type: JobType.PRAKTIKUM,
      employer: {
        name: 'Adrodev GmbH',
        logoUrl: '/assets/logos/adrodev-logo.png',
      },
    },
    {
      title: 'Frontend-Entwickler',
      description:
        'Daimler Protics ist ein 100%-iges Tochterunternehmen der Daimler AG, welches spezialisiert ist auf Datenverarbeitung. Bei Daimler Protics entwickelte ich am Frontend einer Daimler-internen Web-Anwendung mit und konnte erfahren wie in einem großen Unternehmen gearbeitet wird.',
      startDate: '2020',
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
