import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.scss'],
})
export class SocialMediaLinksComponent implements OnInit {
  @Input() iconFill: 'primary-light' | 'muted' = 'primary-light';
  @Input() size: 'small' | 'medium' = 'medium';

  constructor() {}

  ngOnInit(): void {}
}
