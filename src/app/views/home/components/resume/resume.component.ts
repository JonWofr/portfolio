import { Component, OnInit } from '@angular/core';
import { jobs } from 'src/app/data/jobs';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  jobs: Job[] = jobs

  constructor() {}

  ngOnInit(): void {}
}
