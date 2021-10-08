import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from 'src/app/models/project.model';
import { projects } from 'src/app/data/projects';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
  headerBackgroundColor = HeaderBackgroundColor;
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === null) {
      this.router.navigateByUrl('/');
      return;
    }
    this.project = projects.find((project) => project.id === id);
    if (this.project === undefined) {
      this.router.navigateByUrl('/');
      return;
    }
  }

  onClickCloseButton(): void {
    this.router.navigateByUrl('/');
  }
}
