import { Component } from '@angular/core';
import { Pizza } from './pizza';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pizza Party';
  // maSuperPizza est "typée" avec la classe Pizza
  maSuperPizza: Pizza = {
    id: 1,
    name: '4 fromages',
    price: 12,
    image: '4-fromages.jpg'
  };
}
