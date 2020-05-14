import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LibrosComponent } from './Libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { AtributosEnLineaComponent } from './atributos-en-linea/atributos-en-linea.component';
import { PruebaComponent } from './prueba/prueba.component';
import { PadreComponent } from './comunicacion/padre/padre.component';
import { HijoComponent } from './comunicacion/hijo/hijo.component';
import { FormularioComponent } from './comunicacion/formulario/formulario.component'

import { LogService } from './Log.service'
import { LibroService } from './Libro.service'

@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    LibroComponent,
    AtributosEnLineaComponent,
    PruebaComponent,
    PadreComponent,
    HijoComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LogService,
    LibroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
