import { Event } from "./event.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Injectable} from "@angular/core";




const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':'application/json'})
};

@Injectable()
export class EventService {
// will be filled with methods


// events is and is an array of Event class instances


  private eventsUrl = '/api/events';  // URL to web api


  constructor (private http: HttpClient) {
  }

  // addEvent(event: Event){
  // this.events.push(event);
  // console.log(this.events);

  // public addEvent(event: Event): Observable<Event>{
  // let body = JSON.stringify(event);
  // return this.http.post<Event>(this.eventsUrl, body, httpOptions);
  // }
  public addEvent (event: Event) {
    this.http.post<Event>(this.eventsUrl, event, httpOptions).subscribe(data => {
      console.log(data);
    });

  }

}
  // this.http.get('https://api.dldldldld/didid').subscribe(data => {
  // console.log(data)} )





