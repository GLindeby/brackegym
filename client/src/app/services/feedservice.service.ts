import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  url = "http://localhost:3000/api/feed/";

  constructor(private http: HttpClient) { }
  ngOnInit() {  }

  getFeed(){
    return this.http.get(this.url);
  }

  postMessage(message){
    var msg = JSON.stringify(message);
    this.http.post(this.url + msg, "").subscribe(res => {
      console.log(res);
    })
  }
}
