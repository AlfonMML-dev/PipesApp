import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombre: string = 'alfonSo';

  nombreCompleto: string = this.nombre + ' Martín-MoRenO López';

  fecha: Date = new Date(); // el día de hoy

  
  constructor() { }

  ngOnInit(): void {
  }

}
