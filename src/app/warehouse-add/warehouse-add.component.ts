import {Component, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {Router} from "@angular/router";

export class Warehouse {
  constructor(
    public code: string,
    public name: string,
    public address: Address,
  ) {
  }
}

export class Address {
  constructor(
    public city: string,
    public number: number,
    public postalCode: string,
    public street: string,
  ) {
  }
}

@Component({
  selector: 'app-warehouse-add',
  templateUrl: './warehouse-add.component.html',
  styleUrls: ['./warehouse-add.component.css']
})
export class WarehouseAddComponent implements OnInit {

  code: string;
  name: string;
  city: string;
  number: number;
  postalCode: string;
  street: string;

  constructor(private router: Router, private httpClientService: HttpClientService) {
  }

  ngOnInit() {
  }

  add() {
    let address = new Address(this.city, this.number, this.postalCode, this.street);
    let warehouse = new Warehouse(this.code, this.name, address);
    this.httpClientService.addWarehouse(warehouse).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['warehouse'], { queryParams: {'refresh': 1}});
  }

}
