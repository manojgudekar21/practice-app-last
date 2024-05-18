import { Injectable } from "@angular/core";
import { Ingrident } from "./ingrident.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ShoppingListService{

    ingridentsChanged = new Subject<Ingrident[]>();
    selectedIngrident = new Subject<Ingrident>();
    passsindex = new Subject<number>();
    
    private ingridents:Ingrident[] = [
        new Ingrident("mango",5),
        new Ingrident("orange",10)
      ]

    getIngridents(){
        return this.ingridents.slice()
    }  
    addIngridents(ingrident:Ingrident){
        this.ingridents.push(ingrident)
        this.ingridentsChanged.next(this.ingridents.slice())
    }    
    addedIngridentsfromRecepieList(ingridents:Ingrident[]){
        this.ingridents.push(...ingridents)
        this.ingridentsChanged.next(this.ingridents.slice())
    }
    selectIngrident(index:number){
        const ingrident = this.ingridents[index];
        this.selectedIngrident.next(ingrident)
        this.passsindex.next(index)
    }   
    updateIngrident(index:number,newIngrident:Ingrident){
        this.ingridents[index] = newIngrident
        this.ingridentsChanged.next(this.ingridents.slice())
    }
    onDeleteIngrident(index:number){
        this.ingridents.splice(index,1)
        this.ingridentsChanged.next(this.ingridents.slice())
    }
      
}