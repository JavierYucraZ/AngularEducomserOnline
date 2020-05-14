import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Libro } from '../../libro.model'
import { LogService } from '../../Log.service'
import { LibroService } from '../../Libro.service'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  // tituloInput : string
  // generoInput : string

  constructor(private logService : LogService,
              private libroService : LibroService) { }

  ngOnInit(): void {
  }

  // agregarLibro(){
  //   let libro1 = new Libro(this.tituloInput, this.generoInput)
  //   this.libroCreado.emit(libro1)
  //   this.tituloInput = ""
  //   this.generoInput = ""
  // }

  // agregarLibro(tituloInput : HTMLInputElement, generoInput : HTMLInputElement){
  //   let libro1 = new Libro(tituloInput.value, generoInput.value)
  //   this.libroCreado.emit(libro1)
  //   tituloInput.value = ""
  //   generoInput.value = ""
  // }

  @ViewChild('tituloInput') tituloInput : ElementRef
  @ViewChild('generoInput') generoInput : ElementRef

  agregarLibro(){
    let libro1 = new Libro(this.tituloInput.nativeElement.value, 
                            this.generoInput.nativeElement.value)
    this.libroService.libroAgregado(libro1)
    this.logService.enviarConsola(`Libro : ${libro1.titulo}, ${libro1.genero}`)
    this.tituloInput.nativeElement.value = ""
    this.generoInput.nativeElement.value = ""
  }

}
