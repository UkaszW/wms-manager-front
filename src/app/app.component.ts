import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "./service/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isAuthenticated: boolean;

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isUserLoggedIn();
  }


}
