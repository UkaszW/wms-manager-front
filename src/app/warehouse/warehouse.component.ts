import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  warehouses: Array<any>;

  constructor(private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getAll().subscribe(data => {
        this.warehouses = data
      }
    );
  }

}
