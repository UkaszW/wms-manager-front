import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Injectable({
  providedIn: 'root'
})
export class MessagePrinterService {

  constructor(private snackBar: MatSnackBar) { }

  print(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top"
    });
  }
}
