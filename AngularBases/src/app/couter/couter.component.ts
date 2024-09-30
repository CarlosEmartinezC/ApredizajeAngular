import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Couter: {{counter}}</h3>
<button (click)="increaseBy(counter)">+1</button>
<button (click)="resetby(counter)">reset</button>
<button (click)="decreaseBy(counter)">-1</button>
  `
})

export class CounterComponent implements OnInit {
  public counter: number = 10
  constructor() {

  }

  ngOnInit() {

  }
  increaseBy(value: number): void {
    this.counter += 1

  }

  decreaseBy(value: number): void {
    this.counter -= 1

  }
  resetby(value: number): void {
    this.counter = 10
  }




}


