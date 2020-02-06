import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  postBtnState(btnState: boolean) {
    return this.http.post('http://localhost:3000/btn-state', {'btn-state': btnState});
  }
}
