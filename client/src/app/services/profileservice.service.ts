import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : Http) { }
  
  
  getProfiles(){  
    
    return this.http.get("http://localhost:3000/api/user/");

  }
  addProfile(){
  
  }  
}

