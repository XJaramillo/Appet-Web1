import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';

import { UsuariosComponent } from './usuarios/usuarios.component';
import {AuthGuard} from '../guards/auth.guard';
import { ArticuloseliminadosComponent } from './articuloseliminados/articuloseliminados.component';
import { ComentariosComponent } from './comentarios/comentarios.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent,canActivate : [AuthGuard],
  children: [
    { path: 'articulos', component: ArticulosComponent, canActivate: [AuthGuard]},
    { path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuard]},
    { path: 'comentarios', component: ComentariosComponent, canActivate:[AuthGuard]},
   
    { path: 'articuloseliminados', component: ArticuloseliminadosComponent, canActivate: [AuthGuard]}
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
