import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecepieEditComponent } from './recepies/recepie-list/recepie-edit/recepie-edit.component';
import { FormsModule } from '@angular/forms';
import { OpenmenuDirective } from './shared/openmenu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    ShoppingListComponent,
    RecepieListComponent,
    RecepieDetailsComponent,
    ShoppingEditComponent,
    RecepieEditComponent,
    OpenmenuDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
