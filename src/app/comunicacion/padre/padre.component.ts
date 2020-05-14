import { Component, OnInit } from '@angular/core';
import { Libro } from '../../libro.model'
import { LibroService } from '../../Libro.service'

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  h1 : string = "Comunicacion entre padre e hijo"

  libros : Libro[] = []

  constructor(private libroService : LibroService) { }

  ngOnInit(): void {
    this.libros = this.libroService.arregloLibros
  }

}
