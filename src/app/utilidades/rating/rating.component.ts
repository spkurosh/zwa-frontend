import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input()
  maximoRating = 5;

  @Input()
  ratingSeleccionado = 0;

  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  

  maximoRatingArr = [];

  banderaSeleccionado = false;
  ratingAnterior = 0;


  ngOnInit(): void {
    this.maximoRatingArr = Array(this.maximoRating).fill(0);
  }

  manejaMouseEnter(index: number): void {
    this.ratingSeleccionado = index + 1;
  }
  clickRating(index: number): void {
    this.ratingSeleccionado = index + 1;
    this.banderaSeleccionado = true;
    this.ratingAnterior = this.ratingSeleccionado;
    this.rated.emit(this.ratingSeleccionado);
  }
  manejaMouseLeave(): void {
    if(this.ratingAnterior !== 0){
      this.ratingSeleccionado = this.ratingAnterior;
    }else {
      this.ratingSeleccionado = 0;
    }
      
  }

}
function output() {
  throw new Error('Function not implemented.');
}

