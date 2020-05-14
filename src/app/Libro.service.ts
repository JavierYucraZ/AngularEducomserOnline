import { Libro } from './libro.model'
import { LogService } from './Log.service'
import { Injectable } from '@angular/core'

@Injectable()
export class LibroService{
    arregloLibros : Libro[] = [new Libro('El señor de los anillos', 'literatura fantastica'), 
                      new Libro('Las cronicas de narnia', 'literatura fantastica')]

    constructor(private logService : LogService){}

    libroAgregado( libro : Libro ){
        this.logService.enviarConsola(`Libro agregado desde LibroService : 
        ${libro.titulo}, ${libro.genero}`)
        this.arregloLibros.push(libro)
    }

}