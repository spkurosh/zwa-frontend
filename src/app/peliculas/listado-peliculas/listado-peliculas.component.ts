import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  constructor() { }
  @Input()
  Titulo;

  @Input()
  peliculas;

  ngOnInit(): void {
  }

  eliminar(index: number): void{
    this.peliculas.splice(index, 1);
  }

  manejarRated(voto: number): void {
    alert(voto);
  }
}
