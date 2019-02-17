import { Injectable,  } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Order } from './mock/order.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  URL_API = 'http://localhost:3000';

  constructor(
    private http: Http
  ) { }

  public getOrders(): Observable<Order[]> {
    return this.http.get( this.URL_API + '/orders')
    .pipe(
      map( ( response: Response ) => {
        return response.json();
      })
    )
  }
}
