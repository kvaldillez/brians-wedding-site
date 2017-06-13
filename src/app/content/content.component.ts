import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	serverId: number = 10;
	serverStatus: string = "offline";
	serverName = "";
	allowNewServer = false;
	serverCreationStatus = 'no server created';

  constructor() { 
  	setTimeout(() => {
  		this.allowNewServer = true;
  	},2000)
  }

  ngOnInit() {
  }

  getServerStatus(){
		return this.serverStatus;
	}

	onCreateServer(){
		this.serverCreationStatus = 'server was created!';
	}

	onUpdateServerName(event: Event){
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
