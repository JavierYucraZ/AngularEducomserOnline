import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LibrosComponent } from './Libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { AtributosEnLineaComponent } from './atributos-en-linea/atributos-en-linea.component';
import { PruebaComponent } from './prueba/prueba.component'

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroComponent,
    AtributosEnLineaComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
