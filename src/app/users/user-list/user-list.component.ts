import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HeadersService} from "../../services/headers.service";
import {JwtTokenService} from "../../services/jwt-token.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private usuarios: any;
  constructor(private http: HttpClient, private options: HeadersService, private jwtToken: JwtTokenService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const headers = this.options.headers();
    this.http
      .get('http://localhost:8080/api/users', {headers})
      .subscribe(
    response => {
            this.usuarios = response;
          },
  error => {
          this.http
            .post('http://localhost:8080/api/auth/refresh_token', {}, {headers})
            .subscribe(response => this.jwtToken.setToken(response));
        }
      );
  }
}
