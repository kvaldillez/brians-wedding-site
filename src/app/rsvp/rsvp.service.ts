import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RsvpService {
  constructor(private http: Http){}

  storeRsvp(rsvp: {}){
    return this.http.post('https://dnb2017-d9f24.firebaseio.com/data.json', rsvp)
  }
}
