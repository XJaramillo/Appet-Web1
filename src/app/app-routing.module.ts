import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {SignoutGuard} from './guards/signout.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate:[SignoutGuard] },
  { path: 'login', component: LoginComponent, canActivate:[SignoutGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
