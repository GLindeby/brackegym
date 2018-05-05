import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {MakeprofileComponent} from './makeprofile/makeprofile.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'makeprofile' component: MakeprofileComponent}
  //{path: 'makeprofile', component: MakeprofileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const RoutingComponent = [EditorComponent, ViewComponent]
