import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {NotificationService} from "../service/notification.service";
import {HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  unprocessedNotification: number;

  constructor(private authService: AuthenticationService, private httpClientService: HttpClientService) { }

  ngOnInit() {
    let result = 0;
    this.httpClientService.getUnprocessedNotification().subscribe(data => {
      for (let entry of data) {
        result++;
      }
      this.unprocessedNotification = result;
    })
  }

}
