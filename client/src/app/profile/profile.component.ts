import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';


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
    this.profileservice.getProfiles();
    //var data = this.profileservice.getProfiles();
    //console.log(data);
  }

}
