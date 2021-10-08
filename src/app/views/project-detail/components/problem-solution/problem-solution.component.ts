import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-problem-solution',
  templateUrl: './problem-solution.component.html',
  styleUrls: ['./problem-solution.component.scss'],
})
export class ProblemSolutionComponent implements OnInit {
  @Input() project?: Project;

  constructor() {}

  ngOnInit(): void {}
}
