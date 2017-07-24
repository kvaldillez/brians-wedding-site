import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['../app.component.css','./wedding.component.css']
})
export class WeddingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
