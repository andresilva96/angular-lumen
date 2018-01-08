import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../services/local-storage.service";
import {JwtTokenService} from "../services/jwt-token.service";
import {Router} from "@angular/router";

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

  constructor(private http: HttpClient, private jwtToken: JwtTokenService, private router: Router) { }

  ngOnInit() {
  }


  login() {
    this.http.post('http://localhost:8080/api/auth/login', this.user)
      .subscribe(response => {
        this.jwtToken.setToken(response);
        this.router.navigate(['users/list']);
      });
  }
}
