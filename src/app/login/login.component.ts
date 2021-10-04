import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(data){
    this.http.post('https://emaillead.aturtoko.id/api/v1/login', data)
    .subscribe((result:any)=>{
      console.log("result", result)
      localStorage.setItem('token',result.token)
    })
  }

}
