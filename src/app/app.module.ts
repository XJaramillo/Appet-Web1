import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HomeModule } from './home/home.module';
import { HeaderrentComponent } from './components/headerrent/headerrent.component';
import { SliderComponent } from './components/slider/slider.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogComponent } from './components/dialog/dialog.component';
import { HistoryComponent } from './components/history/history.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { ArticulosPipe } from './pipes/articulos.pipe';
import {MatIconModule} from '@angular/material/icon';
import { MomentModule } from 'angular2-moment';
import {FormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ConfirmacionComponent } from './components/confirmacion/confirmacion.component';
import { ArticulosusuarioComponent } from './components/articulosusuario/articulosusuario.component';
import { ComentariosusuarioComponent } from './components/comentariosusuario/comentariosusuario.component';


//se pasa al final el appcoponent para que se el ultimo en revisar las reglas de ruteo

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    HeaderrentComponent,
    SliderComponent,
    SidebarComponent,
    FooterComponent,
    AppComponent,
    DialogComponent,
    HistoryComponent,
    ArticulosPipe,
    ConfirmacionComponent,
    ArticulosusuarioComponent,
    ComentariosusuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MomentModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports:[MatTableModule,MatSortModule],
  entryComponents: [DialogComponent,HistoryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
