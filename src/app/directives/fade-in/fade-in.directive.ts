import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeInDirective {
  observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.opacity = 0;
  }

  ngOnInit(): void {
    const options: IntersectionObserverInit = {
      root: null,
      // Has to be set to the value of the header's height
      rootMargin: '-64px 0px -100px 0px',
      threshold: 0,
    };
    this.observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add(
            'animate__animated',
            'animate__fadeIn'
          );
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.unobserve(this.elementRef.nativeElement);
  }
}
