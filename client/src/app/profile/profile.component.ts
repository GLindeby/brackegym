import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';
//import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;

  constructor(private profileservice:ProfileserviceService, private http: HttpClient, private route: ActivatedRoute,
    private router: Router,) {
    this.profile = new Profile();
  }

  ngOnInit() {
    var name;
    this.route.params.subscribe(params => {
      name = params['name']; 
   });
   // Load profile with name given as argument
   this.profileservice.getProfile(name).subscribe(res => {
    this.profile = res[0] as Profile;
    console.log(this.profile);
    });
  }

  loadProfile(){
    this.profileservice.getProfiles().subscribe(res => {
      this.profile = res[0] as Profile;
      console.log(this.profile);
    });
  }
}
