import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { technologies as allTechnologies } from 'src/app/data/technologies';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = [];
  @Input() set project(project: Project | undefined) {
    const technologies: Technology[] = [];
    project?.technologyNames.forEach((technologyName) => {
      const technology = allTechnologies.find(
        (technology) => technology.name === technologyName
      );
      if (technology) technologies.push(technology);
    });
    this.technologies = technologies;
  }

  constructor() {}

  ngOnInit(): void {}
}
