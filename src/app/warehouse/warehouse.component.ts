import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  displayedColumns: string[] = ['code', 'name', 'address', 'action'];
  warehouses: Array<any>;

  constructor(private router: Router, private httpClientService: HttpClientService) {
  }

  ngOnInit() {
    this.httpClientService.getWarehouses().subscribe(data => {
        this.warehouses = data
      }
    );
  }

  delete(id) {
    this.httpClientService.deleteWarehouseBy(id).toPromise().then(data => {
      location.reload();
    });
  }

}
