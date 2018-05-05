import { Component, OnInit } from '@angular/core';
import { FeedService} from '../services/feedservice.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-emergency-feed',
  templateUrl: './emergency-feed.component.html',
  styleUrls: ['./emergency-feed.component.css']
})

export class EmergencyFeedComponent implements OnInit {
  msg: string
  fullname: string;
  posts: Post[] = [];
  post: Post;
  interval: any;


  constructor(private feed: FeedService) {
    this.post = new Post();
  }

  ngOnInit() {
    this.interval = setInterval(() => {
        this.getMessages();
    }, 2000);
  }

  sendMessage(){
    const newMessage = {
      fullname: this.fullname,
      msg: this.msg
    }
      this.feed.postMessage(newMessage);
      console.log(newMessage);
  }

  getMessages(){
    this.feed.getFeed().subscribe(res => {
      this.posts = res;
      console.log(this.posts);
    });
  }


}
