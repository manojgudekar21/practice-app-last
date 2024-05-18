import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  @Input() recepie:Recepie;
  @Input() index:number;
  
  ngOnInit(): void {
  }


}
