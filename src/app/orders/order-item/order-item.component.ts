import { Component, Input } from '@angular/core';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {
  @Input() order = new Order();



}
