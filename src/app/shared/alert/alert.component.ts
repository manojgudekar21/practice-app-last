import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent{
    @Input() message:string;
    @Output() closepopup = new EventEmitter<void>();


    onClose(){
        this.closepopup.emit();
    }
}