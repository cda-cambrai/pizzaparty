import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';
import { Game } from '../game';

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
    // Remonter en haut de la fenêtre
    window.scrollTo(0, 0);
  }

  /**
   * Ce qu'on fait ici s'appelle l'injection de dépendances
   * On récupère l'instance d'une classe (PizzaService) dont
   * dépend notre PizzaListComponent
   */
  constructor(private pizzaService: PizzaService) { }

  /**
   * Ce code s'exécute quand le composant est initialisé
   * (dans le DOM) donc après le constructor
   */
  ngOnInit(): void {
    /*let self = this;
    this.pizzaService.getPizzas().then(function (pizzas) {
      console.log(pizzas);
      self.mesPizzas = pizzas;
      console.log(self);
    });*/

    // On appelle la méthode getPizzas du service pizzaService qui nous renvoie une promesse
    // Suite à la résolution de la promesse (then), on a un tableau de pizzas
    // On dit ensuite que mesPizzas correspond à ce tableau
    // La syntaxe avec => est appelée arrow function, c'est un raccourci et cela permet de conserver
    // le this (qui est donc PizzaListComponent)
    this.pizzaService.getPizzas().then(pizzas => {
      this.mesPizzas = pizzas;
    });

    // On peut créer des instances différentes à partir d'une classe
    // Chaque instance a ses propres données
    var game1 = new Game('Cyberpunk 2077', 'PC');
    var game2 = new Game('GTA V', 'PC');
    console.log(game1);
    console.log(game2.getInfos());
  }

}
