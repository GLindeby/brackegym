import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : HttpClient) { }
  
  
  getProfiles(){  
    return this.http.get("http://localhost:3000/api/user/all");

  }
  addProfile(){

  }  
}

