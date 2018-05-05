import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import {Http} from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileservice:ProfileserviceService) { }

  ngOnInit() {
  }
  test(){
    this.profileservice.getProfiles().subscribe(data => console.log(data));
    //var data = this.profileservice.getProfiles();
    //console.log(data);
  }

}
