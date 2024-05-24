import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject, catchError, tap, throwError } from "rxjs";
import { User } from "./user.model";
import { Router } from "@angular/router";

export interface responsedata {
    idToken: string,
    email: string,
    refershToken: string,
    expiresIn: string,
    localId: string,
    registered?: string
}
@Injectable({ providedIn: 'root' })
export class AuthService {

    user = new BehaviorSubject<User>(null);
    expirationDuration:any;

    constructor(private http: HttpClient, private router: Router) { }

    signup(email: string, password: string) {
        return this.http.post<responsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAb3Tk9Xu7Igmb8dsNjIuOQCgIVqUfpMbs',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.errorhandle), tap(resdata => {
            this.userAuth(resdata.email, resdata.localId, resdata.idToken, +resdata.expiresIn)
        }))
    }

    login(email: string, password: string) {
        return this.http.post<responsedata>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAb3Tk9Xu7Igmb8dsNjIuOQCgIVqUfpMbs',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(this.errorhandle), tap(resdata => {
            this.userAuth(resdata.email, resdata.localId, resdata.idToken, +resdata.expiresIn)
        }))
    }

    autoLogin() {
        const userdata: {
            email: string,
            localId: string,
            _tokenId: string,
            _expirationId: string
        } = JSON.parse(localStorage.getItem('auth'));

        if (!userdata) {
            return null;
        }
        const loadeduser = new User(userdata.email, userdata.localId, userdata._tokenId, new Date(userdata._expirationId))
        if (loadeduser.token) {
            this.user.next(loadeduser)
            const expirationTime =  new Date(userdata._expirationId).getTime() - new Date().getTime()
            this.autoLogout(expirationTime)
        }

    }

    logout() {
        this.user.next(null)
        this.router.navigate(['/auth'])
        localStorage.removeItem('auth')
        clearTimeout(this.expirationDuration)
    }

    autoLogout(expirationDate: number) {
        this.expirationDuration = setTimeout(() => {
            this.logout()
        }, expirationDate)
    }

    private userAuth(email: string, localid: string, tokenid: string, expirationid: number) {
        const expirationDate = new Date(new Date().getTime() + expirationid * 1000)
        const user = new User(email, localid, tokenid, expirationDate)
        this.user.next(user);
        this.autoLogout(expirationid*1000)
        localStorage.setItem('auth', JSON.stringify(user))
    }

    private errorhandle(errorRes: HttpErrorResponse) {
        console.log(errorRes)
        let errorMessage = 'unknown error occured'
        if (!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage)
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'email already exists'
                break;
            case 'INVALID_LOGIN_CREDENTIALS':
                errorMessage = 'invalid login details'
                break;
        }
        return throwError(errorMessage)

    }

}