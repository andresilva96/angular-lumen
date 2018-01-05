import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {LocalStorageService} from "./services/local-storage.service";
import {JwtTokenService} from "./services/jwt-token.service";
import { UserListComponent } from './users/user-list/user-list.component';
import {AuthService} from "./services/auth.service";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: LoginComponent},
    {path: 'users/list', component: UserListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LocalStorageService,
    JwtTokenService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
