import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import {HttpClient} from '@angular/common/http';
import { Profile } from '../models/profile';
import { RouterModule, Routes, RouterLink } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  profiles: Profile[] = [];
  profile: Profile;

  constructor(private profileservice:ProfileserviceService, private http: HttpClient) {
    this.profile = new Profile()
  }

  ngOnInit() {
    this.loadMatches();
  }

  loadMatches(){
    this.profileservice.getMatches("Jon Snow").subscribe(res => {
      this.profiles = res as Profile [];
      console.log(this.profiles);
    });
  }

}
