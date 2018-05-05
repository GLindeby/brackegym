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
      Console.log(this.fullname);
      fullname: this.fullname,
    }
  }

  ngOnInit() {
  }
}
