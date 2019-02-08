import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MuzixService {
 

  url;
  constructor( private http:HttpClient) { 

  }
  getMuzix(val:String){
      this.url = "http://ws.audioscrobbler.com/2.0/?method=track.search&track=" + val + "&api_key=d155bfe4da8047da2caf54a501ac23b0&format=json";
       return this.http.get(this.url);
    
    }
    getWishlistMuzix(){
      return this.http.get("http://localhost:8099/api/v1/tracks")
    }
  
}
