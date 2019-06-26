import {Component, Inject, OnInit} from '@angular/core';
import {HttpClientService} from "../service/http-client.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogData {
  warehouse: any;
}

class Item {
  constructor(
    public code: string,
    public name: string,
    public quantity: number,
    public status: any,
  ) {
  }
}

@Component({
  selector: 'app-item-add-dialog',
  templateUrl: './item-add-dialog.component.html',
  styleUrls: ['./item-add-dialog.component.css']
})
export class ItemAddDialogComponent implements OnInit {

  items: Array<any>;
  selectedItem: any;
  quantity: any;

  constructor(private httpClientService: HttpClientService, private dialogRef: MatDialogRef<ItemAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  ngOnInit() {
    this.httpClientService.getItems().subscribe(data => {
      this.items = data
    })
  }

  save() {
    let id = this.data.warehouse.id;
    let item = new Item(this.selectedItem.code, this.selectedItem.name, this.quantity, this.selectedItem.status);
    this.httpClientService.addItemToWarehouse(id, item).toPromise().then(data => {
      this.dialogRef.close('');
      location.reload();
    });
  }

}
