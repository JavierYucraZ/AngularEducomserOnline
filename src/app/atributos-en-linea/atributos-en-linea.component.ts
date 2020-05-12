import { Component } from '@angular/core';

@Component({
  selector: 'app-atributos-en-linea',
  template : `<h3>Componente en linea</h3>`,
  styles : [`h3{
    color : red;
    font-size : 25px; 
  }`]
})
export class AtributosEnLineaComponent {

  constructor() { }


}
