import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import {HttpClient} from '@angular/common/http';
import {Profile} from '../models/profile';
//import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { concat } from 'rxjs/internal/observable/concat';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  numbers = [];

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
    console.log(this.profile.rating);
    this.numbers = Array(5);
    for(var i = 0; i<this.numbers.length; i++){
      if((i+1) <= +this.profile.rating){
        this.numbers[i] = 1;
      }else{
        this.numbers[i] = 0;
      }
    }
    console.log(this.numbers);
    /*this.numbers = Array(5).fill(0).map((x,i)=>{
      numbers
    }
      +(this.profile.rating)
    );
    console.log(this.numbers);
    });*/
    });
  }

  loadProfile(){
    this.profileservice.getProfiles().subscribe(res => {
      this.profile = res[0] as Profile;
      console.log(this.profile);
    });
  }
}
