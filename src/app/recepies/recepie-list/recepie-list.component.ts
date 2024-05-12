import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from 'src/app/shared/recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  @Output() recepieWasSelected = new EventEmitter<Recepie>()
  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
    this.recepies = this.recepieService.getRecepies()
  }

  recepies:Recepie[]=[]


}
