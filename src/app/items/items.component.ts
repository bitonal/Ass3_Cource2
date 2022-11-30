import { Component, OnInit } from '@angular/core';
import { Item } from '../item/item.module';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  totalPrice: number;
  

  constructor() { 
    this.items = [
      new Item("IphoneX", 4000),
      new Item("Dell", 3000),
      new Item("Toshiba", 10000),
      new Item("Samsung", 5000)
    ];
    this.totalPrice = 0;}

  ngOnInit(): void {}
  syncTotalPrice(item: Item) {
    this.totalPrice += item.price;}

}
