import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../service/authentication.service";
import {MessagePrinterService} from "../service/message-printer.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  invalidLogin = false;
  hide = true;

  constructor(private router: Router, private authService: AuthenticationService, private messagePrinter: MessagePrinterService) {
  }

  ngOnInit() {
  }

  checkLogin() {
    if (this.authService.authenticate(this.username, this.password)) {
      this.router.navigate(['']);
      this.invalidLogin = false;
      this.messagePrinter.print('Login successful!', '')
    } else {
      this.invalidLogin = true;
      this.messagePrinter.print('Invalid username or password!', '')
    }
  }

}
