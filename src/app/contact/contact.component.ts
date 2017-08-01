import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css','./contact.component.css']
})
export class ContactComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  //onSubmit(form: NgForm){
  //    console.log(form);
  //}

  onSubmit(){
    console.log(this.signupForm);
  }

}
