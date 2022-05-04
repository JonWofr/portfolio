import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { testimonials } from 'src/app/data/testimonials';
import { Testimonial } from 'src/app/models/testimonial.model';
import { Swiper, Autoplay } from 'swiper';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit, AfterViewInit {
  @ViewChild('slideshowContainer')
  slideshowContainer?: ElementRef<HTMLDivElement>;

  testimonials: Testimonial[] = testimonials;
  swiper?: Swiper;
  activeSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initialiseSwiper();
  }

  initialiseSwiper() {
    if (this.slideshowContainer) {
      Swiper.use([Autoplay]);
      this.swiper = new Swiper(this.slideshowContainer.nativeElement, {
        autoplay: {
          delay: 7000,
        },
        grabCursor: true,
      });
      this.swiper.on('activeIndexChange', this.onActiveIndexChange.bind(this));
    }
  }

  onActiveIndexChange(swiper: Swiper): void {
    this.activeSlideIndex = swiper.activeIndex;
  }

  slideToPreviousSlide() {
    this.swiper?.slidePrev();
  }

  slideToNextSlide() {
    this.swiper?.slideNext();
  }

  onChangePaginationButton(slideIndex: number) {
    this.slideToSlide(slideIndex);
  }

  slideToSlide(slideIndex: number) {
    this.swiper?.slideTo(slideIndex);
  }
}
