import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css','./home.component.css']
})
export class HomeComponent implements OnInit {
	serverId: number = 10;
	serverStatus: string = "offline";
	serverName = "Test server";
	userName = "";
	allowNewServer = false;
	serverCreationStatus = 'no server created';
	serverCreated = false;
	servers = ['Testserver', 'Testserver 2'];

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},2000);
  	this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit() {
  }

  getServerStatus(){
		return this.serverStatus;
	}

getColor(){
	return this.serverStatus === "online" ? "green" : "red";
	}

	onCreateServer(){
	this.serverCreated = true;
	this.servers.push(this.serverName);
		this.serverCreationStatus = 'server was created! Name is ' + this.serverName;
	}

	onUpdateServerName(event: Event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
