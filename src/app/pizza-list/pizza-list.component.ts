import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  // maSuperPizza est "typée" avec la classe Pizza
  maSuperPizza: Pizza;

  // On peut typer un tableau...
  mesPizzas: Pizza[] = [
    { id: 1, name: 'Reine', price: 12, image: 'reine.jpg' },
    { id: 2, name: '4 fromages', price: 13, image: '4-fromages.jpg' },
    { id: 3, name: 'Orientale', price: 11, image: 'orientale.jpg' },
    { id: 4, name: 'Cannibale', price: 9, image: 'cannibale.jpg' },
  ];

  // On peut créer une fonction / une méthode
  onSelect(pizza: Pizza) {
    console.log(pizza);
    // Je vais modifier la valeur de maSuperPizza
    // this représente AppComponent
    this.maSuperPizza = pizza;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
