import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bookMySeat';
  rows = 10;
  cols = 10;
  data = []
  selectedMovie;
  maxTickets = 5;

  moviesAvailable = [
    'kantara', 'head', 'rob', 'jsadcb'
  ]

  selectedSeat = []
  ticketList: number[];
  numberOfTickets;


  constructor() {
    this.ticketList = Array(this.maxTickets).fill(x => {
      return x
    }).map((x, i) => i);

  }

  ngOnInit() {
    this.init();
  }

  init() {
    for (let i = 0; i < this.rows; i++) {
      this.data.push([])
      for (let j = 0; j < this.cols; j++) {
        this.data[i].push({
          selected: false,
          occupied: false
        })
      }
    }
    this.getOccupied();

    console.log('data', this.data);

  }

  getOccupied() {
    const occupiedSeats = [{row: 2, col: 3} , {row: 4, col: 5} , {row: 1, col: 6} , {row: 5, col: 7} , {row: 1, col: 6} , {row: 1, col: 7} , {row: 7, col: 2} , {row: 4, col: 7} , {row: 2, col: 0} , {row: 0, col: 4} , {row: 7, col: 8} , {row: 4, col: 7}  ];
    occupiedSeats.forEach(element => {
      this.data[element.row][element.col].occupied = true;
    });
  }

  selectSeat(row, col, seat) {
    // seat.selected = !seat.selected;
    console.log('row', row, 'col', col, 'seat', seat, this.data[row][col])
    let counter = 0;
    this.selectedSeat = [];
    for (let index = 0; index < this.numberOfTickets; index++) {
      // this.data[row][col + counter++].selected = true;
      this.selectedSeat.push({ row: row, col: (col + counter++)})
    }
  }

  isSelected(row, col) {
    return _.some(this.selectedSeat, { row: row, col: col });
  }


}
