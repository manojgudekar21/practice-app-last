import { Injectable } from "@angular/core";
import { RecepieService } from "./recepie.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Recepie } from "./recepie.model";
import { exhaustMap, map, take, tap } from "rxjs";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: "root" })

export class RecepieStorageService {

    constructor(private http: HttpClient, private recepieService: RecepieService,
        private authService: AuthService
    ) { }

    recepiesStore() {
        const recepies = this.recepieService.getRecepies()
        this.http.put<Recepie[]>('https://re-practice-recepies-default-rtdb.firebaseio.com/recepies.json', recepies)
            .subscribe((recepies) => {
                console.log(recepies)
            })
    }

    recepiesFetch() {
        return this.http.get<Recepie[]>('https://re-practice-recepies-default-rtdb.firebaseio.com/recepies.json')
            .pipe(map(recepies => {
                return recepies.map(recepie => {
                    return { ...recepie, ingridents: recepie.ingridents ? recepie.ingridents : [] }
                })
            }), tap(recepies => {
                this.recepieService.recepiesFromDb(recepies)
            }))
    }
}