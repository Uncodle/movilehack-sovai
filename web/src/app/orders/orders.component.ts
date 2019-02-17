import { Component, OnInit } from '@angular/core';

import { Order } from '../mock/order.model';
import { OrdersService } from '../orders.service';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  
  private orders: Order[];

  constructor(
    private ordersService: OrdersService
  ) { }

  ngOnInit() {
    this.ordersService.getOrders()
    .subscribe( ( orders: Order[] ) => {
      this.orders = orders;
    });
  } 
}
