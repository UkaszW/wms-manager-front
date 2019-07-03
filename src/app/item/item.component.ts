import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'quantity', 'status', 'warehouse', 'action'];
  items: Array<any>;

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getItems().subscribe(data => {
      this.items = data
    })
  }

  delete(id) {
    this.httpClientService.deleteItemBy(id).toPromise().then(data => {
      location.reload();
    });
  }

}
