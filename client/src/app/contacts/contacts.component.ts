import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../services/profileservice.service';
import { Profile } from '../models/profile';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  users : Profile[] = [];

  constructor( private profiles : ProfileserviceService ) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(){
    this.profiles.getProfiles().subscribe(res => {
      this.users = res;
    });
  }
}
