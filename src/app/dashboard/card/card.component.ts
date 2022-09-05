import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()
  totalClientes;
  @Input()
  title;
  @Input()
  porcentaje = true;
  @Input()
  icono = "question_mark";

  ngOnInit(): void {
  }

}
