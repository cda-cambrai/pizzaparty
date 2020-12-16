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
}
