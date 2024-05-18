import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShoppingListService } from '../shared/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  subscription:Subscription;
  constructor(private shoppinglistService: ShoppingListService ) { }

  ngOnInit(): void {
    this.ingridents = this.shoppinglistService.getIngridents()
    this.subscription = this.shoppinglistService.ingridentsChanged.subscribe((ingridents:Ingrident[])=>{
      this.ingridents = ingridents
    })
  }

  ingridents:Ingrident[] = []

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSelect(index:number){
    this.shoppinglistService.selectIngrident(index)
  }
}
