import { Component, OnInit, Input } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';
import { SectionId } from 'src/app/enums/section-id.enum';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
})
export class HeaderMobileComponent implements OnInit {
  @Input() headerBackgroundColor?: HeaderBackgroundColor;
  @Input() activeSectionId?: SectionId;

  SectionId = SectionId;
  shouldShowMenu = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.shouldShowMenu = !this.shouldShowMenu;
  }
}
