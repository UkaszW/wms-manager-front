import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  public API = '//localhost:8090/api/v1';
  public WAREHOUSE_API = this.API + '/warehouse';
  public ITEM_API = this.WAREHOUSE_API + '/item';
  public NOTIFICATION_API = this.API + '/event';

  constructor(private http: HttpClient) {
  }

  getWarehouses(): Observable<any> {
    return this.http.get(this.WAREHOUSE_API + '/all');
  }

  getWarehousesBy(id): Observable<any> {
    return this.http.get(this.WAREHOUSE_API + '/' + id);
  }

  getNotification(): Observable<any> {
    return this.http.get(this.NOTIFICATION_API + '/all');
  }

  getUnprocessedNotification(): Observable<any> {
    return this.http.get(this.NOTIFICATION_API + '/unprocessed');
  }

  addWarehouse(warehouse): Observable<any> {
    return this.http.post(this.WAREHOUSE_API, warehouse);
  }

  addItemToWarehouse(id, item): Observable<any> {
    return this.http.put(this.WAREHOUSE_API + '/' + id, item);
  }

  getItems(): Observable<any> {
    return this.http.get(this.ITEM_API + '/all');
  }

  deleteWarehouseBy(id): Observable<any> {
    return this.http.delete(this.WAREHOUSE_API + '/' + id)
  }

  deleteItemBy(id): Observable<any> {
    return this.http.delete(this.ITEM_API + '/' + id)
  }

}
