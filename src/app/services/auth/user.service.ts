import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UserService {
   url=environment.baseUrl
  constructor(private http:HttpClient) { }

  public register(user:any){
    return this.http.post(`${this.url}/register`,user)
  }
}
