import { Component, OnInit } from '@angular/core';
import { Recepie } from '../shared/recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  receviedRecepie:Recepie;
  
  constructor() { }

  ngOnInit(): void {
  }

}
