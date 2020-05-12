import { Component } from '@angular/core'

@Component({
    selector : 'app-libros',
    templateUrl : './libros.component.html',
    styleUrls : ['./libros.component.css'] 
})
export class LibrosComponent {
    
    boton : boolean = false
    paisLibro : string = "Reino Unido"
    mensaje : string = "No se agrego ningun libro"

    libroCreado : boolean = false

    constructor(){
        setTimeout(
            () => {
                this.boton = true
            }, 3000
        )
    }

    modificarLibro(event : Event){
        this.paisLibro = (<HTMLInputElement>event.target).value
    }

    crearLibro(){
        this.mensaje = "Libro agregado"
        this.libroCreado = true
    }

}