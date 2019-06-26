import { Component, OnInit } from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class NotificationComponent implements OnInit {

  columnsToDisplay = ['message', 'creationDate'];
  expandedElement: Notification | null;
  notifications: Array<any>;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getNotification().subscribe(data => {
      this.notifications = data;
    })
  }

}

export interface Notification {
  action: any;
  type: any;
  objectId: number;
  message: string;
  source: any;
  destination: any;
  processed: boolean;
  accepted: boolean;
  comment: string;
  creationDate: any;
}
