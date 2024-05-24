import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { AuthComponent } from "../auth/auth.component";

const routes:Routes = [
  {path:'shopping-list',component: ShoppingListComponent},
  {path:'auth', component: AuthComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule{}