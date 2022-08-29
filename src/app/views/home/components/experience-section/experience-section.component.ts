import { Component, OnInit } from '@angular/core';
import { jobs } from 'src/app/data/jobs';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss'],
})
export class ExperienceSectionComponent implements OnInit {
  jobs: Job[] = jobs;

  constructor() {}

  ngOnInit(): void {}
}
