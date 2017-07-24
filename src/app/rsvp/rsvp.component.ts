import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['../app.component.css','./rsvp.component.css']
})
export class RsvpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('you are on RSVP');
    //alert('you are being redirected!');
    //this.redirectToThankYou();
  }

  redirectToThankYou(){
    this.router.navigate(['/photos']);
  }

}
