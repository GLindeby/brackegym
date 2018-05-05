import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-makeprofile',
  templateUrl: './makeprofile.component.html',
  styleUrls: ['./makeprofile.component.css']
})
export class MakeprofileComponent implements OnInit {

  fullname: string;

  constructor() { }

  addUser(){
    const newUser = {
      fullname: this.fullname
    }
    console.log(this.fullname);
  }

  ngOnInit() {
  }
}
