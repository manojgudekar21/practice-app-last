import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/shared/recepie.model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  @Input() recepie:Recepie;
  @Output() onSelectedRecepie = new EventEmitter<void>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.onSelectedRecepie.emit();
  }

}
