import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

  @Input() recepie:Recepie;
  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
  }

  toShoppingList(){
    this.shoppinglistService.addedIngridentsfromRecepieList(this.recepie.ingridents)
  }

}
