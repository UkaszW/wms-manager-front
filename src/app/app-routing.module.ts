import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WarehouseComponent} from "./warehouse/warehouse.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {HomeComponent} from "./home/home.component";
import {WarehouseAddComponent} from "./warehouse-add/warehouse-add.component";
import {ItemComponent} from "./item/item.component";
import {WarehouseEditComponent} from "./warehouse-edit/warehouse-edit.component";
import {NotificationComponent} from "./notification/notification.component";
//import {AuthGuardService} from "./service/auth-guard.service";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'warehouse', component: WarehouseComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'warehouse-add', component: WarehouseAddComponent},
  {path: 'warehouse-edit/:id', component: WarehouseEditComponent},
  {path: 'item', component: ItemComponent},
  {path: 'notification', component: NotificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
