import { Component, OnInit } from '@angular/core';
import { projects } from '../../../../data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects = projects.slice(0, 4);

  constructor() {}

  ngOnInit(): void {}
}
