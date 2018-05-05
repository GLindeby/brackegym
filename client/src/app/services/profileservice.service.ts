import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : HttpClient) { }
  
  
  getProfiles(){  
    
    return this.http.get("http://localhost:3000/api/user/all");

  }
  addProfile( p: Profile ){
    
    this.http.post("Http://localhost:3000/api/user/" + JSON.stringify(p), "").subscribe(
      res => {
        console.log(res);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error),
        console.log(err.name),
        console.log(err.message),
        console.log(err.status)
      }
    );
    
  }  
}

