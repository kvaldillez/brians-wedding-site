import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpModule, Response } from '@angular/http';

import { RsvpService } from './rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['../app.component.css','./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  @ViewChild('f') findRsvpForm: NgForm;
  @ViewChild('fs') submitRsvpForm: NgForm;

  user = {
    firstName: "",
    lastName: "",
    mealSelection: ""
  }
  guests = [];
  submitted = false;
  responded = false;
  foundRsvp = false;
  constructor(private router: Router, private rsvpService: RsvpService) { }

  ngOnInit() {
    console.log('you are on RSVP');
    //alert('you are being redirected!');
    //this.redirectToThankYou();
  }

  redirectToThankYou(){
    this.router.navigate(['/photos']);
  }

  onSubmit(){
    var index = 0;
    for (const guest of this.guests){
      guest.rsvp = this.submitRsvpForm.value[index].rsvpSelection;
      console.log(this.submitRsvpForm.value.rsvpSelection);
      guest.mealSelection = this.submitRsvpForm.value[index].mealSelection;
      index++;
    }
    console.log(this.guests);
    console.log(this.submitRsvpForm.value);
    this.submitRsvp(this.guests);
    this.findRsvpForm.reset();
    this.submitRsvpForm.reset();
  }

  checkRsvp(){
    this.user.firstName = this.findRsvpForm.value.firstName;
    this.user.lastName = this.findRsvpForm.value.lastName;
    console.log(this.findRsvpForm);
    this.rsvpService.getRsvp(this.user.firstName,this.user.lastName)
      .subscribe(
        (response) => {
          if(response != null){
            this.guests = response.guests;
            this.foundRsvp = true;
            console.log(response);
            if(response.responded == "No"){
              this.responded = false;
            } else {
              this.responded = true;
            }
          } else {
            this.foundRsvp = false;
          }
          this.submitted = true;
        },
        (error) => console.log(error)
      );
  }

  submitRsvp(guests){
    this.rsvpService.getRsvp(guests[0].firstName,guests[0].lastName)
      .subscribe(
        (response) => {
          if(response != null){
            if(response.responded == "No"){
              response.responded = "Yes";
              response.guests = guests;
              console.log(response);
              var location = response.location;
              delete response.location;
              this.rsvpService.storeRsvp(response,location)
                .subscribe(
                  (response) => console.log(response),
                  (error) => console.log(error)
                );
            }
          }
          this.submitted = true;
        },
        (error) => console.log(error)
      );
  }

}
