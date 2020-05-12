import { Component } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent{
  
  private tituloLibro : string = "El señor de los anillos : La comunidad del anillo" 
  private generoLibro : string = "Novela, literatura fantastica"
  private paginasLibro : number = 432
  private autorLibro : string = "J. R. R. Tolkien"

  constructor() { }

  public getTitulo() : string {
    return this.tituloLibro
  }

  public getGenero() : string {
    return this.generoLibro
  }

  getPaginas() : number {
    return this.paginasLibro
  }

  getAutor() : string {
    return this.autorLibro
  }

}
