import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : Http) { }
  
  
  getProfiles(){  
    return this.http.get("http://localhost:3000/api/user/all");//.subscribe((data) => data);
    //return this.http.get("http://localhost:3000/api/user/").subscribe();

  }
  addProfile(){

  }  
}

