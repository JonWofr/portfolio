import {
  Directive,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';

/**
 * Multipurpose intersection observer abstraction layer. For each element which uses this directive a new
 * IntersectionObserver instance is created.
 */
@Directive({
  selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {
  @Input() options?: IntersectionObserverInit;
  @Output() intersectionChange = new EventEmitter<boolean>();
  observer?: IntersectionObserver;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries, _) => {
      entries.forEach((entry) => {
        this.intersectionChange.emit(entry.isIntersecting);
      });
    }, this.options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.unobserve(this.elementRef.nativeElement);
  }
}
