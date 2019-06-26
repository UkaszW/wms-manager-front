import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {MessagePrinterService} from "../service/message-printer.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService, private messagePrinter: MessagePrinterService) {
  }

  ngOnInit() {
    this.messagePrinter.print('Logout successful!', '');
    this.authService.logOut();
    this.router.navigate(['']);
  }

}
