import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Output() recepieWasSelected = new EventEmitter<Recepie>()
  constructor() { }

  ngOnInit(): void {
  }

  recepies:Recepie[]=[
    new Recepie("Fruit Salad","its so delicioue","https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=1xw:0.8435812837432514xh;center,top&resize=1200:*"),
    new Recepie("Custurd","its so Awesome","https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard-recipe.jpg"),
  ]

  onReceviedRecepie(recepie:Recepie){
    this.recepieWasSelected.emit(recepie);
  }

}
