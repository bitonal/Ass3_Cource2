import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Item } from './item.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()  item: Item | any;
  @Output() onitemAdded : EventEmitter<Item> = new EventEmitter();
  // @Output() onFormChange: EventEmitter<any>

  constructor() { }

  ngOnInit(): void {this.onitemAdded ;}

  addToCart(item: Item) {
    console.log(`item ${item.name} ditambahkan di keranjang`);
    this.onitemAdded.emit(item);

}}
