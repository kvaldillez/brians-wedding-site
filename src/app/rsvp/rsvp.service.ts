import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RsvpService {
  constructor(private http: Http){}

  storeRsvp(rsvp: {}, location: number){
    return this.http.put('https://INSERT_DATABASE_ID.firebaseio.com/data/'+location+'.json', rsvp);
  }

  getRsvp(firstName,lastName){
    return this.http.get('https://INSERT_DATABASE_ID.firebaseio.com/data.json')
      .map(
        (response: Response) => {
          const data = response.json();
          var index = 0;
          for (const rsvp of data){
            for (const guest of rsvp.guests){
              if(firstName.toLowerCase().replace(/[^A-Z0-9]/ig, "") == guest.firstName.toLowerCase() &&
                lastName.toLowerCase().replace(/[^A-Z0-9]/ig, "") == guest.lastName.toLowerCase()){
                rsvp['location'] = index;
                return rsvp;
              }
            }
            index++;
          }
          return;
        }
      );
  }
}
