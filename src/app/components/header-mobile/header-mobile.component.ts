import { Component, OnInit, Input } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  shouldShowMenu = false;

  private _headerBackgroundColor: HeaderBackgroundColor =
    HeaderBackgroundColor.TRANSPARENT;

  get headerBackgroundColor() {
    return this._headerBackgroundColor;
  }
  @Input() set headerBackgroundColor(
    headerBackgroundColor: HeaderBackgroundColor
  ) {
    this._headerBackgroundColor = headerBackgroundColor;
  }

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
  }
}
