import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from 'src/app/shared/recepie.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  @Input() recepie:Recepie;
  
  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieService.selectedRecepie.emit(this.recepie)
  }

}
