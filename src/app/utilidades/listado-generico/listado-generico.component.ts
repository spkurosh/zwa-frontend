import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-generico',
  templateUrl: './listado-generico.component.html',
  styleUrls: ['./listado-generico.component.scss']
})
export class ListadoGenericoComponent implements OnInit {

  constructor() { }
  @Input()
  Titulo;

  @Input()
  listado;

  ngOnInit(): void {
  }

  eliminar(index: number): void{
    this.listado.splice(index, 1);
  }
}
