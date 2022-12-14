import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
    });
  }

  ngOnInit() {
    this.getCoffees();
  }

  getCountBlend() {
    let count = 0
    for (let i = 0; i < this.coffees.length; i++) {
      const coffee = this.coffees[i];

      if (coffee.tipo === 'Blend') {
        count += 1
      }
    }
    return count
  }

  getCountOrigen() {
    let count = 0
    for (let i = 0; i < this.coffees.length; i++) {
      const coffee = this.coffees[i];

      if (coffee.tipo === 'Café de Origen') {
        count += 1
      }
    }
    return count
  }

}
