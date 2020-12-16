import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pizza } from '../pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  /**
   * Dans PizzaService, j'ai besoin du service HttpClient pour
   * faire les requêtes sur mon API
   */
  constructor(private http: HttpClient) { }

  /**
   * Permet de récupérer les pizzas sur notre API...
   * Nous renvoie une promesse d'un ensemble de pizzas
   */
  getPizzas(): Promise<Pizza[]> {
    // Quand on fait une requête sur une API, on doit faire une promesse
    // On nous promet de nous renvoyer une réponse (temps de latence possible...)
    // Une promesse est un code asynchrone, c'est à dire que le code peut s'exécuter
    // plus tard...

    return this.http.get<Pizza[]>('http://localhost:3000/pizzas').toPromise();
  }

  getPizzasSlowly(): Promise<Pizza[]> {
    // Ici, je simule une connexion lente sur mon API
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getPizzas()), 500);
    });
  }

  /**
   * Permet de créer une Pizza sur mon API
   */
  createPizza(pizza: Pizza): Promise<Pizza> {
    // On envoie la pizza à l'API, et l'API nous promet de créer cette Pizza
    // Si c'est le cas, elle nous renvoie la pizza avec son ID

    return this.http.post<Pizza>('http://localhost:3000/pizzas', pizza).toPromise();
  }

  createPizzaSlowly(pizza: Pizza): Promise<Pizza> {
    // Ici, je simule une connexion lente sur mon API
    return new Promise(resolve => {
      setTimeout(() => resolve(this.createPizza(pizza)), 2000);
    });
  }
}
