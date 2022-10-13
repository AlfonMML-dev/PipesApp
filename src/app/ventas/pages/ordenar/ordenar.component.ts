import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayusculas: boolean = true;
  
  caseState: string = 'mayusculas';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  ordenarPor: string = '';

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }

  changeCaseState(){
    this.enMayusculas = !this.enMayusculas;
    this.caseState = (this.caseState === 'mayusculas') ? 'minusculas' : 'mayusculas';
  }
  constructor() { }

  ngOnInit(): void {
  }



}
