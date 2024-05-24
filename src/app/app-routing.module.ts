import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StartComponent } from './recepies/start/start.component';
import { RecepieDetailsComponent } from './recepies/recepie-details/recepie-details.component';
import { EditComponent } from './recepies/edit/edit.component';
import { ResolverService } from './shared/resolver.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  {path:'shopping-list',component: ShoppingListComponent},
  {path:'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
