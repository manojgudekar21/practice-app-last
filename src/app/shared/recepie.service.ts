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

  private recepies:Recepie[]=[];

  recepiesFromDb(recepies:Recepie[]){
    this.recepies = recepies
    this.updatedRecepies.next(this.recepies.slice())
  }
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
