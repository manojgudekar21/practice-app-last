import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from 'src/app/shared/recepie.service';
import { ShoppingListService } from 'src/app/shared/shopping-list.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css']
})
export class RecepieDetailsComponent implements OnInit {

  recepie:Recepie;
  id:number;
  constructor(private recepieService:RecepieService, 
    private shoppinglistService:ShoppingListService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
       this.id = +params['id'] 
       this.recepie = this.recepieService.getRecepiebyid(this.id)
    })
  }

  toShoppingList(){
    this.shoppinglistService.addedIngridentsfromRecepieList(this.recepie.ingridents)
  }

  onEdit(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  onDelete(){
    this.recepieService.onremoveRecepie(this.id)
    this.router.navigate(['/recepies'])
  }

}
