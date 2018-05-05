import { Component, OnInit } from '@angular/core';
import {FeedService} from '../services/feedservice.service';

@Component({
  selector: 'app-emergency-feed',
  templateUrl: './emergency-feed.component.html',
  styleUrls: ['./emergency-feed.component.css']
})
export class EmergencyFeedComponent implements OnInit {
  msg: string
  fullname: string;

  constructor(private feed : FeedService) { }

  sendMessage(){
    const newMessage = {
      fullname: this.fullname,
      msg: this.msg
    }
      this.feed.postMessage(newMessage);
  }

  

  ngOnInit() {
  }

}
