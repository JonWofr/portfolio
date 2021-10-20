import { Component, OnInit } from '@angular/core';
import { HeaderBackgroundColor } from 'src/app/enums/header-background-color.enum';
import { SectionId } from 'src/app/enums/section-id.enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerBackgroundColor?: HeaderBackgroundColor;
  intersectionObserverOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '-64px 0px 0px 0px',
    threshold: 0,
  };
  sections: {
    id: SectionId;
    isIntersecting: boolean;
    isInitialised: boolean;
  }[] = [
    {
      id: SectionId.HOME,
      isIntersecting: false,
      isInitialised: false,
    },
    {
      id: SectionId.ABOUT,
      isIntersecting: false,
      isInitialised: false,
    },
    {
      id: SectionId.MY_SERVICES,
      isIntersecting: false,
      isInitialised: false,
    },
    {
      id: SectionId.PROJECTS,
      isIntersecting: false,
      isInitialised: false,
    },
    {
      id: SectionId.RESUME,
      isIntersecting: false,
      isInitialised: false,
    },
    {
      id: SectionId.CONTACT,
      isIntersecting: false,
      isInitialised: false,
    },
  ];
  activeSectionId?: SectionId;

  constructor() {}

  ngOnInit(): void {}

  onSetHeaderBackgroundColor(headerBackgroundColor: HeaderBackgroundColor) {
    this.headerBackgroundColor = headerBackgroundColor;
  }

  onIntersectionChange(sectionId: string, isIntersecting: boolean): void {
    const intersectingSection = this.sections.find(
      (section) => section.id === sectionId
    )!;
    if (!intersectingSection.isInitialised) {
      intersectingSection.isInitialised = true;
    }
    intersectingSection.isIntersecting = isIntersecting;

    if (this.isEverySectionInitialised()) {
      this.setActiveSectionId();
    }
  }

  isEverySectionInitialised(): boolean {
    return (
      this.sections.filter((section) => section.isInitialised).length ===
      this.sections.length
    );
  }

  setActiveSectionId(): void {
    const activeSection = this.sections.find(
      (section) => section.isIntersecting
    )!;
    if (activeSection.id !== this.activeSectionId) {
      this.activeSectionId = activeSection.id;
    }
  }
}
