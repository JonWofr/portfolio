import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { technologies } from 'src/app/data/technologies';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
})
export class TechnologiesComponent implements OnInit {
  technologies: Technology[] = [];
  @Input() set project(project: Project | undefined) {
    this.technologies = technologies.filter((technology) =>
      project?.technologyNames.includes(technology.name)
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
