import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;

  constructor(private profileservice:ProfileserviceService, private http: HttpClient) { 
    this.profile = new Profile();
  }
    
  ngOnInit() {
    this.loadProfile();
  }
  test(){
    this.profileservice.getProfiles().subscribe(res => {
      console.log(res);
    });
  }
  
  loadProfile(){
    this.profileservice.getProfiles().subscribe(res => {
      this.profile = res[0];
      console.log(this.profile);
    });
  }
}
