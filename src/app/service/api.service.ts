import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http : HttpClient ) { }

  getProduct(): Observable<any>{
    return this.http.get("./assets/json/products.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  addProduct(): Observable<any>{
    return this.http.get("./assets/json/products.json")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
