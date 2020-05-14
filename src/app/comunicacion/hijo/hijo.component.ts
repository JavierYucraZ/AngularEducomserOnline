import { Component, OnInit, Input } from '@angular/core';
import { Libro } from '../../libro.model'


@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() libro : Libro
  @Input() indice : number

  constructor() { }

  ngOnInit(): void {
  }

}
