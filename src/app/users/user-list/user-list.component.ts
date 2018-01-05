import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtTokenService} from '../../services/jwt-token.service';
import {Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<Object> = [];
  constructor(private http: HttpClient, private jwtToken: JwtTokenService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
      const headers = new HttpHeaders();
      headers.set('Authorization', `Bearer ${this.jwtToken.getToken()}`);
      headers.set('Content-Type', 'application/json');
      this.http
          .get('http://localhost:8080/api/users', {headers})
          .subscribe(response => console.log(response));
  }
}
