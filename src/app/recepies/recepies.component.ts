import { Component, OnInit } from '@angular/core';
import { Recepie } from '../shared/recepie.model';
import { RecepieService } from '../shared/recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  receviedRecepie:Recepie;
  
  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
    this.recepieService.selectedRecepie.subscribe((recepie:Recepie)=>{
      this.receviedRecepie = recepie
    })
  }

}
