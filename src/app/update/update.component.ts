import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  @Input()
  trackId

  result : string

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  updateComment(comment){
    this.result = "http://localhost:8099/api/v1/track/"+this.trackId;
    this.http.put(this.result,{
      "trackComments" : comment
    })
    .subscribe(data  => {
      console.log("PUT Request is successful ", data);
    },
    error  => {
    console.log("Error", error);
  });
}


}
