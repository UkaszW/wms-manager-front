import { Injectable } from '@angular/core';
import {HttpClientService} from "./http-client.service";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClientService: HttpClientService) { }

  countUnprocessed() {
    let result = 0;
    this.httpClientService.getNotification().subscribe(data => {
      for (let entry of data) {
        result++;
      }
    });
    return result;
  }
}

