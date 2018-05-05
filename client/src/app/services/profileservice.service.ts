import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileserviceService {

  constructor(private http : HttpClient) { }
  
  
  getProfiles(){  
    //return this.http.get("http://localhost:3000/api/user/all");//.subscribe((data) => data);
    //return this.http.get("http://localhost:3000/api/user/").subscribe();
    this.http.get("http://localhost:3000/api/user/all").subscribe(res => {
      console.log(res);
    })

  }
  addProfile(){

  }  
}

