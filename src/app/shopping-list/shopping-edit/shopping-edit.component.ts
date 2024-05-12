import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingrident } from 'src/app/shared/ingrident.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') NameInput:ElementRef;
  @ViewChild('amountInput') AmountInput:ElementRef;

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
  }
  
  onAdd(){
    const NameInputRef = this.NameInput.nativeElement.value
    const AmountInputRef = this.AmountInput.nativeElement.value
    const NewIngrident = new Ingrident(NameInputRef,AmountInputRef)
    this.shoppinglistService.addIngridents(NewIngrident)
  }

}
