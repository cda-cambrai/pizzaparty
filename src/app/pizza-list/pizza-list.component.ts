import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  // maSuperPizza est "typée" avec la classe Pizza
  maSuperPizza: Pizza;

  // On peut typer un tableau...
  mesPizzas: Pizza[];

  // On peut créer une fonction / une méthode
  onSelect(pizza: Pizza) {
    console.log(pizza);
    // Je vais modifier la valeur de maSuperPizza
    // this représente AppComponent
    this.maSuperPizza = pizza;
  }

  /**
   * Ce qu'on fait ici s'appelle l'injection de dépendance
   * On récupère l'instance d'une classe (PizzaService) dont
   * dépend notre PizzaListComponent
   */
  constructor(private pizzaService: PizzaService) { }

  /**
   * Ce code s'exécute quand le composant est initialisé
   * (dans le DOM) donc après le constructor
   */
  ngOnInit(): void {
    console.log(this.pizzaService.getPizzas());
    // Je récupère les pizzas du service
    this.mesPizzas = this.pizzaService.getPizzas();
  }

}
