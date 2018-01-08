import { Injectable } from '@angular/core';
import {JwtTokenService} from "./jwt-token.service";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class HeadersService {
    constructor(private jwtToken: JwtTokenService) { }

    headers() {
        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${this.jwtToken.getToken()}`)
            .append('Content-Type', 'application/json');
        return headers;
    }
}
