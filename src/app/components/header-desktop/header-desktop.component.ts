import { Component, Input, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';
import { SectionId } from 'src/app/enums/section-id.enum';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss'],
})
export class HeaderDesktopComponent implements OnInit {
  @Input() headerBackgroundColor?: HeaderBackgroundColor;
  @Input() activeSectionId?: SectionId;

  SectionId = SectionId;

  constructor() {}

  ngOnInit(): void {}
}
