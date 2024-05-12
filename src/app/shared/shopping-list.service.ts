import { EventEmitter, Injectable } from "@angular/core";
import { Ingrident } from "./ingrident.model";

@Injectable({
    providedIn : 'root'
})
export class ShoppingListService{

    ingridentsChanged = new EventEmitter<Ingrident[]>();
    
    private ingridents:Ingrident[] = [
        new Ingrident("mango",5),
        new Ingrident("orange",10)
      ]

    getIngridents(){
        return this.ingridents.slice()
    }  
    addIngridents(ingrident:Ingrident){
        this.ingridents.push(ingrident)
        this.ingridentsChanged.emit(this.ingridents.slice())
    }    
    addedIngridentsfromRecepieList(ingridents:Ingrident[]){
        this.ingridents.push(...ingridents)
        this.ingridentsChanged.emit(this.ingridents.slice())
    }
      
}