import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";
@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : Http) { }
  
  
  getProfiles(){

    console.log();
    
    return this.http.get("http://localhost:3000/api/user/").
      map(response => response.json());
      
    
  }
  addProfile(){
  
  }  
}

