import {Component, Inject, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {ActivatedRoute} from "@angular/router";
import { MatDialog, MatDialogRef } from '@angular/material';
import {ItemAddDialogComponent} from "../item-add-dialog/item-add-dialog.component";

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  warehouse: any;
  id: number;
  displayedColumns: string[] = ['code', 'name', 'quantity', 'status'];
  itemAddDialogRef: MatDialogRef<ItemAddDialogComponent>;

  constructor(private dialog: MatDialog, private route: ActivatedRoute, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id')
    });
    this.httpClientService.getWarehousesBy(this.id).subscribe(data => {
      this.warehouse = data;
    });
  }

  save() {

  }

  openAddItemDialog() {
    this.itemAddDialogRef = this.dialog.open(ItemAddDialogComponent, {
      data: {warehouse: this.warehouse}
    });


  }

}

