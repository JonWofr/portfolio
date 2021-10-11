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
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';
import { ProblemSolutionComponent } from './views/project-detail/components/problem-solution/problem-solution.component';
import { OverviewComponent } from './views/project-detail/components/overview/overview.component';
import { TechnologiesComponent } from './views/project-detail/components/technologies/technologies.component';
import { ExecutionComponent } from './views/project-detail/components/execution/execution.component';
import { ContactComponent } from './views/home/components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

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
    ProjectDetailComponent,
    ProblemSolutionComponent,
    OverviewComponent,
    TechnologiesComponent,
    ExecutionComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
