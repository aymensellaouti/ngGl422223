import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [{
  path: 'cv', component: CvComponent
  , canActivate: [AuthGuardGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
