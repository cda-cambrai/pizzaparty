import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '../pizza';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.scss']
})
export class PizzaAddComponent implements OnInit {
  // pizza est la propriété (champ, variable)
  // Pizza est le type de la propriété
  pizza: Pizza = new Pizza(); // On prépare une instance "vide" d'une pizza (un objet)

  constructor(
    private pizzaService: PizzaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addPizza() {
    // On va appeller le service pour créer la pizza sur l'API
    this.pizzaService.createPizza(this.pizza).then(pizza => {
      console.log(pizza);
      // Redirection vers /pizzas
      this.router.navigate(['/pizzas']);
    });
  }

}
