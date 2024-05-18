import { Injectable } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { Ingrident } from './ingrident.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepieService {
  updatedRecepies= new Subject<Recepie[]>();
  selectedRecepie = new Subject<Recepie>();

  constructor() { }

  private recepies:Recepie[]=[
    new Recepie("Fruit Salad","its so delicioue","https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=1xw:0.8435812837432514xh;center,top&resize=1200:*",
      [
        new Ingrident("apple",5),
        new Ingrident("kiwi",1)
      ]
    ),
    new Recepie("Custurd","its so Awesome","https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/fruit-custard-recipe.jpg",
    [
      new Ingrident("annar",5),
      new Ingrident("ice cream",1)
    ]
    ),
  ]

  getRecepies(){
    return this.recepies.slice();
  }
  getRecepiebyid(id:number){
    return this.recepies[id]
  }
  addnewRecepie(recepie:Recepie){
    this.recepies.push(recepie);
    this.updatedRecepies.next(this.recepies.slice())
  }
  updateRecepie(index:number,newRecepie:Recepie){
    this.recepies[index] = newRecepie
    this.updatedRecepies.next(this.recepies.slice())
  }
  onremoveRecepie(id:number){
    this.recepies.splice(id,1)
    this.updatedRecepies.next(this.recepies.slice())
  }


  
}
