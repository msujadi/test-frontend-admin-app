import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient,
    private _router: Router
    ){}

   logoutUser(){
     localStorage.removeItem('token')
     this._router.navigate(['/login'])
   }

}
