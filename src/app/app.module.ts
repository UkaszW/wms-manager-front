import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";

import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatSnackBarModule, MatPaginatorModule, MatTableModule,
  MatDialogModule, MatOptionModule, MatSelectModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {WarehouseComponent} from './warehouse/warehouse.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LogoutComponent} from './logout/logout.component';
import {MatMenuModule} from "@angular/material/menu";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WarehouseAddComponent } from './warehouse-add/warehouse-add.component';
import { ItemComponent } from './item/item.component';
import { WarehouseEditComponent } from './warehouse-edit/warehouse-edit.component';
import { ItemAddDialogComponent } from './item-add-dialog/item-add-dialog.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehouseComponent,
    LoginComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WarehouseAddComponent,
    ItemComponent,
    WarehouseEditComponent,
    ItemAddDialogComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [ItemAddDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
