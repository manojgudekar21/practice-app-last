import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecepieStorageService } from '../shared/recepie-storage.service';
import { RecepieService } from '../shared/recepie.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  subscription:Subscription;
  isAuthenticate = false;

  constructor(private authService: AuthService, private recepieStoregeService: RecepieStorageService, private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.subscription = this.authService.user.subscribe((user)=>{
      this.isAuthenticate = user? true : false
    })
  }
  onSaveRecepies() {
    this.recepieStoregeService.recepiesStore()
  }
  onFetchRecepies() {
    this.recepieStoregeService.recepiesFetch().subscribe()
  }

  onLogout(){
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
