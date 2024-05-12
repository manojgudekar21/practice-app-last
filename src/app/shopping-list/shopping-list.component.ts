import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';
import { ShoppingListService } from '../shared/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private shoppinglistService: ShoppingListService ) { }

  ngOnInit(): void {
    this.ingridents = this.shoppinglistService.getIngridents()
    this.shoppinglistService.ingridentsChanged.subscribe((ingridents:Ingrident[])=>{
      this.ingridents = ingridents
    })
  }

  ingridents:Ingrident[] = []

}
