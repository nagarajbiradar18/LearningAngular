import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
   providedIn: 'root'

})
export class UserListService {

  
 // public dataStart: number = 0;
  //public dataLimit: number = 10;
  public _userURL: string = 'https://jsonplaceholder.typicode.com/users?_start=0&_limit=10';
 
 
  constructor(private httpClient: HttpClient) { }

  public getAllUsers() {
   return this.httpClient.get(this._userURL)
  }


  
}
