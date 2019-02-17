import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Order } from './mock/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  URL_API = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  public getOrders(): Promise<Order[]> {
    return this.http.get( this.URL_API + '/orders')
      .toPromise()
      .then( (response: Response) => response.json() )
  }
}
