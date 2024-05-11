import { Component, OnInit } from '@angular/core';
import { Ingrident } from '../shared/ingrident.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ingridents:Ingrident[] = [
    new Ingrident("mango",5),
    new Ingrident("orange",10)
  ]

}
