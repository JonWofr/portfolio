import { Component, OnInit } from '@angular/core';
import { myServices } from 'src/app/data/my-services';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
})
export class MyServicesComponent implements OnInit {
  myServices = myServices;

  constructor() {}

  ngOnInit(): void {}
}
