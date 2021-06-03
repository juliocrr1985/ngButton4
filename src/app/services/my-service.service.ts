import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService  {

  constructor(private http:HttpClient) { }

  API:string = 'http://localhost:3000/';

  getTitle(){
    return this.http.get<string>(`${this.API}title`);
  }
}
