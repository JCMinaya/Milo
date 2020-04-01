import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, url: '/dashboard/products', backgroundImage: 'assets/img/office-supplies.jpg'},
    {text: 'Two', cols: 1, rows: 2, url: '/dashboard/reports', backgroundImage: 'assets/img/reports.png'},
    {text: 'Three', cols: 2, rows: 2, url: '/dashboard/orders', backgroundImage: 'assets/img/orders1.jpg'},
    {text: 'Four', cols: 2, rows: 2, url: '/dashboard/customers', backgroundImage: 'assets/img/customers.jpg'}
  ];
  constructor() { }
  
  ngOnInit() {
  }
  
}

export interface Tile {
  backgroundImage: string;
  cols: number;
  rows: number;
  text: string;
  url: string;
}