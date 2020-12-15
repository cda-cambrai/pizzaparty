import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  // Par défaut, le menu est fermé
  isCollapsed = false;

  toggleCollapseNavbar() {
    console.log('test');

    // Si le menu est fermé
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    } else {
      this.isCollapsed = false;
    }
    // Raccourci par rapport au if
    // this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
