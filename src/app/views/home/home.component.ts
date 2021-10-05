import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerBackgroundColor: HeaderBackgroundColor =
    HeaderBackgroundColor.TRANSPARENT;

  constructor() {}

  ngOnInit(): void {}

  onSetHeaderBackgroundColor(headerBackgroundColor: HeaderBackgroundColor) {
    this.headerBackgroundColor = headerBackgroundColor;
  }
}
