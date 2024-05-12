import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() dataSent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onClicked(data:string){
    this.dataSent.emit(data);
  }

}
