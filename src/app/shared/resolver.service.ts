import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recepie } from "./recepie.model";
import { RecepieStorageService } from "./recepie-storage.service";
import { RecepieService } from "./recepie.service";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ResolverService implements Resolve<Recepie[]> {
    
    constructor(private recepiesStroageService: RecepieStorageService, private recepieService: RecepieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recepies = this.recepieService.getRecepies()
        if (recepies.length === 0) {
            return this.recepiesStroageService.recepiesFetch()
        } else {
            return recepies
        }
    }
}