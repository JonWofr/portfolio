import { Component, Input, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss'],
})
export class TechnologyComponent implements OnInit {
  @Input() technology?: Technology;

  constructor() {}

  ngOnInit(): void {}
}
