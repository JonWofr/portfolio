import { ViewportScroller } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes, Scroll, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HomeComponent } from './views/home/home.component';
import { ProjectDetailComponent } from './views/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent,
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    // Custom implementation for working scroll position restoration at backwards navigation and anchor scrolling.
    // Without custom implementation it's tedious to enable smooth scrolling for anchor scrolling only and somehow scroll position
    // restoration is not working properly. Although it is not working 100% with this solution either.
    router.events
      .pipe(filter((e: Event): e is Scroll => e instanceof Scroll))
      .subscribe((e) => {
        if (e.position) {
          // Backward navigation. Small timeout because otherwise the previous position can't be calculated correctly.
          setTimeout(() => {
            viewportScroller.scrollToPosition(e.position!);
          }, 50);
        } else if (e.anchor) {
          // Anchor navigation. Scroll-margin is set for all anchors in CSS.
          document
            .getElementById(e.anchor)
            ?.scrollIntoView({ behavior: 'smooth' });
        } else {
          // Forward navigation
          viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
