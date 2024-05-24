import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recepie } from 'src/app/shared/recepie.model';
import { RecepieService } from 'src/app/shared/recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit, OnDestroy {

  @Output() recepieWasSelected = new EventEmitter<Recepie>()
  subscription: Subscription;
  constructor(private recepieService: RecepieService, private router: Router,
    private route: ActivatedRoute) { }

  recepies: Recepie[] = []

  ngOnInit(): void {
    this.subscription = this.recepieService.updatedRecepies.subscribe((recepies: Recepie[]) => {
      this.recepies = recepies
    })
    this.recepies = this.recepieService.getRecepies()
  }


  newRecepie() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
