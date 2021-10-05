import { Component, OnInit, Input } from '@angular/core';
import { MyService } from 'src/app/models/my-service.model';

@Component({
  selector: 'app-my-services-card',
  templateUrl: './my-services-card.component.html',
  styleUrls: ['./my-services-card.component.scss'],
})
export class MyServicesCardComponent implements OnInit {
  @Input() myService?: MyService;

  constructor() {}

  ngOnInit(): void {}
}
