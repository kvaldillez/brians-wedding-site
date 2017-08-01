import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RsvpService } from './rsvp.service';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['../app.component.css','./rsvp.component.css']
})
export class RsvpComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  @ViewChild('fs') mealForm: NgForm;
  defaultSelection = "chicken";
  user = {
    firstName: '',
    lastName: '',
    mealSelection: ''
  }
  submitted = false;

  constructor(private router: Router, private rsvpService: RsvpService) { }

  ngOnInit() {
    console.log('you are on RSVP');
    //alert('you are being redirected!');
    //this.redirectToThankYou();
  }

  redirectToThankYou(){
    this.router.navigate(['/photos']);
  }

  displayMealSelection(){
    this.submitted = true;
    this.user.firstName = this.signupForm.value.firstName;
    this.user.lastName = this.signupForm.value.lastName;
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onSubmit(){
    this.submitted = true;
    this.user.mealSelection = this.mealForm.value.mealSelection;
    console.log(this.mealForm);
    this.checkRsvp(this.user);
    this.mealForm.reset();
  }

  checkRsvp(user){
    this.rsvpService.storeRsvp(user)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
  }

}
