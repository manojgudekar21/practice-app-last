import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingrident } from 'src/app/shared/ingrident.model';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {

  @ViewChild('f') formdata:NgForm;
  subscription:Subscription;
  editMode = false;
  indexId:number;

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppinglistService.passsindex.subscribe((index:number)=>{
      this.indexId = index
    })
    this.subscription = this.shoppinglistService.selectedIngrident.subscribe((ingrident:Ingrident)=>{
      this.editMode = true;
      this.formdata.setValue({
        'name': ingrident.ingrident,
        'amount': ingrident.amount
      })
    })
  }
  
  onAdditem(){
    const value = this.formdata.value
    const NewIngrident = new Ingrident(value.name,value.amount)
    if(this.editMode){
      this.shoppinglistService.updateIngrident(this.indexId,NewIngrident)
    }else{
      this.shoppinglistService.addIngridents(NewIngrident)
    }
    this.editMode = false
    this.formdata.reset()
  }
  onClear(){
    this.formdata.reset()
    this.editMode = false
  }
  onDelete(){
    this.shoppinglistService.onDeleteIngrident(this.indexId)
    this.editMode = false
    this.formdata.reset()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
