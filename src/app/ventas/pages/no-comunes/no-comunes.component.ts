import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //I18nSelectPipe
  /* nombre: string = 'Alfonso';
  genero: string = 'masculino';

  usuario1: Usuario = {
    nombre: 'Alfonso',
    genero: 'masculino'
  }

  usuario2: Usuario = {
    nombre: 'Belen',
    genero: 'femenino'
  } */

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //I18nPluralPipe
  /* usuarios1: string[] = ['Paco', 'Maria', 'Jacinto'];
  usuarios2: string[] = ['Paco']; */

  usuariosMapa = {
    '=0': 'no hay ningún usuario conectado',
    '=1': 'hay 1 usuario conectado',
    'other': 'hay # usuarios conectados'
  }


  //Tarea del curso
  usuarios: Usuario[] = [
    {
      nombre: 'Francisco',
      genero: 'masculino'
    },
    {
      nombre: 'Marta',
      genero: 'femenino'
    },
    {
      nombre: 'Iván',
      genero: 'masculino'
    },
    {
      nombre: 'María',
      genero: 'femenino'
    },
    {
      nombre: 'Marcos',
      genero: 'masculino'
    },
  ];

  usuario: Usuario = this.usuarios[0];

  cambiarUsuario(){
    let userIndex: number = this.usuarios.indexOf(this.usuario); 
    if( userIndex === (this.usuarios.length-1)){
      this.usuario = this.usuarios[0];
    } else{
      this.usuario = this.usuarios[userIndex + 1];
    }
  }

  borrarUsuario(){
    if(this.usuarios.length !== 1){
      this.usuarios.splice(this.usuarios.indexOf(this.usuario), 1);
      this.cambiarUsuario();
    }
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Paco',
    edad: 35,
    direccion: 'Otawa, Canada'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout(() => {
      resolve( 'Tenemos data de promesa');
    }, 3500)
  } );

}

interface Usuario {
  nombre: string,
  genero: string
}
