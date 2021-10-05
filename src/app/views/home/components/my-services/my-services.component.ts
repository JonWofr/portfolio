import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/app/models/my-service.model';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss'],
})
export class MyServicesComponent implements OnInit {
  myServices: MyService[] = [
    {
      iconUrl: '/assets/icons/placeholder.svg',
      title: 'Web development',
      description:
        'Deserunt anim elit proident culpa anim laborum occaecat veniam quis consectetur.',
    },
    {
      iconUrl: '/assets/icons/placeholder.svg',
      title: 'Web development',
      description:
        'Deserunt anim elit proident culpa anim laborum occaecat veniam quis consectetur.',
    },
    {
      iconUrl: '/assets/icons/placeholder.svg',
      title: 'Web development',
      description:
        'Deserunt anim elit proident culpa anim laborum occaecat veniam quis consectetur.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
