import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  url = "http://localhost:3000/api/feed/";

  constructor(private http: Http) { }
  ngOnInit() {  }

  getFeed(){
    this.http.get(this.url).
    subscribe((data) => console.log(data));
   }

  postMessage(message){
    var msg = message.toString();
    console.log(message.fullname);
    //this.http.post(this.url + message, "");
  }
}
