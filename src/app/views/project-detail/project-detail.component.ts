import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/models/project.model';
import { projects } from 'src/app/data/projects';
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
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

  back() {
    this.location.back();
  }
}
