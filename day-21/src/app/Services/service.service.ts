import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { customer } from '../customer';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _url:string = environment.url;
  constructor(private http:HttpClient) { } 
  getCustomer():Observable<customer[]> {
    return this.http.get<customer[]>(this._url)
  }
 
}
