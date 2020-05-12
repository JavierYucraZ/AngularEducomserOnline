import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model'

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  h1 = "Directiva *ngFor"
  libros : Libro[] = [new Libro('El señor de los anillos', 'literatura fantastica'), 
                      new Libro('Las cronicas de narnia', 'literatura fantastica')]

  tituloInput : string
  generoInput : string

  constructor() { }

  ngOnInit(): void {
  }

  agregarLibro(){
    let libro1 = new Libro(this.tituloInput, this.generoInput)
    this.libros.push(libro1)
    this.tituloInput = ""
    this.generoInput = ""
  }

}
