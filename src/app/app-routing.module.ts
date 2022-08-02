import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateLabComponent } from './pages/create-lab/create-lab.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'create', component: CreateLabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
