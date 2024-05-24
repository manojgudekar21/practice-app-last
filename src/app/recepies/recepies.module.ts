import { NgModule } from "@angular/core";
import { EditComponent } from "./edit/edit.component";
import { RecepieDetailsComponent } from "./recepie-details/recepie-details.component";
import { RecepieEditComponent } from "./recepie-list/recepie-edit/recepie-edit.component";
import { RecepieListComponent } from "./recepie-list/recepie-list.component";
import { RecepiesComponent } from "./recepies.component";
import { StartComponent } from "./start/start.component";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RecepiesRoutingModule } from "./recepies-routing.module";

@NgModule({
    declarations: [
        RecepiesComponent,
        RecepieListComponent,
        RecepieDetailsComponent,
        RecepieEditComponent,
        StartComponent,
        EditComponent,
    ],
    imports: [
        ReactiveFormsModule, RouterModule, CommonModule, RecepiesRoutingModule
    ],
    exports: [
    ]
})
export class RecepiesModule { }