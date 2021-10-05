import { Component, OnInit } from '@angular/core';
import { ProjectType } from 'src/app/enums/project-type.enum';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Fitstagram',
      type: ProjectType.MOBILE,
      description:
        'Irure mollit sit pariatur ad duis adipisicing non consequat irure.',
      thumbnailImageUrl: '/assets/images/fitstagram-thumbnail.png',
    },
    {
      title: 'Dein Geschenkgutschein',
      type: ProjectType.RESPONSIVE,
      description:
        'Irure exercitation qui ipsum nisi voluptate minim magna voluptate et et.',
      thumbnailImageUrl: '/assets/images/dein-geschenkgutschein-thumbnail.png',
    },
    {
      title: 'Agile Toolbox',
      type: ProjectType.RESPONSIVE,
      description: 'Exercitation aliqua tempor voluptate occaecat.',
      thumbnailImageUrl: '/assets/images/agile-toolbox-thumbnail.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
