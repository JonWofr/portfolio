import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss'],
})
export class ResumeCardComponent implements OnInit {
  @Input() job?: Job;

  constructor() {}

  ngOnInit(): void {}
}
