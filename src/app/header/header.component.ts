import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['../app.component.css','./header.component.css']
})

export class HeaderComponent implements OnInit{

	ngOnInit() {

	}

	toggleMobileNav() {
		this.unfade(document.getElementById('menuOverlay'));
		document.getElementById("mobileNav").style.width = "250px";
	}

	closeMenu() {
		this.fade(document.getElementById('menuOverlay'));
		document.getElementById("mobileNav").style.width = "0";
	}

	fade(element) {
		var op = 1;  // initial opacity
		var timer = setInterval(function () {
			if (op <= 0.1){
				clearInterval(timer);
				element.style.display = 'none';
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op -= op * 0.1;
		}, 5);
  }

	unfade(element) {
		var op = 0.1;  // initial opacity
		element.style.display = 'block';
		var timer = setInterval(function () {
			if (op >= .6){
				clearInterval(timer);
			}
			element.style.opacity = op;
			element.style.filter = 'alpha(opacity=' + op * 100 + ")";
			op += op * 0.1;
		}, 5);
	}

}
