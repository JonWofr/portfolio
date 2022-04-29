import { Component, Input, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/models/testimonial.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial?: Testimonial;

  constructor() {}

  ngOnInit(): void {}
}
