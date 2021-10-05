import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeroComponent } from './views/home/components/hero/hero.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { MediaDirective } from './directives/media.directive';
import { AboutComponent } from './views/home/components/about/about.component';
import { MyServicesCardComponent } from './views/home/components/my-services-card/my-services-card.component';
import { MyServicesComponent } from './views/home/components/my-services/my-services.component';
import { ProjectsComponent } from './views/home/components/projects/projects.component';
import { ResumeComponent } from './views/home/components/resume/resume.component';
import { ResumeCardComponent } from './views/home/components/resume-card/resume-card.component';
import { ProjectComponent } from './views/home/components/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    MediaDirective,
    AboutComponent,
    MyServicesCardComponent,
    MyServicesComponent,
    ProjectsComponent,
    ResumeComponent,
    ResumeCardComponent,
    ProjectComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
