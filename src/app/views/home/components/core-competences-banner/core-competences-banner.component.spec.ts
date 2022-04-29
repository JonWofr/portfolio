import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCompetencesBannerComponent } from './core-competences-banner.component';

describe('CoreCompetencesBannerComponent', () => {
  let component: CoreCompetencesBannerComponent;
  let fixture: ComponentFixture<CoreCompetencesBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreCompetencesBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreCompetencesBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
