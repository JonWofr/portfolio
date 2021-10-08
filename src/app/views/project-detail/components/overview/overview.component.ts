import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Project } from 'src/app/models/project.model';
import Swiper from 'swiper';
import { Autoplay } from 'swiper';
import { ProjectType } from 'src/app/enums/project-type.enum';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() project?: Project;
  ProjectType = ProjectType;
  swiper?: Swiper;
  slideIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  initSwiper(): void {
    Swiper.use([Autoplay]);
    this.swiper = new Swiper('.swiper', {
      autoplay: true,
    });
    this.swiper.on('activeIndexChange', this.onActiveIndexChange.bind(this));
  }

  onActiveIndexChange(swiper: Swiper): void {
    this.slideIndex = swiper.activeIndex;
  }

  onClickPreviewImage(index: number) {
    this.swiper?.slideTo(index);
  }

  ngOnDestroy(): void {
    this.swiper?.off('activeIndexChange', this.onActiveIndexChange);
  }
}
