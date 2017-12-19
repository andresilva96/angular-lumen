import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../services/local-storage.service";
import {JwtTokenService} from "../services/jwt-token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private jwtToken: JwtTokenService, private localStorage: LocalStorageService) { }

  ngOnInit() {
  }


  login() {
    this.http.post('http://localhost:8080/api/auth/login', this.user)
      .subscribe(response => console.log(this.localStorage.setObject('token', response)));
  }
}
