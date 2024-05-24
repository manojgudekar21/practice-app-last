import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, responsedata } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('f') formdata: NgForm;
  islogging = true;
  isloading = false;
  error = null

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.isloading = true
    const email = this.formdata.value.email
    const password = this.formdata.value.password

    let subObs: Observable<responsedata>;

    if (this.islogging) {
      subObs = this.authService.login(email, password)
    } else {
      subObs = this.authService.signup(email, password)
    }

    subObs.subscribe((responsedata) => {
      console.log(responsedata)
      this.isloading = false
      this.router.navigate(["/recepies"])
    }, errorMessage => {
      console.log(errorMessage)
      this.error = errorMessage
      this.isloading = false
    })

    this.formdata.reset()
  }


  onSwitching() {
    this.islogging = !this.islogging
  }

  onClosePopup(){
    this.error = null
  }

}
